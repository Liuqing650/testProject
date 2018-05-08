webpackJsonp([0], Array(31).concat([function (e, t, n) {
  "use strict";
  function r(e) {
    return e > 1 ? 0 : e < -1 ? o : Math.acos(e)
  }
  function i(e) {
    return e > 1 ? u : e < -1 ? -u : Math.asin(e)
  }
  function a(e) {
    return (e = s(e / 2)) * e
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }),
    t.acos = r,
    t.asin = i,
    t.haversin = a;
  var o = (t.epsilon = 1e-6,
    t.epsilon2 = 1e-12,
    t.pi = Math.PI)
    , u = t.halfPi = o / 2
    , s = (t.quarterPi = o / 4,
      t.tau = 2 * o,
      t.degrees = 180 / o,
      t.radians = o / 180,
      t.abs = Math.abs,
      t.atan = Math.atan,
      t.atan2 = Math.atan2,
      t.cos = Math.cos,
      t.ceil = Math.ceil,
      t.exp = Math.exp,
      t.floor = Math.floor,
      t.log = Math.log,
      t.pow = Math.pow,
      t.sin = Math.sin);
  t.sign = Math.sign || function (e) {
    return e > 0 ? 1 : e < 0 ? -1 : 0
  }
    ,
    t.sqrt = Math.sqrt,
    t.tan = Math.tan
}
  , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(1492);
    Object.defineProperty(t, "create", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    });
    var a = n(310);
    Object.defineProperty(t, "creator", {
      enumerable: !0,
      get: function () {
        return r(a).default
      }
    });
    var o = n(1521);
    Object.defineProperty(t, "local", {
      enumerable: !0,
      get: function () {
        return r(o).default
      }
    });
    var u = n(712);
    Object.defineProperty(t, "matcher", {
      enumerable: !0,
      get: function () {
        return r(u).default
      }
    });
    var s = n(1522);
    Object.defineProperty(t, "mouse", {
      enumerable: !0,
      get: function () {
        return r(s).default
      }
    });
    var l = n(398);
    Object.defineProperty(t, "namespace", {
      enumerable: !0,
      get: function () {
        return r(l).default
      }
    });
    var c = n(399);
    Object.defineProperty(t, "namespaces", {
      enumerable: !0,
      get: function () {
        return r(c).default
      }
    });
    var f = n(311);
    Object.defineProperty(t, "clientPoint", {
      enumerable: !0,
      get: function () {
        return r(f).default
      }
    });
    var d = n(710);
    Object.defineProperty(t, "select", {
      enumerable: !0,
      get: function () {
        return r(d).default
      }
    });
    var h = n(1523);
    Object.defineProperty(t, "selectAll", {
      enumerable: !0,
      get: function () {
        return r(h).default
      }
    });
    var p = n(111);
    Object.defineProperty(t, "selection", {
      enumerable: !0,
      get: function () {
        return r(p).default
      }
    });
    var v = n(400);
    Object.defineProperty(t, "selector", {
      enumerable: !0,
      get: function () {
        return r(v).default
      }
    });
    var y = n(711);
    Object.defineProperty(t, "selectorAll", {
      enumerable: !0,
      get: function () {
        return r(y).default
      }
    });
    var m = n(715);
    Object.defineProperty(t, "style", {
      enumerable: !0,
      get: function () {
        return m.styleValue
      }
    });
    var g = n(1524);
    Object.defineProperty(t, "touch", {
      enumerable: !0,
      get: function () {
        return r(g).default
      }
    });
    var b = n(1525);
    Object.defineProperty(t, "touches", {
      enumerable: !0,
      get: function () {
        return r(b).default
      }
    });
    var _ = n(401);
    Object.defineProperty(t, "window", {
      enumerable: !0,
      get: function () {
        return r(_).default
      }
    });
    var x = n(402);
    Object.defineProperty(t, "event", {
      enumerable: !0,
      get: function () {
        return x.event
      }
    }),
      Object.defineProperty(t, "customEvent", {
        enumerable: !0,
        get: function () {
          return x.customEvent
        }
      })
  }
  , , , , function (e, t, n) {
    "use strict";
    function r(e, t, n, r, i) {
      t.n(O, r),
        t.be("DIV", E, "app-nav-wrapper", r),
        t.be("DIV", {
          class: x(["app-nav-container", i.fixed && "fixed"])
        }, "app-nav-container", r, null, 4),
        p(i.nav, t, n, "0"),
        "report" === i.nav.active ? i.hasTabs && y(i.tabs, t, n, "1", [["tab-changed", "onReportChanged", !1]]) : "chart" === i.nav.active ? g({
          eid: e.eid,
          active: e.active
        }, t, n, "2") : i.hasTabs && _(i.tabs, t, n, "3", [["tab-changed", "onTabChanged", !1]]),
        t.ee(),
        t.ee()
    }
    n(67);
    var i = e.exports = n(0).t()
      , a = n(1)
      , o = a.rc
      , u = o("/pc-web$1.0.0/src/routes/company/components/app-navigator/index.marko", function () {
        return e.exports
      })
      , s = n(68)
      , l = a.r
      , c = a.c
      , f = n(69)
      , d = n(2)
      , h = d.t
      , p = h(f)
      , v = n(72)
      , y = h(v)
      , m = n(75)
      , g = h(m)
      , b = n(79)
      , _ = h(b)
      , x = d.ca
      , w = d.e
      , P = d.const
      , M = P("ee5a02")
      , O = w("DIV", null, "indicator", null, 0, 0, {
        i: M()
      })
      , E = {
        class: "app-nav-wrapper"
      };
    i._ = l(r, {
      _l_: u
    }, s),
      i.Component = c(s, i._)
  }
  , function (e, t) { }
  , function (e, t, n) {
    "use strict";
    (function (r) {
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
      }()
        , o = n(6)
        , u = function (e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }(o)
        , s = n(51)
        , l = n(7)
        , c = function () {
          function e() {
            i(this, e)
          }
          return a(e, [{
            key: "onCreate",
            value: function (e) {
              this.state = {
                nav: {
                  type: e.type,
                  active: e.nav,
                  eid: e.eid,
                  countSummary: e.countSummary,
                  companyType: e.companyType
                },
                tabs: {
                  active: e.tabIndex || 0,
                  tabs: e.tabs
                },
                hasTabs: e.tabs && e.tabs.length,
                fixed: !1
              }
            }
          }, {
            key: "onMount",
            value: function () {
              var e = this
                , t = r(this.getEl("app-nav-container"))
                , n = r(this.getEl("app-nav-wrapper"))
                , i = s.create(this.getEl("indicator"))
                , a = function () {
                  n.height(t.height()),
                    e.state.fixed = !i.isInViewport
                };
              if (i.visibilityChange(a),
                e.state.hasTabs && "report" !== e.state.nav.active) {
                var o = {}
                  , l = function (e) {
                    if (!o[e]) {
                      var t = r("#" + e);
                      t.length > 0 && (o[e] = t[0])
                    }
                    return o[e]
                  }
                  , c = function (n) {
                    u.default.forEach(e.input.tabs, function (n, r) {
                      var i = l(n.id);
                      if (i) {
                        var a = i.getBoundingClientRect()
                          , o = i.clientHeight;
                        if (a.top > -o + t.height())
                          return e.state.tabs = Object.assign({}, e.state.tabs, {
                            active: n.index
                          }),
                            !1
                      }
                    })
                  };
                r(window).on("scroll", u.default.throttle(c, 200))
              }
            }
          }, {
            key: "onTabChanged",
            value: function (e, t) {
              var n = this;
              l.scroller.to(r("#" + t).offset().top - r(n.getEl("app-nav-wrapper")).height())
            }
          }, {
            key: "onReportChanged",
            value: function (e) {
              this.state.tabs = {
                active: e,
                tabs: this.input.tabs
              },
                this.emit("report-changed", e)
            }
          }]),
            e
        }();
      t.default = c,
        e.exports = t.default
    }
    ).call(t, n(4))
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n, r, i) {
      t.be("DIV", h, "0", r),
        t.be("DIV", p, "1", r),
        t.be("UL", v, "2", r),
        4 === e.type ? (t.e("LI", {
          class: d(["info" === e.active && "active"])
        }, "3", r, 1, 4).e("A", {
          href: "/company/" + e.eid
        }, "4", r, 1).t("基本信息"),
          t.e("LI", {
            class: d(["risk" === e.active && "active", 0 == e.countSummary.riskCount && "disable"])
          }, "5", r, 1, 4).e("A", {
            href: "/company-risk/" + e.eid
          }, "6", r, 2, 0, {
              onclick: n.d("handleClick", !1, [0 == e.countSummary.riskCount])
            }).t("风险信息 ").e("SMALL", y, "7", r, 1).t(e.countSummary.riskCount),
          t.e("LI", {
            class: d(["ability" === e.active && "active", 0 == e.countSummary.abilityCount && "disable"])
          }, "8", r, 1, 4).e("A", {
            href: "/company-ability/" + e.eid
          }, "9", r, 2, 0, {
              onclick: n.d("handleClick", !1, [0 == e.countSummary.abilityCount])
            }).t("知识产权 ").e("SMALL", m, "10", r, 1).t(e.countSummary.abilityCount),
          t.e("LI", {
            class: d(["investment" === e.active && "active", 0 == e.countSummary.relatedCount && "disable"])
          }, "11", r, 1, 4).e("A", {
            href: "/company-investment/" + e.eid
          }, "12", r, 2, 0, {
              onclick: n.d("handleClick", !1, [0 == e.countSummary.relatedCount])
            }).t("对外投资 ").e("SMALL", g, "13", r, 1).t(e.countSummary.relatedCount),
          t.e("LI", {
            class: d(["operation" === e.active && "active", 0 == e.countSummary.operationCount && "disable"])
          }, "14", r, 1, 4).e("A", {
            href: "/company-operation/" + e.eid
          }, "15", r, 2, 0, {
              onclick: n.d("handleClick", !1, [0 == e.countSummary.operationCount])
            }).t("经营信息 ").e("SMALL", b, "16", r, 1).t(e.countSummary.operationCount)) : 5 === e.type ? (t.e("LI", {
              class: d(["info" === e.active && "active"])
            }, "17", r, 1, 4).e("A", {
              href: "/company/" + e.eid
            }, "18", r, 1).t("基本信息"),
              t.e("LI", {
                class: d(["risk" === e.active && "active", 0 == e.countSummary.riskCount && "disable"])
              }, "19", r, 1, 4).e("A", {
                href: "/company-risk/" + e.eid
              }, "20", r, 2, 0, {
                  onclick: n.d("handleClick", !1, [0 == e.countSummary.riskCount])
                }).t("风险信息 ").e("SMALL", _, "21", r, 1).t(e.countSummary.riskCount),
              t.e("LI", {
                class: d(["ability" === e.active && "active", 0 == e.countSummary.abilityCount && "disable"])
              }, "22", r, 1, 4).e("A", {
                href: "/company-ability/" + e.eid
              }, "23", r, 2, 0, {
                  onclick: n.d("handleClick", !1, [0 == e.countSummary.abilityCount])
                }).t("知识产权 ").e("SMALL", x, "24", r, 1).t(e.countSummary.abilityCount),
              t.e("LI", {
                class: d(["operation" === e.active && "active", 0 == e.countSummary.operationCount && "disable"])
              }, "25", r, 1, 4).e("A", {
                href: "/company-operation/" + e.eid
              }, "26", r, 2, 0, {
                  onclick: n.d("handleClick", !1, [0 == e.countSummary.operationCount])
                }).t("经营信息 ").e("SMALL", w, "27", r, 1).t(e.countSummary.operationCount)) : ("publicly" === e.companyType && t.e("LI", {
                  class: d(["publicly" === e.active && "active"])
                }, "28", r, 1, 4).e("A", {
                  href: "/company-publicly/" + e.eid
                }, "29", r, 1).t("上市信息"),
                  t.e("LI", {
                    class: d(["info" === e.active && "active"])
                  }, "30", r, 1, 4).e("A", {
                    href: "/company/" + e.eid
                  }, "31", r, 1).t("基本信息"),
                  t.e("LI", {
                    class: d(["risk" === e.active && "active", 0 == e.countSummary.riskCount && "disable"])
                  }, "32", r, 1, 4).e("A", {
                    href: "/company-risk/" + e.eid
                  }, "33", r, 2, 0, {
                      onclick: n.d("handleClick", !1, [0 == e.countSummary.riskCount])
                    }).t("风险信息 ").e("SMALL", P, "34", r, 1).t(e.countSummary.riskCount),
                  t.e("LI", {
                    class: d(["chart" === e.active && "active"])
                  }, "35", r, 1, 4).e("A", {
                    href: "/company-chart/structure/" + e.eid
                  }, "36", r, 2).t("企业图谱 ").n(j, r),
                  t.e("LI", {
                    class: d(["ability" === e.active && "active", 0 == e.countSummary.abilityCount && "disable"])
                  }, "38", r, 1, 4).e("A", {
                    href: "/company-ability/" + e.eid
                  }, "39", r, 2, 0, {
                      onclick: n.d("handleClick", !1, [0 == e.countSummary.abilityCount])
                    }).t("知识产权 ").e("SMALL", S, "40", r, 1).t(e.countSummary.abilityCount),
                  t.e("LI", {
                    class: d(["investment" === e.active && "active", 0 == e.countSummary.relatedCount && "disable"])
                  }, "41", r, 1, 4).e("A", {
                    href: "/company-investment/" + e.eid
                  }, "42", r, 2, 0, {
                      onclick: n.d("handleClick", !1, [0 == e.countSummary.relatedCount])
                    }).t("对外投资 ").e("SMALL", k, "43", r, 1).t(e.countSummary.relatedCount),
                  t.e("LI", {
                    class: d(["report" === e.active && "active", 0 == e.countSummary.reportsCount && "disable"])
                  }, "44", r, 1, 4).e("A", {
                    href: "/company-report/" + e.eid
                  }, "45", r, 2, 0, {
                      onclick: n.d("handleClick", !1, [0 == e.countSummary.reportsCount])
                    }).t("企业年报 ").e("SMALL", C, "46", r, 1).t(e.countSummary.reportsCount),
                  t.e("LI", {
                    class: d(["operation" === e.active && "active", 0 == e.countSummary.operationCount && "disable"])
                  }, "47", r, 1, 4).e("A", {
                    href: "/company-operation/" + e.eid
                  }, "48", r, 2, 0, {
                      onclick: n.d("handleClick", !1, [0 == e.countSummary.operationCount])
                    }).t("经营信息 ").e("SMALL", T, "49", r, 1).t(e.countSummary.operationCount)),
        t.ee(),
        t.ee(),
        t.ee()
    }
    n(70);
    var i = e.exports = n(0).t()
      , a = n(1)
      , o = a.rc
      , u = o("/pc-web$1.0.0/src/routes/company/components/app-navigator/components/app-company-navbar/index.marko", function () {
        return e.exports
      })
      , s = n(71)
      , l = a.r
      , c = a.c
      , f = n(2)
      , d = f.ca
      , h = {
        class: "c-nav"
      }
      , p = {
        class: "container"
      }
      , v = {
        class: "nav nav-tabs"
      }
      , y = {
        class: "font-f3"
      }
      , m = {
        class: "font-f3"
      }
      , g = {
        class: "font-f3"
      }
      , b = {
        class: "font-f3"
      }
      , _ = {
        class: "font-f3"
      }
      , x = {
        class: "font-f3"
      }
      , w = {
        class: "font-f3"
      }
      , P = {
        class: "font-f3"
      }
      , M = f.e
      , O = f.const
      , E = O("4928f5")
      , j = M("SMALL", {
        class: "font-f3"
      }, "37", null, 1, 0, {
          i: E()
        }).t("2")
      , S = {
        class: "font-f3"
      }
      , k = {
        class: "font-f3"
      }
      , C = {
        class: "font-f3"
      }
      , T = {
        class: "font-f3"
      };
    i._ = l(r, {
      _l_: u
    }, s),
      i.Component = c(s, i._)
  }
  , function (e, t) { }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n),
          r && e(t, r),
          t
      }
    }()
      , a = function () {
        function e() {
          r(this, e)
        }
        return i(e, [{
          key: "handleClick",
          value: function (e, t) {
            e && (t.preventDefault(),
              t.stopPropagation())
          }
        }]),
          e
      }();
    t.default = a,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n, r, i) {
      t.be("DIV", y, "0", r),
        t.be("DIV", m, "1", r),
        p(e.tabs, function (i) {
          t.e("DIV", {
            class: v(["tab", i === e.active && "active"]),
            "data-event-props": d.getTrackerProps({
              "年度": i
            })
          }, "2", r, 2, 0, {
              onclick: n.d("changeTab", !1, [i])
            }).t(i).t("年度")
        }),
        t.ee(),
        t.ee()
    }
    n(73);
    var i = e.exports = n(0).t()
      , a = n(1)
      , o = a.rc
      , u = o("/pc-web$1.0.0/src/routes/company/components/app-navigator/components/app-company-report-tabs/index.marko", function () {
        return e.exports
      })
      , s = n(74)
      , l = a.r
      , c = a.c
      , f = n(21)
      , d = f.default || f
      , h = n(2)
      , p = h.f
      , v = h.ca
      , y = {
        class: "c-tabs container"
      }
      , m = {
        class: "tabs clearfix"
      };
    i._ = l(r, {
      _l_: u
    }, s),
      i.Component = c(s, i._)
  }
  , function (e, t) { }
  , function (e, t, n) {
    "use strict";
    (function (n) {
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
      }()
        , a = function () {
          function e() {
            r(this, e)
          }
          return i(e, [{
            key: "changeTab",
            value: function (e, t, r) {
              n(r).hasClass("active") || this.emit("tab-changed", e)
            }
          }]),
            e
        }();
      t.default = a,
        e.exports = t.default
    }
    ).call(t, n(4))
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n, r, i) {
      t.be("DIV", m, "0", r),
        t.be("DIV", g, "1", r),
        p(h, function (n, i) {
          t.e("A", {
            class: y(["tab", n === e.active && "active"]),
            href: "/company-chart/" + n + "/" + e.eid
          }, "2", r, 1).t(i)
        }),
        t.ee(),
        t.ee()
    }
    n(76);
    var i = e.exports = n(0).t()
      , a = n(1)
      , o = a.rc
      , u = o("/pc-web$1.0.0/src/routes/company/components/app-navigator/components/app-company-chart-tabs/index.marko", function () {
        return e.exports
      })
      , s = n(77)
      , l = a.r
      , c = a.c
      , f = n(21)
      , d = (f.default,
        n(78))
      , h = d.default || d
      , p = n(91)
      , v = n(2)
      , y = v.ca
      , m = {
        class: "c-tabs container"
      }
      , g = {
        class: "tabs clearfix"
      };
    i._ = l(r, {
      _l_: u
    }, s),
      i.Component = c(s, i._)
  }
  , function (e, t) { }
  , function (e, t, n) {
    "use strict";
    (function (n) {
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
      }()
        , a = function () {
          function e() {
            r(this, e)
          }
          return i(e, [{
            key: "changeTab",
            value: function (e, t, r) {
              n(r).hasClass("active") || this.emit("tab-changed", e)
            }
          }]),
            e
        }();
      t.default = a,
        e.exports = t.default
    }
    ).call(t, n(4))
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = {
        structure: "股权结构",
        owner: "疑似实际控制人"
      },
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n, r, i) {
      t.be("DIV", m, "0", r),
        t.be("DIV", g, "1", r),
        v(e.tabs, function (i) {
          t.e("DIV", {
            class: y(o(["tab", i.index === e.active && "active"])),
            "data-event-props": p.getTrackerProps({
              "信息类型": i.name
            })
          }, "2", r, 3, 0, {
              onclick: n.d("changeTab", !1, [i.index, i.id])
            }).t(i.name).t(" ").t("工商信息" == i.name || "实时股价" == i.name || "企业概况" == i.name || "主要股东" == i.name || "高管信息" == i.name || "产品信息" === i.name || "基本信息" === i.name || "评估等级" === i.name || "免税资格" === i.name ? "" : i.total)
        }),
        t.ee(),
        t.ee()
    }
    n(80);
    var i = e.exports = n(0).t()
      , a = n(2)
      , o = a.cl
      , u = n(1)
      , s = u.rc
      , l = s("/pc-web$1.0.0/src/routes/company/components/app-navigator/components/app-company-tabs/index.marko", function () {
        return e.exports
      })
      , c = n(81)
      , f = u.r
      , d = u.c
      , h = n(21)
      , p = h.default || h
      , v = a.f
      , y = a.ca
      , m = {
        class: "c-tabs container"
      }
      , g = {
        class: "tabs clearfix"
      };
    i._ = f(r, {
      _l_: l
    }, c),
      i.Component = d(c, i._)
  }
  , function (e, t) { }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n),
          r && e(t, r),
          t
      }
    }()
      , a = function () {
        function e() {
          r(this, e)
        }
        return i(e, [{
          key: "changeTab",
          value: function (e, t) {
            this.emit("tab-changed", e, t)
          }
        }]),
          e
      }();
    t.default = a,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n, o) {
      function u(t) {
        return e(t = new Date(+t)),
          t
      }
      return u.floor = u,
        u.ceil = function (n) {
          return e(n = new Date(n - 1)),
            t(n, 1),
            e(n),
            n
        }
        ,
        u.round = function (e) {
          var t = u(e)
            , n = u.ceil(e);
          return e - t < n - e ? t : n
        }
        ,
        u.offset = function (e, n) {
          return t(e = new Date(+e), null == n ? 1 : Math.floor(n)),
            e
        }
        ,
        u.range = function (n, r, i) {
          var a, o = [];
          if (n = u.ceil(n),
            i = null == i ? 1 : Math.floor(i),
            !(n < r && i > 0))
            return o;
          do {
            o.push(a = new Date(+n)),
              t(n, i),
              e(n)
          } while (a < n && n < r); return o
        }
        ,
        u.filter = function (n) {
          return r(function (t) {
            if (t >= t)
              for (; e(t),
                !n(t);)
                t.setTime(t - 1)
          }, function (e, r) {
            if (e >= e)
              if (r < 0)
                for (; ++r <= 0;)
                  for (; t(e, -1),
                    !n(e);)
                    ;
              else
                for (; --r >= 0;)
                  for (; t(e, 1),
                    !n(e);)
                    ;
          })
        }
        ,
        n && (u.count = function (t, r) {
          return i.setTime(+t),
            a.setTime(+r),
            e(i),
            e(a),
            Math.floor(n(i, a))
        }
          ,
          u.every = function (e) {
            return e = Math.floor(e),
              isFinite(e) && e > 0 ? e > 1 ? u.filter(o ? function (t) {
                return o(t) % e == 0
              }
                : function (t) {
                  return u.count(0, t) % e == 0
                }
              ) : u : null
          }
        ),
        u
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = r;
    var i = new Date
      , a = new Date;
    e.exports = t.default
  }
  , , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(698);
    Object.defineProperty(t, "bisect", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    }),
      Object.defineProperty(t, "bisectRight", {
        enumerable: !0,
        get: function () {
          return i.bisectRight
        }
      }),
      Object.defineProperty(t, "bisectLeft", {
        enumerable: !0,
        get: function () {
          return i.bisectLeft
        }
      });
    var a = n(202);
    Object.defineProperty(t, "ascending", {
      enumerable: !0,
      get: function () {
        return r(a).default
      }
    });
    var o = n(699);
    Object.defineProperty(t, "bisector", {
      enumerable: !0,
      get: function () {
        return r(o).default
      }
    });
    var u = n(1468);
    Object.defineProperty(t, "cross", {
      enumerable: !0,
      get: function () {
        return r(u).default
      }
    });
    var s = n(1469);
    Object.defineProperty(t, "descending", {
      enumerable: !0,
      get: function () {
        return r(s).default
      }
    });
    var l = n(701);
    Object.defineProperty(t, "deviation", {
      enumerable: !0,
      get: function () {
        return r(l).default
      }
    });
    var c = n(703);
    Object.defineProperty(t, "extent", {
      enumerable: !0,
      get: function () {
        return r(c).default
      }
    });
    var f = n(1470);
    Object.defineProperty(t, "histogram", {
      enumerable: !0,
      get: function () {
        return r(f).default
      }
    });
    var d = n(1473);
    Object.defineProperty(t, "thresholdFreedmanDiaconis", {
      enumerable: !0,
      get: function () {
        return r(d).default
      }
    });
    var h = n(1474);
    Object.defineProperty(t, "thresholdScott", {
      enumerable: !0,
      get: function () {
        return r(h).default
      }
    });
    var p = n(707);
    Object.defineProperty(t, "thresholdSturges", {
      enumerable: !0,
      get: function () {
        return r(p).default
      }
    });
    var v = n(1475);
    Object.defineProperty(t, "max", {
      enumerable: !0,
      get: function () {
        return r(v).default
      }
    });
    var y = n(1476);
    Object.defineProperty(t, "mean", {
      enumerable: !0,
      get: function () {
        return r(y).default
      }
    });
    var m = n(1477);
    Object.defineProperty(t, "median", {
      enumerable: !0,
      get: function () {
        return r(m).default
      }
    });
    var g = n(1478);
    Object.defineProperty(t, "merge", {
      enumerable: !0,
      get: function () {
        return r(g).default
      }
    });
    var b = n(708);
    Object.defineProperty(t, "min", {
      enumerable: !0,
      get: function () {
        return r(b).default
      }
    });
    var _ = n(700);
    Object.defineProperty(t, "pairs", {
      enumerable: !0,
      get: function () {
        return r(_).default
      }
    });
    var x = n(1479);
    Object.defineProperty(t, "permute", {
      enumerable: !0,
      get: function () {
        return r(x).default
      }
    });
    var w = n(396);
    Object.defineProperty(t, "quantile", {
      enumerable: !0,
      get: function () {
        return r(w).default
      }
    });
    var P = n(705);
    Object.defineProperty(t, "range", {
      enumerable: !0,
      get: function () {
        return r(P).default
      }
    });
    var M = n(1480);
    Object.defineProperty(t, "scan", {
      enumerable: !0,
      get: function () {
        return r(M).default
      }
    });
    var O = n(1481);
    Object.defineProperty(t, "shuffle", {
      enumerable: !0,
      get: function () {
        return r(O).default
      }
    });
    var E = n(1482);
    Object.defineProperty(t, "sum", {
      enumerable: !0,
      get: function () {
        return r(E).default
      }
    });
    var j = n(706);
    Object.defineProperty(t, "ticks", {
      enumerable: !0,
      get: function () {
        return r(j).default
      }
    }),
      Object.defineProperty(t, "tickIncrement", {
        enumerable: !0,
        get: function () {
          return j.tickIncrement
        }
      }),
      Object.defineProperty(t, "tickStep", {
        enumerable: !0,
        get: function () {
          return j.tickStep
        }
      });
    var S = n(709);
    Object.defineProperty(t, "transpose", {
      enumerable: !0,
      get: function () {
        return r(S).default
      }
    });
    var k = n(702);
    Object.defineProperty(t, "variance", {
      enumerable: !0,
      get: function () {
        return r(k).default
      }
    });
    var C = n(1483);
    Object.defineProperty(t, "zip", {
      enumerable: !0,
      get: function () {
        return r(C).default
      }
    })
  }
  , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e, t) {
      this._groups = e,
        this._parents = t
    }
    function a() {
      return new i([[document.documentElement]], de)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.root = void 0,
      t.Selection = i;
    var o = n(1493)
      , u = r(o)
      , s = n(1494)
      , l = r(s)
      , c = n(1495)
      , f = r(c)
      , d = n(1496)
      , h = r(d)
      , p = n(713)
      , v = r(p)
      , y = n(1498)
      , m = r(y)
      , g = n(1499)
      , b = r(g)
      , _ = n(1500)
      , x = r(_)
      , w = n(1501)
      , P = r(w)
      , M = n(1502)
      , O = r(M)
      , E = n(1503)
      , j = r(E)
      , S = n(1504)
      , k = r(S)
      , C = n(1505)
      , T = r(C)
      , N = n(1506)
      , D = r(N)
      , A = n(1507)
      , L = r(A)
      , I = n(1508)
      , R = r(I)
      , B = n(715)
      , V = r(B)
      , z = n(1509)
      , F = r(z)
      , q = n(1510)
      , Y = r(q)
      , X = n(1511)
      , H = r(X)
      , U = n(1512)
      , W = r(U)
      , $ = n(1513)
      , G = r($)
      , Z = n(1514)
      , Q = r(Z)
      , J = n(1515)
      , K = r(J)
      , ee = n(1516)
      , te = r(ee)
      , ne = n(1517)
      , re = r(ne)
      , ie = n(1518)
      , ae = r(ie)
      , oe = n(1519)
      , ue = r(oe)
      , se = n(402)
      , le = r(se)
      , ce = n(1520)
      , fe = r(ce)
      , de = t.root = [null];
    i.prototype = a.prototype = {
      constructor: i,
      select: u.default,
      selectAll: l.default,
      filter: f.default,
      data: h.default,
      enter: v.default,
      exit: m.default,
      merge: b.default,
      order: x.default,
      sort: P.default,
      call: O.default,
      nodes: j.default,
      node: k.default,
      size: T.default,
      empty: D.default,
      each: L.default,
      attr: R.default,
      style: V.default,
      property: F.default,
      classed: Y.default,
      text: H.default,
      html: W.default,
      raise: G.default,
      lower: Q.default,
      append: K.default,
      insert: te.default,
      remove: re.default,
      clone: ae.default,
      datum: ue.default,
      on: le.default,
      dispatch: fe.default
    },
      t.default = a
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(404);
    Object.defineProperty(t, "interpolate", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    });
    var a = n(722);
    Object.defineProperty(t, "interpolateArray", {
      enumerable: !0,
      get: function () {
        return r(a).default
      }
    });
    var o = n(407);
    Object.defineProperty(t, "interpolateBasis", {
      enumerable: !0,
      get: function () {
        return r(o).default
      }
    });
    var u = n(720);
    Object.defineProperty(t, "interpolateBasisClosed", {
      enumerable: !0,
      get: function () {
        return r(u).default
      }
    });
    var s = n(723);
    Object.defineProperty(t, "interpolateDate", {
      enumerable: !0,
      get: function () {
        return r(s).default
      }
    });
    var l = n(312);
    Object.defineProperty(t, "interpolateNumber", {
      enumerable: !0,
      get: function () {
        return r(l).default
      }
    });
    var c = n(724);
    Object.defineProperty(t, "interpolateObject", {
      enumerable: !0,
      get: function () {
        return r(c).default
      }
    });
    var f = n(1530);
    Object.defineProperty(t, "interpolateRound", {
      enumerable: !0,
      get: function () {
        return r(f).default
      }
    });
    var d = n(725);
    Object.defineProperty(t, "interpolateString", {
      enumerable: !0,
      get: function () {
        return r(d).default
      }
    });
    var h = n(1531);
    Object.defineProperty(t, "interpolateTransformCss", {
      enumerable: !0,
      get: function () {
        return h.interpolateTransformCss
      }
    }),
      Object.defineProperty(t, "interpolateTransformSvg", {
        enumerable: !0,
        get: function () {
          return h.interpolateTransformSvg
        }
      });
    var p = n(1534);
    Object.defineProperty(t, "interpolateZoom", {
      enumerable: !0,
      get: function () {
        return r(p).default
      }
    });
    var v = n(719);
    Object.defineProperty(t, "interpolateRgb", {
      enumerable: !0,
      get: function () {
        return r(v).default
      }
    }),
      Object.defineProperty(t, "interpolateRgbBasis", {
        enumerable: !0,
        get: function () {
          return v.rgbBasis
        }
      }),
      Object.defineProperty(t, "interpolateRgbBasisClosed", {
        enumerable: !0,
        get: function () {
          return v.rgbBasisClosed
        }
      });
    var y = n(1535);
    Object.defineProperty(t, "interpolateHsl", {
      enumerable: !0,
      get: function () {
        return r(y).default
      }
    }),
      Object.defineProperty(t, "interpolateHslLong", {
        enumerable: !0,
        get: function () {
          return y.hslLong
        }
      });
    var m = n(1536);
    Object.defineProperty(t, "interpolateLab", {
      enumerable: !0,
      get: function () {
        return r(m).default
      }
    });
    var g = n(1537);
    Object.defineProperty(t, "interpolateHcl", {
      enumerable: !0,
      get: function () {
        return r(g).default
      }
    }),
      Object.defineProperty(t, "interpolateHclLong", {
        enumerable: !0,
        get: function () {
          return g.hclLong
        }
      });
    var b = n(1538);
    Object.defineProperty(t, "interpolateCubehelix", {
      enumerable: !0,
      get: function () {
        return r(b).default
      }
    }),
      Object.defineProperty(t, "interpolateCubehelixLong", {
        enumerable: !0,
        get: function () {
          return b.cubehelixLong
        }
      });
    var _ = n(1539);
    Object.defineProperty(t, "quantize", {
      enumerable: !0,
      get: function () {
        return r(_).default
      }
    })
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n = a(e, t);
      if (n.state > f)
        throw new Error("too late; already scheduled");
      return n
    }
    function i(e, t) {
      var n = a(e, t);
      if (n.state > h)
        throw new Error("too late; already started");
      return n
    }
    function a(e, t) {
      var n = e.__transition;
      if (!n || !(n = n[t]))
        throw new Error("transition not found");
      return n
    }
    function o(e, t, n) {
      function r(e) {
        n.state = d,
          n.timer.restart(i, n.delay, n.time),
          n.delay <= e && i(e - n.delay)
      }
      function i(r) {
        var c, f, y, g;
        if (n.state !== d)
          return o();
        for (c in l)
          if (g = l[c],
            g.name === n.name) {
            if (g.state === p)
              return (0,
                s.timeout)(i);
            g.state === v ? (g.state = m,
              g.timer.stop(),
              g.on.call("interrupt", e, e.__data__, g.index, g.group),
              delete l[c]) : +c < t && (g.state = m,
                g.timer.stop(),
                delete l[c])
          }
        if ((0,
          s.timeout)(function () {
            n.state === p && (n.state = v,
              n.timer.restart(a, n.delay, n.time),
              a(r))
          }),
          n.state = h,
          n.on.call("start", e, e.__data__, n.index, n.group),
          n.state === h) {
          for (n.state = p,
            u = new Array(y = n.tween.length),
            c = 0,
            f = -1; c < y; ++c)
            (g = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (u[++f] = g);
          u.length = f + 1
        }
      }
      function a(t) {
        for (var r = t < n.duration ? n.ease.call(null, t / n.duration) : (n.timer.restart(o),
          n.state = y,
          1), i = -1, a = u.length; ++i < a;)
          u[i].call(null, r);
        n.state === y && (n.on.call("end", e, e.__data__, n.index, n.group),
          o())
      }
      function o() {
        n.state = m,
          n.timer.stop(),
          delete l[t];
        for (var r in l)
          return;
        delete e.__transition
      }
      var u, l = e.__transition;
      l[t] = n,
        n.timer = (0,
          s.timer)(r, 0, n.time)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.ENDED = t.ENDING = t.RUNNING = t.STARTED = t.STARTING = t.SCHEDULED = t.CREATED = void 0,
      t.default = function (e, t, n, r, i, a) {
        var u = e.__transition;
        if (u) {
          if (n in u)
            return
        } else
          e.__transition = {};
        o(e, n, {
          name: t,
          index: r,
          group: i,
          on: l,
          tween: c,
          time: a.time,
          delay: a.delay,
          duration: a.duration,
          ease: a.ease,
          timer: null,
          state: f
        })
      }
      ,
      t.init = r,
      t.set = i,
      t.get = a;
    var u = n(168)
      , s = n(314)
      , l = (0,
        u.dispatch)("start", "end", "interrupt")
      , c = []
      , f = t.CREATED = 0
      , d = t.SCHEDULED = 1
      , h = t.STARTING = 2
      , p = t.STARTED = 3
      , v = t.RUNNING = 4
      , y = t.ENDING = 5
      , m = t.ENDED = 6
  }
  , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(405);
    Object.defineProperty(t, "color", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    }),
      Object.defineProperty(t, "rgb", {
        enumerable: !0,
        get: function () {
          return i.rgb
        }
      }),
      Object.defineProperty(t, "hsl", {
        enumerable: !0,
        get: function () {
          return i.hsl
        }
      });
    var a = n(1528);
    Object.defineProperty(t, "lab", {
      enumerable: !0,
      get: function () {
        return r(a).default
      }
    }),
      Object.defineProperty(t, "hcl", {
        enumerable: !0,
        get: function () {
          return a.hcl
        }
      });
    var o = n(1529);
    Object.defineProperty(t, "cubehelix", {
      enumerable: !0,
      get: function () {
        return r(o).default
      }
    })
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e) {
      return (0,
        b.transformer)({
          point: function (t, n) {
            var r = e(t, n);
            return this.stream.point(r[0], r[1])
          }
        })
    }
    function a(e) {
      return o(function () {
        return e
      })()
    }
    function o(e) {
      function t(e) {
        return e = v(e[0] * m.radians, e[1] * m.radians),
          [e[0] * j + l, f - e[1] * j]
      }
      function n(e) {
        return (e = v.invert((e[0] - l) / j, (f - e[1]) / j)) && [e[0] * m.degrees, e[1] * m.degrees]
      }
      function r(e, t) {
        return e = u(e, t),
          [e[0] * j + l, f - e[1] * j]
      }
      function a() {
        v = (0,
          p.default)(h = (0,
            g.rotateRadians)(N, D, A), u);
        var e = u(C, T);
        return l = S - e[0] * j,
          f = k + e[1] * j,
          o()
      }
      function o() {
        return O = E = null,
          t
      }
      var u, l, f, h, v, b, x, M, O, E, j = 150, S = 480, k = 250, C = 0, T = 0, N = 0, D = 0, A = 0, L = null, I = s.default, R = null, B = y.default, V = .5, z = (0,
        w.default)(r, V);
      return t.stream = function (e) {
        return O && E === e ? O : O = P(i(h)(I(z(B(E = e)))))
      }
        ,
        t.preclip = function (e) {
          return arguments.length ? (I = e,
            L = void 0,
            o()) : I
        }
        ,
        t.postclip = function (e) {
          return arguments.length ? (B = e,
            R = b = x = M = null,
            o()) : B
        }
        ,
        t.clipAngle = function (e) {
          return arguments.length ? (I = +e ? (0,
            c.default)(L = e * m.radians) : (L = null,
              s.default),
            o()) : L * m.degrees
        }
        ,
        t.clipExtent = function (e) {
          return arguments.length ? (B = null == e ? (R = b = x = M = null,
            y.default) : (0,
              d.default)(R = +e[0][0], b = +e[0][1], x = +e[1][0], M = +e[1][1]),
            o()) : null == R ? null : [[R, b], [x, M]]
        }
        ,
        t.scale = function (e) {
          return arguments.length ? (j = +e,
            a()) : j
        }
        ,
        t.translate = function (e) {
          return arguments.length ? (S = +e[0],
            k = +e[1],
            a()) : [S, k]
        }
        ,
        t.center = function (e) {
          return arguments.length ? (C = e[0] % 360 * m.radians,
            T = e[1] % 360 * m.radians,
            a()) : [C * m.degrees, T * m.degrees]
        }
        ,
        t.rotate = function (e) {
          return arguments.length ? (N = e[0] % 360 * m.radians,
            D = e[1] % 360 * m.radians,
            A = e.length > 2 ? e[2] % 360 * m.radians : 0,
            a()) : [N * m.degrees, D * m.degrees, A * m.degrees]
        }
        ,
        t.precision = function (e) {
          return arguments.length ? (z = (0,
            w.default)(r, V = e * e),
            o()) : (0,
              m.sqrt)(V)
        }
        ,
        t.fitExtent = function (e, n) {
          return (0,
            _.fitExtent)(t, e, n)
        }
        ,
        t.fitSize = function (e, n) {
          return (0,
            _.fitSize)(t, e, n)
        }
        ,
        t.fitWidth = function (e, n) {
          return (0,
            _.fitWidth)(t, e, n)
        }
        ,
        t.fitHeight = function (e, n) {
          return (0,
            _.fitHeight)(t, e, n)
        }
        ,
        function () {
          return u = e.apply(this, arguments),
            t.invert = u.invert && n,
            a()
        }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = a,
      t.projectionMutator = o;
    var u = n(738)
      , s = r(u)
      , l = n(744)
      , c = r(l)
      , f = n(317)
      , d = r(f)
      , h = n(737)
      , p = r(h)
      , v = n(418)
      , y = r(v)
      , m = n(31)
      , g = n(316)
      , b = n(318)
      , _ = n(421)
      , x = n(1633)
      , w = r(x)
      , P = (0,
        b.transformer)({
          point: function (e, t) {
            this.stream.point(e * m.radians, t * m.radians)
          }
        })
  }
  , , , , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.durationSecond = 1e3,
      t.durationMinute = 6e4,
      t.durationHour = 36e5,
      t.durationDay = 864e5,
      t.durationWeek = 6048e5
  }
  , , , , , , , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e, t, n, r) {
      this._groups = e,
        this._parents = t,
        this._name = n,
        this._id = r
    }
    function a(e) {
      return (0,
        u.selection)().transition(e)
    }
    function o() {
      return ++q
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.Transition = i,
      t.default = a,
      t.newId = o;
    var u = n(62)
      , s = n(1540)
      , l = r(s)
      , c = n(1543)
      , f = r(c)
      , d = n(1544)
      , h = r(d)
      , p = n(1545)
      , v = r(p)
      , y = n(1546)
      , m = r(y)
      , g = n(1547)
      , b = r(g)
      , _ = n(1548)
      , x = r(_)
      , w = n(1549)
      , P = r(w)
      , M = n(1550)
      , O = r(M)
      , E = n(1551)
      , j = r(E)
      , S = n(1552)
      , k = r(S)
      , C = n(1553)
      , T = r(C)
      , N = n(1554)
      , D = r(N)
      , A = n(1555)
      , L = r(A)
      , I = n(1556)
      , R = r(I)
      , B = n(1557)
      , V = r(B)
      , z = n(313)
      , F = r(z)
      , q = 0
      , Y = u.selection.prototype;
    i.prototype = a.prototype = {
      constructor: i,
      select: j.default,
      selectAll: k.default,
      filter: b.default,
      merge: x.default,
      selection: T.default,
      transition: V.default,
      call: Y.call,
      nodes: Y.nodes,
      node: Y.node,
      size: Y.size,
      empty: Y.empty,
      each: Y.each,
      on: P.default,
      attr: l.default,
      attrTween: f.default,
      style: D.default,
      styleTween: L.default,
      text: R.default,
      remove: O.default,
      tween: F.default,
      delay: h.default,
      duration: v.default,
      ease: m.default
    }
  }
  , function (e, t, n) {
    "use strict";
    function r() { }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = r,
      e.exports = t.default
  }
  , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(1490);
    Object.defineProperty(t, "dispatch", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    })
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(1580);
    Object.defineProperty(t, "path", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    })
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      e && u.hasOwnProperty(e.type) && u[e.type](e, t)
    }
    function i(e, t, n) {
      var r, i = -1, a = e.length - n;
      for (t.lineStart(); ++i < a;)
        r = e[i],
          t.point(r[0], r[1], r[2]);
      t.lineEnd()
    }
    function a(e, t) {
      var n = -1
        , r = e.length;
      for (t.polygonStart(); ++n < r;)
        i(e[n], t, 1);
      t.polygonEnd()
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        e && o.hasOwnProperty(e.type) ? o[e.type](e, t) : r(e, t)
      }
      ;
    var o = {
      Feature: function (e, t) {
        r(e.geometry, t)
      },
      FeatureCollection: function (e, t) {
        for (var n = e.features, i = -1, a = n.length; ++i < a;)
          r(n[i].geometry, t)
      }
    }
      , u = {
        Sphere: function (e, t) {
          t.sphere()
        },
        Point: function (e, t) {
          e = e.coordinates,
            t.point(e[0], e[1], e[2])
        },
        MultiPoint: function (e, t) {
          for (var n = e.coordinates, r = -1, i = n.length; ++r < i;)
            e = n[r],
              t.point(e[0], e[1], e[2])
        },
        LineString: function (e, t) {
          i(e.coordinates, t, 0)
        },
        MultiLineString: function (e, t) {
          for (var n = e.coordinates, r = -1, a = n.length; ++r < a;)
            i(n[r], t, 0)
        },
        Polygon: function (e, t) {
          a(e.coordinates, t)
        },
        MultiPolygon: function (e, t) {
          for (var n = e.coordinates, r = -1, i = n.length; ++r < i;)
            a(n[r], t)
        },
        GeometryCollection: function (e, t) {
          for (var n = e.geometries, i = -1, a = n.length; ++i < a;)
            r(n[i], t)
        }
      };
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = Array.prototype;
    t.map = r.map,
      t.slice = r.slice
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return function () {
          return e
        }
      }
      ,
      e.exports = t.default
  }
  , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return function () {
          return e
        }
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      this.reset()
    }
    function i(e, t, n) {
      var r = e.s = t + n
        , i = r - t
        , a = r - i;
      e.t = t - a + (n - i)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        return new r
      }
      ,
      r.prototype = {
        constructor: r,
        reset: function () {
          this.s = this.t = 0
        },
        add: function (e) {
          i(a, e, this.t),
            i(this, a.s, this.s),
            this.s ? this.t += a.t : this.s = a.t
        },
        valueOf: function () {
          return this.s
        }
      };
    var a = new r;
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        return Math.random()
      }
      ,
      e.exports = t.default
  }
  , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return null === e ? NaN : +e
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      return function (n) {
        return e + n * t
      }
    }
    function i(e, t, n) {
      return e = Math.pow(e, n),
        t = Math.pow(t, n) - e,
        n = 1 / n,
        function (r) {
          return Math.pow(e + r * t, n)
        }
    }
    function a(e, t) {
      var n = t - e;
      return n ? r(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : (0,
        l.default)(isNaN(e) ? t : e)
    }
    function o(e) {
      return 1 == (e = +e) ? u : function (t, n) {
        return n - t ? i(t, n, e) : (0,
          l.default)(isNaN(t) ? n : t)
      }
    }
    function u(e, t) {
      var n = t - e;
      return n ? r(e, n) : (0,
        l.default)(isNaN(e) ? t : e)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.hue = a,
      t.gamma = o,
      t.default = u;
    var s = n(721)
      , l = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(s)
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(1581);
    Object.defineProperty(t, "nest", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    });
    var a = n(1582);
    Object.defineProperty(t, "set", {
      enumerable: !0,
      get: function () {
        return r(a).default
      }
    });
    var o = n(410);
    Object.defineProperty(t, "map", {
      enumerable: !0,
      get: function () {
        return r(o).default
      }
    });
    var u = n(1583);
    Object.defineProperty(t, "keys", {
      enumerable: !0,
      get: function () {
        return r(u).default
      }
    });
    var s = n(1584);
    Object.defineProperty(t, "values", {
      enumerable: !0,
      get: function () {
        return r(s).default
      }
    });
    var l = n(1585);
    Object.defineProperty(t, "entries", {
      enumerable: !0,
      get: function () {
        return r(l).default
      }
    })
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return [(0,
        c.atan2)(e[1], e[0]), (0,
          c.asin)(e[2])]
    }
    function i(e) {
      var t = e[0]
        , n = e[1]
        , r = (0,
          c.cos)(n);
      return [r * (0,
        c.cos)(t), r * (0,
          c.sin)(t), (0,
            c.sin)(n)]
    }
    function a(e, t) {
      return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
    }
    function o(e, t) {
      return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
    }
    function u(e, t) {
      e[0] += t[0],
        e[1] += t[1],
        e[2] += t[2]
    }
    function s(e, t) {
      return [e[0] * t, e[1] * t, e[2] * t]
    }
    function l(e) {
      var t = (0,
        c.sqrt)(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
      e[0] /= t,
        e[1] /= t,
        e[2] /= t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.spherical = r,
      t.cartesian = i,
      t.cartesianDot = a,
      t.cartesianCross = o,
      t.cartesianAddInPlace = u,
      t.cartesianScale = s,
      t.cartesianNormalizeInPlace = l;
    var c = n(31)
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return function (t, n) {
        var r = (0,
          a.cos)(t)
          , i = (0,
            a.cos)(n)
          , o = e(r * i);
        return [o * i * (0,
          a.sin)(t), o * (0,
            a.sin)(n)]
      }
    }
    function i(e) {
      return function (t, n) {
        var r = (0,
          a.sqrt)(t * t + n * n)
          , i = e(r)
          , o = (0,
            a.sin)(i)
          , u = (0,
            a.cos)(i);
        return [(0,
          a.atan2)(t * o, r * u), (0,
            a.asin)(r && n * o / r)]
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.azimuthalRaw = r,
      t.azimuthalInvert = i;
    var a = n(31)
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n, r, i) {
        for (var a, o = e.children, u = -1, s = o.length, l = e.value && (r - t) / e.value; ++u < s;)
          a = o[u],
            a.y0 = n,
            a.y1 = i,
            a.x0 = t,
            a.x1 = t += a.value * l
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e) {
      var t = e.domain;
      return e.ticks = function (e) {
        var n = t();
        return (0,
          o.ticks)(n[0], n[n.length - 1], null == e ? 10 : e)
      }
        ,
        e.tickFormat = function (e, n) {
          return (0,
            f.default)(t(), e, n)
        }
        ,
        e.nice = function (n) {
          null == n && (n = 10);
          var r, i = t(), a = 0, u = i.length - 1, s = i[a], l = i[u];
          return l < s && (r = s,
            s = l,
            l = r,
            r = a,
            a = u,
            u = r),
            r = (0,
              o.tickIncrement)(s, l, n),
            r > 0 ? (s = Math.floor(s / r) * r,
              l = Math.ceil(l / r) * r,
              r = (0,
                o.tickIncrement)(s, l, n)) : r < 0 && (s = Math.ceil(s * r) / r,
                  l = Math.floor(l * r) / r,
                  r = (0,
                    o.tickIncrement)(s, l, n)),
            r > 0 ? (i[a] = Math.floor(s / r) * r,
              i[u] = Math.ceil(l / r) * r,
              t(i)) : r < 0 && (i[a] = Math.ceil(s * r) / r,
                i[u] = Math.floor(l * r) / r,
                t(i)),
            e
        }
        ,
        e
    }
    function a() {
      var e = (0,
        l.default)(s.deinterpolateLinear, u.interpolateNumber);
      return e.copy = function () {
        return (0,
          s.copy)(e, a())
      }
        ,
        i(e)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.linearish = i,
      t.default = a;
    var o = n(84)
      , u = n(112)
      , s = n(321)
      , l = r(s)
      , c = n(1693)
      , f = r(c)
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return e.match(/.{6}/g).map(function (e) {
          return "#" + e
        })
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e > 1 ? 0 : e < -1 ? a : Math.acos(e)
    }
    function i(e) {
      return e >= 1 ? o : e <= -1 ? -o : Math.asin(e)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.acos = r,
      t.asin = i;
    var a = (t.abs = Math.abs,
      t.atan2 = Math.atan2,
      t.cos = Math.cos,
      t.max = Math.max,
      t.min = Math.min,
      t.sin = Math.sin,
      t.sqrt = Math.sqrt,
      t.epsilon = 1e-12,
      t.pi = Math.PI)
      , o = t.halfPi = a / 2;
    t.tau = 2 * a
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        if ((i = e.length) > 1)
          for (var n, r, i, a = 1, o = e[t[0]], u = o.length; a < i; ++a)
            for (r = o,
              o = e[t[a]],
              n = 0; n < u; ++n)
              o[n][1] += o[n][0] = isNaN(r[n][1]) ? r[n][0] : r[n][1]
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        for (var t = e.length, n = new Array(t); --t >= 0;)
          n[t] = t;
        return n
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      return (e[0] - n[0]) * (t[1] - e[1]) - (e[0] - t[0]) * (n[1] - e[1])
    }
    function i(e, t) {
      return t[1] - e[1] || t[0] - e[0]
    }
    function a(e, n) {
      var r, a, c, y = e.sort(i).pop();
      for (t.edges = v = [],
        t.cells = h = new Array(e.length),
        t.beaches = d = new f.default,
        t.circles = p = new f.default; ;)
        if (c = s.firstCircle,
          y && (!c || y[1] < c.y || y[1] === c.y && y[0] < c.x))
          y[0] === r && y[1] === a || ((0,
            o.addBeach)(y),
            r = y[0],
            a = y[1]),
            y = e.pop();
        else {
          if (!c)
            break;
          (0,
            o.removeBeach)(c.arc)
        }
      if ((0,
        u.sortCellHalfedges)(),
        n) {
        var m = +n[0][0]
          , g = +n[0][1]
          , b = +n[1][0]
          , _ = +n[1][1];
        (0,
          l.clipEdges)(m, g, b, _),
          (0,
            u.clipCells)(m, g, b, _)
      }
      this.edges = v,
        this.cells = h,
        t.beaches = d = t.circles = p = t.edges = v = t.cells = h = null
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.edges = t.circles = t.cells = t.beaches = t.epsilon2 = t.epsilon = void 0,
      t.default = a;
    var o = n(1752)
      , u = n(777)
      , s = n(778)
      , l = n(435)
      , c = n(434)
      , f = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(c)
      , d = (t.epsilon = 1e-6,
        t.epsilon2 = 1e-12,
        t.beaches = void 0)
      , h = t.cells = void 0
      , p = t.circles = void 0
      , v = t.edges = void 0;
    a.prototype = {
      constructor: a,
      polygons: function () {
        var e = this.edges;
        return this.cells.map(function (t) {
          var n = t.halfedges.map(function (n) {
            return (0,
              u.cellHalfedgeStart)(t, e[n])
          });
          return n.data = t.site.data,
            n
        })
      },
      triangles: function () {
        var e = []
          , t = this.edges;
        return this.cells.forEach(function (n, i) {
          if (o = (a = n.halfedges).length)
            for (var a, o, u, s = n.site, l = -1, c = t[a[o - 1]], f = c.left === s ? c.right : c.left; ++l < o;)
              u = f,
                c = t[a[l]],
                f = c.left === s ? c.right : c.left,
                u && f && i < u.index && i < f.index && r(s, u, f) < 0 && e.push([s.data, u.data, f.data])
        }),
          e
      },
      links: function () {
        return this.edges.filter(function (e) {
          return e.right
        }).map(function (e) {
          return {
            source: e.left.data,
            target: e.right.data
          }
        })
      },
      find: function (e, t, n) {
        for (var r, i, a = this, o = a._found || 0, u = a.cells.length; !(i = a.cells[o]);)
          if (++o >= u)
            return null;
        var s = e - i.site[0]
          , l = t - i.site[1]
          , c = s * s + l * l;
        do {
          i = a.cells[r = o],
            o = null,
            i.halfedges.forEach(function (n) {
              var r = a.edges[n]
                , u = r.left;
              if (u !== i.site && u || (u = r.right)) {
                var s = e - u[0]
                  , l = t - u[1]
                  , f = s * s + l * l;
                f < c && (c = f,
                  o = u.index)
              }
            })
        } while (null !== o); return a._found = r,
          null == n || c <= n * n ? i.site : null
      }
    }
  }
  , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(29)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r)
      , a = function (e, t) {
        var n = e.eid;
        return (0,
          i.default)(t).post("/api/chart/getNetworkData", {
            eid: n
          })
      }
      , o = function (e, t) {
        var n = e.currentEid
          , r = e.targetEid;
        return (0,
          i.default)(t).post("/api/chart/getCourtNoticeList", {
            currentEid: n,
            targetEid: r
          })
      }
      , u = function (e, t) {
        var n = e.currentEid
          , r = e.targetEid;
        return (0,
          i.default)(t).post("/api/chart/getLawsList", {
            currentEid: n,
            targetEid: r
          })
      }
      , s = function (e, t) {
        var n = e.eid;
        return (0,
          i.default)(t).post("/api/chart/getEntBasicInfo", {
            eid: n
          })
      }
      , l = function (e, t) {
        var n = e.eid;
        return (0,
          i.default)(t).post("/api/chart/getEntInfo", {
            eid: n
          })
      }
      , c = function (e, t) {
        var n = e.eid;
        return (0,
          i.default)(t).post("/api/chart/getActualOwnerByEid", {
            eid: n
          }, {
              showError: !1
            })
      }
      , f = function (e, t) {
        var n = e.eid;
        return (0,
          i.default)(t).post("/api/chart/getEquityStructureData", {
            eid: n
          }, {
              showError: !1
            })
      };
    t.default = {
      getNetworkData: a,
      getCourtNoticeList: o,
      getLawsList: u,
      getEntBasicInfo: s,
      getEntInfo: l,
      getActualOwnerByEid: c,
      getEquityStructureData: f
    },
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return function () {
        var t = this.ownerDocument
          , n = this.namespaceURI;
        return n === u.xhtml && t.documentElement.namespaceURI === u.xhtml ? t.createElement(e) : t.createElementNS(n, e)
      }
    }
    function i(e) {
      return function () {
        return this.ownerDocument.createElementNS(e.space, e.local)
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        var t = (0,
          o.default)(e);
        return (t.local ? i : r)(t)
      }
      ;
    var a = n(398)
      , o = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(a)
      , u = n(399);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n = e.ownerSVGElement || e;
        if (n.createSVGPoint) {
          var r = n.createSVGPoint();
          return r.x = t.clientX,
            r.y = t.clientY,
            r = r.matrixTransform(e.getScreenCTM().inverse()),
            [r.x, r.y]
        }
        var i = e.getBoundingClientRect();
        return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop]
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        return e = +e,
          t -= e,
          function (n) {
            return e + t * n
          }
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n, r;
      return function () {
        var i = (0,
          o.set)(this, e)
          , a = i.tween;
        if (a !== n) {
          r = n = a;
          for (var u = 0, s = r.length; u < s; ++u)
            if (r[u].name === t) {
              r = r.slice(),
                r.splice(u, 1);
              break
            }
        }
        i.tween = r
      }
    }
    function i(e, t, n) {
      var r, i;
      if ("function" != typeof n)
        throw new Error;
      return function () {
        var a = (0,
          o.set)(this, e)
          , u = a.tween;
        if (u !== r) {
          i = (r = u).slice();
          for (var s = {
            name: t,
            value: n
          }, l = 0, c = i.length; l < c; ++l)
            if (i[l].name === t) {
              i[l] = s;
              break
            }
          l === c && i.push(s)
        }
        a.tween = i
      }
    }
    function a(e, t, n) {
      var r = e._id;
      return e.each(function () {
        var e = (0,
          o.set)(this, r);
        (e.value || (e.value = {}))[t] = n.apply(this, arguments)
      }),
        function (e) {
          return (0,
            o.get)(e, r).value[t]
        }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n = this._id;
        if (e += "",
          arguments.length < 2) {
          for (var a, u = (0,
            o.get)(this.node(), n).tween, s = 0, l = u.length; s < l; ++s)
            if ((a = u[s]).name === e)
              return a.value;
          return null
        }
        return this.each((null == t ? r : i)(n, e, t))
      }
      ,
      t.tweenValue = a;
    var o = n(113)
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(409);
    Object.defineProperty(t, "now", {
      enumerable: !0,
      get: function () {
        return i.now
      }
    }),
      Object.defineProperty(t, "timer", {
        enumerable: !0,
        get: function () {
          return i.timer
        }
      }),
      Object.defineProperty(t, "timerFlush", {
        enumerable: !0,
        get: function () {
          return i.timerFlush
        }
      });
    var a = n(1541);
    Object.defineProperty(t, "timeout", {
      enumerable: !0,
      get: function () {
        return r(a).default
      }
    });
    var o = n(1542);
    Object.defineProperty(t, "interval", {
      enumerable: !0,
      get: function () {
        return r(o).default
      }
    })
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return e = (0,
          i.default)(Math.abs(e)),
          e ? e[1] : NaN
      }
      ;
    var r = n(417)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      return [e > c.pi ? e - c.tau : e < -c.pi ? e + c.tau : e, t]
    }
    function i(e, t, n) {
      return (e %= c.tau) ? t || n ? (0,
        l.default)(o(e), u(t, n)) : o(e) : t || n ? u(t, n) : r
    }
    function a(e) {
      return function (t, n) {
        return t += e,
          [t > c.pi ? t - c.tau : t < -c.pi ? t + c.tau : t, n]
      }
    }
    function o(e) {
      var t = a(e);
      return t.invert = a(-e),
        t
    }
    function u(e, t) {
      function n(e, t) {
        var n = (0,
          c.cos)(t)
          , u = (0,
            c.cos)(e) * n
          , s = (0,
            c.sin)(e) * n
          , l = (0,
            c.sin)(t)
          , f = l * r + u * i;
        return [(0,
          c.atan2)(s * a - f * o, u * r - l * i), (0,
            c.asin)(f * a + s * o)]
      }
      var r = (0,
        c.cos)(e)
        , i = (0,
          c.sin)(e)
        , a = (0,
          c.cos)(t)
        , o = (0,
          c.sin)(t);
      return n.invert = function (e, t) {
        var n = (0,
          c.cos)(t)
          , u = (0,
            c.cos)(e) * n
          , s = (0,
            c.sin)(e) * n
          , l = (0,
            c.sin)(t)
          , f = l * a - s * o;
        return [(0,
          c.atan2)(s * a + l * o, u * r + f * i), (0,
            c.asin)(f * r - u * i)]
      }
        ,
        n
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.rotateRadians = i,
      t.default = function (e) {
        function t(t) {
          return t = e(t[0] * c.radians, t[1] * c.radians),
            t[0] *= c.degrees,
            t[1] *= c.degrees,
            t
        }
        return e = i(e[0] * c.radians, e[1] * c.radians, e.length > 2 ? e[2] * c.radians : 0),
          t.invert = function (t) {
            return t = e.invert(t[0] * c.radians, t[1] * c.radians),
              t[0] *= c.degrees,
              t[1] *= c.degrees,
              t
          }
          ,
          t
      }
      ;
    var s = n(737)
      , l = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(s)
      , c = n(31);
    r.invert = r
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e, t, n, r) {
      function i(i, a) {
        return e <= i && i <= n && t <= a && a <= r
      }
      function o(i, a, o, u) {
        var l = 0
          , c = 0;
        if (null == i || (l = s(i, o)) !== (c = s(a, o)) || v(i, a) < 0 ^ o > 0)
          do {
            u.point(0 === l || 3 === l ? e : n, l > 1 ? r : t)
          } while ((l = (l + o + 4) % 4) !== c);
        else
          u.point(a[0], a[1])
      }
      function s(r, i) {
        return (0,
          a.abs)(r[0] - e) < a.epsilon ? i > 0 ? 0 : 3 : (0,
            a.abs)(r[0] - n) < a.epsilon ? i > 0 ? 2 : 1 : (0,
              a.abs)(r[1] - t) < a.epsilon ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
      }
      function c(e, t) {
        return v(e.x, t.x)
      }
      function v(e, t) {
        var n = s(e, 1)
          , r = s(t, 1);
        return n !== r ? n - r : 0 === n ? t[1] - e[1] : 1 === n ? e[0] - t[0] : 2 === n ? e[1] - t[1] : t[0] - e[0]
      }
      return function (a) {
        function s(e, t) {
          i(e, t) && N.point(e, t)
        }
        function v() {
          for (var t = 0, n = 0, i = w.length; n < i; ++n)
            for (var a, o, u = w[n], s = 1, l = u.length, c = u[0], f = c[0], d = c[1]; s < l; ++s)
              a = f,
                o = d,
                c = u[s],
                f = c[0],
                d = c[1],
                o <= r ? d > r && (f - a) * (r - o) > (d - o) * (e - a) && ++t : d <= r && (f - a) * (r - o) < (d - o) * (e - a) && --t;
          return t
        }
        function y() {
          N = D,
            x = [],
            w = [],
            T = !0
        }
        function m() {
          var e = v()
            , t = T && e
            , n = (x = (0,
              d.merge)(x)).length;
          (t || n) && (a.polygonStart(),
            t && (a.lineStart(),
              o(null, null, 1, a),
              a.lineEnd()),
            n && (0,
              f.default)(x, c, e, o, a),
            a.polygonEnd()),
            N = a,
            x = w = P = null
        }
        function g() {
          A.point = _,
            w && w.push(P = []),
            C = !0,
            k = !1,
            j = S = NaN
        }
        function b() {
          x && (_(M, O),
            E && k && D.rejoin(),
            x.push(D.result())),
            A.point = s,
            k && N.lineEnd()
        }
        function _(a, o) {
          var u = i(a, o);
          if (w && P.push([a, o]),
            C)
            M = a,
              O = o,
              E = u,
              C = !1,
              u && (N.lineStart(),
                N.point(a, o));
          else if (u && k)
            N.point(a, o);
          else {
            var s = [j = Math.max(p, Math.min(h, j)), S = Math.max(p, Math.min(h, S))]
              , c = [a = Math.max(p, Math.min(h, a)), o = Math.max(p, Math.min(h, o))];
            (0,
              l.default)(s, c, e, t, n, r) ? (k || (N.lineStart(),
                N.point(s[0], s[1])),
                N.point(c[0], c[1]),
                u || N.lineEnd(),
                T = !1) : u && (N.lineStart(),
                  N.point(a, o),
                  T = !1)
          }
          j = a,
            S = o,
            k = u
        }
        var x, w, P, M, O, E, j, S, k, C, T, N = a, D = (0,
          u.default)(), A = {
            point: s,
            lineStart: g,
            lineEnd: b,
            polygonStart: y,
            polygonEnd: m
          };
        return A
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = i;
    var a = n(31)
      , o = n(740)
      , u = r(o)
      , s = n(1623)
      , l = r(s)
      , c = n(741)
      , f = r(c)
      , d = n(84)
      , h = 1e9
      , p = -h;
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return function (t) {
        var n = new i;
        for (var r in e)
          n[r] = e[r];
        return n.stream = t,
          n
      }
    }
    function i() { }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return {
          stream: r(e)
        }
      }
      ,
      t.transformer = r,
      i.prototype = {
        constructor: i,
        point: function (e, t) {
          this.stream.point(e, t)
        },
        sphere: function () {
          this.stream.sphere()
        },
        lineStart: function () {
          this.stream.lineStart()
        },
        lineEnd: function () {
          this.stream.lineEnd()
        },
        polygonStart: function () {
          this.stream.polygonStart()
        },
        polygonEnd: function () {
          this.stream.polygonEnd()
        }
      }
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n, r, i) {
        for (var a, o = e.children, u = -1, s = o.length, l = e.value && (i - n) / e.value; ++u < s;)
          a = o[u],
            a.x0 = t,
            a.x1 = r,
            a.y0 = n,
            a.y1 = n += a.value * l
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        return function (n, r) {
          var a = (0,
            i.default)(n).mimeType(e).response(t);
          if (null != r) {
            if ("function" != typeof r)
              throw new Error("invalid callback: " + r);
            return a.get(r)
          }
          return a
        }
      }
      ;
    var r = n(426)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e, t) {
      return (t -= e = +e) ? function (n) {
        return (n - e) / t
      }
        : (0,
          v.default)(t)
    }
    function a(e) {
      return function (t, n) {
        var r = e(t = +t, n = +n);
        return function (e) {
          return e <= t ? 0 : e >= n ? 1 : r(e)
        }
      }
    }
    function o(e) {
      return function (t, n) {
        var r = e(t = +t, n = +n);
        return function (e) {
          return e <= 0 ? t : e >= 1 ? n : r(e)
        }
      }
    }
    function u(e, t, n, r) {
      var i = e[0]
        , a = e[1]
        , o = t[0]
        , u = t[1];
      return a < i ? (i = n(a, i),
        o = r(u, o)) : (i = n(i, a),
          o = r(o, u)),
        function (e) {
          return o(i(e))
        }
    }
    function s(e, t, n, r) {
      var i = Math.min(e.length, t.length) - 1
        , a = new Array(i)
        , o = new Array(i)
        , u = -1;
      for (e[i] < e[0] && (e = e.slice().reverse(),
        t = t.slice().reverse()); ++u < i;)
        a[u] = n(e[u], e[u + 1]),
          o[u] = r(t[u], t[u + 1]);
      return function (t) {
        var n = (0,
          f.bisect)(e, t, 1, i) - 1;
        return o[n](a[n](t))
      }
    }
    function l(e, t) {
      return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp())
    }
    function c(e, t) {
      function n() {
        return l = Math.min(p.length, v.length) > 2 ? s : u,
          c = f = null,
          r
      }
      function r(t) {
        return (c || (c = l(p, v, b ? a(e) : e, y)))(+t)
      }
      var l, c, f, p = g, v = g, y = d.interpolate, b = !1;
      return r.invert = function (e) {
        return (f || (f = l(v, p, i, b ? o(t) : t)))(+e)
      }
        ,
        r.domain = function (e) {
          return arguments.length ? (p = h.map.call(e, m.default),
            n()) : p.slice()
        }
        ,
        r.range = function (e) {
          return arguments.length ? (v = h.slice.call(e),
            n()) : v.slice()
        }
        ,
        r.rangeRound = function (e) {
          return v = h.slice.call(e),
            y = d.interpolateRound,
            n()
        }
        ,
        r.clamp = function (e) {
          return arguments.length ? (b = !!e,
            n()) : b
        }
        ,
        r.interpolate = function (e) {
          return arguments.length ? (y = e,
            n()) : y
        }
        ,
        n()
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.deinterpolateLinear = i,
      t.copy = l,
      t.default = c;
    var f = n(84)
      , d = n(112)
      , h = n(171)
      , p = n(427)
      , v = r(p)
      , y = n(758)
      , m = r(y)
      , g = [0, 1]
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(82);
    Object.defineProperty(t, "timeInterval", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    });
    var a = n(1699);
    Object.defineProperty(t, "timeMillisecond", {
      enumerable: !0,
      get: function () {
        return r(a).default
      }
    }),
      Object.defineProperty(t, "timeMilliseconds", {
        enumerable: !0,
        get: function () {
          return a.milliseconds
        }
      }),
      Object.defineProperty(t, "utcMillisecond", {
        enumerable: !0,
        get: function () {
          return r(a).default
        }
      }),
      Object.defineProperty(t, "utcMilliseconds", {
        enumerable: !0,
        get: function () {
          return a.milliseconds
        }
      });
    var o = n(1700);
    Object.defineProperty(t, "timeSecond", {
      enumerable: !0,
      get: function () {
        return r(o).default
      }
    }),
      Object.defineProperty(t, "timeSeconds", {
        enumerable: !0,
        get: function () {
          return o.seconds
        }
      }),
      Object.defineProperty(t, "utcSecond", {
        enumerable: !0,
        get: function () {
          return r(o).default
        }
      }),
      Object.defineProperty(t, "utcSeconds", {
        enumerable: !0,
        get: function () {
          return o.seconds
        }
      });
    var u = n(1701);
    Object.defineProperty(t, "timeMinute", {
      enumerable: !0,
      get: function () {
        return r(u).default
      }
    }),
      Object.defineProperty(t, "timeMinutes", {
        enumerable: !0,
        get: function () {
          return u.minutes
        }
      });
    var s = n(1702);
    Object.defineProperty(t, "timeHour", {
      enumerable: !0,
      get: function () {
        return r(s).default
      }
    }),
      Object.defineProperty(t, "timeHours", {
        enumerable: !0,
        get: function () {
          return s.hours
        }
      });
    var l = n(1703);
    Object.defineProperty(t, "timeDay", {
      enumerable: !0,
      get: function () {
        return r(l).default
      }
    }),
      Object.defineProperty(t, "timeDays", {
        enumerable: !0,
        get: function () {
          return l.days
        }
      });
    var c = n(1704);
    Object.defineProperty(t, "timeWeek", {
      enumerable: !0,
      get: function () {
        return c.sunday
      }
    }),
      Object.defineProperty(t, "timeWeeks", {
        enumerable: !0,
        get: function () {
          return c.sundays
        }
      }),
      Object.defineProperty(t, "timeSunday", {
        enumerable: !0,
        get: function () {
          return c.sunday
        }
      }),
      Object.defineProperty(t, "timeSundays", {
        enumerable: !0,
        get: function () {
          return c.sundays
        }
      }),
      Object.defineProperty(t, "timeMonday", {
        enumerable: !0,
        get: function () {
          return c.monday
        }
      }),
      Object.defineProperty(t, "timeMondays", {
        enumerable: !0,
        get: function () {
          return c.mondays
        }
      }),
      Object.defineProperty(t, "timeTuesday", {
        enumerable: !0,
        get: function () {
          return c.tuesday
        }
      }),
      Object.defineProperty(t, "timeTuesdays", {
        enumerable: !0,
        get: function () {
          return c.tuesdays
        }
      }),
      Object.defineProperty(t, "timeWednesday", {
        enumerable: !0,
        get: function () {
          return c.wednesday
        }
      }),
      Object.defineProperty(t, "timeWednesdays", {
        enumerable: !0,
        get: function () {
          return c.wednesdays
        }
      }),
      Object.defineProperty(t, "timeThursday", {
        enumerable: !0,
        get: function () {
          return c.thursday
        }
      }),
      Object.defineProperty(t, "timeThursdays", {
        enumerable: !0,
        get: function () {
          return c.thursdays
        }
      }),
      Object.defineProperty(t, "timeFriday", {
        enumerable: !0,
        get: function () {
          return c.friday
        }
      }),
      Object.defineProperty(t, "timeFridays", {
        enumerable: !0,
        get: function () {
          return c.fridays
        }
      }),
      Object.defineProperty(t, "timeSaturday", {
        enumerable: !0,
        get: function () {
          return c.saturday
        }
      }),
      Object.defineProperty(t, "timeSaturdays", {
        enumerable: !0,
        get: function () {
          return c.saturdays
        }
      });
    var f = n(1705);
    Object.defineProperty(t, "timeMonth", {
      enumerable: !0,
      get: function () {
        return r(f).default
      }
    }),
      Object.defineProperty(t, "timeMonths", {
        enumerable: !0,
        get: function () {
          return f.months
        }
      });
    var d = n(1706);
    Object.defineProperty(t, "timeYear", {
      enumerable: !0,
      get: function () {
        return r(d).default
      }
    }),
      Object.defineProperty(t, "timeYears", {
        enumerable: !0,
        get: function () {
          return d.years
        }
      });
    var h = n(1707);
    Object.defineProperty(t, "utcMinute", {
      enumerable: !0,
      get: function () {
        return r(h).default
      }
    }),
      Object.defineProperty(t, "utcMinutes", {
        enumerable: !0,
        get: function () {
          return h.utcMinutes
        }
      });
    var p = n(1708);
    Object.defineProperty(t, "utcHour", {
      enumerable: !0,
      get: function () {
        return r(p).default
      }
    }),
      Object.defineProperty(t, "utcHours", {
        enumerable: !0,
        get: function () {
          return p.utcHours
        }
      });
    var v = n(1709);
    Object.defineProperty(t, "utcDay", {
      enumerable: !0,
      get: function () {
        return r(v).default
      }
    }),
      Object.defineProperty(t, "utcDays", {
        enumerable: !0,
        get: function () {
          return v.utcDays
        }
      });
    var y = n(1710);
    Object.defineProperty(t, "utcWeek", {
      enumerable: !0,
      get: function () {
        return y.utcSunday
      }
    }),
      Object.defineProperty(t, "utcWeeks", {
        enumerable: !0,
        get: function () {
          return y.utcSundays
        }
      }),
      Object.defineProperty(t, "utcSunday", {
        enumerable: !0,
        get: function () {
          return y.utcSunday
        }
      }),
      Object.defineProperty(t, "utcSundays", {
        enumerable: !0,
        get: function () {
          return y.utcSundays
        }
      }),
      Object.defineProperty(t, "utcMonday", {
        enumerable: !0,
        get: function () {
          return y.utcMonday
        }
      }),
      Object.defineProperty(t, "utcMondays", {
        enumerable: !0,
        get: function () {
          return y.utcMondays
        }
      }),
      Object.defineProperty(t, "utcTuesday", {
        enumerable: !0,
        get: function () {
          return y.utcTuesday
        }
      }),
      Object.defineProperty(t, "utcTuesdays", {
        enumerable: !0,
        get: function () {
          return y.utcTuesdays
        }
      }),
      Object.defineProperty(t, "utcWednesday", {
        enumerable: !0,
        get: function () {
          return y.utcWednesday
        }
      }),
      Object.defineProperty(t, "utcWednesdays", {
        enumerable: !0,
        get: function () {
          return y.utcWednesdays
        }
      }),
      Object.defineProperty(t, "utcThursday", {
        enumerable: !0,
        get: function () {
          return y.utcThursday
        }
      }),
      Object.defineProperty(t, "utcThursdays", {
        enumerable: !0,
        get: function () {
          return y.utcThursdays
        }
      }),
      Object.defineProperty(t, "utcFriday", {
        enumerable: !0,
        get: function () {
          return y.utcFriday
        }
      }),
      Object.defineProperty(t, "utcFridays", {
        enumerable: !0,
        get: function () {
          return y.utcFridays
        }
      }),
      Object.defineProperty(t, "utcSaturday", {
        enumerable: !0,
        get: function () {
          return y.utcSaturday
        }
      }),
      Object.defineProperty(t, "utcSaturdays", {
        enumerable: !0,
        get: function () {
          return y.utcSaturdays
        }
      });
    var m = n(1711);
    Object.defineProperty(t, "utcMonth", {
      enumerable: !0,
      get: function () {
        return r(m).default
      }
    }),
      Object.defineProperty(t, "utcMonths", {
        enumerable: !0,
        get: function () {
          return m.utcMonths
        }
      });
    var g = n(1712);
    Object.defineProperty(t, "utcYear", {
      enumerable: !0,
      get: function () {
        return r(g).default
      }
    }),
      Object.defineProperty(t, "utcYears", {
        enumerable: !0,
        get: function () {
          return g.utcYears
        }
      })
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      this._context = e
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return new r(e)
      }
      ,
      r.prototype = {
        areaStart: function () {
          this._line = 0
        },
        areaEnd: function () {
          this._line = NaN
        },
        lineStart: function () {
          this._point = 0
        },
        lineEnd: function () {
          (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function (e, t) {
          switch (e = +e,
          t = +t,
          this._point) {
            case 0:
              this._point = 1,
                this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
              break;
            case 1:
              this._point = 2;
            default:
              this._context.lineTo(e, t)
          }
        }
      },
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () { }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      e._context.bezierCurveTo((2 * e._x0 + e._x1) / 3, (2 * e._y0 + e._y1) / 3, (e._x0 + 2 * e._x1) / 3, (e._y0 + 2 * e._y1) / 3, (e._x0 + 4 * e._x1 + t) / 6, (e._y0 + 4 * e._y1 + n) / 6)
    }
    function i(e) {
      this._context = e
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.Basis = i,
      t.default = function (e) {
        return new i(e)
      }
      ,
      t.point = r,
      i.prototype = {
        areaStart: function () {
          this._line = 0
        },
        areaEnd: function () {
          this._line = NaN
        },
        lineStart: function () {
          this._x0 = this._x1 = this._y0 = this._y1 = NaN,
            this._point = 0
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              r(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1)
          }
          (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function (e, t) {
          switch (e = +e,
          t = +t,
          this._point) {
            case 0:
              this._point = 1,
                this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3,
                this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
            default:
              r(this, e, t)
          }
          this._x0 = this._x1,
            this._x1 = e,
            this._y0 = this._y1,
            this._y1 = t
        }
      }
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      e._context.bezierCurveTo(e._x1 + e._k * (e._x2 - e._x0), e._y1 + e._k * (e._y2 - e._y0), e._x2 + e._k * (e._x1 - t), e._y2 + e._k * (e._y1 - n), e._x2, e._y2)
    }
    function i(e, t) {
      this._context = e,
        this._k = (1 - t) / 6
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.Cardinal = i,
      t.point = r,
      i.prototype = {
        areaStart: function () {
          this._line = 0
        },
        areaEnd: function () {
          this._line = NaN
        },
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._point = 0
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);
              break;
            case 3:
              r(this, this._x1, this._y1)
          }
          (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function (e, t) {
          switch (e = +e,
          t = +t,
          this._point) {
            case 0:
              this._point = 1,
                this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
              break;
            case 1:
              this._point = 2,
                this._x1 = e,
                this._y1 = t;
              break;
            case 2:
              this._point = 3;
            default:
              r(this, e, t)
          }
          this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = e,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = t
        }
      },
      t.default = function e(t) {
        function n(e) {
          return new i(e, t)
        }
        return n.tension = function (t) {
          return e(+t)
        }
          ,
          n
      }(0)
  }
  , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(1462)
      , a = r(i)
      , o = n(309)
      , u = r(o)
      , s = {
        1: {
          color: "#24A6DA",
          title: "公司信息"
        },
        2: {
          color: "#F06D68",
          title: "裁判文书"
        },
        3: {
          color: "#EDA61D",
          title: "法院公告"
        },
        4: {
          color: "#C3D41B",
          title: "疑似关系"
        },
        5: {
          color: "#FC3939",
          title: "失信人详情"
        },
        6: {
          color: "#C3D41B",
          title: "疑似关系"
        }
      }
      , l = void 0
      , c = function (e, t) {
        var n = {};
        return n.type = e,
          n.color = s[e].color,
          n.title = s[e].title,
          n.eid = t.eid,
          n.ename = t.ename,
          n.status = t.status,
          n.statusCode = t.statusCode,
          n.operName = t.operName,
          n.operNameTitle = t.operNameTitle,
          n.regCapi = t.regCapi,
          n.startDate = t.startDate,
          n.domain = t.domain,
          n
      }
      , f = function (e, t, n, r, i) {
        var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        e ? u.default.getEntBasicInfo({
          eid: e
        }).then(function (t) {
          var o = c(4, t);
          d({
            eid: e,
            hasProblem: r,
            reason: n,
            companyInfo: o,
            top: a
          }, i)
        }).catch(function () { }) : d({
          eid: e,
          hasProblem: r,
          companyInfo: {
            eid: e,
            ename: t,
            type: 4,
            color: s[4].color,
            title: s[4].title,
            reason: n,
            top: a
          }
        }, i)
      }
      , d = function (e, t) {
        h(),
          a.default.render(e).then(function (e) {
            l = e.appendTo(t).getComponent(),
              l.show()
          })
      }
      , h = function () {
        l && (l.remove(),
          l = "")
      }
      , p = function (e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        u.default.getEntInfo({
          eid: e
        }).then(function (i) {
          var a = c(1, i);
          d({
            eid: e,
            hasProblem: t,
            companyInfo: a,
            isQC: i.isQC,
            isOTC: i.isOTC,
            partnerInfo: i.partnerInfo,
            investInfo: i.investInfo,
            empInfo: i.empInfo,
            top10PartnerInfo: i.isQC ? i.top10PartnerInfo : void 0,
            top10CIRPartnerInfo: i.isQC ? i.top10CIRPartnerInfo : void 0,
            otcPartnerInfo: i.isOTC ? i.otcPartnerInfo : void 0,
            top: r
          }, n)
        }).catch(function () { })
      }
      , v = function (e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        u.default.getLawsList({
          currentEid: e,
          targetEid: t
        }).then(function (e) {
          var i = c(2, e.entInfo);
          d({
            eid: t,
            companyInfo: i,
            hasProblem: "",
            lawsInfo: e.lawsInfo,
            top: r
          }, n)
        }).catch(function () { })
      }
      , y = function (e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        u.default.getCourtNoticeList({
          currentEid: e,
          targetEid: t
        }).then(function (e) {
          var i = c(3, e.entInfo);
          d({
            eid: t,
            companyInfo: i,
            hasProblem: "",
            courtNoticeInfo: e.courtNoticeInfo,
            top: r
          }, n)
        }).catch(function () { })
      };
    t.default = {
      showSuspectedDetail: f,
      showCompanyInfo: p,
      showJudgmentDetail: v,
      showAnnounceDetail: y
    },
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1467);
    Object.defineProperty(t, "version", {
      enumerable: !0,
      get: function () {
        return r.version
      }
    });
    var i = n(84);
    Object.keys(i).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return i[e]
        }
      })
    });
    var a = n(1484);
    Object.keys(a).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return a[e]
        }
      })
    });
    var o = n(1488);
    Object.keys(o).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return o[e]
        }
      })
    });
    var u = n(1575);
    Object.keys(u).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return u[e]
        }
      })
    });
    var s = n(223);
    Object.keys(s).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return s[e]
        }
      })
    });
    var l = n(138);
    Object.keys(l).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return l[e]
        }
      })
    });
    var c = n(168);
    Object.keys(c).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return c[e]
        }
      })
    });
    var f = n(397);
    Object.keys(f).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return f[e]
        }
      })
    });
    var d = n(411);
    Object.keys(d).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return d[e]
        }
      })
    });
    var h = n(728);
    Object.keys(h).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return h[e]
        }
      })
    });
    var p = n(1588);
    Object.keys(p).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return p[e]
        }
      })
    });
    var v = n(416);
    Object.keys(v).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return v[e]
        }
      })
    });
    var y = n(1618);
    Object.keys(y).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return y[e]
        }
      })
    });
    var m = n(1646);
    Object.keys(m).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return m[e]
        }
      })
    });
    var g = n(112);
    Object.keys(g).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return g[e]
        }
      })
    });
    var b = n(169);
    Object.keys(b).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return b[e]
        }
      })
    });
    var _ = n(1668);
    Object.keys(_).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return _[e]
        }
      })
    });
    var x = n(414);
    Object.keys(x).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return x[e]
        }
      })
    });
    var w = n(1675);
    Object.keys(w).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return w[e]
        }
      })
    });
    var P = n(1678);
    Object.keys(P).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return P[e]
        }
      })
    });
    var M = n(1683);
    Object.keys(M).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return M[e]
        }
      })
    });
    var O = n(1690);
    Object.keys(O).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return O[e]
        }
      })
    });
    var E = n(62);
    Object.keys(E).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return E[e]
        }
      })
    });
    var j = n(1723);
    Object.keys(j).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return j[e]
        }
      })
    });
    var S = n(322);
    Object.keys(S).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return S[e]
        }
      })
    });
    var k = n(428);
    Object.keys(k).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return k[e]
        }
      })
    });
    var C = n(314);
    Object.keys(C).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return C[e]
        }
      })
    });
    var T = n(408);
    Object.keys(T).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return T[e]
        }
      })
    });
    var N = n(1748);
    Object.keys(N).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return N[e]
        }
      })
    });
    var D = n(1753);
    Object.keys(D).forEach(function (e) {
      "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return D[e]
        }
      })
    })
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n) {
        if (null == n && (n = i.default),
          r = e.length) {
          if ((t = +t) <= 0 || r < 2)
            return +n(e[0], 0, e);
          if (t >= 1)
            return +n(e[r - 1], r - 1, e);
          var r, a = (r - 1) * t, o = Math.floor(a), u = +n(e[o], o, e);
          return u + (+n(e[o + 1], o + 1, e) - u) * (a - o)
        }
      }
      ;
    var r = n(221)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(1491);
    Object.defineProperty(t, "drag", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    });
    var a = n(716);
    Object.defineProperty(t, "dragDisable", {
      enumerable: !0,
      get: function () {
        return r(a).default
      }
    }),
      Object.defineProperty(t, "dragEnable", {
        enumerable: !0,
        get: function () {
          return a.yesdrag
        }
      })
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        var t = e += ""
          , n = t.indexOf(":");
        return n >= 0 && "xmlns" !== (t = e.slice(0, n)) && (e = e.slice(n + 1)),
          i.default.hasOwnProperty(t) ? {
            space: i.default[t],
            local: e
          } : e
      }
      ;
    var r = n(399)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = t.xhtml = "http://www.w3.org/1999/xhtml";
    t.default = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: r,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    }
  }
  , function (e, t, n) {
    "use strict";
    function r() { }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return null == e ? r : function () {
          return this.querySelector(e)
        }
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      return e = i(e, t, n),
        function (t) {
          var n = t.relatedTarget;
          n && (n === this || 8 & n.compareDocumentPosition(this)) || e.call(this, t)
        }
    }
    function i(e, n, r) {
      return function (i) {
        var a = c;
        t.event = c = i;
        try {
          e.call(this, this.__data__, n, r)
        } finally {
          t.event = c = a
        }
      }
    }
    function a(e) {
      return e.trim().split(/^|\s+/).map(function (e) {
        var t = ""
          , n = e.indexOf(".");
        return n >= 0 && (t = e.slice(n + 1),
          e = e.slice(0, n)),
          {
            type: e,
            name: t
          }
      })
    }
    function o(e) {
      return function () {
        var t = this.__on;
        if (t) {
          for (var n, r = 0, i = -1, a = t.length; r < a; ++r)
            n = t[r],
              e.type && n.type !== e.type || n.name !== e.name ? t[++i] = n : this.removeEventListener(n.type, n.listener, n.capture);
          ++i ? t.length = i : delete this.__on
        }
      }
    }
    function u(e, t, n) {
      var a = l.hasOwnProperty(e.type) ? r : i;
      return function (r, i, o) {
        var u, s = this.__on, l = a(t, i, o);
        if (s)
          for (var c = 0, f = s.length; c < f; ++c)
            if ((u = s[c]).type === e.type && u.name === e.name)
              return this.removeEventListener(u.type, u.listener, u.capture),
                this.addEventListener(u.type, u.listener = l, u.capture = n),
                void (u.value = t);
        this.addEventListener(e.type, l, n),
          u = {
            type: e.type,
            name: e.name,
            value: t,
            listener: l,
            capture: n
          },
          s ? s.push(u) : this.__on = [u]
      }
    }
    function s(e, n, r, i) {
      var a = c;
      e.sourceEvent = c,
        t.event = c = e;
      try {
        return n.apply(r, i)
      } finally {
        t.event = c = a
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n) {
        var r, i, s = a(e + ""), l = s.length;
        {
          if (!(arguments.length < 2)) {
            for (c = t ? u : o,
              null == n && (n = !1),
              r = 0; r < l; ++r)
              this.each(c(s[r], t, n));
            return this
          }
          var c = this.node().__on;
          if (c)
            for (var f, d = 0, h = c.length; d < h; ++d)
              for (r = 0,
                f = c[d]; r < l; ++r)
                if ((i = s[r]).type === f.type && i.name === f.name)
                  return f.value
        }
      }
      ,
      t.customEvent = s;
    var l = {}
      , c = t.event = null;
    if ("undefined" != typeof document) {
      "onmouseenter" in document.documentElement || (l = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
      })
    }
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        for (var e, t = r.event; e = t.sourceEvent;)
          t = e;
        return t
      }
      ;
    var r = n(402);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    }
      : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      ;
    t.default = function (e, t) {
      var n, r = void 0 === t ? "undefined" : i(t);
      return null == t || "boolean" === r ? (0,
        b.default)(t) : ("number" === r ? h.default : "string" === r ? (n = (0,
          a.color)(t)) ? (t = n,
            u.default) : m.default : t instanceof a.color ? u.default : t instanceof Date ? f.default : Array.isArray(t) ? l.default : "function" != typeof t.valueOf && "function" != typeof t.toString || isNaN(t) ? v.default : h.default)(e, t)
    }
      ;
    var a = n(138)
      , o = n(719)
      , u = r(o)
      , s = n(722)
      , l = r(s)
      , c = n(723)
      , f = r(c)
      , d = n(312)
      , h = r(d)
      , p = n(724)
      , v = r(p)
      , y = n(725)
      , m = r(y)
      , g = n(721)
      , b = r(g);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r() { }
    function i(e) {
      var t;
      return e = (e + "").trim().toLowerCase(),
        (t = _.exec(e)) ? (t = parseInt(t[1], 16),
          new l(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | 240 & t, (15 & t) << 4 | 15 & t, 1)) : (t = x.exec(e)) ? a(parseInt(t[1], 16)) : (t = w.exec(e)) ? new l(t[1], t[2], t[3], 1) : (t = P.exec(e)) ? new l(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, 1) : (t = M.exec(e)) ? o(t[1], t[2], t[3], t[4]) : (t = O.exec(e)) ? o(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, t[4]) : (t = E.exec(e)) ? c(t[1], t[2] / 100, t[3] / 100, 1) : (t = j.exec(e)) ? c(t[1], t[2] / 100, t[3] / 100, t[4]) : S.hasOwnProperty(e) ? a(S[e]) : "transparent" === e ? new l(NaN, NaN, NaN, 0) : null
    }
    function a(e) {
      return new l(e >> 16 & 255, e >> 8 & 255, 255 & e, 1)
    }
    function o(e, t, n, r) {
      return r <= 0 && (e = t = n = NaN),
        new l(e, t, n, r)
    }
    function u(e) {
      return e instanceof r || (e = i(e)),
        e ? (e = e.rgb(),
          new l(e.r, e.g, e.b, e.opacity)) : new l
    }
    function s(e, t, n, r) {
      return 1 === arguments.length ? u(e) : new l(e, t, n, null == r ? 1 : r)
    }
    function l(e, t, n, r) {
      this.r = +e,
        this.g = +t,
        this.b = +n,
        this.opacity = +r
    }
    function c(e, t, n, r) {
      return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN),
        new h(e, t, n, r)
    }
    function f(e) {
      if (e instanceof h)
        return new h(e.h, e.s, e.l, e.opacity);
      if (e instanceof r || (e = i(e)),
        !e)
        return new h;
      if (e instanceof h)
        return e;
      e = e.rgb();
      var t = e.r / 255
        , n = e.g / 255
        , a = e.b / 255
        , o = Math.min(t, n, a)
        , u = Math.max(t, n, a)
        , s = NaN
        , l = u - o
        , c = (u + o) / 2;
      return l ? (s = t === u ? (n - a) / l + 6 * (n < a) : n === u ? (a - t) / l + 2 : (t - n) / l + 4,
        l /= c < .5 ? u + o : 2 - u - o,
        s *= 60) : l = c > 0 && c < 1 ? 0 : s,
        new h(s, l, c, e.opacity)
    }
    function d(e, t, n, r) {
      return 1 === arguments.length ? f(e) : new h(e, t, n, null == r ? 1 : r)
    }
    function h(e, t, n, r) {
      this.h = +e,
        this.s = +t,
        this.l = +n,
        this.opacity = +r
    }
    function p(e, t, n) {
      return 255 * (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.brighter = t.darker = void 0,
      t.Color = r,
      t.default = i,
      t.rgbConvert = u,
      t.rgb = s,
      t.Rgb = l,
      t.hslConvert = f,
      t.hsl = d;
    var v = n(406)
      , y = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(v);
    t.darker = .7;
    t.brighter = 1 / .7;
    var m = "\\s*([+-]?\\d+)\\s*"
      , g = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*"
      , b = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*"
      , _ = /^#([0-9a-f]{3})$/
      , x = /^#([0-9a-f]{6})$/
      , w = new RegExp("^rgb\\(" + [m, m, m] + "\\)$")
      , P = new RegExp("^rgb\\(" + [b, b, b] + "\\)$")
      , M = new RegExp("^rgba\\(" + [m, m, m, g] + "\\)$")
      , O = new RegExp("^rgba\\(" + [b, b, b, g] + "\\)$")
      , E = new RegExp("^hsl\\(" + [g, b, b] + "\\)$")
      , j = new RegExp("^hsla\\(" + [g, b, b, g] + "\\)$")
      , S = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
      };
    (0,
      y.default)(r, i, {
        displayable: function () {
          return this.rgb().displayable()
        },
        toString: function () {
          return this.rgb() + ""
        }
      }),
      (0,
        y.default)(l, s, (0,
          v.extend)(r, {
            brighter: function (e) {
              return e = null == e ? 1 / .7 : Math.pow(1 / .7, e),
                new l(this.r * e, this.g * e, this.b * e, this.opacity)
            },
            darker: function (e) {
              return e = null == e ? .7 : Math.pow(.7, e),
                new l(this.r * e, this.g * e, this.b * e, this.opacity)
            },
            rgb: function () {
              return this
            },
            displayable: function () {
              return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
            },
            toString: function () {
              var e = this.opacity;
              return e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e)),
                (1 === e ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === e ? ")" : ", " + e + ")")
            }
          })),
      (0,
        y.default)(h, d, (0,
          v.extend)(r, {
            brighter: function (e) {
              return e = null == e ? 1 / .7 : Math.pow(1 / .7, e),
                new h(this.h, this.s, this.l * e, this.opacity)
            },
            darker: function (e) {
              return e = null == e ? .7 : Math.pow(.7, e),
                new h(this.h, this.s, this.l * e, this.opacity)
            },
            rgb: function () {
              var e = this.h % 360 + 360 * (this.h < 0)
                , t = isNaN(e) || isNaN(this.s) ? 0 : this.s
                , n = this.l
                , r = n + (n < .5 ? n : 1 - n) * t
                , i = 2 * n - r;
              return new l(p(e >= 240 ? e - 240 : e + 120, i, r), p(e, i, r), p(e < 120 ? e + 240 : e - 120, i, r), this.opacity)
            },
            displayable: function () {
              return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            }
          }))
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n = Object.create(e.prototype);
      for (var r in t)
        n[r] = t[r];
      return n
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n) {
        e.prototype = t.prototype = n,
          n.constructor = e
      }
      ,
      t.extend = r
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n, r, i) {
      var a = e * e
        , o = a * e;
      return ((1 - 3 * e + 3 * a - o) * t + (4 - 6 * a + 3 * o) * n + (1 + 3 * e + 3 * a - 3 * o) * r + o * i) / 6
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.basis = r,
      t.default = function (e) {
        var t = e.length - 1;
        return function (n) {
          var i = n <= 0 ? n = 0 : n >= 1 ? (n = 1,
            t - 1) : Math.floor(n * t)
            , a = e[i]
            , o = e[i + 1]
            , u = i > 0 ? e[i - 1] : 2 * a - o
            , s = i < t - 1 ? e[i + 2] : 2 * o - a;
          return r((n - i / t) * t, u, a, o, s)
        }
      }
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.interrupt = t.active = t.transition = void 0;
    var i = n(152);
    Object.defineProperty(t, "transition", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    });
    var a = n(1558);
    Object.defineProperty(t, "active", {
      enumerable: !0,
      get: function () {
        return r(a).default
      }
    });
    var o = n(727);
    Object.defineProperty(t, "interrupt", {
      enumerable: !0,
      get: function () {
        return r(o).default
      }
    }),
      n(1559)
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      return _ || (P(i),
        _ = w.now() + x)
    }
    function i() {
      _ = 0
    }
    function a() {
      this._call = this._time = this._next = null
    }
    function o(e, t, n) {
      var r = new a;
      return r.restart(e, t, n),
        r
    }
    function u() {
      r(),
        ++v;
      for (var e, t = h; t;)
        (e = _ - t._time) >= 0 && t._call.call(null, e),
          t = t._next;
      --v
    }
    function s() {
      _ = (b = w.now()) + x,
        v = y = 0;
      try {
        u()
      } finally {
        v = 0,
          c(),
          _ = 0
      }
    }
    function l() {
      var e = w.now()
        , t = e - b;
      t > g && (x -= t,
        b = e)
    }
    function c() {
      for (var e, t, n = h, r = 1 / 0; n;)
        n._call ? (r > n._time && (r = n._time),
          e = n,
          n = n._next) : (t = n._next,
            n._next = null,
            n = e ? e._next = t : h = t);
      p = e,
        f(r)
    }
    function f(e) {
      if (!v) {
        y && (y = clearTimeout(y));
        e - _ > 24 ? (e < 1 / 0 && (y = setTimeout(s, e - w.now() - x)),
          m && (m = clearInterval(m))) : (m || (b = w.now(),
            m = setInterval(l, g)),
            v = 1,
            P(s))
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    }
      : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      ;
    t.now = r,
      t.Timer = a,
      t.timer = o,
      t.timerFlush = u;
    var h, p, v = 0, y = 0, m = 0, g = 1e3, b = 0, _ = 0, x = 0, w = "object" === ("undefined" == typeof performance ? "undefined" : d(performance)) && performance.now ? performance : Date, P = "object" === ("undefined" == typeof window ? "undefined" : d(window)) && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (e) {
      setTimeout(e, 17)
    }
      ;
    a.prototype = o.prototype = {
      constructor: a,
      restart: function (e, t, n) {
        if ("function" != typeof e)
          throw new TypeError("callback is not a function");
        n = (null == n ? r() : +n) + (null == t ? 0 : +t),
          this._next || p === this || (p ? p._next = this : h = this,
            p = this),
          this._call = e,
          this._time = n,
          f()
      },
      stop: function () {
        this._call && (this._call = null,
          this._time = 1 / 0,
          f())
      }
    }
  }
  , function (e, t, n) {
    "use strict";
    function r() { }
    function i(e, t) {
      var n = new r;
      if (e instanceof r)
        e.each(function (e, t) {
          n.set(t, e)
        });
      else if (Array.isArray(e)) {
        var i, a = -1, o = e.length;
        if (null == t)
          for (; ++a < o;)
            n.set(a, e[a]);
        else
          for (; ++a < o;)
            n.set(t(i = e[a], a, e), i)
      } else if (e)
        for (var u in e)
          n.set(u, e[u]);
      return n
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = t.prefix = "$";
    r.prototype = i.prototype = {
      constructor: r,
      has: function (e) {
        return a + e in this
      },
      get: function (e) {
        return this[a + e]
      },
      set: function (e, t) {
        return this[a + e] = t,
          this
      },
      remove: function (e) {
        var t = a + e;
        return t in this && delete this[t]
      },
      clear: function () {
        for (var e in this)
          e[0] === a && delete this[e]
      },
      keys: function () {
        var e = [];
        for (var t in this)
          t[0] === a && e.push(t.slice(1));
        return e
      },
      values: function () {
        var e = [];
        for (var t in this)
          t[0] === a && e.push(this[t]);
        return e
      },
      entries: function () {
        var e = [];
        for (var t in this)
          t[0] === a && e.push({
            key: t.slice(1),
            value: this[t]
          });
        return e
      },
      size: function () {
        var e = 0;
        for (var t in this)
          t[0] === a && ++e;
        return e
      },
      empty: function () {
        for (var e in this)
          if (e[0] === a)
            return !1;
        return !0
      },
      each: function (e) {
        for (var t in this)
          t[0] === a && e(this[t], t.slice(1), this)
      }
    },
      t.default = i
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(412);
    Object.defineProperty(t, "dsvFormat", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    });
    var a = n(1586);
    Object.defineProperty(t, "csvParse", {
      enumerable: !0,
      get: function () {
        return a.csvParse
      }
    }),
      Object.defineProperty(t, "csvParseRows", {
        enumerable: !0,
        get: function () {
          return a.csvParseRows
        }
      }),
      Object.defineProperty(t, "csvFormat", {
        enumerable: !0,
        get: function () {
          return a.csvFormat
        }
      }),
      Object.defineProperty(t, "csvFormatRows", {
        enumerable: !0,
        get: function () {
          return a.csvFormatRows
        }
      });
    var o = n(1587);
    Object.defineProperty(t, "tsvParse", {
      enumerable: !0,
      get: function () {
        return o.tsvParse
      }
    }),
      Object.defineProperty(t, "tsvParseRows", {
        enumerable: !0,
        get: function () {
          return o.tsvParseRows
        }
      }),
      Object.defineProperty(t, "tsvFormat", {
        enumerable: !0,
        get: function () {
          return o.tsvFormat
        }
      }),
      Object.defineProperty(t, "tsvFormatRows", {
        enumerable: !0,
        get: function () {
          return o.tsvFormatRows
        }
      })
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return new Function("d", "return {" + e.map(function (e, t) {
        return JSON.stringify(e) + ": d[" + t + "]"
      }).join(",") + "}")
    }
    function i(e, t) {
      var n = r(e);
      return function (r, i) {
        return t(n(r), i, e)
      }
    }
    function a(e) {
      var t = Object.create(null)
        , n = [];
      return e.forEach(function (e) {
        for (var r in e)
          r in t || n.push(t[r] = r)
      }),
        n
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        function t(e, t) {
          var a, o, u = n(e, function (e, n) {
            if (a)
              return a(e, n - 1);
            o = e,
              a = t ? i(e, t) : r(e)
          });
          return u.columns = o || [],
            u
        }
        function n(e, t) {
          function n() {
            if (h)
              return u;
            if (p)
              return p = !1,
                o;
            var t, n, r = f;
            if (e.charCodeAt(r) === s) {
              for (; f++ < a && e.charCodeAt(f) !== s || e.charCodeAt(++f) === s;)
                ;
              return (t = f) >= a ? h = !0 : (n = e.charCodeAt(f++)) === l ? p = !0 : n === c && (p = !0,
                e.charCodeAt(f) === l && ++f),
                e.slice(r + 1, t - 1).replace(/""/g, '"')
            }
            for (; f < a;) {
              if ((n = e.charCodeAt(t = f++)) === l)
                p = !0;
              else if (n === c)
                p = !0,
                  e.charCodeAt(f) === l && ++f;
              else if (n !== y)
                continue;
              return e.slice(r, t)
            }
            return h = !0,
              e.slice(r, a)
          }
          var r, i = [], a = e.length, f = 0, d = 0, h = a <= 0, p = !1;
          for (e.charCodeAt(a - 1) === l && --a,
            e.charCodeAt(a - 1) === c && --a; (r = n()) !== u;) {
            for (var v = []; r !== o && r !== u;)
              v.push(r),
                r = n();
            t && null == (v = t(v, d++)) || i.push(v)
          }
          return i
        }
        function f(t, n) {
          return null == n && (n = a(t)),
            [n.map(p).join(e)].concat(t.map(function (t) {
              return n.map(function (e) {
                return p(t[e])
              }).join(e)
            })).join("\n")
        }
        function d(e) {
          return e.map(h).join("\n")
        }
        function h(t) {
          return t.map(p).join(e)
        }
        function p(e) {
          return null == e ? "" : v.test(e += "") ? '"' + e.replace(/"/g, '""') + '"' : e
        }
        var v = new RegExp('["' + e + "\n\r]")
          , y = e.charCodeAt(0);
        return {
          parse: t,
          parseRows: n,
          format: f,
          formatRows: d
        }
      }
      ;
    var o = {}
      , u = {}
      , s = 34
      , l = 10
      , c = 13;
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        return 1e-6 * (Math.random() - .5)
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(1591);
    Object.defineProperty(t, "quadtree", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    })
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n, r, i) {
        this.node = e,
          this.x0 = t,
          this.y0 = n,
          this.x1 = r,
          this.y1 = i
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(1609);
    Object.defineProperty(t, "formatDefaultLocale", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    }),
      Object.defineProperty(t, "format", {
        enumerable: !0,
        get: function () {
          return i.format
        }
      }),
      Object.defineProperty(t, "formatPrefix", {
        enumerable: !0,
        get: function () {
          return i.formatPrefix
        }
      });
    var a = n(731);
    Object.defineProperty(t, "formatLocale", {
      enumerable: !0,
      get: function () {
        return r(a).default
      }
    });
    var o = n(732);
    Object.defineProperty(t, "formatSpecifier", {
      enumerable: !0,
      get: function () {
        return r(o).default
      }
    });
    var u = n(1615);
    Object.defineProperty(t, "precisionFixed", {
      enumerable: !0,
      get: function () {
        return r(u).default
      }
    });
    var s = n(1616);
    Object.defineProperty(t, "precisionPrefix", {
      enumerable: !0,
      get: function () {
        return r(s).default
      }
    });
    var l = n(1617);
    Object.defineProperty(t, "precisionRound", {
      enumerable: !0,
      get: function () {
        return r(l).default
      }
    })
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
          return null;
        var n, r = e.slice(0, n);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)]
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return e
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      function n(e, t) {
        var n = (0,
          i.sqrt)(u - 2 * a * (0,
            i.sin)(t)) / a;
        return [n * (0,
          i.sin)(e *= a), s - n * (0,
            i.cos)(e)]
      }
      var r = (0,
        i.sin)(e)
        , a = (r + (0,
          i.sin)(t)) / 2;
      if ((0,
        i.abs)(a) < i.epsilon)
        return (0,
          o.cylindricalEqualAreaRaw)(e);
      var u = 1 + r * (2 * a - r)
        , s = (0,
          i.sqrt)(u) / a;
      return n.invert = function (e, t) {
        var n = s - t;
        return [(0,
          i.atan2)(e, (0,
            i.abs)(n)) / a * (0,
              i.sign)(n), (0,
                i.asin)((u - (e * e + n * n) * a * a) / (2 * a))]
      }
        ,
        n
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.conicEqualAreaRaw = r,
      t.default = function () {
        return (0,
          a.conicProjection)(r).scale(155.424).center([0, 33.6442])
      }
      ;
    var i = n(31)
      , a = n(420)
      , o = n(1634)
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      var t = 0
        , n = i.pi / 3
        , r = (0,
          a.projectionMutator)(e)
        , o = r(t, n);
      return o.parallels = function (e) {
        return arguments.length ? r(t = e[0] * i.radians, n = e[1] * i.radians) : [t * i.degrees, n * i.degrees]
      }
        ,
        o
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.conicProjection = r;
    var i = n(31)
      , a = n(139)
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e, t, n) {
      var r = e.clipExtent && e.clipExtent();
      return e.scale(150).translate([0, 0]),
        null != r && e.clipExtent(null),
        (0,
          c.default)(n, e.stream(d.default)),
        t(d.default.result()),
        null != r && e.clipExtent(r),
        e
    }
    function a(e, t, n) {
      return i(e, function (n) {
        var r = t[1][0] - t[0][0]
          , i = t[1][1] - t[0][1]
          , a = Math.min(r / (n[1][0] - n[0][0]), i / (n[1][1] - n[0][1]))
          , o = +t[0][0] + (r - a * (n[1][0] + n[0][0])) / 2
          , u = +t[0][1] + (i - a * (n[1][1] + n[0][1])) / 2;
        e.scale(150 * a).translate([o, u])
      }, n)
    }
    function o(e, t, n) {
      return a(e, [[0, 0], t], n)
    }
    function u(e, t, n) {
      return i(e, function (n) {
        var r = +t
          , i = r / (n[1][0] - n[0][0])
          , a = (r - i * (n[1][0] + n[0][0])) / 2
          , o = -i * n[0][1];
        e.scale(150 * i).translate([a, o])
      }, n)
    }
    function s(e, t, n) {
      return i(e, function (n) {
        var r = +t
          , i = r / (n[1][1] - n[0][1])
          , a = -i * n[0][0]
          , o = (r - i * (n[1][1] + n[0][1])) / 2;
        e.scale(150 * i).translate([a, o])
      }, n)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.fitExtent = a,
      t.fitSize = o,
      t.fitWidth = u,
      t.fitHeight = s;
    var l = n(170)
      , c = r(l)
      , f = n(747)
      , d = r(f)
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e, t) {
      return [e, (0,
        o.log)((0,
          o.tan)((o.halfPi + t) / 2))]
    }
    function a(e) {
      function t() {
        var t = o.pi * f()
          , l = u((0,
            s.default)(u.rotate()).invert([0, 0]));
        return h(null == p ? [[l[0] - t, l[1] - t], [l[0] + t, l[1] + t]] : e === i ? [[Math.max(l[0] - t, p), n], [Math.min(l[0] + t, r), a]] : [[p, Math.max(l[1] - t, n)], [r, Math.min(l[1] + t, a)]])
      }
      var n, r, a, u = (0,
        c.default)(e), l = u.center, f = u.scale, d = u.translate, h = u.clipExtent, p = null;
      return u.scale = function (e) {
        return arguments.length ? (f(e),
          t()) : f()
      }
        ,
        u.translate = function (e) {
          return arguments.length ? (d(e),
            t()) : d()
        }
        ,
        u.center = function (e) {
          return arguments.length ? (l(e),
            t()) : l()
        }
        ,
        u.clipExtent = function (e) {
          return arguments.length ? (null == e ? p = n = r = a = null : (p = +e[0][0],
            n = +e[0][1],
            r = +e[1][0],
            a = +e[1][1]),
            t()) : null == p ? null : [[p, n], [r, a]]
        }
        ,
        t()
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.mercatorRaw = i,
      t.default = function () {
        return a(i).scale(961 / o.tau)
      }
      ,
      t.mercatorProjection = a;
    var o = n(31)
      , u = n(316)
      , s = r(u)
      , l = n(139)
      , c = r(l);
    i.invert = function (e, t) {
      return [e, 2 * (0,
        o.atan)((0,
          o.exp)(t)) - o.halfPi]
    }
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e, t) {
      var n, r, i, a, u, c = new l(e), f = +e.value && (c.value = e.value), d = [c];
      for (null == t && (t = o); n = d.pop();)
        if (f && (n.value = +n.data.value),
          (i = t(n.data)) && (u = i.length))
          for (n.children = new Array(u),
            a = u - 1; a >= 0; --a)
            d.push(r = n.children[a] = new l(i[a])),
              r.parent = n,
              r.depth = n.depth + 1;
      return c.eachBefore(s)
    }
    function a() {
      return i(this).eachBefore(u)
    }
    function o(e) {
      return e.children
    }
    function u(e) {
      e.data = e.data.data
    }
    function s(e) {
      var t = 0;
      do {
        e.height = t
      } while ((e = e.parent) && e.height < ++t)
    }
    function l(e) {
      this.data = e,
        this.depth = this.height = 0,
        this.parent = null
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = i,
      t.computeHeight = s,
      t.Node = l;
    var c = n(1648)
      , f = r(c)
      , d = n(1649)
      , h = r(d)
      , p = n(1650)
      , v = r(p)
      , y = n(1651)
      , m = r(y)
      , g = n(1652)
      , b = r(g)
      , _ = n(1653)
      , x = r(_)
      , w = n(1654)
      , P = r(w)
      , M = n(1655)
      , O = r(M)
      , E = n(1656)
      , j = r(E)
      , S = n(1657)
      , k = r(S)
      , C = n(1658)
      , T = r(C);
    l.prototype = i.prototype = {
      constructor: l,
      count: f.default,
      each: h.default,
      eachAfter: m.default,
      eachBefore: v.default,
      sum: b.default,
      sort: x.default,
      path: P.default,
      ancestors: O.default,
      descendants: j.default,
      leaves: k.default,
      links: T.default,
      copy: a
    }
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return null == e ? null : i(e)
    }
    function i(e) {
      if ("function" != typeof e)
        throw new Error;
      return e
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.optional = r,
      t.required = i
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e, t, n, r, i, a) {
      for (var u, l, c, f, d, h, p, v, y, m, g, b = [], _ = t.children, x = 0, w = 0, P = _.length, M = t.value; x < P;) {
        c = i - n,
          f = a - r;
        do {
          d = _[w++].value
        } while (!d && w < P); for (h = p = d,
          m = Math.max(f / c, c / f) / (M * e),
          g = d * d * m,
          y = Math.max(p / g, g / h); w < P; ++w) {
          if (d += l = _[w].value,
            l < h && (h = l),
            l > p && (p = l),
            g = d * d * m,
            (v = Math.max(p / g, g / h)) > y) {
            d -= l;
            break
          }
          y = v
        }
        b.push(u = {
          value: d,
          dice: c < f,
          children: _.slice(x, w)
        }),
          u.dice ? (0,
            o.default)(u, n, r, i, M ? r += f * d / M : a) : (0,
              s.default)(u, n, r, M ? n += c * d / M : i, a),
          M -= d,
          x = w
      }
      return b
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.phi = void 0,
      t.squarifyRatio = i;
    var a = n(226)
      , o = r(a)
      , u = n(319)
      , s = r(u)
      , l = t.phi = (1 + Math.sqrt(5)) / 2;
    t.default = function e(t) {
      function n(e, n, r, a, o) {
        i(t, e, n, r, a, o)
      }
      return n.ratio = function (t) {
        return e((t = +t) > 1 ? t : 1)
      }
        ,
        n
    }(l)
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return function (t, n) {
        e(null == t ? n : null)
      }
    }
    function i(e) {
      var t = e.responseType;
      return t && "text" !== t ? e.response : e.responseText
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        function n(e) {
          var t, n = h.status;
          if (!n && i(h) || n >= 200 && n < 300 || 304 === n) {
            if (l)
              try {
                t = l.call(u, h)
              } catch (e) {
                return void f.call("error", u, e)
              }
            else
              t = h;
            f.call("load", u, t)
          } else
            f.call("error", u, e)
        }
        var u, s, l, c, f = (0,
          o.dispatch)("beforesend", "progress", "load", "error"), d = (0,
            a.map)(), h = new XMLHttpRequest, p = null, v = null, y = 0;
        if ("undefined" == typeof XDomainRequest || "withCredentials" in h || !/^(http(s)?:)?\/\//.test(e) || (h = new XDomainRequest),
          "onload" in h ? h.onload = h.onerror = h.ontimeout = n : h.onreadystatechange = function (e) {
            h.readyState > 3 && n(e)
          }
          ,
          h.onprogress = function (e) {
            f.call("progress", u, e)
          }
          ,
          u = {
            header: function (e, t) {
              return e = (e + "").toLowerCase(),
                arguments.length < 2 ? d.get(e) : (null == t ? d.remove(e) : d.set(e, t + ""),
                  u)
            },
            mimeType: function (e) {
              return arguments.length ? (s = null == e ? null : e + "",
                u) : s
            },
            responseType: function (e) {
              return arguments.length ? (c = e,
                u) : c
            },
            timeout: function (e) {
              return arguments.length ? (y = +e,
                u) : y
            },
            user: function (e) {
              return arguments.length < 1 ? p : (p = null == e ? null : e + "",
                u)
            },
            password: function (e) {
              return arguments.length < 1 ? v : (v = null == e ? null : e + "",
                u)
            },
            response: function (e) {
              return l = e,
                u
            },
            get: function (e, t) {
              return u.send("GET", e, t)
            },
            post: function (e, t) {
              return u.send("POST", e, t)
            },
            send: function (t, n, i) {
              return h.open(t, e, !0, p, v),
                null == s || d.has("accept") || d.set("accept", s + ",*/*"),
                h.setRequestHeader && d.each(function (e, t) {
                  h.setRequestHeader(t, e)
                }),
                null != s && h.overrideMimeType && h.overrideMimeType(s),
                null != c && (h.responseType = c),
                y > 0 && (h.timeout = y),
                null == i && "function" == typeof n && (i = n,
                  n = null),
                null != i && 1 === i.length && (i = r(i)),
                null != i && u.on("error", i).on("load", function (e) {
                  i(null, e)
                }),
                f.call("beforesend", u, h),
                h.send(null == n ? null : n),
                u
            },
            abort: function () {
              return h.abort(),
                u
            },
            on: function () {
              var e = f.on.apply(f, arguments);
              return e === f ? u : e
            }
          },
          null != t) {
          if ("function" != typeof t)
            throw new Error("invalid callback: " + t);
          return u.get(t)
        }
        return u
      }
      ;
    var a = n(223)
      , o = n(168);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return function () {
          return e
        }
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(429);
    Object.defineProperty(t, "timeFormatDefaultLocale", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    }),
      Object.defineProperty(t, "timeFormat", {
        enumerable: !0,
        get: function () {
          return i.timeFormat
        }
      }),
      Object.defineProperty(t, "timeParse", {
        enumerable: !0,
        get: function () {
          return i.timeParse
        }
      }),
      Object.defineProperty(t, "utcFormat", {
        enumerable: !0,
        get: function () {
          return i.utcFormat
        }
      }),
      Object.defineProperty(t, "utcParse", {
        enumerable: !0,
        get: function () {
          return i.utcParse
        }
      });
    var a = n(761);
    Object.defineProperty(t, "timeFormatLocale", {
      enumerable: !0,
      get: function () {
        return r(a).default
      }
    });
    var o = n(762);
    Object.defineProperty(t, "isoFormat", {
      enumerable: !0,
      get: function () {
        return r(o).default
      }
    });
    var u = n(1713);
    Object.defineProperty(t, "isoParse", {
      enumerable: !0,
      get: function () {
        return r(u).default
      }
    })
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return i = (0,
        o.default)(e),
        t.timeFormat = u = i.format,
        t.timeParse = s = i.parse,
        t.utcFormat = l = i.utcFormat,
        t.utcParse = c = i.utcParse,
        i
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.utcParse = t.utcFormat = t.timeParse = t.timeFormat = void 0,
      t.default = r;
    var i, a = n(761), o = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(a), u = t.timeFormat = void 0, s = t.timeParse = void 0, l = t.utcFormat = void 0, c = t.utcParse = void 0;
    r({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    })
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        function e(e) {
          var o, s, l, f = e.length, d = !1;
          for (null == a && (c = u(l = (0,
            i.path)())),
            o = 0; o <= f; ++o)
            !(o < f && r(s = e[o], o, e)) === d && ((d = !d) ? c.lineStart() : c.lineEnd()),
              d && c.point(+t(s, o, e), +n(s, o, e));
          if (l)
            return c = null,
              l + "" || null
        }
        var t = l.x
          , n = l.y
          , r = (0,
            o.default)(!0)
          , a = null
          , u = s.default
          , c = null;
        return e.x = function (n) {
          return arguments.length ? (t = "function" == typeof n ? n : (0,
            o.default)(+n),
            e) : t
        }
          ,
          e.y = function (t) {
            return arguments.length ? (n = "function" == typeof t ? t : (0,
              o.default)(+t),
              e) : n
          }
          ,
          e.defined = function (t) {
            return arguments.length ? (r = "function" == typeof t ? t : (0,
              o.default)(!!t),
              e) : r
          }
          ,
          e.curve = function (t) {
            return arguments.length ? (u = t,
              null != a && (c = u(a)),
              e) : u
          }
          ,
          e.context = function (t) {
            return arguments.length ? (null == t ? a = c = null : c = u(a = t),
              e) : a
          }
          ,
          e
      }
      ;
    var i = n(169)
      , a = n(172)
      , o = r(a)
      , u = n(323)
      , s = r(u)
      , l = n(431);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e[0]
    }
    function i(e) {
      return e[1]
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.x = r,
      t.y = i
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      var r = e._x1
        , i = e._y1
        , o = e._x2
        , u = e._y2;
      if (e._l01_a > a.epsilon) {
        var s = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a
          , l = 3 * e._l01_a * (e._l01_a + e._l12_a);
        r = (r * s - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / l,
          i = (i * s - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / l
      }
      if (e._l23_a > a.epsilon) {
        var c = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a
          , f = 3 * e._l23_a * (e._l23_a + e._l12_a);
        o = (o * c + e._x1 * e._l23_2a - t * e._l12_2a) / f,
          u = (u * c + e._y1 * e._l23_2a - n * e._l12_2a) / f
      }
      e._context.bezierCurveTo(r, i, o, u, e._x2, e._y2)
    }
    function i(e, t) {
      this._context = e,
        this._alpha = t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.point = void 0;
    var a = n(229)
      , o = n(326);
    t.point = r,
      i.prototype = {
        areaStart: function () {
          this._line = 0
        },
        areaEnd: function () {
          this._line = NaN
        },
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);
              break;
            case 3:
              this.point(this._x2, this._y2)
          }
          (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function (e, t) {
          if (e = +e,
            t = +t,
            this._point) {
            var n = this._x2 - e
              , i = this._y2 - t;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + i * i, this._alpha))
          }
          switch (this._point) {
            case 0:
              this._point = 1,
                this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
            default:
              r(this, e, t)
          }
          this._l01_a = this._l12_a,
            this._l12_a = this._l23_a,
            this._l01_2a = this._l12_2a,
            this._l12_2a = this._l23_2a,
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = e,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = t
        }
      },
      t.default = function e(t) {
        function n(e) {
          return t ? new i(e, t) : new o.Cardinal(e, 0)
        }
        return n.alpha = function (t) {
          return e(+t)
        }
          ,
          n
      }(.5)
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      for (var t, n = 0, r = -1, i = e.length; ++r < i;)
        (t = +e[r][1]) && (n += t);
      return n
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        var t = e.map(r);
        return (0,
          a.default)(e).sort(function (e, n) {
            return t[e] - t[n]
          })
      }
      ,
      t.sum = r;
    var i = n(231)
      , a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i)
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      this._ = null
    }
    function i(e) {
      e.U = e.C = e.L = e.R = e.P = e.N = null
    }
    function a(e, t) {
      var n = t
        , r = t.R
        , i = n.U;
      i ? i.L === n ? i.L = r : i.R = r : e._ = r,
        r.U = i,
        n.U = r,
        n.R = r.L,
        n.R && (n.R.U = n),
        r.L = n
    }
    function o(e, t) {
      var n = t
        , r = t.L
        , i = n.U;
      i ? i.L === n ? i.L = r : i.R = r : e._ = r,
        r.U = i,
        n.U = r,
        n.L = r.R,
        n.L && (n.L.U = n),
        r.R = n
    }
    function u(e) {
      for (; e.L;)
        e = e.L;
      return e
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.RedBlackNode = i,
      r.prototype = {
        constructor: r,
        insert: function (e, t) {
          var n, r, i;
          if (e) {
            if (t.P = e,
              t.N = e.N,
              e.N && (e.N.P = t),
              e.N = t,
              e.R) {
              for (e = e.R; e.L;)
                e = e.L;
              e.L = t
            } else
              e.R = t;
            n = e
          } else
            this._ ? (e = u(this._),
              t.P = null,
              t.N = e,
              e.P = e.L = t,
              n = e) : (t.P = t.N = null,
                this._ = t,
                n = null);
          for (t.L = t.R = null,
            t.U = n,
            t.C = !0,
            e = t; n && n.C;)
            r = n.U,
              n === r.L ? (i = r.R,
                i && i.C ? (n.C = i.C = !1,
                  r.C = !0,
                  e = r) : (e === n.R && (a(this, n),
                    e = n,
                    n = e.U),
                    n.C = !1,
                    r.C = !0,
                    o(this, r))) : (i = r.L,
                      i && i.C ? (n.C = i.C = !1,
                        r.C = !0,
                        e = r) : (e === n.L && (o(this, n),
                          e = n,
                          n = e.U),
                          n.C = !1,
                          r.C = !0,
                          a(this, r))),
              n = e.U;
          this._.C = !1
        },
        remove: function (e) {
          e.N && (e.N.P = e.P),
            e.P && (e.P.N = e.N),
            e.N = e.P = null;
          var t, n, r, i = e.U, s = e.L, l = e.R;
          if (n = s ? l ? u(l) : s : l,
            i ? i.L === e ? i.L = n : i.R = n : this._ = n,
            s && l ? (r = n.C,
              n.C = e.C,
              n.L = s,
              s.U = n,
              n !== l ? (i = n.U,
                n.U = e.U,
                e = n.R,
                i.L = e,
                n.R = l,
                l.U = n) : (n.U = i,
                  i = n,
                  e = n.R)) : (r = e.C,
                    e = n),
            e && (e.U = i),
            !r) {
            if (e && e.C)
              return void (e.C = !1);
            do {
              if (e === this._)
                break;
              if (e === i.L) {
                if (t = i.R,
                  t.C && (t.C = !1,
                    i.C = !0,
                    a(this, i),
                    t = i.R),
                  t.L && t.L.C || t.R && t.R.C) {
                  t.R && t.R.C || (t.L.C = !1,
                    t.C = !0,
                    o(this, t),
                    t = i.R),
                    t.C = i.C,
                    i.C = t.R.C = !1,
                    a(this, i),
                    e = this._;
                  break
                }
              } else if (t = i.L,
                t.C && (t.C = !1,
                  i.C = !0,
                  o(this, i),
                  t = i.L),
                t.L && t.L.C || t.R && t.R.C) {
                t.L && t.L.C || (t.R.C = !1,
                  t.C = !0,
                  a(this, t),
                  t = i.L),
                  t.C = i.C,
                  i.C = t.L.C = !1,
                  o(this, i),
                  e = this._;
                break
              }
              t.C = !0,
                e = i,
                i = i.U
            } while (!e.C); e && (e.C = !1)
          }
        }
      },
      t.default = r
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n, r) {
      var i = [null, null]
        , o = l.edges.push(i) - 1;
      return i.left = e,
        i.right = t,
        n && a(i, e, t, n),
        r && a(i, t, e, r),
        l.cells[e.index].halfedges.push(o),
        l.cells[t.index].halfedges.push(o),
        i
    }
    function i(e, t, n) {
      var r = [t, n];
      return r.left = e,
        r
    }
    function a(e, t, n, r) {
      e[0] || e[1] ? e.left === n ? e[1] = r : e[0] = r : (e[0] = r,
        e.left = t,
        e.right = n)
    }
    function o(e, t, n, r, i) {
      var a, o = e[0], u = e[1], s = o[0], l = o[1], c = u[0], f = u[1], d = 0, h = 1, p = c - s, v = f - l;
      if (a = t - s,
        p || !(a > 0)) {
        if (a /= p,
          p < 0) {
          if (a < d)
            return;
          a < h && (h = a)
        } else if (p > 0) {
          if (a > h)
            return;
          a > d && (d = a)
        }
        if (a = r - s,
          p || !(a < 0)) {
          if (a /= p,
            p < 0) {
            if (a > h)
              return;
            a > d && (d = a)
          } else if (p > 0) {
            if (a < d)
              return;
            a < h && (h = a)
          }
          if (a = n - l,
            v || !(a > 0)) {
            if (a /= v,
              v < 0) {
              if (a < d)
                return;
              a < h && (h = a)
            } else if (v > 0) {
              if (a > h)
                return;
              a > d && (d = a)
            }
            if (a = i - l,
              v || !(a < 0)) {
              if (a /= v,
                v < 0) {
                if (a > h)
                  return;
                a > d && (d = a)
              } else if (v > 0) {
                if (a < d)
                  return;
                a < h && (h = a)
              }
              return !(d > 0 || h < 1) || (d > 0 && (e[0] = [s + d * p, l + d * v]),
                h < 1 && (e[1] = [s + h * p, l + h * v]),
                !0)
            }
          }
        }
      }
    }
    function u(e, t, n, r, i) {
      var a = e[1];
      if (a)
        return !0;
      var o, u, s = e[0], l = e.left, c = e.right, f = l[0], d = l[1], h = c[0], p = c[1], v = (f + h) / 2, y = (d + p) / 2;
      if (p === d) {
        if (v < t || v >= r)
          return;
        if (f > h) {
          if (s) {
            if (s[1] >= i)
              return
          } else
            s = [v, n];
          a = [v, i]
        } else {
          if (s) {
            if (s[1] < n)
              return
          } else
            s = [v, i];
          a = [v, n]
        }
      } else if (o = (f - h) / (p - d),
        u = y - o * v,
        o < -1 || o > 1)
        if (f > h) {
          if (s) {
            if (s[1] >= i)
              return
          } else
            s = [(n - u) / o, n];
          a = [(i - u) / o, i]
        } else {
          if (s) {
            if (s[1] < n)
              return
          } else
            s = [(i - u) / o, i];
          a = [(n - u) / o, n]
        }
      else if (d < p) {
        if (s) {
          if (s[0] >= r)
            return
        } else
          s = [t, o * t + u];
        a = [r, o * r + u]
      } else {
        if (s) {
          if (s[0] < t)
            return
        } else
          s = [r, o * r + u];
        a = [t, o * t + u]
      }
      return e[0] = s,
        e[1] = a,
        !0
    }
    function s(e, t, n, r) {
      for (var i, a = l.edges.length; a--;)
        u(i = l.edges[a], e, t, n, r) && o(i, e, t, n, r) && (Math.abs(i[0][0] - i[1][0]) > l.epsilon || Math.abs(i[0][1] - i[1][1]) > l.epsilon) || delete l.edges[a]
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.createEdge = r,
      t.createBorderEdge = i,
      t.setEdgeEnd = a,
      t.clipEdges = s;
    var l = n(232)
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n, r, i) {
      t.n(p, r)
    }
    n(1758);
    var i = e.exports = n(0).t()
      , a = n(1)
      , o = a.rc
      , u = o("/pc-web$1.0.0/src/routes/company/chart/components/app-loading-spinner/index.marko", function () {
        return e.exports
      })
      , s = a.r
      , l = a.c
      , c = n(2)
      , f = c.e
      , d = c.const
      , h = d("88c383")
      , p = f("DIV", {
        class: "block-spinner"
      }, "0", null, 1, 0, {
          i: h()
        }).e("DIV", {
          class: "block-spinner-bar"
        }, "1", null, 3).e("DIV", {
          class: "bounce1"
        }, "2", null, 0).e("DIV", {
          class: "bounce2"
        }, "3", null, 0).e("DIV", {
          class: "bounce3"
        }, "4", null, 0);
    i._ = s(r, {
      ae_: !0,
      _l_: u
    }),
      i.Component = l({}, i._)
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n, r, i) {
      t.be("DIV", f, "0", r),
        t.e("DIV", d, "1", r, 3).e("DIV", _, "2", r, 0, 0, {
          onclick: n.d("onScaleChart", !1, [1])
        }).n(x, r).e("DIV", w, "4", r, 0, 0, {
          onclick: n.d("onScaleChart", !1, [-1])
        }),
        e.rotate && t.e("DIV", P, "5", r, 3).e("DIV", M, "6", r, 0, 0, {
          onclick: n.d("onRotateChart", !1, [-1])
        }).n(O, r).e("DIV", E, "8", r, 0, 0, {
          onclick: n.d("onRotateChart", !1, [1])
        }),
        t.be("DIV", h, "9", r),
        !i.isFullscreen && i.canFullscreen && t.e("DIV", j, "10", r, 0, 0, {
          onclick: n.d("onDisplayFullScreen", !1)
        }),
        i.isFullscreen && i.canFullscreen && t.e("DIV", S, "11", r, 0, 0, {
          onclick: n.d("onExitFullScreen", !1)
        }),
        t.n(g, r),
        t.e("DIV", b, "13", r, 0, 0, {
          onclick: n.d("onResetChart", !1)
        }),
        t.ee(),
        t.ee()
    }
    n(1759);
    var i = e.exports = n(0).t()
      , a = n(1)
      , o = a.rc
      , u = o("/pc-web$1.0.0/src/routes/company/chart/components/app-chart-operation/index.marko", function () {
        return e.exports
      })
      , s = n(1760)
      , l = a.r
      , c = a.c
      , f = {
        class: "chart-operation-section",
        id: "divOperationSection"
      }
      , d = {
        class: "chart-operation-container"
      }
      , h = {
        class: "chart-operation-container margin-t-1x"
      }
      , p = n(2)
      , v = p.e
      , y = p.const
      , m = y("acadaa")
      , g = v("DIV", {
        class: "chart-operation-seperator",
        "v-if": "canFullscreen"
      }, "12", null, 0, 0, {
          i: m()
        })
      , b = {
        class: "chart-operation-reset",
        title: "默认大小"
      }
      , _ = {
        class: "chart-operation-scale-up",
        title: "放大"
      }
      , x = v("DIV", {
        class: "chart-operation-seperator"
      }, "3", null, 0, 0, {
          i: m()
        })
      , w = {
        class: "chart-operation-scale-down",
        title: "缩小"
      }
      , P = {
        class: "chart-operation-container margin-t-1x"
      }
      , M = {
        class: "chart-operation-rotate-left",
        title: "逆时针旋转"
      }
      , O = v("DIV", {
        class: "chart-operation-seperator"
      }, "7", null, 0, 0, {
          i: m()
        })
      , E = {
        class: "chart-operation-rotate-right",
        title: "顺时针旋转"
      }
      , j = {
        class: "chart-operation-fullscreen",
        title: "全屏显示"
      }
      , S = {
        class: "chart-operation-exit-fullscreen",
        title: "退出全屏"
      };
    i._ = l(r, {
      _l_: u
    }, s),
      i.Component = c(s, i._)
  }
  , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.bisectLeft = t.bisectRight = void 0;
    var i = n(202)
      , a = r(i)
      , o = n(699)
      , u = r(o)
      , s = (0,
        u.default)(a.default)
      , l = t.bisectRight = s.right;
    t.bisectLeft = s.left;
    t.default = l
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return function (t, n) {
        return (0,
          a.default)(e(t), n)
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return 1 === e.length && (e = r(e)),
          {
            left: function (t, n, r, i) {
              for (null == r && (r = 0),
                null == i && (i = t.length); r < i;) {
                var a = r + i >>> 1;
                e(t[a], n) < 0 ? r = a + 1 : i = a
              }
              return r
            },
            right: function (t, n, r, i) {
              for (null == r && (r = 0),
                null == i && (i = t.length); r < i;) {
                var a = r + i >>> 1;
                e(t[a], n) > 0 ? i = a : r = a + 1
              }
              return r
            }
          }
      }
      ;
    var i = n(202)
      , a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      return [e, t]
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        null == t && (t = r);
        for (var n = 0, i = e.length - 1, a = e[0], o = new Array(i < 0 ? 0 : i); n < i;)
          o[n] = t(a, a = e[++n]);
        return o
      }
      ,
      t.pair = r
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n = (0,
          i.default)(e, t);
        return n ? Math.sqrt(n) : n
      }
      ;
    var r = n(702)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n, r, a = e.length, o = 0, u = -1, s = 0, l = 0;
        if (null == t)
          for (; ++u < a;)
            isNaN(n = (0,
              i.default)(e[u])) || (r = n - s,
                s += r / ++o,
                l += r * (n - s));
        else
          for (; ++u < a;)
            isNaN(n = (0,
              i.default)(t(e[u], u, e))) || (r = n - s,
                s += r / ++o,
                l += r * (n - s));
        if (o > 1)
          return l / (o - 1)
      }
      ;
    var r = n(221)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n, r, i, a = e.length, o = -1;
        if (null == t) {
          for (; ++o < a;)
            if (null != (n = e[o]) && n >= n)
              for (r = i = n; ++o < a;)
                null != (n = e[o]) && (r > n && (r = n),
                  i < n && (i = n))
        } else
          for (; ++o < a;)
            if (null != (n = t(e[o], o, e)) && n >= n)
              for (r = i = n; ++o < a;)
                null != (n = t(e[o], o, e)) && (r > n && (r = n),
                  i < n && (i = n));
        return [r, i]
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = Array.prototype;
    t.slice = r.slice,
      t.map = r.map
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n) {
        e = +e,
          t = +t,
          n = (i = arguments.length) < 2 ? (t = e,
            e = 0,
            1) : i < 3 ? 1 : +n;
        for (var r = -1, i = 0 | Math.max(0, Math.ceil((t - e) / n)), a = new Array(i); ++r < i;)
          a[r] = e + r * n;
        return a
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      var r = (t - e) / Math.max(0, n)
        , i = Math.floor(Math.log(r) / Math.LN10)
        , s = r / Math.pow(10, i);
      return i >= 0 ? (s >= a ? 10 : s >= o ? 5 : s >= u ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (s >= a ? 10 : s >= o ? 5 : s >= u ? 2 : 1)
    }
    function i(e, t, n) {
      var r = Math.abs(t - e) / Math.max(0, n)
        , i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10))
        , s = r / i;
      return s >= a ? i *= 10 : s >= o ? i *= 5 : s >= u && (i *= 2),
        t < e ? -i : i
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n) {
        var i, a, o, u, s = -1;
        if (t = +t,
          e = +e,
          n = +n,
          e === t && n > 0)
          return [e];
        if ((i = t < e) && (a = e,
          e = t,
          t = a),
          0 === (u = r(e, t, n)) || !isFinite(u))
          return [];
        if (u > 0)
          for (e = Math.ceil(e / u),
            t = Math.floor(t / u),
            o = new Array(a = Math.ceil(t - e + 1)); ++s < a;)
            o[s] = (e + s) * u;
        else
          for (e = Math.floor(e * u),
            t = Math.ceil(t * u),
            o = new Array(a = Math.ceil(e - t + 1)); ++s < a;)
            o[s] = (e - s) / u;
        return i && o.reverse(),
          o
      }
      ,
      t.tickIncrement = r,
      t.tickStep = i;
    var a = Math.sqrt(50)
      , o = Math.sqrt(10)
      , u = Math.sqrt(2)
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return Math.ceil(Math.log(e.length) / Math.LN2) + 1
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n, r, i = e.length, a = -1;
        if (null == t) {
          for (; ++a < i;)
            if (null != (n = e[a]) && n >= n)
              for (r = n; ++a < i;)
                null != (n = e[a]) && r > n && (r = n)
        } else
          for (; ++a < i;)
            if (null != (n = t(e[a], a, e)) && n >= n)
              for (r = n; ++a < i;)
                null != (n = t(e[a], a, e)) && r > n && (r = n);
        return r
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e.length
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        if (!(o = e.length))
          return [];
        for (var t = -1, n = (0,
          a.default)(e, r), i = new Array(n); ++t < n;)
          for (var o, u = -1, s = i[t] = new Array(o); ++u < o;)
            s[u] = e[u][t];
        return i
      }
      ;
    var i = n(708)
      , a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return "string" == typeof e ? new r.Selection([[document.querySelector(e)]], [document.documentElement]) : new r.Selection([[e]], r.root)
      }
      ;
    var r = n(111);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      return []
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return null == e ? r : function () {
          return this.querySelectorAll(e)
        }
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = function (e) {
      return function () {
        return this.matches(e)
      }
    };
    if ("undefined" != typeof document) {
      var i = document.documentElement;
      if (!i.matches) {
        var a = i.webkitMatchesSelector || i.msMatchesSelector || i.mozMatchesSelector || i.oMatchesSelector;
        r = function (e) {
          return function () {
            return a.call(this, e)
          }
        }
      }
    }
    t.default = r,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      this.ownerDocument = e.ownerDocument,
        this.namespaceURI = e.namespaceURI,
        this._next = null,
        this._parent = e,
        this.__data__ = t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        return new o.Selection(this._enter || this._groups.map(a.default), this._parents)
      }
      ,
      t.EnterNode = r;
    var i = n(714)
      , a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i)
      , o = n(111);
    r.prototype = {
      constructor: r,
      appendChild: function (e) {
        return this._parent.insertBefore(e, this._next)
      },
      insertBefore: function (e, t) {
        return this._parent.insertBefore(e, t)
      },
      querySelector: function (e) {
        return this._parent.querySelector(e)
      },
      querySelectorAll: function (e) {
        return this._parent.querySelectorAll(e)
      }
    }
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return new Array(e.length)
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return function () {
        this.style.removeProperty(e)
      }
    }
    function i(e, t, n) {
      return function () {
        this.style.setProperty(e, t, n)
      }
    }
    function a(e, t, n) {
      return function () {
        var r = t.apply(this, arguments);
        null == r ? this.style.removeProperty(e) : this.style.setProperty(e, r, n)
      }
    }
    function o(e, t) {
      return e.style.getPropertyValue(t) || (0,
        s.default)(e).getComputedStyle(e, null).getPropertyValue(t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n) {
        return arguments.length > 1 ? this.each((null == t ? r : "function" == typeof t ? a : i)(e, t, null == n ? "" : n)) : o(this.node(), e)
      }
      ,
      t.styleValue = o;
    var u = n(401)
      , s = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(u)
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n = e.document.documentElement
        , r = (0,
          i.select)(e).on("dragstart.drag", null);
      t && (r.on("click.drag", o.default, !0),
        setTimeout(function () {
          r.on("click.drag", null)
        }, 0)),
        "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect,
          delete n.__noselect)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        var t = e.document.documentElement
          , n = (0,
            i.select)(e).on("dragstart.drag", o.default, !0);
        "onselectstart" in t ? n.on("selectstart.drag", o.default, !0) : (t.__noselect = t.style.MozUserSelect,
          t.style.MozUserSelect = "none")
      }
      ,
      t.yesdrag = r;
    var i = n(62)
      , a = n(717)
      , o = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(a)
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      i.event.stopImmediatePropagation()
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.nopropagation = r,
      t.default = function () {
        i.event.preventDefault(),
          i.event.stopImmediatePropagation()
      }
      ;
    var i = n(62)
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.deg2rad = Math.PI / 180,
      t.rad2deg = 180 / Math.PI
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e) {
      return function (t) {
        var n, r, i = t.length, o = new Array(i), u = new Array(i), s = new Array(i);
        for (n = 0; n < i; ++n)
          r = (0,
            a.rgb)(t[n]),
            o[n] = r.r || 0,
            u[n] = r.g || 0,
            s[n] = r.b || 0;
        return o = e(o),
          u = e(u),
          s = e(s),
          r.opacity = 1,
          function (e) {
            return r.r = o(e),
              r.g = u(e),
              r.b = s(e),
              r + ""
          }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.rgbBasisClosed = t.rgbBasis = void 0;
    var a = n(138)
      , o = n(407)
      , u = r(o)
      , s = n(720)
      , l = r(s)
      , c = n(222)
      , f = r(c);
    t.default = function e(t) {
      function n(e, t) {
        var n = r((e = (0,
          a.rgb)(e)).r, (t = (0,
            a.rgb)(t)).r)
          , i = r(e.g, t.g)
          , o = r(e.b, t.b)
          , u = (0,
            f.default)(e.opacity, t.opacity);
        return function (t) {
          return e.r = n(t),
            e.g = i(t),
            e.b = o(t),
            e.opacity = u(t),
            e + ""
        }
      }
      var r = (0,
        c.gamma)(t);
      return n.gamma = e,
        n
    }(1);
    t.rgbBasis = i(u.default),
      t.rgbBasisClosed = i(l.default)
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        var t = e.length;
        return function (n) {
          var i = Math.floor(((n %= 1) < 0 ? ++n : n) * t)
            , a = e[(i + t - 1) % t]
            , o = e[i % t]
            , u = e[(i + 1) % t]
            , s = e[(i + 2) % t];
          return (0,
            r.basis)((n - i / t) * t, a, o, u, s)
        }
      }
      ;
    var r = n(407);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return function () {
          return e
        }
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n, r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, o = new Array(a), u = new Array(r);
        for (n = 0; n < a; ++n)
          o[n] = (0,
            i.default)(e[n], t[n]);
        for (; n < r; ++n)
          u[n] = t[n];
        return function (e) {
          for (n = 0; n < a; ++n)
            u[n] = o[n](e);
          return u
        }
      }
      ;
    var r = n(404)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n = new Date;
        return e = +e,
          t -= e,
          function (r) {
            return n.setTime(e + t * r),
              n
          }
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    }
      : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      ;
    t.default = function (e, t) {
      var n, i = {}, o = {};
      null !== e && "object" === (void 0 === e ? "undefined" : r(e)) || (e = {}),
        null !== t && "object" === (void 0 === t ? "undefined" : r(t)) || (t = {});
      for (n in t)
        n in e ? i[n] = (0,
          a.default)(e[n], t[n]) : o[n] = t[n];
      return function (e) {
        for (n in i)
          o[n] = i[n](e);
        return o
      }
    }
      ;
    var i = n(404)
      , a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return function () {
        return e
      }
    }
    function i(e) {
      return function (t) {
        return e(t) + ""
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n, a, l, c = u.lastIndex = s.lastIndex = 0, f = -1, d = [], h = [];
        for (e += "",
          t += ""; (n = u.exec(e)) && (a = s.exec(t));)
          (l = a.index) > c && (l = t.slice(c, l),
            d[f] ? d[f] += l : d[++f] = l),
            (n = n[0]) === (a = a[0]) ? d[f] ? d[f] += a : d[++f] = a : (d[++f] = null,
              h.push({
                i: f,
                x: (0,
                  o.default)(n, a)
              })),
            c = s.lastIndex;
        return c < t.length && (l = t.slice(c),
          d[f] ? d[f] += l : d[++f] = l),
          d.length < 2 ? h[0] ? i(h[0].x) : r(t) : (t = h.length,
            function (e) {
              for (var n, r = 0; r < t; ++r)
                d[(n = h[r]).i] = n.x(e);
              return d.join("")
            }
          )
      }
      ;
    var a = n(312)
      , o = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(a)
      , u = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g
      , s = new RegExp(u.source, "g");
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n;
        return ("number" == typeof t ? i.interpolateNumber : t instanceof r.color ? i.interpolateRgb : (n = (0,
          r.color)(t)) ? (t = n,
            i.interpolateRgb) : i.interpolateString)(e, t)
      }
      ;
    var r = n(138)
      , i = n(112);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n, i, a, o = e.__transition, u = !0;
        if (o) {
          t = null == t ? null : t + "";
          for (a in o)
            (n = o[a]).name === t ? (i = n.state > r.STARTING && n.state < r.ENDING,
              n.state = r.ENDED,
              n.timer.stop(),
              i && n.on.call("interrupt", e, e.__data__, n.index, n.group),
              delete o[a]) : u = !1;
          u && delete e.__transition
        }
      }
      ;
    var r = n(113);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1562);
    Object.defineProperty(t, "easeLinear", {
      enumerable: !0,
      get: function () {
        return r.linear
      }
    });
    var i = n(1563);
    Object.defineProperty(t, "easeQuad", {
      enumerable: !0,
      get: function () {
        return i.quadInOut
      }
    }),
      Object.defineProperty(t, "easeQuadIn", {
        enumerable: !0,
        get: function () {
          return i.quadIn
        }
      }),
      Object.defineProperty(t, "easeQuadOut", {
        enumerable: !0,
        get: function () {
          return i.quadOut
        }
      }),
      Object.defineProperty(t, "easeQuadInOut", {
        enumerable: !0,
        get: function () {
          return i.quadInOut
        }
      });
    var a = n(1564);
    Object.defineProperty(t, "easeCubic", {
      enumerable: !0,
      get: function () {
        return a.cubicInOut
      }
    }),
      Object.defineProperty(t, "easeCubicIn", {
        enumerable: !0,
        get: function () {
          return a.cubicIn
        }
      }),
      Object.defineProperty(t, "easeCubicOut", {
        enumerable: !0,
        get: function () {
          return a.cubicOut
        }
      }),
      Object.defineProperty(t, "easeCubicInOut", {
        enumerable: !0,
        get: function () {
          return a.cubicInOut
        }
      });
    var o = n(1565);
    Object.defineProperty(t, "easePoly", {
      enumerable: !0,
      get: function () {
        return o.polyInOut
      }
    }),
      Object.defineProperty(t, "easePolyIn", {
        enumerable: !0,
        get: function () {
          return o.polyIn
        }
      }),
      Object.defineProperty(t, "easePolyOut", {
        enumerable: !0,
        get: function () {
          return o.polyOut
        }
      }),
      Object.defineProperty(t, "easePolyInOut", {
        enumerable: !0,
        get: function () {
          return o.polyInOut
        }
      });
    var u = n(1566);
    Object.defineProperty(t, "easeSin", {
      enumerable: !0,
      get: function () {
        return u.sinInOut
      }
    }),
      Object.defineProperty(t, "easeSinIn", {
        enumerable: !0,
        get: function () {
          return u.sinIn
        }
      }),
      Object.defineProperty(t, "easeSinOut", {
        enumerable: !0,
        get: function () {
          return u.sinOut
        }
      }),
      Object.defineProperty(t, "easeSinInOut", {
        enumerable: !0,
        get: function () {
          return u.sinInOut
        }
      });
    var s = n(1567);
    Object.defineProperty(t, "easeExp", {
      enumerable: !0,
      get: function () {
        return s.expInOut
      }
    }),
      Object.defineProperty(t, "easeExpIn", {
        enumerable: !0,
        get: function () {
          return s.expIn
        }
      }),
      Object.defineProperty(t, "easeExpOut", {
        enumerable: !0,
        get: function () {
          return s.expOut
        }
      }),
      Object.defineProperty(t, "easeExpInOut", {
        enumerable: !0,
        get: function () {
          return s.expInOut
        }
      });
    var l = n(1568);
    Object.defineProperty(t, "easeCircle", {
      enumerable: !0,
      get: function () {
        return l.circleInOut
      }
    }),
      Object.defineProperty(t, "easeCircleIn", {
        enumerable: !0,
        get: function () {
          return l.circleIn
        }
      }),
      Object.defineProperty(t, "easeCircleOut", {
        enumerable: !0,
        get: function () {
          return l.circleOut
        }
      }),
      Object.defineProperty(t, "easeCircleInOut", {
        enumerable: !0,
        get: function () {
          return l.circleInOut
        }
      });
    var c = n(1569);
    Object.defineProperty(t, "easeBounce", {
      enumerable: !0,
      get: function () {
        return c.bounceOut
      }
    }),
      Object.defineProperty(t, "easeBounceIn", {
        enumerable: !0,
        get: function () {
          return c.bounceIn
        }
      }),
      Object.defineProperty(t, "easeBounceOut", {
        enumerable: !0,
        get: function () {
          return c.bounceOut
        }
      }),
      Object.defineProperty(t, "easeBounceInOut", {
        enumerable: !0,
        get: function () {
          return c.bounceInOut
        }
      });
    var f = n(1570);
    Object.defineProperty(t, "easeBack", {
      enumerable: !0,
      get: function () {
        return f.backInOut
      }
    }),
      Object.defineProperty(t, "easeBackIn", {
        enumerable: !0,
        get: function () {
          return f.backIn
        }
      }),
      Object.defineProperty(t, "easeBackOut", {
        enumerable: !0,
        get: function () {
          return f.backOut
        }
      }),
      Object.defineProperty(t, "easeBackInOut", {
        enumerable: !0,
        get: function () {
          return f.backInOut
        }
      });
    var d = n(1571);
    Object.defineProperty(t, "easeElastic", {
      enumerable: !0,
      get: function () {
        return d.elasticOut
      }
    }),
      Object.defineProperty(t, "easeElasticIn", {
        enumerable: !0,
        get: function () {
          return d.elasticIn
        }
      }),
      Object.defineProperty(t, "easeElasticOut", {
        enumerable: !0,
        get: function () {
          return d.elasticOut
        }
      }),
      Object.defineProperty(t, "easeElasticInOut", {
        enumerable: !0,
        get: function () {
          return d.elasticInOut
        }
      })
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = (t.cos = Math.cos,
      t.sin = Math.sin,
      t.pi = Math.PI);
    t.halfPi = r / 2,
      t.tau = 2 * r,
      t.max = Math.max
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e.x
    }
    function i(e) {
      return e.y
    }
    function a(e) {
      function t() {
        n(),
          g.call("tick", a),
          f < d && (m.stop(),
            g.call("end", a))
      }
      function n() {
        var t, n, r = e.length;
        for (f += (p - f) * h,
          y.each(function (e) {
            e(f)
          }),
          t = 0; t < r; ++t)
          n = e[t],
            null == n.fx ? n.x += n.vx *= v : (n.x = n.fx,
              n.vx = 0),
            null == n.fy ? n.y += n.vy *= v : (n.y = n.fy,
              n.vy = 0)
      }
      function r() {
        for (var t, n = 0, r = e.length; n < r; ++n) {
          if (t = e[n],
            t.index = n,
            isNaN(t.x) || isNaN(t.y)) {
            var i = l * Math.sqrt(n)
              , a = n * c;
            t.x = i * Math.cos(a),
              t.y = i * Math.sin(a)
          }
          (isNaN(t.vx) || isNaN(t.vy)) && (t.vx = t.vy = 0)
        }
      }
      function i(t) {
        return t.initialize && t.initialize(e),
          t
      }
      var a, f = 1, d = .001, h = 1 - Math.pow(d, 1 / 300), p = 0, v = .6, y = (0,
        u.map)(), m = (0,
          s.timer)(t), g = (0,
            o.dispatch)("tick", "end");
      return null == e && (e = []),
        r(),
        a = {
          tick: n,
          restart: function () {
            return m.restart(t),
              a
          },
          stop: function () {
            return m.stop(),
              a
          },
          nodes: function (t) {
            return arguments.length ? (e = t,
              r(),
              y.each(i),
              a) : e
          },
          alpha: function (e) {
            return arguments.length ? (f = +e,
              a) : f
          },
          alphaMin: function (e) {
            return arguments.length ? (d = +e,
              a) : d
          },
          alphaDecay: function (e) {
            return arguments.length ? (h = +e,
              a) : +h
          },
          alphaTarget: function (e) {
            return arguments.length ? (p = +e,
              a) : p
          },
          velocityDecay: function (e) {
            return arguments.length ? (v = 1 - e,
              a) : 1 - v
          },
          force: function (e, t) {
            return arguments.length > 1 ? (null == t ? y.remove(e) : y.set(e, i(t)),
              a) : y.get(e)
          },
          find: function (t, n, r) {
            var i, a, o, u, s, l = 0, c = e.length;
            for (null == r ? r = 1 / 0 : r *= r,
              l = 0; l < c; ++l)
              u = e[l],
                i = t - u.x,
                a = n - u.y,
                (o = i * i + a * a) < r && (s = u,
                  r = o);
            return s
          },
          on: function (e, t) {
            return arguments.length > 1 ? (g.on(e, t),
              a) : g.on(e)
          }
        }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = void 0,
      t.x = r,
      t.y = i;
    var o = n(168)
      , u = n(223)
      , s = n(314)
      , l = 10
      , c = Math.PI * (3 - Math.sqrt(5));
    t.default = a
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        function t(e) {
          function t(e) {
            var t, i, l, c = _, f = x;
            if ("c" === b)
              f = w(e) + f,
                e = "";
            else {
              e = +e;
              var h = e < 0;
              if (e = w(Math.abs(e), g),
                h && 0 == +e && (h = !1),
                c = (h ? "(" === u ? u : "-" : "-" === u || "(" === u ? "" : u) + c,
                f = ("s" === b ? m[8 + p.prefixExponent / 3] : "") + f + (h && "(" === u ? ")" : ""),
                P)
                for (t = -1,
                  i = e.length; ++t < i;)
                  if (48 > (l = e.charCodeAt(t)) || l > 57) {
                    f = (46 === l ? o + e.slice(t + 1) : e.slice(t)) + f,
                      e = e.slice(0, t);
                    break
                  }
            }
            y && !d && (e = r(e, 1 / 0));
            var M = c.length + e.length + f.length
              , O = M < v ? new Array(v - M + 1).join(n) : "";
            switch (y && d && (e = r(O + e, O.length ? v - f.length : 1 / 0),
              O = ""),
            a) {
              case "<":
                e = c + e + f + O;
                break;
              case "=":
                e = c + O + e + f;
                break;
              case "^":
                e = O.slice(0, M = O.length >> 1) + c + e + f + O.slice(M);
                break;
              default:
                e = O + c + e + f
            }
            return s(e)
          }
          e = (0,
            f.default)(e);
          var n = e.fill
            , a = e.align
            , u = e.sign
            , l = e.symbol
            , d = e.zero
            , v = e.width
            , y = e.comma
            , g = e.precision
            , b = e.type
            , _ = "$" === l ? i[0] : "#" === l && /[boxX]/.test(b) ? "0" + b.toLowerCase() : ""
            , x = "$" === l ? i[1] : /[%p]/.test(b) ? c : ""
            , w = h.default[b]
            , P = !b || /[defgprs%]/.test(b);
          return g = null == g ? b ? 6 : 12 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, g)) : Math.max(0, Math.min(20, g)),
            t.toString = function () {
              return e + ""
            }
            ,
            t
        }
        function n(e, n) {
          var r = t((e = (0,
            f.default)(e),
            e.type = "f",
            e))
            , i = 3 * Math.max(-8, Math.min(8, Math.floor((0,
              a.default)(n) / 3)))
            , o = Math.pow(10, -i)
            , u = m[8 + i / 3];
          return function (e) {
            return r(o * e) + u
          }
        }
        var r = e.grouping && e.thousands ? (0,
          u.default)(e.grouping, e.thousands) : y.default
          , i = e.currency
          , o = e.decimal
          , s = e.numerals ? (0,
            l.default)(e.numerals) : y.default
          , c = e.percent || "%";
        return {
          format: t,
          formatPrefix: n
        }
      }
      ;
    var i = n(315)
      , a = r(i)
      , o = n(1610)
      , u = r(o)
      , s = n(1611)
      , l = r(s)
      , c = n(732)
      , f = r(c)
      , d = n(733)
      , h = r(d)
      , p = n(734)
      , v = n(1614)
      , y = r(v)
      , m = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return new i(e)
    }
    function i(e) {
      if (!(t = u.exec(e)))
        throw new Error("invalid format: " + e);
      var t, n = t[1] || " ", r = t[2] || ">", i = t[3] || "-", a = t[4] || "", s = !!t[5], l = t[6] && +t[6], c = !!t[7], f = t[8] && +t[8].slice(1), d = t[9] || "";
      "n" === d ? (c = !0,
        d = "g") : o.default[d] || (d = ""),
        (s || "0" === n && "=" === r) && (s = !0,
          n = "0",
          r = "="),
        this.fill = n,
        this.align = r,
        this.sign = i,
        this.symbol = a,
        this.zero = s,
        this.width = l,
        this.comma = c,
        this.precision = f,
        this.type = d
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = r;
    var a = n(733)
      , o = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(a)
      , u = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
    r.prototype = i.prototype,
      i.prototype.toString = function () {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(1612)
      , a = r(i)
      , o = n(734)
      , u = r(o)
      , s = n(1613)
      , l = r(s);
    t.default = {
      "": a.default,
      "%": function (e, t) {
        return (100 * e).toFixed(t)
      },
      b: function (e) {
        return Math.round(e).toString(2)
      },
      c: function (e) {
        return e + ""
      },
      d: function (e) {
        return Math.round(e).toString(10)
      },
      e: function (e, t) {
        return e.toExponential(t)
      },
      f: function (e, t) {
        return e.toFixed(t)
      },
      g: function (e, t) {
        return e.toPrecision(t)
      },
      o: function (e) {
        return Math.round(e).toString(8)
      },
      p: function (e, t) {
        return (0,
          l.default)(100 * e, t)
      },
      r: l.default,
      s: u.default,
      X: function (e) {
        return Math.round(e).toString(16).toUpperCase()
      },
      x: function (e) {
        return Math.round(e).toString(16)
      }
    },
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.prefixExponent = void 0,
      t.default = function (e, n) {
        var r = (0,
          i.default)(e, n);
        if (!r)
          return e + "";
        var o = r[0]
          , u = r[1]
          , s = u - (t.prefixExponent = a = 3 * Math.max(-8, Math.min(8, Math.floor(u / 3)))) + 1
          , l = o.length;
        return s === l ? o : s > l ? o + new Array(s - l + 1).join("0") : s > 0 ? o.slice(0, s) + "." + o.slice(s) : "0." + new Array(1 - s).join("0") + (0,
          i.default)(e, Math.max(0, n + s - 1))[0]
      }
      ;
    var r = n(417)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r)
      , a = t.prefixExponent = void 0
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i() {
      w.point = o
    }
    function a() {
      u(s, l)
    }
    function o(e, t) {
      w.point = u,
        s = e,
        l = t,
        e *= v.radians,
        t *= v.radians,
        c = e,
        f = (0,
          v.cos)(t = t / 2 + v.quarterPi),
        d = (0,
          v.sin)(t)
    }
    function u(e, t) {
      e *= v.radians,
        t *= v.radians,
        t = t / 2 + v.quarterPi;
      var n = e - c
        , r = n >= 0 ? 1 : -1
        , i = r * n
        , a = (0,
          v.cos)(t)
        , o = (0,
          v.sin)(t)
        , u = d * o
        , s = f * a + u * (0,
          v.cos)(i)
        , l = u * r * (0,
          v.sin)(i);
      _.add((0,
        v.atan2)(l, s)),
        c = e,
        f = a,
        d = o
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.areaStream = t.areaRingSum = void 0,
      t.default = function (e) {
        return x.reset(),
          (0,
            b.default)(e, w),
          2 * x
      }
      ;
    var s, l, c, f, d, h = n(204), p = r(h), v = n(31), y = n(153), m = r(y), g = n(170), b = r(g), _ = t.areaRingSum = (0,
      p.default)(), x = (0,
        p.default)(), w = t.areaStream = {
          point: m.default,
          lineStart: m.default,
          lineEnd: m.default,
          polygonStart: function () {
            _.reset(),
              w.lineStart = i,
              w.lineEnd = a
          },
          polygonEnd: function () {
            var e = +_;
            x.add(e < 0 ? v.tau + e : e),
              this.lineStart = this.lineEnd = this.point = m.default
          },
          sphere: function () {
            x.add(v.tau)
          }
        }
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n, r, o, u) {
      if (n) {
        var l = (0,
          s.cos)(t)
          , c = (0,
            s.sin)(t)
          , f = r * n;
        null == o ? (o = t + r * s.tau,
          u = t - f / 2) : (o = i(l, o),
            u = i(l, u),
            (r > 0 ? o < u : o > u) && (o += r * s.tau));
        for (var d, h = o; r > 0 ? h > u : h < u; h -= f)
          d = (0,
            a.spherical)([l, -c * (0,
              s.cos)(h), -c * (0,
                s.sin)(h)]),
            e.point(d[0], d[1])
      }
    }
    function i(e, t) {
      t = (0,
        a.cartesian)(t),
        t[0] -= e,
        (0,
          a.cartesianNormalizeInPlace)(t);
      var n = (0,
        s.acos)(-t[1]);
      return ((-t[2] < 0 ? -n : n) + s.tau - s.epsilon) % s.tau
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.circleStream = r,
      t.default = function () {
        function e(e, t) {
          n.push(e = i(e, t)),
            e[0] *= s.degrees,
            e[1] *= s.degrees
        }
        function t() {
          var e = a.apply(this, arguments)
            , t = o.apply(this, arguments) * s.radians
            , u = c.apply(this, arguments) * s.radians;
          return n = [],
            i = (0,
              l.rotateRadians)(-e[0] * s.radians, -e[1] * s.radians, 0).invert,
            r(f, t, u, 1),
            e = {
              type: "Polygon",
              coordinates: [n]
            },
            n = i = null,
            e
        }
        var n, i, a = (0,
          u.default)([0, 0]), o = (0,
            u.default)(90), c = (0,
              u.default)(6), f = {
                point: e
              };
        return t.center = function (e) {
          return arguments.length ? (a = "function" == typeof e ? e : (0,
            u.default)([+e[0], +e[1]]),
            t) : a
        }
          ,
          t.radius = function (e) {
            return arguments.length ? (o = "function" == typeof e ? e : (0,
              u.default)(+e),
              t) : o
          }
          ,
          t.precision = function (e) {
            return arguments.length ? (c = "function" == typeof e ? e : (0,
              u.default)(+e),
              t) : c
          }
          ,
          t
      }
      ;
    var a = n(224)
      , o = n(1621)
      , u = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(o)
      , s = n(31)
      , l = n(316)
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        function n(n, r) {
          return n = e(n, r),
            t(n[0], n[1])
        }
        return e.invert && t.invert && (n.invert = function (n, r) {
          return (n = t.invert(n, r)) && e.invert(n[0], n[1])
        }
        ),
          n
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      var t, n = NaN, r = NaN, a = NaN;
      return {
        lineStart: function () {
          e.lineStart(),
            t = 1
        },
        point: function (o, u) {
          var l = o > 0 ? s.pi : -s.pi
            , c = (0,
              s.abs)(o - n);
          (0,
            s.abs)(c - s.pi) < s.epsilon ? (e.point(n, r = (r + u) / 2 > 0 ? s.halfPi : -s.halfPi),
              e.point(a, r),
              e.lineEnd(),
              e.lineStart(),
              e.point(l, r),
              e.point(o, r),
              t = 0) : a !== l && c >= s.pi && ((0,
                s.abs)(n - a) < s.epsilon && (n -= a * s.epsilon),
                (0,
                  s.abs)(o - l) < s.epsilon && (o -= l * s.epsilon),
                r = i(n, r, o, u),
                e.point(a, r),
                e.lineEnd(),
                e.lineStart(),
                e.point(l, r),
                t = 0),
            e.point(n = o, r = u),
            a = l
        },
        lineEnd: function () {
          e.lineEnd(),
            n = r = NaN
        },
        clean: function () {
          return 2 - t
        }
      }
    }
    function i(e, t, n, r) {
      var i, a, o = (0,
        s.sin)(e - n);
      return (0,
        s.abs)(o) > s.epsilon ? (0,
          s.atan)(((0,
            s.sin)(t) * (a = (0,
              s.cos)(r)) * (0,
                s.sin)(n) - (0,
                  s.sin)(r) * (i = (0,
                    s.cos)(t)) * (0,
                      s.sin)(e)) / (i * a * o)) : (t + r) / 2
    }
    function a(e, t, n, r) {
      var i;
      if (null == e)
        i = n * s.halfPi,
          r.point(-s.pi, i),
          r.point(0, i),
          r.point(s.pi, i),
          r.point(s.pi, 0),
          r.point(s.pi, -i),
          r.point(0, -i),
          r.point(-s.pi, -i),
          r.point(-s.pi, 0),
          r.point(-s.pi, i);
      else if ((0,
        s.abs)(e[0] - t[0]) > s.epsilon) {
        var a = e[0] < t[0] ? s.pi : -s.pi;
        i = n * a / 2,
          r.point(-a, i),
          r.point(0, i),
          r.point(a, i)
      } else
        r.point(t[0], t[1])
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = n(739)
      , u = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(o)
      , s = n(31);
    t.default = (0,
      u.default)(function () {
        return !0
      }, r, a, [-s.pi, -s.halfPi]),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e) {
      return e.length > 1
    }
    function a(e, t) {
      return ((e = e.x)[0] < 0 ? e[1] - c.halfPi - c.epsilon : c.halfPi - e[1]) - ((t = t.x)[0] < 0 ? t[1] - c.halfPi - c.epsilon : c.halfPi - t[1])
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n, r) {
        return function (o) {
          function s(t, n) {
            e(t, n) && o.point(t, n)
          }
          function c(e, t) {
            x.point(e, t)
          }
          function f() {
            O.point = c,
              x.lineStart()
          }
          function p() {
            O.point = s,
              x.lineEnd()
          }
          function v(e, t) {
            _.push([e, t]),
              P.point(e, t)
          }
          function y() {
            P.lineStart(),
              _ = []
          }
          function m() {
            v(_[0][0], _[0][1]),
              P.lineEnd();
            var e, t, n, r, a = P.clean(), u = w.result(), s = u.length;
            if (_.pop(),
              g.push(_),
              _ = null,
              s)
              if (1 & a) {
                if (n = u[0],
                  (t = n.length - 1) > 0) {
                  for (M || (o.polygonStart(),
                    M = !0),
                    o.lineStart(),
                    e = 0; e < t; ++e)
                    o.point((r = n[e])[0], r[1]);
                  o.lineEnd()
                }
              } else
                s > 1 && 2 & a && u.push(u.pop().concat(u.shift())),
                  b.push(u.filter(i))
          }
          var g, b, _, x = t(o), w = (0,
            u.default)(), P = t(w), M = !1, O = {
              point: s,
              lineStart: f,
              lineEnd: p,
              polygonStart: function () {
                O.point = v,
                  O.lineStart = y,
                  O.lineEnd = m,
                  b = [],
                  g = []
              },
              polygonEnd: function () {
                O.point = s,
                  O.lineStart = f,
                  O.lineEnd = p,
                  b = (0,
                    h.merge)(b);
                var e = (0,
                  d.default)(g, r);
                b.length ? (M || (o.polygonStart(),
                  M = !0),
                  (0,
                    l.default)(b, a, e, n, o)) : e && (M || (o.polygonStart(),
                      M = !0),
                      o.lineStart(),
                      n(null, null, 1, o),
                      o.lineEnd()),
                  M && (o.polygonEnd(),
                    M = !1),
                  b = g = null
              },
              sphere: function () {
                o.polygonStart(),
                  o.lineStart(),
                  n(null, null, 1, o),
                  o.lineEnd(),
                  o.polygonEnd()
              }
            };
          return O
        }
      }
      ;
    var o = n(740)
      , u = r(o)
      , s = n(741)
      , l = r(s)
      , c = n(31)
      , f = n(743)
      , d = r(f)
      , h = n(84);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        var e, t = [];
        return {
          point: function (t, n) {
            e.push([t, n])
          },
          lineStart: function () {
            t.push(e = [])
          },
          lineEnd: i.default,
          rejoin: function () {
            t.length > 1 && t.push(t.pop().concat(t.shift()))
          },
          result: function () {
            var n = t;
            return t = [],
              e = null,
              n
          }
        }
      }
      ;
    var r = n(153)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n, r) {
      this.x = e,
        this.z = t,
        this.o = n,
        this.e = r,
        this.v = !1,
        this.n = this.p = null
    }
    function i(e) {
      if (t = e.length) {
        for (var t, n, r = 0, i = e[0]; ++r < t;)
          i.n = n = e[r],
            n.p = i,
            i = n;
        i.n = n = e[0],
          n.p = i
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n, a, u) {
        var s, l, c = [], f = [];
        if (e.forEach(function (e) {
          if (!((t = e.length - 1) <= 0)) {
            var t, n, i = e[0], a = e[t];
            if ((0,
              o.default)(i, a)) {
              for (u.lineStart(),
                s = 0; s < t; ++s)
                u.point((i = e[s])[0], i[1]);
              return void u.lineEnd()
            }
            c.push(n = new r(i, e, null, !0)),
              f.push(n.o = new r(i, null, n, !1)),
              c.push(n = new r(a, e, null, !1)),
              f.push(n.o = new r(a, null, n, !0))
          }
        }),
          c.length) {
          for (f.sort(t),
            i(c),
            i(f),
            s = 0,
            l = f.length; s < l; ++s)
            f[s].e = n = !n;
          for (var d, h, p = c[0]; ;) {
            for (var v = p, y = !0; v.v;)
              if ((v = v.n) === p)
                return;
            d = v.z,
              u.lineStart();
            do {
              if (v.v = v.o.v = !0,
                v.e) {
                if (y)
                  for (s = 0,
                    l = d.length; s < l; ++s)
                    u.point((h = d[s])[0], h[1]);
                else
                  a(v.x, v.n.x, 1, u);
                v = v.n
              } else {
                if (y)
                  for (d = v.p.z,
                    s = d.length - 1; s >= 0; --s)
                    u.point((h = d[s])[0], h[1]);
                else
                  a(v.x, v.p.x, -1, u);
                v = v.p
              }
              v = v.o,
                d = v.z,
                y = !y
            } while (!v.v); u.lineEnd()
          }
        }
      }
      ;
    var a = n(742)
      , o = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(a);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        return (0,
          r.abs)(e[0] - t[0]) < r.epsilon && (0,
            r.abs)(e[1] - t[1]) < r.epsilon
      }
      ;
    var r = n(31);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n = t[0]
          , r = t[1]
          , i = [(0,
            o.sin)(n), -(0,
              o.cos)(n), 0]
          , s = 0
          , l = 0;
        u.reset();
        for (var c = 0, f = e.length; c < f; ++c)
          if (h = (d = e[c]).length)
            for (var d, h, p = d[h - 1], v = p[0], y = p[1] / 2 + o.quarterPi, m = (0,
              o.sin)(y), g = (0,
                o.cos)(y), b = 0; b < h; ++b,
                v = x,
                m = P,
                g = M,
              p = _) {
              var _ = d[b]
                , x = _[0]
                , w = _[1] / 2 + o.quarterPi
                , P = (0,
                  o.sin)(w)
                , M = (0,
                  o.cos)(w)
                , O = x - v
                , E = O >= 0 ? 1 : -1
                , j = E * O
                , S = j > o.pi
                , k = m * P;
              if (u.add((0,
                o.atan2)(k * E * (0,
                  o.sin)(j), g * M + k * (0,
                    o.cos)(j))),
                s += S ? O + E * o.tau : O,
                S ^ v >= n ^ x >= n) {
                var C = (0,
                  a.cartesianCross)((0,
                    a.cartesian)(p), (0,
                      a.cartesian)(_));
                (0,
                  a.cartesianNormalizeInPlace)(C);
                var T = (0,
                  a.cartesianCross)(i, C);
                (0,
                  a.cartesianNormalizeInPlace)(T);
                var N = (S ^ O >= 0 ? -1 : 1) * (0,
                  o.asin)(T[2]);
                (r > N || r === N && (C[0] || C[1])) && (l += S ^ O >= 0 ? 1 : -1)
              }
            }
        return (s < -o.epsilon || s < o.epsilon && u < -o.epsilon) ^ 1 & l
      }
      ;
    var r = n(204)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r)
      , a = n(224)
      , o = n(31)
      , u = (0,
        i.default)();
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        function t(t, n, r, i) {
          (0,
            a.circleStream)(i, e, d, r, t, n)
        }
        function n(e, t) {
          return (0,
            o.cos)(e) * (0,
              o.cos)(t) > f
        }
        function r(e) {
          var t, r, i, a, c;
          return {
            lineStart: function () {
              a = i = !1,
                c = 1
            },
            point: function (f, d) {
              var v, y = [f, d], m = n(f, d), g = h ? m ? 0 : l(f, d) : m ? l(f + (f < 0 ? o.pi : -o.pi), d) : 0;
              if (!t && (a = i = m) && e.lineStart(),
                m !== i && (!(v = u(t, y)) || (0,
                  s.default)(t, v) || (0,
                    s.default)(y, v)) && (y[0] += o.epsilon,
                      y[1] += o.epsilon,
                      m = n(y[0], y[1])),
                m !== i)
                c = 0,
                  m ? (e.lineStart(),
                    v = u(y, t),
                    e.point(v[0], v[1])) : (v = u(t, y),
                      e.point(v[0], v[1]),
                      e.lineEnd()),
                  t = v;
              else if (p && t && h ^ m) {
                var b;
                g & r || !(b = u(y, t, !0)) || (c = 0,
                  h ? (e.lineStart(),
                    e.point(b[0][0], b[0][1]),
                    e.point(b[1][0], b[1][1]),
                    e.lineEnd()) : (e.point(b[1][0], b[1][1]),
                      e.lineEnd(),
                      e.lineStart(),
                      e.point(b[0][0], b[0][1])))
              }
              !m || t && (0,
                s.default)(t, y) || e.point(y[0], y[1]),
                t = y,
                i = m,
                r = g
            },
            lineEnd: function () {
              i && e.lineEnd(),
                t = null
            },
            clean: function () {
              return c | (a && i) << 1
            }
          }
        }
        function u(e, t, n) {
          var r = (0,
            i.cartesian)(e)
            , a = (0,
              i.cartesian)(t)
            , u = [1, 0, 0]
            , s = (0,
              i.cartesianCross)(r, a)
            , l = (0,
              i.cartesianDot)(s, s)
            , c = s[0]
            , d = l - c * c;
          if (!d)
            return !n && e;
          var h = f * l / d
            , p = -f * c / d
            , v = (0,
              i.cartesianCross)(u, s)
            , y = (0,
              i.cartesianScale)(u, h)
            , m = (0,
              i.cartesianScale)(s, p);
          (0,
            i.cartesianAddInPlace)(y, m);
          var g = v
            , b = (0,
              i.cartesianDot)(y, g)
            , _ = (0,
              i.cartesianDot)(g, g)
            , x = b * b - _ * ((0,
              i.cartesianDot)(y, y) - 1);
          if (!(x < 0)) {
            var w = (0,
              o.sqrt)(x)
              , P = (0,
                i.cartesianScale)(g, (-b - w) / _);
            if ((0,
              i.cartesianAddInPlace)(P, y),
              P = (0,
                i.spherical)(P),
              !n)
              return P;
            var M, O = e[0], E = t[0], j = e[1], S = t[1];
            E < O && (M = O,
              O = E,
              E = M);
            var k = E - O
              , C = (0,
                o.abs)(k - o.pi) < o.epsilon
              , T = C || k < o.epsilon;
            if (!C && S < j && (M = j,
              j = S,
              S = M),
              T ? C ? j + S > 0 ^ P[1] < ((0,
                o.abs)(P[0] - O) < o.epsilon ? j : S) : j <= P[1] && P[1] <= S : k > o.pi ^ (O <= P[0] && P[0] <= E)) {
              var N = (0,
                i.cartesianScale)(g, (-b + w) / _);
              return (0,
                i.cartesianAddInPlace)(N, y),
                [P, (0,
                  i.spherical)(N)]
            }
          }
        }
        function l(t, n) {
          var r = h ? e : o.pi - e
            , i = 0;
          return t < -r ? i |= 1 : t > r && (i |= 2),
            n < -r ? i |= 4 : n > r && (i |= 8),
            i
        }
        var f = (0,
          o.cos)(e)
          , d = 6 * o.radians
          , h = f > 0
          , p = (0,
            o.abs)(f) > o.epsilon;
        return (0,
          c.default)(n, r, t, h ? [0, -e] : [-o.pi, e - o.pi])
      }
      ;
    var i = n(224)
      , a = n(736)
      , o = n(31)
      , u = n(742)
      , s = r(u)
      , l = n(739)
      , c = r(l);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        return a[0] = e,
          a[1] = t,
          (0,
            i.default)(o)
      }
      ;
    var r = n(746)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r)
      , a = [null, null]
      , o = {
        type: "LineString",
        coordinates: a
      };
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i() {
      b.point = o,
        b.lineEnd = a
    }
    function a() {
      b.point = b.lineEnd = v.default
    }
    function o(e, t) {
      e *= h.radians,
        t *= h.radians,
        s = e,
        l = (0,
          h.sin)(t),
        c = (0,
          h.cos)(t),
        b.point = u
    }
    function u(e, t) {
      e *= h.radians,
        t *= h.radians;
      var n = (0,
        h.sin)(t)
        , r = (0,
          h.cos)(t)
        , i = (0,
          h.abs)(e - s)
        , a = (0,
          h.cos)(i)
        , o = (0,
          h.sin)(i)
        , u = r * o
        , f = c * n - l * r * a
        , d = l * n + c * r * a;
      g.add((0,
        h.atan2)((0,
          h.sqrt)(u * u + f * f), d)),
        s = e,
        l = n,
        c = r
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return g.reset(),
          (0,
            m.default)(e, b),
          +g
      }
      ;
    var s, l, c, f = n(204), d = r(f), h = n(31), p = n(153), v = r(p), y = n(170), m = r(y), g = (0,
      d.default)(), b = {
        sphere: v.default,
        point: v.default,
        lineStart: i,
        lineEnd: v.default,
        polygonStart: v.default,
        polygonEnd: v.default
      };
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      e < o && (o = e),
        e > s && (s = e),
        t < u && (u = t),
        t > l && (l = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(153)
      , a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i)
      , o = 1 / 0
      , u = o
      , s = -o
      , l = s
      , c = {
        point: r,
        lineStart: a.default,
        lineEnd: a.default,
        polygonStart: a.default,
        polygonEnd: a.default,
        result: function () {
          var e = [[o, u], [s, l]];
          return s = l = -(u = o = 1 / 0),
            e
        }
      };
    t.default = c,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        return (0,
          i.default)().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
      }
      ;
    var r = n(419)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      return [e, t]
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.equirectangularRaw = r,
      t.default = function () {
        return (0,
          a.default)(r).scale(152.63)
      }
      ;
    var i = n(139)
      , a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i);
    r.invert = r
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      var r = e.x
        , i = e.y
        , a = t.r + n.r
        , o = e.r + n.r
        , u = t.x - r
        , s = t.y - i
        , l = u * u + s * s;
      if (l) {
        var c = .5 + ((o *= o) - (a *= a)) / (2 * l)
          , f = Math.sqrt(Math.max(0, 2 * a * (o + l) - (o -= l) * o - a * a)) / (2 * l);
        n.x = r + c * u + f * s,
          n.y = i + c * s - f * u
      } else
        n.x = r + o,
          n.y = i
    }
    function i(e, t) {
      var n = t.x - e.x
        , r = t.y - e.y
        , i = e.r + t.r;
      return i * i - 1e-6 > n * n + r * r
    }
    function a(e) {
      var t = e._
        , n = e.next._
        , r = t.r + n.r
        , i = (t.x * n.r + n.x * t.r) / r
        , a = (t.y * n.r + n.y * t.r) / r;
      return i * i + a * a
    }
    function o(e) {
      this._ = e,
        this.next = null,
        this.previous = null
    }
    function u(e) {
      if (!(s = e.length))
        return 0;
      var t, n, u, s, c, f, d, h, p, v, y;
      if (t = e[0],
        t.x = 0,
        t.y = 0,
        !(s > 1))
        return t.r;
      if (n = e[1],
        t.x = -n.r,
        n.x = t.r,
        n.y = 0,
        !(s > 2))
        return t.r + n.r;
      r(n, t, u = e[2]),
        t = new o(t),
        n = new o(n),
        u = new o(u),
        t.next = u.previous = n,
        n.next = t.previous = u,
        u.next = n.previous = t;
      e: for (d = 3; d < s; ++d) {
        r(t._, n._, u = e[d]),
          u = new o(u),
          h = n.next,
          p = t.previous,
          v = n._.r,
          y = t._.r;
        do {
          if (v <= y) {
            if (i(h._, u._)) {
              n = h,
                t.next = n,
                n.previous = t,
                --d;
              continue e
            }
            v += h._.r,
              h = h.next
          } else {
            if (i(p._, u._)) {
              t = p,
                t.next = n,
                n.previous = t,
                --d;
              continue e
            }
            y += p._.r,
              p = p.previous
          }
        } while (h !== p.next); for (u.previous = t,
          u.next = n,
          t.next = n.previous = n = u,
          c = a(t); (u = u.next) !== n;)
          (f = a(u)) < c && (t = u,
            c = f);
        n = t.next
      }
      for (t = [n._],
        u = n; (u = u.next) !== n;)
        t.push(u._);
      for (u = (0,
        l.default)(t),
        d = 0; d < s; ++d)
        t = e[d],
          t.x -= u.x,
          t.y -= u.y;
      return u.r
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.packEnclose = u,
      t.default = function (e) {
        return u(e),
          e
      }
      ;
    var s = n(751)
      , l = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(s)
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n, r;
      if (o(t, e))
        return [t];
      for (n = 0; n < e.length; ++n)
        if (i(t, e[n]) && o(l(e[n], t), e))
          return [e[n], t];
      for (n = 0; n < e.length - 1; ++n)
        for (r = n + 1; r < e.length; ++r)
          if (i(l(e[n], e[r]), t) && i(l(e[n], t), e[r]) && i(l(e[r], t), e[n]) && o(c(e[n], e[r], t), e))
            return [e[n], e[r], t];
      throw new Error
    }
    function i(e, t) {
      var n = e.r - t.r
        , r = t.x - e.x
        , i = t.y - e.y;
      return n < 0 || n * n < r * r + i * i
    }
    function a(e, t) {
      var n = e.r - t.r + 1e-6
        , r = t.x - e.x
        , i = t.y - e.y;
      return n > 0 && n * n > r * r + i * i
    }
    function o(e, t) {
      for (var n = 0; n < t.length; ++n)
        if (!a(e, t[n]))
          return !1;
      return !0
    }
    function u(e) {
      switch (e.length) {
        case 1:
          return s(e[0]);
        case 2:
          return l(e[0], e[1]);
        case 3:
          return c(e[0], e[1], e[2])
      }
    }
    function s(e) {
      return {
        x: e.x,
        y: e.y,
        r: e.r
      }
    }
    function l(e, t) {
      var n = e.x
        , r = e.y
        , i = e.r
        , a = t.x
        , o = t.y
        , u = t.r
        , s = a - n
        , l = o - r
        , c = u - i
        , f = Math.sqrt(s * s + l * l);
      return {
        x: (n + a + s / f * c) / 2,
        y: (r + o + l / f * c) / 2,
        r: (f + i + u) / 2
      }
    }
    function c(e, t, n) {
      var r = e.x
        , i = e.y
        , a = e.r
        , o = t.x
        , u = t.y
        , s = t.r
        , l = n.x
        , c = n.y
        , f = n.r
        , d = r - o
        , h = r - l
        , p = i - u
        , v = i - c
        , y = s - a
        , m = f - a
        , g = r * r + i * i - a * a
        , b = g - o * o - u * u + s * s
        , _ = g - l * l - c * c + f * f
        , x = h * p - d * v
        , w = (p * _ - v * b) / (2 * x) - r
        , P = (v * y - p * m) / x
        , M = (h * b - d * _) / (2 * x) - i
        , O = (d * m - h * y) / x
        , E = P * P + O * O - 1
        , j = 2 * (a + w * P + M * O)
        , S = w * w + M * M - a * a
        , k = -(E ? (j + Math.sqrt(j * j - 4 * E * S)) / (2 * E) : S / j);
      return {
        x: r + w + P * k,
        y: i + M + O * k,
        r: k
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        for (var t, n, i = 0, o = (e = (0,
          f.shuffle)(f.slice.call(e))).length, s = []; i < o;)
          t = e[i],
            n && a(n, t) ? ++i : (n = u(s = r(s, t)),
              i = 0);
        return n
      }
      ;
    var f = n(1660);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      return 0
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.constantZero = r,
      t.default = function (e) {
        return function () {
          return e
        }
      }
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        e.x0 = Math.round(e.x0),
          e.y0 = Math.round(e.y0),
          e.x1 = Math.round(e.x1),
          e.y1 = Math.round(e.y1)
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(205)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.default = function e(t) {
      function n(e, n) {
        var r, i;
        return e = null == e ? 0 : +e,
          n = null == n ? 1 : +n,
          function () {
            var a;
            if (null != r)
              a = r,
                r = null;
            else
              do {
                r = 2 * t() - 1,
                  a = 2 * t() - 1,
                  i = r * r + a * a
              } while (!i || i > 1); return e + n * a * Math.sqrt(-2 * Math.log(i) / i)
          }
      }
      return n.source = e,
        n
    }(i.default),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(205)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.default = function e(t) {
      function n(e) {
        return function () {
          for (var n = 0, r = 0; r < e; ++r)
            n += t();
          return n
        }
      }
      return n.source = e,
        n
    }(i.default),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      return function (n) {
        return e(n.responseText, t)
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        return function (n, i, o) {
          arguments.length < 3 && (o = i,
            i = null);
          var u = (0,
            a.default)(n).mimeType(e);
          return u.row = function (e) {
            return arguments.length ? u.response(r(t, i = e)) : i
          }
            ,
            u.row(i),
            o ? u.get(o) : u
        }
      }
      ;
    var i = n(426)
      , a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      function t(t) {
        var r = t + ""
          , i = n.get(r);
        if (!i) {
          if (s !== o)
            return s;
          n.set(r, i = u.push(t))
        }
        return e[(i - 1) % e.length]
      }
      var n = (0,
        i.map)()
        , u = []
        , s = o;
      return e = null == e ? [] : a.slice.call(e),
        t.domain = function (e) {
          if (!arguments.length)
            return u.slice();
          u = [],
            n = (0,
              i.map)();
          for (var r, a, o = -1, s = e.length; ++o < s;)
            n.has(a = (r = e[o]) + "") || n.set(a, u.push(r));
          return t
        }
        ,
        t.range = function (n) {
          return arguments.length ? (e = a.slice.call(n),
            t) : e.slice()
        }
        ,
        t.unknown = function (e) {
          return arguments.length ? (s = e,
            t) : s
        }
        ,
        t.copy = function () {
          return r().domain(u).range(e).unknown(s)
        }
        ,
        t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.implicit = void 0,
      t.default = r;
    var i = n(223)
      , a = n(171)
      , o = t.implicit = {
        name: "implicit"
      }
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return +e
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        e = e.slice();
        var n, r = 0, i = e.length - 1, a = e[r], o = e[i];
        return o < a && (n = r,
          r = i,
          i = n,
          n = a,
          a = o,
          o = n),
          e[r] = t.floor(a),
          e[i] = t.ceil(o),
          e
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e) {
      return new Date(e)
    }
    function a(e) {
      return e instanceof Date ? +e : +new Date(+e)
    }
    function o(e, t, n, r, l, c, p, P, M) {
      function O(i) {
        return (p(i) < i ? C : c(i) < i ? T : l(i) < i ? N : r(i) < i ? D : t(i) < i ? n(i) < i ? A : L : e(i) < i ? I : R)(i)
      }
      function E(t, n, r, i) {
        if (null == t && (t = 10),
          "number" == typeof t) {
          var a = Math.abs(r - n) / t
            , o = (0,
              u.bisector)(function (e) {
                return e[2]
              }).right(B, a);
          o === B.length ? (i = (0,
            u.tickStep)(n / w, r / w, t),
            t = e) : o ? (o = B[a / B[o - 1][2] < B[o][2] / a ? o - 1 : o],
              i = o[1],
              t = o[0]) : (i = Math.max((0,
                u.tickStep)(n, r, t), 1),
                t = P)
        }
        return null == i ? t : t.every(i)
      }
      var j = (0,
        h.default)(d.deinterpolateLinear, s.interpolateNumber)
        , S = j.invert
        , k = j.domain
        , C = M(".%L")
        , T = M(":%S")
        , N = M("%I:%M")
        , D = M("%I %p")
        , A = M("%a %d")
        , L = M("%b %d")
        , I = M("%B")
        , R = M("%Y")
        , B = [[p, 1, y], [p, 5, 5 * y], [p, 15, 15 * y], [p, 30, 30 * y], [c, 1, m], [c, 5, 5 * m], [c, 15, 15 * m], [c, 30, 30 * m], [l, 1, g], [l, 3, 3 * g], [l, 6, 6 * g], [l, 12, 12 * g], [r, 1, b], [r, 2, 2 * b], [n, 1, _], [t, 1, x], [t, 3, 3 * x], [e, 1, w]];
      return j.invert = function (e) {
        return new Date(S(e))
      }
        ,
        j.domain = function (e) {
          return arguments.length ? k(f.map.call(e, a)) : k().map(i)
        }
        ,
        j.ticks = function (e, t) {
          var n, r = k(), i = r[0], a = r[r.length - 1], o = a < i;
          return o && (n = i,
            i = a,
            a = n),
            n = E(e, i, a, t),
            n = n ? n.range(i, a + 1) : [],
            o ? n.reverse() : n
        }
        ,
        j.tickFormat = function (e, t) {
          return null == t ? O : M(t)
        }
        ,
        j.nice = function (e, t) {
          var n = k();
          return (e = E(e, n[0], n[n.length - 1], t)) ? k((0,
            v.default)(n, e)) : j
        }
        ,
        j.copy = function () {
          return (0,
            d.copy)(j, o(e, t, n, r, l, c, p, P, M))
        }
        ,
        j
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.calendar = o,
      t.default = function () {
        return o(l.timeYear, l.timeMonth, l.timeWeek, l.timeDay, l.timeHour, l.timeMinute, l.timeSecond, l.timeMillisecond, c.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)])
      }
      ;
    var u = n(84)
      , s = n(112)
      , l = n(322)
      , c = n(428)
      , f = n(171)
      , d = n(321)
      , h = r(d)
      , p = n(759)
      , v = r(p)
      , y = 1e3
      , m = 60 * y
      , g = 60 * m
      , b = 24 * g
      , _ = 7 * b
      , x = 30 * b
      , w = 365 * b
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      if (0 <= e.y && e.y < 100) {
        var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
        return t.setFullYear(e.y),
          t
      }
      return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L)
    }
    function i(e) {
      if (0 <= e.y && e.y < 100) {
        var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
        return t.setUTCFullYear(e.y),
          t
      }
      return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L))
    }
    function a(e) {
      return {
        y: e,
        m: 0,
        d: 1,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    function o(e) {
      function t(e, t) {
        return function (n) {
          var r, i, a, o = [], u = -1, s = 0, l = e.length;
          for (n instanceof Date || (n = new Date(+n)); ++u < l;)
            37 === e.charCodeAt(u) && (o.push(e.slice(s, u)),
              null != (i = pe[r = e.charAt(++u)]) ? r = e.charAt(++u) : i = "e" === r ? " " : "0",
              (a = t[r]) && (r = a(n, i)),
              o.push(r),
              s = u + 1);
          return o.push(e.slice(s, u)),
            o.join("")
        }
      }
      function n(e, t) {
        return function (n) {
          var r, u, s = a(1900), l = o(s, e, n += "", 0);
          if (l != n.length)
            return null;
          if ("Q" in s)
            return new Date(s.Q);
          if ("p" in s && (s.H = s.H % 12 + 12 * s.p),
            "V" in s) {
            if (s.V < 1 || s.V > 53)
              return null;
            "w" in s || (s.w = 1),
              "Z" in s ? (r = i(a(s.y)),
                u = r.getUTCDay(),
                r = u > 4 || 0 === u ? he.utcMonday.ceil(r) : (0,
                  he.utcMonday)(r),
                r = he.utcDay.offset(r, 7 * (s.V - 1)),
                s.y = r.getUTCFullYear(),
                s.m = r.getUTCMonth(),
                s.d = r.getUTCDate() + (s.w + 6) % 7) : (r = t(a(s.y)),
                  u = r.getDay(),
                  r = u > 4 || 0 === u ? he.timeMonday.ceil(r) : (0,
                    he.timeMonday)(r),
                  r = he.timeDay.offset(r, 7 * (s.V - 1)),
                  s.y = r.getFullYear(),
                  s.m = r.getMonth(),
                  s.d = r.getDate() + (s.w + 6) % 7)
          } else
            ("W" in s || "U" in s) && ("w" in s || (s.w = "u" in s ? s.u % 7 : "W" in s ? 1 : 0),
              u = "Z" in s ? i(a(s.y)).getUTCDay() : t(a(s.y)).getDay(),
              s.m = 0,
              s.d = "W" in s ? (s.w + 6) % 7 + 7 * s.W - (u + 5) % 7 : s.w + 7 * s.U - (u + 6) % 7);
          return "Z" in s ? (s.H += s.Z / 100 | 0,
            s.M += s.Z % 100,
            i(s)) : t(s)
        }
      }
      function o(e, t, n, r) {
        for (var i, a, o = 0, u = t.length, s = n.length; o < u;) {
          if (r >= s)
            return -1;
          if (37 === (i = t.charCodeAt(o++))) {
            if (i = t.charAt(o++),
              !(a = Qe[i in pe ? t.charAt(o++) : i]) || (r = a(e, n, r)) < 0)
              return -1
          } else if (i != n.charCodeAt(r++))
            return -1
        }
        return r
      }
      function u(e, t, n) {
        var r = Ve.exec(t.slice(n));
        return r ? (e.p = ze[r[0].toLowerCase()],
          n + r[0].length) : -1
      }
      function s(e, t, n) {
        var r = Ye.exec(t.slice(n));
        return r ? (e.w = Xe[r[0].toLowerCase()],
          n + r[0].length) : -1
      }
      function ve(e, t, n) {
        var r = Fe.exec(t.slice(n));
        return r ? (e.w = qe[r[0].toLowerCase()],
          n + r[0].length) : -1
      }
      function ye(e, t, n) {
        var r = We.exec(t.slice(n));
        return r ? (e.m = $e[r[0].toLowerCase()],
          n + r[0].length) : -1
      }
      function me(e, t, n) {
        var r = He.exec(t.slice(n));
        return r ? (e.m = Ue[r[0].toLowerCase()],
          n + r[0].length) : -1
      }
      function ge(e, t, n) {
        return o(e, Te, t, n)
      }
      function be(e, t, n) {
        return o(e, Ne, t, n)
      }
      function _e(e, t, n) {
        return o(e, De, t, n)
      }
      function xe(e) {
        return Ie[e.getDay()]
      }
      function we(e) {
        return Le[e.getDay()]
      }
      function Pe(e) {
        return Be[e.getMonth()]
      }
      function Me(e) {
        return Re[e.getMonth()]
      }
      function Oe(e) {
        return Ae[+(e.getHours() >= 12)]
      }
      function Ee(e) {
        return Ie[e.getUTCDay()]
      }
      function je(e) {
        return Le[e.getUTCDay()]
      }
      function Se(e) {
        return Be[e.getUTCMonth()]
      }
      function ke(e) {
        return Re[e.getUTCMonth()]
      }
      function Ce(e) {
        return Ae[+(e.getUTCHours() >= 12)]
      }
      var Te = e.dateTime
        , Ne = e.date
        , De = e.time
        , Ae = e.periods
        , Le = e.days
        , Ie = e.shortDays
        , Re = e.months
        , Be = e.shortMonths
        , Ve = l(Ae)
        , ze = c(Ae)
        , Fe = l(Le)
        , qe = c(Le)
        , Ye = l(Ie)
        , Xe = c(Ie)
        , He = l(Re)
        , Ue = c(Re)
        , We = l(Be)
        , $e = c(Be)
        , Ge = {
          a: xe,
          A: we,
          b: Pe,
          B: Me,
          c: null,
          d: C,
          e: C,
          f: L,
          H: T,
          I: N,
          j: D,
          L: A,
          m: I,
          M: R,
          p: Oe,
          Q: fe,
          s: de,
          S: B,
          u: V,
          U: z,
          V: F,
          w: q,
          W: Y,
          x: null,
          X: null,
          y: X,
          Y: H,
          Z: U,
          "%": ce
        }
        , Ze = {
          a: Ee,
          A: je,
          b: Se,
          B: ke,
          c: null,
          d: W,
          e: W,
          f: J,
          H: $,
          I: G,
          j: Z,
          L: Q,
          m: K,
          M: ee,
          p: Ce,
          Q: fe,
          s: de,
          S: te,
          u: ne,
          U: re,
          V: ie,
          w: ae,
          W: oe,
          x: null,
          X: null,
          y: ue,
          Y: se,
          Z: le,
          "%": ce
        }
        , Qe = {
          a: s,
          A: ve,
          b: ye,
          B: me,
          c: ge,
          d: _,
          e: _,
          f: E,
          H: w,
          I: w,
          j: x,
          L: O,
          m: b,
          M: P,
          p: u,
          Q: S,
          s: k,
          S: M,
          u: d,
          U: h,
          V: p,
          w: f,
          W: v,
          x: be,
          X: _e,
          y: m,
          Y: y,
          Z: g,
          "%": j
        };
      return Ge.x = t(Ne, Ge),
        Ge.X = t(De, Ge),
        Ge.c = t(Te, Ge),
        Ze.x = t(Ne, Ze),
        Ze.X = t(De, Ze),
        Ze.c = t(Te, Ze),
        {
          format: function (e) {
            var n = t(e += "", Ge);
            return n.toString = function () {
              return e
            }
              ,
              n
          },
          parse: function (e) {
            var t = n(e += "", r);
            return t.toString = function () {
              return e
            }
              ,
              t
          },
          utcFormat: function (e) {
            var n = t(e += "", Ze);
            return n.toString = function () {
              return e
            }
              ,
              n
          },
          utcParse: function (e) {
            var t = n(e, i);
            return t.toString = function () {
              return e
            }
              ,
              t
          }
        }
    }
    function u(e, t, n) {
      var r = e < 0 ? "-" : ""
        , i = (r ? -e : e) + ""
        , a = i.length;
      return r + (a < n ? new Array(n - a + 1).join(t) + i : i)
    }
    function s(e) {
      return e.replace(me, "\\$&")
    }
    function l(e) {
      return new RegExp("^(?:" + e.map(s).join("|") + ")", "i")
    }
    function c(e) {
      for (var t = {}, n = -1, r = e.length; ++n < r;)
        t[e[n].toLowerCase()] = n;
      return t
    }
    function f(e, t, n) {
      var r = ve.exec(t.slice(n, n + 1));
      return r ? (e.w = +r[0],
        n + r[0].length) : -1
    }
    function d(e, t, n) {
      var r = ve.exec(t.slice(n, n + 1));
      return r ? (e.u = +r[0],
        n + r[0].length) : -1
    }
    function h(e, t, n) {
      var r = ve.exec(t.slice(n, n + 2));
      return r ? (e.U = +r[0],
        n + r[0].length) : -1
    }
    function p(e, t, n) {
      var r = ve.exec(t.slice(n, n + 2));
      return r ? (e.V = +r[0],
        n + r[0].length) : -1
    }
    function v(e, t, n) {
      var r = ve.exec(t.slice(n, n + 2));
      return r ? (e.W = +r[0],
        n + r[0].length) : -1
    }
    function y(e, t, n) {
      var r = ve.exec(t.slice(n, n + 4));
      return r ? (e.y = +r[0],
        n + r[0].length) : -1
    }
    function m(e, t, n) {
      var r = ve.exec(t.slice(n, n + 2));
      return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3),
        n + r[0].length) : -1
    }
    function g(e, t, n) {
      var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
      return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")),
        n + r[0].length) : -1
    }
    function b(e, t, n) {
      var r = ve.exec(t.slice(n, n + 2));
      return r ? (e.m = r[0] - 1,
        n + r[0].length) : -1
    }
    function _(e, t, n) {
      var r = ve.exec(t.slice(n, n + 2));
      return r ? (e.d = +r[0],
        n + r[0].length) : -1
    }
    function x(e, t, n) {
      var r = ve.exec(t.slice(n, n + 3));
      return r ? (e.m = 0,
        e.d = +r[0],
        n + r[0].length) : -1
    }
    function w(e, t, n) {
      var r = ve.exec(t.slice(n, n + 2));
      return r ? (e.H = +r[0],
        n + r[0].length) : -1
    }
    function P(e, t, n) {
      var r = ve.exec(t.slice(n, n + 2));
      return r ? (e.M = +r[0],
        n + r[0].length) : -1
    }
    function M(e, t, n) {
      var r = ve.exec(t.slice(n, n + 2));
      return r ? (e.S = +r[0],
        n + r[0].length) : -1
    }
    function O(e, t, n) {
      var r = ve.exec(t.slice(n, n + 3));
      return r ? (e.L = +r[0],
        n + r[0].length) : -1
    }
    function E(e, t, n) {
      var r = ve.exec(t.slice(n, n + 6));
      return r ? (e.L = Math.floor(r[0] / 1e3),
        n + r[0].length) : -1
    }
    function j(e, t, n) {
      var r = ye.exec(t.slice(n, n + 1));
      return r ? n + r[0].length : -1
    }
    function S(e, t, n) {
      var r = ve.exec(t.slice(n));
      return r ? (e.Q = +r[0],
        n + r[0].length) : -1
    }
    function k(e, t, n) {
      var r = ve.exec(t.slice(n));
      return r ? (e.Q = 1e3 * +r[0],
        n + r[0].length) : -1
    }
    function C(e, t) {
      return u(e.getDate(), t, 2)
    }
    function T(e, t) {
      return u(e.getHours(), t, 2)
    }
    function N(e, t) {
      return u(e.getHours() % 12 || 12, t, 2)
    }
    function D(e, t) {
      return u(1 + he.timeDay.count((0,
        he.timeYear)(e), e), t, 3)
    }
    function A(e, t) {
      return u(e.getMilliseconds(), t, 3)
    }
    function L(e, t) {
      return A(e, t) + "000"
    }
    function I(e, t) {
      return u(e.getMonth() + 1, t, 2)
    }
    function R(e, t) {
      return u(e.getMinutes(), t, 2)
    }
    function B(e, t) {
      return u(e.getSeconds(), t, 2)
    }
    function V(e) {
      var t = e.getDay();
      return 0 === t ? 7 : t
    }
    function z(e, t) {
      return u(he.timeSunday.count((0,
        he.timeYear)(e), e), t, 2)
    }
    function F(e, t) {
      var n = e.getDay();
      return e = n >= 4 || 0 === n ? (0,
        he.timeThursday)(e) : he.timeThursday.ceil(e),
        u(he.timeThursday.count((0,
          he.timeYear)(e), e) + (4 === (0,
            he.timeYear)(e).getDay()), t, 2)
    }
    function q(e) {
      return e.getDay()
    }
    function Y(e, t) {
      return u(he.timeMonday.count((0,
        he.timeYear)(e), e), t, 2)
    }
    function X(e, t) {
      return u(e.getFullYear() % 100, t, 2)
    }
    function H(e, t) {
      return u(e.getFullYear() % 1e4, t, 4)
    }
    function U(e) {
      var t = e.getTimezoneOffset();
      return (t > 0 ? "-" : (t *= -1,
        "+")) + u(t / 60 | 0, "0", 2) + u(t % 60, "0", 2)
    }
    function W(e, t) {
      return u(e.getUTCDate(), t, 2)
    }
    function $(e, t) {
      return u(e.getUTCHours(), t, 2)
    }
    function G(e, t) {
      return u(e.getUTCHours() % 12 || 12, t, 2)
    }
    function Z(e, t) {
      return u(1 + he.utcDay.count((0,
        he.utcYear)(e), e), t, 3)
    }
    function Q(e, t) {
      return u(e.getUTCMilliseconds(), t, 3)
    }
    function J(e, t) {
      return Q(e, t) + "000"
    }
    function K(e, t) {
      return u(e.getUTCMonth() + 1, t, 2)
    }
    function ee(e, t) {
      return u(e.getUTCMinutes(), t, 2)
    }
    function te(e, t) {
      return u(e.getUTCSeconds(), t, 2)
    }
    function ne(e) {
      var t = e.getUTCDay();
      return 0 === t ? 7 : t
    }
    function re(e, t) {
      return u(he.utcSunday.count((0,
        he.utcYear)(e), e), t, 2)
    }
    function ie(e, t) {
      var n = e.getUTCDay();
      return e = n >= 4 || 0 === n ? (0,
        he.utcThursday)(e) : he.utcThursday.ceil(e),
        u(he.utcThursday.count((0,
          he.utcYear)(e), e) + (4 === (0,
            he.utcYear)(e).getUTCDay()), t, 2)
    }
    function ae(e) {
      return e.getUTCDay()
    }
    function oe(e, t) {
      return u(he.utcMonday.count((0,
        he.utcYear)(e), e), t, 2)
    }
    function ue(e, t) {
      return u(e.getUTCFullYear() % 100, t, 2)
    }
    function se(e, t) {
      return u(e.getUTCFullYear() % 1e4, t, 4)
    }
    function le() {
      return "+0000"
    }
    function ce() {
      return "%"
    }
    function fe(e) {
      return +e
    }
    function de(e) {
      return Math.floor(+e / 1e3)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = o;
    var he = n(322)
      , pe = {
        "-": "",
        _: " ",
        0: "0"
      }
      , ve = /^\s*\d+/
      , ye = /^%/
      , me = /[\\^$*+?|[\]().{}]/g;
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e.toISOString()
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.isoSpecifier = void 0;
    var i = n(429)
      , a = t.isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ"
      , o = Date.prototype.toISOString ? r : (0,
        i.utcFormat)(a);
    t.default = o
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        function e(e) {
          var t, o, s, c, f, v = e.length, y = !1, m = new Array(v), g = new Array(v);
          for (null == d && (p = h(f = (0,
            i.path)())),
            t = 0; t <= v; ++t) {
            if (!(t < v && l(c = e[t], t, e)) === y)
              if (y = !y)
                o = t,
                  p.areaStart(),
                  p.lineStart();
              else {
                for (p.lineEnd(),
                  p.lineStart(),
                  s = t - 1; s >= o; --s)
                  p.point(m[s], g[s]);
                p.lineEnd(),
                  p.areaEnd()
              }
            y && (m[t] = +n(c, t, e),
              g[t] = +a(c, t, e),
              p.point(r ? +r(c, t, e) : m[t], u ? +u(c, t, e) : g[t]))
          }
          if (f)
            return p = null,
              f + "" || null
        }
        function t() {
          return (0,
            c.default)().defined(l).curve(h).context(d)
        }
        var n = f.x
          , r = null
          , a = (0,
            o.default)(0)
          , u = f.y
          , l = (0,
            o.default)(!0)
          , d = null
          , h = s.default
          , p = null;
        return e.x = function (t) {
          return arguments.length ? (n = "function" == typeof t ? t : (0,
            o.default)(+t),
            r = null,
            e) : n
        }
          ,
          e.x0 = function (t) {
            return arguments.length ? (n = "function" == typeof t ? t : (0,
              o.default)(+t),
              e) : n
          }
          ,
          e.x1 = function (t) {
            return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : (0,
              o.default)(+t),
              e) : r
          }
          ,
          e.y = function (t) {
            return arguments.length ? (a = "function" == typeof t ? t : (0,
              o.default)(+t),
              u = null,
              e) : a
          }
          ,
          e.y0 = function (t) {
            return arguments.length ? (a = "function" == typeof t ? t : (0,
              o.default)(+t),
              e) : a
          }
          ,
          e.y1 = function (t) {
            return arguments.length ? (u = null == t ? null : "function" == typeof t ? t : (0,
              o.default)(+t),
              e) : u
          }
          ,
          e.lineX0 = e.lineY0 = function () {
            return t().x(n).y(a)
          }
          ,
          e.lineY1 = function () {
            return t().x(n).y(u)
          }
          ,
          e.lineX1 = function () {
            return t().x(r).y(a)
          }
          ,
          e.defined = function (t) {
            return arguments.length ? (l = "function" == typeof t ? t : (0,
              o.default)(!!t),
              e) : l
          }
          ,
          e.curve = function (t) {
            return arguments.length ? (h = t,
              null != d && (p = h(d)),
              e) : h
          }
          ,
          e.context = function (t) {
            return arguments.length ? (null == t ? d = p = null : p = h(d = t),
              e) : d
          }
          ,
          e
      }
      ;
    var i = n(169)
      , a = n(172)
      , o = r(a)
      , u = n(323)
      , s = r(u)
      , l = n(430)
      , c = r(l)
      , f = n(431);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      this._curve = e
    }
    function i(e) {
      function t(t) {
        return new r(e(t))
      }
      return t._curve = e,
        t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.curveRadialLinear = void 0,
      t.default = i;
    var a = n(323)
      , o = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(a);
    t.curveRadialLinear = i(o.default);
    r.prototype = {
      areaStart: function () {
        this._curve.areaStart()
      },
      areaEnd: function () {
        this._curve.areaEnd()
      },
      lineStart: function () {
        this._curve.lineStart()
      },
      lineEnd: function () {
        this._curve.lineEnd()
      },
      point: function (e, t) {
        this._curve.point(t * Math.sin(e), t * -Math.cos(e))
      }
    }
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e) {
      var t = e.curve;
      return e.angle = e.x,
        delete e.x,
        e.radius = e.y,
        delete e.y,
        e.curve = function (e) {
          return arguments.length ? t((0,
            o.default)(e)) : t()._curve
        }
        ,
        e
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.lineRadial = i,
      t.default = function () {
        return i((0,
          s.default)().curve(a.curveRadialLinear))
      }
      ;
    var a = n(764)
      , o = r(a)
      , u = n(430)
      , s = r(u)
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        return [(t = +t) * Math.cos(e -= Math.PI / 2), t * Math.sin(e)]
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.slice = Array.prototype.slice
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(229);
    t.default = {
      draw: function (e, t) {
        var n = Math.sqrt(t / r.pi);
        e.moveTo(n, 0),
          e.arc(0, 0, n, 0, r.tau)
      }
    },
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = {
        draw: function (e, t) {
          var n = Math.sqrt(t / 5) / 2;
          e.moveTo(-3 * n, -n),
            e.lineTo(-n, -n),
            e.lineTo(-n, -3 * n),
            e.lineTo(n, -3 * n),
            e.lineTo(n, -n),
            e.lineTo(3 * n, -n),
            e.lineTo(3 * n, n),
            e.lineTo(n, n),
            e.lineTo(n, 3 * n),
            e.lineTo(-n, 3 * n),
            e.lineTo(-n, n),
            e.lineTo(-3 * n, n),
            e.closePath()
        }
      },
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = Math.sqrt(1 / 3)
      , i = 2 * r;
    t.default = {
      draw: function (e, t) {
        var n = Math.sqrt(t / i)
          , a = n * r;
        e.moveTo(0, -n),
          e.lineTo(a, 0),
          e.lineTo(0, n),
          e.lineTo(-a, 0),
          e.closePath()
      }
    },
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(229)
      , i = Math.sin(r.pi / 10) / Math.sin(7 * r.pi / 10)
      , a = Math.sin(r.tau / 10) * i
      , o = -Math.cos(r.tau / 10) * i;
    t.default = {
      draw: function (e, t) {
        var n = Math.sqrt(.8908130915292852 * t)
          , i = a * n
          , u = o * n;
        e.moveTo(0, -n),
          e.lineTo(i, u);
        for (var s = 1; s < 5; ++s) {
          var l = r.tau * s / 5
            , c = Math.cos(l)
            , f = Math.sin(l);
          e.lineTo(f * n, -c * n),
            e.lineTo(c * i - f * u, f * i + c * u)
        }
        e.closePath()
      }
    },
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = {
        draw: function (e, t) {
          var n = Math.sqrt(t)
            , r = -n / 2;
          e.rect(r, r, n, n)
        }
      },
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = Math.sqrt(3);
    t.default = {
      draw: function (e, t) {
        var n = -Math.sqrt(t / (3 * r));
        e.moveTo(0, 2 * n),
          e.lineTo(-r * n, -n),
          e.lineTo(r * n, -n),
          e.closePath()
      }
    },
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = -.5
      , i = Math.sqrt(3) / 2
      , a = 1 / Math.sqrt(12)
      , o = 3 * (a / 2 + 1);
    t.default = {
      draw: function (e, t) {
        var n = Math.sqrt(t / o)
          , u = n / 2
          , s = n * a
          , l = u
          , c = n * a + n
          , f = -l
          , d = c;
        e.moveTo(u, s),
          e.lineTo(l, c),
          e.lineTo(f, d),
          e.lineTo(r * u - i * s, i * u + r * s),
          e.lineTo(r * l - i * c, i * l + r * c),
          e.lineTo(r * f - i * d, i * f + r * d),
          e.lineTo(r * u + i * s, r * s - i * u),
          e.lineTo(r * l + i * c, r * c - i * l),
          e.lineTo(r * f + i * d, r * d - i * f),
          e.closePath()
      }
    },
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      this._context = e,
        this._k = (1 - t) / 6
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.CardinalClosed = r;
    var i = n(324)
      , a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i)
      , o = n(326);
    r.prototype = {
      areaStart: a.default,
      areaEnd: a.default,
      lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN,
          this._point = 0
      },
      lineEnd: function () {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3),
              this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3),
              this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3),
              this.point(this._x4, this._y4),
              this.point(this._x5, this._y5)
        }
      },
      point: function (e, t) {
        switch (e = +e,
        t = +t,
        this._point) {
          case 0:
            this._point = 1,
              this._x3 = e,
              this._y3 = t;
            break;
          case 1:
            this._point = 2,
              this._context.moveTo(this._x4 = e, this._y4 = t);
            break;
          case 2:
            this._point = 3,
              this._x5 = e,
              this._y5 = t;
            break;
          default:
            (0,
              o.point)(this, e, t)
        }
        this._x0 = this._x1,
          this._x1 = this._x2,
          this._x2 = e,
          this._y0 = this._y1,
          this._y1 = this._y2,
          this._y2 = t
      }
    },
      t.default = function e(t) {
        function n(e) {
          return new r(e, t)
        }
        return n.tension = function (t) {
          return e(+t)
        }
          ,
          n
      }(0)
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      this._context = e,
        this._k = (1 - t) / 6
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.CardinalOpen = r;
    var i = n(326);
    r.prototype = {
      areaStart: function () {
        this._line = 0
      },
      areaEnd: function () {
        this._line = NaN
      },
      lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
          this._point = 0
      },
      lineEnd: function () {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
          this._line = 1 - this._line
      },
      point: function (e, t) {
        switch (e = +e,
        t = +t,
        this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3,
              this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            (0,
              i.point)(this, e, t)
        }
        this._x0 = this._x1,
          this._x1 = this._x2,
          this._x2 = e,
          this._y0 = this._y1,
          this._y1 = this._y2,
          this._y2 = t
      }
    },
      t.default = function e(t) {
        function n(e) {
          return new r(e, t)
        }
        return n.tension = function (t) {
          return e(+t)
        }
          ,
          n
      }(0)
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return c.cells[e.index] = {
        site: e,
        halfedges: []
      }
    }
    function i(e, t) {
      var n = e.site
        , r = t.left
        , i = t.right;
      return n === i && (i = r,
        r = n),
        i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (n === r ? (r = t[1],
          i = t[0]) : (r = t[0],
            i = t[1]),
          Math.atan2(r[0] - i[0], i[1] - r[1]))
    }
    function a(e, t) {
      return t[+(t.left !== e.site)]
    }
    function o(e, t) {
      return t[+(t.left === e.site)]
    }
    function u() {
      for (var e, t, n, r, a = 0, o = c.cells.length; a < o; ++a)
        if ((e = c.cells[a]) && (r = (t = e.halfedges).length)) {
          var u = new Array(r)
            , s = new Array(r);
          for (n = 0; n < r; ++n)
            u[n] = n,
              s[n] = i(e, c.edges[t[n]]);
          for (u.sort(function (e, t) {
            return s[t] - s[e]
          }),
            n = 0; n < r; ++n)
            s[n] = t[u[n]];
          for (n = 0; n < r; ++n)
            t[n] = s[n]
        }
    }
    function s(e, t, n, r) {
      var i, u, s, f, d, h, p, v, y, m, g, b, _ = c.cells.length, x = !0;
      for (i = 0; i < _; ++i)
        if (u = c.cells[i]) {
          for (s = u.site,
            d = u.halfedges,
            f = d.length; f--;)
            c.edges[d[f]] || d.splice(f, 1);
          for (f = 0,
            h = d.length; f < h;)
            m = o(u, c.edges[d[f]]),
              g = m[0],
              b = m[1],
              p = a(u, c.edges[d[++f % h]]),
              v = p[0],
              y = p[1],
              (Math.abs(g - v) > c.epsilon || Math.abs(b - y) > c.epsilon) && (d.splice(f, 0, c.edges.push((0,
                l.createBorderEdge)(s, m, Math.abs(g - e) < c.epsilon && r - b > c.epsilon ? [e, Math.abs(v - e) < c.epsilon ? y : r] : Math.abs(b - r) < c.epsilon && n - g > c.epsilon ? [Math.abs(y - r) < c.epsilon ? v : n, r] : Math.abs(g - n) < c.epsilon && b - t > c.epsilon ? [n, Math.abs(v - n) < c.epsilon ? y : t] : Math.abs(b - t) < c.epsilon && g - e > c.epsilon ? [Math.abs(y - t) < c.epsilon ? v : e, t] : null)) - 1),
                ++h);
          h && (x = !1)
        }
      if (x) {
        var w, P, M, O = 1 / 0;
        for (i = 0,
          x = null; i < _; ++i)
          (u = c.cells[i]) && (s = u.site,
            w = s[0] - e,
            P = s[1] - t,
            (M = w * w + P * P) < O && (O = M,
              x = u));
        if (x) {
          var E = [e, t]
            , j = [e, r]
            , S = [n, r]
            , k = [n, t];
          x.halfedges.push(c.edges.push((0,
            l.createBorderEdge)(s = x.site, E, j)) - 1, c.edges.push((0,
              l.createBorderEdge)(s, j, S)) - 1, c.edges.push((0,
                l.createBorderEdge)(s, S, k)) - 1, c.edges.push((0,
                  l.createBorderEdge)(s, k, E)) - 1)
        }
      }
      for (i = 0; i < _; ++i)
        (u = c.cells[i]) && (u.halfedges.length || delete c.cells[i])
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.createCell = r,
      t.cellHalfedgeStart = a,
      t.cellHalfedgeEnd = o,
      t.sortCellHalfedges = u,
      t.clipCells = s;
    var l = n(435)
      , c = n(232)
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      (0,
        o.RedBlackNode)(this),
        this.x = this.y = this.arc = this.site = this.cy = null
    }
    function i(e) {
      var n = e.P
        , i = e.N;
      if (n && i) {
        var a = n.site
          , o = e.site
          , c = i.site;
        if (a !== c) {
          var f = o[0]
            , d = o[1]
            , h = a[0] - f
            , p = a[1] - d
            , v = c[0] - f
            , y = c[1] - d
            , m = 2 * (h * y - p * v);
          if (!(m >= -u.epsilon2)) {
            var g = h * h + p * p
              , b = v * v + y * y
              , _ = (y * g - p * b) / m
              , x = (h * b - v * g) / m
              , w = s.pop() || new r;
            w.arc = e,
              w.site = o,
              w.x = _ + f,
              w.y = (w.cy = x + d) + Math.sqrt(_ * _ + x * x),
              e.circle = w;
            for (var P = null, M = u.circles._; M;)
              if (w.y < M.y || w.y === M.y && w.x <= M.x) {
                if (!M.L) {
                  P = M.P;
                  break
                }
                M = M.L
              } else {
                if (!M.R) {
                  P = M;
                  break
                }
                M = M.R
              }
            u.circles.insert(P, w),
              P || (t.firstCircle = l = w)
          }
        }
      }
    }
    function a(e) {
      var n = e.circle;
      n && (n.P || (t.firstCircle = l = n.N),
        u.circles.remove(n),
        s.push(n),
        (0,
          o.RedBlackNode)(n),
        e.circle = null)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.firstCircle = void 0,
      t.attachCircle = i,
      t.detachCircle = a;
    var o = n(434)
      , u = n(232)
      , s = []
      , l = t.firstCircle = void 0
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      this.k = e,
        this.x = t,
        this.y = n
    }
    function i(e) {
      return e.__zoom || a
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.Transform = r,
      t.default = i,
      r.prototype = {
        constructor: r,
        scale: function (e) {
          return 1 === e ? this : new r(this.k * e, this.x, this.y)
        },
        translate: function (e, t) {
          return 0 === e & 0 === t ? this : new r(this.k, this.x + this.k * e, this.y + this.k * t)
        },
        apply: function (e) {
          return [e[0] * this.k + this.x, e[1] * this.k + this.y]
        },
        applyX: function (e) {
          return e * this.k + this.x
        },
        applyY: function (e) {
          return e * this.k + this.y
        },
        invert: function (e) {
          return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k]
        },
        invertX: function (e) {
          return (e - this.x) / this.k
        },
        invertY: function (e) {
          return (e - this.y) / this.k
        },
        rescaleX: function (e) {
          return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e))
        },
        rescaleY: function (e) {
          return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e))
        },
        toString: function () {
          return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
        }
      };
    var a = t.identity = new r(1, 0, 0);
    i.prototype = r.prototype
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      for (var n in e)
        t[n] = e[n]
    }
    function i(e, t) {
      var n = e.prototype;
      if (Object.create) {
        var i = Object.create(t.prototype);
        n.__proto__ = i
      }
      if (!(n instanceof t)) {
        var a = function () { };
        a.prototype = t.prototype,
          a = new a,
          r(n, a),
          e.prototype = n = a
      }
      n.constructor != e && (n.constructor = e)
    }
    function a(e, t) {
      if (t instanceof Error)
        var n = t;
      else
        n = this,
          Error.call(this, ae[e]),
          this.message = ae[e],
          Error.captureStackTrace && Error.captureStackTrace(this, a);
      return n.code = e,
        t && (this.message = this.message + ": " + t),
        n
    }
    function o() { }
    function u(e, t) {
      this._node = e,
        this._refresh = t,
        s(this)
    }
    function s(e) {
      var t = e._node._inc || e._node.ownerDocument._inc;
      if (e._inc != t) {
        var n = e._refresh(e._node);
        q(e, "length", n.length),
          r(n, e),
          e._inc = t
      }
    }
    function l() { }
    function c(e, t) {
      for (var n = e.length; n--;)
        if (e[n] === t)
          return n
    }
    function f(e, t, n, r) {
      if (r ? t[c(t, r)] = n : t[t.length++] = n,
        e) {
        n.ownerElement = e;
        var i = e.ownerDocument;
        i && (r && b(i, e, r),
          g(i, e, n))
      }
    }
    function d(e, t, n) {
      var r = c(t, n);
      if (!(r >= 0))
        throw a(ue, new Error(e.tagName + "@" + n));
      for (var i = t.length - 1; r < i;)
        t[r] = t[++r];
      if (t.length = i,
        e) {
        var o = e.ownerDocument;
        o && (b(o, e, n),
          n.ownerElement = null)
      }
    }
    function h(e) {
      if (this._features = {},
        e)
        for (var t in e)
          this._features = e[t]
    }
    function p() { }
    function v(e) {
      return "<" == e && "&lt;" || ">" == e && "&gt;" || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";"
    }
    function y(e, t) {
      if (t(e))
        return !0;
      if (e = e.firstChild)
        do {
          if (y(e, t))
            return !0
        } while (e = e.nextSibling)
    }
    function m() { }
    function g(e, t, n) {
      e && e._inc++ ,
        "http://www.w3.org/2000/xmlns/" == n.namespaceURI && (t._nsMap[n.prefix ? n.localName : ""] = n.value)
    }
    function b(e, t, n, r) {
      e && e._inc++ ,
        "http://www.w3.org/2000/xmlns/" == n.namespaceURI && delete t._nsMap[n.prefix ? n.localName : ""]
    }
    function _(e, t, n) {
      if (e && e._inc) {
        e._inc++;
        var r = t.childNodes;
        if (n)
          r[r.length++] = n;
        else {
          for (var i = t.firstChild, a = 0; i;)
            r[a++] = i,
              i = i.nextSibling;
          r.length = a
        }
      }
    }
    function x(e, t) {
      var n = t.previousSibling
        , r = t.nextSibling;
      return n ? n.nextSibling = r : e.firstChild = r,
        r ? r.previousSibling = n : e.lastChild = n,
        _(e.ownerDocument, e),
        t
    }
    function w(e, t, n) {
      var r = t.parentNode;
      if (r && r.removeChild(t),
        t.nodeType === ne) {
        var i = t.firstChild;
        if (null == i)
          return t;
        var a = t.lastChild
      } else
        i = a = t;
      var o = n ? n.previousSibling : e.lastChild;
      i.previousSibling = o,
        a.nextSibling = n,
        o ? o.nextSibling = i : e.firstChild = i,
        null == n ? e.lastChild = a : n.previousSibling = a;
      do {
        i.parentNode = e
      } while (i !== a && (i = i.nextSibling)); return _(e.ownerDocument || e, e),
        t.nodeType == ne && (t.firstChild = t.lastChild = null),
        t
    }
    function P(e, t) {
      var n = t.parentNode;
      if (n) {
        var r = e.lastChild;
        n.removeChild(t);
        var r = e.lastChild
      }
      var r = e.lastChild;
      return t.parentNode = e,
        t.previousSibling = r,
        t.nextSibling = null,
        r ? r.nextSibling = t : e.firstChild = t,
        e.lastChild = t,
        _(e.ownerDocument, e, t),
        t
    }
    function M() {
      this._nsMap = {}
    }
    function O() { }
    function E() { }
    function j() { }
    function S() { }
    function k() { }
    function C() { }
    function T() { }
    function N() { }
    function D() { }
    function A() { }
    function L() { }
    function I() { }
    function R(e, t) {
      var n = []
        , r = 9 == this.nodeType ? this.documentElement : this
        , i = r.prefix
        , a = r.namespaceURI;
      if (a && null == i) {
        var i = r.lookupPrefix(a);
        if (null == i)
          var o = [{
            namespace: a,
            prefix: null
          }]
      }
      return V(this, n, e, t, o),
        n.join("")
    }
    function B(e, t, n) {
      var r = e.prefix || ""
        , i = e.namespaceURI;
      if (!r && !i)
        return !1;
      if ("xml" === r && "http://www.w3.org/XML/1998/namespace" === i || "http://www.w3.org/2000/xmlns/" == i)
        return !1;
      for (var a = n.length; a--;) {
        var o = n[a];
        if (o.prefix == r)
          return o.namespace != i
      }
      return !0
    }
    function V(e, t, n, r, i) {
      if (r) {
        if (!(e = r(e)))
          return;
        if ("string" == typeof e)
          return void t.push(e)
      }
      switch (e.nodeType) {
        case U:
          i || (i = []);
          var a = (i.length,
            e.attributes)
            , o = a.length
            , u = e.firstChild
            , s = e.tagName;
          n = X === e.namespaceURI || n,
            t.push("<", s);
          for (var l = 0; l < o; l++) {
            var c = a.item(l);
            "xmlns" == c.prefix ? i.push({
              prefix: c.localName,
              namespace: c.value
            }) : "xmlns" == c.nodeName && i.push({
              prefix: "",
              namespace: c.value
            })
          }
          for (var l = 0; l < o; l++) {
            var c = a.item(l);
            if (B(c, n, i)) {
              var f = c.prefix || ""
                , d = c.namespaceURI
                , h = f ? " xmlns:" + f : " xmlns";
              t.push(h, '="', d, '"'),
                i.push({
                  prefix: f,
                  namespace: d
                })
            }
            V(c, t, n, r, i)
          }
          if (B(e, n, i)) {
            var f = e.prefix || ""
              , d = e.namespaceURI
              , h = f ? " xmlns:" + f : " xmlns";
            t.push(h, '="', d, '"'),
              i.push({
                prefix: f,
                namespace: d
              })
          }
          if (u || n && !/^(?:meta|link|img|br|hr|input)$/i.test(s)) {
            if (t.push(">"),
              n && /^script$/i.test(s))
              for (; u;)
                u.data ? t.push(u.data) : V(u, t, n, r, i),
                  u = u.nextSibling;
            else
              for (; u;)
                V(u, t, n, r, i),
                  u = u.nextSibling;
            t.push("</", s, ">")
          } else
            t.push("/>");
          return;
        case ee:
        case ne:
          for (var u = e.firstChild; u;)
            V(u, t, n, r, i),
              u = u.nextSibling;
          return;
        case W:
          return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, v), '"');
        case $:
          return t.push(e.data.replace(/[<&]/g, v));
        case G:
          return t.push("<![CDATA[", e.data, "]]>");
        case K:
          return t.push("\x3c!--", e.data, "--\x3e");
        case te:
          var p = e.publicId
            , y = e.systemId;
          if (t.push("<!DOCTYPE ", e.name),
            p)
            t.push(' PUBLIC "', p),
              y && "." != y && t.push('" "', y),
              t.push('">');
          else if (y && "." != y)
            t.push(' SYSTEM "', y, '">');
          else {
            var m = e.internalSubset;
            m && t.push(" [", m, "]"),
              t.push(">")
          }
          return;
        case J:
          return t.push("<?", e.target, " ", e.data, "?>");
        case Z:
          return t.push("&", e.nodeName, ";");
        default:
          t.push("??", e.nodeName)
      }
    }
    function z(e, t, n) {
      var r;
      switch (t.nodeType) {
        case U:
          r = t.cloneNode(!1),
            r.ownerDocument = e;
        case ne:
          break;
        case W:
          n = !0
      }
      if (r || (r = t.cloneNode(!1)),
        r.ownerDocument = e,
        r.parentNode = null,
        n)
        for (var i = t.firstChild; i;)
          r.appendChild(z(e, i, n)),
            i = i.nextSibling;
      return r
    }
    function F(e, t, n) {
      var r = new t.constructor;
      for (var i in t) {
        var a = t[i];
        "object" != (void 0 === a ? "undefined" : Y(a)) && a != r[i] && (r[i] = a)
      }
      switch (t.childNodes && (r.childNodes = new o),
      r.ownerDocument = e,
      r.nodeType) {
        case U:
          var u = t.attributes
            , s = r.attributes = new l
            , c = u.length;
          s._ownerElement = r;
          for (var f = 0; f < c; f++)
            r.setAttributeNode(F(e, u.item(f), !0));
          break;
        case W:
          n = !0
      }
      if (n)
        for (var d = t.firstChild; d;)
          r.appendChild(F(e, d, n)),
            d = d.nextSibling;
      return r
    }
    function q(e, t, n) {
      e[t] = n
    }
    var Y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    }
      : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      , X = "http://www.w3.org/1999/xhtml"
      , H = {}
      , U = H.ELEMENT_NODE = 1
      , W = H.ATTRIBUTE_NODE = 2
      , $ = H.TEXT_NODE = 3
      , G = H.CDATA_SECTION_NODE = 4
      , Z = H.ENTITY_REFERENCE_NODE = 5
      , Q = H.ENTITY_NODE = 6
      , J = H.PROCESSING_INSTRUCTION_NODE = 7
      , K = H.COMMENT_NODE = 8
      , ee = H.DOCUMENT_NODE = 9
      , te = H.DOCUMENT_TYPE_NODE = 10
      , ne = H.DOCUMENT_FRAGMENT_NODE = 11
      , re = H.NOTATION_NODE = 12
      , ie = {}
      , ae = {}
      , oe = (ie.INDEX_SIZE_ERR = (ae[1] = "Index size error",
        1),
        ie.DOMSTRING_SIZE_ERR = (ae[2] = "DOMString size error",
          2),
        ie.HIERARCHY_REQUEST_ERR = (ae[3] = "Hierarchy request error",
          3))
      , ue = (ie.WRONG_DOCUMENT_ERR = (ae[4] = "Wrong document",
        4),
        ie.INVALID_CHARACTER_ERR = (ae[5] = "Invalid character",
          5),
        ie.NO_DATA_ALLOWED_ERR = (ae[6] = "No data allowed",
          6),
        ie.NO_MODIFICATION_ALLOWED_ERR = (ae[7] = "No modification allowed",
          7),
        ie.NOT_FOUND_ERR = (ae[8] = "Not found",
          8))
      , se = (ie.NOT_SUPPORTED_ERR = (ae[9] = "Not supported",
        9),
        ie.INUSE_ATTRIBUTE_ERR = (ae[10] = "Attribute in use",
          10));
    ie.INVALID_STATE_ERR = (ae[11] = "Invalid state",
      11),
      ie.SYNTAX_ERR = (ae[12] = "Syntax error",
        12),
      ie.INVALID_MODIFICATION_ERR = (ae[13] = "Invalid modification",
        13),
      ie.NAMESPACE_ERR = (ae[14] = "Invalid namespace",
        14),
      ie.INVALID_ACCESS_ERR = (ae[15] = "Invalid access",
        15);
    a.prototype = Error.prototype,
      r(ie, a),
      o.prototype = {
        length: 0,
        item: function (e) {
          return this[e] || null
        },
        toString: function (e, t) {
          for (var n = [], r = 0; r < this.length; r++)
            V(this[r], n, e, t);
          return n.join("")
        }
      },
      u.prototype.item = function (e) {
        return s(this),
          this[e]
      }
      ,
      i(u, o),
      l.prototype = {
        length: 0,
        item: o.prototype.item,
        getNamedItem: function (e) {
          for (var t = this.length; t--;) {
            var n = this[t];
            if (n.nodeName == e)
              return n
          }
        },
        setNamedItem: function (e) {
          var t = e.ownerElement;
          if (t && t != this._ownerElement)
            throw new a(se);
          var n = this.getNamedItem(e.nodeName);
          return f(this._ownerElement, this, e, n),
            n
        },
        setNamedItemNS: function (e) {
          var t, n = e.ownerElement;
          if (n && n != this._ownerElement)
            throw new a(se);
          return t = this.getNamedItemNS(e.namespaceURI, e.localName),
            f(this._ownerElement, this, e, t),
            t
        },
        removeNamedItem: function (e) {
          var t = this.getNamedItem(e);
          return d(this._ownerElement, this, t),
            t
        },
        removeNamedItemNS: function (e, t) {
          var n = this.getNamedItemNS(e, t);
          return d(this._ownerElement, this, n),
            n
        },
        getNamedItemNS: function (e, t) {
          for (var n = this.length; n--;) {
            var r = this[n];
            if (r.localName == t && r.namespaceURI == e)
              return r
          }
          return null
        }
      },
      h.prototype = {
        hasFeature: function (e, t) {
          var n = this._features[e.toLowerCase()];
          return !(!n || t && !(t in n))
        },
        createDocument: function (e, t, n) {
          var r = new m;
          if (r.implementation = this,
            r.childNodes = new o,
            r.doctype = n,
            n && r.appendChild(n),
            t) {
            var i = r.createElementNS(e, t);
            r.appendChild(i)
          }
          return r
        },
        createDocumentType: function (e, t, n) {
          var r = new C;
          return r.name = e,
            r.nodeName = e,
            r.publicId = t,
            r.systemId = n,
            r
        }
      },
      p.prototype = {
        firstChild: null,
        lastChild: null,
        previousSibling: null,
        nextSibling: null,
        attributes: null,
        parentNode: null,
        childNodes: null,
        ownerDocument: null,
        nodeValue: null,
        namespaceURI: null,
        prefix: null,
        localName: null,
        insertBefore: function (e, t) {
          return w(this, e, t)
        },
        replaceChild: function (e, t) {
          this.insertBefore(e, t),
            t && this.removeChild(t)
        },
        removeChild: function (e) {
          return x(this, e)
        },
        appendChild: function (e) {
          return this.insertBefore(e, null)
        },
        hasChildNodes: function () {
          return null != this.firstChild
        },
        cloneNode: function (e) {
          return F(this.ownerDocument || this, this, e)
        },
        normalize: function () {
          for (var e = this.firstChild; e;) {
            var t = e.nextSibling;
            t && t.nodeType == $ && e.nodeType == $ ? (this.removeChild(t),
              e.appendData(t.data)) : (e.normalize(),
                e = t)
          }
        },
        isSupported: function (e, t) {
          return this.ownerDocument.implementation.hasFeature(e, t)
        },
        hasAttributes: function () {
          return this.attributes.length > 0
        },
        lookupPrefix: function (e) {
          for (var t = this; t;) {
            var n = t._nsMap;
            if (n)
              for (var r in n)
                if (n[r] == e)
                  return r;
            t = t.nodeType == W ? t.ownerDocument : t.parentNode
          }
          return null
        },
        lookupNamespaceURI: function (e) {
          for (var t = this; t;) {
            var n = t._nsMap;
            if (n && e in n)
              return n[e];
            t = t.nodeType == W ? t.ownerDocument : t.parentNode
          }
          return null
        },
        isDefaultNamespace: function (e) {
          return null == this.lookupPrefix(e)
        }
      },
      r(H, p),
      r(H, p.prototype),
      m.prototype = {
        nodeName: "#document",
        nodeType: ee,
        doctype: null,
        documentElement: null,
        _inc: 1,
        insertBefore: function (e, t) {
          if (e.nodeType == ne) {
            for (var n = e.firstChild; n;) {
              var r = n.nextSibling;
              this.insertBefore(n, t),
                n = r
            }
            return e
          }
          return null == this.documentElement && e.nodeType == U && (this.documentElement = e),
            w(this, e, t),
            e.ownerDocument = this,
            e
        },
        removeChild: function (e) {
          return this.documentElement == e && (this.documentElement = null),
            x(this, e)
        },
        importNode: function (e, t) {
          return z(this, e, t)
        },
        getElementById: function (e) {
          var t = null;
          return y(this.documentElement, function (n) {
            if (n.nodeType == U && n.getAttribute("id") == e)
              return t = n,
                !0
          }),
            t
        },
        createElement: function (e) {
          var t = new M;
          return t.ownerDocument = this,
            t.nodeName = e,
            t.tagName = e,
            t.childNodes = new o,
            (t.attributes = new l)._ownerElement = t,
            t
        },
        createDocumentFragment: function () {
          var e = new A;
          return e.ownerDocument = this,
            e.childNodes = new o,
            e
        },
        createTextNode: function (e) {
          var t = new j;
          return t.ownerDocument = this,
            t.appendData(e),
            t
        },
        createComment: function (e) {
          var t = new S;
          return t.ownerDocument = this,
            t.appendData(e),
            t
        },
        createCDATASection: function (e) {
          var t = new k;
          return t.ownerDocument = this,
            t.appendData(e),
            t
        },
        createProcessingInstruction: function (e, t) {
          var n = new L;
          return n.ownerDocument = this,
            n.tagName = n.target = e,
            n.nodeValue = n.data = t,
            n
        },
        createAttribute: function (e) {
          var t = new O;
          return t.ownerDocument = this,
            t.name = e,
            t.nodeName = e,
            t.localName = e,
            t.specified = !0,
            t
        },
        createEntityReference: function (e) {
          var t = new D;
          return t.ownerDocument = this,
            t.nodeName = e,
            t
        },
        createElementNS: function (e, t) {
          var n = new M
            , r = t.split(":")
            , i = n.attributes = new l;
          return n.childNodes = new o,
            n.ownerDocument = this,
            n.nodeName = t,
            n.tagName = t,
            n.namespaceURI = e,
            2 == r.length ? (n.prefix = r[0],
              n.localName = r[1]) : n.localName = t,
            i._ownerElement = n,
            n
        },
        createAttributeNS: function (e, t) {
          var n = new O
            , r = t.split(":");
          return n.ownerDocument = this,
            n.nodeName = t,
            n.name = t,
            n.namespaceURI = e,
            n.specified = !0,
            2 == r.length ? (n.prefix = r[0],
              n.localName = r[1]) : n.localName = t,
            n
        }
      },
      i(m, p),
      M.prototype = {
        nodeType: U,
        hasAttribute: function (e) {
          return null != this.getAttributeNode(e)
        },
        getAttribute: function (e) {
          var t = this.getAttributeNode(e);
          return t && t.value || ""
        },
        getAttributeNode: function (e) {
          return this.attributes.getNamedItem(e)
        },
        setAttribute: function (e, t) {
          var n = this.ownerDocument.createAttribute(e);
          n.value = n.nodeValue = "" + t,
            this.setAttributeNode(n)
        },
        removeAttribute: function (e) {
          var t = this.getAttributeNode(e);
          t && this.removeAttributeNode(t)
        },
        appendChild: function (e) {
          return e.nodeType === ne ? this.insertBefore(e, null) : P(this, e)
        },
        setAttributeNode: function (e) {
          return this.attributes.setNamedItem(e)
        },
        setAttributeNodeNS: function (e) {
          return this.attributes.setNamedItemNS(e)
        },
        removeAttributeNode: function (e) {
          return this.attributes.removeNamedItem(e.nodeName)
        },
        removeAttributeNS: function (e, t) {
          var n = this.getAttributeNodeNS(e, t);
          n && this.removeAttributeNode(n)
        },
        hasAttributeNS: function (e, t) {
          return null != this.getAttributeNodeNS(e, t)
        },
        getAttributeNS: function (e, t) {
          var n = this.getAttributeNodeNS(e, t);
          return n && n.value || ""
        },
        setAttributeNS: function (e, t, n) {
          var r = this.ownerDocument.createAttributeNS(e, t);
          r.value = r.nodeValue = "" + n,
            this.setAttributeNode(r)
        },
        getAttributeNodeNS: function (e, t) {
          return this.attributes.getNamedItemNS(e, t)
        },
        getElementsByTagName: function (e) {
          return new u(this, function (t) {
            var n = [];
            return y(t, function (r) {
              r === t || r.nodeType != U || "*" !== e && r.tagName != e || n.push(r)
            }),
              n
          }
          )
        },
        getElementsByTagNameNS: function (e, t) {
          return new u(this, function (n) {
            var r = [];
            return y(n, function (i) {
              i === n || i.nodeType !== U || "*" !== e && i.namespaceURI !== e || "*" !== t && i.localName != t || r.push(i)
            }),
              r
          }
          )
        }
      },
      m.prototype.getElementsByTagName = M.prototype.getElementsByTagName,
      m.prototype.getElementsByTagNameNS = M.prototype.getElementsByTagNameNS,
      i(M, p),
      O.prototype.nodeType = W,
      i(O, p),
      E.prototype = {
        data: "",
        substringData: function (e, t) {
          return this.data.substring(e, e + t)
        },
        appendData: function (e) {
          e = this.data + e,
            this.nodeValue = this.data = e,
            this.length = e.length
        },
        insertData: function (e, t) {
          this.replaceData(e, 0, t)
        },
        appendChild: function (e) {
          throw new Error(ae[oe])
        },
        deleteData: function (e, t) {
          this.replaceData(e, t, "")
        },
        replaceData: function (e, t, n) {
          n = this.data.substring(0, e) + n + this.data.substring(e + t),
            this.nodeValue = this.data = n,
            this.length = n.length
        }
      },
      i(E, p),
      j.prototype = {
        nodeName: "#text",
        nodeType: $,
        splitText: function (e) {
          var t = this.data
            , n = t.substring(e);
          t = t.substring(0, e),
            this.data = this.nodeValue = t,
            this.length = t.length;
          var r = this.ownerDocument.createTextNode(n);
          return this.parentNode && this.parentNode.insertBefore(r, this.nextSibling),
            r
        }
      },
      i(j, E),
      S.prototype = {
        nodeName: "#comment",
        nodeType: K
      },
      i(S, E),
      k.prototype = {
        nodeName: "#cdata-section",
        nodeType: G
      },
      i(k, E),
      C.prototype.nodeType = te,
      i(C, p),
      T.prototype.nodeType = re,
      i(T, p),
      N.prototype.nodeType = Q,
      i(N, p),
      D.prototype.nodeType = Z,
      i(D, p),
      A.prototype.nodeName = "#document-fragment",
      A.prototype.nodeType = ne,
      i(A, p),
      L.prototype.nodeType = J,
      i(L, p),
      I.prototype.serializeToString = function (e, t, n) {
        return R.call(e, t, n)
      }
      ,
      p.prototype.toString = R;
    try {
      if (Object.defineProperty) {
        var le = function e(t) {
          switch (t.nodeType) {
            case U:
            case ne:
              var n = [];
              for (t = t.firstChild; t;)
                7 !== t.nodeType && 8 !== t.nodeType && n.push(e(t)),
                  t = t.nextSibling;
              return n.join("");
            default:
              return t.nodeValue
          }
        };
        Object.defineProperty(u.prototype, "length", {
          get: function () {
            return s(this),
              this.$$length
          }
        }),
          Object.defineProperty(p.prototype, "textContent", {
            get: function () {
              return le(this)
            },
            set: function (e) {
              switch (this.nodeType) {
                case U:
                case ne:
                  for (; this.firstChild;)
                    this.removeChild(this.firstChild);
                  (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
                  break;
                default:
                  this.data = e,
                    this.value = e,
                    this.nodeValue = e
              }
            }
          }),
          q = function (e, t, n) {
            e["$$" + t] = n
          }
      }
    } catch (e) { }
    t.DOMImplementation = h,
      t.XMLSerializer = I
  }
  , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    n(11),
      n(12),
      e.exports = n(1454)
  }
  , function (e, t, n) {
    "use strict";
    n(14),
      n(15),
      n(1455),
      (0,
        n(13).init)()
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n, r, i) {
      j({
        _target: c,
        tdk: {
          renderBody: function (t) {
            p(e && e.tdk, t, n, "2")
          }
        },
        styles: {
          renderBody: function (t) {
            y(e, t, n, "4")
          }
        },
        scripts: {
          renderBody: function (t) {
            g(e, t, n, "6")
          }
        },
        body: {
          renderBody: function (t) {
            _(e, t, n, "8"),
              w(e, t, n, "9"),
              M(e, t, n, "10"),
              E({}, t, n, "11")
          }
        }
      }, t, n, "0")
    }
    var i = e.exports = n(0).t()
      , a = n(1)
      , o = a.rc
      , u = o("/pc-web$1.0.0/src/routes/company/chart/index.marko", function () {
        return e.exports
      })
      , s = a.r
      , l = a.c
      , c = n(22)
      , f = n(16)
      , d = n(2)
      , h = d.t
      , p = h(f)
      , v = n(17)
      , y = h(v)
      , m = n(18)
      , g = h(m)
      , b = n(26)
      , _ = h(b)
      , x = n(1456)
      , w = h(x)
      , P = n(24)
      , M = h(P)
      , O = n(35)
      , E = h(O)
      , j = h(n(8));
    i._ = s(r, {
      ae_: !0,
      _l_: u
    }),
      i.Component = l({}, i._)
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n, r, i) {
      p(e, t, n, "0"),
        y({
          type: e.entityType,
          nav: "chart",
          eid: e.eid,
          active: e.route,
          countSummary: e.countSummary,
          companyType: e.companyType
        }, t, n, "1"),
        t.be("DIV", {
          class: O(["structure" === e.route ? "padding-h-2x" : "container"]),
          style: "margin-top:-1px;"
        }, "2", r, null, 4),
        "network" === e.route && g({
          eid: e.eid,
          user: e.user
        }, t, n, "3"),
        "structure" === e.route && _({
          eid: e.eid,
          user: e.user,
          name: e.name
        }, t, n, "4"),
        "owner" === e.route && w({
          eid: e.eid,
          user: e.user
        }, t, n, "5"),
        t.n(k, r),
        M(e && e.tdk, t, n, "7"),
        t.ee()
    }
    n(1457);
    var i = e.exports = n(0).t()
      , a = n(1)
      , o = a.rc
      , u = o("/pc-web$1.0.0/src/routes/company/chart/components/app/index.marko", function () {
        return e.exports
      })
      , s = n(1458)
      , l = a.r
      , c = a.c
      , f = n(109)
      , d = n(2)
      , h = d.t
      , p = h(f)
      , v = n(66)
      , y = h(v)
      , m = n(1459)
      , g = h(m)
      , b = n(1761)
      , _ = h(b)
      , x = n(1772)
      , w = h(x)
      , P = n(137)
      , M = h(P)
      , O = d.ca
      , E = d.e
      , j = d.const
      , S = j("fa0a13")
      , k = E("DIV", {
        class: "padding-t-1-5x"
      }, "6", null, 1, 0, {
          i: S()
        }).t("以上数据为启信宝基于工商、年报等公开信息的分析成果。启信宝不对数据的全面、准确、真实、时效负责。");
    i._ = l(r, {
      _l_: u
    }, s),
      i.Component = c(s, i._)
  }
  , function (e, t) { }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n),
          r && e(t, r),
          t
      }
    }()
      , a = n(25)
      , o = function () {
        function e() {
          r(this, e)
        }
        return i(e, [{
          key: "onMount",
          value: function () {
            a.track()
          }
        }]),
          e
      }();
    t.default = o,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n, r, i) {
      t.be("DIV", _, "0", r),
        i.isLoading && p({}, t, n, "1"),
        t.n(M, r);
      var a = n._h_("3");
      v({
        key: a,
        renderBody: function (e) {
          e.e("DIV", E, a, r, 3).n(j, r).n(S, r).n(k, r)
        }
      }, t),
        t.be("DIV", O, "13", r),
        y(i.filterList, function (e) {
          t.e("DIV", C, "14", r, 2, 0, {
            onclick: n.d("onFilterClick", !1, [e])
          }).e("DIV", {
            class: m([e.class, e.isSelected ? "checked" : "unchecked"])
          }, "15", r, 0, 4).e("SPAN", null, "16", r, 1).t(e.name)
        }),
        t.ee(),
        b({
          rotate: !0
        }, t, n, "17", [["fullScreenChange", "onFullScreenChange", !1], ["displayFullScreen", "onDisplayFullScreen", !1], ["rotateChart", "onRotateChart", !1], ["resetChart", "onResetChart", !1], ["scaleChart", "onScaleChart", !1]]),
        t.ee()
    }
    n(1460);
    var i = e.exports = n(0).t()
      , a = n(1)
      , o = a.rc
      , u = o("/pc-web$1.0.0/src/routes/company/chart/components/app-network/index.marko", function () {
        return e.exports
      })
      , s = n(1461)
      , l = a.r
      , c = a.c
      , f = n(436)
      , d = n(2)
      , h = d.t
      , p = h(f)
      , v = h(n(108))
      , y = d.f
      , m = d.ca
      , g = n(437)
      , b = h(g)
      , _ = {
        class: "chart-content"
      }
      , x = d.e
      , w = d.const
      , P = w("a89ab8")
      , M = x("DIV", {
        id: "divNewNetwork",
        class: "chart-section"
      }, "2", null, 0, 0, {
          i: P()
        })
      , O = {
        class: "new-network-filter-container"
      }
      , E = {
        class: "new-network-legend"
      }
      , j = x("DIV", {
        class: "new-network-legend-detail"
      }, "5", null, 2, 0, {
          i: P()
        }).e("DIV", {
          class: "new-network-legend-icon legend-gray"
        }, "6", null, 0).e("DIV", {
          class: "new-network-legend-title"
        }, "7", null, 1).t("灰色节点不可点击")
      , S = x("DIV", {
        class: "new-network-legend-detail"
      }, "8", null, 2, 0, {
          i: P()
        }).e("DIV", {
          class: "new-network-legend-icon legend-red"
        }, "9", null, 0).e("DIV", {
          class: "new-network-legend-title"
        }, "10", null, 1).t("红色节点为失信人")
      , k = x("DIV", {
        class: "new-network-legend-detail"
      }, "11", null, 1, 0, {
          i: P()
        }).e("DIV", {
          class: "new-network-legend-title"
        }, "12", null, 1).t("* 点击节点查看详细信息")
      , C = {
        class: "chart-filter-item"
      };
    i._ = l(r, {
      _l_: u
    }, s),
      i.Component = c(s, i._)
  }
  , function (e, t) { }
  , function (e, t, n) {
    "use strict";
    (function (r) {
      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
      }()
        , u = n(309)
        , s = i(u)
        , l = n(394)
        , c = i(l)
        , f = n(6)
        , d = i(f)
        , h = n(1466)
        , p = function () {
          function e() {
            a(this, e)
          }
          return o(e, [{
            key: "onCreate",
            value: function (e) {
              this.state = {
                isLoading: !0,
                settings: {
                  0: {
                    name: "root",
                    fill: "#0fbbe9"
                  },
                  1: {
                    name: "股东",
                    fill: "#84d9e4"
                  },
                  2: {
                    name: "高管",
                    fill: "#a8bae3"
                  },
                  3: {
                    name: "对外投资",
                    fill: "#ba9fe2"
                  },
                  4: {
                    name: "裁判文书",
                    fill: "#e59d86"
                  },
                  5: {
                    name: "法院公告",
                    fill: "#dcc28a"
                  },
                  6: {
                    name: "历史股东",
                    fill: "#7ace9d"
                  },
                  7: {
                    name: "疑似关系",
                    fill: "#f1d256"
                  },
                  98: {
                    name: "法人代表",
                    fill: ""
                  },
                  99: {
                    name: "error",
                    fill: "#f5573e"
                  }
                },
                eid: e.eid,
                info: {},
                nodeInfo: {},
                categoryList: [1, 2, 3, 4, 5, 6, 7],
                filterList: [{
                  name: "股东",
                  isSelected: !0,
                  category: 1,
                  class: "chart-filter-item-checkbox new-network-filter-gudong"
                }, {
                  name: "高管",
                  isSelected: !0,
                  category: 2,
                  class: "chart-filter-item-checkbox new-network-filter-gaoguan"
                }, {
                  name: "对外投资",
                  isSelected: !0,
                  category: 3,
                  class: "chart-filter-item-checkbox new-network-filter-touzi"
                }, {
                  name: "裁判文书",
                  isSelected: !0,
                  category: 4,
                  class: "chart-filter-item-checkbox new-network-filter-panjue"
                }, {
                  name: "法院公告",
                  isSelected: !0,
                  category: 5,
                  class: "chart-filter-item-checkbox new-network-filter-gonggao"
                }, {
                  name: "历史股东",
                  isSelected: !0,
                  category: 6,
                  class: "chart-filter-item-checkbox new-network-filter-lishi"
                }, {
                  name: "疑似关系",
                  isSelected: !0,
                  category: 7,
                  class: "chart-filter-item-checkbox new-network-filter-yishi"
                }],
                formattedData: {},
                divNewNetworkWidth: 0,
                divNewNetworkHeight: 0
              }
            }
          }, {
            key: "onMount",
            value: function () {
              var e = this;
              this.fetchData().then(function (t) {
                e.state.info = t.info,
                  e.state.nodeInfo = t.node_info,
                  e.adjustDiv(),
                  e.formatDataSource(),
                  h.init("divNewNetwork", e.state.formattedData, e.nodeClickEvent.bind(e)),
                  e.state.isLoading = !1
              }).catch(function () { }),
                r(window).bind("resize", d.default.debounce(function () {
                  e.resizeChart()
                }, 500))
            }
          }, {
            key: "onFullScreenChange",
            value: function (e) {
              var t = r(window).height()
                , n = r(window).width();
              e ? r("#divNewNetwork").css("height", t).css("width", n) : r("#divNewNetwork").css("width", this.state.divNewNetworkWidth).css("height", this.state.divNewNetworkHeight),
                h.resetChart()
            }
          }, {
            key: "onDisplayFullScreen",
            value: function () {
              var e = this.getEl();
              e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
            }
          }, {
            key: "onRotateChart",
            value: function (e) {
              h.rotateChart(e)
            }
          }, {
            key: "onResetChart",
            value: function () {
              var e = !0
                , t = !1
                , n = void 0;
              try {
                for (var r, i = this.state.filterList[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) {
                  r.value.isSelected = !0
                }
              } catch (e) {
                t = !0,
                  n = e
              } finally {
                try {
                  !e && i.return && i.return()
                } finally {
                  if (t)
                    throw n
                }
              }
              this.state.categoryList = [1, 2, 3, 4, 5, 6, 7],
                this.formatDataSource(),
                h.init("divNewNetwork", this.state.formattedData, this.nodeClickEvent.bind(this))
            }
          }, {
            key: "onScaleChart",
            value: function (e) {
              h.scaleChart(e)
            }
          }, {
            key: "resizeChart",
            value: function () {
              document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement || (this.adjustDiv(),
                h.resetChart())
            }
          }, {
            key: "onFilterClick",
            value: function (e) {
              e.isSelected = !e.isSelected,
                e.isSelected ? this.state.categoryList.push(e.category) : this.state.categoryList.splice(this.state.categoryList.indexOf(e.category), 1),
                this.formatDataSource(),
                h.init("divNewNetwork", this.state.formattedData, this.nodeClickEvent.bind(this))
            }
          }, {
            key: "showLeftPopup",
            value: function (e) {
              var t = this.getEl();
              if (7 === e.category) {
                for (var n = "", i = this.state.nodeInfo[7], a = 0; a < i.length; a++)
                  if (e.id && e.id === i[a].id || !e.id && e.name === i[a].name) {
                    var o = "";
                    r.each(i[a].related_by, function (e, t) {
                      t.content ? o += t.type + " : " + t.content + "<br/>" : o += t.type + "<br/>"
                    }),
                      n = o;
                    break
                  }
                c.default.showSuspectedDetail(e.id, e.name, n, e.has_problem, t)
              } else
                5 === e.category ? c.default.showAnnounceDetail(this.state.eid, e.id, t) : 4 === e.category ? c.default.showJudgmentDetail(this.state.eid, e.id, t) : c.default.showCompanyInfo(e.id, e.has_problem, t)
            }
          }, {
            key: "adjustDiv",
            value: function () {
              var e = r(window).height() - 128;
              r("#divNewNetwork").css("height", e >= 675 ? e : 675).css("width", "100%"),
                this.state.divNewNetworkWidth = "100%",
                this.state.divNewNetworkHeight = e >= 675 ? e : 675
            }
          }, {
            key: "nodeClickEvent",
            value: function (e) {
              1 === e.depth || !e.data.id && 7 !== e.data.category || this.showLeftPopup(e.data)
            }
          }, {
            key: "formatDataSource",
            value: function () {
              var e = {}
                , t = this.state.categoryList.sort()
                , n = {
                  1: 0,
                  2: 0,
                  3: 0,
                  4: 0,
                  5: 0,
                  6: 0,
                  7: 0
                }
                , r = 0
                , i = !0
                , a = !1
                , o = void 0;
              try {
                for (var u, s = t[Symbol.iterator](); !(i = (u = s.next()).done); i = !0) {
                  var l = u.value;
                  n[l] = this.state.nodeInfo[l].length,
                    r += this.state.nodeInfo[l].length
                }
              } catch (e) {
                a = !0,
                  o = e
              } finally {
                try {
                  !i && s.return && s.return()
                } finally {
                  if (a)
                    throw o
                }
              }
              if (r > 90) {
                var c = !0
                  , f = !1
                  , d = void 0;
                try {
                  for (var h, p = t[Symbol.iterator](); !(c = (h = p.next()).done); c = !0) {
                    var v = h.value;
                    n[v] = Math.ceil(n[v] / r * 90)
                  }
                } catch (e) {
                  f = !0,
                    d = e
                } finally {
                  try {
                    !c && p.return && p.return()
                  } finally {
                    if (f)
                      throw d
                  }
                }
              }
              e.category = 0,
                e.id = this.state.info.id,
                e.short_name = this.state.info.short_name,
                e.name = this.state.info.name,
                e.has_problem = this.state.info.has_problem,
                e.fill = this.state.info.has_problem ? this.state.settings[99].fill : this.state.settings[0].fill,
                e.items = [];
              var y = !0
                , m = !1
                , g = void 0;
              try {
                for (var b, _ = t[Symbol.iterator](); !(y = (b = _.next()).done); y = !0) {
                  var x = b.value
                    , w = {
                      category: x,
                      id: "",
                      short_name: this.state.settings[x].name,
                      name: this.state.settings[x].name,
                      has_problem: !1,
                      fill: this.state.settings[x].fill,
                      count: this.state.nodeInfo[x].length
                    };
                  if (this.state.nodeInfo[x] && this.state.nodeInfo[x].length > 0) {
                    w.items = [];
                    for (var P = 0; P < n[x]; P++) {
                      var M = {
                        category: x,
                        id: this.state.nodeInfo[x][P].id,
                        short_name: this.state.nodeInfo[x][P].short_name,
                        name: this.state.nodeInfo[x][P].name,
                        has_problem: this.state.nodeInfo[x][P].has_problem,
                        fill: this.state.nodeInfo[x][P].has_problem ? this.state.settings[99].fill : this.state.settings[x].fill,
                        title: this.state.nodeInfo[x][P].title,
                        percent: this.state.nodeInfo[x][P].percent || ""
                      };
                      1 !== x && 3 !== x || (M.percent = this.state.nodeInfo[x][P].percent),
                        w.items.push(M)
                    }
                  }
                  e.items.push(w)
                }
              } catch (e) {
                m = !0,
                  g = e
              } finally {
                try {
                  !y && _.return && _.return()
                } finally {
                  if (m)
                    throw g
                }
              }
              return this.state.formattedData = e,
                e
            }
          }, {
            key: "fetchData",
            value: function () {
              var e = this;
              return new Promise(function (t, n) {
                s.default.getNetworkData({
                  eid: e.state.eid
                }).then(t).catch(n)
              }
              )
            }
          }]),
            e
        }();
      t.default = p,
        e.exports = t.default
    }
    ).call(t, n(4))
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n, r, i) {
      t.be("DIV", {
        class: "chart-detail-div",
        style: f({
          top: e.top + "px"
        })
      }, "0", r, null, 4),
        t.e("BUTTON", m, "1", r, 1, 0, {
          onclick: n.d("closePopup", !1)
        }).t("×"),
        t.be("DIV", g, "2", r),
        t.be("DIV", b, "3", r),
        t.e("DIV", {
          class: "chart-detail-tag",
          style: f({
            "background-color": e.companyInfo.color
          })
        }, "4", r, 0, 4),
        t.be("DIV", _, "5", r),
        t.e("SPAN", null, "6", r, 1).t(e.companyInfo.title),
        e.companyInfo.eid && e.hasProblem && t.e("A", {
          class: "chart-detail-dishonest",
          target: "_blank",
          href: h("/company-risk/" + e.companyInfo.eid)
        }, "7", r, 1).t("查看失信人详情"),
        t.ee(),
        t.ee(),
        e.companyInfo.eid && t.e("DIV", x, "8", r, 2).e("DIV", w, "9", r, 2).e("A", {
          target: "_blank",
          href: h("/company/" + e.companyInfo.eid)
        }, "10", r, 1).t(e.companyInfo.ename).e("SPAN", {
          class: p(["label", 1 === e.companyInfo.statusCode ? "label-blue" : "label-red"])
        }, "11", r, 1, 4).t(e.companyInfo.status).e("DIV", P, "12", r, 1).e("TABLE", M, "13", r, 1).e("TBODY", null, "14", r, 4).e("TR", null, "15", r, 2).e("TD", O, "16", r, 2).t(e.companyInfo.operNameTitle).t("：").e("TD", null, "17", r, 1).t(e.companyInfo.operName).e("TR", null, "18", r, 2).n(k, r).e("TD", null, "20", r, 1).t(e.companyInfo.regCapi).e("TR", null, "21", r, 2).n(C, r).e("TD", null, "23", r, 1).t(e.companyInfo.startDate).e("TR", null, "24", r, 2).n(T, r).e("TD", null, "26", r, 1).t(e.companyInfo.domain),
        e.companyInfo.eid && t.n(N, r),
        1 === e.companyInfo.type && (t.be("DIV", D, "companyDetailScroll", r),
          t.be("DIV", null, "28", r),
          t.e("UL", A, "29", r, 3).e("LI", V, "30", r, 1, 0, {
            onclick: n.d("showTab", !1)
          }).n(q, r).e("LI", z, "32", r, 1, 0, {
            onclick: n.d("showTab", !1)
          }).n(Y, r).e("LI", F, "34", r, 1, 0, {
            onclick: n.d("showTab", !1)
          }).n(X, r),
          t.be("DIV", L, "36", r),
          t.be("DIV", I, "37", r),
          0 === e.partnerInfo.length || e.isQC || e.isOTC ? e.isOTC ? (t.be("TABLE", W, "47", r),
            t.be("TBODY", null, "48", r),
            t.n($, r),
            v(e.otcPartnerInfo, function (e) {
              t.e("TR", null, "52", r, 2).e("TD", null, "53", r, 1).t(e.name).e("TD", null, "54", r, 1).t(e.percent)
            }),
            t.n(G, r),
            v(e.partnerInfo, function (e) {
              t.e("TR", null, "58", r, 2).e("TD", null, "59", r, 1).t(e.name).e("TD", null, "60", r, 1).t(e.percent)
            }),
            t.ee(),
            t.ee()) : e.isQC ? (t.be("TABLE", Z, "61", r),
              t.be("TBODY", null, "62", r),
              t.n(Q, r),
              v(e.top10PartnerInfo, function (e) {
                t.e("TR", null, "66", r, 2).e("TD", null, "67", r, 1).t(e.name).e("TD", null, "68", r, 1).t(e.percent)
              }),
              t.n(J, r),
              v(e.top10CIRPartnerInfo, function (e) {
                t.e("TR", null, "72", r, 2).e("TD", null, "73", r, 1).t(e.name).e("TD", null, "74", r, 1).t(e.percent)
              }),
              t.n(K, r),
              v(e.partnerInfo, function (e) {
                t.e("TR", null, "78", r, 2).e("TD", null, "79", r, 1).t(e.name).e("TD", null, "80", r, 1).t(e.percent)
              }),
              t.ee(),
              t.ee()) : t.n(ee, r) : (t.be("TABLE", H, "38", r),
                t.n(U, r),
                t.be("TBODY", null, "43", r),
                v(e.partnerInfo, function (e) {
                  t.e("TR", null, "44", r, 2).e("TD", null, "45", r, 1).t(e.name).e("TD", null, "46", r, 1).t(e.percent)
                }),
                t.ee(),
                t.ee()),
          t.ee(),
          t.be("DIV", R, "82", r),
          e.investInfo.length ? (t.be("TABLE", te, "83", r),
            t.n(ne, r),
            t.be("TBODY", null, "88", r),
            v(e.investInfo, function (e) {
              t.e("TR", null, "89", r, 2).e("TD", null, "90", r, 1).t(e.name).e("TD", null, "91", r, 1).t(e.percent)
            }),
            t.ee(),
            t.ee()) : t.n(re, r),
          t.ee(),
          t.be("DIV", B, "93", r),
          e.empInfo.length ? (t.be("TABLE", ie, "94", r),
            t.n(ae, r),
            t.be("TBODY", null, "99", r),
            v(e.empInfo, function (e) {
              t.e("TR", null, "100", r, 2).e("TD", null, "101", r, 1).t(e.name).e("TD", null, "102", r, 1).t(e.title)
            }),
            t.ee(),
            t.ee()) : t.n(oe, r),
          t.ee(),
          t.ee(),
          t.ee(),
          t.ee()),
        4 == e.companyInfo.type && (t.be("DIV", null, "104", r),
          e.companyInfo.eid || t.e("DIV", ce, "105", r, 2).e("SPAN", fe, "106", r, 1).t(e.companyInfo.ename).n(de, r),
          t.be("DIV", ue, "companyDetailScroll", r),
          t.be("DIV", null, "108", r),
          t.n(se, r),
          t.be("DIV", le, "110", r),
          t.h(e.reason),
          t.ee(),
          t.ee(),
          t.ee(),
          t.ee()),
        2 == e.companyInfo.type && (t.be("DIV", he, "companyDetailScroll", r),
          t.be("DIV", null, "111", r),
          y(e.lawsInfo, function (e, n) {
            t.be("TABLE", pe, "112", r),
              t.e("TR", null, "113", r, 3).e("TD", be, "114", r, 1).e("SPAN", xe, "115", r, 1).t(n.getIndex() + 1).n(_e, r).e("TD", null, "118", r, 1).e("SPAN", null, "119", r, 1).t(e.date),
              t.e("TR", null, "120", r, 3).n(we, r).n(Pe, r).e("TD", null, "124", r, 1).e("SPAN", null, "125", r, 1).t(e.caseNo),
              t.e("TR", null, "126", r, 3).n(Me, r).n(Oe, r).e("TD", null, "130", r, 1).e("SPAN", null, "131", r, 1).t(e.court),
              t.n(ve, r),
              t.be("TR", null, "136", r),
              t.n(ye, r),
              t.be("TD", me, "138", r),
              v(e.relatives, function (e) {
                t.e("DIV", null, "139", r, 3).t(e.role).t("：").t(e.name)
              }),
              t.ee(),
              t.ee(),
              t.ee(),
              t.n(ge, r)
          }),
          t.ee(),
          t.ee()),
        3 == e.companyInfo.type && (t.be("DIV", Ee, "companyDetailScroll", r),
          t.be("DIV", null, "141", r),
          y(e.courtNoticeInfo, function (e, n) {
            t.be("TABLE", je, "142", r),
              t.e("TR", null, "143", r, 3).e("TD", Te, "144", r, 1).e("SPAN", De, "145", r, 1).t(n.getIndex() + 1).n(Ne, r).e("TD", null, "148", r, 1).e("SPAN", null, "149", r, 1).t(e.date),
              t.e("TR", null, "150", r, 3).n(Ae, r).n(Le, r).e("TD", null, "154", r, 1).e("SPAN", null, "155", r, 1).t(e.type),
              t.e("TR", null, "156", r, 3).n(Ie, r).n(Re, r).e("TD", null, "160", r, 1).e("SPAN", null, "161", r, 1).t(e.court),
              t.n(Se, r),
              t.be("TR", null, "166", r),
              t.n(ke, r),
              t.be("TD", Ce, "168", r),
              v(e.relatives, function (e) {
                t.e("DIV", null, "169", r, 3).t(e.role).t("：").t(e.name)
              }),
              t.ee(),
              t.ee(),
              t.ee()
          }),
          t.ee(),
          t.ee()),
        t.ee(),
        t.ee()
    }
    n(1463);
    var i = e.exports = n(0).t()
      , a = n(1)
      , o = a.rc
      , u = o("/pc-web$1.0.0/src/routes/company/chart/components/app-chart-detail/index.marko", function () {
        return e.exports
      })
      , s = n(1464)
      , l = a.r
      , c = a.c
      , f = n(28)
      , d = n(2)
      , h = d.s
      , p = d.ca
      , v = d.f
      , y = n(23)
      , m = {
        class: "close",
        style: "width:21px;margin:5px"
      }
      , g = {
        class: "chart-detail-content"
      }
      , b = {
        class: "clearfix"
      }
      , _ = {
        class: "chart-detail-title"
      }
      , x = {
        class: "chart-detail-common-info margin-t-1x"
      }
      , w = {
        class: "chart-detail-company-name"
      }
      , P = {
        class: "chart-detail-company-info"
      }
      , M = {
        class: "table no-border table-sm"
      }
      , O = {
        style: "min-width: 70px"
      }
      , E = d.e
      , j = d.const
      , S = j("483293")
      , k = E("TD", {
        style: "min-width: 70px"
      }, "19", null, 1, 0, {
          i: S()
        }).t("注册资本：")
      , C = E("TD", {
        style: "min-width: 70px"
      }, "22", null, 1, 0, {
          i: S()
        }).t("成立日期：")
      , T = E("TD", {
        style: "min-width: 70px"
      }, "25", null, 1, 0, {
          i: S()
        }).t("行业领域：")
      , N = E("DIV", {
        class: "chart-detail-net-seperate"
      }, "27", null, 0, 0, {
          i: S()
        })
      , D = {
        class: "chart-detail-detail-info margin-t-1x"
      }
      , A = {
        class: "nav nav-tabs"
      }
      , L = {
        class: "tab-content"
      }
      , I = {
        class: "tab-pane active fade in",
        id: "partner"
      }
      , R = {
        class: "tab-pane fade",
        id: "investCompany"
      }
      , B = {
        class: "tab-pane fade",
        id: "employee"
      }
      , V = {
        class: "active"
      }
      , z = {
        class: ""
      }
      , F = {
        class: ""
      }
      , q = E("A", {
        href: "javascript:;",
        "data-target": "#partner",
        "data-toggle": "tab",
        "aria-expanded": "true"
      }, "31", null, 1, 0, {
          i: S()
        }).t("股东")
      , Y = E("A", {
        href: "javascript:;",
        "data-target": "#investCompany",
        "data-toggle": "tab",
        "aria-expanded": "false"
      }, "33", null, 1, 0, {
          i: S()
        }).t("投资")
      , X = E("A", {
        href: "javascript:;",
        "data-target": "#employee",
        "data-toggle": "tab",
        "aria-expanded": "false"
      }, "35", null, 1, 0, {
          i: S()
        }).t("主要成员")
      , H = {
        class: "table table-bordered stripe"
      }
      , U = E("THEAD", null, "39", null, 1, 0, {
        i: S()
      }).e("TR", null, "40", null, 2).e("TH", null, "41", null, 1).t("姓名").e("TH", null, "42", null, 1).t("股比")
      , W = {
        class: "table table-bordered"
      }
      , $ = E("TR", null, "49", null, 2, 0, {
        i: S()
      }).e("TH", {
        class: "td-odd"
      }, "50", null, 1).t("主要股东").e("TH", {
        class: "td-odd"
      }, "51", null, 1).t("股比")
      , G = E("TR", null, "55", null, 2, 0, {
        i: S()
      }).e("TH", {
        class: "td-odd"
      }, "56", null, 1).t("原工商股东").e("TH", {
        class: "td-odd"
      }, "57", null, 1).t("股比")
      , Z = {
        class: "table table-bordered"
      }
      , Q = E("TR", null, "63", null, 2, 0, {
        i: S()
      }).e("TH", {
        class: "td-odd"
      }, "64", null, 1).t("十大股东").e("TH", {
        class: "td-odd"
      }, "65", null, 1).t("股比")
      , J = E("TR", null, "69", null, 2, 0, {
        i: S()
      }).e("TH", {
        class: "td-odd"
      }, "70", null, 1).t("十大流通股东").e("TH", {
        class: "td-odd"
      }, "71", null, 1).t("股比")
      , K = E("TR", null, "75", null, 2, 0, {
        i: S()
      }).e("TH", {
        class: "td-odd"
      }, "76", null, 1).t("原工商股东").e("TH", {
        class: "td-odd"
      }, "77", null, 1).t("股比")
      , ee = E("DIV", null, "81", null, 1, 0, {
        i: S()
      }).t("暂无数据")
      , te = {
        class: "table table-bordered stripe"
      }
      , ne = E("THEAD", null, "84", null, 1, 0, {
        i: S()
      }).e("TR", null, "85", null, 2).e("TH", null, "86", null, 1).t("企业名称").e("TH", null, "87", null, 1).t("股比")
      , re = E("DIV", null, "92", null, 1, 0, {
        i: S()
      }).t("暂无数据")
      , ie = {
        class: "table table-bordered stripe"
      }
      , ae = E("THEAD", null, "95", null, 1, 0, {
        i: S()
      }).e("TR", null, "96", null, 2).e("TH", null, "97", null, 1).t("姓名").e("TH", null, "98", null, 1).t("职务")
      , oe = E("DIV", null, "103", null, 1, 0, {
        i: S()
      }).t("暂无数据")
      , ue = {
        class: "chart-detail-detail-info"
      }
      , se = E("SPAN", null, "109", null, 1, 0, {
        i: S()
      }).t("疑似原因：")
      , le = {
        class: "margin-t-0-6x"
      }
      , ce = {
        class: "margin-t-1x"
      }
      , fe = {
        style: "font-size: 16px"
      }
      , de = E("DIV", {
        class: "chart-detail-net-seperate"
      }, "107", null, 0, 0, {
          i: S()
        })
      , he = {
        class: "chart-detail-detail-info"
      }
      , pe = {
        class: "table no-border table-sm"
      }
      , ve = E("TR", null, "132", null, 2, 0, {
        i: S()
      }).e("TD", {
        width: "10%"
      }, "133", null, 0).e("TD", {
        colspan: "2"
      }, "134", null, 1).e("SPAN", null, "135", null, 1).t("当事人：")
      , ye = E("TD", {
        width: "10%"
      }, "137", null, 0, 0, {
          i: S()
        })
      , me = {
        colspan: "2"
      }
      , ge = E("DIV", {
        class: "chart-detail-seperate-dash"
      }, "140", null, 0, 0, {
          i: S()
        })
      , be = {
        width: "10%"
      }
      , _e = E("TD", {
        width: "25%"
      }, "116", null, 1, 0, {
          i: S()
        }).e("SPAN", null, "117", null, 1).t("判决时间：")
      , xe = {
        class: "chart-detail-sn"
      }
      , we = E("TD", {
        width: "10%"
      }, "121", null, 0, 0, {
          i: S()
        })
      , Pe = E("TD", {
        width: "25%"
      }, "122", null, 1, 0, {
          i: S()
        }).e("SPAN", null, "123", null, 1).t("案号：")
      , Me = E("TD", {
        width: "10%"
      }, "127", null, 0, 0, {
          i: S()
        })
      , Oe = E("TD", {
        width: "25%"
      }, "128", null, 1, 0, {
          i: S()
        }).e("SPAN", null, "129", null, 1).t("审理法院：")
      , Ee = {
        class: "chart-detail-detail-info"
      }
      , je = {
        class: "table no-border table-sm"
      }
      , Se = E("TR", null, "162", null, 2, 0, {
        i: S()
      }).e("TD", {
        width: "10%"
      }, "163", null, 0).e("TD", {
        colspan: "2"
      }, "164", null, 1).e("SPAN", null, "165", null, 1).t("当事人：")
      , ke = E("TD", {
        width: "10%"
      }, "167", null, 0, 0, {
          i: S()
        })
      , Ce = {
        colspan: "2"
      }
      , Te = {
        width: "10%"
      }
      , Ne = E("TD", {
        width: "25%"
      }, "146", null, 1, 0, {
          i: S()
        }).e("SPAN", null, "147", null, 1).t("发布时间：")
      , De = {
        class: "chart-detail-sn"
      }
      , Ae = E("TD", {
        width: "10%"
      }, "151", null, 0, 0, {
          i: S()
        })
      , Le = E("TD", {
        width: "25%"
      }, "152", null, 1, 0, {
          i: S()
        }).e("SPAN", null, "153", null, 1).t("公告类型：")
      , Ie = E("TD", {
        width: "10%"
      }, "157", null, 0, 0, {
          i: S()
        })
      , Re = E("TD", {
        width: "25%"
      }, "158", null, 1, 0, {
          i: S()
        }).e("SPAN", null, "159", null, 1).t("审理法院：");
    i._ = l(r, {
      _l_: u
    }, s),
      i.Component = c(s, i._)
  }
  , function (e, t) { }
  , function (e, t, n) {
    "use strict";
    (function (r) {
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
      }()
        , o = n(1465)
        , u = function () {
          function e() {
            i(this, e)
          }
          return a(e, [{
            key: "show",
            value: function () {
              this.dialog.show(500)
            }
          }, {
            key: "onMount",
            value: function () {
              var e = this;
              this.dialog = r(this.getEl());
              var t = this.getEl("companyDetailScroll");
              t && (this.scrollElement = new o(t, {
                scrollbars: !0,
                mouseWheel: !0,
                interactiveScrollbars: !0,
                disableTouch: !0
              }),
                r('a[data-toggle="tab"]').on("shown.bs.tab", function () {
                  e.scrollElement.refresh()
                }))
            }
          }, {
            key: "showTab",
            value: function (e) {
              r(e.target).tab("show")
            }
          }, {
            key: "remove",
            value: function () {
              this.dialog.remove()
            }
          }, {
            key: "closePopup",
            value: function () {
              var e = this;
              this.dialog.hide(500, function () {
                e.remove()
              })
            }
          }]),
            e
        }();
      t.default = u,
        e.exports = t.default
    }
    ).call(t, n(4))
  }
  , function (e, t, n) {
    "use strict";
    var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    }
      : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      ;
    !function (a, o, u) {
      function s(e, t) {
        this.wrapper = "string" == typeof e ? o.querySelector(e) : e,
          this.scroller = this.wrapper.children[0],
          this.scrollerStyle = this.scroller.style,
          this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: .334,
            disablePointer: !d.hasPointer,
            disableTouch: d.hasPointer || !d.hasTouch,
            disableMouse: d.hasPointer || d.hasTouch,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: {
              tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0,
            bindToWrapper: void 0 === a.onmousedown
          };
        for (var n in t)
          this.options[n] = t[n];
        this.translateZ = this.options.HWCompositing && d.hasPerspective ? " translateZ(0)" : "",
          this.options.useTransition = d.hasTransition && this.options.useTransition,
          this.options.useTransform = d.hasTransform && this.options.useTransform,
          this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough,
          this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
          this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY,
          this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX,
          this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
          this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
          this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? d.ease[this.options.bounceEasing] || d.ease.circular : this.options.bounceEasing,
          this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling,
          !0 === this.options.tap && (this.options.tap = "tap"),
          "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1),
          this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1,
          this.x = 0,
          this.y = 0,
          this.directionX = 0,
          this.directionY = 0,
          this._events = {},
          this._init(),
          this.refresh(),
          this.scrollTo(this.options.startX, this.options.startY),
          this.enable()
      }
      function l(e, t, n) {
        var r = o.createElement("div")
          , i = o.createElement("div");
        return !0 === n && (r.style.cssText = "position:absolute;z-index:9999",
          i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),
          i.className = "iScrollIndicator",
          "h" == e ? (!0 === n && (r.style.cssText += ";height:7px;left:2px;right:2px;bottom:0",
            i.style.height = "100%"),
            r.className = "iScrollHorizontalScrollbar") : (!0 === n && (r.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px",
              i.style.width = "100%"),
              r.className = "iScrollVerticalScrollbar"),
          r.style.cssText += ";overflow:hidden",
          t || (r.style.pointerEvents = "none"),
          r.appendChild(i),
          r
      }
      function c(e, t) {
        this.wrapper = "string" == typeof t.el ? o.querySelector(t.el) : t.el,
          this.wrapperStyle = this.wrapper.style,
          this.indicator = this.wrapper.children[0],
          this.indicatorStyle = this.indicator.style,
          this.scroller = e,
          this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0
          };
        for (var n in t)
          this.options[n] = t[n];
        if (this.sizeRatioX = 1,
          this.sizeRatioY = 1,
          this.maxPosX = 0,
          this.maxPosY = 0,
          this.options.interactive && (this.options.disableTouch || (d.addEvent(this.indicator, "touchstart", this),
            d.addEvent(a, "touchend", this)),
            this.options.disablePointer || (d.addEvent(this.indicator, d.prefixPointerEvent("pointerdown"), this),
              d.addEvent(a, d.prefixPointerEvent("pointerup"), this)),
            this.options.disableMouse || (d.addEvent(this.indicator, "mousedown", this),
              d.addEvent(a, "mouseup", this))),
          this.options.fade) {
          this.wrapperStyle[d.style.transform] = this.scroller.translateZ;
          var r = d.style.transitionDuration;
          this.wrapperStyle[r] = d.isBadAndroid ? "0.0001ms" : "0ms";
          var i = this;
          d.isBadAndroid && f(function () {
            "0.0001ms" === i.wrapperStyle[r] && (i.wrapperStyle[r] = "0s")
          }),
            this.wrapperStyle.opacity = "0"
        }
      }
      var f = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function (e) {
        a.setTimeout(e, 1e3 / 60)
      }
        , d = function () {
          function e(e) {
            return !1 !== r && ("" === r ? e : r + e.charAt(0).toUpperCase() + e.substr(1))
          }
          var t = {}
            , n = o.createElement("div").style
            , r = function () {
              for (var e = ["t", "webkitT", "MozT", "msT", "OT"], t = 0, r = e.length; t < r; t++)
                if (e[t] + "ransform" in n)
                  return e[t].substr(0, e[t].length - 1);
              return !1
            }();
          t.getTime = Date.now || function () {
            return (new Date).getTime()
          }
            ,
            t.extend = function (e, t) {
              for (var n in t)
                e[n] = t[n]
            }
            ,
            t.addEvent = function (e, t, n, r) {
              e.addEventListener(t, n, !!r)
            }
            ,
            t.removeEvent = function (e, t, n, r) {
              e.removeEventListener(t, n, !!r)
            }
            ,
            t.prefixPointerEvent = function (e) {
              return a.MSPointerEvent ? "MSPointer" + e.charAt(7).toUpperCase() + e.substr(8) : e
            }
            ,
            t.momentum = function (e, t, n, r, i, a) {
              var o, s, l = e - t, c = u.abs(l) / n;
              return a = void 0 === a ? 6e-4 : a,
                o = e + c * c / (2 * a) * (l < 0 ? -1 : 1),
                s = c / a,
                o < r ? (o = i ? r - i / 2.5 * (c / 8) : r,
                  l = u.abs(o - e),
                  s = l / c) : o > 0 && (o = i ? i / 2.5 * (c / 8) : 0,
                    l = u.abs(e) + o,
                    s = l / c),
                {
                  destination: u.round(o),
                  duration: s
                }
            }
            ;
          var s = e("transform");
          return t.extend(t, {
            hasTransform: !1 !== s,
            hasPerspective: e("perspective") in n,
            hasTouch: "ontouchstart" in a,
            hasPointer: !(!a.PointerEvent && !a.MSPointerEvent),
            hasTransition: e("transition") in n
          }),
            t.isBadAndroid = function () {
              var e = a.navigator.appVersion;
              if (/Android/.test(e) && !/Chrome\/\d/.test(e)) {
                var t = e.match(/Safari\/(\d+.\d)/);
                return !(t && "object" === (void 0 === t ? "undefined" : i(t)) && t.length >= 2) || parseFloat(t[1]) < 535.19
              }
              return !1
            }(),
            t.extend(t.style = {}, {
              transform: s,
              transitionTimingFunction: e("transitionTimingFunction"),
              transitionDuration: e("transitionDuration"),
              transitionDelay: e("transitionDelay"),
              transformOrigin: e("transformOrigin")
            }),
            t.hasClass = function (e, t) {
              return new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
            }
            ,
            t.addClass = function (e, n) {
              if (!t.hasClass(e, n)) {
                var r = e.className.split(" ");
                r.push(n),
                  e.className = r.join(" ")
              }
            }
            ,
            t.removeClass = function (e, n) {
              if (t.hasClass(e, n)) {
                var r = new RegExp("(^|\\s)" + n + "(\\s|$)", "g");
                e.className = e.className.replace(r, " ")
              }
            }
            ,
            t.offset = function (e) {
              for (var t = -e.offsetLeft, n = -e.offsetTop; e = e.offsetParent;)
                t -= e.offsetLeft,
                  n -= e.offsetTop;
              return {
                left: t,
                top: n
              }
            }
            ,
            t.preventDefaultException = function (e, t) {
              for (var n in t)
                if (t[n].test(e[n]))
                  return !0;
              return !1
            }
            ,
            t.extend(t.eventType = {}, {
              touchstart: 1,
              touchmove: 1,
              touchend: 1,
              mousedown: 2,
              mousemove: 2,
              mouseup: 2,
              pointerdown: 3,
              pointermove: 3,
              pointerup: 3,
              MSPointerDown: 3,
              MSPointerMove: 3,
              MSPointerUp: 3
            }),
            t.extend(t.ease = {}, {
              quadratic: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fn: function (e) {
                  return e * (2 - e)
                }
              },
              circular: {
                style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                fn: function (e) {
                  return u.sqrt(1 - --e * e)
                }
              },
              back: {
                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                fn: function (e) {
                  return (e -= 1) * e * (5 * e + 4) + 1
                }
              },
              bounce: {
                style: "",
                fn: function (e) {
                  return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }
              },
              elastic: {
                style: "",
                fn: function (e) {
                  return 0 === e ? 0 : 1 == e ? 1 : .4 * u.pow(2, -10 * e) * u.sin((e - .055) * (2 * u.PI) / .22) + 1
                }
              }
            }),
            t.tap = function (e, t) {
              var n = o.createEvent("Event");
              n.initEvent(t, !0, !0),
                n.pageX = e.pageX,
                n.pageY = e.pageY,
                e.target.dispatchEvent(n)
            }
            ,
            t.click = function (e) {
              var t, n = e.target;
              /(SELECT|INPUT|TEXTAREA)/i.test(n.tagName) || (t = o.createEvent("MouseEvents"),
                t.initMouseEvent("click", !0, !0, e.view, 1, n.screenX, n.screenY, n.clientX, n.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null),
                t._constructed = !0,
                n.dispatchEvent(t))
            }
            ,
            t
        }();
      s.prototype = {
        version: "5.2.0",
        _init: function () {
          this._initEvents(),
            (this.options.scrollbars || this.options.indicators) && this._initIndicators(),
            this.options.mouseWheel && this._initWheel(),
            this.options.snap && this._initSnap(),
            this.options.keyBindings && this._initKeys()
        },
        destroy: function () {
          this._initEvents(!0),
            clearTimeout(this.resizeTimeout),
            this.resizeTimeout = null,
            this._execEvent("destroy")
        },
        _transitionEnd: function (e) {
          e.target == this.scroller && this.isInTransition && (this._transitionTime(),
            this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1,
              this._execEvent("scrollEnd")))
        },
        _start: function (e) {
          if (1 != d.eventType[e.type]) {
            if (0 !== (e.which ? e.button : e.button < 2 ? 0 : 4 == e.button ? 1 : 2))
              return
          }
          if (this.enabled && (!this.initiated || d.eventType[e.type] === this.initiated)) {
            !this.options.preventDefault || d.isBadAndroid || d.preventDefaultException(e.target, this.options.preventDefaultException) || e.preventDefault();
            var t, n = e.touches ? e.touches[0] : e;
            this.initiated = d.eventType[e.type],
              this.moved = !1,
              this.distX = 0,
              this.distY = 0,
              this.directionX = 0,
              this.directionY = 0,
              this.directionLocked = 0,
              this.startTime = d.getTime(),
              this.options.useTransition && this.isInTransition ? (this._transitionTime(),
                this.isInTransition = !1,
                t = this.getComputedPosition(),
                this._translate(u.round(t.x), u.round(t.y)),
                this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1,
                  this._execEvent("scrollEnd")),
              this.startX = this.x,
              this.startY = this.y,
              this.absStartX = this.x,
              this.absStartY = this.y,
              this.pointX = n.pageX,
              this.pointY = n.pageY,
              this._execEvent("beforeScrollStart")
          }
        },
        _move: function (e) {
          if (this.enabled && d.eventType[e.type] === this.initiated) {
            this.options.preventDefault && e.preventDefault();
            var t, n, r, i, a = e.touches ? e.touches[0] : e, o = a.pageX - this.pointX, s = a.pageY - this.pointY, l = d.getTime();
            if (this.pointX = a.pageX,
              this.pointY = a.pageY,
              this.distX += o,
              this.distY += s,
              r = u.abs(this.distX),
              i = u.abs(this.distY),
              !(l - this.endTime > 300 && r < 10 && i < 10)) {
              if (this.directionLocked || this.options.freeScroll || (r > i + this.options.directionLockThreshold ? this.directionLocked = "h" : i >= r + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"),
                "h" == this.directionLocked) {
                if ("vertical" == this.options.eventPassthrough)
                  e.preventDefault();
                else if ("horizontal" == this.options.eventPassthrough)
                  return void (this.initiated = !1);
                s = 0
              } else if ("v" == this.directionLocked) {
                if ("horizontal" == this.options.eventPassthrough)
                  e.preventDefault();
                else if ("vertical" == this.options.eventPassthrough)
                  return void (this.initiated = !1);
                o = 0
              }
              o = this.hasHorizontalScroll ? o : 0,
                s = this.hasVerticalScroll ? s : 0,
                t = this.x + o,
                n = this.y + s,
                (t > 0 || t < this.maxScrollX) && (t = this.options.bounce ? this.x + o / 3 : t > 0 ? 0 : this.maxScrollX),
                (n > 0 || n < this.maxScrollY) && (n = this.options.bounce ? this.y + s / 3 : n > 0 ? 0 : this.maxScrollY),
                this.directionX = o > 0 ? -1 : o < 0 ? 1 : 0,
                this.directionY = s > 0 ? -1 : s < 0 ? 1 : 0,
                this.moved || this._execEvent("scrollStart"),
                this.moved = !0,
                this._translate(t, n),
                l - this.startTime > 300 && (this.startTime = l,
                  this.startX = this.x,
                  this.startY = this.y)
            }
          }
        },
        _end: function (e) {
          if (this.enabled && d.eventType[e.type] === this.initiated) {
            this.options.preventDefault && !d.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
            var t, n, r = (e.changedTouches && e.changedTouches[0],
              d.getTime() - this.startTime), i = u.round(this.x), a = u.round(this.y), o = u.abs(i - this.startX), s = u.abs(a - this.startY), l = 0, c = "";
            if (this.isInTransition = 0,
              this.initiated = 0,
              this.endTime = d.getTime(),
              !this.resetPosition(this.options.bounceTime)) {
              if (this.scrollTo(i, a),
                !this.moved)
                return this.options.tap && d.tap(e, this.options.tap),
                  this.options.click && d.click(e),
                  void this._execEvent("scrollCancel");
              if (this._events.flick && r < 200 && o < 100 && s < 100)
                return void this._execEvent("flick");
              if (this.options.momentum && r < 300 && (t = this.hasHorizontalScroll ? d.momentum(this.x, this.startX, r, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                destination: i,
                duration: 0
              },
                n = this.hasVerticalScroll ? d.momentum(this.y, this.startY, r, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                  destination: a,
                  duration: 0
                },
                i = t.destination,
                a = n.destination,
                l = u.max(t.duration, n.duration),
                this.isInTransition = 1),
                this.options.snap) {
                var f = this._nearestSnap(i, a);
                this.currentPage = f,
                  l = this.options.snapSpeed || u.max(u.max(u.min(u.abs(i - f.x), 1e3), u.min(u.abs(a - f.y), 1e3)), 300),
                  i = f.x,
                  a = f.y,
                  this.directionX = 0,
                  this.directionY = 0,
                  c = this.options.bounceEasing
              }
              if (i != this.x || a != this.y)
                return (i > 0 || i < this.maxScrollX || a > 0 || a < this.maxScrollY) && (c = d.ease.quadratic),
                  void this.scrollTo(i, a, l, c);
              this._execEvent("scrollEnd")
            }
          }
        },
        _resize: function () {
          var e = this;
          clearTimeout(this.resizeTimeout),
            this.resizeTimeout = setTimeout(function () {
              e.refresh()
            }, this.options.resizePolling)
        },
        resetPosition: function (e) {
          var t = this.x
            , n = this.y;
          return e = e || 0,
            !this.hasHorizontalScroll || this.x > 0 ? t = 0 : this.x < this.maxScrollX && (t = this.maxScrollX),
            !this.hasVerticalScroll || this.y > 0 ? n = 0 : this.y < this.maxScrollY && (n = this.maxScrollY),
            (t != this.x || n != this.y) && (this.scrollTo(t, n, e, this.options.bounceEasing),
              !0)
        },
        disable: function () {
          this.enabled = !1
        },
        enable: function () {
          this.enabled = !0
        },
        refresh: function () {
          this.wrapper.offsetHeight;
          this.wrapperWidth = this.wrapper.clientWidth,
            this.wrapperHeight = this.wrapper.clientHeight,
            this.scrollerWidth = this.scroller.offsetWidth,
            this.scrollerHeight = this.scroller.offsetHeight,
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
            this.hasHorizontalScroll || (this.maxScrollX = 0,
              this.scrollerWidth = this.wrapperWidth),
            this.hasVerticalScroll || (this.maxScrollY = 0,
              this.scrollerHeight = this.wrapperHeight),
            this.endTime = 0,
            this.directionX = 0,
            this.directionY = 0,
            this.wrapperOffset = d.offset(this.wrapper),
            this._execEvent("refresh"),
            this.resetPosition()
        },
        on: function (e, t) {
          this._events[e] || (this._events[e] = []),
            this._events[e].push(t)
        },
        off: function (e, t) {
          if (this._events[e]) {
            var n = this._events[e].indexOf(t);
            n > -1 && this._events[e].splice(n, 1)
          }
        },
        _execEvent: function (e) {
          if (this._events[e]) {
            var t = 0
              , n = this._events[e].length;
            if (n)
              for (; t < n; t++)
                this._events[e][t].apply(this, [].slice.call(arguments, 1))
          }
        },
        scrollBy: function (e, t, n, r) {
          e = this.x + e,
            t = this.y + t,
            n = n || 0,
            this.scrollTo(e, t, n, r)
        },
        scrollTo: function (e, t, n, r) {
          r = r || d.ease.circular,
            this.isInTransition = this.options.useTransition && n > 0;
          var i = this.options.useTransition && r.style;
          !n || i ? (i && (this._transitionTimingFunction(r.style),
            this._transitionTime(n)),
            this._translate(e, t)) : this._animate(e, t, n, r.fn)
        },
        scrollToElement: function (e, t, n, r, i) {
          if (e = e.nodeType ? e : this.scroller.querySelector(e)) {
            var a = d.offset(e);
            a.left -= this.wrapperOffset.left,
              a.top -= this.wrapperOffset.top,
              !0 === n && (n = u.round(e.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
              !0 === r && (r = u.round(e.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
              a.left -= n || 0,
              a.top -= r || 0,
              a.left = a.left > 0 ? 0 : a.left < this.maxScrollX ? this.maxScrollX : a.left,
              a.top = a.top > 0 ? 0 : a.top < this.maxScrollY ? this.maxScrollY : a.top,
              t = void 0 === t || null === t || "auto" === t ? u.max(u.abs(this.x - a.left), u.abs(this.y - a.top)) : t,
              this.scrollTo(a.left, a.top, t, i)
          }
        },
        _transitionTime: function (e) {
          e = e || 0;
          var t = d.style.transitionDuration;
          if (this.scrollerStyle[t] = e + "ms",
            !e && d.isBadAndroid) {
            this.scrollerStyle[t] = "0.0001ms";
            var n = this;
            f(function () {
              "0.0001ms" === n.scrollerStyle[t] && (n.scrollerStyle[t] = "0s")
            })
          }
          if (this.indicators)
            for (var r = this.indicators.length; r--;)
              this.indicators[r].transitionTime(e)
        },
        _transitionTimingFunction: function (e) {
          if (this.scrollerStyle[d.style.transitionTimingFunction] = e,
            this.indicators)
            for (var t = this.indicators.length; t--;)
              this.indicators[t].transitionTimingFunction(e)
        },
        _translate: function (e, t) {
          if (this.options.useTransform ? this.scrollerStyle[d.style.transform] = "translate(" + e + "px," + t + "px)" + this.translateZ : (e = u.round(e),
            t = u.round(t),
            this.scrollerStyle.left = e + "px",
            this.scrollerStyle.top = t + "px"),
            this.x = e,
            this.y = t,
            this.indicators)
            for (var n = this.indicators.length; n--;)
              this.indicators[n].updatePosition()
        },
        _initEvents: function (e) {
          var t = e ? d.removeEvent : d.addEvent
            , n = this.options.bindToWrapper ? this.wrapper : a;
          t(a, "orientationchange", this),
            t(a, "resize", this),
            this.options.click && t(this.wrapper, "click", this, !0),
            this.options.disableMouse || (t(this.wrapper, "mousedown", this),
              t(n, "mousemove", this),
              t(n, "mousecancel", this),
              t(n, "mouseup", this)),
            d.hasPointer && !this.options.disablePointer && (t(this.wrapper, d.prefixPointerEvent("pointerdown"), this),
              t(n, d.prefixPointerEvent("pointermove"), this),
              t(n, d.prefixPointerEvent("pointercancel"), this),
              t(n, d.prefixPointerEvent("pointerup"), this)),
            d.hasTouch && !this.options.disableTouch && (t(this.wrapper, "touchstart", this),
              t(n, "touchmove", this),
              t(n, "touchcancel", this),
              t(n, "touchend", this)),
            t(this.scroller, "transitionend", this),
            t(this.scroller, "webkitTransitionEnd", this),
            t(this.scroller, "oTransitionEnd", this),
            t(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function () {
          var e, t, n = a.getComputedStyle(this.scroller, null);
          return this.options.useTransform ? (n = n[d.style.transform].split(")")[0].split(", "),
            e = +(n[12] || n[4]),
            t = +(n[13] || n[5])) : (e = +n.left.replace(/[^-\d.]/g, ""),
              t = +n.top.replace(/[^-\d.]/g, "")),
            {
              x: e,
              y: t
            }
        },
        _initIndicators: function () {
          function e(e) {
            if (a.indicators)
              for (var t = a.indicators.length; t--;)
                e.call(a.indicators[t])
          }
          var t, n = this.options.interactiveScrollbars, r = "string" != typeof this.options.scrollbars, i = [], a = this;
          this.indicators = [],
            this.options.scrollbars && (this.options.scrollY && (t = {
              el: l("v", n, this.options.scrollbars),
              interactive: n,
              defaultScrollbars: !0,
              customStyle: r,
              resize: this.options.resizeScrollbars,
              shrink: this.options.shrinkScrollbars,
              fade: this.options.fadeScrollbars,
              listenX: !1
            },
              this.wrapper.appendChild(t.el),
              i.push(t)),
              this.options.scrollX && (t = {
                el: l("h", n, this.options.scrollbars),
                interactive: n,
                defaultScrollbars: !0,
                customStyle: r,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1
              },
                this.wrapper.appendChild(t.el),
                i.push(t))),
            this.options.indicators && (i = i.concat(this.options.indicators));
          for (var o = i.length; o--;)
            this.indicators.push(new c(this, i[o]));
          this.options.fadeScrollbars && (this.on("scrollEnd", function () {
            e(function () {
              this.fade()
            })
          }),
            this.on("scrollCancel", function () {
              e(function () {
                this.fade()
              })
            }),
            this.on("scrollStart", function () {
              e(function () {
                this.fade(1)
              })
            }),
            this.on("beforeScrollStart", function () {
              e(function () {
                this.fade(1, !0)
              })
            })),
            this.on("refresh", function () {
              e(function () {
                this.refresh()
              })
            }),
            this.on("destroy", function () {
              e(function () {
                this.destroy()
              }),
                delete this.indicators
            })
        },
        _initWheel: function () {
          d.addEvent(this.wrapper, "wheel", this),
            d.addEvent(this.wrapper, "mousewheel", this),
            d.addEvent(this.wrapper, "DOMMouseScroll", this),
            this.on("destroy", function () {
              clearTimeout(this.wheelTimeout),
                this.wheelTimeout = null,
                d.removeEvent(this.wrapper, "wheel", this),
                d.removeEvent(this.wrapper, "mousewheel", this),
                d.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        },
        _wheel: function (e) {
          if (this.enabled) {
            e.preventDefault();
            var t, n, r, i, a = this;
            if (void 0 === this.wheelTimeout && a._execEvent("scrollStart"),
              clearTimeout(this.wheelTimeout),
              this.wheelTimeout = setTimeout(function () {
                a.options.snap || a._execEvent("scrollEnd"),
                  a.wheelTimeout = void 0
              }, 400),
              "deltaX" in e)
              1 === e.deltaMode ? (t = -e.deltaX * this.options.mouseWheelSpeed,
                n = -e.deltaY * this.options.mouseWheelSpeed) : (t = -e.deltaX,
                  n = -e.deltaY);
            else if ("wheelDeltaX" in e)
              t = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed,
                n = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
            else if ("wheelDelta" in e)
              t = n = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
            else {
              if (!("detail" in e))
                return;
              t = n = -e.detail / 3 * this.options.mouseWheelSpeed
            }
            if (t *= this.options.invertWheelDirection,
              n *= this.options.invertWheelDirection,
              this.hasVerticalScroll || (t = n,
                n = 0),
              this.options.snap)
              return r = this.currentPage.pageX,
                i = this.currentPage.pageY,
                t > 0 ? r-- : t < 0 && r++ ,
                n > 0 ? i-- : n < 0 && i++ ,
                void this.goToPage(r, i);
            r = this.x + u.round(this.hasHorizontalScroll ? t : 0),
              i = this.y + u.round(this.hasVerticalScroll ? n : 0),
              this.directionX = t > 0 ? -1 : t < 0 ? 1 : 0,
              this.directionY = n > 0 ? -1 : n < 0 ? 1 : 0,
              r > 0 ? r = 0 : r < this.maxScrollX && (r = this.maxScrollX),
              i > 0 ? i = 0 : i < this.maxScrollY && (i = this.maxScrollY),
              this.scrollTo(r, i, 0)
          }
        },
        _initSnap: function () {
          this.currentPage = {},
            "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)),
            this.on("refresh", function () {
              var e, t, n, r, i, a, o = 0, s = 0, l = 0, c = this.options.snapStepX || this.wrapperWidth, f = this.options.snapStepY || this.wrapperHeight;
              if (this.pages = [],
                this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                if (!0 === this.options.snap)
                  for (n = u.round(c / 2),
                    r = u.round(f / 2); l > -this.scrollerWidth;) {
                    for (this.pages[o] = [],
                      e = 0,
                      i = 0; i > -this.scrollerHeight;)
                      this.pages[o][e] = {
                        x: u.max(l, this.maxScrollX),
                        y: u.max(i, this.maxScrollY),
                        width: c,
                        height: f,
                        cx: l - n,
                        cy: i - r
                      },
                        i -= f,
                        e++;
                    l -= c,
                      o++
                  }
                else
                  for (a = this.options.snap,
                    e = a.length,
                    t = -1; o < e; o++)
                    (0 === o || a[o].offsetLeft <= a[o - 1].offsetLeft) && (s = 0,
                      t++),
                      this.pages[s] || (this.pages[s] = []),
                      l = u.max(-a[o].offsetLeft, this.maxScrollX),
                      i = u.max(-a[o].offsetTop, this.maxScrollY),
                      n = l - u.round(a[o].offsetWidth / 2),
                      r = i - u.round(a[o].offsetHeight / 2),
                      this.pages[s][t] = {
                        x: l,
                        y: i,
                        width: a[o].offsetWidth,
                        height: a[o].offsetHeight,
                        cx: n,
                        cy: r
                      },
                      l > this.maxScrollX && s++;
                this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0),
                  this.options.snapThreshold % 1 == 0 ? (this.snapThresholdX = this.options.snapThreshold,
                    this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = u.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold),
                      this.snapThresholdY = u.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
              }
            }),
            this.on("flick", function () {
              var e = this.options.snapSpeed || u.max(u.max(u.min(u.abs(this.x - this.startX), 1e3), u.min(u.abs(this.y - this.startY), 1e3)), 300);
              this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, e)
            })
        },
        _nearestSnap: function (e, t) {
          if (!this.pages.length)
            return {
              x: 0,
              y: 0,
              pageX: 0,
              pageY: 0
            };
          var n = 0
            , r = this.pages.length
            , i = 0;
          if (u.abs(e - this.absStartX) < this.snapThresholdX && u.abs(t - this.absStartY) < this.snapThresholdY)
            return this.currentPage;
          for (e > 0 ? e = 0 : e < this.maxScrollX && (e = this.maxScrollX),
            t > 0 ? t = 0 : t < this.maxScrollY && (t = this.maxScrollY); n < r; n++)
            if (e >= this.pages[n][0].cx) {
              e = this.pages[n][0].x;
              break
            }
          for (r = this.pages[n].length; i < r; i++)
            if (t >= this.pages[0][i].cy) {
              t = this.pages[0][i].y;
              break
            }
          return n == this.currentPage.pageX && (n += this.directionX,
            n < 0 ? n = 0 : n >= this.pages.length && (n = this.pages.length - 1),
            e = this.pages[n][0].x),
            i == this.currentPage.pageY && (i += this.directionY,
              i < 0 ? i = 0 : i >= this.pages[0].length && (i = this.pages[0].length - 1),
              t = this.pages[0][i].y),
            {
              x: e,
              y: t,
              pageX: n,
              pageY: i
            }
        },
        goToPage: function (e, t, n, r) {
          r = r || this.options.bounceEasing,
            e >= this.pages.length ? e = this.pages.length - 1 : e < 0 && (e = 0),
            t >= this.pages[e].length ? t = this.pages[e].length - 1 : t < 0 && (t = 0);
          var i = this.pages[e][t].x
            , a = this.pages[e][t].y;
          n = void 0 === n ? this.options.snapSpeed || u.max(u.max(u.min(u.abs(i - this.x), 1e3), u.min(u.abs(a - this.y), 1e3)), 300) : n,
            this.currentPage = {
              x: i,
              y: a,
              pageX: e,
              pageY: t
            },
            this.scrollTo(i, a, n, r)
        },
        next: function (e, t) {
          var n = this.currentPage.pageX
            , r = this.currentPage.pageY;
          n++ ,
            n >= this.pages.length && this.hasVerticalScroll && (n = 0,
              r++),
            this.goToPage(n, r, e, t)
        },
        prev: function (e, t) {
          var n = this.currentPage.pageX
            , r = this.currentPage.pageY;
          n-- ,
            n < 0 && this.hasVerticalScroll && (n = 0,
              r--),
            this.goToPage(n, r, e, t)
        },
        _initKeys: function (e) {
          var t, n = {
            pageUp: 33,
            pageDown: 34,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40
          };
          if ("object" == i(this.options.keyBindings))
            for (t in this.options.keyBindings)
              "string" == typeof this.options.keyBindings[t] && (this.options.keyBindings[t] = this.options.keyBindings[t].toUpperCase().charCodeAt(0));
          else
            this.options.keyBindings = {};
          for (t in n)
            this.options.keyBindings[t] = this.options.keyBindings[t] || n[t];
          d.addEvent(a, "keydown", this),
            this.on("destroy", function () {
              d.removeEvent(a, "keydown", this)
            })
        },
        _key: function (e) {
          if (this.enabled) {
            var t, n = this.options.snap, r = n ? this.currentPage.pageX : this.x, i = n ? this.currentPage.pageY : this.y, a = d.getTime(), o = this.keyTime || 0;
            switch (this.options.useTransition && this.isInTransition && (t = this.getComputedPosition(),
              this._translate(u.round(t.x), u.round(t.y)),
              this.isInTransition = !1),
            this.keyAcceleration = a - o < 200 ? u.min(this.keyAcceleration + .25, 50) : 0,
            e.keyCode) {
              case this.options.keyBindings.pageUp:
                this.hasHorizontalScroll && !this.hasVerticalScroll ? r += n ? 1 : this.wrapperWidth : i += n ? 1 : this.wrapperHeight;
                break;
              case this.options.keyBindings.pageDown:
                this.hasHorizontalScroll && !this.hasVerticalScroll ? r -= n ? 1 : this.wrapperWidth : i -= n ? 1 : this.wrapperHeight;
                break;
              case this.options.keyBindings.end:
                r = n ? this.pages.length - 1 : this.maxScrollX,
                  i = n ? this.pages[0].length - 1 : this.maxScrollY;
                break;
              case this.options.keyBindings.home:
                r = 0,
                  i = 0;
                break;
              case this.options.keyBindings.left:
                r += n ? -1 : 5 + this.keyAcceleration >> 0;
                break;
              case this.options.keyBindings.up:
                i += n ? 1 : 5 + this.keyAcceleration >> 0;
                break;
              case this.options.keyBindings.right:
                r -= n ? -1 : 5 + this.keyAcceleration >> 0;
                break;
              case this.options.keyBindings.down:
                i -= n ? 1 : 5 + this.keyAcceleration >> 0;
                break;
              default:
                return
            }
            if (n)
              return void this.goToPage(r, i);
            r > 0 ? (r = 0,
              this.keyAcceleration = 0) : r < this.maxScrollX && (r = this.maxScrollX,
                this.keyAcceleration = 0),
              i > 0 ? (i = 0,
                this.keyAcceleration = 0) : i < this.maxScrollY && (i = this.maxScrollY,
                  this.keyAcceleration = 0),
              this.scrollTo(r, i, 0),
              this.keyTime = a
          }
        },
        _animate: function (e, t, n, r) {
          function i() {
            var c, h, p, v = d.getTime();
            if (v >= l)
              return a.isAnimating = !1,
                a._translate(e, t),
                void (a.resetPosition(a.options.bounceTime) || a._execEvent("scrollEnd"));
            v = (v - s) / n,
              p = r(v),
              c = (e - o) * p + o,
              h = (t - u) * p + u,
              a._translate(c, h),
              a.isAnimating && f(i)
          }
          var a = this
            , o = this.x
            , u = this.y
            , s = d.getTime()
            , l = s + n;
          this.isAnimating = !0,
            i()
        },
        handleEvent: function (e) {
          switch (e.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
              this._start(e);
              break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
              this._move(e);
              break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
              this._end(e);
              break;
            case "orientationchange":
            case "resize":
              this._resize();
              break;
            case "transitionend":
            case "webkitTransitionEnd":
            case "oTransitionEnd":
            case "MSTransitionEnd":
              this._transitionEnd(e);
              break;
            case "wheel":
            case "DOMMouseScroll":
            case "mousewheel":
              this._wheel(e);
              break;
            case "keydown":
              this._key(e);
              break;
            case "click":
              this.enabled && !e._constructed && (e.preventDefault(),
                e.stopPropagation())
          }
        }
      },
        c.prototype = {
          handleEvent: function (e) {
            switch (e.type) {
              case "touchstart":
              case "pointerdown":
              case "MSPointerDown":
              case "mousedown":
                this._start(e);
                break;
              case "touchmove":
              case "pointermove":
              case "MSPointerMove":
              case "mousemove":
                this._move(e);
                break;
              case "touchend":
              case "pointerup":
              case "MSPointerUp":
              case "mouseup":
              case "touchcancel":
              case "pointercancel":
              case "MSPointerCancel":
              case "mousecancel":
                this._end(e)
            }
          },
          destroy: function () {
            this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout),
              this.fadeTimeout = null),
              this.options.interactive && (d.removeEvent(this.indicator, "touchstart", this),
                d.removeEvent(this.indicator, d.prefixPointerEvent("pointerdown"), this),
                d.removeEvent(this.indicator, "mousedown", this),
                d.removeEvent(a, "touchmove", this),
                d.removeEvent(a, d.prefixPointerEvent("pointermove"), this),
                d.removeEvent(a, "mousemove", this),
                d.removeEvent(a, "touchend", this),
                d.removeEvent(a, d.prefixPointerEvent("pointerup"), this),
                d.removeEvent(a, "mouseup", this)),
              this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
          },
          _start: function (e) {
            var t = e.touches ? e.touches[0] : e;
            e.preventDefault(),
              e.stopPropagation(),
              this.transitionTime(),
              this.initiated = !0,
              this.moved = !1,
              this.lastPointX = t.pageX,
              this.lastPointY = t.pageY,
              this.startTime = d.getTime(),
              this.options.disableTouch || d.addEvent(a, "touchmove", this),
              this.options.disablePointer || d.addEvent(a, d.prefixPointerEvent("pointermove"), this),
              this.options.disableMouse || d.addEvent(a, "mousemove", this),
              this.scroller._execEvent("beforeScrollStart")
          },
          _move: function (e) {
            var t, n, r, i, a = e.touches ? e.touches[0] : e;
            d.getTime();
            this.moved || this.scroller._execEvent("scrollStart"),
              this.moved = !0,
              t = a.pageX - this.lastPointX,
              this.lastPointX = a.pageX,
              n = a.pageY - this.lastPointY,
              this.lastPointY = a.pageY,
              r = this.x + t,
              i = this.y + n,
              this._pos(r, i),
              e.preventDefault(),
              e.stopPropagation()
          },
          _end: function (e) {
            if (this.initiated) {
              if (this.initiated = !1,
                e.preventDefault(),
                e.stopPropagation(),
                d.removeEvent(a, "touchmove", this),
                d.removeEvent(a, d.prefixPointerEvent("pointermove"), this),
                d.removeEvent(a, "mousemove", this),
                this.scroller.options.snap) {
                var t = this.scroller._nearestSnap(this.scroller.x, this.scroller.y)
                  , n = this.options.snapSpeed || u.max(u.max(u.min(u.abs(this.scroller.x - t.x), 1e3), u.min(u.abs(this.scroller.y - t.y), 1e3)), 300);
                this.scroller.x == t.x && this.scroller.y == t.y || (this.scroller.directionX = 0,
                  this.scroller.directionY = 0,
                  this.scroller.currentPage = t,
                  this.scroller.scrollTo(t.x, t.y, n, this.scroller.options.bounceEasing))
              }
              this.moved && this.scroller._execEvent("scrollEnd")
            }
          },
          transitionTime: function (e) {
            e = e || 0;
            var t = d.style.transitionDuration;
            if (this.indicatorStyle[t] = e + "ms",
              !e && d.isBadAndroid) {
              this.indicatorStyle[t] = "0.0001ms";
              var n = this;
              f(function () {
                "0.0001ms" === n.indicatorStyle[t] && (n.indicatorStyle[t] = "0s")
              })
            }
          },
          transitionTimingFunction: function (e) {
            this.indicatorStyle[d.style.transitionTimingFunction] = e
          },
          refresh: function () {
            this.transitionTime(),
              this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none",
              this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (d.addClass(this.wrapper, "iScrollBothScrollbars"),
                d.removeClass(this.wrapper, "iScrollLoneScrollbar"),
                this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (d.removeClass(this.wrapper, "iScrollBothScrollbars"),
                  d.addClass(this.wrapper, "iScrollLoneScrollbar"),
                  this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
            this.wrapper.offsetHeight;
            this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth,
              this.options.resize ? (this.indicatorWidth = u.max(u.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8),
                this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth,
              this.maxPosX = this.wrapperWidth - this.indicatorWidth,
              "clip" == this.options.shrink ? (this.minBoundaryX = 8 - this.indicatorWidth,
                this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0,
                  this.maxBoundaryX = this.maxPosX),
              this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX),
              this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight,
                this.options.resize ? (this.indicatorHeight = u.max(u.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8),
                  this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight,
                this.maxPosY = this.wrapperHeight - this.indicatorHeight,
                "clip" == this.options.shrink ? (this.minBoundaryY = 8 - this.indicatorHeight,
                  this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0,
                    this.maxBoundaryY = this.maxPosY),
                this.maxPosY = this.wrapperHeight - this.indicatorHeight,
                this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY),
              this.updatePosition()
          },
          updatePosition: function () {
            var e = this.options.listenX && u.round(this.sizeRatioX * this.scroller.x) || 0
              , t = this.options.listenY && u.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (e < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = u.max(this.indicatorWidth + e, 8),
              this.indicatorStyle.width = this.width + "px"),
              e = this.minBoundaryX) : e > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = u.max(this.indicatorWidth - (e - this.maxPosX), 8),
                this.indicatorStyle.width = this.width + "px",
                e = this.maxPosX + this.indicatorWidth - this.width) : e = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth,
                  this.indicatorStyle.width = this.width + "px"),
              t < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = u.max(this.indicatorHeight + 3 * t, 8),
                this.indicatorStyle.height = this.height + "px"),
                t = this.minBoundaryY) : t > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = u.max(this.indicatorHeight - 3 * (t - this.maxPosY), 8),
                  this.indicatorStyle.height = this.height + "px",
                  t = this.maxPosY + this.indicatorHeight - this.height) : t = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight,
                    this.indicatorStyle.height = this.height + "px")),
              this.x = e,
              this.y = t,
              this.scroller.options.useTransform ? this.indicatorStyle[d.style.transform] = "translate(" + e + "px," + t + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = e + "px",
                this.indicatorStyle.top = t + "px")
          },
          _pos: function (e, t) {
            e < 0 ? e = 0 : e > this.maxPosX && (e = this.maxPosX),
              t < 0 ? t = 0 : t > this.maxPosY && (t = this.maxPosY),
              e = this.options.listenX ? u.round(e / this.sizeRatioX) : this.scroller.x,
              t = this.options.listenY ? u.round(t / this.sizeRatioY) : this.scroller.y,
              this.scroller.scrollTo(e, t)
          },
          fade: function (e, t) {
            if (!t || this.visible) {
              clearTimeout(this.fadeTimeout),
                this.fadeTimeout = null;
              var n = e ? 250 : 500
                , r = e ? 0 : 300;
              e = e ? "1" : "0",
                this.wrapperStyle[d.style.transitionDuration] = n + "ms",
                this.fadeTimeout = setTimeout(function (e) {
                  this.wrapperStyle.opacity = e,
                    this.visible = +e
                }
                  .bind(this, e), r)
            }
          }
        },
        s.utils = d,
        void 0 !== e && e.exports ? e.exports = s : void 0 !== (r = function () {
          return s
        }
          .call(t, n, t, e)) && (e.exports = r)
    }(window, document, Math)
  }
  , function (e, t, n) {
    "use strict";
    (function (r) {
      function i() {
        s = r(x).width(),
          l = r(x).height(),
          h = s / 2,
          p = l / 2,
          m = b.hierarchy(w, function (e) {
            return e.items
          }),
          c = b.cluster().size([360, b.min([s, l]) / 2 - _.margin]).separation(function (e, t) {
            return (e.parent === t.parent ? 1 : 2) / e.depth
          }),
          v = b.zoom().scaleExtent([.5, 2]).on("zoom", function () {
            O = b.event.transform.k,
              d.attr("transform", "translate(" + h + "," + p + ")scale(" + O + ")")
          }),
          y = b.drag().on("drag", function () {
            h += b.event.dx,
              p += b.event.dy,
              d.attr("transform", "translate(" + h + "," + p + ")scale(" + O + ")")
          }),
          b.select(x).select("svg").remove(),
          f = b.select(x).append("svg").attr("id", "network-container").attr("width", s).attr("height", l),
          f.append("rect").attr("width", s).attr("height", l).attr("fill", "#fff");
        var e = f.append("rect").attr("id", "network-gesture-handler").attr("width", s).attr("height", l).attr("fill-opacity", 0).attr("class", "new-network-rect").style("pointer-events", "all");
        f.call(v),
          e.call(y),
          d = f.append("g").attr("id", "network-tree-container").attr("transform", "translate(" + h + "," + p + ")"),
          a()
      }
      function a() {
        c(m);
        var e = m.descendants();
        e.forEach(function (e) {
          e.y = _.radiusR * e.depth,
            0 !== e.depth && (e.x += E,
              e.x >= 360 ? e.x -= 360 : e.x < 0 && (e.x += 360))
        });
        var t = d.selectAll(".new-network-node").data(e)
          , n = t.enter().append("g").attr("class", function (e) {
            var t = "new-network-node";
            return (0 === e.depth || 1 === e.depth && e.data.count > 0 || 2 === e.depth && e.data.id) && (t += " new-network-click"),
              t
          }).attr("transform", function (e) {
            return e.parent ? "rotate(" + (e.x - 90) + ")translate(" + e.y + ")" : ""
          });
        n.append("circle").attr("r", function (e) {
          return M(e.depth)
        }).attr("class", function (e) {
          if (1 === e.depth && e.data.count > 0)
            return "new-network-node-twinkle"
        }).style("stroke", function (e) {
          return 0 === e.depth || 1 === e.depth && e.data.count > 0 || 2 === e.depth && e.data.id ? e.data.fill : "#dcdcdc"
        }).style("stroke-width", "2px").style("fill", function (e) {
          return e.has_problem ? "#ffffff" : 0 === e.depth || 1 === e.depth && e.data.count > 0 || 2 === e.depth && e.data.id ? e.data.fill : "#dcdcdc"
        }).on("click", function (e) {
          u && u(e)
        }),
          n.append("text").attr("title", "title").attr("dy", function (e) {
            return 0 === e.data.category ? "-1.5em" : ".31em"
          }).attr("dx", function (e) {
            if (0 === e.data.category)
              return "-" + .7 * e.data.name.length + "em"
          }).attr("class", function (e) {
            var t = "new-network-title";
            return (0 === e.depth || 1 === e.depth && e.data.count > 0 || 2 === e.depth && e.data.id) && (t += " new-network-click"),
              t
          }).attr("text-anchor", function (e) {
            return e.parent ? e.x < 180 ? "start" : "end" : "start"
          }).attr("transform", function (e) {
            return e.parent ? e.x < 180 ? "translate(" + M(0) + ")" : "rotate(180)translate(" + -M(0) + ")" : "translate(" + M(0) + ")"
          }).style("font-size", function (e) {
            if (e.data.isSearch)
              return "14px"
          }).style("font-weight", function (e) {
            if (e.data.isSearch)
              return "bold"
          }).text(function (e) {
            return 1 === e.depth ? e.data.name + "（" + e.data.count + "）" : 2 === e.data.category && e.data.title ? e.data.name + "（" + e.data.title + "）" : e.data.name
          }).on("click", function (e) {
            u && u(e)
          }),
          t.attr("transform", function (e) {
            return e.parent ? "rotate(" + (e.x - 90) + ")translate(" + e.y + ")" : ""
          }).select("[title=title]").attr("text-anchor", function (e) {
            return e.parent ? e.x < 180 ? "start" : "end" : "start"
          }).attr("transform", function (e) {
            return e.parent ? e.x < 180 ? "translate(" + M(0) + ")" : "rotate(180)translate(" + -M(0) + ")" : "translate(" + M(0) + ")"
          }),
          b.selectAll("[title=title]").each(function (e) {
            var t = b.select(this);
            e.data.percent && t.selectAll("tspan").data([e.data.percent]).enter().append("tspan").style("fill", "#ff8a00").text(function (e) {
              return e ? "?" === e ? "" : " (" + e + ")" : ""
            })
          }),
          t.exit().remove();
        var i = m.links()
          , a = d.selectAll(".new-network-link").data(i);
        a.enter().append("path").attr("class", function (e) {
          return "new-network-link"
        }).attr("fill", "none").style("stroke-width", "0.5px").style("stroke", function (e) {
          return e.target.data.fill
        }).attr("d", P),
          a.attr("d", P),
          a.exit().remove(),
          r("#network-tree-container .new-network-node").remove().appendTo("#network-tree-container")
      }
      function o(e) {
        var t = O + e;
        t >= .5 && t <= 2 && (O = t,
          v.scaleTo(f, O))
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var u, s, l, c, f, d, h, p, v, y, m, g = n(395), b = function (e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e,
          t
      }(g), _ = {
        margin: 0,
        radiusR: 130
      }, x = "", w = {}, P = b.linkRadial().angle(function (e) {
        return e.x / 180 * Math.PI
      }).radius(function (e) {
        return e.y
      }), M = b.scaleLinear().domain([0, 2]).range([10, 4]), O = 1, E = 0;
      t.default = {
        init: function (e, t, n) {
          x = "#" + e,
            w = t,
            u = n,
            O = 1,
            E = 0,
            i()
        },
        scaleChart: function (e) {
          o(.1 * e)
        },
        resetChart: function () {
          O = 1,
            E = 0,
            i()
        },
        rotateChart: function (e) {
          E += 10 * e,
            E >= 360 ? E -= 360 : E <= -360 && (E += 360),
            a()
        }
      },
        e.exports = t.default
    }
    ).call(t, n(4))
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.name = "d3",
      t.version = "4.13.0",
      t.description = "Data-Driven Documents",
      t.keywords = ["dom", "visualization", "svg", "animation", "canvas"],
      t.homepage = "https://d3js.org",
      t.license = "BSD-3-Clause",
      t.author = {
        name: "Mike Bostock",
        url: "https://bost.ocks.org/mike"
      },
      t.main = "build/d3.node.js",
      t.unpkg = "build/d3.min.js",
      t.jsdelivr = "build/d3.min.js";
    t.module = "index";
    t.repository = {
      type: "git",
      url: "https://github.com/d3/d3.git"
    },
      t.scripts = {
        pretest: "rimraf build && mkdir build && json2module package.json > build/package.js && node rollup.node",
        test: "tape 'test/**/*-test.js'",
        prepublishOnly: 'npm run test && rollup -c --banner "$(preamble)" && uglifyjs -b beautify=false,preamble="\'$(preamble)\'" build/d3.js -c negate_iife=false -m -o build/d3.min.js',
        postpublish: 'git push && git push --tags && cd ../d3.github.com && git pull && cp ../d3/build/d3.js d3.v4.js && cp ../d3/build/d3.min.js d3.v4.min.js && git add d3.v4.js d3.v4.min.js && git commit -m "d3 ${npm_package_version}" && git push && cd - && cd ../d3-bower && git pull && cp ../d3/LICENSE ../d3/README.md ../d3/build/d3.js ../d3/build/d3.min.js . && git add -- LICENSE README.md d3.js d3.min.js && git commit -m "${npm_package_version}" && git tag -am "${npm_package_version}" v${npm_package_version} && git push && git push --tags && cd - && zip -j build/d3.zip -- LICENSE README.md API.md CHANGES.md build/d3.js build/d3.min.js'
      },
      t.devDependencies = {
        json2module: "0.0",
        "package-preamble": "0.1",
        rimraf: "2",
        rollup: "0.53",
        "rollup-plugin-ascii": "0.0",
        "rollup-plugin-node-resolve": "3",
        tape: "4",
        "uglify-js": "3.2"
      },
      t.dependencies = {
        "d3-array": "1.2.1",
        "d3-axis": "1.0.8",
        "d3-brush": "1.0.4",
        "d3-chord": "1.0.4",
        "d3-collection": "1.0.4",
        "d3-color": "1.0.3",
        "d3-dispatch": "1.0.3",
        "d3-drag": "1.2.1",
        "d3-dsv": "1.0.8",
        "d3-ease": "1.0.3",
        "d3-force": "1.1.0",
        "d3-format": "1.2.2",
        "d3-geo": "1.9.1",
        "d3-hierarchy": "1.1.5",
        "d3-interpolate": "1.1.6",
        "d3-path": "1.0.5",
        "d3-polygon": "1.0.3",
        "d3-quadtree": "1.0.3",
        "d3-queue": "3.0.7",
        "d3-random": "1.1.0",
        "d3-request": "1.0.6",
        "d3-scale": "1.0.7",
        "d3-selection": "1.3.0",
        "d3-shape": "1.2.0",
        "d3-time": "1.0.8",
        "d3-time-format": "2.1.1",
        "d3-timer": "1.0.7",
        "d3-transition": "1.1.1",
        "d3-voronoi": "1.1.2",
        "d3-zoom": "1.7.1"
      }
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n) {
        var i, a, o, u, s = e.length, l = t.length, c = new Array(s * l);
        for (null == n && (n = r.pair),
          i = o = 0; i < s; ++i)
          for (u = e[i],
            a = 0; a < l; ++a,
            ++o)
            c[o] = n(u, t[a]);
        return c
      }
      ;
    var r = n(700);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        function e(e) {
          var i, a, u = e.length, s = new Array(u);
          for (i = 0; i < u; ++i)
            s[i] = t(e[i], i, e);
          var l = n(s)
            , c = l[0]
            , f = l[1]
            , d = r(s, c, f);
          Array.isArray(d) || (d = (0,
            v.tickStep)(c, f, d),
            d = (0,
              p.default)(Math.ceil(c / d) * d, Math.floor(f / d) * d, d));
          for (var h = d.length; d[0] <= c;)
            d.shift(),
              --h;
          for (; d[h - 1] > f;)
            d.pop(),
              --h;
          var y, m = new Array(h + 1);
          for (i = 0; i <= h; ++i)
            y = m[i] = [],
              y.x0 = i > 0 ? d[i - 1] : c,
              y.x1 = i < h ? d[i] : f;
          for (i = 0; i < u; ++i)
            a = s[i],
              c <= a && a <= f && m[(0,
                o.default)(d, a, 0, h)].push(e[i]);
          return m
        }
        var t = d.default
          , n = c.default
          , r = m.default;
        return e.value = function (n) {
          return arguments.length ? (t = "function" == typeof n ? n : (0,
            s.default)(n),
            e) : t
        }
          ,
          e.domain = function (t) {
            return arguments.length ? (n = "function" == typeof t ? t : (0,
              s.default)([t[0], t[1]]),
              e) : n
          }
          ,
          e.thresholds = function (t) {
            return arguments.length ? (r = "function" == typeof t ? t : Array.isArray(t) ? (0,
              s.default)(i.slice.call(t)) : (0,
                s.default)(t),
              e) : r
          }
          ,
          e
      }
      ;
    var i = n(704)
      , a = n(698)
      , o = r(a)
      , u = n(1471)
      , s = r(u)
      , l = n(703)
      , c = r(l)
      , f = n(1472)
      , d = r(f)
      , h = n(705)
      , p = r(h)
      , v = n(706)
      , y = n(707)
      , m = r(y);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return function () {
          return e
        }
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return e
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n) {
        return e = i.map.call(e, s.default).sort(o.default),
          Math.ceil((n - t) / (2 * ((0,
            c.default)(e, .75) - (0,
              c.default)(e, .25)) * Math.pow(e.length, -1 / 3)))
      }
      ;
    var i = n(704)
      , a = n(202)
      , o = r(a)
      , u = n(221)
      , s = r(u)
      , l = n(396)
      , c = r(l);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n) {
        return Math.ceil((n - t) / (3.5 * (0,
          i.default)(e) * Math.pow(e.length, -1 / 3)))
      }
      ;
    var r = n(701)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n, r, i = e.length, a = -1;
        if (null == t) {
          for (; ++a < i;)
            if (null != (n = e[a]) && n >= n)
              for (r = n; ++a < i;)
                null != (n = e[a]) && n > r && (r = n)
        } else
          for (; ++a < i;)
            if (null != (n = t(e[a], a, e)) && n >= n)
              for (r = n; ++a < i;)
                null != (n = t(e[a], a, e)) && n > r && (r = n);
        return r
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n, r = e.length, a = r, o = -1, u = 0;
        if (null == t)
          for (; ++o < r;)
            isNaN(n = (0,
              i.default)(e[o])) ? --a : u += n;
        else
          for (; ++o < r;)
            isNaN(n = (0,
              i.default)(t(e[o], o, e))) ? --a : u += n;
        if (a)
          return u / a
      }
      ;
    var r = n(221)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n, r = e.length, i = -1, o = [];
        if (null == t)
          for (; ++i < r;)
            isNaN(n = (0,
              u.default)(e[i])) || o.push(n);
        else
          for (; ++i < r;)
            isNaN(n = (0,
              u.default)(t(e[i], i, e))) || o.push(n);
        return (0,
          l.default)(o.sort(a.default), .5)
      }
      ;
    var i = n(202)
      , a = r(i)
      , o = n(221)
      , u = r(o)
      , s = n(396)
      , l = r(s);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        for (var t, n, r, i = e.length, a = -1, o = 0; ++a < i;)
          o += e[a].length;
        for (n = new Array(o); --i >= 0;)
          for (r = e[i],
            t = r.length; --t >= 0;)
            n[--o] = r[t];
        return n
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        for (var n = t.length, r = new Array(n); n--;)
          r[n] = e[t[n]];
        return r
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        if (n = e.length) {
          var n, r, a = 0, o = 0, u = e[o];
          for (null == t && (t = i.default); ++a < n;)
            (t(r = e[a], u) < 0 || 0 !== t(u, u)) && (u = r,
              o = a);
          return 0 === t(u, u) ? o : void 0
        }
      }
      ;
    var r = n(202)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n) {
        for (var r, i, a = (null == n ? e.length : n) - (t = null == t ? 0 : +t); a;)
          i = Math.random() * a-- | 0,
            r = e[a + t],
            e[a + t] = e[i + t],
            e[i + t] = r;
        return e
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n, r = e.length, i = -1, a = 0;
        if (null == t)
          for (; ++i < r;)
            (n = +e[i]) && (a += n);
        else
          for (; ++i < r;)
            (n = +t(e[i], i, e)) && (a += n);
        return a
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        return (0,
          i.default)(arguments)
      }
      ;
    var r = n(709)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1485);
    Object.defineProperty(t, "axisTop", {
      enumerable: !0,
      get: function () {
        return r.axisTop
      }
    }),
      Object.defineProperty(t, "axisRight", {
        enumerable: !0,
        get: function () {
          return r.axisRight
        }
      }),
      Object.defineProperty(t, "axisBottom", {
        enumerable: !0,
        get: function () {
          return r.axisBottom
        }
      }),
      Object.defineProperty(t, "axisLeft", {
        enumerable: !0,
        get: function () {
          return r.axisLeft
        }
      })
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return "translate(" + (e + .5) + ",0)"
    }
    function i(e) {
      return "translate(0," + (e + .5) + ")"
    }
    function a(e) {
      return function (t) {
        return +e(t)
      }
    }
    function o(e) {
      var t = Math.max(0, e.bandwidth() - 1) / 2;
      return e.round() && (t = Math.round(t)),
        function (n) {
          return +e(n) + t
        }
    }
    function u() {
      return !this.__axis
    }
    function s(e, t) {
      function n(n) {
        var r = null == l ? t.ticks ? t.ticks.apply(t, s) : t.domain() : l
          , i = null == c ? t.tickFormat ? t.tickFormat.apply(t, s) : v.default : c
          , h = Math.max(f, 0) + p
          , M = t.range()
          , O = +M[0] + .5
          , E = +M[M.length - 1] + .5
          , j = (t.bandwidth ? o : a)(t.copy())
          , S = n.selection ? n.selection() : n
          , k = S.selectAll(".domain").data([null])
          , C = S.selectAll(".tick").data(r, t).order()
          , T = C.exit()
          , N = C.enter().append("g").attr("class", "tick")
          , D = C.select("line")
          , A = C.select("text");
        k = k.merge(k.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")),
          C = C.merge(N),
          D = D.merge(N.append("line").attr("stroke", "#000").attr(w + "2", x * f)),
          A = A.merge(N.append("text").attr("fill", "#000").attr(w, x * h).attr("dy", e === y ? "0em" : e === g ? "0.71em" : "0.32em")),
          n !== S && (k = k.transition(n),
            C = C.transition(n),
            D = D.transition(n),
            A = A.transition(n),
            T = T.transition(n).attr("opacity", _).attr("transform", function (e) {
              return isFinite(e = j(e)) ? P(e) : this.getAttribute("transform")
            }),
            N.attr("opacity", _).attr("transform", function (e) {
              var t = this.parentNode.__axis;
              return P(t && isFinite(t = t(e)) ? t : j(e))
            })),
          T.remove(),
          k.attr("d", e === b || e == m ? "M" + x * d + "," + O + "H0.5V" + E + "H" + x * d : "M" + O + "," + x * d + "V0.5H" + E + "V" + x * d),
          C.attr("opacity", 1).attr("transform", function (e) {
            return P(j(e))
          }),
          D.attr(w + "2", x * f),
          A.attr(w, x * h).text(i),
          S.filter(u).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === m ? "start" : e === b ? "end" : "middle"),
          S.each(function () {
            this.__axis = j
          })
      }
      var s = []
        , l = null
        , c = null
        , f = 6
        , d = 6
        , p = 3
        , x = e === y || e === b ? -1 : 1
        , w = e === b || e === m ? "x" : "y"
        , P = e === y || e === g ? r : i;
      return n.scale = function (e) {
        return arguments.length ? (t = e,
          n) : t
      }
        ,
        n.ticks = function () {
          return s = h.slice.call(arguments),
            n
        }
        ,
        n.tickArguments = function (e) {
          return arguments.length ? (s = null == e ? [] : h.slice.call(e),
            n) : s.slice()
        }
        ,
        n.tickValues = function (e) {
          return arguments.length ? (l = null == e ? null : h.slice.call(e),
            n) : l && l.slice()
        }
        ,
        n.tickFormat = function (e) {
          return arguments.length ? (c = e,
            n) : c
        }
        ,
        n.tickSize = function (e) {
          return arguments.length ? (f = d = +e,
            n) : f
        }
        ,
        n.tickSizeInner = function (e) {
          return arguments.length ? (f = +e,
            n) : f
        }
        ,
        n.tickSizeOuter = function (e) {
          return arguments.length ? (d = +e,
            n) : d
        }
        ,
        n.tickPadding = function (e) {
          return arguments.length ? (p = +e,
            n) : p
        }
        ,
        n
    }
    function l(e) {
      return s(y, e)
    }
    function c(e) {
      return s(m, e)
    }
    function f(e) {
      return s(g, e)
    }
    function d(e) {
      return s(b, e)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.axisTop = l,
      t.axisRight = c,
      t.axisBottom = f,
      t.axisLeft = d;
    var h = n(1486)
      , p = n(1487)
      , v = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(p)
      , y = 1
      , m = 2
      , g = 3
      , b = 4
      , _ = 1e-6
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.slice = Array.prototype.slice
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return e
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(1489);
    Object.defineProperty(t, "brush", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    }),
      Object.defineProperty(t, "brushX", {
        enumerable: !0,
        get: function () {
          return i.brushX
        }
      }),
      Object.defineProperty(t, "brushY", {
        enumerable: !0,
        get: function () {
          return i.brushY
        }
      }),
      Object.defineProperty(t, "brushSelection", {
        enumerable: !0,
        get: function () {
          return i.brushSelection
        }
      })
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e) {
      return {
        type: e
      }
    }
    function a() {
      return !y.event.button
    }
    function o() {
      var e = this.ownerSVGElement || this;
      return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]
    }
    function u(e) {
      for (; !e.__brush;)
        if (!(e = e.parentNode))
          return;
      return e.__brush
    }
    function s(e) {
      return e[0][0] === e[1][0] || e[0][1] === e[1][1]
    }
    function l(e) {
      var t = e.__brush;
      return t ? t.dim.output(t.selection) : null
    }
    function c() {
      return d(S)
    }
    function f() {
      return d(k)
    }
    function d(e) {
      function t(t) {
        var r = t.property("__brush", f).selectAll(".overlay").data([i("overlay")]);
        r.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", T.overlay).merge(r).each(function () {
          var e = u(this).extent;
          (0,
            y.select)(this).attr("x", e[0][0]).attr("y", e[0][1]).attr("width", e[1][0] - e[0][0]).attr("height", e[1][1] - e[0][1])
        }),
          t.selectAll(".selection").data([i("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", T.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
        var a = t.selectAll(".handle").data(e.handles, function (e) {
          return e.type
        });
        a.exit().remove(),
          a.enter().append("rect").attr("class", function (e) {
            return "handle handle--" + e.type
          }).attr("cursor", function (e) {
            return T[e.type]
          }),
          t.each(n).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", c)
      }
      function n() {
        var e = (0,
          y.select)(this)
          , t = u(this).selection;
        t ? (e.selectAll(".selection").style("display", null).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1]),
          e.selectAll(".handle").style("display", null).attr("x", function (e) {
            return "e" === e.type[e.type.length - 1] ? t[1][0] - I / 2 : t[0][0] - I / 2
          }).attr("y", function (e) {
            return "s" === e.type[0] ? t[1][1] - I / 2 : t[0][1] - I / 2
          }).attr("width", function (e) {
            return "n" === e.type || "s" === e.type ? t[1][0] - t[0][0] + I : I
          }).attr("height", function (e) {
            return "e" === e.type || "w" === e.type ? t[1][1] - t[0][1] + I : I
          })) : e.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
      }
      function r(e, t) {
        return e.__brush.emitter || new l(e, t)
      }
      function l(e, t) {
        this.that = e,
          this.args = t,
          this.state = e.__brush,
          this.active = 0
      }
      function c() {
        function t() {
          var e = (0,
            y.mouse)(F);
          !K || V || z || (Math.abs(e[0] - te[0]) > Math.abs(e[1] - te[1]) ? z = !0 : V = !0),
            te = e,
            B = !0,
            (0,
              P.default)(),
            i()
        }
        function i() {
          var e;
          switch (I = te[0] - ee[0],
          R = te[1] - ee[1],
          Y) {
            case O:
            case M:
              X && (I = Math.max(G - c, Math.min(Q - g, I)),
                f = c + I,
                b = g + I),
                H && (R = Math.max(Z - h, Math.min(J - x, R)),
                  v = h + R,
                  C = x + R);
              break;
            case E:
              X < 0 ? (I = Math.max(G - c, Math.min(Q - c, I)),
                f = c + I,
                b = g) : X > 0 && (I = Math.max(G - g, Math.min(Q - g, I)),
                  f = c,
                  b = g + I),
                H < 0 ? (R = Math.max(Z - h, Math.min(J - h, R)),
                  v = h + R,
                  C = x) : H > 0 && (R = Math.max(Z - x, Math.min(J - x, R)),
                    v = h,
                    C = x + R);
              break;
            case j:
              X && (f = Math.max(G, Math.min(Q, c - I * X)),
                b = Math.max(G, Math.min(Q, g + I * X))),
                H && (v = Math.max(Z, Math.min(J, h - R * H)),
                  C = Math.max(Z, Math.min(J, x + R * H)))
          }
          b < f && (X *= -1,
            e = c,
            c = g,
            g = e,
            e = f,
            f = b,
            b = e,
            q in N && ie.attr("cursor", T[q = N[q]])),
            C < v && (H *= -1,
              e = h,
              h = x,
              x = e,
              e = v,
              v = C,
              C = e,
              q in D && ie.attr("cursor", T[q = D[q]])),
            U.selection && ($ = U.selection),
            V && (f = $[0][0],
              b = $[1][0]),
            z && (v = $[0][1],
              C = $[1][1]),
            $[0][0] === f && $[0][1] === v && $[1][0] === b && $[1][1] === C || (U.selection = [[f, v], [b, C]],
              n.call(F),
              ne.brush())
        }
        function a() {
          if ((0,
            w.nopropagation)(),
            y.event.touches) {
            if (y.event.touches.length)
              return;
            d && clearTimeout(d),
              d = setTimeout(function () {
                d = null
              }, 500),
              re.on("touchmove.brush touchend.brush touchcancel.brush", null)
          } else
            (0,
              p.dragEnable)(y.event.view, B),
              ae.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
          re.attr("pointer-events", "all"),
            ie.attr("cursor", T.overlay),
            U.selection && ($ = U.selection),
            s($) && (U.selection = null,
              n.call(F)),
            ne.end()
        }
        function o() {
          switch (y.event.keyCode) {
            case 16:
              K = X && H;
              break;
            case 18:
              Y === E && (X && (g = b - I * X,
                c = f + I * X),
                H && (x = C - R * H,
                  h = v + R * H),
                Y = j,
                i());
              break;
            case 32:
              Y !== E && Y !== j || (X < 0 ? g = b - I : X > 0 && (c = f - I),
                H < 0 ? x = C - R : H > 0 && (h = v - R),
                Y = O,
                ie.attr("cursor", T.selection),
                i());
              break;
            default:
              return
          }
          (0,
            P.default)()
        }
        function l() {
          switch (y.event.keyCode) {
            case 16:
              K && (V = z = K = !1,
                i());
              break;
            case 18:
              Y === j && (X < 0 ? g = b : X > 0 && (c = f),
                H < 0 ? x = C : H > 0 && (h = v),
                Y = E,
                i());
              break;
            case 32:
              Y === O && (y.event.altKey ? (X && (g = b - I * X,
                c = f + I * X),
                H && (x = C - R * H,
                  h = v + R * H),
                Y = j) : (X < 0 ? g = b : X > 0 && (c = f),
                  H < 0 ? x = C : H > 0 && (h = v),
                  Y = E),
                ie.attr("cursor", T[q]),
                i());
              break;
            default:
              return
          }
          (0,
            P.default)()
        }
        if (y.event.touches) {
          if (y.event.changedTouches.length < y.event.touches.length)
            return (0,
              P.default)()
        } else if (d)
          return;
        if (_.apply(this, arguments)) {
          var c, f, h, v, g, b, x, C, I, R, B, V, z, F = this, q = y.event.target.__data__.type, Y = "selection" === (y.event.metaKey ? q = "overlay" : q) ? M : y.event.altKey ? j : E, X = e === k ? null : A[q], H = e === S ? null : L[q], U = u(F), W = U.extent, $ = U.selection, G = W[0][0], Z = W[0][1], Q = W[1][0], J = W[1][1], K = X && H && y.event.shiftKey, ee = (0,
            y.mouse)(F), te = ee, ne = r(F, arguments).beforestart();
          "overlay" === q ? U.selection = $ = [[c = e === k ? G : ee[0], h = e === S ? Z : ee[1]], [g = e === k ? Q : c, x = e === S ? J : h]] : (c = $[0][0],
            h = $[0][1],
            g = $[1][0],
            x = $[1][1]),
            f = c,
            v = h,
            b = g,
            C = x;
          var re = (0,
            y.select)(F).attr("pointer-events", "none")
            , ie = re.selectAll(".overlay").attr("cursor", T[q]);
          if (y.event.touches)
            re.on("touchmove.brush", t, !0).on("touchend.brush touchcancel.brush", a, !0);
          else {
            var ae = (0,
              y.select)(y.event.view).on("keydown.brush", o, !0).on("keyup.brush", l, !0).on("mousemove.brush", t, !0).on("mouseup.brush", a, !0);
            (0,
              p.dragDisable)(y.event.view)
          }
          (0,
            w.nopropagation)(),
            (0,
              m.interrupt)(F),
            n.call(F),
            ne.start()
        }
      }
      function f() {
        var t = this.__brush || {
          selection: null
        };
        return t.extent = g.apply(this, arguments),
          t.dim = e,
          t
      }
      var d, g = o, _ = a, C = (0,
        h.dispatch)(t, "start", "brush", "end"), I = 6;
      return t.move = function (t, i) {
        t.selection ? t.on("start.brush", function () {
          r(this, arguments).beforestart().start()
        }).on("interrupt.brush end.brush", function () {
          r(this, arguments).end()
        }).tween("brush", function () {
          function t(e) {
            o.selection = 1 === e && s(c) ? null : f(e),
              n.call(a),
              u.brush()
          }
          var a = this
            , o = a.__brush
            , u = r(a, arguments)
            , l = o.selection
            , c = e.input("function" == typeof i ? i.apply(this, arguments) : i, o.extent)
            , f = (0,
              v.interpolate)(l, c);
          return l && c ? t : t(1)
        }) : t.each(function () {
          var t = this
            , a = arguments
            , o = t.__brush
            , u = e.input("function" == typeof i ? i.apply(t, a) : i, o.extent)
            , l = r(t, a).beforestart();
          (0,
            m.interrupt)(t),
            o.selection = null == u || s(u) ? null : u,
            n.call(t),
            l.start().brush().end()
        })
      }
        ,
        l.prototype = {
          beforestart: function () {
            return 1 == ++this.active && (this.state.emitter = this,
              this.starting = !0),
              this
          },
          start: function () {
            return this.starting && (this.starting = !1,
              this.emit("start")),
              this
          },
          brush: function () {
            return this.emit("brush"),
              this
          },
          end: function () {
            return 0 == --this.active && (delete this.state.emitter,
              this.emit("end")),
              this
          },
          emit: function (n) {
            (0,
              y.customEvent)(new x.default(t, n, e.output(this.state.selection)), C.apply, C, [n, this.that, this.args])
          }
        },
        t.extent = function (e) {
          return arguments.length ? (g = "function" == typeof e ? e : (0,
            b.default)([[+e[0][0], +e[0][1]], [+e[1][0], +e[1][1]]]),
            t) : g
        }
        ,
        t.filter = function (e) {
          return arguments.length ? (_ = "function" == typeof e ? e : (0,
            b.default)(!!e),
            t) : _
        }
        ,
        t.handleSize = function (e) {
          return arguments.length ? (I = +e,
            t) : I
        }
        ,
        t.on = function () {
          var e = C.on.apply(C, arguments);
          return e === C ? t : e
        }
        ,
        t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.brushSelection = l,
      t.brushX = c,
      t.brushY = f,
      t.default = function () {
        return d(C)
      }
      ;
    var h = n(168)
      , p = n(397)
      , v = n(112)
      , y = n(62)
      , m = n(408)
      , g = n(1572)
      , b = r(g)
      , _ = n(1573)
      , x = r(_)
      , w = n(1574)
      , P = r(w)
      , M = {
        name: "drag"
      }
      , O = {
        name: "space"
      }
      , E = {
        name: "handle"
      }
      , j = {
        name: "center"
      }
      , S = {
        name: "x",
        handles: ["e", "w"].map(i),
        input: function (e, t) {
          return e && [[e[0], t[0][1]], [e[1], t[1][1]]]
        },
        output: function (e) {
          return e && [e[0][0], e[1][0]]
        }
      }
      , k = {
        name: "y",
        handles: ["n", "s"].map(i),
        input: function (e, t) {
          return e && [[t[0][0], e[0]], [t[1][0], e[1]]]
        },
        output: function (e) {
          return e && [e[0][1], e[1][1]]
        }
      }
      , C = {
        name: "xy",
        handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(i),
        input: function (e) {
          return e
        },
        output: function (e) {
          return e
        }
      }
      , T = {
        overlay: "crosshair",
        selection: "move",
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
      }
      , N = {
        e: "w",
        w: "e",
        nw: "ne",
        ne: "nw",
        se: "sw",
        sw: "se"
      }
      , D = {
        n: "s",
        s: "n",
        nw: "sw",
        ne: "se",
        se: "ne",
        sw: "nw"
      }
      , A = {
        overlay: 1,
        selection: 1,
        n: null,
        e: 1,
        s: null,
        w: -1,
        nw: -1,
        ne: 1,
        se: 1,
        sw: -1
      }
      , L = {
        overlay: 1,
        selection: 1,
        n: -1,
        e: null,
        s: 1,
        w: null,
        nw: -1,
        ne: -1,
        se: 1,
        sw: 1
      }
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      for (var e, t = 0, n = arguments.length, r = {}; t < n; ++t) {
        if (!(e = arguments[t] + "") || e in r)
          throw new Error("illegal type: " + e);
        r[e] = []
      }
      return new i(r)
    }
    function i(e) {
      this._ = e
    }
    function a(e, t) {
      return e.trim().split(/^|\s+/).map(function (e) {
        var n = ""
          , r = e.indexOf(".");
        if (r >= 0 && (n = e.slice(r + 1),
          e = e.slice(0, r)),
          e && !t.hasOwnProperty(e))
          throw new Error("unknown type: " + e);
        return {
          type: e,
          name: n
        }
      })
    }
    function o(e, t) {
      for (var n, r = 0, i = e.length; r < i; ++r)
        if ((n = e[r]).name === t)
          return n.value
    }
    function u(e, t, n) {
      for (var r = 0, i = e.length; r < i; ++r)
        if (e[r].name === t) {
          e[r] = s,
            e = e.slice(0, r).concat(e.slice(r + 1));
          break
        }
      return null != n && e.push({
        name: t,
        value: n
      }),
        e
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = {
      value: function () { }
    };
    i.prototype = r.prototype = {
      constructor: i,
      on: function (e, t) {
        var n, r = this._, i = a(e + "", r), s = -1, l = i.length;
        {
          if (!(arguments.length < 2)) {
            if (null != t && "function" != typeof t)
              throw new Error("invalid callback: " + t);
            for (; ++s < l;)
              if (n = (e = i[s]).type)
                r[n] = u(r[n], e.name, t);
              else if (null == t)
                for (n in r)
                  r[n] = u(r[n], e.name, null);
            return this
          }
          for (; ++s < l;)
            if ((n = (e = i[s]).type) && (n = o(r[n], e.name)))
              return n
        }
      },
      copy: function () {
        var e = {}
          , t = this._;
        for (var n in t)
          e[n] = t[n].slice();
        return new i(e)
      },
      call: function (e, t) {
        if ((n = arguments.length - 2) > 0)
          for (var n, r, i = new Array(n), a = 0; a < n; ++a)
            i[a] = arguments[a + 2];
        if (!this._.hasOwnProperty(e))
          throw new Error("unknown type: " + e);
        for (r = this._[e],
          a = 0,
          n = r.length; a < n; ++a)
          r[a].value.apply(t, i)
      },
      apply: function (e, t, n) {
        if (!this._.hasOwnProperty(e))
          throw new Error("unknown type: " + e);
        for (var r = this._[e], i = 0, a = r.length; i < a; ++i)
          r[i].value.apply(t, n)
      }
    },
      t.default = r,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i() {
      return !l.event.button
    }
    function a() {
      return this.parentNode
    }
    function o(e) {
      return null == e ? {
        x: l.event.x,
        y: l.event.y
      } : e
    }
    function u() {
      return "ontouchstart" in this
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        function e(e) {
          e.on("mousedown.drag", t).filter(j).on("touchstart.drag", p).on("touchmove.drag", y).on("touchend.drag touchcancel.drag", g).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
        }
        function t() {
          if (!P && M.apply(this, arguments)) {
            var e = b("mouse", O.apply(this, arguments), l.mouse, this, arguments);
            e && ((0,
              l.select)(l.event.view).on("mousemove.drag", n, !0).on("mouseup.drag", r, !0),
              (0,
                f.default)(l.event.view),
              (0,
                d.nopropagation)(),
              w = !1,
              _ = l.event.clientX,
              x = l.event.clientY,
              e("start"))
          }
        }
        function n() {
          if ((0,
            h.default)(),
            !w) {
            var e = l.event.clientX - _
              , t = l.event.clientY - x;
            w = e * e + t * t > T
          }
          S.mouse("drag")
        }
        function r() {
          (0,
            l.select)(l.event.view).on("mousemove.drag mouseup.drag", null),
            (0,
              c.yesdrag)(l.event.view, w),
            (0,
              h.default)(),
            S.mouse("end")
        }
        function p() {
          if (M.apply(this, arguments)) {
            var e, t, n = l.event.changedTouches, r = O.apply(this, arguments), i = n.length;
            for (e = 0; e < i; ++e)
              (t = b(n[e].identifier, r, l.touch, this, arguments)) && ((0,
                d.nopropagation)(),
                t("start"))
          }
        }
        function y() {
          var e, t, n = l.event.changedTouches, r = n.length;
          for (e = 0; e < r; ++e)
            (t = S[n[e].identifier]) && ((0,
              h.default)(),
              t("drag"))
        }
        function g() {
          var e, t, n = l.event.changedTouches, r = n.length;
          for (P && clearTimeout(P),
            P = setTimeout(function () {
              P = null
            }, 500),
            e = 0; e < r; ++e)
            (t = S[n[e].identifier]) && ((0,
              d.nopropagation)(),
              t("end"))
        }
        function b(t, n, r, i, a) {
          var o, u, s, c = r(n, t), f = k.copy();
          if ((0,
            l.customEvent)(new m.default(e, "beforestart", o, t, C, c[0], c[1], 0, 0, f), function () {
              return null != (l.event.subject = o = E.apply(i, a)) && (u = o.x - c[0] || 0,
                s = o.y - c[1] || 0,
                !0)
            }))
            return function d(h) {
              var p, v = c;
              switch (h) {
                case "start":
                  S[t] = d,
                    p = C++;
                  break;
                case "end":
                  delete S[t],
                    --C;
                case "drag":
                  c = r(n, t),
                    p = C
              }
              (0,
                l.customEvent)(new m.default(e, h, o, t, p, c[0] + u, c[1] + s, c[0] - v[0], c[1] - v[1], f), f.apply, f, [h, i, a])
            }
        }
        var _, x, w, P, M = i, O = a, E = o, j = u, S = {}, k = (0,
          s.dispatch)("start", "drag", "end"), C = 0, T = 0;
        return e.filter = function (t) {
          return arguments.length ? (M = "function" == typeof t ? t : (0,
            v.default)(!!t),
            e) : M
        }
          ,
          e.container = function (t) {
            return arguments.length ? (O = "function" == typeof t ? t : (0,
              v.default)(t),
              e) : O
          }
          ,
          e.subject = function (t) {
            return arguments.length ? (E = "function" == typeof t ? t : (0,
              v.default)(t),
              e) : E
          }
          ,
          e.touchable = function (t) {
            return arguments.length ? (j = "function" == typeof t ? t : (0,
              v.default)(!!t),
              e) : j
          }
          ,
          e.on = function () {
            var t = k.on.apply(k, arguments);
            return t === k ? e : t
          }
          ,
          e.clickDistance = function (t) {
            return arguments.length ? (T = (t = +t) * t,
              e) : Math.sqrt(T)
          }
          ,
          e
      }
      ;
    var s = n(168)
      , l = n(62)
      , c = n(716)
      , f = r(c)
      , d = n(717)
      , h = r(d)
      , p = n(1526)
      , v = r(p)
      , y = n(1527)
      , m = r(y);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return (0,
          u.default)((0,
            a.default)(e).call(document.documentElement))
      }
      ;
    var i = n(310)
      , a = r(i)
      , o = n(710)
      , u = r(o);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        "function" != typeof e && (e = (0,
          a.default)(e));
        for (var t = this._groups, n = t.length, i = new Array(n), o = 0; o < n; ++o)
          for (var u, s, l = t[o], c = l.length, f = i[o] = new Array(c), d = 0; d < c; ++d)
            (u = l[d]) && (s = e.call(u, u.__data__, d, l)) && ("__data__" in u && (s.__data__ = u.__data__),
              f[d] = s);
        return new r.Selection(i, this._parents)
      }
      ;
    var r = n(111)
      , i = n(400)
      , a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        "function" != typeof e && (e = (0,
          a.default)(e));
        for (var t = this._groups, n = t.length, i = [], o = [], u = 0; u < n; ++u)
          for (var s, l = t[u], c = l.length, f = 0; f < c; ++f)
            (s = l[f]) && (i.push(e.call(s, s.__data__, f, l)),
              o.push(s));
        return new r.Selection(i, o)
      }
      ;
    var r = n(111)
      , i = n(711)
      , a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        "function" != typeof e && (e = (0,
          a.default)(e));
        for (var t = this._groups, n = t.length, i = new Array(n), o = 0; o < n; ++o)
          for (var u, s = t[o], l = s.length, c = i[o] = [], f = 0; f < l; ++f)
            (u = s[f]) && e.call(u, u.__data__, f, s) && c.push(u);
        return new r.Selection(i, this._parents)
      }
      ;
    var r = n(111)
      , i = n(712)
      , a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n, r, i, a) {
      for (var u, s = 0, l = t.length, c = a.length; s < c; ++s)
        (u = t[s]) ? (u.__data__ = a[s],
          r[s] = u) : n[s] = new o.EnterNode(e, a[s]);
      for (; s < l; ++s)
        (u = t[s]) && (i[s] = u)
    }
    function i(e, t, n, r, i, a, u) {
      var s, c, f, d = {}, h = t.length, p = a.length, v = new Array(h);
      for (s = 0; s < h; ++s)
        (c = t[s]) && (v[s] = f = l + u.call(c, c.__data__, s, t),
          f in d ? i[s] = c : d[f] = c);
      for (s = 0; s < p; ++s)
        f = l + u.call(e, a[s], s, a),
          (c = d[f]) ? (r[s] = c,
            c.__data__ = a[s],
            d[f] = null) : n[s] = new o.EnterNode(e, a[s]);
      for (s = 0; s < h; ++s)
        (c = t[s]) && d[v[s]] === c && (i[s] = c)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        if (!e)
          return m = new Array(this.size()),
            h = -1,
            this.each(function (e) {
              m[++h] = e
            }),
            m;
        var n = t ? i : r
          , o = this._parents
          , u = this._groups;
        "function" != typeof e && (e = (0,
          s.default)(e));
        for (var l = u.length, c = new Array(l), f = new Array(l), d = new Array(l), h = 0; h < l; ++h) {
          var p = o[h]
            , v = u[h]
            , y = v.length
            , m = e.call(p, p && p.__data__, h, o)
            , g = m.length
            , b = f[h] = new Array(g)
            , _ = c[h] = new Array(g);
          n(p, v, b, _, d[h] = new Array(y), m, t);
          for (var x, w, P = 0, M = 0; P < g; ++P)
            if (x = b[P]) {
              for (P >= M && (M = P + 1); !(w = _[M]) && ++M < g;)
                ;
              x._next = w || null
            }
        }
        return c = new a.Selection(c, o),
          c._enter = f,
          c._exit = d,
          c
      }
      ;
    var a = n(111)
      , o = n(713)
      , u = n(1497)
      , s = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(u)
      , l = "$";
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return function () {
          return e
        }
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        return new a.Selection(this._exit || this._groups.map(i.default), this._parents)
      }
      ;
    var r = n(714)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r)
      , a = n(111);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        for (var t = this._groups, n = e._groups, i = t.length, a = n.length, o = Math.min(i, a), u = new Array(i), s = 0; s < o; ++s)
          for (var l, c = t[s], f = n[s], d = c.length, h = u[s] = new Array(d), p = 0; p < d; ++p)
            (l = c[p] || f[p]) && (h[p] = l);
        for (; s < i; ++s)
          u[s] = t[s];
        return new r.Selection(u, this._parents)
      }
      ;
    var r = n(111);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        for (var e = this._groups, t = -1, n = e.length; ++t < n;)
          for (var r, i = e[t], a = i.length - 1, o = i[a]; --a >= 0;)
            (r = i[a]) && (o && o !== r.nextSibling && o.parentNode.insertBefore(r, o),
              o = r);
        return this
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        function t(t, n) {
          return t && n ? e(t.__data__, n.__data__) : !t - !n
        }
        e || (e = r);
        for (var n = this._groups, a = n.length, o = new Array(a), u = 0; u < a; ++u) {
          for (var s, l = n[u], c = l.length, f = o[u] = new Array(c), d = 0; d < c; ++d)
            (s = l[d]) && (f[d] = s);
          f.sort(t)
        }
        return new i.Selection(o, this._parents).order()
      }
      ;
    var i = n(111);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        var e = arguments[0];
        return arguments[0] = this,
          e.apply(null, arguments),
          this
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        var e = new Array(this.size())
          , t = -1;
        return this.each(function () {
          e[++t] = this
        }),
          e
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
          for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
            var o = r[i];
            if (o)
              return o
          }
        return null
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        var e = 0;
        return this.each(function () {
          ++e
        }),
          e
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        return !this.node()
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
          for (var i, a = t[n], o = 0, u = a.length; o < u; ++o)
            (i = a[o]) && e.call(i, i.__data__, o, a);
        return this
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return function () {
        this.removeAttribute(e)
      }
    }
    function i(e) {
      return function () {
        this.removeAttributeNS(e.space, e.local)
      }
    }
    function a(e, t) {
      return function () {
        this.setAttribute(e, t)
      }
    }
    function o(e, t) {
      return function () {
        this.setAttributeNS(e.space, e.local, t)
      }
    }
    function u(e, t) {
      return function () {
        var n = t.apply(this, arguments);
        null == n ? this.removeAttribute(e) : this.setAttribute(e, n)
      }
    }
    function s(e, t) {
      return function () {
        var n = t.apply(this, arguments);
        null == n ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n)
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n = (0,
          c.default)(e);
        if (arguments.length < 2) {
          var l = this.node();
          return n.local ? l.getAttributeNS(n.space, n.local) : l.getAttribute(n)
        }
        return this.each((null == t ? n.local ? i : r : "function" == typeof t ? n.local ? s : u : n.local ? o : a)(n, t))
      }
      ;
    var l = n(398)
      , c = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(l);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return function () {
        delete this[e]
      }
    }
    function i(e, t) {
      return function () {
        this[e] = t
      }
    }
    function a(e, t) {
      return function () {
        var n = t.apply(this, arguments);
        null == n ? delete this[e] : this[e] = n
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        return arguments.length > 1 ? this.each((null == t ? r : "function" == typeof t ? a : i)(e, t)) : this.node()[e]
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e.trim().split(/^|\s+/)
    }
    function i(e) {
      return e.classList || new a(e)
    }
    function a(e) {
      this._node = e,
        this._names = r(e.getAttribute("class") || "")
    }
    function o(e, t) {
      for (var n = i(e), r = -1, a = t.length; ++r < a;)
        n.add(t[r])
    }
    function u(e, t) {
      for (var n = i(e), r = -1, a = t.length; ++r < a;)
        n.remove(t[r])
    }
    function s(e) {
      return function () {
        o(this, e)
      }
    }
    function l(e) {
      return function () {
        u(this, e)
      }
    }
    function c(e, t) {
      return function () {
        (t.apply(this, arguments) ? o : u)(this, e)
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n = r(e + "");
        if (arguments.length < 2) {
          for (var a = i(this.node()), o = -1, u = n.length; ++o < u;)
            if (!a.contains(n[o]))
              return !1;
          return !0
        }
        return this.each(("function" == typeof t ? c : t ? s : l)(n, t))
      }
      ,
      a.prototype = {
        add: function (e) {
          this._names.indexOf(e) < 0 && (this._names.push(e),
            this._node.setAttribute("class", this._names.join(" ")))
        },
        remove: function (e) {
          var t = this._names.indexOf(e);
          t >= 0 && (this._names.splice(t, 1),
            this._node.setAttribute("class", this._names.join(" ")))
        },
        contains: function (e) {
          return this._names.indexOf(e) >= 0
        }
      },
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      this.textContent = ""
    }
    function i(e) {
      return function () {
        this.textContent = e
      }
    }
    function a(e) {
      return function () {
        var t = e.apply(this, arguments);
        this.textContent = null == t ? "" : t
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return arguments.length ? this.each(null == e ? r : ("function" == typeof e ? a : i)(e)) : this.node().textContent
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      this.innerHTML = ""
    }
    function i(e) {
      return function () {
        this.innerHTML = e
      }
    }
    function a(e) {
      return function () {
        var t = e.apply(this, arguments);
        this.innerHTML = null == t ? "" : t
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return arguments.length ? this.each(null == e ? r : ("function" == typeof e ? a : i)(e)) : this.node().innerHTML
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      this.nextSibling && this.parentNode.appendChild(this)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        return this.each(r)
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        return this.each(r)
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        var t = "function" == typeof e ? e : (0,
          i.default)(e);
        return this.select(function () {
          return this.appendChild(t.apply(this, arguments))
        })
      }
      ;
    var r = n(310)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i() {
      return null
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n = "function" == typeof e ? e : (0,
          o.default)(e)
          , r = null == t ? i : "function" == typeof t ? t : (0,
            s.default)(t);
        return this.select(function () {
          return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null)
        })
      }
      ;
    var a = n(310)
      , o = r(a)
      , u = n(400)
      , s = r(u);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      var e = this.parentNode;
      e && e.removeChild(this)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        return this.each(r)
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
    }
    function i() {
      return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return this.select(e ? i : r)
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return arguments.length ? this.property("__data__", e) : this.node().__data__
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      var r = (0,
        u.default)(e)
        , i = r.CustomEvent;
      "function" == typeof i ? i = new i(t, n) : (i = r.document.createEvent("Event"),
        n ? (i.initEvent(t, n.bubbles, n.cancelable),
          i.detail = n.detail) : i.initEvent(t, !1, !1)),
        e.dispatchEvent(i)
    }
    function i(e, t) {
      return function () {
        return r(this, e, t)
      }
    }
    function a(e, t) {
      return function () {
        return r(this, e, t.apply(this, arguments))
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        return this.each(("function" == typeof t ? a : i)(e, t))
      }
      ;
    var o = n(401)
      , u = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(o);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      return new i
    }
    function i() {
      this._ = "@" + (++a).toString(36)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = r;
    var a = 0;
    i.prototype = r.prototype = {
      constructor: i,
      get: function (e) {
        for (var t = this._; !(t in e);)
          if (!(e = e.parentNode))
            return;
        return e[t]
      },
      set: function (e, t) {
        return e[this._] = t
      },
      remove: function (e) {
        return this._ in e && delete e[this._]
      },
      toString: function () {
        return this._
      }
    },
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        var t = (0,
          a.default)();
        return t.changedTouches && (t = t.changedTouches[0]),
          (0,
            u.default)(e, t)
      }
      ;
    var i = n(403)
      , a = r(i)
      , o = n(311)
      , u = r(o);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return "string" == typeof e ? new r.Selection([document.querySelectorAll(e)], [document.documentElement]) : new r.Selection([null == e ? [] : e], r.root)
      }
      ;
    var r = n(111);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n) {
        arguments.length < 3 && (n = t,
          t = (0,
            a.default)().changedTouches);
        for (var r, i = 0, o = t ? t.length : 0; i < o; ++i)
          if ((r = t[i]).identifier === n)
            return (0,
              u.default)(e, r);
        return null
      }
      ;
    var i = n(403)
      , a = r(i)
      , o = n(311)
      , u = r(o);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        null == t && (t = (0,
          a.default)().touches);
        for (var n = 0, r = t ? t.length : 0, i = new Array(r); n < r; ++n)
          i[n] = (0,
            u.default)(e, t[n]);
        return i
      }
      ;
    var i = n(403)
      , a = r(i)
      , o = n(311)
      , u = r(o);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return function () {
          return e
        }
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n, r, i, a, o, u, s, l) {
      this.target = e,
        this.type = t,
        this.subject = n,
        this.identifier = r,
        this.active = i,
        this.x = a,
        this.y = o,
        this.dx = u,
        this.dy = s,
        this._ = l
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = r,
      r.prototype.on = function () {
        var e = this._.on.apply(this._, arguments);
        return e === this._ ? this : e
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      if (e instanceof a)
        return new a(e.l, e.a, e.b, e.opacity);
      if (e instanceof d) {
        var t = e.h * y.deg2rad;
        return new a(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity)
      }
      e instanceof v.Rgb || (e = (0,
        v.rgbConvert)(e));
      var n = l(e.r)
        , r = l(e.g)
        , i = l(e.b)
        , u = o((.4124564 * n + .3575761 * r + .1804375 * i) / m)
        , s = o((.2126729 * n + .7151522 * r + .072175 * i) / g);
      return new a(116 * s - 16, 500 * (u - s), 200 * (s - o((.0193339 * n + .119192 * r + .9503041 * i) / b)), e.opacity)
    }
    function i(e, t, n, i) {
      return 1 === arguments.length ? r(e) : new a(e, t, n, null == i ? 1 : i)
    }
    function a(e, t, n, r) {
      this.l = +e,
        this.a = +t,
        this.b = +n,
        this.opacity = +r
    }
    function o(e) {
      return e > P ? Math.pow(e, 1 / 3) : e / w + _
    }
    function u(e) {
      return e > x ? e * e * e : w * (e - _)
    }
    function s(e) {
      return 255 * (e <= .0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055)
    }
    function l(e) {
      return (e /= 255) <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
    }
    function c(e) {
      if (e instanceof d)
        return new d(e.h, e.c, e.l, e.opacity);
      e instanceof a || (e = r(e));
      var t = Math.atan2(e.b, e.a) * y.rad2deg;
      return new d(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity)
    }
    function f(e, t, n, r) {
      return 1 === arguments.length ? c(e) : new d(e, t, n, null == r ? 1 : r)
    }
    function d(e, t, n, r) {
      this.h = +e,
        this.c = +t,
        this.l = +n,
        this.opacity = +r
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = i,
      t.Lab = a,
      t.hcl = f,
      t.Hcl = d;
    var h = n(406)
      , p = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(h)
      , v = n(405)
      , y = n(718)
      , m = .95047
      , g = 1
      , b = 1.08883
      , _ = 4 / 29
      , x = 6 / 29
      , w = 3 * x * x
      , P = x * x * x;
    (0,
      p.default)(a, i, (0,
        h.extend)(v.Color, {
          brighter: function (e) {
            return new a(this.l + 18 * (null == e ? 1 : e), this.a, this.b, this.opacity)
          },
          darker: function (e) {
            return new a(this.l - 18 * (null == e ? 1 : e), this.a, this.b, this.opacity)
          },
          rgb: function () {
            var e = (this.l + 16) / 116
              , t = isNaN(this.a) ? e : e + this.a / 500
              , n = isNaN(this.b) ? e : e - this.b / 200;
            return e = g * u(e),
              t = m * u(t),
              n = b * u(n),
              new v.Rgb(s(3.2404542 * t - 1.5371385 * e - .4985314 * n), s(-.969266 * t + 1.8760108 * e + .041556 * n), s(.0556434 * t - .2040259 * e + 1.0572252 * n), this.opacity)
          }
        })),
      (0,
        p.default)(d, f, (0,
          h.extend)(v.Color, {
            brighter: function (e) {
              return new d(this.h, this.c, this.l + 18 * (null == e ? 1 : e), this.opacity)
            },
            darker: function (e) {
              return new d(this.h, this.c, this.l - 18 * (null == e ? 1 : e), this.opacity)
            },
            rgb: function () {
              return r(this).rgb()
            }
          }))
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      if (e instanceof a)
        return new a(e.h, e.s, e.l, e.opacity);
      e instanceof s.Rgb || (e = (0,
        s.rgbConvert)(e));
      var t = e.r / 255
        , n = e.g / 255
        , r = e.b / 255
        , i = (m * r + v * t - y * n) / (m + v - y)
        , o = r - i
        , u = (p * (n - i) - d * o) / h
        , c = Math.sqrt(u * u + o * o) / (p * i * (1 - i))
        , f = c ? Math.atan2(u, o) * l.rad2deg - 120 : NaN;
      return new a(f < 0 ? f + 360 : f, c, i, e.opacity)
    }
    function i(e, t, n, i) {
      return 1 === arguments.length ? r(e) : new a(e, t, n, null == i ? 1 : i)
    }
    function a(e, t, n, r) {
      this.h = +e,
        this.s = +t,
        this.l = +n,
        this.opacity = +r
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = i,
      t.Cubehelix = a;
    var o = n(406)
      , u = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(o)
      , s = n(405)
      , l = n(718)
      , c = -.14861
      , f = 1.78277
      , d = -.29227
      , h = -.90649
      , p = 1.97294
      , v = p * h
      , y = p * f
      , m = f * d - h * c;
    (0,
      u.default)(a, i, (0,
        o.extend)(s.Color, {
          brighter: function (e) {
            return e = null == e ? s.brighter : Math.pow(s.brighter, e),
              new a(this.h, this.s, this.l * e, this.opacity)
          },
          darker: function (e) {
            return e = null == e ? s.darker : Math.pow(s.darker, e),
              new a(this.h, this.s, this.l * e, this.opacity)
          },
          rgb: function () {
            var e = isNaN(this.h) ? 0 : (this.h + 120) * l.deg2rad
              , t = +this.l
              , n = isNaN(this.s) ? 0 : this.s * t * (1 - t)
              , r = Math.cos(e)
              , i = Math.sin(e);
            return new s.Rgb(255 * (t + n * (c * r + f * i)), 255 * (t + n * (d * r + h * i)), 255 * (t + n * (p * r)), this.opacity)
          }
        }))
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        return e = +e,
          t -= e,
          function (n) {
            return Math.round(e + t * n)
          }
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n, r) {
      function i(e) {
        return e.length ? e.pop() + " " : ""
      }
      function o(e, r, i, o, u, s) {
        if (e !== i || r !== o) {
          var l = u.push("translate(", null, t, null, n);
          s.push({
            i: l - 4,
            x: (0,
              a.default)(e, i)
          }, {
              i: l - 2,
              x: (0,
                a.default)(r, o)
            })
        } else
          (i || o) && u.push("translate(" + i + t + o + n)
      }
      function u(e, t, n, o) {
        e !== t ? (e - t > 180 ? t += 360 : t - e > 180 && (e += 360),
          o.push({
            i: n.push(i(n) + "rotate(", null, r) - 2,
            x: (0,
              a.default)(e, t)
          })) : t && n.push(i(n) + "rotate(" + t + r)
      }
      function s(e, t, n, o) {
        e !== t ? o.push({
          i: n.push(i(n) + "skewX(", null, r) - 2,
          x: (0,
            a.default)(e, t)
        }) : t && n.push(i(n) + "skewX(" + t + r)
      }
      function l(e, t, n, r, o, u) {
        if (e !== n || t !== r) {
          var s = o.push(i(o) + "scale(", null, ",", null, ")");
          u.push({
            i: s - 4,
            x: (0,
              a.default)(e, n)
          }, {
              i: s - 2,
              x: (0,
                a.default)(t, r)
            })
        } else
          1 === n && 1 === r || o.push(i(o) + "scale(" + n + "," + r + ")")
      }
      return function (t, n) {
        var r = []
          , i = [];
        return t = e(t),
          n = e(n),
          o(t.translateX, t.translateY, n.translateX, n.translateY, r, i),
          u(t.rotate, n.rotate, r, i),
          s(t.skewX, n.skewX, r, i),
          l(t.scaleX, t.scaleY, n.scaleX, n.scaleY, r, i),
          t = n = null,
          function (e) {
            for (var t, n = -1, a = i.length; ++n < a;)
              r[(t = i[n]).i] = t.x(e);
            return r.join("")
          }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.interpolateTransformSvg = t.interpolateTransformCss = void 0;
    var i = n(312)
      , a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i)
      , o = n(1532);
    t.interpolateTransformCss = r(o.parseCss, "px, ", "px)", "deg)"),
      t.interpolateTransformSvg = r(o.parseSvg, ", ", ")", ")")
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return "none" === e ? l.identity : (a || (a = document.createElement("DIV"),
        o = document.documentElement,
        u = document.defaultView),
        a.style.transform = e,
        e = u.getComputedStyle(o.appendChild(a), null).getPropertyValue("transform"),
        o.removeChild(a),
        e = e.slice(7, -1).split(","),
        (0,
          c.default)(+e[0], +e[1], +e[2], +e[3], +e[4], +e[5]))
    }
    function i(e) {
      return null == e ? l.identity : (s || (s = document.createElementNS("http://www.w3.org/2000/svg", "g")),
        s.setAttribute("transform", e),
        (e = s.transform.baseVal.consolidate()) ? (e = e.matrix,
          (0,
            c.default)(e.a, e.b, e.c, e.d, e.e, e.f)) : l.identity)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.parseCss = r,
      t.parseSvg = i;
    var a, o, u, s, l = n(1533), c = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(l)
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n, i, a, o) {
        var u, s, l;
        return (u = Math.sqrt(e * e + t * t)) && (e /= u,
          t /= u),
          (l = e * n + t * i) && (n -= e * l,
            i -= t * l),
          (s = Math.sqrt(n * n + i * i)) && (n /= s,
            i /= s,
            l /= s),
          e * i < t * n && (e = -e,
            t = -t,
            l = -l,
            u = -u),
          {
            translateX: a,
            translateY: o,
            rotate: Math.atan2(t, e) * r,
            skewX: Math.atan(l) * r,
            scaleX: u,
            scaleY: s
          }
      }
      ;
    var r = 180 / Math.PI;
    t.identity = {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      skewX: 0,
      scaleX: 1,
      scaleY: 1
    }
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return ((e = Math.exp(e)) + 1 / e) / 2
    }
    function i(e) {
      return ((e = Math.exp(e)) - 1 / e) / 2
    }
    function a(e) {
      return ((e = Math.exp(2 * e)) - 1) / (e + 1)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n, c, f = e[0], d = e[1], h = e[2], p = t[0], v = t[1], y = t[2], m = p - f, g = v - d, b = m * m + g * g;
        if (b < l)
          c = Math.log(y / h) / o,
            n = function (e) {
              return [f + e * m, d + e * g, h * Math.exp(o * e * c)]
            }
            ;
        else {
          var _ = Math.sqrt(b)
            , x = (y * y - h * h + s * b) / (2 * h * u * _)
            , w = (y * y - h * h - s * b) / (2 * y * u * _)
            , P = Math.log(Math.sqrt(x * x + 1) - x)
            , M = Math.log(Math.sqrt(w * w + 1) - w);
          c = (M - P) / o,
            n = function (e) {
              var t = e * c
                , n = r(P)
                , s = h / (u * _) * (n * a(o * t + P) - i(P));
              return [f + s * m, d + s * g, h * n / r(o * t + P)]
            }
        }
        return n.duration = 1e3 * c,
          n
      }
      ;
    var o = Math.SQRT2
      , u = 2
      , s = 4
      , l = 1e-12;
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return function (t, n) {
        var r = e((t = (0,
          i.hsl)(t)).h, (n = (0,
            i.hsl)(n)).h)
          , a = (0,
            o.default)(t.s, n.s)
          , u = (0,
            o.default)(t.l, n.l)
          , s = (0,
            o.default)(t.opacity, n.opacity);
        return function (e) {
          return t.h = r(e),
            t.s = a(e),
            t.l = u(e),
            t.opacity = s(e),
            t + ""
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.hslLong = void 0;
    var i = n(138)
      , a = n(222)
      , o = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(a);
    t.default = r(a.hue);
    t.hslLong = r(o.default)
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n = (0,
        o.default)((e = (0,
          i.lab)(e)).l, (t = (0,
            i.lab)(t)).l)
        , r = (0,
          o.default)(e.a, t.a)
        , a = (0,
          o.default)(e.b, t.b)
        , u = (0,
          o.default)(e.opacity, t.opacity);
      return function (t) {
        return e.l = n(t),
          e.a = r(t),
          e.b = a(t),
          e.opacity = u(t),
          e + ""
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = r;
    var i = n(138)
      , a = n(222)
      , o = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(a);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return function (t, n) {
        var r = e((t = (0,
          i.hcl)(t)).h, (n = (0,
            i.hcl)(n)).h)
          , a = (0,
            o.default)(t.c, n.c)
          , u = (0,
            o.default)(t.l, n.l)
          , s = (0,
            o.default)(t.opacity, n.opacity);
        return function (e) {
          return t.h = r(e),
            t.c = a(e),
            t.l = u(e),
            t.opacity = s(e),
            t + ""
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.hclLong = void 0;
    var i = n(138)
      , a = n(222)
      , o = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(a);
    t.default = r(a.hue);
    t.hclLong = r(o.default)
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return function t(n) {
        function r(t, r) {
          var a = e((t = (0,
            i.cubehelix)(t)).h, (r = (0,
              i.cubehelix)(r)).h)
            , u = (0,
              o.default)(t.s, r.s)
            , s = (0,
              o.default)(t.l, r.l)
            , l = (0,
              o.default)(t.opacity, r.opacity);
          return function (e) {
            return t.h = a(e),
              t.s = u(e),
              t.l = s(Math.pow(e, n)),
              t.opacity = l(e),
              t + ""
          }
        }
        return n = +n,
          r.gamma = t,
          r
      }(1)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.cubehelixLong = void 0;
    var i = n(138)
      , a = n(222)
      , o = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(a);
    t.default = r(a.hue);
    t.cubehelixLong = r(o.default)
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        for (var n = new Array(t), r = 0; r < t; ++r)
          n[r] = e(r / (t - 1));
        return n
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return function () {
        this.removeAttribute(e)
      }
    }
    function i(e) {
      return function () {
        this.removeAttributeNS(e.space, e.local)
      }
    }
    function a(e, t, n) {
      var r, i;
      return function () {
        var a = this.getAttribute(e);
        return a === n ? null : a === r ? i : i = t(r = a, n)
      }
    }
    function o(e, t, n) {
      var r, i;
      return function () {
        var a = this.getAttributeNS(e.space, e.local);
        return a === n ? null : a === r ? i : i = t(r = a, n)
      }
    }
    function u(e, t, n) {
      var r, i, a;
      return function () {
        var o, u = n(this);
        return null == u ? void this.removeAttribute(e) : (o = this.getAttribute(e),
          o === u ? null : o === r && u === i ? a : a = t(r = o, i = u))
      }
    }
    function s(e, t, n) {
      var r, i, a;
      return function () {
        var o, u = n(this);
        return null == u ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local),
          o === u ? null : o === r && u === i ? a : a = t(r = o, i = u))
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n = (0,
          c.namespace)(e)
          , d = "transform" === n ? l.interpolateTransformSvg : h.default;
        return this.attrTween(e, "function" == typeof t ? (n.local ? s : u)(n, d, (0,
          f.tweenValue)(this, "attr." + e, t)) : null == t ? (n.local ? i : r)(n) : (n.local ? o : a)(n, d, t + ""))
      }
      ;
    var l = n(112)
      , c = n(62)
      , f = n(313)
      , d = n(726)
      , h = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(d);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n) {
        var i = new r.Timer;
        return t = null == t ? 0 : +t,
          i.restart(function (n) {
            i.stop(),
              e(n + t)
          }, t, n),
          i
      }
      ;
    var r = n(409);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n) {
        var i = new r.Timer
          , a = t;
        return null == t ? (i.restart(e, t, n),
          i) : (t = +t,
            n = null == n ? (0,
              r.now)() : +n,
            i.restart(function r(o) {
              o += a,
                i.restart(r, a += t, n),
                e(o)
            }, t, n),
            i)
      }
      ;
    var r = n(409);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      function n() {
        var n = this
          , r = t.apply(n, arguments);
        return r && function (t) {
          n.setAttributeNS(e.space, e.local, r(t))
        }
      }
      return n._value = t,
        n
    }
    function i(e, t) {
      function n() {
        var n = this
          , r = t.apply(n, arguments);
        return r && function (t) {
          n.setAttribute(e, r(t))
        }
      }
      return n._value = t,
        n
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n = "attr." + e;
        if (arguments.length < 2)
          return (n = this.tween(n)) && n._value;
        if (null == t)
          return this.tween(n, null);
        if ("function" != typeof t)
          throw new Error;
        var o = (0,
          a.namespace)(e);
        return this.tween(n, (o.local ? r : i)(o, t))
      }
      ;
    var a = n(62);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      return function () {
        (0,
          a.init)(this, e).delay = +t.apply(this, arguments)
      }
    }
    function i(e, t) {
      return t = +t,
        function () {
          (0,
            a.init)(this, e).delay = t
        }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        var t = this._id;
        return arguments.length ? this.each(("function" == typeof e ? r : i)(t, e)) : (0,
          a.get)(this.node(), t).delay
      }
      ;
    var a = n(113);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      return function () {
        (0,
          a.set)(this, e).duration = +t.apply(this, arguments)
      }
    }
    function i(e, t) {
      return t = +t,
        function () {
          (0,
            a.set)(this, e).duration = t
        }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        var t = this._id;
        return arguments.length ? this.each(("function" == typeof e ? r : i)(t, e)) : (0,
          a.get)(this.node(), t).duration
      }
      ;
    var a = n(113);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      if ("function" != typeof t)
        throw new Error;
      return function () {
        (0,
          i.set)(this, e).ease = t
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        var t = this._id;
        return arguments.length ? this.each(r(t, e)) : (0,
          i.get)(this.node(), t).ease
      }
      ;
    var i = n(113);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        "function" != typeof e && (e = (0,
          r.matcher)(e));
        for (var t = this._groups, n = t.length, a = new Array(n), o = 0; o < n; ++o)
          for (var u, s = t[o], l = s.length, c = a[o] = [], f = 0; f < l; ++f)
            (u = s[f]) && e.call(u, u.__data__, f, s) && c.push(u);
        return new i.Transition(a, this._parents, this._name, this._id)
      }
      ;
    var r = n(62)
      , i = n(152);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        if (e._id !== this._id)
          throw new Error;
        for (var t = this._groups, n = e._groups, i = t.length, a = n.length, o = Math.min(i, a), u = new Array(i), s = 0; s < o; ++s)
          for (var l, c = t[s], f = n[s], d = c.length, h = u[s] = new Array(d), p = 0; p < d; ++p)
            (l = c[p] || f[p]) && (h[p] = l);
        for (; s < i; ++s)
          u[s] = t[s];
        return new r.Transition(u, this._parents, this._name, this._id)
      }
      ;
    var r = n(152);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return (e + "").trim().split(/^|\s+/).every(function (e) {
        var t = e.indexOf(".");
        return t >= 0 && (e = e.slice(0, t)),
          !e || "start" === e
      })
    }
    function i(e, t, n) {
      var i, o, u = r(t) ? a.init : a.set;
      return function () {
        var r = u(this, e)
          , a = r.on;
        a !== i && (o = (i = a).copy()).on(t, n),
          r.on = o
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n = this._id;
        return arguments.length < 2 ? (0,
          a.get)(this.node(), n).on.on(e) : this.each(i(n, e, t))
      }
      ;
    var a = n(113);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return function () {
        var t = this.parentNode;
        for (var n in this.__transition)
          if (+n !== e)
            return;
        t && t.removeChild(this)
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        return this.on("end.remove", r(this._id))
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        var t = this._name
          , n = this._id;
        "function" != typeof e && (e = (0,
          r.selector)(e));
        for (var u = this._groups, s = u.length, l = new Array(s), c = 0; c < s; ++c)
          for (var f, d, h = u[c], p = h.length, v = l[c] = new Array(p), y = 0; y < p; ++y)
            (f = h[y]) && (d = e.call(f, f.__data__, y, h)) && ("__data__" in f && (d.__data__ = f.__data__),
              v[y] = d,
              (0,
                o.default)(v[y], t, n, y, v, (0,
                  a.get)(f, n)));
        return new i.Transition(l, this._parents, t, n)
      }
      ;
    var r = n(62)
      , i = n(152)
      , a = n(113)
      , o = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(a);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        var t = this._name
          , n = this._id;
        "function" != typeof e && (e = (0,
          r.selectorAll)(e));
        for (var u = this._groups, s = u.length, l = [], c = [], f = 0; f < s; ++f)
          for (var d, h = u[f], p = h.length, v = 0; v < p; ++v)
            if (d = h[v]) {
              for (var y, m = e.call(d, d.__data__, v, h), g = (0,
                a.get)(d, n), b = 0, _ = m.length; b < _; ++b)
                (y = m[b]) && (0,
                  o.default)(y, t, n, b, m, g);
              l.push(m),
                c.push(d)
            }
        return new i.Transition(l, c, t, n)
      }
      ;
    var r = n(62)
      , i = n(152)
      , a = n(113)
      , o = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(a);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        return new i(this._groups, this._parents)
      }
      ;
    var r = n(62)
      , i = r.selection.prototype.constructor;
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n, r, i;
      return function () {
        var a = (0,
          s.style)(this, e)
          , o = (this.style.removeProperty(e),
            (0,
              s.style)(this, e));
        return a === o ? null : a === n && o === r ? i : i = t(n = a, r = o)
      }
    }
    function i(e) {
      return function () {
        this.style.removeProperty(e)
      }
    }
    function a(e, t, n) {
      var r, i;
      return function () {
        var a = (0,
          s.style)(this, e);
        return a === n ? null : a === r ? i : i = t(r = a, n)
      }
    }
    function o(e, t, n) {
      var r, i, a;
      return function () {
        var o = (0,
          s.style)(this, e)
          , u = n(this);
        return null == u && (this.style.removeProperty(e),
          u = (0,
            s.style)(this, e)),
          o === u ? null : o === r && u === i ? a : a = t(r = o, i = u)
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n) {
        var s = "transform" == (e += "") ? u.interpolateTransformCss : f.default;
        return null == t ? this.styleTween(e, r(e, s)).on("end.style." + e, i(e)) : this.styleTween(e, "function" == typeof t ? o(e, s, (0,
          l.tweenValue)(this, "style." + e, t)) : a(e, s, t + ""), n)
      }
      ;
    var u = n(112)
      , s = n(62)
      , l = n(313)
      , c = n(726)
      , f = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(c);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      function r() {
        var r = this
          , i = t.apply(r, arguments);
        return i && function (t) {
          r.style.setProperty(e, i(t), n)
        }
      }
      return r._value = t,
        r
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n) {
        var i = "style." + (e += "");
        if (arguments.length < 2)
          return (i = this.tween(i)) && i._value;
        if (null == t)
          return this.tween(i, null);
        if ("function" != typeof t)
          throw new Error;
        return this.tween(i, r(e, t, null == n ? "" : n))
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return function () {
        this.textContent = e
      }
    }
    function i(e) {
      return function () {
        var t = e(this);
        this.textContent = null == t ? "" : t
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return this.tween("text", "function" == typeof e ? i((0,
          a.tweenValue)(this, "text", e)) : r(null == e ? "" : e + ""))
      }
      ;
    var a = n(313);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        for (var e = this._name, t = this._id, n = (0,
          r.newId)(), o = this._groups, u = o.length, s = 0; s < u; ++s)
          for (var l, c = o[s], f = c.length, d = 0; d < f; ++d)
            if (l = c[d]) {
              var h = (0,
                i.get)(l, t);
              (0,
                a.default)(l, e, n, d, c, {
                  time: h.time + h.delay + h.duration,
                  delay: 0,
                  duration: h.duration,
                  ease: h.ease
                })
            }
        return new r.Transition(o, this._parents, e, n)
      }
      ;
    var r = n(152)
      , i = n(113)
      , a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n, o, u = e.__transition;
        if (u) {
          t = null == t ? null : t + "";
          for (o in u)
            if ((n = u[o]).state > i.SCHEDULED && n.name === t)
              return new r.Transition([[e]], a, t, +o)
        }
        return null
      }
      ;
    var r = n(152)
      , i = n(113)
      , a = [null];
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var i = n(62)
      , a = n(1560)
      , o = r(a)
      , u = n(1561)
      , s = r(u);
    i.selection.prototype.interrupt = o.default,
      i.selection.prototype.transition = s.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return this.each(function () {
          (0,
            i.default)(this, e)
        })
      }
      ;
    var r = n(727)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      for (var n; !(n = e.__transition) || !(n = n[t]);)
        if (!(e = e.parentNode))
          return l.time = (0,
            s.now)(),
            l;
      return n
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        var t, n;
        e instanceof i.Transition ? (t = e._id,
          e = e._name) : (t = (0,
            i.newId)(),
            (n = l).time = (0,
              s.now)(),
            e = null == e ? null : e + "");
        for (var a = this._groups, u = a.length, c = 0; c < u; ++c)
          for (var f, d = a[c], h = d.length, p = 0; p < h; ++p)
            (f = d[p]) && (0,
              o.default)(f, e, t, p, d, n || r(f, t));
        return new i.Transition(a, this._parents, e, t)
      }
      ;
    var i = n(152)
      , a = n(113)
      , o = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(a)
      , u = n(728)
      , s = n(314)
      , l = {
        time: null,
        delay: 0,
        duration: 250,
        ease: u.easeCubicInOut
      };
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return +e
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.linear = r
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e * e
    }
    function i(e) {
      return e * (2 - e)
    }
    function a(e) {
      return ((e *= 2) <= 1 ? e * e : --e * (2 - e) + 1) / 2
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.quadIn = r,
      t.quadOut = i,
      t.quadInOut = a
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e * e * e
    }
    function i(e) {
      return --e * e * e + 1
    }
    function a(e) {
      return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.cubicIn = r,
      t.cubicOut = i,
      t.cubicInOut = a
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.polyIn = function e(t) {
      function n(e) {
        return Math.pow(e, t)
      }
      return t = +t,
        n.exponent = e,
        n
    }(3),
      t.polyOut = function e(t) {
        function n(e) {
          return 1 - Math.pow(1 - e, t)
        }
        return t = +t,
          n.exponent = e,
          n
      }(3),
      t.polyInOut = function e(t) {
        function n(e) {
          return ((e *= 2) <= 1 ? Math.pow(e, t) : 2 - Math.pow(2 - e, t)) / 2
        }
        return t = +t,
          n.exponent = e,
          n
      }(3)
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return 1 - Math.cos(e * u)
    }
    function i(e) {
      return Math.sin(e * u)
    }
    function a(e) {
      return (1 - Math.cos(o * e)) / 2
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.sinIn = r,
      t.sinOut = i,
      t.sinInOut = a;
    var o = Math.PI
      , u = o / 2
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return Math.pow(2, 10 * e - 10)
    }
    function i(e) {
      return 1 - Math.pow(2, -10 * e)
    }
    function a(e) {
      return ((e *= 2) <= 1 ? Math.pow(2, 10 * e - 10) : 2 - Math.pow(2, 10 - 10 * e)) / 2
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.expIn = r,
      t.expOut = i,
      t.expInOut = a
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return 1 - Math.sqrt(1 - e * e)
    }
    function i(e) {
      return Math.sqrt(1 - --e * e)
    }
    function a(e) {
      return ((e *= 2) <= 1 ? 1 - Math.sqrt(1 - e * e) : Math.sqrt(1 - (e -= 2) * e) + 1) / 2
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.circleIn = r,
      t.circleOut = i,
      t.circleInOut = a
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return 1 - i(1 - e)
    }
    function i(e) {
      return (e = +e) < o ? v * e * e : e < s ? v * (e -= u) * e + l : e < f ? v * (e -= c) * e + d : v * (e -= h) * e + p
    }
    function a(e) {
      return ((e *= 2) <= 1 ? 1 - i(1 - e) : i(e - 1) + 1) / 2
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.bounceIn = r,
      t.bounceOut = i,
      t.bounceInOut = a;
    var o = 4 / 11
      , u = 6 / 11
      , s = 8 / 11
      , l = .75
      , c = 9 / 11
      , f = 10 / 11
      , d = .9375
      , h = 21 / 22
      , p = 63 / 64
      , v = 1 / o / o
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.backIn = function e(t) {
      function n(e) {
        return e * e * ((t + 1) * e - t)
      }
      return t = +t,
        n.overshoot = e,
        n
    }(1.70158),
      t.backOut = function e(t) {
        function n(e) {
          return --e * e * ((t + 1) * e + t) + 1
        }
        return t = +t,
          n.overshoot = e,
          n
      }(1.70158),
      t.backInOut = function e(t) {
        function n(e) {
          return ((e *= 2) < 1 ? e * e * ((t + 1) * e - t) : (e -= 2) * e * ((t + 1) * e + t) + 2) / 2
        }
        return t = +t,
          n.overshoot = e,
          n
      }(1.70158)
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = 2 * Math.PI;
    t.elasticIn = function e(t, n) {
      function i(e) {
        return t * Math.pow(2, 10 * --e) * Math.sin((a - e) / n)
      }
      var a = Math.asin(1 / (t = Math.max(1, t))) * (n /= r);
      return i.amplitude = function (t) {
        return e(t, n * r)
      }
        ,
        i.period = function (n) {
          return e(t, n)
        }
        ,
        i
    }(1, .3),
      t.elasticOut = function e(t, n) {
        function i(e) {
          return 1 - t * Math.pow(2, -10 * (e = +e)) * Math.sin((e + a) / n)
        }
        var a = Math.asin(1 / (t = Math.max(1, t))) * (n /= r);
        return i.amplitude = function (t) {
          return e(t, n * r)
        }
          ,
          i.period = function (n) {
            return e(t, n)
          }
          ,
          i
      }(1, .3),
      t.elasticInOut = function e(t, n) {
        function i(e) {
          return ((e = 2 * e - 1) < 0 ? t * Math.pow(2, 10 * e) * Math.sin((a - e) / n) : 2 - t * Math.pow(2, -10 * e) * Math.sin((a + e) / n)) / 2
        }
        var a = Math.asin(1 / (t = Math.max(1, t))) * (n /= r);
        return i.amplitude = function (t) {
          return e(t, n * r)
        }
          ,
          i.period = function (n) {
            return e(t, n)
          }
          ,
          i
      }(1, .3)
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return function () {
          return e
        }
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n) {
        this.target = e,
          this.type = t,
          this.selection = n
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      i.event.stopImmediatePropagation()
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.nopropagation = r,
      t.default = function () {
        i.event.preventDefault(),
          i.event.stopImmediatePropagation()
      }
      ;
    var i = n(62)
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(1576);
    Object.defineProperty(t, "chord", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    });
    var a = n(1577);
    Object.defineProperty(t, "ribbon", {
      enumerable: !0,
      get: function () {
        return r(a).default
      }
    })
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return function (t, n) {
        return e(t.source.value + t.target.value, n.source.value + n.target.value)
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        function e(e) {
          var r, s, l, c, f, d, h = e.length, p = [], v = (0,
            i.range)(h), y = [], m = [], g = m.groups = new Array(h), b = new Array(h * h);
          for (r = 0,
            f = -1; ++f < h;) {
            for (s = 0,
              d = -1; ++d < h;)
              s += e[f][d];
            p.push(s),
              y.push((0,
                i.range)(h)),
              r += s
          }
          for (n && v.sort(function (e, t) {
            return n(p[e], p[t])
          }),
            o && y.forEach(function (t, n) {
              t.sort(function (t, r) {
                return o(e[n][t], e[n][r])
              })
            }),
            r = (0,
              a.max)(0, a.tau - t * h) / r,
            c = r ? t : a.tau / h,
            s = 0,
            f = -1; ++f < h;) {
            for (l = s,
              d = -1; ++d < h;) {
              var _ = v[f]
                , x = y[_][d]
                , w = e[_][x]
                , P = s
                , M = s += w * r;
              b[x * h + _] = {
                index: _,
                subindex: x,
                startAngle: P,
                endAngle: M,
                value: w
              }
            }
            g[_] = {
              index: _,
              startAngle: l,
              endAngle: s,
              value: p[_]
            },
              s += c
          }
          for (f = -1; ++f < h;)
            for (d = f - 1; ++d < h;) {
              var O = b[d * h + f]
                , E = b[f * h + d];
              (O.value || E.value) && m.push(O.value < E.value ? {
                source: E,
                target: O
              } : {
                  source: O,
                  target: E
                })
            }
          return u ? m.sort(u) : m
        }
        var t = 0
          , n = null
          , o = null
          , u = null;
        return e.padAngle = function (n) {
          return arguments.length ? (t = (0,
            a.max)(0, n),
            e) : t
        }
          ,
          e.sortGroups = function (t) {
            return arguments.length ? (n = t,
              e) : n
          }
          ,
          e.sortSubgroups = function (t) {
            return arguments.length ? (o = t,
              e) : o
          }
          ,
          e.sortChords = function (t) {
            return arguments.length ? (null == t ? u = null : (u = r(t))._ = t,
              e) : u && u._
          }
          ,
          e
      }
      ;
    var i = n(84)
      , a = n(729);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e.source
    }
    function i(e) {
      return e.target
    }
    function a(e) {
      return e.radius
    }
    function o(e) {
      return e.startAngle
    }
    function u(e) {
      return e.endAngle
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        function e() {
          var e, r = s.slice.call(arguments), i = t.apply(this, r), a = n.apply(this, r), o = +l.apply(this, (r[0] = i,
            r)), u = h.apply(this, r) - f.halfPi, c = p.apply(this, r) - f.halfPi, y = o * (0,
              f.cos)(u), m = o * (0,
                f.sin)(u), g = +l.apply(this, (r[0] = a,
                  r)), b = h.apply(this, r) - f.halfPi, _ = p.apply(this, r) - f.halfPi;
          if (v || (v = e = (0,
            d.path)()),
            v.moveTo(y, m),
            v.arc(0, 0, o, u, c),
            u === b && c === _ || (v.quadraticCurveTo(0, 0, g * (0,
              f.cos)(b), g * (0,
                f.sin)(b)),
              v.arc(0, 0, g, b, _)),
            v.quadraticCurveTo(0, 0, y, m),
            v.closePath(),
            e)
            return v = null,
              e + "" || null
        }
        var t = r
          , n = i
          , l = a
          , h = o
          , p = u
          , v = null;
        return e.radius = function (t) {
          return arguments.length ? (l = "function" == typeof t ? t : (0,
            c.default)(+t),
            e) : l
        }
          ,
          e.startAngle = function (t) {
            return arguments.length ? (h = "function" == typeof t ? t : (0,
              c.default)(+t),
              e) : h
          }
          ,
          e.endAngle = function (t) {
            return arguments.length ? (p = "function" == typeof t ? t : (0,
              c.default)(+t),
              e) : p
          }
          ,
          e.source = function (n) {
            return arguments.length ? (t = n,
              e) : t
          }
          ,
          e.target = function (t) {
            return arguments.length ? (n = t,
              e) : n
          }
          ,
          e.context = function (t) {
            return arguments.length ? (v = null == t ? null : t,
              e) : v
          }
          ,
          e
      }
      ;
    var s = n(1578)
      , l = n(1579)
      , c = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(l)
      , f = n(729)
      , d = n(169);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.slice = Array.prototype.slice
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return function () {
          return e
        }
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      this._x0 = this._y0 = this._x1 = this._y1 = null,
        this._ = ""
    }
    function i() {
      return new r
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = Math.PI
      , o = 2 * a
      , u = o - 1e-6;
    r.prototype = i.prototype = {
      constructor: r,
      moveTo: function (e, t) {
        this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t)
      },
      closePath: function () {
        null !== this._x1 && (this._x1 = this._x0,
          this._y1 = this._y0,
          this._ += "Z")
      },
      lineTo: function (e, t) {
        this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t)
      },
      quadraticCurveTo: function (e, t, n, r) {
        this._ += "Q" + +e + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +r)
      },
      bezierCurveTo: function (e, t, n, r, i, a) {
        this._ += "C" + +e + "," + +t + "," + +n + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +a)
      },
      arcTo: function (e, t, n, r, i) {
        e = +e,
          t = +t,
          n = +n,
          r = +r,
          i = +i;
        var o = this._x1
          , u = this._y1
          , s = n - e
          , l = r - t
          , c = o - e
          , f = u - t
          , d = c * c + f * f;
        if (i < 0)
          throw new Error("negative radius: " + i);
        if (null === this._x1)
          this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
        else if (d > 1e-6)
          if (Math.abs(f * s - l * c) > 1e-6 && i) {
            var h = n - o
              , p = r - u
              , v = s * s + l * l
              , y = h * h + p * p
              , m = Math.sqrt(v)
              , g = Math.sqrt(d)
              , b = i * Math.tan((a - Math.acos((v + d - y) / (2 * m * g))) / 2)
              , _ = b / g
              , x = b / m;
            Math.abs(_ - 1) > 1e-6 && (this._ += "L" + (e + _ * c) + "," + (t + _ * f)),
              this._ += "A" + i + "," + i + ",0,0," + +(f * h > c * p) + "," + (this._x1 = e + x * s) + "," + (this._y1 = t + x * l)
          } else
            this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
        else
          ;
      },
      arc: function (e, t, n, r, i, s) {
        e = +e,
          t = +t,
          n = +n;
        var l = n * Math.cos(r)
          , c = n * Math.sin(r)
          , f = e + l
          , d = t + c
          , h = 1 ^ s
          , p = s ? r - i : i - r;
        if (n < 0)
          throw new Error("negative radius: " + n);
        null === this._x1 ? this._ += "M" + f + "," + d : (Math.abs(this._x1 - f) > 1e-6 || Math.abs(this._y1 - d) > 1e-6) && (this._ += "L" + f + "," + d),
          n && (p < 0 && (p = p % o + o),
            p > u ? this._ += "A" + n + "," + n + ",0,1," + h + "," + (e - l) + "," + (t - c) + "A" + n + "," + n + ",0,1," + h + "," + (this._x1 = f) + "," + (this._y1 = d) : p > 1e-6 && (this._ += "A" + n + "," + n + ",0," + +(p >= a) + "," + h + "," + (this._x1 = e + n * Math.cos(i)) + "," + (this._y1 = t + n * Math.sin(i))))
      },
      rect: function (e, t, n, r) {
        this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +r + "h" + -n + "Z"
      },
      toString: function () {
        return this._
      }
    },
      t.default = i,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      return {}
    }
    function i(e, t, n) {
      e[t] = n
    }
    function a() {
      return (0,
        s.default)()
    }
    function o(e, t, n) {
      e.set(t, n)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        function e(t, r, i, a) {
          if (r >= c.length)
            return null != n && t.sort(n),
              null != u ? u(t) : t;
          for (var o, l, f, d = -1, h = t.length, p = c[r++], v = (0,
            s.default)(), y = i(); ++d < h;)
            (f = v.get(o = p(l = t[d]) + "")) ? f.push(l) : v.set(o, [l]);
          return v.each(function (t, n) {
            a(y, n, e(t, r, i, a))
          }),
            y
        }
        function t(e, n) {
          if (++n > c.length)
            return e;
          var r, i = f[n - 1];
          return null != u && n >= c.length ? r = e.entries() : (r = [],
            e.each(function (e, i) {
              r.push({
                key: i,
                values: t(e, n)
              })
            })),
            null != i ? r.sort(function (e, t) {
              return i(e.key, t.key)
            }) : r
        }
        var n, u, l, c = [], f = [];
        return l = {
          object: function (t) {
            return e(t, 0, r, i)
          },
          map: function (t) {
            return e(t, 0, a, o)
          },
          entries: function (n) {
            return t(e(n, 0, a, o), 0)
          },
          key: function (e) {
            return c.push(e),
              l
          },
          sortKeys: function (e) {
            return f[c.length - 1] = e,
              l
          },
          sortValues: function (e) {
            return n = e,
              l
          },
          rollup: function (e) {
            return u = e,
              l
          }
        }
      }
      ;
    var u = n(410)
      , s = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(u);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r() { }
    function i(e, t) {
      var n = new r;
      if (e instanceof r)
        e.each(function (e) {
          n.add(e)
        });
      else if (e) {
        var i = -1
          , a = e.length;
        if (null == t)
          for (; ++i < a;)
            n.add(e[i]);
        else
          for (; ++i < a;)
            n.add(t(e[i], i, e))
      }
      return n
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = n(410)
      , o = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(a)
      , u = o.default.prototype;
    r.prototype = i.prototype = {
      constructor: r,
      has: u.has,
      add: function (e) {
        return e += "",
          this[a.prefix + e] = e,
          this
      },
      remove: u.remove,
      clear: u.clear,
      values: u.keys,
      size: u.size,
      empty: u.empty,
      each: u.each
    },
      t.default = i,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        var t = [];
        for (var n in e)
          t.push(n);
        return t
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        var t = [];
        for (var n in e)
          t.push(e[n]);
        return t
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        var t = [];
        for (var n in e)
          t.push({
            key: n,
            value: e[n]
          });
        return t
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.csvFormatRows = t.csvFormat = t.csvParseRows = t.csvParse = void 0;
    var r = n(412)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r)
      , a = (0,
        i.default)(",");
    t.csvParse = a.parse,
      t.csvParseRows = a.parseRows,
      t.csvFormat = a.format,
      t.csvFormatRows = a.formatRows
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.tsvFormatRows = t.tsvFormat = t.tsvParseRows = t.tsvParse = void 0;
    var r = n(412)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r)
      , a = (0,
        i.default)("\t");
    t.tsvParse = a.parse,
      t.tsvParseRows = a.parseRows,
      t.tsvFormat = a.format,
      t.tsvFormatRows = a.formatRows
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(1589);
    Object.defineProperty(t, "forceCenter", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    });
    var a = n(1590);
    Object.defineProperty(t, "forceCollide", {
      enumerable: !0,
      get: function () {
        return r(a).default
      }
    });
    var o = n(1604);
    Object.defineProperty(t, "forceLink", {
      enumerable: !0,
      get: function () {
        return r(o).default
      }
    });
    var u = n(1605);
    Object.defineProperty(t, "forceManyBody", {
      enumerable: !0,
      get: function () {
        return r(u).default
      }
    });
    var s = n(1606);
    Object.defineProperty(t, "forceRadial", {
      enumerable: !0,
      get: function () {
        return r(s).default
      }
    });
    var l = n(730);
    Object.defineProperty(t, "forceSimulation", {
      enumerable: !0,
      get: function () {
        return r(l).default
      }
    });
    var c = n(1607);
    Object.defineProperty(t, "forceX", {
      enumerable: !0,
      get: function () {
        return r(c).default
      }
    });
    var f = n(1608);
    Object.defineProperty(t, "forceY", {
      enumerable: !0,
      get: function () {
        return r(f).default
      }
    })
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        function n() {
          var n, i, a = r.length, o = 0, u = 0;
          for (n = 0; n < a; ++n)
            i = r[n],
              o += i.x,
              u += i.y;
          for (o = o / a - e,
            u = u / a - t,
            n = 0; n < a; ++n)
            i = r[n],
              i.x -= o,
              i.y -= u
        }
        var r;
        return null == e && (e = 0),
          null == t && (t = 0),
          n.initialize = function (e) {
            r = e
          }
          ,
          n.x = function (t) {
            return arguments.length ? (e = +t,
              n) : e
          }
          ,
          n.y = function (e) {
            return arguments.length ? (t = +e,
              n) : t
          }
          ,
          n
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e) {
      return e.x + e.vx
    }
    function a(e) {
      return e.y + e.vy
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        function t() {
          function e(e, t, n, r, i) {
            var a = e.data
              , o = e.r
              , s = v + o;
            {
              if (!a)
                return t > h + s || r < h - s || n > p + s || i < p - s;
              if (a.index > u.index) {
                var c = h - a.x - a.vx
                  , d = p - a.y - a.vy
                  , m = c * c + d * d;
                m < s * s && (0 === c && (c = (0,
                  l.default)(),
                  m += c * c),
                  0 === d && (d = (0,
                    l.default)(),
                    m += d * d),
                  m = (s - (m = Math.sqrt(m))) / m * f,
                  u.vx += (c *= m) * (s = (o *= o) / (y + o)),
                  u.vy += (d *= m) * s,
                  a.vx -= c * (s = 1 - s),
                  a.vy -= d * s)
              }
            }
          }
          for (var t, r, u, h, p, v, y, m = o.length, g = 0; g < d; ++g)
            for (r = (0,
              c.quadtree)(o, i, a).visitAfter(n),
              t = 0; t < m; ++t)
              u = o[t],
                v = s[u.index],
                y = v * v,
                h = u.x + u.vx,
                p = u.y + u.vy,
                r.visit(e)
        }
        function n(e) {
          if (e.data)
            return e.r = s[e.data.index];
          for (var t = e.r = 0; t < 4; ++t)
            e[t] && e[t].r > e.r && (e.r = e[t].r)
        }
        function r() {
          if (o) {
            var t, n, r = o.length;
            for (s = new Array(r),
              t = 0; t < r; ++t)
              n = o[t],
                s[n.index] = +e(n, t, o)
          }
        }
        var o, s, f = 1, d = 1;
        return "function" != typeof e && (e = (0,
          u.default)(null == e ? 1 : +e)),
          t.initialize = function (e) {
            o = e,
              r()
          }
          ,
          t.iterations = function (e) {
            return arguments.length ? (d = +e,
              t) : d
          }
          ,
          t.strength = function (e) {
            return arguments.length ? (f = +e,
              t) : f
          }
          ,
          t.radius = function (n) {
            return arguments.length ? (e = "function" == typeof n ? n : (0,
              u.default)(+n),
              r(),
              t) : e
          }
          ,
          t
      }
      ;
    var o = n(203)
      , u = r(o)
      , s = n(413)
      , l = r(s)
      , c = n(414);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e, t, n) {
      var r = new a(null == t ? j.defaultX : t, null == n ? k.defaultY : n, NaN, NaN, NaN, NaN);
      return null == e ? r : r.addAll(e)
    }
    function a(e, t, n, r, i, a) {
      this._x = e,
        this._y = t,
        this._x0 = n,
        this._y0 = r,
        this._x1 = i,
        this._y1 = a,
        this._root = void 0
    }
    function o(e) {
      for (var t = {
        data: e.data
      }, n = t; e = e.next;)
        n = n.next = {
          data: e.data
        };
      return t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = i;
    var u = n(1592)
      , s = r(u)
      , l = n(1593)
      , c = r(l)
      , f = n(1594)
      , d = r(f)
      , h = n(1595)
      , p = r(h)
      , v = n(1596)
      , y = r(v)
      , m = n(1597)
      , g = r(m)
      , b = n(1598)
      , _ = r(b)
      , x = n(1599)
      , w = r(x)
      , P = n(1600)
      , M = r(P)
      , O = n(1601)
      , E = r(O)
      , j = n(1602)
      , S = r(j)
      , k = n(1603)
      , C = r(k)
      , T = i.prototype = a.prototype;
    T.copy = function () {
      var e, t, n = new a(this._x, this._y, this._x0, this._y0, this._x1, this._y1), r = this._root;
      if (!r)
        return n;
      if (!r.length)
        return n._root = o(r),
          n;
      for (e = [{
        source: r,
        target: n._root = new Array(4)
      }]; r = e.pop();)
        for (var i = 0; i < 4; ++i)
          (t = r.source[i]) && (t.length ? e.push({
            source: t,
            target: r.target[i] = new Array(4)
          }) : r.target[i] = o(t));
      return n
    }
      ,
      T.add = s.default,
      T.addAll = u.addAll,
      T.cover = c.default,
      T.data = d.default,
      T.extent = p.default,
      T.find = y.default,
      T.remove = g.default,
      T.removeAll = m.removeAll,
      T.root = _.default,
      T.size = w.default,
      T.visit = M.default,
      T.visitAfter = E.default,
      T.x = S.default,
      T.y = C.default,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n, r) {
      if (isNaN(t) || isNaN(n))
        return e;
      var i, a, o, u, s, l, c, f, d, h = e._root, p = {
        data: r
      }, v = e._x0, y = e._y0, m = e._x1, g = e._y1;
      if (!h)
        return e._root = p,
          e;
      for (; h.length;)
        if ((l = t >= (a = (v + m) / 2)) ? v = a : m = a,
          (c = n >= (o = (y + g) / 2)) ? y = o : g = o,
          i = h,
          !(h = h[f = c << 1 | l]))
          return i[f] = p,
            e;
      if (u = +e._x.call(null, h.data),
        s = +e._y.call(null, h.data),
        t === u && n === s)
        return p.next = h,
          i ? i[f] = p : e._root = p,
          e;
      do {
        i = i ? i[f] = new Array(4) : e._root = new Array(4),
          (l = t >= (a = (v + m) / 2)) ? v = a : m = a,
          (c = n >= (o = (y + g) / 2)) ? y = o : g = o
      } while ((f = c << 1 | l) == (d = (s >= o) << 1 | u >= a)); return i[d] = h,
        i[f] = p,
        e
    }
    function i(e) {
      var t, n, i, a, o = e.length, u = new Array(o), s = new Array(o), l = 1 / 0, c = 1 / 0, f = -1 / 0, d = -1 / 0;
      for (n = 0; n < o; ++n)
        isNaN(i = +this._x.call(null, t = e[n])) || isNaN(a = +this._y.call(null, t)) || (u[n] = i,
          s[n] = a,
          i < l && (l = i),
          i > f && (f = i),
          a < c && (c = a),
          a > d && (d = a));
      for (f < l && (l = this._x0,
        f = this._x1),
        d < c && (c = this._y0,
          d = this._y1),
        this.cover(l, c).cover(f, d),
        n = 0; n < o; ++n)
        r(this, u[n], s[n], e[n]);
      return this
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        var t = +this._x.call(null, e)
          , n = +this._y.call(null, e);
        return r(this.cover(t, n), t, n, e)
      }
      ,
      t.addAll = i
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        if (isNaN(e = +e) || isNaN(t = +t))
          return this;
        var n = this._x0
          , r = this._y0
          , i = this._x1
          , a = this._y1;
        if (isNaN(n))
          i = (n = Math.floor(e)) + 1,
            a = (r = Math.floor(t)) + 1;
        else {
          if (!(n > e || e > i || r > t || t > a))
            return this;
          var o, u, s = i - n, l = this._root;
          switch (u = (t < (r + a) / 2) << 1 | e < (n + i) / 2) {
            case 0:
              do {
                o = new Array(4),
                  o[u] = l,
                  l = o
              } while (s *= 2,
              i = n + s,
              a = r + s,
                e > i || t > a); break;
            case 1:
              do {
                o = new Array(4),
                  o[u] = l,
                  l = o
              } while (s *= 2,
              n = i - s,
              a = r + s,
                n > e || t > a); break;
            case 2:
              do {
                o = new Array(4),
                  o[u] = l,
                  l = o
              } while (s *= 2,
              i = n + s,
              r = a - s,
                e > i || r > t); break;
            case 3:
              do {
                o = new Array(4),
                  o[u] = l,
                  l = o
              } while (s *= 2,
              n = i - s,
              r = a - s,
                n > e || r > t)
          }
          this._root && this._root.length && (this._root = l)
        }
        return this._x0 = n,
          this._y0 = r,
          this._x1 = i,
          this._y1 = a,
          this
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        var e = [];
        return this.visit(function (t) {
          if (!t.length)
            do {
              e.push(t.data)
            } while (t = t.next)
        }),
          e
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return arguments.length ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]]
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n) {
        var r, a, o, u, s, l, c, f = this._x0, d = this._y0, h = this._x1, p = this._y1, v = [], y = this._root;
        for (y && v.push(new i.default(y, f, d, h, p)),
          null == n ? n = 1 / 0 : (f = e - n,
            d = t - n,
            h = e + n,
            p = t + n,
            n *= n); l = v.pop();)
          if (!(!(y = l.node) || (a = l.x0) > h || (o = l.y0) > p || (u = l.x1) < f || (s = l.y1) < d))
            if (y.length) {
              var m = (a + u) / 2
                , g = (o + s) / 2;
              v.push(new i.default(y[3], m, g, u, s), new i.default(y[2], a, g, m, s), new i.default(y[1], m, o, u, g), new i.default(y[0], a, o, m, g)),
                (c = (t >= g) << 1 | e >= m) && (l = v[v.length - 1],
                  v[v.length - 1] = v[v.length - 1 - c],
                  v[v.length - 1 - c] = l)
            } else {
              var b = e - +this._x.call(null, y.data)
                , _ = t - +this._y.call(null, y.data)
                , x = b * b + _ * _;
              if (x < n) {
                var w = Math.sqrt(n = x);
                f = e - w,
                  d = t - w,
                  h = e + w,
                  p = t + w,
                  r = y.data
              }
            }
        return r
      }
      ;
    var r = n(415)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      for (var t = 0, n = e.length; t < n; ++t)
        this.remove(e[t]);
      return this
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        if (isNaN(a = +this._x.call(null, e)) || isNaN(o = +this._y.call(null, e)))
          return this;
        var t, n, r, i, a, o, u, s, l, c, f, d, h = this._root, p = this._x0, v = this._y0, y = this._x1, m = this._y1;
        if (!h)
          return this;
        if (h.length)
          for (; ;) {
            if ((l = a >= (u = (p + y) / 2)) ? p = u : y = u,
              (c = o >= (s = (v + m) / 2)) ? v = s : m = s,
              t = h,
              !(h = h[f = c << 1 | l]))
              return this;
            if (!h.length)
              break;
            (t[f + 1 & 3] || t[f + 2 & 3] || t[f + 3 & 3]) && (n = t,
              d = f)
          }
        for (; h.data !== e;)
          if (r = h,
            !(h = h.next))
            return this;
        return (i = h.next) && delete h.next,
          r ? (i ? r.next = i : delete r.next,
            this) : t ? (i ? t[f] = i : delete t[f],
              (h = t[0] || t[1] || t[2] || t[3]) && h === (t[3] || t[2] || t[1] || t[0]) && !h.length && (n ? n[d] = h : this._root = h),
              this) : (this._root = i,
                this)
      }
      ,
      t.removeAll = r
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        return this._root
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        var e = 0;
        return this.visit(function (t) {
          if (!t.length)
            do {
              ++e
            } while (t = t.next)
        }),
          e
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        var t, n, r, a, o, u, s = [], l = this._root;
        for (l && s.push(new i.default(l, this._x0, this._y0, this._x1, this._y1)); t = s.pop();)
          if (!e(l = t.node, r = t.x0, a = t.y0, o = t.x1, u = t.y1) && l.length) {
            var c = (r + o) / 2
              , f = (a + u) / 2;
            (n = l[3]) && s.push(new i.default(n, c, f, o, u)),
              (n = l[2]) && s.push(new i.default(n, r, f, c, u)),
              (n = l[1]) && s.push(new i.default(n, c, a, o, f)),
              (n = l[0]) && s.push(new i.default(n, r, a, c, f))
          }
        return this
      }
      ;
    var r = n(415)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        var t, n = [], r = [];
        for (this._root && n.push(new i.default(this._root, this._x0, this._y0, this._x1, this._y1)); t = n.pop();) {
          var a = t.node;
          if (a.length) {
            var o, u = t.x0, s = t.y0, l = t.x1, c = t.y1, f = (u + l) / 2, d = (s + c) / 2;
            (o = a[0]) && n.push(new i.default(o, u, s, f, d)),
              (o = a[1]) && n.push(new i.default(o, f, s, l, d)),
              (o = a[2]) && n.push(new i.default(o, u, d, f, c)),
              (o = a[3]) && n.push(new i.default(o, f, d, l, c))
          }
          r.push(t)
        }
        for (; t = r.pop();)
          e(t.node, t.x0, t.y0, t.x1, t.y1);
        return this
      }
      ;
    var r = n(415)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e[0]
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.defaultX = r,
      t.default = function (e) {
        return arguments.length ? (this._x = e,
          this) : this._x
      }
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e[1]
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.defaultY = r,
      t.default = function (e) {
        return arguments.length ? (this._y = e,
          this) : this._y
      }
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e) {
      return e.index
    }
    function a(e, t) {
      var n = e.get(t);
      if (!n)
        throw new Error("missing: " + t);
      return n
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    }
      : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      ;
    t.default = function (e) {
      function t(e) {
        return 1 / Math.min(v[e.source.index], v[e.target.index])
      }
      function n(t) {
        for (var n = 0, r = e.length; n < _; ++n)
          for (var i, a, o, u, s, l, f, p = 0; p < r; ++p)
            i = e[p],
              a = i.source,
              o = i.target,
              u = o.x + o.vx - a.x - a.vx || (0,
                c.default)(),
              s = o.y + o.vy - a.y - a.vy || (0,
                c.default)(),
              l = Math.sqrt(u * u + s * s),
              l = (l - h[p]) / l * t * d[p],
              u *= l,
              s *= l,
              o.vx -= u * (f = y[p]),
              o.vy -= s * f,
              a.vx += u * (f = 1 - f),
              a.vy += s * f
      }
      function r() {
        if (p) {
          var t, n, r = p.length, i = e.length, s = (0,
            f.map)(p, m);
          for (t = 0,
            v = new Array(r); t < i; ++t)
            n = e[t],
              n.index = t,
              "object" !== o(n.source) && (n.source = a(s, n.source)),
              "object" !== o(n.target) && (n.target = a(s, n.target)),
              v[n.source.index] = (v[n.source.index] || 0) + 1,
              v[n.target.index] = (v[n.target.index] || 0) + 1;
          for (t = 0,
            y = new Array(i); t < i; ++t)
            n = e[t],
              y[t] = v[n.source.index] / (v[n.source.index] + v[n.target.index]);
          d = new Array(i),
            u(),
            h = new Array(i),
            l()
        }
      }
      function u() {
        if (p)
          for (var t = 0, n = e.length; t < n; ++t)
            d[t] = +g(e[t], t, e)
      }
      function l() {
        if (p)
          for (var t = 0, n = e.length; t < n; ++t)
            h[t] = +b(e[t], t, e)
      }
      var d, h, p, v, y, m = i, g = t, b = (0,
        s.default)(30), _ = 1;
      return null == e && (e = []),
        n.initialize = function (e) {
          p = e,
            r()
        }
        ,
        n.links = function (t) {
          return arguments.length ? (e = t,
            r(),
            n) : e
        }
        ,
        n.id = function (e) {
          return arguments.length ? (m = e,
            n) : m
        }
        ,
        n.iterations = function (e) {
          return arguments.length ? (_ = +e,
            n) : _
        }
        ,
        n.strength = function (e) {
          return arguments.length ? (g = "function" == typeof e ? e : (0,
            s.default)(+e),
            u(),
            n) : g
        }
        ,
        n.distance = function (e) {
          return arguments.length ? (b = "function" == typeof e ? e : (0,
            s.default)(+e),
            l(),
            n) : b
        }
        ,
        n
    }
      ;
    var u = n(203)
      , s = r(u)
      , l = n(413)
      , c = r(l)
      , f = n(223);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        function e(e) {
          var t, a = i.length, u = (0,
            s.quadtree)(i, l.x, l.y).visitAfter(n);
          for (c = e,
            t = 0; t < a; ++t)
            o = i[t],
              u.visit(r)
        }
        function t() {
          if (i) {
            var e, t, n = i.length;
            for (f = new Array(n),
              e = 0; e < n; ++e)
              t = i[e],
                f[t.index] = +d(t, e, i)
          }
        }
        function n(e) {
          var t, n, r, i, a, o = 0, u = 0;
          if (e.length) {
            for (r = i = a = 0; a < 4; ++a)
              (t = e[a]) && (n = Math.abs(t.value)) && (o += t.value,
                u += n,
                r += n * t.x,
                i += n * t.y);
            e.x = r / u,
              e.y = i / u
          } else {
            t = e,
              t.x = t.data.x,
              t.y = t.data.y;
            do {
              o += f[t.data.index]
            } while (t = t.next)
          }
          e.value = o
        }
        function r(e, t, n, r) {
          if (!e.value)
            return !0;
          var i = e.x - o.x
            , a = e.y - o.y
            , s = r - t
            , l = i * i + a * a;
          if (s * s / v < l)
            return l < p && (0 === i && (i = (0,
              u.default)(),
              l += i * i),
              0 === a && (a = (0,
                u.default)(),
                l += a * a),
              l < h && (l = Math.sqrt(h * l)),
              o.vx += i * e.value * c / l,
              o.vy += a * e.value * c / l),
              !0;
          if (!(e.length || l >= p)) {
            (e.data !== o || e.next) && (0 === i && (i = (0,
              u.default)(),
              l += i * i),
              0 === a && (a = (0,
                u.default)(),
                l += a * a),
              l < h && (l = Math.sqrt(h * l)));
            do {
              e.data !== o && (s = f[e.data.index] * c / l,
                o.vx += i * s,
                o.vy += a * s)
            } while (e = e.next)
          }
        }
        var i, o, c, f, d = (0,
          a.default)(-30), h = 1, p = 1 / 0, v = .81;
        return e.initialize = function (e) {
          i = e,
            t()
        }
          ,
          e.strength = function (n) {
            return arguments.length ? (d = "function" == typeof n ? n : (0,
              a.default)(+n),
              t(),
              e) : d
          }
          ,
          e.distanceMin = function (t) {
            return arguments.length ? (h = t * t,
              e) : Math.sqrt(h)
          }
          ,
          e.distanceMax = function (t) {
            return arguments.length ? (p = t * t,
              e) : Math.sqrt(p)
          }
          ,
          e.theta = function (t) {
            return arguments.length ? (v = t * t,
              e) : Math.sqrt(v)
          }
          ,
          e
      }
      ;
    var i = n(203)
      , a = r(i)
      , o = n(413)
      , u = r(o)
      , s = n(414)
      , l = n(730);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n) {
        function r(e) {
          for (var r = 0, i = o.length; r < i; ++r) {
            var a = o[r]
              , l = a.x - t || 1e-6
              , c = a.y - n || 1e-6
              , f = Math.sqrt(l * l + c * c)
              , d = (s[r] - f) * u[r] * e / f;
            a.vx += l * d,
              a.vy += c * d
          }
        }
        function a() {
          if (o) {
            var t, n = o.length;
            for (u = new Array(n),
              s = new Array(n),
              t = 0; t < n; ++t)
              s[t] = +e(o[t], t, o),
                u[t] = isNaN(s[t]) ? 0 : +l(o[t], t, o)
          }
        }
        var o, u, s, l = (0,
          i.default)(.1);
        return "function" != typeof e && (e = (0,
          i.default)(+e)),
          null == t && (t = 0),
          null == n && (n = 0),
          r.initialize = function (e) {
            o = e,
              a()
          }
          ,
          r.strength = function (e) {
            return arguments.length ? (l = "function" == typeof e ? e : (0,
              i.default)(+e),
              a(),
              r) : l
          }
          ,
          r.radius = function (t) {
            return arguments.length ? (e = "function" == typeof t ? t : (0,
              i.default)(+t),
              a(),
              r) : e
          }
          ,
          r.x = function (e) {
            return arguments.length ? (t = +e,
              r) : t
          }
          ,
          r.y = function (e) {
            return arguments.length ? (n = +e,
              r) : n
          }
          ,
          r
      }
      ;
    var r = n(203)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        function t(e) {
          for (var t, n = 0, i = r.length; n < i; ++n)
            t = r[n],
              t.vx += (o[n] - t.x) * a[n] * e
        }
        function n() {
          if (r) {
            var t, n = r.length;
            for (a = new Array(n),
              o = new Array(n),
              t = 0; t < n; ++t)
              a[t] = isNaN(o[t] = +e(r[t], t, r)) ? 0 : +u(r[t], t, r)
          }
        }
        var r, a, o, u = (0,
          i.default)(.1);
        return "function" != typeof e && (e = (0,
          i.default)(null == e ? 0 : +e)),
          t.initialize = function (e) {
            r = e,
              n()
          }
          ,
          t.strength = function (e) {
            return arguments.length ? (u = "function" == typeof e ? e : (0,
              i.default)(+e),
              n(),
              t) : u
          }
          ,
          t.x = function (r) {
            return arguments.length ? (e = "function" == typeof r ? r : (0,
              i.default)(+r),
              n(),
              t) : e
          }
          ,
          t
      }
      ;
    var r = n(203)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        function t(e) {
          for (var t, n = 0, i = r.length; n < i; ++n)
            t = r[n],
              t.vy += (o[n] - t.y) * a[n] * e
        }
        function n() {
          if (r) {
            var t, n = r.length;
            for (a = new Array(n),
              o = new Array(n),
              t = 0; t < n; ++t)
              a[t] = isNaN(o[t] = +e(r[t], t, r)) ? 0 : +u(r[t], t, r)
          }
        }
        var r, a, o, u = (0,
          i.default)(.1);
        return "function" != typeof e && (e = (0,
          i.default)(null == e ? 0 : +e)),
          t.initialize = function (e) {
            r = e,
              n()
          }
          ,
          t.strength = function (e) {
            return arguments.length ? (u = "function" == typeof e ? e : (0,
              i.default)(+e),
              n(),
              t) : u
          }
          ,
          t.y = function (r) {
            return arguments.length ? (e = "function" == typeof r ? r : (0,
              i.default)(+r),
              n(),
              t) : e
          }
          ,
          t
      }
      ;
    var r = n(203)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return i = (0,
        o.default)(e),
        t.format = u = i.format,
        t.formatPrefix = s = i.formatPrefix,
        i
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.formatPrefix = t.format = void 0,
      t.default = r;
    var i, a = n(731), o = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(a), u = t.format = void 0, s = t.formatPrefix = void 0;
    r({
      decimal: ".",
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    })
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        return function (n, r) {
          for (var i = n.length, a = [], o = 0, u = e[0], s = 0; i > 0 && u > 0 && (s + u + 1 > r && (u = Math.max(1, r - s)),
            a.push(n.substring(i -= u, i + u)),
            !((s += u + 1) > r));)
            u = e[o = (o + 1) % e.length];
          return a.reverse().join(t)
        }
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return function (t) {
          return t.replace(/[0-9]/g, function (t) {
            return e[+t]
          })
        }
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        e = e.toPrecision(t);
        e: for (var n, r = e.length, i = 1, a = -1; i < r; ++i)
          switch (e[i]) {
            case ".":
              a = n = i;
              break;
            case "0":
              0 === a && (a = i),
                n = i;
              break;
            case "e":
              break e;
            default:
              a > 0 && (a = 0)
          }
        return a > 0 ? e.slice(0, a) + e.slice(n + 1) : e
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n = (0,
          i.default)(e, t);
        if (!n)
          return e + "";
        var r = n[0]
          , a = n[1];
        return a < 0 ? "0." + new Array(-a).join("0") + r : r.length > a + 1 ? r.slice(0, a + 1) + "." + r.slice(a + 1) : r + new Array(a - r.length + 2).join("0")
      }
      ;
    var r = n(417)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return e
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return Math.max(0, -(0,
          i.default)(Math.abs(e)))
      }
      ;
    var r = n(315)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor((0,
          i.default)(t) / 3))) - (0,
            i.default)(Math.abs(e)))
      }
      ;
    var r = n(315)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        return e = Math.abs(e),
          t = Math.abs(t) - e,
          Math.max(0, (0,
            i.default)(t) - (0,
              i.default)(e)) + 1
      }
      ;
    var r = n(315)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(735);
    Object.defineProperty(t, "geoArea", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    });
    var a = n(1619);
    Object.defineProperty(t, "geoBounds", {
      enumerable: !0,
      get: function () {
        return r(a).default
      }
    });
    var o = n(1620);
    Object.defineProperty(t, "geoCentroid", {
      enumerable: !0,
      get: function () {
        return r(o).default
      }
    });
    var u = n(736);
    Object.defineProperty(t, "geoCircle", {
      enumerable: !0,
      get: function () {
        return r(u).default
      }
    });
    var s = n(738);
    Object.defineProperty(t, "geoClipAntimeridian", {
      enumerable: !0,
      get: function () {
        return r(s).default
      }
    });
    var l = n(744);
    Object.defineProperty(t, "geoClipCircle", {
      enumerable: !0,
      get: function () {
        return r(l).default
      }
    });
    var c = n(1622);
    Object.defineProperty(t, "geoClipExtent", {
      enumerable: !0,
      get: function () {
        return r(c).default
      }
    });
    var f = n(317);
    Object.defineProperty(t, "geoClipRectangle", {
      enumerable: !0,
      get: function () {
        return r(f).default
      }
    });
    var d = n(1624);
    Object.defineProperty(t, "geoContains", {
      enumerable: !0,
      get: function () {
        return r(d).default
      }
    });
    var h = n(745);
    Object.defineProperty(t, "geoDistance", {
      enumerable: !0,
      get: function () {
        return r(h).default
      }
    });
    var p = n(1625);
    Object.defineProperty(t, "geoGraticule", {
      enumerable: !0,
      get: function () {
        return r(p).default
      }
    }),
      Object.defineProperty(t, "geoGraticule10", {
        enumerable: !0,
        get: function () {
          return p.graticule10
        }
      });
    var v = n(1626);
    Object.defineProperty(t, "geoInterpolate", {
      enumerable: !0,
      get: function () {
        return r(v).default
      }
    });
    var y = n(746);
    Object.defineProperty(t, "geoLength", {
      enumerable: !0,
      get: function () {
        return r(y).default
      }
    });
    var m = n(1627);
    Object.defineProperty(t, "geoPath", {
      enumerable: !0,
      get: function () {
        return r(m).default
      }
    });
    var g = n(748);
    Object.defineProperty(t, "geoAlbers", {
      enumerable: !0,
      get: function () {
        return r(g).default
      }
    });
    var b = n(1635);
    Object.defineProperty(t, "geoAlbersUsa", {
      enumerable: !0,
      get: function () {
        return r(b).default
      }
    });
    var _ = n(1636);
    Object.defineProperty(t, "geoAzimuthalEqualArea", {
      enumerable: !0,
      get: function () {
        return r(_).default
      }
    }),
      Object.defineProperty(t, "geoAzimuthalEqualAreaRaw", {
        enumerable: !0,
        get: function () {
          return _.azimuthalEqualAreaRaw
        }
      });
    var x = n(1637);
    Object.defineProperty(t, "geoAzimuthalEquidistant", {
      enumerable: !0,
      get: function () {
        return r(x).default
      }
    }),
      Object.defineProperty(t, "geoAzimuthalEquidistantRaw", {
        enumerable: !0,
        get: function () {
          return x.azimuthalEquidistantRaw
        }
      });
    var w = n(1638);
    Object.defineProperty(t, "geoConicConformal", {
      enumerable: !0,
      get: function () {
        return r(w).default
      }
    }),
      Object.defineProperty(t, "geoConicConformalRaw", {
        enumerable: !0,
        get: function () {
          return w.conicConformalRaw
        }
      });
    var P = n(419);
    Object.defineProperty(t, "geoConicEqualArea", {
      enumerable: !0,
      get: function () {
        return r(P).default
      }
    }),
      Object.defineProperty(t, "geoConicEqualAreaRaw", {
        enumerable: !0,
        get: function () {
          return P.conicEqualAreaRaw
        }
      });
    var M = n(1639);
    Object.defineProperty(t, "geoConicEquidistant", {
      enumerable: !0,
      get: function () {
        return r(M).default
      }
    }),
      Object.defineProperty(t, "geoConicEquidistantRaw", {
        enumerable: !0,
        get: function () {
          return M.conicEquidistantRaw
        }
      });
    var O = n(749);
    Object.defineProperty(t, "geoEquirectangular", {
      enumerable: !0,
      get: function () {
        return r(O).default
      }
    }),
      Object.defineProperty(t, "geoEquirectangularRaw", {
        enumerable: !0,
        get: function () {
          return O.equirectangularRaw
        }
      });
    var E = n(1640);
    Object.defineProperty(t, "geoGnomonic", {
      enumerable: !0,
      get: function () {
        return r(E).default
      }
    }),
      Object.defineProperty(t, "geoGnomonicRaw", {
        enumerable: !0,
        get: function () {
          return E.gnomonicRaw
        }
      });
    var j = n(1641);
    Object.defineProperty(t, "geoIdentity", {
      enumerable: !0,
      get: function () {
        return r(j).default
      }
    });
    var S = n(139);
    Object.defineProperty(t, "geoProjection", {
      enumerable: !0,
      get: function () {
        return r(S).default
      }
    }),
      Object.defineProperty(t, "geoProjectionMutator", {
        enumerable: !0,
        get: function () {
          return S.projectionMutator
        }
      });
    var k = n(422);
    Object.defineProperty(t, "geoMercator", {
      enumerable: !0,
      get: function () {
        return r(k).default
      }
    }),
      Object.defineProperty(t, "geoMercatorRaw", {
        enumerable: !0,
        get: function () {
          return k.mercatorRaw
        }
      });
    var C = n(1642);
    Object.defineProperty(t, "geoNaturalEarth1", {
      enumerable: !0,
      get: function () {
        return r(C).default
      }
    }),
      Object.defineProperty(t, "geoNaturalEarth1Raw", {
        enumerable: !0,
        get: function () {
          return C.naturalEarth1Raw
        }
      });
    var T = n(1643);
    Object.defineProperty(t, "geoOrthographic", {
      enumerable: !0,
      get: function () {
        return r(T).default
      }
    }),
      Object.defineProperty(t, "geoOrthographicRaw", {
        enumerable: !0,
        get: function () {
          return T.orthographicRaw
        }
      });
    var N = n(1644);
    Object.defineProperty(t, "geoStereographic", {
      enumerable: !0,
      get: function () {
        return r(N).default
      }
    }),
      Object.defineProperty(t, "geoStereographicRaw", {
        enumerable: !0,
        get: function () {
          return N.stereographicRaw
        }
      });
    var D = n(1645);
    Object.defineProperty(t, "geoTransverseMercator", {
      enumerable: !0,
      get: function () {
        return r(D).default
      }
    }),
      Object.defineProperty(t, "geoTransverseMercatorRaw", {
        enumerable: !0,
        get: function () {
          return D.transverseMercatorRaw
        }
      });
    var A = n(316);
    Object.defineProperty(t, "geoRotation", {
      enumerable: !0,
      get: function () {
        return r(A).default
      }
    });
    var L = n(170);
    Object.defineProperty(t, "geoStream", {
      enumerable: !0,
      get: function () {
        return r(L).default
      }
    });
    var I = n(318);
    Object.defineProperty(t, "geoTransform", {
      enumerable: !0,
      get: function () {
        return r(I).default
      }
    })
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e, t) {
      w.push(P = [p = e, y = e]),
        t < v && (v = t),
        t > m && (m = t)
    }
    function a(e, t) {
      var n = (0,
        j.cartesian)([e * S.radians, t * S.radians]);
      if (x) {
        var r = (0,
          j.cartesianCross)(x, n)
          , i = [r[1], -r[0], 0]
          , a = (0,
            j.cartesianCross)(i, r);
        (0,
          j.cartesianNormalizeInPlace)(a),
          a = (0,
            j.spherical)(a);
        var o, u = e - g, s = u > 0 ? 1 : -1, l = a[0] * S.degrees * s, c = (0,
          S.abs)(u) > 180;
        c ^ (s * g < l && l < s * e) ? (o = a[1] * S.degrees) > m && (m = o) : (l = (l + 360) % 360 - 180,
          c ^ (s * g < l && l < s * e) ? (o = -a[1] * S.degrees) < v && (v = o) : (t < v && (v = t),
            t > m && (m = t))),
          c ? e < g ? f(p, e) > f(p, y) && (y = e) : f(e, y) > f(p, y) && (p = e) : y >= p ? (e < p && (p = e),
            e > y && (y = e)) : e > g ? f(p, e) > f(p, y) && (y = e) : f(e, y) > f(p, y) && (p = e)
      } else
        w.push(P = [p = e, y = e]);
      t < v && (v = t),
        t > m && (m = t),
        x = n,
        g = e
    }
    function o() {
      N.point = a
    }
    function u() {
      P[0] = p,
        P[1] = y,
        N.point = i,
        x = null
    }
    function s(e, t) {
      if (x) {
        var n = e - g;
        T.add((0,
          S.abs)(n) > 180 ? n + (n > 0 ? 360 : -360) : n)
      } else
        b = e,
          _ = t;
      E.areaStream.point(e, t),
        a(e, t)
    }
    function l() {
      E.areaStream.lineStart()
    }
    function c() {
      s(b, _),
        E.areaStream.lineEnd(),
        (0,
          S.abs)(T) > S.epsilon && (p = -(y = 180)),
        P[0] = p,
        P[1] = y,
        x = null
    }
    function f(e, t) {
      return (t -= e) < 0 ? t + 360 : t
    }
    function d(e, t) {
      return e[0] - t[0]
    }
    function h(e, t) {
      return e[0] <= e[1] ? e[0] <= t && t <= e[1] : t < e[0] || e[1] < t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        var t, n, r, i, a, o, u;
        if (m = y = -(p = v = 1 / 0),
          w = [],
          (0,
            C.default)(e, N),
          n = w.length) {
          for (w.sort(d),
            t = 1,
            r = w[0],
            a = [r]; t < n; ++t)
            i = w[t],
              h(r, i[0]) || h(r, i[1]) ? (f(r[0], i[1]) > f(r[0], r[1]) && (r[1] = i[1]),
                f(i[0], r[1]) > f(r[0], r[1]) && (r[0] = i[0])) : a.push(r = i);
          for (o = -1 / 0,
            n = a.length - 1,
            t = 0,
            r = a[n]; t <= n; r = i,
            ++t)
            i = a[t],
              (u = f(r[1], i[0])) > o && (o = u,
                p = i[0],
                y = r[1])
        }
        return w = P = null,
          p === 1 / 0 || v === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[p, v], [y, m]]
      }
      ;
    var p, v, y, m, g, b, _, x, w, P, M = n(204), O = r(M), E = n(735), j = n(224), S = n(31), k = n(170), C = r(k), T = (0,
      O.default)(), N = {
        point: i,
        lineStart: o,
        lineEnd: u,
        polygonStart: function () {
          N.point = s,
            N.lineStart = l,
            N.lineEnd = c,
            T.reset(),
            E.areaStream.polygonStart()
        },
        polygonEnd: function () {
          E.areaStream.polygonEnd(),
            N.point = i,
            N.lineStart = o,
            N.lineEnd = u,
            E.areaRingSum < 0 ? (p = -(y = 180),
              v = -(m = 90)) : T > S.epsilon ? m = 90 : T < -S.epsilon && (v = -90),
            P[0] = p,
            P[1] = y
        }
      };
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e, t) {
      e *= C.radians,
        t *= C.radians;
      var n = (0,
        C.cos)(t);
      a(n * (0,
        C.cos)(e), n * (0,
          C.sin)(e), (0,
            C.sin)(t))
    }
    function a(e, t, n) {
      ++p,
        y += (e - y) / p,
        m += (t - m) / p,
        g += (n - g) / p
    }
    function o() {
      L.point = u
    }
    function u(e, t) {
      e *= C.radians,
        t *= C.radians;
      var n = (0,
        C.cos)(t);
      j = n * (0,
        C.cos)(e),
        S = n * (0,
          C.sin)(e),
        k = (0,
          C.sin)(t),
        L.point = s,
        a(j, S, k)
    }
    function s(e, t) {
      e *= C.radians,
        t *= C.radians;
      var n = (0,
        C.cos)(t)
        , r = n * (0,
          C.cos)(e)
        , i = n * (0,
          C.sin)(e)
        , o = (0,
          C.sin)(t)
        , u = (0,
          C.atan2)((0,
            C.sqrt)((u = S * o - k * i) * u + (u = k * r - j * o) * u + (u = j * i - S * r) * u), j * r + S * i + k * o);
      v += u,
        b += u * (j + (j = r)),
        _ += u * (S + (S = i)),
        x += u * (k + (k = o)),
        a(j, S, k)
    }
    function l() {
      L.point = i
    }
    function c() {
      L.point = d
    }
    function f() {
      h(O, E),
        L.point = i
    }
    function d(e, t) {
      O = e,
        E = t,
        e *= C.radians,
        t *= C.radians,
        L.point = h;
      var n = (0,
        C.cos)(t);
      j = n * (0,
        C.cos)(e),
        S = n * (0,
          C.sin)(e),
        k = (0,
          C.sin)(t),
        a(j, S, k)
    }
    function h(e, t) {
      e *= C.radians,
        t *= C.radians;
      var n = (0,
        C.cos)(t)
        , r = n * (0,
          C.cos)(e)
        , i = n * (0,
          C.sin)(e)
        , o = (0,
          C.sin)(t)
        , u = S * o - k * i
        , s = k * r - j * o
        , l = j * i - S * r
        , c = (0,
          C.sqrt)(u * u + s * s + l * l)
        , f = (0,
          C.asin)(c)
        , d = c && -f / c;
      w += d * u,
        P += d * s,
        M += d * l,
        v += f,
        b += f * (j + (j = r)),
        _ += f * (S + (S = i)),
        x += f * (k + (k = o)),
        a(j, S, k)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        p = v = y = m = g = b = _ = x = w = P = M = 0,
          (0,
            A.default)(e, L);
        var t = w
          , n = P
          , r = M
          , i = t * t + n * n + r * r;
        return i < C.epsilon2 && (t = b,
          n = _,
          r = x,
          v < C.epsilon && (t = y,
            n = m,
            r = g),
          (i = t * t + n * n + r * r) < C.epsilon2) ? [NaN, NaN] : [(0,
            C.atan2)(n, t) * C.degrees, (0,
              C.asin)(r / (0,
                C.sqrt)(i)) * C.degrees]
      }
      ;
    var p, v, y, m, g, b, _, x, w, P, M, O, E, j, S, k, C = n(31), T = n(153), N = r(T), D = n(170), A = r(D), L = {
      sphere: N.default,
      point: i,
      lineStart: o,
      lineEnd: l,
      polygonStart: function () {
        L.lineStart = c,
          L.lineEnd = f
      },
      polygonEnd: function () {
        L.lineStart = o,
          L.lineEnd = l
      }
    };
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return function () {
          return e
        }
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        var e, t, n, r = 0, a = 0, o = 960, u = 500;
        return n = {
          stream: function (n) {
            return e && t === n ? e : e = (0,
              i.default)(r, a, o, u)(t = n)
          },
          extent: function (i) {
            return arguments.length ? (r = +i[0][0],
              a = +i[0][1],
              o = +i[1][0],
              u = +i[1][1],
              e = t = null,
              n) : [[r, a], [o, u]]
          }
        }
      }
      ;
    var r = n(317)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n, r, i, a) {
        var o, u = e[0], s = e[1], l = t[0], c = t[1], f = 0, d = 1, h = l - u, p = c - s;
        if (o = n - u,
          h || !(o > 0)) {
          if (o /= h,
            h < 0) {
            if (o < f)
              return;
            o < d && (d = o)
          } else if (h > 0) {
            if (o > d)
              return;
            o > f && (f = o)
          }
          if (o = i - u,
            h || !(o < 0)) {
            if (o /= h,
              h < 0) {
              if (o > d)
                return;
              o > f && (f = o)
            } else if (h > 0) {
              if (o < f)
                return;
              o < d && (d = o)
            }
            if (o = r - s,
              p || !(o > 0)) {
              if (o /= p,
                p < 0) {
                if (o < f)
                  return;
                o < d && (d = o)
              } else if (p > 0) {
                if (o > d)
                  return;
                o > f && (f = o)
              }
              if (o = a - s,
                p || !(o < 0)) {
                if (o /= p,
                  p < 0) {
                  if (o > d)
                    return;
                  o > f && (f = o)
                } else if (p > 0) {
                  if (o < f)
                    return;
                  o < d && (d = o)
                }
                return f > 0 && (e[0] = u + f * h,
                  e[1] = s + f * p),
                  d < 1 && (t[0] = u + d * h,
                    t[1] = s + d * p),
                  !0
              }
            }
          }
        }
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e, t) {
      return !(!e || !y.hasOwnProperty(e.type)) && y[e.type](e, t)
    }
    function a(e, t) {
      return 0 === (0,
        h.default)(e, t)
    }
    function o(e, t) {
      var n = (0,
        h.default)(e[0], e[1]);
      return (0,
        h.default)(e[0], t) + (0,
          h.default)(t, e[1]) <= n + p.epsilon
    }
    function u(e, t) {
      return !!(0,
        f.default)(e.map(s), l(t))
    }
    function s(e) {
      return e = e.map(l),
        e.pop(),
        e
    }
    function l(e) {
      return [e[0] * p.radians, e[1] * p.radians]
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        return (e && v.hasOwnProperty(e.type) ? v[e.type] : i)(e, t)
      }
      ;
    var c = n(743)
      , f = r(c)
      , d = n(745)
      , h = r(d)
      , p = n(31)
      , v = {
        Feature: function (e, t) {
          return i(e.geometry, t)
        },
        FeatureCollection: function (e, t) {
          for (var n = e.features, r = -1, a = n.length; ++r < a;)
            if (i(n[r].geometry, t))
              return !0;
          return !1
        }
      }
      , y = {
        Sphere: function () {
          return !0
        },
        Point: function (e, t) {
          return a(e.coordinates, t)
        },
        MultiPoint: function (e, t) {
          for (var n = e.coordinates, r = -1, i = n.length; ++r < i;)
            if (a(n[r], t))
              return !0;
          return !1
        },
        LineString: function (e, t) {
          return o(e.coordinates, t)
        },
        MultiLineString: function (e, t) {
          for (var n = e.coordinates, r = -1, i = n.length; ++r < i;)
            if (o(n[r], t))
              return !0;
          return !1
        },
        Polygon: function (e, t) {
          return u(e.coordinates, t)
        },
        MultiPolygon: function (e, t) {
          for (var n = e.coordinates, r = -1, i = n.length; ++r < i;)
            if (u(n[r], t))
              return !0;
          return !1
        },
        GeometryCollection: function (e, t) {
          for (var n = e.geometries, r = -1, a = n.length; ++r < a;)
            if (i(n[r], t))
              return !0;
          return !1
        }
      };
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      var r = (0,
        u.range)(e, t - s.epsilon, n).concat(t);
      return function (e) {
        return r.map(function (t) {
          return [e, t]
        })
      }
    }
    function i(e, t, n) {
      var r = (0,
        u.range)(e, t - s.epsilon, n).concat(t);
      return function (e) {
        return r.map(function (t) {
          return [t, e]
        })
      }
    }
    function a() {
      function e() {
        return {
          type: "MultiLineString",
          coordinates: t()
        }
      }
      function t() {
        return (0,
          u.range)((0,
            s.ceil)(l / _) * _, o, _).map(y).concat((0,
              u.range)((0,
                s.ceil)(h / x) * x, d, x).map(m)).concat((0,
                  u.range)((0,
                    s.ceil)(a / g) * g, n, g).filter(function (e) {
                      return (0,
                        s.abs)(e % _) > s.epsilon
                    }).map(p)).concat((0,
                      u.range)((0,
                        s.ceil)(f / b) * b, c, b).filter(function (e) {
                          return (0,
                            s.abs)(e % x) > s.epsilon
                        }).map(v))
      }
      var n, a, o, l, c, f, d, h, p, v, y, m, g = 10, b = g, _ = 90, x = 360, w = 2.5;
      return e.lines = function () {
        return t().map(function (e) {
          return {
            type: "LineString",
            coordinates: e
          }
        })
      }
        ,
        e.outline = function () {
          return {
            type: "Polygon",
            coordinates: [y(l).concat(m(d).slice(1), y(o).reverse().slice(1), m(h).reverse().slice(1))]
          }
        }
        ,
        e.extent = function (t) {
          return arguments.length ? e.extentMajor(t).extentMinor(t) : e.extentMinor()
        }
        ,
        e.extentMajor = function (t) {
          return arguments.length ? (l = +t[0][0],
            o = +t[1][0],
            h = +t[0][1],
            d = +t[1][1],
            l > o && (t = l,
              l = o,
              o = t),
            h > d && (t = h,
              h = d,
              d = t),
            e.precision(w)) : [[l, h], [o, d]]
        }
        ,
        e.extentMinor = function (t) {
          return arguments.length ? (a = +t[0][0],
            n = +t[1][0],
            f = +t[0][1],
            c = +t[1][1],
            a > n && (t = a,
              a = n,
              n = t),
            f > c && (t = f,
              f = c,
              c = t),
            e.precision(w)) : [[a, f], [n, c]]
        }
        ,
        e.step = function (t) {
          return arguments.length ? e.stepMajor(t).stepMinor(t) : e.stepMinor()
        }
        ,
        e.stepMajor = function (t) {
          return arguments.length ? (_ = +t[0],
            x = +t[1],
            e) : [_, x]
        }
        ,
        e.stepMinor = function (t) {
          return arguments.length ? (g = +t[0],
            b = +t[1],
            e) : [g, b]
        }
        ,
        e.precision = function (t) {
          return arguments.length ? (w = +t,
            p = r(f, c, 90),
            v = i(a, n, w),
            y = r(h, d, 90),
            m = i(l, o, w),
            e) : w
        }
        ,
        e.extentMajor([[-180, -90 + s.epsilon], [180, 90 - s.epsilon]]).extentMinor([[-180, -80 - s.epsilon], [180, 80 + s.epsilon]])
    }
    function o() {
      return a()()
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = a,
      t.graticule10 = o;
    var u = n(84)
      , s = n(31)
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n = e[0] * r.radians
          , i = e[1] * r.radians
          , a = t[0] * r.radians
          , o = t[1] * r.radians
          , u = (0,
            r.cos)(i)
          , s = (0,
            r.sin)(i)
          , l = (0,
            r.cos)(o)
          , c = (0,
            r.sin)(o)
          , f = u * (0,
            r.cos)(n)
          , d = u * (0,
            r.sin)(n)
          , h = l * (0,
            r.cos)(a)
          , p = l * (0,
            r.sin)(a)
          , v = 2 * (0,
            r.asin)((0,
              r.sqrt)((0,
                r.haversin)(o - i) + u * l * (0,
                  r.haversin)(a - n)))
          , y = (0,
            r.sin)(v)
          , m = v ? function (e) {
            var t = (0,
              r.sin)(e *= v) / y
              , n = (0,
                r.sin)(v - e) / y
              , i = n * f + t * h
              , a = n * d + t * p
              , o = n * s + t * c;
            return [(0,
              r.atan2)(a, i) * r.degrees, (0,
                r.atan2)(o, (0,
                  r.sqrt)(i * i + a * a)) * r.degrees]
          }
            : function () {
              return [n * r.degrees, i * r.degrees]
            }
          ;
        return m.distance = v,
          m
      }
      ;
    var r = n(31);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        function n(e) {
          return e && ("function" == typeof o && i.pointRadius(+o.apply(this, arguments)),
            (0,
              u.default)(e, r(i))),
            i.result()
        }
        var r, i, o = 4.5;
        return n.area = function (e) {
          return (0,
            u.default)(e, r(l.default)),
            l.default.result()
        }
          ,
          n.measure = function (e) {
            return (0,
              u.default)(e, r(m.default)),
              m.default.result()
          }
          ,
          n.bounds = function (e) {
            return (0,
              u.default)(e, r(f.default)),
              f.default.result()
          }
          ,
          n.centroid = function (e) {
            return (0,
              u.default)(e, r(h.default)),
              h.default.result()
          }
          ,
          n.projection = function (t) {
            return arguments.length ? (r = null == t ? (e = null,
              a.default) : (e = t).stream,
              n) : e
          }
          ,
          n.context = function (e) {
            return arguments.length ? (i = null == e ? (t = null,
              new b.default) : new v.default(t = e),
              "function" != typeof o && i.pointRadius(o),
              n) : t
          }
          ,
          n.pointRadius = function (e) {
            return arguments.length ? (o = "function" == typeof e ? e : (i.pointRadius(+e),
              +e),
              n) : o
          }
          ,
          n.projection(e).context(t)
      }
      ;
    var i = n(418)
      , a = r(i)
      , o = n(170)
      , u = r(o)
      , s = n(1628)
      , l = r(s)
      , c = n(747)
      , f = r(c)
      , d = n(1629)
      , h = r(d)
      , p = n(1630)
      , v = r(p)
      , y = n(1631)
      , m = r(y)
      , g = n(1632)
      , b = r(g);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i() {
      b.point = a
    }
    function a(e, t) {
      b.point = o,
        s = c = e,
        l = f = t
    }
    function o(e, t) {
      g.add(f * e - c * t),
        c = e,
        f = t
    }
    function u() {
      o(s, l)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s, l, c, f, d = n(204), h = r(d), p = n(31), v = n(153), y = r(v), m = (0,
      h.default)(), g = (0,
        h.default)(), b = {
          point: y.default,
          lineStart: y.default,
          lineEnd: y.default,
          polygonStart: function () {
            b.lineStart = i,
              b.lineEnd = u
          },
          polygonEnd: function () {
            b.lineStart = b.lineEnd = b.point = y.default,
              m.add((0,
                p.abs)(g)),
              g.reset()
          },
          result: function () {
            var e = m / 2;
            return m.reset(),
              e
          }
        };
    t.default = b,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      m += e,
        g += t,
        ++b
    }
    function i() {
      E.point = a
    }
    function a(e, t) {
      E.point = o,
        r(p = e, v = t)
    }
    function o(e, t) {
      var n = e - p
        , i = t - v
        , a = (0,
          y.sqrt)(n * n + i * i);
      _ += a * (p + e) / 2,
        x += a * (v + t) / 2,
        w += a,
        r(p = e, v = t)
    }
    function u() {
      E.point = r
    }
    function s() {
      E.point = c
    }
    function l() {
      f(d, h)
    }
    function c(e, t) {
      E.point = f,
        r(d = p = e, h = v = t)
    }
    function f(e, t) {
      var n = e - p
        , i = t - v
        , a = (0,
          y.sqrt)(n * n + i * i);
      _ += a * (p + e) / 2,
        x += a * (v + t) / 2,
        w += a,
        a = v * e - p * t,
        P += a * (p + e),
        M += a * (v + t),
        O += 3 * a,
        r(p = e, v = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var d, h, p, v, y = n(31), m = 0, g = 0, b = 0, _ = 0, x = 0, w = 0, P = 0, M = 0, O = 0, E = {
      point: r,
      lineStart: i,
      lineEnd: u,
      polygonStart: function () {
        E.lineStart = s,
          E.lineEnd = l
      },
      polygonEnd: function () {
        E.point = r,
          E.lineStart = i,
          E.lineEnd = u
      },
      result: function () {
        var e = O ? [P / O, M / O] : w ? [_ / w, x / w] : b ? [m / b, g / b] : [NaN, NaN];
        return m = g = b = _ = x = w = P = M = O = 0,
          e
      }
    };
    t.default = E,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      this._context = e
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = r;
    var i = n(31)
      , a = n(153)
      , o = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(a);
    r.prototype = {
      _radius: 4.5,
      pointRadius: function (e) {
        return this._radius = e,
          this
      },
      polygonStart: function () {
        this._line = 0
      },
      polygonEnd: function () {
        this._line = NaN
      },
      lineStart: function () {
        this._point = 0
      },
      lineEnd: function () {
        0 === this._line && this._context.closePath(),
          this._point = NaN
      },
      point: function (e, t) {
        switch (this._point) {
          case 0:
            this._context.moveTo(e, t),
              this._point = 1;
            break;
          case 1:
            this._context.lineTo(e, t);
            break;
          default:
            this._context.moveTo(e + this._radius, t),
              this._context.arc(e, t, this._radius, 0, i.tau)
        }
      },
      result: o.default
    },
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e, t) {
      m.point = a,
        u = l = e,
        s = c = t
    }
    function a(e, t) {
      l -= e,
        c -= t,
        y.add((0,
          h.sqrt)(l * l + c * c)),
        l = e,
        c = t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o, u, s, l, c, f = n(204), d = r(f), h = n(31), p = n(153), v = r(p), y = (0,
      d.default)(), m = {
        point: v.default,
        lineStart: function () {
          m.point = i
        },
        lineEnd: function () {
          o && a(u, s),
            m.point = v.default
        },
        polygonStart: function () {
          o = !0
        },
        polygonEnd: function () {
          o = null
        },
        result: function () {
          var e = +y;
          return y.reset(),
            e
        }
      };
    t.default = m,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      this._string = []
    }
    function i(e) {
      return "m0," + e + "a" + e + "," + e + " 0 1,1 0," + -2 * e + "a" + e + "," + e + " 0 1,1 0," + 2 * e + "z"
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = r,
      r.prototype = {
        _radius: 4.5,
        _circle: i(4.5),
        pointRadius: function (e) {
          return (e = +e) !== this._radius && (this._radius = e,
            this._circle = null),
            this
        },
        polygonStart: function () {
          this._line = 0
        },
        polygonEnd: function () {
          this._line = NaN
        },
        lineStart: function () {
          this._point = 0
        },
        lineEnd: function () {
          0 === this._line && this._string.push("Z"),
            this._point = NaN
        },
        point: function (e, t) {
          switch (this._point) {
            case 0:
              this._string.push("M", e, ",", t),
                this._point = 1;
              break;
            case 1:
              this._string.push("L", e, ",", t);
              break;
            default:
              null == this._circle && (this._circle = i(this._radius)),
                this._string.push("M", e, ",", t, this._circle)
          }
        },
        result: function () {
          if (this._string.length) {
            var e = this._string.join("");
            return this._string = [],
              e
          }
          return null
        }
      },
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return (0,
        u.transformer)({
          point: function (t, n) {
            t = e(t, n),
              this.stream.point(t[0], t[1])
          }
        })
    }
    function i(e, t) {
      function n(r, i, a, u, s, c, f, d, h, p, v, y, m, g) {
        var b = f - r
          , _ = d - i
          , x = b * b + _ * _;
        if (x > 4 * t && m--) {
          var w = u + p
            , P = s + v
            , M = c + y
            , O = (0,
              o.sqrt)(w * w + P * P + M * M)
            , E = (0,
              o.asin)(M /= O)
            , j = (0,
              o.abs)((0,
                o.abs)(M) - 1) < o.epsilon || (0,
                  o.abs)(a - h) < o.epsilon ? (a + h) / 2 : (0,
                    o.atan2)(P, w)
            , S = e(j, E)
            , k = S[0]
            , C = S[1]
            , T = k - r
            , N = C - i
            , D = _ * T - b * N;
          (D * D / x > t || (0,
            o.abs)((b * T + _ * N) / x - .5) > .3 || u * p + s * v + c * y < l) && (n(r, i, a, u, s, c, k, C, j, w /= O, P /= O, M, m, g),
              g.point(k, C),
              n(k, C, j, w, P, M, f, d, h, p, v, y, m, g))
        }
      }
      return function (t) {
        function r(n, r) {
          n = e(n, r),
            t.point(n[0], n[1])
        }
        function i() {
          b = NaN,
            M.point = o,
            t.lineStart()
        }
        function o(r, i) {
          var o = (0,
            a.cartesian)([r, i])
            , u = e(r, i);
          n(b, _, g, x, w, P, b = u[0], _ = u[1], g = r, x = o[0], w = o[1], P = o[2], s, t),
            t.point(b, _)
        }
        function u() {
          M.point = r,
            t.lineEnd()
        }
        function l() {
          i(),
            M.point = c,
            M.lineEnd = f
        }
        function c(e, t) {
          o(d = e, t),
            h = b,
            p = _,
            v = x,
            y = w,
            m = P,
            M.point = o
        }
        function f() {
          n(b, _, g, x, w, P, h, p, d, v, y, m, s, t),
            M.lineEnd = u,
            u()
        }
        var d, h, p, v, y, m, g, b, _, x, w, P, M = {
          point: r,
          lineStart: i,
          lineEnd: u,
          polygonStart: function () {
            t.polygonStart(),
              M.lineStart = l
          },
          polygonEnd: function () {
            t.polygonEnd(),
              M.lineStart = i
          }
        };
        return M
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        return +t ? i(e, t) : r(e)
      }
      ;
    var a = n(224)
      , o = n(31)
      , u = n(318)
      , s = 16
      , l = (0,
        o.cos)(30 * o.radians);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      function t(e, t) {
        return [e * n, (0,
          i.sin)(t) / n]
      }
      var n = (0,
        i.cos)(e);
      return t.invert = function (e, t) {
        return [e / n, (0,
          i.asin)(t * n)]
      }
        ,
        t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.cylindricalEqualAreaRaw = r;
    var i = n(31)
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e) {
      var t = e.length;
      return {
        point: function (n, r) {
          for (var i = -1; ++i < t;)
            e[i].point(n, r)
        },
        sphere: function () {
          for (var n = -1; ++n < t;)
            e[n].sphere()
        },
        lineStart: function () {
          for (var n = -1; ++n < t;)
            e[n].lineStart()
        },
        lineEnd: function () {
          for (var n = -1; ++n < t;)
            e[n].lineEnd()
        },
        polygonStart: function () {
          for (var n = -1; ++n < t;)
            e[n].polygonStart()
        },
        polygonEnd: function () {
          for (var n = -1; ++n < t;)
            e[n].polygonEnd()
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        function e(e) {
          var t = e[0]
            , n = e[1];
          return d = null,
            o.point(t, n),
            d || (s.point(t, n),
              d) || (f.point(t, n),
                d)
        }
        function t() {
          return n = r = null,
            e
        }
        var n, r, o, s, f, d, h = (0,
          u.default)(), p = (0,
            l.default)().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), v = (0,
              l.default)().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), y = {
                point: function (e, t) {
                  d = [e, t]
                }
              };
        return e.invert = function (e) {
          var t = h.scale()
            , n = h.translate()
            , r = (e[0] - n[0]) / t
            , i = (e[1] - n[1]) / t;
          return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? p : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? v : h).invert(e)
        }
          ,
          e.stream = function (e) {
            return n && r === e ? n : n = i([h.stream(r = e), p.stream(e), v.stream(e)])
          }
          ,
          e.precision = function (e) {
            return arguments.length ? (h.precision(e),
              p.precision(e),
              v.precision(e),
              t()) : h.precision()
          }
          ,
          e.scale = function (t) {
            return arguments.length ? (h.scale(t),
              p.scale(.35 * t),
              v.scale(t),
              e.translate(h.translate())) : h.scale()
          }
          ,
          e.translate = function (e) {
            if (!arguments.length)
              return h.translate();
            var n = h.scale()
              , r = +e[0]
              , i = +e[1];
            return o = h.translate(e).clipExtent([[r - .455 * n, i - .238 * n], [r + .455 * n, i + .238 * n]]).stream(y),
              s = p.translate([r - .307 * n, i + .201 * n]).clipExtent([[r - .425 * n + a.epsilon, i + .12 * n + a.epsilon], [r - .214 * n - a.epsilon, i + .234 * n - a.epsilon]]).stream(y),
              f = v.translate([r - .205 * n, i + .212 * n]).clipExtent([[r - .214 * n + a.epsilon, i + .166 * n + a.epsilon], [r - .115 * n - a.epsilon, i + .234 * n - a.epsilon]]).stream(y),
              t()
          }
          ,
          e.fitExtent = function (t, n) {
            return (0,
              c.fitExtent)(e, t, n)
          }
          ,
          e.fitSize = function (t, n) {
            return (0,
              c.fitSize)(e, t, n)
          }
          ,
          e.fitWidth = function (t, n) {
            return (0,
              c.fitWidth)(e, t, n)
          }
          ,
          e.fitHeight = function (t, n) {
            return (0,
              c.fitHeight)(e, t, n)
          }
          ,
          e.scale(1070)
      }
      ;
    var a = n(31)
      , o = n(748)
      , u = r(o)
      , s = n(419)
      , l = r(s)
      , c = n(421);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.azimuthalEqualAreaRaw = void 0,
      t.default = function () {
        return (0,
          o.default)(u).scale(124.75).clipAngle(179.999)
      }
      ;
    var r = n(31)
      , i = n(225)
      , a = n(139)
      , o = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(a)
      , u = t.azimuthalEqualAreaRaw = (0,
        i.azimuthalRaw)(function (e) {
          return (0,
            r.sqrt)(2 / (1 + e))
        });
    u.invert = (0,
      i.azimuthalInvert)(function (e) {
        return 2 * (0,
          r.asin)(e / 2)
      })
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.azimuthalEquidistantRaw = void 0,
      t.default = function () {
        return (0,
          o.default)(u).scale(79.4188).clipAngle(179.999)
      }
      ;
    var r = n(31)
      , i = n(225)
      , a = n(139)
      , o = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(a)
      , u = t.azimuthalEquidistantRaw = (0,
        i.azimuthalRaw)(function (e) {
          return (e = (0,
            r.acos)(e)) && e / (0,
              r.sin)(e)
        });
    u.invert = (0,
      i.azimuthalInvert)(function (e) {
        return e
      })
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return (0,
        a.tan)((a.halfPi + e) / 2)
    }
    function i(e, t) {
      function n(e, t) {
        s > 0 ? t < -a.halfPi + a.epsilon && (t = -a.halfPi + a.epsilon) : t > a.halfPi - a.epsilon && (t = a.halfPi - a.epsilon);
        var n = s / (0,
          a.pow)(r(t), o);
        return [n * (0,
          a.sin)(o * e), s - n * (0,
            a.cos)(o * e)]
      }
      var i = (0,
        a.cos)(e)
        , o = e === t ? (0,
          a.sin)(e) : (0,
            a.log)(i / (0,
              a.cos)(t)) / (0,
                a.log)(r(t) / r(e))
        , s = i * (0,
          a.pow)(r(e), o) / o;
      return o ? (n.invert = function (e, t) {
        var n = s - t
          , r = (0,
            a.sign)(o) * (0,
              a.sqrt)(e * e + n * n);
        return [(0,
          a.atan2)(e, (0,
            a.abs)(n)) / o * (0,
              a.sign)(n), 2 * (0,
                a.atan)((0,
                  a.pow)(s / r, 1 / o)) - a.halfPi]
      }
        ,
        n) : u.mercatorRaw
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.conicConformalRaw = i,
      t.default = function () {
        return (0,
          o.conicProjection)(i).scale(109.5).parallels([30, 30])
      }
      ;
    var a = n(31)
      , o = n(420)
      , u = n(422)
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      function n(e, t) {
        var n = u - t
          , r = a * e;
        return [n * (0,
          i.sin)(r), u - n * (0,
            i.cos)(r)]
      }
      var r = (0,
        i.cos)(e)
        , a = e === t ? (0,
          i.sin)(e) : (r - (0,
            i.cos)(t)) / (t - e)
        , u = r / a + e;
      return (0,
        i.abs)(a) < i.epsilon ? o.equirectangularRaw : (n.invert = function (e, t) {
          var n = u - t;
          return [(0,
            i.atan2)(e, (0,
              i.abs)(n)) / a * (0,
                i.sign)(n), u - (0,
                  i.sign)(a) * (0,
                    i.sqrt)(e * e + n * n)]
        }
          ,
          n)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.conicEquidistantRaw = r,
      t.default = function () {
        return (0,
          a.conicProjection)(r).scale(131.154).center([0, 13.9389])
      }
      ;
    var i = n(31)
      , a = n(420)
      , o = n(749)
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n = (0,
        i.cos)(t)
        , r = (0,
          i.cos)(e) * n;
      return [n * (0,
        i.sin)(e) / r, (0,
          i.sin)(t) / r]
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.gnomonicRaw = r,
      t.default = function () {
        return (0,
          u.default)(r).scale(144.049).clipAngle(60)
      }
      ;
    var i = n(31)
      , a = n(225)
      , o = n(139)
      , u = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(o);
    r.invert = (0,
      a.azimuthalInvert)(i.atan)
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e, t, n, r) {
      return 1 === e && 1 === t && 0 === n && 0 === r ? s.default : (0,
        l.transformer)({
          point: function (i, a) {
            this.stream.point(i * e + n, a * t + r)
          }
        })
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        function e() {
          return a = u = null,
            l
        }
        var t, n, r, a, u, l, f = 1, d = 0, h = 0, p = 1, v = 1, y = s.default, m = null, g = s.default;
        return l = {
          stream: function (e) {
            return a && u === e ? a : a = y(g(u = e))
          },
          postclip: function (i) {
            return arguments.length ? (g = i,
              m = t = n = r = null,
              e()) : g
          },
          clipExtent: function (i) {
            return arguments.length ? (g = null == i ? (m = t = n = r = null,
              s.default) : (0,
                o.default)(m = +i[0][0], t = +i[0][1], n = +i[1][0], r = +i[1][1]),
              e()) : null == m ? null : [[m, t], [n, r]]
          },
          scale: function (t) {
            return arguments.length ? (y = i((f = +t) * p, f * v, d, h),
              e()) : f
          },
          translate: function (t) {
            return arguments.length ? (y = i(f * p, f * v, d = +t[0], h = +t[1]),
              e()) : [d, h]
          },
          reflectX: function (t) {
            return arguments.length ? (y = i(f * (p = t ? -1 : 1), f * v, d, h),
              e()) : p < 0
          },
          reflectY: function (t) {
            return arguments.length ? (y = i(f * p, f * (v = t ? -1 : 1), d, h),
              e()) : v < 0
          },
          fitExtent: function (e, t) {
            return (0,
              c.fitExtent)(l, e, t)
          },
          fitSize: function (e, t) {
            return (0,
              c.fitSize)(l, e, t)
          },
          fitWidth: function (e, t) {
            return (0,
              c.fitWidth)(l, e, t)
          },
          fitHeight: function (e, t) {
            return (0,
              c.fitHeight)(l, e, t)
          }
        }
      }
      ;
    var a = n(317)
      , o = r(a)
      , u = n(418)
      , s = r(u)
      , l = n(318)
      , c = n(421);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n = t * t
        , r = n * n;
      return [e * (.8707 - .131979 * n + r * (r * (.003971 * n - .001529 * r) - .013791)), t * (1.007226 + n * (.015085 + r * (.028874 * n - .044475 - .005916 * r)))]
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.naturalEarth1Raw = r,
      t.default = function () {
        return (0,
          a.default)(r).scale(175.295)
      }
      ;
    var i = n(139)
      , a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i)
      , o = n(31);
    r.invert = function (e, t) {
      var n, r = t, i = 25;
      do {
        var a = r * r
          , u = a * a;
        r -= n = (r * (1.007226 + a * (.015085 + u * (.028874 * a - .044475 - .005916 * u))) - t) / (1.007226 + a * (.045255 + u * (.259866 * a - .311325 - .005916 * 11 * u)))
      } while ((0,
        o.abs)(n) > o.epsilon && --i > 0); return [e / (.8707 + (a = r * r) * (a * (a * a * a * (.003971 - .001529 * a) - .013791) - .131979)), r]
    }
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      return [(0,
        i.cos)(t) * (0,
          i.sin)(e), (0,
            i.sin)(t)]
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.orthographicRaw = r,
      t.default = function () {
        return (0,
          u.default)(r).scale(249.5).clipAngle(90 + i.epsilon)
      }
      ;
    var i = n(31)
      , a = n(225)
      , o = n(139)
      , u = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(o);
    r.invert = (0,
      a.azimuthalInvert)(i.asin)
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n = (0,
        i.cos)(t)
        , r = 1 + (0,
          i.cos)(e) * n;
      return [n * (0,
        i.sin)(e) / r, (0,
          i.sin)(t) / r]
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.stereographicRaw = r,
      t.default = function () {
        return (0,
          u.default)(r).scale(250).clipAngle(142)
      }
      ;
    var i = n(31)
      , a = n(225)
      , o = n(139)
      , u = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(o);
    r.invert = (0,
      a.azimuthalInvert)(function (e) {
        return 2 * (0,
          i.atan)(e)
      })
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      return [(0,
        i.log)((0,
          i.tan)((i.halfPi + t) / 2)), -e]
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.transverseMercatorRaw = r,
      t.default = function () {
        var e = (0,
          a.mercatorProjection)(r)
          , t = e.center
          , n = e.rotate;
        return e.center = function (e) {
          return arguments.length ? t([-e[1], e[0]]) : (e = t(),
            [e[1], -e[0]])
        }
          ,
          e.rotate = function (e) {
            return arguments.length ? n([e[0], e[1], e.length > 2 ? e[2] + 90 : 90]) : (e = n(),
              [e[0], e[1], e[2] - 90])
          }
          ,
          n([0, 0, 90]).scale(159.155)
      }
      ;
    var i = n(31)
      , a = n(422);
    r.invert = function (e, t) {
      return [-t, 2 * (0,
        i.atan)((0,
          i.exp)(e)) - i.halfPi]
    }
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(1647);
    Object.defineProperty(t, "cluster", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    });
    var a = n(423);
    Object.defineProperty(t, "hierarchy", {
      enumerable: !0,
      get: function () {
        return r(a).default
      }
    });
    var o = n(1659);
    Object.defineProperty(t, "pack", {
      enumerable: !0,
      get: function () {
        return r(o).default
      }
    });
    var u = n(750);
    Object.defineProperty(t, "packSiblings", {
      enumerable: !0,
      get: function () {
        return r(u).default
      }
    });
    var s = n(751);
    Object.defineProperty(t, "packEnclose", {
      enumerable: !0,
      get: function () {
        return r(s).default
      }
    });
    var l = n(1661);
    Object.defineProperty(t, "partition", {
      enumerable: !0,
      get: function () {
        return r(l).default
      }
    });
    var c = n(1662);
    Object.defineProperty(t, "stratify", {
      enumerable: !0,
      get: function () {
        return r(c).default
      }
    });
    var f = n(1663);
    Object.defineProperty(t, "tree", {
      enumerable: !0,
      get: function () {
        return r(f).default
      }
    });
    var d = n(1664);
    Object.defineProperty(t, "treemap", {
      enumerable: !0,
      get: function () {
        return r(d).default
      }
    });
    var h = n(1665);
    Object.defineProperty(t, "treemapBinary", {
      enumerable: !0,
      get: function () {
        return r(h).default
      }
    });
    var p = n(226);
    Object.defineProperty(t, "treemapDice", {
      enumerable: !0,
      get: function () {
        return r(p).default
      }
    });
    var v = n(319);
    Object.defineProperty(t, "treemapSlice", {
      enumerable: !0,
      get: function () {
        return r(v).default
      }
    });
    var y = n(1666);
    Object.defineProperty(t, "treemapSliceDice", {
      enumerable: !0,
      get: function () {
        return r(y).default
      }
    });
    var m = n(425);
    Object.defineProperty(t, "treemapSquarify", {
      enumerable: !0,
      get: function () {
        return r(m).default
      }
    });
    var g = n(1667);
    Object.defineProperty(t, "treemapResquarify", {
      enumerable: !0,
      get: function () {
        return r(g).default
      }
    })
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      return e.parent === t.parent ? 1 : 2
    }
    function i(e) {
      return e.reduce(a, 0) / e.length
    }
    function a(e, t) {
      return e + t.x
    }
    function o(e) {
      return 1 + e.reduce(u, 0)
    }
    function u(e, t) {
      return Math.max(e, t.y)
    }
    function s(e) {
      for (var t; t = e.children;)
        e = t[0];
      return e
    }
    function l(e) {
      for (var t; t = e.children;)
        e = t[t.length - 1];
      return e
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        function e(e) {
          var r, c = 0;
          e.eachAfter(function (e) {
            var n = e.children;
            n ? (e.x = i(n),
              e.y = o(n)) : (e.x = r ? c += t(e, r) : 0,
                e.y = 0,
                r = e)
          });
          var f = s(e)
            , d = l(e)
            , h = f.x - t(f, d) / 2
            , p = d.x + t(d, f) / 2;
          return e.eachAfter(u ? function (t) {
            t.x = (t.x - e.x) * n,
              t.y = (e.y - t.y) * a
          }
            : function (t) {
              t.x = (t.x - h) / (p - h) * n,
                t.y = (1 - (e.y ? t.y / e.y : 1)) * a
            }
          )
        }
        var t = r
          , n = 1
          , a = 1
          , u = !1;
        return e.separation = function (n) {
          return arguments.length ? (t = n,
            e) : t
        }
          ,
          e.size = function (t) {
            return arguments.length ? (u = !1,
              n = +t[0],
              a = +t[1],
              e) : u ? null : [n, a]
          }
          ,
          e.nodeSize = function (t) {
            return arguments.length ? (u = !0,
              n = +t[0],
              a = +t[1],
              e) : u ? [n, a] : null
          }
          ,
          e
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      var t = 0
        , n = e.children
        , r = n && n.length;
      if (r)
        for (; --r >= 0;)
          t += n[r].value;
      else
        t = 1;
      e.value = t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        return this.eachAfter(r)
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        var t, n, r, i, a = this, o = [a];
        do {
          for (t = o.reverse(),
            o = []; a = t.pop();)
            if (e(a),
              n = a.children)
              for (r = 0,
                i = n.length; r < i; ++r)
                o.push(n[r])
        } while (o.length); return this
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        for (var t, n, r = this, i = [r]; r = i.pop();)
          if (e(r),
            t = r.children)
            for (n = t.length - 1; n >= 0; --n)
              i.push(t[n]);
        return this
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        for (var t, n, r, i = this, a = [i], o = []; i = a.pop();)
          if (o.push(i),
            t = i.children)
            for (n = 0,
              r = t.length; n < r; ++n)
              a.push(t[n]);
        for (; i = o.pop();)
          e(i);
        return this
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return this.eachAfter(function (t) {
          for (var n = +e(t.data) || 0, r = t.children, i = r && r.length; --i >= 0;)
            n += r[i].value;
          t.value = n
        })
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return this.eachBefore(function (t) {
          t.children && t.children.sort(e)
        })
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      if (e === t)
        return e;
      var n = e.ancestors()
        , r = t.ancestors()
        , i = null;
      for (e = n.pop(),
        t = r.pop(); e === t;)
        i = e,
          e = n.pop(),
          t = r.pop();
      return i
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        for (var t = this, n = r(t, e), i = [t]; t !== n;)
          t = t.parent,
            i.push(t);
        for (var a = i.length; e !== n;)
          i.splice(a, 0, e),
            e = e.parent;
        return i
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        for (var e = this, t = [e]; e = e.parent;)
          t.push(e);
        return t
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        var e = [];
        return this.each(function (t) {
          e.push(t)
        }),
          e
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        var e = [];
        return this.eachBefore(function (t) {
          t.children || e.push(t)
        }),
          e
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        var e = this
          , t = [];
        return e.each(function (n) {
          n !== e && t.push({
            source: n.parent,
            target: n
          })
        }),
          t
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return Math.sqrt(e.value)
    }
    function i(e) {
      return function (t) {
        t.children || (t.r = Math.max(0, +e(t) || 0))
      }
    }
    function a(e, t) {
      return function (n) {
        if (r = n.children) {
          var r, i, a, o = r.length, s = e(n) * t || 0;
          if (s)
            for (i = 0; i < o; ++i)
              r[i].r += s;
          if (a = (0,
            u.packEnclose)(r),
            s)
            for (i = 0; i < o; ++i)
              r[i].r -= s;
          n.r = a + s
        }
      }
    }
    function o(e) {
      return function (t) {
        var n = t.parent;
        t.r *= e,
          n && (t.x = n.x + e * t.x,
            t.y = n.y + e * t.y)
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        function e(e) {
          return e.x = n / 2,
            e.y = u / 2,
            t ? e.eachBefore(i(t)).eachAfter(a(f, .5)).eachBefore(o(1)) : e.eachBefore(i(r)).eachAfter(a(l.constantZero, 1)).eachAfter(a(f, e.r / Math.min(n, u))).eachBefore(o(Math.min(n, u) / (2 * e.r))),
            e
        }
        var t = null
          , n = 1
          , u = 1
          , f = l.constantZero;
        return e.radius = function (n) {
          return arguments.length ? (t = (0,
            s.optional)(n),
            e) : t
        }
          ,
          e.size = function (t) {
            return arguments.length ? (n = +t[0],
              u = +t[1],
              e) : [n, u]
          }
          ,
          e.padding = function (t) {
            return arguments.length ? (f = "function" == typeof t ? t : (0,
              c.default)(+t),
              e) : f
          }
          ,
          e
      }
      ;
    var u = n(750)
      , s = n(424)
      , l = n(752)
      , c = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(l);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      for (var t, n, r = e.length; r;)
        n = Math.random() * r-- | 0,
          t = e[r],
          e[r] = e[n],
          e[n] = t;
      return e
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.shuffle = r;
    t.slice = Array.prototype.slice
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        function e(e) {
          var u = e.height + 1;
          return e.x0 = e.y0 = i,
            e.x1 = n,
            e.y1 = r / u,
            e.eachBefore(t(r, u)),
            o && e.eachBefore(a.default),
            e
        }
        function t(e, t) {
          return function (n) {
            n.children && (0,
              u.default)(n, n.x0, e * (n.depth + 1) / t, n.x1, e * (n.depth + 2) / t);
            var r = n.x0
              , a = n.y0
              , o = n.x1 - i
              , s = n.y1 - i;
            o < r && (r = o = (r + o) / 2),
              s < a && (a = s = (a + s) / 2),
              n.x0 = r,
              n.y0 = a,
              n.x1 = o,
              n.y1 = s
          }
        }
        var n = 1
          , r = 1
          , i = 0
          , o = !1;
        return e.round = function (t) {
          return arguments.length ? (o = !!t,
            e) : o
        }
          ,
          e.size = function (t) {
            return arguments.length ? (n = +t[0],
              r = +t[1],
              e) : [n, r]
          }
          ,
          e.padding = function (t) {
            return arguments.length ? (i = +t,
              e) : i
          }
          ,
          e
      }
      ;
    var i = n(753)
      , a = r(i)
      , o = n(226)
      , u = r(o);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e.id
    }
    function i(e) {
      return e.parentId
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        function e(e) {
          var r, i, a, c, f, d, h, p = e.length, v = new Array(p), y = {};
          for (i = 0; i < p; ++i)
            r = e[i],
              f = v[i] = new o.Node(r),
              null != (d = t(r, i, e)) && (d += "") && (h = u + (f.id = d),
                y[h] = h in y ? l : f);
          for (i = 0; i < p; ++i)
            if (f = v[i],
              null != (d = n(e[i], i, e)) && (d += "")) {
              if (!(c = y[u + d]))
                throw new Error("missing: " + d);
              if (c === l)
                throw new Error("ambiguous: " + d);
              c.children ? c.children.push(f) : c.children = [f],
                f.parent = c
            } else {
              if (a)
                throw new Error("multiple roots");
              a = f
            }
          if (!a)
            throw new Error("no root");
          if (a.parent = s,
            a.eachBefore(function (e) {
              e.depth = e.parent.depth + 1,
                --p
            }).eachBefore(o.computeHeight),
            a.parent = null,
            p > 0)
            throw new Error("cycle");
          return a
        }
        var t = r
          , n = i;
        return e.id = function (n) {
          return arguments.length ? (t = (0,
            a.required)(n),
            e) : t
        }
          ,
          e.parentId = function (t) {
            return arguments.length ? (n = (0,
              a.required)(t),
              e) : n
          }
          ,
          e
      }
      ;
    var a = n(424)
      , o = n(423)
      , u = "$"
      , s = {
        depth: -1
      }
      , l = {};
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      return e.parent === t.parent ? 1 : 2
    }
    function i(e) {
      var t = e.children;
      return t ? t[0] : e.t
    }
    function a(e) {
      var t = e.children;
      return t ? t[t.length - 1] : e.t
    }
    function o(e, t, n) {
      var r = n / (t.i - e.i);
      t.c -= r,
        t.s += n,
        e.c += r,
        t.z += n,
        t.m += n
    }
    function u(e) {
      for (var t, n = 0, r = 0, i = e.children, a = i.length; --a >= 0;)
        t = i[a],
          t.z += n,
          t.m += n,
          n += t.s + (r += t.c)
    }
    function s(e, t, n) {
      return e.a.parent === t.parent ? e.a : n
    }
    function l(e, t) {
      this._ = e,
        this.parent = null,
        this.children = null,
        this.A = null,
        this.a = this,
        this.z = 0,
        this.m = 0,
        this.c = 0,
        this.s = 0,
        this.t = null,
        this.i = t
    }
    function c(e) {
      for (var t, n, r, i, a, o = new l(e, 0), u = [o]; t = u.pop();)
        if (r = t._.children)
          for (t.children = new Array(a = r.length),
            i = a - 1; i >= 0; --i)
            u.push(n = t.children[i] = new l(r[i], i)),
              n.parent = t;
      return (o.parent = new l(null, 0)).children = [o],
        o
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        function e(e) {
          var r = c(e);
          if (r.eachAfter(t),
            r.parent.m = -r.z,
            r.eachBefore(n),
            v)
            e.eachBefore(f);
          else {
            var i = e
              , a = e
              , o = e;
            e.eachBefore(function (e) {
              e.x < i.x && (i = e),
                e.x > a.x && (a = e),
                e.depth > o.depth && (o = e)
            });
            var u = i === a ? 1 : d(i, a) / 2
              , s = u - i.x
              , l = h / (a.x + u + s)
              , y = p / (o.depth || 1);
            e.eachBefore(function (e) {
              e.x = (e.x + s) * l,
                e.y = e.depth * y
            })
          }
          return e
        }
        function t(e) {
          var t = e.children
            , n = e.parent.children
            , r = e.i ? n[e.i - 1] : null;
          if (t) {
            u(e);
            var i = (t[0].z + t[t.length - 1].z) / 2;
            r ? (e.z = r.z + d(e._, r._),
              e.m = e.z - i) : e.z = i
          } else
            r && (e.z = r.z + d(e._, r._));
          e.parent.A = l(e, r, e.parent.A || n[0])
        }
        function n(e) {
          e._.x = e.z + e.parent.m,
            e.m += e.parent.m
        }
        function l(e, t, n) {
          if (t) {
            for (var r, u = e, l = e, c = t, f = u.parent.children[0], h = u.m, p = l.m, v = c.m, y = f.m; c = a(c),
              u = i(u),
              c && u;)
              f = i(f),
                l = a(l),
                l.a = e,
                r = c.z + v - u.z - h + d(c._, u._),
                r > 0 && (o(s(c, e, n), e, r),
                  h += r,
                  p += r),
                v += c.m,
                h += u.m,
                y += f.m,
                p += l.m;
            c && !a(l) && (l.t = c,
              l.m += v - p),
              u && !i(f) && (f.t = u,
                f.m += h - y,
                n = e)
          }
          return n
        }
        function f(e) {
          e.x *= h,
            e.y = e.depth * p
        }
        var d = r
          , h = 1
          , p = 1
          , v = null;
        return e.separation = function (t) {
          return arguments.length ? (d = t,
            e) : d
        }
          ,
          e.size = function (t) {
            return arguments.length ? (v = !1,
              h = +t[0],
              p = +t[1],
              e) : v ? null : [h, p]
          }
          ,
          e.nodeSize = function (t) {
            return arguments.length ? (v = !0,
              h = +t[0],
              p = +t[1],
              e) : v ? [h, p] : null
          }
          ,
          e
      }
      ;
    var f = n(423);
    l.prototype = Object.create(f.Node.prototype),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        function e(e) {
          return e.x0 = e.y0 = 0,
            e.x1 = i,
            e.y1 = o,
            e.eachBefore(t),
            f = [0],
            r && e.eachBefore(a.default),
            e
        }
        function t(e) {
          var t = f[e.depth]
            , r = e.x0 + t
            , i = e.y0 + t
            , a = e.x1 - t
            , o = e.y1 - t;
          a < r && (r = a = (r + a) / 2),
            o < i && (i = o = (i + o) / 2),
            e.x0 = r,
            e.y0 = i,
            e.x1 = a,
            e.y1 = o,
            e.children && (t = f[e.depth + 1] = d(e) / 2,
              r += y(e) - t,
              i += h(e) - t,
              a -= p(e) - t,
              o -= v(e) - t,
              a < r && (r = a = (r + a) / 2),
              o < i && (i = o = (i + o) / 2),
              n(e, r, i, a, o))
        }
        var n = u.default
          , r = !1
          , i = 1
          , o = 1
          , f = [0]
          , d = l.constantZero
          , h = l.constantZero
          , p = l.constantZero
          , v = l.constantZero
          , y = l.constantZero;
        return e.round = function (t) {
          return arguments.length ? (r = !!t,
            e) : r
        }
          ,
          e.size = function (t) {
            return arguments.length ? (i = +t[0],
              o = +t[1],
              e) : [i, o]
          }
          ,
          e.tile = function (t) {
            return arguments.length ? (n = (0,
              s.required)(t),
              e) : n
          }
          ,
          e.padding = function (t) {
            return arguments.length ? e.paddingInner(t).paddingOuter(t) : e.paddingInner()
          }
          ,
          e.paddingInner = function (t) {
            return arguments.length ? (d = "function" == typeof t ? t : (0,
              c.default)(+t),
              e) : d
          }
          ,
          e.paddingOuter = function (t) {
            return arguments.length ? e.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : e.paddingTop()
          }
          ,
          e.paddingTop = function (t) {
            return arguments.length ? (h = "function" == typeof t ? t : (0,
              c.default)(+t),
              e) : h
          }
          ,
          e.paddingRight = function (t) {
            return arguments.length ? (p = "function" == typeof t ? t : (0,
              c.default)(+t),
              e) : p
          }
          ,
          e.paddingBottom = function (t) {
            return arguments.length ? (v = "function" == typeof t ? t : (0,
              c.default)(+t),
              e) : v
          }
          ,
          e.paddingLeft = function (t) {
            return arguments.length ? (y = "function" == typeof t ? t : (0,
              c.default)(+t),
              e) : y
          }
          ,
          e
      }
      ;
    var i = n(753)
      , a = r(i)
      , o = n(425)
      , u = r(o)
      , s = n(424)
      , l = n(752)
      , c = r(l);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n, r, i) {
        function a(e, t, n, r, i, o, u) {
          if (e >= t - 1) {
            var l = s[e];
            return l.x0 = r,
              l.y0 = i,
              l.x1 = o,
              l.y1 = u,
              void 0
          }
          for (var f = c[e], d = n / 2 + f, h = e + 1, p = t - 1; h < p;) {
            var v = h + p >>> 1;
            c[v] < d ? h = v + 1 : p = v
          }
          d - c[h - 1] < c[h] - d && e + 1 < h && --h;
          var y = c[h] - f
            , m = n - y;
          if (o - r > u - i) {
            var g = (r * m + o * y) / n;
            a(e, h, y, r, i, g, u),
              a(h, t, m, g, i, o, u)
          } else {
            var b = (i * m + u * y) / n;
            a(e, h, y, r, i, o, b),
              a(h, t, m, r, b, o, u)
          }
        }
        var o, u, s = e.children, l = s.length, c = new Array(l + 1);
        for (c[0] = u = o = 0; o < l; ++o)
          c[o + 1] = u += s[o].value;
        a(0, l, e.value, t, n, r, i)
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n, r, i) {
        (1 & e.depth ? u.default : a.default)(e, t, n, r, i)
      }
      ;
    var i = n(226)
      , a = r(i)
      , o = n(319)
      , u = r(o);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(226)
      , a = r(i)
      , o = n(319)
      , u = r(o)
      , s = n(425);
    t.default = function e(t) {
      function n(e, n, r, i, o) {
        if ((l = e._squarify) && l.ratio === t)
          for (var l, c, f, d, h, p = -1, v = l.length, y = e.value; ++p < v;) {
            for (c = l[p],
              f = c.children,
              d = c.value = 0,
              h = f.length; d < h; ++d)
              c.value += f[d].value;
            c.dice ? (0,
              a.default)(c, n, r, i, r += (o - r) * c.value / y) : (0,
                u.default)(c, n, r, n += (i - n) * c.value / y, o),
              y -= c.value
          }
        else
          e._squarify = l = (0,
            s.squarifyRatio)(t, e, n, r, i, o),
            l.ratio = t
      }
      return n.ratio = function (t) {
        return e((t = +t) > 1 ? t : 1)
      }
        ,
        n
    }(s.phi),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(1669);
    Object.defineProperty(t, "polygonArea", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    });
    var a = n(1670);
    Object.defineProperty(t, "polygonCentroid", {
      enumerable: !0,
      get: function () {
        return r(a).default
      }
    });
    var o = n(1671);
    Object.defineProperty(t, "polygonHull", {
      enumerable: !0,
      get: function () {
        return r(o).default
      }
    });
    var u = n(1673);
    Object.defineProperty(t, "polygonContains", {
      enumerable: !0,
      get: function () {
        return r(u).default
      }
    });
    var s = n(1674);
    Object.defineProperty(t, "polygonLength", {
      enumerable: !0,
      get: function () {
        return r(s).default
      }
    })
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        for (var t, n = -1, r = e.length, i = e[r - 1], a = 0; ++n < r;)
          t = i,
            i = e[n],
            a += t[1] * i[0] - t[0] * i[1];
        return a / 2
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        for (var t, n, r = -1, i = e.length, a = 0, o = 0, u = e[i - 1], s = 0; ++r < i;)
          t = u,
            u = e[r],
            s += n = t[0] * u[1] - u[0] * t[1],
            a += (t[0] + u[0]) * n,
            o += (t[1] + u[1]) * n;
        return s *= 3,
          [a / s, o / s]
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      return e[0] - t[0] || e[1] - t[1]
    }
    function i(e) {
      for (var t = e.length, n = [0, 1], r = 2, i = 2; i < t; ++i) {
        for (; r > 1 && (0,
          o.default)(e[n[r - 2]], e[n[r - 1]], e[i]) <= 0;)
          --r;
        n[r++] = i
      }
      return n.slice(0, r)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        if ((n = e.length) < 3)
          return null;
        var t, n, a = new Array(n), o = new Array(n);
        for (t = 0; t < n; ++t)
          a[t] = [+e[t][0], +e[t][1], t];
        for (a.sort(r),
          t = 0; t < n; ++t)
          o[t] = [a[t][0], -a[t][1]];
        var u = i(a)
          , s = i(o)
          , l = s[0] === u[0]
          , c = s[s.length - 1] === u[u.length - 1]
          , f = [];
        for (t = u.length - 1; t >= 0; --t)
          f.push(e[a[u[t]][2]]);
        for (t = +l; t < s.length - c; ++t)
          f.push(e[a[s[t]][2]]);
        return f
      }
      ;
    var a = n(1672)
      , o = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(a);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n) {
        return (t[0] - e[0]) * (n[1] - e[1]) - (t[1] - e[1]) * (n[0] - e[0])
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        for (var n, r, i = e.length, a = e[i - 1], o = t[0], u = t[1], s = a[0], l = a[1], c = !1, f = 0; f < i; ++f)
          a = e[f],
            n = a[0],
            r = a[1],
            r > u != l > u && o < (s - n) * (u - r) / (l - r) + n && (c = !c),
            s = n,
            l = r;
        return c
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        for (var t, n, r = -1, i = e.length, a = e[i - 1], o = a[0], u = a[1], s = 0; ++r < i;)
          t = o,
            n = u,
            a = e[r],
            o = a[0],
            u = a[1],
            t -= o,
            n -= u,
            s += Math.sqrt(t * t + n * n);
        return s
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(1676);
    Object.defineProperty(t, "queue", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    })
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      this._size = e,
        this._call = this._error = null,
        this._tasks = [],
        this._data = [],
        this._waiting = this._active = this._ended = this._start = 0
    }
    function i(e) {
      if (!e._start)
        try {
          a(e)
        } catch (t) {
          if (e._tasks[e._ended + e._active - 1])
            u(e, t);
          else if (!e._data)
            throw t
        }
    }
    function a(e) {
      for (; e._start = e._waiting && e._active < e._size;) {
        var t = e._ended + e._active
          , n = e._tasks[t]
          , r = n.length - 1
          , i = n[r];
        n[r] = o(e, t),
          --e._waiting,
          ++e._active,
          n = i.apply(null, n),
          e._tasks[t] && (e._tasks[t] = n || f)
      }
    }
    function o(e, t) {
      return function (n, r) {
        e._tasks[t] && (--e._active,
          ++e._ended,
          e._tasks[t] = null,
          null == e._error && (null != n ? u(e, n) : (e._data[t] = r,
            e._waiting ? i(e) : s(e))))
      }
    }
    function u(e, t) {
      var n, r = e._tasks.length;
      for (e._error = t,
        e._data = void 0,
        e._waiting = NaN; --r >= 0;)
        if ((n = e._tasks[r]) && (e._tasks[r] = null,
          n.abort))
          try {
            n.abort()
          } catch (t) { }
      e._active = NaN,
        s(e)
    }
    function s(e) {
      if (!e._active && e._call) {
        var t = e._data;
        e._data = void 0,
          e._call(e._error, t)
      }
    }
    function l(e) {
      if (null == e)
        e = 1 / 0;
      else if (!((e = +e) >= 1))
        throw new Error("invalid concurrency");
      return new r(e)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = l;
    var c = n(1677)
      , f = {};
    r.prototype = l.prototype = {
      constructor: r,
      defer: function (e) {
        if ("function" != typeof e)
          throw new Error("invalid callback");
        if (this._call)
          throw new Error("defer after await");
        if (null != this._error)
          return this;
        var t = c.slice.call(arguments, 1);
        return t.push(e),
          ++this._waiting,
          this._tasks.push(t),
          i(this),
          this
      },
      abort: function () {
        return null == this._error && u(this, new Error("abort")),
          this
      },
      await: function (e) {
        if ("function" != typeof e)
          throw new Error("invalid callback");
        if (this._call)
          throw new Error("multiple await");
        return this._call = function (t, n) {
          e.apply(null, [t].concat(n))
        }
          ,
          s(this),
          this
      },
      awaitAll: function (e) {
        if ("function" != typeof e)
          throw new Error("invalid callback");
        if (this._call)
          throw new Error("multiple await");
        return this._call = e,
          s(this),
          this
      }
    },
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.slice = [].slice
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(1679);
    Object.defineProperty(t, "randomUniform", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    });
    var a = n(754);
    Object.defineProperty(t, "randomNormal", {
      enumerable: !0,
      get: function () {
        return r(a).default
      }
    });
    var o = n(1680);
    Object.defineProperty(t, "randomLogNormal", {
      enumerable: !0,
      get: function () {
        return r(o).default
      }
    });
    var u = n(1681);
    Object.defineProperty(t, "randomBates", {
      enumerable: !0,
      get: function () {
        return r(u).default
      }
    });
    var s = n(755);
    Object.defineProperty(t, "randomIrwinHall", {
      enumerable: !0,
      get: function () {
        return r(s).default
      }
    });
    var l = n(1682);
    Object.defineProperty(t, "randomExponential", {
      enumerable: !0,
      get: function () {
        return r(l).default
      }
    })
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(205)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.default = function e(t) {
      function n(e, n) {
        return e = null == e ? 0 : +e,
          n = null == n ? 1 : +n,
          1 === arguments.length ? (n = e,
            e = 0) : n -= e,
          function () {
            return t() * n + e
          }
      }
      return n.source = e,
        n
    }(i.default),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(205)
      , a = r(i)
      , o = n(754)
      , u = r(o);
    t.default = function e(t) {
      function n() {
        var e = u.default.source(t).apply(this, arguments);
        return function () {
          return Math.exp(e())
        }
      }
      return n.source = e,
        n
    }(a.default),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(205)
      , a = r(i)
      , o = n(755)
      , u = r(o);
    t.default = function e(t) {
      function n(e) {
        var n = u.default.source(t)(e);
        return function () {
          return n() / e
        }
      }
      return n.source = e,
        n
    }(a.default),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(205)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.default = function e(t) {
      function n(e) {
        return function () {
          return -Math.log(1 - t()) / e
        }
      }
      return n.source = e,
        n
    }(i.default),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(426);
    Object.defineProperty(t, "request", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    });
    var a = n(1684);
    Object.defineProperty(t, "html", {
      enumerable: !0,
      get: function () {
        return r(a).default
      }
    });
    var o = n(1685);
    Object.defineProperty(t, "json", {
      enumerable: !0,
      get: function () {
        return r(o).default
      }
    });
    var u = n(1686);
    Object.defineProperty(t, "text", {
      enumerable: !0,
      get: function () {
        return r(u).default
      }
    });
    var s = n(1687);
    Object.defineProperty(t, "xml", {
      enumerable: !0,
      get: function () {
        return r(s).default
      }
    });
    var l = n(1688);
    Object.defineProperty(t, "csv", {
      enumerable: !0,
      get: function () {
        return r(l).default
      }
    });
    var c = n(1689);
    Object.defineProperty(t, "tsv", {
      enumerable: !0,
      get: function () {
        return r(c).default
      }
    })
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(320)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.default = (0,
      i.default)("text/html", function (e) {
        return document.createRange().createContextualFragment(e.responseText)
      }),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(320)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.default = (0,
      i.default)("application/json", function (e) {
        return JSON.parse(e.responseText)
      }),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(320)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.default = (0,
      i.default)("text/plain", function (e) {
        return e.responseText
      }),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(320)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.default = (0,
      i.default)("application/xml", function (e) {
        var t = e.responseXML;
        if (!t)
          throw new Error("parse error");
        return t
      }),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(411)
      , i = n(756)
      , a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i);
    t.default = (0,
      a.default)("text/csv", r.csvParse),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(411)
      , i = n(756)
      , a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i);
    t.default = (0,
      a.default)("text/tab-separated-values", r.tsvParse),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(1691);
    Object.defineProperty(t, "scaleBand", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    }),
      Object.defineProperty(t, "scalePoint", {
        enumerable: !0,
        get: function () {
          return i.point
        }
      });
    var a = n(1692);
    Object.defineProperty(t, "scaleIdentity", {
      enumerable: !0,
      get: function () {
        return r(a).default
      }
    });
    var o = n(227);
    Object.defineProperty(t, "scaleLinear", {
      enumerable: !0,
      get: function () {
        return r(o).default
      }
    });
    var u = n(1694);
    Object.defineProperty(t, "scaleLog", {
      enumerable: !0,
      get: function () {
        return r(u).default
      }
    });
    var s = n(757);
    Object.defineProperty(t, "scaleOrdinal", {
      enumerable: !0,
      get: function () {
        return r(s).default
      }
    }),
      Object.defineProperty(t, "scaleImplicit", {
        enumerable: !0,
        get: function () {
          return s.implicit
        }
      });
    var l = n(1695);
    Object.defineProperty(t, "scalePow", {
      enumerable: !0,
      get: function () {
        return r(l).default
      }
    }),
      Object.defineProperty(t, "scaleSqrt", {
        enumerable: !0,
        get: function () {
          return l.sqrt
        }
      });
    var c = n(1696);
    Object.defineProperty(t, "scaleQuantile", {
      enumerable: !0,
      get: function () {
        return r(c).default
      }
    });
    var f = n(1697);
    Object.defineProperty(t, "scaleQuantize", {
      enumerable: !0,
      get: function () {
        return r(f).default
      }
    });
    var d = n(1698);
    Object.defineProperty(t, "scaleThreshold", {
      enumerable: !0,
      get: function () {
        return r(d).default
      }
    });
    var h = n(760);
    Object.defineProperty(t, "scaleTime", {
      enumerable: !0,
      get: function () {
        return r(h).default
      }
    });
    var p = n(1714);
    Object.defineProperty(t, "scaleUtc", {
      enumerable: !0,
      get: function () {
        return r(p).default
      }
    });
    var v = n(1715);
    Object.defineProperty(t, "schemeCategory10", {
      enumerable: !0,
      get: function () {
        return r(v).default
      }
    });
    var y = n(1716);
    Object.defineProperty(t, "schemeCategory20b", {
      enumerable: !0,
      get: function () {
        return r(y).default
      }
    });
    var m = n(1717);
    Object.defineProperty(t, "schemeCategory20c", {
      enumerable: !0,
      get: function () {
        return r(m).default
      }
    });
    var g = n(1718);
    Object.defineProperty(t, "schemeCategory20", {
      enumerable: !0,
      get: function () {
        return r(g).default
      }
    });
    var b = n(1719);
    Object.defineProperty(t, "interpolateCubehelixDefault", {
      enumerable: !0,
      get: function () {
        return r(b).default
      }
    });
    var _ = n(1720);
    Object.defineProperty(t, "interpolateRainbow", {
      enumerable: !0,
      get: function () {
        return r(_).default
      }
    }),
      Object.defineProperty(t, "interpolateWarm", {
        enumerable: !0,
        get: function () {
          return _.warm
        }
      }),
      Object.defineProperty(t, "interpolateCool", {
        enumerable: !0,
        get: function () {
          return _.cool
        }
      });
    var x = n(1721);
    Object.defineProperty(t, "interpolateViridis", {
      enumerable: !0,
      get: function () {
        return r(x).default
      }
    }),
      Object.defineProperty(t, "interpolateMagma", {
        enumerable: !0,
        get: function () {
          return x.magma
        }
      }),
      Object.defineProperty(t, "interpolateInferno", {
        enumerable: !0,
        get: function () {
          return x.inferno
        }
      }),
      Object.defineProperty(t, "interpolatePlasma", {
        enumerable: !0,
        get: function () {
          return x.plasma
        }
      });
    var w = n(1722);
    Object.defineProperty(t, "scaleSequential", {
      enumerable: !0,
      get: function () {
        return r(w).default
      }
    })
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      function e() {
        var e = a().length
          , r = l[1] < l[0]
          , i = l[r - 0]
          , s = l[1 - r];
        t = (s - i) / Math.max(1, e - f + 2 * d),
          c && (t = Math.floor(t)),
          i += (s - i - t * (e - f)) * h,
          n = t * (1 - f),
          c && (i = Math.round(i),
            n = Math.round(n));
        var p = (0,
          o.range)(e).map(function (e) {
            return i + t * e
          });
        return u(r ? p.reverse() : p)
      }
      var t, n, i = (0,
        s.default)().unknown(void 0), a = i.domain, u = i.range, l = [0, 1], c = !1, f = 0, d = 0, h = .5;
      return delete i.unknown,
        i.domain = function (t) {
          return arguments.length ? (a(t),
            e()) : a()
        }
        ,
        i.range = function (t) {
          return arguments.length ? (l = [+t[0], +t[1]],
            e()) : l.slice()
        }
        ,
        i.rangeRound = function (t) {
          return l = [+t[0], +t[1]],
            c = !0,
            e()
        }
        ,
        i.bandwidth = function () {
          return n
        }
        ,
        i.step = function () {
          return t
        }
        ,
        i.round = function (t) {
          return arguments.length ? (c = !!t,
            e()) : c
        }
        ,
        i.padding = function (t) {
          return arguments.length ? (f = d = Math.max(0, Math.min(1, t)),
            e()) : f
        }
        ,
        i.paddingInner = function (t) {
          return arguments.length ? (f = Math.max(0, Math.min(1, t)),
            e()) : f
        }
        ,
        i.paddingOuter = function (t) {
          return arguments.length ? (d = Math.max(0, Math.min(1, t)),
            e()) : d
        }
        ,
        i.align = function (t) {
          return arguments.length ? (h = Math.max(0, Math.min(1, t)),
            e()) : h
        }
        ,
        i.copy = function () {
          return r().domain(a()).range(l).round(c).paddingInner(f).paddingOuter(d).align(h)
        }
        ,
        e()
    }
    function i(e) {
      var t = e.copy;
      return e.padding = e.paddingOuter,
        delete e.paddingInner,
        delete e.paddingOuter,
        e.copy = function () {
          return i(t())
        }
        ,
        e
    }
    function a() {
      return i(r().paddingInner(1))
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = r,
      t.point = a;
    var o = n(84)
      , u = n(757)
      , s = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(u)
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      function e(e) {
        return +e
      }
      var t = [0, 1];
      return e.invert = e,
        e.domain = e.range = function (n) {
          return arguments.length ? (t = i.map.call(n, u.default),
            e) : t.slice()
        }
        ,
        e.copy = function () {
          return r().domain(t)
        }
        ,
        (0,
          a.linearish)(e)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = r;
    var i = n(171)
      , a = n(227)
      , o = n(758)
      , u = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(o);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t, n) {
        var a, o = e[0], u = e[e.length - 1], s = (0,
          r.tickStep)(o, u, null == t ? 10 : t);
        switch (n = (0,
          i.formatSpecifier)(null == n ? ",f" : n),
        n.type) {
          case "s":
            var l = Math.max(Math.abs(o), Math.abs(u));
            return null != n.precision || isNaN(a = (0,
              i.precisionPrefix)(s, l)) || (n.precision = a),
              (0,
                i.formatPrefix)(n, l);
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            null != n.precision || isNaN(a = (0,
              i.precisionRound)(s, Math.max(Math.abs(o), Math.abs(u)))) || (n.precision = a - ("e" === n.type));
            break;
          case "f":
          case "%":
            null != n.precision || isNaN(a = (0,
              i.precisionFixed)(s)) || (n.precision = a - 2 * ("%" === n.type))
        }
        return (0,
          i.format)(n)
      }
      ;
    var r = n(84)
      , i = n(416);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e, t) {
      return (t = Math.log(t / e)) ? function (n) {
        return Math.log(n / e) / t
      }
        : (0,
          p.default)(t)
    }
    function a(e, t) {
      return e < 0 ? function (n) {
        return -Math.pow(-t, n) * Math.pow(-e, 1 - n)
      }
        : function (n) {
          return Math.pow(t, n) * Math.pow(e, 1 - n)
        }
    }
    function o(e) {
      return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e
    }
    function u(e) {
      return 10 === e ? o : e === Math.E ? Math.exp : function (t) {
        return Math.pow(e, t)
      }
    }
    function s(e) {
      return e === Math.E ? Math.log : 10 === e && Math.log10 || 2 === e && Math.log2 || (e = Math.log(e),
        function (t) {
          return Math.log(t) / e
        }
      )
    }
    function l(e) {
      return function (t) {
        return -e(-t)
      }
    }
    function c() {
      function e() {
        return o = s(r),
          h = u(r),
          n()[0] < 0 && (o = l(o),
            h = l(h)),
          t
      }
      var t = (0,
        g.default)(i, a).domain([1, 10])
        , n = t.domain
        , r = 10
        , o = s(10)
        , h = u(10);
      return t.base = function (t) {
        return arguments.length ? (r = +t,
          e()) : r
      }
        ,
        t.domain = function (t) {
          return arguments.length ? (n(t),
            e()) : n()
        }
        ,
        t.ticks = function (e) {
          var t, i = n(), a = i[0], u = i[i.length - 1];
          (t = u < a) && (d = a,
            a = u,
            u = d);
          var s, l, c, d = o(a), p = o(u), v = null == e ? 10 : +e, y = [];
          if (!(r % 1) && p - d < v) {
            if (d = Math.round(d) - 1,
              p = Math.round(p) + 1,
              a > 0) {
              for (; d < p; ++d)
                for (l = 1,
                  s = h(d); l < r; ++l)
                  if (!((c = s * l) < a)) {
                    if (c > u)
                      break;
                    y.push(c)
                  }
            } else
              for (; d < p; ++d)
                for (l = r - 1,
                  s = h(d); l >= 1; --l)
                  if (!((c = s * l) < a)) {
                    if (c > u)
                      break;
                    y.push(c)
                  }
          } else
            y = (0,
              f.ticks)(d, p, Math.min(p - d, v)).map(h);
          return t ? y.reverse() : y
        }
        ,
        t.tickFormat = function (e, n) {
          if (null == n && (n = 10 === r ? ".0e" : ","),
            "function" != typeof n && (n = (0,
              d.format)(n)),
            e === 1 / 0)
            return n;
          null == e && (e = 10);
          var i = Math.max(1, r * e / t.ticks().length);
          return function (e) {
            var t = e / h(Math.round(o(e)));
            return t * r < r - .5 && (t *= r),
              t <= i ? n(e) : ""
          }
        }
        ,
        t.nice = function () {
          return n((0,
            y.default)(n(), {
              floor: function (e) {
                return h(Math.floor(o(e)))
              },
              ceil: function (e) {
                return h(Math.ceil(o(e)))
              }
            }))
        }
        ,
        t.copy = function () {
          return (0,
            m.copy)(t, c().base(r))
        }
        ,
        t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = c;
    var f = n(84)
      , d = n(416)
      , h = n(427)
      , p = r(h)
      , v = n(759)
      , y = r(v)
      , m = n(321)
      , g = r(m);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e, t) {
      return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t)
    }
    function a() {
      function e(e, t) {
        return (t = i(t, n) - (e = i(e, n))) ? function (r) {
          return (i(r, n) - e) / t
        }
          : (0,
            s.default)(t)
      }
      function t(e, t) {
        return t = i(t, n) - (e = i(e, n)),
          function (r) {
            return i(e + t * r, 1 / n)
          }
      }
      var n = 1
        , r = (0,
          f.default)(e, t)
        , o = r.domain;
      return r.exponent = function (e) {
        return arguments.length ? (n = +e,
          o(o())) : n
      }
        ,
        r.copy = function () {
          return (0,
            c.copy)(r, a().exponent(n))
        }
        ,
        (0,
          l.linearish)(r)
    }
    function o() {
      return a().exponent(.5)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = a,
      t.sqrt = o;
    var u = n(427)
      , s = r(u)
      , l = n(227)
      , c = n(321)
      , f = r(c)
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      function e() {
        var e = 0
          , r = Math.max(1, o.length);
        for (u = new Array(r - 1); ++e < r;)
          u[e - 1] = (0,
            i.quantile)(n, e / r);
        return t
      }
      function t(e) {
        if (!isNaN(e = +e))
          return o[(0,
            i.bisect)(u, e)]
      }
      var n = []
        , o = []
        , u = [];
      return t.invertExtent = function (e) {
        var t = o.indexOf(e);
        return t < 0 ? [NaN, NaN] : [t > 0 ? u[t - 1] : n[0], t < u.length ? u[t] : n[n.length - 1]]
      }
        ,
        t.domain = function (t) {
          if (!arguments.length)
            return n.slice();
          n = [];
          for (var r, a = 0, o = t.length; a < o; ++a)
            null == (r = t[a]) || isNaN(r = +r) || n.push(r);
          return n.sort(i.ascending),
            e()
        }
        ,
        t.range = function (t) {
          return arguments.length ? (o = a.slice.call(t),
            e()) : o.slice()
        }
        ,
        t.quantiles = function () {
          return u.slice()
        }
        ,
        t.copy = function () {
          return r().domain(n).range(o)
        }
        ,
        t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = r;
    var i = n(84)
      , a = n(171);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      function e(e) {
        if (e <= e)
          return c[(0,
            i.bisect)(l, e, 0, s)]
      }
      function t() {
        var t = -1;
        for (l = new Array(s); ++t < s;)
          l[t] = ((t + 1) * u - (t - s) * n) / (s + 1);
        return e
      }
      var n = 0
        , u = 1
        , s = 1
        , l = [.5]
        , c = [0, 1];
      return e.domain = function (e) {
        return arguments.length ? (n = +e[0],
          u = +e[1],
          t()) : [n, u]
      }
        ,
        e.range = function (e) {
          return arguments.length ? (s = (c = a.slice.call(e)).length - 1,
            t()) : c.slice()
        }
        ,
        e.invertExtent = function (e) {
          var t = c.indexOf(e);
          return t < 0 ? [NaN, NaN] : t < 1 ? [n, l[0]] : t >= s ? [l[s - 1], u] : [l[t - 1], l[t]]
        }
        ,
        e.copy = function () {
          return r().domain([n, u]).range(c)
        }
        ,
        (0,
          o.linearish)(e)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = r;
    var i = n(84)
      , a = n(171)
      , o = n(227);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      function e(e) {
        if (e <= e)
          return n[(0,
            i.bisect)(t, e, 0, o)]
      }
      var t = [.5]
        , n = [0, 1]
        , o = 1;
      return e.domain = function (r) {
        return arguments.length ? (t = a.slice.call(r),
          o = Math.min(t.length, n.length - 1),
          e) : t.slice()
      }
        ,
        e.range = function (r) {
          return arguments.length ? (n = a.slice.call(r),
            o = Math.min(t.length, n.length - 1),
            e) : n.slice()
        }
        ,
        e.invertExtent = function (e) {
          var r = n.indexOf(e);
          return [t[r - 1], t[r]]
        }
        ,
        e.copy = function () {
          return r().domain(t).range(n)
        }
        ,
        e
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = r;
    var i = n(84)
      , a = n(171);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.milliseconds = void 0;
    var r = n(82)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r)
      , a = (0,
        i.default)(function () { }, function (e, t) {
          e.setTime(+e + t)
        }, function (e, t) {
          return t - e
        });
    a.every = function (e) {
      return e = Math.floor(e),
        isFinite(e) && e > 0 ? e > 1 ? (0,
          i.default)(function (t) {
            t.setTime(Math.floor(t / e) * e)
          }, function (t, n) {
            t.setTime(+t + n * e)
          }, function (t, n) {
            return (n - t) / e
          }) : a : null
    }
      ,
      t.default = a;
    t.milliseconds = a.range
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.seconds = void 0;
    var r = n(82)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r)
      , a = n(145)
      , o = (0,
        i.default)(function (e) {
          e.setTime(Math.floor(e / a.durationSecond) * a.durationSecond)
        }, function (e, t) {
          e.setTime(+e + t * a.durationSecond)
        }, function (e, t) {
          return (t - e) / a.durationSecond
        }, function (e) {
          return e.getUTCSeconds()
        });
    t.default = o;
    t.seconds = o.range
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.minutes = void 0;
    var r = n(82)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r)
      , a = n(145)
      , o = (0,
        i.default)(function (e) {
          e.setTime(Math.floor(e / a.durationMinute) * a.durationMinute)
        }, function (e, t) {
          e.setTime(+e + t * a.durationMinute)
        }, function (e, t) {
          return (t - e) / a.durationMinute
        }, function (e) {
          return e.getMinutes()
        });
    t.default = o;
    t.minutes = o.range
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.hours = void 0;
    var r = n(82)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r)
      , a = n(145)
      , o = (0,
        i.default)(function (e) {
          var t = e.getTimezoneOffset() * a.durationMinute % a.durationHour;
          t < 0 && (t += a.durationHour),
            e.setTime(Math.floor((+e - t) / a.durationHour) * a.durationHour + t)
        }, function (e, t) {
          e.setTime(+e + t * a.durationHour)
        }, function (e, t) {
          return (t - e) / a.durationHour
        }, function (e) {
          return e.getHours()
        });
    t.default = o;
    t.hours = o.range
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.days = void 0;
    var r = n(82)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r)
      , a = n(145)
      , o = (0,
        i.default)(function (e) {
          e.setHours(0, 0, 0, 0)
        }, function (e, t) {
          e.setDate(e.getDate() + t)
        }, function (e, t) {
          return (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * a.durationMinute) / a.durationDay
        }, function (e) {
          return e.getDate() - 1
        });
    t.default = o;
    t.days = o.range
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return (0,
        a.default)(function (t) {
          t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7),
            t.setHours(0, 0, 0, 0)
        }, function (e, t) {
          e.setDate(e.getDate() + 7 * t)
        }, function (e, t) {
          return (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * o.durationMinute) / o.durationWeek
        })
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.saturdays = t.fridays = t.thursdays = t.wednesdays = t.tuesdays = t.mondays = t.sundays = t.saturday = t.friday = t.thursday = t.wednesday = t.tuesday = t.monday = t.sunday = void 0;
    var i = n(82)
      , a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i)
      , o = n(145)
      , u = t.sunday = r(0)
      , s = t.monday = r(1)
      , l = t.tuesday = r(2)
      , c = t.wednesday = r(3)
      , f = t.thursday = r(4)
      , d = t.friday = r(5)
      , h = t.saturday = r(6);
    t.sundays = u.range,
      t.mondays = s.range,
      t.tuesdays = l.range,
      t.wednesdays = c.range,
      t.thursdays = f.range,
      t.fridays = d.range,
      t.saturdays = h.range
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.months = void 0;
    var r = n(82)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r)
      , a = (0,
        i.default)(function (e) {
          e.setDate(1),
            e.setHours(0, 0, 0, 0)
        }, function (e, t) {
          e.setMonth(e.getMonth() + t)
        }, function (e, t) {
          return t.getMonth() - e.getMonth() + 12 * (t.getFullYear() - e.getFullYear())
        }, function (e) {
          return e.getMonth()
        });
    t.default = a;
    t.months = a.range
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.years = void 0;
    var r = n(82)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r)
      , a = (0,
        i.default)(function (e) {
          e.setMonth(0, 1),
            e.setHours(0, 0, 0, 0)
        }, function (e, t) {
          e.setFullYear(e.getFullYear() + t)
        }, function (e, t) {
          return t.getFullYear() - e.getFullYear()
        }, function (e) {
          return e.getFullYear()
        });
    a.every = function (e) {
      return isFinite(e = Math.floor(e)) && e > 0 ? (0,
        i.default)(function (t) {
          t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0)
        }, function (t, n) {
          t.setFullYear(t.getFullYear() + n * e)
        }) : null
    }
      ,
      t.default = a;
    t.years = a.range
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.utcMinutes = void 0;
    var r = n(82)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r)
      , a = n(145)
      , o = (0,
        i.default)(function (e) {
          e.setUTCSeconds(0, 0)
        }, function (e, t) {
          e.setTime(+e + t * a.durationMinute)
        }, function (e, t) {
          return (t - e) / a.durationMinute
        }, function (e) {
          return e.getUTCMinutes()
        });
    t.default = o;
    t.utcMinutes = o.range
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.utcHours = void 0;
    var r = n(82)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r)
      , a = n(145)
      , o = (0,
        i.default)(function (e) {
          e.setUTCMinutes(0, 0, 0)
        }, function (e, t) {
          e.setTime(+e + t * a.durationHour)
        }, function (e, t) {
          return (t - e) / a.durationHour
        }, function (e) {
          return e.getUTCHours()
        });
    t.default = o;
    t.utcHours = o.range
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.utcDays = void 0;
    var r = n(82)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r)
      , a = n(145)
      , o = (0,
        i.default)(function (e) {
          e.setUTCHours(0, 0, 0, 0)
        }, function (e, t) {
          e.setUTCDate(e.getUTCDate() + t)
        }, function (e, t) {
          return (t - e) / a.durationDay
        }, function (e) {
          return e.getUTCDate() - 1
        });
    t.default = o;
    t.utcDays = o.range
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return (0,
        a.default)(function (t) {
          t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7),
            t.setUTCHours(0, 0, 0, 0)
        }, function (e, t) {
          e.setUTCDate(e.getUTCDate() + 7 * t)
        }, function (e, t) {
          return (t - e) / o.durationWeek
        })
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.utcSaturdays = t.utcFridays = t.utcThursdays = t.utcWednesdays = t.utcTuesdays = t.utcMondays = t.utcSundays = t.utcSaturday = t.utcFriday = t.utcThursday = t.utcWednesday = t.utcTuesday = t.utcMonday = t.utcSunday = void 0;
    var i = n(82)
      , a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i)
      , o = n(145)
      , u = t.utcSunday = r(0)
      , s = t.utcMonday = r(1)
      , l = t.utcTuesday = r(2)
      , c = t.utcWednesday = r(3)
      , f = t.utcThursday = r(4)
      , d = t.utcFriday = r(5)
      , h = t.utcSaturday = r(6);
    t.utcSundays = u.range,
      t.utcMondays = s.range,
      t.utcTuesdays = l.range,
      t.utcWednesdays = c.range,
      t.utcThursdays = f.range,
      t.utcFridays = d.range,
      t.utcSaturdays = h.range
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.utcMonths = void 0;
    var r = n(82)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r)
      , a = (0,
        i.default)(function (e) {
          e.setUTCDate(1),
            e.setUTCHours(0, 0, 0, 0)
        }, function (e, t) {
          e.setUTCMonth(e.getUTCMonth() + t)
        }, function (e, t) {
          return t.getUTCMonth() - e.getUTCMonth() + 12 * (t.getUTCFullYear() - e.getUTCFullYear())
        }, function (e) {
          return e.getUTCMonth()
        });
    t.default = a;
    t.utcMonths = a.range
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.utcYears = void 0;
    var r = n(82)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r)
      , a = (0,
        i.default)(function (e) {
          e.setUTCMonth(0, 1),
            e.setUTCHours(0, 0, 0, 0)
        }, function (e, t) {
          e.setUTCFullYear(e.getUTCFullYear() + t)
        }, function (e, t) {
          return t.getUTCFullYear() - e.getUTCFullYear()
        }, function (e) {
          return e.getUTCFullYear()
        });
    a.every = function (e) {
      return isFinite(e = Math.floor(e)) && e > 0 ? (0,
        i.default)(function (t) {
          t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0)
        }, function (t, n) {
          t.setUTCFullYear(t.getUTCFullYear() + n * e)
        }) : null
    }
      ,
      t.default = a;
    t.utcYears = a.range
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      var t = new Date(e);
      return isNaN(t) ? null : t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(762)
      , a = n(429)
      , o = +new Date("2000-01-01T00:00:00.000Z") ? r : (0,
        a.utcParse)(i.isoSpecifier);
    t.default = o,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        return (0,
          r.calendar)(a.utcYear, a.utcMonth, a.utcWeek, a.utcDay, a.utcHour, a.utcMinute, a.utcSecond, a.utcMillisecond, i.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)])
      }
      ;
    var r = n(760)
      , i = n(428)
      , a = n(322);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(228)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.default = (0,
      i.default)("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(228)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.default = (0,
      i.default)("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(228)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.default = (0,
      i.default)("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(228)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.default = (0,
      i.default)("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(138)
      , i = n(112);
    t.default = (0,
      i.interpolateCubehelixLong)((0,
        r.cubehelix)(300, .5, 0), (0,
          r.cubehelix)(-240, .5, 1)),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.cool = t.warm = void 0,
      t.default = function (e) {
        (e < 0 || e > 1) && (e -= Math.floor(e));
        var t = Math.abs(e - .5);
        return a.h = 360 * e - 100,
          a.s = 1.5 - 1.5 * t,
          a.l = .8 - .9 * t,
          a + ""
      }
      ;
    var r = n(138)
      , i = n(112)
      , a = (t.warm = (0,
        i.interpolateCubehelixLong)((0,
          r.cubehelix)(-100, .75, .35), (0,
            r.cubehelix)(80, 1.5, .8)),
        t.cool = (0,
          i.interpolateCubehelixLong)((0,
            r.cubehelix)(260, .75, .35), (0,
              r.cubehelix)(80, 1.5, .8)),
        (0,
          r.cubehelix)())
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      var t = e.length;
      return function (n) {
        return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))]
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.plasma = t.inferno = t.magma = void 0;
    var i = n(228)
      , a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i);
    t.default = r((0,
      a.default)("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
    t.magma = r((0,
      a.default)("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
      t.inferno = r((0,
        a.default)("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
      t.plasma = r((0,
        a.default)("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"))
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      function t(t) {
        var r = (t - n) / (a - n);
        return e(o ? Math.max(0, Math.min(1, r)) : r)
      }
      var n = 0
        , a = 1
        , o = !1;
      return t.domain = function (e) {
        return arguments.length ? (n = +e[0],
          a = +e[1],
          t) : [n, a]
      }
        ,
        t.clamp = function (e) {
          return arguments.length ? (o = !!e,
            t) : o
        }
        ,
        t.interpolator = function (n) {
          return arguments.length ? (e = n,
            t) : e
        }
        ,
        t.copy = function () {
          return r(e).domain([n, a]).clamp(o)
        }
        ,
        (0,
          i.linearish)(t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = r;
    var i = n(227);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(1724);
    Object.defineProperty(t, "arc", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    });
    var a = n(763);
    Object.defineProperty(t, "area", {
      enumerable: !0,
      get: function () {
        return r(a).default
      }
    });
    var o = n(430);
    Object.defineProperty(t, "line", {
      enumerable: !0,
      get: function () {
        return r(o).default
      }
    });
    var u = n(1725);
    Object.defineProperty(t, "pie", {
      enumerable: !0,
      get: function () {
        return r(u).default
      }
    });
    var s = n(1728);
    Object.defineProperty(t, "areaRadial", {
      enumerable: !0,
      get: function () {
        return r(s).default
      }
    }),
      Object.defineProperty(t, "radialArea", {
        enumerable: !0,
        get: function () {
          return r(s).default
        }
      });
    var l = n(765);
    Object.defineProperty(t, "lineRadial", {
      enumerable: !0,
      get: function () {
        return r(l).default
      }
    }),
      Object.defineProperty(t, "radialLine", {
        enumerable: !0,
        get: function () {
          return r(l).default
        }
      });
    var c = n(766);
    Object.defineProperty(t, "pointRadial", {
      enumerable: !0,
      get: function () {
        return r(c).default
      }
    });
    var f = n(1729);
    Object.defineProperty(t, "linkHorizontal", {
      enumerable: !0,
      get: function () {
        return f.linkHorizontal
      }
    }),
      Object.defineProperty(t, "linkVertical", {
        enumerable: !0,
        get: function () {
          return f.linkVertical
        }
      }),
      Object.defineProperty(t, "linkRadial", {
        enumerable: !0,
        get: function () {
          return f.linkRadial
        }
      });
    var d = n(1730);
    Object.defineProperty(t, "symbol", {
      enumerable: !0,
      get: function () {
        return r(d).default
      }
    }),
      Object.defineProperty(t, "symbols", {
        enumerable: !0,
        get: function () {
          return d.symbols
        }
      });
    var h = n(768);
    Object.defineProperty(t, "symbolCircle", {
      enumerable: !0,
      get: function () {
        return r(h).default
      }
    });
    var p = n(769);
    Object.defineProperty(t, "symbolCross", {
      enumerable: !0,
      get: function () {
        return r(p).default
      }
    });
    var v = n(770);
    Object.defineProperty(t, "symbolDiamond", {
      enumerable: !0,
      get: function () {
        return r(v).default
      }
    });
    var y = n(772);
    Object.defineProperty(t, "symbolSquare", {
      enumerable: !0,
      get: function () {
        return r(y).default
      }
    });
    var m = n(771);
    Object.defineProperty(t, "symbolStar", {
      enumerable: !0,
      get: function () {
        return r(m).default
      }
    });
    var g = n(773);
    Object.defineProperty(t, "symbolTriangle", {
      enumerable: !0,
      get: function () {
        return r(g).default
      }
    });
    var b = n(774);
    Object.defineProperty(t, "symbolWye", {
      enumerable: !0,
      get: function () {
        return r(b).default
      }
    });
    var _ = n(1731);
    Object.defineProperty(t, "curveBasisClosed", {
      enumerable: !0,
      get: function () {
        return r(_).default
      }
    });
    var x = n(1732);
    Object.defineProperty(t, "curveBasisOpen", {
      enumerable: !0,
      get: function () {
        return r(x).default
      }
    });
    var w = n(325);
    Object.defineProperty(t, "curveBasis", {
      enumerable: !0,
      get: function () {
        return r(w).default
      }
    });
    var P = n(1733);
    Object.defineProperty(t, "curveBundle", {
      enumerable: !0,
      get: function () {
        return r(P).default
      }
    });
    var M = n(775);
    Object.defineProperty(t, "curveCardinalClosed", {
      enumerable: !0,
      get: function () {
        return r(M).default
      }
    });
    var O = n(776);
    Object.defineProperty(t, "curveCardinalOpen", {
      enumerable: !0,
      get: function () {
        return r(O).default
      }
    });
    var E = n(326);
    Object.defineProperty(t, "curveCardinal", {
      enumerable: !0,
      get: function () {
        return r(E).default
      }
    });
    var j = n(1734);
    Object.defineProperty(t, "curveCatmullRomClosed", {
      enumerable: !0,
      get: function () {
        return r(j).default
      }
    });
    var S = n(1735);
    Object.defineProperty(t, "curveCatmullRomOpen", {
      enumerable: !0,
      get: function () {
        return r(S).default
      }
    });
    var k = n(432);
    Object.defineProperty(t, "curveCatmullRom", {
      enumerable: !0,
      get: function () {
        return r(k).default
      }
    });
    var C = n(1736);
    Object.defineProperty(t, "curveLinearClosed", {
      enumerable: !0,
      get: function () {
        return r(C).default
      }
    });
    var T = n(323);
    Object.defineProperty(t, "curveLinear", {
      enumerable: !0,
      get: function () {
        return r(T).default
      }
    });
    var N = n(1737);
    Object.defineProperty(t, "curveMonotoneX", {
      enumerable: !0,
      get: function () {
        return N.monotoneX
      }
    }),
      Object.defineProperty(t, "curveMonotoneY", {
        enumerable: !0,
        get: function () {
          return N.monotoneY
        }
      });
    var D = n(1738);
    Object.defineProperty(t, "curveNatural", {
      enumerable: !0,
      get: function () {
        return r(D).default
      }
    });
    var A = n(1739);
    Object.defineProperty(t, "curveStep", {
      enumerable: !0,
      get: function () {
        return r(A).default
      }
    }),
      Object.defineProperty(t, "curveStepAfter", {
        enumerable: !0,
        get: function () {
          return A.stepAfter
        }
      }),
      Object.defineProperty(t, "curveStepBefore", {
        enumerable: !0,
        get: function () {
          return A.stepBefore
        }
      });
    var L = n(1740);
    Object.defineProperty(t, "stack", {
      enumerable: !0,
      get: function () {
        return r(L).default
      }
    });
    var I = n(1741);
    Object.defineProperty(t, "stackOffsetExpand", {
      enumerable: !0,
      get: function () {
        return r(I).default
      }
    });
    var R = n(1742);
    Object.defineProperty(t, "stackOffsetDiverging", {
      enumerable: !0,
      get: function () {
        return r(R).default
      }
    });
    var B = n(230);
    Object.defineProperty(t, "stackOffsetNone", {
      enumerable: !0,
      get: function () {
        return r(B).default
      }
    });
    var V = n(1743);
    Object.defineProperty(t, "stackOffsetSilhouette", {
      enumerable: !0,
      get: function () {
        return r(V).default
      }
    });
    var z = n(1744);
    Object.defineProperty(t, "stackOffsetWiggle", {
      enumerable: !0,
      get: function () {
        return r(z).default
      }
    });
    var F = n(433);
    Object.defineProperty(t, "stackOrderAscending", {
      enumerable: !0,
      get: function () {
        return r(F).default
      }
    });
    var q = n(1745);
    Object.defineProperty(t, "stackOrderDescending", {
      enumerable: !0,
      get: function () {
        return r(q).default
      }
    });
    var Y = n(1746);
    Object.defineProperty(t, "stackOrderInsideOut", {
      enumerable: !0,
      get: function () {
        return r(Y).default
      }
    });
    var X = n(231);
    Object.defineProperty(t, "stackOrderNone", {
      enumerable: !0,
      get: function () {
        return r(X).default
      }
    });
    var H = n(1747);
    Object.defineProperty(t, "stackOrderReverse", {
      enumerable: !0,
      get: function () {
        return r(H).default
      }
    })
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e.innerRadius
    }
    function i(e) {
      return e.outerRadius
    }
    function a(e) {
      return e.startAngle
    }
    function o(e) {
      return e.endAngle
    }
    function u(e) {
      return e && e.padAngle
    }
    function s(e, t, n, r, i, a, o, u) {
      var s = n - e
        , l = r - t
        , c = o - i
        , f = u - a
        , d = (c * (t - a) - f * (e - i)) / (f * s - c * l);
      return [e + d * s, t + d * l]
    }
    function l(e, t, n, r, i, a, o) {
      var u = e - n
        , s = t - r
        , l = (o ? a : -a) / (0,
          h.sqrt)(u * u + s * s)
        , c = l * s
        , f = -l * u
        , d = e + c
        , p = t + f
        , v = n + c
        , y = r + f
        , m = (d + v) / 2
        , g = (p + y) / 2
        , b = v - d
        , _ = y - p
        , x = b * b + _ * _
        , w = i - a
        , P = d * y - v * p
        , M = (_ < 0 ? -1 : 1) * (0,
          h.sqrt)((0,
            h.max)(0, w * w * x - P * P))
        , O = (P * _ - b * M) / x
        , E = (-P * b - _ * M) / x
        , j = (P * _ + b * M) / x
        , S = (-P * b + _ * M) / x
        , k = O - m
        , C = E - g
        , T = j - m
        , N = S - g;
      return k * k + C * C > T * T + N * N && (O = j,
        E = S),
        {
          cx: O,
          cy: E,
          x01: -c,
          y01: -f,
          x11: O * (i / w - 1),
          y11: E * (i / w - 1)
        }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        function e() {
          var e, r, i = +t.apply(this, arguments), a = +n.apply(this, arguments), o = v.apply(this, arguments) - h.halfPi, u = y.apply(this, arguments) - h.halfPi, d = (0,
            h.abs)(u - o), b = u > o;
          if (g || (g = e = (0,
            c.path)()),
            a < i && (r = a,
              a = i,
              i = r),
            a > h.epsilon)
            if (d > h.tau - h.epsilon)
              g.moveTo(a * (0,
                h.cos)(o), a * (0,
                  h.sin)(o)),
                g.arc(0, 0, a, o, u, !b),
                i > h.epsilon && (g.moveTo(i * (0,
                  h.cos)(u), i * (0,
                    h.sin)(u)),
                  g.arc(0, 0, i, u, o, b));
            else {
              var _, x, w = o, P = u, M = o, O = u, E = d, j = d, S = m.apply(this, arguments) / 2, k = S > h.epsilon && (p ? +p.apply(this, arguments) : (0,
                h.sqrt)(i * i + a * a)), C = (0,
                  h.min)((0,
                    h.abs)(a - i) / 2, +f.apply(this, arguments)), T = C, N = C;
              if (k > h.epsilon) {
                var D = (0,
                  h.asin)(k / i * (0,
                    h.sin)(S))
                  , A = (0,
                    h.asin)(k / a * (0,
                      h.sin)(S));
                (E -= 2 * D) > h.epsilon ? (D *= b ? 1 : -1,
                  M += D,
                  O -= D) : (E = 0,
                    M = O = (o + u) / 2),
                  (j -= 2 * A) > h.epsilon ? (A *= b ? 1 : -1,
                    w += A,
                    P -= A) : (j = 0,
                      w = P = (o + u) / 2)
              }
              var L = a * (0,
                h.cos)(w)
                , I = a * (0,
                  h.sin)(w)
                , R = i * (0,
                  h.cos)(O)
                , B = i * (0,
                  h.sin)(O);
              if (C > h.epsilon) {
                var V = a * (0,
                  h.cos)(P)
                  , z = a * (0,
                    h.sin)(P)
                  , F = i * (0,
                    h.cos)(M)
                  , q = i * (0,
                    h.sin)(M);
                if (d < h.pi) {
                  var Y = E > h.epsilon ? s(L, I, F, q, V, z, R, B) : [R, B]
                    , X = L - Y[0]
                    , H = I - Y[1]
                    , U = V - Y[0]
                    , W = z - Y[1]
                    , $ = 1 / (0,
                      h.sin)((0,
                        h.acos)((X * U + H * W) / ((0,
                          h.sqrt)(X * X + H * H) * (0,
                            h.sqrt)(U * U + W * W))) / 2)
                    , G = (0,
                      h.sqrt)(Y[0] * Y[0] + Y[1] * Y[1]);
                  T = (0,
                    h.min)(C, (i - G) / ($ - 1)),
                    N = (0,
                      h.min)(C, (a - G) / ($ + 1))
                }
              }
              j > h.epsilon ? N > h.epsilon ? (_ = l(F, q, L, I, a, N, b),
                x = l(V, z, R, B, a, N, b),
                g.moveTo(_.cx + _.x01, _.cy + _.y01),
                N < C ? g.arc(_.cx, _.cy, N, (0,
                  h.atan2)(_.y01, _.x01), (0,
                    h.atan2)(x.y01, x.x01), !b) : (g.arc(_.cx, _.cy, N, (0,
                      h.atan2)(_.y01, _.x01), (0,
                        h.atan2)(_.y11, _.x11), !b),
                      g.arc(0, 0, a, (0,
                        h.atan2)(_.cy + _.y11, _.cx + _.x11), (0,
                          h.atan2)(x.cy + x.y11, x.cx + x.x11), !b),
                      g.arc(x.cx, x.cy, N, (0,
                        h.atan2)(x.y11, x.x11), (0,
                          h.atan2)(x.y01, x.x01), !b))) : (g.moveTo(L, I),
                            g.arc(0, 0, a, w, P, !b)) : g.moveTo(L, I),
                i > h.epsilon && E > h.epsilon ? T > h.epsilon ? (_ = l(R, B, V, z, i, -T, b),
                  x = l(L, I, F, q, i, -T, b),
                  g.lineTo(_.cx + _.x01, _.cy + _.y01),
                  T < C ? g.arc(_.cx, _.cy, T, (0,
                    h.atan2)(_.y01, _.x01), (0,
                      h.atan2)(x.y01, x.x01), !b) : (g.arc(_.cx, _.cy, T, (0,
                        h.atan2)(_.y01, _.x01), (0,
                          h.atan2)(_.y11, _.x11), !b),
                        g.arc(0, 0, i, (0,
                          h.atan2)(_.cy + _.y11, _.cx + _.x11), (0,
                            h.atan2)(x.cy + x.y11, x.cx + x.x11), b),
                        g.arc(x.cx, x.cy, T, (0,
                          h.atan2)(x.y11, x.x11), (0,
                            h.atan2)(x.y01, x.x01), !b))) : g.arc(0, 0, i, O, M, b) : g.lineTo(R, B)
            }
          else
            g.moveTo(0, 0);
          if (g.closePath(),
            e)
            return g = null,
              e + "" || null
        }
        var t = r
          , n = i
          , f = (0,
            d.default)(0)
          , p = null
          , v = a
          , y = o
          , m = u
          , g = null;
        return e.centroid = function () {
          var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2
            , r = (+v.apply(this, arguments) + +y.apply(this, arguments)) / 2 - h.pi / 2;
          return [(0,
            h.cos)(r) * e, (0,
              h.sin)(r) * e]
        }
          ,
          e.innerRadius = function (n) {
            return arguments.length ? (t = "function" == typeof n ? n : (0,
              d.default)(+n),
              e) : t
          }
          ,
          e.outerRadius = function (t) {
            return arguments.length ? (n = "function" == typeof t ? t : (0,
              d.default)(+t),
              e) : n
          }
          ,
          e.cornerRadius = function (t) {
            return arguments.length ? (f = "function" == typeof t ? t : (0,
              d.default)(+t),
              e) : f
          }
          ,
          e.padRadius = function (t) {
            return arguments.length ? (p = null == t ? null : "function" == typeof t ? t : (0,
              d.default)(+t),
              e) : p
          }
          ,
          e.startAngle = function (t) {
            return arguments.length ? (v = "function" == typeof t ? t : (0,
              d.default)(+t),
              e) : v
          }
          ,
          e.endAngle = function (t) {
            return arguments.length ? (y = "function" == typeof t ? t : (0,
              d.default)(+t),
              e) : y
          }
          ,
          e.padAngle = function (t) {
            return arguments.length ? (m = "function" == typeof t ? t : (0,
              d.default)(+t),
              e) : m
          }
          ,
          e.context = function (t) {
            return arguments.length ? (g = null == t ? null : t,
              e) : g
          }
          ,
          e
      }
      ;
    var c = n(169)
      , f = n(172)
      , d = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(f)
      , h = n(229);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        function e(e) {
          var a, u, l, f, d, h = e.length, p = 0, v = new Array(h), y = new Array(h), m = +i.apply(this, arguments), g = Math.min(c.tau, Math.max(-c.tau, o.apply(this, arguments) - m)), b = Math.min(Math.abs(g) / h, s.apply(this, arguments)), _ = b * (g < 0 ? -1 : 1);
          for (a = 0; a < h; ++a)
            (d = y[v[a] = a] = +t(e[a], a, e)) > 0 && (p += d);
          for (null != n ? v.sort(function (e, t) {
            return n(y[e], y[t])
          }) : null != r && v.sort(function (t, n) {
            return r(e[t], e[n])
          }),
            a = 0,
            l = p ? (g - h * _) / p : 0; a < h; ++a,
            m = f)
            u = v[a],
              d = y[u],
              f = m + (d > 0 ? d * l : 0) + _,
              y[u] = {
                data: e[u],
                index: a,
                value: d,
                startAngle: m,
                endAngle: f,
                padAngle: b
              };
          return y
        }
        var t = l.default
          , n = u.default
          , r = null
          , i = (0,
            a.default)(0)
          , o = (0,
            a.default)(c.tau)
          , s = (0,
            a.default)(0);
        return e.value = function (n) {
          return arguments.length ? (t = "function" == typeof n ? n : (0,
            a.default)(+n),
            e) : t
        }
          ,
          e.sortValues = function (t) {
            return arguments.length ? (n = t,
              r = null,
              e) : n
          }
          ,
          e.sort = function (t) {
            return arguments.length ? (r = t,
              n = null,
              e) : r
          }
          ,
          e.startAngle = function (t) {
            return arguments.length ? (i = "function" == typeof t ? t : (0,
              a.default)(+t),
              e) : i
          }
          ,
          e.endAngle = function (t) {
            return arguments.length ? (o = "function" == typeof t ? t : (0,
              a.default)(+t),
              e) : o
          }
          ,
          e.padAngle = function (t) {
            return arguments.length ? (s = "function" == typeof t ? t : (0,
              a.default)(+t),
              e) : s
          }
          ,
          e
      }
      ;
    var i = n(172)
      , a = r(i)
      , o = n(1726)
      , u = r(o)
      , s = n(1727)
      , l = r(s)
      , c = n(229);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return e
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        var e = (0,
          u.default)().curve(i.curveRadialLinear)
          , t = e.curve
          , n = e.lineX0
          , r = e.lineX1
          , o = e.lineY0
          , l = e.lineY1;
        return e.angle = e.x,
          delete e.x,
          e.startAngle = e.x0,
          delete e.x0,
          e.endAngle = e.x1,
          delete e.x1,
          e.radius = e.y,
          delete e.y,
          e.innerRadius = e.y0,
          delete e.y0,
          e.outerRadius = e.y1,
          delete e.y1,
          e.lineStartAngle = function () {
            return (0,
              s.lineRadial)(n())
          }
          ,
          delete e.lineX0,
          e.lineEndAngle = function () {
            return (0,
              s.lineRadial)(r())
          }
          ,
          delete e.lineX1,
          e.lineInnerRadius = function () {
            return (0,
              s.lineRadial)(o())
          }
          ,
          delete e.lineY0,
          e.lineOuterRadius = function () {
            return (0,
              s.lineRadial)(l())
          }
          ,
          delete e.lineY1,
          e.curve = function (e) {
            return arguments.length ? t((0,
              a.default)(e)) : t()._curve
          }
          ,
          e
      }
      ;
    var i = n(764)
      , a = r(i)
      , o = n(763)
      , u = r(o)
      , s = n(765);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e) {
      return e.source
    }
    function a(e) {
      return e.target
    }
    function o(e) {
      function t() {
        var t, i = p.slice.call(arguments), a = n.apply(this, i), l = r.apply(this, i);
        if (s || (s = t = (0,
          h.path)()),
          e(s, +o.apply(this, (i[0] = a,
            i)), +u.apply(this, i), +o.apply(this, (i[0] = l,
              i)), +u.apply(this, i)),
          t)
          return s = null,
            t + "" || null
      }
      var n = i
        , r = a
        , o = m.x
        , u = m.y
        , s = null;
      return t.source = function (e) {
        return arguments.length ? (n = e,
          t) : n
      }
        ,
        t.target = function (e) {
          return arguments.length ? (r = e,
            t) : r
        }
        ,
        t.x = function (e) {
          return arguments.length ? (o = "function" == typeof e ? e : (0,
            y.default)(+e),
            t) : o
        }
        ,
        t.y = function (e) {
          return arguments.length ? (u = "function" == typeof e ? e : (0,
            y.default)(+e),
            t) : u
        }
        ,
        t.context = function (e) {
          return arguments.length ? (s = null == e ? null : e,
            t) : s
        }
        ,
        t
    }
    function u(e, t, n, r, i) {
      e.moveTo(t, n),
        e.bezierCurveTo(t = (t + r) / 2, n, t, i, r, i)
    }
    function s(e, t, n, r, i) {
      e.moveTo(t, n),
        e.bezierCurveTo(t, n = (n + i) / 2, r, n, r, i)
    }
    function l(e, t, n, r, i) {
      var a = (0,
        b.default)(t, n)
        , o = (0,
          b.default)(t, n = (n + i) / 2)
        , u = (0,
          b.default)(r, n)
        , s = (0,
          b.default)(r, i);
      e.moveTo(a[0], a[1]),
        e.bezierCurveTo(o[0], o[1], u[0], u[1], s[0], s[1])
    }
    function c() {
      return o(u)
    }
    function f() {
      return o(s)
    }
    function d() {
      var e = o(l);
      return e.angle = e.x,
        delete e.x,
        e.radius = e.y,
        delete e.y,
        e
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.linkHorizontal = c,
      t.linkVertical = f,
      t.linkRadial = d;
    var h = n(169)
      , p = n(767)
      , v = n(172)
      , y = r(v)
      , m = n(431)
      , g = n(766)
      , b = r(g)
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.symbols = void 0,
      t.default = function () {
        function e() {
          var e;
          if (r || (r = e = (0,
            i.path)()),
            t.apply(this, arguments).draw(r, +n.apply(this, arguments)),
            e)
            return r = null,
              e + "" || null
        }
        var t = (0,
          _.default)(o.default)
          , n = (0,
            _.default)(64)
          , r = null;
        return e.type = function (n) {
          return arguments.length ? (t = "function" == typeof n ? n : (0,
            _.default)(n),
            e) : t
        }
          ,
          e.size = function (t) {
            return arguments.length ? (n = "function" == typeof t ? t : (0,
              _.default)(+t),
              e) : n
          }
          ,
          e.context = function (t) {
            return arguments.length ? (r = null == t ? null : t,
              e) : r
          }
          ,
          e
      }
      ;
    var i = n(169)
      , a = n(768)
      , o = r(a)
      , u = n(769)
      , s = r(u)
      , l = n(770)
      , c = r(l)
      , f = n(771)
      , d = r(f)
      , h = n(772)
      , p = r(h)
      , v = n(773)
      , y = r(v)
      , m = n(774)
      , g = r(m)
      , b = n(172)
      , _ = r(b);
    t.symbols = [o.default, s.default, c.default, p.default, d.default, y.default, g.default]
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      this._context = e
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return new r(e)
      }
      ;
    var i = n(324)
      , a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i)
      , o = n(325);
    r.prototype = {
      areaStart: a.default,
      areaEnd: a.default,
      lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN,
          this._point = 0
      },
      lineEnd: function () {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x2, this._y2),
              this._context.closePath();
            break;
          case 2:
            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
              this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
              this._context.closePath();
            break;
          case 3:
            this.point(this._x2, this._y2),
              this.point(this._x3, this._y3),
              this.point(this._x4, this._y4)
        }
      },
      point: function (e, t) {
        switch (e = +e,
        t = +t,
        this._point) {
          case 0:
            this._point = 1,
              this._x2 = e,
              this._y2 = t;
            break;
          case 1:
            this._point = 2,
              this._x3 = e,
              this._y3 = t;
            break;
          case 2:
            this._point = 3,
              this._x4 = e,
              this._y4 = t,
              this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
            break;
          default:
            (0,
              o.point)(this, e, t)
        }
        this._x0 = this._x1,
          this._x1 = e,
          this._y0 = this._y1,
          this._y1 = t
      }
    },
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      this._context = e
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return new r(e)
      }
      ;
    var i = n(325);
    r.prototype = {
      areaStart: function () {
        this._line = 0
      },
      areaEnd: function () {
        this._line = NaN
      },
      lineStart: function () {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN,
          this._point = 0
      },
      lineEnd: function () {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
          this._line = 1 - this._line
      },
      point: function (e, t) {
        switch (e = +e,
        t = +t,
        this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var n = (this._x0 + 4 * this._x1 + e) / 6
              , r = (this._y0 + 4 * this._y1 + t) / 6;
            this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
            break;
          case 3:
            this._point = 4;
          default:
            (0,
              i.point)(this, e, t)
        }
        this._x0 = this._x1,
          this._x1 = e,
          this._y0 = this._y1,
          this._y1 = t
      }
    },
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      this._basis = new i.Basis(e),
        this._beta = t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(325);
    r.prototype = {
      lineStart: function () {
        this._x = [],
          this._y = [],
          this._basis.lineStart()
      },
      lineEnd: function () {
        var e = this._x
          , t = this._y
          , n = e.length - 1;
        if (n > 0)
          for (var r, i = e[0], a = t[0], o = e[n] - i, u = t[n] - a, s = -1; ++s <= n;)
            r = s / n,
              this._basis.point(this._beta * e[s] + (1 - this._beta) * (i + r * o), this._beta * t[s] + (1 - this._beta) * (a + r * u));
        this._x = this._y = null,
          this._basis.lineEnd()
      },
      point: function (e, t) {
        this._x.push(+e),
          this._y.push(+t)
      }
    },
      t.default = function e(t) {
        function n(e) {
          return 1 === t ? new i.Basis(e) : new r(e, t)
        }
        return n.beta = function (t) {
          return e(+t)
        }
          ,
          n
      }(.85),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      this._context = e,
        this._alpha = t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(775)
      , a = n(324)
      , o = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(a)
      , u = n(432);
    r.prototype = {
      areaStart: o.default,
      areaEnd: o.default,
      lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN,
          this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
      },
      lineEnd: function () {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3),
              this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3),
              this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3),
              this.point(this._x4, this._y4),
              this.point(this._x5, this._y5)
        }
      },
      point: function (e, t) {
        if (e = +e,
          t = +t,
          this._point) {
          var n = this._x2 - e
            , r = this._y2 - t;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha))
        }
        switch (this._point) {
          case 0:
            this._point = 1,
              this._x3 = e,
              this._y3 = t;
            break;
          case 1:
            this._point = 2,
              this._context.moveTo(this._x4 = e, this._y4 = t);
            break;
          case 2:
            this._point = 3,
              this._x5 = e,
              this._y5 = t;
            break;
          default:
            (0,
              u.point)(this, e, t)
        }
        this._l01_a = this._l12_a,
          this._l12_a = this._l23_a,
          this._l01_2a = this._l12_2a,
          this._l12_2a = this._l23_2a,
          this._x0 = this._x1,
          this._x1 = this._x2,
          this._x2 = e,
          this._y0 = this._y1,
          this._y1 = this._y2,
          this._y2 = t
      }
    },
      t.default = function e(t) {
        function n(e) {
          return t ? new r(e, t) : new i.CardinalClosed(e, 0)
        }
        return n.alpha = function (t) {
          return e(+t)
        }
          ,
          n
      }(.5),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      this._context = e,
        this._alpha = t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(776)
      , a = n(432);
    r.prototype = {
      areaStart: function () {
        this._line = 0
      },
      areaEnd: function () {
        this._line = NaN
      },
      lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
          this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
      },
      lineEnd: function () {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
          this._line = 1 - this._line
      },
      point: function (e, t) {
        if (e = +e,
          t = +t,
          this._point) {
          var n = this._x2 - e
            , r = this._y2 - t;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha))
        }
        switch (this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3,
              this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            (0,
              a.point)(this, e, t)
        }
        this._l01_a = this._l12_a,
          this._l12_a = this._l23_a,
          this._l01_2a = this._l12_2a,
          this._l12_2a = this._l23_2a,
          this._x0 = this._x1,
          this._x1 = this._x2,
          this._x2 = e,
          this._y0 = this._y1,
          this._y1 = this._y2,
          this._y2 = t
      }
    },
      t.default = function e(t) {
        function n(e) {
          return t ? new r(e, t) : new i.CardinalOpen(e, 0)
        }
        return n.alpha = function (t) {
          return e(+t)
        }
          ,
          n
      }(.5),
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      this._context = e
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return new r(e)
      }
      ;
    var i = n(324)
      , a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i);
    r.prototype = {
      areaStart: a.default,
      areaEnd: a.default,
      lineStart: function () {
        this._point = 0
      },
      lineEnd: function () {
        this._point && this._context.closePath()
      },
      point: function (e, t) {
        e = +e,
          t = +t,
          this._point ? this._context.lineTo(e, t) : (this._point = 1,
            this._context.moveTo(e, t))
      }
    },
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e < 0 ? -1 : 1
    }
    function i(e, t, n) {
      var i = e._x1 - e._x0
        , a = t - e._x1
        , o = (e._y1 - e._y0) / (i || a < 0 && -0)
        , u = (n - e._y1) / (a || i < 0 && -0)
        , s = (o * a + u * i) / (i + a);
      return (r(o) + r(u)) * Math.min(Math.abs(o), Math.abs(u), .5 * Math.abs(s)) || 0
    }
    function a(e, t) {
      var n = e._x1 - e._x0;
      return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t
    }
    function o(e, t, n) {
      var r = e._x0
        , i = e._y0
        , a = e._x1
        , o = e._y1
        , u = (a - r) / 3;
      e._context.bezierCurveTo(r + u, i + u * t, a - u, o - u * n, a, o)
    }
    function u(e) {
      this._context = e
    }
    function s(e) {
      this._context = new l(e)
    }
    function l(e) {
      this._context = e
    }
    function c(e) {
      return new u(e)
    }
    function f(e) {
      return new s(e)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.monotoneX = c,
      t.monotoneY = f,
      u.prototype = {
        areaStart: function () {
          this._line = 0
        },
        areaEnd: function () {
          this._line = NaN
        },
        lineStart: function () {
          this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN,
            this._point = 0
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x1, this._y1);
              break;
            case 3:
              o(this, this._t0, a(this, this._t0))
          }
          (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function (e, t) {
          var n = NaN;
          if (e = +e,
            t = +t,
            e !== this._x1 || t !== this._y1) {
            switch (this._point) {
              case 0:
                this._point = 1,
                  this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3,
                  o(this, a(this, n = i(this, e, t)), n);
                break;
              default:
                o(this, this._t0, n = i(this, e, t))
            }
            this._x0 = this._x1,
              this._x1 = e,
              this._y0 = this._y1,
              this._y1 = t,
              this._t0 = n
          }
        }
      },
      (s.prototype = Object.create(u.prototype)).point = function (e, t) {
        u.prototype.point.call(this, t, e)
      }
      ,
      l.prototype = {
        moveTo: function (e, t) {
          this._context.moveTo(t, e)
        },
        closePath: function () {
          this._context.closePath()
        },
        lineTo: function (e, t) {
          this._context.lineTo(t, e)
        },
        bezierCurveTo: function (e, t, n, r, i, a) {
          this._context.bezierCurveTo(t, e, r, n, a, i)
        }
      }
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      this._context = e
    }
    function i(e) {
      var t, n, r = e.length - 1, i = new Array(r), a = new Array(r), o = new Array(r);
      for (i[0] = 0,
        a[0] = 2,
        o[0] = e[0] + 2 * e[1],
        t = 1; t < r - 1; ++t)
        i[t] = 1,
          a[t] = 4,
          o[t] = 4 * e[t] + 2 * e[t + 1];
      for (i[r - 1] = 2,
        a[r - 1] = 7,
        o[r - 1] = 8 * e[r - 1] + e[r],
        t = 1; t < r; ++t)
        n = i[t] / a[t - 1],
          a[t] -= n,
          o[t] -= n * o[t - 1];
      for (i[r - 1] = o[r - 1] / a[r - 1],
        t = r - 2; t >= 0; --t)
        i[t] = (o[t] - i[t + 1]) / a[t];
      for (a[r - 1] = (e[r] + i[r - 1]) / 2,
        t = 0; t < r - 1; ++t)
        a[t] = 2 * e[t + 1] - i[t + 1];
      return [i, a]
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return new r(e)
      }
      ,
      r.prototype = {
        areaStart: function () {
          this._line = 0
        },
        areaEnd: function () {
          this._line = NaN
        },
        lineStart: function () {
          this._x = [],
            this._y = []
        },
        lineEnd: function () {
          var e = this._x
            , t = this._y
            , n = e.length;
          if (n)
            if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]),
              2 === n)
              this._context.lineTo(e[1], t[1]);
            else
              for (var r = i(e), a = i(t), o = 0, u = 1; u < n; ++o,
                ++u)
                this._context.bezierCurveTo(r[0][o], a[0][o], r[1][o], a[1][o], e[u], t[u]);
          (this._line || 0 !== this._line && 1 === n) && this._context.closePath(),
            this._line = 1 - this._line,
            this._x = this._y = null
        },
        point: function (e, t) {
          this._x.push(+e),
            this._y.push(+t)
        }
      },
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t) {
      this._context = e,
        this._t = t
    }
    function i(e) {
      return new r(e, 0)
    }
    function a(e) {
      return new r(e, 1)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return new r(e, .5)
      }
      ,
      t.stepBefore = i,
      t.stepAfter = a,
      r.prototype = {
        areaStart: function () {
          this._line = 0
        },
        areaEnd: function () {
          this._line = NaN
        },
        lineStart: function () {
          this._x = this._y = NaN,
            this._point = 0
        },
        lineEnd: function () {
          0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y),
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line >= 0 && (this._t = 1 - this._t,
              this._line = 1 - this._line)
        },
        point: function (e, t) {
          switch (e = +e,
          t = +t,
          this._point) {
            case 0:
              this._point = 1,
                this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
              break;
            case 1:
              this._point = 2;
            default:
              if (this._t <= 0)
                this._context.lineTo(this._x, t),
                  this._context.lineTo(e, t);
              else {
                var n = this._x * (1 - this._t) + e * this._t;
                this._context.lineTo(n, this._y),
                  this._context.lineTo(n, t)
              }
          }
          this._x = e,
            this._y = t
        }
      }
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e, t) {
      return e[t]
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        function e(e) {
          var i, a, u = t.apply(this, arguments), s = e.length, l = u.length, c = new Array(l);
          for (i = 0; i < l; ++i) {
            for (var f, d = u[i], h = c[i] = new Array(s), p = 0; p < s; ++p)
              h[p] = f = [0, +o(e[p], d, p, e)],
                f.data = e[p];
            h.key = d
          }
          for (i = 0,
            a = n(c); i < l; ++i)
            c[a[i]].index = i;
          return r(c, a),
            c
        }
        var t = (0,
          u.default)([])
          , n = f.default
          , r = l.default
          , o = i;
        return e.keys = function (n) {
          return arguments.length ? (t = "function" == typeof n ? n : (0,
            u.default)(a.slice.call(n)),
            e) : t
        }
          ,
          e.value = function (t) {
            return arguments.length ? (o = "function" == typeof t ? t : (0,
              u.default)(+t),
              e) : o
          }
          ,
          e.order = function (t) {
            return arguments.length ? (n = null == t ? f.default : "function" == typeof t ? t : (0,
              u.default)(a.slice.call(t)),
              e) : n
          }
          ,
          e.offset = function (t) {
            return arguments.length ? (r = null == t ? l.default : t,
              e) : r
          }
          ,
          e
      }
      ;
    var a = n(767)
      , o = n(172)
      , u = r(o)
      , s = n(230)
      , l = r(s)
      , c = n(231)
      , f = r(c);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        if ((r = e.length) > 0) {
          for (var n, r, a, o = 0, u = e[0].length; o < u; ++o) {
            for (a = n = 0; n < r; ++n)
              a += e[n][o][1] || 0;
            if (a)
              for (n = 0; n < r; ++n)
                e[n][o][1] /= a
          }
          (0,
            i.default)(e, t)
        }
      }
      ;
    var r = n(230)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        if ((u = e.length) > 1)
          for (var n, r, i, a, o, u, s = 0, l = e[t[0]].length; s < l; ++s)
            for (a = o = 0,
              n = 0; n < u; ++n)
              (i = (r = e[t[n]][s])[1] - r[0]) >= 0 ? (r[0] = a,
                r[1] = a += i) : i < 0 ? (r[1] = o,
                  r[0] = o += i) : r[0] = a
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        if ((n = e.length) > 0) {
          for (var n, r = 0, a = e[t[0]], o = a.length; r < o; ++r) {
            for (var u = 0, s = 0; u < n; ++u)
              s += e[u][r][1] || 0;
            a[r][1] += a[r][0] = -s / 2
          }
          (0,
            i.default)(e, t)
        }
      }
      ;
    var r = n(230)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        if ((a = e.length) > 0 && (r = (n = e[t[0]]).length) > 0) {
          for (var n, r, a, o = 0, u = 1; u < r; ++u) {
            for (var s = 0, l = 0, c = 0; s < a; ++s) {
              for (var f = e[t[s]], d = f[u][1] || 0, h = f[u - 1][1] || 0, p = (d - h) / 2, v = 0; v < s; ++v) {
                var y = e[t[v]];
                p += (y[u][1] || 0) - (y[u - 1][1] || 0)
              }
              l += d,
                c += p * d
            }
            n[u - 1][1] += n[u - 1][0] = o,
              l && (o -= c / l)
          }
          n[u - 1][1] += n[u - 1][0] = o,
            (0,
              i.default)(e, t)
        }
      }
      ;
    var r = n(230)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return (0,
          i.default)(e).reverse()
      }
      ;
    var r = n(433)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        var t, n, r = e.length, o = e.map(a.sum), u = (0,
          i.default)(e).sort(function (e, t) {
            return o[t] - o[e]
          }), s = 0, l = 0, c = [], f = [];
        for (t = 0; t < r; ++t)
          n = u[t],
            s < l ? (s += o[n],
              c.push(n)) : (l += o[n],
                f.push(n));
        return f.reverse().concat(c)
      }
      ;
    var r = n(231)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r)
      , a = n(433);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return (0,
          i.default)(e).reverse()
      }
      ;
    var r = n(231)
      , i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(1749);
    Object.defineProperty(t, "voronoi", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    })
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        function e(e) {
          return new s.default(e.map(function (r, i) {
            var a = [Math.round(t(r, i, e) / u.epsilon) * u.epsilon, Math.round(n(r, i, e) / u.epsilon) * u.epsilon];
            return a.index = i,
              a.data = r,
              a
          }), r)
        }
        var t = o.x
          , n = o.y
          , r = null;
        return e.polygons = function (t) {
          return e(t).polygons()
        }
          ,
          e.links = function (t) {
            return e(t).links()
          }
          ,
          e.triangles = function (t) {
            return e(t).triangles()
          }
          ,
          e.x = function (n) {
            return arguments.length ? (t = "function" == typeof n ? n : (0,
              a.default)(+n),
              e) : t
          }
          ,
          e.y = function (t) {
            return arguments.length ? (n = "function" == typeof t ? t : (0,
              a.default)(+t),
              e) : n
          }
          ,
          e.extent = function (t) {
            return arguments.length ? (r = null == t ? null : [[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]],
              e) : r && [[r[0][0], r[0][1]], [r[1][0], r[1][1]]]
          }
          ,
          e.size = function (t) {
            return arguments.length ? (r = null == t ? null : [[0, 0], [+t[0], +t[1]]],
              e) : r && [r[1][0] - r[0][0], r[1][1] - r[0][1]]
          }
          ,
          e
      }
      ;
    var i = n(1750)
      , a = r(i)
      , o = n(1751)
      , u = n(232)
      , s = r(u);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return function () {
          return e
        }
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e[0]
    }
    function i(e) {
      return e[1]
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.x = r,
      t.y = i
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      (0,
        c.RedBlackNode)(this),
        this.edge = this.site = this.circle = null
    }
    function i(e) {
      var t = v.pop() || new r;
      return t.site = e,
        t
    }
    function a(e) {
      (0,
        d.detachCircle)(e),
        p.beaches.remove(e),
        v.push(e),
        (0,
          c.RedBlackNode)(e)
    }
    function o(e) {
      var t = e.circle
        , n = t.x
        , r = t.cy
        , i = [n, r]
        , o = e.P
        , u = e.N
        , s = [e];
      a(e);
      for (var l = o; l.circle && Math.abs(n - l.circle.x) < p.epsilon && Math.abs(r - l.circle.cy) < p.epsilon;)
        o = l.P,
          s.unshift(l),
          a(l),
          l = o;
      s.unshift(l),
        (0,
          d.detachCircle)(l);
      for (var c = u; c.circle && Math.abs(n - c.circle.x) < p.epsilon && Math.abs(r - c.circle.cy) < p.epsilon;)
        u = c.N,
          s.push(c),
          a(c),
          c = u;
      s.push(c),
        (0,
          d.detachCircle)(c);
      var f, v = s.length;
      for (f = 1; f < v; ++f)
        c = s[f],
          l = s[f - 1],
          (0,
            h.setEdgeEnd)(c.edge, l.site, c.site, i);
      l = s[0],
        c = s[v - 1],
        c.edge = (0,
          h.createEdge)(l.site, c.site, null, i),
        (0,
          d.attachCircle)(l),
        (0,
          d.attachCircle)(c)
    }
    function u(e) {
      for (var t, n, r, a, o = e[0], u = e[1], c = p.beaches._; c;)
        if ((r = s(c, u) - o) > p.epsilon)
          c = c.L;
        else {
          if (!((a = o - l(c, u)) > p.epsilon)) {
            r > -p.epsilon ? (t = c.P,
              n = c) : a > -p.epsilon ? (t = c,
                n = c.N) : t = n = c;
            break
          }
          if (!c.R) {
            t = c;
            break
          }
          c = c.R
        }
      (0,
        f.createCell)(e);
      var v = i(e);
      if (p.beaches.insert(t, v),
        t || n) {
        if (t === n)
          return (0,
            d.detachCircle)(t),
            n = i(t.site),
            p.beaches.insert(v, n),
            v.edge = n.edge = (0,
              h.createEdge)(t.site, v.site),
            (0,
              d.attachCircle)(t),
            void (0,
              d.attachCircle)(n);
        if (!n)
          return void (v.edge = (0,
            h.createEdge)(t.site, v.site));
        (0,
          d.detachCircle)(t),
          (0,
            d.detachCircle)(n);
        var y = t.site
          , m = y[0]
          , g = y[1]
          , b = e[0] - m
          , _ = e[1] - g
          , x = n.site
          , w = x[0] - m
          , P = x[1] - g
          , M = 2 * (b * P - _ * w)
          , O = b * b + _ * _
          , E = w * w + P * P
          , j = [(P * O - _ * E) / M + m, (b * E - w * O) / M + g];
        (0,
          h.setEdgeEnd)(n.edge, y, x, j),
          v.edge = (0,
            h.createEdge)(y, e, null, j),
          n.edge = (0,
            h.createEdge)(e, x, null, j),
          (0,
            d.attachCircle)(t),
          (0,
            d.attachCircle)(n)
      }
    }
    function s(e, t) {
      var n = e.site
        , r = n[0]
        , i = n[1]
        , a = i - t;
      if (!a)
        return r;
      var o = e.P;
      if (!o)
        return -1 / 0;
      n = o.site;
      var u = n[0]
        , s = n[1]
        , l = s - t;
      if (!l)
        return u;
      var c = u - r
        , f = 1 / a - 1 / l
        , d = c / l;
      return f ? (-d + Math.sqrt(d * d - 2 * f * (c * c / (-2 * l) - s + l / 2 + i - a / 2))) / f + r : (r + u) / 2
    }
    function l(e, t) {
      var n = e.N;
      if (n)
        return s(n, t);
      var r = e.site;
      return r[1] === t ? r[0] : 1 / 0
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.removeBeach = o,
      t.addBeach = u;
    var c = n(434)
      , f = n(777)
      , d = n(778)
      , h = n(435)
      , p = n(232)
      , v = []
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(1754);
    Object.defineProperty(t, "zoom", {
      enumerable: !0,
      get: function () {
        return r(i).default
      }
    });
    var a = n(779);
    Object.defineProperty(t, "zoomTransform", {
      enumerable: !0,
      get: function () {
        return r(a).default
      }
    }),
      Object.defineProperty(t, "zoomIdentity", {
        enumerable: !0,
        get: function () {
          return a.identity
        }
      })
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i() {
      return !h.event.button
    }
    function a() {
      var e, t, n = this;
      return n instanceof SVGElement ? (n = n.ownerSVGElement || n,
        e = n.width.baseVal.value,
        t = n.height.baseVal.value) : (e = n.clientWidth,
          t = n.clientHeight),
        [[0, 0], [e, t]]
    }
    function o() {
      return this.__zoom || b.identity
    }
    function u() {
      return -h.event.deltaY * (h.event.deltaMode ? 120 : 1) / 500
    }
    function s() {
      return "ontouchstart" in this
    }
    function l(e, t, n) {
      var r = e.invertX(t[0][0]) - n[0][0]
        , i = e.invertX(t[1][0]) - n[1][0]
        , a = e.invertY(t[0][1]) - n[0][1]
        , o = e.invertY(t[1][1]) - n[1][1];
      return e.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), o > a ? (a + o) / 2 : Math.min(0, a) || Math.max(0, o))
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function () {
        function e(e) {
          e.property("__zoom", o).on("wheel.zoom", P).on("mousedown.zoom", M).on("dblclick.zoom", O).filter(L).on("touchstart.zoom", E).on("touchmove.zoom", j).on("touchend.zoom touchcancel.zoom", S).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
        }
        function t(e, t) {
          return t = Math.max(I[0], Math.min(I[1], t)),
            t === e.k ? e : new b.Transform(t, e.x, e.y)
        }
        function n(e, t, n) {
          var r = t[0] - n[0] * e.k
            , i = t[1] - n[1] * e.k;
          return r === e.x && i === e.y ? e : new b.Transform(e.k, r, i)
        }
        function r(e) {
          return [(+e[0][0] + +e[1][0]) / 2, (+e[0][1] + +e[1][1]) / 2]
        }
        function v(e, t, n) {
          e.on("start.zoom", function () {
            m(this, arguments).start()
          }).on("interrupt.zoom end.zoom", function () {
            m(this, arguments).end()
          }).tween("zoom", function () {
            var e = this
              , i = arguments
              , a = m(e, i)
              , o = N.apply(e, i)
              , u = n || r(o)
              , s = Math.max(o[1][0] - o[0][0], o[1][1] - o[0][1])
              , l = e.__zoom
              , c = "function" == typeof t ? t.apply(e, i) : t
              , f = V(l.invert(u).concat(s / l.k), c.invert(u).concat(s / c.k));
            return function (e) {
              if (1 === e)
                e = c;
              else {
                var t = f(e)
                  , n = s / t[2];
                e = new b.Transform(n, u[0] - t[0] * n, u[1] - t[1] * n)
              }
              a.zoom(null, e)
            }
          })
        }
        function m(e, t) {
          for (var n, r = 0, i = z.length; r < i; ++r)
            if ((n = z[r]).that === e)
              return n;
          return new w(e, t)
        }
        function w(e, t) {
          this.that = e,
            this.args = t,
            this.index = -1,
            this.active = 0,
            this.extent = N.apply(e, t)
        }
        function P() {
          function e() {
            r.wheel = null,
              r.end()
          }
          if (T.apply(this, arguments)) {
            var r = m(this, arguments)
              , i = this.__zoom
              , a = Math.max(I[0], Math.min(I[1], i.k * Math.pow(2, A.apply(this, arguments))))
              , o = (0,
                h.mouse)(this);
            if (r.wheel)
              r.mouse[0][0] === o[0] && r.mouse[0][1] === o[1] || (r.mouse[1] = i.invert(r.mouse[0] = o)),
                clearTimeout(r.wheel);
            else {
              if (i.k === a)
                return;
              r.mouse = [o, i.invert(o)],
                (0,
                  p.interrupt)(this),
                r.start()
            }
            (0,
              x.default)(),
              r.wheel = setTimeout(e, Y),
              r.zoom("mouse", D(n(t(i, a), r.mouse[0], r.mouse[1]), r.extent, R))
          }
        }
        function M() {
          function e() {
            if ((0,
              x.default)(),
              !r.moved) {
              var e = h.event.clientX - o
                , t = h.event.clientY - u;
              r.moved = e * e + t * t > X
            }
            r.zoom("mouse", D(n(r.that.__zoom, r.mouse[0] = (0,
              h.mouse)(r.that), r.mouse[1]), r.extent, R))
          }
          function t() {
            i.on("mousemove.zoom mouseup.zoom", null),
              (0,
                f.dragEnable)(h.event.view, r.moved),
              (0,
                x.default)(),
              r.end()
          }
          if (!C && T.apply(this, arguments)) {
            var r = m(this, arguments)
              , i = (0,
                h.select)(h.event.view).on("mousemove.zoom", e, !0).on("mouseup.zoom", t, !0)
              , a = (0,
                h.mouse)(this)
              , o = h.event.clientX
              , u = h.event.clientY;
            (0,
              f.dragDisable)(h.event.view),
              (0,
                _.nopropagation)(),
              r.mouse = [a, this.__zoom.invert(a)],
              (0,
                p.interrupt)(this),
              r.start()
          }
        }
        function O() {
          if (T.apply(this, arguments)) {
            var r = this.__zoom
              , i = (0,
                h.mouse)(this)
              , a = r.invert(i)
              , o = r.k * (h.event.shiftKey ? .5 : 2)
              , u = D(n(t(r, o), i, a), N.apply(this, arguments), R);
            (0,
              x.default)(),
              B > 0 ? (0,
                h.select)(this).transition().duration(B).call(v, u, i) : (0,
                  h.select)(this).call(e.transform, u)
          }
        }
        function E() {
          if (T.apply(this, arguments)) {
            var e, t, n, r, i = m(this, arguments), a = h.event.changedTouches, o = a.length;
            for ((0,
              _.nopropagation)(),
              t = 0; t < o; ++t)
              n = a[t],
                r = (0,
                  h.touch)(this, a, n.identifier),
                r = [r, this.__zoom.invert(r), n.identifier],
                i.touch0 ? i.touch1 || (i.touch1 = r) : (i.touch0 = r,
                  e = !0);
            if (k && (k = clearTimeout(k),
              !i.touch1))
              return i.end(),
                void ((r = (0,
                  h.select)(this).on("dblclick.zoom")) && r.apply(this, arguments));
            e && (k = setTimeout(function () {
              k = null
            }, q),
              (0,
                p.interrupt)(this),
              i.start())
          }
        }
        function j() {
          var e, r, i, a, o = m(this, arguments), u = h.event.changedTouches, s = u.length;
          for ((0,
            x.default)(),
            k && (k = clearTimeout(k)),
            e = 0; e < s; ++e)
            r = u[e],
              i = (0,
                h.touch)(this, u, r.identifier),
              o.touch0 && o.touch0[2] === r.identifier ? o.touch0[0] = i : o.touch1 && o.touch1[2] === r.identifier && (o.touch1[0] = i);
          if (r = o.that.__zoom,
            o.touch1) {
            var l = o.touch0[0]
              , c = o.touch0[1]
              , f = o.touch1[0]
              , d = o.touch1[1]
              , p = (p = f[0] - l[0]) * p + (p = f[1] - l[1]) * p
              , v = (v = d[0] - c[0]) * v + (v = d[1] - c[1]) * v;
            r = t(r, Math.sqrt(p / v)),
              i = [(l[0] + f[0]) / 2, (l[1] + f[1]) / 2],
              a = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2]
          } else {
            if (!o.touch0)
              return;
            i = o.touch0[0],
              a = o.touch0[1]
          }
          o.zoom("touch", D(n(r, i, a), o.extent, R))
        }
        function S() {
          var e, t, n = m(this, arguments), r = h.event.changedTouches, i = r.length;
          for ((0,
            _.nopropagation)(),
            C && clearTimeout(C),
            C = setTimeout(function () {
              C = null
            }, q),
            e = 0; e < i; ++e)
            t = r[e],
              n.touch0 && n.touch0[2] === t.identifier ? delete n.touch0 : n.touch1 && n.touch1[2] === t.identifier && delete n.touch1;
          n.touch1 && !n.touch0 && (n.touch0 = n.touch1,
            delete n.touch1),
            n.touch0 ? n.touch0[1] = this.__zoom.invert(n.touch0[0]) : n.end()
        }
        var k, C, T = i, N = a, D = l, A = u, L = s, I = [0, 1 / 0], R = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], B = 250, V = d.interpolateZoom, z = [], F = (0,
          c.dispatch)("start", "zoom", "end"), q = 500, Y = 150, X = 0;
        return e.transform = function (e, t) {
          var n = e.selection ? e.selection() : e;
          n.property("__zoom", o),
            e !== n ? v(e, t) : n.interrupt().each(function () {
              m(this, arguments).start().zoom(null, "function" == typeof t ? t.apply(this, arguments) : t).end()
            })
        }
          ,
          e.scaleBy = function (t, n) {
            e.scaleTo(t, function () {
              return this.__zoom.k * ("function" == typeof n ? n.apply(this, arguments) : n)
            })
          }
          ,
          e.scaleTo = function (i, a) {
            e.transform(i, function () {
              var e = N.apply(this, arguments)
                , i = this.__zoom
                , o = r(e)
                , u = i.invert(o)
                , s = "function" == typeof a ? a.apply(this, arguments) : a;
              return D(n(t(i, s), o, u), e, R)
            })
          }
          ,
          e.translateBy = function (t, n, r) {
            e.transform(t, function () {
              return D(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof r ? r.apply(this, arguments) : r), N.apply(this, arguments), R)
            })
          }
          ,
          e.translateTo = function (t, n, i) {
            e.transform(t, function () {
              var e = N.apply(this, arguments)
                , t = this.__zoom
                , a = r(e);
              return D(b.identity.translate(a[0], a[1]).scale(t.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof i ? -i.apply(this, arguments) : -i), e, R)
            })
          }
          ,
          w.prototype = {
            start: function () {
              return 1 == ++this.active && (this.index = z.push(this) - 1,
                this.emit("start")),
                this
            },
            zoom: function (e, t) {
              return this.mouse && "mouse" !== e && (this.mouse[1] = t.invert(this.mouse[0])),
                this.touch0 && "touch" !== e && (this.touch0[1] = t.invert(this.touch0[0])),
                this.touch1 && "touch" !== e && (this.touch1[1] = t.invert(this.touch1[0])),
                this.that.__zoom = t,
                this.emit("zoom"),
                this
            },
            end: function () {
              return 0 == --this.active && (z.splice(this.index, 1),
                this.index = -1,
                this.emit("end")),
                this
            },
            emit: function (t) {
              (0,
                h.customEvent)(new g.default(e, t, this.that.__zoom), F.apply, F, [t, this.that, this.args])
            }
          },
          e.wheelDelta = function (t) {
            return arguments.length ? (A = "function" == typeof t ? t : (0,
              y.default)(+t),
              e) : A
          }
          ,
          e.filter = function (t) {
            return arguments.length ? (T = "function" == typeof t ? t : (0,
              y.default)(!!t),
              e) : T
          }
          ,
          e.touchable = function (t) {
            return arguments.length ? (L = "function" == typeof t ? t : (0,
              y.default)(!!t),
              e) : L
          }
          ,
          e.extent = function (t) {
            return arguments.length ? (N = "function" == typeof t ? t : (0,
              y.default)([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]),
              e) : N
          }
          ,
          e.scaleExtent = function (t) {
            return arguments.length ? (I[0] = +t[0],
              I[1] = +t[1],
              e) : [I[0], I[1]]
          }
          ,
          e.translateExtent = function (t) {
            return arguments.length ? (R[0][0] = +t[0][0],
              R[1][0] = +t[1][0],
              R[0][1] = +t[0][1],
              R[1][1] = +t[1][1],
              e) : [[R[0][0], R[0][1]], [R[1][0], R[1][1]]]
          }
          ,
          e.constrain = function (t) {
            return arguments.length ? (D = t,
              e) : D
          }
          ,
          e.duration = function (t) {
            return arguments.length ? (B = +t,
              e) : B
          }
          ,
          e.interpolate = function (t) {
            return arguments.length ? (V = t,
              e) : V
          }
          ,
          e.on = function () {
            var t = F.on.apply(F, arguments);
            return t === F ? e : t
          }
          ,
          e.clickDistance = function (t) {
            return arguments.length ? (X = (t = +t) * t,
              e) : Math.sqrt(X)
          }
          ,
          e
      }
      ;
    var c = n(168)
      , f = n(397)
      , d = n(112)
      , h = n(62)
      , p = n(408)
      , v = n(1755)
      , y = r(v)
      , m = n(1756)
      , g = r(m)
      , b = n(779)
      , _ = n(1757)
      , x = r(_);
    e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e) {
        return function () {
          return e
        }
      }
      ,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      this.target = e,
        this.type = t,
        this.transform = n
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = r,
      e.exports = t.default
  }
  , function (e, t, n) {
    "use strict";
    function r() {
      i.event.stopImmediatePropagation()
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.nopropagation = r,
      t.default = function () {
        i.event.preventDefault(),
          i.event.stopImmediatePropagation()
      }
      ;
    var i = n(62)
  }
  , function (e, t) { }
  , function (e, t) { }
  , function (e, t, n) {
    "use strict";
    (function (n) {
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
      }()
        , a = function () {
          function e() {
            r(this, e)
          }
          return i(e, [{
            key: "onCreate",
            value: function (e) {
              this.state = {
                isFullscreen: !1,
                canFullscreen: !1
              }
            }
          }, {
            key: "onMount",
            value: function () {
              var e = this;
              this.state.canFullscreen = this.judgeFullScreen(),
                n(document).bind("fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange", function () {
                  var t = document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement;
                  e.state.isFullscreen = t,
                    e.emit("fullScreenChange", t)
                })
            }
          }, {
            key: "judgeFullScreen",
            value: function () {
              var e = this.getEl();
              return e.requestFullscreen || e.mozRequestFullScreen || e.webkitRequestFullscreen || e.msRequestFullscreen
            }
          }, {
            key: "onDisplayFullScreen",
            value: function () {
              this.emit("displayFullScreen")
            }
          }, {
            key: "onExitFullScreen",
            value: function () {
              document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
            }
          }, {
            key: "onRotateChart",
            value: function (e) {
              this.emit("rotateChart", e)
            }
          }, {
            key: "onResetChart",
            value: function () {
              this.emit("resetChart")
            }
          }, {
            key: "onScaleChart",
            value: function (e) {
              this.emit("scaleChart", e)
            }
          }]),
            e
        }();
      t.default = a,
        e.exports = t.default
    }
    ).call(t, n(4))
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n, r, i) {
      t.be("DIV", b, "0", r),
        i.isLoading && y({}, t, n, "1"),
        t.n(P, r),
        i.isEmpty || g({}, t, n, "3", [["displayFullScreen", "onDisplayFullScreen", !1], ["resetChart", "onResetChart", !1], ["scaleChart", "onScaleChart", !1]]),
        i.isEmpty || t.n(M, r),
        i.isEmpty || t.e("DIV", O, "7", r, 2, 0, {
          onclick: n.d("saveSvgAsPng", !1)
        }).n(E, r).t(" 保存图片"),
        !i.isLoading && i.isEmpty && t.e("DIV", j, "9", r, 2).e("IMG", {
          src: d,
          class: "structure-mask"
        }, "10", r, 0).e("DIV", S, "11", r, 2).n(k, r).e("DIV", C, "13", r, 1, 0, {
          onclick: n.d("login", !1)
        }).t("登录查看"),
        t.ee()
    }
    n(1762);
    var i = e.exports = n(0).t()
      , a = n(1)
      , o = a.rc
      , u = o("/pc-web$1.0.0/src/routes/company/chart/components/app-structure/index.marko", function () {
        return e.exports
      })
      , s = n(1763)
      , l = a.r
      , c = a.c
      , f = n(1771)
      , d = f.default || f
      , h = n(436)
      , p = n(2)
      , v = p.t
      , y = v(h)
      , m = n(437)
      , g = v(m)
      , b = {
        class: "chart-content clearfix"
      }
      , _ = p.e
      , x = p.const
      , w = x("9751dc")
      , P = _("DIV", {
        id: "divStructure",
        class: "chart-section"
      }, "2", null, 0, 0, {
          i: w()
        })
      , M = _("DIV", {
        class: "structure-specification"
      }, "4", null, 2, 0, {
          i: w()
        }).e("DIV", null, "5", null, 1).t("点击 + 号结点，展开子节点").e("DIV", null, "6", null, 1).t("点击企业名称查看详情")
      , O = {
        class: "btn1 save-png",
        "data-placement": "bottom",
        "data-trigger": "hover",
        "data-toggle": "popover",
        "data-content": "放大后保存图片更清晰"
      }
      , E = _("I", {
        class: "icon icon-xiazaitupu"
      }, "8", null, 0, 0, {
          i: w()
        })
      , j = {
        class: "structure-login-wrapper"
      }
      , S = {
        class: "structure-login"
      }
      , k = _("H5", null, "12", null, 1, 0, {
        i: w()
      }).t("登录查看多层级股东，股东出资比例")
      , C = {
        class: "btn1"
      };
    i._ = l(r, {
      _l_: u
    }, s),
      i.Component = c(s, i._)
  }
  , function (e, t) { }
  , function (e, t, n) {
    "use strict";
    (function (r) {
      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
      }()
        , u = n(309)
        , s = i(u)
        , l = n(394)
        , c = i(l)
        , f = n(1764)
        , d = n(7)
        , h = n(25)
        , p = {}
        , v = function () {
          function e() {
            a(this, e)
          }
          return o(e, [{
            key: "onCreate",
            value: function (e) {
              this.state = {
                isLoading: !0,
                isEmpty: !0,
                eid: e.eid,
                isFullScreen: !1
              }
            }
          }, {
            key: "onMount",
            value: function () {
              var e = this;
              s.default.getEquityStructureData({
                eid: this.state.eid
              }).then(function (t) {
                t.name || (t.name = e.input.name),
                  e.state.isEmpty = !1,
                  e.formatDataSource(t),
                  f.init("divStructure", p, e.nodeClickEvent.bind(e), e.nodeToggleEvent.bind(e), e.state.isFullScreen),
                  e.state.isLoading = !1,
                  setTimeout(function () {
                    r(e.getEl()).find('[data-toggle="popover"]').popover()
                  }, 500),
                  r(window).bind("resize", function () {
                    f.resizeChart(e.state.isFullScreen)
                  }),
                  r(document).bind("fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange", function () {
                    (document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement) && h.track("股权结构图-全屏查看")
                  }),
                  d.scroller.to(r(".app-nav-wrapper").offset().top)
              }).catch(function (t) {
                401 === t.status ? e.state.isLoading = !1 : d.toastr.error(t.message, "错误")
              })
            }
          }, {
            key: "formatDataSource",
            value: function (e) {
              return p.category = 0,
                p.eid = "null" === e.eid ? "" : e.eid,
                p.name = e.name,
                p.hasProblem = "0" !== e.has_problem,
                p.children = null,
                p.identifier = e.identifier,
                p.pTrees = e.p_trees,
                p.cTrees = e.c_trees,
                p
            }
          }, {
            key: "nodeClickEvent",
            value: function (e) {
              var t = e.data;
              t.eid && "null" !== t.eid && (h.track("股权结构图-查看企业面板"),
                c.default.showCompanyInfo(t.eid, t.hasProblem, this.getEl()))
            }
          }, {
            key: "nodeToggleEvent",
            value: function (e, t) {
              (e.data.hideNodes || e.data.hidePercent) && (this.input.user.isLogin ? (h.track("股权结构图-开通VIP提示"),
                d.showVIPStructureChartDialog()) : (h.track("股权结构图-展开-登录提示"),
                  d.showLogin())),
                "circle" === t && h.track("股权结构图-展开下一层级")
            }
          }, {
            key: "onDisplayFullScreen",
            value: function () {
              var e = this.getEl();
              e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
            }
          }, {
            key: "onResetChart",
            value: function () {
              h.track("股权结构图-还原页面"),
                f.resetChart()
            }
          }, {
            key: "onScaleChart",
            value: function (e) {
              1 === e ? h.track("股权结构图-放大图片") : h.track("股权结构图-缩小图片"),
                f.scaleChart(e)
            }
          }, {
            key: "saveSvgAsPng",
            value: function () {
              h.track("股权结构图-保存图片"),
                this.input.user.isLogin ? f.saveAsPng() : (h.track("股权结构图-展开-登录提示"),
                  d.showLogin())
            }
          }, {
            key: "login",
            value: function () {
              h.track("股权结构图-查看超限-登录提示"),
                d.showLogin()
            }
          }]),
            e
        }();
      t.default = v,
        e.exports = t.default
    }
    ).call(t, n(4))
  }
  , function (e, t, n) {
    "use strict";
    (function (r) {
      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      function a(e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }
      function o() {
        re = r(U).width(),
          v.select(U).select("svg").remove(),
          W = v.select(U).append("svg:svg").attr("width", "100%").attr("id", "structureChart").style("transition", "height " + H + "ms ease-in-out").classed("new-network-rect", !0),
          G = W.append("svg:g").attr("id", "structureChartLogo").style("transition", "transform " + H + "ms ease-in-out").html(ye),
          W.append("defs").append("marker").attr("id", "arrow").attr("viewBox", "0 0 12 12").attr("markerUnits", "strokeWidth").attr("refX", 11).attr("refY", 6).attr("markerWidth", 24).attr("markerHeight", 24).attr("orient", "auto").append("path").attr("d", "M2,2 L10,6 L2,10 L6,6 L2,2").attr("fill", P),
          W.append("defs").append("marker").attr("id", "arrowCompany").attr("viewBox", "0 0 12 12").attr("markerUnits", "strokeWidth").attr("refX", 11).attr("refY", 6).attr("markerWidth", 24).attr("markerHeight", 24).attr("orient", "auto").append("path").attr("d", "M2,2 L10,6 L2,10 L6,6 L2,2").attr("fill", A),
          W.append("defs").append("marker").attr("id", "arrowPerson").attr("viewBox", "0 0 12 12").attr("markerUnits", "strokeWidth").attr("refX", 11).attr("refY", 6).attr("markerWidth", 24).attr("markerHeight", 24).attr("orient", "auto").append("path").attr("d", "M2,2 L10,6 L2,10 L6,6 L2,2").attr("fill", L),
          $ = W.append("svg:g").attr("id", "structureChartContainer"),
          Z = $.append("svg:g").classed("topG", !0).style("transition", "transform " + H + "ms ease-in-out"),
          Z.append("svg:g").classed("topGLinks", !0),
          Z.append("svg:g").classed("topGNodes", !0),
          Q = $.append("svg:g").classed("bottomG", !0).style("transition", "transform " + H + "ms ease-in-out"),
          Q.append("svg:g").classed("bottomGLinks", !0),
          Q.append("svg:g").classed("bottomGNodes", !0),
          $.append("svg:g").classed("centerG", !0).style("transition", "transform " + H + "ms ease-in-out"),
          s(),
          u()
      }
      function u(e) {
        function t(e, t, n, r) {
          var i = v.linkVertical().x(function (e) {
            return e.x
          }).y(function (e) {
            return e.y
          })
            , a = e.selectAll("path.structure-link").data(t.links(), function (e) {
              return e.target.data.id
            });
          a.enter().append("path").attr("class", function (e) {
            return "structure-link link-" + e.target.data.identifier + " " + (e.target.data.eid && "null" !== e.target.data.eid ? "company" : "person")
          }).style("fill", "none").attr("d", function () {
            var e = {
              x: r.x0,
              y: r.y0
            };
            return i({
              source: e,
              target: e
            })
          }).style("stroke", P).style("stroke-width", w).transition().ease(v.easeQuad).duration(H).attr("d", function (e) {
            var t = {
              source: {
                x: e.source.x,
                y: e.source.y + n * (0 === e.source.depth ? Y / 2 : 1 === n ? F / 2 + D + R : F / 2 + R)
              },
              target: {
                x: e.target.x,
                y: e.target.y - n * ((1 === n ? F / 2 : F / 2 + D) + I)
              }
            };
            return i(t)
          }),
            a.transition().duration(H).ease(v.easeQuad).attr("d", function (e) {
              var t = {
                source: {
                  x: e.source.x,
                  y: e.source.y + n * (0 === e.source.depth ? Y / 2 : 1 === n ? F / 2 + D + R : F / 2 + R)
                },
                target: {
                  x: e.target.x,
                  y: e.target.y - n * ((1 === n ? F / 2 : F / 2 + D) + I)
                }
              };
              return i(t)
            }),
            a.exit().transition().duration(H).ease(v.easeQuad).attr("d", function () {
              var e = {
                x: r.x,
                y: r.y + n * F / 2
              };
              return i({
                source: e,
                target: e
              })
            }).remove()
        }
        function n(e, t, n, a) {
          var o = e.selectAll("g.structure-node").data(t, function (e) {
            return e.data.id || (e.data.id = ++he),
              e.data.id
          })
            , u = o.enter().filter(function (e) {
              return 0 !== e.depth
            }).append("svg:g").attr("class", function (e) {
              return "structure-node node" + e.data.identifier
            }).attr("transform", function () {
              return "translate(" + a.x0 + ", " + a.y0 + ")"
            }).style("cursor", "default").on("mouseover", function (e) {
              var t = e.data.identifier
                , n = ".link-" + t + ",.border-" + t;
              !function e(t) {
                var r = t.data.identifier;
                n += ",.link-" + r + ",.border-" + r,
                  t.parent && e(t.parent)
              }(e);
              var r = v.selectAll(n).classed("active", !0);
              r.filter(".mark.company").attr("marker-end", "url(#arrowCompany)"),
                r.filter(".mark.person").attr("marker-end", "url(#arrowPerson)"),
                e.data._selector = n
            }).on("mouseleave", function (e) {
              v.selectAll(e.data._selector).classed("active", !1).filter(".mark").attr("marker-end", "url(#arrow)")
            });
          u.append("svg:rect").attr("x", -z / 2).attr("y", -F / 2).attr("width", z).attr("height", F).attr("rx", X).attr("ry", X).style("stroke", N).style("stroke-width", T).style("fill", "#ffffff").attr("class", function (e) {
            return "structure-border border-" + e.data.identifier + " " + (e.data.eid && "null" !== e.data.eid ? "company" : "person")
          }),
            u.append("svg:rect").attr("x", -z / 2 - T / 2).attr("y", F / 2 - T / 2).attr("width", z + T).attr("height", D).style("fill", function (e) {
              return e.data.eid && "null" !== e.data.eid ? A : L
            }),
            r(u, n),
            i(u, n);
          var s = e.selectAll("g.structure-node");
          s.transition().duration(H).ease(v.easeQuad).attr("transform", function (e) {
            return "translate(" + e.x + ", " + e.y + ")"
          }),
            s.selectAll("text").transition().duration(H).ease(v.easeQuad).style("fill-opacity", 1);
          var l = o.exit();
          l.transition().duration(H).ease(v.easeQuad).attr("transform", function () {
            return "translate(" + a.x + "," + a.y + ")"
          }).remove(),
            l.select("circle").attr("r", 1e-6),
            l.selectAll("text").transition().duration(H).ease(v.easeQuad).style("fill-opacity", 1e-6),
            t.forEach(function (e) {
              e.data.x0 = e.x,
                e.data.y0 = e.y
            })
        }
        function r(e, t) {
          e.append("svg:text").text(function (e) {
            var t = e.data.name
              , n = f(t, O)
              , r = 2 * S;
            if (n + r > z) {
              var i = Math.ceil((z - r) / (n / t.length));
              t = e.data.name.substring(0, i),
                e.data._subName = e.data.name.substring(i)
            }
            return t
          }).attr("x", S - z / 2).attr("y", j - F / 2).attr("dy", O).style("fill-opacity", 1e-6).style("font-size", O + "px").attr("fill", M).attr("font-weight", 500).style("cursor", function (e) {
            if (e.data.eid && "null" !== e.data.eid)
              return "pointer"
          }).on("mouseover", function (e) {
            e.data.eid && "null" !== e.data.eid && v.select(this).attr("font-weight", 600)
          }).on("mouseleave", function (e) {
            e.data.eid && "null" !== e.data.eid && v.select(this).attr("font-weight", 500)
          }).on("click", pe).filter(function (e) {
            return !!e.data._subName
          }).append("tspan").attr("x", S - z / 2).attr("dy", "1.35em").attr("fill", M).text(function (e) {
            var t = e.data._subName
              , n = f(t, O)
              , r = 2 * S;
            return n + r > z && (t = t.substring(0, Math.ceil((z - r) / (n / t.length)) - 2) + "..."),
              t
          }),
            e.filter(function (e) {
              return e.data.amount
            }).append("svg:text").text(function (e) {
              var t = parseFloat(e.data.amount) ? parseFloat(e.data.amount).toFixed(0) : "***";
              if (e.data.amount) {
                var n = e.data.amount.indexOf("shares");
                -1 === n ? t = "认缴金额：" + t + "万元" : -1 !== n && (t = "持股数：" + t + "万股")
              }
              var r = f(t, E)
                , i = 2 * S;
              return r + i > z && (t = t.substring(0, Math.ceil((z - i) / (r / t.length) - 1)) + "..."),
                t
            }).attr("x", S - z / 2).attr("y", F / 2 - j).style("fill-opacity", 1e-6).style("font-size", E + "px").attr("fill", M);
          var n = e.filter(function (e) {
            return e.data.percent
          });
          n.filter(function (e) {
            return !e.data.hidePercent
          }).append("svg:text").text(function (e) {
            return (100 * e.data.percent).toFixed(2) + "%"
          }).style("font-size", k + "px").attr("fill", C).attr("x", 0).attr("y", function () {
            return 1 === t ? -F / 2 - 5 : F / 2 + D + 5
          }).attr("dx", 10).attr("dy", 1 === t ? "" : "1em");
          var r = n.append("svg:text").style("font-size", k + "px").attr("fill", C).attr("y", function () {
            return 1 === t ? -F / 2 - 5 : F / 2 + D + 5
          }).attr("dy", 1 === t ? "" : "1em");
          r.filter(function (e) {
            return !e.data.hidePercent
          }).text("持股").attr("x", -35),
            r.filter(function (e) {
              return e.data.hidePercent
            }).text("查看股比").attr("x", -58).style("cursor", "pointer").on("click", function (e) {
              ve && ve(e, "percent")
            }),
            e.append("g").attr("transform", "translate(0, " + (1 === t ? -F / 2 - I : F / 2 + D) + ")").append("path").attr("d", function () {
              return v.line()([[0, 0], [0, I]])
            }).attr("class", function (e) {
              return "structure-link mark link-" + e.data.identifier + " " + (e.data.eid && "null" !== e.data.eid ? "company" : "person")
            }).style("stroke", P).style("stroke-width", w).attr("marker-end", "url(#arrow)")
        }
        function i(e, t) {
          var n = e.filter(function (e) {
            return e.data.items && e.data.items.length || e.data.hideNodes
          }).append("g").style("cursor", "pointer").classed("circle", !0).on("click", function (e) {
            ve && ve(e, "circle"),
              e.data.hideNodes || (d(e),
                u({
                  identifier: e.data.identifier,
                  x0: e.data.x0,
                  y0: e.data.y0
                }))
          }).attr("transform", "translate(0, " + (t * F / 2 + t * (R + (1 === t ? D : 0))) + ")");
          n.append("circle").attr("r", R).style("stroke", A).style("stroke-width", "1px").style("fill", A).classed("node-twinkle", !0),
            n.append("line").attr("x1", -4).attr("y1", 0).attr("x2", 4).attr("y2", 0).style("stroke", "#ffffff").style("stroke-width", "1px"),
            n.append("line").attr("class", "vertical-line").attr("x1", 0).attr("y1", -4).attr("x2", 0).attr("y2", 4).style("stroke", "#ffffff").style("stroke-width", "1px"),
            $.selectAll(".vertical-line").attr("visibility", function (e) {
              return e.data.children ? "hidden" : ""
            })
        }
        de = 0;
        var a = v.hierarchy(te)
          , o = v.hierarchy(ne)
          , s = c(a.descendants())
          , l = s.maxDepth
          , h = c(o.descendants())
          , p = h.maxDepth;
        le = re / 2,
          ae = V * l,
          oe = V * p,
          ie = ae + oe + F + 2 * se,
          W.attr("height", ie),
          $.style("transform-origin", "0 center 0").attr("transform", "translate(" + (le + ce) + ", " + fe + ")scale(" + K + ")"),
          G.attr("transform", "translate(" + (le - 141) + ", " + (ae + se - Y - 30) + ")scale(1.5)"),
          function (e, r) {
            v.tree().nodeSize([B, V])(a),
              Z.attr("transform", "translate(0, " + (F / 2 + se) + ")");
            var i = a.descendants();
            r || (r = {
              x0: i[0].x,
              y0: e - i[0].y,
              x: i[0].x,
              y: e - i[0].y
            }),
              i.forEach(function (t) {
                t.y = e - t.y,
                  t.data.identifier === r.identifier && (r.x = t.x,
                    r.y = t.y),
                  t.x < 0 && t.x < de && (de = t.x)
              }),
              t(Z.select(".topGLinks"), a, -1, r),
              n(Z.select(".topGNodes"), i, -1, r)
          }(ae, e),
          function (e, r, i) {
            v.tree().nodeSize([B, V])(o),
              Q.attr("transform", "translate(0, " + (r + F / 2 + se) + ")");
            var a = o.descendants();
            i || (i = {
              x0: a[0].x,
              y0: a[0].y,
              x: a[0].x,
              y: a[0].y
            }),
              a.forEach(function (e) {
                e.data.identifier === i.identifier && (i.x = e.x,
                  i.y = e.y),
                  e.x < 0 && e.x < de && (de = e.x)
              }),
              t(Q.select(".bottomGLinks"), o, 1, i),
              n(Q.select(".bottomGNodes"), a, 1, i)
          }(0, ae, e),
          function () {
            var e = v.hierarchy(ee)
              , t = $.select(".centerG").attr("transform", "translate(0, " + (ae + F / 2 + se) + ")")
              , n = ee.name
              , r = f(n, q)
              , i = r + 30;
            -i / 2 < de - z / 2 && (de = (z - i) / 2);
            var a = t.selectAll("rect").data(e.descendants()).enter();
            a.append("svg:rect").attr("x", -i / 2).attr("y", -Y / 2).attr("width", i).attr("height", Y).style("fill", A).attr("rx", "3px").attr("ry", "3px"),
              a.append("svg:text").attr("x", 0).attr("text-anchor", "middle").attr("dy", "0.35em").text(function (e) {
                return e.data.name
              }).style("font-size", q + "px").style("cursor", "pointer").attr("fill", "#ffffff").on("click", pe)
          }()
      }
      function s() {
        J = v.zoom().scaleExtent([.5, 2]).on("zoom", function () {
          K = v.event.transform.k,
            $.attr("transform", "translate(" + (le + ce) + "," + fe + ")scale(" + K + ")")
        });
        var e = v.drag().on("drag", function () {
          ce += v.event.dx,
            fe += v.event.dy,
            $.attr("transform", "translate(" + (le + ce) + "," + fe + ")scale(" + K + ")")
        });
        W.call(e)
      }
      function l(e) {
        var t = (K + e).toFixed(1);
        t >= .5 && t <= 2 && (K = t,
          J.scaleTo(W, K))
      }
      function c(e) {
        var t = 0
          , n = !0
          , r = !1
          , i = void 0;
        try {
          for (var a, o = e[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
            var u = a.value
              , s = u.depth;
            s > t && (t = s)
          }
        } catch (e) {
          r = !0,
            i = e
        } finally {
          try {
            !n && o.return && o.return()
          } finally {
            if (r)
              throw i
          }
        }
        return {
          maxDepth: t
        }
      }
      function f(e, t) {
        var n = 0;
        if (t = t || 14,
          e && e.length > 0) {
          var r = 0
            , i = 0
            , a = 0
            , o = 0
            , u = e.match(/[0-9]/g)
            , s = e.match(/[.:,\s()]/g)
            , l = e.match(/[a-z]/g)
            , c = e.match(/[A-Z]/g);
          u && (r = u.length,
            n += 8.2 * r),
            s && (i = s.length,
              n += 3.2 * i),
            l && (a = l.length,
              n += 7.54 * a),
            c && (o = c.length,
              n += 9.35 * o),
            n += (e.length - r - i - a - o) * t
        }
        return n
      }
      function d(e) {
        e.data.children ? e.data.children = null : e.data.children = e.data.items
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var h = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }
        , p = n(395)
        , v = function (e) {
          if (e && e.__esModule)
            return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return t.default = e,
            t
        }(p)
        , y = n(1765)
        , m = i(y)
        , g = n(1766)
        , b = i(g)
        , _ = n(7)
        , x = i(_)
        , w = 1
        , P = "#979797"
        , M = "#333333"
        , O = 14
        , E = 12
        , j = 7
        , S = 10
        , k = 12
        , C = "#65A1EA"
        , T = 1
        , N = "#D6D6D6"
        , D = 4
        , A = "#65A1EA"
        , L = "#F0A23A"
        , I = 20
        , R = 7
        , B = 150
        , V = 200
        , z = 132
        , F = 64
        , q = 17
        , Y = 40
        , X = 2
        , H = 500
        , U = ""
        , W = null
        , $ = null
        , G = null
        , Z = null
        , Q = null
        , J = null
        , K = 1
        , ee = {}
        , te = {}
        , ne = {}
        , re = 0
        , ie = 0
        , ae = void 0
        , oe = void 0
        , ue = !1
        , se = 100
        , le = 0
        , ce = 0
        , fe = 0
        , de = 0
        , he = 0
        , pe = null
        , ve = null
        , ye = '<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Group-21">\n            <g id="logosvg">\n                <path d="M29.5,0 C28.4,0 25.1,0.2 22.8,0.8 L3.6,6.4 C1.5,7.1 0,8.1 0,9.9 L0,40.6 C1.1,53.1 8.1,61.4 18.2,67.5 C22,69.5 25.8,70.7 29.6,70.8 C33.4,70.7 37.1,69.5 41,67.5 C50.9,61.5 58,53.2 59.1,40.7 L59.1,9.9 C59.1,8 57.6,7 55.5,6.3 L36.2,0.8 C34,0.2 30.6,0 29.5,0 Z" id="Shape" fill="#E8E8E8"></path>\n                <path d="M5.2,16.5 L5.2,16.7 L5.2,41 C6.1,51.3 11.9,58.1 20.2,63.2 C23.3,64.8 26.5,65.8 29.6,65.9 C32.7,65.8 35.8,64.9 39,63.2 C44,60.2 48.1,56.5 50.8,51.8 L50.8,51.8 C50.9,51.7 50.9,51.6 51,51.5 L51,51.4 C51.1,51.3 51.1,51.2 51.2,51.1 L51.2,51 C51.3,50.9 51.3,50.8 51.4,50.7 L51.4,50.6 C51.4,50.5 51.5,50.4 51.5,50.3 C51.5,50.2 51.6,50.2 51.6,50.1 L51.6,50.1 C51.6,50 51.7,50 51.7,49.9 C51.7,49.8 51.8,49.8 51.8,49.7 C51.8,49.6 51.9,49.6 51.9,49.5 C51.9,49.4 52,49.4 52,49.3 C52,49.2 52.1,49.2 52.1,49.1 C52.1,49 52.2,49 52.2,48.9 C52.2,48.8 52.3,48.8 52.3,48.7 C52.3,48.6 52.4,48.6 52.4,48.5 C52.4,48.4 52.4,48.4 52.5,48.3 C52.5,48.2 52.6,48.1 52.6,48 C52.6,48 52.6,47.9 52.7,47.9 C52.7,47.8 52.8,47.7 52.8,47.6 C52.8,47.6 52.8,47.5 52.8,47.5 C52.8,47.4 52.9,47.3 52.9,47.2 C52.9,47.2 52.9,47.1 52.9,47.1 C52.9,47 53,46.9 53,46.8 L53,46.7 C53,46.6 53.1,46.5 53.1,46.4 L53.1,46.3 C53.1,46.2 53.2,46.1 53.2,46 L53.2,45.9 C53.2,45.8 53.3,45.7 53.3,45.6 L53.3,45.5 C53.3,45.4 53.4,45.3 53.4,45.2 L53.4,45.1 C53.4,45 53.5,44.9 53.5,44.7 L53.5,44.6 C53.5,44.5 53.6,44.3 53.6,44.2 L53.6,44.1 C53.6,44 53.7,43.8 53.7,43.7 L53.7,43.7 C53.7,43.6 53.7,43.4 53.8,43.3 L53.8,43.2 C53.8,43.1 53.8,42.9 53.9,42.8 L53.9,42.7 C53.9,42.6 53.9,42.4 54,42.3 L54,42.2 C54,42.1 54,41.9 54.1,41.8 L54.1,41.8 C54.1,41.7 54.1,41.5 54.1,41.4 L54.1,41.4 C54.1,41.2 54.1,41.1 54.1,40.9 L54.1,40 L54.1,39 L53.1,39 L49.4,39 L27.7,39 C27.2,39 26.7,39.4 26.7,40 L26.7,52.1 C26.7,52.6 27.1,53.1 27.7,53.1 L44.2,53.1 C42.3,55.4 39.8,57.3 37.1,59 C34.6,60.3 32,61.1 29.5,61.2 C27,61.1 24.5,60.4 21.9,59 C15.2,54.9 10.5,49.4 9.8,41.1 L9.8,16.7 L9.8,16.5 L9.8,16.2 C9.8,15.3 10.8,14.4 12.5,14 L15.9,13 L15.9,48.8 C15.9,49.6 16.1,50.2 16.5,50.7 L18.9,52.9 C19.9,53.8 20.7,53.2 20.7,51.3 L20.7,11.6 L27,9.8 C27.7,9.6 28.1,9.2 28.2,8.4 L28.2,5.9 C28.2,4.8 27.2,4.8 25.8,5.2 L8.5,10.2 C6.3,10.8 5.3,11.9 5.3,13.5 L5.3,16.5 L5.2,16.5 Z M33.4,5.1 L50.7,10.1 C52.9,10.7 53.9,11.8 53.9,13.4 L53.9,15.5 C53.9,15.9 53.6,16.2 53.2,16.2 L49.6,16.2 C49.3,16.2 49.2,16.2 49.1,15.9 C49,15.1 48,14.3 46.4,13.9 L32.1,9.8 C31.4,9.6 31,9.2 30.9,8.4 L30.9,5.9 C31,4.8 32,4.8 33.4,5.1 L33.4,5.1 Z M27.7,18.1 L53,18.1 C53.5,18.1 53.9,18.5 53.9,19 L53.9,21.8 C53.9,22.3 53.5,22.7 53,22.7 L27.7,22.7 C27.2,22.7 26.8,22.3 26.8,21.8 L26.8,19 C26.7,18.6 27.1,18.1 27.7,18.1 L27.7,18.1 Z M27.7,25.2 L53,25.2 C53.5,25.2 53.9,25.6 53.9,26.1 L53.9,28.9 C53.9,29.4 53.5,29.8 53,29.8 L27.7,29.8 C27.2,29.8 26.8,29.4 26.8,28.9 L26.8,26.1 C26.7,25.6 27.1,25.2 27.7,25.2 L27.7,25.2 Z M27.7,32.2 L53,32.2 C53.5,32.2 53.9,32.6 53.9,33.1 L53.9,35.9 C53.9,36.4 53.5,36.8 53,36.8 L27.7,36.8 C27.2,36.8 26.8,36.4 26.8,35.9 L26.8,33.1 C26.7,32.6 27.1,32.2 27.7,32.2 L27.7,32.2 Z M48.8,43.9 C48.5,45.6 47.9,47.1 47.3,48.6 L31.7,48.6 C31.5,48.6 31.4,48.5 31.4,48.3 L31.4,44.3 C31.4,44.1 31.5,44 31.7,44 L48.8,44 L48.8,43.9 Z" id="Shape" fill="#FFFFFF"></path>\n                <path d="M92.2,45 L95.4,45 L95.4,47.8 L92.2,47.8 L92.2,45 L92.2,45 Z M153.5,13.6 L156,13.6 L166.9,13.6 L166.9,10.5 L171.6,10.5 L171.6,13.6 L182.5,13.6 L185,13.6 C186.2,13.6 187.2,14.6 187.2,15.8 L187.2,16.7 L187.2,19.8 L182.5,19.8 L182.5,16.7 L156,16.7 L156,19.8 L151.3,19.8 L151.3,16.7 L151.3,15.8 C151.4,14.6 152.3,13.6 153.5,13.6 L153.5,13.6 Z M182.4,38.4 L182.4,36.1 L187.1,36.1 L187.1,38.4 L187.1,39.3 C187.1,40.5 186.1,41.5 184.9,41.5 L182.4,41.5 L171.5,41.5 L166.8,41.5 L151.3,41.5 L151.3,38.4 L166.8,38.4 L166.8,33.7 L151.3,33.7 L151.3,30.6 L166.8,30.6 L166.8,26 L151.3,26 L151.3,22.9 L187,22.9 L187,26 L171.5,26 L171.5,30.7 L187,30.7 L187,33.8 L171.5,33.8 L171.5,38.5 L182.4,38.5 L182.4,38.4 Z M117.2,41.6 L117.2,22.4 C115.8,23.4 114.3,24.1 112.6,24.5 L112.5,24.5 L112.5,19.8 C116.1,18.3 118.7,14.7 118.7,10.5 L123.4,10.5 C123.4,12.8 122.8,15.1 121.8,17 L121.8,41.5 L117.2,41.5 L117.2,41.6 Z M125,13.6 L134.3,13.6 L134.3,10.5 L139,10.5 L139,13.6 L148.3,13.6 L148.3,16.7 L125,16.7 L125,13.6 L125,13.6 Z M125,19.8 L148.3,19.8 L148.3,22.9 L125,22.9 L125,19.8 L125,19.8 Z M125,26 L148.3,26 L148.3,29.1 L125,29.1 L125,26 L125,26 Z M129.6,38.4 L143.6,38.4 L143.6,35.3 L129.6,35.3 L129.6,38.4 L129.6,38.4 Z M143.6,41.6 L129.6,41.6 L127.1,41.6 C125.9,41.6 124.9,40.6 124.9,39.4 L124.9,38.5 L124.9,35.4 L124.9,33.7 L124.9,32.3 L146,32.3 C147.2,32.3 148.2,33.3 148.2,34.5 L148.2,35.4 L148.2,38.5 L148.2,41.6 L143.6,41.6 L143.6,41.6 Z M76.8,27.6 C76.8,31.1 75.6,34.3 73.7,36.9 L73.7,41.5 C78.4,38.6 81.5,33.4 81.5,27.5 L81.5,27.5 L81.5,24.4 L109.5,24.4 L109.5,24 L109.5,21.3 L109.5,16.6 L109.5,15.7 C109.5,14.5 108.5,13.5 107.3,13.5 L104.8,13.5 L95.5,13.5 L95.5,10.4 L90.8,10.4 L90.8,13.5 L81.4,13.5 L76.8,13.5 L76.8,13.5 L76.8,27.6 L76.8,27.6 L76.8,27.6 Z M104.8,21.4 L81.4,21.4 L81.4,16.7 L104.7,16.7 L104.7,21.4 L104.8,21.4 Z M80.4,45.1 C84.1,45.1 87.1,48.1 87.1,51.8 C87.1,53.4 86.6,54.8 85.6,56 L88.2,58.6 L86.5,60.3 L83.7,57.5 C82.7,58.1 81.6,58.4 80.4,58.4 C76.7,58.4 73.7,55.4 73.7,51.7 C73.7,48.1 76.7,45.1 80.4,45.1 L80.4,45.1 Z M80.4,47.6 C78.1,47.6 76.2,49.5 76.2,51.8 C76.2,54.1 78.1,56 80.4,56 C82.7,56 84.6,54.1 84.6,51.8 C84.6,49.4 82.7,47.6 80.4,47.6 L80.4,47.6 Z M136.8,56.7 L140.1,56.7 L140.1,60 L136.8,60 L136.8,56.7 L136.8,56.7 Z M92.2,49.3 L95.4,49.3 L95.4,60 L92.2,60 L92.2,49.3 L92.2,49.3 Z M102.6,54.4 L99.2,49.3 L102.8,49.3 L103.4,50.3 C103.5,50.5 103.7,50.8 103.8,51 C103.9,51.3 104.1,51.5 104.2,51.7 C104.3,52 104.5,52.2 104.6,52.5 L104.6,52.5 C104.7,52.2 104.8,52 105,51.7 C105.1,51.5 105.2,51.2 105.4,51 C105.5,50.7 105.7,50.5 105.8,50.3 L106.4,49.3 L109.8,49.3 L106.5,54.4 L110.3,60.1 L106.6,60.1 L105.8,58.7 C105.7,58.5 105.5,58.2 105.4,57.9 C105.3,57.6 105.1,57.4 105,57.1 C104.9,56.8 104.7,56.5 104.6,56.2 L104.6,56.2 L104.2,57.1 C104.1,57.3 103.9,57.6 103.8,57.9 C103.7,58.2 103.5,58.4 103.4,58.7 L102.5,60.1 L99,60.1 L102.6,54.4 L102.6,54.4 Z M113.5,45 L116.7,45 L116.7,47.8 L113.5,47.8 L113.5,45 L113.5,45 Z M113.5,49.3 L116.7,49.3 L116.7,60 L113.5,60 L113.5,49.3 L113.5,49.3 Z M123.9,50.9 L123.9,50.9 C124.3,50.3 124.7,49.8 125.3,49.4 C125.9,49.1 126.5,48.9 127.3,48.9 C128.5,48.9 129.4,49.3 130.1,50 C130.8,50.7 131.1,51.7 131.1,52.9 L131.1,60 L127.9,60 L127.9,53.5 C127.9,52.9 127.7,52.4 127.4,52.1 C127.1,51.7 126.6,51.6 126.1,51.6 C125.5,51.6 125,51.8 124.6,52.3 C124.2,52.7 124,53.3 124,54 L124,60 L120.8,60 L120.8,49.3 L123.9,49.3 L123.9,50.9 L123.9,50.9 Z M147.6,60.4 C146.7,60.4 146,60.3 145.3,60 C144.6,59.7 144,59.3 143.5,58.8 C143,58.3 142.6,57.7 142.4,57 C142.1,56.3 142,55.6 142,54.7 C142,53.9 142.1,53.1 142.4,52.4 C142.7,51.7 143,51.1 143.5,50.6 C144,50.1 144.6,49.7 145.3,49.4 C146,49.1 146.8,49 147.6,49 C148.3,49 149,49.1 149.5,49.3 C150.1,49.5 150.6,49.8 151,50.1 C151.4,50.5 151.8,50.9 152,51.4 C152.3,51.9 152.5,52.4 152.5,53 L149.4,53 C149.3,52.5 149.1,52.1 148.8,51.8 C148.5,51.5 148.1,51.4 147.5,51.4 C146.7,51.4 146.1,51.7 145.7,52.3 C145.3,52.9 145.1,53.7 145.1,54.7 C145.1,55.7 145.3,56.5 145.7,57.1 C146.1,57.7 146.7,58 147.5,58 C148.1,58 148.6,57.8 148.9,57.5 C149.2,57.2 149.5,56.7 149.5,56.1 L152.6,56.1 C152.6,56.7 152.4,57.3 152.2,57.8 C152,58.3 151.6,58.8 151.2,59.2 C150.8,59.6 150.2,59.9 149.6,60.1 C149.1,60.3 148.4,60.4 147.6,60.4 L147.6,60.4 Z M161.4,60.4 C160.5,60.4 159.8,60.3 159.1,60 C158.4,59.7 157.8,59.3 157.3,58.8 C156.8,58.3 156.4,57.7 156.1,57 C155.8,56.3 155.7,55.6 155.7,54.7 C155.7,53.9 155.8,53.1 156.1,52.4 C156.4,51.7 156.8,51.1 157.3,50.6 C157.8,50.1 158.4,49.7 159.1,49.4 C159.8,49.1 160.6,49 161.4,49 C162.3,49 163,49.1 163.7,49.4 C164.4,49.7 165,50.1 165.5,50.6 C166,51.1 166.4,51.7 166.6,52.4 C166.9,53.1 167,53.8 167,54.7 C167,55.5 166.9,56.3 166.6,57 C166.3,57.7 165.9,58.3 165.5,58.8 C165,59.3 164.4,59.7 163.7,60 C163,60.2 162.2,60.4 161.4,60.4 L161.4,60.4 Z M161.4,58.1 C162.2,58.1 162.8,57.8 163.2,57.2 C163.6,56.6 163.8,55.8 163.8,54.7 C163.8,53.7 163.6,52.8 163.2,52.2 C162.8,51.6 162.2,51.2 161.4,51.2 C160.6,51.2 160,51.5 159.6,52.2 C159.2,52.8 159,53.7 159,54.7 C159,55.7 159.2,56.5 159.6,57.2 C160,57.9 160.6,58.1 161.4,58.1 L161.4,58.1 Z M170.7,49.3 L173.8,49.3 L173.8,51 L173.9,51 C174.3,50.4 174.7,49.9 175.2,49.5 C175.7,49.2 176.4,49 177.1,49 C178.5,49 179.5,49.7 180.1,51 L180.1,51 C180.5,50.3 181.1,49.7 181.6,49.4 C182.2,49.1 182.8,48.9 183.5,48.9 C184.7,48.9 185.6,49.3 186.2,50 C186.8,50.7 187.1,51.7 187.1,52.9 L187.1,60 L183.9,60 L183.9,53.4 C183.9,52.8 183.8,52.3 183.5,52 C183.2,51.7 182.8,51.5 182.3,51.5 C181.7,51.5 181.3,51.7 181,52.1 C180.7,52.5 180.5,53.1 180.5,53.8 L180.5,60 L177.3,60 L177.3,53.4 C177.3,52.8 177.2,52.3 176.9,52 C176.6,51.7 176.2,51.5 175.7,51.5 C175.1,51.5 174.7,51.7 174.3,52.1 C174,52.5 173.8,53.1 173.8,53.8 L173.8,60 L170.6,60 L170.6,49.3 L170.7,49.3 Z" id="Shape" fill="#E8E8E8" fill-rule="nonzero"></path>\n            </g>\n            <path d="M109.4,32.2 L109.4,38.4 L109.4,41 L109.4,41.6 L85.2,41.6 C84,41.6 83,40.6 83,39.4 L83,38.5 L83,32.3 L83,30.7 L83,29.1 L107.2,29.1 C108.4,29.1 109.4,30.1 109.4,31.3 L109.4,32.2 Z M104.8,38.4 L104.8,38.4 L104.8,32.2 L87.7,32.2 L87.7,38.4 L104.8,38.4 Z" id="Combined-Shape" fill="#E8E8E8"></path>\n        </g>\n    </g>';
      t.default = {
        init: function (e, t, n, r) {
          var i = t.pTrees
            , u = t.cTrees
            , s = a(t, ["pTrees", "cTrees"])
            , l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          K = 1,
            ce = 0,
            fe = 0,
            U = "#" + e,
            ee = s,
            te = h({}, ee, {
              children: i
            }),
            ne = h({}, ee, {
              children: u
            }),
            pe = n,
            ve = r,
            ue = l,
            o()
        },
        scaleChart: function (e) {
          l(.1 * e)
        },
        resizeChart: function (e) {
          re = r(U).width(),
            ue === e ? (le = re / 2,
              $.attr("transform", "translate(" + (le + ce) + ", " + fe + ")scale(" + K + ")"),
              G.attr("transform", "translate(" + (le - 141) + ", " + (ae + se - Y - 30) + ")scale(1.5)")) : (ue = e,
                K = 1,
                ce = 0,
                fe = 0,
                u())
        },
        resetChart: function () {
          K = 1,
            ce = 0,
            fe = 0,
            u()
        },
        saveAsPng: function () {
          var e = function () {
            var e = r("#structureChart").clone();
            e.find("#structureChartLogo").attr("transform", "translate(-141, " + (i / 2 - 53.25 + se / 2) + ")scale(1.5)"),
              e.find("#structureChartContainer").attr("transform", null),
              m.default.saveSvgAsPng(e[0], ee.name + "股权结构.png", {
                canvg: b.default,
                backgroundColor: "#fff",
                width: n + 2 * se,
                height: i + 2 * se,
                left: de - se - z / 2,
                top: 0,
                scale: K
              })
          }
            , t = document.getElementById("structureChartContainer").getBBox()
            , n = t.width
            , i = t.height;
          if (n * i > 25e6)
            return void x.default.bootbox.dialog({
              title: "提醒",
              message: "您保存的图片可能超过浏览器大小限制导致保存失败，是否继续？",
              buttons: {
                close: {
                  label: "关闭",
                  className: "btn btn-cancel",
                  callback: function () { }
                },
                ok: {
                  label: "保存图片",
                  className: "btn btn-primary",
                  callback: e
                }
              }
            });
          e()
        }
      },
        e.exports = t.default
    }
    ).call(t, n(4))
  }
  , function (e, t, n) {
    "use strict";
    var r;
    !function () {
      function i(e) {
        return e instanceof HTMLElement || e instanceof SVGElement
      }
      function a(e) {
        if (!i(e))
          throw new Error("an HTMLElement or SVGElement is required; got " + e)
      }
      function o(e) {
        return e && 0 == e.lastIndexOf("http", 0) && -1 == e.lastIndexOf(window.location.host)
      }
      function u(e, t) {
        a(e);
        var n = e.querySelectorAll("image")
          , r = n.length
          , i = function () {
            0 === r && t()
          };
        i();
        for (var u = 0; u < n.length; u++)
          !function (e) {
            var t = document.createElement("canvas")
              , n = t.getContext("2d")
              , a = new Image;
            a.crossOrigin = "anonymous";
            var u = e.getAttributeNS("http://www.w3.org/1999/xlink", "href");
            u = u || e.getAttribute("href"),
              o(u) && (u += (-1 === u.indexOf("?") ? "?" : "&") + "t=" + (new Date).valueOf()),
              u ? (a.src = u,
                a.onload = function () {
                  t.width = a.width,
                    t.height = a.height,
                    n.drawImage(a, 0, 0),
                    e.setAttributeNS("http://www.w3.org/1999/xlink", "href", t.toDataURL("image/png")),
                    r-- ,
                    i()
                }
                ,
                a.onerror = function () {
                  r-- ,
                    i()
                }
              ) : (r-- ,
                i())
          }(n[u])
      }
      function s(e, t, n) {
        function r(e) {
          if (e.length > 0) {
            var t = e.pop();
            !function (t) {
              function n() {
                var e = u.response
                  , n = i(e);
                o(t, n)
              }
              function a(n) {
                s += t.text + "\n",
                  r(e)
              }
              function o(t, n) {
                var i = 'url("data:' + t.format + ";base64," + n + '")';
                s += t.text.replace(t.fontUrlRegexp, i) + "\n",
                  setTimeout(function () {
                    r(e)
                  }, 0)
              }
              var u = new XMLHttpRequest;
              u.addEventListener("load", n),
                u.addEventListener("error", a),
                u.addEventListener("abort", a),
                u.open("GET", t.url),
                u.responseType = "arraybuffer",
                u.send()
            }(t)
          } else
            n(s)
        }
        function i(e) {
          for (var t = "", n = new Uint8Array(e), r = n.byteLength, i = 0; i < r; i++)
            t += String.fromCharCode(n[i]);
          return window.btoa(t)
        }
        for (var a = t.selectorRemap, o = t.modifyStyle, u = t.modifyCss || function (e, t) {
          var e = a ? a(e) : e;
          return e + " { " + (o ? o(t) : t) + " }\n"
        }
          , s = "", l = [], c = document.styleSheets, f = 0; f < c.length; f++) {
          try {
            var d = c[f].cssRules
          } catch (e) {
            continue
          }
          if (null != d)
            for (var h, p = 0; p < d.length; p++ ,
              h = null) {
              var v = d[p];
              if (void 0 !== v.style) {
                var y;
                try {
                  y = v.selectorText
                } catch (e) { }
                try {
                  y && (h = e.querySelector(y) || e.parentNode && e.parentNode.querySelector(y))
                } catch (e) { }
                if (h)
                  s += u(v.selectorText, v.style.cssText);
                else if (v.cssText.match(/^@font-face/)) {
                  var m = /url\(["']?(.+?)["']?\)/
                    , g = v.cssText.match(m)
                    , b = g && g[1] || ""
                    , _ = b.match(/^data:/);
                  _ && (b = ""),
                    "about:blank" === b && (b = ""),
                    b ? (b.startsWith("../") ? b = c[f].href + "/../" + b : b.startsWith("./") && (b = c[f].href + "/." + b),
                      l.push({
                        text: v.cssText,
                        fontUrlRegexp: m,
                        format: function (e) {
                          for (var t = {
                            woff2: "font/woff2",
                            woff: "font/woff",
                            otf: "application/x-font-opentype",
                            ttf: "application/x-font-ttf",
                            eot: "application/vnd.ms-fontobject",
                            sfnt: "application/font-sfnt",
                            svg: "image/svg+xml"
                          }, n = Object.keys(t), r = 0; r < n.length; ++r) {
                            var i = n[r];
                            if (e.indexOf("." + i) > 0)
                              return t[i]
                          }
                          return "application/octet-stream"
                        }(b),
                        url: b
                      })) : s += v.cssText + "\n"
                }
              }
            }
        }
        r(l)
      }
      function l(e, t, n) {
        var r = e.viewBox && e.viewBox.baseVal && e.viewBox.baseVal[n] || null !== t.getAttribute(n) && !t.getAttribute(n).match(/%$/) && parseInt(t.getAttribute(n)) || e.getBoundingClientRect()[n] || parseInt(t.style[n]) || parseInt(window.getComputedStyle(e).getPropertyValue(n));
        return void 0 === r || null === r || isNaN(parseFloat(r)) ? 0 : r
      }
      function c(e) {
        return e = encodeURIComponent(e),
          e = e.replace(/%([0-9A-F]{2})/g, function (e, t) {
            var n = String.fromCharCode("0x" + t);
            return "%" === n ? "%25" : n
          }),
          decodeURIComponent(e)
      }
      function f(e) {
        for (var t = window.atob(e.split(",")[1]), n = e.split(",")[0].split(":")[1].split(";")[0], r = new ArrayBuffer(t.length), i = new Uint8Array(r), a = 0; a < t.length; a++)
          i[a] = t.charCodeAt(a);
        return new Blob([r], {
          type: n
        })
      }
      var d = void 0 !== t && t || {} || this;
      d.prepareSvg = function (e, t, n) {
        a(e),
          t = t || {},
          t.scale = t.scale || 1,
          t.responsive = t.responsive || !1;
        var r = "http://www.w3.org/2000/xmlns/";
        u(e, function () {
          function i(e) {
            var t = document.createElement("style");
            t.setAttribute("type", "text/css"),
              t.innerHTML = "<![CDATA[\n" + e + "\n]]>";
            var r = document.createElement("defs");
            if (r.appendChild(t),
              c.insertBefore(r, c.firstChild),
              n) {
              var i = u.innerHTML;
              i = i.replace(/NS\d+:href/gi, 'xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href'),
                n(i, a, o)
            }
          }
          var a, o, u = document.createElement("div"), c = e.cloneNode(!0);
          if ("svg" == e.tagName)
            a = t.width || l(e, c, "width"),
              o = t.height || l(e, c, "height");
          else {
            if (!e.getBBox)
              return;
            var f = e.getBBox();
            a = f.x + f.width,
              o = f.y + f.height,
              c.setAttribute("transform", c.getAttribute("transform").replace(/translate\(.*?\)/, ""));
            var d = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            d.appendChild(c),
              c = d
          }
          c.setAttribute("version", "1.1"),
            c.getAttribute("xmlns") || c.setAttributeNS(r, "xmlns", "http://www.w3.org/2000/svg"),
            c.getAttribute("xmlns:xlink") || c.setAttributeNS(r, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
            t.responsive ? (c.removeAttribute("width"),
              c.removeAttribute("height"),
              c.setAttribute("preserveAspectRatio", "xMinYMin meet")) : (c.setAttribute("width", a * t.scale),
                c.setAttribute("height", o * t.scale)),
            c.setAttribute("viewBox", [t.left || 0, t.top || 0, a, o].join(" "));
          for (var h = c.querySelectorAll("foreignObject > *"), p = 0; p < h.length; p++)
            h[p].getAttribute("xmlns") || h[p].setAttributeNS(r, "xmlns", "http://www.w3.org/1999/xhtml");
          u.appendChild(c),
            s(e, t, i)
        })
      }
        ,
        d.svgAsDataUri = function (e, t, n) {
          d.prepareSvg(e, t, function (e) {
            var t = "data:image/svg+xml;base64," + window.btoa(c('<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" [<!ENTITY nbsp "&#160;">]>' + e));
            n && n(t)
          })
        }
        ,
        d.svgAsPngUri = function (e, t, n) {
          a(e),
            t = t || {},
            t.encoderType = t.encoderType || "image/png",
            t.encoderOptions = t.encoderOptions || .8;
          var r = function (e, r, i) {
            var a = document.createElement("canvas")
              , o = a.getContext("2d");
            a.width = r,
              a.height = i;
            var u = window.devicePixelRatio || 1;
            a.style.width = a.width + "px",
              a.style.height = a.height + "px",
              a.width *= u,
              a.height *= u,
              o.setTransform(u, 0, 0, u, 0, 0),
              t.canvg ? t.canvg(a, e) : o.drawImage(e, 0, 0),
              t.backgroundColor && (o.globalCompositeOperation = "destination-over",
                o.fillStyle = t.backgroundColor,
                o.fillRect(0, 0, a.width, a.height));
            var s;
            try {
              s = a.toDataURL(t.encoderType, t.encoderOptions)
            } catch (e) {
              if ("undefined" != typeof SecurityError && e instanceof SecurityError || "SecurityError" == e.name)
                return;
              throw e
            }
            n(s)
          };
          t.canvg ? d.prepareSvg(e, t, r) : d.svgAsDataUri(e, t, function (e) {
            var t = new Image;
            t.onload = function () {
              r(t, t.width, t.height)
            }
              ,
              t.onerror = function () { }
              ,
              t.src = e
          })
        }
        ,
        d.download = function (e, t) {
          if (navigator.msSaveOrOpenBlob)
            navigator.msSaveOrOpenBlob(f(t), e);
          else {
            var n = document.createElement("a");
            if ("download" in n) {
              n.download = e,
                n.style.display = "none",
                document.body.appendChild(n);
              try {
                var r = f(t)
                  , i = URL.createObjectURL(r);
                n.href = i,
                  n.onclick = function () {
                    requestAnimationFrame(function () {
                      URL.revokeObjectURL(i)
                    })
                  }
              } catch (e) {
                n.href = t
              }
              n.click(),
                document.body.removeChild(n)
            } else
              window.open(t, "_temp", "menubar=no,toolbar=no,status=no")
          }
        }
        ,
        d.saveSvg = function (e, t, n) {
          a(e),
            n = n || {},
            d.svgAsDataUri(e, n, function (e) {
              d.download(t, e)
            })
        }
        ,
        d.saveSvgAsPng = function (e, t, n) {
          a(e),
            n = n || {},
            d.svgAsPngUri(e, n, function (e) {
              d.download(t, e)
            })
        }
        ,
        void 0 !== (r = function () {
          return d
        }
          .call(t, n, t, e)) && (e.exports = r)
    }()
  }
  , function (e, t, n) {
    "use strict";
    (function (t, r) {
      function i(e, t, n) {
        if (null != e || null != t || null != n) {
          "string" == typeof e && (e = document.getElementById(e)),
            null != e.svg && e.svg.stop();
          var r = u(n || {});
          1 == e.childNodes.length && "OBJECT" == e.childNodes[0].nodeName || (e.svg = r);
          var a = e.getContext("2d");
          void 0 !== t.documentElement ? r.loadXmlDoc(a, t) : "<" == t.substr(0, 1) ? r.loadXml(a, t) : r.load(a, t)
        } else
          for (var o = document.querySelectorAll("svg"), s = 0; s < o.length; s++) {
            var l = o[s]
              , c = document.createElement("canvas");
            c.width = l.clientWidth,
              c.height = l.clientHeight,
              l.parentNode.insertBefore(c, l),
              l.parentNode.removeChild(l);
            var f = document.createElement("div");
            f.appendChild(l),
              i(c, f.innerHTML)
          }
      }
      function a() {
        var e;
        return void 0 !== Element.prototype.matches ? e = function (e, t) {
          return e.matches(t)
        }
          : void 0 !== Element.prototype.webkitMatchesSelector ? e = function (e, t) {
            return e.webkitMatchesSelector(t)
          }
            : void 0 !== Element.prototype.mozMatchesSelector ? e = function (e, t) {
              return e.mozMatchesSelector(t)
            }
              : void 0 !== Element.prototype.msMatchesSelector ? e = function (e, t) {
                return e.msMatchesSelector(t)
              }
                : void 0 !== Element.prototype.oMatchesSelector ? e = function (e, t) {
                  return e.oMatchesSelector(t)
                }
                  : ("function" != typeof t && "function" != typeof Zepto || (e = function (e, t) {
                    return r(e).is(t)
                  }
                  ),
                    void 0 === e && (e = Sizzle.matchesSelector)),
          e
      }
      function o(e) {
        var t = [0, 0, 0]
          , n = /(\[[^\]]+\])/g
          , r = /(#[^\s\+>~\.\[:]+)/g
          , i = /(\.[^\s\+>~\.\[:]+)/g
          , a = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi
          , o = /(:[\w-]+\([^\)]*\))/gi
          , u = /(:[^\s\+>~\.\[:]+)/g
          , s = /([^\s\+>~\.\[:]+)/g
          , l = function (n, r) {
            var i = e.match(n);
            null != i && (t[r] += i.length,
              e = e.replace(n, " "))
          };
        return e = e.replace(/:not\(([^\)]*)\)/g, "     $1 "),
          e = e.replace(/{[^]*/gm, " "),
          l(n, 1),
          l(r, 0),
          l(i, 1),
          l(a, 2),
          l(o, 1),
          l(u, 1),
          e = e.replace(/[\*\s\+>~]/g, " "),
          e = e.replace(/[#\.]/g, " "),
          l(s, 2),
          t.join("")
      }
      function u(e) {
        var t = {
          opts: e
        }
          , n = a();
        "undefined" != typeof CanvasRenderingContext2D && (CanvasRenderingContext2D.prototype.drawSvg = function (e, t, n, r, a, o) {
          var u = {
            ignoreMouse: !0,
            ignoreAnimation: !0,
            ignoreDimensions: !0,
            ignoreClear: !0,
            offsetX: t,
            offsetY: n,
            scaleWidth: r,
            scaleHeight: a
          };
          for (var s in o)
            o.hasOwnProperty(s) && (u[s] = o[s]);
          i(this.canvas, e, u)
        }
        ),
          t.FRAMERATE = 30,
          t.MAX_VIRTUAL_PIXELS = 3e4,
          t.log = function (e) { }
          ,
          1 == t.opts.log && "undefined" != typeof console && (t.log = function (e) { }
          ),
          t.init = function (e) {
            var n = 0;
            t.UniqueId = function () {
              return "canvg" + ++n
            }
              ,
              t.Definitions = {},
              t.Styles = {},
              t.StylesSpecificity = {},
              t.Animations = [],
              t.Images = [],
              t.ctx = e,
              t.ViewPort = new function () {
                this.viewPorts = [],
                  this.Clear = function () {
                    this.viewPorts = []
                  }
                  ,
                  this.SetCurrent = function (e, t) {
                    this.viewPorts.push({
                      width: e,
                      height: t
                    })
                  }
                  ,
                  this.RemoveCurrent = function () {
                    this.viewPorts.pop()
                  }
                  ,
                  this.Current = function () {
                    return this.viewPorts[this.viewPorts.length - 1]
                  }
                  ,
                  this.width = function () {
                    return this.Current().width
                  }
                  ,
                  this.height = function () {
                    return this.Current().height
                  }
                  ,
                  this.ComputeSize = function (e) {
                    return null != e && "number" == typeof e ? e : "x" == e ? this.width() : "y" == e ? this.height() : Math.sqrt(Math.pow(this.width(), 2) + Math.pow(this.height(), 2)) / Math.sqrt(2)
                  }
              }
          }
          ,
          t.init(),
          t.ImagesLoaded = function () {
            for (var e = 0; e < t.Images.length; e++)
              if (!t.Images[e].loaded)
                return !1;
            return !0
          }
          ,
          t.trim = function (e) {
            return e.replace(/^\s+|\s+$/g, "")
          }
          ,
          t.compressSpaces = function (e) {
            return e.replace(/[\s\r\t\n]+/gm, " ")
          }
          ,
          t.ajax = function (e) {
            var t;
            return t = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
              t ? (t.open("GET", e, !1),
                t.send(null),
                t.responseText) : null
          }
          ,
          t.parseXml = function (e) {
            if ("undefined" != typeof Windows && void 0 !== Windows.Data && void 0 !== Windows.Data.Xml) {
              var t = new Windows.Data.Xml.Dom.XmlDocument
                , n = new Windows.Data.Xml.Dom.XmlLoadSettings;
              return n.prohibitDtd = !1,
                t.loadXml(e, n),
                t
            }
            if (window.DOMParser) {
              return (new DOMParser).parseFromString(e, "text/xml")
            }
            e = e.replace(/<!DOCTYPE svg[^>]*>/, "");
            var t = new ActiveXObject("Microsoft.XMLDOM");
            return t.async = "false",
              t.loadXML(e),
              t
          }
          ,
          t.Property = function (e, t) {
            this.name = e,
              this.value = t
          }
          ,
          t.Property.prototype.getValue = function () {
            return this.value
          }
          ,
          t.Property.prototype.hasValue = function () {
            return null != this.value && "" != this.value
          }
          ,
          t.Property.prototype.numValue = function () {
            if (!this.hasValue())
              return 0;
            var e = parseFloat(this.value);
            return (this.value + "").match(/%$/) && (e /= 100),
              e
          }
          ,
          t.Property.prototype.valueOrDefault = function (e) {
            return this.hasValue() ? this.value : e
          }
          ,
          t.Property.prototype.numValueOrDefault = function (e) {
            return this.hasValue() ? this.numValue() : e
          }
          ,
          t.Property.prototype.addOpacity = function (e) {
            var n = this.value;
            if (null != e.value && "" != e.value && "string" == typeof this.value) {
              var r = new s(this.value);
              r.ok && (n = "rgba(" + r.r + ", " + r.g + ", " + r.b + ", " + e.numValue() + ")")
            }
            return new t.Property(this.name, n)
          }
          ,
          t.Property.prototype.getDefinition = function () {
            var e = this.value.match(/#([^\)'"]+)/);
            return e && (e = e[1]),
              e || (e = this.value),
              t.Definitions[e]
          }
          ,
          t.Property.prototype.isUrlDefinition = function () {
            return 0 == this.value.indexOf("url(")
          }
          ,
          t.Property.prototype.getFillStyleDefinition = function (e, n) {
            var r = this.getDefinition();
            if (null != r && r.createGradient)
              return r.createGradient(t.ctx, e, n);
            if (null != r && r.createPattern) {
              if (r.getHrefAttribute().hasValue()) {
                var i = r.attribute("patternTransform");
                r = r.getHrefAttribute().getDefinition(),
                  i.hasValue() && (r.attribute("patternTransform", !0).value = i.value)
              }
              return r.createPattern(t.ctx, e)
            }
            return null
          }
          ,
          t.Property.prototype.getDPI = function (e) {
            return 96
          }
          ,
          t.Property.prototype.getEM = function (e) {
            var n = 12
              , r = new t.Property("fontSize", t.Font.Parse(t.ctx.font).fontSize);
            return r.hasValue() && (n = r.toPixels(e)),
              n
          }
          ,
          t.Property.prototype.getUnits = function () {
            return (this.value + "").replace(/[0-9\.\-]/g, "")
          }
          ,
          t.Property.prototype.toPixels = function (e, n) {
            if (!this.hasValue())
              return 0;
            var r = this.value + "";
            if (r.match(/em$/))
              return this.numValue() * this.getEM(e);
            if (r.match(/ex$/))
              return this.numValue() * this.getEM(e) / 2;
            if (r.match(/px$/))
              return this.numValue();
            if (r.match(/pt$/))
              return this.numValue() * this.getDPI(e) * (1 / 72);
            if (r.match(/pc$/))
              return 15 * this.numValue();
            if (r.match(/cm$/))
              return this.numValue() * this.getDPI(e) / 2.54;
            if (r.match(/mm$/))
              return this.numValue() * this.getDPI(e) / 25.4;
            if (r.match(/in$/))
              return this.numValue() * this.getDPI(e);
            if (r.match(/%$/))
              return this.numValue() * t.ViewPort.ComputeSize(e);
            var i = this.numValue();
            return n && i < 1 ? i * t.ViewPort.ComputeSize(e) : i
          }
          ,
          t.Property.prototype.toMilliseconds = function () {
            if (!this.hasValue())
              return 0;
            var e = this.value + "";
            return e.match(/s$/) ? 1e3 * this.numValue() : (e.match(/ms$/),
              this.numValue())
          }
          ,
          t.Property.prototype.toRadians = function () {
            if (!this.hasValue())
              return 0;
            var e = this.value + "";
            return e.match(/deg$/) ? this.numValue() * (Math.PI / 180) : e.match(/grad$/) ? this.numValue() * (Math.PI / 200) : e.match(/rad$/) ? this.numValue() : this.numValue() * (Math.PI / 180)
          }
          ;
        var r = {
          baseline: "alphabetic",
          "before-edge": "top",
          "text-before-edge": "top",
          middle: "middle",
          central: "middle",
          "after-edge": "bottom",
          "text-after-edge": "bottom",
          ideographic: "ideographic",
          alphabetic: "alphabetic",
          hanging: "hanging",
          mathematical: "alphabetic"
        };
        return t.Property.prototype.toTextBaseline = function () {
          return this.hasValue() ? r[this.value] : null
        }
          ,
          t.Font = new function () {
            this.Styles = "normal|italic|oblique|inherit",
              this.Variants = "normal|small-caps|inherit",
              this.Weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit",
              this.CreateFont = function (e, n, r, i, a, o) {
                var u = null != o ? this.Parse(o) : this.CreateFont("", "", "", "", "", t.ctx.font);
                return {
                  fontFamily: a || u.fontFamily,
                  fontSize: i || u.fontSize,
                  fontStyle: e || u.fontStyle,
                  fontWeight: r || u.fontWeight,
                  fontVariant: n || u.fontVariant,
                  toString: function () {
                    return [this.fontStyle, this.fontVariant, this.fontWeight, this.fontSize, this.fontFamily].join(" ")
                  }
                }
              }
              ;
            var e = this;
            this.Parse = function (n) {
              for (var r = {}, i = t.trim(t.compressSpaces(n || "")).split(" "), a = {
                fontSize: !1,
                fontStyle: !1,
                fontWeight: !1,
                fontVariant: !1
              }, o = "", u = 0; u < i.length; u++)
                a.fontStyle || -1 == e.Styles.indexOf(i[u]) ? a.fontVariant || -1 == e.Variants.indexOf(i[u]) ? a.fontWeight || -1 == e.Weights.indexOf(i[u]) ? a.fontSize ? "inherit" != i[u] && (o += i[u]) : ("inherit" != i[u] && (r.fontSize = i[u].split("/")[0]),
                  a.fontStyle = a.fontVariant = a.fontWeight = a.fontSize = !0) : ("inherit" != i[u] && (r.fontWeight = i[u]),
                    a.fontStyle = a.fontVariant = a.fontWeight = !0) : ("inherit" != i[u] && (r.fontVariant = i[u]),
                      a.fontStyle = a.fontVariant = !0) : ("inherit" != i[u] && (r.fontStyle = i[u]),
                        a.fontStyle = !0);
              return "" != o && (r.fontFamily = o),
                r
            }
          }
          ,
          t.ToNumberArray = function (e) {
            for (var n = t.trim(t.compressSpaces((e || "").replace(/,/g, " "))).split(" "), r = 0; r < n.length; r++)
              n[r] = parseFloat(n[r]);
            return n
          }
          ,
          t.Point = function (e, t) {
            this.x = e,
              this.y = t
          }
          ,
          t.Point.prototype.angleTo = function (e) {
            return Math.atan2(e.y - this.y, e.x - this.x)
          }
          ,
          t.Point.prototype.applyTransform = function (e) {
            var t = this.x * e[0] + this.y * e[2] + e[4]
              , n = this.x * e[1] + this.y * e[3] + e[5];
            this.x = t,
              this.y = n
          }
          ,
          t.CreatePoint = function (e) {
            var n = t.ToNumberArray(e);
            return new t.Point(n[0], n[1])
          }
          ,
          t.CreatePath = function (e) {
            for (var n = t.ToNumberArray(e), r = [], i = 0; i < n.length; i += 2)
              r.push(new t.Point(n[i], n[i + 1]));
            return r
          }
          ,
          t.BoundingBox = function (e, t, n, r) {
            this.x1 = Number.NaN,
              this.y1 = Number.NaN,
              this.x2 = Number.NaN,
              this.y2 = Number.NaN,
              this.x = function () {
                return this.x1
              }
              ,
              this.y = function () {
                return this.y1
              }
              ,
              this.width = function () {
                return this.x2 - this.x1
              }
              ,
              this.height = function () {
                return this.y2 - this.y1
              }
              ,
              this.addPoint = function (e, t) {
                null != e && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = e,
                  this.x2 = e),
                  e < this.x1 && (this.x1 = e),
                  e > this.x2 && (this.x2 = e)),
                  null != t && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = t,
                    this.y2 = t),
                    t < this.y1 && (this.y1 = t),
                    t > this.y2 && (this.y2 = t))
              }
              ,
              this.addX = function (e) {
                this.addPoint(e, null)
              }
              ,
              this.addY = function (e) {
                this.addPoint(null, e)
              }
              ,
              this.addBoundingBox = function (e) {
                this.addPoint(e.x1, e.y1),
                  this.addPoint(e.x2, e.y2)
              }
              ,
              this.addQuadraticCurve = function (e, t, n, r, i, a) {
                var o = e + 2 / 3 * (n - e)
                  , u = t + 2 / 3 * (r - t)
                  , s = o + 1 / 3 * (i - e)
                  , l = u + 1 / 3 * (a - t);
                this.addBezierCurve(e, t, o, s, u, l, i, a)
              }
              ,
              this.addBezierCurve = function (e, t, n, r, i, a, o, u) {
                var s = [e, t]
                  , l = [n, r]
                  , c = [i, a]
                  , f = [o, u];
                this.addPoint(s[0], s[1]),
                  this.addPoint(f[0], f[1]);
                for (var d = 0; d <= 1; d++) {
                  var h = function (e) {
                    return Math.pow(1 - e, 3) * s[d] + 3 * Math.pow(1 - e, 2) * e * l[d] + 3 * (1 - e) * Math.pow(e, 2) * c[d] + Math.pow(e, 3) * f[d]
                  }
                    , p = 6 * s[d] - 12 * l[d] + 6 * c[d]
                    , v = -3 * s[d] + 9 * l[d] - 9 * c[d] + 3 * f[d]
                    , y = 3 * l[d] - 3 * s[d];
                  if (0 != v) {
                    var m = Math.pow(p, 2) - 4 * y * v;
                    if (!(m < 0)) {
                      var g = (-p + Math.sqrt(m)) / (2 * v);
                      0 < g && g < 1 && (0 == d && this.addX(h(g)),
                        1 == d && this.addY(h(g)));
                      var b = (-p - Math.sqrt(m)) / (2 * v);
                      0 < b && b < 1 && (0 == d && this.addX(h(b)),
                        1 == d && this.addY(h(b)))
                    }
                  } else {
                    if (0 == p)
                      continue;
                    var _ = -y / p;
                    0 < _ && _ < 1 && (0 == d && this.addX(h(_)),
                      1 == d && this.addY(h(_)))
                  }
                }
              }
              ,
              this.isPointInBox = function (e, t) {
                return this.x1 <= e && e <= this.x2 && this.y1 <= t && t <= this.y2
              }
              ,
              this.addPoint(e, t),
              this.addPoint(n, r)
          }
          ,
          t.Transform = function (e) {
            var n = this;
            this.Type = {},
              this.Type.translate = function (e) {
                this.p = t.CreatePoint(e),
                  this.apply = function (e) {
                    e.translate(this.p.x || 0, this.p.y || 0)
                  }
                  ,
                  this.unapply = function (e) {
                    e.translate(-1 * this.p.x || 0, -1 * this.p.y || 0)
                  }
                  ,
                  this.applyToPoint = function (e) {
                    e.applyTransform([1, 0, 0, 1, this.p.x || 0, this.p.y || 0])
                  }
              }
              ,
              this.Type.rotate = function (e) {
                var n = t.ToNumberArray(e);
                this.angle = new t.Property("angle", n[0]),
                  this.cx = n[1] || 0,
                  this.cy = n[2] || 0,
                  this.apply = function (e) {
                    e.translate(this.cx, this.cy),
                      e.rotate(this.angle.toRadians()),
                      e.translate(-this.cx, -this.cy)
                  }
                  ,
                  this.unapply = function (e) {
                    e.translate(this.cx, this.cy),
                      e.rotate(-1 * this.angle.toRadians()),
                      e.translate(-this.cx, -this.cy)
                  }
                  ,
                  this.applyToPoint = function (e) {
                    var t = this.angle.toRadians();
                    e.applyTransform([1, 0, 0, 1, this.p.x || 0, this.p.y || 0]),
                      e.applyTransform([Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0]),
                      e.applyTransform([1, 0, 0, 1, -this.p.x || 0, -this.p.y || 0])
                  }
              }
              ,
              this.Type.scale = function (e) {
                this.p = t.CreatePoint(e),
                  this.apply = function (e) {
                    e.scale(this.p.x || 1, this.p.y || this.p.x || 1)
                  }
                  ,
                  this.unapply = function (e) {
                    e.scale(1 / this.p.x || 1, 1 / this.p.y || this.p.x || 1)
                  }
                  ,
                  this.applyToPoint = function (e) {
                    e.applyTransform([this.p.x || 0, 0, 0, this.p.y || 0, 0, 0])
                  }
              }
              ,
              this.Type.matrix = function (e) {
                this.m = t.ToNumberArray(e),
                  this.apply = function (e) {
                    e.transform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5])
                  }
                  ,
                  this.unapply = function (e) {
                    var t = this.m[0]
                      , n = this.m[2]
                      , r = this.m[4]
                      , i = this.m[1]
                      , a = this.m[3]
                      , o = this.m[5]
                      , u = 1 / (t * (1 * a - 0 * o) - n * (1 * i - 0 * o) + r * (0 * i - 0 * a));
                    e.transform(u * (1 * a - 0 * o), u * (0 * o - 1 * i), u * (0 * r - 1 * n), u * (1 * t - 0 * r), u * (n * o - r * a), u * (r * i - t * o))
                  }
                  ,
                  this.applyToPoint = function (e) {
                    e.applyTransform(this.m)
                  }
              }
              ,
              this.Type.SkewBase = function (e) {
                this.base = n.Type.matrix,
                  this.base(e),
                  this.angle = new t.Property("angle", e)
              }
              ,
              this.Type.SkewBase.prototype = new this.Type.matrix,
              this.Type.skewX = function (e) {
                this.base = n.Type.SkewBase,
                  this.base(e),
                  this.m = [1, 0, Math.tan(this.angle.toRadians()), 1, 0, 0]
              }
              ,
              this.Type.skewX.prototype = new this.Type.SkewBase,
              this.Type.skewY = function (e) {
                this.base = n.Type.SkewBase,
                  this.base(e),
                  this.m = [1, Math.tan(this.angle.toRadians()), 0, 1, 0, 0]
              }
              ,
              this.Type.skewY.prototype = new this.Type.SkewBase,
              this.transforms = [],
              this.apply = function (e) {
                for (var t = 0; t < this.transforms.length; t++)
                  this.transforms[t].apply(e)
              }
              ,
              this.unapply = function (e) {
                for (var t = this.transforms.length - 1; t >= 0; t--)
                  this.transforms[t].unapply(e)
              }
              ,
              this.applyToPoint = function (e) {
                for (var t = 0; t < this.transforms.length; t++)
                  this.transforms[t].applyToPoint(e)
              }
              ;
            for (var r = t.trim(t.compressSpaces(e)).replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/), i = 0; i < r.length; i++) {
              var a = t.trim(r[i].split("(")[0])
                , o = r[i].split("(")[1].replace(")", "")
                , u = this.Type[a];
              if (void 0 !== u) {
                var s = new u(o);
                s.type = a,
                  this.transforms.push(s)
              }
            }
          }
          ,
          t.AspectRatio = function (e, n, r, i, a, o, u, s, l, c) {
            n = t.compressSpaces(n),
              n = n.replace(/^defer\s/, "");
            var f = n.split(" ")[0] || "xMidYMid"
              , d = n.split(" ")[1] || "meet"
              , h = r / i
              , p = a / o
              , v = Math.min(h, p)
              , y = Math.max(h, p);
            "meet" == d && (i *= v,
              o *= v),
              "slice" == d && (i *= y,
                o *= y),
              l = new t.Property("refX", l),
              c = new t.Property("refY", c),
              l.hasValue() && c.hasValue() ? e.translate(-v * l.toPixels("x"), -v * c.toPixels("y")) : (f.match(/^xMid/) && ("meet" == d && v == p || "slice" == d && y == p) && e.translate(r / 2 - i / 2, 0),
                f.match(/YMid$/) && ("meet" == d && v == h || "slice" == d && y == h) && e.translate(0, a / 2 - o / 2),
                f.match(/^xMax/) && ("meet" == d && v == p || "slice" == d && y == p) && e.translate(r - i, 0),
                f.match(/YMax$/) && ("meet" == d && v == h || "slice" == d && y == h) && e.translate(0, a - o)),
              "none" == f ? e.scale(h, p) : "meet" == d ? e.scale(v, v) : "slice" == d && e.scale(y, y),
              e.translate(null == u ? 0 : -u, null == s ? 0 : -s)
          }
          ,
          t.Element = {},
          t.EmptyProperty = new t.Property("EMPTY", ""),
          t.Element.ElementBase = function (e) {
            if (this.attributes = {},
              this.styles = {},
              this.stylesSpecificity = {},
              this.children = [],
              this.attribute = function (e, n) {
                var r = this.attributes[e];
                return null != r ? r : (1 == n && (r = new t.Property(e, ""),
                  this.attributes[e] = r),
                  r || t.EmptyProperty)
              }
              ,
              this.getHrefAttribute = function () {
                for (var e in this.attributes)
                  if ("href" == e || e.match(/:href$/))
                    return this.attributes[e];
                return t.EmptyProperty
              }
              ,
              this.style = function (e, n, r) {
                var i = this.styles[e];
                if (null != i)
                  return i;
                var a = this.attribute(e);
                if (null != a && a.hasValue())
                  return this.styles[e] = a,
                    a;
                if (1 != r) {
                  var o = this.parent;
                  if (null != o) {
                    var u = o.style(e);
                    if (null != u && u.hasValue())
                      return u
                  }
                }
                return 1 == n && (i = new t.Property(e, ""),
                  this.styles[e] = i),
                  i || t.EmptyProperty
              }
              ,
              this.render = function (e) {
                if ("none" != this.style("display").value && "hidden" != this.style("visibility").value) {
                  if (e.save(),
                    this.style("mask").hasValue()) {
                    var t = this.style("mask").getDefinition();
                    null != t && t.apply(e, this)
                  } else if (this.style("filter").hasValue()) {
                    var n = this.style("filter").getDefinition();
                    null != n && n.apply(e, this)
                  } else
                    this.setContext(e),
                      this.renderChildren(e),
                      this.clearContext(e);
                  e.restore()
                }
              }
              ,
              this.setContext = function (e) { }
              ,
              this.clearContext = function (e) { }
              ,
              this.renderChildren = function (e) {
                for (var t = 0; t < this.children.length; t++)
                  this.children[t].render(e)
              }
              ,
              this.addChild = function (e, n) {
                var r = e;
                n && (r = t.CreateElement(e)),
                  r.parent = this,
                  "title" != r.type && this.children.push(r)
              }
              ,
              this.addStylesFromStyleDefinition = function () {
                for (var r in t.Styles)
                  if ("@" != r[0] && n(e, r)) {
                    var i = t.Styles[r]
                      , a = t.StylesSpecificity[r];
                    if (null != i)
                      for (var o in i) {
                        var u = this.stylesSpecificity[o];
                        void 0 === u && (u = "000"),
                          a > u && (this.styles[o] = i[o],
                            this.stylesSpecificity[o] = a)
                      }
                  }
              }
              ,
              null != e && 1 == e.nodeType) {
              for (var r = 0; r < e.attributes.length; r++) {
                var i = e.attributes[r];
                this.attributes[i.nodeName] = new t.Property(i.nodeName, i.value)
              }
              if (this.addStylesFromStyleDefinition(),
                this.attribute("style").hasValue())
                for (var a = this.attribute("style").value.split(";"), r = 0; r < a.length; r++)
                  if ("" != t.trim(a[r])) {
                    var o = a[r].split(":")
                      , u = t.trim(o[0])
                      , s = t.trim(o[1]);
                    this.styles[u] = new t.Property(u, s)
                  }
              this.attribute("id").hasValue() && null == t.Definitions[this.attribute("id").value] && (t.Definitions[this.attribute("id").value] = this);
              for (var r = 0; r < e.childNodes.length; r++) {
                var l = e.childNodes[r];
                if (1 == l.nodeType && this.addChild(l, !0),
                  this.captureTextNodes && (3 == l.nodeType || 4 == l.nodeType)) {
                  var c = l.value || l.text || l.textContent || "";
                  "" != t.compressSpaces(c) && this.addChild(new t.Element.tspan(l), !1)
                }
              }
            }
          }
          ,
          t.Element.RenderedElementBase = function (e) {
            this.base = t.Element.ElementBase,
              this.base(e),
              this.setContext = function (e) {
                if (this.style("fill").isUrlDefinition()) {
                  var n = this.style("fill").getFillStyleDefinition(this, this.style("fill-opacity"));
                  null != n && (e.fillStyle = n)
                } else if (this.style("fill").hasValue()) {
                  var r = this.style("fill");
                  "currentColor" == r.value && (r.value = this.style("color").value),
                    "inherit" != r.value && (e.fillStyle = "none" == r.value ? "rgba(0,0,0,0)" : r.value)
                }
                if (this.style("fill-opacity").hasValue()) {
                  var r = new t.Property("fill", e.fillStyle);
                  r = r.addOpacity(this.style("fill-opacity")),
                    e.fillStyle = r.value
                }
                if (this.style("stroke").isUrlDefinition()) {
                  var n = this.style("stroke").getFillStyleDefinition(this, this.style("stroke-opacity"));
                  null != n && (e.strokeStyle = n)
                } else if (this.style("stroke").hasValue()) {
                  var i = this.style("stroke");
                  "currentColor" == i.value && (i.value = this.style("color").value),
                    "inherit" != i.value && (e.strokeStyle = "none" == i.value ? "rgba(0,0,0,0)" : i.value)
                }
                if (this.style("stroke-opacity").hasValue()) {
                  var i = new t.Property("stroke", e.strokeStyle);
                  i = i.addOpacity(this.style("stroke-opacity")),
                    e.strokeStyle = i.value
                }
                if (this.style("stroke-width").hasValue()) {
                  var a = this.style("stroke-width").toPixels();
                  e.lineWidth = 0 == a ? .001 : a
                }
                if (this.style("stroke-linecap").hasValue() && (e.lineCap = this.style("stroke-linecap").value),
                  this.style("stroke-linejoin").hasValue() && (e.lineJoin = this.style("stroke-linejoin").value),
                  this.style("stroke-miterlimit").hasValue() && (e.miterLimit = this.style("stroke-miterlimit").value),
                  this.style("stroke-dasharray").hasValue() && "none" != this.style("stroke-dasharray").value) {
                  var o = t.ToNumberArray(this.style("stroke-dasharray").value);
                  void 0 !== e.setLineDash ? e.setLineDash(o) : void 0 !== e.webkitLineDash ? e.webkitLineDash = o : void 0 === e.mozDash || 1 == o.length && 0 == o[0] || (e.mozDash = o);
                  var u = this.style("stroke-dashoffset").numValueOrDefault(1);
                  void 0 !== e.lineDashOffset ? e.lineDashOffset = u : void 0 !== e.webkitLineDashOffset ? e.webkitLineDashOffset = u : void 0 !== e.mozDashOffset && (e.mozDashOffset = u)
                }
                if (void 0 !== e.font && (e.font = t.Font.CreateFont(this.style("font-style").value, this.style("font-variant").value, this.style("font-weight").value, this.style("font-size").hasValue() ? this.style("font-size").toPixels() + "px" : "", this.style("font-family").value).toString()),
                  this.style("transform", !1, !0).hasValue()) {
                  new t.Transform(this.style("transform", !1, !0).value).apply(e)
                }
                if (this.style("clip-path", !1, !0).hasValue()) {
                  var s = this.style("clip-path", !1, !0).getDefinition();
                  null != s && s.apply(e)
                }
                this.style("opacity").hasValue() && (e.globalAlpha = this.style("opacity").numValue())
              }
          }
          ,
          t.Element.RenderedElementBase.prototype = new t.Element.ElementBase,
          t.Element.PathElementBase = function (e) {
            this.base = t.Element.RenderedElementBase,
              this.base(e),
              this.path = function (e) {
                return null != e && e.beginPath(),
                  new t.BoundingBox
              }
              ,
              this.renderChildren = function (e) {
                this.path(e),
                  t.Mouse.checkPath(this, e),
                  "" != e.fillStyle && ("inherit" != this.style("fill-rule").valueOrDefault("inherit") ? e.fill(this.style("fill-rule").value) : e.fill()),
                  "" != e.strokeStyle && e.stroke();
                var n = this.getMarkers();
                if (null != n) {
                  if (this.style("marker-start").isUrlDefinition()) {
                    var r = this.style("marker-start").getDefinition();
                    r.render(e, n[0][0], n[0][1])
                  }
                  if (this.style("marker-mid").isUrlDefinition())
                    for (var r = this.style("marker-mid").getDefinition(), i = 1; i < n.length - 1; i++)
                      r.render(e, n[i][0], n[i][1]);
                  if (this.style("marker-end").isUrlDefinition()) {
                    var r = this.style("marker-end").getDefinition();
                    r.render(e, n[n.length - 1][0], n[n.length - 1][1])
                  }
                }
              }
              ,
              this.getBoundingBox = function () {
                return this.path()
              }
              ,
              this.getMarkers = function () {
                return null
              }
          }
          ,
          t.Element.PathElementBase.prototype = new t.Element.RenderedElementBase,
          t.Element.svg = function (e) {
            this.base = t.Element.RenderedElementBase,
              this.base(e),
              this.baseClearContext = this.clearContext,
              this.clearContext = function (e) {
                this.baseClearContext(e),
                  t.ViewPort.RemoveCurrent()
              }
              ,
              this.baseSetContext = this.setContext,
              this.setContext = function (e) {
                e.strokeStyle = "rgba(0,0,0,0)",
                  e.lineCap = "butt",
                  e.lineJoin = "miter",
                  e.miterLimit = 4,
                  void 0 !== e.font && void 0 !== window.getComputedStyle && (e.font = window.getComputedStyle(e.canvas).getPropertyValue("font")),
                  this.baseSetContext(e),
                  this.attribute("x").hasValue() || (this.attribute("x", !0).value = 0),
                  this.attribute("y").hasValue() || (this.attribute("y", !0).value = 0),
                  e.translate(this.attribute("x").toPixels("x"), this.attribute("y").toPixels("y"));
                var n = t.ViewPort.width()
                  , r = t.ViewPort.height();
                if (this.attribute("width").hasValue() || (this.attribute("width", !0).value = "100%"),
                  this.attribute("height").hasValue() || (this.attribute("height", !0).value = "100%"),
                  void 0 === this.root) {
                  n = this.attribute("width").toPixels("x"),
                    r = this.attribute("height").toPixels("y");
                  var i = 0
                    , a = 0;
                  this.attribute("refX").hasValue() && this.attribute("refY").hasValue() && (i = -this.attribute("refX").toPixels("x"),
                    a = -this.attribute("refY").toPixels("y")),
                    "visible" != this.attribute("overflow").valueOrDefault("hidden") && (e.beginPath(),
                      e.moveTo(i, a),
                      e.lineTo(n, a),
                      e.lineTo(n, r),
                      e.lineTo(i, r),
                      e.closePath(),
                      e.clip())
                }
                if (t.ViewPort.SetCurrent(n, r),
                  this.attribute("viewBox").hasValue()) {
                  var o = t.ToNumberArray(this.attribute("viewBox").value)
                    , u = o[0]
                    , s = o[1];
                  n = o[2],
                    r = o[3],
                    t.AspectRatio(e, this.attribute("preserveAspectRatio").value, t.ViewPort.width(), n, t.ViewPort.height(), r, u, s, this.attribute("refX").value, this.attribute("refY").value),
                    t.ViewPort.RemoveCurrent(),
                    t.ViewPort.SetCurrent(o[2], o[3])
                }
              }
          }
          ,
          t.Element.svg.prototype = new t.Element.RenderedElementBase,
          t.Element.rect = function (e) {
            this.base = t.Element.PathElementBase,
              this.base(e),
              this.path = function (e) {
                var n = this.attribute("x").toPixels("x")
                  , r = this.attribute("y").toPixels("y")
                  , i = this.attribute("width").toPixels("x")
                  , a = this.attribute("height").toPixels("y")
                  , o = this.attribute("rx").toPixels("x")
                  , u = this.attribute("ry").toPixels("y");
                return this.attribute("rx").hasValue() && !this.attribute("ry").hasValue() && (u = o),
                  this.attribute("ry").hasValue() && !this.attribute("rx").hasValue() && (o = u),
                  o = Math.min(o, i / 2),
                  u = Math.min(u, a / 2),
                  null != e && (e.beginPath(),
                    e.moveTo(n + o, r),
                    e.lineTo(n + i - o, r),
                    e.quadraticCurveTo(n + i, r, n + i, r + u),
                    e.lineTo(n + i, r + a - u),
                    e.quadraticCurveTo(n + i, r + a, n + i - o, r + a),
                    e.lineTo(n + o, r + a),
                    e.quadraticCurveTo(n, r + a, n, r + a - u),
                    e.lineTo(n, r + u),
                    e.quadraticCurveTo(n, r, n + o, r),
                    e.closePath()),
                  new t.BoundingBox(n, r, n + i, r + a)
              }
          }
          ,
          t.Element.rect.prototype = new t.Element.PathElementBase,
          t.Element.circle = function (e) {
            this.base = t.Element.PathElementBase,
              this.base(e),
              this.path = function (e) {
                var n = this.attribute("cx").toPixels("x")
                  , r = this.attribute("cy").toPixels("y")
                  , i = this.attribute("r").toPixels();
                return null != e && (e.beginPath(),
                  e.arc(n, r, i, 0, 2 * Math.PI, !0),
                  e.closePath()),
                  new t.BoundingBox(n - i, r - i, n + i, r + i)
              }
          }
          ,
          t.Element.circle.prototype = new t.Element.PathElementBase,
          t.Element.ellipse = function (e) {
            this.base = t.Element.PathElementBase,
              this.base(e),
              this.path = function (e) {
                var n = (Math.sqrt(2) - 1) / 3 * 4
                  , r = this.attribute("rx").toPixels("x")
                  , i = this.attribute("ry").toPixels("y")
                  , a = this.attribute("cx").toPixels("x")
                  , o = this.attribute("cy").toPixels("y");
                return null != e && (e.beginPath(),
                  e.moveTo(a, o - i),
                  e.bezierCurveTo(a + n * r, o - i, a + r, o - n * i, a + r, o),
                  e.bezierCurveTo(a + r, o + n * i, a + n * r, o + i, a, o + i),
                  e.bezierCurveTo(a - n * r, o + i, a - r, o + n * i, a - r, o),
                  e.bezierCurveTo(a - r, o - n * i, a - n * r, o - i, a, o - i),
                  e.closePath()),
                  new t.BoundingBox(a - r, o - i, a + r, o + i)
              }
          }
          ,
          t.Element.ellipse.prototype = new t.Element.PathElementBase,
          t.Element.line = function (e) {
            this.base = t.Element.PathElementBase,
              this.base(e),
              this.getPoints = function () {
                return [new t.Point(this.attribute("x1").toPixels("x"), this.attribute("y1").toPixels("y")), new t.Point(this.attribute("x2").toPixels("x"), this.attribute("y2").toPixels("y"))]
              }
              ,
              this.path = function (e) {
                var n = this.getPoints();
                return null != e && (e.beginPath(),
                  e.moveTo(n[0].x, n[0].y),
                  e.lineTo(n[1].x, n[1].y)),
                  new t.BoundingBox(n[0].x, n[0].y, n[1].x, n[1].y)
              }
              ,
              this.getMarkers = function () {
                var e = this.getPoints()
                  , t = e[0].angleTo(e[1]);
                return [[e[0], t], [e[1], t]]
              }
          }
          ,
          t.Element.line.prototype = new t.Element.PathElementBase,
          t.Element.polyline = function (e) {
            this.base = t.Element.PathElementBase,
              this.base(e),
              this.points = t.CreatePath(this.attribute("points").value),
              this.path = function (e) {
                var n = new t.BoundingBox(this.points[0].x, this.points[0].y);
                null != e && (e.beginPath(),
                  e.moveTo(this.points[0].x, this.points[0].y));
                for (var r = 1; r < this.points.length; r++)
                  n.addPoint(this.points[r].x, this.points[r].y),
                    null != e && e.lineTo(this.points[r].x, this.points[r].y);
                return n
              }
              ,
              this.getMarkers = function () {
                for (var e = [], t = 0; t < this.points.length - 1; t++)
                  e.push([this.points[t], this.points[t].angleTo(this.points[t + 1])]);
                return e.length > 0 && e.push([this.points[this.points.length - 1], e[e.length - 1][1]]),
                  e
              }
          }
          ,
          t.Element.polyline.prototype = new t.Element.PathElementBase,
          t.Element.polygon = function (e) {
            this.base = t.Element.polyline,
              this.base(e),
              this.basePath = this.path,
              this.path = function (e) {
                var t = this.basePath(e);
                return null != e && (e.lineTo(this.points[0].x, this.points[0].y),
                  e.closePath()),
                  t
              }
          }
          ,
          t.Element.polygon.prototype = new t.Element.polyline,
          t.Element.path = function (e) {
            this.base = t.Element.PathElementBase,
              this.base(e);
            var n = this.attribute("d").value;
            n = n.replace(/,/gm, " ");
            for (var r = 0; r < 2; r++)
              n = n.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, "$1 $2");
            n = n.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2"),
              n = n.replace(/([0-9])([+\-])/gm, "$1 $2");
            for (var r = 0; r < 2; r++)
              n = n.replace(/(\.[0-9]*)(\.)/gm, "$1 $2");
            n = n.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm, "$1 $3 $4 "),
              n = t.compressSpaces(n),
              n = t.trim(n),
              this.PathParser = new function (e) {
                this.tokens = e.split(" "),
                  this.reset = function () {
                    this.i = -1,
                      this.command = "",
                      this.previousCommand = "",
                      this.start = new t.Point(0, 0),
                      this.control = new t.Point(0, 0),
                      this.current = new t.Point(0, 0),
                      this.points = [],
                      this.angles = []
                  }
                  ,
                  this.isEnd = function () {
                    return this.i >= this.tokens.length - 1
                  }
                  ,
                  this.isCommandOrEnd = function () {
                    return !!this.isEnd() || null != this.tokens[this.i + 1].match(/^[A-Za-z]$/)
                  }
                  ,
                  this.isRelativeCommand = function () {
                    switch (this.command) {
                      case "m":
                      case "l":
                      case "h":
                      case "v":
                      case "c":
                      case "s":
                      case "q":
                      case "t":
                      case "a":
                      case "z":
                        return !0
                    }
                    return !1
                  }
                  ,
                  this.getToken = function () {
                    return this.i++ ,
                      this.tokens[this.i]
                  }
                  ,
                  this.getScalar = function () {
                    return parseFloat(this.getToken())
                  }
                  ,
                  this.nextCommand = function () {
                    this.previousCommand = this.command,
                      this.command = this.getToken()
                  }
                  ,
                  this.getPoint = function () {
                    var e = new t.Point(this.getScalar(), this.getScalar());
                    return this.makeAbsolute(e)
                  }
                  ,
                  this.getAsControlPoint = function () {
                    var e = this.getPoint();
                    return this.control = e,
                      e
                  }
                  ,
                  this.getAsCurrentPoint = function () {
                    var e = this.getPoint();
                    return this.current = e,
                      e
                  }
                  ,
                  this.getReflectedControlPoint = function () {
                    return "c" != this.previousCommand.toLowerCase() && "s" != this.previousCommand.toLowerCase() && "q" != this.previousCommand.toLowerCase() && "t" != this.previousCommand.toLowerCase() ? this.current : new t.Point(2 * this.current.x - this.control.x, 2 * this.current.y - this.control.y)
                  }
                  ,
                  this.makeAbsolute = function (e) {
                    return this.isRelativeCommand() && (e.x += this.current.x,
                      e.y += this.current.y),
                      e
                  }
                  ,
                  this.addMarker = function (e, t, n) {
                    null != n && this.angles.length > 0 && null == this.angles[this.angles.length - 1] && (this.angles[this.angles.length - 1] = this.points[this.points.length - 1].angleTo(n)),
                      this.addMarkerAngle(e, null == t ? null : t.angleTo(e))
                  }
                  ,
                  this.addMarkerAngle = function (e, t) {
                    this.points.push(e),
                      this.angles.push(t)
                  }
                  ,
                  this.getMarkerPoints = function () {
                    return this.points
                  }
                  ,
                  this.getMarkerAngles = function () {
                    for (var e = 0; e < this.angles.length; e++)
                      if (null == this.angles[e])
                        for (var t = e + 1; t < this.angles.length; t++)
                          if (null != this.angles[t]) {
                            this.angles[e] = this.angles[t];
                            break
                          }
                    return this.angles
                  }
              }
                (n),
              this.path = function (e) {
                var n = this.PathParser;
                n.reset();
                var r = new t.BoundingBox;
                for (null != e && e.beginPath(); !n.isEnd();)
                  switch (n.nextCommand(),
                  n.command) {
                    case "M":
                    case "m":
                      var i = n.getAsCurrentPoint();
                      for (n.addMarker(i),
                        r.addPoint(i.x, i.y),
                        null != e && e.moveTo(i.x, i.y),
                        n.start = n.current; !n.isCommandOrEnd();) {
                        var i = n.getAsCurrentPoint();
                        n.addMarker(i, n.start),
                          r.addPoint(i.x, i.y),
                          null != e && e.lineTo(i.x, i.y)
                      }
                      break;
                    case "L":
                    case "l":
                      for (; !n.isCommandOrEnd();) {
                        var a = n.current
                          , i = n.getAsCurrentPoint();
                        n.addMarker(i, a),
                          r.addPoint(i.x, i.y),
                          null != e && e.lineTo(i.x, i.y)
                      }
                      break;
                    case "H":
                    case "h":
                      for (; !n.isCommandOrEnd();) {
                        var o = new t.Point((n.isRelativeCommand() ? n.current.x : 0) + n.getScalar(), n.current.y);
                        n.addMarker(o, n.current),
                          n.current = o,
                          r.addPoint(n.current.x, n.current.y),
                          null != e && e.lineTo(n.current.x, n.current.y)
                      }
                      break;
                    case "V":
                    case "v":
                      for (; !n.isCommandOrEnd();) {
                        var o = new t.Point(n.current.x, (n.isRelativeCommand() ? n.current.y : 0) + n.getScalar());
                        n.addMarker(o, n.current),
                          n.current = o,
                          r.addPoint(n.current.x, n.current.y),
                          null != e && e.lineTo(n.current.x, n.current.y)
                      }
                      break;
                    case "C":
                    case "c":
                      for (; !n.isCommandOrEnd();) {
                        var u = n.current
                          , s = n.getPoint()
                          , l = n.getAsControlPoint()
                          , c = n.getAsCurrentPoint();
                        n.addMarker(c, l, s),
                          r.addBezierCurve(u.x, u.y, s.x, s.y, l.x, l.y, c.x, c.y),
                          null != e && e.bezierCurveTo(s.x, s.y, l.x, l.y, c.x, c.y)
                      }
                      break;
                    case "S":
                    case "s":
                      for (; !n.isCommandOrEnd();) {
                        var u = n.current
                          , s = n.getReflectedControlPoint()
                          , l = n.getAsControlPoint()
                          , c = n.getAsCurrentPoint();
                        n.addMarker(c, l, s),
                          r.addBezierCurve(u.x, u.y, s.x, s.y, l.x, l.y, c.x, c.y),
                          null != e && e.bezierCurveTo(s.x, s.y, l.x, l.y, c.x, c.y)
                      }
                      break;
                    case "Q":
                    case "q":
                      for (; !n.isCommandOrEnd();) {
                        var u = n.current
                          , l = n.getAsControlPoint()
                          , c = n.getAsCurrentPoint();
                        n.addMarker(c, l, l),
                          r.addQuadraticCurve(u.x, u.y, l.x, l.y, c.x, c.y),
                          null != e && e.quadraticCurveTo(l.x, l.y, c.x, c.y)
                      }
                      break;
                    case "T":
                    case "t":
                      for (; !n.isCommandOrEnd();) {
                        var u = n.current
                          , l = n.getReflectedControlPoint();
                        n.control = l;
                        var c = n.getAsCurrentPoint();
                        n.addMarker(c, l, l),
                          r.addQuadraticCurve(u.x, u.y, l.x, l.y, c.x, c.y),
                          null != e && e.quadraticCurveTo(l.x, l.y, c.x, c.y)
                      }
                      break;
                    case "A":
                    case "a":
                      for (; !n.isCommandOrEnd();) {
                        var u = n.current
                          , f = n.getScalar()
                          , d = n.getScalar()
                          , h = n.getScalar() * (Math.PI / 180)
                          , p = n.getScalar()
                          , v = n.getScalar()
                          , c = n.getAsCurrentPoint()
                          , y = new t.Point(Math.cos(h) * (u.x - c.x) / 2 + Math.sin(h) * (u.y - c.y) / 2, -Math.sin(h) * (u.x - c.x) / 2 + Math.cos(h) * (u.y - c.y) / 2)
                          , m = Math.pow(y.x, 2) / Math.pow(f, 2) + Math.pow(y.y, 2) / Math.pow(d, 2);
                        m > 1 && (f *= Math.sqrt(m),
                          d *= Math.sqrt(m));
                        var g = (p == v ? -1 : 1) * Math.sqrt((Math.pow(f, 2) * Math.pow(d, 2) - Math.pow(f, 2) * Math.pow(y.y, 2) - Math.pow(d, 2) * Math.pow(y.x, 2)) / (Math.pow(f, 2) * Math.pow(y.y, 2) + Math.pow(d, 2) * Math.pow(y.x, 2)));
                        isNaN(g) && (g = 0);
                        var b = new t.Point(g * f * y.y / d, g * -d * y.x / f)
                          , _ = new t.Point((u.x + c.x) / 2 + Math.cos(h) * b.x - Math.sin(h) * b.y, (u.y + c.y) / 2 + Math.sin(h) * b.x + Math.cos(h) * b.y)
                          , x = function (e) {
                            return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2))
                          }
                          , w = function (e, t) {
                            return (e[0] * t[0] + e[1] * t[1]) / (x(e) * x(t))
                          }
                          , P = function (e, t) {
                            return (e[0] * t[1] < e[1] * t[0] ? -1 : 1) * Math.acos(w(e, t))
                          }
                          , M = P([1, 0], [(y.x - b.x) / f, (y.y - b.y) / d])
                          , O = [(y.x - b.x) / f, (y.y - b.y) / d]
                          , E = [(-y.x - b.x) / f, (-y.y - b.y) / d]
                          , j = P(O, E);
                        w(O, E) <= -1 && (j = Math.PI),
                          w(O, E) >= 1 && (j = 0);
                        var S = 1 - v ? 1 : -1
                          , k = M + S * (j / 2)
                          , C = new t.Point(_.x + f * Math.cos(k), _.y + d * Math.sin(k));
                        if (n.addMarkerAngle(C, k - S * Math.PI / 2),
                          n.addMarkerAngle(c, k - S * Math.PI),
                          r.addPoint(c.x, c.y),
                          null != e) {
                          var w = f > d ? f : d
                            , T = f > d ? 1 : f / d
                            , N = f > d ? d / f : 1;
                          e.translate(_.x, _.y),
                            e.rotate(h),
                            e.scale(T, N),
                            e.arc(0, 0, w, M, M + j, 1 - v),
                            e.scale(1 / T, 1 / N),
                            e.rotate(-h),
                            e.translate(-_.x, -_.y)
                        }
                      }
                      break;
                    case "Z":
                    case "z":
                      null != e && e.closePath(),
                        n.current = n.start
                  }
                return r
              }
              ,
              this.getMarkers = function () {
                for (var e = this.PathParser.getMarkerPoints(), t = this.PathParser.getMarkerAngles(), n = [], r = 0; r < e.length; r++)
                  n.push([e[r], t[r]]);
                return n
              }
          }
          ,
          t.Element.path.prototype = new t.Element.PathElementBase,
          t.Element.pattern = function (e) {
            this.base = t.Element.ElementBase,
              this.base(e),
              this.createPattern = function (e, n) {
                var r = this.attribute("width").toPixels("x", !0)
                  , i = this.attribute("height").toPixels("y", !0)
                  , a = new t.Element.svg;
                a.attributes.viewBox = new t.Property("viewBox", this.attribute("viewBox").value),
                  a.attributes.width = new t.Property("width", r + "px"),
                  a.attributes.height = new t.Property("height", i + "px"),
                  a.attributes.transform = new t.Property("transform", this.attribute("patternTransform").value),
                  a.children = this.children;
                var o = document.createElement("canvas");
                o.width = r,
                  o.height = i;
                var u = o.getContext("2d");
                this.attribute("x").hasValue() && this.attribute("y").hasValue() && u.translate(this.attribute("x").toPixels("x", !0), this.attribute("y").toPixels("y", !0));
                for (var s = -1; s <= 1; s++)
                  for (var l = -1; l <= 1; l++)
                    u.save(),
                      a.attributes.x = new t.Property("x", s * o.width),
                      a.attributes.y = new t.Property("y", l * o.height),
                      a.render(u),
                      u.restore();
                return e.createPattern(o, "repeat")
              }
          }
          ,
          t.Element.pattern.prototype = new t.Element.ElementBase,
          t.Element.marker = function (e) {
            this.base = t.Element.ElementBase,
              this.base(e),
              this.baseRender = this.render,
              this.render = function (e, n, r) {
                e.translate(n.x, n.y),
                  "auto" == this.attribute("orient").valueOrDefault("auto") && e.rotate(r),
                  "strokeWidth" == this.attribute("markerUnits").valueOrDefault("strokeWidth") && e.scale(e.lineWidth, e.lineWidth),
                  e.save();
                var i = new t.Element.svg;
                i.attributes.viewBox = new t.Property("viewBox", this.attribute("viewBox").value),
                  i.attributes.refX = new t.Property("refX", this.attribute("refX").value),
                  i.attributes.refY = new t.Property("refY", this.attribute("refY").value),
                  i.attributes.width = new t.Property("width", this.attribute("markerWidth").value),
                  i.attributes.height = new t.Property("height", this.attribute("markerHeight").value),
                  i.attributes.fill = new t.Property("fill", this.attribute("fill").valueOrDefault("black")),
                  i.attributes.stroke = new t.Property("stroke", this.attribute("stroke").valueOrDefault("none")),
                  i.children = this.children,
                  i.render(e),
                  e.restore(),
                  "strokeWidth" == this.attribute("markerUnits").valueOrDefault("strokeWidth") && e.scale(1 / e.lineWidth, 1 / e.lineWidth),
                  "auto" == this.attribute("orient").valueOrDefault("auto") && e.rotate(-r),
                  e.translate(-n.x, -n.y)
              }
          }
          ,
          t.Element.marker.prototype = new t.Element.ElementBase,
          t.Element.defs = function (e) {
            this.base = t.Element.ElementBase,
              this.base(e),
              this.render = function (e) { }
          }
          ,
          t.Element.defs.prototype = new t.Element.ElementBase,
          t.Element.GradientBase = function (e) {
            this.base = t.Element.ElementBase,
              this.base(e),
              this.stops = [];
            for (var n = 0; n < this.children.length; n++) {
              var r = this.children[n];
              "stop" == r.type && this.stops.push(r)
            }
            this.getGradient = function () { }
              ,
              this.gradientUnits = function () {
                return this.attribute("gradientUnits").valueOrDefault("objectBoundingBox")
              }
              ,
              this.attributesToInherit = ["gradientUnits"],
              this.inheritStopContainer = function (e) {
                for (var t = 0; t < this.attributesToInherit.length; t++) {
                  var n = this.attributesToInherit[t];
                  !this.attribute(n).hasValue() && e.attribute(n).hasValue() && (this.attribute(n, !0).value = e.attribute(n).value)
                }
              }
              ,
              this.createGradient = function (e, n, r) {
                var i = this;
                this.getHrefAttribute().hasValue() && (i = this.getHrefAttribute().getDefinition(),
                  this.inheritStopContainer(i));
                var a = function (e) {
                  if (r.hasValue()) {
                    return new t.Property("color", e).addOpacity(r).value
                  }
                  return e
                }
                  , o = this.getGradient(e, n);
                if (null == o)
                  return a(i.stops[i.stops.length - 1].color);
                for (var u = 0; u < i.stops.length; u++)
                  o.addColorStop(i.stops[u].offset, a(i.stops[u].color));
                if (this.attribute("gradientTransform").hasValue()) {
                  var s = t.ViewPort.viewPorts[0]
                    , l = new t.Element.rect;
                  l.attributes.x = new t.Property("x", -t.MAX_VIRTUAL_PIXELS / 3),
                    l.attributes.y = new t.Property("y", -t.MAX_VIRTUAL_PIXELS / 3),
                    l.attributes.width = new t.Property("width", t.MAX_VIRTUAL_PIXELS),
                    l.attributes.height = new t.Property("height", t.MAX_VIRTUAL_PIXELS);
                  var c = new t.Element.g;
                  c.attributes.transform = new t.Property("transform", this.attribute("gradientTransform").value),
                    c.children = [l];
                  var f = new t.Element.svg;
                  f.attributes.x = new t.Property("x", 0),
                    f.attributes.y = new t.Property("y", 0),
                    f.attributes.width = new t.Property("width", s.width),
                    f.attributes.height = new t.Property("height", s.height),
                    f.children = [c];
                  var d = document.createElement("canvas");
                  d.width = s.width,
                    d.height = s.height;
                  var h = d.getContext("2d");
                  return h.fillStyle = o,
                    f.render(h),
                    h.createPattern(d, "no-repeat")
                }
                return o
              }
          }
          ,
          t.Element.GradientBase.prototype = new t.Element.ElementBase,
          t.Element.linearGradient = function (e) {
            this.base = t.Element.GradientBase,
              this.base(e),
              this.attributesToInherit.push("x1"),
              this.attributesToInherit.push("y1"),
              this.attributesToInherit.push("x2"),
              this.attributesToInherit.push("y2"),
              this.getGradient = function (e, t) {
                var n = "objectBoundingBox" == this.gradientUnits() ? t.getBoundingBox() : null;
                this.attribute("x1").hasValue() || this.attribute("y1").hasValue() || this.attribute("x2").hasValue() || this.attribute("y2").hasValue() || (this.attribute("x1", !0).value = 0,
                  this.attribute("y1", !0).value = 0,
                  this.attribute("x2", !0).value = 1,
                  this.attribute("y2", !0).value = 0);
                var r = "objectBoundingBox" == this.gradientUnits() ? n.x() + n.width() * this.attribute("x1").numValue() : this.attribute("x1").toPixels("x")
                  , i = "objectBoundingBox" == this.gradientUnits() ? n.y() + n.height() * this.attribute("y1").numValue() : this.attribute("y1").toPixels("y")
                  , a = "objectBoundingBox" == this.gradientUnits() ? n.x() + n.width() * this.attribute("x2").numValue() : this.attribute("x2").toPixels("x")
                  , o = "objectBoundingBox" == this.gradientUnits() ? n.y() + n.height() * this.attribute("y2").numValue() : this.attribute("y2").toPixels("y");
                return r == a && i == o ? null : e.createLinearGradient(r, i, a, o)
              }
          }
          ,
          t.Element.linearGradient.prototype = new t.Element.GradientBase,
          t.Element.radialGradient = function (e) {
            this.base = t.Element.GradientBase,
              this.base(e),
              this.attributesToInherit.push("cx"),
              this.attributesToInherit.push("cy"),
              this.attributesToInherit.push("r"),
              this.attributesToInherit.push("fx"),
              this.attributesToInherit.push("fy"),
              this.getGradient = function (e, t) {
                var n = t.getBoundingBox();
                this.attribute("cx").hasValue() || (this.attribute("cx", !0).value = "50%"),
                  this.attribute("cy").hasValue() || (this.attribute("cy", !0).value = "50%"),
                  this.attribute("r").hasValue() || (this.attribute("r", !0).value = "50%");
                var r = "objectBoundingBox" == this.gradientUnits() ? n.x() + n.width() * this.attribute("cx").numValue() : this.attribute("cx").toPixels("x")
                  , i = "objectBoundingBox" == this.gradientUnits() ? n.y() + n.height() * this.attribute("cy").numValue() : this.attribute("cy").toPixels("y")
                  , a = r
                  , o = i;
                this.attribute("fx").hasValue() && (a = "objectBoundingBox" == this.gradientUnits() ? n.x() + n.width() * this.attribute("fx").numValue() : this.attribute("fx").toPixels("x")),
                  this.attribute("fy").hasValue() && (o = "objectBoundingBox" == this.gradientUnits() ? n.y() + n.height() * this.attribute("fy").numValue() : this.attribute("fy").toPixels("y"));
                var u = "objectBoundingBox" == this.gradientUnits() ? (n.width() + n.height()) / 2 * this.attribute("r").numValue() : this.attribute("r").toPixels();
                return e.createRadialGradient(a, o, 0, r, i, u)
              }
          }
          ,
          t.Element.radialGradient.prototype = new t.Element.GradientBase,
          t.Element.stop = function (e) {
            this.base = t.Element.ElementBase,
              this.base(e),
              this.offset = this.attribute("offset").numValue(),
              this.offset < 0 && (this.offset = 0),
              this.offset > 1 && (this.offset = 1);
            var n = this.style("stop-color", !0);
            "" == n.value && (n.value = "#000"),
              this.style("stop-opacity").hasValue() && (n = n.addOpacity(this.style("stop-opacity"))),
              this.color = n.value
          }
          ,
          t.Element.stop.prototype = new t.Element.ElementBase,
          t.Element.AnimateBase = function (e) {
            this.base = t.Element.ElementBase,
              this.base(e),
              t.Animations.push(this),
              this.duration = 0,
              this.begin = this.attribute("begin").toMilliseconds(),
              this.maxDuration = this.begin + this.attribute("dur").toMilliseconds(),
              this.getProperty = function () {
                var e = this.attribute("attributeType").value
                  , t = this.attribute("attributeName").value;
                return "CSS" == e ? this.parent.style(t, !0) : this.parent.attribute(t, !0)
              }
              ,
              this.initialValue = null,
              this.initialUnits = "",
              this.removed = !1,
              this.calcValue = function () {
                return ""
              }
              ,
              this.update = function (e) {
                if (null == this.initialValue && (this.initialValue = this.getProperty().value,
                  this.initialUnits = this.getProperty().getUnits()),
                  this.duration > this.maxDuration) {
                  if ("indefinite" == this.attribute("repeatCount").value || "indefinite" == this.attribute("repeatDur").value)
                    this.duration = 0;
                  else if ("freeze" != this.attribute("fill").valueOrDefault("remove") || this.frozen) {
                    if ("remove" == this.attribute("fill").valueOrDefault("remove") && !this.removed)
                      return this.removed = !0,
                        this.getProperty().value = this.parent.animationFrozen ? this.parent.animationFrozenValue : this.initialValue,
                        !0
                  } else
                    this.frozen = !0,
                      this.parent.animationFrozen = !0,
                      this.parent.animationFrozenValue = this.getProperty().value;
                  return !1
                }
                this.duration = this.duration + e;
                var t = !1;
                if (this.begin < this.duration) {
                  var n = this.calcValue();
                  if (this.attribute("type").hasValue()) {
                    n = this.attribute("type").value + "(" + n + ")"
                  }
                  this.getProperty().value = n,
                    t = !0
                }
                return t
              }
              ,
              this.from = this.attribute("from"),
              this.to = this.attribute("to"),
              this.values = this.attribute("values"),
              this.values.hasValue() && (this.values.value = this.values.value.split(";")),
              this.progress = function () {
                var e = {
                  progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
                };
                if (this.values.hasValue()) {
                  var n = e.progress * (this.values.value.length - 1)
                    , r = Math.floor(n)
                    , i = Math.ceil(n);
                  e.from = new t.Property("from", parseFloat(this.values.value[r])),
                    e.to = new t.Property("to", parseFloat(this.values.value[i])),
                    e.progress = (n - r) / (i - r)
                } else
                  e.from = this.from,
                    e.to = this.to;
                return e
              }
          }
          ,
          t.Element.AnimateBase.prototype = new t.Element.ElementBase,
          t.Element.animate = function (e) {
            this.base = t.Element.AnimateBase,
              this.base(e),
              this.calcValue = function () {
                var e = this.progress();
                return e.from.numValue() + (e.to.numValue() - e.from.numValue()) * e.progress + this.initialUnits
              }
          }
          ,
          t.Element.animate.prototype = new t.Element.AnimateBase,
          t.Element.animateColor = function (e) {
            this.base = t.Element.AnimateBase,
              this.base(e),
              this.calcValue = function () {
                var e = this.progress()
                  , t = new s(e.from.value)
                  , n = new s(e.to.value);
                if (t.ok && n.ok) {
                  var r = t.r + (n.r - t.r) * e.progress
                    , i = t.g + (n.g - t.g) * e.progress
                    , a = t.b + (n.b - t.b) * e.progress;
                  return "rgb(" + parseInt(r, 10) + "," + parseInt(i, 10) + "," + parseInt(a, 10) + ")"
                }
                return this.attribute("from").value
              }
          }
          ,
          t.Element.animateColor.prototype = new t.Element.AnimateBase,
          t.Element.animateTransform = function (e) {
            this.base = t.Element.AnimateBase,
              this.base(e),
              this.calcValue = function () {
                for (var e = this.progress(), n = t.ToNumberArray(e.from.value), r = t.ToNumberArray(e.to.value), i = "", a = 0; a < n.length; a++)
                  i += n[a] + (r[a] - n[a]) * e.progress + " ";
                return i
              }
          }
          ,
          t.Element.animateTransform.prototype = new t.Element.animate,
          t.Element.font = function (e) {
            this.base = t.Element.ElementBase,
              this.base(e),
              this.horizAdvX = this.attribute("horiz-adv-x").numValue(),
              this.isRTL = !1,
              this.isArabic = !1,
              this.fontFace = null,
              this.missingGlyph = null,
              this.glyphs = [];
            for (var n = 0; n < this.children.length; n++) {
              var r = this.children[n];
              "font-face" == r.type ? (this.fontFace = r,
                r.style("font-family").hasValue() && (t.Definitions[r.style("font-family").value] = this)) : "missing-glyph" == r.type ? this.missingGlyph = r : "glyph" == r.type && ("" != r.arabicForm ? (this.isRTL = !0,
                  this.isArabic = !0,
                  void 0 === this.glyphs[r.unicode] && (this.glyphs[r.unicode] = []),
                  this.glyphs[r.unicode][r.arabicForm] = r) : this.glyphs[r.unicode] = r)
            }
          }
          ,
          t.Element.font.prototype = new t.Element.ElementBase,
          t.Element.fontface = function (e) {
            this.base = t.Element.ElementBase,
              this.base(e),
              this.ascent = this.attribute("ascent").value,
              this.descent = this.attribute("descent").value,
              this.unitsPerEm = this.attribute("units-per-em").numValue()
          }
          ,
          t.Element.fontface.prototype = new t.Element.ElementBase,
          t.Element.missingglyph = function (e) {
            this.base = t.Element.path,
              this.base(e),
              this.horizAdvX = 0
          }
          ,
          t.Element.missingglyph.prototype = new t.Element.path,
          t.Element.glyph = function (e) {
            this.base = t.Element.path,
              this.base(e),
              this.horizAdvX = this.attribute("horiz-adv-x").numValue(),
              this.unicode = this.attribute("unicode").value,
              this.arabicForm = this.attribute("arabic-form").value
          }
          ,
          t.Element.glyph.prototype = new t.Element.path,
          t.Element.text = function (e) {
            this.captureTextNodes = !0,
              this.base = t.Element.RenderedElementBase,
              this.base(e),
              this.baseSetContext = this.setContext,
              this.setContext = function (e) {
                this.baseSetContext(e);
                var t = this.style("dominant-baseline").toTextBaseline();
                null == t && (t = this.style("alignment-baseline").toTextBaseline()),
                  null != t && (e.textBaseline = t)
              }
              ,
              this.getBoundingBox = function () {
                var e = this.attribute("x").toPixels("x")
                  , n = this.attribute("y").toPixels("y")
                  , r = this.parent.style("font-size").numValueOrDefault(t.Font.Parse(t.ctx.font).fontSize);
                return new t.BoundingBox(e, n - r, e + Math.floor(2 * r / 3) * this.children[0].getText().length, n)
              }
              ,
              this.renderChildren = function (e) {
                this.x = this.attribute("x").toPixels("x"),
                  this.y = this.attribute("y").toPixels("y"),
                  this.attribute("dx").hasValue() && (this.x += this.attribute("dx").toPixels("x")),
                  this.attribute("dy").hasValue() && (this.y += this.attribute("dy").toPixels("y")),
                  this.x += this.getAnchorDelta(e, this, 0);
                for (var t = 0; t < this.children.length; t++)
                  this.renderChild(e, this, this, t)
              }
              ,
              this.getAnchorDelta = function (e, t, n) {
                var r = this.style("text-anchor").valueOrDefault("start");
                if ("start" != r) {
                  for (var i = 0, a = n; a < t.children.length; a++) {
                    var o = t.children[a];
                    if (a > n && o.attribute("x").hasValue())
                      break;
                    i += o.measureTextRecursive(e)
                  }
                  return -1 * ("end" == r ? i : i / 2)
                }
                return 0
              }
              ,
              this.renderChild = function (e, t, n, r) {
                var i = n.children[r];
                i.attribute("x").hasValue() ? (i.x = i.attribute("x").toPixels("x") + t.getAnchorDelta(e, n, r),
                  i.attribute("dx").hasValue() && (i.x += i.attribute("dx").toPixels("x"))) : (i.attribute("dx").hasValue() && (t.x += i.attribute("dx").toPixels("x")),
                    i.x = t.x),
                  t.x = i.x + i.measureText(e),
                  i.attribute("y").hasValue() ? (i.y = i.attribute("y").toPixels("y"),
                    i.attribute("dy").hasValue() && (i.y += i.attribute("dy").toPixels("y"))) : (i.attribute("dy").hasValue() && (t.y += i.attribute("dy").toPixels("y")),
                      i.y = t.y),
                  t.y = i.y,
                  i.render(e);
                for (var r = 0; r < i.children.length; r++)
                  t.renderChild(e, t, i, r)
              }
          }
          ,
          t.Element.text.prototype = new t.Element.RenderedElementBase,
          t.Element.TextElementBase = function (e) {
            this.base = t.Element.RenderedElementBase,
              this.base(e),
              this.getGlyph = function (e, t, n) {
                var r = t[n]
                  , i = null;
                if (e.isArabic) {
                  var a = "isolated";
                  (0 == n || " " == t[n - 1]) && n < t.length - 2 && " " != t[n + 1] && (a = "terminal"),
                    n > 0 && " " != t[n - 1] && n < t.length - 2 && " " != t[n + 1] && (a = "medial"),
                    n > 0 && " " != t[n - 1] && (n == t.length - 1 || " " == t[n + 1]) && (a = "initial"),
                    void 0 !== e.glyphs[r] && null == (i = e.glyphs[r][a]) && "glyph" == e.glyphs[r].type && (i = e.glyphs[r])
                } else
                  i = e.glyphs[r];
                return null == i && (i = e.missingGlyph),
                  i
              }
              ,
              this.renderChildren = function (e) {
                var n = this.parent.style("font-family").getDefinition();
                if (null == n)
                  "" != e.fillStyle && e.fillText(t.compressSpaces(this.getText()), this.x, this.y),
                    "" != e.strokeStyle && e.strokeText(t.compressSpaces(this.getText()), this.x, this.y);
                else {
                  var r = this.parent.style("font-size").numValueOrDefault(t.Font.Parse(t.ctx.font).fontSize)
                    , i = this.parent.style("font-style").valueOrDefault(t.Font.Parse(t.ctx.font).fontStyle)
                    , a = this.getText();
                  n.isRTL && (a = a.split("").reverse().join(""));
                  for (var o = t.ToNumberArray(this.parent.attribute("dx").value), u = 0; u < a.length; u++) {
                    var s = this.getGlyph(n, a, u)
                      , l = r / n.fontFace.unitsPerEm;
                    e.translate(this.x, this.y),
                      e.scale(l, -l);
                    var c = e.lineWidth;
                    e.lineWidth = e.lineWidth * n.fontFace.unitsPerEm / r,
                      "italic" == i && e.transform(1, 0, .4, 1, 0, 0),
                      s.render(e),
                      "italic" == i && e.transform(1, 0, -.4, 1, 0, 0),
                      e.lineWidth = c,
                      e.scale(1 / l, -1 / l),
                      e.translate(-this.x, -this.y),
                      this.x += r * (s.horizAdvX || n.horizAdvX) / n.fontFace.unitsPerEm,
                      void 0 === o[u] || isNaN(o[u]) || (this.x += o[u])
                  }
                }
              }
              ,
              this.getText = function () { }
              ,
              this.measureTextRecursive = function (e) {
                for (var t = this.measureText(e), n = 0; n < this.children.length; n++)
                  t += this.children[n].measureTextRecursive(e);
                return t
              }
              ,
              this.measureText = function (e) {
                var n = this.parent.style("font-family").getDefinition();
                if (null != n) {
                  var r = this.parent.style("font-size").numValueOrDefault(t.Font.Parse(t.ctx.font).fontSize)
                    , i = 0
                    , a = this.getText();
                  n.isRTL && (a = a.split("").reverse().join(""));
                  for (var o = t.ToNumberArray(this.parent.attribute("dx").value), u = 0; u < a.length; u++) {
                    i += (this.getGlyph(n, a, u).horizAdvX || n.horizAdvX) * r / n.fontFace.unitsPerEm,
                      void 0 === o[u] || isNaN(o[u]) || (i += o[u])
                  }
                  return i
                }
                var s = t.compressSpaces(this.getText());
                if (!e.measureText)
                  return 10 * s.length;
                e.save(),
                  this.setContext(e);
                var l = e.measureText(s).width;
                return e.restore(),
                  l
              }
          }
          ,
          t.Element.TextElementBase.prototype = new t.Element.RenderedElementBase,
          t.Element.tspan = function (e) {
            this.captureTextNodes = !0,
              this.base = t.Element.TextElementBase,
              this.base(e),
              this.text = t.compressSpaces(e.value || e.text || e.textContent || ""),
              this.getText = function () {
                return this.children.length > 0 ? "" : this.text
              }
          }
          ,
          t.Element.tspan.prototype = new t.Element.TextElementBase,
          t.Element.tref = function (e) {
            this.base = t.Element.TextElementBase,
              this.base(e),
              this.getText = function () {
                var e = this.getHrefAttribute().getDefinition();
                if (null != e)
                  return e.children[0].getText()
              }
          }
          ,
          t.Element.tref.prototype = new t.Element.TextElementBase,
          t.Element.a = function (e) {
            this.base = t.Element.TextElementBase,
              this.base(e),
              this.hasText = e.childNodes.length > 0;
            for (var n = 0; n < e.childNodes.length; n++)
              3 != e.childNodes[n].nodeType && (this.hasText = !1);
            this.text = this.hasText ? e.childNodes[0].value : "",
              this.getText = function () {
                return this.text
              }
              ,
              this.baseRenderChildren = this.renderChildren,
              this.renderChildren = function (e) {
                if (this.hasText) {
                  this.baseRenderChildren(e);
                  var n = new t.Property("fontSize", t.Font.Parse(t.ctx.font).fontSize);
                  t.Mouse.checkBoundingBox(this, new t.BoundingBox(this.x, this.y - n.toPixels("y"), this.x + this.measureText(e), this.y))
                } else if (this.children.length > 0) {
                  var r = new t.Element.g;
                  r.children = this.children,
                    r.parent = this,
                    r.render(e)
                }
              }
              ,
              this.onclick = function () {
                window.open(this.getHrefAttribute().value)
              }
              ,
              this.onmousemove = function () {
                t.ctx.canvas.style.cursor = "pointer"
              }
          }
          ,
          t.Element.a.prototype = new t.Element.TextElementBase,
          t.Element.image = function (e) {
            this.base = t.Element.RenderedElementBase,
              this.base(e);
            var n = this.getHrefAttribute().value;
            if ("" != n) {
              var r = n.match(/\.svg$/);
              if (t.Images.push(this),
                this.loaded = !1,
                r)
                this.img = t.ajax(n),
                  this.loaded = !0;
              else {
                this.img = document.createElement("img"),
                  1 == t.opts.useCORS && (this.img.crossOrigin = "Anonymous");
                var i = this;
                this.img.onload = function () {
                  i.loaded = !0
                }
                  ,
                  this.img.onerror = function () {
                    t.log('ERROR: image "' + n + '" not found'),
                      i.loaded = !0
                  }
                  ,
                  this.img.src = n
              }
              this.renderChildren = function (e) {
                var n = this.attribute("x").toPixels("x")
                  , i = this.attribute("y").toPixels("y")
                  , a = this.attribute("width").toPixels("x")
                  , o = this.attribute("height").toPixels("y");
                0 != a && 0 != o && (e.save(),
                  r ? e.drawSvg(this.img, n, i, a, o) : (e.translate(n, i),
                    t.AspectRatio(e, this.attribute("preserveAspectRatio").value, a, this.img.width, o, this.img.height, 0, 0),
                    e.drawImage(this.img, 0, 0)),
                  e.restore())
              }
                ,
                this.getBoundingBox = function () {
                  var e = this.attribute("x").toPixels("x")
                    , n = this.attribute("y").toPixels("y")
                    , r = this.attribute("width").toPixels("x")
                    , i = this.attribute("height").toPixels("y");
                  return new t.BoundingBox(e, n, e + r, n + i)
                }
            }
          }
          ,
          t.Element.image.prototype = new t.Element.RenderedElementBase,
          t.Element.g = function (e) {
            this.base = t.Element.RenderedElementBase,
              this.base(e),
              this.getBoundingBox = function () {
                for (var e = new t.BoundingBox, n = 0; n < this.children.length; n++)
                  e.addBoundingBox(this.children[n].getBoundingBox());
                return e
              }
          }
          ,
          t.Element.g.prototype = new t.Element.RenderedElementBase,
          t.Element.symbol = function (e) {
            this.base = t.Element.RenderedElementBase,
              this.base(e),
              this.render = function (e) { }
          }
          ,
          t.Element.symbol.prototype = new t.Element.RenderedElementBase,
          t.Element.style = function (e) {
            this.base = t.Element.ElementBase,
              this.base(e);
            for (var n = "", r = 0; r < e.childNodes.length; r++)
              n += e.childNodes[r].data;
            n = n.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, ""),
              n = t.compressSpaces(n);
            for (var i = n.split("}"), r = 0; r < i.length; r++)
              if ("" != t.trim(i[r]))
                for (var a = i[r].split("{"), u = a[0].split(","), s = a[1].split(";"), l = 0; l < u.length; l++) {
                  var c = t.trim(u[l]);
                  if ("" != c) {
                    for (var f = t.Styles[c] || {}, d = 0; d < s.length; d++) {
                      var h = s[d].indexOf(":")
                        , p = s[d].substr(0, h)
                        , v = s[d].substr(h + 1, s[d].length - h);
                      null != p && null != v && (f[t.trim(p)] = new t.Property(t.trim(p), t.trim(v)))
                    }
                    if (t.Styles[c] = f,
                      t.StylesSpecificity[c] = o(c),
                      "@font-face" == c)
                      for (var y = f["font-family"].value.replace(/"/g, ""), m = f.src.value.split(","), g = 0; g < m.length; g++)
                        if (m[g].indexOf('format("svg")') > 0)
                          for (var b = m[g].indexOf("url"), _ = m[g].indexOf(")", b), x = m[g].substr(b + 5, _ - b - 6), w = t.parseXml(t.ajax(x)), P = w.getElementsByTagName("font"), M = 0; M < P.length; M++) {
                            var O = t.CreateElement(P[M]);
                            t.Definitions[y] = O
                          }
                  }
                }
          }
          ,
          t.Element.style.prototype = new t.Element.ElementBase,
          t.Element.use = function (e) {
            this.base = t.Element.RenderedElementBase,
              this.base(e),
              this.baseSetContext = this.setContext,
              this.setContext = function (e) {
                this.baseSetContext(e),
                  this.attribute("x").hasValue() && e.translate(this.attribute("x").toPixels("x"), 0),
                  this.attribute("y").hasValue() && e.translate(0, this.attribute("y").toPixels("y"))
              }
              ;
            var n = this.getHrefAttribute().getDefinition();
            this.path = function (e) {
              null != n && n.path(e)
            }
              ,
              this.getBoundingBox = function () {
                if (null != n)
                  return n.getBoundingBox()
              }
              ,
              this.renderChildren = function (e) {
                if (null != n) {
                  var r = n;
                  "symbol" == n.type && (r = new t.Element.svg,
                    r.type = "svg",
                    r.attributes.viewBox = new t.Property("viewBox", n.attribute("viewBox").value),
                    r.attributes.preserveAspectRatio = new t.Property("preserveAspectRatio", n.attribute("preserveAspectRatio").value),
                    r.attributes.overflow = new t.Property("overflow", n.attribute("overflow").value),
                    r.children = n.children),
                    "svg" == r.type && (this.attribute("width").hasValue() && (r.attributes.width = new t.Property("width", this.attribute("width").value)),
                      this.attribute("height").hasValue() && (r.attributes.height = new t.Property("height", this.attribute("height").value)));
                  var i = r.parent;
                  r.parent = null,
                    r.render(e),
                    r.parent = i
                }
              }
          }
          ,
          t.Element.use.prototype = new t.Element.RenderedElementBase,
          t.Element.mask = function (e) {
            this.base = t.Element.ElementBase,
              this.base(e),
              this.apply = function (e, n) {
                var r = this.attribute("x").toPixels("x")
                  , i = this.attribute("y").toPixels("y")
                  , a = this.attribute("width").toPixels("x")
                  , o = this.attribute("height").toPixels("y");
                if (0 == a && 0 == o) {
                  for (var u = new t.BoundingBox, s = 0; s < this.children.length; s++)
                    u.addBoundingBox(this.children[s].getBoundingBox());
                  var r = Math.floor(u.x1)
                    , i = Math.floor(u.y1)
                    , a = Math.floor(u.width())
                    , o = Math.floor(u.height())
                }
                var l = n.attribute("mask").value;
                n.attribute("mask").value = "";
                var c = document.createElement("canvas");
                c.width = r + a,
                  c.height = i + o;
                var f = c.getContext("2d");
                this.renderChildren(f);
                var d = document.createElement("canvas");
                d.width = r + a,
                  d.height = i + o;
                var h = d.getContext("2d");
                n.render(h),
                  h.globalCompositeOperation = "destination-in",
                  h.fillStyle = f.createPattern(c, "no-repeat"),
                  h.fillRect(0, 0, r + a, i + o),
                  e.fillStyle = h.createPattern(d, "no-repeat"),
                  e.fillRect(0, 0, r + a, i + o),
                  n.attribute("mask").value = l
              }
              ,
              this.render = function (e) { }
          }
          ,
          t.Element.mask.prototype = new t.Element.ElementBase,
          t.Element.clipPath = function (e) {
            this.base = t.Element.ElementBase,
              this.base(e),
              this.apply = function (e) {
                var n = CanvasRenderingContext2D.prototype.beginPath;
                CanvasRenderingContext2D.prototype.beginPath = function () { }
                  ;
                var r = CanvasRenderingContext2D.prototype.closePath;
                CanvasRenderingContext2D.prototype.closePath = function () { }
                  ,
                  n.call(e);
                for (var i = 0; i < this.children.length; i++) {
                  var a = this.children[i];
                  if (void 0 !== a.path) {
                    var o = null;
                    a.style("transform", !1, !0).hasValue() && (o = new t.Transform(a.style("transform", !1, !0).value),
                      o.apply(e)),
                      a.path(e),
                      CanvasRenderingContext2D.prototype.closePath = r,
                      o && o.unapply(e)
                  }
                }
                r.call(e),
                  e.clip(),
                  CanvasRenderingContext2D.prototype.beginPath = n,
                  CanvasRenderingContext2D.prototype.closePath = r
              }
              ,
              this.render = function (e) { }
          }
          ,
          t.Element.clipPath.prototype = new t.Element.ElementBase,
          t.Element.filter = function (e) {
            this.base = t.Element.ElementBase,
              this.base(e),
              this.apply = function (e, t) {
                var n = t.getBoundingBox()
                  , r = Math.floor(n.x1)
                  , i = Math.floor(n.y1)
                  , a = Math.floor(n.width())
                  , o = Math.floor(n.height())
                  , u = t.style("filter").value;
                t.style("filter").value = "";
                for (var s = 0, l = 0, c = 0; c < this.children.length; c++) {
                  var f = this.children[c].extraFilterDistance || 0;
                  s = Math.max(s, f),
                    l = Math.max(l, f)
                }
                var d = document.createElement("canvas");
                d.width = a + 2 * s,
                  d.height = o + 2 * l;
                var h = d.getContext("2d");
                h.translate(-r + s, -i + l),
                  t.render(h);
                for (var c = 0; c < this.children.length; c++)
                  "function" == typeof this.children[c].apply && this.children[c].apply(h, 0, 0, a + 2 * s, o + 2 * l);
                e.drawImage(d, 0, 0, a + 2 * s, o + 2 * l, r - s, i - l, a + 2 * s, o + 2 * l),
                  t.style("filter", !0).value = u
              }
              ,
              this.render = function (e) { }
          }
          ,
          t.Element.filter.prototype = new t.Element.ElementBase,
          t.Element.feMorphology = function (e) {
            this.base = t.Element.ElementBase,
              this.base(e),
              this.apply = function (e, t, n, r, i) { }
          }
          ,
          t.Element.feMorphology.prototype = new t.Element.ElementBase,
          t.Element.feComposite = function (e) {
            this.base = t.Element.ElementBase,
              this.base(e),
              this.apply = function (e, t, n, r, i) { }
          }
          ,
          t.Element.feComposite.prototype = new t.Element.ElementBase,
          t.Element.feColorMatrix = function (e) {
            function n(e, t, n, r, i, a) {
              return e[n * r * 4 + 4 * t + a]
            }
            function r(e, t, n, r, i, a, o) {
              e[n * r * 4 + 4 * t + a] = o
            }
            function i(e, t) {
              var n = a[e];
              return n * (n < 0 ? t - 255 : t)
            }
            this.base = t.Element.ElementBase,
              this.base(e);
            var a = t.ToNumberArray(this.attribute("values").value);
            switch (this.attribute("type").valueOrDefault("matrix")) {
              case "saturate":
                var o = a[0];
                a = [.213 + .787 * o, .715 - .715 * o, .072 - .072 * o, 0, 0, .213 - .213 * o, .715 + .285 * o, .072 - .072 * o, 0, 0, .213 - .213 * o, .715 - .715 * o, .072 + .928 * o, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
                break;
              case "hueRotate":
                var u = a[0] * Math.PI / 180
                  , s = function (e, t, n) {
                    return e + Math.cos(u) * t + Math.sin(u) * n
                  };
                a = [s(.213, .787, -.213), s(.715, -.715, -.715), s(.072, -.072, .928), 0, 0, s(.213, -.213, .143), s(.715, .285, .14), s(.072, -.072, -.283), 0, 0, s(.213, -.213, -.787), s(.715, -.715, .715), s(.072, .928, .072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
                break;
              case "luminanceToAlpha":
                a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2125, .7154, .0721, 0, 0, 0, 0, 0, 0, 1]
            }
            this.apply = function (e, t, a, o, u) {
              for (var s = e.getImageData(0, 0, o, u), a = 0; a < u; a++)
                for (var t = 0; t < o; t++) {
                  var l = n(s.data, t, a, o, u, 0)
                    , c = n(s.data, t, a, o, u, 1)
                    , f = n(s.data, t, a, o, u, 2)
                    , d = n(s.data, t, a, o, u, 3);
                  r(s.data, t, a, o, u, 0, i(0, l) + i(1, c) + i(2, f) + i(3, d) + i(4, 1)),
                    r(s.data, t, a, o, u, 1, i(5, l) + i(6, c) + i(7, f) + i(8, d) + i(9, 1)),
                    r(s.data, t, a, o, u, 2, i(10, l) + i(11, c) + i(12, f) + i(13, d) + i(14, 1)),
                    r(s.data, t, a, o, u, 3, i(15, l) + i(16, c) + i(17, f) + i(18, d) + i(19, 1))
                }
              e.clearRect(0, 0, o, u),
                e.putImageData(s, 0, 0)
            }
          }
          ,
          t.Element.feColorMatrix.prototype = new t.Element.ElementBase,
          t.Element.feGaussianBlur = function (e) {
            this.base = t.Element.ElementBase,
              this.base(e),
              this.blurRadius = Math.floor(this.attribute("stdDeviation").numValue()),
              this.extraFilterDistance = this.blurRadius,
              this.apply = function (e, n, r, i, a) {
                if (void 0 === l.canvasRGBA)
                  return void t.log("ERROR: StackBlur.js must be included for blur to work");
                e.canvas.id = t.UniqueId(),
                  e.canvas.style.display = "none",
                  document.body.appendChild(e.canvas),
                  l.canvasRGBA(e.canvas.id, n, r, i, a, this.blurRadius),
                  document.body.removeChild(e.canvas)
              }
          }
          ,
          t.Element.feGaussianBlur.prototype = new t.Element.ElementBase,
          t.Element.title = function (e) { }
          ,
          t.Element.title.prototype = new t.Element.ElementBase,
          t.Element.desc = function (e) { }
          ,
          t.Element.desc.prototype = new t.Element.ElementBase,
          t.Element.MISSING = function (e) {
            t.log("ERROR: Element '" + e.nodeName + "' not yet implemented.")
          }
          ,
          t.Element.MISSING.prototype = new t.Element.ElementBase,
          t.CreateElement = function (e) {
            var n = e.nodeName.replace(/^[^:]+:/, "");
            n = n.replace(/\-/g, "");
            var r = null;
            return r = void 0 !== t.Element[n] ? new t.Element[n](e) : new t.Element.MISSING(e),
              r.type = e.nodeName,
              r
          }
          ,
          t.load = function (e, n) {
            t.loadXml(e, t.ajax(n))
          }
          ,
          t.loadXml = function (e, n) {
            t.loadXmlDoc(e, t.parseXml(n))
          }
          ,
          t.loadXmlDoc = function (e, n) {
            t.init(e);
            var r = function (t) {
              for (var n = e.canvas; n;)
                t.x -= n.offsetLeft,
                  t.y -= n.offsetTop,
                  n = n.offsetParent;
              return window.scrollX && (t.x += window.scrollX),
                window.scrollY && (t.y += window.scrollY),
                t
            };
            1 != t.opts.ignoreMouse && (e.canvas.onclick = function (e) {
              var n = r(new t.Point(null != e ? e.clientX : event.clientX, null != e ? e.clientY : event.clientY));
              t.Mouse.onclick(n.x, n.y)
            }
              ,
              e.canvas.onmousemove = function (e) {
                var n = r(new t.Point(null != e ? e.clientX : event.clientX, null != e ? e.clientY : event.clientY));
                t.Mouse.onmousemove(n.x, n.y)
              }
            );
            var i = t.CreateElement(n.documentElement);
            i.root = !0,
              i.addStylesFromStyleDefinition();
            var a = !0
              , o = function () {
                t.ViewPort.Clear(),
                  e.canvas.parentNode && t.ViewPort.SetCurrent(e.canvas.parentNode.clientWidth, e.canvas.parentNode.clientHeight),
                  1 != t.opts.ignoreDimensions && (i.style("width").hasValue() && (e.canvas.width = i.style("width").toPixels("x"),
                    e.canvas.style.width = e.canvas.width + "px"),
                    i.style("height").hasValue() && (e.canvas.height = i.style("height").toPixels("y"),
                      e.canvas.style.height = e.canvas.height + "px"));
                var r = e.canvas.clientWidth || e.canvas.width
                  , o = e.canvas.clientHeight || e.canvas.height;
                if (1 == t.opts.ignoreDimensions && i.style("width").hasValue() && i.style("height").hasValue() && (r = i.style("width").toPixels("x"),
                  o = i.style("height").toPixels("y")),
                  t.ViewPort.SetCurrent(r, o),
                  null != t.opts.offsetX && (i.attribute("x", !0).value = t.opts.offsetX),
                  null != t.opts.offsetY && (i.attribute("y", !0).value = t.opts.offsetY),
                  null != t.opts.scaleWidth || null != t.opts.scaleHeight) {
                  var u = null
                    , s = null
                    , l = t.ToNumberArray(i.attribute("viewBox").value);
                  null != t.opts.scaleWidth && (i.attribute("width").hasValue() ? u = i.attribute("width").toPixels("x") / t.opts.scaleWidth : isNaN(l[2]) || (u = l[2] / t.opts.scaleWidth)),
                    null != t.opts.scaleHeight && (i.attribute("height").hasValue() ? s = i.attribute("height").toPixels("y") / t.opts.scaleHeight : isNaN(l[3]) || (s = l[3] / t.opts.scaleHeight)),
                    null == u && (u = s),
                    null == s && (s = u),
                    i.attribute("width", !0).value = t.opts.scaleWidth,
                    i.attribute("height", !0).value = t.opts.scaleHeight,
                    i.style("transform", !0, !0).value += " scale(" + 1 / u + "," + 1 / s + ")"
                }
                1 != t.opts.ignoreClear && e.clearRect(0, 0, r, o),
                  i.render(e),
                  a && (a = !1,
                    "function" == typeof t.opts.renderCallback && t.opts.renderCallback(n))
              }
              , u = !0;
            t.ImagesLoaded() && (u = !1,
              o()),
              t.intervalID = setInterval(function () {
                var e = !1;
                if (u && t.ImagesLoaded() && (u = !1,
                  e = !0),
                  1 != t.opts.ignoreMouse && (e |= t.Mouse.hasEvents()),
                  1 != t.opts.ignoreAnimation)
                  for (var n = 0; n < t.Animations.length; n++)
                    e |= t.Animations[n].update(1e3 / t.FRAMERATE);
                "function" == typeof t.opts.forceRedraw && 1 == t.opts.forceRedraw() && (e = !0),
                  e && (o(),
                    t.Mouse.runEvents())
              }, 1e3 / t.FRAMERATE)
          }
          ,
          t.stop = function () {
            t.intervalID && clearInterval(t.intervalID)
          }
          ,
          t.Mouse = new function () {
            this.events = [],
              this.hasEvents = function () {
                return 0 != this.events.length
              }
              ,
              this.onclick = function (e, t) {
                this.events.push({
                  type: "onclick",
                  x: e,
                  y: t,
                  run: function (e) {
                    e.onclick && e.onclick()
                  }
                })
              }
              ,
              this.onmousemove = function (e, t) {
                this.events.push({
                  type: "onmousemove",
                  x: e,
                  y: t,
                  run: function (e) {
                    e.onmousemove && e.onmousemove()
                  }
                })
              }
              ,
              this.eventElements = [],
              this.checkPath = function (e, t) {
                for (var n = 0; n < this.events.length; n++) {
                  var r = this.events[n];
                  t.isPointInPath && t.isPointInPath(r.x, r.y) && (this.eventElements[n] = e)
                }
              }
              ,
              this.checkBoundingBox = function (e, t) {
                for (var n = 0; n < this.events.length; n++) {
                  var r = this.events[n];
                  t.isPointInBox(r.x, r.y) && (this.eventElements[n] = e)
                }
              }
              ,
              this.runEvents = function () {
                t.ctx.canvas.style.cursor = "";
                for (var e = 0; e < this.events.length; e++)
                  for (var n = this.events[e], r = this.eventElements[e]; r;)
                    n.run(r),
                      r = r.parent;
                this.events = [],
                  this.eventElements = []
              }
          }
          ,
          t
      }
      var s = n(1767)
        , l = n(1768);
      n(1769);
      e.exports = i
    }
    ).call(t, n(4), n(4))
  }
  , function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      this.ok = !1,
        this.alpha = 1,
        "#" == e.charAt(0) && (e = e.substr(1, 6)),
        e = e.replace(/ /g, ""),
        e = e.toLowerCase();
      var t = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "00ffff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000000",
        blanchedalmond: "ffebcd",
        blue: "0000ff",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "00ffff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dodgerblue: "1e90ff",
        feldspar: "d19275",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "ff00ff",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgrey: "d3d3d3",
        lightgreen: "90ee90",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslateblue: "8470ff",
        lightslategray: "778899",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "00ff00",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "ff00ff",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370d8",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "d87093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        red: "ff0000",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        violetred: "d02090",
        wheat: "f5deb3",
        white: "ffffff",
        whitesmoke: "f5f5f5",
        yellow: "ffff00",
        yellowgreen: "9acd32"
      };
      e = t[e] || e;
      for (var n = [{
        re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
        example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
        process: function (e) {
          return [parseInt(e[1]), parseInt(e[2]), parseInt(e[3]), parseFloat(e[4])]
        }
      }, {
        re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
        example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
        process: function (e) {
          return [parseInt(e[1]), parseInt(e[2]), parseInt(e[3])]
        }
      }, {
        re: /^(\w{2})(\w{2})(\w{2})$/,
        example: ["#00ff00", "336699"],
        process: function (e) {
          return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
        }
      }, {
        re: /^(\w{1})(\w{1})(\w{1})$/,
        example: ["#fb0", "f0f"],
        process: function (e) {
          return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
        }
      }], r = 0; r < n.length; r++) {
        var i = n[r].re
          , a = n[r].process
          , o = i.exec(e);
        if (o) {
          var u = a(o);
          this.r = u[0],
            this.g = u[1],
            this.b = u[2],
            u.length > 3 && (this.alpha = u[3]),
            this.ok = !0
        }
      }
      this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r,
        this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g,
        this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b,
        this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha,
        this.toRGB = function () {
          return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
        }
        ,
        this.toRGBA = function () {
          return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")"
        }
        ,
        this.toHex = function () {
          var e = this.r.toString(16)
            , t = this.g.toString(16)
            , n = this.b.toString(16);
          return 1 == e.length && (e = "0" + e),
            1 == t.length && (t = "0" + t),
            1 == n.length && (n = "0" + n),
            "#" + e + t + n
        }
        ,
        this.getHelpXML = function () {
          for (var e = new Array, r = 0; r < n.length; r++)
            for (var i = n[r].example, a = 0; a < i.length; a++)
              e[e.length] = i[a];
          for (var o in t)
            e[e.length] = o;
          var u = document.createElement("ul");
          u.setAttribute("id", "rgbcolor-examples");
          for (var r = 0; r < e.length; r++)
            try {
              var s = document.createElement("li")
                , l = new RGBColor(e[r])
                , c = document.createElement("div");
              c.style.cssText = "margin: 3px; border: 1px solid black; background:" + l.toHex() + "; color:" + l.toHex(),
                c.appendChild(document.createTextNode("test"));
              var f = document.createTextNode(" " + e[r] + " -> " + l.toRGB() + " -> " + l.toHex());
              s.appendChild(c),
                s.appendChild(f),
                u.appendChild(s)
            } catch (e) { }
          return u
        }
    }
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n, r) {
      if (!(isNaN(r) || r < 1)) {
        r |= 0;
        var u, s, l, c, f, d, h, p, v, y, m, g, b, _, x, w, P, M, O, E, j, S, k, C, T = r + r + 1, N = t - 1, D = n - 1, A = r + 1, L = A * (A + 1) / 2, I = new i, R = I;
        for (l = 1; l < T; l++)
          if (R = R.next = new i,
            l == A)
            var B = R;
        R.next = I;
        var V = null
          , z = null;
        h = d = 0;
        var F = a[r]
          , q = o[r];
        for (s = 0; s < n; s++) {
          for (w = P = M = O = p = v = y = m = 0,
            g = A * (E = e[d]),
            b = A * (j = e[d + 1]),
            _ = A * (S = e[d + 2]),
            x = A * (k = e[d + 3]),
            p += L * E,
            v += L * j,
            y += L * S,
            m += L * k,
            R = I,
            l = 0; l < A; l++)
            R.r = E,
              R.g = j,
              R.b = S,
              R.a = k,
              R = R.next;
          for (l = 1; l < A; l++)
            c = d + ((N < l ? N : l) << 2),
              p += (R.r = E = e[c]) * (C = A - l),
              v += (R.g = j = e[c + 1]) * C,
              y += (R.b = S = e[c + 2]) * C,
              m += (R.a = k = e[c + 3]) * C,
              w += E,
              P += j,
              M += S,
              O += k,
              R = R.next;
          for (V = I,
            z = B,
            u = 0; u < t; u++)
            e[d + 3] = k = m * F >> q,
              0 != k ? (k = 255 / k,
                e[d] = (p * F >> q) * k,
                e[d + 1] = (v * F >> q) * k,
                e[d + 2] = (y * F >> q) * k) : e[d] = e[d + 1] = e[d + 2] = 0,
              p -= g,
              v -= b,
              y -= _,
              m -= x,
              g -= V.r,
              b -= V.g,
              _ -= V.b,
              x -= V.a,
              c = h + ((c = u + r + 1) < N ? c : N) << 2,
              w += V.r = e[c],
              P += V.g = e[c + 1],
              M += V.b = e[c + 2],
              O += V.a = e[c + 3],
              p += w,
              v += P,
              y += M,
              m += O,
              V = V.next,
              g += E = z.r,
              b += j = z.g,
              _ += S = z.b,
              x += k = z.a,
              w -= E,
              P -= j,
              M -= S,
              O -= k,
              z = z.next,
              d += 4;
          h += t
        }
        for (u = 0; u < t; u++) {
          for (P = M = O = w = v = y = m = p = 0,
            d = u << 2,
            g = A * (E = e[d]),
            b = A * (j = e[d + 1]),
            _ = A * (S = e[d + 2]),
            x = A * (k = e[d + 3]),
            p += L * E,
            v += L * j,
            y += L * S,
            m += L * k,
            R = I,
            l = 0; l < A; l++)
            R.r = E,
              R.g = j,
              R.b = S,
              R.a = k,
              R = R.next;
          for (f = t,
            l = 1; l <= r; l++)
            d = f + u << 2,
              p += (R.r = E = e[d]) * (C = A - l),
              v += (R.g = j = e[d + 1]) * C,
              y += (R.b = S = e[d + 2]) * C,
              m += (R.a = k = e[d + 3]) * C,
              w += E,
              P += j,
              M += S,
              O += k,
              R = R.next,
              l < D && (f += t);
          for (d = u,
            V = I,
            z = B,
            s = 0; s < n; s++)
            c = d << 2,
              e[c + 3] = k = m * F >> q,
              k > 0 ? (k = 255 / k,
                e[c] = (p * F >> q) * k,
                e[c + 1] = (v * F >> q) * k,
                e[c + 2] = (y * F >> q) * k) : e[c] = e[c + 1] = e[c + 2] = 0,
              p -= g,
              v -= b,
              y -= _,
              m -= x,
              g -= V.r,
              b -= V.g,
              _ -= V.b,
              x -= V.a,
              c = u + ((c = s + A) < D ? c : D) * t << 2,
              p += w += V.r = e[c],
              v += P += V.g = e[c + 1],
              y += M += V.b = e[c + 2],
              m += O += V.a = e[c + 3],
              V = V.next,
              g += E = z.r,
              b += j = z.g,
              _ += S = z.b,
              x += k = z.a,
              w -= E,
              P -= j,
              M -= S,
              O -= k,
              z = z.next,
              d += t
        }
      }
    }
    function i() {
      this.r = 0,
        this.g = 0,
        this.b = 0,
        this.a = 0,
        this.next = null
    }
    var a = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259]
      , o = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
    e.exports = r
  }
  , function (e, t, n) {
    "use strict";
    function r(e) {
      this.options = e || {
        locator: {}
      }
    }
    function i(e, t, n) {
      function r(t) {
        var r = e[t];
        !r && o && (r = 2 == e.length ? function (n) {
          e(t, n)
        }
          : e),
          i[t] = r && function (e) {
            r("[xmldom " + t + "]\t" + e + u(n))
          }
          || function () { }
      }
      if (!e) {
        if (t instanceof a)
          return t;
        e = t
      }
      var i = {}
        , o = e instanceof Function;
      return n = n || {},
        r("warning"),
        r("error"),
        r("fatalError"),
        i
    }
    function a() {
      this.cdata = !1
    }
    function o(e, t) {
      t.lineNumber = e.lineNumber,
        t.columnNumber = e.columnNumber
    }
    function u(e) {
      if (e)
        return "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]"
    }
    function s(e, t, n) {
      return "string" == typeof e ? e.substr(t, n) : e.length >= t + n || t ? new java.lang.String(e, t, n) + "" : e
    }
    function l(e, t) {
      e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t)
    }
    r.prototype.parseFromString = function (e, t) {
      var n = this.options
        , r = new c
        , o = n.domBuilder || new a
        , u = n.errorHandler
        , s = n.locator
        , l = n.xmlns || {}
        , f = {
          lt: "<",
          gt: ">",
          amp: "&",
          quot: '"',
          apos: "'"
        };
      return s && o.setDocumentLocator(s),
        r.errorHandler = i(u, o, s),
        r.domBuilder = n.domBuilder || o,
        /\/x?html?$/.test(t) && (f.nbsp = " ",
          f.copy = "©",
          l[""] = "http://www.w3.org/1999/xhtml"),
        l.xml = l.xml || "http://www.w3.org/XML/1998/namespace",
        e ? r.parse(e, l, f) : r.errorHandler.error("invalid doc source"),
        o.doc
    }
      ,
      a.prototype = {
        startDocument: function () {
          this.doc = (new f).createDocument(null, null, null),
            this.locator && (this.doc.documentURI = this.locator.systemId)
        },
        startElement: function (e, t, n, r) {
          var i = this.doc
            , a = i.createElementNS(e, n || t)
            , u = r.length;
          l(this, a),
            this.currentElement = a,
            this.locator && o(this.locator, a);
          for (var s = 0; s < u; s++) {
            var e = r.getURI(s)
              , c = r.getValue(s)
              , n = r.getQName(s)
              , f = i.createAttributeNS(e, n);
            this.locator && o(r.getLocator(s), f),
              f.value = f.nodeValue = c,
              a.setAttributeNode(f)
          }
        },
        endElement: function (e, t, n) {
          var r = this.currentElement;
          r.tagName;
          this.currentElement = r.parentNode
        },
        startPrefixMapping: function (e, t) { },
        endPrefixMapping: function (e) { },
        processingInstruction: function (e, t) {
          var n = this.doc.createProcessingInstruction(e, t);
          this.locator && o(this.locator, n),
            l(this, n)
        },
        ignorableWhitespace: function (e, t, n) { },
        characters: function (e, t, n) {
          if (e = s.apply(this, arguments)) {
            if (this.cdata)
              var r = this.doc.createCDATASection(e);
            else
              var r = this.doc.createTextNode(e);
            this.currentElement ? this.currentElement.appendChild(r) : /^\s*$/.test(e) && this.doc.appendChild(r),
              this.locator && o(this.locator, r)
          }
        },
        skippedEntity: function (e) { },
        endDocument: function () {
          this.doc.normalize()
        },
        setDocumentLocator: function (e) {
          (this.locator = e) && (e.lineNumber = 0)
        },
        comment: function (e, t, n) {
          e = s.apply(this, arguments);
          var r = this.doc.createComment(e);
          this.locator && o(this.locator, r),
            l(this, r)
        },
        startCDATA: function () {
          this.cdata = !0
        },
        endCDATA: function () {
          this.cdata = !1
        },
        startDTD: function (e, t, n) {
          var r = this.doc.implementation;
          if (r && r.createDocumentType) {
            var i = r.createDocumentType(e, t, n);
            this.locator && o(this.locator, i),
              l(this, i)
          }
        },
        warning: function (e) { },
        error: function (e) { },
        fatalError: function (e) {
          throw e
        }
      },
      "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (e) {
        a.prototype[e] = function () {
          return null
        }
      });
    var c = n(1770).XMLReader
      , f = t.DOMImplementation = n(780).DOMImplementation;
    t.XMLSerializer = n(780).XMLSerializer,
      t.DOMParser = r
  }
  , function (e, t, n) {
    "use strict";
    function r() { }
    function i(e, t, n, r, i) {
      function c(e) {
        if (e > 65535) {
          e -= 65536;
          var t = 55296 + (e >> 10)
            , n = 56320 + (1023 & e);
          return String.fromCharCode(t, n)
        }
        return String.fromCharCode(e)
      }
      function p(e) {
        var t = e.slice(1, -1);
        return t in n ? n[t] : "#" === t.charAt(0) ? c(parseInt(t.substr(1).replace("x", "0x"))) : (i.error("entity not found:" + e),
          e)
      }
      function v(t) {
        if (t > P) {
          var n = e.substring(P, t).replace(/&#?\w+;/g, p);
          _ && y(P),
            r.characters(n, 0, t - P),
            P = t
        }
      }
      function y(t, n) {
        for (; t >= g && (n = b.exec(e));)
          m = n.index,
            g = m + n[0].length,
            _.lineNumber++;
        _.columnNumber = t - m + 1
      }
      for (var m = 0, g = 0, b = /.*(?:\r\n?|\n)|.*$/g, _ = r.locator, x = [{
        currentNSMap: t
      }], w = {}, P = 0; ;) {
        try {
          var M = e.indexOf("<", P);
          if (M < 0) {
            if (!e.substr(P).match(/^\s*$/)) {
              var O = r.doc
                , E = O.createTextNode(e.substr(P));
              O.appendChild(E),
                r.currentElement = E
            }
            return
          }
          switch (M > P && v(M),
          e.charAt(M + 1)) {
            case "/":
              var j = e.indexOf(">", M + 3)
                , S = e.substring(M + 2, j)
                , k = x.pop();
              j < 0 ? (S = e.substring(M + 2).replace(/[\s<].*/, ""),
                i.error("end tag name: " + S + " is not complete:" + k.tagName),
                j = M + 1 + S.length) : S.match(/\s</) && (S = S.replace(/[\s<].*/, ""),
                  i.error("end tag name: " + S + " maybe not complete"),
                  j = M + 1 + S.length);
              var C = k.localNSMap
                , T = k.tagName == S;
              if (T || k.tagName && k.tagName.toLowerCase() == S.toLowerCase()) {
                if (r.endElement(k.uri, k.localName, S),
                  C)
                  for (var N in C)
                    r.endPrefixMapping(N);
                T || i.fatalError("end tag name: " + S + " is not match the current start tagName:" + k.tagName)
              } else
                x.push(k);
              j++;
              break;
            case "?":
              _ && y(M),
                j = d(e, M, r);
              break;
            case "!":
              _ && y(M),
                j = f(e, M, r, i);
              break;
            default:
              _ && y(M);
              var D = new h
                , A = x[x.length - 1].currentNSMap
                , j = o(e, M, D, A, p, i)
                , L = D.length;
              if (!D.closed && l(e, j, D.tagName, w) && (D.closed = !0,
                n.nbsp || i.warning("unclosed xml attribute")),
                _ && L) {
                for (var I = a(_, {}), R = 0; R < L; R++) {
                  var B = D[R];
                  y(B.offset),
                    B.locator = a(_, {})
                }
                r.locator = I,
                  u(D, r, A) && x.push(D),
                  r.locator = _
              } else
                u(D, r, A) && x.push(D);
              "http://www.w3.org/1999/xhtml" !== D.uri || D.closed ? j++ : j = s(e, j, D.tagName, p, r)
          }
        } catch (e) {
          i.error("element parse error: " + e),
            j = -1
        }
        j > P ? P = j : v(Math.max(M, P) + 1)
      }
    }
    function a(e, t) {
      return t.lineNumber = e.lineNumber,
        t.columnNumber = e.columnNumber,
        t
    }
    function o(e, t, n, r, i, a) {
      for (var o, u, s = ++t, l = b; ;) {
        var c = e.charAt(s);
        switch (c) {
          case "=":
            if (l === _)
              o = e.slice(t, s),
                l = w;
            else {
              if (l !== x)
                throw new Error("attribute equal must after attrName");
              l = w
            }
            break;
          case "'":
          case '"':
            if (l === w || l === _) {
              if (l === _ && (a.warning('attribute value must after "="'),
                o = e.slice(t, s)),
                t = s + 1,
                !((s = e.indexOf(c, t)) > 0))
                throw new Error("attribute value no end '" + c + "' match");
              u = e.slice(t, s).replace(/&#?\w+;/g, i),
                n.add(o, u, t - 1),
                l = M
            } else {
              if (l != P)
                throw new Error('attribute value must after "="');
              u = e.slice(t, s).replace(/&#?\w+;/g, i),
                n.add(o, u, t),
                a.warning('attribute "' + o + '" missed start quot(' + c + ")!!"),
                t = s + 1,
                l = M
            }
            break;
          case "/":
            switch (l) {
              case b:
                n.setTagName(e.slice(t, s));
              case M:
              case O:
              case E:
                l = E,
                  n.closed = !0;
              case P:
              case _:
              case x:
                break;
              default:
                throw new Error("attribute invalid close char('/')")
            }
            break;
          case "":
            return a.error("unexpected end of input"),
              l == b && n.setTagName(e.slice(t, s)),
              s;
          case ">":
            switch (l) {
              case b:
                n.setTagName(e.slice(t, s));
              case M:
              case O:
              case E:
                break;
              case P:
              case _:
                u = e.slice(t, s),
                  "/" === u.slice(-1) && (n.closed = !0,
                    u = u.slice(0, -1));
              case x:
                l === x && (u = o),
                  l == P ? (a.warning('attribute "' + u + '" missed quot(")!!'),
                    n.add(o, u.replace(/&#?\w+;/g, i), t)) : ("http://www.w3.org/1999/xhtml" === r[""] && u.match(/^(?:disabled|checked|selected)$/i) || a.warning('attribute "' + u + '" missed value!! "' + u + '" instead!!'),
                      n.add(u, u, t));
                break;
              case w:
                throw new Error("attribute value missed!!")
            }
            return s;
          case "":
            c = " ";
          default:
            if (c <= " ")
              switch (l) {
                case b:
                  n.setTagName(e.slice(t, s)),
                    l = O;
                  break;
                case _:
                  o = e.slice(t, s),
                    l = x;
                  break;
                case P:
                  var u = e.slice(t, s).replace(/&#?\w+;/g, i);
                  a.warning('attribute "' + u + '" missed quot(")!!'),
                    n.add(o, u, t);
                case M:
                  l = O
              }
            else
              switch (l) {
                case x:
                  n.tagName;
                  "http://www.w3.org/1999/xhtml" === r[""] && o.match(/^(?:disabled|checked|selected)$/i) || a.warning('attribute "' + o + '" missed value!! "' + o + '" instead2!!'),
                    n.add(o, o, t),
                    t = s,
                    l = _;
                  break;
                case M:
                  a.warning('attribute space is required"' + o + '"!!');
                case O:
                  l = _,
                    t = s;
                  break;
                case w:
                  l = P,
                    t = s;
                  break;
                case E:
                  throw new Error("elements closed character '/' and '>' must be connected to")
              }
        }
        s++
      }
    }
    function u(e, t, n) {
      for (var r = e.tagName, i = null, a = e.length; a--;) {
        var o = e[a]
          , u = o.qName
          , s = o.value
          , l = u.indexOf(":");
        if (l > 0)
          var f = o.prefix = u.slice(0, l)
            , d = u.slice(l + 1)
            , h = "xmlns" === f && d;
        else
          d = u,
            f = null,
            h = "xmlns" === u && "";
        o.localName = d,
          !1 !== h && (null == i && (i = {},
            c(n, n = {})),
            n[h] = i[h] = s,
            o.uri = "http://www.w3.org/2000/xmlns/",
            t.startPrefixMapping(h, s))
      }
      for (var a = e.length; a--;) {
        o = e[a];
        var f = o.prefix;
        f && ("xml" === f && (o.uri = "http://www.w3.org/XML/1998/namespace"),
          "xmlns" !== f && (o.uri = n[f || ""]))
      }
      var l = r.indexOf(":");
      l > 0 ? (f = e.prefix = r.slice(0, l),
        d = e.localName = r.slice(l + 1)) : (f = null,
          d = e.localName = r);
      var p = e.uri = n[f || ""];
      if (t.startElement(p, d, r, e),
        !e.closed)
        return e.currentNSMap = n,
          e.localNSMap = i,
          !0;
      if (t.endElement(p, d, r),
        i)
        for (f in i)
          t.endPrefixMapping(f)
    }
    function s(e, t, n, r, i) {
      if (/^(?:script|textarea)$/i.test(n)) {
        var a = e.indexOf("</" + n + ">", t)
          , o = e.substring(t + 1, a);
        if (/[&<]/.test(o))
          return /^script$/i.test(n) ? (i.characters(o, 0, o.length),
            a) : (o = o.replace(/&#?\w+;/g, r),
              i.characters(o, 0, o.length),
              a)
      }
      return t + 1
    }
    function l(e, t, n, r) {
      var i = r[n];
      return null == i && (i = e.lastIndexOf("</" + n + ">"),
        i < t && (i = e.lastIndexOf("</" + n)),
        r[n] = i),
        i < t
    }
    function c(e, t) {
      for (var n in e)
        t[n] = e[n]
    }
    function f(e, t, n, r) {
      switch (e.charAt(t + 2)) {
        case "-":
          if ("-" === e.charAt(t + 3)) {
            var i = e.indexOf("--\x3e", t + 4);
            return i > t ? (n.comment(e, t + 4, i - t - 4),
              i + 3) : (r.error("Unclosed comment"),
                -1)
          }
          return -1;
        default:
          if ("CDATA[" == e.substr(t + 3, 6)) {
            var i = e.indexOf("]]>", t + 9);
            return n.startCDATA(),
              n.characters(e, t + 9, i - t - 9),
              n.endCDATA(),
              i + 3
          }
          var a = v(e, t)
            , o = a.length;
          if (o > 1 && /!doctype/i.test(a[0][0])) {
            var u = a[1][0]
              , s = o > 3 && /^public$/i.test(a[2][0]) && a[3][0]
              , l = o > 4 && a[4][0]
              , c = a[o - 1];
            return n.startDTD(u, s && s.replace(/^(['"])(.*?)\1$/, "$2"), l && l.replace(/^(['"])(.*?)\1$/, "$2")),
              n.endDTD(),
              c.index + c[0].length
          }
      }
      return -1
    }
    function d(e, t, n) {
      var r = e.indexOf("?>", t);
      if (r) {
        var i = e.substring(t, r).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (i) {
          i[0].length;
          return n.processingInstruction(i[1], i[2]),
            r + 2
        }
        return -1
      }
      return -1
    }
    function h(e) { }
    function p(e, t) {
      return e.__proto__ = t,
        e
    }
    function v(e, t) {
      var n, r = [], i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
      for (i.lastIndex = t,
        i.exec(e); n = i.exec(e);)
        if (r.push(n),
          n[1])
          return r
    }
    var y = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/
      , m = new RegExp("[\\-\\.0-9" + y.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]")
      , g = new RegExp("^" + y.source + m.source + "*(?::" + y.source + m.source + "*)?$")
      , b = 0
      , _ = 1
      , x = 2
      , w = 3
      , P = 4
      , M = 5
      , O = 6
      , E = 7;
    r.prototype = {
      parse: function (e, t, n) {
        var r = this.domBuilder;
        r.startDocument(),
          c(t, t = {}),
          i(e, t, n, r, this.errorHandler),
          r.endDocument()
      }
    },
      h.prototype = {
        setTagName: function (e) {
          if (!g.test(e))
            throw new Error("invalid tagName:" + e);
          this.tagName = e
        },
        add: function (e, t, n) {
          if (!g.test(e))
            throw new Error("invalid attribute:" + e);
          this[this.length++] = {
            qName: e,
            value: t,
            offset: n
          }
        },
        length: 0,
        getLocalName: function (e) {
          return this[e].localName
        },
        getLocator: function (e) {
          return this[e].locator
        },
        getQName: function (e) {
          return this[e].qName
        },
        getURI: function (e) {
          return this[e].uri
        },
        getValue: function (e) {
          return this[e].value
        }
      },
      p({}, p.prototype) instanceof p || (p = function (e, t) {
        function n() { }
        n.prototype = t,
          n = new n;
        for (t in e)
          n[t] = e[t];
        return n
      }
      ),
      t.XMLReader = r
  }
  , function (e, t, n) {
    e.exports = n.p + "mask-5d3ac6dc.png"
  }
  , function (e, t, n) {
    "use strict";
    function r(e, t, n, r, i) {
      t.be("DIV", w, "0", r),
        i.isLoading && g({}, t, n, "1"),
        i.isLoading || i.accessDenied || (t.be("DIV", j, "2", r),
          i.datasource && i.datasource.nodes && i.datasource.nodes.length ? ("E" === i.who.type ? t.e("A", {
            class: "actual-owner-who",
            target: "_blank",
            href: b("/company/" + i.who.eid)
          }, "3", r, 1).t(i.who.name) : t.e("A", {
            class: "actual-owner-who",
            target: "_blank",
            href: b("/search/?key=" + i.who.name)
          }, "4", r, 1).t(i.who.name),
            t.n(S, r),
            t.e("SPAN", k, "6", r, 1).t(i.to),
            t.e("SPAN", C, "7", r, 1).t(i.ownerPercent),
            t.n(T, r)) : t.n(N, r),
          t.ee()),
        t.n(E, r),
        !i.isLoading && i.accessDenied && (t.be("DIV", D, "11", r),
          i.isLogin ? (t.e("IMG", {
            src: d,
            class: "mask"
          }, "12", r, 0),
            t.e("DIV", A, "13", r, 3).e("IMG", {
              src: p,
              class: "img-responsive center-block"
            }, "14", r, 0).n(L, r).n(I, r)) : (t.e("IMG", {
              src: d,
              class: "mask"
            }, "18", r, 0),
              t.e("DIV", R, "19", r, 2).n(B, r).e("DIV", V, "21", r, 1, 0, {
                onclick: n.d("login", !1)
              }).t("登录查看")),
          t.ee()),
        i.datasource && i.datasource.nodes && i.datasource.nodes.length && x({}, t, n, "22", [["fullScreenChange", "onFullScreenChange", !1], ["displayFullScreen", "onDisplayFullScreen", !1], ["resetChart", "onResetChart", !1], ["scaleChart", "onScaleChart", !1]]),
        t.ee()
    }
    n(1773);
    var i = e.exports = n(0).t()
      , a = n(1)
      , o = a.rc
      , u = o("/pc-web$1.0.0/src/routes/company/chart/components/app-owner/index.marko", function () {
        return e.exports
      })
      , s = n(1774)
      , l = a.r
      , c = a.c
      , f = n(1776)
      , d = f.default || f
      , h = n(1777)
      , p = h.default || h
      , v = n(436)
      , y = n(2)
      , m = y.t
      , g = m(v)
      , b = y.s
      , _ = n(437)
      , x = m(_)
      , w = {
        class: "chart-content clearfix"
      }
      , P = y.e
      , M = y.const
      , O = M("1ed320")
      , E = P("DIV", {
        id: "divOwner",
        class: "chart-section"
      }, "10", null, 0, 0, {
          i: O()
        })
      , j = {
        class: "actual-owner-result"
      }
      , S = P("SPAN", null, "5", null, 1, 0, {
        i: O()
      }).t("实际共持有")
      , k = {
        class: "actual-owner-to"
      }
      , C = {
        class: "actual-owner-percent"
      }
      , T = P("SPAN", null, "8", null, 1, 0, {
        i: O()
      }).t("的股份，是其疑似实际控制人")
      , N = P("SPAN", null, "9", null, 1, 0, {
        i: O()
      }).t("暂无信息")
      , D = {
        class: "owner-mask-wrapper"
      }
      , A = {
        class: "vip"
      }
      , L = P("DIV", {
        class: "text-center"
      }, "15", null, 1, 0, {
          i: O()
        }).t("成为VIP会员，无限查看公司疑似实际控制人")
      , I = P("DIV", {
        class: "margin-t-1x text-center padding-b-1x"
      }, "16", null, 1, 0, {
          i: O()
        }).e("A", {
          href: "/order/create-vip",
          class: "btn1",
          target: "_blank",
          "data-event-name": "疑似实际控制人-开通VIP提示"
        }, "17", null, 1).t("成为VIP会员")
      , R = {
        class: "login"
      }
      , B = P("H5", null, "20", null, 1, 0, {
        i: O()
      }).t("登录查看该公司疑似实际控制人")
      , V = {
        class: "btn1"
      };
    i._ = l(r, {
      _l_: u
    }, s),
      i.Component = c(s, i._)
  }
  , function (e, t) { }
  , function (e, t, n) {
    "use strict";
    (function (r) {
      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
      }()
        , u = n(309)
        , s = i(u)
        , l = n(394)
        , c = i(l)
        , f = n(6)
        , d = i(f)
        , h = n(1775)
        , p = n(7)
        , v = n(25)
        , y = function () {
          function e() {
            a(this, e)
          }
          return o(e, [{
            key: "onCreate",
            value: function (e) {
              this.state = {
                isLoading: !0,
                accessDenied: !1,
                isLogin: e.user.isLogin,
                eid: e.eid,
                datasource: {},
                who: {},
                to: "",
                ownerPercent: 0,
                divWidth: 0,
                divHeight: 0
              }
            }
          }, {
            key: "onMount",
            value: function () {
              var e = this;
              s.default.getActualOwnerByEid({
                eid: this.state.eid
              }).then(function (t) {
                e.adjustDiv(),
                  e.state.ownerPercent = t.totalPercent,
                  e.state.datasource = t,
                  e.formatDataSource(),
                  h.init("divOwner", e.state.datasource, e.nodeClickEvent.bind(e)),
                  e.state.isLoading = !1,
                  r(window).bind("resize", d.default.debounce(function () {
                    e.resizeChart()
                  }, 500)),
                  r(document).bind("fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange", function () {
                    (document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement) && v.track("疑似实际控制人-全屏查看")
                  }),
                  p.scroller.to(r(".app-nav-wrapper").offset().top)
              }).catch(function (t) {
                401 === t.status || 423 === t.status ? (e.state.isLoading = !1,
                  e.state.accessDenied = !0) : p.toastr.error(t.message, "错误")
              })
            }
          }, {
            key: "adjustDiv",
            value: function () {
              var e = r(window).height() - 128
                , t = r(this.getEl()).width() - 17;
              this.state.divWidth = t >= 700 ? t : 700,
                this.state.divHeight = e >= 875 ? e : 875,
                r("#divOwner").css("height", this.state.divHeight).css("width", this.state.divWidth)
            }
          }, {
            key: "formatDataSource",
            value: function () {
              var e = this.state.datasource.nodes
                , t = this.state.datasource.links
                , n = {}
                , r = {}
                , i = this.state.divWidth
                , a = this.state.divHeight
                , o = !0
                , u = !1
                , s = void 0;
              try {
                for (var l, c = t[Symbol.iterator](); !(o = (l = c.next()).done); o = !0)
                  for (var f = l.value, d = 0; d < e.length; d++) {
                    var h = e[d];
                    h.eid === f.source_id && (f.source = d,
                      h.is_key && (h.is_start = !0,
                        h.ox = i - 100,
                        h.oy = a / 2,
                        n = h,
                        h.depth = 0,
                        h.fixed = !0,
                        this.state.who = h)),
                      h.eid === f.target_id && (f.target = d,
                        h.is_key && (h.is_end = !0,
                          h.ox = 100,
                          h.oy = a / 2,
                          r = h,
                          h.fixed = !0,
                          this.state.to = h.name))
                  }
              } catch (e) {
                u = !0,
                  s = e
              } finally {
                try {
                  !o && c.return && c.return()
                } finally {
                  if (u)
                    throw s
                }
              }
              this.addDepthForLinks(t, n.eid, 0),
                this.formatNodeData(t, e);
              var p = r.depth
                , v = 0
                , y = 0
                , m = !0
                , g = !1
                , b = void 0;
              try {
                for (var _, x = e[Symbol.iterator](); !(m = (_ = x.next()).done); m = !0) {
                  var w = _.value;
                  Math.abs(w.duration) > v && (v = Math.abs(w.duration)),
                    w.depth === p && y++
                }
              } catch (e) {
                g = !0,
                  b = e
              } finally {
                try {
                  !m && x.return && x.return()
                } finally {
                  if (g)
                    throw b
                }
              }
              var P = 0;
              P = y > 1 ? (n.ox - r.ox) / (p + 1) : (n.ox - r.ox) / p;
              var M = 120;
              v > 2 && (M = 80);
              var O = !0
                , E = !1
                , j = void 0;
              try {
                for (var S, k = e[Symbol.iterator](); !(O = (S = k.next()).done); O = !0) {
                  var C = S.value
                    , T = C.depth;
                  C.is_key || (C.ox = i - 100 - P * T,
                    C.fixed = !0,
                    C.oy = a / 2 + M * C.duration)
                }
              } catch (e) {
                E = !0,
                  j = e
              } finally {
                try {
                  !O && k.return && k.return()
                } finally {
                  if (E)
                    throw j
                }
              }
              this.reCalculateOverlineNode(t, e, M)
            }
          }, {
            key: "addDepthForLinks",
            value: function (e, t, n) {
              var r = !0
                , i = !1
                , a = void 0;
              try {
                for (var o, u = e[Symbol.iterator](); !(r = (o = u.next()).done); r = !0) {
                  var s = o.value;
                  s.source_id === t && (!s.depth || s.depth < n) && (s.depth = n,
                    this.addDepthForLinks(e, s.target_id, s.depth + 1))
                }
              } catch (e) {
                i = !0,
                  a = e
              } finally {
                try {
                  !r && u.return && u.return()
                } finally {
                  if (i)
                    throw a
                }
              }
            }
          }, {
            key: "formatNodeData",
            value: function (e, t) {
              var n = !0
                , r = !1
                , i = void 0;
              try {
                for (var a, o = e[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                  var u = a.value
                    , s = !0
                    , l = !1
                    , c = void 0;
                  try {
                    for (var f, d = t[Symbol.iterator](); !(s = (f = d.next()).done); s = !0) {
                      var h = f.value;
                      h.eid === u.target_id && (!h.depth || h.depth < u.depth + 1) && (h.depth = u.depth + 1)
                    }
                  } catch (e) {
                    l = !0,
                      c = e
                  } finally {
                    try {
                      !s && d.return && d.return()
                    } finally {
                      if (l)
                        throw c
                    }
                  }
                }
              } catch (e) {
                r = !0,
                  i = e
              } finally {
                try {
                  !n && o.return && o.return()
                } finally {
                  if (r)
                    throw i
                }
              }
              var p = 0
                , v = !0
                , y = !1
                , m = void 0;
              try {
                for (var g, b = t[Symbol.iterator](); !(v = (g = b.next()).done); v = !0) {
                  var _ = g.value;
                  _.depth > p && (p = _.depth)
                }
              } catch (e) {
                y = !0,
                  m = e
              } finally {
                try {
                  !v && b.return && b.return()
                } finally {
                  if (y)
                    throw m
                }
              }
              for (var x = 1; x < p; x++) {
                var w = []
                  , P = !0
                  , M = !1
                  , O = void 0;
                try {
                  for (var E, j = t[Symbol.iterator](); !(P = (E = j.next()).done); P = !0) {
                    var S = E.value;
                    S.depth === x && w.push(S)
                  }
                } catch (e) {
                  M = !0,
                    O = e
                } finally {
                  try {
                    !P && j.return && j.return()
                  } finally {
                    if (M)
                      throw O
                  }
                }
                this.addNodesDuration(w)
              }
            }
          }, {
            key: "addNodesDuration",
            value: function (e) {
              var t = 0
                , n = !1;
              if (e.length % 2 == 0 && (n = !0),
                n)
                for (var r = 0; r < e.length; r++) {
                  var i = e[r];
                  r >= e.length / 2 ? (i.duration = r - t == 0 ? 0 : -(e.length / 2 - t),
                    t++) : i.duration = r + 1
                }
              else
                for (var a = 0; a < e.length; a++) {
                  var o = e[a];
                  a > e.length / 2 ? (o.duration = a - t == 0 ? 0 : -(Math.floor(e.length / 2) - t),
                    t++) : o.duration = a
                }
            }
          }, {
            key: "reCalculateOverlineNode",
            value: function (e, t, n) {
              for (var r = 0; r < 10; r++) {
                var i = !0
                  , a = !1
                  , o = void 0;
                try {
                  for (var u, s = e[Symbol.iterator](); !(i = (u = s.next()).done); i = !0) {
                    var l = u.value
                      , c = 0
                      , f = 0
                      , d = 0
                      , h = 0
                      , p = !0
                      , v = !1
                      , y = void 0;
                    try {
                      for (var m, g = t[Symbol.iterator](); !(p = (m = g.next()).done); p = !0) {
                        var b = m.value;
                        b.eid === l.source_id && (d = b.ox,
                          h = b.oy),
                          b.eid === l.target_id && (c = b.ox,
                            f = b.oy)
                      }
                    } catch (e) {
                      v = !0,
                        y = e
                    } finally {
                      try {
                        !p && g.return && g.return()
                      } finally {
                        if (v)
                          throw y
                      }
                    }
                    if (f === h) {
                      var _ = !0
                        , x = !1
                        , w = void 0;
                      try {
                        for (var P, M = t[Symbol.iterator](); !(_ = (P = M.next()).done); _ = !0) {
                          var O = P.value;
                          if (O.oy === f && O.ox < d && c < O.ox) {
                            O.oy = this.state.divHeight / 2 + n * (O.duration + 1 + r);
                            break
                          }
                        }
                      } catch (e) {
                        x = !0,
                          w = e
                      } finally {
                        try {
                          !_ && M.return && M.return()
                        } finally {
                          if (x)
                            throw w
                        }
                      }
                    }
                  }
                } catch (e) {
                  a = !0,
                    o = e
                } finally {
                  try {
                    !i && s.return && s.return()
                  } finally {
                    if (a)
                      throw o
                  }
                }
              }
            }
          }, {
            key: "onFullScreenChange",
            value: function (e) {
              if (e) {
                var t = r(window).height()
                  , n = r(window).width();
                r("#divOwner").css("height", t).css("width", n)
              } else
                r("#divOwner").css("width", this.state.divWidth).css("height", this.state.divHeight);
              h.resetChart()
            }
          }, {
            key: "onDisplayFullScreen",
            value: function () {
              var e = this.getEl();
              e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
            }
          }, {
            key: "onRotateChart",
            value: function (e) {
              h.rotateChart(e)
            }
          }, {
            key: "onResetChart",
            value: function () {
              v.track("疑似实际控制人-还原页面"),
                h.init("divOwner", this.state.datasource, this.nodeClickEvent.bind(this))
            }
          }, {
            key: "onScaleChart",
            value: function (e) {
              1 === e ? v.track("疑似实际控制人-放大图片") : v.track("疑似实际控制人-缩小图片"),
                h.scaleChart(e)
            }
          }, {
            key: "resizeChart",
            value: function () {
              document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement || (this.adjustDiv(),
                h.resetChart())
            }
          }, {
            key: "nodeClickEvent",
            value: function (e) {
              e.eid && "E" === e.type && (v.track("疑似实际控制人-查看企业面板"),
                this.showLeftPopup(e.eid))
            }
          }, {
            key: "showLeftPopup",
            value: function (e) {
              c.default.showCompanyInfo(e, !1, this.getEl())
            }
          }, {
            key: "login",
            value: function () {
              v.track("疑似实际控制人-登录提示"),
                p.showLogin()
            }
          }]),
            e
        }();
      t.default = y,
        e.exports = t.default
    }
    ).call(t, n(4))
  }
  , function (e, t, n) {
    "use strict";
    (function (r) {
      function i() {
        m = r(p).width(),
          g = r(p).height(),
          _ = h.forceSimulation(v.nodes).force("link", h.forceLink(v.links).distance(150)).force("charge", h.forceManyBody()),
          w = h.drag().on("start", function (e, t) {
            e.fixed = !0,
              h.event.active || _.alphaTarget(.1).restart(),
              e.fx = e.x,
              e.fy = e.y
          }).on("drag", function (e) {
            e.fx = h.event.x,
              e.fy = h.event.y
          }).on("end", function (e) {
            h.event.active || _.alphaTarget(0)
          }),
          P = h.zoom().scaleExtent([.5, 2]).on("zoom", function () {
            b = h.event.transform.k,
              j.attr("transform", "translate(" + O + "," + E + ")scale(" + b + ")")
          }),
          M = h.drag().on("drag", function () {
            O += h.event.dx,
              E += h.event.dy,
              j.attr("transform", "translate(" + O + "," + E + ")scale(" + b + ")")
          }),
          h.select(p).select("svg").remove(),
          S = h.select(p).append("svg").attr("width", m).attr("height", g).style("cursor", "move"),
          S.append("rect").attr("class", "find-owner-masker").attr("width", m).attr("height", g).attr("fill", function () {
            return "#ffffff"
          });
        var e = S.append("rect").attr("id", "find-owner-handler").attr("width", m).attr("height", g).attr("fill-opacity", 0).attr("class", "find-owner-rect").style("pointer-events", "all");
        j = S.append("g").attr("id", "force-chart-container").attr("transform-origin", "center"),
          S.call(P),
          e.call(M),
          a()
      }
      function a() {
        j.append("defs").append("marker").attr("id", "arrow").attr("viewBox", "0 0 15 15").attr("markerUnits", "strokeWidth").attr("refX", 28).attr("refY", 6).attr("markerWidth", 30).attr("markerHeight", 30).attr("orient", "auto").append("path").attr("d", "M2,2 L10,6 L2,10 L6,6 L2,2").attr("fill", "#cecece"),
          j.append("defs").append("marker").attr("id", "arrowHover").attr("viewBox", "0 0 15 15").attr("markerUnits", "strokeWidth").attr("refX", 28).attr("refY", 6).attr("markerWidth", 30).attr("markerHeight", 30).attr("orient", "auto").append("path").attr("d", "M2,2 L10,6 L2,10 L6,6 L2,2").attr("fill", "#84d9e4"),
          k = j.append("g").selectAll(".find-owner-link").data(v.links);
        var e = k.enter().append("line").attr("class", function (e) {
          return "find-relation-link" + e.source.index + "-" + e.target.index
        }).attr("stroke", "#e5e5e5").attr("stroke-width", "1px").attr("fill", "none").attr("marker-end", "url(" + location.href + "#arrow)");
        C = j.append("g").selectAll(".find-owner-linkText-container").data(v.links);
        var t = C.enter().append("g").attr("class", "find-owner-linkText-container");
        t.append("rect").attr("width", function (e) {
          return o(e)
        }).attr("height", 13).attr("fill", function () {
          return "#ffffff"
        }),
          t.append("text").attr("class", "find-owner-linkText").style("font-size", "10px").style("fill", function () {
            return "#333"
          }).attr("dy", 10).attr("dx", 2).text(function (e) {
            return e.label
          }),
          x = j.append("g").selectAll(".find-owner-node-g").data(v.nodes);
        var n = x.enter().append("g").attr("class", "find-owner-node-container").attr("width", 2 * N.nodeRadius).attr("height", 2 * N.nodeRadius).style("cursor", "move").on("mouseover", l).on("mouseleave", c).on("click", function (e) {
          !h.event.defaultPrevented && y && y(e)
        }).call(w);
        n.append("circle").attr("class", "find-owner-node").style("cursor", "move").attr("fill", function (e) {
          return e.is_end ? T[2] : e.is_start ? T[0] : T[1]
        }).attr("r", function (e) {
          return 2 * N.nodeRadius
        }),
          n.append("text").attr("class", "find-owner-node-text").style("font-size", "10px").style("fill", "#fff").attr("text-anchor", "middle").attr("x", 0).attr("y", -3).attr("dy", 3),
          u(),
          _.on("tick", function () {
            e.attr("x1", function (e) {
              return e.source.x
            }).attr("y1", function (e) {
              return e.source.y
            }).attr("x2", function (e) {
              return e.target.x
            }).attr("y2", function (e) {
              return e.target.y
            }),
              n.attr("cx", function (e) {
                return e.fx = e.x,
                  e.x
              }).attr("cy", function (e) {
                return e.fy = e.y,
                  e.y
              }).attr("transform", function (e) {
                return "translate(" + e.x + "," + e.y + ")"
              }),
              t.attr("transform", function (e) {
                var t = 180 * Math.atan((e.target.y - e.source.y) / (e.target.x - e.source.x)) / Math.PI
                  , n = (e.source.x + e.target.x) / 2 - o(e) / 2
                  , r = (e.source.y + e.target.y) / 2 - 6;
                return "rotate(" + t + " " + (e.source.x + e.target.x) / 2 + " " + (e.source.y + e.target.y) / 2 + ")translate(" + n + "," + r + ")"
              })
          })
      }
      function o(e) {
        var t = 0;
        if (e.label && e.label.length > 0) {
          var n = 0
            , r = 0
            , i = 0
            , a = e.label.match(/\d/g)
            , o = e.label.match(/[.:,\s]/g)
            , u = e.label.match(/[%]/g);
          a && (n = a.length,
            t += 6.3 * n),
            o && (r = o.length,
              t += 2.8 * r),
            u && (i = u.length,
              t += 6 * i),
            t += 10 * (e.label.length - n - r - i),
            n + r + i === 0 && (t += 3)
        }
        return t
      }
      function u() {
        h.selectAll(".find-owner-node-text").each(function (e) {
          var t = []
            , n = h.select(this)
            , r = e.name;
          if (r.length > 12 && (r = r.substring(0, 10) + "……"),
            r.length > 4)
            for (var i = 0; i < r.length;)
              i + 4 >= r.length ? t.push(r.substring(i)) : t.push(r.substring(i, i + 4)),
                i += 4;
          else
            t.push(r);
          n.selectAll("tspan").data(t).enter().append("tspan").attr("x", n.attr("x")).attr("dy", function (e, n) {
            var r = "";
            switch (t.length) {
              case 1:
                break;
              case 2:
                r = 0 === n ? "-0.1em" : "1.1em";
                break;
              case 3:
                r = 0 === n ? "-0.5em" : "1.3em"
            }
            return r
          }).style("font-size", 12).text(function (e) {
            return e
          })
        })
      }
      function s(e) {
        var t = b + e;
        t >= .5 && t <= 2 && (b = t,
          P.scaleTo(j, b))
      }
      function l(e) {
        D = [],
          f(e.eid, v.links);
        for (var t = 0; t < D.length; t++) {
          var n = D[t];
          j.select("line.find-relation-link" + n.source.index + "-" + n.target.index).style("stroke", "#84d9e4").style("stroke-width", "1.5px").attr("marker-end", "url(" + location.href.substring(0, location.href.indexOf("#")) + "#arrowHover)")
        }
      }
      function c(e) {
        f(e.eid, v.links);
        for (var t = 0; t < D.length; t++) {
          var n = D[t];
          j.select("line.find-relation-link" + n.source.index + "-" + n.target.index).style("stroke", "#e5e5e5").style("stroke-width", "1px").attr("marker-end", "url(" + location.href.substring(0, location.href.indexOf("#")) + "#arrow)")
        }
      }
      function f(e, t) {
        var n = !0
          , r = !1
          , i = void 0;
        try {
          for (var a, o = t[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
            var u = a.value;
            e === u.target_id && (D.push(u),
              f(u.source_id, t))
          }
        } catch (e) {
          r = !0,
            i = e
        } finally {
          try {
            !n && o.return && o.return()
          } finally {
            if (r)
              throw i
          }
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var d = n(395)
        , h = function (e) {
          if (e && e.__esModule)
            return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return t.default = e,
            t
        }(d)
        , p = ""
        , v = {}
        , y = void 0
        , m = 0
        , g = 0
        , b = 1
        , _ = void 0
        , x = void 0
        , w = void 0
        , P = void 0
        , M = void 0
        , O = 0
        , E = 0
        , j = void 0
        , S = void 0
        , k = void 0
        , C = void 0
        , T = ["#e4a867", "#14a5dc", "#e45f49"]
        , N = {
          margin: 30,
          nodeRadius: 18,
          nodeColors: {
            search: "#ee5137",
            result: "#0fbbe9",
            people: "#778AE6",
            enterprise: "#91DC8A"
          },
          lineColor: "#72afc5",
          lineTextColor: "#354d56",
          nodedy: 50
        }
        , D = [];
      t.default = {
        init: function (e, t, n) {
          p = "#" + e,
            v = t,
            y = n,
            b = 1;
          var r = !0
            , a = !1
            , o = void 0;
          try {
            for (var u, s = v.nodes[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
              var l = u.value;
              l.fx = l.ox,
                l.fy = l.oy
            }
          } catch (e) {
            a = !0,
              o = e
          } finally {
            try {
              !r && s.return && s.return()
            } finally {
              if (a)
                throw o
            }
          }
          i()
        },
        scaleChart: function (e) {
          s(.1 * e)
        },
        resetChart: function () {
          b = 1;
          var e = !0
            , t = !1
            , n = void 0;
          try {
            for (var r, a = v.nodes[Symbol.iterator](); !(e = (r = a.next()).done); e = !0) {
              var o = r.value;
              o.fx = o.ox,
                o.fy = o.oy
            }
          } catch (e) {
            t = !0,
              n = e
          } finally {
            try {
              !e && a.return && a.return()
            } finally {
              if (t)
                throw n
            }
          }
          i()
        }
      },
        e.exports = t.default
    }
    ).call(t, n(4))
  }
  , function (e, t, n) {
    e.exports = n.p + "mask-f1006274.png"
  }
  , function (e, t, n) {
    e.exports = n.p + "vip-9f58636d.png"
  }
]), [1453]);
