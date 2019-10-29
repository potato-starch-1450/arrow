module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]),
      n = r(d[1]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = void 0;
  var o = t(r(d[2])),
      l = t(r(d[3])),
      u = t(r(d[4])),
      c = t(r(d[5])),
      s = t(r(d[6])),
      f = t(r(d[7])),
      h = r(d[8]),
      p = r(d[9]),
      b = r(d[10]),
      _ = r(d[11]),
      N = n(r(d[12])),
      y = (r(d[13]), t(r(d[14]))),
      k = n(r(d[15])),
      v = "/Users/linyiting/Desktop/Arrow/arrow/screens/ProfileScreen.js",
      C = (function(t) {
          function n() {
              var t, l;
              (0, o.default)(this, n);
              for (var s = arguments.length, f = new Array(s), h = 0; h < s; h++) f[h] = arguments[h];
              return (l = (0, u.default)(this, (t = (0, c.default)(n)).call.apply(t, [this].concat(f)))).state = {
                  text: ''
              }, l
          }
          return (0, s.default)(n, t), (0, l.default)(n, [{
              key: "componentDidMount",
              value: function() {
                  this.props.fetchSelfProfile(this.props.authToken)
              }
          }, {
              key: "componentDidUpdate",
              value: function(t, n) {
                  t.authToken !== this.props.authToken && this.props.fetchSelfProfile(this.props.authToken), k.trackScreen(k.profileScreen)
              }
          }, {
              key: "renderFacebookLogin",
              value: function() {
                  var t = this;
                  if (!this.props.user) return f.default.createElement(p.SocialIcon, {
                      title: "\u767b\u5165 Facebook",
                      button: !0,
                      onPress: function() {
                          try {
                              t.props.loginFacebook()
                          } catch (t) {}
                      },
                      type: "facebook",
                      __source: {
                          fileName: v,
                          lineNumber: 34
                      }
                  })
              }
          }, {
              key: "renderCountItem",
              value: function(t, n) {
                  return f.default.createElement(h.View, {
                      style: w.countItem,
                      __source: {
                          fileName: v,
                          lineNumber: 67
                      }
                  }, f.default.createElement(h.Text, {
                      style: w.description,
                      __source: {
                          fileName: v,
                          lineNumber: 68
                      }
                  }, t), f.default.createElement(h.Text, {
                      style: w.count,
                      __source: {
                          fileName: v,
                          lineNumber: 69
                      }
                  }, n))
              }
          }, {
              key: "render",
              value: function() {
                  return user = this.props.user || {
                      name: '\u97d3\u5bb6\u8ecd',
                      checkInCount: 0,
                      shareCount: 0
                  }, this.props.authToken ? f.default.createElement(h.ImageBackground, {
                      style: w.bg,
                      source: r(d[16]),
                      __source: {
                          fileName: v,
                          lineNumber: 86
                      }
                  }, f.default.createElement(h.View, {
                      __source: {
                          fileName: v,
                          lineNumber: 87
                      }
                  }, f.default.createElement(h.View, {
                      style: w.container,
                      __source: {
                          fileName: v,
                          lineNumber: 88
                      }
                  }, f.default.createElement(h.Image, {
                      style: w.idcardTop,
                      source: r(d[17]),
                      __source: {
                          fileName: v,
                          lineNumber: 89
                      }
                  })), f.default.createElement(h.View, {
                      style: w.card,
                      __source: {
                          fileName: v,
                          lineNumber: 91
                      }
                  }, f.default.createElement(h.View, {
                      style: w.body,
                      __source: {
                          fileName: v,
                          lineNumber: 92
                      }
                  }, f.default.createElement(h.Image, {
                      style: w.avatar,
                      PlaceholderContent: f.default.createElement(h.ActivityIndicator, {
                          __source: {
                              fileName: v,
                              lineNumber: 94
                          }
                      }),
                      source: {
                          uri: user.picture || 'https://bootdey.com/img/Content/avatar/avatar6.png'
                      },
                      __source: {
                          fileName: v,
                          lineNumber: 94
                      }
                  }), f.default.createElement(h.View, {
                      style: w.bodyContent,
                      __source: {
                          fileName: v,
                          lineNumber: 95
                      }
                  }, f.default.createElement(h.Text, {
                      style: w.name,
                      __source: {
                          fileName: v,
                          lineNumber: 96
                      }
                  }, user.name), this.renderCountItem('\u7e3d\u7a4d\u5206', user.checkInCount + user.shareCount), this.renderCountItem('\u7c3d\u5230\u6b21\u6578', user.checkInCount), this.renderCountItem('\u8072\u63f4\u6b21\u6578', user.shareCount)))), this.renderFacebookLogin(), f.default.createElement(h.View, {
                      style: w.container,
                      __source: {
                          fileName: v,
                          lineNumber: 106
                      }
                  }, f.default.createElement(h.Image, {
                      style: w.man,
                      source: r(d[18]),
                      resizeMode: "contain",
                      __source: {
                          fileName: v,
                          lineNumber: 107
                      }
                  })))) : f.default.createElement(y.default, {
                      __source: {
                          fileName: v,
                          lineNumber: 82
                      }
                  })
              }
          }]), n
      })(f.default.Component);
  C.navigationOptions = {
      title: '\u6211\u662f\u97d3\u5bb6\u8ecd'
  };
  var w = h.StyleSheet.create({
      bg: {
          flex: 1,
          paddingVertical: 10,
          backgroundColor: 'white'
      },
      container: {
          alignItems: 'center'
      },
      card: {
          borderRadius: 15,
          margin: 5,
          marginTop: 0,
          borderColor: "#0763c0",
          borderWidth: 10
      },
      idcardTop: {
          width: 110,
          height: 60,
          marginTop: 20
      },
      man: {
          width: 139,
          height: 230
      },
      avatar: {
          width: 120,
          height: 130,
          borderRadius: 10,
          borderWidth: 6,
          borderColor: "red",
          marginBottom: 10,
          marginTop: 40,
          marginLeft: 10
      },
      rank: {
          fontSize: 24,
          color: "#0763c0",
          fontWeight: '600',
          marginBottom: 15
      },
      name: {
          fontSize: 28,
          color: "#0763c0",
          fontWeight: '600'
      },
      body: {
          marginTop: 5,
          flexDirection: 'row'
      },
      bodyContent: {
          flex: 1,
          marginTop: 5,
          padding: 30
      },
      info: {
          fontSize: 16,
          color: "#00BFFF",
          marginTop: 10
      },
      description: {
          fontSize: 16,
          color: "#696969",
          marginTop: 10
      },
      count: {
          fontSize: 22
      },
      buttonContainer: {
          marginTop: 10,
          height: 45,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
          width: 250,
          borderRadius: 30,
          backgroundColor: "#00BFFF"
      },
      countItem: {
          flexDirection: "row",
          justifyContent: 'space-between',
          alignItems: 'center'
      }
  });
  var T = (0, _.connect)(function(t, n) {
      return {
          loading: t.user.loading,
          user: t.user.user,
          authToken: t.auth.serverToken
      }
  }, N)((0, b.withNavigation)(C));
  e.default = T
}