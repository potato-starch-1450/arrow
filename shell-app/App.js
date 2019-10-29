module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]),
      n = r(d[1]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = void 0;
  var o = t(r(d[2])),
      s = t(r(d[3])),
      c = t(r(d[4])),
      l = t(r(d[5])),
      u = t(r(d[6])),
      f = t(r(d[7])),
      p = t(r(d[8])),
      h = r(d[9]),
      b = r(d[10]),
      k = n(r(d[11])),
      y = n(r(d[12])),
      _ = t(r(d[13])),
      N = r(d[14]),
      v = r(d[15]),
      S = t(r(d[16])),
      w = t(r(d[17])),
      P = r(d[18]),
      A = r(d[19]),
      x = r(d[20]),
      E = r(d[21]),
      O = t(r(d[22])),
      C = t(r(d[23])),
      I = t(r(d[24])),
      L = n(r(d[25])),
      T = t(r(d[26])),
      D = r(d[27]),
      F = t(r(d[28])),
      R = n(r(d[29])),
      M = t(r(d[30])),
      U = "/Users/linyiting/Desktop/Arrow/arrow/App.js";

  function j(t, n) {
      var o = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          n && (s = s.filter(function(n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable
          })), o.push.apply(o, s)
      }
      return o
  }

  function z(t) {
      for (var n = 1; n < arguments.length; n++) {
          var s = null != arguments[n] ? arguments[n] : {};
          n % 2 ? j(s, !0).forEach(function(n) {
              (0, o.default)(t, n, s[n])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : j(s).forEach(function(n) {
              Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(s, n))
          })
      }
      return t
  }
  var W = N.Dimensions.get('window'),
      B = M.default.create({
          timeout: 3e4
      }),
      K = (0, E.createStore)(C.default, {}, (0, E.applyMiddleware)(O.default, function(t) {
          return function(t) {
              return function(n) {
                  return -1 !== n.type.indexOf('ERROR') && (0, L.showMessage)({
                      message: n.payload.title || '\u767c\u751f\u932f\u8aa4',
                      description: n.payload.message,
                      type: "danger"
                  }), t(n)
              }
          }
      })),
      G = F.default.manifest.facebookAppId,
      H = F.default.manifest.extra.apiUrl,
      V = (function(t) {
          function n() {
              var t, o;
              (0, c.default)(this, n);
              for (var l = arguments.length, p = new Array(l), _ = 0; _ < l; _++) p[_] = arguments[_];
              return (o = (0, u.default)(this, (t = (0, f.default)(n)).call.apply(t, [this].concat(p)))).state = {
                  isLoadingComplete: !1,
                  notification: {},
                  shouldShowIntro: !1,
                  introPage: 0,
                  appState: N.AppState.currentState
              }, o._handleStateChange = function(t) {
                  o.state.appState.match(/inactive|background/) && 'active' === t ? o._checkUpdates() : (0, A.updateImpression)(), o.setState({
                      appState: t
                  })
              }, o._handleNotification = function(t) {
                  var n = t.data,
                      o = n.target,
                      s = n.data,
                      c = t.origin,
                      l = {};
                  switch (o) {
                      case "eventList":
                          o = "Main", s = {
                              selectedIndex: 0
                          };
                          break;
                      case "campaignList":
                          o = "Main", s = {
                              selectedIndex: 1
                          };
                          break;
                      case "eventDetail":
                          o = "EventDetail", l = {
                              bottomTabs: {
                                  visible: !1,
                                  drawBehind: !0,
                                  animate: !0
                              }
                          };
                          break;
                      case "achievementList":
                          o = "AchievementList";
                          break;
                      case "visionList":
                          o = "visionList";
                          break;
                      case "achievementDetail":
                          o = "AchievementDetail", l = {
                              bottomTabs: {
                                  visible: !1,
                                  drawBehind: !0,
                                  animate: !0
                              }
                          };
                          break;
                      case "ally":
                          o = "AllyList";
                          break;
                      case "enemy":
                          o = "EnemyList";
                      case "support":
                          o = "SupportListScreen"
                  }
                  'selected' === c && T.default.navigate(o, {
                      data: s,
                      options: l
                  })
              }, o._checkUpdates = function() {
                  return s.default.async(function(t) {
                      for (;;) switch (t.prev = t.next) {
                          case 0:
                              if (!0 === o._checking_update) {
                                  t.next = 23;
                                  break
                              }
                              return console.log('Checking for an update...'), o._checking_update = !0, t.prev = 3, t.next = 6, s.default.awrap(h.Updates.checkForUpdateAsync());
                          case 6:
                              if (!t.sent.isAvailable) {
                                  t.next = 14;
                                  break
                              }
                              return console.log('An update was found, downloading...'), t.next = 11, s.default.awrap(h.Updates.fetchUpdateAsync());
                          case 11:
                              N.Alert.alert('\u66f4\u65b0\u5167\u5bb9\u5df2\u4e0b\u8f09\u5b8c\u6210', '\u7acb\u5373\u91cd\u555f\u4f86\u4f7f\u7528\u6700\u65b0\u7684\u4e00\u652f\u7a7f\u96f2\u7bad\uff01', [{
                                  text: '\u78ba\u5b9a',
                                  onPress: function() {
                                      h.Updates.reloadFromCache()
                                  }
                              }, {
                                  text: '\u53d6\u6d88',
                                  onPress: function() {
                                      return console.log('Cancel Pressed')
                                  },
                                  style: 'cancel'
                              }], {
                                  cancelable: !1
                              }), t.next = 15;
                              break;
                          case 14:
                              console.log('No updates were found');
                          case 15:
                              t.next = 20;
                              break;
                          case 17:
                              t.prev = 17, t.t0 = t.catch(3), console.log('Error while trying to check for updates', t.t0);
                          case 20:
                              delete o._checking_update, t.next = 24;
                              break;
                          case 23:
                              console.log('Currently checking for an update');
                          case 24:
                          case "end":
                              return t.stop()
                      }
                  }, null, null, [
                      [3, 17]
                  ])
              }, o.loginFacebook = function() {
                  var t, n, o, c, l, u, f, p;
                  return s.default.async(function(h) {
                      for (;;) switch (h.prev = h.next) {
                          case 0:
                              return h.prev = 0, h.next = 3, s.default.awrap(y.logInWithReadPermissionsAsync(G, {
                                  permissions: ['public_profile'],
                                  behavior: 'native'
                              }));
                          case 3:
                              if (t = h.sent, n = t.type, o = t.token, t.expires, t.permissions, t.declinedPermissions, 'success' !== n) {
                                  h.next = 19;
                                  break
                              }
                              return c = F.default.installationId, l = {
                                  deviceId: c,
                                  access_token: o
                              }, h.next = 14, s.default.awrap(B.post(H + "/api/auth/facebook/token", l));
                          case 14:
                              return u = h.sent, f = u.data.token, h.abrupt("return", N.AsyncStorage.setItem('@AUTH_TOKEN', f));
                          case 19:
                              h.next = 25;
                              break;
                          case 21:
                              h.prev = 21, h.t0 = h.catch(0), p = h.t0.message, alert("Facebook Login Error: " + p);
                          case 25:
                          case "end":
                              return h.stop()
                      }
                  }, null, null, [
                      [0, 21]
                  ])
              }, o._loadResourcesAsync = function() {
                  return s.default.async(function(t) {
                      for (;;) switch (t.prev = t.next) {
                          case 0:
                              return t.abrupt("return", Promise.all([b.Asset.loadAsync([]), k.loadAsync(z({}, v.Ionicons.font, {
                                  'space-mono': r(d[31]),
                                  FontAwesome: r(d[32])
                              }))]));
                          case 1:
                          case "end":
                              return t.stop()
                      }
                  })
              }, o._handleLoadingError = function(t) {
                  console.warn(t)
              }, o._handleFinishLoading = function() {
                  o.setState({
                      isLoadingComplete: !0
                  })
              }, o
          }
          return (0, p.default)(n, t), (0, l.default)(n, [{
              key: "componentWillUnmount",
              value: function() {
                  N.AppState.removeEventListener('change', this._handleStateChange)
              }
          }, {
              key: "componentDidMount",
              value: function() {
                  var t = this;
                  R.initAnalytics(), R.trackAction(R.launchApp), N.AppState.addEventListener('change', this._handleStateChange), this._checkUpdates(), N.Text.defaultProps = {}, N.Text.defaultProps.maxFontSizeMultiplier = 1.4, N.AsyncStorage.getItem('@SKIP_INTRO').then(function(n) {
                      null !== n && 'true' === n || (R.trackAction(R.showOnboarding), t.setState({
                          shouldShowIntro: !0
                      }))
                  }), 'android' === N.Platform.OS && h.Notifications.createChannelAndroidAsync('push', {
                      name: 'Push Messages',
                      priority: 'max',
                      vibrate: [0, 250, 250, 250],
                      sound: !0
                  }), this._notificationSubscription = h.Notifications.addListener(this._handleNotification)
              }
          }, {
              key: "renderIntro",
              value: function() {
                  var t = this;
                  return _.default.createElement(S.default, {
                      ref: "onboard",
                      onDone: function() {
                          N.AsyncStorage.setItem('@SKIP_INTRO', 'true').then(function(n) {
                              t.setState({
                                  shouldShowIntro: !1
                              })
                          })
                      },
                      pages: [{
                          backgroundColor: w.default.koreanfishblue,
                          image: _.default.createElement(N.Image, {
                              source: r(d[33]),
                              style: {
                                  width: '50%',
                                  height: .4 * W.height
                              },
                              resizeMode: "contain",
                              __source: {
                                  fileName: U,
                                  lineNumber: 225
                              }
                          }),
                          title: '\u4e00\u652f\u7a7f\u96f2\u7bad',
                          subtitle: '\u5343\u8ecd\u842c\u99ac\u4f86\u76f8\u898b',
                          imageContainerStyles: {
                              backgroundColor: 'black'
                          }
                      }, {
                          backgroundColor: w.default.koreanfishblue,
                          image: _.default.createElement(N.Image, {
                              source: r(d[34]),
                              style: {
                                  width: '50%',
                                  height: .4 * W.height
                              },
                              resizeMode: "contain",
                              __source: {
                                  fileName: U,
                                  lineNumber: 232
                              }
                          }),
                          title: '\u958b\u555f\u901a\u77e5\uff0c\u8b93\u4f60\u638c\u63e1 \u97d3\u5e02\u9577\u6700\u65b0\u884c\u7a0b \u4e00\u8d77\u8072\u63f4\u97d3\u5bb6\u8ecd\u3001\u6f84\u6e05\u9ed1\u97d3\u8b20\u8a00',
                          subtitle: _.default.createElement(N.TouchableOpacity, {
                              style: {
                                  margin: 20,
                                  borderRadius: 20,
                                  backgroundColor: 'red'
                              },
                              onPress: function() {
                                  R.trackAction(R.clickGiveNotificationPermission), (0, P.registerPushNotifications)(function() {
                                      t.refs.onboard.goNext()
                                  })
                              },
                              __source: {
                                  fileName: U,
                                  lineNumber: 235
                              }
                          }, _.default.createElement(N.Text, {
                              style: {
                                  color: 'white',
                                  fontSize: 22,
                                  fontWeight: '600',
                                  padding: 20
                              },
                              __source: {
                                  fileName: U,
                                  lineNumber: 241
                              }
                          }, "\u958b\u555f\u901a\u77e5")),
                          imageContainerStyles: {
                              backgroundColor: 'black'
                          }
                      }, {
                          backgroundColor: w.default.koreanfishblue,
                          image: _.default.createElement(N.Image, {
                              source: r(d[35]),
                              style: {
                                  width: '50%',
                                  height: .4 * W.height
                              },
                              resizeMode: "contain",
                              __source: {
                                  fileName: U,
                                  lineNumber: 250
                              }
                          }),
                          title: '\u4e00\u652f\u7a7f\u96f2\u7bad\u58ef\u5927\u8072\u52e2\uff0c\u958b\u555f\u5730\u7406\u4f4d\u7f6e\uff0c\u8eab\u9ad4\u529b\u884c\u96a8\u6642\u652f\u6301\u97d3\u5bb6\u8ecd\uff01',
                          subtitle: _.default.createElement(N.TouchableOpacity, {
                              style: {
                                  margin: 20,
                                  borderRadius: 20,
                                  backgroundColor: 'red'
                              },
                              onPress: function() {
                                  R.trackAction(R.clickGiveLocationPermission), (0, D.askForLocationPermission)(function() {
                                      t.refs.onboard.goNext()
                                  })
                              },
                              __source: {
                                  fileName: U,
                                  lineNumber: 253
                              }
                          }, _.default.createElement(N.Text, {
                              style: {
                                  color: 'white',
                                  fontSize: 22,
                                  fontWeight: '600',
                                  padding: 20
                              },
                              __source: {
                                  fileName: U,
                                  lineNumber: 259
                              }
                          }, "\u958b\u555f\u5730\u7406\u4f4d\u7f6e"))
                      }, {
                          backgroundColor: w.default.koreanfishblue,
                          image: _.default.createElement(N.Image, {
                              source: r(d[36]),
                              style: {
                                  width: '50%',
                                  height: .4 * W.height
                              },
                              resizeMode: "contain",
                              __source: {
                                  fileName: U,
                                  lineNumber: 267
                              }
                          }),
                          title: '\u767b\u5165\u4e00\u652f\u7a7f\u96f2\u7bad\uff0c\u9752\u5929\u767d\u65e5\u91cd\u65b0\u73fe \u529b\u633a\u97d3\u570b\u745c\u524d\u9032\u7e3d\u7d71\u5e9c',
                          subtitle: _.default.createElement(N.TouchableOpacity, {
                              style: {
                                  margin: 20,
                                  borderRadius: 20,
                                  backgroundColor: 'red'
                              },
                              onPress: function() {
                                  R.trackAction(R.clickSigninWithFacebookOnboarding);
                                  try {
                                      t.loginFacebook().then(function(n) {
                                          t.refs.onboard.props.onDone()
                                      })
                                  } catch (t) {}
                              },
                              __source: {
                                  fileName: U,
                                  lineNumber: 270
                              }
                          }, _.default.createElement(N.Text, {
                              style: {
                                  color: 'white',
                                  fontSize: 22,
                                  fontWeight: '600',
                                  padding: 20
                              },
                              __source: {
                                  fileName: U,
                                  lineNumber: 280
                              }
                          }, "\u767b\u5165\u7c3d\u5230"))
                      }],
                      showSkip: !1,
                      flatlistProps: {
                          scrollEnabled: !1
                      },
                      pageIndexCallback: function(n) {
                          t.setState({
                              introPage: n
                          })
                      },
                      NextButtonComponent: function(n) {
                          return _.default.createElement(N.TouchableOpacity, {
                              style: {
                                  marginRight: 20,
                                  borderRadius: 10,
                                  backgroundColor: 'red'
                              },
                              onPress: function() {
                                  1 == t.state.introPage ? (0, P.registerPushNotifications)(function() {}) : 2 == t.state.introPage && (0, D.askForLocationPermission)(function() {}), n.onPress()
                              },
                              __source: {
                                  fileName: U,
                                  lineNumber: 294
                              }
                          }, _.default.createElement(N.Text, {
                              style: {
                                  color: 'white',
                                  fontSize: 18,
                                  fontWeight: '600',
                                  padding: 10
                              },
                              __source: {
                                  fileName: U,
                                  lineNumber: 308
                              }
                          }, "\u4e0b\u4e00\u9801"))
                      },
                      DoneButtonComponent: function(t) {
                          return _.default.createElement(N.Button, {
                              title: "\u7565\u904e",
                              onPress: function() {
                                  R.trackAction(R.skipOnboarding), t.onPress()
                              },
                              __source: {
                                  fileName: U,
                                  lineNumber: 314
                              }
                          })
                      },
                      __source: {
                          fileName: U,
                          lineNumber: 214
                      }
                  })
              }
          }, {
              key: "render",
              value: function() {
                  return this.state.isLoadingComplete || this.props.skipLoadingScreen ? this.state.shouldShowIntro ? this.renderIntro() : _.default.createElement(x.Provider, {
                      store: K,
                      __source: {
                          fileName: U,
                          lineNumber: 338
                      }
                  }, _.default.createElement(N.View, {
                      style: q.container,
                      __source: {
                          fileName: U,
                          lineNumber: 339
                      }
                  }, 'ios' === N.Platform.OS && _.default.createElement(N.StatusBar, {
                      barStyle: "dark-content",
                      __source: {
                          fileName: U,
                          lineNumber: 340
                      }
                  }), _.default.createElement(I.default, {
                      __source: {
                          fileName: U,
                          lineNumber: 341
                      }
                  }), _.default.createElement(L.default, {
                      position: "top",
                      __source: {
                          fileName: U,
                          lineNumber: 342
                      }
                  }))) : _.default.createElement(h.AppLoading, {
                      startAsync: this._loadResourcesAsync,
                      onError: this._handleLoadingError,
                      onFinish: this._handleFinishLoading,
                      __source: {
                          fileName: U,
                          lineNumber: 327
                      }
                  })
              }
          }]), n
      })(_.default.Component),
      q = N.StyleSheet.create({
          container: {
              flex: 1,
              backgroundColor: '#fff'
          }
      }),
      J = V;
  e.default = J
}