module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]),
      n = r(d[1]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = void 0;
  var u = t(r(d[2])),
      s = t(r(d[3])),
      l = t(r(d[4])),
      o = t(r(d[5])),
      f = t(r(d[6])),
      c = t(r(d[7])),
      v = t(r(d[8])),
      p = t(r(d[9])),
      h = r(d[10]),
      E = n(r(d[11])),
      _ = r(d[12]),
      y = n(r(d[13])),
      N = (function(t) {
          function n() {
              return (0, s.default)(this, n), (0, o.default)(this, (0, f.default)(n).apply(this, arguments))
          }
          return (0, c.default)(n, t), (0, l.default)(n, [{
              key: "render",
              value: function() {
                  return v.default.createElement(p.default, (0, u.default)({}, this.props, {
                      type: "past",
                      trackScreen: y.pastEventScreen,
                      __source: {
                          fileName: "/Users/linyiting/Desktop/Arrow/arrow/screens/PastEventScreen.js",
                          lineNumber: 11
                      }
                  }))
              }
          }]), n
      })(v.default.Component);
  var P = (0, h.connect)(function(t, n) {
      return {
          loading: t.pastEvent.loading,
          events: t.pastEvent.events,
          hasNextPage: t.pastEvent.hasNextPage
      }
  }, E)((0, _.withNavigation)(N));
  e.default = P
}