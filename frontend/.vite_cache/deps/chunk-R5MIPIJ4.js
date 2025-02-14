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
  __read,
  __spreadArray,
  closest,
  matches
} from "./chunk-2KH6P6Y5.js";
import {
  __export,
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-OFI5MVGH.js";

// node_modules/@material/drawer/index.js
var import_dist40 = __toESM(require_dist());
var import_dist41 = __toESM(require_dist2());
var import_dist42 = __toESM(require_dist3());

// node_modules/@material/drawer/util.js
var util_exports = {};
__export(util_exports, {
  createFocusTrapInstance: () => createFocusTrapInstance
});
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
function createFocusTrapInstance(surfaceEl, focusTrapFactory) {
  return focusTrapFactory(surfaceEl, {
    // Component handles focusing on active nav item.
    skipInitialFocus: true
  });
}

// node_modules/@material/drawer/adapter.js
var import_dist4 = __toESM(require_dist());
var import_dist5 = __toESM(require_dist2());
var import_dist6 = __toESM(require_dist3());

// node_modules/@material/drawer/component.js
var import_dist37 = __toESM(require_dist());
var import_dist38 = __toESM(require_dist2());
var import_dist39 = __toESM(require_dist3());

// node_modules/@material/dom/focus-trap.js
var import_dist7 = __toESM(require_dist());
var import_dist8 = __toESM(require_dist2());
var import_dist9 = __toESM(require_dist3());
var FOCUS_SENTINEL_CLASS = "mdc-dom-focus-sentinel";
var FocusTrap = (
  /** @class */
  function() {
    function FocusTrap2(root, options) {
      if (options === void 0) {
        options = {};
      }
      this.root = root;
      this.options = options;
      this.elFocusedBeforeTrapFocus = null;
    }
    FocusTrap2.prototype.trapFocus = function() {
      var focusableEls = this.getFocusableElements(this.root);
      if (focusableEls.length === 0) {
        throw new Error("FocusTrap: Element must have at least one focusable child.");
      }
      this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      this.wrapTabFocus(this.root);
      if (!this.options.skipInitialFocus) {
        this.focusInitialElement(focusableEls, this.options.initialFocusEl);
      }
    };
    FocusTrap2.prototype.releaseFocus = function() {
      [].slice.call(this.root.querySelectorAll("." + FOCUS_SENTINEL_CLASS)).forEach(function(sentinelEl) {
        sentinelEl.parentElement.removeChild(sentinelEl);
      });
      if (!this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus) {
        this.elFocusedBeforeTrapFocus.focus();
      }
    };
    FocusTrap2.prototype.wrapTabFocus = function(el) {
      var _this = this;
      var sentinelStart = this.createSentinel();
      var sentinelEnd = this.createSentinel();
      sentinelStart.addEventListener("focus", function() {
        var focusableEls = _this.getFocusableElements(el);
        if (focusableEls.length > 0) {
          focusableEls[focusableEls.length - 1].focus();
        }
      });
      sentinelEnd.addEventListener("focus", function() {
        var focusableEls = _this.getFocusableElements(el);
        if (focusableEls.length > 0) {
          focusableEls[0].focus();
        }
      });
      el.insertBefore(sentinelStart, el.children[0]);
      el.appendChild(sentinelEnd);
    };
    FocusTrap2.prototype.focusInitialElement = function(focusableEls, initialFocusEl) {
      var focusIndex = 0;
      if (initialFocusEl) {
        focusIndex = Math.max(focusableEls.indexOf(initialFocusEl), 0);
      }
      focusableEls[focusIndex].focus();
    };
    FocusTrap2.prototype.getFocusableElements = function(root) {
      var focusableEls = [].slice.call(root.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));
      return focusableEls.filter(function(el) {
        var isDisabledOrHidden = el.getAttribute("aria-disabled") === "true" || el.getAttribute("disabled") != null || el.getAttribute("hidden") != null || el.getAttribute("aria-hidden") === "true";
        var isTabbableAndVisible = el.tabIndex >= 0 && el.getBoundingClientRect().width > 0 && !el.classList.contains(FOCUS_SENTINEL_CLASS) && !isDisabledOrHidden;
        var isProgrammaticallyHidden = false;
        if (isTabbableAndVisible) {
          var style = getComputedStyle(el);
          isProgrammaticallyHidden = style.display === "none" || style.visibility === "hidden";
        }
        return isTabbableAndVisible && !isProgrammaticallyHidden;
      });
    };
    FocusTrap2.prototype.createSentinel = function() {
      var sentinel = document.createElement("div");
      sentinel.setAttribute("tabindex", "0");
      sentinel.setAttribute("aria-hidden", "true");
      sentinel.classList.add(FOCUS_SENTINEL_CLASS);
      return sentinel;
    };
    return FocusTrap2;
  }()
);

// node_modules/@material/list/component.js
var import_dist25 = __toESM(require_dist());
var import_dist26 = __toESM(require_dist2());
var import_dist27 = __toESM(require_dist3());

// node_modules/@material/list/constants.js
var import_dist10 = __toESM(require_dist());
var import_dist11 = __toESM(require_dist2());
var import_dist12 = __toESM(require_dist3());
var _a;
var _b;
var cssClasses = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
var evolutionClassNameMap = (_a = {}, _a["" + cssClasses.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", _a["" + cssClasses.LIST_ITEM_CLASS] = "mdc-list-item", _a["" + cssClasses.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", _a["" + cssClasses.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", _a["" + cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", _a["" + cssClasses.ROOT] = "mdc-list", _a);
var deprecatedClassNameMap = (_b = {}, _b["" + cssClasses.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", _b["" + cssClasses.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", _b["" + cssClasses.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", _b["" + cssClasses.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", _b["" + cssClasses.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", _b["" + cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", _b["" + cssClasses.ROOT] = "mdc-deprecated-list", _b);
var strings = {
  ACTION_EVENT: "MDCList:action",
  SELECTION_CHANGE_EVENT: "MDCList:selectionChange",
  ARIA_CHECKED: "aria-checked",
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: "aria-current",
  ARIA_DISABLED: "aria-disabled",
  ARIA_ORIENTATION: "aria-orientation",
  ARIA_ORIENTATION_HORIZONTAL: "horizontal",
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: "aria-selected",
  ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
  ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " a\n  ",
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + cssClasses.LIST_ITEM_CLASS + ' input[type="radio"]:not(:disabled),\n    .' + cssClasses.LIST_ITEM_CLASS + ' input[type="checkbox"]:not(:disabled),\n    .' + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " a,\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + ' input[type="radio"]:not(:disabled),\n    .' + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + ' input[type="checkbox"]:not(:disabled)\n  ',
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
};
var numbers = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
var evolutionAttribute = "evolution";

// node_modules/@material/list/foundation.js
var import_dist22 = __toESM(require_dist());
var import_dist23 = __toESM(require_dist2());
var import_dist24 = __toESM(require_dist3());

// node_modules/@material/dom/keyboard.js
var import_dist13 = __toESM(require_dist());
var import_dist14 = __toESM(require_dist2());
var import_dist15 = __toESM(require_dist3());
var KEY = {
  UNKNOWN: "Unknown",
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  SPACEBAR: "Spacebar",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  END: "End",
  HOME: "Home",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  DELETE: "Delete",
  ESCAPE: "Escape",
  TAB: "Tab"
};
var normalizedKeys = /* @__PURE__ */ new Set();
normalizedKeys.add(KEY.BACKSPACE);
normalizedKeys.add(KEY.ENTER);
normalizedKeys.add(KEY.SPACEBAR);
normalizedKeys.add(KEY.PAGE_UP);
normalizedKeys.add(KEY.PAGE_DOWN);
normalizedKeys.add(KEY.END);
normalizedKeys.add(KEY.HOME);
normalizedKeys.add(KEY.ARROW_LEFT);
normalizedKeys.add(KEY.ARROW_UP);
normalizedKeys.add(KEY.ARROW_RIGHT);
normalizedKeys.add(KEY.ARROW_DOWN);
normalizedKeys.add(KEY.DELETE);
normalizedKeys.add(KEY.ESCAPE);
normalizedKeys.add(KEY.TAB);
var KEY_CODE = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27,
  TAB: 9
};
var mappedKeyCodes = /* @__PURE__ */ new Map();
mappedKeyCodes.set(KEY_CODE.BACKSPACE, KEY.BACKSPACE);
mappedKeyCodes.set(KEY_CODE.ENTER, KEY.ENTER);
mappedKeyCodes.set(KEY_CODE.SPACEBAR, KEY.SPACEBAR);
mappedKeyCodes.set(KEY_CODE.PAGE_UP, KEY.PAGE_UP);
mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, KEY.PAGE_DOWN);
mappedKeyCodes.set(KEY_CODE.END, KEY.END);
mappedKeyCodes.set(KEY_CODE.HOME, KEY.HOME);
mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, KEY.ARROW_LEFT);
mappedKeyCodes.set(KEY_CODE.ARROW_UP, KEY.ARROW_UP);
mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, KEY.ARROW_RIGHT);
mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, KEY.ARROW_DOWN);
mappedKeyCodes.set(KEY_CODE.DELETE, KEY.DELETE);
mappedKeyCodes.set(KEY_CODE.ESCAPE, KEY.ESCAPE);
mappedKeyCodes.set(KEY_CODE.TAB, KEY.TAB);
var navigationKeys = /* @__PURE__ */ new Set();
navigationKeys.add(KEY.PAGE_UP);
navigationKeys.add(KEY.PAGE_DOWN);
navigationKeys.add(KEY.END);
navigationKeys.add(KEY.HOME);
navigationKeys.add(KEY.ARROW_LEFT);
navigationKeys.add(KEY.ARROW_UP);
navigationKeys.add(KEY.ARROW_RIGHT);
navigationKeys.add(KEY.ARROW_DOWN);
function normalizeKey(evt) {
  var key = evt.key;
  if (normalizedKeys.has(key)) {
    return key;
  }
  var mappedKey = mappedKeyCodes.get(evt.keyCode);
  if (mappedKey) {
    return mappedKey;
  }
  return KEY.UNKNOWN;
}
function isNavigationEvent(evt) {
  return navigationKeys.has(normalizeKey(evt));
}

// node_modules/@material/list/events.js
var import_dist16 = __toESM(require_dist());
var import_dist17 = __toESM(require_dist2());
var import_dist18 = __toESM(require_dist3());
var ELEMENTS_KEY_ALLOWED_IN = ["input", "button", "textarea", "select"];
var preventDefaultEvent = function(evt) {
  var target = evt.target;
  if (!target) {
    return;
  }
  var tagName = ("" + target.tagName).toLowerCase();
  if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
    evt.preventDefault();
  }
};

// node_modules/@material/list/typeahead.js
var import_dist19 = __toESM(require_dist());
var import_dist20 = __toESM(require_dist2());
var import_dist21 = __toESM(require_dist3());
function initState() {
  var state = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return state;
}
function initSortedIndex(listItemCount, getPrimaryTextByItemIndex) {
  var sortedIndexByFirstChar = /* @__PURE__ */ new Map();
  for (var i = 0; i < listItemCount; i++) {
    var primaryText = getPrimaryTextByItemIndex(i).trim();
    if (!primaryText) {
      continue;
    }
    var firstChar = primaryText[0].toLowerCase();
    if (!sortedIndexByFirstChar.has(firstChar)) {
      sortedIndexByFirstChar.set(firstChar, []);
    }
    sortedIndexByFirstChar.get(firstChar).push({ text: primaryText.toLowerCase(), index: i });
  }
  sortedIndexByFirstChar.forEach(function(values) {
    values.sort(function(first, second) {
      return first.index - second.index;
    });
  });
  return sortedIndexByFirstChar;
}
function matchItem(opts, state) {
  var nextChar = opts.nextChar, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, focusedItemIndex = opts.focusedItemIndex, skipFocus = opts.skipFocus, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
  clearTimeout(state.bufferClearTimeout);
  state.bufferClearTimeout = setTimeout(function() {
    clearBuffer(state);
  }, numbers.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS);
  state.typeaheadBuffer = state.typeaheadBuffer + nextChar;
  var index;
  if (state.typeaheadBuffer.length === 1) {
    index = matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state);
  } else {
    index = matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state);
  }
  if (index !== -1 && !skipFocus) {
    focusItemAtIndex(index);
  }
  return index;
}
function matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state) {
  var firstChar = state.typeaheadBuffer[0];
  var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
  if (!itemsMatchingFirstChar) {
    return -1;
  }
  if (firstChar === state.currentFirstChar && itemsMatchingFirstChar[state.sortedIndexCursor].index === focusedItemIndex) {
    state.sortedIndexCursor = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
    var newIndex = itemsMatchingFirstChar[state.sortedIndexCursor].index;
    if (!isItemAtIndexDisabled(newIndex)) {
      return newIndex;
    }
  }
  state.currentFirstChar = firstChar;
  var newCursorPosition = -1;
  var cursorPosition;
  for (cursorPosition = 0; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
    if (!isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
      newCursorPosition = cursorPosition;
      break;
    }
  }
  for (; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
    if (itemsMatchingFirstChar[cursorPosition].index > focusedItemIndex && !isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
      newCursorPosition = cursorPosition;
      break;
    }
  }
  if (newCursorPosition !== -1) {
    state.sortedIndexCursor = newCursorPosition;
    return itemsMatchingFirstChar[state.sortedIndexCursor].index;
  }
  return -1;
}
function matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state) {
  var firstChar = state.typeaheadBuffer[0];
  var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
  if (!itemsMatchingFirstChar) {
    return -1;
  }
  var startingItem = itemsMatchingFirstChar[state.sortedIndexCursor];
  if (startingItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0 && !isItemAtIndexDisabled(startingItem.index)) {
    return startingItem.index;
  }
  var cursorPosition = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
  var nextCursorPosition = -1;
  while (cursorPosition !== state.sortedIndexCursor) {
    var currentItem = itemsMatchingFirstChar[cursorPosition];
    var matches2 = currentItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0;
    var isEnabled = !isItemAtIndexDisabled(currentItem.index);
    if (matches2 && isEnabled) {
      nextCursorPosition = cursorPosition;
      break;
    }
    cursorPosition = (cursorPosition + 1) % itemsMatchingFirstChar.length;
  }
  if (nextCursorPosition !== -1) {
    state.sortedIndexCursor = nextCursorPosition;
    return itemsMatchingFirstChar[state.sortedIndexCursor].index;
  }
  return -1;
}
function isTypingInProgress(state) {
  return state.typeaheadBuffer.length > 0;
}
function clearBuffer(state) {
  state.typeaheadBuffer = "";
}
function handleKeydown(opts, state) {
  var event = opts.event, isTargetListItem = opts.isTargetListItem, focusedItemIndex = opts.focusedItemIndex, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
  var isArrowLeft = normalizeKey(event) === "ArrowLeft";
  var isArrowUp = normalizeKey(event) === "ArrowUp";
  var isArrowRight = normalizeKey(event) === "ArrowRight";
  var isArrowDown = normalizeKey(event) === "ArrowDown";
  var isHome = normalizeKey(event) === "Home";
  var isEnd = normalizeKey(event) === "End";
  var isEnter = normalizeKey(event) === "Enter";
  var isSpace = normalizeKey(event) === "Spacebar";
  if (event.altKey || event.ctrlKey || event.metaKey || isArrowLeft || isArrowUp || isArrowRight || isArrowDown || isHome || isEnd || isEnter) {
    return -1;
  }
  var isCharacterKey = !isSpace && event.key.length === 1;
  if (isCharacterKey) {
    preventDefaultEvent(event);
    var matchItemOpts = {
      focusItemAtIndex,
      focusedItemIndex,
      nextChar: event.key.toLowerCase(),
      sortedIndexByFirstChar,
      skipFocus: false,
      isItemAtIndexDisabled
    };
    return matchItem(matchItemOpts, state);
  }
  if (!isSpace) {
    return -1;
  }
  if (isTargetListItem) {
    preventDefaultEvent(event);
  }
  var typeaheadOnListItem = isTargetListItem && isTypingInProgress(state);
  if (typeaheadOnListItem) {
    var matchItemOpts = {
      focusItemAtIndex,
      focusedItemIndex,
      nextChar: " ",
      sortedIndexByFirstChar,
      skipFocus: false,
      isItemAtIndexDisabled
    };
    return matchItem(matchItemOpts, state);
  }
  return -1;
}

// node_modules/@material/list/foundation.js
function isNumberArray(selectedIndex) {
  return selectedIndex instanceof Array;
}
var handledModifierKeys = ["Alt", "Control", "Meta", "Shift"];
function createModifierChecker(event) {
  var eventModifiers = new Set(event ? handledModifierKeys.filter(function(m) {
    return event.getModifierState(m);
  }) : []);
  return function(modifiers) {
    return modifiers.every(function(m) {
      return eventModifiers.has(m);
    }) && modifiers.length === eventModifiers.size;
  };
}
var MDCListFoundation = (
  /** @class */
  function(_super) {
    __extends(MDCListFoundation2, _super);
    function MDCListFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCListFoundation2.defaultAdapter), adapter)) || this;
      _this.wrapFocus = false;
      _this.isVertical = true;
      _this.isSingleSelectionList = false;
      _this.areDisabledItemsFocusable = true;
      _this.selectedIndex = numbers.UNSET_INDEX;
      _this.focusedItemIndex = numbers.UNSET_INDEX;
      _this.useActivatedClass = false;
      _this.useSelectedAttr = false;
      _this.ariaCurrentAttrValue = null;
      _this.isCheckboxList = false;
      _this.isRadioList = false;
      _this.lastSelectedIndex = null;
      _this.hasTypeahead = false;
      _this.typeaheadState = initState();
      _this.sortedIndexByFirstChar = /* @__PURE__ */ new Map();
      return _this;
    }
    Object.defineProperty(MDCListFoundation2, "strings", {
      get: function() {
        return strings;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCListFoundation2, "cssClasses", {
      get: function() {
        return cssClasses;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCListFoundation2, "numbers", {
      get: function() {
        return numbers;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCListFoundation2, "defaultAdapter", {
      get: function() {
        return {
          addClassForElementIndex: function() {
            return void 0;
          },
          focusItemAtIndex: function() {
            return void 0;
          },
          getAttributeForElementIndex: function() {
            return null;
          },
          getFocusedElementIndex: function() {
            return 0;
          },
          getListItemCount: function() {
            return 0;
          },
          hasCheckboxAtIndex: function() {
            return false;
          },
          hasRadioAtIndex: function() {
            return false;
          },
          isCheckboxCheckedAtIndex: function() {
            return false;
          },
          isFocusInsideList: function() {
            return false;
          },
          isRootFocused: function() {
            return false;
          },
          listItemAtIndexHasClass: function() {
            return false;
          },
          notifyAction: function() {
            return void 0;
          },
          notifySelectionChange: function() {
          },
          removeClassForElementIndex: function() {
            return void 0;
          },
          setAttributeForElementIndex: function() {
            return void 0;
          },
          setCheckedCheckboxOrRadioAtIndex: function() {
            return void 0;
          },
          setTabIndexForListItemChildren: function() {
            return void 0;
          },
          getPrimaryTextAtIndex: function() {
            return "";
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCListFoundation2.prototype.layout = function() {
      if (this.adapter.getListItemCount() === 0) {
        return;
      }
      if (this.adapter.hasCheckboxAtIndex(0)) {
        this.isCheckboxList = true;
      } else if (this.adapter.hasRadioAtIndex(0)) {
        this.isRadioList = true;
      } else {
        this.maybeInitializeSingleSelection();
      }
      if (this.hasTypeahead) {
        this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
      }
    };
    MDCListFoundation2.prototype.getFocusedItemIndex = function() {
      return this.focusedItemIndex;
    };
    MDCListFoundation2.prototype.setWrapFocus = function(value) {
      this.wrapFocus = value;
    };
    MDCListFoundation2.prototype.setVerticalOrientation = function(value) {
      this.isVertical = value;
    };
    MDCListFoundation2.prototype.setSingleSelection = function(value) {
      this.isSingleSelectionList = value;
      if (value) {
        this.maybeInitializeSingleSelection();
        this.selectedIndex = this.getSelectedIndexFromDOM();
      }
    };
    MDCListFoundation2.prototype.setDisabledItemsFocusable = function(value) {
      this.areDisabledItemsFocusable = value;
    };
    MDCListFoundation2.prototype.maybeInitializeSingleSelection = function() {
      var selectedItemIndex = this.getSelectedIndexFromDOM();
      if (selectedItemIndex === numbers.UNSET_INDEX)
        return;
      var hasActivatedClass = this.adapter.listItemAtIndexHasClass(selectedItemIndex, cssClasses.LIST_ITEM_ACTIVATED_CLASS);
      if (hasActivatedClass) {
        this.setUseActivatedClass(true);
      }
      this.isSingleSelectionList = true;
      this.selectedIndex = selectedItemIndex;
    };
    MDCListFoundation2.prototype.getSelectedIndexFromDOM = function() {
      var selectedIndex = numbers.UNSET_INDEX;
      var listItemsCount = this.adapter.getListItemCount();
      for (var i = 0; i < listItemsCount; i++) {
        var hasSelectedClass = this.adapter.listItemAtIndexHasClass(i, cssClasses.LIST_ITEM_SELECTED_CLASS);
        var hasActivatedClass = this.adapter.listItemAtIndexHasClass(i, cssClasses.LIST_ITEM_ACTIVATED_CLASS);
        if (!(hasSelectedClass || hasActivatedClass)) {
          continue;
        }
        selectedIndex = i;
        break;
      }
      return selectedIndex;
    };
    MDCListFoundation2.prototype.setHasTypeahead = function(hasTypeahead) {
      this.hasTypeahead = hasTypeahead;
      if (hasTypeahead) {
        this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
      }
    };
    MDCListFoundation2.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && isTypingInProgress(this.typeaheadState);
    };
    MDCListFoundation2.prototype.setUseActivatedClass = function(useActivated) {
      this.useActivatedClass = useActivated;
    };
    MDCListFoundation2.prototype.setUseSelectedAttribute = function(useSelected) {
      this.useSelectedAttr = useSelected;
    };
    MDCListFoundation2.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    };
    MDCListFoundation2.prototype.setSelectedIndex = function(index, options) {
      if (options === void 0) {
        options = {};
      }
      if (!this.isIndexValid(index)) {
        return;
      }
      if (this.isCheckboxList) {
        this.setCheckboxAtIndex(index, options);
      } else if (this.isRadioList) {
        this.setRadioAtIndex(index, options);
      } else {
        this.setSingleSelectionAtIndex(index, options);
      }
    };
    MDCListFoundation2.prototype.handleFocusIn = function(listItemIndex) {
      if (listItemIndex >= 0) {
        this.focusedItemIndex = listItemIndex;
        this.adapter.setAttributeForElementIndex(listItemIndex, "tabindex", "0");
        this.adapter.setTabIndexForListItemChildren(listItemIndex, "0");
      }
    };
    MDCListFoundation2.prototype.handleFocusOut = function(listItemIndex) {
      var _this = this;
      if (listItemIndex >= 0) {
        this.adapter.setAttributeForElementIndex(listItemIndex, "tabindex", "-1");
        this.adapter.setTabIndexForListItemChildren(listItemIndex, "-1");
      }
      setTimeout(function() {
        if (!_this.adapter.isFocusInsideList()) {
          _this.setTabindexToFirstSelectedOrFocusedItem();
        }
      }, 0);
    };
    MDCListFoundation2.prototype.isIndexDisabled = function(index) {
      return this.adapter.listItemAtIndexHasClass(index, cssClasses.LIST_ITEM_DISABLED_CLASS);
    };
    MDCListFoundation2.prototype.handleKeydown = function(event, isRootListItem, listItemIndex) {
      var _this = this;
      var _a2;
      var isArrowLeft = normalizeKey(event) === "ArrowLeft";
      var isArrowUp = normalizeKey(event) === "ArrowUp";
      var isArrowRight = normalizeKey(event) === "ArrowRight";
      var isArrowDown = normalizeKey(event) === "ArrowDown";
      var isHome = normalizeKey(event) === "Home";
      var isEnd = normalizeKey(event) === "End";
      var isEnter = normalizeKey(event) === "Enter";
      var isSpace = normalizeKey(event) === "Spacebar";
      var isForward = this.isVertical && isArrowDown || !this.isVertical && isArrowRight;
      var isBack = this.isVertical && isArrowUp || !this.isVertical && isArrowLeft;
      var isLetterA = event.key === "A" || event.key === "a";
      var eventHasModifiers = createModifierChecker(event);
      if (this.adapter.isRootFocused()) {
        if ((isBack || isEnd) && eventHasModifiers([])) {
          event.preventDefault();
          this.focusLastElement();
        } else if ((isForward || isHome) && eventHasModifiers([])) {
          event.preventDefault();
          this.focusFirstElement();
        } else if (isBack && eventHasModifiers(["Shift"]) && this.isCheckboxList) {
          event.preventDefault();
          var focusedIndex = this.focusLastElement();
          if (focusedIndex !== -1) {
            this.setSelectedIndexOnAction(focusedIndex, false);
          }
        } else if (isForward && eventHasModifiers(["Shift"]) && this.isCheckboxList) {
          event.preventDefault();
          var focusedIndex = this.focusFirstElement();
          if (focusedIndex !== -1) {
            this.setSelectedIndexOnAction(focusedIndex, false);
          }
        }
        if (this.hasTypeahead) {
          var handleKeydownOpts = {
            event,
            focusItemAtIndex: function(index) {
              _this.focusItemAtIndex(index);
            },
            focusedItemIndex: -1,
            isTargetListItem: isRootListItem,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(index) {
              return _this.isIndexDisabled(index);
            }
          };
          handleKeydown(handleKeydownOpts, this.typeaheadState);
        }
        return;
      }
      var currentIndex = this.adapter.getFocusedElementIndex();
      if (currentIndex === -1) {
        currentIndex = listItemIndex;
        if (currentIndex < 0) {
          return;
        }
      }
      if (isForward && eventHasModifiers([])) {
        preventDefaultEvent(event);
        this.focusNextElement(currentIndex);
      } else if (isBack && eventHasModifiers([])) {
        preventDefaultEvent(event);
        this.focusPrevElement(currentIndex);
      } else if (isForward && eventHasModifiers(["Shift"]) && this.isCheckboxList) {
        preventDefaultEvent(event);
        var focusedIndex = this.focusNextElement(currentIndex);
        if (focusedIndex !== -1) {
          this.setSelectedIndexOnAction(focusedIndex, false);
        }
      } else if (isBack && eventHasModifiers(["Shift"]) && this.isCheckboxList) {
        preventDefaultEvent(event);
        var focusedIndex = this.focusPrevElement(currentIndex);
        if (focusedIndex !== -1) {
          this.setSelectedIndexOnAction(focusedIndex, false);
        }
      } else if (isHome && eventHasModifiers([])) {
        preventDefaultEvent(event);
        this.focusFirstElement();
      } else if (isEnd && eventHasModifiers([])) {
        preventDefaultEvent(event);
        this.focusLastElement();
      } else if (isHome && eventHasModifiers(["Control", "Shift"]) && this.isCheckboxList) {
        preventDefaultEvent(event);
        if (this.isIndexDisabled(currentIndex)) {
          return;
        }
        this.focusFirstElement();
        this.toggleCheckboxRange(0, currentIndex, currentIndex);
      } else if (isEnd && eventHasModifiers(["Control", "Shift"]) && this.isCheckboxList) {
        preventDefaultEvent(event);
        if (this.isIndexDisabled(currentIndex)) {
          return;
        }
        this.focusLastElement();
        this.toggleCheckboxRange(currentIndex, this.adapter.getListItemCount() - 1, currentIndex);
      } else if (isLetterA && eventHasModifiers(["Control"]) && this.isCheckboxList) {
        event.preventDefault();
        this.checkboxListToggleAll(this.selectedIndex === numbers.UNSET_INDEX ? [] : this.selectedIndex, true);
      } else if ((isEnter || isSpace) && eventHasModifiers([])) {
        if (isRootListItem) {
          var target = event.target;
          if (target && target.tagName === "A" && isEnter) {
            return;
          }
          preventDefaultEvent(event);
          if (this.isIndexDisabled(currentIndex)) {
            return;
          }
          if (!this.isTypeaheadInProgress()) {
            if (this.isSelectableList()) {
              this.setSelectedIndexOnAction(currentIndex, false);
            }
            this.adapter.notifyAction(currentIndex);
          }
        }
      } else if ((isEnter || isSpace) && eventHasModifiers(["Shift"]) && this.isCheckboxList) {
        var target = event.target;
        if (target && target.tagName === "A" && isEnter) {
          return;
        }
        preventDefaultEvent(event);
        if (this.isIndexDisabled(currentIndex)) {
          return;
        }
        if (!this.isTypeaheadInProgress()) {
          this.toggleCheckboxRange((_a2 = this.lastSelectedIndex) !== null && _a2 !== void 0 ? _a2 : currentIndex, currentIndex, currentIndex);
          this.adapter.notifyAction(currentIndex);
        }
      }
      if (this.hasTypeahead) {
        var handleKeydownOpts = {
          event,
          focusItemAtIndex: function(index) {
            _this.focusItemAtIndex(index);
          },
          focusedItemIndex: this.focusedItemIndex,
          isTargetListItem: isRootListItem,
          sortedIndexByFirstChar: this.sortedIndexByFirstChar,
          isItemAtIndexDisabled: function(index) {
            return _this.isIndexDisabled(index);
          }
        };
        handleKeydown(handleKeydownOpts, this.typeaheadState);
      }
    };
    MDCListFoundation2.prototype.handleClick = function(index, isCheckboxAlreadyUpdatedInAdapter, event) {
      var _a2;
      var eventHasModifiers = createModifierChecker(event);
      if (index === numbers.UNSET_INDEX) {
        return;
      }
      if (this.isIndexDisabled(index)) {
        return;
      }
      if (eventHasModifiers([])) {
        if (this.isSelectableList()) {
          this.setSelectedIndexOnAction(index, isCheckboxAlreadyUpdatedInAdapter);
        }
        this.adapter.notifyAction(index);
      } else if (this.isCheckboxList && eventHasModifiers(["Shift"])) {
        this.toggleCheckboxRange((_a2 = this.lastSelectedIndex) !== null && _a2 !== void 0 ? _a2 : index, index, index);
        this.adapter.notifyAction(index);
      }
    };
    MDCListFoundation2.prototype.focusNextElement = function(index) {
      var count = this.adapter.getListItemCount();
      var nextIndex = index;
      var firstChecked = null;
      do {
        nextIndex++;
        if (nextIndex >= count) {
          if (this.wrapFocus) {
            nextIndex = 0;
          } else {
            return index;
          }
        }
        if (nextIndex === firstChecked) {
          return -1;
        }
        firstChecked = firstChecked !== null && firstChecked !== void 0 ? firstChecked : nextIndex;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(nextIndex));
      this.focusItemAtIndex(nextIndex);
      return nextIndex;
    };
    MDCListFoundation2.prototype.focusPrevElement = function(index) {
      var count = this.adapter.getListItemCount();
      var prevIndex = index;
      var firstChecked = null;
      do {
        prevIndex--;
        if (prevIndex < 0) {
          if (this.wrapFocus) {
            prevIndex = count - 1;
          } else {
            return index;
          }
        }
        if (prevIndex === firstChecked) {
          return -1;
        }
        firstChecked = firstChecked !== null && firstChecked !== void 0 ? firstChecked : prevIndex;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(prevIndex));
      this.focusItemAtIndex(prevIndex);
      return prevIndex;
    };
    MDCListFoundation2.prototype.focusFirstElement = function() {
      return this.focusNextElement(-1);
    };
    MDCListFoundation2.prototype.focusLastElement = function() {
      return this.focusPrevElement(this.adapter.getListItemCount());
    };
    MDCListFoundation2.prototype.focusInitialElement = function() {
      var initialIndex = this.getFirstSelectedOrFocusedItemIndex();
      this.focusItemAtIndex(initialIndex);
      return initialIndex;
    };
    MDCListFoundation2.prototype.setEnabled = function(itemIndex, isEnabled) {
      if (!this.isIndexValid(itemIndex, false)) {
        return;
      }
      if (isEnabled) {
        this.adapter.removeClassForElementIndex(itemIndex, cssClasses.LIST_ITEM_DISABLED_CLASS);
        this.adapter.setAttributeForElementIndex(itemIndex, strings.ARIA_DISABLED, "false");
      } else {
        this.adapter.addClassForElementIndex(itemIndex, cssClasses.LIST_ITEM_DISABLED_CLASS);
        this.adapter.setAttributeForElementIndex(itemIndex, strings.ARIA_DISABLED, "true");
      }
    };
    MDCListFoundation2.prototype.setSingleSelectionAtIndex = function(index, options) {
      if (options === void 0) {
        options = {};
      }
      if (this.selectedIndex === index && !options.forceUpdate) {
        return;
      }
      var selectedClassName = cssClasses.LIST_ITEM_SELECTED_CLASS;
      if (this.useActivatedClass) {
        selectedClassName = cssClasses.LIST_ITEM_ACTIVATED_CLASS;
      }
      if (this.selectedIndex !== numbers.UNSET_INDEX) {
        this.adapter.removeClassForElementIndex(this.selectedIndex, selectedClassName);
      }
      this.setAriaForSingleSelectionAtIndex(index);
      this.setTabindexAtIndex(index);
      if (index !== numbers.UNSET_INDEX) {
        this.adapter.addClassForElementIndex(index, selectedClassName);
      }
      this.selectedIndex = index;
      if (options.isUserInteraction && !options.forceUpdate) {
        this.adapter.notifySelectionChange([index]);
      }
    };
    MDCListFoundation2.prototype.setAriaForSingleSelectionAtIndex = function(index) {
      if (this.selectedIndex === numbers.UNSET_INDEX) {
        this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(index, strings.ARIA_CURRENT);
      }
      var isAriaCurrent = this.ariaCurrentAttrValue !== null;
      var ariaAttribute = isAriaCurrent ? strings.ARIA_CURRENT : strings.ARIA_SELECTED;
      if (this.selectedIndex !== numbers.UNSET_INDEX) {
        this.adapter.setAttributeForElementIndex(this.selectedIndex, ariaAttribute, "false");
      }
      if (index !== numbers.UNSET_INDEX) {
        var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
      }
    };
    MDCListFoundation2.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? strings.ARIA_SELECTED : strings.ARIA_CHECKED;
    };
    MDCListFoundation2.prototype.setRadioAtIndex = function(index, options) {
      if (options === void 0) {
        options = {};
      }
      var selectionAttribute = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(index, true);
      if (this.selectedIndex === index && !options.forceUpdate) {
        return;
      }
      if (this.selectedIndex !== numbers.UNSET_INDEX) {
        this.adapter.setAttributeForElementIndex(this.selectedIndex, selectionAttribute, "false");
      }
      this.adapter.setAttributeForElementIndex(index, selectionAttribute, "true");
      this.selectedIndex = index;
      if (options.isUserInteraction && !options.forceUpdate) {
        this.adapter.notifySelectionChange([index]);
      }
    };
    MDCListFoundation2.prototype.setCheckboxAtIndex = function(index, options) {
      if (options === void 0) {
        options = {};
      }
      var currentIndex = this.selectedIndex;
      var currentlySelected = options.isUserInteraction ? new Set(currentIndex === numbers.UNSET_INDEX ? [] : currentIndex) : null;
      var selectionAttribute = this.getSelectionAttribute();
      var changedIndices = [];
      for (var i = 0; i < this.adapter.getListItemCount(); i++) {
        var previousIsChecked = currentlySelected === null || currentlySelected === void 0 ? void 0 : currentlySelected.has(i);
        var newIsChecked = index.indexOf(i) >= 0;
        if (newIsChecked !== previousIsChecked) {
          changedIndices.push(i);
        }
        this.adapter.setCheckedCheckboxOrRadioAtIndex(i, newIsChecked);
        this.adapter.setAttributeForElementIndex(i, selectionAttribute, newIsChecked ? "true" : "false");
      }
      this.selectedIndex = index;
      if (options.isUserInteraction && changedIndices.length) {
        this.adapter.notifySelectionChange(changedIndices);
      }
    };
    MDCListFoundation2.prototype.toggleCheckboxRange = function(fromIndex, toIndex, toggleIndex) {
      this.lastSelectedIndex = toggleIndex;
      var currentlySelected = new Set(this.selectedIndex === numbers.UNSET_INDEX ? [] : this.selectedIndex);
      var newIsChecked = !(currentlySelected === null || currentlySelected === void 0 ? void 0 : currentlySelected.has(toggleIndex));
      var _a2 = __read([fromIndex, toIndex].sort(), 2), startIndex = _a2[0], endIndex = _a2[1];
      var selectionAttribute = this.getSelectionAttribute();
      var changedIndices = [];
      for (var i = startIndex; i <= endIndex; i++) {
        if (this.isIndexDisabled(i)) {
          continue;
        }
        var previousIsChecked = currentlySelected.has(i);
        if (newIsChecked !== previousIsChecked) {
          changedIndices.push(i);
          this.adapter.setCheckedCheckboxOrRadioAtIndex(i, newIsChecked);
          this.adapter.setAttributeForElementIndex(i, selectionAttribute, "" + newIsChecked);
          if (newIsChecked) {
            currentlySelected.add(i);
          } else {
            currentlySelected.delete(i);
          }
        }
      }
      if (changedIndices.length) {
        this.selectedIndex = __spreadArray([], __read(currentlySelected));
        this.adapter.notifySelectionChange(changedIndices);
      }
    };
    MDCListFoundation2.prototype.setTabindexAtIndex = function(index) {
      if (this.focusedItemIndex === numbers.UNSET_INDEX && index !== 0) {
        this.adapter.setAttributeForElementIndex(0, "tabindex", "-1");
      } else if (this.focusedItemIndex >= 0 && this.focusedItemIndex !== index) {
        this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1");
      }
      if (!(this.selectedIndex instanceof Array) && this.selectedIndex !== index) {
        this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1");
      }
      if (index !== numbers.UNSET_INDEX) {
        this.adapter.setAttributeForElementIndex(index, "tabindex", "0");
      }
    };
    MDCListFoundation2.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    };
    MDCListFoundation2.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var targetIndex = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(targetIndex);
    };
    MDCListFoundation2.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      if (!this.isSelectableList()) {
        return Math.max(this.focusedItemIndex, 0);
      }
      if (typeof this.selectedIndex === "number" && this.selectedIndex !== numbers.UNSET_INDEX) {
        return this.selectedIndex;
      }
      if (isNumberArray(this.selectedIndex) && this.selectedIndex.length > 0) {
        return this.selectedIndex.reduce(function(minIndex, currentIndex) {
          return Math.min(minIndex, currentIndex);
        });
      }
      return 0;
    };
    MDCListFoundation2.prototype.isIndexValid = function(index, validateListType) {
      var _this = this;
      if (validateListType === void 0) {
        validateListType = true;
      }
      if (index instanceof Array) {
        if (!this.isCheckboxList && validateListType) {
          throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
        }
        if (index.length === 0) {
          return true;
        } else {
          return index.some(function(i) {
            return _this.isIndexInRange(i);
          });
        }
      } else if (typeof index === "number") {
        if (this.isCheckboxList && validateListType) {
          throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + index);
        }
        return this.isIndexInRange(index) || this.isSingleSelectionList && index === numbers.UNSET_INDEX;
      } else {
        return false;
      }
    };
    MDCListFoundation2.prototype.isIndexInRange = function(index) {
      var listSize = this.adapter.getListItemCount();
      return index >= 0 && index < listSize;
    };
    MDCListFoundation2.prototype.setSelectedIndexOnAction = function(index, isCheckboxAlreadyUpdatedInAdapter) {
      this.lastSelectedIndex = index;
      if (this.isCheckboxList) {
        this.toggleCheckboxAtIndex(index, isCheckboxAlreadyUpdatedInAdapter);
        this.adapter.notifySelectionChange([index]);
      } else {
        this.setSelectedIndex(index, { isUserInteraction: true });
      }
    };
    MDCListFoundation2.prototype.toggleCheckboxAtIndex = function(index, isCheckboxAlreadyUpdatedInAdapter) {
      var selectionAttribute = this.getSelectionAttribute();
      var adapterIsChecked = this.adapter.isCheckboxCheckedAtIndex(index);
      var newCheckedValue;
      if (isCheckboxAlreadyUpdatedInAdapter) {
        newCheckedValue = adapterIsChecked;
      } else {
        newCheckedValue = !adapterIsChecked;
        this.adapter.setCheckedCheckboxOrRadioAtIndex(index, newCheckedValue);
      }
      this.adapter.setAttributeForElementIndex(index, selectionAttribute, newCheckedValue ? "true" : "false");
      var selectedIndexes = this.selectedIndex === numbers.UNSET_INDEX ? [] : this.selectedIndex.slice();
      if (newCheckedValue) {
        selectedIndexes.push(index);
      } else {
        selectedIndexes = selectedIndexes.filter(function(i) {
          return i !== index;
        });
      }
      this.selectedIndex = selectedIndexes;
    };
    MDCListFoundation2.prototype.focusItemAtIndex = function(index) {
      this.adapter.focusItemAtIndex(index);
      this.focusedItemIndex = index;
    };
    MDCListFoundation2.prototype.checkboxListToggleAll = function(currentlySelectedIndexes, isUserInteraction) {
      var count = this.adapter.getListItemCount();
      if (currentlySelectedIndexes.length === count) {
        this.setCheckboxAtIndex([], { isUserInteraction });
      } else {
        var allIndexes = [];
        for (var i = 0; i < count; i++) {
          if (!this.isIndexDisabled(i) || currentlySelectedIndexes.indexOf(i) > -1) {
            allIndexes.push(i);
          }
        }
        this.setCheckboxAtIndex(allIndexes, { isUserInteraction });
      }
    };
    MDCListFoundation2.prototype.typeaheadMatchItem = function(nextChar, startingIndex, skipFocus) {
      var _this = this;
      if (skipFocus === void 0) {
        skipFocus = false;
      }
      var opts = {
        focusItemAtIndex: function(index) {
          _this.focusItemAtIndex(index);
        },
        focusedItemIndex: startingIndex ? startingIndex : this.focusedItemIndex,
        nextChar,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus,
        isItemAtIndexDisabled: function(index) {
          return _this.isIndexDisabled(index);
        }
      };
      return matchItem(opts, this.typeaheadState);
    };
    MDCListFoundation2.prototype.typeaheadInitSortedIndex = function() {
      return initSortedIndex(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    };
    MDCListFoundation2.prototype.clearTypeaheadBuffer = function() {
      clearBuffer(this.typeaheadState);
    };
    return MDCListFoundation2;
  }(MDCFoundation)
);

// node_modules/@material/list/component.js
var MDCList = (
  /** @class */
  function(_super) {
    __extends(MDCList2, _super);
    function MDCList2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MDCList2.prototype, "vertical", {
      set: function(value) {
        this.foundation.setVerticalOrientation(value);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCList2.prototype, "listElements", {
      get: function() {
        return Array.from(this.root.querySelectorAll("." + this.classNameMap[cssClasses.LIST_ITEM_CLASS]));
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCList2.prototype, "wrapFocus", {
      set: function(value) {
        this.foundation.setWrapFocus(value);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCList2.prototype, "typeaheadInProgress", {
      /**
       * @return Whether typeahead is currently matching a user-specified prefix.
       */
      get: function() {
        return this.foundation.isTypeaheadInProgress();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCList2.prototype, "hasTypeahead", {
      /**
       * Sets whether typeahead functionality is enabled on the list.
       * @param hasTypeahead Whether typeahead is enabled.
       */
      set: function(hasTypeahead) {
        this.foundation.setHasTypeahead(hasTypeahead);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCList2.prototype, "singleSelection", {
      set: function(isSingleSelectionList) {
        this.foundation.setSingleSelection(isSingleSelectionList);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCList2.prototype, "disabledItemsFocusable", {
      set: function(areDisabledItemsFocusable) {
        this.foundation.setDisabledItemsFocusable(areDisabledItemsFocusable);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCList2.prototype, "selectedIndex", {
      get: function() {
        return this.foundation.getSelectedIndex();
      },
      set: function(index) {
        this.foundation.setSelectedIndex(index);
      },
      enumerable: false,
      configurable: true
    });
    MDCList2.attachTo = function(root) {
      return new MDCList2(root);
    };
    MDCList2.prototype.initialSyncWithDOM = function() {
      this.isEvolutionEnabled = evolutionAttribute in this.root.dataset;
      if (this.isEvolutionEnabled) {
        this.classNameMap = evolutionClassNameMap;
      } else if (matches(this.root, strings.DEPRECATED_SELECTOR)) {
        this.classNameMap = deprecatedClassNameMap;
      } else {
        this.classNameMap = Object.values(cssClasses).reduce(function(obj, className) {
          obj[className] = className;
          return obj;
        }, {});
      }
      this.handleClick = this.handleClickEvent.bind(this);
      this.handleKeydown = this.handleKeydownEvent.bind(this);
      this.focusInEventListener = this.handleFocusInEvent.bind(this);
      this.focusOutEventListener = this.handleFocusOutEvent.bind(this);
      this.listen("keydown", this.handleKeydown);
      this.listen("click", this.handleClick);
      this.listen("focusin", this.focusInEventListener);
      this.listen("focusout", this.focusOutEventListener);
      this.layout();
      this.initializeListType();
      this.ensureFocusable();
    };
    MDCList2.prototype.destroy = function() {
      this.unlisten("keydown", this.handleKeydown);
      this.unlisten("click", this.handleClick);
      this.unlisten("focusin", this.focusInEventListener);
      this.unlisten("focusout", this.focusOutEventListener);
    };
    MDCList2.prototype.layout = function() {
      var direction = this.root.getAttribute(strings.ARIA_ORIENTATION);
      this.vertical = direction !== strings.ARIA_ORIENTATION_HORIZONTAL;
      var itemSelector = "." + this.classNameMap[cssClasses.LIST_ITEM_CLASS] + ":not([tabindex])";
      var childSelector = strings.FOCUSABLE_CHILD_ELEMENTS;
      var itemEls = this.root.querySelectorAll(itemSelector);
      if (itemEls.length) {
        Array.prototype.forEach.call(itemEls, function(el) {
          el.setAttribute("tabindex", "-1");
        });
      }
      var focusableChildEls = this.root.querySelectorAll(childSelector);
      if (focusableChildEls.length) {
        Array.prototype.forEach.call(focusableChildEls, function(el) {
          el.setAttribute("tabindex", "-1");
        });
      }
      if (this.isEvolutionEnabled) {
        this.foundation.setUseSelectedAttribute(true);
      }
      this.foundation.layout();
    };
    MDCList2.prototype.getPrimaryText = function(item) {
      var _a2;
      var primaryText = item.querySelector("." + this.classNameMap[cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS]);
      if (this.isEvolutionEnabled || primaryText) {
        return (_a2 = primaryText === null || primaryText === void 0 ? void 0 : primaryText.textContent) !== null && _a2 !== void 0 ? _a2 : "";
      }
      var singleLineText = item.querySelector("." + this.classNameMap[cssClasses.LIST_ITEM_TEXT_CLASS]);
      return singleLineText && singleLineText.textContent || "";
    };
    MDCList2.prototype.initializeListType = function() {
      var _this = this;
      this.isInteractive = matches(this.root, strings.ARIA_INTERACTIVE_ROLES_SELECTOR);
      if (this.isEvolutionEnabled && this.isInteractive) {
        var selection = Array.from(this.root.querySelectorAll(strings.SELECTED_ITEM_SELECTOR), function(listItem) {
          return _this.listElements.indexOf(listItem);
        });
        if (matches(this.root, strings.ARIA_MULTI_SELECTABLE_SELECTOR)) {
          this.selectedIndex = selection;
        } else if (selection.length > 0) {
          this.selectedIndex = selection[0];
        }
        return;
      }
      var checkboxListItems = this.root.querySelectorAll(strings.ARIA_ROLE_CHECKBOX_SELECTOR);
      var radioSelectedListItem = this.root.querySelector(strings.ARIA_CHECKED_RADIO_SELECTOR);
      if (checkboxListItems.length) {
        var preselectedItems = this.root.querySelectorAll(strings.ARIA_CHECKED_CHECKBOX_SELECTOR);
        this.selectedIndex = Array.from(preselectedItems, function(listItem) {
          return _this.listElements.indexOf(listItem);
        });
      } else if (radioSelectedListItem) {
        this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
      }
    };
    MDCList2.prototype.setEnabled = function(itemIndex, isEnabled) {
      this.foundation.setEnabled(itemIndex, isEnabled);
    };
    MDCList2.prototype.typeaheadMatchItem = function(nextChar, startingIndex) {
      return this.foundation.typeaheadMatchItem(
        nextChar,
        startingIndex,
        /** skipFocus */
        true
      );
    };
    MDCList2.prototype.getDefaultFoundation = function() {
      var _this = this;
      var adapter = {
        addClassForElementIndex: function(index, className) {
          var element = _this.listElements[index];
          if (element) {
            element.classList.add(_this.classNameMap[className]);
          }
        },
        focusItemAtIndex: function(index) {
          var element = _this.listElements[index];
          if (element) {
            element.focus();
          }
        },
        getAttributeForElementIndex: function(index, attr) {
          return _this.listElements[index].getAttribute(attr);
        },
        getFocusedElementIndex: function() {
          return _this.listElements.indexOf(document.activeElement);
        },
        getListItemCount: function() {
          return _this.listElements.length;
        },
        getPrimaryTextAtIndex: function(index) {
          return _this.getPrimaryText(_this.listElements[index]);
        },
        hasCheckboxAtIndex: function(index) {
          var listItem = _this.listElements[index];
          return !!listItem.querySelector(strings.CHECKBOX_SELECTOR);
        },
        hasRadioAtIndex: function(index) {
          var listItem = _this.listElements[index];
          return !!listItem.querySelector(strings.RADIO_SELECTOR);
        },
        isCheckboxCheckedAtIndex: function(index) {
          var listItem = _this.listElements[index];
          var toggleEl = listItem.querySelector(strings.CHECKBOX_SELECTOR);
          return toggleEl.checked;
        },
        isFocusInsideList: function() {
          return _this.root !== document.activeElement && _this.root.contains(document.activeElement);
        },
        isRootFocused: function() {
          return document.activeElement === _this.root;
        },
        listItemAtIndexHasClass: function(index, className) {
          return _this.listElements[index].classList.contains(_this.classNameMap[className]);
        },
        notifyAction: function(index) {
          _this.emit(
            strings.ACTION_EVENT,
            { index },
            /** shouldBubble */
            true
          );
        },
        notifySelectionChange: function(changedIndices) {
          _this.emit(
            strings.SELECTION_CHANGE_EVENT,
            { changedIndices },
            /** shouldBubble */
            true
          );
        },
        removeClassForElementIndex: function(index, className) {
          var element = _this.listElements[index];
          if (element) {
            element.classList.remove(_this.classNameMap[className]);
          }
        },
        setAttributeForElementIndex: function(index, attr, value) {
          var element = _this.listElements[index];
          if (element) {
            element.setAttribute(attr, value);
          }
        },
        setCheckedCheckboxOrRadioAtIndex: function(index, isChecked) {
          var listItem = _this.listElements[index];
          var toggleEl = listItem.querySelector(strings.CHECKBOX_RADIO_SELECTOR);
          toggleEl.checked = isChecked;
          var event = document.createEvent("Event");
          event.initEvent("change", true, true);
          toggleEl.dispatchEvent(event);
        },
        setTabIndexForListItemChildren: function(listItemIndex, tabIndexValue) {
          var element = _this.listElements[listItemIndex];
          var selector = strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX;
          Array.prototype.forEach.call(element.querySelectorAll(selector), function(el) {
            el.setAttribute("tabindex", tabIndexValue);
          });
        }
      };
      return new MDCListFoundation(adapter);
    };
    MDCList2.prototype.ensureFocusable = function() {
      if (this.isEvolutionEnabled && this.isInteractive) {
        if (!this.root.querySelector("." + this.classNameMap[cssClasses.LIST_ITEM_CLASS] + '[tabindex="0"]')) {
          var index = this.initialFocusIndex();
          if (index !== -1) {
            this.listElements[index].tabIndex = 0;
          }
        }
      }
    };
    MDCList2.prototype.initialFocusIndex = function() {
      if (this.selectedIndex instanceof Array && this.selectedIndex.length > 0) {
        return this.selectedIndex[0];
      }
      if (typeof this.selectedIndex === "number" && this.selectedIndex !== numbers.UNSET_INDEX) {
        return this.selectedIndex;
      }
      var el = this.root.querySelector("." + this.classNameMap[cssClasses.LIST_ITEM_CLASS] + ":not(." + this.classNameMap[cssClasses.LIST_ITEM_DISABLED_CLASS] + ")");
      if (el === null) {
        return -1;
      }
      return this.getListItemIndex(el);
    };
    MDCList2.prototype.getListItemIndex = function(el) {
      var nearestParent = closest(el, "." + this.classNameMap[cssClasses.LIST_ITEM_CLASS] + ", ." + this.classNameMap[cssClasses.ROOT]);
      if (nearestParent && matches(nearestParent, "." + this.classNameMap[cssClasses.LIST_ITEM_CLASS])) {
        return this.listElements.indexOf(nearestParent);
      }
      return -1;
    };
    MDCList2.prototype.handleFocusInEvent = function(evt) {
      var index = this.getListItemIndex(evt.target);
      this.foundation.handleFocusIn(index);
    };
    MDCList2.prototype.handleFocusOutEvent = function(evt) {
      var index = this.getListItemIndex(evt.target);
      this.foundation.handleFocusOut(index);
    };
    MDCList2.prototype.handleKeydownEvent = function(evt) {
      var index = this.getListItemIndex(evt.target);
      var target = evt.target;
      this.foundation.handleKeydown(evt, target.classList.contains(this.classNameMap[cssClasses.LIST_ITEM_CLASS]), index);
    };
    MDCList2.prototype.handleClickEvent = function(evt) {
      var index = this.getListItemIndex(evt.target);
      var target = evt.target;
      var toggleCheckbox = !matches(target, strings.CHECKBOX_RADIO_SELECTOR);
      this.foundation.handleClick(index, toggleCheckbox, evt);
    };
    return MDCList2;
  }(MDCComponent)
);

// node_modules/@material/drawer/dismissible/foundation.js
var import_dist31 = __toESM(require_dist());
var import_dist32 = __toESM(require_dist2());
var import_dist33 = __toESM(require_dist3());

// node_modules/@material/drawer/constants.js
var import_dist28 = __toESM(require_dist());
var import_dist29 = __toESM(require_dist2());
var import_dist30 = __toESM(require_dist3());
var cssClasses2 = {
  ANIMATE: "mdc-drawer--animate",
  CLOSING: "mdc-drawer--closing",
  DISMISSIBLE: "mdc-drawer--dismissible",
  MODAL: "mdc-drawer--modal",
  OPEN: "mdc-drawer--open",
  OPENING: "mdc-drawer--opening",
  ROOT: "mdc-drawer"
};
var strings2 = {
  APP_CONTENT_SELECTOR: ".mdc-drawer-app-content",
  CLOSE_EVENT: "MDCDrawer:closed",
  OPEN_EVENT: "MDCDrawer:opened",
  SCRIM_SELECTOR: ".mdc-drawer-scrim",
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  LIST_ITEM_ACTIVATED_SELECTOR: ".mdc-list-item--activated,.mdc-deprecated-list-item--activated"
};

// node_modules/@material/drawer/dismissible/foundation.js
var MDCDismissibleDrawerFoundation = (
  /** @class */
  function(_super) {
    __extends(MDCDismissibleDrawerFoundation2, _super);
    function MDCDismissibleDrawerFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCDismissibleDrawerFoundation2.defaultAdapter), adapter)) || this;
      _this.animationFrame = 0;
      _this.animationTimer = 0;
      return _this;
    }
    Object.defineProperty(MDCDismissibleDrawerFoundation2, "strings", {
      get: function() {
        return strings2;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCDismissibleDrawerFoundation2, "cssClasses", {
      get: function() {
        return cssClasses2;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCDismissibleDrawerFoundation2, "defaultAdapter", {
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
          elementHasClass: function() {
            return false;
          },
          notifyClose: function() {
            return void 0;
          },
          notifyOpen: function() {
            return void 0;
          },
          saveFocus: function() {
            return void 0;
          },
          restoreFocus: function() {
            return void 0;
          },
          focusActiveNavigationItem: function() {
            return void 0;
          },
          trapFocus: function() {
            return void 0;
          },
          releaseFocus: function() {
            return void 0;
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCDismissibleDrawerFoundation2.prototype.destroy = function() {
      if (this.animationFrame) {
        cancelAnimationFrame(this.animationFrame);
      }
      if (this.animationTimer) {
        clearTimeout(this.animationTimer);
      }
    };
    MDCDismissibleDrawerFoundation2.prototype.open = function() {
      var _this = this;
      if (this.isOpen() || this.isOpening() || this.isClosing()) {
        return;
      }
      this.adapter.addClass(cssClasses2.OPEN);
      this.adapter.addClass(cssClasses2.ANIMATE);
      this.runNextAnimationFrame(function() {
        _this.adapter.addClass(cssClasses2.OPENING);
      });
      this.adapter.saveFocus();
    };
    MDCDismissibleDrawerFoundation2.prototype.close = function() {
      if (!this.isOpen() || this.isOpening() || this.isClosing()) {
        return;
      }
      this.adapter.addClass(cssClasses2.CLOSING);
    };
    MDCDismissibleDrawerFoundation2.prototype.isOpen = function() {
      return this.adapter.hasClass(cssClasses2.OPEN);
    };
    MDCDismissibleDrawerFoundation2.prototype.isOpening = function() {
      return this.adapter.hasClass(cssClasses2.OPENING) || this.adapter.hasClass(cssClasses2.ANIMATE);
    };
    MDCDismissibleDrawerFoundation2.prototype.isClosing = function() {
      return this.adapter.hasClass(cssClasses2.CLOSING);
    };
    MDCDismissibleDrawerFoundation2.prototype.handleKeydown = function(evt) {
      var keyCode = evt.keyCode, key = evt.key;
      var isEscape = key === "Escape" || keyCode === 27;
      if (isEscape) {
        this.close();
      }
    };
    MDCDismissibleDrawerFoundation2.prototype.handleTransitionEnd = function(evt) {
      var OPENING = cssClasses2.OPENING, CLOSING = cssClasses2.CLOSING, OPEN = cssClasses2.OPEN, ANIMATE = cssClasses2.ANIMATE, ROOT = cssClasses2.ROOT;
      var isRootElement = this.isElement(evt.target) && this.adapter.elementHasClass(evt.target, ROOT);
      if (!isRootElement) {
        return;
      }
      if (this.isClosing()) {
        this.adapter.removeClass(OPEN);
        this.closed();
        this.adapter.restoreFocus();
        this.adapter.notifyClose();
      } else {
        this.adapter.focusActiveNavigationItem();
        this.opened();
        this.adapter.notifyOpen();
      }
      this.adapter.removeClass(ANIMATE);
      this.adapter.removeClass(OPENING);
      this.adapter.removeClass(CLOSING);
    };
    MDCDismissibleDrawerFoundation2.prototype.opened = function() {
    };
    MDCDismissibleDrawerFoundation2.prototype.closed = function() {
    };
    MDCDismissibleDrawerFoundation2.prototype.runNextAnimationFrame = function(callback) {
      var _this = this;
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = requestAnimationFrame(function() {
        _this.animationFrame = 0;
        clearTimeout(_this.animationTimer);
        _this.animationTimer = setTimeout(callback, 0);
      });
    };
    MDCDismissibleDrawerFoundation2.prototype.isElement = function(element) {
      return Boolean(element.classList);
    };
    return MDCDismissibleDrawerFoundation2;
  }(MDCFoundation)
);

// node_modules/@material/drawer/modal/foundation.js
var import_dist34 = __toESM(require_dist());
var import_dist35 = __toESM(require_dist2());
var import_dist36 = __toESM(require_dist3());
var MDCModalDrawerFoundation = (
  /** @class */
  function(_super) {
    __extends(MDCModalDrawerFoundation2, _super);
    function MDCModalDrawerFoundation2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCModalDrawerFoundation2.prototype.handleScrimClick = function() {
      this.close();
    };
    MDCModalDrawerFoundation2.prototype.opened = function() {
      this.adapter.trapFocus();
    };
    MDCModalDrawerFoundation2.prototype.closed = function() {
      this.adapter.releaseFocus();
    };
    return MDCModalDrawerFoundation2;
  }(MDCDismissibleDrawerFoundation)
);

// node_modules/@material/drawer/component.js
var cssClasses3 = MDCDismissibleDrawerFoundation.cssClasses;
var strings3 = MDCDismissibleDrawerFoundation.strings;
var MDCDrawer = (
  /** @class */
  function(_super) {
    __extends(MDCDrawer2, _super);
    function MDCDrawer2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCDrawer2.attachTo = function(root) {
      return new MDCDrawer2(root);
    };
    Object.defineProperty(MDCDrawer2.prototype, "open", {
      /**
       * @return boolean Proxies to the foundation's `open`/`close` methods.
       * Also returns true if drawer is in the open position.
       */
      get: function() {
        return this.foundation.isOpen();
      },
      /**
       * Toggles the drawer open and closed.
       */
      set: function(isOpen) {
        if (isOpen) {
          this.foundation.open();
        } else {
          this.foundation.close();
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCDrawer2.prototype, "list", {
      // initialSyncWithDOM()
      get: function() {
        return this.innerList;
      },
      enumerable: false,
      configurable: true
    });
    MDCDrawer2.prototype.initialize = function(focusTrapFactory, listFactory) {
      if (focusTrapFactory === void 0) {
        focusTrapFactory = function(el) {
          return new FocusTrap(el);
        };
      }
      if (listFactory === void 0) {
        listFactory = function(el) {
          return new MDCList(el);
        };
      }
      var listEl = this.root.querySelector(strings3.LIST_SELECTOR);
      if (listEl) {
        this.innerList = listFactory(listEl);
        this.innerList.wrapFocus = true;
      }
      this.focusTrapFactory = focusTrapFactory;
    };
    MDCDrawer2.prototype.initialSyncWithDOM = function() {
      var _this = this;
      var MODAL = cssClasses3.MODAL;
      var SCRIM_SELECTOR = strings3.SCRIM_SELECTOR;
      this.scrim = this.root.parentNode.querySelector(SCRIM_SELECTOR);
      if (this.scrim && this.root.classList.contains(MODAL)) {
        this.handleScrimClick = function() {
          return _this.foundation.handleScrimClick();
        };
        this.scrim.addEventListener("click", this.handleScrimClick);
        this.focusTrap = createFocusTrapInstance(this.root, this.focusTrapFactory);
      }
      this.handleKeydown = function(evt) {
        _this.foundation.handleKeydown(evt);
      };
      this.handleTransitionEnd = function(evt) {
        _this.foundation.handleTransitionEnd(evt);
      };
      this.listen("keydown", this.handleKeydown);
      this.listen("transitionend", this.handleTransitionEnd);
    };
    MDCDrawer2.prototype.destroy = function() {
      this.unlisten("keydown", this.handleKeydown);
      this.unlisten("transitionend", this.handleTransitionEnd);
      if (this.innerList) {
        this.innerList.destroy();
      }
      var MODAL = cssClasses3.MODAL;
      if (this.scrim && this.handleScrimClick && this.root.classList.contains(MODAL)) {
        this.scrim.removeEventListener("click", this.handleScrimClick);
        this.open = false;
      }
    };
    MDCDrawer2.prototype.getDefaultFoundation = function() {
      var _this = this;
      var adapter = {
        addClass: function(className) {
          _this.root.classList.add(className);
        },
        removeClass: function(className) {
          _this.root.classList.remove(className);
        },
        hasClass: function(className) {
          return _this.root.classList.contains(className);
        },
        elementHasClass: function(element, className) {
          return element.classList.contains(className);
        },
        saveFocus: function() {
          _this.previousFocus = document.activeElement;
        },
        restoreFocus: function() {
          var previousFocus = _this.previousFocus;
          if (previousFocus && previousFocus.focus && _this.root.contains(document.activeElement)) {
            previousFocus.focus();
          }
        },
        focusActiveNavigationItem: function() {
          var activeNavItemEl = _this.root.querySelector(strings3.LIST_ITEM_ACTIVATED_SELECTOR);
          if (activeNavItemEl) {
            activeNavItemEl.focus();
          }
        },
        notifyClose: function() {
          _this.emit(
            strings3.CLOSE_EVENT,
            {},
            true
            /* shouldBubble */
          );
        },
        notifyOpen: function() {
          _this.emit(
            strings3.OPEN_EVENT,
            {},
            true
            /* shouldBubble */
          );
        },
        trapFocus: function() {
          _this.focusTrap.trapFocus();
        },
        releaseFocus: function() {
          _this.focusTrap.releaseFocus();
        }
      };
      var DISMISSIBLE = cssClasses3.DISMISSIBLE, MODAL = cssClasses3.MODAL;
      if (this.root.classList.contains(DISMISSIBLE)) {
        return new MDCDismissibleDrawerFoundation(adapter);
      } else if (this.root.classList.contains(MODAL)) {
        return new MDCModalDrawerFoundation(adapter);
      } else {
        throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are " + DISMISSIBLE + " and " + MODAL + ".");
      }
    };
    return MDCDrawer2;
  }(MDCComponent)
);

export {
  FocusTrap,
  KEY,
  normalizeKey,
  isNavigationEvent,
  util_exports,
  cssClasses,
  strings,
  numbers,
  MDCListFoundation,
  MDCList,
  cssClasses2,
  strings2,
  MDCDismissibleDrawerFoundation,
  MDCModalDrawerFoundation,
  MDCDrawer
};
/*! Bundled license information:

@material/drawer/util.js:
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

@material/drawer/adapter.js:
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

@material/dom/focus-trap.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
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

@material/list/constants.js:
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

@material/dom/keyboard.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
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

@material/list/events.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
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

@material/list/typeahead.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
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

@material/list/foundation.js:
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

@material/list/component.js:
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

@material/drawer/constants.js:
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

@material/drawer/dismissible/foundation.js:
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

@material/drawer/modal/foundation.js:
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

@material/drawer/component.js:
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

@material/drawer/index.js:
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
//# sourceMappingURL=chunk-R5MIPIJ4.js.map
