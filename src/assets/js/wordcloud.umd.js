(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["wordcloud"] = factory(require("vue"));
	else
		root["wordcloud"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), (__WEBPACK_EXTERNAL_MODULE__203__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 118:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 203:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ entry_lib)
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ const setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/WordCloud1.vue?vue&type=template&id=75292540&scoped=true


const _withScopeId = n => (_pushScopeId("data-v-75292540"),n=n(),_popScopeId(),n)
const _hoisted_1 = { class: "cloud-bed" }
const _hoisted_2 = { class: "cloud-box" }
const _hoisted_3 = ["onClick"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("section", _hoisted_1, [
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_2, [
      ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($data.dataList, (item, index) => {
        return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", {
          key: index,
          onClick: $event => ($options.getDataInfo(item)),
          style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)({color:item.color,background:item.bgColor})
        }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(item.name), 13, _hoisted_3))
      }), 128))
    ])
  ]))
}
;// CONCATENATED MODULE: ./src/components/WordCloud1.vue?vue&type=template&id=75292540&scoped=true

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/WordCloud1.vue?vue&type=script&lang=js

    /* harmony default export */ const WordCloud1vue_type_script_lang_js = ({
      name: "wordcloud",
      data() {
        return {
          timer: 50, // 球体转动速率
          radius: 0, // 词云球体面积大小
          dtr: Math.PI/180, //鼠标滑过球体转动速度
          active: false, // 默认加载是否开启转动
          lasta: 0, // 上下转动
          lastb: 0.5, // 左右转动
          distr: true,
          tspeed: 0, // 鼠标移动上去时球体转动
          mouseX: 0,
          mouseY: 0,
          tagAttrList: [],
          tagContent: null,
          cloudContent: null,
          sinA: '',
          cosA: '',
          sinB: '',
          cosB: '',
          sinC: '',
          cosC: '',
          dataList: [
            {
              name: '页面卡顿\白屏',
              value: '1',
              bgColor:'rgb(57, 193, 207,0.12)',
              color:'#39c1cf',
            },
            {
              name: '闪退',
              value: '8',
              bgColor:'rgb(66, 105, 245,0.12)',
              color:'#4269f5',
            },
            {
              name: '登录问题',
              value: '9',
              bgColor:'rgb(184, 107, 215,0.12)',
              color:'#b86bd7',
            },
            {
              name: '功能bug',
              value: '3',
              bgColor:'rgb(243, 84, 83,0.12)',
              color:'#f35453',
            },
            {
              name: '无法收到短信',
              value: '6',
              bgColor:'rgb(250, 116, 20,0.12)',
              color:'#FA7414',
            },
            {
              name: '人脸/指纹认证失败',
              value: '10',
              bgColor:'rgb(255, 171, 30,0.12)',
              color:'#FFAB1E',
            },
            {
              name: '功能建议',
              value: '2',
              bgColor:'rgb(136, 104, 217,0.12)',
              color:'#8868D9',
            },
            {
              name: 'UI/UX',
              value: '5',
              bgColor:'rgb(42, 184, 230,0.12)',
              color:'#2AB8E6',
            },
            {
              name: '导航性',
              value: '7',
              bgColor:'rgb(117, 133, 162,0.12)',
              color:'#7585A2',
            },
          ]
        }
      },
      mounted () {
        this.$nextTick(() => {
          this.radius = document.querySelector('.cloud-box').offsetWidth / 2
          this.initWordCloud()
        })
      },
      beforeDestroy () {
        clearInterval(this.timer)
      },
      methods:{
        // 获取点击文本信息
        getDataInfo (item) {
          console.log(item, 'item')
        },
        initWordCloud () {
          this.cloudContent = document.querySelector('.cloud-box');
          this.tagContent = this.cloudContent.getElementsByTagName('span');
          for (let i = 0; i < this.tagContent.length; i++) {
            let tagObj = {};
            tagObj.offsetWidth = this.tagContent[i].offsetWidth;
            tagObj.offsetHeight = this.tagContent[i].offsetHeight;
            this.tagAttrList.push(tagObj);
          }
          this.sineCosine(0, 0, 0);
          this.positionAll();
          this.cloudContent.onmouseover = () => {
            this.active=true;
          };
          this.cloudContent.onmouseout = () => {
            this.active=false;
          };
          this.cloudContent.onmousemove = (ev) => {
            let oEvent = window.event || ev;
            this.mouseX = oEvent.clientX - (this.cloudContent.offsetLeft + this.cloudContent.offsetWidth/2);
            this.mouseY = oEvent.clientY - (this.cloudContent.offsetTop + this.cloudContent.offsetHeight/2);
            this.mouseX/= 5;
            this.mouseY/= 5;
          };
            setInterval(this.update, this.timer);
        },
        positionAll () {
          let phi = 0;
          let theta = 0;
          let max = this.tagAttrList.length;
          let aTmp = [];
          let oFragment = document.createDocumentFragment();
          //随机排序
          for (let i=0; i < this.tagContent.length; i++) {
            aTmp.push(this.tagContent[i]);
          }
          aTmp.sort(() => {
            return Math.random() < 0.5 ? 1 : -1;
          });
          for (let i = 0; i < aTmp.length; i++) {
            oFragment.appendChild(aTmp[i]);
          }
          this.cloudContent.appendChild(oFragment);
          for(let i = 1; i < max + 1; i++){
            if (this.distr) {
              phi = Math.acos(-1 + (2 * i - 1) / max);
              theta = Math.sqrt(max * Math.PI) * phi;
            } else {
              phi = Math.random() * (Math.PI);
              theta = Math.random() * (2 * Math.PI);
            }
            //坐标变换
            this.tagAttrList[i-1].cx = this.radius * Math.cos(theta) * Math.sin(phi);
            this.tagAttrList[i-1].cy = this.radius * Math.sin(theta) * Math.sin(phi);
            this.tagAttrList[i-1].cz = this.radius * Math.cos(phi);
            this.tagContent[i-1].style.left = this.tagAttrList[i-1].cx + this.cloudContent.offsetWidth / 2 - this.tagAttrList[i-1].offsetWidth / 2 + 'px';
            this.tagContent[i-1].style.top = this.tagAttrList[i-1].cy + this.cloudContent.offsetHeight / 2 - this.tagAttrList[i-1].offsetHeight / 2 + 'px';
          }
        },
        update () {
          let angleBasicA;
          let angleBasicB;
   
          if (this.active) {
            angleBasicA = (-Math.min(Math.max(-this.mouseY, -200 ), 200) / this.radius) * this.tspeed;
            angleBasicB = (Math.min(Math.max(-this.mouseX, -200 ), 200) / this.radius) * this.tspeed;
          } else {
            angleBasicA = this.lasta * 0.98;
            angleBasicB = this.lastb * 0.98;
          }
   
          //默认转动是后是否需要停下
          // lasta=a;
          // lastb=b;
   
          // if(Math.abs(a)<=0.01 && Math.abs(b)<=0.01)
          // {
          // return;
          // }
          this.sineCosine(angleBasicA, angleBasicB, 0);
          for(let j = 0; j < this.tagAttrList.length; j++) {
            let rx1 = this.tagAttrList[j].cx;
            let ry1 = this.tagAttrList[j].cy * this.cosA + this.tagAttrList[j].cz * (-this.sinA);
            let rz1 = this.tagAttrList[j].cy * this.sinA + this.tagAttrList[j].cz * this.cosA;
   
            let rx2 = rx1 * this.cosB + rz1 * this.sinB;
            let ry2 = ry1;
            let rz2 = rx1 * (-this.sinB) + rz1 * this.cosB;
   
            let rx3 = rx2 * this.cosC + ry2 * (-this.sinC);
            let ry3 = rx2 * this.sinC + ry2 * this.cosC;
            let rz3 = rz2;
            this.tagAttrList[j].cx = rx3;
            this.tagAttrList[j].cy = ry3;
            this.tagAttrList[j].cz = rz3;
   
            let per = 350 / (350 + rz3);
   
            this.tagAttrList[j].x = rx3 * per - 2;
            this.tagAttrList[j].y = ry3 * per;
            this.tagAttrList[j].scale = per;
            this.tagAttrList[j].alpha = per;
   
            this.tagAttrList[j].alpha = (this.tagAttrList[j].alpha - 0.6) * (10/6);
          }
          this.doPosition();
          this.depthSort();
        },
        doPosition() {
          let len = this.cloudContent.offsetWidth/2;
          let height = this.cloudContent.offsetHeight/2;
          for (let i=0;i < this.tagAttrList.length;i++) {
            this.tagContent[i].style.left = this.tagAttrList[i].cx + len - this.tagAttrList[i].offsetWidth/2 + 'px';
            this.tagContent[i].style.top = this.tagAttrList[i].cy + height - this.tagAttrList[i].offsetHeight/2 + 'px';
            // this.tagContent[i].style.fontSize = Math.ceil(12 * this.tagAttrList[i].scale/2) + 8 + 'px';
            this.tagContent[i].style.fontSize = Math.ceil(12 * this.tagAttrList[i].scale/2) +2 + 'px';
            this.tagContent[i].style.filter = "alpha(opacity="+100 * this.tagAttrList[i].alpha+")";
            this.tagContent[i].style.opacity = this.tagAttrList[i].alpha;
          }
        },
        depthSort(){
          let aTmp = [];
          for (let i = 0; i < this.tagContent.length; i++) {
            aTmp.push(this.tagContent[i]);
          }
          aTmp.sort((item1, item2) => item2.cz - item1.cz);
          for (let i = 0; i < aTmp.length; i++) {
            aTmp[i].style.zIndex=i;
          }
        },
        sineCosine (a, b, c) {
          this.sinA = Math.sin(a * this.dtr);
          this.cosA = Math.cos(a * this.dtr);
          this.sinB = Math.sin(b * this.dtr);
          this.cosB = Math.cos(b * this.dtr);
          this.sinC = Math.sin(c * this.dtr);
          this.cosC = Math.cos(c * this.dtr);
        }
      }
    });
  
;// CONCATENATED MODULE: ./src/components/WordCloud1.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-52.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-52.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-52.use[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/WordCloud1.vue?vue&type=style&index=0&id=75292540&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/WordCloud1.vue?vue&type=style&index=0&id=75292540&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(118);
;// CONCATENATED MODULE: ./src/components/WordCloud1.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(WordCloud1vue_type_script_lang_js, [['render',render],['__scopeId',"data-v-75292540"]])

/* harmony default export */ const WordCloud1 = (__exports__);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ const entry_lib = (WordCloud1);


})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=wordcloud.umd.js.map