function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = _interopDefault(require('path'));
var loaderUtils = _interopDefault(require('loader-utils'));

function loader() {}

loader.pitch = function (request) {
    var options = loaderUtils.getOptions(this) || {};
    return ("\n    import { wrap } from 'comlink';\n    var inst;\n    var worker = require('!worker-loader?" + (JSON.stringify(options)) + "!" + (path.resolve(__dirname, 'comlink-worker-loader.js')) + "!" + request + "');\n    export default function f() {\n      inst = inst || wrap(worker());\n      return (this instanceof f) ? wrap(worker()) : inst;\n    }\n  ").replace(/\n\s*/g, '');
};

module.exports = loader;
//# sourceMappingURL=comlink-loader.js.map
