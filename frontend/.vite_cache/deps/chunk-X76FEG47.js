import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  Aurelia,
  BrowserPlatform,
  CustomElement,
  DI,
  IPlatform,
  Registration,
  StandardConfiguration
} from "./chunk-S7YNWOLH.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-OFI5MVGH.js";

// node_modules/aurelia/dist/esm/index.dev.mjs
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var PLATFORM = BrowserPlatform.getOrCreate(globalThis);
function createContainer() {
  return DI.createContainer().register(Registration.instance(IPlatform, PLATFORM), StandardConfiguration);
}
var Aurelia2 = class _Aurelia extends Aurelia {
  constructor(container = createContainer()) {
    super(container);
  }
  static app(config) {
    return new _Aurelia().app(config);
  }
  static enhance(config) {
    return new _Aurelia().enhance(config);
  }
  static register(...params) {
    return new _Aurelia().register(...params);
  }
  app(config) {
    if (CustomElement.isType(config)) {
      const definition = CustomElement.getDefinition(config);
      let host = document.querySelector(definition.name);
      if (host === null) {
        host = document.body;
      }
      return super.app({
        host,
        component: config
      });
    }
    return super.app(config);
  }
};

export {
  PLATFORM,
  Aurelia2 as Aurelia
};
//# sourceMappingURL=chunk-X76FEG47.js.map
