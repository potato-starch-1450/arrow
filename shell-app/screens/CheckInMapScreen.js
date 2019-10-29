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
      p = t(r(d[8])),
      y = r(d[9]),
      h = n(r(d[10])),
      v = r(d[11]),
      b = r(d[12]),
      _ = t(r(d[13])),
      N = r(d[14]),
      w = r(d[15]),
      O = n(r(d[16])),
      E = t(r(d[17])),
      k = n(r(d[18])),
      S = "/Users/linyiting/Desktop/Arrow/arrow/screens/CheckInMapScreen.js";

  function L(t, n) {
      var l = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          n && (o = o.filter(function(n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable
          })), l.push.apply(l, o)
      }
      return l
  }
  var j = y.Dimensions.get('window'),
      I = r(d[19]),
      D = {
          levelone: E.default.koreanfishblue,
          leveltwo: E.default.lightblue,
          levelthree: E.default.lightcyan,
          levelfour: E.default.lightgray,
          levelfive: E.default.darkgray
      },
      x = (function(t) {
          function n() {
              var t, l;
              (0, o.default)(this, n);
              for (var u = arguments.length, s = new Array(u), h = 0; h < u; h++) s[h] = arguments[h];
              return (l = (0, c.default)(this, (t = (0, f.default)(n)).call.apply(t, [this].concat(s)))).state = {
                  mapOverlay: null
              }, l.renderBadgeItem = function(t, n) {
                  var l = "#ffc425";
                  return 1 == t ? l = "#C0C0C0" : 2 == t && (l = "#8d635a"), p.default.createElement(v.ListItem, {
                      containerStyle: {
                          borderRadius: 20,
                          marginVertical: 5,
                          marginHorizontal: 10
                      },
                      title: n.city,
                      rightElement: function() {
                          return p.default.createElement(y.View, {
                              style: {
                                  flexDirection: 'row',
                                  alignItems: 'center'
                              },
                              __source: {
                                  fileName: S,
                                  lineNumber: 44
                              }
                          }, p.default.createElement(y.Text, {
                              style: {
                                  color: l,
                                  fontWeight: '700',
                                  fontSize: 24
                              },
                              __source: {
                                  fileName: S,
                                  lineNumber: 45
                              }
                          }, n.count), p.default.createElement(y.Text, {
                              style: {
                                  paddingLeft: 5
                              },
                              __source: {
                                  fileName: S,
                                  lineNumber: 46
                              }
                          }, "\u5206"))
                      },
                      leftElement: function() {
                          return p.default.createElement(b.FontAwesome, {
                              name: "trophy",
                              color: l,
                              size: 24,
                              __source: {
                                  fileName: S,
                                  lineNumber: 50
                              }
                          })
                      },
                      __source: {
                          fileName: S,
                          lineNumber: 39
                      }
                  })
              }, l.renderItem = function(t) {
                  var n = t.item,
                      o = t.index;
                  return o < 3 ? l.renderBadgeItem(o, n) : p.default.createElement(v.ListItem, {
                      containerStyle: {
                          borderRadius: 20,
                          marginVertical: 5,
                          marginHorizontal: 10
                      },
                      title: n.city,
                      rightElement: function() {
                          return p.default.createElement(y.View, {
                              style: {
                                  flexDirection: 'row',
                                  alignItems: 'center'
                              },
                              __source: {
                                  fileName: S,
                                  lineNumber: 64
                              }
                          }, p.default.createElement(y.Text, {
                              style: {
                                  color: 'black',
                                  fontWeight: '500',
                                  fontSize: 18
                              },
                              __source: {
                                  fileName: S,
                                  lineNumber: 65
                              }
                          }, n.count), p.default.createElement(y.Text, {
                              style: {
                                  paddingLeft: 5
                              },
                              __source: {
                                  fileName: S,
                                  lineNumber: 66
                              }
                          }, "\u5206"))
                      },
                      __source: {
                          fileName: S,
                          lineNumber: 59
                      }
                  })
              }, l
          }
          return (0, s.default)(n, t), (0, u.default)(n, [{
              key: "renderList",
              value: function() {
                  return this.props.locationList ? p.default.createElement(y.View, {
                      __source: {
                          fileName: S,
                          lineNumber: 80
                      }
                  }, p.default.createElement(y.Text, {
                      style: {
                          padding: 10,
                          fontSize: 18,
                          fontWeight: '700',
                          backgroundColor: '#f5f5f5'
                      },
                      __source: {
                          fileName: S,
                          lineNumber: 81
                      }
                  }, "\u5730\u5340\u652f\u6301\u5ea6\u6392\u884c"), p.default.createElement(y.FlatList, {
                      keyExtractor: function(t) {
                          return t.city.toString()
                      },
                      data: _.default.values(this.props.locationList),
                      renderItem: this.renderItem,
                      __source: {
                          fileName: S,
                          lineNumber: 82
                      }
                  })) : p.default.createElement(y.ActivityIndicator, {
                      style: {
                          marginTop: 50
                      },
                      size: "large",
                      color: "#0000ff",
                      __source: {
                          fileName: S,
                          lineNumber: 91
                      }
                  })
              }
          }, {
              key: "componentDidMount",
              value: function() {
                  this.setState({
                      mapOverlay: I
                  }), this.props.fetchCheckInLocation(this.props.authToken), k.trackScreen(k.checkinMapScreen)
              }
          }, {
              key: "renderOverlay",
              value: function(t) {
                  var n = this;
                  if (this.state.mapOverlay && this.props.locationList) return this.state.mapOverlay.features.map(function(t) {
                      var l = {
                              type: "FeatureCollection",
                              features: [t]
                          },
                          o = n.props.locationList[t.properties.name],
                          u = D.levelfive;
                      return o && o.count > 0 && o.count <= 500 ? u = D.levelfour : o && o.count > 500 && o.count <= 1e4 ? u = D.levelthree : o && o.count > 1e4 && o.count <= 5e4 ? u = D.leveltwo : o && o.count > 5e4 && (u = D.levelone), p.default.createElement(h.Geojson, {
                          geojson: l,
                          fillColor: u,
                          key: t.properties.name,
                          __source: {
                              fileName: S,
                              lineNumber: 122
                          }
                      })
                  })
              }
          }, {
              key: "render",
              value: function() {
                  return p.default.createElement(y.ScrollView, {
                      style: {
                          flex: 1
                      },
                      __source: {
                          fileName: S,
                          lineNumber: 132
                      }
                  }, p.default.createElement(h.default, {
                      initialRegion: {
                          latitude: 23.973875,
                          longitude: 120.982024,
                          latitudeDelta: 3.8,
                          longitudeDelta: 1.5
                      },
                      style: {
                          height: .25 * j.height
                      },
                      showsUserLocation: !0,
                      __source: {
                          fileName: S,
                          lineNumber: 133
                      }
                  }, this.renderOverlay()), this.renderList())
              }
          }]), n
      })(p.default.Component);
  y.StyleSheet.create({
      wrapper: (function(t) {
          for (var n = 1; n < arguments.length; n++) {
              var o = null != arguments[n] ? arguments[n] : {};
              n % 2 ? L(o, !0).forEach(function(n) {
                  (0, l.default)(t, n, o[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : L(o).forEach(function(n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n))
              })
          }
          return t
      })({}, y.StyleSheet.absoluteFillObject, {
          top: 10
      })
  });
  var C = (0, w.connect)(function(t, n) {
      return {
          loading: t.user.loading,
          locationList: t.user.locationList,
          authToken: t.auth.serverToken
      }
  }, O)((0, N.withNavigation)(x));
  e.default = C
}