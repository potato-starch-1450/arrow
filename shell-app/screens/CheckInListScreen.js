module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]),
      n = r(d[1]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = void 0;
  var l = t(r(d[2])),
      o = t(r(d[3])),
      u = t(r(d[4])),
      c = t(r(d[5])),
      f = t(r(d[6])),
      s = t(r(d[7])),
      _ = r(d[8]),
      N = r(d[9]),
      h = r(d[10]),
      b = r(d[11]),
      y = r(d[12]),
      p = n(r(d[13])),
      k = n(r(d[14])),
      E = "/Users/linyiting/Desktop/Arrow/arrow/screens/CheckInListScreen.js",
      v = (function(t) {
          function n() {
              var t, o;
              (0, l.default)(this, n);
              for (var f = arguments.length, b = new Array(f), y = 0; y < f; y++) b[y] = arguments[y];
              return (o = (0, u.default)(this, (t = (0, c.default)(n)).call.apply(t, [this].concat(b)))).renderBadgeItem = function(t, n) {
                  var l = "#ffc425";
                  return 1 == t ? l = "#C0C0C0" : 2 == t && (l = "#8d635a"), s.default.createElement(N.ListItem, {
                      containerStyle: {
                          borderRadius: 20,
                          marginVertical: 5,
                          marginHorizontal: 10,
                          borderColor: '#f5f5f5',
                          borderWidth: 2
                      },
                      title: n.name,
                      rightElement: function() {
                          return s.default.createElement(_.View, {
                              style: {
                                  flexDirection: 'row',
                                  alignItems: 'center'
                              },
                              __source: {
                                  fileName: E,
                                  lineNumber: 34
                              }
                          }, s.default.createElement(_.Text, {
                              style: {
                                  color: l,
                                  fontWeight: '700',
                                  fontSize: 24
                              },
                              __source: {
                                  fileName: E,
                                  lineNumber: 35
                              }
                          }, n.score), s.default.createElement(_.Text, {
                              style: {
                                  paddingLeft: 5
                              },
                              __source: {
                                  fileName: E,
                                  lineNumber: 36
                              }
                          }, "\u5206"))
                      },
                      leftElement: function() {
                          return s.default.createElement(h.FontAwesome, {
                              name: "trophy",
                              color: l,
                              size: 24,
                              __source: {
                                  fileName: E,
                                  lineNumber: 40
                              }
                          })
                      },
                      __source: {
                          fileName: E,
                          lineNumber: 29
                      }
                  })
              }, o.renderItem = function(t) {
                  var n = t.item,
                      l = t.index;
                  return l < 3 ? o.renderBadgeItem(l, n) : s.default.createElement(N.ListItem, {
                      containerStyle: {
                          borderRadius: 20,
                          marginVertical: 5,
                          marginHorizontal: 10
                      },
                      title: n.name,
                      rightElement: function() {
                          return s.default.createElement(_.View, {
                              style: {
                                  flexDirection: 'row',
                                  alignItems: 'center'
                              },
                              __source: {
                                  fileName: E,
                                  lineNumber: 54
                              }
                          }, s.default.createElement(_.Text, {
                              style: {
                                  color: 'black',
                                  fontWeight: '500',
                                  fontSize: 18
                              },
                              __source: {
                                  fileName: E,
                                  lineNumber: 55
                              }
                          }, n.score), s.default.createElement(_.Text, {
                              style: {
                                  paddingLeft: 5
                              },
                              __source: {
                                  fileName: E,
                                  lineNumber: 56
                              }
                          }, "\u5206"))
                      },
                      __source: {
                          fileName: E,
                          lineNumber: 49
                      }
                  })
              }, o
          }
          return (0, f.default)(n, t), (0, o.default)(n, [{
              key: "componentDidMount",
              value: function() {
                  this.props.fetchCheckInList(this.props.authToken)
              }
          }, {
              key: "componentDidUpdate",
              value: function() {
                  k.trackScreen(k.checkinListScreen)
              }
          }, {
              key: "renderList",
              value: function() {
                  return this.props.checkInList ? s.default.createElement(_.View, {
                      __source: {
                          fileName: E,
                          lineNumber: 69
                      }
                  }, s.default.createElement(_.Text, {
                      style: {
                          padding: 10,
                          fontSize: 18,
                          fontWeight: '700',
                          backgroundColor: '#f5f5f5'
                      },
                      __source: {
                          fileName: E,
                          lineNumber: 70
                      }
                  }, "\u500b\u4eba\u652f\u6301\u5ea6\u6392\u884c"), s.default.createElement(_.FlatList, {
                      keyExtractor: function(t) {
                          return t._id.toString()
                      },
                      data: this.props.checkInList,
                      renderItem: this.renderItem,
                      __source: {
                          fileName: E,
                          lineNumber: 71
                      }
                  })) : s.default.createElement(_.View, {
                      style: {
                          flex: 1
                      },
                      __source: {
                          fileName: E,
                          lineNumber: 80
                      }
                  }, s.default.createElement(_.ActivityIndicator, {
                      size: "large",
                      __source: {
                          fileName: E,
                          lineNumber: 81
                      }
                  }))
              }
          }, {
              key: "render",
              value: function() {
                  return s.default.createElement(_.View, {
                      style: {
                          flex: 1,
                          paddingBottom: 50
                      },
                      __source: {
                          fileName: E,
                          lineNumber: 89
                      }
                  }, this.renderList())
              }
          }]), n
      })(s.default.Component);
  var I = (0, y.connect)(function(t, n) {
      return {
          loading: t.user.loading,
          checkInList: t.user.checkInList,
          authToken: t.auth.serverToken
      }
  }, p)((0, b.withNavigation)(v));
  e.default = I
}