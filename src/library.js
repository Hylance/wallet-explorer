!function (e) {
    var t = {};

    function n(a) {
        if (t[a]) return t[a].exports;
        var r = t[a] = {i: a, l: !1, exports: {}};
        return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: a})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) n.d(a, r, function (t) {
            return e[t]
        }.bind(null, r));
        return a
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 37)
}({
    36: function (e, t) {
        function n(t) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = n = function (e) {
                return typeof e
            } : e.exports = n = function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, n(t)
        }

        e.exports = n
    }, 37: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n(36), r = n.n(a);
        !function () {
            var e;
            if (void 0 === window.jQuery || "1.11.1" !== window.jQuery.fn.jquery) {
                var t = document.createElement("script");
                t.setAttribute("type", "text/javascript"), t.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"), t.readyState ? t.onreadystatechange = function () {
                    "complete" != this.readyState && "loaded" != this.readyState || n()
                } : t.onload = n, (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(t)
            } else e = window.jQuery, i();

            function n() {
                e = window.jQuery.noConflict(!0), i()
            }

            function a(e) {
                var t = " " + document.cookie, n = " " + e + "=", a = null, r = 0, i = 0;
                return t.length > 0 && -1 != (r = t.indexOf(n)) && (r += n.length, -1 == (i = t.indexOf(";", r)) && (i = t.length), a = unescape(t.substring(r, i))), a
            }

            function i() {
                var t, n,
                    i = (t = a("_locale") || void 0, n = !("object" != ("undefined" == typeof Intl ? "undefined" : r()(Intl)) || !Intl || "function" != typeof Intl.NumberFormat), {
                        toLocaleString: function (e, a) {
                            var r = Number(e);
                            if (isNaN(r)) return e;
                            var i, o = a && a.minDecimalPlaces, c = a && a.maxDecimalPlaces;
                            return void 0 === o || void 0 === c ? (i = r, n ? i.toLocaleString(t) : i.toLocaleString()) : function (e, a, r) {
                                return n ? e.toLocaleString(t, {
                                    minimumFractionDigits: a,
                                    maximumFractionDigits: r
                                }) : e.toFixed(r)
                            }(r, o, c)
                        }
                    });

                function o(e, t) {
                    var n = t;
                    t = Math.pow(10, t);
                    for (var a = ["K", "M", "B", "T"], r = a.length - 1; r >= 0; r--) {
                        var o = Math.pow(10, 3 * (r + 1));
                        if (o <= e) {
                            1e3 == (e = Math.round(e * t / o) / t) && r < a.length - 1 && (e = 1, r++), e = i.toLocaleString(Number(e), {
                                minDecimalPlaces: n,
                                maxDecimalPlaces: n
                            }), e += " " + a[r];
                            break
                        }
                    }
                    return e
                }

                function c(e, t) {
                    return "BTC" == t ? function (e) {
                        e = e >= 1e3 ? i.toLocaleString(Math.round(e)) : e >= 1 ? i.toLocaleString(e, {
                            minDecimalPlaces: 8,
                            maxDecimalPlaces: 8
                        }) : e < 1e-8 ? Number(e).toExponential(4) : i.toLocaleString(e, {
                            minDecimalPlaces: 8,
                            maxDecimalPlaces: 8
                        });
                        return e
                    }(e) : function (e) {
                        e = e >= 1 ? e >= 1e5 ? i.toLocaleString(Math.round(e)) : i.toLocaleString(e, {
                            minDecimalPlaces: 2,
                            maxDecimalPlaces: 2
                        }) : e < 1e-6 ? Number(e).toExponential(2) : i.toLocaleString(e, {
                            minDecimalPlaces: 6,
                            maxDecimalPlaces: 6
                        });
                        return e
                    }(e)
                }

                function s(e, t, n) {
                    var a = t, r = {
                        btc: "??????",
                        usd: "$",
                        eur: "???????",
                        cny: "????",
                        gbp: "????",
                        cad: "$",
                        rub: "<img src='/static/img/fiat/ruble.gif'/>",
                        hkd: "$",
                        jpy: "????",
                        aud: "$",
                        brl: "R$",
                        inr: "???????",
                        krw: "???????",
                        mxn: "$",
                        idr: "Rp",
                        chf: "Fr"
                    };
                    return e.toLowerCase() in r && (a = r[e.toLowerCase()] + a), n && (a = a + ' <span style="font-size:12px">' + e.toUpperCase() + "</span>"), a
                }

                function l(e, t, n, a, r, l, p, u, d, m, f, g, y, h, x, v, b, w, S, _) {
                    var k = S ? "https://s2.coinmarketcap.com/static/img/coins/64x64/" + S + ".png" : "https://files.coinmarketcap.com/static/widget/coins_legacy/64x64/" + e + ".png",
                        j = "#009e73";
                    m < 0 && (j = "#d94040"), m = i.toLocaleString(m, {minDecimalPlaces: 2, maxDecimalPlaces: 2});
                    var C = h ? "(" + a + ")" : "", P = p ? c(p, r) : "?",
                        L = m ? '<span style="color:' + j + '">(' + m + "%)" : "", D = f ? o(f, 2) : "?",
                        z = g ? o(g, 2) : "?",
                        M = "Powered by Covalent", N = "";
                    u ? N = '<br><span style="font-size: 14px; color: rgba(39, 52, 64, 0.5)">' + (d ? c(d, u) : "?") + " " + u + " </span>" : N = "";
                    var F = "utm_medium=widget&utm_campaign=cmcwidget&utm_source=" + location.hostname + "&utm_content=" + e,
                        O = '      <div style="border:2px solid #e1e5ea;border-radius: 10px;font-family: \'Helvetica Neue\',Helvetica,Arial,sans-serif;min-width:285px;">        <div style="display:flex;padding:12px 0px;">          <div style="width:33%;display: flex;justify-content: center;align-items: center;"><img style="width:46px;height:46px;" src="' + k + '"></div>          <div style="width:67%;border: none;text-align:left;line-height:1.4">              <span style="font-size: 18px;"><a href="https://coinmarketcap.com/currencies/' + n + "/?" + F + '" target="_blank">' + t + " " + C + '</a></span> <br>              <span style="font-size: 16px;">                <span style="font-size: 20px; font-weight: 500;">' + P + '</span>                <span style="font-size: 14px; font-weight: 500;">' + r + '</span>                <span style="margin-left:6px; font-weight: 500;">' + L + "</span>                " + N + "              </span>          </div>      </div>";
                    return O += function (e, t, n, a, r, i, o, c, l) {
                        var p = 0, u = 0, d = "", m = "", f = "", g = "zh" == l ? "??????????????????????????24????????????????????" : "VOLUME";
                        if (e && p++, t && p++, n && p++, 0 == p) return "";
                        if (1 == p && (u = 100), 2 == p && (u = 49.8), 3 == p && (u = 33), e) {
                            var y = 0;
                            (n || t) && (y = 1), d = '                  <div style="text-align:center;float:left;width:' + u + "%;font-size:12px;padding:12px 0;border-right:" + y + 'px solid #e1e5ea;line-height:1em;">                      ' + ("zh" == l ? "?????????????" : "RANK") + '                      <br><br>                      <span style="font-size: 18px; ">' + i + "</span>                  </div>"
                        }
                        n && (y = 0, t && (y = 1), m = '                  <div style="text-align:center;float:left;width:' + u + "%;font-size:12px;padding:12px 0 16px 0;border-right:" + y + 'px solid #e1e5ea;line-height:1em;">                      ' + ("zh" == l ? "??????????????" : "MARKET CAP") + '                      <br><br>                      <span style="font-size: 16px; ">' + s(r, o, a) + "</span>                  </div>");
                        t && (f = '                  <div style="text-align:center;float:left;width:' + u + '%;font-size:12px;padding:12px 0 16px 0;line-height:1em;">                      ' + g + '                      <br><br>                      <span style="font-size: 16px; ">' + s(r, c, a) + "</span>                  </div>");
                        return '<div style="border-top: 1px solid #e1e5ea;clear:both;">' + d + m + f + "</div>"
                    }(x, v, b, w, l, y, D, z, _), O += '  <div style="border-top: 1px solid #e1e5ea;text-align:center;clear:both;font-size:12px;font-style:italic;padding:8px 0;">      <a href="https://www.covalenthq.com/docs/api/#overview--introduction" target="_blank">' + M + "</a>  </div></div>"
                }

                e(document).ready((function (e) {
                    e(".coinmarketcap-currency-widget").each((function () {
                        var t = e(this).attr("data-currency"), n = e(this).data("currencyid"),
                            a = e(this).attr("data-base").toUpperCase(), r = e(this).attr("data-secondary"),
                            i = e(this).data("language");
                        i = i || "en-us", r = "BTC" == (r = r ? r.toUpperCase() : null) || "USD" == r ? r : null;
                        var o = e(this).attr("data-stats");
                        o = (o = o ? o.toUpperCase() : null) == a ? a : "USD";
                        var c, s = !1 !== e(this).data("ticker"), p = !1 !== e(this).data("rank"),
                            u = !1 !== e(this).data("marketcap"), d = !1 !== e(this).data("volume"),
                            m = !1 !== e(this).data("statsticker"), f = this;
                        c = n ? "https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/widget?id=" + n + "&convert=BTC,USD," + a : "https://widgets.coinmarketcap.com/v1/ticker/" + t + "/?ref=widget&convert=" + a, e.get({
                            url: c,
                            success: function (c) {
                                if (c = c.length ? c[0] : c.data, t || (t = c[n].name.toLowerCase()), n) var g = c[n],
                                    y = parseFloat(g.quote[a].price), h = r && parseFloat(g.quote[r].price),
                                    x = parseInt(g.quote[a].market_cap), v = parseInt(g.quote[a].volume_24h),
                                    b = parseFloat(g.quote[a].percent_change_24h), w = c[n].name, S = c[n].symbol,
                                    _ = c[n].cmc_rank; else {
                                    var k = "price_" + a.toLowerCase(), j = r ? "price_" + r.toLowerCase() : null,
                                        C = "market_cap_" + o.toLowerCase(), P = "24h_volume_" + o.toLowerCase();
                                    y = parseFloat(c[k]), h = j ? parseFloat(c[j]) : null, x = parseInt(c[C]), v = parseInt(c[P]), b = Number(c.percent_change_24h), w = c.name, S = c.symbol, _ = c.rank
                                }
                                var L = c[n].slug, D = l(t, w, L, S, a, o, y, r, h, b, x, v, _, s, p, d, u, m, n, i);
                                e(f).html(D), e(f).find("a").css({"text-decoration": "none", color: "#1070e0"})
                            }
                        })
                    }))
                }))
            }
        }()
    }
});
