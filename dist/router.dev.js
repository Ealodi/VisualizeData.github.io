"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-Router"));

var _count = _interopRequireDefault(require("./component/count.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

vue.use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  Routers: [{
    patn: '/count',
    component: _count["default"]
  }]
});

exports["default"] = _default;
//# sourceMappingURL=router.dev.js.map
