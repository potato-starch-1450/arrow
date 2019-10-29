module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]),
      n = r(d[1]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = void 0;
  var c = t(r(d[2])),
      o = t(r(d[3])),
      s = t(r(d[4])),
      u = t(r(d[5])),
      h = t(r(d[6])),
      l = t(r(d[7])),
      f = r(d[8]),
      v = (r(d[9]), r(d[10]), r(d[11])),
      p = n(r(d[12])),
      _ = r(d[13]),
      k = t(r(d[14])),
      N = (r(d[15]), r(d[16])),
      E = t(r(d[17])),
      b = n(r(d[18])),
      y = "/Users/linyiting/Desktop/Arrow/arrow/screens/AchievementScreen.js",
      A = (k.default.manifest.extra.shareUrl, 'achievement'),
      S = (function(t) {
          function n(t) {
              var o;
              return (0, c.default)(this, n), (o = (0, s.default)(this, (0, u.default)(n).call(this, t))).renderItem = function(t) {
                  var n = t.item;
                  return l.default.createElement(E.default, {
                      item: n,
                      onPress: function(t) {
                          b.trackActionWithProperty(b.clickAchievement, {
                              achievement: n._id
                          }), o.props.navigation.navigate('AchievementDetail', {
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
              }, o.onEndReached = function(t) {
                  t.distanceFromEnd >= 0 && o.setState(function(t) {
                      return {
                          page: t.page + 1
                      }
                  }, function() {
                      o.props.hasNextPage && o.props.fetchAchievements(o.state.page, !1, A)
                  })
              }, o.state = {
                  page: 0
              }, o
          }
          return (0, h.default)(n, t), (0, o.default)(n, [{
              key: "componentDidMount",
              value: function() {
                  this.props.fetchAchievements(this.state.page, !0, A)
              }
          }, {
              key: "componentDidUpdate",
              value: function(t, n) {
                  b.trackScreen(b.achievementScreen)
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
  }, p)((0, _.withNavigation)(S));
  e.default = P
}