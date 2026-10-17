/*! Zurlii Home UI v2.1.0 — MIT License — generated bundle, do not edit directly. */

// node_modules/@lit/reactive-element/css-tag.js
var t = globalThis;
var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s = /* @__PURE__ */ Symbol();
var o = /* @__PURE__ */ new WeakMap();
var n = class {
  constructor(t4, e4, o5) {
    if (this._$cssResult$ = true, o5 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t4, this.t = e4;
  }
  get styleSheet() {
    let t4 = this.o;
    const s4 = this.t;
    if (e && void 0 === t4) {
      const e4 = void 0 !== s4 && 1 === s4.length;
      e4 && (t4 = o.get(s4)), void 0 === t4 && ((this.o = t4 = new CSSStyleSheet()).replaceSync(this.cssText), e4 && o.set(s4, t4));
    }
    return t4;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t4) => new n("string" == typeof t4 ? t4 : t4 + "", void 0, s);
var i = (t4, ...e4) => {
  const o5 = 1 === t4.length ? t4[0] : e4.reduce((e5, s4, o6) => e5 + ((t5) => {
    if (true === t5._$cssResult$) return t5.cssText;
    if ("number" == typeof t5) return t5;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s4) + t4[o6 + 1], t4[0]);
  return new n(o5, t4, s);
};
var S = (s4, o5) => {
  if (e) s4.adoptedStyleSheets = o5.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet);
  else for (const e4 of o5) {
    const o6 = document.createElement("style"), n4 = t.litNonce;
    void 0 !== n4 && o6.setAttribute("nonce", n4), o6.textContent = e4.cssText, s4.appendChild(o6);
  }
};
var c = e ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
  let e4 = "";
  for (const s4 of t5.cssRules) e4 += s4.cssText;
  return r(e4);
})(t4) : t4;

// node_modules/@lit/reactive-element/reactive-element.js
var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
var a = globalThis;
var c2 = a.trustedTypes;
var l = c2 ? c2.emptyScript : "";
var p = a.reactiveElementPolyfillSupport;
var d = (t4, s4) => t4;
var u = { toAttribute(t4, s4) {
  switch (s4) {
    case Boolean:
      t4 = t4 ? l : null;
      break;
    case Object:
    case Array:
      t4 = null == t4 ? t4 : JSON.stringify(t4);
  }
  return t4;
}, fromAttribute(t4, s4) {
  let i5 = t4;
  switch (s4) {
    case Boolean:
      i5 = null !== t4;
      break;
    case Number:
      i5 = null === t4 ? null : Number(t4);
      break;
    case Object:
    case Array:
      try {
        i5 = JSON.parse(t4);
      } catch (t5) {
        i5 = null;
      }
  }
  return i5;
} };
var f = (t4, s4) => !i2(t4, s4);
var b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
Symbol.metadata ?? (Symbol.metadata = /* @__PURE__ */ Symbol("metadata")), a.litPropertyMetadata ?? (a.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
var y = class extends HTMLElement {
  static addInitializer(t4) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t4);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t4, s4 = b) {
    if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t4) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t4, s4), !s4.noAccessor) {
      const i5 = /* @__PURE__ */ Symbol(), h3 = this.getPropertyDescriptor(t4, i5, s4);
      void 0 !== h3 && e2(this.prototype, t4, h3);
    }
  }
  static getPropertyDescriptor(t4, s4, i5) {
    const { get: e4, set: r4 } = h(this.prototype, t4) ?? { get() {
      return this[s4];
    }, set(t5) {
      this[s4] = t5;
    } };
    return { get: e4, set(s5) {
      const h3 = e4 == null ? void 0 : e4.call(this);
      r4 == null ? void 0 : r4.call(this, s5), this.requestUpdate(t4, h3, i5);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t4) {
    return this.elementProperties.get(t4) ?? b;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d("elementProperties"))) return;
    const t4 = n2(this);
    t4.finalize(), void 0 !== t4.l && (this.l = [...t4.l]), this.elementProperties = new Map(t4.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
      const t5 = this.properties, s4 = [...r2(t5), ...o2(t5)];
      for (const i5 of s4) this.createProperty(i5, t5[i5]);
    }
    const t4 = this[Symbol.metadata];
    if (null !== t4) {
      const s4 = litPropertyMetadata.get(t4);
      if (void 0 !== s4) for (const [t5, i5] of s4) this.elementProperties.set(t5, i5);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t5, s4] of this.elementProperties) {
      const i5 = this._$Eu(t5, s4);
      void 0 !== i5 && this._$Eh.set(i5, t5);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s4) {
    const i5 = [];
    if (Array.isArray(s4)) {
      const e4 = new Set(s4.flat(1 / 0).reverse());
      for (const s5 of e4) i5.unshift(c(s5));
    } else void 0 !== s4 && i5.push(c(s4));
    return i5;
  }
  static _$Eu(t4, s4) {
    const i5 = s4.attribute;
    return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t4 ? t4.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var _a2;
    this._$ES = new Promise((t4) => this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (_a2 = this.constructor.l) == null ? void 0 : _a2.forEach((t4) => t4(this));
  }
  addController(t4) {
    var _a2;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t4), void 0 !== this.renderRoot && this.isConnected && ((_a2 = t4.hostConnected) == null ? void 0 : _a2.call(t4));
  }
  removeController(t4) {
    var _a2;
    (_a2 = this._$EO) == null ? void 0 : _a2.delete(t4);
  }
  _$E_() {
    const t4 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
    for (const i5 of s4.keys()) this.hasOwnProperty(i5) && (t4.set(i5, this[i5]), delete this[i5]);
    t4.size > 0 && (this._$Ep = t4);
  }
  createRenderRoot() {
    const t4 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S(t4, this.constructor.elementStyles), t4;
  }
  connectedCallback() {
    var _a2;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t4) => {
      var _a3;
      return (_a3 = t4.hostConnected) == null ? void 0 : _a3.call(t4);
    });
  }
  enableUpdating(t4) {
  }
  disconnectedCallback() {
    var _a2;
    (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t4) => {
      var _a3;
      return (_a3 = t4.hostDisconnected) == null ? void 0 : _a3.call(t4);
    });
  }
  attributeChangedCallback(t4, s4, i5) {
    this._$AK(t4, i5);
  }
  _$ET(t4, s4) {
    var _a2;
    const i5 = this.constructor.elementProperties.get(t4), e4 = this.constructor._$Eu(t4, i5);
    if (void 0 !== e4 && true === i5.reflect) {
      const h3 = (void 0 !== ((_a2 = i5.converter) == null ? void 0 : _a2.toAttribute) ? i5.converter : u).toAttribute(s4, i5.type);
      this._$Em = t4, null == h3 ? this.removeAttribute(e4) : this.setAttribute(e4, h3), this._$Em = null;
    }
  }
  _$AK(t4, s4) {
    var _a2, _b;
    const i5 = this.constructor, e4 = i5._$Eh.get(t4);
    if (void 0 !== e4 && this._$Em !== e4) {
      const t5 = i5.getPropertyOptions(e4), h3 = "function" == typeof t5.converter ? { fromAttribute: t5.converter } : void 0 !== ((_a2 = t5.converter) == null ? void 0 : _a2.fromAttribute) ? t5.converter : u;
      this._$Em = e4;
      const r4 = h3.fromAttribute(s4, t5.type);
      this[e4] = r4 ?? ((_b = this._$Ej) == null ? void 0 : _b.get(e4)) ?? r4, this._$Em = null;
    }
  }
  requestUpdate(t4, s4, i5, e4 = false, h3) {
    var _a2;
    if (void 0 !== t4) {
      const r4 = this.constructor;
      if (false === e4 && (h3 = this[t4]), i5 ?? (i5 = r4.getPropertyOptions(t4)), !((i5.hasChanged ?? f)(h3, s4) || i5.useDefault && i5.reflect && h3 === ((_a2 = this._$Ej) == null ? void 0 : _a2.get(t4)) && !this.hasAttribute(r4._$Eu(t4, i5)))) return;
      this.C(t4, s4, i5);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t4, s4, { useDefault: i5, reflect: e4, wrapped: h3 }, r4) {
    i5 && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t4) && (this._$Ej.set(t4, r4 ?? s4 ?? this[t4]), true !== h3 || void 0 !== r4) || (this._$AL.has(t4) || (this.hasUpdated || i5 || (s4 = void 0), this._$AL.set(t4, s4)), true === e4 && this._$Em !== t4 && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t4));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t5) {
      Promise.reject(t5);
    }
    const t4 = this.scheduleUpdate();
    return null != t4 && await t4, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var _a2;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [t6, s5] of this._$Ep) this[t6] = s5;
        this._$Ep = void 0;
      }
      const t5 = this.constructor.elementProperties;
      if (t5.size > 0) for (const [s5, i5] of t5) {
        const { wrapped: t6 } = i5, e4 = this[s5];
        true !== t6 || this._$AL.has(s5) || void 0 === e4 || this.C(s5, void 0, i5, e4);
      }
    }
    let t4 = false;
    const s4 = this._$AL;
    try {
      t4 = this.shouldUpdate(s4), t4 ? (this.willUpdate(s4), (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t5) => {
        var _a3;
        return (_a3 = t5.hostUpdate) == null ? void 0 : _a3.call(t5);
      }), this.update(s4)) : this._$EM();
    } catch (s5) {
      throw t4 = false, this._$EM(), s5;
    }
    t4 && this._$AE(s4);
  }
  willUpdate(t4) {
  }
  _$AE(t4) {
    var _a2;
    (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t5) => {
      var _a3;
      return (_a3 = t5.hostUpdated) == null ? void 0 : _a3.call(t5);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t4) {
    return true;
  }
  update(t4) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t5) => this._$ET(t5, this[t5]))), this._$EM();
  }
  updated(t4) {
  }
  firstUpdated(t4) {
  }
};
y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p == null ? void 0 : p({ ReactiveElement: y }), (a.reactiveElementVersions ?? (a.reactiveElementVersions = [])).push("2.1.2");

// node_modules/lit-html/lit-html.js
var t2 = globalThis;
var i3 = (t4) => t4;
var s2 = t2.trustedTypes;
var e3 = s2 ? s2.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
var h2 = "$lit$";
var o3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
var n3 = "?" + o3;
var r3 = `<${n3}>`;
var l2 = document;
var c3 = () => l2.createComment("");
var a2 = (t4) => null === t4 || "object" != typeof t4 && "function" != typeof t4;
var u2 = Array.isArray;
var d2 = (t4) => u2(t4) || "function" == typeof (t4 == null ? void 0 : t4[Symbol.iterator]);
var f2 = "[ 	\n\f\r]";
var v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var _ = /-->/g;
var m = />/g;
var p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var g = /'/g;
var $ = /"/g;
var y2 = /^(?:script|style|textarea|title)$/i;
var x = (t4) => (i5, ...s4) => ({ _$litType$: t4, strings: i5, values: s4 });
var b2 = x(1);
var w = x(2);
var T = x(3);
var E = /* @__PURE__ */ Symbol.for("lit-noChange");
var A = /* @__PURE__ */ Symbol.for("lit-nothing");
var C = /* @__PURE__ */ new WeakMap();
var P = l2.createTreeWalker(l2, 129);
function V(t4, i5) {
  if (!u2(t4) || !t4.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e3 ? e3.createHTML(i5) : i5;
}
var N = (t4, i5) => {
  const s4 = t4.length - 1, e4 = [];
  let n4, l3 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c4 = v;
  for (let i6 = 0; i6 < s4; i6++) {
    const s5 = t4[i6];
    let a3, u3, d3 = -1, f3 = 0;
    for (; f3 < s5.length && (c4.lastIndex = f3, u3 = c4.exec(s5), null !== u3); ) f3 = c4.lastIndex, c4 === v ? "!--" === u3[1] ? c4 = _ : void 0 !== u3[1] ? c4 = m : void 0 !== u3[2] ? (y2.test(u3[2]) && (n4 = RegExp("</" + u3[2], "g")), c4 = p2) : void 0 !== u3[3] && (c4 = p2) : c4 === p2 ? ">" === u3[0] ? (c4 = n4 ?? v, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? p2 : '"' === u3[3] ? $ : g) : c4 === $ || c4 === g ? c4 = p2 : c4 === _ || c4 === m ? c4 = v : (c4 = p2, n4 = void 0);
    const x2 = c4 === p2 && t4[i6 + 1].startsWith("/>") ? " " : "";
    l3 += c4 === v ? s5 + r3 : d3 >= 0 ? (e4.push(a3), s5.slice(0, d3) + h2 + s5.slice(d3) + o3 + x2) : s5 + o3 + (-2 === d3 ? i6 : x2);
  }
  return [V(t4, l3 + (t4[s4] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), e4];
};
var S2 = class _S {
  constructor({ strings: t4, _$litType$: i5 }, e4) {
    let r4;
    this.parts = [];
    let l3 = 0, a3 = 0;
    const u3 = t4.length - 1, d3 = this.parts, [f3, v2] = N(t4, i5);
    if (this.el = _S.createElement(f3, e4), P.currentNode = this.el.content, 2 === i5 || 3 === i5) {
      const t5 = this.el.content.firstChild;
      t5.replaceWith(...t5.childNodes);
    }
    for (; null !== (r4 = P.nextNode()) && d3.length < u3; ) {
      if (1 === r4.nodeType) {
        if (r4.hasAttributes()) for (const t5 of r4.getAttributeNames()) if (t5.endsWith(h2)) {
          const i6 = v2[a3++], s4 = r4.getAttribute(t5).split(o3), e5 = /([.?@])?(.*)/.exec(i6);
          d3.push({ type: 1, index: l3, name: e5[2], strings: s4, ctor: "." === e5[1] ? I : "?" === e5[1] ? L : "@" === e5[1] ? z : H }), r4.removeAttribute(t5);
        } else t5.startsWith(o3) && (d3.push({ type: 6, index: l3 }), r4.removeAttribute(t5));
        if (y2.test(r4.tagName)) {
          const t5 = r4.textContent.split(o3), i6 = t5.length - 1;
          if (i6 > 0) {
            r4.textContent = s2 ? s2.emptyScript : "";
            for (let s4 = 0; s4 < i6; s4++) r4.append(t5[s4], c3()), P.nextNode(), d3.push({ type: 2, index: ++l3 });
            r4.append(t5[i6], c3());
          }
        }
      } else if (8 === r4.nodeType) if (r4.data === n3) d3.push({ type: 2, index: l3 });
      else {
        let t5 = -1;
        for (; -1 !== (t5 = r4.data.indexOf(o3, t5 + 1)); ) d3.push({ type: 7, index: l3 }), t5 += o3.length - 1;
      }
      l3++;
    }
  }
  static createElement(t4, i5) {
    const s4 = l2.createElement("template");
    return s4.innerHTML = t4, s4;
  }
};
function M(t4, i5, s4 = t4, e4) {
  var _a2, _b;
  if (i5 === E) return i5;
  let h3 = void 0 !== e4 ? (_a2 = s4._$Co) == null ? void 0 : _a2[e4] : s4._$Cl;
  const o5 = a2(i5) ? void 0 : i5._$litDirective$;
  return (h3 == null ? void 0 : h3.constructor) !== o5 && ((_b = h3 == null ? void 0 : h3._$AO) == null ? void 0 : _b.call(h3, false), void 0 === o5 ? h3 = void 0 : (h3 = new o5(t4), h3._$AT(t4, s4, e4)), void 0 !== e4 ? (s4._$Co ?? (s4._$Co = []))[e4] = h3 : s4._$Cl = h3), void 0 !== h3 && (i5 = M(t4, h3._$AS(t4, i5.values), h3, e4)), i5;
}
var R = class {
  constructor(t4, i5) {
    this._$AV = [], this._$AN = void 0, this._$AD = t4, this._$AM = i5;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t4) {
    const { el: { content: i5 }, parts: s4 } = this._$AD, e4 = ((t4 == null ? void 0 : t4.creationScope) ?? l2).importNode(i5, true);
    P.currentNode = e4;
    let h3 = P.nextNode(), o5 = 0, n4 = 0, r4 = s4[0];
    for (; void 0 !== r4; ) {
      if (o5 === r4.index) {
        let i6;
        2 === r4.type ? i6 = new k(h3, h3.nextSibling, this, t4) : 1 === r4.type ? i6 = new r4.ctor(h3, r4.name, r4.strings, this, t4) : 6 === r4.type && (i6 = new Z(h3, this, t4)), this._$AV.push(i6), r4 = s4[++n4];
      }
      o5 !== (r4 == null ? void 0 : r4.index) && (h3 = P.nextNode(), o5++);
    }
    return P.currentNode = l2, e4;
  }
  p(t4) {
    let i5 = 0;
    for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t4, s4, i5), i5 += s4.strings.length - 2) : s4._$AI(t4[i5])), i5++;
  }
};
var k = class _k {
  get _$AU() {
    var _a2;
    return ((_a2 = this._$AM) == null ? void 0 : _a2._$AU) ?? this._$Cv;
  }
  constructor(t4, i5, s4, e4) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t4, this._$AB = i5, this._$AM = s4, this.options = e4, this._$Cv = (e4 == null ? void 0 : e4.isConnected) ?? true;
  }
  get parentNode() {
    let t4 = this._$AA.parentNode;
    const i5 = this._$AM;
    return void 0 !== i5 && 11 === (t4 == null ? void 0 : t4.nodeType) && (t4 = i5.parentNode), t4;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t4, i5 = this) {
    t4 = M(this, t4, i5), a2(t4) ? t4 === A || null == t4 || "" === t4 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t4 !== this._$AH && t4 !== E && this._(t4) : void 0 !== t4._$litType$ ? this.$(t4) : void 0 !== t4.nodeType ? this.T(t4) : d2(t4) ? this.k(t4) : this._(t4);
  }
  O(t4) {
    return this._$AA.parentNode.insertBefore(t4, this._$AB);
  }
  T(t4) {
    this._$AH !== t4 && (this._$AR(), this._$AH = this.O(t4));
  }
  _(t4) {
    this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t4 : this.T(l2.createTextNode(t4)), this._$AH = t4;
  }
  $(t4) {
    var _a2;
    const { values: i5, _$litType$: s4 } = t4, e4 = "number" == typeof s4 ? this._$AC(t4) : (void 0 === s4.el && (s4.el = S2.createElement(V(s4.h, s4.h[0]), this.options)), s4);
    if (((_a2 = this._$AH) == null ? void 0 : _a2._$AD) === e4) this._$AH.p(i5);
    else {
      const t5 = new R(e4, this), s5 = t5.u(this.options);
      t5.p(i5), this.T(s5), this._$AH = t5;
    }
  }
  _$AC(t4) {
    let i5 = C.get(t4.strings);
    return void 0 === i5 && C.set(t4.strings, i5 = new S2(t4)), i5;
  }
  k(t4) {
    u2(this._$AH) || (this._$AH = [], this._$AR());
    const i5 = this._$AH;
    let s4, e4 = 0;
    for (const h3 of t4) e4 === i5.length ? i5.push(s4 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s4 = i5[e4], s4._$AI(h3), e4++;
    e4 < i5.length && (this._$AR(s4 && s4._$AB.nextSibling, e4), i5.length = e4);
  }
  _$AR(t4 = this._$AA.nextSibling, s4) {
    var _a2;
    for ((_a2 = this._$AP) == null ? void 0 : _a2.call(this, false, true, s4); t4 !== this._$AB; ) {
      const s5 = i3(t4).nextSibling;
      i3(t4).remove(), t4 = s5;
    }
  }
  setConnected(t4) {
    var _a2;
    void 0 === this._$AM && (this._$Cv = t4, (_a2 = this._$AP) == null ? void 0 : _a2.call(this, t4));
  }
};
var H = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t4, i5, s4, e4, h3) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t4, this.name = i5, this._$AM = e4, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = A;
  }
  _$AI(t4, i5 = this, s4, e4) {
    const h3 = this.strings;
    let o5 = false;
    if (void 0 === h3) t4 = M(this, t4, i5, 0), o5 = !a2(t4) || t4 !== this._$AH && t4 !== E, o5 && (this._$AH = t4);
    else {
      const e5 = t4;
      let n4, r4;
      for (t4 = h3[0], n4 = 0; n4 < h3.length - 1; n4++) r4 = M(this, e5[s4 + n4], i5, n4), r4 === E && (r4 = this._$AH[n4]), o5 || (o5 = !a2(r4) || r4 !== this._$AH[n4]), r4 === A ? t4 = A : t4 !== A && (t4 += (r4 ?? "") + h3[n4 + 1]), this._$AH[n4] = r4;
    }
    o5 && !e4 && this.j(t4);
  }
  j(t4) {
    t4 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 ?? "");
  }
};
var I = class extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t4) {
    this.element[this.name] = t4 === A ? void 0 : t4;
  }
};
var L = class extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t4) {
    this.element.toggleAttribute(this.name, !!t4 && t4 !== A);
  }
};
var z = class extends H {
  constructor(t4, i5, s4, e4, h3) {
    super(t4, i5, s4, e4, h3), this.type = 5;
  }
  _$AI(t4, i5 = this) {
    if ((t4 = M(this, t4, i5, 0) ?? A) === E) return;
    const s4 = this._$AH, e4 = t4 === A && s4 !== A || t4.capture !== s4.capture || t4.once !== s4.once || t4.passive !== s4.passive, h3 = t4 !== A && (s4 === A || e4);
    e4 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
  }
  handleEvent(t4) {
    var _a2;
    "function" == typeof this._$AH ? this._$AH.call(((_a2 = this.options) == null ? void 0 : _a2.host) ?? this.element, t4) : this._$AH.handleEvent(t4);
  }
};
var Z = class {
  constructor(t4, i5, s4) {
    this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s4;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t4) {
    M(this, t4);
  }
};
var B = t2.litHtmlPolyfillSupport;
B == null ? void 0 : B(S2, k), (t2.litHtmlVersions ?? (t2.litHtmlVersions = [])).push("3.3.3");
var D = (t4, i5, s4) => {
  const e4 = (s4 == null ? void 0 : s4.renderBefore) ?? i5;
  let h3 = e4._$litPart$;
  if (void 0 === h3) {
    const t5 = (s4 == null ? void 0 : s4.renderBefore) ?? null;
    e4._$litPart$ = h3 = new k(i5.insertBefore(c3(), t5), t5, void 0, s4 ?? {});
  }
  return h3._$AI(t4), h3;
};

// node_modules/lit-element/lit-element.js
var s3 = globalThis;
var i4 = class extends y {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var _a2;
    const t4 = super.createRenderRoot();
    return (_a2 = this.renderOptions).renderBefore ?? (_a2.renderBefore = t4.firstChild), t4;
  }
  update(t4) {
    const r4 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Do = D(r4, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var _a2;
    super.connectedCallback(), (_a2 = this._$Do) == null ? void 0 : _a2.setConnected(true);
  }
  disconnectedCallback() {
    var _a2;
    super.disconnectedCallback(), (_a2 = this._$Do) == null ? void 0 : _a2.setConnected(false);
  }
  render() {
    return E;
  }
};
var _a;
i4._$litElement$ = true, i4["finalized"] = true, (_a = s3.litElementHydrateSupport) == null ? void 0 : _a.call(s3, { LitElement: i4 });
var o4 = s3.litElementPolyfillSupport;
o4 == null ? void 0 : o4({ LitElement: i4 });
(s3.litElementVersions ?? (s3.litElementVersions = [])).push("4.2.2");

// src/i18n.js
var ro = {
  "nav.home": "Acas\u0103",
  "nav.lights": "Lumini",
  "nav.covers": "Jaluzele",
  "nav.climate": "Clim\u0103",
  "nav.rooms": "\xCEnc\u0103peri",
  "nav.spaces": "\xCEnc\u0103peri",
  "nav.cameras": "Camere",
  "nav.music": "Muzic\u0103",
  "nav.youtube": "YouTube",
  "nav.assistant": "Asistent",
  "nav.controls": "Control total",
  "nav.weather": "Vremea",
  "nav.energy": "Energie",
  "nav.media": "Media",
  "nav.routines": "Rutine",
  "nav.system": "Sistem",
  "nav.label": "Navigare principal\u0103",
  "nav.open": "Deschide {name}",
  "clock.greeting": "Bun\u0103, {name}",
  "clock.morning": "Bun\u0103 diminea\u021Ba, {name}",
  "clock.afternoon": "Bun\u0103 ziua, {name}",
  "clock.evening": "Bun\u0103 seara, {name}",
  "clock.night": "Noaptea bun\u0103, {name}",
  "clock.today": "Ast\u0103zi",
  "clock.tomorrow": "M\xE2ine",
  "status.home": "Acas\u0103",
  "status.away": "Plecat",
  "status.online": "Conectat",
  "status.offline": "Deconectat",
  "status.unknown": "Necunoscut",
  "status.unavailable": "Indisponibil",
  "status.active": "{count} active",
  "status.people": "{count} persoane",
  "status.sunset": "Apus",
  "status.system": "Sistem",
  "status.network": "Re\u021Bea",
  "status.all_good": "Totul este \xEEn regul\u0103",
  "status.attention": "Necesit\u0103 aten\u021Bie",
  "status.updates": "{count} actualiz\u0103ri",
  "status.update_one": "1 actualizare",
  "sheet.home.eyebrow": "Centru de control",
  "sheet.home.title": "Bun\u0103, {name}",
  "sheet.home.subtitle": "Casa ta, \xEEntr-o singur\u0103 privire.",
  "sheet.lights.title": "Centru de control lumini",
  "sheet.lights.subtitle": "Intensitate, stare \u0219i control pe fiecare camer\u0103.",
  "sheet.covers.title": "Centru de control jaluzele",
  "sheet.covers.subtitle": "Pozi\u021Bie, deschidere \u0219i oprire pentru fiecare umbrire.",
  "sheet.climate.title": "Centru de control clim\u0103",
  "sheet.climate.subtitle": "Temperatur\u0103, mod \u0219i confort pe fiecare zon\u0103.",
  "sheet.youtube.title": "YouTube",
  "sheet.youtube.subtitle": "Caut\u0103, red\u0103 pe tablet\u0103 sau trimite la televizor.",
  "sheet.youtube.eyebrow": "Video & muzic\u0103",
  "sheet.cameras.title": "Camere live",
  "sheet.cameras.subtitle": "Toate camerele de filmare, direct pe ecran.",
  "sheet.cameras.eyebrow": "Camere de filmare",
  "sheet.music.title": "Muzic\u0103",
  "sheet.music.subtitle": "Alege sursa \u0219i unde s\u0103 c\xE2nte.",
  "sheet.music.eyebrow": "Sunet & atmosfer\u0103",
  "sheet.assistant.title": "Asistentul casei",
  "sheet.assistant.subtitle": "Vorbit sau scris \u2014 execut\u0103 comenzi reale \xEEn Home Assistant.",
  "sheet.assistant.eyebrow": "Voce & control",
  "sheet.controls.title": "Control total",
  "sheet.controls.subtitle": "Fiecare entitate mapat\u0103, cu butoanele ei.",
  "sheet.controls.eyebrow": "Toate dispozitivele",
  "sheet.rooms.title": "\xCEnc\u0103peri",
  "sheet.rooms.subtitle": "Toate spa\u021Biile casei \u0219i dispozitivele lor.",
  "sheet.system.title": "Sistem & re\u021Bea",
  "sheet.system.subtitle": "Starea casei, conexiuni, actualiz\u0103ri \u0219i asistent.",
  "sheet.room.eyebrow": "Control \xEEnc\u0103pere",
  "sheet.room.subtitle": "Toate dispozitivele acestui spa\u021Biu, \xEEntr-un singur loc.",
  "sheet.system.eyebrow": "Casa mea",
  "sheet.rooms.eyebrow": "Spa\u021Bii",
  "sheet.lights.eyebrow": "Iluminat",
  "sheet.covers.eyebrow": "Umbrire",
  "sheet.climate.eyebrow": "Confort",
  "sheet.weather.eyebrow": "Meteo",
  "sheet.weather.title": "Vremea",
  "sheet.weather.subtitle": "Condi\u021Bii curente, detalii \u0219i prognoz\u0103.",
  "sheet.energy.eyebrow": "Consum",
  "sheet.energy.title": "Energie & consum",
  "sheet.energy.subtitle": "Putere live, energie \u0219i economie.",
  "sheet.media.eyebrow": "Media",
  "sheet.media.title": "Media & televizoare",
  "sheet.media.subtitle": "Toate sursele \u0219i telecomenzile \xEEntr-un singur loc.",
  "sheet.routines.eyebrow": "Momente",
  "sheet.routines.title": "Rutine inteligente",
  "sheet.routines.subtitle": "Scene generate din dispozitivele mapate.",
  "section.quick": "\xCEnc\u0103peri",
  "section.house": "Starea casei",
  "section.sun": "Soare & lumin\u0103 natural\u0103",
  "section.network": "Re\u021Bea & conectivitate",
  "section.system": "Sistem & actualiz\u0103ri",
  "section.assist": "\xCEntreab\u0103 casa",
  "section.todo": "Lista de cump\u0103r\u0103turi",
  "section.media": "Media & televizor",
  "section.remote": "Telecomand\u0103",
  "section.energy": "Energie & consum",
  "section.sensors": "Senzori",
  "section.lights": "Lumini",
  "section.covers": "Jaluzele",
  "section.climate": "Clim\u0103",
  "section.plugs": "Prize & consum",
  "section.appliances": "Electrocasnice",
  "section.overview": "Rezumat",
  "section.preview": "Previzualizare layout",
  "section.weather": "Vremea",
  "section.forecast": "Prognoz\u0103",
  "section.routines": "Rutine",
  "section.doorbell": "Sonerie poart\u0103",
  "section.cameras_live": "Camere live",
  "section.family": "Familie \xB7 G\u0103sire",
  "section.printer": "Imprimant\u0103 3D",
  "printer.empty_title": "Imprimanta nu a fost g\u0103sit\u0103",
  "printer.empty_body": "Verific\u0103 numele dispozitivului sau mapeaz\u0103 explicit entit\u0103\u021Bile Creality.",
  "printer.map_hint": "Dispozitiv c\u0103utat: {name}. Mapare explicit\u0103: printer.entities",
  "printer.no_object": "Niciun obiect \xEEn curs",
  "printer.progress": "Progres",
  "printer.nozzle": "Buz\u0103",
  "printer.bed": "Pat",
  "printer.chamber": "Camer\u0103",
  "printer.pause": "Pauz\u0103",
  "printer.resume": "Reia",
  "printer.stop": "Stop",
  "printer.home": "Home",
  "printer.reconnect": "Reconectare",
  "printer.speed": "Vitez\u0103",
  "printer.flow": "Flow",
  "printer.speed_factor": "Factor vitez\u0103",
  "printer.light": "Lumin\u0103",
  "printer.filament": "Filament",
  "printer.used_material": "Material folosit",
  "printer.objects": "Obiecte",
  "printer.job_time": "Timp job",
  "printer.flow_rate": "Debit",
  "printer.print_control": "Control print",
  "printer.max_nozzle": "Max buz\u0103",
  "printer.max_bed": "Max pat",
  "printer.max_chamber": "Max camer\u0103",
  "printer.status.printing": "Se tip\u0103re\u0219te",
  "printer.status.paused": "Pauz\u0103",
  "printer.status.idle": "Inactiv\u0103",
  "printer.status.completed": "Finalizat",
  "printer.status.error": "Eroare",
  "printer.status.heating": "\xCEnc\u0103lzire",
  "printer.status.preheating": "Pre\xEEnc\u0103lzire",
  "printer.status.leveling": "Calibrare",
  "printer.status.offline": "Offline",
  "family.people": "{count} persoane",
  "family.empty_title": "Nicio persoan\u0103 cu loca\u021Bie",
  "family.empty_body": "Adaug\u0103 tracker-e \xEEn global.family.trackers sau las\u0103 auto-descoperirea activ\u0103 pentru person \u0219i device_tracker.",
  "family.map_hint": "Mapare: global.family.trackers: [device_tracker.<entity_id>]",
  "family.home": "Acas\u0103",
  "family.battery": "Baterie",
  "family.distance": "Distan\u021B\u0103",
  "family.last_seen": "Actualizat",
  "family.no_location": "F\u0103r\u0103 loca\u021Bie",
  "family.attribution": "\xA9 OpenStreetMap contributors",
  "empty.title": "Nicio entitate mapat\u0103",
  "empty.body": "Structura este preg\u0103tit\u0103. Adaug\u0103 entit\u0103\u021Bile \xEEn configura\u021Bie, f\u0103r\u0103 s\u0103 modifici codul componentei.",
  "empty.room_title": "Camer\u0103 preg\u0103tit\u0103 pentru automatizare",
  "empty.room_body": "Pop-up-ul, grila \u0219i fundalul sunt deja generate. Mapeaz\u0103 dispozitivele c\xE2nd sunt gata.",
  "empty.lights_title": "Niciun modul de lumin\u0103 mapat",
  "empty.lights_body": "C\xE2nd adaugi entit\u0103\u021Bi de tip light, aceast\u0103 pagin\u0103 va genera automat carduri cu intensitate \u0219i stare.",
  "empty.covers_title": "Nicio jaluzea mapat\u0103",
  "empty.covers_body": "C\xE2nd adaugi entit\u0103\u021Bi de tip cover, aici vor ap\u0103rea controlul pozi\u021Biei \u0219i comenzile de deschidere.",
  "empty.climate_title": "Niciun termostat mapat",
  "empty.climate_body": "C\xE2nd adaugi entit\u0103\u021Bi de tip climate, pagina va genera temperatura \u021Bint\u0103, modurile \u0219i controlul.",
  "empty.plugs_title": "Nicio priz\u0103 mapat\u0103",
  "empty.plugs_body": "Adaug\u0103 prize Tuya sau switch-uri \xEEn grupul plugs.",
  "empty.slot": "Slot liber",
  "empty.slot_hint": "Neconfigurat",
  "empty.map_hint": "Cum mapez?",
  "empty.map_body": "Adaug\u0103 entit\u0103\u021Bile \xEEn configura\u021Bia cardului sau \xEEn op\u021Biunile integr\u0103rii. Cheia `rooms` accept\u0103 override par\u021Bial, deci nu trebuie s\u0103 rescrii tot dashboard-ul.",
  "empty.copy": "Copiaz\u0103 exemplul",
  "empty.copied": "Exemplu copiat",
  "empty.docs": "Ghid de mapare",
  "empty.docs_hint": "Vezi docs/entity-mapping.md",
  "action.close": "\xCEnchide",
  "action.open": "Deschide",
  "action.back": "\xCEnapoi",
  "action.turn_on": "Porne\u0219te",
  "action.turn_off": "Opre\u0219te",
  "action.toggle": "Comut\u0103",
  "action.play": "Red\u0103",
  "action.pause": "Pauz\u0103",
  "action.stop": "Stop",
  "action.install": "Instaleaz\u0103",
  "action.update": "Actualizeaz\u0103",
  "action.send": "Trimite",
  "action.add": "Adaug\u0103",
  "action.test": "Trimite test",
  "action.copy": "Copiaz\u0103",
  "action.ok": "OK",
  "action.up": "Sus",
  "action.down": "Jos",
  "action.left": "St\xE2nga",
  "action.right": "Dreapta",
  "action.open_cover": "Deschide",
  "action.close_cover": "\xCEnchide",
  "action.stop_cover": "Stop",
  "action.all_off": "Opre\u0219te tot",
  "action.details": "Detalii",
  "action.retry": "Re\xEEncearc\u0103",
  "action.home": "Acas\u0103",
  "action.reset": "\xCEnapoi la cas\u0103",
  "action.see_all": "Vezi tot",
  "action.all_spaces": "Toate \xEEnc\u0103peri",
  "action.scan": "Scaneaz\u0103",
  "control.brightness": "Luminozitate",
  "control.position": "Pozi\u021Bie",
  "control.target": "\u021Aint\u0103",
  "control.current": "Curent",
  "control.mode": "Mod",
  "control.source": "Surs\u0103",
  "control.volume": "Volum",
  "control.channel": "Canal",
  "control.power": "Putere",
  "control.energy": "Energie",
  "control.saved": "Economie",
  "control.difference": "Diferen\u021B\u0103",
  "control.installed": "Instalat",
  "control.latest": "Ultima versiune",
  "control.battery": "Baterie",
  "control.state": "Stare",
  "control.updated": "Actualizat",
  "control.temperature": "Temperatur\u0103",
  "control.humidity": "Umiditate",
  "control.no_value": "F\u0103r\u0103 valoare",
  "control.percent": "{value}%",
  "control.set": "Seteaz\u0103",
  "control.commands": "Comenzi rapide",
  "remote.hint": "Semnalele sunt trimise direct c\u0103tre integrarea televizorului.",
  "control.entity": "Entitate",
  "control.area": "Zon\u0103",
  "control.device": "Dispozitiv",
  "media.off": "Oprit",
  "media.playing": "Se red\u0103",
  "media.paused": "Pauz\u0103",
  "media.idle": "Inactiv",
  "media.standby": "Standby",
  "media.on": "Pornit",
  "media.unavailable": "Indisponibil",
  "media.no_media": "Nicio surs\u0103 activ\u0103",
  "media.tv": "Televizor",
  "media.remote": "Telecomand\u0103",
  "media.volume": "Volum",
  "media.muted": "F\u0103r\u0103 sunet",
  "cover.open": "Deschis",
  "cover.closed": "\xCEnchis",
  "cover.opening": "Se deschide",
  "cover.closing": "Se \xEEnchide",
  "cover.stopped": "Oprit",
  "cover.position": "Pozi\u021Bie",
  "climate.off": "Oprit",
  "climate.heat": "\xCEnc\u0103lzire",
  "climate.cool": "R\u0103cire",
  "climate.auto": "Automat",
  "climate.dry": "Uscare",
  "climate.fan_only": "Ventila\u021Bie",
  "climate.heat_cool": "Auto",
  "climate.idle": "Inactiv",
  "climate.heating": "\xCEnc\u0103lze\u0219te",
  "climate.cooling": "R\u0103ce\u0219te",
  "climate.current": "Temperatura curent\u0103",
  "climate.target": "Temperatura \u021Bint\u0103",
  "sun.above": "Deasupra orizontului",
  "sun.below": "Sub orizont",
  "sun.rising": "R\u0103s\u0103rit",
  "sun.dawn": "Zori",
  "sun.noon": "Amiaz\u0103",
  "sun.setting": "Apus",
  "sun.dusk": "Amurg",
  "sun.midnight": "Miez de noapte",
  "sun.next": "Urm\u0103torul",
  "sun.event_today": "Ast\u0103zi",
  "sun.event_tomorrow": "M\xE2ine",
  "network.wan": "WAN",
  "network.ip": "IP extern",
  "network.tracker": "Telefon",
  "network.notify": "Notific\u0103ri",
  "network.connected": "Conectat",
  "network.disconnected": "Deconectat",
  "network.secure": "Conexiune activ\u0103",
  "network.power": "Alimentare Raspberry Pi",
  "network.power_ok": "Alimentare OK",
  "network.power_issue": "Verific\u0103 alimentarea",
  "network.test_sent": "Notificare de test trimis\u0103.",
  "network.test_failed": "Notificarea nu a putut fi trimis\u0103.",
  "update.available": "Actualizare disponibil\u0103",
  "update.up_to_date": "La zi",
  "update.installing": "Se instaleaz\u0103\u2026",
  "update.installed": "Actualizare pornit\u0103.",
  "update.failed": "Actualizarea nu a putut fi pornit\u0103.",
  "update.version": "Versiune",
  "controls.search": "Caut\u0103 dispozitiv\u2026",
  "controls.empty": "Nicio entitate pentru filtrul curent.",
  "controls.open": "Deschide controlul",
  "controls.more": "Mai multe \xEEn HA",
  "controls.entity_id": "Entity ID",
  "controls.attributes": "Atribute",
  "controls.all": "Toate entit\u0103\u021Bile mapate",
  "controls.quick": "Ac\u021Biuni rapide",
  "controls.state": "Stare",
  "controls.domain": "Domeniu",
  "action.activate": "Activeaz\u0103",
  "action.lock": "Blocheaz\u0103",
  "action.unlock": "Deblocheaz\u0103",
  "action.start": "Porne\u0219te",
  "action.dock": "Baz\u0103",
  "youtube.search_placeholder": "Caut\u0103 pe YouTube\u2026",
  "youtube.search": "Caut\u0103",
  "youtube.open": "Deschide pe YouTube",
  "youtube.play": "Red\u0103 pe tablet\u0103",
  "youtube.cast": "Trimite la TV",
  "youtube.device": "Dispozitiv",
  "youtube.no_api": "F\u0103r\u0103 cheie API po\u021Bi lipi un link YouTube sau deschide c\u0103utarea.",
  "youtube.api_key": "Cheie API YouTube",
  "youtube.api_key_hint": "Op\u021Bional, pentru c\u0103utare direct\u0103.",
  "youtube.invalid": "Link YouTube invalid.",
  "youtube.loading": "Se \xEEncarc\u0103\u2026",
  "youtube.no_results": "Niciun rezultat.",
  "youtube.save": "Salveaz\u0103",
  "youtube.saved": "Salvat",
  "youtube.playlist": "Playlist",
  "youtube.empty_playlist": "Niciun video salvat.",
  "youtube.remove": "Elimin\u0103",
  "youtube.search_failed": "C\u0103utarea YouTube a e\u0219uat.",
  "youtube.cast_failed": "Trimiterea la dispozitiv a e\u0219uat.",
  "youtube.playing_on": "Se red\u0103 pe {name}",
  "youtube.no_device": "Alege un dispozitiv.",
  "youtube.now": "Se red\u0103 acum",
  "youtube.add": "Adaug\u0103 link YouTube",
  "youtube.results_title": "Rezultate",
  "youtube.results": "{count} rezultate",
  "youtube.saved_count": "{count} salvate",
  "music.output": "Ie\u0219ire audio",
  "music.tablet": "Tablet\u0103",
  "music.tablet_note": "Sun\u0103 direct \xEEn acest dashboard",
  "music.devices": "Dispozitive asociate",
  "music.devices_note": "TV, boxe \u0219i media_player",
  "music.url": "URL stream / radio",
  "music.url_placeholder": "https://exemplu.ro/radio.mp3",
  "music.file": "Fi\u0219ier local",
  "music.choose_file": "Alege fi\u0219ier",
  "music.local_file": "Fi\u0219ier din tablet\u0103",
  "music.play": "Red\u0103",
  "music.pause": "Pauz\u0103",
  "music.stop": "Opre\u0219te",
  "music.volume": "Volum",
  "music.now": "Se red\u0103 acum",
  "music.no_source": "Alege un URL, un preset sau un fi\u0219ier local.",
  "music.no_device": "Nu exist\u0103 media_player disponibil.",
  "music.presets": "Preseturi",
  "music.source": "Surs\u0103",
  "music.playing": "Se red\u0103",
  "music.paused": "Pauz\u0103",
  "music.stopped": "Oprit",
  "music.play_failed": "Muzica nu a putut porni.",
  "music.playing_on": "Se red\u0103 pe {name}",
  "assist.placeholder": "Scrie o comand\u0103 sau o \xEEntrebare\u2026",
  "assist.hint": "Asistentul casei, direct \xEEn dashboard.",
  "assist.thinking": "Se g\xE2nde\u0219te\u2026",
  "assist.empty": "Scrie o \xEEntrebare pentru asistent.",
  "assist.error": "Asistentul nu a putut r\u0103spunde.",
  "assist.welcome": "Po\u021Bi cere de exemplu: \u201EArat\u0103-mi camera Curte\u201D sau \u201EPorne\u0219te muzica pe tablet\u0103\u201D.",
  "assist.mic": "Vorbe\u0219te",
  "assist.listening": "Ascult\u2026",
  "assist.voice_unsupported": "Microfonul nu este disponibil \xEEn acest browser.",
  "assist.voice_error": "Nu am putut auzi comanda.",
  "assist.suggestions": "\xCEncearc\u0103",
  "assist.execute_camera": "Am deschis camera {name}.",
  "assist.execute_music_on": "Muzica porne\u0219te pe {name}.",
  "assist.execute_music_off": "Am oprit muzica.",
  "assist.execute_light_on": "Am aprins {name}.",
  "assist.execute_light_off": "Am stins {name}.",
  "assist.execute_cover_open": "Am deschis {name}.",
  "assist.execute_cover_close": "Am \xEEnchis {name}.",
  "assist.execute_media_on": "Am pornit {name}.",
  "assist.execute_media_off": "Am oprit {name}.",
  "assist.execute_navigation": "Am deschis {name}.",
  "todo.empty": "Lista este goal\u0103.",
  "todo.placeholder": "Adaug\u0103 un produs\u2026",
  "todo.added": "Produs ad\u0103ugat.",
  "todo.failed": "Lista nu a putut fi \xEEnc\u0103rcat\u0103.",
  "todo.items": "{count} produse",
  "todo.pending": "De cump\u0103rat",
  "todo.done": "Cump\u0103rat",
  "todo.mark_done": "Marcheaz\u0103 cump\u0103rat",
  "todo.add_failed": "Produsul nu a putut fi ad\u0103ugat.",
  "weather.sunny": "\xCEnsorit",
  "weather.clear-night": "Cer senin",
  "weather.partlycloudy": "Par\u021Bial noros",
  "weather.cloudy": "Noros",
  "weather.rainy": "Ploaie",
  "weather.pouring": "Averse",
  "weather.lightning": "Furtun\u0103",
  "weather.lightning-rainy": "Furtun\u0103 cu ploaie",
  "weather.snowy": "Ninsoare",
  "weather.snowy-rainy": "Lapovi\u021B\u0103",
  "weather.hail": "Grindin\u0103",
  "weather.fog": "Cea\u021B\u0103",
  "weather.windy": "V\xE2nt",
  "weather.windy-variant": "V\xE2nt puternic",
  "weather.exceptional": "Vreme extrem\u0103",
  "weather.empty_title": "Vremea nu este mapat\u0103",
  "weather.empty_body": "Adaug\u0103 o entitate de tip weather \xEEn configura\u021Bie. Widgetul, pictogramele \u0219i prognoza se activeaz\u0103 automat.",
  "weather.empty_hint": "Mapare: global.weather: weather.<entity_id>",
  "weather.forecast_unavailable": "Prognoza extins\u0103 nu este disponibil\u0103 pentru aceast\u0103 sta\u021Bie meteo.",
  "weather.forecast_loading": "Se \xEEncarc\u0103 prognoza\u2026",
  "weather.high": "Max",
  "weather.low": "Min",
  "weather.now": "Acum",
  "weather.details": "Detalii meteo",
  "energy.live_power": "Putere live",
  "energy.total": "Energie consumat\u0103",
  "energy.saved": "Economie",
  "energy.difference": "Diferen\u021B\u0103",
  "energy.source": "Surs\u0103",
  "energy.empty_title": "Niciun senzor de energie mapat",
  "energy.empty_body": "Adaug\u0103 senzori de putere sau energie \xEEn grupul appliances al unei camere.",
  "energy.empty_hint": "Mapare: rooms[].entities.appliances",
  "energy.mapped": "Senzori mapa\u021Bi",
  "media.empty_title": "Niciun media player mapat",
  "media.empty_body": "Adaug\u0103 un media_player \xEEntr-o camer\u0103 pentru a activa hub-ul media \u0219i telecomenzile.",
  "media.empty_hint": "Mapare: rooms[].entities.media",
  "media.players": "Surse media",
  "media.remotes": "Telecomenzi",
  "routines.cinema.name": "Cinema",
  "routines.cinema.desc": "Lumini joase, umbrire \xEEnchis\u0103 \u0219i 22 \xB0C.",
  "routines.night.name": "Noapte",
  "routines.night.desc": "Stinge luminile, \xEEnchide jaluzelele \u0219i coboar\u0103 clima.",
  "routines.away.name": "Plecare",
  "routines.away.desc": "Opre\u0219te tot \u0219i las\u0103 casa \xEEn siguran\u021B\u0103.",
  "routines.morning.name": "Diminea\u021B\u0103",
  "routines.morning.desc": "Lumin\u0103 bl\xE2nd\u0103, jaluzele \xEEntredeschise \u0219i confort.",
  "routines.intro": "Alege momentul potrivit.",
  "routines.apply": "Aplic\u0103 rutina",
  "routines.applied": "Rutina \u201E{name}\u201D a fost aplicat\u0103.",
  "routines.no_actions": "Nicio entitate mapat\u0103 pentru aceast\u0103 rutin\u0103.",
  "routines.needs_mapping": "Necesit\u0103 mapare",
  "routines.actions": "{count} ac\u021Biuni",
  "routines.note": "Rutinele folosesc exclusiv dispozitivele mapate \xEEn camere. Nu inventeaz\u0103 entit\u0103\u021Bi.",
  "routines.groups": "{count} grupuri",
  "doorbell.no_event": "Nicio activitate recent\u0103",
  "doorbell.ring": "Sonerie",
  "doorbell.call_title": "Sonerie poart\u0103",
  "doorbell.call_subtitle": "Cineva este la poart\u0103",
  "doorbell.open_camera": "Vezi camera live",
  "doorbell.stop": "Opre\u0219te",
  "camera.empty_title": "Nicio camer\u0103 video g\u0103sit\u0103",
  "camera.empty_body": "Las\u0103 auto-descoperirea activ\u0103 sau fixeaz\u0103 camerele Imou, Tapo \u0219i soneria \xEEn global.cameras.",
  "camera.map_hint": "Mapare: global.cameras: [camera.imou, camera.tapo, camera.sonerie]",
  "camera.open": "Deschide live",
  "camera.no_feed": "F\u0103r\u0103 imagine",
  "camera.offline": "Offline",
  "camera.recording": "\xCEnregistrare",
  "camera.streaming": "Live",
  "camera.idle": "Standby",
  "camera.doorbell": "Sonerie",
  "camera.preview": "Previzualizare",
  "camera.live_eyebrow": "Camer\u0103 live",
  "camera.status": "Stare",
  "camera.entity": "Entitate",
  "camera.updated": "Actualizat",
  "camera.open_ha": "Deschide \xEEn HA",
  "doorbell.recording_mode": "Mod \xEEnregistrare",
  "doorbell.night_vision": "Vedere nocturn\u0103",
  "doorbell.video": "\xCEnregistrare video",
  "toast.error": "Comanda nu a putut fi trimis\u0103.",
  "toast.unavailable": "Entitatea nu este disponibil\u0103.",
  "toast.success": "Comand\u0103 trimis\u0103.",
  "toast.light_on": "Lumina a fost pornit\u0103.",
  "toast.light_off": "Lumina a fost oprit\u0103.",
  "toast.cover_moved": "Jaluzeaua a fost mi\u0219cat\u0103.",
  "toast.scene_missing": "Entitatea nu a fost g\u0103sit\u0103.",
  "label.room_entities": "{count} entit\u0103\u021Bi",
  "label.rooms": "{count} \xEEnc\u0103peri",
  "label.cameras": "{count} camere",
  "label.entities": "Entit\u0103\u021Bi",
  "label.active": "Active",
  "label.room_empty": "Preg\u0103tit pentru mapare",
  "label.room_active": "{count} active",
  "label.room_one": "1 entitate",
  "label.no_room": "Nicio camer\u0103",
  "label.system": "Sistem",
  "label.now": "Acum",
  "label.today": "Ast\u0103zi",
  "label.tomorrow": "M\xE2ine",
  "label.loading": "Se \xEEncarc\u0103\u2026",
  "label.close_sheet": "\xCEnchide panoul",
  "label.open_room": "Deschide controlul camerei",
  "label.people_home": "Persoane acas\u0103",
  "label.next_event": "Urm\u0103torul eveniment",
  "label.next_event_short": "Urm\u0103torul",
  "label.updates": "Actualiz\u0103ri",
  "label.weather": "Vremea",
  "label.forecast": "Prognoz\u0103",
  "label.humidity": "Umiditate",
  "label.wind": "V\xE2nt",
  "label.pressure": "Presiune",
  "label.visibility": "Vizibilitate",
  "label.clouds": "Nori",
  "label.uv": "UV",
  "label.precipitation": "Precipita\u021Bii",
  "label.feels_like": "Resim\u021Bit\u0103",
  "label.source": "Surs\u0103",
  "label.actions": "Ac\u021Biuni",
  "label.available": "Disponibil",
  "label.current_state": "Starea curent\u0103",
  "label.unknown": "Necunoscut",
  "label.no_data": "F\u0103r\u0103 date",
  "label.refresh": "Re\xEEmprosp\u0103teaz\u0103",
  "label.details": "Detalii",
  "label.config": "Configura\u021Bie",
  "label.ready": "Preg\u0103tit",
  "label.new": "Nou",
  "label.live": "Live",
  "label.demo": "Demo",
  "label.offline": "Offline",
  "editor.title": "Zurlii Home",
  "editor.title_field": "Titlu cas\u0103",
  "editor.subtitle_field": "Subtitlu",
  "editor.name_field": "Numele persoanei",
  "editor.background_field": "Baz\u0103 fundaluri",
  "editor.language_field": "Limb\u0103",
  "editor.note": "Camerele \u0219i entit\u0103\u021Bile se editeaz\u0103 \xEEn YAML. Folose\u0219te op\u021Biunile integr\u0103rii pentru varianta f\u0103r\u0103 YAML."
};
var en = {
  "nav.home": "Home",
  "nav.lights": "Lights",
  "nav.covers": "Covers",
  "nav.climate": "Climate",
  "nav.rooms": "Rooms",
  "nav.spaces": "Rooms",
  "nav.cameras": "Cameras",
  "nav.music": "Music",
  "nav.youtube": "YouTube",
  "nav.assistant": "Assistant",
  "nav.controls": "Full control",
  "nav.weather": "Weather",
  "nav.energy": "Energy",
  "nav.media": "Media",
  "nav.routines": "Routines",
  "nav.system": "System",
  "nav.label": "Main navigation",
  "nav.open": "Open {name}",
  "clock.greeting": "Hello, {name}",
  "clock.morning": "Good morning, {name}",
  "clock.afternoon": "Good afternoon, {name}",
  "clock.evening": "Good evening, {name}",
  "clock.night": "Good night, {name}",
  "clock.today": "Today",
  "clock.tomorrow": "Tomorrow",
  "status.home": "Home",
  "status.away": "Away",
  "status.online": "Online",
  "status.offline": "Offline",
  "status.unknown": "Unknown",
  "status.unavailable": "Unavailable",
  "status.active": "{count} active",
  "status.people": "{count} people",
  "status.sunset": "Sunset",
  "status.system": "System",
  "status.network": "Network",
  "status.all_good": "All good",
  "status.attention": "Needs attention",
  "status.updates": "{count} updates",
  "status.update_one": "1 update",
  "sheet.home.eyebrow": "Control center",
  "sheet.home.title": "Hello, {name}",
  "sheet.home.subtitle": "Your home, at a glance.",
  "sheet.lights.title": "Lighting control",
  "sheet.lights.subtitle": "Brightness, state and control for every room.",
  "sheet.covers.title": "Cover control",
  "sheet.covers.subtitle": "Position, opening and stopping for every shade.",
  "sheet.climate.title": "Climate control",
  "sheet.climate.subtitle": "Temperature, mode and comfort for every zone.",
  "sheet.youtube.title": "YouTube",
  "sheet.youtube.subtitle": "Search, play on the tablet or send to the TV.",
  "sheet.youtube.eyebrow": "Video & music",
  "sheet.cameras.title": "Live cameras",
  "sheet.cameras.subtitle": "Every filming camera, live on screen.",
  "sheet.cameras.eyebrow": "Filming cameras",
  "sheet.music.title": "Music",
  "sheet.music.subtitle": "Choose the source and where it plays.",
  "sheet.music.eyebrow": "Sound & atmosphere",
  "sheet.assistant.title": "House assistant",
  "sheet.assistant.subtitle": "Speak or type \u2014 it executes real Home Assistant actions.",
  "sheet.assistant.eyebrow": "Voice & control",
  "sheet.controls.title": "Full control",
  "sheet.controls.subtitle": "Every mapped entity with its own buttons.",
  "sheet.controls.eyebrow": "All devices",
  "sheet.rooms.title": "Rooms",
  "sheet.rooms.subtitle": "Every space in the house and its devices.",
  "sheet.system.title": "System & network",
  "sheet.system.subtitle": "Home state, connections, updates and assistant.",
  "sheet.room.eyebrow": "Room control",
  "sheet.room.subtitle": "Every device in this space, in one place.",
  "sheet.system.eyebrow": "My home",
  "sheet.rooms.eyebrow": "Spaces",
  "sheet.lights.eyebrow": "Lighting",
  "sheet.covers.eyebrow": "Shading",
  "sheet.climate.eyebrow": "Comfort",
  "sheet.weather.eyebrow": "Weather",
  "sheet.weather.title": "Weather",
  "sheet.weather.subtitle": "Current conditions, details and forecast.",
  "sheet.energy.eyebrow": "Usage",
  "sheet.energy.title": "Energy & usage",
  "sheet.energy.subtitle": "Live power, energy and savings.",
  "sheet.media.eyebrow": "Media",
  "sheet.media.title": "Media & TVs",
  "sheet.media.subtitle": "Every source and remote in one place.",
  "sheet.routines.eyebrow": "Moments",
  "sheet.routines.title": "Smart routines",
  "sheet.routines.subtitle": "Scenes generated from mapped devices.",
  "section.quick": "Rooms",
  "section.house": "Home status",
  "section.sun": "Sun & daylight",
  "section.network": "Network & connectivity",
  "section.system": "System & updates",
  "section.assist": "Ask the house",
  "section.todo": "Shopping list",
  "section.media": "Media & TV",
  "section.remote": "Remote",
  "section.energy": "Energy & usage",
  "section.sensors": "Sensors",
  "section.lights": "Lights",
  "section.covers": "Covers",
  "section.climate": "Climate",
  "section.plugs": "Plugs & power",
  "section.appliances": "Appliances",
  "section.overview": "Overview",
  "section.preview": "Layout preview",
  "section.weather": "Weather",
  "section.forecast": "Forecast",
  "section.routines": "Routines",
  "section.doorbell": "Gate doorbell",
  "section.cameras_live": "Live cameras",
  "section.family": "Family \xB7 Find My",
  "section.printer": "3D printer",
  "printer.empty_title": "Printer not found",
  "printer.empty_body": "Check the device name or map the Creality entities explicitly.",
  "printer.map_hint": "Looking for device: {name}. Explicit mapping: printer.entities",
  "printer.no_object": "No active object",
  "printer.progress": "Progress",
  "printer.nozzle": "Nozzle",
  "printer.bed": "Bed",
  "printer.chamber": "Chamber",
  "printer.pause": "Pause",
  "printer.resume": "Resume",
  "printer.stop": "Stop",
  "printer.home": "Home",
  "printer.reconnect": "Reconnect",
  "printer.speed": "Speed",
  "printer.flow": "Flow",
  "printer.speed_factor": "Speed factor",
  "printer.light": "Light",
  "printer.filament": "Filament",
  "printer.used_material": "Used material",
  "printer.objects": "Objects",
  "printer.job_time": "Job time",
  "printer.flow_rate": "Flow rate",
  "printer.print_control": "Print control",
  "printer.max_nozzle": "Max nozzle",
  "printer.max_bed": "Max bed",
  "printer.max_chamber": "Max chamber",
  "printer.status.printing": "Printing",
  "printer.status.paused": "Paused",
  "printer.status.idle": "Idle",
  "printer.status.completed": "Completed",
  "printer.status.error": "Error",
  "printer.status.heating": "Heating",
  "printer.status.preheating": "Preheating",
  "printer.status.leveling": "Leveling",
  "printer.status.offline": "Offline",
  "family.people": "{count} people",
  "family.empty_title": "No person with a location",
  "family.empty_body": "Add trackers to global.family.trackers or keep auto-discovery enabled for person and device_tracker.",
  "family.map_hint": "Mapping: global.family.trackers: [device_tracker.<entity_id>]",
  "family.home": "Home",
  "family.battery": "Battery",
  "family.distance": "Distance",
  "family.last_seen": "Updated",
  "family.no_location": "No location",
  "family.attribution": "\xA9 OpenStreetMap contributors",
  "empty.title": "No entities mapped",
  "empty.body": "The structure is ready. Add entities in configuration without touching the component code.",
  "empty.room_title": "Room ready for automation",
  "empty.room_body": "The popup, grid and background are already generated. Map devices when they are ready.",
  "empty.lights_title": "No light modules mapped",
  "empty.lights_body": "Once you add light entities, this page automatically generates brightness and state cards.",
  "empty.covers_title": "No covers mapped",
  "empty.covers_body": "Once you add cover entities, position control and open/close commands appear here.",
  "empty.climate_title": "No thermostat mapped",
  "empty.climate_body": "Once you add climate entities, target temperature, modes and control are generated here.",
  "empty.plugs_title": "No plug mapped",
  "empty.plugs_body": "Add Tuya plugs or switches to the plugs group.",
  "empty.slot": "Open slot",
  "empty.slot_hint": "Not configured",
  "empty.map_hint": "How do I map?",
  "empty.map_body": "Add entities in the card configuration or in the integration options. The `rooms` key supports partial overrides, so you never rewrite the whole dashboard.",
  "empty.copy": "Copy example",
  "empty.copied": "Example copied",
  "empty.docs": "Mapping guide",
  "empty.docs_hint": "See docs/entity-mapping.md",
  "action.close": "Close",
  "action.open": "Open",
  "action.back": "Back",
  "action.turn_on": "Turn on",
  "action.turn_off": "Turn off",
  "action.toggle": "Toggle",
  "action.play": "Play",
  "action.pause": "Pause",
  "action.stop": "Stop",
  "action.install": "Install",
  "action.update": "Update",
  "action.send": "Send",
  "action.add": "Add",
  "action.test": "Send test",
  "action.copy": "Copy",
  "action.ok": "OK",
  "action.up": "Up",
  "action.down": "Down",
  "action.left": "Left",
  "action.right": "Right",
  "action.open_cover": "Open",
  "action.close_cover": "Close",
  "action.stop_cover": "Stop",
  "action.all_off": "All off",
  "action.details": "Details",
  "action.retry": "Retry",
  "action.home": "Home",
  "action.reset": "Back home",
  "action.see_all": "See all",
  "action.all_spaces": "All rooms",
  "action.scan": "Scan",
  "control.brightness": "Brightness",
  "control.position": "Position",
  "control.target": "Target",
  "control.current": "Current",
  "control.mode": "Mode",
  "control.source": "Source",
  "control.volume": "Volume",
  "control.channel": "Channel",
  "control.power": "Power",
  "control.energy": "Energy",
  "control.saved": "Saved",
  "control.difference": "Difference",
  "control.installed": "Installed",
  "control.latest": "Latest",
  "control.battery": "Battery",
  "control.state": "State",
  "control.updated": "Updated",
  "control.temperature": "Temperature",
  "control.humidity": "Humidity",
  "control.no_value": "No value",
  "control.percent": "{value}%",
  "control.set": "Set",
  "control.commands": "Quick commands",
  "remote.hint": "Signals are sent directly to the TV integration.",
  "control.entity": "Entity",
  "control.area": "Area",
  "control.device": "Device",
  "media.off": "Off",
  "media.playing": "Playing",
  "media.paused": "Paused",
  "media.idle": "Idle",
  "media.standby": "Standby",
  "media.on": "On",
  "media.unavailable": "Unavailable",
  "media.no_media": "No active source",
  "media.tv": "TV",
  "media.remote": "Remote",
  "media.volume": "Volume",
  "media.muted": "Muted",
  "cover.open": "Open",
  "cover.closed": "Closed",
  "cover.opening": "Opening",
  "cover.closing": "Closing",
  "cover.stopped": "Stopped",
  "cover.position": "Position",
  "climate.off": "Off",
  "climate.heat": "Heat",
  "climate.cool": "Cool",
  "climate.auto": "Auto",
  "climate.dry": "Dry",
  "climate.fan_only": "Fan only",
  "climate.heat_cool": "Auto",
  "climate.idle": "Idle",
  "climate.heating": "Heating",
  "climate.cooling": "Cooling",
  "climate.current": "Current temperature",
  "climate.target": "Target temperature",
  "sun.above": "Above horizon",
  "sun.below": "Below horizon",
  "sun.rising": "Sunrise",
  "sun.dawn": "Dawn",
  "sun.noon": "Noon",
  "sun.setting": "Sunset",
  "sun.dusk": "Dusk",
  "sun.midnight": "Midnight",
  "sun.next": "Next",
  "sun.event_today": "Today",
  "sun.event_tomorrow": "Tomorrow",
  "network.wan": "WAN",
  "network.ip": "External IP",
  "network.tracker": "Phone",
  "network.notify": "Notifications",
  "network.connected": "Connected",
  "network.disconnected": "Disconnected",
  "network.secure": "Link active",
  "network.power": "Raspberry Pi power",
  "network.power_ok": "Power OK",
  "network.power_issue": "Check power supply",
  "network.test_sent": "Test notification sent.",
  "network.test_failed": "Notification could not be sent.",
  "update.available": "Update available",
  "update.up_to_date": "Up to date",
  "update.installing": "Installing\u2026",
  "update.installed": "Update started.",
  "update.failed": "Update could not be started.",
  "update.version": "Version",
  "controls.search": "Search devices\u2026",
  "controls.empty": "No entity for the current filter.",
  "controls.open": "Open control",
  "controls.more": "More in HA",
  "controls.entity_id": "Entity ID",
  "controls.attributes": "Attributes",
  "controls.all": "All mapped entities",
  "controls.quick": "Quick actions",
  "controls.state": "State",
  "controls.domain": "Domain",
  "action.activate": "Activate",
  "action.lock": "Lock",
  "action.unlock": "Unlock",
  "action.start": "Start",
  "action.dock": "Dock",
  "youtube.search_placeholder": "Search YouTube\u2026",
  "youtube.search": "Search",
  "youtube.open": "Open on YouTube",
  "youtube.play": "Play on tablet",
  "youtube.cast": "Send to TV",
  "youtube.device": "Device",
  "youtube.no_api": "Without an API key you can paste a YouTube link or open the search.",
  "youtube.api_key": "YouTube API key",
  "youtube.api_key_hint": "Optional, enables direct search.",
  "youtube.invalid": "Invalid YouTube link.",
  "youtube.loading": "Loading\u2026",
  "youtube.no_results": "No results.",
  "youtube.save": "Save",
  "youtube.saved": "Saved",
  "youtube.playlist": "Playlist",
  "youtube.empty_playlist": "No saved video.",
  "youtube.remove": "Remove",
  "youtube.search_failed": "YouTube search failed.",
  "youtube.cast_failed": "Sending to the device failed.",
  "youtube.playing_on": "Playing on {name}",
  "youtube.no_device": "Choose a device.",
  "youtube.now": "Now playing",
  "youtube.add": "Add YouTube link",
  "youtube.results_title": "Results",
  "youtube.results": "{count} results",
  "youtube.saved_count": "{count} saved",
  "music.output": "Audio output",
  "music.tablet": "Tablet",
  "music.tablet_note": "Plays inside this dashboard",
  "music.devices": "Associated devices",
  "music.devices_note": "TVs, speakers and media players",
  "music.url": "Stream / radio URL",
  "music.url_placeholder": "https://example.com/radio.mp3",
  "music.file": "Local file",
  "music.choose_file": "Choose file",
  "music.local_file": "File from this tablet",
  "music.play": "Play",
  "music.pause": "Pause",
  "music.stop": "Stop",
  "music.volume": "Volume",
  "music.now": "Now playing",
  "music.no_source": "Choose a URL, a preset or a local file.",
  "music.no_device": "No media_player is available.",
  "music.presets": "Presets",
  "music.source": "Source",
  "music.playing": "Playing",
  "music.paused": "Paused",
  "music.stopped": "Stopped",
  "music.play_failed": "Music could not start.",
  "music.playing_on": "Playing on {name}",
  "assist.placeholder": "Type a command or a question\u2026",
  "assist.hint": "The house assistant, right in the dashboard.",
  "assist.thinking": "Thinking\u2026",
  "assist.empty": "Type a question for the assistant.",
  "assist.error": "The assistant could not answer.",
  "assist.welcome": "Try: \u201CShow me the yard camera\u201D or \u201CPlay music on the tablet\u201D.",
  "assist.mic": "Speak",
  "assist.listening": "Listening\u2026",
  "assist.voice_unsupported": "The microphone is not available in this browser.",
  "assist.voice_error": "I could not hear the command.",
  "assist.suggestions": "Try",
  "assist.execute_camera": "Opened camera {name}.",
  "assist.execute_music_on": "Music is playing on {name}.",
  "assist.execute_music_off": "Music stopped.",
  "assist.execute_light_on": "Turned on {name}.",
  "assist.execute_light_off": "Turned off {name}.",
  "assist.execute_cover_open": "Opened {name}.",
  "assist.execute_cover_close": "Closed {name}.",
  "assist.execute_media_on": "Turned on {name}.",
  "assist.execute_media_off": "Turned off {name}.",
  "assist.execute_navigation": "Opened {name}.",
  "todo.empty": "The list is empty.",
  "todo.placeholder": "Add an item\u2026",
  "todo.added": "Item added.",
  "todo.failed": "The list could not be loaded.",
  "todo.items": "{count} items",
  "todo.pending": "To buy",
  "todo.done": "Bought",
  "todo.mark_done": "Mark as bought",
  "todo.add_failed": "The item could not be added.",
  "weather.sunny": "Sunny",
  "weather.clear-night": "Clear night",
  "weather.partlycloudy": "Partly cloudy",
  "weather.cloudy": "Cloudy",
  "weather.rainy": "Rain",
  "weather.pouring": "Pouring",
  "weather.lightning": "Thunderstorm",
  "weather.lightning-rainy": "Thunderstorm with rain",
  "weather.snowy": "Snow",
  "weather.snowy-rainy": "Sleet",
  "weather.hail": "Hail",
  "weather.fog": "Fog",
  "weather.windy": "Windy",
  "weather.windy-variant": "Strong wind",
  "weather.exceptional": "Severe weather",
  "weather.empty_title": "Weather is not mapped",
  "weather.empty_body": "Add a weather entity in configuration. The widget, icons and forecast activate automatically.",
  "weather.empty_hint": "Mapping: global.weather: weather.<entity_id>",
  "weather.forecast_unavailable": "Extended forecast is not available for this weather station.",
  "weather.forecast_loading": "Loading forecast\u2026",
  "weather.high": "High",
  "weather.low": "Low",
  "weather.now": "Now",
  "weather.details": "Weather details",
  "energy.live_power": "Live power",
  "energy.total": "Energy used",
  "energy.saved": "Savings",
  "energy.difference": "Difference",
  "energy.source": "Source",
  "energy.empty_title": "No energy sensor mapped",
  "energy.empty_body": "Add power or energy sensors to a room's appliances group.",
  "energy.empty_hint": "Mapping: rooms[].entities.appliances",
  "energy.mapped": "Mapped sensors",
  "media.empty_title": "No media player mapped",
  "media.empty_body": "Add a media_player to a room to activate the media hub and remotes.",
  "media.empty_hint": "Mapping: rooms[].entities.media",
  "media.players": "Media sources",
  "media.remotes": "Remotes",
  "routines.cinema.name": "Cinema",
  "routines.cinema.desc": "Low lights, closed shades and 22 \xB0C.",
  "routines.night.name": "Night",
  "routines.night.desc": "Turn off lights, close covers and lower the climate.",
  "routines.away.name": "Away",
  "routines.away.desc": "Turn everything off and leave the house safe.",
  "routines.morning.name": "Morning",
  "routines.morning.desc": "Soft light, partially open covers and comfort.",
  "routines.intro": "Choose the right moment.",
  "routines.apply": "Apply routine",
  "routines.applied": "Routine \u201C{name}\u201D applied.",
  "routines.no_actions": "No entities mapped for this routine.",
  "routines.needs_mapping": "Needs mapping",
  "routines.actions": "{count} actions",
  "routines.note": "Routines use only the devices mapped in rooms. They never invent entities.",
  "routines.groups": "{count} groups",
  "doorbell.no_event": "No recent activity",
  "doorbell.ring": "Ring",
  "doorbell.call_title": "Gate doorbell",
  "doorbell.call_subtitle": "Someone is at the gate",
  "doorbell.open_camera": "Open live camera",
  "doorbell.stop": "Stop",
  "camera.empty_title": "No video camera found",
  "camera.empty_body": "Keep auto-discovery enabled or pin the Imou, Tapo and doorbell cameras in global.cameras.",
  "camera.map_hint": "Mapping: global.cameras: [camera.imou, camera.tapo, camera.doorbell]",
  "camera.open": "Open live",
  "camera.no_feed": "No feed",
  "camera.offline": "Offline",
  "camera.recording": "Recording",
  "camera.streaming": "Live",
  "camera.idle": "Standby",
  "camera.doorbell": "Doorbell",
  "camera.preview": "Preview",
  "camera.live_eyebrow": "Live camera",
  "camera.status": "Status",
  "camera.entity": "Entity",
  "camera.updated": "Updated",
  "camera.open_ha": "Open in HA",
  "doorbell.recording_mode": "Recording mode",
  "doorbell.night_vision": "Night vision",
  "doorbell.video": "Video recording",
  "toast.error": "The command could not be sent.",
  "toast.unavailable": "The entity is unavailable.",
  "toast.success": "Command sent.",
  "toast.light_on": "Light turned on.",
  "toast.light_off": "Light turned off.",
  "toast.cover_moved": "Cover moved.",
  "toast.scene_missing": "Entity not found.",
  "label.room_entities": "{count} entities",
  "label.rooms": "{count} rooms",
  "label.cameras": "{count} cameras",
  "label.entities": "Entities",
  "label.active": "Active",
  "label.room_empty": "Ready for mapping",
  "label.room_active": "{count} active",
  "label.room_one": "1 entity",
  "label.no_room": "No room",
  "label.system": "System",
  "label.now": "Now",
  "label.today": "Today",
  "label.tomorrow": "Tomorrow",
  "label.loading": "Loading\u2026",
  "label.close_sheet": "Close panel",
  "label.open_room": "Open room control",
  "label.people_home": "People home",
  "label.next_event": "Next event",
  "label.next_event_short": "Next",
  "label.updates": "Updates",
  "label.weather": "Weather",
  "label.forecast": "Forecast",
  "label.humidity": "Humidity",
  "label.wind": "Wind",
  "label.pressure": "Pressure",
  "label.visibility": "Visibility",
  "label.clouds": "Clouds",
  "label.uv": "UV",
  "label.precipitation": "Precipitation",
  "label.feels_like": "Feels like",
  "label.source": "Source",
  "label.actions": "Actions",
  "label.available": "Available",
  "label.current_state": "Current state",
  "label.unknown": "Unknown",
  "label.no_data": "No data",
  "label.refresh": "Refresh",
  "label.details": "Details",
  "label.config": "Configuration",
  "label.ready": "Ready",
  "label.new": "New",
  "label.live": "Live",
  "label.demo": "Demo",
  "label.offline": "Offline",
  "editor.title": "Zurlii Home",
  "editor.title_field": "House title",
  "editor.subtitle_field": "Subtitle",
  "editor.name_field": "Person name",
  "editor.background_field": "Background base",
  "editor.language_field": "Language",
  "editor.note": "Rooms and entities are edited in YAML. Use integration options for the no-YAML path."
};
var DICTIONARIES = { ro, en };
function hasKey(lang, key) {
  const dictionary = DICTIONARIES[lang] || ro;
  return Object.prototype.hasOwnProperty.call(dictionary, key);
}
function locale(lang) {
  return lang === "en" ? "en-GB" : "ro-RO";
}
function t3(lang, key, vars = {}) {
  const dictionary = DICTIONARIES[lang] || ro;
  let value = dictionary[key] ?? ro[key] ?? key;
  return String(value).replace(
    /\{(\w+)\}/g,
    (_2, name) => vars[name] === void 0 || vars[name] === null ? "" : String(vars[name])
  );
}
function greetingKey(hour) {
  if (hour >= 5 && hour < 12) return "clock.morning";
  if (hour >= 12 && hour < 18) return "clock.afternoon";
  if (hour >= 18 && hour < 23) return "clock.evening";
  return "clock.night";
}

// src/config.js
var ENTITY_GROUPS = [
  "lights",
  "covers",
  "climate",
  "plugs",
  "media",
  "remote",
  "appliances",
  "sensors"
];
var emptyGroups = () => ({
  lights: [],
  covers: [],
  climate: [],
  plugs: [],
  media: [],
  remote: [],
  appliances: [],
  sensors: []
});
var clone = (value) => {
  if (Array.isArray(value)) return value.map(clone);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k2, v2]) => [k2, clone(v2)]));
  }
  return value;
};
var DEFAULT_GLOBAL = {
  person: "person.adihouse",
  zone: "zone.home",
  sun: "sun.sun",
  /**
   * Optional. When empty the widget auto-detects the first `weather.*` entity
   * that exists in this Home Assistant instance. No weather entity is invented.
   */
  weather: null,
  /** Optional extra energy sensors; room `appliances` groups are also included. */
  energy: [],
  /** Optional camera pin list. Empty = auto-discover every camera.* entity. */
  cameras: [],
  /** Music player: direct URL and optional presets; tablet or media_player output. */
  music: {
    url: "",
    title: "Zurlii Music",
    volume: 0.8,
    presets: []
  },
  assistant: {
    speak: true
  },
  youtube: {
    api_key: "",
    region: "RO",
    max_results: 8
  },
  /** Find My / iCloud family map. Auto-discovers people and trackers with coordinates. */
  family: {
    auto_discover: true,
    trackers: [],
    map_zoom: 13,
    map_tiles: true
  },
  power_status: "binary_sensor.raspberry_pi_power_status",
  tracker: "device_tracker.tvb",
  notify: "notify.tvb",
  conversation: "conversation.home_assistant",
  todo: "todo.shopping_list",
  network: {
    wan: "binary_sensor.upnp_igd_wan_status",
    ip: "sensor.upnp_igd_external_ip"
  },
  sunNext: {
    rising: "sensor.sun_next_rising",
    dawn: "sensor.sun_next_dawn",
    noon: "sensor.sun_next_noon",
    setting: "sensor.sun_next_setting",
    dusk: "sensor.sun_next_dusk",
    midnight: "sensor.sun_next_midnight"
  },
  updates: [
    "update.stack_in_card_update",
    "update.samba_share_update",
    "update.swipe_card_update",
    "update.terminal_ssh_update"
  ]
};
var DEFAULT_LABELS = {
  "camera.soneria_inteligenta": "Sonerie Poart\u0103",
  "climate.dormitor_adi_imprimanta_priza": "Priza Televizor Adi",
  "media_player.camera_de_zi_televizor_adi": "Televizor Adi",
  "media_player.dormitor_adi_televizor_adi": "Televizor Adi \xB7 Dormitor",
  "remote.dormitor_adi_televizor_adi": "Telecomand\u0103 Adi",
  "sensor.camera_de_zi_televizor_adi_putere": "Putere instant",
  "sensor.camera_de_zi_televizor_adi_energie": "Energie",
  "sensor.camera_de_zi_televizor_adi_power_energy": "Energie cumulat\u0103",
  "sensor.camera_de_zi_televizor_adi_energy_saved": "Energie economisit\u0103",
  "sensor.camera_de_zi_televizor_adi_energy_difference": "Diferen\u021B\u0103 energie",
  "sensor.camera_de_zi_televizor_adi_tv_channel": "Canal TV",
  "sensor.camera_de_zi_televizor_adi_tv_channel_name": "Nume canal",
  "update.swipe_card_update": "Swipe Card",
  "update.terminal_ssh_update": "Terminal & SSH",
  "person.adihouse": "Adi",
  "zone.home": "Acas\u0103",
  "sun.sun": "Soare",
  "device_tracker.tvb": "Telefon tvb",
  "notify.tvb": "Notific\u0103ri tvb",
  "conversation.home_assistant": "Asistent",
  "todo.shopping_list": "Lista de cump\u0103r\u0103turi",
  "binary_sensor.upnp_igd_wan_status": "WAN",
  "sensor.upnp_igd_external_ip": "IP extern",
  "event.soneria_inteligenta_doorbell_picture": "Sonerie \xB7 imagine",
  "select.soneria_inteligenta_mod_inregistrare": "Mod \xEEnregistrare",
  "select.soneria_inteligenta_vedere_nocturna": "Vedere nocturn\u0103",
  "sensor.soneria_inteligenta_baterie": "Baterie sonerie",
  "switch.soneria_inteligenta_inregistrare_video": "\xCEnregistrare video"
};
var DEFAULT_REMOTE_COMMANDS = {
  up: "UP",
  down: "DOWN",
  left: "LEFT",
  right: "RIGHT",
  select: "CENTER",
  back: "BACK",
  home: "HOME",
  volume_up: "VOLUME_UP",
  volume_down: "VOLUME_DOWN"
};
var room = (id, name, subtitle, icon2, accent) => ({
  id,
  name,
  subtitle,
  icon: icon2,
  accent,
  hidden: false,
  entities: emptyGroups(),
  doorbell: null,
  printer: null
});
var DEFAULT_ROOMS = [
  room("curte", "Curte", "Gr\u0103din\u0103 \xB7 Teras\u0103 \xB7 Pergol\u0103", "grass", "green"),
  room("garaj", "Garaj", "Acces auto \xB7 Atelier", "garage", "amber"),
  room("hol_mare", "Hol mare", "Intrare \xB7 Zon\u0103 de zi", "door-open", "blue"),
  room("hol_mic", "Hol mic", "Trecere \xB7 Buc\u0103t\u0103rie", "door", "cyan"),
  room("bucatarie", "Buc\u0103t\u0103rie", "G\u0103tit \xB7 Dining", "chef-hat", "green"),
  room("dormitor_adi", "Dormitor Adi", "TV \xB7 Gaming \xB7 Relaxare", "bed-king", "violet"),
  room("dormitor_adina", "Dormitor Adina", "Birou \xB7 Camer\u0103 de oaspe\u021Bi", "bed-queen", "rose"),
  room("dormitor_alexandra", "Dormitor Alexandra", "Dormitor \xB7 Dressing", "bed-double", "cyan")
];
function defaultRoomsWithEntities() {
  return DEFAULT_ROOMS.map((item) => {
    if (item.id === "curte") {
      return {
        ...clone(item),
        doorbell: {
          camera: "camera.soneria_inteligenta",
          picture: "event.soneria_inteligenta_doorbell_picture",
          recording_mode: "select.soneria_inteligenta_mod_inregistrare",
          night_vision: "select.soneria_inteligenta_vedere_nocturna",
          battery: "sensor.soneria_inteligenta_baterie",
          video: "switch.soneria_inteligenta_inregistrare_video"
        }
      };
    }
    if (item.id !== "dormitor_adi") return clone(item);
    return {
      ...clone(item),
      printer: {
        device_name: "K1C",
        auto_discover: true,
        entities: {}
      },
      entities: {
        ...emptyGroups(),
        plugs: ["climate.dormitor_adi_imprimanta_priza"],
        media: [
          "media_player.camera_de_zi_televizor_adi",
          "media_player.dormitor_adi_televizor_adi"
        ],
        remote: ["remote.dormitor_adi_televizor_adi"],
        appliances: [
          "sensor.camera_de_zi_televizor_adi_putere",
          "sensor.camera_de_zi_televizor_adi_energie",
          "sensor.camera_de_zi_televizor_adi_power_energy",
          "sensor.camera_de_zi_televizor_adi_energy_saved",
          "sensor.camera_de_zi_televizor_adi_energy_difference"
        ],
        sensors: [
          "sensor.camera_de_zi_televizor_adi_tv_channel",
          "sensor.camera_de_zi_televizor_adi_tv_channel_name"
        ]
      }
    };
  });
}
var DEFAULT_CONFIG = {
  type: "custom:zurlii-home",
  title: "Zurli Family",
  subtitle: "AdiHouse \xB7 Smart Home",
  language: "ro",
  clock: {
    show_seconds: false,
    format: "24"
  },
  greeting_name: "Adi",
  background_base: "/zurlii_home_static/backgrounds",
  backgrounds: {},
  rooms: defaultRoomsWithEntities(),
  global: DEFAULT_GLOBAL,
  labels: DEFAULT_LABELS,
  remote_commands: DEFAULT_REMOTE_COMMANDS,
  features: {
    clock: true,
    assist: true,
    todo: true,
    updates: true,
    network: true,
    weather: true,
    energy: true,
    media: true,
    routines: true,
    doorbell: true,
    family: true,
    printer: true,
    cameras: true,
    music: true,
    youtube: true,
    controls: true,
    assistant: true,
    hide_unavailable: true
  },
  demo_mode: false
};
function deepMerge(base, override) {
  if (override === void 0) return clone(base);
  if (Array.isArray(base) || Array.isArray(override)) return clone(override);
  if (base && override && typeof base === "object" && typeof override === "object") {
    const out = { ...clone(base) };
    for (const [key, value] of Object.entries(override)) {
      out[key] = key in out ? deepMerge(out[key], value) : clone(value);
    }
    return out;
  }
  return override;
}
function classifyEntities(ids = []) {
  const groups = emptyGroups();
  for (const id of ids) {
    if (typeof id !== "string" || !id.includes(".")) continue;
    const domain = id.split(".")[0];
    if (domain === "light") groups.lights.push(id);
    else if (domain === "cover") groups.covers.push(id);
    else if (domain === "climate") groups.climate.push(id);
    else if (domain === "switch") groups.plugs.push(id);
    else if (domain === "media_player") groups.media.push(id);
    else if (domain === "remote") groups.remote.push(id);
    else if (["sensor", "binary_sensor", "fan", "vacuum"].includes(domain)) {
      groups.sensors.push(id);
    } else groups.sensors.push(id);
  }
  return groups;
}
function uniqueIds(values = []) {
  const seen = /* @__PURE__ */ new Set();
  const out = [];
  for (const value of values) {
    if (typeof value !== "string" || !value || seen.has(value)) continue;
    seen.add(value);
    out.push(value);
  }
  return out;
}
function normalizeRoomEntities(entities) {
  if (!entities) return emptyGroups();
  if (Array.isArray(entities)) {
    const classified = classifyEntities(entities);
    for (const group of ENTITY_GROUPS) classified[group] = uniqueIds(classified[group]);
    return classified;
  }
  const out = emptyGroups();
  for (const group of ENTITY_GROUPS) {
    const value = entities[group];
    if (Array.isArray(value)) out[group] = uniqueIds(value);
  }
  return out;
}
function normalizeFeatureEntities(value) {
  if (!value || typeof value !== "object") return null;
  const out = {};
  for (const [key, entityId] of Object.entries(value)) {
    if (typeof entityId === "string" && entityId.includes(".")) out[key] = entityId;
  }
  return Object.keys(out).length ? out : null;
}
function normalizeRoom(raw, fallback) {
  var _a2;
  const base = fallback ? clone(fallback) : room(
    raw.id || `room_${Math.random().toString(36).slice(2, 7)}`,
    raw.name || "Camer\u0103",
    raw.subtitle || "",
    raw.icon || "home",
    raw.accent || "blue"
  );
  const merged = deepMerge(base, raw);
  if (Array.isArray(raw.entities)) {
    merged.entities = normalizeRoomEntities(raw.entities);
  } else if (raw.entities && typeof raw.entities === "object") {
    const provided = normalizeRoomEntities(raw.entities);
    const next = emptyGroups();
    for (const group of ENTITY_GROUPS) {
      next[group] = Object.prototype.hasOwnProperty.call(raw.entities, group) ? provided[group] : [...((_a2 = base.entities) == null ? void 0 : _a2[group]) || []];
    }
    merged.entities = next;
  } else {
    merged.entities = normalizeRoomEntities(base.entities);
  }
  merged.name = raw.name || base.name;
  merged.subtitle = raw.subtitle ?? base.subtitle;
  merged.icon = raw.icon || base.icon;
  merged.accent = raw.accent || base.accent;
  merged.background = raw.background || base.background || null;
  merged.backgroundKey = raw.backgroundKey || base.backgroundKey || base.id;
  merged.hidden = Boolean(merged.hidden);
  merged.doorbell = normalizeFeatureEntities(merged.doorbell);
  if (merged.printer && typeof merged.printer === "object") {
    merged.printer = {
      device_name: merged.printer.device_name || "K1C",
      auto_discover: merged.printer.auto_discover !== false,
      entities: normalizeFeatureEntities(merged.printer.entities) || {}
    };
  } else {
    merged.printer = null;
  }
  return merged;
}
function mergeRooms(inputRooms) {
  const defaults = defaultRoomsWithEntities();
  if (!Array.isArray(inputRooms) || inputRooms.length === 0) return defaults;
  const known = new Map(defaults.map((r4) => [r4.id, r4]));
  const result = defaults.map((defaultRoom) => {
    const override = inputRooms.find((r4) => r4 && r4.id === defaultRoom.id);
    return override ? normalizeRoom(override, defaultRoom) : defaultRoom;
  });
  for (const custom of inputRooms) {
    if (!custom || !custom.id || known.has(custom.id)) continue;
    result.push(normalizeRoom(custom));
  }
  return result;
}
function normalizeConfig(input = {}) {
  const source = input && typeof input === "object" ? input : {};
  const merged = deepMerge(DEFAULT_CONFIG, {
    ...source,
    // Rooms are merged by id so a partial override never deletes existing rooms.
    rooms: void 0,
    global: source.global ? deepMerge(DEFAULT_CONFIG.global, source.global) : void 0,
    labels: source.labels ? { ...DEFAULT_LABELS, ...source.labels } : void 0,
    clock: source.clock ? deepMerge(DEFAULT_CONFIG.clock, source.clock) : void 0,
    remote_commands: source.remote_commands ? deepMerge(DEFAULT_REMOTE_COMMANDS, source.remote_commands) : void 0
  });
  merged.rooms = mergeRooms(source.rooms).filter((r4) => !r4.hidden);
  merged.global.updates = uniqueIds(merged.global.updates || []);
  merged.global.energy = uniqueIds(merged.global.energy || []);
  merged.global.cameras = uniqueIds(merged.global.cameras || []);
  merged.global.family = merged.global.family || {};
  merged.global.family.trackers = uniqueIds(merged.global.family.trackers || []);
  merged.backgrounds = {
    ...source.backgrounds && typeof source.backgrounds === "object" ? source.backgrounds : {}
  };
  merged.language = merged.language === "en" ? "en" : "ro";
  merged.title = String(merged.title || "Zurlii Home");
  merged.subtitle = String(merged.subtitle || "");
  merged.greeting_name = String(merged.greeting_name || "");
  return merged;
}
function backgroundUrl(config, value) {
  if (!value) return "";
  if (/^(https?:)?\/\//i.test(value) || value.startsWith("/") || value.startsWith("data:")) {
    return value;
  }
  const base = String(config.background_base || "").replace(/\/+$/, "");
  return base ? `${base}/${value.replace(/^\/+/, "")}` : value;
}
function roomBackground(config, room2) {
  var _a2, _b, _c;
  if (!room2) return backgroundUrl(config, ((_a2 = config.backgrounds) == null ? void 0 : _a2.home) || "casa.jpg");
  if (room2.background) return backgroundUrl(config, room2.background);
  const filename = ((_b = config.backgrounds) == null ? void 0 : _b[room2.backgroundKey || room2.id]) || ((_c = config.backgrounds) == null ? void 0 : _c[room2.id]) || `${room2.backgroundKey || room2.id}.jpg`;
  return backgroundUrl(config, filename);
}
function homeBackground(config) {
  var _a2;
  return backgroundUrl(config, ((_a2 = config.backgrounds) == null ? void 0 : _a2.home) || "casa.jpg");
}
function doorbellEntityIds(doorbell) {
  return doorbell ? uniqueIds(Object.values(doorbell)) : [];
}
function printerEntityIds(printer) {
  return (printer == null ? void 0 : printer.entities) ? uniqueIds(Object.values(printer.entities)) : [];
}
function roomEntityIds(room2) {
  const set = /* @__PURE__ */ new Set();
  if (room2 == null ? void 0 : room2.entities) {
    for (const group of ENTITY_GROUPS) {
      for (const id of room2.entities[group] || []) set.add(id);
    }
  }
  for (const id of doorbellEntityIds(room2 == null ? void 0 : room2.doorbell)) set.add(id);
  for (const id of printerEntityIds(room2 == null ? void 0 : room2.printer)) set.add(id);
  return [...set];
}
function roomEntityCount(room2) {
  return roomEntityIds(room2).length;
}
function isEntityAvailable(state) {
  return Boolean(state) && !["unavailable", "unknown"].includes(state.state);
}
function activeCount(hass, ids = []) {
  if (!hass) return 0;
  return ids.filter((id) => {
    var _a2;
    const state = (_a2 = hass.states) == null ? void 0 : _a2[id];
    if (!state) return false;
    return !["off", "closed", "idle", "standby", "unavailable", "unknown", "paused"].includes(
      state.state
    );
  }).length;
}

// src/format.js
var domainOf = (entityId = "") => entityId.split(".")[0] || "";
function getState(hass, entityId) {
  var _a2;
  return ((_a2 = hass == null ? void 0 : hass.states) == null ? void 0 : _a2[entityId]) || null;
}
function stateValue(hass, entityId) {
  var _a2;
  return ((_a2 = getState(hass, entityId)) == null ? void 0 : _a2.state) ?? "unavailable";
}
function isOn(hass, entityId) {
  return ["on", "open", "playing", "heat", "cool", "auto", "heat_cool"].includes(
    stateValue(hass, entityId)
  );
}
function isUnavailable(hass, entityId) {
  return !isEntityAvailable(getState(hass, entityId));
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function humanizeId(entityId = "") {
  const objectId = entityId.split(".").slice(1).join(".").replace(/_/g, " ").trim();
  return objectId.split(" ").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}
function entityLabel(config, hass, entityId) {
  var _a2, _b, _c;
  const label = (_a2 = config == null ? void 0 : config.labels) == null ? void 0 : _a2[entityId];
  if (label) return label;
  const friendly = (_c = (_b = getState(hass, entityId)) == null ? void 0 : _b.attributes) == null ? void 0 : _c.friendly_name;
  if (friendly) return friendly;
  return humanizeId(entityId);
}
function formatNumber(value, lang, digits = null) {
  const number = Number(value);
  if (!Number.isFinite(number)) return String(value ?? "");
  let fractionDigits = digits;
  if (fractionDigits === null) {
    const abs = Math.abs(number);
    if (abs >= 1e3) fractionDigits = 0;
    else if (abs >= 100) fractionDigits = 1;
    else if (abs >= 10) fractionDigits = 1;
    else fractionDigits = 2;
  }
  return new Intl.NumberFormat(locale(lang), {
    maximumFractionDigits: fractionDigits
  }).format(number);
}
function formatTime(value, lang, withSeconds = false) {
  if (!value) return "\u2014";
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return new Intl.DateTimeFormat(locale(lang), {
    hour: "2-digit",
    minute: "2-digit",
    ...withSeconds ? { second: "2-digit" } : {},
    hour12: false
  }).format(date);
}
function formatLongDate(date, lang) {
  const formatted = new Intl.DateTimeFormat(locale(lang), {
    weekday: "long",
    day: "numeric",
    month: "long"
  }).format(date);
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}
function formatShortDate(value, lang) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "\u2014";
  return new Intl.DateTimeFormat(locale(lang), {
    weekday: "short",
    day: "numeric",
    month: "short"
  }).format(date);
}
function dayLabel(date, lang, now = /* @__PURE__ */ new Date()) {
  const a3 = new Date(date);
  const b3 = new Date(now);
  const day = 864e5;
  const startA = new Date(a3.getFullYear(), a3.getMonth(), a3.getDate()).getTime();
  const startB = new Date(b3.getFullYear(), b3.getMonth(), b3.getDate()).getTime();
  if (startA === startB) return t3(lang, "label.today");
  if (startA - startB === day) return t3(lang, "label.tomorrow");
  return formatShortDate(a3, lang);
}
function relativeTime(value, lang, now = Date.now()) {
  const target = new Date(value).getTime();
  if (Number.isNaN(target)) return "";
  const diffMinutes = Math.round((target - now) / 6e4);
  const formatter = new Intl.RelativeTimeFormat(locale(lang), { numeric: "auto" });
  if (Math.abs(diffMinutes) < 60) return formatter.format(diffMinutes, "minute");
  const hours = Math.round(diffMinutes / 60);
  if (Math.abs(hours) < 24) return formatter.format(hours, "hour");
  return formatter.format(Math.round(hours / 24), "day");
}
function stateText(hass, entityId, lang) {
  const state = getState(hass, entityId);
  const value = (state == null ? void 0 : state.state) ?? "unavailable";
  const domain = domainOf(entityId);
  const attrs = (state == null ? void 0 : state.attributes) || {};
  if (value === "unavailable") return t3(lang, "status.unavailable");
  if (value === "unknown") return t3(lang, "status.unknown");
  if (domain === "person") {
    if (value === "home") return t3(lang, "status.home");
    if (value === "not_home") return t3(lang, "status.away");
    return value;
  }
  if (domain === "device_tracker") {
    if (["home", "not_home"].includes(value)) {
      return value === "home" ? t3(lang, "status.home") : t3(lang, "status.away");
    }
    return value;
  }
  if (domain === "light") {
    return value === "on" ? t3(lang, "action.turn_on") : t3(lang, "media.off");
  }
  if (domain === "cover") {
    const key = `cover.${value}`;
    return hasKey(lang, key) ? t3(lang, key) : value;
  }
  if (domain === "media_player") {
    const key = `media.${value}`;
    return hasKey(lang, key) ? t3(lang, key) : value;
  }
  if (domain === "climate") {
    const key = `climate.${value}`;
    return hasKey(lang, key) ? t3(lang, key) : value;
  }
  if (domain === "sun") {
    if (value === "above_horizon") return t3(lang, "sun.above");
    if (value === "below_horizon") return t3(lang, "sun.below");
    return value;
  }
  if (domain === "update") {
    return value === "on" ? t3(lang, "update.available") : t3(lang, "update.up_to_date");
  }
  if (domain === "binary_sensor") {
    if (value === "on") {
      if (attrs.device_class === "connectivity" || attrs.device_class === "power") {
        return t3(lang, "network.connected");
      }
      return t3(lang, "media.on");
    }
    return t3(lang, "media.off");
  }
  if (domain === "todo") {
    return t3(lang, "todo.items", { count: value });
  }
  if (value === "on") return t3(lang, "media.on");
  if (value === "off") return t3(lang, "media.off");
  return value;
}
function formatEntityValue(hass, entityId, lang) {
  const state = getState(hass, entityId);
  if (!state) return "\u2014";
  const attrs = state.attributes || {};
  if (attrs.device_class === "timestamp" && state.state !== "unavailable") {
    return formatTime(state.state, lang);
  }
  if (state.state === "unavailable" || state.state === "unknown") {
    return stateText(hass, entityId, lang);
  }
  const numeric = Number(state.state);
  const unit = attrs.unit_of_measurement;
  if (Number.isFinite(numeric) && unit) {
    const digits = ["%", "\xB0C", "W", "kWh"].includes(unit) ? unit === "W" ? 0 : 1 : null;
    return `${formatNumber(numeric, lang, digits)} ${unit}`;
  }
  return stateText(hass, entityId, lang);
}
function formatSensorValue(hass, entityId, lang) {
  const state = getState(hass, entityId);
  if (!state) return { value: "\u2014", unit: "" };
  const attrs = state.attributes || {};
  if (attrs.device_class === "timestamp") {
    return { value: formatTime(state.state, lang), unit: "" };
  }
  const numeric = Number(state.state);
  if (Number.isFinite(numeric)) {
    const unit = attrs.unit_of_measurement || "";
    const digits = unit === "W" || unit === "kWh" ? 1 : null;
    return { value: formatNumber(numeric, lang, digits), unit };
  }
  return { value: stateText(hass, entityId, lang), unit: "" };
}
function sensorIcon(hass, entityId) {
  const state = getState(hass, entityId);
  const attrs = (state == null ? void 0 : state.attributes) || {};
  const unit = String(attrs.unit_of_measurement || "").toLowerCase();
  const deviceClass = String(attrs.device_class || "");
  if (["w", "kw"].includes(unit)) return "flash";
  if (unit.includes("kwh")) return "energy-outline";
  if (unit.includes("\xB0")) return "thermometer";
  if (unit === "%") return deviceClass === "humidity" ? "humidity" : "gauge";
  if (deviceClass === "signal_strength") return "wifi";
  if (entityId.includes("channel")) return "tv";
  if (entityId.includes("energy") || entityId.includes("power")) return "energy";
  return "gauge";
}
function mediaTitle(hass, entityId, lang) {
  var _a2;
  const attrs = ((_a2 = getState(hass, entityId)) == null ? void 0 : _a2.attributes) || {};
  return attrs.media_title || attrs.app_name || attrs.source || t3(lang, "media.no_media");
}
function mediaSubtitle(hass, entityId, lang) {
  var _a2;
  const attrs = ((_a2 = getState(hass, entityId)) == null ? void 0 : _a2.attributes) || {};
  const bits = [attrs.media_artist, attrs.media_album_name, attrs.app_name].filter(Boolean);
  return [...new Set(bits)].join(" \xB7 ") || t3(lang, "media.tv");
}
function coverPosition(hass, entityId) {
  var _a2;
  const state = getState(hass, entityId);
  const position = (_a2 = state == null ? void 0 : state.attributes) == null ? void 0 : _a2.current_position;
  if (Number.isFinite(Number(position))) return clamp(Number(position), 0, 100);
  if ((state == null ? void 0 : state.state) === "open") return 100;
  if ((state == null ? void 0 : state.state) === "closed") return 0;
  return 0;
}
function lightBrightness(hass, entityId) {
  var _a2;
  const state = getState(hass, entityId);
  if ((state == null ? void 0 : state.state) !== "on") return 0;
  const brightness = (_a2 = state == null ? void 0 : state.attributes) == null ? void 0 : _a2.brightness;
  if (Number.isFinite(Number(brightness))) return Math.round(Number(brightness) / 255 * 100);
  return 100;
}
function mediaVolume(hass, entityId) {
  var _a2, _b;
  const volume = (_b = (_a2 = getState(hass, entityId)) == null ? void 0 : _a2.attributes) == null ? void 0 : _b.volume_level;
  return Number.isFinite(Number(volume)) ? Math.round(Number(volume) * 100) : 0;
}
function numberAttribute(hass, entityId, key, fallback = null) {
  var _a2, _b;
  const value = (_b = (_a2 = getState(hass, entityId)) == null ? void 0 : _a2.attributes) == null ? void 0 : _b[key];
  return Number.isFinite(Number(value)) ? Number(value) : fallback;
}
function roomAccent(room2) {
  return ["green", "amber", "blue", "cyan", "violet", "rose"].includes(room2 == null ? void 0 : room2.accent) ? room2.accent : "blue";
}
function timestampValue(hass, entityId) {
  const value = stateValue(hass, entityId);
  const time = new Date(value).getTime();
  return Number.isNaN(time) ? null : time;
}
var WEATHER_ICONS = {
  sunny: "sun",
  "clear-night": "night",
  partlycloudy: "partly-cloudy",
  cloudy: "cloud",
  rainy: "rain",
  pouring: "pouring",
  lightning: "lightning",
  "lightning-rainy": "lightning",
  snowy: "snow",
  "snowy-rainy": "snow",
  hail: "hail",
  fog: "fog",
  windy: "wind",
  "windy-variant": "wind",
  exceptional: "alert"
};
function weatherConditionIcon(condition) {
  return WEATHER_ICONS[condition] || "weather";
}
function weatherConditionLabel(lang, condition) {
  const key = `weather.${condition}`;
  if (hasKey(lang, key)) return t3(lang, key);
  return String(condition || "").replace(/-/g, " ");
}
function compassDirection(bearing, lang = "ro") {
  const value = Number(bearing);
  if (!Number.isFinite(value)) return "\u2014";
  const directions = lang === "ro" ? ["N", "NE", "E", "SE", "S", "SV", "V", "NV"] : ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return directions[Math.round((value % 360 + 360) % 360 / 45) % 8];
}
function formatTemperature(value, unit = "\xB0C", lang = "ro") {
  const number = Number(value);
  if (!Number.isFinite(number)) return "\u2014";
  return `${formatNumber(number, lang, Math.abs(number) < 10 ? 1 : 0)} ${unit}`;
}
function weatherTemperature(state) {
  var _a2;
  const value = Number((_a2 = state == null ? void 0 : state.attributes) == null ? void 0 : _a2.temperature);
  return Number.isFinite(value) ? value : null;
}
function weatherUnit(state) {
  var _a2;
  return ((_a2 = state == null ? void 0 : state.attributes) == null ? void 0 : _a2.temperature_unit) || "\xB0C";
}

// src/components/clock.js
var ZurliiClock = class extends i4 {
  static properties = {
    lang: { type: String },
    name: { type: String },
    showSeconds: { type: Boolean, attribute: "show-seconds" }
  };
  static styles = i`
    :host {
      display: block;
      color: #f5f9ff;
      pointer-events: none;
      user-select: none;
    }

    .clock {
      display: flex;
      flex-direction: column;
      gap: 8px;
      text-shadow: 0 2px 34px rgba(0, 0, 0, 0.48);
    }

    .date-row {
      display: flex;
      align-items: center;
      gap: 10px;
      color: rgba(230, 240, 255, 0.7);
      font-size: 11px;
      font-weight: 650;
      letter-spacing: 0.17em;
      text-transform: uppercase;
    }

    .date-row::before {
      content: "";
      width: 24px;
      height: 1px;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0));
    }

    .time {
      display: flex;
      align-items: flex-start;
      gap: 7px;
      font-family: "SF Pro Display", "Segoe UI Variable Display", "Segoe UI", Inter, sans-serif;
      font-size: clamp(70px, 7.8vw, 112px);
      font-weight: 250;
      line-height: 0.86;
      letter-spacing: -0.075em;
      font-variant-numeric: tabular-nums;
      color: #ffffff;
    }

    .seconds {
      padding-top: 8px;
      font-size: 15px;
      font-weight: 500;
      letter-spacing: 0.02em;
      color: rgba(229, 240, 255, 0.44);
      font-variant-numeric: tabular-nums;
    }

    .greeting {
      display: flex;
      align-items: center;
      gap: 9px;
      margin-top: 2px;
      color: rgba(235, 244, 255, 0.82);
      font-size: 14px;
      font-weight: 450;
      letter-spacing: 0.01em;
    }

    .greeting .dot {
      width: 5px;
      height: 5px;
      border-radius: 999px;
      background: #ffd166;
      box-shadow: 0 0 12px rgba(255, 209, 102, 0.8);
    }

    .greeting strong {
      font-weight: 650;
      color: #ffffff;
    }

    @media (max-width: 720px) {
      .time {
        font-size: clamp(58px, 18vw, 82px);
      }

      .date-row {
        font-size: 9px;
        letter-spacing: 0.13em;
      }

      .greeting {
        font-size: 12px;
      }

      .seconds {
        padding-top: 5px;
        font-size: 12px;
      }
    }

    @media (max-height: 620px) {
      .time {
        font-size: 62px;
      }

      .greeting {
        display: none;
      }
    }
  `;
  constructor() {
    super();
    this.lang = "ro";
    this.name = "";
    this.showSeconds = false;
    this._now = /* @__PURE__ */ new Date();
  }
  connectedCallback() {
    super.connectedCallback();
    this._tick(true);
    this._timer = window.setInterval(() => this._tick(), 1e3);
  }
  disconnectedCallback() {
    window.clearInterval(this._timer);
    this._timer = null;
    super.disconnectedCallback();
  }
  _tick(force = false) {
    const next = /* @__PURE__ */ new Date();
    if (!force && !this.showSeconds) {
      if (next.getHours() === this._now.getHours() && next.getMinutes() === this._now.getMinutes()) {
        return;
      }
    }
    this._now = next;
  }
  render() {
    const now = this._now;
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");
    const greeting = t3(this.lang, greetingKey(now.getHours()), { name: this.name });
    const date = formatLongDate(now, this.lang);
    const spoken = `${date}, ${hh}:${mm}`;
    return b2`
      <div class="clock" role="group" aria-label=${spoken}>
        <div class="date-row">${date}</div>
        <div class="time">${hh}:${mm}${this.showSeconds ? b2`<span class="seconds">${ss}</span>` : ""}</div>
        <div class="greeting">
          <span class="dot"></span>
          <span>${greeting}</span>
        </div>
      </div>
    `;
  }
};
customElements.define("zurlii-clock", ZurliiClock);

// src/styles.js
var styles = i`
  :host {
    --fr-bg: #03070d;
    --fr-text: #f3f8ff;
    --fr-muted: rgba(226, 238, 255, 0.62);
    --fr-dim: rgba(226, 238, 255, 0.38);
    --fr-line: rgba(255, 255, 255, 0.1);
    --fr-line-strong: rgba(255, 255, 255, 0.15);
    --fr-glass: rgba(8, 17, 30, 0.7);
    --fr-yellow: #ffd166;
    --fr-yellow-rgb: 255, 209, 102;
    --fr-blue: #67b6ff;
    --fr-blue-rgb: 103, 182, 255;
    --fr-green: #67e8a5;
    --fr-green-rgb: 103, 232, 165;
    --fr-cyan: #79dcf7;
    --fr-cyan-rgb: 121, 220, 247;
    --fr-violet: #b3a7ff;
    --fr-violet-rgb: 179, 167, 255;
    --fr-rose: #ff9cb3;
    --fr-rose-rgb: 255, 156, 179;
    --fr-amber: #ffc46b;
    --fr-amber-rgb: 255, 196, 107;
    --fr-red: #ff8296;
    --fr-red-rgb: 255, 130, 150;
    --fr-radius: 28px;
    color-scheme: dark;
    display: block;
    position: relative;
    width: 100%;
    height: 100vh;
    height: -webkit-fill-available;
    height: 100dvh;
    min-height: 560px;
    overflow: hidden;
    background: var(--fr-bg);
    color: var(--fr-text);
    font-family: "SF Pro Display", "Segoe UI Variable Display", "Segoe UI", Inter, system-ui,
      -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  * {
    box-sizing: border-box;
  }

  button {
    font: inherit;
    color: inherit;
    appearance: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  button:focus-visible,
  summary:focus-visible,
  input:focus-visible {
    outline: 2px solid rgba(103, 182, 255, 0.85);
    outline-offset: 2px;
  }

  .stage {
    position: absolute;
    inset: 0;
    overflow: hidden;
    isolation: isolate;
  }

  .bg-fallback {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(120% 90% at 70% 10%, rgba(40, 75, 125, 0.36), transparent 60%),
      linear-gradient(135deg, #060c16 0%, #0b1726 52%, #050a12 100%);
  }

  .bg-img {
    position: absolute;
    inset: -2%;
    width: 104%;
    height: 104%;
    object-fit: cover;
    object-position: center;
    opacity: 0;
    transform: scale(1.045);
    transition:
      opacity 900ms cubic-bezier(0.22, 0.8, 0.24, 1),
      transform 1800ms cubic-bezier(0.22, 0.8, 0.24, 1);
    filter: saturate(1.03) contrast(1.02);
    will-change: opacity, transform;
  }

  .bg-img.is-loaded {
    opacity: 1;
    transform: scale(1);
  }

  .shade {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .shade-top {
    background: linear-gradient(
      180deg,
      rgba(2, 6, 12, 0.74) 0%,
      rgba(2, 6, 12, 0.32) 22%,
      transparent 44%
    );
  }

  .shade-bottom {
    background: linear-gradient(
      0deg,
      rgba(2, 6, 12, 0.86) 0%,
      rgba(2, 6, 12, 0.28) 26%,
      transparent 52%
    );
  }

  .shade-left {
    background: linear-gradient(90deg, rgba(2, 6, 12, 0.58), transparent 48%);
  }

  .vignette {
    box-shadow: inset 0 0 160px 20px rgba(0, 0, 0, 0.55);
  }

  .grain {
    position: absolute;
    inset: 0;
    opacity: 0.035;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E");
    mix-blend-mode: overlay;
  }

  .topbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 24px 32px;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0;
    border: 0;
    background: transparent;
    text-align: left;
    cursor: pointer;
    min-width: 0;
  }

  .brand-mark {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    flex: 0 0 42px;
    border-radius: 14px;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.16);
    background:
      radial-gradient(120% 120% at 20% 15%, rgba(103, 182, 255, 0.42), transparent 55%),
      linear-gradient(150deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.025));
    box-shadow:
      0 12px 34px -14px rgba(103, 182, 255, 0.7),
      inset 0 1px 0 rgba(255, 255, 255, 0.16);
    backdrop-filter: blur(16px);
  }

  .brand-text {
    display: block;
    min-width: 0;
  }

  .brand-title {
    display: block;
    font-size: 13px;
    font-weight: 760;
    letter-spacing: 0.18em;
    line-height: 1.15;
    text-transform: uppercase;
    white-space: nowrap;
    text-shadow: 0 2px 18px rgba(0, 0, 0, 0.45);
  }

  .brand-sub {
    display: block;
    margin-top: 4px;
    color: var(--fr-muted);
    font-size: 9px;
    font-weight: 650;
    letter-spacing: 0.19em;
    line-height: 1.1;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .top-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 7px;
    min-width: 0;
  }

  .status-chip {
    display: flex;
    align-items: center;
    gap: 8px;
    min-height: 38px;
    padding: 7px 12px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(9, 18, 32, 0.48);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(20px) saturate(140%);
    color: rgba(240, 247, 255, 0.84);
    white-space: nowrap;
    cursor: pointer;
    text-align: left;
    transition:
      background-color 180ms ease,
      border-color 180ms ease;
  }

  .status-chip:hover {
    background: rgba(15, 31, 53, 0.68);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .status-chip .chip-icon {
    display: grid;
    place-items: center;
    color: rgba(235, 246, 255, 0.74);
  }

  .status-chip .chip-label {
    display: flex;
    flex-direction: column;
    gap: 1px;
    line-height: 1.05;
  }

  .status-chip .chip-value {
    font-size: 11px;
    font-weight: 650;
  }

  .status-chip .chip-meta {
    color: var(--fr-dim);
    font-size: 8px;
    font-weight: 650;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .status-dot {
    width: 7px;
    height: 7px;
    border-radius: 99px;
    background: var(--fr-green);
    box-shadow: 0 0 10px rgba(var(--fr-green-rgb), 0.75);
  }

  .status-dot.is-off {
    background: var(--fr-red);
    box-shadow: 0 0 10px rgba(var(--fr-red-rgb), 0.7);
  }

  .icon-btn,
  .system-btn,
  .sheet-close,
  .power-btn,
  .dpad button,
  .ghost-btn,
  .round-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.055);
    color: rgba(242, 248, 255, 0.8);
    cursor: pointer;
    transition:
      background-color 180ms ease,
      border-color 180ms ease,
      color 180ms ease,
      transform 180ms ease;
  }

  .icon-btn:hover,
  .system-btn:hover,
  .sheet-close:hover,
  .power-btn:hover,
  .dpad button:hover,
  .ghost-btn:hover,
  .round-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    color: #fff;
  }

  .icon-btn:active,
  .system-btn:active,
  .sheet-close:active,
  .power-btn:active,
  .dpad button:active,
  .ghost-btn:active,
  .round-btn:active {
    transform: scale(0.96);
  }

  .system-btn,
  .icon-btn {
    width: 40px;
    height: 40px;
    flex: 0 0 40px;
    border-radius: 13px;
  }

  .system-btn {
    color: rgba(210, 231, 255, 0.9);
  }

  .clock-wrap {
    position: absolute;
    z-index: 20;
    top: 112px;
    left: 38px;
    width: min(650px, 60vw);
    pointer-events: none;
  }

  .room-float {
    position: absolute;
    z-index: 20;
    left: 32px;
    bottom: 118px;
    display: flex;
    align-items: center;
    gap: 11px;
    max-width: min(440px, 70vw);
    padding: 8px 13px 8px 8px;
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.13);
    background: rgba(8, 17, 30, 0.56);
    box-shadow: 0 18px 48px -24px rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(22px) saturate(150%);
    cursor: pointer;
    text-align: left;
    transition:
      background-color 180ms ease,
      border-color 180ms ease,
      transform 180ms ease;
  }

  .room-float:hover {
    background: rgba(13, 26, 44, 0.74);
    border-color: rgba(255, 255, 255, 0.22);
    transform: translateY(-1px);
  }

  .room-float-thumb {
    width: 43px;
    height: 43px;
    flex: 0 0 43px;
    border-radius: 13px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.06);
  }

  .room-float-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .room-float-copy {
    min-width: 0;
    flex: 1;
  }

  .room-float-name {
    font-size: 12.5px;
    font-weight: 680;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .room-float-meta {
    margin-top: 2px;
    color: var(--fr-muted);
    font-size: 9.5px;
    font-weight: 550;
    letter-spacing: 0.03em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .room-float-chevron {
    color: var(--fr-dim);
    display: grid;
    place-items: center;
  }

  .scrim {
    position: absolute;
    inset: 0;
    z-index: 30;
    background: rgba(1, 5, 11, 0.38);
    backdrop-filter: blur(3px);
    animation: fadeIn 280ms ease both;
  }

  .scrim.is-closing {
    animation: fadeOut 220ms ease both;
  }

  .sheet-wrap {
    position: absolute;
    left: 0;
    right: 0;
    bottom: calc(104px + env(safe-area-inset-bottom, 0px));
    z-index: 40;
    display: flex;
    justify-content: center;
    padding: 0 24px;
    pointer-events: none;
  }

  .sheet {
    position: relative;
    display: flex;
    flex-direction: column;
    width: min(1140px, 100%);
    max-height: min(78dvh, 820px);
    overflow: hidden;
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background:
      linear-gradient(155deg, rgba(18, 32, 54, 0.93) 0%, rgba(8, 16, 30, 0.96) 55%),
      rgba(7, 14, 26, 0.96);
    box-shadow:
      0 50px 130px -20px rgba(0, 0, 0, 0.78),
      inset 0 1px 0 rgba(255, 255, 255, 0.09);
    backdrop-filter: blur(34px) saturate(155%);
    -webkit-backdrop-filter: blur(34px) saturate(155%);
    pointer-events: auto;
    animation: sheetIn 420ms cubic-bezier(0.16, 1, 0.3, 1) both;
    will-change: transform, opacity;
  }

  .sheet::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(
        95% 70% at 12% 0%,
        rgba(var(--sheet-accent-rgb, 103, 182, 255), 0.16),
        transparent 55%
      ),
      linear-gradient(90deg, rgba(255, 255, 255, 0.035), transparent 18%, transparent 82%, rgba(255, 255, 255, 0.02));
  }

  .sheet.is-closing {
    animation: sheetOut 230ms cubic-bezier(0.4, 0, 1, 1) both;
  }

  .sheet.is-dragging {
    animation: none;
    transition: none;
  }

  .sheet-head {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 13px;
    flex: 0 0 auto;
    padding: 24px 24px 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.075);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.035), transparent);
    touch-action: none;
  }

  .grabber {
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 38px;
    height: 4px;
    border-radius: 99px;
    background: rgba(255, 255, 255, 0.2);
    transition: background-color 180ms ease;
  }

  .grabber:hover {
    background: rgba(255, 255, 255, 0.32);
  }

  .sheet-icon {
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    flex: 0 0 48px;
    border-radius: 16px;
    color: rgb(var(--sheet-accent-rgb, 103, 182, 255));
    background: rgba(var(--sheet-accent-rgb, 103, 182, 255), 0.12);
    border: 1px solid rgba(var(--sheet-accent-rgb, 103, 182, 255), 0.25);
    box-shadow:
      0 16px 38px -22px rgba(var(--sheet-accent-rgb, 103, 182, 255), 0.9),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
  }

  .sheet-title {
    flex: 1;
    min-width: 0;
  }

  .sheet-eyebrow {
    display: block;
    margin-bottom: 3px;
    color: rgba(var(--sheet-accent-rgb, 103, 182, 255), 0.95);
    font-size: 8.5px;
    font-weight: 750;
    letter-spacing: 0.2em;
    line-height: 1.1;
    text-transform: uppercase;
  }

  .sheet-title h1 {
    margin: 0;
    font-size: 21px;
    font-weight: 640;
    letter-spacing: -0.025em;
    line-height: 1.15;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sheet-subtitle {
    margin: 3px 0 0;
    color: var(--fr-muted);
    font-size: 11px;
    line-height: 1.35;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .head-actions {
    display: flex;
    align-items: center;
    gap: 7px;
    flex: 0 0 auto;
  }

  .sheet-close {
    width: 38px;
    height: 38px;
    flex: 0 0 38px;
    border-radius: 12px;
  }

  .sheet-body {
    position: relative;
    z-index: 1;
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    overscroll-behavior: contain;
    padding: 18px 24px 26px;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.18) transparent;
  }

  .sheet-body::-webkit-scrollbar {
    width: 6px;
  }

  .sheet-body::-webkit-scrollbar-track {
    background: transparent;
  }

  .sheet-body::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.16);
    border-radius: 99px;
  }

  .section {
    margin-top: 22px;
  }

  .section:first-child {
    margin-top: 0;
  }

  .section-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 10px;
  }

  .section-title {
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgba(226, 238, 255, 0.55);
    font-size: 9.5px;
    font-weight: 720;
    letter-spacing: 0.17em;
    line-height: 1.2;
    text-transform: uppercase;
  }

  .section-title::before {
    content: "";
    width: 14px;
    height: 1px;
    background: rgba(255, 255, 255, 0.26);
  }

  .section-actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .count-pill {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    min-height: 22px;
    padding: 3px 8px;
    border-radius: 99px;
    border: 1px solid rgba(255, 255, 255, 0.09);
    background: rgba(255, 255, 255, 0.035);
    color: var(--fr-muted);
    font-size: 8.5px;
    font-weight: 650;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .ghost-btn {
    min-height: 30px;
    padding: 5px 10px;
    border-radius: 9px;
    font-size: 9.5px;
    font-weight: 650;
    letter-spacing: 0.04em;
  }

  .ghost-btn.is-accent {
    color: rgb(var(--accent-rgb, 103, 182, 255));
    border-color: rgba(var(--accent-rgb, 103, 182, 255), 0.28);
    background: rgba(var(--accent-rgb, 103, 182, 255), 0.09);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 9px;
  }

  .stat {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    min-width: 0;
    padding: 12px;
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.085);
    background: linear-gradient(150deg, rgba(255, 255, 255, 0.065), rgba(255, 255, 255, 0.022));
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
  }

  .stat-icon {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    flex: 0 0 34px;
    border-radius: 11px;
    color: rgb(var(--accent-rgb, 103, 182, 255));
    background: rgba(var(--accent-rgb, 103, 182, 255), 0.11);
    border: 1px solid rgba(var(--accent-rgb, 103, 182, 255), 0.16);
  }

  .stat-copy {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .stat-label {
    color: var(--fr-dim);
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.13em;
    line-height: 1.15;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .stat-value {
    color: rgba(247, 251, 255, 0.96);
    font-size: 15px;
    font-weight: 650;
    letter-spacing: -0.015em;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .stat-sub {
    color: var(--fr-dim);
    font-size: 9px;
    line-height: 1.25;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .room-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 9px;
  }

  .room-card {
    position: relative;
    display: block;
    height: 142px;
    padding: 0;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.11);
    border-radius: 19px;
    background: #0a1220;
    text-align: left;
    cursor: pointer;
    transition:
      transform 220ms ease,
      border-color 220ms ease,
      box-shadow 220ms ease;
  }

  .room-card:hover {
    transform: translateY(-2px);
    border-color: rgba(var(--accent-rgb, 103, 182, 255), 0.48);
    box-shadow:
      0 20px 44px -24px rgba(0, 0, 0, 0.9),
      0 0 0 1px rgba(var(--accent-rgb, 103, 182, 255), 0.08);
  }

  .room-card:active {
    transform: translateY(0) scale(0.995);
  }

  .room-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 550ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .room-card:hover .room-img {
    transform: scale(1.045);
  }

  .room-overlay {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(3, 8, 15, 0.22) 0%, rgba(3, 8, 15, 0.03) 38%, rgba(3, 8, 15, 0.86) 100%),
      linear-gradient(90deg, rgba(3, 8, 15, 0.3), transparent 55%);
  }

  .room-top {
    position: absolute;
    top: 9px;
    left: 9px;
    right: 9px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
  }

  .room-icon {
    display: grid;
    place-items: center;
    width: 29px;
    height: 29px;
    border-radius: 9px;
    color: rgba(255, 255, 255, 0.9);
    background: rgba(7, 15, 27, 0.48);
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
  }

  .room-count {
    min-height: 21px;
    padding: 3px 7px;
    border-radius: 99px;
    border: 1px solid rgba(255, 255, 255, 0.11);
    background: rgba(7, 15, 27, 0.5);
    color: rgba(235, 244, 255, 0.72);
    font-size: 8px;
    font-weight: 650;
    letter-spacing: 0.05em;
    white-space: nowrap;
    backdrop-filter: blur(12px);
  }

  .room-count.is-empty {
    color: rgba(255, 255, 255, 0.48);
  }

  .room-bottom {
    position: absolute;
    left: 11px;
    right: 11px;
    bottom: 10px;
    min-width: 0;
  }

  .room-name {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13.5px;
    font-weight: 660;
    letter-spacing: -0.01em;
    line-height: 1.2;
    text-shadow: 0 2px 14px rgba(0, 0, 0, 0.7);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .room-active-dot {
    width: 5px;
    height: 5px;
    flex: 0 0 5px;
    border-radius: 99px;
    background: rgb(var(--accent-rgb, 103, 182, 255));
    box-shadow: 0 0 10px rgba(var(--accent-rgb, 103, 182, 255), 0.8);
  }

  .room-sub {
    margin-top: 2px;
    color: rgba(226, 238, 255, 0.56);
    font-size: 9px;
    font-weight: 500;
    line-height: 1.25;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .empty-room-dot {
    width: 5px;
    height: 5px;
    flex: 0 0 5px;
    border-radius: 99px;
    border: 1px solid rgba(255, 255, 255, 0.45);
  }

  .system-strip {
    display: flex;
    align-items: center;
    gap: 11px;
    width: 100%;
    margin-top: 9px;
    padding: 12px 14px;
    border-radius: 17px;
    border: 1px solid rgba(255, 255, 255, 0.085);
    background: linear-gradient(150deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.02));
    text-align: left;
    cursor: pointer;
    transition:
      background-color 180ms ease,
      border-color 180ms ease;
  }

  .system-strip:hover {
    background: rgba(255, 255, 255, 0.075);
    border-color: rgba(255, 255, 255, 0.16);
  }

  .system-strip-icon {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    flex: 0 0 34px;
    border-radius: 11px;
    color: var(--fr-blue);
    background: rgba(var(--fr-blue-rgb), 0.1);
    border: 1px solid rgba(var(--fr-blue-rgb), 0.16);
  }

  .system-strip-copy {
    flex: 1;
    min-width: 0;
  }

  .system-strip-title {
    font-size: 12px;
    font-weight: 650;
    line-height: 1.25;
  }

  .system-strip-sub {
    margin-top: 2px;
    color: var(--fr-dim);
    font-size: 9.5px;
    line-height: 1.3;
  }

  .system-strip-chevron {
    color: var(--fr-dim);
    display: grid;
    place-items: center;
  }

  .entity-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 9px;
  }

  .entity-card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 9px;
    min-height: 112px;
    padding: 13px;
    border-radius: 19px;
    border: 1px solid rgba(255, 255, 255, 0.085);
    background: linear-gradient(150deg, rgba(255, 255, 255, 0.058), rgba(255, 255, 255, 0.022));
    overflow: hidden;
    transition:
      background-color 200ms ease,
      border-color 200ms ease,
      box-shadow 200ms ease;
  }

  .entity-card::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(
      100% 80% at 0% 0%,
      rgba(var(--accent-rgb, 103, 182, 255), 0.09),
      transparent 58%
    );
    opacity: 0;
    transition: opacity 220ms ease;
  }

  .entity-card.is-on::after {
    opacity: 1;
  }

  .entity-card.is-on.accent-yellow {
    border-color: rgba(var(--fr-yellow-rgb), 0.38);
    background: linear-gradient(145deg, rgba(var(--fr-yellow-rgb), 0.16), rgba(var(--fr-yellow-rgb), 0.045));
    box-shadow:
      0 18px 44px -32px rgba(var(--fr-yellow-rgb), 0.9),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
  }

  .entity-card.is-on.accent-blue {
    border-color: rgba(var(--fr-blue-rgb), 0.36);
    background: linear-gradient(145deg, rgba(var(--fr-blue-rgb), 0.15), rgba(var(--fr-blue-rgb), 0.035));
    box-shadow: 0 18px 44px -32px rgba(var(--fr-blue-rgb), 0.9);
  }

  .entity-card.is-on.accent-cyan {
    border-color: rgba(var(--fr-cyan-rgb), 0.36);
    background: linear-gradient(145deg, rgba(var(--fr-cyan-rgb), 0.15), rgba(var(--fr-cyan-rgb), 0.035));
    box-shadow: 0 18px 44px -32px rgba(var(--fr-cyan-rgb), 0.9);
  }

  .entity-card.is-on.accent-green {
    border-color: rgba(var(--fr-green-rgb), 0.34);
    background: linear-gradient(145deg, rgba(var(--fr-green-rgb), 0.12), rgba(var(--fr-green-rgb), 0.028));
  }

  .entity-card.is-unavailable {
    opacity: 0.55;
  }

  .entity-head {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 9px;
    min-width: 0;
  }

  .entity-icon {
    display: grid;
    place-items: center;
    width: 33px;
    height: 33px;
    flex: 0 0 33px;
    border-radius: 10px;
    color: rgb(var(--accent-rgb, 103, 182, 255));
    background: rgba(var(--accent-rgb, 103, 182, 255), 0.1);
    border: 1px solid rgba(var(--accent-rgb, 103, 182, 255), 0.15);
    transition:
      color 200ms ease,
      background-color 200ms ease,
      box-shadow 200ms ease;
  }

  .entity-card.is-on.accent-yellow .entity-icon {
    color: var(--fr-yellow);
    background: rgba(var(--fr-yellow-rgb), 0.18);
    box-shadow: 0 0 24px -6px rgba(var(--fr-yellow-rgb), 0.65);
  }

  .entity-card.is-on.accent-blue .entity-icon {
    color: var(--fr-blue);
    background: rgba(var(--fr-blue-rgb), 0.18);
  }

  .entity-card.is-on.accent-cyan .entity-icon {
    color: var(--fr-cyan);
    background: rgba(var(--fr-cyan-rgb), 0.18);
  }

  .entity-copy {
    min-width: 0;
    flex: 1;
  }

  .entity-name {
    color: rgba(247, 251, 255, 0.94);
    font-size: 12px;
    font-weight: 650;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .entity-state {
    margin-top: 2px;
    color: var(--fr-muted);
    font-size: 9.5px;
    font-weight: 500;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .entity-state .state-accent {
    color: rgb(var(--accent-rgb, 103, 182, 255));
  }

  .entity-card.is-on.accent-amber .entity-icon {
    color: var(--fr-amber);
    background: rgba(var(--fr-amber-rgb), 0.18);
    box-shadow: 0 0 24px -7px rgba(var(--fr-amber-rgb), 0.55);
  }

  .plug-meta {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-top: 10px;
    padding-top: 8px;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
    color: var(--fr-dim);
    font-size: 8px;
    font-weight: 650;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .plug-meta strong {
    color: rgba(250, 253, 255, 0.9);
    font-size: 10px;
    font-weight: 650;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0;
    text-transform: none;
  }

  .power-btn {
    width: 32px;
    height: 32px;
    flex: 0 0 32px;
    border-radius: 10px;
    color: var(--fr-muted);
  }

  .power-btn.is-on {
    color: rgb(var(--accent-rgb, 103, 182, 255));
    border-color: rgba(var(--accent-rgb, 103, 182, 255), 0.28);
    background: rgba(var(--accent-rgb, 103, 182, 255), 0.11);
  }

  .entity-card.is-on.accent-yellow .power-btn.is-on {
    color: var(--fr-yellow);
    border-color: rgba(var(--fr-yellow-rgb), 0.3);
    background: rgba(var(--fr-yellow-rgb), 0.13);
  }

  .entity-foot {
    position: relative;
    z-index: 1;
    margin-top: auto;
  }

  .range-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .range-row .range-icon {
    color: var(--fr-dim);
    display: grid;
    place-items: center;
  }

  .range-value {
    min-width: 32px;
    color: var(--fr-muted);
    font-size: 9.5px;
    font-weight: 650;
    font-variant-numeric: tabular-nums;
    text-align: right;
  }

  .fr-range {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    height: 5px;
    margin: 4px 0;
    border-radius: 99px;
    background: linear-gradient(
      90deg,
      rgb(var(--accent-rgb, 103, 182, 255)) 0%,
      rgb(var(--accent-rgb, 103, 182, 255)) var(--pct, 0%),
      rgba(255, 255, 255, 0.13) var(--pct, 0%),
      rgba(255, 255, 255, 0.13) 100%
    );
    cursor: pointer;
    outline: none;
  }

  .fr-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 13px;
    height: 13px;
    border-radius: 99px;
    border: 2px solid rgba(7, 14, 26, 0.9);
    background: rgb(var(--accent-rgb, 103, 182, 255));
    box-shadow: 0 0 0 3px rgba(var(--accent-rgb, 103, 182, 255), 0.16);
    cursor: grab;
  }

  .fr-range::-moz-range-thumb {
    width: 11px;
    height: 11px;
    border-radius: 99px;
    border: 2px solid rgba(7, 14, 26, 0.9);
    background: rgb(var(--accent-rgb, 103, 182, 255));
    box-shadow: 0 0 0 3px rgba(var(--accent-rgb, 103, 182, 255), 0.16);
    cursor: grab;
  }

  .card-action-row {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .card-action-row .spacer {
    flex: 1;
  }

  .mini-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    min-height: 30px;
    padding: 5px 9px;
    border-radius: 9px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.045);
    color: var(--fr-muted);
    font-size: 9px;
    font-weight: 650;
    letter-spacing: 0.02em;
    cursor: pointer;
    transition:
      background-color 160ms ease,
      color 160ms ease,
      border-color 160ms ease;
  }

  .mini-btn:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .mini-btn.is-accent {
    color: rgb(var(--accent-rgb, 103, 182, 255));
    border-color: rgba(var(--accent-rgb, 103, 182, 255), 0.25);
    background: rgba(var(--accent-rgb, 103, 182, 255), 0.09);
  }

  .media-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    gap: 10px;
  }

  .media-card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 14px;
    border-radius: 21px;
    border: 1px solid rgba(255, 255, 255, 0.09);
    background:
      radial-gradient(100% 100% at 0% 0%, rgba(103, 182, 255, 0.08), transparent 60%),
      linear-gradient(150deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.022));
    overflow: hidden;
  }

  .media-card.is-on {
    border-color: rgba(var(--fr-blue-rgb), 0.3);
    box-shadow: 0 22px 48px -36px rgba(var(--fr-blue-rgb), 0.8);
  }

  .media-head {
    display: flex;
    align-items: center;
    gap: 9px;
    min-width: 0;
  }

  .media-icon {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    flex: 0 0 34px;
    border-radius: 10px;
    color: var(--fr-blue);
    background: rgba(var(--fr-blue-rgb), 0.12);
    border: 1px solid rgba(var(--fr-blue-rgb), 0.18);
  }

  .media-name {
    flex: 1;
    min-width: 0;
    font-size: 12px;
    font-weight: 650;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .media-state {
    margin-top: 2px;
    color: var(--fr-muted);
    font-size: 9px;
    font-weight: 520;
  }

  .media-now {
    display: flex;
    align-items: center;
    gap: 11px;
    min-width: 0;
  }

  .media-art {
    position: relative;
    display: grid;
    place-items: center;
    width: 68px;
    height: 58px;
    flex: 0 0 68px;
    border-radius: 13px;
    overflow: hidden;
    color: rgba(217, 235, 255, 0.5);
    background:
      radial-gradient(90% 100% at 20% 0%, rgba(103, 182, 255, 0.28), transparent 65%),
      linear-gradient(140deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.02));
    border: 1px solid rgba(255, 255, 255, 0.09);
  }

  .media-art img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .media-copy {
    min-width: 0;
    flex: 1;
  }

  .media-title {
    font-size: 12.5px;
    font-weight: 630;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .media-sub {
    margin-top: 2px;
    color: var(--fr-muted);
    font-size: 9.5px;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .media-controls {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .media-controls .mini-btn {
    width: 31px;
    min-width: 31px;
    height: 31px;
    padding: 0;
    border-radius: 9px;
  }

  .media-controls .fr-range {
    flex: 1;
  }

  .channel-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 8px;
  }

  .channel-pill {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    min-height: 23px;
    padding: 3px 8px;
    border-radius: 99px;
    border: 1px solid rgba(255, 255, 255, 0.09);
    background: rgba(255, 255, 255, 0.035);
    color: var(--fr-muted);
    font-size: 8.5px;
    font-weight: 600;
    white-space: nowrap;
  }

  .channel-pill strong {
    color: rgba(244, 249, 255, 0.9);
    font-weight: 650;
  }

  .remote-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(240px, 300px);
    gap: 10px;
    align-items: start;
  }

  .remote-info {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 15px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.085);
    background: linear-gradient(150deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.02));
  }

  .remote-info-head {
    display: flex;
    align-items: center;
    gap: 9px;
  }

  .remote-info-title {
    font-size: 12px;
    font-weight: 650;
  }

  .remote-info-sub {
    margin-top: 2px;
    color: var(--fr-muted);
    font-size: 9.5px;
  }

  .remote-command-label {
    margin-top: 15px;
    color: var(--fr-dim);
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .remote-command-list {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 7px;
  }

  .remote-visual {
    position: relative;
    display: grid;
    place-items: center;
    height: 82px;
    margin-top: auto;
    color: rgba(216, 226, 255, 0.34);
  }

  .remote-ring {
    position: absolute;
    width: 58px;
    height: 58px;
    border-radius: 99px;
    border: 1px solid rgba(var(--fr-violet-rgb), 0.16);
    background: radial-gradient(circle, rgba(var(--fr-violet-rgb), 0.06), transparent 68%);
  }

  .remote-ring.two {
    width: 88px;
    height: 88px;
    opacity: 0.55;
  }

  .remote-info-foot {
    padding-top: 3px;
    color: var(--fr-dim);
    font-size: 9px;
    line-height: 1.45;
    max-width: 300px;
  }

  .remote-command-list .mini-btn {
    min-width: 36px;
    height: 32px;
    padding: 0 8px;
  }

  .remote-card {
    justify-self: end;
    width: 100%;
    max-width: 294px;
    padding: 14px;
    border-radius: 22px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background:
      radial-gradient(100% 90% at 50% 0%, rgba(179, 167, 255, 0.11), transparent 58%),
      linear-gradient(155deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.018));
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  .remote-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 10px;
  }

  .remote-head-copy {
    min-width: 0;
  }

  .remote-head-title {
    font-size: 11.5px;
    font-weight: 650;
  }

  .remote-head-sub {
    margin-top: 2px;
    color: var(--fr-muted);
    font-size: 9px;
  }

  .dpad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 43px);
    gap: 6px;
  }

  .dpad button {
    border-radius: 13px;
    background: rgba(255, 255, 255, 0.045);
  }

  .dpad button.ok {
    color: var(--fr-violet);
    border-color: rgba(var(--fr-violet-rgb), 0.28);
    background: rgba(var(--fr-violet-rgb), 0.11);
    font-size: 9px;
    font-weight: 750;
    letter-spacing: 0.08em;
  }

  .remote-footer {
    display: flex;
    gap: 6px;
    margin-top: 7px;
  }

  .remote-footer .mini-btn {
    flex: 1;
  }

  .sensor-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 8px;
  }

  .sensor-card {
    position: relative;
    min-width: 0;
    padding: 12px;
    border-radius: 17px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: linear-gradient(150deg, rgba(255, 255, 255, 0.052), rgba(255, 255, 255, 0.018));
    overflow: hidden;
  }

  .sensor-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .sensor-icon {
    display: grid;
    place-items: center;
    width: 27px;
    height: 27px;
    border-radius: 9px;
    color: rgb(var(--accent-rgb, 103, 232, 165));
    background: rgba(var(--accent-rgb, 103, 232, 165), 0.1);
    border: 1px solid rgba(var(--accent-rgb, 103, 232, 165), 0.15);
  }

  .sensor-label {
    margin-top: 8px;
    color: var(--fr-muted);
    font-size: 8.5px;
    font-weight: 650;
    letter-spacing: 0.07em;
    line-height: 1.2;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sensor-value {
    display: flex;
    align-items: baseline;
    gap: 3px;
    margin-top: 3px;
    color: rgba(247, 251, 255, 0.96);
    font-size: 19px;
    font-weight: 610;
    letter-spacing: -0.03em;
    line-height: 1.15;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sensor-value.is-text {
    font-size: 13px;
    font-weight: 630;
    letter-spacing: -0.01em;
    white-space: normal;
    display: block;
  }

  .sensor-unit {
    color: var(--fr-dim);
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0;
  }

  .sun-timeline {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 7px;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: linear-gradient(150deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.015));
  }

  .sun-event {
    position: relative;
    min-width: 0;
    padding: 8px;
    border-radius: 13px;
    border: 1px solid transparent;
  }

  .sun-event.is-next {
    border-color: rgba(var(--fr-yellow-rgb), 0.22);
    background: rgba(var(--fr-yellow-rgb), 0.07);
  }

  .sun-event-icon {
    color: rgba(255, 209, 102, 0.82);
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    border-radius: 8px;
    background: rgba(var(--fr-yellow-rgb), 0.08);
  }

  .sun-event-label {
    margin-top: 7px;
    color: var(--fr-muted);
    font-size: 7.5px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sun-event-time {
    margin-top: 2px;
    font-size: 13px;
    font-weight: 650;
    line-height: 1.15;
    font-variant-numeric: tabular-nums;
  }

  .sun-event-day {
    margin-top: 1px;
    color: var(--fr-dim);
    font-size: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .network-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
  }

  .network-health {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
    padding: 9px 11px;
    border-radius: 12px;
    border: 1px solid rgba(var(--fr-green-rgb), 0.16);
    background: rgba(var(--fr-green-rgb), 0.045);
  }

  .network-health.is-off {
    border-color: rgba(var(--fr-red-rgb), 0.2);
    background: rgba(var(--fr-red-rgb), 0.055);
  }

  .network-health-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
  }

  .network-health-copy small {
    color: var(--fr-dim);
    font-size: 7px;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .network-health-copy strong {
    color: rgba(248, 253, 255, 0.9);
    font-size: 9.5px;
    font-weight: 620;
  }

  .network-health-id {
    overflow: hidden;
    max-width: 45%;
    color: var(--fr-dim);
    font-size: 7.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .net-tile {
    min-width: 0;
    padding: 12px;
    border-radius: 17px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: linear-gradient(150deg, rgba(255, 255, 255, 0.052), rgba(255, 255, 255, 0.018));
  }

  .net-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    color: var(--fr-muted);
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
  }

  .net-value {
    margin-top: 7px;
    color: rgba(247, 251, 255, 0.94);
    font-size: 14px;
    font-weight: 640;
    line-height: 1.25;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .net-value.is-mono {
    font-size: 12px;
    font-weight: 540;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.01em;
  }

  .net-sub {
    margin-top: 2px;
    color: var(--fr-dim);
    font-size: 8.5px;
    line-height: 1.25;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .network-actions {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-top: 8px;
  }

  .update-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 8px;
  }

  .update-card {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    border-radius: 17px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: linear-gradient(150deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.015));
  }

  .update-card.is-available {
    border-color: rgba(var(--fr-amber-rgb), 0.24);
    background: linear-gradient(150deg, rgba(var(--fr-amber-rgb), 0.08), rgba(255, 255, 255, 0.014));
  }

  .update-icon {
    display: grid;
    place-items: center;
    width: 31px;
    height: 31px;
    flex: 0 0 31px;
    border-radius: 10px;
    color: var(--fr-amber);
    background: rgba(var(--fr-amber-rgb), 0.1);
    border: 1px solid rgba(var(--fr-amber-rgb), 0.16);
  }

  .update-copy {
    flex: 1;
    min-width: 0;
  }

  .update-name {
    font-size: 11.5px;
    font-weight: 650;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .update-meta {
    margin-top: 2px;
    color: var(--fr-muted);
    font-size: 9px;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .update-card .mini-btn {
    flex: 0 0 auto;
  }

  .assistant-hero {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    margin-bottom: 8px;
    border-radius: 16px;
    border: 1px solid rgba(var(--fr-violet-rgb), 0.2);
    background:
      radial-gradient(100% 100% at 0% 0%, rgba(var(--fr-violet-rgb), 0.14), transparent 60%),
      rgba(255, 255, 255, 0.025);
  }

  .assistant-hero-icon {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    flex: 0 0 42px;
    border-radius: 13px;
    color: var(--fr-violet);
    background: rgba(var(--fr-violet-rgb), 0.12);
    border: 1px solid rgba(var(--fr-violet-rgb), 0.2);
  }

  .assistant-hero div {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  .assistant-hero strong {
    color: rgba(249, 253, 255, 0.92);
    font-size: 11px;
    font-weight: 650;
  }

  .assistant-hero small {
    color: var(--fr-muted);
    font-size: 8.5px;
  }

  .assistant-suggestions {
    margin-top: 9px;
  }

  .assistant-suggestions > span {
    display: block;
    margin-bottom: 5px;
    color: var(--fr-dim);
    font-size: 7px;
    font-weight: 700;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  .assistant-suggestions > div {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .mic-btn.is-listening {
    color: var(--fr-red);
    border-color: rgba(var(--fr-red-rgb), 0.3);
    background: rgba(var(--fr-red-rgb), 0.1);
    animation: doorbellPulse 1.1s ease-in-out infinite;
  }

  @keyframes doorbellPulse {
    50% { box-shadow: 0 0 0 5px rgba(var(--fr-red-rgb), 0.1); }
  }

  .assist-card {
    padding: 13px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.085);
    background:
      radial-gradient(100% 90% at 100% 0%, rgba(103, 182, 255, 0.09), transparent 58%),
      linear-gradient(150deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.015));
  }

  .assist-form {
    display: flex;
    align-items: center;
    gap: 7px;
  }

  .text-input {
    flex: 1;
    min-width: 0;
    height: 38px;
    padding: 0 12px;
    border-radius: 11px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(0, 0, 0, 0.2);
    color: var(--fr-text);
    font-size: 11px;
    outline: none;
    transition:
      border-color 180ms ease,
      background-color 180ms ease;
  }

  .text-input::placeholder {
    color: rgba(226, 238, 255, 0.34);
  }

  .text-input:focus {
    border-color: rgba(var(--fr-blue-rgb), 0.55);
    background: rgba(0, 0, 0, 0.28);
  }

  .send-btn {
    width: 38px;
    height: 38px;
    flex: 0 0 38px;
    border-radius: 11px;
    border: 1px solid rgba(var(--fr-blue-rgb), 0.32);
    background: rgba(var(--fr-blue-rgb), 0.14);
    color: var(--fr-blue);
    display: grid;
    place-items: center;
    cursor: pointer;
    transition:
      background-color 180ms ease,
      transform 180ms ease;
  }

  .send-btn:hover {
    background: rgba(var(--fr-blue-rgb), 0.22);
  }

  .send-btn:active {
    transform: scale(0.96);
  }

  .send-btn:disabled {
    opacity: 0.5;
    cursor: wait;
  }

  .assist-hint {
    margin-top: 7px;
    color: var(--fr-dim);
    font-size: 8.5px;
    line-height: 1.35;
  }

  .assist-answer {
    margin-top: 9px;
    padding: 10px 11px;
    border-radius: 12px;
    border: 1px solid rgba(var(--fr-blue-rgb), 0.18);
    background: rgba(var(--fr-blue-rgb), 0.07);
    color: rgba(238, 247, 255, 0.88);
    font-size: 10.5px;
    line-height: 1.5;
  }

  .assist-answer.is-thinking {
    color: var(--fr-muted);
  }

  .todo-card {
    padding: 12px;
    border-radius: 19px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: linear-gradient(150deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.015));
  }

  .todo-add {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 8px;
  }

  .todo-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 7px 1px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }

  .todo-check {
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    flex: 0 0 22px;
    border-radius: 7px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.04);
    color: transparent;
    cursor: pointer;
    transition:
      background-color 160ms ease,
      color 160ms ease;
  }

  .todo-check:hover {
    color: var(--fr-green);
    background: rgba(var(--fr-green-rgb), 0.1);
  }

  .todo-summary {
    flex: 1;
    min-width: 0;
    font-size: 10.5px;
    line-height: 1.35;
    color: rgba(242, 248, 255, 0.84);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .todo-empty {
    padding: 8px 1px 3px;
    color: var(--fr-muted);
    font-size: 10px;
  }

  .empty-panel {
    display: flex;
    align-items: flex-start;
    gap: 13px;
    padding: 17px;
    border-radius: 20px;
    border: 1px dashed rgba(255, 255, 255, 0.16);
    background:
      radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.05), transparent 55%),
      rgba(255, 255, 255, 0.018);
  }

  .empty-icon {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    flex: 0 0 44px;
    border-radius: 13px;
    color: rgba(235, 245, 255, 0.65);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.09);
  }

  .empty-copy {
    flex: 1;
    min-width: 0;
  }

  .empty-title {
    font-size: 14px;
    font-weight: 650;
    line-height: 1.25;
  }

  .empty-text {
    max-width: 680px;
    margin-top: 4px;
    color: var(--fr-muted);
    font-size: 10.5px;
    line-height: 1.55;
  }

  .empty-details {
    margin-top: 9px;
    color: var(--fr-muted);
    font-size: 9.5px;
  }

  .empty-details summary {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: rgba(103, 182, 255, 0.9);
    font-size: 9.5px;
    font-weight: 650;
    cursor: pointer;
    list-style: none;
  }

  .empty-details summary::-webkit-details-marker {
    display: none;
  }

  .empty-details summary::before {
    content: "+";
    font-size: 12px;
    line-height: 1;
  }

  .empty-details[open] summary::before {
    content: "−";
  }

  .empty-details p {
    margin: 6px 0 0;
    line-height: 1.5;
  }

  .mapping-code {
    margin-top: 8px;
    padding: 10px 11px;
    border-radius: 11px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(0, 0, 0, 0.28);
    color: rgba(201, 221, 248, 0.9);
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    font-size: 9.5px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }

  .empty-copy-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 7px;
    margin-top: 9px;
  }

  .skeleton-label {
    display: flex;
    align-items: center;
    gap: 7px;
    margin: 15px 0 7px;
    color: var(--fr-dim);
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .skeleton-label::after {
    content: "";
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), transparent);
  }

  .skeleton-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 8px;
  }

  .skeleton-grid.count-6 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .ghost-card {
    position: relative;
    height: 104px;
    padding: 12px;
    border-radius: 17px;
    border: 1px solid rgba(255, 255, 255, 0.055);
    background:
      linear-gradient(
        110deg,
        rgba(255, 255, 255, 0.035) 8%,
        rgba(255, 255, 255, 0.075) 18%,
        rgba(255, 255, 255, 0.035) 33%
      );
    background-size: 220% 100%;
    animation: shimmer 2.2s linear infinite;
    overflow: hidden;
  }

  .ghost-icon {
    width: 29px;
    height: 29px;
    border-radius: 9px;
    background: rgba(255, 255, 255, 0.055);
  }

  .ghost-line {
    height: 6px;
    margin-top: 9px;
    border-radius: 99px;
    background: rgba(255, 255, 255, 0.05);
  }

  .ghost-line.short {
    width: 56%;
    margin-top: 6px;
  }

  .ghost-track {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 12px;
    height: 4px;
    border-radius: 99px;
    background: rgba(255, 255, 255, 0.045);
  }

  .ghost-slot {
    position: absolute;
    right: 10px;
    bottom: 24px;
    color: rgba(255, 255, 255, 0.2);
    font-size: 7.5px;
    font-weight: 650;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .status-chip.chip-weather .chip-icon {
    color: var(--fr-cyan);
  }

  .routine-quick {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 8px;
  }

  .routine-quick-item {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 10px;
    border-radius: 15px;
    border: 1px solid rgba(var(--accent-rgb), 0.18);
    background:
      linear-gradient(145deg, rgba(var(--accent-rgb), 0.1), rgba(255, 255, 255, 0.018)),
      rgba(255, 255, 255, 0.025);
    color: rgba(242, 248, 255, 0.84);
    cursor: pointer;
    text-align: left;
    transition:
      background-color 180ms ease,
      border-color 180ms ease,
      transform 180ms ease;
  }

  .routine-quick-item:hover {
    background:
      linear-gradient(145deg, rgba(var(--accent-rgb), 0.16), rgba(255, 255, 255, 0.025)),
      rgba(255, 255, 255, 0.035);
    border-color: rgba(var(--accent-rgb), 0.36);
    transform: translateY(-1px);
  }

  .routine-quick-icon {
    display: grid;
    place-items: center;
    width: 29px;
    height: 29px;
    flex: 0 0 29px;
    border-radius: 9px;
    color: rgb(var(--accent-rgb));
    background: rgba(var(--accent-rgb), 0.12);
  }

  .routine-quick-name {
    overflow: hidden;
    font-size: 10.5px;
    font-weight: 630;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .routine-quick-count {
    margin-left: auto;
    color: var(--fr-dim);
    font-size: 8px;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
  }

  .weather-hero {
    position: relative;
    overflow: hidden;
    padding: 18px;
    border-radius: 24px;
    border: 1px solid rgba(var(--fr-cyan-rgb), 0.24);
    background:
      radial-gradient(100% 120% at 82% 0%, rgba(var(--fr-cyan-rgb), 0.24), transparent 58%),
      radial-gradient(80% 100% at 0% 100%, rgba(103, 182, 255, 0.1), transparent 54%),
      linear-gradient(145deg, rgba(28, 57, 90, 0.88), rgba(9, 23, 42, 0.94));
    box-shadow:
      0 30px 74px -44px rgba(var(--fr-cyan-rgb), 0.8),
      inset 0 1px 0 rgba(255, 255, 255, 0.09);
  }

  .weather-hero::after {
    content: "";
    position: absolute;
    right: -30px;
    bottom: -60px;
    width: 190px;
    height: 190px;
    border-radius: 99px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    box-shadow: 0 0 0 28px rgba(255, 255, 255, 0.015);
    pointer-events: none;
  }

  .weather-hero-top {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .weather-place {
    overflow: hidden;
    color: rgba(241, 249, 255, 0.86);
    font-size: 10px;
    font-weight: 650;
    letter-spacing: 0.1em;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .weather-live {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: rgba(235, 247, 255, 0.56);
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }

  .weather-live::before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 99px;
    background: var(--fr-green);
    box-shadow: 0 0 9px rgba(var(--fr-green-rgb), 0.8);
  }

  .weather-hero-main {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    margin-top: 7px;
  }

  .weather-hero-copy {
    min-width: 0;
  }

  .weather-temp {
    color: #fff;
    font-size: clamp(54px, 7vw, 78px);
    font-weight: 240;
    letter-spacing: -0.075em;
    line-height: 0.92;
    font-variant-numeric: tabular-nums;
    text-shadow: 0 8px 34px rgba(0, 0, 0, 0.34);
  }

  .weather-temp span {
    margin-left: 6px;
    color: rgba(238, 248, 255, 0.55);
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
  }

  .weather-condition {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 5px;
    color: rgba(237, 248, 255, 0.78);
    font-size: 11px;
    font-weight: 600;
  }

  .weather-art {
    position: relative;
    display: grid;
    place-items: center;
    width: 108px;
    height: 108px;
    flex: 0 0 108px;
    border-radius: 28px;
    color: rgba(255, 255, 255, 0.9);
    background:
      radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.2), transparent 44%),
      linear-gradient(145deg, rgba(121, 220, 247, 0.19), rgba(255, 255, 255, 0.035));
    border: 1px solid rgba(255, 255, 255, 0.13);
    box-shadow:
      0 20px 42px -28px rgba(0, 0, 0, 0.8),
      inset 0 1px 0 rgba(255, 255, 255, 0.16);
    backdrop-filter: blur(12px);
  }

  .weather-hero-foot {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 13px;
    color: rgba(235, 247, 255, 0.56);
    font-size: 9px;
    line-height: 1.3;
  }

  .weather-foot-divider {
    width: 1px;
    height: 12px;
    margin: 0 3px;
    background: rgba(255, 255, 255, 0.14);
  }

  .weather-detail-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(118px, 1fr));
    gap: 7px;
  }

  .weather-tile {
    display: grid;
    grid-template-columns: 24px 1fr;
    grid-template-rows: auto auto;
    column-gap: 8px;
    padding: 10px;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: linear-gradient(150deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.018));
  }

  .weather-tile-icon {
    display: grid;
    grid-row: 1 / 3;
    place-items: center;
    width: 24px;
    height: 24px;
    align-self: center;
    border-radius: 8px;
    color: var(--fr-cyan);
    background: rgba(var(--fr-cyan-rgb), 0.1);
  }

  .weather-tile-label {
    align-self: end;
    color: var(--fr-dim);
    font-size: 7.5px;
    font-weight: 700;
    letter-spacing: 0.09em;
    line-height: 1.1;
    text-transform: uppercase;
  }

  .weather-tile-value {
    align-self: start;
    overflow: hidden;
    color: rgba(247, 251, 255, 0.92);
    font-size: 12px;
    font-weight: 620;
    line-height: 1.3;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .forecast-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 7px;
  }

  .forecast-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 0;
    padding: 11px 7px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: linear-gradient(150deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.018));
    text-align: center;
  }

  .forecast-day {
    color: var(--fr-muted);
    font-size: 8.5px;
    font-weight: 700;
    letter-spacing: 0.04em;
    white-space: nowrap;
  }

  .forecast-icon {
    display: grid;
    place-items: center;
    height: 31px;
    margin-top: 5px;
    color: var(--fr-cyan);
  }

  .forecast-condition {
    overflow: hidden;
    width: 100%;
    margin-top: 2px;
    color: var(--fr-dim);
    font-size: 8px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .forecast-temps {
    display: flex;
    align-items: baseline;
    gap: 4px;
    margin-top: 6px;
    font-variant-numeric: tabular-nums;
  }

  .forecast-temps strong {
    color: rgba(250, 253, 255, 0.95);
    font-size: 11.5px;
    font-weight: 650;
  }

  .forecast-temps small {
    color: var(--fr-dim);
    font-size: 9px;
    font-weight: 550;
  }

  .forecast-rain {
    display: flex;
    align-items: center;
    gap: 3px;
    margin-top: 3px;
    color: rgba(121, 220, 247, 0.74);
    font-size: 8px;
    font-weight: 650;
  }

  .forecast-card.is-loading {
    min-height: 132px;
    justify-content: center;
  }

  .forecast-skeleton {
    width: 62%;
    height: 8px;
    border-radius: 99px;
    background: rgba(255, 255, 255, 0.07);
    animation: shimmer 2.2s linear infinite;
  }

  .weather-forecast-empty {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 13px;
    border-radius: 15px;
    border: 1px dashed rgba(255, 255, 255, 0.13);
    color: var(--fr-muted);
    font-size: 9.5px;
    line-height: 1.4;
  }

  .weather-empty {
    display: flex;
    align-items: center;
    gap: 17px;
    padding: 20px;
    border-radius: 23px;
    border: 1px dashed rgba(255, 255, 255, 0.16);
    background:
      radial-gradient(100% 100% at 0% 0%, rgba(var(--fr-cyan-rgb), 0.08), transparent 55%),
      rgba(255, 255, 255, 0.018);
  }

  .weather-empty-art {
    display: grid;
    place-items: center;
    width: 88px;
    height: 88px;
    flex: 0 0 88px;
    border-radius: 25px;
    color: rgba(121, 220, 247, 0.66);
    background: rgba(var(--fr-cyan-rgb), 0.07);
    border: 1px solid rgba(var(--fr-cyan-rgb), 0.14);
  }

  .weather-empty-copy {
    min-width: 0;
  }

  .weather-map-hint {
    display: inline-block;
    margin-top: 9px;
    padding: 6px 8px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(0, 0, 0, 0.24);
    color: rgba(198, 220, 248, 0.8);
    font-family: "SFMono-Regular", Consolas, monospace;
    font-size: 8.5px;
    line-height: 1.4;
  }

  .weather-skeleton {
    padding: 11px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    background: rgba(255, 255, 255, 0.018);
  }

  .weather-skeleton-hero {
    height: 118px;
    border-radius: 17px;
    background: linear-gradient(
      110deg,
      rgba(255, 255, 255, 0.035) 8%,
      rgba(255, 255, 255, 0.075) 18%,
      rgba(255, 255, 255, 0.035) 33%
    );
    background-size: 220% 100%;
    animation: shimmer 2.2s linear infinite;
  }

  .weather-skeleton-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 7px;
    margin-top: 8px;
  }

  .weather-skeleton-row span {
    height: 46px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.045);
  }

  .energy-hero {
    display: grid;
    grid-template-columns: minmax(0, 1.5fr) minmax(0, 0.9fr);
    gap: 10px;
    padding: 17px;
    border-radius: 23px;
    border: 1px solid rgba(var(--fr-green-rgb), 0.2);
    background:
      radial-gradient(100% 130% at 100% 0%, rgba(var(--fr-green-rgb), 0.16), transparent 58%),
      linear-gradient(145deg, rgba(21, 48, 43, 0.68), rgba(8, 23, 26, 0.88));
    box-shadow: 0 28px 64px -42px rgba(var(--fr-green-rgb), 0.7);
  }

  .energy-main {
    min-width: 0;
  }

  .energy-eyebrow {
    display: flex;
    align-items: center;
    gap: 6px;
    color: rgba(221, 248, 239, 0.58);
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }

  .energy-live-dot {
    width: 5px;
    height: 5px;
    border-radius: 99px;
    background: var(--fr-green);
    box-shadow: 0 0 9px rgba(var(--fr-green-rgb), 0.8);
  }

  .energy-value {
    margin-top: 7px;
    color: #fff;
    font-size: clamp(42px, 5vw, 58px);
    font-weight: 260;
    letter-spacing: -0.06em;
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }

  .energy-value span {
    margin-left: 4px;
    color: rgba(222, 249, 239, 0.55);
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0;
  }

  .energy-sub {
    margin-top: 4px;
    color: var(--fr-muted);
    font-size: 9.5px;
  }

  .energy-side {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 5px 5px 5px 14px;
    border-left: 1px solid rgba(255, 255, 255, 0.08);
    text-align: right;
  }

  .energy-side-icon {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border-radius: 10px;
    color: var(--fr-green);
    background: rgba(var(--fr-green-rgb), 0.1);
    border: 1px solid rgba(var(--fr-green-rgb), 0.17);
  }

  .energy-side-label {
    margin-top: 7px;
    color: var(--fr-dim);
    font-size: 7.5px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .energy-side strong {
    margin-top: 2px;
    color: rgba(248, 255, 252, 0.94);
    font-size: 20px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }

  .energy-side small {
    margin-left: 3px;
    color: var(--fr-dim);
    font-size: 9px;
    font-weight: 600;
  }

  .energy-source {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    margin-top: 10px;
    padding: 8px 11px 8px 8px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.09);
    background: linear-gradient(150deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.018));
    color: var(--fr-muted);
    cursor: pointer;
    text-align: left;
  }

  .energy-source:hover {
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(255, 255, 255, 0.16);
  }

  .energy-source-thumb {
    width: 38px;
    height: 38px;
    flex: 0 0 38px;
    overflow: hidden;
    border-radius: 11px;
    background: rgba(255, 255, 255, 0.05);
  }

  .energy-source-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .energy-source-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
  }

  .energy-source-label {
    color: var(--fr-dim);
    font-size: 7.5px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .energy-source-copy strong {
    overflow: hidden;
    color: rgba(247, 252, 255, 0.9);
    font-size: 11px;
    font-weight: 620;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .energy-source-meta {
    color: var(--fr-dim);
    font-size: 8px;
    font-weight: 650;
    white-space: nowrap;
  }

  .routine-intro {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px;
    border-radius: 18px;
    border: 1px solid rgba(var(--fr-violet-rgb), 0.16);
    background:
      radial-gradient(100% 100% at 0% 0%, rgba(var(--fr-violet-rgb), 0.1), transparent 60%),
      rgba(255, 255, 255, 0.02);
  }

  .routine-intro-icon {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    flex: 0 0 42px;
    border-radius: 13px;
    color: var(--fr-violet);
    background: rgba(var(--fr-violet-rgb), 0.1);
    border: 1px solid rgba(var(--fr-violet-rgb), 0.17);
  }

  .routine-intro-title {
    color: rgba(248, 252, 255, 0.93);
    font-size: 13px;
    font-weight: 650;
  }

  .routine-intro-text {
    margin-top: 3px;
    color: var(--fr-muted);
    font-size: 9.5px;
    line-height: 1.45;
  }

  .routine-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 9px;
    margin-top: 10px;
  }

  .routine-card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 14px;
    border-radius: 20px;
    border: 1px solid rgba(var(--accent-rgb), 0.2);
    background:
      radial-gradient(100% 100% at 0% 0%, rgba(var(--accent-rgb), 0.1), transparent 60%),
      linear-gradient(150deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.018));
    box-shadow: 0 20px 44px -38px rgba(var(--accent-rgb), 0.8);
  }

  .routine-head {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  .routine-icon {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    flex: 0 0 38px;
    border-radius: 12px;
    color: rgb(var(--accent-rgb));
    background: rgba(var(--accent-rgb), 0.11);
    border: 1px solid rgba(var(--accent-rgb), 0.17);
  }

  .routine-copy {
    min-width: 0;
  }

  .routine-title {
    color: rgba(248, 252, 255, 0.94);
    font-size: 13px;
    font-weight: 650;
    line-height: 1.15;
  }

  .routine-desc {
    margin-top: 3px;
    color: var(--fr-muted);
    font-size: 9.5px;
    line-height: 1.4;
  }

  .routine-groups {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    min-height: 22px;
  }

  .routine-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 3px 6px;
    border-radius: 99px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.035);
    color: var(--fr-muted);
    font-size: 7.5px;
    font-weight: 600;
    white-space: nowrap;
  }

  .routine-chip.is-empty {
    color: var(--fr-dim);
    border-style: dashed;
  }

  .routine-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-top: auto;
  }

  .routine-meta {
    color: var(--fr-dim);
    font-size: 8px;
    font-weight: 650;
    letter-spacing: 0.03em;
  }

  .routine-apply {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    min-height: 29px;
    padding: 5px 9px;
    border-radius: 9px;
    border: 1px solid rgba(var(--accent-rgb), 0.26);
    background: rgba(var(--accent-rgb), 0.1);
    color: rgb(var(--accent-rgb));
    font-size: 8.5px;
    font-weight: 680;
    cursor: pointer;
    white-space: nowrap;
  }

  .routine-apply:hover {
    background: rgba(var(--accent-rgb), 0.18);
  }

  .routine-apply:disabled {
    opacity: 0.42;
    cursor: default;
  }

  .doorbell-card {
    display: grid;
    grid-template-columns: minmax(0, 1.12fr) minmax(0, 0.88fr);
    gap: 10px;
  }

  .doorbell-visual {
    position: relative;
    min-height: 226px;
    overflow: hidden;
    border-radius: 21px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background:
      radial-gradient(100% 100% at 20% 0%, rgba(103, 182, 255, 0.22), transparent 60%),
      linear-gradient(145deg, rgba(17, 34, 55, 0.9), rgba(5, 13, 24, 0.95));
  }

  .doorbell-visual img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.92) contrast(1.04);
  }

  .doorbell-poster {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    color: rgba(226, 242, 255, 0.48);
    background:
      radial-gradient(circle at 50% 45%, rgba(103, 182, 255, 0.18), transparent 38%),
      radial-gradient(100% 100% at 50% 100%, rgba(255, 255, 255, 0.05), transparent 55%);
  }

  .doorbell-live {
    position: absolute;
    top: 10px;
    left: 10px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 7px;
    border-radius: 99px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(5, 13, 24, 0.56);
    color: rgba(240, 249, 255, 0.75);
    font-size: 7.5px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    backdrop-filter: blur(10px);
  }

  .doorbell-visual-caption {
    position: absolute;
    right: 10px;
    bottom: 10px;
    left: 10px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 9px 10px;
    border-radius: 11px;
    border: 1px solid rgba(255, 255, 255, 0.09);
    background: rgba(4, 11, 20, 0.55);
    backdrop-filter: blur(14px);
  }

  .doorbell-visual-caption strong {
    color: rgba(250, 253, 255, 0.92);
    font-size: 10.5px;
    font-weight: 620;
  }

  .doorbell-visual-caption small {
    color: var(--fr-dim);
    font-size: 8.5px;
  }

  .doorbell-controls {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  .doorbell-battery {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px 10px;
    border-radius: 13px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.035);
  }

  .doorbell-battery-ring {
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    flex: 0 0 30px;
    border-radius: 99px;
    color: var(--fr-green);
    background:
      radial-gradient(circle, #0a1624 55%, transparent 57%),
      conic-gradient(var(--fr-green) var(--battery, 0%), rgba(255, 255, 255, 0.12) 0);
  }

  .doorbell-battery-copy {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .doorbell-battery-copy span {
    color: var(--fr-dim);
    font-size: 7.5px;
    font-weight: 700;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  .doorbell-battery-copy strong {
    color: rgba(248, 253, 255, 0.92);
    font-size: 12px;
    font-weight: 650;
    font-variant-numeric: tabular-nums;
  }

  .doorbell-select {
    padding: 9px 10px;
    border-radius: 13px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03);
  }

  .doorbell-select-head {
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
  }

  .doorbell-select-icon {
    color: var(--fr-cyan);
    display: grid;
    place-items: center;
  }

  .doorbell-select-label {
    flex: 1;
    overflow: hidden;
    color: var(--fr-muted);
    font-size: 8.5px;
    font-weight: 620;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .doorbell-select-value {
    color: rgba(244, 251, 255, 0.9);
    font-size: 8.5px;
    font-weight: 620;
    white-space: nowrap;
  }

  .doorbell-options {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 6px;
  }

  .doorbell-option {
    min-height: 24px;
    padding: 3px 7px;
    border-radius: 7px;
    border: 1px solid rgba(255, 255, 255, 0.09);
    background: rgba(255, 255, 255, 0.035);
    color: var(--fr-muted);
    font-size: 8px;
    font-weight: 600;
    cursor: pointer;
  }

  .doorbell-option:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
  }

  .doorbell-option.is-active {
    color: var(--fr-cyan);
    border-color: rgba(var(--fr-cyan-rgb), 0.26);
    background: rgba(var(--fr-cyan-rgb), 0.1);
  }

  .doorbell-switch {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 9px 10px;
    border-radius: 13px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03);
    color: var(--fr-muted);
    cursor: pointer;
    text-align: left;
    transition:
      border-color 180ms ease,
      background-color 180ms ease;
  }

  .doorbell-switch.is-on {
    border-color: rgba(var(--fr-red-rgb), 0.25);
    background: rgba(var(--fr-red-rgb), 0.06);
  }

  .doorbell-switch-icon {
    display: grid;
    place-items: center;
    width: 25px;
    height: 25px;
    flex: 0 0 25px;
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.55);
    background: rgba(255, 255, 255, 0.05);
  }

  .doorbell-switch.is-on .doorbell-switch-icon {
    color: var(--fr-red);
    background: rgba(var(--fr-red-rgb), 0.1);
  }

  .doorbell-switch-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
  }

  .doorbell-switch-copy span {
    color: rgba(244, 251, 255, 0.88);
    font-size: 9px;
    font-weight: 620;
  }

  .doorbell-switch-copy small {
    color: var(--fr-dim);
    font-size: 8px;
  }

  .toggle-track {
    position: relative;
    width: 27px;
    height: 15px;
    flex: 0 0 27px;
    border-radius: 99px;
    background: rgba(255, 255, 255, 0.12);
    transition: background-color 180ms ease;
  }

  .toggle-track span {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 9px;
    height: 9px;
    border-radius: 99px;
    background: rgba(255, 255, 255, 0.55);
    transition:
      transform 180ms ease,
      background-color 180ms ease;
  }

  .doorbell-switch.is-on .toggle-track {
    background: rgba(var(--fr-green-rgb), 0.3);
  }

  .doorbell-switch.is-on .toggle-track span {
    transform: translateX(12px);
    background: var(--fr-green);
  }

  .family-map {
    position: relative;
    height: 260px;
    overflow: hidden;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: #081321;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 26px 26px;
  }

  .family-map-inner {
    position: absolute;
    z-index: 2;
    width: 1280px;
    height: 768px;
  }

  .family-tile {
    position: absolute;
    width: 256px;
    height: 256px;
    object-fit: cover;
    opacity: 0.72;
    filter: grayscale(0.42) brightness(0.58) contrast(1.07) saturate(0.58);
  }

  .family-map-tint {
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    background:
      radial-gradient(80% 100% at 50% 40%, rgba(7, 25, 45, 0.28), rgba(3, 12, 23, 0.64)),
      linear-gradient(160deg, rgba(27, 77, 118, 0.26), rgba(3, 10, 19, 0.5));
    mix-blend-mode: multiply;
  }

  .family-map-vignette {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background:
      radial-gradient(100% 160% at 50% 50%, transparent 42%, rgba(3, 9, 16, 0.48) 100%),
      linear-gradient(180deg, rgba(3, 9, 16, 0.12), rgba(3, 9, 16, 0.36));
  }

  .family-home-marker {
    position: absolute;
    z-index: 4;
    display: grid;
    place-items: center;
    width: 25px;
    height: 25px;
    transform: translate(-50%, -50%);
    border-radius: 99px;
    color: #06111d;
    background: #f4fbff;
    border: 2px solid rgba(103, 182, 255, 0.75);
    box-shadow:
      0 0 0 5px rgba(103, 182, 255, 0.12),
      0 0 18px rgba(103, 182, 255, 0.5);
  }

  .family-marker {
    position: absolute;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    padding: 0;
    transform: translate(-50%, -50%);
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .family-marker-dot {
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    border-radius: 99px;
    border: 2px solid rgba(255, 255, 255, 0.72);
    background: var(--member-color);
    color: #061018;
    font-size: 10px;
    font-weight: 800;
    box-shadow:
      0 0 0 5px rgba(255, 255, 255, 0.08),
      0 8px 18px rgba(0, 0, 0, 0.45);
  }

  .family-marker-label {
    display: none;
    padding: 2px 5px;
    border-radius: 5px;
    background: rgba(3, 10, 18, 0.7);
    color: rgba(246, 252, 255, 0.9);
    font-size: 7.5px;
    font-weight: 650;
    white-space: nowrap;
    backdrop-filter: blur(6px);
  }

  .family-map-attribution {
    position: absolute;
    right: 8px;
    bottom: 6px;
    z-index: 5;
    color: rgba(224, 239, 255, 0.42);
    font-size: 7px;
    text-decoration: none;
  }

  .family-map-attribution:hover {
    color: rgba(224, 239, 255, 0.72);
  }

  .family-list {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 7px;
    margin-top: 8px;
  }

  .family-person {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 8px 9px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: linear-gradient(150deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.018));
    color: var(--fr-muted);
    cursor: pointer;
    text-align: left;
  }

  .family-person:hover {
    border-color: rgba(255, 255, 255, 0.16);
    background: rgba(255, 255, 255, 0.07);
  }

  .family-person-avatar {
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    flex: 0 0 28px;
    border-radius: 99px;
    background: var(--member-color);
    color: #061018;
    font-size: 10px;
    font-weight: 800;
  }

  .family-person-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
  }

  .family-person-copy strong {
    overflow: hidden;
    color: rgba(248, 253, 255, 0.92);
    font-size: 9.5px;
    font-weight: 640;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .family-person-copy small {
    overflow: hidden;
    color: var(--fr-dim);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .family-person-meta {
    display: flex;
    align-items: center;
    gap: 3px;
    color: var(--fr-dim);
    font-size: 8px;
    font-weight: 650;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  .family-empty {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 15px;
    border-radius: 17px;
    border: 1px dashed rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.018);
  }

  .family-empty-icon {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    flex: 0 0 40px;
    border-radius: 12px;
    color: var(--fr-blue);
    background: rgba(var(--fr-blue-rgb), 0.1);
    border: 1px solid rgba(var(--fr-blue-rgb), 0.15);
  }

  .family-map-hint {
    display: inline-block;
    margin-top: 7px;
    padding: 5px 7px;
    border-radius: 7px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(0, 0, 0, 0.24);
    color: rgba(198, 220, 248, 0.8);
    font-family: "SFMono-Regular", Consolas, monospace;
    font-size: 8px;
  }

  .printer-card {
    padding: 13px;
    border-radius: 21px;
    border: 1px solid rgba(255, 255, 255, 0.09);
    background:
      radial-gradient(100% 100% at 100% 0%, rgba(255, 196, 107, 0.1), transparent 58%),
      linear-gradient(150deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.018));
  }

  .printer-hero {
    display: grid;
    grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
    gap: 11px;
  }

  .printer-visual {
    position: relative;
    display: grid;
    place-items: center;
    min-height: 166px;
    overflow: hidden;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.09);
    background:
      radial-gradient(100% 100% at 20% 0%, rgba(255, 196, 107, 0.18), transparent 60%),
      linear-gradient(145deg, rgba(35, 29, 21, 0.7), rgba(8, 14, 20, 0.9));
  }

  .printer-visual img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.9) contrast(1.05);
  }

  .printer-visual-icon {
    color: rgba(255, 207, 135, 0.58);
  }

  .printer-model {
    position: absolute;
    top: 8px;
    left: 8px;
    padding: 4px 7px;
    border-radius: 7px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(5, 11, 18, 0.55);
    color: rgba(255, 238, 214, 0.8);
    font-size: 8px;
    font-weight: 750;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    backdrop-filter: blur(8px);
  }

  .printer-summary {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
  }

  .printer-status-line {
    display: flex;
    align-items: center;
    gap: 6px;
    color: rgba(249, 252, 255, 0.93);
    font-size: 12px;
    font-weight: 650;
    text-transform: capitalize;
  }

  .printer-live {
    width: 6px;
    height: 6px;
    border-radius: 99px;
    background: rgba(255, 255, 255, 0.25);
  }

  .printer-live.is-live {
    background: var(--fr-green);
    box-shadow: 0 0 10px rgba(var(--fr-green-rgb), 0.8);
  }

  .printer-live-label {
    margin-left: 2px;
    color: var(--fr-green);
    font-size: 7px;
    font-weight: 750;
    letter-spacing: 0.12em;
  }

  .printer-job {
    overflow: hidden;
    margin-top: 3px;
    color: var(--fr-muted);
    font-size: 9.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .printer-progress-row {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    margin-top: 12px;
    color: var(--fr-dim);
    font-size: 8px;
    font-weight: 650;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .printer-progress-row strong {
    color: rgba(250, 253, 255, 0.92);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
  }

  .printer-progress {
    height: 5px;
    margin-top: 4px;
    overflow: hidden;
    border-radius: 99px;
    background: rgba(255, 255, 255, 0.1);
  }

  .printer-progress span {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, var(--fr-amber), var(--fr-green));
    box-shadow: 0 0 10px rgba(var(--fr-green-rgb), 0.45);
  }

  .printer-summary-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: 8px;
    color: var(--fr-dim);
    font-size: 8.5px;
  }

  .printer-summary-meta span {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  .printer-temp-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 6px;
    margin-top: 9px;
  }

  .printer-temp {
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
    padding: 8px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    background: rgba(255, 255, 255, 0.03);
  }

  .printer-temp-icon {
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    flex: 0 0 24px;
    border-radius: 7px;
    color: var(--fr-amber);
    background: rgba(var(--fr-amber-rgb), 0.09);
  }

  .printer-temp-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
  }

  .printer-temp-label {
    color: var(--fr-dim);
    font-size: 7px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .printer-temp-copy strong {
    color: rgba(250, 253, 255, 0.94);
    font-size: 12px;
    font-weight: 640;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  .printer-temp-copy small,
  .printer-temp-target small {
    margin-left: 2px;
    color: var(--fr-dim);
    font-size: 7px;
    font-weight: 600;
  }

  .printer-temp-target {
    color: rgb(var(--fr-amber-rgb));
    font-size: 9px;
    font-weight: 650;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  .printer-action-row,
  .printer-toggles {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 8px;
  }

  .printer-action,
  .printer-toggle {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    min-height: 27px;
    padding: 4px 7px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.09);
    background: rgba(255, 255, 255, 0.035);
    color: var(--fr-muted);
    font-size: 8px;
    font-weight: 620;
    cursor: pointer;
    white-space: nowrap;
  }

  .printer-action:hover,
  .printer-toggle:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
  }

  .printer-action.is-danger {
    color: var(--fr-red);
    border-color: rgba(var(--fr-red-rgb), 0.2);
    background: rgba(var(--fr-red-rgb), 0.06);
  }

  .printer-toggle.is-on {
    color: var(--fr-green);
    border-color: rgba(var(--fr-green-rgb), 0.22);
    background: rgba(var(--fr-green-rgb), 0.07);
  }

  .printer-tuning {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 6px;
    margin-top: 8px;
  }

  .printer-number {
    display: flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
    padding: 6px 7px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    background: rgba(255, 255, 255, 0.025);
  }

  .printer-number-icon {
    color: var(--fr-amber);
    display: grid;
    place-items: center;
  }

  .printer-number-label {
    flex: 1;
    overflow: hidden;
    color: var(--fr-dim);
    font-size: 7px;
    font-weight: 650;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .printer-number strong {
    color: rgba(249, 253, 255, 0.9);
    font-size: 9px;
    font-weight: 650;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  .printer-number button {
    display: grid;
    place-items: center;
    width: 19px;
    height: 19px;
    flex: 0 0 19px;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.09);
    background: rgba(255, 255, 255, 0.04);
    color: var(--fr-muted);
    cursor: pointer;
  }

  .printer-number button:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
  }

  .printer-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
  }

  .printer-stats span {
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-width: 72px;
  }

  .printer-stats small {
    color: var(--fr-dim);
    font-size: 7px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .printer-stats strong {
    color: rgba(247, 252, 255, 0.86);
    font-size: 9px;
    font-weight: 620;
    font-variant-numeric: tabular-nums;
  }

  .camera-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
  }

  .camera-grid.is-compact {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .camera-grid.is-wall {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .camera-card {
    display: block;
    width: 100%;
    min-width: 0;
    padding: 0;
    overflow: hidden;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.09);
    background: linear-gradient(150deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.015));
    color: var(--fr-muted);
    cursor: pointer;
    text-align: left;
    transition:
      border-color 180ms ease,
      transform 180ms ease,
      background-color 180ms ease;
  }

  .camera-card:hover {
    border-color: rgba(255, 255, 255, 0.18);
    background: rgba(255, 255, 255, 0.07);
    transform: translateY(-1px);
  }

  .camera-frame {
    position: relative;
    display: block;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    background:
      radial-gradient(100% 100% at 50% 0%, rgba(103, 182, 255, 0.16), transparent 65%),
      #07111d;
  }

  .camera-frame img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.94) contrast(1.04);
  }

  .camera-live {
    position: absolute;
    inset: 0;
    display: block;
    overflow: hidden;
    background:
      radial-gradient(circle at 50% 45%, rgba(103, 182, 255, 0.1), transparent 45%),
      #07111d;
  }

  .camera-live-poster,
  .camera-live-mjpeg,
  .camera-live ha-camera-stream,
  .camera-live ha-hls-player,
  .camera-live ha-web-rtc-player,
  .camera-live video {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .camera-live-mjpeg {
    z-index: 1;
  }

  .camera-live-poster {
    filter: saturate(0.94) contrast(1.04);
  }

  .camera-live ha-camera-stream {
    z-index: 1;
  }

  .camera-live-empty {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    color: rgba(210, 235, 255, 0.38);
  }

  .camera-live.is-large {
    position: relative;
    inset: auto;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 18px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .camera-placeholder {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    color: rgba(210, 235, 255, 0.38);
    background:
      radial-gradient(circle at 50% 45%, rgba(103, 182, 255, 0.13), transparent 40%),
      linear-gradient(145deg, rgba(13, 31, 52, 0.65), rgba(4, 11, 19, 0.9));
  }

  .camera-badge {
    position: absolute;
    top: 7px;
    left: 7px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 3px 6px;
    border-radius: 99px;
    border: 1px solid rgba(255, 255, 255, 0.13);
    background: rgba(3, 10, 18, 0.62);
    color: rgba(239, 249, 255, 0.82);
    font-size: 7px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    backdrop-filter: blur(8px);
  }

  .camera-card.is-doorbell .camera-badge {
    color: #fff6f2;
    border-color: rgba(255, 148, 132, 0.58);
    background: rgba(186, 38, 47, 0.88);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  }

  .camera-open {
    position: absolute;
    right: 7px;
    bottom: 7px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 7px;
    border-radius: 7px;
    background: rgba(3, 10, 18, 0.64);
    color: rgba(246, 252, 255, 0.82);
    font-size: 7.5px;
    font-weight: 650;
    opacity: 0.9;
    backdrop-filter: blur(8px);
  }

  .camera-copy {
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
    padding: 8px 9px;
  }

  .camera-detail-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
    margin-top: 10px;
  }

  .camera-detail {
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
    padding: 10px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03);
  }

  .camera-detail span {
    color: var(--fr-dim);
    font-size: 7px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .camera-detail strong {
    overflow: hidden;
    color: rgba(248, 253, 255, 0.9);
    font-size: 9px;
    font-weight: 620;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .camera-detail-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 9px;
  }

  .camera-name {
    flex: 1;
    overflow: hidden;
    color: rgba(248, 253, 255, 0.92);
    font-size: 9.5px;
    font-weight: 640;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .camera-sub {
    color: var(--fr-dim);
    font-size: 7.5px;
    white-space: nowrap;
  }

  .camera-chevron {
    display: grid;
    place-items: center;
    color: var(--fr-dim);
  }

  .music-btn.is-playing {
    color: var(--fr-green);
    border-color: rgba(var(--fr-green-rgb), 0.3);
    background: rgba(var(--fr-green-rgb), 0.1);
    box-shadow: 0 0 18px -6px rgba(var(--fr-green-rgb), 0.65);
  }

  .music-quick {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
    padding: 9px 10px;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.09);
    background:
      radial-gradient(100% 100% at 0% 0%, rgba(255, 156, 179, 0.1), transparent 55%),
      rgba(255, 255, 255, 0.028);
  }

  .music-quick.is-playing {
    border-color: rgba(var(--fr-green-rgb), 0.24);
    background:
      radial-gradient(100% 100% at 0% 0%, rgba(var(--fr-green-rgb), 0.11), transparent 55%),
      rgba(255, 255, 255, 0.035);
  }

  .music-quick-icon {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    flex: 0 0 32px;
    border-radius: 10px;
    color: var(--fr-rose);
    background: rgba(var(--fr-rose-rgb), 0.1);
    border: 1px solid rgba(var(--fr-rose-rgb), 0.16);
  }

  .music-quick.is-playing .music-quick-icon {
    color: var(--fr-green);
    background: rgba(var(--fr-green-rgb), 0.12);
    border-color: rgba(var(--fr-green-rgb), 0.2);
  }

  .music-quick-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
    padding: 0;
    border: 0;
    background: transparent;
    color: var(--fr-muted);
    text-align: left;
    cursor: pointer;
  }

  .music-quick-copy span {
    color: var(--fr-dim);
    font-size: 7px;
    font-weight: 700;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  .music-quick-copy strong {
    overflow: hidden;
    color: rgba(249, 253, 255, 0.92);
    font-size: 10px;
    font-weight: 620;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .music-quick-copy small {
    color: var(--fr-dim);
    font-size: 8px;
  }

  .music-quick-play,
  .music-quick-open {
    display: grid;
    place-items: center;
    width: 29px;
    height: 29px;
    flex: 0 0 29px;
    border-radius: 9px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
    color: rgba(250, 253, 255, 0.85);
    cursor: pointer;
  }

  .music-quick-play:hover,
  .music-quick-open:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .music-hero {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 14px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.09);
    background:
      radial-gradient(100% 100% at 0% 0%, rgba(255, 156, 179, 0.14), transparent 58%),
      linear-gradient(150deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.018));
  }

  .music-art {
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    flex: 0 0 64px;
    border-radius: 16px;
    color: var(--fr-rose);
    background:
      radial-gradient(circle at 35% 25%, rgba(255, 255, 255, 0.17), transparent 45%),
      rgba(var(--fr-rose-rgb), 0.12);
    border: 1px solid rgba(var(--fr-rose-rgb), 0.2);
  }

  .music-hero-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  .music-now-label {
    color: var(--fr-dim);
    font-size: 7px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .music-hero-copy strong {
    overflow: hidden;
    color: rgba(250, 253, 255, 0.94);
    font-size: 13px;
    font-weight: 650;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .music-hero-copy small {
    overflow: hidden;
    color: var(--fr-muted);
    font-size: 8.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .music-play,
  .music-stop {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    flex: 0 0 40px;
    border-radius: 12px;
    border: 1px solid rgba(var(--fr-green-rgb), 0.24);
    background: rgba(var(--fr-green-rgb), 0.1);
    color: var(--fr-green);
    cursor: pointer;
  }

  .music-play:hover {
    background: rgba(var(--fr-green-rgb), 0.18);
  }

  .music-stop {
    width: 31px;
    height: 31px;
    flex-basis: 31px;
    border-color: rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.04);
    color: var(--fr-muted);
  }

  .music-volume {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 9px;
    padding: 8px 10px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.028);
    color: var(--fr-dim);
  }

  .music-volume input {
    flex: 1;
    min-width: 0;
    accent-color: var(--fr-rose);
  }

  .music-volume span {
    min-width: 32px;
    color: rgba(248, 253, 255, 0.8);
    font-size: 8.5px;
    font-weight: 650;
    font-variant-numeric: tabular-nums;
    text-align: right;
  }

  .music-outputs {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 7px;
  }

  .music-output {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 9px;
    border-radius: 13px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03);
    color: var(--fr-muted);
    cursor: pointer;
    text-align: left;
  }

  .music-output:hover {
    background: rgba(255, 255, 255, 0.07);
  }

  .music-output.is-active {
    border-color: rgba(var(--fr-rose-rgb), 0.28);
    background: rgba(var(--fr-rose-rgb), 0.08);
  }

  .music-output-icon {
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    flex: 0 0 28px;
    border-radius: 8px;
    color: var(--fr-rose);
    background: rgba(var(--fr-rose-rgb), 0.1);
  }

  .music-output > span:nth-child(2) {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
  }

  .music-output strong {
    overflow: hidden;
    color: rgba(249, 253, 255, 0.9);
    font-size: 9px;
    font-weight: 620;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .music-output small {
    overflow: hidden;
    color: var(--fr-dim);
    font-size: 7.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .music-output > svg {
    color: var(--fr-green);
    flex: 0 0 auto;
  }

  .music-source {
    display: flex;
    gap: 7px;
    margin-bottom: 7px;
  }

  .music-url {
    flex: 1;
    min-width: 0;
    padding: 9px 10px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.22);
    color: rgba(248, 253, 255, 0.9);
    font-size: 9px;
    outline: none;
  }

  .music-url:focus {
    border-color: rgba(var(--fr-rose-rgb), 0.4);
  }

  .music-file-btn {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 8px 10px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.045);
    color: var(--fr-muted);
    font-size: 8.5px;
    font-weight: 620;
    white-space: nowrap;
    cursor: pointer;
  }

  .music-file-btn input {
    display: none;
  }

  .music-presets {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .music-note {
    margin-top: 6px;
    color: var(--fr-dim);
    font-size: 8.5px;
  }

  .control-search {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 8px 10px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.2);
    color: var(--fr-dim);
  }

  .control-search input {
    flex: 1;
    min-width: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: rgba(248, 253, 255, 0.9);
    font-size: 10px;
  }

  .control-search input::placeholder {
    color: var(--fr-dim);
  }

  .control-list {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 8px;
  }

  .control-row {
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
    padding: 5px;
    border-radius: 13px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    background: rgba(255, 255, 255, 0.025);
  }

  .control-main {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
    min-width: 0;
    padding: 4px;
    border: 0;
    background: transparent;
    color: var(--fr-muted);
    text-align: left;
    cursor: pointer;
  }

  .control-icon {
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    flex: 0 0 30px;
    border-radius: 9px;
    color: var(--fr-blue);
    background: rgba(var(--fr-blue-rgb), 0.09);
  }

  .control-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
  }

  .control-copy strong {
    overflow: hidden;
    color: rgba(249, 253, 255, 0.9);
    font-size: 9.5px;
    font-weight: 620;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .control-copy small {
    overflow: hidden;
    color: var(--fr-dim);
    font-size: 7.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .control-actions {
    display: flex;
    gap: 4px;
  }

  .control-action {
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.09);
    background: rgba(255, 255, 255, 0.045);
    color: var(--fr-muted);
    cursor: pointer;
  }

  .control-action:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
  }

  .entity-control-head {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 11px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03);
  }

  .entity-control-icon {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    flex: 0 0 40px;
    border-radius: 12px;
    color: var(--fr-blue);
    background: rgba(var(--fr-blue-rgb), 0.1);
  }

  .entity-control-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
  }

  .entity-control-copy span {
    color: var(--fr-dim);
    font-size: 7px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .entity-control-copy strong {
    overflow: hidden;
    color: rgba(249, 253, 255, 0.92);
    font-size: 11px;
    font-weight: 650;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .entity-control-copy small {
    overflow: hidden;
    color: var(--fr-dim);
    font-size: 7.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .entity-control-state {
    padding: 4px 7px;
    border-radius: 7px;
    color: var(--fr-green);
    background: rgba(var(--fr-green-rgb), 0.08);
    font-size: 8px;
    font-weight: 650;
    white-space: nowrap;
  }

  .entity-control-head + .entity-card,
  .entity-control-head + .entity-grid {
    margin-top: 8px;
  }

  .entity-control-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 9px;
  }

  .control-range {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 9px;
  }

  .control-range input {
    flex: 1;
    accent-color: var(--fr-blue);
  }

  .control-range span {
    color: var(--fr-muted);
    font-size: 8.5px;
    font-variant-numeric: tabular-nums;
  }

  .control-big {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    min-height: 46px;
    margin-top: 8px;
    border-radius: 13px;
    border: 1px solid rgba(var(--fr-blue-rgb), 0.24);
    background: rgba(var(--fr-blue-rgb), 0.09);
    color: #d9edff;
    font-size: 10px;
    font-weight: 650;
    cursor: pointer;
  }

  .control-big.is-on {
    border-color: rgba(var(--fr-green-rgb), 0.25);
    background: rgba(var(--fr-green-rgb), 0.09);
    color: var(--fr-green);
  }

  .control-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 8px;
  }

  .control-number {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 8px;
    padding: 12px;
    border-radius: 13px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03);
  }

  .control-number button {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border-radius: 9px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
    color: var(--fr-muted);
    cursor: pointer;
  }

  .control-number strong {
    min-width: 80px;
    color: rgba(249, 253, 255, 0.94);
    font-size: 22px;
    font-weight: 620;
    text-align: center;
    font-variant-numeric: tabular-nums;
  }

  .control-number small {
    margin-left: 3px;
    color: var(--fr-dim);
    font-size: 9px;
  }

  .entity-attributes {
    margin-top: 9px;
    color: var(--fr-muted);
    font-size: 8.5px;
  }

  .entity-attributes summary {
    cursor: pointer;
  }

  .entity-attributes pre {
    max-height: 220px;
    margin: 7px 0 0;
    padding: 10px;
    overflow: auto;
    border-radius: 9px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(0, 0, 0, 0.28);
    color: rgba(220, 238, 255, 0.75);
    font-family: "SFMono-Regular", Consolas, monospace;
    font-size: 8px;
    line-height: 1.45;
  }

  .youtube-strip {
    display: flex;
    align-items: center;
    gap: 9px;
    width: 100%;
    margin-top: 8px;
    padding: 10px;
    border-radius: 14px;
    border: 1px solid rgba(255, 70, 85, 0.22);
    background:
      radial-gradient(100% 100% at 0% 0%, rgba(255, 70, 85, 0.13), transparent 60%),
      rgba(255, 255, 255, 0.025);
    color: var(--fr-muted);
    cursor: pointer;
    text-align: left;
  }

  .youtube-strip:hover {
    background: rgba(255, 70, 85, 0.1);
  }

  .youtube-strip-icon {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    flex: 0 0 34px;
    border-radius: 10px;
    color: #ff6b72;
    background: rgba(255, 70, 85, 0.12);
  }

  .youtube-strip-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
  }

  .youtube-strip-copy strong {
    color: rgba(250, 253, 255, 0.92);
    font-size: 10px;
    font-weight: 650;
  }

  .youtube-strip-copy small {
    overflow: hidden;
    color: var(--fr-dim);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .youtube-strip-chevron {
    color: var(--fr-dim);
  }

  .youtube-toolbar {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  .youtube-search {
    display: flex;
    flex: 1;
    gap: 5px;
    min-width: 0;
  }

  .youtube-search input,
  .youtube-url-row input,
  .youtube-settings input,
  .youtube-device {
    min-width: 0;
    padding: 9px 10px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.22);
    color: rgba(248, 253, 255, 0.9);
    font-size: 9px;
    outline: none;
  }

  .youtube-search input {
    flex: 1;
  }

  .youtube-search button {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 8px 10px;
    border-radius: 10px;
    border: 1px solid rgba(255, 70, 85, 0.28);
    background: rgba(255, 70, 85, 0.1);
    color: #ffd8da;
    font-size: 8.5px;
    font-weight: 650;
    cursor: pointer;
    white-space: nowrap;
  }

  .youtube-url-row {
    display: flex;
    gap: 5px;
    margin-top: 6px;
  }

  .youtube-url-row input {
    flex: 1;
  }

  .youtube-settings {
    margin-top: 7px;
    color: var(--fr-dim);
    font-size: 8px;
  }

  .youtube-settings summary {
    cursor: pointer;
  }

  .youtube-settings div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 5px;
  }

  .youtube-settings input {
    width: 100%;
  }

  .youtube-error {
    margin-top: 7px;
    padding: 8px 10px;
    border-radius: 9px;
    border: 1px solid rgba(var(--fr-red-rgb), 0.22);
    background: rgba(var(--fr-red-rgb), 0.06);
    color: #ffd6dd;
    font-size: 8.5px;
  }

  .youtube-player {
    position: relative;
    width: 100%;
    height: min(430px, 55vh);
    margin-top: 9px;
    overflow: hidden;
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: #000;
    background-position: center;
    background-size: cover;
  }

  .youtube-player iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .youtube-now {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: 7px;
    padding: 9px 10px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03);
  }

  .youtube-now-label {
    color: #ff8a90;
    font-size: 7px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .youtube-now strong {
    color: rgba(250, 253, 255, 0.93);
    font-size: 11px;
    font-weight: 650;
  }

  .youtube-now small {
    color: var(--fr-dim);
    font-size: 8px;
  }

  .youtube-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    align-items: center;
    margin-top: 7px;
  }

  .youtube-device {
    max-width: 220px;
  }

  .youtube-cast {
    color: #ffd8da;
    border-color: rgba(255, 70, 85, 0.24);
    background: rgba(255, 70, 85, 0.08);
  }

  .youtube-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    margin-top: 9px;
    padding: 20px;
    border-radius: 16px;
    border: 1px dashed rgba(255, 255, 255, 0.12);
    color: var(--fr-dim);
    text-align: center;
  }

  .youtube-empty > span {
    color: #ff6b72;
  }

  .youtube-empty strong {
    color: rgba(249, 253, 255, 0.9);
    font-size: 10px;
  }

  .youtube-empty small {
    max-width: 360px;
    font-size: 8.5px;
    line-height: 1.4;
  }

  .youtube-results {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 7px;
  }

  .youtube-result {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    border-radius: 11px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.025);
    color: var(--fr-muted);
    cursor: pointer;
    text-align: left;
  }

  .youtube-result:hover {
    background: rgba(255, 255, 255, 0.07);
  }

  .youtube-result img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 7px;
    background: #111;
  }

  .youtube-result span,
  .youtube-playlist-main span {
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
  }

  .youtube-result strong,
  .youtube-playlist-main strong {
    overflow: hidden;
    color: rgba(249, 253, 255, 0.9);
    font-size: 8.5px;
    font-weight: 620;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .youtube-result small,
  .youtube-playlist-main small {
    overflow: hidden;
    color: var(--fr-dim);
    font-size: 7px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .youtube-playlist {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .youtube-playlist-item {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 4px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    background: rgba(255, 255, 255, 0.02);
  }

  .youtube-playlist-main {
    display: flex;
    align-items: center;
    gap: 7px;
    flex: 1;
    min-width: 0;
    padding: 2px;
    border: 0;
    background: transparent;
    color: var(--fr-muted);
    cursor: pointer;
    text-align: left;
  }

  .youtube-playlist-main img {
    width: 72px;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 6px;
    background: #111;
  }

  .doorbell-call {
    position: fixed;
    inset: 0;
    z-index: 2000;
    display: grid;
    place-items: center;
    padding: 20px;
    background: rgba(2, 8, 15, 0.72);
    backdrop-filter: blur(18px);
    animation: doorbellFade 220ms ease-out;
  }

  .doorbell-call-card {
    position: relative;
    width: min(470px, 92vw);
    max-height: calc(100dvh - 36px);
    overflow-y: auto;
    padding: 18px;
    border-radius: 28px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    background:
      radial-gradient(100% 100% at 50% 0%, rgba(186, 38, 47, 0.24), transparent 62%),
      linear-gradient(155deg, rgba(19, 37, 58, 0.98), rgba(5, 12, 21, 0.99));
    box-shadow:
      0 30px 80px rgba(0, 0, 0, 0.55),
      0 0 0 1px rgba(255, 255, 255, 0.03) inset;
    text-align: center;
  }

  .doorbell-call-rings {
    position: absolute;
    top: 62px;
    left: 50%;
    z-index: 0;
    width: 220px;
    height: 220px;
    transform: translateX(-50%);
    pointer-events: none;
  }

  .doorbell-call-rings span {
    position: absolute;
    inset: 0;
    border-radius: 99px;
    border: 1px solid rgba(255, 130, 150, 0.32);
    animation: doorbellRipple 2.4s ease-out infinite;
  }

  .doorbell-call-rings span:nth-child(2) {
    animation-delay: 0.8s;
  }

  .doorbell-call-rings span:nth-child(3) {
    animation-delay: 1.6s;
  }

  .doorbell-call-visual {
    position: relative;
    z-index: 1;
    display: grid;
    place-items: center;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 16 / 9;
    margin-bottom: 15px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background:
      radial-gradient(circle at 50% 50%, rgba(255, 130, 150, 0.16), transparent 55%),
      rgba(4, 12, 21, 0.72);
  }

  .doorbell-call-visual img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .doorbell-call-bell {
    display: grid;
    place-items: center;
    color: rgba(255, 175, 180, 0.72);
  }

  .doorbell-call-eyebrow {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: #ffb4b4;
    font-size: 8px;
    font-weight: 750;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .doorbell-call-title {
    position: relative;
    z-index: 1;
    margin-top: 5px;
    color: rgba(255, 252, 252, 0.97);
    font-size: 22px;
    font-weight: 650;
    letter-spacing: -0.02em;
  }

  .doorbell-call-sub {
    position: relative;
    z-index: 1;
    margin-top: 3px;
    color: var(--fr-muted);
    font-size: 9.5px;
  }

  .doorbell-call-options {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 12px;
    text-align: left;
  }

  .doorbell-call-actions {
    position: relative;
    z-index: 1;
    display: flex;
    gap: 7px;
    margin-top: 16px;
  }

  .doorbell-call-primary,
  .doorbell-call-stop {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    min-height: 38px;
    padding: 8px 12px;
    border-radius: 11px;
    font-size: 9.5px;
    font-weight: 650;
    cursor: pointer;
  }

  .doorbell-call-primary {
    flex: 1;
    border: 1px solid rgba(var(--fr-blue-rgb), 0.3);
    background: rgba(var(--fr-blue-rgb), 0.12);
    color: #d9edff;
  }

  .doorbell-call-primary:hover {
    background: rgba(var(--fr-blue-rgb), 0.2);
  }

  .doorbell-call-stop {
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.055);
    color: var(--fr-muted);
  }

  .doorbell-call-stop:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
  }

  @keyframes doorbellFade {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes doorbellRipple {
    0% { transform: scale(0.65); opacity: 0.8; }
    100% { transform: scale(1.25); opacity: 0; }
  }

  .dock {
    position: absolute;
    left: 50%;
    bottom: calc(18px + env(safe-area-inset-bottom, 0px));
    z-index: 60;
    display: flex;
    align-items: stretch;
    gap: 2px;
    padding: 7px;
    transform: translateX(-50%);
    border-radius: 23px;
    border: 1px solid rgba(255, 255, 255, 0.13);
    background: rgba(8, 16, 29, 0.7);
    box-shadow:
      0 24px 64px -18px rgba(0, 0, 0, 0.85),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(28px) saturate(150%);
    -webkit-backdrop-filter: blur(28px) saturate(150%);
  }

  .dock-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    min-width: 74px;
    height: 53px;
    padding: 0 8px;
    border: 0;
    border-radius: 17px;
    background: transparent;
    color: rgba(226, 238, 255, 0.54);
    cursor: pointer;
    transition:
      background-color 180ms ease,
      color 180ms ease,
      transform 180ms ease;
  }

  .dock-item:hover {
    color: rgba(248, 252, 255, 0.95);
    background: rgba(255, 255, 255, 0.055);
  }

  .dock-item.is-active {
    color: #fff;
    background: linear-gradient(180deg, rgba(103, 182, 255, 0.16), rgba(103, 182, 255, 0.04));
  }

  .dock-item:active {
    transform: scale(0.98);
  }

  .dock-icon {
    display: grid;
    place-items: center;
    height: 22px;
  }

  .dock-label {
    font-size: 8.5px;
    font-weight: 680;
    letter-spacing: 0.11em;
    line-height: 1;
    text-transform: uppercase;
  }

  .dock-line {
    position: absolute;
    bottom: 5px;
    left: 50%;
    width: 15px;
    height: 2px;
    border-radius: 99px;
    transform: translateX(-50%);
    background: transparent;
    transition:
      background-color 200ms ease,
      box-shadow 200ms ease;
  }

  .dock-item.is-active .dock-line {
    background: var(--fr-blue);
    box-shadow: 0 0 12px rgba(var(--fr-blue-rgb), 0.9);
  }

  .toast {
    position: absolute;
    left: 50%;
    bottom: calc(94px + env(safe-area-inset-bottom, 0px));
    z-index: 70;
    display: flex;
    align-items: center;
    gap: 8px;
    max-width: min(520px, calc(100vw - 28px));
    padding: 9px 13px;
    transform: translateX(-50%);
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(9, 19, 34, 0.94);
    box-shadow: 0 18px 50px -14px rgba(0, 0, 0, 0.9);
    color: rgba(246, 251, 255, 0.92);
    font-size: 10.5px;
    font-weight: 550;
    line-height: 1.3;
    backdrop-filter: blur(20px);
    animation: toastIn 240ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .toast.is-error {
    border-color: rgba(var(--fr-red-rgb), 0.35);
    color: #ffd6dd;
  }

  .toast .toast-icon {
    color: var(--fr-green);
    display: grid;
    place-items: center;
  }

  .toast.is-error .toast-icon {
    color: var(--fr-red);
  }

  .loader {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    background:
      radial-gradient(100% 80% at 60% 10%, #12233b, transparent 60%),
      #040911;
  }

  .loader-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    color: var(--fr-muted);
    font-size: 10px;
    font-weight: 650;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .spinner {
    width: 30px;
    height: 30px;
    border-radius: 99px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-top-color: rgba(103, 182, 255, 0.9);
    animation: spin 900ms linear infinite;
  }

  .empty-state-inline {
    padding: 18px;
    border-radius: 17px;
    border: 1px dashed rgba(255, 255, 255, 0.14);
    color: var(--fr-muted);
    font-size: 10.5px;
    line-height: 1.5;
    text-align: center;
  }

  .climate-target {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 2px 0;
  }

  .climate-value-wrap {
    display: grid;
    grid-template-columns: auto auto;
    align-items: baseline;
    justify-content: center;
    column-gap: 3px;
    text-align: center;
  }

  .climate-value {
    color: rgba(247, 251, 255, 0.97);
    font-size: 26px;
    font-weight: 570;
    letter-spacing: -0.055em;
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }

  .climate-unit {
    color: var(--fr-muted);
    font-size: 11px;
    font-weight: 600;
  }

  .climate-label {
    grid-column: 1 / -1;
    margin-top: 2px;
    color: var(--fr-dim);
    font-size: 7.5px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .climate-modes {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: auto;
  }

  .round-btn {
    width: 34px;
    height: 34px;
    flex: 0 0 34px;
    border-radius: 11px;
  }

  .sun-state-line {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 8px;
    padding: 0 4px;
    color: var(--fr-dim);
    font-size: 9px;
  }

  .network-note {
    color: var(--fr-dim);
    font-size: 8.5px;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 2px;
  }

  .todo-skeleton {
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding: 4px 0 2px;
  }

  .todo-skeleton span {
    display: block;
    width: 100%;
    height: 10px;
    border-radius: 99px;
    background: linear-gradient(
      110deg,
      rgba(255, 255, 255, 0.04) 8%,
      rgba(255, 255, 255, 0.08) 18%,
      rgba(255, 255, 255, 0.04) 33%
    );
    background-size: 220% 100%;
    animation: shimmer 2.2s linear infinite;
  }

  .todo-skeleton span:nth-child(2) {
    width: 82%;
  }

  .todo-skeleton span:nth-child(3) {
    width: 64%;
  }

  .spinner.small {
    width: 15px;
    height: 15px;
    border-width: 2px;
  }

  .assist-answer.is-error {
    border-color: rgba(var(--fr-red-rgb), 0.28);
    background: rgba(var(--fr-red-rgb), 0.07);
    color: #ffd6dd;
  }

  .empty-docs-hint {
    color: var(--fr-dim);
    font-size: 8.5px;
    line-height: 1.3;
  }

  .mini-btn:disabled,
  .send-btn:disabled {
    opacity: 0.5;
    cursor: wait;
  }

  @media (max-width: 1050px) {
    .stats-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .room-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .sun-timeline {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .skeleton-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .status-chip.chip-sun {
      display: none;
    }
  }

  @media (max-width: 820px) {
    .topbar {
      padding: 16px 18px;
      gap: 8px;
    }

    .brand-mark {
      width: 37px;
      height: 37px;
      flex-basis: 37px;
      border-radius: 12px;
    }

    .brand-title {
      font-size: 11px;
      letter-spacing: 0.15em;
    }

    .brand-sub {
      display: none;
    }

    .status-chip.chip-wan {
      display: none;
    }

    .clock-wrap {
      top: 88px;
      left: 20px;
      width: min(550px, 78vw);
    }

    .room-float {
      left: 16px;
      bottom: 104px;
      max-width: calc(100vw - 32px);
    }

    .sheet-wrap {
      bottom: calc(102px + env(safe-area-inset-bottom, 0px));
      padding: 0 10px;
    }

    .sheet {
      max-height: calc(100dvh - 142px);
      border-radius: 25px;
    }

    .sheet-head {
      padding: 20px 16px 13px;
      gap: 10px;
    }

    .sheet-icon {
      width: 42px;
      height: 42px;
      flex-basis: 42px;
      border-radius: 13px;
    }

    .sheet-title h1 {
      font-size: 18px;
    }

    .sheet-subtitle {
      font-size: 10px;
    }

    .sheet-body {
      padding: 15px 16px 22px;
    }

    .room-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .room-card {
      height: 124px;
    }

    .remote-grid {
      grid-template-columns: 1fr;
    }

    .remote-card {
      justify-self: stretch;
      max-width: none;
    }

    .network-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .dock {
      left: 10px;
      right: 10px;
      width: auto;
      transform: none;
      padding: 6px;
    }

    .dock-item {
      min-width: 0;
      flex: 1;
      height: 51px;
      padding: 0 3px;
    }

    .dock-label {
      font-size: 7.5px;
      letter-spacing: 0.08em;
    }

    .sun-timeline {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .skeleton-grid,
    .skeleton-grid.count-6 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 800px) {
    .dock {
      left: 10px;
      right: 10px;
      width: auto;
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 2px;
      padding: 6px;
      transform: none;
    }

    .dock-item {
      min-width: 0;
      height: 46px;
      padding: 0 2px;
    }

    .dock-label {
      font-size: 7px;
      letter-spacing: 0.07em;
    }

    .room-float {
      bottom: calc(134px + env(safe-area-inset-bottom, 0px));
    }

    .sheet-wrap {
      bottom: calc(148px + env(safe-area-inset-bottom, 0px));
    }

    .sheet {
      max-height: calc(100dvh - 188px);
    }

    .toast {
      bottom: calc(128px + env(safe-area-inset-bottom, 0px));
    }

    .weather-hero {
      padding: 15px;
    }

    .weather-art {
      width: 88px;
      height: 88px;
      flex-basis: 88px;
      border-radius: 23px;
    }

    .weather-temp {
      font-size: 52px;
    }

    .forecast-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .weather-detail-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .routine-grid {
      grid-template-columns: 1fr;
    }

    .energy-hero {
      grid-template-columns: 1fr;
    }

    .energy-side {
      align-items: flex-start;
      flex-direction: row;
      gap: 8px;
      padding: 10px 0 0;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      border-left: 0;
      text-align: left;
    }

    .energy-side-icon {
      width: 29px;
      height: 29px;
      flex: 0 0 29px;
    }

    .energy-side-label,
    .energy-side strong {
      margin-top: 0;
    }

    .doorbell-card {
      grid-template-columns: 1fr;
    }

    .doorbell-visual {
      min-height: 180px;
    }

    .family-map {
      height: 220px;
    }

    .family-list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .printer-hero {
      grid-template-columns: 1fr;
    }

    .printer-visual {
      min-height: 150px;
    }

    .printer-temp-grid,
    .printer-tuning {
      grid-template-columns: 1fr;
    }

    .camera-grid,
    .camera-grid.is-compact,
    .camera-grid.is-wall {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 1100px) {
    .status-chip.chip-sun {
      display: none;
    }
  }

  @media (max-width: 900px) {
    .status-chip.chip-wan {
      display: none;
    }
  }

  @media (max-width: 700px) {
    .status-chip.chip-weather {
      display: none;
    }

    .routine-quick {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 560px) {
    .top-actions {
      gap: 5px;
    }

    .status-chip.chip-person {
      padding: 6px 8px;
    }

    .status-chip.chip-person .chip-label {
      display: none;
    }

    .system-btn,
    .icon-btn {
      width: 37px;
      height: 37px;
      flex-basis: 37px;
      border-radius: 12px;
    }

    .brand-title {
      font-size: 10px;
      max-width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .clock-wrap {
      top: 78px;
      left: 16px;
      width: calc(100vw - 32px);
    }

    .stats-grid {
      gap: 7px;
    }

    .stat {
      padding: 10px;
    }

    .stat-icon {
      width: 30px;
      height: 30px;
      flex-basis: 30px;
    }

    .stat-value {
      font-size: 13px;
    }

    .sheet-title h1 {
      font-size: 16px;
    }

    .sheet-eyebrow {
      font-size: 7.5px;
    }

    .head-actions .ghost-btn span {
      display: none;
    }

    .entity-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .entity-card {
      min-height: 108px;
      padding: 11px;
    }

    .entity-name {
      font-size: 11px;
    }

    .entity-icon {
      width: 30px;
      height: 30px;
      flex-basis: 30px;
    }

    .media-grid {
      grid-template-columns: 1fr;
    }

    .sensor-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .network-grid {
      grid-template-columns: 1fr;
    }

    .empty-panel {
      padding: 14px;
    }

    .empty-icon {
      width: 38px;
      height: 38px;
      flex-basis: 38px;
    }

    .room-float {
      left: 12px;
      right: 12px;
      bottom: calc(134px + env(safe-area-inset-bottom, 0px));
      max-width: none;
      padding: 7px 10px 7px 7px;
    }

    .room-float-thumb {
      width: 37px;
      height: 37px;
      flex-basis: 37px;
    }

    .room-float-name {
      font-size: 11.5px;
    }

    .room-float-meta {
      font-size: 8.5px;
    }

    .dock-item {
      height: 48px;
      gap: 2px;
    }

    .dock-icon svg {
      width: 19px;
      height: 19px;
    }

    .dock-label {
      font-size: 7px;
    }

    .toast {
      bottom: calc(126px + env(safe-area-inset-bottom, 0px));
    }

    .sun-timeline {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .weather-hero {
      padding: 13px;
    }

    .weather-art {
      width: 72px;
      height: 72px;
      flex-basis: 72px;
      border-radius: 19px;
    }

    .weather-temp {
      font-size: 44px;
    }

    .weather-hero-foot {
      flex-wrap: wrap;
    }

    .forecast-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .weather-detail-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .weather-empty {
      align-items: flex-start;
      flex-direction: column;
      padding: 15px;
    }

    .weather-empty-art {
      width: 64px;
      height: 64px;
      flex-basis: 64px;
      border-radius: 18px;
    }

    .routine-quick-item {
      padding: 8px;
    }

    .family-map {
      height: 200px;
    }

    .family-marker-label {
      display: none;
    }

    .family-person {
      padding: 7px;
    }

    .camera-grid,
    .camera-grid.is-compact,
    .camera-grid.is-wall {
      grid-template-columns: 1fr;
    }

    .music-outputs {
      grid-template-columns: 1fr;
    }

    .music-source {
      flex-direction: column;
    }

    .youtube-toolbar {
      flex-wrap: wrap;
    }

    .youtube-search {
      width: 100%;
      flex-basis: 100%;
    }

    .youtube-results {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .youtube-player {
      height: 220px;
    }

    .youtube-actions {
      align-items: stretch;
    }

    .youtube-device {
      max-width: none;
      width: 100%;
    }

    .music-hero {
      align-items: flex-start;
    }

    .music-art {
      width: 48px;
      height: 48px;
      flex-basis: 48px;
    }

    .camera-detail-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-height: 620px) and (orientation: landscape) {
    .clock-wrap {
      top: 74px;
    }

    .room-float {
      bottom: 128px;
    }

    .sheet {
      max-height: calc(100dvh - 170px);
    }

    .sheet-head {
      padding-top: 18px;
      padding-bottom: 10px;
    }

    .sheet-icon {
      width: 40px;
      height: 40px;
      flex-basis: 40px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  @keyframes sheetIn {
    from {
      opacity: 0;
      transform: translateY(38px) scale(0.985);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes sheetOut {
    from {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateY(28px) scale(0.988);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes toastIn {
    from {
      opacity: 0;
      transform: translate(-50%, 8px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  @keyframes shimmer {
    from {
      background-position: 200% 0;
    }
    to {
      background-position: -20% 0;
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

// node_modules/@mdi/js/mdi.js
var mdiAccount = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z";
var mdiAccountGroupOutline = "M12,5A3.5,3.5 0 0,0 8.5,8.5A3.5,3.5 0 0,0 12,12A3.5,3.5 0 0,0 15.5,8.5A3.5,3.5 0 0,0 12,5M12,7A1.5,1.5 0 0,1 13.5,8.5A1.5,1.5 0 0,1 12,10A1.5,1.5 0 0,1 10.5,8.5A1.5,1.5 0 0,1 12,7M5.5,8A2.5,2.5 0 0,0 3,10.5C3,11.44 3.53,12.25 4.29,12.68C4.65,12.88 5.06,13 5.5,13C5.94,13 6.35,12.88 6.71,12.68C7.08,12.47 7.39,12.17 7.62,11.81C6.89,10.86 6.5,9.7 6.5,8.5C6.5,8.41 6.5,8.31 6.5,8.22C6.2,8.08 5.86,8 5.5,8M18.5,8C18.14,8 17.8,8.08 17.5,8.22C17.5,8.31 17.5,8.41 17.5,8.5C17.5,9.7 17.11,10.86 16.38,11.81C16.5,12 16.63,12.15 16.78,12.3C16.94,12.45 17.1,12.58 17.29,12.68C17.65,12.88 18.06,13 18.5,13C18.94,13 19.35,12.88 19.71,12.68C20.47,12.25 21,11.44 21,10.5A2.5,2.5 0 0,0 18.5,8M12,14C9.66,14 5,15.17 5,17.5V19H19V17.5C19,15.17 14.34,14 12,14M4.71,14.55C2.78,14.78 0,15.76 0,17.5V19H3V17.07C3,16.06 3.69,15.22 4.71,14.55M19.29,14.55C20.31,15.22 21,16.06 21,17.07V19H24V17.5C24,15.76 21.22,14.78 19.29,14.55M12,16C13.53,16 15.24,16.5 16.23,17H7.77C8.76,16.5 10.47,16 12,16Z";
var mdiAirConditioner = "M6.59,0.66C8.93,-1.15 11.47,1.06 12.04,4.5C12.47,4.5 12.89,4.62 13.27,4.84C13.79,4.24 14.25,3.42 14.07,2.5C13.65,0.35 16.06,-1.39 18.35,1.58C20.16,3.92 17.95,6.46 14.5,7.03C14.5,7.46 14.39,7.89 14.16,8.27C14.76,8.78 15.58,9.24 16.5,9.06C18.63,8.64 20.38,11.04 17.41,13.34C15.07,15.15 12.53,12.94 11.96,9.5C11.53,9.5 11.11,9.37 10.74,9.15C10.22,9.75 9.75,10.58 9.93,11.5C10.35,13.64 7.94,15.39 5.65,12.42C3.83,10.07 6.05,7.53 9.5,6.97C9.5,6.54 9.63,6.12 9.85,5.74C9.25,5.23 8.43,4.76 7.5,4.94C5.37,5.36 3.62,2.96 6.59,0.66M5,16H7A2,2 0 0,1 9,18V24H7V22H5V24H3V18A2,2 0 0,1 5,16M5,18V20H7V18H5M12.93,16H15L12.07,24H10L12.93,16M18,16H21V18H18V22H21V24H18A2,2 0 0,1 16,22V18A2,2 0 0,1 18,16Z";
var mdiAlertCircleOutline = "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z";
var mdiArrowDown = "M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z";
var mdiArrowLeft = "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z";
var mdiArrowRight = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z";
var mdiArrowTopRight = "M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z";
var mdiArrowUp = "M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z";
var mdiBattery = "M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67A1.33,1.33 0 0,0 18,20.67V5.33C18,4.6 17.4,4 16.67,4Z";
var mdiBedDoubleOutline = "M8 5C7.5 5 7 5.21 6.61 5.6S6 6.45 6 7V10C5.47 10 5 10.19 4.59 10.59S4 11.47 4 12V17H5.34L6 19H7L7.69 17H16.36L17 19H18L18.66 17H20V12C20 11.47 19.81 11 19.41 10.59S18.53 10 18 10V7C18 6.45 17.8 6 17.39 5.6S16.5 5 16 5M8 7H11V10H8M13 7H16V10H13M6 12H18V15H6Z";
var mdiBedKingOutline = "M20 10V7A2 2 0 0 0 18 5H6A2 2 0 0 0 4 7V10A2 2 0 0 0 2 12V17H3.33L4 19H5L5.67 17H18.33L19 19H20L20.67 17H22V12A2 2 0 0 0 20 10M13 7H18V10H13M6 7H11V10H6M20 15H4V12H20Z";
var mdiBedQueenOutline = "M19 10V7A2 2 0 0 0 17 5H7A2 2 0 0 0 5 7V10A2 2 0 0 0 3 12V17H4.33L5 19H6L6.67 17H17.33L18 19H19L19.67 17H21V12A2 2 0 0 0 19 10M7 7H17V10H7M19 15H5V12H19Z";
var mdiBellRingOutline = "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61C20.04,6.3 21,8.6 21,11H23C23,8.07 21.84,5.25 19.75,3.19M1,11H3C3,8.6 3.96,6.3 5.67,4.61L4.25,3.19C2.16,5.25 1,8.07 1,11Z";
var mdiBlindsHorizontal = "M20 19V3H4V19H2V21H22V19H20M16 9H18V11H16V9M14 11H6V9H14V11M18 7H16V5H18V7M14 5V7H6V5H14M6 19V13H14V14.82C13.55 15.14 13.25 15.66 13.25 16.25C13.25 17.22 14.03 18 15 18S16.75 17.22 16.75 16.25C16.75 15.66 16.45 15.13 16 14.82V13H18V19H6Z";
var mdiCalendarClock = "M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z";
var mdiCalendarToday = "M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z";
var mdiCartOutline = "M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z";
var mdiCellphone = "M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z";
var mdiCheck = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";
var mdiCheckCircleOutline = "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z";
var mdiChefHat = "M12.5,1.5C10.73,1.5 9.17,2.67 8.67,4.37C8.14,4.13 7.58,4 7,4A4,4 0 0,0 3,8C3,9.82 4.24,11.41 6,11.87V19H19V11.87C20.76,11.41 22,9.82 22,8A4,4 0 0,0 18,4C17.42,4 16.86,4.13 16.33,4.37C15.83,2.67 14.27,1.5 12.5,1.5M12,10.5H13V17.5H12V10.5M9,12.5H10V17.5H9V12.5M15,12.5H16V17.5H15V12.5M6,20V21A1,1 0 0,0 7,22H18A1,1 0 0,0 19,21V20H6Z";
var mdiChevronDown = "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z";
var mdiChevronLeft = "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";
var mdiChevronRight = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";
var mdiClockOutline = "M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z";
var mdiClose = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
var mdiCogOutline = "M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z";
var mdiContentCopy = "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z";
var mdiDoor = "M8,3C6.89,3 6,3.89 6,5V21H18V5C18,3.89 17.11,3 16,3H8M8,5H16V19H8V5M13,11V13H15V11H13Z";
var mdiDoorOpen = "M12,3C10.89,3 10,3.89 10,5H3V19H2V21H22V19H21V5C21,3.89 20.11,3 19,3H12M12,5H19V19H12V5M5,11H7V13H5V11Z";
var mdiDotsHorizontal = "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z";
var mdiEvStation = "M19.77,7.23L19.78,7.22L16.06,3.5L15,4.56L17.11,6.67C16.17,7.03 15.5,7.93 15.5,9A2.5,2.5 0 0,0 18,11.5C18.36,11.5 18.69,11.42 19,11.29V18.5A1,1 0 0,1 18,19.5A1,1 0 0,1 17,18.5V14A2,2 0 0,0 15,12H14V5A2,2 0 0,0 12,3H6A2,2 0 0,0 4,5V21H14V13.5H15.5V18.5A2.5,2.5 0 0,0 18,21A2.5,2.5 0 0,0 20.5,18.5V9C20.5,8.31 20.22,7.68 19.77,7.23M18,10A1,1 0 0,1 17,9A1,1 0 0,1 18,8A1,1 0 0,1 19,9A1,1 0 0,1 18,10M8,18V13.5H6L10,6V11H12L8,18Z";
var mdiEyeOutline = "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z";
var mdiFan = "M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z";
var mdiFlash = "M7,2V13H10V22L17,10H13L17,2H7Z";
var mdiFlashOutline = "M7,2H17L13.5,9H17L10,22V14H7V2M9,4V12H12V14.66L14,11H10.24L13.76,4H9Z";
var mdiFridgeOutline = "M9,21V22H7V21A2,2 0 0,1 5,19V4A2,2 0 0,1 7,2H17A2,2 0 0,1 19,4V19A2,2 0 0,1 17,21V22H15V21H9M7,4V9H17V4H7M7,19H17V11H7V19M8,12H10V15H8V12M8,6H10V8H8V6Z";
var mdiGamepadVariantOutline = "M6,9H8V11H10V13H8V15H6V13H4V11H6V9M18.5,9A1.5,1.5 0 0,1 20,10.5A1.5,1.5 0 0,1 18.5,12A1.5,1.5 0 0,1 17,10.5A1.5,1.5 0 0,1 18.5,9M15.5,12A1.5,1.5 0 0,1 17,13.5A1.5,1.5 0 0,1 15.5,15A1.5,1.5 0 0,1 14,13.5A1.5,1.5 0 0,1 15.5,12M17,5A7,7 0 0,1 24,12A7,7 0 0,1 17,19C15.04,19 13.27,18.2 12,16.9C10.73,18.2 8.96,19 7,19A7,7 0 0,1 0,12A7,7 0 0,1 7,5H17M7,7A5,5 0 0,0 2,12A5,5 0 0,0 7,17C8.64,17 10.09,16.21 11,15H13C13.91,16.21 15.36,17 17,17A5,5 0 0,0 22,12A5,5 0 0,0 17,7H7Z";
var mdiGarage = "M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12M8,15H16V17H8V15M16,18V20H8V18H16Z";
var mdiGauge = "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12C20,14.4 19,16.5 17.3,18C15.9,16.7 14,16 12,16C10,16 8.2,16.7 6.7,18C5,16.5 4,14.4 4,12A8,8 0 0,1 12,4M14,5.89C13.62,5.9 13.26,6.15 13.1,6.54L11.81,9.77L11.71,10C11,10.13 10.41,10.6 10.14,11.26C9.73,12.29 10.23,13.45 11.26,13.86C12.29,14.27 13.45,13.77 13.86,12.74C14.12,12.08 14,11.32 13.57,10.76L13.67,10.5L14.96,7.29L14.97,7.26C15.17,6.75 14.92,6.17 14.41,5.96C14.28,5.91 14.15,5.89 14,5.89M10,6A1,1 0 0,0 9,7A1,1 0 0,0 10,8A1,1 0 0,0 11,7A1,1 0 0,0 10,6M7,9A1,1 0 0,0 6,10A1,1 0 0,0 7,11A1,1 0 0,0 8,10A1,1 0 0,0 7,9M17,9A1,1 0 0,0 16,10A1,1 0 0,0 17,11A1,1 0 0,0 18,10A1,1 0 0,0 17,9Z";
var mdiGrass = "M12 20H2V18H7.75C7 15.19 4.81 13 2 12.26C2.64 12.1 3.31 12 4 12C8.42 12 12 15.58 12 20M22 12.26C21.36 12.1 20.69 12 20 12C17.07 12 14.5 13.58 13.12 15.93C13.41 16.59 13.65 17.28 13.79 18C13.92 18.65 14 19.32 14 20H22V18H16.24C17 15.19 19.19 13 22 12.26M15.64 11C16.42 8.93 17.87 7.18 19.73 6C15.44 6.16 12 9.67 12 14V14C12.95 12.75 14.2 11.72 15.64 11M11.42 8.85C10.58 6.66 8.88 4.89 6.7 4C8.14 5.86 9 8.18 9 10.71C9 10.92 8.97 11.12 8.96 11.32C9.39 11.56 9.79 11.84 10.18 12.14C10.39 10.96 10.83 9.85 11.42 8.85Z";
var mdiHomeAnalytics = "M12,3L2,12H5V20H19V12H22M9,18H7V12H9M13,18H11V10H13M17,18H15V14H17";
var mdiHomeCity = "M0,21V10L7.5,5L15,10V21H10V14H5V21H0M24,2V21H17V8.93L16,8.27V6H14V6.93L10,4.27V2H24M21,14H19V16H21V14M21,10H19V12H21V10M21,6H19V8H21V6Z";
var mdiHomeLightningBoltOutline = "M5 20V12H2L12 3L22 12H19V20H5M12 5.69L7 10.19V18H17V10.19L12 5.69M11.5 18V14H9L12.5 7V11H15L11.5 18Z";
var mdiHomeOutline = "M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22";
var mdiHomeVariantOutline = "M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z";
var mdiImageOutline = "M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z";
var mdiInformationOutline = "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z";
var mdiIpNetworkOutline = "M15,20A1,1 0 0,0 14,19H13V17H17A2,2 0 0,0 19,15V5A2,2 0 0,0 17,3H7A2,2 0 0,0 5,5V15A2,2 0 0,0 7,17H11V19H10A1,1 0 0,0 9,20H2V22H9A1,1 0 0,0 10,23H14A1,1 0 0,0 15,22H22V20H15M7,15V5H17V15H7M10,6H8V14H10V6M14,6H11V14H13V12H14A2,2 0 0,0 16,10V8A2,2 0 0,0 14,6M14,10H13V8H14V10Z";
var mdiLan = "M10,2C8.89,2 8,2.89 8,4V7C8,8.11 8.89,9 10,9H11V11H2V13H6V15H5C3.89,15 3,15.89 3,17V20C3,21.11 3.89,22 5,22H9C10.11,22 11,21.11 11,20V17C11,15.89 10.11,15 9,15H8V13H16V15H15C13.89,15 13,15.89 13,17V20C13,21.11 13.89,22 15,22H19C20.11,22 21,21.11 21,20V17C21,15.89 20.11,15 19,15H18V13H22V11H13V9H14C15.11,9 16,8.11 16,7V4C16,2.89 15.11,2 14,2H10M10,4H14V7H10V4M5,17H9V20H5V17M15,17H19V20H15V17Z";
var mdiLayers = "M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z";
var mdiLightbulbGroupOutline = "M7 19A2.93 2.93 0 0 0 7.17 20H6A1 1 0 0 1 5 19V18H7M10 19A1 1 0 0 0 11 20H13A1 1 0 0 0 14 19V18H10M4 16A1 1 0 0 0 5 17H7V14.88A6.92 6.92 0 0 1 5 10A6.79 6.79 0 0 1 5.68 7A4 4 0 0 0 4 14.45M17 19A2.93 2.93 0 0 1 16.83 20H18A1 1 0 0 0 19 19V18H17M17 10A5 5 0 0 1 15 14V16A1 1 0 0 1 14 17H10A1 1 0 0 1 9 16V14A5 5 0 1 1 17 10M15 10A3 3 0 1 0 11 12.82V15H13V12.82A3 3 0 0 0 15 10M18.32 7A6.79 6.79 0 0 1 19 10A6.92 6.92 0 0 1 17 14.88V17H19A1 1 0 0 0 20 16V14.45A4 4 0 0 0 18.32 7Z";
var mdiLightbulbOnOutline = "M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M11,18H13V15.87C14.73,15.43 16,13.86 16,12A4,4 0 0,0 12,8A4,4 0 0,0 8,12C8,13.86 9.27,15.43 11,15.87V18Z";
var mdiLightbulbOutline = "M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z";
var mdiLock = "M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z";
var mdiLockOpenVariantOutline = "M10 13C11.1 13 12 13.89 12 15C12 16.11 11.11 17 10 17S8 16.11 8 15 8.9 13 10 13M18 1C15.24 1 13 3.24 13 6V8H4C2.9 8 2 8.9 2 10V20C2 21.1 2.9 22 4 22H16C17.1 22 18 21.1 18 20V10C18 8.9 17.1 8 16 8H15V6C15 4.34 16.34 3 18 3S21 4.34 21 6V8H23V6C23 3.24 20.76 1 18 1M16 10V20H4V10H16Z";
var mdiMagnify = "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z";
var mdiMapMarkerRadiusOutline = "M12 4C14.2 4 16 5.8 16 8C16 10.1 13.9 13.5 12 15.9C10.1 13.4 8 10.1 8 8C8 5.8 9.8 4 12 4M12 2C8.7 2 6 4.7 6 8C6 12.5 12 19 12 19S18 12.4 18 8C18 4.7 15.3 2 12 2M12 6C10.9 6 10 6.9 10 8S10.9 10 12 10 14 9.1 14 8 13.1 6 12 6M20 19C20 21.2 16.4 23 12 23S4 21.2 4 19C4 17.7 5.2 16.6 7.1 15.8L7.7 16.7C6.7 17.2 6 17.8 6 18.5C6 19.9 8.7 21 12 21S18 19.9 18 18.5C18 17.8 17.3 17.2 16.2 16.7L16.8 15.8C18.8 16.6 20 17.7 20 19Z";
var mdiMenuDown = "M7,10L12,15L17,10H7Z";
var mdiMessageProcessingOutline = "M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M20 16H5.2L4 17.2V4H20V16M17 11H15V9H17M13 11H11V9H13M9 11H7V9H9";
var mdiMicrophone = "M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z";
var mdiMicrowave = "M4,5A2,2 0 0,0 2,7V17A2,2 0 0,0 4,19H20A2,2 0 0,0 22,17V7A2,2 0 0,0 20,5H4M4,7H16V17H4V7M19,7A1,1 0 0,1 20,8A1,1 0 0,1 19,9A1,1 0 0,1 18,8A1,1 0 0,1 19,7M13,9V15H15V9H13M19,11A1,1 0 0,1 20,12A1,1 0 0,1 19,13A1,1 0 0,1 18,12A1,1 0 0,1 19,11Z";
var mdiMinus = "M19,13H5V11H19V13Z";
var mdiMusic = "M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z";
var mdiPause = "M14,19H18V5H14M6,19H10V5H6V19Z";
var mdiPlay = "M8,5.14V19.14L19,12.14L8,5.14Z";
var mdiPlus = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
var mdiPower = "M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13";
var mdiPowerPlug = "M16,7V3H14V7H10V3H8V7H8C7,7 6,8 6,9V14.5L9.5,18V21H14.5V18L18,14.5V9C18,8 17,7 16,7Z";
var mdiPrinter3d = "M19,6A1,1 0 0,0 20,5A1,1 0 0,0 19,4A1,1 0 0,0 18,5A1,1 0 0,0 19,6M19,2A3,3 0 0,1 22,5V11H18V7H6V11H2V5A3,3 0 0,1 5,2H19M18,18.25C18,18.63 17.79,18.96 17.47,19.13L12.57,21.82C12.4,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L6.53,19.13C6.21,18.96 6,18.63 6,18.25V13C6,12.62 6.21,12.29 6.53,12.12L11.43,9.68C11.59,9.56 11.79,9.5 12,9.5C12.21,9.5 12.4,9.56 12.57,9.68L17.47,12.12C17.79,12.29 18,12.62 18,13V18.25M12,11.65L9.04,13L12,14.6L14.96,13L12,11.65M8,17.66L11,19.29V16.33L8,14.71V17.66M16,17.66V14.71L13,16.33V19.29L16,17.66Z";
var mdiRadiator = "M7.95,3L6.53,5.19L7.95,7.4H7.94L5.95,10.5L4.22,9.6L5.64,7.39L4.22,5.19L6.22,2.09L7.95,3M13.95,2.89L12.53,5.1L13.95,7.3L13.94,7.31L11.95,10.4L10.22,9.5L11.64,7.3L10.22,5.1L12.22,2L13.95,2.89M20,2.89L18.56,5.1L20,7.3V7.31L18,10.4L16.25,9.5L17.67,7.3L16.25,5.1L18.25,2L20,2.89M2,22V14A2,2 0 0,1 4,12H20A2,2 0 0,1 22,14V22H20V20H4V22H2M6,14A1,1 0 0,0 5,15V17A1,1 0 0,0 6,18A1,1 0 0,0 7,17V15A1,1 0 0,0 6,14M10,14A1,1 0 0,0 9,15V17A1,1 0 0,0 10,18A1,1 0 0,0 11,17V15A1,1 0 0,0 10,14M14,14A1,1 0 0,0 13,15V17A1,1 0 0,0 14,18A1,1 0 0,0 15,17V15A1,1 0 0,0 14,14M18,14A1,1 0 0,0 17,15V17A1,1 0 0,0 18,18A1,1 0 0,0 19,17V15A1,1 0 0,0 18,14Z";
var mdiRecordCircle = "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z";
var mdiRefresh = "M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z";
var mdiRemoteTv = "M9,2C7.89,2 7,2.89 7,4V20C7,21.11 7.89,22 9,22H15C16.11,22 17,21.11 17,20V4C17,2.89 16.11,2 15,2H13V4H11V2H9M11,6H13V8H15V10H13V12H11V10H9V8H11V6M9,14H11V16H9V14M13,14H15V16H13V14M9,18H11V20H9V18M13,18H15V20H13V18Z";
var mdiRobotVacuum = "M12,2C14.65,2 17.19,3.06 19.07,4.93L17.65,6.35C16.15,4.85 14.12,4 12,4C9.88,4 7.84,4.84 6.35,6.35L4.93,4.93C6.81,3.06 9.35,2 12,2M3.66,6.5L5.11,7.94C4.39,9.17 4,10.57 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,10.57 19.61,9.17 18.88,7.94L20.34,6.5C21.42,8.12 22,10.04 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12C2,10.04 2.58,8.12 3.66,6.5M12,6A6,6 0 0,1 18,12C18,13.59 17.37,15.12 16.24,16.24L14.83,14.83C14.08,15.58 13.06,16 12,16C10.94,16 9.92,15.58 9.17,14.83L7.76,16.24C6.63,15.12 6,13.59 6,12A6,6 0 0,1 12,6M12,8A1,1 0 0,0 11,9A1,1 0 0,0 12,10A1,1 0 0,0 13,9A1,1 0 0,0 12,8Z";
var mdiShieldCheckOutline = "M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9";
var mdiSilverwareForkKnife = "M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z";
var mdiSofaOutline = "M21 9V7C21 5.35 19.65 4 18 4H14C13.23 4 12.53 4.3 12 4.78C11.47 4.3 10.77 4 10 4H6C4.35 4 3 5.35 3 7V9C1.35 9 0 10.35 0 12V17C0 18.65 1.35 20 3 20V22H5V20H19V22H21V20C22.65 20 24 18.65 24 17V12C24 10.35 22.65 9 21 9M14 6H18C18.55 6 19 6.45 19 7V9.78C18.39 10.33 18 11.12 18 12V14H13V7C13 6.45 13.45 6 14 6M5 7C5 6.45 5.45 6 6 6H10C10.55 6 11 6.45 11 7V14H6V12C6 11.12 5.61 10.33 5 9.78V7M22 17C22 17.55 21.55 18 21 18H3C2.45 18 2 17.55 2 17V12C2 11.45 2.45 11 3 11S4 11.45 4 12V16H20V12C20 11.45 20.45 11 21 11S22 11.45 22 12V17Z";
var mdiSolarPower = "M11.45,2V5.55L15,3.77L11.45,2M10.45,8L8,10.46L11.75,11.71L10.45,8M2,11.45L3.77,15L5.55,11.45H2M10,2H2V10C2.57,10.17 3.17,10.25 3.77,10.25C7.35,10.26 10.26,7.35 10.27,3.75C10.26,3.16 10.17,2.57 10,2M17,22V16H14L19,7V13H22L17,22Z";
var mdiSpeaker = "M12,12A3,3 0 0,0 9,15A3,3 0 0,0 12,18A3,3 0 0,0 15,15A3,3 0 0,0 12,12M12,20A5,5 0 0,1 7,15A5,5 0 0,1 12,10A5,5 0 0,1 17,15A5,5 0 0,1 12,20M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8C10.89,8 10,7.1 10,6C10,4.89 10.89,4 12,4M17,2H7C5.89,2 5,2.89 5,4V20A2,2 0 0,0 7,22H17A2,2 0 0,0 19,20V4C19,2.89 18.1,2 17,2Z";
var mdiSpeedometer = "M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 13.17,16 12,16M12,3C13.81,3 15.5,3.5 16.97,4.32L14.87,5.53C14,5.19 13,5 12,5A8,8 0 0,0 4,13C4,15.21 4.89,17.21 6.34,18.65H6.35C6.74,19.04 6.74,19.67 6.35,20.06C5.96,20.45 5.32,20.45 4.93,20.07V20.07C3.12,18.26 2,15.76 2,13A10,10 0 0,1 12,3M22,13C22,15.76 20.88,18.26 19.07,20.07V20.07C18.68,20.45 18.05,20.45 17.66,20.06C17.27,19.67 17.27,19.04 17.66,18.65V18.65C19.11,17.2 20,15.21 20,13C20,12 19.81,11 19.46,10.1L20.67,8C21.5,9.5 22,11.18 22,13Z";
var mdiStop = "M18,18H6V6H18V18Z";
var mdiTablet = "M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4Z";
var mdiTelevision = "M21,17H3V5H21M21,3H3A2,2 0 0,0 1,5V17A2,2 0 0,0 3,19H8V21H16V19H21A2,2 0 0,0 23,17V5A2,2 0 0,0 21,3Z";
var mdiThermometer = "M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z";
var mdiThermostat = "M16.95,16.95L14.83,14.83C15.55,14.1 16,13.1 16,12C16,11.26 15.79,10.57 15.43,10L17.6,7.81C18.5,9 19,10.43 19,12C19,13.93 18.22,15.68 16.95,16.95M12,5C13.57,5 15,5.5 16.19,6.4L14,8.56C13.43,8.21 12.74,8 12,8A4,4 0 0,0 8,12C8,13.1 8.45,14.1 9.17,14.83L7.05,16.95C5.78,15.68 5,13.93 5,12A7,7 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z";
var mdiTimerOutline = "M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z";
var mdiTuneVariant = "M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z";
var mdiUpdate = "M21,10.12H14.22L16.96,7.3C14.23,4.6 9.81,4.5 7.08,7.2C4.35,9.91 4.35,14.28 7.08,17C9.81,19.7 14.23,19.7 16.96,17C18.32,15.65 19,14.08 19,12.1H21C21,14.08 20.12,16.65 18.36,18.39C14.85,21.87 9.15,21.87 5.64,18.39C2.14,14.92 2.11,9.28 5.62,5.81C9.13,2.34 14.76,2.34 18.27,5.81L21,3V10.12M12.5,8V12.25L16,14.33L15.28,15.54L11,13V8H12.5Z";
var mdiVideo = "M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z";
var mdiViewGrid = "M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3";
var mdiVolumeHigh = "M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z";
var mdiVolumeMedium = "M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z";
var mdiVolumeMute = "M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z";
var mdiWashingMachine = "M14.83,11.17C16.39,12.73 16.39,15.27 14.83,16.83C13.27,18.39 10.73,18.39 9.17,16.83L14.83,11.17M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M7,4A1,1 0 0,0 6,5A1,1 0 0,0 7,6A1,1 0 0,0 8,5A1,1 0 0,0 7,4M10,4A1,1 0 0,0 9,5A1,1 0 0,0 10,6A1,1 0 0,0 11,5A1,1 0 0,0 10,4M12,8A6,6 0 0,0 6,14A6,6 0 0,0 12,20A6,6 0 0,0 18,14A6,6 0 0,0 12,8Z";
var mdiWaterPercent = "M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z";
var mdiWeatherCloudy = "M6,19A5,5 0 0,1 1,14A5,5 0 0,1 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11A4,4 0 0,1 23,15A4,4 0 0,1 19,19H6M19,13H17V12A5,5 0 0,0 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11A3,3 0 0,0 3,14A3,3 0 0,0 6,17H19A2,2 0 0,0 21,15A2,2 0 0,0 19,13Z";
var mdiWeatherFog = "M3,15H13A1,1 0 0,1 14,16A1,1 0 0,1 13,17H3A1,1 0 0,1 2,16A1,1 0 0,1 3,15M16,15H21A1,1 0 0,1 22,16A1,1 0 0,1 21,17H16A1,1 0 0,1 15,16A1,1 0 0,1 16,15M1,12A5,5 0 0,1 6,7C7,4.65 9.3,3 12,3C15.43,3 18.24,5.66 18.5,9.03L19,9C21.19,9 22.97,10.76 23,13H21A2,2 0 0,0 19,11H17V10A5,5 0 0,0 12,5C9.5,5 7.45,6.82 7.06,9.19C6.73,9.07 6.37,9 6,9A3,3 0 0,0 3,12C3,12.35 3.06,12.69 3.17,13H1.1L1,12M3,19H5A1,1 0 0,1 6,20A1,1 0 0,1 5,21H3A1,1 0 0,1 2,20A1,1 0 0,1 3,19M8,19H21A1,1 0 0,1 22,20A1,1 0 0,1 21,21H8A1,1 0 0,1 7,20A1,1 0 0,1 8,19Z";
var mdiWeatherHail = "M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M10,18A2,2 0 0,1 12,20A2,2 0 0,1 10,22A2,2 0 0,1 8,20A2,2 0 0,1 10,18M14.5,16A1.5,1.5 0 0,1 16,17.5A1.5,1.5 0 0,1 14.5,19A1.5,1.5 0 0,1 13,17.5A1.5,1.5 0 0,1 14.5,16M10.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,15A1.5,1.5 0 0,1 9,13.5A1.5,1.5 0 0,1 10.5,12Z";
var mdiWeatherLightning = "M6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14H7A1,1 0 0,1 8,15A1,1 0 0,1 7,16H6M12,11H15L13,15H15L11.25,22L12,17H9.5L12,11Z";
var mdiWeatherNight = "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z";
var mdiWeatherPartlyCloudy = "M12.74,5.47C15.1,6.5 16.35,9.03 15.92,11.46C17.19,12.56 18,14.19 18,16V16.17C18.31,16.06 18.65,16 19,16A3,3 0 0,1 22,19A3,3 0 0,1 19,22H6A4,4 0 0,1 2,18A4,4 0 0,1 6,14H6.27C5,12.45 4.6,10.24 5.5,8.26C6.72,5.5 9.97,4.24 12.74,5.47M11.93,7.3C10.16,6.5 8.09,7.31 7.31,9.07C6.85,10.09 6.93,11.22 7.41,12.13C8.5,10.83 10.16,10 12,10C12.7,10 13.38,10.12 14,10.34C13.94,9.06 13.18,7.86 11.93,7.3M13.55,3.64C13,3.4 12.45,3.23 11.88,3.12L14.37,1.82L15.27,4.71C14.76,4.29 14.19,3.93 13.55,3.64M6.09,4.44C5.6,4.79 5.17,5.19 4.8,5.63L4.91,2.82L7.87,3.5C7.25,3.71 6.65,4.03 6.09,4.44M18,9.71C17.91,9.12 17.78,8.55 17.59,8L19.97,9.5L17.92,11.73C18.03,11.08 18.05,10.4 18,9.71M3.04,11.3C3.11,11.9 3.24,12.47 3.43,13L1.06,11.5L3.1,9.28C3,9.93 2.97,10.61 3.04,11.3M19,18H16V16A4,4 0 0,0 12,12A4,4 0 0,0 8,16H6A2,2 0 0,0 4,18A2,2 0 0,0 6,20H19A1,1 0 0,0 20,19A1,1 0 0,0 19,18Z";
var mdiWeatherPouring = "M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z";
var mdiWeatherRainy = "M6,14.03A1,1 0 0,1 7,15.03C7,15.58 6.55,16.03 6,16.03C3.24,16.03 1,13.79 1,11.03C1,8.27 3.24,6.03 6,6.03C7,3.68 9.3,2.03 12,2.03C15.43,2.03 18.24,4.69 18.5,8.06L19,8.03A4,4 0 0,1 23,12.03C23,14.23 21.21,16.03 19,16.03H18C17.45,16.03 17,15.58 17,15.03C17,14.47 17.45,14.03 18,14.03H19A2,2 0 0,0 21,12.03A2,2 0 0,0 19,10.03H17V9.03C17,6.27 14.76,4.03 12,4.03C9.5,4.03 7.45,5.84 7.06,8.21C6.73,8.09 6.37,8.03 6,8.03A3,3 0 0,0 3,11.03A3,3 0 0,0 6,14.03M12,14.15C12.18,14.39 12.37,14.66 12.56,14.94C13,15.56 14,17.03 14,18C14,19.11 13.1,20 12,20A2,2 0 0,1 10,18C10,17.03 11,15.56 11.44,14.94C11.63,14.66 11.82,14.4 12,14.15M12,11.03L11.5,11.59C11.5,11.59 10.65,12.55 9.79,13.81C8.93,15.06 8,16.56 8,18A4,4 0 0,0 12,22A4,4 0 0,0 16,18C16,16.56 15.07,15.06 14.21,13.81C13.35,12.55 12.5,11.59 12.5,11.59";
var mdiWeatherSnowy = "M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M7.88,18.07L10.07,17.5L8.46,15.88C8.07,15.5 8.07,14.86 8.46,14.46C8.85,14.07 9.5,14.07 9.88,14.46L11.5,16.07L12.07,13.88C12.21,13.34 12.76,13.03 13.29,13.17C13.83,13.31 14.14,13.86 14,14.4L13.41,16.59L15.6,16C16.14,15.86 16.69,16.17 16.83,16.71C16.97,17.24 16.66,17.79 16.12,17.93L13.93,18.5L15.54,20.12C15.93,20.5 15.93,21.15 15.54,21.54C15.15,21.93 14.5,21.93 14.12,21.54L12.5,19.93L11.93,22.12C11.79,22.66 11.24,22.97 10.71,22.83C10.17,22.69 9.86,22.14 10,21.6L10.59,19.41L8.4,20C7.86,20.14 7.31,19.83 7.17,19.29C7.03,18.76 7.34,18.21 7.88,18.07Z";
var mdiWeatherSunny = "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z";
var mdiWeatherSunset = "M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M5,16H19A1,1 0 0,1 20,17A1,1 0 0,1 19,18H5A1,1 0 0,1 4,17A1,1 0 0,1 5,16M17,20A1,1 0 0,1 18,21A1,1 0 0,1 17,22H7A1,1 0 0,1 6,21A1,1 0 0,1 7,20H17M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7Z";
var mdiWeatherSunsetUp = "M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,16.3L15.82,19.41C16.21,19.8 16.21,20.43 15.82,20.82C15.43,21.21 14.8,21.21 14.41,20.82L12,18.41L9.59,20.82C9.2,21.21 8.57,21.21 8.18,20.82C7.79,20.43 7.79,19.8 8.18,19.41L11.29,16.3C11.5,16.1 11.74,16 12,16C12.26,16 12.5,16.1 12.71,16.3Z";
var mdiWeatherWindy = "M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z";
var mdiWifi = "M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z";
var mdiWindowShutter = "M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9M8 12H16V14H8V12M8 15H16V17H8V15M8 18H16V20H8V18Z";
var mdiYoutube = "M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z";

// src/icons.js
var ICONS = {
  home: mdiHomeVariantOutline,
  "home-outline": mdiHomeOutline,
  "home-analytics": mdiHomeAnalytics,
  "home-lightning": mdiHomeLightningBoltOutline,
  "home-city": mdiHomeCity,
  lights: mdiLightbulbGroupOutline,
  light: mdiLightbulbOutline,
  "light-on": mdiLightbulbOnOutline,
  covers: mdiBlindsHorizontal,
  cover: mdiWindowShutter,
  climate: mdiThermostat,
  rooms: mdiViewGrid,
  system: mdiCogOutline,
  close: mdiClose,
  chevronDown: mdiChevronDown,
  chevronRight: mdiChevronRight,
  chevronLeft: mdiChevronLeft,
  power: mdiPower,
  play: mdiPlay,
  pause: mdiPause,
  stop: mdiStop,
  volume: mdiVolumeHigh,
  "volume-medium": mdiVolumeMedium,
  "volume-mute": mdiVolumeMute,
  up: mdiArrowUp,
  down: mdiArrowDown,
  left: mdiArrowLeft,
  right: mdiArrowRight,
  check: mdiCheck,
  "check-circle": mdiCheckCircleOutline,
  arrowTopRight: mdiArrowTopRight,
  alert: mdiAlertCircleOutline,
  info: mdiInformationOutline,
  dots: mdiDotsHorizontal,
  plus: mdiPlus,
  minus: mdiMinus,
  refresh: mdiRefresh,
  menuDown: mdiMenuDown,
  eye: mdiEyeOutline,
  image: mdiImageOutline,
  gamepad: mdiGamepadVariantOutline,
  tv: mdiTelevision,
  remote: mdiRemoteTv,
  speaker: mdiSpeaker,
  energy: mdiFlash,
  flash: mdiFlash,
  music: mdiMusic,
  youtube: mdiYoutube,
  mic: mdiMicrophone,
  tune: mdiTuneVariant,
  sliders: mdiTuneVariant,
  plug: mdiPowerPlug,
  printer: mdiPrinter3d,
  layers: mdiLayers,
  speedometer: mdiSpeedometer,
  radiator: mdiRadiator,
  "energy-outline": mdiFlashOutline,
  timer: mdiTimerOutline,
  gauge: mdiGauge,
  thermometer: mdiThermometer,
  lightning: mdiWeatherLightning,
  copy: mdiContentCopy,
  solar: mdiSolarPower,
  "ev-charge": mdiEvStation,
  appliance: mdiWashingMachine,
  fridge: mdiFridgeOutline,
  microwave: mdiMicrowave,
  kitchen: mdiSilverwareForkKnife,
  chef: mdiChefHat,
  vacuum: mdiRobotVacuum,
  fan: mdiFan,
  heater: mdiThermometer,
  aircon: mdiAirConditioner,
  grass: mdiGrass,
  garage: mdiGarage,
  "door-open": mdiDoorOpen,
  door: mdiDoor,
  sofa: mdiSofaOutline,
  "bed-king": mdiBedKingOutline,
  "bed-queen": mdiBedQueenOutline,
  "bed-double": mdiBedDoubleOutline,
  account: mdiAccount,
  people: mdiAccountGroupOutline,
  zone: mdiMapMarkerRadiusOutline,
  wifi: mdiWifi,
  ip: mdiIpNetworkOutline,
  lan: mdiLan,
  phone: mdiCellphone,
  bell: mdiBellRingOutline,
  video: mdiVideo,
  battery: mdiBattery,
  record: mdiRecordCircle,
  moon: mdiWeatherNight,
  update: mdiUpdate,
  message: mdiMessageProcessingOutline,
  cart: mdiCartOutline,
  shield: mdiShieldCheckOutline,
  lock: mdiLock,
  "lock-open": mdiLockOpenVariantOutline,
  unlock: mdiLockOpenVariantOutline,
  search: mdiMagnify,
  todo: mdiCheck,
  sunrise: mdiWeatherSunsetUp,
  sunset: mdiWeatherSunset,
  sun: mdiWeatherSunny,
  night: mdiWeatherNight,
  wind: mdiWeatherWindy,
  weather: mdiWeatherPartlyCloudy,
  "partly-cloudy": mdiWeatherPartlyCloudy,
  cloud: mdiWeatherCloudy,
  rain: mdiWeatherRainy,
  pouring: mdiWeatherPouring,
  snow: mdiWeatherSnowy,
  fog: mdiWeatherFog,
  hail: mdiWeatherHail,
  routines: mdiTuneVariant,
  tablet: mdiTablet,
  humidity: mdiWaterPercent,
  clock: mdiClockOutline,
  calendar: mdiCalendarClock,
  today: mdiCalendarToday
};
function icon(name, size = 22, className = "") {
  const path = ICONS[name] || ICONS.info;
  return b2`<svg
    class=${className}
    viewBox="0 0 24 24"
    width=${size}
    height=${size}
    aria-hidden="true"
    focusable="false"
  ><path fill="currentColor" d=${path}></path></svg>`;
}

// src/zurlii-home.js
var ACCENT_RGB = {
  blue: "103, 182, 255",
  cyan: "121, 220, 247",
  green: "103, 232, 165",
  yellow: "255, 209, 102",
  amber: "255, 196, 107",
  violet: "179, 167, 255",
  rose: "255, 156, 179",
  red: "255, 130, 150"
};
var accentRgb = (name) => ACCENT_RGB[name] || ACCENT_RGB.blue;
var accentStyle = (name) => `--accent-rgb:${accentRgb(name)};--sheet-accent-rgb:${accentRgb(name)};`;
var GROUP_META = {
  lights: { accent: "yellow", icon: "lights" },
  covers: { accent: "blue", icon: "covers" },
  climate: { accent: "cyan", icon: "climate" },
  plugs: { accent: "amber", icon: "plug" },
  media: { accent: "blue", icon: "tv" },
  remote: { accent: "violet", icon: "remote" },
  appliances: { accent: "green", icon: "appliance" },
  sensors: { accent: "green", icon: "gauge" }
};
var GROUP_TITLE = {
  lights: "section.lights",
  covers: "section.covers",
  climate: "section.climate",
  plugs: "section.plugs",
  media: "section.media",
  remote: "section.remote",
  appliances: "section.energy",
  sensors: "section.sensors"
};
var GROUP_EMPTY = {
  lights: { title: "empty.lights_title", body: "empty.lights_body", icon: "lights", domain: "light" },
  covers: { title: "empty.covers_title", body: "empty.covers_body", icon: "covers", domain: "cover" },
  climate: { title: "empty.climate_title", body: "empty.climate_body", icon: "climate", domain: "climate" },
  plugs: { title: "empty.plugs_title", body: "empty.plugs_body", icon: "plug", domain: "switch" },
  energy: { title: "energy.empty_title", body: "energy.empty_body", icon: "flash", domain: "sensor" },
  media: { title: "media.empty_title", body: "media.empty_body", icon: "tv", domain: "media_player" }
};
var PRINTER_ENTITY_MAP = [
  ["current_print_preview", ["current print preview"], ["image", "camera"]],
  ["printer_camera", ["printer camera"], ["camera", "image"]],
  ["max_bed_temperature", ["max bed temperature"], ["number", "sensor"]],
  ["max_chamber_temperature", ["max chamber temperature"], ["number", "sensor"]],
  ["max_nozzle_temperature", ["max nozzle temperature"], ["number", "sensor"]],
  ["bed_temperature", ["bed temperature"], ["sensor"]],
  ["bed_target", ["bed target"], ["number", "sensor"]],
  ["chamber_temperature", ["chamber temperature"], ["sensor"]],
  ["nozzle_temperature", ["nozzle temperature"], ["sensor"]],
  ["nozzle_target", ["nozzle target"], ["number", "sensor"]],
  ["current_object", ["current object"], ["sensor"]],
  ["object_count", ["object count"], ["sensor"]],
  ["print_progress", ["print progress"], ["sensor"]],
  ["print_status", ["print status"], ["sensor"]],
  ["print_time_left", ["print time left"], ["sensor"]],
  ["print_job_time", ["print job time"], ["sensor"]],
  ["total_layers", ["total layers"], ["sensor"]],
  ["working_layer", ["working layer"], ["sensor"]],
  ["used_material_length", ["used material length"], ["sensor"]],
  ["filament_status", ["filament status"], ["binary_sensor", "sensor"]],
  ["flow_rate", ["flow rate"], ["sensor"]],
  ["flow_factor", ["flow factor"], ["number"]],
  ["real_time_flow", ["real-time flow", "real time flow"], ["sensor"]],
  ["print_speed", ["print speed"], ["number", "sensor"]],
  ["speed_factor", ["speed factor"], ["number"]],
  ["model_fan", ["model fan"], ["fan", "switch"]],
  ["case_fan", ["case fan"], ["fan", "switch"]],
  ["side_fan", ["side fan"], ["fan", "switch"]],
  ["print_control", ["print control"], ["select", "button"]],
  ["model", ["model"], ["sensor"]],
  ["light", ["light"], ["light", "switch"]],
  ["home", ["home (xy then z)", "home xy", "home"], ["button"]],
  ["pause_print", ["pause print"], ["button"]],
  ["resume_print", ["resume print"], ["button"]],
  ["stop_print", ["stop print"], ["button"]],
  ["reconnect", ["reconnect"], ["button"]]
];
var ROUTINES = [
  { id: "cinema", icon: "tv", accent: "violet", title: "routines.cinema.name", desc: "routines.cinema.desc" },
  { id: "night", icon: "night", accent: "blue", title: "routines.night.name", desc: "routines.night.desc" },
  { id: "away", icon: "lock", accent: "amber", title: "routines.away.name", desc: "routines.away.desc" },
  { id: "morning", icon: "sunrise", accent: "rose", title: "routines.morning.name", desc: "routines.morning.desc" }
];
var ZurliiHome = class extends i4 {
  static styles = styles;
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _sheet: { state: true },
    _activeRoom: { state: true },
    _closing: { state: true },
    _bgUrl: { state: true },
    _bgLoaded: { state: true },
    _toast: { state: true },
    _todoLoading: { state: true },
    _todoItems: { state: true },
    _todoError: { state: true },
    _todoText: { state: true },
    _assistText: { state: true },
    _assistBusy: { state: true },
    _assistAnswer: { state: true },
    _assistError: { state: true },
    _installing: { state: true },
    _notifyBusy: { state: true },
    _weatherForecast: { state: true },
    _weatherForecastEntity: { state: true },
    _weatherLoading: { state: true },
    _weatherError: { state: true },
    _routineBusy: { state: true }
  };
  constructor() {
    var _a2, _b, _c, _d;
    super();
    this._config = normalizeConfig({});
    this._sheet = null;
    this._activeRoom = null;
    this._closing = false;
    this._bgUrl = homeBackground(this._config);
    this._bgLoaded = false;
    this._toast = null;
    this._todoLoading = false;
    this._todoItems = null;
    this._todoError = false;
    this._todoText = "";
    this._assistText = "";
    this._assistBusy = false;
    this._assistAnswer = "";
    this._assistError = false;
    this._installing = {};
    this._notifyBusy = false;
    this._weatherForecast = null;
    this._weatherForecastEntity = null;
    this._weatherLoading = false;
    this._weatherError = false;
    this._routineBusy = null;
    this._focusBefore = null;
    this._closeTimer = null;
    this._toastTimer = null;
    this._cameraTimer = null;
    this._cameraNonce = 0;
    this._doorbellCall = null;
    this._doorbellSeenStamp = void 0;
    this._doorbellAudio = null;
    this._doorbellRingTimer = null;
    this._doorbellStopTimer = null;
    this._boundUnlockDoorbellAudio = null;
    this._musicUrl = String(((_a2 = this._config.global.music) == null ? void 0 : _a2.url) || "");
    this._musicTitle = String(((_b = this._config.global.music) == null ? void 0 : _b.title) || "Zurlii Music");
    this._musicOutput = "tablet";
    this._musicDevice = "";
    this._musicVolume = clamp(
      Number(((_c = this._config.global.music) == null ? void 0 : _c.volume) ?? 0.8),
      0,
      1
    );
    this._musicAudio = null;
    this._musicLocalUrl = null;
    this._musicPlaying = false;
    this._musicError = false;
    this._cameraStreamChecked = false;
    this._youtubeUrl = "";
    this._youtubeQuery = "";
    this._youtubeVideo = null;
    this._youtubeResults = [];
    this._youtubeLoading = false;
    this._youtubeError = "";
    this._youtubeApiKey = ((_d = this._config.global.youtube) == null ? void 0 : _d.api_key) || (() => {
      try {
        return localStorage.getItem("zurlii_youtube_api_key") || "";
      } catch {
        return "";
      }
    })();
    this._youtubeDevice = "";
    this._youtubePlaylist = this._loadYoutubePlaylist();
    this._listening = false;
    this._recognition = null;
    this._controlQuery = "";
    this._drag = null;
    this._bgErrorNotified = false;
  }
  static getStubConfig() {
    return {
      title: "Zurli Family",
      subtitle: "AdiHouse \xB7 Smart Home",
      greeting_name: "Adi"
    };
  }
  getCardSize() {
    return 12;
  }
  set config(value) {
    this.setConfig(value);
  }
  get config() {
    return this._config;
  }
  setConfig(config) {
    const previousRoom = this._activeRoom;
    this._config = normalizeConfig(config || {});
    let nextBackground;
    if (previousRoom) {
      const room2 = this._config.rooms.find((item) => item.id === previousRoom);
      if (room2) {
        this._activeRoom = room2.id;
        nextBackground = roomBackground(this._config, room2);
      } else {
        this._activeRoom = null;
        nextBackground = homeBackground(this._config);
      }
    } else {
      nextBackground = homeBackground(this._config);
    }
    if (nextBackground !== this._bgUrl) {
      this._bgUrl = nextBackground;
      this._bgLoaded = false;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this._boundKeyDown = this._onKeyDown.bind(this);
    this._boundUnlockDoorbellAudio = () => this._unlockDoorbellAudio();
    window.addEventListener("keydown", this._boundKeyDown);
    window.addEventListener("pointerdown", this._boundUnlockDoorbellAudio, {
      once: true
    });
    this._cameraTimer = window.setInterval(() => {
      var _a2;
      if (["cameras", "camera", "home"].includes((_a2 = this._sheet) == null ? void 0 : _a2.type)) {
        this._cameraNonce += 1;
        this.requestUpdate();
      }
    }, 15e3);
  }
  disconnectedCallback() {
    var _a2;
    window.removeEventListener("keydown", this._boundKeyDown);
    window.removeEventListener("pointerdown", this._boundUnlockDoorbellAudio);
    window.clearTimeout(this._closeTimer);
    window.clearTimeout(this._toastTimer);
    window.clearInterval(this._cameraTimer);
    window.clearTimeout(this._doorbellRingTimer);
    window.clearTimeout(this._doorbellStopTimer);
    this._stopDoorbellSound();
    (_a2 = this._musicAudio) == null ? void 0 : _a2.pause();
    super.disconnectedCallback();
  }
  updated(changed) {
    var _a2, _b;
    if (changed.has("hass") && this.hass) this._checkDoorbellRing();
    if (changed.has("hass") && this.hass && !this._cameraStreamChecked && ["cameras", "camera", "home"].includes((_a2 = this._sheet) == null ? void 0 : _a2.type)) {
      this._ensureCameraStream();
    }
    if (changed.has("_sheet")) {
      if (this._sheet) {
        this.updateComplete.then(() => {
          var _a3, _b2;
          this._resetSheetScroll();
          const closeButton = this.renderRoot.querySelector(".sheet-close");
          closeButton == null ? void 0 : closeButton.focus({ preventScroll: true });
          if (((_a3 = this._sheet) == null ? void 0 : _a3.type) === "system" && this._todoItems === null && !this._todoLoading && this._config.features.todo) {
            this._loadTodo();
          }
          if (((_b2 = this._sheet) == null ? void 0 : _b2.type) === "weather") {
            this._loadWeatherForecast();
          }
        });
      } else if ((_b = this._focusBefore) == null ? void 0 : _b.isConnected) {
        this._focusBefore.focus({ preventScroll: true });
        this._focusBefore = null;
      }
    }
  }
  _resetSheetScroll() {
    const body = this.renderRoot.querySelector(".sheet-body");
    if (body) body.scrollTop = 0;
  }
  _onKeyDown(event) {
    if (this._doorbellCall && event.key === "Escape") {
      event.preventDefault();
      this._stopDoorbellCall();
      return;
    }
    if (!this._sheet) return;
    if (event.key === "Escape") {
      event.preventDefault();
      this._closeSheet();
      return;
    }
    if (event.key !== "Tab") return;
    const sheet = this.renderRoot.querySelector(".sheet");
    if (!sheet) return;
    const focusable = [...sheet.querySelectorAll(
      'button:not([disabled]), summary, input:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )].filter((node) => node.offsetParent !== null);
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = this.renderRoot.activeElement;
    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }
  _lang() {
    return this._config.language;
  }
  _roomById(id) {
    return this._config.rooms.find((room2) => room2.id === id) || null;
  }
  _roomDisplayCount(room2) {
    if (!room2) return 0;
    const explicitPrinter = printerEntityIds(room2.printer).length;
    const discoveredPrinter = Object.keys(this._printerEntities(room2.printer)).length;
    return roomEntityCount(room2) - explicitPrinter + discoveredPrinter;
  }
  _roomActiveCount(room2) {
    if (!room2) return 0;
    const printer = Object.values(this._printerEntities(room2.printer));
    return activeCount(
      this.hass,
      uniqueIds([...roomEntityIds(room2), ...printer])
    );
  }
  _entityCount(count) {
    const lang = this._lang();
    return count === 1 ? t3(lang, "label.room_one") : t3(lang, "label.room_entities", { count });
  }
  _openSheet(sheet) {
    window.clearTimeout(this._closeTimer);
    if (!this._sheet) this._focusBefore = document.activeElement;
    this._closing = false;
    this._sheet = sheet;
  }
  _closeSheet() {
    if (!this._sheet || this._closing) return;
    this._closing = true;
    window.clearTimeout(this._closeTimer);
    this._closeTimer = window.setTimeout(() => {
      this._sheet = null;
      this._closing = false;
    }, 220);
  }
  _setBackground(url) {
    if (!url || url === this._bgUrl) return;
    this._bgLoaded = false;
    this._bgUrl = url;
  }
  _goHome() {
    this._activeRoom = null;
    this._setBackground(homeBackground(this._config));
    this._openSheet({ type: "home" });
  }
  _openRoom(room2) {
    if (!room2) return;
    this._activeRoom = room2.id;
    this._setBackground(roomBackground(this._config, room2));
    this._openSheet({ type: "room", roomId: room2.id });
  }
  _toggleSheet(type) {
    var _a2;
    if (((_a2 = this._sheet) == null ? void 0 : _a2.type) === type) {
      this._closeSheet();
      return;
    }
    this._openSheet({ type });
  }
  _dockAction(id) {
    var _a2;
    if (id === "home") {
      if (((_a2 = this._sheet) == null ? void 0 : _a2.type) === "home" && !this._activeRoom) {
        this._closeSheet();
      } else {
        this._goHome();
      }
      return;
    }
    this._toggleSheet(id);
  }
  _activeNav() {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
    if (((_a2 = this._sheet) == null ? void 0 : _a2.type) === "home") return "home";
    if (((_b = this._sheet) == null ? void 0 : _b.type) === "lights") return "lights";
    if (((_c = this._sheet) == null ? void 0 : _c.type) === "covers") return "covers";
    if (((_d = this._sheet) == null ? void 0 : _d.type) === "climate") return "climate";
    if (((_e = this._sheet) == null ? void 0 : _e.type) === "weather") return "weather";
    if (((_f = this._sheet) == null ? void 0 : _f.type) === "energy") return "energy";
    if (((_g = this._sheet) == null ? void 0 : _g.type) === "media") return "media";
    if (((_h = this._sheet) == null ? void 0 : _h.type) === "routines") return "routines";
    if (((_i = this._sheet) == null ? void 0 : _i.type) === "system") return "system";
    if (((_j = this._sheet) == null ? void 0 : _j.type) === "cameras" || ((_k = this._sheet) == null ? void 0 : _k.type) === "camera") return "cameras";
    if (((_l = this._sheet) == null ? void 0 : _l.type) === "rooms" || ((_m = this._sheet) == null ? void 0 : _m.type) === "room") return "home";
    if (!this._sheet && this._activeRoom) return "home";
    return "home";
  }
  _showToast(message, tone = "success") {
    window.clearTimeout(this._toastTimer);
    this._toast = { message, tone };
    this._toastTimer = window.setTimeout(() => {
      this._toast = null;
    }, 3200);
  }
  async _service(domain, service, data = {}, options = {}) {
    const requested = data == null ? void 0 : data.entity_id;
    const entityIds = Array.isArray(requested) ? requested : requested ? [requested] : [];
    const available = entityIds.filter((id) => getState(this.hass, id));
    if (entityIds.length && available.length === 0) {
      this._showToast(options.unavailable || t3(this._lang(), "toast.unavailable"), "error");
      return false;
    }
    const payload = { ...data };
    if (Array.isArray(requested)) payload.entity_id = available;
    try {
      await this.hass.callService(domain, service, payload);
      if (options.success) this._showToast(options.success);
      return true;
    } catch (error) {
      console.error(`[Zurlii Home] ${domain}.${service}`, error);
      this._showToast(options.error || t3(this._lang(), "toast.error"), "error");
      return false;
    }
  }
  _toggleLight(entityId) {
    const on = isOn(this.hass, entityId);
    this._service("light", on ? "turn_off" : "turn_on", { entity_id: entityId });
  }
  _setLightBrightness(entityId, event) {
    const brightness = Number(event.target.value);
    this._service("light", "turn_on", {
      entity_id: entityId,
      brightness_pct: clamp(brightness, 1, 100)
    });
  }
  _toggleCover(entityId) {
    const state = stateValue(this.hass, entityId);
    const service = ["open", "opening"].includes(state) ? "close_cover" : "open_cover";
    this._service("cover", service, { entity_id: entityId });
  }
  _coverCommand(entityId, service) {
    this._service("cover", service, { entity_id: entityId });
  }
  _setCoverPosition(entityId, event) {
    this._service("cover", "set_cover_position", {
      entity_id: entityId,
      position: clamp(Number(event.target.value), 0, 100)
    });
  }
  _toggleClimate(entityId) {
    const state = stateValue(this.hass, entityId);
    if (state === "off") {
      this._service("climate", "turn_on", { entity_id: entityId });
    } else {
      this._service("climate", "turn_off", { entity_id: entityId });
    }
  }
  _stepClimate(entityId, delta) {
    var _a2;
    const state = getState(this.hass, entityId);
    const current = Number((_a2 = state == null ? void 0 : state.attributes) == null ? void 0 : _a2.temperature);
    const target = Number.isFinite(current) ? current : 21;
    this._service("climate", "set_temperature", {
      entity_id: entityId,
      temperature: Math.round((target + delta) * 10) / 10
    });
  }
  _setClimateMode(entityId, mode) {
    this._service("climate", "set_hvac_mode", { entity_id: entityId, hvac_mode: mode });
  }
  _toggleMedia(entityId) {
    this._service("media_player", "toggle", { entity_id: entityId });
  }
  _mediaPlayPause(entityId) {
    this._service("media_player", "media_play_pause", { entity_id: entityId });
  }
  _setMediaVolume(entityId, event) {
    this._service("media_player", "volume_set", {
      entity_id: entityId,
      volume_level: clamp(Number(event.target.value), 0, 100) / 100
    });
  }
  _musicDevices() {
    return Object.keys(this.hass.states || {}).filter((entityId) => entityId.startsWith("media_player.")).filter((entityId) => {
      const state = getState(this.hass, entityId);
      return state && !["unavailable", "unknown"].includes(state.state);
    }).map((entityId) => ({
      entityId,
      name: entityLabel(this._config, this.hass, entityId),
      state: getState(this.hass, entityId)
    })).sort((a3, b3) => a3.name.localeCompare(b3.name, this._lang()));
  }
  _currentMusicDevice() {
    var _a2;
    return this._musicDevice || ((_a2 = this._musicDevices()[0]) == null ? void 0 : _a2.entityId) || "";
  }
  _musicIsPlaying() {
    if (this._musicOutput === "tablet") {
      return Boolean(
        this._musicAudio && !this._musicAudio.paused && !this._musicAudio.ended
      );
    }
    const entityId = this._currentMusicDevice();
    return entityId ? stateValue(this.hass, entityId) === "playing" : false;
  }
  _ensureMusicAudio(url) {
    if (!this._musicAudio) {
      this._musicAudio = new Audio();
      this._musicAudio.preload = "none";
      this._musicAudio.addEventListener("play", () => {
        this._musicPlaying = true;
        this.requestUpdate();
      });
      this._musicAudio.addEventListener("pause", () => {
        this._musicPlaying = false;
        this.requestUpdate();
      });
      this._musicAudio.addEventListener("ended", () => {
        this._musicPlaying = false;
        this.requestUpdate();
      });
      this._musicAudio.addEventListener("error", () => {
        this._musicPlaying = false;
        this._musicError = true;
        this.requestUpdate();
      });
    }
    if (url && this._musicAudio.dataset.source !== url) {
      this._musicAudio.dataset.source = url;
      this._musicAudio.src = url;
    }
    this._musicAudio.volume = this._musicVolume;
    return this._musicAudio;
  }
  async _playMusic() {
    const lang = this._lang();
    const url = this._musicLocalUrl || this._musicUrl;
    if (this._musicOutput === "tablet") {
      if (!url) {
        this._showToast(t3(lang, "music.no_source"), "error");
        return;
      }
      try {
        await this._ensureMusicAudio(url).play();
      } catch (error) {
        console.error("[Zurlii Home] music.play", error);
        this._showToast(t3(lang, "music.play_failed"), "error");
      }
      return;
    }
    const device = this._currentMusicDevice();
    if (!device) {
      this._showToast(t3(lang, "music.no_device"), "error");
      return;
    }
    if (!url) {
      this._showToast(t3(lang, "music.no_source"), "error");
      return;
    }
    await this._service("media_player", "play_media", {
      entity_id: device,
      media_content_id: url,
      media_content_type: "music"
    });
  }
  _pauseMusic() {
    var _a2;
    if (this._musicOutput === "tablet") {
      (_a2 = this._musicAudio) == null ? void 0 : _a2.pause();
      return;
    }
    const device = this._currentMusicDevice();
    if (device) this._service("media_player", "media_pause", { entity_id: device });
  }
  _stopMusic() {
    if (this._musicOutput === "tablet") {
      if (this._musicAudio) {
        this._musicAudio.pause();
        this._musicAudio.currentTime = 0;
      }
      this._musicPlaying = false;
      this.requestUpdate();
      return;
    }
    const device = this._currentMusicDevice();
    if (device) this._service("media_player", "media_stop", { entity_id: device });
  }
  _toggleMusic() {
    if (this._musicIsPlaying()) this._pauseMusic();
    else this._playMusic();
  }
  _selectMusicOutput(output) {
    var _a2, _b;
    (_a2 = this._musicAudio) == null ? void 0 : _a2.pause();
    this._musicOutput = output;
    if (output === "device" && !this._musicDevice) {
      this._musicDevice = ((_b = this._musicDevices()[0]) == null ? void 0 : _b.entityId) || "";
    }
    this.requestUpdate();
  }
  _selectMusicDevice(entityId) {
    var _a2;
    (_a2 = this._musicAudio) == null ? void 0 : _a2.pause();
    this._musicDevice = entityId;
    this._musicOutput = "device";
    this.requestUpdate();
  }
  _setMusicVolume(event) {
    const value = clamp(Number(event.target.value), 0, 100);
    this._musicVolume = value / 100;
    if (this._musicAudio) this._musicAudio.volume = this._musicVolume;
    if (this._musicOutput === "device") {
      const device = this._currentMusicDevice();
      if (device) {
        this._service("media_player", "volume_set", {
          entity_id: device,
          volume_level: this._musicVolume
        });
      }
    }
    this.requestUpdate();
  }
  _setMusicUrl(event) {
    this._musicUrl = event.target.value.trim();
    if (this._musicLocalUrl) {
      URL.revokeObjectURL(this._musicLocalUrl);
      this._musicLocalUrl = null;
    }
    this.requestUpdate();
  }
  _chooseMusicFile(event) {
    var _a2;
    const file = (_a2 = event.target.files) == null ? void 0 : _a2[0];
    if (!file) return;
    if (this._musicLocalUrl) URL.revokeObjectURL(this._musicLocalUrl);
    this._musicLocalUrl = URL.createObjectURL(file);
    this._musicTitle = file.name;
    this._musicOutput = "tablet";
    this._musicError = false;
    this._playMusic();
  }
  _selectMusicPreset(preset) {
    if (!(preset == null ? void 0 : preset.url)) return;
    this._musicUrl = preset.url;
    this._musicTitle = preset.name || this._musicTitle;
    this._musicLocalUrl = null;
    this._musicError = false;
    this._playMusic();
  }
  _loadYoutubePlaylist() {
    try {
      const parsed = JSON.parse(
        localStorage.getItem("zurlii_youtube_playlist") || "[]"
      );
      return Array.isArray(parsed) ? parsed.filter((item) => item == null ? void 0 : item.id) : [];
    } catch {
      return [];
    }
  }
  _saveYoutubePlaylist() {
    try {
      localStorage.setItem(
        "zurlii_youtube_playlist",
        JSON.stringify(this._youtubePlaylist)
      );
    } catch {
    }
  }
  _youtubeId(value) {
    const match = String(value || "").match(
      /(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{11})/
    );
    return (match == null ? void 0 : match[1]) || null;
  }
  _youtubeTitle(video) {
    return (video == null ? void 0 : video.title) || (video == null ? void 0 : video.id) || "YouTube";
  }
  _youtubeSelect(video) {
    if (!(video == null ? void 0 : video.id)) return;
    this._youtubeVideo = {
      id: video.id,
      title: video.title || video.id,
      thumbnail: video.thumbnail || `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
      channel: video.channel || ""
    };
    this._youtubeUrl = `https://www.youtube.com/watch?v=${video.id}`;
    this._youtubeError = "";
    this.requestUpdate();
  }
  async _youtubeLoadUrl() {
    var _a2;
    const value = this._youtubeUrl.trim();
    const id = this._youtubeId(value);
    if (!id) {
      this._youtubeError = t3(this._lang(), "youtube.invalid");
      this.requestUpdate();
      return;
    }
    const video = {
      id,
      title: id,
      thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
    };
    this._youtubeSelect(video);
    try {
      const response = await fetch(
        `https://www.youtube.com/oembed?url=${encodeURIComponent(`https://www.youtube.com/watch?v=${id}`)}&format=json`
      );
      if (response.ok) {
        const data = await response.json();
        if (((_a2 = this._youtubeVideo) == null ? void 0 : _a2.id) === id) {
          this._youtubeVideo = {
            ...this._youtubeVideo,
            title: data.title || video.title,
            thumbnail: data.thumbnail_url || video.thumbnail,
            channel: data.author_name || ""
          };
          this.requestUpdate();
        }
      }
    } catch {
    }
  }
  async _youtubeSearch() {
    var _a2, _b, _c;
    const query = this._youtubeQuery.trim();
    if (!query || this._youtubeLoading) return;
    const key = this._youtubeApiKey || ((_a2 = this._config.global.youtube) == null ? void 0 : _a2.api_key) || localStorage.getItem("zurlii_youtube_api_key") || "";
    if (!key) {
      this._youtubeError = t3(this._lang(), "youtube.no_api");
      this.requestUpdate();
      return;
    }
    this._youtubeLoading = true;
    this._youtubeError = "";
    this.requestUpdate();
    try {
      const params = new URLSearchParams({
        part: "snippet",
        type: "video",
        maxResults: String(((_b = this._config.global.youtube) == null ? void 0 : _b.max_results) || 8),
        q: query,
        regionCode: ((_c = this._config.global.youtube) == null ? void 0 : _c.region) || "RO",
        key
      });
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?${params.toString()}`
      );
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      this._youtubeResults = (data.items || []).map((item) => {
        var _a3, _b2, _c2, _d, _e, _f, _g, _h, _i;
        return {
          id: (_a3 = item.id) == null ? void 0 : _a3.videoId,
          title: ((_b2 = item.snippet) == null ? void 0 : _b2.title) || "",
          channel: ((_c2 = item.snippet) == null ? void 0 : _c2.channelTitle) || "",
          thumbnail: ((_f = (_e = (_d = item.snippet) == null ? void 0 : _d.thumbnails) == null ? void 0 : _e.medium) == null ? void 0 : _f.url) || ((_i = (_h = (_g = item.snippet) == null ? void 0 : _g.thumbnails) == null ? void 0 : _h.default) == null ? void 0 : _i.url) || ""
        };
      }).filter((item) => item.id);
      if (this._youtubeResults.length === 0) {
        this._youtubeError = t3(this._lang(), "youtube.no_results");
      }
    } catch (error) {
      console.error("[Zurlii Home] YouTube search", error);
      this._youtubeError = t3(this._lang(), "youtube.search_failed");
    } finally {
      this._youtubeLoading = false;
      this.requestUpdate();
    }
  }
  _youtubeSave() {
    var _a2;
    if (!((_a2 = this._youtubeVideo) == null ? void 0 : _a2.id)) return;
    if (this._youtubePlaylist.some((item) => item.id === this._youtubeVideo.id)) {
      this._showToast(t3(this._lang(), "youtube.saved"));
      return;
    }
    this._youtubePlaylist = [
      {
        id: this._youtubeVideo.id,
        title: this._youtubeVideo.title,
        thumbnail: this._youtubeVideo.thumbnail,
        channel: this._youtubeVideo.channel
      },
      ...this._youtubePlaylist
    ].slice(0, 30);
    this._saveYoutubePlaylist();
    this.requestUpdate();
  }
  _youtubeRemove(id) {
    this._youtubePlaylist = this._youtubePlaylist.filter(
      (item) => item.id !== id
    );
    this._saveYoutubePlaylist();
    this.requestUpdate();
  }
  _youtubeSetApiKey(event) {
    this._youtubeApiKey = event.target.value.trim();
    try {
      localStorage.setItem("zurlii_youtube_api_key", this._youtubeApiKey);
    } catch {
    }
  }
  _youtubeOpenExternal() {
    const query = this._youtubeQuery.trim();
    window.open(
      query ? `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}` : "https://www.youtube.com",
      "_blank",
      "noopener,noreferrer"
    );
  }
  async _youtubeCast() {
    var _a2, _b, _c, _d;
    const device = this._youtubeDevice || ((_a2 = this._musicDevices()[0]) == null ? void 0 : _a2.entityId) || "";
    if (!device) {
      this._showToast(t3(this._lang(), "youtube.no_device"), "error");
      return;
    }
    if (!((_b = this._youtubeVideo) == null ? void 0 : _b.id)) {
      this._showToast(t3(this._lang(), "youtube.invalid"), "error");
      return;
    }
    const url = `https://www.youtube.com/watch?v=${this._youtubeVideo.id}`;
    const hasExtractor = Boolean(
      (_d = (_c = this.hass.services) == null ? void 0 : _c.media_extractor) == null ? void 0 : _d.play_media
    );
    try {
      if (hasExtractor) {
        await this.hass.callService("media_extractor", "play_media", {
          entity_id: device,
          media_content_id: url,
          media_content_type: "music"
        });
      } else {
        await this.hass.callService("media_player", "play_media", {
          entity_id: device,
          media_content_id: url,
          media_content_type: "music"
        });
      }
      this._showToast(
        t3(this._lang(), "youtube.playing_on", {
          name: entityLabel(this._config, this.hass, device)
        })
      );
    } catch (error) {
      console.error("[Zurlii Home] YouTube cast", error);
      this._showToast(t3(this._lang(), "youtube.cast_failed"), "error");
    }
  }
  _musicCurrentTitle() {
    if (this._musicLocalUrl) return this._musicTitle;
    if (!this._musicUrl) return this._musicTitle;
    try {
      const parsed = new URL(this._musicUrl, window.location.href);
      return decodeURIComponent(parsed.pathname.split("/").filter(Boolean).pop() || this._musicUrl);
    } catch {
      return this._musicUrl;
    }
  }
  _toggleRemote(entityId) {
    this._service("remote", "toggle", { entity_id: entityId });
  }
  _sendRemote(entityId, key) {
    var _a2;
    const command = (_a2 = this._config.remote_commands) == null ? void 0 : _a2[key];
    if (!command) {
      this._showToast(t3(this._lang(), "toast.error"), "error");
      return;
    }
    this._service("remote", "send_command", {
      entity_id: entityId,
      command
    });
  }
  _allLightsOff() {
    const ids = this._config.rooms.flatMap((room2) => room2.entities.lights || []);
    if (ids.length === 0) return;
    this._service("light", "turn_off", { entity_id: ids });
  }
  _onRangeInput(event) {
    const value = Number(event.target.value);
    event.target.style.setProperty("--pct", `${value}%`);
    const card = event.target.closest(".entity-card, .media-card");
    const label = card == null ? void 0 : card.querySelector(".range-value");
    if (label) label.textContent = `${value}%`;
  }
  _formatRangePct(value) {
    return `${clamp(Number(value) || 0, 0, 100)}%`;
  }
  _onBgLoad() {
    this._bgLoaded = true;
  }
  _onBgError() {
    if (this._bgErrorNotified) return;
    this._bgErrorNotified = true;
    this._showToast(
      this._lang() === "ro" ? "Fundalul nu a putut fi \u0102\xAEnc\xC4\x83rcat. Verific\xC4\x83 calea imaginii." : "Background could not be loaded. Check the image path.",
      "error"
    );
  }
  _onDragStart(event) {
    var _a2, _b;
    if (event.pointerType === "mouse") return;
    if (event.target.closest("button, summary, input, a")) return;
    const sheet = this.renderRoot.querySelector(".sheet");
    if (!sheet) return;
    this._drag = {
      startY: event.clientY,
      dy: 0,
      sheet,
      pointerId: event.pointerId
    };
    sheet.classList.add("is-dragging");
    (_b = (_a2 = event.currentTarget).setPointerCapture) == null ? void 0 : _b.call(_a2, event.pointerId);
  }
  _onDragMove(event) {
    if (!this._drag) return;
    const dy = Math.max(0, event.clientY - this._drag.startY);
    this._drag.dy = dy;
    this._drag.sheet.style.transform = `translateY(${dy}px)`;
    this._drag.sheet.style.opacity = String(clamp(1 - dy / 620, 0.55, 1));
  }
  _onDragEnd() {
    if (!this._drag) return;
    const { dy, sheet } = this._drag;
    sheet.classList.remove("is-dragging");
    sheet.style.transform = "";
    sheet.style.opacity = "";
    this._drag = null;
    if (dy > 105) this._closeSheet();
  }
  _greeting() {
    return t3(this._lang(), greetingKey((/* @__PURE__ */ new Date()).getHours()), {
      name: this._config.greeting_name
    });
  }
  _sheetMeta() {
    const lang = this._lang();
    const sheet = this._sheet;
    if (!sheet) return null;
    if (sheet.type === "room") {
      const room2 = this._roomById(sheet.roomId);
      if (!room2) return null;
      const count = this._roomDisplayCount(room2);
      const active = this._roomActiveCount(room2);
      return {
        type: "room",
        icon: room2.icon,
        accent: roomAccent(room2),
        eyebrow: t3(lang, "sheet.room.eyebrow"),
        title: room2.name,
        subtitle: count ? `${t3(lang, count === 1 ? "label.room_one" : "label.room_entities", { count })} \xB7 ${t3(lang, "label.room_active", { count: active })}` : t3(lang, "label.room_empty"),
        back: true
      };
    }
    if (sheet.type === "home") {
      return {
        type: "home",
        icon: "home",
        accent: "blue",
        eyebrow: t3(lang, "sheet.home.eyebrow"),
        title: this._greeting(),
        subtitle: t3(lang, "sheet.home.subtitle")
      };
    }
    if (sheet.type === "youtube") {
      return {
        type: "youtube",
        icon: "youtube",
        accent: "red",
        eyebrow: t3(lang, "sheet.youtube.eyebrow"),
        title: t3(lang, "sheet.youtube.title"),
        subtitle: t3(lang, "sheet.youtube.subtitle")
      };
    }
    if (sheet.type === "cameras") {
      return {
        type: "cameras",
        icon: "video",
        accent: "blue",
        eyebrow: t3(lang, "sheet.cameras.eyebrow"),
        title: t3(lang, "sheet.cameras.title"),
        subtitle: t3(lang, "sheet.cameras.subtitle")
      };
    }
    if (sheet.type === "rooms" || sheet.type === "spaces") {
      return {
        type: "rooms",
        icon: "rooms",
        accent: "blue",
        eyebrow: t3(lang, "sheet.rooms.eyebrow"),
        title: t3(lang, "sheet.rooms.title"),
        subtitle: t3(lang, "sheet.rooms.subtitle")
      };
    }
    if (sheet.type === "controls") {
      return {
        type: "controls",
        icon: "tune",
        accent: "violet",
        eyebrow: t3(lang, "sheet.controls.eyebrow"),
        title: t3(lang, "sheet.controls.title"),
        subtitle: t3(lang, "sheet.controls.subtitle")
      };
    }
    if (sheet.type === "entity") {
      return {
        type: "entity",
        icon: this._domainIcon(sheet.entityId),
        accent: "blue",
        eyebrow: t3(lang, "sheet.controls.eyebrow"),
        title: entityLabel(this._config, this.hass, sheet.entityId),
        subtitle: `${sheet.entityId.split(".")[0]} \xB7 ${stateText(this.hass, sheet.entityId, lang)}`,
        back: true
      };
    }
    if (sheet.type === "assistant") {
      return {
        type: "assistant",
        icon: "mic",
        accent: "violet",
        eyebrow: t3(lang, "sheet.assistant.eyebrow"),
        title: t3(lang, "sheet.assistant.title"),
        subtitle: t3(lang, "sheet.assistant.subtitle")
      };
    }
    if (sheet.type === "camera") {
      const camera = this._cameraEntities().find(
        (item) => item.entityId === sheet.cameraId
      );
      return {
        type: "camera",
        icon: "video",
        accent: "blue",
        eyebrow: t3(lang, "camera.live_eyebrow"),
        title: (camera == null ? void 0 : camera.name) || entityLabel(this._config, this.hass, sheet.cameraId),
        subtitle: (camera == null ? void 0 : camera.status) || t3(lang, "status.unknown"),
        back: true
      };
    }
    if (sheet.type === "system") {
      return {
        type: "system",
        icon: "system",
        accent: "violet",
        eyebrow: t3(lang, "sheet.system.eyebrow"),
        title: t3(lang, "sheet.system.title"),
        subtitle: t3(lang, "sheet.system.subtitle")
      };
    }
    if (sheet.type === "lights") {
      return {
        type: "lights",
        icon: "lights",
        accent: "yellow",
        eyebrow: t3(lang, "sheet.lights.eyebrow"),
        title: t3(lang, "sheet.lights.title"),
        subtitle: t3(lang, "sheet.lights.subtitle")
      };
    }
    if (sheet.type === "covers") {
      return {
        type: "covers",
        icon: "covers",
        accent: "blue",
        eyebrow: t3(lang, "sheet.covers.eyebrow"),
        title: t3(lang, "sheet.covers.title"),
        subtitle: t3(lang, "sheet.covers.subtitle")
      };
    }
    if (sheet.type === "climate") {
      return {
        type: "climate",
        icon: "climate",
        accent: "cyan",
        eyebrow: t3(lang, "sheet.climate.eyebrow"),
        title: t3(lang, "sheet.climate.title"),
        subtitle: t3(lang, "sheet.climate.subtitle")
      };
    }
    if (sheet.type === "weather") {
      const weatherId = this._weatherEntity();
      const weatherState = weatherId ? getState(this.hass, weatherId) : null;
      return {
        type: "weather",
        icon: "weather",
        accent: "cyan",
        eyebrow: t3(lang, "sheet.weather.eyebrow"),
        title: t3(lang, "sheet.weather.title"),
        subtitle: weatherState && !["unavailable", "unknown"].includes(weatherState.state) ? `${weatherConditionLabel(lang, weatherState.state)} \xB7 ${entityLabel(this._config, this.hass, weatherId)}` : t3(lang, "sheet.weather.subtitle")
      };
    }
    if (sheet.type === "energy") {
      return {
        type: "energy",
        icon: "flash",
        accent: "green",
        eyebrow: t3(lang, "sheet.energy.eyebrow"),
        title: t3(lang, "sheet.energy.title"),
        subtitle: t3(lang, "sheet.energy.subtitle")
      };
    }
    if (sheet.type === "music") {
      return {
        type: "music",
        icon: "music",
        accent: "rose",
        eyebrow: t3(lang, "sheet.music.eyebrow"),
        title: t3(lang, "sheet.music.title"),
        subtitle: t3(lang, "sheet.music.subtitle")
      };
    }
    if (sheet.type === "media") {
      return {
        type: "media",
        icon: "tv",
        accent: "blue",
        eyebrow: t3(lang, "sheet.media.eyebrow"),
        title: t3(lang, "sheet.media.title"),
        subtitle: t3(lang, "sheet.media.subtitle")
      };
    }
    if (sheet.type === "routines") {
      return {
        type: "routines",
        icon: "routines",
        accent: "violet",
        eyebrow: t3(lang, "sheet.routines.eyebrow"),
        title: t3(lang, "sheet.routines.title"),
        subtitle: t3(lang, "sheet.routines.subtitle")
      };
    }
    return null;
  }
  _sunEvents() {
    const lang = this._lang();
    const definitions = [
      ["rising", "sun.rising", "sunrise"],
      ["dawn", "sun.dawn", "sunrise"],
      ["noon", "sun.noon", "sun"],
      ["setting", "sun.setting", "sunset"],
      ["dusk", "sun.dusk", "sunset"],
      ["midnight", "sun.midnight", "night"]
    ];
    return definitions.map(([key, labelKey, iconName]) => {
      var _a2;
      const entityId = (_a2 = this._config.global.sunNext) == null ? void 0 : _a2[key];
      if (!entityId) return null;
      const ms = timestampValue(this.hass, entityId);
      if (!ms) return null;
      return {
        key,
        label: t3(lang, labelKey),
        icon: iconName,
        date: new Date(ms),
        time: formatTime(ms, lang),
        day: dayLabel(ms, lang),
        ms
      };
    }).filter(Boolean).sort((a3, b3) => a3.ms - b3.ms);
  }
  _nextSunEvent() {
    return this._sunEvents()[0] || null;
  }
  _updatesAvailable() {
    if (!this._config.features.updates) return 0;
    return (this._config.global.updates || []).filter(
      (id) => stateValue(this.hass, id) === "on"
    ).length;
  }
  _isActiveEntity(state, entityId = "") {
    if (!state) return false;
    if (state.state === "unavailable") return false;
    if (state.state === "unknown") {
      return ["button", "event"].includes(entityId.split(".")[0]);
    }
    return true;
  }
  _activeIds(ids = []) {
    const unique = uniqueIds(ids);
    if (!this._config.features.hide_unavailable) return unique;
    return unique.filter(
      (entityId) => this._isActiveEntity(getState(this.hass, entityId), entityId)
    );
  }
  _selectOption(entityId, option) {
    this._service("select", "select_option", { entity_id: entityId, option });
  }
  _toggleSwitch(entityId) {
    this._service("switch", "toggle", { entity_id: entityId });
  }
  _doorbellConfig() {
    var _a2;
    return ((_a2 = this._config.rooms.find(
      (room2) => {
        var _a3, _b;
        return ((_a3 = room2.doorbell) == null ? void 0 : _a3.picture) || ((_b = room2.doorbell) == null ? void 0 : _b.camera);
      }
    )) == null ? void 0 : _a2.doorbell) || null;
  }
  _checkDoorbellRing() {
    var _a2;
    const doorbell = this._doorbellConfig();
    const eventId = doorbell == null ? void 0 : doorbell.picture;
    if (!eventId) return;
    const state = getState(this.hass, eventId);
    if (!state || ["unknown", "unavailable"].includes(state.state)) return;
    const stamp = `${state.last_changed || state.last_updated || ""}|${((_a2 = state.attributes) == null ? void 0 : _a2.event_type) || ""}`;
    if (this._doorbellSeenStamp === void 0) {
      this._doorbellSeenStamp = stamp;
      return;
    }
    if (stamp === this._doorbellSeenStamp) return;
    this._doorbellSeenStamp = stamp;
    this._triggerDoorbellCall(doorbell, state);
  }
  _triggerDoorbellCall(doorbell, eventState) {
    var _a2, _b, _c, _d, _e;
    const cameraState = doorbell.camera ? getState(this.hass, doorbell.camera) : null;
    const rawPicture = ((_a2 = eventState == null ? void 0 : eventState.attributes) == null ? void 0 : _a2.entity_picture) || ((_b = eventState == null ? void 0 : eventState.attributes) == null ? void 0 : _b.picture) || ((_c = cameraState == null ? void 0 : cameraState.attributes) == null ? void 0 : _c.entity_picture) || ((_d = cameraState == null ? void 0 : cameraState.attributes) == null ? void 0 : _d.picture) || "";
    const picture = rawPicture ? `${rawPicture}${rawPicture.includes("?") ? "&" : "?"}v=${Date.now()}` : "";
    this._doorbellCall = {
      doorbell,
      cameraId: doorbell.camera || null,
      picture,
      eventType: ((_e = eventState == null ? void 0 : eventState.attributes) == null ? void 0 : _e.event_type) || "ring",
      startedAt: Date.now()
    };
    this.requestUpdate();
    this._unlockDoorbellAudio();
    this._startDoorbellSound();
    if (navigator.vibrate) navigator.vibrate([180, 80, 180, 80, 320]);
    window.clearTimeout(this._doorbellStopTimer);
    this._doorbellStopTimer = window.setTimeout(
      () => this._stopDoorbellCall(),
      45e3
    );
  }
  _stopDoorbellCall() {
    window.clearTimeout(this._doorbellStopTimer);
    this._stopDoorbellSound();
    this._doorbellCall = null;
    this.requestUpdate();
  }
  _unlockDoorbellAudio() {
    var _a2, _b;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!this._doorbellAudio) {
      this._doorbellAudio = new AudioContextClass();
    }
    const resumed = (_b = (_a2 = this._doorbellAudio).resume) == null ? void 0 : _b.call(_a2);
    if (resumed == null ? void 0 : resumed.catch) resumed.catch(() => {
    });
    if (this._doorbellCall) this._startDoorbellSound();
  }
  _startDoorbellSound() {
    const context = this._doorbellAudio;
    if (!context || context.state !== "running") return;
    window.clearTimeout(this._doorbellRingTimer);
    const play = () => {
      if (!this._doorbellCall || !this._doorbellAudio) return;
      this._playDoorbellChime(this._doorbellAudio);
      this._doorbellRingTimer = window.setTimeout(play, 4200);
    };
    play();
  }
  _playDoorbellChime(context) {
    const now = context.currentTime;
    const chime = (frequency, start, duration) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(frequency, start);
      gain.gain.setValueAtTime(1e-4, start);
      gain.gain.exponentialRampToValueAtTime(0.18, start + 0.025);
      gain.gain.exponentialRampToValueAtTime(1e-4, start + duration);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(start);
      oscillator.stop(start + duration + 0.03);
    };
    chime(880, now, 0.55);
    chime(660, now + 0.42, 0.8);
  }
  _stopDoorbellSound() {
    window.clearTimeout(this._doorbellRingTimer);
    this._doorbellRingTimer = null;
  }
  _openDoorbellCamera() {
    var _a2;
    const cameraId = (_a2 = this._doorbellCall) == null ? void 0 : _a2.cameraId;
    this._stopDoorbellCall();
    if (cameraId) this._openCameraSheet(cameraId);
  }
  _renderDoorbellCall() {
    var _a2, _b, _c, _d;
    const call = this._doorbellCall;
    if (!call) return A;
    const lang = this._lang();
    return b2`
      <div
        class="doorbell-call"
        role="dialog"
        aria-modal="true"
        aria-label=${t3(lang, "doorbell.call_title")}
        @click=${this._stopDoorbellCall}
      >
        <div class="doorbell-call-card" @click=${(event) => event.stopPropagation()}>
          <div class="doorbell-call-rings" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
          <div class="doorbell-call-visual">
            ${call.cameraId ? this._renderCameraLive(call.cameraId, call.picture, "is-doorbell-call") : call.picture ? b2`<img src=${call.picture} alt="" />` : b2`<span class="doorbell-call-bell">${icon("bell", 44)}</span>`}
          </div>
          <div class="doorbell-call-eyebrow">
            ${icon("bell", 12)} ${t3(lang, "doorbell.call_title")}
          </div>
          <div class="doorbell-call-title">${t3(lang, "doorbell.call_subtitle")}</div>
          <div class="doorbell-call-sub">
            ${formatTime(call.startedAt, lang)} · ${call.cameraId ? entityLabel(this._config, this.hass, call.cameraId) : t3(lang, "doorbell.ring")}
          </div>
          <div class="doorbell-call-options">
            ${((_a2 = call.doorbell) == null ? void 0 : _a2.battery) ? b2`<div class="doorbell-battery">
                  <span class="doorbell-battery-ring">${icon("battery", 15)}</span>
                  <span class="doorbell-battery-copy">
                    <span>${t3(lang, "control.battery")}</span>
                    <strong>${stateValue(this.hass, call.doorbell.battery)}%</strong>
                  </span>
                </div>` : ""}
            ${((_b = call.doorbell) == null ? void 0 : _b.recording_mode) ? this._renderDoorbellSelect(call.doorbell.recording_mode, t3(lang, "doorbell.recording_mode"), "record") : ""}
            ${((_c = call.doorbell) == null ? void 0 : _c.night_vision) ? this._renderDoorbellSelect(call.doorbell.night_vision, t3(lang, "doorbell.night_vision"), "moon") : ""}
            ${((_d = call.doorbell) == null ? void 0 : _d.video) ? b2`<button class="doorbell-switch ${isOn(this.hass, call.doorbell.video) ? "is-on" : ""}" @click=${() => this._toggleSwitch(call.doorbell.video)}>
                  <span class="doorbell-switch-icon">${icon("video", 15)}</span>
                  <span class="doorbell-switch-copy">
                    <span>${t3(lang, "doorbell.video")}</span>
                    <small>${isOn(this.hass, call.doorbell.video) ? t3(lang, "media.on") : t3(lang, "media.off")}</small>
                  </span>
                  <span class="toggle-track"><span></span></span>
                </button>` : ""}
          </div>
          <div class="doorbell-call-actions">
            ${call.cameraId ? b2`<button class="doorbell-call-primary" @click=${this._openDoorbellCamera}>
                  ${icon("video", 14)} ${t3(lang, "doorbell.open_camera")}
                </button>` : ""}
            <button class="doorbell-call-stop" @click=${this._stopDoorbellCall}>
              ${t3(lang, "doorbell.stop")}
            </button>
          </div>
        </div>
      </div>
    `;
  }
  _renderDoorbellSelect(entityId, fallbackLabel, iconName) {
    var _a2;
    const state = getState(this.hass, entityId);
    if (!state || !this._isActiveEntity(state, entityId)) return A;
    const options = Array.isArray((_a2 = state.attributes) == null ? void 0 : _a2.options) ? state.attributes.options : [];
    const current = state.state;
    return b2`
      <div class="doorbell-select">
        <div class="doorbell-select-head">
          <span class="doorbell-select-icon">${icon(iconName, 14)}</span>
          <span class="doorbell-select-label">${entityLabel(this._config, this.hass, entityId) || fallbackLabel}</span>
          <span class="doorbell-select-value">${current}</span>
        </div>
        ${options.length ? b2`<div class="doorbell-options">
              ${options.map(
      (option) => b2`<button
                  class="doorbell-option ${option === current ? "is-active" : ""}"
                  @click=${() => this._selectOption(entityId, option)}
                >${option}</button>`
    )}
            </div>` : ""}
      </div>
    `;
  }
  _renderDoorbellSection(doorbell) {
    var _a2, _b, _c, _d, _e;
    if (!this._config.features.doorbell || !doorbell) return A;
    const ids = doorbellEntityIds(doorbell);
    const activeIds = this._activeIds(ids);
    if (activeIds.length === 0) return A;
    const pictureId = doorbell.picture;
    const batteryId = doorbell.battery;
    const videoId = doorbell.video;
    const picture = pictureId ? getState(this.hass, pictureId) : null;
    const cameraId = doorbell.camera;
    const cameraState = cameraId ? getState(this.hass, cameraId) : null;
    const batteryState = batteryId ? getState(this.hass, batteryId) : null;
    const videoState = videoId ? getState(this.hass, videoId) : null;
    const battery = batteryState && this._isActiveEntity(batteryState, batteryId) ? batteryState : null;
    const video = videoState && this._isActiveEntity(videoState, videoId) ? videoState : null;
    const cameraPicture = ((_a2 = cameraState == null ? void 0 : cameraState.attributes) == null ? void 0 : _a2.entity_picture) || ((_b = cameraState == null ? void 0 : cameraState.attributes) == null ? void 0 : _b.picture) || null;
    const cameraPictureUrl = cameraPicture ? `${cameraPicture}${cameraPicture.includes("?") ? "&" : "?"}v=${encodeURIComponent(`${this._cameraNonce}-${cameraState.last_updated || cameraState.last_changed || ""}`)}` : null;
    const pictureUrl = ((_c = picture == null ? void 0 : picture.attributes) == null ? void 0 : _c.entity_picture) || ((_d = picture == null ? void 0 : picture.attributes) == null ? void 0 : _d.picture) || cameraPictureUrl || null;
    const rawEventType = ((_e = picture == null ? void 0 : picture.attributes) == null ? void 0 : _e.event_type) || ((picture == null ? void 0 : picture.state) && !["unknown", "unavailable"].includes(picture.state) ? picture.state : null);
    const eventType = rawEventType === "ring" ? t3(this._lang(), "doorbell.ring") : rawEventType;
    const lastChanged = picture == null ? void 0 : picture.last_changed;
    const batteryValue = battery ? formatSensorValue(this.hass, batteryId, this._lang()) : null;
    const batteryPercent = battery ? Number(battery.state) : NaN;
    const videoOn = (video == null ? void 0 : video.state) === "on";
    return b2`
      ${this._renderSection(
      t3(this._lang(), "section.doorbell"),
      b2`
          <div class="doorbell-card">
            <div class="doorbell-visual ${pictureUrl ? "has-image" : ""}">
              ${pictureUrl ? b2`<img src=${pictureUrl} alt="" />` : b2`<span class="doorbell-poster">${icon("bell", 46)}</span>`}
              <span class="doorbell-live">${icon("video", 11)} ${t3(this._lang(), "label.live")}</span>
              <span class="doorbell-visual-caption">
                <strong>${eventType || t3(this._lang(), "doorbell.no_event")}</strong>
                <small>${lastChanged ? relativeTime(lastChanged, this._lang()) : t3(this._lang(), "label.no_data")}</small>
              </span>
            </div>
            <div class="doorbell-controls">
              ${battery ? b2`<div class="doorbell-battery" style=${`--battery:${Number.isFinite(batteryPercent) ? clamp(batteryPercent, 0, 100) : 0}%`}>
                    <span class="doorbell-battery-ring">${icon("battery", 16)}</span>
                    <span class="doorbell-battery-copy">
                      <span>${t3(this._lang(), "control.battery")}</span>
                      <strong>${batteryValue.value}${batteryValue.unit}</strong>
                    </span>
                  </div>` : ""}
              ${doorbell.recording_mode ? this._renderDoorbellSelect(doorbell.recording_mode, t3(this._lang(), "doorbell.recording_mode"), "record") : ""}
              ${doorbell.night_vision ? this._renderDoorbellSelect(doorbell.night_vision, t3(this._lang(), "doorbell.night_vision"), "moon") : ""}
              ${video ? b2`<button class="doorbell-switch ${videoOn ? "is-on" : ""}" @click=${() => this._toggleSwitch(videoId)}>
                    <span class="doorbell-switch-icon">${icon("video", 15)}</span>
                    <span class="doorbell-switch-copy">
                      <span>${t3(this._lang(), "doorbell.video")}</span>
                      <small>${videoOn ? t3(this._lang(), "media.on") : t3(this._lang(), "media.off")}</small>
                    </span>
                    <span class="toggle-track"><span></span></span>
                  </button>` : ""}
            </div>
          </div>
        `,
      this._entityCount(activeIds.length)
    )}
    `;
  }
  _weatherEntity() {
    var _a2;
    if (!this.hass) return null;
    const configured = (_a2 = this._config.global) == null ? void 0 : _a2.weather;
    if (configured) return configured;
    return Object.keys(this.hass.states || {}).find(
      (entityId) => entityId.startsWith("weather.")
    ) || null;
  }
  async _loadWeatherForecast(force = false) {
    if (!this._config.features.weather) return;
    const entityId = this._weatherEntity();
    if (!entityId || this._weatherLoading) return;
    if (!force && this._weatherForecastEntity === entityId && this._weatherForecast !== null) {
      return;
    }
    this._weatherLoading = true;
    this._weatherError = false;
    try {
      const response = await this.hass.callService(
        "weather",
        "get_forecasts",
        { entity_id: entityId, type: "daily" },
        void 0,
        false,
        true
      );
      this._weatherForecast = this._extractForecast(response, entityId).slice(0, 5);
      this._weatherForecastEntity = entityId;
    } catch (error) {
      console.debug("[Zurlii Home] weather forecast unavailable", error);
      this._weatherError = true;
      this._weatherForecast = [];
      this._weatherForecastEntity = entityId;
    } finally {
      this._weatherLoading = false;
    }
  }
  _extractForecast(response, entityId) {
    const payload = (response == null ? void 0 : response.response) || response;
    if (!payload) return [];
    if (Array.isArray(payload)) return payload;
    const bucket = payload[entityId] ?? payload;
    if (Array.isArray(bucket == null ? void 0 : bucket.forecast)) return bucket.forecast;
    if (Array.isArray(payload == null ? void 0 : payload.forecast)) return payload.forecast;
    return [];
  }
  _energyIds() {
    var _a2;
    const ids = new Set(((_a2 = this._config.global) == null ? void 0 : _a2.energy) || []);
    for (const room2 of this._config.rooms) {
      for (const entityId of room2.entities.appliances || []) ids.add(entityId);
    }
    return this._activeIds([...ids]);
  }
  _mediaGroups() {
    return this._config.rooms.map((room2) => ({
      room: room2,
      media: this._activeIds(room2.entities.media || []),
      remotes: this._activeIds(room2.entities.remote || []),
      channels: this._activeIds(room2.entities.sensors || []).filter(
        (id) => String(id).includes("channel")
      )
    })).filter((entry) => entry.media.length || entry.remotes.length);
  }
  _printerEntities(printer) {
    if (!printer) return {};
    const explicit = printer.entities || {};
    if (Object.keys(explicit).length) return explicit;
    if (printer.auto_discover === false) return {};
    const needle = String(printer.device_name || "K1C").toLowerCase();
    const registry = this.hass.entities ? Array.isArray(this.hass.entities) ? this.hass.entities : Object.values(this.hass.entities) : [];
    const devices = this.hass.devices ? Object.values(this.hass.devices) : [];
    const deviceIds = new Set(
      devices.filter(
        (device) => `${device.name || ""} ${device.name_by_user || ""} ${device.model || ""}`.toLowerCase().includes(needle)
      ).map((device) => device.id)
    );
    let candidates = registry.filter((entry) => !entry.disabled_by && !entry.hidden_by).filter(
      (entry) => entry.device_id && deviceIds.has(entry.device_id) || String(entry.entity_id || "").toLowerCase().includes(needle.replace(/\s+/g, "_")) || String(entry.entity_id || "").toLowerCase().includes(needle)
    ).map((entry) => {
      var _a2;
      const state = getState(this.hass, entry.entity_id);
      return {
        entity_id: entry.entity_id,
        domain: entry.entity_id.split(".")[0],
        name: String(
          entry.name || entry.original_name || ((_a2 = state == null ? void 0 : state.attributes) == null ? void 0 : _a2.friendly_name) || entry.entity_id
        ).toLowerCase()
      };
    });
    if (candidates.length === 0) {
      candidates = Object.entries(this.hass.states || {}).filter(([entityId]) => entityId.toLowerCase().includes(needle)).map(([entityId, state]) => {
        var _a2;
        return {
          entity_id: entityId,
          domain: entityId.split(".")[0],
          name: String(((_a2 = state.attributes) == null ? void 0 : _a2.friendly_name) || entityId).toLowerCase()
        };
      });
    }
    const used = /* @__PURE__ */ new Set();
    const out = {};
    for (const [key, patterns, domains] of PRINTER_ENTITY_MAP) {
      const found = candidates.find(
        (candidate) => !used.has(candidate.entity_id) && domains.includes(candidate.domain) && patterns.some((pattern) => candidate.name.includes(pattern))
      );
      if (found) {
        out[key] = found.entity_id;
        used.add(found.entity_id);
      }
    }
    return out;
  }
  _printerAction(entities, key, service, extra = {}) {
    const entityId = entities[key];
    if (!entityId) return;
    const domain = entityId.split(".")[0];
    this._service(domain, service, { entity_id: entityId, ...extra });
  }
  _stepNumber(entityId, delta) {
    const state = getState(this.hass, entityId);
    const current = Number(state == null ? void 0 : state.state);
    if (!Number.isFinite(current)) return;
    this._service(entityId.split(".")[0], "set_value", {
      entity_id: entityId,
      value: Math.round((current + delta) * 100) / 100
    });
  }
  _renderPrinterTemp(label, currentId, targetId, iconName) {
    var _a2;
    if (!currentId && !targetId) return A;
    const current = currentId ? formatSensorValue(this.hass, currentId, this._lang()) : null;
    const targetState = targetId ? getState(this.hass, targetId) : null;
    const unit = (current == null ? void 0 : current.unit) || ((_a2 = targetState == null ? void 0 : targetState.attributes) == null ? void 0 : _a2.unit_of_measurement) || "\xB0C";
    return b2`
      <div class="printer-temp">
        <span class="printer-temp-icon">${icon(iconName, 14)}</span>
        <span class="printer-temp-copy">
          <span class="printer-temp-label">${label}</span>
          <strong>${(current == null ? void 0 : current.value) || "\u2014"}<small>${unit}</small></strong>
        </span>
        <span class="printer-temp-target">${(targetState == null ? void 0 : targetState.state) ?? "\u2014"}<small>${unit}</small></span>
      </div>
    `;
  }
  _renderPrinterNumber(entities, key, label, step, iconName = "tune") {
    var _a2;
    const entityId = entities[key];
    if (!entityId) return A;
    const state = getState(this.hass, entityId);
    return b2`
      <div class="printer-number">
        <span class="printer-number-icon">${icon(iconName, 13)}</span>
        <span class="printer-number-label">${label}</span>
        <button @click=${() => this._stepNumber(entityId, -step)} aria-label="−">${icon("minus", 12)}</button>
        <strong>${(state == null ? void 0 : state.state) ?? "\u2014"}<small>${((_a2 = state == null ? void 0 : state.attributes) == null ? void 0 : _a2.unit_of_measurement) || ""}</small></strong>
        <button @click=${() => this._stepNumber(entityId, step)} aria-label="+">${icon("plus", 12)}</button>
      </div>
    `;
  }
  _renderPrinterSection(printer) {
    var _a2, _b, _c;
    if (!this._config.features.printer || !printer) return A;
    const lang = this._lang();
    const raw = this._printerEntities(printer);
    const entities = Object.fromEntries(
      Object.entries(raw).filter(([, entityId]) => {
        const state = getState(this.hass, entityId);
        return state && (!this._config.features.hide_unavailable || this._isActiveEntity(state, entityId));
      })
    );
    if (Object.keys(entities).length === 0) {
      return this._renderSection(
        t3(lang, "section.printer"),
        b2`<div class="empty-panel">
          <span class="empty-icon">${icon("printer", 21)}</span>
          <div class="empty-copy">
            <div class="empty-title">${t3(lang, "printer.empty_title")}</div>
            <div class="empty-text">${t3(lang, "printer.empty_body")}</div>
            <code class="family-map-hint">${t3(lang, "printer.map_hint", { name: printer.device_name || "K1C" })}</code>
          </div>
        </div>`
      );
    }
    const status = entities.print_status ? getState(this.hass, entities.print_status) : null;
    const progressState = entities.print_progress ? getState(this.hass, entities.print_progress) : null;
    const progress = clamp(Number(progressState == null ? void 0 : progressState.state) || 0, 0, 100);
    const objectName = entities.current_object ? stateValue(this.hass, entities.current_object) : null;
    const model = entities.model ? stateValue(this.hass, entities.model) : printer.device_name || "K1C";
    const imageEntity = entities.printer_camera || entities.current_print_preview;
    const imageState = imageEntity ? getState(this.hass, imageEntity) : null;
    const image = ((_a2 = imageState == null ? void 0 : imageState.attributes) == null ? void 0 : _a2.entity_picture) || ((_b = imageState == null ? void 0 : imageState.attributes) == null ? void 0 : _b.picture);
    const imageVersion = (imageState == null ? void 0 : imageState.last_updated) || (imageState == null ? void 0 : imageState.last_changed) || "";
    const imageSrc = image && !image.startsWith("data:") ? `${image}${image.includes("?") ? "&" : "?"}v=${encodeURIComponent(String(imageVersion))}` : image;
    const timeLeft = entities.print_time_left ? formatSensorValue(this.hass, entities.print_time_left, lang) : null;
    const layers = entities.working_layer || entities.total_layers ? `${entities.working_layer ? stateValue(this.hass, entities.working_layer) : "\u2014"} / ${entities.total_layers ? stateValue(this.hass, entities.total_layers) : "\u2014"}` : null;
    const filament = entities.filament_status ? stateText(this.hass, entities.filament_status, lang) : null;
    const usedMaterial = entities.used_material_length ? formatSensorValue(this.hass, entities.used_material_length, lang) : null;
    const objectCount = entities.object_count ? stateValue(this.hass, entities.object_count) : null;
    const jobTime = entities.print_job_time ? formatSensorValue(this.hass, entities.print_job_time, lang) : null;
    const flowRate = entities.flow_rate || entities.real_time_flow ? formatSensorValue(this.hass, entities.flow_rate || entities.real_time_flow, lang) : null;
    const statusKey = (status == null ? void 0 : status.state) ? `printer.status.${status.state}` : "";
    const statusLabel = (status == null ? void 0 : status.state) ? hasKey(lang, statusKey) ? t3(lang, statusKey) : String(status.state).replace(/_/g, " ") : t3(lang, "status.unknown");
    const live = ["printing", "heating", "preheating", "leveling"].includes(status == null ? void 0 : status.state);
    return this._renderSection(
      t3(lang, "section.printer"),
      b2`
        <div class="printer-card">
          <div class="printer-hero">
            <div class="printer-visual">
              ${image ? b2`<img src=${imageSrc} alt="" />` : b2`<span class="printer-visual-icon">${icon("printer", 46)}</span>`}
              <span class="printer-model">${model || "K1C"}</span>
            </div>
            <div class="printer-summary">
              <div class="printer-status-line">
                <span class="printer-live ${live ? "is-live" : ""}"></span>
                <strong>${statusLabel}</strong>
                ${live ? b2`<span class="printer-live-label">${t3(lang, "label.live")}</span>` : ""}
              </div>
              <div class="printer-job">${objectName || t3(lang, "printer.no_object")}</div>
              <div class="printer-progress-row">
                <span>${t3(lang, "printer.progress")}</span>
                <strong>${progress}%</strong>
              </div>
              <div class="printer-progress"><span style=${`width:${progress}%`}></span></div>
              <div class="printer-summary-meta">
                ${timeLeft ? b2`<span>${icon("clock", 12)} ${timeLeft.value} ${timeLeft.unit}</span>` : ""}
                ${layers ? b2`<span>${icon("layers", 12)} ${layers}</span>` : ""}
              </div>
            </div>
          </div>
          <div class="printer-temp-grid">
            ${this._renderPrinterTemp(t3(lang, "printer.nozzle"), entities.nozzle_temperature, entities.nozzle_target, "thermometer")}
            ${this._renderPrinterTemp(t3(lang, "printer.bed"), entities.bed_temperature, entities.bed_target, "radiator")}
            ${this._renderPrinterTemp(t3(lang, "printer.chamber"), entities.chamber_temperature, null, "thermometer")}
          </div>
          ${((_c = entities.print_control) == null ? void 0 : _c.startsWith("select.")) ? this._renderDoorbellSelect(
        entities.print_control,
        t3(lang, "printer.print_control"),
        "printer"
      ) : ""}
          <div class="printer-action-row">
            ${entities.pause_print ? b2`<button class="printer-action" @click=${() => this._printerAction(entities, "pause_print", "press")}>${icon("pause", 14)} ${t3(lang, "printer.pause")}</button>` : ""}
            ${entities.resume_print ? b2`<button class="printer-action" @click=${() => this._printerAction(entities, "resume_print", "press")}>${icon("play", 14)} ${t3(lang, "printer.resume")}</button>` : ""}
            ${entities.stop_print ? b2`<button class="printer-action is-danger" @click=${() => this._printerAction(entities, "stop_print", "press")}>${icon("stop", 14)} ${t3(lang, "printer.stop")}</button>` : ""}
            ${entities.home ? b2`<button class="printer-action" @click=${() => this._printerAction(entities, "home", "press")}>${icon("home", 14)} ${t3(lang, "printer.home")}</button>` : ""}
            ${entities.reconnect ? b2`<button class="printer-action" @click=${() => this._printerAction(entities, "reconnect", "press")}>${icon("refresh", 14)} ${t3(lang, "printer.reconnect")}</button>` : ""}
          </div>
          <div class="printer-tuning">
            ${this._renderPrinterNumber(entities, "print_speed", t3(lang, "printer.speed"), 5, "speedometer")}
            ${this._renderPrinterNumber(entities, "flow_factor", t3(lang, "printer.flow"), 0.01, "wind")}
            ${this._renderPrinterNumber(entities, "speed_factor", t3(lang, "printer.speed_factor"), 0.05, "gauge")}
          </div>
          <div class="printer-toggles">
            ${entities.light ? b2`<button class="printer-toggle ${isOn(this.hass, entities.light) ? "is-on" : ""}" @click=${() => this._printerAction(entities, "light", "toggle")}>${icon("light-on", 14)} ${t3(lang, "printer.light")}</button>` : ""}
            ${["case_fan", "model_fan", "side_fan"].map(
        (key) => entities[key] ? b2`<button class="printer-toggle ${isOn(this.hass, entities[key]) ? "is-on" : ""}" @click=${() => this._printerAction(entities, key, "toggle")}>${icon("fan", 14)} ${entityLabel(this._config, this.hass, entities[key])}</button>` : ""
      )}
          </div>
          <div class="printer-stats">
            ${filament ? b2`<span><small>${t3(lang, "printer.filament")}</small><strong>${filament}</strong></span>` : ""}
            ${usedMaterial ? b2`<span><small>${t3(lang, "printer.used_material")}</small><strong>${usedMaterial.value} ${usedMaterial.unit}</strong></span>` : ""}
            ${objectCount ? b2`<span><small>${t3(lang, "printer.objects")}</small><strong>${objectCount}</strong></span>` : ""}
            ${jobTime ? b2`<span><small>${t3(lang, "printer.job_time")}</small><strong>${jobTime.value} ${jobTime.unit}</strong></span>` : ""}
            ${flowRate ? b2`<span><small>${t3(lang, "printer.flow_rate")}</small><strong>${flowRate.value} ${flowRate.unit}</strong></span>` : ""}
            ${entities.max_nozzle_temperature ? b2`<span><small>${t3(lang, "printer.max_nozzle")}</small><strong>${stateValue(this.hass, entities.max_nozzle_temperature)}°C</strong></span>` : ""}
            ${entities.max_bed_temperature ? b2`<span><small>${t3(lang, "printer.max_bed")}</small><strong>${stateValue(this.hass, entities.max_bed_temperature)}°C</strong></span>` : ""}
            ${entities.max_chamber_temperature ? b2`<span><small>${t3(lang, "printer.max_chamber")}</small><strong>${stateValue(this.hass, entities.max_chamber_temperature)}°C</strong></span>` : ""}
          </div>
        </div>
      `,
      this._entityCount(Object.keys(entities).length)
    );
  }
  _routinePlan(id) {
    const available = (group) => this._config.rooms.flatMap((room2) => room2.entities[group] || []).filter((entityId) => getState(this.hass, entityId));
    const actions = [];
    const groups = [];
    const add = (group, ids, domain, service, extra = {}) => {
      if (!ids.length) return;
      actions.push({ domain, service, data: { entity_id: ids, ...extra } });
      groups.push({ group, count: ids.length });
    };
    const lights = available("lights");
    const covers = available("covers");
    const climate = available("climate");
    const media = available("media");
    if (id === "cinema") {
      add("lights", lights, "light", "turn_on", { brightness_pct: 15 });
      add("covers", covers, "cover", "close_cover");
      add("climate", climate, "climate", "set_temperature", { temperature: 22 });
      add("media", media, "media_player", "turn_on");
    } else if (id === "night" || id === "away") {
      add("lights", lights, "light", "turn_off");
      add("covers", covers, "cover", "close_cover");
      add("climate", climate, "climate", "turn_off");
      add("media", media, "media_player", "turn_off");
    } else if (id === "morning") {
      add("lights", lights, "light", "turn_on", { brightness_pct: 30 });
      add("covers", covers, "cover", "set_cover_position", { position: 30 });
      add("climate", climate, "climate", "set_temperature", { temperature: 22 });
    }
    return {
      actions,
      groups,
      count: groups.reduce((total, group) => total + group.count, 0)
    };
  }
  async _applyRoutine(routine) {
    if (this._routineBusy) return;
    const plan = this._routinePlan(routine.id);
    const lang = this._lang();
    if (!plan.actions.length) {
      this._showToast(t3(lang, "routines.no_actions"), "error");
      return;
    }
    this._routineBusy = routine.id;
    try {
      await Promise.all(
        plan.actions.map(
          (action) => this.hass.callService(action.domain, action.service, action.data)
        )
      );
      this._showToast(
        t3(lang, "routines.applied", { name: t3(lang, routine.title) })
      );
    } catch (error) {
      console.error("[Zurlii Home] routine", routine.id, error);
      this._showToast(t3(lang, "toast.error"), "error");
    } finally {
      this._routineBusy = null;
    }
  }
  _renderTopbar() {
    var _a2;
    const lang = this._lang();
    const global = this._config.global;
    const personState = stateText(this.hass, global.person, lang);
    const personName = ((_a2 = this._config.labels) == null ? void 0 : _a2[global.person]) || entityLabel(this._config, this.hass, global.person);
    const wanState = stateValue(this.hass, global.network.wan);
    const wanOnline = wanState === "on";
    const nextSun = this._nextSunEvent();
    const weatherId = this._weatherEntity();
    const weatherState = weatherId ? getState(this.hass, weatherId) : null;
    const weatherTemp = weatherTemperature(weatherState);
    const weatherCondition = weatherState == null ? void 0 : weatherState.state;
    const weatherMeta = weatherCondition && !["unavailable", "unknown"].includes(weatherCondition) ? weatherConditionLabel(lang, weatherCondition) : t3(lang, "status.unavailable");
    return b2`
      <header class="topbar">
        <button class="brand" @click=${this._goHome} aria-label=${t3(lang, "nav.home")}>
          <span class="brand-mark">${icon("home-lightning", 21)}</span>
          <span class="brand-text">
            <span class="brand-title">${this._config.title}</span>
            <span class="brand-sub">${this._config.subtitle}</span>
          </span>
        </button>
        <div class="top-actions">
          <button
            type="button"
            class="status-chip chip-person"
            @click=${() => this._openSheet({ type: "system" })}
            aria-label=${`${personName}: ${personState}`}
            title=${t3(lang, "nav.system")}
          >
            <span class="chip-icon">${icon("account", 16)}</span>
            <span class="chip-label">
              <span class="chip-value">${personName}</span>
              <span class="chip-meta">${personState}</span>
            </span>
          </button>
          ${weatherState ? b2`<button
                type="button"
                class="status-chip chip-weather"
                @click=${() => this._openSheet({ type: "weather" })}
                aria-label=${`${t3(lang, "nav.weather")}: ${weatherMeta}`}
                title=${t3(lang, "nav.weather")}
              >
                <span class="chip-icon">
                  ${icon(
      weatherCondition && !["unavailable", "unknown"].includes(weatherCondition) ? weatherConditionIcon(weatherCondition) : "alert",
      16
    )}
                </span>
                <span class="chip-label">
                  <span class="chip-value">${weatherTemp === null ? "\u2014" : `${Math.round(weatherTemp)}\xB0`}</span>
                  <span class="chip-meta">${weatherMeta}</span>
                </span>
              </button>` : ""}
          <button
            type="button"
            class="status-chip chip-wan"
            @click=${() => this._openSheet({ type: "system" })}
            aria-label=${`WAN: ${wanOnline ? t3(lang, "network.connected") : t3(lang, "network.disconnected")}`}
            title=${t3(lang, "nav.system")}
          >
            <span class="status-dot ${wanOnline ? "" : "is-off"}"></span>
            <span class="chip-label">
              <span class="chip-value">${wanOnline ? t3(lang, "network.connected") : t3(lang, "network.disconnected")}</span>
              <span class="chip-meta">WAN</span>
            </span>
          </button>
          <button
            type="button"
            class="status-chip chip-sun"
            @click=${() => this._openSheet({ type: "system" })}
            aria-label=${(nextSun == null ? void 0 : nextSun.label) || t3(lang, "sun.setting")}
            title=${t3(lang, "nav.system")}
          >
            <span class="chip-icon">${icon((nextSun == null ? void 0 : nextSun.icon) || "sunset", 16)}</span>
            <span class="chip-label">
              <span class="chip-value">${(nextSun == null ? void 0 : nextSun.time) || "\u2014"}</span>
              <span class="chip-meta">${(nextSun == null ? void 0 : nextSun.label) || t3(lang, "sun.setting")}</span>
            </span>
          </button>
          <button
            class="system-btn music-btn ${this._musicIsPlaying() ? "is-playing" : ""}"
            @click=${() => this._openSheet({ type: "music" })}
            aria-label=${t3(lang, "nav.music")}
            title=${t3(lang, "nav.music")}
          >
            ${icon("music", 18)}
          </button>
          <button
            class="system-btn"
            @click=${() => this._openSheet({ type: "assistant" })}
            aria-label=${t3(lang, "nav.assistant")}
            title=${t3(lang, "nav.assistant")}
          >
            ${icon("mic", 18)}
          </button>
          <button
            class="system-btn"
            @click=${() => this._openSheet({ type: "controls" })}
            aria-label=${t3(lang, "nav.controls")}
            title=${t3(lang, "nav.controls")}
          >
            ${icon("tune", 18)}
          </button>
          <button
            class="system-btn"
            @click=${() => this._openSheet({ type: "system" })}
            aria-label=${t3(lang, "nav.system")}
            title=${t3(lang, "nav.system")}
          >
            ${icon("system", 19)}
          </button>
        </div>
      </header>
    `;
  }
  _renderRoomFloat(room2) {
    const lang = this._lang();
    const count = this._roomDisplayCount(room2);
    const active = this._roomActiveCount(room2);
    return b2`
      <button
        class="room-float"
        @click=${() => this._openRoom(room2)}
        aria-label=${`${room2.name} \u2014 ${t3(lang, "label.open_room")}`}
      >
        <span class="room-float-thumb">
          <img src=${roomBackground(this._config, room2)} alt="" />
        </span>
        <span class="room-float-copy">
          <span class="room-float-name">${room2.name}</span>
          <span class="room-float-meta">
            ${count ? `${t3(lang, count === 1 ? "label.room_one" : "label.room_entities", { count })} \xB7 ${t3(lang, "label.room_active", { count: active })}` : t3(lang, "label.room_empty")}
          </span>
        </span>
        <span class="room-float-chevron">${icon("chevronRight", 16)}</span>
      </button>
    `;
  }
  _renderStats() {
    const lang = this._lang();
    const global = this._config.global;
    const zone = stateValue(this.hass, global.zone);
    const personState = stateText(this.hass, global.person, lang);
    const wanOnline = stateValue(this.hass, global.network.wan) === "on";
    const ip = stateValue(this.hass, global.network.ip);
    const nextSun = this._nextSunEvent();
    const updates = this._updatesAvailable();
    const updatesText = updates ? t3(lang, updates === 1 ? "status.update_one" : "status.updates", { count: updates }) : t3(lang, "update.up_to_date");
    return b2`
      <div class="stats-grid">
        <div class="stat" style=${accentStyle("green")}>
          <span class="stat-icon">${icon("people", 17)}</span>
          <span class="stat-copy">
            <span class="stat-label">${t3(lang, "label.people_home")}</span>
            <span class="stat-value">${zone === "unavailable" || zone === "unknown" ? "\u2014" : zone}</span>
            <span class="stat-sub">${personState}</span>
          </span>
        </div>
        <div class="stat" style=${accentStyle("blue")}>
          <span class="stat-icon">${icon("wifi", 17)}</span>
          <span class="stat-copy">
            <span class="stat-label">${t3(lang, "network.wan")}</span>
            <span class="stat-value">${wanOnline ? t3(lang, "network.connected") : t3(lang, "network.disconnected")}</span>
            <span class="stat-sub">${ip && ip !== "unavailable" ? ip : "\u2014"}</span>
          </span>
        </div>
        <div class="stat" style=${accentStyle("amber")}>
          <span class="stat-icon">${icon((nextSun == null ? void 0 : nextSun.icon) || "sunset", 17)}</span>
          <span class="stat-copy">
            <span class="stat-label">${t3(lang, "label.next_event_short")}</span>
            <span class="stat-value">${(nextSun == null ? void 0 : nextSun.time) || "\u2014"}</span>
            <span class="stat-sub">${nextSun ? `${nextSun.label} \xB7 ${nextSun.day}` : t3(lang, "status.unavailable")}</span>
          </span>
        </div>
        <div class="stat" style=${accentStyle(updates ? "rose" : "violet")}>
          <span class="stat-icon">${icon("update", 17)}</span>
          <span class="stat-copy">
            <span class="stat-label">${t3(lang, "label.updates")}</span>
            <span class="stat-value">${updates || "0"}</span>
            <span class="stat-sub">${updatesText}</span>
          </span>
        </div>
      </div>
    `;
  }
  _homeCoordinates() {
    var _a2, _b;
    const zone = getState(this.hass, this._config.global.zone);
    const latitude = Number((_a2 = zone == null ? void 0 : zone.attributes) == null ? void 0 : _a2.latitude);
    const longitude = Number((_b = zone == null ? void 0 : zone.attributes) == null ? void 0 : _b.longitude);
    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return null;
    return { latitude, longitude };
  }
  _distanceKm(a3, b3) {
    if (!a3 || !b3) return null;
    const radius = 6371;
    const rad = (value) => value * Math.PI / 180;
    const dLat = rad(b3.latitude - a3.latitude);
    const dLon = rad(b3.longitude - a3.longitude);
    const lat1 = rad(a3.latitude);
    const lat2 = rad(b3.latitude);
    const h3 = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
    return 2 * radius * Math.asin(Math.sqrt(h3));
  }
  _familyMembers() {
    var _a2, _b, _c, _d, _e;
    if (!this._config.features.family) return [];
    const family = this._config.global.family || {};
    let trackers = family.trackers || [];
    if (!trackers.length && family.auto_discover !== false) {
      trackers = Object.keys(this.hass.states || {}).filter(
        (entityId) => entityId.startsWith("person.") || entityId.startsWith("device_tracker.")
      );
    }
    const home = this._homeCoordinates();
    const colors = [
      "#67e8a5",
      "#67b6ff",
      "#ffd166",
      "#ff9cb3",
      "#b3a7ff",
      "#79dcf7",
      "#ffc46b",
      "#ff8296"
    ];
    const members = [];
    const seenNames = /* @__PURE__ */ new Set();
    for (const entityId of uniqueIds(trackers)) {
      const state = getState(this.hass, entityId);
      if (!state || ["unavailable", "unknown"].includes(state.state)) continue;
      const latitude = Number((_a2 = state.attributes) == null ? void 0 : _a2.latitude);
      const longitude = Number((_b = state.attributes) == null ? void 0 : _b.longitude);
      if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) continue;
      const name = entityLabel(this._config, this.hass, entityId);
      if (!name || seenNames.has(`${name}|${latitude.toFixed(4)}|${longitude.toFixed(4)}`)) {
        continue;
      }
      seenNames.add(`${name}|${latitude.toFixed(4)}|${longitude.toFixed(4)}`);
      let batteryValue = ((_c = state.attributes) == null ? void 0 : _c.battery_level) ?? ((_d = state.attributes) == null ? void 0 : _d.battery) ?? ((_e = state.attributes) == null ? void 0 : _e.battery_percentage);
      let battery = Number(batteryValue);
      if (!Number.isFinite(battery)) {
        const nameNeedle = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "_");
        const batteryEntity = Object.entries(this.hass.states || {}).find(
          ([entityId2, candidate]) => {
            var _a3;
            if (!entityId2.startsWith("sensor.")) return false;
            const friendly = String(
              ((_a3 = candidate.attributes) == null ? void 0 : _a3.friendly_name) || ""
            ).toLowerCase();
            return /bater|battery/.test(`${entityId2} ${friendly}`) && (entityId2.includes(nameNeedle) || friendly.includes(name.toLowerCase()));
          }
        );
        if (batteryEntity) battery = Number(batteryEntity[1].state);
      }
      members.push({
        entityId,
        name,
        state,
        latitude,
        longitude,
        battery: Number.isFinite(battery) ? clamp(battery, 0, 100) : null,
        distance: this._distanceKm(home, { latitude, longitude }),
        color: colors[members.length % colors.length],
        initial: name.trim().charAt(0).toUpperCase() || "\u2022"
      });
    }
    return members;
  }
  _tileX(longitude, zoom) {
    return (longitude + 180) / 360 * 2 ** zoom;
  }
  _tileY(latitude, zoom) {
    const rad = latitude * Math.PI / 180;
    return (1 - Math.log(Math.tan(rad) + 1 / Math.cos(rad)) / Math.PI) / 2 * 2 ** zoom;
  }
  _renderFamilyMap(members) {
    const family = this._config.global.family || {};
    const zoom = clamp(Number(family.map_zoom) || 12, 4, 17);
    const home = this._homeCoordinates();
    const center = home || {
      latitude: members.reduce((sum, item) => sum + item.latitude, 0) / members.length,
      longitude: members.reduce((sum, item) => sum + item.longitude, 0) / members.length
    };
    const xtile = this._tileX(center.longitude, zoom);
    const ytile = this._tileY(center.latitude, zoom);
    const baseX = Math.floor(xtile) - 2;
    const baseY = Math.floor(ytile) - 1;
    const centerX = (xtile - baseX) * 256;
    const centerY = (ytile - baseY) * 256;
    const tiles = [];
    if (family.map_tiles !== false) {
      for (let row = 0; row < 3; row += 1) {
        for (let col = 0; col < 5; col += 1) {
          tiles.push({
            key: `${zoom}/${baseX + col}/${baseY + row}`,
            url: `https://tile.openstreetmap.org/${zoom}/${baseX + col}/${baseY + row}.png`,
            left: col * 256,
            top: row * 256
          });
        }
      }
    }
    return b2`
      <div class="family-map">
        <div
          class="family-map-inner"
          style=${`left:calc(50% - ${centerX}px);top:calc(50% - ${centerY}px);`}
        >
          ${family.map_tiles !== false ? tiles.map(
      (tile) => b2`<img
                  class="family-tile"
                  src=${tile.url}
                  alt=""
                  loading="lazy"
                  style=${`left:${tile.left}px;top:${tile.top}px;`}
                  @error=${(event) => {
        event.currentTarget.style.display = "none";
      }}
                />`
    ) : ""}
          <span class="family-map-tint"></span>
          ${home ? b2`<span
                class="family-home-marker"
                style=${`left:${centerX}px;top:${centerY}px;`}
                title=${t3(this._lang(), "family.home")}
              >${icon("home", 15)}</span>` : ""}
          ${members.map((member, index) => {
      let x2 = (this._tileX(member.longitude, zoom) - baseX) * 256;
      let y3 = (this._tileY(member.latitude, zoom) - baseY) * 256;
      if (member.distance !== null && member.distance < 0.15) {
        x2 += (index - 1) * 13;
        y3 -= 9 + index * 2;
      }
      return b2`<button
              class="family-marker"
              style=${`left:${x2}px;top:${y3}px;--member-color:${member.color};`}
              @click=${() => this._openMoreInfo(member.entityId)}
              title=${member.name}
            >
              <span class="family-marker-dot">${member.initial}</span>
              <span class="family-marker-label">${member.name}</span>
            </button>`;
    })}
        </div>
        <span class="family-map-vignette"></span>
        <a class="family-map-attribution" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">
          ${t3(this._lang(), "family.attribution")}
        </a>
      </div>
    `;
  }
  _cameraEntities() {
    var _a2, _b;
    if (!this._config.features.cameras) return [];
    const configured = this._config.global.cameras || [];
    const autoDiscover = configured.length === 0;
    const registry = this.hass.entities;
    const ids = uniqueIds(
      autoDiscover ? Object.keys(this.hass.states || {}).filter(
        (entityId) => entityId.startsWith("camera.")
      ) : configured
    );
    const cameras = [];
    for (const entityId of ids) {
      const state = getState(this.hass, entityId);
      if (!state) continue;
      const entry = registry && !Array.isArray(registry) ? registry[entityId] : null;
      if ((entry == null ? void 0 : entry.hidden_by) || (entry == null ? void 0 : entry.disabled_by)) continue;
      const name = entityLabel(this._config, this.hass, entityId);
      const isPrinter = /k1c|creality|printer/i.test(`${entityId} ${name}`);
      if (autoDiscover && isPrinter) continue;
      const isDoorbell = /soner|doorbell|poart|gate/i.test(`${entityId} ${name}`);
      const rawPicture = ((_a2 = state.attributes) == null ? void 0 : _a2.entity_picture) || (((_b = state.attributes) == null ? void 0 : _b.access_token) ? `/api/camera_proxy/${entityId}?token=${state.attributes.access_token}` : "");
      const version = `${this._cameraNonce}-${state.last_updated || state.last_changed || ""}`;
      const picture = rawPicture ? `${rawPicture}${rawPicture.includes("?") ? "&" : "?"}v=${encodeURIComponent(version)}` : "";
      const statusKey = state.state === "recording" ? "camera.recording" : state.state === "streaming" ? "camera.streaming" : state.state === "idle" ? "camera.idle" : null;
      cameras.push({
        entityId,
        name,
        state,
        picture,
        isDoorbell,
        status: statusKey ? t3(this._lang(), statusKey) : ["unavailable", "unknown"].includes(state.state) ? t3(this._lang(), "camera.offline") : state.state
      });
    }
    return cameras.sort(
      (a3, b3) => Number(b3.isDoorbell) - Number(a3.isDoorbell) || a3.name.localeCompare(b3.name, this._lang())
    );
  }
  async _ensureCameraStream() {
    this._cameraStreamChecked = true;
    if (customElements.get("ha-camera-stream")) return;
    if (!window.loadCardHelpers) return;
    try {
      const helpers = await window.loadCardHelpers();
      const firstCamera = this._cameraEntities()[0];
      if (!firstCamera) return;
      const card = helpers.createCardElement({
        type: "camera",
        entity: firstCamera.entityId
      });
      card.hass = this.hass;
      card.style.display = "none";
      document.body.append(card);
      await customElements.whenDefined("ha-camera-stream");
      card.remove();
      this.requestUpdate();
    } catch (error) {
      console.debug("[Zurlii Home] camera stream loader", error);
    }
  }
  _renderCameraLive(entityId, poster = "", extraClass = "") {
    var _a2, _b, _c;
    const state = getState(this.hass, entityId);
    if (!state) return A;
    const rawPoster = poster || ((_a2 = state.attributes) == null ? void 0 : _a2.entity_picture) || ((_b = state.attributes) == null ? void 0 : _b.picture) || "";
    const posterUrl = rawPoster ? `${rawPoster}${rawPoster.includes("?") ? "&" : "?"}v=${encodeURIComponent(`${this._cameraNonce}-${state.last_updated || state.last_changed || ""}`)}` : "";
    const token = (_c = state.attributes) == null ? void 0 : _c.access_token;
    const mjpegUrl = token ? `/api/camera_proxy_stream/${entityId}?token=${encodeURIComponent(token)}` : "";
    return b2`
      <div class="camera-live ${extraClass}">
        ${posterUrl ? b2`<img class="camera-live-poster" src=${posterUrl} alt="" />` : b2`<span class="camera-live-empty">${icon("video", 27)}</span>`}
        ${mjpegUrl ? b2`<img
              class="camera-live-mjpeg"
              src=${mjpegUrl}
              alt=""
              @error=${(event) => {
      event.currentTarget.style.display = "none";
    }}
            />` : ""}
        <ha-camera-stream
          .hass=${this.hass}
          .stateObj=${state}
          .muted=${true}
          .controls=${false}
          .aspectRatio=${16 / 9}
          .fitMode=${"cover"}
        ></ha-camera-stream>
      </div>
    `;
  }
  _openCameraSheet(entityId) {
    const state = getState(this.hass, entityId);
    if (!state) {
      this._showToast(t3(this._lang(), "toast.unavailable"), "error");
      return;
    }
    this._openSheet({ type: "camera", cameraId: entityId });
  }
  _renderCameraCard(camera) {
    const lang = this._lang();
    return b2`
      <div
        class="camera-card ${camera.isDoorbell ? "is-doorbell" : ""}"
        role="button"
        tabindex="0"
        @click=${() => this._openCameraSheet(camera.entityId)}
        @keydown=${(event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        this._openCameraSheet(camera.entityId);
      }
    }}
        title=${camera.name}
      >
        <div class="camera-frame">
          ${this._renderCameraLive(camera.entityId, camera.picture, "is-card")}
          <span class="camera-badge">
            ${icon(camera.isDoorbell ? "bell" : "video", 10)}
            ${camera.isDoorbell ? t3(lang, "camera.doorbell") : camera.status}
          </span>
        </div>
        <div class="camera-copy">
          <span class="camera-name">${camera.name}</span>
          <span class="camera-sub">${camera.status}${camera.picture ? "" : ` \xB7 ${t3(lang, "camera.no_feed")}`}</span>
          <span class="camera-chevron">${icon("chevronRight", 13)}</span>
        </div>
      </div>
    `;
  }
  _renderCamerasSection(compact = false) {
    if (!this._config.features.cameras) return A;
    const lang = this._lang();
    const cameras = this._cameraEntities();
    if (cameras.length === 0) {
      if (compact) return A;
      return this._renderSection(
        t3(lang, "section.cameras_live"),
        b2`<div class="empty-panel">
          <span class="empty-icon">${icon("video", 21)}</span>
          <div class="empty-copy">
            <div class="empty-title">${t3(lang, "camera.empty_title")}</div>
            <div class="empty-text">${t3(lang, "camera.empty_body")}</div>
            <code class="family-map-hint">${t3(lang, "camera.map_hint")}</code>
          </div>
        </div>`,
        t3(lang, "label.cameras", { count: 0 })
      );
    }
    const visible = compact ? cameras.slice(0, 4) : cameras;
    const actions = compact && cameras.length > visible.length ? b2`<button class="ghost-btn" @click=${() => this._openSheet({ type: "cameras" })}>${t3(lang, "action.see_all")}</button>` : null;
    return this._renderSection(
      t3(lang, "section.cameras_live"),
      b2`<div class="camera-grid ${compact ? "is-compact" : ""}">
        ${visible.map((camera) => this._renderCameraCard(camera))}
      </div>`,
      t3(lang, "label.cameras", { count: cameras.length }),
      actions
    );
  }
  _renderFamilySection() {
    if (!this._config.features.family) return A;
    const lang = this._lang();
    const members = this._familyMembers();
    if (members.length === 0) {
      return this._renderSection(
        t3(lang, "section.family"),
        b2`<div class="family-empty">
          <span class="family-empty-icon">${icon("people", 22)}</span>
          <div>
            <div class="empty-title">${t3(lang, "family.empty_title")}</div>
            <div class="empty-text">${t3(lang, "family.empty_body")}</div>
            <code class="family-map-hint">${t3(lang, "family.map_hint")}</code>
          </div>
        </div>`
      );
    }
    return this._renderSection(
      t3(lang, "section.family"),
      b2`
        ${this._renderFamilyMap(members)}
        <div class="family-list">
          ${members.map(
        (member) => b2`<button
              class="family-person"
              style=${`--member-color:${member.color};`}
              @click=${() => this._openMoreInfo(member.entityId)}
            >
              <span class="family-person-avatar">${member.initial}</span>
              <span class="family-person-copy">
                <strong>${member.name}</strong>
                <small>${stateText(this.hass, member.entityId, lang)}${member.distance !== null ? ` \xB7 ${formatNumber(member.distance, lang, 1)} km` : ""}</small>
              </span>
              <span class="family-person-meta">
                ${member.battery !== null ? `${member.battery}%` : ""}
                ${icon("chevronRight", 13)}
              </span>
            </button>`
      )}
        </div>
      `,
      t3(lang, "family.people", { count: members.length })
    );
  }
  _openMoreInfo(entityId) {
    this.dispatchEvent(
      new CustomEvent("hass-more-info", {
        detail: { entityId },
        bubbles: true,
        composed: true
      })
    );
  }
  _renderRoomGrid(rooms) {
    const lang = this._lang();
    return b2`
      <div class="room-grid">
        ${rooms.map((room2) => {
      const count = this._roomDisplayCount(room2);
      const active = this._roomActiveCount(room2);
      return b2`
            <button
              class="room-card"
              style=${accentStyle(roomAccent(room2))}
              @click=${() => this._openRoom(room2)}
              aria-label=${`${room2.name} \u2014 ${count ? this._entityCount(count) : t3(lang, "label.room_empty")}`}
            >
              <img class="room-img" src=${roomBackground(this._config, room2)} alt="" loading="lazy" />
              <span class="room-overlay"></span>
              <span class="room-top">
                <span class="room-icon">${icon(room2.icon, 15)}</span>
                <span class="room-count ${count ? "" : "is-empty"}">
                  ${count ? this._entityCount(count) : t3(lang, "label.room_empty")}
                </span>
              </span>
              <span class="room-bottom">
                <span class="room-name">
                  ${room2.name}
                  ${count && active ? b2`<span class="room-active-dot"></span>` : b2`<span class="empty-room-dot"></span>`}
                </span>
                <span class="room-sub">${room2.subtitle}</span>
              </span>
            </button>
          `;
    })}
      </div>
    `;
  }
  _renderSection(title, content, count = null, actions = null) {
    return b2`
      <section class="section">
        <div class="section-head">
          <div class="section-title">${title}</div>
          <div class="section-actions">
            ${count !== null ? b2`<span class="count-pill">${count}</span>` : ""}
            ${actions || ""}
          </div>
        </div>
        ${content}
      </section>
    `;
  }
  _renderHomeBody() {
    const lang = this._lang();
    const rooms = this._config.rooms;
    return b2`
      ${this._renderStats()}
      ${this._renderCamerasSection(true)}
      ${this._renderMusicQuick()}
      ${this._renderFamilySection()}
      ${this._renderSection(
      t3(lang, "section.quick"),
      this._renderRoomGrid(rooms),
      t3(lang, "label.rooms", { count: rooms.length }),
      b2`<button class="ghost-btn" @click=${() => this._openSheet({ type: "spaces" })}>${t3(lang, "action.all_spaces")}</button>`
    )}
      ${this._config.features.routines ? this._renderSection(
      t3(lang, "section.routines"),
      this._renderRoutineQuick(),
      null,
      b2`<button class="ghost-btn" @click=${() => this._openSheet({ type: "routines" })}>${t3(lang, "action.see_all")}</button>`
    ) : ""}
      <button class="system-strip" @click=${() => this._openSheet({ type: "system" })}>
        <span class="system-strip-icon">${icon("system", 17)}</span>
        <span class="system-strip-copy">
          <span class="system-strip-title">${t3(lang, "nav.system")}</span>
          <span class="system-strip-sub">${t3(lang, "sheet.system.subtitle")}</span>
        </span>
        <span class="system-strip-chevron">${icon("chevronRight", 17)}</span>
      </button>
    `;
  }
  _renderCamerasBody() {
    const lang = this._lang();
    const cameras = this._cameraEntities();
    const online = cameras.filter(
      (camera) => !["unavailable", "unknown"].includes(camera.state.state)
    ).length;
    const doorbells = cameras.filter((camera) => camera.isDoorbell).length;
    return b2`
      <div class="stats-grid">
        <div class="stat" style=${accentStyle("blue")}>
          <span class="stat-icon">${icon("video", 17)}</span>
          <span class="stat-copy">
            <span class="stat-label">${t3(lang, "section.cameras_live")}</span>
            <span class="stat-value">${cameras.length}</span>
            <span class="stat-sub">${t3(lang, "label.cameras", { count: cameras.length })}</span>
          </span>
        </div>
        <div class="stat" style=${accentStyle("green")}>
          <span class="stat-icon">${icon("check-circle", 17)}</span>
          <span class="stat-copy">
            <span class="stat-label">${t3(lang, "camera.status")}</span>
            <span class="stat-value">${online}</span>
            <span class="stat-sub">${t3(lang, "status.online")}</span>
          </span>
        </div>
        <div class="stat" style=${accentStyle("rose")}>
          <span class="stat-icon">${icon("bell", 17)}</span>
          <span class="stat-copy">
            <span class="stat-label">${t3(lang, "camera.doorbell")}</span>
            <span class="stat-value">${doorbells}</span>
            <span class="stat-sub">${t3(lang, "doorbell.call_title")}</span>
          </span>
        </div>
      </div>
      ${cameras.length ? this._renderSection(
      t3(lang, "section.cameras_live"),
      b2`<div class="camera-grid is-wall">
              ${cameras.map((camera) => this._renderCameraCard(camera))}
            </div>`,
      t3(lang, "label.cameras", { count: cameras.length })
    ) : this._renderSection(
      t3(lang, "section.cameras_live"),
      b2`<div class="empty-panel">
              <span class="empty-icon">${icon("video", 21)}</span>
              <div class="empty-copy">
                <div class="empty-title">${t3(lang, "camera.empty_title")}</div>
                <div class="empty-text">${t3(lang, "camera.empty_body")}</div>
                <code class="family-map-hint">${t3(lang, "camera.map_hint")}</code>
              </div>
            </div>`
    )}
    `;
  }
  _renderSpacesBody() {
    const lang = this._lang();
    const rooms = this._config.rooms;
    const totalEntities = rooms.reduce(
      (sum, room2) => sum + this._roomDisplayCount(room2),
      0
    );
    return b2`
      <div class="stats-grid">
        <div class="stat" style=${accentStyle("blue")}>
          <span class="stat-icon">${icon("rooms", 17)}</span>
          <span class="stat-copy">
            <span class="stat-label">${t3(lang, "nav.spaces")}</span>
            <span class="stat-value">${rooms.length}</span>
            <span class="stat-sub">${t3(lang, "sheet.rooms.subtitle")}</span>
          </span>
        </div>
        <div class="stat" style=${accentStyle("green")}>
          <span class="stat-icon">${icon("lightning", 17)}</span>
          <span class="stat-copy">
            <span class="stat-label">${t3(lang, "label.entities")}</span>
            <span class="stat-value">${totalEntities}</span>
            <span class="stat-sub">${this._entityCount(totalEntities)}</span>
          </span>
        </div>
      </div>
      ${this._renderSection(
      t3(lang, "section.quick"),
      this._renderRoomGrid(rooms),
      t3(lang, "label.rooms", { count: rooms.length })
    )}
    `;
  }
  _renderRoutineQuick() {
    const lang = this._lang();
    if (!this._config.features.routines) return A;
    return b2`
      <div class="routine-quick">
        ${ROUTINES.map((routine) => {
      const plan = this._routinePlan(routine.id);
      return b2`
            <button
              class="routine-quick-item"
              style=${accentStyle(routine.accent)}
              @click=${() => this._openSheet({ type: "routines" })}
              aria-label=${t3(lang, routine.title)}
            >
              <span class="routine-quick-icon">${icon(routine.icon, 18)}</span>
              <span class="routine-quick-name">${t3(lang, routine.title)}</span>
              <span class="routine-quick-count">${plan.count || "0"}</span>
            </button>
          `;
    })}
      </div>
    `;
  }
  _weatherDetail(label, value, iconName) {
    return b2`
      <div class="weather-tile">
        <span class="weather-tile-icon">${icon(iconName, 15)}</span>
        <span class="weather-tile-label">${label}</span>
        <span class="weather-tile-value">${value}</span>
      </div>
    `;
  }
  _renderWeatherForecast(state) {
    var _a2;
    const lang = this._lang();
    const unit = weatherUnit(state);
    if (this._weatherLoading) {
      return b2`<div class="forecast-grid" aria-label=${t3(lang, "weather.forecast_loading")}>
        ${Array.from({ length: 5 }).map(
        () => b2`<div class="forecast-card is-loading"><span class="forecast-skeleton"></span></div>`
      )}
      </div>`;
    }
    if (!((_a2 = this._weatherForecast) == null ? void 0 : _a2.length)) {
      return b2`<div class="weather-forecast-empty">
        <span>${t3(lang, "weather.forecast_unavailable")}</span>
        <button class="mini-btn" @click=${() => this._loadWeatherForecast(true)}>${t3(lang, "action.retry")}</button>
      </div>`;
    }
    return b2`
      <div class="forecast-grid">
        ${this._weatherForecast.map((day) => {
      const condition = day.condition || "partlycloudy";
      const rain = Number(day.precipitation_probability);
      const high = day.temperature !== void 0 ? formatTemperature(day.temperature, unit, lang) : "\u2014";
      const low = day.templow !== void 0 ? formatTemperature(day.templow, unit, lang) : "\u2014";
      return b2`
            <div class="forecast-card">
              <span class="forecast-day">${day.datetime ? dayLabel(day.datetime, lang) : "\u2014"}</span>
              <span class="forecast-icon">${icon(weatherConditionIcon(condition), 23)}</span>
              <span class="forecast-condition">${weatherConditionLabel(lang, condition)}</span>
              <span class="forecast-temps"><strong>${high}</strong><small>${low}</small></span>
              ${Number.isFinite(rain) ? b2`<span class="forecast-rain">${icon("rain", 11)} ${rain}%</span>` : ""}
            </div>
          `;
    })}
      </div>
    `;
  }
  _renderWeatherEmpty() {
    const lang = this._lang();
    return b2`
      <div class="weather-empty">
        <div class="weather-empty-art">${icon("weather", 52)}</div>
        <div class="weather-empty-copy">
          <div class="empty-title">${t3(lang, "weather.empty_title")}</div>
          <div class="empty-text">${t3(lang, "weather.empty_body")}</div>
          <code class="weather-map-hint">${t3(lang, "weather.empty_hint")}</code>
        </div>
      </div>
      <div class="skeleton-label">${t3(lang, "section.preview")}</div>
      <div class="weather-skeleton" aria-hidden="true">
        <div class="weather-skeleton-hero"></div>
        <div class="weather-skeleton-row">
          <span></span><span></span><span></span><span></span>
        </div>
      </div>
      ${this._renderSection(t3(lang, "section.sun"), this._renderSunTimeline())}
    `;
  }
  _renderWeatherBody() {
    const lang = this._lang();
    const weatherId = this._weatherEntity();
    const state = weatherId ? getState(this.hass, weatherId) : null;
    if (!state || ["unavailable", "unknown"].includes(state.state)) {
      return this._renderWeatherEmpty();
    }
    const attrs = state.attributes || {};
    const unit = weatherUnit(state);
    const temp = weatherTemperature(state);
    const condition = state.state;
    const windSpeed = Number(attrs.wind_speed);
    const wind = Number.isFinite(windSpeed) ? `${formatNumber(windSpeed, lang, 0)} ${attrs.wind_speed_unit || "km/h"} ${compassDirection(attrs.wind_bearing, lang)}` : "\u2014";
    const humidity = Number(attrs.humidity);
    const pressure = Number(attrs.pressure);
    const visibility = Number(attrs.visibility);
    const clouds = Number(attrs.cloud_coverage);
    const uv = Number(attrs.uv_index);
    const apparent = Number(attrs.apparent_temperature);
    const details = [
      [t3(lang, "label.feels_like"), Number.isFinite(apparent) ? formatTemperature(apparent, unit, lang) : "\u2014", "thermometer"],
      [t3(lang, "label.humidity"), Number.isFinite(humidity) ? `${formatNumber(humidity, lang, 0)}%` : "\u2014", "humidity"],
      [t3(lang, "label.wind"), wind, "wind"],
      [t3(lang, "label.pressure"), Number.isFinite(pressure) ? `${formatNumber(pressure, lang, 0)} ${attrs.pressure_unit || "hPa"}` : "\u2014", "gauge"],
      [t3(lang, "label.visibility"), Number.isFinite(visibility) ? `${formatNumber(visibility, lang, 0)} ${attrs.visibility_unit || "km"}` : "\u2014", "eye"],
      [t3(lang, "label.clouds"), Number.isFinite(clouds) ? `${formatNumber(clouds, lang, 0)}%` : "\u2014", "cloud"]
    ];
    if (Number.isFinite(uv)) {
      details.push([t3(lang, "label.uv"), formatNumber(uv, lang, 1), "sun"]);
    }
    return b2`
      <div class="weather-hero">
        <div class="weather-hero-top">
          <span class="weather-place">${entityLabel(this._config, this.hass, weatherId)}</span>
          <span class="weather-live">${t3(lang, "weather.now")}</span>
        </div>
        <div class="weather-hero-main">
          <div class="weather-hero-copy">
            <div class="weather-temp">${temp === null ? "\u2014" : Math.round(temp)}<span>${unit}</span></div>
            <div class="weather-condition">${icon(weatherConditionIcon(condition), 18)} ${weatherConditionLabel(lang, condition)}</div>
          </div>
          <div class="weather-art">${icon(weatherConditionIcon(condition), 68)}</div>
        </div>
        <div class="weather-hero-foot">
          ${icon("thermometer", 13)}
          <span>${t3(lang, "label.feels_like")} ${Number.isFinite(apparent) ? formatTemperature(apparent, unit, lang) : "\u2014"}</span>
          <span class="weather-foot-divider"></span>
          ${icon("wind", 13)}
          <span>${wind}</span>
        </div>
      </div>
      ${this._renderSection(
      t3(lang, "weather.details"),
      b2`<div class="weather-detail-grid">${details.map(([label, value, iconName]) => this._weatherDetail(label, value, iconName))}</div>`
    )}
      ${this._renderSection(t3(lang, "section.forecast"), this._renderWeatherForecast(state))}
      ${this._renderSection(t3(lang, "section.sun"), this._renderSunTimeline())}
    `;
  }
  _renderEnergyBody() {
    const lang = this._lang();
    const ids = this._energyIds();
    if (ids.length === 0) return this._renderEmptyState("energy");
    const sensors = ids.map((entityId) => {
      const state = getState(this.hass, entityId);
      const attrs = (state == null ? void 0 : state.attributes) || {};
      const value = formatSensorValue(this.hass, entityId, lang);
      return {
        id: entityId,
        state,
        unit: String(attrs.unit_of_measurement || ""),
        value
      };
    });
    const unitOf = (sensor) => sensor.unit.toLowerCase();
    const power = sensors.find(
      (sensor) => {
        var _a2, _b;
        return ["w", "kw"].includes(unitOf(sensor)) || ((_b = (_a2 = sensor.state) == null ? void 0 : _a2.attributes) == null ? void 0 : _b.device_class) === "power";
      }
    ) || sensors[0];
    const energy = sensors.find(
      (sensor) => {
        var _a2, _b;
        return unitOf(sensor).includes("kwh") || unitOf(sensor).includes("wh") || ((_b = (_a2 = sensor.state) == null ? void 0 : _a2.attributes) == null ? void 0 : _b.device_class) === "energy";
      }
    ) || sensors.find((sensor) => sensor.id !== power.id);
    const remaining = sensors.filter(
      (sensor) => sensor.id !== power.id && sensor.id !== (energy == null ? void 0 : energy.id)
    );
    const sourceRoom = this._config.rooms.find(
      (room2) => (room2.entities.appliances || []).some((entityId) => ids.includes(entityId))
    );
    return b2`
      <div class="energy-hero">
        <div class="energy-main">
          <div class="energy-eyebrow"><span class="energy-live-dot"></span>${t3(lang, "energy.live_power")}</div>
          <div class="energy-value">${power.value.value}<span>${power.value.unit}</span></div>
          <div class="energy-sub">${entityLabel(this._config, this.hass, power.id)}</div>
        </div>
        <div class="energy-side">
          <span class="energy-side-icon">${icon("flash", 23)}</span>
          <span class="energy-side-label">${t3(lang, "energy.total")}</span>
          <strong>${energy ? energy.value.value : "\u2014"}<small>${(energy == null ? void 0 : energy.value.unit) || ""}</small></strong>
        </div>
      </div>
      ${remaining.length ? this._renderSection(
      t3(lang, "section.sensors"),
      b2`<div class="sensor-grid">${remaining.map((sensor) => this._renderSensorCard(sensor.id, "green"))}</div>`,
      this._entityCount(remaining.length)
    ) : ""}
      ${sourceRoom ? b2`<button class="energy-source" @click=${() => this._openRoom(sourceRoom)}>
            <span class="energy-source-thumb"><img src=${roomBackground(this._config, sourceRoom)} alt="" /></span>
            <span class="energy-source-copy">
              <span class="energy-source-label">${t3(lang, "energy.source")}</span>
              <strong>${sourceRoom.name}</strong>
            </span>
            <span class="energy-source-meta">${this._entityCount(ids.length)}</span>
            ${icon("chevronRight", 16)}
          </button>` : ""}
    `;
  }
  _renderMediaBody() {
    const lang = this._lang();
    const groups = this._mediaGroups();
    if (groups.length === 0) {
      return b2`${this._renderMusicQuick()}${this._renderYoutubeStrip()}${this._renderEmptyState("media")}`;
    }
    return b2`
      ${this._renderMusicQuick()}
      ${this._renderYoutubeStrip()}
      ${groups.map(
      ({ room: room2, media, remotes, channels }) => this._renderSection(
        room2.name,
        b2`
            ${media.length ? b2`<div class="media-grid">${media.map((id) => this._renderMediaCard(id))}</div>` : ""}
            ${channels.length ? this._renderChannelRow(channels) : ""}
            ${remotes.length ? b2`${remotes.map((id) => this._renderRemoteCard(id))}` : ""}
          `,
        this._entityCount(media.length + remotes.length),
        b2`<button class="ghost-btn" @click=${() => this._openRoom(room2)}>${t3(lang, "action.open")}</button>`
      )
    )}
    `;
  }
  _renderRoutineCard(routine) {
    const lang = this._lang();
    const plan = this._routinePlan(routine.id);
    const busy = this._routineBusy === routine.id;
    return b2`
      <div class="routine-card" style=${accentStyle(routine.accent)}>
        <div class="routine-head">
          <span class="routine-icon">${icon(routine.icon, 20)}</span>
          <div class="routine-copy">
            <div class="routine-title">${t3(lang, routine.title)}</div>
            <div class="routine-desc">${t3(lang, routine.desc)}</div>
          </div>
        </div>
        <div class="routine-groups">
          ${plan.groups.length ? plan.groups.map(
      (group) => {
        var _a2;
        return b2`<span class="routine-chip">
                  ${icon(((_a2 = GROUP_META[group.group]) == null ? void 0 : _a2.icon) || "home", 11)}
                  ${t3(lang, GROUP_TITLE[group.group])} · ${group.count}
                </span>`;
      }
    ) : b2`<span class="routine-chip is-empty">${t3(lang, "routines.needs_mapping")}</span>`}
        </div>
        <div class="routine-foot">
          <span class="routine-meta">${plan.count ? t3(lang, "routines.actions", { count: plan.count }) : t3(lang, "routines.needs_mapping")}</span>
          <button
            class="routine-apply"
            @click=${() => this._applyRoutine(routine)}
            ?disabled=${busy || plan.count === 0}
          >
            ${busy ? b2`<span class="spinner small"></span>` : icon("play", 13)}
            ${t3(lang, "routines.apply")}
          </button>
        </div>
      </div>
    `;
  }
  _domainIcon(entityId) {
    const domain = entityId.split(".")[0];
    const map = {
      light: "lights",
      cover: "covers",
      climate: "climate",
      media_player: "tv",
      remote: "remote",
      camera: "video",
      switch: "plug",
      fan: "fan",
      lock: "lock",
      scene: "routines",
      script: "routines",
      button: "play",
      select: "tune",
      number: "tune",
      input_number: "tune",
      input_select: "tune",
      sensor: "gauge",
      binary_sensor: "gauge",
      vacuum: "vacuum",
      update: "update",
      person: "account",
      device_tracker: "phone",
      event: "bell",
      image: "image",
      input_boolean: "plug",
      input_button: "play",
      todo: "todo"
    };
    return map[domain] || "system";
  }
  _allControlIds() {
    const ids = [];
    for (const room2 of this._config.rooms) {
      ids.push(...roomEntityIds(room2));
      ids.push(...Object.values(this._printerEntities(room2.printer)));
      if (room2.doorbell) ids.push(...doorbellEntityIds(room2.doorbell));
    }
    ids.push(...this._config.global.cameras || []);
    ids.push(...this._config.global.updates || []);
    if (this._config.global.weather) ids.push(this._config.global.weather);
    return uniqueIds(ids).filter((entityId) => getState(this.hass, entityId));
  }
  _controlsFiltered() {
    const query = this._normalizeText(this._controlQuery);
    return this._allControlIds().filter((entityId) => {
      if (!query) return true;
      return this._normalizeText(
        `${entityLabel(this._config, this.hass, entityId)} ${entityId}`
      ).includes(query);
    }).sort(
      (a3, b3) => entityLabel(this._config, this.hass, a3).localeCompare(
        entityLabel(this._config, this.hass, b3),
        this._lang()
      )
    );
  }
  _openEntitySheet(entityId) {
    this._openSheet({ type: "entity", entityId });
  }
  _quickEntityAction(entityId) {
    const domain = entityId.split(".")[0];
    if (domain === "light") return this._toggleLight(entityId);
    if (domain === "cover") return this._toggleCover(entityId);
    if (domain === "media_player") return this._mediaPlayPause(entityId);
    if (domain === "camera") return this._openCameraSheet(entityId);
    if (["switch", "fan", "input_boolean"].includes(domain)) {
      return this._togglePower(entityId);
    }
    if (domain === "scene") {
      return this._service("scene", "turn_on", { entity_id: entityId });
    }
    if (domain === "button") {
      return this._service("button", "press", { entity_id: entityId });
    }
    if (domain === "lock") return this._toggleLock(entityId);
    return this._openMoreInfo(entityId);
  }
  _togglePower(entityId) {
    const domain = entityId.split(".")[0];
    const on = isOn(this.hass, entityId);
    this._service(domain, on ? "turn_off" : "turn_on", {
      entity_id: entityId
    });
  }
  _toggleLock(entityId) {
    const locked = stateValue(this.hass, entityId) === "locked";
    this._service("lock", locked ? "unlock" : "lock", {
      entity_id: entityId
    });
  }
  _setFanPercentage(entityId, event) {
    this._service("fan", "set_percentage", {
      entity_id: entityId,
      percentage: clamp(Number(event.target.value), 0, 100)
    });
  }
  _renderControlRow(entityId) {
    const lang = this._lang();
    const state = getState(this.hass, entityId);
    const domain = entityId.split(".")[0];
    const canQuick = [
      "light",
      "cover",
      "media_player",
      "camera",
      "switch",
      "fan",
      "input_boolean",
      "scene",
      "button",
      "lock"
    ].includes(domain);
    return b2`
      <div class="control-row">
        <button class="control-main" @click=${() => this._openEntitySheet(entityId)}>
          <span class="control-icon">${icon(this._domainIcon(entityId), 16)}</span>
          <span class="control-copy">
            <strong>${entityLabel(this._config, this.hass, entityId)}</strong>
            <small>${stateText(this.hass, entityId, lang)} · ${domain}</small>
          </span>
        </button>
        <div class="control-actions">
          ${canQuick ? b2`<button class="control-action" @click=${() => this._quickEntityAction(entityId)} aria-label=${t3(lang, "controls.quick")}>
                ${icon(
      domain === "camera" ? "video" : domain === "cover" ? "covers" : "power",
      14
    )}
              </button>` : ""}
          <button class="control-action" @click=${() => this._openMoreInfo(entityId)} aria-label=${t3(lang, "controls.more")}>
            ${icon("chevronRight", 14)}
          </button>
        </div>
      </div>
    `;
  }
  _renderControlsBody() {
    const lang = this._lang();
    const ids = this._controlsFiltered();
    return b2`
      <div class="control-search">
        ${icon("search", 15)}
        <input
          type="search"
          .value=${this._controlQuery}
          @input=${(event) => {
      this._controlQuery = event.target.value;
      this.requestUpdate();
    }}
          placeholder=${t3(lang, "controls.search")}
        />
      </div>
      ${ids.length ? b2`<div class="control-list">${ids.map((id) => this._renderControlRow(id))}</div>` : b2`<div class="empty-state-inline">${t3(lang, "controls.empty")}</div>`}
    `;
  }
  _renderEntityControls(entityId) {
    var _a2, _b;
    const lang = this._lang();
    const domain = entityId.split(".")[0];
    const state = getState(this.hass, entityId);
    if (domain === "light") return this._renderLightCard(entityId);
    if (domain === "cover") return this._renderCoverCard(entityId);
    if (domain === "climate") return this._renderClimateCard(entityId);
    if (domain === "media_player") return this._renderMediaCard(entityId);
    if (domain === "remote") return this._renderRemoteCard(entityId);
    if (domain === "camera") {
      return b2`
        ${this._renderCameraLive(entityId, "", "is-large")}
        <div class="camera-detail-actions">
          <button class="mini-btn" @click=${() => this._openCameraSheet(entityId)}>${icon("video", 14)} ${t3(lang, "camera.open")}</button>
        </div>
      `;
    }
    if (["switch", "input_boolean"].includes(domain)) {
      return this._renderPlugCard(entityId);
    }
    if (domain === "fan") {
      const percentage = Number(((_a2 = state == null ? void 0 : state.attributes) == null ? void 0 : _a2.percentage) ?? 0);
      return b2`
        <div class="entity-card accent-amber ${isOn(this.hass, entityId) ? "is-on" : ""}">
          <div class="entity-head">
            <span class="entity-icon">${icon("fan", 17)}</span>
            <div class="entity-copy">
              <div class="entity-name">${entityLabel(this._config, this.hass, entityId)}</div>
              <div class="entity-state">${stateText(this.hass, entityId, lang)}</div>
            </div>
            <button class="power-btn ${isOn(this.hass, entityId) ? "is-on" : ""}" @click=${() => this._togglePower(entityId)}>${icon("power", 15)}</button>
          </div>
          <div class="control-range">
            <input type="range" min="0" max="100" .value=${percentage} @change=${(event) => this._setFanPercentage(entityId, event)} />
            <span>${percentage}%</span>
          </div>
        </div>
      `;
    }
    if (domain === "lock") {
      const locked = (state == null ? void 0 : state.state) === "locked";
      return b2`
        <button class="control-big ${locked ? "is-on" : ""}" @click=${() => this._toggleLock(entityId)}>
          ${icon(locked ? "lock" : "lock-open", 22)}
          <span>${locked ? t3(lang, "action.unlock") : t3(lang, "action.lock")}</span>
        </button>
      `;
    }
    if (["select", "input_select"].includes(domain)) {
      return this._renderDoorbellSelect(entityId, t3(lang, "control.mode"), "tune");
    }
    if (["number", "input_number"].includes(domain)) {
      const value = Number((state == null ? void 0 : state.state) ?? 0);
      return b2`
        <div class="control-number">
          <button @click=${() => this._stepNumber(entityId, -1)}>${icon("minus", 16)}</button>
          <strong>${value}<small>${((_b = state == null ? void 0 : state.attributes) == null ? void 0 : _b.unit_of_measurement) || ""}</small></strong>
          <button @click=${() => this._stepNumber(entityId, 1)}>${icon("plus", 16)}</button>
        </div>
      `;
    }
    if (["button", "input_button"].includes(domain)) {
      return b2`<button class="control-big" @click=${() => this._quickEntityAction(entityId)}>${icon("play", 20)}<span>${t3(lang, "action.activate")}</span></button>`;
    }
    if (domain === "scene") {
      return b2`<button class="control-big" @click=${() => this._quickEntityAction(entityId)}>${icon("routines", 20)}<span>${t3(lang, "action.activate")}</span></button>`;
    }
    if (domain === "script") {
      return b2`<button class="control-big" @click=${() => this._service("script", "turn_on", { entity_id: entityId })}>${icon("play", 20)}<span>${t3(lang, "action.start")}</span></button>`;
    }
    if (domain === "vacuum") {
      return b2`<div class="control-buttons">
        <button class="mini-btn" @click=${() => this._service("vacuum", "start", { entity_id: entityId })}>${t3(lang, "action.start")}</button>
        <button class="mini-btn" @click=${() => this._service("vacuum", "stop", { entity_id: entityId })}>${t3(lang, "action.stop")}</button>
        <button class="mini-btn" @click=${() => this._service("vacuum", "return_to_base", { entity_id: entityId })}>${t3(lang, "action.dock")}</button>
      </div>`;
    }
    if (domain === "update") {
      return b2`<button class="control-big" @click=${() => this._service("update", "install", { entity_id: entityId })}>${icon("update", 20)}<span>${t3(lang, "action.install")}</span></button>`;
    }
    return b2`
      <div class="entity-card accent-blue">
        <div class="entity-head">
          <span class="entity-icon">${icon(this._domainIcon(entityId), 17)}</span>
          <div class="entity-copy">
            <div class="entity-name">${entityLabel(this._config, this.hass, entityId)}</div>
            <div class="entity-state">${stateText(this.hass, entityId, lang)}</div>
          </div>
        </div>
      </div>
    `;
  }
  _renderEntityBody(entityId) {
    const lang = this._lang();
    const state = getState(this.hass, entityId);
    if (!state) {
      return b2`<div class="empty-state-inline">${t3(lang, "status.unavailable")}</div>`;
    }
    return b2`
      <div class="entity-control-head">
        <span class="entity-control-icon">${icon(this._domainIcon(entityId), 22)}</span>
        <div class="entity-control-copy">
          <span>${entityId.split(".")[0]}</span>
          <strong>${entityLabel(this._config, this.hass, entityId)}</strong>
          <small class="is-mono">${entityId}</small>
        </div>
        <span class="entity-control-state">${stateText(this.hass, entityId, lang)}</span>
      </div>
      ${this._renderEntityControls(entityId)}
      <div class="entity-control-actions">
        <button class="mini-btn" @click=${() => this._openMoreInfo(entityId)}>${icon("sliders", 14)} ${t3(lang, "controls.more")}</button>
        <button class="mini-btn" @click=${() => this._copyEntityId(entityId)}>${icon("copy", 14)} ${t3(lang, "controls.entity_id")}</button>
      </div>
      <details class="entity-attributes">
        <summary>${t3(lang, "controls.attributes")}</summary>
        <pre>${JSON.stringify(state.attributes || {}, null, 2)}</pre>
      </details>
    `;
  }
  _copyEntityId(entityId) {
    var _a2;
    (_a2 = navigator.clipboard) == null ? void 0 : _a2.writeText(entityId);
    this._showToast(entityId);
  }
  _renderYoutubeStrip() {
    if (!this._config.features.youtube) return A;
    const lang = this._lang();
    return b2`
      <button class="youtube-strip" @click=${() => this._openSheet({ type: "youtube" })}>
        <span class="youtube-strip-icon">${icon("youtube", 18)}</span>
        <span class="youtube-strip-copy">
          <strong>${t3(lang, "nav.youtube")}</strong>
          <small>${t3(lang, "sheet.youtube.subtitle")}</small>
        </span>
        <span class="youtube-strip-chevron">${icon("chevronRight", 15)}</span>
      </button>
    `;
  }
  _renderYoutubeBody() {
    var _a2;
    const lang = this._lang();
    const video = this._youtubeVideo;
    const devices = this._musicDevices();
    const selectedDevice = this._youtubeDevice || ((_a2 = devices[0]) == null ? void 0 : _a2.entityId) || "";
    const key = this._youtubeApiKey;
    return b2`
      <div class="youtube-toolbar">
        <form class="youtube-search" @submit=${(event) => {
      event.preventDefault();
      this._youtubeSearch();
    }}>
          <input
            type="search"
            .value=${this._youtubeQuery}
            @input=${(event) => {
      this._youtubeQuery = event.target.value;
    }}
            placeholder=${t3(lang, "youtube.search_placeholder")}
          />
          <button type="submit" ?disabled=${this._youtubeLoading}>
            ${this._youtubeLoading ? b2`<span class="spinner small"></span>` : icon("search", 15)}
            ${t3(lang, "youtube.search")}
          </button>
        </form>
        <button class="mini-btn" @click=${this._youtubeOpenExternal}>
          ${icon("youtube", 14)} ${t3(lang, "youtube.open")}
        </button>
      </div>

      <div class="youtube-url-row">
        <input
          type="url"
          .value=${this._youtubeUrl}
          @input=${(event) => {
      this._youtubeUrl = event.target.value;
    }}
          placeholder="https://www.youtube.com/watch?v=..."
        />
        <button class="mini-btn" @click=${this._youtubeLoadUrl}>
          ${t3(lang, "youtube.add")}
        </button>
      </div>

      <details class="youtube-settings">
        <summary>${t3(lang, "youtube.api_key")}</summary>
        <div>
          <input
            type="password"
            .value=${key}
            @change=${this._youtubeSetApiKey}
            placeholder="AIza..."
          />
          <small>${t3(lang, "youtube.api_key_hint")}</small>
        </div>
      </details>

      ${this._youtubeError ? b2`<div class="youtube-error">${this._youtubeError}</div>` : ""}

      ${video ? b2`
            <div class="youtube-player" style=${`background-image:url(${video.thumbnail})`}>
              <iframe
                src=${`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                title=${this._youtubeTitle(video)}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowfullscreen
              ></iframe>
            </div>
            <div class="youtube-now">
              <span class="youtube-now-label">${t3(lang, "youtube.now")}</span>
              <strong>${this._youtubeTitle(video)}</strong>
              <small>${video.channel || video.id}</small>
            </div>
            <div class="youtube-actions">
              <button class="mini-btn" @click=${this._youtubeSave}>
                ${icon("check", 13)} ${t3(lang, "youtube.save")}
              </button>
              <select
                class="youtube-device"
                .value=${selectedDevice}
                @change=${(event) => {
      this._youtubeDevice = event.target.value;
      this.requestUpdate();
    }}
              >
                ${devices.map(
      (device) => b2`<option value=${device.entityId}>${device.name}</option>`
    )}
              </select>
              <button class="mini-btn youtube-cast" @click=${this._youtubeCast}>
                ${icon("tv", 14)} ${t3(lang, "youtube.cast")}
              </button>
            </div>
          ` : b2`<div class="youtube-empty">
            <span>${icon("youtube", 26)}</span>
            <strong>${t3(lang, "sheet.youtube.title")}</strong>
            <small>${t3(lang, "youtube.no_api")}</small>
          </div>`}

      ${this._youtubeResults.length ? this._renderSection(
      t3(lang, "youtube.results_title"),
      b2`<div class="youtube-results">
              ${this._youtubeResults.map(
        (result) => b2`<button class="youtube-result" @click=${() => this._youtubeSelect(result)}>
                  <img src=${result.thumbnail} alt="" loading="lazy" />
                  <span>
                    <strong>${result.title}</strong>
                    <small>${result.channel}</small>
                  </span>
                </button>`
      )}
            </div>`,
      t3(lang, "youtube.results", { count: this._youtubeResults.length })
    ) : ""}

      ${this._youtubePlaylist.length ? this._renderSection(
      t3(lang, "youtube.playlist"),
      b2`<div class="youtube-playlist">
              ${this._youtubePlaylist.map(
        (item) => b2`<div class="youtube-playlist-item">
                  <button class="youtube-playlist-main" @click=${() => this._youtubeSelect(item)}>
                    <img src=${item.thumbnail} alt="" loading="lazy" />
                    <span>
                      <strong>${item.title}</strong>
                      <small>${item.channel || item.id}</small>
                    </span>
                  </button>
                  <button class="control-action" @click=${() => this._youtubeRemove(item.id)} aria-label=${t3(lang, "youtube.remove")}>
                    ${icon("close", 13)}
                  </button>
                </div>`
      )}
            </div>`,
      t3(lang, "youtube.saved_count", { count: this._youtubePlaylist.length })
    ) : ""}
    `;
  }
  _renderMusicQuick() {
    if (!this._config.features.music) return A;
    const lang = this._lang();
    const playing = this._musicIsPlaying();
    const outputName = this._musicOutput === "tablet" ? t3(lang, "music.tablet") : entityLabel(this._config, this.hass, this._currentMusicDevice());
    return b2`
      <div class="music-quick ${playing ? "is-playing" : ""}">
        <span class="music-quick-icon">${icon("music", 17)}</span>
        <button class="music-quick-copy" @click=${() => this._openSheet({ type: "music" })}>
          <span>${t3(lang, "music.now")}</span>
          <strong>${this._musicCurrentTitle()}</strong>
          <small>${outputName || t3(lang, "music.tablet")}</small>
        </button>
        <button class="music-quick-play" @click=${this._toggleMusic} aria-label=${t3(lang, playing ? "action.pause" : "action.play")}>
          ${icon(playing ? "pause" : "play", 15)}
        </button>
        <button class="music-quick-open" @click=${() => this._openSheet({ type: "music" })} aria-label=${t3(lang, "nav.music")}>
          ${icon("chevronRight", 15)}
        </button>
      </div>
    `;
  }
  _renderMusicBody() {
    var _a2, _b;
    const lang = this._lang();
    const devices = this._musicDevices();
    const playing = this._musicIsPlaying();
    const selectedDevice = this._currentMusicDevice();
    const outputName = this._musicOutput === "tablet" ? t3(lang, "music.tablet") : entityLabel(this._config, this.hass, selectedDevice);
    const deviceState = selectedDevice ? getState(this.hass, selectedDevice) : null;
    const volume = this._musicOutput === "tablet" ? Math.round(this._musicVolume * 100) : Math.round(Number(((_a2 = deviceState == null ? void 0 : deviceState.attributes) == null ? void 0 : _a2.volume_level) ?? 0.8) * 100);
    const presets = ((_b = this._config.global.music) == null ? void 0 : _b.presets) || [];
    return b2`
      <div class="music-hero">
        <div class="music-art">${icon("music", 34)}</div>
        <div class="music-hero-copy">
          <span class="music-now-label">${t3(lang, "music.now")}</span>
          <strong>${this._musicCurrentTitle()}</strong>
          <small>${playing ? t3(lang, "music.playing") : t3(lang, "music.paused")} · ${outputName || t3(lang, "music.tablet")}</small>
        </div>
        <button class="music-play" @click=${this._toggleMusic} aria-label=${t3(lang, playing ? "action.pause" : "action.play")}>
          ${icon(playing ? "pause" : "play", 20)}
        </button>
        <button class="music-stop" @click=${this._stopMusic} aria-label=${t3(lang, "action.stop")}>
          ${icon("stop", 15)}
        </button>
      </div>

      <div class="music-volume">
        ${icon("volume", 15)}
        <input type="range" min="0" max="100" .value=${volume} @change=${this._setMusicVolume} />
        <span>${volume}%</span>
      </div>

      ${this._renderSection(
      t3(lang, "music.output"),
      b2`<div class="music-outputs">
          <button class="music-output ${this._musicOutput === "tablet" ? "is-active" : ""}" @click=${() => this._selectMusicOutput("tablet")}>
            <span class="music-output-icon">${icon("tablet", 18)}</span>
            <span><strong>${t3(lang, "music.tablet")}</strong><small>${t3(lang, "music.tablet_note")}</small></span>
            ${this._musicOutput === "tablet" ? icon("check", 14) : ""}
          </button>
          ${devices.map(
        (device) => b2`<button class="music-output ${this._musicOutput === "device" && selectedDevice === device.entityId ? "is-active" : ""}" @click=${() => this._selectMusicDevice(device.entityId)}>
              <span class="music-output-icon">${icon("tv", 18)}</span>
              <span><strong>${device.name}</strong><small>${stateText(this.hass, device.entityId, lang)}</small></span>
              ${this._musicOutput === "device" && selectedDevice === device.entityId ? icon("check", 14) : ""}
            </button>`
      )}
        </div>
        ${devices.length === 0 ? b2`<div class="music-note">${t3(lang, "music.no_device")}</div>` : ""}`
    )}

      ${this._renderSection(
      t3(lang, "music.source"),
      b2`
          <div class="music-source">
            <input class="music-url" type="url" .value=${this._musicUrl} @change=${this._setMusicUrl} placeholder=${t3(lang, "music.url_placeholder")} />
            <label class="music-file-btn">
              ${icon("music", 14)} ${t3(lang, "music.choose_file")}
              <input type="file" accept="audio/*" @change=${this._chooseMusicFile} />
            </label>
          </div>
          ${presets.length ? b2`<div class="music-presets">${presets.map(
        (preset) => b2`<button class="mini-btn" @click=${() => this._selectMusicPreset(preset)}>${icon("play", 12)} ${preset.name || "Preset"}</button>`
      )}</div>` : ""}
        `
    )}
      ${this._renderYoutubeStrip()}
    `;
  }
  _renderRoutinesBody() {
    const lang = this._lang();
    if (!this._config.features.routines) {
      return b2`<div class="empty-state-inline">${t3(lang, "routines.note")}</div>`;
    }
    return b2`
      <div class="routine-intro">
        <span class="routine-intro-icon">${icon("routines", 23)}</span>
        <div>
          <div class="routine-intro-title">${t3(lang, "routines.intro")}</div>
          <div class="routine-intro-text">${t3(lang, "routines.note")}</div>
        </div>
      </div>
      <div class="routine-grid">
        ${ROUTINES.map((routine) => this._renderRoutineCard(routine))}
      </div>
    `;
  }
  _renderGroupStats(group, groups) {
    const lang = this._lang();
    const ids = groups.flatMap((entry) => entry.ids);
    const active = activeCount(this.hass, ids);
    const meta = GROUP_META[group];
    return b2`
      <div class="stats-grid">
        <div class="stat" style=${accentStyle(meta.accent)}>
          <span class="stat-icon">${icon(meta.icon, 17)}</span>
          <span class="stat-copy">
            <span class="stat-label">${t3(lang, GROUP_TITLE[group])}</span>
            <span class="stat-value">${ids.length}</span>
            <span class="stat-sub">${this._entityCount(ids.length)}</span>
          </span>
        </div>
        <div class="stat" style=${accentStyle(meta.accent)}>
          <span class="stat-icon">${icon("check-circle", 17)}</span>
          <span class="stat-copy">
            <span class="stat-label">${t3(lang, "label.active")}</span>
            <span class="stat-value">${active}</span>
            <span class="stat-sub">${t3(lang, "label.room_active", { count: active })}</span>
          </span>
        </div>
        <div class="stat" style=${accentStyle("blue")}>
          <span class="stat-icon">${icon("rooms", 17)}</span>
          <span class="stat-copy">
            <span class="stat-label">${t3(lang, "section.quick")}</span>
            <span class="stat-value">${groups.length}</span>
            <span class="stat-sub">${t3(lang, "label.rooms", { count: groups.length })}</span>
          </span>
        </div>
      </div>
    `;
  }
  _renderGlobalGroup(group) {
    const lang = this._lang();
    const groups = this._config.rooms.map((room2) => ({ room: room2, ids: this._activeIds(room2.entities[group] || []) })).filter((entry) => entry.ids.length > 0);
    if (groups.length === 0) {
      return this._renderEmptyState(group);
    }
    return b2`
      ${this._renderGroupStats(group, groups)}
      ${groups.map(
      ({ room: room2, ids }) => this._renderSection(
        room2.name,
        b2`<div class="entity-grid">${ids.map((id) => this._renderGroupCard(group, id))}</div>`,
        this._entityCount(ids.length),
        b2`<button class="ghost-btn" @click=${() => this._openRoom(room2)}>${t3(lang, "action.open")}</button>`
      )
    )}
    `;
  }
  _renderGroupCard(group, entityId) {
    if (group === "lights") return this._renderLightCard(entityId);
    if (group === "covers") return this._renderCoverCard(entityId);
    if (group === "climate") return this._renderClimateCard(entityId);
    if (group === "plugs") return this._renderPlugCard(entityId);
    return A;
  }
  _togglePlug(entityId) {
    const domain = entityId.split(".")[0];
    const on = !["off", "unavailable", "unknown"].includes(
      stateValue(this.hass, entityId)
    );
    if (domain === "climate") {
      this._toggleClimate(entityId);
      return;
    }
    this._service(domain, on ? "turn_off" : "turn_on", {
      entity_id: entityId
    });
  }
  _renderPlugCard(entityId) {
    var _a2, _b, _c;
    const lang = this._lang();
    const state = getState(this.hass, entityId);
    const name = entityLabel(this._config, this.hass, entityId);
    const value = (state == null ? void 0 : state.state) || "unavailable";
    const on = !["off", "unavailable", "unknown"].includes(value);
    const rawPower = ((_a2 = state == null ? void 0 : state.attributes) == null ? void 0 : _a2.current_power_w) ?? ((_b = state == null ? void 0 : state.attributes) == null ? void 0 : _b.power) ?? ((_c = state == null ? void 0 : state.attributes) == null ? void 0 : _c.wattage);
    const power = Number(rawPower);
    return b2`
      <div class="entity-card accent-amber ${on ? "is-on" : ""} ${isUnavailable(this.hass, entityId) ? "is-unavailable" : ""}" style=${accentStyle("amber")}>
        <div class="entity-head">
          <span class="entity-icon">${icon("plug", 17)}</span>
          <div class="entity-copy">
            <div class="entity-name">${name}</div>
            <div class="entity-state">${stateText(this.hass, entityId, lang)}</div>
          </div>
          <button
            class="power-btn ${on ? "is-on" : ""}"
            @click=${() => this._togglePlug(entityId)}
            aria-label=${t3(lang, on ? "action.turn_off" : "action.turn_on")}
            title=${t3(lang, on ? "action.turn_off" : "action.turn_on")}
          >
            ${icon("power", 15)}
          </button>
        </div>
        <div class="plug-meta">
          <span>${t3(lang, "control.power")}</span>
          <strong>${Number.isFinite(power) ? `${formatNumber(power, lang, 1)} W` : "\u2014"}</strong>
        </div>
      </div>
    `;
  }
  _renderLightCard(entityId) {
    const lang = this._lang();
    const state = getState(this.hass, entityId);
    const on = (state == null ? void 0 : state.state) === "on";
    const brightness = lightBrightness(this.hass, entityId);
    const unavailable = isUnavailable(this.hass, entityId);
    const name = entityLabel(this._config, this.hass, entityId);
    return b2`
      <div class="entity-card accent-yellow ${on ? "is-on" : ""} ${unavailable ? "is-unavailable" : ""}" style=${accentStyle("yellow")}>
        <div class="entity-head">
          <span class="entity-icon">${icon(on ? "light-on" : "light", 17)}</span>
          <div class="entity-copy">
            <div class="entity-name">${name}</div>
            <div class="entity-state">
              ${unavailable ? t3(lang, "status.unavailable") : on ? `${t3(lang, "control.brightness")} \xB7 ${brightness}%` : t3(lang, "media.off")}
            </div>
          </div>
          <button
            class="power-btn ${on ? "is-on" : ""}"
            @click=${() => this._toggleLight(entityId)}
            aria-label=${`${t3(lang, on ? "action.turn_off" : "action.turn_on")} ${name}`}
            title=${t3(lang, on ? "action.turn_off" : "action.turn_on")}
          >
            ${icon("power", 15)}
          </button>
        </div>
        <div class="entity-foot">
          <div class="range-row">
            <span class="range-icon">${icon("sun", 13)}</span>
            <input
              class="fr-range"
              type="range"
              min="1"
              max="100"
              step="1"
              value=${brightness || 1}
              style="--pct:${brightness}%"
              @input=${this._onRangeInput}
              @change=${(event) => this._setLightBrightness(entityId, event)}
              aria-label=${`${t3(lang, "control.brightness")} ${name}`}
            />
            <span class="range-value">${brightness}%</span>
          </div>
        </div>
      </div>
    `;
  }
  _renderCoverCard(entityId) {
    const lang = this._lang();
    const state = getState(this.hass, entityId);
    const position = coverPosition(this.hass, entityId);
    const name = entityLabel(this._config, this.hass, entityId);
    const unavailable = isUnavailable(this.hass, entityId);
    const open = ["open", "opening"].includes(state == null ? void 0 : state.state);
    return b2`
      <div class="entity-card accent-blue ${open ? "is-on" : ""} ${unavailable ? "is-unavailable" : ""}" style=${accentStyle("blue")}>
        <div class="entity-head">
          <span class="entity-icon">${icon("covers", 17)}</span>
          <div class="entity-copy">
            <div class="entity-name">${name}</div>
            <div class="entity-state">${unavailable ? t3(lang, "status.unavailable") : stateText(this.hass, entityId, lang)}</div>
          </div>
          <button
            class="power-btn ${open ? "is-on" : ""}"
            @click=${() => this._toggleCover(entityId)}
            aria-label=${t3(lang, open ? "action.close_cover" : "action.open_cover")}
            title=${t3(lang, open ? "action.close_cover" : "action.open_cover")}
          >
            ${icon(open ? "down" : "up", 15)}
          </button>
        </div>
        <div class="entity-foot">
          <div class="range-row">
            <span class="range-icon">${icon("covers", 13)}</span>
            <input
              class="fr-range"
              type="range"
              min="0"
              max="100"
              step="1"
              value=${position}
              style="--pct:${position}%"
              @input=${this._onRangeInput}
              @change=${(event) => this._setCoverPosition(entityId, event)}
              aria-label=${`${t3(lang, "control.position")} ${name}`}
            />
            <span class="range-value">${position}%</span>
          </div>
          <div class="card-action-row" style="margin-top:7px">
            <button class="mini-btn" @click=${() => this._coverCommand(entityId, "open_cover")}>${t3(lang, "action.open_cover")}</button>
            <button class="mini-btn" @click=${() => this._coverCommand(entityId, "stop_cover")}>${t3(lang, "action.stop_cover")}</button>
            <button class="mini-btn" @click=${() => this._coverCommand(entityId, "close_cover")}>${t3(lang, "action.close_cover")}</button>
          </div>
        </div>
      </div>
    `;
  }
  _renderClimateCard(entityId) {
    var _a2;
    const lang = this._lang();
    const state = getState(this.hass, entityId);
    const name = entityLabel(this._config, this.hass, entityId);
    const unavailable = isUnavailable(this.hass, entityId);
    const target = numberAttribute(this.hass, entityId, "temperature", 21);
    const current = numberAttribute(this.hass, entityId, "current_temperature", null);
    const modes = ((_a2 = state == null ? void 0 : state.attributes) == null ? void 0 : _a2.hvac_modes) || [];
    const mode = (state == null ? void 0 : state.state) || "off";
    const on = mode !== "off" && mode !== "unavailable";
    return b2`
      <div class="entity-card accent-cyan ${on ? "is-on" : ""} ${unavailable ? "is-unavailable" : ""}" style=${accentStyle("cyan")}>
        <div class="entity-head">
          <span class="entity-icon">${icon("climate", 17)}</span>
          <div class="entity-copy">
            <div class="entity-name">${name}</div>
            <div class="entity-state">
              ${unavailable ? t3(lang, "status.unavailable") : `${stateText(this.hass, entityId, lang)}${current !== null ? ` \xB7 ${current}\xB0C` : ""}`}
            </div>
          </div>
          <button
            class="power-btn ${on ? "is-on" : ""}"
            @click=${() => this._toggleClimate(entityId)}
            aria-label=${t3(lang, on ? "action.turn_off" : "action.turn_on")}
            title=${t3(lang, on ? "action.turn_off" : "action.turn_on")}
          >
            ${icon("power", 15)}
          </button>
        </div>
        <div class="climate-target">
          <button class="round-btn" @click=${() => this._stepClimate(entityId, -0.5)} aria-label=${t3(lang, "action.down")}>${icon("minus", 15)}</button>
          <div class="climate-value-wrap">
            <span class="climate-value">${target.toFixed(1)}</span>
            <span class="climate-unit">°C</span>
            <span class="climate-label">${t3(lang, "control.target")}</span>
          </div>
          <button class="round-btn" @click=${() => this._stepClimate(entityId, 0.5)} aria-label=${t3(lang, "action.up")}>${icon("plus", 15)}</button>
        </div>
        ${modes.length ? b2`<div class="climate-modes">
              ${modes.slice(0, 5).map(
      (item) => b2`<button
                  class="mini-btn ${item === mode ? "is-accent" : ""}"
                  @click=${() => this._setClimateMode(entityId, item)}
                >${t3(lang, `climate.${item}`) === `climate.${item}` ? item : t3(lang, `climate.${item}`)}</button>`
    )}
            </div>` : ""}
      </div>
    `;
  }
  _renderMediaCard(entityId) {
    var _a2;
    const lang = this._lang();
    const state = getState(this.hass, entityId);
    const name = entityLabel(this._config, this.hass, entityId);
    const title = mediaTitle(this.hass, entityId, lang);
    const subtitle = mediaSubtitle(this.hass, entityId, lang);
    const volume = mediaVolume(this.hass, entityId);
    const picture = (_a2 = state == null ? void 0 : state.attributes) == null ? void 0 : _a2.entity_picture;
    const value = (state == null ? void 0 : state.state) || "unavailable";
    const on = !["off", "standby", "unavailable", "unknown"].includes(value);
    const playing = value === "playing";
    return b2`
      <div class="media-card ${on ? "is-on" : ""}" style=${accentStyle("blue")}>
        <div class="media-head">
          <span class="media-icon">${icon("tv", 17)}</span>
          <div class="entity-copy">
            <div class="media-name">${name}</div>
            <div class="media-state">${stateText(this.hass, entityId, lang)}</div>
          </div>
          <button
            class="power-btn ${on ? "is-on" : ""}"
            @click=${() => this._toggleMedia(entityId)}
            aria-label=${t3(lang, "action.toggle")}
            title=${t3(lang, "action.toggle")}
          >
            ${icon("power", 15)}
          </button>
        </div>
        <div class="media-now">
          <div class="media-art">
            ${picture ? b2`<img src=${picture} alt="" />` : icon("tv", 26)}
          </div>
          <div class="media-copy">
            <div class="media-title">${title}</div>
            <div class="media-sub">${subtitle}</div>
          </div>
        </div>
        <div class="media-controls">
          <button
            class="mini-btn"
            @click=${() => this._mediaPlayPause(entityId)}
            aria-label=${t3(lang, playing ? "action.pause" : "action.play")}
            title=${t3(lang, playing ? "action.pause" : "action.play")}
          >${icon(playing ? "pause" : "play", 14)}</button>
          <span class="range-icon">${icon("volume", 14)}</span>
          <input
            class="fr-range"
            type="range"
            min="0"
            max="100"
            step="1"
            value=${volume}
            style="--pct:${volume}%"
            @input=${this._onRangeInput}
            @change=${(event) => this._setMediaVolume(entityId, event)}
            aria-label=${`${t3(lang, "control.volume")} ${name}`}
          />
          <span class="range-value">${volume}%</span>
        </div>
      </div>
    `;
  }
  _renderRemoteInfo(entityId) {
    const lang = this._lang();
    const name = entityLabel(this._config, this.hass, entityId);
    return b2`
      <div class="remote-info" style=${accentStyle("violet")}>
        <div class="remote-info-head">
          <span class="entity-icon">${icon("remote", 17)}</span>
          <div class="entity-copy">
            <div class="remote-info-title">${name}</div>
            <div class="remote-info-sub">${stateText(this.hass, entityId, lang)}</div>
          </div>
        </div>
        <div class="remote-command-label">${t3(lang, "control.commands")}</div>
        <div class="remote-command-list">
          <button class="mini-btn" @click=${() => this._sendRemote(entityId, "volume_down")}>${t3(lang, "control.volume")} −</button>
          <button class="mini-btn" @click=${() => this._sendRemote(entityId, "volume_up")}>${t3(lang, "control.volume")} +</button>
          <button class="mini-btn" @click=${() => this._sendRemote(entityId, "back")}>${t3(lang, "action.back")}</button>
          <button class="mini-btn" @click=${() => this._sendRemote(entityId, "home")}>${t3(lang, "action.home")}</button>
        </div>
        <div class="remote-visual" aria-hidden="true">
          <span class="remote-ring"></span>
          <span class="remote-ring two"></span>
          ${icon("remote", 30)}
        </div>
        <div class="remote-info-foot">${t3(lang, "remote.hint")}</div>
      </div>
    `;
  }
  _renderRemoteCard(entityId) {
    const lang = this._lang();
    const name = entityLabel(this._config, this.hass, entityId);
    return b2`
      <div class="remote-grid">
        ${this._renderRemoteInfo(entityId)}
        <div class="remote-card" style=${accentStyle("violet")}>
          <div class="remote-head">
            <div class="remote-head-copy">
              <div class="remote-head-title">${t3(lang, "section.remote")}</div>
              <div class="remote-head-sub">${name}</div>
            </div>
            <button
              class="power-btn"
              @click=${() => this._toggleRemote(entityId)}
              aria-label=${t3(lang, "action.toggle")}
              title=${t3(lang, "action.toggle")}
            >${icon("power", 15)}</button>
          </div>
          <div class="dpad">
            <span></span>
            <button @click=${() => this._sendRemote(entityId, "up")} aria-label=${t3(lang, "action.up")}>${icon("up", 17)}</button>
            <span></span>
            <button @click=${() => this._sendRemote(entityId, "left")} aria-label=${t3(lang, "action.left")}>${icon("left", 17)}</button>
            <button class="ok" @click=${() => this._sendRemote(entityId, "select")} aria-label=${t3(lang, "action.ok")}>OK</button>
            <button @click=${() => this._sendRemote(entityId, "right")} aria-label=${t3(lang, "action.right")}>${icon("right", 17)}</button>
            <span></span>
            <button @click=${() => this._sendRemote(entityId, "down")} aria-label=${t3(lang, "action.down")}>${icon("down", 17)}</button>
            <span></span>
          </div>
          <div class="remote-footer">
            <button class="mini-btn" @click=${() => this._sendRemote(entityId, "back")}>${t3(lang, "action.back")}</button>
            <button class="mini-btn" @click=${() => this._sendRemote(entityId, "home")}>${t3(lang, "action.home")}</button>
          </div>
        </div>
      </div>
    `;
  }
  _renderSensorCard(entityId, accent = "green") {
    var _a2;
    const lang = this._lang();
    const name = entityLabel(this._config, this.hass, entityId);
    const { value, unit } = formatSensorValue(this.hass, entityId, lang);
    const isText = !unit && Number.isNaN(Number((_a2 = getState(this.hass, entityId)) == null ? void 0 : _a2.state));
    return b2`
      <div class="sensor-card" style=${accentStyle(accent)} title=${`${name}: ${value}${unit ? ` ${unit}` : ""}`}>
        <div class="sensor-top">
          <span class="sensor-icon">${icon(sensorIcon(this.hass, entityId), 15)}</span>
        </div>
        <div class="sensor-label">${name}</div>
        <div class="sensor-value ${isText ? "is-text" : ""}">
          ${value}${unit ? b2`<span class="sensor-unit">${unit}</span>` : ""}
        </div>
      </div>
    `;
  }
  _renderChannelRow(ids) {
    const lang = this._lang();
    return b2`
      <div class="channel-row">
        ${ids.map((id) => {
      const name = entityLabel(this._config, this.hass, id);
      const value = formatEntityValue(this.hass, id, lang);
      return b2`<span class="channel-pill">${name}: <strong>${value}</strong></span>`;
    })}
      </div>
    `;
  }
  _renderRoomBody(room2) {
    const lang = this._lang();
    const ids = roomEntityIds(room2);
    if (ids.length === 0 && !room2.printer && !room2.doorbell) {
      return this._renderEmptyState("room", room2);
    }
    const activeSensors = this._activeIds(room2.entities.sensors || []);
    const channelIds = activeSensors.filter(
      (id) => String(id).includes("channel")
    );
    const otherSensors = activeSensors.filter(
      (id) => !channelIds.includes(id)
    );
    const media = this._activeIds(room2.entities.media || []);
    const remote = this._activeIds(room2.entities.remote || []);
    const lights = this._activeIds(room2.entities.lights || []);
    const covers = this._activeIds(room2.entities.covers || []);
    const climate = this._activeIds(room2.entities.climate || []);
    const plugs = this._activeIds(room2.entities.plugs || []);
    const appliances = this._activeIds(room2.entities.appliances || []);
    return b2`
      ${this._renderDoorbellSection(room2.doorbell)}
      ${media.length ? this._renderSection(
      t3(lang, "section.media"),
      b2`<div class="media-grid">${media.map((id) => this._renderMediaCard(id))}</div>
              ${channelIds.length ? this._renderChannelRow(channelIds) : ""}`,
      this._entityCount(media.length)
    ) : channelIds.length ? this._renderSection(
      t3(lang, "section.sensors"),
      this._renderChannelRow(channelIds),
      this._entityCount(channelIds.length)
    ) : ""}
      ${lights.length ? this._renderSection(
      t3(lang, "section.lights"),
      b2`<div class="entity-grid">${lights.map((id) => this._renderLightCard(id))}</div>`,
      this._entityCount(lights.length)
    ) : ""}
      ${covers.length ? this._renderSection(
      t3(lang, "section.covers"),
      b2`<div class="entity-grid">${covers.map((id) => this._renderCoverCard(id))}</div>`,
      this._entityCount(covers.length)
    ) : ""}
      ${climate.length ? this._renderSection(
      t3(lang, "section.climate"),
      b2`<div class="entity-grid">${climate.map((id) => this._renderClimateCard(id))}</div>`,
      this._entityCount(climate.length)
    ) : ""}
      ${remote.length ? this._renderSection(
      t3(lang, "section.remote"),
      b2`${remote.map((id) => this._renderRemoteCard(id))}`,
      this._entityCount(remote.length)
    ) : ""}
      ${plugs.length ? this._renderSection(
      t3(lang, "section.plugs"),
      b2`<div class="entity-grid">${plugs.map((id) => this._renderPlugCard(id))}</div>`,
      this._entityCount(plugs.length)
    ) : ""}
      ${this._renderPrinterSection(room2.printer)}
      ${appliances.length ? this._renderSection(
      t3(lang, "section.energy"),
      b2`<div class="sensor-grid">${appliances.map((id) => this._renderSensorCard(id, "green"))}</div>`,
      this._entityCount(appliances.length)
    ) : ""}
      ${otherSensors.length ? this._renderSection(
      t3(lang, "section.sensors"),
      b2`<div class="sensor-grid">${otherSensors.map((id) => this._renderSensorCard(id, "blue"))}</div>`,
      this._entityCount(otherSensors.length)
    ) : ""}
    `;
  }
  _renderSunTimeline() {
    const lang = this._lang();
    const events = this._sunEvents();
    const sunState = stateText(this.hass, this._config.global.sun, lang);
    if (events.length === 0) {
      return b2`<div class="empty-state-inline">${t3(lang, "status.unavailable")}</div>`;
    }
    return b2`
      <div class="sun-timeline">
        ${events.map(
      (event, index) => b2`
            <div class="sun-event ${index === 0 ? "is-next" : ""}">
              <span class="sun-event-icon">${icon(event.icon, 14)}</span>
              <div class="sun-event-label">${event.label}</div>
              <div class="sun-event-time">${event.time}</div>
              <div class="sun-event-day">${event.day}</div>
            </div>
          `
    )}
      </div>
      <div class="sun-state-line">
        ${icon("sun", 12)}
        <span>${sunState}</span>
      </div>
    `;
  }
  _renderNetwork() {
    const lang = this._lang();
    const global = this._config.global;
    const wanOnline = stateValue(this.hass, global.network.wan) === "on";
    const ip = stateValue(this.hass, global.network.ip);
    const tracker = stateText(this.hass, global.tracker, lang);
    const trackerName = entityLabel(this._config, this.hass, global.tracker);
    const powerOk = stateValue(this.hass, global.power_status) === "on";
    return b2`
      <div class="network-grid">
        <div class="net-tile">
          <div class="net-top">
            <span>${t3(lang, "network.wan")}</span>
            <span class="status-dot ${wanOnline ? "" : "is-off"}"></span>
          </div>
          <div class="net-value">${wanOnline ? t3(lang, "network.connected") : t3(lang, "network.disconnected")}</div>
          <div class="net-sub">${t3(lang, "network.secure")}</div>
        </div>
        <div class="net-tile">
          <div class="net-top">
            <span>${t3(lang, "network.ip")}</span>
            ${icon("ip", 13)}
          </div>
          <div class="net-value is-mono" title=${ip}>${ip && ip !== "unavailable" ? ip : "\u2014"}</div>
          <div class="net-sub">UPnP IGD</div>
        </div>
        <div class="net-tile">
          <div class="net-top">
            <span>${t3(lang, "network.tracker")}</span>
            ${icon("phone", 13)}
          </div>
          <div class="net-value">${trackerName}</div>
          <div class="net-sub">${tracker}</div>
        </div>
      </div>
      <div class="network-health ${powerOk ? "" : "is-off"}">
        <span class="status-dot ${powerOk ? "" : "is-off"}"></span>
        <span class="network-health-copy">
          <small>${t3(lang, "network.power")}</small>
          <strong>${powerOk ? t3(lang, "network.power_ok") : t3(lang, "network.power_issue")}</strong>
        </span>
        <span class="network-health-id">${entityLabel(this._config, this.hass, global.power_status)}</span>
      </div>
      <div class="network-actions">
        <button class="mini-btn" @click=${this._sendNotifyTest} ?disabled=${this._notifyBusy}>
          ${icon("bell", 13)} ${this._notifyBusy ? t3(lang, "label.loading") : t3(lang, "action.test")}
        </button>
        <span class="network-note">${entityLabel(this._config, this.hass, global.notify)}</span>
      </div>
    `;
  }
  async _sendNotifyTest() {
    if (this._notifyBusy) return;
    this._notifyBusy = true;
    try {
      await this.hass.callService(
        "notify",
        "send_message",
        { message: "Test \xB7 Zurlii Home" },
        { entity_id: this._config.global.notify }
      );
      this._showToast(t3(this._lang(), "network.test_sent"));
    } catch (error) {
      console.error("[Zurlii Home] notify.send_message", error);
      this._showToast(t3(this._lang(), "network.test_failed"), "error");
    } finally {
      this._notifyBusy = false;
    }
  }
  _renderUpdateCard(entityId) {
    var _a2, _b, _c;
    const lang = this._lang();
    const state = getState(this.hass, entityId);
    const available = (state == null ? void 0 : state.state) === "on";
    const name = ((_a2 = state == null ? void 0 : state.attributes) == null ? void 0 : _a2.title) || entityLabel(this._config, this.hass, entityId);
    const installed = ((_b = state == null ? void 0 : state.attributes) == null ? void 0 : _b.installed_version) || "\u2014";
    const latest = ((_c = state == null ? void 0 : state.attributes) == null ? void 0 : _c.latest_version) || "\u2014";
    const installing = Boolean(this._installing[entityId]);
    return b2`
      <div class="update-card ${available ? "is-available" : ""}">
        <span class="update-icon">${icon("update", 16)}</span>
        <div class="update-copy">
          <div class="update-name">${name}</div>
          <div class="update-meta">
            ${available ? `${installed} \u2192 ${latest}` : `${t3(lang, "control.installed")} ${installed}`}
          </div>
        </div>
        ${available ? b2`<button class="mini-btn is-accent" @click=${() => this._installUpdate(entityId)} ?disabled=${installing}>
              ${installing ? t3(lang, "update.installing") : t3(lang, "action.install")}
            </button>` : ""}
      </div>
    `;
  }
  async _installUpdate(entityId) {
    if (this._installing[entityId]) return;
    this._installing = { ...this._installing, [entityId]: true };
    try {
      await this.hass.callService("update", "install", { entity_id: entityId });
      this._showToast(t3(this._lang(), "update.installed"));
    } catch (error) {
      console.error("[Zurlii Home] update.install", error);
      this._showToast(t3(this._lang(), "update.failed"), "error");
    } finally {
      const next = { ...this._installing };
      delete next[entityId];
      this._installing = next;
    }
  }
  _renderUpdates() {
    const ids = this._config.features.updates ? this._config.global.updates || [] : [];
    if (ids.length === 0) return b2`<div class="empty-state-inline">${t3(this._lang(), "update.up_to_date")}</div>`;
    return b2`<div class="update-grid">${ids.map((id) => this._renderUpdateCard(id))}</div>`;
  }
  _renderAssistantBody() {
    const lang = this._lang();
    const suggestions = [
      "Arat\xC4\x83-mi camera Curte",
      "Porne\u010C\u2122te muzica pe tablet\xC4\x83",
      "Opre\u010C\u2122te luminile",
      "Deschide vremea"
    ];
    return b2`
      <div class="assistant-hero">
        <span class="assistant-hero-icon">${icon("mic", 23)}</span>
        <div>
          <strong>${t3(lang, "sheet.assistant.title")}</strong>
          <small>${t3(lang, "sheet.assistant.subtitle")}</small>
        </div>
      </div>
      ${this._renderAssist()}
      <div class="assistant-suggestions">
        <span>${t3(lang, "assist.suggestions")}</span>
        <div>
          ${suggestions.map(
      (suggestion) => b2`<button
              class="mini-btn"
              @click=${() => {
        this._assistText = suggestion;
        this._processAssist(null, false);
      }}
            >${suggestion}</button>`
    )}
        </div>
      </div>
    `;
  }
  _renderAssist() {
    const lang = this._lang();
    return b2`
      <div class="assist-card">
        <form class="assist-form" @submit=${this._processAssist}>
          <input
            class="text-input"
            type="text"
            .value=${this._assistText}
            @input=${(event) => {
      this._assistText = event.target.value;
    }}
            placeholder=${t3(lang, "assist.placeholder")}
            aria-label=${t3(lang, "assist.placeholder")}
          />
          <button
            class="send-btn mic-btn ${this._listening ? "is-listening" : ""}"
            type="button"
            @click=${this._startVoice}
            aria-label=${t3(lang, "assist.mic")}
            title=${t3(lang, this._listening ? "assist.listening" : "assist.mic")}
          >
            ${icon("mic", 16)}
          </button>
          <button class="send-btn" type="submit" ?disabled=${this._assistBusy} aria-label=${t3(lang, "action.send")}>
            ${this._assistBusy ? b2`<span class="spinner small"></span>` : icon("message", 17)}
          </button>
        </form>
        <div class="assist-hint">${t3(lang, "assist.hint")}</div>
        ${this._assistAnswer ? b2`<div class="assist-answer ${this._assistError ? "is-error" : ""}">${this._assistAnswer}</div>` : b2`<div class="assist-answer is-thinking">${t3(lang, "assist.welcome")}</div>`}
      </div>
    `;
  }
  _normalizeText(value) {
    return String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]+/g, " ").replace(/\s+/g, " ").trim();
  }
  _findEntity(text, domains) {
    const normalized = this._normalizeText(text);
    if (!normalized) return null;
    let best = null;
    let bestScore = 0;
    for (const [entityId, state] of Object.entries(this.hass.states || {})) {
      if (!domains.includes(entityId.split(".")[0])) continue;
      if (!this._isActiveEntity(state, entityId)) continue;
      const label = this._normalizeText(
        entityLabel(this._config, this.hass, entityId)
      );
      const tokens = label.split(" ").filter((token) => token.length > 2);
      let score = 0;
      for (const token of tokens) {
        if (normalized.includes(token)) score += token.length;
      }
      if (normalized.includes(label)) score += 20;
      if (score > bestScore) {
        best = { entityId, state, label, score };
        bestScore = score;
      }
    }
    return bestScore > 0 ? best : null;
  }
  _startVoice() {
    var _a2;
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) {
      this._showToast(t3(this._lang(), "assist.voice_unsupported"), "error");
      return;
    }
    if (this._listening) {
      (_a2 = this._recognition) == null ? void 0 : _a2.stop();
      return;
    }
    const recognition = new Recognition();
    recognition.lang = this._config.language === "ro" ? "ro-RO" : "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.onresult = (event) => {
      var _a3, _b, _c;
      const transcript = ((_c = (_b = (_a3 = event.results) == null ? void 0 : _a3[0]) == null ? void 0 : _b[0]) == null ? void 0 : _c.transcript) || "";
      if (!transcript) return;
      this._assistText = transcript;
      this._processAssist(null, true);
    };
    recognition.onend = () => {
      this._listening = false;
      this.requestUpdate();
    };
    recognition.onerror = () => {
      this._listening = false;
      this._showToast(t3(this._lang(), "assist.voice_error"), "error");
      this.requestUpdate();
    };
    this._recognition = recognition;
    this._listening = true;
    this.requestUpdate();
    try {
      recognition.start();
    } catch (error) {
      console.error("[Zurlii Home] speech recognition", error);
      this._listening = false;
      this._showToast(t3(this._lang(), "assist.voice_unsupported"), "error");
    }
  }
  _speak(text) {
    var _a2;
    if (!((_a2 = this._config.global.assistant) == null ? void 0 : _a2.speak)) return;
    if (!window.speechSynthesis || !text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = this._config.language === "ro" ? "ro-RO" : "en-US";
    utterance.rate = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }
  _runLocalIntent(text) {
    var _a2;
    const lang = this._lang();
    const normalized = this._normalizeText(text);
    const has = (...words) => words.some((word) => normalized.includes(word));
    if (has("camerele")) {
      this._openSheet({ type: "cameras" });
      return t3(lang, "assist.execute_navigation", { name: t3(lang, "nav.cameras") });
    }
    if (has("incaperi", "incaperile", "spatii")) {
      this._openSheet({ type: "spaces" });
      return t3(lang, "assist.execute_navigation", { name: t3(lang, "nav.spaces") });
    }
    if (has("camera", "sonerie", "poarta")) {
      const cameras = this._cameraEntities();
      const camera = cameras.find((item) => {
        const name = this._normalizeText(item.name);
        return has(...name.split(" ").filter((token) => token.length > 2));
      }) || cameras[0];
      if (camera) {
        this._openCameraSheet(camera.entityId);
        return t3(lang, "assist.execute_camera", { name: camera.name });
      }
    }
    if (has("muzica", "radio", "melodie", "muzical")) {
      if (has("opreste", "stop", "inchide", "oprit")) {
        this._stopMusic();
        return t3(lang, "assist.execute_music_off");
      }
      const device = this._musicDevices().find((item) => {
        const name = this._normalizeText(item.name);
        return has(...name.split(" ").filter((token) => token.length > 2));
      });
      if (!this._musicLocalUrl && !this._musicUrl) {
        return t3(lang, "music.no_source");
      }
      if (device) this._selectMusicDevice(device.entityId);
      else if (has("tableta", "tablet")) this._selectMusicOutput("tablet");
      this._playMusic();
      const output = this._musicOutput === "tablet" ? t3(lang, "music.tablet") : entityLabel(this._config, this.hass, this._currentMusicDevice());
      return t3(lang, "assist.execute_music_on", { name: output });
    }
    if (has("vremea", "meteo")) {
      this._openSheet({ type: "weather" });
      return t3(lang, "assist.execute_navigation", { name: t3(lang, "nav.weather") });
    }
    if (has("energie", "consum")) {
      this._openSheet({ type: "energy" });
      return t3(lang, "assist.execute_navigation", { name: t3(lang, "nav.energy") });
    }
    if (has("camere", "camerele")) {
      this._openSheet({ type: "cameras" });
      return t3(lang, "assist.execute_navigation", { name: t3(lang, "nav.cameras") });
    }
    if (has("sistem", "retea", "setari")) {
      this._openSheet({ type: "system" });
      return t3(lang, "assist.execute_navigation", { name: t3(lang, "nav.system") });
    }
    if (has("opreste tot", "stinge tot", "tot oprit")) {
      const lights = Object.keys(this.hass.states).filter(
        (id) => id.startsWith("light.")
      );
      if (lights.length) {
        this._service("light", "turn_off", { entity_id: lights });
      }
      return t3(lang, "assist.execute_light_off", { name: t3(lang, "nav.lights") });
    }
    if (has("lumina", "lumini", "luminile", "bec", "becuri", "aprinde", "stinge", "porneste", "opreste")) {
      const light = this._findEntity(normalized, ["light"]);
      if (light) {
        const on = !has("stinge", "opreste", "inchide");
        this._service("light", on ? "turn_on" : "turn_off", {
          entity_id: light.entityId
        });
        return t3(lang, on ? "assist.execute_light_on" : "assist.execute_light_off", {
          name: entityLabel(this._config, this.hass, light.entityId)
        });
      }
    }
    if (has("jaluzea", "jaluzele", "perdea", "rulou", "rulouri")) {
      const cover = this._findEntity(normalized, ["cover"]);
      if (cover) {
        const open = !has("inchide", "coboara", "opreste");
        this._service("cover", open ? "open_cover" : "close_cover", {
          entity_id: cover.entityId
        });
        return t3(lang, open ? "assist.execute_cover_open" : "assist.execute_cover_close", {
          name: entityLabel(this._config, this.hass, cover.entityId)
        });
      }
    }
    if (has("temperatura", "clima", "termostat")) {
      const climate = this._findEntity(normalized, ["climate"]);
      const degrees = Number((_a2 = normalized.match(/\b(\d{1,2})(?:\s|$)/)) == null ? void 0 : _a2[1]);
      if (climate && Number.isFinite(degrees)) {
        this._service("climate", "set_temperature", {
          entity_id: climate.entityId,
          temperature: clamp(degrees, 10, 32)
        });
        return `${entityLabel(this._config, this.hass, climate.entityId)}: ${degrees}\xB0C.`;
      }
    }
    if (has("televizor", "televizoare", "tv")) {
      const media = this._findEntity(normalized, ["media_player"]);
      if (media) {
        const on = !has("opreste", "stinge", "inchide");
        this._service("media_player", on ? "turn_on" : "turn_off", {
          entity_id: media.entityId
        });
        return t3(lang, on ? "assist.execute_media_on" : "assist.execute_media_off", {
          name: entityLabel(this._config, this.hass, media.entityId)
        });
      }
    }
    return null;
  }
  async _processAssist(event, speak = false) {
    event == null ? void 0 : event.preventDefault();
    if (this._assistBusy) return;
    const text = this._assistText.trim();
    if (!text) {
      this._showToast(t3(this._lang(), "assist.empty"), "error");
      return;
    }
    this._assistBusy = true;
    this._assistError = false;
    this._assistAnswer = t3(this._lang(), "assist.thinking");
    try {
      const local = this._runLocalIntent(text);
      if (local) {
        this._assistAnswer = local;
        if (speak) this._speak(local);
        return;
      }
      const response = await this.hass.callService(
        "conversation",
        "process",
        {
          text,
          agent_id: this._config.global.conversation,
          language: this._config.language
        },
        void 0,
        false,
        true
      );
      const answer = this._extractAssistAnswer(response);
      this._assistAnswer = answer || t3(this._lang(), "assist.error");
      this._assistError = !answer;
      if (speak && answer) this._speak(answer);
    } catch (error) {
      console.error("[Zurlii Home] conversation.process", error);
      this._assistAnswer = t3(this._lang(), "assist.error");
      this._assistError = true;
    } finally {
      this._assistBusy = false;
      this.requestUpdate();
    }
  }
  _extractAssistAnswer(response) {
    var _a2, _b, _c, _d, _e;
    const payload = (response == null ? void 0 : response.response) || response;
    const speech = payload == null ? void 0 : payload.speech;
    if (typeof speech === "string") return speech;
    return ((_a2 = speech == null ? void 0 : speech.plain) == null ? void 0 : _a2.speech) || ((_b = speech == null ? void 0 : speech.plain) == null ? void 0 : _b.text) || ((_e = (_d = (_c = payload == null ? void 0 : payload.response) == null ? void 0 : _c.speech) == null ? void 0 : _d.plain) == null ? void 0 : _e.speech) || null;
  }
  async _loadTodo(force = false) {
    var _a2;
    if (!this._config.features.todo || this._todoLoading) return;
    if (this._todoItems !== null && !force) return;
    this._todoLoading = true;
    this._todoError = false;
    try {
      const response = await this.hass.callService(
        "todo",
        "get_items",
        { entity_id: this._config.global.todo },
        void 0,
        false,
        true
      );
      const items = (response == null ? void 0 : response.items) || ((_a2 = response == null ? void 0 : response.response) == null ? void 0 : _a2.items) || [];
      this._todoItems = Array.isArray(items) ? items : [];
    } catch (error) {
      console.error("[Zurlii Home] todo.get_items", error);
      this._todoError = true;
      this._todoItems = [];
    } finally {
      this._todoLoading = false;
    }
  }
  async _addTodo(event) {
    event.preventDefault();
    const item = this._todoText.trim();
    if (!item) return;
    const ok = await this._service(
      "todo",
      "add_item",
      { entity_id: this._config.global.todo, item },
      { success: t3(this._lang(), "todo.added"), error: t3(this._lang(), "todo.add_failed") }
    );
    if (ok) {
      this._todoText = "";
      this._loadTodo(true);
    }
  }
  async _completeTodo(item) {
    if (!(item == null ? void 0 : item.uid)) return;
    const ok = await this._service("todo", "update_item", {
      entity_id: this._config.global.todo,
      item: item.uid,
      status: "completed"
    });
    if (ok) this._loadTodo(true);
  }
  _renderTodo() {
    const lang = this._lang();
    if (!this._config.features.todo) return A;
    const pending = (this._todoItems || []).filter((item) => item.status !== "completed");
    return b2`
      <div class="todo-card">
        <form class="todo-add" @submit=${this._addTodo}>
          <input
            class="text-input"
            type="text"
            .value=${this._todoText}
            @input=${(event) => {
      this._todoText = event.target.value;
    }}
            placeholder=${t3(lang, "todo.placeholder")}
            aria-label=${t3(lang, "todo.placeholder")}
          />
          <button class="send-btn" type="submit" aria-label=${t3(lang, "action.add")}>${icon("plus", 17)}</button>
        </form>
        ${this._todoLoading ? b2`<div class="todo-skeleton"><span></span><span></span><span></span></div>` : this._todoError ? b2`<div class="todo-empty">
                ${t3(lang, "todo.failed")}
                <button class="mini-btn" style="margin-left:8px" @click=${() => this._loadTodo(true)}>${t3(lang, "action.retry")}</button>
              </div>` : pending.length ? pending.map(
      (item) => b2`
                    <div class="todo-item">
                      <button class="todo-check" @click=${() => this._completeTodo(item)} aria-label=${t3(lang, "todo.mark_done")}>
                        ${icon("check", 13)}
                      </button>
                      <span class="todo-summary">${item.summary}</span>
                    </div>
                  `
    ) : b2`<div class="todo-empty">${t3(lang, "todo.empty")}</div>`}
      </div>
    `;
  }
  _renderSystemBody() {
    const lang = this._lang();
    return b2`
      ${this._renderStats()}
      ${this._renderSection(t3(lang, "section.sun"), this._renderSunTimeline())}
      ${this._renderSection(t3(lang, "section.network"), this._renderNetwork())}
      ${this._renderSection(t3(lang, "section.system"), this._renderUpdates())}
      ${this._renderSection(t3(lang, "section.assist"), this._renderAssist())}
      ${this._renderSection(t3(lang, "section.todo"), this._renderTodo())}
    `;
  }
  _mappingSnippet(kind, room2 = null) {
    const group = kind === "energy" ? "appliances" : kind === "media" ? "media" : ["lights", "covers", "climate"].includes(kind) ? kind : "lights";
    const domain = {
      lights: "light",
      covers: "cover",
      climate: "climate",
      appliances: "sensor",
      media: "media_player"
    }[group];
    if (kind === "room") {
      return [
        "type: custom:zurlii-home",
        "rooms:",
        `  - id: ${(room2 == null ? void 0 : room2.id) || "<room_id>"}`,
        "    entities:",
        "      lights: [light.<entity_id>]",
        "      covers: [cover.<entity_id>]",
        "      climate: [climate.<entity_id>]"
      ].join("\n");
    }
    return [
      "type: custom:zurlii-home",
      "rooms:",
      `  - id: ${(room2 == null ? void 0 : room2.id) || "<room_id>"}`,
      "    entities:",
      `      ${group}: [${domain}.<entity_id>]`
    ].join("\n");
  }
  async _copyMapping(kind, room2 = null) {
    const text = this._mappingSnippet(kind, room2);
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.warn("[Zurlii Home] clipboard unavailable", error);
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
      } catch (copyError) {
        console.warn("[Zurlii Home] copy fallback failed", copyError);
      }
      textarea.remove();
    }
    this._showToast(t3(this._lang(), "empty.copied"));
  }
  _renderEmptyState(kind, room2 = null) {
    const lang = this._lang();
    let meta = {
      title: t3(lang, "empty.room_title"),
      body: t3(lang, "empty.room_body"),
      icon: (room2 == null ? void 0 : room2.icon) || "home"
    };
    if (kind === "room") {
      meta = {
        title: t3(lang, "empty.room_title"),
        body: t3(lang, "empty.room_body"),
        icon: (room2 == null ? void 0 : room2.icon) || "home"
      };
    } else if (GROUP_EMPTY[kind]) {
      meta = {
        title: t3(lang, GROUP_EMPTY[kind].title),
        body: t3(lang, GROUP_EMPTY[kind].body),
        icon: GROUP_EMPTY[kind].icon
      };
    }
    const snippet = this._mappingSnippet(kind, room2);
    const ghostCount = ["climate", "covers", "energy", "media"].includes(kind) ? 4 : 6;
    return b2`
      <div class="empty-panel">
        <span class="empty-icon">${icon(meta.icon, 21)}</span>
        <div class="empty-copy">
          <div class="empty-title">${meta.title}</div>
          <div class="empty-text">${meta.body}</div>
          <details class="empty-details">
            <summary>${t3(lang, "empty.map_hint")}</summary>
            <p>${t3(lang, "empty.map_body")}</p>
            <pre class="mapping-code">${snippet}</pre>
            <div class="empty-copy-row">
              <button class="mini-btn is-accent" @click=${() => this._copyMapping(kind, room2)}>
                ${icon("copy", 12)} ${t3(lang, "action.copy")}
              </button>
              <span class="empty-docs-hint">${t3(lang, "empty.docs_hint")}</span>
            </div>
          </details>
        </div>
      </div>
      <div class="skeleton-label">${t3(lang, "section.preview")}</div>
      <div class="skeleton-grid count-${ghostCount}" aria-hidden="true">
        ${Array.from({ length: ghostCount }).map(
      () => b2`
            <div class="ghost-card">
              <div class="ghost-icon"></div>
              <div class="ghost-line"></div>
              <div class="ghost-line short"></div>
              <div class="ghost-slot">${t3(lang, "empty.slot")}</div>
              <div class="ghost-track"></div>
            </div>
          `
    )}
      </div>
    `;
  }
  _renderSheetBody(sheet) {
    if (sheet.type === "home") return this._renderHomeBody();
    if (sheet.type === "cameras") return this._renderCamerasBody();
    if (sheet.type === "rooms" || sheet.type === "spaces") return this._renderSpacesBody();
    if (sheet.type === "lights") return this._renderGlobalGroup("lights");
    if (sheet.type === "covers") return this._renderGlobalGroup("covers");
    if (sheet.type === "climate") return this._renderGlobalGroup("climate");
    if (sheet.type === "weather") return this._renderWeatherBody();
    if (sheet.type === "energy") return this._renderEnergyBody();
    if (sheet.type === "media") return this._renderMediaBody();
    if (sheet.type === "music") return this._renderMusicBody();
    if (sheet.type === "routines") return this._renderRoutinesBody();
    if (sheet.type === "room") {
      const room2 = this._roomById(sheet.roomId);
      if (!room2) return b2`<div class="empty-state-inline">${t3(this._lang(), "status.unknown")}</div>`;
      return this._renderRoomBody(room2);
    }
    if (sheet.type === "system") return this._renderSystemBody();
    if (sheet.type === "camera") return this._renderCameraBody(sheet.cameraId);
    if (sheet.type === "controls") return this._renderControlsBody();
    if (sheet.type === "entity") return this._renderEntityBody(sheet.entityId);
    if (sheet.type === "youtube") return this._renderYoutubeBody();
    if (sheet.type === "assistant") return this._renderAssistantBody();
    return A;
  }
  _renderCameraBody(entityId) {
    const lang = this._lang();
    const state = getState(this.hass, entityId);
    if (!state) {
      return b2`<div class="empty-state-inline">${t3(lang, "status.unavailable")}</div>`;
    }
    return b2`
      ${this._renderCameraLive(entityId, "", "is-large")}
      <div class="camera-detail-grid">
        <div class="camera-detail"><span>${t3(lang, "camera.status")}</span><strong>${stateText(this.hass, entityId, lang)}</strong></div>
        <div class="camera-detail"><span>${t3(lang, "camera.entity")}</span><strong class="is-mono">${entityId}</strong></div>
        <div class="camera-detail"><span>${t3(lang, "camera.updated")}</span><strong>${relativeTime(state.last_updated || state.last_changed, lang)}</strong></div>
      </div>
      <div class="camera-detail-actions">
        <button class="mini-btn" @click=${() => this._openMoreInfo(entityId)}>${icon("video", 14)} ${t3(lang, "camera.open_ha")}</button>
        <button class="mini-btn" @click=${() => this._closeSheet()}>${t3(lang, "action.close")}</button>
      </div>
    `;
  }
  _renderSheet() {
    const meta = this._sheetMeta();
    if (!meta) return A;
    const lang = this._lang();
    const room2 = meta.type === "room" ? this._roomById(this._sheet.roomId) : null;
    const lightsOn = this._config.rooms.some(
      (entry) => (entry.entities.lights || []).some((id) => isOn(this.hass, id))
    );
    return b2`
      <div class="scrim ${this._closing ? "is-closing" : ""}" @click=${this._closeSheet}></div>
      <div class="sheet-wrap">
        <section
          class="sheet ${this._closing ? "is-closing" : ""}"
          role="dialog"
          aria-modal="true"
          aria-labelledby="zurlii-sheet-title"
          style=${`--sheet-accent-rgb:${accentRgb(meta.accent)};`}
        >
          <header
            class="sheet-head"
            @pointerdown=${this._onDragStart}
            @pointermove=${this._onDragMove}
            @pointerup=${this._onDragEnd}
            @pointercancel=${this._onDragEnd}
          >
            <div class="grabber"></div>
            <span class="sheet-icon">${icon(meta.icon, 21)}</span>
            <div class="sheet-title">
              <span class="sheet-eyebrow">${meta.eyebrow}</span>
              <h1 id="zurlii-sheet-title">${meta.title}</h1>
              <p class="sheet-subtitle">${meta.subtitle}</p>
            </div>
            <div class="head-actions">
              ${meta.type === "room" ? b2`<button class="ghost-btn" @click=${() => this._openSheet({ type: "spaces" })} aria-label=${t3(lang, "sheet.rooms.title")}>
                    ${icon("chevronLeft", 13)} <span>${t3(lang, "nav.spaces")}</span>
                  </button>` : ""}
              ${meta.type === "lights" && lightsOn ? b2`<button class="ghost-btn" @click=${this._allLightsOff}>${t3(lang, "action.all_off")}</button>` : ""}
              <button class="sheet-close" @click=${this._closeSheet} aria-label=${t3(lang, "action.close")} title=${t3(lang, "action.close")}>
                ${icon("close", 17)}
              </button>
            </div>
          </header>
          <div class="sheet-body">${room2 ? this._renderRoomBody(room2) : this._renderSheetBody(this._sheet)}</div>
        </section>
      </div>
    `;
  }
  _renderDock() {
    const lang = this._lang();
    const active = this._activeNav();
    const items = [
      { id: "home", icon: "home", label: "nav.home" },
      { id: "lights", icon: "lights", label: "nav.lights" },
      { id: "covers", icon: "covers", label: "nav.covers" },
      { id: "climate", icon: "climate", label: "nav.climate" },
      { id: "cameras", icon: "video", label: "nav.cameras" },
      { id: "weather", icon: "weather", label: "nav.weather" },
      { id: "energy", icon: "flash", label: "nav.energy" },
      { id: "media", icon: "tv", label: "nav.media" },
      { id: "routines", icon: "routines", label: "nav.routines" },
      { id: "system", icon: "system", label: "nav.system" }
    ];
    return b2`
      <nav class="dock" aria-label=${t3(lang, "nav.label")}>
        ${items.map(
      (item) => b2`
            <button
              class="dock-item ${active === item.id ? "is-active" : ""}"
              @click=${() => this._dockAction(item.id)}
              aria-label=${t3(lang, item.label)}
              aria-current=${active === item.id ? "page" : A}
            >
              <span class="dock-icon">${icon(item.icon, 21)}</span>
              <span class="dock-label">${t3(lang, item.label)}</span>
              <span class="dock-line"></span>
            </button>
          `
    )}
      </nav>
    `;
  }
  render() {
    if (!this.hass) {
      return b2`
        <div class="loader">
          <div class="loader-inner"><span class="spinner"></span>${t3(this._lang(), "label.loading")}</div>
        </div>
      `;
    }
    const activeRoom = this._activeRoom ? this._roomById(this._activeRoom) : null;
    const bgUrl = this._bgUrl || homeBackground(this._config);
    return b2`
      <div class="stage">
        <div class="bg-fallback"></div>
        <img
          class="bg-img ${this._bgLoaded ? "is-loaded" : ""}"
          src=${bgUrl}
          alt=""
          @load=${this._onBgLoad}
          @error=${this._onBgError}
        />
        <div class="shade shade-top"></div>
        <div class="shade shade-bottom"></div>
        <div class="shade shade-left"></div>
        <div class="shade vignette"></div>
        <div class="grain"></div>
        ${this._renderTopbar()}
        <div class="clock-wrap">
          <zurlii-clock
            .lang=${this._lang()}
            .name=${this._config.greeting_name}
            .showSeconds=${Boolean(this._config.clock.show_seconds)}
          ></zurlii-clock>
        </div>
        ${activeRoom ? this._renderRoomFloat(activeRoom) : ""}
        ${this._sheet ? this._renderSheet() : ""}
        ${this._renderDoorbellCall()}
        ${this._renderDock()}
        ${this._toast ? b2`<div class="toast ${this._toast.tone === "error" ? "is-error" : ""}" role="status" aria-live="polite">
              <span class="toast-icon">${icon(this._toast.tone === "error" ? "alert" : "check-circle", 14)}</span>
              <span>${this._toast.message}</span>
            </div>` : ""}
      </div>
    `;
  }
};
if (!customElements.get("zurlii-home")) {
  customElements.define("zurlii-home", ZurliiHome);
}
window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === "zurlii-home")) {
  window.customCards.push({
    type: "zurlii-home",
    name: "Zurlii Home",
    description: "Premium glassmorphism dashboard with room popups, dynamic backgrounds and pill controls.",
    preview: true
  });
}

// src/zurlii-panel.js
var ZurliiHomePanel = class extends i4 {
  static properties = {
    hass: { attribute: false },
    panel: { attribute: false },
    _remoteConfig: { state: true },
    _ready: { state: true },
    _error: { state: true }
  };
  static styles = i`
    :host {
      display: block;
      width: 100%;
      height: 100vh;
      height: -webkit-fill-available;
      height: 100dvh;
      min-height: 0;
      overflow: hidden;
      background: #03070d;
    }

    zurlii-home {
      display: block;
      width: 100%;
      height: 100% !important;
      min-height: 0 !important;
    }

    .boot {
      position: absolute;
      inset: 0;
      display: grid;
      place-items: center;
      background:
        radial-gradient(100% 80% at 62% 8%, rgba(28, 58, 98, 0.5), transparent 62%),
        #040911;
      color: rgba(225, 238, 255, 0.6);
      font-family: "Segoe UI", system-ui, sans-serif;
      font-size: 10px;
      font-weight: 650;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }

    .boot-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
    }

    .spinner {
      width: 30px;
      height: 30px;
      border-radius: 99px;
      border: 2px solid rgba(255, 255, 255, 0.1);
      border-top-color: rgba(103, 182, 255, 0.9);
      animation: spin 900ms linear infinite;
    }

    .error-badge {
      position: absolute;
      right: 16px;
      bottom: 94px;
      z-index: 100;
      max-width: 320px;
      padding: 8px 11px;
      border-radius: 10px;
      border: 1px solid rgba(255, 130, 150, 0.3);
      background: rgba(31, 9, 15, 0.88);
      color: #ffd6dd;
      font-size: 10px;
      line-height: 1.4;
      backdrop-filter: blur(14px);
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `;
  constructor() {
    super();
    this._remoteConfig = null;
    this._ready = false;
    this._error = "";
    this._requested = false;
  }
  willUpdate(changed) {
    if (changed.has("hass") && this.hass && !this._requested) {
      this._requested = true;
      this._loadConfig();
    }
  }
  async _loadConfig() {
    try {
      const config = await this.hass.callApi("GET", "zurlii_home/config");
      this._remoteConfig = {
        ...config,
        panel_mode: true
      };
    } catch (error) {
      console.error("[Zurlii Home] Unable to load panel configuration", error);
      this._error = this.hass.language === "ro" ? "Configura\u021Bia integr\u0103rii nu a putut fi \xEEnc\u0103rcat\u0103. Se folosesc valorile implicite." : "Integration configuration could not be loaded. Using defaults.";
      this._remoteConfig = { panel_mode: true };
    } finally {
      this._ready = true;
    }
  }
  render() {
    if (!this.hass) {
      return b2`
        <div class="boot">
          <div class="boot-inner"><span class="spinner"></span>Zurlii Home</div>
        </div>
      `;
    }
    if (!this._ready) {
      return b2`
        <div class="boot">
          <div class="boot-inner"><span class="spinner"></span>Zurlii Home</div>
        </div>
      `;
    }
    return b2`
      <zurlii-home .hass=${this.hass} .config=${this._remoteConfig || {}}></zurlii-home>
      ${this._error ? b2`<div class="error-badge">${this._error}</div>` : ""}
    `;
  }
};
if (!customElements.get("zurlii-home-panel")) {
  customElements.define("zurlii-home-panel", ZurliiHomePanel);
}
export {
  ZurliiHome,
  ZurliiHomePanel
};
