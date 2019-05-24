function rpcWorkerLoader(content) {
    return ("import { expose } from 'comlink';\n  " + content + ";\n  expose(\n    Object.keys(__webpack_exports__).reduce(function(r,k){\n      if (k=='__esModule') return r;\n      r[k] = __webpack_exports__[k];\n      return r\n    },{})\n  )");
}

module.exports = rpcWorkerLoader;
//# sourceMappingURL=comlink-worker-loader.js.map
