module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]),
      n = r(d[1]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = void 0;
  var u = t(r(d[2])),
      o = t(r(d[3])),
      f = t(r(d[4])),
      l = t(r(d[5])),
      c = t(r(d[6])),
      s = t(r(d[7])),
      v = t(r(d[8])),
      p = t(r(d[9])),
      h = r(d[10]),
      k = n(r(d[11])),
      _ = (function(t) {
          function n() {
              return (0, u.default)(this, n), (0, f.default)(this, (0, l.default)(n).apply(this, arguments))
          }
          return (0, c.default)(n, t), (0, o.default)(n, [{
              key: "componentDidMount",
              value: function() {
                  this.props.checkAuthToken()
              }
          }, {
              key: "render",
              value: function() {
                  return s.default.createElement(v.default, {
                      ref: function(t) {
                          p.default.setTopLevelNavigator(t)
                      },
                      __source: {
                          fileName: "/Users/linyiting/Desktop/Arrow/arrow/screens/RootScreen.js",
                          lineNumber: 16
                      }
                  })
              }
          }]), n
      })(s.default.Component);
  var y = (0, h.connect)(function(t, n) {
      return {
          authToken: t.auth.serverToken
      }
  }, k)(_);
  e.default = y
}