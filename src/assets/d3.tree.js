function(r) {
  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  // function a(e, t) {
  //   var n = {};
  //   for (var r in e)
  //     t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
  //   return n
  // }

  /**
   *
   * @param {{}} data 原始数据: {treeData}
   * @param {[]} keys 隐射键和值: ["pTrees", "cTrees"]
   */
  function a(data, keys) {
    var obj = {};
    // a(t, ["pTrees", "cTrees"])
    for (var key in data) {
      keys.indexOf(key) >= 0 || Object.prototype.hasOwnProperty.call(data, key) && (obj[key] = data[key])
    };
    return obj
  }
  // 创建图形(V)
  function o() {
    re = r(U).width(),
      v.select(U).select("svg").remove(),
      svg = v.select(U)
        .append("svg:svg")
        .attr("width", "100%")
        .attr("id", "structureChart")
        .style("transition", "height " + H + "ms ease-in-out")
        .classed("new-network-rect", !0),
      G = svg.append("svg:g")
        .attr("id", "structureChartLogo")
        .style("transition", "transform " + H + "ms ease-in-out")
        .html(ye), // 启信宝logo
      svg.append("defs").append("marker")
        .attr("id", "arrow").attr("viewBox", "0 0 12 12")
        .attr("markerUnits", "strokeWidth")
        .attr("refX", 11)
        .attr("refY", 6)
        .attr("markerWidth", 24)
        .attr("markerHeight", 24)
        .attr("orient", "auto").append("path")
        .attr("d", "M2,2 L10,6 L2,10 L6,6 L2,2")
        .attr("fill", P),
      svg.append("defs").append("marker")
        .attr("id", "arrowCompany")
        .attr("viewBox", "0 0 12 12")
        .attr("markerUnits", "strokeWidth")
        .attr("refX", 11)
        .attr("refY", 6)
        .attr("markerWidth", 24)
        .attr("markerHeight", 24)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M2,2 L10,6 L2,10 L6,6 L2,2")
        .attr("fill", A),
      svg.append("defs").append("marker")
        .attr("id", "arrowPerson")
        .attr("viewBox", "0 0 12 12")
        .attr("markerUnits", "strokeWidth")
        .attr("refX", 11)
        .attr("refY", 6)
        .attr("markerWidth", 24)
        .attr("markerHeight", 24)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M2,2 L10,6 L2,10 L6,6 L2,2")
        .attr("fill", L),
      $ = svg.append("svg:g")
        .attr("id", "structureChartContainer"),
      Z = $.append("svg:g").classed("topG", !0)
        .style("transition", "transform " + H + "ms ease-in-out"),
      Z.append("svg:g").classed("topGLinks", !0),
      Z.append("svg:g").classed("topGNodes", !0),
      Q = $.append("svg:g").classed("bottomG", !0)
        .style("transition", "transform " + H + "ms ease-in-out"),
      Q.append("svg:g").classed("bottomGLinks", !0),
      Q.append("svg:g").classed("bottomGNodes", !0),
      $.append("svg:g").classed("centerG", !0)
        .style("transition", "transform " + H + "ms ease-in-out"),
      s(), u()
  }
  // 创建图像(-V-)
  function u(e) {
    // 创建线条(V)
    function t(e, t, n, r) {
      var i = v.linkVertical().x(function (e) {
        return e.x
      }).y(function (e) {
        return e.y
      }),
        a = e.selectAll("path.structure-link").data(t.links(), function (e) {
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
      }), a.transition().duration(H).ease(v.easeQuad).attr("d", function (e) {
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
      }), a.exit().transition().duration(H).ease(v.easeQuad).attr("d", function () {
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

    // 创建节点(V)
    function n_node(e, t, n, a) {
      var o = e.selectAll("g.structure-node").data(t, function (e) {
        return e.data.id || (e.data.id = ++he), e.data.id
      }),
        u = o.enter().filter(function (e) {
          return 0 !== e.depth
        }).append("svg:g").attr("class", function (e) {
          return "structure-node node" + e.data.identifier
        }).attr("transform", function () {
          return "translate(" + a.x0 + ", " + a.y0 + ")"
        }).style("cursor", "default").on("mouseover", function (e) {
          var t = e.data.identifier,
            n = ".link-" + t + ",.border-" + t;
          ! function e(t) {
            var r = t.data.identifier;
            n += ",.link-" + r + ",.border-" + r, t.parent && e(t.parent)
          }(e);
          var r = v.selectAll(n).classed("active", !0);
          r.filter(".mark.company").attr("marker-end", "url(#arrowCompany)"), r.filter(".mark.person").attr("marker-end", "url(#arrowPerson)"), e.data._selector = n
        }).on("mouseleave", function (e) {
          v.selectAll(e.data._selector).classed("active", !1).filter(".mark").attr("marker-end", "url(#arrow)")
        });
      u.append("svg:rect").attr("x", -z / 2).attr("y", -F / 2).attr("width", z).attr("height", F).attr("rx", X).attr("ry", X).style("stroke", N).style("stroke-width", T).style("fill", "#ffffff").attr("class", function (e) {
        return "structure-border border-" + e.data.identifier + " " + (e.data.eid && "null" !== e.data.eid ? "company" : "person")
      }), u.append("svg:rect").attr("x", -z / 2 - T / 2).attr("y", F / 2 - T / 2).attr("width", z + T).attr("height", D).style("fill", function (e) {
        return e.data.eid && "null" !== e.data.eid ? A : L
      }),
      // 方法
      r(u, n), i(u, n);
      // 继续节点
      var s = e.selectAll("g.structure-node");
      s.transition().duration(H).ease(v.easeQuad).attr("transform", function (e) {
        return "translate(" + e.x + ", " + e.y + ")"
      }), s.selectAll("text").transition().duration(H).ease(v.easeQuad).style("fill-opacity", 1);
      var l = o.exit();
      l.transition().duration(H).ease(v.easeQuad).attr("transform", function () {
        return "translate(" + a.x + "," + a.y + ")"
      }).remove(), l.select("circle").attr("r", 1e-6),
      l.selectAll("text")
        .transition()
        .duration(H)
        .ease(v.easeQuad)
        .style("fill-opacity", 1e-6),
        t.forEach(function (e) {
        e.data.x0 = e.x, e.data.y0 = e.y
      })
    }

    // 追加文字(V)
    function r(e, t) {
      e.append("svg:text").text(function (e) {
        var t = e.data.name,
          n = f(t, O),
          r = 2 * S;
        if (n + r > z) {
          var i = Math.ceil((z - r) / (n / t.length));
          t = e.data.name.substring(0, i),
          e.data._subName = e.data.name.substring(i)
        }
        return t
      }).attr("x", S - z / 2).attr("y", j - F / 2)
      .attr("dy", O).style("fill-opacity", 1e-6)
      .style("font-size", O + "px").attr("fill", M)
      .attr("font-weight", 500)
      .style("cursor", function (e) {
        if (e.data.eid && "null" !== e.data.eid) return "pointer"
      }).on("mouseover", function (e) {
        e.data.eid && "null" !== e.data.eid && v.select(this).attr("font-weight", 600)
      }).on("mouseleave", function (e) {
        e.data.eid && "null" !== e.data.eid && v.select(this).attr("font-weight", 500)
      }).on("click", pe).filter(function (e) {
        return !!e.data._subName
      }).append("tspan").attr("x", S - z / 2).attr("dy", "1.35em").attr("fill", M).text(function (e) {
        var t = e.data._subName,
          n = f(t, O),
          r = 2 * S;
        return n + r > z && (t = t.substring(0, Math.ceil((z - r) / (n / t.length)) - 2) + "..."), t
      }),
      e.filter(function (e) {
        return e.data.amount
      }).append("svg:text").text(function (e) {
        var t = parseFloat(e.data.amount) ? parseFloat(e.data.amount).toFixed(0) : "***";
        if (e.data.amount) {
          var n = e.data.amount.indexOf("shares"); - 1 === n ? t = "认缴金额：" + t + "万元" : -1 !== n && (t = "持股数：" + t + "万股")
        }
        var r = f(t, E),
          i = 2 * S;
        return r + i > z && (t = t.substring(0, Math.ceil((z - i) / (r / t.length) - 1)) + "..."), t
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
        return v.line()([
          [0, 0],
          [0, I]
        ])
      }).attr("class", function (e) {
        return "structure-link mark link-" + e.data.identifier + " " + (e.data.eid && "null" !== e.data.eid ? "company" : "person")
      }).style("stroke", P).style("stroke-width", w).attr("marker-end", "url(#arrow)")
    }
    // 过滤节点数据(V)
    function i(e, t) {
      var n = e.filter(function (e) {
        return e.data.items && e.data.items.length || e.data.hideNodes
      }).append("g")
        .style("cursor", "pointer")
        .classed("circle", !0)
        .on("click", function (e) {
        ve && ve(e, "circle"),
        e.data.hideNodes || (d(e), u({
          identifier: e.data.identifier,
          x0: e.data.x0,
          y0: e.data.y0
        }))
      }).attr("transform",
      "translate(0, " + (t * F / 2 + t * (R + (1 === t ? D : 0))) + ")");
      n.append("circle")
      .attr("r", R)
      .style("stroke", A)
      .style("stroke-width", "1px")
      .style("fill", A)
      .classed("node-twinkle", !0),
      n.append("line")
      .attr("x1", -4)
      .attr("y1", 0)
      .attr("x2", 4)
      .attr("y2", 0)
      .style("stroke", "#ffffff")
      .style("stroke-width", "1px"),
      n.append("line")
      .attr("class", "vertical-line")
      .attr("x1", 0).attr("y1", -4)
      .attr("x2", 0).attr("y2", 4)
      .style("stroke", "#ffffff")
      .style("stroke-width", "1px"),
      $.selectAll(".vertical-line")
      .attr("visibility", function (e) {
        return e.data.children ? "hidden" : ""
      })
    }


    de = 0;
    var topa = v.hierarchy(topData),
      bottom_o = v.hierarchy(bottomData),
      s = c(a.descendants()),
      l = s.maxDepth,
      h = c(bottom_o.descendants()),
      p = h.maxDepth;
    le = re / 2,
    ae = V * l,
    oe = V * p,
    ie = ae + oe + F + 2 * se,
      W.attr("height", ie),
      $.style("transform-origin", "0 center 0").attr("transform", "translate(" + (le + ce) + ", " + fe + ")scale(" + K + ")"),
      G.attr("transform", "translate(" + (le - 141) + ", " + (ae + se - Y - 30) + ")scale(1.5)"),



      function (e, r) {
        v.tree().nodeSize([B, V])(a),
        d3.tree().nodeSize([nodeSizeX, nodeSizeY])(topLayout);

        Z.attr("transform", "translate(0, " + (F / 2 + se) + ")");
        var i = topa.descendants();
        r || (r = {
          x0: i[0].x,
          y0: e - i[0].y,
          x: i[0].x,
          y: e - i[0].y
        }),
        i.forEach(function (t) {
          t.y = e - t.y,
          t.data.identifier === r.identifier && (r.x = t.x, r.y = t.y),
          t.x < 0 && t.x < de && (de = t.x)
        }),
        t(Z.select(".topGLinks"), a, -1, r),
        n_node(Z.select(".topGNodes"), i, -1, r)
      }(ae, e), // ae




      function (e, r, i) {
      v.tree().nodeSize([B, V])(bottom_o), Q.attr("transform", "translate(0, " + (r + F / 2 + se) + ")");
      var a = bottom_o.descendants();
        i || (i = {
          x0: a[0].x,
          y0: a[0].y,
          x: a[0].x,
          y: a[0].y
        }), a.forEach(function (e) {
          e.data.identifier === i.identifier && (i.x = e.x, i.y = e.y), e.x < 0 && e.x < de && (de = e.x)
          }),
          t(Q.select(".bottomGLinks"), bottom_o, 1, i),
          n_node(Q.select(".bottomGNodes"), a, 1, i)
      }(0, ae, e),
      function () { // (V)
        var e = v.hierarchy(ee),
          t = $.select(".centerG").attr("transform", "translate(0, " + (ae + F / 2 + se) + ")"),
          n = ee.name,
          r = f(n, q),
          i = r + 30;
          - i / 2 < de - z / 2 && (de = (z - i) / 2);
        var a = t.selectAll("rect").data(e.descendants()).enter();
        a.append("svg:rect").attr("x", -i / 2).attr("y", -Y / 2).attr("width", i).attr("height", Y).style("fill", A).attr("rx", "3px").attr("ry", "3px"), a.append("svg:text").attr("x", 0).attr("text-anchor", "middle").attr("dy", "0.35em").text(function (e) {
          return e.data.name
        }).style("font-size", q + "px").style("cursor", "pointer").attr("fill", "#ffffff").on("click", pe)
      }()
  }

  // 缩放(V)
  function s() {
    J = v.zoom().scaleExtent([.5, 2]).on("zoom", function () {
      K = v.event.transform.k;
      $.attr("transform", "translate(" + (le + ce) + "," + fe + ")scale(" + K + ")")
    });
    var e = v.drag().on("drag", function () {
      ce += v.event.dx, fe += v.event.dy, $.attr("transform", "translate(" + (le + ce) + "," + fe + ")scale(" + K + ")")
    });
    W.call(e)
  }

  function l(e) {
    var t = (K + e).toFixed(1);
    t >= .5 && t <= 2 && (K = t, J.scaleTo(W, K))
  }

  // 计算深度(V)
  function c(e) {
    var t = 0,
      n = !0,
      r = !1,
      i = void 0;
    try {
      for (var a, o = e[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
        var u = a.value,
          s = u.depth;
        s > t && (t = s)
      }
    } catch (e) {
      r = !0, i = e
    } finally {
      try {
        !n && o.return && o.return()
      } finally {
        if (r) throw i
      }
    }
    return {
      maxDepth: t
    }
  }

  // 计算节点内容长度(V)
  function f(e, t) {
    var n = 0;
    if (t = t || 14, e && e.length > 0) {
      var r = 0,
        i = 0,
        a = 0,
        o = 0,
        u = e.match(/[0-9]/g),
        s = e.match(/[.:,\s()]/g),
        l = e.match(/[a-z]/g),
        c = e.match(/[A-Z]/g);
      u && (r = u.length, n += 8.2 * r),
      s && (i = s.length, n += 3.2 * i),
      l && (a = l.length, n += 7.54 * a),
      c && (o = c.length, n += 9.35 * o),
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

  // 获取子元素(V)
  var h = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
    p = n(395),
    v = function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }(p),
    y = n(1765),
    m = i(y),
    g = n(1766),
    b = i(g),
    _ = n(7),
    x = i(_),
    w = 1,
    P = "#979797",
    M = "#333333",
    O = 14,
    E = 12,
    j = 7,
    S = 10,
    k = 12,
    C = "#65A1EA",
    T = 1,
    N = "#D6D6D6",
    D = 4,
    A = "#65A1EA",
    L = "#F0A23A",
    I = 20,
    R = 7,
    B = 150,
    V = 200,
    z = 132,
    F = 64,
    q = 17,
    Y = 40,
    X = 2,
    H = 500,
    U = "",
    W = null,
    $ = null,
    G = null,
    Z = null,
    Q = null,
    J = null,
    K = 1,
    rootData = {}, // ee
    topData = {},
    bottomData = {},
    re = 0,
    ie = 0,
    ae = void 0,
    oe = void 0,
    ue = !1,
    se = 100,
    le = 0,
    ce = 0,
    fe = 0,
    de = 0,
    he = 0,
    pe = null,
    ve = null
  t.default = {
    /**
     * page: 27695
     * e: 'divNewNetwork' 字符串
     * t: treeData 数据
     * n: nodeClickEvent 节点点击事件
     * r: nodeToggleEvent
     * ?: isFullScreen 是否全屏
     */
    init: function (e, t, n, r) {
      var i = t.pTrees,
        u = t.cTrees,
        s = a(t, ["pTrees", "cTrees"]),
        // 有可能是一个修改或者下载属性判断
        l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      K = 1, ce = 0, fe = 0, U = "#" + e, rootData = s, topData = h({}, rootData, {
        children: i
      }), bottomData = h({}, rootData, {
        children: u
      }), pe = n, ve = r, ue = l, o()
    },
    scaleChart: function (e) {
      l(.1 * e)
    },
    resizeChart: function (e) {
      re = r(U).width(), ue === e ? (le = re / 2, $.attr("transform", "translate(" + (le + ce) + ", " + fe + ")scale(" + K + ")"), G.attr("transform", "translate(" + (le - 141) + ", " + (ae + se - Y - 30) + ")scale(1.5)")) : (ue = e, K = 1, ce = 0, fe = 0, u())
    },
    resetChart: function () {
      K = 1, ce = 0, fe = 0, u()
    },
    saveAsPng: function () {
      var e = function () {
        var e = r("#structureChart").clone();
        e.find("#structureChartLogo").attr("transform", "translate(-141, " + (i / 2 - 53.25 + se / 2) + ")scale(1.5)"), e.find("#structureChartContainer").attr("transform", null), m.default.saveSvgAsPng(e[0], ee.name + "股权结构.png", {
          canvg: b.default,
          backgroundColor: "#fff",
          width: n + 2 * se,
          height: i + 2 * se,
          left: de - se - z / 2,
          top: 0,
          scale: K
        })
      },
        t = document.getElementById("structureChartContainer").getBBox(),
        n = t.width,
        i = t.height;
      if (n * i > 25e6) return void x.default.bootbox.dialog({
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
  }, e.exports = t.default
}
