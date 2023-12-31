import {
  computed,
  defineComponent,
  h,
  inject,
  onBeforeMount,
  provide,
  renderSlot
} from "./chunk-YFLFHFTV.js";

// ../node_modules/.pnpm/css-render@0.13.9/node_modules/css-render/esm/parse.js
function ampCount(selector) {
  let cnt = 0;
  for (let i = 0; i < selector.length; ++i) {
    if (selector[i] === "&")
      ++cnt;
  }
  return cnt;
}
var seperatorRegex = /\s*,(?![^(]*\))\s*/g;
var extraSpaceRegex = /\s+/g;
function resolveSelectorWithAmp(amp, selector) {
  const nextAmp = [];
  selector.split(seperatorRegex).forEach((partialSelector) => {
    let round = ampCount(partialSelector);
    if (!round) {
      amp.forEach((partialAmp) => {
        nextAmp.push(
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          (partialAmp && partialAmp + " ") + partialSelector
        );
      });
      return;
    } else if (round === 1) {
      amp.forEach((partialAmp) => {
        nextAmp.push(partialSelector.replace("&", partialAmp));
      });
      return;
    }
    let partialNextAmp = [
      partialSelector
    ];
    while (round--) {
      const nextPartialNextAmp = [];
      partialNextAmp.forEach((selectorItr) => {
        amp.forEach((partialAmp) => {
          nextPartialNextAmp.push(selectorItr.replace("&", partialAmp));
        });
      });
      partialNextAmp = nextPartialNextAmp;
    }
    partialNextAmp.forEach((part) => nextAmp.push(part));
  });
  return nextAmp;
}
function resolveSelector(amp, selector) {
  const nextAmp = [];
  selector.split(seperatorRegex).forEach((partialSelector) => {
    amp.forEach((partialAmp) => {
      nextAmp.push((partialAmp && partialAmp + " ") + partialSelector);
    });
  });
  return nextAmp;
}
function parseSelectorPath(selectorPaths) {
  let amp = [""];
  selectorPaths.forEach((selector) => {
    selector = selector && selector.trim();
    if (
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      !selector
    ) {
      return;
    }
    if (selector.includes("&")) {
      amp = resolveSelectorWithAmp(amp, selector);
    } else {
      amp = resolveSelector(amp, selector);
    }
  });
  return amp.join(", ").replace(extraSpaceRegex, " ");
}

// ../node_modules/.pnpm/css-render@0.13.9/node_modules/css-render/esm/render.js
var kebabRegex = /[A-Z]/g;
function kebabCase(pattern) {
  return pattern.replace(kebabRegex, (match) => "-" + match.toLowerCase());
}
function upwrapProperty(prop, indent = "  ") {
  if (typeof prop === "object" && prop !== null) {
    return " {\n" + Object.entries(prop).map((v) => {
      return indent + `  ${kebabCase(v[0])}: ${v[1]};`;
    }).join("\n") + "\n" + indent + "}";
  }
  return `: ${prop};`;
}
function upwrapProperties(props, instance, params) {
  if (typeof props === "function") {
    return props({
      context: instance.context,
      props: params
    });
  }
  return props;
}
function createStyle(selector, props, instance, params) {
  if (!props)
    return "";
  const unwrappedProps = upwrapProperties(props, instance, params);
  if (!unwrappedProps)
    return "";
  if (typeof unwrappedProps === "string") {
    return `${selector} {
${unwrappedProps}
}`;
  }
  const propertyNames = Object.keys(unwrappedProps);
  if (propertyNames.length === 0) {
    if (instance.config.keepEmptyBlock)
      return selector + " {\n}";
    return "";
  }
  const statements = selector ? [
    selector + " {"
  ] : [];
  propertyNames.forEach((propertyName) => {
    const property = unwrappedProps[propertyName];
    if (propertyName === "raw") {
      statements.push("\n" + property + "\n");
      return;
    }
    propertyName = kebabCase(propertyName);
    if (property !== null && property !== void 0) {
      statements.push(`  ${propertyName}${upwrapProperty(property)}`);
    }
  });
  if (selector) {
    statements.push("}");
  }
  return statements.join("\n");
}
function loopCNodeListWithCallback(children, options, callback) {
  if (!children)
    return;
  children.forEach((child) => {
    if (Array.isArray(child)) {
      loopCNodeListWithCallback(child, options, callback);
    } else if (typeof child === "function") {
      const grandChildren = child(options);
      if (Array.isArray(grandChildren)) {
        loopCNodeListWithCallback(grandChildren, options, callback);
      } else if (grandChildren) {
        callback(grandChildren);
      }
    } else if (child) {
      callback(child);
    }
  });
}
function traverseCNode(node, selectorPaths, styles, instance, params, styleSheet) {
  const $ = node.$;
  if (!$ || typeof $ === "string") {
    selectorPaths.push($);
  } else if (typeof $ === "function") {
    selectorPaths.push($({
      context: instance.context,
      props: params
    }));
  } else {
    if ($.before)
      $.before(instance.context);
    if (!$.$ || typeof $.$ === "string") {
      selectorPaths.push($.$);
    } else if ($.$) {
      selectorPaths.push($.$({
        context: instance.context,
        props: params
      }));
    }
  }
  const selector = parseSelectorPath(selectorPaths);
  const style2 = createStyle(selector, node.props, instance, params);
  if (styleSheet && style2) {
    styleSheet.insertRule(style2);
  }
  if (!styleSheet && style2.length)
    styles.push(style2);
  if (node.children) {
    loopCNodeListWithCallback(node.children, {
      context: instance.context,
      props: params
    }, (childNode) => {
      if (typeof childNode === "string") {
        const style3 = createStyle(selector, { raw: childNode }, instance, params);
        if (styleSheet) {
          styleSheet.insertRule(style3);
        } else {
          styles.push(style3);
        }
      } else {
        traverseCNode(childNode, selectorPaths, styles, instance, params, styleSheet);
      }
    });
  }
  selectorPaths.pop();
  if ($ && $.after)
    $.after(instance.context);
}
function render(node, instance, props, insertRule = false) {
  const styles = [];
  traverseCNode(node, [], styles, instance, props, insertRule ? node.instance.__styleSheet : void 0);
  if (insertRule)
    return "";
  return styles.join("\n\n");
}

// ../node_modules/.pnpm/@emotion+hash@0.8.0/node_modules/@emotion/hash/dist/hash.browser.esm.js
function murmur2(str) {
  var h2 = 0;
  var k, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h2 = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h2 ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h2 ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h2 ^= str.charCodeAt(i) & 255;
      h2 = /* Math.imul(h, m): */
      (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  h2 ^= h2 >>> 13;
  h2 = /* Math.imul(h, m): */
  (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}
var hash_browser_esm_default = murmur2;

// ../node_modules/.pnpm/css-render@0.13.9/node_modules/css-render/esm/utils.js
function removeElement(el) {
  if (!el)
    return;
  const parentElement = el.parentElement;
  if (parentElement)
    parentElement.removeChild(el);
}
function queryElement(id) {
  return document.querySelector(`style[cssr-id="${id}"]`);
}
function createElement(id) {
  const el = document.createElement("style");
  el.setAttribute("cssr-id", id);
  return el;
}

// ../node_modules/.pnpm/css-render@0.13.9/node_modules/css-render/esm/mount.js
if (window) {
  window.__cssrContext = {};
}
function getCount(el) {
  const count = el.getAttribute("mount-count");
  if (count === null)
    return null;
  return Number(count);
}
function setCount(el, count) {
  el.setAttribute("mount-count", String(count));
}
function unmount(intance, node, id, count) {
  const { els } = node;
  if (id === void 0) {
    els.forEach(removeElement);
    node.els = [];
  } else {
    const target = queryElement(id);
    if (target && els.includes(target)) {
      const mountCount = getCount(target);
      if (!count) {
        if (mountCount !== null) {
          console.error(`[css-render/unmount]: The style with target='${id}' is mounted in no-count mode.`);
        } else {
          removeElement(target);
          node.els = els.filter((el) => el !== target);
        }
      } else {
        if (mountCount === null) {
          console.error(`[css-render/unmount]: The style with target='${id}' is mounted in count mode.`);
        } else {
          if (mountCount <= 1) {
            removeElement(target);
            node.els = els.filter((el) => el !== target);
          } else
            setCount(target, mountCount - 1);
        }
      }
    }
  }
}
function addElementToList(els, target) {
  els.push(target);
}
function mount(instance, node, id, props, head, count, boost, force, ssrAdapter) {
  if (boost && !ssrAdapter) {
    if (id === void 0) {
      console.error("[css-render/mount]: `id` is required in `boost` mode.");
      return;
    }
    const cssrContext = window.__cssrContext;
    if (!cssrContext[id]) {
      cssrContext[id] = true;
      render(node, instance, props, boost);
    }
    return;
  }
  let target;
  const { els } = node;
  let style2;
  if (id === void 0) {
    style2 = node.render(props);
    id = hash_browser_esm_default(style2);
  }
  if (ssrAdapter) {
    ssrAdapter(id, style2 !== null && style2 !== void 0 ? style2 : node.render(props));
    return;
  }
  const queriedTarget = queryElement(id);
  if (force || queriedTarget === null) {
    target = queriedTarget === null ? createElement(id) : queriedTarget;
    if (style2 === void 0)
      style2 = node.render(props);
    target.textContent = style2;
    if (queriedTarget !== null)
      return;
    if (head) {
      const firstStyleEl = document.head.getElementsByTagName("style")[0] || null;
      document.head.insertBefore(target, firstStyleEl);
    } else {
      document.head.appendChild(target);
    }
    if (count) {
      setCount(target, 1);
    }
    addElementToList(els, target);
  } else {
    const mountCount = getCount(queriedTarget);
    if (count) {
      if (mountCount === null) {
        console.error(`[css-render/mount]: The style with id='${id}' has been mounted in no-count mode.`);
      } else {
        setCount(queriedTarget, mountCount + 1);
      }
    } else {
      if (mountCount !== null) {
        console.error(`[css-render/mount]: The style with id='${id}' has been mounted in count mode.`);
      }
    }
  }
  return queriedTarget !== null && queriedTarget !== void 0 ? queriedTarget : target;
}

// ../node_modules/.pnpm/css-render@0.13.9/node_modules/css-render/esm/c.js
function wrappedRender(props) {
  return render(this, this.instance, props);
}
function wrappedMount(options = {}) {
  const { target, id, ssr, props, count = false, head = false, boost = false, force = false } = options;
  const targetElement = mount(this.instance, this, id !== null && id !== void 0 ? id : target, props, head, count, boost, force, ssr);
  return targetElement;
}
function wrappedUnmount(options = {}) {
  const { id, target, delay = 0, count = false } = options;
  if (delay === 0)
    unmount(this.instance, this, id !== null && id !== void 0 ? id : target, count);
  else {
    setTimeout(() => unmount(this.instance, this, id !== null && id !== void 0 ? id : target, count), delay);
  }
}
var createCNode = function(instance, $, props, children) {
  return {
    instance,
    $,
    props,
    children,
    els: [],
    render: wrappedRender,
    mount: wrappedMount,
    unmount: wrappedUnmount
  };
};
var c = function(instance, $, props, children) {
  if (Array.isArray($)) {
    return createCNode(instance, { $: null }, null, $);
  }
  if (Array.isArray(props)) {
    return createCNode(instance, $, null, props);
  } else if (Array.isArray(children)) {
    return createCNode(instance, $, props, children);
  } else {
    return createCNode(instance, $, props, null);
  }
};

// ../node_modules/.pnpm/css-render@0.13.9/node_modules/css-render/esm/CssRender.js
function CssRender(config = {}) {
  let styleSheet = null;
  const cssr = {
    c: (...args) => c(cssr, ...args),
    use: (plugin, ...args) => plugin.install(cssr, ...args),
    find: queryElement,
    context: {},
    config,
    get __styleSheet() {
      if (!styleSheet) {
        const style2 = document.createElement("style");
        document.head.appendChild(style2);
        styleSheet = document.styleSheets[document.styleSheets.length - 1];
        return styleSheet;
      }
      return styleSheet;
    }
  };
  return cssr;
}

// ../node_modules/.pnpm/@xicons+utils@0.1.4/node_modules/@xicons/utils/es/style.js
var { c: c2 } = CssRender();
var style = c2(".xicon", {
  width: "1em",
  height: "1em",
  display: "inline-flex"
}, [
  c2("svg", {
    width: "1em",
    height: "1em"
  }),
  c2("svg:not([fill])", {
    fill: "currentColor"
  })
]);
var mountStyle = () => {
  style.mount({ id: "xicons-icon" });
};

// ../node_modules/.pnpm/@vicons+utils@0.1.4_vue@3.3.7/node_modules/@vicons/utils/es/IconConfigProvider.js
var iconConfigProviderProps = {
  size: [String, Number],
  color: String,
  tag: String
};
var iconConfigInjectionKey = Symbol("IconConfigInjection");
var IconConfigProvider = defineComponent({
  name: "IconConfigProvider",
  props: iconConfigProviderProps,
  setup(props, { slots }) {
    provide(iconConfigInjectionKey, props);
    return () => renderSlot(slots, "default");
  }
});

// ../node_modules/.pnpm/@vicons+utils@0.1.4_vue@3.3.7/node_modules/@vicons/utils/es/config.js
var defaultTag = "span";

// ../node_modules/.pnpm/@vicons+utils@0.1.4_vue@3.3.7/node_modules/@vicons/utils/es/Icon.js
var Icon = defineComponent({
  name: "Icon",
  props: iconConfigProviderProps,
  setup(props, { slots }) {
    const IconConfigProvider2 = inject(iconConfigInjectionKey, null);
    const mergedSizeRef = computed(() => {
      var _a;
      const _size = (_a = props.size) !== null && _a !== void 0 ? _a : IconConfigProvider2 === null || IconConfigProvider2 === void 0 ? void 0 : IconConfigProvider2.size;
      if (_size === void 0) {
        return void 0;
      }
      if (typeof _size === "number" || /^\d+$/.test(_size))
        return `${_size}px`;
      return _size;
    });
    const mergedColorRef = computed(() => {
      const { color } = props;
      if (color === void 0) {
        if (IconConfigProvider2) {
          return IconConfigProvider2.color;
        }
        return void 0;
      }
      return color;
    });
    const mergedTagRef = computed(() => {
      var _a;
      const { tag } = props;
      if (tag === void 0) {
        return (_a = IconConfigProvider2 === null || IconConfigProvider2 === void 0 ? void 0 : IconConfigProvider2.tag) !== null && _a !== void 0 ? _a : defaultTag;
      }
      return tag;
    });
    onBeforeMount(() => {
      mountStyle();
    });
    return () => h(mergedTagRef.value, {
      class: "xicon",
      style: {
        color: mergedColorRef.value,
        fontSize: mergedSizeRef.value
      }
    }, [
      renderSlot(slots, "default")
    ]);
  }
});
export {
  Icon,
  IconConfigProvider
};
//# sourceMappingURL=@vicons_utils.js.map
