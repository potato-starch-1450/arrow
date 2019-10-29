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
      h = r(d[8]),
      p = t(r(d[9])),
      b = r(d[10]),
      _ = n(r(d[11])),
      N = r(d[12]),
      k = n(r(d[13])),
      S = t(r(d[14])),
      y = t(r(d[15])),
      I = n(r(d[16])),
      M = r(d[17]),
      C = r(d[18]),
      x = t(r(d[19])),
      v = t(r(d[20])),
      w = t(r(d[21])),
      E = (t(r(d[22])), t(r(d[23]))),
      T = t(r(d[24])),
      V = t(r(d[25])),
      P = r(d[26]),
      B = "/Users/linyiting/Desktop/Arrow/arrow/screens/CheckInScreen.js",
      z = t(r(d[27])).default.manifest.extra.shareUrl + '/download',
      A = (function(t) {
          function n() {
              var t;
              return (0, l.default)(this, n), (t = (0, s.default)(this, (0, u.default)(n).call(this))).renderTutorial = function() {
                  return f.default.createElement(h.View, {
                      style: {
                          padding: 10
                      },
                      __source: {
                          fileName: B,
                          lineNumber: 89
                      }
                  }, f.default.createElement(h.Text, {
                      style: {
                          fontSize: 24,
                          paddingTop: 15,
                          fontWeight: '900',
                          padding: 20,
                          alignItems: 'center',
                          color: y.default.koreanfishblue
                      },
                      __source: {
                          fileName: B,
                          lineNumber: 90
                      }
                  }, "\u9019\u662f\u4ec0\u9ebc\uff1f\u6211\u80fd\u600e\u9ebc\u505a\uff1f"), f.default.createElement(h.Text, {
                      style: {
                          fontSize: 20,
                          paddingVertical: 20,
                          fontWeight: '600'
                      },
                      __source: {
                          fileName: B,
                          lineNumber: 91
                      }
                  }, "\u627f\u53d7\u5404\u65b9\u62b9\u9ed1\u7684\u97d3\u5e02\u9577\uff0c\u9700\u8981\u6211\u5011\u65e5\u591c\u8072\u63f4\uff0c\u8b93\u6211\u5011\u6210\u70ba\u97d3\u5e02\u9577\u7684\u7cbe\u795e\u652f\u67f1\uff0c\u4e92\u76f8\u6276\u6301\uff01\u672c\u9801\u9762\u70ba\u6253\u5361\u5c08\u5340\uff0c\u900f\u904e\u6bcf\u65e5\u4e0a\u7dda\uff0c\u53ea\u8981\u6309\u4e0b\u6211\u8981\u6253\u5361\uff0c\u5c31\u53ef\u4ee5\u8b93\u97d3\u5e02\u9577\u611f\u53d7\u5230\u6211\u5011\u4e0d\u96e2\u4e0d\u68c4\u7684\u71b1\u60c5\uff01"), f.default.createElement(h.Text, {
                      style: {
                          fontSize: 16,
                          paddingLeft: 20,
                          paddingTop: 10
                      },
                      __source: {
                          fileName: B,
                          lineNumber: 92
                      }
                  }, "- \u6bcf\u65e5\u80fd\u5920\u6253\u4e00\u6b21\u5361\uff0c\u6253\u5b8c\u5361\u5f8c\u9700\u7b49\u5f8524\u5c0f\u6642\u5f8c\u5c31\u53ef\u4ee5\u518d\u6b21\u6253\u5361\uff0c\u900f\u904e\u7d2f\u7a4d\u6253\u5361\u6b21\u6578\uff0c\u8b93\u97d3\u5e02\u9577\u611f\u53d7\u5230\u9f90\u5927\u6c11\u610f\u7684\u652f\u63f4\uff01"))
              }, t.toggleModal = function() {
                  t.state.isModalVisible || I.trackAction(I.clickCheckinTutorial), t.setState({
                      isModalVisible: !t.state.isModalVisible
                  })
              }, t.toggleSuccessModal = function() {
                  t.setState({
                      isSuccessModalVisible: !0 === t.props.checkinSuccess && !t.state.isSuccessModalVisible
                  })
              }, t.checkin = function() {
                  t.props.checkinUser(k.getCurrentPositionAsync({}), t.props.authToken)
              }, t.onSegementSelected = function(n) {
                  t.props.navigation.setParams({
                      data: {}
                  }), t.setState({
                      selectedIndex: n
                  })
              }, t.renderCountDownButton = function(t) {
                  return f.default.createElement(h.View, {
                      style: {
                          width: '100%',
                          height: 70,
                          marginBottom: 10
                      },
                      __source: {
                          fileName: B,
                          lineNumber: 147
                      }
                  }, f.default.createElement(h.TouchableOpacity, {
                      style: {
                          width: '95%',
                          height: 70,
                          borderRadius: 20,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: y.default.darkgray,
                          position: 'absolute',
                          bottom: 0,
                          left: '2.5%'
                      },
                      onPress: function() {
                          h.Alert.alert('\u60a8\u4eca\u65e5\u5df2\u7d93\u7c3d\u5230\u904e\u56c9', '\u5feb\u53bb\u5206\u4eab\u8207\u8b77\u822a\u7d2f\u7a4d\u66f4\u591a\u652f\u6301\u5206\u6578\u5594\uff01', [{
                              text: '\u5206\u4eab\u4e00\u652f\u7a7f\u96f2\u7bad',
                              onPress: function() {
                                  var t = 'ios' === h.Platform.OS ? {
                                      url: z
                                  } : {
                                      url: z,
                                      message: z
                                  };
                                  (0, M.weburlShare)(t, function() {})
                              },
                              style: 'destructive'
                          }, {
                              text: '\u53d6\u6d88',
                              style: 'cancel'
                          }], {
                              cancelable: !0
                          })
                      },
                      __source: {
                          fileName: B,
                          lineNumber: 148
                      }
                  }, f.default.createElement(h.Text, {
                      style: {
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: 20
                      },
                      __source: {
                          fileName: B,
                          lineNumber: 165
                      }
                  }, "\u4e0b\u6b21\u6253\u5361\u70ba"), f.default.createElement(x.default, {
                      until: t,
                      digitStyle: {
                          backgroundColor: 'transparent'
                      },
                      digitTxtStyle: {
                          color: 'white'
                      },
                      separatorStyle: {
                          color: 'white'
                      },
                      timeToShow: ['H', 'M', 'S'],
                      timeLabels: {
                          h: null,
                          m: null,
                          s: null
                      },
                      showSeparator: !0,
                      size: 20,
                      __source: {
                          fileName: B,
                          lineNumber: 166
                      }
                  }), f.default.createElement(h.Text, {
                      style: {
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: 20
                      },
                      __source: {
                          fileName: B,
                          lineNumber: 178
                      }
                  }, "\u5f8c")))
              }, t.renderCheckinButton = function() {
                  return f.default.createElement(h.View, {
                      style: {
                          width: '100%',
                          height: 70,
                          marginBottom: 10
                      },
                      __source: {
                          fileName: B,
                          lineNumber: 187
                      }
                  }, f.default.createElement(h.TouchableOpacity, {
                      style: {
                          width: '95%',
                          height: 70,
                          borderRadius: 20,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'red',
                          position: 'absolute',
                          bottom: 0,
                          left: '2.5%'
                      },
                      onPress: function() {
                          I.trackAction(I.clickCheckin), t.checkin()
                      },
                      __source: {
                          fileName: B,
                          lineNumber: 188
                      }
                  }, f.default.createElement(P.MaterialCommunityIcons, {
                      name: "check-decagram",
                      size: 20,
                      color: "white",
                      __source: {
                          fileName: B,
                          lineNumber: 193
                      }
                  }), f.default.createElement(h.Text, {
                      style: {
                          color: 'white',
                          fontSize: 20,
                          fontWeight: 'bold',
                          marginLeft: 10
                      },
                      __source: {
                          fileName: B,
                          lineNumber: 198
                      }
                  }, "\u97d3\u5bb6\u8ecd\u7c3d\u5230")))
              }, t.renderCheckinSuccessModal = function() {
                  return f.default.createElement(V.default, {
                      isSuccessModalVisible: t.state.isSuccessModalVisible,
                      toggleSuccessModal: t.toggleSuccessModal,
                      text: "\u4eca\u65e5\u6253\u5361\u6210\u529f\uff01",
                      iconName: "location-on",
                      __source: {
                          fileName: B,
                          lineNumber: 225
                      }
                  })
              }, t.renderCheckinLoadingModal = function() {
                  return f.default.createElement(p.default, {
                      style: D.modalContainer,
                      isVisible: t.props.checkinLoading,
                      animationType: "fade",
                      onModalHide: function() {
                          t.toggleSuccessModal()
                      },
                      __source: {
                          fileName: B,
                          lineNumber: 235
                      }
                  }, f.default.createElement(h.ActivityIndicator, {
                      size: "large",
                      __source: {
                          fileName: B,
                          lineNumber: 243
                      }
                  }))
              }, t.state = {
                  selectedIndex: 0,
                  isModalVisible: !1,
                  isSuccessModalVisible: !1
              }, t
          }
          return (0, c.default)(n, t), (0, o.default)(n, [{
              key: "componentDidMount",
              value: function() {
                  var t = this;
                  this.props.navigation.setParams({
                      showHelp: this.toggleModal
                  }), this.props.fetchSelfProfile(this.props.authToken), h.AsyncStorage.getItem('@CHECKIN_FIRST').then(function(n) {
                      null !== n && 'true' === n || t.toggleModal(), h.AsyncStorage.setItem('@CHECKIN_FIRST', 'true').then(function(t) {})
                  })
              }
          }, {
              key: "componentDidUpdate",
              value: function(t, n) {
                  var l = this.props.navigation.getParam('data', {});
                  void 0 != l.selectedIndex ? this.state.selectedIndex !== l.selectedIndex && this.setState({
                      selectedIndex: l.selectedIndex
                  }) : n.selectedIndex !== this.state.selectedIndex && this.setState({
                      selectedIndex: this.state.selectedIndex
                  }), t.authToken !== this.props.authToken && this.props.fetchSelfProfile(this.props.authToken)
              }
          }, {
              key: "renderContent",
              value: function() {
                  return 0 == this.state.selectedIndex ? f.default.createElement(v.default, {
                      __source: {
                          fileName: B,
                          lineNumber: 138
                      }
                  }) : f.default.createElement(w.default, {
                      __source: {
                          fileName: B,
                          lineNumber: 141
                      }
                  })
              }
          }, {
              key: "renderButton",
              value: function() {
                  if (this.props.user && this.props.user.nextCheckInDate) {
                      var t = S.default.duration((0, S.default)(this.props.user.nextCheckInDate).diff((0, S.default)())),
                          n = 60 * parseInt(t.asHours()) * 60 + 60 * parseInt(t.minutes()) + parseInt(t.seconds());
                      return n > 0 ? this.renderCountDownButton(n) : this.renderCheckinButton()
                  }
                  return this.renderCheckinButton()
              }
          }, {
              key: "render",
              value: function() {
                  return this.props.authToken && !this.props.user ? f.default.createElement(h.ImageBackground, {
                      style: D.container,
                      source: r(d[28]),
                      __source: {
                          fileName: B,
                          lineNumber: 252
                      }
                  }, f.default.createElement(T.default, {
                      isModalVisible: this.state.isModalVisible,
                      toggleModal: this.toggleModal,
                      __source: {
                          fileName: B,
                          lineNumber: 253
                      }
                  }, this.renderTutorial()), f.default.createElement(h.ActivityIndicator, {
                      size: "large",
                      __source: {
                          fileName: B,
                          lineNumber: 258
                      }
                  })) : this.props.authToken || this.props.loading ? f.default.createElement(h.ImageBackground, {
                      style: D.container,
                      source: r(d[28]),
                      __source: {
                          fileName: B,
                          lineNumber: 266
                      }
                  }, f.default.createElement(T.default, {
                      isModalVisible: this.state.isModalVisible,
                      toggleModal: this.toggleModal,
                      __source: {
                          fileName: B,
                          lineNumber: 267
                      }
                  }, this.renderTutorial()), this.renderCheckinLoadingModal(), this.renderCheckinSuccessModal(), f.default.createElement(C.ButtonGroup, {
                      onPress: this.onSegementSelected,
                      selectedIndex: this.state.selectedIndex,
                      buttons: ['\u5168\u53f0\u97d3\u5bb6\u8ecd', '\u97d3\u5bb6\u8ecd\u6392\u884c'],
                      selectedButtonStyle: {
                          backgroundColor: y.default.koreanfishblue
                      },
                      containerStyle: {
                          height: 50,
                          backgroundColor: 'white',
                          borderRadius: 20
                      },
                      __source: {
                          fileName: B,
                          lineNumber: 274
                      }
                  }), this.renderContent(), this.renderButton()) : f.default.createElement(E.default, {
                      __source: {
                          fileName: B,
                          lineNumber: 262
                      }
                  })
              }
          }]), n
      })(f.default.Component);
  A.navigationOptions = function(t) {
      var n = t.navigation;
      return {
          title: '\u97d3\u5bb6\u8ecd\u7c3d\u5230',
          headerRight: f.default.createElement(C.Icon, {
              iconStyle: {
                  paddingRight: 10
              },
              onPress: n.getParam('showHelp'),
              name: "help",
              type: "ionicons",
              color: "#575772",
              __source: {
                  fileName: B,
                  lineNumber: 52
              }
          })
      }
  };
  var D = h.StyleSheet.create({
      container: {
          flex: 1,
          paddingVertical: 10,
          backgroundColor: 'white'
      }
  });
  var L = (0, b.connect)(function(t, n) {
      return {
          loading: t.user.loading,
          checkinLoading: t.user.checkinLoading,
          user: t.user.user,
          checkinSuccess: t.user.checkinSuccess,
          authToken: t.auth.serverToken
      }
  }, _)((0, N.withNavigation)(A));
  e.default = L
}