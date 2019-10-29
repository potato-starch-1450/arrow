module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]),
      o = r(d[1]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = void 0;
  var l = t(r(d[2])),
      n = t(r(d[3])),
      s = t(r(d[4])),
      c = t(r(d[5])),
      u = t(r(d[6])),
      f = t(r(d[7])),
      h = r(d[8]),
      b = r(d[9]),
      v = o(r(d[10])),
      _ = r(d[11]),
      p = (r(d[12]), r(d[13])),
      N = (t(r(d[14])), o(r(d[15])), r(d[16])),
      w = (t(r(d[17])), t(r(d[18]))),
      y = t(r(d[19])),
      S = o(r(d[20])),
      C = "/Users/linyiting/Desktop/Arrow/arrow/screens/AchievementDetailScreen.js",
      M = h.Dimensions.get('window'),
      E = y.default.manifest.extra.shareUrl,
      V = (function(t) {
          function o(t) {
              var c;
              return (0, l.default)(this, o), (c = (0, n.default)(this, (0, s.default)(o).call(this, t))).toggleModal = function() {
                  c.setState({
                      isModalVisible: !c.state.isModalVisible
                  })
              }, c.toggleSuccessModal = function() {
                  c.setState({
                      isSuccessModalVisible: !c.state.isSuccessModalVisible
                  })
              }, c.renderShareSuccessModal = function() {
                  return f.default.createElement(w.default, {
                      isSuccessModalVisible: c.state.isSuccessModalVisible,
                      toggleSuccessModal: c.toggleSuccessModal,
                      text: "\u5206\u4eab\u6210\u529f\uff01",
                      iconName: "share",
                      __source: {
                          fileName: C,
                          lineNumber: 59
                      }
                  })
              }, c.state = {
                  isModalVisible: !1,
                  isSuccessModalVisible: !1
              }, c
          }
          return (0, u.default)(o, t), (0, c.default)(o, [{
              key: "componentDidUpdate",
              value: function() {
                  var t = this.props.navigation.getParam('data', {});
                  S.trackScreen(S.achievementDetailScreen, {
                      achievement: t._id
                  })
              }
          }]), (0, c.default)(o, [{
              key: "renderAchievementContent",
              value: function(t) {
                  var o = t.title,
                      l = t.imgURL,
                      n = t.detail;
                  return f.default.createElement(h.View, {
                      __source: {
                          fileName: C,
                          lineNumber: 71
                      }
                  }, f.default.createElement(h.Image, {
                      style: k.image,
                      source: {
                          uri: l
                      },
                      resizeMode: 'cover',
                      __source: {
                          fileName: C,
                          lineNumber: 72
                      }
                  }), f.default.createElement(h.View, {
                      style: k.cover,
                      __source: {
                          fileName: C,
                          lineNumber: 73
                      }
                  }, f.default.createElement(h.View, {
                      style: {
                          position: 'absolute',
                          bottom: 40,
                          flexDirection: 'column'
                      },
                      __source: {
                          fileName: C,
                          lineNumber: 74
                      }
                  }, f.default.createElement(h.Text, {
                      h3: !0,
                      style: [k.coverTitle],
                      __source: {
                          fileName: C,
                          lineNumber: 75
                      }
                  }, o))), f.default.createElement(h.View, {
                      style: k.detailCard,
                      __source: {
                          fileName: C,
                          lineNumber: 79
                      }
                  }, f.default.createElement(h.View, {
                      style: k.cardContainer,
                      __source: {
                          fileName: C,
                          lineNumber: 80
                      }
                  }, f.default.createElement(h.Text, {
                      style: {
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: '#373D3F'
                      },
                      __source: {
                          fileName: C,
                          lineNumber: 81
                      }
                  }, "\u8a73\u7d30\u8cc7\u8a0a"), f.default.createElement(h.Text, {
                      style: {
                          fontSize: 14,
                          fontWeight: 'bold',
                          color: '#373D3F',
                          paddingTop: 10
                      },
                      __source: {
                          fileName: C,
                          lineNumber: 82
                      }
                  }, n))))
              }
          }, {
              key: "render",
              value: function() {
                  var t = this,
                      o = this.props.navigation.getParam('data', {});
                  return f.default.createElement(h.ScrollView, {
                      style: k.container,
                      __source: {
                          fileName: C,
                          lineNumber: 92
                      }
                  }, this.renderShareSuccessModal(), this.renderAchievementContent(o), f.default.createElement(h.View, {
                      style: {
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginLeft: 10,
                          marginRight: 10,
                          marginBottom: 10
                      },
                      __source: {
                          fileName: C,
                          lineNumber: 95
                      }
                  }, f.default.createElement(h.TouchableOpacity, {
                      style: {
                          flex: 1,
                          marginLeft: 5,
                          height: 40,
                          borderRadius: 20,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#00c300'
                      },
                      onPress: function() {
                          S.trackActionWithProperty(S.clickShareAchievement, {
                              achievement: o._id
                          });
                          var l = o.adType ? o.url : E + '/achievements/' + o._id,
                              n = 'ios' === h.Platform.OS ? {
                                  url: l
                              } : {
                                  url: l,
                                  message: l
                              };
                          (0, N.weburlShare)(n, function() {
                              S.trackActionWithProperty(S.shareAchievementComplete, {
                                  achievement: o._id
                              }), t.toggleSuccessModal();
                              var l = o.adType ? 'ad' : 'achievement';
                              t.props.updateCount(o._id, l, 'share', t.props.authToken)
                          })
                      },
                      __source: {
                          fileName: C,
                          lineNumber: 96
                      }
                  }, f.default.createElement(p.Entypo, {
                      style: {
                          paddingRight: 10
                      },
                      name: "share",
                      size: 16,
                      color: "white",
                      __source: {
                          fileName: C,
                          lineNumber: 109
                      }
                  }), f.default.createElement(h.Text, {
                      style: {
                          color: 'white',
                          fontWeight: 'bold'
                      },
                      __source: {
                          fileName: C,
                          lineNumber: 115
                      }
                  }, "\u5206\u4eab"))))
              }
          }]), o
      })(f.default.Component);
  V.navigationOptions = function(t) {
      t.navigation.getParam('data', {});
      return {
          title: '\u8a73\u7d30\u8cc7\u8a0a'
      }
  };
  var k = h.StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: '#fff'
      },
      image: {
          width: M.width,
          height: 250
      },
      cover: {
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          height: 250,
          alignItems: 'flex-start'
      },
      coverTitle: {
          color: 'white',
          fontSize: 24,
          paddingHorizontal: 15,
          paddingBottom: 10
      },
      bottom: {
          position: 'absolute',
          bottom: 0,
          margin: 5
      },
      subtitle: {
          color: 'white',
          fontSize: 14,
          marginLeft: 10
      },
      labelContainer: {
          flexDirection: 'row',
          paddingHorizontal: 5,
          paddingVertical: 5
      },
      detailCard: {
          borderRadius: 30,
          backgroundColor: 'white',
          borderColor: 'lightgray',
          borderWidth: 1,
          shadowColor: "#000",
          shadowOffset: {
              width: 0,
              height: 5
          },
          shadowOpacity: .34,
          shadowRadius: 6.27,
          elevation: 10,
          width: '90%',
          minHeight: M.height - 410,
          position: 'relative',
          top: -30,
          left: '5%'
      },
      cardContainer: {
          flex: 1,
          padding: 20
      }
  });
  var x = (0, b.connect)(function(t) {
      return {
          authToken: t.auth.serverToken
      }
  }, v)((0, _.withNavigation)(V));
  e.default = x
}