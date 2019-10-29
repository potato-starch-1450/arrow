module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]),
      n = r(d[1]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = void 0;
  var l = t(r(d[2])),
      o = t(r(d[3])),
      s = t(r(d[4])),
      u = t(r(d[5])),
      c = t(r(d[6])),
      f = t(r(d[7])),
      p = r(d[8]),
      h = r(d[9]),
      y = (r(d[10]), r(d[11])),
      v = r(d[12]),
      b = t(r(d[13])),
      _ = n(r(d[14])),
      L = n(r(d[15])),
      N = t(r(d[16])),
      S = "/Users/linyiting/Desktop/Arrow/arrow/screens/AllyListScreen.js",
      k = (function(t) {
          function n(t) {
              var o;
              return (0, l.default)(this, n), (o = (0, s.default)(this, (0, u.default)(n).call(this, t))).renderItem = function(t) {
                  var n = t.item;
                  return f.default.createElement(h.ListItem, {
                      title: n.name,
                      subtitle: n.desc,
                      subtitleStyle: {
                          color: 'gray'
                      },
                      leftAvatar: {
                          title: n.name
                      },
                      rightElement: f.default.createElement(p.TouchableOpacity, {
                          onPress: function() {
                              L.trackActionWithProperty(L.clickSupportAlly, {
                                  ally: n.name
                              });
                              var t, l = n.url.split('/'),
                                  o = N.default.last(l);
                              t = 'ios' === p.Platform.OS ? "fb://page/?id=" + o : "fb://page/" + o, p.Linking.openURL(t)
                          },
                          style: {
                              borderRadius: 10,
                              backgroundColor: b.default.koreanfishblue
                          },
                          __source: {
                              fileName: S,
                              lineNumber: 44
                          }
                      }, f.default.createElement(p.Text, {
                          style: {
                              padding: 10,
                              fontSize: 16,
                              fontWeight: '600',
                              color: 'white'
                          },
                          __source: {
                              fileName: S,
                              lineNumber: 57
                          }
                      }, "\u524d\u5f80\u6309\u8b9a")),
                      onPress: function() {
                          L.trackActionWithProperty(L.clickSupportAlly, {
                              ally: n.name
                          });
                          var t, l = n.url.split('/'),
                              o = N.default.last(l);
                          t = 'ios' === p.Platform.OS ? "fb://page/?id=" + o : "fb://page/" + o, p.Linking.openURL(t)
                      },
                      __source: {
                          fileName: S,
                          lineNumber: 38
                      }
                  })
              }, o.renderFooter = function() {
                  var t = null;
                  return o.props.loading && 0 !== o.props.allyList.length && (t = f.default.createElement(p.View, {
                      style: E.footerStyle,
                      __source: {
                          fileName: S,
                          lineNumber: 80
                      }
                  }, f.default.createElement(p.ActivityIndicator, {
                      size: "large",
                      color: "#FFFFFF",
                      __source: {
                          fileName: S,
                          lineNumber: 81
                      }
                  }))), t
              }, o.onEndReached = function(t) {
                  t.distanceFromEnd >= 0 && o.setState(function(t) {
                      return {
                          page: t.page + 1
                      }
                  }, function() {
                      o.props.hasNextPage && o.props.fetchAllyList(o.state.page, !1)
                  })
              }, o.state = {
                  page: 0
              }, o
          }
          return (0, c.default)(n, t), (0, o.default)(n, [{
              key: "componentDidMount",
              value: function() {
                  this.props.fetchAllyList(0, !0)
              }
          }, {
              key: "componentDidUpdate",
              value: function() {
                  L.trackScreen(L.allyListScreen)
              }
          }, {
              key: "renderList",
              value: function() {
                  var t = this;
                  return f.default.createElement(p.FlatList, {
                      style: {
                          flex: 1
                      },
                      keyExtractor: function(t) {
                          return t._id.toString()
                      },
                      data: this.props.allyList,
                      renderItem: this.renderItem,
                      refreshing: this.props.loading,
                      onRefresh: function() {
                          t.setState(function(t) {
                              return {
                                  page: 0
                              }
                          }, function() {
                              t.props.fetchAllyList(t.state.page, !0)
                          })
                      },
                      onEndReached: this.onEndReached.bind(this),
                      onEndReachedThreshold: .1,
                      ListFooterComponent: this.renderFooter,
                      __source: {
                          fileName: S,
                          lineNumber: 103
                      }
                  })
              }
          }, {
              key: "render",
              value: function() {
                  return f.default.createElement(p.View, {
                      style: {
                          flex: 1
                      },
                      __source: {
                          fileName: S,
                          lineNumber: 124
                      }
                  }, this.renderList())
              }
          }]), n
      })(f.default.Component);
  k.navigationOptions = function(t) {
      t.navigation;
      return {
          title: '\u97d3\u5bb6\u8ecd\u540d\u518a'
      }
  };
  var E = p.StyleSheet.create({
      footerStyle: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          height: 44
      }
  });
  var A = (0, v.connect)(function(t, n) {
      return {
          loading: t.support.loading,
          allyList: t.support.allyList,
          hasNextPage: t.support.hasNextPage
      }
  }, _)((0, y.withNavigation)(k));
  e.default = A
}