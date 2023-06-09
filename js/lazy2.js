/*! jQuery v3.6.4 | (c) OpenJS Foundation and other contributors | jquery.org/license */ /*!
 * Lazyload Images
 */ function _extends() {
    return (_extends =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
            }
            return e;
        }).apply(this, arguments);
}
function _typeof(e) {
    return (_typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function e(t) {
                  return typeof t;
              }
            : function e(t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
              })(e);
}
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var i = [],
        n = Object.getPrototypeOf,
        s = i.slice,
        r = i.flat
            ? function (e) {
                  return i.flat.call(e);
              }
            : function (e) {
                  return i.concat.apply([], e);
              },
        o = i.push,
        a = i.indexOf,
        l = {},
        c = l.toString,
        u = l.hasOwnProperty,
        h = u.toString,
        d = h.call(Object),
        p = {},
        f = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
        },
        g = function (e) {
            return null != e && e === e.window;
        },
        m = e.document,
        v = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function y(e, t, i) {
        var n,
            s,
            r = (i = i || m).createElement("script");
        if (((r.text = e), t)) for (n in v) (s = t[n] || (t.getAttribute && t.getAttribute(n))) && r.setAttribute(n, s);
        i.head.appendChild(r).parentNode.removeChild(r);
    }
    function $(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
    }
    var b = "3.6.4",
        w = function (e, t) {
            return new w.fn.init(e, t);
        };
    function x(e) {
        var t = !!e && "length" in e && e.length,
            i = $(e);
        return !f(e) && !g(e) && ("array" === i || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
    }
    (w.fn = w.prototype = {
        jquery: b,
        constructor: w,
        length: 0,
        toArray: function () {
            return s.call(this);
        },
        get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function (e) {
            return w.each(this, e);
        },
        map: function (e) {
            return this.pushStack(
                w.map(this, function (t, i) {
                    return e.call(t, i, t);
                })
            );
        },
        slice: function () {
            return this.pushStack(s.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        even: function () {
            return this.pushStack(
                w.grep(this, function (e, t) {
                    return (t + 1) % 2;
                })
            );
        },
        odd: function () {
            return this.pushStack(
                w.grep(this, function (e, t) {
                    return t % 2;
                })
            );
        },
        eq: function (e) {
            var t = this.length,
                i = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= i && i < t ? [this[i]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: o,
        sort: i.sort,
        splice: i.splice,
    }),
        (w.extend = w.fn.extend = function () {
            var e,
                t,
                i,
                n,
                s,
                r,
                o = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof o && ((c = o), (o = arguments[a] || {}), a++), "object" == typeof o || f(o) || (o = {}), a === l && ((o = this), a--); a < l; a++)
                if (null != (e = arguments[a]))
                    for (t in e)
                        (n = e[t]),
                            "__proto__" !== t &&
                                o !== n &&
                                (c && n && (w.isPlainObject(n) || (s = Array.isArray(n)))
                                    ? ((i = o[t]), (r = s && !Array.isArray(i) ? [] : s || w.isPlainObject(i) ? i : {}), (s = !1), (o[t] = w.extend(c, r, n)))
                                    : void 0 !== n && (o[t] = n));
            return o;
        }),
        w.extend({
            expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, i;
                return !(!e || "[object Object]" !== c.call(e)) && (!(t = n(e)) || ("function" == typeof (i = u.call(t, "constructor") && t.constructor) && h.call(i) === d));
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, i) {
                y(e, { nonce: t && t.nonce }, i);
            },
            each: function (e, t) {
                var i,
                    n = 0;
                if (x(e)) for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
                else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
                return e;
            },
            makeArray: function (e, t) {
                var i = t || [];
                return null != e && (x(Object(e)) ? w.merge(i, "string" == typeof e ? [e] : e) : o.call(i, e)), i;
            },
            inArray: function (e, t, i) {
                return null == t ? -1 : a.call(t, e, i);
            },
            merge: function (e, t) {
                for (var i = +t.length, n = 0, s = e.length; n < i; n++) e[s++] = t[n];
                return (e.length = s), e;
            },
            grep: function (e, t, i) {
                for (var n = [], s = 0, r = e.length, o = !i; s < r; s++) !t(e[s], s) !== o && n.push(e[s]);
                return n;
            },
            map: function (e, t, i) {
                var n,
                    s,
                    o = 0,
                    a = [];
                if (x(e)) for (n = e.length; o < n; o++) null != (s = t(e[o], o, i)) && a.push(s);
                else for (o in e) null != (s = t(e[o], o, i)) && a.push(s);
                return r(a);
            },
            guid: 1,
            support: p,
        }),
        "function" == typeof Symbol && (w.fn[Symbol.iterator] = i[Symbol.iterator]),
        w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            l["[object " + t + "]"] = t.toLowerCase();
        });
    var C = (function (e) {
        var t,
            i,
            n,
            s,
            r,
            o,
            a,
            l,
            c,
            u,
            h,
            d,
            p,
            f,
            g,
            m,
            v,
            y,
            $,
            b = "sizzle" + 1 * new Date(),
            w = e.document,
            x = 0,
            C = 0,
            _ = ec(),
            T = ec(),
            E = ec(),
            k = ec(),
            A = function (e, t) {
                return e === t && (h = !0), 0;
            },
            S = {}.hasOwnProperty,
            D = [],
            L = D.pop,
            N = D.push,
            P = D.push,
            O = D.slice,
            I = function (e, t) {
                for (var i = 0, n = e.length; i < n; i++) if (e[i] === t) return i;
                return -1;
            },
            j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            z = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\[\\da-fA-F]{1,6}" + z + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            M = "\\[" + z + "*(" + H + ")(?:" + z + "*([*^$|!~]?=)" + z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + z + "*\\]",
            q = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            W = RegExp(z + "+", "g"),
            B = RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
            F = RegExp("^" + z + "*," + z + "*"),
            R = RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
            V = RegExp(z + "|>"),
            X = RegExp(q),
            U = RegExp("^" + H + "$"),
            K = {
                ID: RegExp("^#(" + H + ")"),
                CLASS: RegExp("^\\.(" + H + ")"),
                TAG: RegExp("^(" + H + "|[*])"),
                ATTR: RegExp("^" + M),
                PSEUDO: RegExp("^" + q),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"),
                bool: RegExp("^(?:" + j + ")$", "i"),
                needsContext: RegExp("^" + z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)", "i"),
            },
            Q = /HTML$/i,
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            G = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            et = RegExp("\\\\[\\da-fA-F]{1,6}" + z + "?|\\\\([^\\r\\n\\f])", "g"),
            ei = function (e, t) {
                var i = "0x" + e.slice(1) - 65536;
                return t || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320));
            },
            en = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            es = function (e, t) {
                return t ? ("\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            er = function () {
                d();
            },
            eo = eb(
                function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            P.apply((D = O.call(w.childNodes)), w.childNodes), D[w.childNodes.length].nodeType;
        } catch (ea) {
            P = {
                apply: D.length
                    ? function (e, t) {
                          N.apply(e, O.call(t));
                      }
                    : function (e, t) {
                          for (var i = e.length, n = 0; (e[i++] = t[n++]); );
                          e.length = i - 1;
                      },
            };
        }
        function el(e, t, n, s) {
            var r,
                a,
                c,
                u,
                h,
                f,
                v,
                y = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
            if (((n = n || []), "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))) return n;
            if (!s && (d(t), (t = t || p), g)) {
                if (11 !== w && (h = J.exec(e))) {
                    if ((r = h[1])) {
                        if (9 === w) {
                            if (!(c = t.getElementById(r))) return n;
                            if (c.id === r) return n.push(c), n;
                        } else if (y && (c = y.getElementById(r)) && $(t, c) && c.id === r) return n.push(c), n;
                    } else {
                        if (h[2]) return P.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = h[3]) && i.getElementsByClassName && t.getElementsByClassName) return P.apply(n, t.getElementsByClassName(r)), n;
                    }
                }
                if (i.qsa && !k[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                    if (((v = e), (y = t), 1 === w && (V.test(e) || R.test(e)))) {
                        for (((y = (ee.test(e) && ey(t.parentNode)) || t) === t && i.scope) || ((u = t.getAttribute("id")) ? (u = u.replace(en, es)) : t.setAttribute("id", (u = b))), a = (f = o(e)).length; a--; )
                            f[a] = (u ? "#" + u : ":scope") + " " + e$(f[a]);
                        v = f.join(",");
                    }
                    try {
                        return P.apply(n, y.querySelectorAll(v)), n;
                    } catch (x) {
                        k(e, !0);
                    } finally {
                        u === b && t.removeAttribute("id");
                    }
                }
            }
            return l(e.replace(B, "$1"), t, n, s);
        }
        function ec() {
            var e = [];
            return function t(i, s) {
                return e.push(i + " ") > n.cacheLength && delete t[e.shift()], (t[i + " "] = s);
            };
        }
        function eu(e) {
            return (e[b] = !0), e;
        }
        function eh(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t);
            } catch (i) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function ed(e, t) {
            for (var i = e.split("|"), s = i.length; s--; ) n.attrHandle[i[s]] = t;
        }
        function ep(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (i) {
                for (; (i = i.nextSibling); ) if (i === t) return -1;
            }
            return e ? 1 : -1;
        }
        function ef(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function eg(e) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e;
            };
        }
        function em(e) {
            return function (t) {
                return "form" in t
                    ? t.parentNode && !1 === t.disabled
                        ? "label" in t
                            ? "label" in t.parentNode
                                ? t.parentNode.disabled === e
                                : t.disabled === e
                            : t.isDisabled === e || (!e !== t.isDisabled && eo(t) === e)
                        : t.disabled === e
                    : "label" in t && t.disabled === e;
            };
        }
        function ev(e) {
            return eu(function (t) {
                return (
                    (t = +t),
                    eu(function (i, n) {
                        for (var s, r = e([], i.length, t), o = r.length; o--; ) i[(s = r[o])] && (i[s] = !(n[s] = i[s]));
                    })
                );
            });
        }
        function ey(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        for (t in ((i = el.support = {}),
        (r = el.isXML = function (e) {
            var t = e && e.namespaceURI,
                i = e && (e.ownerDocument || e).documentElement;
            return !Q.test(t || (i && i.nodeName) || "HTML");
        }),
        (d = el.setDocument = function (e) {
            var t,
                s,
                o = e ? e.ownerDocument || e : w;
            return (
                o != p &&
                    9 === o.nodeType &&
                    o.documentElement &&
                    ((f = (p = o).documentElement),
                    (g = !r(p)),
                    w != p && (s = p.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", er, !1) : s.attachEvent && s.attachEvent("onunload", er)),
                    (i.scope = eh(function (e) {
                        return f.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                    })),
                    (i.cssHas = eh(function () {
                        try {
                            return p.querySelector(":has(*,:jqfake)"), !1;
                        } catch (e) {
                            return !0;
                        }
                    })),
                    (i.attributes = eh(function (e) {
                        return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (i.getElementsByTagName = eh(function (e) {
                        return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length;
                    })),
                    (i.getElementsByClassName = G.test(p.getElementsByClassName)),
                    (i.getById = eh(function (e) {
                        return (f.appendChild(e).id = b), !p.getElementsByName || !p.getElementsByName(b).length;
                    })),
                    i.getById
                        ? ((n.filter.ID = function (e) {
                              var t = e.replace(et, ei);
                              return function (e) {
                                  return e.getAttribute("id") === t;
                              };
                          }),
                          (n.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && g) {
                                  var i = t.getElementById(e);
                                  return i ? [i] : [];
                              }
                          }))
                        : ((n.filter.ID = function (e) {
                              var t = e.replace(et, ei);
                              return function (e) {
                                  var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                  return i && i.value === t;
                              };
                          }),
                          (n.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && g) {
                                  var i,
                                      n,
                                      s,
                                      r = t.getElementById(e);
                                  if (r) {
                                      if ((i = r.getAttributeNode("id")) && i.value === e) return [r];
                                      for (s = t.getElementsByName(e), n = 0; (r = s[n++]); ) if ((i = r.getAttributeNode("id")) && i.value === e) return [r];
                                  }
                                  return [];
                              }
                          })),
                    (n.find.TAG = i.getElementsByTagName
                        ? function (e, t) {
                              return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0;
                          }
                        : function (e, t) {
                              var i,
                                  n = [],
                                  s = 0,
                                  r = t.getElementsByTagName(e);
                              if ("*" === e) {
                                  for (; (i = r[s++]); ) 1 === i.nodeType && n.push(i);
                                  return n;
                              }
                              return r;
                          }),
                    (n.find.CLASS =
                        i.getElementsByClassName &&
                        function (e, t) {
                            if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
                        }),
                    (v = []),
                    (m = []),
                    (i.qsa = G.test(p.querySelectorAll)) &&
                        (eh(function (e) {
                            var t;
                            (f.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + z + "*(?:''|\"\")"),
                                e.querySelectorAll("[selected]").length || m.push("\\[" + z + "*(?:value|" + j + ")"),
                                e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="),
                                (t = p.createElement("input")).setAttribute("name", ""),
                                e.appendChild(t),
                                e.querySelectorAll("[name='']").length || m.push("\\[" + z + "*name" + z + "*=" + z + "*(?:''|\"\")"),
                                e.querySelectorAll(":checked").length || m.push(":checked"),
                                e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]"),
                                e.querySelectorAll("\\\f"),
                                m.push("[\\r\\n\\f]");
                        }),
                        eh(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = p.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length && m.push("name" + z + "*[*^$|!~]?="),
                                2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                                (f.appendChild(e).disabled = !0),
                                2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                m.push(",.*:");
                        })),
                    (i.matchesSelector = G.test((y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector))) &&
                        eh(function (e) {
                            (i.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), v.push("!=", q);
                        }),
                    i.cssHas || m.push(":has"),
                    (m = m.length && RegExp(m.join("|"))),
                    (v = v.length && RegExp(v.join("|"))),
                    ($ =
                        (t = G.test(f.compareDocumentPosition)) || G.test(f.contains)
                            ? function (e, t) {
                                  var i = (9 === e.nodeType && e.documentElement) || e,
                                      n = t && t.parentNode;
                                  return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
                              }
                            : function (e, t) {
                                  if (t) {
                                      for (; (t = t.parentNode); ) if (t === e) return !0;
                                  }
                                  return !1;
                              }),
                    (A = t
                        ? function (e, t) {
                              if (e === t) return (h = !0), 0;
                              var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                              return (
                                  n ||
                                  (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!i.sortDetached && t.compareDocumentPosition(e) === n)
                                      ? e == p || (e.ownerDocument == w && $(w, e))
                                          ? -1
                                          : t == p || (t.ownerDocument == w && $(w, t))
                                          ? 1
                                          : u
                                          ? I(u, e) - I(u, t)
                                          : 0
                                      : 4 & n
                                      ? -1
                                      : 1)
                              );
                          }
                        : function (e, t) {
                              if (e === t) return (h = !0), 0;
                              var i,
                                  n = 0,
                                  s = e.parentNode,
                                  r = t.parentNode,
                                  o = [e],
                                  a = [t];
                              if (!s || !r) return e == p ? -1 : t == p ? 1 : s ? -1 : r ? 1 : u ? I(u, e) - I(u, t) : 0;
                              if (s === r) return ep(e, t);
                              for (i = e; (i = i.parentNode); ) o.unshift(i);
                              for (i = t; (i = i.parentNode); ) a.unshift(i);
                              for (; o[n] === a[n]; ) n++;
                              return n ? ep(o[n], a[n]) : o[n] == w ? -1 : a[n] == w ? 1 : 0;
                          })),
                p
            );
        }),
        (el.matches = function (e, t) {
            return el(e, null, null, t);
        }),
        (el.matchesSelector = function (e, t) {
            if ((d(e), i.matchesSelector && g && !k[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))))
                try {
                    var n = y.call(e, t);
                    if (n || i.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                } catch (s) {
                    k(t, !0);
                }
            return 0 < el(t, p, null, [e]).length;
        }),
        (el.contains = function (e, t) {
            return (e.ownerDocument || e) != p && d(e), $(e, t);
        }),
        (el.attr = function (e, t) {
            (e.ownerDocument || e) != p && d(e);
            var s = n.attrHandle[t.toLowerCase()],
                r = s && S.call(n.attrHandle, t.toLowerCase()) ? s(e, t, !g) : void 0;
            return void 0 !== r ? r : i.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }),
        (el.escape = function (e) {
            return (e + "").replace(en, es);
        }),
        (el.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e);
        }),
        (el.uniqueSort = function (e) {
            var t,
                n = [],
                s = 0,
                r = 0;
            if (((h = !i.detectDuplicates), (u = !i.sortStable && e.slice(0)), e.sort(A), h)) {
                for (; (t = e[r++]); ) t === e[r] && (s = n.push(r));
                for (; s--; ) e.splice(n[s], 1);
            }
            return (u = null), e;
        }),
        (s = el.getText = function (e) {
            var t,
                i = "",
                n = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += s(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (; (t = e[n++]); ) i += s(t);
            return i;
        }),
        ((n = el.selectors = {
            cacheLength: 50,
            createPseudo: eu,
            match: K,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function (e) {
                    return (e[1] = e[1].replace(et, ei)), (e[3] = (e[3] || e[4] || e[5] || "").replace(et, ei)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                    return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3) ? (e[3] || el.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && el.error(e[0]),
                        e
                    );
                },
                PSEUDO: function (e) {
                    var t,
                        i = !e[6] && e[2];
                    return K.CHILD.test(e[0])
                        ? null
                        : (e[3] ? (e[2] = e[4] || e[5] || "") : i && X.test(i) && (t = o(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && ((e[0] = e[0].slice(0, t)), (e[2] = i.slice(0, t))), e.slice(0, 3));
                },
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(et, ei).toLowerCase();
                    return "*" === e
                        ? function () {
                              return !0;
                          }
                        : function (e) {
                              return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                },
                CLASS: function (e) {
                    var t = _[e + " "];
                    return (
                        t ||
                        ((t = RegExp("(^|" + z + ")" + e + "(" + z + "|$)")),
                        _(e, function (e) {
                            return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                        }))
                    );
                },
                ATTR: function (e, t, i) {
                    return function (n) {
                        var s = el.attr(n, e);
                        return null == s
                            ? "!=" === t
                            : !t ||
                                  ((s += ""),
                                  "=" === t
                                      ? s === i
                                      : "!=" === t
                                      ? s !== i
                                      : "^=" === t
                                      ? i && 0 === s.indexOf(i)
                                      : "*=" === t
                                      ? i && -1 < s.indexOf(i)
                                      : "$=" === t
                                      ? i && s.slice(-i.length) === i
                                      : "~=" === t
                                      ? -1 < (" " + s.replace(W, " ") + " ").indexOf(i)
                                      : "|=" === t && (s === i || s.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function (e, t, i, n, s) {
                    var r = "nth" !== e.slice(0, 3),
                        o = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === n && 0 === s
                        ? function (e) {
                              return !!e.parentNode;
                          }
                        : function (t, i, l) {
                              var c,
                                  u,
                                  h,
                                  d,
                                  p,
                                  f,
                                  g = r !== o ? "nextSibling" : "previousSibling",
                                  m = t.parentNode,
                                  v = a && t.nodeName.toLowerCase(),
                                  y = !l && !a,
                                  $ = !1;
                              if (m) {
                                  if (r) {
                                      for (; g; ) {
                                          for (d = t; (d = d[g]); ) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                          f = g = "only" === e && !f && "nextSibling";
                                      }
                                      return !0;
                                  }
                                  if (((f = [o ? m.firstChild : m.lastChild]), o && y)) {
                                      for (
                                          $ = (p = (c = (u = (h = (d = m)[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2], d = p && m.childNodes[p];
                                          (d = (++p && d && d[g]) || ($ = p = 0) || f.pop());

                                      )
                                          if (1 === d.nodeType && ++$ && d === t) {
                                              u[e] = [x, p, $];
                                              break;
                                          }
                                  } else if ((y && ($ = p = (c = (u = (h = (d = t)[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === x && c[1]), !1 === $))
                                      for (
                                          ;
                                          (d = (++p && d && d[g]) || ($ = p = 0) || f.pop()) &&
                                          (!((a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) && ++$) || (y && ((u = (h = d[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] = [x, $]), d !== t));

                                      );
                                  return ($ -= s) === n || ($ % n == 0 && 0 <= $ / n);
                              }
                          };
                },
                PSEUDO: function (e, t) {
                    var i,
                        s = n.pseudos[e] || n.setFilters[e.toLowerCase()] || el.error("unsupported pseudo: " + e);
                    return s[b]
                        ? s(t)
                        : 1 < s.length
                        ? ((i = [e, e, "", t]),
                          n.setFilters.hasOwnProperty(e.toLowerCase())
                              ? eu(function (e, i) {
                                    for (var n, r = s(e, t), o = r.length; o--; ) e[(n = I(e, r[o]))] = !(i[n] = r[o]);
                                })
                              : function (e) {
                                    return s(e, 0, i);
                                })
                        : s;
                },
            },
            pseudos: {
                not: eu(function (e) {
                    var t = [],
                        i = [],
                        n = a(e.replace(B, "$1"));
                    return n[b]
                        ? eu(function (e, t, i, s) {
                              for (var r, o = n(e, null, s, []), a = e.length; a--; ) (r = o[a]) && (e[a] = !(t[a] = r));
                          })
                        : function (e, s, r) {
                              return (t[0] = e), n(t, null, r, i), (t[0] = null), !i.pop();
                          };
                }),
                has: eu(function (e) {
                    return function (t) {
                        return 0 < el(e, t).length;
                    };
                }),
                contains: eu(function (e) {
                    return (
                        (e = e.replace(et, ei)),
                        function (t) {
                            return -1 < (t.textContent || s(t)).indexOf(e);
                        }
                    );
                }),
                lang: eu(function (e) {
                    return (
                        U.test(e || "") || el.error("unsupported lang: " + e),
                        (e = e.replace(et, ei).toLowerCase()),
                        function (t) {
                            var i;
                            do if ((i = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function (t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id;
                },
                root: function (e) {
                    return e === f;
                },
                focus: function (e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: em(!1),
                disabled: em(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (e) {
                    return !n.pseudos.empty(e);
                },
                header: function (e) {
                    return Z.test(e.nodeName);
                },
                input: function (e) {
                    return Y.test(e.nodeName);
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && "button" === e.type) || "button" === t;
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: ev(function () {
                    return [0];
                }),
                last: ev(function (e, t) {
                    return [t - 1];
                }),
                eq: ev(function (e, t, i) {
                    return [i < 0 ? i + t : i];
                }),
                even: ev(function (e, t) {
                    for (var i = 0; i < t; i += 2) e.push(i);
                    return e;
                }),
                odd: ev(function (e, t) {
                    for (var i = 1; i < t; i += 2) e.push(i);
                    return e;
                }),
                lt: ev(function (e, t, i) {
                    for (var n = i < 0 ? i + t : t < i ? t : i; 0 <= --n; ) e.push(n);
                    return e;
                }),
                gt: ev(function (e, t, i) {
                    for (var n = i < 0 ? i + t : i; ++n < t; ) e.push(n);
                    return e;
                }),
            },
        }).pseudos.nth = n.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            n.pseudos[t] = ef(t);
        for (t in { submit: !0, reset: !0 }) n.pseudos[t] = eg(t);
        function e8() {}
        function e$(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n;
        }
        function eb(e, t, i) {
            var n = t.dir,
                s = t.next,
                r = s || n,
                o = i && "parentNode" === r,
                a = C++;
            return t.first
                ? function (t, i, s) {
                      for (; (t = t[n]); ) if (1 === t.nodeType || o) return e(t, i, s);
                      return !1;
                  }
                : function (t, i, l) {
                      var c,
                          u,
                          h,
                          d = [x, a];
                      if (l) {
                          for (; (t = t[n]); ) if ((1 === t.nodeType || o) && e(t, i, l)) return !0;
                      } else
                          for (; (t = t[n]); )
                              if (1 === t.nodeType || o) {
                                  if (((u = (h = t[b] || (t[b] = {}))[t.uniqueID] || (h[t.uniqueID] = {})), s && s === t.nodeName.toLowerCase())) t = t[n] || t;
                                  else {
                                      if ((c = u[r]) && c[0] === x && c[1] === a) return (d[2] = c[2]);
                                      if (((u[r] = d)[2] = e(t, i, l))) return !0;
                                  }
                              }
                      return !1;
                  };
        }
        function ew(e) {
            return 1 < e.length
                ? function (t, i, n) {
                      for (var s = e.length; s--; ) if (!e[s](t, i, n)) return !1;
                      return !0;
                  }
                : e[0];
        }
        function ex(e, t, i, n, s) {
            for (var r, o = [], a = 0, l = e.length, c = null != t; a < l; a++) (r = e[a]) && ((i && !i(r, n, s)) || (o.push(r), c && t.push(a)));
            return o;
        }
        function eC(e, t, i, n, s, r) {
            return (
                n && !n[b] && (n = eC(n)),
                s && !s[b] && (s = eC(s, r)),
                eu(function (r, o, a, l) {
                    var c,
                        u,
                        h,
                        d = [],
                        p = [],
                        f = o.length,
                        g =
                            r ||
                            (function (e, t, i) {
                                for (var n = 0, s = t.length; n < s; n++) el(e, t[n], i);
                                return i;
                            })(t || "*", a.nodeType ? [a] : a, []),
                        m = e && (r || !t) ? ex(g, d, e, a, l) : g,
                        v = i ? (s || (r ? e : f || n) ? [] : o) : m;
                    if ((i && i(m, v, a, l), n)) for (c = ex(v, p), n(c, [], a, l), u = c.length; u--; ) (h = c[u]) && (v[p[u]] = !(m[p[u]] = h));
                    if (r) {
                        if (s || e) {
                            if (s) {
                                for (c = [], u = v.length; u--; ) (h = v[u]) && c.push((m[u] = h));
                                s(null, (v = []), c, l);
                            }
                            for (u = v.length; u--; ) (h = v[u]) && -1 < (c = s ? I(r, h) : d[u]) && (r[c] = !(o[c] = h));
                        }
                    } else (v = ex(v === o ? v.splice(f, v.length) : v)), s ? s(null, o, v, l) : P.apply(o, v);
                })
            );
        }
        function e_(e) {
            for (
                var t,
                    i,
                    s,
                    r = e.length,
                    o = n.relative[e[0].type],
                    a = o || n.relative[" "],
                    l = o ? 1 : 0,
                    u = eb(
                        function (e) {
                            return e === t;
                        },
                        a,
                        !0
                    ),
                    h = eb(
                        function (e) {
                            return -1 < I(t, e);
                        },
                        a,
                        !0
                    ),
                    d = [
                        function (e, i, n) {
                            var s = (!o && (n || i !== c)) || ((t = i).nodeType ? u(e, i, n) : h(e, i, n));
                            return (t = null), s;
                        },
                    ];
                l < r;
                l++
            )
                if ((i = n.relative[e[l].type])) d = [eb(ew(d), i)];
                else {
                    if ((i = n.filter[e[l].type].apply(null, e[l].matches))[b]) {
                        for (s = ++l; s < r && !n.relative[e[s].type]; s++);
                        return eC(1 < l && ew(d), 1 < l && e$(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(B, "$1"), i, l < s && e_(e.slice(l, s)), s < r && e_((e = e.slice(s))), s < r && e$(e));
                    }
                    d.push(i);
                }
            return ew(d);
        }
        return (
            (e8.prototype = n.filters = n.pseudos),
            (n.setFilters = new e8()),
            (o = el.tokenize = function (e, t) {
                var i,
                    s,
                    r,
                    o,
                    a,
                    l,
                    c,
                    u = T[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (a = e, l = [], c = n.preFilter; a; ) {
                    for (o in ((!i || (s = F.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push((r = []))),
                    (i = !1),
                    (s = R.exec(a)) && ((i = s.shift()), r.push({ value: i, type: s[0].replace(B, " ") }), (a = a.slice(i.length))),
                    n.filter))
                        (s = K[o].exec(a)) && (!c[o] || (s = c[o](s))) && ((i = s.shift()), r.push({ value: i, type: o, matches: s }), (a = a.slice(i.length)));
                    if (!i) break;
                }
                return t ? a.length : a ? el.error(e) : T(e, l).slice(0);
            }),
            (a = el.compile = function (e, t) {
                var i,
                    s,
                    r,
                    a,
                    l,
                    u,
                    h = [],
                    f = [],
                    m = E[e + " "];
                if (!m) {
                    for (t || (t = o(e)), i = t.length; i--; ) (m = e_(t[i]))[b] ? h.push(m) : f.push(m);
                    (m = E(
                        e,
                        ((s = f),
                        (a = 0 < (r = h).length),
                        (l = 0 < s.length),
                        (u = function (e, t, i, o, u) {
                            var h,
                                f,
                                m,
                                v = 0,
                                y = "0",
                                $ = e && [],
                                b = [],
                                w = c,
                                C = e || (l && n.find.TAG("*", u)),
                                _ = (x += null == w ? 1 : Math.random() || 0.1),
                                T = C.length;
                            for (u && (c = t == p || t || u); y !== T && null != (h = C[y]); y++) {
                                if (l && h) {
                                    for (f = 0, t || h.ownerDocument == p || (d(h), (i = !g)); (m = s[f++]); )
                                        if (m(h, t || p, i)) {
                                            o.push(h);
                                            break;
                                        }
                                    u && (x = _);
                                }
                                a && ((h = !m && h) && v--, e && $.push(h));
                            }
                            if (((v += y), a && y !== v)) {
                                for (f = 0; (m = r[f++]); ) m($, b, t, i);
                                if (e) {
                                    if (0 < v) for (; y--; ) $[y] || b[y] || (b[y] = L.call(o));
                                    b = ex(b);
                                }
                                P.apply(o, b), u && !e && 0 < b.length && 1 < v + r.length && el.uniqueSort(o);
                            }
                            return u && ((x = _), (c = w)), $;
                        }),
                        a ? eu(u) : u)
                    )).selector = e;
                }
                return m;
            }),
            (l = el.select = function (e, t, i, s) {
                var r,
                    l,
                    c,
                    u,
                    h,
                    d = "function" == typeof e && e,
                    p = !s && o((e = d.selector || e));
                if (((i = i || []), 1 === p.length)) {
                    if (2 < (l = p[0] = p[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === t.nodeType && g && n.relative[l[1].type]) {
                        if (!(t = (n.find.ID(c.matches[0].replace(et, ei), t) || [])[0])) return i;
                        d && (t = t.parentNode), (e = e.slice(l.shift().value.length));
                    }
                    for (r = K.needsContext.test(e) ? 0 : l.length; r-- && ((c = l[r]), !n.relative[(u = c.type)]); )
                        if ((h = n.find[u]) && (s = h(c.matches[0].replace(et, ei), (ee.test(l[0].type) && ey(t.parentNode)) || t))) {
                            if ((l.splice(r, 1), !(e = s.length && e$(l)))) return P.apply(i, s), i;
                            break;
                        }
                }
                return (d || a(e, p))(s, t, !g, i, !t || (ee.test(e) && ey(t.parentNode)) || t), i;
            }),
            (i.sortStable = b.split("").sort(A).join("") === b),
            (i.detectDuplicates = !!h),
            d(),
            (i.sortDetached = eh(function (e) {
                return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
            })),
            eh(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
                ed("type|href|height|width", function (e, t, i) {
                    if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
            (i.attributes &&
                eh(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
                ed("value", function (e, t, i) {
                    if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                }),
            eh(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                ed(j, function (e, t, i) {
                    var n;
                    if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
                }),
            el
        );
    })(e);
    (w.find = C), (w.expr = C.selectors), (w.expr[":"] = w.expr.pseudos), (w.uniqueSort = w.unique = C.uniqueSort), (w.text = C.getText), (w.isXMLDoc = C.isXML), (w.contains = C.contains), (w.escapeSelector = C.escape);
    var _ = function (e, t, i) {
            for (var n = [], s = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (s && w(e).is(i)) break;
                    n.push(e);
                }
            return n;
        },
        T = function (e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i;
        },
        E = w.expr.match.needsContext;
    function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function S(e, t, i) {
        return f(t)
            ? w.grep(e, function (e, n) {
                  return !!t.call(e, n, e) !== i;
              })
            : t.nodeType
            ? w.grep(e, function (e) {
                  return (e === t) !== i;
              })
            : "string" != typeof t
            ? w.grep(e, function (e) {
                  return -1 < a.call(t, e) !== i;
              })
            : w.filter(t, e, i);
    }
    (w.filter = function (e, t, i) {
        var n = t[0];
        return (
            i && (e = ":not(" + e + ")"),
            1 === t.length && 1 === n.nodeType
                ? w.find.matchesSelector(n, e)
                    ? [n]
                    : []
                : w.find.matches(
                      e,
                      w.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        w.fn.extend({
            find: function (e) {
                var t,
                    i,
                    n = this.length,
                    s = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        w(e).filter(function () {
                            for (t = 0; t < n; t++) if (w.contains(s[t], this)) return !0;
                        })
                    );
                for (i = this.pushStack([]), t = 0; t < n; t++) w.find(e, s[t], i);
                return 1 < n ? w.uniqueSort(i) : i;
            },
            filter: function (e) {
                return this.pushStack(S(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(S(this, e || [], !0));
            },
            is: function (e) {
                return !!S(this, "string" == typeof e && E.test(e) ? w(e) : e || [], !1).length;
            },
        });
    var D,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((w.fn.init = function (e, t, i) {
        var n, s;
        if (!e) return this;
        if (((i = i || D), "string" == typeof e)) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || (!n[1] && t)) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (((t = t instanceof w ? t[0] : t), w.merge(this, w.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : m, !0)), A.test(n[1]) && w.isPlainObject(t))) for (n in t) f(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this;
            }
            return (s = m.getElementById(n[2])) && ((this[0] = s), (this.length = 1)), this;
        }
        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : f(e) ? (void 0 !== i.ready ? i.ready(e) : e(w)) : w.makeArray(e, this);
    }).prototype = w.fn),
        (D = w(m));
    var N = /^(?:parents|prev(?:Until|All))/,
        P = { children: !0, contents: !0, next: !0, prev: !0 };
    function O(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    w.fn.extend({
        has: function (e) {
            var t = w(e, this),
                i = t.length;
            return this.filter(function () {
                for (var e = 0; e < i; e++) if (w.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var i,
                n = 0,
                s = this.length,
                r = [],
                o = "string" != typeof e && w(e);
            if (!E.test(e)) {
                for (; n < s; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (o ? -1 < o.index(i) : 1 === i.nodeType && w.find.matchesSelector(i, e))) {
                            r.push(i);
                            break;
                        }
            }
            return this.pushStack(1 < r.length ? w.uniqueSort(r) : r);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? a.call(w(e), this[0]) : a.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    }),
        w.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return _(e, "parentNode");
                },
                parentsUntil: function (e, t, i) {
                    return _(e, "parentNode", i);
                },
                next: function (e) {
                    return O(e, "nextSibling");
                },
                prev: function (e) {
                    return O(e, "previousSibling");
                },
                nextAll: function (e) {
                    return _(e, "nextSibling");
                },
                prevAll: function (e) {
                    return _(e, "previousSibling");
                },
                nextUntil: function (e, t, i) {
                    return _(e, "nextSibling", i);
                },
                prevUntil: function (e, t, i) {
                    return _(e, "previousSibling", i);
                },
                siblings: function (e) {
                    return T((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return T(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && n(e.contentDocument) ? e.contentDocument : (k(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
                },
            },
            function (e, t) {
                w.fn[e] = function (i, n) {
                    var s = w.map(this, t, i);
                    return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (s = w.filter(n, s)), 1 < this.length && (P[e] || w.uniqueSort(s), N.test(e) && s.reverse()), this.pushStack(s);
                };
            }
        );
    var I = /[^\x20\t\r\n\f]+/g;
    function j(e) {
        return e;
    }
    function z(e) {
        throw e;
    }
    function H(e, t, i, n) {
        var s;
        try {
            e && f((s = e.promise)) ? s.call(e).done(t).fail(i) : e && f((s = e.then)) ? s.call(e, t, i) : t.apply(void 0, [e].slice(n));
        } catch (r) {
            i.apply(void 0, [r]);
        }
    }
    (w.Callbacks = function (e) {
        e =
            "string" == typeof e
                ? ((t = e),
                  (i = {}),
                  w.each(t.match(I) || [], function (e, t) {
                      i[t] = !0;
                  }),
                  i)
                : w.extend({}, e);
        var t,
            i,
            n,
            s,
            r,
            o,
            a = [],
            l = [],
            c = -1,
            u = function () {
                for (o = o || e.once, r = n = !0; l.length; c = -1) for (s = l.shift(); ++c < a.length; ) !1 === a[c].apply(s[0], s[1]) && e.stopOnFalse && ((c = a.length), (s = !1));
                e.memory || (s = !1), (n = !1), o && (a = s ? [] : "");
            },
            h = {
                add: function () {
                    return (
                        a &&
                            (s && !n && ((c = a.length - 1), l.push(s)),
                            (function t(i) {
                                w.each(i, function (i, n) {
                                    f(n) ? (e.unique && h.has(n)) || a.push(n) : n && n.length && "string" !== $(n) && t(n);
                                });
                            })(arguments),
                            s && !n && u()),
                        this
                    );
                },
                remove: function () {
                    return (
                        w.each(arguments, function (e, t) {
                            for (var i; -1 < (i = w.inArray(t, a, i)); ) a.splice(i, 1), i <= c && c--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < w.inArray(e, a) : 0 < a.length;
                },
                empty: function () {
                    return a && (a = []), this;
                },
                disable: function () {
                    return (o = l = []), (a = s = ""), this;
                },
                disabled: function () {
                    return !a;
                },
                lock: function () {
                    return (o = l = []), s || n || (a = s = ""), this;
                },
                locked: function () {
                    return !!o;
                },
                fireWith: function (e, t) {
                    return o || ((t = [e, (t = t || []).slice ? t.slice() : t]), l.push(t), n || u()), this;
                },
                fire: function () {
                    return h.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!r;
                },
            };
        return h;
    }),
        w.extend({
            Deferred: function (t) {
                var i = [
                        ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                        ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"],
                    ],
                    n = "pending",
                    s = {
                        state: function () {
                            return n;
                        },
                        always: function () {
                            return r.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return s.then(null, e);
                        },
                        pipe: function () {
                            var e = arguments;
                            return w
                                .Deferred(function (t) {
                                    w.each(i, function (i, n) {
                                        var s = f(e[n[4]]) && e[n[4]];
                                        r[n[1]](function () {
                                            var e = s && s.apply(this, arguments);
                                            e && f(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, s ? [e] : arguments);
                                        });
                                    }),
                                        (e = null);
                                })
                                .promise();
                        },
                        then: function (t, n, s) {
                            var r = 0;
                            function o(t, i, n, s) {
                                return function () {
                                    var a = this,
                                        l = arguments,
                                        c = function () {
                                            var e, c;
                                            if (!(t < r)) {
                                                if ((e = n.apply(a, l)) === i.promise()) throw TypeError("Thenable self-resolution");
                                                f((c = e && ("object" == typeof e || "function" == typeof e) && e.then))
                                                    ? s
                                                        ? c.call(e, o(r, i, j, s), o(r, i, z, s))
                                                        : (r++, c.call(e, o(r, i, j, s), o(r, i, z, s), o(r, i, j, i.notifyWith)))
                                                    : (n !== j && ((a = void 0), (l = [e])), (s || i.resolveWith)(a, l));
                                            }
                                        },
                                        u = s
                                            ? c
                                            : function () {
                                                  try {
                                                      c();
                                                  } catch (e) {
                                                      w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, u.stackTrace), r <= t + 1 && (n !== z && ((a = void 0), (l = [e])), i.rejectWith(a, l));
                                                  }
                                              };
                                    t ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), e.setTimeout(u));
                                };
                            }
                            return w
                                .Deferred(function (e) {
                                    i[0][3].add(o(0, e, f(s) ? s : j, e.notifyWith)), i[1][3].add(o(0, e, f(t) ? t : j)), i[2][3].add(o(0, e, f(n) ? n : z));
                                })
                                .promise();
                        },
                        promise: function (e) {
                            return null != e ? w.extend(e, s) : s;
                        },
                    },
                    r = {};
                return (
                    w.each(i, function (e, t) {
                        var o = t[2],
                            a = t[5];
                        (s[t[1]] = o.add),
                            a &&
                                o.add(
                                    function () {
                                        n = a;
                                    },
                                    i[3 - e][2].disable,
                                    i[3 - e][3].disable,
                                    i[0][2].lock,
                                    i[0][3].lock
                                ),
                            o.add(t[3].fire),
                            (r[t[0]] = function () {
                                return r[t[0] + "With"](this === r ? void 0 : this, arguments), this;
                            }),
                            (r[t[0] + "With"] = o.fireWith);
                    }),
                    s.promise(r),
                    t && t.call(r, r),
                    r
                );
            },
            when: function (e) {
                var t = arguments.length,
                    i = t,
                    n = Array(i),
                    r = s.call(arguments),
                    o = w.Deferred(),
                    a = function (e) {
                        return function (i) {
                            (n[e] = this), (r[e] = 1 < arguments.length ? s.call(arguments) : i), --t || o.resolveWith(n, r);
                        };
                    };
                if (t <= 1 && (H(e, o.done(a(i)).resolve, o.reject, !t), "pending" === o.state() || f(r[i] && r[i].then))) return o.then();
                for (; i--; ) H(r[i], a(i), o.reject);
                return o.promise();
            },
        });
    var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (w.Deferred.exceptionHook = function (t, i) {
        e.console && e.console.warn && t && M.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i);
    }),
        (w.readyException = function (t) {
            e.setTimeout(function () {
                throw t;
            });
        });
    var q = w.Deferred();
    function W() {
        m.removeEventListener("DOMContentLoaded", W), e.removeEventListener("load", W), w.ready();
    }
    (w.fn.ready = function (e) {
        return (
            q.then(e).catch(function (e) {
                w.readyException(e);
            }),
            this
        );
    }),
        w.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --w.readyWait : w.isReady) || ((w.isReady = !0) !== e && 0 < --w.readyWait) || q.resolveWith(m, [w]);
            },
        }),
        (w.ready.then = q.then),
        "complete" !== m.readyState && ("loading" === m.readyState || m.documentElement.doScroll) ? (m.addEventListener("DOMContentLoaded", W), e.addEventListener("load", W)) : e.setTimeout(w.ready);
    var B = function (e, t, i, n, s, r, o) {
            var a = 0,
                l = e.length,
                c = null == i;
            if ("object" === $(i)) for (a in ((s = !0), i)) B(e, t, a, i[a], !0, r, o);
            else if (
                void 0 !== n &&
                ((s = !0),
                f(n) || (o = !0),
                c &&
                    (o
                        ? (t.call(e, n), (t = null))
                        : ((c = t),
                          (t = function (e, t, i) {
                              return c.call(w(e), i);
                          }))),
                t)
            )
                for (; a < l; a++) t(e[a], i, o ? n : n.call(e[a], a, t(e[a], i)));
            return s ? e : c ? t.call(e) : l ? t(e[0], i) : r;
        },
        F = /^-ms-/,
        R = /-([a-z])/g;
    function V(e, t) {
        return t.toUpperCase();
    }
    function X(e) {
        return e.replace(F, "ms-").replace(R, V);
    }
    var U = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function K() {
        this.expando = w.expando + K.uid++;
    }
    (K.uid = 1),
        (K.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), U(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, i) {
                var n,
                    s = this.cache(e);
                if ("string" == typeof t) s[X(t)] = i;
                else for (n in t) s[X(n)] = t[n];
                return s;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
            },
            access: function (e, t, i) {
                return void 0 === t || (t && "string" == typeof t && void 0 === i) ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t);
            },
            remove: function (e, t) {
                var i,
                    n = e[this.expando];
                if (void 0 !== n) {
                    if (void 0 !== t) for (i = (t = Array.isArray(t) ? t.map(X) : ((t = X(t)) in n) ? [t] : t.match(I) || []).length; i--; ) delete n[t[i]];
                    (void 0 === t || w.isEmptyObject(n)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !w.isEmptyObject(t);
            },
        });
    var Q = new K(),
        Y = new K(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        G = /[A-Z]/g;
    function J(e, t, i) {
        var n, s;
        if (void 0 === i && 1 === e.nodeType) {
            if (((n = "data-" + t.replace(G, "-$&").toLowerCase()), "string" == typeof (i = e.getAttribute(n)))) {
                try {
                    i = "true" === (s = i) || ("false" !== s && ("null" === s ? null : s === +s + "" ? +s : Z.test(s) ? JSON.parse(s) : s));
                } catch (r) {}
                Y.set(e, t, i);
            } else i = void 0;
        }
        return i;
    }
    w.extend({
        hasData: function (e) {
            return Y.hasData(e) || Q.hasData(e);
        },
        data: function (e, t, i) {
            return Y.access(e, t, i);
        },
        removeData: function (e, t) {
            Y.remove(e, t);
        },
        _data: function (e, t, i) {
            return Q.access(e, t, i);
        },
        _removeData: function (e, t) {
            Q.remove(e, t);
        },
    }),
        w.fn.extend({
            data: function (e, t) {
                var i,
                    n,
                    s,
                    r = this[0],
                    o = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && ((s = Y.get(r)), 1 === r.nodeType && !Q.get(r, "hasDataAttrs"))) {
                        for (i = o.length; i--; ) o[i] && 0 === (n = o[i].name).indexOf("data-") && J(r, (n = X(n.slice(5))), s[n]);
                        Q.set(r, "hasDataAttrs", !0);
                    }
                    return s;
                }
                return "object" == typeof e
                    ? this.each(function () {
                          Y.set(this, e);
                      })
                    : B(
                          this,
                          function (t) {
                              var i;
                              if (r && void 0 === t) return void 0 !== (i = Y.get(r, e)) ? i : void 0 !== (i = J(r, e)) ? i : void 0;
                              this.each(function () {
                                  Y.set(this, e, t);
                              });
                          },
                          null,
                          t,
                          1 < arguments.length,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    Y.remove(this, e);
                });
            },
        }),
        w.extend({
            queue: function (e, t, i) {
                var n;
                if (e) return (t = (t || "fx") + "queue"), (n = Q.get(e, t)), i && (!n || Array.isArray(i) ? (n = Q.access(e, t, w.makeArray(i))) : n.push(i)), n || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var i = w.queue(e, t),
                    n = i.length,
                    s = i.shift(),
                    r = w._queueHooks(e, t);
                "inprogress" === s && ((s = i.shift()), n--),
                    s &&
                        ("fx" === t && i.unshift("inprogress"),
                        delete r.stop,
                        s.call(
                            e,
                            function () {
                                w.dequeue(e, t);
                            },
                            r
                        )),
                    !n && r && r.empty.fire();
            },
            _queueHooks: function (e, t) {
                var i = t + "queueHooks";
                return (
                    Q.get(e, i) ||
                    Q.access(e, i, {
                        empty: w.Callbacks("once memory").add(function () {
                            Q.remove(e, [t + "queue", i]);
                        }),
                    })
                );
            },
        }),
        w.fn.extend({
            queue: function (e, t) {
                var i = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), i--),
                    arguments.length < i
                        ? w.queue(this[0], e)
                        : void 0 === t
                        ? this
                        : this.each(function () {
                              var i = w.queue(this, e, t);
                              w._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && w.dequeue(this, e);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    w.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var i,
                    n = 1,
                    s = w.Deferred(),
                    r = this,
                    o = this.length,
                    a = function () {
                        --n || s.resolveWith(r, [r]);
                    };
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; o--; ) (i = Q.get(r[o], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                return a(), s.promise(t);
            },
        });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        et = RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ei = ["Top", "Right", "Bottom", "Left"],
        en = m.documentElement,
        es = function (e) {
            return w.contains(e.ownerDocument, e);
        },
        er = { composed: !0 };
    en.getRootNode &&
        (es = function (e) {
            return w.contains(e.ownerDocument, e) || e.getRootNode(er) === e.ownerDocument;
        });
    var eo = function (e, t) {
        return "none" === (e = t || e).style.display || ("" === e.style.display && es(e) && "none" === w.css(e, "display"));
    };
    function ea(e, t, i, n) {
        var s,
            r,
            o = 20,
            a = n
                ? function () {
                      return n.cur();
                  }
                : function () {
                      return w.css(e, t, "");
                  },
            l = a(),
            c = (i && i[3]) || (w.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (w.cssNumber[t] || ("px" !== c && +l)) && et.exec(w.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; o--; ) w.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (o = 0), (u /= r);
            (u *= 2), w.style(e, t, u + c), (i = i || []);
        }
        return i && ((u = +u || +l || 0), (s = i[1] ? u + (i[1] + 1) * i[2] : +i[2]), n && ((n.unit = c), (n.start = u), (n.end = s))), s;
    }
    var el = {};
    function ec(e, t) {
        for (var i, n, s, r, o, a, l, c = [], u = 0, h = e.length; u < h; u++)
            (n = e[u]).style &&
                ((i = n.style.display),
                t
                    ? ("none" === i && ((c[u] = Q.get(n, "display") || null), c[u] || (n.style.display = "")),
                      "" === n.style.display &&
                          eo(n) &&
                          (c[u] =
                              ((l = o = r = void 0),
                              (o = (s = n).ownerDocument),
                              (l = el[(a = s.nodeName)]) || ((r = o.body.appendChild(o.createElement(a))), (l = w.css(r, "display")), r.parentNode.removeChild(r), "none" === l && (l = "block"), (el[a] = l)))))
                    : "none" !== i && ((c[u] = "none"), Q.set(n, "display", i)));
        for (u = 0; u < h; u++) null != c[u] && (e[u].style.display = c[u]);
        return e;
    }
    w.fn.extend({
        show: function () {
            return ec(this, !0);
        },
        hide: function () {
            return ec(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      eo(this) ? w(this).show() : w(this).hide();
                  });
        },
    });
    var eu,
        eh,
        ed = /^(?:checkbox|radio)$/i,
        ep = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ef = /^$|^module$|\/(?:java|ecma)script/i;
    (eu = m.createDocumentFragment().appendChild(m.createElement("div"))),
        (eh = m.createElement("input")).setAttribute("type", "radio"),
        eh.setAttribute("checked", "checked"),
        eh.setAttribute("name", "t"),
        eu.appendChild(eh),
        (p.checkClone = eu.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (eu.innerHTML = "<textarea>x</textarea>"),
        (p.noCloneChecked = !!eu.cloneNode(!0).lastChild.defaultValue),
        (eu.innerHTML = "<option></option>"),
        (p.option = !!eu.lastChild);
    var eg = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    function em(e, t) {
        var i;
        return (i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && k(e, t)) ? w.merge([e], i) : i;
    }
    function ev(e, t) {
        for (var i = 0, n = e.length; i < n; i++) Q.set(e[i], "globalEval", !t || Q.get(t[i], "globalEval"));
    }
    (eg.tbody = eg.tfoot = eg.colgroup = eg.caption = eg.thead), (eg.th = eg.td), p.option || (eg.optgroup = eg.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ey = /<|&#?\w+;/;
    function e8(e, t, i, n, s) {
        for (var r, o, a, l, c, u, h = t.createDocumentFragment(), d = [], p = 0, f = e.length; p < f; p++)
            if ((r = e[p]) || 0 === r) {
                if ("object" === $(r)) w.merge(d, r.nodeType ? [r] : r);
                else if (ey.test(r)) {
                    for (o = o || h.appendChild(t.createElement("div")), l = eg[(a = (ep.exec(r) || ["", ""])[1].toLowerCase())] || eg._default, o.innerHTML = l[1] + w.htmlPrefilter(r) + l[2], u = l[0]; u--; ) o = o.lastChild;
                    w.merge(d, o.childNodes), ((o = h.firstChild).textContent = "");
                } else d.push(t.createTextNode(r));
            }
        for (h.textContent = "", p = 0; (r = d[p++]); )
            if (n && -1 < w.inArray(r, n)) s && s.push(r);
            else if (((c = es(r)), (o = em(h.appendChild(r), "script")), c && ev(o), i)) for (u = 0; (r = o[u++]); ) ef.test(r.type || "") && i.push(r);
        return h;
    }
    var e$ = /^([^.]*)(?:\.(.+)|)/;
    function eb() {
        return !0;
    }
    function ew() {
        return !1;
    }
    function ex(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return m.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }
    function eC(e, t, i, n, s, r) {
        var o, a;
        if ("object" == typeof t) {
            for (a in ("string" != typeof i && ((n = n || i), (i = void 0)), t)) eC(e, a, i, n, t[a], r);
            return e;
        }
        if ((null == n && null == s ? ((s = i), (n = i = void 0)) : null == s && ("string" == typeof i ? ((s = n), (n = void 0)) : ((s = n), (n = i), (i = void 0))), !1 === s)) s = ew;
        else if (!s) return e;
        return (
            1 === r &&
                ((o = s),
                ((s = function (e) {
                    return w().off(e), o.apply(this, arguments);
                }).guid = o.guid || (o.guid = w.guid++))),
            e.each(function () {
                w.event.add(this, t, s, n, i);
            })
        );
    }
    function e_(e, t, i) {
        i
            ? (Q.set(e, t, !1),
              w.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                      var n,
                          r,
                          o = Q.get(this, t);
                      if (1 & e.isTrigger && this[t]) {
                          if (o.length) (w.event.special[t] || {}).delegateType && e.stopPropagation();
                          else if (((o = s.call(arguments)), Q.set(this, t, o), (n = i(this, t)), this[t](), o !== (r = Q.get(this, t)) || n ? Q.set(this, t, !1) : (r = {}), o !== r))
                              return e.stopImmediatePropagation(), e.preventDefault(), r && r.value;
                      } else o.length && (Q.set(this, t, { value: w.event.trigger(w.extend(o[0], w.Event.prototype), o.slice(1), this) }), e.stopImmediatePropagation());
                  },
              }))
            : void 0 === Q.get(e, t) && w.event.add(e, t, eb);
    }
    (w.event = {
        global: {},
        add: function (e, t, i, n, s) {
            var r,
                o,
                a,
                l,
                c,
                u,
                h,
                d,
                p,
                f,
                g,
                m = Q.get(e);
            if (U(e))
                for (
                    i.handler && ((i = (r = i).handler), (s = r.selector)),
                        s && w.find.matchesSelector(en, s),
                        i.guid || (i.guid = w.guid++),
                        (l = m.events) || (l = m.events = Object.create(null)),
                        (o = m.handle) ||
                            (o = m.handle = function (t) {
                                return w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                            }),
                        c = (t = (t || "").match(I) || [""]).length;
                    c--;

                )
                    (p = g = (a = e$.exec(t[c]) || [])[1]),
                        (f = (a[2] || "").split(".").sort()),
                        p &&
                            ((h = w.event.special[p] || {}),
                            (p = (s ? h.delegateType : h.bindType) || p),
                            (h = w.event.special[p] || {}),
                            (u = w.extend({ type: p, origType: g, data: n, handler: i, guid: i.guid, selector: s, needsContext: s && w.expr.match.needsContext.test(s), namespace: f.join(".") }, r)),
                            (d = l[p]) || (((d = l[p] = []).delegateCount = 0), (h.setup && !1 !== h.setup.call(e, n, f, o)) || (e.addEventListener && e.addEventListener(p, o))),
                            h.add && (h.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)),
                            s ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                            (w.event.global[p] = !0));
        },
        remove: function (e, t, i, n, s) {
            var r,
                o,
                a,
                l,
                c,
                u,
                h,
                d,
                p,
                f,
                g,
                m = Q.hasData(e) && Q.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(I) || [""]).length; c--; )
                    if (((p = g = (a = e$.exec(t[c]) || [])[1]), (f = (a[2] || "").split(".").sort()), p)) {
                        for (h = w.event.special[p] || {}, d = l[(p = (n ? h.delegateType : h.bindType) || p)] || [], a = a[2] && RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = r = d.length; r--; )
                            (u = d[r]),
                                (!s && g !== u.origType) ||
                                    (i && i.guid !== u.guid) ||
                                    (a && !a.test(u.namespace)) ||
                                    (n && n !== u.selector && ("**" !== n || !u.selector)) ||
                                    (d.splice(r, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(e, u));
                        o && !d.length && ((h.teardown && !1 !== h.teardown.call(e, f, m.handle)) || w.removeEvent(e, p, m.handle), delete l[p]);
                    } else for (p in l) w.event.remove(e, p + t[c], i, n, !0);
                w.isEmptyObject(l) && Q.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                i,
                n,
                s,
                r,
                o,
                a = Array(arguments.length),
                l = w.event.fix(e),
                c = (Q.get(this, "events") || Object.create(null))[l.type] || [],
                u = w.event.special[l.type] || {};
            for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
            if (((l.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, l))) {
                for (o = w.event.handlers.call(this, l, c), t = 0; (s = o[t++]) && !l.isPropagationStopped(); )
                    for (l.currentTarget = s.elem, i = 0; (r = s.handlers[i++]) && !l.isImmediatePropagationStopped(); )
                        (l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace)) ||
                            ((l.handleObj = r), (l.data = r.data), void 0 !== (n = ((w.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, a)) && !1 === (l.result = n) && (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result;
            }
        },
        handlers: function (e, t) {
            var i,
                n,
                s,
                r,
                o,
                a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button)) {
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [], o = {}, i = 0; i < l; i++) void 0 === o[(s = (n = t[i]).selector + " ")] && (o[s] = n.needsContext ? -1 < w(s, this).index(c) : w.find(s, this, null, [c]).length), o[s] && r.push(n);
                        r.length && a.push({ elem: c, handlers: r });
                    }
            }
            return (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a;
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: f(t)
                    ? function () {
                          if (this.originalEvent) return t(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[e];
                      },
                set: function (t) {
                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                },
            });
        },
        fix: function (e) {
            return e[w.expando] ? e : new w.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return ed.test(t.type) && t.click && k(t, "input") && e_(t, "click", eb), !1;
                },
                trigger: function (e) {
                    var t = this || e;
                    return ed.test(t.type) && t.click && k(t, "input") && e_(t, "click"), !0;
                },
                _default: function (e) {
                    var t = e.target;
                    return (ed.test(t.type) && t.click && k(t, "input") && Q.get(t, "click")) || k(t, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (w.removeEvent = function (e, t, i) {
            e.removeEventListener && e.removeEventListener(t, i);
        }),
        (w.Event = function (e, t) {
            if (!(this instanceof w.Event)) return new w.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? eb : ew),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && w.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[w.expando] = !0);
        }),
        (w.Event.prototype = {
            constructor: w.Event,
            isDefaultPrevented: ew,
            isPropagationStopped: ew,
            isImmediatePropagationStopped: ew,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = eb), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = eb), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = eb), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        w.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
            },
            w.event.addProp
        ),
        w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            w.event.special[e] = {
                setup: function () {
                    return e_(this, e, ex), !1;
                },
                trigger: function () {
                    return e_(this, e), !0;
                },
                _default: function (t) {
                    return Q.get(t.target, e);
                },
                delegateType: t,
            };
        }),
        w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
            w.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var i,
                        n = e.relatedTarget,
                        s = e.handleObj;
                    return (n && (n === this || w.contains(this, n))) || ((e.type = s.origType), (i = s.handler.apply(this, arguments)), (e.type = t)), i;
                },
            };
        }),
        w.fn.extend({
            on: function (e, t, i, n) {
                return eC(this, e, t, i, n);
            },
            one: function (e, t, i, n) {
                return eC(this, e, t, i, n, 1);
            },
            off: function (e, t, i) {
                var n, s;
                if (e && e.preventDefault && e.handleObj) return (n = e.handleObj), w(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof e) {
                    for (s in e) this.off(s, t, e[s]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((i = t), (t = void 0)),
                    !1 === i && (i = ew),
                    this.each(function () {
                        w.event.remove(this, e, i, t);
                    })
                );
            },
        });
    var eT = /<script|<style|<link/i,
        eE = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ek = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function eA(e, t) {
        return (k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0]) || e;
    }
    function eS(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function eD(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function eL(e, t) {
        var i, n, s, r, o, a;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (a = Q.get(e).events)) for (s in (Q.remove(t, "handle events"), a)) for (i = 0, n = a[s].length; i < n; i++) w.event.add(t, s, a[s][i]);
            Y.hasData(e) && ((r = Y.access(e)), (o = w.extend({}, r)), Y.set(t, o));
        }
    }
    function e9(e, t, i, n) {
        t = r(t);
        var s,
            o,
            a,
            l,
            c,
            u,
            h = 0,
            d = e.length,
            g = d - 1,
            m = t[0],
            v = f(m);
        if (v || (1 < d && "string" == typeof m && !p.checkClone && eE.test(m)))
            return e.each(function (s) {
                var r = e.eq(s);
                v && (t[0] = m.call(this, s, r.html())), e9(r, t, i, n);
            });
        if (d && ((o = (s = e8(t, e[0].ownerDocument, !1, e, n)).firstChild), 1 === s.childNodes.length && (s = o), o || n)) {
            for (l = (a = w.map(em(s, "script"), eS)).length; h < d; h++) (c = s), h !== g && ((c = w.clone(c, !0, !0)), l && w.merge(a, em(c, "script"))), i.call(e[h], c, h);
            if (l)
                for (u = a[a.length - 1].ownerDocument, w.map(a, eD), h = 0; h < l; h++)
                    (c = a[h]),
                        ef.test(c.type || "") &&
                            !Q.access(c, "globalEval") &&
                            w.contains(u, c) &&
                            (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && !c.noModule && w._evalUrl(c.src, { nonce: c.nonce || c.getAttribute("nonce") }, u) : y(c.textContent.replace(ek, ""), c, u));
        }
        return e;
    }
    function eN(e, t, i) {
        for (var n, s = t ? w.filter(t, e) : e, r = 0; null != (n = s[r]); r++) i || 1 !== n.nodeType || w.cleanData(em(n)), n.parentNode && (i && es(n) && ev(em(n, "script")), n.parentNode.removeChild(n));
        return e;
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, i) {
            var n,
                s,
                r,
                o,
                a,
                l,
                c,
                u = e.cloneNode(!0),
                h = es(e);
            if (!(p.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || w.isXMLDoc(e)))
                for (o = em(u), n = 0, s = (r = em(e)).length; n < s; n++)
                    (a = r[n]), "input" === (c = (l = o[n]).nodeName.toLowerCase()) && ed.test(a.type) ? (l.checked = a.checked) : ("input" !== c && "textarea" !== c) || (l.defaultValue = a.defaultValue);
            if (t) {
                if (i) for (r = r || em(e), o = o || em(u), n = 0, s = r.length; n < s; n++) eL(r[n], o[n]);
                else eL(e, u);
            }
            return 0 < (o = em(u, "script")).length && ev(o, !h && em(e, "script")), u;
        },
        cleanData: function (e) {
            for (var t, i, n, s = w.event.special, r = 0; void 0 !== (i = e[r]); r++)
                if (U(i)) {
                    if ((t = i[Q.expando])) {
                        if (t.events) for (n in t.events) s[n] ? w.event.remove(i, n) : w.removeEvent(i, n, t.handle);
                        i[Q.expando] = void 0;
                    }
                    i[Y.expando] && (i[Y.expando] = void 0);
                }
        },
    }),
        w.fn.extend({
            detach: function (e) {
                return eN(this, e, !0);
            },
            remove: function (e) {
                return eN(this, e);
            },
            text: function (e) {
                return B(
                    this,
                    function (e) {
                        return void 0 === e
                            ? w.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return e9(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || eA(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return e9(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = eA(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return e9(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return e9(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(em(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return w.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return B(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            i = 0,
                            n = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !eT.test(e) && !eg[(ep.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = w.htmlPrefilter(e);
                            try {
                                for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (w.cleanData(em(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (s) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = [];
                return e9(
                    this,
                    arguments,
                    function (t) {
                        var i = this.parentNode;
                        0 > w.inArray(this, e) && (w.cleanData(em(this)), i && i.replaceChild(t, this));
                    },
                    e
                );
            },
        }),
        w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
            w.fn[e] = function (e) {
                for (var i, n = [], s = w(e), r = s.length - 1, a = 0; a <= r; a++) (i = a === r ? this : this.clone(!0)), w(s[a])[t](i), o.apply(n, i.get());
                return this.pushStack(n);
            };
        });
    var eP = RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        eO = /^--/,
        eI = function (t) {
            var i = t.ownerDocument.defaultView;
            return (i && i.opener) || (i = e), i.getComputedStyle(t);
        },
        ej = function (e, t, i) {
            var n,
                s,
                r = {};
            for (s in t) (r[s] = e.style[s]), (e.style[s] = t[s]);
            for (s in ((n = i.call(e)), t)) e.style[s] = r[s];
            return n;
        },
        ez = RegExp(ei.join("|"), "i"),
        eH = "[\\x20\\t\\r\\n\\f]",
        eM = RegExp("^" + eH + "+|((?:^|[^\\\\])(?:\\\\.)*)" + eH + "+$", "g");
    function eq(e, t, i) {
        var n,
            s,
            r,
            o,
            a = eO.test(t),
            l = e.style;
        return (
            (i = i || eI(e)) &&
                ((o = i.getPropertyValue(t) || i[t]),
                a && o && (o = o.replace(eM, "$1") || void 0),
                "" !== o || es(e) || (o = w.style(e, t)),
                !p.pixelBoxStyles() && eP.test(o) && ez.test(t) && ((n = l.width), (s = l.minWidth), (r = l.maxWidth), (l.minWidth = l.maxWidth = l.width = o), (o = i.width), (l.width = n), (l.minWidth = s), (l.maxWidth = r))),
            void 0 !== o ? o + "" : o
        );
    }
    function eW(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    !(function () {
        function t() {
            if (u) {
                (c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    en.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                (n = "1%" !== t.top),
                    (l = 12 === i(t.marginLeft)),
                    (u.style.right = "60%"),
                    (o = 36 === i(t.right)),
                    (s = 36 === i(t.width)),
                    (u.style.position = "absolute"),
                    (r = 12 === i(u.offsetWidth / 3)),
                    en.removeChild(c),
                    (u = null);
            }
        }
        function i(e) {
            return Math.round(parseFloat(e));
        }
        var n,
            s,
            r,
            o,
            a,
            l,
            c = m.createElement("div"),
            u = m.createElement("div");
        u.style &&
            ((u.style.backgroundClip = "content-box"),
            (u.cloneNode(!0).style.backgroundClip = ""),
            (p.clearCloneStyle = "content-box" === u.style.backgroundClip),
            w.extend(p, {
                boxSizingReliable: function () {
                    return t(), s;
                },
                pixelBoxStyles: function () {
                    return t(), o;
                },
                pixelPosition: function () {
                    return t(), n;
                },
                reliableMarginLeft: function () {
                    return t(), l;
                },
                scrollboxSize: function () {
                    return t(), r;
                },
                reliableTrDimensions: function () {
                    var t, i, n, s;
                    return (
                        null == a &&
                            ((t = m.createElement("table")),
                            (i = m.createElement("tr")),
                            (n = m.createElement("div")),
                            (t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                            (i.style.cssText = "border:1px solid"),
                            (i.style.height = "1px"),
                            (n.style.height = "9px"),
                            (n.style.display = "block"),
                            en.appendChild(t).appendChild(i).appendChild(n),
                            (a = parseInt((s = e.getComputedStyle(i)).height, 10) + parseInt(s.borderTopWidth, 10) + parseInt(s.borderBottomWidth, 10) === i.offsetHeight),
                            en.removeChild(t)),
                        a
                    );
                },
            }));
    })();
    var eB = ["Webkit", "Moz", "ms"],
        e0 = m.createElement("div").style,
        eF = {};
    function eR(e) {
        return (
            w.cssProps[e] ||
            eF[e] ||
            (e in e0
                ? e
                : (eF[e] =
                      (function (e) {
                          for (var t = e[0].toUpperCase() + e.slice(1), i = eB.length; i--; ) if ((e = eB[i] + t) in e0) return e;
                      })(e) || e))
        );
    }
    var e1 = /^(none|table(?!-c[ea]).+)/,
        eV = { position: "absolute", visibility: "hidden", display: "block" },
        eX = { letterSpacing: "0", fontWeight: "400" };
    function eU(e, t, i) {
        var n = et.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t;
    }
    function eK(e, t, i, n, s, r) {
        var o = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; o < 4; o += 2)
            "margin" === i && (l += w.css(e, i + ei[o], !0, s)),
                n
                    ? ("content" === i && (l -= w.css(e, "padding" + ei[o], !0, s)), "margin" !== i && (l -= w.css(e, "border" + ei[o] + "Width", !0, s)))
                    : ((l += w.css(e, "padding" + ei[o], !0, s)), "padding" !== i ? (l += w.css(e, "border" + ei[o] + "Width", !0, s)) : (a += w.css(e, "border" + ei[o] + "Width", !0, s)));
        return !n && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - 0.5)) || 0), l;
    }
    function e3(e, t, i) {
        var n = eI(e),
            s = (!p.boxSizingReliable() || i) && "border-box" === w.css(e, "boxSizing", !1, n),
            r = s,
            o = eq(e, t, n),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (eP.test(o)) {
            if (!i) return o;
            o = "auto";
        }
        return (
            ((!p.boxSizingReliable() && s) || (!p.reliableTrDimensions() && k(e, "tr")) || "auto" === o || (!parseFloat(o) && "inline" === w.css(e, "display", !1, n))) &&
                e.getClientRects().length &&
                ((s = "border-box" === w.css(e, "boxSizing", !1, n)), (r = a in e) && (o = e[a])),
            (o = parseFloat(o) || 0) + eK(e, t, i || (s ? "border" : "content"), r, n, o) + "px"
        );
    }
    function eQ(e, t, i, n, s) {
        return new eQ.prototype.init(e, t, i, n, s);
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var i = eq(e, "opacity");
                        return "" === i ? "1" : i;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s,
                    r,
                    o,
                    a = X(t),
                    l = eO.test(t),
                    c = e.style;
                if ((l || (t = eR(a)), (o = w.cssHooks[t] || w.cssHooks[a]), void 0 === i)) return o && "get" in o && void 0 !== (s = o.get(e, !1, n)) ? s : c[t];
                "string" == (r = typeof i) && (s = et.exec(i)) && s[1] && ((i = ea(e, t, s)), (r = "number")),
                    null != i &&
                        i == i &&
                        ("number" !== r || l || (i += (s && s[3]) || (w.cssNumber[a] ? "" : "px")),
                        p.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                        (o && "set" in o && void 0 === (i = o.set(e, i, n))) || (l ? c.setProperty(t, i) : (c[t] = i)));
            }
        },
        css: function (e, t, i, n) {
            var s,
                r,
                o,
                a = X(t);
            return (
                eO.test(t) || (t = eR(a)),
                (o = w.cssHooks[t] || w.cssHooks[a]) && "get" in o && (s = o.get(e, !0, i)),
                void 0 === s && (s = eq(e, t, n)),
                "normal" === s && t in eX && (s = eX[t]),
                "" === i || i ? ((r = parseFloat(s)), !0 === i || isFinite(r) ? r || 0 : s) : s
            );
        },
    }),
        w.each(["height", "width"], function (e, t) {
            w.cssHooks[t] = {
                get: function (e, i, n) {
                    if (i)
                        return !e1.test(w.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? e3(e, t, n)
                            : ej(e, eV, function () {
                                  return e3(e, t, n);
                              });
                },
                set: function (e, i, n) {
                    var s,
                        r = eI(e),
                        o = !p.scrollboxSize() && "absolute" === r.position,
                        a = (o || n) && "border-box" === w.css(e, "boxSizing", !1, r),
                        l = n ? eK(e, t, n, a, r) : 0;
                    return (
                        a && o && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - eK(e, t, "border", !1, r) - 0.5)),
                        l && (s = et.exec(i)) && "px" !== (s[3] || "px") && ((e.style[t] = i), (i = w.css(e, t))),
                        eU(0, i, l)
                    );
                },
            };
        }),
        (w.cssHooks.marginLeft = eW(p.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(eq(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            ej(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (w.cssHooks[e + t] = {
                expand: function (i) {
                    for (var n = 0, s = {}, r = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[e + ei[n] + t] = r[n] || r[n - 2] || r[0];
                    return s;
                },
            }),
                "margin" !== e && (w.cssHooks[e + t].set = eU);
        }),
        w.fn.extend({
            css: function (e, t) {
                return B(
                    this,
                    function (e, t, i) {
                        var n,
                            s,
                            r = {},
                            o = 0;
                        if (Array.isArray(t)) {
                            for (n = eI(e), s = t.length; o < s; o++) r[t[o]] = w.css(e, t[o], !1, n);
                            return r;
                        }
                        return void 0 !== i ? w.style(e, t, i) : w.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((w.Tween = eQ).prototype = {
            constructor: eQ,
            init: function (e, t, i, n, s, r) {
                (this.elem = e), (this.prop = i), (this.easing = s || w.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = n), (this.unit = r || (w.cssNumber[i] ? "" : "px"));
            },
            cur: function () {
                var e = eQ.propHooks[this.prop];
                return e && e.get ? e.get(this) : eQ.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    i = eQ.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    i && i.set ? i.set(this) : eQ.propHooks._default.set(this),
                    this
                );
            },
        }).init.prototype = eQ.prototype),
        ((eQ.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                },
                set: function (e) {
                    w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 === e.elem.nodeType && (w.cssHooks[e.prop] || null != e.elem.style[eR(e.prop)]) ? w.style(e.elem, e.prop, e.now + e.unit) : (e.elem[e.prop] = e.now);
                },
            },
        }).scrollTop = eQ.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (w.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (w.fx = eQ.prototype.init),
        (w.fx.step = {});
    var eY,
        e2,
        e4,
        e7,
        eZ = /^(?:toggle|show|hide)$/,
        eG = /queueHooks$/;
    function e5() {
        return (
            e.setTimeout(function () {
                eY = void 0;
            }),
            (eY = Date.now())
        );
    }
    function e6(e, t) {
        var i,
            n = 0,
            s = { height: e };
        for (t = t ? 1 : 0; n < 4; n += 2 - t) s["margin" + (i = ei[n])] = s["padding" + i] = e;
        return t && (s.opacity = s.width = e), s;
    }
    function eJ(e, t, i) {
        for (var n, s = (te.tweeners[t] || []).concat(te.tweeners["*"]), r = 0, o = s.length; r < o; r++) if ((n = s[r].call(i, t, e))) return n;
    }
    function te(e, t, i) {
        var n,
            s,
            r = 0,
            o = te.prefilters.length,
            a = w.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (s) return !1;
                for (var t = eY || e5(), i = Math.max(0, c.startTime + c.duration - t), n = 1 - (i / c.duration || 0), r = 0, o = c.tweens.length; r < o; r++) c.tweens[r].run(n);
                return a.notifyWith(e, [c, n, i]), n < 1 && o ? i : (o || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
            },
            c = a.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: eY || e5(),
                duration: i.duration,
                tweens: [],
                createTween: function (t, i) {
                    var n = w.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(n), n;
                },
                stop: function (t) {
                    var i = 0,
                        n = t ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < n; i++) c.tweens[i].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
                },
            }),
            u = c.props;
        for (
            (function (e, t) {
                var i, n, s, r, o;
                for (i in e)
                    if (((s = t[(n = X(i))]), Array.isArray((r = e[i])) && ((s = r[1]), (r = e[i] = r[0])), i !== n && ((e[n] = r), delete e[i]), (o = w.cssHooks[n]) && ("expand" in o)))
                        for (i in ((r = o.expand(r)), delete e[n], r)) (i in e) || ((e[i] = r[i]), (t[i] = s));
                    else t[n] = s;
            })(u, c.opts.specialEasing);
            r < o;
            r++
        )
            if ((n = te.prefilters[r].call(c, e, u, c.opts))) return f(n.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
        return (
            w.map(u, eJ, c),
            f(c.opts.start) && c.opts.start.call(e, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            w.fx.timer(w.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
            c
        );
    }
    (w.Animation = w.extend(te, {
        tweeners: {
            "*": [
                function (e, t) {
                    var i = this.createTween(e, t);
                    return ea(i.elem, e, et.exec(t), i), i;
                },
            ],
        },
        tweener: function (e, t) {
            f(e) ? ((t = e), (e = ["*"])) : (e = e.match(I));
            for (var i, n = 0, s = e.length; n < s; n++) (i = e[n]), (te.tweeners[i] = te.tweeners[i] || []), te.tweeners[i].unshift(t);
        },
        prefilters: [
            function (e, t, i) {
                var n,
                    s,
                    r,
                    o,
                    a,
                    l,
                    c,
                    u,
                    h = "width" in t || "height" in t,
                    d = this,
                    p = {},
                    f = e.style,
                    g = e.nodeType && eo(e),
                    m = Q.get(e, "fxshow");
                for (n in (i.queue ||
                    (null == (o = w._queueHooks(e, "fx")).unqueued &&
                        ((o.unqueued = 0),
                        (a = o.empty.fire),
                        (o.empty.fire = function () {
                            o.unqueued || a();
                        })),
                    o.unqueued++,
                    d.always(function () {
                        d.always(function () {
                            o.unqueued--, w.queue(e, "fx").length || o.empty.fire();
                        });
                    })),
                t))
                    if (((s = t[n]), eZ.test(s))) {
                        if ((delete t[n], (r = r || "toggle" === s), s === (g ? "hide" : "show"))) {
                            if ("show" !== s || !m || void 0 === m[n]) continue;
                            g = !0;
                        }
                        p[n] = (m && m[n]) || w.style(e, n);
                    }
                if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(p))
                    for (n in (h &&
                        1 === e.nodeType &&
                        ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
                        null == (c = m && m.display) && (c = Q.get(e, "display")),
                        "none" === (u = w.css(e, "display")) && (c ? (u = c) : (ec([e], !0), (c = e.style.display || c), (u = w.css(e, "display")), ec([e]))),
                        ("inline" === u || ("inline-block" === u && null != c)) &&
                            "none" === w.css(e, "float") &&
                            (l ||
                                (d.done(function () {
                                    f.display = c;
                                }),
                                null == c && (c = "none" === (u = f.display) ? "" : u)),
                            (f.display = "inline-block"))),
                    i.overflow &&
                        ((f.overflow = "hidden"),
                        d.always(function () {
                            (f.overflow = i.overflow[0]), (f.overflowX = i.overflow[1]), (f.overflowY = i.overflow[2]);
                        })),
                    (l = !1),
                    p))
                        l ||
                            (m ? "hidden" in m && (g = m.hidden) : (m = Q.access(e, "fxshow", { display: c })),
                            r && (m.hidden = !g),
                            g && ec([e], !0),
                            d.done(function () {
                                for (n in (g || ec([e]), Q.remove(e, "fxshow"), p)) w.style(e, n, p[n]);
                            })),
                            (l = eJ(g ? m[n] : 0, n, d)),
                            n in m || ((m[n] = l.start), g && ((l.end = l.start), (l.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? te.prefilters.unshift(e) : te.prefilters.push(e);
        },
    })),
        (w.speed = function (e, t, i) {
            var n = e && "object" == typeof e ? w.extend({}, e) : { complete: i || (!i && t) || (f(e) && e), duration: e, easing: (i && t) || (t && !f(t) && t) };
            return (
                w.fx.off ? (n.duration = 0) : "number" != typeof n.duration && (n.duration in w.fx.speeds ? (n.duration = w.fx.speeds[n.duration]) : (n.duration = w.fx.speeds._default)),
                (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
                (n.old = n.complete),
                (n.complete = function () {
                    f(n.old) && n.old.call(this), n.queue && w.dequeue(this, n.queue);
                }),
                n
            );
        }),
        w.fn.extend({
            fadeTo: function (e, t, i, n) {
                return this.filter(eo).css("opacity", 0).show().end().animate({ opacity: t }, e, i, n);
            },
            animate: function (e, t, i, n) {
                var s = w.isEmptyObject(e),
                    r = w.speed(t, i, n),
                    o = function () {
                        var t = te(this, w.extend({}, e), r);
                        (s || Q.get(this, "finish")) && t.stop(!0);
                    };
                return (o.finish = o), s || !1 === r.queue ? this.each(o) : this.queue(r.queue, o);
            },
            stop: function (e, t, i) {
                var n = function (e) {
                    var t = e.stop;
                    delete e.stop, t(i);
                };
                return (
                    "string" != typeof e && ((i = t), (t = e), (e = void 0)),
                    t && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0,
                            s = null != e && e + "queueHooks",
                            r = w.timers,
                            o = Q.get(this);
                        if (s) o[s] && o[s].stop && n(o[s]);
                        else for (s in o) o[s] && o[s].stop && eG.test(s) && n(o[s]);
                        for (s = r.length; s--; ) r[s].elem !== this || (null != e && r[s].queue !== e) || (r[s].anim.stop(i), (t = !1), r.splice(s, 1));
                        (!t && i) || w.dequeue(this, e);
                    })
                );
            },
            finish: function (e) {
                return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                        var t,
                            i = Q.get(this),
                            n = i[e + "queue"],
                            s = i[e + "queueHooks"],
                            r = w.timers,
                            o = n ? n.length : 0;
                        for (i.finish = !0, w.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = r.length; t--; ) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; t < o; t++) n[t] && n[t].finish && n[t].finish.call(this);
                        delete i.finish;
                    })
                );
            },
        }),
        w.each(["toggle", "show", "hide"], function (e, t) {
            var i = w.fn[t];
            w.fn[t] = function (e, n, s) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(e6(t, !0), e, n, s);
            };
        }),
        w.each({ slideDown: e6("show"), slideUp: e6("hide"), slideToggle: e6("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
            w.fn[e] = function (e, i, n) {
                return this.animate(t, e, i, n);
            };
        }),
        (w.timers = []),
        (w.fx.tick = function () {
            var e,
                t = 0,
                i = w.timers;
            for (eY = Date.now(); t < i.length; t++) (e = i[t])() || i[t] !== e || i.splice(t--, 1);
            i.length || w.fx.stop(), (eY = void 0);
        }),
        (w.fx.timer = function (e) {
            w.timers.push(e), w.fx.start();
        }),
        (w.fx.interval = 13),
        (w.fx.start = function () {
            e2 ||
                ((e2 = !0),
                (function t() {
                    e2 && (!1 === m.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(t) : e.setTimeout(t, w.fx.interval), w.fx.tick());
                })());
        }),
        (w.fx.stop = function () {
            e2 = null;
        }),
        (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (w.fn.delay = function (t, i) {
            return (
                (t = (w.fx && w.fx.speeds[t]) || t),
                (i = i || "fx"),
                this.queue(i, function (i, n) {
                    var s = e.setTimeout(i, t);
                    n.stop = function () {
                        e.clearTimeout(s);
                    };
                })
            );
        }),
        (e4 = m.createElement("input")),
        (e7 = m.createElement("select").appendChild(m.createElement("option"))),
        (e4.type = "checkbox"),
        (p.checkOn = "" !== e4.value),
        (p.optSelected = e7.selected),
        ((e4 = m.createElement("input")).value = "t"),
        (e4.type = "radio"),
        (p.radioValue = "t" === e4.value);
    var tt,
        ti = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return B(this, w.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e);
            });
        },
    }),
        w.extend({
            attr: function (e, t, i) {
                var n,
                    s,
                    r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return void 0 === e.getAttribute
                        ? w.prop(e, t, i)
                        : ((1 === r && w.isXMLDoc(e)) || (s = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? tt : void 0)),
                          void 0 !== i
                              ? null === i
                                  ? void w.removeAttr(e, t)
                                  : s && "set" in s && void 0 !== (n = s.set(e, i, t))
                                  ? n
                                  : (e.setAttribute(t, i + ""), i)
                              : s && "get" in s && null !== (n = s.get(e, t))
                              ? n
                              : null == (n = w.find.attr(e, t))
                              ? void 0
                              : n);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!p.radioValue && "radio" === t && k(e, "input")) {
                            var i = e.value;
                            return e.setAttribute("type", t), i && (e.value = i), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var i,
                    n = 0,
                    s = t && t.match(I);
                if (s && 1 === e.nodeType) for (; (i = s[n++]); ) e.removeAttribute(i);
            },
        }),
        (tt = {
            set: function (e, t, i) {
                return !1 === t ? w.removeAttr(e, i) : e.setAttribute(i, i), i;
            },
        }),
        w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var i = ti[t] || w.find.attr;
            ti[t] = function (e, t, n) {
                var s,
                    r,
                    o = t.toLowerCase();
                return n || ((r = ti[o]), (ti[o] = s), (s = null != i(e, t, n) ? o : null), (ti[o] = r)), s;
            };
        });
    var tn = /^(?:input|select|textarea|button)$/i,
        ts = /^(?:a|area)$/i;
    function tr(e) {
        return (e.match(I) || []).join(" ");
    }
    function to(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function ta(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(I)) || [];
    }
    w.fn.extend({
        prop: function (e, t) {
            return B(this, w.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e];
            });
        },
    }),
        w.extend({
            prop: function (e, t, i) {
                var n,
                    s,
                    r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return (
                        (1 === r && w.isXMLDoc(e)) || ((t = w.propFix[t] || t), (s = w.propHooks[t])),
                        void 0 !== i ? (s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : (e[t] = i)) : s && "get" in s && null !== (n = s.get(e, t)) ? n : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = w.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : tn.test(e.nodeName) || (ts.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        p.optSelected ||
            (w.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            w.propFix[this.toLowerCase()] = this;
        }),
        w.fn.extend({
            addClass: function (e) {
                var t, i, n, s, r, o;
                return f(e)
                    ? this.each(function (t) {
                          w(this).addClass(e.call(this, t, to(this)));
                      })
                    : (t = ta(e)).length
                    ? this.each(function () {
                          if (((n = to(this)), (i = 1 === this.nodeType && " " + tr(n) + " "))) {
                              for (r = 0; r < t.length; r++) (s = t[r]), 0 > i.indexOf(" " + s + " ") && (i += s + " ");
                              n !== (o = tr(i)) && this.setAttribute("class", o);
                          }
                      })
                    : this;
            },
            removeClass: function (e) {
                var t, i, n, s, r, o;
                return f(e)
                    ? this.each(function (t) {
                          w(this).removeClass(e.call(this, t, to(this)));
                      })
                    : arguments.length
                    ? (t = ta(e)).length
                        ? this.each(function () {
                              if (((n = to(this)), (i = 1 === this.nodeType && " " + tr(n) + " "))) {
                                  for (r = 0; r < t.length; r++) for (s = t[r]; -1 < i.indexOf(" " + s + " "); ) i = i.replace(" " + s + " ", " ");
                                  n !== (o = tr(i)) && this.setAttribute("class", o);
                              }
                          })
                        : this
                    : this.attr("class", "");
            },
            toggleClass: function (e, t) {
                var i,
                    n,
                    s,
                    r,
                    o = typeof e,
                    a = "string" === o || Array.isArray(e);
                return f(e)
                    ? this.each(function (i) {
                          w(this).toggleClass(e.call(this, i, to(this), t), t);
                      })
                    : "boolean" == typeof t && a
                    ? t
                        ? this.addClass(e)
                        : this.removeClass(e)
                    : ((i = ta(e)),
                      this.each(function () {
                          if (a) for (r = w(this), s = 0; s < i.length; s++) (n = i[s]), r.hasClass(n) ? r.removeClass(n) : r.addClass(n);
                          else (void 0 !== e && "boolean" !== o) || ((n = to(this)) && Q.set(this, "__className__", n), this.setAttribute && this.setAttribute("class", n || !1 === e ? "" : Q.get(this, "__className__") || ""));
                      }));
            },
            hasClass: function (e) {
                var t,
                    i,
                    n = 0;
                for (t = " " + e + " "; (i = this[n++]); ) if (1 === i.nodeType && -1 < (" " + tr(to(i)) + " ").indexOf(t)) return !0;
                return !1;
            },
        });
    var tl = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t,
                i,
                n,
                s = this[0];
            return arguments.length
                ? ((n = f(e)),
                  this.each(function (i) {
                      var s;
                      1 === this.nodeType &&
                          (null == (s = n ? e.call(this, i, w(this).val()) : e)
                              ? (s = "")
                              : "number" == typeof s
                              ? (s += "")
                              : Array.isArray(s) &&
                                (s = w.map(s, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, s, "value")) || (this.value = s));
                  }))
                : s
                ? (t = w.valHooks[s.type] || w.valHooks[s.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(s, "value"))
                    ? i
                    : "string" == typeof (i = s.value)
                    ? i.replace(tl, "")
                    : null == i
                    ? ""
                    : i
                : void 0;
        },
    }),
        w.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = w.find.attr(e, "value");
                        return null != t ? t : tr(w.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            i,
                            n,
                            s = e.options,
                            r = e.selectedIndex,
                            o = "select-one" === e.type,
                            a = o ? null : [],
                            l = o ? r + 1 : s.length;
                        for (n = r < 0 ? l : o ? r : 0; n < l; n++)
                            if (((i = s[n]).selected || n === r) && !i.disabled && (!i.parentNode.disabled || !k(i.parentNode, "optgroup"))) {
                                if (((t = w(i).val()), o)) return t;
                                a.push(t);
                            }
                        return a;
                    },
                    set: function (e, t) {
                        for (var i, n, s = e.options, r = w.makeArray(t), o = s.length; o--; ) ((n = s[o]).selected = -1 < w.inArray(w.valHooks.option.get(n), r)) && (i = !0);
                        return i || (e.selectedIndex = -1), r;
                    },
                },
            },
        }),
        w.each(["radio", "checkbox"], function () {
            (w.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = -1 < w.inArray(w(e).val(), t));
                },
            }),
                p.checkOn ||
                    (w.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
        }),
        (p.focusin = "onfocusin" in e);
    var tc = /^(?:focusinfocus|focusoutblur)$/,
        tu = function (e) {
            e.stopPropagation();
        };
    w.extend(w.event, {
        trigger: function (t, i, n, s) {
            var r,
                o,
                a,
                l,
                c,
                h,
                d,
                p,
                v = [n || m],
                y = u.call(t, "type") ? t.type : t,
                $ = u.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
                ((o = p = a = n = n || m),
                3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !tc.test(y + w.event.triggered) &&
                    (-1 < y.indexOf(".") && ((y = ($ = y.split(".")).shift()), $.sort()),
                    (c = 0 > y.indexOf(":") && "on" + y),
                    ((t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = s ? 2 : 3),
                    (t.namespace = $.join(".")),
                    (t.rnamespace = t.namespace ? RegExp("(^|\\.)" + $.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (t.result = void 0),
                    t.target || (t.target = n),
                    (i = null == i ? [t] : w.makeArray(i, [t])),
                    (d = w.event.special[y] || {}),
                    s || !d.trigger || !1 !== d.trigger.apply(n, i)))
            ) {
                if (!s && !d.noBubble && !g(n)) {
                    for (l = d.delegateType || y, tc.test(l + y) || (o = o.parentNode); o; o = o.parentNode) v.push(o), (a = o);
                    a === (n.ownerDocument || m) && v.push(a.defaultView || a.parentWindow || e);
                }
                for (r = 0; (o = v[r++]) && !t.isPropagationStopped(); )
                    (p = o),
                        (t.type = 1 < r ? l : d.bindType || y),
                        (h = (Q.get(o, "events") || Object.create(null))[t.type] && Q.get(o, "handle")) && h.apply(o, i),
                        (h = c && o[c]) && h.apply && U(o) && ((t.result = h.apply(o, i)), !1 === t.result && t.preventDefault());
                return (
                    (t.type = y),
                    s ||
                        t.isDefaultPrevented() ||
                        (d._default && !1 !== d._default.apply(v.pop(), i)) ||
                        !U(n) ||
                        (c &&
                            f(n[y]) &&
                            !g(n) &&
                            ((a = n[c]) && (n[c] = null),
                            (w.event.triggered = y),
                            t.isPropagationStopped() && p.addEventListener(y, tu),
                            n[y](),
                            t.isPropagationStopped() && p.removeEventListener(y, tu),
                            (w.event.triggered = void 0),
                            a && (n[c] = a))),
                    t.result
                );
            }
        },
        simulate: function (e, t, i) {
            var n = w.extend(new w.Event(), i, { type: e, isSimulated: !0 });
            w.event.trigger(n, null, t);
        },
    }),
        w.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    w.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var i = this[0];
                if (i) return w.event.trigger(e, t, i, !0);
            },
        }),
        p.focusin ||
            w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var i = function (e) {
                    w.event.simulate(t, e.target, w.event.fix(e));
                };
                w.event.special[t] = {
                    setup: function () {
                        var n = this.ownerDocument || this.document || this,
                            s = Q.access(n, t);
                        s || n.addEventListener(e, i, !0), Q.access(n, t, (s || 0) + 1);
                    },
                    teardown: function () {
                        var n = this.ownerDocument || this.document || this,
                            s = Q.access(n, t) - 1;
                        s ? Q.access(n, t, s) : (n.removeEventListener(e, i, !0), Q.remove(n, t));
                    },
                };
            });
    var th = e.location,
        td = { guid: Date.now() },
        tp = /\?/;
    w.parseXML = function (t) {
        var i, n;
        if (!t || "string" != typeof t) return null;
        try {
            i = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (s) {}
        return (
            (n = i && i.getElementsByTagName("parsererror")[0]),
            (i && !n) ||
                w.error(
                    "Invalid XML: " +
                        (n
                            ? w
                                  .map(n.childNodes, function (e) {
                                      return e.textContent;
                                  })
                                  .join("\n")
                            : t)
                ),
            i
        );
    };
    var tf = /\[\]$/,
        tg = /\r?\n/g,
        tm = /^(?:submit|button|image|reset|file)$/i,
        tv = /^(?:input|select|textarea|keygen)/i;
    function ty(e, t, i, n) {
        var s;
        if (Array.isArray(t))
            w.each(t, function (t, s) {
                i || tf.test(e) ? n(e, s) : ty(e + "[" + ("object" == typeof s && null != s ? t : "") + "]", s, i, n);
            });
        else if (i || "object" !== $(t)) n(e, t);
        else for (s in t) ty(e + "[" + s + "]", t[s], i, n);
    }
    (w.param = function (e, t) {
        var i,
            n = [],
            s = function (e, t) {
                var i = f(t) ? t() : t;
                n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i);
            };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
            w.each(e, function () {
                s(this.name, this.value);
            });
        else for (i in e) ty(i, e[i], t, s);
        return n.join("&");
    }),
        w.fn.extend({
            serialize: function () {
                return w.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = w.prop(this, "elements");
                    return e ? w.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !w(this).is(":disabled") && tv.test(this.nodeName) && !tm.test(e) && (this.checked || !ed.test(e));
                    })
                    .map(function (e, t) {
                        var i = w(this).val();
                        return null == i
                            ? null
                            : Array.isArray(i)
                            ? w.map(i, function (e) {
                                  return { name: t.name, value: e.replace(tg, "\r\n") };
                              })
                            : { name: t.name, value: i.replace(tg, "\r\n") };
                    })
                    .get();
            },
        });
    var t8 = /%20/g,
        t$ = /#.*$/,
        tb = /([?&])_=[^&]*/,
        tw = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        tx = /^(?:GET|HEAD)$/,
        tC = /^\/\//,
        t_ = {},
        tT = {},
        tE = "*/".concat("*"),
        tk = m.createElement("a");
    function tA(e) {
        return function (t, i) {
            "string" != typeof t && ((i = t), (t = "*"));
            var n,
                s = 0,
                r = t.toLowerCase().match(I) || [];
            if (f(i)) for (; (n = r[s++]); ) "+" === n[0] ? (e[(n = n.slice(1) || "*")] = e[n] || []).unshift(i) : (e[n] = e[n] || []).push(i);
        };
    }
    function tS(e, t, i, n) {
        var s = {},
            r = e === tT;
        function o(a) {
            var l;
            return (
                (s[a] = !0),
                w.each(e[a] || [], function (e, a) {
                    var c = a(t, i, n);
                    return "string" != typeof c || r || s[c] ? (r ? !(l = c) : void 0) : (t.dataTypes.unshift(c), o(c), !1);
                }),
                l
            );
        }
        return o(t.dataTypes[0]) || (!s["*"] && o("*"));
    }
    function tD(e, t) {
        var i,
            n,
            s = w.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((s[i] ? e : n || (n = {}))[i] = t[i]);
        return n && w.extend(!0, e, n), e;
    }
    (tk.href = th.href),
        w.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: th.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(th.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": tE, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? tD(tD(e, w.ajaxSettings), t) : tD(w.ajaxSettings, e);
            },
            ajaxPrefilter: tA(t_),
            ajaxTransport: tA(tT),
            ajax: function (t, i) {
                "object" == typeof t && ((i = t), (t = void 0)), (i = i || {});
                var n,
                    s,
                    r,
                    o,
                    a,
                    l,
                    c,
                    u,
                    h,
                    d,
                    p = w.ajaxSetup({}, i),
                    f = p.context || p,
                    g = p.context && (f.nodeType || f.jquery) ? w(f) : w.event,
                    v = w.Deferred(),
                    y = w.Callbacks("once memory"),
                    $ = p.statusCode || {},
                    b = {},
                    x = {},
                    C = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (c) {
                                if (!o) for (o = {}; (t = tw.exec(r)); ) o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = o[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return c ? r : null;
                        },
                        setRequestHeader: function (e, t) {
                            return null == c && (b[(e = x[e.toLowerCase()] = x[e.toLowerCase()] || e)] = t), this;
                        },
                        overrideMimeType: function (e) {
                            return null == c && (p.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e) {
                                if (c) _.always(e[_.status]);
                                else for (t in e) $[t] = [$[t], e[t]];
                            }
                            return this;
                        },
                        abort: function (e) {
                            var t = e || C;
                            return n && n.abort(t), k(0, t), this;
                        },
                    };
                if (
                    (v.promise(_),
                    (p.url = ((t || p.url || th.href) + "").replace(tC, th.protocol + "//")),
                    (p.type = i.method || i.type || p.method || p.type),
                    (p.dataTypes = (p.dataType || "*").toLowerCase().match(I) || [""]),
                    null == p.crossDomain)
                ) {
                    l = m.createElement("a");
                    try {
                        (l.href = p.url), (l.href = l.href), (p.crossDomain = tk.protocol + "//" + tk.host != l.protocol + "//" + l.host);
                    } catch (T) {
                        p.crossDomain = !0;
                    }
                }
                if ((p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), tS(t_, p, i, _), c)) return _;
                for (h in ((u = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
                (p.type = p.type.toUpperCase()),
                (p.hasContent = !tx.test(p.type)),
                (s = p.url.replace(t$, "")),
                p.hasContent
                    ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(t8, "+"))
                    : ((d = p.url.slice(s.length)),
                      p.data && (p.processData || "string" == typeof p.data) && ((s += (tp.test(s) ? "&" : "?") + p.data), delete p.data),
                      !1 === p.cache && ((s = s.replace(tb, "$1")), (d = (tp.test(s) ? "&" : "?") + "_=" + td.guid++ + d)),
                      (p.url = s + d)),
                p.ifModified && (w.lastModified[s] && _.setRequestHeader("If-Modified-Since", w.lastModified[s]), w.etag[s] && _.setRequestHeader("If-None-Match", w.etag[s])),
                ((p.data && p.hasContent && !1 !== p.contentType) || i.contentType) && _.setRequestHeader("Content-Type", p.contentType),
                _.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + tE + "; q=0.01" : "") : p.accepts["*"]),
                p.headers))
                    _.setRequestHeader(h, p.headers[h]);
                if (p.beforeSend && (!1 === p.beforeSend.call(f, _, p) || c)) return _.abort();
                if (((C = "abort"), y.add(p.complete), _.done(p.success), _.fail(p.error), (n = tS(tT, p, i, _)))) {
                    if (((_.readyState = 1), u && g.trigger("ajaxSend", [_, p]), c)) return _;
                    p.async &&
                        0 < p.timeout &&
                        (a = e.setTimeout(function () {
                            _.abort("timeout");
                        }, p.timeout));
                    try {
                        (c = !1), n.send(b, k);
                    } catch (E) {
                        if (c) throw E;
                        k(-1, E);
                    }
                } else k(-1, "No Transport");
                function k(t, i, o, l) {
                    var h,
                        d,
                        m,
                        b,
                        x,
                        C = i;
                    c ||
                        ((c = !0),
                        a && e.clearTimeout(a),
                        (n = void 0),
                        (r = l || ""),
                        (_.readyState = 0 < t ? 4 : 0),
                        (h = (200 <= t && t < 300) || 304 === t),
                        o &&
                            (b = (function (e, t, i) {
                                for (var n, s, r, o, a = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (n) {
                                    for (s in a)
                                        if (a[s] && a[s].test(n)) {
                                            l.unshift(s);
                                            break;
                                        }
                                }
                                if (l[0] in i) r = l[0];
                                else {
                                    for (s in i) {
                                        if (!l[0] || e.converters[s + " " + l[0]]) {
                                            r = s;
                                            break;
                                        }
                                        o || (o = s);
                                    }
                                    r = r || o;
                                }
                                if (r) return r !== l[0] && l.unshift(r), i[r];
                            })(p, _, o)),
                        !h && -1 < w.inArray("script", p.dataTypes) && 0 > w.inArray("json", p.dataTypes) && (p.converters["text script"] = function () {}),
                        (b = (function (e, t, i, n) {
                            var s,
                                r,
                                o,
                                a,
                                l,
                                c = {},
                                u = e.dataTypes.slice();
                            if (u[1]) for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
                            for (r = u.shift(); r; )
                                if ((e.responseFields[r] && (i[e.responseFields[r]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = r), (r = u.shift()))) {
                                    if ("*" === r) r = l;
                                    else if ("*" !== l && l !== r) {
                                        if (!(o = c[l + " " + r] || c["* " + r])) {
                                            for (s in c)
                                                if ((a = s.split(" "))[1] === r && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                    !0 === o ? (o = c[s]) : !0 !== c[s] && ((r = a[0]), u.unshift(a[1]));
                                                    break;
                                                }
                                        }
                                        if (!0 !== o) {
                                            if (o && e.throws) t = o(t);
                                            else
                                                try {
                                                    t = o(t);
                                                } catch (h) {
                                                    return { state: "parsererror", error: o ? h : "No conversion from " + l + " to " + r };
                                                }
                                        }
                                    }
                                }
                            return { state: "success", data: t };
                        })(p, b, _, h)),
                        h
                            ? (p.ifModified && ((x = _.getResponseHeader("Last-Modified")) && (w.lastModified[s] = x), (x = _.getResponseHeader("etag")) && (w.etag[s] = x)),
                              204 === t || "HEAD" === p.type ? (C = "nocontent") : 304 === t ? (C = "notmodified") : ((C = b.state), (d = b.data), (h = !(m = b.error))))
                            : ((m = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
                        (_.status = t),
                        (_.statusText = (i || C) + ""),
                        h ? v.resolveWith(f, [d, C, _]) : v.rejectWith(f, [_, C, m]),
                        _.statusCode($),
                        ($ = void 0),
                        u && g.trigger(h ? "ajaxSuccess" : "ajaxError", [_, p, h ? d : m]),
                        y.fireWith(f, [_, C]),
                        u && (g.trigger("ajaxComplete", [_, p]), --w.active || w.event.trigger("ajaxStop")));
                }
                return _;
            },
            getJSON: function (e, t, i) {
                return w.get(e, t, i, "json");
            },
            getScript: function (e, t) {
                return w.get(e, void 0, t, "script");
            },
        }),
        w.each(["get", "post"], function (e, t) {
            w[t] = function (e, i, n, s) {
                return f(i) && ((s = s || n), (n = i), (i = void 0)), w.ajax(w.extend({ url: e, type: t, dataType: s, data: i, success: n }, w.isPlainObject(e) && e));
            };
        }),
        w.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
        }),
        (w._evalUrl = function (e, t, i) {
            return w.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                    w.globalEval(e, t, i);
                },
            });
        }),
        w.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (f(e) && (e = e.call(this[0])),
                        (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (e) {
                return f(e)
                    ? this.each(function (t) {
                          w(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                          var t = w(this),
                              i = t.contents();
                          i.length ? i.wrapAll(e) : t.append(e);
                      });
            },
            wrap: function (e) {
                var t = f(e);
                return this.each(function (i) {
                    w(this).wrapAll(t ? e.call(this, i) : e);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            w(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (w.expr.pseudos.hidden = function (e) {
            return !w.expr.pseudos.visible(e);
        }),
        (w.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (w.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest();
            } catch (t) {}
        });
    var tL = { 0: 200, 1223: 204 },
        t9 = w.ajaxSettings.xhr();
    (p.cors = !!t9 && "withCredentials" in t9),
        (p.ajax = t9 = !!t9),
        w.ajaxTransport(function (t) {
            var i, n;
            if (p.cors || (t9 && !t.crossDomain))
                return {
                    send: function (s, r) {
                        var o,
                            a = t.xhr();
                        if ((a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (o in t.xhrFields) a[o] = t.xhrFields[o];
                        for (o in (t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s)) a.setRequestHeader(o, s[o]);
                        (i = function (e) {
                            return function () {
                                i &&
                                    ((i = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                                    "abort" === e
                                        ? a.abort()
                                        : "error" === e
                                        ? "number" != typeof a.status
                                            ? r(0, "error")
                                            : r(a.status, a.statusText)
                                        : r(tL[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
                            };
                        }),
                            (a.onload = i()),
                            (n = a.onerror = a.ontimeout = i("error")),
                            void 0 !== a.onabort
                                ? (a.onabort = n)
                                : (a.onreadystatechange = function () {
                                      4 === a.readyState &&
                                          e.setTimeout(function () {
                                              i && n();
                                          });
                                  }),
                            (i = i("abort"));
                        try {
                            a.send((t.hasContent && t.data) || null);
                        } catch (l) {
                            if (i) throw l;
                        }
                    },
                    abort: function () {
                        i && i();
                    },
                };
        }),
        w.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        w.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return w.globalEval(e), e;
                },
            },
        }),
        w.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        w.ajaxTransport("script", function (e) {
            var t, i;
            if (e.crossDomain || e.scriptAttrs)
                return {
                    send: function (n, s) {
                        (t = w("<script>")
                            .attr(e.scriptAttrs || {})
                            .prop({ charset: e.scriptCharset, src: e.url })
                            .on(
                                "load error",
                                (i = function (e) {
                                    t.remove(), (i = null), e && s("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            m.head.appendChild(t[0]);
                    },
                    abort: function () {
                        i && i();
                    },
                };
        });
    var tN,
        tP = [],
        tO = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = tP.pop() || w.expando + "_" + td.guid++;
            return (this[e] = !0), e;
        },
    }),
        w.ajaxPrefilter("json jsonp", function (t, i, n) {
            var s,
                r,
                o,
                a = !1 !== t.jsonp && (tO.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && tO.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0])
                return (
                    (s = t.jsonpCallback = f(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                    a ? (t[a] = t[a].replace(tO, "$1" + s)) : !1 !== t.jsonp && (t.url += (tp.test(t.url) ? "&" : "?") + t.jsonp + "=" + s),
                    (t.converters["script json"] = function () {
                        return o || w.error(s + " was not called"), o[0];
                    }),
                    (t.dataTypes[0] = "json"),
                    (r = e[s]),
                    (e[s] = function () {
                        o = arguments;
                    }),
                    n.always(function () {
                        void 0 === r ? w(e).removeProp(s) : (e[s] = r), t[s] && ((t.jsonpCallback = i.jsonpCallback), tP.push(s)), o && f(r) && r(o[0]), (o = r = void 0);
                    }),
                    "script"
                );
        }),
        (p.createHTMLDocument = (((tN = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === tN.childNodes.length)),
        (w.parseHTML = function (e, t, i) {
            var n, s, r;
            return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((i = t), (t = !1)),
                  t || (p.createHTMLDocument ? (((n = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href), t.head.appendChild(n)) : (t = m)),
                  (r = !i && []),
                  (s = A.exec(e)) ? [t.createElement(s[1])] : ((s = e8([e], t, r)), r && r.length && w(r).remove(), w.merge([], s.childNodes)));
        }),
        (w.fn.load = function (e, t, i) {
            var n,
                s,
                r,
                o = this,
                a = e.indexOf(" ");
            return (
                -1 < a && ((n = tr(e.slice(a))), (e = e.slice(0, a))),
                f(t) ? ((i = t), (t = void 0)) : t && "object" == typeof t && (s = "POST"),
                0 < o.length &&
                    w
                        .ajax({ url: e, type: s || "GET", dataType: "html", data: t })
                        .done(function (e) {
                            (r = arguments), o.html(n ? w("<div>").append(w.parseHTML(e)).find(n) : e);
                        })
                        .always(
                            i &&
                                function (e, t) {
                                    o.each(function () {
                                        i.apply(this, r || [e.responseText, t, e]);
                                    });
                                }
                        ),
                this
            );
        }),
        (w.expr.pseudos.animated = function (e) {
            return w.grep(w.timers, function (t) {
                return e === t.elem;
            }).length;
        }),
        (w.offset = {
            setOffset: function (e, t, i) {
                var n,
                    s,
                    r,
                    o,
                    a,
                    l,
                    c = w.css(e, "position"),
                    u = w(e),
                    h = {};
                "static" === c && (e.style.position = "relative"),
                    (a = u.offset()),
                    (r = w.css(e, "top")),
                    (l = w.css(e, "left")),
                    ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? ((o = (n = u.position()).top), (s = n.left)) : ((o = parseFloat(r) || 0), (s = parseFloat(l) || 0)),
                    f(t) && (t = t.call(e, i, w.extend({}, a))),
                    null != t.top && (h.top = t.top - a.top + o),
                    null != t.left && (h.left = t.left - a.left + s),
                    "using" in t ? t.using.call(e, h) : u.css(h);
            },
        }),
        w.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e
                        ? this
                        : this.each(function (t) {
                              w.offset.setOffset(this, e, t);
                          });
                var t,
                    i,
                    n = this[0];
                return n ? (n.getClientRects().length ? ((t = n.getBoundingClientRect()), (i = n.ownerDocument.defaultView), { top: t.top + i.pageYOffset, left: t.left + i.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        i,
                        n = this[0],
                        s = { top: 0, left: 0 };
                    if ("fixed" === w.css(n, "position")) t = n.getBoundingClientRect();
                    else {
                        for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === w.css(e, "position"); ) e = e.parentNode;
                        e && e !== n && 1 === e.nodeType && (((s = w(e).offset()).top += w.css(e, "borderTopWidth", !0)), (s.left += w.css(e, "borderLeftWidth", !0)));
                    }
                    return { top: t.top - s.top - w.css(n, "marginTop", !0), left: t.left - s.left - w.css(n, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === w.css(e, "position"); ) e = e.offsetParent;
                    return e || en;
                });
            },
        }),
        w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
            var i = "pageYOffset" === t;
            w.fn[e] = function (n) {
                return B(
                    this,
                    function (e, n, s) {
                        var r;
                        if ((g(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === s)) return r ? r[t] : e[n];
                        r ? r.scrollTo(i ? r.pageXOffset : s, i ? s : r.pageYOffset) : (e[n] = s);
                    },
                    e,
                    n,
                    arguments.length
                );
            };
        }),
        w.each(["top", "left"], function (e, t) {
            w.cssHooks[t] = eW(p.pixelPosition, function (e, i) {
                if (i) return (i = eq(e, t)), eP.test(i) ? w(e).position()[t] + "px" : i;
            });
        }),
        w.each({ Height: "height", Width: "width" }, function (e, t) {
            w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (i, n) {
                w.fn[n] = function (s, r) {
                    var o = arguments.length && (i || "boolean" != typeof s),
                        a = i || (!0 === s || !0 === r ? "margin" : "border");
                    return B(
                        this,
                        function (t, i, s) {
                            var r;
                            return g(t)
                                ? 0 === n.indexOf("outer")
                                    ? t["inner" + e]
                                    : t.document.documentElement["client" + e]
                                : 9 === t.nodeType
                                ? ((r = t.documentElement), Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e]))
                                : void 0 === s
                                ? w.css(t, i, a)
                                : w.style(t, i, s, a);
                        },
                        t,
                        o ? s : void 0,
                        o
                    );
                };
            });
        }),
        w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            w.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        w.fn.extend({
            bind: function (e, t, i) {
                return this.on(e, null, t, i);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, i, n) {
                return this.on(t, e, i, n);
            },
            undelegate: function (e, t, i) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i);
            },
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            w.fn[t] = function (e, i) {
                return 0 < arguments.length ? this.on(t, null, e, i) : this.trigger(t);
            };
        });
    var tI = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    (w.proxy = function (e, t) {
        var i, n, r;
        if (("string" == typeof t && ((i = e[t]), (t = e), (e = i)), f(e)))
            return (
                (n = s.call(arguments, 2)),
                ((r = function () {
                    return e.apply(t || this, n.concat(s.call(arguments)));
                }).guid = e.guid = e.guid || w.guid++),
                r
            );
    }),
        (w.holdReady = function (e) {
            e ? w.readyWait++ : w.ready(!0);
        }),
        (w.isArray = Array.isArray),
        (w.parseJSON = JSON.parse),
        (w.nodeName = k),
        (w.isFunction = f),
        (w.isWindow = g),
        (w.camelCase = X),
        (w.type = $),
        (w.now = Date.now),
        (w.isNumeric = function (e) {
            var t = w.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        (w.trim = function (e) {
            return null == e ? "" : (e + "").replace(tI, "$1");
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return w;
            });
    var tj = e.jQuery,
        tz = e.$;
    return (
        (w.noConflict = function (t) {
            return e.$ === w && (e.$ = tz), t && e.jQuery === w && (e.jQuery = tj), w;
        }),
        void 0 === t && (e.jQuery = e.$ = w),
        w
    );
}),
    (function (e, t) {
        ("undefined" == typeof exports ? "undefined" : _typeof(exports)) === "object" && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.LazyLoad = t());
    })(this, function () {
        "use strict";
        var e = "undefined" != typeof window,
            t = (e && !("onscroll" in window)) || ("undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            i = e && "IntersectionObserver" in window,
            n = e && "classList" in document.createElement("p"),
            s = {
                elements_selector: "img",
                container: t || e ? document : null,
                threshold: 300,
                thresholds: null,
                data_src: "src",
                data_srcset: "srcset",
                data_sizes: "sizes",
                data_bg: "bg",
                class_loading: "loading",
                class_loaded: "loaded",
                class_error: "error",
                load_delay: 0,
                auto_unobserve: !0,
                callback_enter: null,
                callback_exit: null,
                callback_reveal: null,
                callback_loaded: null,
                callback_error: null,
                callback_finish: null,
                use_native: !1,
            },
            r = function e(t, i) {
                var n,
                    s = "LazyLoad::Initialized",
                    r = new t(i);
                try {
                    n = new CustomEvent(s, { detail: { instance: r } });
                } catch (o) {
                    (n = document.createEvent("CustomEvent")).initCustomEvent(s, !1, !1, { instance: r });
                }
                window.dispatchEvent(n);
            },
            o = "data-",
            a = "was-processed",
            l = "ll-timeout",
            c = "true",
            u = function e(t, i) {
                return t.getAttribute(o + i);
            },
            h = function e(t, i, n) {
                var s = o + i;
                if (null === n) {
                    t.removeAttribute(s);
                    return;
                }
                t.setAttribute(s, n);
            },
            d = function e(t) {
                return u(t, a) === c;
            },
            p = function e(t, i) {
                return h(t, l, i);
            },
            f = function e(t) {
                return u(t, l);
            },
            g = function e(t, i) {
                t && t(i);
            },
            m = function e(t, i) {
                (t._loadingCount += i), 0 === t._elements.length && 0 === t._loadingCount && g(t._settings.callback_finish);
            },
            v = function e(t) {
                for (var i, n = [], s = 0; (i = t.children[s]); s += 1) "SOURCE" === i.tagName && n.push(i);
                return n;
            },
            y = function e(t, i, n) {
                n && t.setAttribute(i, n);
            },
            $ = function e(t, i) {
                y(t, "sizes", u(t, i.data_sizes)), y(t, "srcset", u(t, i.data_srcset)), y(t, "src", u(t, i.data_src));
            },
            b = function e(t, i) {
                var n = u(t, i.data_src),
                    s = u(t, i.data_bg);
                n && (t.style.backgroundImage = 'url("'.concat(n, '")')), s && (t.style.backgroundImage = s);
            },
            w = {
                IMG: function e(t, i) {
                    var n = t.parentNode;
                    n &&
                        "PICTURE" === n.tagName &&
                        v(n).forEach(function (e) {
                            $(e, i);
                        }),
                        $(t, i);
                },
                IFRAME: function e(t, i) {
                    y(t, "src", u(t, i.data_src));
                },
                VIDEO: function e(t, i) {
                    v(t).forEach(function (e) {
                        y(e, "src", u(e, i.data_src));
                    }),
                        y(t, "src", u(t, i.data_src)),
                        t.load();
                },
            },
            x = function e(t, i) {
                var n,
                    s,
                    r = i._settings,
                    o = w[t.tagName];
                if (o) {
                    o(t, r),
                        m(i, 1),
                        (i._elements =
                            ((n = i._elements),
                            (s = t),
                            n.filter(function (e) {
                                return e !== s;
                            })));
                    return;
                }
                b(t, r);
            },
            C = function e(t, i) {
                if (n) {
                    t.classList.add(i);
                    return;
                }
                t.className += (t.className ? " " : "") + i;
            },
            _ = function e(t, i) {
                if (n) {
                    t.classList.remove(i);
                    return;
                }
                t.className = t.className
                    .replace(RegExp("(^|\\s+)" + i + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, "");
            },
            T = "load",
            E = "loadeddata",
            k = "error",
            A = function e(t, i, n) {
                t.addEventListener(i, n);
            },
            S = function e(t, i, n) {
                t.removeEventListener(i, n);
            },
            D = function e(t, i, n) {
                A(t, T, i), A(t, E, i), A(t, k, n);
            },
            L = function e(t, i, n) {
                S(t, T, i), S(t, E, i), S(t, k, n);
            },
            N = function e(t, i, n) {
                var s = n._settings,
                    r = i ? s.class_loaded : s.class_error,
                    o = i ? s.callback_loaded : s.callback_error,
                    a = t.target;
                _(a, s.class_loading), C(a, r), g(o, a), m(n, -1);
            },
            P = function e(t, i) {
                var n = function e(n) {
                        N(n, !0, i), L(t, e, s);
                    },
                    s = function e(s) {
                        N(s, !1, i), L(t, n, e);
                    };
                D(t, n, s);
            },
            O = ["IMG", "IFRAME", "VIDEO"],
            I = function e(t, i) {
                var n = i._settings;
                if ((g(n.callback_enter, t), !n.load_delay)) {
                    j(t, i);
                    return;
                }
                M(t, i);
            },
            j = function e(t, i) {
                var n = i._observer;
                q(t, i), n && i._settings.auto_unobserve && n.unobserve(t);
            },
            z = function e(t, i) {
                var n = i._settings;
                g(n.callback_exit, t), n.load_delay && H(t);
            },
            H = function e(t) {
                var i = f(t);
                i && (clearTimeout(i), p(t, null));
            },
            M = function e(t, i) {
                var n = i._settings.load_delay,
                    s = f(t);
                !s &&
                    ((s = setTimeout(function () {
                        j(t, i), H(t);
                    }, n)),
                    p(t, s));
            },
            q = function e(t, i, n) {
                var s,
                    r = i._settings;
                !(!n && d(t)) && (O.indexOf(t.tagName) > -1 && (P(t, i), C(t, r.class_loading)), x(t, i), h((s = t), a, c), g(r.callback_reveal, t), g(r.callback_set, t));
            },
            W = function e(t) {
                var n;
                return (
                    !!i &&
                    ((t._observer = new IntersectionObserver(
                        function (e) {
                            e.forEach(function (e) {
                                var i;
                                return (i = e).isIntersecting || i.intersectionRatio > 0 ? I(e.target, t) : z(e.target, t);
                            });
                        },
                        { root: (n = t._settings).container === document ? null : n.container, rootMargin: n.thresholds || n.threshold + "px" }
                    )),
                    !0)
                );
            },
            B = ["IMG", "IFRAME"],
            F = function e(t) {
                t._elements.forEach(function (e) {
                    -1 !== B.indexOf(e.tagName) && (e.setAttribute("loading", "lazy"), q(e, t));
                });
            },
            R = function e(t, i) {
                var n, s, r;
                return (r = ((s = t || (n = i).container.querySelectorAll(n.elements_selector)), Array.prototype.slice.call(s))).filter(function (e) {
                    return !d(e);
                });
            },
            V = function e(t, i) {
                var n;
                (this._settings = _extends({}, s, (n = t))), (this._loadingCount = 0), W(this), this.update(i);
            };
        return (
            (V.prototype = {
                update: function e(i) {
                    var n,
                        s = this,
                        r = this._settings;
                    if (((this._elements = R(i, r)), t || !this._observer)) {
                        this.loadAll();
                        return;
                    }
                    (n = r).use_native && "loading" in HTMLImageElement.prototype && (F(this), (this._elements = R(i, r))),
                        this._elements.forEach(function (e) {
                            s._observer.observe(e);
                        });
                },
                destroy: function e() {
                    var t = this;
                    this._observer &&
                        (this._elements.forEach(function (e) {
                            t._observer.unobserve(e);
                        }),
                        (this._observer = null)),
                        (this._elements = null),
                        (this._settings = null);
                },
                load: function e(t, i) {
                    q(t, this, i);
                },
                loadAll: function e() {
                    var t = this;
                    this._elements.forEach(function (e) {
                        j(e, t);
                    });
                },
            }),
            e &&
                (function e(t, i) {
                    if (i) {
                        if (i.length) for (var n, s = 0; (n = i[s]); s += 1) r(t, n);
                        else r(t, i);
                    }
                })(V, window.lazyLoadOptions),
            V
        );
    }),
    (function (e, t, i, n) {
        function s(t, i) {
            (this.settings = null),
                (this.options = e.extend({}, s.Defaults, i)),
                (this.$element = e(t)),
                (this._handlers = {}),
                (this._plugins = {}),
                (this._supress = {}),
                (this._current = null),
                (this._speed = null),
                (this._coordinates = []),
                (this._breakpoint = null),
                (this._width = null),
                (this._items = []),
                (this._clones = []),
                (this._mergers = []),
                (this._widths = []),
                (this._invalidated = {}),
                (this._pipe = []),
                (this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }),
                (this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }),
                e.each(
                    ["onResize", "onThrottledResize"],
                    e.proxy(function (t, i) {
                        this._handlers[i] = e.proxy(this[i], this);
                    }, this)
                ),
                e.each(
                    s.Plugins,
                    e.proxy(function (e, t) {
                        this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(this);
                    }, this)
                ),
                e.each(
                    s.Workers,
                    e.proxy(function (t, i) {
                        this._pipe.push({ filter: i.filter, run: e.proxy(i.run, this) });
                    }, this)
                ),
                this.setup(),
                this.initialize();
        }
        (s.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            checkVisibility: !0,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: t,
            fallbackEasing: "swing",
            slideTransition: "",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab",
        }),
            (s.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
            (s.Type = { Event: "event", State: "state" }),
            (s.Plugins = {}),
            (s.Workers = [
                {
                    filter: ["width", "settings"],
                    run: function () {
                        this._width = this.$element.width();
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (e) {
                        e.current = this._items && this._items[this.relative(this._current)];
                    },
                },
                {
                    filter: ["items", "settings"],
                    run: function () {
                        this.$stage.children(".cloned").remove();
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (e) {
                        var t = this.settings.margin || "",
                            i = !this.settings.autoWidth,
                            n = this.settings.rtl,
                            s = { width: "auto", "margin-left": n ? t : "", "margin-right": n ? "" : t };
                        i || this.$stage.children().css(s), (e.css = s);
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (e) {
                        var t = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                            i = null,
                            n = this._items.length,
                            s = !this.settings.autoWidth,
                            r = [];
                        for (e.items = { merge: !1, width: t }; n--; )
                            (i = this._mergers[n]), (i = (this.settings.mergeFit && Math.min(i, this.settings.items)) || i), (e.items.merge = i > 1 || e.items.merge), (r[n] = s ? t * i : this._items[n].width());
                        this._widths = r;
                    },
                },
                {
                    filter: ["items", "settings"],
                    run: function () {
                        var t = [],
                            i = this._items,
                            n = this.settings,
                            s = Math.max(2 * n.items, 4),
                            r = 2 * Math.ceil(i.length / 2),
                            o = n.loop && i.length ? (n.rewind ? s : Math.max(s, r)) : 0,
                            a = "",
                            l = "";
                        for (o /= 2; o > 0; )
                            t.push(this.normalize(t.length / 2, !0)), (a += i[t[t.length - 1]][0].outerHTML), t.push(this.normalize(i.length - 1 - (t.length - 1) / 2, !0)), (l = i[t[t.length - 1]][0].outerHTML + l), (o -= 1);
                        (this._clones = t), e(a).addClass("cloned").appendTo(this.$stage), e(l).addClass("cloned").prependTo(this.$stage);
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function () {
                        for (var e = this.settings.rtl ? 1 : -1, t = this._clones.length + this._items.length, i = -1, n = 0, s = 0, r = []; ++i < t; )
                            (n = r[i - 1] || 0), r.push(n + (s = this._widths[this.relative(i)] + this.settings.margin) * e);
                        this._coordinates = r;
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function () {
                        var e = this.settings.stagePadding,
                            t = this._coordinates,
                            i = { width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e, "padding-left": e || "", "padding-right": e || "" };
                        this.$stage.css(i);
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (e) {
                        var t = this._coordinates.length,
                            i = !this.settings.autoWidth,
                            n = this.$stage.children();
                        if (i && e.items.merge) for (; t--; ) (e.css.width = this._widths[this.relative(t)]), n.eq(t).css(e.css);
                        else i && ((e.css.width = e.items.width), n.css(e.css));
                    },
                },
                {
                    filter: ["items"],
                    run: function () {
                        this._coordinates.length < 1 && this.$stage.removeAttr("style");
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (e) {
                        (e.current = e.current ? this.$stage.children().index(e.current) : 0), (e.current = Math.max(this.minimum(), Math.min(this.maximum(), e.current))), this.reset(e.current);
                    },
                },
                {
                    filter: ["position"],
                    run: function () {
                        this.animate(this.coordinates(this._current));
                    },
                },
                {
                    filter: ["width", "position", "items", "settings"],
                    run: function () {
                        var e,
                            t,
                            i,
                            n,
                            s = this.settings.rtl ? 1 : -1,
                            r = 2 * this.settings.stagePadding,
                            o = this.coordinates(this.current()) + r,
                            a = o + this.width() * s,
                            l = [];
                        for (i = 0, n = this._coordinates.length; i < n; i++)
                            (e = this._coordinates[i - 1] || 0), (t = Math.abs(this._coordinates[i]) + r * s), ((this.op(e, "<=", o) && this.op(e, ">", a)) || (this.op(t, "<", o) && this.op(t, ">", a))) && l.push(i);
                        this.$stage.children(".active").removeClass("active"),
                            this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"),
                            this.$stage.children(".center").removeClass("center"),
                            this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
                    },
                },
            ]),
            (s.prototype.initializeStage = function () {
                (this.$stage = this.$element.find("." + this.settings.stageClass)),
                    !this.$stage.length &&
                        (this.$element.addClass(this.options.loadingClass),
                        (this.$stage = e("<" + this.settings.stageElement + ">", { class: this.settings.stageClass }).wrap(e("<div/>", { class: this.settings.stageOuterClass }))),
                        this.$element.append(this.$stage.parent()));
            }),
            (s.prototype.initializeItems = function () {
                var t = this.$element.find(".owl-item");
                if (t.length) {
                    (this._items = t.get().map(function (t) {
                        return e(t);
                    })),
                        (this._mergers = this._items.map(function () {
                            return 1;
                        })),
                        this.refresh();
                    return;
                }
                this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
            }),
            (s.prototype.initialize = function () {
                if ((this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading"))) {
                    var e, t, i;
                    (e = this.$element.find("img")), (t = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n), (i = this.$element.children(t).width()), e.length && i <= 0 && this.preloadAutoWidthImages(e);
                }
                this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
            }),
            (s.prototype.isVisible = function () {
                return !this.settings.checkVisibility || this.$element.is(":visible");
            }),
            (s.prototype.setup = function () {
                var t = this.viewport(),
                    i = this.options.responsive,
                    n = -1,
                    s = null;
                i
                    ? (e.each(i, function (e) {
                          e <= t && e > n && (n = Number(e));
                      }),
                      "function" == typeof (s = e.extend({}, this.options, i[n])).stagePadding && (s.stagePadding = s.stagePadding()),
                      delete s.responsive,
                      s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n)))
                    : (s = e.extend({}, this.options)),
                    this.trigger("change", { property: { name: "settings", value: s } }),
                    (this._breakpoint = n),
                    (this.settings = s),
                    this.invalidate("settings"),
                    this.trigger("changed", { property: { name: "settings", value: this.settings } });
            }),
            (s.prototype.optionsLogic = function () {
                this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
            }),
            (s.prototype.prepare = function (t) {
                var i = this.trigger("prepare", { content: t });
                return (
                    i.data ||
                        (i.data = e("<" + this.settings.itemElement + "/>")
                            .addClass(this.options.itemClass)
                            .append(t)),
                    this.trigger("prepared", { content: i.data }),
                    i.data
                );
            }),
            (s.prototype.update = function () {
                for (
                    var t = 0,
                        i = this._pipe.length,
                        n = e.proxy(function (e) {
                            return this[e];
                        }, this._invalidated),
                        s = {};
                    t < i;

                )
                    (this._invalidated.all || e.grep(this._pipe[t].filter, n).length > 0) && this._pipe[t].run(s), t++;
                (this._invalidated = {}), this.is("valid") || this.enter("valid");
            }),
            (s.prototype.width = function (e) {
                switch ((e = e || s.Width.Default)) {
                    case s.Width.Inner:
                    case s.Width.Outer:
                        return this._width;
                    default:
                        return this._width - 2 * this.settings.stagePadding + this.settings.margin;
                }
            }),
            (s.prototype.refresh = function () {
                this.enter("refreshing"),
                    this.trigger("refresh"),
                    this.setup(),
                    this.optionsLogic(),
                    this.$element.addClass(this.options.refreshClass),
                    this.update(),
                    this.$element.removeClass(this.options.refreshClass),
                    this.leave("refreshing"),
                    this.trigger("refreshed");
            }),
            (s.prototype.onThrottledResize = function () {
                t.clearTimeout(this.resizeTimer), (this.resizeTimer = t.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate));
            }),
            (s.prototype.onResize = function () {
                return (
                    !!(this._items.length && this._width !== this.$element.width() && this.isVisible()) &&
                    ((this.enter("resizing"), this.trigger("resize").isDefaultPrevented()) ? (this.leave("resizing"), !1) : void (this.invalidate("width"), this.refresh(), this.leave("resizing"), this.trigger("resized")))
                );
            }),
            (s.prototype.registerEventHandlers = function () {
                e.support.transition && this.$stage.on(e.support.transition.end + ".owl.core", e.proxy(this.onTransitionEnd, this)),
                    !1 !== this.settings.responsive && this.on(t, "resize", this._handlers.onThrottledResize),
                    this.settings.mouseDrag &&
                        (this.$element.addClass(this.options.dragClass),
                        this.$stage.on("mousedown.owl.core", e.proxy(this.onDragStart, this)),
                        this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                            return !1;
                        })),
                    this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", e.proxy(this.onDragEnd, this)));
            }),
            (s.prototype.onDragStart = function (t) {
                var n = null;
                3 !== t.which &&
                    (e.support.transform
                        ? (n = {
                              x: (n = this.$stage
                                  .css("transform")
                                  .replace(/.*\(|\)| /g, "")
                                  .split(","))[16 === n.length ? 12 : 4],
                              y: n[16 === n.length ? 13 : 5],
                          })
                        : ((n = this.$stage.position()), (n = { x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left, y: n.top })),
                    this.is("animating") && (e.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")),
                    this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type),
                    this.speed(0),
                    (this._drag.time = new Date().getTime()),
                    (this._drag.target = e(t.target)),
                    (this._drag.stage.start = n),
                    (this._drag.stage.current = n),
                    (this._drag.pointer = this.pointer(t)),
                    e(i).on("mouseup.owl.core touchend.owl.core", e.proxy(this.onDragEnd, this)),
                    e(i).one(
                        "mousemove.owl.core touchmove.owl.core",
                        e.proxy(function (t) {
                            var n = this.difference(this._drag.pointer, this.pointer(t));
                            e(i).on("mousemove.owl.core touchmove.owl.core", e.proxy(this.onDragMove, this)), !(Math.abs(n.x) < Math.abs(n.y) && this.is("valid")) && (t.preventDefault(), this.enter("dragging"), this.trigger("drag"));
                        }, this)
                    ));
            }),
            (s.prototype.onDragMove = function (e) {
                var t = null,
                    i = null,
                    n = null,
                    s = this.difference(this._drag.pointer, this.pointer(e)),
                    r = this.difference(this._drag.stage.start, s);
                this.is("dragging") &&
                    (e.preventDefault(),
                    this.settings.loop
                        ? ((t = this.coordinates(this.minimum())), (i = this.coordinates(this.maximum() + 1) - t), (r.x = ((((r.x - t) % i) + i) % i) + t))
                        : ((t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum())),
                          (i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum())),
                          (n = this.settings.pullDrag ? (-1 * s.x) / 5 : 0),
                          (r.x = Math.max(Math.min(r.x, t + n), i + n))),
                    (this._drag.stage.current = r),
                    this.animate(r.x));
            }),
            (s.prototype.onDragEnd = function (t) {
                var n = this.difference(this._drag.pointer, this.pointer(t)),
                    s = this._drag.stage.current,
                    r = (n.x > 0) ^ this.settings.rtl ? "left" : "right";
                e(i).off(".owl.core"),
                    this.$element.removeClass(this.options.grabClass),
                    ((0 !== n.x && this.is("dragging")) || !this.is("valid")) &&
                        (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                        this.current(this.closest(s.x, 0 !== n.x ? r : this._drag.direction)),
                        this.invalidate("position"),
                        this.update(),
                        (this._drag.direction = r),
                        (Math.abs(n.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
                            this._drag.target.one("click.owl.core", function () {
                                return !1;
                            })),
                    this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
            }),
            (s.prototype.closest = function (t, i) {
                var s = -1,
                    r = this.width(),
                    o = this.coordinates();
                return (
                    this.settings.freeDrag ||
                        e.each(
                            o,
                            e.proxy(function (e, a) {
                                return (
                                    "left" === i && t > a - 30 && t < a + 30
                                        ? (s = e)
                                        : "right" === i && t > a - r - 30 && t < a - r + 30
                                        ? (s = e + 1)
                                        : this.op(t, "<", a) && this.op(t, ">", n !== o[e + 1] ? o[e + 1] : a - r) && (s = "left" === i ? e + 1 : e),
                                    -1 === s
                                );
                            }, this)
                        ),
                    !this.settings.loop && (this.op(t, ">", o[this.minimum()]) ? (s = t = this.minimum()) : this.op(t, "<", o[this.maximum()]) && (s = t = this.maximum())),
                    s
                );
            }),
            (s.prototype.animate = function (t) {
                var i = this.speed() > 0;
                this.is("animating") && this.onTransitionEnd(),
                    i && (this.enter("animating"), this.trigger("translate")),
                    e.support.transform3d && e.support.transition
                        ? this.$stage.css({ transform: "translate3d(" + t + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "") })
                        : i
                        ? this.$stage.animate({ left: t + "px" }, this.speed(), this.settings.fallbackEasing, e.proxy(this.onTransitionEnd, this))
                        : this.$stage.css({ left: t + "px" });
            }),
            (s.prototype.is = function (e) {
                return this._states.current[e] && this._states.current[e] > 0;
            }),
            (s.prototype.current = function (e) {
                if (e === n) return this._current;
                if (0 !== this._items.length) {
                    if (((e = this.normalize(e)), this._current !== e)) {
                        var t = this.trigger("change", { property: { name: "position", value: e } });
                        n !== t.data && (e = this.normalize(t.data)), (this._current = e), this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
                    }
                    return this._current;
                }
            }),
            (s.prototype.invalidate = function (t) {
                return (
                    "string" === e.type(t) && ((this._invalidated[t] = !0), this.is("valid") && this.leave("valid")),
                    e.map(this._invalidated, function (e, t) {
                        return t;
                    })
                );
            }),
            (s.prototype.reset = function (e) {
                n !== (e = this.normalize(e)) && ((this._speed = 0), (this._current = e), this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]));
            }),
            (s.prototype.normalize = function (e, t) {
                var i = this._items.length,
                    s = t ? 0 : this._clones.length;
                return !this.isNumeric(e) || i < 1 ? (e = n) : (e < 0 || e >= i + s) && (e = ((((e - s / 2) % i) + i) % i) + s / 2), e;
            }),
            (s.prototype.relative = function (e) {
                return (e -= this._clones.length / 2), this.normalize(e, !0);
            }),
            (s.prototype.maximum = function (e) {
                var t,
                    i,
                    n,
                    s = this.settings,
                    r = this._coordinates.length;
                if (s.loop) r = this._clones.length / 2 + this._items.length - 1;
                else if (s.autoWidth || s.merge) {
                    if ((t = this._items.length)) for (i = this._items[--t].width(), n = this.$element.width(); t-- && !((i += this._items[t].width() + this.settings.margin) > n); );
                    r = t + 1;
                } else r = s.center ? this._items.length - 1 : this._items.length - s.items;
                return e && (r -= this._clones.length / 2), Math.max(r, 0);
            }),
            (s.prototype.minimum = function (e) {
                return e ? 0 : this._clones.length / 2;
            }),
            (s.prototype.items = function (e) {
                return e === n ? this._items.slice() : ((e = this.normalize(e, !0)), this._items[e]);
            }),
            (s.prototype.mergers = function (e) {
                return e === n ? this._mergers.slice() : ((e = this.normalize(e, !0)), this._mergers[e]);
            }),
            (s.prototype.clones = function (t) {
                var i = this._clones.length / 2,
                    s = i + this._items.length,
                    r = function (e) {
                        return e % 2 == 0 ? s + e / 2 : i - (e + 1) / 2;
                    };
                return t === n
                    ? e.map(this._clones, function (e, t) {
                          return r(t);
                      })
                    : e.map(this._clones, function (e, i) {
                          return e === t ? r(i) : null;
                      });
            }),
            (s.prototype.speed = function (e) {
                return e !== n && (this._speed = e), this._speed;
            }),
            (s.prototype.coordinates = function (t) {
                var i,
                    s = 1,
                    r = t - 1;
                return t === n
                    ? e.map(
                          this._coordinates,
                          e.proxy(function (e, t) {
                              return this.coordinates(t);
                          }, this)
                      )
                    : (this.settings.center ? (this.settings.rtl && ((s = -1), (r = t + 1)), (i = this._coordinates[t]), (i += ((this.width() - i + (this._coordinates[r] || 0)) / 2) * s)) : (i = this._coordinates[r] || 0),
                      (i = Math.ceil(i)));
            }),
            (s.prototype.duration = function (e, t, i) {
                return 0 === i ? 0 : Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(i || this.settings.smartSpeed);
            }),
            (s.prototype.to = function (e, t) {
                var i = this.current(),
                    n = null,
                    s = e - this.relative(i),
                    r = (s > 0) - (s < 0),
                    o = this._items.length,
                    a = this.minimum(),
                    l = this.maximum();
                this.settings.loop
                    ? (!this.settings.rewind && Math.abs(s) > o / 2 && (s += -1 * r * o), (n = (((((e = i + s) - a) % o) + o) % o) + a) !== e && n - s <= l && n - s > 0 && ((i = n - s), (e = n), this.reset(i)))
                    : this.settings.rewind
                    ? ((l += 1), (e = ((e % l) + l) % l))
                    : (e = Math.max(a, Math.min(l, e))),
                    this.speed(this.duration(i, e, t)),
                    this.current(e),
                    this.isVisible() && this.update();
            }),
            (s.prototype.next = function (e) {
                (e = e || !1), this.to(this.relative(this.current()) + 1, e);
            }),
            (s.prototype.prev = function (e) {
                (e = e || !1), this.to(this.relative(this.current()) - 1, e);
            }),
            (s.prototype.onTransitionEnd = function (e) {
                if (e !== n && (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) !== this.$stage.get(0))) return !1;
                this.leave("animating"), this.trigger("translated");
            }),
            (s.prototype.viewport = function () {
                var n;
                return (
                    this.options.responsiveBaseElement !== t
                        ? (n = e(this.options.responsiveBaseElement).width())
                        : t.innerWidth
                        ? (n = t.innerWidth)
                        : i.documentElement && i.documentElement.clientWidth
                        ? (n = i.documentElement.clientWidth)
                        : console.warn("Can not detect viewport width."),
                    n
                );
            }),
            (s.prototype.replace = function (t) {
                this.$stage.empty(),
                    (this._items = []),
                    t && (t = t instanceof jQuery ? t : e(t)),
                    this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)),
                    t
                        .filter(function () {
                            return 1 === this.nodeType;
                        })
                        .each(
                            e.proxy(function (e, t) {
                                (t = this.prepare(t)), this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
                            }, this)
                        ),
                    this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
                    this.invalidate("items");
            }),
            (s.prototype.add = function (t, i) {
                var s = this.relative(this._current);
                (i = i === n ? this._items.length : this.normalize(i, !0)),
                    (t = t instanceof jQuery ? t : e(t)),
                    this.trigger("add", { content: t, position: i }),
                    (t = this.prepare(t)),
                    0 === this._items.length || i === this._items.length
                        ? (0 === this._items.length && this.$stage.append(t),
                          0 !== this._items.length && this._items[i - 1].after(t),
                          this._items.push(t),
                          this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1))
                        : (this._items[i].before(t), this._items.splice(i, 0, t), this._mergers.splice(i, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
                    this._items[s] && this.reset(this._items[s].index()),
                    this.invalidate("items"),
                    this.trigger("added", { content: t, position: i });
            }),
            (s.prototype.remove = function (e) {
                n !== (e = this.normalize(e, !0)) &&
                    (this.trigger("remove", { content: this._items[e], position: e }),
                    this._items[e].remove(),
                    this._items.splice(e, 1),
                    this._mergers.splice(e, 1),
                    this.invalidate("items"),
                    this.trigger("removed", { content: null, position: e }));
            }),
            (s.prototype.preloadAutoWidthImages = function (t) {
                t.each(
                    e.proxy(function (t, i) {
                        this.enter("pre-loading"),
                            (i = e(i)),
                            e(new Image())
                                .one(
                                    "load",
                                    e.proxy(function (e) {
                                        i.attr("src", e.target.src), i.css("opacity", 1), this.leave("pre-loading"), this.is("pre-loading") || this.is("initializing") || this.refresh();
                                    }, this)
                                )
                                .attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"));
                    }, this)
                );
            }),
            (s.prototype.destroy = function () {
                for (var n in (this.$element.off(".owl.core"),
                this.$stage.off(".owl.core"),
                e(i).off(".owl.core"),
                !1 !== this.settings.responsive && (t.clearTimeout(this.resizeTimer), this.off(t, "resize", this._handlers.onThrottledResize)),
                this._plugins))
                    this._plugins[n].destroy();
                this.$stage.children(".cloned").remove(),
                    this.$stage.unwrap(),
                    this.$stage.children().contents().unwrap(),
                    this.$stage.children().unwrap(),
                    this.$stage.remove(),
                    this.$element
                        .removeClass(this.options.refreshClass)
                        .removeClass(this.options.loadingClass)
                        .removeClass(this.options.loadedClass)
                        .removeClass(this.options.rtlClass)
                        .removeClass(this.options.dragClass)
                        .removeClass(this.options.grabClass)
                        .attr("class", this.$element.attr("class").replace(RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), ""))
                        .removeData("owl.carousel");
            }),
            (s.prototype.op = function (e, t, i) {
                var n = this.settings.rtl;
                switch (t) {
                    case "<":
                        return n ? e > i : e < i;
                    case ">":
                        return n ? e < i : e > i;
                    case ">=":
                        return n ? e <= i : e >= i;
                    case "<=":
                        return n ? e >= i : e <= i;
                }
            }),
            (s.prototype.on = function (e, t, i, n) {
                e.addEventListener ? e.addEventListener(t, i, n) : e.attachEvent && e.attachEvent("on" + t, i);
            }),
            (s.prototype.off = function (e, t, i, n) {
                e.removeEventListener ? e.removeEventListener(t, i, n) : e.detachEvent && e.detachEvent("on" + t, i);
            }),
            (s.prototype.trigger = function (t, i, n, r, o) {
                var a = { item: { count: this._items.length, index: this.current() } },
                    l = e.camelCase(
                        e
                            .grep(["on", t, n], function (e) {
                                return e;
                            })
                            .join("-")
                            .toLowerCase()
                    ),
                    c = e.Event([t, "owl", n || "carousel"].join(".").toLowerCase(), e.extend({ relatedTarget: this }, a, i));
                return (
                    !this._supress[t] &&
                        (e.each(this._plugins, function (e, t) {
                            t.onTrigger && t.onTrigger(c);
                        }),
                        this.register({ type: s.Type.Event, name: t }),
                        this.$element.trigger(c),
                        this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)),
                    c
                );
            }),
            (s.prototype.enter = function (t) {
                e.each(
                    [t].concat(this._states.tags[t] || []),
                    e.proxy(function (e, t) {
                        n === this._states.current[t] && (this._states.current[t] = 0), this._states.current[t]++;
                    }, this)
                );
            }),
            (s.prototype.leave = function (t) {
                e.each(
                    [t].concat(this._states.tags[t] || []),
                    e.proxy(function (e, t) {
                        this._states.current[t]--;
                    }, this)
                );
            }),
            (s.prototype.register = function (t) {
                if (t.type === s.Type.Event) {
                    if ((e.event.special[t.name] || (e.event.special[t.name] = {}), !e.event.special[t.name].owl)) {
                        var i = e.event.special[t.name]._default;
                        (e.event.special[t.name]._default = function (e) {
                            return i && i.apply && (!e.namespace || -1 === e.namespace.indexOf("owl")) ? i.apply(this, arguments) : e.namespace && e.namespace.indexOf("owl") > -1;
                        }),
                            (e.event.special[t.name].owl = !0);
                    }
                } else
                    t.type === s.Type.State &&
                        (this._states.tags[t.name] ? (this._states.tags[t.name] = this._states.tags[t.name].concat(t.tags)) : (this._states.tags[t.name] = t.tags),
                        (this._states.tags[t.name] = e.grep(
                            this._states.tags[t.name],
                            e.proxy(function (i, n) {
                                return e.inArray(i, this._states.tags[t.name]) === n;
                            }, this)
                        )));
            }),
            (s.prototype.suppress = function (t) {
                e.each(
                    t,
                    e.proxy(function (e, t) {
                        this._supress[t] = !0;
                    }, this)
                );
            }),
            (s.prototype.release = function (t) {
                e.each(
                    t,
                    e.proxy(function (e, t) {
                        delete this._supress[t];
                    }, this)
                );
            }),
            (s.prototype.pointer = function (e) {
                var i = { x: null, y: null };
                return (
                    (e = (e = e.originalEvent || e || t.event).touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e).pageX
                        ? ((i.x = e.pageX), (i.y = e.pageY))
                        : ((i.x = e.clientX), (i.y = e.clientY)),
                    i
                );
            }),
            (s.prototype.isNumeric = function (e) {
                return !isNaN(parseFloat(e));
            }),
            (s.prototype.difference = function (e, t) {
                return { x: e.x - t.x, y: e.y - t.y };
            }),
            (e.fn.owlCarousel = function (t) {
                var i = Array.prototype.slice.call(arguments, 1);
                return this.each(function () {
                    var n = e(this),
                        r = n.data("owl.carousel");
                    r ||
                        ((r = new s(this, "object" == typeof t && t)),
                        n.data("owl.carousel", r),
                        e.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (t, i) {
                            r.register({ type: s.Type.Event, name: i }),
                                r.$element.on(
                                    i + ".owl.carousel.core",
                                    e.proxy(function (e) {
                                        e.namespace && e.relatedTarget !== this && (this.suppress([i]), r[i].apply(this, [].slice.call(arguments, 1)), this.release([i]));
                                    }, r)
                                );
                        })),
                        "string" == typeof t && "_" !== t.charAt(0) && r[t].apply(r, i);
                });
            }),
            (e.fn.owlCarousel.Constructor = s);
    })(window.Zepto || window.jQuery, window, document),
    (function (e, t, i, n) {
        var s = function (t) {
            (this._core = t),
                (this._interval = null),
                (this._visible = null),
                (this._handlers = {
                    "initialized.owl.carousel": e.proxy(function (e) {
                        e.namespace && this._core.settings.autoRefresh && this.watch();
                    }, this),
                }),
                (this._core.options = e.extend({}, s.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (s.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
            (s.prototype.watch = function () {
                !this._interval && ((this._visible = this._core.isVisible()), (this._interval = t.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)));
            }),
            (s.prototype.refresh = function () {
                this._core.isVisible() !== this._visible && ((this._visible = !this._visible), this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
            }),
            (s.prototype.destroy = function () {
                var e, i;
                for (e in (t.clearInterval(this._interval), this._handlers)) this._core.$element.off(e, this._handlers[e]);
                for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null);
            }),
            (e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s);
    })(window.Zepto || window.jQuery, window, document),
    (function (e, t, i, n) {
        var s = function (t) {
            (this._core = t),
                (this._loaded = []),
                (this._handlers = {
                    "initialized.owl.carousel change.owl.carousel resized.owl.carousel": e.proxy(function (t) {
                        if (t.namespace && this._core.settings && this._core.settings.lazyLoad && ((t.property && "position" == t.property.name) || "initialized" == t.type)) {
                            var i = this._core.settings,
                                n = (i.center && Math.ceil(i.items / 2)) || i.items,
                                s = (i.center && -1 * n) || 0,
                                r = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + s,
                                o = this._core.clones().length,
                                a = e.proxy(function (e, t) {
                                    this.load(t);
                                }, this);
                            for (i.lazyLoadEager > 0 && ((n += i.lazyLoadEager), i.loop && ((r -= i.lazyLoadEager), n++)); s++ < n; ) this.load(o / 2 + this._core.relative(r)), o && e.each(this._core.clones(this._core.relative(r)), a), r++;
                        }
                    }, this),
                }),
                (this._core.options = e.extend({}, s.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (s.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
            (s.prototype.load = function (i) {
                var n = this._core.$stage.children().eq(i),
                    s = n && n.find(".owl-lazy");
                !(!s || e.inArray(n.get(0), this._loaded) > -1) &&
                    (s.each(
                        e.proxy(function (i, n) {
                            var s,
                                r = e(n),
                                o = (t.devicePixelRatio > 1 && r.attr("data-src-retina")) || r.attr("data-src") || r.attr("data-srcset");
                            this._core.trigger("load", { element: r, url: o }, "lazy"),
                                r.is("img")
                                    ? r
                                          .one(
                                              "load.owl.lazy",
                                              e.proxy(function () {
                                                  r.css("opacity", 1), this._core.trigger("loaded", { element: r, url: o }, "lazy");
                                              }, this)
                                          )
                                          .attr("src", o)
                                    : r.is("source")
                                    ? r
                                          .one(
                                              "load.owl.lazy",
                                              e.proxy(function () {
                                                  this._core.trigger("loaded", { element: r, url: o }, "lazy");
                                              }, this)
                                          )
                                          .attr("srcset", o)
                                    : (((s = new Image()).onload = e.proxy(function () {
                                          r.css({ "background-image": 'url("' + o + '")', opacity: "1" }), this._core.trigger("loaded", { element: r, url: o }, "lazy");
                                      }, this)),
                                      (s.src = o));
                        }, this)
                    ),
                    this._loaded.push(n.get(0)));
            }),
            (s.prototype.destroy = function () {
                var e, t;
                for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
                for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null);
            }),
            (e.fn.owlCarousel.Constructor.Plugins.Lazy = s);
    })(window.Zepto || window.jQuery, window, document),
    (function (e, t, i, n) {
        var s = function (i) {
            (this._core = i),
                (this._previousHeight = null),
                (this._handlers = {
                    "initialized.owl.carousel refreshed.owl.carousel": e.proxy(function (e) {
                        e.namespace && this._core.settings.autoHeight && this.update();
                    }, this),
                    "changed.owl.carousel": e.proxy(function (e) {
                        e.namespace && this._core.settings.autoHeight && "position" === e.property.name && this.update();
                    }, this),
                    "loaded.owl.lazy": e.proxy(function (e) {
                        e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
                    }, this),
                }),
                (this._core.options = e.extend({}, s.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                (this._intervalId = null);
            var n = this;
            e(t).on("load", function () {
                n._core.settings.autoHeight && n.update();
            }),
                e(t).resize(function () {
                    n._core.settings.autoHeight &&
                        (null != n._intervalId && clearTimeout(n._intervalId),
                        (n._intervalId = setTimeout(function () {
                            n.update();
                        }, 250)));
                });
        };
        (s.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
            (s.prototype.update = function () {
                var t = this._core._current,
                    i = t + this._core.settings.items,
                    n = this._core.settings.lazyLoad,
                    s = this._core.$stage.children().toArray().slice(t, i),
                    r = [],
                    o = 0;
                e.each(s, function (t, i) {
                    r.push(e(i).height());
                }),
                    (o = Math.max.apply(null, r)) <= 1 && n && this._previousHeight && (o = this._previousHeight),
                    (this._previousHeight = o),
                    this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass);
            }),
            (s.prototype.destroy = function () {
                var e, t;
                for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
                for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null);
            }),
            (e.fn.owlCarousel.Constructor.Plugins.AutoHeight = s);
    })(window.Zepto || window.jQuery, window, document),
    (function (e, t, i, n) {
        var s = function (t) {
            (this._core = t),
                (this._videos = {}),
                (this._playing = null),
                (this._handlers = {
                    "initialized.owl.carousel": e.proxy(function (e) {
                        e.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
                    }, this),
                    "resize.owl.carousel": e.proxy(function (e) {
                        e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault();
                    }, this),
                    "refreshed.owl.carousel": e.proxy(function (e) {
                        e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
                    }, this),
                    "changed.owl.carousel": e.proxy(function (e) {
                        e.namespace && "position" === e.property.name && this._playing && this.stop();
                    }, this),
                    "prepared.owl.carousel": e.proxy(function (t) {
                        if (t.namespace) {
                            var i = e(t.content).find(".owl-video");
                            i.length && (i.css("display", "none"), this.fetch(i, e(t.content)));
                        }
                    }, this),
                }),
                (this._core.options = e.extend({}, s.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                this._core.$element.on(
                    "click.owl.video",
                    ".owl-video-play-icon",
                    e.proxy(function (e) {
                        this.play(e);
                    }, this)
                );
        };
        (s.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
            (s.prototype.fetch = function (e, t) {
                var i = e.attr("data-vimeo-id") ? "vimeo" : e.attr("data-vzaar-id") ? "vzaar" : "youtube",
                    n = e.attr("data-vimeo-id") || e.attr("data-youtube-id") || e.attr("data-vzaar-id"),
                    s = e.attr("data-width") || this._core.settings.videoWidth,
                    r = e.attr("data-height") || this._core.settings.videoHeight,
                    o = e.attr("href");
                if (o) {
                    if (
                        (n = o.match(
                            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                        ))[3].indexOf("youtu") > -1
                    )
                        i = "youtube";
                    else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
                    else if (n[3].indexOf("vzaar") > -1) i = "vzaar";
                    else throw Error("Video URL not supported.");
                    n = n[6];
                } else throw Error("Missing video URL.");
                (this._videos[o] = { type: i, id: n, width: s, height: r }), t.attr("data-video", o), this.thumbnail(e, this._videos[o]);
            }),
            (s.prototype.thumbnail = function (t, i) {
                var n,
                    s,
                    r,
                    o = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
                    a = t.find("img"),
                    l = "src",
                    c = "",
                    u = this._core.settings,
                    h = function (i) {
                        (s = '<div class="owl-video-play-icon"></div>'),
                            (n = u.lazyLoad ? e("<div/>", { class: "owl-video-tn " + c, srcType: i }) : e("<div/>", { class: "owl-video-tn", style: "opacity:1;background-image:url(" + i + ")" })),
                            t.after(n),
                            t.after(s);
                    };
                if ((t.wrap(e("<div/>", { class: "owl-video-wrapper", style: o })), this._core.settings.lazyLoad && ((l = "data-src"), (c = "owl-lazy")), a.length)) return h(a.attr(l)), a.remove(), !1;
                "youtube" === i.type
                    ? h((r = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg"))
                    : "vimeo" === i.type
                    ? e.ajax({
                          type: "GET",
                          url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                          jsonp: "callback",
                          dataType: "jsonp",
                          success: function (e) {
                              h((r = e[0].thumbnail_large));
                          },
                      })
                    : "vzaar" === i.type &&
                      e.ajax({
                          type: "GET",
                          url: "//vzaar.com/api/videos/" + i.id + ".json",
                          jsonp: "callback",
                          dataType: "jsonp",
                          success: function (e) {
                              h((r = e.framegrab_url));
                          },
                      });
            }),
            (s.prototype.stop = function () {
                this._core.trigger("stop", null, "video"),
                    this._playing.find(".owl-video-frame").remove(),
                    this._playing.removeClass("owl-video-playing"),
                    (this._playing = null),
                    this._core.leave("playing"),
                    this._core.trigger("stopped", null, "video");
            }),
            (s.prototype.play = function (t) {
                var i,
                    n,
                    s = e(t.target).closest("." + this._core.settings.itemClass),
                    r = this._videos[s.attr("data-video")],
                    o = r.width || "100%",
                    a = r.height || this._core.$stage.height();
                !this._playing &&
                    (this._core.enter("playing"),
                    this._core.trigger("play", null, "video"),
                    (s = this._core.items(this._core.relative(s.index()))),
                    this._core.reset(s.index()),
                    (i = e('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", a),
                    i.attr("width", o),
                    "youtube" === r.type
                        ? i.attr("src", "//www.youtube.com/embed/" + r.id + "?autoplay=1&rel=0&v=" + r.id)
                        : "vimeo" === r.type
                        ? i.attr("src", "//player.vimeo.com/video/" + r.id + "?autoplay=1")
                        : "vzaar" === r.type && i.attr("src", "//view.vzaar.com/" + r.id + "/player?autoplay=true"),
                    (n = e(i).wrap('<div class="owl-video-frame" />').insertAfter(s.find(".owl-video"))),
                    (this._playing = s.addClass("owl-video-playing")));
            }),
            (s.prototype.isInFullScreen = function () {
                var t = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
                return t && e(t).parent().hasClass("owl-video-frame");
            }),
            (s.prototype.destroy = function () {
                var e, t;
                for (e in (this._core.$element.off("click.owl.video"), this._handlers)) this._core.$element.off(e, this._handlers[e]);
                for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null);
            }),
            (e.fn.owlCarousel.Constructor.Plugins.Video = s);
    })(window.Zepto || window.jQuery, window, document),
    (function (e, t, i, n) {
        var s = function (t) {
            (this.core = t),
                (this.core.options = e.extend({}, s.Defaults, this.core.options)),
                (this.swapping = !0),
                (this.previous = n),
                (this.next = n),
                (this.handlers = {
                    "change.owl.carousel": e.proxy(function (e) {
                        e.namespace && "position" == e.property.name && ((this.previous = this.core.current()), (this.next = e.property.value));
                    }, this),
                    "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": e.proxy(function (e) {
                        e.namespace && (this.swapping = "translated" == e.type);
                    }, this),
                    "translate.owl.carousel": e.proxy(function (e) {
                        e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
                    }, this),
                }),
                this.core.$element.on(this.handlers);
        };
        (s.Defaults = { animateOut: !1, animateIn: !1 }),
            (s.prototype.swap = function () {
                if (1 === this.core.settings.items && e.support.animation && e.support.transition) {
                    this.core.speed(0);
                    var t,
                        i = e.proxy(this.clear, this),
                        n = this.core.$stage.children().eq(this.previous),
                        s = this.core.$stage.children().eq(this.next),
                        r = this.core.settings.animateIn,
                        o = this.core.settings.animateOut;
                    this.core.current() !== this.previous &&
                        (o &&
                            ((t = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
                            n
                                .one(e.support.animation.end, i)
                                .css({ left: t + "px" })
                                .addClass("animated owl-animated-out")
                                .addClass(o)),
                        r && s.one(e.support.animation.end, i).addClass("animated owl-animated-in").addClass(r));
                }
            }),
            (s.prototype.clear = function (t) {
                e(t.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
            }),
            (s.prototype.destroy = function () {
                var e, t;
                for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
                for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null);
            }),
            (e.fn.owlCarousel.Constructor.Plugins.Animate = s);
    })(window.Zepto || window.jQuery, window, document),
    (function (e, t, i, n) {
        var s = function (t) {
            (this._core = t),
                (this._call = null),
                (this._time = 0),
                (this._timeout = 0),
                (this._paused = !0),
                (this._handlers = {
                    "changed.owl.carousel": e.proxy(function (e) {
                        e.namespace && "settings" === e.property.name ? (this._core.settings.autoplay ? this.play() : this.stop()) : e.namespace && "position" === e.property.name && this._paused && (this._time = 0);
                    }, this),
                    "initialized.owl.carousel": e.proxy(function (e) {
                        e.namespace && this._core.settings.autoplay && this.play();
                    }, this),
                    "play.owl.autoplay": e.proxy(function (e, t, i) {
                        e.namespace && this.play(t, i);
                    }, this),
                    "stop.owl.autoplay": e.proxy(function (e) {
                        e.namespace && this.stop();
                    }, this),
                    "mouseover.owl.autoplay": e.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "mouseleave.owl.autoplay": e.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
                    }, this),
                    "touchstart.owl.core": e.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "touchend.owl.core": e.proxy(function () {
                        this._core.settings.autoplayHoverPause && this.play();
                    }, this),
                }),
                this._core.$element.on(this._handlers),
                (this._core.options = e.extend({}, s.Defaults, this._core.options));
        };
        (s.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }),
            (s.prototype._next = function (n) {
                (this._call = t.setTimeout(e.proxy(this._next, this, n), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read())),
                    !this._core.is("interacting") && !i.hidden && this._core.next(n || this._core.settings.autoplaySpeed);
            }),
            (s.prototype.read = function () {
                return new Date().getTime() - this._time;
            }),
            (s.prototype.play = function (i, n) {
                var s;
                this._core.is("rotating") || this._core.enter("rotating"),
                    (i = i || this._core.settings.autoplayTimeout),
                    (s = Math.min(this._time % (this._timeout || i), i)),
                    this._paused ? ((this._time = this.read()), (this._paused = !1)) : t.clearTimeout(this._call),
                    (this._time += (this.read() % i) - s),
                    (this._timeout = i),
                    (this._call = t.setTimeout(e.proxy(this._next, this, n), i - s));
            }),
            (s.prototype.stop = function () {
                this._core.is("rotating") && ((this._time = 0), (this._paused = !0), t.clearTimeout(this._call), this._core.leave("rotating"));
            }),
            (s.prototype.pause = function () {
                this._core.is("rotating") && !this._paused && ((this._time = this.read()), (this._paused = !0), t.clearTimeout(this._call));
            }),
            (s.prototype.destroy = function () {
                var e, t;
                for (e in (this.stop(), this._handlers)) this._core.$element.off(e, this._handlers[e]);
                for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null);
            }),
            (e.fn.owlCarousel.Constructor.Plugins.autoplay = s);
    })(window.Zepto || window.jQuery, window, document),
    (function (e, t, i, n) {
        "use strict";
        var s = function (t) {
            (this._core = t),
                (this._initialized = !1),
                (this._pages = []),
                (this._controls = {}),
                (this._templates = []),
                (this.$element = this._core.$element),
                (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
                (this._handlers = {
                    "prepared.owl.carousel": e.proxy(function (t) {
                        t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + e(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
                    }, this),
                    "added.owl.carousel": e.proxy(function (e) {
                        e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop());
                    }, this),
                    "remove.owl.carousel": e.proxy(function (e) {
                        e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1);
                    }, this),
                    "changed.owl.carousel": e.proxy(function (e) {
                        e.namespace && "position" == e.property.name && this.draw();
                    }, this),
                    "initialized.owl.carousel": e.proxy(function (e) {
                        e.namespace &&
                            !this._initialized &&
                            (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), (this._initialized = !0), this._core.trigger("initialized", null, "navigation"));
                    }, this),
                    "refreshed.owl.carousel": e.proxy(function (e) {
                        e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
                    }, this),
                }),
                (this._core.options = e.extend({}, s.Defaults, this._core.options)),
                this.$element.on(this._handlers);
        };
        (s.Defaults = {
            nav: !1,
            navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
        }),
            (s.prototype.initialize = function () {
                var t,
                    i = this._core.settings;
                for (t in ((this._controls.$relative = (i.navContainer ? e(i.navContainer) : e("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled")),
                (this._controls.$previous = e("<" + i.navElement + ">")
                    .addClass(i.navClass[0])
                    .html(i.navText[0])
                    .prependTo(this._controls.$relative)
                    .on(
                        "click",
                        e.proxy(function (e) {
                            this.prev(i.navSpeed);
                        }, this)
                    )),
                (this._controls.$next = e("<" + i.navElement + ">")
                    .addClass(i.navClass[1])
                    .html(i.navText[1])
                    .appendTo(this._controls.$relative)
                    .on(
                        "click",
                        e.proxy(function (e) {
                            this.next(i.navSpeed);
                        }, this)
                    )),
                i.dotsData || (this._templates = [e('<button role="button">').addClass(i.dotClass).append(e("<span>")).prop("outerHTML")]),
                (this._controls.$absolute = (i.dotsContainer ? e(i.dotsContainer) : e("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled")),
                this._controls.$absolute.on(
                    "click",
                    "button",
                    e.proxy(function (t) {
                        var n = e(t.target).parent().is(this._controls.$absolute) ? e(t.target).index() : e(t.target).parent().index();
                        t.preventDefault(), this.to(n, i.dotsSpeed);
                    }, this)
                ),
                this._overrides))
                    this._core[t] = e.proxy(this[t], this);
            }),
            (s.prototype.destroy = function () {
                var e, t, i, n, s;
                for (e in ((s = this._core.settings), this._handlers)) this.$element.off(e, this._handlers[e]);
                for (t in this._controls) "$relative" === t && s.navContainer ? this._controls[t].html("") : this._controls[t].remove();
                for (n in this.overides) this._core[n] = this._overrides[n];
                for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null);
            }),
            (s.prototype.update = function () {
                var e,
                    t,
                    i,
                    n = this._core.clones().length / 2,
                    s = n + this._core.items().length,
                    r = this._core.maximum(!0),
                    o = this._core.settings,
                    a = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
                if (("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy))
                    for (this._pages = [], e = n, t = 0, i = 0; e < s; e++) {
                        if (t >= a || 0 === t) {
                            if ((this._pages.push({ start: Math.min(r, e - n), end: e - n + a - 1 }), Math.min(r, e - n) === r)) break;
                            (t = 0), ++i;
                        }
                        t += this._core.mergers(this._core.relative(e));
                    }
            }),
            (s.prototype.draw = function () {
                var t,
                    i = this._core.settings,
                    n = this._core.items().length <= i.items,
                    s = this._core.relative(this._core.current()),
                    r = i.loop || i.rewind;
                this._controls.$relative.toggleClass("disabled", !i.nav || n),
                    i.nav && (this._controls.$previous.toggleClass("disabled", !r && s <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !r && s >= this._core.maximum(!0))),
                    this._controls.$absolute.toggleClass("disabled", !i.dots || n),
                    i.dots &&
                        ((t = this._pages.length - this._controls.$absolute.children().length),
                        i.dotsData && 0 !== t
                            ? this._controls.$absolute.html(this._templates.join(""))
                            : t > 0
                            ? this._controls.$absolute.append(Array(t + 1).join(this._templates[0]))
                            : t < 0 && this._controls.$absolute.children().slice(t).remove(),
                        this._controls.$absolute.find(".active").removeClass("active"),
                        this._controls.$absolute.children().eq(e.inArray(this.current(), this._pages)).addClass("active"));
            }),
            (s.prototype.onTrigger = function (t) {
                var i = this._core.settings;
                t.page = { index: e.inArray(this.current(), this._pages), count: this._pages.length, size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items) };
            }),
            (s.prototype.current = function () {
                var t = this._core.relative(this._core.current());
                return e
                    .grep(
                        this._pages,
                        e.proxy(function (e, i) {
                            return e.start <= t && e.end >= t;
                        }, this)
                    )
                    .pop();
            }),
            (s.prototype.getPosition = function (t) {
                var i,
                    n,
                    s = this._core.settings;
                return (
                    "page" == s.slideBy
                        ? ((i = e.inArray(this.current(), this._pages)), (n = this._pages.length), t ? ++i : --i, (i = this._pages[((i % n) + n) % n].start))
                        : ((i = this._core.relative(this._core.current())), (n = this._core.items().length), t ? (i += s.slideBy) : (i -= s.slideBy)),
                    i
                );
            }),
            (s.prototype.next = function (t) {
                e.proxy(this._overrides.to, this._core)(this.getPosition(!0), t);
            }),
            (s.prototype.prev = function (t) {
                e.proxy(this._overrides.to, this._core)(this.getPosition(!1), t);
            }),
            (s.prototype.to = function (t, i, n) {
                var s;
                !n && this._pages.length ? ((s = this._pages.length), e.proxy(this._overrides.to, this._core)(this._pages[((t % s) + s) % s].start, i)) : e.proxy(this._overrides.to, this._core)(t, i);
            }),
            (e.fn.owlCarousel.Constructor.Plugins.Navigation = s);
    })(window.Zepto || window.jQuery, window, document),
    (function (e, t, i, n) {
        "use strict";
        var s = function (i) {
            (this._core = i),
                (this._hashes = {}),
                (this.$element = this._core.$element),
                (this._handlers = {
                    "initialized.owl.carousel": e.proxy(function (i) {
                        i.namespace && "URLHash" === this._core.settings.startPosition && e(t).trigger("hashchange.owl.navigation");
                    }, this),
                    "prepared.owl.carousel": e.proxy(function (t) {
                        if (t.namespace) {
                            var i = e(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                            i && (this._hashes[i] = t.content);
                        }
                    }, this),
                    "changed.owl.carousel": e.proxy(function (i) {
                        if (i.namespace && "position" === i.property.name) {
                            var n = this._core.items(this._core.relative(this._core.current())),
                                s = e
                                    .map(this._hashes, function (e, t) {
                                        return e === n ? t : null;
                                    })
                                    .join();
                            s && t.location.hash.slice(1) !== s && (t.location.hash = s);
                        }
                    }, this),
                }),
                (this._core.options = e.extend({}, s.Defaults, this._core.options)),
                this.$element.on(this._handlers),
                e(t).on(
                    "hashchange.owl.navigation",
                    e.proxy(function (e) {
                        var i = t.location.hash.substring(1),
                            n = this._core.$stage.children(),
                            s = this._hashes[i] && n.index(this._hashes[i]);
                        void 0 !== s && s !== this._core.current() && this._core.to(this._core.relative(s), !1, !0);
                    }, this)
                );
        };
        (s.Defaults = { URLhashListener: !1 }),
            (s.prototype.destroy = function () {
                var i, n;
                for (i in (e(t).off("hashchange.owl.navigation"), this._handlers)) this._core.$element.off(i, this._handlers[i]);
                for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null);
            }),
            (e.fn.owlCarousel.Constructor.Plugins.Hash = s);
    })(window.Zepto || window.jQuery, window, document),
    (function (e, t, i, n) {
        var s = e("<support>").get(0).style,
            r = "Webkit Moz O ms".split(" "),
            o = {
                transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } },
                animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } },
            },
            a = {
                csstransforms: function () {
                    return !!l("transform");
                },
                csstransforms3d: function () {
                    return !!l("perspective");
                },
                csstransitions: function () {
                    return !!l("transition");
                },
                cssanimations: function () {
                    return !!l("animation");
                },
            };
        function l(t, i) {
            var n = !1,
                o = t.charAt(0).toUpperCase() + t.slice(1);
            return (
                e.each((t + " " + r.join(o + " ") + o).split(" "), function (e, t) {
                    if (void 0 !== s[t]) return (n = !i || t), !1;
                }),
                n
            );
        }
        function c(e) {
            return l(e, !0);
        }
        a.csstransitions() && ((e.support.transition = new String(c("transition"))), (e.support.transition.end = o.transition.end[e.support.transition])),
            a.cssanimations() && ((e.support.animation = new String(c("animation"))), (e.support.animation.end = o.animation.end[e.support.animation])),
            a.csstransforms() && ((e.support.transform = new String(c("transform"))), (e.support.transform3d = a.csstransforms3d()));
    })(window.Zepto || window.jQuery, window, document),
    (function (e) {
        e.fn.niceSelect = function (t) {
            if ("string" == typeof t)
                return (
                    "update" == t
                        ? this.each(function () {
                              var t = e(this),
                                  n = e(this).next(".nice-select"),
                                  s = n.hasClass("open");
                              n.length && (n.remove(), i(t), s && t.next().trigger("click"));
                          })
                        : "destroy" == t
                        ? (this.each(function () {
                              var t = e(this),
                                  i = e(this).next(".nice-select");
                              i.length && (i.remove(), t.css("display", ""));
                          }),
                          0 == e(".nice-select").length && e(document).off(".nice_select"))
                        : console.log('Method "' + t + '" does not exist.'),
                    this
                );
            function i(t) {
                t.after(
                    e("<div></div>")
                        .addClass("nice-select")
                        .addClass(t.attr("class") || "")
                        .addClass(t.attr("disabled") ? "disabled" : "")
                        .attr("tabindex", t.attr("disabled") ? null : "0")
                        .html('<span class="current"></span><ul class="list"></ul>')
                );
                var i = t.next(),
                    n = t.find("option"),
                    s = t.find("option:selected");
                i.find(".current").html(s.data("display") || s.text()),
                    n.each(function (t) {
                        var n = e(this),
                            s = n.data("display");
                        i.find("ul").append(
                            e("<li></li>")
                                .attr("data-value", n.val())
                                .attr("data-display", s || null)
                                .addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : ""))
                                .html(n.text())
                        );
                    });
            }
            this.hide(),
                this.each(function () {
                    var t = e(this);
                    t.next().hasClass("nice-select") || i(t);
                }),
                e(document).off(".nice_select"),
                e(document).on("click.nice_select", ".nice-select", function (t) {
                    var i = e(this);
                    e(".nice-select").not(i).removeClass("open"), i.toggleClass("open"), i.hasClass("open") ? (i.find(".option"), i.find(".focus").removeClass("focus"), i.find(".selected").addClass("focus")) : i.focus();
                }),
                e(document).on("click.nice_select", function (t) {
                    0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option");
                }),
                e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
                    var i = e(this),
                        n = i.closest(".nice-select");
                    n.find(".selected").removeClass("selected"), i.addClass("selected");
                    var s = i.data("display") || i.text();
                    n.find(".current").text(s), n.prev("select").val(i.data("value")).trigger("change");
                }),
                e(document).on("keydown.nice_select", ".nice-select", function (t) {
                    var i = e(this),
                        n = e(i.find(".focus") || i.find(".list .option.selected"));
                    if (32 == t.keyCode || 13 == t.keyCode) return i.hasClass("open") ? n.trigger("click") : i.trigger("click"), !1;
                    if (40 == t.keyCode) {
                        if (i.hasClass("open")) {
                            var s = n.nextAll(".option:not(.disabled)").first();
                            s.length > 0 && (i.find(".focus").removeClass("focus"), s.addClass("focus"));
                        } else i.trigger("click");
                        return !1;
                    }
                    if (38 == t.keyCode) {
                        if (i.hasClass("open")) {
                            var r = n.prevAll(".option:not(.disabled)").first();
                            r.length > 0 && (i.find(".focus").removeClass("focus"), r.addClass("focus"));
                        } else i.trigger("click");
                        return !1;
                    }
                    if (27 == t.keyCode) i.hasClass("open") && i.trigger("click");
                    else if (9 == t.keyCode && i.hasClass("open")) return !1;
                });
            var n = document.createElement("a").style;
            return (n.cssText = "pointer-events:auto"), "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this;
        };
    })(jQuery),
    /*!
     * Bootstrap v5.2.3 (https://getbootstrap.com/)
     * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     */ (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = t());
    })(this, function () {
        "use strict";
        let e = "transitionend",
            t = (e) =>
                null == e
                    ? `${e}`
                    : Object.prototype.toString
                          .call(e)
                          .match(/\s([a-z]+)/i)[1]
                          .toLowerCase(),
            i = (e) => {
                do e += Math.floor(1e6 * Math.random());
                while (document.getElementById(e));
                return e;
            },
            n = (e) => {
                let t = e.getAttribute("data-bs-target");
                if (!t || "#" === t) {
                    let i = e.getAttribute("href");
                    if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
                    i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), (t = i && "#" !== i ? i.trim() : null);
                }
                return t;
            },
            s = (e) => {
                let t = n(e);
                return t && document.querySelector(t) ? t : null;
            },
            r = (e) => {
                let t = n(e);
                return t ? document.querySelector(t) : null;
            },
            o = (e) => {
                if (!e) return 0;
                let { transitionDuration: t, transitionDelay: i } = window.getComputedStyle(e),
                    n = Number.parseFloat(t),
                    s = Number.parseFloat(i);
                return n || s ? ((t = t.split(",")[0]), (i = i.split(",")[0]), (Number.parseFloat(t) + Number.parseFloat(i)) * 1e3) : 0;
            },
            a = (t) => {
                t.dispatchEvent(new Event(e));
            },
            l = (e) => !!e && "object" == typeof e && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
            c = (e) => (l(e) ? (e.jquery ? e[0] : e) : "string" == typeof e && e.length > 0 ? document.querySelector(e) : null),
            u = (e) => {
                if (!l(e) || 0 === e.getClientRects().length) return !1;
                let t = "visible" === getComputedStyle(e).getPropertyValue("visibility"),
                    i = e.closest("details:not([open])");
                if (!i) return t;
                if (i !== e) {
                    let n = e.closest("summary");
                    if ((n && n.parentNode !== i) || null === n) return !1;
                }
                return t;
            },
            h = (e) => !!(!e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled")) || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
            d = (e) => {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof e.getRootNode) {
                    let t = e.getRootNode();
                    return t instanceof ShadowRoot ? t : null;
                }
                return e instanceof ShadowRoot ? e : e.parentNode ? d(e.parentNode) : null;
            },
            p = () => {},
            f = (e) => {
                e.offsetHeight;
            },
            g = () => (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null),
            m = [],
            v = (e) => {
                "loading" === document.readyState
                    ? (m.length ||
                          document.addEventListener("DOMContentLoaded", () => {
                              for (let e of m) e();
                          }),
                      m.push(e))
                    : e();
            },
            y = () => "rtl" === document.documentElement.dir,
            $ = (e) => {
                v(() => {
                    let t = g();
                    if (t) {
                        let i = e.NAME,
                            n = t.fn[i];
                        (t.fn[i] = e.jQueryInterface), (t.fn[i].Constructor = e), (t.fn[i].noConflict = () => ((t.fn[i] = n), e.jQueryInterface));
                    }
                });
            },
            b = (e) => {
                "function" == typeof e && e();
            },
            w = (t, i, n = !0) => {
                if (!n) {
                    b(t);
                    return;
                }
                let s = o(i) + 5,
                    r = !1,
                    l = ({ target: n }) => {
                        n === i && ((r = !0), i.removeEventListener(e, l), b(t));
                    };
                i.addEventListener(e, l),
                    setTimeout(() => {
                        r || a(i);
                    }, s);
            },
            x = (e, t, i, n) => {
                let s = e.length,
                    r = e.indexOf(t);
                return -1 === r ? (!i && n ? e[s - 1] : e[0]) : ((r += i ? 1 : -1), n && (r = (r + s) % s), e[Math.max(0, Math.min(r, s - 1))]);
            },
            C = /[^.]*(?=\..*)\.|.*/,
            _ = /\..*/,
            T = /::\d+$/,
            E = {},
            k = 1,
            A = { mouseenter: "mouseover", mouseleave: "mouseout" },
            S = new Set([
                "click",
                "dblclick",
                "mouseup",
                "mousedown",
                "contextmenu",
                "mousewheel",
                "DOMMouseScroll",
                "mouseover",
                "mouseout",
                "mousemove",
                "selectstart",
                "selectend",
                "keydown",
                "keypress",
                "keyup",
                "orientationchange",
                "touchstart",
                "touchmove",
                "touchend",
                "touchcancel",
                "pointerdown",
                "pointermove",
                "pointerup",
                "pointerleave",
                "pointercancel",
                "gesturestart",
                "gesturechange",
                "gestureend",
                "focus",
                "blur",
                "change",
                "reset",
                "select",
                "submit",
                "focusin",
                "focusout",
                "load",
                "unload",
                "beforeunload",
                "resize",
                "move",
                "DOMContentLoaded",
                "readystatechange",
                "error",
                "abort",
                "scroll",
            ]);
        function D(e, t) {
            return (t && `${t}::${k++}`) || e.uidEvent || k++;
        }
        function L(e) {
            let t = D(e);
            return (e.uidEvent = t), (E[t] = E[t] || {}), E[t];
        }
        function N(e, t, i = null) {
            return Object.values(e).find((e) => e.callable === t && e.delegationSelector === i);
        }
        function P(e, t, i) {
            let n = "string" == typeof t,
                s = z(e);
            return S.has(s) || (s = e), [n, n ? i : t || i, s];
        }
        function O(e, t, i, n, s) {
            var r, o, a, l, c, u;
            if ("string" != typeof t || !e) return;
            let [h, d, p] = P(t, i, n);
            t in A &&
                (d =
                    ((r = d),
                    function (e) {
                        if (!e.relatedTarget || (e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))) return r.call(this, e);
                    }));
            let f = L(e),
                g = f[p] || (f[p] = {}),
                m = N(g, d, h ? i : null);
            if (m) {
                m.oneOff = m.oneOff && s;
                return;
            }
            let v = D(d, t.replace(C, "")),
                y = h
                    ? ((o = e),
                      (a = i),
                      (l = d),
                      function e(t) {
                          let i = o.querySelectorAll(a);
                          for (let { target: n } = t; n && n !== this; n = n.parentNode) for (let s of i) if (s === n) return M(t, { delegateTarget: n }), e.oneOff && H.off(o, t.type, a, l), l.apply(n, [t]);
                      })
                    : ((c = e),
                      (u = d),
                      function e(t) {
                          return M(t, { delegateTarget: c }), e.oneOff && H.off(c, t.type, u), u.apply(c, [t]);
                      });
            (y.delegationSelector = h ? i : null), (y.callable = d), (y.oneOff = s), (y.uidEvent = v), (g[v] = y), e.addEventListener(p, y, h);
        }
        function I(e, t, i, n, s) {
            let r = N(t[i], n, s);
            r && (e.removeEventListener(i, r, Boolean(s)), delete t[i][r.uidEvent]);
        }
        function j(e, t, i, n) {
            let s = t[i] || {};
            for (let r of Object.keys(s))
                if (r.includes(n)) {
                    let o = s[r];
                    I(e, t, i, o.callable, o.delegationSelector);
                }
        }
        function z(e) {
            return A[(e = e.replace(_, ""))] || e;
        }
        let H = {
            on(e, t, i, n) {
                O(e, t, i, n, !1);
            },
            one(e, t, i, n) {
                O(e, t, i, n, !0);
            },
            off(e, t, i, n) {
                if ("string" != typeof t || !e) return;
                let [s, r, o] = P(t, i, n),
                    a = o !== t,
                    l = L(e),
                    c = l[o] || {},
                    u = t.startsWith(".");
                if (void 0 !== r) {
                    if (!Object.keys(c).length) return;
                    I(e, l, o, r, s ? i : null);
                    return;
                }
                if (u) for (let h of Object.keys(l)) j(e, l, h, t.slice(1));
                for (let d of Object.keys(c)) {
                    let p = d.replace(T, "");
                    if (!a || t.includes(p)) {
                        let f = c[d];
                        I(e, l, o, f.callable, f.delegationSelector);
                    }
                }
            },
            trigger(e, t, i) {
                if ("string" != typeof t || !e) return null;
                let n = g(),
                    s = z(t),
                    r = null,
                    o = !0,
                    a = !0,
                    l = !1;
                t !== s && n && ((r = n.Event(t, i)), n(e).trigger(r), (o = !r.isPropagationStopped()), (a = !r.isImmediatePropagationStopped()), (l = r.isDefaultPrevented()));
                let c = new Event(t, { bubbles: o, cancelable: !0 });
                return (c = M(c, i)), l && c.preventDefault(), a && e.dispatchEvent(c), c.defaultPrevented && r && r.preventDefault(), c;
            },
        };
        function M(e, t) {
            for (let [i, n] of Object.entries(t || {}))
                try {
                    e[i] = n;
                } catch (s) {
                    Object.defineProperty(e, i, { configurable: !0, get: () => n });
                }
            return e;
        }
        let q = new Map(),
            W = {
                set(e, t, i) {
                    q.has(e) || q.set(e, new Map());
                    let n = q.get(e);
                    if (!n.has(t) && 0 !== n.size) {
                        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);
                        return;
                    }
                    n.set(t, i);
                },
                get: (e, t) => (q.has(e) && q.get(e).get(t)) || null,
                remove(e, t) {
                    if (!q.has(e)) return;
                    let i = q.get(e);
                    i.delete(t), 0 === i.size && q.delete(e);
                },
            };
        function B(e) {
            if ("true" === e) return !0;
            if ("false" === e) return !1;
            if (e === Number(e).toString()) return Number(e);
            if ("" === e || "null" === e) return null;
            if ("string" != typeof e) return e;
            try {
                return JSON.parse(decodeURIComponent(e));
            } catch (t) {
                return e;
            }
        }
        function F(e) {
            return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
        }
        let R = {
            setDataAttribute(e, t, i) {
                e.setAttribute(`data-bs-${F(t)}`, i);
            },
            removeDataAttribute(e, t) {
                e.removeAttribute(`data-bs-${F(t)}`);
            },
            getDataAttributes(e) {
                if (!e) return {};
                let t = {},
                    i = Object.keys(e.dataset).filter((e) => e.startsWith("bs") && !e.startsWith("bsConfig"));
                for (let n of i) {
                    let s = n.replace(/^bs/, "");
                    t[(s = s.charAt(0).toLowerCase() + s.slice(1, s.length))] = B(e.dataset[n]);
                }
                return t;
            },
            getDataAttribute: (e, t) => B(e.getAttribute(`data-bs-${F(t)}`)),
        };
        class V {
            static get Default() {
                return {};
            }
            static get DefaultType() {
                return {};
            }
            static get NAME() {
                throw Error('You have to implement the static method "NAME", for each component!');
            }
            _getConfig(e) {
                return (e = this._mergeConfigObj(e)), (e = this._configAfterMerge(e)), this._typeCheckConfig(e), e;
            }
            _configAfterMerge(e) {
                return e;
            }
            _mergeConfigObj(e, t) {
                let i = l(t) ? R.getDataAttribute(t, "config") : {};
                return { ...this.constructor.Default, ...("object" == typeof i ? i : {}), ...(l(t) ? R.getDataAttributes(t) : {}), ...("object" == typeof e ? e : {}) };
            }
            _typeCheckConfig(e, i = this.constructor.DefaultType) {
                for (let n of Object.keys(i)) {
                    let s = i[n],
                        r = e[n],
                        o = l(r) ? "element" : t(r);
                    if (!RegExp(s).test(o)) throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${s}".`);
                }
            }
        }
        class X extends V {
            constructor(e, t) {
                if ((super(), !(e = c(e)))) return;
                (this._element = e), (this._config = this._getConfig(t)), W.set(this._element, this.constructor.DATA_KEY, this);
            }
            dispose() {
                for (let e of (W.remove(this._element, this.constructor.DATA_KEY), H.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this))) this[e] = null;
            }
            _queueCallback(e, t, i = !0) {
                w(e, t, i);
            }
            _getConfig(e) {
                return (e = this._mergeConfigObj(e, this._element)), (e = this._configAfterMerge(e)), this._typeCheckConfig(e), e;
            }
            static getInstance(e) {
                return W.get(c(e), this.DATA_KEY);
            }
            static getOrCreateInstance(e, t = {}) {
                return this.getInstance(e) || new this(e, "object" == typeof t ? t : null);
            }
            static get VERSION() {
                return "5.2.3";
            }
            static get DATA_KEY() {
                return `bs.${this.NAME}`;
            }
            static get EVENT_KEY() {
                return `.${this.DATA_KEY}`;
            }
            static eventName(e) {
                return `${e}${this.EVENT_KEY}`;
            }
        }
        let U = (e, t = "hide") => {
                let i = `click.dismiss${e.EVENT_KEY}`,
                    n = e.NAME;
                H.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
                    if ((["A", "AREA"].includes(this.tagName) && i.preventDefault(), h(this))) return;
                    let s = r(this) || this.closest(`.${n}`),
                        o = e.getOrCreateInstance(s);
                    o[t]();
                });
            },
            K = ".bs.alert",
            Q = `close${K}`,
            Y = `closed${K}`;
        class Z extends X {
            static get NAME() {
                return "alert";
            }
            close() {
                let e = H.trigger(this._element, Q);
                if (e.defaultPrevented) return;
                this._element.classList.remove("show");
                let t = this._element.classList.contains("fade");
                this._queueCallback(() => this._destroyElement(), this._element, t);
            }
            _destroyElement() {
                this._element.remove(), H.trigger(this._element, Y), this.dispose();
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    let t = Z.getOrCreateInstance(this);
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                        t[e](this);
                    }
                });
            }
        }
        U(Z, "close"), $(Z);
        let G = '[data-bs-toggle="button"]',
            J = "click.bs.button.data-api";
        class ee extends X {
            static get NAME() {
                return "button";
            }
            toggle() {
                this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    let t = ee.getOrCreateInstance(this);
                    "toggle" === e && t[e]();
                });
            }
        }
        H.on(document, J, G, (e) => {
            e.preventDefault();
            let t = e.target.closest(G),
                i = ee.getOrCreateInstance(t);
            i.toggle();
        }),
            $(ee);
        let et = {
                find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)),
                findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e),
                children: (e, t) => [].concat(...e.children).filter((e) => e.matches(t)),
                parents(e, t) {
                    let i = [],
                        n = e.parentNode.closest(t);
                    for (; n; ) i.push(n), (n = n.parentNode.closest(t));
                    return i;
                },
                prev(e, t) {
                    let i = e.previousElementSibling;
                    for (; i; ) {
                        if (i.matches(t)) return [i];
                        i = i.previousElementSibling;
                    }
                    return [];
                },
                next(e, t) {
                    let i = e.nextElementSibling;
                    for (; i; ) {
                        if (i.matches(t)) return [i];
                        i = i.nextElementSibling;
                    }
                    return [];
                },
                focusableChildren(e) {
                    let t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e) => `${e}:not([tabindex^="-"])`).join(",");
                    return this.find(t, e).filter((e) => !h(e) && u(e));
                },
            },
            ei = ".bs.swipe",
            en = `touchstart${ei}`,
            es = `touchmove${ei}`,
            er = `touchend${ei}`,
            eo = `pointerdown${ei}`,
            ea = `pointerup${ei}`,
            el = { endCallback: null, leftCallback: null, rightCallback: null },
            ec = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
        class eu extends V {
            constructor(e, t) {
                if ((super(), (this._element = e), !e || !eu.isSupported())) return;
                (this._config = this._getConfig(t)), (this._deltaX = 0), (this._supportPointerEvents = Boolean(window.PointerEvent)), this._initEvents();
            }
            static get Default() {
                return el;
            }
            static get DefaultType() {
                return ec;
            }
            static get NAME() {
                return "swipe";
            }
            dispose() {
                H.off(this._element, ei);
            }
            _start(e) {
                if (!this._supportPointerEvents) {
                    this._deltaX = e.touches[0].clientX;
                    return;
                }
                this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX);
            }
            _end(e) {
                this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), b(this._config.endCallback);
            }
            _move(e) {
                this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX;
            }
            _handleSwipe() {
                let e = Math.abs(this._deltaX);
                if (e <= 40) return;
                let t = e / this._deltaX;
                (this._deltaX = 0), t && b(t > 0 ? this._config.rightCallback : this._config.leftCallback);
            }
            _initEvents() {
                this._supportPointerEvents
                    ? (H.on(this._element, eo, (e) => this._start(e)), H.on(this._element, ea, (e) => this._end(e)), this._element.classList.add("pointer-event"))
                    : (H.on(this._element, en, (e) => this._start(e)), H.on(this._element, es, (e) => this._move(e)), H.on(this._element, er, (e) => this._end(e)));
            }
            _eventIsPointerPenTouch(e) {
                return this._supportPointerEvents && ("pen" === e.pointerType || "touch" === e.pointerType);
            }
            static isSupported() {
                return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
            }
        }
        let eh = ".bs.carousel",
            ed = ".data-api",
            ep = "next",
            ef = "prev",
            eg = "left",
            em = "right",
            ev = `slide${eh}`,
            ey = `slid${eh}`,
            e8 = `keydown${eh}`,
            e$ = `mouseenter${eh}`,
            eb = `mouseleave${eh}`,
            ew = `dragstart${eh}`,
            ex = `load${eh}${ed}`,
            eC = `click${eh}${ed}`,
            e_ = "carousel",
            eT = "active",
            eE = ".active",
            ek = ".carousel-item",
            eA = eE + ek,
            eS = { ArrowLeft: em, ArrowRight: eg },
            eD = { interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0 },
            eL = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
        class e9 extends X {
            constructor(e, t) {
                super(e, t),
                    (this._interval = null),
                    (this._activeElement = null),
                    (this._isSliding = !1),
                    (this.touchTimeout = null),
                    (this._swipeHelper = null),
                    (this._indicatorsElement = et.findOne(".carousel-indicators", this._element)),
                    this._addEventListeners(),
                    this._config.ride === e_ && this.cycle();
            }
            static get Default() {
                return eD;
            }
            static get DefaultType() {
                return eL;
            }
            static get NAME() {
                return "carousel";
            }
            next() {
                this._slide(ep);
            }
            nextWhenVisible() {
                !document.hidden && u(this._element) && this.next();
            }
            prev() {
                this._slide(ef);
            }
            pause() {
                this._isSliding && a(this._element), this._clearInterval();
            }
            cycle() {
                this._clearInterval(), this._updateInterval(), (this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval));
            }
            _maybeEnableCycle() {
                if (this._config.ride) {
                    if (this._isSliding) {
                        H.one(this._element, ey, () => this.cycle());
                        return;
                    }
                    this.cycle();
                }
            }
            to(e) {
                let t = this._getItems();
                if (e > t.length - 1 || e < 0) return;
                if (this._isSliding) {
                    H.one(this._element, ey, () => this.to(e));
                    return;
                }
                let i = this._getItemIndex(this._getActive());
                i !== e && this._slide(e > i ? ep : ef, t[e]);
            }
            dispose() {
                this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
            }
            _configAfterMerge(e) {
                return (e.defaultInterval = e.interval), e;
            }
            _addEventListeners() {
                this._config.keyboard && H.on(this._element, e8, (e) => this._keydown(e)),
                    "hover" === this._config.pause && (H.on(this._element, e$, () => this.pause()), H.on(this._element, eb, () => this._maybeEnableCycle())),
                    this._config.touch && eu.isSupported() && this._addTouchEventListeners();
            }
            _addTouchEventListeners() {
                for (let e of et.find(".carousel-item img", this._element)) H.on(e, ew, (e) => e.preventDefault());
                let t = () => {
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), (this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval)));
                };
                this._swipeHelper = new eu(this._element, { leftCallback: () => this._slide(this._directionToOrder(eg)), rightCallback: () => this._slide(this._directionToOrder(em)), endCallback: t });
            }
            _keydown(e) {
                if (/input|textarea/i.test(e.target.tagName)) return;
                let t = eS[e.key];
                t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
            }
            _getItemIndex(e) {
                return this._getItems().indexOf(e);
            }
            _setActiveIndicatorElement(e) {
                if (!this._indicatorsElement) return;
                let t = et.findOne(eE, this._indicatorsElement);
                t.classList.remove(eT), t.removeAttribute("aria-current");
                let i = et.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
                i && (i.classList.add(eT), i.setAttribute("aria-current", "true"));
            }
            _updateInterval() {
                let e = this._activeElement || this._getActive();
                if (!e) return;
                let t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
                this._config.interval = t || this._config.defaultInterval;
            }
            _slide(e, t = null) {
                if (this._isSliding) return;
                let i = this._getActive(),
                    n = e === ep,
                    s = t || x(this._getItems(), i, n, this._config.wrap);
                if (s === i) return;
                let r = this._getItemIndex(s),
                    o = (t) => H.trigger(this._element, t, { relatedTarget: s, direction: this._orderToDirection(e), from: this._getItemIndex(i), to: r }),
                    a = o(ev);
                if (a.defaultPrevented || !i || !s) return;
                let l = Boolean(this._interval);
                this.pause(), (this._isSliding = !0), this._setActiveIndicatorElement(r), (this._activeElement = s);
                let c = n ? "carousel-item-start" : "carousel-item-end",
                    u = n ? "carousel-item-next" : "carousel-item-prev";
                s.classList.add(u), f(s), i.classList.add(c), s.classList.add(c);
                let h = () => {
                    s.classList.remove(c, u), s.classList.add(eT), i.classList.remove(eT, u, c), (this._isSliding = !1), o(ey);
                };
                this._queueCallback(h, i, this._isAnimated()), l && this.cycle();
            }
            _isAnimated() {
                return this._element.classList.contains("slide");
            }
            _getActive() {
                return et.findOne(eA, this._element);
            }
            _getItems() {
                return et.find(ek, this._element);
            }
            _clearInterval() {
                this._interval && (clearInterval(this._interval), (this._interval = null));
            }
            _directionToOrder(e) {
                return y() ? (e === eg ? ef : ep) : e === eg ? ep : ef;
            }
            _orderToDirection(e) {
                return y() ? (e === ef ? eg : em) : e === ef ? em : eg;
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    let t = e9.getOrCreateInstance(this, e);
                    if ("number" == typeof e) {
                        t.to(e);
                        return;
                    }
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                        t[e]();
                    }
                });
            }
        }
        H.on(document, eC, "[data-bs-slide], [data-bs-slide-to]", function (e) {
            let t = r(this);
            if (!t || !t.classList.contains(e_)) return;
            e.preventDefault();
            let i = e9.getOrCreateInstance(t),
                n = this.getAttribute("data-bs-slide-to");
            if (n) {
                i.to(n), i._maybeEnableCycle();
                return;
            }
            if ("next" === R.getDataAttribute(this, "slide")) {
                i.next(), i._maybeEnableCycle();
                return;
            }
            i.prev(), i._maybeEnableCycle();
        }),
            H.on(window, ex, () => {
                let e = et.find('[data-bs-ride="carousel"]');
                for (let t of e) e9.getOrCreateInstance(t);
            }),
            $(e9);
        let eN = ".bs.collapse",
            eP = `show${eN}`,
            eO = `shown${eN}`,
            eI = `hide${eN}`,
            ej = `hidden${eN}`,
            ez = `click${eN}.data-api`,
            eH = "show",
            eM = "collapse",
            eq = "collapsing",
            eW = `:scope .${eM} .${eM}`,
            eB = '[data-bs-toggle="collapse"]',
            e0 = { parent: null, toggle: !0 },
            eF = { parent: "(null|element)", toggle: "boolean" };
        class eR extends X {
            constructor(e, t) {
                super(e, t), (this._isTransitioning = !1), (this._triggerArray = []);
                let i = et.find(eB);
                for (let n of i) {
                    let r = s(n),
                        o = et.find(r).filter((e) => e === this._element);
                    null !== r && o.length && this._triggerArray.push(n);
                }
                this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
            }
            static get Default() {
                return e0;
            }
            static get DefaultType() {
                return eF;
            }
            static get NAME() {
                return "collapse";
            }
            toggle() {
                this._isShown() ? this.hide() : this.show();
            }
            show() {
                if (this._isTransitioning || this._isShown()) return;
                let e = [];
                if (
                    (this._config.parent &&
                        (e = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing")
                            .filter((e) => e !== this._element)
                            .map((e) => eR.getOrCreateInstance(e, { toggle: !1 }))),
                    e.length && e[0]._isTransitioning)
                )
                    return;
                let t = H.trigger(this._element, eP);
                if (t.defaultPrevented) return;
                for (let i of e) i.hide();
                let n = this._getDimension();
                this._element.classList.remove(eM), this._element.classList.add(eq), (this._element.style[n] = 0), this._addAriaAndCollapsedClass(this._triggerArray, !0), (this._isTransitioning = !0);
                let s = () => {
                        (this._isTransitioning = !1), this._element.classList.remove(eq), this._element.classList.add(eM, eH), (this._element.style[n] = ""), H.trigger(this._element, eO);
                    },
                    r = n[0].toUpperCase() + n.slice(1),
                    o = `scroll${r}`;
                this._queueCallback(s, this._element, !0), (this._element.style[n] = `${this._element[o]}px`);
            }
            hide() {
                if (this._isTransitioning || !this._isShown()) return;
                let e = H.trigger(this._element, eI);
                if (e.defaultPrevented) return;
                let t = this._getDimension();
                for (let i of ((this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`), f(this._element), this._element.classList.add(eq), this._element.classList.remove(eM, eH), this._triggerArray)) {
                    let n = r(i);
                    n && !this._isShown(n) && this._addAriaAndCollapsedClass([i], !1);
                }
                this._isTransitioning = !0;
                let s = () => {
                    (this._isTransitioning = !1), this._element.classList.remove(eq), this._element.classList.add(eM), H.trigger(this._element, ej);
                };
                (this._element.style[t] = ""), this._queueCallback(s, this._element, !0);
            }
            _isShown(e = this._element) {
                return e.classList.contains(eH);
            }
            _configAfterMerge(e) {
                return (e.toggle = Boolean(e.toggle)), (e.parent = c(e.parent)), e;
            }
            _getDimension() {
                return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
            }
            _initializeChildren() {
                if (!this._config.parent) return;
                let e = this._getFirstLevelChildren(eB);
                for (let t of e) {
                    let i = r(t);
                    i && this._addAriaAndCollapsedClass([t], this._isShown(i));
                }
            }
            _getFirstLevelChildren(e) {
                let t = et.find(eW, this._config.parent);
                return et.find(e, this._config.parent).filter((e) => !t.includes(e));
            }
            _addAriaAndCollapsedClass(e, t) {
                if (e.length) for (let i of e) i.classList.toggle("collapsed", !t), i.setAttribute("aria-expanded", t);
            }
            static jQueryInterface(e) {
                let t = {};
                return (
                    "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1),
                    this.each(function () {
                        let i = eR.getOrCreateInstance(this, t);
                        if ("string" == typeof e) {
                            if (void 0 === i[e]) throw TypeError(`No method named "${e}"`);
                            i[e]();
                        }
                    })
                );
            }
        }
        H.on(document, ez, eB, function (e) {
            ("A" === e.target.tagName || (e.delegateTarget && "A" === e.delegateTarget.tagName)) && e.preventDefault();
            let t = s(this),
                i = et.find(t);
            for (let n of i) eR.getOrCreateInstance(n, { toggle: !1 }).toggle();
        }),
            $(eR);
        var e1 = "bottom",
            eV = "right",
            eX = "left",
            eU = "auto",
            eK = ["top", e1, eV, eX],
            e3 = "start",
            eQ = "clippingParents",
            eY = "viewport",
            e2 = "popper",
            e4 = "reference",
            e7 = eK.reduce(function (e, t) {
                return e.concat([t + "-" + e3, t + "-end"]);
            }, []),
            eZ = [].concat(eK, [eU]).reduce(function (e, t) {
                return e.concat([t, t + "-" + e3, t + "-end"]);
            }, []),
            eG = "beforeRead",
            e5 = "read",
            e6 = "afterRead",
            eJ = "beforeMain",
            te = "main",
            tt = "afterMain",
            ti = "beforeWrite",
            tn = "write",
            ts = "afterWrite",
            tr = [eG, e5, e6, eJ, te, tt, ti, tn, ts];
        function to(e) {
            return e ? (e.nodeName || "").toLowerCase() : null;
        }
        function ta(e) {
            if (null == e) return window;
            if ("[object Window]" !== e.toString()) {
                var t = e.ownerDocument;
                return (t && t.defaultView) || window;
            }
            return e;
        }
        function tl(e) {
            var t = ta(e).Element;
            return e instanceof t || e instanceof Element;
        }
        function tc(e) {
            var t = ta(e).HTMLElement;
            return e instanceof t || e instanceof HTMLElement;
        }
        function tu(e) {
            if ("undefined" == typeof ShadowRoot) return !1;
            var t = ta(e).ShadowRoot;
            return e instanceof t || e instanceof ShadowRoot;
        }
        let th = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function e(t) {
                var i = t.state;
                Object.keys(i.elements).forEach(function (e) {
                    var t = i.styles[e] || {},
                        n = i.attributes[e] || {},
                        s = i.elements[e];
                    tc(s) &&
                        to(s) &&
                        (Object.assign(s.style, t),
                        Object.keys(n).forEach(function (e) {
                            var t = n[e];
                            !1 === t ? s.removeAttribute(e) : s.setAttribute(e, !0 === t ? "" : t);
                        }));
                });
            },
            effect: function e(t) {
                var i = t.state,
                    n = { popper: { position: i.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
                return (
                    Object.assign(i.elements.popper.style, n.popper),
                    (i.styles = n),
                    i.elements.arrow && Object.assign(i.elements.arrow.style, n.arrow),
                    function () {
                        Object.keys(i.elements).forEach(function (e) {
                            var t = i.elements[e],
                                s = i.attributes[e] || {},
                                r = Object.keys(i.styles.hasOwnProperty(e) ? i.styles[e] : n[e]).reduce(function (e, t) {
                                    return (e[t] = ""), e;
                                }, {});
                            tc(t) &&
                                to(t) &&
                                (Object.assign(t.style, r),
                                Object.keys(s).forEach(function (e) {
                                    t.removeAttribute(e);
                                }));
                        });
                    }
                );
            },
            requires: ["computeStyles"],
        };
        function td(e) {
            return e.split("-")[0];
        }
        var tp = Math.max,
            tf = Math.min,
            tg = Math.round;
        function tm() {
            var e = navigator.userAgentData;
            return null != e && e.brands
                ? e.brands
                      .map(function (e) {
                          return e.brand + "/" + e.version;
                      })
                      .join(" ")
                : navigator.userAgent;
        }
        function tv() {
            return !/^((?!chrome|android).)*safari/i.test(tm());
        }
        function ty(e, t, i) {
            void 0 === t && (t = !1), void 0 === i && (i = !1);
            var n = e.getBoundingClientRect(),
                s = 1,
                r = 1;
            t && tc(e) && ((s = (e.offsetWidth > 0 && tg(n.width) / e.offsetWidth) || 1), (r = (e.offsetHeight > 0 && tg(n.height) / e.offsetHeight) || 1));
            var o = (tl(e) ? ta(e) : window).visualViewport,
                a = !tv() && i,
                l = (n.left + (a && o ? o.offsetLeft : 0)) / s,
                c = (n.top + (a && o ? o.offsetTop : 0)) / r,
                u = n.width / s,
                h = n.height / r;
            return { width: u, height: h, top: c, right: l + u, bottom: c + h, left: l, x: l, y: c };
        }
        function t8(e) {
            var t = ty(e),
                i = e.offsetWidth,
                n = e.offsetHeight;
            return 1 >= Math.abs(t.width - i) && (i = t.width), 1 >= Math.abs(t.height - n) && (n = t.height), { x: e.offsetLeft, y: e.offsetTop, width: i, height: n };
        }
        function t$(e, t) {
            var i = t.getRootNode && t.getRootNode();
            if (e.contains(t)) return !0;
            if (i && tu(i)) {
                var n = t;
                do {
                    if (n && e.isSameNode(n)) return !0;
                    n = n.parentNode || n.host;
                } while (n);
            }
            return !1;
        }
        function tb(e) {
            return ta(e).getComputedStyle(e);
        }
        function tw(e) {
            return ["table", "td", "th"].indexOf(to(e)) >= 0;
        }
        function tx(e) {
            return ((tl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
        }
        function tC(e) {
            return "html" === to(e) ? e : e.assignedSlot || e.parentNode || (tu(e) ? e.host : null) || tx(e);
        }
        function t_(e) {
            return tc(e) && "fixed" !== tb(e).position ? e.offsetParent : null;
        }
        function tT(e) {
            for (var t = ta(e), i = t_(e); i && tw(i) && "static" === tb(i).position; ) i = t_(i);
            return i && ("html" === to(i) || ("body" === to(i) && "static" === tb(i).position))
                ? t
                : i ||
                      (function e(t) {
                          var i = /firefox/i.test(tm());
                          if (/Trident/i.test(tm()) && tc(t) && "fixed" === tb(t).position) return null;
                          var n = tC(t);
                          for (tu(n) && (n = n.host); tc(n) && 0 > ["html", "body"].indexOf(to(n)); ) {
                              var s = tb(n);
                              if (
                                  "none" !== s.transform ||
                                  "none" !== s.perspective ||
                                  "paint" === s.contain ||
                                  -1 !== ["transform", "perspective"].indexOf(s.willChange) ||
                                  (i && "filter" === s.willChange) ||
                                  (i && s.filter && "none" !== s.filter)
                              )
                                  return n;
                              n = n.parentNode;
                          }
                          return null;
                      })(e) ||
                      t;
        }
        function tE(e) {
            return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
        }
        function tk(e, t, i) {
            return tp(e, tf(t, i));
        }
        function tA() {
            return { top: 0, right: 0, bottom: 0, left: 0 };
        }
        function tS(e) {
            return Object.assign({}, tA(), e);
        }
        function tD(e, t) {
            return t.reduce(function (t, i) {
                return (t[i] = e), t;
            }, {});
        }
        let tL = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function e(t) {
                var i,
                    n = t.state,
                    s = t.name,
                    r = t.options,
                    o = n.elements.arrow,
                    a = n.modifiersData.popperOffsets,
                    l = td(n.placement),
                    c = tE(l),
                    u = [eX, eV].indexOf(l) >= 0 ? "height" : "width";
                if (o && a) {
                    var h,
                        d,
                        p = ((h = r.padding), (d = n), tS("number" != typeof (h = "function" == typeof h ? h(Object.assign({}, d.rects, { placement: d.placement })) : h) ? h : tD(h, eK))),
                        f = t8(o),
                        g = n.rects.reference[u] + n.rects.reference[c] - a[c] - n.rects.popper[u],
                        m = a[c] - n.rects.reference[c],
                        v = tT(o),
                        y = v ? ("y" === c ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
                        $ = p["y" === c ? "top" : eX],
                        b = y - f[u] - p["y" === c ? e1 : eV],
                        w = y / 2 - f[u] / 2 + (g / 2 - m / 2),
                        x = tk($, w, b),
                        C = c;
                    n.modifiersData[s] = (((i = {})[C] = x), (i.centerOffset = x - w), i);
                }
            },
            effect: function e(t) {
                var i = t.state,
                    n = t.options.element,
                    s = void 0 === n ? "[data-popper-arrow]" : n;
                null != s && ("string" != typeof s || (s = i.elements.popper.querySelector(s))) && t$(i.elements.popper, s) && (i.elements.arrow = s);
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"],
        };
        function t9(e) {
            return e.split("-")[1];
        }
        var tN = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function tP(e) {
            var t,
                i,
                n = e.popper,
                s = e.popperRect,
                r = e.placement,
                o = e.variation,
                a = e.offsets,
                l = e.position,
                c = e.gpuAcceleration,
                u = e.adaptive,
                h = e.roundOffsets,
                d = e.isFixed,
                p = a.x,
                f = void 0 === p ? 0 : p,
                g = a.y,
                m = void 0 === g ? 0 : g,
                v = "function" == typeof h ? h({ x: f, y: m }) : { x: f, y: m };
            (f = v.x), (m = v.y);
            var y = a.hasOwnProperty("x"),
                $ = a.hasOwnProperty("y"),
                b = eX,
                w = "top",
                x = window;
            if (u) {
                var C = tT(n),
                    _ = "clientHeight",
                    T = "clientWidth";
                C === ta(n) && ((C = tx(n)), "static" !== tb(C).position && "absolute" === l && ((_ = "scrollHeight"), (T = "scrollWidth"))),
                    ("top" === r || ((r === eX || r === eV) && "end" === o)) && ((w = e1), (m -= (d && C === x && x.visualViewport ? x.visualViewport.height : C[_]) - s.height), (m *= c ? 1 : -1)),
                    (r === eX || (("top" === r || r === e1) && "end" === o)) && ((b = eV), (f -= (d && C === x && x.visualViewport ? x.visualViewport.width : C[T]) - s.width), (f *= c ? 1 : -1));
            }
            var E,
                k,
                A,
                S,
                D = Object.assign({ position: l }, u && tN),
                L = !0 === h ? ((k = (E = { x: f, y: m }).x), (A = E.y), { x: tg(k * (S = window.devicePixelRatio || 1)) / S || 0, y: tg(A * S) / S || 0 }) : { x: f, y: m };
            return ((f = L.x), (m = L.y), c)
                ? Object.assign({}, D, (((i = {})[w] = $ ? "0" : ""), (i[b] = y ? "0" : ""), (i.transform = 1 >= (x.devicePixelRatio || 1) ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)"), i))
                : Object.assign({}, D, (((t = {})[w] = $ ? m + "px" : ""), (t[b] = y ? f + "px" : ""), (t.transform = ""), t));
        }
        let tO = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function e(t) {
                var i = t.state,
                    n = t.options,
                    s = n.gpuAcceleration,
                    r = n.adaptive,
                    o = n.roundOffsets,
                    a = void 0 === o || o,
                    l = { placement: td(i.placement), variation: t9(i.placement), popper: i.elements.popper, popperRect: i.rects.popper, gpuAcceleration: void 0 === s || s, isFixed: "fixed" === i.options.strategy };
                null != i.modifiersData.popperOffsets &&
                    (i.styles.popper = Object.assign({}, i.styles.popper, tP(Object.assign({}, l, { offsets: i.modifiersData.popperOffsets, position: i.options.strategy, adaptive: void 0 === r || r, roundOffsets: a })))),
                    null != i.modifiersData.arrow && (i.styles.arrow = Object.assign({}, i.styles.arrow, tP(Object.assign({}, l, { offsets: i.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: a })))),
                    (i.attributes.popper = Object.assign({}, i.attributes.popper, { "data-popper-placement": i.placement }));
            },
            data: {},
        };
        var tI = { passive: !0 };
        let tj = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function e() {},
            effect: function e(t) {
                var i = t.state,
                    n = t.instance,
                    s = t.options,
                    r = s.scroll,
                    o = void 0 === r || r,
                    a = s.resize,
                    l = void 0 === a || a,
                    c = ta(i.elements.popper),
                    u = [].concat(i.scrollParents.reference, i.scrollParents.popper);
                return (
                    o &&
                        u.forEach(function (e) {
                            e.addEventListener("scroll", n.update, tI);
                        }),
                    l && c.addEventListener("resize", n.update, tI),
                    function () {
                        o &&
                            u.forEach(function (e) {
                                e.removeEventListener("scroll", n.update, tI);
                            }),
                            l && c.removeEventListener("resize", n.update, tI);
                    }
                );
            },
            data: {},
        };
        var tz = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function tH(e) {
            return e.replace(/left|right|bottom|top/g, function (e) {
                return tz[e];
            });
        }
        var tM = { start: "end", end: "start" };
        function tq(e) {
            return e.replace(/start|end/g, function (e) {
                return tM[e];
            });
        }
        function tW(e) {
            var t,
                i = ta(e);
            return { scrollLeft: i.pageXOffset, scrollTop: i.pageYOffset };
        }
        function tB(e) {
            return ty(tx(e)).left + tW(e).scrollLeft;
        }
        function t0(e) {
            var t = tb(e),
                i = t.overflow,
                n = t.overflowX,
                s = t.overflowY;
            return /auto|scroll|overlay|hidden/.test(i + s + n);
        }
        function tF(e, t) {
            void 0 === t && (t = []);
            var i,
                n = (function e(t) {
                    return ["html", "body", "#document"].indexOf(to(t)) >= 0 ? t.ownerDocument.body : tc(t) && t0(t) ? t : e(tC(t));
                })(e),
                s = n === (null == (i = e.ownerDocument) ? void 0 : i.body),
                r = ta(n),
                o = s ? [r].concat(r.visualViewport || [], t0(n) ? n : []) : n,
                a = t.concat(o);
            return s ? a : a.concat(tF(tC(o)));
        }
        function tR(e) {
            return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
        }
        function t1(e, t, i) {
            var n, s, r, o, a, l, c, u, h, d, p, f;
            return t === eY
                ? tR(
                      (function e(t, i) {
                          var n = ta(t),
                              s = tx(t),
                              r = n.visualViewport,
                              o = s.clientWidth,
                              a = s.clientHeight,
                              l = 0,
                              c = 0;
                          if (r) {
                              (o = r.width), (a = r.height);
                              var u = tv();
                              (u || (!u && "fixed" === i)) && ((l = r.offsetLeft), (c = r.offsetTop));
                          }
                          return { width: o, height: a, x: l + tB(t), y: c };
                      })(e, i)
                  )
                : tl(t)
                ? ((n = t),
                  ((r = ty(n, !1, "fixed" === (s = i))).top = r.top + n.clientTop),
                  (r.left = r.left + n.clientLeft),
                  (r.bottom = r.top + n.clientHeight),
                  (r.right = r.left + n.clientWidth),
                  (r.width = n.clientWidth),
                  (r.height = n.clientHeight),
                  (r.x = r.left),
                  (r.y = r.top),
                  r)
                : tR(
                      ((o = tx(e)),
                      (l = tx(o)),
                      (c = tW(o)),
                      (u = null == (a = o.ownerDocument) ? void 0 : a.body),
                      (h = tp(l.scrollWidth, l.clientWidth, u ? u.scrollWidth : 0, u ? u.clientWidth : 0)),
                      (d = tp(l.scrollHeight, l.clientHeight, u ? u.scrollHeight : 0, u ? u.clientHeight : 0)),
                      (p = -c.scrollLeft + tB(o)),
                      (f = -c.scrollTop),
                      "rtl" === tb(u || l).direction && (p += tp(l.clientWidth, u ? u.clientWidth : 0) - h),
                      { width: h, height: d, x: p, y: f })
                  );
        }
        function tV(e) {
            var t,
                i = e.reference,
                n = e.element,
                s = e.placement,
                r = s ? td(s) : null,
                o = s ? t9(s) : null,
                a = i.x + i.width / 2 - n.width / 2,
                l = i.y + i.height / 2 - n.height / 2;
            switch (r) {
                case "top":
                    t = { x: a, y: i.y - n.height };
                    break;
                case e1:
                    t = { x: a, y: i.y + i.height };
                    break;
                case eV:
                    t = { x: i.x + i.width, y: l };
                    break;
                case eX:
                    t = { x: i.x - n.width, y: l };
                    break;
                default:
                    t = { x: i.x, y: i.y };
            }
            var c = r ? tE(r) : null;
            if (null != c) {
                var u = "y" === c ? "height" : "width";
                switch (o) {
                    case e3:
                        t[c] = t[c] - (i[u] / 2 - n[u] / 2);
                        break;
                    case "end":
                        t[c] = t[c] + (i[u] / 2 - n[u] / 2);
                }
            }
            return t;
        }
        function tX(e, t) {
            void 0 === t && (t = {});
            var i,
                n,
                s,
                r,
                o,
                a,
                l,
                c,
                u,
                h,
                d = t,
                p = d.placement,
                f = void 0 === p ? e.placement : p,
                g = d.strategy,
                m = void 0 === g ? e.strategy : g,
                v = d.boundary,
                y = d.rootBoundary,
                $ = d.elementContext,
                b = void 0 === $ ? e2 : $,
                w = d.altBoundary,
                x = d.padding,
                C = void 0 === x ? 0 : x,
                _ = tS("number" != typeof C ? C : tD(C, eK)),
                T = e.rects.popper,
                E = e.elements[void 0 !== w && w ? (b === e2 ? e4 : e2) : b],
                k =
                    ((i = tl(E) ? E : E.contextElement || tx(e.elements.popper)),
                    (n = void 0 === v ? eQ : v),
                    (s = void 0 === y ? eY : y),
                    (r = m),
                    (u = (c = [].concat(
                        "clippingParents" === n
                            ? ((o = i),
                              (a = tF(tC(o))),
                              (l = ["absolute", "fixed"].indexOf(tb(o).position) >= 0 && tc(o) ? tT(o) : o),
                              tl(l)
                                  ? a.filter(function (e) {
                                        return tl(e) && t$(e, l) && "body" !== to(e);
                                    })
                                  : [])
                            : [].concat(n),
                        [s]
                    ))[0]),
                    ((h = c.reduce(function (e, t) {
                        var n = t1(i, t, r);
                        return (e.top = tp(n.top, e.top)), (e.right = tf(n.right, e.right)), (e.bottom = tf(n.bottom, e.bottom)), (e.left = tp(n.left, e.left)), e;
                    }, t1(i, u, r))).width = h.right - h.left),
                    (h.height = h.bottom - h.top),
                    (h.x = h.left),
                    (h.y = h.top),
                    h),
                A = ty(e.elements.reference),
                S = tV({ reference: A, element: T, strategy: "absolute", placement: f }),
                D = tR(Object.assign({}, T, S)),
                L = b === e2 ? D : A,
                N = { top: k.top - L.top + _.top, bottom: L.bottom - k.bottom + _.bottom, left: k.left - L.left + _.left, right: L.right - k.right + _.right },
                P = e.modifiersData.offset;
            if (b === e2 && P) {
                var O = P[f];
                Object.keys(N).forEach(function (e) {
                    var t = [eV, e1].indexOf(e) >= 0 ? 1 : -1,
                        i = ["top", e1].indexOf(e) >= 0 ? "y" : "x";
                    N[e] += O[i] * t;
                });
            }
            return N;
        }
        let tU = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function e(t) {
                var i = t.state,
                    n = t.options,
                    s = t.name;
                if (!i.modifiersData[s]._skip) {
                    for (
                        var r = n.mainAxis,
                            o = void 0 === r || r,
                            a = n.altAxis,
                            l = void 0 === a || a,
                            c = n.fallbackPlacements,
                            u = n.padding,
                            h = n.boundary,
                            d = n.rootBoundary,
                            p = n.altBoundary,
                            f = n.flipVariations,
                            g = void 0 === f || f,
                            m = n.allowedAutoPlacements,
                            v = i.options.placement,
                            y = td(v),
                            $ = [v]
                                .concat(
                                    c ||
                                        (y !== v && g
                                            ? (function e(t) {
                                                  if (td(t) === eU) return [];
                                                  var i = tH(t);
                                                  return [tq(t), i, tq(i)];
                                              })(v)
                                            : [tH(v)])
                                )
                                .reduce(function (e, t) {
                                    var n, s, r, o, a, l, c, p, f, v, y, $, b, w;
                                    return e.concat(
                                        td(t) === eU
                                            ? ((n = i),
                                              (s = { placement: t, boundary: h, rootBoundary: d, padding: u, flipVariations: g, allowedAutoPlacements: m }),
                                              (o = (r = s).placement),
                                              (a = r.boundary),
                                              (l = r.rootBoundary),
                                              (c = r.padding),
                                              (p = r.flipVariations),
                                              (v = void 0 === (f = r.allowedAutoPlacements) ? eZ : f),
                                              0 ===
                                                  (b = ($ = (y = t9(o))
                                                      ? p
                                                          ? e7
                                                          : e7.filter(function (e) {
                                                                return t9(e) === y;
                                                            })
                                                      : eK).filter(function (e) {
                                                      return v.indexOf(e) >= 0;
                                                  })).length && (b = $),
                                              Object.keys(
                                                  (w = b.reduce(function (e, t) {
                                                      return (e[t] = tX(n, { placement: t, boundary: a, rootBoundary: l, padding: c })[td(t)]), e;
                                                  }, {}))
                                              ).sort(function (e, t) {
                                                  return w[e] - w[t];
                                              }))
                                            : t
                                    );
                                }, []),
                            b = i.rects.reference,
                            w = i.rects.popper,
                            x = new Map(),
                            C = !0,
                            _ = $[0],
                            T = 0;
                        T < $.length;
                        T++
                    ) {
                        var E = $[T],
                            k = td(E),
                            A = t9(E) === e3,
                            S = ["top", e1].indexOf(k) >= 0,
                            D = S ? "width" : "height",
                            L = tX(i, { placement: E, boundary: h, rootBoundary: d, altBoundary: p, padding: u }),
                            N = S ? (A ? eV : eX) : A ? e1 : "top";
                        b[D] > w[D] && (N = tH(N));
                        var P = tH(N),
                            O = [];
                        if (
                            (o && O.push(L[k] <= 0),
                            l && O.push(L[N] <= 0, L[P] <= 0),
                            O.every(function (e) {
                                return e;
                            }))
                        ) {
                            (_ = E), (C = !1);
                            break;
                        }
                        x.set(E, O);
                    }
                    if (C)
                        for (
                            var I = g ? 3 : 1,
                                j = function e(t) {
                                    var i = $.find(function (e) {
                                        var i = x.get(e);
                                        if (i)
                                            return i.slice(0, t).every(function (e) {
                                                return e;
                                            });
                                    });
                                    if (i) return (_ = i), "break";
                                },
                                z = I;
                            z > 0 && "break" !== j(z);
                            z--
                        );
                    i.placement !== _ && ((i.modifiersData[s]._skip = !0), (i.placement = _), (i.reset = !0));
                }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
        };
        function tK(e, t, i) {
            return void 0 === i && (i = { x: 0, y: 0 }), { top: e.top - t.height - i.y, right: e.right - t.width + i.x, bottom: e.bottom - t.height + i.y, left: e.left - t.width - i.x };
        }
        function t3(e) {
            return ["top", eV, e1, eX].some(function (t) {
                return e[t] >= 0;
            });
        }
        let tQ = {
                name: "hide",
                enabled: !0,
                phase: "main",
                requiresIfExists: ["preventOverflow"],
                fn: function e(t) {
                    var i = t.state,
                        n = t.name,
                        s = i.rects.reference,
                        r = i.rects.popper,
                        o = i.modifiersData.preventOverflow,
                        a = tX(i, { elementContext: "reference" }),
                        l = tX(i, { altBoundary: !0 }),
                        c = tK(a, s),
                        u = tK(l, r, o),
                        h = t3(c),
                        d = t3(u);
                    (i.modifiersData[n] = { referenceClippingOffsets: c, popperEscapeOffsets: u, isReferenceHidden: h, hasPopperEscaped: d }),
                        (i.attributes.popper = Object.assign({}, i.attributes.popper, { "data-popper-reference-hidden": h, "data-popper-escaped": d }));
                },
            },
            tY = {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function e(t) {
                    var i = t.state,
                        n = t.options,
                        s = t.name,
                        r = n.offset,
                        o = void 0 === r ? [0, 0] : r,
                        a = eZ.reduce(function (e, t) {
                            var n, s, r, a, l, c, u, h;
                            return (
                                (e[t] =
                                    ((n = t),
                                    (s = i.rects),
                                    (r = o),
                                    (l = [eX, "top"].indexOf((a = td(n))) >= 0 ? -1 : 1),
                                    (u = (c = "function" == typeof r ? r(Object.assign({}, s, { placement: n })) : r)[0]),
                                    (h = c[1]),
                                    (u = u || 0),
                                    (h = (h || 0) * l),
                                    [eX, eV].indexOf(a) >= 0 ? { x: h, y: u } : { x: u, y: h })),
                                e
                            );
                        }, {}),
                        l = a[i.placement],
                        c = l.x,
                        u = l.y;
                    null != i.modifiersData.popperOffsets && ((i.modifiersData.popperOffsets.x += c), (i.modifiersData.popperOffsets.y += u)), (i.modifiersData[s] = a);
                },
            },
            t2 = {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function e(t) {
                    var i = t.state,
                        n = t.name;
                    i.modifiersData[n] = tV({ reference: i.rects.reference, element: i.rects.popper, strategy: "absolute", placement: i.placement });
                },
                data: {},
            },
            t4 = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function e(t) {
                    var i,
                        n = t.state,
                        s = t.options,
                        r = t.name,
                        o = s.mainAxis,
                        a = s.altAxis,
                        l = s.boundary,
                        c = s.rootBoundary,
                        u = s.altBoundary,
                        h = s.padding,
                        d = s.tether,
                        p = void 0 === d || d,
                        f = s.tetherOffset,
                        g = void 0 === f ? 0 : f,
                        m = tX(n, { boundary: l, rootBoundary: c, padding: h, altBoundary: u }),
                        v = td(n.placement),
                        y = t9(n.placement),
                        $ = !y,
                        b = tE(v),
                        w = "x" === (i = b) ? "y" : "x",
                        x = n.modifiersData.popperOffsets,
                        C = n.rects.reference,
                        _ = n.rects.popper,
                        T = "function" == typeof g ? g(Object.assign({}, n.rects, { placement: n.placement })) : g,
                        E = "number" == typeof T ? { mainAxis: T, altAxis: T } : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
                        k = n.modifiersData.offset ? n.modifiersData.offset[n.placement] : null,
                        A = { x: 0, y: 0 };
                    if (x) {
                        if (void 0 === o || o) {
                            var S,
                                D = "y" === b ? "top" : eX,
                                L = "y" === b ? e1 : eV,
                                N = "y" === b ? "height" : "width",
                                P = x[b],
                                O = P + m[D],
                                I = P - m[L],
                                j = p ? -_[N] / 2 : 0,
                                z = y === e3 ? C[N] : _[N],
                                H = y === e3 ? -_[N] : -C[N],
                                M = n.elements.arrow,
                                q = p && M ? t8(M) : { width: 0, height: 0 },
                                W = n.modifiersData["arrow#persistent"] ? n.modifiersData["arrow#persistent"].padding : tA(),
                                B = W[D],
                                F = W[L],
                                R = tk(0, C[N], q[N]),
                                V = $ ? C[N] / 2 - j - R - B - E.mainAxis : z - R - B - E.mainAxis,
                                X = $ ? -C[N] / 2 + j + R + F + E.mainAxis : H + R + F + E.mainAxis,
                                U = n.elements.arrow && tT(n.elements.arrow),
                                K = U ? ("y" === b ? U.clientTop || 0 : U.clientLeft || 0) : 0,
                                Q = null != (S = null == k ? void 0 : k[b]) ? S : 0,
                                Y = tk(p ? tf(O, P + V - Q - K) : O, P, p ? tp(I, P + X - Q) : I);
                            (x[b] = Y), (A[b] = Y - P);
                        }
                        if (void 0 !== a && a) {
                            var Z,
                                G,
                                J,
                                ee,
                                et,
                                ei = x[w],
                                en = "y" === w ? "height" : "width",
                                es = ei + m["x" === b ? "top" : eX],
                                er = ei - m["x" === b ? e1 : eV],
                                eo = -1 !== ["top", eX].indexOf(v),
                                ea = null != (Z = null == k ? void 0 : k[w]) ? Z : 0,
                                el = eo ? es : ei - C[en] - _[en] - ea + E.altAxis,
                                ec = eo ? ei + C[en] + _[en] - ea - E.altAxis : er,
                                eu = p && eo ? ((G = el), (J = ei), (ee = ec), (et = tk(G, J, ee)) > ee ? ee : et) : tk(p ? el : es, ei, p ? ec : er);
                            (x[w] = eu), (A[w] = eu - ei);
                        }
                        n.modifiersData[r] = A;
                    }
                },
                requiresIfExists: ["offset"],
            };
        var t7 = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function tZ() {
            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            return !t.some(function (e) {
                return !(e && "function" == typeof e.getBoundingClientRect);
            });
        }
        function tG(e) {
            void 0 === e && (e = {});
            var t = e,
                i = t.defaultModifiers,
                n = void 0 === i ? [] : i,
                s = t.defaultOptions,
                r = void 0 === s ? t7 : s;
            return function e(t, i, s) {
                void 0 === s && (s = r);
                var o,
                    a,
                    l = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, t7, r), modifiersData: {}, elements: { reference: t, popper: i }, attributes: {}, styles: {} },
                    c = [],
                    u = !1,
                    h = {
                        state: l,
                        setOptions: function e(s) {
                            var o,
                                a,
                                u,
                                p,
                                f,
                                g,
                                m,
                                v,
                                y = "function" == typeof s ? s(l.options) : s;
                            d(), (l.options = Object.assign({}, r, l.options, y)), (l.scrollParents = { reference: tl(t) ? tF(t) : t.contextElement ? tF(t.contextElement) : [], popper: tF(i) });
                            var $ =
                                ((v =
                                    ((p = u = Object.keys(
                                        (a = (o = [].concat(n, l.options.modifiers)).reduce(function (e, t) {
                                            var i = e[t.name];
                                            return (e[t.name] = i ? Object.assign({}, i, t, { options: Object.assign({}, i.options, t.options), data: Object.assign({}, i.data, t.data) }) : t), e;
                                        }, {}))
                                    ).map(function (e) {
                                        return a[e];
                                    })),
                                    (f = new Map()),
                                    (g = new Set()),
                                    (m = []),
                                    p.forEach(function (e) {
                                        f.set(e.name, e);
                                    }),
                                    p.forEach(function (e) {
                                        g.has(e.name) ||
                                            (function e(t) {
                                                g.add(t.name),
                                                    [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
                                                        if (!g.has(t)) {
                                                            var i = f.get(t);
                                                            i && e(i);
                                                        }
                                                    }),
                                                    m.push(t);
                                            })(e);
                                    }),
                                    m)),
                                tr.reduce(function (e, t) {
                                    return e.concat(
                                        v.filter(function (e) {
                                            return e.phase === t;
                                        })
                                    );
                                }, []));
                            return (
                                (l.orderedModifiers = $.filter(function (e) {
                                    return e.enabled;
                                })),
                                l.orderedModifiers.forEach(function (e) {
                                    var t = e.name,
                                        i = e.options,
                                        n = e.effect;
                                    if ("function" == typeof n) {
                                        var s = n({ state: l, name: t, instance: h, options: void 0 === i ? {} : i }),
                                            r = function e() {};
                                        c.push(s || r);
                                    }
                                }),
                                h.update()
                            );
                        },
                        forceUpdate: function e() {
                            if (!u) {
                                var t,
                                    i,
                                    n,
                                    s,
                                    r,
                                    o,
                                    a,
                                    c,
                                    d,
                                    p,
                                    f,
                                    g,
                                    m,
                                    v,
                                    y,
                                    $ = l.elements,
                                    b = $.reference,
                                    w = $.popper;
                                if (tZ(b, w)) {
                                    (l.rects = {
                                        reference:
                                            ((n = b),
                                            (s = tT(w)),
                                            (r = "fixed" === l.options.strategy),
                                            (o = tc(s)),
                                            (f = tc(s) && ((d = tg((c = (a = s).getBoundingClientRect()).width) / a.offsetWidth || 1), (p = tg(c.height) / a.offsetHeight || 1), 1 !== d || 1 !== p)),
                                            (g = tx(s)),
                                            (m = ty(n, f, r)),
                                            (v = { scrollLeft: 0, scrollTop: 0 }),
                                            (y = { x: 0, y: 0 }),
                                            (o || (!o && !r)) &&
                                                (("body" !== to(s) || t0(g)) && (v = ((t = s), t !== ta(t) && tc(t) ? { scrollLeft: (i = t).scrollLeft, scrollTop: i.scrollTop } : tW(t))),
                                                tc(s) ? ((y = ty(s, !0)), (y.x += s.clientLeft), (y.y += s.clientTop)) : g && (y.x = tB(g))),
                                            { x: m.left + v.scrollLeft - y.x, y: m.top + v.scrollTop - y.y, width: m.width, height: m.height }),
                                        popper: t8(w),
                                    }),
                                        (l.reset = !1),
                                        (l.placement = l.options.placement),
                                        l.orderedModifiers.forEach(function (e) {
                                            return (l.modifiersData[e.name] = Object.assign({}, e.data));
                                        });
                                    for (var x = 0; x < l.orderedModifiers.length; x++) {
                                        if (!0 === l.reset) {
                                            (l.reset = !1), (x = -1);
                                            continue;
                                        }
                                        var C = l.orderedModifiers[x],
                                            _ = C.fn,
                                            T = C.options,
                                            E = void 0 === T ? {} : T,
                                            k = C.name;
                                        "function" == typeof _ && (l = _({ state: l, options: E, name: k, instance: h }) || l);
                                    }
                                }
                            }
                        },
                        update:
                            ((o = function () {
                                return new Promise(function (e) {
                                    h.forceUpdate(), e(l);
                                });
                            }),
                            function () {
                                return (
                                    a ||
                                        (a = new Promise(function (e) {
                                            Promise.resolve().then(function () {
                                                (a = void 0), e(o());
                                            });
                                        })),
                                    a
                                );
                            }),
                        destroy: function e() {
                            d(), (u = !0);
                        },
                    };
                if (!tZ(t, i)) return h;
                function d() {
                    c.forEach(function (e) {
                        return e();
                    }),
                        (c = []);
                }
                return (
                    h.setOptions(s).then(function (e) {
                        !u && s.onFirstUpdate && s.onFirstUpdate(e);
                    }),
                    h
                );
            };
        }
        var t5 = tG(),
            t6 = tG({ defaultModifiers: [tj, t2, tO, th] }),
            tJ = tG({ defaultModifiers: [tj, t2, tO, th, tY, tU, t4, tL, tQ] });
        let ie = Object.freeze(
                Object.defineProperty(
                    {
                        __proto__: null,
                        popperGenerator: tG,
                        detectOverflow: tX,
                        createPopperBase: t5,
                        createPopper: tJ,
                        createPopperLite: t6,
                        top: "top",
                        bottom: e1,
                        right: eV,
                        left: eX,
                        auto: eU,
                        basePlacements: eK,
                        start: e3,
                        end: "end",
                        clippingParents: eQ,
                        viewport: eY,
                        popper: e2,
                        reference: e4,
                        variationPlacements: e7,
                        placements: eZ,
                        beforeRead: eG,
                        read: e5,
                        afterRead: e6,
                        beforeMain: eJ,
                        main: te,
                        afterMain: tt,
                        beforeWrite: ti,
                        write: tn,
                        afterWrite: ts,
                        modifierPhases: tr,
                        applyStyles: th,
                        arrow: tL,
                        computeStyles: tO,
                        eventListeners: tj,
                        flip: tU,
                        hide: tQ,
                        offset: tY,
                        popperOffsets: t2,
                        preventOverflow: t4,
                    },
                    Symbol.toStringTag,
                    { value: "Module" }
                )
            ),
            it = "dropdown",
            ii = ".bs.dropdown",
            is = ".data-api",
            ir = "ArrowDown",
            io = `hide${ii}`,
            ia = `hidden${ii}`,
            il = `show${ii}`,
            ic = `shown${ii}`,
            iu = `click${ii}${is}`,
            ih = `keydown${ii}${is}`,
            id = `keyup${ii}${is}`,
            ip = "show",
            ig = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
            im = `${ig}.${ip}`,
            iv = ".dropdown-menu",
            iy = y() ? "top-end" : "top-start",
            i8 = y() ? "top-start" : "top-end",
            i$ = y() ? "bottom-end" : "bottom-start",
            ib = y() ? "bottom-start" : "bottom-end",
            iw = y() ? "left-start" : "right-start",
            ix = y() ? "right-start" : "left-start",
            iC = { autoClose: !0, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" },
            i_ = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
        class iT extends X {
            constructor(e, t) {
                super(e, t),
                    (this._popper = null),
                    (this._parent = this._element.parentNode),
                    (this._menu = et.next(this._element, iv)[0] || et.prev(this._element, iv)[0] || et.findOne(iv, this._parent)),
                    (this._inNavbar = this._detectNavbar());
            }
            static get Default() {
                return iC;
            }
            static get DefaultType() {
                return i_;
            }
            static get NAME() {
                return it;
            }
            toggle() {
                return this._isShown() ? this.hide() : this.show();
            }
            show() {
                if (h(this._element) || this._isShown()) return;
                let e = { relatedTarget: this._element },
                    t = H.trigger(this._element, il, e);
                if (!t.defaultPrevented) {
                    if ((this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))) for (let i of [].concat(...document.body.children)) H.on(i, "mouseover", p);
                    this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(ip), this._element.classList.add(ip), H.trigger(this._element, ic, e);
                }
            }
            hide() {
                if (h(this._element) || !this._isShown()) return;
                let e = { relatedTarget: this._element };
                this._completeHide(e);
            }
            dispose() {
                this._popper && this._popper.destroy(), super.dispose();
            }
            update() {
                (this._inNavbar = this._detectNavbar()), this._popper && this._popper.update();
            }
            _completeHide(e) {
                let t = H.trigger(this._element, io, e);
                if (!t.defaultPrevented) {
                    if ("ontouchstart" in document.documentElement) for (let i of [].concat(...document.body.children)) H.off(i, "mouseover", p);
                    this._popper && this._popper.destroy(),
                        this._menu.classList.remove(ip),
                        this._element.classList.remove(ip),
                        this._element.setAttribute("aria-expanded", "false"),
                        R.removeDataAttribute(this._menu, "popper"),
                        H.trigger(this._element, ia, e);
                }
            }
            _getConfig(e) {
                if ("object" == typeof (e = super._getConfig(e)).reference && !l(e.reference) && "function" != typeof e.reference.getBoundingClientRect)
                    throw TypeError(`${it.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
                return e;
            }
            _createPopper() {
                if (void 0 === ie) throw TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                let e = this._element;
                "parent" === this._config.reference ? (e = this._parent) : l(this._config.reference) ? (e = c(this._config.reference)) : "object" == typeof this._config.reference && (e = this._config.reference);
                let t = this._getPopperConfig();
                this._popper = tJ(e, this._menu, t);
            }
            _isShown() {
                return this._menu.classList.contains(ip);
            }
            _getPlacement() {
                let e = this._parent;
                if (e.classList.contains("dropend")) return iw;
                if (e.classList.contains("dropstart")) return ix;
                if (e.classList.contains("dropup-center")) return "top";
                if (e.classList.contains("dropdown-center")) return "bottom";
                let t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                return e.classList.contains("dropup") ? (t ? i8 : iy) : t ? ib : i$;
            }
            _detectNavbar() {
                return null !== this._element.closest(".navbar");
            }
            _getOffset() {
                let { offset: e } = this._config;
                return "string" == typeof e ? e.split(",").map((e) => Number.parseInt(e, 10)) : "function" == typeof e ? (t) => e(t, this._element) : e;
            }
            _getPopperConfig() {
                let e = {
                    placement: this._getPlacement(),
                    modifiers: [
                        { name: "preventOverflow", options: { boundary: this._config.boundary } },
                        { name: "offset", options: { offset: this._getOffset() } },
                    ],
                };
                return (
                    (this._inNavbar || "static" === this._config.display) && (R.setDataAttribute(this._menu, "popper", "static"), (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
                    { ...e, ...("function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig) }
                );
            }
            _selectMenuItem({ key: e, target: t }) {
                let i = et.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((e) => u(e));
                i.length && x(i, t, e === ir, !i.includes(t)).focus();
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    let t = iT.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                        t[e]();
                    }
                });
            }
            static clearMenus(e) {
                if (2 === e.button || ("keyup" === e.type && "Tab" !== e.key)) return;
                let t = et.find(im);
                for (let i of t) {
                    let n = iT.getInstance(i);
                    if (!n || !1 === n._config.autoClose) continue;
                    let s = e.composedPath(),
                        r = s.includes(n._menu);
                    if (
                        s.includes(n._element) ||
                        ("inside" === n._config.autoClose && !r) ||
                        ("outside" === n._config.autoClose && r) ||
                        (n._menu.contains(e.target) && (("keyup" === e.type && "Tab" === e.key) || /input|select|option|textarea|form/i.test(e.target.tagName)))
                    )
                        continue;
                    let o = { relatedTarget: n._element };
                    "click" === e.type && (o.clickEvent = e), n._completeHide(o);
                }
            }
            static dataApiKeydownHandler(e) {
                let t = /input|textarea/i.test(e.target.tagName),
                    i = "Escape" === e.key,
                    n = ["ArrowUp", ir].includes(e.key);
                if ((!n && !i) || (t && !i)) return;
                e.preventDefault();
                let s = this.matches(ig) ? this : et.prev(this, ig)[0] || et.next(this, ig)[0] || et.findOne(ig, e.delegateTarget.parentNode),
                    r = iT.getOrCreateInstance(s);
                if (n) {
                    e.stopPropagation(), r.show(), r._selectMenuItem(e);
                    return;
                }
                r._isShown() && (e.stopPropagation(), r.hide(), s.focus());
            }
        }
        H.on(document, ih, ig, iT.dataApiKeydownHandler),
            H.on(document, ih, iv, iT.dataApiKeydownHandler),
            H.on(document, iu, iT.clearMenus),
            H.on(document, id, iT.clearMenus),
            H.on(document, iu, ig, function (e) {
                e.preventDefault(), iT.getOrCreateInstance(this).toggle();
            }),
            $(iT);
        let iE = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            ik = ".sticky-top",
            iA = "padding-right",
            iS = "margin-right";
        class iD {
            constructor() {
                this._element = document.body;
            }
            getWidth() {
                let e = document.documentElement.clientWidth;
                return Math.abs(window.innerWidth - e);
            }
            hide() {
                let e = this.getWidth();
                this._disableOverFlow(), this._setElementAttributes(this._element, iA, (t) => t + e), this._setElementAttributes(iE, iA, (t) => t + e), this._setElementAttributes(ik, iS, (t) => t - e);
            }
            reset() {
                this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, iA), this._resetElementAttributes(iE, iA), this._resetElementAttributes(ik, iS);
            }
            isOverflowing() {
                return this.getWidth() > 0;
            }
            _disableOverFlow() {
                this._saveInitialAttribute(this._element, "overflow"), (this._element.style.overflow = "hidden");
            }
            _setElementAttributes(e, t, i) {
                let n = this.getWidth(),
                    s = (e) => {
                        if (e !== this._element && window.innerWidth > e.clientWidth + n) return;
                        this._saveInitialAttribute(e, t);
                        let s = window.getComputedStyle(e).getPropertyValue(t);
                        e.style.setProperty(t, `${i(Number.parseFloat(s))}px`);
                    };
                this._applyManipulationCallback(e, s);
            }
            _saveInitialAttribute(e, t) {
                let i = e.style.getPropertyValue(t);
                i && R.setDataAttribute(e, t, i);
            }
            _resetElementAttributes(e, t) {
                let i = (e) => {
                    let i = R.getDataAttribute(e, t);
                    if (null === i) {
                        e.style.removeProperty(t);
                        return;
                    }
                    R.removeDataAttribute(e, t), e.style.setProperty(t, i);
                };
                this._applyManipulationCallback(e, i);
            }
            _applyManipulationCallback(e, t) {
                if (l(e)) {
                    t(e);
                    return;
                }
                for (let i of et.find(e, this._element)) t(i);
            }
        }
        let iL = "backdrop",
            i9 = "show",
            iN = `mousedown.bs.${iL}`,
            iP = { className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body" },
            iO = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
        class iI extends V {
            constructor(e) {
                super(), (this._config = this._getConfig(e)), (this._isAppended = !1), (this._element = null);
            }
            static get Default() {
                return iP;
            }
            static get DefaultType() {
                return iO;
            }
            static get NAME() {
                return iL;
            }
            show(e) {
                if (!this._config.isVisible) {
                    b(e);
                    return;
                }
                this._append();
                let t = this._getElement();
                this._config.isAnimated && f(t),
                    t.classList.add(i9),
                    this._emulateAnimation(() => {
                        b(e);
                    });
            }
            hide(e) {
                if (!this._config.isVisible) {
                    b(e);
                    return;
                }
                this._getElement().classList.remove(i9),
                    this._emulateAnimation(() => {
                        this.dispose(), b(e);
                    });
            }
            dispose() {
                this._isAppended && (H.off(this._element, iN), this._element.remove(), (this._isAppended = !1));
            }
            _getElement() {
                if (!this._element) {
                    let e = document.createElement("div");
                    (e.className = this._config.className), this._config.isAnimated && e.classList.add("fade"), (this._element = e);
                }
                return this._element;
            }
            _configAfterMerge(e) {
                return (e.rootElement = c(e.rootElement)), e;
            }
            _append() {
                if (this._isAppended) return;
                let e = this._getElement();
                this._config.rootElement.append(e),
                    H.on(e, iN, () => {
                        b(this._config.clickCallback);
                    }),
                    (this._isAppended = !0);
            }
            _emulateAnimation(e) {
                w(e, this._getElement(), this._config.isAnimated);
            }
        }
        let ij = ".bs.focustrap",
            iz = `focusin${ij}`,
            iH = `keydown.tab${ij}`,
            iM = "backward",
            iq = { autofocus: !0, trapElement: null },
            iW = { autofocus: "boolean", trapElement: "element" };
        class iB extends V {
            constructor(e) {
                super(), (this._config = this._getConfig(e)), (this._isActive = !1), (this._lastTabNavDirection = null);
            }
            static get Default() {
                return iq;
            }
            static get DefaultType() {
                return iW;
            }
            static get NAME() {
                return "focustrap";
            }
            activate() {
                !this._isActive &&
                    (this._config.autofocus && this._config.trapElement.focus(), H.off(document, ij), H.on(document, iz, (e) => this._handleFocusin(e)), H.on(document, iH, (e) => this._handleKeydown(e)), (this._isActive = !0));
            }
            deactivate() {
                this._isActive && ((this._isActive = !1), H.off(document, ij));
            }
            _handleFocusin(e) {
                let { trapElement: t } = this._config;
                if (e.target === document || e.target === t || t.contains(e.target)) return;
                let i = et.focusableChildren(t);
                0 === i.length ? t.focus() : this._lastTabNavDirection === iM ? i[i.length - 1].focus() : i[0].focus();
            }
            _handleKeydown(e) {
                "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? iM : "forward");
            }
        }
        let i0 = ".bs.modal",
            iF = `hide${i0}`,
            iR = `hidePrevented${i0}`,
            i1 = `hidden${i0}`,
            iV = `show${i0}`,
            iX = `shown${i0}`,
            iU = `resize${i0}`,
            iK = `click.dismiss${i0}`,
            i3 = `mousedown.dismiss${i0}`,
            iQ = `keydown.dismiss${i0}`,
            iY = `click${i0}.data-api`,
            i2 = "modal-open",
            i4 = "show",
            i7 = "modal-static",
            iZ = { backdrop: !0, focus: !0, keyboard: !0 },
            iG = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
        class i5 extends X {
            constructor(e, t) {
                super(e, t),
                    (this._dialog = et.findOne(".modal-dialog", this._element)),
                    (this._backdrop = this._initializeBackDrop()),
                    (this._focustrap = this._initializeFocusTrap()),
                    (this._isShown = !1),
                    (this._isTransitioning = !1),
                    (this._scrollBar = new iD()),
                    this._addEventListeners();
            }
            static get Default() {
                return iZ;
            }
            static get DefaultType() {
                return iG;
            }
            static get NAME() {
                return "modal";
            }
            toggle(e) {
                return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
                if (this._isShown || this._isTransitioning) return;
                let t = H.trigger(this._element, iV, { relatedTarget: e });
                !t.defaultPrevented && ((this._isShown = !0), (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(i2), this._adjustDialog(), this._backdrop.show(() => this._showElement(e)));
            }
            hide() {
                if (!this._isShown || this._isTransitioning) return;
                let e = H.trigger(this._element, iF);
                !e.defaultPrevented && ((this._isShown = !1), (this._isTransitioning = !0), this._focustrap.deactivate(), this._element.classList.remove(i4), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
            }
            dispose() {
                for (let e of [window, this._dialog]) H.off(e, i0);
                this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
            }
            handleUpdate() {
                this._adjustDialog();
            }
            _initializeBackDrop() {
                return new iI({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
            }
            _initializeFocusTrap() {
                return new iB({ trapElement: this._element });
            }
            _showElement(e) {
                document.body.contains(this._element) || document.body.append(this._element),
                    (this._element.style.display = "block"),
                    this._element.removeAttribute("aria-hidden"),
                    this._element.setAttribute("aria-modal", !0),
                    this._element.setAttribute("role", "dialog"),
                    (this._element.scrollTop = 0);
                let t = et.findOne(".modal-body", this._dialog);
                t && (t.scrollTop = 0), f(this._element), this._element.classList.add(i4);
                let i = () => {
                    this._config.focus && this._focustrap.activate(), (this._isTransitioning = !1), H.trigger(this._element, iX, { relatedTarget: e });
                };
                this._queueCallback(i, this._dialog, this._isAnimated());
            }
            _addEventListeners() {
                H.on(this._element, iQ, (e) => {
                    if ("Escape" === e.key) {
                        if (this._config.keyboard) {
                            e.preventDefault(), this.hide();
                            return;
                        }
                        this._triggerBackdropTransition();
                    }
                }),
                    H.on(window, iU, () => {
                        this._isShown && !this._isTransitioning && this._adjustDialog();
                    }),
                    H.on(this._element, i3, (e) => {
                        H.one(this._element, iK, (t) => {
                            if (this._element === e.target && this._element === t.target) {
                                if ("static" === this._config.backdrop) {
                                    this._triggerBackdropTransition();
                                    return;
                                }
                                this._config.backdrop && this.hide();
                            }
                        });
                    });
            }
            _hideModal() {
                (this._element.style.display = "none"),
                    this._element.setAttribute("aria-hidden", !0),
                    this._element.removeAttribute("aria-modal"),
                    this._element.removeAttribute("role"),
                    (this._isTransitioning = !1),
                    this._backdrop.hide(() => {
                        document.body.classList.remove(i2), this._resetAdjustments(), this._scrollBar.reset(), H.trigger(this._element, i1);
                    });
            }
            _isAnimated() {
                return this._element.classList.contains("fade");
            }
            _triggerBackdropTransition() {
                let e = H.trigger(this._element, iR);
                if (e.defaultPrevented) return;
                let t = this._element.scrollHeight > document.documentElement.clientHeight,
                    i = this._element.style.overflowY;
                !("hidden" === i || this._element.classList.contains(i7)) &&
                    (t || (this._element.style.overflowY = "hidden"),
                    this._element.classList.add(i7),
                    this._queueCallback(() => {
                        this._element.classList.remove(i7),
                            this._queueCallback(() => {
                                this._element.style.overflowY = i;
                            }, this._dialog);
                    }, this._dialog),
                    this._element.focus());
            }
            _adjustDialog() {
                let e = this._element.scrollHeight > document.documentElement.clientHeight,
                    t = this._scrollBar.getWidth(),
                    i = t > 0;
                if (i && !e) {
                    let n = y() ? "paddingLeft" : "paddingRight";
                    this._element.style[n] = `${t}px`;
                }
                if (!i && e) {
                    let s = y() ? "paddingRight" : "paddingLeft";
                    this._element.style[s] = `${t}px`;
                }
            }
            _resetAdjustments() {
                (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
            }
            static jQueryInterface(e, t) {
                return this.each(function () {
                    let i = i5.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === i[e]) throw TypeError(`No method named "${e}"`);
                        i[e](t);
                    }
                });
            }
        }
        H.on(document, iY, '[data-bs-toggle="modal"]', function (e) {
            let t = r(this);
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                H.one(t, iV, (e) => {
                    !e.defaultPrevented &&
                        H.one(t, i1, () => {
                            u(this) && this.focus();
                        });
                });
            let i = et.findOne(".modal.show");
            i && i5.getInstance(i).hide();
            let n = i5.getOrCreateInstance(t);
            n.toggle(this);
        }),
            U(i5),
            $(i5);
        let i6 = ".bs.offcanvas",
            iJ = ".data-api",
            ne = `load${i6}${iJ}`,
            nt = "show",
            ni = "showing",
            nn = "hiding",
            ns = ".offcanvas.show",
            nr = `show${i6}`,
            no = `shown${i6}`,
            na = `hide${i6}`,
            nl = `hidePrevented${i6}`,
            nc = `hidden${i6}`,
            nu = `resize${i6}`,
            nh = `click${i6}${iJ}`,
            nd = `keydown.dismiss${i6}`,
            np = { backdrop: !0, keyboard: !0, scroll: !1 },
            nf = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
        class ng extends X {
            constructor(e, t) {
                super(e, t), (this._isShown = !1), (this._backdrop = this._initializeBackDrop()), (this._focustrap = this._initializeFocusTrap()), this._addEventListeners();
            }
            static get Default() {
                return np;
            }
            static get DefaultType() {
                return nf;
            }
            static get NAME() {
                return "offcanvas";
            }
            toggle(e) {
                return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
                if (this._isShown) return;
                let t = H.trigger(this._element, nr, { relatedTarget: e });
                if (t.defaultPrevented) return;
                (this._isShown = !0), this._backdrop.show(), this._config.scroll || new iD().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(ni);
                let i = () => {
                    (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(nt), this._element.classList.remove(ni), H.trigger(this._element, no, { relatedTarget: e });
                };
                this._queueCallback(i, this._element, !0);
            }
            hide() {
                if (!this._isShown) return;
                let e = H.trigger(this._element, na);
                if (e.defaultPrevented) return;
                this._focustrap.deactivate(), this._element.blur(), (this._isShown = !1), this._element.classList.add(nn), this._backdrop.hide();
                let t = () => {
                    this._element.classList.remove(nt, nn), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new iD().reset(), H.trigger(this._element, nc);
                };
                this._queueCallback(t, this._element, !0);
            }
            dispose() {
                this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
            }
            _initializeBackDrop() {
                let e = () => {
                        if ("static" === this._config.backdrop) {
                            H.trigger(this._element, nl);
                            return;
                        }
                        this.hide();
                    },
                    t = Boolean(this._config.backdrop);
                return new iI({ className: "offcanvas-backdrop", isVisible: t, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: t ? e : null });
            }
            _initializeFocusTrap() {
                return new iB({ trapElement: this._element });
            }
            _addEventListeners() {
                H.on(this._element, nd, (e) => {
                    if ("Escape" === e.key) {
                        if (!this._config.keyboard) {
                            H.trigger(this._element, nl);
                            return;
                        }
                        this.hide();
                    }
                });
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    let t = ng.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                        t[e](this);
                    }
                });
            }
        }
        H.on(document, nh, '[data-bs-toggle="offcanvas"]', function (e) {
            let t = r(this);
            if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), h(this))) return;
            H.one(t, nc, () => {
                u(this) && this.focus();
            });
            let i = et.findOne(ns);
            i && i !== t && ng.getInstance(i).hide();
            let n = ng.getOrCreateInstance(t);
            n.toggle(this);
        }),
            H.on(window, ne, () => {
                for (let e of et.find(ns)) ng.getOrCreateInstance(e).show();
            }),
            H.on(window, nu, () => {
                for (let e of et.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(e).position && ng.getOrCreateInstance(e).hide();
            }),
            U(ng),
            $(ng);
        let nm = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
            nv = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
            ny = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
            n8 = (e, t) => {
                let i = e.nodeName.toLowerCase();
                return t.includes(i) ? !nm.has(i) || Boolean(nv.test(e.nodeValue) || ny.test(e.nodeValue)) : t.filter((e) => e instanceof RegExp).some((e) => e.test(i));
            },
            n$ = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: [],
            },
            nb = { allowList: n$, content: {}, extraClass: "", html: !1, sanitize: !0, sanitizeFn: null, template: "<div></div>" },
            nw = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" },
            nx = { entry: "(string|element|function|null)", selector: "(string|element)" };
        class nC extends V {
            constructor(e) {
                super(), (this._config = this._getConfig(e));
            }
            static get Default() {
                return nb;
            }
            static get DefaultType() {
                return nw;
            }
            static get NAME() {
                return "TemplateFactory";
            }
            getContent() {
                return Object.values(this._config.content)
                    .map((e) => this._resolvePossibleFunction(e))
                    .filter(Boolean);
            }
            hasContent() {
                return this.getContent().length > 0;
            }
            changeContent(e) {
                return this._checkContent(e), (this._config.content = { ...this._config.content, ...e }), this;
            }
            toHtml() {
                let e = document.createElement("div");
                for (let [t, i] of ((e.innerHTML = this._maybeSanitize(this._config.template)), Object.entries(this._config.content))) this._setContent(e, i, t);
                let n = e.children[0],
                    s = this._resolvePossibleFunction(this._config.extraClass);
                return s && n.classList.add(...s.split(" ")), n;
            }
            _typeCheckConfig(e) {
                super._typeCheckConfig(e), this._checkContent(e.content);
            }
            _checkContent(e) {
                for (let [t, i] of Object.entries(e)) super._typeCheckConfig({ selector: t, entry: i }, nx);
            }
            _setContent(e, t, i) {
                let n = et.findOne(i, e);
                if (n) {
                    if (!(t = this._resolvePossibleFunction(t))) {
                        n.remove();
                        return;
                    }
                    if (l(t)) {
                        this._putElementInTemplate(c(t), n);
                        return;
                    }
                    if (this._config.html) {
                        n.innerHTML = this._maybeSanitize(t);
                        return;
                    }
                    n.textContent = t;
                }
            }
            _maybeSanitize(e) {
                return this._config.sanitize
                    ? (function e(t, i, n) {
                          if (!t.length) return t;
                          if (n && "function" == typeof n) return n(t);
                          let s = new window.DOMParser(),
                              r = s.parseFromString(t, "text/html"),
                              o = [].concat(...r.body.querySelectorAll("*"));
                          for (let a of o) {
                              let l = a.nodeName.toLowerCase();
                              if (!Object.keys(i).includes(l)) {
                                  a.remove();
                                  continue;
                              }
                              let c = [].concat(...a.attributes),
                                  u = [].concat(i["*"] || [], i[l] || []);
                              for (let h of c) n8(h, u) || a.removeAttribute(h.nodeName);
                          }
                          return r.body.innerHTML;
                      })(e, this._config.allowList, this._config.sanitizeFn)
                    : e;
            }
            _resolvePossibleFunction(e) {
                return "function" == typeof e ? e(this) : e;
            }
            _putElementInTemplate(e, t) {
                if (this._config.html) {
                    (t.innerHTML = ""), t.append(e);
                    return;
                }
                t.textContent = e.textContent;
            }
        }
        let n_ = new Set(["sanitize", "allowList", "sanitizeFn"]),
            nT = "fade",
            nE = "show",
            nk = ".modal",
            nA = "hide.bs.modal",
            nS = "hover",
            nD = "focus",
            nL = { AUTO: "auto", TOP: "top", RIGHT: y() ? "left" : "right", BOTTOM: "bottom", LEFT: y() ? "right" : "left" },
            n9 = {
                allowList: n$,
                animation: !0,
                boundary: "clippingParents",
                container: !1,
                customClass: "",
                delay: 0,
                fallbackPlacements: ["top", "right", "bottom", "left"],
                html: !1,
                offset: [0, 0],
                placement: "top",
                popperConfig: null,
                sanitize: !0,
                sanitizeFn: null,
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                title: "",
                trigger: "hover focus",
            },
            nN = {
                allowList: "object",
                animation: "boolean",
                boundary: "(string|element)",
                container: "(string|element|boolean)",
                customClass: "(string|function)",
                delay: "(number|object)",
                fallbackPlacements: "array",
                html: "boolean",
                offset: "(array|string|function)",
                placement: "(string|function)",
                popperConfig: "(null|object|function)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                selector: "(string|boolean)",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
            };
        class nP extends X {
            constructor(e, t) {
                if (void 0 === ie) throw TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                super(e, t),
                    (this._isEnabled = !0),
                    (this._timeout = 0),
                    (this._isHovered = null),
                    (this._activeTrigger = {}),
                    (this._popper = null),
                    (this._templateFactory = null),
                    (this._newContent = null),
                    (this.tip = null),
                    this._setListeners(),
                    this._config.selector || this._fixTitle();
            }
            static get Default() {
                return n9;
            }
            static get DefaultType() {
                return nN;
            }
            static get NAME() {
                return "tooltip";
            }
            enable() {
                this._isEnabled = !0;
            }
            disable() {
                this._isEnabled = !1;
            }
            toggleEnabled() {
                this._isEnabled = !this._isEnabled;
            }
            toggle() {
                if (this._isEnabled) {
                    if (((this._activeTrigger.click = !this._activeTrigger.click), this._isShown())) {
                        this._leave();
                        return;
                    }
                    this._enter();
                }
            }
            dispose() {
                clearTimeout(this._timeout),
                    H.off(this._element.closest(nk), nA, this._hideModalHandler),
                    this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
                    this._disposePopper(),
                    super.dispose();
            }
            show() {
                if ("none" === this._element.style.display) throw Error("Please use show on visible elements");
                if (!(this._isWithContent() && this._isEnabled)) return;
                let e = H.trigger(this._element, this.constructor.eventName("show")),
                    t = d(this._element),
                    i = (t || this._element.ownerDocument.documentElement).contains(this._element);
                if (e.defaultPrevented || !i) return;
                this._disposePopper();
                let n = this._getTipElement();
                this._element.setAttribute("aria-describedby", n.getAttribute("id"));
                let { container: s } = this._config;
                if (
                    (this._element.ownerDocument.documentElement.contains(this.tip) || (s.append(n), H.trigger(this._element, this.constructor.eventName("inserted"))),
                    (this._popper = this._createPopper(n)),
                    n.classList.add(nE),
                    "ontouchstart" in document.documentElement)
                )
                    for (let r of [].concat(...document.body.children)) H.on(r, "mouseover", p);
                let o = () => {
                    H.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), (this._isHovered = !1);
                };
                this._queueCallback(o, this.tip, this._isAnimated());
            }
            hide() {
                if (!this._isShown()) return;
                let e = H.trigger(this._element, this.constructor.eventName("hide"));
                if (e.defaultPrevented) return;
                let t = this._getTipElement();
                if ((t.classList.remove(nE), "ontouchstart" in document.documentElement)) for (let i of [].concat(...document.body.children)) H.off(i, "mouseover", p);
                (this._activeTrigger.click = !1), (this._activeTrigger[nD] = !1), (this._activeTrigger[nS] = !1), (this._isHovered = null);
                let n = () => {
                    !this._isWithActiveTrigger() && (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), H.trigger(this._element, this.constructor.eventName("hidden")));
                };
                this._queueCallback(n, this.tip, this._isAnimated());
            }
            update() {
                this._popper && this._popper.update();
            }
            _isWithContent() {
                return Boolean(this._getTitle());
            }
            _getTipElement() {
                return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
            }
            _createTipElement(e) {
                let t = this._getTemplateFactory(e).toHtml();
                if (!t) return null;
                t.classList.remove(nT, nE), t.classList.add(`bs-${this.constructor.NAME}-auto`);
                let n = i(this.constructor.NAME).toString();
                return t.setAttribute("id", n), this._isAnimated() && t.classList.add(nT), t;
            }
            setContent(e) {
                (this._newContent = e), this._isShown() && (this._disposePopper(), this.show());
            }
            _getTemplateFactory(e) {
                return (
                    this._templateFactory ? this._templateFactory.changeContent(e) : (this._templateFactory = new nC({ ...this._config, content: e, extraClass: this._resolvePossibleFunction(this._config.customClass) })),
                    this._templateFactory
                );
            }
            _getContentForTemplate() {
                return { ".tooltip-inner": this._getTitle() };
            }
            _getTitle() {
                return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
            }
            _initializeOnDelegatedTarget(e) {
                return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
            }
            _isAnimated() {
                return this._config.animation || (this.tip && this.tip.classList.contains(nT));
            }
            _isShown() {
                return this.tip && this.tip.classList.contains(nE);
            }
            _createPopper(e) {
                let t = "function" == typeof this._config.placement ? this._config.placement.call(this, e, this._element) : this._config.placement,
                    i = nL[t.toUpperCase()];
                return tJ(this._element, e, this._getPopperConfig(i));
            }
            _getOffset() {
                let { offset: e } = this._config;
                return "string" == typeof e ? e.split(",").map((e) => Number.parseInt(e, 10)) : "function" == typeof e ? (t) => e(t, this._element) : e;
            }
            _resolvePossibleFunction(e) {
                return "function" == typeof e ? e.call(this._element) : e;
            }
            _getPopperConfig(e) {
                let t = {
                    placement: e,
                    modifiers: [
                        { name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } },
                        { name: "offset", options: { offset: this._getOffset() } },
                        { name: "preventOverflow", options: { boundary: this._config.boundary } },
                        { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } },
                        {
                            name: "preSetPlacement",
                            enabled: !0,
                            phase: "beforeMain",
                            fn: (e) => {
                                this._getTipElement().setAttribute("data-popper-placement", e.state.placement);
                            },
                        },
                    ],
                };
                return { ...t, ...("function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig) };
            }
            _setListeners() {
                let e = this._config.trigger.split(" ");
                for (let t of e)
                    if ("click" === t)
                        H.on(this._element, this.constructor.eventName("click"), this._config.selector, (e) => {
                            let t = this._initializeOnDelegatedTarget(e);
                            t.toggle();
                        });
                    else if ("manual" !== t) {
                        let i = t === nS ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                            n = t === nS ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                        H.on(this._element, i, this._config.selector, (e) => {
                            let t = this._initializeOnDelegatedTarget(e);
                            (t._activeTrigger["focusin" === e.type ? nD : nS] = !0), t._enter();
                        }),
                            H.on(this._element, n, this._config.selector, (e) => {
                                let t = this._initializeOnDelegatedTarget(e);
                                (t._activeTrigger["focusout" === e.type ? nD : nS] = t._element.contains(e.relatedTarget)), t._leave();
                            });
                    }
                (this._hideModalHandler = () => {
                    this._element && this.hide();
                }),
                    H.on(this._element.closest(nk), nA, this._hideModalHandler);
            }
            _fixTitle() {
                let e = this._element.getAttribute("title");
                e &&
                    (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e),
                    this._element.setAttribute("data-bs-original-title", e),
                    this._element.removeAttribute("title"));
            }
            _enter() {
                if (this._isShown() || this._isHovered) {
                    this._isHovered = !0;
                    return;
                }
                (this._isHovered = !0),
                    this._setTimeout(() => {
                        this._isHovered && this.show();
                    }, this._config.delay.show);
            }
            _leave() {
                !this._isWithActiveTrigger() &&
                    ((this._isHovered = !1),
                    this._setTimeout(() => {
                        this._isHovered || this.hide();
                    }, this._config.delay.hide));
            }
            _setTimeout(e, t) {
                clearTimeout(this._timeout), (this._timeout = setTimeout(e, t));
            }
            _isWithActiveTrigger() {
                return Object.values(this._activeTrigger).includes(!0);
            }
            _getConfig(e) {
                let t = R.getDataAttributes(this._element);
                for (let i of Object.keys(t)) n_.has(i) && delete t[i];
                return (e = { ...t, ...("object" == typeof e && e ? e : {}) }), (e = this._mergeConfigObj(e)), (e = this._configAfterMerge(e)), this._typeCheckConfig(e), e;
            }
            _configAfterMerge(e) {
                return (
                    (e.container = !1 === e.container ? document.body : c(e.container)),
                    "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }),
                    "number" == typeof e.title && (e.title = e.title.toString()),
                    "number" == typeof e.content && (e.content = e.content.toString()),
                    e
                );
            }
            _getDelegateConfig() {
                let e = {};
                for (let t in this._config) this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
                return (e.selector = !1), (e.trigger = "manual"), e;
            }
            _disposePopper() {
                this._popper && (this._popper.destroy(), (this._popper = null)), this.tip && (this.tip.remove(), (this.tip = null));
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    let t = nP.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                        t[e]();
                    }
                });
            }
        }
        $(nP);
        let nO = {
                ...nP.Default,
                content: "",
                offset: [0, 8],
                placement: "right",
                template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
                trigger: "click",
            },
            nI = { ...nP.DefaultType, content: "(null|string|element|function)" };
        class nj extends nP {
            static get Default() {
                return nO;
            }
            static get DefaultType() {
                return nI;
            }
            static get NAME() {
                return "popover";
            }
            _isWithContent() {
                return this._getTitle() || this._getContent();
            }
            _getContentForTemplate() {
                return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() };
            }
            _getContent() {
                return this._resolvePossibleFunction(this._config.content);
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    let t = nj.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                        t[e]();
                    }
                });
            }
        }
        $(nj);
        let nz = ".bs.scrollspy",
            nH = `activate${nz}`,
            nM = `click${nz}`,
            nq = `load${nz}.data-api`,
            nW = "active",
            nB = "[href]",
            n0 = ".nav-link",
            nF = `${n0}, .nav-item > ${n0}, .list-group-item`,
            nR = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [0.1, 0.5, 1] },
            n1 = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
        class nV extends X {
            constructor(e, t) {
                super(e, t),
                    (this._targetLinks = new Map()),
                    (this._observableSections = new Map()),
                    (this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element),
                    (this._activeTarget = null),
                    (this._observer = null),
                    (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
                    this.refresh();
            }
            static get Default() {
                return nR;
            }
            static get DefaultType() {
                return n1;
            }
            static get NAME() {
                return "scrollspy";
            }
            refresh() {
                for (let e of (this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : (this._observer = this._getNewObserver()), this._observableSections.values()))
                    this._observer.observe(e);
            }
            dispose() {
                this._observer.disconnect(), super.dispose();
            }
            _configAfterMerge(e) {
                return (
                    (e.target = c(e.target) || document.body), (e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin), "string" == typeof e.threshold && (e.threshold = e.threshold.split(",").map((e) => Number.parseFloat(e))), e
                );
            }
            _maybeEnableSmoothScroll() {
                this._config.smoothScroll &&
                    (H.off(this._config.target, nM),
                    H.on(this._config.target, nM, nB, (e) => {
                        let t = this._observableSections.get(e.target.hash);
                        if (t) {
                            e.preventDefault();
                            let i = this._rootElement || window,
                                n = t.offsetTop - this._element.offsetTop;
                            if (i.scrollTo) {
                                i.scrollTo({ top: n, behavior: "smooth" });
                                return;
                            }
                            i.scrollTop = n;
                        }
                    }));
            }
            _getNewObserver() {
                let e = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
                return new IntersectionObserver((e) => this._observerCallback(e), e);
            }
            _observerCallback(e) {
                let t = (e) => this._targetLinks.get(`#${e.target.id}`),
                    i = (e) => {
                        (this._previousScrollData.visibleEntryTop = e.target.offsetTop), this._process(t(e));
                    },
                    n = (this._rootElement || document.documentElement).scrollTop,
                    s = n >= this._previousScrollData.parentScrollTop;
                for (let r of ((this._previousScrollData.parentScrollTop = n), e)) {
                    if (!r.isIntersecting) {
                        (this._activeTarget = null), this._clearActiveClass(t(r));
                        continue;
                    }
                    let o = r.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                    if (s && o) {
                        if ((i(r), !n)) return;
                        continue;
                    }
                    s || o || i(r);
                }
            }
            _initializeTargetsAndObservables() {
                (this._targetLinks = new Map()), (this._observableSections = new Map());
                let e = et.find(nB, this._config.target);
                for (let t of e) {
                    if (!t.hash || h(t)) continue;
                    let i = et.findOne(t.hash, this._element);
                    u(i) && (this._targetLinks.set(t.hash, t), this._observableSections.set(t.hash, i));
                }
            }
            _process(e) {
                this._activeTarget !== e && (this._clearActiveClass(this._config.target), (this._activeTarget = e), e.classList.add(nW), this._activateParents(e), H.trigger(this._element, nH, { relatedTarget: e }));
            }
            _activateParents(e) {
                if (e.classList.contains("dropdown-item")) {
                    et.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(nW);
                    return;
                }
                for (let t of et.parents(e, ".nav, .list-group")) for (let i of et.prev(t, nF)) i.classList.add(nW);
            }
            _clearActiveClass(e) {
                e.classList.remove(nW);
                let t = et.find(`${nB}.${nW}`, e);
                for (let i of t) i.classList.remove(nW);
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    let t = nV.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                        t[e]();
                    }
                });
            }
        }
        H.on(window, nq, () => {
            for (let e of et.find('[data-bs-spy="scroll"]')) nV.getOrCreateInstance(e);
        }),
            $(nV);
        let nX = ".bs.tab",
            nU = `hide${nX}`,
            nK = `hidden${nX}`,
            n3 = `show${nX}`,
            nQ = `shown${nX}`,
            nY = `click${nX}`,
            n2 = `keydown${nX}`,
            n4 = `load${nX}`,
            n7 = "ArrowRight",
            nZ = "ArrowDown",
            nG = "active",
            n5 = "fade",
            n6 = "show",
            nJ = ":not(.dropdown-toggle)",
            se = `.nav-link${nJ}, .list-group-item${nJ}, [role="tab"]${nJ}`,
            st = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
            si = `${se}, ${st}`,
            sn = `.${nG}[data-bs-toggle="tab"], .${nG}[data-bs-toggle="pill"], .${nG}[data-bs-toggle="list"]`;
        class ss extends X {
            constructor(e) {
                if ((super(e), (this._parent = this._element.closest('.list-group, .nav, [role="tablist"]')), !this._parent)) return;
                this._setInitialAttributes(this._parent, this._getChildren()), H.on(this._element, n2, (e) => this._keydown(e));
            }
            static get NAME() {
                return "tab";
            }
            show() {
                let e = this._element;
                if (this._elemIsActive(e)) return;
                let t = this._getActiveElem(),
                    i = t ? H.trigger(t, nU, { relatedTarget: e }) : null,
                    n = H.trigger(e, n3, { relatedTarget: t });
                !n.defaultPrevented && (!i || !i.defaultPrevented) && (this._deactivate(t, e), this._activate(e, t));
            }
            _activate(e, t) {
                if (!e) return;
                e.classList.add(nG), this._activate(r(e));
                let i = () => {
                    if ("tab" !== e.getAttribute("role")) {
                        e.classList.add(n6);
                        return;
                    }
                    e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this._toggleDropDown(e, !0), H.trigger(e, nQ, { relatedTarget: t });
                };
                this._queueCallback(i, e, e.classList.contains(n5));
            }
            _deactivate(e, t) {
                if (!e) return;
                e.classList.remove(nG), e.blur(), this._deactivate(r(e));
                let i = () => {
                    if ("tab" !== e.getAttribute("role")) {
                        e.classList.remove(n6);
                        return;
                    }
                    e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, !1), H.trigger(e, nK, { relatedTarget: t });
                };
                this._queueCallback(i, e, e.classList.contains(n5));
            }
            _keydown(e) {
                if (!["ArrowLeft", n7, "ArrowUp", nZ].includes(e.key)) return;
                e.stopPropagation(), e.preventDefault();
                let t = [n7, nZ].includes(e.key),
                    i = x(
                        this._getChildren().filter((e) => !h(e)),
                        e.target,
                        t,
                        !0
                    );
                i && (i.focus({ preventScroll: !0 }), ss.getOrCreateInstance(i).show());
            }
            _getChildren() {
                return et.find(si, this._parent);
            }
            _getActiveElem() {
                return this._getChildren().find((e) => this._elemIsActive(e)) || null;
            }
            _setInitialAttributes(e, t) {
                for (let i of (this._setAttributeIfNotExists(e, "role", "tablist"), t)) this._setInitialAttributesOnChild(i);
            }
            _setInitialAttributesOnChild(e) {
                e = this._getInnerElement(e);
                let t = this._elemIsActive(e),
                    i = this._getOuterElement(e);
                e.setAttribute("aria-selected", t),
                    i !== e && this._setAttributeIfNotExists(i, "role", "presentation"),
                    t || e.setAttribute("tabindex", "-1"),
                    this._setAttributeIfNotExists(e, "role", "tab"),
                    this._setInitialAttributesOnTargetPanel(e);
            }
            _setInitialAttributesOnTargetPanel(e) {
                let t = r(e);
                t && (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `#${e.id}`));
            }
            _toggleDropDown(e, t) {
                let i = this._getOuterElement(e);
                if (!i.classList.contains("dropdown")) return;
                let n = (e, n) => {
                    let s = et.findOne(e, i);
                    s && s.classList.toggle(n, t);
                };
                n(".dropdown-toggle", nG), n(".dropdown-menu", n6), i.setAttribute("aria-expanded", t);
            }
            _setAttributeIfNotExists(e, t, i) {
                e.hasAttribute(t) || e.setAttribute(t, i);
            }
            _elemIsActive(e) {
                return e.classList.contains(nG);
            }
            _getInnerElement(e) {
                return e.matches(si) ? e : et.findOne(si, e);
            }
            _getOuterElement(e) {
                return e.closest(".nav-item, .list-group-item") || e;
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    let t = ss.getOrCreateInstance(this);
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                        t[e]();
                    }
                });
            }
        }
        H.on(document, nY, st, function (e) {
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(), !h(this) && ss.getOrCreateInstance(this).show();
        }),
            H.on(window, n4, () => {
                for (let e of et.find(sn)) ss.getOrCreateInstance(e);
            }),
            $(ss);
        let sr = ".bs.toast",
            so = `mouseover${sr}`,
            sa = `mouseout${sr}`,
            sl = `focusin${sr}`,
            sc = `focusout${sr}`,
            su = `hide${sr}`,
            sh = `hidden${sr}`,
            sd = `show${sr}`,
            sp = `shown${sr}`,
            sf = "hide",
            sg = "show",
            sm = "showing",
            sv = { animation: "boolean", autohide: "boolean", delay: "number" },
            sy = { animation: !0, autohide: !0, delay: 5e3 };
        class s8 extends X {
            constructor(e, t) {
                super(e, t), (this._timeout = null), (this._hasMouseInteraction = !1), (this._hasKeyboardInteraction = !1), this._setListeners();
            }
            static get Default() {
                return sy;
            }
            static get DefaultType() {
                return sv;
            }
            static get NAME() {
                return "toast";
            }
            show() {
                let e = H.trigger(this._element, sd);
                if (e.defaultPrevented) return;
                this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                let t = () => {
                    this._element.classList.remove(sm), H.trigger(this._element, sp), this._maybeScheduleHide();
                };
                this._element.classList.remove(sf), f(this._element), this._element.classList.add(sg, sm), this._queueCallback(t, this._element, this._config.animation);
            }
            hide() {
                if (!this.isShown()) return;
                let e = H.trigger(this._element, su);
                if (e.defaultPrevented) return;
                let t = () => {
                    this._element.classList.add(sf), this._element.classList.remove(sm, sg), H.trigger(this._element, sh);
                };
                this._element.classList.add(sm), this._queueCallback(t, this._element, this._config.animation);
            }
            dispose() {
                this._clearTimeout(), this.isShown() && this._element.classList.remove(sg), super.dispose();
            }
            isShown() {
                return this._element.classList.contains(sg);
            }
            _maybeScheduleHide() {
                this._config.autohide &&
                    !this._hasMouseInteraction &&
                    !this._hasKeyboardInteraction &&
                    (this._timeout = setTimeout(() => {
                        this.hide();
                    }, this._config.delay));
            }
            _onInteraction(e, t) {
                switch (e.type) {
                    case "mouseover":
                    case "mouseout":
                        this._hasMouseInteraction = t;
                        break;
                    case "focusin":
                    case "focusout":
                        this._hasKeyboardInteraction = t;
                }
                if (t) {
                    this._clearTimeout();
                    return;
                }
                let i = e.relatedTarget;
                !(this._element === i || this._element.contains(i)) && this._maybeScheduleHide();
            }
            _setListeners() {
                H.on(this._element, so, (e) => this._onInteraction(e, !0)),
                    H.on(this._element, sa, (e) => this._onInteraction(e, !1)),
                    H.on(this._element, sl, (e) => this._onInteraction(e, !0)),
                    H.on(this._element, sc, (e) => this._onInteraction(e, !1));
            }
            _clearTimeout() {
                clearTimeout(this._timeout), (this._timeout = null);
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    let t = s8.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                        t[e](this);
                    }
                });
            }
        }
        return U(s8), $(s8), { Alert: Z, Button: ee, Carousel: e9, Collapse: eR, Dropdown: iT, Modal: i5, Offcanvas: ng, Popover: nj, ScrollSpy: nV, Tab: ss, Toast: s8, Tooltip: nP };
    }),
    (function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
    })(function (e) {
        var t,
            i,
            n,
            s,
            r,
            o,
            a = "Close",
            l = "BeforeClose",
            c = "MarkupParse",
            u = "Open",
            h = "Change",
            d = ".mfp",
            p = "mfp-ready",
            f = "mfp-removing",
            g = "mfp-prevent-close",
            m = function () {},
            v = !!window.jQuery,
            y = e(window),
            $ = function (e, i) {
                t.ev.on("mfp" + e + d, i);
            },
            b = function (t, i, n, s) {
                var r = document.createElement("div");
                return (r.className = "mfp-" + t), n && (r.innerHTML = n), s ? i && i.appendChild(r) : ((r = e(r)), i && r.appendTo(i)), r;
            },
            w = function (i, n) {
                t.ev.triggerHandler("mfp" + i, n), t.st.callbacks && ((i = i.charAt(0).toLowerCase() + i.slice(1)), t.st.callbacks[i] && t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n]));
            },
            x = function (i) {
                return (i === o && t.currTemplate.closeBtn) || ((t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose))), (o = i)), t.currTemplate.closeBtn;
            },
            C = function () {
                e.magnificPopup.instance || ((t = new m()).init(), (e.magnificPopup.instance = t));
            },
            _ = function () {
                var e = document.createElement("p").style,
                    t = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition) return !0;
                for (; t.length; ) if (t.pop() + "Transition" in e) return !0;
                return !1;
            };
        (m.prototype = {
            constructor: m,
            init: function () {
                var i = navigator.appVersion;
                (t.isLowIE = t.isIE8 = document.all && !document.addEventListener),
                    (t.isAndroid = /android/gi.test(i)),
                    (t.isIOS = /iphone|ipad|ipod/gi.test(i)),
                    (t.supportsTransition = _()),
                    (t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent)),
                    (n = e(document)),
                    (t.popupsCache = {});
            },
            open: function (i) {
                if (!1 === i.isObj) {
                    (t.items = i.items.toArray()), (t.index = 0);
                    var s,
                        o,
                        a = i.items;
                    for (s = 0; s < a.length; s++)
                        if (((o = a[s]).parsed && (o = o.el[0]), o === i.el[0])) {
                            t.index = s;
                            break;
                        }
                } else (t.items = e.isArray(i.items) ? i.items : [i.items]), (t.index = i.index || 0);
                if (t.isOpen) {
                    t.updateItemHTML();
                    return;
                }
                (t.types = []),
                    (r = ""),
                    i.mainEl && i.mainEl.length ? (t.ev = i.mainEl.eq(0)) : (t.ev = n),
                    i.key ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}), (t.currTemplate = t.popupsCache[i.key])) : (t.currTemplate = {}),
                    (t.st = e.extend(!0, {}, e.magnificPopup.defaults, i)),
                    (t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos),
                    t.st.modal && ((t.st.closeOnContentClick = !1), (t.st.closeOnBgClick = !1), (t.st.showCloseBtn = !1), (t.st.enableEscapeKey = !1)),
                    t.bgOverlay ||
                        ((t.bgOverlay = b("bg").on("click" + d, function () {
                            t.close();
                        })),
                        (t.wrap = b("wrap")
                            .attr("tabindex", -1)
                            .on("click" + d, function (e) {
                                t._checkIfClose(e.target) && t.close();
                            })),
                        (t.container = b("container", t.wrap))),
                    (t.contentContainer = b("content")),
                    t.st.preloader && (t.preloader = b("preloader", t.container, t.st.tLoading));
                var l = e.magnificPopup.modules;
                for (s = 0; s < l.length; s++) {
                    var h = l[s];
                    t["init" + (h = h.charAt(0).toUpperCase() + h.slice(1))].call(t);
                }
                w("BeforeOpen"),
                    t.st.showCloseBtn &&
                        (t.st.closeBtnInside
                            ? ($(c, function (e, t, i, n) {
                                  i.close_replaceWith = x(n.type);
                              }),
                              (r += " mfp-close-btn-in"))
                            : t.wrap.append(x())),
                    t.st.alignTop && (r += " mfp-align-top"),
                    t.fixedContentPos ? t.wrap.css({ overflow: t.st.overflowY, overflowX: "hidden", overflowY: t.st.overflowY }) : t.wrap.css({ top: y.scrollTop(), position: "absolute" }),
                    (!1 !== t.st.fixedBgPos && ("auto" !== t.st.fixedBgPos || t.fixedContentPos)) || t.bgOverlay.css({ height: n.height(), position: "absolute" }),
                    t.st.enableEscapeKey &&
                        n.on("keyup" + d, function (e) {
                            27 === e.keyCode && t.close();
                        }),
                    y.on("resize" + d, function () {
                        t.updateSize();
                    }),
                    t.st.closeOnContentClick || (r += " mfp-auto-cursor"),
                    r && t.wrap.addClass(r);
                var f = (t.wH = y.height()),
                    g = {};
                if (t.fixedContentPos && t._hasScrollBar(f)) {
                    var m = t._getScrollbarSize();
                    m && (g.marginRight = m);
                }
                t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : (g.overflow = "hidden"));
                var v = t.st.mainClass;
                return (
                    t.isIE7 && (v += " mfp-ie7"),
                    v && t._addClassToMFP(v),
                    t.updateItemHTML(),
                    w("BuildControls"),
                    e("html").css(g),
                    t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)),
                    (t._lastFocusedEl = document.activeElement),
                    setTimeout(function () {
                        t.content ? (t._addClassToMFP(p), t._setFocus()) : t.bgOverlay.addClass(p), n.on("focusin" + d, t._onFocusIn);
                    }, 16),
                    (t.isOpen = !0),
                    t.updateSize(f),
                    w(u),
                    i
                );
            },
            close: function () {
                t.isOpen &&
                    (w(l),
                    (t.isOpen = !1),
                    t.st.removalDelay && !t.isLowIE && t.supportsTransition
                        ? (t._addClassToMFP(f),
                          setTimeout(function () {
                              t._close();
                          }, t.st.removalDelay))
                        : t._close());
            },
            _close: function () {
                w(a);
                var i = f + " " + p + " ";
                if ((t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (i += t.st.mainClass + " "), t._removeClassFromMFP(i), t.fixedContentPos)) {
                    var s = { marginRight: "" };
                    t.isIE7 ? e("body, html").css("overflow", "") : (s.overflow = ""), e("html").css(s);
                }
                n.off("keyup" + d + " focusin" + d),
                    t.ev.off(d),
                    t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                    t.bgOverlay.attr("class", "mfp-bg"),
                    t.container.attr("class", "mfp-container"),
                    t.st.showCloseBtn && (!t.st.closeBtnInside || !0 === t.currTemplate[t.currItem.type]) && t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(),
                    t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(),
                    (t.currItem = null),
                    (t.content = null),
                    (t.currTemplate = null),
                    (t.prevHeight = 0),
                    w("AfterClose");
            },
            updateSize: function (e) {
                if (t.isIOS) {
                    var i = document.documentElement.clientWidth / window.innerWidth,
                        n = window.innerHeight * i;
                    t.wrap.css("height", n), (t.wH = n);
                } else t.wH = e || y.height();
                t.fixedContentPos || t.wrap.css("height", t.wH), w("Resize");
            },
            updateItemHTML: function () {
                var i = t.items[t.index];
                t.contentContainer.detach(), t.content && t.content.detach(), i.parsed || (i = t.parseEl(t.index));
                var n = i.type;
                if ((w("BeforeChange", [t.currItem ? t.currItem.type : "", n]), (t.currItem = i), !t.currTemplate[n])) {
                    var r = !!t.st[n] && t.st[n].markup;
                    w("FirstMarkupParse", r), r ? (t.currTemplate[n] = e(r)) : (t.currTemplate[n] = !0);
                }
                s && s !== i.type && t.container.removeClass("mfp-" + s + "-holder");
                var o = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, t.currTemplate[n]);
                t.appendContent(o, n), (i.preloaded = !0), w(h, i), (s = i.type), t.container.prepend(t.contentContainer), w("AfterChange");
            },
            appendContent: function (e, i) {
                (t.content = e),
                    e ? (t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[i] ? t.content.find(".mfp-close").length || t.content.append(x()) : (t.content = e)) : (t.content = ""),
                    w("BeforeAppend"),
                    t.container.addClass("mfp-" + i + "-holder"),
                    t.contentContainer.append(t.content);
            },
            parseEl: function (i) {
                var n,
                    s = t.items[i];
                if ((s.tagName ? (s = { el: e(s) }) : ((n = s.type), (s = { data: s, src: s.src })), s.el)) {
                    for (var r = t.types, o = 0; o < r.length; o++)
                        if (s.el.hasClass("mfp-" + r[o])) {
                            n = r[o];
                            break;
                        }
                    (s.src = s.el.attr("data-mfp-src")), s.src || (s.src = s.el.attr("href"));
                }
                return (s.type = n || t.st.type || "inline"), (s.index = i), (s.parsed = !0), (t.items[i] = s), w("ElementParse", s), t.items[i];
            },
            addGroup: function (e, i) {
                var n = function (n) {
                    (n.mfpEl = this), t._openClick(n, e, i);
                };
                i || (i = {});
                var s = "click.magnificPopup";
                (i.mainEl = e), i.items ? ((i.isObj = !0), e.off(s).on(s, n)) : ((i.isObj = !1), i.delegate ? e.off(s).on(s, i.delegate, n) : ((i.items = e), e.off(s).on(s, n)));
            },
            _openClick: function (i, n, s) {
                if ((void 0 !== s.midClick ? s.midClick : e.magnificPopup.defaults.midClick) || (2 !== i.which && !i.ctrlKey && !i.metaKey && !i.altKey && !i.shiftKey)) {
                    var r = void 0 !== s.disableOn ? s.disableOn : e.magnificPopup.defaults.disableOn;
                    if (r) {
                        if (e.isFunction(r)) {
                            if (!r.call(t)) return !0;
                        } else if (y.width() < r) return !0;
                    }
                    i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()), (s.el = e(i.mfpEl)), s.delegate && (s.items = n.find(s.delegate)), t.open(s);
                }
            },
            updateStatus: function (e, n) {
                if (t.preloader) {
                    i !== e && t.container.removeClass("mfp-s-" + i), n || "loading" !== e || (n = t.st.tLoading);
                    var s = { status: e, text: n };
                    w("UpdateStatus", s),
                        (e = s.status),
                        (n = s.text),
                        t.preloader.html(n),
                        t.preloader.find("a").on("click", function (e) {
                            e.stopImmediatePropagation();
                        }),
                        t.container.addClass("mfp-s-" + e),
                        (i = e);
                }
            },
            _checkIfClose: function (i) {
                if (!e(i).hasClass(g)) {
                    var n = t.st.closeOnContentClick,
                        s = t.st.closeOnBgClick;
                    if ((n && s) || !t.content || e(i).hasClass("mfp-close") || (t.preloader && i === t.preloader[0])) return !0;
                    if (i === t.content[0] || e.contains(t.content[0], i)) {
                        if (n) return !0;
                    } else if (s && e.contains(document, i)) return !0;
                    return !1;
                }
            },
            _addClassToMFP: function (e) {
                t.bgOverlay.addClass(e), t.wrap.addClass(e);
            },
            _removeClassFromMFP: function (e) {
                this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
            },
            _hasScrollBar: function (e) {
                return (t.isIE7 ? n.height() : document.body.scrollHeight) > (e || y.height());
            },
            _setFocus: function () {
                (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
            },
            _onFocusIn: function (i) {
                if (i.target !== t.wrap[0] && !e.contains(t.wrap[0], i.target)) return t._setFocus(), !1;
            },
            _parseMarkup: function (t, i, n) {
                var s;
                n.data && (i = e.extend(n.data, i)),
                    w(c, [t, i, n]),
                    e.each(i, function (i, n) {
                        if (void 0 === n || !1 === n) return !0;
                        if ((s = i.split("_")).length > 1) {
                            var r = t.find(d + "-" + s[0]);
                            if (r.length > 0) {
                                var o = s[1];
                                "replaceWith" === o ? r[0] !== n[0] && r.replaceWith(n) : "img" === o ? (r.is("img") ? r.attr("src", n) : r.replaceWith(e("<img>").attr("src", n).attr("class", r.attr("class")))) : r.attr(s[1], n);
                            }
                        } else t.find(d + "-" + i).html(n);
                    });
            },
            _getScrollbarSize: function () {
                if (void 0 === t.scrollbarSize) {
                    var e = document.createElement("div");
                    (e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"), document.body.appendChild(e), (t.scrollbarSize = e.offsetWidth - e.clientWidth), document.body.removeChild(e);
                }
                return t.scrollbarSize;
            },
        }),
            (e.magnificPopup = {
                instance: null,
                proto: m.prototype,
                modules: [],
                open: function (t, i) {
                    return C(), ((t = t ? e.extend(!0, {}, t) : {}).isObj = !0), (t.index = i || 0), this.instance.open(t);
                },
                close: function () {
                    return e.magnificPopup.instance && e.magnificPopup.instance.close();
                },
                registerModule: function (t, i) {
                    i.options && (e.magnificPopup.defaults[t] = i.options), e.extend(this.proto, i.proto), this.modules.push(t);
                },
                defaults: {
                    disableOn: 0,
                    key: null,
                    midClick: !1,
                    mainClass: "",
                    preloader: !0,
                    focus: "",
                    closeOnContentClick: !1,
                    closeOnBgClick: !0,
                    closeBtnInside: !0,
                    showCloseBtn: !0,
                    enableEscapeKey: !0,
                    modal: !1,
                    alignTop: !1,
                    removalDelay: 0,
                    prependTo: null,
                    fixedContentPos: "auto",
                    fixedBgPos: "auto",
                    overflowY: "auto",
                    closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                    tClose: "Close (Esc)",
                    tLoading: "Loading...",
                    autoFocusLast: !0,
                },
            }),
            (e.fn.magnificPopup = function (i) {
                C();
                var n = e(this);
                if ("string" == typeof i) {
                    if ("open" === i) {
                        var s,
                            r = v ? n.data("magnificPopup") : n[0].magnificPopup,
                            o = parseInt(arguments[1], 10) || 0;
                        r.items ? (s = r.items[o]) : ((s = n), r.delegate && (s = s.find(r.delegate)), (s = s.eq(o))), t._openClick({ mfpEl: s }, n, r);
                    } else t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
                } else (i = e.extend(!0, {}, i)), v ? n.data("magnificPopup", i) : (n[0].magnificPopup = i), t.addGroup(n, i);
                return n;
            });
        var T,
            E,
            k,
            A = "inline",
            S = function () {
                k && (E.after(k.addClass(T)).detach(), (k = null));
            };
        e.magnificPopup.registerModule(A, {
            options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
            proto: {
                initInline: function () {
                    t.types.push(A),
                        $(a + "." + A, function () {
                            S();
                        });
                },
                getInline: function (i, n) {
                    if ((S(), i.src)) {
                        var s = t.st.inline,
                            r = e(i.src);
                        if (r.length) {
                            var o = r[0].parentNode;
                            o && o.tagName && (E || ((E = b((T = s.hiddenClass))), (T = "mfp-" + T)), (k = r.after(E).detach().removeClass(T))), t.updateStatus("ready");
                        } else t.updateStatus("error", s.tNotFound), (r = e("<div>"));
                        return (i.inlineElement = r), r;
                    }
                    return t.updateStatus("ready"), t._parseMarkup(n, {}, i), n;
                },
            },
        });
        var D,
            L = "ajax",
            N = function () {
                D && e(document.body).removeClass(D);
            },
            P = function () {
                N(), t.req && t.req.abort();
            };
        e.magnificPopup.registerModule(L, {
            options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
            proto: {
                initAjax: function () {
                    t.types.push(L), (D = t.st.ajax.cursor), $(a + "." + L, P), $("BeforeChange." + L, P);
                },
                getAjax: function (i) {
                    D && e(document.body).addClass(D), t.updateStatus("loading");
                    var n = e.extend(
                        {
                            url: i.src,
                            success: function (n, s, r) {
                                var o = { data: n, xhr: r };
                                w("ParseAjax", o),
                                    t.appendContent(e(o.data), L),
                                    (i.finished = !0),
                                    N(),
                                    t._setFocus(),
                                    setTimeout(function () {
                                        t.wrap.addClass(p);
                                    }, 16),
                                    t.updateStatus("ready"),
                                    w("AjaxContentAdded");
                            },
                            error: function () {
                                N(), (i.finished = i.loadError = !0), t.updateStatus("error", t.st.ajax.tError.replace("%url%", i.src));
                            },
                        },
                        t.st.ajax.settings
                    );
                    return (t.req = e.ajax(n)), "";
                },
            },
        });
        var O,
            I,
            j = function (i) {
                if (i.data && void 0 !== i.data.title) return i.data.title;
                var n = t.st.image.titleSrc;
                if (n) {
                    if (e.isFunction(n)) return n.call(t, i);
                    if (i.el) return i.el.attr(n) || "";
                }
                return "";
            };
        e.magnificPopup.registerModule("image", {
            options: {
                markup:
                    '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.',
            },
            proto: {
                initImage: function () {
                    var i = t.st.image,
                        n = ".image";
                    t.types.push("image"),
                        $(u + n, function () {
                            "image" === t.currItem.type && i.cursor && e(document.body).addClass(i.cursor);
                        }),
                        $(a + n, function () {
                            i.cursor && e(document.body).removeClass(i.cursor), y.off("resize" + d);
                        }),
                        $("Resize" + n, t.resizeImage),
                        t.isLowIE && $("AfterChange", t.resizeImage);
                },
                resizeImage: function () {
                    var e = t.currItem;
                    if (e && e.img && t.st.image.verticalFit) {
                        var i = 0;
                        t.isLowIE && (i = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - i);
                    }
                },
                _onImageHasSize: function (e) {
                    e.img && ((e.hasSize = !0), O && clearInterval(O), (e.isCheckingImgSize = !1), w("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), (e.imgHidden = !1)));
                },
                findImageSize: function (e) {
                    var i = 0,
                        n = e.img[0],
                        s = function (r) {
                            O && clearInterval(O),
                                (O = setInterval(function () {
                                    if (n.naturalWidth > 0) {
                                        t._onImageHasSize(e);
                                        return;
                                    }
                                    i > 200 && clearInterval(O), 3 == ++i ? s(10) : 40 === i ? s(50) : 100 === i && s(500);
                                }, r));
                        };
                    s(1);
                },
                getImage: function (i, n) {
                    var s = 0,
                        r = function () {
                            i &&
                                (i.img[0].complete
                                    ? (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("ready")), (i.hasSize = !0), (i.loaded = !0), w("ImageLoadComplete"))
                                    : ++s < 200
                                    ? setTimeout(r, 100)
                                    : o());
                        },
                        o = function () {
                            i && (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("error", a.tError.replace("%url%", i.src))), (i.hasSize = !0), (i.loaded = !0), (i.loadError = !0));
                        },
                        a = t.st.image,
                        l = n.find(".mfp-img");
                    if (l.length) {
                        var c = document.createElement("img");
                        (c.className = "mfp-img"),
                            i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")),
                            (i.img = e(c).on("load.mfploader", r).on("error.mfploader", o)),
                            (c.src = i.src),
                            l.is("img") && (i.img = i.img.clone()),
                            (c = i.img[0]).naturalWidth > 0 ? (i.hasSize = !0) : c.width || (i.hasSize = !1);
                    }
                    return (t._parseMarkup(n, { title: j(i), img_replaceWith: i.img }, i), t.resizeImage(), i.hasSize)
                        ? (O && clearInterval(O), i.loadError ? (n.addClass("mfp-loading"), t.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), t.updateStatus("ready")), n)
                        : (t.updateStatus("loading"), (i.loading = !0), i.hasSize || ((i.imgHidden = !0), n.addClass("mfp-loading"), t.findImageSize(i)), n);
                },
            },
        }),
            e.magnificPopup.registerModule("zoom", {
                options: {
                    enabled: !1,
                    easing: "ease-in-out",
                    duration: 300,
                    opener: function (e) {
                        return e.is("img") ? e : e.find("img");
                    },
                },
                proto: {
                    initZoom: function () {
                        var e,
                            i = t.st.zoom,
                            n = ".zoom";
                        if (i.enabled && t.supportsTransition) {
                            var s,
                                r,
                                o = i.duration,
                                c = function (e) {
                                    var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                        n = "all " + i.duration / 1e3 + "s " + i.easing,
                                        s = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                        r = "transition";
                                    return (s["-webkit-" + r] = s["-moz-" + r] = s["-o-" + r] = s[r] = n), t.css(s), t;
                                },
                                u = function () {
                                    t.content.css("visibility", "visible");
                                };
                            $("BuildControls" + n, function () {
                                if (t._allowZoom()) {
                                    if ((clearTimeout(s), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom()))) {
                                        u();
                                        return;
                                    }
                                    (r = c(e)).css(t._getOffset()),
                                        t.wrap.append(r),
                                        (s = setTimeout(function () {
                                            r.css(t._getOffset(!0)),
                                                (s = setTimeout(function () {
                                                    u(),
                                                        setTimeout(function () {
                                                            r.remove(), (e = r = null), w("ZoomAnimationEnded");
                                                        }, 16);
                                                }, o));
                                        }, 16));
                                }
                            }),
                                $(l + n, function () {
                                    if (t._allowZoom()) {
                                        if ((clearTimeout(s), (t.st.removalDelay = o), !e)) {
                                            if (!(e = t._getItemToZoom())) return;
                                            r = c(e);
                                        }
                                        r.css(t._getOffset(!0)),
                                            t.wrap.append(r),
                                            t.content.css("visibility", "hidden"),
                                            setTimeout(function () {
                                                r.css(t._getOffset());
                                            }, 16);
                                    }
                                }),
                                $(a + n, function () {
                                    t._allowZoom() && (u(), r && r.remove(), (e = null));
                                });
                        }
                    },
                    _allowZoom: function () {
                        return "image" === t.currItem.type;
                    },
                    _getItemToZoom: function () {
                        return !!t.currItem.hasSize && t.currItem.img;
                    },
                    _getOffset: function (i) {
                        var n,
                            s = (n = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
                            r = parseInt(n.css("padding-top"), 10),
                            o = parseInt(n.css("padding-bottom"), 10);
                        s.top -= e(window).scrollTop() - r;
                        var a = { width: n.width(), height: (v ? n.innerHeight() : n[0].offsetHeight) - o - r };
                        return (
                            (void 0 === I && (I = void 0 !== document.createElement("p").style.MozTransform), I) ? (a["-moz-transform"] = a.transform = "translate(" + s.left + "px," + s.top + "px)") : ((a.left = s.left), (a.top = s.top)), a
                        );
                    },
                },
            });
        var z = "iframe",
            H = function (e) {
                if (t.currTemplate[z]) {
                    var i = t.currTemplate[z].find("iframe");
                    i.length && (e || (i[0].src = "//about:blank"), t.isIE8 && i.css("display", e ? "block" : "none"));
                }
            };
        e.magnificPopup.registerModule(z, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" },
                    vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" },
                    gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
                },
            },
            proto: {
                initIframe: function () {
                    t.types.push(z),
                        $("BeforeChange", function (e, t, i) {
                            t !== i && (t === z ? H() : i === z && H(!0));
                        }),
                        $(a + "." + z, function () {
                            H();
                        });
                },
                getIframe: function (i, n) {
                    var s = i.src,
                        r = t.st.iframe;
                    e.each(r.patterns, function () {
                        if (s.indexOf(this.index) > -1) return this.id && (s = "string" == typeof this.id ? s.substr(s.lastIndexOf(this.id) + this.id.length, s.length) : this.id.call(this, s)), (s = this.src.replace("%id%", s)), !1;
                    });
                    var o = {};
                    return r.srcAction && (o[r.srcAction] = s), t._parseMarkup(n, o, i), t.updateStatus("ready"), n;
                },
            },
        });
        var M = function (e) {
                var i = t.items.length;
                return e > i - 1 ? e - i : e < 0 ? i + e : e;
            },
            q = function (e, t, i) {
                return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i);
            };
        e.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%",
            },
            proto: {
                initGallery: function () {
                    var i = t.st.gallery,
                        s = ".mfp-gallery";
                    if (((t.direction = !0), !i || !i.enabled)) return !1;
                    (r += " mfp-gallery"),
                        $(u + s, function () {
                            i.navigateByImgClick &&
                                t.wrap.on("click" + s, ".mfp-img", function () {
                                    if (t.items.length > 1) return t.next(), !1;
                                }),
                                n.on("keydown" + s, function (e) {
                                    37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
                                });
                        }),
                        $("UpdateStatus" + s, function (e, i) {
                            i.text && (i.text = q(i.text, t.currItem.index, t.items.length));
                        }),
                        $(c + s, function (e, n, s, r) {
                            var o = t.items.length;
                            s.counter = o > 1 ? q(i.tCounter, r.index, o) : "";
                        }),
                        $("BuildControls" + s, function () {
                            if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
                                var n = i.arrowMarkup,
                                    s = (t.arrowLeft = e(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(g)),
                                    r = (t.arrowRight = e(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(g));
                                s.click(function () {
                                    t.prev();
                                }),
                                    r.click(function () {
                                        t.next();
                                    }),
                                    t.container.append(s.add(r));
                            }
                        }),
                        $(h + s, function () {
                            t._preloadTimeout && clearTimeout(t._preloadTimeout),
                                (t._preloadTimeout = setTimeout(function () {
                                    t.preloadNearbyImages(), (t._preloadTimeout = null);
                                }, 16));
                        }),
                        $(a + s, function () {
                            n.off(s), t.wrap.off("click" + s), (t.arrowRight = t.arrowLeft = null);
                        });
                },
                next: function () {
                    (t.direction = !0), (t.index = M(t.index + 1)), t.updateItemHTML();
                },
                prev: function () {
                    (t.direction = !1), (t.index = M(t.index - 1)), t.updateItemHTML();
                },
                goTo: function (e) {
                    (t.direction = e >= t.index), (t.index = e), t.updateItemHTML();
                },
                preloadNearbyImages: function () {
                    var e,
                        i = t.st.gallery.preload,
                        n = Math.min(i[0], t.items.length),
                        s = Math.min(i[1], t.items.length);
                    for (e = 1; e <= (t.direction ? s : n); e++) t._preloadItem(t.index + e);
                    for (e = 1; e <= (t.direction ? n : s); e++) t._preloadItem(t.index - e);
                },
                _preloadItem: function (i) {
                    if (((i = M(i)), !t.items[i].preloaded)) {
                        var n = t.items[i];
                        n.parsed || (n = t.parseEl(i)),
                            w("LazyLoad", n),
                            "image" === n.type &&
                                (n.img = e('<img class="mfp-img" />')
                                    .on("load.mfploader", function () {
                                        n.hasSize = !0;
                                    })
                                    .on("error.mfploader", function () {
                                        (n.hasSize = !0), (n.loadError = !0), w("LazyLoadError", n);
                                    })
                                    .attr("src", n.src)),
                            (n.preloaded = !0);
                    }
                },
            },
        });
        var W = "retina";
        e.magnificPopup.registerModule(W, {
            options: {
                replaceSrc: function (e) {
                    return e.src.replace(/\.\w+$/, function (e) {
                        return "@2x" + e;
                    });
                },
                ratio: 1,
            },
            proto: {
                initRetina: function () {
                    if (window.devicePixelRatio > 1) {
                        var e = t.st.retina,
                            i = e.ratio;
                        (i = isNaN(i) ? i() : i) > 1 &&
                            ($("ImageHasSize." + W, function (e, t) {
                                t.img.css({ "max-width": t.img[0].naturalWidth / i, width: "100%" });
                            }),
                            $("ElementParse." + W, function (t, n) {
                                n.src = e.replaceSrc(n, i);
                            }));
                    }
                },
            },
        }),
            C();
    }),
    (function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery);
    })(function (e, t) {
        var i = "plugin_hideShowPassword",
            n = ["show", "innerToggle"],
            s = {
                show: "infer",
                innerToggle: !1,
                enable: (function () {
                    var e = document.body,
                        t = document.createElement("input"),
                        i = !0;
                    e || (e = document.createElement("body")), (t = e.appendChild(t));
                    try {
                        t.setAttribute("type", "text");
                    } catch (n) {
                        i = !1;
                    }
                    return e.removeChild(t), i;
                })(),
                triggerOnToggle: !1,
                className: "hideShowPassword-field",
                initEvent: "hideShowPasswordInit",
                changeEvent: "passwordVisibilityChange",
                props: { autocapitalize: "off", autocomplete: "off", autocorrect: "off", spellcheck: "false" },
                toggle: {
                    element: '<button type="button">',
                    className: "hideShowPassword-toggle",
                    touchSupport: "undefined" != typeof Modernizr && Modernizr.touchevents,
                    attachToEvent: "click.hideShowPassword",
                    attachToTouchEvent: "touchstart.hideShowPassword mousedown.hideShowPassword",
                    attachToKeyEvent: "keyup",
                    attachToKeyCodes: !0,
                    styles: { position: "absolute" },
                    touchStyles: { pointerEvents: "none" },
                    position: "infer",
                    verticalAlign: "middle",
                    offset: 0,
                    attr: { role: "button", "aria-label": "Show Password", title: "Show Password", tabIndex: 0 },
                },
                wrapper: {
                    element: "<div>",
                    className: "hideShowPassword-wrapper",
                    enforceWidth: !1,
                    styles: { position: "relative" },
                    inheritStyles: ["display", "verticalAlign", "marginTop", "marginRight", "marginBottom", "marginLeft"],
                    innerElementStyles: { marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0 },
                },
                states: {
                    shown: {
                        className: "hideShowPassword-shown",
                        changeEvent: "passwordShown",
                        props: { type: "text" },
                        toggle: { className: "hideShowPassword-toggle-hide", content: "Hide", attr: { "aria-pressed": "true", title: "Hide Password" } },
                    },
                    hidden: {
                        className: "hideShowPassword-hidden",
                        changeEvent: "passwordHidden",
                        props: { type: "password" },
                        toggle: { className: "hideShowPassword-toggle-show", content: "Show", attr: { "aria-pressed": "false", title: "Show Password" } },
                    },
                },
            };
        function r(t, i) {
            (this.element = e(t)), (this.wrapperElement = e()), (this.toggleElement = e()), this.init(i);
        }
        (r.prototype = {
            init: function (t) {
                this.update(t, s) &&
                    (this.element.addClass(this.options.className),
                    this.options.innerToggle &&
                        (this.wrapElement(this.options.wrapper),
                        this.initToggle(this.options.toggle),
                        "string" == typeof this.options.innerToggle &&
                            (this.toggleElement.hide(),
                            this.element.one(
                                this.options.innerToggle,
                                e.proxy(function () {
                                    this.toggleElement.show();
                                }, this)
                            ))),
                    this.element.trigger(this.options.initEvent, [this]));
            },
            update: function (e, t) {
                return (this.options = this.prepareOptions(e, t)), this.updateElement() && this.element.trigger(this.options.changeEvent, [this]).trigger(this.state().changeEvent, [this]), this.options.enable;
            },
            toggle: function (e) {
                return (e = e || "toggle"), this.update({ show: e });
            },
            prepareOptions: function (t, i) {
                var n,
                    s = t || {},
                    r = [];
                if (
                    ((i = i || this.options),
                    (t = e.extend(!0, {}, i, t)),
                    s.hasOwnProperty("wrapper") && s.wrapper.hasOwnProperty("inheritStyles") && (t.wrapper.inheritStyles = s.wrapper.inheritStyles),
                    t.enable &&
                        ("toggle" === t.show ? (t.show = this.isType("hidden", t.states)) : "infer" === t.show && (t.show = this.isType("shown", t.states)),
                        "infer" === t.toggle.position && (t.toggle.position = "rtl" === this.element.css("text-direction") ? "left" : "right"),
                        !e.isArray(t.toggle.attachToKeyCodes)))
                ) {
                    if (!0 === t.toggle.attachToKeyCodes)
                        switch ((n = e(t.toggle.element)).prop("tagName").toLowerCase()) {
                            case "button":
                            case "input":
                                break;
                            case "a":
                                if (n.filter("[href]").length) {
                                    r.push(32);
                                    break;
                                }
                            default:
                                r.push(32, 13);
                        }
                    t.toggle.attachToKeyCodes = r;
                }
                return t;
            },
            updateElement: function () {
                return (
                    !(!this.options.enable || this.isType()) &&
                    (this.element.prop(e.extend({}, this.options.props, this.state().props)).addClass(this.state().className).removeClass(this.otherState().className),
                    this.options.triggerOnToggle && this.element.trigger(this.options.triggerOnToggle, [this]),
                    this.updateToggle(),
                    !0)
                );
            },
            isType: function (e, i) {
                return (i = i || this.options.states)[(e = e || this.state(t, t, i).props.type)] && (e = i[e].props.type), this.element.prop("type") === e;
            },
            state: function (e, i, n) {
                return (n = n || this.options.states), e === t && (e = this.options.show), "boolean" == typeof e && (e = e ? "shown" : "hidden"), i && (e = "shown" === e ? "hidden" : "shown"), n[e];
            },
            otherState: function (e) {
                return this.state(e, !0);
            },
            wrapElement: function (t) {
                var i,
                    n = t.enforceWidth;
                return (
                    this.wrapperElement.length ||
                        ((i = this.element.outerWidth()),
                        e.each(
                            t.inheritStyles,
                            e.proxy(function (e, i) {
                                t.styles[i] = this.element.css(i);
                            }, this)
                        ),
                        this.element.css(t.innerElementStyles).wrap(e(t.element).addClass(t.className).css(t.styles)),
                        (this.wrapperElement = this.element.parent()),
                        !0 === n && (n = this.wrapperElement.outerWidth() !== i && i),
                        !1 !== n && this.wrapperElement.css("width", n)),
                    this.wrapperElement
                );
            },
            initToggle: function (t) {
                return (
                    !this.toggleElement.length &&
                        ((this.toggleElement = e(t.element).attr(t.attr).addClass(t.className).css(t.styles).appendTo(this.wrapperElement)),
                        this.updateToggle(),
                        this.positionToggle(t.position, t.verticalAlign, t.offset),
                        t.touchSupport ? (this.toggleElement.css(t.touchStyles), this.element.on(t.attachToTouchEvent, e.proxy(this.toggleTouchEvent, this))) : this.toggleElement.on(t.attachToEvent, e.proxy(this.toggleEvent, this)),
                        t.attachToKeyCodes.length && this.toggleElement.on(t.attachToKeyEvent, e.proxy(this.toggleKeyEvent, this))),
                    this.toggleElement
                );
            },
            positionToggle: function (e, t, i) {
                var n = {};
                switch (((n[e] = i), t)) {
                    case "top":
                    case "bottom":
                        n[t] = i;
                        break;
                    case "middle":
                        (n.top = "50%"), (n.marginTop = -(this.toggleElement.outerHeight() / 2));
                }
                return this.toggleElement.css(n);
            },
            updateToggle: function (e, t) {
                var i, n;
                return (
                    this.toggleElement.length &&
                        ((i = "padding-" + this.options.toggle.position),
                        (e = e || this.state().toggle),
                        (t = t || this.otherState().toggle),
                        this.toggleElement.attr(e.attr).addClass(e.className).removeClass(t.className).html(e.content),
                        (n = this.toggleElement.outerWidth() + 2 * this.options.toggle.offset),
                        this.element.css(i) !== n && this.element.css(i, n)),
                    this.toggleElement
                );
            },
            toggleEvent: function (e) {
                e.preventDefault(), this.toggle();
            },
            toggleKeyEvent: function (t) {
                e.each(
                    this.options.toggle.attachToKeyCodes,
                    e.proxy(function (e, i) {
                        if (t.which === i) return this.toggleEvent(t), !1;
                    }, this)
                );
            },
            toggleTouchEvent: function (e) {
                var t,
                    i,
                    n,
                    s = this.toggleElement.offset().left;
                s && ((t = e.pageX || e.originalEvent.pageX), "left" === this.options.toggle.position ? ((s += this.toggleElement.outerWidth()), (i = t), (n = s)) : ((i = s), (n = t)), n >= i && this.toggleEvent(e));
            },
        }),
            (e.fn.hideShowPassword = function () {
                var t = {};
                return (
                    e.each(arguments, function (i, s) {
                        var r = {};
                        if ("object" == typeof s) r = s;
                        else {
                            if (!n[i]) return !1;
                            r[n[i]] = s;
                        }
                        e.extend(!0, t, r);
                    }),
                    this.each(function () {
                        var n = e(this),
                            s = n.data(i);
                        s ? s.update(t) : n.data(i, new r(this, t));
                    })
                );
            }),
            e.each({ show: !0, hide: !1, toggle: "toggle" }, function (t, i) {
                e.fn[t + "Password"] = function (e, t) {
                    return this.hideShowPassword(i, e, t);
                };
            });
    });
