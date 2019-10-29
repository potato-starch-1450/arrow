module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]),
      l = r(d[1]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = void 0;
  var n = t(r(d[2])),
      o = t(r(d[3])),
      s = t(r(d[4])),
      c = t(r(d[5])),
      u = t(r(d[6])),
      f = t(r(d[7])),
      h = r(d[8]),
      b = r(d[9]),
      _ = l(r(d[10])),
      v = r(d[11]),
      N = r(d[12]),
      p = r(d[13]),
      y = t(r(d[14])),
      E = l(r(d[15])),
      w = l(r(d[16])),
      C = r(d[17]),
      S = t(r(d[18])),
      M = t(r(d[19])),
      T = t(r(d[20])),
      k = l(r(d[21])),
      V = "/Users/linyiting/Desktop/Arrow/arrow/screens/EventDetailScreen.js",
      x = h.Dimensions.get('window'),
      D = T.default.manifest.extra.shareUrl,
      A = (function(t) {
          function l(t) {
              var c;
              return (0, n.default)(this, l), (c = (0, o.default)(this, (0, s.default)(l).call(this, t))).toggleModal = function() {
                  c.setState({
                      isModalVisible: !c.state.isModalVisible
                  })
              }, c.toggleSuccessModal = function() {
                  c.setState({
                      isSuccessModalVisible: !c.state.isSuccessModalVisible
                  })
              }, c.renderShareSuccessModal = function() {
                  return f.default.createElement(M.default, {
                      isSuccessModalVisible: c.state.isSuccessModalVisible,
                      toggleSuccessModal: c.toggleSuccessModal,
                      text: "\u5206\u4eab\u6210\u529f\uff01",
                      iconName: "share",
                      __source: {
                          fileName: V,
                          lineNumber: 62
                      }
                  })
              }, c.handleCalendarEvent = function(t) {
                  var l = t.title,
                      n = t.date;
                  c.setState({
                      calendarCreateLoading: !0
                  }), w.askAsync(w.CALENDAR).then(function(t) {
                      'granted' === t.status ? E.getCalendarsAsync().then(function(t) {
                          var o = 'ios' === h.Platform.OS ? t.find(function(t) {
                              return "\u884c\u4e8b\u66c6" === t.title
                          }) : t.find(function(t) {
                              return "1" === t.id
                          });
                          o || (o = t.find(function(t) {
                              return t.allowsModifications
                          }));
                          var s = {
                              title: l,
                              startDate: n,
                              endDate: (0, y.default)(n).add(8, 'h').toDate(),
                              alarms: [{
                                  relativeOffset: "-1440",
                                  method: E.AlarmMethod.ALERT
                              }]
                          };
                          E.createEventAsync(o.id.toString(), s).then(function(t) {
                              c.setState({
                                  calendarCreateLoading: !1,
                                  calendarCreateFinished: !0
                              }, function() {
                                  setTimeout(function() {
                                      c.toggleModal()
                                  }, 2e3)
                              })
                          }).catch(function(t) {
                              console.log('event created error', t), c.toggleModal()
                          })
                      }) : (console.log('no permission'), c.toggleModal())
                  }).catch(function(t) {
                      console.log(t)
                  })
              }, c.state = {
                  isModalVisible: !1,
                  calendarCreateLoading: !1,
                  calendarCreateFinished: !1,
                  isSuccessModalVisible: !1
              }, c
          }
          return (0, u.default)(l, t), (0, c.default)(l, [{
              key: "componentDidUpdate",
              value: function() {
                  var t = this.props.navigation.getParam('data', {});
                  k.trackScreen(k.eventDetailScreen, {
                      event: t._id
                  })
              }
          }]), (0, c.default)(l, [{
              key: "renderTwoButtonModal",
              value: function(t) {
                  var l = this;
                  return f.default.createElement(S.default, {
                      isModalVisible: this.state.isModalVisible,
                      toggleModal: this.toggleModal,
                      isLoading: this.state.calendarCreateLoading,
                      isFinished: this.state.calendarCreateFinished,
                      finishedColor: "#00c300",
                      finishedText: "\u5df2\u52a0\u5165\u5b8c\u6210",
                      title: "\u628a\u6b64\u884c\u7a0b\u52a0\u5165\u884c\u4e8b\u66c6\uff1f",
                      positiveButtonTitle: "\u52a0\u5165",
                      negativeButtonTitle: "\u4e0d\u9700\u8981",
                      positiveButtonPressed: function() {
                          k.trackActionWithProperty(k.clickAddToCalendar, {
                              event: t._id
                          }), l.handleCalendarEvent(t);
                          var n = t.adType ? 'ad' : 'event';
                          l.props.updateCount(t._id, n, 'click')
                      },
                      __source: {
                          fileName: V,
                          lineNumber: 112
                      }
                  })
              }
          }, {
              key: "renderEventContent",
              value: function(t) {
                  var l = t.title,
                      n = t.imgURL,
                      o = t.location,
                      s = t.date,
                      c = t.detail,
                      u = (t.clickCount, t.duration),
                      b = null;
                  return u && (b = (0, y.default)(s).add(u, 'm')), f.default.createElement(h.View, {
                      __source: {
                          fileName: V,
                          lineNumber: 137
                      }
                  }, f.default.createElement(h.Image, {
                      style: L.image,
                      source: {
                          uri: n
                      },
                      resizeMode: 'cover',
                      __source: {
                          fileName: V,
                          lineNumber: 138
                      }
                  }), f.default.createElement(h.View, {
                      style: L.cover,
                      __source: {
                          fileName: V,
                          lineNumber: 139
                      }
                  }, f.default.createElement(h.View, {
                      style: {
                          position: 'absolute',
                          bottom: 40,
                          flexDirection: 'column'
                      },
                      __source: {
                          fileName: V,
                          lineNumber: 140
                      }
                  }, f.default.createElement(h.Text, {
                      h3: !0,
                      style: [L.coverTitle],
                      __source: {
                          fileName: V,
                          lineNumber: 141
                      }
                  }, l), f.default.createElement(h.View, {
                      style: {
                          flexDirection: 'column'
                      },
                      __source: {
                          fileName: V,
                          lineNumber: 142
                      }
                  }, f.default.createElement(h.View, {
                      style: L.labelContainer,
                      __source: {
                          fileName: V,
                          lineNumber: 143
                      }
                  }, f.default.createElement(p.Entypo, {
                      style: {
                          paddingLeft: 10
                      },
                      name: "location",
                      size: 14,
                      color: "white",
                      __source: {
                          fileName: V,
                          lineNumber: 144
                      }
                  }), f.default.createElement(h.Text, {
                      style: L.subtitle,
                      __source: {
                          fileName: V,
                          lineNumber: 150
                      }
                  }, o)), f.default.createElement(h.View, {
                      style: L.labelContainer,
                      __source: {
                          fileName: V,
                          lineNumber: 152
                      }
                  }, f.default.createElement(p.Entypo, {
                      style: {
                          paddingLeft: 10
                      },
                      name: "calendar",
                      size: 14,
                      color: "white",
                      __source: {
                          fileName: V,
                          lineNumber: 153
                      }
                  }), f.default.createElement(h.Text, {
                      style: L.subtitle,
                      __source: {
                          fileName: V,
                          lineNumber: 159
                      }
                  }, (0, y.default)(s).format('YYYY/MM/DD HH:mm'), b ? "-" + (0, y.default)(b).format('HH:mm') : ''))))), f.default.createElement(h.View, {
                      style: L.detailCard,
                      __source: {
                          fileName: V,
                          lineNumber: 165
                      }
                  }, f.default.createElement(h.View, {
                      style: L.cardContainer,
                      __source: {
                          fileName: V,
                          lineNumber: 166
                      }
                  }, f.default.createElement(h.Text, {
                      style: {
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: '#373D3F'
                      },
                      __source: {
                          fileName: V,
                          lineNumber: 167
                      }
                  }, "\u6d3b\u52d5\u8a73\u60c5"), f.default.createElement(h.Text, {
                      style: {
                          fontSize: 14,
                          fontWeight: 'bold',
                          color: '#373D3F',
                          paddingTop: 10
                      },
                      __source: {
                          fileName: V,
                          lineNumber: 168
                      }
                  }, c))))
              }
          }, {
              key: "render",
              value: function() {
                  var t = this,
                      l = this.props.navigation.getParam('data', {}),
                      n = l.clickCount;
                  return f.default.createElement(h.ScrollView, {
                      style: L.container,
                      __source: {
                          fileName: V,
                          lineNumber: 179
                      }
                  }, this.renderShareSuccessModal(), this.renderTwoButtonModal(l), this.renderEventContent(l), f.default.createElement(h.View, {
                      style: {
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginLeft: 10,
                          marginRight: 10,
                          marginBottom: 10
                      },
                      __source: {
                          fileName: V,
                          lineNumber: 183
                      }
                  }, f.default.createElement(h.View, {
                      style: {
                          flex: .5
                      },
                      __source: {
                          fileName: V,
                          lineNumber: 184
                      }
                  }, f.default.createElement(h.TouchableOpacity, {
                      style: {
                          flex: 1,
                          marginRight: 5,
                          height: 40,
                          borderRadius: 20,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#1496BB'
                      },
                      onPress: function() {
                          k.trackActionWithProperty(k.clickWillGoToEvent, {
                              event: l._id
                          }), t.toggleModal()
                      },
                      __source: {
                          fileName: V,
                          lineNumber: 185
                      }
                  }, f.default.createElement(h.Text, {
                      style: {
                          color: 'white',
                          fontWeight: 'bold'
                      },
                      __source: {
                          fileName: V,
                          lineNumber: 192
                      }
                  }, "\u6211\u6703\u524d\u5f80")), f.default.createElement(N.Badge, {
                      value: n,
                      status: "error",
                      containerStyle: {
                          position: 'absolute',
                          top: -4,
                          right: 0
                      },
                      __source: {
                          fileName: V,
                          lineNumber: 194
                      }
                  })), f.default.createElement(h.TouchableOpacity, {
                      style: {
                          flex: .5,
                          marginLeft: 5,
                          height: 40,
                          borderRadius: 20,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#00c300'
                      },
                      onPress: function() {
                          k.trackActionWithProperty(k.clickShareEvent, {
                              event: l._id
                          });
                          var n = l.adType ? l.url : D + '/events/' + l._id,
                              o = 'ios' === h.Platform.OS ? {
                                  url: n
                              } : {
                                  url: n,
                                  message: n
                              };
                          (0, C.weburlShare)(o, function() {
                              k.trackActionWithProperty(k.shareEventComplete, {
                                  event: l._id
                              }), t.toggleSuccessModal();
                              var n = l.adType ? 'ad' : 'event';
                              t.props.updateCount(l._id, n, 'share', t.props.authToken)
                          })
                      },
                      __source: {
                          fileName: V,
                          lineNumber: 200
                      }
                  }, f.default.createElement(p.Entypo, {
                      style: {
                          paddingRight: 10
                      },
                      name: "share",
                      size: 16,
                      color: "white",
                      __source: {
                          fileName: V,
                          lineNumber: 215
                      }
                  }), f.default.createElement(h.Text, {
                      style: {
                          color: 'white',
                          fontWeight: 'bold'
                      },
                      __source: {
                          fileName: V,
                          lineNumber: 221
                      }
                  }, "\u5206\u4eab"))))
              }
          }]), l
      })(f.default.Component);
  A.navigationOptions = function(t) {
      t.navigation.getParam('data', {});
      return {
          title: '\u8a73\u7d30\u8cc7\u8a0a'
      }
  };
  var L = h.StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: '#fff'
      },
      image: {
          width: x.width,
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
          minHeight: x.height - 410,
          position: 'relative',
          top: -30,
          left: '5%'
      },
      cardContainer: {
          flex: 1,
          padding: 20
      }
  });
  var P = (0, b.connect)(function(t) {
      return {
          authToken: t.auth.serverToken
      }
  }, _)((0, v.withNavigation)(A));
  e.default = P
}