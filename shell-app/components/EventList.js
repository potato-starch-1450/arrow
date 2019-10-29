module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]),
      n = r(d[1]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = void 0;
  var o = t(r(d[2])),
      s = t(r(d[3])),
      l = t(r(d[4])),
      u = t(r(d[5])),
      c = t(r(d[6])),
      f = t(r(d[7])),
      p = r(d[8]),
      h = (r(d[9]), t(r(d[10]))),
      v = (r(d[11]), r(d[12]), n(r(d[13])), r(d[14]), r(d[15])),
      _ = n(r(d[16])),
      y = "/Users/linyiting/Desktop/Arrow/arrow/components/EventList.js",
      E = (function(t) {
          function n(t) {
              var s;
              return (0, o.default)(this, n), (s = (0, l.default)(this, (0, u.default)(n).call(this, t))).renderItem = function(t) {
                  var n = t.item;
                  return f.default.createElement(h.default, {
                      item: n,
                      onPress: function(t) {
                          _.trackActionWithProperty(_.clickEvent, {
                              event: n._id
                          }), s.props.navigation.navigate('EventDetail', {
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
                          lineNumber: 33
                      }
                  })
              }, s.renderFooter = function() {
                  var t = null;
                  return s.props.loading && 0 !== s.props.events.length && (t = f.default.createElement(p.View, {
                      style: N.footerStyle,
                      __source: {
                          fileName: y,
                          lineNumber: 76
                      }
                  }, f.default.createElement(p.ActivityIndicator, {
                      size: "large",
                      color: "#FFFFFF",
                      __source: {
                          fileName: y,
                          lineNumber: 77
                      }
                  }))), t
              }, s.onEndReached = function(t) {
                  t.distanceFromEnd >= 0 && s.setState(function(t) {
                      return {
                          page: t.page + 1
                      }
                  }, function() {
                      s.props.hasNextPage && s.props.fetchEvents(s.state.page, !1, s.props.type)
                  })
              }, s.state = {
                  page: 0
              }, s
          }
          return (0, c.default)(n, t), (0, s.default)(n, [{
              key: "componentDidMount",
              value: function() {
                  this.props.fetchEvents(0, !0, this.props.type)
              }
          }, {
              key: "componentDidUpdate",
              value: function(t, n) {
                  _.trackScreen(this.props.trackScreen)
              }
          }, {
              key: "render",
              value: function() {
                  var t = this;
                  return this.props.events && 0 == this.props.events.length ? f.default.createElement(p.View, {
                      style: {
                          flex: 1,
                          alignItems: 'center',
                          justifyContent: 'center'
                      },
                      __source: {
                          fileName: y,
                          lineNumber: 46
                      }
                  }, f.default.createElement(p.Text, {
                      style: {
                          fontSize: 20,
                          fontWeight: '700'
                      },
                      __source: {
                          fileName: y,
                          lineNumber: 47
                      }
                  }, "\u76ee\u524d\u6c92\u6709\u8cc7\u8a0a")) : f.default.createElement(v.Viewport.Tracker, {
                      __source: {
                          fileName: y,
                          lineNumber: 52
                      }
                  }, f.default.createElement(p.FlatList, {
                      keyExtractor: function(t) {
                          return t._id
                      },
                      data: this.props.events,
                      refreshing: this.props.loading,
                      renderItem: this.renderItem,
                      onRefresh: function() {
                          t.setState(function(t) {
                              return {
                                  page: 0
                              }
                          }, function() {
                              t.props.fetchEvents(t.state.page, !0, t.props.type)
                          })
                      },
                      onEndReached: this.onEndReached.bind(this),
                      onEndReachedThreshold: .3,
                      ListFooterComponent: this.renderFooter,
                      __source: {
                          fileName: y,
                          lineNumber: 53
                      }
                  }))
              }
          }]), n
      })(f.default.Component),
      N = p.StyleSheet.create({
          footerStyle: {
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              height: 44
          }
      }),
      b = E;
  e.default = b
}