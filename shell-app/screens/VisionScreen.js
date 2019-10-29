module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]),
      n = r(d[1]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = void 0;
  var o = t(r(d[2])),
      c = t(r(d[3])),
      s = t(r(d[4])),
      u = t(r(d[5])),
      h = t(r(d[6])),
      l = t(r(d[7])),
      f = r(d[8]),
      p = (r(d[9]), r(d[10]), t(r(d[11]))),
      v = r(d[12]),
      _ = n(r(d[13])),
      k = r(d[14]),
      N = r(d[15]),
      E = t(r(d[16])),
      b = (r(d[17]), n(r(d[18]))),
      y = "/Users/linyiting/Desktop/Arrow/arrow/screens/VisionScreen.js",
      A = (E.default.manifest.extra.shareUrl, 'vision'),
      S = (function(t) {
          function n(t) {
              var c;
              return (0, o.default)(this, n), (c = (0, s.default)(this, (0, u.default)(n).call(this, t))).renderItem = function(t) {
                  var n = t.item;
                  return l.default.createElement(p.default, {
                      item: n,
                      onPress: function(t) {
                          b.trackActionWithProperty(b.clickAchievement, {
                              achievement: n._id
                          }), c.props.navigation.navigate('AchievementDetail', {
                              data: n,
                              options: {
                                  bottomTabs: {
                                      visible: !1,
                                      drawBehind: !0,
                                      animate: !0
                                  }
                              }
                          })
                      },
                      __source: {
                          fileName: y,
                          lineNumber: 34
                      }
                  })
              }, c.onEndReached = function(t) {
                  t.distanceFromEnd >= 0 && c.setState(function(t) {
                      return {
                          page: t.page + 1
                      }
                  }, function() {
                      c.props.hasNextPage && c.props.fetchAchievements(c.state.page, !1, A)
                  })
              }, c.state = {
                  page: 0
              }, c
          }
          return (0, h.default)(n, t), (0, c.default)(n, [{
              key: "componentDidMount",
              value: function() {
                  this.props.fetchAchievements(this.state.page, !0, A)
              }
          }, {
              key: "componentDidUpdate",
              value: function(t, n) {
                  b.trackScreen(b.visionScreen)
              }
          }, {
              key: "render",
              value: function() {
                  var t = this;
                  return l.default.createElement(N.Viewport.Tracker, {
                      __source: {
                          fileName: y,
                          lineNumber: 45
                      }
                  }, l.default.createElement(f.FlatList, {
                      keyExtractor: function(t) {
                          return t._id
                      },
                      data: this.props.achievements,
                      refreshing: this.props.loading,
                      renderItem: this.renderItem,
                      onRefresh: function() {
                          t.setState(function(t) {
                              return {
                                  page: 0
                              }
                          }, function() {
                              t.props.fetchAchievements(t.state.page, !0, A)
                          })
                      },
                      onEndReached: this.onEndReached.bind(this),
                      onEndReachedThreshold: .3,
                      __source: {
                          fileName: y,
                          lineNumber: 46
                      }
                  }))
              }
          }]), n
      })(l.default.Component);
  f.StyleSheet.create({});
  var P = (0, v.connect)(function(t) {
      return {
          authToken: t.auth.serverToken,
          loading: t.achievement.loading,
          achievements: t.achievement.achievements,
          hasNextPage: t.achievement.hasNextPage
      }
  }, _)((0, k.withNavigation)(S));
  e.default = P
}