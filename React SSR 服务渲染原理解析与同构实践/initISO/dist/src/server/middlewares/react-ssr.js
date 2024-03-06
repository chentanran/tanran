"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../../client/pages/index"));
var _server = require("react-dom/server");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//引入Index 组件
//引入index 组件
var _default = exports.default = function _default(ctx, next) {
  var html = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_index.default, null));
  ctx.body = "<!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <title>my react ssr</title>\n    </head>\n    <body>\n        <div id=\"root\">\n        ".concat(html, " <span>\u6D4B\u8BD5\u5185\u5BB9</span>//\u589E\u52A0\u4E86span \u6807\u7B7E\n        </div>\n    </body>\n    </html>\n    <script type=\"text/javascript\"  src=\"index.js\"></script>//\u8FD9\u91CC\u7ED1\u5B9A\u4E86 index.js\u4EE3\u7801\uFF0C\u6D4F\u89C8\u5668\u4F1A\u4E0B\u8F7D\u540E\u6267\u884C\n    ");
  return next();
};