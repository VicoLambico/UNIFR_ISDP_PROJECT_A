import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  MDCComponent,
  MDCFoundation,
  __assign,
  __extends,
  __values,
  matches
} from "./chunk-2KH6P6Y5.js";
import {
  __export,
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-OFI5MVGH.js";

// node_modules/@material/top-app-bar/index.js
var import_dist37 = __toESM(require_dist());
var import_dist38 = __toESM(require_dist2());
var import_dist39 = __toESM(require_dist3());

// node_modules/@material/top-app-bar/adapter.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());

// node_modules/@material/top-app-bar/component.js
var import_dist34 = __toESM(require_dist());
var import_dist35 = __toESM(require_dist2());
var import_dist36 = __toESM(require_dist3());

// node_modules/@material/ripple/component.js
var import_dist16 = __toESM(require_dist());
var import_dist17 = __toESM(require_dist2());
var import_dist18 = __toESM(require_dist3());

// node_modules/@material/dom/events.js
var import_dist4 = __toESM(require_dist());
var import_dist5 = __toESM(require_dist2());
var import_dist6 = __toESM(require_dist3());
function applyPassive(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  }
  return supportsPassiveOption(globalObj) ? { passive: true } : false;
}
function supportsPassiveOption(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  }
  var passiveSupported = false;
  try {
    var options = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        passiveSupported = true;
        return false;
      }
    };
    var handler = function() {
    };
    globalObj.document.addEventListener("test", handler, options);
    globalObj.document.removeEventListener("test", handler, options);
  } catch (err) {
    passiveSupported = false;
  }
  return passiveSupported;
}

// node_modules/@material/ripple/foundation.js
var import_dist13 = __toESM(require_dist());
var import_dist14 = __toESM(require_dist2());
var import_dist15 = __toESM(require_dist3());

// node_modules/@material/ripple/constants.js
var import_dist7 = __toESM(require_dist());
var import_dist8 = __toESM(require_dist2());
var import_dist9 = __toESM(require_dist3());
var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
};
var strings = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
};
var numbers = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};

// node_modules/@material/ripple/util.js
var util_exports = {};
__export(util_exports, {
  getNormalizedEventCoords: () => getNormalizedEventCoords,
  supportsCssVariables: () => supportsCssVariables
});
var import_dist10 = __toESM(require_dist());
var import_dist11 = __toESM(require_dist2());
var import_dist12 = __toESM(require_dist3());
var supportsCssVariables_;
function supportsCssVariables(windowObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }
  var CSS = windowObj.CSS;
  var supportsCssVars = supportsCssVariables_;
  if (typeof supportsCssVariables_ === "boolean" && !forceRefresh) {
    return supportsCssVariables_;
  }
  var supportsFunctionPresent = CSS && typeof CSS.supports === "function";
  if (!supportsFunctionPresent) {
    return false;
  }
  var explicitlySupportsCssVars = CSS.supports("--css-vars", "yes");
  var weAreFeatureDetectingSafari10plus = CSS.supports("(--css-vars: yes)") && CSS.supports("color", "#00000000");
  supportsCssVars = explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVars;
  }
  return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return { x: 0, y: 0 };
  }
  var x = pageOffset.x, y = pageOffset.y;
  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;
  var normalizedX;
  var normalizedY;
  if (evt.type === "touchstart") {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }
  return { x: normalizedX, y: normalizedY };
}

// node_modules/@material/ripple/foundation.js
var ACTIVATION_EVENT_TYPES = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
];
var POINTER_DEACTIVATION_EVENT_TYPES = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
];
var activatedTargets = [];
var MDCRippleFoundation = (
  /** @class */
  function(_super) {
    __extends(MDCRippleFoundation2, _super);
    function MDCRippleFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation2.defaultAdapter), adapter)) || this;
      _this.activationAnimationHasEnded = false;
      _this.activationTimer = 0;
      _this.fgDeactivationRemovalTimer = 0;
      _this.fgScale = "0";
      _this.frame = { width: 0, height: 0 };
      _this.initialSize = 0;
      _this.layoutFrame = 0;
      _this.maxRadius = 0;
      _this.unboundedCoords = { left: 0, top: 0 };
      _this.activationState = _this.defaultActivationState();
      _this.activationTimerCallback = function() {
        _this.activationAnimationHasEnded = true;
        _this.runDeactivationUXLogicIfReady();
      };
      _this.activateHandler = function(e) {
        _this.activateImpl(e);
      };
      _this.deactivateHandler = function() {
        _this.deactivateImpl();
      };
      _this.focusHandler = function() {
        _this.handleFocus();
      };
      _this.blurHandler = function() {
        _this.handleBlur();
      };
      _this.resizeHandler = function() {
        _this.layout();
      };
      return _this;
    }
    Object.defineProperty(MDCRippleFoundation2, "cssClasses", {
      get: function() {
        return cssClasses;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCRippleFoundation2, "strings", {
      get: function() {
        return strings;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCRippleFoundation2, "numbers", {
      get: function() {
        return numbers;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCRippleFoundation2, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          browserSupportsCssVars: function() {
            return true;
          },
          computeBoundingRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          containsEventTarget: function() {
            return true;
          },
          deregisterDocumentInteractionHandler: function() {
            return void 0;
          },
          deregisterInteractionHandler: function() {
            return void 0;
          },
          deregisterResizeHandler: function() {
            return void 0;
          },
          getWindowPageOffset: function() {
            return { x: 0, y: 0 };
          },
          isSurfaceActive: function() {
            return true;
          },
          isSurfaceDisabled: function() {
            return true;
          },
          isUnbounded: function() {
            return true;
          },
          registerDocumentInteractionHandler: function() {
            return void 0;
          },
          registerInteractionHandler: function() {
            return void 0;
          },
          registerResizeHandler: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          updateCssVariable: function() {
            return void 0;
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCRippleFoundation2.prototype.init = function() {
      var _this = this;
      var supportsPressRipple = this.supportsPressRipple();
      this.registerRootHandlers(supportsPressRipple);
      if (supportsPressRipple) {
        var _a = MDCRippleFoundation2.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
        requestAnimationFrame(function() {
          _this.adapter.addClass(ROOT_1);
          if (_this.adapter.isUnbounded()) {
            _this.adapter.addClass(UNBOUNDED_1);
            _this.layoutInternal();
          }
        });
      }
    };
    MDCRippleFoundation2.prototype.destroy = function() {
      var _this = this;
      if (this.supportsPressRipple()) {
        if (this.activationTimer) {
          clearTimeout(this.activationTimer);
          this.activationTimer = 0;
          this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_ACTIVATION);
        }
        if (this.fgDeactivationRemovalTimer) {
          clearTimeout(this.fgDeactivationRemovalTimer);
          this.fgDeactivationRemovalTimer = 0;
          this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_DEACTIVATION);
        }
        var _a = MDCRippleFoundation2.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
        requestAnimationFrame(function() {
          _this.adapter.removeClass(ROOT_2);
          _this.adapter.removeClass(UNBOUNDED_2);
          _this.removeCssVars();
        });
      }
      this.deregisterRootHandlers();
      this.deregisterDeactivationHandlers();
    };
    MDCRippleFoundation2.prototype.activate = function(evt) {
      this.activateImpl(evt);
    };
    MDCRippleFoundation2.prototype.deactivate = function() {
      this.deactivateImpl();
    };
    MDCRippleFoundation2.prototype.layout = function() {
      var _this = this;
      if (this.layoutFrame) {
        cancelAnimationFrame(this.layoutFrame);
      }
      this.layoutFrame = requestAnimationFrame(function() {
        _this.layoutInternal();
        _this.layoutFrame = 0;
      });
    };
    MDCRippleFoundation2.prototype.setUnbounded = function(unbounded) {
      var UNBOUNDED = MDCRippleFoundation2.cssClasses.UNBOUNDED;
      if (unbounded) {
        this.adapter.addClass(UNBOUNDED);
      } else {
        this.adapter.removeClass(UNBOUNDED);
      }
    };
    MDCRippleFoundation2.prototype.handleFocus = function() {
      var _this = this;
      requestAnimationFrame(function() {
        return _this.adapter.addClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
      });
    };
    MDCRippleFoundation2.prototype.handleBlur = function() {
      var _this = this;
      requestAnimationFrame(function() {
        return _this.adapter.removeClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
      });
    };
    MDCRippleFoundation2.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    };
    MDCRippleFoundation2.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: false,
        isActivated: false,
        isProgrammatic: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false
      };
    };
    MDCRippleFoundation2.prototype.registerRootHandlers = function(supportsPressRipple) {
      var e_1, _a;
      if (supportsPressRipple) {
        try {
          for (var ACTIVATION_EVENT_TYPES_1 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
            var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
            this.adapter.registerInteractionHandler(evtType, this.activateHandler);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return)) _a.call(ACTIVATION_EVENT_TYPES_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        if (this.adapter.isUnbounded()) {
          this.adapter.registerResizeHandler(this.resizeHandler);
        }
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler);
      this.adapter.registerInteractionHandler("blur", this.blurHandler);
    };
    MDCRippleFoundation2.prototype.registerDeactivationHandlers = function(evt) {
      var e_2, _a;
      if (evt.type === "keydown") {
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      } else {
        try {
          for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
            var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
            this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }
    };
    MDCRippleFoundation2.prototype.deregisterRootHandlers = function() {
      var e_3, _a;
      try {
        for (var ACTIVATION_EVENT_TYPES_2 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
          var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
          this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
        }
      } catch (e_3_1) {
        e_3 = { error: e_3_1 };
      } finally {
        try {
          if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return)) _a.call(ACTIVATION_EVENT_TYPES_2);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler);
      this.adapter.deregisterInteractionHandler("blur", this.blurHandler);
      if (this.adapter.isUnbounded()) {
        this.adapter.deregisterResizeHandler(this.resizeHandler);
      }
    };
    MDCRippleFoundation2.prototype.deregisterDeactivationHandlers = function() {
      var e_4, _a;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
          var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
          this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
        }
      } catch (e_4_1) {
        e_4 = { error: e_4_1 };
      } finally {
        try {
          if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
        } finally {
          if (e_4) throw e_4.error;
        }
      }
    };
    MDCRippleFoundation2.prototype.removeCssVars = function() {
      var _this = this;
      var rippleStrings = MDCRippleFoundation2.strings;
      var keys = Object.keys(rippleStrings);
      keys.forEach(function(key) {
        if (key.indexOf("VAR_") === 0) {
          _this.adapter.updateCssVariable(rippleStrings[key], null);
        }
      });
    };
    MDCRippleFoundation2.prototype.activateImpl = function(evt) {
      var _this = this;
      if (this.adapter.isSurfaceDisabled()) {
        return;
      }
      var activationState = this.activationState;
      if (activationState.isActivated) {
        return;
      }
      var previousActivationEvent = this.previousActivationEvent;
      var isSameInteraction = previousActivationEvent && evt !== void 0 && previousActivationEvent.type !== evt.type;
      if (isSameInteraction) {
        return;
      }
      activationState.isActivated = true;
      activationState.isProgrammatic = evt === void 0;
      activationState.activationEvent = evt;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== void 0 && (evt.type === "mousedown" || evt.type === "touchstart" || evt.type === "pointerdown");
      var hasActivatedChild = evt !== void 0 && activatedTargets.length > 0 && activatedTargets.some(function(target) {
        return _this.adapter.containsEventTarget(target);
      });
      if (hasActivatedChild) {
        this.resetActivationState();
        return;
      }
      if (evt !== void 0) {
        activatedTargets.push(evt.target);
        this.registerDeactivationHandlers(evt);
      }
      activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
      if (activationState.wasElementMadeActive) {
        this.animateActivation();
      }
      requestAnimationFrame(function() {
        activatedTargets = [];
        if (!activationState.wasElementMadeActive && evt !== void 0 && (evt.key === " " || evt.keyCode === 32)) {
          activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
          if (activationState.wasElementMadeActive) {
            _this.animateActivation();
          }
        }
        if (!activationState.wasElementMadeActive) {
          _this.activationState = _this.defaultActivationState();
        }
      });
    };
    MDCRippleFoundation2.prototype.checkElementMadeActive = function(evt) {
      return evt !== void 0 && evt.type === "keydown" ? this.adapter.isSurfaceActive() : true;
    };
    MDCRippleFoundation2.prototype.animateActivation = function() {
      var _this = this;
      var _a = MDCRippleFoundation2.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
      var _b = MDCRippleFoundation2.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
      var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation2.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var translateStart = "";
      var translateEnd = "";
      if (!this.adapter.isUnbounded()) {
        var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
        translateStart = startPoint.x + "px, " + startPoint.y + "px";
        translateEnd = endPoint.x + "px, " + endPoint.y + "px";
      }
      this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
      this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
      clearTimeout(this.activationTimer);
      clearTimeout(this.fgDeactivationRemovalTimer);
      this.rmBoundedActivationClasses();
      this.adapter.removeClass(FG_DEACTIVATION);
      this.adapter.computeBoundingRect();
      this.adapter.addClass(FG_ACTIVATION);
      this.activationTimer = setTimeout(function() {
        _this.activationTimerCallback();
      }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation2.prototype.getFgTranslationCoordinates = function() {
      var _a = this.activationState, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
      var startPoint;
      if (wasActivatedByPointer) {
        startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame.width / 2,
          y: this.frame.height / 2
        };
      }
      startPoint = {
        x: startPoint.x - this.initialSize / 2,
        y: startPoint.y - this.initialSize / 2
      };
      var endPoint = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint, endPoint };
    };
    MDCRippleFoundation2.prototype.runDeactivationUXLogicIfReady = function() {
      var _this = this;
      var FG_DEACTIVATION = MDCRippleFoundation2.cssClasses.FG_DEACTIVATION;
      var _a = this.activationState, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
      var activationHasEnded = hasDeactivationUXRun || !isActivated;
      if (activationHasEnded && this.activationAnimationHasEnded) {
        this.rmBoundedActivationClasses();
        this.adapter.addClass(FG_DEACTIVATION);
        this.fgDeactivationRemovalTimer = setTimeout(function() {
          _this.adapter.removeClass(FG_DEACTIVATION);
        }, numbers.FG_DEACTIVATION_MS);
      }
    };
    MDCRippleFoundation2.prototype.rmBoundedActivationClasses = function() {
      var FG_ACTIVATION = MDCRippleFoundation2.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(FG_ACTIVATION);
      this.activationAnimationHasEnded = false;
      this.adapter.computeBoundingRect();
    };
    MDCRippleFoundation2.prototype.resetActivationState = function() {
      var _this = this;
      this.previousActivationEvent = this.activationState.activationEvent;
      this.activationState = this.defaultActivationState();
      setTimeout(function() {
        return _this.previousActivationEvent = void 0;
      }, MDCRippleFoundation2.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation2.prototype.deactivateImpl = function() {
      var _this = this;
      var activationState = this.activationState;
      if (!activationState.isActivated) {
        return;
      }
      var state = __assign({}, activationState);
      if (activationState.isProgrammatic) {
        requestAnimationFrame(function() {
          _this.animateDeactivation(state);
        });
        this.resetActivationState();
      } else {
        this.deregisterDeactivationHandlers();
        requestAnimationFrame(function() {
          _this.activationState.hasDeactivationUXRun = true;
          _this.animateDeactivation(state);
          _this.resetActivationState();
        });
      }
    };
    MDCRippleFoundation2.prototype.animateDeactivation = function(_a) {
      var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
      if (wasActivatedByPointer || wasElementMadeActive) {
        this.runDeactivationUXLogicIfReady();
      }
    };
    MDCRippleFoundation2.prototype.layoutInternal = function() {
      var _this = this;
      this.frame = this.adapter.computeBoundingRect();
      var maxDim = Math.max(this.frame.height, this.frame.width);
      var getBoundedRadius = function() {
        var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
        return hypotenuse + MDCRippleFoundation2.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
      var initialSize = Math.floor(maxDim * MDCRippleFoundation2.numbers.INITIAL_ORIGIN_SCALE);
      if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
        this.initialSize = initialSize - 1;
      } else {
        this.initialSize = initialSize;
      }
      this.fgScale = "" + this.maxRadius / this.initialSize;
      this.updateLayoutCssVars();
    };
    MDCRippleFoundation2.prototype.updateLayoutCssVars = function() {
      var _a = MDCRippleFoundation2.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
      this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
      this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
      if (this.adapter.isUnbounded()) {
        this.unboundedCoords = {
          left: Math.round(this.frame.width / 2 - this.initialSize / 2),
          top: Math.round(this.frame.height / 2 - this.initialSize / 2)
        };
        this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
        this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
      }
    };
    return MDCRippleFoundation2;
  }(MDCFoundation)
);

// node_modules/@material/ripple/component.js
var MDCRipple = (
  /** @class */
  function(_super) {
    __extends(MDCRipple2, _super);
    function MDCRipple2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.disabled = false;
      return _this;
    }
    MDCRipple2.attachTo = function(root, opts) {
      if (opts === void 0) {
        opts = {
          isUnbounded: void 0
        };
      }
      var ripple = new MDCRipple2(root);
      if (opts.isUnbounded !== void 0) {
        ripple.unbounded = opts.isUnbounded;
      }
      return ripple;
    };
    MDCRipple2.createAdapter = function(instance) {
      return {
        addClass: function(className) {
          return instance.root.classList.add(className);
        },
        browserSupportsCssVars: function() {
          return supportsCssVariables(window);
        },
        computeBoundingRect: function() {
          return instance.root.getBoundingClientRect();
        },
        containsEventTarget: function(target) {
          return instance.root.contains(target);
        },
        deregisterDocumentInteractionHandler: function(evtType, handler) {
          return document.documentElement.removeEventListener(evtType, handler, applyPassive());
        },
        deregisterInteractionHandler: function(evtType, handler) {
          return instance.root.removeEventListener(evtType, handler, applyPassive());
        },
        deregisterResizeHandler: function(handler) {
          return window.removeEventListener("resize", handler);
        },
        getWindowPageOffset: function() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        },
        isSurfaceActive: function() {
          return matches(instance.root, ":active");
        },
        isSurfaceDisabled: function() {
          return Boolean(instance.disabled);
        },
        isUnbounded: function() {
          return Boolean(instance.unbounded);
        },
        registerDocumentInteractionHandler: function(evtType, handler) {
          return document.documentElement.addEventListener(evtType, handler, applyPassive());
        },
        registerInteractionHandler: function(evtType, handler) {
          return instance.root.addEventListener(evtType, handler, applyPassive());
        },
        registerResizeHandler: function(handler) {
          return window.addEventListener("resize", handler);
        },
        removeClass: function(className) {
          return instance.root.classList.remove(className);
        },
        updateCssVariable: function(varName, value) {
          return instance.root.style.setProperty(varName, value);
        }
      };
    };
    Object.defineProperty(MDCRipple2.prototype, "unbounded", {
      get: function() {
        return Boolean(this.isUnbounded);
      },
      set: function(unbounded) {
        this.isUnbounded = Boolean(unbounded);
        this.setUnbounded();
      },
      enumerable: false,
      configurable: true
    });
    MDCRipple2.prototype.activate = function() {
      this.foundation.activate();
    };
    MDCRipple2.prototype.deactivate = function() {
      this.foundation.deactivate();
    };
    MDCRipple2.prototype.layout = function() {
      this.foundation.layout();
    };
    MDCRipple2.prototype.getDefaultFoundation = function() {
      return new MDCRippleFoundation(MDCRipple2.createAdapter(this));
    };
    MDCRipple2.prototype.initialSyncWithDOM = function() {
      var root = this.root;
      this.isUnbounded = "mdcRippleIsUnbounded" in root.dataset;
    };
    MDCRipple2.prototype.setUnbounded = function() {
      this.foundation.setUnbounded(Boolean(this.isUnbounded));
    };
    return MDCRipple2;
  }(MDCComponent)
);

// node_modules/@material/top-app-bar/constants.js
var import_dist19 = __toESM(require_dist());
var import_dist20 = __toESM(require_dist2());
var import_dist21 = __toESM(require_dist3());
var cssClasses2 = {
  FIXED_CLASS: "mdc-top-app-bar--fixed",
  FIXED_SCROLLED_CLASS: "mdc-top-app-bar--fixed-scrolled",
  SHORT_CLASS: "mdc-top-app-bar--short",
  SHORT_COLLAPSED_CLASS: "mdc-top-app-bar--short-collapsed",
  SHORT_HAS_ACTION_ITEM_CLASS: "mdc-top-app-bar--short-has-action-item"
};
var numbers2 = {
  DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
  MAX_TOP_APP_BAR_HEIGHT: 128
};
var strings2 = {
  ACTION_ITEM_SELECTOR: ".mdc-top-app-bar__action-item",
  NAVIGATION_EVENT: "MDCTopAppBar:nav",
  NAVIGATION_ICON_SELECTOR: ".mdc-top-app-bar__navigation-icon",
  ROOT_SELECTOR: ".mdc-top-app-bar",
  TITLE_SELECTOR: ".mdc-top-app-bar__title"
};

// node_modules/@material/top-app-bar/fixed/foundation.js
var import_dist28 = __toESM(require_dist());
var import_dist29 = __toESM(require_dist2());
var import_dist30 = __toESM(require_dist3());

// node_modules/@material/top-app-bar/standard/foundation.js
var import_dist25 = __toESM(require_dist());
var import_dist26 = __toESM(require_dist2());
var import_dist27 = __toESM(require_dist3());

// node_modules/@material/top-app-bar/foundation.js
var import_dist22 = __toESM(require_dist());
var import_dist23 = __toESM(require_dist2());
var import_dist24 = __toESM(require_dist3());
var MDCTopAppBarBaseFoundation = (
  /** @class */
  function(_super) {
    __extends(MDCTopAppBarBaseFoundation2, _super);
    function MDCTopAppBarBaseFoundation2(adapter) {
      return _super.call(this, __assign(__assign({}, MDCTopAppBarBaseFoundation2.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCTopAppBarBaseFoundation2, "strings", {
      get: function() {
        return strings2;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation2, "cssClasses", {
      get: function() {
        return cssClasses2;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation2, "numbers", {
      get: function() {
        return numbers2;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation2, "defaultAdapter", {
      /**
       * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          hasClass: function() {
            return false;
          },
          setStyle: function() {
            return void 0;
          },
          getTopAppBarHeight: function() {
            return 0;
          },
          notifyNavigationIconClicked: function() {
            return void 0;
          },
          getViewportScrollY: function() {
            return 0;
          },
          getTotalActionItems: function() {
            return 0;
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCTopAppBarBaseFoundation2.prototype.handleTargetScroll = function() {
    };
    MDCTopAppBarBaseFoundation2.prototype.handleWindowResize = function() {
    };
    MDCTopAppBarBaseFoundation2.prototype.handleNavigationClick = function() {
      this.adapter.notifyNavigationIconClicked();
    };
    return MDCTopAppBarBaseFoundation2;
  }(MDCFoundation)
);

// node_modules/@material/top-app-bar/standard/foundation.js
var INITIAL_VALUE = 0;
var MDCTopAppBarFoundation = (
  /** @class */
  function(_super) {
    __extends(MDCTopAppBarFoundation2, _super);
    function MDCTopAppBarFoundation2(adapter) {
      var _this = _super.call(this, adapter) || this;
      _this.wasDocked = true;
      _this.isDockedShowing = true;
      _this.currentAppBarOffsetTop = 0;
      _this.isCurrentlyBeingResized = false;
      _this.resizeThrottleId = INITIAL_VALUE;
      _this.resizeDebounceId = INITIAL_VALUE;
      _this.lastScrollPosition = _this.adapter.getViewportScrollY();
      _this.topAppBarHeight = _this.adapter.getTopAppBarHeight();
      return _this;
    }
    MDCTopAppBarFoundation2.prototype.destroy = function() {
      _super.prototype.destroy.call(this);
      this.adapter.setStyle("top", "");
    };
    MDCTopAppBarFoundation2.prototype.handleTargetScroll = function() {
      var currentScrollPosition = Math.max(this.adapter.getViewportScrollY(), 0);
      var diff = currentScrollPosition - this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
      if (!this.isCurrentlyBeingResized) {
        this.currentAppBarOffsetTop -= diff;
        if (this.currentAppBarOffsetTop > 0) {
          this.currentAppBarOffsetTop = 0;
        } else if (Math.abs(this.currentAppBarOffsetTop) > this.topAppBarHeight) {
          this.currentAppBarOffsetTop = -this.topAppBarHeight;
        }
        this.moveTopAppBar();
      }
    };
    MDCTopAppBarFoundation2.prototype.handleWindowResize = function() {
      var _this = this;
      if (!this.resizeThrottleId) {
        this.resizeThrottleId = setTimeout(function() {
          _this.resizeThrottleId = INITIAL_VALUE;
          _this.throttledResizeHandler();
        }, numbers2.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
      }
      this.isCurrentlyBeingResized = true;
      if (this.resizeDebounceId) {
        clearTimeout(this.resizeDebounceId);
      }
      this.resizeDebounceId = setTimeout(function() {
        _this.handleTargetScroll();
        _this.isCurrentlyBeingResized = false;
        _this.resizeDebounceId = INITIAL_VALUE;
      }, numbers2.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    };
    MDCTopAppBarFoundation2.prototype.checkForUpdate = function() {
      var offscreenBoundaryTop = -this.topAppBarHeight;
      var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop < 0;
      var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop > offscreenBoundaryTop;
      var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;
      if (partiallyShowing) {
        this.wasDocked = false;
      } else {
        if (!this.wasDocked) {
          this.wasDocked = true;
          return true;
        } else if (this.isDockedShowing !== hasAnyPixelsOnscreen) {
          this.isDockedShowing = hasAnyPixelsOnscreen;
          return true;
        }
      }
      return partiallyShowing;
    };
    MDCTopAppBarFoundation2.prototype.moveTopAppBar = function() {
      if (this.checkForUpdate()) {
        var offset = this.currentAppBarOffsetTop;
        if (Math.abs(offset) >= this.topAppBarHeight) {
          offset = -numbers2.MAX_TOP_APP_BAR_HEIGHT;
        }
        this.adapter.setStyle("top", offset + "px");
      }
    };
    MDCTopAppBarFoundation2.prototype.throttledResizeHandler = function() {
      var currentHeight = this.adapter.getTopAppBarHeight();
      if (this.topAppBarHeight !== currentHeight) {
        this.wasDocked = false;
        this.currentAppBarOffsetTop -= this.topAppBarHeight - currentHeight;
        this.topAppBarHeight = currentHeight;
      }
      this.handleTargetScroll();
    };
    return MDCTopAppBarFoundation2;
  }(MDCTopAppBarBaseFoundation)
);

// node_modules/@material/top-app-bar/fixed/foundation.js
var MDCFixedTopAppBarFoundation = (
  /** @class */
  function(_super) {
    __extends(MDCFixedTopAppBarFoundation2, _super);
    function MDCFixedTopAppBarFoundation2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.wasScrolled = false;
      return _this;
    }
    MDCFixedTopAppBarFoundation2.prototype.handleTargetScroll = function() {
      var currentScroll = this.adapter.getViewportScrollY();
      if (currentScroll <= 0) {
        if (this.wasScrolled) {
          this.adapter.removeClass(cssClasses2.FIXED_SCROLLED_CLASS);
          this.wasScrolled = false;
        }
      } else {
        if (!this.wasScrolled) {
          this.adapter.addClass(cssClasses2.FIXED_SCROLLED_CLASS);
          this.wasScrolled = true;
        }
      }
    };
    return MDCFixedTopAppBarFoundation2;
  }(MDCTopAppBarFoundation)
);

// node_modules/@material/top-app-bar/short/foundation.js
var import_dist31 = __toESM(require_dist());
var import_dist32 = __toESM(require_dist2());
var import_dist33 = __toESM(require_dist3());
var MDCShortTopAppBarFoundation = (
  /** @class */
  function(_super) {
    __extends(MDCShortTopAppBarFoundation2, _super);
    function MDCShortTopAppBarFoundation2(adapter) {
      var _this = _super.call(this, adapter) || this;
      _this.collapsed = false;
      _this.isAlwaysCollapsed = false;
      return _this;
    }
    Object.defineProperty(MDCShortTopAppBarFoundation2.prototype, "isCollapsed", {
      // Public visibility for backward compatibility.
      get: function() {
        return this.collapsed;
      },
      enumerable: false,
      configurable: true
    });
    MDCShortTopAppBarFoundation2.prototype.init = function() {
      _super.prototype.init.call(this);
      if (this.adapter.getTotalActionItems() > 0) {
        this.adapter.addClass(cssClasses2.SHORT_HAS_ACTION_ITEM_CLASS);
      }
      this.setAlwaysCollapsed(this.adapter.hasClass(cssClasses2.SHORT_COLLAPSED_CLASS));
    };
    MDCShortTopAppBarFoundation2.prototype.setAlwaysCollapsed = function(value) {
      this.isAlwaysCollapsed = !!value;
      if (this.isAlwaysCollapsed) {
        this.collapse();
      } else {
        this.maybeCollapseBar();
      }
    };
    MDCShortTopAppBarFoundation2.prototype.getAlwaysCollapsed = function() {
      return this.isAlwaysCollapsed;
    };
    MDCShortTopAppBarFoundation2.prototype.handleTargetScroll = function() {
      this.maybeCollapseBar();
    };
    MDCShortTopAppBarFoundation2.prototype.maybeCollapseBar = function() {
      if (this.isAlwaysCollapsed) {
        return;
      }
      var currentScroll = this.adapter.getViewportScrollY();
      if (currentScroll <= 0) {
        if (this.collapsed) {
          this.uncollapse();
        }
      } else {
        if (!this.collapsed) {
          this.collapse();
        }
      }
    };
    MDCShortTopAppBarFoundation2.prototype.uncollapse = function() {
      this.adapter.removeClass(cssClasses2.SHORT_COLLAPSED_CLASS);
      this.collapsed = false;
    };
    MDCShortTopAppBarFoundation2.prototype.collapse = function() {
      this.adapter.addClass(cssClasses2.SHORT_COLLAPSED_CLASS);
      this.collapsed = true;
    };
    return MDCShortTopAppBarFoundation2;
  }(MDCTopAppBarBaseFoundation)
);

// node_modules/@material/top-app-bar/component.js
var MDCTopAppBar = (
  /** @class */
  function(_super) {
    __extends(MDCTopAppBar2, _super);
    function MDCTopAppBar2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTopAppBar2.attachTo = function(root) {
      return new MDCTopAppBar2(root);
    };
    MDCTopAppBar2.prototype.initialize = function(rippleFactory) {
      if (rippleFactory === void 0) {
        rippleFactory = function(el) {
          return MDCRipple.attachTo(el);
        };
      }
      this.navIcon = this.root.querySelector(strings2.NAVIGATION_ICON_SELECTOR);
      var icons = [].slice.call(this.root.querySelectorAll(strings2.ACTION_ITEM_SELECTOR));
      if (this.navIcon) {
        icons.push(this.navIcon);
      }
      this.iconRipples = icons.map(function(icon) {
        var ripple = rippleFactory(icon);
        ripple.unbounded = true;
        return ripple;
      });
      this.scrollTarget = window;
    };
    MDCTopAppBar2.prototype.initialSyncWithDOM = function() {
      this.handleNavigationClick = this.foundation.handleNavigationClick.bind(this.foundation);
      this.handleWindowResize = this.foundation.handleWindowResize.bind(this.foundation);
      this.handleTargetScroll = this.foundation.handleTargetScroll.bind(this.foundation);
      this.scrollTarget.addEventListener("scroll", this.handleTargetScroll);
      if (this.navIcon) {
        this.navIcon.addEventListener("click", this.handleNavigationClick);
      }
      var isFixed = this.root.classList.contains(cssClasses2.FIXED_CLASS);
      var isShort = this.root.classList.contains(cssClasses2.SHORT_CLASS);
      if (!isShort && !isFixed) {
        window.addEventListener("resize", this.handleWindowResize);
      }
    };
    MDCTopAppBar2.prototype.destroy = function() {
      var e_1, _a;
      try {
        for (var _b = __values(this.iconRipples), _c = _b.next(); !_c.done; _c = _b.next()) {
          var iconRipple = _c.value;
          iconRipple.destroy();
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      this.scrollTarget.removeEventListener("scroll", this.handleTargetScroll);
      if (this.navIcon) {
        this.navIcon.removeEventListener("click", this.handleNavigationClick);
      }
      var isFixed = this.root.classList.contains(cssClasses2.FIXED_CLASS);
      var isShort = this.root.classList.contains(cssClasses2.SHORT_CLASS);
      if (!isShort && !isFixed) {
        window.removeEventListener("resize", this.handleWindowResize);
      }
      _super.prototype.destroy.call(this);
    };
    MDCTopAppBar2.prototype.setScrollTarget = function(target) {
      this.scrollTarget.removeEventListener("scroll", this.handleTargetScroll);
      this.scrollTarget = target;
      this.handleTargetScroll = this.foundation.handleTargetScroll.bind(this.foundation);
      this.scrollTarget.addEventListener("scroll", this.handleTargetScroll);
    };
    MDCTopAppBar2.prototype.getDefaultFoundation = function() {
      var _this = this;
      var adapter = {
        hasClass: function(className) {
          return _this.root.classList.contains(className);
        },
        addClass: function(className) {
          return _this.root.classList.add(className);
        },
        removeClass: function(className) {
          return _this.root.classList.remove(className);
        },
        setStyle: function(property, value) {
          return _this.root.style.setProperty(property, value);
        },
        getTopAppBarHeight: function() {
          return _this.root.clientHeight;
        },
        notifyNavigationIconClicked: function() {
          return _this.emit(strings2.NAVIGATION_EVENT, {});
        },
        getViewportScrollY: function() {
          var win = _this.scrollTarget;
          var el = _this.scrollTarget;
          return win.pageYOffset !== void 0 ? win.pageYOffset : el.scrollTop;
        },
        getTotalActionItems: function() {
          return _this.root.querySelectorAll(strings2.ACTION_ITEM_SELECTOR).length;
        }
      };
      var foundation;
      if (this.root.classList.contains(cssClasses2.SHORT_CLASS)) {
        foundation = new MDCShortTopAppBarFoundation(adapter);
      } else if (this.root.classList.contains(cssClasses2.FIXED_CLASS)) {
        foundation = new MDCFixedTopAppBarFoundation(adapter);
      } else {
        foundation = new MDCTopAppBarFoundation(adapter);
      }
      return foundation;
    };
    return MDCTopAppBar2;
  }(MDCComponent)
);

export {
  applyPassive,
  util_exports,
  MDCRippleFoundation,
  MDCRipple,
  cssClasses2 as cssClasses,
  numbers2 as numbers,
  strings2 as strings,
  MDCTopAppBarBaseFoundation,
  MDCTopAppBarFoundation,
  MDCFixedTopAppBarFoundation,
  MDCShortTopAppBarFoundation,
  MDCTopAppBar
};
/*! Bundled license information:

@material/top-app-bar/adapter.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/dom/events.js:
  (**
   * @license
   * Copyright 2019 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/ripple/constants.js:
  (**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/ripple/foundation.js:
  (**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/ripple/component.js:
  (**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/top-app-bar/constants.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/top-app-bar/foundation.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/top-app-bar/standard/foundation.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/top-app-bar/fixed/foundation.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/top-app-bar/short/foundation.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/top-app-bar/component.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/top-app-bar/index.js:
  (**
   * @license
   * Copyright 2019 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)
*/
//# sourceMappingURL=chunk-GBUJPVKB.js.map
