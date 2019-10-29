module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]),
      n = r(d[1]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = void 0;
  var o = t(r(d[2])),
      l = t(r(d[3])),
      c = t(r(d[4])),
      u = t(r(d[5])),
      f = t(r(d[6])),
      s = t(r(d[7])),
      p = t(r(d[8])),
      b = r(d[9]),
      h = r(d[10]),
      _ = r(d[11]),
      N = r(d[12]),
      y = n(r(d[13])),
      S = (r(d[14]), n(r(d[15]))),
      k = "/Users/linyiting/Desktop/Arrow/arrow/screens/RequestLoginScreen.js",
      T = (function(t) {
          function n() {
              return (0, l.default)(this, n), (0, u.default)(this, (0, f.default)(n).apply(this, arguments))
          }
          return (0, s.default)(n, t), (0, c.default)(n, [{
              key: "componentDidUpdate",
              value: function() {
                  S.trackScreen(S.requestLoginScreen)
              }
          }, {
              key: "renderAppleLogin",
              value: function() {
                  var t = this;
                  if ('ios' === b.Platform.OS && parseInt(b.Platform.Version, 10) >= 13) return p.default.createElement(h.SocialIcon, {
                      title: "Sign In With Apple",
                      button: !0,
                      onPress: function() {
                          return o.default.async(function(n) {
                              for (;;) switch (n.prev = n.next) {
                                  case 0:
                                      t.props.loginApple();
                                  case 1:
                                  case "end":
                                      return n.stop()
                              }
                          })
                      },
                      __source: {
                          fileName: k,
                          lineNumber: 20
                      }
                  })
              }
          }, {
              key: "renderFacebookLogin",
              value: function() {
                  var t = this;
                  return p.default.createElement(h.SocialIcon, {
                      title: "\u767b\u5165 Facebook",
                      button: !0,
                      onPress: function() {
                          try {
                              S.trackAction(S.clickSigninWithFacebookRequestLogin), t.props.loginFacebook()
                          } catch (t) {}
                      },
                      type: "facebook",
                      __source: {
                          fileName: k,
                          lineNumber: 32
                      }
                  })
              }
          }, {
              key: "render",
              value: function() {
                  return p.default.createElement(b.ImageBackground, {
                      style: w.bg,
                      source: r(d[16]),
                      __source: {
                          fileName: k,
                          lineNumber: 50
                      }
                  }, p.default.createElement(b.ScrollView, {
                      __source: {
                          fileName: k,
                          lineNumber: 51
                      }
                  }, p.default.createElement(b.View, {
                      style: {
                          padding: 20
                      },
                      __source: {
                          fileName: k,
                          lineNumber: 52
                      }
                  }, p.default.createElement(b.Text, {
                      style: {
                          fontSize: 28,
                          fontWeight: '600'
                      },
                      __source: {
                          fileName: k,
                          lineNumber: 53
                      }
                  }, "\u900f\u904e\u8a3b\u518a\uff0c\u80fd\u4f7f\u7528\u66f4\u5b8c\u6574\u7684\u529f\u80fd\uff0c\u64ca\u6f70\u9ed1\u97d3\u7522\u696d\u93c8\uff01"), p.default.createElement(b.View, {
                      style: {
                          padding: 20
                      },
                      __source: {
                          fileName: k,
                          lineNumber: 54
                      }
                  }, p.default.createElement(b.Text, {
                      style: {
                          fontSize: 20,
                          fontWeight: '600',
                          paddingTop: 20
                      },
                      __source: {
                          fileName: k,
                          lineNumber: 55
                      }
                  }, "\u2043 \u6253\u5361 - \u7528\u884c\u52d5\u8072\u63f4\u97d3\u5e02\u9577"), p.default.createElement(b.Text, {
                      style: {
                          fontSize: 20,
                          fontWeight: '600',
                          paddingTop: 20
                      },
                      __source: {
                          fileName: k,
                          lineNumber: 56
                      }
                  }, "\u2043 \u70ba\u97d3\u5e02\u9577\u6f84\u6e05 - \u900f\u904e\u7559\u8a00\u6f84\u6e05\u4e0d\u5be6\u8b20\u8a00"), p.default.createElement(b.Text, {
                      style: {
                          fontSize: 20,
                          fontWeight: '600',
                          paddingTop: 20
                      },
                      __source: {
                          fileName: k,
                          lineNumber: 57
                      }
                  }, "\u2043 \u70ba\u53cb\u8ecd\u8072\u63f4\uff0c\u6309\u8b9a\u7559\u8a00\u5206\u4eab\uff0c\u722d\u53d6\u66f4\u591a\u4eba\u7684\u652f\u6301\uff01"), p.default.createElement(b.Text, {
                      style: {
                          fontSize: 20,
                          fontWeight: '600',
                          paddingTop: 20
                      },
                      __source: {
                          fileName: k,
                          lineNumber: 58
                      }
                  }, "\u2043 \u5c04\u51fa\u4e00\u652f\u7a7f\u96f2\u7bad - \u900f\u904e\u5206\u4eab\uff0c\u52d5\u54e1\u66f4\u591a\u97d3\u5bb6\u8ecd\u652f\u6301\u97d3\u5e02\u9577"))), this.renderFacebookLogin(), this.renderAppleLogin(), p.default.createElement(b.View, {
                      style: w.container,
                      __source: {
                          fileName: k,
                          lineNumber: 63
                      }
                  }, p.default.createElement(b.Image, {
                      style: w.man,
                      source: r(d[17]),
                      resizeMode: "contain",
                      __source: {
                          fileName: k,
                          lineNumber: 64
                      }
                  }))))
              }
          }]), n
      })(p.default.Component),
      w = b.StyleSheet.create({
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
          },
          man: {
              width: 139,
              height: 230
          }
      });
  var v = (0, N.connect)(function(t, n) {
      return {}
  }, y)((0, _.withNavigation)(T));
  e.default = v
}