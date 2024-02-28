//import request from 'request';
import axios from 'axios';
import csv from 'csvtojson';
//const fs = require('fs');
import {
  WORLD_COUNTRIES,
} from './constants';
class TimeSeries {
  constructor() {
    this.timeSeriesURL =
      'http://localhost:5173/src/assets/csv';
    this.countryRenameMapper = {
      USA: 'United States of America',
      UAE: 'United Arab Emirates',
      UK: 'United Kingdom',
      "Cote d'Ivoire": 'Ivory Coast',
      DRC: 'Democratic Republic of the Congo',
      Bahamas: 'The Bahamas',
    };
  }

  toEnglish(name) {
    var CN_COUNTRIES = {};

    WORLD_COUNTRIES.forEach(element => {
      CN_COUNTRIES[element.translation] = element.name;
    });
    if (CN_COUNTRIES.hasOwnProperty(name)) {
      return CN_COUNTRIES[name];
    } else {
      return name;
    }
  }
  async convertToCountryMapper(jsonPath) {
    const response = await fetch('src/assets/json/dqr.json');
    const jsonData = await response.json();
    const countryMapper = {};
  
    for (const year in jsonData) {
      for (const month in jsonData[year]) {
        const dateKey = `${month}-${year}`;
  
        for (const country1 in jsonData[year][month]) {
          const country = this.toEnglish(country1);
          if (!countryMapper[country]) {
            countryMapper[country] = { };
          }
  
          if (!countryMapper[country][dateKey]) {
            countryMapper[country][dateKey] = 0;
          }
  
          countryMapper[country][dateKey] += jsonData[year][month][country1];
        }
      }
    }
    //console.log(countryMapper);
    return countryMapper;
  }
  
  async fetchTimeSeries() {
    const roundOffCoord = (coord) => parseFloat(coord.trim()).toFixed(5);

    let countryMapper = {};

    // Load confirmed cases
    const confirmedRows = await this.getConfirmedCases();
    const headers = Object.keys(confirmedRows[0]);

    // Load recovered sheet
    //const recoveredRows = await this.getRecovered();

    // Load recovered sheet
    //const deathRows = await this.getDeaths();

    confirmedRows.forEach((row) => {
      headers.slice(4).forEach((header) => {
        // Check if there's matching row in recovered csv
        // const recoveries = recoveredRows.find(
        //   (i) =>
        //     roundOffCoord(i.Lat) === roundOffCoord(row.Lat) &&
        //     roundOffCoord(i.Long) === roundOffCoord(row.Long)
        // );

        // Check if there's matching row in death csv
        // const deaths = deathRows.find(
        //   (i) =>
        //     roundOffCoord(i.Lat) === roundOffCoord(row.Lat) &&
        //     roundOffCoord(i.Long) === roundOffCoord(row.Long)
        // );

        const countryName = this.countryRenameMapper[row['Country/Region']]
          ? this.countryRenameMapper[row['Country/Region']]
          : row['Country/Region'];

        if (countryMapper[countryName]) {
          countryMapper[countryName][header] = {
            confirmed: Math.round(+row[header]) || 0,
            //recoveries: recoveries ? Math.round(+recoveries[header]) : 0,
            //deaths: deaths ? Math.round(+deaths[header]) : 0,
          };
        } else {
          countryMapper[countryName] = {
            [header]: {
              confirmed: Math.round(+row[header]) || 0,
              //recoveries: recoveries ? Math.round(+recoveries[header]) : 0,
              //deaths: deaths ? Math.round(+deaths[header]) : 0,
            },
          };
        }
      });
    });
    console.log(countryMapper);
    return countryMapper;
  }

  parseCSV(url) {
    return new Promise((resolve, reject) => {
      const rows = [];
      axios.get(url)
        .then(response => {
          csv()
            .fromString(response.data)
            .subscribe(
              (json) => {
                rows.push(json);
              },
              () => {
                reject();
              },
              () => {
                resolve(rows);
              }
            );
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  getConfirmedCases() {
    return this.parseCSV(
      `${this.timeSeriesURL}/time_series_19-covid-Confirmed.csv`
    );
  }
  // getRecovered() {
  //   return this.parseCSV(
  //     `${this.timeSeriesURL}/time_series_19-covid-Recovered.csv`
  //   );
  // }

  // getDeaths() {
  //   return this.parseCSV(
  //     `${this.timeSeriesURL}/time_series_19-covid-Deaths.csv`
  //   );
  // }
}
//module.exports = new TimeSeries();
export default new TimeSeries();
