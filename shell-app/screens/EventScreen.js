module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]),
      n = r(d[1]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = void 0;
  var u = t(r(d[2])),
      l = t(r(d[3])),
      o = t(r(d[4])),
      f = t(r(d[5])),
      s = t(r(d[6])),
      c = t(r(d[7])),
      v = t(r(d[8])),
      p = t(r(d[9])),
      h = r(d[10]),
      _ = n(r(d[11])),
      y = r(d[12]),
      N = n(r(d[13])),
      k = (function(t) {
          function n() {
              return (0, l.default)(this, n), (0, f.default)(this, (0, s.default)(n).apply(this, arguments))
          }
          return (0, c.default)(n, t), (0, o.default)(n, [{
              key: "render",
              value: function() {
                  return v.default.createElement(p.default, (0, u.default)({}, this.props, {
                      type: "event",
                      trackScreen: N.eventScreen,
                      __source: {
                          fileName: "/Users/linyiting/Desktop/Arrow/arrow/screens/EventScreen.js",
                          lineNumber: 11
                      }
                  }))
              }
          }]), n
      })(v.default.Component);
  var w = (0, h.connect)(function(t, n) {
      return {
          loading: t.event.loading,
          events: t.event.events,
          hasNextPage: t.event.hasNextPage
      }
  }, _)((0, y.withNavigation)(k));
  e.default = w
}