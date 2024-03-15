import Globe from 'globe.gl';
import featureCollections from '../json/geo.json';
import { request, getCoordinates, numberWithCommas, formatDate } from './utils';
import TimeSeries from './TimeSeries';
import {
  GLOBE_IMAGE_URL,
  BACKGROUND_IMAGE_URL,
  GEOJSON_URL,
  CASES_API,
  WORLD_COUNTRIES,
} from './constants';
import * as d3 from 'd3';

// Globe container
const globeContainer = document.getElementById('globeViz');

const colorScale = d3.scaleSequentialPow(d3.interpolateYlOrRd).exponent(1 / 4);
const getVal = (feat) => {
  //console.log(feat);
  if (isNaN(feat.covidData.confirmed)){
    feat.covidData = {
      confirmed: 0,
    };
  }
  return feat.covidData.confirmed / 5000;
};

let world;
let clickCount = 0;
let lastClickTime = 0;
let clickedCoordinates;

const flagEndpoint = 'https://corona.lmao.ninja/assets/img/flags';
init();


function init() {

  world = Globe()(globeContainer)
    .globeImageUrl(GLOBE_IMAGE_URL)
    .backgroundColor('#02083a')
    //.backgroundImageUrl(BACKGROUND_IMAGE_URL)
    .showGraticules(false)
    .polygonAltitude(0.06)
    .polygonCapColor((feat) => colorScale(getVal(feat)))
    .polygonSideColor(() => 'rgba(0, 100, 0, 0.05)')
    .polygonStrokeColor(() => '#111')
    .polygonLabel(
      ({ properties: d, covidData: c }) => `
            <div class="card">
              <div class="container">
                 <span class="card-title"><b>${d.CNNAME}</b></span> <br />
                 <div class="card-spacer"></div>
                 <span>新闻数量: ${numberWithCommas(c.confirmed)}</span>  <br />
                 <hr />
                 <p>双击进入该国家页面..</p>
              </div>
            </div>
          `
    )
    .onPolygonHover((hoverD) =>world
        .polygonAltitude((d) => (d === hoverD ? 0.12 : 0.06))
        .polygonCapColor((d) =>
          d === hoverD ? 'steelblue' : colorScale(getVal(d))
        )
    )
    .polygonsTransitionDuration(150)
    .onPolygonClick((path, event, clickedCoordinates) => {
        const currentTime = new Date().getTime();
        const timeDifference = currentTime - lastClickTime;
    
        if (timeDifference < 300 && clickCount === 1) {
            // 触发双击事件
            console.log('点击了路径:', path);
            window.open('http://localhost:5173/area', '_blank');
            clickCount = 0;
        } else {
            // 记录第一次点击
            clickedCoordinates = event.coordinates;
            clickCount = 1;
        }
    
        lastClickTime = currentTime;
    });
  getCases();
}

let dates = [];
let countries = [];
let featureCollection = [];

// Play button
const playButton = document.querySelector('.play-button');
// Slider
const slider = document.querySelector('.slider');
// Slider date
const sliderDate = document.querySelector('#value-tooltip');

var CN_COUNTRIES={};
WORLD_COUNTRIES.forEach(element => {
  CN_COUNTRIES[element.name.toUpperCase()]=element.translation;
});
function toChina(name)
{
    var uname=name.toUpperCase();
    if(CN_COUNTRIES.hasOwnProperty(uname))
    {
      return CN_COUNTRIES[uname];
    }
    else{
      return name;
    }
}

async function getCases() {
  // 加载地球仪
  //countries = await request(CASES_API);
  countries = await TimeSeries.convertToCountryMapper();

  //featureCollection = (await request(GEOJSON_URL)).features;
  featureCollection = featureCollections.features;
  // document.querySelector('.title-desc').innerHTML =
  //   '选中国家查看具体疫情数据.';

  dates = Object.keys(countries.China);

  //Set slider values
  //slider.max = dates.length - 1;
  //slider.value = 0;
  playButton.disabled = false;
  updateCounters();
  updatePolygonsData();

  //updatePointOfView();
  //加载国家名称
  featureCollection.forEach(element => {
    element.properties.CNNAME=toChina(element.properties.NAME);
  });
}

const infectedEl = document.querySelector('#infected');
const deathsEl = document.querySelector('#deaths');
const recoveriesEl = document.querySelector('#recovered');
const updatedEl = document.querySelector('.updated');

function updateCounters() {
  // 加载时间轴
  //sliderDate.innerHTML = dates[slider.value];

  let totalConfirmed = 0;
  // let totalDeaths = 0;
  // let totalRecoveries = 0;

  Object.keys(countries).forEach((item) => {
    if (countries[item][dates[slider.value]]) {
      //console.log(countries[item]);
      const countryDate = countries[item][dates[slider.value]];
      totalConfirmed += +countryDate.confirmed;
      // totalDeaths += +countryDate.deaths;
      // totalRecoveries += countryDate.recoveries ? +countryDate.recoveries : 0;
    }
  });
}

function updatePolygonsData() {
  // 加载悬浮地图层
  for (let x = 0; x < featureCollection.length; x++) {
    const country = featureCollection[x].properties.NAME;
    if (countries[country]) {
      featureCollection[x].covidData = {
        confirmed: countries[country][dates[slider.value]],
        //deaths: countries[country][dates[slider.value]].deaths,
        //recoveries: countries[country][dates[slider.value]].recoveries,
      };
    } else {
      //console.log(toChina(country));
      featureCollection[x].covidData = {
        confirmed: 0,
        // deaths: 0,
        // recoveries: 0,
      };
    }
  }

  const maxVal = Math.max(...featureCollection.map(getVal));
  colorScale.domain([0, maxVal]);
  world.polygonsData(featureCollection);
  //console.log(dates);
}

async function updatePointOfView() {
  // Get coordinates
  try {
    const { latitude, longitude } = await getCoordinates();

    world.pointOfView(
      {
        lat: latitude,
        lng: longitude,
      },
      1000
    );
  } catch (e) {
    console.log('Unable to set point of view.');
  }
}

// Responsive globe
window.addEventListener('resize', (event) => {
  world.width([event.target.innerWidth]);
  world.height([event.target.innerHeight]);
});
if ('oninput' in slider) {
  slider.addEventListener(
    'input',
    function () {
      updateCounters();
      updatePolygonsData();
    },
    false
  );
}
function sliderDateMake(input) {
  // 使用split函数将输入字符串分割成年份和月份的数组
  var parts = input.split('-');
  
  if (parts.length === 2) {
    // 提取分割后的年份和月份
    var month = parts[0].length === 1 ? '0' + parts[0] : parts[0];
    var year = parts[1];
    
    // 构建新的格式化字符串
    var formattedDate = year + '-' + month;
    
    return formattedDate;
  } else {
    // 如果输入字符串不符合要求，则返回原始输入
    return input;
  }
}
let interval;
playButton.addEventListener('click', () => {
  if (playButton.innerText === '播放') {
    playButton.innerText = '暂停';
  } else {
    playButton.innerText = '播放';
    world.controls().autoRotate=false;
    clearInterval(interval);
    return;
  }

  // Check if slider position is max
  if (+slider.value === dates.length - 1) {
    slider.value = 0;
  }

  sliderDate.innerHTML = sliderDateMake(dates[slider.value]);
  world.controls().autoRotate=true;
  world.controls().autoRotateSpeed=4;
  interval = setInterval(() => {
    slider.value++;
    var event = new Event('input');
    slider.dispatchEvent(event);
    sliderDate.innerHTML = sliderDateMake(dates[slider.value]);
    updateCounters();
    updatePolygonsData();
    
    if (+slider.value === dates.length - 1) {
      playButton.innerHTML = '播放';
      world.controls().autoRotate=false;
      //world.controls().autoRotateSpeed=5;
      clearInterval(interval);
    }
  }, 400);
});