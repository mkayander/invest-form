var bl = Object.defineProperty,
  _l = Object.defineProperties;
var wl = Object.getOwnPropertyDescriptors;
var Do = Object.getOwnPropertySymbols;
var El = Object.prototype.hasOwnProperty,
  xl = Object.prototype.propertyIsEnumerable;
var No = (e, t, n) =>
    t in e
      ? bl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ln = (e, t) => {
    for (var n in t || (t = {})) El.call(t, n) && No(e, n, t[n]);
    if (Do) for (var n of Do(t)) xl.call(t, n) && No(e, n, t[n]);
    return e;
  },
  un = (e, t) => _l(e, wl(t));
const Al = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerpolicy && (s.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
};
Al();
function eo(e, t) {
  const n = Object.create(null),
    r = e.split(",");
  for (let o = 0; o < r.length; o++) n[r[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
const Cl =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Ol = eo(Cl);
function zs(e) {
  return !!e || e === "";
}
function to(e) {
  if (W(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        o = be(r) ? Tl(r) : to(r);
      if (o) for (const s in o) t[s] = o[s];
    }
    return t;
  } else {
    if (be(e)) return e;
    if (_e(e)) return e;
  }
}
const Pl = /;(?![^(]*\))/g,
  Rl = /:(.+)/;
function Tl(e) {
  const t = {};
  return (
    e.split(Pl).forEach((n) => {
      if (n) {
        const r = n.split(Rl);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }),
    t
  );
}
function we(e) {
  let t = "";
  if (be(e)) t = e;
  else if (W(e))
    for (let n = 0; n < e.length; n++) {
      const r = we(e[n]);
      r && (t += r + " ");
    }
  else if (_e(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const an = (e) =>
    be(e)
      ? e
      : e == null
      ? ""
      : W(e) || (_e(e) && (e.toString === Js || !Q(e.toString)))
      ? JSON.stringify(e, Ys, 2)
      : String(e),
  Ys = (e, t) =>
    t && t.__v_isRef
      ? Ys(e, t.value)
      : zt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, o]) => ((n[`${r} =>`] = o), n),
            {}
          ),
        }
      : Qs(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : _e(t) && !W(t) && !Zs(t)
      ? String(t)
      : t,
  ue = {},
  qt = [],
  Ye = () => {},
  Sl = () => !1,
  Ml = /^on[^a-z]/,
  ur = (e) => Ml.test(e),
  no = (e) => e.startsWith("onUpdate:"),
  Ce = Object.assign,
  ro = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Il = Object.prototype.hasOwnProperty,
  ee = (e, t) => Il.call(e, t),
  W = Array.isArray,
  zt = (e) => ar(e) === "[object Map]",
  Qs = (e) => ar(e) === "[object Set]",
  Q = (e) => typeof e == "function",
  be = (e) => typeof e == "string",
  oo = (e) => typeof e == "symbol",
  _e = (e) => e !== null && typeof e == "object",
  Xs = (e) => _e(e) && Q(e.then) && Q(e.catch),
  Js = Object.prototype.toString,
  ar = (e) => Js.call(e),
  $l = (e) => ar(e).slice(8, -1),
  Zs = (e) => ar(e) === "[object Object]",
  so = (e) =>
    be(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  zn = eo(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  cr = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  kl = /-(\w)/g,
  st = cr((e) => e.replace(kl, (t, n) => (n ? n.toUpperCase() : ""))),
  Ll = /\B([A-Z])/g,
  tn = cr((e) => e.replace(Ll, "-$1").toLowerCase()),
  fr = cr((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  _r = cr((e) => (e ? `on${fr(e)}` : "")),
  xn = (e, t) => !Object.is(e, t),
  wr = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Jn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Gs = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let jo;
const Fl = () =>
  jo ||
  (jo =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
      ? self
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : {});
let lt;
class ei {
  constructor(t = !1) {
    (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      !t &&
        lt &&
        ((this.parent = lt),
        (this.index = (lt.scopes || (lt.scopes = [])).push(this) - 1));
  }
  run(t) {
    if (this.active)
      try {
        return (lt = this), t();
      } finally {
        lt = this.parent;
      }
  }
  on() {
    lt = this;
  }
  off() {
    lt = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (this.parent && !t) {
        const o = this.parent.scopes.pop();
        o &&
          o !== this &&
          ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      this.active = !1;
    }
  }
}
function Bl(e) {
  return new ei(e);
}
function Dl(e, t = lt) {
  t && t.active && t.effects.push(e);
}
const io = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  ti = (e) => (e.w & Ot) > 0,
  ni = (e) => (e.n & Ot) > 0,
  Nl = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Ot;
  },
  jl = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let r = 0; r < t.length; r++) {
        const o = t[r];
        ti(o) && !ni(o) ? o.delete(e) : (t[n++] = o),
          (o.w &= ~Ot),
          (o.n &= ~Ot);
      }
      t.length = n;
    }
  },
  Sr = new WeakMap();
let hn = 0,
  Ot = 1;
const Mr = 30;
let nt;
const Ft = Symbol(""),
  Ir = Symbol("");
class lo {
  constructor(t, n = null, r) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Dl(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let t = nt,
      n = wt;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = nt),
        (nt = this),
        (wt = !0),
        (Ot = 1 << ++hn),
        hn <= Mr ? Nl(this) : Ho(this),
        this.fn()
      );
    } finally {
      hn <= Mr && jl(this),
        (Ot = 1 << --hn),
        (nt = this.parent),
        (wt = n),
        (this.parent = void 0);
    }
  }
  stop() {
    this.active && (Ho(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Ho(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let wt = !0;
const ri = [];
function nn() {
  ri.push(wt), (wt = !1);
}
function rn() {
  const e = ri.pop();
  wt = e === void 0 ? !0 : e;
}
function De(e, t, n) {
  if (wt && nt) {
    let r = Sr.get(e);
    r || Sr.set(e, (r = new Map()));
    let o = r.get(n);
    o || r.set(n, (o = io())), oi(o);
  }
}
function oi(e, t) {
  let n = !1;
  hn <= Mr ? ni(e) || ((e.n |= Ot), (n = !ti(e))) : (n = !e.has(nt)),
    n && (e.add(nt), nt.deps.push(e));
}
function ft(e, t, n, r, o, s) {
  const i = Sr.get(e);
  if (!i) return;
  let l = [];
  if (t === "clear") l = [...i.values()];
  else if (n === "length" && W(e))
    i.forEach((u, a) => {
      (a === "length" || a >= r) && l.push(u);
    });
  else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case "add":
        W(e)
          ? so(n) && l.push(i.get("length"))
          : (l.push(i.get(Ft)), zt(e) && l.push(i.get(Ir)));
        break;
      case "delete":
        W(e) || (l.push(i.get(Ft)), zt(e) && l.push(i.get(Ir)));
        break;
      case "set":
        zt(e) && l.push(i.get(Ft));
        break;
    }
  if (l.length === 1) l[0] && $r(l[0]);
  else {
    const u = [];
    for (const a of l) a && u.push(...a);
    $r(io(u));
  }
}
function $r(e, t) {
  for (const n of W(e) ? e : [...e])
    (n !== nt || n.allowRecurse) && (n.scheduler ? n.scheduler() : n.run());
}
const Hl = eo("__proto__,__v_isRef,__isVue"),
  si = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map((e) => Symbol[e])
      .filter(oo)
  ),
  Vl = uo(),
  Ul = uo(!1, !0),
  Kl = uo(!0),
  Vo = Wl();
function Wl() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = ne(this);
        for (let s = 0, i = this.length; s < i; s++) De(r, "get", s + "");
        const o = r[t](...n);
        return o === -1 || o === !1 ? r[t](...n.map(ne)) : o;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        nn();
        const r = ne(this)[t].apply(this, n);
        return rn(), r;
      };
    }),
    e
  );
}
function uo(e = !1, t = !1) {
  return function (r, o, s) {
    if (o === "__v_isReactive") return !e;
    if (o === "__v_isReadonly") return e;
    if (o === "__v_isShallow") return t;
    if (o === "__v_raw" && s === (e ? (t ? lu : ci) : t ? ai : ui).get(r))
      return r;
    const i = W(r);
    if (!e && i && ee(Vo, o)) return Reflect.get(Vo, o, s);
    const l = Reflect.get(r, o, s);
    return (oo(o) ? si.has(o) : Hl(o)) || (e || De(r, "get", o), t)
      ? l
      : ce(l)
      ? !i || !so(o)
        ? l.value
        : l
      : _e(l)
      ? e
        ? fi(l)
        : $n(l)
      : l;
  };
}
const ql = ii(),
  zl = ii(!0);
function ii(e = !1) {
  return function (n, r, o, s) {
    let i = n[r];
    if (An(i) && ce(i) && !ce(o)) return !1;
    if (
      !e &&
      !An(o) &&
      (di(o) || ((o = ne(o)), (i = ne(i))), !W(n) && ce(i) && !ce(o))
    )
      return (i.value = o), !0;
    const l = W(n) && so(r) ? Number(r) < n.length : ee(n, r),
      u = Reflect.set(n, r, o, s);
    return (
      n === ne(s) && (l ? xn(o, i) && ft(n, "set", r, o) : ft(n, "add", r, o)),
      u
    );
  };
}
function Yl(e, t) {
  const n = ee(e, t);
  e[t];
  const r = Reflect.deleteProperty(e, t);
  return r && n && ft(e, "delete", t, void 0), r;
}
function Ql(e, t) {
  const n = Reflect.has(e, t);
  return (!oo(t) || !si.has(t)) && De(e, "has", t), n;
}
function Xl(e) {
  return De(e, "iterate", W(e) ? "length" : Ft), Reflect.ownKeys(e);
}
const li = { get: Vl, set: ql, deleteProperty: Yl, has: Ql, ownKeys: Xl },
  Jl = {
    get: Kl,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  Zl = Ce({}, li, { get: Ul, set: zl }),
  ao = (e) => e,
  dr = (e) => Reflect.getPrototypeOf(e);
function Bn(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = ne(e),
    s = ne(t);
  t !== s && !n && De(o, "get", t), !n && De(o, "get", s);
  const { has: i } = dr(o),
    l = r ? ao : n ? ho : Cn;
  if (i.call(o, t)) return l(e.get(t));
  if (i.call(o, s)) return l(e.get(s));
  e !== o && e.get(t);
}
function Dn(e, t = !1) {
  const n = this.__v_raw,
    r = ne(n),
    o = ne(e);
  return (
    e !== o && !t && De(r, "has", e),
    !t && De(r, "has", o),
    e === o ? n.has(e) : n.has(e) || n.has(o)
  );
}
function Nn(e, t = !1) {
  return (
    (e = e.__v_raw), !t && De(ne(e), "iterate", Ft), Reflect.get(e, "size", e)
  );
}
function Uo(e) {
  e = ne(e);
  const t = ne(this);
  return dr(t).has.call(t, e) || (t.add(e), ft(t, "add", e, e)), this;
}
function Ko(e, t) {
  t = ne(t);
  const n = ne(this),
    { has: r, get: o } = dr(n);
  let s = r.call(n, e);
  s || ((e = ne(e)), (s = r.call(n, e)));
  const i = o.call(n, e);
  return (
    n.set(e, t), s ? xn(t, i) && ft(n, "set", e, t) : ft(n, "add", e, t), this
  );
}
function Wo(e) {
  const t = ne(this),
    { has: n, get: r } = dr(t);
  let o = n.call(t, e);
  o || ((e = ne(e)), (o = n.call(t, e))), r && r.call(t, e);
  const s = t.delete(e);
  return o && ft(t, "delete", e, void 0), s;
}
function qo() {
  const e = ne(this),
    t = e.size !== 0,
    n = e.clear();
  return t && ft(e, "clear", void 0, void 0), n;
}
function jn(e, t) {
  return function (r, o) {
    const s = this,
      i = s.__v_raw,
      l = ne(i),
      u = t ? ao : e ? ho : Cn;
    return (
      !e && De(l, "iterate", Ft), i.forEach((a, c) => r.call(o, u(a), u(c), s))
    );
  };
}
function Hn(e, t, n) {
  return function (...r) {
    const o = this.__v_raw,
      s = ne(o),
      i = zt(s),
      l = e === "entries" || (e === Symbol.iterator && i),
      u = e === "keys" && i,
      a = o[e](...r),
      c = n ? ao : t ? ho : Cn;
    return (
      !t && De(s, "iterate", u ? Ir : Ft),
      {
        next() {
          const { value: d, done: p } = a.next();
          return p
            ? { value: d, done: p }
            : { value: l ? [c(d[0]), c(d[1])] : c(d), done: p };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function pt(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function Gl() {
  const e = {
      get(s) {
        return Bn(this, s);
      },
      get size() {
        return Nn(this);
      },
      has: Dn,
      add: Uo,
      set: Ko,
      delete: Wo,
      clear: qo,
      forEach: jn(!1, !1),
    },
    t = {
      get(s) {
        return Bn(this, s, !1, !0);
      },
      get size() {
        return Nn(this);
      },
      has: Dn,
      add: Uo,
      set: Ko,
      delete: Wo,
      clear: qo,
      forEach: jn(!1, !0),
    },
    n = {
      get(s) {
        return Bn(this, s, !0);
      },
      get size() {
        return Nn(this, !0);
      },
      has(s) {
        return Dn.call(this, s, !0);
      },
      add: pt("add"),
      set: pt("set"),
      delete: pt("delete"),
      clear: pt("clear"),
      forEach: jn(!0, !1),
    },
    r = {
      get(s) {
        return Bn(this, s, !0, !0);
      },
      get size() {
        return Nn(this, !0);
      },
      has(s) {
        return Dn.call(this, s, !0);
      },
      add: pt("add"),
      set: pt("set"),
      delete: pt("delete"),
      clear: pt("clear"),
      forEach: jn(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      (e[s] = Hn(s, !1, !1)),
        (n[s] = Hn(s, !0, !1)),
        (t[s] = Hn(s, !1, !0)),
        (r[s] = Hn(s, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [eu, tu, nu, ru] = Gl();
function co(e, t) {
  const n = t ? (e ? ru : nu) : e ? tu : eu;
  return (r, o, s) =>
    o === "__v_isReactive"
      ? !e
      : o === "__v_isReadonly"
      ? e
      : o === "__v_raw"
      ? r
      : Reflect.get(ee(n, o) && o in r ? n : r, o, s);
}
const ou = { get: co(!1, !1) },
  su = { get: co(!1, !0) },
  iu = { get: co(!0, !1) },
  ui = new WeakMap(),
  ai = new WeakMap(),
  ci = new WeakMap(),
  lu = new WeakMap();
function uu(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function au(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : uu($l(e));
}
function $n(e) {
  return An(e) ? e : fo(e, !1, li, ou, ui);
}
function cu(e) {
  return fo(e, !1, Zl, su, ai);
}
function fi(e) {
  return fo(e, !0, Jl, iu, ci);
}
function fo(e, t, n, r, o) {
  if (!_e(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const s = o.get(e);
  if (s) return s;
  const i = au(e);
  if (i === 0) return e;
  const l = new Proxy(e, i === 2 ? r : n);
  return o.set(e, l), l;
}
function Yt(e) {
  return An(e) ? Yt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function An(e) {
  return !!(e && e.__v_isReadonly);
}
function di(e) {
  return !!(e && e.__v_isShallow);
}
function pi(e) {
  return Yt(e) || An(e);
}
function ne(e) {
  const t = e && e.__v_raw;
  return t ? ne(t) : e;
}
function po(e) {
  return Jn(e, "__v_skip", !0), e;
}
const Cn = (e) => (_e(e) ? $n(e) : e),
  ho = (e) => (_e(e) ? fi(e) : e);
function hi(e) {
  wt && nt && ((e = ne(e)), oi(e.dep || (e.dep = io())));
}
function mi(e, t) {
  (e = ne(e)), e.dep && $r(e.dep);
}
function ce(e) {
  return !!(e && e.__v_isRef === !0);
}
function $e(e) {
  return gi(e, !1);
}
function fu(e) {
  return gi(e, !0);
}
function gi(e, t) {
  return ce(e) ? e : new du(e, t);
}
class du {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : ne(t)),
      (this._value = n ? t : Cn(t));
  }
  get value() {
    return hi(this), this._value;
  }
  set value(t) {
    (t = this.__v_isShallow ? t : ne(t)),
      xn(t, this._rawValue) &&
        ((this._rawValue = t),
        (this._value = this.__v_isShallow ? t : Cn(t)),
        mi(this));
  }
}
function pe(e) {
  return ce(e) ? e.value : e;
}
const pu = {
  get: (e, t, n) => pe(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return ce(o) && !ce(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function vi(e) {
  return Yt(e) ? e : new Proxy(e, pu);
}
class hu {
  constructor(t, n, r) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
}
function Vn(e, t, n) {
  const r = e[t];
  return ce(r) ? r : new hu(e, t, n);
}
class mu {
  constructor(t, n, r, o) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._dirty = !0),
      (this.effect = new lo(t, () => {
        this._dirty || ((this._dirty = !0), mi(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = ne(this);
    return (
      hi(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function gu(e, t, n = !1) {
  let r, o;
  const s = Q(e);
  return (
    s ? ((r = e), (o = Ye)) : ((r = e.get), (o = e.set)),
    new mu(r, o, s || !o, n)
  );
}
Promise.resolve();
function Et(e, t, n, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (s) {
    pr(s, t, n);
  }
  return o;
}
function Ve(e, t, n, r) {
  if (Q(e)) {
    const s = Et(e, t, n, r);
    return (
      s &&
        Xs(s) &&
        s.catch((i) => {
          pr(i, t, n);
        }),
      s
    );
  }
  const o = [];
  for (let s = 0; s < e.length; s++) o.push(Ve(e[s], t, n, r));
  return o;
}
function pr(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy,
      l = n;
    for (; s; ) {
      const a = s.ec;
      if (a) {
        for (let c = 0; c < a.length; c++) if (a[c](e, i, l) === !1) return;
      }
      s = s.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Et(u, null, 10, [e, i, l]);
      return;
    }
  }
  vu(e, n, o, r);
}
function vu(e, t, n, r = !0) {
  console.error(e);
}
let Zn = !1,
  kr = !1;
const ke = [];
let ut = 0;
const gn = [];
let mn = null,
  Ut = 0;
const vn = [];
let yt = null,
  Kt = 0;
const yi = Promise.resolve();
let mo = null,
  Lr = null;
function bi(e) {
  const t = mo || yi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function yu(e) {
  let t = ut + 1,
    n = ke.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1;
    On(ke[r]) < e ? (t = r + 1) : (n = r);
  }
  return t;
}
function _i(e) {
  (!ke.length || !ke.includes(e, Zn && e.allowRecurse ? ut + 1 : ut)) &&
    e !== Lr &&
    (e.id == null ? ke.push(e) : ke.splice(yu(e.id), 0, e), wi());
}
function wi() {
  !Zn && !kr && ((kr = !0), (mo = yi.then(Ai)));
}
function bu(e) {
  const t = ke.indexOf(e);
  t > ut && ke.splice(t, 1);
}
function Ei(e, t, n, r) {
  W(e)
    ? n.push(...e)
    : (!t || !t.includes(e, e.allowRecurse ? r + 1 : r)) && n.push(e),
    wi();
}
function _u(e) {
  Ei(e, mn, gn, Ut);
}
function wu(e) {
  Ei(e, yt, vn, Kt);
}
function go(e, t = null) {
  if (gn.length) {
    for (
      Lr = t, mn = [...new Set(gn)], gn.length = 0, Ut = 0;
      Ut < mn.length;
      Ut++
    )
      mn[Ut]();
    (mn = null), (Ut = 0), (Lr = null), go(e, t);
  }
}
function xi(e) {
  if (vn.length) {
    const t = [...new Set(vn)];
    if (((vn.length = 0), yt)) {
      yt.push(...t);
      return;
    }
    for (yt = t, yt.sort((n, r) => On(n) - On(r)), Kt = 0; Kt < yt.length; Kt++)
      yt[Kt]();
    (yt = null), (Kt = 0);
  }
}
const On = (e) => (e.id == null ? 1 / 0 : e.id);
function Ai(e) {
  (kr = !1), (Zn = !0), go(e), ke.sort((n, r) => On(n) - On(r));
  const t = Ye;
  try {
    for (ut = 0; ut < ke.length; ut++) {
      const n = ke[ut];
      n && n.active !== !1 && Et(n, null, 14);
    }
  } finally {
    (ut = 0),
      (ke.length = 0),
      xi(),
      (Zn = !1),
      (mo = null),
      (ke.length || gn.length || vn.length) && Ai(e);
  }
}
function Eu(e, t, ...n) {
  const r = e.vnode.props || ue;
  let o = n;
  const s = t.startsWith("update:"),
    i = s && t.slice(7);
  if (i && i in r) {
    const c = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: d, trim: p } = r[c] || ue;
    p ? (o = n.map((m) => m.trim())) : d && (o = n.map(Gs));
  }
  let l,
    u = r[(l = _r(t))] || r[(l = _r(st(t)))];
  !u && s && (u = r[(l = _r(tn(t)))]), u && Ve(u, e, 6, o);
  const a = r[l + "Once"];
  if (a) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Ve(a, e, 6, o);
  }
}
function Ci(e, t, n = !1) {
  const r = t.emitsCache,
    o = r.get(e);
  if (o !== void 0) return o;
  const s = e.emits;
  let i = {},
    l = !1;
  if (!Q(e)) {
    const u = (a) => {
      const c = Ci(a, t, !0);
      c && ((l = !0), Ce(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  return !s && !l
    ? (r.set(e, null), null)
    : (W(s) ? s.forEach((u) => (i[u] = null)) : Ce(i, s), r.set(e, i), i);
}
function vo(e, t) {
  return !e || !ur(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      ee(e, t[0].toLowerCase() + t.slice(1)) || ee(e, tn(t)) || ee(e, t));
}
let Le = null,
  hr = null;
function Gn(e) {
  const t = Le;
  return (Le = e), (hr = (e && e.type.__scopeId) || null), t;
}
function xu(e) {
  hr = e;
}
function Au() {
  hr = null;
}
function at(e, t = Le, n) {
  if (!t || e._n) return e;
  const r = (...o) => {
    r._d && is(-1);
    const s = Gn(t),
      i = e(...o);
    return Gn(s), r._d && is(1), i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function Er(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    props: s,
    propsOptions: [i],
    slots: l,
    attrs: u,
    emit: a,
    render: c,
    renderCache: d,
    data: p,
    setupState: m,
    ctx: v,
    inheritAttrs: A,
  } = e;
  let b, C;
  const I = Gn(e);
  try {
    if (n.shapeFlag & 4) {
      const _ = o || r;
      (b = et(c.call(_, _, d, s, m, p, v))), (C = u);
    } else {
      const _ = t;
      (b = et(
        _.length > 1 ? _(s, { attrs: u, slots: l, emit: a }) : _(s, null)
      )),
        (C = t.props ? u : Cu(u));
    }
  } catch (_) {
    (bn.length = 0), pr(_, e, 1), (b = fe(Qe));
  }
  let T = b;
  if (C && A !== !1) {
    const _ = Object.keys(C),
      { shapeFlag: $ } = T;
    _.length && $ & 7 && (i && _.some(no) && (C = Ou(C, i)), (T = Qt(T, C)));
  }
  return (
    n.dirs && (T.dirs = T.dirs ? T.dirs.concat(n.dirs) : n.dirs),
    n.transition && (T.transition = n.transition),
    (b = T),
    Gn(I),
    b
  );
}
const Cu = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || ur(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Ou = (e, t) => {
    const n = {};
    for (const r in e) (!no(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function Pu(e, t, n) {
  const { props: r, children: o, component: s } = e,
    { props: i, children: l, patchFlag: u } = t,
    a = s.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && u >= 0) {
    if (u & 1024) return !0;
    if (u & 16) return r ? zo(r, i, a) : !!i;
    if (u & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const p = c[d];
        if (i[p] !== r[p] && !vo(a, p)) return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable)
      ? !0
      : r === i
      ? !1
      : r
      ? i
        ? zo(r, i, a)
        : !0
      : !!i;
  return !1;
}
function zo(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !vo(n, s)) return !0;
  }
  return !1;
}
function Ru({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Tu = (e) => e.__isSuspense;
function Su(e, t) {
  t && t.pendingBranch
    ? W(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : wu(e);
}
function Yn(e, t) {
  if (Ee) {
    let n = Ee.provides;
    const r = Ee.parent && Ee.parent.provides;
    r === n && (n = Ee.provides = Object.create(r)), (n[e] = t);
  }
}
function xt(e, t, n = !1) {
  const r = Ee || Le;
  if (r) {
    const o =
      r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && Q(t) ? t.call(r.proxy) : t;
  }
}
const Yo = {};
function tt(e, t, n) {
  return Oi(e, t, n);
}
function Oi(
  e,
  t,
  { immediate: n, deep: r, flush: o, onTrack: s, onTrigger: i } = ue
) {
  const l = Ee;
  let u,
    a = !1,
    c = !1;
  if (
    (ce(e)
      ? ((u = () => e.value), (a = di(e)))
      : Yt(e)
      ? ((u = () => e), (r = !0))
      : W(e)
      ? ((c = !0),
        (a = e.some(Yt)),
        (u = () =>
          e.map((C) => {
            if (ce(C)) return C.value;
            if (Yt(C)) return Lt(C);
            if (Q(C)) return Et(C, l, 2);
          })))
      : Q(e)
      ? t
        ? (u = () => Et(e, l, 2))
        : (u = () => {
            if (!(l && l.isUnmounted)) return d && d(), Ve(e, l, 3, [p]);
          })
      : (u = Ye),
    t && r)
  ) {
    const C = u;
    u = () => Lt(C());
  }
  let d,
    p = (C) => {
      d = b.onStop = () => {
        Et(C, l, 4);
      };
    };
  if (Rn)
    return (p = Ye), t ? n && Ve(t, l, 3, [u(), c ? [] : void 0, p]) : u(), Ye;
  let m = c ? [] : Yo;
  const v = () => {
    if (!!b.active)
      if (t) {
        const C = b.run();
        (r || a || (c ? C.some((I, T) => xn(I, m[T])) : xn(C, m))) &&
          (d && d(), Ve(t, l, 3, [C, m === Yo ? void 0 : m, p]), (m = C));
      } else b.run();
  };
  v.allowRecurse = !!t;
  let A;
  o === "sync"
    ? (A = v)
    : o === "post"
    ? (A = () => Se(v, l && l.suspense))
    : (A = () => {
        !l || l.isMounted ? _u(v) : v();
      });
  const b = new lo(u, A);
  return (
    t
      ? n
        ? v()
        : (m = b.run())
      : o === "post"
      ? Se(b.run.bind(b), l && l.suspense)
      : b.run(),
    () => {
      b.stop(), l && l.scope && ro(l.scope.effects, b);
    }
  );
}
function Mu(e, t, n) {
  const r = this.proxy,
    o = be(e) ? (e.includes(".") ? Pi(r, e) : () => r[e]) : e.bind(r, r);
  let s;
  Q(t) ? (s = t) : ((s = t.handler), (n = t));
  const i = Ee;
  Xt(this);
  const l = Oi(o, s.bind(r), n);
  return i ? Xt(i) : Dt(), l;
}
function Pi(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++) r = r[n[o]];
    return r;
  };
}
function Lt(e, t) {
  if (!_e(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), ce(e))) Lt(e.value, t);
  else if (W(e)) for (let n = 0; n < e.length; n++) Lt(e[n], t);
  else if (Qs(e) || zt(e))
    e.forEach((n) => {
      Lt(n, t);
    });
  else if (Zs(e)) for (const n in e) Lt(e[n], t);
  return e;
}
function Iu() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    yo(() => {
      e.isMounted = !0;
    }),
    $i(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Ne = [Function, Array],
  $u = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: Ne,
      onEnter: Ne,
      onAfterEnter: Ne,
      onEnterCancelled: Ne,
      onBeforeLeave: Ne,
      onLeave: Ne,
      onAfterLeave: Ne,
      onLeaveCancelled: Ne,
      onBeforeAppear: Ne,
      onAppear: Ne,
      onAfterAppear: Ne,
      onAppearCancelled: Ne,
    },
    setup(e, { slots: t }) {
      const n = va(),
        r = Iu();
      let o;
      return () => {
        const s = t.default && Si(t.default(), !0);
        if (!s || !s.length) return;
        const i = ne(e),
          { mode: l } = i,
          u = s[0];
        if (r.isLeaving) return xr(u);
        const a = Qo(u);
        if (!a) return xr(u);
        const c = Fr(a, i, r, n);
        Br(a, c);
        const d = n.subTree,
          p = d && Qo(d);
        let m = !1;
        const { getTransitionKey: v } = a.type;
        if (v) {
          const A = v();
          o === void 0 ? (o = A) : A !== o && ((o = A), (m = !0));
        }
        if (p && p.type !== Qe && (!$t(a, p) || m)) {
          const A = Fr(p, i, r, n);
          if ((Br(p, A), l === "out-in"))
            return (
              (r.isLeaving = !0),
              (A.afterLeave = () => {
                (r.isLeaving = !1), n.update();
              }),
              xr(u)
            );
          l === "in-out" &&
            a.type !== Qe &&
            (A.delayLeave = (b, C, I) => {
              const T = Ti(r, p);
              (T[String(p.key)] = p),
                (b._leaveCb = () => {
                  C(), (b._leaveCb = void 0), delete c.delayedLeave;
                }),
                (c.delayedLeave = I);
            });
        }
        return u;
      };
    },
  },
  Ri = $u;
function Ti(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function Fr(e, t, n, r) {
  const {
      appear: o,
      mode: s,
      persisted: i = !1,
      onBeforeEnter: l,
      onEnter: u,
      onAfterEnter: a,
      onEnterCancelled: c,
      onBeforeLeave: d,
      onLeave: p,
      onAfterLeave: m,
      onLeaveCancelled: v,
      onBeforeAppear: A,
      onAppear: b,
      onAfterAppear: C,
      onAppearCancelled: I,
    } = t,
    T = String(e.key),
    _ = Ti(n, e),
    $ = (R, B) => {
      R && Ve(R, r, 9, B);
    },
    k = {
      mode: s,
      persisted: i,
      beforeEnter(R) {
        let B = l;
        if (!n.isMounted)
          if (o) B = A || l;
          else return;
        R._leaveCb && R._leaveCb(!0);
        const H = _[T];
        H && $t(e, H) && H.el._leaveCb && H.el._leaveCb(), $(B, [R]);
      },
      enter(R) {
        let B = u,
          H = a,
          X = c;
        if (!n.isMounted)
          if (o) (B = b || u), (H = C || a), (X = I || c);
          else return;
        let J = !1;
        const F = (R._enterCb = (z) => {
          J ||
            ((J = !0),
            z ? $(X, [R]) : $(H, [R]),
            k.delayedLeave && k.delayedLeave(),
            (R._enterCb = void 0));
        });
        B ? (B(R, F), B.length <= 1 && F()) : F();
      },
      leave(R, B) {
        const H = String(e.key);
        if ((R._enterCb && R._enterCb(!0), n.isUnmounting)) return B();
        $(d, [R]);
        let X = !1;
        const J = (R._leaveCb = (F) => {
          X ||
            ((X = !0),
            B(),
            F ? $(v, [R]) : $(m, [R]),
            (R._leaveCb = void 0),
            _[H] === e && delete _[H]);
        });
        (_[H] = e), p ? (p(R, J), p.length <= 1 && J()) : J();
      },
      clone(R) {
        return Fr(R, t, n, r);
      },
    };
  return k;
}
function xr(e) {
  if (mr(e)) return (e = Qt(e)), (e.children = null), e;
}
function Qo(e) {
  return mr(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Br(e, t) {
  e.shapeFlag & 6 && e.component
    ? Br(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Si(e, t = !1) {
  let n = [],
    r = 0;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    s.type === Te
      ? (s.patchFlag & 128 && r++, (n = n.concat(Si(s.children, t))))
      : (t || s.type !== Qe) && n.push(s);
  }
  if (r > 1) for (let o = 0; o < n.length; o++) n[o].patchFlag = -2;
  return n;
}
function Xe(e) {
  return Q(e) ? { setup: e, name: e.name } : e;
}
const Dr = (e) => !!e.type.__asyncLoader,
  mr = (e) => e.type.__isKeepAlive;
function ku(e, t) {
  Mi(e, "a", t);
}
function Lu(e, t) {
  Mi(e, "da", t);
}
function Mi(e, t, n = Ee) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
  if ((gr(t, r, n), n)) {
    let o = n.parent;
    for (; o && o.parent; )
      mr(o.parent.vnode) && Fu(r, t, n, o), (o = o.parent);
  }
}
function Fu(e, t, n, r) {
  const o = gr(t, e, r, !0);
  bo(() => {
    ro(r[t], o);
  }, n);
}
function gr(e, t, n = Ee, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      s =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          nn(), Xt(n);
          const l = Ve(t, n, e, i);
          return Dt(), rn(), l;
        });
    return r ? o.unshift(s) : o.push(s), s;
  }
}
const dt =
    (e) =>
    (t, n = Ee) =>
      (!Rn || e === "sp") && gr(e, t, n),
  Bu = dt("bm"),
  yo = dt("m"),
  Du = dt("bu"),
  Ii = dt("u"),
  $i = dt("bum"),
  bo = dt("um"),
  Nu = dt("sp"),
  ju = dt("rtg"),
  Hu = dt("rtc");
function Vu(e, t = Ee) {
  gr("ec", e, t);
}
let Nr = !0;
function Uu(e) {
  const t = Li(e),
    n = e.proxy,
    r = e.ctx;
  (Nr = !1), t.beforeCreate && Xo(t.beforeCreate, e, "bc");
  const {
    data: o,
    computed: s,
    methods: i,
    watch: l,
    provide: u,
    inject: a,
    created: c,
    beforeMount: d,
    mounted: p,
    beforeUpdate: m,
    updated: v,
    activated: A,
    deactivated: b,
    beforeDestroy: C,
    beforeUnmount: I,
    destroyed: T,
    unmounted: _,
    render: $,
    renderTracked: k,
    renderTriggered: R,
    errorCaptured: B,
    serverPrefetch: H,
    expose: X,
    inheritAttrs: J,
    components: F,
    directives: z,
    filters: ye,
  } = t;
  if ((a && Ku(a, r, null, e.appContext.config.unwrapInjectedRef), i))
    for (const te in i) {
      const Z = i[te];
      Q(Z) && (r[te] = Z.bind(n));
    }
  if (o) {
    const te = o.call(n, n);
    _e(te) && (e.data = $n(te));
  }
  if (((Nr = !0), s))
    for (const te in s) {
      const Z = s[te],
        xe = Q(Z) ? Z.bind(n, n) : Q(Z.get) ? Z.get.bind(n, n) : Ye,
        Me = !Q(Z) && Q(Z.set) ? Z.set.bind(n) : Ye,
        ve = ze({ get: xe, set: Me });
      Object.defineProperty(r, te, {
        enumerable: !0,
        configurable: !0,
        get: () => ve.value,
        set: (he) => (ve.value = he),
      });
    }
  if (l) for (const te in l) ki(l[te], r, n, te);
  if (u) {
    const te = Q(u) ? u.call(n) : u;
    Reflect.ownKeys(te).forEach((Z) => {
      Yn(Z, te[Z]);
    });
  }
  c && Xo(c, e, "c");
  function re(te, Z) {
    W(Z) ? Z.forEach((xe) => te(xe.bind(n))) : Z && te(Z.bind(n));
  }
  if (
    (re(Bu, d),
    re(yo, p),
    re(Du, m),
    re(Ii, v),
    re(ku, A),
    re(Lu, b),
    re(Vu, B),
    re(Hu, k),
    re(ju, R),
    re($i, I),
    re(bo, _),
    re(Nu, H),
    W(X))
  )
    if (X.length) {
      const te = e.exposed || (e.exposed = {});
      X.forEach((Z) => {
        Object.defineProperty(te, Z, {
          get: () => n[Z],
          set: (xe) => (n[Z] = xe),
        });
      });
    } else e.exposed || (e.exposed = {});
  $ && e.render === Ye && (e.render = $),
    J != null && (e.inheritAttrs = J),
    F && (e.components = F),
    z && (e.directives = z);
}
function Ku(e, t, n = Ye, r = !1) {
  W(e) && (e = jr(e));
  for (const o in e) {
    const s = e[o];
    let i;
    _e(s)
      ? "default" in s
        ? (i = xt(s.from || o, s.default, !0))
        : (i = xt(s.from || o))
      : (i = xt(s)),
      ce(i) && r
        ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (l) => (i.value = l),
          })
        : (t[o] = i);
  }
}
function Xo(e, t, n) {
  Ve(W(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ki(e, t, n, r) {
  const o = r.includes(".") ? Pi(n, r) : () => n[r];
  if (be(e)) {
    const s = t[e];
    Q(s) && tt(o, s);
  } else if (Q(e)) tt(o, e.bind(n));
  else if (_e(e))
    if (W(e)) e.forEach((s) => ki(s, t, n, r));
    else {
      const s = Q(e.handler) ? e.handler.bind(n) : t[e.handler];
      Q(s) && tt(o, s, e);
    }
}
function Li(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: o,
      optionsCache: s,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = s.get(t);
  let u;
  return (
    l
      ? (u = l)
      : !o.length && !n && !r
      ? (u = t)
      : ((u = {}), o.length && o.forEach((a) => er(u, a, i, !0)), er(u, t, i)),
    s.set(t, u),
    u
  );
}
function er(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && er(e, s, n, !0), o && o.forEach((i) => er(e, i, n, !0));
  for (const i in t)
    if (!(r && i === "expose")) {
      const l = Wu[i] || (n && n[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Wu = {
  data: Jo,
  props: It,
  emits: It,
  methods: It,
  computed: It,
  beforeCreate: Pe,
  created: Pe,
  beforeMount: Pe,
  mounted: Pe,
  beforeUpdate: Pe,
  updated: Pe,
  beforeDestroy: Pe,
  beforeUnmount: Pe,
  destroyed: Pe,
  unmounted: Pe,
  activated: Pe,
  deactivated: Pe,
  errorCaptured: Pe,
  serverPrefetch: Pe,
  components: It,
  directives: It,
  watch: zu,
  provide: Jo,
  inject: qu,
};
function Jo(e, t) {
  return t
    ? e
      ? function () {
          return Ce(
            Q(e) ? e.call(this, this) : e,
            Q(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function qu(e, t) {
  return It(jr(e), jr(t));
}
function jr(e) {
  if (W(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Pe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function It(e, t) {
  return e ? Ce(Ce(Object.create(null), e), t) : t;
}
function zu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ce(Object.create(null), e);
  for (const r in t) n[r] = Pe(e[r], t[r]);
  return n;
}
function Yu(e, t, n, r = !1) {
  const o = {},
    s = {};
  Jn(s, vr, 1), (e.propsDefaults = Object.create(null)), Fi(e, t, o, s);
  for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
  n ? (e.props = r ? o : cu(o)) : e.type.props ? (e.props = o) : (e.props = s),
    (e.attrs = s);
}
function Qu(e, t, n, r) {
  const {
      props: o,
      attrs: s,
      vnode: { patchFlag: i },
    } = e,
    l = ne(o),
    [u] = e.propsOptions;
  let a = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let p = c[d];
        const m = t[p];
        if (u)
          if (ee(s, p)) m !== s[p] && ((s[p] = m), (a = !0));
          else {
            const v = st(p);
            o[v] = Hr(u, l, v, m, e, !1);
          }
        else m !== s[p] && ((s[p] = m), (a = !0));
      }
    }
  } else {
    Fi(e, t, o, s) && (a = !0);
    let c;
    for (const d in l)
      (!t || (!ee(t, d) && ((c = tn(d)) === d || !ee(t, c)))) &&
        (u
          ? n &&
            (n[d] !== void 0 || n[c] !== void 0) &&
            (o[d] = Hr(u, l, d, void 0, e, !0))
          : delete o[d]);
    if (s !== l)
      for (const d in s) (!t || (!ee(t, d) && !0)) && (delete s[d], (a = !0));
  }
  a && ft(e, "set", "$attrs");
}
function Fi(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let u in t) {
      if (zn(u)) continue;
      const a = t[u];
      let c;
      o && ee(o, (c = st(u)))
        ? !s || !s.includes(c)
          ? (n[c] = a)
          : ((l || (l = {}))[c] = a)
        : vo(e.emitsOptions, u) ||
          ((!(u in r) || a !== r[u]) && ((r[u] = a), (i = !0)));
    }
  if (s) {
    const u = ne(n),
      a = l || ue;
    for (let c = 0; c < s.length; c++) {
      const d = s[c];
      n[d] = Hr(o, u, d, a[d], e, !ee(a, d));
    }
  }
  return i;
}
function Hr(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const l = ee(i, "default");
    if (l && r === void 0) {
      const u = i.default;
      if (i.type !== Function && Q(u)) {
        const { propsDefaults: a } = o;
        n in a ? (r = a[n]) : (Xt(o), (r = a[n] = u.call(null, t)), Dt());
      } else r = u;
    }
    i[0] &&
      (s && !l ? (r = !1) : i[1] && (r === "" || r === tn(n)) && (r = !0));
  }
  return r;
}
function Bi(e, t, n = !1) {
  const r = t.propsCache,
    o = r.get(e);
  if (o) return o;
  const s = e.props,
    i = {},
    l = [];
  let u = !1;
  if (!Q(e)) {
    const c = (d) => {
      u = !0;
      const [p, m] = Bi(d, t, !0);
      Ce(i, p), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  if (!s && !u) return r.set(e, qt), qt;
  if (W(s))
    for (let c = 0; c < s.length; c++) {
      const d = st(s[c]);
      Zo(d) && (i[d] = ue);
    }
  else if (s)
    for (const c in s) {
      const d = st(c);
      if (Zo(d)) {
        const p = s[c],
          m = (i[d] = W(p) || Q(p) ? { type: p } : p);
        if (m) {
          const v = ts(Boolean, m.type),
            A = ts(String, m.type);
          (m[0] = v > -1),
            (m[1] = A < 0 || v < A),
            (v > -1 || ee(m, "default")) && l.push(d);
        }
      }
    }
  const a = [i, l];
  return r.set(e, a), a;
}
function Zo(e) {
  return e[0] !== "$";
}
function Go(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function es(e, t) {
  return Go(e) === Go(t);
}
function ts(e, t) {
  return W(t) ? t.findIndex((n) => es(n, e)) : Q(t) && es(t, e) ? 0 : -1;
}
const Di = (e) => e[0] === "_" || e === "$stable",
  _o = (e) => (W(e) ? e.map(et) : [et(e)]),
  Xu = (e, t, n) => {
    const r = at((...o) => _o(t(...o)), n);
    return (r._c = !1), r;
  },
  Ni = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (Di(o)) continue;
      const s = e[o];
      if (Q(s)) t[o] = Xu(o, s, r);
      else if (s != null) {
        const i = _o(s);
        t[o] = () => i;
      }
    }
  },
  ji = (e, t) => {
    const n = _o(t);
    e.slots.default = () => n;
  },
  Ju = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = ne(t)), Jn(t, "_", n)) : Ni(t, (e.slots = {}));
    } else (e.slots = {}), t && ji(e, t);
    Jn(e.slots, vr, 1);
  },
  Zu = (e, t, n) => {
    const { vnode: r, slots: o } = e;
    let s = !0,
      i = ue;
    if (r.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (s = !1)
          : (Ce(o, t), !n && l === 1 && delete o._)
        : ((s = !t.$stable), Ni(t, o)),
        (i = t);
    } else t && (ji(e, t), (i = { default: 1 }));
    if (s) for (const l in o) !Di(l) && !(l in i) && delete o[l];
  };
function Gu(e, t) {
  const n = Le;
  if (n === null) return e;
  const r = n.proxy,
    o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, l, u, a = ue] = t[s];
    Q(i) && (i = { mounted: i, updated: i }),
      i.deep && Lt(l),
      o.push({
        dir: i,
        instance: r,
        value: l,
        oldValue: void 0,
        arg: u,
        modifiers: a,
      });
  }
  return e;
}
function Rt(e, t, n, r) {
  const o = e.dirs,
    s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    s && (l.oldValue = s[i].value);
    let u = l.dir[r];
    u && (nn(), Ve(u, n, 8, [e.el, l, e, t]), rn());
  }
}
function Hi() {
  return {
    app: null,
    config: {
      isNativeTag: Sl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let ea = 0;
function ta(e, t) {
  return function (r, o = null) {
    o != null && !_e(o) && (o = null);
    const s = Hi(),
      i = new Set();
    let l = !1;
    const u = (s.app = {
      _uid: ea++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: Aa,
      get config() {
        return s.config;
      },
      set config(a) {},
      use(a, ...c) {
        return (
          i.has(a) ||
            (a && Q(a.install)
              ? (i.add(a), a.install(u, ...c))
              : Q(a) && (i.add(a), a(u, ...c))),
          u
        );
      },
      mixin(a) {
        return s.mixins.includes(a) || s.mixins.push(a), u;
      },
      component(a, c) {
        return c ? ((s.components[a] = c), u) : s.components[a];
      },
      directive(a, c) {
        return c ? ((s.directives[a] = c), u) : s.directives[a];
      },
      mount(a, c, d) {
        if (!l) {
          const p = fe(r, o);
          return (
            (p.appContext = s),
            c && t ? t(p, a) : e(p, a, d),
            (l = !0),
            (u._container = a),
            (a.__vue_app__ = u),
            Co(p.component) || p.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(a, c) {
        return (s.provides[a] = c), u;
      },
    });
    return u;
  };
}
function Vr(e, t, n, r, o = !1) {
  if (W(e)) {
    e.forEach((p, m) => Vr(p, t && (W(t) ? t[m] : t), n, r, o));
    return;
  }
  if (Dr(r) && !o) return;
  const s = r.shapeFlag & 4 ? Co(r.component) || r.component.proxy : r.el,
    i = o ? null : s,
    { i: l, r: u } = e,
    a = t && t.r,
    c = l.refs === ue ? (l.refs = {}) : l.refs,
    d = l.setupState;
  if (
    (a != null &&
      a !== u &&
      (be(a)
        ? ((c[a] = null), ee(d, a) && (d[a] = null))
        : ce(a) && (a.value = null)),
    Q(u))
  )
    Et(u, l, 12, [i, c]);
  else {
    const p = be(u),
      m = ce(u);
    if (p || m) {
      const v = () => {
        if (e.f) {
          const A = p ? c[u] : u.value;
          o
            ? W(A) && ro(A, s)
            : W(A)
            ? A.includes(s) || A.push(s)
            : p
            ? (c[u] = [s])
            : ((u.value = [s]), e.k && (c[e.k] = u.value));
        } else
          p
            ? ((c[u] = i), ee(d, u) && (d[u] = i))
            : ce(u) && ((u.value = i), e.k && (c[e.k] = i));
      };
      i ? ((v.id = -1), Se(v, n)) : v();
    }
  }
}
const Se = Su;
function na(e) {
  return ra(e);
}
function ra(e, t) {
  const n = Fl();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: o,
      patchProp: s,
      createElement: i,
      createText: l,
      createComment: u,
      setText: a,
      setElementText: c,
      parentNode: d,
      nextSibling: p,
      setScopeId: m = Ye,
      cloneNode: v,
      insertStaticContent: A,
    } = e,
    b = (
      f,
      h,
      g,
      w = null,
      E = null,
      O = null,
      L = !1,
      P = null,
      M = !!h.dynamicChildren
    ) => {
      if (f === h) return;
      f && !$t(f, h) && ((w = j(f)), Ae(f, E, O, !0), (f = null)),
        h.patchFlag === -2 && ((M = !1), (h.dynamicChildren = null));
      const { type: x, ref: V, shapeFlag: N } = h;
      switch (x) {
        case xo:
          C(f, h, g, w);
          break;
        case Qe:
          I(f, h, g, w);
          break;
        case Ar:
          f == null && T(h, g, w, L);
          break;
        case Te:
          z(f, h, g, w, E, O, L, P, M);
          break;
        default:
          N & 1
            ? k(f, h, g, w, E, O, L, P, M)
            : N & 6
            ? ye(f, h, g, w, E, O, L, P, M)
            : (N & 64 || N & 128) && x.process(f, h, g, w, E, O, L, P, M, se);
      }
      V != null && E && Vr(V, f && f.ref, O, h || f, !h);
    },
    C = (f, h, g, w) => {
      if (f == null) r((h.el = l(h.children)), g, w);
      else {
        const E = (h.el = f.el);
        h.children !== f.children && a(E, h.children);
      }
    },
    I = (f, h, g, w) => {
      f == null ? r((h.el = u(h.children || "")), g, w) : (h.el = f.el);
    },
    T = (f, h, g, w) => {
      [f.el, f.anchor] = A(f.children, h, g, w, f.el, f.anchor);
    },
    _ = ({ el: f, anchor: h }, g, w) => {
      let E;
      for (; f && f !== h; ) (E = p(f)), r(f, g, w), (f = E);
      r(h, g, w);
    },
    $ = ({ el: f, anchor: h }) => {
      let g;
      for (; f && f !== h; ) (g = p(f)), o(f), (f = g);
      o(h);
    },
    k = (f, h, g, w, E, O, L, P, M) => {
      (L = L || h.type === "svg"),
        f == null ? R(h, g, w, E, O, L, P, M) : X(f, h, E, O, L, P, M);
    },
    R = (f, h, g, w, E, O, L, P) => {
      let M, x;
      const {
        type: V,
        props: N,
        shapeFlag: U,
        transition: K,
        patchFlag: G,
        dirs: de,
      } = f;
      if (f.el && v !== void 0 && G === -1) M = f.el = v(f.el);
      else {
        if (
          ((M = f.el = i(f.type, O, N && N.is, N)),
          U & 8
            ? c(M, f.children)
            : U & 16 &&
              H(f.children, M, null, w, E, O && V !== "foreignObject", L, P),
          de && Rt(f, null, w, "created"),
          N)
        ) {
          for (const ae in N)
            ae !== "value" &&
              !zn(ae) &&
              s(M, ae, null, N[ae], O, f.children, w, E, S);
          "value" in N && s(M, "value", null, N.value),
            (x = N.onVnodeBeforeMount) && Ge(x, w, f);
        }
        B(M, f, f.scopeId, L, w);
      }
      de && Rt(f, null, w, "beforeMount");
      const ie = (!E || (E && !E.pendingBranch)) && K && !K.persisted;
      ie && K.beforeEnter(M),
        r(M, h, g),
        ((x = N && N.onVnodeMounted) || ie || de) &&
          Se(() => {
            x && Ge(x, w, f), ie && K.enter(M), de && Rt(f, null, w, "mounted");
          }, E);
    },
    B = (f, h, g, w, E) => {
      if ((g && m(f, g), w)) for (let O = 0; O < w.length; O++) m(f, w[O]);
      if (E) {
        let O = E.subTree;
        if (h === O) {
          const L = E.vnode;
          B(f, L, L.scopeId, L.slotScopeIds, E.parent);
        }
      }
    },
    H = (f, h, g, w, E, O, L, P, M = 0) => {
      for (let x = M; x < f.length; x++) {
        const V = (f[x] = P ? bt(f[x]) : et(f[x]));
        b(null, V, h, g, w, E, O, L, P);
      }
    },
    X = (f, h, g, w, E, O, L) => {
      const P = (h.el = f.el);
      let { patchFlag: M, dynamicChildren: x, dirs: V } = h;
      M |= f.patchFlag & 16;
      const N = f.props || ue,
        U = h.props || ue;
      let K;
      g && Tt(g, !1),
        (K = U.onVnodeBeforeUpdate) && Ge(K, g, h, f),
        V && Rt(h, f, g, "beforeUpdate"),
        g && Tt(g, !0);
      const G = E && h.type !== "foreignObject";
      if (
        (x
          ? J(f.dynamicChildren, x, P, g, w, G, O)
          : L || xe(f, h, P, null, g, w, G, O, !1),
        M > 0)
      ) {
        if (M & 16) F(P, h, N, U, g, w, E);
        else if (
          (M & 2 && N.class !== U.class && s(P, "class", null, U.class, E),
          M & 4 && s(P, "style", N.style, U.style, E),
          M & 8)
        ) {
          const de = h.dynamicProps;
          for (let ie = 0; ie < de.length; ie++) {
            const ae = de[ie],
              We = N[ae],
              jt = U[ae];
            (jt !== We || ae === "value") &&
              s(P, ae, We, jt, E, f.children, g, w, S);
          }
        }
        M & 1 && f.children !== h.children && c(P, h.children);
      } else !L && x == null && F(P, h, N, U, g, w, E);
      ((K = U.onVnodeUpdated) || V) &&
        Se(() => {
          K && Ge(K, g, h, f), V && Rt(h, f, g, "updated");
        }, w);
    },
    J = (f, h, g, w, E, O, L) => {
      for (let P = 0; P < h.length; P++) {
        const M = f[P],
          x = h[P],
          V =
            M.el && (M.type === Te || !$t(M, x) || M.shapeFlag & 70)
              ? d(M.el)
              : g;
        b(M, x, V, null, w, E, O, L, !0);
      }
    },
    F = (f, h, g, w, E, O, L) => {
      if (g !== w) {
        for (const P in w) {
          if (zn(P)) continue;
          const M = w[P],
            x = g[P];
          M !== x && P !== "value" && s(f, P, x, M, L, h.children, E, O, S);
        }
        if (g !== ue)
          for (const P in g)
            !zn(P) && !(P in w) && s(f, P, g[P], null, L, h.children, E, O, S);
        "value" in w && s(f, "value", g.value, w.value);
      }
    },
    z = (f, h, g, w, E, O, L, P, M) => {
      const x = (h.el = f ? f.el : l("")),
        V = (h.anchor = f ? f.anchor : l(""));
      let { patchFlag: N, dynamicChildren: U, slotScopeIds: K } = h;
      K && (P = P ? P.concat(K) : K),
        f == null
          ? (r(x, g, w), r(V, g, w), H(h.children, g, V, E, O, L, P, M))
          : N > 0 && N & 64 && U && f.dynamicChildren
          ? (J(f.dynamicChildren, U, g, E, O, L, P),
            (h.key != null || (E && h === E.subTree)) && wo(f, h, !0))
          : xe(f, h, g, V, E, O, L, P, M);
    },
    ye = (f, h, g, w, E, O, L, P, M) => {
      (h.slotScopeIds = P),
        f == null
          ? h.shapeFlag & 512
            ? E.ctx.activate(h, g, w, L, M)
            : Oe(h, g, w, E, O, L, M)
          : re(f, h, M);
    },
    Oe = (f, h, g, w, E, O, L) => {
      const P = (f.component = ga(f, w, E));
      if ((mr(f) && (P.ctx.renderer = se), ya(P), P.asyncDep)) {
        if ((E && E.registerDep(P, te), !f.el)) {
          const M = (P.subTree = fe(Qe));
          I(null, M, h, g);
        }
        return;
      }
      te(P, f, h, g, E, O, L);
    },
    re = (f, h, g) => {
      const w = (h.component = f.component);
      if (Pu(f, h, g))
        if (w.asyncDep && !w.asyncResolved) {
          Z(w, h, g);
          return;
        } else (w.next = h), bu(w.update), w.update();
      else (h.component = f.component), (h.el = f.el), (w.vnode = h);
    },
    te = (f, h, g, w, E, O, L) => {
      const P = () => {
          if (f.isMounted) {
            let { next: V, bu: N, u: U, parent: K, vnode: G } = f,
              de = V,
              ie;
            Tt(f, !1),
              V ? ((V.el = G.el), Z(f, V, L)) : (V = G),
              N && wr(N),
              (ie = V.props && V.props.onVnodeBeforeUpdate) && Ge(ie, K, V, G),
              Tt(f, !0);
            const ae = Er(f),
              We = f.subTree;
            (f.subTree = ae),
              b(We, ae, d(We.el), j(We), f, E, O),
              (V.el = ae.el),
              de === null && Ru(f, ae.el),
              U && Se(U, E),
              (ie = V.props && V.props.onVnodeUpdated) &&
                Se(() => Ge(ie, K, V, G), E);
          } else {
            let V;
            const { el: N, props: U } = h,
              { bm: K, m: G, parent: de } = f,
              ie = Dr(h);
            if (
              (Tt(f, !1),
              K && wr(K),
              !ie && (V = U && U.onVnodeBeforeMount) && Ge(V, de, h),
              Tt(f, !0),
              N && q)
            ) {
              const ae = () => {
                (f.subTree = Er(f)), q(N, f.subTree, f, E, null);
              };
              ie
                ? h.type.__asyncLoader().then(() => !f.isUnmounted && ae())
                : ae();
            } else {
              const ae = (f.subTree = Er(f));
              b(null, ae, g, w, f, E, O), (h.el = ae.el);
            }
            if ((G && Se(G, E), !ie && (V = U && U.onVnodeMounted))) {
              const ae = h;
              Se(() => Ge(V, de, ae), E);
            }
            h.shapeFlag & 256 && f.a && Se(f.a, E),
              (f.isMounted = !0),
              (h = g = w = null);
          }
        },
        M = (f.effect = new lo(P, () => _i(f.update), f.scope)),
        x = (f.update = M.run.bind(M));
      (x.id = f.uid), Tt(f, !0), x();
    },
    Z = (f, h, g) => {
      h.component = f;
      const w = f.vnode.props;
      (f.vnode = h),
        (f.next = null),
        Qu(f, h.props, w, g),
        Zu(f, h.children, g),
        nn(),
        go(void 0, f.update),
        rn();
    },
    xe = (f, h, g, w, E, O, L, P, M = !1) => {
      const x = f && f.children,
        V = f ? f.shapeFlag : 0,
        N = h.children,
        { patchFlag: U, shapeFlag: K } = h;
      if (U > 0) {
        if (U & 128) {
          ve(x, N, g, w, E, O, L, P, M);
          return;
        } else if (U & 256) {
          Me(x, N, g, w, E, O, L, P, M);
          return;
        }
      }
      K & 8
        ? (V & 16 && S(x, E, O), N !== x && c(g, N))
        : V & 16
        ? K & 16
          ? ve(x, N, g, w, E, O, L, P, M)
          : S(x, E, O, !0)
        : (V & 8 && c(g, ""), K & 16 && H(N, g, w, E, O, L, P, M));
    },
    Me = (f, h, g, w, E, O, L, P, M) => {
      (f = f || qt), (h = h || qt);
      const x = f.length,
        V = h.length,
        N = Math.min(x, V);
      let U;
      for (U = 0; U < N; U++) {
        const K = (h[U] = M ? bt(h[U]) : et(h[U]));
        b(f[U], K, g, null, E, O, L, P, M);
      }
      x > V ? S(f, E, O, !0, !1, N) : H(h, g, w, E, O, L, P, M, N);
    },
    ve = (f, h, g, w, E, O, L, P, M) => {
      let x = 0;
      const V = h.length;
      let N = f.length - 1,
        U = V - 1;
      for (; x <= N && x <= U; ) {
        const K = f[x],
          G = (h[x] = M ? bt(h[x]) : et(h[x]));
        if ($t(K, G)) b(K, G, g, null, E, O, L, P, M);
        else break;
        x++;
      }
      for (; x <= N && x <= U; ) {
        const K = f[N],
          G = (h[U] = M ? bt(h[U]) : et(h[U]));
        if ($t(K, G)) b(K, G, g, null, E, O, L, P, M);
        else break;
        N--, U--;
      }
      if (x > N) {
        if (x <= U) {
          const K = U + 1,
            G = K < V ? h[K].el : w;
          for (; x <= U; )
            b(null, (h[x] = M ? bt(h[x]) : et(h[x])), g, G, E, O, L, P, M), x++;
        }
      } else if (x > U) for (; x <= N; ) Ae(f[x], E, O, !0), x++;
      else {
        const K = x,
          G = x,
          de = new Map();
        for (x = G; x <= U; x++) {
          const Ie = (h[x] = M ? bt(h[x]) : et(h[x]));
          Ie.key != null && de.set(Ie.key, x);
        }
        let ie,
          ae = 0;
        const We = U - G + 1;
        let jt = !1,
          Lo = 0;
        const sn = new Array(We);
        for (x = 0; x < We; x++) sn[x] = 0;
        for (x = K; x <= N; x++) {
          const Ie = f[x];
          if (ae >= We) {
            Ae(Ie, E, O, !0);
            continue;
          }
          let Ze;
          if (Ie.key != null) Ze = de.get(Ie.key);
          else
            for (ie = G; ie <= U; ie++)
              if (sn[ie - G] === 0 && $t(Ie, h[ie])) {
                Ze = ie;
                break;
              }
          Ze === void 0
            ? Ae(Ie, E, O, !0)
            : ((sn[Ze - G] = x + 1),
              Ze >= Lo ? (Lo = Ze) : (jt = !0),
              b(Ie, h[Ze], g, null, E, O, L, P, M),
              ae++);
        }
        const Fo = jt ? oa(sn) : qt;
        for (ie = Fo.length - 1, x = We - 1; x >= 0; x--) {
          const Ie = G + x,
            Ze = h[Ie],
            Bo = Ie + 1 < V ? h[Ie + 1].el : w;
          sn[x] === 0
            ? b(null, Ze, g, Bo, E, O, L, P, M)
            : jt && (ie < 0 || x !== Fo[ie] ? he(Ze, g, Bo, 2) : ie--);
        }
      }
    },
    he = (f, h, g, w, E = null) => {
      const { el: O, type: L, transition: P, children: M, shapeFlag: x } = f;
      if (x & 6) {
        he(f.component.subTree, h, g, w);
        return;
      }
      if (x & 128) {
        f.suspense.move(h, g, w);
        return;
      }
      if (x & 64) {
        L.move(f, h, g, se);
        return;
      }
      if (L === Te) {
        r(O, h, g);
        for (let N = 0; N < M.length; N++) he(M[N], h, g, w);
        r(f.anchor, h, g);
        return;
      }
      if (L === Ar) {
        _(f, h, g);
        return;
      }
      if (w !== 2 && x & 1 && P)
        if (w === 0) P.beforeEnter(O), r(O, h, g), Se(() => P.enter(O), E);
        else {
          const { leave: N, delayLeave: U, afterLeave: K } = P,
            G = () => r(O, h, g),
            de = () => {
              N(O, () => {
                G(), K && K();
              });
            };
          U ? U(O, G, de) : de();
        }
      else r(O, h, g);
    },
    Ae = (f, h, g, w = !1, E = !1) => {
      const {
        type: O,
        props: L,
        ref: P,
        children: M,
        dynamicChildren: x,
        shapeFlag: V,
        patchFlag: N,
        dirs: U,
      } = f;
      if ((P != null && Vr(P, null, g, f, !0), V & 256)) {
        h.ctx.deactivate(f);
        return;
      }
      const K = V & 1 && U,
        G = !Dr(f);
      let de;
      if ((G && (de = L && L.onVnodeBeforeUnmount) && Ge(de, h, f), V & 6))
        D(f.component, g, w);
      else {
        if (V & 128) {
          f.suspense.unmount(g, w);
          return;
        }
        K && Rt(f, null, h, "beforeUnmount"),
          V & 64
            ? f.type.remove(f, h, g, E, se, w)
            : x && (O !== Te || (N > 0 && N & 64))
            ? S(x, h, g, !1, !0)
            : ((O === Te && N & 384) || (!E && V & 16)) && S(M, h, g),
          w && it(f);
      }
      ((G && (de = L && L.onVnodeUnmounted)) || K) &&
        Se(() => {
          de && Ge(de, h, f), K && Rt(f, null, h, "unmounted");
        }, g);
    },
    it = (f) => {
      const { type: h, el: g, anchor: w, transition: E } = f;
      if (h === Te) {
        y(g, w);
        return;
      }
      if (h === Ar) {
        $(f);
        return;
      }
      const O = () => {
        o(g), E && !E.persisted && E.afterLeave && E.afterLeave();
      };
      if (f.shapeFlag & 1 && E && !E.persisted) {
        const { leave: L, delayLeave: P } = E,
          M = () => L(g, O);
        P ? P(f.el, O, M) : M();
      } else O();
    },
    y = (f, h) => {
      let g;
      for (; f !== h; ) (g = p(f)), o(f), (f = g);
      o(h);
    },
    D = (f, h, g) => {
      const { bum: w, scope: E, update: O, subTree: L, um: P } = f;
      w && wr(w),
        E.stop(),
        O && ((O.active = !1), Ae(L, f, h, g)),
        P && Se(P, h),
        Se(() => {
          f.isUnmounted = !0;
        }, h),
        h &&
          h.pendingBranch &&
          !h.isUnmounted &&
          f.asyncDep &&
          !f.asyncResolved &&
          f.suspenseId === h.pendingId &&
          (h.deps--, h.deps === 0 && h.resolve());
    },
    S = (f, h, g, w = !1, E = !1, O = 0) => {
      for (let L = O; L < f.length; L++) Ae(f[L], h, g, w, E);
    },
    j = (f) =>
      f.shapeFlag & 6
        ? j(f.component.subTree)
        : f.shapeFlag & 128
        ? f.suspense.next()
        : p(f.anchor || f.el),
    oe = (f, h, g) => {
      f == null
        ? h._vnode && Ae(h._vnode, null, null, !0)
        : b(h._vnode || null, f, h, null, null, null, g),
        xi(),
        (h._vnode = f);
    },
    se = {
      p: b,
      um: Ae,
      m: he,
      r: it,
      mt: Oe,
      mc: H,
      pc: xe,
      pbc: J,
      n: j,
      o: e,
    };
  let Y, q;
  return (
    t && ([Y, q] = t(se)), { render: oe, hydrate: Y, createApp: ta(oe, Y) }
  );
}
function Tt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function wo(e, t, n = !1) {
  const r = e.children,
    o = t.children;
  if (W(r) && W(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let l = o[s];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = o[s] = bt(o[s])), (l.el = i.el)),
        n || wo(i, l));
    }
}
function oa(e) {
  const t = e.slice(),
    n = [0];
  let r, o, s, i, l;
  const u = e.length;
  for (r = 0; r < u; r++) {
    const a = e[r];
    if (a !== 0) {
      if (((o = n[n.length - 1]), e[o] < a)) {
        (t[r] = o), n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        (l = (s + i) >> 1), e[n[l]] < a ? (s = l + 1) : (i = l);
      a < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), (n[s] = r));
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; ) (n[s] = i), (i = t[i]);
  return n;
}
const sa = (e) => e.__isTeleport,
  yn = (e) => e && (e.disabled || e.disabled === ""),
  ns = (e) => typeof SVGElement != "undefined" && e instanceof SVGElement,
  Ur = (e, t) => {
    const n = e && e.to;
    return be(n) ? (t ? t(n) : null) : n;
  },
  ia = {
    __isTeleport: !0,
    process(e, t, n, r, o, s, i, l, u, a) {
      const {
          mc: c,
          pc: d,
          pbc: p,
          o: { insert: m, querySelector: v, createText: A, createComment: b },
        } = a,
        C = yn(t.props);
      let { shapeFlag: I, children: T, dynamicChildren: _ } = t;
      if (e == null) {
        const $ = (t.el = A("")),
          k = (t.anchor = A(""));
        m($, n, r), m(k, n, r);
        const R = (t.target = Ur(t.props, v)),
          B = (t.targetAnchor = A(""));
        R && (m(B, R), (i = i || ns(R)));
        const H = (X, J) => {
          I & 16 && c(T, X, J, o, s, i, l, u);
        };
        C ? H(n, k) : R && H(R, B);
      } else {
        t.el = e.el;
        const $ = (t.anchor = e.anchor),
          k = (t.target = e.target),
          R = (t.targetAnchor = e.targetAnchor),
          B = yn(e.props),
          H = B ? n : k,
          X = B ? $ : R;
        if (
          ((i = i || ns(k)),
          _
            ? (p(e.dynamicChildren, _, H, o, s, i, l), wo(e, t, !0))
            : u || d(e, t, H, X, o, s, i, l, !1),
          C)
        )
          B || Un(t, n, $, a, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const J = (t.target = Ur(t.props, v));
          J && Un(t, J, null, a, 0);
        } else B && Un(t, k, R, a, 1);
      }
    },
    remove(e, t, n, r, { um: o, o: { remove: s } }, i) {
      const {
        shapeFlag: l,
        children: u,
        anchor: a,
        targetAnchor: c,
        target: d,
        props: p,
      } = e;
      if ((d && s(c), (i || !yn(p)) && (s(a), l & 16)))
        for (let m = 0; m < u.length; m++) {
          const v = u[m];
          o(v, t, n, !0, !!v.dynamicChildren);
        }
    },
    move: Un,
    hydrate: la,
  };
function Un(e, t, n, { o: { insert: r }, m: o }, s = 2) {
  s === 0 && r(e.targetAnchor, t, n);
  const { el: i, anchor: l, shapeFlag: u, children: a, props: c } = e,
    d = s === 2;
  if ((d && r(i, t, n), (!d || yn(c)) && u & 16))
    for (let p = 0; p < a.length; p++) o(a[p], t, n, 2);
  d && r(l, t, n);
}
function la(
  e,
  t,
  n,
  r,
  o,
  s,
  { o: { nextSibling: i, parentNode: l, querySelector: u } },
  a
) {
  const c = (t.target = Ur(t.props, u));
  if (c) {
    const d = c._lpa || c.firstChild;
    t.shapeFlag & 16 &&
      (yn(t.props)
        ? ((t.anchor = a(i(e), t, l(e), n, r, o, s)), (t.targetAnchor = d))
        : ((t.anchor = i(e)), (t.targetAnchor = a(d, t, c, n, r, o, s))),
      (c._lpa = t.targetAnchor && i(t.targetAnchor)));
  }
  return t.anchor && i(t.anchor);
}
const ua = ia,
  Eo = "components";
function rs(e, t) {
  return Ui(Eo, e, !0, t) || e;
}
const Vi = Symbol();
function os(e) {
  return be(e) ? Ui(Eo, e, !1) || e : e || Vi;
}
function Ui(e, t, n = !0, r = !1) {
  const o = Le || Ee;
  if (o) {
    const s = o.type;
    if (e === Eo) {
      const l = Ea(s);
      if (l && (l === t || l === st(t) || l === fr(st(t)))) return s;
    }
    const i = ss(o[e] || s[e], t) || ss(o.appContext[e], t);
    return !i && r ? s : i;
  }
}
function ss(e, t) {
  return e && (e[t] || e[st(t)] || e[fr(st(t))]);
}
const Te = Symbol(void 0),
  xo = Symbol(void 0),
  Qe = Symbol(void 0),
  Ar = Symbol(void 0),
  bn = [];
let Bt = null;
function ge(e = !1) {
  bn.push((Bt = e ? null : []));
}
function aa() {
  bn.pop(), (Bt = bn[bn.length - 1] || null);
}
let tr = 1;
function is(e) {
  tr += e;
}
function Ki(e) {
  return (
    (e.dynamicChildren = tr > 0 ? Bt || qt : null),
    aa(),
    tr > 0 && Bt && Bt.push(e),
    e
  );
}
function Re(e, t, n, r, o, s) {
  return Ki(me(e, t, n, r, o, s, !0));
}
function Nt(e, t, n, r, o) {
  return Ki(fe(e, t, n, r, o, !0));
}
function nr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function $t(e, t) {
  return e.type === t.type && e.key === t.key;
}
const vr = "__vInternal",
  Wi = ({ key: e }) => (e != null ? e : null),
  Qn = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? be(e) || ce(e) || Q(e)
        ? { i: Le, r: e, k: t, f: !!n }
        : e
      : null;
function me(
  e,
  t = null,
  n = null,
  r = 0,
  o = null,
  s = e === Te ? 0 : 1,
  i = !1,
  l = !1
) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Wi(t),
    ref: t && Qn(t),
    scopeId: hr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
  };
  return (
    l
      ? (Ao(u, n), s & 128 && e.normalize(u))
      : n && (u.shapeFlag |= be(n) ? 8 : 16),
    tr > 0 &&
      !i &&
      Bt &&
      (u.patchFlag > 0 || s & 6) &&
      u.patchFlag !== 32 &&
      Bt.push(u),
    u
  );
}
const fe = ca;
function ca(e, t = null, n = null, r = 0, o = null, s = !1) {
  if (((!e || e === Vi) && (e = Qe), nr(e))) {
    const l = Qt(e, t, !0);
    return n && Ao(l, n), l;
  }
  if ((xa(e) && (e = e.__vccOpts), t)) {
    t = fa(t);
    let { class: l, style: u } = t;
    l && !be(l) && (t.class = we(l)),
      _e(u) && (pi(u) && !W(u) && (u = Ce({}, u)), (t.style = to(u)));
  }
  const i = be(e) ? 1 : Tu(e) ? 128 : sa(e) ? 64 : _e(e) ? 4 : Q(e) ? 2 : 0;
  return me(e, t, n, r, o, i, s, !0);
}
function fa(e) {
  return e ? (pi(e) || vr in e ? Ce({}, e) : e) : null;
}
function Qt(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: s, children: i } = e,
    l = t ? rr(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Wi(l),
    ref:
      t && t.ref ? (n && o ? (W(o) ? o.concat(Qn(t)) : [o, Qn(t)]) : Qn(t)) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Te ? (s === -1 ? 16 : s | 16) : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Qt(e.ssContent),
    ssFallback: e.ssFallback && Qt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
  };
}
function Pn(e = " ", t = 0) {
  return fe(xo, null, e, t);
}
function St(e = "", t = !1) {
  return t ? (ge(), Nt(Qe, null, e)) : fe(Qe, null, e);
}
function et(e) {
  return e == null || typeof e == "boolean"
    ? fe(Qe)
    : W(e)
    ? fe(Te, null, e.slice())
    : typeof e == "object"
    ? bt(e)
    : fe(xo, null, String(e));
}
function bt(e) {
  return e.el === null || e.memo ? e : Qt(e);
}
function Ao(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (W(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Ao(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(vr in t)
        ? (t._ctx = Le)
        : o === 3 &&
          Le &&
          (Le.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    Q(t)
      ? ((t = { default: t, _ctx: Le }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Pn(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function rr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = we([t.class, r.class]));
      else if (o === "style") t.style = to([t.style, r.style]);
      else if (ur(o)) {
        const s = t[o],
          i = r[o];
        i &&
          s !== i &&
          !(W(s) && s.includes(i)) &&
          (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Ge(e, t, n, r = null) {
  Ve(e, t, 7, [n, r]);
}
function da(e, t, n, r) {
  let o;
  const s = n && n[r];
  if (W(e) || be(e)) {
    o = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      o[i] = t(e[i], i, void 0, s && s[i]);
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let i = 0; i < e; i++) o[i] = t(i + 1, i, void 0, s && s[i]);
  } else if (_e(e))
    if (e[Symbol.iterator])
      o = Array.from(e, (i, l) => t(i, l, void 0, s && s[l]));
    else {
      const i = Object.keys(e);
      o = new Array(i.length);
      for (let l = 0, u = i.length; l < u; l++) {
        const a = i[l];
        o[l] = t(e[a], a, l, s && s[l]);
      }
    }
  else o = [];
  return n && (n[r] = o), o;
}
function Pt(e, t, n = {}, r, o) {
  if (Le.isCE)
    return fe("slot", t === "default" ? null : { name: t }, r && r());
  let s = e[t];
  s && s._c && (s._d = !1), ge();
  const i = s && qi(s(n)),
    l = Nt(
      Te,
      { key: n.key || `_${t}` },
      i || (r ? r() : []),
      i && e._ === 1 ? 64 : -2
    );
  return (
    !o && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    s && s._c && (s._d = !0),
    l
  );
}
function qi(e) {
  return e.some((t) =>
    nr(t) ? !(t.type === Qe || (t.type === Te && !qi(t.children))) : !0
  )
    ? e
    : null;
}
const Kr = (e) => (e ? (zi(e) ? Co(e) || e.proxy : Kr(e.parent)) : null),
  or = Ce(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Kr(e.parent),
    $root: (e) => Kr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Li(e),
    $forceUpdate: (e) => () => _i(e.update),
    $nextTick: (e) => bi.bind(e.proxy),
    $watch: (e) => Mu.bind(e),
  }),
  pa = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: o,
        props: s,
        accessCache: i,
        type: l,
        appContext: u,
      } = e;
      let a;
      if (t[0] !== "$") {
        const m = i[t];
        if (m !== void 0)
          switch (m) {
            case 1:
              return r[t];
            case 2:
              return o[t];
            case 4:
              return n[t];
            case 3:
              return s[t];
          }
        else {
          if (r !== ue && ee(r, t)) return (i[t] = 1), r[t];
          if (o !== ue && ee(o, t)) return (i[t] = 2), o[t];
          if ((a = e.propsOptions[0]) && ee(a, t)) return (i[t] = 3), s[t];
          if (n !== ue && ee(n, t)) return (i[t] = 4), n[t];
          Nr && (i[t] = 0);
        }
      }
      const c = or[t];
      let d, p;
      if (c) return t === "$attrs" && De(e, "get", t), c(e);
      if ((d = l.__cssModules) && (d = d[t])) return d;
      if (n !== ue && ee(n, t)) return (i[t] = 4), n[t];
      if (((p = u.config.globalProperties), ee(p, t))) return p[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: s } = e;
      return o !== ue && ee(o, t)
        ? ((o[t] = n), !0)
        : r !== ue && ee(r, t)
        ? ((r[t] = n), !0)
        : ee(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((s[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: o,
          propsOptions: s,
        },
      },
      i
    ) {
      let l;
      return (
        !!n[i] ||
        (e !== ue && ee(e, i)) ||
        (t !== ue && ee(t, i)) ||
        ((l = s[0]) && ee(l, i)) ||
        ee(r, i) ||
        ee(or, i) ||
        ee(o.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? this.set(e, t, n.get(), null)
          : n.value != null && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  },
  ha = Hi();
let ma = 0;
function ga(e, t, n) {
  const r = e.type,
    o = (t ? t.appContext : e.appContext) || ha,
    s = {
      uid: ma++,
      vnode: e,
      type: r,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new ei(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Bi(r, o),
      emitsOptions: Ci(r, o),
      emit: null,
      emitted: null,
      propsDefaults: ue,
      inheritAttrs: r.inheritAttrs,
      ctx: ue,
      data: ue,
      props: ue,
      attrs: ue,
      slots: ue,
      refs: ue,
      setupState: ue,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (s.ctx = { _: s }),
    (s.root = t ? t.root : s),
    (s.emit = Eu.bind(null, s)),
    e.ce && e.ce(s),
    s
  );
}
let Ee = null;
const va = () => Ee || Le,
  Xt = (e) => {
    (Ee = e), e.scope.on();
  },
  Dt = () => {
    Ee && Ee.scope.off(), (Ee = null);
  };
function zi(e) {
  return e.vnode.shapeFlag & 4;
}
let Rn = !1;
function ya(e, t = !1) {
  Rn = t;
  const { props: n, children: r } = e.vnode,
    o = zi(e);
  Yu(e, n, o, t), Ju(e, r);
  const s = o ? ba(e, t) : void 0;
  return (Rn = !1), s;
}
function ba(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = po(new Proxy(e.ctx, pa)));
  const { setup: r } = n;
  if (r) {
    const o = (e.setupContext = r.length > 1 ? wa(e) : null);
    Xt(e), nn();
    const s = Et(r, e, 0, [e.props, o]);
    if ((rn(), Dt(), Xs(s))) {
      if ((s.then(Dt, Dt), t))
        return s
          .then((i) => {
            ls(e, i, t);
          })
          .catch((i) => {
            pr(i, e, 0);
          });
      e.asyncDep = s;
    } else ls(e, s, t);
  } else Yi(e, t);
}
function ls(e, t, n) {
  Q(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : _e(t) && (e.setupState = vi(t)),
    Yi(e, n);
}
let us;
function Yi(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && us && !r.render) {
      const o = r.template;
      if (o) {
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: u } = r,
          a = Ce(Ce({ isCustomElement: s, delimiters: l }, i), u);
        r.render = us(o, a);
      }
    }
    e.render = r.render || Ye;
  }
  Xt(e), nn(), Uu(e), rn(), Dt();
}
function _a(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return De(e, "get", "$attrs"), t[n];
    },
  });
}
function wa(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = _a(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Co(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(vi(po(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in or) return or[n](e);
        },
      }))
    );
}
function Ea(e) {
  return (Q(e) && e.displayName) || e.name;
}
function xa(e) {
  return Q(e) && "__vccOpts" in e;
}
const ze = (e, t) => gu(e, t, Rn);
function Oo(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? _e(t) && !W(t)
      ? nr(t)
        ? fe(e, null, [t])
        : fe(e, t)
      : fe(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && nr(n) && (n = [n]),
      fe(e, t, n));
}
const Aa = "3.2.31",
  Ca = "http://www.w3.org/2000/svg",
  kt = typeof document != "undefined" ? document : null,
  as = kt && kt.createElement("template"),
  Oa = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o = t
        ? kt.createElementNS(Ca, e)
        : kt.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          o.setAttribute("multiple", r.multiple),
        o
      );
    },
    createText: (e) => kt.createTextNode(e),
    createComment: (e) => kt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => kt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    cloneNode(e) {
      const t = e.cloneNode(!0);
      return "_value" in e && (t._value = e._value), t;
    },
    insertStaticContent(e, t, n, r, o, s) {
      const i = n ? n.previousSibling : t.lastChild;
      if (o && (o === s || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), n),
            !(o === s || !(o = o.nextSibling));

        );
      else {
        as.innerHTML = r ? `<svg>${e}</svg>` : e;
        const l = as.content;
        if (r) {
          const u = l.firstChild;
          for (; u.firstChild; ) l.appendChild(u.firstChild);
          l.removeChild(u);
        }
        t.insertBefore(l, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function Pa(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function Ra(e, t, n) {
  const r = e.style,
    o = be(n);
  if (n && !o) {
    for (const s in n) Wr(r, s, n[s]);
    if (t && !be(t)) for (const s in t) n[s] == null && Wr(r, s, "");
  } else {
    const s = r.display;
    o ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (r.display = s);
  }
}
const cs = /\s*!important$/;
function Wr(e, t, n) {
  if (W(n)) n.forEach((r) => Wr(e, t, r));
  else if (t.startsWith("--")) e.setProperty(t, n);
  else {
    const r = Ta(e, t);
    cs.test(n)
      ? e.setProperty(tn(r), n.replace(cs, ""), "important")
      : (e[r] = n);
  }
}
const fs = ["Webkit", "Moz", "ms"],
  Cr = {};
function Ta(e, t) {
  const n = Cr[t];
  if (n) return n;
  let r = st(t);
  if (r !== "filter" && r in e) return (Cr[t] = r);
  r = fr(r);
  for (let o = 0; o < fs.length; o++) {
    const s = fs[o] + r;
    if (s in e) return (Cr[t] = s);
  }
  return t;
}
const ds = "http://www.w3.org/1999/xlink";
function Sa(e, t, n, r, o) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(ds, t.slice(6, t.length))
      : e.setAttributeNS(ds, t, n);
  else {
    const s = Ol(t);
    n == null || (s && !zs(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, s ? "" : n);
  }
}
function Ma(e, t, n, r, o, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, o, s), (e[t] = n == null ? "" : n);
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const l = n == null ? "" : n;
    (e.value !== l || e.tagName === "OPTION") && (e.value = l),
      n == null && e.removeAttribute(t);
    return;
  }
  if (n === "" || n == null) {
    const l = typeof e[t];
    if (l === "boolean") {
      e[t] = zs(n);
      return;
    } else if (n == null && l === "string") {
      (e[t] = ""), e.removeAttribute(t);
      return;
    } else if (l === "number") {
      try {
        e[t] = 0;
      } catch {}
      e.removeAttribute(t);
      return;
    }
  }
  try {
    e[t] = n;
  } catch {}
}
let sr = Date.now,
  Qi = !1;
if (typeof window != "undefined") {
  sr() > document.createEvent("Event").timeStamp &&
    (sr = () => performance.now());
  const e = navigator.userAgent.match(/firefox\/(\d+)/i);
  Qi = !!(e && Number(e[1]) <= 53);
}
let qr = 0;
const Ia = Promise.resolve(),
  $a = () => {
    qr = 0;
  },
  ka = () => qr || (Ia.then($a), (qr = sr()));
function La(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Fa(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function Ba(e, t, n, r, o = null) {
  const s = e._vei || (e._vei = {}),
    i = s[t];
  if (r && i) i.value = r;
  else {
    const [l, u] = Da(t);
    if (r) {
      const a = (s[t] = Na(r, o));
      La(e, l, a, u);
    } else i && (Fa(e, l, i, u), (s[t] = void 0));
  }
}
const ps = /(?:Once|Passive|Capture)$/;
function Da(e) {
  let t;
  if (ps.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(ps)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
  }
  return [tn(e.slice(2)), t];
}
function Na(e, t) {
  const n = (r) => {
    const o = r.timeStamp || sr();
    (Qi || o >= n.attached - 1) && Ve(ja(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = ka()), n;
}
function ja(e, t) {
  if (W(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (o) => !o._stopped && r && r(o))
    );
  } else return t;
}
const hs = /^on[a-z]/,
  Ha = (e, t, n, r, o = !1, s, i, l, u) => {
    t === "class"
      ? Pa(e, r, o)
      : t === "style"
      ? Ra(e, n, r)
      : ur(t)
      ? no(t) || Ba(e, t, n, r, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Va(e, t, r, o)
        )
      ? Ma(e, t, r, s, i, l, u)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        Sa(e, t, r, o));
  };
function Va(e, t, n, r) {
  return r
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && hs.test(t) && Q(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (hs.test(t) && be(n))
    ? !1
    : t in e;
}
const ht = "transition",
  cn = "animation",
  Po = (e, { slots: t }) => Oo(Ri, Ua(e), t);
Po.displayName = "Transition";
const Xi = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
Po.props = Ce({}, Ri.props, Xi);
const Mt = (e, t = []) => {
    W(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  ms = (e) => (e ? (W(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Ua(e) {
  const t = {};
  for (const F in e) F in Xi || (t[F] = e[F]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: r,
      duration: o,
      enterFromClass: s = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: u = s,
      appearActiveClass: a = i,
      appearToClass: c = l,
      leaveFromClass: d = `${n}-leave-from`,
      leaveActiveClass: p = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`,
    } = e,
    v = Ka(o),
    A = v && v[0],
    b = v && v[1],
    {
      onBeforeEnter: C,
      onEnter: I,
      onEnterCancelled: T,
      onLeave: _,
      onLeaveCancelled: $,
      onBeforeAppear: k = C,
      onAppear: R = I,
      onAppearCancelled: B = T,
    } = t,
    H = (F, z, ye) => {
      Ht(F, z ? c : l), Ht(F, z ? a : i), ye && ye();
    },
    X = (F, z) => {
      Ht(F, m), Ht(F, p), z && z();
    },
    J = (F) => (z, ye) => {
      const Oe = F ? R : I,
        re = () => H(z, F, ye);
      Mt(Oe, [z, re]),
        gs(() => {
          Ht(z, F ? u : s), mt(z, F ? c : l), ms(Oe) || vs(z, r, A, re);
        });
    };
  return Ce(t, {
    onBeforeEnter(F) {
      Mt(C, [F]), mt(F, s), mt(F, i);
    },
    onBeforeAppear(F) {
      Mt(k, [F]), mt(F, u), mt(F, a);
    },
    onEnter: J(!1),
    onAppear: J(!0),
    onLeave(F, z) {
      const ye = () => X(F, z);
      mt(F, d),
        za(),
        mt(F, p),
        gs(() => {
          Ht(F, d), mt(F, m), ms(_) || vs(F, r, b, ye);
        }),
        Mt(_, [F, ye]);
    },
    onEnterCancelled(F) {
      H(F, !1), Mt(T, [F]);
    },
    onAppearCancelled(F) {
      H(F, !0), Mt(B, [F]);
    },
    onLeaveCancelled(F) {
      X(F), Mt($, [F]);
    },
  });
}
function Ka(e) {
  if (e == null) return null;
  if (_e(e)) return [Or(e.enter), Or(e.leave)];
  {
    const t = Or(e);
    return [t, t];
  }
}
function Or(e) {
  return Gs(e);
}
function mt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function Ht(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function gs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Wa = 0;
function vs(e, t, n, r) {
  const o = (e._endId = ++Wa),
    s = () => {
      o === e._endId && r();
    };
  if (n) return setTimeout(s, n);
  const { type: i, timeout: l, propCount: u } = qa(e, t);
  if (!i) return r();
  const a = i + "end";
  let c = 0;
  const d = () => {
      e.removeEventListener(a, p), s();
    },
    p = (m) => {
      m.target === e && ++c >= u && d();
    };
  setTimeout(() => {
    c < u && d();
  }, l + 1),
    e.addEventListener(a, p);
}
function qa(e, t) {
  const n = window.getComputedStyle(e),
    r = (v) => (n[v] || "").split(", "),
    o = r(ht + "Delay"),
    s = r(ht + "Duration"),
    i = ys(o, s),
    l = r(cn + "Delay"),
    u = r(cn + "Duration"),
    a = ys(l, u);
  let c = null,
    d = 0,
    p = 0;
  t === ht
    ? i > 0 && ((c = ht), (d = i), (p = s.length))
    : t === cn
    ? a > 0 && ((c = cn), (d = a), (p = u.length))
    : ((d = Math.max(i, a)),
      (c = d > 0 ? (i > a ? ht : cn) : null),
      (p = c ? (c === ht ? s.length : u.length) : 0));
  const m = c === ht && /\b(transform|all)(,|$)/.test(n[ht + "Property"]);
  return { type: c, timeout: d, propCount: p, hasTransform: m };
}
function ys(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => bs(n) + bs(e[r])));
}
function bs(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function za() {
  return document.body.offsetHeight;
}
const Ya = {
  beforeMount(e, { value: t }, { transition: n }) {
    (e._vod = e.style.display === "none" ? "" : e.style.display),
      n && t ? n.beforeEnter(e) : fn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n &&
      (r
        ? t
          ? (r.beforeEnter(e), fn(e, !0), r.enter(e))
          : r.leave(e, () => {
              fn(e, !1);
            })
        : fn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    fn(e, t);
  },
};
function fn(e, t) {
  e.style.display = t ? e._vod : "none";
}
const Qa = Ce({ patchProp: Ha }, Oa);
let _s;
function Xa() {
  return _s || (_s = na(Qa));
}
const Ja = (...e) => {
  const t = Xa().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const o = Za(r);
      if (!o) return;
      const s = t._component;
      !Q(s) && !s.render && !s.template && (s.template = o.innerHTML),
        (o.innerHTML = "");
      const i = n(o, !1, o instanceof SVGElement);
      return (
        o instanceof Element &&
          (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function Za(e) {
  return be(e) ? document.querySelector(e) : e;
}
var Ga = !1;
/*!
 * pinia v2.0.13
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const ec = Symbol();
var ws;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})(ws || (ws = {}));
function tc() {
  const e = Bl(!0),
    t = e.run(() => $e({}));
  let n = [],
    r = [];
  const o = po({
    install(s) {
      (o._a = s),
        s.provide(ec, o),
        (s.config.globalProperties.$pinia = o),
        r.forEach((i) => n.push(i)),
        (r = []);
    },
    use(s) {
      return !this._a && !Ga ? r.push(s) : n.push(s), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return o;
}
var nc = "/assets/logo.da9b9095.svg";
/*!
 * vue-router v4.0.14
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const Ji =
    typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
  on = (e) => (Ji ? Symbol(e) : "_vr_" + e),
  rc = on("rvlm"),
  Es = on("rvd"),
  Ro = on("r"),
  Zi = on("rl"),
  zr = on("rvl"),
  Wt = typeof window != "undefined";
function oc(e) {
  return e.__esModule || (Ji && e[Symbol.toStringTag] === "Module");
}
const le = Object.assign;
function Pr(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = Array.isArray(o) ? o.map(e) : e(o);
  }
  return n;
}
const _n = () => {},
  sc = /\/$/,
  ic = (e) => e.replace(sc, "");
function Rr(e, t, n = "/") {
  let r,
    o = {},
    s = "",
    i = "";
  const l = t.indexOf("?"),
    u = t.indexOf("#", l > -1 ? l : 0);
  return (
    l > -1 &&
      ((r = t.slice(0, l)),
      (s = t.slice(l + 1, u > -1 ? u : t.length)),
      (o = e(s))),
    u > -1 && ((r = r || t.slice(0, u)), (i = t.slice(u, t.length))),
    (r = cc(r != null ? r : t, n)),
    { fullPath: r + (s && "?") + s + i, path: r, query: o, hash: i }
  );
}
function lc(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function xs(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function uc(e, t, n) {
  const r = t.matched.length - 1,
    o = n.matched.length - 1;
  return (
    r > -1 &&
    r === o &&
    Jt(t.matched[r], n.matched[o]) &&
    Gi(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Jt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Gi(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!ac(e[n], t[n])) return !1;
  return !0;
}
function ac(e, t) {
  return Array.isArray(e) ? As(e, t) : Array.isArray(t) ? As(t, e) : e === t;
}
function As(e, t) {
  return Array.isArray(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function cc(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/");
  let o = n.length - 1,
    s,
    i;
  for (s = 0; s < r.length; s++)
    if (((i = r[s]), !(o === 1 || i === ".")))
      if (i === "..") o--;
      else break;
  return (
    n.slice(0, o).join("/") +
    "/" +
    r.slice(s - (s === r.length ? 1 : 0)).join("/")
  );
}
var Tn;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Tn || (Tn = {}));
var wn;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(wn || (wn = {}));
function fc(e) {
  if (!e)
    if (Wt) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), ic(e);
}
const dc = /^[^#]+#/;
function pc(e, t) {
  return e.replace(dc, "#") + t;
}
function hc(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const yr = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function mc(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      o =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!o) return;
    t = hc(o, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function Cs(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Yr = new Map();
function gc(e, t) {
  Yr.set(e, t);
}
function vc(e) {
  const t = Yr.get(e);
  return Yr.delete(e), t;
}
let yc = () => location.protocol + "//" + location.host;
function el(e, t) {
  const { pathname: n, search: r, hash: o } = t,
    s = e.indexOf("#");
  if (s > -1) {
    let l = o.includes(e.slice(s)) ? e.slice(s).length : 1,
      u = o.slice(l);
    return u[0] !== "/" && (u = "/" + u), xs(u, "");
  }
  return xs(n, e) + r + o;
}
function bc(e, t, n, r) {
  let o = [],
    s = [],
    i = null;
  const l = ({ state: p }) => {
    const m = el(e, location),
      v = n.value,
      A = t.value;
    let b = 0;
    if (p) {
      if (((n.value = m), (t.value = p), i && i === v)) {
        i = null;
        return;
      }
      b = A ? p.position - A.position : 0;
    } else r(m);
    o.forEach((C) => {
      C(n.value, v, {
        delta: b,
        type: Tn.pop,
        direction: b ? (b > 0 ? wn.forward : wn.back) : wn.unknown,
      });
    });
  };
  function u() {
    i = n.value;
  }
  function a(p) {
    o.push(p);
    const m = () => {
      const v = o.indexOf(p);
      v > -1 && o.splice(v, 1);
    };
    return s.push(m), m;
  }
  function c() {
    const { history: p } = window;
    !p.state || p.replaceState(le({}, p.state, { scroll: yr() }), "");
  }
  function d() {
    for (const p of s) p();
    (s = []),
      window.removeEventListener("popstate", l),
      window.removeEventListener("beforeunload", c);
  }
  return (
    window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", c),
    { pauseListeners: u, listen: a, destroy: d }
  );
}
function Os(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? yr() : null,
  };
}
function _c(e) {
  const { history: t, location: n } = window,
    r = { value: el(e, n) },
    o = { value: t.state };
  o.value ||
    s(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function s(u, a, c) {
    const d = e.indexOf("#"),
      p =
        d > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(d)) + u
          : yc() + e + u;
    try {
      t[c ? "replaceState" : "pushState"](a, "", p), (o.value = a);
    } catch (m) {
      console.error(m), n[c ? "replace" : "assign"](p);
    }
  }
  function i(u, a) {
    const c = le({}, t.state, Os(o.value.back, u, o.value.forward, !0), a, {
      position: o.value.position,
    });
    s(u, c, !0), (r.value = u);
  }
  function l(u, a) {
    const c = le({}, o.value, t.state, { forward: u, scroll: yr() });
    s(c.current, c, !0);
    const d = le({}, Os(r.value, u, null), { position: c.position + 1 }, a);
    s(u, d, !1), (r.value = u);
  }
  return { location: r, state: o, push: l, replace: i };
}
function wc(e) {
  e = fc(e);
  const t = _c(e),
    n = bc(e, t.state, t.location, t.replace);
  function r(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const o = le(
    { location: "", base: e, go: r, createHref: pc.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(o, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(o, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    o
  );
}
function Ec(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function tl(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const gt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  nl = on("nf");
var Ps;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Ps || (Ps = {}));
function Zt(e, t) {
  return le(new Error(), { type: e, [nl]: !0 }, t);
}
function vt(e, t) {
  return e instanceof Error && nl in e && (t == null || !!(e.type & t));
}
const Rs = "[^/]+?",
  xc = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Ac = /[.+*?^${}()[\]/\\]/g;
function Cc(e, t) {
  const n = le({}, xc, t),
    r = [];
  let o = n.start ? "^" : "";
  const s = [];
  for (const a of e) {
    const c = a.length ? [] : [90];
    n.strict && !a.length && (o += "/");
    for (let d = 0; d < a.length; d++) {
      const p = a[d];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (p.type === 0)
        d || (o += "/"), (o += p.value.replace(Ac, "\\$&")), (m += 40);
      else if (p.type === 1) {
        const { value: v, repeatable: A, optional: b, regexp: C } = p;
        s.push({ name: v, repeatable: A, optional: b });
        const I = C || Rs;
        if (I !== Rs) {
          m += 10;
          try {
            new RegExp(`(${I})`);
          } catch (_) {
            throw new Error(
              `Invalid custom RegExp for param "${v}" (${I}): ` + _.message
            );
          }
        }
        let T = A ? `((?:${I})(?:/(?:${I}))*)` : `(${I})`;
        d || (T = b && a.length < 2 ? `(?:/${T})` : "/" + T),
          b && (T += "?"),
          (o += T),
          (m += 20),
          b && (m += -8),
          A && (m += -20),
          I === ".*" && (m += -50);
      }
      c.push(m);
    }
    r.push(c);
  }
  if (n.strict && n.end) {
    const a = r.length - 1;
    r[a][r[a].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? (o += "$") : n.strict && (o += "(?:/|$)");
  const i = new RegExp(o, n.sensitive ? "" : "i");
  function l(a) {
    const c = a.match(i),
      d = {};
    if (!c) return null;
    for (let p = 1; p < c.length; p++) {
      const m = c[p] || "",
        v = s[p - 1];
      d[v.name] = m && v.repeatable ? m.split("/") : m;
    }
    return d;
  }
  function u(a) {
    let c = "",
      d = !1;
    for (const p of e) {
      (!d || !c.endsWith("/")) && (c += "/"), (d = !1);
      for (const m of p)
        if (m.type === 0) c += m.value;
        else if (m.type === 1) {
          const { value: v, repeatable: A, optional: b } = m,
            C = v in a ? a[v] : "";
          if (Array.isArray(C) && !A)
            throw new Error(
              `Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`
            );
          const I = Array.isArray(C) ? C.join("/") : C;
          if (!I)
            if (b)
              p.length < 2 &&
                (c.endsWith("/") ? (c = c.slice(0, -1)) : (d = !0));
            else throw new Error(`Missing required param "${v}"`);
          c += I;
        }
    }
    return c;
  }
  return { re: i, score: r, keys: s, parse: l, stringify: u };
}
function Oc(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function Pc(e, t) {
  let n = 0;
  const r = e.score,
    o = t.score;
  for (; n < r.length && n < o.length; ) {
    const s = Oc(r[n], o[n]);
    if (s) return s;
    n++;
  }
  return o.length - r.length;
}
const Rc = { type: 0, value: "" },
  Tc = /[a-zA-Z0-9_]/;
function Sc(e) {
  if (!e) return [[]];
  if (e === "/") return [[Rc]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${a}": ${m}`);
  }
  let n = 0,
    r = n;
  const o = [];
  let s;
  function i() {
    s && o.push(s), (s = []);
  }
  let l = 0,
    u,
    a = "",
    c = "";
  function d() {
    !a ||
      (n === 0
        ? s.push({ type: 0, value: a })
        : n === 1 || n === 2 || n === 3
        ? (s.length > 1 &&
            (u === "*" || u === "+") &&
            t(
              `A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`
            ),
          s.push({
            type: 1,
            value: a,
            regexp: c,
            repeatable: u === "*" || u === "+",
            optional: u === "*" || u === "?",
          }))
        : t("Invalid state to consume buffer"),
      (a = ""));
  }
  function p() {
    a += u;
  }
  for (; l < e.length; ) {
    if (((u = e[l++]), u === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        u === "/" ? (a && d(), i()) : u === ":" ? (d(), (n = 1)) : p();
        break;
      case 4:
        p(), (n = r);
        break;
      case 1:
        u === "("
          ? (n = 2)
          : Tc.test(u)
          ? p()
          : (d(), (n = 0), u !== "*" && u !== "?" && u !== "+" && l--);
        break;
      case 2:
        u === ")"
          ? c[c.length - 1] == "\\"
            ? (c = c.slice(0, -1) + u)
            : (n = 3)
          : (c += u);
        break;
      case 3:
        d(), (n = 0), u !== "*" && u !== "?" && u !== "+" && l--, (c = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${a}"`), d(), i(), o;
}
function Mc(e, t, n) {
  const r = Cc(Sc(e.path), n),
    o = le(r, { record: e, parent: t, children: [], alias: [] });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function Ic(e, t) {
  const n = [],
    r = new Map();
  t = Ss({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(c) {
    return r.get(c);
  }
  function s(c, d, p) {
    const m = !p,
      v = kc(c);
    v.aliasOf = p && p.record;
    const A = Ss(t, c),
      b = [v];
    if ("alias" in c) {
      const T = typeof c.alias == "string" ? [c.alias] : c.alias;
      for (const _ of T)
        b.push(
          le({}, v, {
            components: p ? p.record.components : v.components,
            path: _,
            aliasOf: p ? p.record : v,
          })
        );
    }
    let C, I;
    for (const T of b) {
      const { path: _ } = T;
      if (d && _[0] !== "/") {
        const $ = d.record.path,
          k = $[$.length - 1] === "/" ? "" : "/";
        T.path = d.record.path + (_ && k + _);
      }
      if (
        ((C = Mc(T, d, A)),
        p
          ? p.alias.push(C)
          : ((I = I || C),
            I !== C && I.alias.push(C),
            m && c.name && !Ts(C) && i(c.name)),
        "children" in v)
      ) {
        const $ = v.children;
        for (let k = 0; k < $.length; k++) s($[k], C, p && p.children[k]);
      }
      (p = p || C), u(C);
    }
    return I
      ? () => {
          i(I);
        }
      : _n;
  }
  function i(c) {
    if (tl(c)) {
      const d = r.get(c);
      d &&
        (r.delete(c),
        n.splice(n.indexOf(d), 1),
        d.children.forEach(i),
        d.alias.forEach(i));
    } else {
      const d = n.indexOf(c);
      d > -1 &&
        (n.splice(d, 1),
        c.record.name && r.delete(c.record.name),
        c.children.forEach(i),
        c.alias.forEach(i));
    }
  }
  function l() {
    return n;
  }
  function u(c) {
    let d = 0;
    for (
      ;
      d < n.length &&
      Pc(c, n[d]) >= 0 &&
      (c.record.path !== n[d].record.path || !rl(c, n[d]));

    )
      d++;
    n.splice(d, 0, c), c.record.name && !Ts(c) && r.set(c.record.name, c);
  }
  function a(c, d) {
    let p,
      m = {},
      v,
      A;
    if ("name" in c && c.name) {
      if (((p = r.get(c.name)), !p)) throw Zt(1, { location: c });
      (A = p.record.name),
        (m = le(
          $c(
            d.params,
            p.keys.filter((I) => !I.optional).map((I) => I.name)
          ),
          c.params
        )),
        (v = p.stringify(m));
    } else if ("path" in c)
      (v = c.path),
        (p = n.find((I) => I.re.test(v))),
        p && ((m = p.parse(v)), (A = p.record.name));
    else {
      if (((p = d.name ? r.get(d.name) : n.find((I) => I.re.test(d.path))), !p))
        throw Zt(1, { location: c, currentLocation: d });
      (A = p.record.name),
        (m = le({}, d.params, c.params)),
        (v = p.stringify(m));
    }
    const b = [];
    let C = p;
    for (; C; ) b.unshift(C.record), (C = C.parent);
    return { name: A, path: v, params: m, matched: b, meta: Fc(b) };
  }
  return (
    e.forEach((c) => s(c)),
    {
      addRoute: s,
      resolve: a,
      removeRoute: i,
      getRoutes: l,
      getRecordMatcher: o,
    }
  );
}
function $c(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function kc(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Lc(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e ? e.components || {} : { default: e.component },
  };
}
function Lc(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "boolean" ? n : n[r];
  return t;
}
function Ts(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Fc(e) {
  return e.reduce((t, n) => le(t, n.meta), {});
}
function Ss(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function rl(e, t) {
  return t.children.some((n) => n === e || rl(e, n));
}
const ol = /#/g,
  Bc = /&/g,
  Dc = /\//g,
  Nc = /=/g,
  jc = /\?/g,
  sl = /\+/g,
  Hc = /%5B/g,
  Vc = /%5D/g,
  il = /%5E/g,
  Uc = /%60/g,
  ll = /%7B/g,
  Kc = /%7C/g,
  ul = /%7D/g,
  Wc = /%20/g;
function To(e) {
  return encodeURI("" + e)
    .replace(Kc, "|")
    .replace(Hc, "[")
    .replace(Vc, "]");
}
function qc(e) {
  return To(e).replace(ll, "{").replace(ul, "}").replace(il, "^");
}
function Qr(e) {
  return To(e)
    .replace(sl, "%2B")
    .replace(Wc, "+")
    .replace(ol, "%23")
    .replace(Bc, "%26")
    .replace(Uc, "`")
    .replace(ll, "{")
    .replace(ul, "}")
    .replace(il, "^");
}
function zc(e) {
  return Qr(e).replace(Nc, "%3D");
}
function Yc(e) {
  return To(e).replace(ol, "%23").replace(jc, "%3F");
}
function Qc(e) {
  return e == null ? "" : Yc(e).replace(Dc, "%2F");
}
function ir(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function Xc(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < r.length; ++o) {
    const s = r[o].replace(sl, " "),
      i = s.indexOf("="),
      l = ir(i < 0 ? s : s.slice(0, i)),
      u = i < 0 ? null : ir(s.slice(i + 1));
    if (l in t) {
      let a = t[l];
      Array.isArray(a) || (a = t[l] = [a]), a.push(u);
    } else t[l] = u;
  }
  return t;
}
function Ms(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = zc(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Array.isArray(r) ? r.map((s) => s && Qr(s)) : [r && Qr(r)]).forEach(
      (s) => {
        s !== void 0 &&
          ((t += (t.length ? "&" : "") + n), s != null && (t += "=" + s));
      }
    );
  }
  return t;
}
function Jc(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = Array.isArray(r)
        ? r.map((o) => (o == null ? null : "" + o))
        : r == null
        ? r
        : "" + r);
  }
  return t;
}
function dn() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const o = e.indexOf(r);
        o > -1 && e.splice(o, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function _t(e, t, n, r, o) {
  const s = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () =>
    new Promise((i, l) => {
      const u = (d) => {
          d === !1
            ? l(Zt(4, { from: n, to: t }))
            : d instanceof Error
            ? l(d)
            : Ec(d)
            ? l(Zt(2, { from: t, to: d }))
            : (s &&
                r.enterCallbacks[o] === s &&
                typeof d == "function" &&
                s.push(d),
              i());
        },
        a = e.call(r && r.instances[o], t, n, u);
      let c = Promise.resolve(a);
      e.length < 3 && (c = c.then(u)), c.catch((d) => l(d));
    });
}
function Tr(e, t, n, r) {
  const o = [];
  for (const s of e)
    for (const i in s.components) {
      let l = s.components[i];
      if (!(t !== "beforeRouteEnter" && !s.instances[i]))
        if (Zc(l)) {
          const a = (l.__vccOpts || l)[t];
          a && o.push(_t(a, n, r, s, i));
        } else {
          let u = l();
          o.push(() =>
            u.then((a) => {
              if (!a)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${s.path}"`)
                );
              const c = oc(a) ? a.default : a;
              s.components[i] = c;
              const p = (c.__vccOpts || c)[t];
              return p && _t(p, n, r, s, i)();
            })
          );
        }
    }
  return o;
}
function Zc(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function Is(e) {
  const t = xt(Ro),
    n = xt(Zi),
    r = ze(() => t.resolve(pe(e.to))),
    o = ze(() => {
      const { matched: u } = r.value,
        { length: a } = u,
        c = u[a - 1],
        d = n.matched;
      if (!c || !d.length) return -1;
      const p = d.findIndex(Jt.bind(null, c));
      if (p > -1) return p;
      const m = $s(u[a - 2]);
      return a > 1 && $s(c) === m && d[d.length - 1].path !== m
        ? d.findIndex(Jt.bind(null, u[a - 2]))
        : p;
    }),
    s = ze(() => o.value > -1 && nf(n.params, r.value.params)),
    i = ze(
      () =>
        o.value > -1 &&
        o.value === n.matched.length - 1 &&
        Gi(n.params, r.value.params)
    );
  function l(u = {}) {
    return tf(u)
      ? t[pe(e.replace) ? "replace" : "push"](pe(e.to)).catch(_n)
      : Promise.resolve();
  }
  return {
    route: r,
    href: ze(() => r.value.href),
    isActive: s,
    isExactActive: i,
    navigate: l,
  };
}
const Gc = Xe({
    name: "RouterLink",
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "docs" },
    },
    useLink: Is,
    setup(e, { slots: t }) {
      const n = $n(Is(e)),
        { options: r } = xt(Ro),
        o = ze(() => ({
          [ks(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [ks(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const s = t.default && t.default(n);
        return e.custom
          ? s
          : Oo(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value,
              },
              s
            );
      };
    },
  }),
  ef = Gc;
function tf(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function nf(e, t) {
  for (const n in t) {
    const r = t[n],
      o = e[n];
    if (typeof r == "string") {
      if (r !== o) return !1;
    } else if (
      !Array.isArray(o) ||
      o.length !== r.length ||
      r.some((s, i) => s !== o[i])
    )
      return !1;
  }
  return !0;
}
function $s(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const ks = (e, t, n) => (e != null ? e : t != null ? t : n),
  rf = Xe({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    setup(e, { attrs: t, slots: n }) {
      const r = xt(zr),
        o = ze(() => e.route || r.value),
        s = xt(Es, 0),
        i = ze(() => o.value.matched[s]);
      Yn(Es, s + 1), Yn(rc, i), Yn(zr, o);
      const l = $e();
      return (
        tt(
          () => [l.value, i.value, e.name],
          ([u, a, c], [d, p, m]) => {
            a &&
              ((a.instances[c] = u),
              p &&
                p !== a &&
                u &&
                u === d &&
                (a.leaveGuards.size || (a.leaveGuards = p.leaveGuards),
                a.updateGuards.size || (a.updateGuards = p.updateGuards))),
              u &&
                a &&
                (!p || !Jt(a, p) || !d) &&
                (a.enterCallbacks[c] || []).forEach((v) => v(u));
          },
          { flush: "post" }
        ),
        () => {
          const u = o.value,
            a = i.value,
            c = a && a.components[e.name],
            d = e.name;
          if (!c) return Ls(n.default, { Component: c, route: u });
          const p = a.props[e.name],
            m = p
              ? p === !0
                ? u.params
                : typeof p == "function"
                ? p(u)
                : p
              : null,
            A = Oo(
              c,
              le({}, m, t, {
                onVnodeUnmounted: (b) => {
                  b.component.isUnmounted && (a.instances[d] = null);
                },
                ref: l,
              })
            );
          return Ls(n.default, { Component: A, route: u }) || A;
        }
      );
    },
  });
function Ls(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const al = rf;
function of(e) {
  const t = Ic(e.routes, e),
    n = e.parseQuery || Xc,
    r = e.stringifyQuery || Ms,
    o = e.history,
    s = dn(),
    i = dn(),
    l = dn(),
    u = fu(gt);
  let a = gt;
  Wt &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const c = Pr.bind(null, (y) => "" + y),
    d = Pr.bind(null, Qc),
    p = Pr.bind(null, ir);
  function m(y, D) {
    let S, j;
    return (
      tl(y) ? ((S = t.getRecordMatcher(y)), (j = D)) : (j = y), t.addRoute(j, S)
    );
  }
  function v(y) {
    const D = t.getRecordMatcher(y);
    D && t.removeRoute(D);
  }
  function A() {
    return t.getRoutes().map((y) => y.record);
  }
  function b(y) {
    return !!t.getRecordMatcher(y);
  }
  function C(y, D) {
    if (((D = le({}, D || u.value)), typeof y == "string")) {
      const q = Rr(n, y, D.path),
        f = t.resolve({ path: q.path }, D),
        h = o.createHref(q.fullPath);
      return le(q, f, {
        params: p(f.params),
        hash: ir(q.hash),
        redirectedFrom: void 0,
        href: h,
      });
    }
    let S;
    if ("path" in y) S = le({}, y, { path: Rr(n, y.path, D.path).path });
    else {
      const q = le({}, y.params);
      for (const f in q) q[f] == null && delete q[f];
      (S = le({}, y, { params: d(y.params) })), (D.params = d(D.params));
    }
    const j = t.resolve(S, D),
      oe = y.hash || "";
    j.params = c(p(j.params));
    const se = lc(r, le({}, y, { hash: qc(oe), path: j.path })),
      Y = o.createHref(se);
    return le(
      { fullPath: se, hash: oe, query: r === Ms ? Jc(y.query) : y.query || {} },
      j,
      { redirectedFrom: void 0, href: Y }
    );
  }
  function I(y) {
    return typeof y == "string" ? Rr(n, y, u.value.path) : le({}, y);
  }
  function T(y, D) {
    if (a !== y) return Zt(8, { from: D, to: y });
  }
  function _(y) {
    return R(y);
  }
  function $(y) {
    return _(le(I(y), { replace: !0 }));
  }
  function k(y) {
    const D = y.matched[y.matched.length - 1];
    if (D && D.redirect) {
      const { redirect: S } = D;
      let j = typeof S == "function" ? S(y) : S;
      return (
        typeof j == "string" &&
          ((j = j.includes("?") || j.includes("#") ? (j = I(j)) : { path: j }),
          (j.params = {})),
        le({ query: y.query, hash: y.hash, params: y.params }, j)
      );
    }
  }
  function R(y, D) {
    const S = (a = C(y)),
      j = u.value,
      oe = y.state,
      se = y.force,
      Y = y.replace === !0,
      q = k(S);
    if (q) return R(le(I(q), { state: oe, force: se, replace: Y }), D || S);
    const f = S;
    f.redirectedFrom = D;
    let h;
    return (
      !se &&
        uc(r, j, S) &&
        ((h = Zt(16, { to: f, from: j })), Me(j, j, !0, !1)),
      (h ? Promise.resolve(h) : H(f, j))
        .catch((g) => (vt(g) ? (vt(g, 2) ? g : xe(g)) : te(g, f, j)))
        .then((g) => {
          if (g) {
            if (vt(g, 2))
              return R(
                le(I(g.to), { state: oe, force: se, replace: Y }),
                D || f
              );
          } else g = J(f, j, !0, Y, oe);
          return X(f, j, g), g;
        })
    );
  }
  function B(y, D) {
    const S = T(y, D);
    return S ? Promise.reject(S) : Promise.resolve();
  }
  function H(y, D) {
    let S;
    const [j, oe, se] = sf(y, D);
    S = Tr(j.reverse(), "beforeRouteLeave", y, D);
    for (const q of j)
      q.leaveGuards.forEach((f) => {
        S.push(_t(f, y, D));
      });
    const Y = B.bind(null, y, D);
    return (
      S.push(Y),
      Vt(S)
        .then(() => {
          S = [];
          for (const q of s.list()) S.push(_t(q, y, D));
          return S.push(Y), Vt(S);
        })
        .then(() => {
          S = Tr(oe, "beforeRouteUpdate", y, D);
          for (const q of oe)
            q.updateGuards.forEach((f) => {
              S.push(_t(f, y, D));
            });
          return S.push(Y), Vt(S);
        })
        .then(() => {
          S = [];
          for (const q of y.matched)
            if (q.beforeEnter && !D.matched.includes(q))
              if (Array.isArray(q.beforeEnter))
                for (const f of q.beforeEnter) S.push(_t(f, y, D));
              else S.push(_t(q.beforeEnter, y, D));
          return S.push(Y), Vt(S);
        })
        .then(
          () => (
            y.matched.forEach((q) => (q.enterCallbacks = {})),
            (S = Tr(se, "beforeRouteEnter", y, D)),
            S.push(Y),
            Vt(S)
          )
        )
        .then(() => {
          S = [];
          for (const q of i.list()) S.push(_t(q, y, D));
          return S.push(Y), Vt(S);
        })
        .catch((q) => (vt(q, 8) ? q : Promise.reject(q)))
    );
  }
  function X(y, D, S) {
    for (const j of l.list()) j(y, D, S);
  }
  function J(y, D, S, j, oe) {
    const se = T(y, D);
    if (se) return se;
    const Y = D === gt,
      q = Wt ? history.state : {};
    S &&
      (j || Y
        ? o.replace(y.fullPath, le({ scroll: Y && q && q.scroll }, oe))
        : o.push(y.fullPath, oe)),
      (u.value = y),
      Me(y, D, S, Y),
      xe();
  }
  let F;
  function z() {
    F = o.listen((y, D, S) => {
      const j = C(y),
        oe = k(j);
      if (oe) {
        R(le(oe, { replace: !0 }), j).catch(_n);
        return;
      }
      a = j;
      const se = u.value;
      Wt && gc(Cs(se.fullPath, S.delta), yr()),
        H(j, se)
          .catch((Y) =>
            vt(Y, 12)
              ? Y
              : vt(Y, 2)
              ? (R(Y.to, j)
                  .then((q) => {
                    vt(q, 20) && !S.delta && S.type === Tn.pop && o.go(-1, !1);
                  })
                  .catch(_n),
                Promise.reject())
              : (S.delta && o.go(-S.delta, !1), te(Y, j, se))
          )
          .then((Y) => {
            (Y = Y || J(j, se, !1)),
              Y &&
                (S.delta
                  ? o.go(-S.delta, !1)
                  : S.type === Tn.pop && vt(Y, 20) && o.go(-1, !1)),
              X(j, se, Y);
          })
          .catch(_n);
    });
  }
  let ye = dn(),
    Oe = dn(),
    re;
  function te(y, D, S) {
    xe(y);
    const j = Oe.list();
    return (
      j.length ? j.forEach((oe) => oe(y, D, S)) : console.error(y),
      Promise.reject(y)
    );
  }
  function Z() {
    return re && u.value !== gt
      ? Promise.resolve()
      : new Promise((y, D) => {
          ye.add([y, D]);
        });
  }
  function xe(y) {
    return (
      re ||
        ((re = !y),
        z(),
        ye.list().forEach(([D, S]) => (y ? S(y) : D())),
        ye.reset()),
      y
    );
  }
  function Me(y, D, S, j) {
    const { scrollBehavior: oe } = e;
    if (!Wt || !oe) return Promise.resolve();
    const se =
      (!S && vc(Cs(y.fullPath, 0))) ||
      ((j || !S) && history.state && history.state.scroll) ||
      null;
    return bi()
      .then(() => oe(y, D, se))
      .then((Y) => Y && mc(Y))
      .catch((Y) => te(Y, y, D));
  }
  const ve = (y) => o.go(y);
  let he;
  const Ae = new Set();
  return {
    currentRoute: u,
    addRoute: m,
    removeRoute: v,
    hasRoute: b,
    getRoutes: A,
    resolve: C,
    options: e,
    push: _,
    replace: $,
    go: ve,
    back: () => ve(-1),
    forward: () => ve(1),
    beforeEach: s.add,
    beforeResolve: i.add,
    afterEach: l.add,
    onError: Oe.add,
    isReady: Z,
    install(y) {
      const D = this;
      y.component("RouterLink", ef),
        y.component("RouterView", al),
        (y.config.globalProperties.$router = D),
        Object.defineProperty(y.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => pe(u),
        }),
        Wt &&
          !he &&
          u.value === gt &&
          ((he = !0), _(o.location).catch((oe) => {}));
      const S = {};
      for (const oe in gt) S[oe] = ze(() => u.value[oe]);
      y.provide(Ro, D), y.provide(Zi, $n(S)), y.provide(zr, u);
      const j = y.unmount;
      Ae.add(y),
        (y.unmount = function () {
          Ae.delete(y),
            Ae.size < 1 &&
              ((a = gt), F && F(), (u.value = gt), (he = !1), (re = !1)),
            j();
        });
    },
  };
}
function Vt(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function sf(e, t) {
  const n = [],
    r = [],
    o = [],
    s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const l = t.matched[i];
    l && (e.matched.find((a) => Jt(a, l)) ? r.push(l) : n.push(l));
    const u = e.matched[i];
    u && (t.matched.find((a) => Jt(a, u)) || o.push(u));
  }
  return [n, r, o];
}
const lf = me(
    "header",
    null,
    [
      me("img", {
        alt: "Vue logo",
        class: "logo",
        src: nc,
        width: "125",
        height: "125",
      }),
    ],
    -1
  ),
  uf = { class: "container" },
  af = Xe({
    setup(e) {
      return (t, n) => (
        ge(), Re(Te, null, [lf, me("main", uf, [fe(pe(al))])], 64)
      );
    },
  });
var cf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAICAYAAAArzdW1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAdElEQVQYlYXPsQkCQRAF0HfHpmYXq6mRlqCBhWhFcpjbgRagYg82sGhsD5rMwnIc+NP/GOY3h/4o0uBrJO0/UNAMZ3SDrsMF04QTNphji0+AG5aYtNghY4UrFhXI2Ce84tIj4BMpwBrv8niBeQjqdTW81wB+nR4ZODCUYrsAAAAASUVORK5CYII=",
  Fe = "top",
  Ue = "bottom",
  Ke = "right",
  Be = "left",
  kn = [Fe, Ue, Ke, Be],
  Fs = kn.reduce(function (e, t) {
    return e.concat([t + "-start", t + "-end"]);
  }, []),
  cl = [].concat(kn, ["auto"]).reduce(function (e, t) {
    return e.concat([t, t + "-start", t + "-end"]);
  }, []),
  ff = [
    "beforeRead",
    "read",
    "afterRead",
    "beforeMain",
    "main",
    "afterMain",
    "beforeWrite",
    "write",
    "afterWrite",
  ];
function ot(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Je(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Sn(e) {
  return e instanceof Je(e).Element || e instanceof Element;
}
function He(e) {
  return e instanceof Je(e).HTMLElement || e instanceof HTMLElement;
}
function fl(e) {
  return (
    typeof ShadowRoot != "undefined" &&
    (e instanceof Je(e).ShadowRoot || e instanceof ShadowRoot)
  );
}
var df = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: function (e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function (n) {
      var r = t.styles[n] || {},
        o = t.attributes[n] || {},
        s = t.elements[n];
      He(s) &&
        ot(s) &&
        (Object.assign(s.style, r),
        Object.keys(o).forEach(function (i) {
          var l = o[i];
          l === !1
            ? s.removeAttribute(i)
            : s.setAttribute(i, l === !0 ? "" : l);
        }));
    });
  },
  effect: function (e) {
    var t = e.state,
      n = {
        popper: {
          position: t.options.strategy,
          left: "0",
          top: "0",
          margin: "0",
        },
        arrow: { position: "absolute" },
        reference: {},
      };
    return (
      Object.assign(t.elements.popper.style, n.popper),
      (t.styles = n),
      t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
      function () {
        Object.keys(t.elements).forEach(function (r) {
          var o = t.elements[r],
            s = t.attributes[r] || {},
            i = Object.keys(
              t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]
            ).reduce(function (l, u) {
              return (l[u] = ""), l;
            }, {});
          He(o) &&
            ot(o) &&
            (Object.assign(o.style, i),
            Object.keys(s).forEach(function (l) {
              o.removeAttribute(l);
            }));
        });
      }
    );
  },
  requires: ["computeStyles"],
};
function rt(e) {
  return e.split("-")[0];
}
function Gt(e, t) {
  var n = e.getBoundingClientRect();
  return {
    width: n.width / 1,
    height: n.height / 1,
    top: n.top / 1,
    right: n.right / 1,
    bottom: n.bottom / 1,
    left: n.left / 1,
    x: n.left / 1,
    y: n.top / 1,
  };
}
function So(e) {
  var t = Gt(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function dl(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && fl(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function ct(e) {
  return Je(e).getComputedStyle(e);
}
function pf(e) {
  return ["table", "td", "th"].indexOf(ot(e)) >= 0;
}
function At(e) {
  return ((Sn(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function br(e) {
  return ot(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (fl(e) ? e.host : null) || At(e);
}
function Bs(e) {
  return He(e) && ct(e).position !== "fixed" ? e.offsetParent : null;
}
function Ln(e) {
  for (var t = Je(e), n = Bs(e); n && pf(n) && ct(n).position === "static"; )
    n = Bs(n);
  return n &&
    (ot(n) === "html" || (ot(n) === "body" && ct(n).position === "static"))
    ? t
    : n ||
        (function (r) {
          var o = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
          if (
            navigator.userAgent.indexOf("Trident") !== -1 &&
            He(r) &&
            ct(r).position === "fixed"
          )
            return null;
          for (var s = br(r); He(s) && ["html", "body"].indexOf(ot(s)) < 0; ) {
            var i = ct(s);
            if (
              i.transform !== "none" ||
              i.perspective !== "none" ||
              i.contain === "paint" ||
              ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
              (o && i.willChange === "filter") ||
              (o && i.filter && i.filter !== "none")
            )
              return s;
            s = s.parentNode;
          }
          return null;
        })(e) ||
        t;
}
function Mo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
var Ct = Math.max,
  Mn = Math.min,
  Kn = Math.round;
function Xn(e, t, n) {
  return Ct(e, Mn(t, n));
}
function pl(e) {
  return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
}
function hl(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var hf = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: function (e) {
    var t,
      n = e.state,
      r = e.name,
      o = e.options,
      s = n.elements.arrow,
      i = n.modifiersData.popperOffsets,
      l = rt(n.placement),
      u = Mo(l),
      a = [Be, Ke].indexOf(l) >= 0 ? "height" : "width";
    if (s && i) {
      var c = (function (B, H) {
          return pl(
            typeof (B =
              typeof B == "function"
                ? B(Object.assign({}, H.rects, { placement: H.placement }))
                : B) != "number"
              ? B
              : hl(B, kn)
          );
        })(o.padding, n),
        d = So(s),
        p = u === "y" ? Fe : Be,
        m = u === "y" ? Ue : Ke,
        v =
          n.rects.reference[a] +
          n.rects.reference[u] -
          i[u] -
          n.rects.popper[a],
        A = i[u] - n.rects.reference[u],
        b = Ln(s),
        C = b ? (u === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
        I = v / 2 - A / 2,
        T = c[p],
        _ = C - d[a] - c[m],
        $ = C / 2 - d[a] / 2 + I,
        k = Xn(T, $, _),
        R = u;
      n.modifiersData[r] = (((t = {})[R] = k), (t.centerOffset = k - $), t);
    }
  },
  effect: function (e) {
    var t = e.state,
      n = e.options.element,
      r = n === void 0 ? "[data-popper-arrow]" : n;
    r != null &&
      (typeof r != "string" || (r = t.elements.popper.querySelector(r))) &&
      dl(t.elements.popper, r) &&
      (t.elements.arrow = r);
  },
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function en(e) {
  return e.split("-")[1];
}
var mf = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Ds(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    o = e.placement,
    s = e.variation,
    i = e.offsets,
    l = e.position,
    u = e.gpuAcceleration,
    a = e.adaptive,
    c = e.roundOffsets,
    d =
      c === !0
        ? (function (X) {
            var J = X.x,
              F = X.y,
              z = window.devicePixelRatio || 1;
            return { x: Kn(Kn(J * z) / z) || 0, y: Kn(Kn(F * z) / z) || 0 };
          })(i)
        : typeof c == "function"
        ? c(i)
        : i,
    p = d.x,
    m = p === void 0 ? 0 : p,
    v = d.y,
    A = v === void 0 ? 0 : v,
    b = i.hasOwnProperty("x"),
    C = i.hasOwnProperty("y"),
    I = Be,
    T = Fe,
    _ = window;
  if (a) {
    var $ = Ln(n),
      k = "clientHeight",
      R = "clientWidth";
    $ === Je(n) &&
      ct(($ = At(n))).position !== "static" &&
      l === "absolute" &&
      ((k = "scrollHeight"), (R = "scrollWidth")),
      ($ = $),
      (o !== Fe && ((o !== Be && o !== Ke) || s !== "end")) ||
        ((T = Ue), (A -= $[k] - r.height), (A *= u ? 1 : -1)),
      (o !== Be && ((o !== Fe && o !== Ue) || s !== "end")) ||
        ((I = Ke), (m -= $[R] - r.width), (m *= u ? 1 : -1));
  }
  var B,
    H = Object.assign({ position: l }, a && mf);
  return u
    ? Object.assign(
        {},
        H,
        (((B = {})[T] = C ? "0" : ""),
        (B[I] = b ? "0" : ""),
        (B.transform =
          (_.devicePixelRatio || 1) <= 1
            ? "translate(" + m + "px, " + A + "px)"
            : "translate3d(" + m + "px, " + A + "px, 0)"),
        B)
      )
    : Object.assign(
        {},
        H,
        (((t = {})[T] = C ? A + "px" : ""),
        (t[I] = b ? m + "px" : ""),
        (t.transform = ""),
        t)
      );
}
var Wn = { passive: !0 },
  gf = { left: "right", right: "left", bottom: "top", top: "bottom" };
function qn(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return gf[t];
  });
}
var vf = { start: "end", end: "start" };
function Ns(e) {
  return e.replace(/start|end/g, function (t) {
    return vf[t];
  });
}
function Io(e) {
  var t = Je(e);
  return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function Xr(e) {
  return Gt(At(e)).left + Io(e).scrollLeft;
}
function $o(e) {
  var t = ct(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function ml(e) {
  return ["html", "body", "#document"].indexOf(ot(e)) >= 0
    ? e.ownerDocument.body
    : He(e) && $o(e)
    ? e
    : ml(br(e));
}
function En(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = ml(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    s = Je(r),
    i = o ? [s].concat(s.visualViewport || [], $o(r) ? r : []) : r,
    l = t.concat(i);
  return o ? l : l.concat(En(br(i)));
}
function Jr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function js(e, t) {
  return t === "viewport"
    ? Jr(
        (function (n) {
          var r = Je(n),
            o = At(n),
            s = r.visualViewport,
            i = o.clientWidth,
            l = o.clientHeight,
            u = 0,
            a = 0;
          return (
            s &&
              ((i = s.width),
              (l = s.height),
              /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                ((u = s.offsetLeft), (a = s.offsetTop))),
            { width: i, height: l, x: u + Xr(n), y: a }
          );
        })(e)
      )
    : He(t)
    ? (function (n) {
        var r = Gt(n);
        return (
          (r.top = r.top + n.clientTop),
          (r.left = r.left + n.clientLeft),
          (r.bottom = r.top + n.clientHeight),
          (r.right = r.left + n.clientWidth),
          (r.width = n.clientWidth),
          (r.height = n.clientHeight),
          (r.x = r.left),
          (r.y = r.top),
          r
        );
      })(t)
    : Jr(
        (function (n) {
          var r,
            o = At(n),
            s = Io(n),
            i = (r = n.ownerDocument) == null ? void 0 : r.body,
            l = Ct(
              o.scrollWidth,
              o.clientWidth,
              i ? i.scrollWidth : 0,
              i ? i.clientWidth : 0
            ),
            u = Ct(
              o.scrollHeight,
              o.clientHeight,
              i ? i.scrollHeight : 0,
              i ? i.clientHeight : 0
            ),
            a = -s.scrollLeft + Xr(n),
            c = -s.scrollTop;
          return (
            ct(i || o).direction === "rtl" &&
              (a += Ct(o.clientWidth, i ? i.clientWidth : 0) - l),
            { width: l, height: u, x: a, y: c }
          );
        })(At(e))
      );
}
function yf(e, t, n) {
  var r =
      t === "clippingParents"
        ? (function (l) {
            var u = En(br(l)),
              a =
                ["absolute", "fixed"].indexOf(ct(l).position) >= 0 && He(l)
                  ? Ln(l)
                  : l;
            return Sn(a)
              ? u.filter(function (c) {
                  return Sn(c) && dl(c, a) && ot(c) !== "body";
                })
              : [];
          })(e)
        : [].concat(t),
    o = [].concat(r, [n]),
    s = o[0],
    i = o.reduce(function (l, u) {
      var a = js(e, u);
      return (
        (l.top = Ct(a.top, l.top)),
        (l.right = Mn(a.right, l.right)),
        (l.bottom = Mn(a.bottom, l.bottom)),
        (l.left = Ct(a.left, l.left)),
        l
      );
    }, js(e, s));
  return (
    (i.width = i.right - i.left),
    (i.height = i.bottom - i.top),
    (i.x = i.left),
    (i.y = i.top),
    i
  );
}
function gl(e) {
  var t,
    n = e.reference,
    r = e.element,
    o = e.placement,
    s = o ? rt(o) : null,
    i = o ? en(o) : null,
    l = n.x + n.width / 2 - r.width / 2,
    u = n.y + n.height / 2 - r.height / 2;
  switch (s) {
    case Fe:
      t = { x: l, y: n.y - r.height };
      break;
    case Ue:
      t = { x: l, y: n.y + n.height };
      break;
    case Ke:
      t = { x: n.x + n.width, y: u };
      break;
    case Be:
      t = { x: n.x - r.width, y: u };
      break;
    default:
      t = { x: n.x, y: n.y };
  }
  var a = s ? Mo(s) : null;
  if (a != null) {
    var c = a === "y" ? "height" : "width";
    switch (i) {
      case "start":
        t[a] = t[a] - (n[c] / 2 - r[c] / 2);
        break;
      case "end":
        t[a] = t[a] + (n[c] / 2 - r[c] / 2);
    }
  }
  return t;
}
function In(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = r === void 0 ? e.placement : r,
    s = n.boundary,
    i = s === void 0 ? "clippingParents" : s,
    l = n.rootBoundary,
    u = l === void 0 ? "viewport" : l,
    a = n.elementContext,
    c = a === void 0 ? "popper" : a,
    d = n.altBoundary,
    p = d !== void 0 && d,
    m = n.padding,
    v = m === void 0 ? 0 : m,
    A = pl(typeof v != "number" ? v : hl(v, kn)),
    b = c === "popper" ? "reference" : "popper",
    C = e.rects.popper,
    I = e.elements[p ? b : c],
    T = yf(Sn(I) ? I : I.contextElement || At(e.elements.popper), i, u),
    _ = Gt(e.elements.reference),
    $ = gl({ reference: _, element: C, strategy: "absolute", placement: o }),
    k = Jr(Object.assign({}, C, $)),
    R = c === "popper" ? k : _,
    B = {
      top: T.top - R.top + A.top,
      bottom: R.bottom - T.bottom + A.bottom,
      left: T.left - R.left + A.left,
      right: R.right - T.right + A.right,
    },
    H = e.modifiersData.offset;
  if (c === "popper" && H) {
    var X = H[o];
    Object.keys(B).forEach(function (J) {
      var F = [Ke, Ue].indexOf(J) >= 0 ? 1 : -1,
        z = [Fe, Ue].indexOf(J) >= 0 ? "y" : "x";
      B[J] += X[z] * F;
    });
  }
  return B;
}
function bf(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = n.boundary,
    s = n.rootBoundary,
    i = n.padding,
    l = n.flipVariations,
    u = n.allowedAutoPlacements,
    a = u === void 0 ? cl : u,
    c = en(r),
    d = c
      ? l
        ? Fs
        : Fs.filter(function (v) {
            return en(v) === c;
          })
      : kn,
    p = d.filter(function (v) {
      return a.indexOf(v) >= 0;
    });
  p.length === 0 && (p = d);
  var m = p.reduce(function (v, A) {
    return (
      (v[A] = In(e, { placement: A, boundary: o, rootBoundary: s, padding: i })[
        rt(A)
      ]),
      v
    );
  }, {});
  return Object.keys(m).sort(function (v, A) {
    return m[v] - m[A];
  });
}
var _f = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: function (e) {
    var t = e.state,
      n = e.options,
      r = e.name;
    if (!t.modifiersData[r]._skip) {
      for (
        var o = n.mainAxis,
          s = o === void 0 || o,
          i = n.altAxis,
          l = i === void 0 || i,
          u = n.fallbackPlacements,
          a = n.padding,
          c = n.boundary,
          d = n.rootBoundary,
          p = n.altBoundary,
          m = n.flipVariations,
          v = m === void 0 || m,
          A = n.allowedAutoPlacements,
          b = t.options.placement,
          C = rt(b),
          I =
            u ||
            (C === b || !v
              ? [qn(b)]
              : (function (ve) {
                  if (rt(ve) === "auto") return [];
                  var he = qn(ve);
                  return [Ns(ve), he, Ns(he)];
                })(b)),
          T = [b].concat(I).reduce(function (ve, he) {
            return ve.concat(
              rt(he) === "auto"
                ? bf(t, {
                    placement: he,
                    boundary: c,
                    rootBoundary: d,
                    padding: a,
                    flipVariations: v,
                    allowedAutoPlacements: A,
                  })
                : he
            );
          }, []),
          _ = t.rects.reference,
          $ = t.rects.popper,
          k = new Map(),
          R = !0,
          B = T[0],
          H = 0;
        H < T.length;
        H++
      ) {
        var X = T[H],
          J = rt(X),
          F = en(X) === "start",
          z = [Fe, Ue].indexOf(J) >= 0,
          ye = z ? "width" : "height",
          Oe = In(t, {
            placement: X,
            boundary: c,
            rootBoundary: d,
            altBoundary: p,
            padding: a,
          }),
          re = z ? (F ? Ke : Be) : F ? Ue : Fe;
        _[ye] > $[ye] && (re = qn(re));
        var te = qn(re),
          Z = [];
        if (
          (s && Z.push(Oe[J] <= 0),
          l && Z.push(Oe[re] <= 0, Oe[te] <= 0),
          Z.every(function (ve) {
            return ve;
          }))
        ) {
          (B = X), (R = !1);
          break;
        }
        k.set(X, Z);
      }
      if (R)
        for (
          var xe = function (ve) {
              var he = T.find(function (Ae) {
                var it = k.get(Ae);
                if (it)
                  return it.slice(0, ve).every(function (y) {
                    return y;
                  });
              });
              if (he) return (B = he), "break";
            },
            Me = v ? 3 : 1;
          Me > 0 && xe(Me) !== "break";
          Me--
        );
      t.placement !== B &&
        ((t.modifiersData[r]._skip = !0), (t.placement = B), (t.reset = !0));
    }
  },
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Hs(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function Vs(e) {
  return [Fe, Ke, Ue, Be].some(function (t) {
    return e[t] >= 0;
  });
}
var wf = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function (e) {
      var t = e.state,
        n = e.options,
        r = e.name,
        o = n.offset,
        s = o === void 0 ? [0, 0] : o,
        i = cl.reduce(function (c, d) {
          return (
            (c[d] = (function (p, m, v) {
              var A = rt(p),
                b = [Be, Fe].indexOf(A) >= 0 ? -1 : 1,
                C =
                  typeof v == "function"
                    ? v(Object.assign({}, m, { placement: p }))
                    : v,
                I = C[0],
                T = C[1];
              return (
                (I = I || 0),
                (T = (T || 0) * b),
                [Be, Ke].indexOf(A) >= 0 ? { x: T, y: I } : { x: I, y: T }
              );
            })(d, t.rects, s)),
            c
          );
        }, {}),
        l = i[t.placement],
        u = l.x,
        a = l.y;
      t.modifiersData.popperOffsets != null &&
        ((t.modifiersData.popperOffsets.x += u),
        (t.modifiersData.popperOffsets.y += a)),
        (t.modifiersData[r] = i);
    },
  },
  Ef = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t = e.state,
        n = e.options,
        r = e.name,
        o = n.mainAxis,
        s = o === void 0 || o,
        i = n.altAxis,
        l = i !== void 0 && i,
        u = n.boundary,
        a = n.rootBoundary,
        c = n.altBoundary,
        d = n.padding,
        p = n.tether,
        m = p === void 0 || p,
        v = n.tetherOffset,
        A = v === void 0 ? 0 : v,
        b = In(t, { boundary: u, rootBoundary: a, padding: d, altBoundary: c }),
        C = rt(t.placement),
        I = en(t.placement),
        T = !I,
        _ = Mo(C),
        $ = _ === "x" ? "y" : "x",
        k = t.modifiersData.popperOffsets,
        R = t.rects.reference,
        B = t.rects.popper,
        H =
          typeof A == "function"
            ? A(Object.assign({}, t.rects, { placement: t.placement }))
            : A,
        X = { x: 0, y: 0 };
      if (k) {
        if (s || l) {
          var J = _ === "y" ? Fe : Be,
            F = _ === "y" ? Ue : Ke,
            z = _ === "y" ? "height" : "width",
            ye = k[_],
            Oe = k[_] + b[J],
            re = k[_] - b[F],
            te = m ? -B[z] / 2 : 0,
            Z = I === "start" ? R[z] : B[z],
            xe = I === "start" ? -B[z] : -R[z],
            Me = t.elements.arrow,
            ve = m && Me ? So(Me) : { width: 0, height: 0 },
            he = t.modifiersData["arrow#persistent"]
              ? t.modifiersData["arrow#persistent"].padding
              : { top: 0, right: 0, bottom: 0, left: 0 },
            Ae = he[J],
            it = he[F],
            y = Xn(0, R[z], ve[z]),
            D = T ? R[z] / 2 - te - y - Ae - H : Z - y - Ae - H,
            S = T ? -R[z] / 2 + te + y + it + H : xe + y + it + H,
            j = t.elements.arrow && Ln(t.elements.arrow),
            oe = j ? (_ === "y" ? j.clientTop || 0 : j.clientLeft || 0) : 0,
            se = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement][_]
              : 0,
            Y = k[_] + D - se - oe,
            q = k[_] + S - se;
          if (s) {
            var f = Xn(m ? Mn(Oe, Y) : Oe, ye, m ? Ct(re, q) : re);
            (k[_] = f), (X[_] = f - ye);
          }
          if (l) {
            var h = _ === "x" ? Fe : Be,
              g = _ === "x" ? Ue : Ke,
              w = k[$],
              E = w + b[h],
              O = w - b[g],
              L = Xn(m ? Mn(E, Y) : E, w, m ? Ct(O, q) : O);
            (k[$] = L), (X[$] = L - w);
          }
        }
        t.modifiersData[r] = X;
      }
    },
    requiresIfExists: ["offset"],
  };
function xf(e, t, n) {
  n === void 0 && (n = !1);
  var r = He(t);
  He(t) &&
    (function (c) {
      var d = c.getBoundingClientRect();
      d.width / c.offsetWidth, d.height / c.offsetHeight;
    })(t);
  var o,
    s,
    i = At(t),
    l = Gt(e),
    u = { scrollLeft: 0, scrollTop: 0 },
    a = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((ot(t) !== "body" || $o(i)) &&
        (u =
          (o = t) !== Je(o) && He(o)
            ? { scrollLeft: (s = o).scrollLeft, scrollTop: s.scrollTop }
            : Io(o)),
      He(t)
        ? (((a = Gt(t)).x += t.clientLeft), (a.y += t.clientTop))
        : i && (a.x = Xr(i))),
    {
      x: l.left + u.scrollLeft - a.x,
      y: l.top + u.scrollTop - a.y,
      width: l.width,
      height: l.height,
    }
  );
}
function Af(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  function o(s) {
    n.add(s.name),
      []
        .concat(s.requires || [], s.requiresIfExists || [])
        .forEach(function (i) {
          if (!n.has(i)) {
            var l = t.get(i);
            l && o(l);
          }
        }),
      r.push(s);
  }
  return (
    e.forEach(function (s) {
      t.set(s.name, s);
    }),
    e.forEach(function (s) {
      n.has(s.name) || o(s);
    }),
    r
  );
}
var Us = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Ks() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Cf(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    o = t.defaultOptions,
    s = o === void 0 ? Us : o;
  return function (i, l, u) {
    u === void 0 && (u = s);
    var a,
      c,
      d = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Us, s),
        modifiersData: {},
        elements: { reference: i, popper: l },
        attributes: {},
        styles: {},
      },
      p = [],
      m = !1,
      v = {
        state: d,
        setOptions: function (b) {
          var C = typeof b == "function" ? b(d.options) : b;
          A(),
            (d.options = Object.assign({}, s, d.options, C)),
            (d.scrollParents = {
              reference: Sn(i)
                ? En(i)
                : i.contextElement
                ? En(i.contextElement)
                : [],
              popper: En(l),
            });
          var I = (function (T) {
            var _ = Af(T);
            return ff.reduce(function ($, k) {
              return $.concat(
                _.filter(function (R) {
                  return R.phase === k;
                })
              );
            }, []);
          })(
            (function (T) {
              var _ = T.reduce(function ($, k) {
                var R = $[k.name];
                return (
                  ($[k.name] = R
                    ? Object.assign({}, R, k, {
                        options: Object.assign({}, R.options, k.options),
                        data: Object.assign({}, R.data, k.data),
                      })
                    : k),
                  $
                );
              }, {});
              return Object.keys(_).map(function ($) {
                return _[$];
              });
            })([].concat(r, d.options.modifiers))
          );
          return (
            (d.orderedModifiers = I.filter(function (T) {
              return T.enabled;
            })),
            d.orderedModifiers.forEach(function (T) {
              var _ = T.name,
                $ = T.options,
                k = $ === void 0 ? {} : $,
                R = T.effect;
              if (typeof R == "function") {
                var B = R({ state: d, name: _, instance: v, options: k }),
                  H = function () {};
                p.push(B || H);
              }
            }),
            v.update()
          );
        },
        forceUpdate: function () {
          if (!m) {
            var b = d.elements,
              C = b.reference,
              I = b.popper;
            if (Ks(C, I)) {
              (d.rects = {
                reference: xf(C, Ln(I), d.options.strategy === "fixed"),
                popper: So(I),
              }),
                (d.reset = !1),
                (d.placement = d.options.placement),
                d.orderedModifiers.forEach(function (H) {
                  return (d.modifiersData[H.name] = Object.assign({}, H.data));
                });
              for (var T = 0; T < d.orderedModifiers.length; T++)
                if (d.reset !== !0) {
                  var _ = d.orderedModifiers[T],
                    $ = _.fn,
                    k = _.options,
                    R = k === void 0 ? {} : k,
                    B = _.name;
                  typeof $ == "function" &&
                    (d =
                      $({ state: d, options: R, name: B, instance: v }) || d);
                } else (d.reset = !1), (T = -1);
            }
          }
        },
        update:
          ((a = function () {
            return new Promise(function (b) {
              v.forceUpdate(), b(d);
            });
          }),
          function () {
            return (
              c ||
                (c = new Promise(function (b) {
                  Promise.resolve().then(function () {
                    (c = void 0), b(a());
                  });
                })),
              c
            );
          }),
        destroy: function () {
          A(), (m = !0);
        },
      };
    if (!Ks(i, l)) return v;
    function A() {
      p.forEach(function (b) {
        return b();
      }),
        (p = []);
    }
    return (
      v.setOptions(u).then(function (b) {
        !m && u.onFirstUpdate && u.onFirstUpdate(b);
      }),
      v
    );
  };
}
var Of = Cf({
    defaultModifiers: [
      {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            n = e.instance,
            r = e.options,
            o = r.scroll,
            s = o === void 0 || o,
            i = r.resize,
            l = i === void 0 || i,
            u = Je(t.elements.popper),
            a = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            s &&
              a.forEach(function (c) {
                c.addEventListener("scroll", n.update, Wn);
              }),
            l && u.addEventListener("resize", n.update, Wn),
            function () {
              s &&
                a.forEach(function (c) {
                  c.removeEventListener("scroll", n.update, Wn);
                }),
                l && u.removeEventListener("resize", n.update, Wn);
            }
          );
        },
        data: {},
      },
      {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (e) {
          var t = e.state,
            n = e.name;
          t.modifiersData[n] = gl({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: "absolute",
            placement: t.placement,
          });
        },
        data: {},
      },
      {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = n.gpuAcceleration,
            o = r === void 0 || r,
            s = n.adaptive,
            i = s === void 0 || s,
            l = n.roundOffsets,
            u = l === void 0 || l,
            a = {
              placement: rt(t.placement),
              variation: en(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: o,
            };
          t.modifiersData.popperOffsets != null &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              Ds(
                Object.assign({}, a, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: i,
                  roundOffsets: u,
                })
              )
            )),
            t.modifiersData.arrow != null &&
              (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                Ds(
                  Object.assign({}, a, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: u,
                  })
                )
              )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-placement": t.placement,
            }));
        },
        data: {},
      },
      df,
      wf,
      _f,
      Ef,
      hf,
      {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (e) {
          var t = e.state,
            n = e.name,
            r = t.rects.reference,
            o = t.rects.popper,
            s = t.modifiersData.preventOverflow,
            i = In(t, { elementContext: "reference" }),
            l = In(t, { altBoundary: !0 }),
            u = Hs(i, r),
            a = Hs(l, o, s),
            c = Vs(u),
            d = Vs(a);
          (t.modifiersData[n] = {
            referenceClippingOffsets: u,
            popperEscapeOffsets: a,
            isReferenceHidden: c,
            hasPopperEscaped: d,
          }),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-reference-hidden": c,
              "data-popper-escaped": d,
            }));
        },
      },
    ],
  }),
  lr = function () {
    return (
      (lr =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }),
      lr.apply(this, arguments)
    );
  };
function vl(e, t) {
  for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
  return e;
}
function je(e, t, n) {
  e && t && n && e.addEventListener(t, n, !1);
}
function qe(e, t, n) {
  e && t && e.removeEventListener(t, n, !1);
}
function yl(e, t, n) {
  var r = $e(!1);
  yo(function () {
    r.value = !0;
  }),
    bo(function () {
      (r.value = !1), a();
    });
  var o = $e(!0);
  Ii(function () {
    o.value = !o.value;
  });
  var s = $e(),
    i = $e();
  tt(
    function () {
      return [r.value, o.value];
    },
    function () {
      var _, $;
      r.value &&
        (!((_ = pe(e)) === null || _ === void 0) && _.$el
          ? (s.value = pe(e).$el)
          : (s.value = pe(e)),
        !(($ = pe(t)) === null || $ === void 0) && $.$el
          ? (i.value = pe(t).$el)
          : (i.value = pe(t)));
    }
  );
  var l = $e();
  tt(
    function () {
      return [s.value, i.value];
    },
    function () {
      a(), s.value && i.value && u();
    }
  );
  var u = function () {
      var _, $, k, R;
      l.value = Of(s.value, i.value, {
        placement:
          (_ = n == null ? void 0 : n.placement) !== null && _ !== void 0
            ? _
            : "bottom",
        modifiers:
          ($ = n == null ? void 0 : n.modifiers) !== null && $ !== void 0
            ? $
            : [],
        strategy:
          (k = n == null ? void 0 : n.strategy) !== null && k !== void 0
            ? k
            : "absolute",
        onFirstUpdate:
          (R = n == null ? void 0 : n.onFirstUpdate) !== null && R !== void 0
            ? R
            : void 0,
      });
    },
    a = function () {
      var _;
      (_ = l.value) === null || _ === void 0 || _.destroy(), (l.value = void 0);
    },
    c = $e(!1),
    d = function () {
      return (c.value = !c.value);
    },
    p = function () {
      return (c.value = !0);
    },
    m = function () {
      return (c.value = !1);
    };
  tt(
    function () {
      return [
        l.value,
        pe(n == null ? void 0 : n.trigger),
        pe(n == null ? void 0 : n.forceShow),
      ];
    },
    function () {
      if (l.value)
        return pe(n == null ? void 0 : n.forceShow)
          ? ((c.value = !0), void I())
          : void C();
    }
  ),
    tt(
      function () {
        return pe(n == null ? void 0 : n.forceShow);
      },
      function () {
        pe(n == null ? void 0 : n.forceShow) ||
          (pe(n == null ? void 0 : n.trigger) !== "manual" && (c.value = !1));
      }
    );
  var v = $e(),
    A = function () {
      var _;
      pe(n == null ? void 0 : n.delayOnMouseover) === 0
        ? p()
        : (clearTimeout(v.value),
          (v.value = setTimeout(
            function () {
              p();
            },
            (_ = pe(n == null ? void 0 : n.delayOnMouseover)) !== null &&
              _ !== void 0
              ? _
              : 200
          )));
    },
    b = function () {
      var _;
      pe(n == null ? void 0 : n.delayOnMouseout) === 0
        ? m()
        : (clearTimeout(v.value),
          (v.value = setTimeout(
            function () {
              m();
            },
            (_ = pe(n == null ? void 0 : n.delayOnMouseout)) !== null &&
              _ !== void 0
              ? _
              : 200
          )));
    },
    C = function () {
      var _;
      switch (
        (I(),
        (_ = pe(n == null ? void 0 : n.trigger)) !== null && _ !== void 0
          ? _
          : "hover")
      ) {
        case "click-to-open":
          je(s.value, "click", p), je(document, "click", T);
          break;
        case "click-to-toggle":
          je(s.value, "click", d), je(document, "click", T);
          break;
        case "hover":
          je(s.value, "mouseover", A),
            je(i.value, "mouseover", A),
            je(s.value, "mouseout", b),
            je(i.value, "mouseout", b);
          break;
        case "focus":
          je(s.value, "focus", p),
            je(i.value, "focus", p),
            je(s.value, "blur", m),
            je(i.value, "blur", m);
          break;
        case "manual":
          break;
        default:
          throw TypeError();
      }
    },
    I = function () {
      qe(s.value, "click", p),
        qe(document, "click", T),
        qe(s.value, "click", d),
        qe(s.value, "mouseover", A),
        qe(i.value, "mouseover", A),
        qe(s.value, "mouseout", b),
        qe(i.value, "mouseout", b),
        qe(s.value, "focus", p),
        qe(i.value, "focus", p),
        qe(s.value, "blur", m),
        qe(i.value, "blur", m);
    },
    T = function (_) {
      var $, k;
      (($ = s.value) === null || $ === void 0
        ? void 0
        : $.contains(_.target)) ||
        ((k = i.value) === null || k === void 0
          ? void 0
          : k.contains(_.target)) ||
        m();
    };
  return (
    tt(
      function () {
        return [l.value, c.value];
      },
      function () {
        var _, $, k, R, B;
        l.value &&
          (c.value || pe(n == null ? void 0 : n.forceShow)
            ? ((_ = i.value) === null ||
                _ === void 0 ||
                _.classList.remove("vue-use-popperjs-none"),
              ($ = n == null ? void 0 : n.onShow) === null ||
                $ === void 0 ||
                $.call(n),
              (k = l.value) === null || k === void 0 || k.update())
            : ((R = i.value) === null ||
                R === void 0 ||
                R.classList.add("vue-use-popperjs-none"),
              (B = n == null ? void 0 : n.onHide) === null ||
                B === void 0 ||
                B.call(n)));
      }
    ),
    { instance: l, visible: c }
  );
}
var Zr = Xe({ props: { teleportProps: Object } });
(Zr.render = function (e, t, n, r, o, s) {
  return e.teleportProps
    ? (ge(),
      Nt(
        ua,
        { key: 0, to: e.teleportProps.to, disabled: e.teleportProps.disabled },
        [Pt(e.$slots, "default")],
        8,
        ["to", "disabled"]
      ))
    : Pt(e.$slots, "default", { key: 1 });
}),
  (Zr.__file = "src/MaybeTeleport.vue");
var Gr = Xe({
  props: { transitionProps: Object },
  emits: [
    "before-enter",
    "enter",
    "after-enter",
    "enter-cancelled",
    "before-leave",
    "leave",
    "after-leave",
    "leave-cancelled",
  ],
  setup: function (e, t) {
    var n = t.emit;
    return {
      handle: function (r) {
        return function () {
          for (var o = [], s = 0; s < arguments.length; s++)
            o[s] = arguments[s];
          return n.apply(void 0, vl([r], o));
        };
      },
    };
  },
});
(Gr.render = function (e, t, n, r, o, s) {
  return e.transitionProps
    ? (ge(),
      Nt(
        Po,
        rr({ key: 0 }, e.transitionProps, {
          onBeforeEnter: t[0] || (t[0] = (i) => e.handle("before-enter")),
          onEnter: t[1] || (t[1] = (i) => e.handle("enter")),
          onAfterEnter: t[2] || (t[2] = (i) => e.handle("after-enter")),
          onEnterCancelled: t[3] || (t[3] = (i) => e.handle("enter-cancelled")),
          onBeforeLeave: t[4] || (t[4] = (i) => e.handle("before-leave")),
          onLeave: t[5] || (t[5] = (i) => e.handle("leave")),
          onAfterLeave: t[6] || (t[6] = (i) => e.handle("after-leave")),
          onLeaveCancelled: t[7] || (t[7] = (i) => e.handle("leave-cancelled")),
        }),
        { default: at(() => [Pt(e.$slots, "default")]), _: 3 },
        16
      ))
    : Pt(e.$slots, "default", { key: 1 });
}),
  (Gr.__file = "src/MaybeTransition.vue");
var Ws = Xe({
  components: { MaybeTeleport: Zr, MaybeTransition: Gr },
  props: {
    delayOnMouseout: Number,
    delayOnMouseover: Number,
    trigger: String,
    forceShow: Boolean,
    modifiers: Array,
    onFirstUpdate: Function,
    placement: String,
    strategy: String,
    popperIs: { default: "div", type: String },
    popperProps: { type: Object },
    referenceIs: { default: "div", type: String },
    referenceProps: { type: Object },
    disabled: Boolean,
    teleportProps: Object,
    transitionProps: Object,
  },
  emits: [
    "show",
    "hide",
    "before-enter",
    "enter",
    "after-enter",
    "enter-cancelled",
    "before-leave",
    "leave",
    "after-leave",
    "leave-cancelled",
  ],
  setup: function (e, t) {
    var n = t.emit,
      r = $e(),
      o = $e(),
      s = yl(
        r,
        o,
        lr(lr({}, e), {
          trigger: Vn(e, "trigger"),
          forceShow: Vn(e, "forceShow"),
          delayOnMouseover: Vn(e, "delayOnMouseover"),
          delayOnMouseout: Vn(e, "delayOnMouseout"),
          onShow: function () {
            return n("show");
          },
          onHide: function () {
            return n("hide");
          },
        })
      ).visible;
    tt(
      function () {
        return [s.value, e.disabled];
      },
      function () {
        e.disabled && s.value && (s.value = !1);
      },
      { flush: "sync" }
    );
    var i = ze(function () {});
    return {
      visible: s,
      reference: r,
      popper: o,
      role: i,
      handle: function (l) {
        return function () {
          for (var u = [], a = 0; a < arguments.length; a++)
            u[a] = arguments[a];
          return n.apply(void 0, vl([l], u));
        };
      },
    };
  },
});
(Ws.render = function (e, t, n, r, o, s) {
  const i = rs("MaybeTransition"),
    l = rs("MaybeTeleport");
  return (
    ge(),
    Re(
      Te,
      null,
      [
        (ge(),
        Nt(
          os(e.referenceIs),
          rr(e.referenceProps, {
            ref: "reference",
            "aria-describedby": e.role,
          }),
          { default: at(() => [Pt(e.$slots, "reference")]), _: 3 },
          16,
          ["aria-describedby"]
        )),
        fe(
          l,
          { "teleport-props": e.teleportProps },
          {
            default: at(() => [
              fe(
                i,
                {
                  "transition-props": e.transitionProps,
                  onBeforeEnter:
                    t[0] || (t[0] = (u) => e.handle("before-enter")),
                  onEnter: t[1] || (t[1] = (u) => e.handle("enter")),
                  onAfterEnter: t[2] || (t[2] = (u) => e.handle("after-enter")),
                  onEnterCancelled:
                    t[3] || (t[3] = (u) => e.handle("enter-cancelled")),
                  onBeforeLeave:
                    t[4] || (t[4] = (u) => e.handle("before-leave")),
                  onLeave: t[5] || (t[5] = (u) => e.handle("leave")),
                  onAfterLeave: t[6] || (t[6] = (u) => e.handle("after-leave")),
                  onLeaveCancelled:
                    t[7] || (t[7] = (u) => e.handle("leave-cancelled")),
                },
                {
                  default: at(() => [
                    Gu(
                      (ge(),
                      Nt(
                        os(e.popperIs),
                        rr(e.popperProps, { ref: "popper", role: e.role }),
                        { default: at(() => [Pt(e.$slots, "default")]), _: 3 },
                        16,
                        ["role"]
                      )),
                      [[Ya, e.visible]]
                    ),
                  ]),
                  _: 3,
                },
                8,
                ["transition-props"]
              ),
            ]),
            _: 3,
          },
          8,
          ["teleport-props"]
        ),
      ],
      64
    )
  );
}),
  (Ws.__file = "src/Popper.vue");
var Fn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t) n[r] = o;
  return n;
};
const Pf = (e) => (xu("data-v-0e642642"), (e = e()), Au(), e),
  Rf = { class: "root" },
  Tf = Pf(() => me("div", { id: "arrow", "data-popper-arrow": "" }, null, -1)),
  Sf = { name: "ErrorPopover" },
  Mf = Xe(
    un(ln({}, Sf), {
      props: { show: { type: Boolean }, target: null },
      setup(e) {
        const t = e,
          n = $e();
        return (
          yl(t.target, n, {
            placement: "top-start",
            forceShow: t.show,
            modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
          }),
          (r, o) => (
            ge(),
            Re("div", Rf, [
              me(
                "div",
                { ref_key: "tooltip", ref: n, id: "tooltip", role: "tooltip" },
                [Pt(r.$slots, "default", {}, void 0, !0), Tf],
                512
              ),
            ])
          )
        );
      },
    })
  );
var If = Fn(Mf, [["__scopeId", "data-v-0e642642"]]);
const $f = "_root_vvydz_1",
  kf = "_toggle_vvydz_9",
  Lf = "_input_vvydz_25",
  Ff = "_withExtra_vvydz_35",
  Bf = "_error_vvydz_38",
  Df = "_withArrows_vvydz_44",
  Nf = "_prefix_vvydz_51",
  jf = "_extra_vvydz_57",
  Hf = "_radio_vvydz_66";
var Vf = {
  root: $f,
  toggle: kf,
  input: Lf,
  withExtra: Ff,
  error: Bf,
  withArrows: Df,
  prefix: Nf,
  extra: jf,
  radio: Hf,
};
const Uf = ["checked"],
  Kf = { key: 0 },
  Wf = [
    "required",
    "type",
    "title",
    "name",
    "value",
    "disabled",
    "step",
    "min",
    "max",
  ],
  qf = ["title"],
  zf = { key: 1 },
  Yf = ["required", "name", "value", "checked", "onChange"],
  Qf = {
    name: "FormInput",
    methods: {
      trimValue(e) {
        if (
          this.min !== void 0 &&
          this.max !== void 0 &&
          this.type === "number"
        ) {
          const t = Math.max(this.min, Math.min(e, this.max));
          console.log(e, this.min, this.max),
            console.log(t),
            this.$emit("update:inputValue", t);
        }
      },
    },
  },
  Xf = Xe(
    un(ln({}, Qf), {
      props: {
        title: null,
        name: null,
        required: { type: Boolean },
        showSwitch: { type: Boolean },
        step: null,
        min: null,
        max: null,
        inputValue: { type: [String, Number, Boolean] },
        checkboxValue: { type: Boolean, default: !0 },
        radioValue: null,
        radioValues: null,
        type: null,
        prefix: null,
        extraText: null,
        showArrows: { type: Boolean },
        errors: null,
      },
      emits: ["update:inputValue", "update:checkboxValue", "update:radioValue"],
      setup(e) {
        const t = $e();
        return (n, r) => {
          var o;
          return (
            ge(),
            Re(
              "div",
              { class: we(n.$style.root) },
              [
                me("span", null, [
                  e.showSwitch
                    ? (ge(),
                      Re(
                        "input",
                        {
                          key: 0,
                          class: we(n.$style.toggle),
                          type: "checkbox",
                          checked: e.checkboxValue,
                          onChange:
                            r[0] ||
                            (r[0] = (s) =>
                              n.$emit(
                                "update:checkboxValue",
                                s.target.checked
                              )),
                        },
                        null,
                        42,
                        Uf
                      ))
                    : St("", !0),
                  Pn(" " + an(e.title), 1),
                ]),
                e.radioValues
                  ? St("", !0)
                  : (ge(),
                    Re("span", Kf, [
                      e.prefix
                        ? (ge(),
                          Re(
                            "span",
                            { key: 0, class: we(n.$style.prefix) },
                            an(e.prefix),
                            3
                          ))
                        : St("", !0),
                      e.radioValues
                        ? St("", !0)
                        : (ge(),
                          Re(
                            "input",
                            {
                              key: 1,
                              ref_key: "popoverRef",
                              ref: t,
                              class: we({
                                [n.$style.input]: !0,
                                [n.$style.withExtra]: e.extraText,
                                [n.$style.error]: e.errors,
                                [n.$style.withArrows]: e.showArrows,
                              }),
                              required: e.required,
                              type: e.type,
                              title: e.title,
                              name: e.name,
                              value: e.inputValue,
                              disabled: !e.checkboxValue,
                              step: e.step,
                              min: e.min,
                              max: e.max,
                              onInput:
                                r[1] ||
                                (r[1] = (s) =>
                                  n.$emit("update:inputValue", s.target.value)),
                              onBlur:
                                r[2] ||
                                (r[2] = (s) => n.trimValue(e.inputValue)),
                            },
                            null,
                            42,
                            Wf
                          )),
                      ((o = e.errors) == null ? void 0 : o.length) > 0
                        ? (ge(),
                          Nt(
                            If,
                            { key: 2, show: "", target: t.value },
                            {
                              default: at(() => [
                                Pn(
                                  an(
                                    e.errors.join(`
`)
                                  ),
                                  1
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["target"]
                          ))
                        : St("", !0),
                      e.extraText
                        ? (ge(),
                          Re(
                            "span",
                            {
                              key: 3,
                              class: we(n.$style.extra),
                              title: e.extraText,
                            },
                            an(e.extraText),
                            11,
                            qf
                          ))
                        : St("", !0),
                    ])),
                e.radioValues
                  ? (ge(),
                    Re("span", zf, [
                      (ge(!0),
                      Re(
                        Te,
                        null,
                        da(
                          e.radioValues,
                          (s) => (
                            ge(),
                            Re(
                              "label",
                              { class: we(n.$style.radio), key: s.name },
                              [
                                me(
                                  "input",
                                  {
                                    type: "radio",
                                    required: e.required,
                                    name: s.name,
                                    value: s.value,
                                    checked: s.value === e.radioValue,
                                    onChange: (i) =>
                                      n.$emit("update:radioValue", s.value),
                                  },
                                  null,
                                  40,
                                  Yf
                                ),
                                me("span", null, an(s.value), 1),
                              ],
                              2
                            )
                          )
                        ),
                        128
                      )),
                    ]))
                  : St("", !0),
              ],
              2
            )
          );
        };
      },
    })
  ),
  Jf = { $style: Vf };
var pn = Fn(Xf, [["__cssModules", Jf]]),
  Zf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAYAAABGbhwYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAlElEQVQYlX3RMQrDMAwF0C8TKBlygd4iF9Ad0oP5Eh269Q7BR+gdMnrp0CXkd5GMcEsExrL00CALSXRxs/sZi8MftIR3w+kELWF6g46OAI+IU0SllIcryxtOtdaLI1VdHarq6tgMppzzDGAkCZJ3OwAwWm8aSL5F5EVy7zYAkh/vJSv8oID3fj2nIf3PiMjVJm2x/gWbVVUQEZVEeQAAAABJRU5ErkJggg==";
const Gf = "_root_8iy9v_1",
  ed = "_left_8iy9v_17",
  td = "_right_8iy9v_25",
  nd = "_reduction_8iy9v_35",
  rd = "_growth_8iy9v_44";
var od = { root: Gf, left: ed, right: td, reduction: nd, growth: rd };
const sd = ["data-direction"],
  id = me("img", { src: Zf, alt: "arrow" }, null, -1),
  ld = [id],
  ud = { name: "SendButton" },
  ad = Xe(
    un(ln({}, ud), {
      props: { direction: null },
      setup(e) {
        return (t, n) => (
          ge(),
          Re(
            "button",
            {
              class: we({
                [t.$style.root]: !0,
                [t.$style.growth]: e.direction === "growth",
                [t.$style.reduction]: e.direction === "reduction",
              }),
              type: "submit",
              "data-direction": e.direction,
            },
            [
              me("span", { class: we(t.$style.left) }, ld, 2),
              me(
                "span",
                { class: we(t.$style.right) },
                [Pt(t.$slots, "default")],
                2
              ),
            ],
            10,
            sd
          )
        );
      },
    })
  ),
  cd = { $style: od };
var qs = Fn(ad, [["__cssModules", cd]]);
const fd = "_root_1uhc8_1",
  dd = "_header_1uhc8_7",
  pd = "_content_1uhc8_12",
  hd = "_spoilerHead_1uhc8_15",
  md = "_spoilerHeadDisabled_1uhc8_20",
  gd = "_icon_1uhc8_20",
  vd = "_limitsDisabled_1uhc8_31",
  yd = "_buttons_1uhc8_34";
var bd = {
  root: fd,
  header: dd,
  content: pd,
  spoilerHead: hd,
  spoilerHeadDisabled: md,
  icon: gd,
  limitsDisabled: vd,
  buttons: yd,
};
const _d = me(
    "h3",
    null,
    "\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0435\u0439\u0447\u0430\u0441",
    -1
  ),
  wd = [_d],
  Ed = me("hr", null, null, -1),
  xd = me("br", null, null, -1),
  Ad = me(
    "p",
    null,
    "\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0442\u044C \u043F\u0440\u0438\u0431\u044B\u043B\u044C \u0438 \u0443\u0431\u044B\u0442\u043E\u043A",
    -1
  ),
  Cd = Pn("\u0412 \u0441\u043D\u0438\u0436\u0435\u043D\u0438\u0435"),
  Od = Pn("\u0412 \u0440\u043E\u0441\u0442"),
  Pd = {
    name: "InvestForm",
    data() {
      return {
        sum: 5e3,
        multiplicator: 40,
        limitsEnabled: !1,
        radioValue: "$",
        radioOptions: [
          { name: "units", value: "%" },
          { name: "units", value: "$" },
        ],
        income: "",
        incomeEnabled: !1,
        loss: "",
        lossEnabled: !1,
        errors: {},
      };
    },
    watch: {
      limitsEnabled(e) {
        e ||
          ((this.loss = ""),
          (this.income = ""),
          (this.incomeEnabled = !1),
          (this.lossEnabled = !1));
      },
      incomeEnabled(e) {
        e
          ? (this.income = this.radioValue === "$" ? this.sum * 0.3 : 30)
          : (this.income = "");
      },
      lossEnabled(e) {
        e
          ? (this.loss = this.radioValue === "$" ? this.sum * 0.3 : 30)
          : (this.loss = "");
      },
      radioValue(e) {
        this.incomeEnabled && (this.income = e === "$" ? this.sum * 0.3 : 30),
          this.lossEnabled && (this.loss = e === "$" ? this.sum * 0.3 : 30);
      },
    },
    methods: {
      getLimitsValue(e) {
        return this.radioValue === "%" ? this.sum * (e / 100) : e;
      },
      validateItem(e, t, n) {
        e && (this.errors[t] = this.errors[t] ? this.errors[t].push(n) : [n]);
      },
      validateForm() {
        if (
          ((this.errors = {}),
          this.validateItem(
            this.sum < 100,
            "sum",
            "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438 $ 100"
          ),
          this.validateItem(
            this.multiplicator < 1 || this.multiplicator > 40,
            "multiplicator",
            "\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043C\u0443\u043B\u044C\u0442\u0438\u043F\u043B\u0438\u043A\u0430\u0442\u043E\u0440\u0430"
          ),
          this.income !== "" &&
            this.validateItem(
              this.sum / this.getLimitsValue(this.income) > 10,
              "income",
              this.radioValue === "%"
                ? "\u041D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 10%"
                : `\u041D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 $ ${(
                    this.sum * 0.1
                  ).toLocaleString()}`
            ),
          this.loss !== "" &&
            (this.validateItem(
              this.sum / this.getLimitsValue(this.loss) > 10,
              "loss",
              this.radioValue === "%"
                ? "\u041D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 10%"
                : `\u041D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 $ ${(
                    this.sum * 0.1
                  ).toLocaleString()}`
            ),
            this.validateItem(
              this.getLimitsValue(this.loss) > this.sum,
              "loss",
              this.radioValue === "%"
                ? "\u041D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 100%"
                : `\u041D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 $ ${this.sum.toLocaleString()}`
            )),
          Object.keys(this.errors).length > 0)
        )
          throw new Error(
            `Form validation failed!
` + JSON.stringify(this.errors, null, 2)
          );
      },
      submitForm(e) {
        var n;
        e.preventDefault();
        try {
          this.validateForm();
        } catch (r) {
          console.error(r);
          return;
        }
        const t = {
          sumInv: this.sum,
          mult: this.multiplicator,
          direction:
            (n = e.submitter.attributes["data-direction"]) == null
              ? void 0
              : n.value,
        };
        this.income && (t.takeProfit = this.getLimitsValue(this.income)),
          this.loss && (t.stopLoss = this.getLimitsValue(this.loss)),
          setTimeout(() => {
            alert(
              `Form successfully submitted!
` + JSON.stringify(t, null, 2)
            );
          }, 200);
      },
      toggleLimits() {
        this.limitsEnabled = !this.limitsEnabled;
      },
    },
  },
  Rd = Xe(
    un(ln({}, Pd), {
      setup(e) {
        return (t, n) => (
          ge(),
          Re(
            "form",
            {
              class: we(t.$style.root),
              onSubmit:
                n[8] || (n[8] = (...r) => t.submitForm && t.submitForm(...r)),
            },
            [
              me("div", { class: we(t.$style.header) }, wd, 2),
              Ed,
              me(
                "div",
                { class: we(t.$style.content) },
                [
                  fe(
                    pn,
                    {
                      required: "",
                      title:
                        "\u0421\u0443\u043C\u043C\u0430 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438",
                      name: "sum",
                      type: "number",
                      prefix: "$",
                      step: "1",
                      min: "0",
                      max: "200000",
                      "input-value": t.sum,
                      "onUpdate:input-value":
                        n[0] ||
                        (n[0] = (r) => (ce(sum) ? (sum.value = r) : null)),
                      errors: t.errors.sum,
                    },
                    null,
                    8,
                    ["input-value", "errors"]
                  ),
                  fe(
                    pn,
                    {
                      required: "",
                      title:
                        "\u041C\u0443\u043B\u044C\u0442\u0438\u043F\u043B\u0438\u043A\u0430\u0442\u043E\u0440",
                      name: "multiplicator",
                      type: "number",
                      prefix: "\u2715",
                      step: "1",
                      min: "1",
                      max: "99",
                      "input-value": t.multiplicator,
                      "onUpdate:input-value":
                        n[1] ||
                        (n[1] = (r) =>
                          ce(multiplicator) ? (multiplicator.value = r) : null),
                      errors: t.errors.multiplicator,
                      "extra-text": ` = $ ${(
                        t.sum * t.multiplicator
                      ).toLocaleString()}`,
                    },
                    null,
                    8,
                    ["input-value", "errors", "extra-text"]
                  ),
                  xd,
                  me(
                    "div",
                    {
                      class: we({
                        [t.$style.spoilerHead]: !0,
                        [t.$style.spoilerHeadDisabled]: !t.limitsEnabled,
                      }),
                      onClick:
                        n[2] ||
                        (n[2] = (...r) =>
                          t.toggleLimits && t.toggleLimits(...r)),
                    },
                    [
                      Ad,
                      me(
                        "img",
                        { class: we(t.$style.icon), src: cf, alt: "expand" },
                        null,
                        2
                      ),
                    ],
                    2
                  ),
                  me(
                    "div",
                    {
                      class: we({
                        [t.$style.limitsDisabled]: !t.limitsEnabled,
                      }),
                    },
                    [
                      fe(
                        pn,
                        {
                          required: "",
                          title:
                            "\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F \u0432",
                          "radio-values": t.radioOptions,
                          "radio-value": t.radioValue,
                          "onUpdate:radio-value":
                            n[3] ||
                            (n[3] = (r) =>
                              ce(radioValue) ? (radioValue.value = r) : null),
                        },
                        null,
                        8,
                        ["radio-values", "radio-value"]
                      ),
                      fe(
                        pn,
                        {
                          name: "income",
                          type: "number",
                          min: "0",
                          title: "\u041F\u0440\u0438\u0431\u044B\u043B\u044C",
                          prefix: t.radioValue,
                          "show-switch": "",
                          "show-arrows": "",
                          errors: t.errors.income,
                          "input-value": t.income,
                          "onUpdate:input-value":
                            n[4] ||
                            (n[4] = (r) =>
                              ce(income) ? (income.value = r) : null),
                          "checkbox-value": t.incomeEnabled,
                          "onUpdate:checkbox-value":
                            n[5] ||
                            (n[5] = (r) =>
                              ce(incomeEnabled)
                                ? (incomeEnabled.value = r)
                                : null),
                        },
                        null,
                        8,
                        ["prefix", "errors", "input-value", "checkbox-value"]
                      ),
                      fe(
                        pn,
                        {
                          name: "loss",
                          type: "number",
                          min: "0",
                          title: "\u0423\u0431\u044B\u0442\u043E\u043A",
                          prefix: t.radioValue,
                          "show-switch": "",
                          "show-arrows": "",
                          errors: t.errors.loss,
                          "input-value": t.loss,
                          "onUpdate:input-value":
                            n[6] ||
                            (n[6] = (r) =>
                              ce(loss) ? (loss.value = r) : null),
                          "checkbox-value": t.lossEnabled,
                          "onUpdate:checkbox-value":
                            n[7] ||
                            (n[7] = (r) =>
                              ce(lossEnabled) ? (lossEnabled.value = r) : null),
                        },
                        null,
                        8,
                        ["prefix", "errors", "input-value", "checkbox-value"]
                      ),
                    ],
                    2
                  ),
                  me(
                    "div",
                    { class: we(t.$style.buttons) },
                    [
                      fe(
                        qs,
                        { direction: "reduction" },
                        { default: at(() => [Cd]), _: 1 }
                      ),
                      fe(
                        qs,
                        { direction: "growth" },
                        { default: at(() => [Od]), _: 1 }
                      ),
                    ],
                    2
                  ),
                ],
                2
              ),
            ],
            34
          )
        );
      },
    })
  ),
  Td = { $style: bd };
var Sd = Fn(Rd, [["__cssModules", Td]]);
const Md = { class: "form-wrapper" },
  Id = Xe({
    setup(e) {
      return (t, n) => (ge(), Re("div", Md, [fe(Sd)]));
    },
  });
var $d = Fn(Id, [["__scopeId", "data-v-78ce90f8"]]);
const kd = of({
    history: wc("/"),
    routes: [{ path: "/", name: "form", component: $d }],
  }),
  ko = Ja(af);
ko.use(tc());
ko.use(kd);
ko.mount("#app");
