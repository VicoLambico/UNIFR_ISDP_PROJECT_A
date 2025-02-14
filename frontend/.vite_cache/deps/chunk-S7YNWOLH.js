import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-OFI5MVGH.js";

// node_modules/@aurelia/runtime-html/dist/esm/index.dev.mjs
var import_dist22 = __toESM(require_dist(), 1);
var import_dist23 = __toESM(require_dist2(), 1);
var import_dist24 = __toESM(require_dist3(), 1);

// node_modules/@aurelia/kernel/dist/esm/index.dev.mjs
var import_dist4 = __toESM(require_dist(), 1);
var import_dist5 = __toESM(require_dist2(), 1);
var import_dist6 = __toESM(require_dist3(), 1);

// node_modules/@aurelia/metadata/dist/esm/index.dev.mjs
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
function initializeTC39Metadata() {
  Symbol.metadata ?? (Symbol.metadata = Symbol.for("Symbol.metadata"));
}
var Metadata = {
  get(key, type) {
    var _a3;
    return (_a3 = type[Symbol.metadata]) == null ? void 0 : _a3[key];
  },
  define(value, type, ...keys) {
    var _a3;
    let metadata = (_a3 = Object.getOwnPropertyDescriptor(type, Symbol.metadata)) == null ? void 0 : _a3.value;
    if (metadata == null) {
      Object.defineProperty(type, Symbol.metadata, { value: metadata = /* @__PURE__ */ Object.create(null), enumerable: true, configurable: true, writable: true });
    }
    const length = keys.length;
    switch (length) {
      case 0:
        throw new Error("At least one key must be provided");
      case 1:
        metadata[keys[0]] = value;
        return;
      case 2:
        metadata[keys[0]] = metadata[keys[1]] = value;
        return;
      default: {
        for (let i = 0; i < length; ++i) {
          metadata[keys[i]] = value;
        }
        return;
      }
    }
  },
  has(key, type) {
    const metadata = type[Symbol.metadata];
    return metadata == null ? false : key in metadata;
  },
  delete(key, type) {
    const metadata = type[Symbol.metadata];
    if (metadata == null)
      return;
    Reflect.deleteProperty(metadata, key);
    return;
  }
};

// node_modules/@aurelia/kernel/dist/esm/index.dev.mjs
var objectFreeze = Object.freeze;
var objectAssign = Object.assign;
var safeString = String;
var getMetadata = Metadata.get;
Metadata.has;
var defineMetadata = Metadata.define;
var isPromise = (v) => v instanceof Promise;
var isArray = (v) => v instanceof Array;
var isSet = (v) => v instanceof Set;
var isMap = (v) => v instanceof Map;
var isObject = (v) => v instanceof Object;
function isObjectOrFunction(value) {
  return typeof value === "object" && value !== null || typeof value === "function";
}
var isFunction = (v) => typeof v === "function";
var isString = (v) => typeof v === "string";
var isSymbol = (v) => typeof v === "symbol";
var isNumber = (v) => typeof v === "number";
var createLookup = () => /* @__PURE__ */ Object.create(null);
var areEqual = Object.is;
var createMappedError = (code, ...details) => new Error(`AUR${safeString(code).padStart(4, "0")}: ${getMessageByCode(code, ...details)}`);
var errorsMap = {
  [
    1
    /* ErrorNames.no_registration_for_interface */
  ]: `No registration for interface: '{{0}}'`,
  [
    2
    /* ErrorNames.none_resolver_found */
  ]: `'{{0}}' was registered with "none" resolver, are you injecting the right key?`,
  [
    3
    /* ErrorNames.cyclic_dependency */
  ]: `Cyclic dependency found: {{0}}`,
  [
    4
    /* ErrorNames.no_factory */
  ]: `Resolver for {{0}} returned a null factory`,
  [
    5
    /* ErrorNames.invalid_resolver_strategy */
  ]: `Invalid resolver strategy specified: {{0}}. Did you assign an invalid strategy value?`,
  [
    6
    /* ErrorNames.unable_auto_register */
  ]: `Unable to autoregister dependency: {{0}}`,
  [
    7
    /* ErrorNames.resource_already_exists */
  ]: `Resource key "{{0}}" already registered`,
  [
    8
    /* ErrorNames.unable_resolve_key */
  ]: `Unable to resolve key: {{0}}`,
  [
    9
    /* ErrorNames.unable_jit_non_constructor */
  ]: `Attempted to jitRegister something that is not a constructor: '{{0}}'. Did you forget to register this resource?`,
  [
    10
    /* ErrorNames.no_jit_intrinsic_type */
  ]: `Attempted to jitRegister an intrinsic type: "{{0}}". Did you forget to add @inject(Key)`,
  [
    11
    /* ErrorNames.null_resolver_from_register */
  ]: `Invalid resolver, null/undefined returned from the static register method.`,
  [
    12
    /* ErrorNames.no_jit_interface */
  ]: `Attempted to jitRegister an interface: {{0}}`,
  [
    13
    /* ErrorNames.no_instance_provided */
  ]: `Cannot call resolve '{{0}}' before calling prepare or after calling dispose.`,
  [
    14
    /* ErrorNames.null_undefined_key */
  ]: `Key cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?A common cause is circular dependency with bundler, did you accidentally introduce circular dependency into your module graph?`,
  [
    15
    /* ErrorNames.no_construct_native_fn */
  ]: `'{{0}}' is a native function and cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`,
  [
    16
    /* ErrorNames.no_active_container_for_resolve */
  ]: `There is not a currently active container to resolve "{{0}}". Are you trying to "new Class(...)" that has a resolve(...) call?`,
  [
    17
    /* ErrorNames.invalid_new_instance_on_interface */
  ]: `Failed to instantiate '{{0}}' via @newInstanceOf/@newInstanceForScope, there's no registration and no default implementation, or the default implementation does not result in factory for constructing the instances.`,
  [
    18
    /* ErrorNames.event_aggregator_publish_invalid_event_name */
  ]: `Invalid channel name or instance: '{{0}}'.`,
  [
    19
    /* ErrorNames.event_aggregator_subscribe_invalid_event_name */
  ]: `Invalid channel name or type: {{0}}.`,
  [
    20
    /* ErrorNames.first_defined_no_value */
  ]: `No defined value found when calling firstDefined()`,
  [
    21
    /* ErrorNames.invalid_module_transform_input */
  ]: `Invalid module transform input: {{0}}. Expected Promise or Object.`,
  [
    22
    /* ErrorNames.invalid_inject_decorator_usage */
  ]: `The @inject decorator on the target ('{{0}}') type '{{1}}' is not supported.`,
  [
    23
    /* ErrorNames.resource_key_already_registered */
  ]: `Resource key '{{0}}' has already been registered.`
};
var getMessageByCode = (name, ...details) => {
  let cooked = errorsMap[name];
  for (let i = 0; i < details.length; ++i) {
    cooked = cooked.replace(`{{${i}}}`, String(details[i]));
  }
  return cooked;
};
var logError = (...args) => globalThis.console.error(...args);
var isArrayIndex = /* @__PURE__ */ (() => {
  const isNumericLookup = {};
  let result = false;
  let length = 0;
  let ch = 0;
  let i = 0;
  return (value) => {
    switch (typeof value) {
      case "number":
        return value >= 0 && (value | 0) === value;
      case "string":
        result = isNumericLookup[value];
        if (result !== void 0) {
          return result;
        }
        length = value.length;
        if (length === 0) {
          return isNumericLookup[value] = false;
        }
        ch = 0;
        i = 0;
        for (; i < length; ++i) {
          ch = value.charCodeAt(i);
          if (i === 0 && ch === 48 && length > 1 || ch < 48 || ch > 57) {
            return isNumericLookup[value] = false;
          }
        }
        return isNumericLookup[value] = true;
      default:
        return false;
    }
  };
})();
var baseCase = function() {
  const isDigit = objectAssign(createLookup(), {
    "0": true,
    "1": true,
    "2": true,
    "3": true,
    "4": true,
    "5": true,
    "6": true,
    "7": true,
    "8": true,
    "9": true
  });
  const charToKind = (char) => {
    if (char === "") {
      return 0;
    }
    if (char !== char.toUpperCase()) {
      return 3;
    }
    if (char !== char.toLowerCase()) {
      return 2;
    }
    if (isDigit[char] === true) {
      return 1;
    }
    return 0;
  };
  return (input, cb) => {
    const len = input.length;
    if (len === 0) {
      return input;
    }
    let sep = false;
    let output = "";
    let prevKind;
    let curChar = "";
    let curKind = 0;
    let nextChar2 = input.charAt(0);
    let nextKind = charToKind(nextChar2);
    let i = 0;
    for (; i < len; ++i) {
      prevKind = curKind;
      curChar = nextChar2;
      curKind = nextKind;
      nextChar2 = input.charAt(i + 1);
      nextKind = charToKind(nextChar2);
      if (curKind === 0) {
        if (output.length > 0) {
          sep = true;
        }
      } else {
        if (!sep && output.length > 0 && curKind === 2) {
          sep = prevKind === 3 || nextKind === 3;
        }
        output += cb(curChar, sep);
        sep = false;
      }
    }
    return output;
  };
}();
var camelCase = function() {
  const cache = createLookup();
  const callback = (char, sep) => {
    return sep ? char.toUpperCase() : char.toLowerCase();
  };
  return (input) => {
    let output = cache[input];
    if (output === void 0) {
      output = cache[input] = baseCase(input, callback);
    }
    return output;
  };
}();
var pascalCase = function() {
  const cache = createLookup();
  return (input) => {
    let output = cache[input];
    if (output === void 0) {
      output = camelCase(input);
      if (output.length > 0) {
        output = output[0].toUpperCase() + output.slice(1);
      }
      cache[input] = output;
    }
    return output;
  };
}();
var kebabCase = function() {
  const cache = createLookup();
  const callback = (char, sep) => {
    return sep ? `-${char.toLowerCase()}` : char.toLowerCase();
  };
  return (input) => {
    let output = cache[input];
    if (output === void 0) {
      output = cache[input] = baseCase(input, callback);
    }
    return output;
  };
}();
var toArray = (input) => {
  const length = input.length;
  const arr = Array(length);
  let i = 0;
  for (; i < length; ++i) {
    arr[i] = input[i];
  }
  return arr;
};
var bound = (originalMethod, context) => {
  const methodName = context.name;
  context.addInitializer(function() {
    Reflect.defineProperty(this, methodName, {
      value: originalMethod.bind(this),
      writable: true,
      configurable: true,
      enumerable: false
    });
  });
};
var mergeArrays = (...arrays) => {
  const result = [];
  let k = 0;
  const arraysLen = arrays.length;
  let arrayLen = 0;
  let array;
  let i = 0;
  for (; i < arraysLen; ++i) {
    array = arrays[i];
    if (array !== void 0) {
      arrayLen = array.length;
      let j = 0;
      for (; j < arrayLen; ++j) {
        result[k++] = array[j];
      }
    }
  }
  return result;
};
var firstDefined = (...values) => {
  const len = values.length;
  let value;
  let i = 0;
  for (; len > i; ++i) {
    value = values[i];
    if (value !== void 0) {
      return value;
    }
  }
  throw createMappedError(
    20
    /* ErrorNames.first_defined_no_value */
  );
};
var getPrototypeChain = function() {
  const functionPrototype = Function.prototype;
  const getPrototypeOf = Object.getPrototypeOf;
  const cache = /* @__PURE__ */ new WeakMap();
  let proto = functionPrototype;
  let i = 0;
  let chain = void 0;
  return function(Type) {
    chain = cache.get(Type);
    if (chain === void 0) {
      cache.set(Type, chain = [proto = Type]);
      i = 0;
      while ((proto = getPrototypeOf(proto)) !== functionPrototype) {
        chain[++i] = proto;
      }
    }
    return chain;
  };
}();
function toLookup(...objs) {
  return objectAssign(createLookup(), ...objs);
}
var isNativeFunction = /* @__PURE__ */ (() => {
  const lookup2 = /* @__PURE__ */ new WeakMap();
  let isNative = false;
  let sourceText = "";
  let i = 0;
  return (fn) => {
    isNative = lookup2.get(fn);
    if (isNative == null) {
      i = (sourceText = fn.toString()).length;
      isNative = i > 28 && sourceText.indexOf("[native code] }") === i - 15;
      lookup2.set(fn, isNative);
    }
    return isNative;
  };
})();
var onResolve = (maybePromise, resolveCallback) => {
  if (isPromise(maybePromise)) {
    return maybePromise.then(resolveCallback);
  }
  return resolveCallback(maybePromise);
};
var onResolveAll = (...maybePromises) => {
  let maybePromise = void 0;
  let firstPromise = void 0;
  let promises = void 0;
  let i = 0;
  let ii = maybePromises.length;
  for (; i < ii; ++i) {
    maybePromise = maybePromises[i];
    if (isPromise(maybePromise = maybePromises[i])) {
      if (firstPromise === void 0) {
        firstPromise = maybePromise;
      } else if (promises === void 0) {
        promises = [firstPromise, maybePromise];
      } else {
        promises.push(maybePromise);
      }
    }
  }
  if (promises === void 0) {
    return firstPromise;
  }
  return Promise.all(promises);
};
var instanceRegistration = (key, value) => new Resolver(key, 0, value);
var singletonRegistration = (key, value) => new Resolver(key, 1, value);
var transientRegistation = (key, value) => new Resolver(key, 2, value);
var callbackRegistration = (key, callback) => new Resolver(key, 3, callback);
var cachedCallbackRegistration = (key, callback) => new Resolver(key, 3, cacheCallbackResult(callback));
var aliasToRegistration = (originalKey, aliasKey) => new Resolver(aliasKey, 5, originalKey);
var deferRegistration = (key, ...params) => new ParameterizedRegistry(key, params);
var containerLookup = /* @__PURE__ */ new WeakMap();
var cacheCallbackResult = (fun) => {
  return (handler, requestor, resolver) => {
    let resolverLookup = containerLookup.get(handler);
    if (resolverLookup === void 0) {
      containerLookup.set(handler, resolverLookup = /* @__PURE__ */ new WeakMap());
    }
    if (resolverLookup.has(resolver)) {
      return resolverLookup.get(resolver);
    }
    const t = fun(handler, requestor, resolver);
    resolverLookup.set(resolver, t);
    return t;
  };
};
var Registration = {
  /**
   * allows you to pass an instance.
   * Every time you request this {@linkcode Key} you will get this instance back.
   * ```
   * Registration.instance(Foo, new Foo()));
   * ```
   *
   * @param key - key to register the instance with
   * @param value - the instance associated with the key
   */
  instance: instanceRegistration,
  /**
   * Creates an instance from the class.
   * Every time you request this {@linkcode Key} you will get the same one back.
   * ```
   * Registration.singleton(Foo, Foo);
   * ```
   *
   * @param key - key to register the singleton class with
   * @param value - the singleton class to instantiate when a container resolves the associated key
   */
  singleton: singletonRegistration,
  /**
   * Creates an instance from a class.
   * Every time you request this {@linkcode Key} you will get a new instance.
   * ```
   * Registration.instance(Foo, Foo);
   * ```
   *
   * @param key - key to register the transient class with
   * @param value - the class to instantiate when a container resolves the associated key
   */
  transient: transientRegistation,
  /**
   * Creates an instance from the method passed.
   * Every time you request this {@linkcode Key} you will get a new instance.
   * ```
   * Registration.callback(Foo, () => new Foo());
   * Registration.callback(Bar, (c: IContainer) => new Bar(c.get(Foo)));
   * ```
   *
   * @param key - key to register the callback with
   * @param callback - the callback to invoke when a container resolves the associated key
   */
  callback: callbackRegistration,
  /**
   * Creates an instance from the method passed.
   * On the first request for the {@linkcode Key} your callback is called and returns an instance.
   * subsequent requests for the {@linkcode Key}, the initial instance returned will be returned.
   * If you pass the same {@linkcode Registration} to another container the same cached value will be used.
   * Should all references to the resolver returned be removed, the cache will expire.
   * ```
   * Registration.cachedCallback(Foo, () => new Foo());
   * Registration.cachedCallback(Bar, (c: IContainer) => new Bar(c.get(Foo)));
   * ```
   *
   * @param key - key to register the cached callback with
   * @param callback - the cache callback to invoke when a container resolves the associated key
   */
  cachedCallback: cachedCallbackRegistration,
  /**
   * creates an alternate {@linkcode Key} to retrieve an instance by.
   * Returns the same scope as the original {@linkcode Key}.
   * ```
   * Register.singleton(Foo, Foo)
   * Register.aliasTo(Foo, MyFoos);
   *
   * container.getAll(MyFoos) // contains an instance of Foo
   * ```
   *
   * @param originalKey - the real key to resolve the get call from a container
   * @param aliasKey - the key that a container allows to resolve the real key associated
   */
  aliasTo: aliasToRegistration,
  /**
   * @internal
   * @param key - the key to register a defer registration
   * @param params - the parameters that should be passed to the resolution of the key
   */
  defer: deferRegistration
};
var createImplementationRegister = function(key) {
  return function register(container) {
    container.register(singletonRegistration(this, this), aliasToRegistration(this, key));
  };
};
var annoBaseName = "au:annotation";
var getAnnotationKeyFor = (name, context) => {
  if (context === void 0) {
    return `${annoBaseName}:${name}`;
  }
  return `${annoBaseName}:${name}:${context}`;
};
var appendAnnotation = (target, key) => {
  const keys = getMetadata(annoBaseName, target);
  if (keys === void 0) {
    defineMetadata([key], target, annoBaseName);
  } else {
    keys.push(key);
  }
};
var annotation = objectFreeze({
  name: "au:annotation",
  appendTo: appendAnnotation,
  set(target, prop, value) {
    defineMetadata(value, target, getAnnotationKeyFor(prop));
  },
  get: (target, prop) => getMetadata(getAnnotationKeyFor(prop), target),
  getKeys(target) {
    let keys = getMetadata(annoBaseName, target);
    if (keys === void 0) {
      defineMetadata(keys = [], target, annoBaseName);
    }
    return keys;
  },
  isKey: (key) => key.startsWith(annoBaseName),
  keyFor: getAnnotationKeyFor
});
var resourceBaseName = "au:resource";
var getResourceKeyFor = (type, name, context) => {
  if (name == null) {
    return `${resourceBaseName}:${type}`;
  }
  if (context == null) {
    return `${resourceBaseName}:${type}:${name}`;
  }
  return `${resourceBaseName}:${type}:${name}:${context}`;
};
var Protocol = {
  annotation
};
var hasOwn = Object.prototype.hasOwnProperty;
function fromAnnotationOrDefinitionOrTypeOrDefault(name, def2, Type, getDefault) {
  let value = getMetadata(getAnnotationKeyFor(name), Type);
  if (value === void 0) {
    value = def2[name];
    if (value === void 0) {
      value = Type[name];
      if (value === void 0 || !hasOwn.call(Type, name)) {
        return getDefault();
      }
      return value;
    }
    return value;
  }
  return value;
}
function fromAnnotationOrTypeOrDefault(name, Type, getDefault) {
  let value = getMetadata(getAnnotationKeyFor(name), Type);
  if (value === void 0) {
    value = Type[name];
    if (value === void 0 || !hasOwn.call(Type, name)) {
      return getDefault();
    }
    return value;
  }
  return value;
}
function fromDefinitionOrDefault(name, def2, getDefault) {
  const value = def2[name];
  if (value === void 0) {
    return getDefault();
  }
  return value;
}
var registrableMetadataKey = Symbol.for("au:registrable");
var DefaultResolver = {
  none(key) {
    throw createMappedError(2, key);
  },
  singleton: (key) => new Resolver(key, 1, key),
  transient: (key) => new Resolver(key, 2, key)
};
var ContainerConfiguration = class _ContainerConfiguration {
  constructor(inheritParentResources, defaultResolver) {
    this.inheritParentResources = inheritParentResources;
    this.defaultResolver = defaultResolver;
  }
  static from(config) {
    if (config === void 0 || config === _ContainerConfiguration.DEFAULT) {
      return _ContainerConfiguration.DEFAULT;
    }
    return new _ContainerConfiguration(config.inheritParentResources ?? false, config.defaultResolver ?? DefaultResolver.singleton);
  }
};
ContainerConfiguration.DEFAULT = ContainerConfiguration.from({});
var createContainer = (config) => new Container(null, ContainerConfiguration.from(config));
var InstrinsicTypeNames = new Set("Array ArrayBuffer Boolean DataView Date Error EvalError Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Number Object Promise RangeError ReferenceError RegExp Set SharedArrayBuffer String SyntaxError TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array URIError WeakMap WeakSet".split(" "));
var containerId = 0;
var currentContainer = null;
var Container = class _Container {
  get depth() {
    return this._parent === null ? 0 : this._parent.depth + 1;
  }
  get parent() {
    return this._parent;
  }
  constructor(parent, config) {
    this.id = ++containerId;
    this._registerDepth = 0;
    this._disposableResolvers = /* @__PURE__ */ new Map();
    this._parent = parent;
    this.config = config;
    this._resolvers = /* @__PURE__ */ new Map();
    this.res = {};
    if (parent === null) {
      this.root = this;
      this._factories = /* @__PURE__ */ new Map();
    } else {
      this.root = parent.root;
      this._factories = parent._factories;
      if (config.inheritParentResources) {
        for (const key in parent.res) {
          this.registerResolver(key, parent.res[key]);
        }
      }
    }
    this._resolvers.set(IContainer, containerResolver);
  }
  register(...params) {
    var _a3, _b3, _c3, _d2;
    if (++this._registerDepth === 100) {
      throw createMappedError(6, ...params);
    }
    let current;
    let keys;
    let value;
    let j;
    let jj;
    let i = 0;
    let ii = params.length;
    let def2;
    for (; i < ii; ++i) {
      current = params[i];
      if (!isObjectOrFunction(current)) {
        continue;
      }
      if (isRegistry(current)) {
        current.register(this);
      } else if ((def2 = getMetadata(resourceBaseName, current)) != null) {
        def2.register(this);
      } else if (isClass(current)) {
        const registrable = (_a3 = current[Symbol.metadata]) == null ? void 0 : _a3[registrableMetadataKey];
        if (isRegistry(registrable)) {
          registrable.register(this);
        } else if (isString((_b3 = current.$au) == null ? void 0 : _b3.type)) {
          const $au = current.$au;
          const aliases = (current.aliases ?? emptyArray).concat($au.aliases ?? emptyArray);
          let key = `${resourceBaseName}:${$au.type}:${$au.name}`;
          if (this.has(key, false)) {
            {
              (_c3 = globalThis.console) == null ? void 0 : _c3.warn(createMappedError(7, key));
            }
            continue;
          }
          aliasToRegistration(current, key).register(this);
          if (!this.has(current, false)) {
            singletonRegistration(current, current).register(this);
          }
          j = 0;
          jj = aliases.length;
          for (; j < jj; ++j) {
            key = `${resourceBaseName}:${$au.type}:${aliases[j]}`;
            if (this.has(key, false)) {
              {
                (_d2 = globalThis.console) == null ? void 0 : _d2.warn(createMappedError(7, key));
              }
              continue;
            }
            aliasToRegistration(current, key).register(this);
          }
        } else {
          singletonRegistration(current, current).register(this);
        }
      } else {
        keys = Object.keys(current);
        j = 0;
        jj = keys.length;
        for (; j < jj; ++j) {
          value = current[keys[j]];
          if (!isObjectOrFunction(value)) {
            continue;
          }
          if (isRegistry(value)) {
            value.register(this);
          } else {
            this.register(value);
          }
        }
      }
    }
    --this._registerDepth;
    return this;
  }
  registerResolver(key, resolver, isDisposable = false) {
    validateKey(key);
    const resolvers = this._resolvers;
    const result = resolvers.get(key);
    if (result == null) {
      resolvers.set(key, resolver);
      if (isResourceKey(key)) {
        if (this.res[key] !== void 0) {
          throw createMappedError(7, key);
        }
        this.res[key] = resolver;
      }
    } else if (result instanceof Resolver && result._strategy === 4) {
      result._state.push(resolver);
    } else {
      resolvers.set(key, new Resolver(key, 4, [result, resolver]));
    }
    if (isDisposable) {
      this._disposableResolvers.set(key, resolver);
    }
    return resolver;
  }
  deregister(key) {
    validateKey(key);
    const resolver = this._resolvers.get(key);
    if (resolver != null) {
      this._resolvers.delete(key);
      if (isResourceKey(key)) {
        delete this.res[key];
      }
      if (this._disposableResolvers.has(key)) {
        resolver.dispose();
        this._disposableResolvers.delete(key);
      }
    }
  }
  // public deregisterResolverFor<K extends Key>(key: K, searchAncestors: boolean): void {
  //   validateKey(key);
  //   // eslint-disable-next-line @typescript-eslint/no-this-alias
  //   let current: Container | null = this;
  //   let resolver: IResolver | undefined;
  //   while (current != null) {
  //     resolver = current._resolvers.get(key);
  //     if (resolver != null) {
  //       current._resolvers.delete(key);
  //       break;
  //     }
  //     if (current.parent == null) { return; }
  //     current = searchAncestors ? current.parent : null;
  //   }
  //   if (resolver == null) { return; }
  //   if (resolver instanceof Resolver && resolver.strategy === ResolverStrategy.array) {
  //     throw createError('Cannot deregister a resolver with array strategy');
  //   }
  //   if (this._disposableResolvers.has(resolver as IDisposableResolver<K>)) {
  //     (resolver as IDisposableResolver<K>).dispose();
  //   }
  //   if (isResourceKey(key)) {
  //     // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
  //     delete this.res[key];
  //   }
  // }
  registerTransformer(key, transformer) {
    const resolver = this.getResolver(key);
    if (resolver == null) {
      return false;
    }
    if (resolver.getFactory) {
      const factory2 = resolver.getFactory(this);
      if (factory2 == null) {
        return false;
      }
      factory2.registerTransformer(transformer);
      return true;
    }
    return false;
  }
  getResolver(key, autoRegister = true) {
    validateKey(key);
    if (key.resolve !== void 0) {
      return key;
    }
    const previousContainer = currentContainer;
    let current = currentContainer = this;
    let resolver;
    let handler;
    try {
      while (current != null) {
        resolver = current._resolvers.get(key);
        if (resolver == null) {
          if (current._parent == null) {
            handler = isRegisterInRequester(key) ? this : current;
            if (autoRegister) {
              return this._jitRegister(key, handler);
            }
            return null;
          }
          current = current._parent;
        } else {
          return resolver;
        }
      }
    } finally {
      currentContainer = previousContainer;
    }
    return null;
  }
  has(key, searchAncestors = false) {
    var _a3;
    return this._resolvers.has(key) || isResourceKey(key) && key in this.res || ((searchAncestors && ((_a3 = this._parent) == null ? void 0 : _a3.has(key, true))) ?? false);
  }
  get(key) {
    validateKey(key);
    if (key.$isResolver) {
      return key.resolve(this, this);
    }
    const previousContainer = currentContainer;
    let current = currentContainer = this;
    let resolver;
    let handler;
    try {
      while (current != null) {
        resolver = current._resolvers.get(key);
        if (resolver == null) {
          if (current._parent == null) {
            handler = isRegisterInRequester(key) ? this : current;
            resolver = this._jitRegister(key, handler);
            return resolver.resolve(current, this);
          }
          current = current._parent;
        } else {
          return resolver.resolve(current, this);
        }
      }
    } finally {
      currentContainer = previousContainer;
    }
    throw createMappedError(8, key);
  }
  getAll(key, searchAncestors = false) {
    validateKey(key);
    const previousContainer = currentContainer;
    const requestor = currentContainer = this;
    let current = requestor;
    let resolver;
    let resolutions = emptyArray;
    try {
      if (searchAncestors) {
        while (current != null) {
          resolver = current._resolvers.get(key);
          if (resolver != null) {
            resolutions = resolutions.concat(buildAllResponse(resolver, current, requestor));
          }
          current = current._parent;
        }
        return resolutions;
      }
      while (current != null) {
        resolver = current._resolvers.get(key);
        if (resolver == null) {
          current = current._parent;
          if (current == null) {
            return emptyArray;
          }
        } else {
          return buildAllResponse(resolver, current, requestor);
        }
      }
    } finally {
      currentContainer = previousContainer;
    }
    return emptyArray;
  }
  invoke(Type, dynamicDependencies) {
    if (isNativeFunction(Type)) {
      throw createMappedError(15, Type);
    }
    const previousContainer = currentContainer;
    currentContainer = this;
    {
      let resolvedDeps;
      let dep;
      try {
        resolvedDeps = getDependencies(Type).map((_) => this.get(dep = _));
      } catch (ex) {
        logError(`[DEV:aurelia] Error during construction of ${!Type.name ? `(Anonymous) ${String(Type)}` : Type.name}, caused by dependency: ${String(dep)}`);
        currentContainer = previousContainer;
        throw ex;
      }
      try {
        return dynamicDependencies === void 0 ? new Type(...resolvedDeps) : new Type(...resolvedDeps, ...dynamicDependencies);
      } catch (ex) {
        logError(`[DEV:aurelia] Error during construction of ${!Type.name ? `(Anonymous) ${String(Type)}` : Type.name}`);
        throw ex;
      } finally {
        currentContainer = previousContainer;
      }
    }
    try {
      return dynamicDependencies === void 0 ? new Type(...getDependencies(Type).map(containerGetKey, this)) : new Type(...getDependencies(Type).map(containerGetKey, this), ...dynamicDependencies);
    } finally {
      currentContainer = previousContainer;
    }
  }
  hasFactory(key) {
    return this._factories.has(key);
  }
  getFactory(Type) {
    let factory2 = this._factories.get(Type);
    if (factory2 === void 0) {
      if (isNativeFunction(Type)) {
        throw createMappedError(15, Type);
      }
      this._factories.set(Type, factory2 = new Factory(Type, getDependencies(Type)));
    }
    return factory2;
  }
  registerFactory(key, factory2) {
    this._factories.set(key, factory2);
  }
  createChild(config) {
    if (config === void 0 && this.config.inheritParentResources) {
      if (this.config === ContainerConfiguration.DEFAULT) {
        return new _Container(this, this.config);
      }
      return new _Container(this, ContainerConfiguration.from({
        ...this.config,
        inheritParentResources: false
      }));
    }
    return new _Container(this, ContainerConfiguration.from(config ?? this.config));
  }
  disposeResolvers() {
    var _a3;
    const resolvers = this._resolvers;
    const disposableResolvers = this._disposableResolvers;
    let disposable;
    let key;
    for ([key, disposable] of disposableResolvers.entries()) {
      (_a3 = disposable.dispose) == null ? void 0 : _a3.call(disposable);
      resolvers.delete(key);
    }
    disposableResolvers.clear();
  }
  useResources(container) {
    const res = container.res;
    for (const key in res) {
      this.registerResolver(key, res[key]);
    }
  }
  find(keyOrKind, name) {
    var _a3, _b3;
    const key = isString(name) ? `${resourceBaseName}:${keyOrKind}:${name}` : keyOrKind;
    let container = this;
    let resolver = container.res[key];
    if (resolver == null) {
      container = container.root;
      resolver = container.res[key];
    }
    if (resolver == null) {
      return null;
    }
    return ((_b3 = (_a3 = resolver.getFactory) == null ? void 0 : _a3.call(resolver, container)) == null ? void 0 : _b3.Type) ?? null;
  }
  dispose() {
    if (this._disposableResolvers.size > 0) {
      this.disposeResolvers();
    }
    this._resolvers.clear();
    if (this.root === this) {
      this._factories.clear();
      this.res = {};
    }
  }
  /** @internal */
  _jitRegister(keyAsValue, handler) {
    const $isRegistry = isRegistry(keyAsValue);
    if (!isFunction(keyAsValue) && !$isRegistry) {
      throw createMappedError(9, keyAsValue);
    }
    if (InstrinsicTypeNames.has(keyAsValue.name)) {
      throw createMappedError(10, keyAsValue);
    }
    if ($isRegistry) {
      const registrationResolver = keyAsValue.register(handler, keyAsValue);
      if (!(registrationResolver instanceof Object) || registrationResolver.resolve == null) {
        const newResolver = handler._resolvers.get(keyAsValue);
        if (newResolver != null) {
          return newResolver;
        }
        throw createMappedError(11, keyAsValue);
      }
      return registrationResolver;
    }
    if (keyAsValue.$isInterface) {
      throw createMappedError(12, keyAsValue.friendlyName);
    }
    const resolver = this.config.defaultResolver(keyAsValue, handler);
    handler._resolvers.set(keyAsValue, resolver);
    return resolver;
  }
};
var Factory = class {
  constructor(Type, dependencies) {
    this.Type = Type;
    this.dependencies = dependencies;
    this.transformers = null;
  }
  construct(container, dynamicDependencies) {
    const previousContainer = currentContainer;
    currentContainer = container;
    let instance;
    {
      let resolvedDeps;
      let dep;
      try {
        resolvedDeps = this.dependencies.map((_) => container.get(dep = _));
      } catch (ex) {
        logError(`[DEV:aurelia] Error during construction of ${!this.Type.name ? `(Anonymous) ${String(this.Type)}` : this.Type.name}, caused by dependency: ${String(dep)}`);
        currentContainer = previousContainer;
        throw ex;
      }
      try {
        if (dynamicDependencies === void 0) {
          instance = new this.Type(...resolvedDeps);
        } else {
          instance = new this.Type(...resolvedDeps, ...dynamicDependencies);
        }
        if (this.transformers == null) {
          return instance;
        }
        return this.transformers.reduce(transformInstance, instance);
      } catch (ex) {
        logError(`[DEV:aurelia] Error during construction of ${!this.Type.name ? `(Anonymous) ${String(this.Type)}` : this.Type.name}`);
        throw ex;
      } finally {
        currentContainer = previousContainer;
      }
    }
    try {
      if (dynamicDependencies === void 0) {
        instance = new this.Type(...this.dependencies.map(containerGetKey, container));
      } else {
        instance = new this.Type(...this.dependencies.map(containerGetKey, container), ...dynamicDependencies);
      }
      if (this.transformers == null) {
        return instance;
      }
      return this.transformers.reduce(transformInstance, instance);
    } finally {
      currentContainer = previousContainer;
    }
  }
  registerTransformer(transformer) {
    (this.transformers ?? (this.transformers = [])).push(transformer);
  }
};
function transformInstance(inst, transform) {
  return transform(inst);
}
function validateKey(key) {
  if (key === null || key === void 0) {
    throw createMappedError(
      14
      /* ErrorNames.null_undefined_key */
    );
  }
}
function containerGetKey(d) {
  return this.get(d);
}
function resolve(...keys) {
  if (currentContainer == null) {
    throw createMappedError(16, ...keys);
  }
  {
    if (keys.length === 1) {
      try {
        return currentContainer.get(keys[0]);
      } catch (ex) {
        logError(`[DEV:aurelia] resolve() call error for: ${String(keys[0])}`);
        throw ex;
      }
    } else {
      let key;
      try {
        return keys.map((_) => currentContainer.get(key = _));
      } catch (ex) {
        logError(`[DEV:aurelia] resolve() call error for: ${String(key)}`);
        throw ex;
      }
    }
  }
  return keys.length === 1 ? currentContainer.get(keys[0]) : keys.map(containerGetKey, currentContainer);
}
var buildAllResponse = (resolver, handler, requestor) => {
  if (resolver instanceof Resolver && resolver._strategy === 4) {
    const state = resolver._state;
    const ii = state.length;
    const results = Array(ii);
    let i = 0;
    for (; i < ii; ++i) {
      results[i] = state[i].resolve(handler, requestor);
    }
    return results;
  }
  return [resolver.resolve(handler, requestor)];
};
var containerResolver = {
  $isResolver: true,
  resolve(handler, requestor) {
    return requestor;
  }
};
var isRegistry = (obj) => isFunction(obj == null ? void 0 : obj.register);
var isSelfRegistry = (obj) => isRegistry(obj) && typeof obj.registerInRequestor === "boolean";
var isRegisterInRequester = (obj) => isSelfRegistry(obj) && obj.registerInRequestor;
var isClass = (obj) => obj.prototype !== void 0;
var isResourceKey = (key) => isString(key) && key.indexOf(":") > 0;
var ResolverBuilder = class {
  constructor(_container, _key) {
    this._container = _container;
    this._key = _key;
  }
  instance(value) {
    return this._registerResolver(0, value);
  }
  singleton(value) {
    return this._registerResolver(1, value);
  }
  transient(value) {
    return this._registerResolver(2, value);
  }
  callback(value) {
    return this._registerResolver(3, value);
  }
  cachedCallback(value) {
    return this._registerResolver(3, cacheCallbackResult(value));
  }
  aliasTo(destinationKey) {
    return this._registerResolver(5, destinationKey);
  }
  /** @internal */
  _registerResolver(strategy, state) {
    const { _container: container, _key: key } = this;
    this._container = this._key = void 0;
    return container.registerResolver(key, new Resolver(key, strategy, state));
  }
};
var cloneArrayWithPossibleProps = (source) => {
  const clone = source.slice();
  const keys = Object.keys(source);
  const len = keys.length;
  let key;
  for (let i = 0; i < len; ++i) {
    key = keys[i];
    if (!isArrayIndex(key)) {
      clone[key] = source[key];
    }
  }
  return clone;
};
var diParamTypesKeys = getAnnotationKeyFor("di:paramtypes");
var getAnnotationParamtypes = (Type) => {
  return getMetadata(diParamTypesKeys, Type);
};
var getDesignParamtypes = (Type) => getMetadata("design:paramtypes", Type);
var getOrCreateAnnotationParamTypes = (context) => {
  var _a3;
  return (_a3 = context.metadata)[diParamTypesKeys] ?? (_a3[diParamTypesKeys] = []);
};
var getDependencies = (Type) => {
  const key = getAnnotationKeyFor("di:dependencies");
  let dependencies = getMetadata(key, Type);
  if (dependencies === void 0) {
    const inject2 = Type.inject;
    if (inject2 === void 0) {
      const designParamtypes = getDesignParamtypes(Type);
      const annotationParamtypes = getAnnotationParamtypes(Type);
      if (designParamtypes === void 0) {
        if (annotationParamtypes === void 0) {
          const Proto = Object.getPrototypeOf(Type);
          if (isFunction(Proto) && Proto !== Function.prototype) {
            dependencies = cloneArrayWithPossibleProps(getDependencies(Proto));
          } else {
            dependencies = [];
          }
        } else {
          dependencies = cloneArrayWithPossibleProps(annotationParamtypes);
        }
      } else if (annotationParamtypes === void 0) {
        dependencies = cloneArrayWithPossibleProps(designParamtypes);
      } else {
        dependencies = cloneArrayWithPossibleProps(designParamtypes);
        let len = annotationParamtypes.length;
        let auAnnotationParamtype;
        let i = 0;
        for (; i < len; ++i) {
          auAnnotationParamtype = annotationParamtypes[i];
          if (auAnnotationParamtype !== void 0) {
            dependencies[i] = auAnnotationParamtype;
          }
        }
        const keys = Object.keys(annotationParamtypes);
        let key2;
        i = 0;
        len = keys.length;
        for (i = 0; i < len; ++i) {
          key2 = keys[i];
          if (!isArrayIndex(key2)) {
            dependencies[key2] = annotationParamtypes[key2];
          }
        }
      }
    } else {
      dependencies = cloneArrayWithPossibleProps(inject2);
    }
    defineMetadata(dependencies, Type, key);
  }
  return dependencies;
};
var createInterface = (configureOrName, configuror) => {
  const configure = isFunction(configureOrName) ? configureOrName : configuror;
  const friendlyName = (isString(configureOrName) ? configureOrName : void 0) ?? "(anonymous)";
  const Interface = {
    // Old code kept with the hope that the argument decorator proposal will be standardized by TC39 (https://github.com/tc39/proposal-class-method-parameter-decorators)
    // function(_target: Injectable | AbstractInjectable, _property: string | symbol | undefined, _index: number | undefined): void {
    //    if (target == null || new.target !== undefined) {
    //     throw createMappedError(ErrorNames.no_registration_for_interface, friendlyName);
    //    }
    //    const annotationParamtypes = getOrCreateAnnotationParamTypes(target as Injectable);
    //    annotationParamtypes[index!] = Interface;
    // },
    $isInterface: true,
    friendlyName,
    toString: () => `InterfaceSymbol<${friendlyName}>`,
    register: configure != null ? (container, key) => configure(new ResolverBuilder(container, key ?? Interface)) : void 0
  };
  return Interface;
};
var inject = (...dependencies) => {
  return (decorated, context) => {
    switch (context.kind) {
      case "class": {
        const annotationParamtypes = getOrCreateAnnotationParamTypes(context);
        let dep;
        let i = 0;
        for (; i < dependencies.length; ++i) {
          dep = dependencies[i];
          if (dep !== void 0) {
            annotationParamtypes[i] = dep;
          }
        }
        break;
      }
      case "field": {
        const annotationParamtypes = getOrCreateAnnotationParamTypes(context);
        const dep = dependencies[0];
        if (dep !== void 0) {
          annotationParamtypes[context.name] = dep;
        }
        break;
      }
      // TODO(sayan): support getter injection - new feature
      // TODO:
      //    support method parameter injection when the class-method-parameter-decorators proposal (https://github.com/tc39/proposal-class-method-parameter-decorators)
      //    reaches stage 4 and/or implemented by TS.
      default:
        throw createMappedError(22, String(context.name), context.kind);
    }
  };
};
var DI = (() => {
  initializeTC39Metadata();
  return {
    createContainer,
    getDesignParamtypes,
    // getAnnotationParamtypes,
    // getOrCreateAnnotationParamTypes,
    getDependencies,
    /**
     * creates a decorator that also matches an interface and can be used as a {@linkcode Key}.
     * ```ts
     * const ILogger = DI.createInterface<Logger>('Logger');
     * container.register(Registration.singleton(ILogger, getSomeLogger()));
     * const log = container.get(ILogger);
     * log.info('hello world');
     * class Foo {
     *   constructor( @ILogger log: ILogger ) {
     *     log.info('hello world');
     *   }
     * }
     * ```
     * you can also build default registrations into your interface.
     * ```ts
     * export const ILogger = DI.createInterface<Logger>('Logger', builder => builder.cachedCallback(LoggerDefault));
     * const log = container.get(ILogger);
     * log.info('hello world');
     * class Foo {
     *   constructor( @ILogger log: ILogger ) {
     *     log.info('hello world');
     *   }
     * }
     * ```
     * but these default registrations won't work the same with other decorators that take keys, for example
     * ```ts
     * export const MyStr = DI.createInterface<string>('MyStr', builder => builder.instance('somestring'));
     * class Foo {
     *   constructor( @optional(MyStr) public readonly str: string ) {
     *   }
     * }
     * container.get(Foo).str; // returns undefined
     * ```
     * to fix this add this line somewhere before you do a `get`
     * ```ts
     * container.register(MyStr);
     * container.get(Foo).str; // returns 'somestring'
     * ```
     *
     * - @param configureOrName - supply a string to improve error messaging
     */
    createInterface,
    inject,
    /**
     * Registers the `target` class as a transient dependency; each time the dependency is resolved
     * a new instance will be created.
     *
     * @param target - The class / constructor function to register as transient.
     * @returns The same class, with a static `register` method that takes a container and returns the appropriate resolver.
     *
     * @example ```ts
     * // On an existing class
     * class Foo { }
     * DI.transient(Foo);
     *
     * // Inline declaration
     * const Foo = DI.transient(class { });
     * // Foo is now strongly typed with register
     * Foo.register(container);
     * ```
     */
    transient(target) {
      target.register = function(container) {
        const registration = transientRegistation(target, target);
        return registration.register(container, target);
      };
      target.registerInRequestor = false;
      return target;
    },
    /**
     * Registers the `target` class as a singleton dependency; the class will only be created once. Each
     * consecutive time the dependency is resolved, the same instance will be returned.
     *
     * @param target - The class / constructor function to register as a singleton.
     * @returns The same class, with a static `register` method that takes a container and returns the appropriate resolver.
     * @example ```ts
     * // On an existing class
     * class Foo { }
     * DI.singleton(Foo);
     *
     * // Inline declaration
     * const Foo = DI.singleton(class { });
     * // Foo is now strongly typed with register
     * Foo.register(container);
     * ```
     */
    singleton(target, options = defaultSingletonOptions) {
      target.register = function(container) {
        const registration = singletonRegistration(target, target);
        return registration.register(container, target);
      };
      target.registerInRequestor = options.scoped;
      return target;
    }
  };
})();
var IContainer = createInterface("IContainer");
var IServiceLocator = IContainer;
function transientDecorator(target, context) {
  return DI.transient(target);
}
function transient(target, context) {
  return target == null ? transientDecorator : transientDecorator(target);
}
var defaultSingletonOptions = { scoped: false };
var decorateSingleton = DI.singleton;
function singleton(targetOrOptions, _context) {
  return isFunction(targetOrOptions) ? decorateSingleton(targetOrOptions) : function($target, _ctx) {
    return decorateSingleton($target, targetOrOptions);
  };
}
var Resolver = class {
  get $isResolver() {
    return true;
  }
  constructor(key, strategy, state) {
    this._resolving = false;
    this._cachedFactory = null;
    this._key = key;
    this._strategy = strategy;
    this._state = state;
  }
  register(container, key) {
    return container.registerResolver(key || this._key, this);
  }
  resolve(handler, requestor) {
    switch (this._strategy) {
      case 0:
        return this._state;
      case 1: {
        if (this._resolving) {
          throw createMappedError(3, this._state.name);
        }
        this._resolving = true;
        this._state = (this._cachedFactory = handler.getFactory(this._state)).construct(requestor);
        this._strategy = 0;
        this._resolving = false;
        return this._state;
      }
      case 2: {
        const factory2 = handler.getFactory(this._state);
        if (factory2 === null) {
          throw createMappedError(4, this._key);
        }
        return factory2.construct(requestor);
      }
      case 3:
        return this._state(handler, requestor, this);
      case 4:
        return this._state[0].resolve(handler, requestor);
      case 5:
        return requestor.get(this._state);
      default:
        throw createMappedError(5, this._strategy);
    }
  }
  getFactory(container) {
    var _a3, _b3;
    switch (this._strategy) {
      case 1:
      case 2:
        return container.getFactory(this._state);
      case 5:
        return ((_b3 = (_a3 = container.getResolver(this._state)) == null ? void 0 : _a3.getFactory) == null ? void 0 : _b3.call(_a3, container)) ?? null;
      case 0:
        return this._cachedFactory;
      default:
        return null;
    }
  }
};
var InstanceProvider = class {
  get friendlyName() {
    return this._name;
  }
  constructor(name, instance = null, Type = null) {
    this._name = name;
    this._instance = instance;
    this._Type = Type;
  }
  prepare(instance) {
    this._instance = instance;
  }
  get $isResolver() {
    return true;
  }
  resolve() {
    if (this._instance == null) {
      throw createMappedError(13, this._name);
    }
    return this._instance;
  }
  getFactory(container) {
    return this._Type == null ? null : container.getFactory(this._Type);
  }
  dispose() {
    this._instance = null;
  }
};
var ParameterizedRegistry = class {
  constructor(key, params) {
    this.key = key;
    this.params = params;
  }
  register(container) {
    if (container.has(this.key, true)) {
      const registry = container.get(this.key);
      registry.register(container, ...this.params);
    } else {
      container.register(...this.params.filter((x) => typeof x === "object"));
    }
  }
};
var emptyArray = objectFreeze([]);
var emptyObject = objectFreeze({});
function noop() {
}
var IPlatform = createInterface("IPlatform");
function createResolver(getter) {
  return function(key) {
    function Resolver2(target, context) {
      inject(Resolver2)(target, context);
    }
    Resolver2.$isResolver = true;
    Resolver2.resolve = function(handler, requestor) {
      return getter(key, handler, requestor);
    };
    return Resolver2;
  };
}
var all = (key, searchAncestors = false) => {
  function resolver(decorated, context) {
    inject(resolver)(decorated, context);
  }
  resolver.$isResolver = true;
  resolver.resolve = (handler, requestor) => requestor.getAll(key, searchAncestors);
  return resolver;
};
var lazy = createResolver((key, handler, requestor) => {
  return () => requestor.get(key);
});
var optional = createResolver((key, handler, requestor) => {
  if (requestor.has(key, true)) {
    return requestor.get(key);
  } else {
    return void 0;
  }
});
var ignore = objectAssign((decorated, context) => {
  inject(ignore)(decorated, context);
}, { $isResolver: true, resolve: () => void 0 });
var factory = createResolver((key, handler, requestor) => {
  return (...args) => handler.getFactory(key).construct(requestor, args);
});
var own = createResolver((key, handler, requestor) => {
  return requestor.has(key, false) ? requestor.get(key) : void 0;
});
var resource = createResolver((key, handler, requestor) => requestor.has(key, false) ? requestor.get(key) : requestor.root.get(key));
var optionalResource = createResolver((key, handler, requestor) => requestor.has(key, false) ? requestor.get(key) : requestor.root.has(key, false) ? requestor.root.get(key) : void 0);
var allResources = createResolver((key, handler, requestor) => (
  // prevent duplicate retrieval
  requestor === requestor.root ? requestor.getAll(key, false) : requestor.has(key, false) ? requestor.getAll(key, false).concat(requestor.root.getAll(key, false)) : requestor.root.getAll(key, false)
));
var newInstanceForScope = createResolver((key, handler, requestor) => {
  const instance = createNewInstance(key, handler, requestor);
  const instanceProvider = new InstanceProvider(safeString(key), instance);
  requestor.registerResolver(key, instanceProvider, true);
  return instance;
});
var newInstanceOf = createResolver((key, handler, requestor) => createNewInstance(key, handler, requestor));
var createNewInstance = (key, handler, requestor) => {
  var _a3, _b3, _c3;
  if (handler.hasFactory(key)) {
    return handler.getFactory(key).construct(requestor);
  }
  if (isInterface(key)) {
    const hasDefault = isFunction(key.register);
    const resolver = handler.getResolver(key, false);
    let factory2;
    if (resolver == null) {
      if (hasDefault) {
        factory2 = (_b3 = (_a3 = (newInstanceContainer ?? (newInstanceContainer = createContainer())).getResolver(key, true)) == null ? void 0 : _a3.getFactory) == null ? void 0 : _b3.call(_a3, handler);
      }
      newInstanceContainer.dispose();
    } else {
      factory2 = (_c3 = resolver.getFactory) == null ? void 0 : _c3.call(resolver, handler);
    }
    if (factory2 != null) {
      return factory2.construct(requestor);
    }
    throw createMappedError(17, key);
  }
  return handler.getFactory(key).construct(requestor);
};
var isInterface = (key) => (key == null ? void 0 : key.$isInterface) === true;
var newInstanceContainer;
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
var trace = 0;
var debug = 1;
var info = 2;
var warn = 3;
var error = 4;
var fatal = 5;
var none = 6;
var LogLevel = objectFreeze({
  /**
   * The most detailed information about internal app state.
   *
   * Disabled by default and should never be enabled in a production environment.
   */
  trace,
  /**
   * Information that is useful for debugging during development and has no long-term value.
   */
  debug,
  /**
   * Information about the general flow of the application that has long-term value.
   */
  info,
  /**
   * Unexpected circumstances that require attention but do not otherwise cause the current flow of execution to stop.
   */
  warn,
  /**
   * Unexpected circumstances that cause the flow of execution in the current activity to stop but do not cause an app-wide failure.
   */
  error,
  /**
   * Unexpected circumstances that cause an app-wide failure or otherwise require immediate attention.
   */
  fatal,
  /**
   * No messages should be written.
   */
  none
});
var ILogConfig = createInterface("ILogConfig", (x) => x.instance(new LogConfig("no-colors", warn)));
var ISink = createInterface("ISink");
var ILogEventFactory = createInterface("ILogEventFactory", (x) => x.singleton(DefaultLogEventFactory));
var ILogger = createInterface("ILogger", (x) => x.singleton(DefaultLogger));
var ILogScopes = createInterface("ILogScope");
var LoggerSink = objectFreeze({
  key: getAnnotationKeyFor("logger-sink-handles"),
  define(target, definition) {
    defineMetadata(definition.handles, target, this.key);
  },
  getHandles(target) {
    return getMetadata(this.key, target.constructor);
  }
});
var format = toLookup({
  red(str) {
    return `\x1B[31m${str}\x1B[39m`;
  },
  green(str) {
    return `\x1B[32m${str}\x1B[39m`;
  },
  yellow(str) {
    return `\x1B[33m${str}\x1B[39m`;
  },
  blue(str) {
    return `\x1B[34m${str}\x1B[39m`;
  },
  magenta(str) {
    return `\x1B[35m${str}\x1B[39m`;
  },
  cyan(str) {
    return `\x1B[36m${str}\x1B[39m`;
  },
  white(str) {
    return `\x1B[37m${str}\x1B[39m`;
  },
  grey(str) {
    return `\x1B[90m${str}\x1B[39m`;
  }
});
var LogConfig = class {
  constructor(colorOptions, level) {
    this.colorOptions = colorOptions;
    this.level = level;
  }
};
var getLogLevelString = function() {
  const logLevelString = {
    "no-colors": toLookup({
      TRC: "TRC",
      DBG: "DBG",
      INF: "INF",
      WRN: "WRN",
      ERR: "ERR",
      FTL: "FTL",
      QQQ: "???"
    }),
    "colors": toLookup({
      TRC: format.grey("TRC"),
      DBG: format.grey("DBG"),
      INF: format.white("INF"),
      WRN: format.yellow("WRN"),
      ERR: format.red("ERR"),
      FTL: format.red("FTL"),
      QQQ: format.grey("???")
    })
  };
  return (level, colorOptions) => {
    if (level <= trace) {
      return logLevelString[colorOptions].TRC;
    }
    if (level <= debug) {
      return logLevelString[colorOptions].DBG;
    }
    if (level <= info) {
      return logLevelString[colorOptions].INF;
    }
    if (level <= warn) {
      return logLevelString[colorOptions].WRN;
    }
    if (level <= error) {
      return logLevelString[colorOptions].ERR;
    }
    if (level <= fatal) {
      return logLevelString[colorOptions].FTL;
    }
    return logLevelString[colorOptions].QQQ;
  };
}();
var getScopeString = (scope, colorOptions) => {
  if (colorOptions === "no-colors") {
    return scope.join(".");
  }
  return scope.map(format.cyan).join(".");
};
var getIsoString = (timestamp, colorOptions) => {
  if (colorOptions === "no-colors") {
    return new Date(timestamp).toISOString();
  }
  return format.grey(new Date(timestamp).toISOString());
};
var DefaultLogEvent = class {
  constructor(severity, message, optionalParams, scope, colorOptions, timestamp) {
    this.severity = severity;
    this.message = message;
    this.optionalParams = optionalParams;
    this.scope = scope;
    this.colorOptions = colorOptions;
    this.timestamp = timestamp;
  }
  toString() {
    const { severity, message, scope, colorOptions, timestamp } = this;
    if (scope.length === 0) {
      return `${getIsoString(timestamp, colorOptions)} [${getLogLevelString(severity, colorOptions)}] ${message}`;
    }
    return `${getIsoString(timestamp, colorOptions)} [${getLogLevelString(severity, colorOptions)} ${getScopeString(scope, colorOptions)}] ${message}`;
  }
  getFormattedLogInfo(forConsole = false) {
    const { severity, message: messageOrError, scope, colorOptions, timestamp, optionalParams } = this;
    let error2 = null;
    let message = "";
    if (forConsole && messageOrError instanceof Error) {
      error2 = messageOrError;
    } else {
      message = messageOrError;
    }
    const scopeInfo = scope.length === 0 ? "" : ` ${getScopeString(scope, colorOptions)}`;
    let msg = `${getIsoString(timestamp, colorOptions)} [${getLogLevelString(severity, colorOptions)}${scopeInfo}] ${message}`;
    if (optionalParams === void 0 || optionalParams.length === 0) {
      return error2 === null ? [msg] : [msg, error2];
    }
    let offset = 0;
    while (msg.includes("%s")) {
      msg = msg.replace("%s", String(optionalParams[offset++]));
    }
    return error2 !== null ? [msg, error2, ...optionalParams.slice(offset)] : [msg, ...optionalParams.slice(offset)];
  }
};
var DefaultLogEventFactory = class {
  constructor() {
    this.config = resolve(ILogConfig);
  }
  createLogEvent(logger, level, message, optionalParams) {
    return new DefaultLogEvent(level, message, optionalParams, logger.scope, this.config.colorOptions, Date.now());
  }
};
var ConsoleSink = class _ConsoleSink {
  static register(container) {
    singletonRegistration(ISink, _ConsoleSink).register(container);
  }
  constructor(p = resolve(IPlatform)) {
    const $console = p.console;
    this.handleEvent = function emit(event) {
      const _info = event.getFormattedLogInfo(true);
      switch (event.severity) {
        case trace:
        case debug:
          return $console.debug(..._info);
        case info:
          return $console.info(..._info);
        case warn:
          return $console.warn(..._info);
        case error:
        case fatal:
          return $console.error(..._info);
      }
    };
  }
};
var DefaultLogger = (() => {
  var _a3;
  let _instanceExtraInitializers = [];
  let _trace_decorators;
  let _debug_decorators;
  let _info_decorators;
  let _warn_decorators;
  let _error_decorators;
  let _fatal_decorators;
  return _a3 = class DefaultLogger {
    /* eslint-disable default-param-last */
    constructor(config = resolve(ILogConfig), factory2 = resolve(ILogEventFactory), sinks = resolve(all(ISink)), scope = resolve(optional(ILogScopes)) ?? [], parent = null) {
      this.scope = (__runInitializers(this, _instanceExtraInitializers), scope);
      this._scopedLoggers = createLookup();
      let traceSinks;
      let debugSinks;
      let infoSinks;
      let warnSinks;
      let errorSinks;
      let fatalSinks;
      this.config = config;
      this._factory = factory2;
      this.sinks = sinks;
      if (parent === null) {
        this.root = this;
        this.parent = this;
        traceSinks = this._traceSinks = [];
        debugSinks = this._debugSinks = [];
        infoSinks = this._infoSinks = [];
        warnSinks = this._warnSinks = [];
        errorSinks = this._errorSinks = [];
        fatalSinks = this._fatalSinks = [];
        for (const $sink of sinks) {
          const handles = LoggerSink.getHandles($sink);
          if ((handles == null ? void 0 : handles.includes(trace)) ?? true) {
            traceSinks.push($sink);
          }
          if ((handles == null ? void 0 : handles.includes(debug)) ?? true) {
            debugSinks.push($sink);
          }
          if ((handles == null ? void 0 : handles.includes(info)) ?? true) {
            infoSinks.push($sink);
          }
          if ((handles == null ? void 0 : handles.includes(warn)) ?? true) {
            warnSinks.push($sink);
          }
          if ((handles == null ? void 0 : handles.includes(error)) ?? true) {
            errorSinks.push($sink);
          }
          if ((handles == null ? void 0 : handles.includes(fatal)) ?? true) {
            fatalSinks.push($sink);
          }
        }
      } else {
        this.root = parent.root;
        this.parent = parent;
        traceSinks = this._traceSinks = parent._traceSinks;
        debugSinks = this._debugSinks = parent._debugSinks;
        infoSinks = this._infoSinks = parent._infoSinks;
        warnSinks = this._warnSinks = parent._warnSinks;
        errorSinks = this._errorSinks = parent._errorSinks;
        fatalSinks = this._fatalSinks = parent._fatalSinks;
      }
    }
    trace(messageOrGetMessage, ...optionalParams) {
      if (this.config.level <= trace) {
        this._emit(this._traceSinks, trace, messageOrGetMessage, optionalParams);
      }
    }
    debug(messageOrGetMessage, ...optionalParams) {
      if (this.config.level <= debug) {
        this._emit(this._debugSinks, debug, messageOrGetMessage, optionalParams);
      }
    }
    info(messageOrGetMessage, ...optionalParams) {
      if (this.config.level <= info) {
        this._emit(this._infoSinks, info, messageOrGetMessage, optionalParams);
      }
    }
    warn(messageOrGetMessage, ...optionalParams) {
      if (this.config.level <= warn) {
        this._emit(this._warnSinks, warn, messageOrGetMessage, optionalParams);
      }
    }
    error(messageOrGetMessage, ...optionalParams) {
      if (this.config.level <= error) {
        this._emit(this._errorSinks, error, messageOrGetMessage, optionalParams);
      }
    }
    fatal(messageOrGetMessage, ...optionalParams) {
      if (this.config.level <= fatal) {
        this._emit(this._fatalSinks, fatal, messageOrGetMessage, optionalParams);
      }
    }
    /**
     * Create a new logger with an additional permanent prefix added to the logging outputs.
     * When chained, multiple scopes are separated by a dot.
     *
     * This is preliminary API and subject to change before alpha release.
     *
     * @example
     *
     * ```ts
     * export class MyComponent {
     *   constructor(@ILogger private logger: ILogger) {
     *     this.logger.debug('before scoping');
     *     // console output: '[DBG] before scoping'
     *     this.logger = logger.scopeTo('MyComponent');
     *     this.logger.debug('after scoping');
     *     // console output: '[DBG MyComponent] after scoping'
     *   }
     *
     *   public doStuff(): void {
     *     const logger = this.logger.scopeTo('doStuff()');
     *     logger.debug('doing stuff');
     *     // console output: '[DBG MyComponent.doStuff()] doing stuff'
     *   }
     * }
     * ```
     */
    scopeTo(name) {
      const scopedLoggers = this._scopedLoggers;
      let scopedLogger = scopedLoggers[name];
      if (scopedLogger === void 0) {
        scopedLogger = scopedLoggers[name] = new _a3(this.config, this._factory, null, this.scope.concat(name), this);
      }
      return scopedLogger;
    }
    /** @internal */
    _emit(sinks, level, msgOrGetMsg, optionalParams) {
      const message = isFunction(msgOrGetMsg) ? msgOrGetMsg() : msgOrGetMsg;
      const event = this._factory.createLogEvent(this, level, message, optionalParams);
      for (let i = 0, ii = sinks.length; i < ii; ++i) {
        sinks[i].handleEvent(event);
      }
    }
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
    _trace_decorators = [bound];
    _debug_decorators = [bound];
    _info_decorators = [bound];
    _warn_decorators = [bound];
    _error_decorators = [bound];
    _fatal_decorators = [bound];
    __esDecorate(_a3, null, _trace_decorators, { kind: "method", name: "trace", static: false, private: false, access: { has: (obj) => "trace" in obj, get: (obj) => obj.trace }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate(_a3, null, _debug_decorators, { kind: "method", name: "debug", static: false, private: false, access: { has: (obj) => "debug" in obj, get: (obj) => obj.debug }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate(_a3, null, _info_decorators, { kind: "method", name: "info", static: false, private: false, access: { has: (obj) => "info" in obj, get: (obj) => obj.info }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate(_a3, null, _warn_decorators, { kind: "method", name: "warn", static: false, private: false, access: { has: (obj) => "warn" in obj, get: (obj) => obj.warn }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate(_a3, null, _error_decorators, { kind: "method", name: "error", static: false, private: false, access: { has: (obj) => "error" in obj, get: (obj) => obj.error }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate(_a3, null, _fatal_decorators, { kind: "method", name: "fatal", static: false, private: false, access: { has: (obj) => "fatal" in obj, get: (obj) => obj.fatal }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata) Object.defineProperty(_a3, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a3;
})();
var LoggerConfiguration = toLookup({
  /**
   * @param $console - The `console` object to use. Can be the native `window.console` / `global.console`, but can also be a wrapper or mock that implements the same interface.
   * @param level - The global `LogLevel` to configure. Defaults to `warn` or higher.
   * @param colorOptions - Whether to use colors or not. Defaults to `noColors`. Colors are especially nice in nodejs environments but don't necessarily work (well) in all environments, such as browsers.
   */
  create({ level = warn, colorOptions = "no-colors", sinks = [] } = {}) {
    return toLookup({
      register(container) {
        container.register(instanceRegistration(ILogConfig, new LogConfig(colorOptions, level)));
        for (const $sink of sinks) {
          if (isFunction($sink)) {
            container.register(singletonRegistration(ISink, $sink));
          } else {
            container.register($sink);
          }
        }
        return container;
      }
    });
  }
});
var IModuleLoader = createInterface((x) => x.singleton(ModuleLoader));
var noTransform = (m) => m;
var ModuleTransformer = class {
  constructor(transform) {
    this._promiseCache = /* @__PURE__ */ new Map();
    this._objectCache = /* @__PURE__ */ new Map();
    this._transform = transform;
  }
  transform(objOrPromise) {
    if (objOrPromise instanceof Promise) {
      return this._transformPromise(objOrPromise);
    } else if (typeof objOrPromise === "object" && objOrPromise !== null) {
      return this._transformObject(objOrPromise);
    } else {
      throw createMappedError(21, objOrPromise);
    }
  }
  /** @internal */
  _transformPromise(promise) {
    if (this._promiseCache.has(promise)) {
      return this._promiseCache.get(promise);
    }
    const ret = promise.then((obj) => {
      return this._transformObject(obj);
    });
    this._promiseCache.set(promise, ret);
    void ret.then((value) => {
      this._promiseCache.set(promise, value);
    });
    return ret;
  }
  /** @internal */
  _transformObject(obj) {
    if (this._objectCache.has(obj)) {
      return this._objectCache.get(obj);
    }
    const ret = this._transform(this._analyze(obj));
    this._objectCache.set(obj, ret);
    if (ret instanceof Promise) {
      void ret.then((value) => {
        this._objectCache.set(obj, value);
      });
    }
    return ret;
  }
  /** @internal */
  _analyze(m) {
    if (m == null)
      throw createMappedError(21, m);
    if (typeof m !== "object")
      return new AnalyzedModule(m, []);
    let value;
    let isRegistry2;
    let isConstructable;
    let definition;
    const items = [];
    for (const key in m) {
      switch (typeof (value = m[key])) {
        case "object":
          if (value === null) {
            continue;
          }
          isRegistry2 = isFunction(value.register);
          isConstructable = false;
          definition = null;
          break;
        case "function":
          isRegistry2 = isFunction(value.register);
          isConstructable = value.prototype !== void 0;
          definition = getMetadata(resourceBaseName, value) ?? null;
          break;
        default:
          continue;
      }
      items.push(new ModuleItem(key, value, isRegistry2, isConstructable, definition));
    }
    return new AnalyzedModule(m, items);
  }
};
var ModuleLoader = class {
  constructor() {
    this.transformers = /* @__PURE__ */ new Map();
  }
  load(objOrPromise, transform = noTransform) {
    const transformers = this.transformers;
    let transformer = transformers.get(transform);
    if (transformer === void 0) {
      transformers.set(transform, transformer = new ModuleTransformer(transform));
    }
    return transformer.transform(objOrPromise);
  }
  dispose() {
    this.transformers.clear();
  }
};
var AnalyzedModule = class {
  constructor(raw, items) {
    this.raw = raw;
    this.items = items;
  }
};
var ModuleItem = class {
  constructor(key, value, isRegistry2, isConstructable, definition) {
    this.key = key;
    this.value = value;
    this.isRegistry = isRegistry2;
    this.isConstructable = isConstructable;
    this.definition = definition;
  }
};
var Handler = class {
  constructor(type, cb) {
    this.type = type;
    this.cb = cb;
  }
  handle(message) {
    if (message instanceof this.type) {
      this.cb.call(null, message);
    }
  }
};
var IEventAggregator = createInterface("IEventAggregator", (x) => x.singleton(EventAggregator));
var EventAggregator = class {
  constructor() {
    this.eventLookup = {};
    this.messageHandlers = [];
  }
  publish(channelOrInstance, message) {
    if (!channelOrInstance) {
      throw createMappedError(18, channelOrInstance);
    }
    if (isString(channelOrInstance)) {
      let subscribers = this.eventLookup[channelOrInstance];
      if (subscribers !== void 0) {
        subscribers = subscribers.slice();
        let i = subscribers.length;
        while (i-- > 0) {
          subscribers[i](message, channelOrInstance);
        }
      }
    } else {
      const subscribers = this.messageHandlers.slice();
      let i = subscribers.length;
      while (i-- > 0) {
        subscribers[i].handle(channelOrInstance);
      }
    }
  }
  subscribe(channelOrType, callback) {
    if (!channelOrType) {
      throw createMappedError(19, channelOrType);
    }
    let handler;
    let subscribers;
    if (isString(channelOrType)) {
      if (this.eventLookup[channelOrType] === void 0) {
        this.eventLookup[channelOrType] = [];
      }
      handler = callback;
      subscribers = this.eventLookup[channelOrType];
    } else {
      handler = new Handler(channelOrType, callback);
      subscribers = this.messageHandlers;
    }
    subscribers.push(handler);
    return {
      dispose() {
        const idx = subscribers.indexOf(handler);
        if (idx !== -1) {
          subscribers.splice(idx, 1);
        }
      }
    };
  }
  subscribeOnce(channelOrType, callback) {
    const sub = this.subscribe(channelOrType, (message, event) => {
      sub.dispose();
      callback(message, event);
    });
    return sub;
  }
};

// node_modules/@aurelia/template-compiler/dist/esm/index.dev.mjs
var import_dist10 = __toESM(require_dist(), 1);
var import_dist11 = __toESM(require_dist2(), 1);
var import_dist12 = __toESM(require_dist3(), 1);

// node_modules/@aurelia/expression-parser/dist/esm/index.dev.mjs
var import_dist7 = __toESM(require_dist(), 1);
var import_dist8 = __toESM(require_dist2(), 1);
var import_dist9 = __toESM(require_dist3(), 1);
var ekAccessThis = "AccessThis";
var ekAccessBoundary = "AccessBoundary";
var ekAccessGlobal = "AccessGlobal";
var ekAccessScope = "AccessScope";
var ekArrayLiteral = "ArrayLiteral";
var ekObjectLiteral = "ObjectLiteral";
var ekPrimitiveLiteral = "PrimitiveLiteral";
var ekTemplate = "Template";
var ekUnary = "Unary";
var ekCallScope = "CallScope";
var ekCallMember = "CallMember";
var ekCallFunction = "CallFunction";
var ekCallGlobal = "CallGlobal";
var ekAccessMember = "AccessMember";
var ekAccessKeyed = "AccessKeyed";
var ekTaggedTemplate = "TaggedTemplate";
var ekBinary = "Binary";
var ekConditional = "Conditional";
var ekAssign = "Assign";
var ekArrowFunction = "ArrowFunction";
var ekValueConverter = "ValueConverter";
var ekBindingBehavior = "BindingBehavior";
var ekArrayBindingPattern = "ArrayBindingPattern";
var ekObjectBindingPattern = "ObjectBindingPattern";
var ekBindingIdentifier = "BindingIdentifier";
var ekForOfStatement = "ForOfStatement";
var ekInterpolation = "Interpolation";
var ekArrayDestructuring = "ArrayDestructuring";
var ekObjectDestructuring = "ObjectDestructuring";
var ekDestructuringAssignmentLeaf = "DestructuringAssignmentLeaf";
var ekCustom = "Custom";
var CustomExpression = class {
  constructor(value) {
    this.value = value;
    this.$kind = ekCustom;
  }
  evaluate(...params) {
    return this.value;
  }
  assign(...params) {
    return params;
  }
  bind(...params) {
  }
  unbind(...params) {
  }
  accept(_visitor) {
    return void 0;
  }
};
var BindingBehaviorExpression = class {
  constructor(expression, name, args) {
    this.expression = expression;
    this.name = name;
    this.args = args;
    this.$kind = ekBindingBehavior;
    this.key = `_bb_${name}`;
  }
};
var ValueConverterExpression = class {
  constructor(expression, name, args) {
    this.expression = expression;
    this.name = name;
    this.args = args;
    this.$kind = ekValueConverter;
  }
};
var AssignExpression = class {
  constructor(target, value, op = "=") {
    this.target = target;
    this.value = value;
    this.op = op;
    this.$kind = ekAssign;
  }
};
var ConditionalExpression = class {
  constructor(condition, yes, no) {
    this.condition = condition;
    this.yes = yes;
    this.no = no;
    this.$kind = ekConditional;
  }
};
var AccessGlobalExpression = class {
  constructor(name) {
    this.name = name;
    this.$kind = ekAccessGlobal;
  }
};
var AccessThisExpression = class {
  constructor(ancestor = 0) {
    this.ancestor = ancestor;
    this.$kind = ekAccessThis;
  }
};
var AccessBoundaryExpression = class {
  constructor() {
    this.$kind = ekAccessBoundary;
  }
};
var AccessScopeExpression = class {
  constructor(name, ancestor = 0) {
    this.name = name;
    this.ancestor = ancestor;
    this.$kind = ekAccessScope;
  }
};
var isAccessGlobal = (ast) => ast.$kind === ekAccessGlobal || (ast.$kind === ekAccessMember || ast.$kind === ekAccessKeyed) && ast.accessGlobal;
var AccessMemberExpression = class {
  constructor(object, name, optional2 = false) {
    this.object = object;
    this.name = name;
    this.optional = optional2;
    this.$kind = ekAccessMember;
    this.accessGlobal = isAccessGlobal(object);
  }
};
var AccessKeyedExpression = class {
  constructor(object, key, optional2 = false) {
    this.object = object;
    this.key = key;
    this.optional = optional2;
    this.$kind = ekAccessKeyed;
    this.accessGlobal = isAccessGlobal(object);
  }
};
var CallScopeExpression = class {
  constructor(name, args, ancestor = 0, optional2 = false) {
    this.name = name;
    this.args = args;
    this.ancestor = ancestor;
    this.optional = optional2;
    this.$kind = ekCallScope;
  }
};
var CallMemberExpression = class {
  constructor(object, name, args, optionalMember = false, optionalCall = false) {
    this.object = object;
    this.name = name;
    this.args = args;
    this.optionalMember = optionalMember;
    this.optionalCall = optionalCall;
    this.$kind = ekCallMember;
  }
};
var CallFunctionExpression = class {
  constructor(func, args, optional2 = false) {
    this.func = func;
    this.args = args;
    this.optional = optional2;
    this.$kind = ekCallFunction;
  }
};
var CallGlobalExpression = class {
  constructor(name, args) {
    this.name = name;
    this.args = args;
    this.$kind = ekCallGlobal;
  }
};
var BinaryExpression = class {
  constructor(operation, left, right) {
    this.operation = operation;
    this.left = left;
    this.right = right;
    this.$kind = ekBinary;
  }
};
var UnaryExpression = class {
  constructor(operation, expression, pos = 0) {
    this.operation = operation;
    this.expression = expression;
    this.pos = pos;
    this.$kind = ekUnary;
  }
};
var PrimitiveLiteralExpression = class {
  constructor(value) {
    this.value = value;
    this.$kind = ekPrimitiveLiteral;
  }
};
PrimitiveLiteralExpression.$undefined = new PrimitiveLiteralExpression(void 0);
PrimitiveLiteralExpression.$null = new PrimitiveLiteralExpression(null);
PrimitiveLiteralExpression.$true = new PrimitiveLiteralExpression(true);
PrimitiveLiteralExpression.$false = new PrimitiveLiteralExpression(false);
PrimitiveLiteralExpression.$empty = new PrimitiveLiteralExpression("");
var ArrayLiteralExpression = class {
  constructor(elements) {
    this.elements = elements;
    this.$kind = ekArrayLiteral;
  }
};
ArrayLiteralExpression.$empty = new ArrayLiteralExpression(emptyArray);
var ObjectLiteralExpression = class {
  constructor(keys, values) {
    this.keys = keys;
    this.values = values;
    this.$kind = ekObjectLiteral;
  }
};
ObjectLiteralExpression.$empty = new ObjectLiteralExpression(emptyArray, emptyArray);
var TemplateExpression = class {
  constructor(cooked, expressions = emptyArray) {
    this.cooked = cooked;
    this.expressions = expressions;
    this.$kind = ekTemplate;
  }
};
TemplateExpression.$empty = new TemplateExpression([""]);
var TaggedTemplateExpression = class {
  constructor(cooked, raw, func, expressions = emptyArray) {
    this.cooked = cooked;
    this.func = func;
    this.expressions = expressions;
    this.$kind = ekTaggedTemplate;
    cooked.raw = raw;
  }
};
var ArrayBindingPattern = class {
  // We'll either have elements, or keys+values, but never all 3
  constructor(elements) {
    this.elements = elements;
    this.$kind = ekArrayBindingPattern;
  }
};
var ObjectBindingPattern = class {
  // We'll either have elements, or keys+values, but never all 3
  constructor(keys, values) {
    this.keys = keys;
    this.values = values;
    this.$kind = ekObjectBindingPattern;
  }
};
var BindingIdentifier = class {
  constructor(name) {
    this.name = name;
    this.$kind = ekBindingIdentifier;
  }
};
var ForOfStatement = class {
  constructor(declaration, iterable, semiIdx) {
    this.declaration = declaration;
    this.iterable = iterable;
    this.semiIdx = semiIdx;
    this.$kind = ekForOfStatement;
  }
};
var Interpolation = class {
  constructor(parts, expressions = emptyArray) {
    this.parts = parts;
    this.expressions = expressions;
    this.$kind = ekInterpolation;
    this.isMulti = expressions.length > 1;
    this.firstExpression = expressions[0];
  }
};
var DestructuringAssignmentExpression = class {
  constructor($kind, list, source, initializer) {
    this.$kind = $kind;
    this.list = list;
    this.source = source;
    this.initializer = initializer;
  }
};
var DestructuringAssignmentSingleExpression = class {
  constructor(target, source, initializer) {
    this.target = target;
    this.source = source;
    this.initializer = initializer;
    this.$kind = ekDestructuringAssignmentLeaf;
  }
};
var ArrowFunction = class {
  constructor(args, body, rest = false) {
    this.args = args;
    this.body = body;
    this.rest = rest;
    this.$kind = ekArrowFunction;
  }
};
var safeString2 = String;
var createLookup2 = () => /* @__PURE__ */ Object.create(null);
var createMappedError2 = (code, ...details) => new Error(`AUR${safeString2(code).padStart(4, "0")}: ${getMessageByCode2(code, ...details)}`);
var errorsMap2 = {
  [
    99
    /* ErrorNames.method_not_implemented */
  ]: "Method {{0}} not implemented",
  [
    101
    /* ErrorNames.ast_behavior_not_found */
  ]: `Ast eval error: binding behavior "{{0}}" could not be found. Did you forget to register it as a dependency?`,
  [
    102
    /* ErrorNames.ast_behavior_duplicated */
  ]: `Ast eval error: binding behavior "{{0}}" already applied.`,
  [
    103
    /* ErrorNames.ast_converter_not_found */
  ]: `Ast eval error: value converter "{{0}}" could not be found. Did you forget to register it as a dependency?`,
  [
    105
    /* ErrorNames.ast_$host_not_found */
  ]: `Ast eval error: unable to find $host context. Did you forget [au-slot] attribute?`,
  [
    106
    /* ErrorNames.ast_no_assign_$host */
  ]: `Ast eval error: invalid assignment. "$host" is a reserved keyword.`,
  [
    107
    /* ErrorNames.ast_not_a_function */
  ]: `Ast eval error: expression is not a function.`,
  [
    109
    /* ErrorNames.ast_unknown_unary_operator */
  ]: `Ast eval error: unknown unary operator: "{{0}}"`,
  [
    108
    /* ErrorNames.ast_unknown_binary_operator */
  ]: `Ast eval error: unknown binary operator: "{{0}}"`,
  [
    110
    /* ErrorNames.ast_tagged_not_a_function */
  ]: `Ast eval error: left-hand side of tagged template expression is not a function.`,
  [
    111
    /* ErrorNames.ast_name_is_not_a_function */
  ]: `Ast eval error: expected "{{0}}" to be a function`,
  [
    112
    /* ErrorNames.ast_destruct_null */
  ]: `Ast eval error: cannot use non-object value for destructuring assignment.`,
  [
    151
    /* ErrorNames.parse_invalid_start */
  ]: `Expression error: invalid start: "{{0}}"`,
  [
    152
    /* ErrorNames.parse_no_spread */
  ]: `Expression error: spread operator is not supported: "{{0}}"`,
  [
    153
    /* ErrorNames.parse_expected_identifier */
  ]: `Expression error: expected identifier: "{{0}}"`,
  [
    154
    /* ErrorNames.parse_invalid_member_expr */
  ]: `Expression error: invalid member expression: "{{0}}"`,
  [
    155
    /* ErrorNames.parse_unexpected_end */
  ]: `Expression error: unexpected end of expression: "{{0}}"`,
  [
    156
    /* ErrorNames.parse_unconsumed_token */
  ]: `Expression error: unconsumed token: "{{0}}" at position {{1}} of "{{2}}"`,
  [
    157
    /* ErrorNames.parse_invalid_empty */
  ]: `Expression error: invalid empty expression. Empty expression is only valid in event bindings (trigger, delegate, capture etc...)`,
  [
    158
    /* ErrorNames.parse_left_hand_side_not_assignable */
  ]: `Expression error: left hand side of expression is not assignable: "{{0}}"`,
  [
    159
    /* ErrorNames.parse_expected_converter_identifier */
  ]: `Expression error: expected identifier to come after value converter operator: "{{0}}"`,
  [
    160
    /* ErrorNames.parse_expected_behavior_identifier */
  ]: `Expression error: expected identifier to come after binding behavior operator: {{0}}`,
  [
    161
    /* ErrorNames.parse_unexpected_keyword_of */
  ]: `Expression error: unexpected keyword "of": "{{0}}"`,
  [
    162
    /* ErrorNames.parse_unexpected_keyword_import */
  ]: `Expression error: unexpected keyword "import": "{{0}}"`,
  [
    163
    /* ErrorNames.parse_invalid_identifier_in_forof */
  ]: `Expression error: invalid BindingIdentifier at left hand side of "of": "{{0}}" | kind: {{1}}`,
  [
    164
    /* ErrorNames.parse_invalid_identifier_object_literal_key */
  ]: `Expression error: invalid or unsupported property definition in object literal: "{{0}}"`,
  [
    165
    /* ErrorNames.parse_unterminated_string */
  ]: `Expression error: unterminated quote in string literal: "{{0}}"`,
  [
    166
    /* ErrorNames.parse_unterminated_template_string */
  ]: `Expression error: unterminated template string: "{{0}}"`,
  [
    167
    /* ErrorNames.parse_missing_expected_token */
  ]: `Expression error: missing expected token "{{0}}" in "{{1}}"`,
  [
    168
    /* ErrorNames.parse_unexpected_character */
  ]: `Expression error: unexpected character: "{{0}}"`,
  [
    170
    /* ErrorNames.parse_unexpected_token_destructuring */
  ]: `Expression error: unexpected "{{0}}" at position "{{1}}" for destructuring assignment in "{{2}}"`,
  [
    171
    /* ErrorNames.parse_unexpected_token_optional_chain */
  ]: `Expression error: unexpected {{0}} at position "{{1}}" for optional chain in "{{2}}"`,
  [
    172
    /* ErrorNames.parse_invalid_tag_in_optional_chain */
  ]: `Expression error: invalid tagged template on optional chain in "{{1}}"`,
  [
    173
    /* ErrorNames.parse_invalid_arrow_params */
  ]: `Expression error: invalid arrow parameter list in "{{0}}"`,
  [
    174
    /* ErrorNames.parse_no_arrow_param_default_value */
  ]: `Expression error: arrow function with default parameters is not supported: "{{0}}"`,
  [
    175
    /* ErrorNames.parse_no_arrow_param_destructuring */
  ]: `Expression error: arrow function with destructuring parameters is not supported: "{{0}}"`,
  [
    176
    /* ErrorNames.parse_rest_must_be_last */
  ]: `Expression error: rest parameter must be last formal parameter in arrow function: "{{0}}"`,
  [
    178
    /* ErrorNames.parse_no_arrow_fn_body */
  ]: `Expression error: arrow function with function body is not supported: "{{0}}"`,
  [
    179
    /* ErrorNames.parse_unexpected_double_dot */
  ]: `Expression error: unexpected token '.' at position "{{1}}" in "{{0}}"`
};
var getMessageByCode2 = (name, ...details) => {
  var _a3;
  let cooked = errorsMap2[name];
  for (let i = 0; i < details.length; ++i) {
    const regex = new RegExp(`{{${i}(:.*)?}}`, "g");
    let matches = regex.exec(cooked);
    while (matches != null) {
      const method = (_a3 = matches[1]) == null ? void 0 : _a3.slice(1);
      let value = details[i];
      if (value != null) {
        switch (method) {
          case "toString":
            value = Object.prototype.toString.call(value);
            break;
          case "join(!=)":
            value = value.join("!=");
            break;
          case "element":
            value = value === "*" ? "all elements" : `<${value} />`;
            break;
          default: {
            if (method == null ? void 0 : method.startsWith(".")) {
              value = safeString2(value[method.slice(1)]);
            } else {
              value = safeString2(value);
            }
          }
        }
      }
      cooked = cooked.slice(0, matches.index) + value + cooked.slice(regex.lastIndex);
      matches = regex.exec(cooked);
    }
  }
  return cooked;
};
var IExpressionParser = DI.createInterface("IExpressionParser");
var ExpressionParser = class {
  constructor() {
    this._expressionLookup = createLookup2();
    this._forOfLookup = createLookup2();
    this._interpolationLookup = createLookup2();
  }
  parse(expression, expressionType) {
    let found;
    switch (expressionType) {
      case etIsCustom:
        return new CustomExpression(expression);
      case etInterpolation:
        found = this._interpolationLookup[expression];
        if (found === void 0) {
          found = this._interpolationLookup[expression] = this.$parse(expression, expressionType);
        }
        return found;
      case etIsIterator:
        found = this._forOfLookup[expression];
        if (found === void 0) {
          found = this._forOfLookup[expression] = this.$parse(expression, expressionType);
        }
        return found;
      default: {
        if (expression.length === 0) {
          if (expressionType === etIsFunction || expressionType === etIsProperty) {
            return PrimitiveLiteralExpression.$empty;
          }
          throw invalidEmptyExpression();
        }
        found = this._expressionLookup[expression];
        if (found === void 0) {
          found = this._expressionLookup[expression] = this.$parse(expression, expressionType);
        }
        return found;
      }
    }
  }
  /** @internal */
  $parse(expression, expressionType) {
    $input = expression;
    $index = 0;
    $length = expression.length;
    $scopeDepth = 0;
    $startIndex = 0;
    $currentToken = 6291456;
    $tokenValue = "";
    $currentChar = $charCodeAt(0);
    $assignable = true;
    $optional = false;
    $accessGlobal = true;
    $semicolonIndex = -1;
    return parse(61, expressionType === void 0 ? etIsProperty : expressionType);
  }
};
ExpressionParser.register = createImplementationRegister(IExpressionParser);
function unescapeCode(code) {
  switch (code) {
    case 98:
      return 8;
    case 116:
      return 9;
    case 110:
      return 10;
    case 118:
      return 11;
    case 102:
      return 12;
    case 114:
      return 13;
    case 34:
      return 34;
    case 39:
      return 39;
    case 92:
      return 92;
    default:
      return code;
  }
}
var $false = PrimitiveLiteralExpression.$false;
var $true = PrimitiveLiteralExpression.$true;
var $null = PrimitiveLiteralExpression.$null;
var $undefined = PrimitiveLiteralExpression.$undefined;
var $this = new AccessThisExpression(0);
var $parent = new AccessThisExpression(1);
var boundary = new AccessBoundaryExpression();
var etNone = "None";
var etInterpolation = "Interpolation";
var etIsIterator = "IsIterator";
var etIsChainable = "IsChainable";
var etIsFunction = "IsFunction";
var etIsProperty = "IsProperty";
var etIsCustom = "IsCustom";
var $input = "";
var $index = 0;
var $length = 0;
var $scopeDepth = 0;
var $startIndex = 0;
var $currentToken = 6291456;
var $tokenValue = "";
var $currentChar;
var $assignable = true;
var $optional = false;
var $accessGlobal = true;
var $semicolonIndex = -1;
var stringFromCharCode = String.fromCharCode;
var $charCodeAt = (index) => $input.charCodeAt(index);
var $tokenRaw = () => $input.slice($startIndex, $index);
var globalNames = "Infinity NaN isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent Array BigInt Boolean Date Map Number Object RegExp Set String JSON Math Intl".split(" ");
function parse(minPrecedence, expressionType) {
  if (expressionType === etIsCustom) {
    return new CustomExpression($input);
  }
  if ($index === 0) {
    if (expressionType === etInterpolation) {
      return parseInterpolation();
    }
    nextToken();
    if ($currentToken & 4194304) {
      throw invalidStartOfExpression();
    }
  }
  $assignable = 513 > minPrecedence;
  $optional = false;
  $accessGlobal = 514 > minPrecedence;
  let optionalThisTail = false;
  let result = void 0;
  let ancestor = 0;
  if ($currentToken & 131072) {
    const op = TokenValues[
      $currentToken & 63
      /* Token.Type */
    ];
    nextToken();
    result = new UnaryExpression(op, parse(514, expressionType));
    $assignable = false;
  } else {
    primary: switch ($currentToken) {
      case 12295:
        ancestor = $scopeDepth;
        $assignable = false;
        $accessGlobal = false;
        do {
          nextToken();
          ++ancestor;
          switch ($currentToken) {
            case 65546:
              nextToken();
              if (($currentToken & 12288) === 0) {
                throw expectedIdentifier();
              }
              break;
            case 11:
            case 12:
              throw expectedIdentifier();
            case 2162701:
              $optional = true;
              nextToken();
              if (($currentToken & 12288) === 0) {
                result = ancestor === 0 ? $this : ancestor === 1 ? $parent : new AccessThisExpression(ancestor);
                optionalThisTail = true;
                break primary;
              }
              break;
            default:
              if ($currentToken & 2097152) {
                result = ancestor === 0 ? $this : ancestor === 1 ? $parent : new AccessThisExpression(ancestor);
                break primary;
              }
              throw invalidMemberExpression();
          }
        } while ($currentToken === 12295);
      // falls through
      case 4096: {
        const id2 = $tokenValue;
        if (expressionType === etIsIterator) {
          result = new BindingIdentifier(id2);
        } else if ($accessGlobal && globalNames.includes(id2)) {
          result = new AccessGlobalExpression(id2);
        } else if ($accessGlobal && id2 === "import") {
          throw unexpectedImportKeyword();
        } else {
          result = new AccessScopeExpression(id2, ancestor);
        }
        $assignable = !$optional;
        nextToken();
        if (consumeOpt(
          51
          /* Token.Arrow */
        )) {
          if ($currentToken === 524297) {
            throw functionBodyInArrowFn();
          }
          const _optional = $optional;
          const _scopeDepth = $scopeDepth;
          ++$scopeDepth;
          const body = parse(62, etNone);
          $optional = _optional;
          $scopeDepth = _scopeDepth;
          $assignable = false;
          result = new ArrowFunction([new BindingIdentifier(id2)], body);
        }
        break;
      }
      case 11:
        throw unexpectedDoubleDot();
      case 12:
        throw invalidSpreadOp();
      case 12292:
        $assignable = false;
        nextToken();
        switch ($scopeDepth) {
          case 0:
            result = $this;
            break;
          case 1:
            result = $parent;
            break;
          default:
            result = new AccessThisExpression($scopeDepth);
            break;
        }
        break;
      case 12293:
        $assignable = false;
        nextToken();
        result = boundary;
        break;
      case 2688008:
        result = parseCoverParenthesizedExpressionAndArrowParameterList(expressionType);
        break;
      case 2688019:
        result = $input.search(/\s+of\s+/) > $index ? parseArrayDestructuring() : parseArrayLiteralExpression(expressionType);
        break;
      case 524297:
        result = parseObjectLiteralExpression(expressionType);
        break;
      case 2163760:
        result = new TemplateExpression([$tokenValue]);
        $assignable = false;
        nextToken();
        break;
      case 2163761:
        result = parseTemplate(expressionType, result, false);
        break;
      case 16384:
      case 32768:
        result = new PrimitiveLiteralExpression($tokenValue);
        $assignable = false;
        nextToken();
        break;
      case 8194:
      case 8195:
      case 8193:
      case 8192:
        result = TokenValues[
          $currentToken & 63
          /* Token.Type */
        ];
        $assignable = false;
        nextToken();
        break;
      default:
        if ($index >= $length) {
          throw unexpectedEndOfExpression();
        } else {
          throw unconsumedToken();
        }
    }
    if (expressionType === etIsIterator) {
      return parseForOfStatement(result);
    }
    switch ($currentToken) {
      case 2228280:
      case 2228281:
        result = new UnaryExpression(TokenValues[
          $currentToken & 63
          /* Token.Type */
        ], result, 1);
        nextToken();
        $assignable = false;
        break;
    }
    if (514 < minPrecedence) {
      return result;
    }
    if ($currentToken === 11 || $currentToken === 12) {
      throw expectedIdentifier();
    }
    if (result.$kind === ekAccessThis) {
      switch ($currentToken) {
        case 2162701:
          $optional = true;
          $assignable = false;
          nextToken();
          if (($currentToken & 13312) === 0) {
            throw unexpectedTokenInOptionalChain();
          }
          if ($currentToken & 12288) {
            result = new AccessScopeExpression($tokenValue, result.ancestor);
            nextToken();
          } else if ($currentToken === 2688008) {
            result = new CallFunctionExpression(result, parseArguments(), true);
          } else if ($currentToken === 2688019) {
            result = parseKeyedExpression(result, true);
          } else {
            throw invalidTaggedTemplateOnOptionalChain();
          }
          break;
        case 65546:
          $assignable = !$optional;
          nextToken();
          if (($currentToken & 12288) === 0) {
            throw expectedIdentifier();
          }
          result = new AccessScopeExpression($tokenValue, result.ancestor);
          nextToken();
          break;
        case 11:
        case 12:
          throw expectedIdentifier();
        case 2688008:
          result = new CallFunctionExpression(result, parseArguments(), optionalThisTail);
          break;
        case 2688019:
          result = parseKeyedExpression(result, optionalThisTail);
          break;
        case 2163760:
          result = createTemplateTail(result);
          break;
        case 2163761:
          result = parseTemplate(expressionType, result, true);
          break;
      }
    }
    while (($currentToken & 65536) > 0) {
      switch ($currentToken) {
        case 2162701:
          result = parseOptionalChainLHS(result);
          break;
        case 65546:
          nextToken();
          if (($currentToken & 12288) === 0) {
            throw expectedIdentifier();
          }
          result = parseMemberExpressionLHS(result, false);
          break;
        case 11:
        case 12:
          throw expectedIdentifier();
        case 2688008:
          if (result.$kind === ekAccessScope) {
            result = new CallScopeExpression(result.name, parseArguments(), result.ancestor, false);
          } else if (result.$kind === ekAccessMember) {
            result = new CallMemberExpression(result.object, result.name, parseArguments(), result.optional, false);
          } else if (result.$kind === ekAccessGlobal) {
            result = new CallGlobalExpression(result.name, parseArguments());
          } else {
            result = new CallFunctionExpression(result, parseArguments(), false);
          }
          break;
        case 2688019:
          result = parseKeyedExpression(result, false);
          break;
        case 2163760:
          if ($optional) {
            throw invalidTaggedTemplateOnOptionalChain();
          }
          result = createTemplateTail(result);
          break;
        case 2163761:
          if ($optional) {
            throw invalidTaggedTemplateOnOptionalChain();
          }
          result = parseTemplate(expressionType, result, true);
          break;
      }
    }
  }
  if ($currentToken === 11 || $currentToken === 12) {
    throw expectedIdentifier();
  }
  if (513 < minPrecedence) {
    return result;
  }
  while (($currentToken & 262144) > 0) {
    const opToken = $currentToken;
    if ((opToken & 960) <= minPrecedence) {
      break;
    }
    nextToken();
    result = new BinaryExpression(TokenValues[
      opToken & 63
      /* Token.Type */
    ], result, parse(opToken & 960, expressionType));
    $assignable = false;
  }
  if (63 < minPrecedence) {
    return result;
  }
  if (consumeOpt(
    6291479
    /* Token.Question */
  )) {
    const yes = parse(62, expressionType);
    consume(
      6291477
      /* Token.Colon */
    );
    result = new ConditionalExpression(result, yes, parse(62, expressionType));
    $assignable = false;
  }
  if (62 < minPrecedence) {
    return result;
  }
  switch ($currentToken) {
    case 4194350:
    case 4194356:
    case 4194357:
    case 4194358:
    case 4194359: {
      if (!$assignable) {
        throw lhsNotAssignable();
      }
      const op = TokenValues[
        $currentToken & 63
        /* Token.Type */
      ];
      nextToken();
      result = new AssignExpression(result, parse(62, expressionType), op);
      break;
    }
  }
  if (61 < minPrecedence) {
    return result;
  }
  while (consumeOpt(
    6291481
    /* Token.Bar */
  )) {
    if ($currentToken === 6291456) {
      throw expectedValueConverterIdentifier();
    }
    const name = $tokenValue;
    nextToken();
    const args = new Array();
    while (consumeOpt(
      6291477
      /* Token.Colon */
    )) {
      args.push(parse(62, expressionType));
    }
    result = new ValueConverterExpression(result, name, args);
  }
  while (consumeOpt(
    6291480
    /* Token.Ampersand */
  )) {
    if ($currentToken === 6291456) {
      throw expectedBindingBehaviorIdentifier();
    }
    const name = $tokenValue;
    nextToken();
    const args = new Array();
    while (consumeOpt(
      6291477
      /* Token.Colon */
    )) {
      args.push(parse(62, expressionType));
    }
    result = new BindingBehaviorExpression(result, name, args);
  }
  if ($currentToken !== 6291456) {
    if (expressionType === etInterpolation && $currentToken === 7340046) {
      return result;
    }
    if (expressionType === etIsChainable && $currentToken === 6291478) {
      if ($index === $length) {
        throw unconsumedToken();
      }
      $semicolonIndex = $index - 1;
      return result;
    }
    if ($tokenRaw() === "of") {
      throw unexpectedOfKeyword();
    }
    throw unconsumedToken();
  }
  return result;
}
function parseArrayDestructuring() {
  const items = [];
  const dae = new DestructuringAssignmentExpression(ekArrayDestructuring, items, void 0, void 0);
  let target = "";
  let $continue = true;
  let index = 0;
  while ($continue) {
    nextToken();
    switch ($currentToken) {
      case 7340052:
        $continue = false;
        addItem();
        break;
      case 6291472:
        addItem();
        break;
      case 4096:
        target = $tokenRaw();
        break;
      default:
        throw unexpectedTokenInDestructuring();
    }
  }
  consume(
    7340052
    /* Token.CloseBracket */
  );
  return dae;
  function addItem() {
    if (target !== "") {
      items.push(new DestructuringAssignmentSingleExpression(new AccessMemberExpression($this, target), new AccessKeyedExpression($this, new PrimitiveLiteralExpression(index++)), void 0));
      target = "";
    } else {
      index++;
    }
  }
}
function parseArguments() {
  const _optional = $optional;
  nextToken();
  const args = [];
  while ($currentToken !== 7340047) {
    args.push(parse(62, etNone));
    if (!consumeOpt(
      6291472
      /* Token.Comma */
    )) {
      break;
    }
  }
  consume(
    7340047
    /* Token.CloseParen */
  );
  $assignable = false;
  $optional = _optional;
  return args;
}
function parseKeyedExpression(result, optional2) {
  const _optional = $optional;
  nextToken();
  result = new AccessKeyedExpression(result, parse(62, etNone), optional2);
  consume(
    7340052
    /* Token.CloseBracket */
  );
  $assignable = !_optional;
  $optional = _optional;
  return result;
}
function parseOptionalChainLHS(lhs) {
  $optional = true;
  $assignable = false;
  nextToken();
  if (($currentToken & 13312) === 0) {
    throw unexpectedTokenInOptionalChain();
  }
  if ($currentToken & 12288) {
    return parseMemberExpressionLHS(lhs, true);
  }
  if ($currentToken === 2688008) {
    if (lhs.$kind === ekAccessScope) {
      return new CallScopeExpression(lhs.name, parseArguments(), lhs.ancestor, true);
    } else if (lhs.$kind === ekAccessMember) {
      return new CallMemberExpression(lhs.object, lhs.name, parseArguments(), lhs.optional, true);
    } else {
      return new CallFunctionExpression(lhs, parseArguments(), true);
    }
  }
  if ($currentToken === 2688019) {
    return parseKeyedExpression(lhs, true);
  }
  throw invalidTaggedTemplateOnOptionalChain();
}
function parseMemberExpressionLHS(lhs, optional2) {
  const rhs = $tokenValue;
  switch ($currentToken) {
    case 2162701: {
      $optional = true;
      $assignable = false;
      const indexSave = $index;
      const startIndexSave = $startIndex;
      const currentTokenSave = $currentToken;
      const currentCharSave = $currentChar;
      const tokenValueSave = $tokenValue;
      const assignableSave = $assignable;
      const optionalSave = $optional;
      nextToken();
      if (($currentToken & 13312) === 0) {
        throw unexpectedTokenInOptionalChain();
      }
      if ($currentToken === 2688008) {
        return new CallMemberExpression(lhs, rhs, parseArguments(), optional2, true);
      }
      $index = indexSave;
      $startIndex = startIndexSave;
      $currentToken = currentTokenSave;
      $currentChar = currentCharSave;
      $tokenValue = tokenValueSave;
      $assignable = assignableSave;
      $optional = optionalSave;
      return new AccessMemberExpression(lhs, rhs, optional2);
    }
    case 2688008: {
      $assignable = false;
      return new CallMemberExpression(lhs, rhs, parseArguments(), optional2, false);
    }
    default: {
      $assignable = !$optional;
      nextToken();
      return new AccessMemberExpression(lhs, rhs, optional2);
    }
  }
}
function parseCoverParenthesizedExpressionAndArrowParameterList(expressionType) {
  nextToken();
  const indexSave = $index;
  const startIndexSave = $startIndex;
  const currentTokenSave = $currentToken;
  const currentCharSave = $currentChar;
  const tokenValueSave = $tokenValue;
  const optionalSave = $optional;
  const arrowParams = [];
  let paramsState = 1;
  let isParamList = false;
  loop: while (true) {
    if ($currentToken === 12) {
      nextToken();
      if ($currentToken !== 4096) {
        throw expectedIdentifier();
      }
      arrowParams.push(new BindingIdentifier($tokenValue));
      nextToken();
      if ($currentToken === 6291472) {
        throw restParamsMustBeLastParam();
      }
      if ($currentToken !== 7340047) {
        throw invalidSpreadOp();
      }
      nextToken();
      if ($currentToken !== 51) {
        throw invalidSpreadOp();
      }
      nextToken();
      const _optional2 = $optional;
      const _scopeDepth = $scopeDepth;
      ++$scopeDepth;
      const body = parse(62, etNone);
      $optional = _optional2;
      $scopeDepth = _scopeDepth;
      $assignable = false;
      return new ArrowFunction(arrowParams, body, true);
    }
    switch ($currentToken) {
      case 4096:
        arrowParams.push(new BindingIdentifier($tokenValue));
        nextToken();
        break;
      case 7340047:
        nextToken();
        break loop;
      /* eslint-disable */
      case 524297:
      // ({     - may be a valid parenthesized expression
      case 2688019:
        nextToken();
        paramsState = 4;
        break;
      /* eslint-enable */
      case 6291472:
        paramsState = 2;
        isParamList = true;
        break loop;
      case 2688008:
        paramsState = 2;
        break loop;
      default:
        nextToken();
        paramsState = 2;
        break;
    }
    switch ($currentToken) {
      case 6291472:
        nextToken();
        isParamList = true;
        if (paramsState === 1) {
          break;
        }
        break loop;
      case 7340047:
        nextToken();
        break loop;
      case 4194350:
        if (paramsState === 1) {
          paramsState = 3;
        }
        break loop;
      case 51:
        if (isParamList) {
          throw invalidArrowParameterList();
        }
        nextToken();
        paramsState = 2;
        break loop;
      default:
        if (paramsState === 1) {
          paramsState = 2;
        }
        break loop;
    }
  }
  if ($currentToken === 51) {
    if (paramsState === 1) {
      nextToken();
      if ($currentToken === 524297) {
        throw functionBodyInArrowFn();
      }
      const _optional2 = $optional;
      const _scopeDepth = $scopeDepth;
      ++$scopeDepth;
      const body = parse(62, etNone);
      $optional = _optional2;
      $scopeDepth = _scopeDepth;
      $assignable = false;
      return new ArrowFunction(arrowParams, body);
    }
    throw invalidArrowParameterList();
  } else if (paramsState === 1 && arrowParams.length === 0) {
    throw missingExpectedToken(
      51
      /* Token.Arrow */
    );
  }
  if (isParamList) {
    switch (paramsState) {
      case 2:
        throw invalidArrowParameterList();
      case 3:
        throw defaultParamsInArrowFn();
      case 4:
        throw destructuringParamsInArrowFn();
    }
  }
  $index = indexSave;
  $startIndex = startIndexSave;
  $currentToken = currentTokenSave;
  $currentChar = currentCharSave;
  $tokenValue = tokenValueSave;
  $optional = optionalSave;
  const _optional = $optional;
  const expr = parse(62, expressionType);
  $optional = _optional;
  consume(
    7340047
    /* Token.CloseParen */
  );
  if ($currentToken === 51) {
    switch (paramsState) {
      case 2:
        throw invalidArrowParameterList();
      case 3:
        throw defaultParamsInArrowFn();
      case 4:
        throw destructuringParamsInArrowFn();
    }
  }
  return expr;
}
function parseArrayLiteralExpression(expressionType) {
  const _optional = $optional;
  nextToken();
  const elements = new Array();
  while ($currentToken !== 7340052) {
    if (consumeOpt(
      6291472
      /* Token.Comma */
    )) {
      elements.push($undefined);
      if ($currentToken === 7340052) {
        break;
      }
    } else {
      elements.push(parse(62, expressionType === etIsIterator ? etNone : expressionType));
      if (consumeOpt(
        6291472
        /* Token.Comma */
      )) {
        if ($currentToken === 7340052) {
          break;
        }
      } else {
        break;
      }
    }
  }
  $optional = _optional;
  consume(
    7340052
    /* Token.CloseBracket */
  );
  if (expressionType === etIsIterator) {
    return new ArrayBindingPattern(elements);
  } else {
    $assignable = false;
    return new ArrayLiteralExpression(elements);
  }
}
var allowedForExprKinds = [ekArrayBindingPattern, ekObjectBindingPattern, ekBindingIdentifier, ekArrayDestructuring, ekObjectDestructuring];
function parseForOfStatement(result) {
  if (!allowedForExprKinds.includes(result.$kind)) {
    throw invalidLHSBindingIdentifierInForOf(result.$kind);
  }
  if ($currentToken !== 4204594) {
    throw invalidLHSBindingIdentifierInForOf(result.$kind);
  }
  nextToken();
  const declaration = result;
  const statement = parse(61, etIsChainable);
  return new ForOfStatement(declaration, statement, $semicolonIndex);
}
function parseObjectLiteralExpression(expressionType) {
  const _optional = $optional;
  const keys = new Array();
  const values = new Array();
  nextToken();
  while ($currentToken !== 7340046) {
    keys.push($tokenValue);
    if ($currentToken & 49152) {
      nextToken();
      consume(
        6291477
        /* Token.Colon */
      );
      values.push(parse(62, expressionType === etIsIterator ? etNone : expressionType));
    } else if ($currentToken & 12288) {
      const currentChar = $currentChar;
      const currentToken = $currentToken;
      const index = $index;
      nextToken();
      if (consumeOpt(
        6291477
        /* Token.Colon */
      )) {
        values.push(parse(62, expressionType === etIsIterator ? etNone : expressionType));
      } else {
        $currentChar = currentChar;
        $currentToken = currentToken;
        $index = index;
        values.push(parse(515, expressionType === etIsIterator ? etNone : expressionType));
      }
    } else {
      throw invalidPropDefInObjLiteral();
    }
    if ($currentToken !== 7340046) {
      consume(
        6291472
        /* Token.Comma */
      );
    }
  }
  $optional = _optional;
  consume(
    7340046
    /* Token.CloseBrace */
  );
  if (expressionType === etIsIterator) {
    return new ObjectBindingPattern(keys, values);
  } else {
    $assignable = false;
    return new ObjectLiteralExpression(keys, values);
  }
}
function parseInterpolation() {
  const parts = [];
  const expressions = [];
  const length = $length;
  let result = "";
  while ($index < length) {
    switch ($currentChar) {
      case 36:
        if ($charCodeAt($index + 1) === 123) {
          parts.push(result);
          result = "";
          $index += 2;
          $currentChar = $charCodeAt($index);
          nextToken();
          const expression = parse(61, etInterpolation);
          expressions.push(expression);
          continue;
        } else {
          result += "$";
        }
        break;
      case 92:
        result += stringFromCharCode(unescapeCode(nextChar()));
        break;
      default:
        result += stringFromCharCode($currentChar);
    }
    nextChar();
  }
  if (expressions.length) {
    parts.push(result);
    return new Interpolation(parts, expressions);
  }
  return null;
}
function parseTemplate(expressionType, result, tagged) {
  const _optional = $optional;
  const cooked = [$tokenValue];
  consume(
    2163761
    /* Token.TemplateContinuation */
  );
  const expressions = [parse(62, expressionType)];
  while (($currentToken = scanTemplateTail()) !== 2163760) {
    cooked.push($tokenValue);
    consume(
      2163761
      /* Token.TemplateContinuation */
    );
    expressions.push(parse(62, expressionType));
  }
  cooked.push($tokenValue);
  $assignable = false;
  $optional = _optional;
  if (tagged) {
    nextToken();
    return new TaggedTemplateExpression(cooked, cooked, result, expressions);
  } else {
    nextToken();
    return new TemplateExpression(cooked, expressions);
  }
}
function createTemplateTail(result) {
  $assignable = false;
  const strings = [$tokenValue];
  nextToken();
  return new TaggedTemplateExpression(strings, strings, result);
}
function nextToken() {
  while ($index < $length) {
    $startIndex = $index;
    if (($currentToken = CharScanners[$currentChar]()) != null) {
      return;
    }
  }
  $currentToken = 6291456;
}
function nextChar() {
  return $currentChar = $charCodeAt(++$index);
}
function scanIdentifier() {
  while (IdParts[nextChar()])
    ;
  const token = KeywordLookup[$tokenValue = $tokenRaw()];
  return token === void 0 ? 4096 : token;
}
function scanNumber(isFloat) {
  let char = $currentChar;
  if (isFloat === false) {
    do {
      char = nextChar();
    } while (char <= 57 && char >= 48);
    if (char !== 46) {
      $tokenValue = parseInt($tokenRaw(), 10);
      return 32768;
    }
    char = nextChar();
    if ($index >= $length) {
      $tokenValue = parseInt($tokenRaw().slice(0, -1), 10);
      return 32768;
    }
  }
  if (char <= 57 && char >= 48) {
    do {
      char = nextChar();
    } while (char <= 57 && char >= 48);
  } else {
    $currentChar = $charCodeAt(--$index);
  }
  $tokenValue = parseFloat($tokenRaw());
  return 32768;
}
function scanString() {
  const quote = $currentChar;
  nextChar();
  let unescaped = 0;
  const buffer = new Array();
  let marker = $index;
  while ($currentChar !== quote) {
    if ($currentChar === 92) {
      buffer.push($input.slice(marker, $index));
      nextChar();
      unescaped = unescapeCode($currentChar);
      nextChar();
      buffer.push(stringFromCharCode(unescaped));
      marker = $index;
    } else if ($index >= $length) {
      throw unterminatedStringLiteral();
    } else {
      nextChar();
    }
  }
  const last = $input.slice(marker, $index);
  nextChar();
  buffer.push(last);
  const unescapedStr = buffer.join("");
  $tokenValue = unescapedStr;
  return 16384;
}
function scanTemplate() {
  let tail = true;
  let result = "";
  while (nextChar() !== 96) {
    if ($currentChar === 36) {
      if ($index + 1 < $length && $charCodeAt($index + 1) === 123) {
        $index++;
        tail = false;
        break;
      } else {
        result += "$";
      }
    } else if ($currentChar === 92) {
      result += stringFromCharCode(unescapeCode(nextChar()));
    } else {
      if ($index >= $length) {
        throw unterminatedTemplateLiteral();
      }
      result += stringFromCharCode($currentChar);
    }
  }
  nextChar();
  $tokenValue = result;
  if (tail) {
    return 2163760;
  }
  return 2163761;
}
var scanTemplateTail = () => {
  if ($index >= $length) {
    throw unterminatedTemplateLiteral();
  }
  $index--;
  return scanTemplate();
};
var consumeOpt = (token) => {
  if ($currentToken === token) {
    nextToken();
    return true;
  }
  return false;
};
var consume = (token) => {
  if ($currentToken === token) {
    nextToken();
  } else {
    throw missingExpectedToken(token);
  }
};
var invalidStartOfExpression = () => createMappedError2(151, $input);
var invalidSpreadOp = () => createMappedError2(152, $input);
var expectedIdentifier = () => createMappedError2(153, $input);
var invalidMemberExpression = () => createMappedError2(154, $input);
var unexpectedEndOfExpression = () => createMappedError2(155, $input);
var unconsumedToken = () => createMappedError2(156, $tokenRaw(), $index, $input);
var invalidEmptyExpression = () => createMappedError2(
  157
  /* ErrorNames.parse_invalid_empty */
);
var lhsNotAssignable = () => createMappedError2(158, $input);
var expectedValueConverterIdentifier = () => createMappedError2(159, $input);
var expectedBindingBehaviorIdentifier = () => createMappedError2(160, $input);
var unexpectedOfKeyword = () => createMappedError2(161, $input);
var unexpectedImportKeyword = () => createMappedError2(162, $input);
var invalidLHSBindingIdentifierInForOf = (kind) => createMappedError2(163, $input, kind);
var invalidPropDefInObjLiteral = () => createMappedError2(164, $input);
var unterminatedStringLiteral = () => createMappedError2(165, $input);
var unterminatedTemplateLiteral = () => createMappedError2(166, $input);
var missingExpectedToken = (token) => createMappedError2(167, TokenValues[
  token & 63
  /* Token.Type */
], $input);
var unexpectedTokenInDestructuring = () => createMappedError2(170, $tokenRaw(), $index, $input);
var unexpectedTokenInOptionalChain = () => createMappedError2(171, $tokenRaw(), $index - 1, $input);
var invalidTaggedTemplateOnOptionalChain = () => createMappedError2(172, $input);
var invalidArrowParameterList = () => createMappedError2(173, $input);
var defaultParamsInArrowFn = () => createMappedError2(174, $input);
var destructuringParamsInArrowFn = () => createMappedError2(175, $input);
var restParamsMustBeLastParam = () => createMappedError2(176, $input);
var functionBodyInArrowFn = () => createMappedError2(178, $input);
var unexpectedDoubleDot = () => createMappedError2(179, $index - 1, $input);
var TokenValues = [
  $false,
  $true,
  $null,
  $undefined,
  "this",
  "$this",
  null,
  "$parent",
  "(",
  "{",
  ".",
  "..",
  "...",
  "?.",
  "}",
  ")",
  ",",
  "[",
  "]",
  ":",
  ";",
  "?",
  "'",
  '"',
  "&",
  "|",
  "??",
  "||",
  "&&",
  "==",
  "!=",
  "===",
  "!==",
  "<",
  ">",
  "<=",
  ">=",
  "in",
  "instanceof",
  "+",
  "-",
  "typeof",
  "void",
  "*",
  "%",
  "/",
  "=",
  "!",
  2163760,
  2163761,
  "of",
  "=>",
  "+=",
  "-=",
  "*=",
  "/=",
  "++",
  "--"
];
var KeywordLookup = Object.assign(createLookup2(), {
  true: 8193,
  null: 8194,
  false: 8192,
  undefined: 8195,
  this: 12293,
  $this: 12292,
  $parent: 12295,
  in: 6562213,
  instanceof: 6562214,
  typeof: 139305,
  void: 139306,
  of: 4204594
});
var { CharScanners, IdParts } = (() => {
  const unexpectedCharacter = () => {
    throw createMappedError2(168, $input);
  };
  unexpectedCharacter.notMapped = true;
  const codes = {
    /* [$0-9A-Za_a-z] */
    AsciiIdPart: [36, 0, 48, 58, 65, 91, 95, 0, 97, 123],
    IdStart: (
      /* IdentifierStart */
      [36, 0, 65, 91, 95, 0, 97, 123, 170, 0, 186, 0, 192, 215, 216, 247, 248, 697, 736, 741, 7424, 7462, 7468, 7517, 7522, 7526, 7531, 7544, 7545, 7615, 7680, 7936, 8305, 0, 8319, 0, 8336, 8349, 8490, 8492, 8498, 0, 8526, 0, 8544, 8585, 11360, 11392, 42786, 42888, 42891, 42927, 42928, 42936, 42999, 43008, 43824, 43867, 43868, 43877, 64256, 64263, 65313, 65339, 65345, 65371]
    ),
    Digit: (
      /* DecimalNumber */
      [48, 58]
    ),
    Skip: (
      /* Skippable */
      [0, 33, 127, 161]
    )
  };
  const decompress = (lookup2, $set, compressed, value) => {
    const rangeCount = compressed.length;
    for (let i = 0; i < rangeCount; i += 2) {
      const start = compressed[i];
      let end = compressed[i + 1];
      end = end > 0 ? end : start + 1;
      if (lookup2) {
        lookup2.fill(value, start, end);
      }
      if ($set) {
        for (let ch = start; ch < end; ch++) {
          $set.add(ch);
        }
      }
    }
  };
  const IdParts2 = ((IdParts3) => {
    decompress(IdParts3, null, codes.IdStart, 1);
    decompress(IdParts3, null, codes.Digit, 1);
    return IdParts3;
  })(new Uint8Array(65535));
  const returnToken = (token) => () => {
    nextChar();
    return token;
  };
  const CharScanners2 = new Array(65535);
  CharScanners2.fill(unexpectedCharacter, 0, 65535);
  decompress(CharScanners2, null, codes.Skip, () => {
    nextChar();
    return null;
  });
  decompress(CharScanners2, null, codes.IdStart, scanIdentifier);
  decompress(CharScanners2, null, codes.Digit, () => scanNumber(false));
  CharScanners2[
    34
    /* Char.DoubleQuote */
  ] = CharScanners2[
    39
    /* Char.SingleQuote */
  ] = () => {
    return scanString();
  };
  CharScanners2[
    96
    /* Char.Backtick */
  ] = () => {
    return scanTemplate();
  };
  CharScanners2[
    33
    /* Char.Exclamation */
  ] = () => {
    if (nextChar() !== 61) {
      return 131119;
    }
    if (nextChar() !== 61) {
      return 6553950;
    }
    nextChar();
    return 6553952;
  };
  CharScanners2[
    61
    /* Char.Equals */
  ] = () => {
    if (nextChar() === 62) {
      nextChar();
      return 51;
    }
    if ($currentChar !== 61) {
      return 4194350;
    }
    if (nextChar() !== 61) {
      return 6553949;
    }
    nextChar();
    return 6553951;
  };
  CharScanners2[
    38
    /* Char.Ampersand */
  ] = () => {
    if (nextChar() !== 38) {
      return 6291480;
    }
    nextChar();
    return 6553884;
  };
  CharScanners2[
    124
    /* Char.Bar */
  ] = () => {
    if (nextChar() !== 124) {
      return 6291481;
    }
    nextChar();
    return 6553819;
  };
  CharScanners2[
    63
    /* Char.Question */
  ] = () => {
    if (nextChar() === 46) {
      const peek = $charCodeAt($index + 1);
      if (peek <= 48 || peek >= 57) {
        nextChar();
        return 2162701;
      }
      return 6291479;
    }
    if ($currentChar !== 63) {
      return 6291479;
    }
    nextChar();
    return 6553754;
  };
  CharScanners2[
    46
    /* Char.Dot */
  ] = () => {
    if (nextChar() <= 57 && $currentChar >= 48) {
      return scanNumber(true);
    }
    if ($currentChar === 46) {
      if (nextChar() !== 46) {
        return 11;
      }
      nextChar();
      return 12;
    }
    return 65546;
  };
  CharScanners2[
    60
    /* Char.LessThan */
  ] = () => {
    if (nextChar() !== 61) {
      return 6554017;
    }
    nextChar();
    return 6554019;
  };
  CharScanners2[
    62
    /* Char.GreaterThan */
  ] = () => {
    if (nextChar() !== 61) {
      return 6554018;
    }
    nextChar();
    return 6554020;
  };
  CharScanners2[
    37
    /* Char.Percent */
  ] = returnToken(
    6554156
    /* Token.Percent */
  );
  CharScanners2[
    40
    /* Char.OpenParen */
  ] = returnToken(
    2688008
    /* Token.OpenParen */
  );
  CharScanners2[
    41
    /* Char.CloseParen */
  ] = returnToken(
    7340047
    /* Token.CloseParen */
  );
  CharScanners2[
    42
    /* Char.Asterisk */
  ] = () => {
    if (nextChar() !== 61) {
      return 6554155;
    }
    nextChar();
    return 4194358;
  };
  CharScanners2[
    43
    /* Char.Plus */
  ] = () => {
    if (nextChar() === 43) {
      nextChar();
      return 2228280;
    }
    if ($currentChar !== 61) {
      return 2490855;
    }
    nextChar();
    return 4194356;
  };
  CharScanners2[
    44
    /* Char.Comma */
  ] = returnToken(
    6291472
    /* Token.Comma */
  );
  CharScanners2[
    45
    /* Char.Minus */
  ] = () => {
    if (nextChar() === 45) {
      nextChar();
      return 2228281;
    }
    if ($currentChar !== 61) {
      return 2490856;
    }
    nextChar();
    return 4194357;
  };
  CharScanners2[
    47
    /* Char.Slash */
  ] = () => {
    if (nextChar() !== 61) {
      return 6554157;
    }
    nextChar();
    return 4194359;
  };
  CharScanners2[
    58
    /* Char.Colon */
  ] = returnToken(
    6291477
    /* Token.Colon */
  );
  CharScanners2[
    59
    /* Char.Semicolon */
  ] = returnToken(
    6291478
    /* Token.Semicolon */
  );
  CharScanners2[
    91
    /* Char.OpenBracket */
  ] = returnToken(
    2688019
    /* Token.OpenBracket */
  );
  CharScanners2[
    93
    /* Char.CloseBracket */
  ] = returnToken(
    7340052
    /* Token.CloseBracket */
  );
  CharScanners2[
    123
    /* Char.OpenBrace */
  ] = returnToken(
    524297
    /* Token.OpenBrace */
  );
  CharScanners2[
    125
    /* Char.CloseBrace */
  ] = returnToken(
    7340046
    /* Token.CloseBrace */
  );
  return { CharScanners: CharScanners2, IdParts: IdParts2 };
})();

// node_modules/@aurelia/template-compiler/dist/esm/index.dev.mjs
var tcCreateInterface = DI.createInterface;
var tcObjectFreeze = Object.freeze;
var { aliasTo: aliasRegistration, singleton: singletonRegistration2 } = Registration;
var etInterpolation2 = "Interpolation";
var etIsFunction2 = "IsFunction";
var etIsProperty2 = "IsProperty";
var definitionTypeElement = "custom-element";
var BindingMode = tcObjectFreeze({
  /**
   * Unspecified mode, bindings may act differently with this mode
   */
  default: 0,
  oneTime: 1,
  toView: 2,
  fromView: 4,
  twoWay: 6
});
var ITemplateCompiler = tcCreateInterface("ITemplateCompiler");
var IAttrMapper = tcCreateInterface("IAttrMapper");
var createMappedError3 = (code, ...details) => new Error(`AUR${String(code).padStart(4, "0")}: ${getMessageByCode3(code, ...details)}`);
var errorsMap3 = {
  [
    88
    /* ErrorNames.attribute_pattern_already_initialized */
  ]: "AttributeParser is already initialized; cannot add patterns after initialization.",
  [
    89
    /* ErrorNames.attribute_pattern_duplicate */
  ]: 'Attribute pattern "{{0}}" has already been registered.',
  [
    99
    /* ErrorNames.method_not_implemented */
  ]: "Method {{0}} not implemented",
  [
    157
    /* ErrorNames.binding_command_existed */
  ]: `Binding command {{0}} has already been registered.`,
  [
    701
    /* ErrorNames.compiler_root_is_local */
  ]: `Template compilation error in element "{{0:name}}": the root <template> cannot be a local element template.`,
  [
    702
    /* ErrorNames.compiler_invalid_surrogate_attr */
  ]: `Template compilation error: attribute "{{0}}" is invalid on element surrogate.`,
  [
    703
    /* ErrorNames.compiler_no_tc_on_surrogate */
  ]: `Template compilation error: template controller "{{0}}" is invalid on element surrogate.`,
  [
    704
    /* ErrorNames.compiler_invalid_let_command */
  ]: `Template compilation error: Invalid command "{{0:.command}}" for <let>. Only to-view/bind supported.`,
  [
    706
    /* ErrorNames.compiler_au_slot_on_non_element */
  ]: `Template compilation error: detected projection with [au-slot="{{0}}"] attempted on a non custom element {{1}}.`,
  [
    707
    /* ErrorNames.compiler_binding_to_non_bindable */
  ]: `Template compilation error: creating binding to non-bindable property {{0}} on {{1}}.`,
  [
    708
    /* ErrorNames.compiler_template_only_local_template */
  ]: `Template compilation error: the custom element "{{0}}" does not have any content other than local template(s).`,
  [
    709
    /* ErrorNames.compiler_local_el_not_under_root */
  ]: `Template compilation error: local element template needs to be defined directly under root of element "{{0}}".`,
  [
    710
    /* ErrorNames.compiler_local_el_bindable_not_under_root */
  ]: `Template compilation error: bindable properties of local element "{{0}}" template needs to be defined directly under <template>.`,
  [
    711
    /* ErrorNames.compiler_local_el_bindable_name_missing */
  ]: `Template compilation error: the attribute 'property' is missing in {{0:outerHTML}} in local element "{{1}}"`,
  [
    712
    /* ErrorNames.compiler_local_el_bindable_duplicate */
  ]: `Template compilation error: Bindable property and attribute needs to be unique; found property: {{0}}, attribute: {{1}}`,
  [
    713
    /* ErrorNames.compiler_unknown_binding_command */
  ]: `Template compilation error: unknown binding command: "{{0}}".{{0:bindingCommandHelp}}`,
  [
    714
    /* ErrorNames.compiler_primary_already_existed */
  ]: `Template compilation error: primary already exists on element/attribute "{{0}}"`,
  [
    715
    /* ErrorNames.compiler_local_name_empty */
  ]: `Template compilation error: the value of "as-custom-element" attribute cannot be empty for local element in element "{{0}}"`,
  [
    716
    /* ErrorNames.compiler_duplicate_local_name */
  ]: `Template compilation error: duplicate definition of the local template named "{{0}} in element {{1}}"`,
  [
    717
    /* ErrorNames.compiler_slot_without_shadowdom */
  ]: `Template compilation error: detected a usage of "<slot>" element without specifying shadow DOM options in element: {{0}}`,
  [
    718
    /* ErrorNames.compiler_no_spread_tc */
  ]: `Spreading template controller "{{0}}" is not supported.`,
  [
    719
    /* ErrorNames.compiler_attr_mapper_duplicate_mapping */
  ]: `Attribute {{0}} has been already registered for {{1:element}}`,
  [
    720
    /* ErrorNames.compiler_no_reserved_spread_syntax */
  ]: `Spreading syntax "...xxx" is reserved. Encountered "...{{0}}"`,
  [
    721
    /* ErrorNames.compiler_no_reserved_$bindable */
  ]: `Usage of $bindables is only allowed on custom element. Encountered: <{{0}} {{1}}="{{2}}">`,
  [
    722
    /* ErrorNames.compiler_no_dom_api */
  ]: "Invalid platform object provided to the compilation, no DOM API found.",
  [
    9998
    /* ErrorNames.no_spread_template_controller */
  ]: "Spread binding does not support spreading custom attributes/template controllers. Did you build the spread instruction manually?"
};
var getMessageByCode3 = (name, ...details) => {
  var _a3;
  let cooked = errorsMap3[name];
  for (let i = 0; i < details.length; ++i) {
    const regex = new RegExp(`{{${i}(:.*)?}}`, "g");
    let matches = regex.exec(cooked);
    while (matches != null) {
      const method = (_a3 = matches[1]) == null ? void 0 : _a3.slice(1);
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
          case "controller":
            value = value.controller.name;
            break;
          case "target@property":
            value = `${value.target}@${value.targetProperty}`;
            break;
          case "toString":
            value = Object.prototype.toString.call(value);
            break;
          case "join(!=)":
            value = value.join("!=");
            break;
          case "bindingCommandHelp":
            value = getBindingCommandHelp(value);
            break;
          case "element":
            value = value === "*" ? "all elements" : `<${value} />`;
            break;
          default: {
            if (method == null ? void 0 : method.startsWith(".")) {
              value = String(value[method.slice(1)]);
            } else {
              value = String(value);
            }
          }
        }
      }
      cooked = cooked.slice(0, matches.index) + value + cooked.slice(regex.lastIndex);
      matches = regex.exec(cooked);
    }
  }
  return cooked;
};
function getBindingCommandHelp(name) {
  switch (name) {
    case "delegate":
      return `
The ".delegate" binding command has been removed in v2. Binding command ".trigger" should be used instead. If you are migrating v1 application, install compat package to add back the ".delegate" binding command for ease of migration.`;
    case "call":
      return `
The ".call" binding command has been removed in v2. If you want to pass a callback that preserves the context of the function call, you can use lambda instead. Refer to lambda expression doc for more details.`;
    default:
      return "";
  }
}
var _a;
var _b;
var _c;
var _d;
var _e;
var CharSpec = class {
  constructor(chars, repeat, isSymbol2, isInverted) {
    this.chars = chars;
    this.repeat = repeat;
    this.isSymbol = isSymbol2;
    this.isInverted = isInverted;
    if (isInverted) {
      switch (chars.length) {
        case 0:
          this.has = this._hasOfNoneInverse;
          break;
        case 1:
          this.has = this._hasOfSingleInverse;
          break;
        default:
          this.has = this._hasOfMultipleInverse;
      }
    } else {
      switch (chars.length) {
        case 0:
          this.has = this._hasOfNone;
          break;
        case 1:
          this.has = this._hasOfSingle;
          break;
        default:
          this.has = this._hasOfMultiple;
      }
    }
  }
  equals(other) {
    return this.chars === other.chars && this.repeat === other.repeat && this.isSymbol === other.isSymbol && this.isInverted === other.isInverted;
  }
  /** @internal */
  _hasOfMultiple(char) {
    return this.chars.includes(char);
  }
  /** @internal */
  _hasOfSingle(char) {
    return this.chars === char;
  }
  /** @internal */
  _hasOfNone(_char) {
    return false;
  }
  /** @internal */
  _hasOfMultipleInverse(char) {
    return !this.chars.includes(char);
  }
  /** @internal */
  _hasOfSingleInverse(char) {
    return this.chars !== char;
  }
  /** @internal */
  _hasOfNoneInverse(_char) {
    return true;
  }
};
var Interpretation = class {
  constructor() {
    this.parts = emptyArray;
    this._pattern = "";
    this._currentRecord = {};
    this._partsRecord = {};
  }
  get pattern() {
    const value = this._pattern;
    if (value === "") {
      return null;
    } else {
      return value;
    }
  }
  set pattern(value) {
    if (value == null) {
      this._pattern = "";
      this.parts = emptyArray;
    } else {
      this._pattern = value;
      this.parts = this._partsRecord[value];
    }
  }
  append(pattern, ch) {
    const currentRecord = this._currentRecord;
    if (currentRecord[pattern] === void 0) {
      currentRecord[pattern] = ch;
    } else {
      currentRecord[pattern] += ch;
    }
  }
  next(pattern) {
    const currentRecord = this._currentRecord;
    let partsRecord;
    if (currentRecord[pattern] !== void 0) {
      partsRecord = this._partsRecord;
      if (partsRecord[pattern] === void 0) {
        partsRecord[pattern] = [currentRecord[pattern]];
      } else {
        partsRecord[pattern].push(currentRecord[pattern]);
      }
      currentRecord[pattern] = void 0;
    }
  }
};
var AttrParsingState = class _AttrParsingState {
  get _pattern() {
    return this._isEndpoint ? this._patterns[0] : null;
  }
  constructor(charSpec, ...patterns) {
    this.charSpec = charSpec;
    this._nextStates = [];
    this._types = null;
    this._isEndpoint = false;
    this._patterns = patterns;
  }
  findChild(charSpec) {
    const nextStates = this._nextStates;
    const len = nextStates.length;
    let child = null;
    let i = 0;
    for (; i < len; ++i) {
      child = nextStates[i];
      if (charSpec.equals(child.charSpec)) {
        return child;
      }
    }
    return null;
  }
  append(charSpec, pattern) {
    const patterns = this._patterns;
    if (!patterns.includes(pattern)) {
      patterns.push(pattern);
    }
    let state = this.findChild(charSpec);
    if (state == null) {
      state = new _AttrParsingState(charSpec, pattern);
      this._nextStates.push(state);
      if (charSpec.repeat) {
        state._nextStates.push(state);
      }
    }
    return state;
  }
  findMatches(ch, interpretation) {
    const results = [];
    const nextStates = this._nextStates;
    const len = nextStates.length;
    let childLen = 0;
    let child = null;
    let i = 0;
    let j = 0;
    for (; i < len; ++i) {
      child = nextStates[i];
      if (child.charSpec.has(ch)) {
        results.push(child);
        childLen = child._patterns.length;
        j = 0;
        if (child.charSpec.isSymbol) {
          for (; j < childLen; ++j) {
            interpretation.next(child._patterns[j]);
          }
        } else {
          for (; j < childLen; ++j) {
            interpretation.append(child._patterns[j], ch);
          }
        }
      }
    }
    return results;
  }
};
var StaticSegment = class {
  constructor(text) {
    this.text = text;
    const len = this._len = text.length;
    const specs = this._specs = [];
    let i = 0;
    for (; len > i; ++i) {
      specs.push(new CharSpec(text[i], false, false, false));
    }
  }
  eachChar(callback) {
    const len = this._len;
    const specs = this._specs;
    let i = 0;
    for (; len > i; ++i) {
      callback(specs[i]);
    }
  }
};
var DynamicSegment = class {
  constructor(symbols) {
    this.text = "PART";
    this._spec = new CharSpec(symbols, true, false, true);
  }
  eachChar(callback) {
    callback(this._spec);
  }
};
var SymbolSegment = class {
  constructor(text) {
    this.text = text;
    this._spec = new CharSpec(text, false, true, false);
  }
  eachChar(callback) {
    callback(this._spec);
  }
};
var SegmentTypes = class {
  constructor() {
    this.statics = 0;
    this.dynamics = 0;
    this.symbols = 0;
  }
};
var ISyntaxInterpreter = tcCreateInterface("ISyntaxInterpreter", (x) => x.singleton(SyntaxInterpreter));
var SyntaxInterpreter = class {
  constructor() {
    this._rootState = new AttrParsingState(null);
    this._initialStates = [this._rootState];
  }
  // todo: this only works if this method is ever called only once
  add(defs) {
    defs = defs.slice(0).sort((d1, d2) => d1.pattern > d2.pattern ? 1 : -1);
    const ii = defs.length;
    let currentState;
    let def2;
    let pattern;
    let types;
    let segments;
    let len;
    let charSpecCb;
    let i = 0;
    let j;
    while (ii > i) {
      currentState = this._rootState;
      def2 = defs[i];
      pattern = def2.pattern;
      types = new SegmentTypes();
      segments = this._parse(def2, types);
      len = segments.length;
      charSpecCb = (ch) => currentState = currentState.append(ch, pattern);
      for (j = 0; len > j; ++j) {
        segments[j].eachChar(charSpecCb);
      }
      currentState._types = types;
      currentState._isEndpoint = true;
      ++i;
    }
  }
  interpret(name) {
    const interpretation = new Interpretation();
    const len = name.length;
    let states = this._initialStates;
    let i = 0;
    let state;
    for (; i < len; ++i) {
      states = this._getNextStates(states, name.charAt(i), interpretation);
      if (states.length === 0) {
        break;
      }
    }
    states = states.filter(isEndpoint);
    if (states.length > 0) {
      states.sort(sortEndpoint);
      state = states[0];
      if (!state.charSpec.isSymbol) {
        interpretation.next(state._pattern);
      }
      interpretation.pattern = state._pattern;
    }
    return interpretation;
  }
  /** @internal */
  _getNextStates(states, ch, interpretation) {
    const nextStates = [];
    let state = null;
    const len = states.length;
    let i = 0;
    for (; i < len; ++i) {
      state = states[i];
      nextStates.push(...state.findMatches(ch, interpretation));
    }
    return nextStates;
  }
  /** @internal */
  _parse(def2, types) {
    const result = [];
    const pattern = def2.pattern;
    const len = pattern.length;
    const symbols = def2.symbols;
    let i = 0;
    let start = 0;
    let c = "";
    while (i < len) {
      c = pattern.charAt(i);
      if (symbols.length === 0 || !symbols.includes(c)) {
        if (i === start) {
          if (c === "P" && pattern.slice(i, i + 4) === "PART") {
            start = i = i + 4;
            result.push(new DynamicSegment(symbols));
            ++types.dynamics;
          } else {
            ++i;
          }
        } else {
          ++i;
        }
      } else if (i !== start) {
        result.push(new StaticSegment(pattern.slice(start, i)));
        ++types.statics;
        start = i;
      } else {
        result.push(new SymbolSegment(pattern.slice(start, i + 1)));
        ++types.symbols;
        start = ++i;
      }
    }
    if (start !== i) {
      result.push(new StaticSegment(pattern.slice(start, i)));
      ++types.statics;
    }
    return result;
  }
};
function isEndpoint(a) {
  return a._isEndpoint;
}
function sortEndpoint(a, b) {
  const aTypes = a._types;
  const bTypes = b._types;
  if (aTypes.statics !== bTypes.statics) {
    return bTypes.statics - aTypes.statics;
  }
  if (aTypes.dynamics !== bTypes.dynamics) {
    return bTypes.dynamics - aTypes.dynamics;
  }
  if (aTypes.symbols !== bTypes.symbols) {
    return bTypes.symbols - aTypes.symbols;
  }
  return 0;
}
var AttrSyntax = class {
  constructor(rawName, rawValue, target, command, parts = null) {
    this.rawName = rawName;
    this.rawValue = rawValue;
    this.target = target;
    this.command = command;
    this.parts = parts;
  }
};
var IAttributePattern = tcCreateInterface("IAttributePattern");
var IAttributeParser = tcCreateInterface("IAttributeParser", (x) => x.singleton(AttributeParser));
var AttributeParser = class {
  constructor() {
    this._cache = {};
    this._patterns = {};
    this._initialized = false;
    this._allDefinitions = [];
    this._interpreter = resolve(ISyntaxInterpreter);
    this._container = resolve(IContainer);
  }
  registerPattern(patterns, Type) {
    if (this._initialized)
      throw createMappedError3(
        88
        /* ErrorNames.attribute_pattern_already_initialized */
      );
    const $patterns = this._patterns;
    for (const { pattern } of patterns) {
      if ($patterns[pattern] != null)
        throw createMappedError3(89, pattern);
      $patterns[pattern] = { patternType: Type };
    }
    this._allDefinitions.push(...patterns);
  }
  /** @internal */
  _initialize() {
    this._interpreter.add(this._allDefinitions);
    const _container = this._container;
    for (const [, value] of Object.entries(this._patterns)) {
      value.pattern = _container.get(value.patternType);
    }
  }
  parse(name, value) {
    if (!this._initialized) {
      this._initialize();
      this._initialized = true;
    }
    let interpretation = this._cache[name];
    if (interpretation == null) {
      interpretation = this._cache[name] = this._interpreter.interpret(name);
    }
    const pattern = interpretation.pattern;
    if (pattern == null) {
      return new AttrSyntax(name, value, name, null, null);
    } else {
      return this._patterns[pattern].pattern[pattern](name, value, interpretation.parts);
    }
  }
};
function attributePattern(...patternDefs) {
  return function decorator(target, context) {
    const registrable = AttributePattern.create(patternDefs, target);
    context.metadata[registrableMetadataKey] = registrable;
    return target;
  };
}
var AttributePattern = tcObjectFreeze({
  name: getResourceKeyFor("attribute-pattern"),
  create(patternDefs, Type) {
    return {
      register(container) {
        container.get(IAttributeParser).registerPattern(patternDefs, Type);
        singletonRegistration2(IAttributePattern, Type).register(container);
      }
    };
  }
});
var DotSeparatedAttributePattern = class {
  "PART.PART"(rawName, rawValue, parts) {
    return new AttrSyntax(rawName, rawValue, parts[0], parts[1]);
  }
  "PART.PART.PART"(rawName, rawValue, parts) {
    return new AttrSyntax(rawName, rawValue, `${parts[0]}.${parts[1]}`, parts[2]);
  }
};
_a = Symbol.metadata;
DotSeparatedAttributePattern[_a] = {
  [registrableMetadataKey]: AttributePattern.create([
    { pattern: "PART.PART", symbols: "." },
    { pattern: "PART.PART.PART", symbols: "." }
  ], DotSeparatedAttributePattern)
};
var RefAttributePattern = class {
  "ref"(rawName, rawValue, _parts) {
    return new AttrSyntax(rawName, rawValue, "element", "ref");
  }
  "PART.ref"(rawName, rawValue, parts) {
    let target = parts[0];
    if (target === "view-model") {
      target = "component";
      {
        console.warn(`[aurelia] Detected view-model.ref usage: "${rawName}=${rawValue}". This is deprecated and component.ref should be used instead`);
      }
    }
    return new AttrSyntax(rawName, rawValue, target, "ref");
  }
};
_b = Symbol.metadata;
RefAttributePattern[_b] = {
  [registrableMetadataKey]: AttributePattern.create([
    { pattern: "ref", symbols: "" },
    { pattern: "PART.ref", symbols: "." }
  ], RefAttributePattern)
};
var EventAttributePattern = class {
  "PART.trigger:PART"(rawName, rawValue, parts) {
    return new AttrSyntax(rawName, rawValue, parts[0], "trigger", parts);
  }
  "PART.capture:PART"(rawName, rawValue, parts) {
    return new AttrSyntax(rawName, rawValue, parts[0], "capture", parts);
  }
};
_c = Symbol.metadata;
EventAttributePattern[_c] = {
  [registrableMetadataKey]: AttributePattern.create([
    { pattern: "PART.trigger:PART", symbols: ".:" },
    { pattern: "PART.capture:PART", symbols: ".:" }
  ], EventAttributePattern)
};
var ColonPrefixedBindAttributePattern = class {
  ":PART"(rawName, rawValue, parts) {
    return new AttrSyntax(rawName, rawValue, parts[0], "bind");
  }
};
_d = Symbol.metadata;
ColonPrefixedBindAttributePattern[_d] = {
  [registrableMetadataKey]: AttributePattern.create([{ pattern: ":PART", symbols: ":" }], ColonPrefixedBindAttributePattern)
};
var AtPrefixedTriggerAttributePattern = class {
  "@PART"(rawName, rawValue, parts) {
    return new AttrSyntax(rawName, rawValue, parts[0], "trigger");
  }
  "@PART:PART"(rawName, rawValue, parts) {
    return new AttrSyntax(rawName, rawValue, parts[0], "trigger", [parts[0], "trigger", ...parts.slice(1)]);
  }
};
_e = Symbol.metadata;
AtPrefixedTriggerAttributePattern[_e] = {
  [registrableMetadataKey]: AttributePattern.create([
    { pattern: "@PART", symbols: "@" },
    { pattern: "@PART:PART", symbols: "@:" }
  ], AtPrefixedTriggerAttributePattern)
};
var getMetadata2 = Metadata.get;
Metadata.has;
var defineMetadata2 = Metadata.define;
var hydrateElement = "ra";
var hydrateAttribute = "rb";
var hydrateTemplateController = "rc";
var hydrateLetElement = "rd";
var setProperty = "re";
var interpolation = "rf";
var propertyBinding = "rg";
var letBinding = "ri";
var refBinding = "rj";
var iteratorBinding = "rk";
var multiAttr = "rl";
var textBinding = "ha";
var listenerBinding = "hb";
var attributeBinding = "hc";
var stylePropertyBinding = "hd";
var setAttribute = "he";
var setClassAttribute = "hf";
var setStyleAttribute = "hg";
var spreadTransferedBinding = "hs";
var spreadElementProp = "hp";
var spreadValueBinding = "svb";
var InstructionType = tcObjectFreeze({
  hydrateElement,
  hydrateAttribute,
  hydrateTemplateController,
  hydrateLetElement,
  setProperty,
  interpolation,
  propertyBinding,
  letBinding,
  refBinding,
  iteratorBinding,
  multiAttr,
  textBinding,
  listenerBinding,
  attributeBinding,
  stylePropertyBinding,
  setAttribute,
  setClassAttribute,
  setStyleAttribute,
  spreadTransferedBinding,
  spreadElementProp,
  spreadValueBinding
});
var IInstruction = tcCreateInterface("Instruction");
var InterpolationInstruction = class {
  constructor(from, to) {
    this.from = from;
    this.to = to;
    this.type = interpolation;
  }
};
var PropertyBindingInstruction = class {
  constructor(from, to, mode) {
    this.from = from;
    this.to = to;
    this.mode = mode;
    this.type = propertyBinding;
  }
};
var IteratorBindingInstruction = class {
  constructor(forOf, to, props) {
    this.forOf = forOf;
    this.to = to;
    this.props = props;
    this.type = iteratorBinding;
  }
};
var RefBindingInstruction = class {
  constructor(from, to) {
    this.from = from;
    this.to = to;
    this.type = refBinding;
  }
};
var SetPropertyInstruction = class {
  constructor(value, to) {
    this.value = value;
    this.to = to;
    this.type = setProperty;
  }
};
var MultiAttrInstruction = class {
  constructor(value, to, command) {
    this.value = value;
    this.to = to;
    this.command = command;
    this.type = multiAttr;
  }
};
var HydrateElementInstruction = class {
  constructor(res, props, projections, containerless2, captures, data) {
    this.res = res;
    this.props = props;
    this.projections = projections;
    this.containerless = containerless2;
    this.captures = captures;
    this.data = data;
    this.type = hydrateElement;
  }
};
var HydrateAttributeInstruction = class {
  constructor(res, alias2, props) {
    this.res = res;
    this.alias = alias2;
    this.props = props;
    this.type = hydrateAttribute;
  }
};
var HydrateTemplateController = class {
  constructor(def2, res, alias2, props) {
    this.def = def2;
    this.res = res;
    this.alias = alias2;
    this.props = props;
    this.type = hydrateTemplateController;
  }
};
var HydrateLetElementInstruction = class {
  constructor(instructions, toBindingContext) {
    this.instructions = instructions;
    this.toBindingContext = toBindingContext;
    this.type = hydrateLetElement;
  }
};
var LetBindingInstruction = class {
  constructor(from, to) {
    this.from = from;
    this.to = to;
    this.type = letBinding;
  }
};
var TextBindingInstruction = class {
  constructor(from) {
    this.from = from;
    this.type = textBinding;
  }
};
var ListenerBindingInstruction = class {
  constructor(from, to, capture2, modifier) {
    this.from = from;
    this.to = to;
    this.capture = capture2;
    this.modifier = modifier;
    this.type = listenerBinding;
  }
};
var SetAttributeInstruction = class {
  constructor(value, to) {
    this.value = value;
    this.to = to;
    this.type = setAttribute;
  }
};
var SetClassAttributeInstruction = class {
  constructor(value) {
    this.value = value;
    this.type = setClassAttribute;
  }
};
var SetStyleAttributeInstruction = class {
  constructor(value) {
    this.value = value;
    this.type = setStyleAttribute;
  }
};
var AttributeBindingInstruction = class {
  constructor(attr, from, to) {
    this.attr = attr;
    this.from = from;
    this.to = to;
    this.type = attributeBinding;
  }
};
var SpreadTransferedBindingInstruction = class {
  constructor() {
    this.type = spreadTransferedBinding;
  }
};
var SpreadElementPropBindingInstruction = class {
  constructor(instruction) {
    this.instruction = instruction;
    this.type = spreadElementProp;
  }
};
var SpreadValueBindingInstruction = class {
  constructor(target, from) {
    this.target = target;
    this.from = from;
    this.type = spreadValueBinding;
  }
};
function bindingCommand(nameOrDefinition) {
  return function(target, context) {
    context.addInitializer(function() {
      BindingCommand.define(nameOrDefinition, target);
    });
    return target;
  };
}
var BindingCommandDefinition = class _BindingCommandDefinition {
  constructor(Type, name, aliases, key) {
    this.Type = Type;
    this.name = name;
    this.aliases = aliases;
    this.key = key;
  }
  static create(nameOrDef, Type) {
    let name;
    let def2;
    if (isString(nameOrDef)) {
      name = nameOrDef;
      def2 = { name };
    } else {
      name = nameOrDef.name;
      def2 = nameOrDef;
    }
    return new _BindingCommandDefinition(Type, firstDefined(getCommandAnnotation(Type, "name"), name), mergeArrays(getCommandAnnotation(Type, "aliases"), def2.aliases, Type.aliases), getCommandKeyFrom(name));
  }
  register(container, aliasName) {
    const $Type = this.Type;
    const key = typeof aliasName === "string" ? getCommandKeyFrom(aliasName) : this.key;
    const aliases = this.aliases;
    if (!container.has(key, false)) {
      container.register(container.has($Type, false) ? null : singletonRegistration2($Type, $Type), aliasRegistration($Type, key), ...aliases.map((alias2) => aliasRegistration($Type, getCommandKeyFrom(alias2))));
    } else {
      console.warn(`[DEV:aurelia] ${createMappedError3(157, this.name)}`);
    }
  }
};
var bindingCommandTypeName = "binding-command";
var cmdBaseName = getResourceKeyFor(bindingCommandTypeName);
var getCommandKeyFrom = (name) => `${cmdBaseName}:${name}`;
var getCommandAnnotation = (Type, prop) => getMetadata2(Protocol.annotation.keyFor(prop), Type);
var BindingCommand = (() => {
  const staticResourceDefinitionMetadataKey = "__au_static_resource__";
  const getDefinitionFromStaticAu2 = (Type, typeName, createDef) => {
    var _a3;
    let def2 = getMetadata2(staticResourceDefinitionMetadataKey, Type);
    if (def2 == null) {
      if (((_a3 = Type.$au) == null ? void 0 : _a3.type) === typeName) {
        def2 = createDef(Type.$au, Type);
        defineMetadata2(def2, Type, staticResourceDefinitionMetadataKey);
      }
    }
    return def2;
  };
  return tcObjectFreeze({
    name: cmdBaseName,
    keyFrom: getCommandKeyFrom,
    // isType<T>(value: T): value is (T extends Constructable ? BindingCommandType<T> : never) {
    //   return isFunction(value) && hasOwnMetadata(cmdBaseName, value);
    // },
    define(nameOrDef, Type) {
      const definition = BindingCommandDefinition.create(nameOrDef, Type);
      const $Type = definition.Type;
      defineMetadata2(definition, $Type, cmdBaseName, resourceBaseName);
      return $Type;
    },
    getAnnotation: getCommandAnnotation,
    find(container, name) {
      const Type = container.find(bindingCommandTypeName, name);
      return Type == null ? null : getMetadata2(cmdBaseName, Type) ?? getDefinitionFromStaticAu2(Type, bindingCommandTypeName, BindingCommandDefinition.create) ?? null;
    },
    get(container, name) {
      {
        try {
          return container.get(resource(getCommandKeyFrom(name)));
        } catch (ex) {
          console.log(`


[DEV:aurelia] Cannot retrieve binding command with name




`, name);
          throw ex;
        }
      }
      return container.get(resource(getCommandKeyFrom(name)));
    }
  });
})();
var OneTimeBindingCommand = class {
  get ignoreAttr() {
    return false;
  }
  build(info2, exprParser, attrMapper) {
    const attr = info2.attr;
    let target = attr.target;
    let value = info2.attr.rawValue;
    value = value === "" ? camelCase(target) : value;
    if (info2.bindable == null) {
      target = attrMapper.map(info2.node, target) ?? camelCase(target);
    } else {
      target = info2.bindable.name;
    }
    return new PropertyBindingInstruction(
      exprParser.parse(value, etIsProperty2),
      target,
      1
      /* InternalBindingMode.oneTime */
    );
  }
};
OneTimeBindingCommand.$au = {
  type: bindingCommandTypeName,
  name: "one-time"
};
var ToViewBindingCommand = class {
  get ignoreAttr() {
    return false;
  }
  build(info2, exprParser, attrMapper) {
    const attr = info2.attr;
    let target = attr.target;
    let value = info2.attr.rawValue;
    value = value === "" ? camelCase(target) : value;
    if (info2.bindable == null) {
      target = attrMapper.map(info2.node, target) ?? camelCase(target);
    } else {
      target = info2.bindable.name;
    }
    return new PropertyBindingInstruction(
      exprParser.parse(value, etIsProperty2),
      target,
      2
      /* InternalBindingMode.toView */
    );
  }
};
ToViewBindingCommand.$au = {
  type: bindingCommandTypeName,
  name: "to-view"
};
var FromViewBindingCommand = class {
  get ignoreAttr() {
    return false;
  }
  build(info2, exprParser, attrMapper) {
    const attr = info2.attr;
    let target = attr.target;
    let value = attr.rawValue;
    value = value === "" ? camelCase(target) : value;
    if (info2.bindable == null) {
      target = attrMapper.map(info2.node, target) ?? camelCase(target);
    } else {
      target = info2.bindable.name;
    }
    return new PropertyBindingInstruction(
      exprParser.parse(value, etIsProperty2),
      target,
      4
      /* InternalBindingMode.fromView */
    );
  }
};
FromViewBindingCommand.$au = {
  type: bindingCommandTypeName,
  name: "from-view"
};
var TwoWayBindingCommand = class {
  get ignoreAttr() {
    return false;
  }
  build(info2, exprParser, attrMapper) {
    const attr = info2.attr;
    let target = attr.target;
    let value = attr.rawValue;
    value = value === "" ? camelCase(target) : value;
    if (info2.bindable == null) {
      target = attrMapper.map(info2.node, target) ?? camelCase(target);
    } else {
      target = info2.bindable.name;
    }
    return new PropertyBindingInstruction(
      exprParser.parse(value, etIsProperty2),
      target,
      6
      /* InternalBindingMode.twoWay */
    );
  }
};
TwoWayBindingCommand.$au = {
  type: bindingCommandTypeName,
  name: "two-way"
};
var DefaultBindingCommand = class {
  get ignoreAttr() {
    return false;
  }
  build(info2, exprParser, attrMapper) {
    const attr = info2.attr;
    const bindable2 = info2.bindable;
    let value = attr.rawValue;
    let target = attr.target;
    let defDefaultMode;
    let mode;
    value = value === "" ? camelCase(target) : value;
    if (bindable2 == null) {
      mode = attrMapper.isTwoWay(info2.node, target) ? 6 : 2;
      target = attrMapper.map(info2.node, target) ?? camelCase(target);
    } else {
      defDefaultMode = info2.def.defaultBindingMode ?? 0;
      mode = bindable2.mode === 0 || bindable2.mode == null ? defDefaultMode == null || defDefaultMode === 0 ? 2 : defDefaultMode : bindable2.mode;
      target = bindable2.name;
    }
    return new PropertyBindingInstruction(exprParser.parse(value, etIsProperty2), target, isString(mode) ? BindingMode[mode] ?? 0 : mode);
  }
};
DefaultBindingCommand.$au = {
  type: bindingCommandTypeName,
  name: "bind"
};
var ForBindingCommand = class {
  constructor() {
    this._attrParser = resolve(IAttributeParser);
  }
  get ignoreAttr() {
    return false;
  }
  build(info2, exprParser) {
    const target = info2.bindable === null ? camelCase(info2.attr.target) : info2.bindable.name;
    const forOf = exprParser.parse(info2.attr.rawValue, "IsIterator");
    let props = emptyArray;
    if (forOf.semiIdx > -1) {
      const attr = info2.attr.rawValue.slice(forOf.semiIdx + 1);
      const i = attr.indexOf(":");
      if (i > -1) {
        const attrName = attr.slice(0, i).trim();
        const attrValue = attr.slice(i + 1).trim();
        const attrSyntax = this._attrParser.parse(attrName, attrValue);
        props = [new MultiAttrInstruction(attrValue, attrSyntax.target, attrSyntax.command)];
      }
    }
    return new IteratorBindingInstruction(forOf, target, props);
  }
};
ForBindingCommand.$au = {
  type: bindingCommandTypeName,
  name: "for"
};
var TriggerBindingCommand = class {
  get ignoreAttr() {
    return true;
  }
  build(info2, exprParser) {
    var _a3;
    return new ListenerBindingInstruction(exprParser.parse(info2.attr.rawValue, etIsFunction2), info2.attr.target, false, ((_a3 = info2.attr.parts) == null ? void 0 : _a3[2]) ?? null);
  }
};
TriggerBindingCommand.$au = {
  type: bindingCommandTypeName,
  name: "trigger"
};
var CaptureBindingCommand = class {
  get ignoreAttr() {
    return true;
  }
  build(info2, exprParser) {
    var _a3;
    return new ListenerBindingInstruction(exprParser.parse(info2.attr.rawValue, etIsFunction2), info2.attr.target, true, ((_a3 = info2.attr.parts) == null ? void 0 : _a3[2]) ?? null);
  }
};
CaptureBindingCommand.$au = {
  type: bindingCommandTypeName,
  name: "capture"
};
var AttrBindingCommand = class {
  get ignoreAttr() {
    return true;
  }
  build(info2, exprParser) {
    const attr = info2.attr;
    const target = attr.target;
    let value = attr.rawValue;
    value = value === "" ? camelCase(target) : value;
    return new AttributeBindingInstruction(target, exprParser.parse(value, etIsProperty2), target);
  }
};
AttrBindingCommand.$au = {
  type: bindingCommandTypeName,
  name: "attr"
};
var StyleBindingCommand = class {
  get ignoreAttr() {
    return true;
  }
  build(info2, exprParser) {
    return new AttributeBindingInstruction("style", exprParser.parse(info2.attr.rawValue, etIsProperty2), info2.attr.target);
  }
};
StyleBindingCommand.$au = {
  type: bindingCommandTypeName,
  name: "style"
};
var ClassBindingCommand = class {
  get ignoreAttr() {
    return true;
  }
  build(info2, exprParser) {
    return new AttributeBindingInstruction("class", exprParser.parse(info2.attr.rawValue, etIsProperty2), info2.attr.target);
  }
};
ClassBindingCommand.$au = {
  type: bindingCommandTypeName,
  name: "class"
};
var RefBindingCommand = class {
  get ignoreAttr() {
    return true;
  }
  build(info2, exprParser) {
    return new RefBindingInstruction(exprParser.parse(info2.attr.rawValue, etIsProperty2), info2.attr.target);
  }
};
RefBindingCommand.$au = {
  type: bindingCommandTypeName,
  name: "ref"
};
var SpreadValueBindingCommand = class {
  get ignoreAttr() {
    return false;
  }
  build(info2) {
    return new SpreadValueBindingInstruction(info2.attr.target, info2.attr.rawValue);
  }
};
SpreadValueBindingCommand.$au = {
  type: bindingCommandTypeName,
  name: "spread"
};
var ITemplateElementFactory = tcCreateInterface("ITemplateElementFactory", (x) => x.singleton(TemplateElementFactory));
var markupCache = {};
var TemplateElementFactory = class {
  constructor() {
    this.p = resolve(IPlatform);
    this._template = this.t();
  }
  t() {
    return this.p.document.createElement("template");
  }
  createTemplate(input) {
    var _a3;
    if (isString(input)) {
      let result = markupCache[input];
      if (result === void 0) {
        const template = this._template;
        template.innerHTML = input;
        const node = template.content.firstElementChild;
        if (needsWrapping(node)) {
          this._template = this.t();
          result = template;
        } else {
          template.content.removeChild(node);
          result = node;
        }
        markupCache[input] = result;
      }
      return result.cloneNode(true);
    }
    if (input.nodeName !== "TEMPLATE") {
      const template = this.t();
      template.content.appendChild(input);
      return template;
    }
    (_a3 = input.parentNode) == null ? void 0 : _a3.removeChild(input);
    return input.cloneNode(true);
    function needsWrapping(node) {
      if (node == null)
        return true;
      if (node.nodeName !== "TEMPLATE")
        return true;
      const nextElementSibling = node.nextElementSibling;
      if (nextElementSibling != null)
        return true;
      const prevSibling = node.previousSibling;
      if (prevSibling != null) {
        switch (prevSibling.nodeType) {
          // The previous sibling cannot be an element, because the node is the first element in the template.
          case 3:
            return prevSibling.textContent.trim().length > 0;
        }
      }
      const nextSibling = node.nextSibling;
      if (nextSibling != null) {
        switch (nextSibling.nodeType) {
          // element is already checked above
          case 3:
            return nextSibling.textContent.trim().length > 0;
        }
      }
      return false;
    }
  }
};
var auLocationStart = "au-start";
var auLocationEnd = "au-end";
var insertBefore = (parent, newChildNode, target) => {
  return parent.insertBefore(newChildNode, target);
};
var insertManyBefore = (parent, target, newChildNodes) => {
  if (parent === null) {
    return;
  }
  const ii = newChildNodes.length;
  let i = 0;
  while (ii > i) {
    parent.insertBefore(newChildNodes[i], target);
    ++i;
  }
};
var appendToTemplate = (parent, child) => {
  return parent.content.appendChild(child);
};
var appendManyToTemplate = (parent, children2) => {
  const ii = children2.length;
  let i = 0;
  while (ii > i) {
    parent.content.appendChild(children2[i]);
    ++i;
  }
};
var isElement = (node) => node.nodeType === 1;
var isTextNode = (node) => node.nodeType === 3;
var auslotAttr = "au-slot";
var defaultSlotName = "default";
var generateElementName = /* @__PURE__ */ ((id2) => () => `anonymous-${++id2}`)(0);
var TemplateCompiler = class {
  constructor() {
    this.debug = false;
    this.resolveResources = true;
  }
  compile(definition, container) {
    var _a3, _b3;
    if (definition.template == null || definition.needsCompile === false) {
      return definition;
    }
    const context = new CompilationContext(definition, container, null, null, void 0);
    const template = isString(definition.template) || !definition.enhance ? context._templateFactory.createTemplate(definition.template) : definition.template;
    const isTemplateElement = template.nodeName === TEMPLATE_NODE_NAME && template.content != null;
    const content = isTemplateElement ? template.content : template;
    const hooks = TemplateCompilerHooks.findAll(container);
    const ii = hooks.length;
    let i = 0;
    if (ii > 0) {
      while (ii > i) {
        (_b3 = (_a3 = hooks[i]).compiling) == null ? void 0 : _b3.call(_a3, template);
        ++i;
      }
    }
    if (template.hasAttribute(localTemplateIdentifier)) {
      throw createMappedError3(701, definition);
    }
    this._compileLocalElement(content, context);
    this._compileNode(content, context);
    const compiledDef = {
      ...definition,
      name: definition.name || generateElementName(),
      dependencies: (definition.dependencies ?? emptyArray).concat(context.deps ?? emptyArray),
      instructions: context.rows,
      surrogates: isTemplateElement ? this._compileSurrogate(template, context) : emptyArray,
      template,
      hasSlots: context.hasSlot,
      needsCompile: false
    };
    return compiledDef;
  }
  compileSpread(requestor, attrSyntaxs, container, target, targetDef) {
    const context = new CompilationContext(requestor, container, null, null, void 0);
    const instructions = [];
    const elDef = targetDef ?? context._findElement(target.nodeName.toLowerCase());
    const isCustomElement = elDef !== null;
    const exprParser = context._exprParser;
    const ii = attrSyntaxs.length;
    let i = 0;
    let attrSyntax;
    let attrDef = null;
    let attrInstructions;
    let attrBindableInstructions;
    let bindablesInfo;
    let bindable2;
    let primaryBindable;
    let bindingCommand2 = null;
    let expr;
    let isMultiBindings;
    let attrTarget;
    let attrValue;
    for (; ii > i; ++i) {
      attrSyntax = attrSyntaxs[i];
      attrTarget = attrSyntax.target;
      attrValue = attrSyntax.rawValue;
      if (attrTarget === "...$attrs") {
        instructions.push(new SpreadTransferedBindingInstruction());
        continue;
      }
      bindingCommand2 = context._getCommand(attrSyntax);
      if (bindingCommand2 !== null && bindingCommand2.ignoreAttr) {
        commandBuildInfo.node = target;
        commandBuildInfo.attr = attrSyntax;
        commandBuildInfo.bindable = null;
        commandBuildInfo.def = null;
        instructions.push(bindingCommand2.build(commandBuildInfo, context._exprParser, context._attrMapper));
        continue;
      }
      if (isCustomElement) {
        bindablesInfo = context._getBindables(elDef);
        bindable2 = bindablesInfo.attrs[attrTarget];
        if (bindable2 !== void 0) {
          if (bindingCommand2 == null) {
            expr = exprParser.parse(attrValue, etInterpolation2);
            instructions.push(new SpreadElementPropBindingInstruction(expr == null ? new SetPropertyInstruction(attrValue, bindable2.name) : new InterpolationInstruction(expr, bindable2.name)));
          } else {
            commandBuildInfo.node = target;
            commandBuildInfo.attr = attrSyntax;
            commandBuildInfo.bindable = bindable2;
            commandBuildInfo.def = elDef;
            instructions.push(new SpreadElementPropBindingInstruction(bindingCommand2.build(commandBuildInfo, context._exprParser, context._attrMapper)));
          }
          continue;
        }
      }
      attrDef = context._findAttr(attrTarget);
      if (attrDef !== null) {
        if (attrDef.isTemplateController) {
          throw createMappedError3(9998, attrTarget);
        }
        bindablesInfo = context._getBindables(attrDef);
        isMultiBindings = attrDef.noMultiBindings === false && bindingCommand2 === null && hasInlineBindings(attrValue);
        if (isMultiBindings) {
          attrBindableInstructions = this._compileMultiBindings(target, attrValue, attrDef, context);
        } else {
          primaryBindable = bindablesInfo.primary;
          if (bindingCommand2 === null) {
            expr = exprParser.parse(attrValue, etInterpolation2);
            attrBindableInstructions = [
              expr === null ? new SetPropertyInstruction(attrValue, primaryBindable.name) : new InterpolationInstruction(expr, primaryBindable.name)
            ];
          } else {
            commandBuildInfo.node = target;
            commandBuildInfo.attr = attrSyntax;
            commandBuildInfo.bindable = primaryBindable;
            commandBuildInfo.def = attrDef;
            attrBindableInstructions = [bindingCommand2.build(commandBuildInfo, context._exprParser, context._attrMapper)];
          }
        }
        (attrInstructions ?? (attrInstructions = [])).push(new HydrateAttributeInstruction(
          // todo: def/ def.Type or def.name should be configurable
          //       example: AOT/runtime can use def.Type, but there are situation
          //       where instructions need to be serialized, def.name should be used
          this.resolveResources ? attrDef : attrDef.name,
          attrDef.aliases != null && attrDef.aliases.includes(attrTarget) ? attrTarget : void 0,
          attrBindableInstructions
        ));
        continue;
      }
      if (bindingCommand2 == null) {
        expr = exprParser.parse(attrValue, etInterpolation2);
        if (expr != null) {
          instructions.push(new InterpolationInstruction(
            expr,
            // if not a bindable, then ensure plain attribute are mapped correctly:
            // e.g: colspan -> colSpan
            //      innerhtml -> innerHTML
            //      minlength -> minLength etc...
            context._attrMapper.map(target, attrTarget) ?? camelCase(attrTarget)
          ));
        } else {
          switch (attrTarget) {
            case "class":
              instructions.push(new SetClassAttributeInstruction(attrValue));
              break;
            case "style":
              instructions.push(new SetStyleAttributeInstruction(attrValue));
              break;
            default:
              instructions.push(new SetAttributeInstruction(attrValue, attrTarget));
          }
        }
      } else {
        commandBuildInfo.node = target;
        commandBuildInfo.attr = attrSyntax;
        commandBuildInfo.bindable = null;
        commandBuildInfo.def = null;
        instructions.push(bindingCommand2.build(commandBuildInfo, context._exprParser, context._attrMapper));
      }
    }
    resetCommandBuildInfo();
    if (attrInstructions != null) {
      return attrInstructions.concat(instructions);
    }
    return instructions;
  }
  /** @internal */
  _compileSurrogate(el, context) {
    const instructions = [];
    const attrs = el.attributes;
    const exprParser = context._exprParser;
    let ii = attrs.length;
    let i = 0;
    let attr;
    let attrName;
    let attrValue;
    let attrSyntax;
    let attrDef = null;
    let attrInstructions;
    let attrBindableInstructions;
    let bindableInfo;
    let primaryBindable;
    let bindingCommand2 = null;
    let expr;
    let isMultiBindings;
    let realAttrTarget;
    let realAttrValue;
    for (; ii > i; ++i) {
      attr = attrs[i];
      attrName = attr.name;
      attrValue = attr.value;
      attrSyntax = context._attrParser.parse(attrName, attrValue);
      realAttrTarget = attrSyntax.target;
      realAttrValue = attrSyntax.rawValue;
      if (invalidSurrogateAttribute[realAttrTarget]) {
        throw createMappedError3(702, attrName);
      }
      bindingCommand2 = context._getCommand(attrSyntax);
      if (bindingCommand2 !== null && bindingCommand2.ignoreAttr) {
        commandBuildInfo.node = el;
        commandBuildInfo.attr = attrSyntax;
        commandBuildInfo.bindable = null;
        commandBuildInfo.def = null;
        instructions.push(bindingCommand2.build(commandBuildInfo, context._exprParser, context._attrMapper));
        continue;
      }
      attrDef = context._findAttr(realAttrTarget);
      if (attrDef !== null) {
        if (attrDef.isTemplateController) {
          throw createMappedError3(703, realAttrTarget);
        }
        bindableInfo = context._getBindables(attrDef);
        isMultiBindings = attrDef.noMultiBindings === false && bindingCommand2 === null && hasInlineBindings(realAttrValue);
        if (isMultiBindings) {
          attrBindableInstructions = this._compileMultiBindings(el, realAttrValue, attrDef, context);
        } else {
          primaryBindable = bindableInfo.primary;
          if (bindingCommand2 === null) {
            expr = exprParser.parse(realAttrValue, etInterpolation2);
            attrBindableInstructions = expr === null ? realAttrValue === "" ? [] : [new SetPropertyInstruction(realAttrValue, primaryBindable.name)] : [new InterpolationInstruction(expr, primaryBindable.name)];
          } else {
            commandBuildInfo.node = el;
            commandBuildInfo.attr = attrSyntax;
            commandBuildInfo.bindable = primaryBindable;
            commandBuildInfo.def = attrDef;
            attrBindableInstructions = [bindingCommand2.build(commandBuildInfo, context._exprParser, context._attrMapper)];
          }
        }
        el.removeAttribute(attrName);
        --i;
        --ii;
        (attrInstructions ?? (attrInstructions = [])).push(new HydrateAttributeInstruction(
          // todo: def/ def.Type or def.name should be configurable
          //       example: AOT/runtime can use def.Type, but there are situation
          //       where instructions need to be serialized, def.name should be used
          this.resolveResources ? attrDef : attrDef.name,
          attrDef.aliases != null && attrDef.aliases.includes(realAttrTarget) ? realAttrTarget : void 0,
          attrBindableInstructions
        ));
        continue;
      }
      if (bindingCommand2 === null) {
        expr = exprParser.parse(realAttrValue, etInterpolation2);
        if (expr != null) {
          el.removeAttribute(attrName);
          --i;
          --ii;
          instructions.push(new InterpolationInstruction(
            expr,
            // if not a bindable, then ensure plain attribute are mapped correctly:
            // e.g: colspan -> colSpan
            //      innerhtml -> innerHTML
            //      minlength -> minLength etc...
            context._attrMapper.map(el, realAttrTarget) ?? camelCase(realAttrTarget)
          ));
        } else {
          switch (attrName) {
            case "class":
              instructions.push(new SetClassAttributeInstruction(realAttrValue));
              break;
            case "style":
              instructions.push(new SetStyleAttributeInstruction(realAttrValue));
              break;
            default:
              instructions.push(new SetAttributeInstruction(realAttrValue, attrName));
          }
        }
      } else {
        commandBuildInfo.node = el;
        commandBuildInfo.attr = attrSyntax;
        commandBuildInfo.bindable = null;
        commandBuildInfo.def = null;
        instructions.push(bindingCommand2.build(commandBuildInfo, context._exprParser, context._attrMapper));
      }
    }
    resetCommandBuildInfo();
    if (attrInstructions != null) {
      return attrInstructions.concat(instructions);
    }
    return instructions;
  }
  // overall flow:
  // each of the method will be responsible for compiling its corresponding node type
  // and it should return the next node to be compiled
  /** @internal */
  _compileNode(node, context) {
    switch (node.nodeType) {
      case 1:
        switch (node.nodeName) {
          case "LET":
            return this._compileLet(node, context);
          // ------------------------------------
          // todo: possible optimization:
          // when two conditions below are met:
          // 1. there's no attribute on au slot,
          // 2. there's no projection
          //
          // -> flatten the au-slot into children as this is just a static template
          // ------------------------------------
          // case 'AU-SLOT':
          //   return this.auSlot(node as Element, container, context);
          default:
            return this._compileElement(node, context);
        }
      case 3:
        return this._compileText(node, context);
      case 11: {
        let current = node.firstChild;
        while (current !== null) {
          current = this._compileNode(current, context);
        }
        break;
      }
    }
    return node.nextSibling;
  }
  /** @internal */
  _compileLet(el, context) {
    const attrs = el.attributes;
    const ii = attrs.length;
    const letInstructions = [];
    const exprParser = context._exprParser;
    let toBindingContext = false;
    let i = 0;
    let attr;
    let attrSyntax;
    let attrName;
    let attrValue;
    let bindingCommand2;
    let realAttrTarget;
    let realAttrValue;
    let expr;
    for (; ii > i; ++i) {
      attr = attrs[i];
      attrName = attr.name;
      attrValue = attr.value;
      if (attrName === "to-binding-context") {
        toBindingContext = true;
        continue;
      }
      attrSyntax = context._attrParser.parse(attrName, attrValue);
      realAttrTarget = attrSyntax.target;
      realAttrValue = attrSyntax.rawValue;
      bindingCommand2 = context._getCommand(attrSyntax);
      if (bindingCommand2 !== null) {
        if (attrSyntax.command === "bind") {
          letInstructions.push(new LetBindingInstruction(exprParser.parse(realAttrValue, etIsProperty2), camelCase(realAttrTarget)));
        } else {
          throw createMappedError3(704, attrSyntax);
        }
        continue;
      }
      expr = exprParser.parse(realAttrValue, etInterpolation2);
      if (expr === null) {
        {
          console.warn(`[DEV:aurelia] Property "${realAttrTarget}" is declared with literal string ${realAttrValue}. Did you mean ${realAttrTarget}.bind="${realAttrValue}"?`);
        }
      }
      letInstructions.push(new LetBindingInstruction(expr === null ? new PrimitiveLiteralExpression(realAttrValue) : expr, camelCase(realAttrTarget)));
    }
    context.rows.push([new HydrateLetElementInstruction(letInstructions, toBindingContext)]);
    return this._markAsTarget(el, context).nextSibling;
  }
  /** @internal */
  // eslint-disable-next-line
  _compileElement(el, context) {
    var _a3, _b3, _c3, _d2, _e2, _f, _g, _h;
    const nextSibling = el.nextSibling;
    const elName = (el.getAttribute("as-element") ?? el.nodeName).toLowerCase();
    const elDef = context._findElement(elName);
    const isCustomElement = elDef !== null;
    const isShadowDom = isCustomElement && elDef.shadowOptions != null;
    const capture2 = elDef == null ? void 0 : elDef.capture;
    const hasCaptureFilter = capture2 != null && typeof capture2 !== "boolean";
    const captures = capture2 ? [] : emptyArray;
    const exprParser = context._exprParser;
    const removeAttr = this.debug ? noop : () => {
      el.removeAttribute(attrName);
      --i;
      --ii;
    };
    let attrs = el.attributes;
    let instructions;
    let ii = attrs.length;
    let i = 0;
    let attr;
    let attrName;
    let attrValue;
    let attrSyntax;
    let plainAttrInstructions;
    let elBindableInstructions;
    let attrDef = null;
    let isMultiBindings = false;
    let bindable2;
    let attrInstructions;
    let attrBindableInstructions;
    let tcInstructions;
    let tcInstruction;
    let expr;
    let elementInstruction;
    let bindingCommand2 = null;
    let bindablesInfo;
    let primaryBindable;
    let realAttrTarget;
    let realAttrValue;
    let processContentResult = true;
    let hasContainerless = false;
    let canCapture = false;
    let needsMarker = false;
    let elementMetadata;
    let spreadIndex = 0;
    if (elName === "slot") {
      if (context.root.def.shadowOptions == null) {
        throw createMappedError3(717, context.root.def.name);
      }
      context.root.hasSlot = true;
    }
    if (isCustomElement) {
      elementMetadata = {};
      processContentResult = (_a3 = elDef.processContent) == null ? void 0 : _a3.call(elDef.Type, el, context.p, elementMetadata);
      attrs = el.attributes;
      ii = attrs.length;
    }
    for (; ii > i; ++i) {
      attr = attrs[i];
      attrName = attr.name;
      attrValue = attr.value;
      switch (attrName) {
        // ignore these 2 attributes
        case "as-element":
        case "containerless":
          removeAttr();
          hasContainerless = hasContainerless || attrName === "containerless";
          continue;
      }
      attrSyntax = context._attrParser.parse(attrName, attrValue);
      bindingCommand2 = context._getCommand(attrSyntax);
      realAttrTarget = attrSyntax.target;
      realAttrValue = attrSyntax.rawValue;
      if (capture2 && (!hasCaptureFilter || hasCaptureFilter && capture2(realAttrTarget))) {
        if (bindingCommand2 != null && bindingCommand2.ignoreAttr) {
          removeAttr();
          captures.push(attrSyntax);
          continue;
        }
        canCapture = realAttrTarget !== auslotAttr && realAttrTarget !== "slot" && ((spreadIndex = realAttrTarget.indexOf("...")) === -1 || spreadIndex === 0 && realAttrTarget === "...$attrs");
        if (canCapture) {
          bindablesInfo = context._getBindables(elDef);
          if (bindablesInfo.attrs[realAttrTarget] == null && !((_b3 = context._findAttr(realAttrTarget)) == null ? void 0 : _b3.isTemplateController)) {
            removeAttr();
            captures.push(attrSyntax);
            continue;
          }
        }
      }
      if (realAttrTarget === "...$attrs") {
        (plainAttrInstructions ?? (plainAttrInstructions = [])).push(new SpreadTransferedBindingInstruction());
        removeAttr();
        continue;
      }
      if (bindingCommand2 == null ? void 0 : bindingCommand2.ignoreAttr) {
        commandBuildInfo.node = el;
        commandBuildInfo.attr = attrSyntax;
        commandBuildInfo.bindable = null;
        commandBuildInfo.def = null;
        (plainAttrInstructions ?? (plainAttrInstructions = [])).push(bindingCommand2.build(commandBuildInfo, context._exprParser, context._attrMapper));
        removeAttr();
        continue;
      }
      if (realAttrTarget.indexOf("...") === 0) {
        if (isCustomElement && (realAttrTarget = realAttrTarget.slice(3)) !== "$element") {
          (elBindableInstructions ?? (elBindableInstructions = [])).push(new SpreadValueBindingInstruction("$bindables", realAttrTarget === "$bindables" ? realAttrValue : realAttrTarget));
          removeAttr();
          continue;
        }
        {
          if (realAttrTarget === "$bindable" || realAttrTarget === "bindables") {
            console.warn(`[DEV:aurelia] Detected usage of ${realAttrTarget} on <${el.nodeName}>, did you mean "$bindables"?`);
          }
        }
        throw createMappedError3(720, realAttrTarget);
      }
      if (isCustomElement) {
        bindablesInfo = context._getBindables(elDef);
        bindable2 = bindablesInfo.attrs[realAttrTarget];
        if (bindable2 !== void 0) {
          if (bindingCommand2 === null) {
            expr = exprParser.parse(realAttrValue, etInterpolation2);
            (elBindableInstructions ?? (elBindableInstructions = [])).push(expr == null ? new SetPropertyInstruction(realAttrValue, bindable2.name) : new InterpolationInstruction(expr, bindable2.name));
          } else {
            commandBuildInfo.node = el;
            commandBuildInfo.attr = attrSyntax;
            commandBuildInfo.bindable = bindable2;
            commandBuildInfo.def = elDef;
            (elBindableInstructions ?? (elBindableInstructions = [])).push(bindingCommand2.build(commandBuildInfo, context._exprParser, context._attrMapper));
          }
          removeAttr();
          {
            attrDef = context._findAttr(realAttrTarget);
            if (attrDef !== null) {
              console.warn(`[DEV:aurelia] Binding with bindable "${realAttrTarget}" on custom element "${elDef.name}" is ambiguous.There is a custom attribute with the same name.`);
            }
          }
          continue;
        }
        if (realAttrTarget === "$bindables") {
          if (bindingCommand2 != null) {
            commandBuildInfo.node = el;
            commandBuildInfo.attr = attrSyntax;
            commandBuildInfo.bindable = null;
            commandBuildInfo.def = elDef;
            {
              const instruction = bindingCommand2.build(commandBuildInfo, context._exprParser, context._attrMapper);
              if (!(instruction instanceof SpreadValueBindingInstruction)) {
                console.warn(`[DEV:aurelia] Binding with "$bindables" on custom element "${elDef.name}" with command ${attrSyntax.command}  did not result in a spread binding instruction. This likely won't work as expected.`);
              }
              (elBindableInstructions ?? (elBindableInstructions = [])).push(instruction);
            }
          } else {
            console.warn(`[DEV:aurelia] Usage of "$bindables" on custom element "<${elDef.name}>" is ignored.`);
          }
          removeAttr();
          continue;
        }
      }
      if (realAttrTarget === "$bindables") {
        throw createMappedError3(721, el.nodeName, realAttrTarget, realAttrValue);
      }
      attrDef = context._findAttr(realAttrTarget);
      if (attrDef !== null) {
        bindablesInfo = context._getBindables(attrDef);
        isMultiBindings = attrDef.noMultiBindings === false && bindingCommand2 === null && hasInlineBindings(realAttrValue);
        if (isMultiBindings) {
          attrBindableInstructions = this._compileMultiBindings(el, realAttrValue, attrDef, context);
        } else {
          primaryBindable = bindablesInfo.primary;
          if (bindingCommand2 === null) {
            expr = exprParser.parse(realAttrValue, etInterpolation2);
            attrBindableInstructions = expr === null ? realAttrValue === "" ? [] : [new SetPropertyInstruction(realAttrValue, primaryBindable.name)] : [new InterpolationInstruction(expr, primaryBindable.name)];
          } else {
            commandBuildInfo.node = el;
            commandBuildInfo.attr = attrSyntax;
            commandBuildInfo.bindable = primaryBindable;
            commandBuildInfo.def = attrDef;
            attrBindableInstructions = [bindingCommand2.build(commandBuildInfo, context._exprParser, context._attrMapper)];
          }
        }
        removeAttr();
        if (attrDef.isTemplateController) {
          (tcInstructions ?? (tcInstructions = [])).push(new HydrateTemplateController(
            voidDefinition,
            // todo: def/ def.Type or def.name should be configurable
            //       example: AOT/runtime can use def.Type, but there are situation
            //       where instructions need to be serialized, def.name should be used
            this.resolveResources ? attrDef : attrDef.name,
            void 0,
            attrBindableInstructions
          ));
        } else {
          (attrInstructions ?? (attrInstructions = [])).push(new HydrateAttributeInstruction(
            // todo: def/ def.Type or def.name should be configurable
            //       example: AOT/runtime can use def.Type, but there are situation
            //       where instructions need to be serialized, def.name should be used
            this.resolveResources ? attrDef : attrDef.name,
            attrDef.aliases != null && attrDef.aliases.includes(realAttrTarget) ? realAttrTarget : void 0,
            attrBindableInstructions
          ));
        }
        continue;
      }
      if (bindingCommand2 === null) {
        expr = exprParser.parse(realAttrValue, etInterpolation2);
        if (expr != null) {
          removeAttr();
          (plainAttrInstructions ?? (plainAttrInstructions = [])).push(new InterpolationInstruction(
            expr,
            // if not a bindable, then ensure plain attribute are mapped correctly:
            // e.g: colspan -> colSpan
            //      innerhtml -> innerHTML
            //      minlength -> minLength etc...
            context._attrMapper.map(el, realAttrTarget) ?? camelCase(realAttrTarget)
          ));
        }
        continue;
      }
      commandBuildInfo.node = el;
      commandBuildInfo.attr = attrSyntax;
      commandBuildInfo.bindable = null;
      commandBuildInfo.def = null;
      (plainAttrInstructions ?? (plainAttrInstructions = [])).push(bindingCommand2.build(commandBuildInfo, context._exprParser, context._attrMapper));
      removeAttr();
    }
    resetCommandBuildInfo();
    if (this._shouldReorderAttrs(el, plainAttrInstructions) && plainAttrInstructions != null && plainAttrInstructions.length > 1) {
      this._reorder(el, plainAttrInstructions);
    }
    if (isCustomElement) {
      elementInstruction = new HydrateElementInstruction(
        // todo: def/ def.Type or def.name should be configurable
        //       example: AOT/runtime can use def.Type, but there are situation
        //       where instructions need to be serialized, def.name should be used
        this.resolveResources ? elDef : elDef.name,
        elBindableInstructions ?? emptyArray,
        null,
        hasContainerless,
        captures,
        elementMetadata
      );
    }
    if (plainAttrInstructions != null || elementInstruction != null || attrInstructions != null) {
      instructions = emptyArray.concat(elementInstruction ?? emptyArray, attrInstructions ?? emptyArray, plainAttrInstructions ?? emptyArray);
      needsMarker = true;
    }
    let shouldCompileContent;
    if (tcInstructions != null) {
      ii = tcInstructions.length - 1;
      i = ii;
      tcInstruction = tcInstructions[i];
      let template;
      if (isMarker(el)) {
        template = context.t();
        appendManyToTemplate(template, [
          // context.h(MARKER_NODE_NAME),
          context._marker(),
          context._comment(auLocationStart),
          context._comment(auLocationEnd)
        ]);
      } else {
        this._replaceByMarker(el, context);
        if (el.nodeName === "TEMPLATE") {
          template = el;
        } else {
          template = context.t();
          appendToTemplate(template, el);
        }
      }
      const mostInnerTemplate = template;
      const childContext = context._createChild(instructions == null ? [] : [instructions]);
      let childEl;
      let targetSlot;
      let hasAuSlot = false;
      let projections;
      let slotTemplateRecord;
      let slotTemplates;
      let slotTemplate;
      let marker;
      let projectionCompilationContext;
      let j = 0, jj = 0;
      let child = el.firstChild;
      let isEmptyTextNode = false;
      if (processContentResult !== false) {
        while (child !== null) {
          targetSlot = isElement(child) ? child.getAttribute(auslotAttr) : null;
          hasAuSlot = targetSlot !== null || isCustomElement && !isShadowDom;
          childEl = child.nextSibling;
          if (hasAuSlot) {
            if (!isCustomElement) {
              throw createMappedError3(706, targetSlot, elName);
            }
            (_c3 = child.removeAttribute) == null ? void 0 : _c3.call(child, auslotAttr);
            isEmptyTextNode = isTextNode(child) && child.textContent.trim() === "";
            if (!isEmptyTextNode) {
              ((_d2 = slotTemplateRecord ?? (slotTemplateRecord = {}))[_e2 = targetSlot || defaultSlotName] ?? (_d2[_e2] = [])).push(child);
            }
            el.removeChild(child);
          }
          child = childEl;
        }
      }
      if (slotTemplateRecord != null) {
        projections = {};
        for (targetSlot in slotTemplateRecord) {
          template = context.t();
          slotTemplates = slotTemplateRecord[targetSlot];
          for (j = 0, jj = slotTemplates.length; jj > j; ++j) {
            slotTemplate = slotTemplates[j];
            if (slotTemplate.nodeName === "TEMPLATE") {
              if (slotTemplate.attributes.length > 0) {
                appendToTemplate(template, slotTemplate);
              } else {
                appendToTemplate(template, slotTemplate.content);
              }
            } else {
              appendToTemplate(template, slotTemplate);
            }
          }
          projectionCompilationContext = context._createChild();
          this._compileNode(template.content, projectionCompilationContext);
          projections[targetSlot] = {
            name: generateElementName(),
            type: definitionTypeElement,
            template,
            instructions: projectionCompilationContext.rows,
            needsCompile: false
          };
        }
        elementInstruction.projections = projections;
      }
      if (needsMarker) {
        if (isCustomElement && (hasContainerless || elDef.containerless)) {
          this._replaceByMarker(el, context);
        } else {
          this._markAsTarget(el, context);
        }
      }
      shouldCompileContent = !isCustomElement || !elDef.containerless && !hasContainerless && processContentResult !== false;
      if (shouldCompileContent) {
        if (el.nodeName === TEMPLATE_NODE_NAME) {
          this._compileNode(el.content, childContext);
        } else {
          child = el.firstChild;
          while (child !== null) {
            child = this._compileNode(child, childContext);
          }
        }
      }
      tcInstruction.def = {
        name: generateElementName(),
        type: definitionTypeElement,
        template: mostInnerTemplate,
        instructions: childContext.rows,
        needsCompile: false
      };
      while (i-- > 0) {
        tcInstruction = tcInstructions[i];
        template = context.t();
        marker = context._marker();
        appendManyToTemplate(template, [
          marker,
          context._comment(auLocationStart),
          context._comment(auLocationEnd)
        ]);
        tcInstruction.def = {
          name: generateElementName(),
          type: definitionTypeElement,
          template,
          needsCompile: false,
          instructions: [[tcInstructions[i + 1]]]
        };
      }
      context.rows.push([tcInstruction]);
    } else {
      if (instructions != null) {
        context.rows.push(instructions);
      }
      let child = el.firstChild;
      let childEl;
      let targetSlot;
      let hasAuSlot = false;
      let projections = null;
      let slotTemplateRecord;
      let slotTemplates;
      let slotTemplate;
      let template;
      let projectionCompilationContext;
      let isEmptyTextNode = false;
      let j = 0, jj = 0;
      if (processContentResult !== false) {
        while (child !== null) {
          targetSlot = isElement(child) ? child.getAttribute(auslotAttr) : null;
          hasAuSlot = targetSlot !== null || isCustomElement && !isShadowDom;
          childEl = child.nextSibling;
          if (hasAuSlot) {
            if (!isCustomElement) {
              throw createMappedError3(706, targetSlot, elName);
            }
            (_f = child.removeAttribute) == null ? void 0 : _f.call(child, auslotAttr);
            isEmptyTextNode = isTextNode(child) && child.textContent.trim() === "";
            if (!isEmptyTextNode) {
              ((_g = slotTemplateRecord ?? (slotTemplateRecord = {}))[_h = targetSlot || defaultSlotName] ?? (_g[_h] = [])).push(child);
            }
            el.removeChild(child);
          }
          child = childEl;
        }
      }
      if (slotTemplateRecord != null) {
        projections = {};
        for (targetSlot in slotTemplateRecord) {
          template = context.t();
          slotTemplates = slotTemplateRecord[targetSlot];
          for (j = 0, jj = slotTemplates.length; jj > j; ++j) {
            slotTemplate = slotTemplates[j];
            if (slotTemplate.nodeName === TEMPLATE_NODE_NAME) {
              if (slotTemplate.attributes.length > 0) {
                appendToTemplate(template, slotTemplate);
              } else {
                appendToTemplate(template, slotTemplate.content);
              }
            } else {
              appendToTemplate(template, slotTemplate);
            }
          }
          projectionCompilationContext = context._createChild();
          this._compileNode(template.content, projectionCompilationContext);
          projections[targetSlot] = {
            name: generateElementName(),
            type: definitionTypeElement,
            template,
            instructions: projectionCompilationContext.rows,
            needsCompile: false
          };
        }
        elementInstruction.projections = projections;
      }
      if (needsMarker) {
        if (isCustomElement && (hasContainerless || elDef.containerless)) {
          this._replaceByMarker(el, context);
        } else {
          this._markAsTarget(el, context);
        }
      }
      shouldCompileContent = !isCustomElement || !elDef.containerless && !hasContainerless && processContentResult !== false;
      if (shouldCompileContent && el.childNodes.length > 0) {
        child = el.firstChild;
        while (child !== null) {
          child = this._compileNode(child, context);
        }
      }
    }
    return nextSibling;
  }
  /** @internal */
  _compileText(node, context) {
    const parent = node.parentNode;
    const expr = context._exprParser.parse(node.textContent, etInterpolation2);
    const next = node.nextSibling;
    let parts;
    let expressions;
    let i;
    let ii;
    let part;
    if (expr !== null) {
      ({ parts, expressions } = expr);
      if (part = parts[0]) {
        insertBefore(parent, context._text(part), node);
      }
      for (i = 0, ii = expressions.length; ii > i; ++i) {
        insertManyBefore(parent, node, [
          // context.h(MARKER_NODE_NAME),
          context._marker(),
          // empty text node will not be cloned when doing fragment.cloneNode()
          // so give it an empty space instead
          context._text(" ")
        ]);
        if (part = parts[i + 1]) {
          insertBefore(parent, context._text(part), node);
        }
        context.rows.push([new TextBindingInstruction(expressions[i])]);
      }
      parent.removeChild(node);
    }
    return next;
  }
  /** @internal */
  _compileMultiBindings(node, attrRawValue, attrDef, context) {
    const bindableAttrsInfo = context._getBindables(attrDef);
    const valueLength = attrRawValue.length;
    const instructions = [];
    let attrName = void 0;
    let attrValue = void 0;
    let start = 0;
    let ch = 0;
    let expr;
    let attrSyntax;
    let command;
    let bindable2;
    for (let i = 0; i < valueLength; ++i) {
      ch = attrRawValue.charCodeAt(i);
      if (ch === 92) {
        ++i;
      } else if (ch === 58) {
        attrName = attrRawValue.slice(start, i);
        while (attrRawValue.charCodeAt(++i) <= 32)
          ;
        start = i;
        for (; i < valueLength; ++i) {
          ch = attrRawValue.charCodeAt(i);
          if (ch === 92) {
            ++i;
          } else if (ch === 59) {
            attrValue = attrRawValue.slice(start, i);
            break;
          }
        }
        if (attrValue === void 0) {
          attrValue = attrRawValue.slice(start);
        }
        attrSyntax = context._attrParser.parse(attrName, attrValue);
        command = context._getCommand(attrSyntax);
        bindable2 = bindableAttrsInfo.attrs[attrSyntax.target];
        if (bindable2 == null) {
          throw createMappedError3(707, attrSyntax.target, attrDef.name);
        }
        if (command === null) {
          expr = context._exprParser.parse(attrValue, etInterpolation2);
          instructions.push(expr === null ? new SetPropertyInstruction(attrValue, bindable2.name) : new InterpolationInstruction(expr, bindable2.name));
        } else {
          commandBuildInfo.node = node;
          commandBuildInfo.attr = attrSyntax;
          commandBuildInfo.bindable = bindable2;
          commandBuildInfo.def = attrDef;
          instructions.push(command.build(commandBuildInfo, context._exprParser, context._attrMapper));
        }
        while (i < valueLength && attrRawValue.charCodeAt(++i) <= 32)
          ;
        start = i;
        attrName = void 0;
        attrValue = void 0;
      }
    }
    resetCommandBuildInfo();
    return instructions;
  }
  /** @internal */
  _compileLocalElement(template, context) {
    const elName = context.root.def.name;
    const root = template;
    const localTemplates = toArray(root.querySelectorAll("template[as-custom-element]"));
    const numLocalTemplates = localTemplates.length;
    if (numLocalTemplates === 0) {
      return;
    }
    if (numLocalTemplates === root.childElementCount) {
      throw createMappedError3(708, elName);
    }
    const localTemplateNames = /* @__PURE__ */ new Set();
    const localElementTypes = [];
    for (const localTemplate of localTemplates) {
      if (localTemplate.parentNode !== root) {
        throw createMappedError3(709, elName);
      }
      const name = processTemplateName(elName, localTemplate, localTemplateNames);
      const content = localTemplate.content;
      const bindableEls = toArray(content.querySelectorAll("bindable"));
      const properties = /* @__PURE__ */ new Set();
      const attributes = /* @__PURE__ */ new Set();
      const bindables2 = bindableEls.reduce((allBindables, bindableEl) => {
        if (bindableEl.parentNode !== content) {
          throw createMappedError3(710, name);
        }
        const property = bindableEl.getAttribute(
          "name"
          /* LocalTemplateBindableAttributes.name */
        );
        if (property === null) {
          throw createMappedError3(711, bindableEl, name);
        }
        const attribute = bindableEl.getAttribute(
          "attribute"
          /* LocalTemplateBindableAttributes.attribute */
        );
        if (attribute !== null && attributes.has(attribute) || properties.has(property)) {
          throw createMappedError3(712, properties, attribute);
        } else {
          if (attribute !== null) {
            attributes.add(attribute);
          }
          properties.add(property);
        }
        const ignoredAttributes = toArray(bindableEl.attributes).filter((attr) => !allowedLocalTemplateBindableAttributes.includes(attr.name));
        if (ignoredAttributes.length > 0) {
          console.warn(`[DEV:aurelia] The attribute(s) ${ignoredAttributes.map((attr) => attr.name).join(", ")} will be ignored for ${bindableEl.outerHTML}. Only ${allowedLocalTemplateBindableAttributes.join(", ")} are processed.`);
        }
        bindableEl.remove();
        allBindables[property] = {
          name: property,
          attribute: attribute ?? void 0,
          mode: bindableEl.getAttribute(
            "mode"
            /* LocalTemplateBindableAttributes.mode */
          ) ?? "default"
        };
        return allBindables;
      }, {});
      class LocalDepType {
      }
      LocalDepType.$au = {
        type: definitionTypeElement,
        name,
        template: localTemplate,
        bindables: bindables2
      };
      Reflect.defineProperty(LocalDepType, "name", { value: pascalCase(name) });
      localElementTypes.push(LocalDepType);
      root.removeChild(localTemplate);
    }
    const compilationDeps = (context.root.def.dependencies ?? []).concat(context.root.def.Type == null ? emptyArray : [context.root.def.Type]);
    for (const localElementType of localElementTypes) {
      localElementType.dependencies = compilationDeps.concat(localElementTypes.filter((d) => d !== localElementType));
      context._addLocalDep(localElementType);
    }
  }
  /** @internal */
  _shouldReorderAttrs(el, instructions) {
    const nodeName = el.nodeName;
    return nodeName === "INPUT" && orderSensitiveInputType[el.type] === 1 || nodeName === "SELECT" && (el.hasAttribute("multiple") || (instructions == null ? void 0 : instructions.some((i) => i.type === propertyBinding && i.to === "multiple")));
  }
  /** @internal */
  _reorder(el, instructions) {
    switch (el.nodeName) {
      case "INPUT": {
        const _instructions = instructions;
        let modelOrValueOrMatcherIndex = void 0;
        let checkedIndex = void 0;
        let found = 0;
        let instruction;
        for (let i = 0; i < _instructions.length && found < 3; i++) {
          instruction = _instructions[i];
          switch (instruction.to) {
            case "model":
            case "value":
            case "matcher":
              modelOrValueOrMatcherIndex = i;
              found++;
              break;
            case "checked":
              checkedIndex = i;
              found++;
              break;
          }
        }
        if (checkedIndex !== void 0 && modelOrValueOrMatcherIndex !== void 0 && checkedIndex < modelOrValueOrMatcherIndex) {
          [_instructions[modelOrValueOrMatcherIndex], _instructions[checkedIndex]] = [_instructions[checkedIndex], _instructions[modelOrValueOrMatcherIndex]];
        }
        break;
      }
      case "SELECT": {
        const _instructions = instructions;
        let valueIndex = 0;
        let multipleIndex = 0;
        let found = 0;
        let instruction;
        for (let i = 0; i < _instructions.length && found < 2; ++i) {
          instruction = _instructions[i];
          switch (instruction.to) {
            case "multiple":
              multipleIndex = i;
              found++;
              break;
            case "value":
              valueIndex = i;
              found++;
              break;
          }
          if (found === 2 && valueIndex < multipleIndex) {
            [_instructions[multipleIndex], _instructions[valueIndex]] = [_instructions[valueIndex], _instructions[multipleIndex]];
          }
        }
      }
    }
  }
  /**
   * Mark an element as target with a special css class
   * and return it
   *
   * @internal
   */
  _markAsTarget(el, context) {
    insertBefore(el.parentNode, context._comment("au*"), el);
    return el;
  }
  /**
   * Replace an element with a marker, and return the marker
   *
   * @internal
   */
  _replaceByMarker(node, context) {
    if (isMarker(node)) {
      return node;
    }
    const parent = node.parentNode;
    const marker = context._marker();
    insertManyBefore(parent, node, [
      marker,
      context._comment(auLocationStart),
      context._comment(auLocationEnd)
    ]);
    parent.removeChild(node);
    return marker;
  }
};
TemplateCompiler.register = createImplementationRegister(ITemplateCompiler);
var TEMPLATE_NODE_NAME = "TEMPLATE";
var isMarker = (el) => el.nodeValue === "au*";
var CompilationContext = class _CompilationContext {
  constructor(def2, container, parent, root, instructions) {
    var _a3;
    this.hasSlot = false;
    this.deps = null;
    const hasParent = parent !== null;
    this.c = container;
    this.root = root === null ? this : root;
    this.def = def2;
    this.parent = parent;
    this._resourceResolver = hasParent ? parent._resourceResolver : container.get(IResourceResolver);
    this._commandResolver = hasParent ? parent._commandResolver : container.get(IBindingCommandResolver);
    this._templateFactory = hasParent ? parent._templateFactory : container.get(ITemplateElementFactory);
    this._attrParser = hasParent ? parent._attrParser : container.get(IAttributeParser);
    this._exprParser = hasParent ? parent._exprParser : container.get(IExpressionParser);
    this._attrMapper = hasParent ? parent._attrMapper : container.get(IAttrMapper);
    this._logger = hasParent ? parent._logger : container.get(ILogger);
    if (typeof ((_a3 = (this.p = hasParent ? parent.p : container.get(IPlatform)).document) == null ? void 0 : _a3.nodeType) !== "number") {
      throw createMappedError3(
        722
        /* ErrorNames.compiler_no_dom_api */
      );
    }
    this.localEls = hasParent ? parent.localEls : /* @__PURE__ */ new Set();
    this.rows = instructions ?? [];
  }
  _addLocalDep(Type) {
    var _a3;
    ((_a3 = this.root).deps ?? (_a3.deps = [])).push(Type);
    this.root.c.register(Type);
    return this;
  }
  _text(text) {
    return this.p.document.createTextNode(text);
  }
  _comment(text) {
    return this.p.document.createComment(text);
  }
  _marker() {
    return this._comment("au*");
  }
  h(name) {
    const el = this.p.document.createElement(name);
    if (name === "template") {
      this.p.document.adoptNode(el.content);
    }
    return el;
  }
  t() {
    return this.h("template");
  }
  /**
   * Find the custom element definition of a given name
   */
  _findElement(name) {
    return this._resourceResolver.el(this.c, name);
  }
  /**
   * Find the custom attribute definition of a given name
   */
  _findAttr(name) {
    return this._resourceResolver.attr(this.c, name);
  }
  _getBindables(def2) {
    return this._resourceResolver.bindables(def2);
  }
  /**
   * Create a new child compilation context
   */
  _createChild(instructions) {
    return new _CompilationContext(this.def, this.c, this, this.root, instructions);
  }
  /**
   * Retrieve a binding command resource instance.
   *
   * @param name - The parsed `AttrSyntax`
   *
   * @returns An instance of the command if it exists, or `null` if it does not exist.
   */
  _getCommand(syntax) {
    const name = syntax.command;
    if (name === null) {
      return null;
    }
    return this._commandResolver.get(this.c, name);
  }
};
var hasInlineBindings = (rawValue) => {
  const len = rawValue.length;
  let ch = 0;
  let i = 0;
  while (len > i) {
    ch = rawValue.charCodeAt(i);
    if (ch === 92) {
      ++i;
    } else if (ch === 58) {
      return true;
    } else if (ch === 36 && rawValue.charCodeAt(i + 1) === 123) {
      return false;
    }
    ++i;
  }
  return false;
};
var resetCommandBuildInfo = () => {
  commandBuildInfo.node = commandBuildInfo.attr = commandBuildInfo.bindable = commandBuildInfo.def = null;
};
var voidDefinition = { name: "unnamed", type: definitionTypeElement };
var commandBuildInfo = {
  node: null,
  attr: null,
  bindable: null,
  def: null
};
var invalidSurrogateAttribute = {
  "id": true,
  "name": true,
  "au-slot": true,
  "as-element": true
};
var orderSensitiveInputType = {
  checkbox: 1,
  radio: 1
  // todo: range is also sensitive to order, for min/max
};
var IResourceResolver = tcCreateInterface("IResourceResolver");
var IBindingCommandResolver = tcCreateInterface("IBindingCommandResolver", (x) => {
  class DefaultBindingCommandResolver {
    constructor() {
      this._cache = /* @__PURE__ */ new WeakMap();
    }
    get(c, name) {
      let record = this._cache.get(c);
      if (!record) {
        this._cache.set(c, record = {});
      }
      return name in record ? record[name] : record[name] = BindingCommand.get(c, name);
    }
  }
  return x.singleton(DefaultBindingCommandResolver);
});
var allowedLocalTemplateBindableAttributes = tcObjectFreeze([
  "name",
  "attribute",
  "mode"
  /* LocalTemplateBindableAttributes.mode */
]);
var localTemplateIdentifier = "as-custom-element";
var processTemplateName = (owningElementName, localTemplate, localTemplateNames) => {
  const name = localTemplate.getAttribute(localTemplateIdentifier);
  if (name === null || name === "") {
    throw createMappedError3(715, owningElementName);
  }
  if (localTemplateNames.has(name)) {
    throw createMappedError3(716, name, owningElementName);
  } else {
    localTemplateNames.add(name);
    localTemplate.removeAttribute(localTemplateIdentifier);
  }
  return name;
};
var ITemplateCompilerHooks = tcCreateInterface("ITemplateCompilerHooks");
var TemplateCompilerHooks = tcObjectFreeze({
  name: getResourceKeyFor("compiler-hooks"),
  define(Type) {
    return {
      register(container) {
        singletonRegistration2(ITemplateCompilerHooks, Type).register(container);
      }
    };
  },
  findAll(container) {
    return container.get(allResources(ITemplateCompilerHooks));
  }
});
var templateCompilerHooks = (target, context) => {
  return target === void 0 ? decorator : decorator(target, context);
  function decorator(t, context2) {
    context2.metadata[registrableMetadataKey] = TemplateCompilerHooks.define(t);
    return t;
  }
};

// node_modules/@aurelia/runtime/dist/esm/index.dev.mjs
var import_dist13 = __toESM(require_dist(), 1);
var import_dist14 = __toESM(require_dist2(), 1);
var import_dist15 = __toESM(require_dist3(), 1);
var hasOwnProp = Object.prototype.hasOwnProperty;
var rtDef = Reflect.defineProperty;
function rtDefineHiddenProp(obj, key, value) {
  rtDef(obj, key, {
    enumerable: false,
    configurable: true,
    writable: true,
    value
  });
  return value;
}
function ensureProto(proto, key, defaultValue) {
  if (!(key in proto)) {
    rtDefineHiddenProp(proto, key, defaultValue);
  }
}
var rtObjectAssign = Object.assign;
var rtObjectFreeze = Object.freeze;
var rtSafeString = String;
var rtCreateInterface = DI.createInterface;
var rtGetMetadata = Metadata.get;
var rtDefineMetadata = Metadata.define;
var createMappedError4 = (code, ...details) => new Error(`AUR${rtSafeString(code).padStart(4, "0")}: ${getMessageByCode4(code, ...details)}`);
var errorsMap4 = {
  [
    99
    /* ErrorNames.method_not_implemented */
  ]: "Method {{0}} not implemented",
  [
    101
    /* ErrorNames.ast_behavior_not_found */
  ]: `Ast eval error: binding behavior "{{0}}" could not be found. Did you forget to register it as a dependency?`,
  [
    102
    /* ErrorNames.ast_behavior_duplicated */
  ]: `Ast eval error: binding behavior "{{0}}" already applied.`,
  [
    103
    /* ErrorNames.ast_converter_not_found */
  ]: `Ast eval error: value converter "{{0}}" could not be found. Did you forget to register it as a dependency?`,
  [
    105
    /* ErrorNames.ast_$host_not_found */
  ]: `Ast eval error: unable to find $host context. Did you forget [au-slot] attribute?`,
  [
    106
    /* ErrorNames.ast_no_assign_$host */
  ]: `Ast eval error: invalid assignment. "$host" is a reserved keyword.`,
  [
    107
    /* ErrorNames.ast_not_a_function */
  ]: `Ast eval error: expression is not a function.`,
  [
    109
    /* ErrorNames.ast_unknown_unary_operator */
  ]: `Ast eval error: unknown unary operator: "{{0}}"`,
  [
    108
    /* ErrorNames.ast_unknown_binary_operator */
  ]: `Ast eval error: unknown binary operator: "{{0}}"`,
  [
    110
    /* ErrorNames.ast_tagged_not_a_function */
  ]: `Ast eval error: left-hand side of tagged template expression is not a function.`,
  [
    111
    /* ErrorNames.ast_name_is_not_a_function */
  ]: `Ast eval error: expected "{{0}}" to be a function`,
  [
    112
    /* ErrorNames.ast_destruct_null */
  ]: `Ast eval error: cannot use non-object value for destructuring assignment.`,
  [
    113
    /* ErrorNames.ast_increment_infinite_loop */
  ]: `Ast eval error: infinite loop detected. Increment operators should only be used in event handlers.`,
  [
    114
    /* ErrorNames.ast_nullish_member_access */
  ]: `Ast eval error: cannot access property "{{0}}" of {{1}}.`,
  [
    115
    /* ErrorNames.ast_nullish_keyed_access */
  ]: `Ast eval error: cannot access key "{{0}}" of {{1}}.`,
  [
    116
    /* ErrorNames.ast_nullish_assignment */
  ]: `Ast eval error: cannot assign value to property "{{0}}" of null/undefined.`,
  [
    151
    /* ErrorNames.parse_invalid_start */
  ]: `Expression error: invalid start: "{{0}}"`,
  [
    152
    /* ErrorNames.parse_no_spread */
  ]: `Expression error: spread operator is not supported: "{{0}}"`,
  [
    153
    /* ErrorNames.parse_expected_identifier */
  ]: `Expression error: expected identifier: "{{0}}"`,
  [
    154
    /* ErrorNames.parse_invalid_member_expr */
  ]: `Expression error: invalid member expression: "{{0}}"`,
  [
    155
    /* ErrorNames.parse_unexpected_end */
  ]: `Expression error: unexpected end of expression: "{{0}}"`,
  [
    156
    /* ErrorNames.parse_unconsumed_token */
  ]: `Expression error: unconsumed token: "{{0}}" at position {{1}} of "{{2}}"`,
  [
    157
    /* ErrorNames.parse_invalid_empty */
  ]: `Expression error: invalid empty expression. Empty expression is only valid in event bindings (trigger, delegate, capture etc...)`,
  [
    158
    /* ErrorNames.parse_left_hand_side_not_assignable */
  ]: `Expression error: left hand side of expression is not assignable: "{{0}}"`,
  [
    159
    /* ErrorNames.parse_expected_converter_identifier */
  ]: `Expression error: expected identifier to come after value converter operator: "{{0}}"`,
  [
    160
    /* ErrorNames.parse_expected_behavior_identifier */
  ]: `Expression error: expected identifier to come after binding behavior operator: {{0}}`,
  [
    161
    /* ErrorNames.parse_unexpected_keyword_of */
  ]: `Expression error: unexpected keyword "of": "{{0}}"`,
  [
    162
    /* ErrorNames.parse_unexpected_keyword_import */
  ]: `Expression error: unexpected keyword "import": "{{0}}"`,
  [
    163
    /* ErrorNames.parse_invalid_identifier_in_forof */
  ]: `Expression error: invalid BindingIdentifier at left hand side of "of": "{{0}}" | kind: {{1}}`,
  [
    164
    /* ErrorNames.parse_invalid_identifier_object_literal_key */
  ]: `Expression error: invalid or unsupported property definition in object literal: "{{0}}"`,
  [
    165
    /* ErrorNames.parse_unterminated_string */
  ]: `Expression error: unterminated quote in string literal: "{{0}}"`,
  [
    166
    /* ErrorNames.parse_unterminated_template_string */
  ]: `Expression error: unterminated template string: "{{0}}"`,
  [
    167
    /* ErrorNames.parse_missing_expected_token */
  ]: `Expression error: missing expected token "{{0}}" in "{{1}}"`,
  [
    168
    /* ErrorNames.parse_unexpected_character */
  ]: `Expression error: unexpected character: "{{0}}"`,
  [
    170
    /* ErrorNames.parse_unexpected_token_destructuring */
  ]: `Expression error: unexpected "{{0}}" at position "{{1}}" for destructuring assignment in "{{2}}"`,
  [
    171
    /* ErrorNames.parse_unexpected_token_optional_chain */
  ]: `Expression error: unexpected {{0}} at position "{{1}}" for optional chain in "{{2}}"`,
  [
    172
    /* ErrorNames.parse_invalid_tag_in_optional_chain */
  ]: `Expression error: invalid tagged template on optional chain in "{{1}}"`,
  [
    173
    /* ErrorNames.parse_invalid_arrow_params */
  ]: `Expression error: invalid arrow parameter list in "{{0}}"`,
  [
    174
    /* ErrorNames.parse_no_arrow_param_default_value */
  ]: `Expression error: arrow function with default parameters is not supported: "{{0}}"`,
  [
    175
    /* ErrorNames.parse_no_arrow_param_destructuring */
  ]: `Expression error: arrow function with destructuring parameters is not supported: "{{0}}"`,
  [
    176
    /* ErrorNames.parse_rest_must_be_last */
  ]: `Expression error: rest parameter must be last formal parameter in arrow function: "{{0}}"`,
  [
    178
    /* ErrorNames.parse_no_arrow_fn_body */
  ]: `Expression error: arrow function with function body is not supported: "{{0}}"`,
  [
    179
    /* ErrorNames.parse_unexpected_double_dot */
  ]: `Expression error: unexpected token '.' at position "{{1}}" in "{{0}}"`,
  [
    199
    /* ErrorNames.observing_null_undefined */
  ]: `Trying to observe property {{0}} on null/undefined`,
  [
    203
    /* ErrorNames.null_scope */
  ]: `Trying to retrieve a property or build a scope from a null/undefined scope`,
  [
    204
    /* ErrorNames.create_scope_with_null_context */
  ]: "Trying to create a scope with null/undefined binding context",
  [
    206
    /* ErrorNames.switch_on_null_connectable */
  ]: `Trying to switch to a null/undefined connectable`,
  [
    207
    /* ErrorNames.switch_active_connectable */
  ]: `Trying to enter an active connectable`,
  [
    208
    /* ErrorNames.switch_off_null_connectable */
  ]: `Trying to pop a null/undefined connectable`,
  [
    209
    /* ErrorNames.switch_off_inactive_connectable */
  ]: `Trying to exit an inactive connectable`,
  [
    210
    /* ErrorNames.non_recognisable_collection_type */
  ]: `Unrecognised collection type {{0:toString}}.`,
  [
    217
    /* ErrorNames.dirty_check_no_handler */
  ]: "There is no registration for IDirtyChecker interface. If you want to use your own dirty checker, make sure you register it.",
  [
    218
    /* ErrorNames.dirty_check_not_allowed */
  ]: `Dirty checked is not permitted in this application. Property key {{0}} is being dirty checked.`,
  [
    219
    /* ErrorNames.dirty_check_setter_not_allowed */
  ]: `Trying to set value for property {{0}} in dirty checker`,
  [
    220
    /* ErrorNames.assign_readonly_size */
  ]: `Map/Set "size" is a readonly property`,
  [
    221
    /* ErrorNames.assign_readonly_readonly_property_from_computed */
  ]: `Trying to assign value to readonly property "{{0}}" through computed observer.`,
  [
    224
    /* ErrorNames.invalid_observable_decorator_usage */
  ]: `Invalid @observable decorator usage, cannot determine property name`,
  [
    225
    /* ErrorNames.stopping_a_stopped_effect */
  ]: `Trying to stop an effect that has already been stopped`,
  [
    226
    /* ErrorNames.effect_maximum_recursion_reached */
  ]: `Maximum number of recursive effect run reached. Consider handle effect dependencies differently.`
};
var getMessageByCode4 = (name, ...details) => {
  var _a3;
  let cooked = errorsMap4[name];
  for (let i = 0; i < details.length; ++i) {
    const regex = new RegExp(`{{${i}(:.*)?}}`, "g");
    let matches = regex.exec(cooked);
    while (matches != null) {
      const method = (_a3 = matches[1]) == null ? void 0 : _a3.slice(1);
      let value = details[i];
      if (value != null) {
        switch (method) {
          case "typeof":
            value = typeof value;
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
          default: {
            if (method == null ? void 0 : method.startsWith(".")) {
              value = rtSafeString(value[method.slice(1)]);
            } else {
              value = rtSafeString(value);
            }
          }
        }
      }
      cooked = cooked.slice(0, matches.index) + value + cooked.slice(regex.lastIndex);
      matches = regex.exec(cooked);
    }
  }
  return cooked;
};
var Scope = class _Scope {
  constructor(parent, bindingContext, overrideContext, isBoundary) {
    this.parent = parent;
    this.bindingContext = bindingContext;
    this.overrideContext = overrideContext;
    this.isBoundary = isBoundary;
  }
  static getContext(scope, name, ancestor) {
    if (scope == null) {
      throw createMappedError4(
        203
        /* ErrorNames.null_scope */
      );
    }
    let overrideContext = scope.overrideContext;
    let currentScope = scope;
    if (ancestor > 0) {
      while (ancestor > 0) {
        ancestor--;
        currentScope = currentScope.parent;
        if (currentScope == null) {
          return void 0;
        }
      }
      overrideContext = currentScope.overrideContext;
      return name in overrideContext ? overrideContext : currentScope.bindingContext;
    }
    while (currentScope != null && !currentScope.isBoundary && !(name in currentScope.overrideContext) && !(name in currentScope.bindingContext)) {
      currentScope = currentScope.parent;
    }
    if (currentScope == null) {
      return scope.bindingContext;
    }
    overrideContext = currentScope.overrideContext;
    return name in overrideContext ? overrideContext : currentScope.bindingContext;
  }
  static create(bc, oc, isBoundary) {
    if (bc == null) {
      throw createMappedError4(
        204
        /* ErrorNames.create_scope_with_null_context */
      );
    }
    return new _Scope(null, bc, oc ?? new OverrideContext(), isBoundary ?? false);
  }
  static fromParent(ps, bc, oc = new OverrideContext()) {
    if (ps == null) {
      throw createMappedError4(
        203
        /* ErrorNames.null_scope */
      );
    }
    return new _Scope(ps, bc, oc, false);
  }
};
var BindingContext = class {
  constructor(key, value) {
    if (key !== void 0) {
      this[key] = value;
    }
  }
};
var OverrideContext = class {
};
var { astAssign, astEvaluate, astBind, astUnbind } = (() => {
  const ekAccessThis2 = "AccessThis";
  const ekAccessBoundary2 = "AccessBoundary";
  const ekAccessGlobal2 = "AccessGlobal";
  const ekAccessScope2 = "AccessScope";
  const ekArrayLiteral2 = "ArrayLiteral";
  const ekObjectLiteral2 = "ObjectLiteral";
  const ekPrimitiveLiteral2 = "PrimitiveLiteral";
  const ekTemplate2 = "Template";
  const ekUnary2 = "Unary";
  const ekCallScope2 = "CallScope";
  const ekCallMember2 = "CallMember";
  const ekCallFunction2 = "CallFunction";
  const ekCallGlobal2 = "CallGlobal";
  const ekAccessMember2 = "AccessMember";
  const ekAccessKeyed2 = "AccessKeyed";
  const ekTaggedTemplate2 = "TaggedTemplate";
  const ekBinary2 = "Binary";
  const ekConditional2 = "Conditional";
  const ekAssign2 = "Assign";
  const ekArrowFunction2 = "ArrowFunction";
  const ekValueConverter2 = "ValueConverter";
  const ekBindingBehavior2 = "BindingBehavior";
  const ekArrayBindingPattern2 = "ArrayBindingPattern";
  const ekObjectBindingPattern2 = "ObjectBindingPattern";
  const ekBindingIdentifier2 = "BindingIdentifier";
  const ekForOfStatement2 = "ForOfStatement";
  const ekInterpolation2 = "Interpolation";
  const ekArrayDestructuring2 = "ArrayDestructuring";
  const ekObjectDestructuring2 = "ObjectDestructuring";
  const ekDestructuringAssignmentLeaf2 = "DestructuringAssignmentLeaf";
  const ekCustom2 = "Custom";
  const getContext = Scope.getContext;
  function astEvaluate2(ast, s, e, c) {
    var _a3;
    switch (ast.$kind) {
      case ekAccessThis2: {
        let oc = s.overrideContext;
        let currentScope = s;
        let i = ast.ancestor;
        while (i-- && oc) {
          currentScope = currentScope.parent;
          oc = (currentScope == null ? void 0 : currentScope.overrideContext) ?? null;
        }
        return i < 1 && currentScope ? currentScope.bindingContext : void 0;
      }
      case ekAccessBoundary2: {
        let currentScope = s;
        while (currentScope != null && !currentScope.isBoundary) {
          currentScope = currentScope.parent;
        }
        return currentScope ? currentScope.bindingContext : void 0;
      }
      case ekAccessScope2: {
        const obj = getContext(s, ast.name, ast.ancestor);
        if (c !== null) {
          c.observe(obj, ast.name);
        }
        const evaluatedValue = obj[ast.name];
        if (evaluatedValue == null) {
          if (ast.name === "$host") {
            throw createMappedError4(
              105
              /* ErrorNames.ast_$host_not_found */
            );
          }
          return evaluatedValue;
        }
        return (e == null ? void 0 : e.boundFn) && isFunction(evaluatedValue) ? evaluatedValue.bind(obj) : evaluatedValue;
      }
      case ekAccessGlobal2:
        return globalThis[ast.name];
      case ekCallGlobal2: {
        const func = globalThis[ast.name];
        if (isFunction(func)) {
          return func(...ast.args.map((a) => astEvaluate2(a, s, e, c)));
        }
        if (!(e == null ? void 0 : e.strict) && func == null) {
          return void 0;
        }
        throw createMappedError4(
          107
          /* ErrorNames.ast_not_a_function */
        );
      }
      case ekArrayLiteral2:
        return ast.elements.map((expr) => astEvaluate2(expr, s, e, c));
      case ekObjectLiteral2: {
        const instance = {};
        for (let i = 0; i < ast.keys.length; ++i) {
          instance[ast.keys[i]] = astEvaluate2(ast.values[i], s, e, c);
        }
        return instance;
      }
      case ekPrimitiveLiteral2:
        return ast.value;
      case ekTemplate2: {
        let result = ast.cooked[0];
        for (let i = 0; i < ast.expressions.length; ++i) {
          result += rtSafeString(astEvaluate2(ast.expressions[i], s, e, c));
          result += ast.cooked[i + 1];
        }
        return result;
      }
      case ekUnary2: {
        const value = astEvaluate2(ast.expression, s, e, c);
        switch (ast.operation) {
          case "void":
            return void 0;
          case "typeof":
            return typeof value;
          case "!":
            return !value;
          case "-":
            return -value;
          case "+":
            return +value;
          case "--":
            if (c != null)
              throw createMappedError4(
                113
                /* ErrorNames.ast_increment_infinite_loop */
              );
            return astAssign2(ast.expression, s, e, value - 1) + ast.pos;
          case "++":
            if (c != null)
              throw createMappedError4(
                113
                /* ErrorNames.ast_increment_infinite_loop */
              );
            return astAssign2(ast.expression, s, e, value + 1) - ast.pos;
          default:
            throw createMappedError4(109, ast.operation);
        }
      }
      case ekCallScope2: {
        const context = getContext(s, ast.name, ast.ancestor);
        if (context == null) {
          if (e == null ? void 0 : e.strict) {
            throw createMappedError4(114, ast.name, context);
          }
          return void 0;
        }
        const fn = context[ast.name];
        if (isFunction(fn)) {
          return fn.apply(context, ast.args.map((a) => astEvaluate2(a, s, e, c)));
        }
        if (fn == null) {
          if ((e == null ? void 0 : e.strict) && !ast.optional) {
            throw createMappedError4(111, ast.name);
          }
          return void 0;
        }
        throw createMappedError4(111, ast.name);
      }
      case ekCallMember2: {
        const instance = astEvaluate2(ast.object, s, e, c);
        if (instance == null) {
          if ((e == null ? void 0 : e.strict) && !ast.optionalMember) {
            throw createMappedError4(114, ast.name, instance);
          }
        }
        const fn = instance == null ? void 0 : instance[ast.name];
        if (fn == null) {
          if (!ast.optionalCall && (e == null ? void 0 : e.strict)) {
            throw createMappedError4(111, ast.name);
          }
          return void 0;
        }
        if (!isFunction(fn)) {
          throw createMappedError4(111, ast.name);
        }
        const ret = fn.apply(instance, ast.args.map((a) => astEvaluate2(a, s, e, c)));
        if (isArray(instance) && autoObserveArrayMethods.includes(ast.name)) {
          c == null ? void 0 : c.observeCollection(instance);
        }
        return ret;
      }
      case ekCallFunction2: {
        const func = astEvaluate2(ast.func, s, e, c);
        if (isFunction(func)) {
          return func(...ast.args.map((a) => astEvaluate2(a, s, e, c)));
        }
        if (func == null) {
          if (!ast.optional && (e == null ? void 0 : e.strict)) {
            throw createMappedError4(
              107
              /* ErrorNames.ast_not_a_function */
            );
          }
          return void 0;
        }
        throw createMappedError4(
          107
          /* ErrorNames.ast_not_a_function */
        );
      }
      case ekArrowFunction2: {
        const func = (...args) => {
          const params = ast.args;
          const rest = ast.rest;
          const lastIdx = params.length - 1;
          const context = params.reduce((map, param, i) => {
            if (rest && i === lastIdx) {
              map[param.name] = args.slice(i);
            } else {
              map[param.name] = args[i];
            }
            return map;
          }, {});
          const functionScope = Scope.fromParent(s, context);
          return astEvaluate2(ast.body, functionScope, e, c);
        };
        return func;
      }
      case ekAccessMember2: {
        const instance = astEvaluate2(ast.object, s, e, c);
        if (instance == null) {
          if (!ast.optional && (e == null ? void 0 : e.strict)) {
            throw createMappedError4(114, ast.name, instance);
          }
          return void 0;
        }
        if (c !== null && !ast.accessGlobal) {
          c.observe(instance, ast.name);
        }
        const ret = instance[ast.name];
        return (e == null ? void 0 : e.boundFn) && isFunction(ret) ? ret.bind(instance) : ret;
      }
      case ekAccessKeyed2: {
        const instance = astEvaluate2(ast.object, s, e, c);
        const key = astEvaluate2(ast.key, s, e, c);
        if (instance == null) {
          if (!ast.optional && (e == null ? void 0 : e.strict)) {
            throw createMappedError4(115, key, instance);
          }
          return void 0;
        }
        if (c !== null && !ast.accessGlobal) {
          c.observe(instance, key);
        }
        return instance[key];
      }
      case ekTaggedTemplate2: {
        const results = ast.expressions.map((expr) => astEvaluate2(expr, s, e, c));
        const func = astEvaluate2(ast.func, s, e, c);
        if (!isFunction(func)) {
          throw createMappedError4(
            110
            /* ErrorNames.ast_tagged_not_a_function */
          );
        }
        return func(ast.cooked, ...results);
      }
      case ekBinary2: {
        const left = ast.left;
        const right = ast.right;
        switch (ast.operation) {
          case "&&":
            return astEvaluate2(left, s, e, c) && astEvaluate2(right, s, e, c);
          case "||":
            return astEvaluate2(left, s, e, c) || astEvaluate2(right, s, e, c);
          case "??":
            return astEvaluate2(left, s, e, c) ?? astEvaluate2(right, s, e, c);
          case "==":
            return astEvaluate2(left, s, e, c) == astEvaluate2(right, s, e, c);
          case "===":
            return astEvaluate2(left, s, e, c) === astEvaluate2(right, s, e, c);
          case "!=":
            return astEvaluate2(left, s, e, c) != astEvaluate2(right, s, e, c);
          case "!==":
            return astEvaluate2(left, s, e, c) !== astEvaluate2(right, s, e, c);
          case "instanceof": {
            const $right = astEvaluate2(right, s, e, c);
            if (isFunction($right)) {
              return astEvaluate2(left, s, e, c) instanceof $right;
            }
            return false;
          }
          case "in": {
            const $right = astEvaluate2(right, s, e, c);
            if (isObjectOrFunction($right)) {
              return astEvaluate2(left, s, e, c) in $right;
            }
            return false;
          }
          case "+":
            return astEvaluate2(left, s, e, c) + astEvaluate2(right, s, e, c);
          case "-":
            return astEvaluate2(left, s, e, c) - astEvaluate2(right, s, e, c);
          case "*":
            return astEvaluate2(left, s, e, c) * astEvaluate2(right, s, e, c);
          case "/":
            return astEvaluate2(left, s, e, c) / astEvaluate2(right, s, e, c);
          case "%":
            return astEvaluate2(left, s, e, c) % astEvaluate2(right, s, e, c);
          case "<":
            return astEvaluate2(left, s, e, c) < astEvaluate2(right, s, e, c);
          case ">":
            return astEvaluate2(left, s, e, c) > astEvaluate2(right, s, e, c);
          case "<=":
            return astEvaluate2(left, s, e, c) <= astEvaluate2(right, s, e, c);
          case ">=":
            return astEvaluate2(left, s, e, c) >= astEvaluate2(right, s, e, c);
          default:
            throw createMappedError4(108, ast.operation);
        }
      }
      case ekConditional2:
        return astEvaluate2(ast.condition, s, e, c) ? astEvaluate2(ast.yes, s, e, c) : astEvaluate2(ast.no, s, e, c);
      case ekAssign2: {
        let value = astEvaluate2(ast.value, s, e, c);
        if (ast.op !== "=") {
          if (c != null) {
            throw createMappedError4(
              113
              /* ErrorNames.ast_increment_infinite_loop */
            );
          }
          const target = astEvaluate2(ast.target, s, e, c);
          switch (ast.op) {
            case "/=":
              value = target / value;
              break;
            case "*=":
              value = target * value;
              break;
            case "+=":
              value = target + value;
              break;
            case "-=":
              value = target - value;
              break;
            default:
              throw createMappedError4(108, ast.op);
          }
        }
        return astAssign2(ast.target, s, e, value);
      }
      case ekValueConverter2: {
        return (_a3 = e == null ? void 0 : e.useConverter) == null ? void 0 : _a3.call(e, ast.name, "toView", astEvaluate2(ast.expression, s, e, c), ast.args.map((a) => astEvaluate2(a, s, e, c)));
      }
      case ekBindingBehavior2:
        return astEvaluate2(ast.expression, s, e, c);
      case ekBindingIdentifier2:
        return ast.name;
      case ekForOfStatement2:
        return astEvaluate2(ast.iterable, s, e, c);
      case ekInterpolation2:
        if (ast.isMulti) {
          let result = ast.parts[0];
          let i = 0;
          for (; i < ast.expressions.length; ++i) {
            result += rtSafeString(astEvaluate2(ast.expressions[i], s, e, c));
            result += ast.parts[i + 1];
          }
          return result;
        } else {
          return `${ast.parts[0]}${astEvaluate2(ast.firstExpression, s, e, c)}${ast.parts[1]}`;
        }
      case ekDestructuringAssignmentLeaf2:
        return astEvaluate2(ast.target, s, e, c);
      case ekArrayDestructuring2: {
        return ast.list.map((x) => astEvaluate2(x, s, e, c));
      }
      // TODO: this should come after batch
      // as a destructuring expression like [x, y] = value
      //
      // should only trigger change only once:
      // batch(() => {
      //   object.x = value[0]
      //   object.y = value[1]
      // })
      //
      // instead of twice:
      // object.x = value[0]
      // object.y = value[1]
      case ekArrayBindingPattern2:
      // TODO
      // similar to array binding ast, this should only come after batch
      // for a single notification per destructing,
      // regardless number of property assignments on the scope binding context
      case ekObjectBindingPattern2:
      case ekObjectDestructuring2:
      default:
        return void 0;
      case ekCustom2:
        return ast.evaluate(s, e, c);
    }
  }
  function astAssign2(ast, s, e, val) {
    var _a3;
    switch (ast.$kind) {
      case ekAccessScope2: {
        if (ast.name === "$host") {
          throw createMappedError4(
            106
            /* ErrorNames.ast_no_assign_$host */
          );
        }
        const obj = getContext(s, ast.name, ast.ancestor);
        return obj[ast.name] = val;
      }
      case ekAccessMember2: {
        const obj = astEvaluate2(ast.object, s, e, null);
        if (obj == null) {
          if (e == null ? void 0 : e.strict) {
            throw createMappedError4(116, ast.name);
          }
          astAssign2(ast.object, s, e, { [ast.name]: val });
        } else if (isObjectOrFunction(obj)) {
          if (ast.name === "length" && isArray(obj) && !isNaN(val)) {
            obj.splice(val);
          } else {
            obj[ast.name] = val;
          }
        } else ;
        return val;
      }
      case ekAccessKeyed2: {
        const instance = astEvaluate2(ast.object, s, e, null);
        const key = astEvaluate2(ast.key, s, e, null);
        if (instance == null) {
          if (e == null ? void 0 : e.strict) {
            throw createMappedError4(116, key);
          }
          astAssign2(ast.object, s, e, { [key]: val });
          return val;
        }
        if (isArray(instance)) {
          if (key === "length" && !isNaN(val)) {
            instance.splice(val);
            return val;
          }
          if (isArrayIndex(key)) {
            instance.splice(key, 1, val);
            return val;
          }
        }
        return instance[key] = val;
      }
      case ekAssign2:
        astAssign2(ast.value, s, e, val);
        return astAssign2(ast.target, s, e, val);
      case ekValueConverter2: {
        val = (_a3 = e == null ? void 0 : e.useConverter) == null ? void 0 : _a3.call(e, ast.name, "fromView", val, ast.args.map((a) => astEvaluate2(a, s, e, null)));
        return astAssign2(ast.expression, s, e, val);
      }
      case ekBindingBehavior2:
        return astAssign2(ast.expression, s, e, val);
      case ekArrayDestructuring2:
      case ekObjectDestructuring2: {
        const list = ast.list;
        const len = list.length;
        let i;
        let item;
        for (i = 0; i < len; i++) {
          item = list[i];
          switch (item.$kind) {
            case ekDestructuringAssignmentLeaf2:
              astAssign2(item, s, e, val);
              break;
            case ekArrayDestructuring2:
            case ekObjectDestructuring2: {
              if (typeof val !== "object" || val === null) {
                throw createMappedError4(
                  112
                  /* ErrorNames.ast_destruct_null */
                );
              }
              let source = astEvaluate2(item.source, Scope.create(val), e, null);
              if (source === void 0 && item.initializer) {
                source = astEvaluate2(item.initializer, s, e, null);
              }
              astAssign2(item, s, e, source);
              break;
            }
          }
        }
        break;
      }
      case ekDestructuringAssignmentLeaf2: {
        if (ast instanceof DestructuringAssignmentSingleExpression) {
          if (val == null) {
            return;
          }
          if (typeof val !== "object") {
            throw createMappedError4(
              112
              /* ErrorNames.ast_destruct_null */
            );
          }
          let source = astEvaluate2(ast.source, Scope.create(val), e, null);
          if (source === void 0 && ast.initializer) {
            source = astEvaluate2(ast.initializer, s, e, null);
          }
          astAssign2(ast.target, s, e, source);
        } else {
          if (val == null) {
            return;
          }
          if (typeof val !== "object") {
            throw createMappedError4(
              112
              /* ErrorNames.ast_destruct_null */
            );
          }
          const indexOrProperties = ast.indexOrProperties;
          let restValue;
          if (isArrayIndex(indexOrProperties)) {
            if (!Array.isArray(val)) {
              throw createMappedError4(
                112
                /* ErrorNames.ast_destruct_null */
              );
            }
            restValue = val.slice(indexOrProperties);
          } else {
            restValue = Object.entries(val).reduce((acc, [k, v]) => {
              if (!indexOrProperties.includes(k)) {
                acc[k] = v;
              }
              return acc;
            }, {});
          }
          astAssign2(ast.target, s, e, restValue);
        }
        break;
      }
      case ekCustom2:
        return ast.assign(s, e, val);
      default:
        return void 0;
    }
  }
  function astBind2(ast, s, b) {
    var _a3, _b3, _c3;
    switch (ast.$kind) {
      case ekBindingBehavior2: {
        (_a3 = b.bindBehavior) == null ? void 0 : _a3.call(b, ast.name, s, ast.args.map((a) => astEvaluate2(a, s, b, null)));
        astBind2(ast.expression, s, b);
        break;
      }
      case ekValueConverter2: {
        (_b3 = b.bindConverter) == null ? void 0 : _b3.call(b, ast.name);
        astBind2(ast.expression, s, b);
        break;
      }
      case ekForOfStatement2: {
        astBind2(ast.iterable, s, b);
        break;
      }
      case ekCustom2: {
        (_c3 = ast.bind) == null ? void 0 : _c3.call(ast, s, b);
      }
    }
  }
  function astUnbind2(ast, s, b) {
    var _a3, _b3, _c3;
    switch (ast.$kind) {
      case ekBindingBehavior2: {
        (_a3 = b.unbindBehavior) == null ? void 0 : _a3.call(b, ast.name, s);
        astUnbind2(ast.expression, s, b);
        break;
      }
      case ekValueConverter2: {
        (_b3 = b.unbindConverter) == null ? void 0 : _b3.call(b, ast.name);
        astUnbind2(ast.expression, s, b);
        break;
      }
      case ekForOfStatement2: {
        astUnbind2(ast.iterable, s, b);
        break;
      }
      case ekCustom2: {
        (_c3 = ast.unbind) == null ? void 0 : _c3.call(ast, s, b);
      }
    }
  }
  const autoObserveArrayMethods = "at map filter includes indexOf lastIndexOf findIndex find flat flatMap join reduce reduceRight slice every some sort".split(" ");
  return {
    astEvaluate: astEvaluate2,
    astAssign: astAssign2,
    astBind: astBind2,
    astUnbind: astUnbind2
  };
})();
var mixinNoopAstEvaluator = /* @__PURE__ */ (() => (target) => {
  const proto = target.prototype;
  ["bindBehavior", "unbindBehavior", "bindConverter", "unbindConverter", "useConverter"].forEach((name) => {
    rtDefineHiddenProp(proto, name, () => {
      throw createMappedError4(99, name);
    });
  });
})();
var ICoercionConfiguration = DI.createInterface("ICoercionConfiguration");
var atNone = 0;
var atObserver = 1;
var atNode = 2;
var atLayout = 4;
var AccessorType = rtObjectFreeze({
  None: atNone,
  Observer: atObserver,
  Node: atNode,
  // misc characteristic of accessors/observers when update
  //
  // by default, everything is synchronous
  // except changes that are supposed to cause reflow/heavy computation
  // an observer can use this flag to signal binding that don't carelessly tell it to update
  // queue it instead
  // todo: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
  // todo: https://csstriggers.com/
  Layout: atLayout
});
function createIndexMap(length = 0) {
  const arr = Array(length);
  let i = 0;
  while (i < length) {
    arr[i] = i++;
  }
  arr.deletedIndices = [];
  arr.deletedItems = [];
  arr.isIndexMap = true;
  return arr;
}
var currBatch = /* @__PURE__ */ new Map();
var batching = false;
function batch(fn) {
  const prevBatch = currBatch;
  const newBatch = currBatch = /* @__PURE__ */ new Map();
  batching = true;
  try {
    fn();
  } finally {
    currBatch = null;
    batching = false;
    try {
      let pair;
      let subs;
      let batchRecord;
      let col;
      let indexMap;
      let hasChanges = false;
      let i;
      let ii;
      for (pair of newBatch) {
        subs = pair[0];
        batchRecord = pair[1];
        if (prevBatch == null ? void 0 : prevBatch.has(subs)) {
          prevBatch.set(subs, batchRecord);
        }
        if (batchRecord[0] === 1) {
          subs.notify(batchRecord[1], batchRecord[2]);
        } else {
          col = batchRecord[1];
          indexMap = batchRecord[2];
          hasChanges = false;
          if (indexMap.deletedIndices.length > 0) {
            hasChanges = true;
          } else {
            for (i = 0, ii = indexMap.length; i < ii; ++i) {
              if (indexMap[i] !== i) {
                hasChanges = true;
                break;
              }
            }
          }
          if (hasChanges) {
            subs.notifyCollection(col, indexMap);
          }
        }
      }
    } finally {
      currBatch = prevBatch;
    }
  }
}
function addCollectionBatch(subs, collection, indexMap) {
  if (!currBatch.has(subs)) {
    currBatch.set(subs, [2, collection, indexMap]);
  } else {
    currBatch.get(subs)[2] = indexMap;
  }
}
function addValueBatch(subs, newValue, oldValue) {
  const batchRecord = currBatch.get(subs);
  if (batchRecord === void 0) {
    currBatch.set(subs, [1, newValue, oldValue]);
  } else {
    batchRecord[1] = newValue;
    batchRecord[2] = oldValue;
  }
}
var subscriberCollection = /* @__PURE__ */ (() => {
  function subscriberCollection2(target, context) {
    return target == null ? subscriberCollectionDeco : subscriberCollectionDeco(target);
  }
  function getSubscriberRecord() {
    return rtDefineHiddenProp(this, "subs", new SubscriberRecord());
  }
  function addSubscriber(subscriber) {
    return this.subs.add(subscriber);
  }
  function removeSubscriber(subscriber) {
    return this.subs.remove(subscriber);
  }
  const decoratedTarget = /* @__PURE__ */ new WeakSet();
  function subscriberCollectionDeco(target, context) {
    if (!decoratedTarget.has(target)) {
      decoratedTarget.add(target);
      const proto = target.prototype;
      rtDef(proto, "subs", { get: getSubscriberRecord });
      ensureProto(proto, "subscribe", addSubscriber);
      ensureProto(proto, "unsubscribe", removeSubscriber);
    }
    return target;
  }
  class SubscriberRecord {
    constructor() {
      this.count = 0;
      this._subs = [];
      this._requestDirtySubs = [];
      this._hasDirtySubs = false;
    }
    add(subscriber) {
      if (this._subs.includes(subscriber)) {
        return false;
      }
      this._subs[this._subs.length] = subscriber;
      if ("handleDirty" in subscriber) {
        this._requestDirtySubs[this._requestDirtySubs.length] = subscriber;
        this._hasDirtySubs = true;
      }
      ++this.count;
      return true;
    }
    remove(subscriber) {
      let idx = this._subs.indexOf(subscriber);
      if (idx !== -1) {
        this._subs.splice(idx, 1);
        idx = this._requestDirtySubs.indexOf(subscriber);
        if (idx !== -1) {
          this._requestDirtySubs.splice(idx, 1);
          this._hasDirtySubs = this._requestDirtySubs.length > 0;
        }
        --this.count;
        return true;
      }
      return false;
    }
    notify(val, oldVal) {
      if (batching) {
        addValueBatch(this, val, oldVal);
        return;
      }
      for (const sub of this._subs.slice(0)) {
        sub.handleChange(val, oldVal);
      }
    }
    notifyCollection(collection, indexMap) {
      const _subs = this._subs.slice(0);
      const len = _subs.length;
      let i = 0;
      for (; i < len; ++i) {
        _subs[i].handleCollectionChange(collection, indexMap);
      }
      return;
    }
    notifyDirty() {
      if (this._hasDirtySubs) {
        for (const dirtySub of this._requestDirtySubs.slice(0)) {
          dirtySub.handleDirty();
        }
      }
    }
  }
  return subscriberCollection2;
})();
var CollectionLengthObserver = class {
  constructor(owner) {
    this.owner = owner;
    this.type = atObserver;
    this._value = (this._obj = owner.collection).length;
  }
  getValue() {
    return this._obj.length;
  }
  setValue(newValue) {
    if (newValue !== this._value) {
      if (!Number.isNaN(newValue)) {
        this._obj.splice(newValue);
        this._value = this._obj.length;
      } else {
        console.warn(`Invalid value "${newValue}" for array length`);
      }
    }
  }
  handleDirty() {
    if (this._value !== this._obj.length) {
      this.subs.notifyDirty();
    }
  }
  handleCollectionChange(_arr, _) {
    const oldValue = this._value;
    const value = this._obj.length;
    if ((this._value = value) !== oldValue) {
      this.subs.notifyDirty();
      this.subs.notify(this._value, oldValue);
    }
  }
};
(() => {
  implementLengthObserver(CollectionLengthObserver);
})();
var CollectionSizeObserver = class {
  constructor(owner) {
    this.owner = owner;
    this.type = atObserver;
    this._value = (this._obj = owner.collection).size;
  }
  getValue() {
    return this._obj.size;
  }
  setValue() {
    throw createMappedError4(
      220
      /* ErrorNames.assign_readonly_size */
    );
  }
  handleDirty() {
    if (this._value !== this._obj.size) {
      this.subs.notifyDirty();
    }
  }
  handleCollectionChange(_collection, _) {
    const oldValue = this._value;
    const value = this._obj.size;
    if ((this._value = value) !== oldValue) {
      this.subs.notify(this._value, oldValue);
    }
  }
};
(() => {
  implementLengthObserver(CollectionSizeObserver);
})();
function implementLengthObserver(klass) {
  const proto = klass.prototype;
  ensureProto(proto, "subscribe", subscribe);
  ensureProto(proto, "unsubscribe", unsubscribe);
  return subscriberCollection(klass, null);
}
function subscribe(subscriber) {
  if (this.subs.add(subscriber) && this.subs.count === 1) {
    this.owner.subscribe(this);
  }
}
function unsubscribe(subscriber) {
  if (this.subs.remove(subscriber) && this.subs.count === 0) {
    this.owner.subscribe(this);
  }
}
var getArrayObserver = (() => {
  const lookupMetadataKey = Symbol.for("__au_arr_obs__");
  const observerLookup = Array[lookupMetadataKey] ?? rtDefineHiddenProp(Array, lookupMetadataKey, /* @__PURE__ */ new WeakMap());
  function sortCompare(x, y) {
    if (x === y) {
      return 0;
    }
    x = x === null ? "null" : x.toString();
    y = y === null ? "null" : y.toString();
    return x < y ? -1 : 1;
  }
  function preSortCompare(x, y) {
    if (x === void 0) {
      if (y === void 0) {
        return 0;
      } else {
        return 1;
      }
    }
    if (y === void 0) {
      return -1;
    }
    return 0;
  }
  function insertionSort(arr, indexMap, from, to, compareFn) {
    let velement, ielement, vtmp, itmp, order;
    let i, j;
    for (i = from + 1; i < to; i++) {
      velement = arr[i];
      ielement = indexMap[i];
      for (j = i - 1; j >= from; j--) {
        vtmp = arr[j];
        itmp = indexMap[j];
        order = compareFn(vtmp, velement);
        if (order > 0) {
          arr[j + 1] = vtmp;
          indexMap[j + 1] = itmp;
        } else {
          break;
        }
      }
      arr[j + 1] = velement;
      indexMap[j + 1] = ielement;
    }
  }
  function quickSort(arr, indexMap, from, to, compareFn) {
    let thirdIndex = 0, i = 0;
    let v0, v1, v2;
    let i0, i1, i2;
    let c01, c02, c12;
    let vtmp, itmp;
    let vpivot, ipivot, lowEnd, highStart;
    let velement, ielement, order, vtopElement;
    while (true) {
      if (to - from <= 10) {
        insertionSort(arr, indexMap, from, to, compareFn);
        return;
      }
      thirdIndex = from + (to - from >> 1);
      v0 = arr[from];
      i0 = indexMap[from];
      v1 = arr[to - 1];
      i1 = indexMap[to - 1];
      v2 = arr[thirdIndex];
      i2 = indexMap[thirdIndex];
      c01 = compareFn(v0, v1);
      if (c01 > 0) {
        vtmp = v0;
        itmp = i0;
        v0 = v1;
        i0 = i1;
        v1 = vtmp;
        i1 = itmp;
      }
      c02 = compareFn(v0, v2);
      if (c02 >= 0) {
        vtmp = v0;
        itmp = i0;
        v0 = v2;
        i0 = i2;
        v2 = v1;
        i2 = i1;
        v1 = vtmp;
        i1 = itmp;
      } else {
        c12 = compareFn(v1, v2);
        if (c12 > 0) {
          vtmp = v1;
          itmp = i1;
          v1 = v2;
          i1 = i2;
          v2 = vtmp;
          i2 = itmp;
        }
      }
      arr[from] = v0;
      indexMap[from] = i0;
      arr[to - 1] = v2;
      indexMap[to - 1] = i2;
      vpivot = v1;
      ipivot = i1;
      lowEnd = from + 1;
      highStart = to - 1;
      arr[thirdIndex] = arr[lowEnd];
      indexMap[thirdIndex] = indexMap[lowEnd];
      arr[lowEnd] = vpivot;
      indexMap[lowEnd] = ipivot;
      partition: for (i = lowEnd + 1; i < highStart; i++) {
        velement = arr[i];
        ielement = indexMap[i];
        order = compareFn(velement, vpivot);
        if (order < 0) {
          arr[i] = arr[lowEnd];
          indexMap[i] = indexMap[lowEnd];
          arr[lowEnd] = velement;
          indexMap[lowEnd] = ielement;
          lowEnd++;
        } else if (order > 0) {
          do {
            highStart--;
            if (highStart == i) {
              break partition;
            }
            vtopElement = arr[highStart];
            order = compareFn(vtopElement, vpivot);
          } while (order > 0);
          arr[i] = arr[highStart];
          indexMap[i] = indexMap[highStart];
          arr[highStart] = velement;
          indexMap[highStart] = ielement;
          if (order < 0) {
            velement = arr[i];
            ielement = indexMap[i];
            arr[i] = arr[lowEnd];
            indexMap[i] = indexMap[lowEnd];
            arr[lowEnd] = velement;
            indexMap[lowEnd] = ielement;
            lowEnd++;
          }
        }
      }
      if (to - highStart < lowEnd - from) {
        quickSort(arr, indexMap, highStart, to, compareFn);
        to = lowEnd;
      } else {
        quickSort(arr, indexMap, from, lowEnd, compareFn);
        from = highStart;
      }
    }
  }
  const proto = Array.prototype;
  const methods = ["push", "unshift", "pop", "shift", "splice", "reverse", "sort"];
  let observe;
  function overrideArrayPrototypes() {
    const $push = proto.push;
    const $unshift = proto.unshift;
    const $pop = proto.pop;
    const $shift = proto.shift;
    const $splice = proto.splice;
    const $reverse = proto.reverse;
    const $sort = proto.sort;
    observe = {
      // https://tc39.github.io/ecma262/#sec-array.prototype.push
      push: function(...args) {
        const o2 = observerLookup.get(this);
        if (o2 === void 0) {
          return $push.apply(this, args);
        }
        const len = this.length;
        const argCount = args.length;
        if (argCount === 0) {
          return len;
        }
        this.length = o2.indexMap.length = len + argCount;
        let i = len;
        while (i < this.length) {
          this[i] = args[i - len];
          o2.indexMap[i] = -2;
          i++;
        }
        o2.notify();
        return this.length;
      },
      // https://tc39.github.io/ecma262/#sec-array.prototype.unshift
      unshift: function(...args) {
        const o2 = observerLookup.get(this);
        if (o2 === void 0) {
          return $unshift.apply(this, args);
        }
        const argCount = args.length;
        const inserts = new Array(argCount);
        let i = 0;
        while (i < argCount) {
          inserts[i++] = -2;
        }
        $unshift.apply(o2.indexMap, inserts);
        const len = $unshift.apply(this, args);
        o2.notify();
        return len;
      },
      // https://tc39.github.io/ecma262/#sec-array.prototype.pop
      pop: function() {
        const o2 = observerLookup.get(this);
        if (o2 === void 0) {
          return $pop.call(this);
        }
        const indexMap = o2.indexMap;
        const element = $pop.call(this);
        const index = indexMap.length - 1;
        if (indexMap[index] > -1) {
          indexMap.deletedIndices.push(indexMap[index]);
          indexMap.deletedItems.push(element);
        }
        $pop.call(indexMap);
        o2.notify();
        return element;
      },
      // https://tc39.github.io/ecma262/#sec-array.prototype.shift
      shift: function() {
        const o2 = observerLookup.get(this);
        if (o2 === void 0) {
          return $shift.call(this);
        }
        const indexMap = o2.indexMap;
        const element = $shift.call(this);
        if (indexMap[0] > -1) {
          indexMap.deletedIndices.push(indexMap[0]);
          indexMap.deletedItems.push(element);
        }
        $shift.call(indexMap);
        o2.notify();
        return element;
      },
      // https://tc39.github.io/ecma262/#sec-array.prototype.splice
      splice: function(...args) {
        const start = args[0];
        const deleteCount = args[1];
        const o2 = observerLookup.get(this);
        if (o2 === void 0) {
          return $splice.apply(this, args);
        }
        const len = this.length;
        const relativeStart = start | 0;
        const actualStart = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);
        const indexMap = o2.indexMap;
        const argCount = args.length;
        const actualDeleteCount = argCount === 0 ? 0 : argCount === 1 ? len - actualStart : deleteCount;
        let i = actualStart;
        if (actualDeleteCount > 0) {
          const to = i + actualDeleteCount;
          while (i < to) {
            if (indexMap[i] > -1) {
              indexMap.deletedIndices.push(indexMap[i]);
              indexMap.deletedItems.push(this[i]);
            }
            i++;
          }
        }
        i = 0;
        if (argCount > 2) {
          const itemCount = argCount - 2;
          const inserts = new Array(itemCount);
          while (i < itemCount) {
            inserts[i++] = -2;
          }
          $splice.call(indexMap, start, deleteCount, ...inserts);
        } else {
          $splice.apply(indexMap, args);
        }
        const deleted = $splice.apply(this, args);
        if (actualDeleteCount > 0 || i > 0) {
          o2.notify();
        }
        return deleted;
      },
      // https://tc39.github.io/ecma262/#sec-array.prototype.reverse
      reverse: function() {
        const o2 = observerLookup.get(this);
        if (o2 === void 0) {
          $reverse.call(this);
          return this;
        }
        const len = this.length;
        const middle = len / 2 | 0;
        let lower = 0;
        while (lower !== middle) {
          const upper = len - lower - 1;
          const lowerValue = this[lower];
          const lowerIndex = o2.indexMap[lower];
          const upperValue = this[upper];
          const upperIndex = o2.indexMap[upper];
          this[lower] = upperValue;
          o2.indexMap[lower] = upperIndex;
          this[upper] = lowerValue;
          o2.indexMap[upper] = lowerIndex;
          lower++;
        }
        o2.notify();
        return this;
      },
      // https://tc39.github.io/ecma262/#sec-array.prototype.sort
      // https://github.com/v8/v8/blob/master/src/js/array.js
      sort: function(compareFn) {
        const o2 = observerLookup.get(this);
        if (o2 === void 0) {
          $sort.call(this, compareFn);
          return this;
        }
        let len = this.length;
        if (len < 2) {
          return this;
        }
        quickSort(this, o2.indexMap, 0, len, preSortCompare);
        let i = 0;
        while (i < len) {
          if (this[i] === void 0) {
            break;
          }
          i++;
        }
        if (compareFn === void 0 || !isFunction(compareFn)) {
          compareFn = sortCompare;
        }
        quickSort(this, o2.indexMap, 0, i, compareFn);
        let shouldNotify = false;
        for (i = 0, len = o2.indexMap.length; len > i; ++i) {
          if (o2.indexMap[i] !== i) {
            shouldNotify = true;
            break;
          }
        }
        if (shouldNotify || batching) {
          o2.notify();
        }
        return this;
      }
    };
    for (const method of methods) {
      rtDef(observe[method], "observing", { value: true, writable: false, configurable: false, enumerable: false });
    }
  }
  let enableArrayObservationCalled = false;
  const observationEnabledKey = "__au_arr_on__";
  function enableArrayObservation() {
    if (observe === void 0) {
      overrideArrayPrototypes();
    }
    if (!(rtGetMetadata(observationEnabledKey, Array) ?? false)) {
      rtDefineMetadata(true, Array, observationEnabledKey);
      for (const method of methods) {
        if (proto[method].observing !== true) {
          rtDefineHiddenProp(proto, method, observe[method]);
        }
      }
    }
  }
  class ArrayObserverImpl {
    constructor(array) {
      this.type = atObserver;
      if (!enableArrayObservationCalled) {
        enableArrayObservationCalled = true;
        enableArrayObservation();
      }
      this.indexObservers = {};
      this.collection = array;
      this.indexMap = createIndexMap(array.length);
      this.lenObs = void 0;
      observerLookup.set(array, this);
    }
    notify() {
      const subs = this.subs;
      subs.notifyDirty();
      const indexMap = this.indexMap;
      if (batching) {
        addCollectionBatch(subs, this.collection, indexMap);
        return;
      }
      const arr = this.collection;
      const length = arr.length;
      this.indexMap = createIndexMap(length);
      subs.notifyCollection(arr, indexMap);
    }
    getLengthObserver() {
      return this.lenObs ?? (this.lenObs = new CollectionLengthObserver(this));
    }
    getIndexObserver(index) {
      var _a3;
      return (_a3 = this.indexObservers)[index] ?? (_a3[index] = new ArrayIndexObserverImpl(this, index));
    }
  }
  (() => {
    subscriberCollection(ArrayObserverImpl, null);
  })();
  class ArrayIndexObserverImpl {
    constructor(owner, index) {
      this.owner = owner;
      this.index = index;
      this.doNotCache = true;
      this.value = this.getValue();
    }
    getValue() {
      return this.owner.collection[this.index];
    }
    setValue(newValue) {
      if (newValue === this.getValue()) {
        return;
      }
      const arrayObserver = this.owner;
      const index = this.index;
      const indexMap = arrayObserver.indexMap;
      if (indexMap[index] > -1) {
        indexMap.deletedIndices.push(indexMap[index]);
      }
      indexMap[index] = -2;
      arrayObserver.collection[index] = newValue;
      arrayObserver.notify();
    }
    handleDirty() {
      if (this.value !== this.getValue()) {
        this.subs.notifyDirty();
      }
    }
    /**
     * From interface `ICollectionSubscriber`
     */
    handleCollectionChange(_arr, indexMap) {
      const index = this.index;
      const noChange = indexMap[index] === index;
      if (noChange) {
        return;
      }
      const prevValue = this.value;
      const currValue = this.value = this.getValue();
      if (prevValue !== currValue) {
        this.subs.notify(currValue, prevValue);
      }
    }
    subscribe(subscriber) {
      if (this.subs.add(subscriber) && this.subs.count === 1) {
        this.owner.subscribe(this);
      }
    }
    unsubscribe(subscriber) {
      if (this.subs.remove(subscriber) && this.subs.count === 0) {
        this.owner.unsubscribe(this);
      }
    }
  }
  (() => {
    subscriberCollection(ArrayIndexObserverImpl, null);
  })();
  return function getArrayObserver2(array) {
    let observer = observerLookup.get(array);
    if (observer === void 0) {
      observerLookup.set(array, observer = new ArrayObserverImpl(array));
      enableArrayObservation();
    }
    return observer;
  };
})();
var getSetObserver = (() => {
  const lookupMetadataKey = Symbol.for("__au_set_obs__");
  const observerLookup = Set[lookupMetadataKey] ?? rtDefineHiddenProp(Set, lookupMetadataKey, /* @__PURE__ */ new WeakMap());
  const { add: $add, clear: $clear, delete: $delete } = Set.prototype;
  const methods = ["add", "clear", "delete"];
  const observe = {
    // https://tc39.github.io/ecma262/#sec-set.prototype.add
    add: function(value) {
      const o2 = observerLookup.get(this);
      if (o2 === void 0) {
        $add.call(this, value);
        return this;
      }
      const oldSize = this.size;
      $add.call(this, value);
      const newSize = this.size;
      if (newSize === oldSize) {
        return this;
      }
      o2.indexMap[oldSize] = -2;
      o2.notify();
      return this;
    },
    // https://tc39.github.io/ecma262/#sec-set.prototype.clear
    clear: function() {
      const o2 = observerLookup.get(this);
      if (o2 === void 0) {
        return $clear.call(this);
      }
      const size = this.size;
      if (size > 0) {
        const indexMap = o2.indexMap;
        let i = 0;
        for (const key of this.keys()) {
          if (indexMap[i] > -1) {
            indexMap.deletedIndices.push(indexMap[i]);
            indexMap.deletedItems.push(key);
          }
          i++;
        }
        $clear.call(this);
        indexMap.length = 0;
        o2.notify();
      }
      return void 0;
    },
    // https://tc39.github.io/ecma262/#sec-set.prototype.delete
    delete: function(value) {
      const o2 = observerLookup.get(this);
      if (o2 === void 0) {
        return $delete.call(this, value);
      }
      const size = this.size;
      if (size === 0) {
        return false;
      }
      let i = 0;
      const indexMap = o2.indexMap;
      for (const entry of this.keys()) {
        if (entry === value) {
          if (indexMap[i] > -1) {
            indexMap.deletedIndices.push(indexMap[i]);
            indexMap.deletedItems.push(entry);
          }
          indexMap.splice(i, 1);
          const deleteResult = $delete.call(this, value);
          if (deleteResult === true) {
            o2.notify();
          }
          return deleteResult;
        }
        i++;
      }
      return false;
    }
  };
  function enableSetObservation(set) {
    for (const method of methods) {
      rtDefineHiddenProp(set, method, observe[method]);
    }
  }
  class SetObserverImpl {
    constructor(observedSet) {
      this.type = atObserver;
      this.collection = observedSet;
      this.indexMap = createIndexMap(observedSet.size);
      this.lenObs = void 0;
    }
    notify() {
      const subs = this.subs;
      subs.notifyDirty();
      const indexMap = this.indexMap;
      if (batching) {
        addCollectionBatch(subs, this.collection, indexMap);
        return;
      }
      const set = this.collection;
      const size = set.size;
      this.indexMap = createIndexMap(size);
      subs.notifyCollection(set, indexMap);
    }
    getLengthObserver() {
      return this.lenObs ?? (this.lenObs = new CollectionSizeObserver(this));
    }
  }
  subscriberCollection(SetObserverImpl, null);
  return function getSetObserver2(set) {
    let observer = observerLookup.get(set);
    if (observer === void 0) {
      observerLookup.set(set, observer = new SetObserverImpl(set));
      enableSetObservation(set);
    }
    return observer;
  };
})();
var getMapObserver = (() => {
  const lookupMetadataKey = Symbol.for("__au_map_obs__");
  const observerLookup = Map[lookupMetadataKey] ?? rtDefineHiddenProp(Map, lookupMetadataKey, /* @__PURE__ */ new WeakMap());
  const { set: $set, clear: $clear, delete: $delete } = Map.prototype;
  const methods = ["set", "clear", "delete"];
  const observe = {
    // https://tc39.github.io/ecma262/#sec-map.prototype.map
    set: function(key, value) {
      const o2 = observerLookup.get(this);
      if (o2 === void 0) {
        $set.call(this, key, value);
        return this;
      }
      const oldValue = this.get(key);
      const oldSize = this.size;
      $set.call(this, key, value);
      const newSize = this.size;
      if (newSize === oldSize) {
        let i = 0;
        for (const entry of this.entries()) {
          if (entry[0] === key) {
            if (entry[1] !== oldValue) {
              o2.indexMap.deletedIndices.push(o2.indexMap[i]);
              o2.indexMap.deletedItems.push(entry);
              o2.indexMap[i] = -2;
              o2.notify();
            }
            return this;
          }
          i++;
        }
        return this;
      }
      o2.indexMap[oldSize] = -2;
      o2.notify();
      return this;
    },
    // https://tc39.github.io/ecma262/#sec-map.prototype.clear
    clear: function() {
      const o2 = observerLookup.get(this);
      if (o2 === void 0) {
        return $clear.call(this);
      }
      const size = this.size;
      if (size > 0) {
        const indexMap = o2.indexMap;
        let i = 0;
        for (const key of this.keys()) {
          if (indexMap[i] > -1) {
            indexMap.deletedIndices.push(indexMap[i]);
            indexMap.deletedItems.push(key);
          }
          i++;
        }
        $clear.call(this);
        indexMap.length = 0;
        o2.notify();
      }
      return void 0;
    },
    // https://tc39.github.io/ecma262/#sec-map.prototype.delete
    delete: function(value) {
      const o2 = observerLookup.get(this);
      if (o2 === void 0) {
        return $delete.call(this, value);
      }
      const size = this.size;
      if (size === 0) {
        return false;
      }
      let i = 0;
      const indexMap = o2.indexMap;
      for (const entry of this.keys()) {
        if (entry === value) {
          if (indexMap[i] > -1) {
            indexMap.deletedIndices.push(indexMap[i]);
            indexMap.deletedItems.push(entry);
          }
          indexMap.splice(i, 1);
          const deleteResult = $delete.call(this, value);
          if (deleteResult === true) {
            o2.notify();
          }
          return deleteResult;
        }
        ++i;
      }
      return false;
    }
  };
  function enableMapObservation(map) {
    for (const method of methods) {
      rtDefineHiddenProp(map, method, observe[method]);
    }
  }
  class MapObserverImpl {
    constructor(map) {
      this.type = atObserver;
      this.collection = map;
      this.indexMap = createIndexMap(map.size);
      this.lenObs = void 0;
    }
    notify() {
      const subs = this.subs;
      subs.notifyDirty();
      const indexMap = this.indexMap;
      if (batching) {
        addCollectionBatch(subs, this.collection, indexMap);
        return;
      }
      const map = this.collection;
      const size = map.size;
      this.indexMap = createIndexMap(size);
      subs.notifyCollection(map, indexMap);
    }
    getLengthObserver() {
      return this.lenObs ?? (this.lenObs = new CollectionSizeObserver(this));
    }
  }
  subscriberCollection(MapObserverImpl, null);
  return function getMapObserver2(map) {
    let observer = observerLookup.get(map);
    if (observer === void 0) {
      observerLookup.set(map, observer = new MapObserverImpl(map));
      enableMapObservation(map);
    }
    return observer;
  };
})();
var connectableDecorator = /* @__PURE__ */ (() => {
  class BindingObserverRecord {
    constructor(b) {
      this.version = 0;
      this.count = 0;
      this.o = /* @__PURE__ */ new Map();
      this.b = b;
    }
    /**
     * Add, and subscribe to a given observer
     */
    add(observer) {
      if (!this.o.has(observer)) {
        observer.subscribe(this.b);
        ++this.count;
      }
      this.o.set(observer, this.version);
    }
    /**
     * Unsubscribe the observers that are not up to date with the record version
     */
    clear() {
      this.o.forEach(unsubscribeStale, this);
      this.count = this.o.size;
    }
    clearAll() {
      this.o.forEach(unsubscribeAll, this);
      this.o.clear();
      this.count = 0;
    }
  }
  function unsubscribeAll(version, subscribable) {
    subscribable.unsubscribe(this.b);
  }
  function unsubscribeStale(version, subscribable) {
    if (this.version !== version) {
      subscribable.unsubscribe(this.b);
      this.o.delete(subscribable);
    }
  }
  function getObserverRecord() {
    return rtDefineHiddenProp(this, "obs", new BindingObserverRecord(this));
  }
  function observe(obj, key) {
    this.obs.add(this.oL.getObserver(obj, key));
  }
  function observeCollection2(collection) {
    let observer;
    if (isArray(collection)) {
      observer = getArrayObserver(collection);
    } else if (isSet(collection)) {
      observer = getSetObserver(collection);
    } else if (isMap(collection)) {
      observer = getMapObserver(collection);
    } else {
      throw createMappedError4(210, collection);
    }
    this.obs.add(observer);
  }
  function subscribeTo(subscribable) {
    this.obs.add(subscribable);
  }
  function noopHandleChange() {
    throw createMappedError4(99, "handleChange");
  }
  function noopHandleCollectionChange() {
    throw createMappedError4(99, "handleCollectionChange");
  }
  return function connectableDecorator2(target, context) {
    const proto = target.prototype;
    ensureProto(proto, "observe", observe);
    ensureProto(proto, "observeCollection", observeCollection2);
    ensureProto(proto, "subscribeTo", subscribeTo);
    rtDef(proto, "obs", { get: getObserverRecord });
    ensureProto(proto, "handleChange", noopHandleChange);
    ensureProto(proto, "handleCollectionChange", noopHandleCollectionChange);
    return target;
  };
})();
function connectable(target, context) {
  return target == null ? connectableDecorator : connectableDecorator(target, context);
}
var _connectable = null;
var connectables = [];
var connecting = false;
function pauseConnecting() {
  connecting = false;
}
function resumeConnecting() {
  connecting = true;
}
function currentConnectable() {
  return _connectable;
}
function enterConnectable(connectable2) {
  if (connectable2 == null) {
    throw createMappedError4(
      206
      /* ErrorNames.switch_on_null_connectable */
    );
  }
  if (_connectable == null) {
    _connectable = connectable2;
    connectables[0] = _connectable;
    connecting = true;
    return;
  }
  if (_connectable === connectable2) {
    throw createMappedError4(
      207
      /* ErrorNames.switch_active_connectable */
    );
  }
  connectables.push(connectable2);
  _connectable = connectable2;
  connecting = true;
}
function exitConnectable(connectable2) {
  if (connectable2 == null) {
    throw createMappedError4(
      208
      /* ErrorNames.switch_off_null_connectable */
    );
  }
  if (_connectable !== connectable2) {
    throw createMappedError4(
      209
      /* ErrorNames.switch_off_inactive_connectable */
    );
  }
  connectables.pop();
  _connectable = connectables.length > 0 ? connectables[connectables.length - 1] : null;
  connecting = _connectable != null;
}
var ConnectableSwitcher = rtObjectFreeze({
  get current() {
    return _connectable;
  },
  get connecting() {
    return connecting;
  },
  enter: enterConnectable,
  exit: exitConnectable,
  pause: pauseConnecting,
  resume: resumeConnecting
});
var R$get = Reflect.get;
var toStringTag = Object.prototype.toString;
var proxyMap = /* @__PURE__ */ new WeakMap();
var nowrapClassKey = "__au_nw__";
var nowrapPropKey = "__au_nw";
function canWrap(obj) {
  switch (toStringTag.call(obj)) {
    case "[object Object]":
      return obj.constructor[nowrapClassKey] !== true;
    case "[object Array]":
    case "[object Map]":
    case "[object Set]":
      return true;
    default:
      return false;
  }
}
var rawKey = "__raw__";
function wrap(v) {
  return canWrap(v) ? getProxy(v) : v;
}
function getProxy(obj) {
  return proxyMap.get(obj) ?? createProxy(obj);
}
function getRaw(obj) {
  return obj[rawKey] ?? obj;
}
function unwrap(v) {
  return canWrap(v) && v[rawKey] || v;
}
function doNotCollect(object, key) {
  return key === "constructor" || key === "__proto__" || key === "$observers" || key === Symbol.toPrimitive || key === Symbol.toStringTag || object.constructor[`${nowrapPropKey}_${rtSafeString(key)}__`] === true;
}
function createProxy(obj) {
  const handler = isArray(obj) ? arrayHandler : isMap(obj) || isSet(obj) ? collectionHandler : objectHandler;
  const proxiedObj = new Proxy(obj, handler);
  proxyMap.set(obj, proxiedObj);
  proxyMap.set(proxiedObj, proxiedObj);
  return proxiedObj;
}
var objectHandler = {
  get(target, key, receiver) {
    if (key === rawKey) {
      return target;
    }
    const connectable2 = currentConnectable();
    if (!connecting || doNotCollect(target, key) || connectable2 == null) {
      return R$get(target, key, receiver);
    }
    connectable2.observe(target, key);
    return wrap(R$get(target, key, receiver));
  }
};
var arrayHandler = {
  get(target, key, receiver) {
    if (key === rawKey) {
      return target;
    }
    if (!connecting || doNotCollect(target, key) || _connectable == null) {
      return R$get(target, key, receiver);
    }
    switch (key) {
      case "length":
        _connectable.observe(target, "length");
        return target.length;
      case "map":
        return wrappedArrayMap;
      case "includes":
        return wrappedArrayIncludes;
      case "indexOf":
        return wrappedArrayIndexOf;
      case "lastIndexOf":
        return wrappedArrayLastIndexOf;
      case "every":
        return wrappedArrayEvery;
      case "filter":
        return wrappedArrayFilter;
      case "find":
        return wrappedArrayFind;
      case "findIndex":
        return wrappedArrayFindIndex;
      case "flat":
        return wrappedArrayFlat;
      case "flatMap":
        return wrappedArrayFlatMap;
      case "join":
        return wrappedArrayJoin;
      case "push":
        return wrappedArrayPush;
      case "pop":
        return wrappedArrayPop;
      case "reduce":
        return wrappedReduce;
      case "reduceRight":
        return wrappedReduceRight;
      case "reverse":
        return wrappedArrayReverse;
      case "shift":
        return wrappedArrayShift;
      case "unshift":
        return wrappedArrayUnshift;
      case "slice":
        return wrappedArraySlice;
      case "splice":
        return wrappedArraySplice;
      case "some":
        return wrappedArraySome;
      case "sort":
        return wrappedArraySort;
      case "keys":
        return wrappedKeys;
      case "values":
      case Symbol.iterator:
        return wrappedValues;
      case "entries":
        return wrappedEntries;
    }
    _connectable.observe(target, key);
    return wrap(R$get(target, key, receiver));
  },
  // for (let i in array) ...
  ownKeys(target) {
    var _a3;
    (_a3 = currentConnectable()) == null ? void 0 : _a3.observe(target, "length");
    return Reflect.ownKeys(target);
  }
};
function wrappedArrayMap(cb, thisArg) {
  const raw = getRaw(this);
  const res = raw.map((v, i) => (
    // do we wrap `thisArg`?
    unwrap(cb.call(thisArg, wrap(v), i, this))
  ));
  observeCollection(_connectable, raw);
  return wrap(res);
}
function wrappedArrayEvery(cb, thisArg) {
  const raw = getRaw(this);
  const res = raw.every((v, i) => cb.call(thisArg, wrap(v), i, this));
  observeCollection(_connectable, raw);
  return res;
}
function wrappedArrayFilter(cb, thisArg) {
  const raw = getRaw(this);
  const res = raw.filter((v, i) => (
    // do we wrap `thisArg`?
    unwrap(cb.call(thisArg, wrap(v), i, this))
  ));
  observeCollection(_connectable, raw);
  return wrap(res);
}
function wrappedArrayIncludes(v) {
  const raw = getRaw(this);
  const res = raw.includes(unwrap(v));
  observeCollection(_connectable, raw);
  return res;
}
function wrappedArrayIndexOf(v) {
  const raw = getRaw(this);
  const res = raw.indexOf(unwrap(v));
  observeCollection(_connectable, raw);
  return res;
}
function wrappedArrayLastIndexOf(v) {
  const raw = getRaw(this);
  const res = raw.lastIndexOf(unwrap(v));
  observeCollection(_connectable, raw);
  return res;
}
function wrappedArrayFindIndex(cb, thisArg) {
  const raw = getRaw(this);
  const res = raw.findIndex((v, i) => unwrap(cb.call(thisArg, wrap(v), i, this)));
  observeCollection(_connectable, raw);
  return res;
}
function wrappedArrayFind(cb, thisArg) {
  const raw = getRaw(this);
  const res = raw.find((v, i) => cb(wrap(v), i, this), thisArg);
  observeCollection(_connectable, raw);
  return wrap(res);
}
function wrappedArrayFlat() {
  const raw = getRaw(this);
  observeCollection(_connectable, raw);
  return wrap(raw.flat());
}
function wrappedArrayFlatMap(cb, thisArg) {
  const raw = getRaw(this);
  observeCollection(_connectable, raw);
  return getProxy(raw.flatMap((v, i) => wrap(cb.call(thisArg, wrap(v), i, this))));
}
function wrappedArrayJoin(separator) {
  const raw = getRaw(this);
  observeCollection(_connectable, raw);
  return raw.join(separator);
}
function wrappedArrayPop() {
  return wrap(getRaw(this).pop());
}
function wrappedArrayPush(...args) {
  return getRaw(this).push(...args);
}
function wrappedArrayShift() {
  return wrap(getRaw(this).shift());
}
function wrappedArrayUnshift(...args) {
  return getRaw(this).unshift(...args);
}
function wrappedArraySplice(...args) {
  return wrap(getRaw(this).splice(...args));
}
function wrappedArrayReverse(..._args) {
  const raw = getRaw(this);
  const res = raw.reverse();
  observeCollection(_connectable, raw);
  return wrap(res);
}
function wrappedArraySome(cb, thisArg) {
  const raw = getRaw(this);
  const res = raw.some((v, i) => unwrap(cb.call(thisArg, wrap(v), i, this)));
  observeCollection(_connectable, raw);
  return res;
}
function wrappedArraySort(cb) {
  const raw = getRaw(this);
  const res = raw.sort(cb);
  observeCollection(_connectable, raw);
  return wrap(res);
}
function wrappedArraySlice(start, end) {
  const raw = getRaw(this);
  observeCollection(_connectable, raw);
  return getProxy(raw.slice(start, end));
}
function wrappedReduce(cb, initValue) {
  const raw = getRaw(this);
  const res = raw.reduce((curr, v, i) => cb(curr, wrap(v), i, this), initValue);
  observeCollection(_connectable, raw);
  return wrap(res);
}
function wrappedReduceRight(cb, initValue) {
  const raw = getRaw(this);
  const res = raw.reduceRight((curr, v, i) => cb(curr, wrap(v), i, this), initValue);
  observeCollection(_connectable, raw);
  return wrap(res);
}
var collectionHandler = {
  get(target, key, receiver) {
    if (key === rawKey) {
      return target;
    }
    const connectable2 = currentConnectable();
    if (!connecting || doNotCollect(target, key) || connectable2 == null) {
      return R$get(target, key, receiver);
    }
    switch (key) {
      case "size":
        connectable2.observe(target, "size");
        return target.size;
      case "clear":
        return wrappedClear;
      case "delete":
        return wrappedDelete;
      case "forEach":
        return wrappedForEach;
      case "add":
        if (isSet(target)) {
          return wrappedAdd;
        }
        break;
      case "get":
        if (isMap(target)) {
          return wrappedGet;
        }
        break;
      case "set":
        if (isMap(target)) {
          return wrappedSet;
        }
        break;
      case "has":
        return wrappedHas;
      case "keys":
        return wrappedKeys;
      case "values":
        return wrappedValues;
      case "entries":
        return wrappedEntries;
      case Symbol.iterator:
        return isMap(target) ? wrappedEntries : wrappedValues;
    }
    return wrap(R$get(target, key, receiver));
  }
};
function wrappedForEach(cb, thisArg) {
  const raw = getRaw(this);
  observeCollection(_connectable, raw);
  return raw.forEach((v, key) => {
    cb.call(
      /* should wrap or not?? */
      thisArg,
      wrap(v),
      wrap(key),
      this
    );
  });
}
function wrappedHas(v) {
  const raw = getRaw(this);
  observeCollection(_connectable, raw);
  return raw.has(unwrap(v));
}
function wrappedGet(k) {
  const raw = getRaw(this);
  observeCollection(_connectable, raw);
  return wrap(raw.get(unwrap(k)));
}
function wrappedSet(k, v) {
  return wrap(getRaw(this).set(unwrap(k), unwrap(v)));
}
function wrappedAdd(v) {
  return wrap(getRaw(this).add(unwrap(v)));
}
function wrappedClear() {
  return wrap(getRaw(this).clear());
}
function wrappedDelete(k) {
  return wrap(getRaw(this).delete(unwrap(k)));
}
function wrappedKeys() {
  const raw = getRaw(this);
  observeCollection(_connectable, raw);
  const iterator = raw.keys();
  return {
    next() {
      const next = iterator.next();
      const value = next.value;
      const done = next.done;
      return done ? { value: void 0, done } : { value: wrap(value), done };
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}
function wrappedValues() {
  const raw = getRaw(this);
  observeCollection(_connectable, raw);
  const iterator = raw.values();
  return {
    next() {
      const next = iterator.next();
      const value = next.value;
      const done = next.done;
      return done ? { value: void 0, done } : { value: wrap(value), done };
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}
function wrappedEntries() {
  const raw = getRaw(this);
  observeCollection(_connectable, raw);
  const iterator = raw.entries();
  return {
    next() {
      const next = iterator.next();
      const value = next.value;
      const done = next.done;
      return done ? { value: void 0, done } : { value: [wrap(value[0]), wrap(value[1])], done };
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}
var observeCollection = (connectable2, collection) => connectable2 == null ? void 0 : connectable2.observeCollection(collection);
var ProxyObservable = rtObjectFreeze({
  getProxy,
  getRaw,
  wrap,
  unwrap,
  rawKey
});
var ComputedObserver = class {
  constructor(obj, get, set, observerLocator, useProxy) {
    this.type = atObserver;
    this._value = void 0;
    this._isRunning = false;
    this._isDirty = false;
    this._callback = void 0;
    this._coercer = void 0;
    this._coercionConfig = void 0;
    this._obj = obj;
    this._wrapped = useProxy ? wrap(obj) : obj;
    this.$get = get;
    this.$set = set;
    this.oL = observerLocator;
  }
  init(value) {
    this._value = value;
    this._isDirty = false;
  }
  getValue() {
    if (this.subs.count === 0) {
      return this.$get.call(this._obj, this._obj, this);
    }
    if (this._isDirty) {
      this.compute();
      this._isDirty = false;
    }
    return this._value;
  }
  // deepscan-disable-next-line
  setValue(v) {
    if (isFunction(this.$set)) {
      if (this._coercer !== void 0) {
        v = this._coercer.call(null, v, this._coercionConfig);
      }
      if (!areEqual(v, this._value)) {
        this._isRunning = true;
        this.$set.call(this._obj, v);
        this._isRunning = false;
        this.run();
      }
    } else {
      throw createMappedError4(
        221
        /* ErrorNames.assign_readonly_readonly_property_from_computed */
      );
    }
  }
  useCoercer(coercer2, coercionConfig) {
    this._coercer = coercer2;
    this._coercionConfig = coercionConfig;
    return true;
  }
  useCallback(callback) {
    this._callback = callback;
    return true;
  }
  handleDirty() {
    if (!this._isDirty) {
      this._isDirty = true;
      this.subs.notifyDirty();
    }
  }
  handleChange() {
    this._isDirty = true;
    if (this.subs.count > 0) {
      this.run();
    }
  }
  handleCollectionChange() {
    this._isDirty = true;
    if (this.subs.count > 0) {
      this.run();
    }
  }
  subscribe(subscriber) {
    if (this.subs.add(subscriber) && this.subs.count === 1) {
      this.compute();
      this._isDirty = false;
    }
  }
  unsubscribe(subscriber) {
    if (this.subs.remove(subscriber) && this.subs.count === 0) {
      this._isDirty = true;
      this.obs.clearAll();
    }
  }
  run() {
    var _a3;
    if (this._isRunning) {
      return;
    }
    const oldValue = this._value;
    const newValue = this.compute();
    this._isDirty = false;
    if (!areEqual(newValue, oldValue)) {
      (_a3 = this._callback) == null ? void 0 : _a3.call(this, newValue, oldValue);
      this.subs.notify(this._value, oldValue);
    }
  }
  compute() {
    this._isRunning = true;
    this.obs.version++;
    try {
      enterConnectable(this);
      return this._value = unwrap(this.$get.call(this._wrapped, this._wrapped, this));
    } finally {
      this.obs.clear();
      this._isRunning = false;
      exitConnectable(this);
    }
  }
};
(() => {
  connectable(ComputedObserver, null);
  subscriberCollection(ComputedObserver, null);
})();
var IDirtyChecker = rtCreateInterface(
  "IDirtyChecker",
  (x) => x.callback(() => {
    throw createMappedError4(
      217
      /* ErrorNames.dirty_check_no_handler */
    );
  })
);
var DirtyCheckSettings = {
  /**
   * Default: `6`
   *
   * Adjust the global dirty check frequency.
   * Measures in "timeouts per check", such that (given a default of 250 timeouts per second in modern browsers):
   * - A value of 1 will result in 250 dirty checks per second (or 1 dirty check per second for an inactive tab)
   * - A value of 25 will result in 10 dirty checks per second (or 1 dirty check per 25 seconds for an inactive tab)
   */
  timeoutsPerCheck: 25,
  /**
   * Default: `false`
   *
   * Disable dirty-checking entirely. Properties that cannot be observed without dirty checking
   * or an adapter, will simply not be observed.
   */
  disabled: false,
  /**
   * Default: `false`
   *
   * Throw an error if a property is being dirty-checked.
   */
  throw: false,
  /**
   * Resets all dirty checking settings to the framework's defaults.
   */
  resetToDefault() {
    this.timeoutsPerCheck = 6;
    this.disabled = false;
    this.throw = false;
  }
};
var DirtyChecker = class {
  static register(c) {
    c.register(Registration.singleton(this, this), Registration.aliasTo(this, IDirtyChecker));
  }
  constructor() {
    this.tracked = [];
    this._task = null;
    this._elapsedFrames = 0;
    this.p = resolve(IPlatform);
    this.check = () => {
      if (DirtyCheckSettings.disabled) {
        return;
      }
      if (++this._elapsedFrames < DirtyCheckSettings.timeoutsPerCheck) {
        return;
      }
      this._elapsedFrames = 0;
      const tracked = this.tracked;
      const len = tracked.length;
      let current;
      let i = 0;
      for (; i < len; ++i) {
        current = tracked[i];
        if (current.isDirty()) {
          current.flush();
        }
      }
    };
    subscriberCollection(DirtyCheckProperty, null);
  }
  createProperty(obj, key) {
    if (DirtyCheckSettings.throw) {
      throw createMappedError4(218, key);
    }
    return new DirtyCheckProperty(this, obj, key);
  }
  addProperty(property) {
    this.tracked.push(property);
    if (this.tracked.length === 1) {
      this._task = this.p.taskQueue.queueTask(this.check, { persistent: true });
    }
  }
  removeProperty(property) {
    this.tracked.splice(this.tracked.indexOf(property), 1);
    if (this.tracked.length === 0) {
      this._task.cancel();
      this._task = null;
    }
  }
};
var DirtyCheckProperty = class {
  constructor(dirtyChecker, obj, key) {
    this.obj = obj;
    this.key = key;
    this.type = atNone;
    this._oldValue = void 0;
    this._dirtyChecker = dirtyChecker;
  }
  getValue() {
    return this.obj[this.key];
  }
  setValue(_v) {
    throw createMappedError4(219, this.key);
  }
  isDirty() {
    return this._oldValue !== this.obj[this.key];
  }
  flush() {
    const oldValue = this._oldValue;
    const newValue = this.getValue();
    this._oldValue = newValue;
    this.subs.notify(newValue, oldValue);
  }
  subscribe(subscriber) {
    if (this.subs.add(subscriber) && this.subs.count === 1) {
      this._oldValue = this.obj[this.key];
      this._dirtyChecker.addProperty(this);
    }
  }
  unsubscribe(subscriber) {
    if (this.subs.remove(subscriber) && this.subs.count === 0) {
      this._dirtyChecker.removeProperty(this);
    }
  }
};
var PrimitiveObserver = class {
  get doNotCache() {
    return true;
  }
  constructor(obj, key) {
    this.type = atNone;
    this._obj = obj;
    this._key = key;
  }
  getValue() {
    return this._obj[this._key];
  }
  setValue() {
  }
  subscribe() {
  }
  unsubscribe() {
  }
};
var PropertyAccessor = class {
  constructor() {
    this.type = atNone;
  }
  getValue(obj, key) {
    return obj[key];
  }
  setValue(value, obj, key) {
    obj[key] = value;
  }
};
var SetterObserver = class {
  constructor(obj, key) {
    this.type = atObserver;
    this._value = void 0;
    this._observing = false;
    this._callback = void 0;
    this._coercer = void 0;
    this._coercionConfig = void 0;
    this._obj = obj;
    this._key = key;
  }
  getValue() {
    return this._value;
  }
  setValue(newValue) {
    var _a3, _b3;
    if (this._coercer !== void 0) {
      newValue = this._coercer.call(void 0, newValue, this._coercionConfig);
    }
    if (this._observing) {
      if (areEqual(newValue, this._value)) {
        return;
      }
      oV = this._value;
      this._value = newValue;
      this.subs.notifyDirty();
      this.subs.notify(newValue, oV);
      if (areEqual(newValue, this._value)) {
        (_a3 = this._callback) == null ? void 0 : _a3.call(this, newValue, oV);
      }
    } else {
      this._value = this._obj[this._key] = newValue;
      (_b3 = this._callback) == null ? void 0 : _b3.call(this, newValue, oV);
    }
  }
  useCallback(callback) {
    this._callback = callback;
    this.start();
    return true;
  }
  useCoercer(coercer2, coercionConfig) {
    this._coercer = coercer2;
    this._coercionConfig = coercionConfig;
    this.start();
    return true;
  }
  subscribe(subscriber) {
    if (this._observing === false) {
      this.start();
    }
    this.subs.add(subscriber);
  }
  start() {
    if (this._observing === false) {
      this._observing = true;
      this._value = this._obj[this._key];
      rtDef(this._obj, this._key, {
        enumerable: true,
        configurable: true,
        get: rtObjectAssign(() => this.getValue(), { getObserver: () => this }),
        set: (value) => {
          this.setValue(value);
        }
      });
    }
    return this;
  }
  stop() {
    if (this._observing) {
      rtDef(this._obj, this._key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: this._value
      });
      this._observing = false;
    }
    return this;
  }
};
(() => {
  subscriberCollection(SetterObserver, null);
})();
var oV = void 0;
var propertyAccessor = new PropertyAccessor();
var IObserverLocator = rtCreateInterface("IObserverLocator", (x) => x.singleton(ObserverLocator));
var INodeObserverLocator = rtCreateInterface("INodeObserverLocator", (x) => x.cachedCallback((handler) => {
  {
    handler.getAll(ILogger).forEach((logger) => {
      logger.error("Using default INodeObserverLocator implementation. Will not be able to observe nodes (HTML etc...).");
    });
  }
  return new DefaultNodeObserverLocator();
}));
var DefaultNodeObserverLocator = class {
  handles() {
    return false;
  }
  getObserver() {
    return propertyAccessor;
  }
  getAccessor() {
    return propertyAccessor;
  }
};
var IComputedObserverLocator = rtCreateInterface("IComputedObserverLocator", (x) => x.singleton(class DefaultLocator {
  getObserver(obj, key, pd, requestor) {
    const observer = new ComputedObserver(obj, pd.get, pd.set, requestor, true);
    rtDef(obj, key, {
      enumerable: pd.enumerable,
      configurable: true,
      get: rtObjectAssign(() => observer.getValue(), { getObserver: () => observer }),
      set: (v) => {
        observer.setValue(v);
      }
    });
    return observer;
  }
}));
var ObserverLocator = class {
  constructor() {
    this._adapters = [];
    this._dirtyChecker = resolve(IDirtyChecker);
    this._nodeObserverLocator = resolve(INodeObserverLocator);
    this._computedObserverLocator = resolve(IComputedObserverLocator);
  }
  addAdapter(adapter) {
    this._adapters.push(adapter);
  }
  getObserver(obj, key) {
    if (obj == null) {
      throw createMappedError4(199, key);
    }
    if (!isObject(obj)) {
      return new PrimitiveObserver(obj, isFunction(key) ? "" : key);
    }
    if (isFunction(key)) {
      return new ComputedObserver(obj, key, void 0, this, true);
    }
    const lookup2 = getObserverLookup(obj);
    let observer = lookup2[key];
    if (observer === void 0) {
      observer = this.createObserver(obj, key);
      if (!observer.doNotCache) {
        lookup2[key] = observer;
      }
    }
    return observer;
  }
  getAccessor(obj, key) {
    var _a3;
    const cached = (_a3 = obj.$observers) == null ? void 0 : _a3[key];
    if (cached !== void 0) {
      return cached;
    }
    if (this._nodeObserverLocator.handles(obj, key, this)) {
      return this._nodeObserverLocator.getAccessor(obj, key, this);
    }
    return propertyAccessor;
  }
  getArrayObserver(observedArray) {
    return getArrayObserver(observedArray);
  }
  getMapObserver(observedMap) {
    return getMapObserver(observedMap);
  }
  getSetObserver(observedSet) {
    return getSetObserver(observedSet);
  }
  createObserver(obj, key) {
    var _a3, _b3;
    if (this._nodeObserverLocator.handles(obj, key, this)) {
      return this._nodeObserverLocator.getObserver(obj, key, this);
    }
    switch (key) {
      case "length":
        if (isArray(obj)) {
          return getArrayObserver(obj).getLengthObserver();
        }
        break;
      case "size":
        if (isMap(obj)) {
          return getMapObserver(obj).getLengthObserver();
        } else if (isSet(obj)) {
          return getSetObserver(obj).getLengthObserver();
        }
        break;
      default:
        if (isArray(obj) && isArrayIndex(key)) {
          return getArrayObserver(obj).getIndexObserver(Number(key));
        }
        break;
    }
    let pd = getOwnPropDesc(obj, key);
    if (pd === void 0) {
      let proto = getProto(obj);
      while (proto !== null) {
        pd = getOwnPropDesc(proto, key);
        if (pd === void 0) {
          proto = getProto(proto);
        } else {
          break;
        }
      }
    }
    if (pd !== void 0 && !hasOwnProp.call(pd, "value")) {
      let obs = this._getAdapterObserver(obj, key, pd);
      if (obs == null) {
        obs = (_b3 = (_a3 = pd.get) == null ? void 0 : _a3.getObserver) == null ? void 0 : _b3.call(_a3, obj);
      }
      return obs == null ? pd.configurable ? this._computedObserverLocator.getObserver(obj, key, pd, this) : this._dirtyChecker.createProperty(obj, key) : obs;
    }
    return new SetterObserver(obj, key);
  }
  // /** @internal */
  // private _createComputedObserver(obj: object, key: PropertyKey, pd: PropertyDescriptor, useProxy?: boolean) {
  //   const observer = new ComputedObserver(obj, pd.get!, pd.set, this, !!useProxy);
  //   def(obj, key, {
  //     enumerable: pd.enumerable,
  //     configurable: true,
  //     get: objectAssign(((/* Computed Observer */) => observer.getValue()) as ObservableGetter, { getObserver: () => observer }),
  //     set: (/* Computed Observer */v) => {
  //       observer.setValue(v);
  //     },
  //   });
  //   return observer;
  // }
  /** @internal */
  _getAdapterObserver(obj, key, pd) {
    if (this._adapters.length > 0) {
      for (const adapter of this._adapters) {
        const observer = adapter.getObserver(obj, key, pd, this);
        if (observer != null) {
          return observer;
        }
      }
    }
    return null;
  }
};
var getCollectionObserver = (collection) => {
  let obs;
  if (isArray(collection)) {
    obs = getArrayObserver(collection);
  } else if (isMap(collection)) {
    obs = getMapObserver(collection);
  } else if (isSet(collection)) {
    obs = getSetObserver(collection);
  }
  return obs;
};
var getProto = Object.getPrototypeOf;
var getOwnPropDesc = Object.getOwnPropertyDescriptor;
var getObserverLookup = (instance) => {
  let lookup2 = instance.$observers;
  if (lookup2 === void 0) {
    rtDef(instance, "$observers", {
      enumerable: false,
      value: lookup2 = createLookup()
    });
  }
  return lookup2;
};
var IObservation = rtCreateInterface("IObservation", (x) => x.singleton(Observation));
var Observation = class {
  constructor() {
    this.oL = resolve(IObserverLocator);
    this._parser = resolve(IExpressionParser);
  }
  run(fn) {
    const effect = new RunEffect(this.oL, fn);
    effect.run();
    return effect;
  }
  watch(obj, getter, callback, options) {
    let $oldValue = void 0;
    let running = false;
    let cleanupTask;
    const observer = this.oL.getObserver(obj, getter);
    const handleChange = (newValue, oldValue) => {
      cleanupTask == null ? void 0 : cleanupTask();
      cleanupTask = void 0;
      const result = callback(newValue, $oldValue = oldValue);
      if (isFunction(result)) {
        cleanupTask = result;
      }
    };
    const handler = {
      handleChange
    };
    const run = () => {
      if (running)
        return;
      running = true;
      observer.subscribe(handler);
      handleChange(observer.getValue(), $oldValue);
    };
    const stop = () => {
      if (!running)
        return;
      running = false;
      observer.unsubscribe(handler);
      cleanupTask == null ? void 0 : cleanupTask();
      cleanupTask = void 0;
    };
    if ((options == null ? void 0 : options.immediate) !== false) {
      run();
    }
    return { run, stop };
  }
  watchExpression(obj, expression, callback, options) {
    let running = false;
    let cleanupTask;
    const handleChange = (newValue, oldValue) => {
      cleanupTask == null ? void 0 : cleanupTask();
      cleanupTask = void 0;
      const result = callback(newValue, oldValue);
      if (isFunction(result)) {
        cleanupTask = result;
      }
    };
    const observer = new ExpressionObserver(Scope.create(obj), this.oL, this._parser.parse(expression, "IsProperty"), handleChange);
    const run = () => {
      if (running)
        return;
      running = true;
      observer.run();
    };
    const stop = () => {
      if (!running)
        return;
      running = false;
      observer.stop();
      cleanupTask == null ? void 0 : cleanupTask();
      cleanupTask = void 0;
    };
    if ((options == null ? void 0 : options.immediate) !== false) {
      run();
    }
    return { run, stop };
  }
};
var RunEffect = class {
  constructor(oL, fn) {
    this.oL = oL;
    this.fn = fn;
    this.maxRunCount = 10;
    this.queued = false;
    this.running = false;
    this.runCount = 0;
    this.stopped = false;
    this._cleanupTask = void 0;
    this.run = () => {
      var _a3;
      if (this.stopped) {
        throw createMappedError4(
          225
          /* ErrorNames.stopping_a_stopped_effect */
        );
      }
      if (this.running) {
        return;
      }
      ++this.runCount;
      this.running = true;
      this.queued = false;
      ++this.obs.version;
      try {
        (_a3 = this._cleanupTask) == null ? void 0 : _a3.call(void 0);
        enterConnectable(this);
        this._cleanupTask = this.fn(this);
      } finally {
        this.obs.clear();
        this.running = false;
        exitConnectable(this);
      }
      if (this.queued) {
        if (this.runCount > this.maxRunCount) {
          this.runCount = 0;
          throw createMappedError4(
            226
            /* ErrorNames.effect_maximum_recursion_reached */
          );
        }
        this.run();
      } else {
        this.runCount = 0;
      }
    };
    this.stop = () => {
      var _a3;
      (_a3 = this._cleanupTask) == null ? void 0 : _a3.call(void 0);
      this._cleanupTask = void 0;
      this.stopped = true;
      this.obs.clearAll();
    };
  }
  handleChange() {
    this.queued = true;
    this.run();
  }
  handleCollectionChange() {
    this.queued = true;
    this.run();
  }
};
(() => {
  connectable(RunEffect, null);
})();
var ExpressionObserver = class {
  constructor(scope, oL, expression, callback) {
    this.oL = oL;
    this._value = void 0;
    this.boundFn = false;
    this._scope = scope;
    this.ast = expression;
    this._callback = callback;
  }
  handleChange() {
    this.run();
  }
  handleCollectionChange() {
    this.run();
  }
  run() {
    this.obs.version++;
    const oldValue = this._value;
    const value = astEvaluate(this.ast, this._scope, this, this);
    this.obs.clear();
    if (!areEqual(value, oldValue)) {
      this._value = value;
      this._callback.call(void 0, value, oldValue);
    }
  }
  stop() {
    this.obs.clearAll();
    this._value = void 0;
  }
};
(() => {
  connectable(ExpressionObserver, null);
  mixinNoopAstEvaluator(ExpressionObserver);
})();
var observable = (() => {
  function getObserversLookup(obj) {
    if (obj.$observers === void 0) {
      rtDef(obj, "$observers", { value: {} });
    }
    return obj.$observers;
  }
  const noValue = {};
  function observable2(targetOrConfig, context) {
    if (!SetterNotifier.mixed) {
      SetterNotifier.mixed = true;
      subscriberCollection(SetterNotifier, null);
    }
    let isClassDecorator = false;
    let config;
    if (typeof targetOrConfig === "object") {
      config = targetOrConfig;
    } else if (targetOrConfig != null) {
      config = { name: targetOrConfig };
      isClassDecorator = true;
    } else {
      config = emptyObject;
    }
    if (arguments.length === 0) {
      return function(target, context2) {
        if (context2.kind !== "field")
          throw createMappedError4(
            224
            /* ErrorNames.invalid_observable_decorator_usage */
          );
        return createFieldInitializer(context2);
      };
    }
    if ((context == null ? void 0 : context.kind) === "field")
      return createFieldInitializer(context);
    if (isClassDecorator) {
      return function(target, context2) {
        createDescriptor(target, config.name, () => noValue, true);
      };
    }
    return function(target, context2) {
      switch (context2.kind) {
        case "field":
          return createFieldInitializer(context2);
        case "class":
          return createDescriptor(target, config.name, () => noValue, true);
        default:
          throw createMappedError4(
            224
            /* ErrorNames.invalid_observable_decorator_usage */
          );
      }
    };
    function createFieldInitializer(context2) {
      let $initialValue;
      context2.addInitializer(function() {
        createDescriptor(this, context2.name, () => $initialValue, false);
      });
      return function(initialValue) {
        return $initialValue = initialValue;
      };
    }
    function createDescriptor(target, property, initialValue, targetIsClass) {
      const callback = config.callback || `${rtSafeString(property)}Changed`;
      const $set = config.set;
      const observableGetter = function() {
        var _a3;
        const notifier = getNotifier(this, property, callback, initialValue, $set);
        (_a3 = currentConnectable()) == null ? void 0 : _a3.subscribeTo(notifier);
        return notifier.getValue();
      };
      observableGetter.getObserver = function(obj) {
        return getNotifier(obj, property, callback, initialValue, $set);
      };
      const descriptor = {
        enumerable: true,
        configurable: true,
        get: observableGetter,
        set(newValue) {
          getNotifier(this, property, callback, initialValue, $set).setValue(newValue);
        }
      };
      if (targetIsClass)
        rtDef(target.prototype, property, descriptor);
      else
        rtDef(target, property, descriptor);
    }
  }
  function getNotifier(obj, key, callbackKey, initialValue, set) {
    const lookup2 = getObserversLookup(obj);
    let notifier = lookup2[key];
    if (notifier == null) {
      const $initialValue = initialValue();
      notifier = new SetterNotifier(obj, callbackKey, set, $initialValue === noValue ? void 0 : $initialValue);
      lookup2[key] = notifier;
    }
    return notifier;
  }
  class SetterNotifier {
    constructor(obj, callbackKey, set, initialValue) {
      this.type = atObserver;
      this._value = void 0;
      this._oldValue = void 0;
      this._obj = obj;
      this._setter = set;
      this._hasSetter = isFunction(set);
      const callback = obj[callbackKey];
      this.cb = isFunction(callback) ? callback : void 0;
      this._value = initialValue;
    }
    getValue() {
      return this._value;
    }
    setValue(value) {
      var _a3;
      if (this._hasSetter) {
        value = this._setter(value);
      }
      if (!areEqual(value, this._value)) {
        this._oldValue = this._value;
        this._value = value;
        this.subs.notifyDirty();
        this.subs.notify(this._value, this._oldValue);
        if (areEqual(value, this._value)) {
          (_a3 = this.cb) == null ? void 0 : _a3.call(this._obj, this._value, this._oldValue);
        }
      }
    }
  }
  SetterNotifier.mixed = false;
  return observable2;
})();

// node_modules/@aurelia/platform-browser/dist/esm/index.dev.mjs
var import_dist19 = __toESM(require_dist(), 1);
var import_dist20 = __toESM(require_dist2(), 1);
var import_dist21 = __toESM(require_dist3(), 1);

// node_modules/@aurelia/platform/dist/esm/index.dev.mjs
var import_dist16 = __toESM(require_dist(), 1);
var import_dist17 = __toESM(require_dist2(), 1);
var import_dist18 = __toESM(require_dist3(), 1);
var tsPending = "pending";
var tsRunning = "running";
var tsCompleted = "completed";
var tsCanceled = "canceled";
var lookup = /* @__PURE__ */ new Map();
var notImplemented = (name) => {
  return () => {
    throw createError(`AUR1005: The PLATFORM did not receive a valid reference to the global function '${name}'.`);
  };
};
var Platform = class _Platform {
  constructor(g, overrides = {}) {
    var _a3, _b3;
    this.macroTaskRequested = false;
    this.macroTaskHandle = -1;
    this.globalThis = g;
    "decodeURI decodeURIComponent encodeURI encodeURIComponent Date Reflect console".split(" ").forEach((prop) => {
      this[prop] = prop in overrides ? overrides[prop] : g[prop];
    });
    "clearInterval clearTimeout queueMicrotask setInterval setTimeout".split(" ").forEach((method) => {
      var _a4;
      this[method] = method in overrides ? overrides[method] : ((_a4 = g[method]) == null ? void 0 : _a4.bind(g)) ?? notImplemented(method);
    });
    this.performanceNow = "performanceNow" in overrides ? overrides.performanceNow : ((_b3 = (_a3 = g.performance) == null ? void 0 : _a3.now) == null ? void 0 : _b3.bind(g.performance)) ?? notImplemented("performance.now");
    this.flushMacroTask = this.flushMacroTask.bind(this);
    this.taskQueue = new TaskQueue(this, this.requestMacroTask.bind(this), this.cancelMacroTask.bind(this));
  }
  static getOrCreate(g, overrides = {}) {
    let platform = lookup.get(g);
    if (platform === void 0) {
      lookup.set(g, platform = new _Platform(g, overrides));
    }
    return platform;
  }
  static set(g, platform) {
    lookup.set(g, platform);
  }
  requestMacroTask() {
    this.macroTaskRequested = true;
    if (this.macroTaskHandle === -1) {
      this.macroTaskHandle = this.setTimeout(this.flushMacroTask, 0);
    }
  }
  cancelMacroTask() {
    this.macroTaskRequested = false;
    if (this.macroTaskHandle > -1) {
      this.clearTimeout(this.macroTaskHandle);
      this.macroTaskHandle = -1;
    }
  }
  flushMacroTask() {
    this.macroTaskHandle = -1;
    if (this.macroTaskRequested === true) {
      this.macroTaskRequested = false;
      this.taskQueue.flush();
    }
  }
};
var TaskQueue = class {
  get isEmpty() {
    return this._pendingAsyncCount === 0 && this._processing.length === 0 && this._pending.length === 0 && this._delayed.length === 0;
  }
  /**
   * Persistent tasks will re-queue themselves indefinitely until they are explicitly canceled,
   * so we consider them 'infinite work' whereas non-persistent (one-off) tasks are 'finite work'.
   *
   * This `hasNoMoreFiniteWork` getters returns true if either all remaining tasks are persistent, or if there are no more tasks.
   *
   * If that is the case, we can resolve the promise that was created when `yield()` is called.
   *
   * @internal
   */
  get _hasNoMoreFiniteWork() {
    return this._pendingAsyncCount === 0 && this._processing.every(isPersistent) && this._pending.every(isPersistent) && this._delayed.every(isPersistent);
  }
  constructor(platform, $request, $cancel) {
    this.platform = platform;
    this.$request = $request;
    this.$cancel = $cancel;
    this._suspenderTask = void 0;
    this._pendingAsyncCount = 0;
    this._processing = [];
    this._pending = [];
    this._delayed = [];
    this._flushRequested = false;
    this._yieldPromise = void 0;
    this._lastRequest = 0;
    this._lastFlush = 0;
    this._requestFlush = () => {
      if (this._tracer.enabled) {
        this._tracer.enter(this, "requestFlush");
      }
      if (!this._flushRequested) {
        this._flushRequested = true;
        this._lastRequest = this._now();
        this.$request();
      }
      if (this._tracer.enabled) {
        this._tracer.leave(this, "requestFlush");
      }
    };
    this._now = platform.performanceNow;
    this._tracer = new Tracer(platform.console);
  }
  flush(now = this._now()) {
    if (this._tracer.enabled) {
      this._tracer.enter(this, "flush");
    }
    this._flushRequested = false;
    this._lastFlush = now;
    if (this._suspenderTask === void 0) {
      let curr;
      if (this._pending.length > 0) {
        this._processing.push(...this._pending);
        this._pending.length = 0;
      }
      if (this._delayed.length > 0) {
        for (let i = 0; i < this._delayed.length; ++i) {
          curr = this._delayed[i];
          if (curr.queueTime <= now) {
            this._processing.push(curr);
            this._delayed.splice(i--, 1);
          }
        }
      }
      let cur;
      while (this._processing.length > 0) {
        (cur = this._processing.shift()).run();
        if (cur.status === tsRunning) {
          if (cur.suspend === true) {
            this._suspenderTask = cur;
            this._requestFlush();
            if (this._tracer.enabled) {
              this._tracer.leave(this, "flush early async");
            }
            return;
          } else {
            ++this._pendingAsyncCount;
          }
        }
      }
      if (this._pending.length > 0) {
        this._processing.push(...this._pending);
        this._pending.length = 0;
      }
      if (this._delayed.length > 0) {
        for (let i = 0; i < this._delayed.length; ++i) {
          curr = this._delayed[i];
          if (curr.queueTime <= now) {
            this._processing.push(curr);
            this._delayed.splice(i--, 1);
          }
        }
      }
      if (this._processing.length > 0 || this._delayed.length > 0 || this._pendingAsyncCount > 0) {
        this._requestFlush();
      }
      if (this._yieldPromise !== void 0 && this._hasNoMoreFiniteWork) {
        const p = this._yieldPromise;
        this._yieldPromise = void 0;
        p.resolve();
      }
    } else {
      this._requestFlush();
    }
    if (this._tracer.enabled) {
      this._tracer.leave(this, "flush full");
    }
  }
  /**
   * Cancel the next flush cycle (and/or the macrotask that schedules the next flush cycle, in case this is a microtask queue), if it was requested.
   *
   * This operation is idempotent and will do nothing if no flush is scheduled.
   */
  cancel() {
    if (this._tracer.enabled) {
      this._tracer.enter(this, "cancel");
    }
    if (this._flushRequested) {
      this.$cancel();
      this._flushRequested = false;
    }
    if (this._tracer.enabled) {
      this._tracer.leave(this, "cancel");
    }
  }
  /**
   * Returns a promise that, when awaited, resolves when:
   * - all *non*-persistent (including async) tasks have finished;
   * - the last-added persistent task has run exactly once;
   *
   * This operation is idempotent: the same promise will be returned until it resolves.
   *
   * If `yield()` is called multiple times in a row when there are one or more persistent tasks in the queue, each call will await exactly one cycle of those tasks.
   */
  async yield() {
    if (this._tracer.enabled) {
      this._tracer.enter(this, "yield");
    }
    if (this.isEmpty) {
      if (this._tracer.enabled) {
        this._tracer.leave(this, "yield empty");
      }
    } else {
      if (this._yieldPromise === void 0) {
        if (this._tracer.enabled) {
          this._tracer.trace(this, "yield - creating promise");
        }
        this._yieldPromise = createExposedPromise();
      }
      await this._yieldPromise;
      if (this._tracer.enabled) {
        this._tracer.leave(this, "yield task");
      }
    }
  }
  queueTask(callback, opts) {
    if (this._tracer.enabled) {
      this._tracer.enter(this, "queueTask");
    }
    const { delay, preempt, persistent, suspend } = { ...defaultQueueTaskOptions, ...opts };
    if (preempt) {
      if (delay > 0) {
        throw preemptDelayComboError();
      }
      if (persistent) {
        throw preemptyPersistentComboError();
      }
    }
    if (this._processing.length === 0) {
      this._requestFlush();
    }
    const time = this._now();
    const task2 = new Task(this._tracer, this, time, time + delay, preempt, persistent, suspend, callback);
    if (preempt) {
      this._processing[this._processing.length] = task2;
    } else if (delay === 0) {
      this._pending[this._pending.length] = task2;
    } else {
      this._delayed[this._delayed.length] = task2;
    }
    if (this._tracer.enabled) {
      this._tracer.leave(this, "queueTask");
    }
    return task2;
  }
  /**
   * Remove the task from this queue.
   */
  remove(task2) {
    if (this._tracer.enabled) {
      this._tracer.enter(this, "remove");
    }
    let idx = this._processing.indexOf(task2);
    if (idx > -1) {
      this._processing.splice(idx, 1);
      if (this._tracer.enabled) {
        this._tracer.leave(this, "remove processing");
      }
      return;
    }
    idx = this._pending.indexOf(task2);
    if (idx > -1) {
      this._pending.splice(idx, 1);
      if (this._tracer.enabled) {
        this._tracer.leave(this, "remove pending");
      }
      return;
    }
    idx = this._delayed.indexOf(task2);
    if (idx > -1) {
      this._delayed.splice(idx, 1);
      if (this._tracer.enabled) {
        this._tracer.leave(this, "remove delayed");
      }
      return;
    }
    if (this._tracer.enabled) {
      this._tracer.leave(this, "remove error");
    }
    throw createError(`Task #${task2.id} could not be found`);
  }
  /**
   * Reset the persistent task back to its pending state, preparing it for being invoked again on the next flush.
   *
   * @internal
   */
  _resetPersistentTask(task2) {
    if (this._tracer.enabled) {
      this._tracer.enter(this, "resetPersistentTask");
    }
    task2.reset(this._now());
    if (task2.createdTime === task2.queueTime) {
      this._pending[this._pending.length] = task2;
    } else {
      this._delayed[this._delayed.length] = task2;
    }
    if (this._tracer.enabled) {
      this._tracer.leave(this, "resetPersistentTask");
    }
  }
  /**
   * Notify the queue that this async task has had its promise resolved, so that the queue can proceed with consecutive tasks on the next flush.
   *
   * @internal
   */
  _completeAsyncTask(task2) {
    var _a3;
    if (this._tracer.enabled) {
      this._tracer.enter(this, "completeAsyncTask");
    }
    if (task2.suspend === true) {
      if (this._suspenderTask !== task2) {
        if (this._tracer.enabled) {
          this._tracer.leave(this, "completeAsyncTask error");
        }
        throw createError(`Async task completion mismatch: suspenderTask=${(_a3 = this._suspenderTask) == null ? void 0 : _a3.id}, task=${task2.id}`);
      }
      this._suspenderTask = void 0;
    } else {
      --this._pendingAsyncCount;
    }
    if (this._yieldPromise !== void 0 && this._hasNoMoreFiniteWork) {
      const p = this._yieldPromise;
      this._yieldPromise = void 0;
      p.resolve();
    }
    if (this.isEmpty) {
      this.cancel();
    }
    if (this._tracer.enabled) {
      this._tracer.leave(this, "completeAsyncTask");
    }
  }
};
var TaskAbortError = class extends Error {
  constructor(task2) {
    super("Task was canceled.");
    this.task = task2;
  }
};
var id = 0;
var Task = class {
  get result() {
    const result = this._result;
    if (result === void 0) {
      switch (this._status) {
        case tsPending: {
          const promise = this._result = createExposedPromise();
          this._resolve = promise.resolve;
          this._reject = promise.reject;
          return promise;
        }
        /* istanbul ignore next */
        case tsRunning:
          throw createError("Trying to await task from within task will cause a deadlock.");
        case tsCompleted:
          return this._result = Promise.resolve();
        case tsCanceled:
          return this._result = Promise.reject(new TaskAbortError(this));
      }
    }
    return result;
  }
  get status() {
    return this._status;
  }
  constructor(tracer, taskQueue, createdTime, queueTime, preempt, persistent, suspend, callback) {
    this.taskQueue = taskQueue;
    this.createdTime = createdTime;
    this.queueTime = queueTime;
    this.preempt = preempt;
    this.persistent = persistent;
    this.suspend = suspend;
    this.callback = callback;
    this.id = ++id;
    this._resolve = void 0;
    this._reject = void 0;
    this._result = void 0;
    this._status = tsPending;
    this._tracer = tracer;
  }
  run(time = this.taskQueue.platform.performanceNow()) {
    if (this._tracer.enabled) {
      this._tracer.enter(this, "run");
    }
    if (this._status !== tsPending) {
      if (this._tracer.enabled) {
        this._tracer.leave(this, "run error");
      }
      throw createError(`Cannot run task in ${this._status} state`);
    }
    const { persistent, taskQueue, callback, _resolve: resolve2, _reject: reject, createdTime } = this;
    let ret;
    this._status = tsRunning;
    try {
      ret = callback(time - createdTime);
      if (ret instanceof Promise) {
        ret.then(($ret) => {
          if (this.persistent) {
            taskQueue._resetPersistentTask(this);
          } else {
            if (persistent) {
              this._status = tsCanceled;
            } else {
              this._status = tsCompleted;
            }
            this.dispose();
          }
          taskQueue._completeAsyncTask(this);
          if (this._tracer.enabled) {
            this._tracer.leave(this, "run async then");
          }
          if (resolve2 !== void 0) {
            resolve2($ret);
          }
        }).catch((err) => {
          if (!this.persistent) {
            this.dispose();
          }
          taskQueue._completeAsyncTask(this);
          if (this._tracer.enabled) {
            this._tracer.leave(this, "run async catch");
          }
          if (reject !== void 0) {
            reject(err);
          } else {
            throw err;
          }
        });
      } else {
        if (this.persistent) {
          taskQueue._resetPersistentTask(this);
        } else {
          if (persistent) {
            this._status = tsCanceled;
          } else {
            this._status = tsCompleted;
          }
          this.dispose();
        }
        if (this._tracer.enabled) {
          this._tracer.leave(this, "run sync success");
        }
        if (resolve2 !== void 0) {
          resolve2(ret);
        }
      }
    } catch (err) {
      if (!this.persistent) {
        this.dispose();
      }
      if (this._tracer.enabled) {
        this._tracer.leave(this, "run sync error");
      }
      if (reject !== void 0) {
        reject(err);
      } else {
        throw err;
      }
    }
  }
  cancel() {
    if (this._tracer.enabled) {
      this._tracer.enter(this, "cancel");
    }
    if (this._status === tsPending) {
      const taskQueue = this.taskQueue;
      const reject = this._reject;
      taskQueue.remove(this);
      if (taskQueue.isEmpty) {
        taskQueue.cancel();
      }
      this._status = tsCanceled;
      this.dispose();
      if (reject !== void 0) {
        reject(new TaskAbortError(this));
      }
      if (this._tracer.enabled) {
        this._tracer.leave(this, "cancel true =pending");
      }
      return true;
    } else if (this._status === tsRunning && this.persistent) {
      this.persistent = false;
      if (this._tracer.enabled) {
        this._tracer.leave(this, "cancel true =running+persistent");
      }
      return true;
    }
    if (this._tracer.enabled) {
      this._tracer.leave(this, "cancel false");
    }
    return false;
  }
  reset(time) {
    if (this._tracer.enabled) {
      this._tracer.enter(this, "reset");
    }
    const delay = this.queueTime - this.createdTime;
    this.createdTime = time;
    this.queueTime = time + delay;
    this._status = tsPending;
    this._resolve = void 0;
    this._reject = void 0;
    this._result = void 0;
    if (this._tracer.enabled) {
      this._tracer.leave(this, "reset");
    }
  }
  dispose() {
    if (this._tracer.enabled) {
      this._tracer.trace(this, "dispose");
    }
    this.callback = void 0;
    this._resolve = void 0;
    this._reject = void 0;
    this._result = void 0;
  }
};
var Tracer = class {
  constructor(console2) {
    this.console = console2;
    this.enabled = false;
    this.depth = 0;
  }
  enter(obj, method) {
    this.log(`${"  ".repeat(this.depth++)}> `, obj, method);
  }
  leave(obj, method) {
    this.log(`${"  ".repeat(--this.depth)}< `, obj, method);
  }
  trace(obj, method) {
    this.log(`${"  ".repeat(this.depth)}- `, obj, method);
  }
  log(prefix, obj, method) {
    if (obj instanceof TaskQueue) {
      const processing = obj._processing.length;
      const pending = obj._pending.length;
      const delayed = obj._delayed.length;
      const flushReq = obj._flushRequested;
      const susTask = !!obj._suspenderTask;
      const info2 = `processing=${processing} pending=${pending} delayed=${delayed} flushReq=${flushReq} susTask=${susTask}`;
      this.console.log(`${prefix}[Q.${method}] ${info2}`);
    } else {
      const id2 = obj["id"];
      const created = Math.round(obj["createdTime"] * 10) / 10;
      const queue = Math.round(obj["queueTime"] * 10) / 10;
      const preempt = obj["preempt"];
      const persistent = obj["persistent"];
      const suspend = obj["suspend"];
      const status = obj["_status"];
      const info2 = `id=${id2} created=${created} queue=${queue} preempt=${preempt} persistent=${persistent} status=${status} suspend=${suspend}`;
      this.console.log(`${prefix}[T.${method}] ${info2}`);
    }
  }
};
var defaultQueueTaskOptions = {
  delay: 0,
  preempt: false,
  persistent: false,
  suspend: false
};
var $resolve;
var $reject;
var executor = (resolve2, reject) => {
  $resolve = resolve2;
  $reject = reject;
};
var createExposedPromise = () => {
  const p = new Promise(executor);
  p.resolve = $resolve;
  p.reject = $reject;
  return p;
};
var isPersistent = (task2) => task2.persistent;
var preemptDelayComboError = () => createError(`AUR1006: Invalid arguments: preempt cannot be combined with a greater-than-zero delay`);
var preemptyPersistentComboError = () => createError(`AUR1007: Invalid arguments: preempt cannot be combined with persistent`);
var createError = (msg) => new Error(msg);

// node_modules/@aurelia/platform-browser/dist/esm/index.dev.mjs
var BrowserPlatform = class _BrowserPlatform extends Platform {
  static getOrCreate(g, overrides = {}) {
    let platform = _BrowserPlatform._lookup.get(g);
    if (platform === void 0) {
      _BrowserPlatform._lookup.set(g, platform = new _BrowserPlatform(g, overrides));
    }
    return platform;
  }
  static set(g, platform) {
    _BrowserPlatform._lookup.set(g, platform);
  }
  /**
   * @deprecated Use `platform.domQueue` instead.
   */
  get domWriteQueue() {
    {
      this.console.log("[DEV:aurelia] platform.domQueue is deprecated, please use platform.domQueue instead.");
    }
    return this.domQueue;
  }
  /**
   * @deprecated Use `platform.domQueue` instead.
   */
  get domReadQueue() {
    {
      this.console.log("[DEV:aurelia] platform.domReadQueue has been removed, please use platform.domQueue instead.");
    }
    return this.domQueue;
  }
  constructor(g, overrides = {}) {
    super(g, overrides);
    const notImplemented2 = (name) => () => {
      throw new Error(`The PLATFORM did not receive a valid reference to the global function '${name}'.`);
    };
    "Node Element HTMLElement CustomEvent CSSStyleSheet ShadowRoot MutationObserver window document customElements".split(" ").forEach((prop) => this[prop] = prop in overrides ? overrides[prop] : g[prop]);
    "fetch requestAnimationFrame cancelAnimationFrame".split(" ").forEach((prop) => {
      var _a3;
      return (
        // eslint-disable-next-line
        this[prop] = prop in overrides ? overrides[prop] : ((_a3 = g[prop]) == null ? void 0 : _a3.bind(g)) ?? notImplemented2(prop)
      );
    });
    this.domQueue = (() => {
      let domRequested = false;
      let domHandle = -1;
      const requestDomFlush = () => {
        domRequested = true;
        if (domHandle === -1) {
          domHandle = this.requestAnimationFrame(flushDomQueue);
        }
      };
      const cancelDomFlush = () => {
        domRequested = false;
        if (domHandle > -1) {
          this.cancelAnimationFrame(domHandle);
          domHandle = -1;
        }
      };
      const flushDomQueue = () => {
        domHandle = -1;
        if (domRequested === true) {
          domRequested = false;
          domQueue.flush();
        }
      };
      const domQueue = new TaskQueue(this, requestDomFlush, cancelDomFlush);
      return domQueue;
    })();
  }
};
BrowserPlatform._lookup = /* @__PURE__ */ new WeakMap();

// node_modules/@aurelia/runtime-html/dist/esm/index.dev.mjs
var { default: defaultMode, oneTime, toView, fromView, twoWay } = BindingMode;
var getMetadata3 = Metadata.get;
var hasMetadata = Metadata.has;
var defineMetadata3 = Metadata.define;
var { annotation: annotation2 } = Protocol;
var getAnnotationKeyFor2 = annotation2.keyFor;
var O = Object;
var safeString3 = String;
var baseObjectPrototype = O.prototype;
var hasOwnProperty = baseObjectPrototype.hasOwnProperty;
var objectFreeze2 = O.freeze;
var objectAssign2 = O.assign;
var getOwnPropertyNames = O.getOwnPropertyNames;
var objectKeys = O.keys;
var IsDataAttribute = createLookup();
var isDataAttribute = (obj, key, svgAnalyzer) => {
  if (IsDataAttribute[key] === true) {
    return true;
  }
  if (!isString(key)) {
    return false;
  }
  const prefix = key.slice(0, 5);
  return IsDataAttribute[key] = prefix === "aria-" || prefix === "data-" || svgAnalyzer.isStandardSvgAttribute(obj, key);
};
var rethrow = (err) => {
  throw err;
};
var def = Reflect.defineProperty;
var defineHiddenProp = (obj, key, value) => {
  def(obj, key, {
    enumerable: false,
    configurable: true,
    writable: true,
    value
  });
  return value;
};
var addSignalListener = (signaler, signal, listener) => signaler.addSignalListener(signal, listener);
var removeSignalListener = (signaler, signal, listener) => signaler.removeSignalListener(signal, listener);
var etInterpolation3 = "Interpolation";
var etIsIterator2 = "IsIterator";
var etIsFunction3 = "IsFunction";
var etIsProperty3 = "IsProperty";
var tsPending2 = "pending";
var tsRunning2 = "running";
var atObserver2 = AccessorType.Observer;
var atNode2 = AccessorType.Node;
var atLayout2 = AccessorType.Layout;
var createMappedError5 = (code, ...details) => new Error(`AUR${safeString3(code).padStart(4, "0")}: ${getMessageByCode5(code, ...details)}`);
var errorsMap5 = {
  [
    99
    /* ErrorNames.method_not_implemented */
  ]: "Method {{0}} not implemented",
  [
    101
    /* ErrorNames.ast_behavior_not_found */
  ]: `Ast eval error: binding behavior "{{0}}" could not be found. Did you forget to register it as a dependency?`,
  [
    102
    /* ErrorNames.ast_behavior_duplicated */
  ]: `Ast eval error: binding behavior "{{0}}" already applied.`,
  [
    103
    /* ErrorNames.ast_converter_not_found */
  ]: `Ast eval error: value converter "{{0}}" could not be found. Did you forget to register it as a dependency?`,
  [
    105
    /* ErrorNames.ast_$host_not_found */
  ]: `Ast eval error: unable to find $host context. Did you forget [au-slot] attribute?`,
  [
    106
    /* ErrorNames.ast_no_assign_$host */
  ]: `Ast eval error: invalid assignment. "$host" is a reserved keyword.`,
  [
    107
    /* ErrorNames.ast_not_a_function */
  ]: `Ast eval error: expression is not a function.`,
  [
    109
    /* ErrorNames.ast_unknown_unary_operator */
  ]: `Ast eval error: unknown unary operator: "{{0}}"`,
  [
    108
    /* ErrorNames.ast_unknown_binary_operator */
  ]: `Ast eval error: unknown binary operator: "{{0}}"`,
  [
    110
    /* ErrorNames.ast_tagged_not_a_function */
  ]: `Ast eval error: left-hand side of tagged template expression is not a function.`,
  [
    111
    /* ErrorNames.ast_name_is_not_a_function */
  ]: `Ast eval error: expected "{{0}}" to be a function`,
  [
    112
    /* ErrorNames.ast_destruct_null */
  ]: `Ast eval error: cannot use non-object value for destructuring assignment.`,
  [
    113
    /* ErrorNames.ast_increment_infinite_loop */
  ]: `Ast eval error: infinite loop detected. Increment operators should only be used in event handlers.`,
  [
    114
    /* ErrorNames.ast_nullish_member_access */
  ]: `Ast eval error: cannot access property "{{0}}" of {{1}}.`,
  [
    115
    /* ErrorNames.ast_nullish_keyed_access */
  ]: `Ast eval error: cannot access key "{{0}}" of {{1}}.`,
  [
    116
    /* ErrorNames.ast_nullish_assignment */
  ]: `Ast eval error: cannot assign value to property "{{0}}" of null/undefined.`,
  [
    151
    /* ErrorNames.binding_behavior_def_not_found */
  ]: `No binding behavior definition found for type {{0:name}}`,
  [
    152
    /* ErrorNames.value_converter_def_not_found */
  ]: `No value converter definition found for type {{0:name}}`,
  [
    153
    /* ErrorNames.element_existed */
  ]: `Element "{{0}}" has already been registered.`,
  [
    154
    /* ErrorNames.attribute_existed */
  ]: `Attribute "{{0}}" has already been registered.`,
  [
    155
    /* ErrorNames.value_converter_existed */
  ]: `Value converter {{0}} has already been registered.`,
  [
    156
    /* ErrorNames.binding_behavior_existed */
  ]: `Binding behavior {{0}} has already been registered.`,
  [
    157
    /* ErrorNames.binding_command_existed */
  ]: `Binding command {{0}} has already been registered.`,
  [
    203
    /* ErrorNames.null_scope */
  ]: `Trying to retrieve a property or build a scope from a null/undefined scope`,
  [
    204
    /* ErrorNames.create_scope_with_null_context */
  ]: "Trying to create a scope with null/undefined binding context",
  [
    227
    /* ErrorNames.invalid_bindable_decorator_usage_symbol */
  ]: `@bindable is not supported for properties that uses a symbol for name. Use a string for the property name instead.`,
  [
    228
    /* ErrorNames.invalid_bindable_decorator_usage_class_without_configuration */
  ]: `@bindable cannot be used as a class decorator when no configuration object is supplied.`,
  [
    229
    /* ErrorNames.invalid_bindable_decorator_usage_class_without_property_name_configuration */
  ]: `@bindable cannot be used as a class decorator when no property name is supplied in the configuration object.`,
  [
    500
    /* ErrorNames.controller_cached_not_found */
  ]: `There is no cached controller for the provided ViewModel: {{0}}`,
  [
    501
    /* ErrorNames.controller_no_shadow_on_containerless */
  ]: `Invalid combination: cannot combine the containerless custom element option with Shadow DOM.`,
  [
    502
    /* ErrorNames.controller_activating_disposed */
  ]: `Trying to activate a disposed controller: {{0}}.`,
  [
    503
    /* ErrorNames.controller_activation_unexpected_state */
  ]: `Controller at {{0}} is in an unexpected state: {{1}} during activation.`,
  [
    504
    /* ErrorNames.controller_activation_synthetic_no_scope */
  ]: `Synthetic view at {{0}} is being activated with null/undefined scope.`,
  [
    505
    /* ErrorNames.controller_deactivation_unexpected_state */
  ]: `Controller at {{0}} is in an unexpected state: {{1}} during deactivation.`,
  [
    506
    /* ErrorNames.controller_watch_invalid_callback */
  ]: `Invalid callback for @watch decorator: {{0}}`,
  [
    507
    /* ErrorNames.controller_property_not_coercible */
  ]: `Observer for bindable property {{0}} does not support coercion.`,
  [
    508
    /* ErrorNames.controller_property_no_change_handler */
  ]: `Observer for property {{0}} does not support change handler.`,
  [
    759
    /* ErrorNames.attribute_def_not_found */
  ]: `No attribute definition found for type {{0:name}}`,
  [
    760
    /* ErrorNames.element_def_not_found */
  ]: `No element definition found for type {{0:name}}`,
  [
    761
    /* ErrorNames.element_only_name */
  ]: `Cannot create a custom element definition with only a name and no type: {{0}}`,
  [
    762
    /* ErrorNames.node_is_not_a_host */
  ]: `Trying to retrieve a custom element controller from a node, but the provided node <{{0:nodeName}} /> is not a custom element or containerless host.`,
  [
    763
    /* ErrorNames.node_is_not_a_host2 */
  ]: `Trying to retrieve a custom element controller from a node, but the provided node <{{0:nodeName}} /> is not a custom element or containerless host.`,
  [
    764
    /* ErrorNames.node_is_not_part_of_aurelia_app */
  ]: `Trying to retrieve a custom element controller from a node. But the provided node <{{0:nodeName}} /> does not appear to be part of an Aurelia app DOM tree, or it was added to the DOM in a way that Aurelia cannot properly resolve its position in the component tree.`,
  [
    765
    /* ErrorNames.node_is_not_part_of_aurelia_app2 */
  ]: `Trying to retrieve a custom element controller from a node. But the provided node <{{0:nodeName}} /> does not appear to be part of an Aurelia app DOM tree, or it was added to the DOM in a way that Aurelia cannot properly resolve its position in the component tree.`,
  [
    766
    /* ErrorNames.invalid_process_content_hook */
  ]: `Invalid @processContent hook. Expected the hook to be a function (when defined in a class, it needs to be a static function) but got a {{0:typeof}}.`,
  [
    652
    /* ErrorNames.node_observer_strategy_not_found */
  ]: `Aurelia is unable to observe property {{0}}. Register observation mapping with .useConfig().`,
  [
    653
    /* ErrorNames.node_observer_mapping_existed */
  ]: `Mapping for property {{0}} of <{{1}} /> already exists`,
  [
    654
    /* ErrorNames.select_observer_array_on_non_multi_select */
  ]: `Array values can only be bound to a multi-select.`,
  [
    714
    /* ErrorNames.compiler_primary_already_existed */
  ]: `Template compilation error: primary already exists on element/attribute "{{0}}"`,
  [
    719
    /* ErrorNames.compiler_attr_mapper_duplicate_mapping */
  ]: `Attribute {{0}} has been already registered for {{1:element}}`,
  [
    767
    /* ErrorNames.root_not_found */
  ]: `Aurelia.root was accessed without a valid root.`,
  [
    768
    /* ErrorNames.aurelia_instance_existed_in_container */
  ]: `An instance of Aurelia is already registered with the container or an ancestor of it.`,
  [
    769
    /* ErrorNames.invalid_platform_impl */
  ]: `Failed to initialize the platform object. The host element's ownerDocument does not have a defaultView, did you create the host from a DOMParser and forget to call adoptNode()?`,
  [
    770
    /* ErrorNames.no_composition_root */
  ]: `Aurelia.start() was called without a composition root`,
  [
    771
    /* ErrorNames.invalid_dispose_call */
  ]: `The aurelia instance must be fully stopped before it can be disposed`,
  [
    750
    /* ErrorNames.not_supported_view_ref_api */
  ]: `view.ref is not supported. If you are migrating from v1, this can be understood as the controller.`,
  [
    751
    /* ErrorNames.ref_not_found */
  ]: `Attempted to reference "{{0}}", but it was not found amongst the target's API.`,
  [
    752
    /* ErrorNames.element_res_not_found */
  ]: `Element {{0:.res}} is not registered in {{1:name}}.`,
  [
    753
    /* ErrorNames.attribute_res_not_found */
  ]: `Attribute {{0:.res}} is not registered in {{1:name}}.`,
  [
    754
    /* ErrorNames.attribute_tc_res_not_found */
  ]: `Attribute {{0:.res}} is not registered in {{1:name}}.`,
  [
    755
    /* ErrorNames.view_factory_provider_not_ready */
  ]: `Cannot resolve ViewFactory before the provider was prepared.`,
  [
    756
    /* ErrorNames.view_factory_invalid_name */
  ]: `Cannot resolve ViewFactory without a (valid) name.`,
  [
    757
    /* ErrorNames.rendering_mismatch_length */
  ]: `AUR0757: The compiled template is not aligned with the render instructions. There are {{0}} targets and {{1}} instructions.`,
  [
    772
    /* ErrorNames.watch_null_config */
  ]: `Invalid @watch decorator config. Expected an expression or a fn but received null/undefined.`,
  [
    773
    /* ErrorNames.watch_invalid_change_handler */
  ]: `Invalid @watch decorator change handler config.Method "{{0}}" not found in class {{1}}`,
  [
    774
    /* ErrorNames.watch_non_method_decorator_usage */
  ]: `Invalid @watch decorator usage: decorated target {{0}} is not a class method.`,
  [
    775
    /* ErrorNames.repeat_invalid_key_binding_command */
  ]: `Invalid command "{{0}}" usage with [repeat]`,
  [
    776
    /* ErrorNames.repeat_extraneous_binding */
  ]: `Invalid [repeat] usage, found extraneous target "{{0}}"`,
  [
    777
    /* ErrorNames.repeat_non_iterable */
  ]: `Unsupported: [repeat] cannot iterate over {{0:toString}}`,
  [
    778
    /* ErrorNames.repeat_non_countable */
  ]: `Unsupported: [repeat] cannot count {{0:toString}}`,
  [
    814
    /* ErrorNames.repeat_mismatch_length */
  ]: `[repeat] encountered an error: number of views != number of items {{0:join(!=)}}`,
  [
    779
    /* ErrorNames.portal_invalid_insert_position */
  ]: "Invalid portal insertion position: {{0}}",
  [
    801
    /* ErrorNames.self_behavior_invalid_usage */
  ]: `"& self" binding behavior only supports listener binding via trigger/capture command.`,
  [
    802
    /* ErrorNames.update_trigger_behavior_no_triggers */
  ]: `"& updateTrigger" invalid usage. This binding behavior requires at least one event name argument: eg <input value.bind="firstName & updateTrigger:'blur'">`,
  [
    803
    /* ErrorNames.update_trigger_invalid_usage */
  ]: `"& updateTrigger" invalid usage. This binding behavior can only be applied to two-way/ from-view bindings.`,
  [
    805
    /* ErrorNames.au_compose_invalid_scope_behavior */
  ]: `Invalid scope behavior "{{0}}" on <au-compose />. Only "scoped" or "auto" allowed.`,
  // originally not supported
  [
    806
    /* ErrorNames.au_compose_component_name_not_found */
  ]: `<au-compose /> couldn't find a custom element with name "{{0}}", did you forget to register it locally or globally?`,
  [
    807
    /* ErrorNames.au_compose_invalid_run */
  ]: `Composition has already been activated/deactivated. Id: {{0:controller}}`,
  [
    808
    /* ErrorNames.au_compose_duplicate_deactivate */
  ]: `Composition has already been deactivated.`,
  [
    810
    /* ErrorNames.else_without_if */
  ]: `Invalid [else] usage, it should follow an [if]`,
  [
    811
    /* ErrorNames.portal_query_empty */
  ]: `Invalid portal strict target query, empty query.`,
  [
    812
    /* ErrorNames.portal_no_target */
  ]: `Invalid portal strict target resolution, target not found.`,
  [
    813
    /* ErrorNames.promise_invalid_usage */
  ]: `Invalid [pending]/[then]/[catch] usage. The parent [promise].resolve not found; only "*[promise.resolve] > *[pending|then|catch]" relation is supported.`,
  [
    815
    /* ErrorNames.switch_invalid_usage */
  ]: `Invalid [case/default-case] usage. The parent [switch] not found; only "*[switch] > *[case|default-case]" relation is supported.`,
  [
    816
    /* ErrorNames.switch_no_multiple_default */
  ]: `Invalid [default-case] usage. Multiple 'default-case's are not allowed.`,
  [
    817
    /* ErrorNames.signal_behavior_invalid_usage */
  ]: `"& signal" binding behavior can only be used with bindings that have a "handleChange" method`,
  [
    818
    /* ErrorNames.signal_behavior_no_signals */
  ]: `"& signal" invalid usage. At least one signal name must be passed to the signal behavior, e.g. "expr & signal:'my-signal'"`,
  [
    819
    /* ErrorNames.spreading_bindable_onto_non_component */
  ]: "Spreading to bindables onto non custom element",
  [
    820
    /* ErrorNames.spreading_invalid_target */
  ]: `Invalid spread target {{0}}`,
  [
    9999
    /* ErrorNames.no_spread_scope_context_found */
  ]: "No scope context for spread binding.",
  [
    9998
    /* ErrorNames.no_spread_template_controller */
  ]: "Spread binding does not support spreading custom attributes/template controllers. Did you build the spread instruction manually?",
  [
    9997
    /* ErrorNames.marker_malformed */
  ]: `Marker is malformed. This likely happens when a compiled template has been modified. Did you accidentally modified some compiled template? You can modify template before compilation with compiling Template compiler hook.`,
  [
    9996
    /* ErrorNames.binding_already_has_rate_limited */
  ]: `Invalid usage, a rate limit has already been applied. Did you have both throttle and debounce on the same binding?`,
  [
    9995
    /* ErrorNames.binding_already_has_target_subscriber */
  ]: `The binding already has a target subscriber.`,
  [
    9994
    /* ErrorNames.attr_behavior_invalid_binding */
  ]: `"& attr" can be only used on property binding. It's used on {{0:ctor}}`,
  [
    9993
    /* ErrorNames.update_trigger_behavior_not_supported */
  ]: '"& updateTrigger" binding behavior only works with the default implementation of Aurelia HTML observation. Implement your own node observation + updateTrigger',
  [
    9992
    /* ErrorNames.update_trigger_behavior_node_property_not_observable */
  ]: `"& updateTrigger" uses node observer to observe, but it does not know how to use events to observe property <{{0:target@property}} />`,
  [
    9991
    /* ErrorNames.children_decorator_invalid_usage */
  ]: `Invalid @children usage. @children decorator can only be used on a field`,
  [
    9990
    /* ErrorNames.slotted_decorator_invalid_usage */
  ]: `Invalid @slotted usage. @slotted decorator can only be used on a field`,
  [
    9989
    /* ErrorNames.children_invalid_query */
  ]: `Invalid query selector. Only selectors with alpha-numeric characters, or $all are allowed. Got {{0}} instead.`
};
var getMessageByCode5 = (name, ...details) => {
  var _a3;
  let cooked = errorsMap5[name];
  for (let i = 0; i < details.length; ++i) {
    const regex = new RegExp(`{{${i}(:.*)?}}`, "g");
    let matches = regex.exec(cooked);
    while (matches != null) {
      const method = (_a3 = matches[1]) == null ? void 0 : _a3.slice(1);
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
          case "controller":
            value = value.controller.name;
            break;
          case "target@property":
            value = `${value.target}@${value.targetProperty}`;
            break;
          case "toString":
            value = Object.prototype.toString.call(value);
            break;
          case "join(!=)":
            value = value.join("!=");
            break;
          case "bindingCommandHelp":
            value = getBindingCommandHelp2(value);
            break;
          case "element":
            value = value === "*" ? "all elements" : `<${value} />`;
            break;
          default: {
            if (method == null ? void 0 : method.startsWith(".")) {
              value = safeString3(value[method.slice(1)]);
            } else {
              value = safeString3(value);
            }
          }
        }
      }
      cooked = cooked.slice(0, matches.index) + value + cooked.slice(regex.lastIndex);
      matches = regex.exec(cooked);
    }
  }
  return cooked;
};
function getBindingCommandHelp2(name) {
  switch (name) {
    case "delegate":
      return `
The ".delegate" binding command has been removed in v2. Binding command ".trigger" should be used instead. If you are migrating v1 application, install compat package to add back the ".delegate" binding command for ease of migration.`;
    case "call":
      return `
The ".call" binding command has been removed in v2. If you want to pass a callback that preserves the context of the function call, you can use lambda instead. Refer to lambda expression doc for more details.`;
    default:
      return "";
  }
}
function bindable(configOrPropOrTarget, context) {
  let configOrProp = void 0;
  function decorator(_target, context2) {
    var _a3;
    let $prop;
    switch (context2.kind) {
      case "getter":
      case "field": {
        const prop = context2.name;
        if (typeof prop !== "string")
          throw createMappedError5(
            227
            /* ErrorNames.invalid_bindable_decorator_usage_symbol */
          );
        $prop = prop;
        break;
      }
      case "class":
        if (configOrProp == null)
          throw createMappedError5(
            228
            /* ErrorNames.invalid_bindable_decorator_usage_class_without_configuration */
          );
        if (typeof configOrProp == "string") {
          $prop = configOrProp;
        } else {
          const prop = configOrProp.name;
          if (!prop)
            throw createMappedError5(
              229
              /* ErrorNames.invalid_bindable_decorator_usage_class_without_property_name_configuration */
            );
          if (typeof prop !== "string")
            throw createMappedError5(
              227
              /* ErrorNames.invalid_bindable_decorator_usage_symbol */
            );
          $prop = prop;
        }
        break;
    }
    const config = configOrProp == null || typeof configOrProp === "string" ? { name: $prop } : configOrProp;
    const metadata = (_a3 = context2.metadata)[baseName] ?? (_a3[baseName] = createLookup());
    metadata[$prop] = BindableDefinition.create($prop, config);
  }
  if (arguments.length > 1) {
    configOrProp = {};
    decorator(configOrPropOrTarget, context);
    return;
  } else if (isString(configOrPropOrTarget)) {
    configOrProp = configOrPropOrTarget;
    return decorator;
  }
  configOrProp = configOrPropOrTarget === void 0 ? {} : configOrPropOrTarget;
  return decorator;
}
var baseName = getAnnotationKeyFor2("bindables");
var Bindable = objectFreeze2({
  name: baseName,
  keyFrom: (name) => `${baseName}:${name}`,
  from(...bindableLists) {
    const bindables2 = {};
    const isArray2 = Array.isArray;
    function addName(name) {
      bindables2[name] = BindableDefinition.create(name);
    }
    function addDescription(name, def2) {
      bindables2[name] = def2 instanceof BindableDefinition ? def2 : BindableDefinition.create(name, def2 === true ? {} : def2);
    }
    function addList(maybeList) {
      if (isArray2(maybeList)) {
        maybeList.forEach((nameOrDef) => isString(nameOrDef) ? addName(nameOrDef) : addDescription(nameOrDef.name, nameOrDef));
      } else if (maybeList instanceof BindableDefinition) {
        bindables2[maybeList.name] = maybeList;
      } else if (maybeList !== void 0) {
        objectKeys(maybeList).forEach((name) => addDescription(name, maybeList[name]));
      }
    }
    bindableLists.forEach(addList);
    return bindables2;
  },
  getAll(Type) {
    const defs = [];
    const prototypeChain = getPrototypeChain(Type);
    let iProto = prototypeChain.length;
    let Class;
    while (--iProto >= 0) {
      Class = prototypeChain[iProto];
      const bindableMetadata = getMetadata3(baseName, Class);
      if (bindableMetadata == null)
        continue;
      defs.push(...Object.values(bindableMetadata));
    }
    return defs;
  },
  /** @internal */
  _add(bindable2, Type) {
    let bindables2 = getMetadata3(baseName, Type);
    if (bindables2 == null) {
      defineMetadata3(bindables2 = createLookup(), Type, baseName);
    }
    bindables2[bindable2.name] = bindable2;
  }
});
var BindableDefinition = class _BindableDefinition {
  constructor(attribute, callback, mode, primary, name, set) {
    this.attribute = attribute;
    this.callback = callback;
    this.mode = mode;
    this.primary = primary;
    this.name = name;
    this.set = set;
  }
  static create(prop, def2 = {}) {
    const mode = def2.mode ?? toView;
    return new _BindableDefinition(def2.attribute ?? kebabCase(prop), def2.callback ?? `${prop}Changed`, isString(mode) ? BindingMode[mode] ?? defaultMode : mode, def2.primary ?? false, def2.name ?? prop, def2.set ?? getInterceptor(def2));
  }
};
function coercer(target, context) {
  context.addInitializer(function() {
    Coercer.define(this, context.name);
  });
}
var Coercer = {
  key: getAnnotationKeyFor2("coercer"),
  define(target, property) {
    defineMetadata3(target[property].bind(target), target, Coercer.key);
  },
  for(target) {
    return getMetadata3(Coercer.key, target);
  }
};
function getInterceptor(def2 = {}) {
  const type = def2.type ?? null;
  if (type == null) {
    return noop;
  }
  let coercer2;
  switch (type) {
    case Number:
    case Boolean:
    case String:
    case BigInt:
      coercer2 = type;
      break;
    default: {
      const $coercer = type.coerce;
      coercer2 = typeof $coercer === "function" ? $coercer.bind(type) : Coercer.for(type) ?? noop;
      break;
    }
  }
  return coercer2 === noop ? coercer2 : createCoercer(coercer2, def2.nullable);
}
function createCoercer(coercer2, nullable) {
  return function(value, coercionConfiguration) {
    if (!(coercionConfiguration == null ? void 0 : coercionConfiguration.enableCoercion))
      return value;
    return (nullable ?? ((coercionConfiguration == null ? void 0 : coercionConfiguration.coerceNullish) ?? false ? false : true)) && value == null ? value : coercer2(value, coercionConfiguration);
  };
}
var createInterface2 = DI.createInterface;
var singletonRegistration3 = Registration.singleton;
var aliasRegistration2 = Registration.aliasTo;
var instanceRegistration2 = Registration.instance;
Registration.callback;
Registration.transient;
var registerResolver = (ctn, key, resolver) => ctn.registerResolver(key, resolver);
function alias(...aliases) {
  return function(target, context) {
    context.addInitializer(function() {
      const key = getAnnotationKeyFor2("aliases");
      const existing = getMetadata3(key, this);
      if (existing === void 0) {
        defineMetadata3(aliases, this, key);
      } else {
        existing.push(...aliases);
      }
    });
  };
}
function registerAliases(aliases, resource2, key, container) {
  for (let i = 0, ii = aliases.length; i < ii; ++i) {
    aliasRegistration2(key, resource2.keyFrom(aliases[i])).register(container);
  }
}
var dtElement = "custom-element";
var dtAttribute = "custom-attribute";
var getDefinitionFromStaticAu = (Type, typeName, createDef, metadataKey = "__au_static_resource__") => {
  var _a3;
  let def2 = getMetadata3(metadataKey, Type);
  if (def2 == null) {
    if (((_a3 = Type.$au) == null ? void 0 : _a3.type) === typeName) {
      def2 = createDef(Type.$au, Type);
      defineMetadata3(def2, Type, metadataKey);
    }
  }
  return def2;
};
function bindingBehavior(nameOrDef) {
  return function(target, context) {
    context.addInitializer(function() {
      BindingBehavior.define(nameOrDef, this);
    });
    return target;
  };
}
var BindingBehaviorDefinition = class _BindingBehaviorDefinition {
  constructor(Type, name, aliases, key) {
    this.Type = Type;
    this.name = name;
    this.aliases = aliases;
    this.key = key;
  }
  static create(nameOrDef, Type) {
    let name;
    let def2;
    if (isString(nameOrDef)) {
      name = nameOrDef;
      def2 = { name };
    } else {
      name = nameOrDef.name;
      def2 = nameOrDef;
    }
    return new _BindingBehaviorDefinition(Type, firstDefined(getBehaviorAnnotation(Type, "name"), name), mergeArrays(getBehaviorAnnotation(Type, "aliases"), def2.aliases, Type.aliases), BindingBehavior.keyFrom(name));
  }
  register(container, aliasName) {
    const $Type = this.Type;
    const key = typeof aliasName === "string" ? getBindingBehaviorKeyFrom(aliasName) : this.key;
    const aliases = this.aliases;
    if (!container.has(key, false)) {
      container.register(container.has($Type, false) ? null : singletonRegistration3($Type, $Type), aliasRegistration2($Type, key), ...aliases.map((alias2) => aliasRegistration2($Type, getBindingBehaviorKeyFrom(alias2))));
    } else {
      console.warn(`[DEV:aurelia] ${createMappedError5(156, this.name)}`);
    }
  }
};
var behaviorTypeName = "binding-behavior";
var bbBaseName = getResourceKeyFor(behaviorTypeName);
var getBehaviorAnnotation = (Type, prop) => getMetadata3(getAnnotationKeyFor2(prop), Type);
var getBindingBehaviorKeyFrom = (name) => `${bbBaseName}:${name}`;
var BindingBehavior = objectFreeze2({
  name: bbBaseName,
  keyFrom: getBindingBehaviorKeyFrom,
  isType(value) {
    var _a3;
    return isFunction(value) && (hasMetadata(bbBaseName, value) || ((_a3 = value.$au) == null ? void 0 : _a3.type) === behaviorTypeName);
  },
  define(nameOrDef, Type) {
    const definition = BindingBehaviorDefinition.create(nameOrDef, Type);
    const $Type = definition.Type;
    defineMetadata3(definition, $Type, bbBaseName, resourceBaseName);
    return $Type;
  },
  getDefinition(Type) {
    const def2 = getMetadata3(bbBaseName, Type) ?? getDefinitionFromStaticAu(Type, behaviorTypeName, BindingBehaviorDefinition.create);
    if (def2 === void 0) {
      throw createMappedError5(151, Type);
    }
    return def2;
  },
  find(container, name) {
    const Type = container.find(behaviorTypeName, name);
    return Type == null ? null : getMetadata3(bbBaseName, Type) ?? getDefinitionFromStaticAu(Type, behaviorTypeName, BindingBehaviorDefinition.create) ?? null;
  },
  get(container, name) {
    {
      try {
        return container.get(resource(getBindingBehaviorKeyFrom(name)));
      } catch (ex) {
        console.error("[DEV:aurelia] Cannot retrieve binding behavior with name", name);
        throw ex;
      }
    }
    return container.get(resource(getBindingBehaviorKeyFrom(name)));
  }
});
var originalModesMap = /* @__PURE__ */ new Map();
var createConfig = (name) => ({ type: behaviorTypeName, name });
var BindingModeBehavior = class {
  bind(scope, binding) {
    originalModesMap.set(binding, binding.mode);
    binding.mode = this.mode;
  }
  unbind(scope, binding) {
    binding.mode = originalModesMap.get(binding);
    originalModesMap.delete(binding);
  }
};
var OneTimeBindingBehavior = class extends BindingModeBehavior {
  get mode() {
    return oneTime;
  }
};
OneTimeBindingBehavior.$au = createConfig("oneTime");
var ToViewBindingBehavior = class extends BindingModeBehavior {
  get mode() {
    return toView;
  }
};
ToViewBindingBehavior.$au = createConfig("toView");
var FromViewBindingBehavior = class extends BindingModeBehavior {
  get mode() {
    return fromView;
  }
};
FromViewBindingBehavior.$au = createConfig("fromView");
var TwoWayBindingBehavior = class extends BindingModeBehavior {
  get mode() {
    return twoWay;
  }
};
TwoWayBindingBehavior.$au = createConfig("twoWay");
var bindingHandlerMap$1 = /* @__PURE__ */ new WeakMap();
var defaultDelay$1 = 200;
var DebounceBindingBehavior = class {
  constructor() {
    this._platform = resolve(IPlatform);
  }
  bind(scope, binding, delay, signals) {
    var _a3;
    const opts = {
      type: "debounce",
      delay: delay ?? defaultDelay$1,
      now: this._platform.performanceNow,
      queue: this._platform.taskQueue,
      signals: isString(signals) ? [signals] : signals ?? emptyArray
    };
    const handler = (_a3 = binding.limit) == null ? void 0 : _a3.call(binding, opts);
    if (handler == null) {
      {
        console.warn(`Binding ${binding.constructor.name} does not support debounce rate limiting`);
      }
    } else {
      bindingHandlerMap$1.set(binding, handler);
    }
  }
  unbind(scope, binding) {
    var _a3;
    (_a3 = bindingHandlerMap$1.get(binding)) == null ? void 0 : _a3.dispose();
    bindingHandlerMap$1.delete(binding);
  }
};
DebounceBindingBehavior.$au = {
  type: behaviorTypeName,
  name: "debounce"
};
var ISignaler = createInterface2("ISignaler", (x) => x.singleton(Signaler));
var Signaler = class {
  constructor() {
    this.signals = createLookup();
  }
  dispatchSignal(name) {
    const listeners = this.signals[name];
    if (listeners === void 0) {
      return;
    }
    let listener;
    for (listener of listeners.keys()) {
      listener.handleChange(void 0, void 0);
    }
  }
  addSignalListener(name, listener) {
    var _a3;
    ((_a3 = this.signals)[name] ?? (_a3[name] = /* @__PURE__ */ new Set())).add(listener);
  }
  removeSignalListener(name, listener) {
    var _a3;
    (_a3 = this.signals[name]) == null ? void 0 : _a3.delete(listener);
  }
};
var SignalBindingBehavior = class {
  constructor() {
    this._lookup = /* @__PURE__ */ new Map();
    this._signaler = resolve(ISignaler);
  }
  bind(scope, binding, ...names) {
    if (!("handleChange" in binding)) {
      throw createMappedError5(
        817
        /* ErrorNames.signal_behavior_invalid_usage */
      );
    }
    if (names.length === 0) {
      throw createMappedError5(
        818
        /* ErrorNames.signal_behavior_no_signals */
      );
    }
    this._lookup.set(binding, names);
    let name;
    for (name of names) {
      addSignalListener(this._signaler, name, binding);
    }
  }
  unbind(scope, binding) {
    const names = this._lookup.get(binding);
    this._lookup.delete(binding);
    let name;
    for (name of names) {
      removeSignalListener(this._signaler, name, binding);
    }
  }
};
SignalBindingBehavior.$au = {
  type: behaviorTypeName,
  name: "signal"
};
var bindingHandlerMap = /* @__PURE__ */ new WeakMap();
var defaultDelay = 200;
var ThrottleBindingBehavior = class {
  constructor() {
    ({ performanceNow: this._now, taskQueue: this._taskQueue } = resolve(IPlatform));
  }
  bind(scope, binding, delay, signals) {
    var _a3;
    const opts = {
      type: "throttle",
      delay: delay ?? defaultDelay,
      now: this._now,
      queue: this._taskQueue,
      signals: isString(signals) ? [signals] : signals ?? emptyArray
    };
    const handler = (_a3 = binding.limit) == null ? void 0 : _a3.call(binding, opts);
    if (handler == null) {
      {
        console.warn(`Binding ${binding.constructor.name} does not support debounce rate limiting`);
      }
    } else {
      bindingHandlerMap.set(binding, handler);
    }
  }
  unbind(scope, binding) {
    var _a3;
    (_a3 = bindingHandlerMap.get(binding)) == null ? void 0 : _a3.dispose();
    bindingHandlerMap.delete(binding);
  }
};
ThrottleBindingBehavior.$au = {
  type: behaviorTypeName,
  name: "throttle"
};
var IAppTask = createInterface2("IAppTask");
var $AppTask = class {
  constructor(slot, key, cb) {
    this.c = void 0;
    this.slot = slot;
    this.k = key;
    this.cb = cb;
  }
  register(container) {
    return this.c = container.register(instanceRegistration2(IAppTask, this));
  }
  run() {
    const key = this.k;
    const cb = this.cb;
    return key === null ? cb() : cb(this.c.get(key));
  }
};
var AppTask = objectFreeze2({
  /**
   * Returns a task that will run just before the root component is created by DI
   */
  creating: createAppTaskSlotHook("creating"),
  /**
   * Returns a task that will run after instantiating the root controller,
   * but before compiling its view (thus means before instantiating the child elements inside it)
   *
   * good chance for a router to do some initial work, or initial routing related in general
   */
  hydrating: createAppTaskSlotHook("hydrating"),
  /**
   * Return a task that will run after the hydration of the root controller,
   * but before hydrating the child element inside
   *
   * good chance for a router to do some initial work, or initial routing related in general
   */
  hydrated: createAppTaskSlotHook("hydrated"),
  /**
   * Return a task that will run right before the root component is activated.
   * In this phase, scope hierarchy is formed, and bindings are getting bound
   */
  activating: createAppTaskSlotHook("activating"),
  /**
   * Return a task that will run right after the root component is activated - the app is now running
   */
  activated: createAppTaskSlotHook("activated"),
  /**
   * Return a task that will runs right before the root component is deactivated.
   * In this phase, scope hierarchy is unlinked, and bindings are getting unbound
   */
  deactivating: createAppTaskSlotHook("deactivating"),
  /**
   * Return a task that will run right after the root component is deactivated
   */
  deactivated: createAppTaskSlotHook("deactivated")
});
function createAppTaskSlotHook(slotName) {
  function appTaskFactory(keyOrCallback, callback) {
    if (isFunction(callback)) {
      return new $AppTask(slotName, keyOrCallback, callback);
    }
    return new $AppTask(slotName, null, keyOrCallback);
  }
  return appTaskFactory;
}
var IPlatform2 = IPlatform;
function watch(expressionOrPropertyAccessFn, changeHandlerOrCallback) {
  if (expressionOrPropertyAccessFn == null) {
    throw createMappedError5(
      772
      /* ErrorNames.watch_null_config */
    );
  }
  return function decorator(target, context) {
    const isClassDecorator = context.kind === "class";
    if (isClassDecorator) {
      if (!isFunction(changeHandlerOrCallback) && (changeHandlerOrCallback == null || !(changeHandlerOrCallback in target.prototype))) {
        throw createMappedError5(773, `${safeString3(changeHandlerOrCallback)}@${target.name}}`);
      }
    } else if (!isFunction(target) || context.static) {
      throw createMappedError5(774, context.name);
    }
    const watchDef = new WatchDefinition(expressionOrPropertyAccessFn, isClassDecorator ? changeHandlerOrCallback : target);
    if (isClassDecorator) {
      addDefinition(target);
    } else {
      let added = false;
      context.addInitializer(function() {
        if (!added) {
          added = true;
          addDefinition(this.constructor);
        }
      });
    }
    function addDefinition(type) {
      Watch.add(type, watchDef);
      if (isAttributeType(type)) {
        getAttributeDefinition(type).watches.push(watchDef);
      }
      if (isElementType(type)) {
        getElementDefinition(type).watches.push(watchDef);
      }
    }
  };
}
var WatchDefinition = class {
  constructor(expression, callback) {
    this.expression = expression;
    this.callback = callback;
  }
};
var Watch = (() => {
  const watches = /* @__PURE__ */ new WeakMap();
  return objectFreeze2({
    add(Type, definition) {
      let defs = watches.get(Type);
      if (defs == null) {
        watches.set(Type, defs = []);
      }
      defs.push(definition);
    },
    getDefinitions(Type) {
      return watches.get(Type) ?? emptyArray;
    }
  });
})();
function customAttribute(nameOrDef) {
  return function(target, context) {
    context.addInitializer(function() {
      defineAttribute(nameOrDef, this);
    });
    return target;
  };
}
function templateController(nameOrDef) {
  return function(target, context) {
    context.addInitializer(function() {
      defineAttribute(isString(nameOrDef) ? { isTemplateController: true, name: nameOrDef } : { isTemplateController: true, ...nameOrDef }, this);
    });
    return target;
  };
}
var CustomAttributeDefinition = class _CustomAttributeDefinition {
  // a simple marker to distinguish between Custom Element definition & Custom attribute definition
  get type() {
    return dtAttribute;
  }
  constructor(Type, name, aliases, key, defaultBindingMode, isTemplateController, bindables2, noMultiBindings, watches, dependencies, containerStrategy) {
    this.Type = Type;
    this.name = name;
    this.aliases = aliases;
    this.key = key;
    this.defaultBindingMode = defaultBindingMode;
    this.isTemplateController = isTemplateController;
    this.bindables = bindables2;
    this.noMultiBindings = noMultiBindings;
    this.watches = watches;
    this.dependencies = dependencies;
    this.containerStrategy = containerStrategy;
  }
  static create(nameOrDef, Type) {
    let name;
    let def2;
    if (isString(nameOrDef)) {
      name = nameOrDef;
      def2 = { name };
    } else {
      name = nameOrDef.name;
      def2 = nameOrDef;
    }
    const mode = firstDefined(getAttributeAnnotation(Type, "defaultBindingMode"), def2.defaultBindingMode, Type.defaultBindingMode, toView);
    for (const bindable2 of Object.values(Bindable.from(def2.bindables))) {
      Bindable._add(bindable2, Type);
    }
    return new _CustomAttributeDefinition(Type, firstDefined(getAttributeAnnotation(Type, "name"), name), mergeArrays(getAttributeAnnotation(Type, "aliases"), def2.aliases, Type.aliases), getAttributeKeyFrom(name), isString(mode) ? BindingMode[mode] ?? defaultMode : mode, firstDefined(getAttributeAnnotation(Type, "isTemplateController"), def2.isTemplateController, Type.isTemplateController, false), Bindable.from(...Bindable.getAll(Type), getAttributeAnnotation(Type, "bindables"), Type.bindables, def2.bindables), firstDefined(getAttributeAnnotation(Type, "noMultiBindings"), def2.noMultiBindings, Type.noMultiBindings, false), mergeArrays(Watch.getDefinitions(Type), Type.watches), mergeArrays(getAttributeAnnotation(Type, "dependencies"), def2.dependencies, Type.dependencies), firstDefined(getAttributeAnnotation(Type, "containerStrategy"), def2.containerStrategy, Type.containerStrategy, "reuse"));
  }
  register(container, aliasName) {
    const $Type = this.Type;
    const key = typeof aliasName === "string" ? getAttributeKeyFrom(aliasName) : this.key;
    const aliases = this.aliases;
    if (!container.has(key, false)) {
      container.register(container.has($Type, false) ? null : singletonRegistration3($Type, $Type), aliasRegistration2($Type, key), ...aliases.map((alias2) => aliasRegistration2($Type, getAttributeKeyFrom(alias2))));
    } else {
      if (_CustomAttributeDefinition.warnDuplicate) {
        container.get(ILogger).warn(createMappedError5(154, this.name));
      }
      {
        console.warn(`[DEV:aurelia] ${createMappedError5(154, this.name)}`);
      }
    }
  }
  toString() {
    return `au:ca:${this.name}`;
  }
};
CustomAttributeDefinition.warnDuplicate = true;
var attrTypeName = "custom-attribute";
var attributeBaseName = getResourceKeyFor(attrTypeName);
var getAttributeKeyFrom = (name) => `${attributeBaseName}:${name}`;
var getAttributeAnnotation = (Type, prop) => getMetadata3(getAnnotationKeyFor2(prop), Type);
var isAttributeType = (value) => {
  var _a3;
  return isFunction(value) && (hasMetadata(attributeBaseName, value) || ((_a3 = value.$au) == null ? void 0 : _a3.type) === attrTypeName);
};
var findAttributeControllerFor = (node, name) => {
  return getRef(node, getAttributeKeyFrom(name)) ?? void 0;
};
var defineAttribute = (nameOrDef, Type) => {
  const definition = CustomAttributeDefinition.create(nameOrDef, Type);
  const $Type = definition.Type;
  defineMetadata3(definition, $Type, attributeBaseName, resourceBaseName);
  return $Type;
};
var getAttributeDefinition = (Type) => {
  const def2 = getMetadata3(attributeBaseName, Type) ?? getDefinitionFromStaticAu(Type, attrTypeName, CustomAttributeDefinition.create);
  if (def2 === void 0) {
    throw createMappedError5(759, Type);
  }
  return def2;
};
var findClosestControllerByName = (node, attrNameOrType) => {
  let key = "";
  let attrName = "";
  if (isString(attrNameOrType)) {
    key = getAttributeKeyFrom(attrNameOrType);
    attrName = attrNameOrType;
  } else {
    const definition = getAttributeDefinition(attrNameOrType);
    key = definition.key;
    attrName = definition.name;
  }
  let cur = node;
  while (cur !== null) {
    const controller = getRef(cur, key);
    if (controller == null ? void 0 : controller.is(attrName)) {
      return controller;
    }
    cur = getEffectiveParentNode(cur);
  }
  return null;
};
var CustomAttribute = objectFreeze2({
  name: attributeBaseName,
  keyFrom: getAttributeKeyFrom,
  isType: isAttributeType,
  for: findAttributeControllerFor,
  closest: findClosestControllerByName,
  define: defineAttribute,
  getDefinition: getAttributeDefinition,
  annotate(Type, prop, value) {
    defineMetadata3(value, Type, getAnnotationKeyFor2(prop));
  },
  getAnnotation: getAttributeAnnotation,
  find(c, name) {
    const Type = c.find(attrTypeName, name);
    return Type === null ? null : getMetadata3(attributeBaseName, Type) ?? getDefinitionFromStaticAu(Type, attrTypeName, CustomAttributeDefinition.create) ?? null;
  }
});
var ILifecycleHooks = createInterface2("ILifecycleHooks");
var LifecycleHooksEntry = class {
  constructor(definition, instance) {
    this.definition = definition;
    this.instance = instance;
  }
};
var LifecycleHooksDefinition = class _LifecycleHooksDefinition {
  constructor(Type, propertyNames) {
    this.Type = Type;
    this.propertyNames = propertyNames;
  }
  /**
   * @param def - Placeholder for future extensions. Currently always an empty object.
   */
  static create(def2, Type) {
    const propertyNames = /* @__PURE__ */ new Set();
    let proto = Type.prototype;
    while (proto !== baseObjectPrototype) {
      for (const name of getOwnPropertyNames(proto)) {
        if (name !== "constructor" && !name.startsWith("_")) {
          propertyNames.add(name);
        }
      }
      proto = Object.getPrototypeOf(proto);
    }
    return new _LifecycleHooksDefinition(Type, propertyNames);
  }
};
var LifecycleHooks = (() => {
  const containerLookup2 = /* @__PURE__ */ new WeakMap();
  const definitionMap = /* @__PURE__ */ new WeakMap();
  return objectFreeze2({
    // name: lhBaseName,
    /**
     * @param def - Placeholder for future extensions. Currently always an empty object.
     */
    define(def2, Type) {
      const definition = LifecycleHooksDefinition.create(def2, Type);
      const $Type = definition.Type;
      definitionMap.set($Type, definition);
      return {
        register(container) {
          singletonRegistration3(ILifecycleHooks, $Type).register(container);
        }
      };
    },
    /**
     * @param ctx - The container where the resolution starts
     * @param Type - The constructor of the Custom element/ Custom attribute with lifecycle metadata
     */
    resolve(ctx) {
      let lookup2 = containerLookup2.get(ctx);
      if (lookup2 === void 0) {
        containerLookup2.set(ctx, lookup2 = new LifecycleHooksLookupImpl());
        const root = ctx.root;
        const instances = root === ctx ? ctx.getAll(ILifecycleHooks) : ctx.has(ILifecycleHooks, false) ? root.getAll(ILifecycleHooks).concat(ctx.getAll(ILifecycleHooks)) : root.getAll(ILifecycleHooks);
        let instance;
        let definition;
        let entry;
        let name;
        let entries;
        for (instance of instances) {
          definition = definitionMap.get(instance.constructor);
          entry = new LifecycleHooksEntry(definition, instance);
          for (name of definition.propertyNames) {
            entries = lookup2[name];
            if (entries === void 0) {
              lookup2[name] = [entry];
            } else {
              entries.push(entry);
            }
          }
        }
      }
      return lookup2;
    }
  });
})();
var LifecycleHooksLookupImpl = class {
};
function lifecycleHooks(target, context) {
  function decorator(target2, context2) {
    var _a3;
    const metadata = (context2 == null ? void 0 : context2.metadata) ?? (target2[_a3 = Symbol.metadata] ?? (target2[_a3] = /* @__PURE__ */ Object.create(null)));
    metadata[registrableMetadataKey] = LifecycleHooks.define({}, target2);
    return target2;
  }
  return target == null ? decorator : decorator(target, context);
}
function valueConverter(nameOrDef) {
  return function(target, context) {
    context.addInitializer(function() {
      ValueConverter.define(nameOrDef, this);
    });
    return target;
  };
}
var ValueConverterDefinition = class _ValueConverterDefinition {
  constructor(Type, name, aliases, key) {
    this.Type = Type;
    this.name = name;
    this.aliases = aliases;
    this.key = key;
  }
  static create(nameOrDef, Type) {
    let name;
    let def2;
    if (isString(nameOrDef)) {
      name = nameOrDef;
      def2 = { name };
    } else {
      name = nameOrDef.name;
      def2 = nameOrDef;
    }
    return new _ValueConverterDefinition(Type, firstDefined(getConverterAnnotation(Type, "name"), name), mergeArrays(getConverterAnnotation(Type, "aliases"), def2.aliases, Type.aliases), ValueConverter.keyFrom(name));
  }
  register(container, aliasName) {
    const $Type = this.Type;
    const key = typeof aliasName === "string" ? getValueConverterKeyFrom(aliasName) : this.key;
    const aliases = this.aliases;
    if (!container.has(key, false)) {
      container.register(container.has($Type, false) ? null : singletonRegistration3($Type, $Type), aliasRegistration2($Type, key), ...aliases.map((alias2) => aliasRegistration2($Type, getValueConverterKeyFrom(alias2))));
    } else {
      console.warn(`[DEV:aurelia] ${createMappedError5(155, this.name)}`);
    }
  }
};
var converterTypeName = "value-converter";
var vcBaseName = getResourceKeyFor(converterTypeName);
var getConverterAnnotation = (Type, prop) => getMetadata3(getAnnotationKeyFor2(prop), Type);
var getValueConverterKeyFrom = (name) => `${vcBaseName}:${name}`;
var ValueConverter = objectFreeze2({
  name: vcBaseName,
  keyFrom: getValueConverterKeyFrom,
  isType(value) {
    var _a3;
    return isFunction(value) && (hasMetadata(vcBaseName, value) || ((_a3 = value.$au) == null ? void 0 : _a3.type) === converterTypeName);
  },
  define(nameOrDef, Type) {
    const definition = ValueConverterDefinition.create(nameOrDef, Type);
    const $Type = definition.Type;
    defineMetadata3(definition, $Type, vcBaseName, resourceBaseName);
    return $Type;
  },
  getDefinition(Type) {
    const def2 = getMetadata3(vcBaseName, Type) ?? getDefinitionFromStaticAu(Type, converterTypeName, ValueConverterDefinition.create);
    if (def2 === void 0) {
      throw createMappedError5(152, Type);
    }
    return def2;
  },
  annotate(Type, prop, value) {
    defineMetadata3(value, Type, getAnnotationKeyFor2(prop));
  },
  getAnnotation: getConverterAnnotation,
  find(container, name) {
    const Type = container.find(converterTypeName, name);
    return Type == null ? null : getMetadata3(vcBaseName, Type) ?? getDefinitionFromStaticAu(Type, converterTypeName, ValueConverterDefinition.create) ?? null;
  },
  get(container, name) {
    {
      try {
        return container.get(resource(getValueConverterKeyFrom(name)));
      } catch (ex) {
        console.error("[DEV:aurelia] Cannot retrieve value converter with name", name);
        throw ex;
      }
    }
    return container.get(resource(getValueConverterKeyFrom(name)));
  }
});
var BindingTargetSubscriber = class {
  constructor(b, flushQueue) {
    this._value = void 0;
    this.b = b;
    this._flushQueue = flushQueue;
  }
  flush() {
    this.b.updateSource(this._value);
  }
  // deepscan-disable-next-line
  handleChange(value, _) {
    const b = this.b;
    if (value !== astEvaluate(b.ast, b._scope, b, null)) {
      this._value = value;
      this._flushQueue.add(this);
    }
  }
};
var mixinUseScope = /* @__PURE__ */ (() => {
  function useScope(scope) {
    this._scope = scope;
  }
  return (target) => {
    defineHiddenProp(target.prototype, "useScope", useScope);
  };
})();
var mixinAstEvaluator = /* @__PURE__ */ (() => {
  class ResourceLookup {
  }
  const converterResourceLookupCache = /* @__PURE__ */ new WeakMap();
  const behaviorResourceLookupCache = /* @__PURE__ */ new WeakMap();
  const appliedBehaviors = /* @__PURE__ */ new WeakMap();
  function evaluatorGet(key) {
    return this.l.get(key);
  }
  function evaluatorGetBehavior(b, name) {
    let resourceLookup = behaviorResourceLookupCache.get(b);
    if (resourceLookup == null) {
      behaviorResourceLookupCache.set(b, resourceLookup = new ResourceLookup());
    }
    return resourceLookup[name] ?? (resourceLookup[name] = BindingBehavior.get(b.l, name));
  }
  function evaluatorBindBehavior(name, scope, args) {
    var _a3;
    const behavior = evaluatorGetBehavior(this, name);
    if (behavior == null) {
      throw createMappedError5(101, name);
    }
    let applied = appliedBehaviors.get(this);
    if (applied == null) {
      appliedBehaviors.set(this, applied = {});
    }
    if (applied[name]) {
      throw createMappedError5(102, name);
    }
    (_a3 = behavior.bind) == null ? void 0 : _a3.call(behavior, scope, this, ...args);
  }
  function evaluatorUnbindBehavior(name, scope) {
    var _a3;
    const behavior = evaluatorGetBehavior(this, name);
    const applied = appliedBehaviors.get(this);
    (_a3 = behavior == null ? void 0 : behavior.unbind) == null ? void 0 : _a3.call(behavior, scope, this);
    if (applied != null) {
      applied[name] = false;
    }
  }
  function evaluatorGetConverter(b, name) {
    let resourceLookup = converterResourceLookupCache.get(b);
    if (resourceLookup == null) {
      converterResourceLookupCache.set(b, resourceLookup = new ResourceLookup());
    }
    return resourceLookup[name] ?? (resourceLookup[name] = ValueConverter.get(b.l, name));
  }
  function evaluatorBindConverter(name) {
    const vc = evaluatorGetConverter(this, name);
    if (vc == null) {
      throw createMappedError5(103, name);
    }
    const signals = vc.signals;
    if (signals != null) {
      const signaler = this.l.get(ISignaler);
      const ii = signals.length;
      let i = 0;
      for (; i < ii; ++i) {
        signaler.addSignalListener(signals[i], this);
      }
    }
  }
  function evaluatorUnbindConverter(name) {
    const vc = evaluatorGetConverter(this, name);
    if ((vc == null ? void 0 : vc.signals) === void 0) {
      return;
    }
    const signaler = this.l.get(ISignaler);
    let i = 0;
    for (; i < vc.signals.length; ++i) {
      signaler.removeSignalListener(vc.signals[i], this);
    }
  }
  function evaluatorUseConverter(name, mode, value, args) {
    var _a3;
    const vc = evaluatorGetConverter(this, name);
    if (vc == null) {
      throw createMappedError5(103, name);
    }
    switch (mode) {
      case "toView":
        return "toView" in vc ? vc.toView(value, ...args) : value;
      case "fromView":
        return "fromView" in vc ? (_a3 = vc.fromView) == null ? void 0 : _a3.call(vc, value, ...args) : value;
    }
  }
  return (target) => {
    const proto = target.prototype;
    defineHiddenProp(proto, "get", evaluatorGet);
    defineHiddenProp(proto, "bindBehavior", evaluatorBindBehavior);
    defineHiddenProp(proto, "unbindBehavior", evaluatorUnbindBehavior);
    defineHiddenProp(proto, "bindConverter", evaluatorBindConverter);
    defineHiddenProp(proto, "unbindConverter", evaluatorUnbindConverter);
    defineHiddenProp(proto, "useConverter", evaluatorUseConverter);
  };
})();
var IFlushQueue = createInterface2("IFlushQueue", (x) => x.singleton(FlushQueue));
var FlushQueue = class {
  constructor() {
    this._flushing = false;
    this._items = /* @__PURE__ */ new Set();
  }
  get count() {
    return this._items.size;
  }
  add(flushable) {
    this._items.add(flushable);
    if (this._flushing) {
      return;
    }
    this._flushing = true;
    try {
      this._items.forEach(flushItem);
    } finally {
      this._flushing = false;
    }
  }
  clear() {
    this._items.clear();
    this._flushing = false;
  }
};
var flushItem = function(item, _, items) {
  items.delete(item);
  item.flush();
};
var mixingBindingLimited = /* @__PURE__ */ (() => {
  const withLimitationBindings = /* @__PURE__ */ new WeakSet();
  const debounced = (opts, callOriginal, binding) => {
    let limiterTask;
    let task2;
    let latestValue;
    let isPending = false;
    const taskQueue = opts.queue;
    const callOriginalCallback = () => callOriginal(latestValue);
    const fn = (v) => {
      latestValue = v;
      if (binding.isBound) {
        task2 = limiterTask;
        limiterTask = taskQueue.queueTask(callOriginalCallback, { delay: opts.delay });
        task2 == null ? void 0 : task2.cancel();
      } else {
        callOriginalCallback();
      }
    };
    const dispose2 = fn.dispose = () => {
      task2 == null ? void 0 : task2.cancel();
      limiterTask == null ? void 0 : limiterTask.cancel();
      task2 = limiterTask = void 0;
    };
    fn.flush = () => {
      isPending = (limiterTask == null ? void 0 : limiterTask.status) === tsPending2;
      dispose2();
      if (isPending) {
        callOriginalCallback();
      }
    };
    return fn;
  };
  const throttled = (opts, callOriginal, binding) => {
    let limiterTask;
    let task2;
    let last = 0;
    let elapsed = 0;
    let latestValue;
    let isPending = false;
    const taskQueue = opts.queue;
    const now = () => opts.now();
    const callOriginalCallback = () => callOriginal(latestValue);
    const fn = (v) => {
      latestValue = v;
      if (binding.isBound) {
        elapsed = now() - last;
        task2 = limiterTask;
        if (elapsed > opts.delay) {
          last = now();
          callOriginalCallback();
        } else {
          limiterTask = taskQueue.queueTask(() => {
            last = now();
            callOriginalCallback();
          }, { delay: opts.delay - elapsed });
        }
        task2 == null ? void 0 : task2.cancel();
      } else {
        callOriginalCallback();
      }
    };
    const dispose2 = fn.dispose = () => {
      task2 == null ? void 0 : task2.cancel();
      limiterTask == null ? void 0 : limiterTask.cancel();
      task2 = limiterTask = void 0;
    };
    fn.flush = () => {
      isPending = (limiterTask == null ? void 0 : limiterTask.status) === tsPending2;
      dispose2();
      if (isPending) {
        callOriginalCallback();
      }
    };
    return fn;
  };
  return (target, getMethodName) => {
    defineHiddenProp(target.prototype, "limit", function(opts) {
      if (withLimitationBindings.has(this)) {
        throw createMappedError5(
          9996
          /* ErrorNames.binding_already_has_rate_limited */
        );
      }
      withLimitationBindings.add(this);
      const prop = getMethodName(this, opts);
      const signals = opts.signals;
      const signaler = signals.length > 0 ? this.get(ISignaler) : null;
      const originalFn = this[prop];
      const callOriginal = (...args) => originalFn.call(this, ...args);
      const limitedFn = opts.type === "debounce" ? debounced(opts, callOriginal, this) : throttled(opts, callOriginal, this);
      const signalListener = signaler ? { handleChange: limitedFn.flush } : null;
      this[prop] = limitedFn;
      if (signaler) {
        signals.forEach((s) => addSignalListener(signaler, s, signalListener));
      }
      return {
        dispose: () => {
          if (signaler) {
            signals.forEach((s) => removeSignalListener(signaler, s, signalListener));
          }
          withLimitationBindings.delete(this);
          limitedFn.dispose();
          delete this[prop];
        }
      };
    });
  };
})();
var createPrototypeMixer = /* @__PURE__ */ ((mixed2 = /* @__PURE__ */ new WeakSet()) => {
  return (mixer) => {
    return function() {
      if (!mixed2.has(this)) {
        mixed2.add(this);
        mixer.call(this);
      }
    };
  };
})();
var taskOptions = {
  preempt: true
};
var AttributeBinding = class {
  constructor(controller, locator, observerLocator, taskQueue, ast, target, targetAttribute, targetProperty, mode, strict) {
    this.targetAttribute = targetAttribute;
    this.targetProperty = targetProperty;
    this.mode = mode;
    this.strict = strict;
    this.isBound = false;
    this._scope = void 0;
    this._task = null;
    this._value = void 0;
    this.boundFn = false;
    this.l = locator;
    this.ast = ast;
    this._controller = controller;
    this.target = target;
    this.oL = observerLocator;
    this._taskQueue = taskQueue;
  }
  updateTarget(value) {
    const target = this.target;
    const targetAttribute = this.targetAttribute;
    const targetProperty = this.targetProperty;
    switch (targetAttribute) {
      case "class":
        target.classList.toggle(targetProperty, !!value);
        break;
      case "style": {
        let priority = "";
        let newValue = safeString3(value);
        if (isString(newValue) && newValue.includes("!important")) {
          priority = "important";
          newValue = newValue.replace("!important", "");
        }
        target.style.setProperty(targetProperty, newValue, priority);
        break;
      }
      default: {
        if (value == null) {
          target.removeAttribute(targetAttribute);
        } else {
          target.setAttribute(targetAttribute, safeString3(value));
        }
      }
    }
  }
  handleChange() {
    if (!this.isBound) {
      return;
    }
    let task2;
    this.obs.version++;
    const newValue = astEvaluate(
      this.ast,
      this._scope,
      this,
      // should observe?
      (this.mode & toView) > 0 ? this : null
    );
    this.obs.clear();
    if (newValue !== this._value) {
      this._value = newValue;
      const shouldQueueFlush = this._controller.state !== activating;
      if (shouldQueueFlush) {
        task2 = this._task;
        this._task = this._taskQueue.queueTask(() => {
          this._task = null;
          this.updateTarget(newValue);
        }, taskOptions);
        task2 == null ? void 0 : task2.cancel();
      } else {
        this.updateTarget(newValue);
      }
    }
  }
  // todo: based off collection and handle update accordingly instead off always start
  handleCollectionChange() {
    this.handleChange();
  }
  bind(_scope) {
    if (this.isBound) {
      if (this._scope === _scope) {
        return;
      }
      this.unbind();
    }
    this._scope = _scope;
    astBind(this.ast, _scope, this);
    if (this.mode & (toView | oneTime)) {
      this.updateTarget(this._value = astEvaluate(
        this.ast,
        _scope,
        this,
        /* should connect? */
        (this.mode & toView) > 0 ? this : null
      ));
    }
    this.isBound = true;
  }
  unbind() {
    var _a3;
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    astUnbind(this.ast, this._scope, this);
    this._scope = void 0;
    this._value = void 0;
    (_a3 = this._task) == null ? void 0 : _a3.cancel();
    this._task = null;
    this.obs.clearAll();
  }
};
AttributeBinding.mix = createPrototypeMixer(() => {
  mixinUseScope(AttributeBinding);
  mixingBindingLimited(AttributeBinding, () => "updateTarget");
  connectable(AttributeBinding, null);
  mixinAstEvaluator(AttributeBinding);
});
var queueTaskOptions$1 = {
  preempt: true
};
var InterpolationBinding = class {
  constructor(controller, locator, observerLocator, taskQueue, ast, target, targetProperty, mode, strict) {
    this.ast = ast;
    this.target = target;
    this.targetProperty = targetProperty;
    this.mode = mode;
    this.strict = strict;
    this.isBound = false;
    this._scope = void 0;
    this._task = null;
    this._controller = controller;
    this.oL = observerLocator;
    this._taskQueue = taskQueue;
    this._targetObserver = observerLocator.getAccessor(target, targetProperty);
    const expressions = ast.expressions;
    const partBindings = this.partBindings = Array(expressions.length);
    const ii = expressions.length;
    let i = 0;
    for (; ii > i; ++i) {
      partBindings[i] = new InterpolationPartBinding(expressions[i], target, targetProperty, locator, observerLocator, strict, this);
    }
  }
  /** @internal */
  _handlePartChange() {
    this.updateTarget();
  }
  updateTarget() {
    const partBindings = this.partBindings;
    const staticParts = this.ast.parts;
    const ii = partBindings.length;
    let result = "";
    let i = 0;
    if (ii === 1) {
      result = staticParts[0] + partBindings[0]._value + staticParts[1];
    } else {
      result = staticParts[0];
      for (; ii > i; ++i) {
        result += partBindings[i]._value + staticParts[i + 1];
      }
    }
    const targetObserver = this._targetObserver;
    const shouldQueueFlush = this._controller.state !== activating && (targetObserver.type & atLayout2) > 0;
    let task2;
    if (shouldQueueFlush) {
      task2 = this._task;
      this._task = this._taskQueue.queueTask(() => {
        this._task = null;
        targetObserver.setValue(result, this.target, this.targetProperty);
      }, queueTaskOptions$1);
      task2 == null ? void 0 : task2.cancel();
      task2 = null;
    } else {
      targetObserver.setValue(result, this.target, this.targetProperty);
    }
  }
  bind(_scope) {
    if (this.isBound) {
      if (this._scope === _scope) {
        return;
      }
      this.unbind();
    }
    this._scope = _scope;
    const partBindings = this.partBindings;
    const ii = partBindings.length;
    let i = 0;
    for (; ii > i; ++i) {
      partBindings[i].bind(_scope);
    }
    this.updateTarget();
    this.isBound = true;
  }
  unbind() {
    var _a3;
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    this._scope = void 0;
    const partBindings = this.partBindings;
    const ii = partBindings.length;
    let i = 0;
    for (; ii > i; ++i) {
      partBindings[i].unbind();
    }
    (_a3 = this._task) == null ? void 0 : _a3.cancel();
    this._task = null;
  }
  /**
   * Start using a given observer to update the target
   */
  useAccessor(accessor) {
    this._targetObserver = accessor;
  }
};
var InterpolationPartBinding = class {
  constructor(ast, target, targetProperty, locator, observerLocator, strict, owner) {
    this.ast = ast;
    this.target = target;
    this.targetProperty = targetProperty;
    this.strict = strict;
    this.owner = owner;
    this.mode = toView;
    this.task = null;
    this.isBound = false;
    this._value = "";
    this.boundFn = false;
    this.l = locator;
    this.oL = observerLocator;
  }
  updateTarget() {
    this.owner._handlePartChange();
  }
  handleChange() {
    if (!this.isBound) {
      return;
    }
    this.obs.version++;
    const newValue = astEvaluate(
      this.ast,
      this._scope,
      this,
      // should observe?
      (this.mode & toView) > 0 ? this : null
    );
    this.obs.clear();
    if (newValue != this._value) {
      this._value = newValue;
      if (isArray(newValue)) {
        this.observeCollection(newValue);
      }
      this.updateTarget();
    }
  }
  handleCollectionChange() {
    this.updateTarget();
  }
  bind(_scope) {
    if (this.isBound) {
      if (this._scope === _scope) {
        return;
      }
      this.unbind();
    }
    this._scope = _scope;
    astBind(this.ast, _scope, this);
    this._value = astEvaluate(this.ast, this._scope, this, (this.mode & toView) > 0 ? this : null);
    if (isArray(this._value)) {
      this.observeCollection(this._value);
    }
    this.isBound = true;
  }
  unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    astUnbind(this.ast, this._scope, this);
    this._scope = void 0;
    this.obs.clearAll();
  }
};
InterpolationPartBinding.mix = createPrototypeMixer(() => {
  mixinUseScope(InterpolationPartBinding);
  mixingBindingLimited(InterpolationPartBinding, () => "updateTarget");
  connectable(InterpolationPartBinding, null);
  mixinAstEvaluator(InterpolationPartBinding);
});
var queueTaskOptions = {
  preempt: true
};
var ContentBinding = class {
  constructor(controller, locator, observerLocator, taskQueue, p, ast, target, strict) {
    this.p = p;
    this.ast = ast;
    this.target = target;
    this.strict = strict;
    this.isBound = false;
    this.mode = toView;
    this._task = null;
    this._value = "";
    this._needsRemoveNode = false;
    this.boundFn = false;
    this.l = locator;
    this._controller = controller;
    this.oL = observerLocator;
    this._taskQueue = taskQueue;
  }
  updateTarget(value) {
    var _a3, _b3;
    const target = this.target;
    const oldValue = this._value;
    this._value = value;
    if (this._needsRemoveNode) {
      (_a3 = oldValue.parentNode) == null ? void 0 : _a3.removeChild(oldValue);
      this._needsRemoveNode = false;
    }
    if (value instanceof this.p.Node) {
      (_b3 = target.parentNode) == null ? void 0 : _b3.insertBefore(value, target);
      value = "";
      this._needsRemoveNode = true;
    }
    target.textContent = safeString3(value ?? "");
  }
  handleChange() {
    var _a3;
    if (!this.isBound) {
      return;
    }
    this.obs.version++;
    const newValue = astEvaluate(
      this.ast,
      this._scope,
      this,
      // should observe?
      (this.mode & toView) > 0 ? this : null
    );
    this.obs.clear();
    if (newValue === this._value) {
      (_a3 = this._task) == null ? void 0 : _a3.cancel();
      this._task = null;
      return;
    }
    const shouldQueueFlush = this._controller.state !== activating;
    if (shouldQueueFlush) {
      this._queueUpdate(newValue);
    } else {
      this.updateTarget(newValue);
    }
  }
  handleCollectionChange() {
    if (!this.isBound) {
      return;
    }
    this.obs.version++;
    const v = this._value = astEvaluate(this.ast, this._scope, this, (this.mode & toView) > 0 ? this : null);
    this.obs.clear();
    if (isArray(v)) {
      this.observeCollection(v);
    }
    const shouldQueueFlush = this._controller.state !== activating;
    if (shouldQueueFlush) {
      this._queueUpdate(v);
    } else {
      this.updateTarget(v);
    }
  }
  bind(_scope) {
    if (this.isBound) {
      if (this._scope === _scope) {
        return;
      }
      this.unbind();
    }
    this._scope = _scope;
    astBind(this.ast, _scope, this);
    const v = this._value = astEvaluate(this.ast, this._scope, this, (this.mode & toView) > 0 ? this : null);
    if (isArray(v)) {
      this.observeCollection(v);
    }
    this.updateTarget(v);
    this.isBound = true;
  }
  unbind() {
    var _a3, _b3;
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    astUnbind(this.ast, this._scope, this);
    if (this._needsRemoveNode) {
      (_a3 = this._value.parentNode) == null ? void 0 : _a3.removeChild(this._value);
    }
    this._scope = void 0;
    this.obs.clearAll();
    (_b3 = this._task) == null ? void 0 : _b3.cancel();
    this._task = null;
  }
  // queue a force update
  /** @internal */
  _queueUpdate(newValue) {
    const task2 = this._task;
    this._task = this._taskQueue.queueTask(() => {
      this._task = null;
      this.updateTarget(newValue);
    }, queueTaskOptions);
    task2 == null ? void 0 : task2.cancel();
  }
};
ContentBinding.mix = createPrototypeMixer(() => {
  mixinUseScope(ContentBinding);
  mixingBindingLimited(ContentBinding, () => "updateTarget");
  connectable(ContentBinding, null);
  mixinAstEvaluator(ContentBinding);
});
var LetBinding = class {
  constructor(locator, observerLocator, ast, targetProperty, toBindingContext, strict) {
    this.ast = ast;
    this.targetProperty = targetProperty;
    this.isBound = false;
    this._scope = void 0;
    this.target = null;
    this.boundFn = false;
    this.l = locator;
    this.oL = observerLocator;
    this.strict = strict;
    this._toBindingContext = toBindingContext;
  }
  updateTarget() {
    this.target[this.targetProperty] = this._value;
  }
  handleChange() {
    if (!this.isBound) {
      return;
    }
    this.obs.version++;
    this._value = astEvaluate(this.ast, this._scope, this, this);
    this.obs.clear();
    this.updateTarget();
  }
  handleCollectionChange() {
    this.handleChange();
  }
  bind(_scope) {
    if (this.isBound) {
      if (this._scope === _scope) {
        return;
      }
      this.unbind();
    }
    this._scope = _scope;
    this.target = this._toBindingContext ? _scope.bindingContext : _scope.overrideContext;
    astBind(this.ast, _scope, this);
    this._value = astEvaluate(this.ast, this._scope, this, this);
    this.updateTarget();
    this.isBound = true;
  }
  unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    astUnbind(this.ast, this._scope, this);
    this._scope = void 0;
    this.obs.clearAll();
  }
};
LetBinding.mix = createPrototypeMixer(() => {
  mixinUseScope(LetBinding);
  mixingBindingLimited(LetBinding, () => "updateTarget");
  connectable(LetBinding, null);
  mixinAstEvaluator(LetBinding);
});
var PropertyBinding = class {
  constructor(controller, locator, observerLocator, taskQueue, ast, target, targetProperty, mode, strict) {
    this.ast = ast;
    this.target = target;
    this.targetProperty = targetProperty;
    this.mode = mode;
    this.strict = strict;
    this.isBound = false;
    this._scope = void 0;
    this._targetObserver = void 0;
    this._task = null;
    this._targetSubscriber = null;
    this.boundFn = false;
    this.l = locator;
    this._controller = controller;
    this._taskQueue = taskQueue;
    this.oL = observerLocator;
  }
  updateTarget(value) {
    this._targetObserver.setValue(value, this.target, this.targetProperty);
  }
  updateSource(value) {
    astAssign(this.ast, this._scope, this, value);
  }
  handleChange() {
    if (!this.isBound) {
      return;
    }
    this.obs.version++;
    const newValue = astEvaluate(
      this.ast,
      this._scope,
      this,
      // should observe?
      (this.mode & toView) > 0 ? this : null
    );
    this.obs.clear();
    const shouldQueueFlush = this._controller.state !== activating && (this._targetObserver.type & atLayout2) > 0;
    if (shouldQueueFlush) {
      task = this._task;
      this._task = this._taskQueue.queueTask(() => {
        this.updateTarget(newValue);
        this._task = null;
      }, updateTaskOpts);
      task == null ? void 0 : task.cancel();
      task = null;
    } else {
      this.updateTarget(newValue);
    }
  }
  // todo: based off collection and handle update accordingly instead off always start
  handleCollectionChange() {
    this.handleChange();
  }
  bind(scope) {
    if (this.isBound) {
      if (this._scope === scope) {
        return;
      }
      this.unbind();
    }
    this._scope = scope;
    astBind(this.ast, scope, this);
    const observerLocator = this.oL;
    const $mode = this.mode;
    let targetObserver = this._targetObserver;
    if (!targetObserver) {
      if ($mode & fromView) {
        targetObserver = observerLocator.getObserver(this.target, this.targetProperty);
      } else {
        targetObserver = observerLocator.getAccessor(this.target, this.targetProperty);
      }
      this._targetObserver = targetObserver;
    }
    const shouldConnect = ($mode & toView) > 0;
    if ($mode & (toView | oneTime)) {
      this.updateTarget(astEvaluate(this.ast, this._scope, this, shouldConnect ? this : null));
    }
    if ($mode & fromView) {
      targetObserver.subscribe(this._targetSubscriber ?? (this._targetSubscriber = new BindingTargetSubscriber(this, this.l.get(IFlushQueue))));
      if (!shouldConnect) {
        this.updateSource(targetObserver.getValue(this.target, this.targetProperty));
      }
    }
    this.isBound = true;
  }
  unbind() {
    var _a3;
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    astUnbind(this.ast, this._scope, this);
    this._scope = void 0;
    if (this._targetSubscriber) {
      this._targetObserver.unsubscribe(this._targetSubscriber);
      this._targetSubscriber = null;
    }
    (_a3 = this._task) == null ? void 0 : _a3.cancel();
    this._task = null;
    this.obs.clearAll();
  }
  /**
   * Start using a given observer to listen to changes on the target of this binding
   */
  useTargetObserver(observer) {
    var _a3;
    (_a3 = this._targetObserver) == null ? void 0 : _a3.unsubscribe(this);
    (this._targetObserver = observer).subscribe(this);
  }
  /**
   * Provide a subscriber for target change observation.
   *
   * Binding behaviors can use this to setup custom observation handling during bind lifecycle
   * to alter the update source behavior during bind phase of this binding.
   */
  useTargetSubscriber(subscriber) {
    if (this._targetSubscriber != null) {
      throw createMappedError5(
        9995
        /* ErrorNames.binding_already_has_target_subscriber */
      );
    }
    this._targetSubscriber = subscriber;
  }
};
PropertyBinding.mix = createPrototypeMixer(() => {
  mixinUseScope(PropertyBinding);
  mixingBindingLimited(PropertyBinding, (propBinding) => propBinding.mode & fromView ? "updateSource" : "updateTarget");
  connectable(PropertyBinding, null);
  mixinAstEvaluator(PropertyBinding);
});
var task = null;
var updateTaskOpts = {
  preempt: true
};
var RefBinding = class {
  constructor(locator, ast, target, strict) {
    this.ast = ast;
    this.target = target;
    this.strict = strict;
    this.isBound = false;
    this._scope = void 0;
    this.l = locator;
  }
  bind(_scope) {
    if (this.isBound) {
      if (this._scope === _scope) {
        return;
      }
      this.unbind();
    }
    this._scope = _scope;
    astBind(this.ast, _scope, this);
    astAssign(this.ast, this._scope, this, this.target);
    this.isBound = true;
  }
  unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    if (astEvaluate(this.ast, this._scope, this, null) === this.target) {
      astAssign(this.ast, this._scope, this, null);
    }
    astUnbind(this.ast, this._scope, this);
    this._scope = void 0;
  }
};
RefBinding.mix = createPrototypeMixer(() => {
  mixinAstEvaluator(RefBinding);
});
var ListenerBindingOptions = class {
  constructor(prevent, capture2 = false, onError) {
    this.prevent = prevent;
    this.capture = capture2;
    this.onError = onError;
  }
};
var ListenerBinding = class {
  constructor(locator, ast, target, targetEvent, options, modifiedEventHandler, strict) {
    this.ast = ast;
    this.target = target;
    this.targetEvent = targetEvent;
    this.strict = strict;
    this.isBound = false;
    this.self = false;
    this.boundFn = true;
    this._modifiedEventHandler = null;
    this.l = locator;
    this._options = options;
    this._modifiedEventHandler = modifiedEventHandler;
  }
  callSource(event) {
    const overrideContext = this._scope.overrideContext;
    overrideContext.$event = event;
    let result = astEvaluate(this.ast, this._scope, this, null);
    delete overrideContext.$event;
    if (isFunction(result)) {
      result = result(event);
    }
    if (result !== true && this._options.prevent) {
      event.preventDefault();
    }
  }
  handleEvent(event) {
    var _a3;
    if (this.self) {
      if (this.target !== event.composedPath()[0]) {
        return;
      }
    }
    if (((_a3 = this._modifiedEventHandler) == null ? void 0 : _a3.call(this, event)) !== false) {
      try {
        this.callSource(event);
      } catch (ex) {
        this._options.onError(event, ex);
      }
    }
  }
  bind(scope) {
    if (this.isBound) {
      if (this._scope === scope) {
        return;
      }
      this.unbind();
    }
    this._scope = scope;
    astBind(this.ast, scope, this);
    this.target.addEventListener(this.targetEvent, this, this._options);
    this.isBound = true;
  }
  unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    astUnbind(this.ast, this._scope, this);
    this._scope = void 0;
    this.target.removeEventListener(this.targetEvent, this, this._options);
  }
};
ListenerBinding.mix = createPrototypeMixer(function() {
  mixinUseScope(ListenerBinding);
  mixingBindingLimited(ListenerBinding, () => "callSource");
  mixinAstEvaluator(ListenerBinding);
});
var IModifiedEventHandlerCreator = createInterface2("IEventModifier");
var IKeyMapping = createInterface2("IKeyMapping", (x) => x.instance({
  meta: objectFreeze2(["ctrl", "alt", "shift", "meta"]),
  keys: {
    escape: "Escape",
    enter: "Enter",
    space: "Space",
    tab: "tab",
    // by default, maps the key a-z and A-Z to their respective keycodes
    ...Array.from({ length: 25 }).reduce((acc, _, idx) => {
      let char = String.fromCharCode(idx + 65);
      acc[idx + 65] = char;
      char = String.fromCharCode(idx + 97);
      acc[idx + 97] = acc[char] = char;
      return acc;
    }, {})
  }
}));
var ModifiedMouseEventHandler = class _ModifiedMouseEventHandler {
  constructor() {
    this.type = ["click", "mousedown", "mousemove", "mouseup", "dblclick", "contextmenu"];
    this._mapping = resolve(IKeyMapping);
    this._mouseButtons = ["left", "middle", "right"];
  }
  static register(c) {
    c.register(singletonRegistration3(IModifiedEventHandlerCreator, _ModifiedMouseEventHandler));
  }
  getHandler(modifier) {
    const modifiers = modifier.split(/[:+.]/);
    return (event) => {
      let prevent = false;
      let stop = false;
      let m;
      for (m of modifiers) {
        switch (m) {
          case "prevent":
            prevent = true;
            continue;
          case "stop":
            stop = true;
            continue;
          case "left":
          case "middle":
          case "right":
            if (event.button !== this._mouseButtons.indexOf(m))
              return false;
            continue;
        }
        if (this._mapping.meta.includes(m) && event[`${m}Key`] !== true) {
          return false;
        }
        {
          console.warn(`Modifier '${m}' is not supported for mouse events.`);
        }
      }
      if (prevent)
        event.preventDefault();
      if (stop)
        event.stopPropagation();
      return true;
    };
  }
};
var ModifiedKeyboardEventHandler = class _ModifiedKeyboardEventHandler {
  constructor() {
    this._mapping = resolve(IKeyMapping);
    this.type = ["keydown", "keyup"];
  }
  static register(c) {
    c.register(singletonRegistration3(IModifiedEventHandlerCreator, _ModifiedKeyboardEventHandler));
  }
  getHandler(modifier) {
    const modifiers = modifier.split(/[:+.]/);
    return (event) => {
      let prevent = false;
      let stop = false;
      let mod;
      for (mod of modifiers) {
        switch (mod) {
          case "prevent":
            prevent = true;
            continue;
          case "stop":
            stop = true;
            continue;
        }
        if (this._mapping.meta.includes(mod)) {
          if (event[`${mod}Key`] !== true) {
            return false;
          }
          continue;
        }
        const mappedKey = this._mapping.keys[mod];
        if (mappedKey !== event.key) {
          return false;
        }
        {
          console.warn(`Modifier '${mod}' is not supported for keyboard event with key "${event.key}".`);
        }
      }
      if (prevent)
        event.preventDefault();
      if (stop)
        event.stopPropagation();
      return true;
    };
  }
};
var ModifiedEventHandler = class _ModifiedEventHandler {
  constructor() {
    this.type = ["$ALL"];
  }
  static register(c) {
    c.register(singletonRegistration3(IModifiedEventHandlerCreator, _ModifiedEventHandler));
  }
  getHandler(modifier) {
    const modifiers = modifier.split(/[:+.]/);
    return (event) => {
      let prevent = false;
      let stop = false;
      let mod;
      for (mod of modifiers) {
        switch (mod) {
          case "prevent":
            prevent = true;
            continue;
          case "stop":
            stop = true;
            continue;
        }
        {
          console.warn(`Modifier '${mod}' is not supported for event "${event.type}".`);
        }
      }
      if (prevent)
        event.preventDefault();
      if (stop)
        event.stopPropagation();
      return true;
    };
  }
};
var IEventModifier = createInterface2("IEventModifierHandler", (x) => x.instance({
  getHandler: () => {
    {
      console.warn("No event modifier handler registered");
    }
    return null;
  }
}));
var EventModifier = class _EventModifier {
  constructor() {
    this._reg = resolve(all(IModifiedEventHandlerCreator)).reduce((acc, cur) => {
      const types = isArray(cur.type) ? cur.type : [cur.type];
      types.forEach((t) => acc[t] = cur);
      return acc;
    }, {});
  }
  static register(c) {
    c.register(singletonRegistration3(IEventModifier, _EventModifier));
  }
  getHandler(type, modifier) {
    var _a3;
    return isString(modifier) ? ((_a3 = this._reg[type] ?? this._reg.$ALL) == null ? void 0 : _a3.getHandler(modifier)) ?? null : null;
  }
};
var EventModifierRegistration = {
  register(c) {
    c.register(EventModifier, ModifiedMouseEventHandler, ModifiedKeyboardEventHandler, ModifiedEventHandler);
  }
};
var IViewFactory = createInterface2("IViewFactory");
var ViewFactory = class _ViewFactory {
  constructor(container, def2) {
    this.isCaching = false;
    this._cache = null;
    this._cacheSize = -1;
    this.name = def2.name;
    this.container = container;
    this.def = def2;
  }
  setCacheSize(size, doNotOverrideIfAlreadySet) {
    if (size) {
      if (size === "*") {
        size = _ViewFactory.maxCacheSize;
      } else if (isString(size)) {
        size = parseInt(size, 10);
      }
      if (this._cacheSize === -1 || !doNotOverrideIfAlreadySet) {
        this._cacheSize = size;
      }
    }
    if (this._cacheSize > 0) {
      this._cache = [];
    } else {
      this._cache = null;
    }
    this.isCaching = this._cacheSize > 0;
  }
  canReturnToCache(_controller) {
    return this._cache != null && this._cache.length < this._cacheSize;
  }
  tryReturnToCache(controller) {
    if (this.canReturnToCache(controller)) {
      this._cache.push(controller);
      return true;
    }
    return false;
  }
  create(parentController) {
    const cache = this._cache;
    let controller;
    if (cache != null && cache.length > 0) {
      controller = cache.pop();
      return controller;
    }
    controller = Controller.$view(this, parentController);
    return controller;
  }
};
ViewFactory.maxCacheSize = 65535;
var createLocation = /* @__PURE__ */ (() => {
  const createComment = (p, text) => p.document.createComment(text);
  return (p) => {
    const locationEnd = createComment(p, "au-end");
    locationEnd.$start = createComment(p, "au-start");
    return locationEnd;
  };
})();
var insertManyBefore2 = (parent, target, newChildNodes) => {
  if (parent === null) {
    return;
  }
  const ii = newChildNodes.length;
  let i = 0;
  while (ii > i) {
    parent.insertBefore(newChildNodes[i], target);
    ++i;
  }
};
var createMutationObserver = (node, callback) => new node.ownerDocument.defaultView.MutationObserver(callback);
var isElement2 = (node) => node.nodeType === 1;
var defaultSlotName2 = "default";
var auslotAttr2 = "au-slot";
var IAuSlotsInfo = createInterface2("IAuSlotsInfo");
var AuSlotsInfo = class {
  constructor(projectedSlots) {
    this.projectedSlots = projectedSlots;
  }
};
var IAuSlotWatcher = createInterface2("IAuSlotWatcher");
var AuSlotWatcherBinding = class {
  constructor(obj, callback, slotName, query) {
    this._slots = /* @__PURE__ */ new Set();
    this._nodes = emptyArray;
    this.isBound = false;
    this._callback = (this._obj = obj)[callback];
    this.slotName = slotName;
    this._query = query;
  }
  bind() {
    this.isBound = true;
  }
  unbind() {
    this.isBound = false;
  }
  getValue() {
    return this._nodes;
  }
  watch(slot) {
    if (!this._slots.has(slot)) {
      this._slots.add(slot);
      slot.subscribe(this);
    }
  }
  unwatch(slot) {
    if (this._slots.delete(slot)) {
      slot.unsubscribe(this);
    }
  }
  handleSlotChange(slot, nodes) {
    var _a3;
    if (!this.isBound) {
      return;
    }
    const oldNodes = this._nodes;
    const $nodes = [];
    const query = this._query;
    let $slot;
    let node;
    for ($slot of this._slots) {
      for (node of $slot === slot ? nodes : $slot.nodes) {
        if (query === "$all" || isElement2(node) && (query === "*" || node.matches(query))) {
          $nodes[$nodes.length] = node;
        }
      }
    }
    if ($nodes.length !== oldNodes.length || $nodes.some((n, i) => n !== oldNodes[i])) {
      this._nodes = $nodes;
      (_a3 = this._callback) == null ? void 0 : _a3.call(this._obj, $nodes);
      this.subs.notify($nodes, oldNodes);
    }
  }
  /* istanbul ignore next */
  get() {
    throw createMappedError5(99, "get");
  }
};
var SlottedLifecycleHooks = class {
  constructor(_def) {
    this._def = _def;
  }
  register(c) {
    instanceRegistration2(ILifecycleHooks, this).register(c);
  }
  hydrating(vm, controller) {
    const $def = this._def;
    const watcher = new AuSlotWatcherBinding(vm, $def.callback ?? `${safeString3($def.name)}Changed`, $def.slotName ?? "default", $def.query ?? "*");
    def(vm, $def.name, {
      enumerable: true,
      configurable: true,
      get: objectAssign2(() => watcher.getValue(), { getObserver: () => watcher }),
      set: () => {
      }
    });
    instanceRegistration2(IAuSlotWatcher, watcher).register(controller.container);
    controller.addBinding(watcher);
  }
};
function slotted(queryOrDef, slotName) {
  if (!mixed) {
    mixed = true;
    subscriberCollection(AuSlotWatcherBinding, null);
    lifecycleHooks()(SlottedLifecycleHooks, null);
  }
  const dependenciesKey = getAnnotationKeyFor2("dependencies");
  function decorator(_, context) {
    var _a3;
    if (context.kind !== "field")
      throw createMappedError5(
        9990
        /* ErrorNames.slotted_decorator_invalid_usage */
      );
    const config = typeof queryOrDef === "object" ? queryOrDef : {
      query: queryOrDef,
      slotName,
      name: ""
    };
    config.name = context.name;
    const dependencies = (_a3 = context.metadata)[dependenciesKey] ?? (_a3[dependenciesKey] = []);
    dependencies.push(new SlottedLifecycleHooks(config));
  }
  return decorator;
}
var mixed = false;
var SpreadBinding = class _SpreadBinding {
  /**
   * Create a list of SpreadBinding by searching for captured attributes in HydrationContexts
   * from a container
   */
  static create(hydrationContext, target, targetDef, rendering, compiler, platform, exprParser, observerLocator) {
    const bindings = [];
    const renderers = rendering.renderers;
    const getHydrationContext = (ancestor) => {
      let currentLevel = ancestor;
      let currentContext = hydrationContext;
      while (currentContext != null && currentLevel > 0) {
        currentContext = currentContext.parent;
        --currentLevel;
      }
      if (currentContext == null) {
        throw createMappedError5(
          9999
          /* ErrorNames.no_spread_scope_context_found */
        );
      }
      return currentContext;
    };
    const renderSpreadInstruction = (ancestor) => {
      var _a3;
      const context = getHydrationContext(ancestor);
      const spreadBinding = new _SpreadBinding(context);
      const instructions = compiler.compileSpread(context.controller.definition, ((_a3 = context.instruction) == null ? void 0 : _a3.captures) ?? emptyArray, context.controller.container, target, targetDef);
      let inst;
      for (inst of instructions) {
        switch (inst.type) {
          case InstructionType.spreadTransferedBinding:
            renderSpreadInstruction(ancestor + 1);
            break;
          case InstructionType.spreadElementProp:
            renderers[inst.instruction.type].render(spreadBinding, findElementControllerFor(target), inst.instruction, platform, exprParser, observerLocator);
            break;
          default:
            renderers[inst.type].render(spreadBinding, target, inst, platform, exprParser, observerLocator);
        }
      }
      bindings.push(spreadBinding);
    };
    renderSpreadInstruction(0);
    return bindings;
  }
  get container() {
    return this.locator;
  }
  get definition() {
    return this.$controller.definition;
  }
  get state() {
    return this.$controller.state;
  }
  constructor(hydrationContext) {
    this.isBound = false;
    this._innerBindings = [];
    this.locator = (this.$controller = (this._hydrationContext = hydrationContext).controller).container;
  }
  get(key) {
    return this.locator.get(key);
  }
  bind(_scope) {
    if (this.isBound) {
      return;
    }
    this.isBound = true;
    const innerScope = this.scope = this._hydrationContext.controller.scope.parent ?? void 0;
    if (innerScope == null) {
      throw createMappedError5(
        9999
        /* ErrorNames.no_spread_scope_context_found */
      );
    }
    this._innerBindings.forEach((b) => b.bind(innerScope));
  }
  unbind() {
    this._innerBindings.forEach((b) => b.unbind());
    this.isBound = false;
  }
  addBinding(binding) {
    this._innerBindings.push(binding);
  }
  addChild(controller) {
    if (controller.vmKind !== vmkCa) {
      throw createMappedError5(
        9998
        /* ErrorNames.no_spread_template_controller */
      );
    }
    this.$controller.addChild(controller);
  }
};
var SpreadValueBinding = class _SpreadValueBinding {
  constructor(controller, target, targetKeys, ast, ol, l, taskQueue, strict) {
    this.target = target;
    this.targetKeys = targetKeys;
    this.ast = ast;
    this.strict = strict;
    this.isBound = false;
    this._scope = void 0;
    this.boundFn = false;
    this._bindingCache = {};
    this._scopeCache = /* @__PURE__ */ new WeakMap();
    this._controller = controller;
    this.oL = ol;
    this.l = l;
    this._taskQueue = taskQueue;
  }
  updateTarget() {
    this.obs.version++;
    const newValue = astEvaluate(this.ast, this._scope, this, this);
    this.obs.clear();
    this._createBindings(newValue, true);
  }
  handleChange() {
    if (!this.isBound) {
      return;
    }
    this.updateTarget();
  }
  handleCollectionChange() {
    if (!this.isBound) {
      return;
    }
    this.updateTarget();
  }
  bind(scope) {
    if (this.isBound) {
      if (scope === this._scope) {
        return;
      }
      this.unbind();
    }
    this.isBound = true;
    this._scope = scope;
    astBind(this.ast, scope, this);
    const value = astEvaluate(this.ast, scope, this, this);
    this._createBindings(value, false);
  }
  unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    astUnbind(this.ast, this._scope, this);
    this._scope = void 0;
    let key;
    for (key in this._bindingCache) {
      this._bindingCache[key].unbind();
    }
  }
  /**
   * @internal
   */
  _createBindings(value, unbind) {
    var _a3, _b3;
    let key;
    if (!isObject(value)) {
      {
        console.warn(`[DEV:aurelia] $bindable spread is given a non object for properties: "${this.targetKeys.join(", ")}" of ${this.target.constructor.name}`);
      }
      for (key in this._bindingCache) {
        (_a3 = this._bindingCache[key]) == null ? void 0 : _a3.unbind();
      }
      return;
    }
    let binding;
    let scope = this._scopeCache.get(value);
    if (scope == null) {
      this._scopeCache.set(value, scope = Scope.fromParent(this._scope, value));
    }
    for (key of this.targetKeys) {
      binding = this._bindingCache[key];
      if (key in value) {
        if (binding == null) {
          binding = this._bindingCache[key] = new PropertyBinding(this._controller, this.l, this.oL, this._taskQueue, (_b3 = _SpreadValueBinding._astCache)[key] ?? (_b3[key] = new AccessScopeExpression(key, 0)), this.target, key, BindingMode.toView, this.strict);
        }
        binding.bind(scope);
      } else if (unbind) {
        binding == null ? void 0 : binding.unbind();
      }
    }
  }
};
SpreadValueBinding.mix = createPrototypeMixer(() => {
  mixinUseScope(SpreadValueBinding);
  mixingBindingLimited(SpreadValueBinding, () => "updateTarget");
  connectable(SpreadValueBinding, null);
  mixinAstEvaluator(SpreadValueBinding);
});
SpreadValueBinding._astCache = {};
var addListener = (target, name, handler, options) => {
  target.addEventListener(name, handler, options);
};
var removeListener = (target, name, handler, options) => {
  target.removeEventListener(name, handler, options);
};
var mixinNodeObserverUseConfig = (target) => {
  let event;
  const prototype = target.prototype;
  defineHiddenProp(prototype, "subscribe", function(subscriber) {
    var _a3;
    if (this.subs.add(subscriber) && this.subs.count === 1) {
      for (event of this._config.events) {
        addListener(this._el, event, this);
      }
      this._listened = true;
      (_a3 = this._start) == null ? void 0 : _a3.call(this);
    }
  });
  defineHiddenProp(prototype, "unsubscribe", function(subscriber) {
    var _a3;
    if (this.subs.remove(subscriber) && this.subs.count === 0) {
      for (event of this._config.events) {
        removeListener(this._el, event, this);
      }
      this._listened = false;
      (_a3 = this._stop) == null ? void 0 : _a3.call(this);
    }
  });
  defineHiddenProp(prototype, "useConfig", function(config) {
    this._config = config;
    if (this._listened) {
      for (event of this._config.events) {
        removeListener(this._el, event, this);
      }
      for (event of this._config.events) {
        addListener(this._el, event, this);
      }
    }
  });
};
var mixinNoopSubscribable = (target) => {
  defineHiddenProp(target.prototype, "subscribe", noop);
  defineHiddenProp(target.prototype, "unsubscribe", noop);
};
var ClassAttributeAccessor = class {
  get doNotCache() {
    return true;
  }
  constructor(obj, mapping = {}) {
    this.obj = obj;
    this.mapping = mapping;
    this.type = atNode2 | atLayout2;
    this._value = "";
    this._nameIndex = {};
    this._version = 0;
  }
  getValue() {
    return this._value;
  }
  setValue(newValue) {
    if (newValue !== this._value) {
      this._value = newValue;
      this._flushChanges();
    }
  }
  /** @internal */
  _flushChanges() {
    const nameIndex = this._nameIndex;
    const version = ++this._version;
    const classList = this.obj.classList;
    const classesToAdd = getClassesToAdd(this._value);
    const ii = classesToAdd.length;
    let i = 0;
    let name;
    if (ii > 0) {
      for (; i < ii; i++) {
        name = classesToAdd[i];
        name = this.mapping[name] || name;
        if (name.length === 0) {
          continue;
        }
        nameIndex[name] = this._version;
        classList.add(name);
      }
    }
    if (version === 1) {
      return;
    }
    for (name in nameIndex) {
      name = this.mapping[name] || name;
      if (nameIndex[name] === version) {
        continue;
      }
      classList.remove(name);
    }
  }
};
(() => {
  mixinNoopSubscribable(ClassAttributeAccessor);
})();
function getClassesToAdd(object) {
  if (isString(object)) {
    return splitClassString(object);
  }
  if (typeof object !== "object") {
    return emptyArray;
  }
  if (isArray(object)) {
    const len = object.length;
    if (len > 0) {
      const classes2 = [];
      let i = 0;
      for (; len > i; ++i) {
        classes2.push(...getClassesToAdd(object[i]));
      }
      return classes2;
    } else {
      return emptyArray;
    }
  }
  const classes = [];
  let property;
  for (property in object) {
    if (Boolean(object[property])) {
      if (property.includes(" ")) {
        classes.push(...splitClassString(property));
      } else {
        classes.push(property);
      }
    }
  }
  return classes;
}
function splitClassString(classString) {
  const matches = classString.match(/\S+/g);
  if (matches === null) {
    return emptyArray;
  }
  return matches;
}
var fromHydrationContext = (key) => ({
  $isResolver: true,
  resolve(_, requestor) {
    return requestor.get(IHydrationContext).controller.container.get(own(key));
  }
});
var IRenderer = createInterface2("IRenderer");
function renderer(target, context) {
  var _a3;
  const metadata = (context == null ? void 0 : context.metadata) ?? (target[_a3 = Symbol.metadata] ?? (target[_a3] = /* @__PURE__ */ Object.create(null)));
  metadata[registrableMetadataKey] = {
    register(container) {
      singletonRegistration3(IRenderer, target).register(container);
    }
  };
  return target;
}
function ensureExpression(parser, srcOrExpr, expressionType) {
  if (isString(srcOrExpr)) {
    return parser.parse(srcOrExpr, expressionType);
  }
  return srcOrExpr;
}
function getTarget(potentialTarget) {
  if (potentialTarget.viewModel != null) {
    return potentialTarget.viewModel;
  }
  return potentialTarget;
}
function getRefTarget(refHost, refTargetName) {
  if (refTargetName === "element") {
    return refHost;
  }
  switch (refTargetName) {
    case "controller":
      return findElementControllerFor(refHost);
    case "view":
      throw createMappedError5(
        750
        /* ErrorNames.not_supported_view_ref_api */
      );
    case "component":
      return findElementControllerFor(refHost).viewModel;
    default: {
      const caController = findAttributeControllerFor(refHost, refTargetName);
      if (caController !== void 0) {
        return caController.viewModel;
      }
      const ceController = findElementControllerFor(refHost, { name: refTargetName });
      if (ceController === void 0) {
        throw createMappedError5(751, refTargetName);
      }
      return ceController.viewModel;
    }
  }
}
var SetPropertyRenderer = renderer(class SetPropertyRenderer2 {
  constructor() {
    this.target = InstructionType.setProperty;
  }
  render(renderingCtrl, target, instruction) {
    var _a3;
    const obj = getTarget(target);
    if (((_a3 = obj.$observers) == null ? void 0 : _a3[instruction.to]) !== void 0) {
      obj.$observers[instruction.to].setValue(instruction.value);
    } else {
      obj[instruction.to] = instruction.value;
    }
  }
}, null);
var CustomElementRenderer = renderer(class CustomElementRenderer2 {
  constructor() {
    this._rendering = resolve(IRendering);
    this.target = InstructionType.hydrateElement;
  }
  render(renderingCtrl, target, instruction, platform, exprParser, observerLocator) {
    let def2;
    let component;
    let childCtrl;
    const res = instruction.res;
    const projections = instruction.projections;
    const ctxContainer = renderingCtrl.container;
    switch (typeof res) {
      case "string":
        def2 = CustomElement.find(ctxContainer, res);
        if (def2 == null) {
          throw createMappedError5(752, instruction, renderingCtrl);
        }
        break;
      // constructor based instruction
      // will be enabled later if needed.
      // As both AOT + runtime based can use definition for perf
      // -----------------
      // case 'function':
      //   def = CustomElement.getDefinition(res);
      //   break;
      default:
        def2 = res;
    }
    const containerless2 = instruction.containerless || def2.containerless;
    const location = containerless2 ? convertToRenderLocation(target) : null;
    const container = createElementContainer(
      /* platform         */
      platform,
      /* parentController */
      renderingCtrl,
      /* host             */
      target,
      /* instruction      */
      instruction,
      /* location         */
      location,
      /* SlotsInfo      */
      projections == null ? void 0 : new AuSlotsInfo(objectKeys(projections))
    );
    component = container.invoke(def2.Type);
    childCtrl = Controller.$el(
      /* own container       */
      container,
      /* viewModel           */
      component,
      /* host                */
      target,
      /* instruction         */
      instruction,
      /* definition          */
      def2,
      /* location            */
      location
    );
    setRef(target, def2.key, childCtrl);
    const renderers = this._rendering.renderers;
    const props = instruction.props;
    const ii = props.length;
    let i = 0;
    let propInst;
    while (ii > i) {
      propInst = props[i];
      renderers[propInst.type].render(renderingCtrl, childCtrl, propInst, platform, exprParser, observerLocator);
      ++i;
    }
    renderingCtrl.addChild(childCtrl);
  }
}, null);
var CustomAttributeRenderer = renderer(class CustomAttributeRenderer2 {
  constructor() {
    this._rendering = resolve(IRendering);
    this.target = InstructionType.hydrateAttribute;
  }
  render(renderingCtrl, target, instruction, platform, exprParser, observerLocator) {
    let ctxContainer = renderingCtrl.container;
    let def2;
    switch (typeof instruction.res) {
      case "string":
        def2 = CustomAttribute.find(ctxContainer, instruction.res);
        if (def2 == null) {
          throw createMappedError5(753, instruction, renderingCtrl);
        }
        break;
      // constructor based instruction
      // will be enabled later if needed.
      // As both AOT + runtime based can use definition for perf
      // -----------------
      // case 'function':
      //   def = CustomAttribute.getDefinition(instruction.res);
      //   break;
      default:
        def2 = instruction.res;
    }
    const results = invokeAttribute(
      /* platform         */
      platform,
      /* attr definition  */
      def2,
      /* parentController */
      renderingCtrl,
      /* host             */
      target,
      /* instruction      */
      instruction,
      /* viewFactory      */
      void 0,
      /* location         */
      void 0
    );
    const childController = Controller.$attr(
      /* context ct */
      results.ctn,
      /* viewModel  */
      results.vm,
      /* host       */
      target,
      /* definition */
      def2
    );
    setRef(target, def2.key, childController);
    const renderers = this._rendering.renderers;
    const props = instruction.props;
    const ii = props.length;
    let i = 0;
    let propInst;
    while (ii > i) {
      propInst = props[i];
      renderers[propInst.type].render(renderingCtrl, childController, propInst, platform, exprParser, observerLocator);
      ++i;
    }
    renderingCtrl.addChild(childController);
  }
}, null);
var TemplateControllerRenderer = renderer(class TemplateControllerRenderer2 {
  constructor() {
    this._rendering = resolve(IRendering);
    this.target = InstructionType.hydrateTemplateController;
  }
  render(renderingCtrl, target, instruction, platform, exprParser, observerLocator) {
    var _a3, _b3;
    let ctxContainer = renderingCtrl.container;
    let def2;
    switch (typeof instruction.res) {
      case "string":
        def2 = CustomAttribute.find(ctxContainer, instruction.res);
        if (def2 == null) {
          throw createMappedError5(754, instruction, renderingCtrl);
        }
        break;
      // constructor based instruction
      // will be enabled later if needed.
      // As both AOT + runtime based can use definition for perf
      // -----------------
      // case 'function':
      //   def = CustomAttribute.getDefinition(instruction.res);
      //   break;
      default:
        def2 = instruction.res;
    }
    const viewFactory = this._rendering.getViewFactory(instruction.def, def2.containerStrategy === "new" ? ctxContainer.createChild({ inheritParentResources: true }) : ctxContainer);
    const renderLocation = convertToRenderLocation(target);
    const results = invokeAttribute(
      /* platform         */
      platform,
      /* attr definition  */
      def2,
      /* parentController */
      renderingCtrl,
      /* host             */
      target,
      /* instruction      */
      instruction,
      /* viewFactory      */
      viewFactory,
      /* location         */
      renderLocation
    );
    const childController = Controller.$attr(
      /* container ct */
      results.ctn,
      /* viewModel    */
      results.vm,
      /* host         */
      target,
      /* definition   */
      def2
    );
    setRef(renderLocation, def2.key, childController);
    (_b3 = (_a3 = results.vm).link) == null ? void 0 : _b3.call(_a3, renderingCtrl, childController, target, instruction);
    const renderers = this._rendering.renderers;
    const props = instruction.props;
    const ii = props.length;
    let i = 0;
    let propInst;
    while (ii > i) {
      propInst = props[i];
      renderers[propInst.type].render(renderingCtrl, childController, propInst, platform, exprParser, observerLocator);
      ++i;
    }
    renderingCtrl.addChild(childController);
  }
}, null);
var LetElementRenderer = renderer(class LetElementRenderer2 {
  constructor() {
    this.target = InstructionType.hydrateLetElement;
    LetBinding.mix();
  }
  render(renderingCtrl, target, instruction, platform, exprParser, observerLocator) {
    target.remove();
    const childInstructions = instruction.instructions;
    const toBindingContext = instruction.toBindingContext;
    const container = renderingCtrl.container;
    const ii = childInstructions.length;
    let childInstruction;
    let expr;
    let i = 0;
    while (ii > i) {
      childInstruction = childInstructions[i];
      expr = ensureExpression(exprParser, childInstruction.from, etIsProperty3);
      renderingCtrl.addBinding(new LetBinding(container, observerLocator, expr, childInstruction.to, toBindingContext, renderingCtrl.strict ?? false));
      ++i;
    }
  }
}, null);
var RefBindingRenderer = renderer(class RefBindingRenderer2 {
  constructor() {
    this.target = InstructionType.refBinding;
  }
  render(renderingCtrl, target, instruction, platform, exprParser) {
    renderingCtrl.addBinding(new RefBinding(renderingCtrl.container, ensureExpression(exprParser, instruction.from, etIsProperty3), getRefTarget(target, instruction.to), renderingCtrl.strict ?? false));
  }
}, null);
var InterpolationBindingRenderer = renderer(class InterpolationBindingRenderer2 {
  constructor() {
    this.target = InstructionType.interpolation;
    InterpolationPartBinding.mix();
  }
  render(renderingCtrl, target, instruction, platform, exprParser, observerLocator) {
    const container = renderingCtrl.container;
    const binding = new InterpolationBinding(renderingCtrl, container, observerLocator, platform.domQueue, ensureExpression(exprParser, instruction.from, etInterpolation3), getTarget(target), instruction.to, toView, renderingCtrl.strict ?? false);
    if (instruction.to === "class" && binding.target.nodeType > 0) {
      const cssMapping = container.get(fromHydrationContext(ICssClassMapping));
      binding.useAccessor(new ClassAttributeAccessor(binding.target, cssMapping));
    }
    renderingCtrl.addBinding(binding);
  }
}, null);
var PropertyBindingRenderer = renderer(class PropertyBindingRenderer2 {
  constructor() {
    this.target = InstructionType.propertyBinding;
    PropertyBinding.mix();
  }
  render(renderingCtrl, target, instruction, platform, exprParser, observerLocator) {
    const container = renderingCtrl.container;
    const binding = new PropertyBinding(renderingCtrl, container, observerLocator, platform.domQueue, ensureExpression(exprParser, instruction.from, etIsProperty3), getTarget(target), instruction.to, instruction.mode, renderingCtrl.strict ?? false);
    if (instruction.to === "class" && binding.target.nodeType > 0) {
      const cssMapping = container.get(fromHydrationContext(ICssClassMapping));
      binding.useTargetObserver(new ClassAttributeAccessor(binding.target, cssMapping));
    }
    renderingCtrl.addBinding(binding);
  }
}, null);
var IteratorBindingRenderer = renderer(class IteratorBindingRenderer2 {
  constructor() {
    this.target = InstructionType.iteratorBinding;
    PropertyBinding.mix();
  }
  render(renderingCtrl, target, instruction, platform, exprParser, observerLocator) {
    renderingCtrl.addBinding(new PropertyBinding(renderingCtrl, renderingCtrl.container, observerLocator, platform.domQueue, ensureExpression(exprParser, instruction.forOf, etIsIterator2), getTarget(target), instruction.to, toView, renderingCtrl.strict ?? false));
  }
}, null);
var TextBindingRenderer = renderer(class TextBindingRenderer2 {
  constructor() {
    this.target = InstructionType.textBinding;
    ContentBinding.mix();
  }
  render(renderingCtrl, target, instruction, platform, exprParser, observerLocator) {
    renderingCtrl.addBinding(new ContentBinding(renderingCtrl, renderingCtrl.container, observerLocator, platform.domQueue, platform, ensureExpression(exprParser, instruction.from, etIsProperty3), target, renderingCtrl.strict ?? false));
  }
}, null);
var IListenerBindingOptions = createInterface2("IListenerBindingOptions", (x) => x.singleton(class {
  constructor() {
    this.p = resolve(IPlatform2);
    this.prevent = false;
    this.onError = (event, error2) => {
      const errorEvent = new this.p.CustomEvent("au-event-error", { cancelable: true, detail: { event, error: error2 } });
      this.p.window.dispatchEvent(errorEvent);
      if (errorEvent.defaultPrevented) {
        return;
      }
      throw error2;
    };
  }
}));
var ListenerBindingRenderer = renderer(class ListenerBindingRenderer2 {
  constructor() {
    this.target = InstructionType.listenerBinding;
    this._modifierHandler = resolve(IEventModifier);
    this._defaultOptions = resolve(IListenerBindingOptions);
    ListenerBinding.mix();
  }
  render(renderingCtrl, target, instruction, platform, exprParser) {
    renderingCtrl.addBinding(new ListenerBinding(renderingCtrl.container, ensureExpression(exprParser, instruction.from, etIsFunction3), target, instruction.to, new ListenerBindingOptions(this._defaultOptions.prevent, instruction.capture, this._defaultOptions.onError), this._modifierHandler.getHandler(instruction.to, instruction.modifier), renderingCtrl.strict ?? false));
  }
}, null);
var SetAttributeRenderer = renderer(class SetAttributeRenderer2 {
  constructor() {
    this.target = InstructionType.setAttribute;
  }
  render(_, target, instruction) {
    target.setAttribute(instruction.to, instruction.value);
  }
}, null);
var SetClassAttributeRenderer = renderer(class SetClassAttributeRenderer2 {
  constructor() {
    this.target = InstructionType.setClassAttribute;
  }
  render(_, target, instruction) {
    addClasses(target.classList, instruction.value);
  }
}, null);
var SetStyleAttributeRenderer = renderer(class SetStyleAttributeRenderer2 {
  constructor() {
    this.target = InstructionType.setStyleAttribute;
  }
  render(_, target, instruction) {
    target.style.cssText += instruction.value;
  }
}, null);
var ambiguousStyles = [
  "height",
  "width",
  "border-width",
  "padding",
  "padding-left",
  "padding-right",
  "padding-top",
  "padding-right",
  "padding-inline",
  "padding-block",
  "margin",
  "margin-left",
  "margin-right",
  "margin-top",
  "margin-bottom",
  "margin-inline",
  "margin-block",
  "top",
  "right",
  "bottom",
  "left"
];
var StylePropertyBindingRenderer = renderer(class StylePropertyBindingRenderer2 {
  constructor() {
    this.target = InstructionType.stylePropertyBinding;
    PropertyBinding.mix();
  }
  render(renderingCtrl, target, instruction, platform, exprParser, observerLocator) {
    {
      if (ambiguousStyles.includes(instruction.to)) {
        renderingCtrl.addBinding(new DevStylePropertyBinding(renderingCtrl, renderingCtrl.container, observerLocator, platform.domQueue, ensureExpression(exprParser, instruction.from, etIsProperty3), target.style, instruction.to, toView, renderingCtrl.strict ?? false));
        return;
      }
    }
    renderingCtrl.addBinding(new PropertyBinding(renderingCtrl, renderingCtrl.container, observerLocator, platform.domQueue, ensureExpression(exprParser, instruction.from, etIsProperty3), target.style, instruction.to, toView, renderingCtrl.strict ?? false));
  }
}, null);
var DevStylePropertyBinding = class extends PropertyBinding {
  updateTarget(value) {
    if (typeof value === "number" && value > 0) {
      console.warn(`[DEV]: Setting number ${value} as value for style.${this.targetProperty}. Did you meant "${value}px"?`);
    }
    return super.updateTarget(value);
  }
};
var AttributeBindingRenderer = renderer(class AttributeBindingRenderer2 {
  constructor() {
    this.target = InstructionType.attributeBinding;
    AttributeBinding.mix();
  }
  render(renderingCtrl, target, instruction, platform, exprParser, observerLocator) {
    const container = renderingCtrl.container;
    const classMapping = container.has(ICssClassMapping, false) ? container.get(ICssClassMapping) : null;
    renderingCtrl.addBinding(new AttributeBinding(renderingCtrl, container, observerLocator, platform.domQueue, ensureExpression(exprParser, instruction.from, etIsProperty3), target, instruction.attr, classMapping == null ? instruction.to : instruction.to.split(/\s/g).map((c) => classMapping[c] ?? c).join(" "), toView, renderingCtrl.strict ?? false));
  }
}, null);
var SpreadRenderer = renderer(class SpreadRenderer2 {
  constructor() {
    this._compiler = resolve(ITemplateCompiler);
    this._rendering = resolve(IRendering);
    this.target = InstructionType.spreadTransferedBinding;
  }
  render(renderingCtrl, target, instruction, platform, exprParser, observerLocator) {
    SpreadBinding.create(renderingCtrl.container.get(IHydrationContext), target, void 0, this._rendering, this._compiler, platform, exprParser, observerLocator).forEach((b) => renderingCtrl.addBinding(b));
  }
}, null);
var SpreadValueRenderer = renderer(class SpreadValueRenderer2 {
  constructor() {
    this.target = InstructionType.spreadValueBinding;
    SpreadValueBinding.mix();
  }
  render(renderingCtrl, target, instruction, platform, exprParser, observerLocator) {
    const instructionTarget = instruction.target;
    if (instructionTarget === "$bindables") {
      renderingCtrl.addBinding(new SpreadValueBinding(renderingCtrl, target.viewModel, objectKeys(target.definition.bindables), exprParser.parse(instruction.from, etIsProperty3), observerLocator, renderingCtrl.container, platform.domQueue, renderingCtrl.strict ?? false));
    } else {
      throw createMappedError5(820, instructionTarget);
    }
  }
}, null);
function addClasses(classList, className) {
  const len = className.length;
  let start = 0;
  for (let i = 0; i < len; ++i) {
    if (className.charCodeAt(i) === 32) {
      if (i !== start) {
        classList.add(className.slice(start, i));
      }
      start = i + 1;
    } else if (i + 1 === len) {
      classList.add(className.slice(start));
    }
  }
}
var controllerProviderName = "IController";
var instructionProviderName = "IInstruction";
var locationProviderName = "IRenderLocation";
var slotInfoProviderName = "ISlotsInfo";
function createElementContainer(p, renderingCtrl, host, instruction, location, auSlotsInfo) {
  const ctn = renderingCtrl.container.createChild();
  registerHostNode(ctn, host, p);
  registerResolver(ctn, IController, new InstanceProvider(controllerProviderName, renderingCtrl));
  registerResolver(ctn, IInstruction, new InstanceProvider(instructionProviderName, instruction));
  registerResolver(ctn, IRenderLocation, location == null ? noLocationProvider : new RenderLocationProvider(location));
  registerResolver(ctn, IViewFactory, noViewFactoryProvider);
  registerResolver(ctn, IAuSlotsInfo, auSlotsInfo == null ? noAuSlotProvider : new InstanceProvider(slotInfoProviderName, auSlotsInfo));
  return ctn;
}
var ViewFactoryProvider = class {
  get $isResolver() {
    return true;
  }
  constructor(factory2) {
    this.f = factory2;
  }
  resolve() {
    const f = this.f;
    if (f === null) {
      throw createMappedError5(
        755
        /* ErrorNames.view_factory_provider_not_ready */
      );
    }
    if (!isString(f.name) || f.name.length === 0) {
      throw createMappedError5(
        756
        /* ErrorNames.view_factory_invalid_name */
      );
    }
    return f;
  }
};
function invokeAttribute(p, definition, $renderingCtrl, host, instruction, viewFactory, location, auSlotsInfo) {
  const renderingCtrl = $renderingCtrl instanceof Controller ? $renderingCtrl : $renderingCtrl.$controller;
  const ctn = renderingCtrl.container.createChild();
  registerHostNode(ctn, host, p);
  registerResolver(ctn, IController, new InstanceProvider(controllerProviderName, renderingCtrl));
  registerResolver(ctn, IInstruction, new InstanceProvider(instructionProviderName, instruction));
  registerResolver(ctn, IRenderLocation, location == null ? noLocationProvider : new InstanceProvider(locationProviderName, location));
  registerResolver(ctn, IViewFactory, viewFactory == null ? noViewFactoryProvider : new ViewFactoryProvider(viewFactory));
  registerResolver(ctn, IAuSlotsInfo, auSlotsInfo == null ? noAuSlotProvider : new InstanceProvider(slotInfoProviderName, auSlotsInfo));
  return { vm: ctn.invoke(definition.Type), ctn };
}
var RenderLocationProvider = class {
  get name() {
    return "IRenderLocation";
  }
  get $isResolver() {
    return true;
  }
  constructor(_location) {
    this._location = _location;
  }
  resolve() {
    return this._location;
  }
};
var noLocationProvider = new RenderLocationProvider(null);
var noViewFactoryProvider = new ViewFactoryProvider(null);
var noAuSlotProvider = new InstanceProvider(slotInfoProviderName, new AuSlotsInfo(emptyArray));
var IRendering = createInterface2("IRendering", (x) => x.singleton(Rendering));
var Rendering = class {
  get renderers() {
    return this._renderers ?? (this._renderers = this._ctn.getAll(IRenderer, false).reduce((all2, r) => {
      var _a3;
      {
        if (all2[r.target] !== void 0) {
          console.warn(`[DEV:aurelia] Renderer for target ${r.target} already exists.`);
        }
      }
      all2[_a3 = r.target] ?? (all2[_a3] = r);
      return all2;
    }, createLookup()));
  }
  constructor() {
    this._compilationCache = /* @__PURE__ */ new WeakMap();
    this._fragmentCache = /* @__PURE__ */ new WeakMap();
    const ctn = this._ctn = resolve(IContainer).root;
    const p = this._platform = ctn.get(IPlatform2);
    this._exprParser = ctn.get(IExpressionParser);
    this._observerLocator = ctn.get(IObserverLocator);
    this._marker = p.document.createElement("au-m");
    this._empty = new FragmentNodeSequence(p, p.document.createDocumentFragment());
  }
  compile(definition, container) {
    const compiler = container.get(ITemplateCompiler);
    const compiledMap = this._compilationCache;
    let compiled = compiledMap.get(definition);
    if (compiled == null) {
      compiledMap.set(definition, compiled = CustomElementDefinition.create(definition.needsCompile ? compiler.compile(definition, container) : definition));
    }
    return compiled;
  }
  getViewFactory(definition, container) {
    return new ViewFactory(container, CustomElementDefinition.getOrCreate(definition));
  }
  createNodes(definition) {
    if (definition.enhance === true) {
      return new FragmentNodeSequence(this._platform, this._transformMarker(definition.template));
    }
    let fragment;
    let needsImportNode = false;
    const cache = this._fragmentCache;
    const p = this._platform;
    const doc = p.document;
    if (cache.has(definition)) {
      fragment = cache.get(definition);
    } else {
      const template = definition.template;
      let tpl;
      if (template == null) {
        fragment = null;
      } else if (template instanceof p.Node) {
        if (template.nodeName === "TEMPLATE") {
          fragment = template.content;
          needsImportNode = true;
        } else {
          (fragment = doc.createDocumentFragment()).appendChild(template.cloneNode(true));
        }
      } else {
        tpl = doc.createElement("template");
        if (isString(template)) {
          tpl.innerHTML = template;
        }
        fragment = tpl.content;
        needsImportNode = true;
      }
      this._transformMarker(fragment);
      cache.set(definition, fragment);
    }
    return fragment == null ? this._empty : new FragmentNodeSequence(this._platform, needsImportNode ? doc.importNode(fragment, true) : doc.adoptNode(fragment.cloneNode(true)));
  }
  render(controller, targets, definition, host) {
    const rows = definition.instructions;
    const renderers = this.renderers;
    const ii = targets.length;
    let i = 0;
    let j = 0;
    let jj = rows.length;
    let row;
    let instruction;
    let target;
    if (ii !== jj) {
      throw createMappedError5(757, ii, jj);
    }
    if (ii > 0) {
      while (ii > i) {
        row = rows[i];
        target = targets[i];
        j = 0;
        jj = row.length;
        while (jj > j) {
          instruction = row[j];
          renderers[instruction.type].render(controller, target, instruction, this._platform, this._exprParser, this._observerLocator);
          ++j;
        }
        ++i;
      }
    }
    if (host != null) {
      row = definition.surrogates;
      if ((jj = row.length) > 0) {
        j = 0;
        while (jj > j) {
          instruction = row[j];
          renderers[instruction.type].render(controller, host, instruction, this._platform, this._exprParser, this._observerLocator);
          ++j;
        }
      }
    }
  }
  /** @internal */
  _transformMarker(fragment) {
    if (fragment == null) {
      return null;
    }
    const walker = this._platform.document.createTreeWalker(
      fragment,
      /* NodeFilter.SHOW_COMMENT */
      128
    );
    let currentNode;
    while ((currentNode = walker.nextNode()) != null) {
      if (currentNode.nodeValue === "au*") {
        currentNode.parentNode.replaceChild(walker.currentNode = this._marker.cloneNode(), currentNode);
      }
    }
    return fragment;
  }
};
function cssModules(...modules) {
  return new CSSModulesProcessorRegistry(modules);
}
var CSSModulesProcessorRegistry = class {
  constructor(modules) {
    this.modules = modules;
  }
  register(container) {
    let existingMapping = container.get(own(ICssClassMapping));
    if (existingMapping == null) {
      container.register(instanceRegistration2(ICssClassMapping, existingMapping = createLookup()));
    }
    {
      for (const mapping of this.modules) {
        for (const originalClass in mapping) {
          if (originalClass in existingMapping) {
            console.warn(`[DEV:aurelia] CSS class mapping for class "${originalClass}": "${mapping[originalClass]}" is overridden by "${existingMapping[originalClass]}"`);
          }
          existingMapping[originalClass] = mapping[originalClass];
        }
      }
    }
    class CompilingHook {
      compiling(template) {
        const isTemplate = template.tagName === "TEMPLATE";
        const container2 = isTemplate ? template.content : template;
        const plainClasses = [template, ...toArray(container2.querySelectorAll("[class]"))];
        for (const element of plainClasses) {
          const classes = element.getAttributeNode("class");
          if (classes == null) {
            continue;
          }
          const newClasses = classes.value.split(/\s+/g).map((x) => existingMapping[x] || x).join(" ");
          classes.value = newClasses;
        }
      }
    }
    container.register(TemplateCompilerHooks.define(CompilingHook));
  }
};
function shadowCSS(...css) {
  return new ShadowDOMRegistry(css);
}
var IShadowDOMStyleFactory = createInterface2("IShadowDOMStyleFactory", (x) => x.cachedCallback((handler) => {
  if (AdoptedStyleSheetsStyles.supported(handler.get(IPlatform2))) {
    return handler.get(AdoptedStyleSheetsStylesFactory);
  }
  return handler.get(StyleElementStylesFactory);
}));
var ShadowDOMRegistry = class {
  constructor(css) {
    this.css = css;
  }
  register(container) {
    const sharedStyles = container.get(IShadowDOMGlobalStyles);
    const factory2 = container.get(IShadowDOMStyleFactory);
    container.register(instanceRegistration2(IShadowDOMStyles, factory2.createStyles(this.css, sharedStyles)));
  }
};
var AdoptedStyleSheetsStylesFactory = class {
  constructor() {
    this.p = resolve(IPlatform2);
    this.cache = /* @__PURE__ */ new Map();
  }
  createStyles(localStyles, sharedStyles) {
    return new AdoptedStyleSheetsStyles(this.p, localStyles, this.cache, sharedStyles);
  }
};
var StyleElementStylesFactory = class {
  constructor() {
    this.p = resolve(IPlatform2);
  }
  createStyles(localStyles, sharedStyles) {
    return new StyleElementStyles(this.p, localStyles, sharedStyles);
  }
};
var IShadowDOMStyles = createInterface2("IShadowDOMStyles");
var IShadowDOMGlobalStyles = createInterface2("IShadowDOMGlobalStyles", (x) => x.instance({ applyTo: noop }));
var AdoptedStyleSheetsStyles = class {
  constructor(p, localStyles, styleSheetCache, sharedStyles = null) {
    this.sharedStyles = sharedStyles;
    this.styleSheets = localStyles.map((x) => {
      let sheet;
      if (x instanceof p.CSSStyleSheet) {
        sheet = x;
      } else {
        sheet = styleSheetCache.get(x);
        if (sheet === void 0) {
          sheet = new p.CSSStyleSheet();
          sheet.replaceSync(x);
          styleSheetCache.set(x, sheet);
        }
      }
      return sheet;
    });
  }
  static supported(p) {
    return "adoptedStyleSheets" in p.ShadowRoot.prototype;
  }
  applyTo(shadowRoot) {
    if (this.sharedStyles !== null) {
      this.sharedStyles.applyTo(shadowRoot);
    }
    shadowRoot.adoptedStyleSheets = [
      ...shadowRoot.adoptedStyleSheets,
      ...this.styleSheets
    ];
  }
};
var StyleElementStyles = class {
  constructor(p, localStyles, sharedStyles = null) {
    this.p = p;
    this.localStyles = localStyles;
    this.sharedStyles = sharedStyles;
  }
  applyTo(shadowRoot) {
    const styles = this.localStyles;
    const p = this.p;
    for (let i = styles.length - 1; i > -1; --i) {
      const element = p.document.createElement("style");
      element.innerHTML = styles[i];
      shadowRoot.prepend(element);
    }
    if (this.sharedStyles !== null) {
      this.sharedStyles.applyTo(shadowRoot);
    }
  }
};
var StyleConfiguration = {
  shadowDOM(config) {
    return AppTask.creating(IContainer, (container) => {
      if (config.sharedStyles != null) {
        const factory2 = container.get(IShadowDOMStyleFactory);
        container.register(instanceRegistration2(IShadowDOMGlobalStyles, factory2.createStyles(config.sharedStyles, null)));
      }
    });
  }
};
var { enter, exit } = ConnectableSwitcher;
var { wrap: wrap2, unwrap: unwrap2 } = ProxyObservable;
var ComputedWatcher = class {
  get value() {
    return this._value;
  }
  constructor(obj, observerLocator, $get, cb, useProxy) {
    this.obj = obj;
    this.$get = $get;
    this.useProxy = useProxy;
    this.isBound = false;
    this.running = false;
    this._value = void 0;
    this._callback = cb;
    this.oL = observerLocator;
  }
  handleChange() {
    this.run();
  }
  handleCollectionChange() {
    this.run();
  }
  bind() {
    if (this.isBound) {
      return;
    }
    this.compute();
    this.isBound = true;
  }
  unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    this.obs.clearAll();
  }
  run() {
    if (!this.isBound || this.running) {
      return;
    }
    const obj = this.obj;
    const oldValue = this._value;
    const newValue = this.compute();
    if (!areEqual(newValue, oldValue)) {
      this._callback.call(obj, newValue, oldValue, obj);
    }
  }
  compute() {
    this.running = true;
    this.obs.version++;
    try {
      enter(this);
      return this._value = unwrap2(this.$get.call(void 0, this.useProxy ? wrap2(this.obj) : this.obj, this));
    } finally {
      this.obs.clear();
      this.running = false;
      exit(this);
    }
  }
};
(() => {
  connectable(ComputedWatcher, null);
})();
var ExpressionWatcher = class {
  get value() {
    return this._value;
  }
  constructor(scope, l, oL, expression, callback) {
    this.scope = scope;
    this.l = l;
    this.oL = oL;
    this.isBound = false;
    this.boundFn = false;
    this.obj = scope.bindingContext;
    this._expression = expression;
    this._callback = callback;
  }
  handleChange(value) {
    const expr = this._expression;
    const obj = this.obj;
    const oldValue = this._value;
    const canOptimize = expr.$kind === "AccessScope" && this.obs.count === 1;
    if (!canOptimize) {
      this.obs.version++;
      value = astEvaluate(expr, this.scope, this, this);
      this.obs.clear();
    }
    if (!areEqual(value, oldValue)) {
      this._value = value;
      this._callback.call(obj, value, oldValue, obj);
    }
  }
  bind() {
    if (this.isBound) {
      return;
    }
    this.obs.version++;
    this._value = astEvaluate(this._expression, this.scope, this, this);
    this.obs.clear();
    this.isBound = true;
  }
  unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    this.obs.clearAll();
    this._value = void 0;
  }
};
(() => {
  connectable(ExpressionWatcher, null);
  mixinAstEvaluator(ExpressionWatcher);
})();
var Controller = class _Controller {
  get lifecycleHooks() {
    return this._lifecycleHooks;
  }
  get isActive() {
    return (this.state & (activating | activated)) > 0 && (this.state & deactivating) === 0;
  }
  get name() {
    var _a3;
    if (this.parent === null) {
      switch (this.vmKind) {
        case vmkCa:
          return `[${this.definition.name}]`;
        case vmkCe:
          return this.definition.name;
        case vmkSynth:
          return this.viewFactory.name;
      }
    }
    switch (this.vmKind) {
      case vmkCa:
        return `${this.parent.name}>[${this.definition.name}]`;
      case vmkCe:
        return `${this.parent.name}>${this.definition.name}`;
      case vmkSynth:
        return this.viewFactory.name === ((_a3 = this.parent.definition) == null ? void 0 : _a3.name) ? `${this.parent.name}[view]` : `${this.parent.name}[view:${this.viewFactory.name}]`;
    }
  }
  get viewModel() {
    return this._vm;
  }
  set viewModel(v) {
    this._vm = v;
    this._vmHooks = v == null || this.vmKind === vmkSynth ? HooksDefinition.none : new HooksDefinition(v);
  }
  get strict() {
    var _a3;
    return (_a3 = this.definition) == null ? void 0 : _a3.strict;
  }
  constructor(container, vmKind, definition, viewFactory, viewModel, host, location) {
    this.container = container;
    this.vmKind = vmKind;
    this.definition = definition;
    this.viewFactory = viewFactory;
    this.host = host;
    this.head = null;
    this.tail = null;
    this.next = null;
    this.parent = null;
    this.bindings = null;
    this.children = null;
    this.hasLockedScope = false;
    this.scope = null;
    this.isBound = false;
    this._isBindingDone = false;
    this.hostController = null;
    this.mountTarget = targetNone;
    this.shadowRoot = null;
    this.nodes = null;
    this.location = null;
    this._lifecycleHooks = null;
    this.state = none2;
    this._fullyNamed = false;
    this.$initiator = null;
    this.$resolve = void 0;
    this.$reject = void 0;
    this.$promise = void 0;
    this._activatingStack = 0;
    this._detachingStack = 0;
    this._unbindingStack = 0;
    this._vm = viewModel;
    this._vmHooks = vmKind === vmkSynth ? HooksDefinition.none : new HooksDefinition(viewModel);
    {
      this.logger = null;
      this.debug = false;
    }
    this.location = location;
    this._rendering = container.root.get(IRendering);
    this.coercion = vmKind === vmkSynth ? void 0 : container.get(optionalCoercionConfigResolver);
  }
  static getCached(viewModel) {
    return controllerLookup.get(viewModel);
  }
  static getCachedOrThrow(viewModel) {
    const $el = _Controller.getCached(viewModel);
    if ($el === void 0) {
      throw createMappedError5(500, viewModel);
    }
    return $el;
  }
  /**
   * Create a controller for a custom element based on a given set of parameters
   *
   * @param ctn - The own container of the custom element
   * @param viewModel - The view model object (can be any object if a definition is specified)
   *
   * Semi private API
   */
  static $el(ctn, viewModel, host, hydrationInst, definition = void 0, location = null) {
    if (controllerLookup.has(viewModel)) {
      return controllerLookup.get(viewModel);
    }
    {
      if (definition == null) {
        try {
          definition = getElementDefinition(viewModel.constructor);
        } catch (ex) {
          console.error(`[DEV:aurelia] Custom element definition not found for creating a controller with host: <${host.nodeName} /> and component ${viewModel.constructor.name || "(Anonymous) class"}`);
          throw ex;
        }
      }
    }
    registerResolver(ctn, definition.Type, new InstanceProvider(definition.key, viewModel, definition.Type));
    const controller = new _Controller(
      /* container      */
      ctn,
      /* vmKind         */
      vmkCe,
      /* definition     */
      definition,
      /* viewFactory    */
      null,
      /* viewModel      */
      viewModel,
      /* host           */
      host,
      /* location       */
      location
    );
    const hydrationContext = ctn.get(optional(IHydrationContext));
    if (definition.dependencies.length > 0) {
      ctn.register(...definition.dependencies);
    }
    registerResolver(ctn, IHydrationContext, new InstanceProvider("IHydrationContext", new HydrationContext(controller, hydrationInst, hydrationContext)));
    controllerLookup.set(viewModel, controller);
    if (hydrationInst == null || hydrationInst.hydrate !== false) {
      controller._hydrateCustomElement(hydrationInst);
    }
    return controller;
  }
  /**
   * Create a controller for a custom attribute based on a given set of parameters
   *
   * @param ctn - own container associated with the custom attribute object
   * @param viewModel - the view model object
   * @param host - host element where this custom attribute is used
   * @param flags - todo(comment)
   * @param definition - the definition of the custom attribute,
   * will be used to override the definition associated with the view model object contructor if given
   */
  static $attr(ctn, viewModel, host, definition) {
    if (controllerLookup.has(viewModel)) {
      return controllerLookup.get(viewModel);
    }
    definition = definition ?? getAttributeDefinition(viewModel.constructor);
    registerResolver(ctn, definition.Type, new InstanceProvider(definition.key, viewModel, definition.Type));
    const controller = new _Controller(
      /* own ct         */
      ctn,
      /* vmKind         */
      vmkCa,
      /* definition     */
      definition,
      /* viewFactory    */
      null,
      /* viewModel      */
      viewModel,
      /* host           */
      host,
      /* location       */
      null
    );
    if (definition.dependencies.length > 0) {
      ctn.register(...definition.dependencies);
    }
    controllerLookup.set(viewModel, controller);
    controller._hydrateCustomAttribute();
    return controller;
  }
  /**
   * Create a synthetic view (controller) for a given factory
   *
   * @param viewFactory - todo(comment)
   * @param flags - todo(comment)
   * @param parentController - the parent controller to connect the created view with. Used in activation
   *
   * Semi private API
   */
  static $view(viewFactory, parentController = void 0) {
    const controller = new _Controller(
      /* container      */
      viewFactory.container,
      /* vmKind         */
      vmkSynth,
      /* definition     */
      null,
      /* viewFactory    */
      viewFactory,
      /* viewModel      */
      null,
      /* host           */
      null,
      /* location       */
      null
    );
    controller.parent = parentController ?? null;
    controller._hydrateSynthetic();
    return controller;
  }
  /** @internal */
  _hydrateCustomElement(hydrationInst) {
    {
      this.logger = this.container.get(ILogger).root;
      this.debug = this.logger.config.level <= LogLevel.debug;
      if (this.debug) {
        this.logger = this.logger.scopeTo(this.name);
      }
    }
    const container = this.container;
    const instance = this._vm;
    const definition = this.definition;
    this.scope = Scope.create(instance, null, true);
    if (definition.watches.length > 0) {
      createWatchers(this, container, definition, instance);
    }
    createObservers(this, definition, instance);
    this._lifecycleHooks = LifecycleHooks.resolve(container);
    container.register(definition.Type);
    if (definition.injectable !== null) {
      registerResolver(container, definition.injectable, new InstanceProvider("definition.injectable", instance));
    }
    if (hydrationInst == null || hydrationInst.hydrate !== false) {
      this._hydrate(hydrationInst == null ? void 0 : hydrationInst.hostController);
      this._hydrateChildren();
    }
  }
  /** @internal */
  _hydrate(hostController) {
    if (this._lifecycleHooks.hydrating != null) {
      this._lifecycleHooks.hydrating.forEach(callHydratingHook, this);
    }
    if (this._vmHooks._hydrating) {
      if (this.debug) {
        this.logger.trace(`invoking hydrating() hook`);
      }
      this._vm.hydrating(this);
    }
    const definition = this.definition;
    const compiledDef = this._compiledDef = this._rendering.compile(definition, this.container);
    const shadowOptions = compiledDef.shadowOptions;
    const hasSlots = compiledDef.hasSlots;
    const containerless2 = compiledDef.containerless;
    let host = this.host;
    let location = this.location;
    let createLocation2 = false;
    if (hostController != null) {
      this.hostController = hostController;
      createLocation2 = true;
    } else if ((this.hostController = findElementControllerFor(host, optionalCeFind)) !== null) {
      host = this.host = this.container.root.get(IPlatform2).document.createElement(definition.name);
      createLocation2 = true;
    }
    if (createLocation2 && containerless2 && location == null) {
      location = this.location = convertToRenderLocation(host);
    }
    setRef(host, elementBaseName, this);
    setRef(host, definition.key, this);
    if (shadowOptions !== null || hasSlots) {
      if (location != null) {
        throw createMappedError5(
          501
          /* ErrorNames.controller_no_shadow_on_containerless */
        );
      }
      setRef(this.shadowRoot = host.attachShadow(shadowOptions ?? defaultShadowOptions), elementBaseName, this);
      setRef(this.shadowRoot, definition.key, this);
      this.mountTarget = targetShadowRoot;
    } else if (location != null) {
      setRef(location, elementBaseName, this);
      setRef(location, definition.key, this);
      this.mountTarget = targetLocation;
    } else {
      this.mountTarget = targetHost;
    }
    this._vm.$controller = this;
    this.nodes = this._rendering.createNodes(compiledDef);
    if (this._lifecycleHooks.hydrated !== void 0) {
      this._lifecycleHooks.hydrated.forEach(callHydratedHook, this);
    }
    if (this._vmHooks._hydrated) {
      if (this.debug) {
        this.logger.trace(`invoking hydrated() hook`);
      }
      this._vm.hydrated(this);
    }
  }
  /** @internal */
  _hydrateChildren() {
    this._rendering.render(
      /* controller */
      this,
      /* targets    */
      this.nodes.findTargets(),
      /* definition */
      this._compiledDef,
      /* host       */
      this.host
    );
    if (this._lifecycleHooks.created !== void 0) {
      this._lifecycleHooks.created.forEach(callCreatedHook, this);
    }
    if (this._vmHooks._created) {
      if (this.debug) {
        this.logger.trace(`invoking created() hook`);
      }
      this._vm.created(this);
    }
  }
  /** @internal */
  _hydrateCustomAttribute() {
    const definition = this.definition;
    const instance = this._vm;
    if (definition.watches.length > 0) {
      createWatchers(this, this.container, definition, instance);
    }
    createObservers(this, definition, instance);
    instance.$controller = this;
    this._lifecycleHooks = LifecycleHooks.resolve(this.container);
    if (this._lifecycleHooks.created !== void 0) {
      this._lifecycleHooks.created.forEach(callCreatedHook, this);
    }
    if (this._vmHooks._created) {
      if (this.debug) {
        this.logger.trace(`invoking created() hook`);
      }
      this._vm.created(this);
    }
  }
  /** @internal */
  _hydrateSynthetic() {
    this._compiledDef = this._rendering.compile(this.viewFactory.def, this.container);
    this._rendering.render(
      /* controller */
      this,
      /* targets    */
      (this.nodes = this._rendering.createNodes(this._compiledDef)).findTargets(),
      /* definition */
      this._compiledDef,
      /* host       */
      void 0
    );
  }
  activate(initiator, parent, scope) {
    switch (this.state) {
      case none2:
      case deactivated:
        if (!(parent === null || parent.isActive)) {
          return;
        }
        this.state = activating;
        break;
      case activated:
        return;
      case disposed:
        throw createMappedError5(502, this.name);
      default:
        throw createMappedError5(503, this.name, stringifyState(this.state));
    }
    this.parent = parent;
    if (this.debug && !this._fullyNamed) {
      this._fullyNamed = true;
      (this.logger ?? (this.logger = this.container.get(ILogger).root.scopeTo(this.name))).trace(`activate()`);
    }
    switch (this.vmKind) {
      case vmkCe:
        this.scope.parent = scope ?? null;
        break;
      case vmkCa:
        this.scope = scope ?? null;
        break;
      case vmkSynth:
        if (scope === void 0 || scope === null) {
          throw createMappedError5(504, this.name);
        }
        if (!this.hasLockedScope) {
          this.scope = scope;
        }
        break;
    }
    this.$initiator = initiator;
    this._enterActivating();
    let ret = void 0;
    if (this.vmKind !== vmkSynth && this._lifecycleHooks.binding != null) {
      if (this.debug) {
        this.logger.trace(`lifecycleHooks.binding()`);
      }
      ret = onResolveAll(...this._lifecycleHooks.binding.map(callBindingHook, this));
    }
    if (this._vmHooks._binding) {
      if (this.debug) {
        this.logger.trace(`binding()`);
      }
      ret = onResolveAll(ret, this._vm.binding(this.$initiator, this.parent));
    }
    if (isPromise(ret)) {
      this._ensurePromise();
      ret.then(() => {
        this._isBindingDone = true;
        if (this.state !== activating) {
          this._leaveActivating();
        } else {
          this.bind();
        }
      }).catch((err) => {
        this._reject(err);
      });
      return this.$promise;
    }
    this._isBindingDone = true;
    this.bind();
    return this.$promise;
  }
  bind() {
    if (this.debug) {
      this.logger.trace(`bind()`);
    }
    let i = 0;
    let ii = 0;
    let ret = void 0;
    if (this.bindings !== null) {
      i = 0;
      ii = this.bindings.length;
      while (ii > i) {
        this.bindings[i].bind(this.scope);
        ++i;
      }
    }
    if (this.vmKind !== vmkSynth && this._lifecycleHooks.bound != null) {
      if (this.debug) {
        this.logger.trace(`lifecycleHooks.bound()`);
      }
      ret = onResolveAll(...this._lifecycleHooks.bound.map(callBoundHook, this));
    }
    if (this._vmHooks._bound) {
      if (this.debug) {
        this.logger.trace(`bound()`);
      }
      ret = onResolveAll(ret, this._vm.bound(this.$initiator, this.parent));
    }
    if (isPromise(ret)) {
      this._ensurePromise();
      ret.then(() => {
        this.isBound = true;
        if (this.state !== activating) {
          this._leaveActivating();
        } else {
          this._attach();
        }
      }).catch((err) => {
        this._reject(err);
      });
      return;
    }
    this.isBound = true;
    this._attach();
  }
  /** @internal */
  _append(...nodes) {
    switch (this.mountTarget) {
      case targetHost:
        this.host.append(...nodes);
        break;
      case targetShadowRoot:
        this.shadowRoot.append(...nodes);
        break;
      case targetLocation: {
        let i = 0;
        for (; i < nodes.length; ++i) {
          this.location.parentNode.insertBefore(nodes[i], this.location);
        }
        break;
      }
    }
  }
  /** @internal */
  _attach() {
    if (this.debug) {
      this.logger.trace(`attach()`);
    }
    if (this.hostController !== null) {
      switch (this.mountTarget) {
        case targetHost:
        case targetShadowRoot:
          this.hostController._append(this.host);
          break;
        case targetLocation:
          this.hostController._append(this.location.$start, this.location);
          break;
      }
    }
    switch (this.mountTarget) {
      case targetHost:
        this.nodes.appendTo(this.host, this.definition != null && this.definition.enhance);
        break;
      case targetShadowRoot: {
        const container = this.container;
        const styles = container.has(IShadowDOMStyles, false) ? container.get(IShadowDOMStyles) : container.get(IShadowDOMGlobalStyles);
        styles.applyTo(this.shadowRoot);
        this.nodes.appendTo(this.shadowRoot);
        break;
      }
      case targetLocation:
        this.nodes.insertBefore(this.location);
        break;
    }
    let i = 0;
    let ret = void 0;
    if (this.vmKind !== vmkSynth && this._lifecycleHooks.attaching != null) {
      if (this.debug) {
        this.logger.trace(`lifecycleHooks.attaching()`);
      }
      ret = onResolveAll(...this._lifecycleHooks.attaching.map(callAttachingHook, this));
    }
    if (this._vmHooks._attaching) {
      if (this.debug) {
        this.logger.trace(`attaching()`);
      }
      ret = onResolveAll(ret, this._vm.attaching(this.$initiator, this.parent));
    }
    if (isPromise(ret)) {
      this._ensurePromise();
      this._enterActivating();
      ret.then(() => {
        this._leaveActivating();
      }).catch((err) => {
        this._reject(err);
      });
    }
    if (this.children !== null) {
      for (; i < this.children.length; ++i) {
        void this.children[i].activate(this.$initiator, this, this.scope);
      }
    }
    this._leaveActivating();
  }
  deactivate(initiator, _parent) {
    var _a3;
    let prevActivation = void 0;
    switch (this.state & ~released) {
      case activated:
        this.state = deactivating;
        break;
      case activating:
        this.state = deactivating;
        prevActivation = (_a3 = this.$promise) == null ? void 0 : _a3.catch(
          (err) => {
            this.logger.warn("The activation error will be ignored, as the controller is already scheduled for deactivation. The activation was rejected with: %s", err);
          }
        );
        break;
      case none2:
      case deactivated:
      case disposed:
      case deactivated | disposed:
        return;
      default:
        throw createMappedError5(505, this.name, this.state);
    }
    if (this.debug) {
      this.logger.trace(`deactivate()`);
    }
    this.$initiator = initiator;
    if (initiator === this) {
      this._enterDetaching();
    }
    let i = 0;
    let ret;
    if (this.children !== null) {
      for (i = 0; i < this.children.length; ++i) {
        void this.children[i].deactivate(initiator, this);
      }
    }
    return onResolve(prevActivation, () => {
      if (this.isBound) {
        if (this.vmKind !== vmkSynth && this._lifecycleHooks.detaching != null) {
          if (this.debug) {
            this.logger.trace(`lifecycleHooks.detaching()`);
          }
          ret = onResolveAll(...this._lifecycleHooks.detaching.map(callDetachingHook, this));
        }
        if (this._vmHooks._detaching) {
          if (this.debug) {
            this.logger.trace(`detaching()`);
          }
          ret = onResolveAll(ret, this._vm.detaching(this.$initiator, this.parent));
        }
      }
      if (isPromise(ret)) {
        this._ensurePromise();
        initiator._enterDetaching();
        ret.then(() => {
          initiator._leaveDetaching();
        }).catch((err) => {
          initiator._reject(err);
        });
      }
      if (initiator.head === null) {
        initiator.head = this;
      } else {
        initiator.tail.next = this;
      }
      initiator.tail = this;
      if (initiator !== this) {
        return;
      }
      this._leaveDetaching();
      return this.$promise;
    });
  }
  removeNodes() {
    switch (this.vmKind) {
      case vmkCe:
      case vmkSynth:
        this.nodes.remove();
        this.nodes.unlink();
    }
    if (this.hostController !== null) {
      switch (this.mountTarget) {
        case targetHost:
        case targetShadowRoot:
          this.host.remove();
          break;
        case targetLocation:
          this.location.$start.remove();
          this.location.remove();
          break;
      }
    }
  }
  unbind() {
    if (this.debug) {
      this.logger.trace(`unbind()`);
    }
    let i = 0;
    if (this.bindings !== null) {
      for (; i < this.bindings.length; ++i) {
        this.bindings[i].unbind();
      }
    }
    this.parent = null;
    switch (this.vmKind) {
      case vmkCa:
        this.scope = null;
        break;
      case vmkSynth:
        if (!this.hasLockedScope) {
          this.scope = null;
        }
        if ((this.state & released) === released && !this.viewFactory.tryReturnToCache(this) && this.$initiator === this) {
          this.dispose();
        }
        break;
      case vmkCe:
        this.scope.parent = null;
        break;
    }
    this.state = deactivated;
    this.$initiator = null;
    this._resolve();
  }
  /** @internal */
  _ensurePromise() {
    if (this.$promise === void 0) {
      this.$promise = new Promise((resolve2, reject) => {
        this.$resolve = resolve2;
        this.$reject = reject;
      });
      if (this.$initiator !== this) {
        this.parent._ensurePromise();
      }
    }
  }
  /** @internal */
  _resolve() {
    if (this.$promise !== void 0) {
      _resolve = this.$resolve;
      this.$resolve = this.$reject = this.$promise = void 0;
      _resolve();
      _resolve = void 0;
    }
  }
  /** @internal */
  _reject(err) {
    if (this.$promise !== void 0) {
      _reject = this.$reject;
      this.$resolve = this.$reject = this.$promise = void 0;
      _reject(err);
      _reject = void 0;
    }
    if (this.$initiator !== this) {
      this.parent._reject(err);
    }
  }
  /** @internal */
  _enterActivating() {
    ++this._activatingStack;
    if (this.$initiator !== this) {
      this.parent._enterActivating();
    }
  }
  /** @internal */
  _leaveActivating() {
    if (this.state !== activating) {
      --this._activatingStack;
      this._resolve();
      if (this.$initiator !== this) {
        this.parent._leaveActivating();
      }
      return;
    }
    if (--this._activatingStack === 0) {
      if (this.vmKind !== vmkSynth && this._lifecycleHooks.attached != null) {
        _retPromise = onResolveAll(...this._lifecycleHooks.attached.map(callAttachedHook, this));
      }
      if (this._vmHooks._attached) {
        if (this.debug) {
          this.logger.trace(`attached()`);
        }
        _retPromise = onResolveAll(_retPromise, this._vm.attached(this.$initiator));
      }
      if (isPromise(_retPromise)) {
        this._ensurePromise();
        _retPromise.then(() => {
          this.state = activated;
          this._resolve();
          if (this.$initiator !== this) {
            this.parent._leaveActivating();
          }
        }).catch((err) => {
          this._reject(err);
        });
        _retPromise = void 0;
        return;
      }
      _retPromise = void 0;
      this.state = activated;
      this._resolve();
    }
    if (this.$initiator !== this) {
      this.parent._leaveActivating();
    }
  }
  /** @internal */
  _enterDetaching() {
    ++this._detachingStack;
  }
  /** @internal */
  _leaveDetaching() {
    if (--this._detachingStack === 0) {
      if (this.debug) {
        this.logger.trace(`detach()`);
      }
      this._enterUnbinding();
      this.removeNodes();
      let cur = this.$initiator.head;
      let ret = void 0;
      while (cur !== null) {
        if (cur !== this) {
          if (cur.debug) {
            cur.logger.trace(`detach()`);
          }
          cur.removeNodes();
        }
        if (cur._isBindingDone) {
          if (cur.vmKind !== vmkSynth && cur._lifecycleHooks.unbinding != null) {
            ret = onResolveAll(...cur._lifecycleHooks.unbinding.map(callUnbindingHook, cur));
          }
          if (cur._vmHooks._unbinding) {
            if (cur.debug) {
              cur.logger.trace("unbinding()");
            }
            ret = onResolveAll(ret, cur.viewModel.unbinding(cur.$initiator, cur.parent));
          }
        }
        if (isPromise(ret)) {
          this._ensurePromise();
          this._enterUnbinding();
          ret.then(() => {
            this._leaveUnbinding();
          }).catch((err) => {
            this._reject(err);
          });
        }
        ret = void 0;
        cur = cur.next;
      }
      this._leaveUnbinding();
    }
  }
  /** @internal */
  _enterUnbinding() {
    ++this._unbindingStack;
  }
  /** @internal */
  _leaveUnbinding() {
    if (--this._unbindingStack === 0) {
      if (this.debug) {
        this.logger.trace(`unbind()`);
      }
      let cur = this.$initiator.head;
      let next = null;
      while (cur !== null) {
        if (cur !== this) {
          cur._isBindingDone = false;
          cur.isBound = false;
          cur.unbind();
        }
        next = cur.next;
        cur.next = null;
        cur = next;
      }
      this.head = this.tail = null;
      this._isBindingDone = false;
      this.isBound = false;
      this.unbind();
    }
  }
  addBinding(binding) {
    if (this.bindings === null) {
      this.bindings = [binding];
    } else {
      this.bindings[this.bindings.length] = binding;
    }
  }
  addChild(controller) {
    if (this.children === null) {
      this.children = [controller];
    } else {
      this.children[this.children.length] = controller;
    }
  }
  is(name) {
    switch (this.vmKind) {
      case vmkCa:
      case vmkCe: {
        return this.definition.name === name;
      }
      case vmkSynth:
        return this.viewFactory.name === name;
    }
  }
  lockScope(scope) {
    this.scope = scope;
    this.hasLockedScope = true;
  }
  setHost(host) {
    if (this.vmKind === vmkCe) {
      setRef(host, elementBaseName, this);
      setRef(host, this.definition.key, this);
    }
    this.host = host;
    this.mountTarget = targetHost;
    return this;
  }
  setShadowRoot(shadowRoot) {
    if (this.vmKind === vmkCe) {
      setRef(shadowRoot, elementBaseName, this);
      setRef(shadowRoot, this.definition.key, this);
    }
    this.shadowRoot = shadowRoot;
    this.mountTarget = targetShadowRoot;
    return this;
  }
  setLocation(location) {
    if (this.vmKind === vmkCe) {
      setRef(location, elementBaseName, this);
      setRef(location, this.definition.key, this);
    }
    this.location = location;
    this.mountTarget = targetLocation;
    return this;
  }
  release() {
    this.state |= released;
  }
  dispose() {
    if (this.debug) {
      this.logger.trace(`dispose()`);
    }
    if ((this.state & disposed) === disposed) {
      return;
    }
    this.state |= disposed;
    if (this._vmHooks._dispose) {
      this._vm.dispose();
    }
    if (this.children !== null) {
      this.children.forEach(callDispose);
      this.children = null;
    }
    this.hostController = null;
    this.scope = null;
    this.nodes = null;
    this.location = null;
    this.viewFactory = null;
    if (this._vm !== null) {
      controllerLookup.delete(this._vm);
      this._vm = null;
    }
    this._vm = null;
    this.host = null;
    this.shadowRoot = null;
    this.container.disposeResolvers();
  }
  accept(visitor) {
    if (visitor(this) === true) {
      return true;
    }
    if (this._vmHooks._accept && this._vm.accept(visitor) === true) {
      return true;
    }
    if (this.children !== null) {
      const { children: children2 } = this;
      for (let i = 0, ii = children2.length; i < ii; ++i) {
        if (children2[i].accept(visitor) === true) {
          return true;
        }
      }
    }
  }
};
var controllerLookup = /* @__PURE__ */ new WeakMap();
var targetNone = 0;
var targetHost = 1;
var targetShadowRoot = 2;
var targetLocation = 3;
var MountTarget = objectFreeze2({
  none: targetNone,
  host: targetHost,
  shadowRoot: targetShadowRoot,
  location: targetLocation
});
var optionalCeFind = { optional: true };
var optionalCoercionConfigResolver = optionalResource(ICoercionConfiguration);
function createObservers(controller, definition, instance) {
  var _a3, _b3;
  const bindables2 = definition.bindables;
  const observableNames = getOwnPropertyNames(bindables2);
  const length = observableNames.length;
  const locator = controller.container.get(IObserverLocator);
  const hasAggregatedCallbacks = "propertiesChanged" in instance;
  if (length === 0)
    return;
  const queueCallback = hasAggregatedCallbacks ? (() => {
    let changes = {};
    let promise = void 0;
    let changeCount = 0;
    const resolvedPromise = Promise.resolve();
    const callPropertiesChanged = () => {
      if (promise == null) {
        promise = resolvedPromise.then(() => {
          var _a4;
          const $changes = changes;
          changes = {};
          changeCount = 0;
          promise = void 0;
          if (controller.isBound) {
            (_a4 = instance.propertiesChanged) == null ? void 0 : _a4.call(instance, $changes);
            if (changeCount > 0) {
              callPropertiesChanged();
            }
          }
        });
      }
    };
    return (key, newValue, oldValue) => {
      changes[key] = { newValue, oldValue };
      changeCount++;
      callPropertiesChanged();
    };
  })() : noop;
  for (let i = 0; i < length; ++i) {
    const name = observableNames[i];
    const bindable2 = bindables2[name];
    const handler = bindable2.callback;
    const obs = locator.getObserver(instance, name);
    if (bindable2.set !== noop) {
      if (((_a3 = obs.useCoercer) == null ? void 0 : _a3.call(obs, bindable2.set, controller.coercion)) !== true) {
        throw createMappedError5(507, name);
      }
    }
    if (instance[handler] != null || instance.propertyChanged != null || hasAggregatedCallbacks) {
      const callback = (newValue, oldValue) => {
        var _a4, _b4;
        if (controller.isBound) {
          (_a4 = instance[handler]) == null ? void 0 : _a4.call(instance, newValue, oldValue);
          (_b4 = instance.propertyChanged) == null ? void 0 : _b4.call(instance, name, newValue, oldValue);
          queueCallback(name, newValue, oldValue);
        }
      };
      if (((_b3 = obs.useCallback) == null ? void 0 : _b3.call(obs, callback)) !== true) {
        throw createMappedError5(508, name);
      }
    }
  }
}
var AccessScopeAstMap = /* @__PURE__ */ new Map();
var getAccessScopeAst = (key) => {
  let ast = AccessScopeAstMap.get(key);
  if (ast == null) {
    ast = new AccessScopeExpression(key, 0);
    AccessScopeAstMap.set(key, ast);
  }
  return ast;
};
function createWatchers(controller, context, definition, instance) {
  const observerLocator = context.get(IObserverLocator);
  const expressionParser = context.get(IExpressionParser);
  const watches = definition.watches;
  const scope = controller.vmKind === vmkCe ? controller.scope : Scope.create(instance, null, true);
  const ii = watches.length;
  let expression;
  let callback;
  let ast;
  let i = 0;
  for (; ii > i; ++i) {
    ({ expression, callback } = watches[i]);
    callback = isFunction(callback) ? callback : Reflect.get(instance, callback);
    if (!isFunction(callback)) {
      throw createMappedError5(506, callback);
    }
    if (isFunction(expression)) {
      controller.addBinding(new ComputedWatcher(instance, observerLocator, expression, callback, true));
    } else {
      ast = isString(expression) ? expressionParser.parse(expression, etIsProperty3) : getAccessScopeAst(expression);
      controller.addBinding(new ExpressionWatcher(scope, context, observerLocator, ast, callback));
    }
  }
}
function isCustomElementController(value) {
  return value instanceof Controller && value.vmKind === vmkCe;
}
function isCustomElementViewModel(value) {
  return isElementType(value == null ? void 0 : value.constructor);
}
var HooksDefinition = class {
  constructor(target) {
    this._define = "define" in target;
    this._hydrating = "hydrating" in target;
    this._hydrated = "hydrated" in target;
    this._created = "created" in target;
    this._binding = "binding" in target;
    this._bound = "bound" in target;
    this._attaching = "attaching" in target;
    this._attached = "attached" in target;
    this._detaching = "detaching" in target;
    this._unbinding = "unbinding" in target;
    this._dispose = "dispose" in target;
    this._accept = "accept" in target;
  }
};
HooksDefinition.none = new HooksDefinition({});
var defaultShadowOptions = {
  mode: "open"
};
var vmkCe = "customElement";
var vmkCa = "customAttribute";
var vmkSynth = "synthetic";
var none2 = 0;
var activating = 1;
var activated = 2;
var deactivating = 4;
var deactivated = 8;
var released = 16;
var disposed = 32;
var State = objectFreeze2({
  none: none2,
  activating,
  activated,
  deactivating,
  deactivated,
  released,
  disposed
});
function stringifyState(state) {
  const names = [];
  if ((state & activating) === activating) {
    names.push("activating");
  }
  if ((state & activated) === activated) {
    names.push("activated");
  }
  if ((state & deactivating) === deactivating) {
    names.push("deactivating");
  }
  if ((state & deactivated) === deactivated) {
    names.push("deactivated");
  }
  if ((state & released) === released) {
    names.push("released");
  }
  if ((state & disposed) === disposed) {
    names.push("disposed");
  }
  return names.length === 0 ? "none" : names.join("|");
}
var IController = createInterface2("IController");
var IHydrationContext = createInterface2("IHydrationContext");
var HydrationContext = class {
  constructor(controller, instruction, parent) {
    this.instruction = instruction;
    this.parent = parent;
    this.controller = controller;
  }
};
function callDispose(disposable) {
  disposable.dispose();
}
function callCreatedHook(l) {
  l.instance.created(this._vm, this);
}
function callHydratingHook(l) {
  l.instance.hydrating(this._vm, this);
}
function callHydratedHook(l) {
  l.instance.hydrated(this._vm, this);
}
function callBindingHook(l) {
  return l.instance.binding(this._vm, this["$initiator"], this.parent);
}
function callBoundHook(l) {
  return l.instance.bound(this._vm, this["$initiator"], this.parent);
}
function callAttachingHook(l) {
  return l.instance.attaching(this._vm, this["$initiator"], this.parent);
}
function callAttachedHook(l) {
  return l.instance.attached(this._vm, this["$initiator"]);
}
function callDetachingHook(l) {
  return l.instance.detaching(this._vm, this["$initiator"], this.parent);
}
function callUnbindingHook(l) {
  return l.instance.unbinding(this._vm, this["$initiator"], this.parent);
}
var _resolve;
var _reject;
var _retPromise;
var Refs = class {
};
function getRef(node, name) {
  var _a3;
  return ((_a3 = node.$au) == null ? void 0 : _a3[name]) ?? null;
}
function setRef(node, name, controller) {
  (node.$au ?? (node.$au = new Refs()))[name] = controller;
}
var INode = createInterface2("INode");
var IEventTarget = createInterface2("IEventTarget", (x) => x.cachedCallback((handler) => {
  if (handler.has(IAppRoot, true)) {
    return handler.get(IAppRoot).host;
  }
  return handler.get(IPlatform2).document;
}));
var IRenderLocation = createInterface2("IRenderLocation");
var ICssClassMapping = createInterface2("ICssClassMapping");
var effectiveParentNodeOverrides = /* @__PURE__ */ new WeakMap();
function getEffectiveParentNode(node) {
  if (effectiveParentNodeOverrides.has(node)) {
    return effectiveParentNodeOverrides.get(node);
  }
  let containerlessOffset = 0;
  let next = node.nextSibling;
  while (next !== null) {
    if (next.nodeType === 8) {
      switch (next.textContent) {
        case "au-start":
          ++containerlessOffset;
          break;
        case "au-end":
          if (containerlessOffset-- === 0) {
            return next;
          }
      }
    }
    next = next.nextSibling;
  }
  if (node.parentNode === null && node.nodeType === 11) {
    const controller = findElementControllerFor(node, { optional: true });
    if (controller == null) {
      return null;
    }
    if (controller.mountTarget === MountTarget.shadowRoot) {
      return getEffectiveParentNode(controller.host);
    }
  }
  return node.parentNode;
}
function setEffectiveParentNode(childNodeOrNodeSequence, parentNode) {
  if (childNodeOrNodeSequence.platform !== void 0 && !(childNodeOrNodeSequence instanceof childNodeOrNodeSequence.platform.Node)) {
    const nodes = childNodeOrNodeSequence.childNodes;
    for (let i = 0, ii = nodes.length; i < ii; ++i) {
      effectiveParentNodeOverrides.set(nodes[i], parentNode);
    }
  } else {
    effectiveParentNodeOverrides.set(childNodeOrNodeSequence, parentNode);
  }
}
function convertToRenderLocation(node) {
  if (isRenderLocation(node)) {
    return node;
  }
  const locationEnd = node.ownerDocument.createComment("au-end");
  const locationStart = locationEnd.$start = node.ownerDocument.createComment("au-start");
  const parentNode = node.parentNode;
  if (parentNode !== null) {
    parentNode.replaceChild(locationEnd, node);
    parentNode.insertBefore(locationStart, locationEnd);
  }
  return locationEnd;
}
function isRenderLocation(node) {
  return node.textContent === "au-end";
}
var FragmentNodeSequence = class {
  get firstChild() {
    return this._firstChild;
  }
  get lastChild() {
    return this._lastChild;
  }
  constructor(platform, fragment) {
    this.platform = platform;
    this.next = void 0;
    this._isMounted = false;
    this._isLinked = false;
    this.ref = null;
    const targetNodeList = (this.f = fragment).querySelectorAll("au-m");
    let i = 0;
    let ii = targetNodeList.length;
    let targets = this.t = Array(ii);
    let target;
    let marker;
    while (ii > i) {
      marker = targetNodeList[i];
      target = marker.nextSibling;
      marker.remove();
      if (target.nodeType === 8) {
        marker = target;
        (target = target.nextSibling).$start = marker;
      }
      targets[i] = target;
      ++i;
    }
    const childNodeList = fragment.childNodes;
    const childNodes = this.childNodes = Array(ii = childNodeList.length);
    i = 0;
    while (ii > i) {
      childNodes[i] = childNodeList[i];
      ++i;
    }
    this._firstChild = fragment.firstChild;
    this._lastChild = fragment.lastChild;
  }
  findTargets() {
    return this.t;
  }
  insertBefore(refNode) {
    if (this._isLinked && !!this.ref) {
      this.addToLinked();
    } else {
      const parent = refNode.parentNode;
      if (this._isMounted) {
        let current = this._firstChild;
        let next;
        const end = this._lastChild;
        while (current != null) {
          next = current.nextSibling;
          parent.insertBefore(current, refNode);
          if (current === end) {
            break;
          }
          current = next;
        }
      } else {
        this._isMounted = true;
        refNode.parentNode.insertBefore(this.f, refNode);
      }
    }
  }
  appendTo(parent, enhance = false) {
    if (this._isMounted) {
      let current = this._firstChild;
      let next;
      const end = this._lastChild;
      while (current != null) {
        next = current.nextSibling;
        parent.appendChild(current);
        if (current === end) {
          break;
        }
        current = next;
      }
    } else {
      this._isMounted = true;
      if (!enhance) {
        parent.appendChild(this.f);
      }
    }
  }
  remove() {
    if (this._isMounted) {
      this._isMounted = false;
      const fragment = this.f;
      const end = this._lastChild;
      let next;
      let current = this._firstChild;
      while (current !== null) {
        next = current.nextSibling;
        fragment.appendChild(current);
        if (current === end) {
          break;
        }
        current = next;
      }
    }
  }
  addToLinked() {
    const refNode = this.ref;
    const parent = refNode.parentNode;
    if (this._isMounted) {
      let current = this._firstChild;
      let next;
      const end = this._lastChild;
      while (current != null) {
        next = current.nextSibling;
        parent.insertBefore(current, refNode);
        if (current === end) {
          break;
        }
        current = next;
      }
    } else {
      this._isMounted = true;
      parent.insertBefore(this.f, refNode);
    }
  }
  unlink() {
    this._isLinked = false;
    this.next = void 0;
    this.ref = void 0;
  }
  link(next) {
    this._isLinked = true;
    if (isRenderLocation(next)) {
      this.ref = next;
    } else {
      this.next = next;
      this._obtainRefNode();
    }
  }
  /** @internal */
  _obtainRefNode() {
    if (this.next !== void 0) {
      this.ref = this.next.firstChild;
    } else {
      this.ref = void 0;
    }
  }
};
var IWindow = createInterface2("IWindow", (x) => x.callback((handler) => handler.get(IPlatform2).window));
var ILocation = createInterface2("ILocation", (x) => x.callback((handler) => handler.get(IWindow).location));
var IHistory = createInterface2("IHistory", (x) => x.callback((handler) => handler.get(IWindow).history));
var registerHostNode = (container, host, platform = container.get(IPlatform2)) => {
  registerResolver(container, platform.HTMLElement, registerResolver(container, platform.Element, registerResolver(container, INode, new InstanceProvider("ElementResolver", host))));
  return container;
};
function customElement(nameOrDef) {
  return function(target, context) {
    context.addInitializer(function() {
      defineElement(nameOrDef, this);
    });
    return target;
  };
}
function useShadowDOM(targetOrOptions, context) {
  if (targetOrOptions === void 0) {
    return function($target, context2) {
      context2.addInitializer(function() {
        annotateElementMetadata(this, "shadowOptions", { mode: "open" });
      });
    };
  }
  if (!isFunction(targetOrOptions)) {
    return function($target, context2) {
      context2.addInitializer(function() {
        annotateElementMetadata(this, "shadowOptions", targetOrOptions);
      });
    };
  }
  context.addInitializer(function() {
    annotateElementMetadata(this, "shadowOptions", { mode: "open" });
  });
}
function containerless(target, context) {
  if (target === void 0) {
    return function($target, $context) {
      $context.addInitializer(function() {
        markContainerless($target);
      });
    };
  }
  context.addInitializer(function() {
    markContainerless(target);
  });
}
function markContainerless(target) {
  const def2 = getMetadata3(elementBaseName, target);
  if (def2 === void 0) {
    annotateElementMetadata(target, "containerless", true);
    return;
  }
  def2.containerless = true;
}
var definitionLookup = /* @__PURE__ */ new WeakMap();
var CustomElementDefinition = class _CustomElementDefinition {
  get type() {
    return dtElement;
  }
  constructor(Type, name, aliases, key, capture2, template, instructions, dependencies, injectable, needsCompile, surrogates, bindables2, containerless2, shadowOptions, hasSlots, enhance, watches, strict, processContent2) {
    this.Type = Type;
    this.name = name;
    this.aliases = aliases;
    this.key = key;
    this.capture = capture2;
    this.template = template;
    this.instructions = instructions;
    this.dependencies = dependencies;
    this.injectable = injectable;
    this.needsCompile = needsCompile;
    this.surrogates = surrogates;
    this.bindables = bindables2;
    this.containerless = containerless2;
    this.shadowOptions = shadowOptions;
    this.hasSlots = hasSlots;
    this.enhance = enhance;
    this.watches = watches;
    this.strict = strict;
    this.processContent = processContent2;
  }
  static create(nameOrDef, Type = null) {
    if (Type === null) {
      const def2 = nameOrDef;
      if (isString(def2)) {
        throw createMappedError5(761, nameOrDef);
      }
      const name2 = fromDefinitionOrDefault("name", def2, generateElementName2);
      if (isFunction(def2.Type)) {
        Type = def2.Type;
      } else {
        Type = generateElementType(pascalCase(name2));
      }
      for (const bindable2 of Object.values(Bindable.from(def2.bindables))) {
        Bindable._add(bindable2, Type);
      }
      return new _CustomElementDefinition(
        Type,
        name2,
        mergeArrays(def2.aliases),
        fromDefinitionOrDefault("key", def2, () => getElementKeyFrom(name2)),
        fromAnnotationOrDefinitionOrTypeOrDefault("capture", def2, Type, returnFalse),
        fromDefinitionOrDefault("template", def2, returnNull),
        mergeArrays(def2.instructions),
        mergeArrays(getElementAnnotation(Type, "dependencies"), def2.dependencies),
        fromDefinitionOrDefault("injectable", def2, returnNull),
        fromDefinitionOrDefault("needsCompile", def2, returnTrue),
        mergeArrays(def2.surrogates),
        Bindable.from(getElementAnnotation(Type, "bindables"), def2.bindables),
        fromAnnotationOrDefinitionOrTypeOrDefault("containerless", def2, Type, returnFalse),
        fromDefinitionOrDefault("shadowOptions", def2, returnNull),
        fromDefinitionOrDefault("hasSlots", def2, returnFalse),
        fromDefinitionOrDefault("enhance", def2, returnFalse),
        fromDefinitionOrDefault("watches", def2, returnEmptyArray),
        // casting is incorrect, but it's good enough
        fromDefinitionOrDefault("strict", def2, returnUndefined),
        fromAnnotationOrTypeOrDefault("processContent", Type, returnNull)
      );
    }
    if (isString(nameOrDef)) {
      return new _CustomElementDefinition(Type, nameOrDef, mergeArrays(getElementAnnotation(Type, "aliases"), Type.aliases), getElementKeyFrom(nameOrDef), fromAnnotationOrTypeOrDefault("capture", Type, returnFalse), fromAnnotationOrTypeOrDefault("template", Type, returnNull), mergeArrays(getElementAnnotation(Type, "instructions"), Type.instructions), mergeArrays(getElementAnnotation(Type, "dependencies"), Type.dependencies), fromAnnotationOrTypeOrDefault("injectable", Type, returnNull), fromAnnotationOrTypeOrDefault("needsCompile", Type, returnTrue), mergeArrays(getElementAnnotation(Type, "surrogates"), Type.surrogates), Bindable.from(...Bindable.getAll(Type), getElementAnnotation(Type, "bindables"), Type.bindables), fromAnnotationOrTypeOrDefault("containerless", Type, returnFalse), fromAnnotationOrTypeOrDefault("shadowOptions", Type, returnNull), fromAnnotationOrTypeOrDefault("hasSlots", Type, returnFalse), fromAnnotationOrTypeOrDefault("enhance", Type, returnFalse), mergeArrays(Watch.getDefinitions(Type), Type.watches), fromAnnotationOrTypeOrDefault("strict", Type, returnUndefined), fromAnnotationOrTypeOrDefault("processContent", Type, returnNull));
    }
    const name = fromDefinitionOrDefault("name", nameOrDef, generateElementName2);
    for (const bindable2 of Object.values(Bindable.from(nameOrDef.bindables))) {
      Bindable._add(bindable2, Type);
    }
    return new _CustomElementDefinition(Type, name, mergeArrays(getElementAnnotation(Type, "aliases"), nameOrDef.aliases, Type.aliases), getElementKeyFrom(name), fromAnnotationOrDefinitionOrTypeOrDefault("capture", nameOrDef, Type, returnFalse), fromAnnotationOrDefinitionOrTypeOrDefault("template", nameOrDef, Type, returnNull), mergeArrays(getElementAnnotation(Type, "instructions"), nameOrDef.instructions, Type.instructions), mergeArrays(getElementAnnotation(Type, "dependencies"), nameOrDef.dependencies, Type.dependencies), fromAnnotationOrDefinitionOrTypeOrDefault("injectable", nameOrDef, Type, returnNull), fromAnnotationOrDefinitionOrTypeOrDefault("needsCompile", nameOrDef, Type, returnTrue), mergeArrays(getElementAnnotation(Type, "surrogates"), nameOrDef.surrogates, Type.surrogates), Bindable.from(...Bindable.getAll(Type), getElementAnnotation(Type, "bindables"), Type.bindables, nameOrDef.bindables), fromAnnotationOrDefinitionOrTypeOrDefault("containerless", nameOrDef, Type, returnFalse), fromAnnotationOrDefinitionOrTypeOrDefault("shadowOptions", nameOrDef, Type, returnNull), fromAnnotationOrDefinitionOrTypeOrDefault("hasSlots", nameOrDef, Type, returnFalse), fromAnnotationOrDefinitionOrTypeOrDefault("enhance", nameOrDef, Type, returnFalse), mergeArrays(nameOrDef.watches, Watch.getDefinitions(Type), Type.watches), fromAnnotationOrDefinitionOrTypeOrDefault("strict", nameOrDef, Type, returnUndefined), fromAnnotationOrDefinitionOrTypeOrDefault("processContent", nameOrDef, Type, returnNull));
  }
  static getOrCreate(partialDefinition) {
    if (partialDefinition instanceof _CustomElementDefinition) {
      return partialDefinition;
    }
    if (definitionLookup.has(partialDefinition)) {
      return definitionLookup.get(partialDefinition);
    }
    const definition = _CustomElementDefinition.create(partialDefinition);
    definitionLookup.set(partialDefinition, definition);
    defineMetadata3(definition, definition.Type, elementBaseName);
    return definition;
  }
  register(container, aliasName) {
    const $Type = this.Type;
    const key = typeof aliasName === "string" ? getElementKeyFrom(aliasName) : this.key;
    const aliases = this.aliases;
    if (container.has(key, false)) {
      console.warn(createMappedError5(153, this.name));
      return;
    }
    container.register(container.has($Type, false) ? null : singletonRegistration3($Type, $Type), aliasRegistration2($Type, key), ...aliases.map((alias2) => aliasRegistration2($Type, getElementKeyFrom(alias2))));
  }
  toString() {
    return `au:ce:${this.name}`;
  }
};
var defaultForOpts = {
  name: void 0,
  searchParents: false,
  optional: false
};
var returnNull = () => null;
var returnUndefined = () => void 0;
var returnFalse = () => false;
var returnTrue = () => true;
var returnEmptyArray = () => emptyArray;
var elementTypeName = "custom-element";
var elementBaseName = getResourceKeyFor(elementTypeName);
var getElementKeyFrom = (name) => `${elementBaseName}:${name}`;
var generateElementName2 = /* @__PURE__ */ ((id2) => () => `unnamed-${++id2}`)(0);
var annotateElementMetadata = (Type, prop, value) => {
  defineMetadata3(value, Type, getAnnotationKeyFor2(prop));
};
var defineElement = (nameOrDef, Type) => {
  const definition = CustomElementDefinition.create(nameOrDef, Type);
  const $Type = definition.Type;
  defineMetadata3(definition, $Type, elementBaseName, resourceBaseName);
  return $Type;
};
var isElementType = (value) => {
  var _a3;
  return isFunction(value) && (hasMetadata(elementBaseName, value) || ((_a3 = value.$au) == null ? void 0 : _a3.type) === elementTypeName);
};
var findElementControllerFor = (node, opts = defaultForOpts) => {
  if (opts.name === void 0 && opts.searchParents !== true) {
    const controller = getRef(node, elementBaseName);
    if (controller === null) {
      if (opts.optional === true) {
        return null;
      }
      throw createMappedError5(762, node);
    }
    return controller;
  }
  if (opts.name !== void 0) {
    if (opts.searchParents !== true) {
      const controller = getRef(node, elementBaseName);
      if (controller === null) {
        throw createMappedError5(763, node);
      }
      if (controller.is(opts.name)) {
        return controller;
      }
      return void 0;
    }
    let cur2 = node;
    let foundAController = false;
    while (cur2 !== null) {
      const controller = getRef(cur2, elementBaseName);
      if (controller !== null) {
        foundAController = true;
        if (controller.is(opts.name)) {
          return controller;
        }
      }
      cur2 = getEffectiveParentNode(cur2);
    }
    if (foundAController) {
      return void 0;
    }
    throw createMappedError5(764, node);
  }
  let cur = node;
  while (cur !== null) {
    const controller = getRef(cur, elementBaseName);
    if (controller !== null) {
      return controller;
    }
    cur = getEffectiveParentNode(cur);
  }
  throw createMappedError5(765, node);
};
var getElementAnnotation = (Type, prop) => getMetadata3(getAnnotationKeyFor2(prop), Type);
var getElementDefinition = (Type) => {
  const def2 = getMetadata3(elementBaseName, Type) ?? getDefinitionFromStaticAu(Type, elementTypeName, CustomElementDefinition.create);
  if (def2 == null) {
    throw createMappedError5(760, Type);
  }
  return def2;
};
var createElementInjectable = () => {
  const $injectable = {
    // Old code is kept around. Needs to be refactored when TC39 supports argument decorator.
    // function(target: Injectable | AbstractInjectable, property: string | symbol | undefined, index?: number): Injectable | AbstractInjectable {
    //   const annotationParamtypes = DI.getOrCreateAnnotationParamTypes(target as Constructable);
    //   annotationParamtypes[index!] = $injectable;
    //   return target;
    // },
    $isInterface: false,
    register() {
      return {
        $isResolver: true,
        resolve(container, requestor) {
          if (requestor.has($injectable, true)) {
            return requestor.get($injectable);
          } else {
            return null;
          }
        }
      };
    }
  };
  return $injectable;
};
var generateElementType = /* @__PURE__ */ function() {
  const nameDescriptor = {
    value: "",
    writable: false,
    enumerable: false,
    configurable: true
  };
  const defaultProto = {};
  return function(name, proto = defaultProto) {
    const Type = class Anonymous {
    };
    nameDescriptor.value = name;
    def(Type, "name", nameDescriptor);
    if (proto !== defaultProto) {
      objectAssign2(Type.prototype, proto);
    }
    return Type;
  };
}();
var CustomElement = objectFreeze2({
  name: elementBaseName,
  keyFrom: getElementKeyFrom,
  isType: isElementType,
  for: findElementControllerFor,
  define: defineElement,
  getDefinition: getElementDefinition,
  annotate: annotateElementMetadata,
  getAnnotation: getElementAnnotation,
  generateName: generateElementName2,
  createInjectable: createElementInjectable,
  generateType: generateElementType,
  find(c, name) {
    const Type = c.find(elementTypeName, name);
    return Type == null ? null : getMetadata3(elementBaseName, Type) ?? getDefinitionFromStaticAu(Type, elementTypeName, CustomElementDefinition.create) ?? null;
  }
});
var pcHookMetadataProperty = getAnnotationKeyFor2("processContent");
function processContent(hook) {
  return hook === void 0 ? function(target, context) {
    if (!context.static || context.kind !== "method")
      throw createMappedError5(766, target);
    context.addInitializer(function() {
      defineMetadata3(target, this, pcHookMetadataProperty);
    });
  } : function(target, context) {
    context.addInitializer(function() {
      if (isString(hook) || isSymbol(hook)) {
        hook = this[hook];
      }
      if (!isFunction(hook))
        throw createMappedError5(766, hook);
      const def2 = getMetadata3(elementBaseName, this);
      if (def2 !== void 0) {
        def2.processContent = hook;
      } else {
        defineMetadata3(hook, this, pcHookMetadataProperty);
      }
    });
    return target;
  };
}
function capture(targetOrFilter) {
  return function($target, context) {
    const value = isFunction(targetOrFilter) ? targetOrFilter : true;
    context.addInitializer(function() {
      annotateElementMetadata(this, "capture", value);
      if (isElementType(this)) {
        getElementDefinition(this).capture = value;
      }
    });
  };
}
var IAppRoot = createInterface2("IAppRoot");
var AppRoot = class {
  get controller() {
    return this._controller;
  }
  constructor(config, container, rootProvider, enhance = false) {
    this.config = config;
    this.container = container;
    this._hydratePromise = void 0;
    this._useOwnAppTasks = enhance;
    const host = this.host = config.host;
    rootProvider.prepare(this);
    registerResolver(container, IEventTarget, new InstanceProvider("IEventTarget", host));
    registerHostNode(container, host, this.platform = this._createPlatform(container, host));
    this._hydratePromise = onResolve(this._runAppTasks("creating"), () => {
      if (!config.allowActionlessForm !== false) {
        host.addEventListener("submit", (e) => {
          const target = e.target;
          const noAction = !target.getAttribute("action");
          if (target.tagName === "FORM" && noAction) {
            e.preventDefault();
          }
        }, false);
      }
      const childCtn = enhance ? container : container.createChild();
      const component = config.component;
      let instance;
      if (isFunction(component)) {
        instance = childCtn.invoke(component);
        instanceRegistration2(component, instance);
      } else {
        instance = config.component;
      }
      const hydrationInst = { hydrate: false, projections: null };
      const definition = enhance ? CustomElementDefinition.create({ name: generateElementName2(), template: this.host, enhance: true, strict: config.strictBinding }) : void 0;
      const controller = this._controller = Controller.$el(childCtn, instance, host, hydrationInst, definition);
      controller._hydrateCustomElement(hydrationInst);
      return onResolve(this._runAppTasks("hydrating"), () => {
        controller._hydrate();
        return onResolve(this._runAppTasks("hydrated"), () => {
          controller._hydrateChildren();
          this._hydratePromise = void 0;
        });
      });
    });
  }
  activate() {
    return onResolve(this._hydratePromise, () => {
      return onResolve(this._runAppTasks("activating"), () => {
        return onResolve(this._controller.activate(this._controller, null, void 0), () => {
          return this._runAppTasks("activated");
        });
      });
    });
  }
  deactivate() {
    return onResolve(this._runAppTasks("deactivating"), () => {
      return onResolve(this._controller.deactivate(this._controller, null), () => {
        return this._runAppTasks("deactivated");
      });
    });
  }
  /** @internal */
  _runAppTasks(slot) {
    const container = this.container;
    const appTasks = this._useOwnAppTasks && !container.has(IAppTask, false) ? [] : container.getAll(IAppTask);
    return onResolveAll(...appTasks.reduce((results, task2) => {
      if (task2.slot === slot) {
        results.push(task2.run());
      }
      return results;
    }, []));
  }
  /** @internal */
  _createPlatform(container, host) {
    let p;
    if (!container.has(IPlatform2, false)) {
      if (host.ownerDocument.defaultView === null) {
        throw createMappedError5(
          769
          /* ErrorNames.invalid_platform_impl */
        );
      }
      p = new BrowserPlatform(host.ownerDocument.defaultView);
      container.register(instanceRegistration2(IPlatform2, p));
    } else {
      p = container.get(IPlatform2);
    }
    return p;
  }
  dispose() {
    var _a3;
    (_a3 = this._controller) == null ? void 0 : _a3.dispose();
  }
};
var IAurelia = createInterface2("IAurelia");
var Aurelia = class _Aurelia {
  get isRunning() {
    return this._isRunning;
  }
  get isStarting() {
    return this._isStarting;
  }
  get isStopping() {
    return this._isStopping;
  }
  get root() {
    if (this._root == null) {
      if (this.next == null) {
        throw createMappedError5(
          767
          /* ErrorNames.root_not_found */
        );
      }
      return this.next;
    }
    return this._root;
  }
  constructor(container = DI.createContainer()) {
    this.container = container;
    this._isRunning = false;
    this._isStarting = false;
    this._isStopping = false;
    this._root = void 0;
    this.next = void 0;
    this._startPromise = void 0;
    this._stopPromise = void 0;
    if (container.has(IAurelia, true) || container.has(_Aurelia, true)) {
      throw createMappedError5(
        768
        /* ErrorNames.aurelia_instance_existed_in_container */
      );
    }
    registerResolver(container, IAurelia, new InstanceProvider("IAurelia", this));
    registerResolver(container, _Aurelia, new InstanceProvider("Aurelia", this));
    registerResolver(container, IAppRoot, this._rootProvider = new InstanceProvider("IAppRoot"));
  }
  register(...params) {
    this.container.register(...params);
    return this;
  }
  app(config) {
    this.next = new AppRoot(config, this.container, this._rootProvider);
    return this;
  }
  /**
   * @param parentController - The owning controller of the view created by this enhance call
   */
  enhance(config) {
    const container = config.container ?? this.container.createChild();
    const rootProvider = registerResolver(container, IAppRoot, new InstanceProvider("IAppRoot"));
    const appRoot = new AppRoot({ host: config.host, component: config.component }, container, rootProvider, true);
    return onResolve(appRoot.activate(), () => appRoot);
  }
  async waitForIdle() {
    const platform = this.root.platform;
    await platform.domQueue.yield();
    await platform.taskQueue.yield();
  }
  start(root = this.next) {
    if (root == null) {
      throw createMappedError5(
        770
        /* ErrorNames.no_composition_root */
      );
    }
    if (isPromise(this._startPromise)) {
      return this._startPromise;
    }
    return this._startPromise = onResolve(this.stop(), () => {
      Reflect.set(root.host, "$aurelia", this);
      this._rootProvider.prepare(this._root = root);
      this._isStarting = true;
      return onResolve(root.activate(), () => {
        this._isRunning = true;
        this._isStarting = false;
        this._startPromise = void 0;
        this._dispatchEvent(root, "au-started", root.host);
      });
    });
  }
  stop(dispose2 = false) {
    if (isPromise(this._stopPromise)) {
      return this._stopPromise;
    }
    if (this._isRunning === true) {
      const root = this._root;
      this._isRunning = false;
      this._isStopping = true;
      return this._stopPromise = onResolve(root.deactivate(), () => {
        Reflect.deleteProperty(root.host, "$aurelia");
        if (dispose2) {
          root.dispose();
        }
        this._root = void 0;
        this._rootProvider.dispose();
        this._isStopping = false;
        this._dispatchEvent(root, "au-stopped", root.host);
      });
    }
  }
  dispose() {
    if (this._isRunning || this._isStopping) {
      throw createMappedError5(
        771
        /* ErrorNames.invalid_dispose_call */
      );
    }
    this.container.dispose();
  }
  /** @internal */
  _dispatchEvent(root, name, target) {
    const ev = new root.platform.window.CustomEvent(name, { detail: this, bubbles: true, cancelable: true });
    target.dispatchEvent(ev);
  }
};
var ISVGAnalyzer = createInterface2("ISVGAnalyzer", (x) => x.singleton(NoopSVGAnalyzer));
var o = (keys) => {
  const lookup2 = createLookup();
  keys = isString(keys) ? keys.split(" ") : keys;
  let key;
  for (key of keys) {
    lookup2[key] = true;
  }
  return lookup2;
};
var NoopSVGAnalyzer = class {
  isStandardSvgAttribute(_node, _attributeName) {
    return false;
  }
};
var SVGAnalyzer = class {
  static register(container) {
    container.register(singletonRegistration3(this, this), aliasRegistration2(this, ISVGAnalyzer));
  }
  constructor() {
    this._svgElements = objectAssign2(createLookup(), {
      "a": o("class externalResourcesRequired id onactivate onclick onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup requiredExtensions requiredFeatures style systemLanguage target transform xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xml:lang xml:space"),
      "altGlyph": o("class dx dy externalResourcesRequired format glyphRef id onactivate onclick onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup requiredExtensions requiredFeatures rotate style systemLanguage x xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xml:lang xml:space y"),
      "altglyph": createLookup(),
      "altGlyphDef": o("id xml:base xml:lang xml:space"),
      "altglyphdef": createLookup(),
      "altGlyphItem": o("id xml:base xml:lang xml:space"),
      "altglyphitem": createLookup(),
      "animate": o("accumulate additive attributeName attributeType begin by calcMode dur end externalResourcesRequired fill from id keySplines keyTimes max min onbegin onend onload onrepeat repeatCount repeatDur requiredExtensions requiredFeatures restart systemLanguage to values xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xml:lang xml:space"),
      "animateColor": o("accumulate additive attributeName attributeType begin by calcMode dur end externalResourcesRequired fill from id keySplines keyTimes max min onbegin onend onload onrepeat repeatCount repeatDur requiredExtensions requiredFeatures restart systemLanguage to values xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xml:lang xml:space"),
      "animateMotion": o("accumulate additive begin by calcMode dur end externalResourcesRequired fill from id keyPoints keySplines keyTimes max min onbegin onend onload onrepeat origin path repeatCount repeatDur requiredExtensions requiredFeatures restart rotate systemLanguage to values xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xml:lang xml:space"),
      "animateTransform": o("accumulate additive attributeName attributeType begin by calcMode dur end externalResourcesRequired fill from id keySplines keyTimes max min onbegin onend onload onrepeat repeatCount repeatDur requiredExtensions requiredFeatures restart systemLanguage to type values xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xml:lang xml:space"),
      "circle": o("class cx cy externalResourcesRequired id onactivate onclick onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup r requiredExtensions requiredFeatures style systemLanguage transform xml:base xml:lang xml:space"),
      "clipPath": o("class clipPathUnits externalResourcesRequired id requiredExtensions requiredFeatures style systemLanguage transform xml:base xml:lang xml:space"),
      "color-profile": o("id local name rendering-intent xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xml:lang xml:space"),
      "cursor": o("externalResourcesRequired id requiredExtensions requiredFeatures systemLanguage x xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xml:lang xml:space y"),
      "defs": o("class externalResourcesRequired id onactivate onclick onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup requiredExtensions requiredFeatures style systemLanguage transform xml:base xml:lang xml:space"),
      "desc": o("class id style xml:base xml:lang xml:space"),
      "ellipse": o("class cx cy externalResourcesRequired id onactivate onclick onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup requiredExtensions requiredFeatures rx ry style systemLanguage transform xml:base xml:lang xml:space"),
      "feBlend": o("class height id in in2 mode result style width x xml:base xml:lang xml:space y"),
      "feColorMatrix": o("class height id in result style type values width x xml:base xml:lang xml:space y"),
      "feComponentTransfer": o("class height id in result style width x xml:base xml:lang xml:space y"),
      "feComposite": o("class height id in in2 k1 k2 k3 k4 operator result style width x xml:base xml:lang xml:space y"),
      "feConvolveMatrix": o("bias class divisor edgeMode height id in kernelMatrix kernelUnitLength order preserveAlpha result style targetX targetY width x xml:base xml:lang xml:space y"),
      "feDiffuseLighting": o("class diffuseConstant height id in kernelUnitLength result style surfaceScale width x xml:base xml:lang xml:space y"),
      "feDisplacementMap": o("class height id in in2 result scale style width x xChannelSelector xml:base xml:lang xml:space y yChannelSelector"),
      "feDistantLight": o("azimuth elevation id xml:base xml:lang xml:space"),
      "feFlood": o("class height id result style width x xml:base xml:lang xml:space y"),
      "feFuncA": o("amplitude exponent id intercept offset slope tableValues type xml:base xml:lang xml:space"),
      "feFuncB": o("amplitude exponent id intercept offset slope tableValues type xml:base xml:lang xml:space"),
      "feFuncG": o("amplitude exponent id intercept offset slope tableValues type xml:base xml:lang xml:space"),
      "feFuncR": o("amplitude exponent id intercept offset slope tableValues type xml:base xml:lang xml:space"),
      "feGaussianBlur": o("class height id in result stdDeviation style width x xml:base xml:lang xml:space y"),
      "feImage": o("class externalResourcesRequired height id preserveAspectRatio result style width x xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xml:lang xml:space y"),
      "feMerge": o("class height id result style width x xml:base xml:lang xml:space y"),
      "feMergeNode": o("id xml:base xml:lang xml:space"),
      "feMorphology": o("class height id in operator radius result style width x xml:base xml:lang xml:space y"),
      "feOffset": o("class dx dy height id in result style width x xml:base xml:lang xml:space y"),
      "fePointLight": o("id x xml:base xml:lang xml:space y z"),
      "feSpecularLighting": o("class height id in kernelUnitLength result specularConstant specularExponent style surfaceScale width x xml:base xml:lang xml:space y"),
      "feSpotLight": o("id limitingConeAngle pointsAtX pointsAtY pointsAtZ specularExponent x xml:base xml:lang xml:space y z"),
      "feTile": o("class height id in result style width x xml:base xml:lang xml:space y"),
      "feTurbulence": o("baseFrequency class height id numOctaves result seed stitchTiles style type width x xml:base xml:lang xml:space y"),
      "filter": o("class externalResourcesRequired filterRes filterUnits height id primitiveUnits style width x xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xml:lang xml:space y"),
      "font": o("class externalResourcesRequired horiz-adv-x horiz-origin-x horiz-origin-y id style vert-adv-y vert-origin-x vert-origin-y xml:base xml:lang xml:space"),
      "font-face": o("accent-height alphabetic ascent bbox cap-height descent font-family font-size font-stretch font-style font-variant font-weight hanging id ideographic mathematical overline-position overline-thickness panose-1 slope stemh stemv strikethrough-position strikethrough-thickness underline-position underline-thickness unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical widths x-height xml:base xml:lang xml:space"),
      "font-face-format": o("id string xml:base xml:lang xml:space"),
      "font-face-name": o("id name xml:base xml:lang xml:space"),
      "font-face-src": o("id xml:base xml:lang xml:space"),
      "font-face-uri": o("id xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xml:lang xml:space"),
      "foreignObject": o("class externalResourcesRequired height id onactivate onclick onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup requiredExtensions requiredFeatures style systemLanguage transform width x xml:base xml:lang xml:space y"),
      "g": o("class externalResourcesRequired id onactivate onclick onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup requiredExtensions requiredFeatures style systemLanguage transform xml:base xml:lang xml:space"),
      "glyph": o("arabic-form class d glyph-name horiz-adv-x id lang orientation style unicode vert-adv-y vert-origin-x vert-origin-y xml:base xml:lang xml:space"),
      "glyphRef": o("class dx dy format glyphRef id style x xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xml:lang xml:space y"),
      "glyphref": createLookup(),
      "hkern": o("g1 g2 id k u1 u2 xml:base xml:lang xml:space"),
      "image": o("class externalResourcesRequired height id onactivate onclick onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup preserveAspectRatio requiredExtensions requiredFeatures style systemLanguage transform width x xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xml:lang xml:space y"),
      "line": o("class externalResourcesRequired id onactivate onclick onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup requiredExtensions requiredFeatures style systemLanguage transform x1 x2 xml:base xml:lang xml:space y1 y2"),
      "linearGradient": o("class externalResourcesRequired gradientTransform gradientUnits id spreadMethod style x1 x2 xlink:arcrole xlink:href xlink:role xlink:title xlink:type xml:base xml:lang xml:space y1 y2"),
      "marker": o("class externalResourcesRequired id markerHeight markerUnits markerWidth orient preserveAspectRatio refX refY style viewBox xml:base xml:lang xml:space"),
      "mask": o("class externalResourcesRequired height id maskContentUnits maskUnits requiredExtensions requiredFeatures style systemLanguage width x xml:base xml:lang xml:space y"),
      "metadata": o("id xml:base xml:lang xml:space"),
      "missing-glyph": o("class d horiz-adv-x id style vert-adv-y vert-origin-x vert-origin-y xml:base xml:lang xml:space"),
      "mpath": o("externalResourcesRequired id xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xml:lang xml:space"),
      "path": o("class d externalResourcesRequired id onactivate onclick onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup pathLength requiredExtensions requiredFeatures style systemLanguage transform xml:base xml:lang xml:space"),
      "pattern": o("class externalResourcesRequired height id patternContentUnits patternTransform patternUnits preserveAspectRatio requiredExtensions requiredFeatures style systemLanguage viewBox width x xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xml:lang xml:space y"),
      "polygon": o("class externalResourcesRequired id onactivate onclick onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup points requiredExtensions requiredFeatures style systemLanguage transform xml:base xml:lang xml:space"),
      "polyline": o("class externalResourcesRequired id onactivate onclick onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup points requiredExtensions requiredFeatures style systemLanguage transform xml:base xml:lang xml:space"),
      "radialGradient": o("class cx cy externalResourcesRequired fx fy gradientTransform gradientUnits id r spreadMethod style xlink:arcrole xlink:href xlink:role xlink:title xlink:type xml:base xml:lang xml:space"),
      "rect": o("class externalResourcesRequired height id onactivate onclick onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup requiredExtensions requiredFeatures rx ry style systemLanguage transform width x xml:base xml:lang xml:space y"),
      "script": o("externalResourcesRequired id type xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xml:lang xml:space"),
      "set": o("attributeName attributeType begin dur end externalResourcesRequired fill id max min onbegin onend onload onrepeat repeatCount repeatDur requiredExtensions requiredFeatures restart systemLanguage to xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xml:lang xml:space"),
      "stop": o("class id offset style xml:base xml:lang xml:space"),
      "style": o("id media title type xml:base xml:lang xml:space"),
      "svg": o("baseProfile class contentScriptType contentStyleType externalResourcesRequired height id onabort onactivate onclick onerror onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup onresize onscroll onunload onzoom preserveAspectRatio requiredExtensions requiredFeatures style systemLanguage version viewBox width x xml:base xml:lang xml:space y zoomAndPan"),
      "switch": o("class externalResourcesRequired id onactivate onclick onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup requiredExtensions requiredFeatures style systemLanguage transform xml:base xml:lang xml:space"),
      "symbol": o("class externalResourcesRequired id onactivate onclick onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup preserveAspectRatio style viewBox xml:base xml:lang xml:space"),
      "text": o("class dx dy externalResourcesRequired id lengthAdjust onactivate onclick onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup requiredExtensions requiredFeatures rotate style systemLanguage textLength transform x xml:base xml:lang xml:space y"),
      "textPath": o("class externalResourcesRequired id lengthAdjust method onactivate onclick onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup requiredExtensions requiredFeatures spacing startOffset style systemLanguage textLength xlink:arcrole xlink:href xlink:role xlink:title xlink:type xml:base xml:lang xml:space"),
      "title": o("class id style xml:base xml:lang xml:space"),
      "tref": o("class dx dy externalResourcesRequired id lengthAdjust onactivate onclick onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup requiredExtensions requiredFeatures rotate style systemLanguage textLength x xlink:arcrole xlink:href xlink:role xlink:title xlink:type xml:base xml:lang xml:space y"),
      "tspan": o("class dx dy externalResourcesRequired id lengthAdjust onactivate onclick onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup requiredExtensions requiredFeatures rotate style systemLanguage textLength x xml:base xml:lang xml:space y"),
      "use": o("class externalResourcesRequired height id onactivate onclick onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup requiredExtensions requiredFeatures style systemLanguage transform width x xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xml:lang xml:space y"),
      "view": o("externalResourcesRequired id preserveAspectRatio viewBox viewTarget xml:base xml:lang xml:space zoomAndPan"),
      "vkern": o("g1 g2 id k u1 u2 xml:base xml:lang xml:space")
    });
    this._svgPresentationElements = o("a altGlyph animate animateColor circle clipPath defs ellipse feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feFlood feGaussianBlur feImage feMerge feMorphology feOffset feSpecularLighting feTile feTurbulence filter font foreignObject g glyph glyphRef image line linearGradient marker mask missing-glyph path pattern polygon polyline radialGradient rect stop svg switch symbol text textPath tref tspan use");
    this._svgPresentationAttributes = o("alignment-baseline baseline-shift clip-path clip-rule clip color-interpolation-filters color-interpolation color-profile color-rendering color cursor direction display dominant-baseline enable-background fill-opacity fill-rule fill filter flood-color flood-opacity font-family font-size-adjust font-size font-stretch font-style font-variant font-weight glyph-orientation-horizontal glyph-orientation-vertical image-rendering kerning letter-spacing lighting-color marker-end marker-mid marker-start mask opacity overflow pointer-events shape-rendering stop-color stop-opacity stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width stroke text-anchor text-decoration text-rendering unicode-bidi visibility word-spacing writing-mode");
    const platform = resolve(IPlatform2);
    this.SVGElement = platform.globalThis.SVGElement;
    const div = platform.document.createElement("div");
    div.innerHTML = "<svg><altGlyph /></svg>";
    if (div.firstElementChild.nodeName === "altglyph") {
      const svg = this._svgElements;
      let tmp = svg.altGlyph;
      svg.altGlyph = svg.altglyph;
      svg.altglyph = tmp;
      tmp = svg.altGlyphDef;
      svg.altGlyphDef = svg.altglyphdef;
      svg.altglyphdef = tmp;
      tmp = svg.altGlyphItem;
      svg.altGlyphItem = svg.altglyphitem;
      svg.altglyphitem = tmp;
      tmp = svg.glyphRef;
      svg.glyphRef = svg.glyphref;
      svg.glyphref = tmp;
    }
  }
  isStandardSvgAttribute(node, attributeName) {
    var _a3;
    if (!(node instanceof this.SVGElement)) {
      return false;
    }
    return this._svgPresentationElements[node.nodeName] === true && this._svgPresentationAttributes[attributeName] === true || ((_a3 = this._svgElements[node.nodeName]) == null ? void 0 : _a3[attributeName]) === true;
  }
};
var AttrMapper = class {
  constructor() {
    this.fns = [];
    this._tagAttrMap = createLookup();
    this._globalAttrMap = createLookup();
    this.svg = resolve(ISVGAnalyzer);
    this.useMapping({
      LABEL: { for: "htmlFor" },
      IMG: { usemap: "useMap" },
      INPUT: {
        maxlength: "maxLength",
        minlength: "minLength",
        formaction: "formAction",
        formenctype: "formEncType",
        formmethod: "formMethod",
        formnovalidate: "formNoValidate",
        formtarget: "formTarget",
        inputmode: "inputMode"
      },
      TEXTAREA: { maxlength: "maxLength" },
      TD: { rowspan: "rowSpan", colspan: "colSpan" },
      TH: { rowspan: "rowSpan", colspan: "colSpan" }
    });
    this.useGlobalMapping({
      accesskey: "accessKey",
      contenteditable: "contentEditable",
      tabindex: "tabIndex",
      textcontent: "textContent",
      innerhtml: "innerHTML",
      scrolltop: "scrollTop",
      scrollleft: "scrollLeft",
      readonly: "readOnly"
    });
  }
  /**
   * Allow application to teach Aurelia how to define how to map attributes to properties
   * based on element tagName
   */
  useMapping(config) {
    var _a3;
    let newAttrMapping;
    let targetAttrMapping;
    let tagName;
    let attr;
    for (tagName in config) {
      newAttrMapping = config[tagName];
      targetAttrMapping = (_a3 = this._tagAttrMap)[tagName] ?? (_a3[tagName] = createLookup());
      for (attr in newAttrMapping) {
        if (targetAttrMapping[attr] !== void 0) {
          throw createError2(attr, tagName);
        }
        targetAttrMapping[attr] = newAttrMapping[attr];
      }
    }
  }
  /**
   * Allow applications to teach Aurelia how to define how to map attributes to properties
   * for all elements
   */
  useGlobalMapping(config) {
    const mapper = this._globalAttrMap;
    for (const attr in config) {
      if (mapper[attr] !== void 0) {
        throw createError2(attr, "*");
      }
      mapper[attr] = config[attr];
    }
  }
  /**
   * Add a given function to a list of fns that will be used
   * to check if `'bind'` command can be understood as `'two-way'` command.
   */
  useTwoWay(fn) {
    this.fns.push(fn);
  }
  /**
   * Returns true if an attribute should be two way bound based on an element
   */
  isTwoWay(node, attrName) {
    return shouldDefaultToTwoWay(node, attrName) || this.fns.length > 0 && this.fns.some((fn) => fn(node, attrName));
  }
  /**
   * Retrieves the mapping information this mapper have for an attribute on an element
   */
  map(node, attr) {
    var _a3;
    return ((_a3 = this._tagAttrMap[node.nodeName]) == null ? void 0 : _a3[attr]) ?? this._globalAttrMap[attr] ?? (isDataAttribute(node, attr, this.svg) ? attr : null);
  }
};
AttrMapper.register = createImplementationRegister(IAttrMapper);
function shouldDefaultToTwoWay(element, attr) {
  switch (element.nodeName) {
    case "INPUT":
      switch (element.type) {
        case "checkbox":
        case "radio":
          return attr === "checked";
        // note:
        // ideally, it should check for corresponding input type first
        // as 'files' shouldn't be two way on a number input, for example
        // but doing it this way is acceptable-ish, as the common user expectations,
        // and the behavior of the control for these properties are the same,
        // regardless the type of the <input>
        default:
          return attr === "value" || attr === "files" || attr === "value-as-number" || attr === "value-as-date";
      }
    case "TEXTAREA":
    case "SELECT":
      return attr === "value";
    default:
      switch (attr) {
        case "textcontent":
        case "innerhtml":
          return element.hasAttribute("contenteditable");
        case "scrolltop":
        case "scrollleft":
          return true;
        default:
          return false;
      }
  }
}
function createError2(attr, tagName) {
  return createMappedError5(719, attr, tagName);
}
var RuntimeTemplateCompilerImplementation = {
  register(container) {
    container.register(TemplateCompiler, AttrMapper, ResourceResolver);
  }
};
var BindablesInfo = class {
  constructor(attrs, bindables2, primary) {
    this.attrs = attrs;
    this.bindables = bindables2;
    this.primary = primary;
  }
};
var ResourceResolver = class {
  constructor() {
    this._resourceCache = /* @__PURE__ */ new WeakMap();
    this._bindableCache = /* @__PURE__ */ new WeakMap();
  }
  el(c, name) {
    let record = this._resourceCache.get(c);
    if (record == null) {
      this._resourceCache.set(c, record = new RecordCache());
    }
    return name in record._element ? record._element[name] : record._element[name] = CustomElement.find(c, name);
  }
  attr(c, name) {
    let record = this._resourceCache.get(c);
    if (record == null) {
      this._resourceCache.set(c, record = new RecordCache());
    }
    return name in record._attr ? record._attr[name] : record._attr[name] = CustomAttribute.find(c, name);
  }
  bindables(def2) {
    let info2 = this._bindableCache.get(def2);
    if (info2 == null) {
      const bindables2 = def2.bindables;
      const attrs = createLookup();
      let bindable2;
      let prop;
      let hasPrimary = false;
      let primary;
      let attr;
      for (prop in bindables2) {
        bindable2 = bindables2[prop];
        attr = bindable2.attribute;
        if (bindable2.primary === true) {
          if (hasPrimary) {
            throw createMappedError5(714, def2);
          }
          hasPrimary = true;
          primary = bindable2;
        } else if (!hasPrimary && primary == null) {
          primary = bindable2;
        }
        attrs[attr] = BindableDefinition.create(prop, bindable2);
      }
      if (bindable2 == null && def2.type === "custom-attribute") {
        primary = attrs.value = BindableDefinition.create("value", { mode: def2.defaultBindingMode ?? defaultMode });
      }
      this._bindableCache.set(def2, info2 = new BindablesInfo(attrs, bindables2, primary ?? null));
    }
    return info2;
  }
};
ResourceResolver.register = createImplementationRegister(IResourceResolver);
var RecordCache = class {
  constructor() {
    this._element = createLookup();
    this._attr = createLookup();
  }
};
var nsMap = createLookup();
var AttributeNSAccessor = class _AttributeNSAccessor {
  static forNs(ns) {
    return nsMap[ns] ?? (nsMap[ns] = new _AttributeNSAccessor(ns));
  }
  constructor(ns) {
    this.ns = ns;
    this.type = atNode2 | atLayout2;
  }
  getValue(obj, propertyKey) {
    return obj.getAttributeNS(this.ns, propertyKey);
  }
  setValue(newValue, obj, key) {
    if (newValue == null) {
      obj.removeAttributeNS(this.ns, key);
    } else {
      obj.setAttributeNS(this.ns, key, newValue);
    }
  }
};
(() => {
  mixinNoopSubscribable(AttributeNSAccessor);
})();
var DataAttributeAccessor = class {
  constructor() {
    this.type = atNode2 | atLayout2;
  }
  getValue(obj, key) {
    return obj.getAttribute(key);
  }
  setValue(newValue, obj, key) {
    if (newValue == null) {
      obj.removeAttribute(key);
    } else {
      obj.setAttribute(key, newValue);
    }
  }
};
(() => {
  mixinNoopSubscribable(DataAttributeAccessor);
})();
var attrAccessor = new DataAttributeAccessor();
var SelectValueObserver = class _SelectValueObserver {
  /** @internal */
  static _getSelectedOptions(options) {
    const selection = [];
    if (options.length === 0) {
      return selection;
    }
    const ii = options.length;
    let i = 0;
    let option;
    while (ii > i) {
      option = options[i];
      if (option.selected) {
        selection[selection.length] = hasOwnProperty.call(option, "model") ? option.model : option.value;
      }
      ++i;
    }
    return selection;
  }
  /** @internal */
  static _defaultMatcher(a, b) {
    return a === b;
  }
  constructor(obj, _key, config, observerLocator) {
    this.type = atNode2 | atObserver2 | atLayout2;
    this._value = void 0;
    this._oldValue = void 0;
    this._hasChanges = false;
    this._arrayObserver = void 0;
    this._nodeObserver = void 0;
    this._observing = false;
    this._listened = false;
    this._el = obj;
    this._observerLocator = observerLocator;
    this._config = config;
  }
  getValue() {
    return this._observing ? this._value : this._el.multiple ? _SelectValueObserver._getSelectedOptions(this._el.options) : this._el.value;
  }
  setValue(newValue) {
    this._oldValue = this._value;
    this._value = newValue;
    this._hasChanges = newValue !== this._oldValue;
    this._observeArray(newValue instanceof Array ? newValue : null);
    this._flushChanges();
  }
  /** @internal */
  _flushChanges() {
    if (this._hasChanges) {
      this._hasChanges = false;
      this.syncOptions();
    }
  }
  handleCollectionChange() {
    this.syncOptions();
  }
  syncOptions() {
    const value = this._value;
    const obj = this._el;
    const $isArray = isArray(value);
    const matcher = obj.matcher ?? _SelectValueObserver._defaultMatcher;
    const options = obj.options;
    let i = options.length;
    while (i-- > 0) {
      const option = options[i];
      const optionValue = hasOwnProperty.call(option, "model") ? option.model : option.value;
      if ($isArray) {
        option.selected = value.findIndex((item) => !!matcher(optionValue, item)) !== -1;
        continue;
      }
      option.selected = !!matcher(optionValue, value);
    }
  }
  syncValue() {
    const obj = this._el;
    const options = obj.options;
    const len = options.length;
    const currentValue = this._value;
    let i = 0;
    if (obj.multiple) {
      if (!(currentValue instanceof Array)) {
        return true;
      }
      let option2;
      const matcher = obj.matcher || _SelectValueObserver._defaultMatcher;
      const values = [];
      while (i < len) {
        option2 = options[i];
        if (option2.selected) {
          values.push(hasOwnProperty.call(option2, "model") ? option2.model : option2.value);
        }
        ++i;
      }
      let a;
      i = 0;
      while (i < currentValue.length) {
        a = currentValue[i];
        if (values.findIndex((b) => !!matcher(a, b)) === -1) {
          currentValue.splice(i, 1);
        } else {
          ++i;
        }
      }
      i = 0;
      while (i < values.length) {
        a = values[i];
        if (currentValue.findIndex((b) => !!matcher(a, b)) === -1) {
          currentValue.push(a);
        }
        ++i;
      }
      return false;
    }
    let value = null;
    let option;
    while (i < len) {
      option = options[i];
      if (option.selected) {
        value = hasOwnProperty.call(option, "model") ? option.model : option.value;
        break;
      }
      ++i;
    }
    this._oldValue = this._value;
    this._value = value;
    return true;
  }
  /**
   * Used by mixing defined methods subscribe
   *
   * @internal
   */
  _start() {
    (this._nodeObserver = createMutationObserver(this._el, this._handleNodeChange.bind(this))).observe(this._el, {
      childList: true,
      subtree: true,
      characterData: true
    });
    this._observeArray(this._value instanceof Array ? this._value : null);
    this._observing = true;
  }
  /**
   * Used by mixing defined method unsubscribe
   *
   * @internal
   */
  _stop() {
    var _a3;
    this._nodeObserver.disconnect();
    (_a3 = this._arrayObserver) == null ? void 0 : _a3.unsubscribe(this);
    this._nodeObserver = this._arrayObserver = void 0;
    this._observing = false;
  }
  // todo: observe all kind of collection
  /** @internal */
  _observeArray(array) {
    var _a3;
    (_a3 = this._arrayObserver) == null ? void 0 : _a3.unsubscribe(this);
    this._arrayObserver = void 0;
    if (array != null) {
      if (!this._el.multiple) {
        throw createMappedError5(
          654
          /* ErrorNames.select_observer_array_on_non_multi_select */
        );
      }
      (this._arrayObserver = this._observerLocator.getArrayObserver(array)).subscribe(this);
    }
  }
  handleEvent() {
    const shouldNotify = this.syncValue();
    if (shouldNotify) {
      this._flush();
    }
  }
  /** @internal */
  _handleNodeChange(_records) {
    this.syncOptions();
    const shouldNotify = this.syncValue();
    if (shouldNotify) {
      this._flush();
    }
  }
  /** @internal */
  _flush() {
    const oV3 = this._oldValue;
    this._oldValue = this._value;
    this.subs.notify(this._value, oV3);
  }
};
(() => {
  mixinNodeObserverUseConfig(SelectValueObserver);
  subscriberCollection(SelectValueObserver, null);
})();
var customPropertyPrefix = "--";
var StyleAttributeAccessor = class {
  constructor(obj) {
    this.obj = obj;
    this.type = atNode2 | atLayout2;
    this._value = "";
    this._oldValue = "";
    this.styles = {};
    this.version = 0;
    this._hasChanges = false;
  }
  getValue() {
    return this.obj.style.cssText;
  }
  setValue(newValue) {
    this._value = newValue;
    this._hasChanges = newValue !== this._oldValue;
    this._flushChanges();
  }
  /** @internal */
  _getStyleTuplesFromString(currentValue) {
    const styleTuples = [];
    const urlRegexTester = /url\([^)]+$/;
    let offset = 0;
    let currentChunk = "";
    let nextSplit;
    let indexOfColon;
    let attribute;
    let value;
    while (offset < currentValue.length) {
      nextSplit = currentValue.indexOf(";", offset);
      if (nextSplit === -1) {
        nextSplit = currentValue.length;
      }
      currentChunk += currentValue.substring(offset, nextSplit);
      offset = nextSplit + 1;
      if (urlRegexTester.test(currentChunk)) {
        currentChunk += ";";
        continue;
      }
      indexOfColon = currentChunk.indexOf(":");
      attribute = currentChunk.substring(0, indexOfColon).trim();
      value = currentChunk.substring(indexOfColon + 1).trim();
      styleTuples.push([attribute, value]);
      currentChunk = "";
    }
    return styleTuples;
  }
  /** @internal */
  _getStyleTuplesFromObject(currentValue) {
    let value;
    let property;
    const styles = [];
    for (property in currentValue) {
      value = currentValue[property];
      if (value == null) {
        continue;
      }
      if (isString(value)) {
        if (property.startsWith(customPropertyPrefix)) {
          styles.push([property, value]);
          continue;
        }
        styles.push([kebabCase(property), value]);
        continue;
      }
      styles.push(...this._getStyleTuples(value));
    }
    return styles;
  }
  /** @internal */
  _getStyleTuplesFromArray(currentValue) {
    const len = currentValue.length;
    if (len > 0) {
      const styles = [];
      let i = 0;
      for (; len > i; ++i) {
        styles.push(...this._getStyleTuples(currentValue[i]));
      }
      return styles;
    }
    return emptyArray;
  }
  /** @internal */
  _getStyleTuples(currentValue) {
    if (isString(currentValue)) {
      return this._getStyleTuplesFromString(currentValue);
    }
    if (currentValue instanceof Array) {
      return this._getStyleTuplesFromArray(currentValue);
    }
    if (currentValue instanceof Object) {
      return this._getStyleTuplesFromObject(currentValue);
    }
    return emptyArray;
  }
  /** @internal */
  _flushChanges() {
    if (this._hasChanges) {
      this._hasChanges = false;
      const currentValue = this._value;
      const styles = this.styles;
      const styleTuples = this._getStyleTuples(currentValue);
      let style;
      let version = this.version;
      this._oldValue = currentValue;
      let tuple;
      let name;
      let value;
      let i = 0;
      const len = styleTuples.length;
      for (; i < len; ++i) {
        tuple = styleTuples[i];
        name = tuple[0];
        value = tuple[1];
        this.setProperty(name, value);
        styles[name] = version;
      }
      this.styles = styles;
      this.version += 1;
      if (version === 0) {
        return;
      }
      version -= 1;
      for (style in styles) {
        if (!hasOwnProperty.call(styles, style) || styles[style] !== version) {
          continue;
        }
        this.obj.style.removeProperty(style);
      }
    }
  }
  setProperty(style, value) {
    let priority = "";
    if (value != null && isFunction(value.indexOf) && value.includes("!important")) {
      priority = "important";
      value = value.replace("!important", "");
    }
    this.obj.style.setProperty(style, value, priority);
  }
  bind() {
    this._value = this._oldValue = this.obj.style.cssText;
  }
};
(() => {
  mixinNoopSubscribable(StyleAttributeAccessor);
})();
var ValueAttributeObserver = class {
  constructor(obj, key, config) {
    this.type = atNode2 | atObserver2 | atLayout2;
    this._value = "";
    this._oldValue = "";
    this._hasChanges = false;
    this._listened = false;
    this._el = obj;
    this._key = key;
    this._config = config;
  }
  getValue() {
    return this._value;
  }
  setValue(newValue) {
    if (areEqual(newValue, this._value)) {
      return;
    }
    this._oldValue = this._value;
    this._value = newValue;
    this._hasChanges = true;
    if (!this._config.readonly) {
      this._flushChanges();
    }
  }
  /** @internal */
  _flushChanges() {
    if (this._hasChanges) {
      this._hasChanges = false;
      this._el[this._key] = this._value ?? this._config.default;
      this._flush();
    }
  }
  handleEvent() {
    this._oldValue = this._value;
    this._value = this._el[this._key];
    if (this._oldValue !== this._value) {
      this._hasChanges = false;
      this._flush();
    }
  }
  /**
   * Used by mixing defined methods subscribe
   *
   * @internal
   */
  _start() {
    this._value = this._oldValue = this._el[this._key];
  }
  /** @internal */
  _flush() {
    const oV3 = this._oldValue;
    this._oldValue = this._value;
    this.subs.notify(this._value, oV3);
  }
};
(() => {
  mixinNodeObserverUseConfig(ValueAttributeObserver);
  subscriberCollection(ValueAttributeObserver, null);
})();
var nsAttributes = (() => {
  const xlinkNS = "http://www.w3.org/1999/xlink";
  const xmlNS = "http://www.w3.org/XML/1998/namespace";
  const xmlnsNS = "http://www.w3.org/2000/xmlns/";
  return objectAssign2(createLookup(), {
    "xlink:actuate": ["actuate", xlinkNS],
    "xlink:arcrole": ["arcrole", xlinkNS],
    "xlink:href": ["href", xlinkNS],
    "xlink:role": ["role", xlinkNS],
    "xlink:show": ["show", xlinkNS],
    "xlink:title": ["title", xlinkNS],
    "xlink:type": ["type", xlinkNS],
    "xml:lang": ["lang", xmlNS],
    "xml:space": ["space", xmlNS],
    "xmlns": ["xmlns", xmlnsNS],
    "xmlns:xlink": ["xlink", xmlnsNS]
  });
})();
var elementPropertyAccessor = new PropertyAccessor();
elementPropertyAccessor.type = atNode2 | atLayout2;
var NodeObserverLocator = class {
  constructor() {
    this.allowDirtyCheck = true;
    this._events = createLookup();
    this._globalEvents = createLookup();
    this._overrides = createLookup();
    this._globalOverrides = createLookup();
    this._locator = resolve(IServiceLocator);
    this._platform = resolve(IPlatform2);
    this._dirtyChecker = resolve(IDirtyChecker);
    this.svg = resolve(ISVGAnalyzer);
    const inputEvents = ["change", "input"];
    const inputEventsConfig = { events: inputEvents, default: "" };
    this.useConfig({
      INPUT: {
        value: inputEventsConfig,
        valueAsNumber: { events: inputEvents, default: 0 },
        checked: { type: CheckedObserver, events: inputEvents },
        files: { events: inputEvents, readonly: true }
      },
      SELECT: {
        value: { type: SelectValueObserver, events: ["change"], default: "" }
      },
      TEXTAREA: {
        value: inputEventsConfig
      }
    });
    const contentEventsConfig = { events: ["change", "input", "blur", "keyup", "paste"], default: "" };
    const scrollEventsConfig = { events: ["scroll"], default: 0 };
    this.useConfigGlobal({
      scrollTop: scrollEventsConfig,
      scrollLeft: scrollEventsConfig,
      textContent: contentEventsConfig,
      innerHTML: contentEventsConfig
    });
    this.overrideAccessorGlobal("css", "style", "class");
    this.overrideAccessor({
      INPUT: ["value", "checked", "model"],
      SELECT: ["value"],
      TEXTAREA: ["value"]
    });
  }
  // deepscan-disable-next-line
  handles(obj, _key) {
    return obj instanceof this._platform.Node;
  }
  useConfig(nodeNameOrConfig, key, eventsConfig) {
    const lookup2 = this._events;
    let existingMapping;
    if (isString(nodeNameOrConfig)) {
      existingMapping = lookup2[nodeNameOrConfig] ?? (lookup2[nodeNameOrConfig] = createLookup());
      if (existingMapping[key] == null) {
        existingMapping[key] = eventsConfig;
      } else {
        throwMappingExisted(nodeNameOrConfig, key);
      }
    } else {
      for (const nodeName in nodeNameOrConfig) {
        existingMapping = lookup2[nodeName] ?? (lookup2[nodeName] = createLookup());
        const newMapping = nodeNameOrConfig[nodeName];
        for (key in newMapping) {
          if (existingMapping[key] == null) {
            existingMapping[key] = newMapping[key];
          } else {
            throwMappingExisted(nodeName, key);
          }
        }
      }
    }
  }
  useConfigGlobal(configOrKey, eventsConfig) {
    const lookup2 = this._globalEvents;
    if (typeof configOrKey === "object") {
      for (const key in configOrKey) {
        if (lookup2[key] == null) {
          lookup2[key] = configOrKey[key];
        } else {
          throwMappingExisted("*", key);
        }
      }
    } else {
      if (lookup2[configOrKey] == null) {
        lookup2[configOrKey] = eventsConfig;
      } else {
        throwMappingExisted("*", configOrKey);
      }
    }
  }
  // deepscan-disable-nextline
  getAccessor(obj, key, requestor) {
    if (key in this._globalOverrides || key in (this._overrides[obj.tagName] ?? emptyObject)) {
      return this.getObserver(obj, key, requestor);
    }
    switch (key) {
      // class / style / css attribute will be observed using .getObserver() per overrides
      //
      // TODO: there are (many) more situation where we want to default to DataAttributeAccessor
      case "src":
      case "href":
      case "role":
      case "minLength":
      case "maxLength":
      case "placeholder":
      case "size":
      case "pattern":
      case "title":
      case "popovertarget":
      case "popovertargetaction":
        {
          if ((key === "popovertarget" || key === "popovertargetaction") && obj.nodeName !== "INPUT" && obj.nodeName !== "BUTTON") {
            console.warn(`[aurelia] Popover API are only valid on <input> or <button>. Detected ${key} on <${obj.nodeName.toLowerCase()}>`);
          }
        }
        return attrAccessor;
      default: {
        const nsProps = nsAttributes[key];
        if (nsProps !== void 0) {
          return AttributeNSAccessor.forNs(nsProps[1]);
        }
        if (isDataAttribute(obj, key, this.svg)) {
          return attrAccessor;
        }
        return elementPropertyAccessor;
      }
    }
  }
  overrideAccessor(tagNameOrOverrides, key) {
    var _a3, _b3;
    let existingTagOverride;
    if (isString(tagNameOrOverrides)) {
      existingTagOverride = (_a3 = this._overrides)[tagNameOrOverrides] ?? (_a3[tagNameOrOverrides] = createLookup());
      existingTagOverride[key] = true;
    } else {
      for (const tagName in tagNameOrOverrides) {
        for (const key2 of tagNameOrOverrides[tagName]) {
          existingTagOverride = (_b3 = this._overrides)[tagName] ?? (_b3[tagName] = createLookup());
          existingTagOverride[key2] = true;
        }
      }
    }
  }
  /**
   * For all elements:
   * compose a list of properties,
   * to indicate that an overser should be returned instead of an accessor in `.getAccessor()`
   */
  overrideAccessorGlobal(...keys) {
    for (const key of keys) {
      this._globalOverrides[key] = true;
    }
  }
  getNodeObserverConfig(el, key) {
    var _a3;
    return ((_a3 = this._events[el.tagName]) == null ? void 0 : _a3[key]) ?? this._globalEvents[key];
  }
  getNodeObserver(el, key, requestor) {
    var _a3;
    const eventsConfig = ((_a3 = this._events[el.tagName]) == null ? void 0 : _a3[key]) ?? this._globalEvents[key];
    let observer;
    if (eventsConfig != null) {
      observer = new (eventsConfig.type ?? ValueAttributeObserver)(el, key, eventsConfig, requestor, this._locator);
      if (!observer.doNotCache) {
        getObserverLookup(el)[key] = observer;
      }
      return observer;
    }
    return null;
  }
  getObserver(el, key, requestor) {
    switch (key) {
      case "class":
        return new ClassAttributeAccessor(el);
      case "css":
      case "style":
        return new StyleAttributeAccessor(el);
    }
    const nodeObserver = this.getNodeObserver(el, key, requestor);
    if (nodeObserver != null) {
      return nodeObserver;
    }
    const nsProps = nsAttributes[key];
    if (nsProps !== void 0) {
      return AttributeNSAccessor.forNs(nsProps[1]);
    }
    if (isDataAttribute(el, key, this.svg)) {
      return attrAccessor;
    }
    if (key in el.constructor.prototype) {
      if (this.allowDirtyCheck) {
        return this._dirtyChecker.createProperty(el, key);
      }
      throw createMappedError5(652, key);
    } else {
      return new SetterObserver(el, key);
    }
  }
};
NodeObserverLocator.register = createImplementationRegister(INodeObserverLocator);
function getCollectionObserver2(collection, observerLocator) {
  if (collection instanceof Array) {
    return observerLocator.getArrayObserver(collection);
  }
  if (collection instanceof Map) {
    return observerLocator.getMapObserver(collection);
  }
  if (collection instanceof Set) {
    return observerLocator.getSetObserver(collection);
  }
}
function throwMappingExisted(nodeName, key) {
  throw createMappedError5(653, nodeName, key);
}
function defaultMatcher(a, b) {
  return a === b;
}
var CheckedObserver = class {
  constructor(obj, _key, config, observerLocator) {
    this.type = atNode2 | atObserver2 | atLayout2;
    this._value = void 0;
    this._oldValue = void 0;
    this._collectionObserver = void 0;
    this._valueObserver = void 0;
    this._listened = false;
    this._el = obj;
    this.oL = observerLocator;
    this._config = config;
  }
  getValue() {
    return this._value;
  }
  setValue(newValue) {
    const currentValue = this._value;
    if (newValue === currentValue) {
      return;
    }
    this._value = newValue;
    this._oldValue = currentValue;
    this._observe();
    this._synchronizeElement();
    this._flush();
  }
  handleCollectionChange() {
    this._synchronizeElement();
  }
  handleChange(_newValue, _previousValue) {
    this._synchronizeElement();
  }
  /** @internal */
  _synchronizeElement() {
    const currentValue = this._value;
    const obj = this._el;
    const elementValue = hasOwnProperty.call(obj, "model") ? obj.model : obj.value;
    const isRadio = obj.type === "radio";
    const matcher = obj.matcher !== void 0 ? obj.matcher : defaultMatcher;
    if (isRadio) {
      obj.checked = !!matcher(currentValue, elementValue);
    } else if (currentValue === true) {
      obj.checked = true;
    } else {
      let hasMatch = false;
      if (isArray(currentValue)) {
        hasMatch = currentValue.findIndex((item) => !!matcher(item, elementValue)) !== -1;
      } else if (currentValue instanceof Set) {
        for (const v of currentValue) {
          if (matcher(v, elementValue)) {
            hasMatch = true;
            break;
          }
        }
      } else if (currentValue instanceof Map) {
        for (const pair of currentValue) {
          const existingItem = pair[0];
          const $isChecked = pair[1];
          if (matcher(existingItem, elementValue) && $isChecked === true) {
            hasMatch = true;
            break;
          }
        }
      }
      obj.checked = hasMatch;
    }
  }
  handleEvent() {
    let currentValue = this._oldValue = this._value;
    const obj = this._el;
    const elementValue = hasOwnProperty.call(obj, "model") ? obj.model : obj.value;
    const isChecked = obj.checked;
    const matcher = obj.matcher !== void 0 ? obj.matcher : defaultMatcher;
    if (obj.type === "checkbox") {
      if (isArray(currentValue)) {
        const index = currentValue.findIndex((item) => !!matcher(item, elementValue));
        if (isChecked && index === -1) {
          currentValue.push(elementValue);
        } else if (!isChecked && index !== -1) {
          currentValue.splice(index, 1);
        }
        return;
      } else if (currentValue instanceof Set) {
        const unset = {};
        let existingItem = unset;
        for (const value of currentValue) {
          if (matcher(value, elementValue) === true) {
            existingItem = value;
            break;
          }
        }
        if (isChecked && existingItem === unset) {
          currentValue.add(elementValue);
        } else if (!isChecked && existingItem !== unset) {
          currentValue.delete(existingItem);
        }
        return;
      } else if (currentValue instanceof Map) {
        let existingItem;
        for (const pair of currentValue) {
          const currItem = pair[0];
          if (matcher(currItem, elementValue) === true) {
            existingItem = currItem;
            break;
          }
        }
        currentValue.set(existingItem, isChecked);
        return;
      }
      currentValue = isChecked;
    } else if (isChecked) {
      currentValue = elementValue;
    } else {
      return;
    }
    this._value = currentValue;
    this._flush();
  }
  /**
   * Used by mixing defined methods subscribe
   *
   * @internal
   */
  _start() {
    this._observe();
  }
  /**
   * Used by mixing defined methods unsubscribe
   *
   * @internal
   */
  _stop() {
    var _a3, _b3;
    this._value = this._oldValue = void 0;
    (_a3 = this._collectionObserver) == null ? void 0 : _a3.unsubscribe(this);
    (_b3 = this._valueObserver) == null ? void 0 : _b3.unsubscribe(this);
    this._collectionObserver = this._valueObserver = void 0;
  }
  /** @internal */
  _flush() {
    oV2 = this._oldValue;
    this._oldValue = this._value;
    this.subs.notify(this._value, oV2);
    oV2 = void 0;
  }
  /** @internal */
  _observe() {
    var _a3, _b3, _c3, _d2, _e2;
    const obj = this._el;
    (_c3 = this._valueObserver ?? (this._valueObserver = ((_a3 = obj.$observers) == null ? void 0 : _a3.model) ?? ((_b3 = obj.$observers) == null ? void 0 : _b3.value))) == null ? void 0 : _c3.subscribe(this);
    (_d2 = this._collectionObserver) == null ? void 0 : _d2.unsubscribe(this);
    this._collectionObserver = void 0;
    if (obj.type === "checkbox") {
      (_e2 = this._collectionObserver = getCollectionObserver2(this._value, this.oL)) == null ? void 0 : _e2.subscribe(this);
    }
  }
};
(() => {
  mixinNodeObserverUseConfig(CheckedObserver);
  subscriberCollection(CheckedObserver, null);
})();
var oV2 = void 0;
var AttrBindingBehavior = class {
  bind(_scope, binding) {
    if (!(binding instanceof PropertyBinding)) {
      throw createMappedError5(9994, binding);
    }
    binding.useTargetObserver(attrAccessor);
  }
};
AttrBindingBehavior.$au = {
  type: behaviorTypeName,
  name: "attr"
};
var SelfBindingBehavior = class {
  bind(_scope, binding) {
    if (!("handleEvent" in binding)) {
      throw createMappedError5(
        801
        /* ErrorNames.self_behavior_invalid_usage */
      );
    }
    binding.self = true;
  }
  unbind(_scope, binding) {
    binding.self = false;
  }
};
SelfBindingBehavior.$au = {
  type: behaviorTypeName,
  name: "self"
};
var UpdateTriggerBindingBehavior = class {
  constructor() {
    this._observerLocator = resolve(IObserverLocator);
    this._nodeObserverLocator = resolve(INodeObserverLocator);
  }
  bind(_scope, binding, ...events) {
    if (!(this._nodeObserverLocator instanceof NodeObserverLocator)) {
      throw createMappedError5(
        9993
        /* ErrorNames.update_trigger_behavior_not_supported */
      );
    }
    if (events.length === 0) {
      throw createMappedError5(
        802
        /* ErrorNames.update_trigger_behavior_no_triggers */
      );
    }
    if (!(binding instanceof PropertyBinding) || !(binding.mode & fromView)) {
      throw createMappedError5(
        803
        /* ErrorNames.update_trigger_invalid_usage */
      );
    }
    const targetConfig = this._nodeObserverLocator.getNodeObserverConfig(binding.target, binding.targetProperty);
    if (targetConfig == null) {
      throw createMappedError5(9992, binding);
    }
    const targetObserver = this._nodeObserverLocator.getNodeObserver(binding.target, binding.targetProperty, this._observerLocator);
    targetObserver.useConfig({ readonly: targetConfig.readonly, default: targetConfig.default, events });
    binding.useTargetObserver(targetObserver);
  }
};
UpdateTriggerBindingBehavior.$au = {
  type: behaviorTypeName,
  name: "updateTrigger"
};
var If = class {
  constructor() {
    this.elseFactory = void 0;
    this.elseView = void 0;
    this.ifView = void 0;
    this.view = void 0;
    this.value = false;
    this.cache = true;
    this.pending = void 0;
    this._wantsDeactivate = false;
    this._swapId = 0;
    this._ifFactory = resolve(IViewFactory);
    this._location = resolve(IRenderLocation);
  }
  attaching(_initiator, _parent) {
    return this._swap(this.value);
  }
  detaching(initiator, _parent) {
    this._wantsDeactivate = true;
    return onResolve(this.pending, () => {
      var _a3;
      this._wantsDeactivate = false;
      this.pending = void 0;
      void ((_a3 = this.view) == null ? void 0 : _a3.deactivate(initiator, this.$controller));
    });
  }
  valueChanged(newValue, oldValue) {
    if (!this.$controller.isActive)
      return;
    newValue = !!newValue;
    oldValue = !!oldValue;
    if (newValue !== oldValue)
      return this._swap(newValue);
  }
  /** @internal */
  _swap(value) {
    const currView = this.view;
    const ctrl = this.$controller;
    const swapId = this._swapId++;
    const isCurrent = () => !this._wantsDeactivate && this._swapId === swapId + 1;
    let view;
    return onResolve(this.pending, () => this.pending = onResolve(currView == null ? void 0 : currView.deactivate(currView, ctrl), () => {
      var _a3;
      if (!isCurrent()) {
        return;
      }
      if (value) {
        view = this.view = this.ifView = this.cache && this.ifView != null ? this.ifView : this._ifFactory.create();
      } else {
        view = this.view = this.elseView = this.cache && this.elseView != null ? this.elseView : (_a3 = this.elseFactory) == null ? void 0 : _a3.create();
      }
      if (view == null) {
        return;
      }
      view.setLocation(this._location);
      return onResolve(view.activate(view, ctrl, ctrl.scope), () => {
        if (isCurrent()) {
          this.pending = void 0;
        }
      });
    }));
  }
  dispose() {
    var _a3, _b3;
    (_a3 = this.ifView) == null ? void 0 : _a3.dispose();
    (_b3 = this.elseView) == null ? void 0 : _b3.dispose();
    this.ifView = this.elseView = this.view = void 0;
  }
  accept(visitor) {
    var _a3;
    if (((_a3 = this.view) == null ? void 0 : _a3.accept(visitor)) === true) {
      return true;
    }
  }
};
If.$au = {
  type: attrTypeName,
  name: "if",
  isTemplateController: true,
  bindables: {
    value: true,
    cache: {
      set: (v) => v === "" || !!v && v !== "false"
    }
  }
};
var Else = class {
  constructor() {
    this._factory = resolve(IViewFactory);
  }
  link(controller, _childController, _target, _instruction) {
    const children2 = controller.children;
    const ifBehavior = children2[children2.length - 1];
    if (ifBehavior instanceof If) {
      ifBehavior.elseFactory = this._factory;
    } else if (ifBehavior.viewModel instanceof If) {
      ifBehavior.viewModel.elseFactory = this._factory;
    } else {
      throw createMappedError5(
        810
        /* ErrorNames.else_without_if */
      );
    }
  }
};
Else.$au = {
  type: "custom-attribute",
  name: "else",
  isTemplateController: true
};
function dispose(disposable) {
  disposable.dispose();
}
var wrappedExprs = [
  "BindingBehavior",
  "ValueConverter"
];
var Repeat = class {
  constructor() {
    this.views = [];
    this.key = null;
    this._oldViews = [];
    this._scopes = [];
    this._oldScopes = [];
    this._scopeMap = /* @__PURE__ */ new Map();
    this._observer = void 0;
    this._observingInnerItems = false;
    this._reevaluating = false;
    this._innerItemsExpression = null;
    this._normalizedItems = void 0;
    this._hasDestructuredLocal = false;
    this._location = resolve(IRenderLocation);
    this._parent = resolve(IController);
    this._factory = resolve(IViewFactory);
    this._resolver = resolve(IRepeatableHandlerResolver);
    const instruction = resolve(IInstruction);
    const keyProp = instruction.props[0].props[0];
    if (keyProp !== void 0) {
      const { to, value, command } = keyProp;
      if (to === "key") {
        if (command === null) {
          this.key = value;
        } else if (command === "bind") {
          this.key = resolve(IExpressionParser).parse(value, etIsProperty3);
        } else {
          throw createMappedError5(775, command);
        }
      } else {
        throw createMappedError5(776, to);
      }
    }
  }
  binding(_initiator, _parent) {
    const bindings = this._parent.bindings;
    const ii = bindings.length;
    let binding = void 0;
    let forOf;
    let i = 0;
    for (; ii > i; ++i) {
      binding = bindings[i];
      if (binding.target === this && binding.targetProperty === "items") {
        forOf = this.forOf = binding.ast;
        this._forOfBinding = binding;
        let expression = forOf.iterable;
        while (expression != null && wrappedExprs.includes(expression.$kind)) {
          expression = expression.expression;
          this._observingInnerItems = true;
        }
        this._innerItemsExpression = expression;
        break;
      }
    }
    this._refreshCollectionObserver();
    const dec = forOf.declaration;
    if (!(this._hasDestructuredLocal = dec.$kind === "ArrayDestructuring" || dec.$kind === "ObjectDestructuring")) {
      this.local = astEvaluate(dec, this.$controller.scope, binding, null);
    }
  }
  attaching(initiator, _parent) {
    this._normalizeToArray();
    this._createScopes();
    return this._activateAllViews(initiator, this._normalizedItems ?? emptyArray);
  }
  detaching(initiator, _parent) {
    this._refreshCollectionObserver();
    return this._deactivateAllViews(initiator);
  }
  unbinding(_initiator, _parent) {
    this._scopeMap.clear();
  }
  // called by SetterObserver
  itemsChanged() {
    if (!this.$controller.isActive) {
      return;
    }
    this._refreshCollectionObserver();
    this._normalizeToArray();
    this._createScopes();
    this._applyIndexMap(void 0);
  }
  handleCollectionChange(collection, indexMap) {
    const $controller = this.$controller;
    if (!$controller.isActive) {
      return;
    }
    if (this._observingInnerItems) {
      if (this._reevaluating) {
        return;
      }
      this._reevaluating = true;
      this.items = astEvaluate(this.forOf.iterable, $controller.scope, this._forOfBinding, null);
      this._reevaluating = false;
      return;
    }
    this._normalizeToArray();
    this._createScopes();
    this._applyIndexMap(indexMap);
  }
  /** @internal */
  _applyIndexMap(indexMap) {
    const oldViews = this.views;
    this._oldViews = oldViews.slice();
    const oldLen = oldViews.length;
    const key = this.key;
    const hasKey = key !== null;
    const oldScopes = this._oldScopes;
    const newScopes = this._scopes;
    if (hasKey || indexMap === void 0) {
      const local = this.local;
      const newItems = this._normalizedItems;
      const newLen = newItems.length;
      const forOf = this.forOf;
      const dec = forOf.declaration;
      const binding = this._forOfBinding;
      const hasDestructuredLocal = this._hasDestructuredLocal;
      indexMap = createIndexMap(newLen);
      let i = 0;
      if (oldLen === 0) {
        for (; i < newLen; ++i) {
          indexMap[i] = -2;
        }
      } else if (newLen === 0) {
        for (i = 0; i < oldLen; ++i) {
          indexMap.deletedIndices.push(i);
          indexMap.deletedItems.push(getItem(hasDestructuredLocal, dec, oldScopes[i], binding, local));
        }
      } else if (hasKey) {
        const oldKeys = Array(oldLen);
        for (i = 0; i < oldLen; ++i) {
          oldKeys[i] = getKeyValue(hasDestructuredLocal, key, dec, oldScopes[i], binding, local);
        }
        const newKeys = Array(oldLen);
        for (i = 0; i < newLen; ++i) {
          newKeys[i] = getKeyValue(hasDestructuredLocal, key, dec, newScopes[i], binding, local);
        }
        for (i = 0; i < newLen; ++i) {
          if (oldKeys.includes(newKeys[i])) {
            indexMap[i] = oldKeys.indexOf(newKeys[i]);
          } else {
            indexMap[i] = -2;
          }
        }
        for (i = 0; i < oldLen; ++i) {
          if (!newKeys.includes(oldKeys[i])) {
            indexMap.deletedIndices.push(i);
            indexMap.deletedItems.push(getItem(hasDestructuredLocal, dec, oldScopes[i], binding, local));
          }
        }
      } else {
        for (i = 0; i < newLen; ++i) {
          if (oldScopes.includes(newScopes[i])) {
            indexMap[i] = oldScopes.indexOf(newScopes[i]);
          } else {
            indexMap[i] = -2;
          }
        }
        for (i = 0; i < oldLen; ++i) {
          if (!newScopes.includes(oldScopes[i])) {
            indexMap.deletedIndices.push(i);
            indexMap.deletedItems.push(getItem(hasDestructuredLocal, dec, oldScopes[i], binding, local));
          }
        }
      }
    }
    if (indexMap.deletedIndices.length > 0) {
      const ret = onResolve(this._deactivateAndRemoveViewsByKey(indexMap), () => {
        return this._createAndActivateAndSortViewsByKey(indexMap);
      });
      if (isPromise(ret)) {
        ret.catch(rethrow);
      }
    } else {
      this._createAndActivateAndSortViewsByKey(indexMap);
    }
  }
  // todo: subscribe to collection from inner expression
  /** @internal */
  _refreshCollectionObserver() {
    var _a3, _b3;
    const scope = this.$controller.scope;
    let innerItems = this._innerItems;
    let observingInnerItems = this._observingInnerItems;
    let newObserver;
    if (observingInnerItems) {
      innerItems = this._innerItems = astEvaluate(this._innerItemsExpression, scope, this._forOfBinding, null) ?? null;
      observingInnerItems = this._observingInnerItems = !areEqual(this.items, innerItems);
    }
    const oldObserver = this._observer;
    if (this.$controller.isActive) {
      const items = observingInnerItems ? innerItems : this.items;
      newObserver = this._observer = (_b3 = (_a3 = this._resolver.resolve(items)).getObserver) == null ? void 0 : _b3.call(_a3, items);
      if (oldObserver !== newObserver) {
        oldObserver == null ? void 0 : oldObserver.unsubscribe(this);
        newObserver == null ? void 0 : newObserver.subscribe(this);
      }
    } else {
      oldObserver == null ? void 0 : oldObserver.unsubscribe(this);
      this._observer = void 0;
    }
  }
  /** @internal */
  _createScopes() {
    const oldScopes = this._scopes;
    this._oldScopes = oldScopes.slice();
    const items = this._normalizedItems;
    const len = items.length;
    const scopes = this._scopes = Array(items.length);
    const oldScopeMap = this._scopeMap;
    const newScopeMap = /* @__PURE__ */ new Map();
    const parentScope = this.$controller.scope;
    const binding = this._forOfBinding;
    const forOf = this.forOf;
    const local = this.local;
    const hasDestructuredLocal = this._hasDestructuredLocal;
    for (let i = 0; i < len; ++i) {
      scopes[i] = getScope(oldScopeMap, newScopeMap, items[i], forOf, parentScope, binding, local, hasDestructuredLocal);
    }
    oldScopeMap.clear();
    this._scopeMap = newScopeMap;
  }
  /** @internal */
  _normalizeToArray() {
    const items = this.items;
    if (isArray(items)) {
      this._normalizedItems = items.slice(0);
      return;
    }
    const normalizedItems = [];
    this._resolver.resolve(items).iterate(items, (item, index) => {
      normalizedItems[index] = item;
    });
    this._normalizedItems = normalizedItems;
  }
  /** @internal */
  _activateAllViews(initiator, $items) {
    let promises = void 0;
    let ret;
    let view;
    let scope;
    const { $controller, _factory, _location, _scopes } = this;
    const newLen = $items.length;
    const views = this.views = Array(newLen);
    for (let i = 0; i < newLen; ++i) {
      view = views[i] = _factory.create().setLocation(_location);
      view.nodes.unlink();
      scope = _scopes[i];
      setContextualProperties(scope.overrideContext, i, newLen);
      ret = view.activate(initiator ?? view, $controller, scope);
      if (isPromise(ret)) {
        (promises ?? (promises = [])).push(ret);
      }
    }
    if (promises !== void 0) {
      return promises.length === 1 ? promises[0] : Promise.all(promises);
    }
  }
  /** @internal */
  _deactivateAllViews(initiator) {
    let promises = void 0;
    let ret;
    let view;
    let i = 0;
    const { views, $controller } = this;
    const ii = views.length;
    for (; ii > i; ++i) {
      view = views[i];
      view.release();
      ret = view.deactivate(initiator ?? view, $controller);
      if (isPromise(ret)) {
        (promises ?? (promises = [])).push(ret);
      }
    }
    if (promises !== void 0) {
      return promises.length === 1 ? promises[0] : Promise.all(promises);
    }
  }
  /** @internal */
  _deactivateAndRemoveViewsByKey(indexMap) {
    let promises = void 0;
    let ret;
    let view;
    const { $controller, views } = this;
    const deleted = indexMap.deletedIndices.slice().sort(compareNumber);
    const deletedLen = deleted.length;
    let i = 0;
    for (; deletedLen > i; ++i) {
      view = views[deleted[i]];
      view.release();
      ret = view.deactivate(view, $controller);
      if (isPromise(ret)) {
        (promises ?? (promises = [])).push(ret);
      }
    }
    i = 0;
    for (; deletedLen > i; ++i) {
      views.splice(deleted[i] - i, 1);
    }
    if (promises !== void 0) {
      return promises.length === 1 ? promises[0] : Promise.all(promises);
    }
  }
  /** @internal */
  _createAndActivateAndSortViewsByKey(indexMap) {
    let promises = void 0;
    let ret;
    let view;
    let i = 0;
    const { $controller, _factory, _location, views, _scopes, _oldViews } = this;
    const newLen = indexMap.length;
    for (; newLen > i; ++i) {
      if (indexMap[i] === -2) {
        view = _factory.create();
        views.splice(i, 0, view);
      }
    }
    if (views.length !== newLen) {
      throw createMappedError5(814, [views.length, newLen]);
    }
    let source = 0;
    i = 0;
    for (; i < indexMap.length; ++i) {
      if ((source = indexMap[i]) !== -2) {
        views[i] = _oldViews[source];
      }
    }
    const seq = longestIncreasingSubsequence(indexMap);
    const seqLen = seq.length;
    let next;
    let j = seqLen - 1;
    i = newLen - 1;
    for (; i >= 0; --i) {
      view = views[i];
      next = views[i + 1];
      view.nodes.link((next == null ? void 0 : next.nodes) ?? _location);
      if (indexMap[i] === -2) {
        view.setLocation(_location);
        setContextualProperties(_scopes[i].overrideContext, i, newLen);
        ret = view.activate(view, $controller, _scopes[i]);
        if (isPromise(ret)) {
          (promises ?? (promises = [])).push(ret);
        }
      } else if (j < 0 || seqLen === 1 || i !== seq[j]) {
        setContextualProperties(view.scope.overrideContext, i, newLen);
        view.nodes.insertBefore(view.location);
      } else {
        setContextualProperties(view.scope.overrideContext, i, newLen);
        --j;
      }
    }
    if (promises !== void 0) {
      return promises.length === 1 ? promises[0] : Promise.all(promises);
    }
  }
  dispose() {
    this.views.forEach(dispose);
    this.views = void 0;
  }
  accept(visitor) {
    const { views } = this;
    if (views !== void 0) {
      for (let i = 0, ii = views.length; i < ii; ++i) {
        if (views[i].accept(visitor) === true) {
          return true;
        }
      }
    }
  }
};
Repeat.$au = {
  type: attrTypeName,
  name: "repeat",
  isTemplateController: true,
  bindables: ["items"]
};
var maxLen = 16;
var prevIndices = new Int32Array(maxLen);
var tailIndices = new Int32Array(maxLen);
function longestIncreasingSubsequence(indexMap) {
  const len = indexMap.length;
  if (len > maxLen) {
    maxLen = len;
    prevIndices = new Int32Array(len);
    tailIndices = new Int32Array(len);
  }
  let cursor = 0;
  let cur = 0;
  let prev = 0;
  let i = 0;
  let j = 0;
  let low = 0;
  let high = 0;
  let mid = 0;
  for (; i < len; i++) {
    cur = indexMap[i];
    if (cur !== -2) {
      j = prevIndices[cursor];
      prev = indexMap[j];
      if (prev !== -2 && prev < cur) {
        tailIndices[i] = j;
        prevIndices[++cursor] = i;
        continue;
      }
      low = 0;
      high = cursor;
      while (low < high) {
        mid = low + high >> 1;
        prev = indexMap[prevIndices[mid]];
        if (prev !== -2 && prev < cur) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      prev = indexMap[prevIndices[low]];
      if (cur < prev || prev === -2) {
        if (low > 0) {
          tailIndices[i] = prevIndices[low - 1];
        }
        prevIndices[low] = i;
      }
    }
  }
  i = ++cursor;
  const result = new Int32Array(i);
  cur = prevIndices[cursor - 1];
  while (cursor-- > 0) {
    result[cursor] = cur;
    cur = tailIndices[cur];
  }
  while (i-- > 0)
    prevIndices[i] = 0;
  return result;
}
var RepeatOverrideContext = class {
  get $odd() {
    return !this.$even;
  }
  get $even() {
    return this.$index % 2 === 0;
  }
  get $first() {
    return this.$index === 0;
  }
  get $middle() {
    return !this.$first && !this.$last;
  }
  get $last() {
    return this.$index === this.$length - 1;
  }
  constructor($index2 = 0, $length2 = 1) {
    this.$index = $index2;
    this.$length = $length2;
  }
};
var setContextualProperties = (oc, index, length) => {
  oc.$index = index;
  oc.$length = length;
};
var IRepeatableHandlerResolver = createInterface2("IRepeatableHandlerResolver", (x) => x.singleton(RepeatableHandlerResolver));
var RepeatableHandlerResolver = class {
  constructor() {
    this._handlers = resolve(all(IRepeatableHandler));
  }
  resolve(value) {
    if (_arrayHandler.handles(value)) {
      return _arrayHandler;
    }
    if (_setHandler.handles(value)) {
      return _setHandler;
    }
    if (_mapHandler.handles(value)) {
      return _mapHandler;
    }
    if (_numberHandler.handles(value)) {
      return _numberHandler;
    }
    if (_nullishHandler.handles(value)) {
      return _nullishHandler;
    }
    const handler = this._handlers.find((x) => x.handles(value));
    if (handler !== void 0) {
      return handler;
    }
    return _unknownHandler;
  }
};
var ArrayLikeHandler = class {
  static register(c) {
    c.register(singletonRegistration3(IRepeatableHandler, this));
  }
  handles(value) {
    return "length" in value && isNumber(value.length);
  }
  iterate(items, func) {
    for (let i = 0, ii = items.length; i < ii; ++i) {
      func(items[i], i, items);
    }
  }
};
var IRepeatableHandler = createInterface2("IRepeatableHandler");
var _arrayHandler = {
  handles: isArray,
  getObserver: getCollectionObserver,
  /* istanbul ignore next */
  iterate(value, func) {
    const ii = value.length;
    let i = 0;
    for (; i < ii; ++i) {
      func(value[i], i, value);
    }
  }
  // getCount: items => items.length,
};
var _setHandler = {
  handles: isSet,
  getObserver: getCollectionObserver,
  iterate(value, func) {
    let i = 0;
    let key;
    for (key of value.keys()) {
      func(key, i++, value);
    }
  }
  // getCount: s => s.size,
};
var _mapHandler = {
  handles: isMap,
  getObserver: getCollectionObserver,
  iterate(value, func) {
    let i = 0;
    let entry;
    for (entry of value.entries()) {
      func(entry, i++, value);
    }
  }
  // getCount: s => s.size,
};
var _numberHandler = {
  handles: isNumber,
  iterate(value, func) {
    let i = 0;
    for (; i < value; ++i) {
      func(i, i, value);
    }
  }
  // getCount: v => v,
};
var _nullishHandler = {
  handles: (v) => v == null,
  iterate() {
  }
  // getCount: () => 0,
};
var _unknownHandler = {
  handles(_value) {
    return false;
  },
  iterate(value, _func) {
    throw createMappedError5(777, value);
  }
  // getCount: () => 0,
};
var setItem = (hasDestructuredLocal, dec, scope, binding, local, item) => {
  if (hasDestructuredLocal) {
    astAssign(dec, scope, binding, item);
  } else {
    scope.bindingContext[local] = item;
  }
};
var getItem = (hasDestructuredLocal, dec, scope, binding, local) => {
  return hasDestructuredLocal ? astEvaluate(dec, scope, binding, null) : scope.bindingContext[local];
};
var getKeyValue = (hasDestructuredLocal, key, dec, scope, binding, local) => {
  if (typeof key === "string") {
    const item = getItem(hasDestructuredLocal, dec, scope, binding, local);
    return item[key];
  }
  return astEvaluate(key, scope, binding, null);
};
var getScope = (oldScopeMap, newScopeMap, item, forOf, parentScope, binding, local, hasDestructuredLocal) => {
  let scope = oldScopeMap.get(item);
  if (scope === void 0) {
    scope = createScope(item, forOf, parentScope, binding, local, hasDestructuredLocal);
  } else if (scope instanceof Scope) {
    oldScopeMap.delete(item);
  } else if (scope.length === 1) {
    scope = scope[0];
    oldScopeMap.delete(item);
  } else {
    scope = scope.shift();
  }
  if (newScopeMap.has(item)) {
    const entry = newScopeMap.get(item);
    if (entry instanceof Scope) {
      newScopeMap.set(item, [entry, scope]);
    } else {
      entry.push(scope);
    }
  } else {
    newScopeMap.set(item, scope);
  }
  setItem(hasDestructuredLocal, forOf.declaration, scope, binding, local, item);
  return scope;
};
var createScope = (item, forOf, parentScope, binding, local, hasDestructuredLocal) => {
  if (hasDestructuredLocal) {
    const scope = Scope.fromParent(parentScope, new BindingContext(), new RepeatOverrideContext());
    astAssign(forOf.declaration, scope, binding, item);
  }
  return Scope.fromParent(parentScope, new BindingContext(local, item), new RepeatOverrideContext());
};
var compareNumber = (a, b) => a - b;
var With = class {
  constructor() {
    this.view = resolve(IViewFactory).create().setLocation(resolve(IRenderLocation));
  }
  valueChanged(newValue, _oldValue) {
    const $controller = this.$controller;
    const bindings = this.view.bindings;
    let scope;
    let i = 0, ii = 0;
    if ($controller.isActive && bindings != null) {
      scope = Scope.fromParent($controller.scope, newValue === void 0 ? {} : newValue);
      for (ii = bindings.length; ii > i; ++i) {
        bindings[i].bind(scope);
      }
    }
  }
  attaching(initiator, _parent) {
    const { $controller, value } = this;
    const scope = Scope.fromParent($controller.scope, value === void 0 ? {} : value);
    return this.view.activate(initiator, $controller, scope);
  }
  detaching(initiator, _parent) {
    return this.view.deactivate(initiator, this.$controller);
  }
  dispose() {
    this.view.dispose();
    this.view = void 0;
  }
  accept(visitor) {
    var _a3;
    if (((_a3 = this.view) == null ? void 0 : _a3.accept(visitor)) === true) {
      return true;
    }
  }
};
With.$au = {
  type: attrTypeName,
  name: "with",
  isTemplateController: true,
  bindables: ["value"]
};
var Switch = class {
  constructor() {
    this.cases = [];
    this.activeCases = [];
    this.promise = void 0;
    this._factory = resolve(IViewFactory);
    this._location = resolve(IRenderLocation);
  }
  link(_controller, _childController, _target, _instruction) {
    this.view = this._factory.create(this.$controller).setLocation(this._location);
  }
  attaching(initiator, _parent) {
    const view = this.view;
    const $controller = this.$controller;
    this.queue(() => view.activate(initiator, $controller, $controller.scope));
    this.queue(() => this.swap(initiator, this.value));
    return this.promise;
  }
  detaching(initiator, _parent) {
    this.queue(() => {
      const view = this.view;
      return view.deactivate(initiator, this.$controller);
    });
    return this.promise;
  }
  dispose() {
    var _a3;
    (_a3 = this.view) == null ? void 0 : _a3.dispose();
    this.view = void 0;
  }
  valueChanged(_newValue, _oldValue) {
    if (!this.$controller.isActive) {
      return;
    }
    this.queue(() => this.swap(null, this.value));
  }
  caseChanged($case) {
    this.queue(() => this._handleCaseChange($case));
  }
  /** @internal */
  _handleCaseChange($case) {
    const isMatch = $case.isMatch(this.value);
    const activeCases = this.activeCases;
    const numActiveCases = activeCases.length;
    if (!isMatch) {
      if (numActiveCases > 0 && activeCases[0].id === $case.id) {
        return this._clearActiveCases(null);
      }
      return;
    }
    if (numActiveCases > 0 && activeCases[0].id < $case.id) {
      return;
    }
    const newActiveCases = [];
    let fallThrough = $case.fallThrough;
    if (!fallThrough) {
      newActiveCases.push($case);
    } else {
      const cases = this.cases;
      const idx = cases.indexOf($case);
      for (let i = idx, ii = cases.length; i < ii && fallThrough; i++) {
        const c = cases[i];
        newActiveCases.push(c);
        fallThrough = c.fallThrough;
      }
    }
    return onResolve(this._clearActiveCases(null, newActiveCases), () => {
      this.activeCases = newActiveCases;
      return this._activateCases(null);
    });
  }
  swap(initiator, value) {
    const newActiveCases = [];
    let fallThrough = false;
    for (const $case of this.cases) {
      if (fallThrough || $case.isMatch(value)) {
        newActiveCases.push($case);
        fallThrough = $case.fallThrough;
      }
      if (newActiveCases.length > 0 && !fallThrough) {
        break;
      }
    }
    const defaultCase = this.defaultCase;
    if (newActiveCases.length === 0 && defaultCase !== void 0) {
      newActiveCases.push(defaultCase);
    }
    return onResolve(this.activeCases.length > 0 ? this._clearActiveCases(initiator, newActiveCases) : void 0, () => {
      this.activeCases = newActiveCases;
      if (newActiveCases.length === 0) {
        return;
      }
      return this._activateCases(initiator);
    });
  }
  /** @internal */
  _activateCases(initiator) {
    const controller = this.$controller;
    if (!controller.isActive) {
      return;
    }
    const cases = this.activeCases;
    const length = cases.length;
    if (length === 0) {
      return;
    }
    const scope = controller.scope;
    if (length === 1) {
      return cases[0].activate(initiator, scope);
    }
    return onResolveAll(...cases.map(($case) => $case.activate(initiator, scope)));
  }
  /** @internal */
  _clearActiveCases(initiator, newActiveCases = []) {
    const cases = this.activeCases;
    const numCases = cases.length;
    if (numCases === 0) {
      return;
    }
    if (numCases === 1) {
      const firstCase = cases[0];
      if (!newActiveCases.includes(firstCase)) {
        cases.length = 0;
        return firstCase.deactivate(initiator);
      }
      return;
    }
    return onResolve(onResolveAll(...cases.reduce((acc, $case) => {
      if (!newActiveCases.includes($case)) {
        acc.push($case.deactivate(initiator));
      }
      return acc;
    }, [])), () => {
      cases.length = 0;
    });
  }
  queue(action) {
    const previousPromise = this.promise;
    let promise = void 0;
    promise = this.promise = onResolve(onResolve(previousPromise, action), () => {
      if (this.promise === promise) {
        this.promise = void 0;
      }
    });
  }
  accept(visitor) {
    if (this.$controller.accept(visitor) === true) {
      return true;
    }
    if (this.activeCases.some((x) => x.accept(visitor))) {
      return true;
    }
  }
};
Switch.$au = {
  type: attrTypeName,
  name: "switch",
  isTemplateController: true,
  bindables: ["value"]
};
var caseId = 0;
var bindables = [
  "value",
  {
    name: "fallThrough",
    mode: oneTime,
    set(v) {
      switch (v) {
        case "true":
          return true;
        case "false":
          return false;
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        default:
          return !!v;
      }
    }
  }
];
var Case = class {
  constructor() {
    this.id = ++caseId;
    this.fallThrough = false;
    this.view = void 0;
    this._factory = resolve(IViewFactory);
    this._locator = resolve(IObserverLocator);
    this._location = resolve(IRenderLocation);
    this._logger = resolve(ILogger).scopeTo(`${this.constructor.name}-#${this.id}`);
  }
  link(controller, _childController, _target, _instruction) {
    const switchController = controller.parent;
    const $switch = switchController == null ? void 0 : switchController.viewModel;
    if ($switch instanceof Switch) {
      this.$switch = $switch;
      this.linkToSwitch($switch);
    } else {
      throw createMappedError5(
        815
        /* ErrorNames.switch_invalid_usage */
      );
    }
  }
  detaching(initiator, _parent) {
    return this.deactivate(initiator);
  }
  isMatch(value) {
    this._logger.debug("isMatch()");
    const $value = this.value;
    if (isArray($value)) {
      if (this._observer === void 0) {
        this._observer = this._observeCollection($value);
      }
      return $value.includes(value);
    }
    return $value === value;
  }
  valueChanged(newValue, _oldValue) {
    var _a3;
    if (isArray(newValue)) {
      (_a3 = this._observer) == null ? void 0 : _a3.unsubscribe(this);
      this._observer = this._observeCollection(newValue);
    } else if (this._observer !== void 0) {
      this._observer.unsubscribe(this);
    }
    this.$switch.caseChanged(this);
  }
  handleCollectionChange() {
    this.$switch.caseChanged(this);
  }
  activate(initiator, scope) {
    let view = this.view;
    if (view === void 0) {
      view = this.view = this._factory.create().setLocation(this._location);
    }
    if (view.isActive) {
      return;
    }
    return view.activate(initiator ?? view, this.$controller, scope);
  }
  deactivate(initiator) {
    const view = this.view;
    if (view === void 0 || !view.isActive) {
      return;
    }
    return view.deactivate(initiator ?? view, this.$controller);
  }
  dispose() {
    var _a3, _b3;
    (_a3 = this._observer) == null ? void 0 : _a3.unsubscribe(this);
    (_b3 = this.view) == null ? void 0 : _b3.dispose();
    this.view = void 0;
  }
  linkToSwitch(auSwitch) {
    auSwitch.cases.push(this);
  }
  /** @internal */
  _observeCollection($value) {
    const observer = this._locator.getArrayObserver($value);
    observer.subscribe(this);
    return observer;
  }
  accept(visitor) {
    var _a3;
    if (this.$controller.accept(visitor) === true) {
      return true;
    }
    return (_a3 = this.view) == null ? void 0 : _a3.accept(visitor);
  }
};
(() => {
  defineAttribute({ name: "case", bindables, isTemplateController: true }, Case);
})();
var DefaultCase = class extends Case {
  linkToSwitch($switch) {
    if ($switch.defaultCase !== void 0) {
      throw createMappedError5(
        816
        /* ErrorNames.switch_no_multiple_default */
      );
    }
    $switch.defaultCase = this;
  }
};
(() => {
  defineAttribute({ name: "default-case", bindables, isTemplateController: true }, DefaultCase);
})();
var _a2;
var _b2;
var _c2;
var PromiseTemplateController = class {
  constructor() {
    this.preSettledTask = null;
    this.postSettledTask = null;
    this._factory = resolve(IViewFactory);
    this._location = resolve(IRenderLocation);
    this._platform = resolve(IPlatform2);
    this.logger = resolve(ILogger).scopeTo("promise.resolve");
  }
  link(_controller, _childController, _target, _instruction) {
    this.view = this._factory.create(this.$controller).setLocation(this._location);
  }
  attaching(initiator, _parent) {
    const view = this.view;
    const $controller = this.$controller;
    return onResolve(view.activate(initiator, $controller, this.viewScope = Scope.fromParent($controller.scope, {})), () => this.swap(initiator));
  }
  valueChanged(_newValue, _oldValue) {
    if (!this.$controller.isActive) {
      return;
    }
    this.swap(null);
  }
  swap(initiator) {
    var _a3, _b3;
    const value = this.value;
    if (!isPromise(value)) {
      {
        this.logger.warn(`The value '${safeString3(value)}' is not a promise. No change will be done.`);
      }
      return;
    }
    const q = this._platform.domQueue;
    const fulfilled = this.fulfilled;
    const rejected = this.rejected;
    const pending = this.pending;
    const s = this.viewScope;
    let preSettlePromise;
    const $swap = () => {
      void onResolveAll(
        // At first deactivate the fulfilled and rejected views, as well as activate the pending view.
        // The order of these 3 should not necessarily be sequential (i.e. order-irrelevant).
        preSettlePromise = (this.preSettledTask = q.queueTask(() => {
          return onResolveAll(fulfilled == null ? void 0 : fulfilled.deactivate(initiator), rejected == null ? void 0 : rejected.deactivate(initiator), pending == null ? void 0 : pending.activate(initiator, s));
        })).result.catch((err) => {
          if (!(err instanceof TaskAbortError))
            throw err;
        }),
        value.then((data) => {
          if (this.value !== value) {
            return;
          }
          const fulfill = () => {
            this.postSettlePromise = (this.postSettledTask = q.queueTask(() => onResolveAll(pending == null ? void 0 : pending.deactivate(initiator), rejected == null ? void 0 : rejected.deactivate(initiator), fulfilled == null ? void 0 : fulfilled.activate(initiator, s, data)))).result;
          };
          if (this.preSettledTask.status === tsRunning2) {
            void preSettlePromise.then(fulfill);
          } else {
            this.preSettledTask.cancel();
            fulfill();
          }
        }, (err) => {
          if (this.value !== value) {
            return;
          }
          const reject = () => {
            this.postSettlePromise = (this.postSettledTask = q.queueTask(() => onResolveAll(pending == null ? void 0 : pending.deactivate(initiator), fulfilled == null ? void 0 : fulfilled.deactivate(initiator), rejected == null ? void 0 : rejected.activate(initiator, s, err)))).result;
          };
          if (this.preSettledTask.status === tsRunning2) {
            void preSettlePromise.then(reject);
          } else {
            this.preSettledTask.cancel();
            reject();
          }
        })
      );
    };
    if (((_a3 = this.postSettledTask) == null ? void 0 : _a3.status) === tsRunning2) {
      void this.postSettlePromise.then($swap);
    } else {
      (_b3 = this.postSettledTask) == null ? void 0 : _b3.cancel();
      $swap();
    }
  }
  detaching(initiator, _parent) {
    var _a3, _b3;
    (_a3 = this.preSettledTask) == null ? void 0 : _a3.cancel();
    (_b3 = this.postSettledTask) == null ? void 0 : _b3.cancel();
    this.preSettledTask = this.postSettledTask = null;
    return this.view.deactivate(initiator, this.$controller);
  }
  dispose() {
    var _a3;
    (_a3 = this.view) == null ? void 0 : _a3.dispose();
    this.view = void 0;
  }
};
PromiseTemplateController.$au = {
  type: attrTypeName,
  name: "promise",
  isTemplateController: true,
  bindables: ["value"]
};
var PendingTemplateController = class {
  constructor() {
    this.view = void 0;
    this._factory = resolve(IViewFactory);
    this._location = resolve(IRenderLocation);
  }
  link(controller, _childController, _target, _instruction) {
    getPromiseController(controller).pending = this;
  }
  activate(initiator, scope) {
    let view = this.view;
    if (view === void 0) {
      view = this.view = this._factory.create().setLocation(this._location);
    }
    if (view.isActive) {
      return;
    }
    return view.activate(view, this.$controller, scope);
  }
  deactivate(_initiator) {
    const view = this.view;
    if (view === void 0 || !view.isActive) {
      return;
    }
    return view.deactivate(view, this.$controller);
  }
  detaching(initiator) {
    return this.deactivate(initiator);
  }
  dispose() {
    var _a3;
    (_a3 = this.view) == null ? void 0 : _a3.dispose();
    this.view = void 0;
  }
};
PendingTemplateController.$au = {
  type: attrTypeName,
  name: "pending",
  isTemplateController: true,
  bindables: {
    value: { mode: toView }
  }
};
var FulfilledTemplateController = class {
  constructor() {
    this.view = void 0;
    this._factory = resolve(IViewFactory);
    this._location = resolve(IRenderLocation);
  }
  link(controller, _childController, _target, _instruction) {
    getPromiseController(controller).fulfilled = this;
  }
  activate(initiator, scope, resolvedValue) {
    this.value = resolvedValue;
    let view = this.view;
    if (view === void 0) {
      view = this.view = this._factory.create().setLocation(this._location);
    }
    if (view.isActive) {
      return;
    }
    return view.activate(view, this.$controller, scope);
  }
  deactivate(_initiator) {
    const view = this.view;
    if (view === void 0 || !view.isActive) {
      return;
    }
    return view.deactivate(view, this.$controller);
  }
  detaching(initiator, _parent) {
    return this.deactivate(initiator);
  }
  dispose() {
    var _a3;
    (_a3 = this.view) == null ? void 0 : _a3.dispose();
    this.view = void 0;
  }
};
FulfilledTemplateController.$au = {
  type: attrTypeName,
  name: "then",
  isTemplateController: true,
  bindables: {
    value: { mode: fromView }
  }
};
var RejectedTemplateController = class {
  constructor() {
    this.view = void 0;
    this._factory = resolve(IViewFactory);
    this._location = resolve(IRenderLocation);
  }
  link(controller, _childController, _target, _instruction) {
    getPromiseController(controller).rejected = this;
  }
  activate(initiator, scope, error2) {
    this.value = error2;
    let view = this.view;
    if (view === void 0) {
      view = this.view = this._factory.create().setLocation(this._location);
    }
    if (view.isActive) {
      return;
    }
    return view.activate(view, this.$controller, scope);
  }
  deactivate(_initiator) {
    const view = this.view;
    if (view === void 0 || !view.isActive) {
      return;
    }
    return view.deactivate(view, this.$controller);
  }
  detaching(initiator, _parent) {
    return this.deactivate(initiator);
  }
  dispose() {
    var _a3;
    (_a3 = this.view) == null ? void 0 : _a3.dispose();
    this.view = void 0;
  }
};
RejectedTemplateController.$au = {
  type: attrTypeName,
  name: "catch",
  isTemplateController: true,
  bindables: {
    value: { mode: fromView }
  }
};
function getPromiseController(controller) {
  const promiseController = controller.parent;
  const $promise = promiseController == null ? void 0 : promiseController.viewModel;
  if ($promise instanceof PromiseTemplateController) {
    return $promise;
  }
  throw createMappedError5(
    813
    /* ErrorNames.promise_invalid_usage */
  );
}
var PromiseAttributePattern = class {
  "promise.resolve"(name, value) {
    return new AttrSyntax(name, value, "promise", "bind");
  }
};
_a2 = Symbol.metadata;
PromiseAttributePattern[_a2] = {
  [registrableMetadataKey]: AttributePattern.create([{ pattern: "promise.resolve", symbols: "" }], PromiseAttributePattern)
};
var FulfilledAttributePattern = class {
  "then"(name, value) {
    return new AttrSyntax(name, value, "then", "from-view");
  }
};
_b2 = Symbol.metadata;
FulfilledAttributePattern[_b2] = {
  [registrableMetadataKey]: AttributePattern.create([{ pattern: "then", symbols: "" }], FulfilledAttributePattern)
};
var RejectedAttributePattern = class {
  "catch"(name, value) {
    return new AttrSyntax(name, value, "catch", "from-view");
  }
};
_c2 = Symbol.metadata;
RejectedAttributePattern[_c2] = {
  [registrableMetadataKey]: AttributePattern.create([{ pattern: "catch", symbols: "" }], RejectedAttributePattern)
};
var Focus = class {
  constructor() {
    this._needsApply = false;
    this._element = resolve(INode);
    this._platform = resolve(IPlatform2);
  }
  binding() {
    this.valueChanged();
  }
  /**
   * Invoked everytime the bound value changes.
   *
   * @param newValue - The new value.
   */
  valueChanged() {
    if (this.$controller.isActive) {
      this._apply();
    } else {
      this._needsApply = true;
    }
  }
  /**
   * Invoked when the attribute is attached to the DOM.
   */
  attached() {
    if (this._needsApply) {
      this._needsApply = false;
      this._apply();
    }
    this._element.addEventListener("focus", this);
    this._element.addEventListener("blur", this);
  }
  /**
   * Invoked when the attribute is afterDetachChildren from the DOM.
   */
  detaching() {
    const el = this._element;
    el.removeEventListener("focus", this);
    el.removeEventListener("blur", this);
  }
  /**
   * EventTarget interface handler for better memory usage
   */
  handleEvent(e) {
    if (e.type === "focus") {
      this.value = true;
    } else if (!this._isElFocused) {
      this.value = false;
    }
  }
  /**
   * Focus/blur based on current value
   *
   * @internal
   */
  _apply() {
    const el = this._element;
    const isFocused = this._isElFocused;
    const shouldFocus = this.value;
    if (shouldFocus && !isFocused) {
      el.focus();
    } else if (!shouldFocus && isFocused) {
      el.blur();
    }
  }
  /** @internal */
  get _isElFocused() {
    return this._element === this._platform.document.activeElement;
  }
};
Focus.$au = {
  type: attrTypeName,
  name: "focus",
  bindables: {
    value: { mode: twoWay }
  }
};
var Portal = class {
  constructor() {
    this.position = "beforeend";
    this.strict = false;
    const factory2 = resolve(IViewFactory);
    const originalLoc = resolve(IRenderLocation);
    const p = resolve(IPlatform2);
    this._platform = p;
    this._resolvedTarget = p.document.createElement("div");
    (this.view = factory2.create()).setLocation(this._targetLocation = createLocation(p));
    setEffectiveParentNode(this.view.nodes, originalLoc);
  }
  attaching(initiator) {
    if (this.callbackContext == null) {
      this.callbackContext = this.$controller.scope.bindingContext;
    }
    const newTarget = this._resolvedTarget = this._getTarget();
    this._moveLocation(newTarget, this.position);
    return this._activating(initiator, newTarget);
  }
  detaching(initiator) {
    return this._deactivating(initiator, this._resolvedTarget);
  }
  targetChanged() {
    const { $controller } = this;
    if (!$controller.isActive) {
      return;
    }
    const newTarget = this._getTarget();
    if (this._resolvedTarget === newTarget) {
      return;
    }
    this._resolvedTarget = newTarget;
    const ret = onResolve(this._deactivating(null, newTarget), () => {
      this._moveLocation(newTarget, this.position);
      return this._activating(null, newTarget);
    });
    if (isPromise(ret)) {
      ret.catch(rethrow);
    }
  }
  positionChanged() {
    const { $controller, _resolvedTarget } = this;
    if (!$controller.isActive) {
      return;
    }
    const ret = onResolve(this._deactivating(null, _resolvedTarget), () => {
      this._moveLocation(_resolvedTarget, this.position);
      return this._activating(null, _resolvedTarget);
    });
    if (isPromise(ret)) {
      ret.catch(rethrow);
    }
  }
  /** @internal */
  _activating(initiator, target) {
    const { activating: activating2, callbackContext, view } = this;
    return onResolve(activating2 == null ? void 0 : activating2.call(callbackContext, target, view), () => {
      return this._activate(initiator, target);
    });
  }
  /** @internal */
  _activate(initiator, target) {
    const { $controller, view } = this;
    if (initiator === null) {
      view.nodes.insertBefore(this._targetLocation);
    } else {
      return onResolve(view.activate(initiator ?? view, $controller, $controller.scope), () => {
        return this._activated(target);
      });
    }
    return this._activated(target);
  }
  /** @internal */
  _activated(target) {
    const { activated: activated2, callbackContext, view } = this;
    return activated2 == null ? void 0 : activated2.call(callbackContext, target, view);
  }
  /** @internal */
  _deactivating(initiator, target) {
    const { deactivating: deactivating2, callbackContext, view } = this;
    return onResolve(deactivating2 == null ? void 0 : deactivating2.call(callbackContext, target, view), () => {
      return this._deactivate(initiator, target);
    });
  }
  /** @internal */
  _deactivate(initiator, target) {
    const { $controller, view } = this;
    if (initiator === null) {
      view.nodes.remove();
    } else {
      return onResolve(view.deactivate(initiator, $controller), () => {
        return this._deactivated(target);
      });
    }
    return this._deactivated(target);
  }
  /** @internal */
  _deactivated(target) {
    const { deactivated: deactivated2, callbackContext, view } = this;
    return onResolve(deactivated2 == null ? void 0 : deactivated2.call(callbackContext, target, view), () => this._removeLocation());
  }
  /** @internal */
  _getTarget() {
    const p = this._platform;
    const $document = p.document;
    let target = this.target;
    let context = this.renderContext;
    if (target === "") {
      if (this.strict) {
        throw createMappedError5(
          811
          /* ErrorNames.portal_query_empty */
        );
      }
      return $document.body;
    }
    if (isString(target)) {
      let queryContext = $document;
      if (isString(context)) {
        context = $document.querySelector(context);
      }
      if (context instanceof p.Node) {
        queryContext = context;
      }
      target = queryContext.querySelector(target);
    }
    if (target instanceof p.Node) {
      return target;
    }
    if (target == null) {
      if (this.strict) {
        throw createMappedError5(
          812
          /* ErrorNames.portal_no_target */
        );
      }
      return $document.body;
    }
    return target;
  }
  /** @internal */
  _removeLocation() {
    this._targetLocation.remove();
    this._targetLocation.$start.remove();
  }
  /** @internal */
  _moveLocation(target, position) {
    const end = this._targetLocation;
    const start = end.$start;
    const parent = target.parentNode;
    const nodes = [start, end];
    switch (position) {
      case "beforeend":
        insertManyBefore2(target, null, nodes);
        break;
      case "afterbegin":
        insertManyBefore2(target, target.firstChild, nodes);
        break;
      case "beforebegin":
        insertManyBefore2(parent, target, nodes);
        break;
      case "afterend":
        insertManyBefore2(parent, target.nextSibling, nodes);
        break;
      /* istanbul ignore next */
      default:
        throw createMappedError5(779, position);
    }
  }
  dispose() {
    this.view.dispose();
    this.view = void 0;
    this.callbackContext = null;
  }
  accept(visitor) {
    var _a3;
    if (((_a3 = this.view) == null ? void 0 : _a3.accept(visitor)) === true) {
      return true;
    }
  }
};
Portal.$au = {
  type: attrTypeName,
  name: "portal",
  isTemplateController: true,
  bindables: [
    { name: "target", primary: true },
    "position",
    "activated",
    "activating",
    "callbackContext",
    { name: "renderContext", callback: "targetChanged" },
    "strict",
    "deactivated",
    "deactivating"
  ]
  // bindables: {
  //   target: { primary: true },
  //   position: true,
  //   renderContext: { callback: 'targetChanged' },
  //   activated: true,
  //   activating: true,
  //   callbackContext: true,
  //   deactivated: true,
  //   deactivating: true,
  //   strict: true
  // }
};
var emptyTemplate;
var AuSlot = class _AuSlot {
  constructor() {
    var _a3, _b3, _c3, _d2;
    this._parentScope = null;
    this._outerScope = null;
    this._attached = false;
    this.expose = null;
    this.slotchange = null;
    this._subs = /* @__PURE__ */ new Set();
    this._observer = null;
    const hdrContext = resolve(IHydrationContext);
    const location = resolve(IRenderLocation);
    const instruction = resolve(IInstruction);
    const rendering = resolve(IRendering);
    const slotName = this.name = instruction.data.name;
    const fallback = (_a3 = instruction.projections) == null ? void 0 : _a3[defaultSlotName2];
    const projection = (_c3 = (_b3 = hdrContext.instruction) == null ? void 0 : _b3.projections) == null ? void 0 : _c3[slotName];
    const contextContainer = hdrContext.controller.container;
    let factory2;
    let container;
    if (projection == null) {
      container = contextContainer.createChild({ inheritParentResources: true });
      factory2 = rendering.getViewFactory(fallback ?? (emptyTemplate ?? (emptyTemplate = CustomElementDefinition.create({
        name: "au-slot-empty-template",
        template: "",
        needsCompile: false
      }))), container);
      this._hasProjection = false;
    } else {
      container = contextContainer.createChild();
      container.useResources(hdrContext.parent.controller.container);
      registerResolver(container, IHydrationContext, new InstanceProvider(void 0, hdrContext.parent));
      factory2 = rendering.getViewFactory(projection, container);
      this._hasProjection = true;
      this._slotwatchers = ((_d2 = contextContainer.getAll(IAuSlotWatcher, false)) == null ? void 0 : _d2.filter((w) => w.slotName === "*" || w.slotName === slotName)) ?? emptyArray;
    }
    this._hasSlotWatcher = (this._slotwatchers ?? (this._slotwatchers = emptyArray)).length > 0;
    this._hdrContext = hdrContext;
    this.view = factory2.create().setLocation(this._location = location);
  }
  get nodes() {
    const nodes = [];
    const location = this._location;
    let curr = location.$start.nextSibling;
    while (curr != null && curr !== location) {
      if (curr.nodeType !== /* comment */
      8) {
        nodes.push(curr);
      }
      curr = curr.nextSibling;
    }
    return nodes;
  }
  subscribe(subscriber) {
    this._subs.add(subscriber);
  }
  unsubscribe(subscriber) {
    this._subs.delete(subscriber);
  }
  binding(_initiator, parent) {
    var _a3;
    this._parentScope = parent.scope;
    while (parent.vmKind === "synthetic" && ((_a3 = parent.parent) == null ? void 0 : _a3.viewModel) instanceof _AuSlot) {
      parent = parent.parent.parent;
    }
    const host = parent.scope.bindingContext;
    let outerScope;
    if (this._hasProjection) {
      outerScope = this._hdrContext.controller.scope.parent;
      (this._outerScope = Scope.fromParent(outerScope, outerScope.bindingContext)).overrideContext.$host = this.expose ?? host;
    }
  }
  attaching(initiator, _parent) {
    return onResolve(this.view.activate(initiator, this.$controller, this._hasProjection ? this._outerScope : this._parentScope), () => {
      if (this._hasSlotWatcher) {
        this._slotwatchers.forEach((w) => w.watch(this));
        this._observe();
        this._notifySlotChange();
        this._attached = true;
      }
    });
  }
  detaching(initiator, _parent) {
    this._attached = false;
    this._unobserve();
    this._slotwatchers.forEach((w) => w.unwatch(this));
    return this.view.deactivate(initiator, this.$controller);
  }
  exposeChanged(v) {
    if (this._hasProjection && this._outerScope != null) {
      this._outerScope.overrideContext.$host = v;
    }
  }
  dispose() {
    this.view.dispose();
    this.view = void 0;
  }
  accept(visitor) {
    var _a3;
    if (((_a3 = this.view) == null ? void 0 : _a3.accept(visitor)) === true) {
      return true;
    }
  }
  /** @internal */
  _observe() {
    if (this._observer != null) {
      return;
    }
    const location = this._location;
    const parent = location.parentElement;
    if (parent == null) {
      return;
    }
    (this._observer = createMutationObserver(parent, (records) => {
      if (isMutationWithinLocation(location, records)) {
        this._notifySlotChange();
      }
    })).observe(parent, { childList: true });
  }
  /** @internal */
  _unobserve() {
    var _a3;
    (_a3 = this._observer) == null ? void 0 : _a3.disconnect();
    this._observer = null;
  }
  /** @internal */
  _notifySlotChange() {
    var _a3;
    const nodes = this.nodes;
    const subs = new Set(this._subs);
    let sub;
    if (this._attached) {
      (_a3 = this.slotchange) == null ? void 0 : _a3.call(void 0, this.name, nodes);
    }
    for (sub of subs) {
      sub.handleSlotChange(this, nodes);
    }
  }
};
AuSlot.$au = {
  type: elementTypeName,
  name: "au-slot",
  template: null,
  containerless: true,
  processContent(el, p, data) {
    data.name = el.getAttribute("name") ?? defaultSlotName2;
    let node = el.firstChild;
    let next = null;
    while (node !== null) {
      next = node.nextSibling;
      if (isElement2(node) && node.hasAttribute(auslotAttr2)) {
        {
          console.warn(`[DEV:aurelia] detected [au-slot] attribute on a child node`, `of an <au-slot> element: "<${node.nodeName} au-slot>".`, `This element will be ignored and removed`);
        }
        el.removeChild(node);
      }
      node = next;
    }
  },
  bindables: ["expose", "slotchange"]
};
var comparePosition = (a, b) => a.compareDocumentPosition(b);
var isMutationWithinLocation = (location, records) => {
  for (const { addedNodes, removedNodes, nextSibling } of records) {
    let i = 0;
    let ii = addedNodes.length;
    let node;
    for (; i < ii; ++i) {
      node = addedNodes[i];
      if (comparePosition(location.$start, node) === /* DOCUMENT_POSITION_FOLLOWING */
      4 && comparePosition(location, node) === /* DOCUMENT_POSITION_PRECEDING */
      2) {
        return true;
      }
    }
    if (removedNodes.length > 0) {
      if (nextSibling != null && comparePosition(location.$start, nextSibling) === /* DOCUMENT_POSITION_FOLLOWING */
      4 && comparePosition(location, nextSibling) === /* DOCUMENT_POSITION_PRECEDING */
      2) {
        return true;
      }
    }
  }
};
var AuCompose = class {
  constructor() {
    this.scopeBehavior = "auto";
    this._composition = void 0;
    this.tag = null;
    this._container = resolve(IContainer);
    this.parent = resolve(IController);
    this._host = resolve(INode);
    this._location = resolve(IRenderLocation);
    this._platform = resolve(IPlatform2);
    this._rendering = resolve(IRendering);
    this._instruction = resolve(IInstruction);
    this._contextFactory = resolve(transient(CompositionContextFactory, null));
    this._compiler = resolve(ITemplateCompiler);
    this._hydrationContext = resolve(IHydrationContext);
    this._exprParser = resolve(IExpressionParser);
    this._observerLocator = resolve(IObserverLocator);
  }
  get composing() {
    return this._composing;
  }
  get composition() {
    return this._composition;
  }
  attaching(initiator, _parent) {
    return this._composing = onResolve(this.queue(new ChangeInfo(this.template, this.component, this.model, void 0), initiator), (context) => {
      if (this._contextFactory._isCurrent(context)) {
        this._composing = void 0;
      }
    });
  }
  detaching(initiator) {
    const cmpstn = this._composition;
    const pending = this._composing;
    this._contextFactory.invalidate();
    this._composition = this._composing = void 0;
    return onResolve(pending, () => cmpstn == null ? void 0 : cmpstn.deactivate(initiator));
  }
  /** @internal */
  propertyChanged(name) {
    var _a3;
    if (name === "composing" || name === "composition")
      return;
    if (name === "model" && this._composition != null) {
      this._composition.update(this.model);
      return;
    }
    if (name === "tag" && ((_a3 = this._composition) == null ? void 0 : _a3.controller.vmKind) === vmkCe) {
      {
        console.warn("[DEV:aurelia] Changing tag name of a custom element composition is ignored.");
      }
      return;
    }
    this._composing = onResolve(this._composing, () => onResolve(this.queue(new ChangeInfo(this.template, this.component, this.model, name), void 0), (context) => {
      if (this._contextFactory._isCurrent(context)) {
        this._composing = void 0;
      }
    }));
  }
  /** @internal */
  queue(change, initiator) {
    const factory2 = this._contextFactory;
    const prevCompositionCtrl = this._composition;
    return onResolve(factory2.create(change), (context) => {
      if (factory2._isCurrent(context)) {
        return onResolve(this.compose(context), (result) => {
          if (factory2._isCurrent(context)) {
            return onResolve(result.activate(initiator), () => {
              if (factory2._isCurrent(context)) {
                this._composition = result;
                return onResolve(prevCompositionCtrl == null ? void 0 : prevCompositionCtrl.deactivate(initiator), () => context);
              } else {
                return onResolve(
                  result.controller.deactivate(result.controller, this.$controller),
                  // todo: do we need to deactivate?
                  () => {
                    result.controller.dispose();
                    return context;
                  }
                );
              }
            });
          }
          result.controller.dispose();
          return context;
        });
      }
      return context;
    });
  }
  /** @internal */
  compose(context) {
    const { _template: template, _component: component, _model: model } = context.change;
    const { _container: container, $controller, _location: loc, _instruction } = this;
    const vmDef = this._getDefinition(this._hydrationContext.controller.container, component);
    const childCtn = container.createChild();
    const compositionHost = this._platform.document.createElement(vmDef == null ? this.tag ?? "div" : vmDef.name);
    loc.parentNode.insertBefore(compositionHost, loc);
    let compositionLocation;
    if (vmDef == null) {
      compositionLocation = this.tag == null ? convertToRenderLocation(compositionHost) : null;
    } else {
      compositionLocation = vmDef.containerless ? convertToRenderLocation(compositionHost) : null;
    }
    const removeCompositionHost = () => {
      var _a3;
      compositionHost.remove();
      if (compositionLocation != null) {
        let curr = compositionLocation.$start.nextSibling;
        let next = null;
        while (curr !== null && curr !== compositionLocation) {
          next = curr.nextSibling;
          curr.remove();
          curr = next;
        }
        (_a3 = compositionLocation.$start) == null ? void 0 : _a3.remove();
        compositionLocation.remove();
      }
    };
    const comp = this._createComponentInstance(childCtn, typeof component === "string" ? vmDef.Type : component, compositionHost, compositionLocation);
    const compose = () => {
      const aucomposeCapturedAttrs = _instruction.captures ?? emptyArray;
      if (vmDef !== null) {
        const capture2 = vmDef.capture;
        const [capturedBindingAttrs, transferedToHostBindingAttrs] = aucomposeCapturedAttrs.reduce((attrGroups, attr) => {
          const shouldCapture = !(attr.target in vmDef.bindables) && (capture2 === true || isFunction(capture2) && !!capture2(attr.target));
          attrGroups[shouldCapture ? 0 : 1].push(attr);
          return attrGroups;
        }, [[], []]);
        const controller = Controller.$el(childCtn, comp, compositionHost, {
          projections: _instruction.projections,
          captures: capturedBindingAttrs
        }, vmDef, compositionLocation);
        this._createSpreadBindings(compositionHost, vmDef, transferedToHostBindingAttrs).forEach((b) => controller.addBinding(b));
        return new CompositionController(
          controller,
          (attachInitiator) => controller.activate(attachInitiator ?? controller, $controller, $controller.scope.parent),
          // todo: call deactivate on the component component
          (deactachInitiator) => onResolve(controller.deactivate(deactachInitiator ?? controller, $controller), removeCompositionHost),
          // casting is technically incorrect
          // but it's ignored in the caller anyway
          (model2) => {
            var _a3;
            return (_a3 = comp.activate) == null ? void 0 : _a3.call(comp, model2);
          },
          context
        );
      } else {
        const targetDef = CustomElementDefinition.create({
          name: CustomElement.generateName(),
          template
        });
        const viewFactory = this._rendering.getViewFactory(targetDef, childCtn);
        const controller = Controller.$view(viewFactory, $controller);
        const scope = this.scopeBehavior === "auto" ? Scope.fromParent(this.parent.scope, comp) : Scope.create(comp);
        controller.setHost(compositionHost);
        if (compositionLocation == null) {
          this._createSpreadBindings(compositionHost, targetDef, aucomposeCapturedAttrs).forEach((b) => controller.addBinding(b));
        } else {
          controller.setLocation(compositionLocation);
        }
        return new CompositionController(
          controller,
          (attachInitiator) => controller.activate(attachInitiator ?? controller, $controller, scope),
          // todo: call deactivate on the component
          // a difference with composing custom element is that we leave render location/host alone
          // as they all share the same host/render location
          (detachInitiator) => onResolve(controller.deactivate(detachInitiator ?? controller, $controller), removeCompositionHost),
          // casting is technically incorrect
          // but it's ignored in the caller anyway
          (model2) => {
            var _a3;
            return (_a3 = comp.activate) == null ? void 0 : _a3.call(comp, model2);
          },
          context
        );
      }
    };
    if ("activate" in comp) {
      return onResolve(comp.activate(model), () => compose());
    } else {
      return compose();
    }
  }
  /** @internal */
  _createComponentInstance(container, comp, host, location) {
    if (comp == null) {
      return new EmptyComponent();
    }
    if (typeof comp === "object") {
      return comp;
    }
    const p = this._platform;
    registerHostNode(container, host, p);
    registerResolver(container, IRenderLocation, new InstanceProvider("IRenderLocation", location));
    const instance = container.invoke(comp);
    registerResolver(container, comp, new InstanceProvider("au-compose.component", instance));
    return instance;
  }
  /** @internal */
  _getDefinition(container, component) {
    if (typeof component === "string") {
      const def2 = CustomElement.find(container, component);
      if (def2 == null) {
        throw createMappedError5(806, component);
      }
      return def2;
    }
    const Ctor = isFunction(component) ? component : component == null ? void 0 : component.constructor;
    return CustomElement.isType(Ctor, void 0) ? CustomElement.getDefinition(Ctor, null) : null;
  }
  /** @internal */
  _createSpreadBindings(host, def2, capturedAttrs) {
    const transferHydrationContext = new HydrationContext(this.$controller, { projections: null, captures: capturedAttrs }, this._hydrationContext.parent);
    return SpreadBinding.create(transferHydrationContext, host, def2, this._rendering, this._compiler, this._platform, this._exprParser, this._observerLocator);
  }
};
AuCompose.$au = {
  type: elementTypeName,
  name: "au-compose",
  capture: true,
  containerless: true,
  bindables: [
    "template",
    "component",
    "model",
    { name: "scopeBehavior", set: (v) => {
      if (v === "scoped" || v === "auto") {
        return v;
      }
      throw createMappedError5(805, v);
    } },
    { name: "composing", mode: fromView },
    { name: "composition", mode: fromView },
    "tag"
  ]
};
var EmptyComponent = class {
};
var CompositionContextFactory = class {
  constructor() {
    this.id = 0;
  }
  _isCurrent(context) {
    return context.id === this.id;
  }
  create(changes) {
    return onResolve(changes.load(), (loaded) => new CompositionContext(++this.id, loaded));
  }
  // simplify increasing the id will invalidate all previously created context
  invalidate() {
    this.id++;
  }
};
var ChangeInfo = class {
  constructor(_template, _component, _model, _src) {
    this._template = _template;
    this._component = _component;
    this._model = _model;
    this._src = _src;
  }
  load() {
    if (isPromise(this._template) || isPromise(this._component)) {
      return Promise.all([this._template, this._component]).then(([template, component]) => {
        return new LoadedChangeInfo(template, component, this._model, this._src);
      });
    } else {
      return new LoadedChangeInfo(this._template, this._component, this._model, this._src);
    }
  }
};
var LoadedChangeInfo = class {
  constructor(_template, _component, _model, _src) {
    this._template = _template;
    this._component = _component;
    this._model = _model;
    this._src = _src;
  }
};
var CompositionContext = class {
  constructor(id2, change) {
    this.id = id2;
    this.change = change;
  }
};
var CompositionController = class {
  constructor(controller, start, stop, update, context) {
    this.controller = controller;
    this.start = start;
    this.stop = stop;
    this.update = update;
    this.context = context;
    this.state = 0;
  }
  activate(initiator) {
    if (this.state !== 0) {
      throw createMappedError5(807, this);
    }
    this.state = 1;
    return this.start(initiator);
  }
  deactivate(detachInitator) {
    switch (this.state) {
      case 1:
        this.state = -1;
        return this.stop(detachInitator);
      case -1:
        throw createMappedError5(
          808
          /* ErrorNames.au_compose_duplicate_deactivate */
        );
      default:
        this.state = -1;
    }
  }
};
var ISanitizer = createInterface2("ISanitizer", (x) => x.singleton(class {
  sanitize() {
    throw createMappedError5(99, "sanitize");
  }
}));
var SanitizeValueConverter = class {
  constructor() {
    this._sanitizer = resolve(ISanitizer);
  }
  /**
   * Process the provided markup that flows to the view.
   *
   * @param untrustedMarkup - The untrusted markup to be sanitized.
   */
  toView(untrustedMarkup) {
    if (untrustedMarkup == null) {
      return null;
    }
    return this._sanitizer.sanitize(untrustedMarkup);
  }
};
SanitizeValueConverter.$au = {
  type: converterTypeName,
  name: "sanitize"
};
var Show = class {
  constructor() {
    this.el = resolve(INode);
    this.p = resolve(IPlatform2);
    this._isActive = false;
    this._task = null;
    this.$val = "";
    this.$prio = "";
    this.update = () => {
      this._task = null;
      if (Boolean(this.value) !== this._isToggled) {
        if (this._isToggled === this._base) {
          this._isToggled = !this._base;
          this.$val = this.el.style.getPropertyValue("display");
          this.$prio = this.el.style.getPropertyPriority("display");
          this.el.style.setProperty("display", "none", "important");
        } else {
          this._isToggled = this._base;
          this.el.style.setProperty("display", this.$val, this.$prio);
          if (this.el.getAttribute("style") === "") {
            this.el.removeAttribute("style");
          }
        }
      }
    };
    const instr = resolve(IInstruction);
    this._isToggled = this._base = instr.alias !== "hide";
  }
  binding() {
    this._isActive = true;
    this.update();
  }
  detaching() {
    var _a3;
    this._isActive = false;
    (_a3 = this._task) == null ? void 0 : _a3.cancel();
    this._task = null;
  }
  valueChanged() {
    if (this._isActive && this._task === null) {
      this._task = this.p.domQueue.queueTask(this.update);
    }
  }
};
Show.$au = {
  type: attrTypeName,
  name: "show",
  bindables: ["value"],
  aliases: ["hide"]
};
var DefaultComponents = [
  RuntimeTemplateCompilerImplementation,
  DirtyChecker,
  NodeObserverLocator
];
var DefaultBindingSyntax = [
  RefAttributePattern,
  DotSeparatedAttributePattern,
  EventAttributePattern,
  EventModifierRegistration
];
var ShortHandBindingSyntax = [
  AtPrefixedTriggerAttributePattern,
  ColonPrefixedBindAttributePattern
];
var DefaultBindingLanguage = [
  DefaultBindingCommand,
  OneTimeBindingCommand,
  FromViewBindingCommand,
  ToViewBindingCommand,
  TwoWayBindingCommand,
  ForBindingCommand,
  RefBindingCommand,
  TriggerBindingCommand,
  CaptureBindingCommand,
  ClassBindingCommand,
  StyleBindingCommand,
  AttrBindingCommand,
  SpreadValueBindingCommand
];
var DefaultResources = [
  DebounceBindingBehavior,
  OneTimeBindingBehavior,
  ToViewBindingBehavior,
  FromViewBindingBehavior,
  SignalBindingBehavior,
  ThrottleBindingBehavior,
  TwoWayBindingBehavior,
  SanitizeValueConverter,
  If,
  Else,
  Repeat,
  With,
  Switch,
  Case,
  DefaultCase,
  PromiseTemplateController,
  PendingTemplateController,
  FulfilledTemplateController,
  RejectedTemplateController,
  PromiseAttributePattern,
  FulfilledAttributePattern,
  RejectedAttributePattern,
  AttrBindingBehavior,
  SelfBindingBehavior,
  UpdateTriggerBindingBehavior,
  AuCompose,
  Portal,
  Focus,
  Show,
  AuSlot
];
var DefaultRenderers = [
  PropertyBindingRenderer,
  IteratorBindingRenderer,
  RefBindingRenderer,
  InterpolationBindingRenderer,
  SetPropertyRenderer,
  CustomElementRenderer,
  CustomAttributeRenderer,
  TemplateControllerRenderer,
  LetElementRenderer,
  ListenerBindingRenderer,
  AttributeBindingRenderer,
  SetAttributeRenderer,
  SetClassAttributeRenderer,
  SetStyleAttributeRenderer,
  StylePropertyBindingRenderer,
  TextBindingRenderer,
  SpreadRenderer,
  SpreadValueRenderer
];
var StandardConfiguration = createConfiguration(noop);
function createConfiguration(optionsProvider) {
  return {
    optionsProvider,
    /**
     * Apply this configuration to the provided container.
     */
    register(container) {
      const runtimeConfigurationOptions = {
        coercingOptions: {
          enableCoercion: false,
          coerceNullish: false
        }
      };
      optionsProvider(runtimeConfigurationOptions);
      return container.register(instanceRegistration2(ICoercionConfiguration, runtimeConfigurationOptions.coercingOptions), ExpressionParser, ...DefaultComponents, ...DefaultResources, ...DefaultBindingSyntax, ...DefaultBindingLanguage, ...DefaultRenderers);
    },
    customize(cb) {
      return createConfiguration(cb ?? optionsProvider);
    }
  };
}
function children(configOrTarget, context) {
  if (!children.mixed) {
    children.mixed = true;
    subscriberCollection(ChildrenBinding, null);
    lifecycleHooks()(ChildrenLifecycleHooks, null);
  }
  let config;
  const dependenciesKey = getAnnotationKeyFor2("dependencies");
  function decorator(_target, context2) {
    var _a3;
    switch (context2.kind) {
      case "field":
        config.name = context2.name;
        break;
    }
    const dependencies = (_a3 = context2.metadata)[dependenciesKey] ?? (_a3[dependenciesKey] = []);
    dependencies.push(new ChildrenLifecycleHooks(config ?? {}));
  }
  if (arguments.length > 1) {
    config = {};
    decorator(configOrTarget, context);
    return;
  } else if (isString(configOrTarget)) {
    config = {
      query: configOrTarget
      // filter: (node: Node) => isElement(node) && node.matches(configOrTarget),
      // map: el => el
    };
    return decorator;
  }
  config = configOrTarget === void 0 ? {} : configOrTarget;
  return decorator;
}
children.mixed = false;
var ChildrenBinding = class {
  constructor(host, obj, callback, query, filter, map) {
    this._children = void 0;
    this.isBound = false;
    this.obj = obj;
    this._callback = callback;
    this._query = query;
    this._filter = filter;
    this._map = map;
    this._observer = createMutationObserver(this._host = host, () => {
      this._onChildrenChanged();
    });
  }
  getValue() {
    return this.isBound ? this._children : this._getNodes();
  }
  setValue(_value) {
  }
  bind() {
    if (this.isBound) {
      return;
    }
    this.isBound = true;
    this._observer.observe(this._host, { childList: true });
    this._children = this._getNodes();
  }
  unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    this._observer.takeRecords();
    this._observer.disconnect();
    this._children = emptyArray;
  }
  /** @internal */
  _onChildrenChanged() {
    var _a3;
    this._children = this._getNodes();
    (_a3 = this._callback) == null ? void 0 : _a3.call(this.obj);
    this.subs.notify(this._children, void 0);
  }
  get() {
    throw createMappedError5(99, "get");
  }
  /** @internal */
  // freshly retrieve the children everytime
  // in case this observer is not observing
  _getNodes() {
    const query = this._query;
    const filter = this._filter;
    const map = this._map;
    const nodes = query === "$all" ? this._host.childNodes : this._host.querySelectorAll(`:scope > ${query}`);
    const ii = nodes.length;
    const results = [];
    const findControllerOptions = { optional: true };
    let $controller;
    let viewModel;
    let i = 0;
    let node;
    while (ii > i) {
      node = nodes[i];
      $controller = findElementControllerFor(node, findControllerOptions);
      viewModel = ($controller == null ? void 0 : $controller.viewModel) ?? null;
      if (filter == null ? true : filter(node, viewModel)) {
        results.push(map == null ? viewModel ?? node : map(node, viewModel));
      }
      ++i;
    }
    return results;
  }
};
var ChildrenLifecycleHooks = class {
  constructor(_def) {
    this._def = _def;
  }
  register(c) {
    instanceRegistration2(ILifecycleHooks, this).register(c);
  }
  hydrating(vm, controller) {
    const $def = this._def;
    const query = $def.query ?? "*";
    const childrenObserver = new ChildrenBinding(controller.host, vm, vm[$def.callback ?? `${safeString3($def.name)}Changed`], query, $def.filter, $def.map);
    if (/[\s>]/.test(query)) {
      throw createMappedError5(9989, query);
    }
    def(vm, $def.name, {
      enumerable: true,
      configurable: true,
      get: objectAssign2(() => childrenObserver.getValue(), { getObserver: () => childrenObserver }),
      set: () => {
        {
          console.warn(`[DEV:aurelia] property ${safeString3($def.name)} decorated with @children is readonly`);
        }
      }
    });
    controller.addBinding(childrenObserver);
  }
};

export {
  Metadata,
  isArrayIndex,
  camelCase,
  pascalCase,
  kebabCase,
  toArray,
  bound,
  onResolve,
  Registration,
  getResourceKeyFor,
  Protocol,
  resolve,
  inject,
  DI,
  IContainer,
  IServiceLocator,
  transient,
  singleton,
  InstanceProvider,
  emptyArray,
  emptyObject,
  noop,
  all,
  lazy,
  optional,
  ignore,
  factory,
  resource,
  allResources,
  newInstanceForScope,
  newInstanceOf,
  LogLevel,
  ILogger,
  ConsoleSink,
  LoggerConfiguration,
  IEventAggregator,
  EventAggregator,
  CustomExpression,
  IExpressionParser,
  BindingMode,
  ITemplateCompiler,
  IAttrMapper,
  IAttributePattern,
  IAttributeParser,
  attributePattern,
  AttributePattern,
  IInstruction,
  bindingCommand,
  BindingCommand,
  ITemplateElementFactory,
  ITemplateCompilerHooks,
  TemplateCompilerHooks,
  templateCompilerHooks,
  Scope,
  AccessorType,
  batch,
  subscriberCollection,
  ComputedObserver,
  IObserverLocator,
  IObservation,
  observable,
  Platform,
  TaskQueue,
  TaskAbortError,
  Task,
  BrowserPlatform,
  bindable,
  Bindable,
  BindableDefinition,
  coercer,
  alias,
  registerAliases,
  bindingBehavior,
  BindingBehaviorDefinition,
  BindingBehavior,
  BindingModeBehavior,
  OneTimeBindingBehavior,
  ToViewBindingBehavior,
  FromViewBindingBehavior,
  TwoWayBindingBehavior,
  DebounceBindingBehavior,
  ISignaler,
  SignalBindingBehavior,
  ThrottleBindingBehavior,
  IAppTask,
  AppTask,
  IPlatform2 as IPlatform,
  watch,
  Watch,
  customAttribute,
  templateController,
  CustomAttributeDefinition,
  CustomAttribute,
  ILifecycleHooks,
  LifecycleHooksEntry,
  LifecycleHooksDefinition,
  LifecycleHooks,
  lifecycleHooks,
  valueConverter,
  ValueConverterDefinition,
  ValueConverter,
  BindingTargetSubscriber,
  mixinUseScope,
  mixinAstEvaluator,
  IFlushQueue,
  FlushQueue,
  mixingBindingLimited,
  AttributeBinding,
  InterpolationBinding,
  InterpolationPartBinding,
  ContentBinding,
  LetBinding,
  PropertyBinding,
  RefBinding,
  ListenerBindingOptions,
  ListenerBinding,
  IModifiedEventHandlerCreator,
  IKeyMapping,
  IEventModifier,
  EventModifier,
  EventModifierRegistration,
  IViewFactory,
  ViewFactory,
  IAuSlotsInfo,
  AuSlotsInfo,
  IAuSlotWatcher,
  slotted,
  ClassAttributeAccessor,
  IRenderer,
  renderer,
  SetPropertyRenderer,
  CustomElementRenderer,
  CustomAttributeRenderer,
  TemplateControllerRenderer,
  LetElementRenderer,
  RefBindingRenderer,
  InterpolationBindingRenderer,
  PropertyBindingRenderer,
  IteratorBindingRenderer,
  TextBindingRenderer,
  IListenerBindingOptions,
  ListenerBindingRenderer,
  SetAttributeRenderer,
  SetClassAttributeRenderer,
  SetStyleAttributeRenderer,
  StylePropertyBindingRenderer,
  AttributeBindingRenderer,
  SpreadRenderer,
  IRendering,
  Rendering,
  cssModules,
  CSSModulesProcessorRegistry,
  shadowCSS,
  IShadowDOMStyleFactory,
  ShadowDOMRegistry,
  IShadowDOMStyles,
  IShadowDOMGlobalStyles,
  AdoptedStyleSheetsStyles,
  StyleElementStyles,
  StyleConfiguration,
  ComputedWatcher,
  ExpressionWatcher,
  Controller,
  isCustomElementController,
  isCustomElementViewModel,
  State,
  IController,
  IHydrationContext,
  getRef,
  setRef,
  INode,
  IEventTarget,
  IRenderLocation,
  getEffectiveParentNode,
  setEffectiveParentNode,
  convertToRenderLocation,
  isRenderLocation,
  FragmentNodeSequence,
  IWindow,
  ILocation,
  IHistory,
  registerHostNode,
  customElement,
  useShadowDOM,
  containerless,
  CustomElementDefinition,
  CustomElement,
  processContent,
  capture,
  IAppRoot,
  AppRoot,
  IAurelia,
  Aurelia,
  ISVGAnalyzer,
  NoopSVGAnalyzer,
  SVGAnalyzer,
  AttrMapper,
  RuntimeTemplateCompilerImplementation,
  AttributeNSAccessor,
  DataAttributeAccessor,
  SelectValueObserver,
  StyleAttributeAccessor,
  ValueAttributeObserver,
  NodeObserverLocator,
  CheckedObserver,
  AttrBindingBehavior,
  SelfBindingBehavior,
  UpdateTriggerBindingBehavior,
  If,
  Else,
  Repeat,
  IRepeatableHandlerResolver,
  ArrayLikeHandler,
  IRepeatableHandler,
  With,
  Switch,
  Case,
  DefaultCase,
  PromiseTemplateController,
  PendingTemplateController,
  FulfilledTemplateController,
  RejectedTemplateController,
  Focus,
  Portal,
  AuSlot,
  AuCompose,
  ISanitizer,
  SanitizeValueConverter,
  DefaultComponents,
  DefaultBindingSyntax,
  ShortHandBindingSyntax,
  DefaultBindingLanguage,
  DefaultResources,
  DefaultRenderers,
  StandardConfiguration,
  children,
  ChildrenBinding
};
//# sourceMappingURL=chunk-S7YNWOLH.js.map
