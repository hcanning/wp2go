/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (t, e) {

    "use strict";

    "object" == typeof module && "object" == typeof module.exports

        ? (module.exports = t.document

              ? e(t, !0)

              : function (t) {

                    if (t.document) return e(t);

                    throw new Error("jQuery requires a window with a document");

                })

        : e(t);

})("undefined" != typeof window ? window : this, function (x, z) {

    "use strict";

    function y(t) {

        return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item;

    }

    function R(t) {

        return null != t && t === t.window;

    }

    function N(t, e, i) {

        var n,

            o,

            r = (i = i || E).createElement("script");

        if (((r.text = t), e)) for (n in oe) (o = e[n] || (e.getAttribute && e.getAttribute(n))) && r.setAttribute(n, o);

        i.head.appendChild(r).parentNode.removeChild(r);

    }

    function q(t) {

        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Jt[te.call(t)] || "object" : typeof t;

    }

    function H(t) {

        var e = !!t && "length" in t && t.length,

            i = q(t);

        return !y(t) && !R(t) && ("array" === i || 0 === e || ("number" == typeof e && 0 < e && e - 1 in t));

    }

    function b(t, e) {

        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();

    }

    function F(t, e) {

        return e ? ("\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " ") : "\\" + t;

    }

    function _(t, e, i, n) {

        var o,

            r,

            s,

            a,

            l,

            c,

            u = e && e.ownerDocument,

            h = e ? e.nodeType : 9;

        if (((i = i || []), "string" != typeof t || !t || (1 !== h && 9 !== h && 11 !== h))) return i;

        if (!n && (U(e), (e = e || A), I)) {

            if (11 !== h && (a = De.exec(t)))

                if ((o = a[1])) {

                    if (9 === h) {

                        if (!(c = e.getElementById(o))) return i;

                        if (c.id === o) return O.call(i, c), i;

                    } else if (u && (c = u.getElementById(o)) && _.contains(e, c) && c.id === o) return O.call(i, c), i;

                } else {

                    if (a[2]) return O.apply(i, e.getElementsByTagName(t)), i;

                    if ((o = a[3]) && e.getElementsByClassName) return O.apply(i, e.getElementsByClassName(o)), i;

                }

            if (!(we[t + " "] || (p && p.test(t)))) {

                if (((c = t), (u = e), 1 === h && (ke.test(t) || Se.test(t)))) {

                    for (((u = (Pe.test(t) && V(e.parentNode)) || e) == e && g.scope) || ((s = e.getAttribute("id")) ? (s = S.escapeSelector(s)) : e.setAttribute("id", (s = j))), r = (l = X(t)).length; r--; )

                        l[r] = (s ? "#" + s : ":scope") + " " + G(l[r]);

                    c = l.join(",");

                }

                try {

                    return O.apply(i, u.querySelectorAll(c)), i;

                } catch (e) {

                    we(t, !0);

                } finally {

                    s === j && e.removeAttribute("id");

                }

            }

        }

        return et(t.replace(ce, "$1"), e, i, n);

    }

    function W() {

        var n = [];

        return function t(e, i) {

            return n.push(e + " ") > k.cacheLength && delete t[n.shift()], (t[e + " "] = i);

        };

    }

    function d(t) {

        return (t[j] = !0), t;

    }

    function $(t) {

        var e = A.createElement("fieldset");

        try {

            return !!t(e);

        } catch (t) {

            return !1;

        } finally {

            e.parentNode && e.parentNode.removeChild(e);

        }

    }

    function B(e) {

        return function (t) {

            return "form" in t

                ? t.parentNode && !1 === t.disabled

                    ? "label" in t

                        ? "label" in t.parentNode

                            ? t.parentNode.disabled === e

                            : t.disabled === e

                        : t.isDisabled === e || (t.isDisabled !== !e && ze(t) === e)

                    : t.disabled === e

                : "label" in t && t.disabled === e;

        };

    }

    function Q(s) {

        return d(function (r) {

            return (

                (r = +r),

                d(function (t, e) {

                    for (var i, n = s([], t.length, r), o = n.length; o--; ) t[(i = n[o])] && (t[i] = !(e[i] = t[i]));

                })

            );

        });

    }

    function V(t) {

        return t && void 0 !== t.getElementsByTagName && t;

    }

    function U(t) {

        return (

            (t = t ? t.ownerDocument || t : o) != A &&

                9 === t.nodeType &&

                t.documentElement &&

                ((n = (A = t).documentElement),

                (I = !S.isXMLDoc(A)),

                (me = n.matches || n.webkitMatchesSelector || n.msMatchesSelector),

                n.msMatchesSelector && o != A && (t = A.defaultView) && t.top !== t && t.addEventListener("unload", Me),

                (g.getById = $(function (t) {

                    return (n.appendChild(t).id = S.expando), !A.getElementsByName || !A.getElementsByName(S.expando).length;

                })),

                (g.disconnectedMatch = $(function (t) {

                    return me.call(t, "*");

                })),

                (g.scope = $(function () {

                    return A.querySelectorAll(":scope");

                })),

                (g.cssHas = $(function () {

                    try {

                        return A.querySelector(":has(*,:jqfake)"), 0;

                    } catch (t) {

                        return 1;

                    }

                })),

                g.getById

                    ? ((k.filter.ID = function (t) {

                          var e = t.replace(h, f);

                          return function (t) {

                              return t.getAttribute("id") === e;

                          };

                      }),

                      (k.find.ID = function (t, e) {

                          if (void 0 !== e.getElementById && I) return (e = e.getElementById(t)) ? [e] : [];

                      }))

                    : ((k.filter.ID = function (t) {

                          var e = t.replace(h, f);

                          return function (t) {

                              return (t = void 0 !== t.getAttributeNode && t.getAttributeNode("id")) && t.value === e;

                          };

                      }),

                      (k.find.ID = function (t, e) {

                          if (void 0 !== e.getElementById && I) {

                              var i,

                                  n,

                                  o,

                                  r = e.getElementById(t);

                              if (r) {

                                  if ((i = r.getAttributeNode("id")) && i.value === t) return [r];

                                  for (o = e.getElementsByName(t), n = 0; (r = o[n++]); ) if ((i = r.getAttributeNode("id")) && i.value === t) return [r];

                              }

                              return [];

                          }

                      })),

                (k.find.TAG = function (t, e) {

                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : e.querySelectorAll(t);

                }),

                (k.find.CLASS = function (t, e) {

                    if (void 0 !== e.getElementsByClassName && I) return e.getElementsByClassName(t);

                }),

                (p = []),

                $(function (t) {

                    var e;

                    (n.appendChild(t).innerHTML = "<a id='" + j + "' href='' disabled='disabled'></a><select id='" + j + "-\r\\' disabled='disabled'><option selected=''></option></select>"),

                        t.querySelectorAll("[selected]").length || p.push("\\[" + i + "*(?:value|" + Ce + ")"),

                        t.querySelectorAll("[id~=" + j + "-]").length || p.push("~="),

                        t.querySelectorAll("a#" + j + "+*").length || p.push(".#.+[+~]"),

                        t.querySelectorAll(":checked").length || p.push(":checked"),

                        (e = A.createElement("input")).setAttribute("type", "hidden"),

                        t.appendChild(e).setAttribute("name", "D"),

                        (n.appendChild(t).disabled = !0),

                        2 !== t.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"),

                        (e = A.createElement("input")).setAttribute("name", ""),

                        t.appendChild(e),

                        t.querySelectorAll("[name='']").length || p.push("\\[" + i + "*name" + i + "*=" + i + "*(?:''|\"\")");

                }),

                g.cssHas || p.push(":has"),

                (p = p.length && new RegExp(p.join("|"))),

                (xe = function (t, e) {

                    var i;

                    return t === e

                        ? ((fe = !0), 0)

                        : !t.compareDocumentPosition - !e.compareDocumentPosition ||

                              (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || (!g.sortDetached && e.compareDocumentPosition(t) === i)

                                  ? t === A || (t.ownerDocument == o && _.contains(o, t))

                                      ? -1

                                      : e === A || (e.ownerDocument == o && _.contains(o, e))

                                      ? 1

                                      : pe

                                      ? T.call(pe, t) - T.call(pe, e)

                                      : 0

                                  : 4 & i

                                  ? -1

                                  : 1);

                })),

            A

        );

    }

    function Y() {}

    function X(t, e) {

        var i,

            n,

            o,

            r,

            s,

            a,

            l,

            c = be[t + " "];

        if (c) return e ? 0 : c.slice(0);

        for (s = t, a = [], l = k.preFilter; s; ) {

            for (r in ((i && !(n = Ee.exec(s))) || (n && (s = s.slice(n[0].length) || s), a.push((o = []))),

            (i = !1),

            (n = Se.exec(s)) && ((i = n.shift()), o.push({ value: i, type: n[0].replace(ce, " ") }), (s = s.slice(i.length))),

            k.filter))

                !(n = Oe[r].exec(s)) || (l[r] && !(n = l[r](n))) || ((i = n.shift()), o.push({ value: i, type: r, matches: n }), (s = s.slice(i.length)));

            if (!i) break;

        }

        return e ? s.length : s ? _.error(t) : be(t, a).slice(0);

    }

    function G(t) {

        for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;

        return n;

    }

    function Z(s, t, e) {

        var a = t.dir,

            l = t.next,

            c = l || a,

            u = e && "parentNode" === c,

            h = ve++;

        return t.first

            ? function (t, e, i) {

                  for (; (t = t[a]); ) if (1 === t.nodeType || u) return s(t, e, i);

                  return !1;

              }

            : function (t, e, i) {

                  var n,

                      o,

                      r = [L, h];

                  if (i) {

                      for (; (t = t[a]); ) if ((1 === t.nodeType || u) && s(t, e, i)) return !0;

                  } else

                      for (; (t = t[a]); )

                          if (1 === t.nodeType || u)

                              if (((o = t[j] || (t[j] = {})), l && b(t, l))) t = t[a] || t;

                              else {

                                  if ((n = o[c]) && n[0] === L && n[1] === h) return (r[2] = n[2]);

                                  if (((o[c] = r)[2] = s(t, e, i))) return !0;

                              }

                  return !1;

              };

    }

    function K(o) {

        return 1 < o.length

            ? function (t, e, i) {

                  for (var n = o.length; n--; ) if (!o[n](t, e, i)) return !1;

                  return !0;

              }

            : o[0];

    }

    function J(t, e, i, n, o) {

        for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++) !(r = t[a]) || (i && !i(r, n, o)) || (s.push(r), c && e.push(a));

        return s;

    }

    function tt(t, e) {

        var i,

            g,

            v,

            y,

            b,

            n,

            o = [],

            r = [],

            s = _e[t + " "];

        if (!s) {

            for (i = (e = e || X(t)).length; i--; )

                ((s = (function t(e) {

                    for (

                        var n,

                            i,

                            o,

                            r = e.length,

                            s = k.relative[e[0].type],

                            a = s || k.relative[" "],

                            l = s ? 1 : 0,

                            c = Z(

                                function (t) {

                                    return t === n;

                                },

                                a,

                                !0

                            ),

                            u = Z(

                                function (t) {

                                    return -1 < T.call(n, t);

                                },

                                a,

                                !0

                            ),

                            h = [

                                function (t, e, i) {

                                    return (t = (!s && (i || e != de)) || ((n = e).nodeType ? c : u)(t, e, i)), (n = null), t;

                                },

                            ];

                        l < r;

                        l++

                    )

                        if ((i = k.relative[e[l].type])) h = [Z(K(h), i)];

                        else {

                            if ((i = k.filter[e[l].type].apply(null, e[l].matches))[j]) {

                                for (o = ++l; o < r && !k.relative[e[o].type]; o++);

                                return (function t(p, f, m, g, v, e) {

                                    return (

                                        g && !g[j] && (g = t(g)),

                                        v && !v[j] && (v = t(v, e)),

                                        d(function (t, e, i, n) {

                                            var o,

                                                r,

                                                s,

                                                a,

                                                l = [],

                                                c = [],

                                                u = e.length,

                                                h =

                                                    t ||

                                                    (function (t, e, i) {

                                                        for (var n = 0, o = e.length; n < o; n++) _(t, e[n], i);

                                                        return i;

                                                    })(f || "*", i.nodeType ? [i] : i, []),

                                                d = !p || (!t && f) ? h : J(h, l, p, i, n);

                                            if ((m ? m(d, (a = v || (t ? p : u || g) ? [] : e), i, n) : (a = d), g)) for (o = J(a, c), g(o, [], i, n), r = o.length; r--; ) (s = o[r]) && (a[c[r]] = !(d[c[r]] = s));

                                            if (t) {

                                                if (v || p) {

                                                    if (v) {

                                                        for (o = [], r = a.length; r--; ) (s = a[r]) && o.push((d[r] = s));

                                                        v(null, (a = []), o, n);

                                                    }

                                                    for (r = a.length; r--; ) (s = a[r]) && -1 < (o = v ? T.call(t, s) : l[r]) && (t[o] = !(e[o] = s));

                                                }

                                            } else (a = J(a === e ? a.splice(u, a.length) : a)), v ? v(null, e, a, n) : O.apply(e, a);

                                        })

                                    );

                                })(1 < l && K(h), 1 < l && G(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(ce, "$1"), i, l < o && t(e.slice(l, o)), o < r && t((e = e.slice(o))), o < r && G(e));

                            }

                            h.push(i);

                        }

                    return K(h);

                })(e[i]))[j]

                    ? o

                    : r

                ).push(s);

            (s = _e(

                t,

                ((y = 0 < (v = o).length),

                (b = 0 < (g = r).length),

                (n = function (t, e, i, n, o) {

                    var r,

                        s,

                        a,

                        l = 0,

                        c = "0",

                        u = t && [],

                        h = [],

                        d = de,

                        p = t || (b && k.find.TAG("*", o)),

                        f = (L += null == d ? 1 : Math.random() || 0.1),

                        m = p.length;

                    for (o && (de = e == A || e || o); c !== m && null != (r = p[c]); c++) {

                        if (b && r) {

                            for (s = 0, e || r.ownerDocument == A || (U(r), (i = !I)); (a = g[s++]); )

                                if (a(r, e || A, i)) {

                                    O.call(n, r);

                                    break;

                                }

                            o && (L = f);

                        }

                        y && ((r = !a && r) && l--, t) && u.push(r);

                    }

                    if (((l += c), y && c !== l)) {

                        for (s = 0; (a = v[s++]); ) a(u, h, e, i);

                        if (t) {

                            if (0 < l) for (; c--; ) u[c] || h[c] || (h[c] = se.call(n));

                            h = J(h);

                        }

                        O.apply(n, h), o && !t && 0 < h.length && 1 < l + v.length && S.uniqueSort(n);

                    }

                    return o && ((L = f), (de = d)), u;

                }),

                y ? d(n) : n)

            )).selector = t;

        }

        return s;

    }

    function et(t, e, i, n) {

        var o,

            r,

            s,

            a,

            l,

            c = "function" == typeof t && t,

            u = !n && X((t = c.selector || t));

        if (((i = i || []), 1 === u.length)) {

            if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === e.nodeType && I && k.relative[r[1].type]) {

                if (!(e = (k.find.ID(s.matches[0].replace(h, f), e) || [])[0])) return i;

                c && (e = e.parentNode), (t = t.slice(r.shift().value.length));

            }

            for (o = Oe.needsContext.test(t) ? 0 : r.length; o-- && ((s = r[o]), !k.relative[(a = s.type)]); )

                if ((l = k.find[a]) && (n = l(s.matches[0].replace(h, f), (Pe.test(r[0].type) && V(e.parentNode)) || e))) {

                    if ((r.splice(o, 1), (t = n.length && G(r)))) break;

                    return O.apply(i, n), i;

                }

        }

        return (c || tt(t, u))(n, e, !I, i, !e || (Pe.test(t) && V(e.parentNode)) || e), i;

    }

    function it(t, e, i) {

        for (var n = [], o = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )

            if (1 === t.nodeType) {

                if (o && S(t).is(i)) break;

                n.push(t);

            }

        return n;

    }

    function nt(t, e) {

        for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);

        return i;

    }

    function ot(t, i, n) {

        return y(i)

            ? S.grep(t, function (t, e) {

                  return !!i.call(t, e, t) !== n;

              })

            : i.nodeType

            ? S.grep(t, function (t) {

                  return (t === i) !== n;

              })

            : "string" != typeof i

            ? S.grep(t, function (t) {

                  return -1 < T.call(i, t) !== n;

              })

            : S.filter(i, t, n);

    }

    function rt(t, e) {

        for (; (t = t[e]) && 1 !== t.nodeType; );

        return t;

    }

    function st(t) {

        return t;

    }

    function at(t) {

        throw t;

    }

    function lt(t, e, i, n) {

        var o;

        try {

            t && y((o = t.promise)) ? o.call(t).done(e).fail(i) : t && y((o = t.then)) ? o.call(t, e, i) : e.apply(void 0, [t].slice(n));

        } catch (t) {

            i.apply(void 0, [t]);

        }

    }

    function ct() {

        E.removeEventListener("DOMContentLoaded", ct), x.removeEventListener("load", ct), S.ready();

    }

    function u(t, e, i, n, o, r, s) {

        var a = 0,

            l = t.length,

            c = null == i;

        if ("object" === q(i)) for (a in ((o = !0), i)) u(t, e, a, i[a], !0, r, s);

        else if (

            void 0 !== n &&

            ((o = !0),

            y(n) || (s = !0),

            (e = c

                ? s

                    ? (e.call(t, n), null)

                    : ((c = e),

                      function (t, e, i) {

                          return c.call(S(t), i);

                      })

                : e))

        )

            for (; a < l; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));

        return o ? t : c ? e.call(t) : l ? e(t[0], i) : r;

    }

    function ut(t, e) {

        return e.toUpperCase();

    }

    function w(t) {

        return t.replace(Qe, "ms-").replace(Ve, ut);

    }

    function ht(t) {

        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;

    }

    function dt() {

        this.expando = S.expando + dt.uid++;

    }

    function pt(t, e, i) {

        var n, o;

        if (void 0 === i && 1 === t.nodeType)

            if (((n = "data-" + e.replace(Ye, "-$&").toLowerCase()), "string" == typeof (i = t.getAttribute(n)))) {

                try {

                    i = "true" === (o = i) || ("false" !== o && ("null" === o ? null : o === +o + "" ? +o : Ue.test(o) ? JSON.parse(o) : o));

                } catch (t) {}

                c.set(t, e, i);

            } else i = void 0;

        return i;

    }

    function ft(t, e) {

        return "none" === (t = e || t).style.display || ("" === t.style.display && Ke(t) && "none" === S.css(t, "display"));

    }

    function mt(t, e, i, n) {

        var o,

            r,

            s = 20,

            a = n

                ? function () {

                      return n.cur();

                  }

                : function () {

                      return S.css(t, e, "");

                  },

            l = a(),

            c = (i && i[3]) || (S.cssNumber[e] ? "" : "px"),

            u = t.nodeType && (S.cssNumber[e] || ("px" !== c && +l)) && Xe.exec(S.css(t, e));

        if (u && u[3] !== c) {

            for (c = c || u[3], u = (l /= 2) || 1; s--; ) S.style(t, e, u + c), (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0), (u /= r);

            S.style(t, e, (u *= 2) + c), (i = i || []);

        }

        return i && ((u = +u || +l || 0), (o = i[1] ? u + (i[1] + 1) * i[2] : +i[2]), n) && ((n.unit = c), (n.start = u), (n.end = o)), o;

    }

    function gt(t, e) {

        for (var i, n, o, r, s, a = [], l = 0, c = t.length; l < c; l++)

            (n = t[l]).style &&

                ((i = n.style.display),

                e

                    ? ("none" === i && ((a[l] = v.get(n, "display") || null), a[l] || (n.style.display = "")),

                      "" === n.style.display &&

                          ft(n) &&

                          (a[l] =

                              ((s = o = void 0),

                              (s = n.ownerDocument),

                              (r = n.nodeName),

                              ti[r] || ((o = s.body.appendChild(s.createElement(r))), (s = S.css(o, "display")), o.parentNode.removeChild(o), (ti[r] = "none" === s ? "block" : s)))))

                    : "none" !== i && ((a[l] = "none"), v.set(n, "display", i)));

        for (l = 0; l < c; l++) null != a[l] && (t[l].style.display = a[l]);

        return t;

    }

    function m(t, e) {

        var i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];

        return void 0 === e || (e && b(t, e)) ? S.merge([t], i) : i;

    }

    function vt(t, e) {

        for (var i = 0, n = t.length; i < n; i++) v.set(t[i], "globalEval", !e || v.get(e[i], "globalEval"));

    }

    function yt(t, e, i, n, o) {

        for (var r, s, a, l, c, u = e.createDocumentFragment(), h = [], d = 0, p = t.length; d < p; d++)

            if ((r = t[d]) || 0 === r)

                if ("object" === q(r)) S.merge(h, r.nodeType ? [r] : r);

                else if (oi.test(r)) {

                    for (s = s || u.appendChild(e.createElement("div")), a = (ii.exec(r) || ["", ""])[1].toLowerCase(), a = P[a] || P._default, s.innerHTML = a[1] + S.htmlPrefilter(r) + a[2], c = a[0]; c--; ) s = s.lastChild;

                    S.merge(h, s.childNodes), ((s = u.firstChild).textContent = "");

                } else h.push(e.createTextNode(r));

        for (u.textContent = "", d = 0; (r = h[d++]); )

            if (n && -1 < S.inArray(r, n)) o && o.push(r);

            else if (((l = Ke(r)), (s = m(u.appendChild(r), "script")), l && vt(s), i)) for (c = 0; (r = s[c++]); ) ni.test(r.type || "") && i.push(r);

        return u;

    }

    function bt() {

        return !0;

    }

    function _t() {

        return !1;

    }

    function wt(t, e, i, n, o, r) {

        var s, a;

        if ("object" == typeof e) {

            for (a in ("string" != typeof i && ((n = n || i), (i = void 0)), e)) wt(t, a, i, n, e[a], r);

            return t;

        }

        if ((null == n && null == o ? ((o = i), (n = i = void 0)) : null == o && ("string" == typeof i ? ((o = n), (n = void 0)) : ((o = n), (n = i), (i = void 0))), !1 === o)) o = _t;

        else if (!o) return t;

        return (

            1 === r &&

                ((s = o),

                ((o = function (t) {

                    return S().off(t), s.apply(this, arguments);

                }).guid = s.guid || (s.guid = S.guid++))),

            t.each(function () {

                S.event.add(this, e, o, n, i);

            })

        );

    }

    function xt(t, n, e) {

        e

            ? (v.set(t, n, !1),

              S.event.add(t, n, {

                  namespace: !1,

                  handler: function (t) {

                      var e,

                          i = v.get(this, n);

                      if (1 & t.isTrigger && this[n]) {

                          if (i) (S.event.special[n] || {}).delegateType && t.stopPropagation();

                          else if (((i = a.call(arguments)), v.set(this, n, i), this[n](), (e = v.get(this, n)), v.set(this, n, !1), i !== e)) return t.stopImmediatePropagation(), t.preventDefault(), e;

                      } else i && (v.set(this, n, S.event.trigger(i[0], i.slice(1), this)), t.stopPropagation(), (t.isImmediatePropagationStopped = bt));

                  },

              }))

            : void 0 === v.get(t, n) && S.event.add(t, n, bt);

    }

    function Ct(t, e) {

        return (b(t, "table") && b(11 !== e.nodeType ? e : e.firstChild, "tr") && S(t).children("tbody")[0]) || t;

    }

    function Tt(t) {

        return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;

    }

    function Et(t) {

        return "true/" === (t.type || "").slice(0, 5) ? (t.type = t.type.slice(5)) : t.removeAttribute("type"), t;

    }

    function St(t, e) {

        var i, n, o, r;

        if (1 === e.nodeType) {

            if (v.hasData(t) && (r = v.get(t).events)) for (o in (v.remove(e, "handle events"), r)) for (i = 0, n = r[o].length; i < n; i++) S.event.add(e, o, r[o][i]);

            c.hasData(t) && ((t = c.access(t)), (t = S.extend({}, t)), c.set(e, t));

        }

    }

    function kt(i, n, o, r) {

        n = Zt(n);

        var t,

            e,

            s,

            a,

            l,

            c,

            u = 0,

            h = i.length,

            d = h - 1,

            p = n[0],

            f = y(p);

        if (f || (1 < h && "string" == typeof p && !g.checkClone && ai.test(p)))

            return i.each(function (t) {

                var e = i.eq(t);

                f && (n[0] = p.call(this, t, e.html())), kt(e, n, o, r);

            });

        if (h && ((e = (t = yt(n, i[0].ownerDocument, !1, i, r)).firstChild), 1 === t.childNodes.length && (t = e), e || r)) {

            for (a = (s = S.map(m(t, "script"), Tt)).length; u < h; u++) (l = t), u !== d && ((l = S.clone(l, !0, !0)), a) && S.merge(s, m(l, "script")), o.call(i[u], l, u);

            if (a)

                for (c = s[s.length - 1].ownerDocument, S.map(s, Et), u = 0; u < a; u++)

                    (l = s[u]),

                        ni.test(l.type || "") &&

                            !v.access(l, "globalEval") &&

                            S.contains(c, l) &&

                            (l.src && "module" !== (l.type || "").toLowerCase() ? S._evalUrl && !l.noModule && S._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }, c) : N(l.textContent.replace(li, ""), l, c));

        }

        return i;

    }

    function At(t, e, i) {

        for (var n, o = e ? S.filter(e, t) : t, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || S.cleanData(m(n)), n.parentNode && (i && Ke(n) && vt(m(n, "script")), n.parentNode.removeChild(n));

        return t;

    }

    function It(t) {

        var e = t.ownerDocument.defaultView;

        return (e = e && e.opener ? e : x).getComputedStyle(t);

    }

    function Ot(t, e, i) {

        var n,

            o = {};

        for (n in e) (o[n] = t.style[n]), (t.style[n] = e[n]);

        for (n in ((i = i.call(t)), e)) t.style[n] = o[n];

        return i;

    }

    function jt(t, e, i) {

        var n,

            o = gi.test(e),

            r = t.style;

        return (

            (i = i || It(t)) &&

                ((n = i.getPropertyValue(e) || i[e]), "" !== (n = o ? n && (n.replace(ce, "$1") || void 0) : n) || Ke(t) || (n = S.style(t, e)), !g.pixelBoxStyles()) &&

                mi.test(n) &&

                vi.test(e) &&

                ((o = r.width), (t = r.minWidth), (e = r.maxWidth), (r.minWidth = r.maxWidth = r.width = n), (n = i.width), (r.width = o), (r.minWidth = t), (r.maxWidth = e)),

            void 0 !== n ? n + "" : n

        );

    }

    function Lt(t, e) {

        return {

            get: function () {

                if (!t()) return (this.get = e).apply(this, arguments);

                delete this.get;

            },

        };

    }

    function Dt() {

        var t;

        M &&

            ((yi.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),

            (M.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),

            Ze.appendChild(yi).appendChild(M),

            (t = x.getComputedStyle(M)),

            (ci = "1%" !== t.top),

            (fi = 12 === Pt(t.marginLeft)),

            (M.style.right = "60%"),

            (di = 36 === Pt(t.right)),

            (ui = 36 === Pt(t.width)),

            (M.style.position = "absolute"),

            (hi = 12 === Pt(M.offsetWidth / 3)),

            Ze.removeChild(yi),

            (M = null));

    }

    function Pt(t) {

        return Math.round(parseFloat(t));

    }

    function Mt(t) {

        return (

            S.cssProps[t] ||

            wi[t] ||

            (t in _i

                ? t

                : (wi[t] =

                      (function (t) {

                          for (var e = t[0].toUpperCase() + t.slice(1), i = bi.length; i--; ) if ((t = bi[i] + e) in _i) return t;

                      })(t) || t))

        );

    }

    function zt(t, e, i) {

        var n = Xe.exec(e);

        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e;

    }

    function Rt(t, e, i, n, o, r) {

        var s = "width" === e ? 1 : 0,

            a = 0,

            l = 0,

            c = 0;

        if (i === (n ? "border" : "content")) return 0;

        for (; s < 4; s += 2)

            "margin" === i && (c += S.css(t, i + Ge[s], !0, o)),

                n

                    ? ("content" === i && (l -= S.css(t, "padding" + Ge[s], !0, o)), "margin" !== i && (l -= S.css(t, "border" + Ge[s] + "Width", !0, o)))

                    : ((l += S.css(t, "padding" + Ge[s], !0, o)), "padding" !== i ? (l += S.css(t, "border" + Ge[s] + "Width", !0, o)) : (a += S.css(t, "border" + Ge[s] + "Width", !0, o)));

        return !n && 0 <= r && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - 0.5)) || 0), l + c;

    }

    function Nt(t, e, i) {

        var n = It(t),

            o = (!g.boxSizingReliable() || i) && "border-box" === S.css(t, "boxSizing", !1, n),

            r = o,

            s = jt(t, e, n),

            a = "offset" + e[0].toUpperCase() + e.slice(1);

        if (mi.test(s)) {

            if (!i) return s;

            s = "auto";

        }

        return (

            ((!g.boxSizingReliable() && o) || (!g.reliableTrDimensions() && b(t, "tr")) || "auto" === s || (!parseFloat(s) && "inline" === S.css(t, "display", !1, n))) &&

                t.getClientRects().length &&

                ((o = "border-box" === S.css(t, "boxSizing", !1, n)), (r = a in t)) &&

                (s = t[a]),

            (s = parseFloat(s) || 0) + Rt(t, e, i || (o ? "border" : "content"), r, n, s) + "px"

        );

    }

    function r(t, e, i, n, o) {

        return new r.prototype.init(t, e, i, n, o);

    }

    function qt() {

        Si && (!1 === E.hidden && x.requestAnimationFrame ? x.requestAnimationFrame(qt) : x.setTimeout(qt, S.fx.interval), S.fx.tick());

    }

    function Ht() {

        return (

            x.setTimeout(function () {

                Ei = void 0;

            }),

            (Ei = Date.now())

        );

    }

    function Ft(t, e) {

        var i,

            n = 0,

            o = { height: t };

        for (e = e ? 1 : 0; n < 4; n += 2 - e) o["margin" + (i = Ge[n])] = o["padding" + i] = t;

        return e && (o.opacity = o.width = t), o;

    }

    function Wt(t, e, i) {

        for (var n, o = (C.tweeners[e] || []).concat(C.tweeners["*"]), r = 0, s = o.length; r < s; r++) if ((n = o[r].call(i, e, t))) return n;

    }

    function C(o, t, e) {

        var i,

            r,

            n,

            s,

            a,

            l,

            c,

            u = 0,

            h = C.prefilters.length,

            d = S.Deferred().always(function () {

                delete p.elem;

            }),

            p = function () {

                if (r) return !1;

                for (var t = Ei || Ht(), e = 1 - ((t = Math.max(0, f.startTime + f.duration - t)) / f.duration || 0), i = 0, n = f.tweens.length; i < n; i++) f.tweens[i].run(e);

                return d.notifyWith(o, [f, e, t]), e < 1 && n ? t : (n || d.notifyWith(o, [f, 1, 0]), d.resolveWith(o, [f]), !1);

            },

            f = d.promise({

                elem: o,

                props: S.extend({}, t),

                opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, e),

                originalProperties: t,

                originalOptions: e,

                startTime: Ei || Ht(),

                duration: e.duration,

                tweens: [],

                createTween: function (t, e) {

                    return (e = S.Tween(o, f.opts, t, e, f.opts.specialEasing[t] || f.opts.easing)), f.tweens.push(e), e;

                },

                stop: function (t) {

                    var e = 0,

                        i = t ? f.tweens.length : 0;

                    if (!r) {

                        for (r = !0; e < i; e++) f.tweens[e].run(1);

                        t ? (d.notifyWith(o, [f, 1, 0]), d.resolveWith(o, [f, t])) : d.rejectWith(o, [f, t]);

                    }

                    return this;

                },

            }),

            m = f.props,

            g = m,

            v = f.opts.specialEasing;

        for (n in g)

            if (((a = v[(s = w(n))]), (l = g[n]), Array.isArray(l) && ((a = l[1]), (l = g[n] = l[0])), n !== s && ((g[s] = l), delete g[n]), (c = S.cssHooks[s]) && "expand" in c))

                for (n in ((l = c.expand(l)), delete g[s], l)) n in g || ((g[n] = l[n]), (v[n] = a));

            else v[s] = a;

        for (; u < h; u++) if ((i = C.prefilters[u].call(f, o, m, f.opts))) return y(i.stop) && (S._queueHooks(f.elem, f.opts.queue).stop = i.stop.bind(i)), i;

        return (

            S.map(m, Wt, f),

            y(f.opts.start) && f.opts.start.call(o, f),

            f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always),

            S.fx.timer(S.extend(p, { elem: o, anim: f, queue: f.opts.queue })),

            f

        );

    }

    function $t(t) {

        return (t.match(D) || []).join(" ");

    }

    function Bt(t) {

        return (t.getAttribute && t.getAttribute("class")) || "";

    }

    function Qt(t) {

        return Array.isArray(t) ? t : ("string" == typeof t && t.match(D)) || [];

    }

    function Vt(t) {

        t.stopPropagation();

    }

    function Ut(r) {

        return function (t, e) {

            "string" != typeof t && ((e = t), (t = "*"));

            var i,

                n = 0,

                o = t.toLowerCase().match(D) || [];

            if (y(e)) for (; (i = o[n++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (r[i] = r[i] || []).unshift(e)) : (r[i] = r[i] || []).push(e);

        };

    }

    function Yt(e, n, o, r) {

        function s(t) {

            var i;

            return (

                (a[t] = !0),

                S.each(e[t] || [], function (t, e) {

                    return "string" != typeof (e = e(n, o, r)) || l || a[e] ? (l ? !(i = e) : void 0) : (n.dataTypes.unshift(e), s(e), !1);

                }),

                i

            );

        }

        var a = {},

            l = e === Xi;

        return s(n.dataTypes[0]) || (!a["*"] && s("*"));

    }

    function Xt(t, e) {

        var i,

            n,

            o = S.ajaxSettings.flatOptions || {};

        for (i in e) void 0 !== e[i] && ((o[i] ? t : (n = n || {}))[i] = e[i]);

        return n && S.extend(!0, t, n), t;

    }

    var e = [],

        Gt = Object.getPrototypeOf,

        a = e.slice,

        Zt = e.flat

            ? function (t) {

                  return e.flat.call(t);

              }

            : function (t) {

                  return e.concat.apply([], t);

              },

        Kt = e.push,

        T = e.indexOf,

        Jt = {},

        te = Jt.toString,

        ee = Jt.hasOwnProperty,

        ie = ee.toString,

        ne = ie.call(Object),

        g = {},

        E = x.document,

        oe = { type: !0, src: !0, nonce: !0, noModule: !0 },

        t = "3.7.1",

        re = /HTML$/i,

        S = function (t, e) {

            return new S.fn.init(t, e);

        },

        se =

            ((S.fn = S.prototype = {

                jquery: "3.7.1",

                constructor: S,

                length: 0,

                toArray: function () {

                    return a.call(this);

                },

                get: function (t) {

                    return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t];

                },

                pushStack: function (t) {

                    return ((t = S.merge(this.constructor(), t)).prevObject = this), t;

                },

                each: function (t) {

                    return S.each(this, t);

                },

                map: function (i) {

                    return this.pushStack(

                        S.map(this, function (t, e) {

                            return i.call(t, e, t);

                        })

                    );

                },

                slice: function () {

                    return this.pushStack(a.apply(this, arguments));

                },

                first: function () {

                    return this.eq(0);

                },

                last: function () {

                    return this.eq(-1);

                },

                even: function () {

                    return this.pushStack(

                        S.grep(this, function (t, e) {

                            return (e + 1) % 2;

                        })

                    );

                },

                odd: function () {

                    return this.pushStack(

                        S.grep(this, function (t, e) {

                            return e % 2;

                        })

                    );

                },

                eq: function (t) {

                    var e = this.length;

                    return this.pushStack(0 <= (t = +t + (t < 0 ? e : 0)) && t < e ? [this[t]] : []);

                },

                end: function () {

                    return this.prevObject || this.constructor();

                },

                push: Kt,

                sort: e.sort,

                splice: e.splice,

            }),

            (S.extend = S.fn.extend = function () {

                var t,

                    e,

                    i,

                    n,

                    o,

                    r = arguments[0] || {},

                    s = 1,

                    a = arguments.length,

                    l = !1;

                for ("boolean" == typeof r && ((l = r), (r = arguments[s] || {}), s++), "object" == typeof r || y(r) || (r = {}), s === a && ((r = this), s--); s < a; s++)

                    if (null != (t = arguments[s]))

                        for (e in t)

                            (i = t[e]),

                                "__proto__" !== e &&

                                    r !== i &&

                                    (l && i && (S.isPlainObject(i) || (n = Array.isArray(i)))

                                        ? ((o = r[e]), (o = n && !Array.isArray(o) ? [] : n || S.isPlainObject(o) ? o : {}), (n = !1), (r[e] = S.extend(l, o, i)))

                                        : void 0 !== i && (r[e] = i));

                return r;

            }),

            S.extend({

                expando: "jQuery" + ("3.7.1" + Math.random()).replace(/\D/g, ""),

                isReady: !0,

                error: function (t) {

                    throw new Error(t);

                },

                noop: function () {},

                isPlainObject: function (t) {

                    return !(!t || "[object Object]" !== te.call(t) || ((t = Gt(t)) && ("function" != typeof (t = ee.call(t, "constructor") && t.constructor) || ie.call(t) !== ne)));

                },

                isEmptyObject: function (t) {

                    for (var e in t) return !1;

                    return !0;

                },

                globalEval: function (t, e, i) {

                    N(t, { nonce: e && e.nonce }, i);

                },

                each: function (t, e) {

                    var i,

                        n = 0;

                    if (H(t)) for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);

                    else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;

                    return t;

                },

                text: function (t) {

                    var e,

                        i = "",

                        n = 0,

                        o = t.nodeType;

                    if (!o) for (; (e = t[n++]); ) i += S.text(e);

                    return 1 === o || 11 === o ? t.textContent : 9 === o ? t.documentElement.textContent : 3 === o || 4 === o ? t.nodeValue : i;

                },

                makeArray: function (t, e) {

                    return (e = e || []), null != t && (H(Object(t)) ? S.merge(e, "string" == typeof t ? [t] : t) : Kt.call(e, t)), e;

                },

                inArray: function (t, e, i) {

                    return null == e ? -1 : T.call(e, t, i);

                },

                isXMLDoc: function (t) {

                    var e = t && t.namespaceURI;

                    return (t = t && (t.ownerDocument || t).documentElement), !re.test(e || (t && t.nodeName) || "HTML");

                },

                merge: function (t, e) {

                    for (var i = +e.length, n = 0, o = t.length; n < i; n++) t[o++] = e[n];

                    return (t.length = o), t;

                },

                grep: function (t, e, i) {

                    for (var n = [], o = 0, r = t.length, s = !i; o < r; o++) !e(t[o], o) != s && n.push(t[o]);

                    return n;

                },

                map: function (t, e, i) {

                    var n,

                        o,

                        r = 0,

                        s = [];

                    if (H(t)) for (n = t.length; r < n; r++) null != (o = e(t[r], r, i)) && s.push(o);

                    else for (r in t) null != (o = e(t[r], r, i)) && s.push(o);

                    return Zt(s);

                },

                guid: 1,

                support: g,

            }),

            "function" == typeof Symbol && (S.fn[Symbol.iterator] = e[Symbol.iterator]),

            S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {

                Jt["[object " + e + "]"] = e.toLowerCase();

            }),

            e.pop),

        ae = e.sort,

        le = e.splice,

        i = "[\\x20\\t\\r\\n\\f]",

        ce = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"),

        ue =

            ((S.contains = function (t, e) {

                return t === (e = e && e.parentNode) || !(!e || 1 !== e.nodeType || !(t.contains ? t.contains(e) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(e)));

            }),

            /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g);

    S.escapeSelector = function (t) {

        return (t + "").replace(ue, F);

    };

    var he,

        k,

        de,

        pe,

        fe,

        A,

        n,

        I,

        p,

        me,

        o = E,

        ge = Kt,

        O = ge,

        j = S.expando,

        L = 0,

        ve = 0,

        ye = W(),

        be = W(),

        _e = W(),

        we = W(),

        xe = function (t, e) {

            return t === e && (fe = !0), 0;

        },

        Ce = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

        s = "\\[" + i + "*(" + (t = "(?:\\\\[\\da-fA-F]{1,6}" + i + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+") + ")(?:" + i + "*([*^$|!~]?=)" + i + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + i + "*\\]",

        l = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + s + ")*)|.*)\\)|)",

        Te = new RegExp(i + "+", "g"),

        Ee = new RegExp("^" + i + "*," + i + "*"),

        Se = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"),

        ke = new RegExp(i + "|>"),

        Ae = new RegExp(l),

        Ie = new RegExp("^" + t + "$"),

        Oe = {

            ID: new RegExp("^#(" + t + ")"),

            CLASS: new RegExp("^\\.(" + t + ")"),

            TAG: new RegExp("^(" + t + "|[*])"),

            ATTR: new RegExp("^" + s),

            PSEUDO: new RegExp("^" + l),

            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)", "i"),

            bool: new RegExp("^(?:" + Ce + ")$", "i"),

            needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)", "i"),

        },

        je = /^(?:input|select|textarea|button)$/i,

        Le = /^h\d$/i,

        De = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

        Pe = /[+~]/,

        h = new RegExp("\\\\[\\da-fA-F]{1,6}" + i + "?|\\\\([^\\r\\n\\f])", "g"),

        f = function (t, e) {

            return (t = "0x" + t.slice(1) - 65536), e || (t < 0 ? String.fromCharCode(65536 + t) : String.fromCharCode((t >> 10) | 55296, (1023 & t) | 56320));

        },

        Me = function () {

            U();

        },

        ze = Z(

            function (t) {

                return !0 === t.disabled && b(t, "fieldset");

            },

            { dir: "parentNode", next: "legend" }

        );

    try {

        O.apply((e = a.call(o.childNodes)), o.childNodes), e[o.childNodes.length].nodeType;

    } catch (he) {

        O = {

            apply: function (t, e) {

                ge.apply(t, a.call(e));

            },

            call: function (t) {

                ge.apply(t, a.call(arguments, 1));

            },

        };

    }

    for (he in ((_.matches = function (t, e) {

        return _(t, null, null, e);

    }),

    (_.matchesSelector = function (t, e) {

        if ((U(t), I && !we[e + " "] && (!p || !p.test(e))))

            try {

                var i = me.call(t, e);

                if (i || g.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return i;

            } catch (t) {

                we(e, !0);

            }

        return 0 < _(e, A, null, [t]).length;

    }),

    (_.contains = function (t, e) {

        return (t.ownerDocument || t) != A && U(t), S.contains(t, e);

    }),

    (_.attr = function (t, e) {

        (t.ownerDocument || t) != A && U(t);

        var i = k.attrHandle[e.toLowerCase()];

        return void 0 !== (i = i && ee.call(k.attrHandle, e.toLowerCase()) ? i(t, e, !I) : void 0) ? i : t.getAttribute(e);

    }),

    (_.error = function (t) {

        throw new Error("Syntax error, unrecognized expression: " + t);

    }),

    (S.uniqueSort = function (t) {

        var e,

            i = [],

            n = 0,

            o = 0;

        if (((fe = !g.sortStable), (pe = !g.sortStable && a.call(t, 0)), ae.call(t, xe), fe)) {

            for (; (e = t[o++]); ) e === t[o] && (n = i.push(o));

            for (; n--; ) le.call(t, i[n], 1);

        }

        return (pe = null), t;

    }),

    (S.fn.uniqueSort = function () {

        return this.pushStack(S.uniqueSort(a.apply(this)));

    }),

    ((k = S.expr = {

        cacheLength: 50,

        createPseudo: d,

        match: Oe,

        attrHandle: {},

        find: {},

        relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },

        preFilter: {

            ATTR: function (t) {

                return (t[1] = t[1].replace(h, f)), (t[3] = (t[3] || t[4] || t[5] || "").replace(h, f)), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);

            },

            CHILD: function (t) {

                return (

                    (t[1] = t[1].toLowerCase()),

                    "nth" === t[1].slice(0, 3) ? (t[3] || _.error(t[0]), (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3]))), (t[5] = +(t[7] + t[8] || "odd" === t[3]))) : t[3] && _.error(t[0]),

                    t

                );

            },

            PSEUDO: function (t) {

                var e,

                    i = !t[6] && t[2];

                return Oe.CHILD.test(t[0])

                    ? null

                    : (t[3] ? (t[2] = t[4] || t[5] || "") : i && Ae.test(i) && (e = (e = X(i, !0)) && i.indexOf(")", i.length - e) - i.length) && ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))), t.slice(0, 3));

            },

        },

        filter: {

            TAG: function (t) {

                var e = t.replace(h, f).toLowerCase();

                return "*" === t

                    ? function () {

                          return !0;

                      }

                    : function (t) {

                          return b(t, e);

                      };

            },

            CLASS: function (t) {

                var e = ye[t + " "];

                return (

                    e ||

                    ((e = new RegExp("(^|" + i + ")" + t + "(" + i + "|$)")) &&

                        ye(t, function (t) {

                            return e.test(("string" == typeof t.className && t.className) || (void 0 !== t.getAttribute && t.getAttribute("class")) || "");

                        }))

                );

            },

            ATTR: function (e, i, n) {

                return function (t) {

                    return null == (t = _.attr(t, e))

                        ? "!=" === i

                        : !i ||

                              ((t += ""),

                              "=" === i

                                  ? t === n

                                  : "!=" === i

                                  ? t !== n

                                  : "^=" === i

                                  ? n && 0 === t.indexOf(n)

                                  : "*=" === i

                                  ? n && -1 < t.indexOf(n)

                                  : "$=" === i

                                  ? n && t.slice(-n.length) === n

                                  : "~=" === i

                                  ? -1 < (" " + t.replace(Te, " ") + " ").indexOf(n)

                                  : "|=" === i && (t === n || t.slice(0, n.length + 1) === n + "-"));

                };

            },

            CHILD: function (p, t, e, f, m) {

                var g = "nth" !== p.slice(0, 3),

                    v = "last" !== p.slice(-4),

                    y = "of-type" === t;

                return 1 === f && 0 === m

                    ? function (t) {

                          return !!t.parentNode;

                      }

                    : function (t, e, i) {

                          var n,

                              o,

                              r,

                              s,

                              a,

                              l = g != v ? "nextSibling" : "previousSibling",

                              c = t.parentNode,

                              u = y && t.nodeName.toLowerCase(),

                              h = !i && !y,

                              d = !1;

                          if (c) {

                              if (g) {

                                  for (; l; ) {

                                      for (r = t; (r = r[l]); ) if (y ? b(r, u) : 1 === r.nodeType) return !1;

                                      a = l = "only" === p && !a && "nextSibling";

                                  }

                                  return !0;

                              }

                              if (((a = [v ? c.firstChild : c.lastChild]), v && h)) {

                                  for (d = (s = (n = (o = c[j] || (c[j] = {}))[p] || [])[0] === L && n[1]) && n[2], r = s && c.childNodes[s]; (r = (++s && r && r[l]) || ((d = s = 0), a.pop())); )

                                      if (1 === r.nodeType && ++d && r === t) {

                                          o[p] = [L, s, d];

                                          break;

                                      }

                              } else if (!1 === (d = h ? (s = (n = (o = t[j] || (t[j] = {}))[p] || [])[0] === L && n[1]) : d))

                                  for (; (r = (++s && r && r[l]) || ((d = s = 0), a.pop())) && ((y ? !b(r, u) : 1 !== r.nodeType) || !++d || (h && ((o = r[j] || (r[j] = {}))[p] = [L, d]), r !== t)); );

                              return (d -= m) === f || (d % f == 0 && 0 <= d / f);

                          }

                      };

            },

            PSEUDO: function (t, r) {

                var e,

                    s = k.pseudos[t] || k.setFilters[t.toLowerCase()] || _.error("unsupported pseudo: " + t);

                return s[j]

                    ? s(r)

                    : 1 < s.length

                    ? ((e = [t, t, "", r]),

                      k.setFilters.hasOwnProperty(t.toLowerCase())

                          ? d(function (t, e) {

                                for (var i, n = s(t, r), o = n.length; o--; ) t[(i = T.call(t, n[o]))] = !(e[i] = n[o]);

                            })

                          : function (t) {

                                return s(t, 0, e);

                            })

                    : s;

            },

        },

        pseudos: {

            not: d(function (t) {

                var n = [],

                    o = [],

                    a = tt(t.replace(ce, "$1"));

                return a[j]

                    ? d(function (t, e, i, n) {

                          for (var o, r = a(t, null, n, []), s = t.length; s--; ) (o = r[s]) && (t[s] = !(e[s] = o));

                      })

                    : function (t, e, i) {

                          return (n[0] = t), a(n, null, i, o), (n[0] = null), !o.pop();

                      };

            }),

            has: d(function (e) {

                return function (t) {

                    return 0 < _(e, t).length;

                };

            }),

            contains: d(function (e) {

                return (

                    (e = e.replace(h, f)),

                    function (t) {

                        return -1 < (t.textContent || S.text(t)).indexOf(e);

                    }

                );

            }),

            lang: d(function (i) {

                return (

                    Ie.test(i || "") || _.error("unsupported lang: " + i),

                    (i = i.replace(h, f).toLowerCase()),

                    function (t) {

                        var e;

                        do {

                            if ((e = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-");

                        } while ((t = t.parentNode) && 1 === t.nodeType);

                        return !1;

                    }

                );

            }),

            target: function (t) {

                var e = x.location && x.location.hash;

                return e && e.slice(1) === t.id;

            },

            root: function (t) {

                return t === n;

            },

            focus: function (t) {

                return (

                    t ===

                        (function () {

                            try {

                                return A.activeElement;

                            } catch (t) {}

                        })() &&

                    A.hasFocus() &&

                    !!(t.type || t.href || ~t.tabIndex)

                );

            },

            enabled: B(!1),

            disabled: B(!0),

            checked: function (t) {

                return (b(t, "input") && !!t.checked) || (b(t, "option") && !!t.selected);

            },

            selected: function (t) {

                return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;

            },

            empty: function (t) {

                for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;

                return !0;

            },

            parent: function (t) {

                return !k.pseudos.empty(t);

            },

            header: function (t) {

                return Le.test(t.nodeName);

            },

            input: function (t) {

                return je.test(t.nodeName);

            },

            button: function (t) {

                return (b(t, "input") && "button" === t.type) || b(t, "button");

            },

            text: function (t) {

                return b(t, "input") && "text" === t.type && (null == (t = t.getAttribute("type")) || "text" === t.toLowerCase());

            },

            first: Q(function () {

                return [0];

            }),

            last: Q(function (t, e) {

                return [e - 1];

            }),

            eq: Q(function (t, e, i) {

                return [i < 0 ? i + e : i];

            }),

            even: Q(function (t, e) {

                for (var i = 0; i < e; i += 2) t.push(i);

                return t;

            }),

            odd: Q(function (t, e) {

                for (var i = 1; i < e; i += 2) t.push(i);

                return t;

            }),

            lt: Q(function (t, e, i) {

                for (var n = i < 0 ? i + e : e < i ? e : i; 0 <= --n; ) t.push(n);

                return t;

            }),

            gt: Q(function (t, e, i) {

                for (var n = i < 0 ? i + e : i; ++n < e; ) t.push(n);

                return t;

            }),

        },

    }).pseudos.nth = k.pseudos.eq),

    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))

        k.pseudos[he] = (function (e) {

            return function (t) {

                return b(t, "input") && t.type === e;

            };

        })(he);

    for (he in { submit: !0, reset: !0 })

        k.pseudos[he] = (function (e) {

            return function (t) {

                return (b(t, "input") || b(t, "button")) && t.type === e;

            };

        })(he);

    (Y.prototype = k.filters = k.pseudos),

        (k.setFilters = new Y()),

        (g.sortStable = j.split("").sort(xe).join("") === j),

        U(),

        (g.sortDetached = $(function (t) {

            return 1 & t.compareDocumentPosition(A.createElement("fieldset"));

        })),

        (S.find = _),

        (S.expr[":"] = S.expr.pseudos),

        (S.unique = S.uniqueSort),

        (_.compile = tt),

        (_.select = et),

        (_.setDocument = U),

        (_.tokenize = X),

        (_.escape = S.escapeSelector),

        (_.getText = S.text),

        (_.isXML = S.isXMLDoc),

        (_.selectors = S.expr),

        (_.support = S.support),

        (_.uniqueSort = S.uniqueSort);

    var Re = S.expr.match.needsContext,

        Ne = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    (S.filter = function (t, e, i) {

        var n = e[0];

        return (

            i && (t = ":not(" + t + ")"),

            1 === e.length && 1 === n.nodeType

                ? S.find.matchesSelector(n, t)

                    ? [n]

                    : []

                : S.find.matches(

                      t,

                      S.grep(e, function (t) {

                          return 1 === t.nodeType;

                      })

                  )

        );

    }),

        S.fn.extend({

            find: function (t) {

                var e,

                    i,

                    n = this.length,

                    o = this;

                if ("string" != typeof t)

                    return this.pushStack(

                        S(t).filter(function () {

                            for (e = 0; e < n; e++) if (S.contains(o[e], this)) return !0;

                        })

                    );

                for (i = this.pushStack([]), e = 0; e < n; e++) S.find(t, o[e], i);

                return 1 < n ? S.uniqueSort(i) : i;

            },

            filter: function (t) {

                return this.pushStack(ot(this, t || [], !1));

            },

            not: function (t) {

                return this.pushStack(ot(this, t || [], !0));

            },

            is: function (t) {

                return !!ot(this, "string" == typeof t && Re.test(t) ? S(t) : t || [], !1).length;

            },

        });

    var qe,

        He = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

        Fe =

            (((S.fn.init = function (t, e, i) {

                if (t) {

                    if (((i = i || qe), "string" != typeof t)) return t.nodeType ? ((this[0] = t), (this.length = 1), this) : y(t) ? (void 0 !== i.ready ? i.ready(t) : t(S)) : S.makeArray(t, this);

                    if (!(n = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : He.exec(t)) || (!n[1] && e)) return (!e || e.jquery ? e || i : this.constructor(e)).find(t);

                    if (n[1]) {

                        if (((e = e instanceof S ? e[0] : e), S.merge(this, S.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : E, !0)), Ne.test(n[1]) && S.isPlainObject(e)))

                            for (var n in e) y(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);

                    } else (i = E.getElementById(n[2])) && ((this[0] = i), (this.length = 1));

                }

                return this;

            }).prototype = S.fn),

            (qe = S(E)),

            /^(?:parents|prev(?:Until|All))/),

        We = { children: !0, contents: !0, next: !0, prev: !0 },

        D =

            (S.fn.extend({

                has: function (t) {

                    var e = S(t, this),

                        i = e.length;

                    return this.filter(function () {

                        for (var t = 0; t < i; t++) if (S.contains(this, e[t])) return !0;

                    });

                },

                closest: function (t, e) {

                    var i,

                        n = 0,

                        o = this.length,

                        r = [],

                        s = "string" != typeof t && S(t);

                    if (!Re.test(t))

                        for (; n < o; n++)

                            for (i = this[n]; i && i !== e; i = i.parentNode)

                                if (i.nodeType < 11 && (s ? -1 < s.index(i) : 1 === i.nodeType && S.find.matchesSelector(i, t))) {

                                    r.push(i);

                                    break;

                                }

                    return this.pushStack(1 < r.length ? S.uniqueSort(r) : r);

                },

                index: function (t) {

                    return t ? ("string" == typeof t ? T.call(S(t), this[0]) : T.call(this, t.jquery ? t[0] : t)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;

                },

                add: function (t, e) {

                    return this.pushStack(S.uniqueSort(S.merge(this.get(), S(t, e))));

                },

                addBack: function (t) {

                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t));

                },

            }),

            S.each(

                {

                    parent: function (t) {

                        return (t = t.parentNode) && 11 !== t.nodeType ? t : null;

                    },

                    parents: function (t) {

                        return it(t, "parentNode");

                    },

                    parentsUntil: function (t, e, i) {

                        return it(t, "parentNode", i);

                    },

                    next: function (t) {

                        return rt(t, "nextSibling");

                    },

                    prev: function (t) {

                        return rt(t, "previousSibling");

                    },

                    nextAll: function (t) {

                        return it(t, "nextSibling");

                    },

                    prevAll: function (t) {

                        return it(t, "previousSibling");

                    },

                    nextUntil: function (t, e, i) {

                        return it(t, "nextSibling", i);

                    },

                    prevUntil: function (t, e, i) {

                        return it(t, "previousSibling", i);

                    },

                    siblings: function (t) {

                        return nt((t.parentNode || {}).firstChild, t);

                    },

                    children: function (t) {

                        return nt(t.firstChild);

                    },

                    contents: function (t) {

                        return null != t.contentDocument && Gt(t.contentDocument) ? t.contentDocument : (b(t, "template") && (t = t.content || t), S.merge([], t.childNodes));

                    },

                },

                function (n, o) {

                    S.fn[n] = function (t, e) {

                        var i = S.map(this, o, t);

                        return (e = "Until" !== n.slice(-5) ? t : e) && "string" == typeof e && (i = S.filter(e, i)), 1 < this.length && (We[n] || S.uniqueSort(i), Fe.test(n)) && i.reverse(), this.pushStack(i);

                    };

                }

            ),

            /[^\x20\t\r\n\f]+/g),

        $e =

            ((S.Callbacks = function (n) {

                function i() {

                    for (a = a || n.once, s = r = !0; c.length; u = -1) for (e = c.shift(); ++u < l.length; ) !1 === l[u].apply(e[0], e[1]) && n.stopOnFalse && ((u = l.length), (e = !1));

                    n.memory || (e = !1), (r = !1), a && (l = e ? [] : "");

                }

                var t, o;

                n =

                    "string" == typeof n

                        ? ((t = n),

                          (o = {}),

                          S.each(t.match(D) || [], function (t, e) {

                              o[e] = !0;

                          }),

                          o)

                        : S.extend({}, n);

                var r,

                    e,

                    s,

                    a,

                    l = [],

                    c = [],

                    u = -1,

                    h = {

                        add: function () {

                            return (

                                l &&

                                    (e && !r && ((u = l.length - 1), c.push(e)),

                                    (function i(t) {

                                        S.each(t, function (t, e) {

                                            y(e) ? (n.unique && h.has(e)) || l.push(e) : e && e.length && "string" !== q(e) && i(e);

                                        });

                                    })(arguments),

                                    e) &&

                                    !r &&

                                    i(),

                                this

                            );

                        },

                        remove: function () {

                            return (

                                S.each(arguments, function (t, e) {

                                    for (var i; -1 < (i = S.inArray(e, l, i)); ) l.splice(i, 1), i <= u && u--;

                                }),

                                this

                            );

                        },

                        has: function (t) {

                            return t ? -1 < S.inArray(t, l) : 0 < l.length;

                        },

                        empty: function () {

                            return (l = l && []), this;

                        },

                        disable: function () {

                            return (a = c = []), (l = e = ""), this;

                        },

                        disabled: function () {

                            return !l;

                        },

                        lock: function () {

                            return (a = c = []), e || r || (l = e = ""), this;

                        },

                        locked: function () {

                            return !!a;

                        },

                        fireWith: function (t, e) {

                            return a || ((e = [t, (e = e || []).slice ? e.slice() : e]), c.push(e), r) || i(), this;

                        },

                        fire: function () {

                            return h.fireWith(this, arguments), this;

                        },

                        fired: function () {

                            return !!s;

                        },

                    };

                return h;

            }),

            S.extend({

                Deferred: function (t) {

                    var r = [

                            ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],

                            ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],

                            ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"],

                        ],

                        o = "pending",

                        s = {

                            state: function () {

                                return o;

                            },

                            always: function () {

                                return a.done(arguments).fail(arguments), this;

                            },

                            catch: function (t) {

                                return s.then(null, t);

                            },

                            pipe: function () {

                                var o = arguments;

                                return S.Deferred(function (n) {

                                    S.each(r, function (t, e) {

                                        var i = y(o[e[4]]) && o[e[4]];

                                        a[e[1]](function () {

                                            var t = i && i.apply(this, arguments);

                                            t && y(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[e[0] + "With"](this, i ? [t] : arguments);

                                        });

                                    }),

                                        (o = null);

                                }).promise();

                            },

                            then: function (e, i, n) {

                                function l(o, r, s, a) {

                                    return function () {

                                        function t() {

                                            var t, e;

                                            if (!(o < c)) {

                                                if ((t = s.apply(i, n)) === r.promise()) throw new TypeError("Thenable self-resolution");

                                                y((e = t && ("object" == typeof t || "function" == typeof t) && t.then))

                                                    ? a

                                                        ? e.call(t, l(c, r, st, a), l(c, r, at, a))

                                                        : (c++, e.call(t, l(c, r, st, a), l(c, r, at, a), l(c, r, st, r.notifyWith)))

                                                    : (s !== st && ((i = void 0), (n = [t])), (a || r.resolveWith)(i, n));

                                            }

                                        }

                                        var i = this,

                                            n = arguments,

                                            e = a

                                                ? t

                                                : function () {

                                                      try {

                                                          t();

                                                      } catch (t) {

                                                          S.Deferred.exceptionHook && S.Deferred.exceptionHook(t, e.error), c <= o + 1 && (s !== at && ((i = void 0), (n = [t])), r.rejectWith(i, n));

                                                      }

                                                  };

                                        o ? e() : (S.Deferred.getErrorHook ? (e.error = S.Deferred.getErrorHook()) : S.Deferred.getStackHook && (e.error = S.Deferred.getStackHook()), x.setTimeout(e));

                                    };

                                }

                                var c = 0;

                                return S.Deferred(function (t) {

                                    r[0][3].add(l(0, t, y(n) ? n : st, t.notifyWith)), r[1][3].add(l(0, t, y(e) ? e : st)), r[2][3].add(l(0, t, y(i) ? i : at));

                                }).promise();

                            },

                            promise: function (t) {

                                return null != t ? S.extend(t, s) : s;

                            },

                        },

                        a = {};

                    return (

                        S.each(r, function (t, e) {

                            var i = e[2],

                                n = e[5];

                            (s[e[1]] = i.add),

                                n &&

                                    i.add(

                                        function () {

                                            o = n;

                                        },

                                        r[3 - t][2].disable,

                                        r[3 - t][3].disable,

                                        r[0][2].lock,

                                        r[0][3].lock

                                    ),

                                i.add(e[3].fire),

                                (a[e[0]] = function () {

                                    return a[e[0] + "With"](this === a ? void 0 : this, arguments), this;

                                }),

                                (a[e[0] + "With"] = i.fireWith);

                        }),

                        s.promise(a),

                        t && t.call(a, a),

                        a

                    );

                },

                when: function (t) {

                    function e(e) {

                        return function (t) {

                            (o[e] = this), (r[e] = 1 < arguments.length ? a.call(arguments) : t), --i || s.resolveWith(o, r);

                        };

                    }

                    var i = arguments.length,

                        n = i,

                        o = Array(n),

                        r = a.call(arguments),

                        s = S.Deferred();

                    if (i <= 1 && (lt(t, s.done(e(n)).resolve, s.reject, !i), "pending" === s.state() || y(r[n] && r[n].then))) return s.then();

                    for (; n--; ) lt(r[n], e(n), s.reject);

                    return s.promise();

                },

            }),

            /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/),

        Be =

            ((S.Deferred.exceptionHook = function (t, e) {

                x.console && x.console.warn && t && $e.test(t.name) && x.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);

            }),

            (S.readyException = function (t) {

                x.setTimeout(function () {

                    throw t;

                });

            }),

            S.Deferred()),

        Qe =

            ((S.fn.ready = function (t) {

                return (

                    Be.then(t).catch(function (t) {

                        S.readyException(t);

                    }),

                    this

                );

            }),

            S.extend({

                isReady: !1,

                readyWait: 1,

                ready: function (t) {

                    (!0 === t ? --S.readyWait : S.isReady) || ((S.isReady = !0) !== t && 0 < --S.readyWait) || Be.resolveWith(E, [S]);

                },

            }),

            (S.ready.then = Be.then),

            "complete" === E.readyState || ("loading" !== E.readyState && !E.documentElement.doScroll) ? x.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", ct), x.addEventListener("load", ct)),

            /^-ms-/),

        Ve = /-([a-z])/g,

        v =

            ((dt.uid = 1),

            (dt.prototype = {

                cache: function (t) {

                    var e = t[this.expando];

                    return e || ((e = {}), ht(t) && (t.nodeType ? (t[this.expando] = e) : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e;

                },

                set: function (t, e, i) {

                    var n,

                        o = this.cache(t);

                    if ("string" == typeof e) o[w(e)] = i;

                    else for (n in e) o[w(n)] = e[n];

                    return o;

                },

                get: function (t, e) {

                    return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][w(e)];

                },

                access: function (t, e, i) {

                    return void 0 === e || (e && "string" == typeof e && void 0 === i) ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e);

                },

                remove: function (t, e) {

                    var i,

                        n = t[this.expando];

                    if (void 0 !== n) {

                        if (void 0 !== e) {

                            i = (e = Array.isArray(e) ? e.map(w) : (e = w(e)) in n ? [e] : e.match(D) || []).length;

                            for (; i--; ) delete n[e[i]];

                        }

                        (void 0 !== e && !S.isEmptyObject(n)) || (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);

                    }

                },

                hasData: function (t) {

                    return void 0 !== (t = t[this.expando]) && !S.isEmptyObject(t);

                },

            }),

            new dt()),

        c = new dt(),

        Ue = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,

        Ye = /[A-Z]/g,

        Xe =

            (S.extend({

                hasData: function (t) {

                    return c.hasData(t) || v.hasData(t);

                },

                data: function (t, e, i) {

                    return c.access(t, e, i);

                },

                removeData: function (t, e) {

                    c.remove(t, e);

                },

                _data: function (t, e, i) {

                    return v.access(t, e, i);

                },

                _removeData: function (t, e) {

                    v.remove(t, e);

                },

            }),

            S.fn.extend({

                data: function (i, t) {

                    var e,

                        n,

                        o,

                        r = this[0],

                        s = r && r.attributes;

                    if (void 0 !== i)

                        return "object" == typeof i

                            ? this.each(function () {

                                  c.set(this, i);

                              })

                            : u(

                                  this,

                                  function (t) {

                                      var e;

                                      if (r && void 0 === t) return void 0 !== (e = c.get(r, i)) || void 0 !== (e = pt(r, i)) ? e : void 0;

                                      this.each(function () {

                                          c.set(this, i, t);

                                      });

                                  },

                                  null,

                                  t,

                                  1 < arguments.length,

                                  null,

                                  !0

                              );

                    if (this.length && ((o = c.get(r)), 1 === r.nodeType) && !v.get(r, "hasDataAttrs")) {

                        for (e = s.length; e--; ) s[e] && 0 === (n = s[e].name).indexOf("data-") && ((n = w(n.slice(5))), pt(r, n, o[n]));

                        v.set(r, "hasDataAttrs", !0);

                    }

                    return o;

                },

                removeData: function (t) {

                    return this.each(function () {

                        c.remove(this, t);

                    });

                },

            }),

            S.extend({

                queue: function (t, e, i) {

                    var n;

                    if (t) return (n = v.get(t, (e = (e || "fx") + "queue"))), i && (!n || Array.isArray(i) ? (n = v.access(t, e, S.makeArray(i))) : n.push(i)), n || [];

                },

                dequeue: function (t, e) {

                    e = e || "fx";

                    var i = S.queue(t, e),

                        n = i.length,

                        o = i.shift(),

                        r = S._queueHooks(t, e);

                    "inprogress" === o && ((o = i.shift()), n--),

                        o &&

                            ("fx" === e && i.unshift("inprogress"),

                            delete r.stop,

                            o.call(

                                t,

                                function () {

                                    S.dequeue(t, e);

                                },

                                r

                            )),

                        !n && r && r.empty.fire();

                },

                _queueHooks: function (t, e) {

                    var i = e + "queueHooks";

                    return (

                        v.get(t, i) ||

                        v.access(t, i, {

                            empty: S.Callbacks("once memory").add(function () {

                                v.remove(t, [e + "queue", i]);

                            }),

                        })

                    );

                },

            }),

            S.fn.extend({

                queue: function (e, i) {

                    var t = 2;

                    return (

                        "string" != typeof e && ((i = e), (e = "fx"), t--),

                        arguments.length < t

                            ? S.queue(this[0], e)

                            : void 0 === i

                            ? this

                            : this.each(function () {

                                  var t = S.queue(this, e, i);

                                  S._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && S.dequeue(this, e);

                              })

                    );

                },

                dequeue: function (t) {

                    return this.each(function () {

                        S.dequeue(this, t);

                    });

                },

                clearQueue: function (t) {

                    return this.queue(t || "fx", []);

                },

                promise: function (t, e) {

                    function i() {

                        --o || r.resolveWith(s, [s]);

                    }

                    var n,

                        o = 1,

                        r = S.Deferred(),

                        s = this,

                        a = this.length;

                    for ("string" != typeof t && ((e = t), (t = void 0)), t = t || "fx"; a--; ) (n = v.get(s[a], t + "queueHooks")) && n.empty && (o++, n.empty.add(i));

                    return i(), r.promise(e);

                },

            }),

            (t = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source),

            new RegExp("^(?:([+-])=|)(" + t + ")([a-z%]*)$", "i")),

        Ge = ["Top", "Right", "Bottom", "Left"],

        Ze = E.documentElement,

        Ke = function (t) {

            return S.contains(t.ownerDocument, t);

        },

        Je = { composed: !0 },

        ti =

            (Ze.getRootNode &&

                (Ke = function (t) {

                    return S.contains(t.ownerDocument, t) || t.getRootNode(Je) === t.ownerDocument;

                }),

            {}),

        ei =

            (S.fn.extend({

                show: function () {

                    return gt(this, !0);

                },

                hide: function () {

                    return gt(this);

                },

                toggle: function (t) {

                    return "boolean" == typeof t

                        ? t

                            ? this.show()

                            : this.hide()

                        : this.each(function () {

                              ft(this) ? S(this).show() : S(this).hide();

                          });

                },

            }),

            /^(?:checkbox|radio)$/i),

        ii = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,

        ni = /^$|^module$|\/(?:java|ecma)script/i,

        P =

            ((s = E.createDocumentFragment().appendChild(E.createElement("div"))),

            (l = E.createElement("input")).setAttribute("type", "radio"),

            l.setAttribute("checked", "checked"),

            l.setAttribute("name", "t"),

            s.appendChild(l),

            (g.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked),

            (s.innerHTML = "<textarea>x</textarea>"),

            (g.noCloneChecked = !!s.cloneNode(!0).lastChild.defaultValue),

            (s.innerHTML = "<option></option>"),

            (g.option = !!s.lastChild),

            { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }),

        oi = ((P.tbody = P.tfoot = P.colgroup = P.caption = P.thead), (P.th = P.td), g.option || (P.optgroup = P.option = [1, "<select multiple='multiple'>", "</select>"]), /<|&#?\w+;/),

        ri = /^([^.]*)(?:\.(.+)|)/,

        si =

            ((S.event = {

                global: {},

                add: function (e, t, i, n, o) {

                    var r,

                        s,

                        a,

                        l,

                        c,

                        u,

                        h,

                        d,

                        p,

                        f = v.get(e);

                    if (ht(e))

                        for (

                            i.handler && ((i = (r = i).handler), (o = r.selector)),

                                o && S.find.matchesSelector(Ze, o),

                                i.guid || (i.guid = S.guid++),

                                a = (a = f.events) || (f.events = Object.create(null)),

                                s =

                                    f.handle ||

                                    (f.handle = function (t) {

                                        return void 0 !== S && S.event.triggered !== t.type ? S.event.dispatch.apply(e, arguments) : void 0;

                                    }),

                                l = (t = (t || "").match(D) || [""]).length;

                            l--;



                        )

                            (h = p = (d = ri.exec(t[l]) || [])[1]),

                                (d = (d[2] || "").split(".").sort()),

                                h &&

                                    ((c = S.event.special[h] || {}),

                                    (h = (o ? c.delegateType : c.bindType) || h),

                                    (c = S.event.special[h] || {}),

                                    (p = S.extend({ type: h, origType: p, data: n, handler: i, guid: i.guid, selector: o, needsContext: o && S.expr.match.needsContext.test(o), namespace: d.join(".") }, r)),

                                    (u = a[h]) || (((u = a[h] = []).delegateCount = 0), c.setup && !1 !== c.setup.call(e, n, d, s)) || (e.addEventListener && e.addEventListener(h, s)),

                                    c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = i.guid)),

                                    o ? u.splice(u.delegateCount++, 0, p) : u.push(p),

                                    (S.event.global[h] = !0));

                },

                remove: function (t, e, i, n, o) {

                    var r,

                        s,

                        a,

                        l,

                        c,

                        u,

                        h,

                        d,

                        p,

                        f,

                        m,

                        g = v.hasData(t) && v.get(t);

                    if (g && (l = g.events)) {

                        for (c = (e = (e || "").match(D) || [""]).length; c--; )

                            if (((p = m = (a = ri.exec(e[c]) || [])[1]), (f = (a[2] || "").split(".").sort()), p)) {

                                for (h = S.event.special[p] || {}, d = l[(p = (n ? h.delegateType : h.bindType) || p)] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = d.length; r--; )

                                    (u = d[r]),

                                        (!o && m !== u.origType) ||

                                            (i && i.guid !== u.guid) ||

                                            (a && !a.test(u.namespace)) ||

                                            (n && n !== u.selector && ("**" !== n || !u.selector)) ||

                                            (d.splice(r, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(t, u));

                                s && !d.length && ((h.teardown && !1 !== h.teardown.call(t, f, g.handle)) || S.removeEvent(t, p, g.handle), delete l[p]);

                            } else for (p in l) S.event.remove(t, p + e[c], i, n, !0);

                        S.isEmptyObject(l) && v.remove(t, "handle events");

                    }

                },

                dispatch: function (t) {

                    var e,

                        i,

                        n,

                        o,

                        r,

                        s = new Array(arguments.length),

                        a = S.event.fix(t),

                        l = ((t = (v.get(this, "events") || Object.create(null))[a.type] || []), S.event.special[a.type] || {});

                    for (s[0] = a, e = 1; e < arguments.length; e++) s[e] = arguments[e];

                    if (((a.delegateTarget = this), !l.preDispatch || !1 !== l.preDispatch.call(this, a))) {

                        for (r = S.event.handlers.call(this, a, t), e = 0; (n = r[e++]) && !a.isPropagationStopped(); )

                            for (a.currentTarget = n.elem, i = 0; (o = n.handlers[i++]) && !a.isImmediatePropagationStopped(); )

                                (a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace)) ||

                                    ((a.handleObj = o), (a.data = o.data), void 0 !== (o = ((S.event.special[o.origType] || {}).handle || o.handler).apply(n.elem, s)) && !1 === (a.result = o) && (a.preventDefault(), a.stopPropagation()));

                        return l.postDispatch && l.postDispatch.call(this, a), a.result;

                    }

                },

                handlers: function (t, e) {

                    var i,

                        n,

                        o,

                        r,

                        s,

                        a = [],

                        l = e.delegateCount,

                        c = t.target;

                    if (l && c.nodeType && !("click" === t.type && 1 <= t.button))

                        for (; c !== this; c = c.parentNode || this)

                            if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {

                                for (r = [], s = {}, i = 0; i < l; i++) void 0 === s[(o = (n = e[i]).selector + " ")] && (s[o] = n.needsContext ? -1 < S(o, this).index(c) : S.find(o, this, null, [c]).length), s[o] && r.push(n);

                                r.length && a.push({ elem: c, handlers: r });

                            }

                    return (c = this), l < e.length && a.push({ elem: c, handlers: e.slice(l) }), a;

                },

                addProp: function (e, t) {

                    Object.defineProperty(S.Event.prototype, e, {

                        enumerable: !0,

                        configurable: !0,

                        get: y(t)

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

                fix: function (t) {

                    return t[S.expando] ? t : new S.Event(t);

                },

                special: {

                    load: { noBubble: !0 },

                    click: {

                        setup: function (t) {

                            return ei.test((t = this || t).type) && t.click && b(t, "input") && xt(t, "click", !0), !1;

                        },

                        trigger: function (t) {

                            return ei.test((t = this || t).type) && t.click && b(t, "input") && xt(t, "click"), !0;

                        },

                        _default: function (t) {

                            return (t = t.target), (ei.test(t.type) && t.click && b(t, "input") && v.get(t, "click")) || b(t, "a");

                        },

                    },

                    beforeunload: {

                        postDispatch: function (t) {

                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);

                        },

                    },

                },

            }),

            (S.removeEvent = function (t, e, i) {

                t.removeEventListener && t.removeEventListener(e, i);

            }),

            (S.Event = function (t, e) {

                if (!(this instanceof S.Event)) return new S.Event(t, e);

                t && t.type

                    ? ((this.originalEvent = t),

                      (this.type = t.type),

                      (this.isDefaultPrevented = t.defaultPrevented || (void 0 === t.defaultPrevented && !1 === t.returnValue) ? bt : _t),

                      (this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target),

                      (this.currentTarget = t.currentTarget),

                      (this.relatedTarget = t.relatedTarget))

                    : (this.type = t),

                    e && S.extend(this, e),

                    (this.timeStamp = (t && t.timeStamp) || Date.now()),

                    (this[S.expando] = !0);

            }),

            (S.Event.prototype = {

                constructor: S.Event,

                isDefaultPrevented: _t,

                isPropagationStopped: _t,

                isImmediatePropagationStopped: _t,

                isSimulated: !1,

                preventDefault: function () {

                    var t = this.originalEvent;

                    (this.isDefaultPrevented = bt), t && !this.isSimulated && t.preventDefault();

                },

                stopPropagation: function () {

                    var t = this.originalEvent;

                    (this.isPropagationStopped = bt), t && !this.isSimulated && t.stopPropagation();

                },

                stopImmediatePropagation: function () {

                    var t = this.originalEvent;

                    (this.isImmediatePropagationStopped = bt), t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();

                },

            }),

            S.each(

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

                S.event.addProp

            ),

            S.each({ focus: "focusin", blur: "focusout" }, function (n, o) {

                function r(t) {

                    var e, i;

                    E.documentMode

                        ? ((e = v.get(this, "handle")), ((i = S.event.fix(t)).type = "focusin" === t.type ? "focus" : "blur"), (i.isSimulated = !0), e(t), i.target === i.currentTarget && e(i))

                        : S.event.simulate(o, t.target, S.event.fix(t));

                }

                (S.event.special[n] = {

                    setup: function () {

                        var t;

                        if ((xt(this, n, !0), !E.documentMode)) return !1;

                        (t = v.get(this, o)) || this.addEventListener(o, r), v.set(this, o, (t || 0) + 1);

                    },

                    trigger: function () {

                        return xt(this, n), !0;

                    },

                    teardown: function () {

                        var t;

                        if (!E.documentMode) return !1;

                        (t = v.get(this, o) - 1) ? v.set(this, o, t) : (this.removeEventListener(o, r), v.remove(this, o));

                    },

                    _default: function (t) {

                        return v.get(t.target, n);

                    },

                    delegateType: o,

                }),

                    (S.event.special[o] = {

                        setup: function () {

                            var t = this.ownerDocument || this.document || this,

                                e = E.documentMode ? this : t,

                                i = v.get(e, o);

                            i || (E.documentMode ? this.addEventListener(o, r) : t.addEventListener(n, r, !0)), v.set(e, o, (i || 0) + 1);

                        },

                        teardown: function () {

                            var t = this.ownerDocument || this.document || this,

                                e = E.documentMode ? this : t,

                                i = v.get(e, o) - 1;

                            i ? v.set(e, o, i) : (E.documentMode ? this.removeEventListener(o, r) : t.removeEventListener(n, r, !0), v.remove(e, o));

                        },

                    });

            }),

            S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, o) {

                S.event.special[t] = {

                    delegateType: o,

                    bindType: o,

                    handle: function (t) {

                        var e,

                            i = t.relatedTarget,

                            n = t.handleObj;

                        return (i && (i === this || S.contains(this, i))) || ((t.type = n.origType), (e = n.handler.apply(this, arguments)), (t.type = o)), e;

                    },

                };

            }),

            S.fn.extend({

                on: function (t, e, i, n) {

                    return wt(this, t, e, i, n);

                },

                one: function (t, e, i, n) {

                    return wt(this, t, e, i, n, 1);

                },

                off: function (t, e, i) {

                    var n, o;

                    if (t && t.preventDefault && t.handleObj) (n = t.handleObj), S(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler);

                    else {

                        if ("object" != typeof t)

                            return (

                                (!1 !== e && "function" != typeof e) || ((i = e), (e = void 0)),

                                !1 === i && (i = _t),

                                this.each(function () {

                                    S.event.remove(this, t, i, e);

                                })

                            );

                        for (o in t) this.off(o, e, t[o]);

                    }

                    return this;

                },

            }),

            /<script|<style|<link/i),

        ai = /checked\s*(?:[^=]|=\s*.checked.)/i,

        li = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    S.extend({

        htmlPrefilter: function (t) {

            return t;

        },

        clone: function (t, e, i) {

            var n,

                o,

                r,

                s,

                a,

                l,

                c,

                u = t.cloneNode(!0),

                h = Ke(t);

            if (!(g.noCloneChecked || (1 !== t.nodeType && 11 !== t.nodeType) || S.isXMLDoc(t)))

                for (s = m(u), n = 0, o = (r = m(t)).length; n < o; n++)

                    (a = r[n]), "input" === (c = (l = s[n]).nodeName.toLowerCase()) && ei.test(a.type) ? (l.checked = a.checked) : ("input" !== c && "textarea" !== c) || (l.defaultValue = a.defaultValue);

            if (e)

                if (i) for (r = r || m(t), s = s || m(u), n = 0, o = r.length; n < o; n++) St(r[n], s[n]);

                else St(t, u);

            return 0 < (s = m(u, "script")).length && vt(s, !h && m(t, "script")), u;

        },

        cleanData: function (t) {

            for (var e, i, n, o = S.event.special, r = 0; void 0 !== (i = t[r]); r++)

                if (ht(i)) {

                    if ((e = i[v.expando])) {

                        if (e.events) for (n in e.events) o[n] ? S.event.remove(i, n) : S.removeEvent(i, n, e.handle);

                        i[v.expando] = void 0;

                    }

                    i[c.expando] && (i[c.expando] = void 0);

                }

        },

    }),

        S.fn.extend({

            detach: function (t) {

                return At(this, t, !0);

            },

            remove: function (t) {

                return At(this, t);

            },

            text: function (t) {

                return u(

                    this,

                    function (t) {

                        return void 0 === t

                            ? S.text(this)

                            : this.empty().each(function () {

                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = t);

                              });

                    },

                    null,

                    t,

                    arguments.length

                );

            },

            append: function () {

                return kt(this, arguments, function (t) {

                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Ct(this, t).appendChild(t);

                });

            },

            prepend: function () {

                return kt(this, arguments, function (t) {

                    var e;

                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (e = Ct(this, t)).insertBefore(t, e.firstChild);

                });

            },

            before: function () {

                return kt(this, arguments, function (t) {

                    this.parentNode && this.parentNode.insertBefore(t, this);

                });

            },

            after: function () {

                return kt(this, arguments, function (t) {

                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);

                });

            },

            empty: function () {

                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (S.cleanData(m(t, !1)), (t.textContent = ""));

                return this;

            },

            clone: function (t, e) {

                return (

                    (t = null != t && t),

                    (e = null == e ? t : e),

                    this.map(function () {

                        return S.clone(this, t, e);

                    })

                );

            },

            html: function (t) {

                return u(

                    this,

                    function (t) {

                        var e = this[0] || {},

                            i = 0,

                            n = this.length;

                        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;

                        if ("string" == typeof t && !si.test(t) && !P[(ii.exec(t) || ["", ""])[1].toLowerCase()]) {

                            t = S.htmlPrefilter(t);

                            try {

                                for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (S.cleanData(m(e, !1)), (e.innerHTML = t));

                                e = 0;

                            } catch (t) {}

                        }

                        e && this.empty().append(t);

                    },

                    null,

                    t,

                    arguments.length

                );

            },

            replaceWith: function () {

                var i = [];

                return kt(

                    this,

                    arguments,

                    function (t) {

                        var e = this.parentNode;

                        S.inArray(this, i) < 0 && (S.cleanData(m(this)), e) && e.replaceChild(t, this);

                    },

                    i

                );

            },

        }),

        S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, s) {

            S.fn[t] = function (t) {

                for (var e, i = [], n = S(t), o = n.length - 1, r = 0; r <= o; r++) (e = r === o ? this : this.clone(!0)), S(n[r])[s](e), Kt.apply(i, e.get());

                return this.pushStack(i);

            };

        });

    var ci,

        ui,

        hi,

        di,

        pi,

        fi,

        M,

        mi = new RegExp("^(" + t + ")(?!px)[a-z%]+$", "i"),

        gi = /^--/,

        vi = new RegExp(Ge.join("|"), "i"),

        yi = E.createElement("div"),

        bi =

            ((M = E.createElement("div")).style &&

                ((M.style.backgroundClip = "content-box"),

                (M.cloneNode(!0).style.backgroundClip = ""),

                (g.clearCloneStyle = "content-box" === M.style.backgroundClip),

                S.extend(g, {

                    boxSizingReliable: function () {

                        return Dt(), ui;

                    },

                    pixelBoxStyles: function () {

                        return Dt(), di;

                    },

                    pixelPosition: function () {

                        return Dt(), ci;

                    },

                    reliableMarginLeft: function () {

                        return Dt(), fi;

                    },

                    scrollboxSize: function () {

                        return Dt(), hi;

                    },

                    reliableTrDimensions: function () {

                        var t, e, i;

                        return (

                            null == pi &&

                                ((t = E.createElement("table")),

                                (e = E.createElement("tr")),

                                (i = E.createElement("div")),

                                (t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),

                                (e.style.cssText = "box-sizing:content-box;border:1px solid"),

                                (e.style.height = "1px"),

                                (i.style.height = "9px"),

                                (i.style.display = "block"),

                                Ze.appendChild(t).appendChild(e).appendChild(i),

                                (i = x.getComputedStyle(e)),

                                (pi = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === e.offsetHeight),

                                Ze.removeChild(t)),

                            pi

                        );

                    },

                })),

            ["Webkit", "Moz", "ms"]),

        _i = E.createElement("div").style,

        wi = {},

        xi = /^(none|table(?!-c[ea]).+)/,

        Ci = { position: "absolute", visibility: "hidden", display: "block" },

        Ti = { letterSpacing: "0", fontWeight: "400" };

    S.extend({

        cssHooks: {

            opacity: {

                get: function (t, e) {

                    if (e) return "" === (e = jt(t, "opacity")) ? "1" : e;

                },

            },

        },

        cssNumber: {

            animationIterationCount: !0,

            aspectRatio: !0,

            borderImageSlice: !0,

            columnCount: !0,

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

            scale: !0,

            widows: !0,

            zIndex: !0,

            zoom: !0,

            fillOpacity: !0,

            floodOpacity: !0,

            stopOpacity: !0,

            strokeMiterlimit: !0,

            strokeOpacity: !0,

        },

        cssProps: {},

        style: function (t, e, i, n) {

            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {

                var o,

                    r,

                    s,

                    a = w(e),

                    l = gi.test(e),

                    c = t.style;

                if ((l || (e = Mt(a)), (s = S.cssHooks[e] || S.cssHooks[a]), void 0 === i)) return s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : c[e];

                "string" == (r = typeof i) && (o = Xe.exec(i)) && o[1] && ((i = mt(t, e, o)), (r = "number")),

                    null != i &&

                        i == i &&

                        ("number" !== r || l || (i += (o && o[3]) || (S.cssNumber[a] ? "" : "px")),

                        g.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"),

                        (s && "set" in s && void 0 === (i = s.set(t, i, n))) || (l ? c.setProperty(e, i) : (c[e] = i)));

            }

        },

        css: function (t, e, i, n) {

            var o,

                r = w(e);

            return (

                gi.test(e) || (e = Mt(r)),

                "normal" === (o = void 0 === (o = (r = S.cssHooks[e] || S.cssHooks[r]) && "get" in r ? r.get(t, !0, i) : o) ? jt(t, e, n) : o) && e in Ti && (o = Ti[e]),

                ("" === i || i) && ((r = parseFloat(o)), !0 === i || isFinite(r)) ? r || 0 : o

            );

        },

    }),

        S.each(["height", "width"], function (t, s) {

            S.cssHooks[s] = {

                get: function (t, e, i) {

                    if (e)

                        return !xi.test(S.css(t, "display")) || (t.getClientRects().length && t.getBoundingClientRect().width)

                            ? Nt(t, s, i)

                            : Ot(t, Ci, function () {

                                  return Nt(t, s, i);

                              });

                },

                set: function (t, e, i) {

                    var n = It(t),

                        o = !g.scrollboxSize() && "absolute" === n.position,

                        r = (o || i) && "border-box" === S.css(t, "boxSizing", !1, n);

                    return (

                        (i = i ? Rt(t, s, i, r, n) : 0),

                        r && o && (i -= Math.ceil(t["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(n[s]) - Rt(t, s, "border", !1, n) - 0.5)),

                        i && (r = Xe.exec(e)) && "px" !== (r[3] || "px") && ((t.style[s] = e), (e = S.css(t, s))),

                        zt(0, e, i)

                    );

                },

            };

        }),

        (S.cssHooks.marginLeft = Lt(g.reliableMarginLeft, function (t, e) {

            if (e)

                return (

                    (parseFloat(jt(t, "marginLeft")) ||

                        t.getBoundingClientRect().left -

                            Ot(t, { marginLeft: 0 }, function () {

                                return t.getBoundingClientRect().left;

                            })) + "px"

                );

        })),

        S.each({ margin: "", padding: "", border: "Width" }, function (o, r) {

            (S.cssHooks[o + r] = {

                expand: function (t) {

                    for (var e = 0, i = {}, n = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) i[o + Ge[e] + r] = n[e] || n[e - 2] || n[0];

                    return i;

                },

            }),

                "margin" !== o && (S.cssHooks[o + r].set = zt);

        }),

        S.fn.extend({

            css: function (t, e) {

                return u(

                    this,

                    function (t, e, i) {

                        var n,

                            o,

                            r = {},

                            s = 0;

                        if (Array.isArray(e)) {

                            for (n = It(t), o = e.length; s < o; s++) r[e[s]] = S.css(t, e[s], !1, n);

                            return r;

                        }

                        return void 0 !== i ? S.style(t, e, i) : S.css(t, e);

                    },

                    t,

                    e,

                    1 < arguments.length

                );

            },

        }),

        (((S.Tween = r).prototype = {

            constructor: r,

            init: function (t, e, i, n, o, r) {

                (this.elem = t), (this.prop = i), (this.easing = o || S.easing._default), (this.options = e), (this.start = this.now = this.cur()), (this.end = n), (this.unit = r || (S.cssNumber[i] ? "" : "px"));

            },

            cur: function () {

                var t = r.propHooks[this.prop];

                return (t && t.get ? t : r.propHooks._default).get(this);

            },

            run: function (t) {

                var e,

                    i = r.propHooks[this.prop];

                return (

                    this.options.duration ? (this.pos = e = S.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration)) : (this.pos = e = t),

                    (this.now = (this.end - this.start) * e + this.start),

                    this.options.step && this.options.step.call(this.elem, this.now, this),

                    (i && i.set ? i : r.propHooks._default).set(this),

                    this

                );

            },

        }).init.prototype = r.prototype),

        ((r.propHooks = {

            _default: {

                get: function (t) {

                    return 1 !== t.elem.nodeType || (null != t.elem[t.prop] && null == t.elem.style[t.prop]) ? t.elem[t.prop] : (t = S.css(t.elem, t.prop, "")) && "auto" !== t ? t : 0;

                },

                set: function (t) {

                    S.fx.step[t.prop] ? S.fx.step[t.prop](t) : 1 !== t.elem.nodeType || (!S.cssHooks[t.prop] && null == t.elem.style[Mt(t.prop)]) ? (t.elem[t.prop] = t.now) : S.style(t.elem, t.prop, t.now + t.unit);

                },

            },

        }).scrollTop = r.propHooks.scrollLeft = {

            set: function (t) {

                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);

            },

        }),

        (S.easing = {

            linear: function (t) {

                return t;

            },

            swing: function (t) {

                return 0.5 - Math.cos(t * Math.PI) / 2;

            },

            _default: "swing",

        }),

        (S.fx = r.prototype.init),

        (S.fx.step = {});

    var Ei,

        Si,

        ki = /^(?:toggle|show|hide)$/,

        Ai = /queueHooks$/;

    (S.Animation = S.extend(C, {

        tweeners: {

            "*": [

                function (t, e) {

                    var i = this.createTween(t, e);

                    return mt(i.elem, t, Xe.exec(e), i), i;

                },

            ],

        },

        tweener: function (t, e) {

            for (var i, n = 0, o = (t = y(t) ? ((e = t), ["*"]) : t.match(D)).length; n < o; n++) (i = t[n]), (C.tweeners[i] = C.tweeners[i] || []), C.tweeners[i].unshift(e);

        },

        prefilters: [

            function (t, e, i) {

                var n,

                    o,

                    r,

                    s,

                    a,

                    l,

                    c,

                    u = "width" in e || "height" in e,

                    h = this,

                    d = {},

                    p = t.style,

                    f = t.nodeType && ft(t),

                    m = v.get(t, "fxshow");

                for (n in (i.queue ||

                    (null == (s = S._queueHooks(t, "fx")).unqueued &&

                        ((s.unqueued = 0),

                        (a = s.empty.fire),

                        (s.empty.fire = function () {

                            s.unqueued || a();

                        })),

                    s.unqueued++,

                    h.always(function () {

                        h.always(function () {

                            s.unqueued--, S.queue(t, "fx").length || s.empty.fire();

                        });

                    })),

                e))

                    if (((o = e[n]), ki.test(o))) {

                        if ((delete e[n], (r = r || "toggle" === o), o === (f ? "hide" : "show"))) {

                            if ("show" !== o || !m || void 0 === m[n]) continue;

                            f = !0;

                        }

                        d[n] = (m && m[n]) || S.style(t, n);

                    }

                if ((l = !S.isEmptyObject(e)) || !S.isEmptyObject(d))

                    for (n in (u &&

                        1 === t.nodeType &&

                        ((i.overflow = [p.overflow, p.overflowX, p.overflowY]),

                        null == (c = m && m.display) && (c = v.get(t, "display")),

                        "none" === (u = S.css(t, "display")) && (c ? (u = c) : (gt([t], !0), (c = t.style.display || c), (u = S.css(t, "display")), gt([t]))),

                        "inline" === u || ("inline-block" === u && null != c)) &&

                        "none" === S.css(t, "float") &&

                        (l ||

                            (h.done(function () {

                                p.display = c;

                            }),

                            null == c && ((u = p.display), (c = "none" === u ? "" : u))),

                        (p.display = "inline-block")),

                    i.overflow &&

                        ((p.overflow = "hidden"),

                        h.always(function () {

                            (p.overflow = i.overflow[0]), (p.overflowX = i.overflow[1]), (p.overflowY = i.overflow[2]);

                        })),

                    (l = !1),

                    d))

                        l ||

                            (m ? "hidden" in m && (f = m.hidden) : (m = v.access(t, "fxshow", { display: c })),

                            r && (m.hidden = !f),

                            f && gt([t], !0),

                            h.done(function () {

                                for (n in (f || gt([t]), v.remove(t, "fxshow"), d)) S.style(t, n, d[n]);

                            })),

                            (l = Wt(f ? m[n] : 0, n, h)),

                            n in m || ((m[n] = l.start), f && ((l.end = l.start), (l.start = 0)));

            },

        ],

        prefilter: function (t, e) {

            e ? C.prefilters.unshift(t) : C.prefilters.push(t);

        },

    })),

        (S.speed = function (t, e, i) {

            var n = t && "object" == typeof t ? S.extend({}, t) : { complete: i || (!i && e) || (y(t) && t), duration: t, easing: (i && e) || (e && !y(e) && e) };

            return (

                S.fx.off ? (n.duration = 0) : "number" != typeof n.duration && (n.duration in S.fx.speeds ? (n.duration = S.fx.speeds[n.duration]) : (n.duration = S.fx.speeds._default)),

                (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),

                (n.old = n.complete),

                (n.complete = function () {

                    y(n.old) && n.old.call(this), n.queue && S.dequeue(this, n.queue);

                }),

                n

            );

        }),

        S.fn.extend({

            fadeTo: function (t, e, i, n) {

                return this.filter(ft).css("opacity", 0).show().end().animate({ opacity: e }, t, i, n);

            },

            animate: function (e, t, i, n) {

                function o() {

                    var t = C(this, S.extend({}, e), s);

                    (r || v.get(this, "finish")) && t.stop(!0);

                }

                var r = S.isEmptyObject(e),

                    s = S.speed(t, i, n);

                return (o.finish = o), r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o);

            },

            stop: function (o, t, r) {

                function s(t) {

                    var e = t.stop;

                    delete t.stop, e(r);

                }

                return (

                    "string" != typeof o && ((r = t), (t = o), (o = void 0)),

                    t && this.queue(o || "fx", []),

                    this.each(function () {

                        var t = !0,

                            e = null != o && o + "queueHooks",

                            i = S.timers,

                            n = v.get(this);

                        if (e) n[e] && n[e].stop && s(n[e]);

                        else for (e in n) n[e] && n[e].stop && Ai.test(e) && s(n[e]);

                        for (e = i.length; e--; ) i[e].elem !== this || (null != o && i[e].queue !== o) || (i[e].anim.stop(r), (t = !1), i.splice(e, 1));

                        (!t && r) || S.dequeue(this, o);

                    })

                );

            },

            finish: function (s) {

                return (

                    !1 !== s && (s = s || "fx"),

                    this.each(function () {

                        var t,

                            e = v.get(this),

                            i = e[s + "queue"],

                            n = e[s + "queueHooks"],

                            o = S.timers,

                            r = i ? i.length : 0;

                        for (e.finish = !0, S.queue(this, s, []), n && n.stop && n.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === s && (o[t].anim.stop(!0), o.splice(t, 1));

                        for (t = 0; t < r; t++) i[t] && i[t].finish && i[t].finish.call(this);

                        delete e.finish;

                    })

                );

            },

        }),

        S.each(["toggle", "show", "hide"], function (t, n) {

            var o = S.fn[n];

            S.fn[n] = function (t, e, i) {

                return null == t || "boolean" == typeof t ? o.apply(this, arguments) : this.animate(Ft(n, !0), t, e, i);

            };

        }),

        S.each({ slideDown: Ft("show"), slideUp: Ft("hide"), slideToggle: Ft("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, n) {

            S.fn[t] = function (t, e, i) {

                return this.animate(n, t, e, i);

            };

        }),

        (S.timers = []),

        (S.fx.tick = function () {

            var t,

                e = 0,

                i = S.timers;

            for (Ei = Date.now(); e < i.length; e++) (t = i[e])() || i[e] !== t || i.splice(e--, 1);

            i.length || S.fx.stop(), (Ei = void 0);

        }),

        (S.fx.timer = function (t) {

            S.timers.push(t), S.fx.start();

        }),

        (S.fx.interval = 13),

        (S.fx.start = function () {

            Si || ((Si = !0), qt());

        }),

        (S.fx.stop = function () {

            Si = null;

        }),

        (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),

        (S.fn.delay = function (n, t) {

            return (

                (n = (S.fx && S.fx.speeds[n]) || n),

                this.queue((t = t || "fx"), function (t, e) {

                    var i = x.setTimeout(t, n);

                    e.stop = function () {

                        x.clearTimeout(i);

                    };

                })

            );

        }),

        (l = E.createElement("input")),

        (s = E.createElement("select").appendChild(E.createElement("option"))),

        (l.type = "checkbox"),

        (g.checkOn = "" !== l.value),

        (g.optSelected = s.selected),

        ((l = E.createElement("input")).value = "t"),

        (l.type = "radio"),

        (g.radioValue = "t" === l.value);

    var Ii,

        Oi = S.expr.attrHandle,

        ji =

            (S.fn.extend({

                attr: function (t, e) {

                    return u(this, S.attr, t, e, 1 < arguments.length);

                },

                removeAttr: function (t) {

                    return this.each(function () {

                        S.removeAttr(this, t);

                    });

                },

            }),

            S.extend({

                attr: function (t, e, i) {

                    var n,

                        o,

                        r = t.nodeType;

                    if (3 !== r && 8 !== r && 2 !== r)

                        return void 0 === t.getAttribute

                            ? S.prop(t, e, i)

                            : ((1 === r && S.isXMLDoc(t)) || (o = S.attrHooks[e.toLowerCase()] || (S.expr.match.bool.test(e) ? Ii : void 0)),

                              void 0 !== i

                                  ? null === i

                                      ? void S.removeAttr(t, e)

                                      : o && "set" in o && void 0 !== (n = o.set(t, i, e))

                                      ? n

                                      : (t.setAttribute(e, i + ""), i)

                                  : (o && "get" in o && null !== (n = o.get(t, e))) || null != (n = S.find.attr(t, e))

                                  ? n

                                  : void 0);

                },

                attrHooks: {

                    type: {

                        set: function (t, e) {

                            var i;

                            if (!g.radioValue && "radio" === e && b(t, "input")) return (i = t.value), t.setAttribute("type", e), i && (t.value = i), e;

                        },

                    },

                },

                removeAttr: function (t, e) {

                    var i,

                        n = 0,

                        o = e && e.match(D);

                    if (o && 1 === t.nodeType) for (; (i = o[n++]); ) t.removeAttribute(i);

                },

            }),

            (Ii = {

                set: function (t, e, i) {

                    return !1 === e ? S.removeAttr(t, i) : t.setAttribute(i, i), i;

                },

            }),

            S.each(S.expr.match.bool.source.match(/\w+/g), function (t, e) {

                var s = Oi[e] || S.find.attr;

                Oi[e] = function (t, e, i) {

                    var n,

                        o,

                        r = e.toLowerCase();

                    return i || ((o = Oi[r]), (Oi[r] = n), (n = null != s(t, e, i) ? r : null), (Oi[r] = o)), n;

                };

            }),

            /^(?:input|select|textarea|button)$/i),

        Li = /^(?:a|area)$/i,

        Di =

            (S.fn.extend({

                prop: function (t, e) {

                    return u(this, S.prop, t, e, 1 < arguments.length);

                },

                removeProp: function (t) {

                    return this.each(function () {

                        delete this[S.propFix[t] || t];

                    });

                },

            }),

            S.extend({

                prop: function (t, e, i) {

                    var n,

                        o,

                        r = t.nodeType;

                    if (3 !== r && 8 !== r && 2 !== r)

                        return (

                            (1 === r && S.isXMLDoc(t)) || ((e = S.propFix[e] || e), (o = S.propHooks[e])),

                            void 0 !== i ? (o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t[e] = i)) : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]

                        );

                },

                propHooks: {

                    tabIndex: {

                        get: function (t) {

                            var e = S.find.attr(t, "tabindex");

                            return e ? parseInt(e, 10) : ji.test(t.nodeName) || (Li.test(t.nodeName) && t.href) ? 0 : -1;

                        },

                    },

                },

                propFix: { for: "htmlFor", class: "className" },

            }),

            g.optSelected ||

                (S.propHooks.selected = {

                    get: function (t) {

                        return (t = t.parentNode) && t.parentNode && t.parentNode.selectedIndex, null;

                    },

                    set: function (t) {

                        (t = t.parentNode) && (t.selectedIndex, t.parentNode) && t.parentNode.selectedIndex;

                    },

                }),

            S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {

                S.propFix[this.toLowerCase()] = this;

            }),

            S.fn.extend({

                addClass: function (e) {

                    var t, i, n, o, r, s;

                    return y(e)

                        ? this.each(function (t) {

                              S(this).addClass(e.call(this, t, Bt(this)));

                          })

                        : (t = Qt(e)).length

                        ? this.each(function () {

                              if (((n = Bt(this)), (i = 1 === this.nodeType && " " + $t(n) + " "))) {

                                  for (r = 0; r < t.length; r++) (o = t[r]), i.indexOf(" " + o + " ") < 0 && (i += o + " ");

                                  (s = $t(i)), n !== s && this.setAttribute("class", s);

                              }

                          })

                        : this;

                },

                removeClass: function (e) {

                    var t, i, n, o, r, s;

                    return y(e)

                        ? this.each(function (t) {

                              S(this).removeClass(e.call(this, t, Bt(this)));

                          })

                        : arguments.length

                        ? (t = Qt(e)).length

                            ? this.each(function () {

                                  if (((n = Bt(this)), (i = 1 === this.nodeType && " " + $t(n) + " "))) {

                                      for (r = 0; r < t.length; r++) for (o = t[r]; -1 < i.indexOf(" " + o + " "); ) i = i.replace(" " + o + " ", " ");

                                      (s = $t(i)), n !== s && this.setAttribute("class", s);

                                  }

                              })

                            : this

                        : this.attr("class", "");

                },

                toggleClass: function (e, i) {

                    var t,

                        n,

                        o,

                        r,

                        s = typeof e,

                        a = "string" == s || Array.isArray(e);

                    return y(e)

                        ? this.each(function (t) {

                              S(this).toggleClass(e.call(this, t, Bt(this), i), i);

                          })

                        : "boolean" == typeof i && a

                        ? i

                            ? this.addClass(e)

                            : this.removeClass(e)

                        : ((t = Qt(e)),

                          this.each(function () {

                              if (a) for (r = S(this), o = 0; o < t.length; o++) (n = t[o]), r.hasClass(n) ? r.removeClass(n) : r.addClass(n);

                              else (void 0 !== e && "boolean" != s) || ((n = Bt(this)) && v.set(this, "__className__", n), this.setAttribute && this.setAttribute("class", (!n && !1 !== e && v.get(this, "__className__")) || ""));

                          }));

                },

                hasClass: function (t) {

                    for (var e, i = 0, n = " " + t + " "; (e = this[i++]); ) if (1 === e.nodeType && -1 < (" " + $t(Bt(e)) + " ").indexOf(n)) return !0;

                    return !1;

                },

            }),

            /\r/g),

        Pi =

            (S.fn.extend({

                val: function (e) {

                    var i,

                        t,

                        n,

                        o = this[0];

                    return arguments.length

                        ? ((n = y(e)),

                          this.each(function (t) {

                              1 === this.nodeType &&

                                  (null == (t = n ? e.call(this, t, S(this).val()) : e)

                                      ? (t = "")

                                      : "number" == typeof t

                                      ? (t += "")

                                      : Array.isArray(t) &&

                                        (t = S.map(t, function (t) {

                                            return null == t ? "" : t + "";

                                        })),

                                  ((i = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value")) || (this.value = t));

                          }))

                        : o

                        ? (i = S.valHooks[o.type] || S.valHooks[o.nodeName.toLowerCase()]) && "get" in i && void 0 !== (t = i.get(o, "value"))

                            ? t

                            : "string" == typeof (t = o.value)

                            ? t.replace(Di, "")

                            : null == t

                            ? ""

                            : t

                        : void 0;

                },

            }),

            S.extend({

                valHooks: {

                    option: {

                        get: function (t) {

                            var e = S.find.attr(t, "value");

                            return null != e ? e : $t(S.text(t));

                        },

                    },

                    select: {

                        get: function (t) {

                            for (var e, i = t.options, n = t.selectedIndex, o = "select-one" === t.type, r = o ? null : [], s = o ? n + 1 : i.length, a = n < 0 ? s : o ? n : 0; a < s; a++)

                                if (((e = i[a]).selected || a === n) && !e.disabled && (!e.parentNode.disabled || !b(e.parentNode, "optgroup"))) {

                                    if (((e = S(e).val()), o)) return e;

                                    r.push(e);

                                }

                            return r;

                        },

                        set: function (t, e) {

                            for (var i, n, o = t.options, r = S.makeArray(e), s = o.length; s--; ) ((n = o[s]).selected = -1 < S.inArray(S.valHooks.option.get(n), r)) && (i = !0);

                            return i || (t.selectedIndex = -1), r;

                        },

                    },

                },

            }),

            S.each(["radio", "checkbox"], function () {

                (S.valHooks[this] = {

                    set: function (t, e) {

                        if (Array.isArray(e)) return (t.checked = -1 < S.inArray(S(t).val(), e));

                    },

                }),

                    g.checkOn ||

                        (S.valHooks[this].get = function (t) {

                            return null === t.getAttribute("value") ? "on" : t.value;

                        });

            }),

            x.location),

        Mi = { guid: Date.now() },

        zi = /\?/,

        Ri =

            ((S.parseXML = function (t) {

                var e, i;

                if (!t || "string" != typeof t) return null;

                try {

                    e = new x.DOMParser().parseFromString(t, "text/xml");

                } catch (t) {}

                return (

                    (i = e && e.getElementsByTagName("parsererror")[0]),

                    (e && !i) ||

                        S.error(

                            "Invalid XML: " +

                                (i

                                    ? S.map(i.childNodes, function (t) {

                                          return t.textContent;

                                      }).join("\n")

                                    : t)

                        ),

                    e

                );

            }),

            /^(?:focusinfocus|focusoutblur)$/),

        Ni =

            (S.extend(S.event, {

                trigger: function (t, e, i, n) {

                    var o,

                        r,

                        s,

                        a,

                        l,

                        c,

                        u,

                        h = [i || E],

                        d = ee.call(t, "type") ? t.type : t,

                        p = ee.call(t, "namespace") ? t.namespace.split(".") : [],

                        f = (u = r = i = i || E);

                    if (

                        3 !== i.nodeType &&

                        8 !== i.nodeType &&

                        !Ri.test(d + S.event.triggered) &&

                        (-1 < d.indexOf(".") && ((d = (p = d.split(".")).shift()), p.sort()),

                        (a = d.indexOf(":") < 0 && "on" + d),

                        ((t = t[S.expando] ? t : new S.Event(d, "object" == typeof t && t)).isTrigger = n ? 2 : 3),

                        (t.namespace = p.join(".")),

                        (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),

                        (t.result = void 0),

                        t.target || (t.target = i),

                        (e = null == e ? [t] : S.makeArray(e, [t])),

                        (c = S.event.special[d] || {}),

                        n || !c.trigger || !1 !== c.trigger.apply(i, e))

                    ) {

                        if (!n && !c.noBubble && !R(i)) {

                            for (s = c.delegateType || d, Ri.test(s + d) || (f = f.parentNode); f; f = f.parentNode) h.push(f), (r = f);

                            r === (i.ownerDocument || E) && h.push(r.defaultView || r.parentWindow || x);

                        }

                        for (o = 0; (f = h[o++]) && !t.isPropagationStopped(); )

                            (u = f),

                                (t.type = 1 < o ? s : c.bindType || d),

                                (l = (v.get(f, "events") || Object.create(null))[t.type] && v.get(f, "handle")) && l.apply(f, e),

                                (l = a && f[a]) && l.apply && ht(f) && ((t.result = l.apply(f, e)), !1 === t.result) && t.preventDefault();

                        return (

                            (t.type = d),

                            n ||

                                t.isDefaultPrevented() ||

                                (c._default && !1 !== c._default.apply(h.pop(), e)) ||

                                !ht(i) ||

                                (a &&

                                    y(i[d]) &&

                                    !R(i) &&

                                    ((r = i[a]) && (i[a] = null),

                                    (S.event.triggered = d),

                                    t.isPropagationStopped() && u.addEventListener(d, Vt),

                                    i[d](),

                                    t.isPropagationStopped() && u.removeEventListener(d, Vt),

                                    (S.event.triggered = void 0),

                                    r) &&

                                    (i[a] = r)),

                            t.result

                        );

                    }

                },

                simulate: function (t, e, i) {

                    (i = S.extend(new S.Event(), i, { type: t, isSimulated: !0 })), S.event.trigger(i, null, e);

                },

            }),

            S.fn.extend({

                trigger: function (t, e) {

                    return this.each(function () {

                        S.event.trigger(t, e, this);

                    });

                },

                triggerHandler: function (t, e) {

                    var i = this[0];

                    if (i) return S.event.trigger(t, e, i, !0);

                },

            }),

            /\[\]$/),

        qi = /\r?\n/g,

        Hi = /^(?:submit|button|image|reset|file)$/i,

        Fi = /^(?:input|select|textarea|keygen)/i,

        Wi =

            ((S.param = function (t, e) {

                function i(t, e) {

                    (e = y(e) ? e() : e), (o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == e ? "" : e));

                }

                var n,

                    o = [];

                if (null == t) return "";

                if (Array.isArray(t) || (t.jquery && !S.isPlainObject(t)))

                    S.each(t, function () {

                        i(this.name, this.value);

                    });

                else

                    for (n in t)

                        !(function i(n, t, o, r) {

                            if (Array.isArray(t))

                                S.each(t, function (t, e) {

                                    o || Ni.test(n) ? r(n, e) : i(n + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, o, r);

                                });

                            else if (o || "object" !== q(t)) r(n, t);

                            else for (var e in t) i(n + "[" + e + "]", t[e], o, r);

                        })(n, t[n], e, i);

                return o.join("&");

            }),

            S.fn.extend({

                serialize: function () {

                    return S.param(this.serializeArray());

                },

                serializeArray: function () {

                    return this.map(function () {

                        var t = S.prop(this, "elements");

                        return t ? S.makeArray(t) : this;

                    })

                        .filter(function () {

                            var t = this.type;

                            return this.name && !S(this).is(":disabled") && Fi.test(this.nodeName) && !Hi.test(t) && (this.checked || !ei.test(t));

                        })

                        .map(function (t, e) {

                            var i = S(this).val();

                            return null == i

                                ? null

                                : Array.isArray(i)

                                ? S.map(i, function (t) {

                                      return { name: e.name, value: t.replace(qi, "\r\n") };

                                  })

                                : { name: e.name, value: i.replace(qi, "\r\n") };

                        })

                        .get();

                },

            }),

            /%20/g),

        $i = /#.*$/,

        Bi = /([?&])_=[^&]*/,

        Qi = /^(.*?):[ \t]*([^\r\n]*)$/gm,

        Vi = /^(?:GET|HEAD)$/,

        Ui = /^\/\//,

        Yi = {},

        Xi = {},

        Gi = "*/".concat("*"),

        Zi = E.createElement("a"),

        Ki =

            ((Zi.href = Pi.href),

            S.extend({

                active: 0,

                lastModified: {},

                etag: {},

                ajaxSettings: {

                    url: Pi.href,

                    type: "GET",

                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Pi.protocol),

                    global: !0,

                    processData: !0,

                    async: !0,

                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",

                    accepts: { "*": Gi, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },

                    contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },

                    responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },

                    converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML },

                    flatOptions: { url: !0, context: !0 },

                },

                ajaxSetup: function (t, e) {

                    return e ? Xt(Xt(t, S.ajaxSettings), e) : Xt(S.ajaxSettings, t);

                },

                ajaxPrefilter: Ut(Yi),

                ajaxTransport: Ut(Xi),

                ajax: function (t, e) {

                    function i(t, e, i, n) {

                        var o,

                            r,

                            s,

                            a = e;

                        d ||

                            ((d = !0),

                            h && x.clearTimeout(h),

                            (l = void 0),

                            (u = n || ""),

                            (w.readyState = 0 < t ? 4 : 0),

                            (n = (200 <= t && t < 300) || 304 === t),

                            i &&

                                (s = (function (t, e, i) {

                                    for (var n, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));

                                    if (n)

                                        for (o in a)

                                            if (a[o] && a[o].test(n)) {

                                                l.unshift(o);

                                                break;

                                            }

                                    if (l[0] in i) r = l[0];

                                    else {

                                        for (o in i) {

                                            if (!l[0] || t.converters[o + " " + l[0]]) {

                                                r = o;

                                                break;

                                            }

                                            s = s || o;

                                        }

                                        r = r || s;

                                    }

                                    if (r) return r !== l[0] && l.unshift(r), i[r];

                                })(f, w, i)),

                            !n && -1 < S.inArray("script", f.dataTypes) && S.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function () {}),

                            (s = (function (t, e, i, n) {

                                var o,

                                    r,

                                    s,

                                    a,

                                    l,

                                    c = {},

                                    u = t.dataTypes.slice();

                                if (u[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s];

                                for (r = u.shift(); r; )

                                    if ((t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), (l = r), (r = u.shift())))

                                        if ("*" === r) r = l;

                                        else if ("*" !== l && l !== r) {

                                            if (!(s = c[l + " " + r] || c["* " + r]))

                                                for (o in c)

                                                    if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {

                                                        !0 === s ? (s = c[o]) : !0 !== c[o] && ((r = a[0]), u.unshift(a[1]));

                                                        break;

                                                    }

                                            if (!0 !== s)

                                                if (s && t.throws) e = s(e);

                                                else

                                                    try {

                                                        e = s(e);

                                                    } catch (t) {

                                                        return { state: "parsererror", error: s ? t : "No conversion from " + l + " to " + r };

                                                    }

                                        }

                                return { state: "success", data: e };

                            })(f, s, w, n)),

                            n

                                ? (f.ifModified && ((i = w.getResponseHeader("Last-Modified")) && (S.lastModified[c] = i), (i = w.getResponseHeader("etag"))) && (S.etag[c] = i),

                                  204 === t || "HEAD" === f.type ? (a = "nocontent") : 304 === t ? (a = "notmodified") : ((a = s.state), (o = s.data), (n = !(r = s.error))))

                                : ((r = a), (!t && a) || ((a = "error"), t < 0 && (t = 0))),

                            (w.status = t),

                            (w.statusText = (e || a) + ""),

                            n ? v.resolveWith(m, [o, a, w]) : v.rejectWith(m, [w, a, r]),

                            w.statusCode(b),

                            (b = void 0),

                            p && g.trigger(n ? "ajaxSuccess" : "ajaxError", [w, f, n ? o : r]),

                            y.fireWith(m, [w, a]),

                            p && (g.trigger("ajaxComplete", [w, f]), --S.active || S.event.trigger("ajaxStop")));

                    }

                    "object" == typeof t && ((e = t), (t = void 0));

                    var l,

                        c,

                        u,

                        n,

                        h,

                        d,

                        p,

                        o,

                        r,

                        f = S.ajaxSetup({}, (e = e || {})),

                        m = f.context || f,

                        g = f.context && (m.nodeType || m.jquery) ? S(m) : S.event,

                        v = S.Deferred(),

                        y = S.Callbacks("once memory"),

                        b = f.statusCode || {},

                        s = {},

                        a = {},

                        _ = "canceled",

                        w = {

                            readyState: 0,

                            getResponseHeader: function (t) {

                                var e;

                                if (d) {

                                    if (!n) for (n = {}; (e = Qi.exec(u)); ) n[e[1].toLowerCase() + " "] = (n[e[1].toLowerCase() + " "] || []).concat(e[2]);

                                    e = n[t.toLowerCase() + " "];

                                }

                                return null == e ? null : e.join(", ");

                            },

                            getAllResponseHeaders: function () {

                                return d ? u : null;

                            },

                            setRequestHeader: function (t, e) {

                                return null == d && ((t = a[t.toLowerCase()] = a[t.toLowerCase()] || t), (s[t] = e)), this;

                            },

                            overrideMimeType: function (t) {

                                return null == d && (f.mimeType = t), this;

                            },

                            statusCode: function (t) {

                                if (t)

                                    if (d) w.always(t[w.status]);

                                    else for (var e in t) b[e] = [b[e], t[e]];

                                return this;

                            },

                            abort: function (t) {

                                return (t = t || _), l && l.abort(t), i(0, t), this;

                            },

                        };

                    if (

                        (v.promise(w),

                        (f.url = ((t || f.url || Pi.href) + "").replace(Ui, Pi.protocol + "//")),

                        (f.type = e.method || e.type || f.method || f.type),

                        (f.dataTypes = (f.dataType || "*").toLowerCase().match(D) || [""]),

                        null == f.crossDomain)

                    ) {

                        r = E.createElement("a");

                        try {

                            (r.href = f.url), (r.href = r.href), (f.crossDomain = Zi.protocol + "//" + Zi.host != r.protocol + "//" + r.host);

                        } catch (t) {

                            f.crossDomain = !0;

                        }

                    }

                    if ((f.data && f.processData && "string" != typeof f.data && (f.data = S.param(f.data, f.traditional)), Yt(Yi, f, e, w), !d)) {

                        for (o in ((p = S.event && f.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),

                        (f.type = f.type.toUpperCase()),

                        (f.hasContent = !Vi.test(f.type)),

                        (c = f.url.replace($i, "")),

                        f.hasContent

                            ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Wi, "+"))

                            : ((r = f.url.slice(c.length)),

                              f.data && (f.processData || "string" == typeof f.data) && ((c += (zi.test(c) ? "&" : "?") + f.data), delete f.data),

                              !1 === f.cache && ((c = c.replace(Bi, "$1")), (r = (zi.test(c) ? "&" : "?") + "_=" + Mi.guid++ + r)),

                              (f.url = c + r)),

                        f.ifModified && (S.lastModified[c] && w.setRequestHeader("If-Modified-Since", S.lastModified[c]), S.etag[c]) && w.setRequestHeader("If-None-Match", S.etag[c]),

                        ((f.data && f.hasContent && !1 !== f.contentType) || e.contentType) && w.setRequestHeader("Content-Type", f.contentType),

                        w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Gi + "; q=0.01" : "") : f.accepts["*"]),

                        f.headers))

                            w.setRequestHeader(o, f.headers[o]);

                        if (f.beforeSend && (!1 === f.beforeSend.call(m, w, f) || d)) return w.abort();

                        if (((_ = "abort"), y.add(f.complete), w.done(f.success), w.fail(f.error), (l = Yt(Xi, f, e, w)))) {

                            if (((w.readyState = 1), p && g.trigger("ajaxSend", [w, f]), d)) return w;

                            f.async &&

                                0 < f.timeout &&

                                (h = x.setTimeout(function () {

                                    w.abort("timeout");

                                }, f.timeout));

                            try {

                                (d = !1), l.send(s, i);

                            } catch (t) {

                                if (d) throw t;

                                i(-1, t);

                            }

                        } else i(-1, "No Transport");

                    }

                    return w;

                },

                getJSON: function (t, e, i) {

                    return S.get(t, e, i, "json");

                },

                getScript: function (t, e) {

                    return S.get(t, void 0, e, "script");

                },

            }),

            S.each(["get", "post"], function (t, o) {

                S[o] = function (t, e, i, n) {

                    return y(e) && ((n = n || i), (i = e), (e = void 0)), S.ajax(S.extend({ url: t, type: o, dataType: n, data: e, success: i }, S.isPlainObject(t) && t));

                };

            }),

            S.ajaxPrefilter(function (t) {

                for (var e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "");

            }),

            (S._evalUrl = function (t, e, i) {

                return S.ajax({

                    url: t,

                    type: "GET",

                    dataType: "script",

                    cache: !0,

                    async: !1,

                    global: !1,

                    converters: { "text script": function () {} },

                    dataFilter: function (t) {

                        S.globalEval(t, e, i);

                    },

                });

            }),

            S.fn.extend({

                wrapAll: function (t) {

                    return (

                        this[0] &&

                            (y(t) && (t = t.call(this[0])),

                            (t = S(t, this[0].ownerDocument).eq(0).clone(!0)),

                            this[0].parentNode && t.insertBefore(this[0]),

                            t

                                .map(function () {

                                    for (var t = this; t.firstElementChild; ) t = t.firstElementChild;

                                    return t;

                                })

                                .append(this)),

                        this

                    );

                },

                wrapInner: function (i) {

                    return y(i)

                        ? this.each(function (t) {

                              S(this).wrapInner(i.call(this, t));

                          })

                        : this.each(function () {

                              var t = S(this),

                                  e = t.contents();

                              e.length ? e.wrapAll(i) : t.append(i);

                          });

                },

                wrap: function (e) {

                    var i = y(e);

                    return this.each(function (t) {

                        S(this).wrapAll(i ? e.call(this, t) : e);

                    });

                },

                unwrap: function (t) {

                    return (

                        this.parent(t)

                            .not("body")

                            .each(function () {

                                S(this).replaceWith(this.childNodes);

                            }),

                        this

                    );

                },

            }),

            (S.expr.pseudos.hidden = function (t) {

                return !S.expr.pseudos.visible(t);

            }),

            (S.expr.pseudos.visible = function (t) {

                return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);

            }),

            (S.ajaxSettings.xhr = function () {

                try {

                    return new x.XMLHttpRequest();

                } catch (t) {}

            }),

            { 0: 200, 1223: 204 }),

        Ji = S.ajaxSettings.xhr(),

        tn =

            ((g.cors = !!Ji && "withCredentials" in Ji),

            (g.ajax = Ji = !!Ji),

            S.ajaxTransport(function (o) {

                var r, s;

                if (g.cors || (Ji && !o.crossDomain))

                    return {

                        send: function (t, e) {

                            var i,

                                n = o.xhr();

                            if ((n.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)) for (i in o.xhrFields) n[i] = o.xhrFields[i];

                            for (i in (o.mimeType && n.overrideMimeType && n.overrideMimeType(o.mimeType), o.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t)) n.setRequestHeader(i, t[i]);

                            (r = function (t) {

                                return function () {

                                    r &&

                                        ((r = s = n.onload = n.onerror = n.onabort = n.ontimeout = n.onreadystatechange = null),

                                        "abort" === t

                                            ? n.abort()

                                            : "error" === t

                                            ? "number" != typeof n.status

                                                ? e(0, "error")

                                                : e(n.status, n.statusText)

                                            : e(

                                                  Ki[n.status] || n.status,

                                                  n.statusText,

                                                  "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? { binary: n.response } : { text: n.responseText },

                                                  n.getAllResponseHeaders()

                                              ));

                                };

                            }),

                                (n.onload = r()),

                                (s = n.onerror = n.ontimeout = r("error")),

                                void 0 !== n.onabort

                                    ? (n.onabort = s)

                                    : (n.onreadystatechange = function () {

                                          4 === n.readyState &&

                                              x.setTimeout(function () {

                                                  r && s();

                                              });

                                      }),

                                (r = r("abort"));

                            try {

                                n.send((o.hasContent && o.data) || null);

                            } catch (t) {

                                if (r) throw t;

                            }

                        },

                        abort: function () {

                            r && r();

                        },

                    };

            }),

            S.ajaxPrefilter(function (t) {

                t.crossDomain && (t.contents.script = !1);

            }),

            S.ajaxSetup({

                accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },

                contents: { script: /\b(?:java|ecma)script\b/ },

                converters: {

                    "text script": function (t) {

                        return S.globalEval(t), t;

                    },

                },

            }),

            S.ajaxPrefilter("script", function (t) {

                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");

            }),

            S.ajaxTransport("script", function (i) {

                var n, o;

                if (i.crossDomain || i.scriptAttrs)

                    return {

                        send: function (t, e) {

                            (n = S("<script>")

                                .attr(i.scriptAttrs || {})

                                .prop({ charset: i.scriptCharset, src: i.url })

                                .on(

                                    "load error",

                                    (o = function (t) {

                                        n.remove(), (o = null), t && e("error" === t.type ? 404 : 200, t.type);

                                    })

                                )),

                                E.head.appendChild(n[0]);

                        },

                        abort: function () {

                            o && o();

                        },

                    };

            }),

            []),

        en = /(=)\?(?=&|$)|\?\?/,

        nn =

            (S.ajaxSetup({

                jsonp: "callback",

                jsonpCallback: function () {

                    var t = tn.pop() || S.expando + "_" + Mi.guid++;

                    return (this[t] = !0), t;

                },

            }),

            S.ajaxPrefilter("json jsonp", function (t, e, i) {

                var n,

                    o,

                    r,

                    s = !1 !== t.jsonp && (en.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(t.data) && "data");

                if (s || "jsonp" === t.dataTypes[0])

                    return (

                        (n = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),

                        s ? (t[s] = t[s].replace(en, "$1" + n)) : !1 !== t.jsonp && (t.url += (zi.test(t.url) ? "&" : "?") + t.jsonp + "=" + n),

                        (t.converters["script json"] = function () {

                            return r || S.error(n + " was not called"), r[0];

                        }),

                        (t.dataTypes[0] = "json"),

                        (o = x[n]),

                        (x[n] = function () {

                            r = arguments;

                        }),

                        i.always(function () {

                            void 0 === o ? S(x).removeProp(n) : (x[n] = o), t[n] && ((t.jsonpCallback = e.jsonpCallback), tn.push(n)), r && y(o) && o(r[0]), (r = o = void 0);

                        }),

                        "script"

                    );

            }),

            (g.createHTMLDocument = (((t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === t.childNodes.length)),

            (S.parseHTML = function (t, e, i) {

                return "string" != typeof t

                    ? []

                    : ("boolean" == typeof e && ((i = e), (e = !1)),

                      e || (g.createHTMLDocument ? (((n = (e = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href), e.head.appendChild(n)) : (e = E)),

                      (n = !i && []),

                      (i = Ne.exec(t)) ? [e.createElement(i[1])] : ((i = yt([t], e, n)), n && n.length && S(n).remove(), S.merge([], i.childNodes)));

                var n;

            }),

            (S.fn.load = function (t, e, i) {

                var n,

                    o,

                    r,

                    s = this,

                    a = t.indexOf(" ");

                return (

                    -1 < a && ((n = $t(t.slice(a))), (t = t.slice(0, a))),

                    y(e) ? ((i = e), (e = void 0)) : e && "object" == typeof e && (o = "POST"),

                    0 < s.length &&

                        S.ajax({ url: t, type: o || "GET", dataType: "html", data: e })

                            .done(function (t) {

                                (r = arguments), s.html(n ? S("<div>").append(S.parseHTML(t)).find(n) : t);

                            })

                            .always(

                                i &&

                                    function (t, e) {

                                        s.each(function () {

                                            i.apply(this, r || [t.responseText, e, t]);

                                        });

                                    }

                            ),

                    this

                );

            }),

            (S.expr.pseudos.animated = function (e) {

                return S.grep(S.timers, function (t) {

                    return e === t.elem;

                }).length;

            }),

            (S.offset = {

                setOffset: function (t, e, i) {

                    var n,

                        o,

                        r,

                        s,

                        a = S.css(t, "position"),

                        l = S(t),

                        c = {};

                    "static" === a && (t.style.position = "relative"),

                        (r = l.offset()),

                        (n = S.css(t, "top")),

                        (s = S.css(t, "left")),

                        (a = ("absolute" === a || "fixed" === a) && -1 < (n + s).indexOf("auto") ? ((o = (a = l.position()).top), a.left) : ((o = parseFloat(n) || 0), parseFloat(s) || 0)),

                        null != (e = y(e) ? e.call(t, i, S.extend({}, r)) : e).top && (c.top = e.top - r.top + o),

                        null != e.left && (c.left = e.left - r.left + a),

                        "using" in e ? e.using.call(t, c) : l.css(c);

                },

            }),

            S.fn.extend({

                offset: function (e) {

                    var t, i;

                    return arguments.length

                        ? void 0 === e

                            ? this

                            : this.each(function (t) {

                                  S.offset.setOffset(this, e, t);

                              })

                        : (i = this[0])

                        ? i.getClientRects().length

                            ? ((t = i.getBoundingClientRect()), (i = i.ownerDocument.defaultView), { top: t.top + i.pageYOffset, left: t.left + i.pageXOffset })

                            : { top: 0, left: 0 }

                        : void 0;

                },

                position: function () {

                    if (this[0]) {

                        var t,

                            e,

                            i,

                            n = this[0],

                            o = { top: 0, left: 0 };

                        if ("fixed" === S.css(n, "position")) e = n.getBoundingClientRect();

                        else {

                            for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === S.css(t, "position"); ) t = t.parentNode;

                            t && t !== n && 1 === t.nodeType && (((o = S(t).offset()).top += S.css(t, "borderTopWidth", !0)), (o.left += S.css(t, "borderLeftWidth", !0)));

                        }

                        return { top: e.top - o.top - S.css(n, "marginTop", !0), left: e.left - o.left - S.css(n, "marginLeft", !0) };

                    }

                },

                offsetParent: function () {

                    return this.map(function () {

                        for (var t = this.offsetParent; t && "static" === S.css(t, "position"); ) t = t.offsetParent;

                        return t || Ze;

                    });

                },

            }),

            S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, o) {

                var r = "pageYOffset" === o;

                S.fn[e] = function (t) {

                    return u(

                        this,

                        function (t, e, i) {

                            var n;

                            if ((R(t) ? (n = t) : 9 === t.nodeType && (n = t.defaultView), void 0 === i)) return n ? n[o] : t[e];

                            n ? n.scrollTo(r ? n.pageXOffset : i, r ? i : n.pageYOffset) : (t[e] = i);

                        },

                        e,

                        t,

                        arguments.length

                    );

                };

            }),

            S.each(["top", "left"], function (t, i) {

                S.cssHooks[i] = Lt(g.pixelPosition, function (t, e) {

                    if (e) return (e = jt(t, i)), mi.test(e) ? S(t).position()[i] + "px" : e;

                });

            }),

            S.each({ Height: "height", Width: "width" }, function (s, a) {

                S.each({ padding: "inner" + s, content: a, "": "outer" + s }, function (n, r) {

                    S.fn[r] = function (t, e) {

                        var i = arguments.length && (n || "boolean" != typeof t),

                            o = n || (!0 === t || !0 === e ? "margin" : "border");

                        return u(

                            this,

                            function (t, e, i) {

                                var n;

                                return R(t)

                                    ? 0 === r.indexOf("outer")

                                        ? t["inner" + s]

                                        : t.document.documentElement["client" + s]

                                    : 9 === t.nodeType

                                    ? ((n = t.documentElement), Math.max(t.body["scroll" + s], n["scroll" + s], t.body["offset" + s], n["offset" + s], n["client" + s]))

                                    : void 0 === i

                                    ? S.css(t, e, o)

                                    : S.style(t, e, i, o);

                            },

                            a,

                            i ? t : void 0,

                            i

                        );

                    };

                });

            }),

            S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {

                S.fn[e] = function (t) {

                    return this.on(e, t);

                };

            }),

            S.fn.extend({

                bind: function (t, e, i) {

                    return this.on(t, null, e, i);

                },

                unbind: function (t, e) {

                    return this.off(t, null, e);

                },

                delegate: function (t, e, i, n) {

                    return this.on(e, t, i, n);

                },

                undelegate: function (t, e, i) {

                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i);

                },

                hover: function (t, e) {

                    return this.on("mouseenter", t).on("mouseleave", e || t);

                },

            }),

            S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, i) {

                S.fn[i] = function (t, e) {

                    return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i);

                };

            }),

            /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g),

        on =

            ((S.proxy = function (t, e) {

                var i, n;

                if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), y(t)))

                    return (

                        (i = a.call(arguments, 2)),

                        ((n = function () {

                            return t.apply(e || this, i.concat(a.call(arguments)));

                        }).guid = t.guid = t.guid || S.guid++),

                        n

                    );

            }),

            (S.holdReady = function (t) {

                t ? S.readyWait++ : S.ready(!0);

            }),

            (S.isArray = Array.isArray),

            (S.parseJSON = JSON.parse),

            (S.nodeName = b),

            (S.isFunction = y),

            (S.isWindow = R),

            (S.camelCase = w),

            (S.type = q),

            (S.now = Date.now),

            (S.isNumeric = function (t) {

                var e = S.type(t);

                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));

            }),

            (S.trim = function (t) {

                return null == t ? "" : (t + "").replace(nn, "$1");

            }),

            "function" == typeof define &&

                define.amd &&

                define("jquery", [], function () {

                    return S;

                }),

            x.jQuery),

        rn = x.$;

    return (

        (S.noConflict = function (t) {

            return x.$ === S && (x.$ = rn), t && x.jQuery === S && (x.jQuery = on), S;

        }),

        void 0 === z && (x.jQuery = x.$ = S),

        S

    );

}),

    void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0),

    (function (e) {

        "use strict";

        "function" == typeof define && define.amd

            ? define(["jquery"], function (t) {

                  return e(t, window);

              })

            : "object" == typeof module && module.exports

            ? (module.exports = e(require("jquery"), window))

            : e(jQuery, window);

    })(function (a, n) {

        "use strict";

        function t(t) {

            return (

                0 <=

                (function (t, e) {

                    for (var i = /^(\d+)\.(\d+)\.(\d+)/, n = i.exec(t) || [], o = i.exec(e) || [], r = 1; r <= 3; r++) {

                        if (+o[r] < +n[r]) return 1;

                        if (+n[r] < +o[r]) return -1;

                    }

                    return 0;

                })(a.fn.jquery, t)

            );

        }

        function s(t, e) {

            var i = n.console;

            !a.migrateIsPatchEnabled(t) ||

                (a.migrateDeduplicateWarnings && h[e]) ||

                ((h[e] = !0), a.migrateWarnings.push(e + " [" + t + "]"), i && i.warn && !a.migrateMute && (i.warn("JQMIGRATE: " + e), a.migrateTrace) && i.trace && i.trace());

        }

        function e(t, e, i, n, o) {

            Object.defineProperty(t, e, {

                configurable: !0,

                enumerable: !0,

                get: function () {

                    return s(n, o), i;

                },

                set: function (t) {

                    s(n, o), (i = t);

                },

            });

        }

        function r(t, e, i, n, o) {

            var r = t[e];

            t[e] = function () {

                return o && s(n, o), (a.migrateIsPatchEnabled(n) ? i : r || a.noop).apply(this, arguments);

            };

        }

        function o(t, e, i, n, o) {

            if (!o) throw new Error("No warning message provided");

            r(t, e, i, n, o);

        }

        function i(t, e, i, n) {

            r(t, e, i, n);

        }

        function l(t) {

            return t.replace(/-([a-z])/g, function (t, e) {

                return e.toUpperCase();

            });

        }

        function c(t) {

            var e = n.document.implementation.createHTMLDocument("");

            return (e.body.innerHTML = t), e.body && e.body.innerHTML;

        }

        a.migrateVersion = "3.4.1";

        var u = Object.create(null),

            h =

                ((a.migrateDisablePatches = function () {

                    for (var t = 0; t < arguments.length; t++) u[arguments[t]] = !0;

                }),

                (a.migrateEnablePatches = function () {

                    for (var t = 0; t < arguments.length; t++) delete u[arguments[t]];

                }),

                (a.migrateIsPatchEnabled = function (t) {

                    return !u[t];

                }),

                n.console &&

                    n.console.log &&

                    ((a && t("3.0.0") && !t("5.0.0")) || n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"),

                    a.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),

                    n.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion)),

                {});

        (a.migrateDeduplicateWarnings = !0),

            (a.migrateWarnings = []),

            void 0 === a.migrateTrace && (a.migrateTrace = !0),

            (a.migrateReset = function () {

                (h = {}), (a.migrateWarnings.length = 0);

            }),

            "BackCompat" === n.document.compatMode && s("quirks", "jQuery is not compatible with Quirks Mode");

        var d,

            p,

            f,

            m = {},

            g = a.fn.init,

            v = a.find,

            y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,

            b = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,

            _ = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

        for (d in (i(

            a.fn,

            "init",

            function (t) {

                var e = Array.prototype.slice.call(arguments);

                return a.migrateIsPatchEnabled("selector-empty-id") && "string" == typeof t && "#" === t && (s("selector-empty-id", "jQuery( '#' ) is not a valid selector"), (e[0] = [])), g.apply(this, e);

            },

            "selector-empty-id"

        ),

        (a.fn.init.prototype = a.fn),

        i(

            a,

            "find",

            function (e) {

                var i = Array.prototype.slice.call(arguments);

                if ("string" == typeof e && y.test(e))

                    try {

                        n.document.querySelector(e);

                    } catch (t) {

                        e = e.replace(b, function (t, e, i, n) {

                            return "[" + e + i + '"' + n + '"]';

                        });

                        try {

                            n.document.querySelector(e), s("selector-hash", "Attribute selector with '#' must be quoted: " + i[0]), (i[0] = e);

                        } catch (e) {

                            s("selector-hash", "Attribute selector with '#' was not fixed: " + i[0]);

                        }

                    }

                return v.apply(this, i);

            },

            "selector-hash"

        ),

        v))

            Object.prototype.hasOwnProperty.call(v, d) && (a.find[d] = v[d]);

        o(

            a.fn,

            "size",

            function () {

                return this.length;

            },

            "size",

            "jQuery.fn.size() is deprecated and removed; use the .length property"

        ),

            o(

                a,

                "parseJSON",

                function () {

                    return JSON.parse.apply(null, arguments);

                },

                "parseJSON",

                "jQuery.parseJSON is deprecated; use JSON.parse"

            ),

            o(a, "holdReady", a.holdReady, "holdReady", "jQuery.holdReady is deprecated"),

            o(a, "unique", a.uniqueSort, "unique", "jQuery.unique is deprecated; use jQuery.uniqueSort"),

            e(a.expr, "filters", a.expr.pseudos, "expr-pre-pseudos", "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),

            e(a.expr, ":", a.expr.pseudos, "expr-pre-pseudos", "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),

            t("3.1.1") &&

                o(

                    a,

                    "trim",

                    function (t) {

                        return null == t ? "" : (t + "").replace(_, "$1");

                    },

                    "trim",

                    "jQuery.trim is deprecated; use String.prototype.trim"

                ),

            t("3.2.0") &&

                (o(

                    a,

                    "nodeName",

                    function (t, e) {

                        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();

                    },

                    "nodeName",

                    "jQuery.nodeName is deprecated"

                ),

                o(a, "isArray", Array.isArray, "isArray", "jQuery.isArray is deprecated; use Array.isArray")),

            t("3.3.0") &&

                (o(

                    a,

                    "isNumeric",

                    function (t) {

                        var e = typeof t;

                        return ("number" == e || "string" == e) && !isNaN(t - parseFloat(t));

                    },

                    "isNumeric",

                    "jQuery.isNumeric() is deprecated"

                ),

                a.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {

                    m["[object " + e + "]"] = e.toLowerCase();

                }),

                o(

                    a,

                    "type",

                    function (t) {

                        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? m[Object.prototype.toString.call(t)] || "object" : typeof t;

                    },

                    "type",

                    "jQuery.type is deprecated"

                ),

                o(

                    a,

                    "isFunction",

                    function (t) {

                        return "function" == typeof t;

                    },

                    "isFunction",

                    "jQuery.isFunction() is deprecated"

                ),

                o(

                    a,

                    "isWindow",

                    function (t) {

                        return null != t && t === t.window;

                    },

                    "isWindow",

                    "jQuery.isWindow() is deprecated"

                )),

            a.ajax &&

                ((p = a.ajax),

                (f = /(=)\?(?=&|$)|\?\?/),

                i(

                    a,

                    "ajax",

                    function () {

                        var t = p.apply(this, arguments);

                        return (

                            t.promise &&

                                (o(t, "success", t.done, "jqXHR-methods", "jQXHR.success is deprecated and removed"),

                                o(t, "error", t.fail, "jqXHR-methods", "jQXHR.error is deprecated and removed"),

                                o(t, "complete", t.always, "jqXHR-methods", "jQXHR.complete is deprecated and removed")),

                            t

                        );

                    },

                    "jqXHR-methods"

                ),

                t("4.0.0") ||

                    a.ajaxPrefilter("+json", function (t) {

                        !1 !== t.jsonp &&

                            (f.test(t.url) || ("string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && f.test(t.data))) &&

                            s("jsonp-promotion", "JSON-to-JSONP auto-promotion is deprecated");

                    }));

        var w = a.fn.removeAttr,

            x = a.fn.toggleClass,

            C = /\S+/g;

        i(

            a.fn,

            "removeAttr",

            function (t) {

                var i = this,

                    n = !1;

                return (

                    a.each(t.match(C), function (t, e) {

                        a.expr.match.bool.test(e) &&

                            i.each(function () {

                                if (!1 !== a(this).prop(e)) return !(n = !0);

                            }),

                            n && (s("removeAttr-bool", "jQuery.fn.removeAttr no longer sets boolean properties: " + e), i.prop(e, !1));

                    }),

                    w.apply(this, arguments)

                );

            },

            "removeAttr-bool"

        ),

            i(

                a.fn,

                "toggleClass",

                function (e) {

                    return void 0 !== e && "boolean" != typeof e

                        ? x.apply(this, arguments)

                        : (s("toggleClass-bool", "jQuery.fn.toggleClass( boolean ) is deprecated"),

                          this.each(function () {

                              var t = (this.getAttribute && this.getAttribute("class")) || "";

                              t && a.data(this, "__className__", t), this.setAttribute && this.setAttribute("class", (!t && !1 !== e && a.data(this, "__className__")) || "");

                          }));

                },

                "toggleClass-bool"

            );

        var T,

            E,

            S = !1,

            z = /^[a-z]/,

            R = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;

        a.swap &&

            a.each(["height", "width", "reliableMarginRight"], function (t, e) {

                var i = a.cssHooks[e] && a.cssHooks[e].get;

                i &&

                    (a.cssHooks[e].get = function () {

                        var t;

                        return (S = !0), (t = i.apply(this, arguments)), (S = !1), t;

                    });

            }),

            i(

                a,

                "swap",

                function (t, e, i, n) {

                    var o,

                        r = {};

                    for (o in (S || s("swap", "jQuery.swap() is undocumented and deprecated"), e)) (r[o] = t.style[o]), (t.style[o] = e[o]);

                    for (o in ((i = i.apply(t, n || [])), e)) t.style[o] = r[o];

                    return i;

                },

                "swap"

            ),

            t("3.4.0") &&

                "undefined" != typeof Proxy &&

                (a.cssProps = new Proxy(a.cssProps || {}, {

                    set: function () {

                        return s("cssProps", "jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments);

                    },

                })),

            t("4.0.0")

                ? ((E = {

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

                  }),

                  "undefined" != typeof Proxy

                      ? (a.cssNumber = new Proxy(E, {

                            get: function () {

                                return s("css-number", "jQuery.cssNumber is deprecated"), Reflect.get.apply(this, arguments);

                            },

                            set: function () {

                                return s("css-number", "jQuery.cssNumber is deprecated"), Reflect.set.apply(this, arguments);

                            },

                        }))

                      : (a.cssNumber = E))

                : (E = a.cssNumber),

            (T = a.fn.css),

            i(

                a.fn,

                "css",

                function (t, e) {

                    var i,

                        n = this;

                    return t && "object" == typeof t && !Array.isArray(t)

                        ? (a.each(t, function (t, e) {

                              a.fn.css.call(n, t, e);

                          }),

                          this)

                        : ("number" == typeof e && ((e = l(t)), (z.test((i = e)) && R.test(i[0].toUpperCase() + i.slice(1))) || E[e] || s("css-number", 'Number-typed values are deprecated for jQuery.fn.css( "' + t + '", value )')),

                          T.apply(this, arguments));

                },

                "css-number"

            );

        var k,

            A,

            I,

            O,

            j = a.data,

            N =

                (i(

                    a,

                    "data",

                    function (t, e, i) {

                        var n, o, r;

                        if (e && "object" == typeof e && 2 === arguments.length) {

                            for (r in ((n = a.hasData(t) && j.call(this, t)), (o = {}), e)) r !== l(r) ? (s("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + r), (n[r] = e[r])) : (o[r] = e[r]);

                            return j.call(this, t, o), e;

                        }

                        return e && "string" == typeof e && e !== l(e) && (n = a.hasData(t) && j.call(this, t)) && e in n

                            ? (s("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + e), 2 < arguments.length && (n[e] = i), n[e])

                            : j.apply(this, arguments);

                    },

                    "data-camelCase"

                ),

                a.fx &&

                    ((I = a.Tween.prototype.run),

                    (O = function (t) {

                        return t;

                    }),

                    i(

                        a.Tween.prototype,

                        "run",

                        function () {

                            1 < a.easing[this.easing].length && (s("easing-one-arg", "'jQuery.easing." + this.easing.toString() + "' should use only one argument"), (a.easing[this.easing] = O)), I.apply(this, arguments);

                        },

                        "easing-one-arg"

                    ),

                    (k = a.fx.interval),

                    (A = "jQuery.fx.interval is deprecated"),

                    n.requestAnimationFrame) &&

                    Object.defineProperty(a.fx, "interval", {

                        configurable: !0,

                        enumerable: !0,

                        get: function () {

                            return n.document.hidden || s("fx-interval", A), a.migrateIsPatchEnabled("fx-interval") && void 0 === k ? 13 : k;

                        },

                        set: function (t) {

                            s("fx-interval", A), (k = t);

                        },

                    }),

                a.fn.load),

            q = a.event.add,

            H = a.event.fix,

            L =

                ((a.event.props = []),

                (a.event.fixHooks = {}),

                e(a.event.props, "concat", a.event.props.concat, "event-old-patch", "jQuery.event.props.concat() is deprecated and removed"),

                i(

                    a.event,

                    "fix",

                    function (t) {

                        var e = t.type,

                            i = this.fixHooks[e],

                            n = a.event.props;

                        if (n.length) for (s("event-old-patch", "jQuery.event.props are deprecated and removed: " + n.join()); n.length; ) a.event.addProp(n.pop());

                        if (i && !i._migrated_ && ((i._migrated_ = !0), s("event-old-patch", "jQuery.event.fixHooks are deprecated and removed: " + e), (n = i.props)) && n.length) for (; n.length; ) a.event.addProp(n.pop());

                        return (e = H.call(this, t)), i && i.filter ? i.filter(e, t) : e;

                    },

                    "event-old-patch"

                ),

                i(

                    a.event,

                    "add",

                    function (t, e) {

                        return t === n && "load" === e && "complete" === n.document.readyState && s("load-after-event", "jQuery(window).on('load'...) called after load event occurred"), q.apply(this, arguments);

                    },

                    "load-after-event"

                ),

                a.each(["load", "unload", "error"], function (t, e) {

                    i(

                        a.fn,

                        e,

                        function () {

                            var t = Array.prototype.slice.call(arguments, 0);

                            return "load" === e && "string" == typeof t[0]

                                ? N.apply(this, t)

                                : (s("shorthand-removed-v3", "jQuery.fn." + e + "() is deprecated"), t.splice(0, 0, e), arguments.length ? this.on.apply(this, t) : (this.triggerHandler.apply(this, t), this));

                        },

                        "shorthand-removed-v3"

                    );

                }),

                a.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, i) {

                    o(

                        a.fn,

                        i,

                        function (t, e) {

                            return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i);

                        },

                        "shorthand-deprecated-v3",

                        "jQuery.fn." + i + "() event shorthand is deprecated"

                    );

                }),

                a(function () {

                    a(n.document).triggerHandler("ready");

                }),

                (a.event.special.ready = {

                    setup: function () {

                        this === n.document && s("ready-event", "'ready' event is deprecated");

                    },

                }),

                o(

                    a.fn,

                    "bind",

                    function (t, e, i) {

                        return this.on(t, null, e, i);

                    },

                    "pre-on-methods",

                    "jQuery.fn.bind() is deprecated"

                ),

                o(

                    a.fn,

                    "unbind",

                    function (t, e) {

                        return this.off(t, null, e);

                    },

                    "pre-on-methods",

                    "jQuery.fn.unbind() is deprecated"

                ),

                o(

                    a.fn,

                    "delegate",

                    function (t, e, i, n) {

                        return this.on(e, t, i, n);

                    },

                    "pre-on-methods",

                    "jQuery.fn.delegate() is deprecated"

                ),

                o(

                    a.fn,

                    "undelegate",

                    function (t, e, i) {

                        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i);

                    },

                    "pre-on-methods",

                    "jQuery.fn.undelegate() is deprecated"

                ),

                o(

                    a.fn,

                    "hover",

                    function (t, e) {

                        return this.on("mouseenter", t).on("mouseleave", e || t);

                    },

                    "pre-on-methods",

                    "jQuery.fn.hover() is deprecated"

                ),

                /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi);

        (a.UNSAFE_restoreLegacyHtmlPrefilter = function () {

            a.migrateEnablePatches("self-closed-tags");

        }),

            i(

                a,

                "htmlPrefilter",

                function (t) {

                    var e, i;

                    return (i = (e = t).replace(L, "<$1></$2>")) !== e && c(e) !== c(i) && s("self-closed-tags", "HTML tags must be properly nested and closed: " + e), t.replace(L, "<$1></$2>");

                },

                "self-closed-tags"

            ),

            a.migrateDisablePatches("self-closed-tags");

        var D,

            P,

            M,

            F = a.fn.offset;

        return (

            i(

                a.fn,

                "offset",

                function () {

                    var t = this[0];

                    return !t || (t.nodeType && t.getBoundingClientRect) ? F.apply(this, arguments) : (s("offset-valid-elem", "jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0);

                },

                "offset-valid-elem"

            ),

            a.ajax &&

                ((D = a.param),

                i(

                    a,

                    "param",

                    function (t, e) {

                        var i = a.ajaxSettings && a.ajaxSettings.traditional;

                        return void 0 === e && i && (s("param-ajax-traditional", "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), (e = i)), D.call(this, t, e);

                    },

                    "param-ajax-traditional"

                )),

            o(a.fn, "andSelf", a.fn.addBack, "andSelf", "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),

            a.Deferred &&

                ((P = a.Deferred),

                (M = [

                    ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],

                    ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],

                    ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")],

                ]),

                i(

                    a,

                    "Deferred",

                    function (t) {

                        function e() {

                            var o = arguments;

                            return a

                                .Deferred(function (n) {

                                    a.each(M, function (t, e) {

                                        var i = "function" == typeof o[t] && o[t];

                                        r[e[1]](function () {

                                            var t = i && i.apply(this, arguments);

                                            t && "function" == typeof t.promise ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[e[0] + "With"](this === s ? n.promise() : this, i ? [t] : arguments);

                                        });

                                    }),

                                        (o = null);

                                })

                                .promise();

                        }

                        var r = P(),

                            s = r.promise();

                        return o(r, "pipe", e, "deferred-pipe", "deferred.pipe() is deprecated"), o(s, "pipe", e, "deferred-pipe", "deferred.pipe() is deprecated"), t && t.call(r, r), r;

                    },

                    "deferred-pipe"

                ),

                (a.Deferred.exceptionHook = P.exceptionHook)),

            a

        );

    }),

    (function (t, e) {

        "object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : ((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e());

    })(this, function () {

        "use strict";

        function z(t, e) {

            return (e && e + "::" + Lt++) || t.uidEvent || Lt++;

        }

        function v(t) {

            var e = z(t);

            return (t.uidEvent = e), (jt[e] = jt[e] || {}), jt[e];

        }

        function R(t, e, i = null) {

            return Object.values(t).find((t) => t.callable === e && t.delegationSelector === i);

        }

        function N(t, e, i) {

            var n = "string" == typeof e,

                i = ((e = (!n && e) || i), F(t));

            return [n, e, (i = Pt.has(i) ? i : t)];

        }

        function q(n, o, r, s, a) {

            if ("string" == typeof o && n) {

                let [t, e, i] = N(o, r, s);

                if (o in Dt) {

                    const z = (e) =>

                        function (t) {

                            if (!t.relatedTarget || (t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget))) return e.call(this, t);

                        };

                    e = z(e);

                }

                var l,

                    c,

                    u,

                    h,

                    d,

                    p = R((s = (s = v(n))[i] || (s[i] = {})), e, t ? r : null);

                if (p) return (p.oneOff = p.oneOff && a);

                (p = z(e, o.replace(At, ""))),

                    ((o = t

                        ? ((u = n),

                          (h = r),

                          (d = e),

                          function e(i) {

                              var n = u.querySelectorAll(h);

                              for (let t = i.target; t && t !== this; t = t.parentNode) for (const o of n) if (o === t) return W(i, { delegateTarget: t }), e.oneOff && f.off(u, i.type, h, d), d.apply(t, [i]);

                          })

                        : ((l = n),

                          (c = e),

                          function t(e) {

                              return W(e, { delegateTarget: l }), t.oneOff && f.off(l, e.type, c), c.apply(l, [e]);

                          })).delegationSelector = t ? r : null),

                    (o.callable = e),

                    (o.oneOff = a),

                    (s[(o.uidEvent = p)] = o),

                    n.addEventListener(i, o, t);

            }

        }

        function H(t, e, i, n, o) {

            (n = R(e[i], n, o)) && (t.removeEventListener(i, n, Boolean(o)), delete e[i][n.uidEvent]);

        }

        function F(t) {

            return (t = t.replace(It, "")), Dt[t] || t;

        }

        function W(t, e = {}) {

            for (const [i, n] of Object.entries(e))

                try {

                    t[i] = n;

                } catch (e) {

                    Object.defineProperty(t, i, { configurable: !0, get: () => n });

                }

            return t;

        }

        function $(e) {

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

        function B(t) {

            return t.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase());

        }

        function g(t) {

            return t ? (t.nodeName || "").toLowerCase() : null;

        }

        function b(t) {

            var e;

            return null == t ? window : "[object Window]" !== t.toString() ? ((e = t.ownerDocument) && e.defaultView) || window : t;

        }

        function y(t) {

            return t instanceof b(t).Element || t instanceof Element;

        }

        function _(t) {

            return t instanceof b(t).HTMLElement || t instanceof HTMLElement;

        }

        function Q(t) {

            return "undefined" != typeof ShadowRoot && (t instanceof b(t).ShadowRoot || t instanceof ShadowRoot);

        }

        function k(t) {

            return t.split("-")[0];

        }

        function V() {

            var t = navigator.userAgentData;

            return null != t && t.brands && Array.isArray(t.brands)

                ? t.brands

                      .map(function (t) {

                          return t.brand + "/" + t.version;

                      })

                      .join(" ")

                : navigator.userAgent;

        }

        function U() {

            return !/^((?!chrome|android).)*safari/i.test(V());

        }

        function w(t, e, i) {

            void 0 === e && (e = !1), void 0 === i && (i = !1);

            var n = t.getBoundingClientRect(),

                o = 1,

                r = 1;

            return (

                e && _(t) && ((o = (0 < t.offsetWidth && we(n.width) / t.offsetWidth) || 1), (r = (0 < t.offsetHeight && we(n.height) / t.offsetHeight) || 1)),

                (e = (y(t) ? b(t) : window).visualViewport),

                (t = !U() && i),

                (i = (n.left + (t && e ? e.offsetLeft : 0)) / o),

                (t = (n.top + (t && e ? e.offsetTop : 0)) / r),

                { width: (e = n.width / o), height: (o = n.height / r), top: t, right: i + e, bottom: t + o, left: i, x: i, y: t }

            );

        }

        function Y(t) {

            var e = w(t),

                i = t.offsetWidth,

                n = t.offsetHeight;

            return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), { x: t.offsetLeft, y: t.offsetTop, width: i, height: n };

        }

        function X(t, e) {

            var i = e.getRootNode && e.getRootNode();

            if (t.contains(e)) return !0;

            if (i && Q(i)) {

                var n = e;

                do {

                    if (n && t.isSameNode(n)) return !0;

                } while ((n = n.parentNode || n.host));

            }

            return !1;

        }

        function x(t) {

            return b(t).getComputedStyle(t);

        }

        function C(t) {

            return ((y(t) ? t.ownerDocument : t.document) || window.document).documentElement;

        }

        function G(t) {

            return "html" === g(t) ? t : t.assignedSlot || t.parentNode || (Q(t) ? t.host : null) || C(t);

        }

        function Z(t) {

            return _(t) && "fixed" !== x(t).position ? t.offsetParent : null;

        }

        function K(t) {

            for (var e, i = b(t), n = Z(t); n && ((e = n), 0 <= ["table", "td", "th"].indexOf(g(e))) && "static" === x(n).position; ) n = Z(n);

            return (

                ((!n || ("html" !== g(n) && ("body" !== g(n) || "static" !== x(n).position))) &&

                    (n ||

                        (function (t) {

                            var e = /firefox/i.test(V());

                            if (!/Trident/i.test(V()) || !_(t) || "fixed" !== x(t).position) {

                                var i = G(t);

                                for (Q(i) && (i = i.host); _(i) && ["html", "body"].indexOf(g(i)) < 0; ) {

                                    var n = x(i);

                                    if (

                                        "none" !== n.transform ||

                                        "none" !== n.perspective ||

                                        "paint" === n.contain ||

                                        -1 !== ["transform", "perspective"].indexOf(n.willChange) ||

                                        (e && "filter" === n.willChange) ||

                                        (e && n.filter && "none" !== n.filter)

                                    )

                                        return i;

                                    i = i.parentNode;

                                }

                            }

                            return null;

                        })(t))) ||

                i

            );

        }

        function J(t) {

            return 0 <= ["top", "bottom"].indexOf(t) ? "x" : "y";

        }

        function tt(t, e, i) {

            return S(t, _e(e, i));

        }

        function et(t) {

            return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);

        }

        function it(i, t) {

            return t.reduce(function (t, e) {

                return (t[e] = i), t;

            }, {});

        }

        function A(t) {

            return t.split("-")[1];

        }

        function nt(t) {

            var e = t.popper,

                i = t.popperRect,

                n = t.placement,

                o = t.variation,

                r = t.offsets,

                s = t.position,

                a = t.gpuAcceleration,

                l = t.adaptive,

                c = t.roundOffsets;

            (t = t.isFixed), (v = void 0 === (v = r.x) ? 0 : v);

            y = void 0 === (y = r.y) ? 0 : y;

            var u = "function" == typeof c ? c({ x: v, y: y }) : { x: v, y: y },

                h = ((v = u.x), (y = u.y), (u = r.hasOwnProperty("x")), (r = r.hasOwnProperty("y")), D),

                d = O,

                p = window;

            l &&

                ((m = "clientHeight"),

                (f = "clientWidth"),

                (g = K(e)) === b(e) && "static" !== x((g = C(e))).position && "absolute" === s && ((m = "scrollHeight"), (f = "scrollWidth")),

                (n !== O && ((n !== D && n !== L) || o !== T)) || ((d = j), (y = (y - ((t && g === p && p.visualViewport ? p.visualViewport.height : g[m]) - i.height)) * (a ? 1 : -1))),

                (n !== D && ((n !== O && n !== j) || o !== T)) || ((h = L), (v = (v - ((t && g === p && p.visualViewport ? p.visualViewport.width : g[f]) - i.width)) * (a ? 1 : -1))));

            var f,

                m = Object.assign({ position: s }, l && Ce),

                g = !0 === c ? ((n = { x: v, y: y }), (o = b(e)), (t = n.y), (o = o.devicePixelRatio || 1), { x: we(n.x * o) / o || 0, y: we(t * o) / o || 0 }) : { x: v, y: y },

                v = g.x,

                y = g.y;

            return a

                ? Object.assign({}, m, (((f = {})[d] = r ? "0" : ""), (f[h] = u ? "0" : ""), (f.transform = (p.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + y + "px)" : "translate3d(" + v + "px, " + y + "px, 0)"), f))

                : Object.assign({}, m, (((i = {})[d] = r ? y + "px" : ""), (i[h] = u ? v + "px" : ""), (i.transform = ""), i));

        }

        function ot(t) {

            return t.replace(/left|right|bottom|top/g, function (t) {

                return ke[t];

            });

        }

        function rt(t) {

            return t.replace(/start|end/g, function (t) {

                return Ae[t];

            });

        }

        function st(t) {

            return { scrollLeft: (t = b(t)).pageXOffset, scrollTop: t.pageYOffset };

        }

        function at(t) {

            return w(C(t)).left + st(t).scrollLeft;

        }

        function lt(t) {

            var e = (t = x(t)).overflow,

                i = t.overflowX;

            return (t = t.overflowY), /auto|scroll|overlay|hidden/.test(e + t + i);

        }

        function ct(t, e) {

            void 0 === e && (e = []);

            t =

                (n = (function t(e) {

                    return 0 <= ["html", "body", "#document"].indexOf(g(e)) ? e.ownerDocument.body : _(e) && lt(e) ? e : t(G(e));

                })(t)) === (null == (t = t.ownerDocument) ? void 0 : t.body);

            var i = b(n),

                i = t ? [i].concat(i.visualViewport || [], lt(n) ? n : []) : n,

                n = e.concat(i);

            return t ? n : n.concat(ct(G(i)));

        }

        function ut(t) {

            return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });

        }

        function ht(t, e, i) {

            return e === le

                ? ut(

                      ((o = i),

                      (s = b((n = t))),

                      (a = C(n)),

                      (s = s.visualViewport),

                      (l = a.clientWidth),

                      (a = a.clientHeight),

                      (u = c = 0),

                      s && ((l = s.width), (a = s.height), (r = U()) || (!r && "fixed" === o)) && ((c = s.offsetLeft), (u = s.offsetTop)),

                      { width: l, height: a, x: c + at(n), y: u })

                  )

                : y(e)

                ? (((o = w((r = e), !1, "fixed" === i)).top = o.top + r.clientTop),

                  (o.left = o.left + r.clientLeft),

                  (o.bottom = o.top + r.clientHeight),

                  (o.right = o.left + r.clientWidth),

                  (o.width = r.clientWidth),

                  (o.height = r.clientHeight),

                  (o.x = o.left),

                  (o.y = o.top),

                  o)

                : ut(

                      ((s = C(t)),

                      (l = C(s)),

                      (a = st(s)),

                      (c = null == (c = s.ownerDocument) ? void 0 : c.body),

                      (n = S(l.scrollWidth, l.clientWidth, c ? c.scrollWidth : 0, c ? c.clientWidth : 0)),

                      (u = S(l.scrollHeight, l.clientHeight, c ? c.scrollHeight : 0, c ? c.clientHeight : 0)),

                      (s = -a.scrollLeft + at(s)),

                      (a = -a.scrollTop),

                      "rtl" === x(c || l).direction && (s += S(l.clientWidth, c ? c.clientWidth : 0) - n),

                      { width: n, height: u, x: s, y: a })

                  );

            var n, o, r, s, a, l, c, u;

        }

        function dt(t) {

            var e,

                i = t.reference,

                n = t.element,

                o = (t = t.placement) ? k(t) : null,

                r = ((t = t ? A(t) : null), i.x + i.width / 2 - n.width / 2),

                s = i.y + i.height / 2 - n.height / 2;

            switch (o) {

                case O:

                    e = { x: r, y: i.y - n.height };

                    break;

                case j:

                    e = { x: r, y: i.y + i.height };

                    break;

                case L:

                    e = { x: i.x + i.width, y: s };

                    break;

                case D:

                    e = { x: i.x - n.width, y: s };

                    break;

                default:

                    e = { x: i.x, y: i.y };

            }

            var a = o ? J(o) : null;

            if (null != a) {

                var l = "y" === a ? "height" : "width";

                switch (t) {

                    case M:

                        e[a] = e[a] - (i[l] / 2 - n[l] / 2);

                        break;

                    case T:

                        e[a] = e[a] + (i[l] / 2 - n[l] / 2);

                }

            }

            return e;

        }

        function I(t, e) {

            var i,

                n,

                o,

                r,

                s,

                a,

                l = void 0 === (l = (e = void 0 === e ? {} : e).placement) ? t.placement : l,

                c = void 0 === (c = e.strategy) ? t.strategy : c,

                u = void 0 === (u = e.boundary) ? ae : u,

                h = ((m = void 0 === (m = e.rootBoundary) ? le : m), e.elementContext),

                d = ((h = void 0 === h ? E : h), e.altBoundary),

                p = ((d = void 0 !== d && d), (e = et("number" != typeof (e = void 0 === (e = e.padding) ? 0 : e) ? e : it(e, P))), t.rects.popper),

                f =

                    ((d = t.elements[d ? (h === E ? ce : E) : h]),

                    (i = y(d) ? d : d.contextElement || C(t.elements.popper)),

                    (d = m),

                    (n = c),

                    (r =

                        "clippingParents" === (m = u)

                            ? ((s = ct(G((r = i)))),

                              y((o = 0 <= ["absolute", "fixed"].indexOf(x(r).position) && _(r) ? K(r) : r))

                                  ? s.filter(function (t) {

                                        return y(t) && X(t, o) && "body" !== g(t);

                                    })

                                  : [])

                            : [].concat(m)),

                    (m = (s = [].concat(r, [d]))[0]),

                    ((d = s.reduce(function (t, e) {

                        return (e = ht(i, e, n)), (t.top = S(e.top, t.top)), (t.right = _e(e.right, t.right)), (t.bottom = _e(e.bottom, t.bottom)), (t.left = S(e.left, t.left)), t;

                    }, ht(i, m, n))).width = d.right - d.left),

                    (d.height = d.bottom - d.top),

                    (d.x = d.left),

                    (d.y = d.top),

                    (c = d),

                    (m = dt({ reference: (u = w(t.elements.reference)), element: p, strategy: "absolute", placement: l })),

                    (d = ut(Object.assign({}, p, m))),

                    { top: c.top - (p = h === E ? d : u).top + e.top, bottom: p.bottom - c.bottom + e.bottom, left: c.left - p.left + e.left, right: p.right - c.right + e.right }),

                m = t.modifiersData.offset;

            return (

                h === E &&

                    m &&

                    ((a = m[l]),

                    Object.keys(f).forEach(function (t) {

                        var e = 0 <= [L, j].indexOf(t) ? 1 : -1,

                            i = 0 <= [O, j].indexOf(t) ? "y" : "x";

                        f[t] += a[i] * e;

                    })),

                f

            );

        }

        function pt(t, e, i) {

            return { top: t.top - e.height - (i = void 0 === i ? { x: 0, y: 0 } : i).y, right: t.right - e.width + i.x, bottom: t.bottom - e.height + i.y, left: t.left - e.width - i.x };

        }

        function ft(e) {

            return [O, L, j, D].some(function (t) {

                return 0 <= e[t];

            });

        }

        function mt() {

            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];

            return !e.some(function (t) {

                return !(t && "function" == typeof t.getBoundingClientRect);

            });

        }

        function gt(t) {

            var e = (t = void 0 === t ? {} : t).defaultModifiers,

                h = void 0 === e ? [] : e,

                m = void 0 === (e = t.defaultOptions) ? Pe : e;

            return function (a, l, e) {

                function c() {

                    u.forEach(function (t) {

                        return t();

                    }),

                        (u = []);

                }

                void 0 === e && (e = m);

                var i,

                    n,

                    d = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Pe, m), modifiersData: {}, elements: { reference: a, popper: l }, attributes: {}, styles: {} },

                    u = [],

                    p = !1,

                    f = {

                        state: d,

                        setOptions: function (t) {

                            var e, i, n, o, r, s;

                            return (

                                (t = "function" == typeof t ? t(d.options) : t),

                                c(),

                                (d.options = Object.assign({}, m, d.options, t)),

                                (d.scrollParents = { reference: y(a) ? ct(a) : a.contextElement ? ct(a.contextElement) : [], popper: ct(l) }),

                                (t = [].concat(h, d.options.modifiers)),

                                (r = t.reduce(function (t, e) {

                                    var i = t[e.name];

                                    return (t[e.name] = i ? Object.assign({}, i, e, { options: Object.assign({}, i.options, e.options), data: Object.assign({}, i.data, e.data) }) : e), t;

                                }, {})),

                                (e = Object.keys(r).map(function (t) {

                                    return r[t];

                                })),

                                (i = new Map()),

                                (n = new Set()),

                                (o = []),

                                e.forEach(function (t) {

                                    i.set(t.name, t);

                                }),

                                e.forEach(function (t) {

                                    n.has(t.name) ||

                                        (function e(t) {

                                            n.add(t.name),

                                                [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {

                                                    n.has(t) || ((t = i.get(t)) && e(t));

                                                }),

                                                o.push(t);

                                        })(t);

                                }),

                                (s = o),

                                (t = ye.reduce(function (t, e) {

                                    return t.concat(

                                        s.filter(function (t) {

                                            return t.phase === e;

                                        })

                                    );

                                }, [])),

                                (d.orderedModifiers = t.filter(function (t) {

                                    return t.enabled;

                                })),

                                d.orderedModifiers.forEach(function (t) {

                                    var e = t.name,

                                        i = t.options;

                                    "function" == typeof (t = t.effect) && ((t = t({ state: d, name: e, instance: f, options: void 0 === i ? {} : i })), u.push(t || function () {}));

                                }),

                                f.update()

                            );

                        },

                        forceUpdate: function () {

                            if (!p) {

                                var t = d.elements,

                                    e = t.reference;

                                if (mt(e, (t = t.popper))) {

                                    (d.rects = {

                                        reference:

                                            ((s = K(t)),

                                            (a = "fixed" === d.options.strategy),

                                            (l = _(s)),

                                            (h = _(s) && ((u = (h = s).getBoundingClientRect()), (c = we(u.width) / h.offsetWidth || 1), (u = we(u.height) / h.offsetHeight || 1), 1 !== c || 1 !== u)),

                                            (c = C(s)),

                                            (u = w(e, h, a)),

                                            (e = { scrollLeft: 0, scrollTop: 0 }),

                                            (h = { x: 0, y: 0 }),

                                            (!l && a) ||

                                                (("body" === g(s) && !lt(c)) || (e = (l = s) !== b(l) && _(l) ? { scrollLeft: l.scrollLeft, scrollTop: l.scrollTop } : st(l)),

                                                _(s) ? (((h = w(s, !0)).x += s.clientLeft), (h.y += s.clientTop)) : c && (h.x = at(c))),

                                            { x: u.left + e.scrollLeft - h.x, y: u.top + e.scrollTop - h.y, width: u.width, height: u.height }),

                                        popper: Y(t),

                                    }),

                                        (d.reset = !1),

                                        (d.placement = d.options.placement),

                                        d.orderedModifiers.forEach(function (t) {

                                            return (d.modifiersData[t.name] = Object.assign({}, t.data));

                                        });

                                    for (var i, n, o, r = 0; r < d.orderedModifiers.length; r++)

                                        !0 !== d.reset

                                            ? ((i = (o = d.orderedModifiers[r]).fn), (n = o.options), (o = o.name), "function" == typeof i && (d = i({ state: d, options: void 0 === n ? {} : n, name: o, instance: f }) || d))

                                            : ((d.reset = !1), (r = -1));

                                }

                            }

                            var s, a, l, c, u, h;

                        },

                        update:

                            ((i = function () {

                                return new Promise(function (t) {

                                    f.forceUpdate(), t(d);

                                });

                            }),

                            function () {

                                return (n =

                                    n ||

                                    new Promise(function (t) {

                                        Promise.resolve().then(function () {

                                            (n = void 0), t(i());

                                        });

                                    }));

                            }),

                        destroy: function () {

                            c(), (p = !0);

                        },

                    };

                return (

                    mt(a, l) &&

                        f.setOptions(e).then(function (t) {

                            !p && e.onFirstUpdate && e.onFirstUpdate(t);

                        }),

                    f

                );

            };

        }

        const n = new Map(),

            vt = {

                set(t, e, i) {

                    n.has(t) || n.set(t, new Map()), (t = n.get(t)).has(e) || 0 === t.size ? t.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(t.keys())[0]}.`);

                },

                get: (t, e) => (n.has(t) && n.get(t).get(e)) || null,

                remove(t, e) {

                    var i;

                    n.has(t) && ((i = n.get(t)).delete(e), 0 === i.size) && n.delete(t);

                },

            },

            yt = "transitionend",

            bt = (t) => (t && window.CSS && window.CSS.escape ? t.replace(/#([^\s"#']+)/g, (t, e) => "#" + CSS.escape(e)) : t),

            _t = (t) => {

                t.dispatchEvent(new Event(yt));

            },

            s = (t) => !(!t || "object" != typeof t) && void 0 !== (t = void 0 !== t.jquery ? t[0] : t).nodeType,

            o = (t) => (s(t) ? (t.jquery ? t[0] : t) : "string" == typeof t && 0 < t.length ? document.querySelector(bt(t)) : null),

            r = (t) => {

                if (!s(t) || 0 === t.getClientRects().length) return !1;

                const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),

                    i = t.closest("details:not([open])");

                if (i && i !== t) {

                    const e = t.closest("summary");

                    if (e && e.parentNode !== i) return !1;

                    if (null === e) return !1;

                }

                return e;

            },

            a = (t) => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),

            wt = (t) => {

                var e;

                return document.documentElement.attachShadow ? ("function" == typeof t.getRootNode ? ((e = t.getRootNode()) instanceof ShadowRoot ? e : null) : t instanceof ShadowRoot ? t : t.parentNode ? wt(t.parentNode) : null) : null;

            },

            xt = () => {},

            Ct = (t) => {

                t.offsetHeight;

            },

            Tt = () => (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null),

            Et = [],

            l = () => "rtl" === document.documentElement.dir,

            t = (n) => {

                var t = () => {

                    const t = Tt();

                    if (t) {

                        const e = n.NAME,

                            i = t.fn[e];

                        (t.fn[e] = n.jQueryInterface), (t.fn[e].Constructor = n), (t.fn[e].noConflict = () => ((t.fn[e] = i), n.jQueryInterface));

                    }

                };

                "loading" === document.readyState

                    ? (Et.length ||

                          document.addEventListener("DOMContentLoaded", () => {

                              for (const t of Et) t();

                          }),

                      Et.push(t))

                    : t();

            },

            c = (t, e = [], i = t) => ("function" == typeof t ? t(...e) : i),

            St = (i, o, t = !0) => {

                if (t) {

                    t =

                        (() => {

                            if (!o) return 0;

                            let { transitionDuration: t, transitionDelay: e } = window.getComputedStyle(o);

                            var i = Number.parseFloat(t),

                                n = Number.parseFloat(e);

                            return i || n ? ((t = t.split(",")[0]), (e = e.split(",")[0]), 1e3 * (Number.parseFloat(t) + Number.parseFloat(e))) : 0;

                        })() + 5;

                    let e = !1;

                    const n = ({ target: t }) => {

                        t === o && ((e = !0), o.removeEventListener(yt, n), c(i));

                    };

                    o.addEventListener(yt, n),

                        setTimeout(() => {

                            e || _t(o);

                        }, t);

                } else c(i);

            },

            kt = (t, e, i, n) => {

                var o = t.length;

                let r = t.indexOf(e);

                return -1 === r ? (!i && n ? t[o - 1] : t[0]) : ((r += i ? 1 : -1), n && (r = (r + o) % o), t[Math.max(0, Math.min(r, o - 1))]);

            },

            At = /[^.]*(?=\..*)\.|.*/,

            It = /\..*/,

            Ot = /::\d+$/,

            jt = {};

        let Lt = 1;

        const Dt = { mouseenter: "mouseover", mouseleave: "mouseout" },

            Pt = new Set([

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

            ]),

            f = {

                on(t, e, i, n) {

                    q(t, e, i, n, !1);

                },

                one(t, e, i, n) {

                    q(t, e, i, n, !0);

                },

                off(t, e, i, n) {

                    if ("string" == typeof e && t) {

                        var [n, o, r] = N(e, i, n),

                            s = r !== e,

                            a = v(t),

                            l = a[r] || {},

                            c = e.startsWith(".");

                        if (void 0 === o) {

                            if (c)

                                for (const v of Object.keys(a)) {

                                    var u = void 0,

                                        h = void 0,

                                        d = t,

                                        p = a,

                                        f = v,

                                        m = e.slice(1),

                                        g = p[f] || {};

                                    for ([u, h] of Object.entries(g)) u.includes(m) && H(d, p, f, h.callable, h.delegationSelector);

                                }

                            for (const [v, N] of Object.entries(l)) {

                                const i = v.replace(Ot, "");

                                (s && !e.includes(i)) || H(t, a, r, N.callable, N.delegationSelector);

                            }

                        } else Object.keys(l).length && H(t, a, r, o, n ? i : null);

                    }

                },

                trigger(t, e, i) {

                    if ("string" != typeof e || !t) return null;

                    var n = Tt();

                    let o = null,

                        r = !0,

                        s = !0,

                        a = !1;

                    return (

                        e !== F(e) && n && ((o = n.Event(e, i)), n(t).trigger(o), (r = !o.isPropagationStopped()), (s = !o.isImmediatePropagationStopped()), (a = o.isDefaultPrevented())),

                        (n = W(new Event(e, { bubbles: r, cancelable: !0 }), i)),

                        a && n.preventDefault(),

                        s && t.dispatchEvent(n),

                        n.defaultPrevented && o && o.preventDefault(),

                        n

                    );

                },

            },

            u = {

                setDataAttribute(t, e, i) {

                    t.setAttribute("data-bs-" + B(e), i);

                },

                removeDataAttribute(t, e) {

                    t.removeAttribute("data-bs-" + B(e));

                },

                getDataAttributes(e) {

                    if (!e) return {};

                    var i = {};

                    for (const n of Object.keys(e.dataset).filter((t) => t.startsWith("bs") && !t.startsWith("bsConfig"))) {

                        let t = n.replace(/^bs/, "");

                        i[(t = t.charAt(0).toLowerCase() + t.slice(1, t.length))] = $(e.dataset[n]);

                    }

                    return i;

                },

                getDataAttribute: (t, e) => $(t.getAttribute("data-bs-" + B(e))),

            };

        class Mt {

            static get Default() {

                return {};

            }

            static get DefaultType() {

                return {};

            }

            static get NAME() {

                throw new Error('You have to implement the static method "NAME", for each component!');

            }

            _getConfig(t) {

                return (t = this._mergeConfigObj(t)), (t = this._configAfterMerge(t)), this._typeCheckConfig(t), t;

            }

            _configAfterMerge(t) {

                return t;

            }

            _mergeConfigObj(t, e) {

                var i = s(e) ? u.getDataAttribute(e, "config") : {};

                return { ...this.constructor.Default, ...("object" == typeof i ? i : {}), ...(s(e) ? u.getDataAttributes(e) : {}), ...("object" == typeof t ? t : {}) };

            }

            _typeCheckConfig(t, e = this.constructor.DefaultType) {

                for (var [i, n] of Object.entries(e)) {

                    const e = t[i],

                        r = s(e)

                            ? "element"

                            : null == (o = e)

                            ? "" + o

                            : Object.prototype.toString

                                  .call(o)

                                  .match(/\s([a-z]+)/i)[1]

                                  .toLowerCase();

                    if (!new RegExp(n).test(r)) throw new TypeError(this.constructor.NAME.toUpperCase() + `: Option "${i}" provided type "${r}" but expected type "${n}".`);

                }

                var o;

            }

        }

        class e extends Mt {

            constructor(t, e) {

                super(), (t = o(t)) && ((this._element = t), (this._config = this._getConfig(e)), vt.set(this._element, this.constructor.DATA_KEY, this));

            }

            dispose() {

                vt.remove(this._element, this.constructor.DATA_KEY), f.off(this._element, this.constructor.EVENT_KEY);

                for (const t of Object.getOwnPropertyNames(this)) this[t] = null;

            }

            _queueCallback(t, e, i = !0) {

                St(t, e, i);

            }

            _getConfig(t) {

                return (t = this._mergeConfigObj(t, this._element)), (t = this._configAfterMerge(t)), this._typeCheckConfig(t), t;

            }

            static getInstance(t) {

                return vt.get(o(t), this.DATA_KEY);

            }

            static getOrCreateInstance(t, e = {}) {

                return this.getInstance(t) || new this(t, "object" == typeof e ? e : null);

            }

            static get VERSION() {

                return "5.3.3";

            }

            static get DATA_KEY() {

                return "bs." + this.NAME;

            }

            static get EVENT_KEY() {

                return "." + this.DATA_KEY;

            }

            static eventName(t) {

                return "" + t + this.EVENT_KEY;

            }

        }

        const zt = (e) => {

                let i = e.getAttribute("data-bs-target");

                if (!i || "#" === i) {

                    let t = e.getAttribute("href");

                    if (!t || (!t.includes("#") && !t.startsWith("."))) return null;

                    t.includes("#") && !t.startsWith("#") && (t = "#" + t.split("#")[1]), (i = t && "#" !== t ? t.trim() : null);

                }

                return i

                    ? i

                          .split(",")

                          .map((t) => bt(t))

                          .join(",")

                    : null;

            },

            h = {

                find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),

                findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),

                children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),

                parents(t, e) {

                    var i = [];

                    let n = t.parentNode.closest(e);

                    for (; n; ) i.push(n), (n = n.parentNode.closest(e));

                    return i;

                },

                prev(t, e) {

                    let i = t.previousElementSibling;

                    for (; i; ) {

                        if (i.matches(e)) return [i];

                        i = i.previousElementSibling;

                    }

                    return [];

                },

                next(t, e) {

                    let i = t.nextElementSibling;

                    for (; i; ) {

                        if (i.matches(e)) return [i];

                        i = i.nextElementSibling;

                    }

                    return [];

                },

                focusableChildren(t) {

                    var e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t) => t + ':not([tabindex^="-"])').join(",");

                    return this.find(e, t).filter((t) => !a(t) && r(t));

                },

                getSelectorFromElement: (t) => ((t = zt(t)) && h.findOne(t) ? t : null),

                getElementFromSelector: (t) => ((t = zt(t)) ? h.findOne(t) : null),

                getMultipleElementsFromSelector: (t) => ((t = zt(t)) ? h.find(t) : []),

            },

            Rt = (e, i = "hide") => {

                const t = "click.dismiss" + e.EVENT_KEY,

                    n = e.NAME;

                f.on(document, t, `[data-bs-dismiss="${n}"]`, function (t) {

                    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), a(this) || ((t = h.getElementFromSelector(this) || this.closest("." + n)), e.getOrCreateInstance(t)[i]());

                });

            };

        class Nt extends e {

            static get NAME() {

                return "alert";

            }

            close() {

                var t;

                f.trigger(this._element, "close.bs.alert").defaultPrevented || (this._element.classList.remove("show"), (t = this._element.classList.contains("fade")), this._queueCallback(() => this._destroyElement(), this._element, t));

            }

            _destroyElement() {

                this._element.remove(), f.trigger(this._element, "closed.bs.alert"), this.dispose();

            }

            static jQueryInterface(e) {

                return this.each(function () {

                    var t = Nt.getOrCreateInstance(this);

                    if ("string" == typeof e) {

                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);

                        t[e](this);

                    }

                });

            }

        }

        Rt(Nt, "close"), t(Nt);

        const qt = '[data-bs-toggle="button"]';

        class Ht extends e {

            static get NAME() {

                return "button";

            }

            toggle() {

                this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));

            }

            static jQueryInterface(e) {

                return this.each(function () {

                    var t = Ht.getOrCreateInstance(this);

                    "toggle" === e && t[e]();

                });

            }

        }

        f.on(document, "click.bs.button.data-api", qt, (t) => {

            t.preventDefault(), (t = t.target.closest(qt)), Ht.getOrCreateInstance(t).toggle();

        }),

            t(Ht);

        const Ft = { endCallback: null, leftCallback: null, rightCallback: null },

            Wt = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };

        class $t extends Mt {

            constructor(t, e) {

                super(), (this._element = t) && $t.isSupported() && ((this._config = this._getConfig(e)), (this._deltaX = 0), (this._supportPointerEvents = Boolean(window.PointerEvent)), this._initEvents());

            }

            static get Default() {

                return Ft;

            }

            static get DefaultType() {

                return Wt;

            }

            static get NAME() {

                return "swipe";

            }

            dispose() {

                f.off(this._element, ".bs.swipe");

            }

            _start(t) {

                this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : (this._deltaX = t.touches[0].clientX);

            }

            _end(t) {

                this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), c(this._config.endCallback);

            }

            _move(t) {

                this._deltaX = t.touches && 1 < t.touches.length ? 0 : t.touches[0].clientX - this._deltaX;

            }

            _handleSwipe() {

                var t = Math.abs(this._deltaX);

                t <= 40 || ((t /= this._deltaX), (this._deltaX = 0), t && c(0 < t ? this._config.rightCallback : this._config.leftCallback));

            }

            _initEvents() {

                this._supportPointerEvents

                    ? (f.on(this._element, "pointerdown.bs.swipe", (t) => this._start(t)), f.on(this._element, "pointerup.bs.swipe", (t) => this._end(t)), this._element.classList.add("pointer-event"))

                    : (f.on(this._element, "touchstart.bs.swipe", (t) => this._start(t)), f.on(this._element, "touchmove.bs.swipe", (t) => this._move(t)), f.on(this._element, "touchend.bs.swipe", (t) => this._end(t)));

            }

            _eventIsPointerPenTouch(t) {

                return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType);

            }

            static isSupported() {

                return "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints;

            }

        }

        const Bt = "next",

            d = "prev",

            i = "left",

            Qt = "right",

            Vt = "slid.bs.carousel",

            Ut = "carousel",

            Yt = "active",

            Xt = { ArrowLeft: Qt, ArrowRight: i },

            Gt = { interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0 },

            Zt = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };

        class Kt extends e {

            constructor(t, e) {

                super(t, e),

                    (this._interval = null),

                    (this._activeElement = null),

                    (this._isSliding = !1),

                    (this.touchTimeout = null),

                    (this._swipeHelper = null),

                    (this._indicatorsElement = h.findOne(".carousel-indicators", this._element)),

                    this._addEventListeners(),

                    this._config.ride === Ut && this.cycle();

            }

            static get Default() {

                return Gt;

            }

            static get DefaultType() {

                return Zt;

            }

            static get NAME() {

                return "carousel";

            }

            next() {

                this._slide(Bt);

            }

            nextWhenVisible() {

                !document.hidden && r(this._element) && this.next();

            }

            prev() {

                this._slide(d);

            }

            pause() {

                this._isSliding && _t(this._element), this._clearInterval();

            }

            cycle() {

                this._clearInterval(), this._updateInterval(), (this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval));

            }

            _maybeEnableCycle() {

                this._config.ride && (this._isSliding ? f.one(this._element, Vt, () => this.cycle()) : this.cycle());

            }

            to(t) {

                var e,

                    i = this._getItems();

                t > i.length - 1 || t < 0 || (this._isSliding ? f.one(this._element, Vt, () => this.to(t)) : (e = this._getItemIndex(this._getActive())) !== t && ((e = e < t ? Bt : d), this._slide(e, i[t])));

            }

            dispose() {

                this._swipeHelper && this._swipeHelper.dispose(), super.dispose();

            }

            _configAfterMerge(t) {

                return (t.defaultInterval = t.interval), t;

            }

            _addEventListeners() {

                this._config.keyboard && f.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),

                    "hover" === this._config.pause && (f.on(this._element, "mouseenter.bs.carousel", () => this.pause()), f.on(this._element, "mouseleave.bs.carousel", () => this._maybeEnableCycle())),

                    this._config.touch && $t.isSupported() && this._addTouchEventListeners();

            }

            _addTouchEventListeners() {

                for (const t of h.find(".carousel-item img", this._element)) f.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());

                const t = {

                    leftCallback: () => this._slide(this._directionToOrder(i)),

                    rightCallback: () => this._slide(this._directionToOrder(Qt)),

                    endCallback: () => {

                        "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), (this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval)));

                    },

                };

                this._swipeHelper = new $t(this._element, t);

            }

            _keydown(t) {

                var e;

                /input|textarea/i.test(t.target.tagName) || ((e = Xt[t.key]) && (t.preventDefault(), this._slide(this._directionToOrder(e))));

            }

            _getItemIndex(t) {

                return this._getItems().indexOf(t);

            }

            _setActiveIndicatorElement(t) {

                var e;

                this._indicatorsElement &&

                    ((e = h.findOne(".active", this._indicatorsElement)).classList.remove(Yt), e.removeAttribute("aria-current"), (e = h.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement))) &&

                    (e.classList.add(Yt), e.setAttribute("aria-current", "true"));

            }

            _updateInterval() {

                var t = this._activeElement || this._getActive();

                t && ((t = Number.parseInt(t.getAttribute("data-bs-interval"), 10)), (this._config.interval = t || this._config.defaultInterval));

            }

            _slide(e, t = null) {

                if (!this._isSliding) {

                    const i = this._getActive(),

                        n = e === Bt,

                        o = t || kt(this._getItems(), i, n, this._config.wrap);

                    if (o !== i) {

                        const r = this._getItemIndex(o),

                            s = (t) => f.trigger(this._element, t, { relatedTarget: o, direction: this._orderToDirection(e), from: this._getItemIndex(i), to: r });

                        if (!s("slide.bs.carousel").defaultPrevented && i && o) {

                            (t = Boolean(this._interval)), this.pause(), (this._isSliding = !0), this._setActiveIndicatorElement(r), (this._activeElement = o);

                            const e = n ? "carousel-item-start" : "carousel-item-end",

                                a = n ? "carousel-item-next" : "carousel-item-prev";

                            o.classList.add(a),

                                Ct(o),

                                i.classList.add(e),

                                o.classList.add(e),

                                this._queueCallback(

                                    () => {

                                        o.classList.remove(e, a), o.classList.add(Yt), i.classList.remove(Yt, a, e), (this._isSliding = !1), s(Vt);

                                    },

                                    i,

                                    this._isAnimated()

                                ),

                                t && this.cycle();

                        }

                    }

                }

            }

            _isAnimated() {

                return this._element.classList.contains("slide");

            }

            _getActive() {

                return h.findOne(".active.carousel-item", this._element);

            }

            _getItems() {

                return h.find(".carousel-item", this._element);

            }

            _clearInterval() {

                this._interval && (clearInterval(this._interval), (this._interval = null));

            }

            _directionToOrder(t) {

                return l() ? (t === i ? d : Bt) : t === i ? Bt : d;

            }

            _orderToDirection(t) {

                return l() ? (t === d ? i : Qt) : t === d ? Qt : i;

            }

            static jQueryInterface(e) {

                return this.each(function () {

                    var t = Kt.getOrCreateInstance(this, e);

                    if ("number" != typeof e) {

                        if ("string" == typeof e) {

                            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);

                            t[e]();

                        }

                    } else t.to(e);

                });

            }

        }

        f.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function (t) {

            var e = h.getElementFromSelector(this);

            e &&

                e.classList.contains(Ut) &&

                (t.preventDefault(), (t = Kt.getOrCreateInstance(e)), (e = this.getAttribute("data-bs-slide-to")) ? t.to(e) : "next" === u.getDataAttribute(this, "slide") ? t.next() : t.prev(), t._maybeEnableCycle());

        }),

            f.on(window, "load.bs.carousel.data-api", () => {

                for (const t of h.find('[data-bs-ride="carousel"]')) Kt.getOrCreateInstance(t);

            }),

            t(Kt);

        const Jt = "show",

            te = "collapse",

            ee = "collapsing",

            ie = '[data-bs-toggle="collapse"]',

            ne = { parent: null, toggle: !0 },

            oe = { parent: "(null|element)", toggle: "boolean" };

        class re extends e {

            constructor(t, e) {

                super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);

                const i = h.find(ie);

                for (const t of i) {

                    const e = h.getSelectorFromElement(t),

                        i = h.find(e).filter((t) => t === this._element);

                    null !== e && i.length && this._triggerArray.push(t);

                }

                this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();

            }

            static get Default() {

                return ne;

            }

            static get DefaultType() {

                return oe;

            }

            static get NAME() {

                return "collapse";

            }

            toggle() {

                this._isShown() ? this.hide() : this.show();

            }

            show() {

                if (!this._isTransitioning && !this._isShown()) {

                    var t = [];

                    if (

                        !(

                            ((t = this._config.parent

                                ? this._getFirstLevelChildren(".collapse.show, .collapse.collapsing")

                                      .filter((t) => t !== this._element)

                                      .map((t) => re.getOrCreateInstance(t, { toggle: !1 }))

                                : t).length &&

                                t[0]._isTransitioning) ||

                            f.trigger(this._element, "show.bs.collapse").defaultPrevented

                        )

                    ) {

                        for (const e of t) e.hide();

                        const i = this._getDimension();

                        this._element.classList.remove(te), this._element.classList.add(ee), (this._element.style[i] = 0), this._addAriaAndCollapsedClass(this._triggerArray, !0), (this._isTransitioning = !0);

                        var e = "scroll" + (i[0].toUpperCase() + i.slice(1));

                        this._queueCallback(

                            () => {

                                (this._isTransitioning = !1), this._element.classList.remove(ee), this._element.classList.add(te, Jt), (this._element.style[i] = ""), f.trigger(this._element, "shown.bs.collapse");

                            },

                            this._element,

                            !0

                        ),

                            (this._element.style[i] = this._element[e] + "px");

                    }

                }

            }

            hide() {

                if (!this._isTransitioning && this._isShown() && !f.trigger(this._element, "hide.bs.collapse").defaultPrevented) {

                    var t = this._getDimension();

                    (this._element.style[t] = this._element.getBoundingClientRect()[t] + "px"), Ct(this._element), this._element.classList.add(ee), this._element.classList.remove(te, Jt);

                    for (const i of this._triggerArray) {

                        var e = h.getElementFromSelector(i);

                        e && !this._isShown(e) && this._addAriaAndCollapsedClass([i], !1);

                    }

                    (this._isTransitioning = !0),

                        (this._element.style[t] = ""),

                        this._queueCallback(

                            () => {

                                (this._isTransitioning = !1), this._element.classList.remove(ee), this._element.classList.add(te), f.trigger(this._element, "hidden.bs.collapse");

                            },

                            this._element,

                            !0

                        );

                }

            }

            _isShown(t = this._element) {

                return t.classList.contains(Jt);

            }

            _configAfterMerge(t) {

                return (t.toggle = Boolean(t.toggle)), (t.parent = o(t.parent)), t;

            }

            _getDimension() {

                return this._element.classList.contains("collapse-horizontal") ? "width" : "height";

            }

            _initializeChildren() {

                if (this._config.parent)

                    for (const e of this._getFirstLevelChildren(ie)) {

                        var t = h.getElementFromSelector(e);

                        t && this._addAriaAndCollapsedClass([e], this._isShown(t));

                    }

            }

            _getFirstLevelChildren(t) {

                const e = h.find(":scope .collapse .collapse", this._config.parent);

                return h.find(t, this._config.parent).filter((t) => !e.includes(t));

            }

            _addAriaAndCollapsedClass(t, e) {

                if (t.length) for (const i of t) i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e);

            }

            static jQueryInterface(e) {

                const i = {};

                return (

                    "string" == typeof e && /show|hide/.test(e) && (i.toggle = !1),

                    this.each(function () {

                        var t = re.getOrCreateInstance(this, i);

                        if ("string" == typeof e) {

                            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);

                            t[e]();

                        }

                    })

                );

            }

        }

        f.on(document, "click.bs.collapse.data-api", ie, function (t) {

            ("A" === t.target.tagName || (t.delegateTarget && "A" === t.delegateTarget.tagName)) && t.preventDefault();

            for (const t of h.getMultipleElementsFromSelector(this)) re.getOrCreateInstance(t, { toggle: !1 }).toggle();

        }),

            t(re);

        var O = "top",

            j = "bottom",

            L = "right",

            D = "left",

            se = "auto",

            P = [O, j, L, D],

            M = "start",

            T = "end",

            ae = "clippingParents",

            le = "viewport",

            E = "popper",

            ce = "reference",

            ue = P.reduce(function (t, e) {

                return t.concat([e + "-" + M, e + "-" + T]);

            }, []),

            he = [].concat(P, [se]).reduce(function (t, e) {

                return t.concat([e, e + "-" + M, e + "-" + T]);

            }, []),

            de = "beforeRead",

            pe = "afterRead",

            fe = "beforeMain",

            me = "afterMain",

            ge = "beforeWrite",

            ve = "afterWrite",

            ye = [de, "read", pe, fe, "main", me, ge, "write", ve],

            be = {

                name: "applyStyles",

                enabled: !0,

                phase: "write",

                fn: function (t) {

                    var o = t.state;

                    Object.keys(o.elements).forEach(function (t) {

                        var e = o.styles[t] || {},

                            i = o.attributes[t] || {},

                            n = o.elements[t];

                        _(n) &&

                            g(n) &&

                            (Object.assign(n.style, e),

                            Object.keys(i).forEach(function (t) {

                                var e = i[t];

                                !1 === e ? n.removeAttribute(t) : n.setAttribute(t, !0 === e ? "" : e);

                            }));

                    });

                },

                effect: function (t) {

                    var n = t.state,

                        o = { popper: { position: n.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };

                    return (

                        Object.assign(n.elements.popper.style, o.popper),

                        (n.styles = o),

                        n.elements.arrow && Object.assign(n.elements.arrow.style, o.arrow),

                        function () {

                            Object.keys(n.elements).forEach(function (t) {

                                var e = n.elements[t],

                                    i = n.attributes[t] || {};

                                (t = Object.keys((n.styles.hasOwnProperty(t) ? n.styles : o)[t]).reduce(function (t, e) {

                                    return (t[e] = ""), t;

                                }, {})),

                                    _(e) &&

                                        g(e) &&

                                        (Object.assign(e.style, t),

                                        Object.keys(i).forEach(function (t) {

                                            e.removeAttribute(t);

                                        }));

                            });

                        }

                    );

                },

                requires: ["computeStyles"],

            },

            S = Math.max,

            _e = Math.min,

            we = Math.round,

            xe = {

                name: "arrow",

                enabled: !0,

                phase: "main",

                fn: function (t) {

                    var e,

                        i,

                        n,

                        o,

                        r = t.state,

                        s = t.name,

                        a = ((t = t.options), r.elements.arrow),

                        l = r.modifiersData.popperOffsets,

                        c = J((u = k(r.placement))),

                        u = 0 <= [D, L].indexOf(u) ? "height" : "width";

                    a &&

                        l &&

                        ((t = et("number" != typeof (t = "function" == typeof (t = t.padding) ? t(Object.assign({}, r.rects, { placement: r.placement })) : t) ? t : it(t, P))),

                        (e = Y(a)),

                        (o = "y" === c ? O : D),

                        (n = "y" === c ? j : L),

                        (i = r.rects.reference[u] + r.rects.reference[c] - l[c] - r.rects.popper[u]),

                        (l = l[c] - r.rects.reference[c]),

                        (a = (a = K(a)) ? ("y" === c ? a.clientHeight || 0 : a.clientWidth || 0) : 0),

                        (o = t[o]),

                        (t = a - e[u] - t[n]),

                        (o = tt(o, (n = a / 2 - e[u] / 2 + (i / 2 - l / 2)), t)),

                        (r.modifiersData[s] = (((a = {})[c] = o), (a.centerOffset = o - n), a)));

                },

                effect: function (t) {

                    var e = t.state;

                    null != (t = void 0 === (t = t.options.element) ? "[data-popper-arrow]" : t) && ("string" != typeof t || (t = e.elements.popper.querySelector(t))) && X(e.elements.popper, t) && (e.elements.arrow = t);

                },

                requires: ["popperOffsets"],

                requiresIfExists: ["preventOverflow"],

            },

            Ce = { top: "auto", right: "auto", bottom: "auto", left: "auto" },

            Te = {

                name: "computeStyles",

                enabled: !0,

                phase: "beforeWrite",

                fn: function (t) {

                    var e = t.state,

                        i = void 0 === (i = (t = t.options).gpuAcceleration) || i,

                        n = void 0 === (n = t.adaptive) || n;

                    (t = void 0 === (t = t.roundOffsets) || t),

                        (i = { placement: k(e.placement), variation: A(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: i, isFixed: "fixed" === e.options.strategy }),

                        null != e.modifiersData.popperOffsets &&

                            (e.styles.popper = Object.assign({}, e.styles.popper, nt(Object.assign({}, i, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: n, roundOffsets: t })))),

                        null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, nt(Object.assign({}, i, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: t })))),

                        (e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement }));

                },

                data: {},

            },

            Ee = { passive: !0 },

            Se = {

                name: "eventListeners",

                enabled: !0,

                phase: "write",

                fn: function () {},

                effect: function (t) {

                    var e = t.state,

                        i = t.instance,

                        n = (t = t.options).scroll,

                        o = void 0 === n || n,

                        r = void 0 === (n = t.resize) || n,

                        s = b(e.elements.popper),

                        a = [].concat(e.scrollParents.reference, e.scrollParents.popper);

                    return (

                        o &&

                            a.forEach(function (t) {

                                t.addEventListener("scroll", i.update, Ee);

                            }),

                        r && s.addEventListener("resize", i.update, Ee),

                        function () {

                            o &&

                                a.forEach(function (t) {

                                    t.removeEventListener("scroll", i.update, Ee);

                                }),

                                r && s.removeEventListener("resize", i.update, Ee);

                        }

                    );

                },

                data: {},

            },

            ke = { left: "right", right: "left", bottom: "top", top: "bottom" },

            Ae = { start: "end", end: "start" },

            Ie = {

                name: "flip",

                enabled: !0,

                phase: "main",

                fn: function (t) {

                    var h = t.state,

                        e = t.options;

                    if (((t = t.name), !h.modifiersData[t]._skip)) {

                        for (

                            var i = e.mainAxis,

                                n = void 0 === i || i,

                                o = void 0 === (i = e.altAxis) || i,

                                d = ((i = e.fallbackPlacements), e.padding),

                                p = e.boundary,

                                f = e.rootBoundary,

                                r = e.altBoundary,

                                s = e.flipVariations,

                                m = void 0 === s || s,

                                g = e.allowedAutoPlacements,

                                a =

                                    ((e = k((s = h.options.placement))),

                                    (i = i || (e !== s && m ? (k((i = s)) === se ? [] : ((e = ot(i)), [rt(i), e, rt(e)])) : [ot(s)])),

                                    [s].concat(i).reduce(function (t, e) {

                                        return t.concat(

                                            k(e) === se

                                                ? ((i = h),

                                                  (n = (t = { placement: e, boundary: p, rootBoundary: f, padding: d, flipVariations: m, allowedAutoPlacements: g }).placement),

                                                  (o = t.boundary),

                                                  (r = t.rootBoundary),

                                                  (s = t.padding),

                                                  (a = t.flipVariations),

                                                  (l = void 0 === (t = t.allowedAutoPlacements) ? he : t),

                                                  (t = (c = A(n))

                                                      ? a

                                                          ? ue

                                                          : ue.filter(function (t) {

                                                                return A(t) === c;

                                                            })

                                                      : P),

                                                  (u = (n =

                                                      0 ===

                                                      (n = t.filter(function (t) {

                                                          return 0 <= l.indexOf(t);

                                                      })).length

                                                          ? t

                                                          : n).reduce(function (t, e) {

                                                      return (t[e] = I(i, { placement: e, boundary: o, rootBoundary: r, padding: s })[k(e)]), t;

                                                  }, {})),

                                                  Object.keys(u).sort(function (t, e) {

                                                      return u[t] - u[e];

                                                  }))

                                                : e

                                        );

                                        var i, n, o, r, s, a, l, c, u;

                                    }, [])),

                                l = h.rects.reference,

                                c = h.rects.popper,

                                u = new Map(),

                                v = !0,

                                y = a[0],

                                b = 0;

                            b < a.length;

                            b++

                        ) {

                            var _ = a[b],

                                w = k(_),

                                x = A(_) === M,

                                C = (E = 0 <= [O, j].indexOf(w)) ? "width" : "height",

                                T = I(h, { placement: _, boundary: p, rootBoundary: f, altBoundary: r, padding: d }),

                                E = E ? (x ? L : D) : x ? j : O;

                            if (

                                (l[C] > c[C] && (E = ot(E)),

                                (x = ot(E)),

                                (C = []),

                                n && C.push(T[w] <= 0),

                                o && C.push(T[E] <= 0, T[x] <= 0),

                                C.every(function (t) {

                                    return t;

                                }))

                            ) {

                                (y = _), (v = !1);

                                break;

                            }

                            u.set(_, C);

                        }

                        if (v)

                            for (

                                var S = m ? 3 : 1;

                                0 < S &&

                                "break" !==

                                    (function (e) {

                                        var t = a.find(function (t) {

                                            if ((t = u.get(t)))

                                                return t.slice(0, e).every(function (t) {

                                                    return t;

                                                });

                                        });

                                        if (t) return (y = t), "break";

                                    })(S);

                                S--

                            );

                        h.placement !== y && ((h.modifiersData[t]._skip = !0), (h.placement = y), (h.reset = !0));

                    }

                },

                requiresIfExists: ["offset"],

                data: { _skip: !1 },

            },

            Oe = {

                name: "hide",

                enabled: !0,

                phase: "main",

                requiresIfExists: ["preventOverflow"],

                fn: function (t) {

                    var e = t.state,

                        i = ((t = t.name), e.rects.reference),

                        n = e.rects.popper,

                        o = e.modifiersData.preventOverflow,

                        r = I(e, { elementContext: "reference" }),

                        s = I(e, { altBoundary: !0 }),

                        r = pt(r, i),

                        i = pt(s, n, o),

                        s = ft(r),

                        n = ft(i);

                    (e.modifiersData[t] = { referenceClippingOffsets: r, popperEscapeOffsets: i, isReferenceHidden: s, hasPopperEscaped: n }),

                        (e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": s, "data-popper-escaped": n }));

                },

            },

            je = {

                name: "offset",

                enabled: !0,

                phase: "main",

                requires: ["popperOffsets"],

                fn: function (t) {

                    var s = t.state,

                        e = t.options,

                        a = ((t = t.name), void 0 === (e = e.offset) ? [0, 0] : e),

                        i = (n = (e = he.reduce(function (t, e) {

                            return (

                                (t[e] =

                                    ((i = s.rects),

                                    (n = a),

                                    (o = k(e)),

                                    (r = 0 <= [D, O].indexOf(o) ? -1 : 1),

                                    (e = (i = "function" == typeof n ? n(Object.assign({}, i, { placement: e })) : n)[0] || 0),

                                    (n = (i[1] || 0) * r),

                                    0 <= [D, L].indexOf(o) ? { x: n, y: e } : { x: e, y: n })),

                                t

                            );

                            var i, n, o, r;

                        }, {}))[s.placement]).x,

                        n = n.y;

                    null != s.modifiersData.popperOffsets && ((s.modifiersData.popperOffsets.x += i), (s.modifiersData.popperOffsets.y += n)), (s.modifiersData[t] = e);

                },

            },

            Le = {

                name: "popperOffsets",

                enabled: !0,

                phase: "read",

                fn: function (t) {

                    var e = t.state;

                    (t = t.name), (e.modifiersData[t] = dt({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement }));

                },

                data: {},

            },

            De = {

                name: "preventOverflow",

                enabled: !0,

                phase: "main",

                fn: function (t) {

                    var e,

                        i,

                        n,

                        o,

                        r,

                        s,

                        a,

                        l,

                        c,

                        u = t.state,

                        h = t.options,

                        d = ((t = t.name), h.mainAxis),

                        p = ((d = void 0 === d || d), h.altAxis),

                        f = ((p = void 0 !== p && p), h.boundary),

                        m = h.rootBoundary,

                        g = h.altBoundary,

                        v = h.padding,

                        y = h.tether,

                        b = ((y = void 0 === y || y), (h = void 0 === (h = h.tetherOffset) ? 0 : h), (f = I(u, { boundary: f, rootBoundary: m, padding: v, altBoundary: g })), (m = k(u.placement)), (g = !(v = A(u.placement))), J(m)),

                        _ = "x" === b ? "y" : "x",

                        w = u.modifiersData.popperOffsets,

                        x = u.rects.reference,

                        C = u.rects.popper,

                        T =

                            ((h = "number" == typeof (h = "function" == typeof h ? h(Object.assign({}, u.rects, { placement: u.placement })) : h) ? { mainAxis: h, altAxis: h } : Object.assign({ mainAxis: 0, altAxis: 0 }, h)),

                            u.modifiersData.offset ? u.modifiersData.offset[u.placement] : null),

                        E = { x: 0, y: 0 };

                    w &&

                        (d &&

                            ((d = "y" === b ? "height" : "width"),

                            (s = (a = w[b]) + f[(i = "y" === b ? O : D)]),

                            (l = a - f[(c = "y" === b ? j : L)]),

                            (e = y ? -C[d] / 2 : 0),

                            (o = (v === M ? x : C)[d]),

                            (v = v === M ? -C[d] : -x[d]),

                            (r = u.elements.arrow),

                            (r = y && r ? Y(r) : { width: 0, height: 0 }),

                            (i = (n = u.modifiersData["arrow#persistent"] ? u.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 })[i]),

                            (n = n[c]),

                            (c = tt(0, x[d], r[d])),

                            (r = g ? x[d] / 2 - e - c - i - h.mainAxis : o - c - i - h.mainAxis),

                            (o = g ? -x[d] / 2 + e + c + n + h.mainAxis : v + c + n + h.mainAxis),

                            (g = (i = u.elements.arrow && K(u.elements.arrow)) ? ("y" === b ? i.clientTop || 0 : i.clientLeft || 0) : 0),

                            (v = a + o - (e = null != (d = null == T ? void 0 : T[b]) ? d : 0)),

                            (c = tt(y ? _e(s, a + r - e - g) : s, a, y ? S(l, v) : l)),

                            (w[b] = c),

                            (E[b] = c - a)),

                        p &&

                            ((n = "y" == _ ? "height" : "width"),

                            (o = (i = w[_]) + f["x" === b ? O : D]),

                            (d = i - f["x" === b ? j : L]),

                            (r = -1 !== [O, D].indexOf(m)),

                            (g = null != (e = null == T ? void 0 : T[_]) ? e : 0),

                            (s = r ? o : i - x[n] - C[n] - g + h.altAxis),

                            (v = r ? i + x[n] + C[n] - g - h.altAxis : d),

                            (a = y && r ? ((c = tt(s, i, (l = v))), l < c ? l : c) : tt(y ? s : o, i, y ? v : d)),

                            (w[_] = a),

                            (E[_] = a - i)),

                        (u.modifiersData[t] = E));

                },

                requiresIfExists: ["offset"],

            },

            Pe = { placement: "bottom", modifiers: [], strategy: "absolute" },

            Me = gt(),

            ze = gt({ defaultModifiers: [Se, Le, Te, be] }),

            Re = gt({ defaultModifiers: [Se, Le, Te, be, je, Ie, De, xe, Oe] });

        const Ne = Object.freeze(

                Object.defineProperty(

                    {

                        __proto__: null,

                        afterMain: me,

                        afterRead: pe,

                        afterWrite: ve,

                        applyStyles: be,

                        arrow: xe,

                        auto: se,

                        basePlacements: P,

                        beforeMain: fe,

                        beforeRead: de,

                        beforeWrite: ge,

                        bottom: j,

                        clippingParents: ae,

                        computeStyles: Te,

                        createPopper: Re,

                        createPopperBase: Me,

                        createPopperLite: ze,

                        detectOverflow: I,

                        end: T,

                        eventListeners: Se,

                        flip: Ie,

                        hide: Oe,

                        left: D,

                        main: "main",

                        modifierPhases: ye,

                        offset: je,

                        placements: he,

                        popper: E,

                        popperGenerator: gt,

                        popperOffsets: Le,

                        preventOverflow: De,

                        read: "read",

                        reference: ce,

                        right: L,

                        start: M,

                        top: O,

                        variationPlacements: ue,

                        viewport: le,

                        write: "write",

                    },

                    Symbol.toStringTag,

                    { value: "Module" }

                )

            ),

            qe = "dropdown",

            He = ".bs.dropdown",

            Fe = ".data-api",

            We = "ArrowDown",

            $e = "click" + He + Fe,

            Be = "keydown" + He + Fe,

            Qe = "show",

            Ve = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',

            Ue = ".dropdown-menu",

            Ye = l() ? "top-end" : "top-start",

            Xe = l() ? "top-start" : "top-end",

            Ge = l() ? "bottom-end" : "bottom-start",

            Ze = l() ? "bottom-start" : "bottom-end",

            Ke = l() ? "left-start" : "right-start",

            Je = l() ? "right-start" : "left-start",

            ti = { autoClose: !0, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" },

            ei = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };

        class p extends e {

            constructor(t, e) {

                super(t, e),

                    (this._popper = null),

                    (this._parent = this._element.parentNode),

                    (this._menu = h.next(this._element, Ue)[0] || h.prev(this._element, Ue)[0] || h.findOne(Ue, this._parent)),

                    (this._inNavbar = this._detectNavbar());

            }

            static get Default() {

                return ti;

            }

            static get DefaultType() {

                return ei;

            }

            static get NAME() {

                return qe;

            }

            toggle() {

                return this._isShown() ? this.hide() : this.show();

            }

            show() {

                if (!a(this._element) && !this._isShown()) {

                    var t = { relatedTarget: this._element };

                    if (!f.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {

                        if ((this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))) for (const e of [].concat(...document.body.children)) f.on(e, "mouseover", xt);

                        this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Qe), this._element.classList.add(Qe), f.trigger(this._element, "shown.bs.dropdown", t);

                    }

                }

            }

            hide() {

                var t;

                !a(this._element) && this._isShown() && ((t = { relatedTarget: this._element }), this._completeHide(t));

            }

            dispose() {

                this._popper && this._popper.destroy(), super.dispose();

            }

            update() {

                (this._inNavbar = this._detectNavbar()), this._popper && this._popper.update();

            }

            _completeHide(t) {

                if (!f.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {

                    if ("ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children)) f.off(t, "mouseover", xt);

                    this._popper && this._popper.destroy(),

                        this._menu.classList.remove(Qe),

                        this._element.classList.remove(Qe),

                        this._element.setAttribute("aria-expanded", "false"),

                        u.removeDataAttribute(this._menu, "popper"),

                        f.trigger(this._element, "hidden.bs.dropdown", t);

                }

            }

            _getConfig(t) {

                if ("object" != typeof (t = super._getConfig(t)).reference || s(t.reference) || "function" == typeof t.reference.getBoundingClientRect) return t;

                throw new TypeError(qe.toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');

            }

            _createPopper() {

                if (void 0 === Ne) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");

                let t = this._element;

                "parent" === this._config.reference ? (t = this._parent) : s(this._config.reference) ? (t = o(this._config.reference)) : "object" == typeof this._config.reference && (t = this._config.reference);

                var e = this._getPopperConfig();

                this._popper = Re(t, this._menu, e);

            }

            _isShown() {

                return this._menu.classList.contains(Qe);

            }

            _getPlacement() {

                var t,

                    e = this._parent;

                return e.classList.contains("dropend")

                    ? Ke

                    : e.classList.contains("dropstart")

                    ? Je

                    : e.classList.contains("dropup-center")

                    ? "top"

                    : e.classList.contains("dropdown-center")

                    ? "bottom"

                    : ((t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()), e.classList.contains("dropup") ? (t ? Xe : Ye) : t ? Ze : Ge);

            }

            _detectNavbar() {

                return null !== this._element.closest(".navbar");

            }

            _getOffset() {

                const e = this._config.offset;

                return "string" == typeof e ? e.split(",").map((t) => Number.parseInt(t, 10)) : "function" == typeof e ? (t) => e(t, this._element) : e;

            }

            _getPopperConfig() {

                var t = {

                    placement: this._getPlacement(),

                    modifiers: [

                        { name: "preventOverflow", options: { boundary: this._config.boundary } },

                        { name: "offset", options: { offset: this._getOffset() } },

                    ],

                };

                return (!this._inNavbar && "static" !== this._config.display) || (u.setDataAttribute(this._menu, "popper", "static"), (t.modifiers = [{ name: "applyStyles", enabled: !1 }])), { ...t, ...c(this._config.popperConfig, [t]) };

            }

            _selectMenuItem({ key: t, target: e }) {

                var i = h.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t) => r(t));

                i.length && kt(i, e, t === We, !i.includes(e)).focus();

            }

            static jQueryInterface(e) {

                return this.each(function () {

                    var t = p.getOrCreateInstance(this, e);

                    if ("string" == typeof e) {

                        if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);

                        t[e]();

                    }

                });

            }

            static clearMenus(t) {

                if (2 !== t.button && ("keyup" !== t.type || "Tab" === t.key))

                    for (const o of h.find('[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled).show')) {

                        var e,

                            i,

                            n = p.getInstance(o);

                        n &&

                            !1 !== n._config.autoClose &&

                            ((e = (i = t.composedPath()).includes(n._menu)),

                            i.includes(n._element) ||

                                ("inside" === n._config.autoClose && !e) ||

                                ("outside" === n._config.autoClose && e) ||

                                (n._menu.contains(t.target) && (("keyup" === t.type && "Tab" === t.key) || /input|select|option|textarea|form/i.test(t.target.tagName))) ||

                                ((i = { relatedTarget: n._element }), "click" === t.type && (i.clickEvent = t), n._completeHide(i)));

                    }

            }

            static dataApiKeydownHandler(t) {

                var e = /input|textarea/i.test(t.target.tagName),

                    i = "Escape" === t.key,

                    n = ["ArrowUp", We].includes(t.key);

                (!n && !i) ||

                    (e && !i) ||

                    (t.preventDefault(),

                    (e = this.matches(Ve) ? this : h.prev(this, Ve)[0] || h.next(this, Ve)[0] || h.findOne(Ve, t.delegateTarget.parentNode)),

                    (i = p.getOrCreateInstance(e)),

                    n ? (t.stopPropagation(), i.show(), i._selectMenuItem(t)) : i._isShown() && (t.stopPropagation(), i.hide(), e.focus()));

            }

        }

        f.on(document, Be, Ve, p.dataApiKeydownHandler),

            f.on(document, Be, Ue, p.dataApiKeydownHandler),

            f.on(document, $e, p.clearMenus),

            f.on(document, "keyup.bs.dropdown.data-api", p.clearMenus),

            f.on(document, $e, Ve, function (t) {

                t.preventDefault(), p.getOrCreateInstance(this).toggle();

            }),

            t(p);

        const ii = "backdrop",

            ni = "mousedown.bs." + ii,

            oi = { className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body" },

            ri = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };

        class si extends Mt {

            constructor(t) {

                super(), (this._config = this._getConfig(t)), (this._isAppended = !1), (this._element = null);

            }

            static get Default() {

                return oi;

            }

            static get DefaultType() {

                return ri;

            }

            static get NAME() {

                return ii;

            }

            show(t) {

                var e;

                this._config.isVisible

                    ? (this._append(),

                      (e = this._getElement()),

                      this._config.isAnimated && Ct(e),

                      e.classList.add("show"),

                      this._emulateAnimation(() => {

                          c(t);

                      }))

                    : c(t);

            }

            hide(t) {

                this._config.isVisible

                    ? (this._getElement().classList.remove("show"),

                      this._emulateAnimation(() => {

                          this.dispose(), c(t);

                      }))

                    : c(t);

            }

            dispose() {

                this._isAppended && (f.off(this._element, ni), this._element.remove(), (this._isAppended = !1));

            }

            _getElement() {

                var t;

                return this._element || (((t = document.createElement("div")).className = this._config.className), this._config.isAnimated && t.classList.add("fade"), (this._element = t)), this._element;

            }

            _configAfterMerge(t) {

                return (t.rootElement = o(t.rootElement)), t;

            }

            _append() {

                var t;

                this._isAppended ||

                    ((t = this._getElement()),

                    this._config.rootElement.append(t),

                    f.on(t, ni, () => {

                        c(this._config.clickCallback);

                    }),

                    (this._isAppended = !0));

            }

            _emulateAnimation(t) {

                St(t, this._getElement(), this._config.isAnimated);

            }

        }

        const ai = ".bs.focustrap",

            li = "backward",

            ci = { autofocus: !0, trapElement: null },

            ui = { autofocus: "boolean", trapElement: "element" };

        class hi extends Mt {

            constructor(t) {

                super(), (this._config = this._getConfig(t)), (this._isActive = !1), (this._lastTabNavDirection = null);

            }

            static get Default() {

                return ci;

            }

            static get DefaultType() {

                return ui;

            }

            static get NAME() {

                return "focustrap";

            }

            activate() {

                this._isActive ||

                    (this._config.autofocus && this._config.trapElement.focus(),

                    f.off(document, ai),

                    f.on(document, "focusin.bs.focustrap", (t) => this._handleFocusin(t)),

                    f.on(document, "keydown.tab.bs.focustrap", (t) => this._handleKeydown(t)),

                    (this._isActive = !0));

            }

            deactivate() {

                this._isActive && ((this._isActive = !1), f.off(document, ai));

            }

            _handleFocusin(t) {

                var e = this._config.trapElement;

                t.target === document || t.target === e || e.contains(t.target) || (0 === (t = h.focusableChildren(e)).length ? e : this._lastTabNavDirection === li ? t[t.length - 1] : t[0]).focus();

            }

            _handleKeydown(t) {

                "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? li : "forward");

            }

        }

        const di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",

            pi = ".sticky-top",

            fi = "padding-right",

            mi = "margin-right";

        class gi {

            constructor() {

                this._element = document.body;

            }

            getWidth() {

                var t = document.documentElement.clientWidth;

                return Math.abs(window.innerWidth - t);

            }

            hide() {

                const e = this.getWidth();

                this._disableOverFlow(), this._setElementAttributes(this._element, fi, (t) => t + e), this._setElementAttributes(di, fi, (t) => t + e), this._setElementAttributes(pi, mi, (t) => t - e);

            }

            reset() {

                this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, fi), this._resetElementAttributes(di, fi), this._resetElementAttributes(pi, mi);

            }

            isOverflowing() {

                return 0 < this.getWidth();

            }

            _disableOverFlow() {

                this._saveInitialAttribute(this._element, "overflow"), (this._element.style.overflow = "hidden");

            }

            _setElementAttributes(t, i, n) {

                const o = this.getWidth();

                this._applyManipulationCallback(t, (t) => {

                    var e;

                    (t !== this._element && window.innerWidth > t.clientWidth + o) || (this._saveInitialAttribute(t, i), (e = window.getComputedStyle(t).getPropertyValue(i)), t.style.setProperty(i, n(Number.parseFloat(e)) + "px"));

                });

            }

            _saveInitialAttribute(t, e) {

                var i = t.style.getPropertyValue(e);

                i && u.setDataAttribute(t, e, i);

            }

            _resetElementAttributes(t, i) {

                this._applyManipulationCallback(t, (t) => {

                    var e = u.getDataAttribute(t, i);

                    null !== e ? (u.removeDataAttribute(t, i), t.style.setProperty(i, e)) : t.style.removeProperty(i);

                });

            }

            _applyManipulationCallback(t, e) {

                if (s(t)) e(t);

                else for (const i of h.find(t, this._element)) e(i);

            }

        }

        const vi = ".bs.modal",

            yi = "hidden" + vi,

            bi = "show" + vi,

            _i = "modal-open",

            wi = "modal-static",

            xi = { backdrop: !0, focus: !0, keyboard: !0 },

            Ci = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };

        class Ti extends e {

            constructor(t, e) {

                super(t, e),

                    (this._dialog = h.findOne(".modal-dialog", this._element)),

                    (this._backdrop = this._initializeBackDrop()),

                    (this._focustrap = this._initializeFocusTrap()),

                    (this._isShown = !1),

                    (this._isTransitioning = !1),

                    (this._scrollBar = new gi()),

                    this._addEventListeners();

            }

            static get Default() {

                return xi;

            }

            static get DefaultType() {

                return Ci;

            }

            static get NAME() {

                return "modal";

            }

            toggle(t) {

                return this._isShown ? this.hide() : this.show(t);

            }

            show(t) {

                this._isShown ||

                    this._isTransitioning ||

                    f.trigger(this._element, bi, { relatedTarget: t }).defaultPrevented ||

                    ((this._isShown = !0), (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(_i), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));

            }

            hide() {

                !this._isShown ||

                    this._isTransitioning ||

                    f.trigger(this._element, "hide.bs.modal").defaultPrevented ||

                    ((this._isShown = !1), (this._isTransitioning = !0), this._focustrap.deactivate(), this._element.classList.remove("show"), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));

            }

            dispose() {

                f.off(window, vi), f.off(this._dialog, vi), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();

            }

            handleUpdate() {

                this._adjustDialog();

            }

            _initializeBackDrop() {

                return new si({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });

            }

            _initializeFocusTrap() {

                return new hi({ trapElement: this._element });

            }

            _showElement(t) {

                document.body.contains(this._element) || document.body.append(this._element),

                    (this._element.style.display = "block"),

                    this._element.removeAttribute("aria-hidden"),

                    this._element.setAttribute("aria-modal", !0),

                    this._element.setAttribute("role", "dialog"),

                    (this._element.scrollTop = 0);

                var e = h.findOne(".modal-body", this._dialog);

                e && (e.scrollTop = 0),

                    Ct(this._element),

                    this._element.classList.add("show"),

                    this._queueCallback(

                        () => {

                            this._config.focus && this._focustrap.activate(), (this._isTransitioning = !1), f.trigger(this._element, "shown.bs.modal", { relatedTarget: t });

                        },

                        this._dialog,

                        this._isAnimated()

                    );

            }

            _addEventListeners() {

                f.on(this._element, "keydown.dismiss.bs.modal", (t) => {

                    "Escape" === t.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());

                }),

                    f.on(window, "resize.bs.modal", () => {

                        this._isShown && !this._isTransitioning && this._adjustDialog();

                    }),

                    f.on(this._element, "mousedown.dismiss.bs.modal", (e) => {

                        f.one(this._element, "click.dismiss.bs.modal", (t) => {

                            this._element === e.target && this._element === t.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());

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

                        document.body.classList.remove(_i), this._resetAdjustments(), this._scrollBar.reset(), f.trigger(this._element, yi);

                    });

            }

            _isAnimated() {

                return this._element.classList.contains("fade");

            }

            _triggerBackdropTransition() {

                if (!f.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {

                    const t = this._element.scrollHeight > document.documentElement.clientHeight,

                        e = this._element.style.overflowY;

                    "hidden" === e ||

                        this._element.classList.contains(wi) ||

                        (t || (this._element.style.overflowY = "hidden"),

                        this._element.classList.add(wi),

                        this._queueCallback(() => {

                            this._element.classList.remove(wi),

                                this._queueCallback(() => {

                                    this._element.style.overflowY = e;

                                }, this._dialog);

                        }, this._dialog),

                        this._element.focus());

                }

            }

            _adjustDialog() {

                const t = this._element.scrollHeight > document.documentElement.clientHeight,

                    e = this._scrollBar.getWidth(),

                    i = 0 < e;

                if (i && !t) {

                    const t = l() ? "paddingLeft" : "paddingRight";

                    this._element.style[t] = e + "px";

                }

                if (!i && t) {

                    const t = l() ? "paddingRight" : "paddingLeft";

                    this._element.style[t] = e + "px";

                }

            }

            _resetAdjustments() {

                (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");

            }

            static jQueryInterface(e, i) {

                return this.each(function () {

                    var t = Ti.getOrCreateInstance(this, e);

                    if ("string" == typeof e) {

                        if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);

                        t[e](i);

                    }

                });

            }

        }

        f.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {

            const e = h.getElementFromSelector(this);

            ["A", "AREA"].includes(this.tagName) && t.preventDefault(),

                f.one(e, bi, (t) => {

                    t.defaultPrevented ||

                        f.one(e, yi, () => {

                            r(this) && this.focus();

                        });

                }),

                (t = h.findOne(".modal.show")) && Ti.getInstance(t).hide(),

                Ti.getOrCreateInstance(e).toggle(this);

        }),

            Rt(Ti),

            t(Ti);

        const Ei = ".bs.offcanvas",

            Si = "showing",

            ki = ".offcanvas.show",

            Ai = "hidePrevented" + Ei,

            Ii = "hidden" + Ei,

            Oi = { backdrop: !0, keyboard: !0, scroll: !1 },

            ji = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };

        class m extends e {

            constructor(t, e) {

                super(t, e), (this._isShown = !1), (this._backdrop = this._initializeBackDrop()), (this._focustrap = this._initializeFocusTrap()), this._addEventListeners();

            }

            static get Default() {

                return Oi;

            }

            static get DefaultType() {

                return ji;

            }

            static get NAME() {

                return "offcanvas";

            }

            toggle(t) {

                return this._isShown ? this.hide() : this.show(t);

            }

            show(t) {

                this._isShown ||

                    f.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t }).defaultPrevented ||

                    ((this._isShown = !0),

                    this._backdrop.show(),

                    this._config.scroll || new gi().hide(),

                    this._element.setAttribute("aria-modal", !0),

                    this._element.setAttribute("role", "dialog"),

                    this._element.classList.add(Si),

                    this._queueCallback(

                        () => {

                            (this._config.scroll && !this._config.backdrop) || this._focustrap.activate(),

                                this._element.classList.add("show"),

                                this._element.classList.remove(Si),

                                f.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: t });

                        },

                        this._element,

                        !0

                    ));

            }

            hide() {

                this._isShown &&

                    !f.trigger(this._element, "hide.bs.offcanvas").defaultPrevented &&

                    (this._focustrap.deactivate(),

                    this._element.blur(),

                    (this._isShown = !1),

                    this._element.classList.add("hiding"),

                    this._backdrop.hide(),

                    this._queueCallback(

                        () => {

                            this._element.classList.remove("show", "hiding"), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new gi().reset(), f.trigger(this._element, Ii);

                        },

                        this._element,

                        !0

                    ));

            }

            dispose() {

                this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();

            }

            _initializeBackDrop() {

                var t = Boolean(this._config.backdrop);

                return new si({

                    className: "offcanvas-backdrop",

                    isVisible: t,

                    isAnimated: !0,

                    rootElement: this._element.parentNode,

                    clickCallback: t

                        ? () => {

                              "static" !== this._config.backdrop ? this.hide() : f.trigger(this._element, Ai);

                          }

                        : null,

                });

            }

            _initializeFocusTrap() {

                return new hi({ trapElement: this._element });

            }

            _addEventListeners() {

                f.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {

                    "Escape" === t.key && (this._config.keyboard ? this.hide() : f.trigger(this._element, Ai));

                });

            }

            static jQueryInterface(e) {

                return this.each(function () {

                    var t = m.getOrCreateInstance(this, e);

                    if ("string" == typeof e) {

                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);

                        t[e](this);

                    }

                });

            }

        }

        f.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {

            var e = h.getElementFromSelector(this);

            ["A", "AREA"].includes(this.tagName) && t.preventDefault(),

                a(this) ||

                    (f.one(e, Ii, () => {

                        r(this) && this.focus();

                    }),

                    (t = h.findOne(ki)) && t !== e && m.getInstance(t).hide(),

                    m.getOrCreateInstance(e).toggle(this));

        }),

            f.on(window, "load.bs.offcanvas.data-api", () => {

                for (const t of h.find(ki)) m.getOrCreateInstance(t).show();

            }),

            f.on(window, "resize.bs.offcanvas", () => {

                for (const t of h.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t).position && m.getOrCreateInstance(t).hide();

            }),

            Rt(m),

            t(m);

        const Li = {

                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],

                a: ["target", "href", "title", "rel"],

                area: [],

                b: [],

                br: [],

                col: [],

                code: [],

                dd: [],

                div: [],

                dl: [],

                dt: [],

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

            Di = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),

            Pi = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,

            Mi = { allowList: Li, content: {}, extraClass: "", html: !1, sanitize: !0, sanitizeFn: null, template: "<div></div>" },

            zi = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" },

            Ri = { entry: "(string|element|function|null)", selector: "(string|element)" };

        class Ni extends Mt {

            constructor(t) {

                super(), (this._config = this._getConfig(t));

            }

            static get Default() {

                return Mi;

            }

            static get DefaultType() {

                return zi;

            }

            static get NAME() {

                return "TemplateFactory";

            }

            getContent() {

                return Object.values(this._config.content)

                    .map((t) => this._resolvePossibleFunction(t))

                    .filter(Boolean);

            }

            hasContent() {

                return 0 < this.getContent().length;

            }

            changeContent(t) {

                return this._checkContent(t), (this._config.content = { ...this._config.content, ...t }), this;

            }

            toHtml() {

                var t = document.createElement("div");

                t.innerHTML = this._maybeSanitize(this._config.template);

                for (const [e, i] of Object.entries(this._config.content)) this._setContent(t, i, e);

                const e = t.children[0],

                    i = this._resolvePossibleFunction(this._config.extraClass);

                return i && e.classList.add(...i.split(" ")), e;

            }

            _typeCheckConfig(t) {

                super._typeCheckConfig(t), this._checkContent(t.content);

            }

            _checkContent(t) {

                for (var [e, i] of Object.entries(t)) super._typeCheckConfig({ selector: e, entry: i }, Ri);

            }

            _setContent(t, e, i) {

                (i = h.findOne(i, t)) && ((e = this._resolvePossibleFunction(e)) ? (s(e) ? this._putElementInTemplate(o(e), i) : this._config.html ? (i.innerHTML = this._maybeSanitize(e)) : (i.textContent = e)) : i.remove());

            }

            _maybeSanitize(t) {

                if (this._config.sanitize) {

                    var e = t,

                        i = this._config.allowList,

                        n = this._config.sanitizeFn;

                    if (!e.length) return e;

                    if (n && "function" == typeof n) return n(e);

                    n = new window.DOMParser().parseFromString(e, "text/html");

                    for (const t of [].concat(...n.body.querySelectorAll("*"))) {

                        const e = t.nodeName.toLowerCase();

                        if (Object.keys(i).includes(e)) {

                            const n = [].concat(...t.attributes),

                                o = [].concat(i["*"] || [], i[e] || []);

                            for (const e of n)

                                ((t, e) => {

                                    const i = t.nodeName.toLowerCase();

                                    return e.includes(i) ? !Di.has(i) || Boolean(Pi.test(t.nodeValue)) : e.filter((t) => t instanceof RegExp).some((t) => t.test(i));

                                })(e, o) || t.removeAttribute(e.nodeName);

                        } else t.remove();

                    }

                    return n.body.innerHTML;

                }

                return t;

            }

            _resolvePossibleFunction(t) {

                return c(t, [this]);

            }

            _putElementInTemplate(t, e) {

                this._config.html ? ((e.innerHTML = ""), e.append(t)) : (e.textContent = t.textContent);

            }

        }

        const qi = new Set(["sanitize", "allowList", "sanitizeFn"]),

            Hi = "fade",

            Fi = "show",

            Wi = "hide.bs.modal",

            $i = "hover",

            Bi = "focus",

            Qi = { AUTO: "auto", TOP: "top", RIGHT: l() ? "left" : "right", BOTTOM: "bottom", LEFT: l() ? "right" : "left" },

            Vi = {

                allowList: Li,

                animation: !0,

                boundary: "clippingParents",

                container: !1,

                customClass: "",

                delay: 0,

                fallbackPlacements: ["top", "right", "bottom", "left"],

                html: !1,

                offset: [0, 6],

                placement: "top",

                popperConfig: null,

                sanitize: !0,

                sanitizeFn: null,

                selector: !1,

                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',

                title: "",

                trigger: "hover focus",

            },

            Ui = {

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

        class Yi extends e {

            constructor(t, e) {

                if (void 0 === Ne) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");

                super(t, e),

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

                return Vi;

            }

            static get DefaultType() {

                return Ui;

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

                this._isEnabled && ((this._activeTrigger.click = !this._activeTrigger.click), this._isShown() ? this._leave() : this._enter());

            }

            dispose() {

                clearTimeout(this._timeout),

                    f.off(this._element.closest(".modal"), Wi, this._hideModalHandler),

                    this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),

                    this._disposePopper(),

                    super.dispose();

            }

            show() {

                if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");

                if (this._isWithContent() && this._isEnabled) {

                    var t = f.trigger(this._element, this.constructor.eventName("show")),

                        e = (wt(this._element) || this._element.ownerDocument.documentElement).contains(this._element);

                    if (!t.defaultPrevented && e) {

                        this._disposePopper();

                        var i = this._getTipElement(),

                            t = (this._element.setAttribute("aria-describedby", i.getAttribute("id")), this._config.container);

                        if (

                            (this._element.ownerDocument.documentElement.contains(this.tip) || (t.append(i), f.trigger(this._element, this.constructor.eventName("inserted"))),

                            (this._popper = this._createPopper(i)),

                            i.classList.add(Fi),

                            "ontouchstart" in document.documentElement)

                        )

                            for (const i of [].concat(...document.body.children)) f.on(i, "mouseover", xt);

                        this._queueCallback(

                            () => {

                                f.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), (this._isHovered = !1);

                            },

                            this.tip,

                            this._isAnimated()

                        );

                    }

                }

            }

            hide() {

                if (this._isShown() && !f.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {

                    if ((this._getTipElement().classList.remove(Fi), "ontouchstart" in document.documentElement)) for (const t of [].concat(...document.body.children)) f.off(t, "mouseover", xt);

                    (this._activeTrigger.click = !1),

                        (this._activeTrigger[Bi] = !1),

                        (this._activeTrigger[$i] = !1),

                        (this._isHovered = null),

                        this._queueCallback(

                            () => {

                                this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), f.trigger(this._element, this.constructor.eventName("hidden")));

                            },

                            this.tip,

                            this._isAnimated()

                        );

                }

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

            _createTipElement(t) {

                if (!(t = this._getTemplateFactory(t).toHtml())) return null;

                t.classList.remove(Hi, Fi), t.classList.add(`bs-${this.constructor.NAME}-auto`);

                var e = ((t) => {

                    for (; (t += Math.floor(1e6 * Math.random())), document.getElementById(t); );

                    return t;

                })(this.constructor.NAME).toString();

                return t.setAttribute("id", e), this._isAnimated() && t.classList.add(Hi), t;

            }

            setContent(t) {

                (this._newContent = t), this._isShown() && (this._disposePopper(), this.show());

            }

            _getTemplateFactory(t) {

                return (

                    this._templateFactory ? this._templateFactory.changeContent(t) : (this._templateFactory = new Ni({ ...this._config, content: t, extraClass: this._resolvePossibleFunction(this._config.customClass) })),

                    this._templateFactory

                );

            }

            _getContentForTemplate() {

                return { ".tooltip-inner": this._getTitle() };

            }

            _getTitle() {

                return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");

            }

            _initializeOnDelegatedTarget(t) {

                return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());

            }

            _isAnimated() {

                return this._config.animation || (this.tip && this.tip.classList.contains(Hi));

            }

            _isShown() {

                return this.tip && this.tip.classList.contains(Fi);

            }

            _createPopper(t) {

                var e = c(this._config.placement, [this, t, this._element]),

                    e = Qi[e.toUpperCase()];

                return Re(this._element, t, this._getPopperConfig(e));

            }

            _getOffset() {

                const e = this._config.offset;

                return "string" == typeof e ? e.split(",").map((t) => Number.parseInt(t, 10)) : "function" == typeof e ? (t) => e(t, this._element) : e;

            }

            _resolvePossibleFunction(t) {

                return c(t, [this._element]);

            }

            _getPopperConfig(t) {

                return {

                    ...(t = {

                        placement: t,

                        modifiers: [

                            { name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } },

                            { name: "offset", options: { offset: this._getOffset() } },

                            { name: "preventOverflow", options: { boundary: this._config.boundary } },

                            { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } },

                            {

                                name: "preSetPlacement",

                                enabled: !0,

                                phase: "beforeMain",

                                fn: (t) => {

                                    this._getTipElement().setAttribute("data-popper-placement", t.state.placement);

                                },

                            },

                        ],

                    }),

                    ...c(this._config.popperConfig, [t]),

                };

            }

            _setListeners() {

                const t = this._config.trigger.split(" ");

                for (const e of t)

                    if ("click" === e)

                        f.on(this._element, this.constructor.eventName("click"), this._config.selector, (t) => {

                            this._initializeOnDelegatedTarget(t).toggle();

                        });

                    else if ("manual" !== e) {

                        const t = e === $i ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),

                            i = e === $i ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");

                        f.on(this._element, t, this._config.selector, (t) => {

                            var e = this._initializeOnDelegatedTarget(t);

                            (e._activeTrigger["focusin" === t.type ? Bi : $i] = !0), e._enter();

                        }),

                            f.on(this._element, i, this._config.selector, (t) => {

                                var e = this._initializeOnDelegatedTarget(t);

                                (e._activeTrigger["focusout" === t.type ? Bi : $i] = e._element.contains(t.relatedTarget)), e._leave();

                            });

                    }

                (this._hideModalHandler = () => {

                    this._element && this.hide();

                }),

                    f.on(this._element.closest(".modal"), Wi, this._hideModalHandler);

            }

            _fixTitle() {

                var t = this._element.getAttribute("title");

                t &&

                    (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t),

                    this._element.setAttribute("data-bs-original-title", t),

                    this._element.removeAttribute("title"));

            }

            _enter() {

                this._isShown() || this._isHovered

                    ? (this._isHovered = !0)

                    : ((this._isHovered = !0),

                      this._setTimeout(() => {

                          this._isHovered && this.show();

                      }, this._config.delay.show));

            }

            _leave() {

                this._isWithActiveTrigger() ||

                    ((this._isHovered = !1),

                    this._setTimeout(() => {

                        this._isHovered || this.hide();

                    }, this._config.delay.hide));

            }

            _setTimeout(t, e) {

                clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));

            }

            _isWithActiveTrigger() {

                return Object.values(this._activeTrigger).includes(!0);

            }

            _getConfig(t) {

                var e = u.getDataAttributes(this._element);

                for (const t of Object.keys(e)) qi.has(t) && delete e[t];

                return (t = { ...e, ...("object" == typeof t && t ? t : {}) }), (t = this._mergeConfigObj(t)), (t = this._configAfterMerge(t)), this._typeCheckConfig(t), t;

            }

            _configAfterMerge(t) {

                return (

                    (t.container = !1 === t.container ? document.body : o(t.container)),

                    "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }),

                    "number" == typeof t.title && (t.title = t.title.toString()),

                    "number" == typeof t.content && (t.content = t.content.toString()),

                    t

                );

            }

            _getDelegateConfig() {

                var t,

                    e,

                    i = {};

                for ([t, e] of Object.entries(this._config)) this.constructor.Default[t] !== e && (i[t] = e);

                return (i.selector = !1), (i.trigger = "manual"), i;

            }

            _disposePopper() {

                this._popper && (this._popper.destroy(), (this._popper = null)), this.tip && (this.tip.remove(), (this.tip = null));

            }

            static jQueryInterface(e) {

                return this.each(function () {

                    var t = Yi.getOrCreateInstance(this, e);

                    if ("string" == typeof e) {

                        if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);

                        t[e]();

                    }

                });

            }

        }

        t(Yi);

        const Xi = {

                ...Yi.Default,

                content: "",

                offset: [0, 8],

                placement: "right",

                template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',

                trigger: "click",

            },

            Gi = { ...Yi.DefaultType, content: "(null|string|element|function)" };

        class Zi extends Yi {

            static get Default() {

                return Xi;

            }

            static get DefaultType() {

                return Gi;

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

                    var t = Zi.getOrCreateInstance(this, e);

                    if ("string" == typeof e) {

                        if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);

                        t[e]();

                    }

                });

            }

        }

        t(Zi);

        const Ki = "click.bs.scrollspy",

            Ji = "active",

            tn = "[href]",

            en = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [0.1, 0.5, 1] },

            nn = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };

        class on extends e {

            constructor(t, e) {

                super(t, e),

                    (this._targetLinks = new Map()),

                    (this._observableSections = new Map()),

                    (this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element),

                    (this._activeTarget = null),

                    (this._observer = null),

                    (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),

                    this.refresh();

            }

            static get Default() {

                return en;

            }

            static get DefaultType() {

                return nn;

            }

            static get NAME() {

                return "scrollspy";

            }

            refresh() {

                this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : (this._observer = this._getNewObserver());

                for (const t of this._observableSections.values()) this._observer.observe(t);

            }

            dispose() {

                this._observer.disconnect(), super.dispose();

            }

            _configAfterMerge(t) {

                return (

                    (t.target = o(t.target) || document.body), (t.rootMargin = t.offset ? t.offset + "px 0px -30%" : t.rootMargin), "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t) => Number.parseFloat(t))), t

                );

            }

            _maybeEnableSmoothScroll() {

                this._config.smoothScroll &&

                    (f.off(this._config.target, Ki),

                    f.on(this._config.target, Ki, tn, (t) => {

                        var e = this._observableSections.get(t.target.hash);

                        e && (t.preventDefault(), (t = this._rootElement || window), (e = e.offsetTop - this._element.offsetTop), t.scrollTo ? t.scrollTo({ top: e, behavior: "smooth" }) : (t.scrollTop = e));

                    }));

            }

            _getNewObserver() {

                var t = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };

                return new IntersectionObserver((t) => this._observerCallback(t), t);

            }

            _observerCallback(t) {

                const e = (t) => this._targetLinks.get("#" + t.target.id),

                    i = (t) => {

                        (this._previousScrollData.visibleEntryTop = t.target.offsetTop), this._process(e(t));

                    },

                    n = (this._rootElement || document.documentElement).scrollTop,

                    o = n >= this._previousScrollData.parentScrollTop;

                this._previousScrollData.parentScrollTop = n;

                for (const r of t)

                    if (r.isIntersecting) {

                        const t = r.target.offsetTop >= this._previousScrollData.visibleEntryTop;

                        if (o && t) {

                            if ((i(r), !n)) return;

                        } else o || t || i(r);

                    } else (this._activeTarget = null), this._clearActiveClass(e(r));

            }

            _initializeTargetsAndObservables() {

                (this._targetLinks = new Map()), (this._observableSections = new Map());

                const t = h.find(tn, this._config.target);

                for (const e of t)

                    if (e.hash && !a(e)) {

                        const t = h.findOne(decodeURI(e.hash), this._element);

                        r(t) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, t));

                    }

            }

            _process(t) {

                this._activeTarget !== t && (this._clearActiveClass(this._config.target), (this._activeTarget = t).classList.add(Ji), this._activateParents(t), f.trigger(this._element, "activate.bs.scrollspy", { relatedTarget: t }));

            }

            _activateParents(t) {

                if (t.classList.contains("dropdown-item")) h.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(Ji);

                else for (const e of h.parents(t, ".nav, .list-group")) for (const t of h.prev(e, ".nav-link, .nav-item > .nav-link, .list-group-item")) t.classList.add(Ji);

            }

            _clearActiveClass(t) {

                t.classList.remove(Ji);

                var e = h.find(tn + "." + Ji, t);

                for (const t of e) t.classList.remove(Ji);

            }

            static jQueryInterface(e) {

                return this.each(function () {

                    var t = on.getOrCreateInstance(this, e);

                    if ("string" == typeof e) {

                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);

                        t[e]();

                    }

                });

            }

        }

        f.on(window, "load.bs.scrollspy.data-api", () => {

            for (const t of h.find('[data-bs-spy="scroll"]')) on.getOrCreateInstance(t);

        }),

            t(on);

        const rn = "ArrowRight",

            sn = "ArrowDown",

            an = "Home",

            ln = "active",

            cn = "show",

            un = ".dropdown-toggle",

            hn = `:not(${un})`,

            dn = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',

            pn = `.nav-link${hn}, .list-group-item${hn}, [role="tab"]${hn}, ` + dn;

        class fn extends e {

            constructor(t) {

                super(t),

                    (this._parent = this._element.closest('.list-group, .nav, [role="tablist"]')),

                    this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), f.on(this._element, "keydown.bs.tab", (t) => this._keydown(t)));

            }

            static get NAME() {

                return "tab";

            }

            show() {

                var t,

                    e,

                    i = this._element;

                this._elemIsActive(i) ||

                    ((e = (t = this._getActiveElem()) ? f.trigger(t, "hide.bs.tab", { relatedTarget: i }) : null), f.trigger(i, "show.bs.tab", { relatedTarget: t }).defaultPrevented) ||

                    (e && e.defaultPrevented) ||

                    (this._deactivate(t, i), this._activate(i, t));

            }

            _activate(t, e) {

                t &&

                    (t.classList.add(ln),

                    this._activate(h.getElementFromSelector(t)),

                    this._queueCallback(

                        () => {

                            "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), f.trigger(t, "shown.bs.tab", { relatedTarget: e })) : t.classList.add(cn);

                        },

                        t,

                        t.classList.contains("fade")

                    ));

            }

            _deactivate(t, e) {

                t &&

                    (t.classList.remove(ln),

                    t.blur(),

                    this._deactivate(h.getElementFromSelector(t)),

                    this._queueCallback(

                        () => {

                            "tab" === t.getAttribute("role")

                                ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), f.trigger(t, "hidden.bs.tab", { relatedTarget: e }))

                                : t.classList.remove(cn);

                        },

                        t,

                        t.classList.contains("fade")

                    ));

            }

            _keydown(t) {

                var e, i;

                ["ArrowLeft", rn, "ArrowUp", sn, an, "End"].includes(t.key) &&

                    (t.stopPropagation(),

                    t.preventDefault(),

                    (i = this._getChildren().filter((t) => !a(t))),

                    (i = [an, "End"].includes(t.key) ? i[t.key === an ? 0 : i.length - 1] : ((e = [rn, sn].includes(t.key)), kt(i, t.target, e, !0)))) &&

                    (i.focus({ preventScroll: !0 }), fn.getOrCreateInstance(i).show());

            }

            _getChildren() {

                return h.find(pn, this._parent);

            }

            _getActiveElem() {

                return this._getChildren().find((t) => this._elemIsActive(t)) || null;

            }

            _setInitialAttributes(t, e) {

                this._setAttributeIfNotExists(t, "role", "tablist");

                for (const t of e) this._setInitialAttributesOnChild(t);

            }

            _setInitialAttributesOnChild(t) {

                t = this._getInnerElement(t);

                var e = this._elemIsActive(t),

                    i = this._getOuterElement(t);

                t.setAttribute("aria-selected", e),

                    i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),

                    e || t.setAttribute("tabindex", "-1"),

                    this._setAttributeIfNotExists(t, "role", "tab"),

                    this._setInitialAttributesOnTargetPanel(t);

            }

            _setInitialAttributesOnTargetPanel(t) {

                var e = h.getElementFromSelector(t);

                e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id) && this._setAttributeIfNotExists(e, "aria-labelledby", "" + t.id);

            }

            _toggleDropDown(t, i) {

                const n = this._getOuterElement(t);

                n.classList.contains("dropdown") &&

                    ((t = (t, e) => {

                        (t = h.findOne(t, n)) && t.classList.toggle(e, i);

                    })(un, ln),

                    t(".dropdown-menu", cn),

                    n.setAttribute("aria-expanded", i));

            }

            _setAttributeIfNotExists(t, e, i) {

                t.hasAttribute(e) || t.setAttribute(e, i);

            }

            _elemIsActive(t) {

                return t.classList.contains(ln);

            }

            _getInnerElement(t) {

                return t.matches(pn) ? t : h.findOne(pn, t);

            }

            _getOuterElement(t) {

                return t.closest(".nav-item, .list-group-item") || t;

            }

            static jQueryInterface(e) {

                return this.each(function () {

                    var t = fn.getOrCreateInstance(this);

                    if ("string" == typeof e) {

                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);

                        t[e]();

                    }

                });

            }

        }

        f.on(document, "click.bs.tab", dn, function (t) {

            ["A", "AREA"].includes(this.tagName) && t.preventDefault(), a(this) || fn.getOrCreateInstance(this).show();

        }),

            f.on(window, "load.bs.tab", () => {

                for (const t of h.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')) fn.getOrCreateInstance(t);

            }),

            t(fn);

        const mn = "show",

            gn = "showing",

            vn = { animation: "boolean", autohide: "boolean", delay: "number" },

            yn = { animation: !0, autohide: !0, delay: 5e3 };

        class bn extends e {

            constructor(t, e) {

                super(t, e), (this._timeout = null), (this._hasMouseInteraction = !1), (this._hasKeyboardInteraction = !1), this._setListeners();

            }

            static get Default() {

                return yn;

            }

            static get DefaultType() {

                return vn;

            }

            static get NAME() {

                return "toast";

            }

            show() {

                f.trigger(this._element, "show.bs.toast").defaultPrevented ||

                    (this._clearTimeout(),

                    this._config.animation && this._element.classList.add("fade"),

                    this._element.classList.remove("hide"),

                    Ct(this._element),

                    this._element.classList.add(mn, gn),

                    this._queueCallback(

                        () => {

                            this._element.classList.remove(gn), f.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();

                        },

                        this._element,

                        this._config.animation

                    ));

            }

            hide() {

                this.isShown() &&

                    !f.trigger(this._element, "hide.bs.toast").defaultPrevented &&

                    (this._element.classList.add(gn),

                    this._queueCallback(

                        () => {

                            this._element.classList.add("hide"), this._element.classList.remove(gn, mn), f.trigger(this._element, "hidden.bs.toast");

                        },

                        this._element,

                        this._config.animation

                    ));

            }

            dispose() {

                this._clearTimeout(), this.isShown() && this._element.classList.remove(mn), super.dispose();

            }

            isShown() {

                return this._element.classList.contains(mn);

            }

            _maybeScheduleHide() {

                !this._config.autohide ||

                    this._hasMouseInteraction ||

                    this._hasKeyboardInteraction ||

                    (this._timeout = setTimeout(() => {

                        this.hide();

                    }, this._config.delay));

            }

            _onInteraction(t, e) {

                switch (t.type) {

                    case "mouseover":

                    case "mouseout":

                        this._hasMouseInteraction = e;

                        break;

                    case "focusin":

                    case "focusout":

                        this._hasKeyboardInteraction = e;

                }

                e ? this._clearTimeout() : ((t = t.relatedTarget), this._element === t || this._element.contains(t) || this._maybeScheduleHide());

            }

            _setListeners() {

                f.on(this._element, "mouseover.bs.toast", (t) => this._onInteraction(t, !0)),

                    f.on(this._element, "mouseout.bs.toast", (t) => this._onInteraction(t, !1)),

                    f.on(this._element, "focusin.bs.toast", (t) => this._onInteraction(t, !0)),

                    f.on(this._element, "focusout.bs.toast", (t) => this._onInteraction(t, !1));

            }

            _clearTimeout() {

                clearTimeout(this._timeout), (this._timeout = null);

            }

            static jQueryInterface(e) {

                return this.each(function () {

                    var t = bn.getOrCreateInstance(this, e);

                    if ("string" == typeof e) {

                        if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);

                        t[e](this);

                    }

                });

            }

        }

        return Rt(bn), t(bn), { Alert: Nt, Button: Ht, Carousel: Kt, Collapse: re, Dropdown: p, Modal: Ti, Offcanvas: m, Popover: Zi, ScrollSpy: on, Tab: fn, Toast: bn, Tooltip: Yi };

    }),

    (function (t) {

        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery);

    })(function (h) {

        function d(t) {

            return f.raw ? t : encodeURIComponent(t);

        }

        function p(t, e) {

            return (

                (t = f.raw

                    ? t

                    : (function (t) {

                          0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));

                          try {

                              return (t = decodeURIComponent(t.replace(i, " "))), f.json ? JSON.parse(t) : t;

                          } catch (t) {}

                      })(t)),

                h.isFunction(e) ? e(t) : t

            );

        }

        var i = /\+/g,

            f = (h.cookie = function (t, e, i) {

                var n, o;

                if (void 0 !== e && !h.isFunction(e))

                    return (

                        "number" == typeof (i = h.extend({}, f.defaults, i)).expires && ((n = i.expires), (o = i.expires = new Date()).setTime(+o + 864e5 * n)),

                        (document.cookie = [

                            d(t),

                            "=",

                            ((o = e), d(f.json ? JSON.stringify(o) : String(o))),

                            i.expires ? "; expires=" + i.expires.toUTCString() : "",

                            i.path ? "; path=" + i.path : "",

                            i.domain ? "; domain=" + i.domain : "",

                            i.secure ? "; secure" : "",

                        ].join(""))

                    );

                for (var r = t ? void 0 : {}, s = document.cookie ? document.cookie.split("; ") : [], a = 0, l = s.length; a < l; a++) {

                    c = (u = s[a].split("=")).shift();

                    var c = f.raw ? c : decodeURIComponent(c),

                        u = u.join("=");

                    if (t && t === c) {

                        r = p(u, e);

                        break;

                    }

                    t || void 0 === (u = p(u)) || (r[c] = u);

                }

                return r;

            });

        (f.defaults = {}),

            (h.removeCookie = function (t, e) {

                return void 0 !== h.cookie(t) && (h.cookie(t, "", h.extend({}, e, { expires: -1 })), !h.cookie(t));

            });

    }),

    (function (t) {

        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? (module.exports = t(require("jquery"))) : t(jQuery);

    })(function (u) {

        function e(t) {

            return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

        }

        var i;

        u.extend(u.fn, {

            validate: function (t) {

                var n;

                if (this.length)

                    return (

                        (n = u.data(this[0], "validator")) ||

                        (this.attr("novalidate", "novalidate"),

                        (n = new u.validator(t, this[0])),

                        u.data(this[0], "validator", n),

                        n.settings.onsubmit &&

                            (this.on("click.validate", ":submit", function (t) {

                                (n.submitButton = t.currentTarget), u(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== u(this).attr("formnovalidate") && (n.cancelSubmit = !0);

                            }),

                            this.on("submit.validate", function (i) {

                                function t() {

                                    var t, e;

                                    return (

                                        n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (t = u("<input type='hidden'/>").attr("name", n.submitButton.name).val(u(n.submitButton).val()).appendTo(n.currentForm)),

                                        !(n.settings.submitHandler && !n.settings.debug) || ((e = n.settings.submitHandler.call(n, n.currentForm, i)), t && t.remove(), void 0 !== e && e)

                                    );

                                }

                                return n.settings.debug && i.preventDefault(), n.cancelSubmit ? ((n.cancelSubmit = !1), t()) : n.form() ? (n.pendingRequest ? !(n.formSubmitted = !0) : t()) : (n.focusInvalid(), !1);

                            })),

                        n)

                    );

                t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");

            },

            valid: function () {

                var t, e, i;

                return (

                    u(this[0]).is("form")

                        ? (t = this.validate().form())

                        : ((i = []),

                          (t = !0),

                          (e = u(this[0].form).validate()),

                          this.each(function () {

                              (t = e.element(this) && t) || (i = i.concat(e.errorList));

                          }),

                          (e.errorList = i)),

                    t

                );

            },

            rules: function (t, e) {

                var i,

                    n,

                    o,

                    r,

                    s,

                    a = this[0],

                    l = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");

                if (null != a && (!a.form && l && ((a.form = this.closest("form")[0]), (a.name = this.attr("name"))), null != a.form)) {

                    if (t)

                        switch (((i = u.data(a.form, "validator").settings), (n = i.rules), (o = u.validator.staticRules(a)), t)) {

                            case "add":

                                u.extend(o, u.validator.normalizeRule(e)), delete o.messages, (n[a.name] = o), e.messages && (i.messages[a.name] = u.extend(i.messages[a.name], e.messages));

                                break;

                            case "remove":

                                return e

                                    ? ((s = {}),

                                      u.each(e.split(/\s/), function (t, e) {

                                          (s[e] = o[e]), delete o[e];

                                      }),

                                      s)

                                    : (delete n[a.name], o);

                        }

                    return (

                        (l = u.validator.normalizeRules(u.extend({}, u.validator.classRules(a), u.validator.attributeRules(a), u.validator.dataRules(a), u.validator.staticRules(a)), a)).required &&

                            ((r = l.required), delete l.required, (l = u.extend({ required: r }, l))),

                        l.remote && ((r = l.remote), delete l.remote, (l = u.extend(l, { remote: r }))),

                        l

                    );

                }

            },

        }),

            u.extend(u.expr.pseudos || u.expr[":"], {

                blank: function (t) {

                    return !e("" + u(t).val());

                },

                filled: function (t) {

                    return null !== (t = u(t).val()) && !!e("" + t);

                },

                unchecked: function (t) {

                    return !u(t).prop("checked");

                },

            }),

            (u.validator = function (t, e) {

                (this.settings = u.extend(!0, {}, u.validator.defaults, t)), (this.currentForm = e), this.init();

            }),

            (u.validator.format = function (i, t) {

                return 1 === arguments.length

                    ? function () {

                          var t = u.makeArray(arguments);

                          return t.unshift(i), u.validator.format.apply(this, t);

                      }

                    : (void 0 !== t &&

                          ((t = 2 < arguments.length && t.constructor !== Array ? u.makeArray(arguments).slice(1) : t).constructor !== Array && (t = [t]),

                          u.each(t, function (t, e) {

                              i = i.replace(new RegExp("\\{" + t + "\\}", "g"), function () {

                                  return e;

                              });

                          })),

                      i);

            }),

            u.extend(u.validator, {

                defaults: {

                    messages: {},

                    groups: {},

                    rules: {},

                    errorClass: "error",

                    pendingClass: "pending",

                    validClass: "valid",

                    errorElement: "label",

                    focusCleanup: !1,

                    focusInvalid: !0,

                    errorContainer: u([]),

                    errorLabelContainer: u([]),

                    onsubmit: !0,

                    ignore: ":hidden",

                    ignoreTitle: !1,

                    customElements: [],

                    onfocusin: function (t) {

                        (this.lastActive = t), this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)));

                    },

                    onfocusout: function (t) {

                        this.checkable(t) || (!(t.name in this.submitted) && this.optional(t)) || this.element(t);

                    },

                    onkeyup: function (t, e) {

                        (9 === e.which && "" === this.elementValue(t)) || -1 !== u.inArray(e.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || ((t.name in this.submitted || t.name in this.invalid) && this.element(t));

                    },

                    onclick: function (t) {

                        t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode);

                    },

                    highlight: function (t, e, i) {

                        ("radio" === t.type ? this.findByName(t.name) : u(t)).addClass(e).removeClass(i);

                    },

                    unhighlight: function (t, e, i) {

                        ("radio" === t.type ? this.findByName(t.name) : u(t)).removeClass(e).addClass(i);

                    },

                },

                setDefaults: function (t) {

                    u.extend(u.validator.defaults, t);

                },

                messages: {

                    required: "This field is required.",

                    remote: "Please fix this field.",

                    email: "Please enter a valid email address.",

                    url: "Please enter a valid URL.",

                    date: "Please enter a valid date.",

                    dateISO: "Please enter a valid date (ISO).",

                    number: "Please enter a valid number.",

                    digits: "Please enter only digits.",

                    equalTo: "Please enter the same value again.",

                    maxlength: u.validator.format("Please enter no more than {0} characters."),

                    minlength: u.validator.format("Please enter at least {0} characters."),

                    rangelength: u.validator.format("Please enter a value between {0} and {1} characters long."),

                    range: u.validator.format("Please enter a value between {0} and {1}."),

                    max: u.validator.format("Please enter a value less than or equal to {0}."),

                    min: u.validator.format("Please enter a value greater than or equal to {0}."),

                    step: u.validator.format("Please enter a multiple of {0}."),

                },

                autoCreateRanges: !1,

                prototype: {

                    init: function () {

                        function t(t) {

                            var e,

                                i,

                                n = void 0 !== u(this).attr("contenteditable") && "false" !== u(this).attr("contenteditable");

                            !this.form && n && ((this.form = u(this).closest("form")[0]), (this.name = u(this).attr("name"))),

                                o === this.form && ((n = u.data(this.form, "validator")), (e = "on" + t.type.replace(/^validate/, "")), (i = n.settings)[e]) && !u(this).is(i.ignore) && i[e].call(n, this, t);

                        }

                        (this.labelContainer = u(this.settings.errorLabelContainer)),

                            (this.errorContext = (this.labelContainer.length && this.labelContainer) || u(this.currentForm)),

                            (this.containers = u(this.settings.errorContainer).add(this.settings.errorLabelContainer)),

                            (this.submitted = {}),

                            (this.valueCache = {}),

                            (this.pendingRequest = 0),

                            (this.pending = {}),

                            (this.invalid = {}),

                            this.reset();

                        var i,

                            o = this.currentForm,

                            n = (this.groups = {});

                        u.each(this.settings.groups, function (i, t) {

                            "string" == typeof t && (t = t.split(/\s/)),

                                u.each(t, function (t, e) {

                                    n[e] = i;

                                });

                        }),

                            (i = this.settings.rules),

                            u.each(i, function (t, e) {

                                i[t] = u.validator.normalizeRule(e);

                            }),

                            u(this.currentForm)

                                .on(

                                    "focusin.validate focusout.validate keyup.validate",

                                    [

                                        ":text",

                                        "[type='password']",

                                        "[type='file']",

                                        "select",

                                        "textarea",

                                        "[type='number']",

                                        "[type='search']",

                                        "[type='tel']",

                                        "[type='url']",

                                        "[type='email']",

                                        "[type='datetime']",

                                        "[type='date']",

                                        "[type='month']",

                                        "[type='week']",

                                        "[type='time']",

                                        "[type='datetime-local']",

                                        "[type='range']",

                                        "[type='color']",

                                        "[type='radio']",

                                        "[type='checkbox']",

                                        "[contenteditable]",

                                        "[type='button']",

                                    ]

                                        .concat(this.settings.customElements)

                                        .join(", "),

                                    t

                                )

                                .on("click.validate", ["select", "option", "[type='radio']", "[type='checkbox']"].concat(this.settings.customElements).join(", "), t),

                            this.settings.invalidHandler && u(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);

                    },

                    form: function () {

                        return (

                            this.checkForm(), u.extend(this.submitted, this.errorMap), (this.invalid = u.extend({}, this.errorMap)), this.valid() || u(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()

                        );

                    },

                    checkForm: function () {

                        this.prepareForm();

                        for (var t = 0, e = (this.currentElements = this.elements()); e[t]; t++) this.check(e[t]);

                        return this.valid();

                    },

                    element: function (t) {

                        var e,

                            i,

                            n = this.clean(t),

                            o = this.validationTargetFor(n),

                            r = this,

                            s = !0;

                        return (

                            void 0 === o

                                ? delete this.invalid[n.name]

                                : (this.prepareElement(o),

                                  (this.currentElements = u(o)),

                                  (i = this.groups[o.name]) &&

                                      u.each(this.groups, function (t, e) {

                                          e === i && t !== o.name && (n = r.validationTargetFor(r.clean(r.findByName(t)))) && n.name in r.invalid && (r.currentElements.push(n), (s = r.check(n) && s));

                                      }),

                                  (e = !1 !== this.check(o)),

                                  (s = s && e),

                                  (this.invalid[o.name] = !e),

                                  this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),

                                  this.showErrors(),

                                  u(t).attr("aria-invalid", !e)),

                            s

                        );

                    },

                    showErrors: function (e) {

                        var i;

                        e &&

                            (u.extend((i = this).errorMap, e),

                            (this.errorList = u.map(this.errorMap, function (t, e) {

                                return { message: t, element: i.findByName(e)[0] };

                            })),

                            (this.successList = u.grep(this.successList, function (t) {

                                return !(t.name in e);

                            }))),

                            this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();

                    },

                    resetForm: function () {

                        u.fn.resetForm && u(this.currentForm).resetForm(), (this.invalid = {}), (this.submitted = {}), this.prepareForm(), this.hideErrors();

                        var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");

                        this.resetElements(t);

                    },

                    resetElements: function (t) {

                        var e;

                        if (this.settings.unhighlight) for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);

                        else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);

                    },

                    numberOfInvalids: function () {

                        return this.objectLength(this.invalid);

                    },

                    objectLength: function (t) {

                        var e,

                            i = 0;

                        for (e in t) void 0 !== t[e] && null !== t[e] && !1 !== t[e] && i++;

                        return i;

                    },

                    hideErrors: function () {

                        this.hideThese(this.toHide);

                    },

                    hideThese: function (t) {

                        t.not(this.containers).text(""), this.addWrapper(t).hide();

                    },

                    valid: function () {

                        return 0 === this.size();

                    },

                    size: function () {

                        return this.errorList.length;

                    },

                    focusInvalid: function () {

                        if (this.settings.focusInvalid)

                            try {

                                u(this.findLastActive() || (this.errorList.length && this.errorList[0].element) || [])

                                    .filter(":visible")

                                    .trigger("focus")

                                    .trigger("focusin");

                            } catch (t) {}

                    },

                    findLastActive: function () {

                        var e = this.lastActive;

                        return (

                            e &&

                            1 ===

                                u.grep(this.errorList, function (t) {

                                    return t.element.name === e.name;

                                }).length &&

                            e

                        );

                    },

                    elements: function () {

                        var i = this,

                            n = {};

                        return u(this.currentForm)

                            .find(["input", "select", "textarea", "[contenteditable]"].concat(this.settings.customElements).join(", "))

                            .not(":submit, :reset, :image, :disabled")

                            .not(this.settings.ignore)

                            .filter(function () {

                                var t = this.name || u(this).attr("name"),

                                    e = void 0 !== u(this).attr("contenteditable") && "false" !== u(this).attr("contenteditable");

                                return (

                                    !t && i.settings.debug && window.console && console.error("%o has no name assigned", this),

                                    e && ((this.form = u(this).closest("form")[0]), (this.name = t)),

                                    this.form === i.currentForm && !(t in n || !i.objectLength(u(this).rules())) && (n[t] = !0)

                                );

                            });

                    },

                    clean: function (t) {

                        return u(t)[0];

                    },

                    errors: function () {

                        var t = this.settings.errorClass.split(" ").join(".");

                        return u(this.settings.errorElement + "." + t, this.errorContext);

                    },

                    resetInternals: function () {

                        (this.successList = []), (this.errorList = []), (this.errorMap = {}), (this.toShow = u([])), (this.toHide = u([]));

                    },

                    reset: function () {

                        this.resetInternals(), (this.currentElements = u([]));

                    },

                    prepareForm: function () {

                        this.reset(), (this.toHide = this.errors().add(this.containers));

                    },

                    prepareElement: function (t) {

                        this.reset(), (this.toHide = this.errorsFor(t));

                    },

                    elementValue: function (t) {

                        var e = u(t),

                            i = t.type,

                            n = void 0 !== e.attr("contenteditable") && "false" !== e.attr("contenteditable");

                        return "radio" === i || "checkbox" === i

                            ? this.findByName(t.name).filter(":checked").val()

                            : "number" === i && void 0 !== t.validity

                            ? t.validity.badInput

                                ? "NaN"

                                : e.val()

                            : ((t = n ? e.text() : e.val()),

                              "file" === i ? ("C:\\fakepath\\" === t.substr(0, 12) ? t.substr(12) : 0 <= (n = t.lastIndexOf("/")) || 0 <= (n = t.lastIndexOf("\\")) ? t.substr(n + 1) : t) : "string" == typeof t ? t.replace(/\r/g, "") : t);

                    },

                    check: function (t) {

                        t = this.validationTargetFor(this.clean(t));

                        var e,

                            i,

                            n,

                            o,

                            r = u(t).rules(),

                            s = u.map(r, function (t, e) {

                                return e;

                            }).length,

                            a = !1,

                            l = this.elementValue(t);

                        for (i in (this.abortRequest(t),

                        "function" == typeof r.normalizer ? (o = r.normalizer) : "function" == typeof this.settings.normalizer && (o = this.settings.normalizer),

                        o && ((l = o.call(t, l)), delete r.normalizer),

                        r)) {

                            n = { method: i, parameters: r[i] };

                            try {

                                if ("dependency-mismatch" === (e = u.validator.methods[i].call(this, l, t, n.parameters)) && 1 === s) a = !0;

                                else {

                                    if (((a = !1), "pending" === e)) return void (this.toHide = this.toHide.not(this.errorsFor(t)));

                                    if (!e) return this.formatAndAdd(t, n), !1;

                                }

                            } catch (e) {

                                throw (

                                    (this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + n.method + "' method.", e),

                                    e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + n.method + "' method."),

                                    e)

                                );

                            }

                        }

                        if (!a) return this.objectLength(r) && this.successList.push(t), !0;

                    },

                    customDataMessage: function (t, e) {

                        return u(t).data("msg" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()) || u(t).data("msg");

                    },

                    customMessage: function (t, e) {

                        return (t = this.settings.messages[t]) && (t.constructor === String ? t : t[e]);

                    },

                    findDefined: function () {

                        for (var t = 0; t < arguments.length; t++) if (void 0 !== arguments[t]) return arguments[t];

                    },

                    defaultMessage: function (t, e) {

                        var i = this.findDefined(

                                this.customMessage(t.name, (e = "string" == typeof e ? { method: e } : e).method),

                                this.customDataMessage(t, e.method),

                                (!this.settings.ignoreTitle && t.title) || void 0,

                                u.validator.messages[e.method],

                                "<strong>Warning: No message defined for " + t.name + "</strong>"

                            ),

                            n = /\$?\{(\d+)\}/g;

                        return "function" == typeof i ? (i = i.call(this, e.parameters, t)) : n.test(i) && (i = u.validator.format(i.replace(n, "{$1}"), e.parameters)), i;

                    },

                    formatAndAdd: function (t, e) {

                        var i = this.defaultMessage(t, e);

                        this.errorList.push({ message: i, element: t, method: e.method }), (this.errorMap[t.name] = i), (this.submitted[t.name] = i);

                    },

                    addWrapper: function (t) {

                        return this.settings.wrapper ? t.add(t.parent(this.settings.wrapper)) : t;

                    },

                    defaultShowErrors: function () {

                        for (var t, e, i = 0; this.errorList[i]; i++)

                            (e = this.errorList[i]), this.settings.highlight && this.settings.highlight.call(this, e.element, this.settings.errorClass, this.settings.validClass), this.showLabel(e.element, e.message);

                        if ((this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)) for (i = 0; this.successList[i]; i++) this.showLabel(this.successList[i]);

                        if (this.settings.unhighlight) for (i = 0, t = this.validElements(); t[i]; i++) this.settings.unhighlight.call(this, t[i], this.settings.errorClass, this.settings.validClass);

                        (this.toHide = this.toHide.not(this.toShow)), this.hideErrors(), this.addWrapper(this.toShow).show();

                    },

                    validElements: function () {

                        return this.currentElements.not(this.invalidElements());

                    },

                    invalidElements: function () {

                        return u(this.errorList).map(function () {

                            return this.element;

                        });

                    },

                    showLabel: function (t, e) {

                        var i,

                            n,

                            o,

                            r = this.errorsFor(t),

                            s = this.idOrName(t),

                            a = u(t).attr("aria-describedby");

                        r.length

                            ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), this.settings && this.settings.escapeHtml ? r.text(e || "") : r.html(e || ""))

                            : ((r = u("<" + this.settings.errorElement + ">")

                                  .attr("id", s + "-error")

                                  .addClass(this.settings.errorClass)),

                              this.settings && this.settings.escapeHtml ? r.text(e || "") : r.html(e || ""),

                              (n = r),

                              this.settings.wrapper &&

                                  (n = r

                                      .hide()

                                      .show()

                                      .wrap("<" + this.settings.wrapper + "/>")

                                      .parent()),

                              this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, n, u(t)) : n.insertAfter(t),

                              r.is("label")

                                  ? r.attr("for", s)

                                  : 0 === r.parents("label[for='" + this.escapeCssMeta(s) + "']").length &&

                                    ((n = r.attr("id")), a ? a.match(new RegExp("\\b" + this.escapeCssMeta(n) + "\\b")) || (a += " " + n) : (a = n), u(t).attr("aria-describedby", a), (i = this.groups[t.name])) &&

                                    u.each((o = this).groups, function (t, e) {

                                        e === i && u("[name='" + o.escapeCssMeta(t) + "']", o.currentForm).attr("aria-describedby", r.attr("id"));

                                    })),

                            !e && this.settings.success && (r.text(""), "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, t)),

                            (this.toShow = this.toShow.add(r));

                    },

                    errorsFor: function (t) {

                        var e = "label[for='" + (e = this.escapeCssMeta(this.idOrName(t))) + "'], label[for='" + e + "'] *";

                        return (t = u(t).attr("aria-describedby")) && (e = e + ", #" + this.escapeCssMeta(t).replace(/\s+/g, ", #")), this.errors().filter(e);

                    },

                    escapeCssMeta: function (t) {

                        return void 0 === t ? "" : t.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");

                    },

                    idOrName: function (t) {

                        return this.groups[t.name] || (!this.checkable(t) && t.id) || t.name;

                    },

                    validationTargetFor: function (t) {

                        return this.checkable(t) && (t = this.findByName(t.name)), u(t).not(this.settings.ignore)[0];

                    },

                    checkable: function (t) {

                        return /radio|checkbox/i.test(t.type);

                    },

                    findByName: function (t) {

                        return u(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']");

                    },

                    getLength: function (t, e) {

                        switch (e.nodeName.toLowerCase()) {

                            case "select":

                                return u("option:selected", e).length;

                            case "input":

                                if (this.checkable(e)) return this.findByName(e.name).filter(":checked").length;

                        }

                        return t.length;

                    },

                    depend: function (t, e) {

                        return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e);

                    },

                    dependTypes: {

                        boolean: function (t) {

                            return t;

                        },

                        string: function (t, e) {

                            return !!u(t, e.form).length;

                        },

                        function: function (t, e) {

                            return t(e);

                        },

                    },

                    optional: function (t) {

                        var e = this.elementValue(t);

                        return !u.validator.methods.required.call(this, e, t) && "dependency-mismatch";

                    },

                    elementAjaxPort: function (t) {

                        return "validate" + t.name;

                    },

                    startRequest: function (t) {

                        this.pending[t.name] || (this.pendingRequest++, u(t).addClass(this.settings.pendingClass), (this.pending[t.name] = !0));

                    },

                    stopRequest: function (t, e) {

                        this.pendingRequest--,

                            this.pendingRequest < 0 && (this.pendingRequest = 0),

                            delete this.pending[t.name],

                            u(t).removeClass(this.settings.pendingClass),

                            e && 0 === this.pendingRequest && this.formSubmitted && this.form() && 0 === this.pendingRequest

                                ? (u(this.currentForm).trigger("submit"), this.submitButton && u("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), (this.formSubmitted = !1))

                                : !e && 0 === this.pendingRequest && this.formSubmitted && (u(this.currentForm).triggerHandler("invalid-form", [this]), (this.formSubmitted = !1));

                    },

                    abortRequest: function (t) {

                        var e;

                        this.pending[t.name] &&

                            ((e = this.elementAjaxPort(t)), u.ajaxAbort(e), this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], u(t).removeClass(this.settings.pendingClass));

                    },

                    previousValue: function (t, e) {

                        return (e = ("string" == typeof e && e) || "remote"), u.data(t, "previousValue") || u.data(t, "previousValue", { old: null, valid: !0, message: this.defaultMessage(t, { method: e }) });

                    },

                    destroy: function () {

                        this.resetForm(),

                            u(this.currentForm)

                                .off(".validate")

                                .removeData("validator")

                                .find(".validate-equalTo-blur")

                                .off(".validate-equalTo")

                                .removeClass("validate-equalTo-blur")

                                .find(".validate-lessThan-blur")

                                .off(".validate-lessThan")

                                .removeClass("validate-lessThan-blur")

                                .find(".validate-lessThanEqual-blur")

                                .off(".validate-lessThanEqual")

                                .removeClass("validate-lessThanEqual-blur")

                                .find(".validate-greaterThanEqual-blur")

                                .off(".validate-greaterThanEqual")

                                .removeClass("validate-greaterThanEqual-blur")

                                .find(".validate-greaterThan-blur")

                                .off(".validate-greaterThan")

                                .removeClass("validate-greaterThan-blur");

                    },

                },

                classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } },

                addClassRules: function (t, e) {

                    t.constructor === String ? (this.classRuleSettings[t] = e) : u.extend(this.classRuleSettings, t);

                },

                classRules: function (t) {

                    var e = {};

                    return (

                        (t = u(t).attr("class")) &&

                            u.each(t.split(" "), function () {

                                this in u.validator.classRuleSettings && u.extend(e, u.validator.classRuleSettings[this]);

                            }),

                        e

                    );

                },

                normalizeAttributeRule: function (t, e, i, n) {

                    (n = /min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && ((n = Number(n)), isNaN(n)) ? void 0 : n) || 0 === n ? (t[i] = n) : e === i && "range" !== e && (t["date" === e ? "dateISO" : i] = !0);

                },

                attributeRules: function (t) {

                    var e,

                        i,

                        n = {},

                        o = u(t),

                        r = t.getAttribute("type");

                    for (e in u.validator.methods) (i = "required" === e ? ((i = t.getAttribute(e)), "" === i && (i = !0), !!i) : o.attr(e)), this.normalizeAttributeRule(n, r, e, i);

                    return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n;

                },

                dataRules: function (t) {

                    var e,

                        i,

                        n = {},

                        o = u(t),

                        r = t.getAttribute("type");

                    for (e in u.validator.methods) (i = o.data("rule" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase())), "" === i && (i = !0), this.normalizeAttributeRule(n, r, e, i);

                    return n;

                },

                staticRules: function (t) {

                    var e = u.data(t.form, "validator");

                    return (e.settings.rules && u.validator.normalizeRule(e.settings.rules[t.name])) || {};

                },

                normalizeRules: function (n, o) {

                    return (

                        u.each(n, function (t, e) {

                            if (!1 === e) delete n[t];

                            else if (e.param || e.depends) {

                                var i = !0;

                                switch (typeof e.depends) {

                                    case "string":

                                        i = !!u(e.depends, o.form).length;

                                        break;

                                    case "function":

                                        i = e.depends.call(o, o);

                                }

                                i ? (n[t] = void 0 === e.param || e.param) : (u.data(o.form, "validator").resetElements(u(o)), delete n[t]);

                            }

                        }),

                        u.each(n, function (t, e) {

                            n[t] = "function" == typeof e && "normalizer" !== t ? e(o) : e;

                        }),

                        u.each(["minlength", "maxlength"], function () {

                            n[this] && (n[this] = Number(n[this]));

                        }),

                        u.each(["rangelength", "range"], function () {

                            var t;

                            n[this] &&

                                (Array.isArray(n[this])

                                    ? (n[this] = [Number(n[this][0]), Number(n[this][1])])

                                    : "string" == typeof n[this] && ((t = n[this].replace(/[\[\]]/g, "").split(/[\s,]+/)), (n[this] = [Number(t[0]), Number(t[1])])));

                        }),

                        u.validator.autoCreateRanges &&

                            (null != n.min && null != n.max && ((n.range = [n.min, n.max]), delete n.min, delete n.max), null != n.minlength) &&

                            null != n.maxlength &&

                            ((n.rangelength = [n.minlength, n.maxlength]), delete n.minlength, delete n.maxlength),

                        n

                    );

                },

                normalizeRule: function (t) {

                    var e;

                    return (

                        "string" == typeof t &&

                            ((e = {}),

                            u.each(t.split(/\s/), function () {

                                e[this] = !0;

                            }),

                            (t = e)),

                        t

                    );

                },

                addMethod: function (t, e, i) {

                    (u.validator.methods[t] = e), (u.validator.messages[t] = void 0 !== i ? i : u.validator.messages[t]), e.length < 3 && u.validator.addClassRules(t, u.validator.normalizeRule(t));

                },

                methods: {

                    required: function (t, e, i) {

                        return this.depend(i, e) ? ("select" === e.nodeName.toLowerCase() ? (i = u(e).val()) && 0 < i.length : this.checkable(e) ? 0 < this.getLength(t, e) : null != t && 0 < t.length) : "dependency-mismatch";

                    },

                    email: function (t, e) {

                        return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t);

                    },

                    url: function (t, e) {

                        return (

                            this.optional(e) ||

                            /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(

                                t

                            )

                        );

                    },

                    date:

                        ((i = !1),

                        function (t, e) {

                            return (

                                i ||

                                    ((i = !0),

                                    this.settings.debug &&

                                        window.console &&

                                        console.warn(

                                            "The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`."

                                        )),

                                this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())

                            );

                        }),

                    dateISO: function (t, e) {

                        return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t);

                    },

                    number: function (t, e) {

                        return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:-?\.\d+)?$/.test(t);

                    },

                    digits: function (t, e) {

                        return this.optional(e) || /^\d+$/.test(t);

                    },

                    minlength: function (t, e, i) {

                        return (t = Array.isArray(t) ? t.length : this.getLength(t, e)), this.optional(e) || i <= t;

                    },

                    maxlength: function (t, e, i) {

                        return (t = Array.isArray(t) ? t.length : this.getLength(t, e)), this.optional(e) || t <= i;

                    },

                    rangelength: function (t, e, i) {

                        return (t = Array.isArray(t) ? t.length : this.getLength(t, e)), this.optional(e) || (t >= i[0] && t <= i[1]);

                    },

                    min: function (t, e, i) {

                        return this.optional(e) || i <= t;

                    },

                    max: function (t, e, i) {

                        return this.optional(e) || t <= i;

                    },

                    range: function (t, e, i) {

                        return this.optional(e) || (t >= i[0] && t <= i[1]);

                    },

                    step: function (t, e, i) {

                        function n(t) {

                            return (t = ("" + t).match(/(?:\.(\d+))?$/)) && t[1] ? t[1].length : 0;

                        }

                        function o(t) {

                            return Math.round(t * Math.pow(10, r));

                        }

                        var r,

                            s = u(e).attr("type"),

                            a = "Step attribute on input type " + s + " is not supported.",

                            l = new RegExp("\\b" + s + "\\b"),

                            c = !0;

                        if (s && !l.test(["text", "number", "range"].join())) throw new Error(a);

                        return (r = n(i)), (n(t) > r || o(t) % o(i) != 0) && (c = !1), this.optional(e) || c;

                    },

                    equalTo: function (t, e, i) {

                        return (

                            (i = u(i)),

                            this.settings.onfocusout &&

                                i.not(".validate-equalTo-blur").length &&

                                i.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {

                                    u(e).valid();

                                }),

                            t === i.val()

                        );

                    },

                    remote: function (n, o, t, r) {

                        if (this.optional(o)) return "dependency-mismatch";

                        r = ("string" == typeof r && r) || "remote";

                        var s,

                            e,

                            a = this.previousValue(o, r);

                        return (

                            this.settings.messages[o.name] || (this.settings.messages[o.name] = {}),

                            (a.originalMessage = a.originalMessage || this.settings.messages[o.name][r]),

                            (this.settings.messages[o.name][r] = a.message),

                            (e = u.param(u.extend({ data: n }, (t = "string" == typeof t ? { url: t } : t).data))),

                            null !== a.valid && a.old === e

                                ? a.valid

                                : ((a.old = e),

                                  (a.valid = null),

                                  (s = this).startRequest(o),

                                  ((e = {})[o.name] = n),

                                  u.ajax(

                                      u.extend(

                                          !0,

                                          {

                                              mode: "abort",

                                              port: this.elementAjaxPort(o),

                                              dataType: "json",

                                              data: e,

                                              context: s.currentForm,

                                              success: function (t) {

                                                  var e,

                                                      i = !0 === t || "true" === t;

                                                  (s.settings.messages[o.name][r] = a.originalMessage),

                                                      i

                                                          ? ((e = s.formSubmitted), (s.toHide = s.errorsFor(o)), (s.formSubmitted = e), s.successList.push(o), (s.invalid[o.name] = !1), s.showErrors())

                                                          : ((e = {}), (t = t || s.defaultMessage(o, { method: r, parameters: n })), (e[o.name] = a.message = t), (s.invalid[o.name] = !0), s.showErrors(e)),

                                                      (a.valid = i),

                                                      s.stopRequest(o, i);

                                              },

                                          },

                                          t

                                      )

                                  ),

                                  "pending")

                        );

                    },

                },

            });

        var n,

            o = {};

        return (

            u.ajaxPrefilter

                ? u.ajaxPrefilter(function (t, e, i) {

                      var n = t.port;

                      "abort" === t.mode && (u.ajaxAbort(n), (o[n] = i));

                  })

                : ((n = u.ajax),

                  (u.ajax = function (t) {

                      var e = ("mode" in t ? t : u.ajaxSettings).mode,

                          i = ("port" in t ? t : u.ajaxSettings).port;

                      return "abort" === e ? (u.ajaxAbort(i), (o[i] = n.apply(this, arguments)), o[i]) : n.apply(this, arguments);

                  })),

            (u.ajaxAbort = function (t) {

                o[t] && (o[t].abort(), delete o[t]);

            }),

            u

        );

    }),

    (function (t) {

        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && "object" == typeof module.exports ? (exports = t(require("jquery"))) : t(jQuery);

    })(function (e) {

        function i(t) {

            var e = 7.5625;

            return t < 1 / 2.75 ? e * t * t : t < 2 / 2.75 ? e * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? e * (t -= 2.25 / 2.75) * t + 0.9375 : e * (t -= 2.625 / 2.75) * t + 0.984375;

        }

        e.easing.jswing = e.easing.swing;

        var n = Math.pow,

            o = Math.sqrt,

            r = Math.sin,

            s = Math.cos,

            a = Math.PI,

            l = 2.5949095,

            c = (2 * a) / 3,

            u = (2 * a) / 4.5;

        e.extend(e.easing, {

            def: "easeOutQuad",

            swing: function (t) {

                return e.easing[e.easing.def](t);

            },

            easeInQuad: function (t) {

                return t * t;

            },

            easeOutQuad: function (t) {

                return 1 - (1 - t) * (1 - t);

            },

            easeInOutQuad: function (t) {

                return t < 0.5 ? 2 * t * t : 1 - n(-2 * t + 2, 2) / 2;

            },

            easeInCubic: function (t) {

                return t * t * t;

            },

            easeOutCubic: function (t) {

                return 1 - n(1 - t, 3);

            },

            easeInOutCubic: function (t) {

                return t < 0.5 ? 4 * t * t * t : 1 - n(-2 * t + 2, 3) / 2;

            },

            easeInQuart: function (t) {

                return t * t * t * t;

            },

            easeOutQuart: function (t) {

                return 1 - n(1 - t, 4);

            },

            easeInOutQuart: function (t) {

                return t < 0.5 ? 8 * t * t * t * t : 1 - n(-2 * t + 2, 4) / 2;

            },

            easeInQuint: function (t) {

                return t * t * t * t * t;

            },

            easeOutQuint: function (t) {

                return 1 - n(1 - t, 5);

            },

            easeInOutQuint: function (t) {

                return t < 0.5 ? 16 * t * t * t * t * t : 1 - n(-2 * t + 2, 5) / 2;

            },

            easeInSine: function (t) {

                return 1 - s((t * a) / 2);

            },

            easeOutSine: function (t) {

                return r((t * a) / 2);

            },

            easeInOutSine: function (t) {

                return -(s(a * t) - 1) / 2;

            },

            easeInExpo: function (t) {

                return 0 === t ? 0 : n(2, 10 * t - 10);

            },

            easeOutExpo: function (t) {

                return 1 === t ? 1 : 1 - n(2, -10 * t);

            },

            easeInOutExpo: function (t) {

                return 0 === t ? 0 : 1 === t ? 1 : t < 0.5 ? n(2, 20 * t - 10) / 2 : (2 - n(2, -20 * t + 10)) / 2;

            },

            easeInCirc: function (t) {

                return 1 - o(1 - n(t, 2));

            },

            easeOutCirc: function (t) {

                return o(1 - n(t - 1, 2));

            },

            easeInOutCirc: function (t) {

                return t < 0.5 ? (1 - o(1 - n(2 * t, 2))) / 2 : (o(1 - n(-2 * t + 2, 2)) + 1) / 2;

            },

            easeInElastic: function (t) {

                return 0 === t ? 0 : 1 === t ? 1 : -n(2, 10 * t - 10) * r((10 * t - 10.75) * c);

            },

            easeOutElastic: function (t) {

                return 0 === t ? 0 : 1 === t ? 1 : n(2, -10 * t) * r((10 * t - 0.75) * c) + 1;

            },

            easeInOutElastic: function (t) {

                return 0 === t ? 0 : 1 === t ? 1 : t < 0.5 ? (-n(2, 20 * t - 10) * r((20 * t - 11.125) * u)) / 2 : (n(2, -20 * t + 10) * r((20 * t - 11.125) * u)) / 2 + 1;

            },

            easeInBack: function (t) {

                return 2.70158 * t * t * t - 1.70158 * t * t;

            },

            easeOutBack: function (t) {

                return 1 + 2.70158 * n(t - 1, 3) + 1.70158 * n(t - 1, 2);

            },

            easeInOutBack: function (t) {

                return t < 0.5 ? (n(2 * t, 2) * (7.189819 * t - l)) / 2 : (n(2 * t - 2, 2) * ((1 + l) * (2 * t - 2) + l) + 2) / 2;

            },

            easeInBounce: function (t) {

                return 1 - i(1 - t);

            },

            easeOutBounce: i,

            easeInOutBounce: function (t) {

                return t < 0.5 ? (1 - i(1 - 2 * t)) / 2 : (1 + i(2 * t - 1)) / 2;

            },

        });

    }),

    (function (t, e) {

        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? e(require("jquery")) : e(t.jQuery);

    })(this, function (n) {

        (n.fn.appear = function (i, t) {

            var d = n.extend({ data: void 0, one: !0, accX: 0, accY: 0 }, t);

            return this.each(function () {

                var u,

                    e,

                    t,

                    h = n(this);

                (h.appeared = !1),

                    i

                        ? ((u = n(window)),

                          (e = function () {

                              var t, e, i, n, o, r, s, a, l, c;

                              h.is(":visible") &&

                              ((t = u.scrollLeft()), (e = u.scrollTop()), (i = (n = h.offset()).left), (n = n.top), (o = d.accX), (r = d.accY), (s = h.height()), (a = u.height()), (l = h.width()), (c = u.width()), e <= n + s + r) &&

                              n <= e + a + r &&

                              t <= i + l + o &&

                              i <= t + c + o

                                  ? h.appeared || h.trigger("appear", d.data)

                                  : (h.appeared = !1);

                          }),

                          (t = function () {

                              var t;

                              (h.appeared = !0), d.one && (u.unbind("scroll", e), 0 <= (t = n.inArray(e, n.fn.appear.checks))) && n.fn.appear.checks.splice(t, 1), i.apply(this, arguments);

                          }),

                          d.one ? h.one("appear", d.data, t) : h.bind("appear", d.data, t),

                          u.scroll(e),

                          n.fn.appear.checks.push(e),

                          e())

                        : h.trigger("appear", d.data);

            });

        }),

            n.extend(n.fn.appear, {

                checks: [],

                timeout: null,

                checkAll: function () {

                    var t = n.fn.appear.checks.length;

                    if (0 < t) for (; t--; ) n.fn.appear.checks[t]();

                },

                run: function () {

                    n.fn.appear.timeout && clearTimeout(n.fn.appear.timeout), (n.fn.appear.timeout = setTimeout(n.fn.appear.checkAll, 20));

                },

            }),

            n.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function (t, e) {

                var i = n.fn[e];

                i &&

                    (n.fn[e] = function () {

                        var t = i.apply(this, arguments);

                        return n.fn.appear.run(), t;

                    });

            });

    }),

    (function (t) {

        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? (module.exports = t(require("jquery"))) : t(jQuery);

    })(function (i) {

        function s(t, s) {

            function i() {

                s.scaleColor && c(), s.trackColor && l(s.trackColor, s.trackWidth || s.lineWidth, 1);

            }

            var n,

                e = document.createElement("canvas"),

                o = (t.appendChild(e), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(e), e.getContext("2d")),

                r = ((e.width = e.height = s.size), 1),

                a =

                    (1 < window.devicePixelRatio && ((r = window.devicePixelRatio), (e.style.width = e.style.height = [s.size, "px"].join("")), (e.width = e.height = s.size * r), o.scale(r, r)),

                    o.translate(s.size / 2, s.size / 2),

                    o.rotate((s.rotate / 180 - 0.5) * Math.PI),

                    (s.size - s.lineWidth) / 2),

                l =

                    (s.scaleColor && s.scaleLength && (a -= s.scaleLength + 2),

                    (Date.now =

                        Date.now ||

                        function () {

                            return +new Date();

                        }),

                    function (t, e, i) {

                        var n = (i = Math.min(Math.max(-1, i || 0), 1)) <= 0;

                        o.beginPath(), o.arc(0, 0, a, 0, 2 * Math.PI * i, n), (o.strokeStyle = t), (o.lineWidth = e), o.stroke();

                    }),

                c = function () {

                    var t, e;

                    (o.lineWidth = 1), (o.fillStyle = s.scaleColor), o.save();

                    for (var i = 24; 0 < i; --i) (t = i % 6 == 0 ? ((e = s.scaleLength), 0) : ((e = 0.6 * s.scaleLength), s.scaleLength - e)), o.fillRect(-s.size / 2 + t, 0, e, 1), o.rotate(Math.PI / 12);

                    o.restore();

                },

                u =

                    window.requestAnimationFrame ||

                    window.webkitRequestAnimationFrame ||

                    window.mozRequestAnimationFrame ||

                    function (t) {

                        window.setTimeout(t, 1e3 / 60);

                    };

            (this.getCanvas = function () {

                return e;

            }),

                (this.getCtx = function () {

                    return o;

                }),

                (this.clear = function () {

                    o.clearRect(s.size / -2, s.size / -2, s.size, s.size);

                }),

                (this.draw = function (t) {

                    var e;

                    s.scaleColor || s.trackColor ? (o.getImageData && o.putImageData ? (n ? o.putImageData(n, 0, 0) : (i(), (n = o.getImageData(0, 0, s.size * r, s.size * r)))) : (this.clear(), i())) : this.clear(),

                        (o.lineCap = s.lineCap),

                        (e = "function" == typeof s.barColor ? s.barColor(t) : s.barColor),

                        l(e, s.lineWidth, t / 100);

                }.bind(this)),

                (this.animate = function (i, n) {

                    var o = Date.now(),

                        r =

                            (s.onStart(i, n),

                            function () {

                                var t = Math.min(Date.now() - o, s.animate.duration),

                                    e = s.easing(this, t, i, n - i, s.animate.duration);

                                this.draw(e), s.onStep(i, n, e), t >= s.animate.duration ? s.onStop(i, n) : u(r);

                            }.bind(this));

                    u(r);

                }.bind(this));

        }

        function n(e, i) {

            var n = {

                    barColor: "#ef1e25",

                    trackColor: "#f9f9f9",

                    scaleColor: "#dfe0e0",

                    scaleLength: 5,

                    lineCap: "round",

                    lineWidth: 3,

                    trackWidth: void 0,

                    size: 110,

                    rotate: 0,

                    animate: { duration: 1e3, enabled: !0 },

                    easing: function (t, e, i, n, o) {

                        return (e /= o / 2) < 1 ? (n / 2) * e * e + i : (-n / 2) * (--e * (e - 2) - 1) + i;

                    },

                    onStart: function (t, e) {},

                    onStep: function (t, e, i) {},

                    onStop: function (t, e) {},

                },

                o = ((n.renderer = s), {}),

                r = 0,

                t = function () {

                    for (var t in ((this.el = e), (this.options = o), n)) n.hasOwnProperty(t) && ((o[t] = (i && void 0 !== i[t] ? i : n)[t]), "function" == typeof o[t]) && (o[t] = o[t].bind(this));

                    "string" == typeof o.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[o.easing]) ? (o.easing = jQuery.easing[o.easing]) : (o.easing = n.easing),

                        "number" == typeof o.animate && (o.animate = { duration: o.animate, enabled: !0 }),

                        "boolean" != typeof o.animate || o.animate || (o.animate = { duration: 1e3, enabled: o.animate }),

                        (this.renderer = new o.renderer(e, o)),

                        this.renderer.draw(r),

                        e.dataset && e.dataset.percent ? this.update(parseFloat(e.dataset.percent)) : e.getAttribute && e.getAttribute("data-percent") && this.update(parseFloat(e.getAttribute("data-percent")));

                }.bind(this);

            (this.update = function (t) {

                return (t = parseFloat(t)), o.animate.enabled ? this.renderer.animate(r, t) : this.renderer.draw(t), (r = t), this;

            }.bind(this)),

                (this.disableAnimation = function () {

                    return (o.animate.enabled = !1), this;

                }),

                (this.enableAnimation = function () {

                    return (o.animate.enabled = !0), this;

                }),

                t();

        }

        i.fn.easyPieChart = function (e) {

            return this.each(function () {

                var t;

                i.data(this, "easyPieChart") || ((t = i.extend({}, e, i(this).data())), i.data(this, "easyPieChart", new n(this, t)));

            });

        };

    }),

    (function (e, i) {

        "function" == typeof define && define.amd

            ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {

                  return i(e, t);

              })

            : "object" == typeof module && module.exports

            ? (module.exports = i(e, require("jquery")))

            : (e.jQueryBridget = i(e, e.jQuery));

    })(window, function (t, e) {

        "use strict";

        function i(l, c, u) {

            (u = u || e || t.jQuery) &&

                (c.prototype.option ||

                    (c.prototype.option = function (t) {

                        u.isPlainObject(t) && (this.options = u.extend(!0, this.options, t));

                    }),

                (u.fn[l] = function (t) {

                    var e, n, o, r, s, a;

                    return "string" == typeof t

                        ? ((e = h.call(arguments, 1)),

                          (o = e),

                          (s = "$()." + l + '("' + (n = t) + '")'),

                          this.each(function (t, e) {

                              var i;

                              (e = u.data(e, l)) ? ((i = e[n]) && "_" != n.charAt(0) ? ((i = i.apply(e, o)), (r = void 0 === r ? i : r)) : d(s + " is not a valid method")) : d(l + " not initialized. Cannot call methods, i.e. " + s);

                          }),

                          void 0 !== r ? r : this)

                        : ((a = t),

                          this.each(function (t, e) {

                              var i = u.data(e, l);

                              i ? (i.option(a), i._init()) : ((i = new c(e, a)), u.data(e, l, i));

                          }),

                          this);

                }),

                n(u));

        }

        function n(t) {

            t && !t.bridget && (t.bridget = i);

        }

        var h = Array.prototype.slice,

            o = t.console,

            d =

                void 0 === o

                    ? function () {}

                    : function (t) {

                          o.error(t);

                      };

        return n(e || t.jQuery), i;

    }),

    (function (t, e) {

        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.EvEmitter = e());

    })("undefined" != typeof window ? window : this, function () {

        function t() {}

        var e = t.prototype;

        return (

            (e.on = function (t, e) {

                var i;

                if (t && e) return -1 == (i = (i = this._events = this._events || {})[t] = i[t] || []).indexOf(e) && i.push(e), this;

            }),

            (e.once = function (t, e) {

                var i;

                if (t && e) return this.on(t, e), (((i = this._onceEvents = this._onceEvents || {})[t] = i[t] || {})[e] = !0), this;

            }),

            (e.off = function (t, e) {

                if ((t = this._events && this._events[t]) && t.length) return -1 != (e = t.indexOf(e)) && t.splice(e, 1), this;

            }),

            (e.emitEvent = function (t, e) {

                var i = this._events && this._events[t];

                if (i && i.length) {

                    (i = i.slice(0)), (e = e || []);

                    for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {

                        var r = i[o];

                        n && n[r] && (this.off(t, r), delete n[r]), r.apply(this, e);

                    }

                    return this;

                }

            }),

            (e.allOff = function () {

                delete this._events, delete this._onceEvents;

            }),

            t

        );

    }),

    (function (t, e) {

        "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.getSize = e());

    })(window, function () {

        "use strict";

        function m(t) {

            var e = parseFloat(t);

            return -1 == t.indexOf("%") && !isNaN(e) && e;

        }

        function g(t) {

            return (t = getComputedStyle(t)) || e("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), t;

        }

        function v(t) {

            if (

                (w ||

                    ((w = !0),

                    ((u = document.createElement("div")).style.width = "200px"),

                    (u.style.padding = "1px 2px 3px 4px"),

                    (u.style.borderStyle = "solid"),

                    (u.style.borderWidth = "1px 2px 3px 4px"),

                    (u.style.boxSizing = "border-box"),

                    (c = document.body || document.documentElement).appendChild(u),

                    (r = g(u)),

                    (y = 200 == Math.round(m(r.width))),

                    (v.isBoxSizeOuter = y),

                    c.removeChild(u)),

                (t = "string" == typeof t ? document.querySelector(t) : t) && "object" == typeof t && t.nodeType)

            ) {

                var e = g(t);

                if ("none" == e.display) {

                    for (var i = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, n = 0; n < _; n++) i[b[n]] = 0;

                    return i;

                }

                var o = {};

                (o.width = t.offsetWidth), (o.height = t.offsetHeight);

                for (var r = (o.isBorderBox = "border-box" == e.boxSizing), s = 0; s < _; s++) {

                    var a = b[s],

                        l = e[a],

                        l = parseFloat(l);

                    o[a] = isNaN(l) ? 0 : l;

                }

                var c = o.paddingLeft + o.paddingRight,

                    u = o.paddingTop + o.paddingBottom,

                    h = ((t = o.marginLeft + o.marginRight), o.marginTop + o.marginBottom),

                    d = o.borderLeftWidth + o.borderRightWidth,

                    p = o.borderTopWidth + o.borderBottomWidth,

                    r = r && y,

                    f = m(e.width);

                return (

                    !1 !== f && (o.width = f + (r ? 0 : c + d)),

                    !1 !== (f = m(e.height)) && (o.height = f + (r ? 0 : u + p)),

                    (o.innerWidth = o.width - (c + d)),

                    (o.innerHeight = o.height - (u + p)),

                    (o.outerWidth = o.width + t),

                    (o.outerHeight = o.height + h),

                    o

                );

            }

        }

        var y,

            e =

                "undefined" == typeof console

                    ? function () {}

                    : function (t) {

                          console.error(t);

                      },

            b = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],

            _ = b.length,

            w = !1;

        return v;

    }),

    (function (t, e) {

        "use strict";

        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.matchesSelector = e());

    })(window, function () {

        "use strict";

        var i = (function () {

            var t = window.Element.prototype;

            if (t.matches) return "matches";

            if (t.matchesSelector) return "matchesSelector";

            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {

                var n = e[i] + "MatchesSelector";

                if (t[n]) return n;

            }

        })();

        return function (t, e) {

            return t[i](e);

        };

    }),

    (function (e, i) {

        "function" == typeof define && define.amd

            ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (t) {

                  return i(e, t);

              })

            : "object" == typeof module && module.exports

            ? (module.exports = i(e, require("desandro-matches-selector")))

            : (e.fizzyUIUtils = i(e, e.matchesSelector));

    })(window, function (i, r) {

        var l = {

                extend: function (t, e) {

                    for (var i in e) t[i] = e[i];

                    return t;

                },

                modulo: function (t, e) {

                    return ((t % e) + e) % e;

                },

            },

            e = Array.prototype.slice,

            c =

                ((l.makeArray = function (t) {

                    return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? e.call(t) : [t];

                }),

                (l.removeFrom = function (t, e) {

                    -1 != (e = t.indexOf(e)) && t.splice(e, 1);

                }),

                (l.getParent = function (t, e) {

                    for (; t.parentNode && t != document.body; ) if (((t = t.parentNode), r(t, e))) return t;

                }),

                (l.getQueryElement = function (t) {

                    return "string" == typeof t ? document.querySelector(t) : t;

                }),

                (l.handleEvent = function (t) {

                    var e = "on" + t.type;

                    this[e] && this[e](t);

                }),

                (l.filterFindElements = function (t, n) {

                    t = l.makeArray(t);

                    var o = [];

                    return (

                        t.forEach(function (t) {

                            if (t instanceof HTMLElement)

                                if (n) {

                                    r(t, n) && o.push(t);

                                    for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++) o.push(e[i]);

                                } else o.push(t);

                        }),

                        o

                    );

                }),

                (l.debounceMethod = function (t, e, n) {

                    n = n || 100;

                    var o = t.prototype[e],

                        r = e + "Timeout";

                    t.prototype[e] = function () {

                        var t = this[r],

                            e = (clearTimeout(t), arguments),

                            i = this;

                        this[r] = setTimeout(function () {

                            o.apply(i, e), delete i[r];

                        }, n);

                    };

                }),

                (l.docReady = function (t) {

                    var e = document.readyState;

                    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);

                }),

                (l.toDashed = function (t) {

                    return t

                        .replace(/(.)([A-Z])/g, function (t, e, i) {

                            return e + "-" + i;

                        })

                        .toLowerCase();

                }),

                i.console);

        return (

            (l.htmlInit = function (s, a) {

                l.docReady(function () {

                    var t = l.toDashed(a),

                        n = "data-" + t,

                        e = document.querySelectorAll("[" + n + "]"),

                        o = ((t = document.querySelectorAll(".js-" + t)), (e = l.makeArray(e).concat(l.makeArray(t))), n + "-options"),

                        r = i.jQuery;

                    e.forEach(function (t) {

                        var e,

                            i = t.getAttribute(n) || t.getAttribute(o);

                        try {

                            e = i && JSON.parse(i);

                        } catch (e) {

                            return void (c && c.error("Error parsing " + n + " on " + t.className + ": " + e));

                        }

                        (i = new s(t, e)), r && r.data(t, a, i);

                    });

                });

            }),

            l

        );

    }),

    (function (t, e) {

        "function" == typeof define && define.amd

            ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e)

            : "object" == typeof module && module.exports

            ? (module.exports = e(require("ev-emitter"), require("get-size")))

            : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));

    })(window, function (t, e) {

        "use strict";

        function i(t, e) {

            t && ((this.element = t), (this.layout = e), (this.position = { x: 0, y: 0 }), this._create());

        }

        var n = document.documentElement.style,

            o = "string" == typeof n.transition ? "transition" : "WebkitTransition",

            r = ((n = "string" == typeof n.transform ? "transform" : "WebkitTransform"), { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[o]),

            s = { transform: n, transition: o, transitionDuration: o + "Duration", transitionProperty: o + "Property", transitionDelay: o + "Delay" },

            a =

                (((t = i.prototype = Object.create(t.prototype)).constructor = i),

                (t._create = function () {

                    (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });

                }),

                (t.handleEvent = function (t) {

                    var e = "on" + t.type;

                    this[e] && this[e](t);

                }),

                (t.getSize = function () {

                    this.size = e(this.element);

                }),

                (t.css = function (t) {

                    var e,

                        i = this.element.style;

                    for (e in t) i[s[e] || e] = t[e];

                }),

                (t.getPosition = function () {

                    var t = getComputedStyle(this.element),

                        e = this.layout._getOption("originLeft"),

                        i = this.layout._getOption("originTop"),

                        n = t[e ? "left" : "right"],

                        o = ((t = t[i ? "top" : "bottom"]), parseFloat(n)),

                        r = parseFloat(t),

                        s = this.layout.size;

                    -1 != n.indexOf("%") && (o = (o / 100) * s.width),

                        -1 != t.indexOf("%") && (r = (r / 100) * s.height),

                        (o = isNaN(o) ? 0 : o),

                        (r = isNaN(r) ? 0 : r),

                        (o -= e ? s.paddingLeft : s.paddingRight),

                        (r -= i ? s.paddingTop : s.paddingBottom),

                        (this.position.x = o),

                        (this.position.y = r);

                }),

                (t.layoutPosition = function () {

                    var t = this.layout.size,

                        e = {},

                        i = this.layout._getOption("originLeft"),

                        n = this.layout._getOption("originTop"),

                        o = i ? "right" : "left",

                        r = this.position.x + t[i ? "paddingLeft" : "paddingRight"];

                    (e[i ? "left" : "right"] = this.getXValue(r)),

                        (e[o] = ""),

                        (r = n ? "bottom" : "top"),

                        (o = this.position.y + t[n ? "paddingTop" : "paddingBottom"]),

                        (e[n ? "top" : "bottom"] = this.getYValue(o)),

                        (e[r] = ""),

                        this.css(e),

                        this.emitEvent("layout", [this]);

                }),

                (t.getXValue = function (t) {

                    var e = this.layout._getOption("horizontal");

                    return this.layout.options.percentPosition && !e ? (t / this.layout.size.width) * 100 + "%" : t + "px";

                }),

                (t.getYValue = function (t) {

                    var e = this.layout._getOption("horizontal");

                    return this.layout.options.percentPosition && e ? (t / this.layout.size.height) * 100 + "%" : t + "px";

                }),

                (t._transitionTo = function (t, e) {

                    this.getPosition();

                    var i = this.position.x,

                        n = this.position.y,

                        o = t == this.position.x && e == this.position.y;

                    this.setPosition(t, e),

                        o && !this.isTransitioning ? this.layoutPosition() : (((o = {}).transform = this.getTranslate(t - i, e - n)), this.transition({ to: o, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }));

                }),

                (t.getTranslate = function (t, e) {

                    return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (this.layout._getOption("originTop") ? e : -e) + "px, 0)";

                }),

                (t.goTo = function (t, e) {

                    this.setPosition(t, e), this.layoutPosition();

                }),

                (t.moveTo = t._transitionTo),

                (t.setPosition = function (t, e) {

                    (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));

                }),

                (t._nonTransition = function (t) {

                    for (var e in (this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd)) t.onTransitionEnd[e].call(this);

                }),

                (t.transition = function (t) {

                    if (parseFloat(this.layout.options.transitionDuration)) {

                        var e,

                            i = this._transn;

                        for (e in t.onTransitionEnd) i.onEnd[e] = t.onTransitionEnd[e];

                        for (e in t.to) (i.ingProperties[e] = !0), t.isCleaning && (i.clean[e] = !0);

                        t.from && (this.css(t.from), this.element.offsetHeight), this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0);

                    } else this._nonTransition(t);

                }),

                "opacity," +

                    n.replace(/([A-Z])/g, function (t) {

                        return "-" + t.toLowerCase();

                    })),

            l =

                ((t.enableTransition = function () {

                    var t;

                    this.isTransitioning ||

                        ((t = this.layout.options.transitionDuration),

                        this.css({ transitionProperty: a, transitionDuration: "number" == typeof t ? t + "ms" : t, transitionDelay: this.staggerDelay || 0 }),

                        this.element.addEventListener(r, this, !1));

                }),

                (t.onwebkitTransitionEnd = function (t) {

                    this.ontransitionend(t);

                }),

                (t.onotransitionend = function (t) {

                    this.ontransitionend(t);

                }),

                { "-webkit-transform": "transform" }),

            c =

                ((t.ontransitionend = function (t) {

                    var e, i;

                    t.target === this.element &&

                        ((e = this._transn),

                        (i = l[t.propertyName] || t.propertyName),

                        delete e.ingProperties[i],

                        (function () {

                            for (var t in e.ingProperties) return;

                            return 1;

                        })() && this.disableTransition(),

                        i in e.clean && ((this.element.style[t.propertyName] = ""), delete e.clean[i]),

                        i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]),

                        this.emitEvent("transitionEnd", [this]));

                }),

                (t.disableTransition = function () {

                    this.removeTransitionStyles(), this.element.removeEventListener(r, this, !1), (this.isTransitioning = !1);

                }),

                (t._removeStyles = function (t) {

                    var e,

                        i = {};

                    for (e in t) i[e] = "";

                    this.css(i);

                }),

                { transitionProperty: "", transitionDuration: "", transitionDelay: "" });

        return (

            (t.removeTransitionStyles = function () {

                this.css(c);

            }),

            (t.stagger = function (t) {

                (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");

            }),

            (t.removeElem = function () {

                this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);

            }),

            (t.remove = function () {

                return o && parseFloat(this.layout.options.transitionDuration)

                    ? (this.once("transitionEnd", function () {

                          this.removeElem();

                      }),

                      void this.hide())

                    : void this.removeElem();

            }),

            (t.reveal = function () {

                delete this.isHidden, this.css({ display: "" });

                var t = this.layout.options,

                    e = {};

                (e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd), this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });

            }),

            (t.onRevealTransitionEnd = function () {

                this.isHidden || this.emitEvent("reveal");

            }),

            (t.getHideRevealTransitionEndProperty = function (t) {

                if ((t = this.layout.options[t]).opacity) return "opacity";

                for (var e in t) return e;

            }),

            (t.hide = function () {

                (this.isHidden = !0), this.css({ display: "" });

                var t = this.layout.options,

                    e = {};

                (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd), this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });

            }),

            (t.onHideTransitionEnd = function () {

                this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));

            }),

            (t.destroy = function () {

                this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });

            }),

            i

        );

    }),

    (function (o, r) {

        "use strict";

        "function" == typeof define && define.amd

            ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (t, e, i, n) {

                  return r(o, t, e, i, n);

              })

            : "object" == typeof module && module.exports

            ? (module.exports = r(o, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")))

            : (o.Outlayer = r(o, o.EvEmitter, o.getSize, o.fizzyUIUtils, o.Outlayer.Item));

    })(window, function (t, e, o, n, r) {

        "use strict";

        function s(t, e) {

            var i = n.getQueryElement(t);

            i

                ? ((this.element = i),

                  c && (this.$element = c(this.element)),

                  (this.options = n.extend({}, this.constructor.defaults)),

                  this.option(e),

                  (e = ++u),

                  (this.element.outlayerGUID = e),

                  (h[e] = this)._create(),

                  this._getOption("initLayout") && this.layout())

                : l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t));

        }

        function a(t) {

            function e() {

                t.apply(this, arguments);

            }

            return ((e.prototype = Object.create(t.prototype)).constructor = e);

        }

        function i() {}

        var l = t.console,

            c = t.jQuery,

            u = 0,

            h = {},

            d =

                ((s.namespace = "outlayer"),

                (s.Item = r),

                (s.defaults = {

                    containerStyle: { position: "relative" },

                    initLayout: !0,

                    originLeft: !0,

                    originTop: !0,

                    resize: !0,

                    resizeContainer: !0,

                    transitionDuration: "0.4s",

                    hiddenStyle: { opacity: 0, transform: "scale(0.001)" },

                    visibleStyle: { opacity: 1, transform: "scale(1)" },

                }),

                s.prototype),

            p =

                (n.extend(d, e.prototype),

                (d.option = function (t) {

                    n.extend(this.options, t);

                }),

                (d._getOption = function (t) {

                    var e = this.constructor.compatOptions[t];

                    return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];

                }),

                (s.compatOptions = {

                    initLayout: "isInitLayout",

                    horizontal: "isHorizontal",

                    layoutInstant: "isLayoutInstant",

                    originLeft: "isOriginLeft",

                    originTop: "isOriginTop",

                    resize: "isResizeBound",

                    resizeContainer: "isResizingContainer",

                }),

                (d._create = function () {

                    this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize();

                }),

                (d.reloadItems = function () {

                    this.items = this._itemize(this.element.children);

                }),

                (d._itemize = function (t) {

                    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {

                        var r = new i(e[o], this);

                        n.push(r);

                    }

                    return n;

                }),

                (d._filterFindItemElements = function (t) {

                    return n.filterFindElements(t, this.options.itemSelector);

                }),

                (d.getItemElements = function () {

                    return this.items.map(function (t) {

                        return t.element;

                    });

                }),

                (d.layout = function () {

                    this._resetLayout(), this._manageStamps();

                    var t = void 0 !== (t = this._getOption("layoutInstant")) ? t : !this._isLayoutInited;

                    this.layoutItems(this.items, t), (this._isLayoutInited = !0);

                }),

                (d._init = d.layout),

                (d._resetLayout = function () {

                    this.getSize();

                }),

                (d.getSize = function () {

                    this.size = o(this.element);

                }),

                (d._getMeasurement = function (t, e) {

                    var i,

                        n = this.options[t];

                    n ? ("string" == typeof n ? (i = this.element.querySelector(n)) : n instanceof HTMLElement && (i = n), (this[t] = i ? o(i)[e] : n)) : (this[t] = 0);

                }),

                (d.layoutItems = function (t, e) {

                    (t = this._getItemsForLayout(t)), this._layoutItems(t, e), this._postLayout();

                }),

                (d._getItemsForLayout = function (t) {

                    return t.filter(function (t) {

                        return !t.isIgnored;

                    });

                }),

                (d._layoutItems = function (t, i) {

                    var n;

                    this._emitCompleteOnItems("layout", t),

                        t &&

                            t.length &&

                            ((n = []),

                            t.forEach(function (t) {

                                var e = this._getItemLayoutPosition(t);

                                (e.item = t), (e.isInstant = i || t.isLayoutInstant), n.push(e);

                            }, this),

                            this._processLayoutQueue(n));

                }),

                (d._getItemLayoutPosition = function () {

                    return { x: 0, y: 0 };

                }),

                (d._processLayoutQueue = function (t) {

                    this.updateStagger(),

                        t.forEach(function (t, e) {

                            this._positionItem(t.item, t.x, t.y, t.isInstant, e);

                        }, this);

                }),

                (d.updateStagger = function () {

                    var t,

                        e = this.options.stagger;

                    return null == e ? void (this.stagger = 0) : ((this.stagger = "number" == typeof e ? e : ((t = (e = e.match(/(^\d*\.?\d*)(\w*)/)) && e[1]), (e = e && e[2]), t.length ? parseFloat(t) * (p[e] || 1) : 0)), this.stagger);

                }),

                (d._positionItem = function (t, e, i, n, o) {

                    n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));

                }),

                (d._postLayout = function () {

                    this.resizeContainer();

                }),

                (d.resizeContainer = function () {

                    var t;

                    this._getOption("resizeContainer") && (t = this._getContainerSize()) && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1));

                }),

                (d._getContainerSize = i),

                (d._setContainerMeasure = function (t, e) {

                    var i;

                    void 0 !== t &&

                        ((i = this.size).isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),

                        (t = Math.max(t, 0)),

                        (this.element.style[e ? "width" : "height"] = t + "px"));

                }),

                (d._emitCompleteOnItems = function (e, t) {

                    function i() {

                        r.dispatchEvent(e + "Complete", null, [t]);

                    }

                    function n() {

                        ++o == s && i();

                    }

                    var o,

                        r = this,

                        s = t.length;

                    t && s

                        ? ((o = 0),

                          t.forEach(function (t) {

                              t.once(e, n);

                          }))

                        : i();

                }),

                (d.dispatchEvent = function (t, e, i) {

                    var n = e ? [e].concat(i) : i;

                    this.emitEvent(t, n), c && ((this.$element = this.$element || c(this.element)), e ? (((n = c.Event(e)).type = t), this.$element.trigger(n, i)) : this.$element.trigger(t, i));

                }),

                (d.ignore = function (t) {

                    (t = this.getItem(t)) && (t.isIgnored = !0);

                }),

                (d.unignore = function (t) {

                    (t = this.getItem(t)) && delete t.isIgnored;

                }),

                (d.stamp = function (t) {

                    (t = this._find(t)) && ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));

                }),

                (d.unstamp = function (t) {

                    (t = this._find(t)) &&

                        t.forEach(function (t) {

                            n.removeFrom(this.stamps, t), this.unignore(t);

                        }, this);

                }),

                (d._find = function (t) {

                    if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), n.makeArray(t);

                }),

                (d._manageStamps = function () {

                    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));

                }),

                (d._getBoundingRect = function () {

                    var t = this.element.getBoundingClientRect(),

                        e = this.size;

                    this._boundingRect = {

                        left: t.left + e.paddingLeft + e.borderLeftWidth,

                        top: t.top + e.paddingTop + e.borderTopWidth,

                        right: t.right - (e.paddingRight + e.borderRightWidth),

                        bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),

                    };

                }),

                (d._manageStamp = i),

                (d._getElementOffset = function (t) {

                    var e = t.getBoundingClientRect(),

                        i = this._boundingRect;

                    return (t = o(t)), { left: e.left - i.left - t.marginLeft, top: e.top - i.top - t.marginTop, right: i.right - e.right - t.marginRight, bottom: i.bottom - e.bottom - t.marginBottom };

                }),

                (d.handleEvent = n.handleEvent),

                (d.bindResize = function () {

                    t.addEventListener("resize", this), (this.isResizeBound = !0);

                }),

                (d.unbindResize = function () {

                    t.removeEventListener("resize", this), (this.isResizeBound = !1);

                }),

                (d.onresize = function () {

                    this.resize();

                }),

                n.debounceMethod(s, "onresize", 100),

                (d.resize = function () {

                    this.isResizeBound && this.needsResizeLayout() && this.layout();

                }),

                (d.needsResizeLayout = function () {

                    var t = o(this.element);

                    return this.size && t && t.innerWidth !== this.size.innerWidth;

                }),

                (d.addItems = function (t) {

                    return (t = this._itemize(t)).length && (this.items = this.items.concat(t)), t;

                }),

                (d.appended = function (t) {

                    (t = this.addItems(t)).length && (this.layoutItems(t, !0), this.reveal(t));

                }),

                (d.prepended = function (t) {

                    var e;

                    (t = this._itemize(t)).length && ((e = this.items.slice(0)), (this.items = t.concat(e)), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(e));

                }),

                (d.reveal = function (t) {

                    var i;

                    this._emitCompleteOnItems("reveal", t),

                        t &&

                            t.length &&

                            ((i = this.updateStagger()),

                            t.forEach(function (t, e) {

                                t.stagger(e * i), t.reveal();

                            }));

                }),

                (d.hide = function (t) {

                    var i;

                    this._emitCompleteOnItems("hide", t),

                        t &&

                            t.length &&

                            ((i = this.updateStagger()),

                            t.forEach(function (t, e) {

                                t.stagger(e * i), t.hide();

                            }));

                }),

                (d.revealItemElements = function (t) {

                    (t = this.getItems(t)), this.reveal(t);

                }),

                (d.hideItemElements = function (t) {

                    (t = this.getItems(t)), this.hide(t);

                }),

                (d.getItem = function (t) {

                    for (var e = 0; e < this.items.length; e++) {

                        var i = this.items[e];

                        if (i.element == t) return i;

                    }

                }),

                (d.getItems = function (t) {

                    t = n.makeArray(t);

                    var e = [];

                    return (

                        t.forEach(function (t) {

                            (t = this.getItem(t)) && e.push(t);

                        }, this),

                        e

                    );

                }),

                (d.remove = function (t) {

                    (t = this.getItems(t)),

                        this._emitCompleteOnItems("remove", t),

                        t &&

                            t.length &&

                            t.forEach(function (t) {

                                t.remove(), n.removeFrom(this.items, t);

                            }, this);

                }),

                (d.destroy = function () {

                    var t = this.element.style;

                    (t.height = ""),

                        (t.position = ""),

                        (t.width = ""),

                        this.items.forEach(function (t) {

                            t.destroy();

                        }),

                        this.unbindResize(),

                        (t = this.element.outlayerGUID),

                        delete h[t],

                        delete this.element.outlayerGUID,

                        c && c.removeData(this.element, this.constructor.namespace);

                }),

                (s.data = function (t) {

                    return (t = (t = n.getQueryElement(t)) && t.outlayerGUID) && h[t];

                }),

                (s.create = function (t, e) {

                    var i = a(s);

                    return (

                        (i.defaults = n.extend({}, s.defaults)),

                        n.extend(i.defaults, e),

                        (i.compatOptions = n.extend({}, s.compatOptions)),

                        (i.namespace = t),

                        (i.data = s.data),

                        (i.Item = a(r)),

                        n.htmlInit(i, t),

                        c && c.bridget && c.bridget(t, i),

                        i

                    );

                }),

                { ms: 1, s: 1e3 });

        return (s.Item = r), s;

    }),

    (function (t, e) {

        "function" == typeof define && define.amd

            ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)

            : "object" == typeof module && module.exports

            ? (module.exports = e(require("outlayer")))

            : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));

    })(window, function (t) {

        "use strict";

        function e() {

            t.Item.apply(this, arguments);

        }

        var i = (e.prototype = Object.create(t.Item.prototype)),

            n = i._create,

            o =

                ((i._create = function () {

                    (this.id = this.layout.itemGUID++), n.call(this), (this.sortData = {});

                }),

                (i.updateSortData = function () {

                    if (!this.isIgnored) {

                        (this.sortData.id = this.id), (this.sortData["original-order"] = this.id), (this.sortData.random = Math.random());

                        var t,

                            e = this.layout.options.getSortData,

                            i = this.layout._sorters;

                        for (t in e) {

                            var n = i[t];

                            this.sortData[t] = n(this.element, this);

                        }

                    }

                }),

                i.destroy);

        return (

            (i.destroy = function () {

                o.apply(this, arguments), this.css({ display: "" });

            }),

            e

        );

    }),

    (function (t, e) {

        "function" == typeof define && define.amd

            ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e)

            : "object" == typeof module && module.exports

            ? (module.exports = e(require("get-size"), require("outlayer")))

            : ((t.Isotope = t.Isotope || {}), (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));

    })(window, function (e, i) {

        "use strict";

        function n(t) {

            (this.isotope = t) && ((this.options = t.options[this.namespace]), (this.element = t.element), (this.items = t.filteredItems), (this.size = t.size));

        }

        var o = n.prototype;

        return (

            ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function (t) {

                o[t] = function () {

                    return i.prototype[t].apply(this.isotope, arguments);

                };

            }),

            (o.needsVerticalResizeLayout = function () {

                var t = e(this.isotope.element);

                return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight;

            }),

            (o._getMeasurement = function () {

                this.isotope._getMeasurement.apply(this, arguments);

            }),

            (o.getColumnWidth = function () {

                this.getSegmentSize("column", "Width");

            }),

            (o.getRowHeight = function () {

                this.getSegmentSize("row", "Height");

            }),

            (o.getSegmentSize = function (t, e) {

                var i,

                    n = "outer" + e;

                this._getMeasurement((t += e), n), this[t] || ((i = this.getFirstItemSize()), (this[t] = (i && i[n]) || this.isotope.size["inner" + e]));

            }),

            (o.getFirstItemSize = function () {

                var t = this.isotope.filteredItems[0];

                return t && t.element && e(t.element);

            }),

            (o.layout = function () {

                this.isotope.layout.apply(this.isotope, arguments);

            }),

            (o.getSize = function () {

                this.isotope.getSize(), (this.size = this.isotope.size);

            }),

            (n.modes = {}),

            (n.create = function (t, e) {

                function i() {

                    n.apply(this, arguments);

                }

                return ((i.prototype = Object.create(o)).constructor = i), e && (i.options = e), (n.modes[(i.prototype.namespace = t)] = i);

            }),

            n

        );

    }),

    (function (t, e) {

        "function" == typeof define && define.amd

            ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e)

            : "object" == typeof module && module.exports

            ? (module.exports = e(require("outlayer"), require("get-size")))

            : (t.Masonry = e(t.Outlayer, t.getSize));

    })(window, function (t, a) {

        (t = t.create("masonry")).compatOptions.fitWidth = "isFitWidth";

        var e = t.prototype;

        return (

            (e._resetLayout = function () {

                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), (this.colYs = []);

                for (var t = 0; t < this.cols; t++) this.colYs.push(0);

                (this.maxY = 0), (this.horizontalColIndex = 0);

            }),

            (e.measureColumns = function () {

                this.getContainerWidth(), this.columnWidth || ((t = (t = this.items[0]) && t.element), (this.columnWidth = (t && a(t).outerWidth) || this.containerWidth));

                var t = (this.columnWidth += this.gutter),

                    e = (i = this.containerWidth + this.gutter) / t,

                    i = t - (i % t),

                    e = Math[i && i < 1 ? "round" : "floor"](e);

                this.cols = Math.max(e, 1);

            }),

            (e.getContainerWidth = function () {

                var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,

                    t = a(t);

                this.containerWidth = t && t.innerWidth;

            }),

            (e._getItemLayoutPosition = function (t) {

                t.getSize();

                for (

                    var e = t.size.outerWidth % this.columnWidth,

                        i = ((e = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth)), (e = Math.min(e, this.cols)), this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](e, t)),

                        n = { x: this.columnWidth * i.col, y: i.y },

                        o = i.y + t.size.outerHeight,

                        r = e + i.col,

                        s = i.col;

                    s < r;

                    s++

                )

                    this.colYs[s] = o;

                return n;

            }),

            (e._getTopColPosition = function (t) {

                t = this._getTopColGroup(t);

                var e = Math.min.apply(Math, t);

                return { col: t.indexOf(e), y: e };

            }),

            (e._getTopColGroup = function (t) {

                if (t < 2) return this.colYs;

                for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) e[n] = this._getColGroupY(n, t);

                return e;

            }),

            (e._getColGroupY = function (t, e) {

                return e < 2 ? this.colYs[t] : ((t = this.colYs.slice(t, t + e)), Math.max.apply(Math, t));

            }),

            (e._getHorizontalColPosition = function (t, e) {

                var i = this.horizontalColIndex % this.cols,

                    i = 1 < t && i + t > this.cols ? 0 : i;

                return (e = e.size.outerWidth && e.size.outerHeight), (this.horizontalColIndex = e ? i + t : this.horizontalColIndex), { col: i, y: this._getColGroupY(i, t) };

            }),

            (e._manageStamp = function (t) {

                var e = a(t),

                    i = ((t = this._getElementOffset(t)), this._getOption("originLeft") ? t.left : t.right),

                    n = i + e.outerWidth,

                    o = ((i = Math.floor(i / this.columnWidth)), (i = Math.max(0, i)), Math.floor(n / this.columnWidth));

                o -= n % this.columnWidth ? 0 : 1;

                for (var o = Math.min(this.cols - 1, o), r = (this._getOption("originTop") ? t.top : t.bottom) + e.outerHeight, s = i; s <= o; s++) this.colYs[s] = Math.max(r, this.colYs[s]);

            }),

            (e._getContainerSize = function () {

                this.maxY = Math.max.apply(Math, this.colYs);

                var t = { height: this.maxY };

                return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;

            }),

            (e._getContainerFitWidth = function () {

                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;

                return (this.cols - t) * this.columnWidth - this.gutter;

            }),

            (e.needsResizeLayout = function () {

                var t = this.containerWidth;

                return this.getContainerWidth(), t != this.containerWidth;

            }),

            t

        );

    }),

    (function (t, e) {

        "function" == typeof define && define.amd

            ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e)

            : "object" == typeof module && module.exports

            ? (module.exports = e(require("../layout-mode"), require("masonry-layout")))

            : e(t.Isotope.LayoutMode, t.Masonry);

    })(window, function (t, e) {

        "use strict";

        var i,

            n = (t = t.create("masonry")).prototype,

            o = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };

        for (i in e.prototype) o[i] || (n[i] = e.prototype[i]);

        var r = n.measureColumns,

            s =

                ((n.measureColumns = function () {

                    (this.items = this.isotope.filteredItems), r.call(this);

                }),

                n._getOption);

        return (

            (n._getOption = function (t) {

                return "fitWidth" == t ? (void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth) : s.apply(this.isotope, arguments);

            }),

            t

        );

    }),

    (function (t, e) {

        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? (module.exports = e(require("../layout-mode"))) : e(t.Isotope.LayoutMode);

    })(window, function (t) {

        "use strict";

        var e = (t = t.create("fitRows")).prototype;

        return (

            (e._resetLayout = function () {

                (this.x = 0), (this.y = 0), (this.maxY = 0), this._getMeasurement("gutter", "outerWidth");

            }),

            (e._getItemLayoutPosition = function (t) {

                t.getSize();

                var e = t.size.outerWidth + this.gutter,

                    i = this.isotope.size.innerWidth + this.gutter;

                return 0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY)), (i = { x: this.x, y: this.y }), (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)), (this.x += e), i;

            }),

            (e._getContainerSize = function () {

                return { height: this.maxY };

            }),

            t

        );

    }),

    (function (t, e) {

        "function" == typeof define && define.amd

            ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)

            : "object" == typeof module && module.exports

            ? (module.exports = e(require("../layout-mode")))

            : e(t.Isotope.LayoutMode);

    })(window, function (t) {

        "use strict";

        var e = (t = t.create("vertical", { horizontalAlignment: 0 })).prototype;

        return (

            (e._resetLayout = function () {

                this.y = 0;

            }),

            (e._getItemLayoutPosition = function (t) {

                t.getSize();

                var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,

                    i = this.y;

                return (this.y += t.size.outerHeight), { x: e, y: i };

            }),

            (e._getContainerSize = function () {

                return { height: this.y };

            }),

            t

        );

    }),

    (function (s, a) {

        "function" == typeof define && define.amd

            ? define([

                  "outlayer/outlayer",

                  "get-size/get-size",

                  "desandro-matches-selector/matches-selector",

                  "fizzy-ui-utils/utils",

                  "isotope-layout/js/item",

                  "isotope-layout/js/layout-mode",

                  "isotope-layout/js/layout-modes/masonry",

                  "isotope-layout/js/layout-modes/fit-rows",

                  "isotope-layout/js/layout-modes/vertical",

              ], function (t, e, i, n, o, r) {

                  return a(s, t, 0, i, n, o, r);

              })

            : "object" == typeof module && module.exports

            ? (module.exports = a(

                  s,

                  require("outlayer"),

                  require("get-size"),

                  require("desandro-matches-selector"),

                  require("fizzy-ui-utils"),

                  require("isotope-layout/js/item"),

                  require("isotope-layout/js/layout-mode"),

                  require("isotope-layout/js/layout-modes/masonry"),

                  require("isotope-layout/js/layout-modes/fit-rows"),

                  require("isotope-layout/js/layout-modes/vertical")

              ))

            : (s.Isotope = a(s, s.Outlayer, s.getSize, s.matchesSelector, s.fizzyUIUtils, s.Isotope.Item, s.Isotope.LayoutMode));

    })(window, function (t, i, e, n, r, o, s) {

        var a = t.jQuery,

            l = String.prototype.trim

                ? function (t) {

                      return t.trim();

                  }

                : function (t) {

                      return t.replace(/^\s+|\s+$/g, "");

                  },

            c = i.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 }),

            u =

                ((c.Item = o),

                (c.LayoutMode = s),

                ((t = c.prototype)._create = function () {

                    for (var t in ((this.itemGUID = 0), (this._sorters = {}), this._getSorters(), i.prototype._create.call(this), (this.modes = {}), (this.filteredItems = this.items), (this.sortHistory = ["original-order"]), s.modes))

                        this._initLayoutMode(t);

                }),

                (t.reloadItems = function () {

                    (this.itemGUID = 0), i.prototype.reloadItems.call(this);

                }),

                (t._itemize = function () {

                    for (var t = i.prototype._itemize.apply(this, arguments), e = 0; e < t.length; e++) t[e].id = this.itemGUID++;

                    return this._updateItemsSortData(t), t;

                }),

                (t._initLayoutMode = function (t) {

                    var e = s.modes[t],

                        i = this.options[t] || {};

                    (this.options[t] = e.options ? r.extend(e.options, i) : i), (this.modes[t] = new e(this));

                }),

                (t.layout = function () {

                    return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();

                }),

                (t._layout = function () {

                    var t = this._getIsInstant();

                    this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), (this._isLayoutInited = !0);

                }),

                (t.arrange = function (t) {

                    this.option(t),

                        this._getIsInstant(),

                        (t = this._filter(this.items)),

                        (this.filteredItems = t.matches),

                        this._bindArrangeComplete(),

                        this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t),

                        this._sort(),

                        this._layout();

                }),

                (t._init = t.arrange),

                (t._hideReveal = function (t) {

                    this.reveal(t.needReveal), this.hide(t.needHide);

                }),

                (t._getIsInstant = function () {

                    var t = void 0 !== (t = this._getOption("layoutInstant")) ? t : !this._isLayoutInited;

                    return (this._isInstant = t);

                }),

                (t._bindArrangeComplete = function () {

                    function t() {

                        e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems]);

                    }

                    var e,

                        i,

                        n,

                        o = this;

                    this.once("layoutComplete", function () {

                        (e = !0), t();

                    }),

                        this.once("hideComplete", function () {

                            (i = !0), t();

                        }),

                        this.once("revealComplete", function () {

                            (n = !0), t();

                        });

                }),

                (t._filter = function (t) {

                    for (var e = this.options.filter, i = [], n = [], o = [], r = this._getFilterTest(e || "*"), s = 0; s < t.length; s++) {

                        var a,

                            l = t[s];

                        l.isIgnored || ((a = r(l)) && i.push(l), a && l.isHidden ? n.push(l) : a || l.isHidden || o.push(l));

                    }

                    return { matches: i, needReveal: n, needHide: o };

                }),

                (t._getFilterTest = function (e) {

                    return a && this.options.isJQueryFiltering

                        ? function (t) {

                              return a(t.element).is(e);

                          }

                        : "function" == typeof e

                        ? function (t) {

                              return e(t.element);

                          }

                        : function (t) {

                              return n(t.element, e);

                          };

                }),

                (t.updateSortData = function (t) {

                    (t = t ? ((t = r.makeArray(t)), this.getItems(t)) : this.items), this._getSorters(), this._updateItemsSortData(t);

                }),

                (t._getSorters = function () {

                    var t,

                        e = this.options.getSortData;

                    for (t in e) {

                        var i = e[t];

                        this._sorters[t] = u(i);

                    }

                }),

                (t._updateItemsSortData = function (t) {

                    for (var e = t && t.length, i = 0; e && i < e; i++) t[i].updateSortData();

                }),

                function (t) {

                    var e, i, n, o, r, s;

                    return "string" != typeof t

                        ? t

                        : ((i = (i = (e = (t = l(t).split(" "))[0]).match(/^\[(.+)\]$/)) && i[1]),

                          (s = e),

                          (n = (r = i)

                              ? function (t) {

                                    return t.getAttribute(r);

                                }

                              : function (t) {

                                    return (t = t.querySelector(s)) && t.textContent;

                                }),

                          (o = c.sortDataParsers[t[1]])

                              ? function (t) {

                                    return t && o(n(t));

                                }

                              : function (t) {

                                    return t && n(t);

                                });

                }),

            h =

                ((c.sortDataParsers = {

                    parseInt: function (t) {

                        return parseInt(t, 10);

                    },

                    parseFloat: function (t) {

                        return parseFloat(t);

                    },

                }),

                (t._sort = function () {

                    var t, s, a;

                    this.options.sortBy &&

                        ((t = r.makeArray(this.options.sortBy)),

                        this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory)),

                        (s = this.sortHistory),

                        (a = this.options.sortAscending),

                        this.filteredItems.sort(function (t, e) {

                            for (var i = 0; i < s.length; i++) {

                                var n = s[i],

                                    o = t.sortData[n],

                                    r = e.sortData[n];

                                if (r < o || o < r) return (r < o ? 1 : -1) * ((void 0 !== a[n] ? a[n] : a) ? 1 : -1);

                            }

                            return 0;

                        }));

                }),

                (t._getIsSameSortBy = function (t) {

                    for (var e = 0; e < t.length; e++) if (t[e] != this.sortHistory[e]) return !1;

                    return !0;

                }),

                (t._mode = function () {

                    var t = this.options.layoutMode,

                        e = this.modes[t];

                    if (e) return (e.options = this.options[t]), e;

                    throw new Error("No layout mode: " + t);

                }),

                (t._resetLayout = function () {

                    i.prototype._resetLayout.call(this), this._mode()._resetLayout();

                }),

                (t._getItemLayoutPosition = function (t) {

                    return this._mode()._getItemLayoutPosition(t);

                }),

                (t._manageStamp = function (t) {

                    this._mode()._manageStamp(t);

                }),

                (t._getContainerSize = function () {

                    return this._mode()._getContainerSize();

                }),

                (t.needsResizeLayout = function () {

                    return this._mode().needsResizeLayout();

                }),

                (t.appended = function (t) {

                    (t = this.addItems(t)).length && ((t = this._filterRevealAdded(t)), (this.filteredItems = this.filteredItems.concat(t)));

                }),

                (t.prepended = function (t) {

                    var e;

                    (t = this._itemize(t)).length &&

                        (this._resetLayout(), this._manageStamps(), (e = this._filterRevealAdded(t)), this.layoutItems(this.filteredItems), (this.filteredItems = e.concat(this.filteredItems)), (this.items = t.concat(this.items)));

                }),

                (t._filterRevealAdded = function (t) {

                    return (t = this._filter(t)), this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches;

                }),

                (t.insert = function (t) {

                    var e = this.addItems(t);

                    if (e.length) {

                        for (var i, n = e.length, o = 0; o < n; o++) (i = e[o]), this.element.appendChild(i.element);

                        for (t = this._filter(e).matches, o = 0; o < n; o++) e[o].isLayoutInstant = !0;

                        for (this.arrange(), o = 0; o < n; o++) delete e[o].isLayoutInstant;

                        this.reveal(t);

                    }

                }),

                t.remove);

        return (

            (t.remove = function (t) {

                t = r.makeArray(t);

                var e = this.getItems(t);

                h.call(this, t);

                for (var i = e && e.length, n = 0; i && n < i; n++) {

                    var o = e[n];

                    r.removeFrom(this.filteredItems, o);

                }

            }),

            (t.shuffle = function () {

                for (var t = 0; t < this.items.length; t++) this.items[t].sortData.random = Math.random();

                (this.options.sortBy = "random"), this._sort(), this._layout();

            }),

            (t._noTransition = function (t, e) {

                var i = this.options.transitionDuration;

                return (this.options.transitionDuration = 0), (t = t.apply(this, e)), (this.options.transitionDuration = i), t;

            }),

            (t.getFilteredItemElements = function () {

                return this.filteredItems.map(function (t) {

                    return t.element;

                });

            }),

            c

        );

    }),

    (function (t, e) {

        "function" == typeof define && define.amd ? define("packery/js/rect", e) : "object" == typeof module && module.exports ? (module.exports = e()) : ((t.Packery = t.Packery || {}), (t.Packery.Rect = e()));

    })(window, function () {

        function a(t) {

            for (var e in a.defaults) this[e] = a.defaults[e];

            for (e in t) this[e] = t[e];

        }

        a.defaults = { x: 0, y: 0, width: 0, height: 0 };

        var t = a.prototype;

        return (

            (t.contains = function (t) {

                var e = t.width || 0,

                    i = t.height || 0;

                return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + i;

            }),

            (t.overlaps = function (t) {

                var e = this.x + this.width,

                    i = this.y + this.height,

                    n = t.x + t.width,

                    o = t.y + t.height;

                return this.x < n && e > t.x && this.y < o && i > t.y;

            }),

            (t.getMaximalFreeRects = function (t) {

                var e, i, n, o, r, s;

                return (

                    !!this.overlaps(t) &&

                    ((i = []),

                    (n = this.x + this.width),

                    (o = this.y + this.height),

                    (r = t.x + t.width),

                    (s = t.y + t.height),

                    this.y < t.y && ((e = new a({ x: this.x, y: this.y, width: this.width, height: t.y - this.y })), i.push(e)),

                    r < n && ((e = new a({ x: r, y: this.y, width: n - r, height: this.height })), i.push(e)),

                    s < o && ((e = new a({ x: this.x, y: s, width: this.width, height: o - s })), i.push(e)),

                    this.x < t.x && ((e = new a({ x: this.x, y: this.y, width: t.x - this.x, height: this.height })), i.push(e)),

                    i)

                );

            }),

            (t.canFit = function (t) {

                return this.width >= t.width && this.height >= t.height;

            }),

            a

        );

    }),

    (function (t, e) {

        "function" == typeof define && define.amd ? define("packery/js/packer", ["./rect"], e) : "object" == typeof module && module.exports ? (module.exports = e(require("./rect"))) : ((t = t.Packery = t.Packery || {}).Packer = e(t.Rect));

    })(window, function (e) {

        function t(t, e, i) {

            (this.width = t || 0), (this.height = e || 0), (this.sortDirection = i || "downwardLeftToRight"), this.reset();

        }

        var i = t.prototype,

            n =

                ((i.reset = function () {

                    this.spaces = [];

                    var t = new e({ x: 0, y: 0, width: this.width, height: this.height });

                    this.spaces.push(t), (this.sorter = n[this.sortDirection] || n.downwardLeftToRight);

                }),

                (i.pack = function (t) {

                    for (var e = 0; e < this.spaces.length; e++) {

                        var i = this.spaces[e];

                        if (i.canFit(t)) {

                            this.placeInSpace(t, i);

                            break;

                        }

                    }

                }),

                (i.columnPack = function (t) {

                    for (var e = 0; e < this.spaces.length; e++) {

                        var i = this.spaces[e];

                        if (i.x <= t.x && i.x + i.width >= t.x + t.width && i.height >= t.height - 0.01) {

                            (t.y = i.y), this.placed(t);

                            break;

                        }

                    }

                }),

                (i.rowPack = function (t) {

                    for (var e = 0; e < this.spaces.length; e++) {

                        var i = this.spaces[e];

                        if (i.y <= t.y && i.y + i.height >= t.y + t.height && i.width >= t.width - 0.01) {

                            (t.x = i.x), this.placed(t);

                            break;

                        }

                    }

                }),

                (i.placeInSpace = function (t, e) {

                    (t.x = e.x), (t.y = e.y), this.placed(t);

                }),

                (i.placed = function (t) {

                    for (var e = [], i = 0; i < this.spaces.length; i++) {

                        var n = this.spaces[i],

                            o = n.getMaximalFreeRects(t);

                        o ? e.push.apply(e, o) : e.push(n);

                    }

                    (this.spaces = e), this.mergeSortSpaces();

                }),

                (i.mergeSortSpaces = function () {

                    t.mergeRects(this.spaces), this.spaces.sort(this.sorter);

                }),

                (i.addSpace = function (t) {

                    this.spaces.push(t), this.mergeSortSpaces();

                }),

                (t.mergeRects = function (t) {

                    var e = 0,

                        i = t[e];

                    t: for (; i; ) {

                        for (var n = 0, o = t[e + n]; o; ) {

                            if (o == i) n++;

                            else {

                                if (o.contains(i)) {

                                    t.splice(e, 1), (i = t[e]);

                                    continue t;

                                }

                                i.contains(o) ? t.splice(e + n, 1) : n++;

                            }

                            o = t[e + n];

                        }

                        i = t[++e];

                    }

                    return t;

                }),

                {

                    downwardLeftToRight: function (t, e) {

                        return t.y - e.y || t.x - e.x;

                    },

                    rightwardTopToBottom: function (t, e) {

                        return t.x - e.x || t.y - e.y;

                    },

                });

        return t;

    }),

    (function (t, e) {

        "function" == typeof define && define.amd

            ? define("packery/js/item", ["outlayer/outlayer", "./rect"], e)

            : "object" == typeof module && module.exports

            ? (module.exports = e(require("outlayer"), require("./rect")))

            : (t.Packery.Item = e(t.Outlayer, t.Packery.Rect));

    })(window, function (t, e) {

        function i() {

            t.Item.apply(this, arguments);

        }

        var n = "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform",

            o = (i.prototype = Object.create(t.Item.prototype)),

            r = o._create,

            s =

                ((o._create = function () {

                    r.call(this), (this.rect = new e());

                }),

                o.moveTo);

        return (

            (o.moveTo = function (t, e) {

                var i = Math.abs(this.position.x - t),

                    n = Math.abs(this.position.y - e);

                return this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && i < 1 && n < 1 ? void this.goTo(t, e) : void s.apply(this, arguments);

            }),

            (o.enablePlacing = function () {

                this.removeTransitionStyles(), this.isTransitioning && n && (this.element.style[n] = "none"), (this.isTransitioning = !1), this.getSize(), this.layout._setRectSize(this.element, this.rect), (this.isPlacing = !0);

            }),

            (o.disablePlacing = function () {

                this.isPlacing = !1;

            }),

            (o.removeElem = function () {

                this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this]);

            }),

            (o.showDropPlaceholder = function () {

                var t = this.dropPlaceholder;

                t || (((t = this.dropPlaceholder = document.createElement("div")).className = "packery-drop-placeholder"), (t.style.position = "absolute")),

                    (t.style.width = this.size.width + "px"),

                    (t.style.height = this.size.height + "px"),

                    this.positionDropPlaceholder(),

                    this.layout.element.appendChild(t);

            }),

            (o.positionDropPlaceholder = function () {

                this.dropPlaceholder.style[n] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)";

            }),

            (o.hideDropPlaceholder = function () {

                this.layout.element.removeChild(this.dropPlaceholder);

            }),

            i

        );

    }),

    (function (t, e) {

        "function" == typeof define && define.amd

            ? define("packery/js/packery", ["get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], e)

            : "object" == typeof module && module.exports

            ? (module.exports = e(require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")))

            : (t.Packery = e(t.getSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item));

    })(window, function (c, t, s, e, i) {

        function n(t, e) {

            return t.position.y - e.position.y || t.position.x - e.position.x;

        }

        function o(t, e) {

            return t.position.x - e.position.x || t.position.y - e.position.y;

        }

        s.prototype.canFit = function (t) {

            return this.width >= t.width - 1 && this.height >= t.height - 1;

        };

        var r = t.create("packery"),

            a =

                ((r.Item = i),

                ((i = r.prototype)._create = function () {

                    t.prototype._create.call(this), (this.packer = new e()), (this.shiftPacker = new e()), (this.isEnabled = !0), (this.dragItemCount = 0);

                    var i = this;

                    (this.handleDraggabilly = {

                        dragStart: function () {

                            i.itemDragStart(this.element);

                        },

                        dragMove: function () {

                            i.itemDragMove(this.element, this.position.x, this.position.y);

                        },

                        dragEnd: function () {

                            i.itemDragEnd(this.element);

                        },

                    }),

                        (this.handleUIDraggable = {

                            start: function (t, e) {

                                e && i.itemDragStart(t.currentTarget);

                            },

                            drag: function (t, e) {

                                e && i.itemDragMove(t.currentTarget, e.position.left, e.position.top);

                            },

                            stop: function (t, e) {

                                e && i.itemDragEnd(t.currentTarget);

                            },

                        });

                }),

                (i._resetLayout = function () {

                    var t, e, i;

                    this.getSize(),

                        this._getMeasurements(),

                        (i = this._getOption("horizontal") ? ((t = 1 / 0), (e = this.size.innerHeight + this.gutter), "rightwardTopToBottom") : ((t = this.size.innerWidth + this.gutter), (e = 1 / 0), "downwardLeftToRight")),

                        (this.packer.width = this.shiftPacker.width = t),

                        (this.packer.height = this.shiftPacker.height = e),

                        (this.packer.sortDirection = this.shiftPacker.sortDirection = i),

                        this.packer.reset(),

                        (this.maxY = 0),

                        (this.maxX = 0);

                }),

                (i._getMeasurements = function () {

                    this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width");

                }),

                (i._getItemLayoutPosition = function (t) {

                    var e;

                    return this._setRectSize(t.element, t.rect), this.isShifting || 0 < this.dragItemCount ? ((e = this._getPackMethod()), this.packer[e](t.rect)) : this.packer.pack(t.rect), this._setMaxXY(t.rect), t.rect;

                }),

                (i.shiftLayout = function () {

                    (this.isShifting = !0), this.layout(), delete this.isShifting;

                }),

                (i._getPackMethod = function () {

                    return this._getOption("horizontal") ? "rowPack" : "columnPack";

                }),

                (i._setMaxXY = function (t) {

                    (this.maxX = Math.max(t.x + t.width, this.maxX)), (this.maxY = Math.max(t.y + t.height, this.maxY));

                }),

                (i._setRectSize = function (t, e) {

                    var i = (t = c(t)).outerWidth;

                    (t = t.outerHeight),

                        (i || t) && ((i = this._applyGridGutter(i, this.columnWidth)), (t = this._applyGridGutter(t, this.rowHeight))),

                        (e.width = Math.min(i, this.packer.width)),

                        (e.height = Math.min(t, this.packer.height));

                }),

                (i._applyGridGutter = function (t, e) {

                    var i;

                    return e ? ((i = t % (e += this.gutter)), Math[i && i < 1 ? "round" : "ceil"](t / e) * e) : t + this.gutter;

                }),

                (i._getContainerSize = function () {

                    return this._getOption("horizontal") ? { width: this.maxX - this.gutter } : { height: this.maxY - this.gutter };

                }),

                (i._manageStamp = function (t) {

                    var e = (e = this.getItem(t)) && e.isPlacing ? e.rect : ((e = this._getElementOffset(t)), new s({ x: this._getOption("originLeft") ? e.left : e.right, y: this._getOption("originTop") ? e.top : e.bottom }));

                    this._setRectSize(t, e), this.packer.placed(e), this._setMaxXY(e);

                }),

                (i.sortItemsByPosition = function () {

                    var t = this._getOption("horizontal") ? o : n;

                    this.items.sort(t);

                }),

                (i.fit = function (t, e, i) {

                    (t = this.getItem(t)) &&

                        (this.stamp(t.element),

                        t.enablePlacing(),

                        this.updateShiftTargets(t),

                        (e = void 0 === e ? t.rect.x : e),

                        (i = void 0 === i ? t.rect.y : i),

                        this.shift(t, e, i),

                        this._bindFitEvents(t),

                        t.moveTo(t.rect.x, t.rect.y),

                        this.shiftLayout(),

                        this.unstamp(t.element),

                        this.sortItemsByPosition(),

                        t.disablePlacing());

                }),

                (i._bindFitEvents = function (t) {

                    function e() {

                        2 == ++n && i.dispatchEvent("fitComplete", null, [t]);

                    }

                    var i = this,

                        n = 0;

                    t.once("layout", e), this.once("layoutComplete", e);

                }),

                (i.resize = function () {

                    this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout());

                }),

                (i.needsResizeLayout = function () {

                    var t = c(this.element),

                        e = this._getOption("horizontal") ? "innerHeight" : "innerWidth";

                    return t[e] != this.size[e];

                }),

                (i.resizeShiftPercentLayout = function () {

                    var i,

                        e,

                        n,

                        t = this._getItemsForLayout(this.items),

                        o = this._getOption("horizontal"),

                        r = o ? "y" : "x",

                        s = o ? "height" : "width",

                        a = o ? "rowHeight" : "columnWidth",

                        l = ((o = o ? "innerHeight" : "innerWidth"), this[a]);

                    (l = l && l + this.gutter)

                        ? (this._getMeasurements(),

                          (i = this[a] + this.gutter),

                          t.forEach(function (t) {

                              var e = Math.round(t.rect[r] / l);

                              t.rect[r] = e * i;

                          }))

                        : ((e = c(this.element)[o] + this.gutter),

                          (n = this.packer[s]),

                          t.forEach(function (t) {

                              t.rect[r] = (t.rect[r] / n) * e;

                          })),

                        this.shiftLayout();

                }),

                (i.itemDragStart = function (t) {

                    this.isEnabled && (this.stamp(t), (t = this.getItem(t))) && (t.enablePlacing(), t.showDropPlaceholder(), this.dragItemCount++, this.updateShiftTargets(t));

                }),

                (i.updateShiftTargets = function (t) {

                    this.shiftPacker.reset(), this._getBoundingRect();

                    var i = this._getOption("originLeft"),

                        n = this._getOption("originTop"),

                        l =

                            (this.stamps.forEach(function (t) {

                                var e = this.getItem(t);

                                (e && e.isPlacing) || ((e = this._getElementOffset(t)), (e = new s({ x: i ? e.left : e.right, y: n ? e.top : e.bottom })), this._setRectSize(t, e), this.shiftPacker.placed(e));

                            }, this),

                            this._getOption("horizontal")),

                        e = l ? "rowHeight" : "columnWidth",

                        c = l ? "height" : "width",

                        u = ((this.shiftTargetKeys = []), (this.shiftTargets = []), this[e]);

                    if ((u = u && u + this.gutter)) for (var e = Math.ceil(t.rect[c] / u), o = Math.floor((this.shiftPacker[c] + this.gutter) / u), h = (o - e) * u, r = 0; r < o; r++) this._addShiftTarget(r * u, 0, h);

                    else (h = this.shiftPacker[c] + this.gutter - t.rect[c]), this._addShiftTarget(0, 0, h);

                    e = this._getItemsForLayout(this.items);

                    var d = this._getPackMethod();

                    e.forEach(function (t) {

                        var e = t.rect,

                            i = (this._setRectSize(t.element, e), this.shiftPacker[d](e), this._addShiftTarget(e.x, e.y, h), l ? e.x + e.width : e.x),

                            n = l ? e.y : e.y + e.height;

                        if ((this._addShiftTarget(i, n, h), u))

                            for (var o = Math.round(e[c] / u), r = 1; r < o; r++) {

                                var s = l ? i : e.x + u * r,

                                    a = l ? e.y + u * r : n;

                                this._addShiftTarget(s, a, h);

                            }

                    }, this);

                }),

                (i._addShiftTarget = function (t, e, i) {

                    var n = this._getOption("horizontal") ? e : t;

                    (0 !== n && i < n) || -1 != this.shiftTargetKeys.indexOf((i = t + "," + e)) || (this.shiftTargetKeys.push(i), this.shiftTargets.push({ x: t, y: e }));

                }),

                (i.shift = function (t, e, i) {

                    var n,

                        o = 1 / 0,

                        r = { x: e, y: i };

                    this.shiftTargets.forEach(function (t) {

                        var e,

                            i,

                            i = r.x - t.x,

                            e = r.y - t.y;

                        (i = Math.sqrt(i * i + e * e)) < o && ((n = t), (o = i));

                    }),

                        (t.rect.x = n.x),

                        (t.rect.y = n.y);

                }),

                (i.itemDragMove = function (t, e, i) {

                    function n() {

                        o.shift(r, e, i), r.positionDropPlaceholder(), o.layout();

                    }

                    var o,

                        r = this.isEnabled && this.getItem(t);

                    r &&

                        ((e -= this.size.paddingLeft),

                        (i -= this.size.paddingTop),

                        (o = this),

                        (t = new Date()),

                        this._itemDragTime && t - this._itemDragTime < 120 ? (clearTimeout(this.dragTimeout), (this.dragTimeout = setTimeout(n, 120))) : (n(), (this._itemDragTime = t)));

                }),

                (i.itemDragEnd = function (t) {

                    function e() {

                        2 == ++i && (o.element.classList.remove("is-positioning-post-drag"), o.hideDropPlaceholder(), n.dispatchEvent("dragItemPositioned", null, [o]));

                    }

                    var i,

                        n,

                        o = this.isEnabled && this.getItem(t);

                    o &&

                        (clearTimeout(this.dragTimeout),

                        o.element.classList.add("is-positioning-post-drag"),

                        (i = 0),

                        (n = this),

                        o.once("layout", e),

                        this.once("layoutComplete", e),

                        o.moveTo(o.rect.x, o.rect.y),

                        this.layout(),

                        (this.dragItemCount = Math.max(0, this.dragItemCount - 1)),

                        this.sortItemsByPosition(),

                        o.disablePlacing(),

                        this.unstamp(o.element));

                }),

                (i.bindDraggabillyEvents = function (t) {

                    this._bindDraggabillyEvents(t, "on");

                }),

                (i.unbindDraggabillyEvents = function (t) {

                    this._bindDraggabillyEvents(t, "off");

                }),

                (i._bindDraggabillyEvents = function (t, e) {

                    var i = this.handleDraggabilly;

                    t[e]("dragStart", i.dragStart), t[e]("dragMove", i.dragMove), t[e]("dragEnd", i.dragEnd);

                }),

                (i.bindUIDraggableEvents = function (t) {

                    this._bindUIDraggableEvents(t, "on");

                }),

                (i.unbindUIDraggableEvents = function (t) {

                    this._bindUIDraggableEvents(t, "off");

                }),

                (i._bindUIDraggableEvents = function (t, e) {

                    var i = this.handleUIDraggable;

                    t[e]("dragstart", i.start)[e]("drag", i.drag)[e]("dragstop", i.stop);

                }),

                i.destroy);

        return (

            (i.destroy = function () {

                a.apply(this, arguments), (this.isEnabled = !1);

            }),

            (r.Rect = s),

            (r.Packer = e),

            r

        );

    }),

    (function (t, e) {

        "function" == typeof define && define.amd

            ? define(["isotope-layout/js/layout-mode", "packery/js/packery"], e)

            : "object" == typeof module && module.exports

            ? (module.exports = e(require("isotope-layout/js/layout-mode"), require("packery")))

            : e(t.Isotope.LayoutMode, t.Packery);

    })(window, function (t, e) {

        var i,

            n = (t = t.create("packery")).prototype,

            o = { _getElementOffset: !0, _getMeasurement: !0 };

        for (i in e.prototype) o[i] || (n[i] = e.prototype[i]);

        var r = n._resetLayout,

            s =

                ((n._resetLayout = function () {

                    (this.packer = this.packer || new e.Packer()), (this.shiftPacker = this.shiftPacker || new e.Packer()), r.apply(this, arguments);

                }),

                n._getItemLayoutPosition),

            a =

                ((n._getItemLayoutPosition = function (t) {

                    return (t.rect = t.rect || new e.Rect()), s.call(this, t);

                }),

                n.needsResizeLayout),

            l =

                ((n.needsResizeLayout = function () {

                    return this._getOption("horizontal") ? this.needsVerticalResizeLayout() : a.call(this);

                }),

                n._getOption);

        return (

            (n._getOption = function (t) {

                return "horizontal" == t ? (void 0 !== this.options.isHorizontal ? this.options.isHorizontal : this.options.horizontal) : l.apply(this.isotope, arguments);

            }),

            t

        );

    }),

    (function (l, i, n, a) {

        function c(t, e) {

            (this.settings = null),

                (this.options = l.extend({}, c.Defaults, e)),

                (this.$element = l(t)),

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

                l.each(

                    ["onResize", "onThrottledResize"],

                    l.proxy(function (t, e) {

                        this._handlers[e] = l.proxy(this[e], this);

                    }, this)

                ),

                l.each(

                    c.Plugins,

                    l.proxy(function (t, e) {

                        this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);

                    }, this)

                ),

                l.each(

                    c.Workers,

                    l.proxy(function (t, e) {

                        this._pipe.push({ filter: e.filter, run: l.proxy(e.run, this) });

                    }, this)

                ),

                this.setup(),

                this.initialize();

        }

        (c.Defaults = {

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

            responsiveBaseElement: i,

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

            (c.Width = { Default: "default", Inner: "inner", Outer: "outer" }),

            (c.Type = { Event: "event", State: "state" }),

            (c.Plugins = {}),

            (c.Workers = [

                {

                    filter: ["width", "settings"],

                    run: function () {

                        this._width = this.$element.width();

                    },

                },

                {

                    filter: ["width", "items", "settings"],

                    run: function (t) {

                        t.current = this._items && this._items[this.relative(this._current)];

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

                    run: function (t) {

                        var e = this.settings.margin || "",

                            i = !this.settings.autoWidth,

                            n = { width: "auto", "margin-left": (n = this.settings.rtl) ? e : "", "margin-right": n ? "" : e };

                        i || this.$stage.children().css(n), (t.css = n);

                    },

                },

                {

                    filter: ["width", "items", "settings"],

                    run: function (t) {

                        var e,

                            i = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,

                            n = this._items.length,

                            o = !this.settings.autoWidth,

                            r = [];

                        for (t.items = { merge: !1, width: i }; n--; )

                            (e = this._mergers[n]), (e = (this.settings.mergeFit && Math.min(e, this.settings.items)) || e), (t.items.merge = 1 < e || t.items.merge), (r[n] = o ? i * e : this._items[n].width());

                        this._widths = r;

                    },

                },

                {

                    filter: ["items", "settings"],

                    run: function () {

                        var t = [],

                            e = this._items,

                            i = this.settings,

                            n = Math.max(2 * i.items, 4),

                            o = 2 * Math.ceil(e.length / 2),

                            r = i.loop && e.length ? (i.rewind ? n : Math.max(n, o)) : 0,

                            s = "",

                            a = "";

                        for (r /= 2; 0 < r; ) t.push(this.normalize(t.length / 2, !0)), (s += e[t[t.length - 1]][0].outerHTML), t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)), (a = e[t[t.length - 1]][0].outerHTML + a), --r;

                        (this._clones = t), l(s).addClass("cloned").appendTo(this.$stage), l(a).addClass("cloned").prependTo(this.$stage);

                    },

                },

                {

                    filter: ["width", "items", "settings"],

                    run: function () {

                        for (var t, e, i = this.settings.rtl ? 1 : -1, n = this._clones.length + this._items.length, o = -1, r = []; ++o < n; )

                            (t = r[o - 1] || 0), (e = this._widths[this.relative(o)] + this.settings.margin), r.push(t + e * i);

                        this._coordinates = r;

                    },

                },

                {

                    filter: ["width", "items", "settings"],

                    run: function () {

                        var t = this.settings.stagePadding,

                            e = this._coordinates,

                            e = { width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t, "padding-left": t || "", "padding-right": t || "" };

                        this.$stage.css(e);

                    },

                },

                {

                    filter: ["width", "items", "settings"],

                    run: function (t) {

                        var e = this._coordinates.length,

                            i = !this.settings.autoWidth,

                            n = this.$stage.children();

                        if (i && t.items.merge) for (; e--; ) (t.css.width = this._widths[this.relative(e)]), n.eq(e).css(t.css);

                        else i && ((t.css.width = t.items.width), n.css(t.css));

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

                    run: function (t) {

                        (t.current = t.current ? this.$stage.children().index(t.current) : 0), (t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current))), this.reset(t.current);

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

                        for (var t, e, i = this.settings.rtl ? 1 : -1, n = 2 * this.settings.stagePadding, o = this.coordinates(this.current()) + n, r = o + this.width() * i, s = [], a = 0, l = this._coordinates.length; a < l; a++)

                            (t = this._coordinates[a - 1] || 0), (e = Math.abs(this._coordinates[a]) + n * i), ((this.op(t, "<=", o) && this.op(t, ">", r)) || (this.op(e, "<", o) && this.op(e, ">", r))) && s.push(a);

                        this.$stage.children(".active").removeClass("active"),

                            this.$stage.children(":eq(" + s.join("), :eq(") + ")").addClass("active"),

                            this.$stage.children(".center").removeClass("center"),

                            this.settings.center && this.$stage.children().eq(this.current()).addClass("center");

                    },

                },

            ]),

            (c.prototype.initializeStage = function () {

                (this.$stage = this.$element.find("." + this.settings.stageClass)),

                    this.$stage.length ||

                        (this.$element.addClass(this.options.loadingClass),

                        (this.$stage = l("<" + this.settings.stageElement + ">", { class: this.settings.stageClass }).wrap(l("<div/>", { class: this.settings.stageOuterClass }))),

                        this.$element.append(this.$stage.parent()));

            }),

            (c.prototype.initializeItems = function () {

                var t = this.$element.find(".owl-item");

                t.length

                    ? ((this._items = t.get().map(function (t) {

                          return l(t);

                      })),

                      (this._mergers = this._items.map(function () {

                          return 1;

                      })),

                      this.refresh())

                    : (this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass));

            }),

            (c.prototype.initialize = function () {

                var t, e;

                this.enter("initializing"),

                    this.trigger("initialize"),

                    this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),

                    this.settings.autoWidth &&

                        !this.is("pre-loading") &&

                        ((t = this.$element.find("img")), (e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : a), (e = this.$element.children(e).width()), t.length) &&

                        e <= 0 &&

                        this.preloadAutoWidthImages(t),

                    this.initializeStage(),

                    this.initializeItems(),

                    this.registerEventHandlers(),

                    this.leave("initializing"),

                    this.trigger("initialized");

            }),

            (c.prototype.isVisible = function () {

                return !this.settings.checkVisibility || this.$element.is(":visible");

            }),

            (c.prototype.setup = function () {

                var e = this.viewport(),

                    t = this.options.responsive,

                    i = -1,

                    n = null;

                t

                    ? (l.each(t, function (t) {

                          t <= e && i < t && (i = Number(t));

                      }),

                      "function" == typeof (n = l.extend({}, this.options, t[i])).stagePadding && (n.stagePadding = n.stagePadding()),

                      delete n.responsive,

                      n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i)))

                    : (n = l.extend({}, this.options)),

                    this.trigger("change", { property: { name: "settings", value: n } }),

                    (this._breakpoint = i),

                    (this.settings = n),

                    this.invalidate("settings"),

                    this.trigger("changed", { property: { name: "settings", value: this.settings } });

            }),

            (c.prototype.optionsLogic = function () {

                this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));

            }),

            (c.prototype.prepare = function (t) {

                var e = this.trigger("prepare", { content: t });

                return (

                    e.data ||

                        (e.data = l("<" + this.settings.itemElement + "/>")

                            .addClass(this.options.itemClass)

                            .append(t)),

                    this.trigger("prepared", { content: e.data }),

                    e.data

                );

            }),

            (c.prototype.update = function () {

                for (

                    var t = 0,

                        e = this._pipe.length,

                        i = l.proxy(function (t) {

                            return this[t];

                        }, this._invalidated),

                        n = {};

                    t < e;



                )

                    (this._invalidated.all || 0 < l.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(n), t++;

                (this._invalidated = {}), this.is("valid") || this.enter("valid");

            }),

            (c.prototype.width = function (t) {

                switch ((t = t || c.Width.Default)) {

                    case c.Width.Inner:

                    case c.Width.Outer:

                        return this._width;

                    default:

                        return this._width - 2 * this.settings.stagePadding + this.settings.margin;

                }

            }),

            (c.prototype.refresh = function () {

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

            (c.prototype.onThrottledResize = function () {

                i.clearTimeout(this.resizeTimer), (this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate));

            }),

            (c.prototype.onResize = function () {

                return (

                    !!this._items.length &&

                    this._width !== this.$element.width() &&

                    !!this.isVisible() &&

                    (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))

                );

            }),

            (c.prototype.registerEventHandlers = function () {

                l.support.transition && this.$stage.on(l.support.transition.end + ".owl.core", l.proxy(this.onTransitionEnd, this)),

                    !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize),

                    this.settings.mouseDrag &&

                        (this.$element.addClass(this.options.dragClass),

                        this.$stage.on("mousedown.owl.core", l.proxy(this.onDragStart, this)),

                        this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {

                            return !1;

                        })),

                    this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", l.proxy(this.onDragEnd, this)));

            }),

            (c.prototype.onDragStart = function (t) {

                var e = null;

                3 !== t.which &&

                    ((e = l.support.transform

                        ? {

                              x: (e = this.$stage

                                  .css("transform")

                                  .replace(/.*\(|\)| /g, "")

                                  .split(","))[16 === e.length ? 12 : 4],

                              y: e[16 === e.length ? 13 : 5],

                          }

                        : ((e = this.$stage.position()), { x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin : e.left, y: e.top })),

                    this.is("animating") && (l.support.transform ? this.animate(e.x) : this.$stage.stop(), this.invalidate("position")),

                    this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type),

                    this.speed(0),

                    (this._drag.time = new Date().getTime()),

                    (this._drag.target = l(t.target)),

                    (this._drag.stage.start = e),

                    (this._drag.stage.current = e),

                    (this._drag.pointer = this.pointer(t)),

                    l(n).on("mouseup.owl.core touchend.owl.core", l.proxy(this.onDragEnd, this)),

                    l(n).one(

                        "mousemove.owl.core touchmove.owl.core",

                        l.proxy(function (t) {

                            var e = this.difference(this._drag.pointer, this.pointer(t));

                            l(n).on("mousemove.owl.core touchmove.owl.core", l.proxy(this.onDragMove, this)), (Math.abs(e.x) < Math.abs(e.y) && this.is("valid")) || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"));

                        }, this)

                    ));

            }),

            (c.prototype.onDragMove = function (t) {

                var e = null,

                    i = null,

                    n = this.difference(this._drag.pointer, this.pointer(t)),

                    o = this.difference(this._drag.stage.start, n);

                this.is("dragging") &&

                    (t.preventDefault(),

                    this.settings.loop

                        ? ((e = this.coordinates(this.minimum())), (i = this.coordinates(this.maximum() + 1) - e), (o.x = ((((o.x - e) % i) + i) % i) + e))

                        : ((e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum())),

                          (i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum())),

                          (t = this.settings.pullDrag ? (-1 * n.x) / 5 : 0),

                          (o.x = Math.max(Math.min(o.x, e + t), i + t))),

                    (this._drag.stage.current = o),

                    this.animate(o.x));

            }),

            (c.prototype.onDragEnd = function (t) {

                t = this.difference(this._drag.pointer, this.pointer(t));

                var e = this._drag.stage.current,

                    i = (0 < t.x) ^ this.settings.rtl ? "left" : "right";

                l(n).off(".owl.core"),

                    this.$element.removeClass(this.options.grabClass),

                    ((0 !== t.x && this.is("dragging")) || !this.is("valid")) &&

                        (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),

                        this.current(this.closest(e.x, 0 !== t.x ? i : this._drag.direction)),

                        this.invalidate("position"),

                        this.update(),

                        (this._drag.direction = i),

                        3 < Math.abs(t.x) || 300 < new Date().getTime() - this._drag.time) &&

                        this._drag.target.one("click.owl.core", function () {

                            return !1;

                        }),

                    this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));

            }),

            (c.prototype.closest = function (i, n) {

                var o = -1,

                    r = this.width(),

                    s = this.coordinates();

                return (

                    this.settings.freeDrag ||

                        l.each(

                            s,

                            l.proxy(function (t, e) {

                                return (

                                    "left" === n && e - 30 < i && i < e + 30

                                        ? (o = t)

                                        : "right" === n && e - r - 30 < i && i < e - r + 30

                                        ? (o = t + 1)

                                        : this.op(i, "<", e) && this.op(i, ">", s[t + 1] !== a ? s[t + 1] : e - r) && (o = "left" === n ? t + 1 : t),

                                    -1 === o

                                );

                            }, this)

                        ),

                    this.settings.loop || (this.op(i, ">", s[this.minimum()]) ? (o = i = this.minimum()) : this.op(i, "<", s[this.maximum()]) && (o = i = this.maximum())),

                    o

                );

            }),

            (c.prototype.animate = function (t) {

                var e = 0 < this.speed();

                this.is("animating") && this.onTransitionEnd(),

                    e && (this.enter("animating"), this.trigger("translate")),

                    l.support.transform3d && l.support.transition

                        ? this.$stage.css({ transform: "translate3d(" + t + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "") })

                        : e

                        ? this.$stage.animate({ left: t + "px" }, this.speed(), this.settings.fallbackEasing, l.proxy(this.onTransitionEnd, this))

                        : this.$stage.css({ left: t + "px" });

            }),

            (c.prototype.is = function (t) {

                return this._states.current[t] && 0 < this._states.current[t];

            }),

            (c.prototype.current = function (t) {

                if (t !== a) {

                    if (0 === this._items.length) return a;

                    var e;

                    (t = this.normalize(t)),

                        this._current !== t &&

                            ((e = this.trigger("change", { property: { name: "position", value: t } })).data !== a && (t = this.normalize(e.data)),

                            (this._current = t),

                            this.invalidate("position"),

                            this.trigger("changed", { property: { name: "position", value: this._current } }));

                }

                return this._current;

            }),

            (c.prototype.invalidate = function (t) {

                return (

                    "string" === l.type(t) && ((this._invalidated[t] = !0), this.is("valid")) && this.leave("valid"),

                    l.map(this._invalidated, function (t, e) {

                        return e;

                    })

                );

            }),

            (c.prototype.reset = function (t) {

                (t = this.normalize(t)) !== a && ((this._speed = 0), (this._current = t), this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]));

            }),

            (c.prototype.normalize = function (t, e) {

                var i = this._items.length;

                return (e = e ? 0 : this._clones.length), !this.isNumeric(t) || i < 1 ? (t = a) : (t < 0 || i + e <= t) && (t = ((((t - e / 2) % i) + i) % i) + e / 2), t;

            }),

            (c.prototype.relative = function (t) {

                return (t -= this._clones.length / 2), this.normalize(t, !0);

            }),

            (c.prototype.maximum = function (t) {

                var e,

                    i,

                    n,

                    o = this.settings,

                    r = this._coordinates.length;

                if (o.loop) r = this._clones.length / 2 + this._items.length - 1;

                else if (o.autoWidth || o.merge) {

                    if ((e = this._items.length)) for (i = this._items[--e].width(), n = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > n); );

                    r = e + 1;

                } else r = o.center ? this._items.length - 1 : this._items.length - o.items;

                return t && (r -= this._clones.length / 2), Math.max(r, 0);

            }),

            (c.prototype.minimum = function (t) {

                return t ? 0 : this._clones.length / 2;

            }),

            (c.prototype.items = function (t) {

                return t === a ? this._items.slice() : ((t = this.normalize(t, !0)), this._items[t]);

            }),

            (c.prototype.mergers = function (t) {

                return t === a ? this._mergers.slice() : ((t = this.normalize(t, !0)), this._mergers[t]);

            }),

            (c.prototype.clones = function (i) {

                function n(t) {

                    return t % 2 == 0 ? o + t / 2 : e - (t + 1) / 2;

                }

                var e = this._clones.length / 2,

                    o = e + this._items.length;

                return i === a

                    ? l.map(this._clones, function (t, e) {

                          return n(e);

                      })

                    : l.map(this._clones, function (t, e) {

                          return t === i ? n(e) : null;

                      });

            }),

            (c.prototype.speed = function (t) {

                return t !== a && (this._speed = t), this._speed;

            }),

            (c.prototype.coordinates = function (t) {

                var e,

                    i = 1,

                    n = t - 1;

                return t === a

                    ? l.map(

                          this._coordinates,

                          l.proxy(function (t, e) {

                              return this.coordinates(e);

                          }, this)

                      )

                    : (this.settings.center ? (this.settings.rtl && ((i = -1), (n = t + 1)), (e = this._coordinates[t]), (e += ((this.width() - e + (this._coordinates[n] || 0)) / 2) * i)) : (e = this._coordinates[n] || 0), Math.ceil(e));

            }),

            (c.prototype.duration = function (t, e, i) {

                return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed);

            }),

            (c.prototype.to = function (t, e) {

                var i = this.current(),

                    n = t - this.relative(i),

                    o = (0 < n) - (n < 0),

                    r = this._items.length,

                    s = this.minimum(),

                    a = this.maximum();

                this.settings.loop

                    ? (!this.settings.rewind && Math.abs(n) > r / 2 && (n += -1 * o * r), (o = (((((t = i + n) - s) % r) + r) % r) + s) !== t && o - n <= a && 0 < o - n && this.reset((i = (t = o) - n)))

                    : (t = this.settings.rewind ? ((t % (a += 1)) + a) % a : Math.max(s, Math.min(a, t))),

                    this.speed(this.duration(i, t, e)),

                    this.current(t),

                    this.isVisible() && this.update();

            }),

            (c.prototype.next = function (t) {

                (t = t || !1), this.to(this.relative(this.current()) + 1, t);

            }),

            (c.prototype.prev = function (t) {

                (t = t || !1), this.to(this.relative(this.current()) - 1, t);

            }),

            (c.prototype.onTransitionEnd = function (t) {

                if (t !== a && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;

                this.leave("animating"), this.trigger("translated");

            }),

            (c.prototype.viewport = function () {

                var t;

                return (

                    this.options.responsiveBaseElement !== i

                        ? (t = l(this.options.responsiveBaseElement).width())

                        : i.innerWidth

                        ? (t = i.innerWidth)

                        : n.documentElement && n.documentElement.clientWidth

                        ? (t = n.documentElement.clientWidth)

                        : console.warn("Can not detect viewport width."),

                    t

                );

            }),

            (c.prototype.replace = function (t) {

                this.$stage.empty(),

                    (this._items = []),

                    (t = t && (t instanceof jQuery ? t : l(t))),

                    (t = this.settings.nestedItemSelector ? t.find("." + this.settings.nestedItemSelector) : t)

                        .filter(function () {

                            return 1 === this.nodeType;

                        })

                        .each(

                            l.proxy(function (t, e) {

                                (e = this.prepare(e)), this.$stage.append(e), this._items.push(e), this._mergers.push(+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);

                            }, this)

                        ),

                    this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),

                    this.invalidate("items");

            }),

            (c.prototype.add = function (t, e) {

                var i = this.relative(this._current);

                (e = e === a ? this._items.length : this.normalize(e, !0)),

                    (t = t instanceof jQuery ? t : l(t)),

                    this.trigger("add", { content: t, position: e }),

                    (t = this.prepare(t)),

                    0 === this._items.length || e === this._items.length

                        ? (0 === this._items.length && this.$stage.append(t),

                          0 !== this._items.length && this._items[e - 1].after(t),

                          this._items.push(t),

                          this._mergers.push(+t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1))

                        : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, +t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),

                    this._items[i] && this.reset(this._items[i].index()),

                    this.invalidate("items"),

                    this.trigger("added", { content: t, position: e });

            }),

            (c.prototype.remove = function (t) {

                (t = this.normalize(t, !0)) !== a &&

                    (this.trigger("remove", { content: this._items[t], position: t }),

                    this._items[t].remove(),

                    this._items.splice(t, 1),

                    this._mergers.splice(t, 1),

                    this.invalidate("items"),

                    this.trigger("removed", { content: null, position: t }));

            }),

            (c.prototype.preloadAutoWidthImages = function (t) {

                t.each(

                    l.proxy(function (t, e) {

                        this.enter("pre-loading"),

                            (e = l(e)),

                            l(new Image())

                                .one(

                                    "load",

                                    l.proxy(function (t) {

                                        e.attr("src", t.target.src), e.css("opacity", 1), this.leave("pre-loading"), this.is("pre-loading") || this.is("initializing") || this.refresh();

                                    }, this)

                                )

                                .attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"));

                    }, this)

                );

            }),

            (c.prototype.destroy = function () {

                for (var t in (this.$element.off(".owl.core"),

                this.$stage.off(".owl.core"),

                l(n).off(".owl.core"),

                !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer), this.off(i, "resize", this._handlers.onThrottledResize)),

                this._plugins))

                    this._plugins[t].destroy();

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

                        .attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), ""))

                        .removeData("owl.carousel");

            }),

            (c.prototype.op = function (t, e, i) {

                var n = this.settings.rtl;

                switch (e) {

                    case "<":

                        return n ? i < t : t < i;

                    case ">":

                        return n ? t < i : i < t;

                    case ">=":

                        return n ? t <= i : i <= t;

                    case "<=":

                        return n ? i <= t : t <= i;

                }

            }),

            (c.prototype.on = function (t, e, i, n) {

                t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i);

            }),

            (c.prototype.off = function (t, e, i, n) {

                t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i);

            }),

            (c.prototype.trigger = function (t, e, i, n, o) {

                var r = { item: { count: this._items.length, index: this.current() } },

                    s = l.camelCase(

                        l

                            .grep(["on", t, i], function (t) {

                                return t;

                            })

                            .join("-")

                            .toLowerCase()

                    ),

                    a = l.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), l.extend({ relatedTarget: this }, r, e));

                return (

                    this._supress[t] ||

                        (l.each(this._plugins, function (t, e) {

                            e.onTrigger && e.onTrigger(a);

                        }),

                        this.register({ type: c.Type.Event, name: t }),

                        this.$element.trigger(a),

                        this.settings && "function" == typeof this.settings[s] && this.settings[s].call(this, a)),

                    a

                );

            }),

            (c.prototype.enter = function (t) {

                l.each(

                    [t].concat(this._states.tags[t] || []),

                    l.proxy(function (t, e) {

                        this._states.current[e] === a && (this._states.current[e] = 0), this._states.current[e]++;

                    }, this)

                );

            }),

            (c.prototype.leave = function (t) {

                l.each(

                    [t].concat(this._states.tags[t] || []),

                    l.proxy(function (t, e) {

                        this._states.current[e]--;

                    }, this)

                );

            }),

            (c.prototype.register = function (i) {

                var e;

                i.type === c.Type.Event

                    ? (l.event.special[i.name] || (l.event.special[i.name] = {}),

                      l.event.special[i.name].owl ||

                          ((e = l.event.special[i.name]._default),

                          (l.event.special[i.name]._default = function (t) {

                              return !e || !e.apply || (t.namespace && -1 !== t.namespace.indexOf("owl")) ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments);

                          }),

                          (l.event.special[i.name].owl = !0)))

                    : i.type === c.Type.State &&

                      (this._states.tags[i.name] ? (this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags)) : (this._states.tags[i.name] = i.tags),

                      (this._states.tags[i.name] = l.grep(

                          this._states.tags[i.name],

                          l.proxy(function (t, e) {

                              return l.inArray(t, this._states.tags[i.name]) === e;

                          }, this)

                      )));

            }),

            (c.prototype.suppress = function (t) {

                l.each(

                    t,

                    l.proxy(function (t, e) {

                        this._supress[e] = !0;

                    }, this)

                );

            }),

            (c.prototype.release = function (t) {

                l.each(

                    t,

                    l.proxy(function (t, e) {

                        delete this._supress[e];

                    }, this)

                );

            }),

            (c.prototype.pointer = function (t) {

                var e = { x: null, y: null };

                return (

                    (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX

                        ? ((e.x = t.pageX), (e.y = t.pageY))

                        : ((e.x = t.clientX), (e.y = t.clientY)),

                    e

                );

            }),

            (c.prototype.isNumeric = function (t) {

                return !isNaN(parseFloat(t));

            }),

            (c.prototype.difference = function (t, e) {

                return { x: t.x - e.x, y: t.y - e.y };

            }),

            (l.fn.owlCarousel = function (e) {

                var n = Array.prototype.slice.call(arguments, 1);

                return this.each(function () {

                    var t = l(this),

                        i = t.data("owl.carousel");

                    i ||

                        ((i = new c(this, "object" == typeof e && e)),

                        t.data("owl.carousel", i),

                        l.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (t, e) {

                            i.register({ type: c.Type.Event, name: e }),

                                i.$element.on(

                                    e + ".owl.carousel.core",

                                    l.proxy(function (t) {

                                        t.namespace && t.relatedTarget !== this && (this.suppress([e]), i[e].apply(this, [].slice.call(arguments, 1)), this.release([e]));

                                    }, i)

                                );

                        })),

                        "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, n);

                });

            }),

            (l.fn.owlCarousel.Constructor = c);

    })(window.Zepto || window.jQuery, window, document),

    (function (e, i) {

        function n(t) {

            (this._core = t),

                (this._interval = null),

                (this._visible = null),

                (this._handlers = {

                    "initialized.owl.carousel": e.proxy(function (t) {

                        t.namespace && this._core.settings.autoRefresh && this.watch();

                    }, this),

                }),

                (this._core.options = e.extend({}, n.Defaults, this._core.options)),

                this._core.$element.on(this._handlers);

        }

        (n.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),

            (n.prototype.watch = function () {

                this._interval || ((this._visible = this._core.isVisible()), (this._interval = i.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)));

            }),

            (n.prototype.refresh = function () {

                this._core.isVisible() !== this._visible && ((this._visible = !this._visible), this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible) && this._core.invalidate("width") && this._core.refresh();

            }),

            (n.prototype.destroy = function () {

                var t, e;

                for (t in (i.clearInterval(this._interval), this._handlers)) this._core.$element.off(t, this._handlers[t]);

                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);

            }),

            (e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n);

    })(window.Zepto || window.jQuery, window, document),

    (function (a, o) {

        function e(t) {

            (this._core = t),

                (this._loaded = []),

                (this._handlers = {

                    "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (t) {

                        if (t.namespace && this._core.settings && this._core.settings.lazyLoad && ((t.property && "position" == t.property.name) || "initialized" == t.type)) {

                            var e = this._core.settings,

                                i = (e.center && Math.ceil(e.items / 2)) || e.items,

                                n = (e.center && -1 * i) || 0,

                                o = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + n,

                                r = this._core.clones().length,

                                s = a.proxy(function (t, e) {

                                    this.load(e);

                                }, this);

                            for (0 < e.lazyLoadEager && ((i += e.lazyLoadEager), e.loop) && ((o -= e.lazyLoadEager), i++); n++ < i; ) this.load(r / 2 + this._core.relative(o)), r && a.each(this._core.clones(this._core.relative(o)), s), o++;

                        }

                    }, this),

                }),

                (this._core.options = a.extend({}, e.Defaults, this._core.options)),

                this._core.$element.on(this._handlers);

        }

        (e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),

            (e.prototype.load = function (t) {

                var e = (t = this._core.$stage.children().eq(t)) && t.find(".owl-lazy");

                !e ||

                    -1 < a.inArray(t.get(0), this._loaded) ||

                    (e.each(

                        a.proxy(function (t, e) {

                            var i = a(e),

                                n = (1 < o.devicePixelRatio && i.attr("data-src-retina")) || i.attr("data-src") || i.attr("data-srcset");

                            this._core.trigger("load", { element: i, url: n }, "lazy"),

                                i.is("img")

                                    ? i

                                          .one(

                                              "load.owl.lazy",

                                              a.proxy(function () {

                                                  i.css("opacity", 1), this._core.trigger("loaded", { element: i, url: n }, "lazy");

                                              }, this)

                                          )

                                          .attr("src", n)

                                    : i.is("source")

                                    ? i

                                          .one(

                                              "load.owl.lazy",

                                              a.proxy(function () {

                                                  this._core.trigger("loaded", { element: i, url: n }, "lazy");

                                              }, this)

                                          )

                                          .attr("srcset", n)

                                    : (((e = new Image()).onload = a.proxy(function () {

                                          i.css({ "background-image": 'url("' + n + '")', opacity: "1" }), this._core.trigger("loaded", { element: i, url: n }, "lazy");

                                      }, this)),

                                      (e.src = n));

                        }, this)

                    ),

                    this._loaded.push(t.get(0)));

            }),

            (e.prototype.destroy = function () {

                var t, e;

                for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);

                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);

            }),

            (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);

    })(window.Zepto || window.jQuery, window, document),

    (function (o, i) {

        function n(t) {

            (this._core = t),

                (this._previousHeight = null),

                (this._handlers = {

                    "initialized.owl.carousel refreshed.owl.carousel": o.proxy(function (t) {

                        t.namespace && this._core.settings.autoHeight && this.update();

                    }, this),

                    "changed.owl.carousel": o.proxy(function (t) {

                        t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update();

                    }, this),

                    "loaded.owl.lazy": o.proxy(function (t) {

                        t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();

                    }, this),

                }),

                (this._core.options = o.extend({}, n.Defaults, this._core.options)),

                this._core.$element.on(this._handlers),

                (this._intervalId = null);

            var e = this;

            o(i).on("load", function () {

                e._core.settings.autoHeight && e.update();

            }),

                o(i).resize(function () {

                    e._core.settings.autoHeight &&

                        (null != e._intervalId && clearTimeout(e._intervalId),

                        (e._intervalId = setTimeout(function () {

                            e.update();

                        }, 250)));

                });

        }

        (n.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),

            (n.prototype.update = function () {

                var t = this._core._current,

                    e = t + this._core.settings.items,

                    i = this._core.settings.lazyLoad,

                    n = ((t = this._core.$stage.children().toArray().slice(t, e)), []),

                    e = 0;

                o.each(t, function (t, e) {

                    n.push(o(e).height());

                }),

                    (e = Math.max.apply(null, n)) <= 1 && i && this._previousHeight && (e = this._previousHeight),

                    (this._previousHeight = e),

                    this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass);

            }),

            (n.prototype.destroy = function () {

                var t, e;

                for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);

                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);

            }),

            (o.fn.owlCarousel.Constructor.Plugins.AutoHeight = n);

    })(window.Zepto || window.jQuery, window, document),

    (function (c, e) {

        function i(t) {

            (this._core = t),

                (this._videos = {}),

                (this._playing = null),

                (this._handlers = {

                    "initialized.owl.carousel": c.proxy(function (t) {

                        t.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });

                    }, this),

                    "resize.owl.carousel": c.proxy(function (t) {

                        t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault();

                    }, this),

                    "refreshed.owl.carousel": c.proxy(function (t) {

                        t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();

                    }, this),

                    "changed.owl.carousel": c.proxy(function (t) {

                        t.namespace && "position" === t.property.name && this._playing && this.stop();

                    }, this),

                    "prepared.owl.carousel": c.proxy(function (t) {

                        var e;

                        t.namespace && (e = c(t.content).find(".owl-video")).length && (e.css("display", "none"), this.fetch(e, c(t.content)));

                    }, this),

                }),

                (this._core.options = c.extend({}, i.Defaults, this._core.options)),

                this._core.$element.on(this._handlers),

                this._core.$element.on(

                    "click.owl.video",

                    ".owl-video-play-icon",

                    c.proxy(function (t) {

                        this.play(t);

                    }, this)

                );

        }

        (i.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),

            (i.prototype.fetch = function (t, e) {

                var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",

                    n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),

                    o = t.attr("data-width") || this._core.settings.videoWidth,

                    r = t.attr("data-height") || this._core.settings.videoHeight,

                    s = t.attr("href");

                if (!s) throw new Error("Missing video URL.");

                if (

                    -1 <

                    (n = s.match(

                        /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/

                    ))[3].indexOf("youtu")

                )

                    i = "youtube";

                else if (-1 < n[3].indexOf("vimeo")) i = "vimeo";

                else {

                    if (!(-1 < n[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");

                    i = "vzaar";

                }

                (n = n[6]), (this._videos[s] = { type: i, id: n, width: o, height: r }), e.attr("data-video", s), this.thumbnail(t, this._videos[s]);

            }),

            (i.prototype.thumbnail = function (e, t) {

                function i(t) {

                    (n = l.lazyLoad ? c("<div/>", { class: "owl-video-tn " + a, srcType: t }) : c("<div/>", { class: "owl-video-tn", style: "opacity:1;background-image:url(" + t + ")" })),

                        e.after(n),

                        e.after('<div class="owl-video-play-icon"></div>');

                }

                var n,

                    o = t.width && t.height ? "width:" + t.width + "px;height:" + t.height + "px;" : "",

                    r = e.find("img"),

                    s = "src",

                    a = "",

                    l = this._core.settings;

                if ((e.wrap(c("<div/>", { class: "owl-video-wrapper", style: o })), this._core.settings.lazyLoad && ((s = "data-src"), (a = "owl-lazy")), r.length)) return i(r.attr(s)), r.remove(), !1;

                "youtube" === t.type

                    ? i("//img.youtube.com/vi/" + t.id + "/hqdefault.jpg")

                    : "vimeo" === t.type

                    ? c.ajax({

                          type: "GET",

                          url: "//vimeo.com/api/v2/video/" + t.id + ".json",

                          jsonp: "callback",

                          dataType: "jsonp",

                          success: function (t) {

                              i(t[0].thumbnail_large);

                          },

                      })

                    : "vzaar" === t.type &&

                      c.ajax({

                          type: "GET",

                          url: "//vzaar.com/api/videos/" + t.id + ".json",

                          jsonp: "callback",

                          dataType: "jsonp",

                          success: function (t) {

                              i(t.framegrab_url);

                          },

                      });

            }),

            (i.prototype.stop = function () {

                this._core.trigger("stop", null, "video"),

                    this._playing.find(".owl-video-frame").remove(),

                    this._playing.removeClass("owl-video-playing"),

                    (this._playing = null),

                    this._core.leave("playing"),

                    this._core.trigger("stopped", null, "video");

            }),

            (i.prototype.play = function (t) {

                t = c(t.target).closest("." + this._core.settings.itemClass);

                var e,

                    i = this._videos[t.attr("data-video")],

                    n = i.width || "100%",

                    o = i.height || this._core.$stage.height();

                this._playing ||

                    (this._core.enter("playing"),

                    this._core.trigger("play", null, "video"),

                    (t = this._core.items(this._core.relative(t.index()))),

                    this._core.reset(t.index()),

                    (e = c('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", o),

                    e.attr("width", n),

                    "youtube" === i.type

                        ? e.attr("src", "//www.youtube.com/embed/" + i.id + "?autoplay=1&rel=0&v=" + i.id)

                        : "vimeo" === i.type

                        ? e.attr("src", "//player.vimeo.com/video/" + i.id + "?autoplay=1")

                        : "vzaar" === i.type && e.attr("src", "//view.vzaar.com/" + i.id + "/player?autoplay=true"),

                    c(e).wrap('<div class="owl-video-frame" />').insertAfter(t.find(".owl-video")),

                    (this._playing = t.addClass("owl-video-playing")));

            }),

            (i.prototype.isInFullScreen = function () {

                var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;

                return t && c(t).parent().hasClass("owl-video-frame");

            }),

            (i.prototype.destroy = function () {

                var t, e;

                for (t in (this._core.$element.off("click.owl.video"), this._handlers)) this._core.$element.off(t, this._handlers[t]);

                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);

            }),

            (c.fn.owlCarousel.Constructor.Plugins.Video = i);

    })(window.Zepto || window.jQuery, (window, document)),

    (function (s) {

        function e(t) {

            (this.core = t),

                (this.core.options = s.extend({}, e.Defaults, this.core.options)),

                (this.swapping = !0),

                (this.previous = void 0),

                (this.next = void 0),

                (this.handlers = {

                    "change.owl.carousel": s.proxy(function (t) {

                        t.namespace && "position" == t.property.name && ((this.previous = this.core.current()), (this.next = t.property.value));

                    }, this),

                    "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": s.proxy(function (t) {

                        t.namespace && (this.swapping = "translated" == t.type);

                    }, this),

                    "translate.owl.carousel": s.proxy(function (t) {

                        t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();

                    }, this),

                }),

                this.core.$element.on(this.handlers);

        }

        (e.Defaults = { animateOut: !1, animateIn: !1 }),

            (e.prototype.swap = function () {

                var t, e, i, n, o, r;

                1 === this.core.settings.items &&

                    s.support.animation &&

                    s.support.transition &&

                    (this.core.speed(0),

                    (e = s.proxy(this.clear, this)),

                    (i = this.core.$stage.children().eq(this.previous)),

                    (n = this.core.$stage.children().eq(this.next)),

                    (o = this.core.settings.animateIn),

                    (r = this.core.settings.animateOut),

                    this.core.current() !== this.previous) &&

                    (r &&

                        ((t = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),

                        i

                            .one(s.support.animation.end, e)

                            .css({ left: t + "px" })

                            .addClass("animated owl-animated-out")

                            .addClass(r)),

                    o) &&

                    n.one(s.support.animation.end, e).addClass("animated owl-animated-in").addClass(o);

            }),

            (e.prototype.clear = function (t) {

                s(t.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();

            }),

            (e.prototype.destroy = function () {

                var t, e;

                for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);

                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);

            }),

            (s.fn.owlCarousel.Constructor.Plugins.Animate = e);

    })(window.Zepto || window.jQuery, (window, document)),

    (function (n, o, e) {

        function i(t) {

            (this._core = t),

                (this._call = null),

                (this._time = 0),

                (this._timeout = 0),

                (this._paused = !0),

                (this._handlers = {

                    "changed.owl.carousel": n.proxy(function (t) {

                        t.namespace && "settings" === t.property.name ? (this._core.settings.autoplay ? this.play() : this.stop()) : t.namespace && "position" === t.property.name && this._paused && (this._time = 0);

                    }, this),

                    "initialized.owl.carousel": n.proxy(function (t) {

                        t.namespace && this._core.settings.autoplay && this.play();

                    }, this),

                    "play.owl.autoplay": n.proxy(function (t, e, i) {

                        t.namespace && this.play(e, i);

                    }, this),

                    "stop.owl.autoplay": n.proxy(function (t) {

                        t.namespace && this.stop();

                    }, this),

                    "mouseover.owl.autoplay": n.proxy(function () {

                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();

                    }, this),

                    "mouseleave.owl.autoplay": n.proxy(function () {

                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();

                    }, this),

                    "touchstart.owl.core": n.proxy(function () {

                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();

                    }, this),

                    "touchend.owl.core": n.proxy(function () {

                        this._core.settings.autoplayHoverPause && this.play();

                    }, this),

                }),

                this._core.$element.on(this._handlers),

                (this._core.options = n.extend({}, i.Defaults, this._core.options));

        }

        (i.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }),

            (i.prototype._next = function (t) {

                (this._call = o.setTimeout(n.proxy(this._next, this, t), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read())),

                    this._core.is("interacting") || e.hidden || this._core.next(t || this._core.settings.autoplaySpeed);

            }),

            (i.prototype.read = function () {

                return new Date().getTime() - this._time;

            }),

            (i.prototype.play = function (t, e) {

                var i;

                this._core.is("rotating") || this._core.enter("rotating"),

                    (t = t || this._core.settings.autoplayTimeout),

                    (i = Math.min(this._time % (this._timeout || t), t)),

                    this._paused ? ((this._time = this.read()), (this._paused = !1)) : o.clearTimeout(this._call),

                    (this._time += (this.read() % t) - i),

                    (this._timeout = t),

                    (this._call = o.setTimeout(n.proxy(this._next, this, e), t - i));

            }),

            (i.prototype.stop = function () {

                this._core.is("rotating") && ((this._time = 0), (this._paused = !0), o.clearTimeout(this._call), this._core.leave("rotating"));

            }),

            (i.prototype.pause = function () {

                this._core.is("rotating") && !this._paused && ((this._time = this.read()), (this._paused = !0), o.clearTimeout(this._call));

            }),

            (i.prototype.destroy = function () {

                var t, e;

                for (t in (this.stop(), this._handlers)) this._core.$element.off(t, this._handlers[t]);

                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);

            }),

            (n.fn.owlCarousel.Constructor.Plugins.autoplay = i);

    })(window.Zepto || window.jQuery, window, document),

    (function (o) {

        "use strict";

        function e(t) {

            (this._core = t),

                (this._initialized = !1),

                (this._pages = []),

                (this._controls = {}),

                (this._templates = []),

                (this.$element = this._core.$element),

                (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),

                (this._handlers = {

                    "prepared.owl.carousel": o.proxy(function (t) {

                        t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + o(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");

                    }, this),

                    "added.owl.carousel": o.proxy(function (t) {

                        t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop());

                    }, this),

                    "remove.owl.carousel": o.proxy(function (t) {

                        t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1);

                    }, this),

                    "changed.owl.carousel": o.proxy(function (t) {

                        t.namespace && "position" == t.property.name && this.draw();

                    }, this),

                    "initialized.owl.carousel": o.proxy(function (t) {

                        t.namespace &&

                            !this._initialized &&

                            (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), (this._initialized = !0), this._core.trigger("initialized", null, "navigation"));

                    }, this),

                    "refreshed.owl.carousel": o.proxy(function (t) {

                        t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));

                    }, this),

                }),

                (this._core.options = o.extend({}, e.Defaults, this._core.options)),

                this.$element.on(this._handlers);

        }

        (e.Defaults = {

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

            (e.prototype.initialize = function () {

                var t,

                    i = this._core.settings;

                for (t in ((this._controls.$relative = (i.navContainer ? o(i.navContainer) : o("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled")),

                (this._controls.$previous = o("<" + i.navElement + ">")

                    .addClass(i.navClass[0])

                    .html(i.navText[0])

                    .prependTo(this._controls.$relative)

                    .on(

                        "click",

                        o.proxy(function (t) {

                            this.prev(i.navSpeed);

                        }, this)

                    )),

                (this._controls.$next = o("<" + i.navElement + ">")

                    .addClass(i.navClass[1])

                    .html(i.navText[1])

                    .appendTo(this._controls.$relative)

                    .on(

                        "click",

                        o.proxy(function (t) {

                            this.next(i.navSpeed);

                        }, this)

                    )),

                i.dotsData || (this._templates = [o('<button role="button">').addClass(i.dotClass).append(o("<span>")).prop("outerHTML")]),

                (this._controls.$absolute = (i.dotsContainer ? o(i.dotsContainer) : o("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled")),

                this._controls.$absolute.on(

                    "click",

                    "button",

                    o.proxy(function (t) {

                        var e = (o(t.target).parent().is(this._controls.$absolute) ? o(t.target) : o(t.target).parent()).index();

                        t.preventDefault(), this.to(e, i.dotsSpeed);

                    }, this)

                ),

                this._overrides))

                    this._core[t] = o.proxy(this[t], this);

            }),

            (e.prototype.destroy = function () {

                var t,

                    e,

                    i,

                    n,

                    o = this._core.settings;

                for (t in this._handlers) this.$element.off(t, this._handlers[t]);

                for (e in this._controls) "$relative" === e && o.navContainer ? this._controls[e].html("") : this._controls[e].remove();

                for (n in this.overides) this._core[n] = this._overrides[n];

                for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null);

            }),

            (e.prototype.update = function () {

                var t,

                    e,

                    i = this._core.clones().length / 2,

                    n = i + this._core.items().length,

                    o = this._core.maximum(!0),

                    r = this._core.settings,

                    s = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;

                if (("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy))

                    for (this._pages = [], t = i, e = 0; t < n; t++) {

                        if (s <= e || 0 === e) {

                            if ((this._pages.push({ start: Math.min(o, t - i), end: t - i + s - 1 }), Math.min(o, t - i) === o)) break;

                            e = 0;

                        }

                        e += this._core.mergers(this._core.relative(t));

                    }

            }),

            (e.prototype.draw = function () {

                var t = this._core.settings,

                    e = this._core.items().length <= t.items,

                    i = this._core.relative(this._core.current()),

                    n = t.loop || t.rewind;

                this._controls.$relative.toggleClass("disabled", !t.nav || e),

                    t.nav && (this._controls.$previous.toggleClass("disabled", !n && i <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !n && i >= this._core.maximum(!0))),

                    this._controls.$absolute.toggleClass("disabled", !t.dots || e),

                    t.dots &&

                        ((n = this._pages.length - this._controls.$absolute.children().length),

                        t.dotsData && 0 != n

                            ? this._controls.$absolute.html(this._templates.join(""))

                            : 0 < n

                            ? this._controls.$absolute.append(new Array(1 + n).join(this._templates[0]))

                            : n < 0 && this._controls.$absolute.children().slice(n).remove(),

                        this._controls.$absolute.find(".active").removeClass("active"),

                        this._controls.$absolute.children().eq(o.inArray(this.current(), this._pages)).addClass("active"));

            }),

            (e.prototype.onTrigger = function (t) {

                var e = this._core.settings;

                t.page = { index: o.inArray(this.current(), this._pages), count: this._pages.length, size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items) };

            }),

            (e.prototype.current = function () {

                var i = this._core.relative(this._core.current());

                return o

                    .grep(

                        this._pages,

                        o.proxy(function (t, e) {

                            return t.start <= i && t.end >= i;

                        }, this)

                    )

                    .pop();

            }),

            (e.prototype.getPosition = function (t) {

                var e,

                    i,

                    n = this._core.settings;

                return (

                    "page" == n.slideBy

                        ? ((e = o.inArray(this.current(), this._pages)), (i = this._pages.length), t ? ++e : --e, (e = this._pages[((e % i) + i) % i].start))

                        : ((e = this._core.relative(this._core.current())), (i = this._core.items().length), t ? (e += n.slideBy) : (e -= n.slideBy)),

                    e

                );

            }),

            (e.prototype.next = function (t) {

                o.proxy(this._overrides.to, this._core)(this.getPosition(!0), t);

            }),

            (e.prototype.prev = function (t) {

                o.proxy(this._overrides.to, this._core)(this.getPosition(!1), t);

            }),

            (e.prototype.to = function (t, e, i) {

                !i && this._pages.length ? ((i = this._pages.length), o.proxy(this._overrides.to, this._core)(this._pages[((t % i) + i) % i].start, e)) : o.proxy(this._overrides.to, this._core)(t, e);

            }),

            (o.fn.owlCarousel.Constructor.Plugins.Navigation = e);

    })(window.Zepto || window.jQuery, (window, document)),

    (function (n, o) {

        "use strict";

        function e(t) {

            (this._core = t),

                (this._hashes = {}),

                (this.$element = this._core.$element),

                (this._handlers = {

                    "initialized.owl.carousel": n.proxy(function (t) {

                        t.namespace && "URLHash" === this._core.settings.startPosition && n(o).trigger("hashchange.owl.navigation");

                    }, this),

                    "prepared.owl.carousel": n.proxy(function (t) {

                        var e;

                        t.namespace && (e = n(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash")) && (this._hashes[e] = t.content);

                    }, this),

                    "changed.owl.carousel": n.proxy(function (t) {

                        var i;

                        t.namespace &&

                            "position" === t.property.name &&

                            ((i = this._core.items(this._core.relative(this._core.current()))),

                            (t = n

                                .map(this._hashes, function (t, e) {

                                    return t === i ? e : null;

                                })

                                .join())) &&

                            o.location.hash.slice(1) !== t &&

                            (o.location.hash = t);

                    }, this),

                }),

                (this._core.options = n.extend({}, e.Defaults, this._core.options)),

                this.$element.on(this._handlers),

                n(o).on(

                    "hashchange.owl.navigation",

                    n.proxy(function (t) {

                        var e = o.location.hash.substring(1),

                            i = this._core.$stage.children();

                        void 0 !== (i = this._hashes[e] && i.index(this._hashes[e])) && i !== this._core.current() && this._core.to(this._core.relative(i), !1, !0);

                    }, this)

                );

        }

        (e.Defaults = { URLhashListener: !1 }),

            (e.prototype.destroy = function () {

                var t, e;

                for (t in (n(o).off("hashchange.owl.navigation"), this._handlers)) this._core.$element.off(t, this._handlers[t]);

                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);

            }),

            (n.fn.owlCarousel.Constructor.Plugins.Hash = e);

    })(window.Zepto || window.jQuery, window, document),

    (function (o) {

        function e(t, i) {

            var n = !1,

                e = t.charAt(0).toUpperCase() + t.slice(1);

            return (

                o.each((t + " " + s.join(e + " ") + e).split(" "), function (t, e) {

                    if (void 0 !== r[e]) return (n = !i || e), !1;

                }),

                n

            );

        }

        function t(t) {

            return e(t, !0);

        }

        var r = o("<support>").get(0).style,

            s = "Webkit Moz O ms".split(" "),

            i = {

                transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } },

                animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } },

            };

        e("transition") && ((o.support.transition = new String(t("transition"))), (o.support.transition.end = i.transition.end[o.support.transition])),

            e("animation") && ((o.support.animation = new String(t("animation"))), (o.support.animation.end = i.animation.end[o.support.animation])),

            e("transform") && ((o.support.transform = new String(t("transform"))), (o.support.transform3d = !!e("perspective")));

    })(window.Zepto || window.jQuery, (window, document)),

    (function (t) {

        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(window.jQuery || window.Zepto);

    })(function (c) {

        function t() {}

        function u(t, e) {

            f.ev.on("mfp" + t + ".mfp", e);

        }

        function h(t, e, i, n) {

            var o = document.createElement("div");

            return (o.className = "mfp-" + t), i && (o.innerHTML = i), n ? e && e.appendChild(o) : ((o = c(o)), e && o.appendTo(e)), o;

        }

        function d(t, e) {

            f.ev.triggerHandler("mfp" + t, e), f.st.callbacks && ((t = t.charAt(0).toLowerCase() + t.slice(1)), f.st.callbacks[t]) && f.st.callbacks[t].apply(f, Array.isArray(e) ? e : [e]);

        }

        function p(t) {

            return (t === y && f.currTemplate.closeBtn) || ((f.currTemplate.closeBtn = c(f.st.closeMarkup.replace("%title%", f.st.tClose))), (y = t)), f.currTemplate.closeBtn;

        }

        function r() {

            c.magnificPopup.instance || ((f = new t()).init(), (c.magnificPopup.instance = f));

        }

        function s() {

            w && (_.after(w.addClass(b)).detach(), (w = null));

        }

        function o() {

            x && c(document.body).removeClass(x);

        }

        function e() {

            o(), f.req && f.req.abort();

        }

        function n(t) {

            var e;

            f.currTemplate[P] && (e = f.currTemplate[P].find("iframe")).length && (t || (e[0].src = "//about:blank"), f.isIE8) && e.css("display", t ? "block" : "none");

        }

        function i(t) {

            var e = f.items.length;

            return e - 1 < t ? t - e : t < 0 ? e + t : t;

        }

        function a(t, e, i) {

            return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i);

        }

        var f,

            l,

            m,

            g,

            v,

            y,

            b,

            _,

            w,

            x,

            C,

            T = "Close",

            E = "BeforeClose",

            S = "MarkupParse",

            k = "mfp-ready",

            z = "mfp-removing",

            A = "mfp-prevent-close",

            I = !!window.jQuery,

            O = c(window),

            j =

                ((c.magnificPopup = {

                    instance: null,

                    proto: (t.prototype = {

                        constructor: t,

                        init: function () {

                            var t = navigator.appVersion;

                            (f.isLowIE = f.isIE8 = document.all && !document.addEventListener),

                                (f.isAndroid = /android/gi.test(t)),

                                (f.isIOS = /iphone|ipad|ipod/gi.test(t)),

                                (f.supportsTransition = (function () {

                                    var t = document.createElement("p").style,

                                        e = ["ms", "O", "Moz", "Webkit"];

                                    if (void 0 !== t.transition) return !0;

                                    for (; e.length; ) if (e.pop() + "Transition" in t) return !0;

                                    return !1;

                                })()),

                                (f.probablyMobile = f.isAndroid || f.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent)),

                                (m = c(document)),

                                (f.popupsCache = {});

                        },

                        open: function (t) {

                            if (!1 === t.isObj) {

                                (f.items = t.items.toArray()), (f.index = 0);

                                for (var e, i = t.items, n = 0; n < i.length; n++)

                                    if (((e = i[n]).parsed ? e.el[0] : e) === t.el[0]) {

                                        f.index = n;

                                        break;

                                    }

                            } else (f.items = Array.isArray(t.items) ? t.items : [t.items]), (f.index = t.index || 0);

                            if (!f.isOpen) {

                                (f.types = []),

                                    (v = ""),

                                    t.mainEl && t.mainEl.length ? (f.ev = t.mainEl.eq(0)) : (f.ev = m),

                                    t.key ? (f.popupsCache[t.key] || (f.popupsCache[t.key] = {}), (f.currTemplate = f.popupsCache[t.key])) : (f.currTemplate = {}),

                                    (f.st = c.extend(!0, {}, c.magnificPopup.defaults, t)),

                                    (f.fixedContentPos = "auto" === f.st.fixedContentPos ? !f.probablyMobile : f.st.fixedContentPos),

                                    f.st.modal && ((f.st.closeOnContentClick = !1), (f.st.closeOnBgClick = !1), (f.st.showCloseBtn = !1), (f.st.enableEscapeKey = !1)),

                                    f.bgOverlay ||

                                        ((f.bgOverlay = h("bg").on("click.mfp", function () {

                                            f.close();

                                        })),

                                        (f.wrap = h("wrap")

                                            .attr("tabindex", -1)

                                            .on("click.mfp", function (t) {

                                                f._checkIfClose(t.target) && f.close();

                                            })),

                                        (f.container = h("container", f.wrap))),

                                    (f.contentContainer = h("content")),

                                    f.st.preloader && (f.preloader = h("preloader", f.container, f.st.tLoading));

                                for (var o = c.magnificPopup.modules, n = 0; n < o.length; n++) {

                                    var r = (r = o[n]).charAt(0).toUpperCase() + r.slice(1);

                                    f["init" + r].call(f);

                                }

                                d("BeforeOpen"),

                                    f.st.showCloseBtn &&

                                        (f.st.closeBtnInside

                                            ? (u(S, function (t, e, i, n) {

                                                  i.close_replaceWith = p(n.type);

                                              }),

                                              (v += " mfp-close-btn-in"))

                                            : f.wrap.append(p())),

                                    f.st.alignTop && (v += " mfp-align-top"),

                                    f.fixedContentPos ? f.wrap.css({ overflow: f.st.overflowY, overflowX: "hidden", overflowY: f.st.overflowY }) : f.wrap.css({ top: O.scrollTop(), position: "absolute" }),

                                    (!1 !== f.st.fixedBgPos && ("auto" !== f.st.fixedBgPos || f.fixedContentPos)) || f.bgOverlay.css({ height: m.height(), position: "absolute" }),

                                    f.st.enableEscapeKey &&

                                        m.on("keyup.mfp", function (t) {

                                            27 === t.keyCode && f.close();

                                        }),

                                    O.on("resize.mfp", function () {

                                        f.updateSize();

                                    }),

                                    f.st.closeOnContentClick || (v += " mfp-auto-cursor"),

                                    v && f.wrap.addClass(v);

                                var s = (f.wH = O.height()),

                                    a = {},

                                    l =

                                        (f.fixedContentPos && f._hasScrollBar(s) && (l = f._getScrollbarSize()) && (a.marginRight = l),

                                        f.fixedContentPos && (f.isIE7 ? c("body, html").css("overflow", "hidden") : (a.overflow = "hidden")),

                                        f.st.mainClass);

                                return (

                                    f.isIE7 && (l += " mfp-ie7"),

                                    l && f._addClassToMFP(l),

                                    f.updateItemHTML(),

                                    d("BuildControls"),

                                    c("html").css(a),

                                    f.bgOverlay.add(f.wrap).prependTo(f.st.prependTo || c(document.body)),

                                    (f._lastFocusedEl = document.activeElement),

                                    setTimeout(function () {

                                        f.content ? (f._addClassToMFP(k), f._setFocus()) : f.bgOverlay.addClass(k), m.on("focusin.mfp", f._onFocusIn);

                                    }, 16),

                                    (f.isOpen = !0),

                                    f.updateSize(s),

                                    d("Open"),

                                    t

                                );

                            }

                            f.updateItemHTML();

                        },

                        close: function () {

                            f.isOpen &&

                                (d(E),

                                (f.isOpen = !1),

                                f.st.removalDelay && !f.isLowIE && f.supportsTransition

                                    ? (f._addClassToMFP(z),

                                      setTimeout(function () {

                                          f._close();

                                      }, f.st.removalDelay))

                                    : f._close());

                        },

                        _close: function () {

                            d(T);

                            var t = z + " " + k + " ";

                            f.bgOverlay.detach(),

                                f.wrap.detach(),

                                f.container.empty(),

                                f.st.mainClass && (t += f.st.mainClass + " "),

                                f._removeClassFromMFP(t),

                                f.fixedContentPos && ((t = { marginRight: "" }), f.isIE7 ? c("body, html").css("overflow", "") : (t.overflow = ""), c("html").css(t)),

                                m.off("keyup.mfp focusin.mfp"),

                                f.ev.off(".mfp"),

                                f.wrap.attr("class", "mfp-wrap").removeAttr("style"),

                                f.bgOverlay.attr("class", "mfp-bg"),

                                f.container.attr("class", "mfp-container"),

                                !f.st.showCloseBtn || (f.st.closeBtnInside && !0 !== f.currTemplate[f.currItem.type]) || (f.currTemplate.closeBtn && f.currTemplate.closeBtn.detach()),

                                f.st.autoFocusLast && f._lastFocusedEl && c(f._lastFocusedEl).trigger("focus"),

                                (f.currItem = null),

                                (f.content = null),

                                (f.currTemplate = null),

                                (f.prevHeight = 0),

                                d("AfterClose");

                        },

                        updateSize: function (t) {

                            var e;

                            f.isIOS ? ((e = document.documentElement.clientWidth / window.innerWidth), (e = window.innerHeight * e), f.wrap.css("height", e), (f.wH = e)) : (f.wH = t || O.height()),

                                f.fixedContentPos || f.wrap.css("height", f.wH),

                                d("Resize");

                        },

                        updateItemHTML: function () {

                            var t = f.items[f.index],

                                e = (f.contentContainer.detach(), f.content && f.content.detach(), (t = t.parsed ? t : f.parseEl(f.index)).type),

                                i =

                                    (d("BeforeChange", [f.currItem ? f.currItem.type : "", e]),

                                    (f.currItem = t),

                                    f.currTemplate[e] || (d("FirstMarkupParse", (i = !!f.st[e] && f.st[e].markup)), (f.currTemplate[e] = !i || c(i))),

                                    g && g !== t.type && f.container.removeClass("mfp-" + g + "-holder"),

                                    f["get" + e.charAt(0).toUpperCase() + e.slice(1)](t, f.currTemplate[e]));

                            f.appendContent(i, e), (t.preloaded = !0), d("Change", t), (g = t.type), f.container.prepend(f.contentContainer), d("AfterChange");

                        },

                        appendContent: function (t, e) {

                            (f.content = t) ? (f.st.showCloseBtn && f.st.closeBtnInside && !0 === f.currTemplate[e] ? f.content.find(".mfp-close").length || f.content.append(p()) : (f.content = t)) : (f.content = ""),

                                d("BeforeAppend"),

                                f.container.addClass("mfp-" + e + "-holder"),

                                f.contentContainer.append(f.content);

                        },

                        parseEl: function (t) {

                            var e,

                                i = f.items[t];

                            if ((i = i.tagName ? { el: c(i) } : ((e = i.type), { data: i, src: i.src })).el) {

                                for (var n = f.types, o = 0; o < n.length; o++)

                                    if (i.el.hasClass("mfp-" + n[o])) {

                                        e = n[o];

                                        break;

                                    }

                                (i.src = i.el.attr("data-mfp-src")), i.src || (i.src = i.el.attr("href"));

                            }

                            return (i.type = e || f.st.type || "inline"), (i.index = t), (i.parsed = !0), (f.items[t] = i), d("ElementParse", i), f.items[t];

                        },

                        addGroup: function (e, i) {

                            function t(t) {

                                (t.mfpEl = this), f._openClick(t, e, i);

                            }

                            var n = "click.magnificPopup";

                            ((i = i || {}).mainEl = e), i.items ? ((i.isObj = !0), e.off(n).on(n, t)) : ((i.isObj = !1), i.delegate ? e.off(n).on(n, i.delegate, t) : (i.items = e).off(n).on(n, t));

                        },

                        _openClick: function (t, e, i) {

                            var n = (void 0 !== i.midClick ? i : c.magnificPopup.defaults).midClick;

                            if (n || !(2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)) {

                                if ((n = (void 0 !== i.disableOn ? i : c.magnificPopup.defaults).disableOn))

                                    if ("function" == typeof n) {

                                        if (!n.call(f)) return !0;

                                    } else if (O.width() < n) return !0;

                                t.type && (t.preventDefault(), f.isOpen) && t.stopPropagation(), (i.el = c(t.mfpEl)), i.delegate && (i.items = e.find(i.delegate)), f.open(i);

                            }

                        },

                        updateStatus: function (t, e) {

                            var i;

                            f.preloader &&

                                (l !== t && f.container.removeClass("mfp-s-" + l),

                                d("UpdateStatus", (i = { status: t, text: (e = e || "loading" !== t ? e : f.st.tLoading) })),

                                (t = i.status),

                                (e = i.text),

                                f.st.allowHTMLInStatusIndicator ? f.preloader.html(e) : f.preloader.text(e),

                                f.preloader.find("a").on("click", function (t) {

                                    t.stopImmediatePropagation();

                                }),

                                f.container.addClass("mfp-s-" + t),

                                (l = t));

                        },

                        _checkIfClose: function (t) {

                            if (!c(t).closest("." + A).length) {

                                var e = f.st.closeOnContentClick,

                                    i = f.st.closeOnBgClick;

                                if (e && i) return !0;

                                if (!f.content || c(t).closest(".mfp-close").length || (f.preloader && t === f.preloader[0])) return !0;

                                if (t === f.content[0] || c.contains(f.content[0], t)) {

                                    if (e) return !0;

                                } else if (i && c.contains(document, t)) return !0;

                                return !1;

                            }

                        },

                        _addClassToMFP: function (t) {

                            f.bgOverlay.addClass(t), f.wrap.addClass(t);

                        },

                        _removeClassFromMFP: function (t) {

                            this.bgOverlay.removeClass(t), f.wrap.removeClass(t);

                        },

                        _hasScrollBar: function (t) {

                            return (f.isIE7 ? m.height() : document.body.scrollHeight) > (t || O.height());

                        },

                        _setFocus: function () {

                            (f.st.focus ? f.content.find(f.st.focus).eq(0) : f.wrap).trigger("focus");

                        },

                        _onFocusIn: function (t) {

                            if (t.target !== f.wrap[0] && !c.contains(f.wrap[0], t.target)) return f._setFocus(), !1;

                        },

                        _parseMarkup: function (o, t, e) {

                            var r;

                            e.data && (t = c.extend(e.data, t)),

                                d(S, [o, t, e]),

                                c.each(t, function (t, e) {

                                    if (void 0 === e || !1 === e) return !0;

                                    var i, n;

                                    1 < (r = t.split("_")).length

                                        ? 0 < (i = o.find(".mfp-" + r[0])).length &&

                                          ("replaceWith" === (n = r[1])

                                              ? i[0] !== e[0] && i.replaceWith(e)

                                              : "img" === n

                                              ? i.is("img")

                                                  ? i.attr("src", e)

                                                  : i.replaceWith(c("<img>").attr("src", e).attr("class", i.attr("class")))

                                              : i.attr(r[1], e))

                                        : f.st.allowHTMLInTemplate

                                        ? o.find(".mfp-" + t).html(e)

                                        : o.find(".mfp-" + t).text(e);

                                });

                        },

                        _getScrollbarSize: function () {

                            var t;

                            return (

                                void 0 === f.scrollbarSize &&

                                    (((t = document.createElement("div")).style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),

                                    document.body.appendChild(t),

                                    (f.scrollbarSize = t.offsetWidth - t.clientWidth),

                                    document.body.removeChild(t)),

                                f.scrollbarSize

                            );

                        },

                    }),

                    modules: [],

                    open: function (t, e) {

                        return r(), ((t = t ? c.extend(!0, {}, t) : {}).isObj = !0), (t.index = e || 0), this.instance.open(t);

                    },

                    close: function () {

                        return c.magnificPopup.instance && c.magnificPopup.instance.close();

                    },

                    registerModule: function (t, e) {

                        e.options && (c.magnificPopup.defaults[t] = e.options), c.extend(this.proto, e.proto), this.modules.push(t);

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

                        allowHTMLInStatusIndicator: !1,

                        allowHTMLInTemplate: !1,

                    },

                }),

                (c.fn.magnificPopup = function (t) {

                    r();

                    var e,

                        i,

                        n,

                        o = c(this);

                    return (

                        "string" == typeof t

                            ? "open" === t

                                ? ((e = I ? o.data("magnificPopup") : o[0].magnificPopup),

                                  (i = parseInt(arguments[1], 10) || 0),

                                  (n = e.items ? e.items[i] : ((n = o), (n = e.delegate ? n.find(e.delegate) : n).eq(i))),

                                  f._openClick({ mfpEl: n }, o, e))

                                : f.isOpen && f[t].apply(f, Array.prototype.slice.call(arguments, 1))

                            : ((t = c.extend(!0, {}, t)), I ? o.data("magnificPopup", t) : (o[0].magnificPopup = t), f.addGroup(o, t)),

                        o

                    );

                }),

                "inline"),

            L =

                (c.magnificPopup.registerModule(j, {

                    options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },

                    proto: {

                        initInline: function () {

                            f.types.push(j),

                                u(T + "." + j, function () {

                                    s();

                                });

                        },

                        getInline: function (t, e) {

                            var i, n, o;

                            return (

                                s(),

                                t.src

                                    ? ((i = f.st.inline),

                                      (n = c(t.src)).length

                                          ? ((o = n[0].parentNode) && o.tagName && (_ || ((b = i.hiddenClass), (_ = h(b)), (b = "mfp-" + b)), (w = n.after(_).detach().removeClass(b))), f.updateStatus("ready"))

                                          : (f.updateStatus("error", i.tNotFound), (n = c("<div>"))),

                                      (t.inlineElement = n))

                                    : (f.updateStatus("ready"), f._parseMarkup(e, {}, t), e)

                            );

                        },

                    },

                }),

                "ajax");

        c.magnificPopup.registerModule(L, {

            options: { settings: null, cursor: "mfp-ajax-cur", tError: "The content could not be loaded." },

            proto: {

                initAjax: function () {

                    f.types.push(L), (x = f.st.ajax.cursor), u(T + "." + L, e), u("BeforeChange.ajax", e);

                },

                getAjax: function (n) {

                    x && c(document.body).addClass(x), f.updateStatus("loading");

                    var t = c.extend(

                        {

                            url: n.src,

                            success: function (t, e, i) {

                                d("ParseAjax", (t = { data: t, xhr: i })),

                                    f.appendContent(c(t.data), L),

                                    (n.finished = !0),

                                    o(),

                                    f._setFocus(),

                                    setTimeout(function () {

                                        f.wrap.addClass(k);

                                    }, 16),

                                    f.updateStatus("ready"),

                                    d("AjaxContentAdded");

                            },

                            error: function () {

                                o(), (n.finished = n.loadError = !0), f.updateStatus("error", f.st.ajax.tError.replace("%url%", n.src));

                            },

                        },

                        f.st.ajax.settings

                    );

                    return (f.req = c.ajax(t)), "";

                },

            },

        }),

            c.magnificPopup.registerModule("image", {

                options: {

                    markup:

                        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',

                    cursor: "mfp-zoom-out-cur",

                    titleSrc: "title",

                    verticalFit: !0,

                    tError: "The image could not be loaded.",

                },

                proto: {

                    initImage: function () {

                        var t = f.st.image,

                            e = ".image";

                        f.types.push("image"),

                            u("Open" + e, function () {

                                "image" === f.currItem.type && t.cursor && c(document.body).addClass(t.cursor);

                            }),

                            u(T + e, function () {

                                t.cursor && c(document.body).removeClass(t.cursor), O.off("resize.mfp");

                            }),

                            u("Resize" + e, f.resizeImage),

                            f.isLowIE && u("AfterChange", f.resizeImage);

                    },

                    resizeImage: function () {

                        var t,

                            e = f.currItem;

                        e && e.img && f.st.image.verticalFit && ((t = 0), f.isLowIE && (t = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", f.wH - t));

                    },

                    _onImageHasSize: function (t) {

                        t.img && ((t.hasSize = !0), C && clearInterval(C), (t.isCheckingImgSize = !1), d("ImageHasSize", t), t.imgHidden) && (f.content && f.content.removeClass("mfp-loading"), (t.imgHidden = !1));

                    },

                    findImageSize: function (i) {

                        var n = 0,

                            o = i.img[0];

                        !(function t(e) {

                            C && clearInterval(C),

                                (C = setInterval(function () {

                                    0 < o.naturalWidth ? f._onImageHasSize(i) : (200 < n && clearInterval(C), 3 == ++n ? t(10) : 40 === n ? t(50) : 100 === n && t(500));

                                }, e));

                        })(1);

                    },

                    getImage: function (e, t) {

                        function i() {

                            e && (e.img.off(".mfploader"), e === f.currItem && (f._onImageHasSize(e), f.updateStatus("error", r.tError.replace("%url%", e.src))), (e.hasSize = !0), (e.loaded = !0), (e.loadError = !0));

                        }

                        var n,

                            o = 0,

                            r = f.st.image,

                            s = t.find(".mfp-img");

                        return (

                            s.length &&

                                (((n = document.createElement("img")).className = "mfp-img"),

                                e.el && e.el.find("img").length && (n.alt = e.el.find("img").attr("alt")),

                                (e.img = c(n)

                                    .on("load.mfploader", function t() {

                                        e &&

                                            (e.img[0].complete

                                                ? (e.img.off(".mfploader"), e === f.currItem && (f._onImageHasSize(e), f.updateStatus("ready")), (e.hasSize = !0), (e.loaded = !0), d("ImageLoadComplete"))

                                                : ++o < 200

                                                ? setTimeout(t, 100)

                                                : i());

                                    })

                                    .on("error.mfploader", i)),

                                (n.src = e.src),

                                s.is("img") && (e.img = e.img.clone()),

                                0 < (n = e.img[0]).naturalWidth ? (e.hasSize = !0) : n.width || (e.hasSize = !1)),

                            f._parseMarkup(

                                t,

                                {

                                    title: (function (t) {

                                        if (t.data && void 0 !== t.data.title) return t.data.title;

                                        var e = f.st.image.titleSrc;

                                        if (e) {

                                            if ("function" == typeof e) return e.call(f, t);

                                            if (t.el) return t.el.attr(e) || "";

                                        }

                                        return "";

                                    })(e),

                                    img_replaceWith: e.img,

                                },

                                e

                            ),

                            f.resizeImage(),

                            e.hasSize

                                ? (C && clearInterval(C), e.loadError ? (t.addClass("mfp-loading"), f.updateStatus("error", r.tError.replace("%url%", e.src))) : (t.removeClass("mfp-loading"), f.updateStatus("ready")))

                                : (f.updateStatus("loading"), (e.loading = !0), e.hasSize || ((e.imgHidden = !0), t.addClass("mfp-loading"), f.findImageSize(e))),

                            t

                        );

                    },

                },

            }),

            c.magnificPopup.registerModule("zoom", {

                options: {

                    enabled: !1,

                    easing: "ease-in-out",

                    duration: 300,

                    opener: function (t) {

                        return t.is("img") ? t : t.find("img");

                    },

                },

                proto: {

                    initZoom: function () {

                        var t,

                            e,

                            i,

                            n,

                            o,

                            r,

                            s = f.st.zoom;

                        s.enabled &&

                            f.supportsTransition &&

                            ((e = s.duration),

                            (i = function (t) {

                                t = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image");

                                var e = "all " + s.duration / 1e3 + "s " + s.easing,

                                    i = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },

                                    n = "transition";

                                return (i["-webkit-" + n] = i["-moz-" + n] = i["-o-" + n] = i[n] = e), t.css(i), t;

                            }),

                            (n = function () {

                                f.content.css("visibility", "visible");

                            }),

                            u("BuildControls.zoom", function () {

                                f._allowZoom() &&

                                    (clearTimeout(o),

                                    f.content.css("visibility", "hidden"),

                                    (t = f._getItemToZoom())

                                        ? ((r = i(t)).css(f._getOffset()),

                                          f.wrap.append(r),

                                          (o = setTimeout(function () {

                                              r.css(f._getOffset(!0)),

                                                  (o = setTimeout(function () {

                                                      n(),

                                                          setTimeout(function () {

                                                              r.remove(), (t = r = null), d("ZoomAnimationEnded");

                                                          }, 16);

                                                  }, e));

                                          }, 16)))

                                        : n());

                            }),

                            u(E + ".zoom", function () {

                                if (f._allowZoom()) {

                                    if ((clearTimeout(o), (f.st.removalDelay = e), !t)) {

                                        if (!(t = f._getItemToZoom())) return;

                                        r = i(t);

                                    }

                                    r.css(f._getOffset(!0)),

                                        f.wrap.append(r),

                                        f.content.css("visibility", "hidden"),

                                        setTimeout(function () {

                                            r.css(f._getOffset());

                                        }, 16);

                                }

                            }),

                            u(T + ".zoom", function () {

                                f._allowZoom() && (n(), r && r.remove(), (t = null));

                            }));

                    },

                    _allowZoom: function () {

                        return "image" === f.currItem.type;

                    },

                    _getItemToZoom: function () {

                        return !!f.currItem.hasSize && f.currItem.img;

                    },

                    _getOffset: function (t) {

                        var e = (t = t ? f.currItem.img : f.st.zoom.opener(f.currItem.el || f.currItem)).offset(),

                            i = parseInt(t.css("padding-top"), 10),

                            n = parseInt(t.css("padding-bottom"), 10);

                        return (

                            (e.top -= c(window).scrollTop() - i),

                            (t = { width: t.width(), height: (I ? t.innerHeight() : t[0].offsetHeight) - n - i }),

                            (D = void 0 === D ? void 0 !== document.createElement("p").style.MozTransform : D) ? (t["-moz-transform"] = t.transform = "translate(" + e.left + "px," + e.top + "px)") : ((t.left = e.left), (t.top = e.top)),

                            t

                        );

                    },

                },

            });

        var D,

            P = "iframe",

            M =

                (c.magnificPopup.registerModule(P, {

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

                            f.types.push(P),

                                u("BeforeChange", function (t, e, i) {

                                    e !== i && (e === P ? n() : i === P && n(!0));

                                }),

                                u(T + "." + P, function () {

                                    n();

                                });

                        },

                        getIframe: function (t, e) {

                            var i = t.src,

                                n = f.st.iframe,

                                o =

                                    (c.each(n.patterns, function () {

                                        if (-1 < i.indexOf(this.index))

                                            return this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), (i = this.src.replace("%id%", i)), !1;

                                    }),

                                    {});

                            return n.srcAction && (o[n.srcAction] = i), f._parseMarkup(e, o, t), f.updateStatus("ready"), e;

                        },

                    },

                }),

                c.magnificPopup.registerModule("gallery", {

                    options: {

                        enabled: !1,

                        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',

                        preload: [0, 2],

                        navigateByImgClick: !0,

                        arrows: !0,

                        tPrev: "Previous (Left arrow key)",

                        tNext: "Next (Right arrow key)",

                        tCounter: "%curr% of %total%",

                        langDir: null,

                        loop: !0,

                    },

                    proto: {

                        initGallery: function () {

                            var r = f.st.gallery,

                                t = ".mfp-gallery";

                            if (((f.direction = !0), !r || !r.enabled)) return !1;

                            r.langDir || (r.langDir = document.dir || "ltr"),

                                (v += " mfp-gallery"),

                                u("Open" + t, function () {

                                    r.navigateByImgClick &&

                                        f.wrap.on("click" + t, ".mfp-img", function () {

                                            if (1 < f.items.length) return f.next(), !1;

                                        }),

                                        m.on("keydown" + t, function (t) {

                                            37 === t.keyCode ? ("rtl" === r.langDir ? f.next() : f.prev()) : 39 === t.keyCode && ("rtl" === r.langDir ? f.prev() : f.next());

                                        }),

                                        f.updateGalleryButtons();

                                }),

                                u("UpdateStatus" + t, function () {

                                    f.updateGalleryButtons();

                                }),

                                u("UpdateStatus" + t, function (t, e) {

                                    e.text && (e.text = a(e.text, f.currItem.index, f.items.length));

                                }),

                                u(S + t, function (t, e, i, n) {

                                    var o = f.items.length;

                                    i.counter = 1 < o ? a(r.tCounter, n.index, o) : "";

                                }),

                                u("BuildControls" + t, function () {

                                    var t, e, i, n, o;

                                    1 < f.items.length &&

                                        r.arrows &&

                                        !f.arrowLeft &&

                                        ((e = "rtl" === r.langDir ? ((n = r.tNext), (t = r.tPrev), (o = "next"), "prev") : ((n = r.tPrev), (t = r.tNext), (o = "prev"), "next")),

                                        (i = r.arrowMarkup),

                                        (n = f.arrowLeft = c(

                                            i

                                                .replace(/%title%/gi, n)

                                                .replace(/%action%/gi, o)

                                                .replace(/%dir%/gi, "left")

                                        ).addClass(A)),

                                        (o = f.arrowRight = c(

                                            i

                                                .replace(/%title%/gi, t)

                                                .replace(/%action%/gi, e)

                                                .replace(/%dir%/gi, "right")

                                        ).addClass(A)),

                                        "rtl" === r.langDir ? ((f.arrowNext = n), (f.arrowPrev = o)) : ((f.arrowNext = o), (f.arrowPrev = n)),

                                        n.on("click", function () {

                                            "rtl" === r.langDir ? f.next() : f.prev();

                                        }),

                                        o.on("click", function () {

                                            "rtl" === r.langDir ? f.prev() : f.next();

                                        }),

                                        f.container.append(n.add(o)));

                                }),

                                u("Change" + t, function () {

                                    f._preloadTimeout && clearTimeout(f._preloadTimeout),

                                        (f._preloadTimeout = setTimeout(function () {

                                            f.preloadNearbyImages(), (f._preloadTimeout = null);

                                        }, 16));

                                }),

                                u(T + t, function () {

                                    m.off(t), f.wrap.off("click" + t), (f.arrowRight = f.arrowLeft = null);

                                });

                        },

                        next: function () {

                            var t = i(f.index + 1);

                            if (!f.st.gallery.loop && 0 === t) return !1;

                            (f.direction = !0), (f.index = t), f.updateItemHTML();

                        },

                        prev: function () {

                            var t = f.index - 1;

                            if (!f.st.gallery.loop && t < 0) return !1;

                            (f.direction = !1), (f.index = i(t)), f.updateItemHTML();

                        },

                        goTo: function (t) {

                            (f.direction = t >= f.index), (f.index = t), f.updateItemHTML();

                        },

                        preloadNearbyImages: function () {

                            for (var t = f.st.gallery.preload, e = Math.min(t[0], f.items.length), i = Math.min(t[1], f.items.length), n = 1; n <= (f.direction ? i : e); n++) f._preloadItem(f.index + n);

                            for (n = 1; n <= (f.direction ? e : i); n++) f._preloadItem(f.index - n);

                        },

                        _preloadItem: function (t) {

                            var e;

                            (t = i(t)),

                                f.items[t].preloaded ||

                                    (d("LazyLoad", (e = (e = f.items[t]).parsed ? e : f.parseEl(t))),

                                    "image" === e.type &&

                                        (e.img = c('<img class="mfp-img" />')

                                            .on("load.mfploader", function () {

                                                e.hasSize = !0;

                                            })

                                            .on("error.mfploader", function () {

                                                (e.hasSize = !0), (e.loadError = !0), d("LazyLoadError", e);

                                            })

                                            .attr("src", e.src)),

                                    (e.preloaded = !0));

                        },

                        updateGalleryButtons: function () {

                            f.st.gallery.loop || "object" != typeof f.arrowPrev || null === f.arrowPrev || (0 === f.index ? f.arrowPrev.hide() : f.arrowPrev.show(), f.index === f.items.length - 1 ? f.arrowNext.hide() : f.arrowNext.show());

                        },

                    },

                }),

                "retina");

        c.magnificPopup.registerModule(M, {

            options: {

                replaceSrc: function (t) {

                    return t.src.replace(/\.\w+$/, function (t) {

                        return "@2x" + t;

                    });

                },

                ratio: 1,

            },

            proto: {

                initRetina: function () {

                    var i, n;

                    1 < window.devicePixelRatio &&

                        ((i = f.st.retina), (n = i.ratio), 1 < (n = isNaN(n) ? n() : n)) &&

                        (u("ImageHasSize." + M, function (t, e) {

                            e.img.css({ "max-width": e.img[0].naturalWidth / n, width: "100%" });

                        }),

                        u("ElementParse." + M, function (t, e) {

                            e.src = i.replaceSrc(e, n);

                        }));

                },

            },

        }),

            r();

    }),

    (function () {

        "use strict";

        function e(t) {

            if (void 0 === t) throw new Error('Pathformer [constructor]: "element" parameter is required');

            if (t.constructor === String && !(t = document.getElementById(t))) throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');

            if (!(t instanceof window.SVGElement || t instanceof window.SVGGElement || /^svg$/i.test(t.nodeName))) throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');

            (this.el = t), this.scan(t);

        }

        function n(t, e, i) {

            o(), (this.isReady = !1), this.setElement(t, e), this.setOptions(e), this.setCallback(i), this.isReady && this.init();

        }

        var o, i, t, h;

        (e.prototype.TYPES = ["line", "ellipse", "circle", "polygon", "polyline", "rect"]),

            (e.prototype.ATTR_WATCH = ["cx", "cy", "points", "r", "rx", "ry", "x", "x1", "x2", "y", "y1", "y2"]),

            (e.prototype.scan = function (t) {

                for (var e, i, n = t.querySelectorAll(this.TYPES.join(",")), o = 0; o < n.length; o++)

                    (i = (0, this[(e = n[o]).tagName.toLowerCase() + "ToPath"])(this.parseAttr(e.attributes))), (i = this.pathMaker(e, i)), e.parentNode.replaceChild(i, e);

            }),

            (e.prototype.lineToPath = function (t) {

                var e = {},

                    i = t.x1 || 0,

                    n = t.y1 || 0,

                    o = t.x2 || 0;

                return (t = t.y2 || 0), (e.d = "M" + i + "," + n + "L" + o + "," + t), e;

            }),

            (e.prototype.rectToPath = function (t) {

                var e,

                    i = {},

                    n = parseFloat(t.x) || 0,

                    o = parseFloat(t.y) || 0,

                    r = parseFloat(t.width) || 0,

                    s = parseFloat(t.height) || 0;

                return (

                    t.rx || t.ry

                        ? ((e = parseInt(t.rx, 10) || -1),

                          (t = parseInt(t.ry, 10) || -1),

                          (e = Math.min(Math.max(e < 0 ? t : e, 0), r / 2)),

                          (t = Math.min(Math.max(t < 0 ? e : t, 0), s / 2)),

                          (i.d =

                              "M " +

                              (n + e) +

                              "," +

                              o +

                              " L " +

                              (n + r - e) +

                              "," +

                              o +

                              " A " +

                              e +

                              "," +

                              t +

                              ",0,0,1," +

                              (n + r) +

                              "," +

                              (o + t) +

                              " L " +

                              (n + r) +

                              "," +

                              (o + s - t) +

                              " A " +

                              e +

                              "," +

                              t +

                              ",0,0,1," +

                              (n + r - e) +

                              "," +

                              (o + s) +

                              " L " +

                              (n + e) +

                              "," +

                              (o + s) +

                              " A " +

                              e +

                              "," +

                              t +

                              ",0,0,1," +

                              n +

                              "," +

                              (o + s - t) +

                              " L " +

                              n +

                              "," +

                              (o + t) +

                              " A " +

                              e +

                              "," +

                              t +

                              ",0,0,1," +

                              (n + e) +

                              "," +

                              o))

                        : (i.d = "M" + n + " " + o + " L" + (n + r) + " " + o + " L" + (n + r) + " " + (o + s) + " L" + n + " " + (o + s) + " Z"),

                    i

                );

            }),

            (e.prototype.polylineToPath = function (t) {

                var e,

                    i = {},

                    n = t.points.trim().split(" ");

                if (-1 === t.points.indexOf(",")) {

                    for (var o = [], r = 0; r < n.length; r += 2) o.push(n[r] + "," + n[r + 1]);

                    n = o;

                }

                for (e = "M" + n[0], r = 1; r < n.length; r++) -1 !== n[r].indexOf(",") && (e += "L" + n[r]);

                return (i.d = e), i;

            }),

            (e.prototype.polygonToPath = function (t) {

                return ((t = e.prototype.polylineToPath(t)).d += "Z"), t;

            }),

            (e.prototype.ellipseToPath = function (t) {

                var e = {},

                    i = parseFloat(t.rx) || 0,

                    n = parseFloat(t.ry) || 0,

                    o = (s = parseFloat(t.cx) || 0) - i,

                    r = (t = parseFloat(t.cy) || 0),

                    s = parseFloat(s) + parseFloat(i);

                return (e.d = "M" + o + "," + r + "A" + i + "," + n + " 0,1,1 " + s + "," + t + "A" + i + "," + n + " 0,1,1 " + o + "," + t), e;

            }),

            (e.prototype.circleToPath = function (t) {

                var e = {},

                    i = parseFloat(t.r) || 0,

                    n = (r = parseFloat(t.cx) || 0) - i,

                    o = (t = parseFloat(t.cy) || 0),

                    r = parseFloat(r) + parseFloat(i);

                return (e.d = "M" + n + "," + o + "A" + i + "," + i + " 0,1,1 " + r + "," + t + "A" + i + "," + i + " 0,1,1 " + n + "," + t), e;

            }),

            (e.prototype.pathMaker = function (t, e) {

                for (var i, n = document.createElementNS("http://www.w3.org/2000/svg", "path"), o = 0; o < t.attributes.length; o++) (i = t.attributes[o]), -1 === this.ATTR_WATCH.indexOf(i.name) && n.setAttribute(i.name, i.value);

                for (o in e) n.setAttribute(o, e[o]);

                return n;

            }),

            (e.prototype.parseAttr = function (t) {

                for (var e, i = {}, n = 0; n < t.length; n++) {

                    if (((e = t[n]), -1 !== this.ATTR_WATCH.indexOf(e.name) && -1 !== e.value.indexOf("%")))

                        throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");

                    i[e.name] = e.value;

                }

                return i;

            }),

            (n.LINEAR = function (t) {

                return t;

            }),

            (n.EASE = function (t) {

                return -Math.cos(t * Math.PI) / 2 + 0.5;

            }),

            (n.EASE_OUT = function (t) {

                return 1 - Math.pow(1 - t, 3);

            }),

            (n.EASE_IN = function (t) {

                return Math.pow(t, 3);

            }),

            (n.EASE_OUT_BOUNCE = function (t) {

                var e = 1 - Math.cos(t * (0.5 * Math.PI)),

                    e = Math.pow(e, 1.5);

                return 1 - (t = Math.pow(1 - t, 2)) + (1 - Math.abs(Math.cos(e * (2.5 * Math.PI)))) * t;

            }),

            (n.prototype.setElement = function (e, i) {

                var n, t, o;

                if (void 0 === e) throw new Error('Vivus [constructor]: "element" parameter is required');

                if (e.constructor === String && !(e = document.getElementById(e))) throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');

                if (((this.parentEl = e), i && i.file))

                    (n = this),

                        (t = function () {

                            var t = document.createElement("div");

                            if (((t.innerHTML = this.responseText), !(t = t.querySelector("svg")))) throw new Error("Vivus [load]: Cannot find the SVG in the loaded file : " + i.file);

                            (n.el = t), n.el.setAttribute("width", "100%"), n.el.setAttribute("height", "100%"), n.parentEl.appendChild(n.el), (n.isReady = !0), n.init(), (n = null);

                        }),

                        (o = new window.XMLHttpRequest()).addEventListener("load", t),

                        o.open("GET", i.file),

                        o.send();

                else

                    switch (e.constructor) {

                        case window.SVGSVGElement:

                        case window.SVGElement:

                        case window.SVGGElement:

                            (this.el = e), (this.isReady = !0);

                            break;

                        case window.HTMLObjectElement:

                            (n = this),

                                (t = function (t) {

                                    if (!n.isReady) {

                                        if (((n.el = e.contentDocument && e.contentDocument.querySelector("svg")), !n.el && t)) throw new Error("Vivus [constructor]: object loaded does not contain any SVG");

                                        n.el &&

                                            (e.getAttribute("built-by-vivus") && (n.parentEl.insertBefore(n.el, e), n.parentEl.removeChild(e), n.el.setAttribute("width", "100%"), n.el.setAttribute("height", "100%")),

                                            (n.isReady = !0),

                                            n.init(),

                                            (n = null));

                                    }

                                })() || e.addEventListener("load", t);

                            break;

                        default:

                            throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)');

                    }

            }),

            (n.prototype.setOptions = function (t) {

                var e = ["delayed", "sync", "async", "nsync", "oneByOne", "scenario", "scenario-sync"],

                    i = ["inViewport", "manual", "autostart"];

                if (void 0 !== t && t.constructor !== Object) throw new Error('Vivus [constructor]: "options" parameter must be an object');

                if ((t = t || {}).type && -1 === e.indexOf(t.type)) throw new Error("Vivus [constructor]: " + t.type + " is not an existing animation `type`");

                if (((this.type = t.type || e[0]), t.start && -1 === i.indexOf(t.start))) throw new Error("Vivus [constructor]: " + t.start + " is not an existing `start` option");

                if (

                    ((this.start = t.start || i[0]),

                    (this.isIE = -1 !== window.navigator.userAgent.indexOf("MSIE") || -1 !== window.navigator.userAgent.indexOf("Trident/") || -1 !== window.navigator.userAgent.indexOf("Edge/")),

                    (this.duration = h(t.duration, 120)),

                    (this.delay = h(t.delay, null)),

                    (this.dashGap = h(t.dashGap, 1)),

                    (this.forceRender = t.hasOwnProperty("forceRender") ? !!t.forceRender : this.isIE),

                    (this.reverseStack = !!t.reverseStack),

                    (this.selfDestroy = !!t.selfDestroy),

                    (this.onReady = t.onReady),

                    (this.map = []),

                    (this.frameLength = this.currentFrame = this.delayUnit = this.speed = this.handle = null),

                    (this.ignoreInvisible = !!t.hasOwnProperty("ignoreInvisible") && !!t.ignoreInvisible),

                    (this.animTimingFunction = t.animTimingFunction || n.LINEAR),

                    (this.pathTimingFunction = t.pathTimingFunction || n.LINEAR),

                    this.delay >= this.duration)

                )

                    throw new Error("Vivus [constructor]: delay must be shorter than duration");

            }),

            (n.prototype.setCallback = function (t) {

                if (t && t.constructor !== Function) throw new Error('Vivus [constructor]: "callback" parameter must be a function');

                this.callback = t || function () {};

            }),

            (n.prototype.mapping = function () {

                for (var t, e, i, n = (e = i = 0), o = this.el.querySelectorAll("path"), r = !1, s = 0; s < o.length; s++) {

                    var a,

                        l,

                        r,

                        c,

                        u = o[s];

                    this.isInvisible(u) ||

                        ((c = { el: u, length: 0, startAt: 0, duration: 0, isResizeSensitive: !1 }),

                        "non-scaling-stroke" === u.getAttribute("vector-effect") ? ((l = u.getBoundingClientRect()), (a = u.getBBox()), (l = Math.max(l.width / a.width, l.height / a.height)), (r = c.isResizeSensitive = !0)) : (l = 1),

                        (c.length = Math.ceil(u.getTotalLength() * l)),

                        isNaN(c.length)

                            ? window.console && console.warn && console.warn("Vivus [mapping]: cannot retrieve a path element length", u)

                            : (this.map.push(c),

                              (u.style.strokeDasharray = c.length + " " + (c.length + 2 * this.dashGap)),

                              (u.style.strokeDashoffset = c.length + this.dashGap),

                              (c.length += this.dashGap),

                              (e += c.length),

                              this.renderPath(s)));

                }

                for (

                    r &&

                        console.warn(

                            "Vivus: this SVG contains non-scaling-strokes. You should call instance.recalc() when the SVG is resized or you will encounter unwanted behaviour. See https://github.com/maxwellito/vivus#non-scaling for more info."

                        ),

                        e = 0 === e ? 1 : e,

                        this.delay = null === this.delay ? this.duration / 3 : this.delay,

                        this.delayUnit = this.delay / (1 < o.length ? o.length - 1 : 1),

                        this.reverseStack && this.map.reverse(),

                        s = 0;

                    s < this.map.length;

                    s++

                ) {

                    switch (((c = this.map[s]), this.type)) {

                        case "delayed":

                            (c.startAt = this.delayUnit * s), (c.duration = this.duration - this.delay);

                            break;

                        case "oneByOne":

                            (c.startAt = (i / e) * this.duration), (c.duration = (c.length / e) * this.duration);

                            break;

                        case "sync":

                        case "async":

                        case "nsync":

                            (c.startAt = 0), (c.duration = this.duration);

                            break;

                        case "scenario-sync":

                            (u = c.el),

                                (t = this.parseAttr(u)),

                                (c.startAt = n + (h(t["data-delay"], this.delayUnit) || 0)),

                                (c.duration = h(t["data-duration"], this.duration)),

                                (n = void 0 !== t["data-async"] ? c.startAt : c.startAt + c.duration),

                                (this.frameLength = Math.max(this.frameLength, c.startAt + c.duration));

                            break;

                        case "scenario":

                            (u = c.el),

                                (t = this.parseAttr(u)),

                                (c.startAt = h(t["data-start"], this.delayUnit) || 0),

                                (c.duration = h(t["data-duration"], this.duration)),

                                (this.frameLength = Math.max(this.frameLength, c.startAt + c.duration));

                    }

                    (i += c.length), (this.frameLength = this.frameLength || this.duration);

                }

            }),

            (n.prototype.recalc = function () {

                this.mustRecalcScale ||

                    (this.mustRecalcScale = i(

                        function () {

                            this.performLineRecalc();

                        }.bind(this)

                    ));

            }),

            (n.prototype.performLineRecalc = function () {

                for (var t, e, i, n, o = 0; o < this.map.length; o++)

                    (t = this.map[o]).isResizeSensitive &&

                        ((n = (e = t.el).getBoundingClientRect()),

                        (i = e.getBBox()),

                        (n = Math.max(n.width / i.width, n.height / i.height)),

                        (t.length = Math.ceil(e.getTotalLength() * n)),

                        (e.style.strokeDasharray = t.length + " " + (t.length + 2 * this.dashGap)));

                this.trace(), (this.mustRecalcScale = null);

            }),

            (n.prototype.draw = function () {

                var t = this;

                if (((this.currentFrame += this.speed), this.currentFrame <= 0)) this.stop(), this.reset();

                else {

                    if (!(this.currentFrame >= this.frameLength))

                        return (

                            this.trace(),

                            void (this.handle = i(function () {

                                t.draw();

                            }))

                        );

                    this.stop(), (this.currentFrame = this.frameLength), this.trace(), this.selfDestroy && this.destroy();

                }

                this.callback(this), this.instanceCallback && (this.instanceCallback(this), (this.instanceCallback = null));

            }),

            (n.prototype.trace = function () {

                for (var t, e, i = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength, n = 0; n < this.map.length; n++)

                    (t = (i - (e = this.map[n]).startAt) / e.duration),

                        (t = this.pathTimingFunction(Math.max(0, Math.min(1, t)))),

                        e.progress !== t && ((e.progress = t), (e.el.style.strokeDashoffset = Math.floor(e.length * (1 - t))), this.renderPath(n));

            }),

            (n.prototype.renderPath = function (t) {

                var e;

                this.forceRender && this.map && this.map[t] && ((e = (t = this.map[t]).el.cloneNode(!0)), t.el.parentNode.replaceChild(e, t.el), (t.el = e));

            }),

            (n.prototype.init = function () {

                (this.frameLength = 0), (this.currentFrame = 0), (this.map = []), new e(this.el), this.mapping(), this.starter(), this.onReady && this.onReady(this);

            }),

            (n.prototype.starter = function () {

                switch (this.start) {

                    case "manual":

                        return;

                    case "autostart":

                        this.play();

                        break;

                    case "inViewport":

                        var t = this,

                            e = function () {

                                t.isInViewport(t.parentEl, 1) && (t.play(), window.removeEventListener("scroll", e));

                            };

                        window.addEventListener("scroll", e), e();

                }

            }),

            (n.prototype.getStatus = function () {

                return 0 === this.currentFrame ? "start" : this.currentFrame === this.frameLength ? "end" : "progress";

            }),

            (n.prototype.reset = function () {

                return this.setFrameProgress(0);

            }),

            (n.prototype.finish = function () {

                return this.setFrameProgress(1);

            }),

            (n.prototype.setFrameProgress = function (t) {

                return (t = Math.min(1, Math.max(0, t))), (this.currentFrame = Math.round(this.frameLength * t)), this.trace(), this;

            }),

            (n.prototype.play = function (t, e) {

                if (((this.instanceCallback = null), t && "function" == typeof t)) (this.instanceCallback = t), (t = null);

                else if (t && "number" != typeof t) throw new Error("Vivus [play]: invalid speed");

                return e && "function" == typeof e && !this.instanceCallback && (this.instanceCallback = e), (this.speed = t || 1), this.handle || this.draw(), this;

            }),

            (n.prototype.stop = function () {

                return this.handle && (t(this.handle), (this.handle = null)), this;

            }),

            (n.prototype.destroy = function () {

                var t, e;

                for (this.stop(), t = 0; t < this.map.length; t++) ((e = this.map[t]).el.style.strokeDashoffset = null), (e.el.style.strokeDasharray = null), this.renderPath(t);

            }),

            (n.prototype.isInvisible = function (t) {

                var e = t.getAttribute("data-ignore");

                return null !== e ? "false" !== e : !!this.ignoreInvisible && !(e = t.getBoundingClientRect()).width && !e.height;

            }),

            (n.prototype.parseAttr = function (t) {

                var e,

                    i = {};

                if (t && t.attributes) for (var n = 0; n < t.attributes.length; n++) i[(e = t.attributes[n]).name] = e.value;

                return i;

            }),

            (n.prototype.isInViewport = function (t, e) {

                var i = this.scrollY(),

                    n = i + this.getViewportH(),

                    o = (t = t.getBoundingClientRect()).height;

                return (t = i + t.top) + o * (e = e || 0) <= n && i <= t + o;

            }),

            (n.prototype.getViewportH = function () {

                var t = this.docElem.clientHeight,

                    e = window.innerHeight;

                return t < e ? e : t;

            }),

            (n.prototype.scrollY = function () {

                return window.pageYOffset || this.docElem.scrollTop;

            }),

            (o = function () {

                n.prototype.docElem ||

                    ((n.prototype.docElem = window.document.documentElement),

                    (i =

                        window.requestAnimationFrame ||

                        window.webkitRequestAnimationFrame ||

                        window.mozRequestAnimationFrame ||

                        window.oRequestAnimationFrame ||

                        window.msRequestAnimationFrame ||

                        function (t) {

                            return window.setTimeout(t, 1e3 / 60);

                        }),

                    (t =

                        window.cancelAnimationFrame ||

                        window.webkitCancelAnimationFrame ||

                        window.mozCancelAnimationFrame ||

                        window.oCancelAnimationFrame ||

                        window.msCancelAnimationFrame ||

                        function (t) {

                            return window.clearTimeout(t);

                        }));

            }),

            (h = function (t, e) {

                return 0 <= (t = parseInt(t, 10)) ? t : e;

            }),

            "function" == typeof define && define.amd

                ? define([], function () {

                      return n;

                  })

                : "object" == typeof exports

                ? (module.exports = n)

                : (window.Vivus = n);

    })(),

    (function () {

        "use strict";

        function r(t) {

            try {

                return (t.defaultView && t.defaultView.frameElement) || null;

            } catch (t) {

                return null;

            }

        }

        function c(t) {

            (this.time = t.time),

                (this.target = t.target),

                (this.rootBounds = i(t.rootBounds)),

                (this.boundingClientRect = i(t.boundingClientRect)),

                (this.intersectionRect = i(t.intersectionRect || { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 })),

                (this.isIntersecting = !!t.intersectionRect),

                (t = (t = this.boundingClientRect).width * t.height);

            var e = (e = this.intersectionRect).width * e.height;

            this.intersectionRatio = t ? Number((e / t).toFixed(4)) : this.isIntersecting ? 1 : 0;

        }

        function t(t, e) {

            var i, n, o;

            if (((e = e || {}), "function" != typeof t)) throw new Error("callback must be a function");

            if (e.root && 1 != e.root.nodeType && 9 != e.root.nodeType) throw new Error("root must be a Document or Element");

            (this._checkForIntersections =

                ((i = this._checkForIntersections.bind(this)),

                (n = this.THROTTLE_TIMEOUT),

                (o = null),

                function () {

                    o =

                        o ||

                        setTimeout(function () {

                            i(), (o = null);

                        }, n);

                })),

                (this._callback = t),

                (this._observationTargets = []),

                (this._queuedEntries = []),

                (this._rootMarginValues = this._parseRootMargin(e.rootMargin)),

                (this.thresholds = this._initThresholds(e.threshold)),

                (this.root = e.root || null),

                (this.rootMargin = this._rootMarginValues

                    .map(function (t) {

                        return t.value + t.unit;

                    })

                    .join(" ")),

                (this._monitoringDocuments = []),

                (this._monitoringUnsubscribes = []);

        }

        function s(t, e, i, n) {

            "function" == typeof t.addEventListener ? t.addEventListener(e, i, n || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, i);

        }

        function a(t, e, i, n) {

            "function" == typeof t.removeEventListener ? t.removeEventListener(e, i, n || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, i);

        }

        function m(t) {

            var e;

            try {

                e = t.getBoundingClientRect();

            } catch (t) {}

            return e ? (e.width && e.height ? e : { top: e.top, right: e.right, bottom: e.bottom, left: e.left, width: e.right - e.left, height: e.bottom - e.top }) : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };

        }

        function i(t) {

            return !t || "x" in t ? t : { top: t.top, y: t.top, bottom: t.bottom, left: t.left, x: t.left, right: t.right, width: t.width, height: t.height };

        }

        function g(t, e) {

            var i = e.top - t.top;

            return { top: i, left: (t = e.left - t.left), height: e.height, width: e.width, bottom: i + e.height, right: t + e.width };

        }

        function n(t, e) {

            for (var i = e; i; ) {

                if (i == t) return !0;

                i = v(i);

            }

            return !1;

        }

        function v(t) {

            var e = t.parentNode;

            return 9 == t.nodeType && t != y ? r(t) : (e = e && e.assignedSlot ? e.assignedSlot.parentNode : e) && 11 == e.nodeType && e.host ? e.host : e;

        }

        function o(t) {

            return t && 9 === t.nodeType;

        }

        var y, l, b, _;

        "object" == typeof window &&

            ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype

                ? "isIntersecting" in window.IntersectionObserverEntry.prototype ||

                  Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {

                      get: function () {

                          return 0 < this.intersectionRatio;

                      },

                  })

                : ((y = (function () {

                      for (var t = window.document, e = r(t); e; ) e = r((t = e.ownerDocument));

                      return t;

                  })()),

                  (l = []),

                  (_ = b = null),

                  (t.prototype.THROTTLE_TIMEOUT = 100),

                  (t.prototype.POLL_INTERVAL = null),

                  (t.prototype.USE_MUTATION_OBSERVER = !0),

                  (t._setupCrossOriginUpdater = function () {

                      return (b =

                          b ||

                          function (t, e) {

                              (_ = t && e ? g(t, e) : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 }),

                                  l.forEach(function (t) {

                                      t._checkForIntersections();

                                  });

                          });

                  }),

                  (t._resetCrossOriginUpdater = function () {

                      _ = b = null;

                  }),

                  (t.prototype.observe = function (e) {

                      if (

                          !this._observationTargets.some(function (t) {

                              return t.element == e;

                          })

                      ) {

                          if (!e || 1 != e.nodeType) throw new Error("target must be an Element");

                          this._registerInstance(), this._observationTargets.push({ element: e, entry: null }), this._monitorIntersections(e.ownerDocument), this._checkForIntersections();

                      }

                  }),

                  (t.prototype.unobserve = function (e) {

                      (this._observationTargets = this._observationTargets.filter(function (t) {

                          return t.element != e;

                      })),

                          this._unmonitorIntersections(e.ownerDocument),

                          0 == this._observationTargets.length && this._unregisterInstance();

                  }),

                  (t.prototype.disconnect = function () {

                      (this._observationTargets = []), this._unmonitorAllIntersections(), this._unregisterInstance();

                  }),

                  (t.prototype.takeRecords = function () {

                      var t = this._queuedEntries.slice();

                      return (this._queuedEntries = []), t;

                  }),

                  (t.prototype._initThresholds = function (t) {

                      return (

                          (t = t || [0]),

                          (t = Array.isArray(t) ? t : [t]).sort().filter(function (t, e, i) {

                              if ("number" != typeof t || isNaN(t) || t < 0 || 1 < t) throw new Error("threshold must be a number between 0 and 1 inclusively");

                              return t !== i[e - 1];

                          })

                      );

                  }),

                  (t.prototype._parseRootMargin = function (t) {

                      return (

                          ((t = (t || "0px").split(/\s+/).map(function (t) {

                              if ((t = /^(-?\d*\.?\d+)(px|%)$/.exec(t))) return { value: parseFloat(t[1]), unit: t[2] };

                              throw new Error("rootMargin must be specified in pixels or percent");

                          }))[1] = t[1] || t[0]),

                          (t[2] = t[2] || t[0]),

                          (t[3] = t[3] || t[1]),

                          t

                      );

                  }),

                  (t.prototype._monitorIntersections = function (e) {

                      var i,

                          n,

                          o,

                          t = e.defaultView;

                      t &&

                          -1 == this._monitoringDocuments.indexOf(e) &&

                          ((i = this._checkForIntersections),

                          (o = n = null),

                          this.POLL_INTERVAL

                              ? (n = t.setInterval(i, this.POLL_INTERVAL))

                              : (s(t, "resize", i, !0),

                                s(e, "scroll", i, !0),

                                this.USE_MUTATION_OBSERVER && "MutationObserver" in t && (o = new t.MutationObserver(i)).observe(e, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })),

                          this._monitoringDocuments.push(e),

                          this._monitoringUnsubscribes.push(function () {

                              var t = e.defaultView;

                              t && (n && t.clearInterval(n), a(t, "resize", i, !0)), a(e, "scroll", i, !0), o && o.disconnect();

                          }),

                          (t = (this.root && (this.root.ownerDocument || this.root)) || y),

                          e != t) &&

                          (t = r(e)) &&

                          this._monitorIntersections(t.ownerDocument);

                  }),

                  (t.prototype._unmonitorIntersections = function (n) {

                      var o,

                          t,

                          e = this._monitoringDocuments.indexOf(n);

                      -1 != e &&

                          ((o = (this.root && (this.root.ownerDocument || this.root)) || y),

                          this._observationTargets.some(function (t) {

                              var e = t.element.ownerDocument;

                              if (e == n) return !0;

                              for (; e && e != o; ) {

                                  var i = r(e);

                                  if ((e = i && i.ownerDocument) == n) return !0;

                              }

                              return !1;

                          }) || ((t = this._monitoringUnsubscribes[e]), this._monitoringDocuments.splice(e, 1), this._monitoringUnsubscribes.splice(e, 1), t(), n != o && (e = r(n)) && this._unmonitorIntersections(e.ownerDocument)));

                  }),

                  (t.prototype._unmonitorAllIntersections = function () {

                      var t = this._monitoringUnsubscribes.slice(0);

                      this._monitoringDocuments.length = 0;

                      for (var e = (this._monitoringUnsubscribes.length = 0); e < t.length; e++) t[e]();

                  }),

                  (t.prototype._checkForIntersections = function () {

                      var a, l;

                      (this.root || !b || _) &&

                          ((a = this._rootIsInDom()),

                          (l = a ? this._getRootRect() : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 }),

                          this._observationTargets.forEach(function (t) {

                              var e = t.element,

                                  i = m(e),

                                  n = this._rootContainsTarget(e),

                                  o = t.entry,

                                  r = a && n && this._computeTargetAndRootIntersection(e, i, l),

                                  s = null;

                              this._rootContainsTarget(e) ? (b && !this.root) || (s = l) : (s = { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 }),

                                  (t = t.entry = new c({ time: window.performance && performance.now && performance.now(), target: e, boundingClientRect: i, rootBounds: s, intersectionRect: r })),

                                  o ? (a && n ? this._hasCrossedThreshold(o, t) && this._queuedEntries.push(t) : o && o.isIntersecting && this._queuedEntries.push(t)) : this._queuedEntries.push(t);

                          }, this),

                          this._queuedEntries.length) &&

                          this._callback(this.takeRecords(), this);

                  }),

                  (t.prototype._computeTargetAndRootIntersection = function (t, e, i) {

                      if ("none" != window.getComputedStyle(t).display) {

                          for (var n, o, r, s, a = e, l = v(t), c = !1; !c && l; ) {

                              var u,

                                  h,

                                  d,

                                  p = null,

                                  f = 1 == l.nodeType ? window.getComputedStyle(l) : {};

                              if ("none" == f.display) return null;

                              if (

                                  (l == this.root || 9 == l.nodeType

                                      ? ((c = !0),

                                        l == this.root || l == y

                                            ? b && !this.root

                                                ? !_ || (0 == _.width && 0 == _.height)

                                                    ? (a = p = l = null)

                                                    : (p = _)

                                                : (p = i)

                                            : ((u = (d = v(l)) && m(d)), (h = d && this._computeTargetAndRootIntersection(d, u, i)), u && h ? ((l = d), (p = g(u, h))) : (a = l = null)))

                                      : l != (d = l.ownerDocument).body && l != d.documentElement && "visible" != f.overflow && (p = m(l)),

                                  p &&

                                      ((u = p),

                                      (h = a),

                                      (f = Math.max(u.top, h.top)),

                                      (p = Math.min(u.bottom, h.bottom)),

                                      (n = Math.max(u.left, h.left)),

                                      (s = p - f),

                                      (a = 0 <= (r = (o = Math.min(u.right, h.right)) - n) && 0 <= s ? { top: f, bottom: p, left: n, right: o, width: r, height: s } : null)),

                                  !a)

                              )

                                  break;

                              l = l && v(l);

                          }

                          return a;

                      }

                  }),

                  (t.prototype._getRootRect = function () {

                      var t,

                          e =

                              this.root && !o(this.root)

                                  ? m(this.root)

                                  : ((e = (t = o(this.root) ? this.root : y).documentElement),

                                    (t = t.body),

                                    { top: 0, left: 0, right: e.clientWidth || t.clientWidth, width: e.clientWidth || t.clientWidth, bottom: e.clientHeight || t.clientHeight, height: e.clientHeight || t.clientHeight });

                      return this._expandRectByRootMargin(e);

                  }),

                  (t.prototype._expandRectByRootMargin = function (i) {

                      var t = this._rootMarginValues.map(function (t, e) {

                          return "px" == t.unit ? t.value : (t.value * (e % 2 ? i.width : i.height)) / 100;

                      });

                      return ((t = { top: i.top - t[0], right: i.right + t[1], bottom: i.bottom + t[2], left: i.left - t[3] }).width = t.right - t.left), (t.height = t.bottom - t.top), t;

                  }),

                  (t.prototype._hasCrossedThreshold = function (t, e) {

                      var i = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,

                          n = e.isIntersecting ? e.intersectionRatio || 0 : -1;

                      if (i !== n)

                          for (var o = 0; o < this.thresholds.length; o++) {

                              var r = this.thresholds[o];

                              if (r == i || r == n || r < i != r < n) return !0;

                          }

                  }),

                  (t.prototype._rootIsInDom = function () {

                      return !this.root || n(y, this.root);

                  }),

                  (t.prototype._rootContainsTarget = function (t) {

                      var e = (this.root && (this.root.ownerDocument || this.root)) || y;

                      return n(e, t) && (!this.root || e == t.ownerDocument);

                  }),

                  (t.prototype._registerInstance = function () {

                      l.indexOf(this) < 0 && l.push(this);

                  }),

                  (t.prototype._unregisterInstance = function () {

                      var t = l.indexOf(this);

                      -1 != t && l.splice(t, 1);

                  }),

                  (window.IntersectionObserver = t),

                  (window.IntersectionObserverEntry = c)));

    })(),

    (function (d) {

        "use strict";

        d.fn.pin = function (l) {

            function i() {

                n(), t();

            }

            var a = 0,

                c = [],

                u = !1,

                h = d(window),

                n =

                    ((l = l || {}),

                    function () {

                        for (var t = 0, e = c.length; t < e; t++) {

                            var i,

                                n,

                                o,

                                r,

                                s,

                                a = c[t];

                            l.minWidth && h.outerWidth() <= l.minWidth

                                ? (a.parent().is(".pin-wrapper") && a.unwrap(), a.css({ width: "", left: "", top: "", position: "" }), l.activeClass && a.removeClass(l.activeClass), (u = !0))

                                : ((u = !1),

                                  (i = l.containerSelector ? a.closest(l.containerSelector) : d(document.body)),

                                  (n = a.offset()),

                                  (o = i.offset()),

                                  (r = a.parent().offset()),

                                  a.parent().is(".pin-wrapper") || a.wrap("<div class='pin-wrapper'>"),

                                  (s = d.extend({ top: 0, bottom: 0 }, l.padding || {})),

                                  a.data("pin", { pad: s, from: (l.containerSelector ? o : n).top - s.top, to: o.top + i.height() - a.outerHeight() - s.bottom, end: o.top + i.height(), parentTop: r.top }),

                                  a.css({ width: a.outerWidth() }),

                                  a.parent().css("height", a.outerHeight()));

                        }

                    }),

                t = function () {

                    if (!u) {

                        a = h.scrollTop();

                        for (var t = [], e = 0, i = c.length; e < i; e++) {

                            var n,

                                o,

                                r = d(c[e]),

                                s = r.data("pin");

                            s &&

                                (t.push(r),

                                (n = s.from - s.pad.bottom),

                                (o = s.to - s.pad.top),

                                n + r.outerHeight() > s.end

                                    ? r.css("position", "")

                                    : n < a && a < o

                                    ? ("fixed" != r.css("position") && r.css({ left: r.offset().left, top: s.pad.top }).css("position", "fixed"), l.activeClass && r.addClass(l.activeClass))

                                    : o <= a

                                    ? (r.css({ left: "", top: o - s.parentTop + s.pad.top }).css("position", "absolute"), l.activeClass && r.addClass(l.activeClass))

                                    : (r.css({ position: "", top: "", left: "" }), l.activeClass && r.removeClass(l.activeClass)));

                        }

                        c = t;

                    }

                };

            return (

                this.each(function () {

                    var t = d(this),

                        e = d(this).data("pin") || {};

                    (e && e.update) || (c.push(t), d("img", this).one("load", n), (e.update = i), d(this).data("pin", e));

                }),

                h.scroll(t),

                h.resize(function () {

                    n();

                }),

                n(),

                h.on("load", i),

                this

            );

        };

    })(jQuery),

    (function (i) {

        "use strict";

        var n,

            o = { action: function () {}, runOnLoad: !1, duration: 500 },

            r = !1,

            s = {

                init: function () {

                    for (var t = 0; t <= arguments.length; t++) {

                        var e = arguments[t];

                        switch (typeof e) {

                            case "function":

                                o.action = e;

                                break;

                            case "boolean":

                                o.runOnLoad = e;

                                break;

                            case "number":

                                o.duration = e;

                        }

                    }

                    return this.each(function () {

                        o.runOnLoad && o.action(),

                            i(this).resize(function () {

                                s.timedAction.call(this);

                            });

                    });

                },

                timedAction: function (t, e) {

                    function i() {

                        var t = o.duration;

                        if (r) {

                            var e = new Date() - n;

                            if ((t = o.duration - e) <= 0) return clearTimeout(r), (r = !1), void o.action();

                        }

                        r = setTimeout(i, t);

                    }

                    (n = new Date()), "number" == typeof e && (o.duration = e), "function" == typeof t && (o.action = t), r || i();

                },

            };

        i.fn.afterResize = function (t) {

            return s[t] ? s[t].apply(this, Array.prototype.slice.call(arguments, 1)) : s.init.apply(this, arguments);

        };

    })(jQuery),

    jQuery(document).ready(function (s) {

        function a(t) {

            var e,

                i,

                n = l(t);

            t.parents(".word-rotator").hasClass("type")

                ? ((e = t.parent(".word-rotator-words")).addClass("selected").removeClass("waiting"),

                  setTimeout(function () {

                      e.removeClass("selected"), t.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out");

                  }, m),

                  setTimeout(function () {

                      o(n, f);

                  }, g))

                : t.parents(".word-rotator").hasClass("letters")

                ? ((i = t.children("i").length >= n.children("i").length),

                  (function t(e, i, n, o) {

                      var r;

                      e.removeClass("in").addClass("out"),

                          e.is(":last-child")

                              ? n &&

                                setTimeout(function () {

                                    a(l(i));

                                }, u)

                              : setTimeout(function () {

                                    t(e.next(), i, n, o);

                                }, o),

                          e.is(":last-child") && s("html").hasClass("no-csstransitions") && ((r = l(i)), c(i, r));

                  })(t.find("i").eq(0), t, i, p),

                  r(n.find("i").eq(0), n, i, p))

                : t.parents(".word-rotator").hasClass("clip")

                ? t

                      .parents(".word-rotator-words")

                      .stop(!0, !0)

                      .animate({ width: "2px" }, v, function () {

                          c(t, n), o(n);

                      })

                : t.parents(".word-rotator").hasClass("loading-bar")

                ? (t.parents(".word-rotator-words").removeClass("is-loading"),

                  c(t, n),

                  setTimeout(function () {

                      a(n);

                  }, h),

                  setTimeout(function () {

                      t.parents(".word-rotator-words").addClass("is-loading");

                  }, d))

                : (c(t, n),

                  setTimeout(function () {

                      a(n);

                  }, u));

        }

        function o(t, e) {

            t.parents(".word-rotator").hasClass("type")

                ? (r(t.find("i").eq(0), t, !1, e), t.addClass("is-visible").removeClass("is-hidden"))

                : t.parents(".word-rotator").hasClass("clip") &&

                  (document.hasFocus()

                      ? t

                            .parents(".word-rotator-words")

                            .stop(!0, !0)

                            .animate({ width: t.outerWidth() + 10 }, v, function () {

                                setTimeout(function () {

                                    a(t);

                                }, n);

                            })

                      : (t

                            .parents(".word-rotator-words")

                            .stop(!0, !0)

                            .animate({ width: t.outerWidth() + 10 }),

                        setTimeout(function () {

                            a(t);

                        }, n)));

        }

        function r(t, e, i, n) {

            t.addClass("in").removeClass("out"),

                t.is(":last-child")

                    ? (e.parents(".word-rotator").hasClass("type") &&

                          setTimeout(function () {

                              e.parents(".word-rotator-words").addClass("waiting");

                          }, 200),

                      i ||

                          setTimeout(function () {

                              a(e);

                          }, u),

                      e.closest(".word-rotator").hasClass("type") || e.closest(".word-rotator-words").stop(!0, !0).animate({ width: e.outerWidth() }))

                    : setTimeout(function () {

                          r(t.next(), e, i, n);

                      }, n);

        }

        function l(t) {

            return t.is(":last-child") ? t.parent().children().eq(0) : t.next();

        }

        function c(t, e) {

            var i;

            t.removeClass("is-visible").addClass("is-hidden"),

                e.removeClass("is-hidden").addClass("is-visible"),

                e.closest(".word-rotator").hasClass("clip") ||

                    ((i = 0),

                    (t = e.outerWidth() > t.outerWidth() ? 0 : 600),

                    (e.closest(".word-rotator").hasClass("loading-bar") || e.closest(".word-rotator").hasClass("slide")) && ((i = 3), (t = 0)),

                    setTimeout(function () {

                        e.closest(".word-rotator-words")

                            .stop(!0, !0)

                            .animate({ width: e.outerWidth() + i });

                    }, t));

        }

        var u = 2500,

            h = 3800,

            d = h - 3e3,

            p = 50,

            f = 150,

            m = 500,

            g = m + 800,

            v = 600,

            n = 1500,

            y = u;

        theme.fn.intObs(

            ".word-rotator",

            function () {

                s(this).hasClass("letters") &&

                    s(this)

                        .find("b")

                        .each(function () {

                            var t = s(this),

                                e = t.text().split(""),

                                n = t.hasClass("is-visible");

                            for (i in e) 0 < t.parents(".rotate-2").length && (e[i] = "<em>" + e[i] + "</em>"), (e[i] = n ? '<i class="in">' + e[i] + "</i>" : "<i>" + e[i] + "</i>");

                            var o = e.join("");

                            t.html(o).css("opacity", 1);

                        });

                var t,

                    e,

                    n,

                    o = s(this);

                o.hasClass("loading-bar")

                    ? ((y = h),

                      setTimeout(function () {

                          o.find(".word-rotator-words").addClass("is-loading");

                      }, d))

                    : o.hasClass("clip")

                    ? ((t = (e = o.find(".word-rotator-words")).outerWidth() + 10), e.css("width", t))

                    : o.hasClass("type") ||

                      ((e = o.find(".word-rotator-words b")),

                      (n = 0),

                      e.each(function () {

                          var t = s(this).outerWidth();

                          n < t && (n = t);

                      }),

                      o.find(".word-rotator-words").css("width", n)),

                    setTimeout(function () {

                        a(o.find(".is-visible").eq(0));

                    }, y);

            },

            {}

        );

    }),

    (function (e) {

        e.fn.hover3d = function (t) {

            var c = e.extend({ selector: null, perspective: 1e3, sensitivity: 20, invert: !1, shine: !1, hoverInClass: "hover-in", hoverOutClass: "hover-out", hoverClass: "hover-3d" }, t);

            return this.each(function () {

                var t = e(this),

                    a = t.find(c.selector),

                    l = ((currentX = 0), (currentY = 0), c.shine && a.append('<div class="shine"></div>'), e(this).find(".shine"));

                t.css({ perspective: c.perspective + "px", transformStyle: "preserve-3d" }),

                    a.css({ perspective: c.perspective + "px", transformStyle: "preserve-3d" }),

                    l.css({ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, transform: "translateZ(1px)", "z-index": 9 }),

                    t.on("mouseenter", function () {

                        a.addClass(c.hoverInClass + " " + c.hoverClass),

                            (currentX = currentY = 0),

                            setTimeout(function () {

                                a.removeClass(c.hoverInClass);

                            }, 1e3);

                    }),

                    t.on("mousemove", function (t) {

                        var e = a.innerWidth(),

                            i = a.innerHeight(),

                            n = Math.round(t.pageX - a.offset().left),

                            o = Math.round(t.pageY - a.offset().top),

                            r = c.invert ? (e / 2 - n) / c.sensitivity : -(e / 2 - n) / c.sensitivity,

                            s = c.invert ? -(i / 2 - o) / c.sensitivity : (i / 2 - o) / c.sensitivity;

                        (o = (180 * Math.atan2(o - i / 2, n - e / 2)) / Math.PI - 90) < 0 && (o += 360),

                            a.css({ perspective: c.perspective + "px", transformStyle: "preserve-3d", transform: "rotateY(" + r + "deg) rotateX(" + s + "deg)" }),

                            l.css("background", "linear-gradient(" + o + "deg, rgba(255,255,255," + (t.offsetY / i) * 0.5 + ") 0%,var(--light-rgba-0) 80%)");

                    }),

                    t.on("mouseleave", function () {

                        a.addClass(c.hoverOutClass + " " + c.hoverClass),

                            a.css({ perspective: c.perspective + "px", transformStyle: "preserve-3d", transform: "rotateX(0) rotateY(0)" }),

                            setTimeout(function () {

                                a.removeClass(c.hoverOutClass + " " + c.hoverClass), (currentX = currentY = 0);

                            }, 1e3);

                    });

            });

        };

    })(jQuery),

    (function (r, e) {

        "use strict";

        function n(t) {

            e.console && e.console.error(t);

        }

        (r.HoverDir = function (t, e) {

            (this.$el = r(e)), this._init(t);

        }),

            (r.HoverDir.defaults = { speed: 300, easing: "ease", hoverDelay: 0, inverse: !1, hoverElem: ".thumb-info-wrapper-overlay" }),

            (r.HoverDir.prototype = {

                _init: function (t) {

                    (this.options = r.extend(!0, {}, r.HoverDir.defaults, t)), (this.transitionProp = "all " + this.options.speed + "ms " + this.options.easing), (this.support = !0), this._loadEvents();

                },

                _loadEvents: function () {

                    var o = this;

                    this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir", function (t) {

                        var e = r(this),

                            i = e.find(o.options.hoverElem),

                            n = ((e = o._getDir(e, { x: t.pageX, y: t.pageY })), o._getStyle(e));

                        "mouseenter" === t.type

                            ? (i.hide().css(n.from),

                              clearTimeout(o.tmhover),

                              (o.tmhover = setTimeout(function () {

                                  i.show(0, function () {

                                      var t = r(this);

                                      o.support && t.css("transition", o.transitionProp), o._applyAnimation(t, n.to, o.options.speed);

                                  });

                              }, o.options.hoverDelay)))

                            : (o.support && i.css("transition", o.transitionProp), clearTimeout(o.tmhover), o._applyAnimation(i, n.from, o.options.speed));

                    });

                },

                _getDir: function (t, e) {

                    var i = t.width(),

                        n = t.height(),

                        o = (e.x - t.offset().left - i / 2) * (n < i ? n / i : 1);

                    return (e = (e.y - t.offset().top - n / 2) * (i < n ? i / n : 1)), Math.round((Math.atan2(e, o) * (180 / Math.PI) + 180) / 90 + 3) % 4;

                },

                _getStyle: function (t) {

                    var e,

                        i,

                        n = { left: "0px", top: "-100%" },

                        o = { left: "0px", top: "100%" },

                        r = { left: "-100%", top: "0px" },

                        s = { left: "100%", top: "0px" },

                        a = { top: "0px" },

                        l = { left: "0px" };

                    switch (t) {

                        case 0:

                            (e = this.options.inverse ? o : n), (i = a);

                            break;

                        case 1:

                            (e = this.options.inverse ? r : s), (i = l);

                            break;

                        case 2:

                            (e = this.options.inverse ? n : o), (i = a);

                            break;

                        case 3:

                            (e = this.options.inverse ? s : r), (i = l);

                    }

                    return { from: e, to: i };

                },

                _applyAnimation: function (t, e, i) {

                    (r.fn.applyStyle = this.support ? r.fn.css : r.fn.animate), t.stop().applyStyle(e, r.extend(!0, [], { duration: i + "ms" }));

                },

            }),

            (r.fn.hoverdir = function (t) {

                var e,

                    i = r.data(this, "hoverdir");

                return (

                    "string" == typeof t

                        ? ((e = Array.prototype.slice.call(arguments, 1)),

                          this.each(function () {

                              i

                                  ? r.isFunction(i[t]) && "_" !== t.charAt(0)

                                      ? i[t].apply(i, e)

                                      : n("no such method '" + t + "' for hoverdir instance")

                                  : n("cannot call methods on hoverdir prior to initialization; attempted to call method '" + t + "'");

                          }))

                        : this.each(function () {

                              i ? i._init() : (i = r.data(this, "hoverdir", new r.HoverDir(t, this)));

                          }),

                    i

                );

            });

    })(jQuery, window),

    (function (t, e) {

        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(t.jQuery);

    })(this, function (p) {

        "use strict";

        function o(t) {

            for (

                var e,

                    i,

                    n,

                    o,

                    r = {},

                    s = t

                        .replace(/\s*:\s*/g, ":")

                        .replace(/\s*,\s*/g, ",")

                        .split(","),

                    a = 0,

                    l = s.length;

                a < l && -1 === (i = s[a]).search(/^(http|https|ftp):\/\//) && -1 !== i.search(":");

                a++

            )

                (e = i.indexOf(":")), (n = i.substring(0, e)), "string" == typeof (o = "string" == typeof (o = i.substring(e + 1) || void 0) ? "true" === o || ("false" !== o && o) : o) && (o = isNaN(o) ? o : +o), (r[n] = o);

            return null == n && null == o ? t : r;

        }

        function n(t, e, i) {

            if (((this.$element = p(t)), "string" == typeof e && (e = o(e)), i ? "string" == typeof i && (i = o(i)) : (i = {}), "string" == typeof e)) e = e.replace(/\.\w*$/, "");

            else if ("object" == typeof e) for (var n in e) e.hasOwnProperty(n) && (e[n] = e[n].replace(/\.\w*$/, ""));

            (this.settings = p.extend({}, s, i)), (this.path = e);

            try {

                this.init();

            } catch (t) {

                if (t.message !== f) throw t;

            }

        }

        var r = "vide",

            s = { volume: 1, playbackRate: 1, muted: !0, loop: !0, autoplay: !0, position: "50% 50%", posterType: "detect", resizing: !0, bgColor: "transparent", className: "" },

            f = "Not implemented";

        (n.prototype.init = function () {

            function t() {

                n(this.src);

            }

            var e,

                i,

                n,

                o = this,

                r = o.path,

                s = r,

                a = "",

                l = o.$element,

                c = o.settings,

                u = (function () {

                    for (var t, e = ("" + c.position).split(/\s+/), i = "50%", n = "50%", o = 0, r = e.length; o < r; o++)

                        "left" === (t = e[o]) ? (i = "0%") : "right" === t ? (i = "100%") : "top" === t ? (n = "0%") : "bottom" === t ? (n = "100%") : "center" === t ? (0 === o ? (i = "50%") : (n = "50%")) : 0 === o ? (i = t) : (n = t);

                    return { x: i, y: n };

                })(),

                h = c.posterType,

                d = (o.$wrapper = p("<div>")

                    .addClass(c.className)

                    .css({

                        position: "absolute",

                        "z-index": -1,

                        top: 0,

                        left: 0,

                        bottom: 0,

                        right: 0,

                        overflow: "hidden",

                        "-webkit-background-size": "cover",

                        "-moz-background-size": "cover",

                        "-o-background-size": "cover",

                        "background-size": "cover",

                        "background-color": c.bgColor,

                        "background-repeat": "no-repeat",

                        "background-position": u.x + " " + u.y,

                    }));

            "object" == typeof r && (r.poster ? (s = r.poster) : r.mp4 ? (s = r.mp4) : r.webm ? (s = r.webm) : r.ogv && (s = r.ogv)),

                "detect" === h

                    ? ((n = function (t) {

                          d.css("background-image", "url(" + t + ")");

                      }),

                      p('<img src="' + (i = s) + '.gif">').on("load", t),

                      p('<img src="' + i + '.jpg">').on("load", t),

                      p('<img src="' + i + '.jpeg">').on("load", t),

                      p('<img src="' + i + '.png">').on("load", t))

                    : "none" !== h && d.css("background-image", "url(" + s + "." + h + ")"),

                "static" === l.css("position") && l.css("position", "relative"),

                l.prepend(d),

                (e =

                    "object" == typeof r

                        ? (r.mp4 && (a += '<source src="' + r.mp4 + '.mp4" type="video/mp4">'),

                          r.webm && (a += '<source src="' + r.webm + '.webm" type="video/webm">'),

                          r.ogv && (a += '<source src="' + r.ogv + '.ogv" type="video/ogg">'),

                          (o.$video = p("<video>" + a + "</video>")))

                        : (o.$video = p('<video><source src="' + r + '.mp4" type="video/mp4"><source src="' + r + '.webm" type="video/webm"><source src="' + r + '.ogv" type="video/ogg"></video>')));

            try {

                e.prop({ autoplay: c.autoplay, loop: c.loop, volume: c.volume, muted: c.muted, defaultMuted: c.muted, playbackRate: c.playbackRate, defaultPlaybackRate: c.playbackRate }), c.autoplay && e.attr("playsinline", "");

            } catch (e) {

                throw new Error(f);

            }

            e

                .css({

                    margin: "auto",

                    position: "absolute",

                    "z-index": -1,

                    top: u.y,

                    left: u.x,

                    "-webkit-transform": "translate(-" + u.x + ", -" + u.y + ")",

                    "-ms-transform": "translate(-" + u.x + ", -" + u.y + ")",

                    "-moz-transform": "translate(-" + u.x + ", -" + u.y + ")",

                    transform: "translate(-" + u.x + ", -" + u.y + ")",

                    opacity: 0,

                })

                .one("canplaythrough.vide", function () {

                    o.resize();

                })

                .one("playing.vide", function () {

                    e.css({ visibility: "visible", opacity: 1 }), d.css("background-image", "none");

                }),

                l.on("resize.vide", function () {

                    c.resizing && o.resize();

                }),

                d.append(e);

        }),

            (n.prototype.getVideoObject = function () {

                return this.$video[0];

            }),

            (n.prototype.resize = function () {

                var t, e, i, n, o;

                this.$video &&

                    ((t = this.$wrapper), (o = (i = (e = this.$video)[0]).videoHeight), (i = i.videoWidth), (n = t.height()) / o < (o = t.width()) / i ? e.css({ width: o + 2, height: "auto" }) : e.css({ width: "auto", height: n + 2 }));

            }),

            (n.prototype.destroy = function () {

                delete p.vide.lookup[this.index], this.$video && this.$video.off(r), this.$element.off(r).removeData(r), this.$wrapper.remove();

            }),

            (p.vide = { lookup: [] }),

            (p.fn.vide = function (t, e) {

                var i;

                return (

                    this.each(function () {

                        (i = p.data(this, r)) && i.destroy(), ((i = new n(this, t, e)).index = p.vide.lookup.push(i) - 1), p.data(this, r, i);

                    }),

                    this

                );

            }),

            p(document).ready(function () {

                var t = p(window);

                t.on("resize.vide", function () {

                    for (var t, e = p.vide.lookup.length, i = 0; i < e; i++) (t = p.vide.lookup[i]) && t.settings.resizing && t.resize();

                }),

                    t.on("pagehide.vide", function () {

                        return !1;

                    }),

                    p(document)

                        .find("[data-vide-bg]")

                        .each(function (t, e) {

                            var i = (e = p(e)).data("vide-options"),

                                n = e.data("vide-bg");

                            e.vide(n, i);

                        });

            });

    }),

    (function (t) {

        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t("undefined" != typeof module && module.exports ? require("jquery") : jQuery);

    })(function (at) {

        "use strict";

        function n(z, l) {

            function t(t) {

                if (!(!0 === k.data(_t + "_intouch") || 0 < at(t.target).closest(l.excludedElements, k).length)) {

                    var e,

                        i,

                        n,

                        o = t.originalEvent || t;

                    if (!o.pointerType || "mouse" != o.pointerType || 0 != l.fallbackToMouseEvents)

                        return (

                            (n = (i = o.touches) ? i[0] : o),

                            (A = "start"),

                            i ? (I = i.length) : !1 !== l.preventDefaultEvents && t.preventDefault(),

                            (E = b = y = null),

                            (C = 1),

                            (T = x = w = _ = v = 0),

                            ((t = {}).left = a(lt)),

                            (t[ct] = a(ct)),

                            (t.up = a("up")),

                            (t.down = a(ut)),

                            (S = t),

                            Z(),

                            d(0, n),

                            !i || I === l.fingers || "all" === l.fingers || u() ? ((rt = p()), 2 == I && (d(1, i[1]), (w = x = et(O[0].start, O[1].start))), (l.swipeStatus || l.pinchStatus) && (e = c(o, A))) : (e = !1),

                            !1 === e

                                ? (c(o, (A = gt)), e)

                                : (l.hold &&

                                      (M = setTimeout(

                                          at.proxy(function () {

                                              k.trigger("hold", [o.target]), l.hold && (e = l.hold.call(k, o, o.target));

                                          }, this),

                                          l.longTapThreshold

                                      )),

                                  s(!0),

                                  null)

                        );

                }

            }

            function e(t) {

                var e = t.originalEvent || t;

                if (A !== mt && A !== gt && !h()) {

                    var i,

                        n = K((s = e.touches) ? s[0] : e);

                    if (

                        ((j = p()),

                        s && (I = s.length),

                        l.hold && clearTimeout(M),

                        (A = ft),

                        2 == I &&

                            (0 == w ? (d(1, s[1]), (w = x = et(O[0].start, O[1].start))) : (K(s[1]), (x = et(O[0].end, O[1].end)), O[0].end, O[1].end, (E = C < 1 ? "out" : "in")), (C = ((x / w) * 1).toFixed(2)), (T = Math.abs(w - x))),

                        I === l.fingers || "all" === l.fingers || !s || u())

                    ) {

                        y = it(n.start, n.end);

                        var o,

                            r = t,

                            s = (b = it(n.last, n.end));

                        if (!1 !== l.preventDefaultEvents)

                            if (l.allowPageScroll === ht) r.preventDefault();

                            else {

                                var a = "auto" === l.allowPageScroll;

                                switch (s) {

                                    case lt:

                                        ((l.swipeLeft && a) || (!a && l.allowPageScroll != dt)) && r.preventDefault();

                                        break;

                                    case ct:

                                        ((l.swipeRight && a) || (!a && l.allowPageScroll != dt)) && r.preventDefault();

                                        break;

                                    case "up":

                                        ((l.swipeUp && a) || (!a && l.allowPageScroll != pt)) && r.preventDefault();

                                        break;

                                    case ut:

                                        ((l.swipeDown && a) || (!a && l.allowPageScroll != pt)) && r.preventDefault();

                                }

                            }

                        (t = n.start),

                            (s = n.end),

                            (v = Math.round(Math.sqrt(Math.pow(s.x - t.x, 2) + Math.pow(s.y - t.y, 2)))),

                            (_ = tt()),

                            (s = v),

                            (t = y) != ht && ((s = Math.max(s, J(t))), (S[t].distance = s)),

                            (i = c(e, A)),

                            (l.triggerOnTouchEnd && !l.triggerOnTouchLeave) ||

                                ((t = !0),

                                l.triggerOnTouchLeave &&

                                    ((o = { left: (o = (s = at((s = this))).offset()).left, right: o.left + s.outerWidth(), top: o.top, bottom: o.top + s.outerHeight() }),

                                    (t = (s = n.end).x > (n = o).left && s.x < n.right && s.y > n.top && s.y < n.bottom)),

                                !l.triggerOnTouchEnd && t ? (A = q(ft)) : l.triggerOnTouchLeave && !t && (A = q(mt)),

                                A != gt && A != mt) ||

                                c(e, A);

                    } else c(e, (A = gt));

                    !1 === i && c(e, (A = gt));

                }

            }

            function i(t) {

                var e,

                    i = t.originalEvent || t,

                    n = i.touches;

                if (n) {

                    if (n.length && !h()) return (e = i), (L = p()), (st = e.touches.length + 1), !0;

                    if (n.length && h()) return !0;

                }

                return (

                    h() && (I = st),

                    (j = p()),

                    (_ = tt()),

                    F() || !H()

                        ? c(i, (A = gt))

                        : l.triggerOnTouchEnd || (!1 === l.triggerOnTouchEnd && A === ft)

                        ? (!1 !== l.preventDefaultEvents && !1 !== t.cancelable && t.preventDefault(), c(i, (A = mt)))

                        : !l.triggerOnTouchEnd && Y()

                        ? r(i, (A = mt), "tap")

                        : A === ft && c(i, (A = gt)),

                    s(!1),

                    null

                );

            }

            function o() {

                (x = w = rt = j = I = 0), Z(), s(!(C = 1));

            }

            function R(t) {

                (t = t.originalEvent || t), l.triggerOnTouchLeave && c(t, (A = q(mt)));

            }

            function N() {

                k.off(f, t), k.off(g, o), k.off(nt, e), k.off(ot, i), m && k.off(m, R), s(!1);

            }

            function q(t) {

                var e = t,

                    i = W(),

                    n = H(),

                    o = F();

                return !i || o ? (e = gt) : !n || t != ft || (l.triggerOnTouchEnd && !l.triggerOnTouchLeave) ? !n && t == mt && l.triggerOnTouchLeave && (e = gt) : (e = mt), e;

            }

            function c(t, e) {

                var i,

                    n = t.touches;

                return (

                    ((B() && Q()) || Q()) && (i = r(t, e, "swipe")),

                    (($() && u()) || u()) && !1 !== i && (i = r(t, e, "pinch")),

                    G() && X() && !1 !== i

                        ? (i = r(t, e, "doubletap"))

                        : _ > l.longTapThreshold && v < 10 && l.longTap && !1 !== i

                        ? (i = r(t, e, "longtap"))

                        : (1 !== I && vt) || !(isNaN(v) || v < l.threshold) || !Y() || !1 === i || (i = r(t, e, "tap")),

                    e === gt && o(),

                    e !== mt || (n && n.length) || o(),

                    i

                );

            }

            function r(t, e, i) {

                var n;

                if ("swipe" == i) {

                    if ((k.trigger("swipeStatus", [e, y || null, v || 0, _ || 0, I, O, b]), l.swipeStatus && !1 === (n = l.swipeStatus.call(k, t, e, y || null, v || 0, _ || 0, I, O, b)))) return !1;

                    if (e == mt && B()) {

                        if ((clearTimeout(P), clearTimeout(M), k.trigger("swipe", [y, v, _, I, O, b]), l.swipe && !1 === (n = l.swipe.call(k, t, y, v, _, I, O, b)))) return !1;

                        switch (y) {

                            case lt:

                                k.trigger("swipeLeft", [y, v, _, I, O, b]), l.swipeLeft && (n = l.swipeLeft.call(k, t, y, v, _, I, O, b));

                                break;

                            case ct:

                                k.trigger("swipeRight", [y, v, _, I, O, b]), l.swipeRight && (n = l.swipeRight.call(k, t, y, v, _, I, O, b));

                                break;

                            case "up":

                                k.trigger("swipeUp", [y, v, _, I, O, b]), l.swipeUp && (n = l.swipeUp.call(k, t, y, v, _, I, O, b));

                                break;

                            case ut:

                                k.trigger("swipeDown", [y, v, _, I, O, b]), l.swipeDown && (n = l.swipeDown.call(k, t, y, v, _, I, O, b));

                        }

                    }

                }

                if ("pinch" == i) {

                    if ((k.trigger("pinchStatus", [e, E || null, T || 0, _ || 0, I, C, O]), l.pinchStatus && !1 === (n = l.pinchStatus.call(k, t, e, E || null, T || 0, _ || 0, I, C, O)))) return !1;

                    if (e == mt && $())

                        switch (E) {

                            case "in":

                                k.trigger("pinchIn", [E || null, T || 0, _ || 0, I, C, O]), l.pinchIn && (n = l.pinchIn.call(k, t, E || null, T || 0, _ || 0, I, C, O));

                                break;

                            case "out":

                                k.trigger("pinchOut", [E || null, T || 0, _ || 0, I, C, O]), l.pinchOut && (n = l.pinchOut.call(k, t, E || null, T || 0, _ || 0, I, C, O));

                        }

                }

                return (

                    "tap" == i

                        ? (e !== gt && e !== mt) ||

                          (clearTimeout(P),

                          clearTimeout(M),

                          X() && !G()

                              ? ((D = p()),

                                (P = setTimeout(

                                    at.proxy(function () {

                                        (D = null), k.trigger("tap", [t.target]), l.tap && (n = l.tap.call(k, t, t.target));

                                    }, this),

                                    l.doubleTapThreshold

                                )))

                              : ((D = null), k.trigger("tap", [t.target]), l.tap && (n = l.tap.call(k, t, t.target))))

                        : "doubletap" == i

                        ? (e !== gt && e !== mt) || (clearTimeout(P), clearTimeout(M), (D = null), k.trigger("doubletap", [t.target]), l.doubleTap && (n = l.doubleTap.call(k, t, t.target)))

                        : "longtap" != i || (e !== gt && e !== mt) || (clearTimeout(P), (D = null), k.trigger("longtap", [t.target]), l.longTap && (n = l.longTap.call(k, t, t.target))),

                    n

                );

            }

            function H() {

                return null === l.threshold || v >= l.threshold;

            }

            function F() {

                return null !== l.cancelThreshold && null !== y && J(y) - v >= l.cancelThreshold;

            }

            function W() {

                return !(l.maxTimeThreshold && _ >= l.maxTimeThreshold);

            }

            function $() {

                var t = V(),

                    e = U(),

                    i = null === l.pinchThreshold || T >= l.pinchThreshold;

                return t && e && i;

            }

            function u() {

                return l.pinchStatus || l.pinchIn || l.pinchOut;

            }

            function B() {

                var t = W(),

                    e = H(),

                    i = V(),

                    n = U();

                return !F() && n && i && e && t;

            }

            function Q() {

                return l.swipe || l.swipeStatus || l.swipeLeft || l.swipeRight || l.swipeUp || l.swipeDown;

            }

            function V() {

                return I === l.fingers || "all" === l.fingers || !vt;

            }

            function U() {

                return 0 !== O[0].end.x;

            }

            function Y() {

                return l.tap;

            }

            function X() {

                return !!l.doubleTap;

            }

            function G() {

                var t;

                return null != D && ((t = p()), X()) && t - D <= l.doubleTapThreshold;

            }

            function Z() {

                st = L = 0;

            }

            function h() {

                return L && p() - L <= l.fingerReleaseThreshold;

            }

            function s(t) {

                k && (!0 === t ? (k.on(nt, e), k.on(ot, i), m && k.on(m, R)) : (k.off(nt, e, !1), k.off(ot, i, !1), m && k.off(m, R, !1)), k.data(_t + "_intouch", !0 === t));

            }

            function d(t, e) {

                var i = { start: { x: 0, y: 0 }, last: { x: 0, y: 0 }, end: { x: 0, y: 0 } };

                return (i.start.x = i.last.x = i.end.x = e.pageX || e.clientX), (i.start.y = i.last.y = i.end.y = e.pageY || e.clientY), (O[t] = i);

            }

            function K(t) {

                var e = void 0 !== t.identifier ? t.identifier : 0,

                    i = O[e] || null;

                return ((i = null === i ? d(e, t) : i).last.x = i.end.x), (i.last.y = i.end.y), (i.end.x = t.pageX || t.clientX), (i.end.y = t.pageY || t.clientY), i;

            }

            function J(t) {

                return S[t] ? S[t].distance : void 0;

            }

            function a(t) {

                return { direction: t, distance: 0 };

            }

            function tt() {

                return j - rt;

            }

            function et(t, e) {

                var i = Math.abs(t.x - e.x);

                return (t = Math.abs(t.y - e.y)), Math.round(Math.sqrt(i * i + t * t));

            }

            function it(t, e) {

                var i,

                    n = e;

                return t.x == n.x && t.y == n.y

                    ? ht

                    : ((i = e),

                      (e = t.x - i.x),

                      (i = i.y - t.y),

                      (n = Math.atan2(i, e)),

                      ((i = (i = Math.round((180 * n) / Math.PI)) < 0 ? 360 - Math.abs(i) : i) <= 45 && 0 <= i) || (i <= 360 && 315 <= i) ? lt : 135 <= i && i <= 225 ? ct : 45 < i && i < 135 ? ut : "up");

            }

            function p() {

                return new Date().getTime();

            }

            l = at.extend({}, l);

            var n = vt || bt || !l.fallbackToMouseEvents,

                f = n ? (bt ? (yt ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",

                nt = n ? (bt ? (yt ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",

                ot = n ? (bt ? (yt ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",

                m = !n || bt ? "mouseleave" : null,

                g = bt ? (yt ? "MSPointerCancel" : "pointercancel") : "touchcancel",

                v = 0,

                y = null,

                b = null,

                _ = 0,

                w = 0,

                x = 0,

                C = 1,

                T = 0,

                E = 0,

                S = null,

                k = at(z),

                A = "start",

                I = 0,

                O = {},

                rt = 0,

                j = 0,

                L = 0,

                st = 0,

                D = 0,

                P = null,

                M = null;

            try {

                k.on(f, t), k.on(g, o);

            } catch (t) {

                at.error("events not supported " + f + "," + g + " on jQuery.swipe");

            }

            (this.enable = function () {

                return this.disable(), k.on(f, t), k.on(g, o), k;

            }),

                (this.disable = function () {

                    return N(), k;

                }),

                (this.destroy = function () {

                    N(), k.data(_t, null), (k = null);

                }),

                (this.option = function (t, e) {

                    if ("object" == typeof t) l = at.extend(l, t);

                    else if (void 0 !== l[t]) {

                        if (void 0 === e) return l[t];

                        l[t] = e;

                    } else {

                        if (!t) return l;

                        at.error("Option " + t + " does not exist on jQuery.swipe.options");

                    }

                    return null;

                });

        }

        var lt = "left",

            ct = "right",

            ut = "down",

            ht = "none",

            dt = "horizontal",

            pt = "vertical",

            ft = "move",

            mt = "end",

            gt = "cancel",

            vt = "ontouchstart" in window,

            yt = window.navigator.msPointerEnabled && !window.PointerEvent && !vt,

            bt = (window.PointerEvent || window.navigator.msPointerEnabled) && !vt,

            _t = "TouchSwipe";

        (at.fn.swipe = function (t) {

            var e = at(this),

                i = e.data(_t);

            if (i && "string" == typeof t) {

                if (i[t]) return i[t].apply(i, Array.prototype.slice.call(arguments, 1));

                at.error("Method " + t + " does not exist on jQuery.swipe");

            } else if (i && "object" == typeof t) i.option.apply(i, arguments);

            else if (!(i || ("object" != typeof t && t)))

                return function (i) {

                    return (

                        !i || void 0 !== i.allowPageScroll || (void 0 === i.swipe && void 0 === i.swipeStatus) || (i.allowPageScroll = ht),

                        void 0 !== i.click && void 0 === i.tap && (i.tap = i.click),

                        (i = i || {}),

                        (i = at.extend({}, at.fn.swipe.defaults, i)),

                        this.each(function () {

                            var t,

                                e = at(this);

                            e.data(_t) || ((t = new n(this, i)), e.data(_t, t));

                        })

                    );

                }.apply(this, arguments);

            return e;

        }),

            (at.fn.swipe.version = "1.6.18"),

            (at.fn.swipe.defaults = {

                fingers: 1,

                threshold: 75,

                cancelThreshold: null,

                pinchThreshold: 20,

                maxTimeThreshold: null,

                fingerReleaseThreshold: 250,

                longTapThreshold: 500,

                doubleTapThreshold: 200,

                swipe: null,

                swipeLeft: null,

                swipeRight: null,

                swipeUp: null,

                swipeDown: null,

                swipeStatus: null,

                pinchIn: null,

                pinchOut: null,

                pinchStatus: null,

                click: null,

                tap: null,

                doubleTap: null,

                longTap: null,

                hold: null,

                triggerOnTouchEnd: !0,

                triggerOnTouchLeave: !1,

                allowPageScroll: "auto",

                fallbackToMouseEvents: !0,

                excludedElements: ".noSwipe",

                preventDefaultEvents: !0,

            }),

            (at.fn.swipe.phases = { PHASE_START: "start", PHASE_MOVE: ft, PHASE_END: mt, PHASE_CANCEL: gt }),

            (at.fn.swipe.directions = { LEFT: lt, RIGHT: ct, UP: "up", DOWN: ut, IN: "in", OUT: "out" }),

            (at.fn.swipe.pageScroll = { NONE: ht, HORIZONTAL: dt, VERTICAL: pt, AUTO: "auto" }),

            (at.fn.swipe.fingers = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5, ALL: "all" });

    }),

    (function (t) {

        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery);

    })(function (r) {

        function s(t, e) {

            (this.$element = r(t)), (this.options = r.extend({}, s.DEFAULTS, this.dataOptions(), e)), this.init();

        }

        (s.DEFAULTS = {

            from: 0,

            to: 0,

            speed: 1e3,

            refreshInterval: 100,

            decimals: 0,

            formatter: function (t, e) {

                return t.toFixed(e.decimals);

            },

            onUpdate: null,

            onComplete: null,

        }),

            (s.prototype.init = function () {

                (this.value = this.options.from), (this.loops = Math.ceil(this.options.speed / this.options.refreshInterval)), (this.loopCount = 0), (this.increment = (this.options.to - this.options.from) / this.loops);

            }),

            (s.prototype.dataOptions = function () {

                var t,

                    e = { from: this.$element.data("from"), to: this.$element.data("to"), speed: this.$element.data("speed"), refreshInterval: this.$element.data("refresh-interval"), decimals: this.$element.data("decimals") },

                    i = Object.keys(e);

                for (t in i) {

                    var n = i[t];

                    void 0 === e[n] && delete e[n];

                }

                return e;

            }),

            (s.prototype.update = function () {

                (this.value += this.increment),

                    this.loopCount++,

                    this.render(),

                    "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value),

                    this.loopCount >= this.loops && (clearInterval(this.interval), (this.value = this.options.to), "function" == typeof this.options.onComplete) && this.options.onComplete.call(this.$element, this.value);

            }),

            (s.prototype.render = function () {

                var t = this.options.formatter.call(this.$element, this.value, this.options);

                this.$element.text(t);

            }),

            (s.prototype.restart = function () {

                this.stop(), this.init(), this.start();

            }),

            (s.prototype.start = function () {

                this.stop(), this.render(), (this.interval = setInterval(this.update.bind(this), this.options.refreshInterval));

            }),

            (s.prototype.stop = function () {

                this.interval && clearInterval(this.interval);

            }),

            (s.prototype.toggle = function () {

                this.interval ? this.stop() : this.start();

            }),

            (r.fn.countTo = function (o) {

                return this.each(function () {

                    var t = r(this),

                        e = t.data("countTo"),

                        i = "object" == typeof o ? o : {},

                        n = "string" == typeof o ? o : "start";

                    (e && "object" != typeof o) || (e && e.stop(), t.data("countTo", (e = new s(this, i)))), e[n].call(e);

                });

            });

    }),

    (function (p) {

        p.fn.visible = function (t, e, i, n) {

            var o, r, s, a, l, c, u, h, d;

            if (!(this.length < 1))

                return (

                    (u = 1 < this.length ? this.eq(0) : this),

                    (n = p((c = null != n) ? n : window)),

                    (h = c ? n.position() : 0),

                    (r = u.get(0)),

                    (l = n.outerWidth()),

                    (d = n.outerHeight()),

                    (i = i || "both"),

                    (e = !0 !== e || r.offsetWidth * r.offsetHeight),

                    "function" == typeof r.getBoundingClientRect

                        ? ((r = r.getBoundingClientRect()),

                          (s = c ? 0 <= r.top - h.top && r.top < d + h.top : 0 <= r.top && r.top < d),

                          (a = c ? 0 < r.bottom - h.top && r.bottom <= d + h.top : 0 < r.bottom && r.bottom <= d),

                          (o = c ? 0 <= r.left - h.left && r.left < l + h.left : 0 <= r.left && r.left < l),

                          (r = c ? 0 < r.right - h.left && r.right < l + h.left : 0 < r.right && r.right <= l),

                          (s = t ? s || a : s && a),

                          (a = t ? o || r : o && r),

                          "both" === i ? e && s && a : "vertical" === i ? e && s : "horizontal" === i ? e && a : void 0)

                        : ((r = (o = c ? 0 : h) + d),

                          (a = (s = n.scrollLeft()) + l),

                          (d = (h = (c = u.position()).top) + u.height()),

                          (l = (n = c.left) + u.width()),

                          (c = !0 === t ? d : h),

                          (u = !0 === t ? h : d),

                          (h = !0 === t ? l : n),

                          (d = !0 === t ? n : l),

                          "both" === i ? !!e && u <= r && o <= c && d <= a && s <= h : "vertical" === i ? !!e && u <= r && o <= c : "horizontal" === i ? !!e && d <= a && s <= h : void 0)

                );

        };

    })(jQuery),

    (function (t) {

        "use strict";

        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? (module.exports = t(require("jquery"))) : t(jQuery);

    })(function (s) {

        function a(t) {

            return parseFloat(t) || 0;

        }

        function l(t) {

            t = s(t);

            var n = null,

                o = [];

            return (

                t.each(function () {

                    var t = s(this),

                        e = t.offset().top - a(t.css("margin-top")),

                        i = 0 < o.length ? o[o.length - 1] : null;

                    null !== i && Math.floor(Math.abs(n - e)) <= 1 ? (o[o.length - 1] = i.add(t)) : o.push(t), (n = e);

                }),

                o

            );

        }

        function c(t) {

            var e = { byRow: !0, property: "height", target: null, remove: !1 };

            return "object" == typeof t ? s.extend(e, t) : ("boolean" == typeof t ? (e.byRow = t) : "remove" === t && (e.remove = !0), e);

        }

        function n(t) {

            u._beforeUpdate && u._beforeUpdate(t, u._groups),

                s.each(u._groups, function () {

                    u._apply(this.elements, this.options);

                }),

                u._afterUpdate && u._afterUpdate(t, u._groups);

        }

        var o = -1,

            r = -1,

            u = (s.fn.matchHeight = function (t) {

                var i;

                return (

                    (t = c(t)).remove

                        ? ((i = this).css(t.property, ""),

                          s.each(u._groups, function (t, e) {

                              e.elements = e.elements.not(i);

                          }))

                        : (this.length <= 1 && !t.target) || (u._groups.push({ elements: this, options: t }), u._apply(this, t)),

                    this

                );

            }),

            t =

                ((u.version = "0.7.2"),

                (u._groups = []),

                (u._throttle = 80),

                (u._maintainScroll = !1),

                (u._beforeUpdate = null),

                (u._afterUpdate = null),

                (u._rows = l),

                (u._parse = a),

                (u._parseOptions = c),

                (u._apply = function (t, e) {

                    var o = c(e),

                        i = ((t = [(e = s(t))]), s(window).scrollTop()),

                        n = s("html").outerHeight(!0),

                        r = e.parents().filter(":hidden");

                    return (

                        r.each(function () {

                            var t = s(this);

                            t.data("style-cache", t.attr("style"));

                        }),

                        r.css("display", "block"),

                        o.byRow &&

                            !o.target &&

                            (e.each(function () {

                                var t = s(this),

                                    e = t.css("display");

                                "inline-block" !== e && "flex" !== e && "inline-flex" !== e && (e = "block"),

                                    t.data("style-cache", t.attr("style")),

                                    t.css({ display: e, "padding-top": "0", "padding-bottom": "0", "margin-top": "0", "margin-bottom": "0", "border-top-width": "0", "border-bottom-width": "0", height: "100px", overflow: "hidden" });

                            }),

                            (t = l(e)),

                            e.each(function () {

                                var t = s(this);

                                t.attr("style", t.data("style-cache") || "");

                            })),

                        s.each(t, function (t, e) {

                            e = s(e);

                            var n = 0;

                            if (o.target) n = o.target.outerHeight(!1);

                            else {

                                if (o.byRow && e.length <= 1) return void e.css(o.property, "");

                                e.each(function () {

                                    var t = s(this),

                                        e = t.attr("style"),

                                        i = t.css("display");

                                    ((i = { display: (i = "inline-block" !== i && "flex" !== i && "inline-flex" !== i ? "block" : i) })[o.property] = ""),

                                        t.css(i),

                                        t.outerHeight(!1) > n && (n = t.outerHeight(!1)),

                                        e ? t.attr("style", e) : t.css("display", "");

                                });

                            }

                            e.each(function () {

                                var t = s(this),

                                    e = 0;

                                (o.target && t.is(o.target)) ||

                                    ("border-box" !== t.css("box-sizing") && (e = (e += a(t.css("border-top-width")) + a(t.css("border-bottom-width"))) + (a(t.css("padding-top")) + a(t.css("padding-bottom")))),

                                    t.css(o.property, n - e + "px"));

                            });

                        }),

                        r.each(function () {

                            var t = s(this);

                            t.attr("style", t.data("style-cache") || null);

                        }),

                        u._maintainScroll && s(window).scrollTop((i / n) * s("html").outerHeight(!0)),

                        this

                    );

                }),

                (u._applyDataApi = function () {

                    var i = {};

                    s("[data-match-height], [data-mh]").each(function () {

                        var t = s(this),

                            e = t.attr("data-mh") || t.attr("data-match-height");

                        i[e] = e in i ? i[e].add(t) : t;

                    }),

                        s.each(i, function () {

                            this.matchHeight(!0);

                        });

                }),

                (u._update = function (t, e) {

                    if (e && "resize" === e.type) {

                        var i = s(window).width();

                        if (i === o) return;

                        o = i;

                    }

                    t

                        ? -1 === r &&

                          (r = setTimeout(function () {

                              n(e), (r = -1);

                          }, u._throttle))

                        : n(e);

                }),

                s(u._applyDataApi),

                s.fn.on ? "on" : "bind");

        s(window)[t]("load", function (t) {

            u._update(!1, t);

        }),

            s(window)[t]("resize orientationchange", function (t) {

                u._update(!0, t);

            });

    }),

    (function (t) {

        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? (module.exports = t(require("jquery"))) : t(jQuery);

    })(function (d) {

        var t,

            p = "waitForImages",

            f = (t = new Image()).srcset && t.sizes;

        (d.waitForImages = { hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"], hasImageAttributes: ["srcset"] }),

            (d.expr.pseudos["has-src"] = function (t) {

                return d(t).is('img[src][src!=""]');

            }),

            (d.expr.pseudos.uncached = function (t) {

                return !!d(t).is(":has-src") && !t.complete;

            }),

            (d.fn.waitForImages = function () {

                var o,

                    r,

                    e,

                    s = 0,

                    a = 0,

                    l = d.Deferred(),

                    c = this,

                    u = [],

                    i = d.waitForImages.hasImageProperties || [],

                    n = d.waitForImages.hasImageAttributes || [],

                    h = /url\(\s*(['"]?)(.*?)\1\s*\)/g;

                if (

                    (d.isPlainObject(arguments[0])

                        ? ((e = arguments[0].waitForAll), (r = arguments[0].each), (o = arguments[0].finished))

                        : (e = 1 === arguments.length && "boolean" === d.type(arguments[0]) ? arguments[0] : ((o = arguments[0]), (r = arguments[1]), arguments[2])),

                    (o = o || d.noop),

                    (r = r || d.noop),

                    (e = !!e),

                    d.isFunction(o) && d.isFunction(r))

                )

                    return (

                        this.each(function () {

                            var t = d(this);

                            e

                                ? t

                                      .find("*")

                                      .addBack()

                                      .each(function () {

                                          var o = d(this);

                                          o.is("img:has-src") && !o.is("[srcset]") && u.push({ src: o.attr("src"), element: o[0] }),

                                              d.each(i, function (t, e) {

                                                  var i,

                                                      n = o.css(e);

                                                  if (!n) return !0;

                                                  for (; (i = h.exec(n)); ) u.push({ src: i[2], element: o[0] });

                                              }),

                                              d.each(n, function (t, e) {

                                                  if (!o.attr(e)) return !0;

                                                  u.push({ src: o.attr("src"), srcset: o.attr("srcset"), element: o[0] });

                                              });

                                      })

                                : t.find("img:has-src").each(function () {

                                      u.push({ src: this.src, element: this });

                                  });

                        }),

                        (a = 0) === (s = u.length) && (o.call(c), l.resolveWith(c)),

                        d.each(u, function (t, i) {

                            var e = new Image(),

                                n = "load." + p + " error." + p;

                            d(e).one(n, function t(e) {

                                if (((e = [a, s, "load" == e.type]), a++, r.apply(i.element, e), l.notifyWith(i.element, e), d(this).off(n, t), a == s)) return o.call(c[0]), l.resolveWith(c[0]), !1;

                            }),

                                f && i.srcset && ((e.srcset = i.srcset), (e.sizes = i.sizes)),

                                (e.src = i.src);

                        }),

                        l.promise()

                    );

                throw new TypeError("An invalid callback was supplied.");

            });

    }),

    (function (l) {

        fontSpy = function (t, e) {

            var i = l("html"),

                n = l("body");

            if ("string" != typeof t || "" === t) throw "A valid fontName is required. fontName must be a string and must not be an empty string.";

            t = { font: t, fontClass: t.toLowerCase().replace(/\s/g, ""), success: function () {}, failure: function () {}, testFont: "Courier New", testString: "QW@HhsXJ", glyphs: "", delay: 50, timeOut: 1e3, callback: l.noop };

            var o = l.extend(t, e),

                r = l("<span>" + o.testString + o.glyphs + "</span>")

                    .css("position", "absolute")

                    .css("top", "-9999px")

                    .css("left", "-9999px")

                    .css("visibility", "hidden")

                    .css("fontFamily", o.testFont)

                    .css("fontSize", "250px"),

                s = (n.append(r), r.outerWidth()),

                a =

                    (r.css("fontFamily", o.font + "," + o.testFont),

                    function () {

                        var t = r.outerWidth();

                        s !== t

                            ? (o.callback(), i.addClass(o.fontClass), o && o.success && o.success(), r.remove())

                            : o.timeOut < 0

                            ? (i.addClass("no-" + o.fontClass), o && o.failure && o.failure(), o.callback(new Error("FontSpy timeout")), r.remove())

                            : (setTimeout(a, o.delay), (o.timeOut = o.timeOut - o.delay));

                    });

            a();

        };

    })(jQuery),

    (function (t, e) {

        "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t.observeElementInViewport = {}));

    })(this, function (t) {

        function o(i, n, o, t) {

            if ((void 0 === o && (o = function () {}), void 0 === t && (t = {}), !i)) throw new Error("Target element to observe should be a valid DOM Node");

            var r,

                e,

                s = (t = Object.assign({}, { viewport: null, modTop: "0px", modRight: "0px", modBottom: "0px", modLeft: "0px", threshold: [0] }, t)).viewport,

                a = t.modTop,

                l = t.modLeft,

                c = t.modBottom,

                u = t.modRight;

            if (((t = t.threshold), Array.isArray(t) || "number" == typeof t))

                return (

                    (t = Array.isArray(t)

                        ? t.map(function (t) {

                              return Math.floor(t % 101) / 100;

                          })

                        : [Math.floor(t ? t % 101 : 0) / 100]),

                    (r = Math.min.apply(Math, t)),

                    (s = { root: s instanceof Node ? s : null, rootMargin: a + " " + u + " " + c + " " + l, threshold: t }),

                    (e = new IntersectionObserver(function (t, e) {

                        (t = t.filter(function (t) {

                            return t.target === i;

                        })[0]) &&

                            ((t.isInViewport = t.isIntersecting && t.intersectionRatio >= r),

                            (t.isInViewport ? n : o)(

                                t,

                                function () {

                                    return e.unobserve(i);

                                },

                                i

                            ));

                    }, s)).observe(i),

                    function () {

                        return e.unobserve(i);

                    }

                );

            throw new Error("threshold should be a number or an array of numbers");

        }

        (t.observeElementInViewport = o),

            (t.isInViewport = function (t, n) {

                return (

                    void 0 === n && (n = {}),

                    new Promise(function (i, e) {

                        try {

                            o(

                                t,

                                function (t, e) {

                                    e(), i(!0);

                                },

                                function (t, e) {

                                    e(), i(!1);

                                },

                                n

                            );

                        } catch (t) {

                            e(t);

                        }

                    })

                );

            });

    }),

    (function (t) {

        "use strict";

        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? (module.exports = t(require("jquery"))) : t(jQuery);

    })(function (I) {

        (I.fn.marquee = function (A) {

            return this.each(function () {

                function i(t, e, i) {

                    for (var n = ["webkit", "moz", "MS", "o", ""], o = 0; o < n.length; o++) n[o] || (e = e.toLowerCase()), t.addEventListener(n[o] + e, i, !1);

                }

                var n,

                    o,

                    r,

                    s,

                    a,

                    l = I.extend({}, I.fn.marquee.defaults, A),

                    c = I(this),

                    u = 3,

                    t = "animation-play-state",

                    h = !1,

                    d = function () {

                        c.timer = setTimeout(k, l.delayBeforeStart);

                    },

                    e = {

                        pause: function () {

                            h && l.allowCss3Support ? n.css(t, "paused") : I.fn.pause && n.pause(), c.data("runningStatus", "paused"), c.trigger("paused");

                        },

                        resume: function () {

                            h && l.allowCss3Support ? n.css(t, "running") : I.fn.resume && n.resume(), c.data("runningStatus", "resumed"), c.trigger("resumed");

                        },

                        toggle: function () {

                            e["resumed" === c.data("runningStatus") ? "pause" : "resume"]();

                        },

                        destroy: function () {

                            clearTimeout(c.timer), c.find("*").addBack().off(), c.html(c.find(".js-marquee:first").html());

                        },

                    };

                if ("string" == typeof A) I.isFunction(e[A]) && ((n = n || c.find(".js-marquee-wrapper")), !0 === c.data("css3AnimationIsSupported") && (h = !0), e[A]());

                else {

                    I.each(l, function (t) {

                        if (void 0 !== (p = c.attr("data-" + t))) {

                            switch (p) {

                                case "true":

                                    p = !0;

                                    break;

                                case "false":

                                    p = !1;

                            }

                            l[t] = p;

                        }

                    }),

                        l.speed && (l.duration = (parseInt(c.width(), 10) / l.speed) * 1e3),

                        (s = "up" === l.direction || "down" === l.direction),

                        (l.gap = l.duplicated ? parseInt(l.gap) : 0),

                        c.wrapInner('<div class="js-marquee"></div>');

                    var p,

                        f,

                        m,

                        g = c.find(".js-marquee").css({ "margin-right": l.gap, float: "left" });

                    if (l.duplicated) {

                        l.duplicateCount <= 0 && (l.duplicateCount = 1);

                        for (let t = 0; t < l.duplicateCount; t++) g.clone(!0).appendTo(c);

                    }

                    if (

                        (c.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'),

                        (n = c.find(".js-marquee-wrapper")),

                        s

                            ? ((f = c.height()),

                              n.removeAttr("style"),

                              c.height(f),

                              c.find(".js-marquee").css({ float: "none", "margin-bottom": l.gap, "margin-right": 0 }),

                              l.duplicated && c.find(".js-marquee:last").css({ "margin-bottom": 0 }),

                              (m = c.find(".js-marquee:first").height() + l.gap),

                              l.startVisible && !l.duplicated

                                  ? ((l._completeDuration = ((parseInt(m, 10) + parseInt(f, 10)) / parseInt(f, 10)) * l.duration), (l.duration = (parseInt(m, 10) / parseInt(f, 10)) * l.duration))

                                  : (l.duration = ((parseInt(m, 10) + parseInt(f, 10)) / parseInt(f, 10)) * l.duration))

                            : ((a = c.find(".js-marquee:first").width() + l.gap),

                              (o = c.width()),

                              l.startVisible && !l.duplicated

                                  ? ((l._completeDuration = ((parseInt(a, 10) + parseInt(o, 10)) / parseInt(o, 10)) * l.duration), (l.duration = (parseInt(a, 10) / parseInt(o, 10)) * l.duration))

                                  : (l.duration = ((parseInt(a, 10) + parseInt(o, 10)) / parseInt(o, 10)) * l.duration)),

                        l.duplicated && (l.duration = l.duration / 2),

                        l.allowCss3Support)

                    ) {

                        var v = document.body || document.createElement("div"),

                            y = "marqueeAnimation-" + Math.floor(1e7 * Math.random()),

                            b = "Webkit Moz O ms Khtml".split(" "),

                            _ = "animation",

                            w = "",

                            x = "";

                        if ((void 0 !== v.style.animation && ((x = "@keyframes " + y + " "), (h = !0)), !1 === h))

                            for (var C = 0; C < b.length; C++)

                                if (void 0 !== v.style[b[C] + "AnimationName"]) {

                                    var T = "-" + b[C].toLowerCase() + "-",

                                        _ = T + _,

                                        t = T + t,

                                        x = "@" + T + "keyframes " + y + " ",

                                        h = !0;

                                    break;

                                }

                        h && ((w = y + " " + l.duration / 1e3 + "s " + l.delayBeforeStart / 1e3 + "s infinite " + l.css3easing), c.data("css3AnimationIsSupported", !0));

                    }

                    var E = function () {

                            n.css("transform", "translateY(" + ("up" === l.direction ? f + "px" : "-" + m + "px") + ")");

                        },

                        S = function () {

                            n.css("transform", "translateX(" + ("left" === l.direction ? o + "px" : "-" + a + "px") + ")");

                        },

                        k =

                            (l.duplicated

                                ? (s

                                      ? l.startVisible

                                          ? n.css("transform", "translateY(0)")

                                          : n.css("transform", "translateY(" + ("up" === l.direction ? f + "px" : "-" + (2 * m - l.gap) + "px") + ")")

                                      : l.startVisible

                                      ? n.css("transform", "translateX(0)")

                                      : n.css("transform", "translateX(" + ("left" === l.direction ? o + "px" : "-" + (2 * a - l.gap) + "px") + ")"),

                                  l.startVisible || (u = 1))

                                : l.startVisible

                                ? (u = 2)

                                : (s ? E : S)(),

                            function () {

                                var t, e;

                                l.duplicated &&

                                    (1 === u

                                        ? ((l._originalDuration = l.duration),

                                          (l.duration = s ? ("up" === l.direction ? l.duration + f / (m / l.duration) : 2 * l.duration) : "left" === l.direction ? l.duration + o / (a / l.duration) : 2 * l.duration),

                                          (w = w && y + " " + l.duration / 1e3 + "s " + l.delayBeforeStart / 1e3 + "s " + l.css3easing),

                                          u++)

                                        : 2 === u && ((l.duration = l._originalDuration), w && ((y += "0"), (x = I.trim(x) + "0 "), (w = y + " " + l.duration / 1e3 + "s 0s infinite " + l.css3easing)), u++)),

                                    s

                                        ? l.duplicated

                                            ? (2 < u && n.css("transform", "translateY(" + ("up" === l.direction ? 0 : "-" + m + "px") + ")"), (r = { transform: "translateY(" + ("up" === l.direction ? "-" + m + "px" : 0) + ")" }))

                                            : l.startVisible

                                            ? 2 === u

                                                ? ((w = w && y + " " + l.duration / 1e3 + "s " + l.delayBeforeStart / 1e3 + "s " + l.css3easing),

                                                  (r = { transform: "translateY(" + ("up" === l.direction ? "-" + m + "px" : f + "px") + ")" }),

                                                  u++)

                                                : 3 === u && ((l.duration = l._completeDuration), w && ((y += "0"), (x = I.trim(x) + "0 "), (w = y + " " + l.duration / 1e3 + "s 0s infinite " + l.css3easing)), E())

                                            : (E(), (r = { transform: "translateY(" + ("up" === l.direction ? "-" + n.height() + "px" : f + "px") + ")" }))

                                        : l.duplicated

                                        ? (2 < u && n.css("transform", "translateX(" + ("left" === l.direction ? 0 : "-" + a + "px") + ")"), (r = { transform: "translateX(" + ("left" === l.direction ? "-" + a + "px" : 0) + ")" }))

                                        : l.startVisible

                                        ? 2 === u

                                            ? ((w = w && y + " " + l.duration / 1e3 + "s " + l.delayBeforeStart / 1e3 + "s " + l.css3easing),

                                              (r = { transform: "translateX(" + ("left" === l.direction ? "-" + a + "px" : o + "px") + ")" }),

                                              u++)

                                            : 3 === u && ((l.duration = l._completeDuration), w && ((y += "0"), (x = I.trim(x) + "0 "), (w = y + " " + l.duration / 1e3 + "s 0s infinite " + l.css3easing)), S())

                                        : (S(), (r = { transform: "translateX(" + ("left" === l.direction ? "-" + a + "px" : o + "px") + ")" })),

                                    c.trigger("beforeStarting"),

                                    h

                                        ? (n.css(_, w),

                                          (t =

                                              x +

                                              " { 100%  " +

                                              (function (t) {

                                                  var e,

                                                      i = [];

                                                  for (e in t) t.hasOwnProperty(e) && i.push(e + ":" + t[e]);

                                                  return i.push(), "{" + i.join(",") + "}";

                                              })(r) +

                                              "}"),

                                          0 !== (e = n.find("style")).length ? e.filter(":last").html(t) : I("head").append("<style>" + t + "</style>"),

                                          i(n[0], "AnimationIteration", function () {

                                              c.trigger("finished");

                                          }),

                                          i(n[0], "AnimationEnd", function () {

                                              k(), c.trigger("finished");

                                          }))

                                        : n.animate(r, l.duration, l.easing, function () {

                                              c.trigger("finished"), (l.pauseOnCycle ? d : k)();

                                          }),

                                    c.data("runningStatus", "resumed");

                            });

                    c.on("pause", e.pause), c.on("resume", e.resume), l.pauseOnHover && (c.on("mouseenter", e.pause), c.on("mouseleave", e.resume)), (h && l.allowCss3Support ? k : d)();

                }

            });

        }),

            (I.fn.marquee.defaults = {

                allowCss3Support: !0,

                css3easing: "linear",

                easing: "linear",

                delayBeforeStart: 1e3,

                direction: "left",

                duplicated: !1,

                duplicateCount: 1,

                duration: 5e3,

                speed: 0,

                gap: 20,

                pauseOnCycle: !1,

                pauseOnHover: !1,

                startVisible: !1,

            });

    });

