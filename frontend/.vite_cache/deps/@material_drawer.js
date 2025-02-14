import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  MDCDismissibleDrawerFoundation,
  MDCDrawer,
  MDCModalDrawerFoundation,
  cssClasses2 as cssClasses,
  strings2 as strings,
  util_exports
} from "./chunk-R5MIPIJ4.js";
import "./chunk-2KH6P6Y5.js";
import "./chunk-OFI5MVGH.js";
export {
  MDCDismissibleDrawerFoundation,
  MDCDrawer,
  MDCModalDrawerFoundation,
  cssClasses,
  strings,
  util_exports as util
};
