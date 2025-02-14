import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  AppTask,
  BindingMode,
  Controller,
  CustomAttribute,
  CustomElement,
  DI,
  IAppRoot,
  IContainer,
  IController,
  IEventAggregator,
  IHistory,
  IInstruction,
  ILocation,
  ILogger,
  INode,
  IPlatform,
  IWindow,
  Metadata,
  Protocol,
  Registration,
  getResourceKeyFor,
  isCustomElementViewModel,
  onResolve,
  resolve
} from "./chunk-S7YNWOLH.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-OFI5MVGH.js";

// node_modules/@aurelia/router/dist/esm/index.dev.mjs
var import_dist4 = __toESM(require_dist(), 1);
var import_dist5 = __toESM(require_dist2(), 1);
var import_dist6 = __toESM(require_dist3(), 1);

// node_modules/@aurelia/route-recognizer/dist/esm/index.dev.mjs
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var Parameter = class {
  constructor(name, isOptional, isStar, pattern) {
    this.name = name;
    this.isOptional = isOptional;
    this.isStar = isStar;
    this.pattern = pattern;
  }
  satisfiesPattern(value) {
    if (this.pattern === null)
      return true;
    this.pattern.lastIndex = 0;
    return this.pattern.test(value);
  }
};
var ConfigurableRoute = class {
  constructor(path, caseSensitive, handler) {
    this.path = path;
    this.caseSensitive = caseSensitive;
    this.handler = handler;
  }
};
var Endpoint = class {
  get residualEndpoint() {
    return this._residualEndpoint;
  }
  /** @internal */
  set residualEndpoint(endpoint) {
    if (this._residualEndpoint !== null)
      throw new Error("Residual endpoint is already set");
    this._residualEndpoint = endpoint;
  }
  constructor(route2, params) {
    this.route = route2;
    this.params = params;
    this._residualEndpoint = null;
  }
  equalsOrResidual(other) {
    return other != null && this === other || this._residualEndpoint === other;
  }
};
var RecognizedRoute = class {
  constructor(endpoint, params) {
    this.endpoint = endpoint;
    const $params = /* @__PURE__ */ Object.create(null);
    for (const key in params) {
      const value = params[key];
      $params[key] = value != null ? decodeURIComponent(value) : value;
    }
    this.params = Object.freeze($params);
  }
};
var Candidate = class _Candidate {
  constructor(chars, states, skippedStates, result) {
    var _a;
    this.chars = chars;
    this.states = states;
    this.skippedStates = skippedStates;
    this.result = result;
    this.params = null;
    this.isConstrained = false;
    this.satisfiesConstraints = null;
    this.head = states[states.length - 1];
    this.endpoint = (_a = this.head) == null ? void 0 : _a.endpoint;
  }
  advance(ch) {
    const { chars, states, skippedStates, result } = this;
    let stateToAdd = null;
    let matchCount = 0;
    const state = states[states.length - 1];
    function $process(nextState, skippedState) {
      if (nextState.isMatch(ch)) {
        if (++matchCount === 1) {
          stateToAdd = nextState;
        } else {
          result.add(new _Candidate(chars.concat(ch), states.concat(nextState), skippedState === null ? skippedStates : skippedStates.concat(skippedState), result));
        }
      }
      if (state.segment === null && nextState.isOptional && nextState.nextStates !== null) {
        if (nextState.nextStates.length > 1) {
          throw createError(`${nextState.nextStates.length} nextStates`);
        }
        const separator = nextState.nextStates[0];
        if (!separator.isSeparator) {
          throw createError(`Not a separator`);
        }
        if (separator.nextStates !== null) {
          for (const $nextState of separator.nextStates) {
            $process($nextState, nextState);
          }
        }
      }
    }
    if (state.isDynamic) {
      $process(state, null);
    }
    if (state.nextStates !== null) {
      for (const nextState of state.nextStates) {
        $process(nextState, null);
      }
    }
    if (stateToAdd !== null) {
      states.push(this.head = stateToAdd);
      chars.push(ch);
      this.isConstrained = this.isConstrained || stateToAdd.isDynamic && stateToAdd.segment.isConstrained;
      if (stateToAdd.endpoint !== null) {
        this.endpoint = stateToAdd.endpoint;
      }
    }
    if (matchCount === 0) {
      result.remove(this);
    }
  }
  /** @internal */
  _finalize() {
    function collectSkippedStates(skippedStates, state) {
      const nextStates = state.nextStates;
      if (nextStates !== null) {
        if (nextStates.length === 1 && nextStates[0].segment === null) {
          collectSkippedStates(skippedStates, nextStates[0]);
        } else {
          for (const nextState of nextStates) {
            if (nextState.isOptional && nextState.endpoint !== null) {
              skippedStates.push(nextState);
              if (nextState.nextStates !== null) {
                for (const $nextState of nextState.nextStates) {
                  collectSkippedStates(skippedStates, $nextState);
                }
              }
              break;
            }
          }
        }
      }
    }
    collectSkippedStates(this.skippedStates, this.head);
    if (!this.isConstrained)
      return true;
    this._getParams();
    return this.satisfiesConstraints;
  }
  /** @internal */
  _getParams() {
    var _a;
    let params = this.params;
    if (params != null)
      return params;
    const { states, chars, endpoint } = this;
    params = {};
    this.satisfiesConstraints = true;
    for (const param of endpoint.params) {
      params[param.name] = void 0;
    }
    for (let i = 0, ii = states.length; i < ii; ++i) {
      const state = states[i];
      if (state.isDynamic) {
        const segment = state.segment;
        const name = segment.name;
        if (params[name] === void 0) {
          params[name] = chars[i];
        } else {
          params[name] += chars[i];
        }
        const checkConstraint = state.isConstrained && !Object.is((_a = states[i + 1]) == null ? void 0 : _a.segment, segment);
        if (!checkConstraint)
          continue;
        this.satisfiesConstraints = this.satisfiesConstraints && state.satisfiesConstraint(params[name]);
      }
    }
    if (this.satisfiesConstraints) {
      this.params = params;
    }
    return params;
  }
  /**
   * Compares this candidate to another candidate to determine the correct sorting order.
   *
   * This algorithm is different from `sortSolutions` in v1's route-recognizer in that it compares
   * the candidates segment-by-segment, rather than merely comparing the cumulative of segment types
   *
   * This resolves v1's ambiguity in situations like `/foo/:id/bar` vs. `/foo/bar/:id`, which had the
   * same sorting value because they both consist of two static segments and one dynamic segment.
   *
   * With this algorithm, `/foo/bar/:id` would always be sorted first because the second segment is different,
   * and static wins over dynamic.
   *
   * ### NOTE
   * This algorithm violates some of the invariants of v1's algorithm,
   * but those invariants were arguably not very sound to begin with. Example:
   *
   * `/foo/*path/bar/baz` vs. `/foo/bar/*path1/*path2`
   * - in v1, the first would win because that match has fewer stars
   * - in v2, the second will win because there is a bigger static match at the start of the pattern
   *
   * The algorithm should be more logical and easier to reason about in v2, but it's important to be aware of
   * subtle difference like this which might surprise some users who happened to rely on this behavior from v1,
   * intentionally or unintentionally.
   *
   * @param b - The candidate to compare this to.
   * Parameter name is `b` because the method should be used like so: `states.sort((a, b) => a.compareTo(b))`.
   * This will bring the candidate with the highest score to the first position of the array.
   */
  compareTo(b) {
    const statesA = this.states;
    const statesB = b.states;
    for (let iA = 0, iB = 0, ii = Math.max(statesA.length, statesB.length); iA < ii; ++iA) {
      let stateA = statesA[iA];
      if (stateA === void 0) {
        return 1;
      }
      let stateB = statesB[iB];
      if (stateB === void 0) {
        return -1;
      }
      let segmentA = stateA.segment;
      let segmentB = stateB.segment;
      if (segmentA === null) {
        if (segmentB === null) {
          ++iB;
          continue;
        }
        if ((stateA = statesA[++iA]) === void 0) {
          return 1;
        }
        segmentA = stateA.segment;
      } else if (segmentB === null) {
        if ((stateB = statesB[++iB]) === void 0) {
          return -1;
        }
        segmentB = stateB.segment;
      }
      if (segmentA.kind < segmentB.kind) {
        return 1;
      }
      if (segmentA.kind > segmentB.kind) {
        return -1;
      }
      ++iB;
    }
    const skippedStatesA = this.skippedStates;
    const skippedStatesB = b.skippedStates;
    const skippedStatesALen = skippedStatesA.length;
    const skippedStatesBLen = skippedStatesB.length;
    if (skippedStatesALen < skippedStatesBLen) {
      return 1;
    }
    if (skippedStatesALen > skippedStatesBLen) {
      return -1;
    }
    for (let i = 0; i < skippedStatesALen; ++i) {
      const skippedStateA = skippedStatesA[i];
      const skippedStateB = skippedStatesB[i];
      if (skippedStateA.length < skippedStateB.length) {
        return 1;
      }
      if (skippedStateA.length > skippedStateB.length) {
        return -1;
      }
    }
    return 0;
  }
};
function hasEndpoint(candidate) {
  return candidate.head.endpoint !== null;
}
function compareChains(a, b) {
  return a.compareTo(b);
}
var RecognizeResult = class {
  get isEmpty() {
    return this.candidates.length === 0;
  }
  constructor(rootState) {
    this.candidates = [];
    this.candidates = [new Candidate([""], [rootState], [], this)];
  }
  getSolution() {
    const candidates = this.candidates.filter((x) => hasEndpoint(x) && x._finalize());
    if (candidates.length === 0) {
      return null;
    }
    candidates.sort(compareChains);
    return candidates[0];
  }
  add(candidate) {
    this.candidates.push(candidate);
  }
  remove(candidate) {
    this.candidates.splice(this.candidates.indexOf(candidate), 1);
  }
  advance(ch) {
    const candidates = this.candidates.slice();
    for (const candidate of candidates) {
      candidate.advance(ch);
    }
  }
};
var RESIDUE = "$$residue";
var routeParameterPattern = /^:(?<name>[^?\s{}]+)(?:\{\{(?<constraint>.+)\}\})?(?<optional>\?)?$/g;
var RouteRecognizer = class {
  constructor() {
    this.rootState = new State(null, null, "");
    this.cache = /* @__PURE__ */ new Map();
    this.endpointLookup = /* @__PURE__ */ new Map();
  }
  add(routeOrRoutes, addResidue = false) {
    var _a, _b;
    let params;
    let endpoint;
    if (routeOrRoutes instanceof Array) {
      for (const route2 of routeOrRoutes) {
        endpoint = this.$add(route2, false);
        params = endpoint.params;
        if (!addResidue || (((_a = params[params.length - 1]) == null ? void 0 : _a.isStar) ?? false))
          continue;
        endpoint.residualEndpoint = this.$add({ ...route2, path: `${route2.path}/*${RESIDUE}` }, true);
      }
    } else {
      endpoint = this.$add(routeOrRoutes, false);
      params = endpoint.params;
      if (addResidue && !(((_b = params[params.length - 1]) == null ? void 0 : _b.isStar) ?? false)) {
        endpoint.residualEndpoint = this.$add({ ...routeOrRoutes, path: `${routeOrRoutes.path}/*${RESIDUE}` }, true);
      }
    }
    this.cache.clear();
  }
  $add(route2, addResidue) {
    var _a;
    const path = route2.path;
    const lookup = this.endpointLookup;
    if (lookup.has(path))
      throw createError(`Cannot add duplicate path '${path}'.`);
    const $route = new ConfigurableRoute(path, route2.caseSensitive === true, route2.handler);
    const parts = path === "" ? [""] : path.split("/").filter(isNotEmpty);
    const params = [];
    let state = this.rootState;
    for (const part of parts) {
      state = state.append(null, "/");
      switch (part.charAt(0)) {
        case ":": {
          routeParameterPattern.lastIndex = 0;
          const match = routeParameterPattern.exec(part);
          const { name, optional } = (match == null ? void 0 : match.groups) ?? {};
          const isOptional = optional === "?";
          if (name === RESIDUE)
            throw new Error(`Invalid parameter name; usage of the reserved parameter name '${RESIDUE}' is used.`);
          const constraint = (_a = match == null ? void 0 : match.groups) == null ? void 0 : _a.constraint;
          const pattern = constraint != null ? new RegExp(constraint) : null;
          params.push(new Parameter(name, isOptional, false, pattern));
          state = new DynamicSegment(name, isOptional, pattern).appendTo(state);
          break;
        }
        case "*": {
          const name = part.slice(1);
          let kind;
          if (name === RESIDUE) {
            if (!addResidue)
              throw new Error(`Invalid parameter name; usage of the reserved parameter name '${RESIDUE}' is used.`);
            kind = 1;
          } else {
            kind = 2;
          }
          params.push(new Parameter(name, true, true, null));
          state = new StarSegment(name, kind).appendTo(state);
          break;
        }
        default: {
          state = new StaticSegment(part, $route.caseSensitive).appendTo(state);
          break;
        }
      }
    }
    const endpoint = new Endpoint($route, params);
    state.setEndpoint(endpoint);
    lookup.set(path, endpoint);
    return endpoint;
  }
  recognize(path) {
    let result = this.cache.get(path);
    if (result === void 0) {
      this.cache.set(path, result = this.$recognize(path));
    }
    return result;
  }
  $recognize(path) {
    path = decodeURI(path);
    if (!path.startsWith("/")) {
      path = `/${path}`;
    }
    if (path.length > 1 && path.endsWith("/")) {
      path = path.slice(0, -1);
    }
    const result = new RecognizeResult(this.rootState);
    for (let i = 0, ii = path.length; i < ii; ++i) {
      const ch = path.charAt(i);
      result.advance(ch);
      if (result.isEmpty) {
        return null;
      }
    }
    const candidate = result.getSolution();
    if (candidate === null) {
      return null;
    }
    const { endpoint } = candidate;
    const params = candidate._getParams();
    return new RecognizedRoute(endpoint, params);
  }
  getEndpoint(path) {
    return this.endpointLookup.get(path) ?? null;
  }
};
var State = class _State {
  constructor(prevState, segment, value) {
    this.prevState = prevState;
    this.segment = segment;
    this.value = value;
    this.nextStates = null;
    this.endpoint = null;
    this.isConstrained = false;
    switch (segment == null ? void 0 : segment.kind) {
      case 3:
        this.length = prevState.length + 1;
        this.isSeparator = false;
        this.isDynamic = true;
        this.isOptional = segment.optional;
        this.isConstrained = segment.isConstrained;
        break;
      case 2:
      case 1:
        this.length = prevState.length + 1;
        this.isSeparator = false;
        this.isDynamic = true;
        this.isOptional = false;
        break;
      case 4:
        this.length = prevState.length + 1;
        this.isSeparator = false;
        this.isDynamic = false;
        this.isOptional = false;
        break;
      case void 0:
        this.length = prevState === null ? 0 : prevState.length;
        this.isSeparator = true;
        this.isDynamic = false;
        this.isOptional = false;
        break;
    }
  }
  append(segment, value) {
    let state;
    let nextStates = this.nextStates;
    if (nextStates === null) {
      state = void 0;
      nextStates = this.nextStates = [];
    } else if (segment === null) {
      state = nextStates.find((s) => s.value === value);
    } else {
      state = nextStates.find((s) => {
        var _a;
        return (_a = s.segment) == null ? void 0 : _a.equals(segment);
      });
    }
    if (state === void 0) {
      nextStates.push(state = new _State(this, segment, value));
    }
    return state;
  }
  setEndpoint(endpoint) {
    if (this.endpoint !== null) {
      throw createError(`Cannot add ambiguous route. The pattern '${endpoint.route.path}' clashes with '${this.endpoint.route.path}'`);
    }
    this.endpoint = endpoint;
    if (this.isOptional) {
      this.prevState.setEndpoint(endpoint);
      if (this.prevState.isSeparator && this.prevState.prevState !== null) {
        this.prevState.prevState.setEndpoint(endpoint);
      }
    }
  }
  isMatch(ch) {
    const segment = this.segment;
    switch (segment == null ? void 0 : segment.kind) {
      case 3:
        return !this.value.includes(ch);
      case 2:
      case 1:
        return true;
      case 4:
      case void 0:
        return this.value.includes(ch);
    }
  }
  satisfiesConstraint(value) {
    return this.isConstrained ? this.segment.satisfiesPattern(value) : true;
  }
};
function isNotEmpty(segment) {
  return segment.length > 0;
}
var StaticSegment = class {
  get kind() {
    return 4;
  }
  constructor(value, caseSensitive) {
    this.value = value;
    this.caseSensitive = caseSensitive;
  }
  appendTo(state) {
    const { value, value: { length } } = this;
    if (this.caseSensitive) {
      for (let i = 0; i < length; ++i) {
        state = state.append(
          /* segment */
          this,
          /* value   */
          value.charAt(i)
        );
      }
    } else {
      for (let i = 0; i < length; ++i) {
        const ch = value.charAt(i);
        state = state.append(
          /* segment */
          this,
          /* value   */
          ch.toUpperCase() + ch.toLowerCase()
        );
      }
    }
    return state;
  }
  equals(b) {
    return b.kind === 4 && b.caseSensitive === this.caseSensitive && b.value === this.value;
  }
};
var DynamicSegment = class {
  get kind() {
    return 3;
  }
  constructor(name, optional, pattern) {
    this.name = name;
    this.optional = optional;
    this.pattern = pattern;
    if (pattern === void 0)
      throw new Error(`Pattern is undefined`);
    this.isConstrained = pattern !== null;
  }
  appendTo(state) {
    state = state.append(
      /* segment */
      this,
      /* value   */
      "/"
    );
    return state;
  }
  equals(b) {
    return b.kind === 3 && b.optional === this.optional && b.name === this.name;
  }
  satisfiesPattern(value) {
    if (this.pattern === null)
      return true;
    this.pattern.lastIndex = 0;
    return this.pattern.test(value);
  }
};
var StarSegment = class {
  constructor(name, kind) {
    this.name = name;
    this.kind = kind;
  }
  appendTo(state) {
    state = state.append(
      /* segment */
      this,
      /* value   */
      ""
    );
    return state;
  }
  equals(b) {
    return (b.kind === 2 || b.kind === 1) && b.name === this.name;
  }
};
var createError = (msg) => new Error(msg);

// node_modules/@aurelia/router/dist/esm/index.dev.mjs
var Endpoint$1 = class Endpoint2 {
  constructor(router, name, connectedCE, options = {}) {
    this.router = router;
    this.name = name;
    this.connectedCE = connectedCE;
    this.options = options;
    this.contents = [];
    this.transitionAction = "";
    this.path = null;
  }
  /**
   * The current content of the endpoint
   */
  getContent() {
    return this.contents[0];
  }
  /**
   * The next, to be transitioned in, content of the endpoint
   */
  getNextContent() {
    return this.contents.length > 1 ? this.contents[this.contents.length - 1] : null;
  }
  /**
   * The content of the endpoint from a specific time (index)
   */
  getTimeContent(_timestamp = Infinity) {
    return this.getContent();
  }
  /**
   * The content for a specific navigation (or coordinator)
   */
  getNavigationContent(navigation) {
    if (navigation instanceof NavigationCoordinator) {
      navigation = navigation.navigation;
    }
    if (navigation instanceof Navigation) {
      return this.contents.find((content) => content.navigation === navigation) ?? null;
    }
    return null;
  }
  /**
   * The active content, next or current.
   */
  get activeContent() {
    return this.getNextContent() ?? this.getContent();
  }
  /**
   * The routing scope that's currently, based on content, connected
   * to the endpoint. This is always the actually connected scope.
   */
  get connectedScope() {
    var _a;
    return (_a = this.activeContent) == null ? void 0 : _a.connectedScope;
  }
  /**
   * The current, based on content, routing scope for the endpoint.
   * The scope used when finding next scope endpoints and configured routes.
   */
  get scope() {
    return this.connectedScope.scope;
  }
  /**
   * The routing scope that currently, based on content, owns the viewport.
   */
  get owningScope() {
    return this.connectedScope.owningScope;
  }
  /**
   * The connected custom element's controller.
   */
  get connectedController() {
    var _a;
    return ((_a = this.connectedCE) == null ? void 0 : _a.$controller) ?? null;
  }
  /**
   * Whether the endpoint is a Viewport.
   */
  get isViewport() {
    return this instanceof Viewport;
  }
  /**
   * Whether the endpoint is a ViewportScope.
   */
  get isViewportScope() {
    return this instanceof ViewportScope;
  }
  /**
   * Whether the endpoint is empty. Overloaded with proper check
   * by Viewport and ViewportScope.
   */
  get isEmpty() {
    return false;
  }
  /**
   * For debug purposes.
   */
  get pathname() {
    return this.connectedScope.pathname;
  }
  /**
   * For debug purposes.
   */
  toString() {
    throw new Error(`Method 'toString' needs to be implemented in all endpoints!`);
  }
  /**
   * Set the next content for the endpoint. Returns the action that the endpoint
   * will take when the navigation coordinator starts the transition.
   *
   * @param _instruction - The routing instruction describing the next content
   * @param _navigation - The navigation that requests the content change
   */
  setNextContent(_instruction, _navigation) {
    throw new Error(`Method 'setNextContent' needs to be implemented in all endpoints!`);
  }
  /**
   * Connect an endpoint CustomElement to this endpoint, applying options
   * while doing so.
   *
   * @param _connectedCE - The custom element to connect
   * @param _options - The options to apply
   */
  setConnectedCE(_connectedCE, _options) {
    throw new Error(`Method 'setConnectedCE' needs to be implemented in all endpoints!`);
  }
  /**
   * Transition from current content to the next.
   *
   * @param _coordinator - The coordinator of the navigation
   */
  transition(_coordinator) {
    throw new Error(`Method 'transition' needs to be implemented in all endpoints!`);
  }
  /**
   * Finalize the change of content by making the next content the current
   * content. The previously current content is deleted.
   */
  finalizeContentChange(_coordinator, _step) {
    throw new Error(`Method 'finalizeContentChange' needs to be implemented in all endpoints!`);
  }
  /**
   * Abort the change of content. The next content is freed/discarded.
   *
   * @param _step - The previous step in this transition Run
   */
  cancelContentChange(_coordinator, _noExitStep = null) {
    throw new Error(`Method 'cancelContentChange' needs to be implemented in all endpoints!`);
  }
  /**
   * Get any configured routes in the relevant content's component type.
   */
  getRoutes() {
    throw new Error(`Method 'getRoutes' needs to be implemented in all endpoints!`);
  }
  /**
   * Get the title for the content.
   *
   * @param navigation - The navigation that requests the content change
   */
  getTitle(_navigation) {
    throw new Error(`Method 'getTitle' needs to be implemented in all endpoints!`);
  }
  /**
   * Remove the endpoint, deleting its contents.
   *
   * @param _step - The previous step in this transition Run
   * @param _connectedCE - The custom element that's being removed
   */
  removeEndpoint(_step, _connectedCE) {
    this.contents.forEach((content) => content.delete());
    return true;
  }
  /**
   * Check if the next content can be unloaded.
   *
   * @param step - The previous step in this transition Run
   */
  canUnload(_coordinator, _step) {
    return true;
  }
  /**
   * Check if the next content can be loaded.
   *
   * @param step - The previous step in this transition Run
   */
  canLoad(_coordinator, _step) {
    return true;
  }
  /**
   * Unload the next content.
   *
   * @param step - The previous step in this transition Run
   */
  unload(_coordinator, _step) {
    return;
  }
  /**
   * Load the next content.
   *
   * @param step - The previous step in this transition Run
   */
  load(_coordinator, _step) {
    return;
  }
};
var EndpointContent = class {
  constructor(router, endpoint, owningScope, hasScope, instruction = RoutingInstruction.create(""), navigation = Navigation.create({
    instruction: "",
    fullStateInstruction: ""
  })) {
    var _a;
    this.router = router;
    this.endpoint = endpoint;
    this.instruction = instruction;
    this.navigation = navigation;
    this.completed = false;
    this.connectedScope = new RoutingScope(router, hasScope, owningScope, this);
    if (this.router.rootScope !== null) {
      (((_a = this.endpoint.connectedScope) == null ? void 0 : _a.parent) ?? this.router.rootScope.scope).addChild(this.connectedScope);
    }
  }
  /**
   * Whether the endpoint content is the active one within its endpoint
   */
  get isActive() {
    return this.endpoint.activeContent === this;
  }
  /**
   * Delete the endpoint content and its routing scope
   */
  delete() {
    var _a;
    (_a = this.connectedScope.parent) == null ? void 0 : _a.removeChild(this.connectedScope);
  }
};
var FoundRoute = class {
  constructor(match = null, matching = "", instructions = [], remaining = "", params = {}) {
    this.match = match;
    this.matching = matching;
    this.instructions = instructions;
    this.remaining = remaining;
    this.params = params;
  }
  get foundConfiguration() {
    return this.match !== null;
  }
  get foundInstructions() {
    return this.instructions.some((instruction) => !instruction.component.none);
  }
  get hasRemaining() {
    return this.instructions.some((instruction) => instruction.hasNextScopeInstructions);
  }
};
var InstructionParser = class _InstructionParser {
  static parse(seps, instructions, grouped, topScope) {
    if (!instructions) {
      return { instructions: [], remaining: "" };
    }
    if (instructions.startsWith(seps.sibling) && !_InstructionParser.isAdd(seps, instructions)) {
      throw new Error(`Instruction parser error: Unnecessary siblings separator ${seps.sibling} in beginning of instruction part "${instructions}".`);
    }
    const routingInstructions = [];
    let guard = 1e3;
    while (instructions.length && guard) {
      guard--;
      if (instructions.startsWith(seps.scope)) {
        if (routingInstructions.length === 0) {
          throw new Error(`Instruction parser error: Children without parent in instruction part "(${instructions}" is not allowed.`);
        }
        topScope = false;
        instructions = instructions.slice(seps.scope.length);
        const groupStart = instructions.startsWith(seps.groupStart);
        if (groupStart) {
          instructions = instructions.slice(seps.groupStart.length);
          grouped = true;
        }
        const { instructions: found, remaining } = _InstructionParser.parse(seps, instructions, groupStart, false);
        routingInstructions[routingInstructions.length - 1].nextScopeInstructions = found;
        instructions = remaining;
      } else if (instructions.startsWith(seps.groupStart)) {
        instructions = instructions.slice(seps.groupStart.length);
        const { instructions: found, remaining } = _InstructionParser.parse(seps, instructions, true, topScope);
        routingInstructions.push(...found);
        instructions = remaining;
      } else if (instructions.startsWith(seps.groupEnd)) {
        if (grouped) {
          instructions = instructions.slice(seps.groupEnd.length);
        }
        let i = 0;
        const ii = instructions.length;
        for (; i < ii; i++) {
          if (instructions.slice(i, i + seps.sibling.length) === seps.sibling) {
            return { instructions: routingInstructions, remaining: instructions };
          }
          if (instructions.slice(i, i + seps.groupEnd.length) !== seps.groupEnd) {
            if (routingInstructions.length > 1) {
              throw new Error(`Instruction parser error: Children below scope ${seps.groupStart}${seps.groupEnd} in instruction part "(${instructions}" is not allowed.`);
            } else {
              instructions = instructions.slice(i);
              break;
            }
          }
        }
        if (i >= ii) {
          return { instructions: routingInstructions, remaining: instructions };
        }
      } else if (instructions.startsWith(seps.sibling) && !_InstructionParser.isAdd(seps, instructions)) {
        if (!grouped) {
          return { instructions: routingInstructions, remaining: instructions };
        }
        instructions = instructions.slice(seps.sibling.length);
      } else {
        const { instruction: routingInstruction, remaining } = _InstructionParser.parseOne(seps, instructions);
        routingInstructions.push(routingInstruction);
        instructions = remaining;
      }
    }
    return { instructions: routingInstructions, remaining: instructions };
  }
  static isAdd(seps, instruction) {
    return instruction === seps.add || instruction.startsWith(`${seps.add}${seps.viewport}`);
  }
  static parseOne(seps, instruction) {
    const tokens = [seps.parameters, seps.viewport, seps.noScope, seps.groupEnd, seps.scope, seps.sibling];
    let component = void 0;
    let parametersString = void 0;
    let viewport = void 0;
    let scope = true;
    let token;
    let pos;
    const unparsed = instruction;
    const specials = [seps.add, seps.clear];
    for (const special of specials) {
      if (instruction === special) {
        component = instruction;
        instruction = "";
        tokens.shift();
        tokens.shift();
        token = seps.viewport;
        break;
      }
    }
    if (component === void 0) {
      for (const special of specials) {
        if (instruction.startsWith(`${special}${seps.viewport}`)) {
          component = special;
          instruction = instruction.slice(`${special}${seps.viewport}`.length);
          tokens.shift();
          tokens.shift();
          token = seps.viewport;
          break;
        }
      }
    }
    if (component === void 0) {
      ({ token, pos } = _InstructionParser.findNextToken(instruction, tokens));
      component = pos !== -1 ? instruction.slice(0, pos) : instruction;
      instruction = pos !== -1 ? instruction.slice(pos + token.length) : "";
      tokens.shift();
      if (token === seps.parameters) {
        ({ token, pos } = _InstructionParser.findNextToken(instruction, [seps.parametersEnd]));
        parametersString = instruction.slice(0, pos);
        instruction = instruction.slice(pos + token.length);
        ({ token } = _InstructionParser.findNextToken(instruction, tokens));
        instruction = instruction.slice(token.length);
      }
      tokens.shift();
    }
    if (token === seps.viewport) {
      ({ token, pos } = _InstructionParser.findNextToken(instruction, tokens));
      viewport = pos !== -1 ? instruction.slice(0, pos) : instruction;
      instruction = pos !== -1 ? instruction.slice(pos + token.length) : "";
    }
    tokens.shift();
    if (token === seps.noScope) {
      scope = false;
    }
    if (token === seps.groupEnd || token === seps.scope || token === seps.sibling) {
      instruction = `${token}${instruction}`;
    }
    if ((component ?? "") === "") {
      throw new Error(`Instruction parser error: No component specified in instruction part "${instruction}".`);
    }
    const routingInstruction = RoutingInstruction.create(component, viewport, parametersString, scope);
    routingInstruction.unparsed = unparsed;
    return { instruction: routingInstruction, remaining: instruction };
  }
  static findNextToken(instruction, tokens) {
    const matches = {};
    for (const token of tokens) {
      const tokenPos = instruction.indexOf(token);
      if (tokenPos > -1) {
        matches[token] = instruction.indexOf(token);
      }
    }
    const pos = Math.min(...Object.values(matches));
    for (const token in matches) {
      if (matches[token] === pos) {
        return { token, pos };
      }
    }
    return { token: "", pos: -1 };
  }
};
var TitleOptions = class _TitleOptions {
  constructor(appTitle = "${componentTitles}${appTitleSeparator}Aurelia", appTitleSeparator = " | ", componentTitleOrder = "top-down", componentTitleSeparator = " > ", useComponentNames = true, componentPrefix = "app-", transformTitle) {
    this.appTitle = appTitle;
    this.appTitleSeparator = appTitleSeparator;
    this.componentTitleOrder = componentTitleOrder;
    this.componentTitleSeparator = componentTitleSeparator;
    this.useComponentNames = useComponentNames;
    this.componentPrefix = componentPrefix;
    this.transformTitle = transformTitle;
  }
  static create(input = {}) {
    input = typeof input === "string" ? { appTitle: input } : input;
    return new _TitleOptions(input.appTitle, input.appTitleSeparator, input.componentTitleOrder, input.componentTitleSeparator, input.useComponentNames, input.componentPrefix, input.transformTitle);
  }
  static for(context) {
    return RouterOptions.for(context).title;
  }
  apply(input = {}) {
    input = typeof input === "string" ? { appTitle: input } : input;
    this.appTitle = input.appTitle ?? this.appTitle;
    this.appTitleSeparator = input.appTitleSeparator ?? this.appTitleSeparator;
    this.componentTitleOrder = input.componentTitleOrder ?? this.componentTitleOrder;
    this.componentTitleSeparator = input.componentTitleSeparator ?? this.componentTitleSeparator;
    this.useComponentNames = input.useComponentNames ?? this.useComponentNames;
    this.componentPrefix = input.componentPrefix ?? this.componentPrefix;
    this.transformTitle = "transformTitle" in input ? input.transformTitle : this.transformTitle;
  }
};
var Separators = class _Separators {
  constructor(viewport = "@", sibling = "+", scope = "/", groupStart = "(", groupEnd = ")", noScope = "!", parameters = "(", parametersEnd = ")", parameterSeparator = ",", parameterKeySeparator = "=", add = "+", clear = "-", action = ".") {
    this.viewport = viewport;
    this.sibling = sibling;
    this.scope = scope;
    this.groupStart = groupStart;
    this.groupEnd = groupEnd;
    this.noScope = noScope;
    this.parameters = parameters;
    this.parametersEnd = parametersEnd;
    this.parameterSeparator = parameterSeparator;
    this.parameterKeySeparator = parameterKeySeparator;
    this.add = add;
    this.clear = clear;
    this.action = action;
  }
  static create(input = {}) {
    return new _Separators(input.viewport, input.sibling, input.scope, input.groupStart, input.groupEnd, input.noScope, input.parameters, input.parametersEnd, input.parameterSeparator, input.parameterKeySeparator, input.add, input.clear, input.action);
  }
  static for(context) {
    return RouterOptions.for(context).separators;
  }
  apply(input = {}) {
    this.viewport = input.viewport ?? this.viewport;
    this.sibling = input.sibling ?? this.sibling;
    this.scope = input.scope ?? this.scope;
    this.groupStart = input.groupStart ?? this.groupStart;
    this.groupEnd = input.groupEnd ?? this.groupEnd;
    this.noScope = input.noScope ?? this.noScope;
    this.parameters = input.parameters ?? this.parameters;
    this.parametersEnd = input.parametersEnd ?? this.parametersEnd;
    this.parameterSeparator = input.parameterSeparator ?? this.parameterSeparator;
    this.parameterKeySeparator = input.parameterKeySeparator ?? this.parameterKeySeparator;
    this.add = input.add ?? this.add;
    this.clear = input.clear ?? this.clear;
    this.action = input.action ?? this.action;
  }
};
var Indicators = class _Indicators {
  constructor(loadActive = "active", viewportNavigating = "navigating") {
    this.loadActive = loadActive;
    this.viewportNavigating = viewportNavigating;
  }
  static create(input = {}) {
    return new _Indicators(input.loadActive, input.viewportNavigating);
  }
  static for(context) {
    return RouterOptions.for(context).indicators;
  }
  apply(input = {}) {
    this.loadActive = input.loadActive ?? this.loadActive;
    this.viewportNavigating = input.viewportNavigating ?? this.viewportNavigating;
  }
};
var RouterOptions = class _RouterOptions {
  constructor(separators = Separators.create(), indicators = Indicators.create(), useUrlFragmentHash = true, basePath = null, useHref = true, statefulHistoryLength = 0, useDirectRouting = true, useConfiguredRoutes = true, completeStateNavigations = false, title = TitleOptions.create(), navigationSyncStates = ["guardedUnload", "swapped", "completed"], swapOrder = "attach-next-detach-current", fallback = "", fallbackAction = "abort") {
    this.separators = separators;
    this.indicators = indicators;
    this.useUrlFragmentHash = useUrlFragmentHash;
    this.basePath = basePath;
    this.useHref = useHref;
    this.statefulHistoryLength = statefulHistoryLength;
    this.useDirectRouting = useDirectRouting;
    this.useConfiguredRoutes = useConfiguredRoutes;
    this.completeStateNavigations = completeStateNavigations;
    this.title = title;
    this.navigationSyncStates = navigationSyncStates;
    this.swapOrder = swapOrder;
    this.fallback = fallback;
    this.fallbackAction = fallbackAction;
    this.registrationHooks = [];
  }
  static create(input = {}) {
    return new _RouterOptions(Separators.create(input.separators), Indicators.create(input.indicators), input.useUrlFragmentHash, input.basePath, input.useHref, input.statefulHistoryLength, input.useDirectRouting, input.useConfiguredRoutes, input.completeStateNavigations, TitleOptions.create(input.title), input.navigationSyncStates, input.swapOrder, input.fallback, input.fallbackAction);
  }
  static for(context) {
    if (context instanceof RouterConfiguration) {
      return context.options;
    }
    if (context instanceof Router) {
      context = context.configuration;
    } else {
      context = context.get(IRouterConfiguration);
    }
    return context.options;
  }
  /**
   * Apply router options.
   *
   * @param options - The options to apply
   */
  apply(options) {
    options = options ?? {};
    this.separators.apply(options.separators);
    this.indicators.apply(options.indicators);
    this.useUrlFragmentHash = options.useUrlFragmentHash ?? this.useUrlFragmentHash;
    this.basePath = options.basePath ?? this.basePath;
    this.useHref = options.useHref ?? this.useHref;
    this.statefulHistoryLength = options.statefulHistoryLength ?? this.statefulHistoryLength;
    this.useDirectRouting = options.useDirectRouting ?? this.useDirectRouting;
    this.useConfiguredRoutes = options.useConfiguredRoutes ?? this.useConfiguredRoutes;
    this.completeStateNavigations = options.completeStateNavigations ?? this.completeStateNavigations;
    this.title.apply(options.title);
    this.navigationSyncStates = options.navigationSyncStates ?? this.navigationSyncStates;
    this.swapOrder = options.swapOrder ?? this.swapOrder;
    this.fallback = options.fallback ?? this.fallback;
    this.fallbackAction = options.fallbackAction ?? this.fallbackAction;
    if (Array.isArray(options.hooks)) {
      if (this.routerConfiguration !== void 0) {
        options.hooks.forEach((hook) => this.routerConfiguration.addHook(hook.hook, hook.options));
      } else {
        this.registrationHooks = options.hooks;
      }
    }
  }
  setRouterConfiguration(routerConfiguration) {
    this.routerConfiguration = routerConfiguration;
    this.registrationHooks.forEach((hook) => this.routerConfiguration.addHook(hook.hook, hook.options));
    this.registrationHooks.length = 0;
  }
};
var InstructionParameters = class _InstructionParameters {
  constructor() {
    this.parametersString = null;
    this.parametersRecord = null;
    this.parametersList = null;
    this.parametersType = "none";
  }
  get none() {
    return this.parametersType === "none";
  }
  // Static methods
  static create(componentParameters) {
    const parameters = new _InstructionParameters();
    parameters.set(componentParameters);
    return parameters;
  }
  // TODO: Deal with separators in data and complex types
  static parse(context, parameters, uriComponent = false) {
    if (parameters == null || parameters.length === 0) {
      return [];
    }
    const seps = Separators.for(context);
    const parameterSeparator = seps.parameterSeparator;
    const parameterKeySeparator = seps.parameterKeySeparator;
    if (typeof parameters === "string") {
      const list = [];
      const params = parameters.split(parameterSeparator);
      for (const param of params) {
        let key;
        let value;
        [key, value] = param.split(parameterKeySeparator);
        if (value === void 0) {
          value = uriComponent ? decodeURIComponent(key) : key;
          key = void 0;
        } else if (uriComponent) {
          key = decodeURIComponent(key);
          value = decodeURIComponent(value);
        }
        list.push({ key, value });
      }
      return list;
    }
    if (Array.isArray(parameters)) {
      return parameters.map((param) => ({ key: void 0, value: param }));
    }
    const keys = Object.keys(parameters);
    keys.sort();
    return keys.map((key) => ({ key, value: parameters[key] }));
  }
  get typedParameters() {
    switch (this.parametersType) {
      case "string":
        return this.parametersString;
      case "array":
        return this.parametersList;
      case "object":
        return this.parametersRecord;
      default:
        return null;
    }
  }
  // TODO: Deal with separators in data and complex types
  static stringify(context, parameters, uriComponent = false) {
    if (!Array.isArray(parameters) || parameters.length === 0) {
      return "";
    }
    const seps = Separators.for(context);
    return parameters.map((param) => {
      const key = param.key !== void 0 && uriComponent ? encodeURIComponent(param.key) : param.key;
      const value = uriComponent ? encodeURIComponent(param.value) : param.value;
      return key !== void 0 && key !== value ? key + seps.parameterKeySeparator + value : value;
    }).join(seps.parameterSeparator);
  }
  /**
   * Whether a record of instruction parameters contains another record of
   * instruction parameters.
   *
   * @param parametersToSearch - Parameters that should contain (superset)
   * @param parametersToFind - Parameters that should be contained (subset)
   */
  static contains(parametersToSearch, parametersToFind) {
    return Object.keys(parametersToFind).every((key) => parametersToFind[key] === parametersToSearch[key]);
  }
  // Instance methods
  parameters(context) {
    return _InstructionParameters.parse(context, this.typedParameters);
  }
  set(parameters) {
    this.parametersString = null;
    this.parametersList = null;
    this.parametersRecord = null;
    if (parameters == null || parameters === "") {
      this.parametersType = "none";
      parameters = null;
    } else if (typeof parameters === "string") {
      this.parametersType = "string";
      this.parametersString = parameters;
    } else if (Array.isArray(parameters)) {
      this.parametersType = "array";
      this.parametersList = parameters;
    } else {
      this.parametersType = "object";
      this.parametersRecord = parameters;
    }
  }
  get(context, name) {
    if (name === void 0) {
      return this.parameters(context);
    }
    const params = this.parameters(context).filter((p) => p.key === name).map((p) => p.value);
    if (params.length === 0) {
      return;
    }
    return params.length === 1 ? params[0] : params;
  }
  // This only works with objects added to objects!
  addParameters(parameters) {
    if (this.parametersType === "none") {
      return this.set(parameters);
    }
    if (this.parametersType !== "object") {
      throw new Error("Can't add object parameters to existing non-object parameters!");
    }
    this.set({ ...this.parametersRecord, ...parameters });
  }
  toSpecifiedParameters(context, specifications) {
    specifications = specifications ?? [];
    const parameters = this.parameters(context);
    const specified = {};
    for (const spec of specifications) {
      let index2 = parameters.findIndex((param) => param.key === spec);
      if (index2 >= 0) {
        const [parameter] = parameters.splice(index2, 1);
        specified[spec] = parameter.value;
      } else {
        index2 = parameters.findIndex((param) => param.key === void 0);
        if (index2 >= 0) {
          const [parameter] = parameters.splice(index2, 1);
          specified[spec] = parameter.value;
        }
      }
    }
    for (const parameter of parameters.filter((param) => param.key !== void 0)) {
      specified[parameter.key] = parameter.value;
    }
    let index = specifications.length;
    for (const parameter of parameters.filter((param) => param.key === void 0)) {
      specified[index++] = parameter.value;
    }
    return specified;
  }
  toSortedParameters(context, specifications) {
    specifications = specifications || [];
    const parameters = this.parameters(context);
    const sorted = [];
    for (const spec of specifications) {
      let index = parameters.findIndex((param) => param.key === spec);
      if (index >= 0) {
        const parameter = { ...parameters.splice(index, 1)[0] };
        parameter.key = void 0;
        sorted.push(parameter);
      } else {
        index = parameters.findIndex((param) => param.key === void 0);
        if (index >= 0) {
          const parameter = { ...parameters.splice(index, 1)[0] };
          sorted.push(parameter);
        } else {
          sorted.push({ value: void 0 });
        }
      }
    }
    const params = parameters.filter((param) => param.key !== void 0);
    params.sort((a, b) => (a.key || "") < (b.key || "") ? 1 : (b.key || "") < (a.key || "") ? -1 : 0);
    sorted.push(...params);
    sorted.push(...parameters.filter((param) => param.key === void 0));
    return sorted;
  }
  // TODO: Somewhere we need to check for format such as spaces etc
  same(context, other, componentType) {
    const typeParameters = componentType !== null ? componentType.parameters : [];
    const mine = this.toSpecifiedParameters(context, typeParameters);
    const others = other.toSpecifiedParameters(context, typeParameters);
    return Object.keys(mine).every((key) => mine[key] === others[key]) && Object.keys(others).every((key) => others[key] === mine[key]);
  }
};
var InstructionComponent = class _InstructionComponent {
  constructor() {
    this.name = null;
    this.type = null;
    this.instance = null;
    this.promise = null;
    this.func = null;
  }
  /**
   * Create a new instruction component.
   *
   * @param component - The component
   */
  static create(componentAppelation) {
    const component = new _InstructionComponent();
    component.set(componentAppelation);
    return component;
  }
  static isName(component) {
    return typeof component === "string";
  }
  static isDefinition(component) {
    return CustomElement.isType(component.Type);
  }
  static isType(component) {
    return CustomElement.isType(component);
  }
  static isInstance(component) {
    return isCustomElementViewModel(component);
  }
  static isAppelation(component) {
    return _InstructionComponent.isName(component) || _InstructionComponent.isType(component) || _InstructionComponent.isInstance(component);
  }
  static getName(component) {
    if (_InstructionComponent.isName(component)) {
      return component;
    } else if (_InstructionComponent.isType(component)) {
      return CustomElement.getDefinition(component).name;
    } else {
      return _InstructionComponent.getName(component.constructor);
    }
  }
  static getType(component) {
    if (_InstructionComponent.isName(component)) {
      return null;
    } else if (_InstructionComponent.isType(component)) {
      return component;
    } else {
      return component.constructor;
    }
  }
  static getInstance(component) {
    if (_InstructionComponent.isName(component) || _InstructionComponent.isType(component)) {
      return null;
    } else {
      return component;
    }
  }
  // Instance methods
  set(component) {
    let name = null;
    let type = null;
    let instance = null;
    let promise = null;
    let func = null;
    if (component instanceof Promise) {
      promise = component;
    } else if (_InstructionComponent.isName(component)) {
      name = _InstructionComponent.getName(component);
    } else if (_InstructionComponent.isType(component)) {
      name = this.getNewName(component);
      type = _InstructionComponent.getType(component);
    } else if (_InstructionComponent.isInstance(component)) {
      name = this.getNewName(_InstructionComponent.getType(component));
      type = _InstructionComponent.getType(component);
      instance = _InstructionComponent.getInstance(component);
    } else if (typeof component === "function") {
      func = component;
    }
    this.name = name;
    this.type = type;
    this.instance = instance;
    this.promise = promise;
    this.func = func;
  }
  resolve(instruction) {
    if (this.func !== null) {
      this.set(this.func(instruction));
    }
    if (!(this.promise instanceof Promise)) {
      return;
    }
    return this.promise.then((component) => {
      if (_InstructionComponent.isAppelation(component)) {
        this.set(component);
        return;
      }
      if (component.default != null) {
        this.set(component.default);
        return;
      }
      const keys = Object.keys(component).filter((key2) => !key2.startsWith("__"));
      if (keys.length === 0) {
        throw new Error(`Failed to load component Type from resolved Promise since no export was specified.`);
      }
      if (keys.length > 1) {
        throw new Error(`Failed to load component Type from resolved Promise since no 'default' export was specified when having multiple exports.`);
      }
      const key = keys[0];
      this.set(component[key]);
    });
  }
  get none() {
    return !this.isName() && !this.isType() && !this.isInstance() && !this.isFunction() && !this.isPromise();
  }
  isName() {
    return this.name != null && this.name !== "" && !this.isType() && !this.isInstance();
  }
  isType() {
    return this.type !== null && !this.isInstance();
  }
  isInstance() {
    return this.instance !== null;
  }
  isPromise() {
    return this.promise !== null;
  }
  isFunction() {
    return this.func !== null;
  }
  toType(container, instruction) {
    void this.resolve(instruction);
    if (this.type !== null) {
      return this.type;
    }
    if (this.name !== null && typeof this.name === "string") {
      if (container === null) {
        throw new Error(`No container available when trying to resolve component '${this.name}'!`);
      }
      if (container.has(CustomElement.keyFrom(this.name), true)) {
        const resolver = container.getResolver(CustomElement.keyFrom(this.name));
        if (resolver !== null && resolver.getFactory !== void 0) {
          const factory = resolver.getFactory(container);
          if (factory) {
            return factory.Type;
          }
        }
      }
    }
    return null;
  }
  /**
   * Returns the component instance of this instruction.
   *
   * Throws instantiation error if there was an error during instantiation.
   */
  toInstance(parentContainer, parentController, parentElement, instruction) {
    return onResolve(this.resolve(instruction), () => {
      if (this.instance !== null) {
        return this.instance;
      }
      if (parentContainer == null) {
        return null;
      }
      return this._createInstance(parentContainer, parentController, parentElement, instruction);
    });
  }
  same(other, compareType = false) {
    return compareType ? this.type === other.type : this.name === other.name;
  }
  getNewName(type) {
    if (this.name === null) {
      return _InstructionComponent.getName(type);
    }
    return this.name;
  }
  /** @internal */
  /**
   * Creates the component instance for this instruction.
   *
   * Throws instantiation error if there was an error during instantiation.
   */
  _createInstance(parentContainer, parentController, parentElement, instruction) {
    const container = parentContainer.createChild();
    const Type = this.isType() ? this.type : container.getResolver(CustomElement.keyFrom(this.name)).getFactory(container).Type;
    const instance = container.invoke(Type);
    if (instance == null) {
      {
        console.warn("Failed to create instance when trying to resolve component", this.name, this.type, "=>", instance);
      }
      throw new Error(`Failed to create instance when trying to resolve component '${this.name}'!`);
    }
    const controller = Controller.$el(container, instance, parentElement, null);
    controller.parent = parentController;
    return instance;
  }
};
function arrayRemove(arr, func) {
  const removed = [];
  let arrIndex = arr.findIndex(func);
  while (arrIndex >= 0) {
    removed.push(arr.splice(arrIndex, 1)[0]);
    arrIndex = arr.findIndex(func);
  }
  return removed;
}
function arrayAddUnique(arr, values) {
  if (!Array.isArray(values)) {
    values = [values];
  }
  for (const value of values) {
    if (!arr.includes(value)) {
      arr.push(value);
    }
  }
  return arr;
}
function arrayUnique(arr, includeNullish = false) {
  return arr.filter((item, i, arrAgain) => (includeNullish || item != null) && arrAgain.indexOf(item) === i);
}
var OpenPromise = class _OpenPromise {
  constructor(description = "") {
    this.description = description;
    this.isPending = true;
    this.promise = new Promise((resolve2, reject) => {
      this._resolve = resolve2;
      this._reject = reject;
      _OpenPromise.promises.push(this);
    });
  }
  /**
   * Resolve the (open) promise.
   *
   * @param value - The value to resolve with
   */
  resolve(value) {
    this._resolve(value);
    this.isPending = false;
    _OpenPromise.promises = _OpenPromise.promises.filter((promise) => promise !== this);
  }
  /**
   * Reject the (open) promise.
   *
   * @param reason - The reason the promise is rejected
   */
  reject(reason) {
    this._reject(reason);
    this.isPending = false;
    _OpenPromise.promises = _OpenPromise.promises.filter((promise) => promise !== this);
  }
};
OpenPromise.promises = [];
var Runner = class _Runner {
  constructor() {
    this.isDone = false;
    this.isCancelled = false;
    this.isResolved = false;
    this.isRejected = false;
    this.isAsync = false;
  }
  /**
   * Runs a set of steps and retuns the last value
   *
   * Steps are processed in sequence and can be either a
   *
   * - value - which is then propagated as input into the next step
   * - function - which is executed in time. The result is replacing the step which is then reprocessed
   * - promise - which is awaited
   *
   * ```ts
   * result = await Runner.run(null,
   *   'one',
   *   step => `${step.previousValue}, two`,
   *   step => createPromise(step.previousValue), // creates a promise that resolves to `${value}, three`
   * ); // result === 'one, two, three'
   * ```
   *
   * Returns the result as a promise or a value.
   *
   * If first parameter is an existing Step, the additional steps will be added to run after it. In this
   * case, the return value will be the first new step and not the result (since it doesn't exist yet).
   */
  static run(predecessor, ...steps) {
    if (steps.length === 0) {
      return void 0;
    }
    let newRoot = false;
    if (predecessor === null || typeof predecessor === "string") {
      predecessor = new Step(predecessor);
      newRoot = true;
    }
    const start = new Step(steps.shift());
    _Runner.connect(predecessor, start, ((predecessor == null ? void 0 : predecessor.runParallel) ?? false) || newRoot);
    if (steps.length > 0) {
      _Runner.add(start, false, ...steps);
    }
    if (newRoot) {
      _Runner.process(predecessor);
      if (predecessor.result instanceof Promise) {
        this.runners.set(predecessor.result, predecessor);
      }
      return predecessor.result;
    }
    return start;
  }
  /**
   * Runs a set of steps and retuns a list with their results
   *
   * Steps are processed in parallel and can be either a
   *
   * - value - which is then propagated as input into the next step
   * - function - which is executed in time. The result is replacing the step which is then reprocessed
   * - promise - which is awaited
   *
   * ```ts
   * result = await Runner.runParallel(null,
   *   'one',
   *   step => `${step.previousValue}, two`,
   *   step => createPromise(step.previousValue), // creates a promise that resolves to `${value}, three`
   * ); // result === ['one', 'one, two', 'one, two, three']
   * ```
   *
   * Returns the result as a promise or a list of values.
   *
   * If first parameter is an existing Step, the additional steps will be added to run after it. In this
   * case, the return value will be the first new step and not the result (since it doesn't exist yet).
   */
  static runParallel(parent, ...steps) {
    if (((steps == null ? void 0 : steps.length) ?? 0) === 0) {
      return [];
    }
    let newRoot = false;
    if (parent === null) {
      parent = new Step();
      newRoot = true;
    } else {
      parent = _Runner.connect(parent, new Step(), true);
    }
    _Runner.add(parent, true, ...steps);
    if (newRoot) {
      _Runner.process(parent);
    }
    if (parent.result instanceof Promise) {
      this.runners.set(parent.result, parent);
    }
    return newRoot ? parent.result ?? [] : parent;
  }
  /**
   * Gets the starting step for a promise returned by Runner.run
   *
   * The step can be used to check status and outcome of
   * the run as well as cancel it
   *
   */
  static step(value) {
    if (value instanceof Promise) {
      return _Runner.runners.get(value);
    }
  }
  /**
   * Cancels the remaining steps for a step or promise returned by Runner.run
   *
   * Once a starting step has been cancelled, it's no longer possible
   * to retrieve it from the promise
   *
   */
  static cancel(value) {
    const step = _Runner.step(value);
    if (step !== void 0) {
      step.cancel();
    }
  }
  static add(predecessorOrParent, parallel, ...steps) {
    let step = new Step(steps.shift(), parallel);
    if (predecessorOrParent !== null) {
      step = _Runner.connect(predecessorOrParent, step, parallel);
    }
    const start = step;
    while (steps.length > 0) {
      step = _Runner.connect(step, new Step(steps.shift(), parallel), false);
    }
    return start;
  }
  static connect(predecessorOrParent, step, asChild) {
    if (!asChild) {
      const next = predecessorOrParent.next;
      predecessorOrParent.next = step;
      step.previous = predecessorOrParent;
      step.next = next;
      if (next !== null) {
        next.previous = step;
        next.parent = null;
      }
    } else {
      const child = predecessorOrParent.child;
      predecessorOrParent.child = step;
      step.parent = predecessorOrParent;
      step.next = child;
      if (child !== null) {
        child.parent = null;
        child.previous = step;
      }
    }
    return step;
  }
  // Always set and resolve root OpenPromise as soon as there's a promise somewhere
  // Subsequent calls work on the origin promise(s)
  // root is the top root of the connected steps
  // step.promise holds promise that resolves
  // step.value holds value that's resolved
  static process(step) {
    const root = step.root;
    while (step !== null && !step.isDoing && !step.isDone) {
      root.current = step;
      if (step.isParallelParent) {
        step.isDone = true;
        let child = step.child;
        while (child !== null) {
          _Runner.process(child);
          child = child.next;
        }
      } else {
        step.isDoing = true;
        step.value = step.step;
        while (step.value instanceof Function && !step.isCancelled && !step.isExited && !step.isDone) {
          step.value = step.value(step);
        }
        if (!step.isCancelled) {
          if (step.value instanceof Promise) {
            const promise = step.value;
            _Runner.ensurePromise(root);
            (($step, $promise) => {
              $promise.then((result) => {
                $step.value = result;
                _Runner.settlePromise($step);
                $step.isDone = true;
                $step.isDoing = false;
                const next = $step.nextToDo();
                if (next !== null && !$step.isExited) {
                  _Runner.process(next);
                } else {
                  if ($step.root.doneAll || $step.isExited) {
                    _Runner.settlePromise($step.root);
                  }
                }
              }).catch((err) => {
                throw err;
              });
            })(step, promise);
          } else {
            step.isDone = true;
            step.isDoing = false;
            if (!step.isExited) {
              step = step.nextToDo();
            } else {
              step = null;
            }
          }
        }
      }
    }
    if (root.isCancelled) {
      _Runner.settlePromise(root, "reject");
    } else if (root.doneAll || root.isExited) {
      _Runner.settlePromise(root);
    }
  }
  static ensurePromise(step) {
    if (step.finally === null) {
      step.finally = new OpenPromise(`Runner: ${step.name}, ${step.previousValue}, ${step.value}, ${step.root.report}`);
      step.promise = step.finally.promise;
      return true;
    }
    return false;
  }
  static settlePromise(step, outcome = "resolve") {
    var _a, _b, _c;
    if (((_a = step.finally) == null ? void 0 : _a.isPending) ?? false) {
      step.promise = null;
      switch (outcome) {
        case "resolve":
          (_b = step.finally) == null ? void 0 : _b.resolve(step.result);
          break;
        case "reject":
          (_c = step.finally) == null ? void 0 : _c.reject(step.result);
          break;
      }
    }
  }
};
Runner.runners = /* @__PURE__ */ new WeakMap();
Runner.roots = {};
var Step = class _Step {
  constructor(step = void 0, runParallel = false) {
    this.step = step;
    this.runParallel = runParallel;
    this.promise = null;
    this.previous = null;
    this.next = null;
    this.parent = null;
    this.child = null;
    this.current = null;
    this.finally = null;
    this.isDoing = false;
    this.isDone = false;
    this.isCancelled = false;
    this.isExited = false;
    this.exited = null;
    this.id = "-1";
    this.id = `${_Step.id++}`;
    if (typeof step === "string") {
      this.id += ` ${step}`;
    }
  }
  get isParallelParent() {
    var _a;
    return ((_a = this.child) == null ? void 0 : _a.runParallel) ?? false;
  }
  get result() {
    var _a, _b;
    if (this.promise !== null) {
      return this.promise;
    }
    if (this.child !== null) {
      if (this.isParallelParent) {
        const results = [];
        let child = this.child;
        while (child !== null) {
          results.push(child.result);
          child = child.next;
        }
        return results;
      } else {
        return this === this.root && this.exited !== null ? this.exited.result : (_b = (_a = this.child) == null ? void 0 : _a.tail) == null ? void 0 : _b.result;
      }
    }
    let value = this.value;
    while (value instanceof _Step) {
      value = value.result;
    }
    return value;
  }
  get asValue() {
    return this.result;
  }
  get previousValue() {
    var _a, _b, _c, _d;
    return this.runParallel ? (_c = (_b = (_a = this.head.parent) == null ? void 0 : _a.parent) == null ? void 0 : _b.previous) == null ? void 0 : _c.result : (_d = this.previous) == null ? void 0 : _d.result;
  }
  get name() {
    let name = `${this.id}`;
    if (this.runParallel) {
      name = `:${name}`;
    }
    if (this.value instanceof Promise || this.promise instanceof Promise) {
      name = `${name}*`;
    }
    if (this.finally !== null) {
      name = `${name}*`;
    }
    if (this.child !== null) {
      name = `${name}>`;
    }
    if (this.isDone) {
      name = `(${name})`;
    }
    return name;
  }
  get root() {
    let root = this.head;
    while (root.parent !== null) {
      root = root.parent.head;
    }
    return root;
  }
  get head() {
    let step = this;
    while (step.previous !== null) {
      step = step.previous;
    }
    return step;
  }
  get tail() {
    let step = this;
    while (step.next !== null) {
      step = step.next;
    }
    return step;
  }
  get done() {
    if (!this.isDone) {
      return false;
    }
    let step = this.child;
    while (step !== null) {
      if (!step.done) {
        return false;
      }
      step = step.next;
    }
    return true;
  }
  get doneAll() {
    if (!this.isDone || this.child !== null && !this.child.doneAll || this.next !== null && !this.next.doneAll) {
      return false;
    }
    return true;
  }
  cancel(all = true) {
    var _a, _b;
    if (all) {
      return this.root.cancel(false);
    }
    if (this.isCancelled) {
      return false;
    }
    this.isCancelled = true;
    (_a = this.child) == null ? void 0 : _a.cancel(false);
    (_b = this.next) == null ? void 0 : _b.cancel(false);
    return true;
  }
  exit(all = true) {
    var _a, _b;
    if (all) {
      this.root.exited = this;
      return this.root.exit(false);
    }
    if (this.isExited) {
      return false;
    }
    this.isExited = true;
    (_a = this.child) == null ? void 0 : _a.exit(false);
    (_b = this.next) == null ? void 0 : _b.exit(false);
    return true;
  }
  nextToDo() {
    if (this.child !== null && !this.child.isDoing && !this.child.isDone) {
      return this.child;
    }
    if (this.runParallel && !this.head.parent.done) {
      return null;
    }
    return this.nextOrUp();
  }
  nextOrUp() {
    let next = this.next;
    while (next !== null) {
      if (!next.isDoing && !next.isDone) {
        return next;
      }
      next = next.next;
    }
    const parent = this.head.parent ?? null;
    if (parent === null || !parent.done) {
      return null;
    }
    return parent.nextOrUp();
  }
  // Method is purely for debugging
  get path() {
    var _a;
    return `${((_a = this.head.parent) == null ? void 0 : _a.path) ?? ""}/${this.name}`;
  }
  // Method is purely for debugging
  get tree() {
    let result = "";
    let step = this.head;
    let parent = step.parent;
    let path = "";
    while (parent !== null) {
      path = `${parent.path}${path}`;
      parent = parent.head.parent;
    }
    do {
      result += `${path}/${step.name}
`;
      if (step === this) {
        break;
      }
      step = step.next;
    } while (step !== null);
    return result;
  }
  // Method is purely for debugging
  get report() {
    var _a, _b;
    let result = `${this.path}
`;
    result += ((_a = this.child) == null ? void 0 : _a.report) ?? "";
    result += ((_b = this.next) == null ? void 0 : _b.report) ?? "";
    return result;
  }
};
Step.id = 0;
var createMappedError = (code, ...details) => new Error(`AUR${String(code).padStart(4, "0")}: ${getMessageByCode(code, ...details)}`);
var errorsMap = {
  [
    99
    /* ErrorNames.method_not_implemented */
  ]: "Method {{0}} not implemented",
  [
    2e3
    /* ErrorNames.router_started */
  ]: `Router.start() called while the it has already been started.`,
  [
    2001
    /* ErrorNames.router_not_started */
  ]: "Router.stop() has been called while it has not been started",
  [
    2002
    /* ErrorNames.router_remove_endpoint_failure */
  ]: "Router failed to remove endpoint: {{0}}",
  [
    2003
    /* ErrorNames.router_check_activate_string_error */
  ]: `Parameter instructions to checkActivate can not be a string ('{{0}}')!`,
  [
    2004
    /* ErrorNames.router_failed_appending_routing_instructions */
  ]: "Router failed to append routing instructions to coordinator",
  [
    2005
    /* ErrorNames.router_failed_finding_viewport_when_updating_viewer_path */
  ]: "Router failed to find viewport when updating viewer paths.",
  [
    2006
    /* ErrorNames.router_infinite_instruction */
  ]: `{{0}} remaining instructions after 100 iterations; there is likely an infinite loop.`,
  [
    2007
    /* ErrorNames.browser_viewer_store_already_started */
  ]: "Browser navigation has already been started",
  [
    2008
    /* ErrorNames.browser_viewer_store_not_started */
  ]: "Browser navigation has not been started",
  [
    2009
    /* ErrorNames.browser_viewer_store_state_serialization_failed */
  ]: `Failed to "{{0}}" state, probably due to unserializable data and/or parameters:
Serialization error: {{1}}
Original error: {originalError}`,
  [
    2010
    /* ErrorNames.navigator_already_started */
  ]: "Navigator has already been started",
  [
    2011
    /* ErrorNames.navigator_not_started */
  ]: "Navigator has not been started",
  [
    2012
    /* ErrorNames.route_no_component_as_config */
  ]: `Invalid route configuration: A component can't be specified in a component route configuration.`,
  [
    2013
    /* ErrorNames.route_no_both_component_and_instructions */
  ]: `Invalid route configuration: The 'component' and 'instructions' properties can't be specified in a component route configuration.`,
  [
    2014
    /* ErrorNames.route_nullish_config */
  ]: `Invalid route configuration: expected an object but got null/undefined.`,
  [
    2015
    /* ErrorNames.route_instructions_existed */
  ]: `Invalid route configuration: the 'instructions' property can't be used together with the 'component', 'viewport', 'parameters' or 'children' properties.`,
  [
    2016
    /* ErrorNames.route_invalid_config */
  ]: `Invalid route configuration: either 'redirectTo' or 'instructions' need to be specified.`,
  [
    2017
    /* ErrorNames.endpoint_instantiation_error */
  ]: `There was an error durating the instantiation of "{{0}}". "{{0}}" did not match any configured route or registered component name - did you forget to add the component "{{0}}" to the dependencies or to register it as a global dependency?
{{1:innerError}}`,
  [
    2018
    /* ErrorNames.element_name_not_found */
  ]: `Cannot find an element with the name "{{0}}", did you register it via "dependencies" option or <import> with convention?.
`,
  [
    2019
    /* ErrorNames.router_error_3 */
  ]: `-- placeholder --`,
  [
    2020
    /* ErrorNames.router_error_4 */
  ]: `-- placeholder --`,
  [
    2021
    /* ErrorNames.router_error_5 */
  ]: `-- placeholder --`,
  [
    2022
    /* ErrorNames.router_error_6 */
  ]: `-- placeholder --`,
  [
    2023
    /* ErrorNames.router_error_7 */
  ]: `-- placeholder --`,
  [
    2024
    /* ErrorNames.router_error_8 */
  ]: `-- placeholder --`,
  [
    2025
    /* ErrorNames.router_error_9 */
  ]: `-- placeholder --`,
  [
    2026
    /* ErrorNames.router_error_10 */
  ]: `-- placeholder --`
};
var getMessageByCode = (name, ...details) => {
  var _a;
  let cooked = errorsMap[name];
  for (let i = 0; i < details.length; ++i) {
    const regex = new RegExp(`{{${i}(:.*)?}}`, "g");
    let matches = regex.exec(cooked);
    while (matches != null) {
      const method = (_a = matches[1]) == null ? void 0 : _a.slice(1);
      let value = details[i];
      if (value != null) {
        switch (method) {
          case "nodeName":
            value = value.nodeName.toLowerCase();
            break;
          case "name":
            value = value.name;
            break;
          case "typeof":
            value = typeof value;
            break;
          case "ctor":
            value = value.constructor.name;
            break;
          case "toString":
            value = Object.prototype.toString.call(value);
            break;
          case "join(!=)":
            value = value.join("!=");
            break;
          case "element":
            value = value === "*" ? "all elements" : `<${value} />`;
            break;
          case "innerError":
            value = `
Details:
${value}
${value instanceof Error && value.cause != null ? `${String(value.cause)}
` : ""}`;
            break;
          default: {
            if (method == null ? void 0 : method.startsWith(".")) {
              const paths = method.slice(1).split(".");
              for (let j = 0; j < paths.length && value != null; ++j) {
                value = value[paths[j]];
              }
            }
          }
        }
      }
      cooked = cooked.slice(0, matches.index) + String(value) + cooked.slice(regex.lastIndex);
      matches = regex.exec(cooked);
    }
  }
  return cooked;
};
var Route = class _Route {
  constructor(path, id, redirectTo, instructions, caseSensitive, title, reloadBehavior, data) {
    this.path = path;
    this.id = id;
    this.redirectTo = redirectTo;
    this.instructions = instructions;
    this.caseSensitive = caseSensitive;
    this.title = title;
    this.reloadBehavior = reloadBehavior;
    this.data = data;
  }
  /**
   * Apply the specified configuration to the specified type, overwriting any existing configuration.
   */
  static configure(configOrPath, Type) {
    const config = _Route.create(configOrPath, Type);
    Metadata.define(config, Type, _Route.resourceKey);
    return Type;
  }
  /**
   * Get the `Route` configured with the specified type or null if there's nothing configured.
   */
  static getConfiguration(Type) {
    const config = Metadata.get(_Route.resourceKey, Type) ?? {};
    if (Array.isArray(Type.parameters)) {
      config.parameters = Type.parameters;
    }
    if ("title" in Type) {
      config.title = Type.title;
    }
    return config instanceof _Route ? config : _Route.create(config, Type);
  }
  /**
   * Create a valid Route or throw if it can't.
   *
   * @param configOrType - Configuration or type the route is created from.
   * @param Type - If specified, the Route is routing to Type, regardless of what config says, as with `@route` decorator.
   */
  static create(configOrType, Type = null) {
    if (Type !== null) {
      configOrType = _Route.transferTypeToComponent(configOrType, Type);
    }
    if (CustomElement.isType(configOrType)) {
      configOrType = _Route.getConfiguration(configOrType);
    } else if (Type === null) {
      configOrType = { ...configOrType };
    }
    const config = _Route.transferIndividualIntoInstructions(configOrType);
    _Route.validateRouteConfiguration(config);
    let pathId = config.path;
    if (Array.isArray(pathId)) {
      pathId = pathId.join(",");
    }
    return new _Route(config.path ?? "", config.id ?? pathId ?? null, config.redirectTo ?? null, config.instructions ?? null, config.caseSensitive ?? false, config.title ?? null, config.reloadBehavior ?? null, config.data ?? null);
  }
  /**
   * Transfers the (only allowed) Type for the Route to the `component` property, creating
   * a new configuration if necessary.
   *
   * It also validates that that the `component` and `instructions` are not used.
   */
  static transferTypeToComponent(configOrType, Type) {
    if (CustomElement.isType(configOrType)) {
      throw createMappedError(
        2012
        /* ErrorNames.route_no_component_as_config */
      );
    }
    const config = { ...configOrType };
    if ("component" in config || "instructions" in config) {
      throw createMappedError(
        2013
        /* ErrorNames.route_no_both_component_and_instructions */
      );
    }
    if (!("redirectTo" in config)) {
      config.component = Type;
    }
    if (!("path" in config) && !("redirectTo" in config)) {
      config.path = CustomElement.getDefinition(Type).name;
    }
    return config;
  }
  /**
   * Transfers individual load instruction properties into the `instructions` property.
   *
   * It also validates that not both individual load instruction parts and the `instructions`
   * is used.
   */
  static transferIndividualIntoInstructions(config) {
    if (config == null) {
      throw createMappedError(
        2014
        /* ErrorNames.route_nullish_config */
      );
    }
    if (config.component != null || config.viewport != null || config.parameters != null || config.children != null) {
      if (config.instructions != null) {
        throw createMappedError(
          2015
          /* ErrorNames.route_instructions_existed */
        );
      }
      config.instructions = [{
        component: config.component,
        viewport: config.viewport,
        parameters: config.parameters,
        children: config.children
      }];
    }
    return config;
  }
  /**
   * Validate a `Route`.
   */
  static validateRouteConfiguration(config) {
    if (config.redirectTo === null && config.instructions === null) {
      throw createMappedError(
        2016
        /* ErrorNames.route_invalid_config */
      );
    }
  }
};
Route.resourceKey = getResourceKeyFor("route");
var Routes = {
  name: getResourceKeyFor("routes"),
  /**
   * Returns `true` if the specified type has any static routes configuration (either via static properties or a &#64;route decorator)
   */
  isConfigured(Type) {
    return Metadata.has(Routes.name, Type) || "routes" in Type;
  },
  /**
   * Apply the specified configuration to the specified type, overwriting any existing configuration.
   */
  configure(configurationsOrTypes, Type) {
    const configurations = configurationsOrTypes.map((configOrType) => Route.create(configOrType));
    Metadata.define(configurations, Type, Routes.name);
    return Type;
  },
  /**
   * Get the `RouteConfiguration`s associated with the specified type.
   */
  getConfiguration(Type) {
    const type = Type;
    const routes2 = [];
    const metadata = Metadata.get(Routes.name, Type);
    if (Array.isArray(metadata)) {
      routes2.push(...metadata);
    }
    if (Array.isArray(type.routes)) {
      routes2.push(...type.routes);
    }
    return routes2.map((route2) => route2 instanceof Route ? route2 : Route.create(route2));
  }
};
function routes(configurationsOrTypes) {
  return function(target, context) {
    context.addInitializer(function() {
      Routes.configure(configurationsOrTypes, this);
    });
    return target;
  };
}
var ViewportScopeContent = class extends EndpointContent {
};
var ViewportScope = class extends Endpoint$1 {
  constructor(router, name, connectedCE, owningScope, scope, rootComponentType = null, options = {
    catches: [],
    source: null
  }) {
    super(router, name, connectedCE);
    this.rootComponentType = rootComponentType;
    this.options = options;
    this.instruction = null;
    this.available = true;
    this.sourceItem = null;
    this.sourceItemIndex = -1;
    this.remove = false;
    this.add = false;
    this.contents.push(new ViewportScopeContent(router, this, owningScope, scope));
    if (this.catches.length > 0) {
      this.instruction = RoutingInstruction.create(this.catches[0], this.name);
    }
  }
  get isEmpty() {
    return this.instruction === null;
  }
  get passThroughScope() {
    return this.rootComponentType === null && this.catches.length === 0;
  }
  get siblings() {
    const parent = this.connectedScope.parent;
    if (parent === null) {
      return [this];
    }
    return parent.enabledChildren.filter((child) => child.isViewportScope && child.endpoint.name === this.name).map((child) => child.endpoint);
  }
  get source() {
    return this.options.source ?? null;
  }
  get catches() {
    let catches = this.options.catches ?? [];
    if (typeof catches === "string") {
      catches = catches.split(",");
    }
    return catches;
  }
  get default() {
    if (this.catches.length > 0) {
      return this.catches[0];
    }
  }
  toString() {
    var _a, _b;
    const contentName = ((_a = this.instruction) == null ? void 0 : _a.component.name) ?? "";
    const nextContentName = ((_b = this.getNextContent()) == null ? void 0 : _b.instruction.component.name) ?? "";
    return `vs:${this.name}[${contentName}->${nextContentName}]`;
  }
  setNextContent(instruction, navigation) {
    instruction.endpoint.set(this);
    this.remove = instruction.isClear(this.router) || instruction.isClearAll(this.router);
    this.add = instruction.isAdd(this.router) && Array.isArray(this.source);
    if (this.add) {
      instruction.component.name = null;
    }
    if (this.default !== void 0 && instruction.component.name === null) {
      instruction.component.name = this.default;
    }
    this.contents.push(new ViewportScopeContent(this.router, this, this.owningScope, this.scope.hasScope, instruction, navigation));
    return "swap";
  }
  transition(coordinator) {
    Runner.run("viewport-scope.transition", (step) => coordinator.setEndpointStep(this, step.root), () => coordinator.addEndpointState(this, "guardedUnload"), () => coordinator.addEndpointState(this, "guardedLoad"), () => coordinator.addEndpointState(this, "guarded"), () => coordinator.addEndpointState(this, "loaded"), () => coordinator.addEndpointState(this, "unloaded"), () => coordinator.addEndpointState(this, "routed"), () => coordinator.addEndpointState(this, "swapped"), () => coordinator.addEndpointState(this, "completed"));
  }
  finalizeContentChange(coordinator, _step) {
    const nextContentIndex = this.contents.findIndex((content) => content.navigation === coordinator.navigation);
    let nextContent = this.contents[nextContentIndex];
    if (this.remove) {
      const emptyContent = new ViewportScopeContent(this.router, this, this.owningScope, this.scope.hasScope);
      this.contents.splice(nextContentIndex, 1, emptyContent);
      nextContent.delete();
      nextContent = emptyContent;
    }
    nextContent.completed = true;
    let removeable = 0;
    for (let i = 0, ii = nextContentIndex; i < ii; i++) {
      if (!(this.contents[0].navigation.completed ?? false)) {
        break;
      }
      removeable++;
    }
    this.contents.splice(0, removeable);
    if (this.remove && Array.isArray(this.source)) {
      this.removeSourceItem();
    }
  }
  cancelContentChange(coordinator, noExitStep = null) {
    [...new Set(this.scope.children.map((scope) => scope.endpoint))].forEach((child) => child.cancelContentChange(coordinator, noExitStep));
    const nextContentIndex = this.contents.findIndex((content) => content.navigation === coordinator.navigation);
    if (nextContentIndex < 0) {
      return;
    }
    this.contents.splice(nextContentIndex, 1);
    if (this.add) {
      const index = this.source.indexOf(this.sourceItem);
      this.source.splice(index, 1);
      this.sourceItem = null;
    }
  }
  acceptSegment(segment) {
    if (segment === null && segment === void 0 || segment.length === 0) {
      return true;
    }
    if (segment === RoutingInstruction.clear(this.router) || segment === RoutingInstruction.add(this.router) || segment === this.name) {
      return true;
    }
    if (this.catches.length === 0) {
      return true;
    }
    if (this.catches.includes(segment)) {
      return true;
    }
    if (this.catches.filter((value) => value.includes("*")).length) {
      return true;
    }
    return false;
  }
  binding() {
    const source = this.source || [];
    if (source.length > 0 && this.sourceItem === null) {
      this.sourceItem = this.getAvailableSourceItem();
    }
  }
  unbinding() {
    if (this.sourceItem !== null && this.source !== null) {
      arrayRemove(this.source, (item) => item === this.sourceItem);
    }
    this.sourceItem = null;
  }
  getAvailableSourceItem() {
    if (this.source === null) {
      return null;
    }
    const siblings = this.siblings;
    for (const item of this.source) {
      if (siblings.every((sibling) => sibling.sourceItem !== item)) {
        return item;
      }
    }
    return null;
  }
  addSourceItem() {
    const item = {};
    this.source.push(item);
    return item;
  }
  removeSourceItem() {
    this.sourceItemIndex = this.source.indexOf(this.sourceItem);
    if (this.sourceItemIndex >= 0) {
      this.source.splice(this.sourceItemIndex, 1);
    }
  }
  getRoutes() {
    const routes2 = [];
    if (this.rootComponentType !== null) {
      const Type = this.rootComponentType.constructor === this.rootComponentType.constructor.constructor ? this.rootComponentType : this.rootComponentType.constructor;
      routes2.push(...Routes.getConfiguration(Type) ?? []);
    }
    return routes2;
  }
};
var StoredNavigation = class {
  constructor(entry = {
    instruction: "",
    fullStateInstruction: ""
  }) {
    this.instruction = entry.instruction;
    this.fullStateInstruction = entry.fullStateInstruction;
    this.scope = entry.scope;
    this.index = entry.index;
    this.firstEntry = entry.firstEntry;
    this.path = entry.path;
    this.title = entry.title;
    this.query = entry.query;
    this.fragment = entry.fragment;
    this.parameters = entry.parameters;
    this.data = entry.data;
  }
  toStoredNavigation() {
    return {
      instruction: this.instruction,
      fullStateInstruction: this.fullStateInstruction,
      scope: this.scope,
      index: this.index,
      firstEntry: this.firstEntry,
      path: this.path,
      title: this.title,
      query: this.query,
      fragment: this.fragment,
      parameters: this.parameters,
      data: this.data
    };
  }
};
var NavigationFlags = class {
  constructor() {
    this.first = false;
    this.new = false;
    this.refresh = false;
    this.forward = false;
    this.back = false;
    this.replace = false;
  }
};
var Navigation = class _Navigation extends StoredNavigation {
  constructor(entry = {
    instruction: "",
    fullStateInstruction: ""
  }) {
    super(entry);
    this.navigation = new NavigationFlags();
    this.repeating = false;
    this.previous = null;
    this.fromBrowser = false;
    this.origin = null;
    this.replacing = false;
    this.refreshing = false;
    this.untracked = false;
    this.process = null;
    this.completed = true;
    this.fromBrowser = entry.fromBrowser ?? this.fromBrowser;
    this.origin = entry.origin ?? this.origin;
    this.replacing = entry.replacing ?? this.replacing;
    this.refreshing = entry.refreshing ?? this.refreshing;
    this.untracked = entry.untracked ?? this.untracked;
    this.historyMovement = entry.historyMovement ?? this.historyMovement;
    this.process = null;
    this.timestamp = Date.now();
  }
  get useFullStateInstruction() {
    return (this.navigation.back ?? false) || (this.navigation.forward ?? false) || (this.navigation.refresh ?? false);
  }
  static create(entry = {
    instruction: "",
    fullStateInstruction: ""
  }) {
    return new _Navigation(entry);
  }
};
var AwaitableMap = class _AwaitableMap {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  set(key, value) {
    const openPromise = this.map.get(key);
    if (openPromise instanceof OpenPromise) {
      openPromise.resolve(value);
    }
    this.map.set(key, value);
  }
  delete(key) {
    const current = this.map.get(key);
    if (current instanceof OpenPromise) {
      current.reject();
    }
    this.map.delete(key);
  }
  await(key) {
    if (!this.map.has(key)) {
      const openPromise = new OpenPromise(`AwaitableMap: ${key}`);
      this.map.set(key, openPromise);
      return openPromise.promise;
    }
    const current = this.map.get(key);
    if (current instanceof OpenPromise) {
      return current.promise;
    }
    return current;
  }
  has(key) {
    return this.map.has(key) && !(this.map.get(key) instanceof OpenPromise);
  }
  clone() {
    const clone = new _AwaitableMap();
    clone.map = new Map(this.map);
    return clone;
  }
};
var ViewportContent = class extends EndpointContent {
  constructor(router, viewport, owningScope, hasScope, instruction = RoutingInstruction.create(""), navigation = Navigation.create({
    instruction: "",
    fullStateInstruction: ""
  }), connectedCE = null) {
    super(router, viewport, owningScope, hasScope, instruction, navigation);
    this.router = router;
    this.instruction = instruction;
    this.navigation = navigation;
    this.contentStates = new AwaitableMap();
    this.fromCache = false;
    this.fromHistory = false;
    this.reload = false;
    this.activatedResolve = null;
    if (!this.instruction.component.isType() && (connectedCE == null ? void 0 : connectedCE.container) != null) {
      this.instruction.component.type = this.toComponentType(connectedCE.container);
    }
  }
  /**
   * The viewport content's component instance
   */
  get componentInstance() {
    return this.instruction.component.instance;
  }
  /**
   * The viewport content's reload behavior, as in how it behaves
   * when the content is loaded again.
   */
  get reloadBehavior() {
    var _a, _b;
    if (this.instruction.route instanceof FoundRoute && ((_a = this.instruction.route.match) == null ? void 0 : _a.reloadBehavior) !== null) {
      return (_b = this.instruction.route.match) == null ? void 0 : _b.reloadBehavior;
    }
    return this.instruction.component.instance !== null && "reloadBehavior" in this.instruction.component.instance && this.instruction.component.instance.reloadBehavior !== void 0 ? this.instruction.component.instance.reloadBehavior : "default";
  }
  /**
   * Get the controller of the component in the viewport content.
   */
  get controller() {
    var _a;
    return (_a = this.instruction.component.instance) == null ? void 0 : _a.$controller;
  }
  /**
   * Whether the viewport content's component is equal to that of
   * another viewport content.
   *
   * @param other - The viewport content to compare with
   */
  equalComponent(other) {
    return this.instruction.sameComponent(this.router, other.instruction);
  }
  /**
   * Whether the viewport content's parameters is equal to that of
   * another viewport content.
   *
   * @param other - The viewport content to compare with
   */
  equalParameters(other) {
    return this.instruction.sameComponent(this.router, other.instruction, true) && // TODO: Review whether query is enough or if parameters need
    // to be checked as well depending on when query is updated.
    // Should probably be able to compare parameters vs query as well.
    (this.navigation.query ?? "") === (other.navigation.query ?? "");
  }
  /**
   * Whether the viewport content is equal from a caching perspective to
   * that of another viewport content.
   *
   * @param other - The viewport content to compare with
   */
  isCacheEqual(other) {
    return this.instruction.sameComponent(this.router, other.instruction, true);
  }
  /**
   * Get the controller of the component in the viewport content.
   *
   * @param connectedCE - The custom element connected to the viewport
   */
  contentController(connectedCE) {
    return Controller.$el(connectedCE.container.createChild(), this.instruction.component.instance, connectedCE.element, null);
  }
  /**
   * Create the component for the viewport content (based on the instruction)
   *
   * @param connectedCE - The custom element connected to the viewport
   * @param fallback - A (possible) fallback component to create if the
   * instruction component can't be created. The name of the failing
   * component is passed as parameter `id` to the fallback component
   * @param fallbackAction - Whether the children of an unloadable component
   * will be processed under the fallback component or if the child
   * instructions will be aborted.
   */
  createComponent(coordinator, connectedCE, fallback, fallbackAction) {
    if (this.contentStates.has("created")) {
      return;
    }
    if (!this.fromCache && !this.fromHistory) {
      try {
        return onResolve(this.toComponentInstance(connectedCE.container, connectedCE.controller, connectedCE.element), (component) => {
          this.instruction.component.set(component);
          this.contentStates.set("created", void 0);
        });
      } catch (e) {
        this._assertInstantiationError(e);
        if ((fallback ?? "") !== "") {
          if (fallbackAction === "process-children") {
            this.instruction.parameters.set([this.instruction.component.name]);
          } else {
            this.instruction.parameters.set([this.instruction.unparsed ?? this.instruction.component.name]);
            if (this.instruction.hasNextScopeInstructions) {
              coordinator.removeInstructions(this.instruction.nextScopeInstructions);
              this.instruction.nextScopeInstructions = null;
            }
          }
          this.instruction.component.set(fallback);
          try {
            return onResolve(this.toComponentInstance(connectedCE.container, connectedCE.controller, connectedCE.element), (fallbackComponent) => {
              this.instruction.component.set(fallbackComponent);
              this.contentStates.set("created", void 0);
            });
          } catch (ee) {
            this._assertInstantiationError(ee);
            throw createMappedError(2017, this.instruction.component.name, ee);
          }
        } else {
          throw createMappedError(2017, this.instruction.component.name);
        }
      }
    }
    this.contentStates.set("created", void 0);
  }
  /**
   * Check if the viewport content's component can be loaded.
   */
  canLoad() {
    var _a, _b, _c;
    if (!this.contentStates.has("created") || this.contentStates.has("checkedLoad") && !this.reload) {
      return true;
    }
    const instance = this.instruction.component.instance;
    if (instance == null) {
      return true;
    }
    this.contentStates.set("checkedLoad", void 0);
    const parentParameters = (_c = (_b = (_a = this.endpoint.parentViewport) == null ? void 0 : _a.getTimeContent(this.navigation.timestamp)) == null ? void 0 : _b.instruction) == null ? void 0 : _c.typeParameters(this.router);
    const parameters = this.instruction.typeParameters(this.router);
    const merged = { ...this.navigation.parameters, ...parentParameters, ...parameters };
    const hooks = this._getLifecycleHooks(instance, "canLoad").map((hook) => (innerStep) => {
      if ((innerStep == null ? void 0 : innerStep.previousValue) != null && innerStep.previousValue !== true) {
        innerStep.exit();
        return innerStep.previousValue ?? false;
      }
      return hook(instance, merged, this.instruction, this.navigation);
    });
    if (instance.canLoad != null) {
      hooks.push((innerStep) => {
        if (((innerStep == null ? void 0 : innerStep.previousValue) ?? true) === false) {
          return false;
        }
        return instance.canLoad(merged, this.instruction, this.navigation);
      });
    }
    if (hooks.length === 0) {
      return true;
    }
    if (hooks.length === 1) {
      return hooks[0](null);
    }
    return Runner.run("canLoad", ...hooks);
  }
  /**
   * Check if the viewport content's component can be unloaded.
   *
   * @param navigation - The navigation that causes the content change
   */
  canUnload(navigation) {
    if (this.contentStates.has("checkedUnload") && !this.reload) {
      return true;
    }
    this.contentStates.set("checkedUnload", void 0);
    if (!this.contentStates.has("loaded")) {
      return true;
    }
    const instance = this.instruction.component.instance;
    if (navigation === null) {
      navigation = Navigation.create({
        instruction: "",
        fullStateInstruction: "",
        previous: this.navigation
      });
    }
    const hooks = this._getLifecycleHooks(instance, "canUnload").map((hook) => (innerStep) => {
      if (((innerStep == null ? void 0 : innerStep.previousValue) ?? true) === false) {
        return false;
      }
      return hook(instance, this.instruction, navigation);
    });
    if (instance.canUnload != null) {
      hooks.push((innerStep) => {
        var _a;
        if (((innerStep == null ? void 0 : innerStep.previousValue) ?? true) === false) {
          return false;
        }
        return (_a = instance.canUnload) == null ? void 0 : _a.call(instance, this.instruction, navigation);
      });
    }
    if (hooks.length === 0) {
      return true;
    }
    if (hooks.length === 1) {
      return hooks[0](null);
    }
    return Runner.run("canUnload", ...hooks);
  }
  /**
   * Load the viewport content's content.
   *
   * @param step - The previous step in this transition Run
   */
  load(step) {
    return Runner.run(step, () => this.contentStates.await("checkedLoad"), () => {
      var _a, _b, _c;
      if (!this.contentStates.has("created") || this.contentStates.has("loaded") && !this.reload) {
        return;
      }
      this.reload = false;
      this.contentStates.set("loaded", void 0);
      const instance = this.instruction.component.instance;
      const parentParameters = (_c = (_b = (_a = this.endpoint.parentViewport) == null ? void 0 : _a.getTimeContent(this.navigation.timestamp)) == null ? void 0 : _b.instruction) == null ? void 0 : _c.typeParameters(this.router);
      const parameters = this.instruction.typeParameters(this.router);
      const merged = { ...this.navigation.parameters, ...parentParameters, ...parameters };
      const hooks = this._getLifecycleHooks(instance, "loading").map((hook) => () => hook(instance, merged, this.instruction, this.navigation));
      hooks.push(...this._getLifecycleHooks(instance, "load").map((hook) => () => {
        console.warn(`[Deprecated] Found deprecated hook name "load" in ${this.instruction.component.name}. Please use the new name "loading" instead.`);
        return hook(instance, merged, this.instruction, this.navigation);
      }));
      if (hooks.length !== 0) {
        if (typeof instance.loading === "function") {
          hooks.push(() => instance.loading(merged, this.instruction, this.navigation));
        }
        if (hasVmHook(instance, "load")) {
          console.warn(`[Deprecated] Found deprecated hook name "load" in ${this.instruction.component.name}. Please use the new name "loading" instead.`);
          hooks.push(() => instance.load(merged, this.instruction, this.navigation));
        }
        return Runner.run("load", ...hooks);
      }
      if (hasVmHook(instance, "loading")) {
        return instance.loading(merged, this.instruction, this.navigation);
      }
      if (hasVmHook(instance, "load")) {
        console.warn(`[Deprecated] Found deprecated hook name "load" in ${this.instruction.component.name}. Please use the new name "loading" instead.`);
        return instance.load(merged, this.instruction, this.navigation);
      }
    });
  }
  /**
   * Unload the viewport content's content.
   *
   * @param navigation - The navigation that causes the content change
   */
  unload(navigation) {
    if (!this.contentStates.has("loaded")) {
      return;
    }
    this.contentStates.delete("loaded");
    const instance = this.instruction.component.instance;
    if (navigation === null) {
      navigation = Navigation.create({
        instruction: "",
        fullStateInstruction: "",
        previous: this.navigation
      });
    }
    const hooks = this._getLifecycleHooks(instance, "unloading").map((hook) => () => hook(instance, this.instruction, navigation));
    hooks.push(...this._getLifecycleHooks(instance, "unload").map((hook) => () => {
      console.warn(`[Deprecated] Found deprecated hook name "unload" in ${this.instruction.component.name}. Please use the new name "unloading" instead.`);
      return hook(instance, this.instruction, navigation);
    }));
    if (hooks.length !== 0) {
      if (hasVmHook(instance, "unloading")) {
        hooks.push(() => instance.unloading(this.instruction, navigation));
      }
      if (hasVmHook(instance, "unload")) {
        console.warn(`[Deprecated] Found deprecated hook name "unload" in ${this.instruction.component.name}. Please use the new name "unloading" instead.`);
        hooks.push(() => instance.unload(this.instruction, navigation));
      }
      return Runner.run("unload", ...hooks);
    }
    if (hasVmHook(instance, "unloading")) {
      return instance.unloading(this.instruction, navigation);
    }
    if (hasVmHook(instance, "unload")) {
      console.warn(`[Deprecated] Found deprecated hook name "unload" in ${this.instruction.component.name}. Please use the new name "unloading" instead.`);
      return instance.unload(this.instruction, navigation);
    }
  }
  /**
   * Activate (bind and attach) the content's component.
   *
   * @param step - The previous step in this transition Run
   * @param initiator - The controller initiating the activation
   * @param parent - The parent controller for the content's component controller
   * @param flags - The lifecycle flags
   * @param connectedCE - The viewport's connectd custom element
   * @param boundCallback - A callback that's called when the content's component has been bound
   * @param attachPromise - A promise that th content's component controller will await before attaching
   */
  activateComponent(step, initiator, parent, connectedCE, boundCallback, attachPromise) {
    return Runner.run(
      step,
      () => this.contentStates.await("loaded"),
      () => this.waitForParent(parent),
      // TODO: It might be possible to refactor this away
      () => {
        var _a;
        if (this.contentStates.has("activating") || this.contentStates.has("activated")) {
          return;
        }
        this.contentStates.set("activating", void 0);
        return (_a = this.controller) == null ? void 0 : _a.activate(initiator ?? this.controller, parent, void 0);
      },
      () => {
        this.contentStates.set("activated", void 0);
      }
    );
  }
  /**
   * Deactivate (detach and unbind) the content's component.
   *
   * @param step - The previous step in this transition Run
   * @param initiator - The controller initiating the activation
   * @param parent - The parent controller for the content's component controller
   * @param flags - The lifecycle flags
   * @param connectedCE - The viewport's connectd custom element
   * @param stateful - Whether the content's component is stateful and shouldn't be disposed
   */
  deactivateComponent(step, initiator, parent, connectedCE, stateful = false) {
    if (!this.contentStates.has("activated") && !this.contentStates.has("activating")) {
      return;
    }
    return Runner.run(
      step,
      // TODO: Revisit once it's possible to abort within lifecycle hooks
      // () => {
      //   if (!this.contentStates.has('activated')) {
      //     const elements = Array.from(connectedCE.element.children);
      //     for (const el of elements) {
      //       (el as HTMLElement).style.display = 'none';
      //     }
      //     return this.contentStates.await('activated');
      //   }
      // },
      // () => this.waitForActivated(this.controller, connectedCE),
      () => {
        var _a;
        if (stateful && connectedCE.element !== null) {
          const elements = Array.from(connectedCE.element.getElementsByTagName("*"));
          for (const el of elements) {
            if (el.scrollTop > 0 || el.scrollLeft) {
              el.setAttribute("au-element-scroll", `${el.scrollTop},${el.scrollLeft}`);
            }
          }
        }
        this.contentStates.delete("activated");
        this.contentStates.delete("activating");
        return (_a = this.controller) == null ? void 0 : _a.deactivate(initiator ?? this.controller, parent);
      }
    );
  }
  /**
   * Dispose the content's component.
   *
   * @param connectedCE - The viewport's connectd custom element
   * @param cache - The cache to push the viewport content to if stateful
   * @param stateful - Whether the content's component is stateful and shouldn't be disposed
   */
  disposeComponent(connectedCE, cache, stateful = false) {
    var _a;
    if (!this.contentStates.has("created") || this.instruction.component.instance == null) {
      return;
    }
    if (!stateful) {
      this.contentStates.delete("created");
      return (_a = this.controller) == null ? void 0 : _a.dispose();
    } else {
      cache.push(this);
    }
  }
  /**
   * Free the content's content.
   *
   * @param step - The previous step in this transition Run
   * @param connectedCE - The viewport's connectd custom element
   * @param navigation - The navigation causing the content to be freed
   * @param cache - The cache to push the viewport content to if stateful
   * @param stateful - Whether the content's component is stateful and shouldn't be disposed
   */
  freeContent(step, connectedCE, navigation, cache, stateful = false) {
    return Runner.run(step, () => this.unload(navigation), (innerStep) => this.deactivateComponent(innerStep, null, connectedCE.controller, connectedCE, stateful), () => this.disposeComponent(connectedCE, cache, stateful));
  }
  /**
   * Get the content's component name (if any).
   */
  toComponentName() {
    return this.instruction.component.name;
  }
  /**
   * Get the content's component type (if any).
   */
  toComponentType(container) {
    if (this.instruction.component.none) {
      return null;
    }
    return this.instruction.component.toType(container, this.instruction);
  }
  /**
   * Get the content's component instance (if any).
   */
  toComponentInstance(parentContainer, parentController, parentElement) {
    if (this.instruction.component.none) {
      return null;
    }
    return this.instruction.component.toInstance(parentContainer, parentController, parentElement, this.instruction);
  }
  /**
   * Wait for the viewport's parent to be active.
   *
   * @param parent - The parent controller to the viewport's controller
   */
  waitForParent(parent) {
    if (parent === null) {
      return;
    }
    if (!parent.isActive) {
      return new Promise((resolve2) => {
        this.endpoint.activeResolve = resolve2;
      });
    }
  }
  /**
   * Assert that the error is an instantiation error. If it's not, throw
   * the error. If it is, log a warning in development mode.
   *
   * @param e - The error to assert
   */
  _assertInstantiationError(e) {
    if (!e.message.startsWith("AUR0009:")) {
      throw e;
    }
    {
      const componentName = this.instruction.component.name;
      console.warn(createMappedError(2017, componentName, e));
    }
  }
  _getLifecycleHooks(instance, name) {
    const hooks = instance.$controller.lifecycleHooks[name] ?? [];
    return hooks.map((hook) => hook.instance[name].bind(hook.instance));
  }
};
function hasVmHook(instance, lifecycle) {
  return typeof instance[lifecycle] === "function";
}
var ViewportOptions = class _ViewportOptions {
  constructor(scope = true, usedBy = [], _default = "", fallback = "", fallbackAction = "", noLink = false, noTitle = false, stateful = false, forceDescription = false, noHistory = false) {
    this.scope = scope;
    this.usedBy = usedBy;
    this.fallback = fallback;
    this.fallbackAction = fallbackAction;
    this.noLink = noLink;
    this.noTitle = noTitle;
    this.stateful = stateful;
    this.forceDescription = forceDescription;
    this.noHistory = noHistory;
    this.default = void 0;
    this.default = _default;
  }
  static create(options) {
    const created = new _ViewportOptions();
    if (options !== void 0) {
      created.apply(options);
    }
    return created;
  }
  apply(options) {
    this.scope = options.scope ?? this.scope;
    this.usedBy = (typeof options.usedBy === "string" ? options.usedBy.split(",").filter((str) => str.length > 0) : options.usedBy) ?? this.usedBy;
    this.default = options.default ?? this.default;
    this.fallback = options.fallback ?? this.fallback;
    this.fallbackAction = options.fallbackAction ?? this.fallbackAction;
    this.noLink = options.noLink ?? this.noLink;
    this.noTitle = options.noTitle ?? this.noTitle;
    this.stateful = options.stateful ?? this.stateful;
    this.forceDescription = options.forceDescription ?? this.forceDescription;
    this.noHistory = options.noHistory ?? this.noHistory;
  }
};
var Viewport = class extends Endpoint$1 {
  constructor(router, name, connectedCE, owningScope, hasScope, options) {
    super(router, name, connectedCE);
    this.contents = [];
    this.forceRemove = false;
    this.options = new ViewportOptions();
    this.activeResolve = null;
    this.connectionResolve = null;
    this.clear = false;
    this.coordinators = [];
    this.previousViewportState = null;
    this.cache = [];
    this.historyCache = [];
    this.contents.push(new ViewportContent(router, this, owningScope, hasScope));
    this.contents[0].completed = true;
    if (options !== void 0) {
      this.options.apply(options);
    }
  }
  /**
   * The current content of the endpoint
   */
  getContent() {
    if (this.contents.length === 1) {
      return this.contents[0];
    }
    let content;
    for (let i = 0, ii = this.contents.length; i < ii; i++) {
      if (this.contents[i].completed ?? false) {
        content = this.contents[i];
      } else {
        break;
      }
    }
    return content;
  }
  /**
   * The next, to be transitioned in, content of the endpoint
   */
  getNextContent() {
    if (this.contents.length === 1) {
      return null;
    }
    const lastCompleted = this.contents.indexOf(this.getContent());
    return this.contents.length > lastCompleted ? this.contents[lastCompleted + 1] : null;
  }
  /**
   * The content of the viewport at a specific timestamp.
   *
   * @param timestamp - The timestamp
   */
  getTimeContent(timestamp) {
    let content = null;
    for (let i = 0, ii = this.contents.length; i < ii; i++) {
      if (this.contents[i].navigation.timestamp > timestamp) {
        break;
      }
      content = this.contents[i];
    }
    return content;
  }
  /**
   * The content for a specific navigation (or coordinator)
   */
  getNavigationContent(navigation) {
    return super.getNavigationContent(navigation);
  }
  /**
   * The parent viewport.
   */
  get parentViewport() {
    let scope = this.connectedScope;
    while ((scope == null ? void 0 : scope.parent) != null) {
      scope = scope.parent;
      if (scope.endpoint.isViewport) {
        return scope.endpoint;
      }
    }
    return null;
  }
  /**
   * Whether the viewport (content) is empty.
   */
  get isEmpty() {
    return this.getContent().componentInstance === null;
  }
  /**
   * Whether the viewport content should be cleared and removed,
   * regardless of statefulness (and hooks). If a parent should
   * be removed, the viewport should as well.
   */
  get doForceRemove() {
    let scope = this.connectedScope;
    while (scope !== null) {
      if (scope.isViewport && scope.endpoint.forceRemove) {
        return true;
      }
      scope = scope.parent;
    }
    return false;
  }
  /**
   * Whether a coordinator handles the active navigation.
   *
   * @param coordinator - The coordinator to check
   */
  isActiveNavigation(coordinator) {
    return this.coordinators[this.coordinators.length - 1] === coordinator;
  }
  /**
   * For debug purposes.
   */
  toString() {
    var _a, _b;
    const contentName = ((_a = this.getContent()) == null ? void 0 : _a.instruction.component.name) ?? "";
    const nextContentName = ((_b = this.getNextContent()) == null ? void 0 : _b.instruction.component.name) ?? "";
    return `v:${this.name}[${contentName}->${nextContentName}]`;
  }
  /**
   * Set the next content for the viewport. Returns the action that the viewport
   * will take when the navigation coordinator starts the transition. Note that a
   * swap isn't guaranteed, current component configuration can result in a skipped
   * transition.
   *
   * @param instruction - The routing instruction describing the next content
   * @param navigation - The navigation that requests the content change
   */
  setNextContent(instruction, navigation) {
    instruction.endpoint.set(this);
    this.clear = instruction.isClear(this.router);
    const content = this.getContent();
    const nextContent = new ViewportContent(this.router, this, this.owningScope, this.scope.hasScope, !this.clear ? instruction : void 0, navigation, this.connectedCE ?? null);
    this.contents.push(nextContent);
    nextContent.fromHistory = nextContent.componentInstance !== null && navigation.navigation != null ? !!navigation.navigation.back || !!navigation.navigation.forward : false;
    if (this.options.stateful) {
      const cached = this.cache.find((item) => nextContent.isCacheEqual(item));
      if (cached !== void 0) {
        this.contents.splice(this.contents.indexOf(nextContent), 1, cached);
        nextContent.fromCache = true;
      } else {
        this.cache.push(nextContent);
      }
    }
    if (nextContent.componentInstance !== null && content.componentInstance === nextContent.componentInstance) {
      nextContent.delete();
      this.contents.splice(this.contents.indexOf(nextContent), 1);
      return this.transitionAction = "skip";
    }
    if (!content.equalComponent(nextContent) || navigation.navigation.refresh || // Navigation 'refresh' performed
    content.reloadBehavior === "refresh") {
      return this.transitionAction = "swap";
    }
    if (content.reloadBehavior === "disallow") {
      nextContent.delete();
      this.contents.splice(this.contents.indexOf(nextContent), 1);
      return this.transitionAction = "skip";
    }
    if (content.reloadBehavior === "reload") {
      content.reload = true;
      nextContent.instruction.component.set(content.componentInstance);
      nextContent.contentStates = content.contentStates.clone();
      nextContent.reload = content.reload;
      return this.transitionAction = "reload";
    }
    if (this.options.stateful && content.equalParameters(nextContent)) {
      nextContent.delete();
      this.contents.splice(this.contents.indexOf(nextContent), 1);
      return this.transitionAction = "skip";
    }
    if (!content.equalParameters(nextContent)) {
      {
        return this.transitionAction = "swap";
      }
    }
    nextContent.delete();
    this.contents.splice(this.contents.indexOf(nextContent), 1);
    return this.transitionAction = "skip";
  }
  /**
   * Connect a ViewportCustomElement to this viewport endpoint, applying options
   * while doing so.
   *
   * @param connectedCE - The custom element to connect
   * @param options - The options to apply
   */
  setConnectedCE(connectedCE, options) {
    var _a, _b, _c, _d;
    options = options ?? {};
    if (this.connectedCE !== connectedCE) {
      this.previousViewportState = { ...this };
      this.clearState();
      this.connectedCE = connectedCE;
      this.options.apply(options);
      (_a = this.connectionResolve) == null ? void 0 : _a.call(this);
    }
    const parentDefaultRoute = (((_b = this.scope.parent) == null ? void 0 : _b.endpoint.getRoutes()) ?? []).filter((route2) => (Array.isArray(route2.path) ? route2.path : [route2.path]).includes("")).length > 0;
    if (this.getContent().componentInstance === null && ((_c = this.getNextContent()) == null ? void 0 : _c.componentInstance) == null && (this.options.default || parentDefaultRoute)) {
      const instructions = RoutingInstruction.parse(this.router, this.options.default ?? "");
      if (instructions.length === 0 && parentDefaultRoute) {
        const foundRoute = (_d = this.scope.parent) == null ? void 0 : _d.findInstructions([RoutingInstruction.create("")], false, this.router.configuration.options.useConfiguredRoutes);
        if (foundRoute == null ? void 0 : foundRoute.foundConfiguration) {
          instructions.push(...foundRoute.instructions);
        }
      }
      for (const instruction of instructions) {
        instruction.endpoint.set(this);
        instruction.scope = this.owningScope;
        instruction.default = true;
      }
      this.router.load(instructions, { append: true }).catch((error) => {
        throw error;
      });
    }
  }
  // TODO(alpha): Look into this!
  remove(step, connectedCE) {
    if (this.connectedCE === connectedCE) {
      return Runner.run(step, (innerStep) => {
        var _a;
        if (this.getContent().componentInstance !== null) {
          return this.getContent().freeContent(innerStep, this.connectedCE, ((_a = this.getNextContent()) == null ? void 0 : _a.navigation) ?? null, this.historyCache, this.doForceRemove ? false : this.router.statefulHistory || this.options.stateful);
        }
      }, (innerStep) => {
        if (this.doForceRemove) {
          const removes = [];
          for (const content of this.historyCache) {
            removes.push((innerInnerStep) => content.freeContent(innerInnerStep, null, null, this.historyCache, false));
          }
          removes.push(() => {
            this.historyCache = [];
          });
          return Runner.run(innerStep, ...removes);
        }
        return true;
      });
    }
    return false;
  }
  /**
   * Transition from current content to the next.
   *
   * @param coordinator - The coordinator of the navigation
   */
  async transition(coordinator) {
    var _a, _b, _c, _d;
    const navigatingPrefix = this.router.configuration.options.indicators.viewportNavigating;
    this.coordinators.push(coordinator);
    while (this.coordinators[0] !== coordinator) {
      await this.coordinators[0].waitForSyncState("completed");
    }
    let actingParentViewport = this.parentViewport;
    if (actingParentViewport !== null && actingParentViewport.transitionAction !== "reload" && actingParentViewport.transitionAction !== "swap") {
      actingParentViewport = null;
    }
    const guardSteps = [
      (step) => {
        if (this.isActiveNavigation(coordinator)) {
          return this.canUnload(coordinator, step);
        }
      },
      (step) => {
        if (this.isActiveNavigation(coordinator)) {
          if ((step.previousValue ?? true) === false) {
            coordinator.cancel();
          }
        }
      },
      (step) => {
        if (this.isActiveNavigation(coordinator)) {
          return RoutingInstruction.resolve([this.getNavigationContent(coordinator).instruction]);
        }
      },
      (step) => {
        if (this.isActiveNavigation(coordinator)) {
          if (this.router.isRestrictedNavigation) {
            const routerOptions = this.router.configuration.options;
            return this.getNavigationContent(coordinator).createComponent(coordinator, this.connectedCE, this.options.fallback || routerOptions.fallback, this.options.fallbackAction || routerOptions.fallbackAction);
          }
        }
      },
      () => coordinator.addEndpointState(this, "guardedUnload"),
      () => coordinator.waitForSyncState("guardedUnload", this),
      // Awaits all `canUnload` hooks
      () => actingParentViewport !== null ? coordinator.waitForEndpointState(actingParentViewport, "guardedLoad") : void 0,
      // Awaits parent `canLoad`
      (step) => {
        if (this.isActiveNavigation(coordinator)) {
          return this.canLoad(coordinator, step);
        }
      },
      (step) => {
        var _a2;
        if (this.isActiveNavigation(coordinator)) {
          let canLoadResult = step.previousValue ?? true;
          if (typeof canLoadResult === "boolean") {
            if (!canLoadResult) {
              step.cancel();
              coordinator.cancel();
              const instruction = this.getNavigationContent(coordinator).instruction;
              coordinator.removeInstructions(instruction.dynasty);
              instruction.nextScopeInstructions = null;
              return;
            }
          } else {
            const instruction = this.getNavigationContent(coordinator).instruction;
            coordinator.removeInstructions(instruction.dynasty);
            instruction.nextScopeInstructions = null;
            if (typeof canLoadResult === "string") {
              const scope = this.scope;
              const options = this.router.configuration.options;
              let instructions = RoutingInstruction.parse(this.router, canLoadResult);
              const foundRoute = (_a2 = scope.parent) == null ? void 0 : _a2.findInstructions(instructions, options.useDirectRouting, options.useConfiguredRoutes);
              if ((foundRoute == null ? void 0 : foundRoute.foundConfiguration) || (foundRoute == null ? void 0 : foundRoute.foundInstructions)) {
                instructions = foundRoute.instructions;
              }
              for (const instruction2 of instructions) {
                instruction2.endpoint.set(this);
                instruction2.scope = scope.owningScope;
              }
              canLoadResult = instructions;
            }
            return Runner.run(step, () => {
              void this.router.load(canLoadResult, { append: coordinator });
            }, (innerStep) => this.cancelContentChange(coordinator, innerStep), () => RoutingInstruction.resolve(canLoadResult), (innerStep) => {
              return innerStep.exit();
            });
          }
        }
        coordinator.addEndpointState(this, "guardedLoad");
        coordinator.addEndpointState(this, "guarded");
      }
    ];
    const routingSteps = [
      () => coordinator.waitForSyncState("guarded", this),
      (step) => {
        if (this.isActiveNavigation(coordinator)) {
          return this.unload(coordinator, step);
        }
      },
      () => coordinator.addEndpointState(this, "unloaded"),
      () => coordinator.waitForSyncState("unloaded", this),
      () => actingParentViewport !== null ? coordinator.waitForEndpointState(actingParentViewport, "loaded") : void 0,
      (step) => {
        if (this.isActiveNavigation(coordinator)) {
          return this.load(coordinator, step);
        }
      },
      () => coordinator.addEndpointState(this, "loaded"),
      () => coordinator.addEndpointState(this, "routed")
    ];
    const lifecycleSteps = [
      () => coordinator.waitForSyncState("routed", this),
      () => coordinator.waitForEndpointState(this, "routed")
    ];
    const swapOrder = this.router.configuration.options.swapOrder;
    switch (swapOrder) {
      case "detach-current-attach-next":
        lifecycleSteps.push((step) => {
          if (this.isActiveNavigation(coordinator)) {
            return this.removeContent(step, coordinator);
          }
        }, (step) => {
          if (this.isActiveNavigation(coordinator)) {
            return this.addContent(step, coordinator);
          }
        });
        break;
      case "attach-next-detach-current":
        lifecycleSteps.push((step) => {
          if (this.isActiveNavigation(coordinator)) {
            return this.addContent(step, coordinator);
          }
        }, (step) => {
          if (this.isActiveNavigation(coordinator)) {
            return this.removeContent(step, coordinator);
          }
        });
        break;
      case "detach-attach-simultaneously":
        lifecycleSteps.push((step) => Runner.runParallel(step, (innerStep) => {
          if (this.isActiveNavigation(coordinator)) {
            return this.removeContent(innerStep, coordinator);
          }
        }, (innerStep) => {
          if (this.isActiveNavigation(coordinator)) {
            return this.addContent(innerStep, coordinator);
          }
        }));
        break;
      case "attach-detach-simultaneously":
        lifecycleSteps.push((step) => Runner.runParallel(step, (innerStep) => {
          if (this.isActiveNavigation(coordinator)) {
            return this.addContent(innerStep, coordinator);
          }
        }, (innerStep) => {
          if (this.isActiveNavigation(coordinator)) {
            return this.removeContent(innerStep, coordinator);
          }
        }));
        break;
    }
    lifecycleSteps.push(() => coordinator.addEndpointState(this, "swapped"));
    (_b = (_a = this.connectedCE) == null ? void 0 : _a.setActivity) == null ? void 0 : _b.call(_a, navigatingPrefix, true);
    (_d = (_c = this.connectedCE) == null ? void 0 : _c.setActivity) == null ? void 0 : _d.call(_c, coordinator.navigation.navigation, true);
    const result = Runner.run("transition", (step) => coordinator.setEndpointStep(this, step.root), ...guardSteps, ...routingSteps, ...lifecycleSteps, () => coordinator.addEndpointState(this, "completed"), () => coordinator.waitForSyncState("bound"), () => {
      var _a2, _b2, _c2, _d2;
      (_b2 = (_a2 = this.connectedCE) == null ? void 0 : _a2.setActivity) == null ? void 0 : _b2.call(_a2, navigatingPrefix, false);
      (_d2 = (_c2 = this.connectedCE) == null ? void 0 : _c2.setActivity) == null ? void 0 : _d2.call(_c2, coordinator.navigation.navigation, false);
    });
    if (result instanceof Promise) {
      result.catch((_err) => {
      });
    }
  }
  /**
   * Check if the current content can be unloaded.
   *
   * @param step - The previous step in this transition Run
   */
  canUnload(coordinator, step) {
    return Runner.run(step, (innerStep) => {
      return this.getContent().connectedScope.canUnload(coordinator, innerStep);
    }, (innerStep) => {
      if ((innerStep.previousValue ?? true) === false) {
        return false;
      }
      return this.getContent().canUnload(coordinator.navigation);
    });
  }
  /**
   * Check if the next content can be loaded.
   *
   * @param step - The previous step in this transition Run
   */
  canLoad(coordinator, step) {
    if (this.clear) {
      return true;
    }
    return Runner.run(step, () => this.waitForConnected(), () => {
      const routerOptions = this.router.configuration.options;
      const navigationContent = this.getNavigationContent(coordinator);
      return navigationContent.createComponent(coordinator, this.connectedCE, this.options.fallback || routerOptions.fallback, this.options.fallbackAction || routerOptions.fallbackAction);
    }, () => this.getNavigationContent(coordinator).canLoad());
  }
  /**
   * Load the next content.
   *
   * @param step - The previous step in this transition Run
   */
  load(coordinator, step) {
    if (this.clear) {
      return;
    }
    return this.getNavigationContent(coordinator).load(step);
  }
  /**
   * Add (activate) the next content.
   *
   * @param step - The previous step in this transition Run
   * @param coordinator - The navigation coordinator
   */
  addContent(step, coordinator) {
    return this.activate(step, null, this.connectedController, coordinator);
  }
  /**
   * Remove (deactivate) the current content.
   *
   * @param step - The previous step in this transition Run
   * @param coordinator - The navigation coordinator
   */
  removeContent(step, coordinator) {
    if (this.isEmpty) {
      return;
    }
    const manualDispose = this.router.statefulHistory || (this.options.stateful ?? false);
    return Runner.run(
      step,
      // TODO: This also needs to be added when coordinator isn't active (and
      // this method isn't called)
      () => coordinator.addEndpointState(this, "bound"),
      () => coordinator.waitForSyncState("bound"),
      (innerStep) => this.deactivate(innerStep, null, this.connectedController),
      () => manualDispose ? this.dispose() : void 0
    );
  }
  /**
   * Activate the next content component, running `load` first. (But it only
   * runs if it's not already run.) Called both when transitioning and when
   * the custom element triggers it.
   *
   * @param step - The previous step in this transition Run
   * @param initiator - The controller that initiates the activate
   * @param parent - The parent controller
   * @param flags - The lifecycle flags for `activate`
   * @param coordinator - The navigation coordinator
   */
  activate(step, initiator, parent, coordinator) {
    if (this.activeContent.componentInstance !== null) {
      return Runner.run(
        step,
        () => this.activeContent.canLoad(),
        // Only acts if not already checked
        (innerStep) => this.activeContent.load(innerStep),
        // Only acts if not already loaded
        (innerStep) => this.activeContent.activateComponent(
          innerStep,
          initiator,
          parent,
          this.connectedCE,
          // TODO: This also needs to be added when coordinator isn't active (and
          // this method isn't called)
          () => coordinator == null ? void 0 : coordinator.addEndpointState(this, "bound"),
          coordinator == null ? void 0 : coordinator.waitForSyncState("bound")
        )
      );
    }
  }
  /**
   * Deactivate the current content component. Called both when
   * transitioning and when the custom element triggers it.
   *
   * @param initiator - The controller that initiates the deactivate
   * @param parent - The parent controller
   * @param flags - The lifecycle flags for `deactivate`
   */
  deactivate(step, initiator, parent) {
    var _a;
    const content = this.getContent();
    if ((content == null ? void 0 : content.componentInstance) != null && !content.reload && content.componentInstance !== ((_a = this.getNextContent()) == null ? void 0 : _a.componentInstance)) {
      return content.deactivateComponent(step, initiator, parent, this.connectedCE, this.router.statefulHistory || this.options.stateful);
    }
  }
  /**
   * Unload the current content.
   *
   * @param step - The previous step in this transition Run
   */
  unload(coordinator, step) {
    return Runner.run(step, (unloadStep) => this.getContent().connectedScope.unload(coordinator, unloadStep), () => this.getContent().componentInstance != null ? this.getContent().unload(coordinator.navigation ?? null) : void 0);
  }
  /**
   * Dispose the current content.
   */
  dispose() {
    var _a;
    if (this.getContent().componentInstance !== null && !this.getContent().reload && this.getContent().componentInstance !== ((_a = this.getNextContent()) == null ? void 0 : _a.componentInstance)) {
      this.getContent().disposeComponent(this.connectedCE, this.historyCache, this.router.statefulHistory || this.options.stateful);
    }
  }
  /**
   * Finalize the change of content by making the next content the current
   * content. The previously current content is deleted.
   */
  finalizeContentChange(coordinator, step) {
    var _a, _b, _c, _d;
    const nextContentIndex = this.contents.findIndex((content) => content.navigation === coordinator.navigation);
    let nextContent = this.contents[nextContentIndex];
    const previousContent = this.contents[nextContentIndex - 1];
    if (this.clear) {
      const emptyContent = new ViewportContent(this.router, this, this.owningScope, this.scope.hasScope, void 0, nextContent.navigation);
      this.contents.splice(nextContentIndex, 1, emptyContent);
      nextContent.delete();
      nextContent = emptyContent;
    } else {
      nextContent.reload = false;
    }
    previousContent.delete();
    nextContent.completed = true;
    this.transitionAction = "";
    nextContent.contentStates.delete("checkedUnload");
    nextContent.contentStates.delete("checkedLoad");
    this.previousViewportState = null;
    const navigatingPrefix = this.router.configuration.options.indicators.viewportNavigating;
    (_b = (_a = this.connectedCE) == null ? void 0 : _a.setActivity) == null ? void 0 : _b.call(_a, navigatingPrefix, false);
    (_d = (_c = this.connectedCE) == null ? void 0 : _c.setActivity) == null ? void 0 : _d.call(_c, coordinator.navigation.navigation, false);
    let removeable = 0;
    for (let i = 0, ii = nextContentIndex; i < ii; i++) {
      if (!(this.contents[0].navigation.completed ?? false)) {
        break;
      }
      removeable++;
    }
    this.contents.splice(0, removeable);
    arrayRemove(this.coordinators, (coord) => coord === coordinator);
  }
  /**
   * Cancel the change of content. The next content is freed/discarded.
   *
   * @param step - The previous step in this transition Run
   */
  cancelContentChange(coordinator, noExitStep = null) {
    var _a;
    [...new Set(this.scope.children.map((scope) => scope.endpoint))].forEach((child) => child.cancelContentChange(coordinator, noExitStep));
    const nextContentIndex = this.contents.findIndex((content) => content.navigation === coordinator.navigation);
    if (nextContentIndex < 0) {
      return;
    }
    const step = ((_a = coordinator.getEndpointStep(this)) == null ? void 0 : _a.current) ?? null;
    const nextContent = this.contents[nextContentIndex];
    const previousContent = this.contents[nextContentIndex - 1];
    nextContent.instruction.cancelled = true;
    return Runner.run(step, (innerStep) => {
      return nextContent.freeContent(innerStep, this.connectedCE, nextContent.navigation, this.historyCache, this.router.statefulHistory || this.options.stateful);
    }, () => {
      var _a2, _b, _c, _d;
      if (this.previousViewportState) {
        Object.assign(this, this.previousViewportState);
      }
      nextContent == null ? void 0 : nextContent.delete();
      if (nextContent !== null) {
        this.contents.splice(this.contents.indexOf(nextContent), 1);
      }
      this.transitionAction = "";
      previousContent == null ? void 0 : previousContent.contentStates.delete("checkedUnload");
      previousContent == null ? void 0 : previousContent.contentStates.delete("checkedLoad");
      const navigatingPrefix = this.router.configuration.options.indicators.viewportNavigating;
      (_b = (_a2 = this.connectedCE) == null ? void 0 : _a2.setActivity) == null ? void 0 : _b.call(_a2, navigatingPrefix, false);
      (_d = (_c = this.connectedCE) == null ? void 0 : _c.setActivity) == null ? void 0 : _d.call(_c, coordinator.navigation.navigation, false);
      coordinator.removeEndpoint(this);
      arrayRemove(this.coordinators, (coord) => coord === coordinator);
    }, () => {
      if (step !== noExitStep) {
        return step == null ? void 0 : step.exit();
      }
    });
  }
  /**
   * Whether the viewport wants a specific component. Used when
   * matching routing instructions to viewports.
   *
   * @param component - The component to check
   *
   * TODO: Deal with non-string components
   */
  wantComponent(component) {
    return this.options.usedBy.includes(component);
  }
  /**
   * Whether the viewport accepts a specific component. Used when
   * matching routing instructions to viewports.
   *
   * @param component - The component to check
   *
   * TODO: Deal with non-string components
   */
  acceptComponent(component) {
    if (component === "-" || component === null) {
      return true;
    }
    const usedBy = this.options.usedBy;
    if (usedBy.length === 0) {
      return true;
    }
    if (usedBy.includes(component)) {
      return true;
    }
    if (usedBy.filter((value) => value.includes("*")).length) {
      return true;
    }
    return false;
  }
  /**
   * Free/discard a history cached content containing a specific component.
   *
   * @param step - The previous step in this transition Run
   * @param component - The component to look for
   *
   * TODO: Deal with multiple contents containing the component
   */
  freeContent(step, component) {
    const content = this.historyCache.find((cached) => cached.componentInstance === component);
    if (content !== void 0) {
      return Runner.run(step, (innerStep) => {
        this.forceRemove = true;
        return content.freeContent(innerStep, null, null, this.historyCache, false);
      }, () => {
        this.forceRemove = false;
        arrayRemove(this.historyCache, (cached) => cached === content);
      });
    }
  }
  /**
   * Get any configured routes in the relevant content's component type.
   */
  getRoutes() {
    const routes2 = [];
    let componentType = this.getComponentType();
    if (componentType != null) {
      componentType = componentType.constructor === componentType.constructor.constructor ? componentType : componentType.constructor;
      routes2.push(...Routes.getConfiguration(componentType) ?? []);
    }
    return routes2;
  }
  /**
   * Get the title for the content.
   *
   * @param navigation - The navigation that requests the content change
   */
  getTitle(navigation) {
    if (this.options.noTitle) {
      return "";
    }
    const componentType = this.getComponentType();
    if (componentType === null) {
      return "";
    }
    let title = "";
    const typeTitle = componentType.title;
    if (typeTitle !== void 0) {
      if (typeof typeTitle === "string") {
        title = typeTitle;
      } else {
        const component = this.getComponentInstance();
        title = typeTitle.call(component, component, navigation);
      }
    } else if (this.router.configuration.options.title.useComponentNames) {
      let name = this.getContentInstruction().component.name ?? "";
      const prefix = this.router.configuration.options.title.componentPrefix ?? "";
      if (name.startsWith(prefix)) {
        name = name.slice(prefix.length);
      }
      name = name.replace("-", " ");
      title = name.slice(0, 1).toLocaleUpperCase() + name.slice(1);
    }
    return title;
  }
  /**
   * Get component type of the relevant, current or next, content.
   */
  getComponentType() {
    let componentType = this.getContentInstruction().component.type ?? null;
    if (componentType === null) {
      const controller = CustomElement.for(this.connectedCE.element);
      componentType = controller.container.componentType;
    }
    return componentType ?? null;
  }
  /**
   * Get component instance of the relevant, current or next, content.
   */
  getComponentInstance() {
    return this.getContentInstruction().component.instance ?? null;
  }
  /**
   * Get routing instruction of the relevant, current or next, content.
   */
  getContentInstruction() {
    var _a;
    return ((_a = this.getNextContent()) == null ? void 0 : _a.instruction) ?? this.getContent().instruction ?? null;
  }
  /**
   * Clear the viewport state.
   *
   * TODO: Investigate the need.
   */
  clearState() {
    this.options = ViewportOptions.create();
    const owningScope = this.owningScope;
    const hasScope = this.scope.hasScope;
    this.getContent().delete();
    this.contents.shift();
    if (this.contents.length < 1) {
      throw new Error("no content!");
    }
    this.contents.push(new ViewportContent(this.router, this, owningScope, hasScope));
    this.cache = [];
  }
  /**
   * If necessary, get a promise to await until a custom element connects.
   */
  waitForConnected() {
    if (this.connectedCE === null) {
      return new Promise((resolve2) => {
        this.connectionResolve = resolve2;
      });
    }
  }
};
var InstructionEndpoint = class _InstructionEndpoint {
  constructor() {
    this.name = null;
    this.instance = null;
    this.scope = null;
  }
  get none() {
    return this.name === null && this.instance === null;
  }
  get endpointType() {
    if (this.instance instanceof Viewport) {
      return "Viewport";
    }
    if (this.instance instanceof ViewportScope) {
      return "ViewportScope";
    }
    return null;
  }
  static create(endpointHandle) {
    const endpoint = new _InstructionEndpoint();
    endpoint.set(endpointHandle);
    return endpoint;
  }
  static isName(endpoint) {
    return typeof endpoint === "string";
  }
  static isInstance(endpoint) {
    return endpoint instanceof Endpoint$1;
  }
  static getName(endpoint) {
    if (_InstructionEndpoint.isName(endpoint)) {
      return endpoint;
    } else {
      return endpoint ? endpoint.name : null;
    }
  }
  static getInstance(endpoint) {
    if (_InstructionEndpoint.isName(endpoint)) {
      return null;
    } else {
      return endpoint;
    }
  }
  set(endpoint) {
    if (endpoint === void 0 || endpoint === "") {
      endpoint = null;
    }
    if (typeof endpoint === "string") {
      this.name = endpoint;
      this.instance = null;
    } else {
      this.instance = endpoint;
      if (endpoint !== null) {
        this.name = endpoint.name;
        this.scope = endpoint.owningScope;
      }
    }
  }
  toInstance(router) {
    if (this.instance !== null) {
      return this.instance;
    }
    return router.getEndpoint(this.endpointType, this.name);
  }
  same(other, compareScope) {
    if (this.instance !== null && other.instance !== null) {
      return this.instance === other.instance;
    }
    return this.endpointType !== null && other.endpointType !== null && this.endpointType === other.endpointType && (!compareScope || this.scope === other.scope) && (this.instance !== null ? this.instance.name : this.name) === (other.instance !== null ? other.instance.name : other.name);
  }
};
var RoutingInstructionStringifyOptionsDefaults = {
  excludeEndpoint: false,
  endpointContext: false,
  fullState: false
};
var RoutingInstruction = class _RoutingInstruction {
  constructor(component, endpoint, parameters) {
    this.ownsScope = true;
    this.nextScopeInstructions = null;
    this.scope = null;
    this.scopeModifier = "";
    this.needsEndpointDescribed = false;
    this.route = null;
    this.routeStart = false;
    this.default = false;
    this.topInstruction = false;
    this.unparsed = null;
    this.cancelled = false;
    this.component = InstructionComponent.create(component);
    this.endpoint = InstructionEndpoint.create(endpoint);
    this.parameters = InstructionParameters.create(parameters);
  }
  /**
   * Create a new routing instruction.
   *
   * @param component - The component (appelation) part of the instruction. Can be a promise
   * @param endpoint - The endpoint (handle) part of the instruction
   * @param parameters - The parameters part of the instruction
   * @param ownScope - Whether the routing instruction owns its scope
   * @param nextScopeInstructions - The routing instructions in the next scope ("children")
   */
  static create(component, endpoint, parameters, ownsScope = true, nextScopeInstructions = null) {
    const instruction = new _RoutingInstruction(component, endpoint, parameters);
    instruction.ownsScope = ownsScope;
    instruction.nextScopeInstructions = nextScopeInstructions;
    return instruction;
  }
  /**
   * Create a clear endpoint routing instruction.
   *
   * @param endpoint - The endpoint to create the clear instruction for
   */
  static createClear(context, endpoint) {
    const instruction = _RoutingInstruction.create(_RoutingInstruction.clear(context), endpoint);
    instruction.scope = endpoint.scope;
    return instruction;
  }
  /**
   * Get routing instructions based on load instructions.
   *
   * @param context - The context (used for syntax) within to parse the instructions
   * @param loadInstructions - The load instructions to get the routing
   * instructions from.
   */
  static from(context, loadInstructions) {
    if (!Array.isArray(loadInstructions)) {
      loadInstructions = [loadInstructions];
    }
    const instructions = [];
    for (const instruction of loadInstructions) {
      if (typeof instruction === "string") {
        instructions.push(..._RoutingInstruction.parse(context, instruction));
      } else if (instruction instanceof _RoutingInstruction) {
        instructions.push(instruction);
      } else if (instruction instanceof Promise) {
        instructions.push(_RoutingInstruction.create(instruction));
      } else if (InstructionComponent.isAppelation(instruction)) {
        instructions.push(_RoutingInstruction.create(instruction));
      } else if (InstructionComponent.isDefinition(instruction)) {
        instructions.push(_RoutingInstruction.create(instruction.Type));
      } else if ("component" in instruction || "id" in instruction) {
        const viewportComponent = instruction;
        const newInstruction = _RoutingInstruction.create(viewportComponent.component, viewportComponent.viewport, viewportComponent.parameters);
        newInstruction.route = instruction.id ?? null;
        if (viewportComponent.children !== void 0 && viewportComponent.children !== null) {
          newInstruction.nextScopeInstructions = _RoutingInstruction.from(context, viewportComponent.children);
        }
        instructions.push(newInstruction);
      } else if (typeof instruction === "object" && instruction !== null) {
        const type = CustomElement.define(instruction);
        instructions.push(_RoutingInstruction.create(type));
      } else {
        instructions.push(_RoutingInstruction.create(instruction));
      }
    }
    return instructions;
  }
  /**
   * The routing instruction component that represents "clear".
   */
  static clear(context) {
    return Separators.for(context).clear;
  }
  /**
   * The routing instruction component that represents "add".
   */
  static add(context) {
    return Separators.for(context).add;
  }
  /**
   * Parse an instruction string into a list of routing instructions.
   *
   * @param context - The context (used for syntax) within to parse the instructions
   * @param instructions - The instruction string to parse
   */
  static parse(context, instructions) {
    const seps = Separators.for(context);
    let scopeModifier = "";
    const match = /^[./]+/.exec(instructions);
    if (Array.isArray(match) && match.length > 0) {
      scopeModifier = match[0];
      instructions = instructions.slice(scopeModifier.length);
    }
    const parsedInstructions = InstructionParser.parse(seps, instructions, true, true).instructions;
    for (const instruction of parsedInstructions) {
      instruction.scopeModifier = scopeModifier;
    }
    return parsedInstructions;
  }
  /**
   * Stringify a list of routing instructions, recursively down next scope/child instructions.
   *
   * @param context - The context (used for syntax) within to stringify the instructions
   * @param instructions - The instructions to stringify
   * @param options - The options for stringifying the instructions
   * @param endpointContext - Whether to include endpoint context in the string. [Deprecated] Use the new interface instead: { excludeEndpoint: boolean; endpointContext: boolean; }
   */
  static stringify(context, instructions, options = {}, endpointContext = false) {
    if (typeof options === "boolean") {
      console.warn(`[Deprecated] Boolean passed to RoutingInstruction.stringify. Please use the new interface instead: { excludeEndpoint: boolean; endpointContext: boolean; }`);
      options = { excludeEndpoint: options, endpointContext };
    }
    options = { ...RoutingInstructionStringifyOptionsDefaults, ...options };
    return typeof instructions === "string" ? instructions : instructions.map((instruction) => instruction.stringify(context, options)).filter((instruction) => instruction.length > 0).join(Separators.for(context).sibling);
  }
  /**
   * Resolve a list of routing instructions, returning a promise that should be awaited if needed.
   *
   * @param instructions - The instructions to resolve
   */
  static resolve(instructions) {
    const resolvePromises = instructions.filter((instr) => instr.isUnresolved).map((instr) => instr.resolve()).filter((result) => result instanceof Promise);
    if (resolvePromises.length > 0) {
      return Promise.all(resolvePromises);
    }
  }
  /**
   * Whether the instructions, on any level, contains siblings
   *
   * @param instructions - The instructions to check
   */
  static containsSiblings(context, instructions) {
    if (instructions === null) {
      return false;
    }
    if (instructions.filter((instruction) => !instruction.isClear(context) && !instruction.isClearAll(context)).length > 1) {
      return true;
    }
    return instructions.some((instruction) => _RoutingInstruction.containsSiblings(context, instruction.nextScopeInstructions));
  }
  /**
   * Get all routing instructions, recursively down next scope/child instructions, as
   * a "flat" list.
   *
   * @param instructions - The instructions to flatten
   */
  static flat(instructions) {
    const flat = [];
    for (const instruction of instructions) {
      flat.push(instruction);
      if (instruction.hasNextScopeInstructions) {
        flat.push(..._RoutingInstruction.flat(instruction.nextScopeInstructions));
      }
    }
    return flat;
  }
  /**
   * Clone a list of routing instructions.
   *
   * @param instructions - The instructions to clone
   * @param keepInstances - Whether actual instances should be transfered
   * @param scopeModifier - Whether the scope modifier should be transfered
   */
  static clone(instructions, keepInstances = false, scopeModifier = false) {
    return instructions.map((instruction) => instruction.clone(keepInstances, scopeModifier));
  }
  /**
   * Whether a list of routing instructions contains another list of routing
   * instructions. If deep, all next scope instructions needs to be contained
   * in containing next scope instructions as well.
   *
   * @param context - The context (used for parameter syntax) to compare within
   * @param instructionsToSearch - Instructions that should contain (superset)
   * @param instructionsToFind - Instructions that should be contained (subset)
   * @param deep - Whether next scope instructions also need to be contained (recursively)
   */
  static contains(context, instructionsToSearch, instructionsToFind, deep) {
    return instructionsToFind.every((find) => find.isIn(context, instructionsToSearch, deep));
  }
  /**
   * The endpoint of the routing instruction if it's a viewport OR if
   * it can't be decided (no instance, just a name).
   */
  get viewport() {
    return this.endpoint.instance instanceof Viewport || this.endpoint.endpointType === null ? this.endpoint : null;
  }
  /**
   * The endpoint of the routing instruction if it's a viewport scope OR if
   * it can't be decided (no instance, just a name).
   */
  get viewportScope() {
    return this.endpoint.instance instanceof ViewportScope || this.endpoint.endpointType === null ? this.endpoint : null;
  }
  /**
   * The previous instruction for the specific endpoint. This can only evaluate
   * to a value when the instruction has an assigned endpoint. This is a
   * convenience property in the API.
   */
  get previous() {
    var _a, _b;
    return (_b = (_a = this.endpoint.instance) == null ? void 0 : _a.getContent()) == null ? void 0 : _b.instruction;
  }
  /**
   * Whether the routing instruction is an "add" instruction.
   */
  isAdd(context) {
    return this.component.name === Separators.for(context).add;
  }
  /**
   * Whether the routing instruction is a "clear" instruction.
   */
  isClear(context) {
    return this.component.name === Separators.for(context).clear;
  }
  /**
   * Whether the routing instruction is an "add all" instruction.
   */
  isAddAll(context) {
    var _a;
    return this.isAdd(context) && (((_a = this.endpoint.name) == null ? void 0 : _a.length) ?? 0) === 0;
  }
  /**
   * Whether the routing instruction is an "clear all" instruction.
   */
  isClearAll(context) {
    var _a;
    return this.isClear(context) && (((_a = this.endpoint.name) == null ? void 0 : _a.length) ?? 0) === 0;
  }
  /**
   * Whether the routing instruction has next scope/"children" instructions.
   */
  get hasNextScopeInstructions() {
    var _a;
    return (((_a = this.nextScopeInstructions) == null ? void 0 : _a.length) ?? 0) > 0;
  }
  /**
   * Get the dynasty of the routing instruction. The dynasty is the instruction
   * itself and all its descendants (next scope instructions iteratively).
   */
  get dynasty() {
    const dynasty = [this];
    if (this.hasNextScopeInstructions) {
      dynasty.push(...this.nextScopeInstructions.map((instruction) => instruction.dynasty).flat());
    }
    return dynasty;
  }
  /**
   * Whether the routing instruction is unresolved.
   */
  get isUnresolved() {
    return this.component.isFunction() || this.component.isPromise();
  }
  /**
   * Resolve the routing instruction.
   */
  resolve() {
    return this.component.resolve(this);
  }
  /**
   * Get the instruction parameters with type specification applied.
   */
  typeParameters(context) {
    var _a;
    return this.parameters.toSpecifiedParameters(context, ((_a = this.component.type) == null ? void 0 : _a.parameters) ?? []);
  }
  /**
   * Compare the routing instruction's route with the route of another routing
   * instruction.
   *
   * @param other - The routing instruction to compare to
   */
  sameRoute(other) {
    var _a, _b;
    const thisRoute = (_a = this.route) == null ? void 0 : _a.match;
    const otherRoute = (_b = other.route) == null ? void 0 : _b.match;
    if (thisRoute == null || otherRoute == null) {
      return false;
    }
    if (typeof thisRoute === "string" || typeof otherRoute === "string") {
      return thisRoute === otherRoute;
    }
    return thisRoute.id === otherRoute.id;
  }
  /**
   * Compare the routing instruction's component with the component of another routing
   * instruction. Compares on name unless `compareType` is `true`.
   *
   * @param context - The context (used for parameter syntax) to compare within
   * @param other - The routing instruction to compare to
   * @param compareParameters - Whether parameters should also be compared
   * @param compareType - Whether comparision should be made on type only (and not name)
   */
  sameComponent(context, other, compareParameters = false, compareType = false) {
    if (compareParameters && !this.sameParameters(context, other, compareType)) {
      return false;
    }
    return this.component.same(other.component, compareType);
  }
  /**
   * Compare the routing instruction's endpoint with the endpoint of another routing
   * instruction. Compares on endpoint instance if possible, otherwise name.
   *
   * @param other - The routing instruction to compare to
   * @param compareScope - Whether comparision should be made on scope as well (and not
   * only instance/name)
   */
  sameEndpoint(other, compareScope) {
    return this.endpoint.same(other.endpoint, compareScope);
  }
  /**
   * Compare the routing instruction's parameters with the parameters of another routing
   * instruction. Compares on actual values.
   *
   * @param other - The routing instruction to compare to
   * @param compareType - Whether comparision should be made on type as well
   */
  sameParameters(context, other, compareType = false) {
    if (!this.component.same(other.component, compareType)) {
      return false;
    }
    return this.parameters.same(context, other.parameters, this.component.type);
  }
  /**
   * Stringify the routing instruction, recursively down next scope/child instructions.
   *
   * @param context - The context (used for syntax) within to stringify the instructions
   * @param options - The options for stringifying the instructions
   * @param endpointContext - Whether to include endpoint context in the string.
   * [Deprecated] Use the new interface instead: { excludeEndpoint: boolean; endpointContext: boolean; }
   * @param shallow - Whether to stringify next scope instructions
   */
  stringify(context, options = {}, endpointContextOrShallow = false, shallow = false) {
    var _a, _b;
    if (typeof options === "boolean") {
      console.warn(`[Deprecated] Boolean passed to RoutingInstruction.stringify. Please use the new interface instead: { excludeEndpoint: boolean; endpointContext: boolean; }`);
      options = { excludeEndpoint: options, endpointContext: endpointContextOrShallow };
    } else {
      shallow = endpointContextOrShallow;
    }
    options = { ...RoutingInstructionStringifyOptionsDefaults, ...options };
    const seps = Separators.for(context);
    let excludeCurrentEndpoint = options.excludeEndpoint;
    let excludeCurrentComponent = false;
    if (options.endpointContext) {
      const viewport = ((_a = this.viewport) == null ? void 0 : _a.instance) ?? null;
      if ((viewport == null ? void 0 : viewport.options.noLink) ?? false) {
        return "";
      }
      if (!this.needsEndpointDescribed && (!((viewport == null ? void 0 : viewport.options.forceDescription) ?? false) || ((_b = this.viewportScope) == null ? void 0 : _b.instance) != null)) {
        excludeCurrentEndpoint = true;
      }
      if ((viewport == null ? void 0 : viewport.options.fallback) === this.component.name) {
        excludeCurrentComponent = true;
      }
      if ((viewport == null ? void 0 : viewport.options.default) === this.component.name) {
        excludeCurrentComponent = true;
      }
    }
    const nextInstructions = this.nextScopeInstructions;
    let stringified = this.scopeModifier;
    if (this.route instanceof FoundRoute && !this.routeStart) {
      return !shallow && Array.isArray(nextInstructions) ? _RoutingInstruction.stringify(context, nextInstructions, options) : "";
    }
    const path = this.stringifyShallow(context, excludeCurrentEndpoint, excludeCurrentComponent, options.fullState);
    stringified += path.endsWith(seps.scope) ? path.slice(0, -seps.scope.length) : path;
    if (!shallow && Array.isArray(nextInstructions) && nextInstructions.length > 0) {
      const nextStringified = _RoutingInstruction.stringify(context, nextInstructions, options);
      if (nextStringified.length > 0) {
        stringified += seps.scope;
        stringified += nextInstructions.length === 1 ? nextStringified : `${seps.groupStart}${nextStringified}${seps.groupEnd}`;
      }
    }
    return stringified;
  }
  /**
   * Clone the routing instruction.
   *
   * @param keepInstances - Whether actual instances should be transfered
   * @param scopeModifier - Whether the scope modifier should be transfered
   * @param shallow - Whether it should be a shallow clone only
   */
  clone(keepInstances = false, scopeModifier = false, shallow = false) {
    const clone = _RoutingInstruction.create(this.component.func ?? this.component.promise ?? this.component.type ?? this.component.name, this.endpoint.name, this.parameters.typedParameters ?? void 0);
    if (keepInstances) {
      clone.component.set(this.component.instance ?? this.component.type ?? this.component.name);
      clone.endpoint.set(this.endpoint.instance ?? this.endpoint.name);
    }
    clone.component.name = this.component.name;
    clone.needsEndpointDescribed = this.needsEndpointDescribed;
    clone.route = this.route;
    clone.routeStart = this.routeStart;
    clone.default = this.default;
    if (scopeModifier) {
      clone.scopeModifier = this.scopeModifier;
    }
    clone.scope = keepInstances ? this.scope : null;
    if (this.hasNextScopeInstructions && !shallow) {
      clone.nextScopeInstructions = _RoutingInstruction.clone(this.nextScopeInstructions, keepInstances, scopeModifier);
    }
    return clone;
  }
  /**
   * Whether the routing instruction is in a list of routing instructions. If
   * deep, all next scope instructions needs to be contained in containing
   * next scope instructions as well.
   *
   * @param context - The context (used for parameter syntax) to compare within
   * @param searchIn - Instructions that should contain (superset)
   * @param deep - Whether next scope instructions also need to be contained (recursively)
   */
  isIn(context, searchIn, deep) {
    const matching = searchIn.filter((instruction) => {
      if (this.route != null || instruction.route != null) {
        if (!instruction.sameRoute(this)) {
          return false;
        }
      } else {
        if (!instruction.sameComponent(context, this)) {
          return false;
        }
      }
      const instructionType = instruction.component.type ?? this.component.type;
      const thisType = this.component.type ?? instruction.component.type;
      const instructionParameters = instruction.parameters.toSpecifiedParameters(context, instructionType == null ? void 0 : instructionType.parameters);
      const thisParameters = this.parameters.toSpecifiedParameters(context, thisType == null ? void 0 : thisType.parameters);
      if (!InstructionParameters.contains(instructionParameters, thisParameters)) {
        return false;
      }
      return this.endpoint.none || instruction.sameEndpoint(this, false);
    });
    if (matching.length === 0) {
      return false;
    }
    if (!deep || !this.hasNextScopeInstructions) {
      return true;
    }
    if (matching.some((matched) => _RoutingInstruction.contains(context, matched.nextScopeInstructions ?? [], this.nextScopeInstructions, deep))) {
      return true;
    }
    return false;
  }
  /**
   * Get the title for the routing instruction.
   *
   * @param navigation - The navigation that requests the content change
   */
  getTitle(navigation) {
    var _a;
    if (this.route instanceof FoundRoute) {
      const routeTitle = (_a = this.route.match) == null ? void 0 : _a.title;
      if (routeTitle != null) {
        if (this.routeStart) {
          return typeof routeTitle === "string" ? routeTitle : routeTitle(this, navigation);
        } else {
          return "";
        }
      }
    }
    return this.endpoint.instance.getTitle(navigation);
  }
  toJSON() {
    return {
      component: this.component.name ?? void 0,
      viewport: this.endpoint.name ?? void 0,
      parameters: this.parameters.parametersRecord ?? void 0,
      children: this.hasNextScopeInstructions ? this.nextScopeInstructions : void 0
    };
  }
  /**
   * Stringify the routing instruction shallowly, NOT recursively down next scope/child instructions.
   *
   * @param context - The context (used for syntax) within to stringify the instructions
   * @param excludeEndpoint - Whether to exclude endpoint names in the string
   * @param excludeComponent - Whether to exclude component names in the string
   */
  stringifyShallow(context, excludeEndpoint = false, excludeComponent = false, fullState = false) {
    if (!fullState && this.route != null) {
      const path = this.route instanceof FoundRoute ? this.route.matching : this.route;
      return path.split("/").map((part) => part.startsWith(":") ? this.parameters.get(context, part.slice(1)) : part).join("/");
    }
    const seps = Separators.for(context);
    let instructionString = !excludeComponent || fullState ? this.component.name ?? "" : "";
    const specification = this.component.type ? this.component.type.parameters : null;
    const parameters = InstructionParameters.stringify(context, this.parameters.toSortedParameters(context, specification));
    if (parameters.length > 0) {
      instructionString += !excludeComponent || fullState ? `${seps.parameters}${parameters}${seps.parametersEnd}` : parameters;
    }
    if (this.endpoint.name != null && (!excludeEndpoint || fullState)) {
      instructionString += `${seps.viewport}${this.endpoint.name}`;
    }
    if (!this.ownsScope) {
      instructionString += seps.noScope;
    }
    return instructionString || "";
  }
};
var NavigatorNavigateEvent = class _NavigatorNavigateEvent {
  constructor(eventName, navigation) {
    this.eventName = eventName;
    this.navigation = navigation;
  }
  static create(navigation) {
    return new _NavigatorNavigateEvent(_NavigatorNavigateEvent.eventName, navigation);
  }
};
NavigatorNavigateEvent.eventName = "au:router:navigation-navigate";
var Navigator = class {
  constructor() {
    this.lastNavigationIndex = -1;
    this.navigations = [];
    this.options = {
      /**
       * How many historical navigations that should be kept stateful,
       * default 0 means none.
       */
      statefulHistoryLength: 0
    };
    this.isActive = false;
    this.uninitializedNavigation = Navigation.create({
      instruction: "NAVIGATOR UNINITIALIZED",
      fullStateInstruction: "",
      index: 0,
      completed: true
    });
    this.ea = resolve(IEventAggregator);
    this.container = resolve(IContainer);
  }
  start(options) {
    if (this.isActive) {
      throw createMappedError(
        2010
        /* ErrorNames.navigator_already_started */
      );
    }
    this.isActive = true;
    this.options = { ...options };
  }
  stop() {
    if (!this.isActive) {
      throw createMappedError(
        2011
        /* ErrorNames.navigator_not_started */
      );
    }
    this.isActive = false;
  }
  /**
   * Perform a navigation. The navigation is enriched with historical
   * navigation data and passed to the router.
   *
   * @param navigation - The navigation to perform
   */
  navigate(navigation) {
    if (!(navigation instanceof Navigation)) {
      navigation = Navigation.create(navigation);
    }
    const navigationFlags = new NavigationFlags();
    if (this.lastNavigationIndex === -1) {
      this.loadState();
      if (this.lastNavigationIndex !== -1) {
        navigationFlags.refresh = true;
      } else {
        navigationFlags.first = true;
        navigationFlags.new = true;
        this.lastNavigationIndex = 0;
        this.navigations = [Navigation.create({
          index: 0,
          instruction: "",
          fullStateInstruction: ""
          // path: this.options.viewer.getPath(true),
          // fromBrowser: null,
        })];
      }
    }
    if (navigation.index !== void 0 && !(navigation.replacing ?? false) && !(navigation.refreshing ?? false)) {
      navigation.historyMovement = navigation.index - Math.max(this.lastNavigationIndex, 0);
      navigation.instruction = this.navigations[navigation.index] != null ? this.navigations[navigation.index].fullStateInstruction : navigation.fullStateInstruction;
      navigation.replacing = true;
      if (navigation.historyMovement > 0) {
        navigationFlags.forward = true;
      } else if (navigation.historyMovement < 0) {
        navigationFlags.back = true;
      }
    } else if ((navigation.refreshing ?? false) || navigationFlags.refresh) {
      navigation = this.navigations[this.lastNavigationIndex];
      navigation.replacing = true;
      navigation.refreshing = true;
    } else if (navigation.replacing ?? false) {
      navigationFlags.replace = true;
      navigationFlags.new = true;
      navigation.index = this.lastNavigationIndex;
    } else {
      navigationFlags.new = true;
      navigation.index = this.lastNavigationIndex + 1;
      this.navigations[navigation.index] = navigation;
    }
    navigation.navigation = navigationFlags;
    navigation.previous = this.navigations[Math.max(this.lastNavigationIndex, 0)];
    navigation.process = new OpenPromise(`navigation: ${navigation.path}`);
    this.lastNavigationIndex = navigation.index;
    this.notifySubscribers(navigation);
    return navigation.process.promise;
  }
  /**
   * Finalize a navigation and make it the last navigation.
   *
   * @param navigation - The navigation to finalize
   */
  async finalize(navigation, isLast) {
    if (navigation.untracked ?? false) {
      if ((navigation.fromBrowser ?? false) && this.options.store != null) {
        await this.options.store.popNavigatorState();
      }
    } else if (navigation.replacing ?? false) {
      if ((navigation.historyMovement ?? 0) === 0) {
        this.navigations[navigation.previous.index] = navigation;
      }
      await this.saveState(navigation.index, false);
    } else {
      const index = navigation.index;
      if (isLast) {
        this.navigations = this.navigations.slice(0, index);
      }
      this.navigations[index] = navigation;
      if ((this.options.statefulHistoryLength ?? 0) > 0) {
        const indexPreserve = this.navigations.length - (this.options.statefulHistoryLength ?? 0);
        for (const navig of this.navigations.slice(index)) {
          if (typeof navig.instruction !== "string" || typeof navig.fullStateInstruction !== "string") {
            await this.serializeNavigation(navig, this.navigations.slice(indexPreserve, index));
          }
        }
      }
      await this.saveState(navigation.index, !(navigation.fromBrowser ?? false));
    }
  }
  /**
   * Cancel a navigation and move to last finalized navigation.
   *
   * @param navigation - The navigation to cancel
   */
  async cancel(navigation) {
    var _a;
    if (this.options.store != null) {
      if ((_a = navigation.navigation) == null ? void 0 : _a.new) {
        if (navigation.fromBrowser ?? false) {
          await this.options.store.popNavigatorState();
        }
      } else if ((navigation.historyMovement ?? 0) !== 0) {
        await this.options.store.go(-navigation.historyMovement, true);
      }
    }
  }
  /**
   * Go to an earlier or later navigation in navigation history.
   *
   * @param movement - Amount of steps to move, positive or negative
   */
  async go(movement) {
    let newIndex = this.lastNavigationIndex + movement;
    newIndex = Math.min(newIndex, this.navigations.length - 1);
    await this.options.store.go(movement, true);
    const navigation = this.navigations[newIndex];
    return this.navigate(navigation);
  }
  /**
   * Get the stored navigator state (json okay) as well as the last
   * navigation and all historical navigations from the store.
   */
  getState() {
    const state = this.options.store != null ? { ...this.options.store.state } : {};
    const navigations = (state == null ? void 0 : state.navigations) ?? [];
    const navigationIndex = (state == null ? void 0 : state.navigationIndex) ?? -1;
    return { navigations, navigationIndex };
  }
  /**
   * Load the state stored in the store into the navigator's last and
   * historical states.
   */
  loadState() {
    const { navigations, navigationIndex } = this.getState();
    this.navigations = navigations.map((navigation) => Navigation.create(navigation));
    this.lastNavigationIndex = navigationIndex;
  }
  /**
   * Save the last state to history and save the history to the store,
   * converting to json when necessary.
   *
   * @param index - The index of the last navigation
   * @param push - Whether the last state should be pushed as a new entry
   * in the history or replace the last position.
   */
  async saveState(index, push) {
    var _a, _b;
    for (let i = 0; i < this.navigations.length; i++) {
      this.navigations[i] = Navigation.create(this.navigations[i].toStoredNavigation());
    }
    if ((this.options.statefulHistoryLength ?? 0) > 0) {
      const index2 = this.navigations.length - (this.options.statefulHistoryLength ?? 0);
      for (let i = 0; i < index2; i++) {
        const navigation = this.navigations[i];
        if (typeof navigation.instruction !== "string" || typeof navigation.fullStateInstruction !== "string") {
          await this.serializeNavigation(navigation, this.navigations.slice(index2));
        }
      }
    }
    if (this.options.store == null) {
      return Promise.resolve();
    }
    const state = {
      navigations: (this.navigations ?? []).map((navigation) => this.toStoreableNavigation(navigation)),
      navigationIndex: index
    };
    if (push) {
      return (_b = (_a = this.options) == null ? void 0 : _a.store) == null ? void 0 : _b.pushNavigatorState(state);
    } else {
      return this.options.store.replaceNavigatorState(state);
    }
  }
  /**
   * Refresh (reload) the last navigation.
   */
  async refresh() {
    if (this.lastNavigationIndex === -1) {
      return Promise.reject();
    }
    const navigation = this.navigations[this.lastNavigationIndex];
    navigation.replacing = true;
    navigation.refreshing = true;
    return this.navigate(navigation);
  }
  /**
   * Notifies subscribers that a navigation has been dequeued for processing.
   *
   * @param navigation - The Navigation to process
   */
  notifySubscribers(navigation) {
    this.ea.publish(NavigatorNavigateEvent.eventName, NavigatorNavigateEvent.create(navigation));
  }
  /**
   * Make a Navigation storeable/json safe.
   *
   * @param navigation - The navigation to make storeable
   */
  toStoreableNavigation(navigation) {
    const storeable = navigation instanceof Navigation ? navigation.toStoredNavigation() : navigation;
    storeable.instruction = RoutingInstruction.stringify(this.container, storeable.instruction);
    storeable.fullStateInstruction = RoutingInstruction.stringify(this.container, storeable.fullStateInstruction, { endpointContext: true, fullState: true });
    if (typeof storeable.scope !== "string") {
      storeable.scope = null;
    }
    return storeable;
  }
  /**
   * Serialize a navigation to string(s), freeing/disposing all components in it.
   * (Only components that doesn't exist in a preserved navigation will be disposed.)
   *
   * @param navigation - The navigation to serialize
   * @param preservedNavigations - Navigations that should be preserved, meaning
   * that any component used in them should not be disposed
   */
  async serializeNavigation(navigation, preservedNavigations) {
    let excludeComponents = [];
    for (const preservedNavigation of preservedNavigations) {
      if (typeof preservedNavigation.instruction !== "string") {
        excludeComponents.push(...RoutingInstruction.flat(preservedNavigation.instruction).filter((instruction) => instruction.endpoint.instance !== null).map((instruction) => instruction.component.instance));
      }
      if (typeof preservedNavigation.fullStateInstruction !== "string") {
        excludeComponents.push(...RoutingInstruction.flat(preservedNavigation.fullStateInstruction).filter((instruction) => instruction.endpoint.instance !== null).map((instruction) => instruction.component.instance));
      }
    }
    excludeComponents = arrayUnique(excludeComponents);
    let instructions = [];
    if (typeof navigation.fullStateInstruction !== "string") {
      instructions.push(...navigation.fullStateInstruction);
      navigation.fullStateInstruction = RoutingInstruction.stringify(this.container, navigation.fullStateInstruction, { endpointContext: true, fullState: true });
    }
    if (typeof navigation.instruction !== "string") {
      instructions.push(...navigation.instruction);
      navigation.instruction = RoutingInstruction.stringify(this.container, navigation.instruction);
    }
    instructions = instructions.filter((instruction, i, arr) => instruction.component.instance != null && arr.indexOf(instruction) === i);
    const alreadyDone = [];
    for (const instruction of instructions) {
      await this.freeInstructionComponents(instruction, excludeComponents, alreadyDone);
    }
  }
  /**
   * Free (and dispose) components in a routing instruction unless the components
   * should be excluded (due to also being in non-freed instructions) or have already
   * been freed/disposed.
   *
   * @param instruction - Routing instruction to free components in
   * @param excludeComponents - Components to exclude
   * @param alreadyDone - Components that's already been freed/disposed
   */
  freeInstructionComponents(instruction, excludeComponents, alreadyDone) {
    var _a;
    const component = instruction.component.instance;
    const viewport = ((_a = instruction.viewport) == null ? void 0 : _a.instance) ?? null;
    if (component === null || viewport === null || alreadyDone.some((done) => done === component)) {
      return;
    }
    if (!excludeComponents.some((exclude) => exclude === component)) {
      return Runner.run("freeInstructionComponents", (step) => viewport.freeContent(step, component), () => {
        alreadyDone.push(component);
      });
    }
    if (instruction.hasNextScopeInstructions) {
      for (const nextInstruction of instruction.nextScopeInstructions) {
        return this.freeInstructionComponents(nextInstruction, excludeComponents, alreadyDone);
      }
    }
  }
};
var RouteRecognizer2 = RouteRecognizer;
var ConfigurableRoute2 = ConfigurableRoute;
var RecognizedRoute2 = RecognizedRoute;
var Endpoint3 = Endpoint;
var Collection = class extends Array {
  constructor() {
    super(...arguments);
    this.currentIndex = -1;
  }
  next() {
    if (this.length > this.currentIndex + 1) {
      return this[++this.currentIndex];
    } else {
      this.currentIndex = -1;
      return null;
    }
  }
  removeCurrent() {
    this.splice(this.currentIndex--, 1);
  }
  remove(instruction) {
    arrayRemove(this, (value) => value === instruction);
  }
};
var EndpointMatcher = class _EndpointMatcher {
  // TODO: In addition to check whether the viewport is configured for components, check if
  // the components are configured for viewports.
  // TODO: When matching/checking on component and viewport, match on ComponentAppelation
  // and ViewportHandle.
  /**
   * Finds endpoints, viewports and viewport scopes, that matches routing instructions' criteria.
   * See comment at the top of the file for more details.
   *
   * @param instructions - The routing instructions to find matches for
   * @param routingScope - The routing scope where to find the matching endpoints
   * @param alreadyMatched - Already matched routing instructions whose endpoints are no longer available
   * @param disregardViewports - Ignore already existing matchin endpoints on the routing instructions
   */
  // Note: This can't change state other than the instructions!
  static matchEndpoints(routingScope, instructions, alreadyMatched, disregardViewports = false) {
    const matchedInstructions = [];
    const ownedScopes = routingScope.getOwnedRoutingScopes(Infinity);
    const endpoints = ownedScopes.map((scope) => scope.endpoint);
    const availableEndpoints = endpoints.filter((endpoint) => endpoint !== null && !alreadyMatched.some((found) => endpoint === found.endpoint.instance && !found.cancelled && !found.isClear(routingScope.router)));
    const routingInstructions = new Collection(...instructions.slice());
    let instruction = null;
    _EndpointMatcher.matchKnownEndpoints(routingScope.router, "ViewportScope", routingInstructions, availableEndpoints, matchedInstructions, false);
    if (!disregardViewports) {
      _EndpointMatcher.matchKnownEndpoints(routingScope.router, "Viewport", routingInstructions, availableEndpoints, matchedInstructions, false);
    }
    _EndpointMatcher.matchViewportScopeSegment(routingScope.router, routingScope, routingInstructions, availableEndpoints, matchedInstructions);
    while ((instruction = routingInstructions.next()) !== null) {
      instruction.needsEndpointDescribed = true;
    }
    _EndpointMatcher.matchViewportConfiguration(routingInstructions, availableEndpoints, matchedInstructions);
    if (!disregardViewports) {
      _EndpointMatcher.matchSpecifiedViewport(routingInstructions, availableEndpoints, matchedInstructions, false);
    }
    _EndpointMatcher.matchLastViewport(routingInstructions, availableEndpoints, matchedInstructions);
    if (disregardViewports) {
      _EndpointMatcher.matchSpecifiedViewport(routingInstructions, availableEndpoints, matchedInstructions, false);
    }
    return {
      matchedInstructions,
      remainingInstructions: [...routingInstructions]
    };
  }
  static matchKnownEndpoints(router, type, routingInstructions, availableEndpoints, matchedInstructions, doesntNeedViewportDescribed = false) {
    let instruction;
    while ((instruction = routingInstructions.next()) !== null) {
      if (
        // The endpoint is already known and it's not an add instruction...
        instruction.endpoint.instance !== null && !instruction.isAdd(router) && // ...(and of the type we're currently checking)...
        instruction.endpoint.endpointType === type
      ) {
        _EndpointMatcher.matchEndpoint(instruction, instruction.endpoint.instance, doesntNeedViewportDescribed);
        matchedInstructions.push(instruction);
        arrayRemove(availableEndpoints, (available) => available === instruction.endpoint.instance);
        routingInstructions.removeCurrent();
      }
    }
  }
  static matchViewportScopeSegment(router, routingScope, routingInstructions, availableEndpoints, matchedInstructions) {
    let instruction;
    while ((instruction = routingInstructions.next()) !== null) {
      for (let endpoint of availableEndpoints) {
        if (!(endpoint instanceof ViewportScope)) {
          continue;
        }
        if (endpoint.acceptSegment(instruction.component.name)) {
          if (Array.isArray(endpoint.source)) {
            let available = availableEndpoints.find((available2) => available2 instanceof ViewportScope && available2.name === endpoint.name);
            if (available === void 0 || instruction.isAdd(router)) {
              const item = endpoint.addSourceItem();
              available = routingScope.getOwnedScopes().filter((scope) => scope.isViewportScope).map((scope) => scope.endpoint).find((viewportScope) => viewportScope.sourceItem === item);
            }
            endpoint = available;
          }
          _EndpointMatcher.matchEndpoint(instruction, endpoint, false);
          matchedInstructions.push(instruction);
          arrayRemove(availableEndpoints, (available) => available === instruction.endpoint.instance);
          routingInstructions.removeCurrent();
          break;
        }
      }
    }
  }
  static matchViewportConfiguration(routingInstructions, availableEndpoints, matchedInstructions) {
    let instruction;
    while ((instruction = routingInstructions.next()) !== null) {
      for (const endpoint of availableEndpoints) {
        if (!(endpoint instanceof Viewport)) {
          continue;
        }
        if (endpoint == null ? void 0 : endpoint.wantComponent(instruction.component.name)) {
          _EndpointMatcher.matchEndpoint(instruction, endpoint, true);
          matchedInstructions.push(instruction);
          arrayRemove(availableEndpoints, (available) => available === instruction.endpoint.instance);
          routingInstructions.removeCurrent();
          break;
        }
      }
    }
  }
  static matchSpecifiedViewport(routingInstructions, availableEndpoints, matchedInstructions, disregardViewports) {
    let instruction;
    while ((instruction = routingInstructions.next()) !== null) {
      let viewport = instruction.endpoint.instance;
      if (viewport == null) {
        const name = instruction.endpoint.name;
        if (((name == null ? void 0 : name.length) ?? 0) === 0) {
          continue;
        }
        for (const endpoint of availableEndpoints) {
          if (!(endpoint instanceof Viewport)) {
            continue;
          }
          if (name === endpoint.name) {
            viewport = endpoint;
            break;
          }
        }
      }
      if (viewport == null ? void 0 : viewport.acceptComponent(instruction.component.name)) {
        _EndpointMatcher.matchEndpoint(instruction, viewport, disregardViewports);
        matchedInstructions.push(instruction);
        arrayRemove(availableEndpoints, (available) => available === instruction.endpoint.instance);
        routingInstructions.removeCurrent();
      }
    }
  }
  static matchLastViewport(routingInstructions, availableEndpoints, matchedInstructions) {
    let instruction;
    while ((instruction = routingInstructions.next()) !== null) {
      const availableViewports = [];
      for (const endpoint of availableEndpoints) {
        if (!(endpoint instanceof Viewport)) {
          continue;
        }
        if (endpoint.acceptComponent(instruction.component.name)) {
          availableViewports.push(endpoint);
        }
      }
      if (availableViewports.length === 1) {
        const viewport = availableViewports[0];
        _EndpointMatcher.matchEndpoint(instruction, viewport, true);
        matchedInstructions.push(instruction);
        arrayRemove(availableEndpoints, (available) => available === instruction.endpoint.instance);
        routingInstructions.removeCurrent();
      }
    }
  }
  static matchEndpoint(instruction, endpoint, doesntNeedViewportDescribed) {
    instruction.endpoint.set(endpoint);
    if (doesntNeedViewportDescribed) {
      instruction.needsEndpointDescribed = false;
    }
    if (instruction.hasNextScopeInstructions) {
      instruction.nextScopeInstructions.forEach((next) => {
        if (next.scope === null) {
          next.scope = endpoint instanceof Viewport ? endpoint.scope : endpoint.scope.scope;
        }
      });
    }
  }
};
var RoutingScope = class _RoutingScope {
  constructor(router, hasScope, owningScope, endpointContent) {
    this.id = ++_RoutingScope.lastId;
    this.parent = null;
    this.children = [];
    this.router = router;
    this.hasScope = hasScope;
    this.owningScope = owningScope ?? this;
    this.endpointContent = endpointContent;
  }
  static for(origin, instruction) {
    if (origin == null) {
      return { scope: null, instruction };
    }
    if (origin instanceof _RoutingScope || origin instanceof Viewport || origin instanceof ViewportScope) {
      return { scope: origin.scope, instruction };
    }
    let container;
    if ("res" in origin) {
      container = origin;
    } else {
      if ("container" in origin) {
        container = origin.container;
      } else if ("$controller" in origin) {
        container = origin.$controller.container;
      } else {
        const controller = CustomElement.for(origin, { searchParents: true });
        container = controller == null ? void 0 : controller.container;
      }
    }
    if (container == null) {
      {
        console.warn("RoutingScope failed to find a container for provided origin", origin);
      }
      return { scope: null, instruction };
    }
    const closestEndpoint = container.has(Router.closestEndpointKey, true) ? container.get(Router.closestEndpointKey) : null;
    let scope = (closestEndpoint == null ? void 0 : closestEndpoint.scope) ?? null;
    if (scope === null || instruction === void 0) {
      const safeInstruction = instruction ?? "";
      return { scope, instruction: safeInstruction.startsWith("/") ? safeInstruction.slice(1) : instruction };
    }
    if (instruction.startsWith("/")) {
      return { scope: null, instruction: instruction.slice(1) };
    }
    while (instruction.startsWith(".")) {
      if (instruction.startsWith("./")) {
        instruction = instruction.slice(2);
      } else if (instruction.startsWith("../")) {
        scope = scope.parent ?? scope;
        instruction = instruction.slice(3);
      } else {
        break;
      }
    }
    return { scope, instruction };
  }
  /**
   * The routing scope children to this scope are added to. If this routing
   * scope has scope, this scope property equals this scope itself. If it
   * doesn't have scope this property equals the owning scope. Using this
   * ensures that routing scopes that don't have a their own scope aren't
   * part of the owner/owning hierarchy.
   */
  get scope() {
    return this.hasScope ? this : this.owningScope.scope;
  }
  get endpoint() {
    return this.endpointContent.endpoint;
  }
  get isViewport() {
    return this.endpoint instanceof Viewport;
  }
  get isViewportScope() {
    return this.endpoint instanceof ViewportScope;
  }
  get type() {
    return this.isViewport ? "Viewport" : "ViewportScope";
  }
  get enabled() {
    return this.endpointContent.isActive;
  }
  get passThroughScope() {
    return this.isViewportScope && this.endpoint.passThroughScope;
  }
  get pathname() {
    return `${this.owningScope !== this ? this.owningScope.pathname : ""}/${this.endpoint.name}`;
  }
  get path() {
    var _a, _b;
    const parentPath = ((_a = this.parent) == null ? void 0 : _a.path) ?? "";
    const path = ((_b = this.routingInstruction) == null ? void 0 : _b.stringify(this.router, { endpointContext: true }, true)) ?? "";
    const sep = this.routingInstruction ? Separators.for(this.router).scope : "";
    return `${parentPath}${path}${sep}`;
  }
  toString(recurse = false) {
    return `${this.owningScope !== this ? this.owningScope.toString() : ""}/${!this.enabled ? "(" : ""}${this.endpoint.toString()}#${this.id}${!this.enabled ? ")" : ""}${recurse ? `
` + this.children.map((child) => child.toString(true)).join("") : ""}`;
  }
  toStringOwning(recurse = false) {
    return `${this.owningScope !== this ? this.owningScope.toString() : ""}/${!this.enabled ? "(" : ""}${this.endpoint.toString()}#${this.id}${!this.enabled ? ")" : ""}${recurse ? `
` + this.ownedScopes.map((child) => child.toStringOwning(true)).join("") : ""}`;
  }
  get enabledChildren() {
    return this.children.filter((scope) => scope.enabled);
  }
  get hoistedChildren() {
    const scopes = this.enabledChildren;
    while (scopes.some((scope) => scope.passThroughScope)) {
      for (const scope of scopes.slice()) {
        if (scope.passThroughScope) {
          const index = scopes.indexOf(scope);
          scopes.splice(index, 1, ...scope.enabledChildren);
        }
      }
    }
    return scopes;
  }
  get ownedScopes() {
    return this.getOwnedScopes();
  }
  get routingInstruction() {
    if (this.endpoint.isViewportScope) {
      return this.endpoint.instruction;
    }
    if (this.isViewport) {
      return this.endpoint.activeContent.instruction;
    }
    return null;
  }
  getOwnedScopes(includeDisabled = false) {
    const scopes = this.allScopes(includeDisabled).filter((scope) => scope.owningScope === this);
    for (const scope of scopes.slice()) {
      if (scope.passThroughScope) {
        const index = scopes.indexOf(scope);
        scopes.splice(index, 1, ...scope.getOwnedScopes());
      }
    }
    return scopes;
  }
  findInstructions(instructions, useDirectRouting, useConfiguredRoutes) {
    const router = this.router;
    let route2 = new FoundRoute();
    if (useConfiguredRoutes && !RoutingInstruction.containsSiblings(router, instructions)) {
      let clearInstructions = instructions.filter((instruction) => instruction.isClear(router) || instruction.isClearAll(router));
      const nonClearInstructions = instructions.filter((instruction) => !instruction.isClear(router) && !instruction.isClearAll(router));
      if (nonClearInstructions.length > 0) {
        for (const instruction of nonClearInstructions) {
          const idOrPath = typeof instruction.route === "string" ? instruction.route : instruction.unparsed ?? RoutingInstruction.stringify(router, [instruction]);
          const foundRoute = this.findMatchingRoute(idOrPath, instruction.parameters.parametersRecord ?? {});
          if (foundRoute.foundConfiguration) {
            route2 = foundRoute;
            route2.instructions = [...clearInstructions, ...route2.instructions];
            clearInstructions = [];
          } else if (useDirectRouting) {
            route2.instructions = [...clearInstructions, ...route2.instructions, instruction];
            clearInstructions = [];
            route2.remaining = RoutingInstruction.stringify(router, instruction.nextScopeInstructions ?? []);
          } else {
            throw new Error(`No route found for: ${RoutingInstruction.stringify(router, instructions)}!`);
          }
        }
      } else {
        route2.instructions = [...clearInstructions];
      }
    } else if (useDirectRouting) {
      route2.instructions.push(...instructions);
    } else {
      throw new Error(`No way to process sibling viewport routes with direct routing disabled: ${RoutingInstruction.stringify(router, instructions)}!`);
    }
    route2.instructions = route2.instructions.filter((instr) => instr.component.name !== "");
    for (const instruction of route2.instructions) {
      if (instruction.scope === null) {
        instruction.scope = this;
      }
    }
    return route2;
  }
  // Note: This can't change state other than the instructions!
  /**
   * Match the instructions to available endpoints within, and with the help of, their scope.
   *
   * @param instructions - The instructions to matched
   * @param alreadyFound - The already found matches
   * @param disregardViewports - Whether viewports should be ignored when matching
   */
  matchEndpoints(instructions, alreadyFound, disregardViewports = false) {
    const allMatchedInstructions = [];
    const scopeInstructions = instructions.filter((instruction) => (instruction.scope ?? this) === this);
    const allRemainingInstructions = instructions.filter((instruction) => (instruction.scope ?? this) !== this);
    const { matchedInstructions, remainingInstructions } = EndpointMatcher.matchEndpoints(this, scopeInstructions, alreadyFound, disregardViewports);
    allMatchedInstructions.push(...matchedInstructions);
    allRemainingInstructions.push(...remainingInstructions);
    return { matchedInstructions: allMatchedInstructions, remainingInstructions: allRemainingInstructions };
  }
  addEndpoint(type, name, connectedCE, options = {}) {
    var _a, _b;
    let endpoint = ((_a = this.getOwnedScopes().find((scope) => scope.type === type && scope.endpoint.name === name)) == null ? void 0 : _a.endpoint) ?? null;
    if (connectedCE != null && (endpoint == null ? void 0 : endpoint.connectedCE) != null && endpoint.connectedCE !== connectedCE) {
      endpoint = ((_b = this.getOwnedScopes(true).find((scope) => scope.type === type && scope.endpoint.name === name && scope.endpoint.connectedCE === connectedCE)) == null ? void 0 : _b.endpoint) ?? null;
    }
    if (endpoint == null) {
      endpoint = type === "Viewport" ? new Viewport(this.router, name, connectedCE, this.scope, !!options.scope, options) : new ViewportScope(this.router, name, connectedCE, this.scope, true, null, options);
      this.addChild(endpoint.connectedScope);
    }
    if (connectedCE != null) {
      endpoint.setConnectedCE(connectedCE, options);
    }
    return endpoint;
  }
  removeEndpoint(step, endpoint, connectedCE) {
    if ((connectedCE ?? null) !== null || endpoint.removeEndpoint(step, connectedCE)) {
      this.removeChild(endpoint.connectedScope);
      return true;
    }
    return false;
  }
  addChild(scope) {
    if (!this.children.some((vp) => vp === scope)) {
      if (scope.parent !== null) {
        scope.parent.removeChild(scope);
      }
      this.children.push(scope);
      scope.parent = this;
    }
  }
  removeChild(scope) {
    const index = this.children.indexOf(scope);
    if (index >= 0) {
      this.children.splice(index, 1);
      scope.parent = null;
    }
  }
  allScopes(includeDisabled = false) {
    const scopes = includeDisabled ? this.children.slice() : this.enabledChildren;
    for (const scope of scopes.slice()) {
      scopes.push(...scope.allScopes(includeDisabled));
    }
    return scopes;
  }
  reparentRoutingInstructions() {
    const scopes = this.hoistedChildren.filter((scope) => scope.routingInstruction !== null && scope.routingInstruction.component.name);
    if (!scopes.length) {
      return null;
    }
    for (const scope of scopes) {
      const childInstructions = scope.reparentRoutingInstructions();
      scope.routingInstruction.nextScopeInstructions = childInstructions !== null && childInstructions.length > 0 ? childInstructions : null;
    }
    return scopes.map((scope) => scope.routingInstruction);
  }
  getChildren(timestamp) {
    const contents = this.children.map((scope) => scope.endpoint.getTimeContent(timestamp)).filter((content) => content !== null);
    return contents.map((content) => content.connectedScope);
  }
  getAllRoutingScopes(timestamp) {
    const scopes = this.getChildren(timestamp);
    for (const scope of scopes.slice()) {
      scopes.push(...scope.getAllRoutingScopes(timestamp));
    }
    return scopes;
  }
  getOwnedRoutingScopes(timestamp) {
    const scopes = this.getAllRoutingScopes(timestamp).filter((scope) => scope.owningScope === this);
    for (const scope of scopes.slice()) {
      if (scope.passThroughScope) {
        const passThrough = scopes.indexOf(scope);
        scopes.splice(passThrough, 1, ...scope.getOwnedRoutingScopes(timestamp));
      }
    }
    return arrayUnique(scopes);
  }
  getRoutingInstructions(timestamp) {
    const contents = arrayUnique(this.getOwnedRoutingScopes(timestamp).map((scope) => scope.endpoint)).map((endpoint) => endpoint.getTimeContent(timestamp)).filter((content) => content !== null);
    const instructions = [];
    for (const content of contents) {
      const instruction = content.instruction.clone(true, false, false);
      if ((instruction.component.name ?? "") !== "") {
        instruction.nextScopeInstructions = content.connectedScope.getRoutingInstructions(timestamp);
        instructions.push(instruction);
      }
    }
    return instructions;
  }
  canUnload(coordinator, step) {
    return Runner.run(step, (stepParallel) => {
      return Runner.runParallel(stepParallel, ...this.children.map((child) => child.endpoint !== null ? (childStep) => child.endpoint.canUnload(coordinator, childStep) : (childStep) => child.canUnload(coordinator, childStep)));
    }, (step2) => step2.previousValue.every((result) => result ?? true));
  }
  unload(coordinator, step) {
    return Runner.runParallel(step, ...this.children.map((child) => child.endpoint !== null ? (childStep) => child.endpoint.unload(coordinator, childStep) : (childStep) => child.unload(coordinator, childStep)));
  }
  matchScope(instructions, deep = false) {
    const matching = [];
    for (const instruction of instructions) {
      if (instruction.scope === this) {
        matching.push(instruction);
      } else if (deep && instruction.hasNextScopeInstructions) {
        matching.push(...this.matchScope(instruction.nextScopeInstructions, deep));
      }
    }
    return matching;
  }
  findMatchingRoute(path, parameters) {
    let found = new FoundRoute();
    if (this.isViewportScope && !this.passThroughScope) {
      found = this.findMatchingRouteInRoutes(path, this.endpoint.getRoutes(), parameters);
    } else if (this.isViewport) {
      found = this.findMatchingRouteInRoutes(path, this.endpoint.getRoutes(), parameters);
    } else {
      for (const child of this.enabledChildren) {
        found = child.findMatchingRoute(path, parameters);
        if (found.foundConfiguration) {
          break;
        }
      }
    }
    if (found.foundConfiguration) {
      return found;
    }
    if (this.parent != null) {
      return this.parent.findMatchingRoute(path, parameters);
    }
    return found;
  }
  findMatchingRouteInRoutes(path, routes2, parameters) {
    var _a, _b;
    const found = new FoundRoute();
    if (routes2.length === 0) {
      return found;
    }
    routes2 = routes2.map((route2) => this.ensureProperRoute(route2));
    const cRoutes = [];
    for (const route2 of routes2) {
      const paths = Array.isArray(route2.path) ? route2.path : [route2.path];
      for (const path2 of paths) {
        cRoutes.push({
          ...route2,
          path: path2,
          handler: route2
        });
        if (path2 !== "") {
          cRoutes.push({
            ...route2,
            path: `${path2}/*remainingPath`,
            handler: route2
          });
        }
      }
    }
    if (path.startsWith("/") || path.startsWith("+")) {
      path = path.slice(1);
    }
    const idRoute = routes2.find((route2) => route2.id === path);
    let result = { params: {}, endpoint: {} };
    if (idRoute != null) {
      result.endpoint = { route: { handler: idRoute } };
      path = Array.isArray(idRoute.path) ? idRoute.path[0] : idRoute.path;
      const segments = path.split("/").map((segment) => {
        if (segment.startsWith(":")) {
          const name = segment.slice(1).replace(/\?$/, "");
          const param = parameters[name];
          result.params[name] = param;
          return param;
        } else {
          return segment;
        }
      });
      path = segments.join("/");
    } else {
      const recognizer = new RouteRecognizer2();
      recognizer.add(cRoutes);
      result = recognizer.recognize(path);
    }
    if (result != null) {
      found.match = result.endpoint.route.handler;
      found.matching = path;
      const $params = { ...result.params };
      if ($params.remainingPath != null) {
        found.remaining = $params.remainingPath;
        Reflect.deleteProperty($params, "remainingPath");
        found.matching = found.matching.slice(0, found.matching.indexOf(found.remaining));
      }
      found.params = $params;
      if (((_a = found.match) == null ? void 0 : _a.redirectTo) != null) {
        let redirectedTo = (_b = found.match) == null ? void 0 : _b.redirectTo;
        if ((found.remaining ?? "").length > 0) {
          redirectedTo += `/${found.remaining}`;
        }
        return this.findMatchingRouteInRoutes(redirectedTo, routes2, parameters);
      }
    }
    if (found.foundConfiguration) {
      found.instructions = RoutingInstruction.clone(found.match.instructions, false, true);
      const instructions = found.instructions.slice();
      while (instructions.length > 0) {
        const instruction = instructions.shift();
        instruction.parameters.addParameters(found.params);
        instruction.route = found;
        if (instruction.hasNextScopeInstructions) {
          instructions.unshift(...instruction.nextScopeInstructions);
        }
      }
      if (found.instructions.length > 0) {
        found.instructions[0].routeStart = true;
      }
      const remaining = RoutingInstruction.parse(this.router, found.remaining);
      if (remaining.length > 0) {
        let lastInstruction = found.instructions[0];
        while (lastInstruction.hasNextScopeInstructions) {
          lastInstruction = lastInstruction.nextScopeInstructions[0];
        }
        lastInstruction.nextScopeInstructions = remaining;
      }
    }
    return found;
  }
  ensureProperRoute(route2) {
    if (route2.id === void 0) {
      route2.id = Array.isArray(route2.path) ? route2.path.join(",") : route2.path;
    }
    if (route2.instructions === void 0) {
      route2.instructions = [{
        component: route2.component,
        viewport: route2.viewport,
        parameters: route2.parameters,
        children: route2.children
      }];
    }
    if (route2.redirectTo === null) {
      route2.instructions = RoutingInstruction.from(this.router, route2.instructions);
    }
    return route2;
  }
};
RoutingScope.lastId = 0;
var QueueTask = class {
  constructor(taskQueue, item, cost = 0) {
    this.taskQueue = taskQueue;
    this.item = item;
    this.cost = cost;
    this.done = false;
    this.promise = new Promise((resolve2, reject) => {
      this.resolve = () => {
        this.taskQueue.resolve(this, resolve2);
      };
      this.reject = (reason) => {
        this.taskQueue.reject(this, reject, reason);
      };
    });
  }
  async execute() {
    if ("execute" in this.item) {
      await this.item.execute(this);
    } else {
      await this.item(this);
    }
  }
  wait() {
    return this.promise;
  }
};
var TaskQueue = class {
  get isActive() {
    return this.task !== null;
  }
  constructor(callback) {
    this.callback = callback;
    this.pending = [];
    this.processing = null;
    this.allowedExecutionCostWithinTick = null;
    this.currentExecutionCostInCurrentTick = 0;
    this.platform = null;
    this.task = null;
    this.dequeue = (delta) => {
      if (this.processing !== null) {
        return;
      }
      if (delta !== void 0) {
        this.currentExecutionCostInCurrentTick = 0;
      }
      if (this.pending.length === 0) {
        return;
      }
      if (this.allowedExecutionCostWithinTick !== null && delta === void 0 && this.currentExecutionCostInCurrentTick + (this.pending[0].cost || 0) > this.allowedExecutionCostWithinTick) {
        return;
      }
      this.processing = this.pending.shift() || null;
      if (this.processing) {
        this.currentExecutionCostInCurrentTick += this.processing.cost ?? 0;
        if (this.callback !== void 0) {
          this.callback(this.processing);
        } else {
          this.processing.execute().catch((error) => {
            throw error;
          });
        }
      }
    };
  }
  get length() {
    return this.pending.length;
  }
  start(options) {
    this.platform = options.platform;
    this.allowedExecutionCostWithinTick = options.allowedExecutionCostWithinTick;
    this.task = this.platform.domQueue.queueTask(this.dequeue, { persistent: true });
  }
  stop() {
    this.task.cancel();
    this.task = null;
    this.allowedExecutionCostWithinTick = null;
    this.clear();
  }
  enqueue(itemOrItems, costOrCosts) {
    const list = Array.isArray(itemOrItems);
    const items = list ? itemOrItems : [itemOrItems];
    const costs = items.map((value, index) => !Array.isArray(costOrCosts) ? costOrCosts : costOrCosts[index]).map((value) => value !== void 0 ? value : 1);
    const tasks = [];
    for (const item of items) {
      tasks.push(item instanceof QueueTask ? item : this.createQueueTask(item, costs.shift()));
    }
    this.pending.push(...tasks);
    this.dequeue();
    return list ? tasks : tasks[0];
  }
  createQueueTask(item, cost) {
    return new QueueTask(this, item, cost);
  }
  clear() {
    this.pending.length = 0;
  }
  /**
   * @internal
   */
  resolve(_task, resolve2) {
    resolve2();
    this.processing = null;
    this.dequeue();
  }
  /**
   * @internal
   */
  reject(_task, reject, reason) {
    reject(reason);
    this.processing = null;
    this.dequeue();
  }
};
var BrowserViewerStore = class {
  constructor() {
    this.allowedExecutionCostWithinTick = 2;
    this.pendingCalls = new TaskQueue();
    this.isActive = false;
    this.options = {
      useUrlFragmentHash: true
    };
    this.forwardedState = { eventTask: null, suppressPopstate: false };
    this.platform = resolve(IPlatform);
    this.window = resolve(IWindow);
    this.history = resolve(IHistory);
    this.location = resolve(ILocation);
    this.ea = resolve(IEventAggregator);
  }
  start(options) {
    if (this.isActive) {
      throw createMappedError(
        2007
        /* ErrorNames.browser_viewer_store_already_started */
      );
    }
    this.isActive = true;
    if (options.useUrlFragmentHash != void 0) {
      this.options.useUrlFragmentHash = options.useUrlFragmentHash;
    }
    this.pendingCalls.start({ platform: this.platform, allowedExecutionCostWithinTick: this.allowedExecutionCostWithinTick });
    this.window.addEventListener("popstate", this);
  }
  stop() {
    if (!this.isActive) {
      throw createMappedError(
        2008
        /* ErrorNames.browser_viewer_store_not_started */
      );
    }
    this.window.removeEventListener("popstate", this);
    this.pendingCalls.stop();
    this.options = { useUrlFragmentHash: true };
    this.isActive = false;
  }
  get length() {
    return this.history.length;
  }
  /**
   * The stored state for the current state/location.
   */
  get state() {
    return this.history.state;
  }
  /**
   * Get the viewer's (browser Location) current state/location (URL).
   */
  get viewerState() {
    const { pathname, search, hash } = this.location;
    const instruction = this.options.useUrlFragmentHash ?? false ? hash.slice(1) : `${pathname}${search}`;
    const fragment = this.options.useUrlFragmentHash ?? false ? hash.slice(1).includes("#") ? hash.slice(hash.slice(1).indexOf("#", 1)) : "" : hash.slice(1);
    return new NavigatorViewerState(pathname, search.slice(1), fragment, instruction);
  }
  /**
   * Enqueue an awaitable 'go' task that navigates delta amount of steps
   * back or forward in the states history.
   *
   * @param delta - The amount of steps, positive or negative, to move in the states history
   * @param suppressEvent - If true, no state change event is fired when the go task is executed
   */
  async go(delta, suppressEvent = false) {
    const doneTask = this.pendingCalls.createQueueTask((task) => task.resolve(), 1);
    this.pendingCalls.enqueue([
      (task) => {
        const eventTask = doneTask;
        const suppressPopstate = suppressEvent;
        this.forwardState({ eventTask, suppressPopstate });
        task.resolve();
      },
      (task) => {
        const history = this.history;
        const steps = delta;
        history.go(steps);
        task.resolve();
      }
    ], [0, 1]);
    return doneTask.wait();
  }
  /**
   * Enqueue an awaitable 'push state' task that pushes a state after the current
   * historical state. Any pre-existing historical states after the current are
   * discarded before the push.
   *
   * @param state - The state to push
   */
  async pushNavigatorState(state) {
    const { title, path } = state.navigations[state.navigationIndex];
    const fragment = this.options.useUrlFragmentHash ? "#/" : "";
    return this.pendingCalls.enqueue((task) => {
      const history = this.history;
      const data = state;
      const titleOrEmpty = title || "";
      const url = `${fragment}${path}`;
      try {
        history.pushState(data, titleOrEmpty, url);
        this.setTitle(titleOrEmpty);
      } catch (err) {
        const clean = this.tryCleanState(data, "push", err);
        history.pushState(clean, titleOrEmpty, url);
        this.setTitle(titleOrEmpty);
      }
      task.resolve();
    }, 1).wait();
  }
  /**
   * Enqueue an awaitable 'replace state' task that replace the current historical
   * state with the provided  state.
   *
   * @param state - The state to replace with
   */
  async replaceNavigatorState(state, title, path) {
    const lastNavigation = state.navigations[state.navigationIndex];
    title ?? (title = lastNavigation.title);
    path ?? (path = lastNavigation.path);
    const fragment = this.options.useUrlFragmentHash ? "#/" : "";
    return this.pendingCalls.enqueue((task) => {
      const history = this.history;
      const data = state;
      const titleOrEmpty = title || "";
      const url = `${fragment}${path}`;
      try {
        history.replaceState(data, titleOrEmpty, url);
        this.setTitle(titleOrEmpty);
      } catch (err) {
        const clean = this.tryCleanState(data, "replace", err);
        history.replaceState(clean, titleOrEmpty, url);
        this.setTitle(titleOrEmpty);
      }
      task.resolve();
    }, 1).wait();
  }
  /**
   * Enqueue an awaitable 'pop state' task that pops the last of the historical states.
   */
  async popNavigatorState() {
    const doneTask = this.pendingCalls.createQueueTask((task) => task.resolve(), 1);
    this.pendingCalls.enqueue(async (task) => {
      const eventTask = doneTask;
      await this.popState(eventTask);
      task.resolve();
    }, 1);
    return doneTask.wait();
  }
  setTitle(title) {
    this.window.document.title = title;
  }
  /**
   * Handle the browsers PopStateEvent
   *
   * @param event - The browser's PopStateEvent
   */
  handleEvent(e) {
    this.handlePopStateEvent(e);
  }
  /**
   * Enqueue an awaitable 'pop state' task when the viewer's state (browser's
   * Location) changes.
   *
   * @param event - The browser's PopStateEvent
   */
  handlePopStateEvent(event) {
    const { eventTask, suppressPopstate } = this.forwardedState;
    this.forwardedState = { eventTask: null, suppressPopstate: false };
    this.pendingCalls.enqueue(async (task) => {
      if (!suppressPopstate) {
        this.notifySubscribers(event);
      }
      if (eventTask !== null) {
        await eventTask.execute();
      }
      task.resolve();
    }, 1);
  }
  /**
   * Notifies subscribers that the state has changed
   *
   * @param ev - The browser's popstate event
   */
  notifySubscribers(ev) {
    this.ea.publish(NavigatorStateChangeEvent.eventName, NavigatorStateChangeEvent.create(this.viewerState, ev, this.history.state));
  }
  /**
   * Pop the last historical state by re-pushing the second to last
   * historical state (since browser History doesn't have a popState).
   *
   * @param doneTask - Task to execute once pop is done
   */
  async popState(doneTask) {
    var _a;
    await this.go(-1, true);
    const state = this.history.state;
    const lastNavigation = (_a = state == null ? void 0 : state.navigations) == null ? void 0 : _a[(state == null ? void 0 : state.navigationIndex) ?? 0];
    if (lastNavigation != null && !lastNavigation.firstEntry) {
      await this.go(-1, true);
      await this.pushNavigatorState(state);
    }
    await doneTask.execute();
  }
  /**
   * Set the "forwarded state" that decides whether the browser's popstate event
   * should fire a change state event or not.
   *
   * @param state - The forwarded state
   */
  forwardState(state) {
    this.forwardedState = state;
  }
  /**
   * Tries to clean up the state for pushing or replacing to browser History.
   *
   * @param data - The state to attempt to clean
   * @param type - The type of action, push or replace, that failed
   * @param originalError - The origial error when trying to push or replace
   */
  tryCleanState(data, type, originalError) {
    try {
      return JSON.parse(JSON.stringify(data));
    } catch (err) {
      throw createMappedError(2009, type, err, originalError);
    }
  }
};
var NavigatorViewerState = class {
  constructor(path, query, hash, instruction) {
    this.path = path;
    this.query = query;
    this.hash = hash;
    this.instruction = instruction;
  }
};
var NavigatorStateChangeEvent = class _NavigatorStateChangeEvent {
  constructor(eventName, viewerState, event, state) {
    this.eventName = eventName;
    this.viewerState = viewerState;
    this.event = event;
    this.state = state;
  }
  static create(viewerState, ev, navigatorState) {
    return new _NavigatorStateChangeEvent(_NavigatorStateChangeEvent.eventName, viewerState, ev, navigatorState);
  }
};
NavigatorStateChangeEvent.eventName = "au:router:navigation-state-change";
var Entity = class {
  constructor(endpoint) {
    this.endpoint = endpoint;
    this.running = false;
    this.states = /* @__PURE__ */ new Map();
    this.checkedStates = [];
    this.syncingState = null;
    this.syncPromise = null;
    this.step = null;
  }
  /**
   * Whether the entity has reached a specific state.
   *
   * @param state - The state to check
   */
  hasReachedState(state) {
    return this.states.has(state) && this.states.get(state) === null;
  }
};
var NavigationCoordinator = class _NavigationCoordinator {
  constructor(router, navigation) {
    this.router = router;
    this.navigation = navigation;
    this.instructions = [];
    this.matchedInstructions = [];
    this.processedInstructions = [];
    this.changedEndpoints = [];
    this.running = false;
    this.completed = false;
    this.cancelled = false;
    this.hasAllEndpoints = false;
    this.appendedInstructions = [];
    this.closed = false;
    this.entities = [];
    this.syncStates = /* @__PURE__ */ new Map();
    this.checkedSyncStates = /* @__PURE__ */ new Set();
  }
  /**
   * Create a navigation coordinator.
   *
   * @param router - The router
   * @param navigation - The navigation that creates the coordinator
   * @param options - The navigation coordinator options
   */
  static create(router, navigation, options) {
    const coordinator = new _NavigationCoordinator(router, navigation);
    options.syncStates.forEach((state) => coordinator.addSyncState(state));
    return coordinator;
  }
  /**
   * Append instructions to the current process.
   *
   * @param instructions - The instructions to append
   */
  appendInstructions(instructions) {
    this.instructions.push(...instructions);
    this.manageDefaults();
  }
  /**
   * Remove instructions from the current process.
   *
   * @param instructions - The instructions to remove
   */
  removeInstructions(instructions) {
    this.instructions = this.instructions.filter((instr) => !instructions.includes(instr));
    this.matchedInstructions = this.matchedInstructions.filter((instr) => !instructions.includes(instr));
  }
  manageDefaults() {
    const router = this.router;
    this.instructions = [...this.instructions.filter((instr) => !instr.default), ...this.instructions.filter((instr) => instr.default)];
    this.instructions.forEach((instruction) => {
      var _a;
      if (instruction.scope == null) {
        instruction.scope = this.navigation.scope ?? ((_a = this.router.rootScope) == null ? void 0 : _a.scope) ?? null;
      }
    });
    const instructions = this.instructions.filter((instr) => !instr.isClear(router));
    while (instructions.length > 0) {
      const instruction = instructions.shift();
      const foundProcessed = this.processedInstructions.some((instr) => !instr.isClear(router) && !instr.cancelled && instr.sameEndpoint(instruction, true));
      const existingMatched = this.matchedInstructions.find((instr) => !instr.isClear(router) && instr.sameEndpoint(instruction, true));
      const existingInstruction = this.instructions.find((instr) => !instr.isClear(router) && instr.sameEndpoint(instruction, true) && instr !== instruction);
      if (instruction.default && (foundProcessed || existingMatched !== void 0 && !existingMatched.default || existingInstruction !== void 0 && !existingInstruction.default)) {
        arrayRemove(this.instructions, (value) => value === instruction);
        continue;
      }
      if (existingMatched !== void 0) {
        arrayRemove(this.matchedInstructions, (value) => value === existingMatched);
        continue;
      }
      if (existingInstruction !== void 0) {
        arrayRemove(this.instructions, (value) => value === existingInstruction);
      }
    }
  }
  /**
   * Process the appended instructions, moving them to matched or remaining.
   */
  async processInstructions() {
    const changedEndpoints = [];
    let guard = 100;
    while (this.instructions.length > 0) {
      if (!guard--) {
        console.error("processInstructions endless loop", this.navigation, this.instructions);
        throw new Error("Endless loop");
      }
      this.instructions = [...this.instructions.filter((instr) => !instr.default), ...this.instructions.filter((instr) => instr.default)];
      const scope = this.instructions[0].scope;
      if (scope == null) {
        throw new Error("No scope for instruction");
      }
      changedEndpoints.push(...await this.processInstructionsForScope(scope));
    }
    return changedEndpoints;
  }
  async processInstructionsForScope(scope) {
    var _a, _b;
    const router = this.router;
    const options = router.configuration.options;
    const clearEndpoints = this.getClearAllEndpoints(scope);
    const nonRouteInstructions = this.getInstructionsForScope(scope).filter((instr) => !(instr.route instanceof Route));
    if (nonRouteInstructions.length > 0) {
      const foundRoute = scope.findInstructions(nonRouteInstructions, options.useDirectRouting, options.useConfiguredRoutes);
      if (nonRouteInstructions.some((instr) => !instr.component.none || instr.route != null) && !foundRoute.foundConfiguration && !foundRoute.foundInstructions) {
        throw this.createUnknownRouteError(nonRouteInstructions);
      }
      this.instructions.splice(this.instructions.indexOf(nonRouteInstructions[0]), nonRouteInstructions.length, ...foundRoute.instructions);
    }
    const unresolvedPromise = RoutingInstruction.resolve(this.getInstructionsForScope(scope));
    if (unresolvedPromise instanceof Promise) {
      await unresolvedPromise;
    }
    for (const addInstruction of this.getInstructionsForScope(scope).filter((instr) => instr.isAddAll(router))) {
      addInstruction.endpoint.set(addInstruction.scope.endpoint.name);
      addInstruction.scope = addInstruction.scope.owningScope;
    }
    let guard = 100;
    do {
      this.matchEndpoints(scope);
      if (!guard--) {
        router.unresolvedInstructionsError(this.navigation, this.instructions);
      }
      const changedEndpoints = [];
      const matchedEndpoints = this.matchedInstructions.map((instr) => instr.endpoint.instance);
      this.matchedInstructions.push(...clearEndpoints.filter((endpoint) => !matchedEndpoints.includes(endpoint)).map((endpoint) => RoutingInstruction.createClear(router, endpoint)));
      const hooked = await RoutingHook.invokeBeforeNavigation(this.matchedInstructions, this.navigation);
      if (hooked === false) {
        router.cancelNavigation(this.navigation, this);
        return [];
      } else if (hooked !== true && hooked !== this.matchedInstructions) {
        this.matchedInstructions = hooked;
      }
      for (const matchedInstruction of this.matchedInstructions) {
        const endpoint = matchedInstruction.endpoint.instance;
        if (endpoint !== null) {
          const action = endpoint.setNextContent(matchedInstruction, this.navigation);
          if (action !== "skip") {
            changedEndpoints.push(endpoint);
            this.addEndpoint(endpoint);
          }
          const dontClear = [endpoint];
          if (action === "swap") {
            dontClear.push(...endpoint.getContent().connectedScope.allScopes(true).map((scope2) => scope2.endpoint));
          }
          arrayRemove(clearEndpoints, (clear) => dontClear.includes(clear));
          arrayRemove(this.matchedInstructions, (matched) => matched !== matchedInstruction && matched.isClear(router) && dontClear.includes(matched.endpoint.instance));
          if (!matchedInstruction.isClear(router) && ((_b = (_a = matchedInstruction.scope) == null ? void 0 : _a.parent) == null ? void 0 : _b.isViewportScope)) {
            arrayRemove(clearEndpoints, (clear) => clear === matchedInstruction.scope.parent.endpoint);
            arrayRemove(this.matchedInstructions, (matched) => matched !== matchedInstruction && matched.isClear(router) && matched.endpoint.instance === matchedInstruction.scope.parent.endpoint);
          }
          if (matchedInstruction.hasNextScopeInstructions) {
            this.instructions.push(...matchedInstruction.nextScopeInstructions);
            if (action !== "skip") {
              for (const nextScopeInstruction of matchedInstruction.nextScopeInstructions) {
                nextScopeInstruction.scope = endpoint.scope;
                nextScopeInstruction.endpoint.instance = null;
              }
            }
          } else {
            clearEndpoints.push(...matchedInstruction.endpoint.instance.scope.children.map((s) => s.endpoint));
          }
        }
      }
      const skipping = this.matchedInstructions.filter((instr) => {
        var _a2;
        return ((_a2 = instr.endpoint.instance) == null ? void 0 : _a2.transitionAction) === "skip";
      });
      const skippingWithMore = skipping.filter((instr) => instr.hasNextScopeInstructions);
      if (skipping.length === 0 || skippingWithMore.length === 0) {
        if (!router.isRestrictedNavigation) {
          this.finalEndpoint();
        }
        this.run();
        if (this.hasAllEndpoints) {
          const guardedUnload = this.waitForSyncState("guardedUnload");
          if (guardedUnload instanceof Promise) {
            await guardedUnload;
          }
        }
      }
      if (this.cancelled) {
        router.cancelNavigation(this.navigation, this);
        return [];
      }
      arrayAddUnique(this.changedEndpoints, changedEndpoints);
      this.processedInstructions.push(...this.matchedInstructions.splice(0));
      if (!router.isRestrictedNavigation && (this.matchedInstructions.length > 0 || this.instructions.length > 0) && this.running) {
        const waitForSwapped = this.waitForSyncState("swapped");
        if (waitForSwapped instanceof Promise) {
          await waitForSwapped;
        }
      }
      this.instructions.push(...clearEndpoints.map((endpoint) => RoutingInstruction.createClear(router, endpoint)));
      const unresolvedPromise2 = RoutingInstruction.resolve(this.matchedInstructions);
      if (unresolvedPromise2 instanceof Promise) {
        await unresolvedPromise2;
      }
      this.changedEndpoints = this.changedEndpoints.filter((endpoint) => {
        var _a2;
        return !(((_a2 = [...this.processedInstructions].reverse().find((instruction) => instruction.endpoint.instance === endpoint)) == null ? void 0 : _a2.cancelled) ?? false);
      });
    } while (this.matchedInstructions.length > 0 || this.getInstructionsForScope(scope).length > 0);
    return this.changedEndpoints;
  }
  /**
   * Get all instructions for a specific scope
   */
  getInstructionsForScope(scope) {
    this.manageDefaults();
    const instructions = this.instructions.filter((instr) => instr.scope === scope && !instr.default);
    if (instructions.length > 0) {
      return instructions;
    }
    return this.instructions.filter((instr) => instr.scope === scope);
  }
  /**
   * Ensure that there's a clear all instruction present in instructions for a scope.
   */
  ensureClearStateInstruction(scope) {
    const router = this.router;
    if (!this.instructions.some((instr) => instr.scope === scope && instr.isClearAll(router))) {
      const clearAll = RoutingInstruction.create(RoutingInstruction.clear(router));
      clearAll.scope = scope;
      this.instructions.unshift(clearAll);
    }
  }
  /**
   * Match the instructions to available endpoints within, and with the help of, their scope.
   *
   * @param scope - The scope to match the instructions within
   * @param instructions - The instructions to matched
   * @param alreadyFound - The already found matches
   * @param disregardViewports - Whether viewports should be ignored when matching
   */
  matchEndpoints(scope, disregardViewports = false) {
    const scopeInstructions = this.getInstructionsForScope(scope);
    const matchedInstructions = EndpointMatcher.matchEndpoints(scope, scopeInstructions, [...this.processedInstructions, ...this.matchedInstructions], disregardViewports).matchedInstructions;
    this.matchedInstructions.push(...matchedInstructions);
    this.instructions = this.instructions.filter((instr) => !matchedInstructions.includes(instr));
  }
  /**
   * Run the navigation coordination, transitioning all entities/endpoints
   */
  run() {
    if (!this.running) {
      this.running = true;
      for (const entity of this.entities) {
        if (!entity.running) {
          entity.running = true;
          entity.endpoint.transition(this);
        }
      }
    }
  }
  /**
   * Add a navigation state to be synchronized.
   *
   * @param state - The state to add
   */
  addSyncState(state) {
    const openPromise = new OpenPromise(`addSyncState: ${state}`);
    this.syncStates.set(state, openPromise);
  }
  /**
   * Add an endpoint to be synchronized.
   *
   * @param endpoint - The endpoint to add
   */
  addEndpoint(endpoint) {
    const entity = new Entity(endpoint);
    this.entities.push(entity);
    this.recheckSyncStates();
    if (this.running) {
      entity.endpoint.transition(this);
    }
    return entity;
  }
  /**
   * Remove an endpoint from synchronization.
   *
   * @param endpoint - The endpoint to remove
   */
  removeEndpoint(endpoint) {
    const endpoints = this.entities.map((e) => e.endpoint);
    const removes = [endpoint];
    let children = [endpoint];
    while (children.length > 0) {
      children = endpoints.filter((e) => (e == null ? void 0 : e.parentViewport) != null && children.includes(e.parentViewport));
      removes.push(...children);
    }
    for (const remove of removes) {
      const entity = this.entities.find((e) => e.endpoint === remove);
      if (entity !== void 0) {
        arrayRemove(this.entities, (ent) => ent === entity);
      }
    }
    this.checkSyncState();
  }
  /**
   * Set the Runner step controlling the transition for an endpoint.
   *
   * @param endpoint - The endpoint that gets the step set
   * @param step - The step that's controlling the transition
   */
  setEndpointStep(endpoint, step) {
    let entity = this.entities.find((e) => e.endpoint === endpoint);
    if (entity === void 0) {
      entity = this.addEndpoint(endpoint);
    }
    entity.step = step;
  }
  /**
   * Get the Runner step controlling the transition for an endpoint.
   *
   * @param endpoint - The endpoint to get the step for
   */
  getEndpointStep(endpoint) {
    const entity = this.entities.find((e) => e.endpoint === endpoint);
    return (entity == null ? void 0 : entity.step) ?? null;
  }
  /**
   * Add a (reached) navigation state for an endpoint.
   *
   * @param endpoint - The endpoint that's reached a state
   * @param state - The state that's been reached
   */
  addEndpointState(endpoint, state) {
    let entity = this.entities.find((e) => e.endpoint === endpoint);
    if (entity === void 0) {
      entity = this.addEndpoint(endpoint);
    }
    const openPromise = entity.states.get(state);
    if (openPromise instanceof OpenPromise) {
      openPromise.resolve();
    }
    entity.states.set(state, null);
    this.checkSyncState(state);
  }
  /**
   * Wait for a navigation state to be reached. If endpoint is specified, it
   * will be marked as waiting for the state notified when it is reached (if
   * waiting is necessary).
   *
   * @param state - The state to wait for
   * @param endpoint - The specific endpoint to wait for
   */
  waitForSyncState(state, endpoint = null) {
    if (this.entities.length === 0) {
      return;
    }
    const openPromise = this.syncStates.get(state);
    if (openPromise === void 0) {
      return;
    }
    if (endpoint !== null) {
      const entity = this.entities.find((e) => e.endpoint === endpoint);
      if ((entity == null ? void 0 : entity.syncPromise) === null && openPromise.isPending) {
        entity.syncingState = state;
        entity.syncPromise = new OpenPromise(`waitForSyncState: ${state}`);
        entity.checkedStates.push(state);
        this.checkedSyncStates.add(state);
        Promise.resolve().then(() => {
          this.checkSyncState(state);
        }).catch((err) => {
          throw err;
        });
        return entity.syncPromise.promise;
      }
    }
    return openPromise.isPending ? openPromise.promise : void 0;
  }
  /**
   * Wait (if necessary) for an endpoint to reach a specific state.
   *
   * @param endpoint - The endpoint to wait for
   * @param state - The state to wait for
   */
  waitForEndpointState(endpoint, state) {
    if (!this.syncStates.has(state)) {
      return;
    }
    let entity = this.entities.find((e) => e.endpoint === endpoint);
    if (entity == null) {
      entity = this.addEndpoint(endpoint);
    }
    if (entity.hasReachedState(state)) {
      return;
    }
    let openPromise = entity.states.get(state);
    if (openPromise == null) {
      openPromise = new OpenPromise(`waitForEndpointState: ${state}`);
      entity.states.set(state, openPromise);
    }
    return openPromise.promise;
  }
  /**
   * Notify that all endpoints has been added to the coordinator.
   */
  finalEndpoint() {
    this.hasAllEndpoints = true;
    this.syncStates.forEach((_promise, state) => this.checkSyncState(state));
  }
  /**
   * Finalize the navigation, calling finalizeContentChange in all endpoints.
   */
  finalize() {
    this.entities.forEach((entity) => entity.endpoint.finalizeContentChange(this, null));
    this.completed = true;
    this.navigation.completed = true;
    this.syncStates.clear();
  }
  /**
   * Cancel the navigation, calling cancelContentChange in all endpoints and
   * cancelling the navigation itself.
   */
  cancel() {
    this.cancelled = true;
    this.instructions = [];
    this.matchedInstructions = [];
    this.entities.forEach((entity) => {
      const abort = entity.endpoint.cancelContentChange(this);
      if (abort instanceof Promise) {
        abort.catch((error) => {
          throw error;
        });
      }
    });
    this.router.navigator.cancel(this.navigation).then(() => {
      var _a;
      (_a = this.navigation.process) == null ? void 0 : _a.resolve(false);
    }).catch((error) => {
      throw error;
    });
    this.completed = true;
    this.navigation.completed = true;
    [...this.syncStates.values()].forEach((promise) => {
      if (promise.isPending) {
        promise.resolve();
      }
    });
    this.syncStates.clear();
  }
  /**
   * Check if a navigation state has been reached, notifying waiting
   * endpoints if so.
   *
   * @param state - The state to check
   */
  checkSyncState(state) {
    var _a;
    if (state === void 0) {
      this.syncStates.forEach((_promise, state2) => this.checkSyncState(state2));
      return;
    }
    const openPromise = this.syncStates.get(state);
    if (openPromise === void 0) {
      return;
    }
    if (this.hasAllEndpoints && openPromise.isPending && // Check that this state has been done by all state entities and if so resolve the promise
    this.entities.every((ent) => ent.hasReachedState(state)) && // Check that this state has been checked (reached) by all state entities and if so resolve the promise
    (!this.checkedSyncStates.has(state) || this.entities.every((ent) => ent.checkedStates.includes(state)))) {
      for (const entity of this.entities) {
        if (entity.syncingState === state) {
          (_a = entity.syncPromise) == null ? void 0 : _a.resolve();
          entity.syncPromise = null;
          entity.syncingState = null;
        }
      }
      openPromise.resolve();
    }
  }
  /**
   * Re-check the sync states (since a new endpoint has been added) and add
   * now unresolved ones back.
   */
  recheckSyncStates() {
    this.syncStates.forEach((promise, state) => {
      if (!promise.isPending && !this.entities.every((ent) => ent.hasReachedState(state))) {
        this.addSyncState(state);
      }
    });
  }
  /**
   * Get all endpoints affected by any clear all routing instructions and then remove those
   * routing instructions.
   *
   * @param instructions - The instructions to process
   */
  getClearAllEndpoints(scope) {
    const router = this.router;
    let clearEndpoints = [];
    if (this.instructions.some((instr) => (instr.scope ?? scope) === scope && instr.isClearAll(router))) {
      clearEndpoints = scope.enabledChildren.filter((sc) => !sc.endpoint.isEmpty).map((sc) => sc.endpoint);
      this.instructions = this.instructions.filter((instr) => !((instr.scope ?? scope) === scope && instr.isClearAll(router)));
    }
    return clearEndpoints;
  }
  /**
   * Deal with/throw an unknown route error.
   *
   * @param instructions - The failing instructions
   */
  createUnknownRouteError(instructions) {
    const options = this.router.configuration.options;
    const route2 = RoutingInstruction.stringify(this.router, instructions);
    if (instructions[0].route != null) {
      if (!options.useConfiguredRoutes) {
        return new Error(`Can not match '${route2}' since the router is configured to not use configured routes.`);
      } else {
        return new Error(`No matching configured route found for '${route2}'.`);
      }
    } else if (options.useConfiguredRoutes && options.useDirectRouting) {
      return new Error(`No matching configured route or component found for '${route2}'.`);
    } else if (options.useConfiguredRoutes) {
      return new Error(`No matching configured route found for '${route2}'.`);
    } else {
      return new Error(`No matching route/component found for '${route2}'.`);
    }
  }
};
var RoutingHook = class _RoutingHook {
  constructor(hook, options, id) {
    this.hook = hook;
    this.id = id;
    this.type = "beforeNavigation";
    this.includeTargets = [];
    this.excludeTargets = [];
    if (options.type !== void 0) {
      this.type = options.type;
    }
    for (const target of options.include ?? []) {
      this.includeTargets.push(new Target(target));
    }
    for (const target of options.exclude ?? []) {
      this.excludeTargets.push(new Target(target));
    }
  }
  static add(hookFunction, options) {
    const hook = new _RoutingHook(hookFunction, options ?? {}, ++this.lastIdentity);
    this.hooks[hook.type].push(hook);
    return this.lastIdentity;
  }
  static remove(id) {
    for (const type in this.hooks) {
      if (Object.prototype.hasOwnProperty.call(this.hooks, type)) {
        const index = this.hooks[type].findIndex((hook) => hook.id === id);
        if (index >= 0) {
          this.hooks[type].splice(index, 1);
        }
      }
    }
  }
  static removeAll() {
    for (const type in this.hooks) {
      this.hooks[type] = [];
    }
  }
  static async invokeBeforeNavigation(routingInstructions, navigationInstruction) {
    return this.invoke("beforeNavigation", navigationInstruction, routingInstructions);
  }
  static async invokeTransformFromUrl(url, navigationInstruction) {
    return this.invoke("transformFromUrl", navigationInstruction, url);
  }
  static async invokeTransformToUrl(state, navigationInstruction) {
    return this.invoke("transformToUrl", navigationInstruction, state);
  }
  static async invokeTransformTitle(title, navigationInstruction) {
    return this.invoke("transformTitle", navigationInstruction, title);
  }
  static async invoke(type, navigationInstruction, arg) {
    let outcome = arg;
    for (const hook of this.hooks[type]) {
      if (!hook.wantsMatch || hook.matches(arg)) {
        outcome = await hook.invoke(navigationInstruction, arg);
        if (typeof outcome === "boolean") {
          if (!outcome) {
            return false;
          }
        } else {
          arg = outcome;
        }
      }
    }
    return outcome;
  }
  get wantsMatch() {
    return this.includeTargets.length > 0 || this.excludeTargets.length > 0;
  }
  matches(routingInstructions) {
    if (this.includeTargets.length && !this.includeTargets.some((target) => target.matches(routingInstructions))) {
      return false;
    }
    if (this.excludeTargets.length && this.excludeTargets.some((target) => target.matches(routingInstructions))) {
      return false;
    }
    return true;
  }
  invoke(navigationInstruction, arg) {
    return this.hook(arg, navigationInstruction);
  }
};
RoutingHook.hooks = {
  beforeNavigation: [],
  transformFromUrl: [],
  transformToUrl: [],
  transformTitle: []
};
RoutingHook.lastIdentity = 0;
var Target = class {
  constructor(target) {
    this.componentType = null;
    this.componentName = null;
    this.viewport = null;
    this.viewportName = null;
    if (typeof target === "string") {
      this.componentName = target;
    } else if (InstructionComponent.isType(target)) {
      this.componentType = target;
      this.componentName = InstructionComponent.getName(target);
    } else {
      const cvTarget = target;
      if (cvTarget.component != null) {
        this.componentType = InstructionComponent.isType(cvTarget.component) ? InstructionComponent.getType(cvTarget.component) : null;
        this.componentName = InstructionComponent.getName(cvTarget.component);
      }
      if (cvTarget.viewport != null) {
        this.viewport = InstructionEndpoint.isInstance(cvTarget.viewport) ? cvTarget.viewport : null;
        this.viewportName = InstructionEndpoint.getName(cvTarget.viewport);
      }
    }
  }
  matches(routingInstructions) {
    const instructions = routingInstructions.slice();
    if (!instructions.length) {
      instructions.push(RoutingInstruction.create(""));
    }
    for (const instruction of instructions) {
      if (this.componentName !== null && this.componentName === instruction.component.name || this.componentType !== null && this.componentType === instruction.component.type || this.viewportName !== null && this.viewportName === instruction.endpoint.name || this.viewport !== null && this.viewport === instruction.endpoint.instance) {
        return true;
      }
    }
    return false;
  }
};
var Title = class _Title {
  static async getTitle(instructions, navigation, titleOptions) {
    let title = await RoutingHook.invokeTransformTitle(instructions, navigation);
    if (typeof title !== "string") {
      const componentTitles = _Title.stringifyTitles(title, navigation, titleOptions);
      title = titleOptions.appTitle;
      title = title.replace(/\${componentTitles}/g, componentTitles);
      title = title.replace(/\${appTitleSeparator}/g, componentTitles !== "" ? titleOptions.appTitleSeparator : "");
    }
    title = await RoutingHook.invokeTransformTitle(title, navigation);
    return title;
  }
  static stringifyTitles(instructions, navigation, titleOptions) {
    const titles = instructions.map((instruction) => _Title.stringifyTitle(instruction, navigation, titleOptions)).filter((instruction) => ((instruction == null ? void 0 : instruction.length) ?? 0) > 0);
    return titles.join(" + ");
  }
  static stringifyTitle(instruction, navigation, titleOptions) {
    const nextInstructions = instruction.nextScopeInstructions;
    let stringified = _Title.resolveTitle(instruction, navigation, titleOptions);
    if (Array.isArray(nextInstructions) && nextInstructions.length > 0) {
      let nextStringified = _Title.stringifyTitles(nextInstructions, navigation, titleOptions);
      if (nextStringified.length > 0) {
        if (nextInstructions.length !== 1) {
          nextStringified = `[ ${nextStringified} ]`;
        }
        if (stringified.length > 0) {
          stringified = titleOptions.componentTitleOrder === "top-down" ? stringified + titleOptions.componentTitleSeparator + nextStringified : nextStringified + titleOptions.componentTitleSeparator + stringified;
        } else {
          stringified = nextStringified;
        }
      }
    }
    return stringified;
  }
  static resolveTitle(instruction, navigation, titleOptions) {
    let title = instruction.getTitle(navigation);
    if (titleOptions.transformTitle != null) {
      title = titleOptions.transformTitle(title, instruction, navigation);
    }
    return title;
  }
};
var IRouter = DI.createInterface("IRouter", (x) => x.singleton(Router));
var Router = class _Router {
  constructor() {
    this.rootScope = null;
    this.activeComponents = [];
    this.appendedInstructions = [];
    this.isActive = false;
    this.coordinators = [];
    this.loadedFirst = false;
    this._isProcessingNav = false;
    this._logger = resolve(ILogger);
    this.container = resolve(IContainer);
    this.ea = resolve(IEventAggregator);
    this.navigator = resolve(Navigator);
    this.viewer = resolve(BrowserViewerStore);
    this.store = resolve(BrowserViewerStore);
    this.configuration = resolve(IRouterConfiguration);
    this.handleNavigatorNavigateEvent = (event) => {
      void this._doHandleNavigatorNavigateEvent(event);
    };
    this.handleNavigatorStateChangeEvent = (event) => {
      var _a;
      if (((_a = event.state) == null ? void 0 : _a.navigationIndex) != null) {
        const entry = Navigation.create(event.state.navigations[event.state.navigationIndex]);
        entry.instruction = event.viewerState.instruction;
        entry.fromBrowser = true;
        this.navigator.navigate(entry).catch((error) => {
          throw error;
        });
      } else {
        this.load(event.viewerState.instruction, { fromBrowser: true }).catch((error) => {
          throw error;
        });
      }
    };
    this.processNavigation = async (navigation) => {
      this.loadedFirst = true;
      const options = this.configuration.options;
      const coordinator = NavigationCoordinator.create(this, navigation, { syncStates: this.configuration.options.navigationSyncStates });
      this.coordinators.push(coordinator);
      coordinator.appendInstructions(this.appendedInstructions.splice(0));
      this.ea.publish(RouterNavigationStartEvent.eventName, RouterNavigationStartEvent.create(navigation));
      let transformedInstruction;
      if (navigation.useFullStateInstruction) {
        transformedInstruction = navigation.fullStateInstruction;
        let options2 = {};
        ({ instructions: transformedInstruction, options: options2 } = this._extractFragmentAndQuery(transformedInstruction, options2));
        navigation.fragment = options2.fragment ?? navigation.fragment;
        navigation.query = options2.query ?? navigation.query;
        navigation.parameters = options2.parameters ?? navigation.parameters;
      } else {
        transformedInstruction = typeof navigation.instruction === "string" ? await RoutingHook.invokeTransformFromUrl(navigation.instruction, coordinator.navigation) : navigation.instruction;
      }
      const basePath = options.basePath;
      if (basePath !== null && typeof transformedInstruction === "string" && transformedInstruction.startsWith(basePath) && !options.useUrlFragmentHash) {
        transformedInstruction = transformedInstruction.slice(basePath.length);
      }
      if (transformedInstruction === "/") {
        transformedInstruction = "";
      }
      if (typeof transformedInstruction === "string") {
        if (transformedInstruction === "") {
          transformedInstruction = [new RoutingInstruction("")];
          transformedInstruction[0].default = true;
        } else if (transformedInstruction === "-") {
          transformedInstruction = [new RoutingInstruction("-"), new RoutingInstruction("")];
          transformedInstruction[1].default = true;
        } else {
          transformedInstruction = RoutingInstruction.parse(this, transformedInstruction);
        }
      }
      navigation.scope ?? (navigation.scope = this.rootScope.scope);
      coordinator.appendInstructions(transformedInstruction);
      if (options.completeStateNavigations) {
        arrayUnique(transformedInstruction, false).map((instr) => instr.scope).forEach((scope) => coordinator.ensureClearStateInstruction(scope));
      }
      let guard = 100;
      do {
        if (!guard--) {
          this.unresolvedInstructionsError(navigation, coordinator.instructions);
        }
        await coordinator.processInstructions();
      } while (coordinator.instructions.length > 0);
      return Runner.run("processNavigation", () => {
        coordinator.closed = true;
        coordinator.finalEndpoint();
        return coordinator.waitForSyncState("completed");
      }, () => {
        coordinator.finalize();
        return this.updateNavigation(navigation);
      }, () => {
        if (navigation.navigation.new && !navigation.navigation.first && !navigation.repeating && coordinator.changedEndpoints.every((endpoint) => endpoint.options.noHistory)) {
          navigation.untracked = true;
        }
      }, async () => {
        var _a;
        while (this.coordinators.length > 0 && this.coordinators[0].completed) {
          const coord = this.coordinators.shift();
          await this.navigator.finalize(
            coord.navigation,
            false
            /* this.coordinators.length === 0 */
          );
          this.ea.publish(RouterNavigationCompleteEvent.eventName, RouterNavigationCompleteEvent.create(coord.navigation));
          this.ea.publish(RouterNavigationEndEvent.eventName, RouterNavigationEndEvent.create(coord.navigation));
          (_a = coord.navigation.process) == null ? void 0 : _a.resolve(true);
        }
      });
    };
  }
  /**
   * Whether the router is currently navigating.
   */
  get isNavigating() {
    return this.coordinators.length > 0;
  }
  /**
   * Whether the router has a navigation that's open for more
   * instructions to be appended.
   */
  get hasOpenNavigation() {
    return this.coordinators.filter((coordinator) => !coordinator.closed).length > 0;
  }
  /**
   * Whether navigations are restricted/synchronized beyond the minimum.
   */
  get isRestrictedNavigation() {
    const syncStates = this.configuration.options.navigationSyncStates;
    return syncStates.includes("guardedLoad") || syncStates.includes("unloaded") || syncStates.includes("loaded") || syncStates.includes("guarded") || syncStates.includes("routed");
  }
  /**
   * Whether navigation history is stateful
   *
   * @internal
   */
  get statefulHistory() {
    return this.configuration.options.statefulHistoryLength !== void 0 && this.configuration.options.statefulHistoryLength > 0;
  }
  /**
   * Start the router, activing the event listeners.
   */
  start() {
    if (this.isActive) {
      throw createMappedError(
        2e3
        /* ErrorNames.router_started */
      );
    }
    this.isActive = true;
    const root = this.container.get(IAppRoot);
    this.rootScope = new ViewportScope(this, "rootScope", root.controller.viewModel, null, true, root.config.component);
    const options = this.configuration.options;
    if (options.basePath === null) {
      const url = new URL(root.host.baseURI);
      options.basePath = url.pathname;
    }
    if (options.basePath.endsWith("/")) {
      options.basePath = options.basePath.slice(0, -1);
    }
    this.navigator.start({
      store: this.store,
      viewer: this.viewer,
      statefulHistoryLength: this.configuration.options.statefulHistoryLength
    });
    this._navigatorStateChangeEventSubscription = this.ea.subscribe(NavigatorStateChangeEvent.eventName, this.handleNavigatorStateChangeEvent);
    this._navigatorNavigateEventSubscription = this.ea.subscribe(NavigatorNavigateEvent.eventName, this.handleNavigatorNavigateEvent);
    this.viewer.start({ useUrlFragmentHash: this.configuration.options.useUrlFragmentHash });
    this.ea.publish(RouterStartEvent.eventName, RouterStartEvent.create());
  }
  /**
   * Stop the router.
   */
  stop() {
    if (!this.isActive) {
      throw createMappedError(
        2001
        /* ErrorNames.router_not_started */
      );
    }
    this.ea.publish(RouterStopEvent.eventName, RouterStopEvent.create());
    this.navigator.stop();
    this.viewer.stop();
    this._navigatorStateChangeEventSubscription.dispose();
    this._navigatorNavigateEventSubscription.dispose();
  }
  /**
   * Perform the initial load, using the current url.
   *
   * @internal
   */
  async initialLoad() {
    const { instruction, hash } = this.viewer.viewerState;
    const result = this.load(instruction, {
      fragment: hash,
      replacing: true,
      fromBrowser: false
    });
    this.loadedFirst = true;
    return result;
  }
  /** @internal */
  async _doHandleNavigatorNavigateEvent(event) {
    var _a, _b;
    if (this._isProcessingNav) {
      if (this._pendingNavigation) {
        (_a = this._pendingNavigation.navigation.process) == null ? void 0 : _a.resolve(false);
      }
      this._pendingNavigation = event;
      return;
    }
    this._isProcessingNav = true;
    try {
      await this.processNavigation(event.navigation);
    } catch (error) {
      (_b = event.navigation.process) == null ? void 0 : _b.reject(error);
    } finally {
      this._isProcessingNav = false;
    }
    if (this._pendingNavigation) {
      const pending = this._pendingNavigation;
      this._pendingNavigation = void 0;
      await this._doHandleNavigatorNavigateEvent(pending);
    }
  }
  /**
   * Is processing navigation
   *
   * @internal
   */
  get isProcessingNav() {
    return this._isProcessingNav || this._pendingNavigation != null;
  }
  /**
   * Get a named endpoint of a specific type.
   *
   * @param type - The type of endpoint to get
   * @param name - The name of the endpoint to get
   */
  getEndpoint(type, name) {
    return this.allEndpoints(type).find((endpoint) => endpoint.name === name) ?? null;
  }
  /**
   * Get all endpoints of a specific type.
   *
   * @param type - The type of the endpoints to get
   * @param includeDisabled - Whether disabled/non-active endpoints should be included
   * @param includeReplaced - Whether replaced endpoints should be included
   */
  allEndpoints(type, includeDisabled = false) {
    return this.rootScope.scope.allScopes(includeDisabled).filter((scope) => type === null || scope.type === type).map((scope) => scope.endpoint);
  }
  /**
   * Public API (not yet implemented)
   */
  addEndpoint(_type, ..._args) {
    throw createMappedError(99, "addEndPoint");
  }
  /**
   * Connect an endpoint custom element to an endpoint. Called from the custom
   * elements of endopints.
   *
   * @param endpoint - An already connected endpoint
   * @param type - The type of the endpoint
   * @param connectedCE - The endpoint custom element
   * @param name - The name of the endpoint
   * @param options - The custom element options
   *
   * @internal
   */
  connectEndpoint(endpoint, type, connectedCE, name, options) {
    const container = connectedCE.container;
    const closestEndpoint = container.has(_Router.closestEndpointKey, true) ? container.get(_Router.closestEndpointKey) : this.rootScope;
    const parentScope = closestEndpoint.connectedScope;
    if (endpoint === null) {
      endpoint = parentScope.addEndpoint(type, name, connectedCE, options);
      Registration.instance(_Router.closestEndpointKey, endpoint).register(container);
    }
    return endpoint;
  }
  /**
   * Disconnect an custom element endpoint from an endpoint. Called from the
   * custom elements of endpoints.
   *
   * @param step - The previous step in this transition Run
   * @param endpoint - The endpoint to disconnect from
   * @param connectedCE - The custom element to disconnect
   */
  disconnectEndpoint(step, endpoint, connectedCE) {
    if (!endpoint.connectedScope.parent.removeEndpoint(step, endpoint, connectedCE)) {
      throw createMappedError(2002, endpoint.name);
    }
  }
  /**
   * Load navigation instructions.
   *
   * @param instructions - The instructions to load
   * @param options - The options to use when loading the instructions
   */
  async load(instructions, options) {
    ({ instructions, options } = this._extractFragmentAndQuery(instructions, options ?? {}));
    let scope = null;
    ({ instructions, scope } = this.applyLoadOptions(instructions, options));
    const append = options.append ?? false;
    if (append !== false) {
      if (append instanceof NavigationCoordinator) {
        if (!append.closed) {
          instructions = RoutingInstruction.from(this, instructions);
          this.appendInstructions(instructions, scope, append);
          return Promise.resolve();
        }
      } else {
        if (!this.loadedFirst || this.hasOpenNavigation) {
          instructions = RoutingInstruction.from(this, instructions);
          this.appendInstructions(instructions, scope);
          return Promise.resolve();
        }
      }
    }
    const entry = Navigation.create({
      instruction: instructions,
      fullStateInstruction: "",
      scope,
      title: options.title,
      data: options.data,
      query: options.query,
      fragment: options.fragment,
      parameters: options.parameters,
      replacing: (options.replacing ?? false) || options.replace,
      repeating: (options.append ?? false) !== false,
      fromBrowser: options.fromBrowser ?? false,
      origin: options.origin,
      completed: false
    });
    return this.navigator.navigate(entry);
  }
  /**
   * Apply the load options on the instructions.
   *
   * @param loadInstructions - The instructions to load
   * @param options - The load options to apply when loading the instructions
   * @param keepString - Whether the load instructions should remain as a string (if it's a string)
   *
   */
  applyLoadOptions(loadInstructions, options, keepString = true) {
    options = options ?? {};
    if ("origin" in options && !("context" in options)) {
      options.context = options.origin;
    }
    const { scope, instruction } = RoutingScope.for(options.context ?? null, typeof loadInstructions === "string" ? loadInstructions : void 0);
    if (typeof loadInstructions === "string") {
      if (!keepString) {
        loadInstructions = RoutingInstruction.from(this, instruction);
        for (const loadInstruction of loadInstructions) {
          if (loadInstruction.scope === null) {
            loadInstruction.scope = scope;
          }
        }
      } else {
        loadInstructions = instruction;
      }
    } else {
      loadInstructions = RoutingInstruction.from(this, loadInstructions);
      for (const loadInstruction of loadInstructions) {
        if (loadInstruction.scope === null) {
          loadInstruction.scope = scope;
        }
      }
    }
    return {
      instructions: loadInstructions,
      scope
    };
  }
  /**
   * Refresh/reload the current navigation
   */
  refresh() {
    return this.navigator.refresh();
  }
  /**
   * Go one step back in navigation history.
   */
  back() {
    return this.navigator.go(-1);
  }
  /**
   * Go one step forward in navigation history.
   */
  forward() {
    return this.navigator.go(1);
  }
  /**
   * Go a specified amount of steps back or forward in navigation history.
   *
   * @param delta - The amount of steps to go. A positive number goes
   * forward, a negative goes backwards.
   */
  go(delta) {
    return this.navigator.go(delta);
  }
  /**
   * Check whether a set of instructions are active. All instructions need
   * to be active for the condition to be true.
   *
   * @param instructions - The instructions to check
   * @param options - The load options to apply to the instructions to check
   */
  checkActive(instructions, options) {
    if (typeof instructions === "string") {
      throw createMappedError(2003, instructions);
    }
    options = options ?? {};
    ({ instructions } = this.applyLoadOptions(instructions, options));
    instructions.forEach((instruction) => instruction.scope ?? (instruction.scope = this.rootScope.scope));
    const scopes = arrayUnique(instructions.map((instruction) => instruction.scope));
    for (const scope of scopes) {
      const scopeInstructions = scope.matchScope(instructions, false);
      const scopeActives = scope.matchScope(this.activeComponents, true);
      if (!RoutingInstruction.contains(this, scopeActives, scopeInstructions, true)) {
        return false;
      }
    }
    return true;
  }
  /**
   * Deal with/throw an unresolved instructions error.
   *
   * @param navigation - The failed navigation
   * @param instructions - The unresovled instructions
   */
  unresolvedInstructionsError(navigation, instructions) {
    this.ea.publish(RouterNavigationErrorEvent.eventName, RouterNavigationErrorEvent.create(navigation));
    this.ea.publish(RouterNavigationEndEvent.eventName, RouterNavigationEndEvent.create(navigation));
    throw createUnresolvedinstructionsError(instructions, this._logger);
  }
  /**
   * Cancel a navigation (without it being an error).
   *
   * @param navigation - The navigation to cancel
   * @param coordinator - The coordinator for the navigation
   */
  cancelNavigation(navigation, coordinator) {
    coordinator.cancel();
    this.ea.publish(RouterNavigationCancelEvent.eventName, RouterNavigationCancelEvent.create(navigation));
    this.ea.publish(RouterNavigationEndEvent.eventName, RouterNavigationEndEvent.create(navigation));
  }
  /**
   * Append instructions to the current navigation.
   *
   * @param instructions - The instructions to append
   * @param scope - The scope of the instructions
   */
  appendInstructions(instructions, scope = null, coordinator = null) {
    if (scope === null) {
      scope = this.rootScope.scope;
    }
    for (const instruction of instructions) {
      if (instruction.scope === null) {
        instruction.scope = scope;
      }
    }
    if (coordinator === null) {
      for (let i = this.coordinators.length - 1; i >= 0; i--) {
        if (!this.coordinators[i].closed) {
          coordinator = this.coordinators[i];
          break;
        }
      }
    }
    if (coordinator === null) {
      if (!this.loadedFirst) {
        this.appendedInstructions.push(...instructions);
      } else {
        throw createMappedError(
          2004
          /* ErrorNames.router_failed_appending_routing_instructions */
        );
      }
    }
    coordinator == null ? void 0 : coordinator.appendInstructions(instructions);
  }
  /**
   * Update the navigation with full state, url, query string and title. The
   * appropriate hooks are called. The `activeComponents` are also set.
   *
   * @param navigation - The navigation to update
   */
  async updateNavigation(navigation) {
    var _a, _b, _c;
    this.rootScope.scope.reparentRoutingInstructions();
    const instructions = this.rootScope.scope.getRoutingInstructions(navigation.timestamp);
    let { matchedInstructions } = this.rootScope.scope.matchEndpoints(instructions, [], true);
    let guard = 100;
    while (matchedInstructions.length > 0) {
      if (guard-- === 0) {
        throw createMappedError(
          2005
          /* ErrorNames.router_failed_finding_viewport_when_updating_viewer_path */
        );
      }
      matchedInstructions = matchedInstructions.map((instruction) => {
        const { matchedInstructions: matchedInstructions2 } = instruction.endpoint.instance.scope.matchEndpoints(instruction.nextScopeInstructions ?? [], [], true);
        return matchedInstructions2;
      }).flat();
    }
    if (navigation.timestamp >= (((_a = this.activeNavigation) == null ? void 0 : _a.timestamp) ?? 0)) {
      this.activeNavigation = navigation;
      this.activeComponents = instructions;
    }
    let state = await RoutingHook.invokeTransformToUrl(instructions, navigation);
    if (typeof state !== "string") {
      state = RoutingInstruction.stringify(this, state, { endpointContext: true });
    }
    state = await RoutingHook.invokeTransformToUrl(state, navigation);
    if (navigation.query == null && navigation.parameters != null) {
      const search = new URLSearchParams();
      for (let [key, values] of Object.entries(navigation.parameters)) {
        key = encodeURIComponent(key);
        if (!Array.isArray(values)) {
          values = [values];
        }
        for (const value of values) {
          search.append(key, encodeURIComponent(value));
        }
      }
      navigation.query = search.toString();
    }
    let basePath = `${this.configuration.options.basePath}/`;
    if (basePath === null || state !== "" && state[0] === "/" || this.configuration.options.useUrlFragmentHash) {
      basePath = "";
    }
    const query = (((_b = navigation.query) == null ? void 0 : _b.length) ?? 0) > 0 ? "?" + navigation.query : "";
    const fragment = (((_c = navigation.fragment) == null ? void 0 : _c.length) ?? 0) > 0 ? "#" + navigation.fragment : "";
    navigation.path = basePath + state + query + fragment;
    const path = navigation.path.slice(basePath.length);
    navigation.fullStateInstruction = RoutingInstruction.clear(this) + (path.length > 0 ? Separators.for(this).sibling : "") + path;
    if ((navigation.title ?? null) === null) {
      const title = await Title.getTitle(instructions, navigation, this.configuration.options.title);
      if (title !== null) {
        navigation.title = title;
      }
    }
    return Promise.resolve();
  }
  /**
   * Extract and setup the fragment and query from instructions or options.
   *
   * @param instructions - The string instructions to extract from
   * @param options - The options containing the fragment and query
   *
   * TODO: Review query extraction; different pos for path and fragment
   *
   * @internal
   */
  _extractFragmentAndQuery(instructions, options) {
    options = { ...options };
    if (typeof instructions === "string" && options.fragment == null) {
      const [path, fragment] = instructions.split("#");
      instructions = path;
      options.fragment = fragment;
    }
    if (typeof instructions === "string" && options.query == null) {
      const [path, search] = instructions.split("?");
      instructions = path;
      options.query = search;
    }
    if (typeof options.parameters === "string" && options.query == null) {
      options.query = options.parameters;
      options.parameters = void 0;
    }
    if (typeof options.query === "string" && options.query.length > 0) {
      options.parameters ?? (options.parameters = {});
      const searchParams = new URLSearchParams(options.query);
      searchParams.forEach((value, key) => {
        key = decodeURIComponent(key);
        value = decodeURIComponent(value);
        if (key in options.parameters) {
          if (!Array.isArray(options.parameters[key])) {
            options.parameters[key] = [options.parameters[key]];
          }
          options.parameters[key].push(value);
        } else {
          options.parameters[key] = value;
        }
      });
    }
    return { instructions, options };
  }
};
Router.closestEndpointKey = Protocol.annotation.keyFor("closest-endpoint");
function createUnresolvedinstructionsError(remainingInstructions, logger) {
  const error = createMappedError(2006, remainingInstructions.length);
  error.remainingInstructions = remainingInstructions;
  logger.warn(error, error.remainingInstructions);
  {
    console.log(error, error.remainingInstructions);
  }
  return error;
}
var RouterEvent = class {
  constructor(eventName) {
    this.eventName = eventName;
  }
};
var RouterStartEvent = class _RouterStartEvent extends RouterEvent {
  static create() {
    return new _RouterStartEvent(this.eventName);
  }
};
RouterStartEvent.eventName = "au:router:router-start";
var RouterStopEvent = class _RouterStopEvent extends RouterEvent {
  static create() {
    return new _RouterStopEvent(this.eventName);
  }
};
RouterStopEvent.eventName = "au:router:router-stop";
var RouterNavigationEvent = class {
  constructor(eventName, navigation) {
    this.eventName = eventName;
    this.navigation = navigation;
  }
};
var RouterNavigationStartEvent = class _RouterNavigationStartEvent extends RouterNavigationEvent {
  static create(navigation) {
    return new _RouterNavigationStartEvent(this.eventName, navigation);
  }
};
RouterNavigationStartEvent.eventName = "au:router:navigation-start";
var RouterNavigationEndEvent = class _RouterNavigationEndEvent extends RouterNavigationEvent {
  static create(navigation) {
    return new _RouterNavigationEndEvent(this.eventName, navigation);
  }
};
RouterNavigationEndEvent.eventName = "au:router:navigation-end";
var RouterNavigationCancelEvent = class _RouterNavigationCancelEvent extends RouterNavigationEvent {
  static create(navigation) {
    return new _RouterNavigationCancelEvent(this.eventName, navigation);
  }
};
RouterNavigationCancelEvent.eventName = "au:router:navigation-cancel";
var RouterNavigationCompleteEvent = class _RouterNavigationCompleteEvent extends RouterNavigationEvent {
  static create(navigation) {
    return new _RouterNavigationCompleteEvent(this.eventName, navigation);
  }
};
RouterNavigationCompleteEvent.eventName = "au:router:navigation-complete";
var RouterNavigationErrorEvent = class _RouterNavigationErrorEvent extends RouterNavigationEvent {
  static create(navigation) {
    return new _RouterNavigationErrorEvent(this.eventName, navigation);
  }
};
RouterNavigationErrorEvent.eventName = "au:router:navigation-error";
var ILinkHandler = DI.createInterface("ILinkHandler", (x) => x.singleton(LinkHandler));
var LinkHandler = class {
  constructor() {
    this.window = resolve(IWindow);
    this.router = resolve(IRouter);
  }
  handleEvent(e) {
    this.handleClick(e);
  }
  handleClick(event) {
    if (event.button !== 0 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }
    const target = event.currentTarget;
    if (target.hasAttribute("external")) {
      return;
    }
    const targetWindow = target.getAttribute("target") ?? "";
    if (targetWindow.length > 0 && targetWindow !== this.window.name && targetWindow !== "_self") {
      return;
    }
    const loadAttr = CustomAttribute.for(target, "load");
    const load = loadAttr !== void 0 ? loadAttr.viewModel.value : null;
    const href = this.router.configuration.options.useHref && target.hasAttribute("href") ? target.getAttribute("href") : null;
    if ((load === null || load.length === 0) && (href === null || href.length === 0)) {
      return;
    }
    event.preventDefault();
    let instruction = load ?? href ?? "";
    if (typeof instruction === "string" && instruction.startsWith("#")) {
      instruction = instruction.slice(1);
      if (!instruction.startsWith("/")) {
        instruction = `/${instruction}`;
      }
    }
    this.router.load(instruction, { origin: target }).catch((error) => {
      throw error;
    });
  }
};
function route(configOrPath) {
  return function(target, context) {
    context.addInitializer(function() {
      Route.configure(configOrPath, target);
    });
    return target;
  };
}
function getValueOrAttribute(name, value, useValue, element, doExistCheck = false) {
  if (doExistCheck) {
    return value === "";
  }
  if (useValue) {
    return value;
  }
  const attribute = element.getAttribute(name) ?? "";
  return attribute.length > 0 ? attribute : value;
}
function waitForRouterStart(router, ea) {
  if (router.isActive) {
    return;
  }
  return new Promise((resolve2) => {
    const subscription = ea.subscribe(RouterStartEvent.eventName, () => {
      resolve2();
      subscription.dispose();
    });
  });
}
function getConsideredActiveInstructions(router, controller, element, value) {
  var _a, _b;
  let activeInstructions = (_b = (_a = CustomAttribute.for(element, "considered-active")) == null ? void 0 : _a.viewModel) == null ? void 0 : _b.value;
  if (activeInstructions === void 0) {
    activeInstructions = value;
  }
  const created = router.applyLoadOptions(activeInstructions, { context: controller });
  const instructions = RoutingInstruction.from(router, created.instructions);
  for (const instruction of instructions) {
    if (instruction.scope === null) {
      instruction.scope = created.scope;
    }
  }
  return instructions;
}
function getLoadIndicator(element) {
  let indicator = element.parentElement;
  while (indicator != null) {
    if (indicator.tagName === "AU-VIEWPORT") {
      indicator = null;
      break;
    }
    if (indicator.hasAttribute("load-active")) {
      break;
    }
    indicator = indicator.parentElement;
  }
  indicator ?? (indicator = element);
  return indicator;
}
var bmToView = BindingMode.toView;
var ParentViewport = CustomElement.createInjectable();
var ViewportCustomElement = class {
  constructor() {
    this.name = "default";
    this.usedBy = "";
    this.default = "";
    this.fallback = "";
    this.fallbackAction = "";
    this.noScope = false;
    this.noLink = false;
    this.noTitle = false;
    this.noHistory = false;
    this.stateful = false;
    this.endpoint = null;
    this.pendingChildren = [];
    this.pendingPromise = null;
    this.isBound = false;
    this.router = resolve(IRouter);
    this.element = resolve(INode);
    this.container = resolve(IContainer);
    this.ea = resolve(IEventAggregator);
    this.parentViewport = resolve(ParentViewport);
    this.instruction = resolve(IInstruction);
  }
  hydrated(controller) {
    this.controller = controller;
    const hasDefault = this.instruction.props.filter((instr) => instr.to === "default").length > 0;
    if (hasDefault && this.parentViewport != null) {
      this.parentViewport.pendingChildren.push(this);
      if (this.parentViewport.pendingPromise === null) {
        this.parentViewport.pendingPromise = new OpenPromise(`hydrated: ViewportCustomElement`);
      }
    }
    Runner.run(
      null,
      // The first viewport(s) might be hydrated before the router is started
      () => waitForRouterStart(this.router, this.ea),
      () => {
        if (this.router.isRestrictedNavigation) {
          this.connect();
        }
      }
    );
  }
  binding(initiator, _parent) {
    this.isBound = true;
    return Runner.run(
      "binding",
      // The first viewport(s) might be bound before the router is started
      () => waitForRouterStart(this.router, this.ea),
      () => {
        if (!this.router.isRestrictedNavigation) {
          this.connect();
        }
      },
      () => {
        var _a;
        if (((_a = this.endpoint) == null ? void 0 : _a.activeResolve) != null) {
          this.endpoint.activeResolve();
          this.endpoint.activeResolve = null;
        }
      },
      () => {
        var _a;
        if (this.endpoint !== null && this.endpoint.getNextContent() === null) {
          return (_a = this.endpoint.activate(
            null,
            initiator,
            this.controller,
            /* true, */
            void 0
          )) == null ? void 0 : _a.asValue;
        }
      }
    );
  }
  detaching(initiator, parent) {
    if (this.endpoint !== null) {
      this.isBound = false;
      return this.endpoint.deactivate(null, initiator, parent);
    }
  }
  unbinding(_initiator, _parent) {
    if (this.endpoint !== null) {
      return this.disconnect(null);
    }
  }
  dispose() {
    var _a;
    (_a = this.endpoint) == null ? void 0 : _a.dispose();
    this.endpoint = null;
  }
  /**
   * Connect this custom element to a router endpoint (Viewport).
   */
  connect() {
    const { isBound, element } = this;
    const name = getValueOrAttribute("name", this.name, isBound, element);
    const options = {};
    options.scope = !getValueOrAttribute("no-scope", this.noScope, false, element, true);
    options.usedBy = getValueOrAttribute("used-by", this.usedBy, isBound, element);
    options.default = getValueOrAttribute("default", this.default, isBound, element);
    options.fallback = getValueOrAttribute("fallback", this.fallback, isBound, element);
    options.fallbackAction = getValueOrAttribute("fallback-action", this.fallbackAction, isBound, element);
    options.noLink = getValueOrAttribute("no-link", this.noLink, isBound, element, true);
    options.noTitle = getValueOrAttribute("no-title", this.noTitle, isBound, element, true);
    options.noHistory = getValueOrAttribute("no-history", this.noHistory, isBound, element, true);
    options.stateful = getValueOrAttribute("stateful", this.stateful, isBound, element, true);
    Object.keys(options).forEach((key) => {
      if (options[key] === void 0) {
        delete options[key];
      }
    });
    this.endpoint = this.router.connectEndpoint(this.endpoint, "Viewport", this, name, options);
    const parentViewport = this.parentViewport;
    if (parentViewport != null) {
      arrayRemove(parentViewport.pendingChildren, (child) => child === this);
      if (parentViewport.pendingChildren.length === 0 && parentViewport.pendingPromise !== null) {
        parentViewport.pendingPromise.resolve();
        parentViewport.pendingPromise = null;
      }
    }
  }
  /**
   * Disconnect this custom element from its router endpoint (Viewport).
   */
  disconnect(step) {
    if (this.endpoint !== null) {
      this.router.disconnectEndpoint(step, this.endpoint, this);
    }
  }
  /**
   * Set whether the viewport is currently active or not. Adds or removes
   * activity classes to the custom element
   *
   * @param active - Whether the viewport is active or not
   */
  setActivity(state, active) {
    const prefix = this.router.configuration.options.indicators.viewportNavigating;
    if (typeof state === "string") {
      this.element.classList.toggle(state, active);
    } else {
      for (const key in state) {
        this.element.classList.toggle(`${prefix}-${key}`, active && state[key]);
      }
    }
  }
};
CustomElement.define({
  name: "au-viewport",
  injectable: ParentViewport,
  bindables: ["name", "usedBy", "default", "fallback", "fallbackAction", "noScope", "noLink", "noTitle", "noHistory", "stateful"]
}, ViewportCustomElement);
var ParentViewportScope = CustomElement.createInjectable();
var ViewportScopeCustomElement = class {
  constructor() {
    this.name = "default";
    this.catches = "";
    this.collection = false;
    this.source = null;
    this.viewportScope = null;
    this.isBound = false;
    this.router = resolve(IRouter);
    this.element = resolve(INode);
    this.container = resolve(IContainer);
    this.parent = resolve(ParentViewportScope);
    this.parentController = resolve(IController);
  }
  // Maybe this really should be here. Check with Binh.
  // public create(
  //   controller: IDryCustomElementController<this>,
  //   parentContainer: IContainer,
  //   definition: CustomElementDefinition,
  //   parts: PartialCustomElementDefinitionParts | undefined,
  // ): PartialCustomElementDefinition {
  //   // TODO(fkleuver): describe this somewhere in the docs instead
  //   // Under the condition that there is no `replace` attribute on this custom element's declaration,
  //   // and this custom element is containerless, its content will be placed in a part named 'default'
  //   // See packages/jit-html/src/template-binder.ts line 411 (`replace = 'default';`) for the logic that governs this.
  //   // We could tidy this up into a formal api in the future. For now, there are two ways to do this:
  //   // 1. inject the `@IInstruction` (IHydrateElementInstruction) and grab .parts['default'] from there, manually creating a view factory from that, etc.
  //   // 2. what we're doing right here: grab the 'default' part from the create hook and return it as the definition, telling the render context to use that part to compile this element instead
  //   // This effectively causes this element to render its declared content as if it was its own template.
  //   // We do need to set `containerless` to true on the part definition so that the correct projector is used since parts default to non-containerless.
  //   // Otherwise, the controller will try to do `appendChild` on a comment node when it has to do `insertBefore`.
  //   // Also, in this particular scenario (specific to viewport-scope) we need to clone the part so as to prevent the resulting compiled definition
  //   // from ever being cached. That's the only reason why we're spreading the part into a new object for `getOrCreate`. If we didn't clone the object, this specific element wouldn't work correctly.
  //   const part = parts!['default'];
  //   return CustomElementDefinition.getOrCreate({ ...part, containerless: true });
  // }
  hydrated(controller) {
    this.controller = controller;
  }
  bound(_initiator, _parent) {
    this.isBound = true;
    this.$controller.scope = this.parentController.scope;
    this.connect();
    if (this.viewportScope !== null) {
      this.viewportScope.binding();
    }
  }
  unbinding(_initiator, _parent) {
    if (this.viewportScope !== null) {
      this.viewportScope.unbinding();
    }
    return Promise.resolve();
  }
  connect() {
    if (this.router.rootScope === null) {
      return;
    }
    const name = this.getAttribute("name", this.name);
    const options = {};
    let value = this.getAttribute("catches", this.catches);
    if (value !== void 0) {
      options.catches = value;
    }
    value = this.getAttribute("collection", this.collection, true);
    if (value !== void 0) {
      options.collection = value;
    }
    options.source = this.source ?? null;
    this.viewportScope = this.router.connectEndpoint(this.viewportScope, "ViewportScope", this, name, options);
  }
  disconnect() {
    if (this.viewportScope) {
      this.router.disconnectEndpoint(null, this.viewportScope, this);
    }
    this.viewportScope = null;
  }
  getAttribute(key, value, checkExists = false) {
    if (this.isBound) {
      return value;
    } else {
      if (this.element.hasAttribute(key)) {
        if (checkExists) {
          return true;
        } else {
          value = this.element.getAttribute(key);
          if (value.length > 0) {
            return value;
          }
        }
      }
    }
    return void 0;
  }
};
CustomElement.define({
  name: "au-viewport-scope",
  template: "<template></template>",
  containerless: false,
  injectable: ParentViewportScope,
  bindables: ["name", "catches", "collection", "source"]
}, ViewportScopeCustomElement);
var LoadCustomAttribute = class {
  constructor() {
    this._separateProperties = false;
    this.hasHref = null;
    this.element = resolve(INode);
    this.router = resolve(IRouter);
    this.linkHandler = resolve(ILinkHandler);
    this.ea = resolve(IEventAggregator);
    this.activeClass = this.router.configuration.options.indicators.loadActive;
    this.navigationEndHandler = (_navigation) => {
      void this.updateActive();
    };
  }
  binding() {
    if (this.value == null) {
      this._separateProperties = true;
    }
    this.element.addEventListener("click", this.linkHandler);
    this.updateValue();
    void this.updateActive();
    this.routerNavigationSubscription = this.ea.subscribe(RouterNavigationEndEvent.eventName, this.navigationEndHandler);
  }
  unbinding() {
    this.element.removeEventListener("click", this.linkHandler);
    this.routerNavigationSubscription.dispose();
  }
  valueChanged(_newValue) {
    this.updateValue();
    void this.updateActive();
  }
  updateValue() {
    if (this._separateProperties) {
      this.value = {
        component: this.component,
        parameters: this.parameters,
        viewport: this.viewport,
        id: this.id
      };
    }
    if (this.hasHref === null) {
      this.hasHref = this.element.hasAttribute("href");
    }
    if (!this.hasHref) {
      let value = this.value;
      if (typeof value !== "string") {
        const instruction2 = RoutingInstruction.from(this.router, value).shift();
        const found = this._findRoute(value);
        if (found.foundConfiguration) {
          instruction2.route = found.matching;
        }
        value = RoutingInstruction.stringify(this.router, [instruction2]);
      }
      const { scope, instruction } = RoutingScope.for(this.element, value);
      const scopePath = (scope == null ? void 0 : scope.path) ?? "";
      value = `${scopePath}${instruction ?? ""}`;
      if (this.router.configuration.options.useUrlFragmentHash && !value.startsWith("#")) {
        value = `#/${value}`;
      }
      this.element.setAttribute("href", value);
    }
  }
  async updateActive() {
    const controller = CustomAttribute.for(this.element, "load").parent;
    const routeValue = typeof this.value === "string" ? { id: this.value, path: this.value } : this.value;
    const found = this._findRoute(routeValue);
    const instructions = found.foundConfiguration ? found.instructions : getConsideredActiveInstructions(this.router, controller, this.element, this.value);
    const element = getLoadIndicator(this.element);
    element.classList.toggle(this.activeClass, this.router.checkActive(instructions, { context: controller }));
  }
  /** @internal */
  _findRoute(value) {
    if (typeof value === "string") {
      return new FoundRoute();
    }
    const scope = RoutingScope.for(this.element).scope ?? this.router.rootScope.scope;
    if (value.id != null) {
      return scope.findMatchingRoute(value.id, value.parameters ?? {});
    }
    const path = value.path;
    if (path != null) {
      return scope.findMatchingRoute(path, value.parameters ?? {});
    }
    return new FoundRoute();
  }
};
CustomAttribute.define({
  name: "load",
  bindables: {
    value: { mode: bmToView },
    component: {},
    parameters: {},
    viewport: {},
    id: {}
  }
}, LoadCustomAttribute);
var HrefCustomAttribute = class {
  constructor() {
    this.element = resolve(INode);
    this.router = resolve(IRouter);
    this.linkHandler = resolve(ILinkHandler);
    this.ea = resolve(IEventAggregator);
    this.activeClass = this.router.configuration.options.indicators.loadActive;
    this.navigationEndHandler = (_navigation) => {
      this.updateActive();
    };
  }
  binding() {
    if (this.router.configuration.options.useHref && !this.hasLoad() && !this.element.hasAttribute("external")) {
      this.element.addEventListener("click", this.linkHandler);
      this.routerNavigationSubscription = this.ea.subscribe(RouterNavigationEndEvent.eventName, this.navigationEndHandler);
    }
    this.updateValue();
    this.updateActive();
  }
  unbinding() {
    var _a;
    this.element.removeEventListener("click", this.linkHandler);
    (_a = this.routerNavigationSubscription) == null ? void 0 : _a.dispose();
  }
  valueChanged() {
    this.updateValue();
    this.updateActive();
  }
  updateValue() {
    this.element.setAttribute("href", this.value);
  }
  updateActive() {
    if (this.router.configuration.options.useHref && !this.hasLoad() && !this.element.hasAttribute("external")) {
      const controller = CustomAttribute.for(this.element, "href").parent;
      const instructions = getConsideredActiveInstructions(this.router, controller, this.element, this.value);
      const element = getLoadIndicator(this.element);
      element.classList.toggle(this.activeClass, this.router.checkActive(instructions, { context: controller }));
    }
  }
  hasLoad() {
    const parent = this.$controller.parent;
    const siblings = parent.children;
    return (siblings == null ? void 0 : siblings.some((c) => c.vmKind === "customAttribute" && c.viewModel instanceof LoadCustomAttribute)) ?? false;
  }
};
HrefCustomAttribute.$au = {
  type: "custom-attribute",
  name: "href",
  noMultiBindings: true,
  bindables: {
    value: { mode: bmToView }
  }
};
var ConsideredActiveCustomAttribute = class {
};
CustomAttribute.define({ name: "considered-active", bindables: { value: { mode: bmToView } } }, ConsideredActiveCustomAttribute);
var IRouterConfiguration = DI.createInterface("IRouterConfiguration", (x) => x.singleton(RouterConfiguration));
var RouterRegistration = IRouter;
var DefaultComponents = [
  RouterRegistration
];
var ViewportCustomElementRegistration = ViewportCustomElement;
var ViewportScopeCustomElementRegistration = ViewportScopeCustomElement;
var LoadCustomAttributeRegistration = LoadCustomAttribute;
var HrefCustomAttributeRegistration = HrefCustomAttribute;
var DefaultResources = [
  ViewportCustomElement,
  ViewportScopeCustomElement,
  LoadCustomAttribute,
  HrefCustomAttribute,
  ConsideredActiveCustomAttribute
];
var RouterConfiguration = class _RouterConfiguration {
  /**
   * Register this configuration in a provided container and
   * register app tasks for starting and stopping the router.
   *
   * @param container - The container to register in
   */
  static register(container) {
    const _this = container.get(IRouterConfiguration);
    _this.options = _RouterConfiguration.options;
    _this.options.setRouterConfiguration(_this);
    _RouterConfiguration.options = RouterOptions.create();
    return container.register(...DefaultComponents, ...DefaultResources, AppTask.activating(IRouter, _RouterConfiguration.configurationCall), AppTask.activated(IRouter, (router) => router.initialLoad()), AppTask.deactivated(IRouter, (router) => router.stop()));
  }
  /**
   * Make it possible to specify options to Router activation.
   *
   * @param config - Either a config object that's passed to router's
   * start or a config function that's called instead of router's start.
   */
  static customize(config) {
    if (config === void 0) {
      _RouterConfiguration.options = RouterOptions.create();
      _RouterConfiguration.configurationCall = (router) => {
        router.start();
      };
    } else if (config instanceof Function) {
      _RouterConfiguration.configurationCall = config;
    } else {
      _RouterConfiguration.options = RouterOptions.create();
      _RouterConfiguration.options.apply(config);
    }
    return _RouterConfiguration;
  }
  /**
   * Create a new container with this configuration applied to it.
   */
  static createContainer() {
    return this.register(DI.createContainer());
  }
  /**
   * Get the router configuration for a context.
   *
   * @param context - The context to get the configuration for
   */
  static for(context) {
    if (context instanceof Router) {
      return context.configuration;
    }
    return context.get(IRouterConfiguration);
  }
  /**
   * Apply router options.
   *
   * @param options - The options to apply
   * @param firstResetDefaults - Whether the default router options should
   * be set before applying the specified options
   */
  apply(options, firstResetDefaults = false) {
    if (firstResetDefaults) {
      this.options = RouterOptions.create();
    }
    this.options.apply(options);
  }
  addHook(hookFunction, options) {
    return RoutingHook.add(hookFunction, options);
  }
  /**
   * Remove a routing hook.
   *
   * @param id - The id of the hook to remove (returned from the addHook call)
   */
  removeHook(id) {
    return RoutingHook.remove(id);
  }
  /**
   * Remove all routing hooks.
   */
  removeAllHooks() {
    return RoutingHook.removeAll();
  }
};
RouterConfiguration.options = RouterOptions.create();
RouterConfiguration.configurationCall = (router) => {
  router.start();
};
export {
  ConfigurableRoute2 as ConfigurableRoute,
  ConsideredActiveCustomAttribute,
  DefaultComponents,
  DefaultResources,
  Endpoint$1 as Endpoint,
  EndpointContent,
  FoundRoute,
  HrefCustomAttribute,
  HrefCustomAttributeRegistration,
  ILinkHandler,
  IRouter,
  IRouterConfiguration,
  InstructionParameters,
  LinkHandler,
  LoadCustomAttribute,
  LoadCustomAttributeRegistration,
  Navigation,
  NavigationCoordinator,
  NavigationFlags,
  Navigator,
  RecognizedRoute2 as RecognizedRoute,
  Endpoint3 as RecognizerEndpoint,
  Route,
  RouteRecognizer2 as RouteRecognizer,
  Router,
  RouterConfiguration,
  RouterNavigationCancelEvent,
  RouterNavigationCompleteEvent,
  RouterNavigationEndEvent,
  RouterNavigationErrorEvent,
  RouterNavigationStartEvent,
  RouterOptions,
  RouterRegistration,
  RouterStartEvent,
  RouterStopEvent,
  Routes,
  RoutingHook,
  RoutingInstruction,
  RoutingScope,
  Runner,
  Step,
  Viewport,
  ViewportContent,
  ViewportCustomElement,
  ViewportCustomElementRegistration,
  ViewportOptions,
  ViewportScope,
  ViewportScopeContent,
  ViewportScopeCustomElement,
  ViewportScopeCustomElementRegistration,
  route,
  routes
};
//# sourceMappingURL=@aurelia_router.js.map
