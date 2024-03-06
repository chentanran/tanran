"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _index = _interopRequireDefault(require("../pages/index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//渲染index 组件
_client.default.hydrateRoot(document.getElementById('root'), /*#__PURE__*/_react.default.createElement(_index.default, null));