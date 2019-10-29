module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]),
      n = r(d[1]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = void 0;
  var o = t(r(d[2])),
      u = t(r(d[3])),
      l = t(r(d[4])),
      c = t(r(d[5])),
      s = t(r(d[6])),
      f = t(r(d[7])),
      p = r(d[8]),
      h = r(d[9]),
      w = n(r(d[10])),
      N = r(d[11]),
      y = n(r(d[12])),
      v = r(d[13]),
      b = "/Users/linyiting/Desktop/Arrow/arrow/screens/HomeScreen.js",
      S = [{
          name: '\u884c\u7a0b\u9020\u52e2',
          route: 'EventTour',
          image: r(d[14]),
          showNew: !0
      }, {
          name: '\u97d3\u5bb6\u8ecd\u540d\u518a',
          route: 'SupportListScreen',
          image: r(d[15]),
          showNew: !0
      }, {
          name: '\u9ed1\u97d3\u9000\u6563',
          route: 'EnemyList',
          image: r(d[16]),
          showNew: !0
      }, {
          name: '\u6700\u65b0\u633a\u97d3\u65b0\u805e',
          route: 'AllyList',
          image: r(d[17]),
          showNew: !0
      }, {
          name: '\u97d3\u5bb6\u8ecd\u7c3d\u5230',
          route: 'CheckInScreen',
          image: r(d[18])
      }, {
          name: '\u5e02\u653f\u8207\u570b\u653f',
          route: 'AchievementVisionScreen',
          image: r(d[19])
      }],
      _ = (function(t) {
          function n(t) {
              var u;
              return (0, o.default)(this, n), (u = (0, l.default)(this, (0, c.default)(n).call(this, t))).renderItem = function(t) {
                  var n = t.name,
                      o = t.route,
                      l = t.image,
                      c = t.showNew;
                  return f.default.createElement(p.TouchableOpacity, {
                      key: n,
                      style: k.button,
                      onPress: function() {
                          u.props.cleanNewData(o), u.props.navigation.navigate(o)
                      },
                      __source: {
                          fileName: b,
                          lineNumber: 71
                      }
                  }, f.default.createElement(p.Image, {
                      style: {
                          width: '90%',
                          height: '90%',
                          backgroundColor: 'transparent'
                      },
                      source: l,
                      resizeMode: "contain",
                      __source: {
                          fileName: b,
                          lineNumber: 75
                      }
                  }), f.default.createElement(p.Text, {
                      style: {
                          fontWeight: 'bold',
                          fontSize: 20,
                          paddingTop: 5
                      },
                      maxFontSizeMultiplier: 1,
                      __source: {
                          fileName: b,
                          lineNumber: 76
                      }
                  }, n), u.renderBadge(c, u.props.data[o]))
              }, u.renderButtons = function() {
                  return S.map(function(t) {
                      return u.renderItem(t)
                  })
              }, u.state = {}, u
          }
          return (0, s.default)(n, t), (0, u.default)(n, [{
              key: "componentDidMount",
              value: function() {
                  this.props.navigation.setParams({
                      cleanNewData: this.props.cleanNewData
                  }), this.props.fetchNewData()
              }
          }, {
              key: "componentDidUpdate",
              value: function() {
                  w.trackScreen(w.homeScreen)
              }
          }, {
              key: "renderBadge",
              value: function(t, n) {
                  if (t && n) return f.default.createElement(h.Badge, {
                      value: "New",
                      status: "error",
                      textStyle: {
                          fontSize: 12
                      },
                      badgeStyle: {
                          height: 35,
                          borderRadius: 100
                      },
                      containerStyle: {
                          position: 'absolute',
                          top: 10,
                          right: 5
                      },
                      __source: {
                          fileName: b,
                          lineNumber: 56
                      }
                  })
              }
          }, {
              key: "render",
              value: function() {
                  return f.default.createElement(p.ImageBackground, {
                      style: k.container,
                      source: r(d[20]),
                      __source: {
                          fileName: b,
                          lineNumber: 91
                      }
                  }, f.default.createElement(p.View, {
                      style: k.box,
                      __source: {
                          fileName: b,
                          lineNumber: 92
                      }
                  }, this.renderButtons()))
              }
          }]), n
      })(f.default.Component);
  _.navigationOptions = function(t) {
      var n = t.navigation;
      return {
          title: '\u4e00\u652f\u7a7f\u96f2\u7bad',
          headerRight: f.default.createElement(h.Icon, {
              iconStyle: {
                  paddingRight: 10
              },
              onPress: function() {
                  n.getParam('cleanNewData')('ProfileScreen'), n.navigate('ProfileScreen')
              },
              name: "person",
              type: "ionicons",
              color: "#575772",
              __source: {
                  fileName: b,
                  lineNumber: 25
              }
          })
      }
  };
  var k = p.StyleSheet.create({
      box: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center'
      },
      container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
      },
      button: {
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          width: '40%',
          height: '30%'
      }
  });
  var D = (0, N.connect)(function(t, n) {
      return {
          loading: t.new.loading,
          data: t.new.data
      }
  }, y)((0, v.withNavigation)(_));
  e.default = D
}