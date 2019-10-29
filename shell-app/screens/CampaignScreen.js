module.exports = function(g, r, i, a, m, e, d) {
  var n = r(d[0]),
      t = r(d[1]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = void 0;
  var u = n(r(d[2])),
      c = n(r(d[3])),
      l = n(r(d[4])),
      o = n(r(d[5])),
      f = n(r(d[6])),
      s = n(r(d[7])),
      p = n(r(d[8])),
      v = n(r(d[9])),
      h = r(d[10]),
      _ = t(r(d[11])),
      y = r(d[12]),
      N = t(r(d[13])),
      k = (function(n) {
          function t() {
              return (0, c.default)(this, t), (0, o.default)(this, (0, f.default)(t).apply(this, arguments))
          }
          return (0, s.default)(t, n), (0, l.default)(t, [{
              key: "render",
              value: function() {
                  return p.default.createElement(v.default, (0, u.default)({}, this.props, {
                      type: "campaign",
                      trackScreen: N.campaignScreen,
                      __source: {
                          fileName: "/Users/linyiting/Desktop/Arrow/arrow/screens/CampaignScreen.js",
                          lineNumber: 11
                      }
                  }))
              }
          }]), t
      })(p.default.Component);
  var w = (0, h.connect)(function(n) {
      return {
          loading: n.campaign.loading,
          events: n.campaign.campaigns,
          hasNextPage: n.campaign.hasNextPage
      }
  }, _)((0, y.withNavigation)(k));
  e.default = w
}