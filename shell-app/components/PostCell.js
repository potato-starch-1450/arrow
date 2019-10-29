module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = void 0;
  var l = t(r(d[1])),
      n = t(r(d[2])),
      o = t(r(d[3])),
      u = t(r(d[4])),
      c = t(r(d[5])),
      s = t(r(d[6])),
      f = r(d[7]),
      y = r(d[8]),
      b = r(d[9]),
      _ = r(d[10]),
      h = t(r(d[11])),
      p = r(d[12]),
      N = t(r(d[13])),
      w = r(d[14]),
      E = r(d[15]),
      T = "/Users/linyiting/Desktop/Arrow/arrow/components/PostCell.js",
      S = w.Viewport.Aware(f.View),
      x = N.default.manifest.extra.shareUrl,
      C = (function(t) {
          function N() {
              return (0, l.default)(this, N), (0, o.default)(this, (0, u.default)(N).apply(this, arguments))
          }
          return (0, c.default)(N, t), (0, n.default)(N, [{
              key: "renderBadge",
              value: function(t) {
                  if (t > 0) return s.default.createElement(y.Badge, {
                      value: h.default.getFormattedNumber(t),
                      status: "error",
                      containerStyle: {
                          position: 'absolute',
                          top: -4,
                          right: -4
                      },
                      __source: {
                          fileName: T,
                          lineNumber: 19
                      }
                  })
              }
          }, {
              key: "renderReply",
              value: function(t) {
                  if (t) return s.default.createElement(f.TouchableOpacity, {
                      style: {
                          borderRadius: 10,
                          margin: 6,
                          backgroundColor: '#f5d142',
                          padding: 12
                      },
                      onPress: function() {
                          f.Clipboard.setString(t), f.Alert.alert('\u8907\u88fd\u6210\u529f', '\u5df2\u5c07\u6f84\u6e05\u5167\u5bb9\u8907\u88fd\u81f3\u526a\u8cbc\u7c3f')
                      },
                      __source: {
                          fileName: T,
                          lineNumber: 31
                      }
                  }, s.default.createElement(f.Text, {
                      style: {
                          fontWeight: '700',
                          fontSize: 18
                      },
                      __source: {
                          fileName: T,
                          lineNumber: 38
                      }
                  }, "\u9ed1\u97d3\u9000\u6563\uff1a"), s.default.createElement(f.Text, {
                      style: {
                          fontSize: 14,
                          padding: 5
                      },
                      __source: {
                          fileName: T,
                          lineNumber: 39
                      }
                  }, t))
              }
          }, {
              key: "renderShare",
              value: function(t, l, n) {
                  if (l) return s.default.createElement(f.TouchableOpacity, {
                      style: {
                          flex: .33,
                          marginLeft: 5,
                          height: 40,
                          borderRadius: 15,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#00c300'
                      },
                      onPress: function() {
                          var l = t.adType ? t.url : x + '/posts/' + t._id,
                              o = 'ios' === f.Platform.OS ? {
                                  url: l
                              } : {
                                  url: l,
                                  message: l
                              };
                          (0, p.weburlShare)(o, function() {
                              n(t, 'share')
                          })
                      },
                      __source: {
                          fileName: T,
                          lineNumber: 50
                      }
                  }, s.default.createElement(f.Text, {
                      style: {
                          color: 'white',
                          fontWeight: 'bold'
                      },
                      __source: {
                          fileName: T,
                          lineNumber: 59
                      }
                  }, '\u5206\u4eab'))
              }
          }, {
              key: "render",
              value: function() {
                  var t = this.props,
                      l = t.item,
                      n = t.updateCount,
                      o = t.postType,
                      u = t.toggleModal,
                      c = l._id,
                      p = l.adType,
                      N = 'like' == o;
                  return s.default.createElement(S, {
                      preTriggerRatio: -.1,
                      onViewportEnter: function() {
                          p && (0, E.logImpression)('start', {
                              id: c.toString(),
                              type: 'ad',
                              startTime: (new Date).getTime()
                          })
                      },
                      onViewportLeave: function() {
                          p && (0, E.logImpression)('end', {
                              id: c.toString()
                          })
                      },
                      style: k.containerStyle,
                      __source: {
                          fileName: T,
                          lineNumber: 69
                      }
                  }, s.default.createElement(f.View, {
                      style: k.contentContainerStyle,
                      __source: {
                          fileName: T,
                          lineNumber: 82
                      }
                  }, s.default.createElement(f.View, {
                      style: {
                          flexDirection: "row"
                      },
                      __source: {
                          fileName: T,
                          lineNumber: 83
                      }
                  }, s.default.createElement(y.Avatar, {
                      rounded: !0,
                      source: {
                          uri: l.authorImgURL
                      },
                      __source: {
                          fileName: T,
                          lineNumber: 84
                      }
                  }), s.default.createElement(f.View, {
                      style: {
                          flexDirection: "column",
                          alignItems: 'flex-start',
                          flex: 1
                      },
                      __source: {
                          fileName: T,
                          lineNumber: 88
                      }
                  }, s.default.createElement(f.Text, {
                      style: k.titleStyle,
                      h2: !0,
                      __source: {
                          fileName: T,
                          lineNumber: 89
                      }
                  }, l.authorName), s.default.createElement(f.Text, {
                      style: k.rightTitle,
                      __source: {
                          fileName: T,
                          lineNumber: 90
                      }
                  }, l.adType ? '\u8d0a\u52a9' : h.default.getFormattedDatetime(l.date)))), s.default.createElement(f.View, {
                      __source: {
                          fileName: T,
                          lineNumber: 93
                      }
                  }, s.default.createElement(f.Text, {
                      style: k.subtitleStyle,
                      __source: {
                          fileName: T,
                          lineNumber: 94
                      }
                  }, l.detail), this.renderReply(l.reply), s.default.createElement(f.View, {
                      style: {
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginLeft: 10,
                          marginRight: 10,
                          marginTop: 10
                      },
                      __source: {
                          fileName: T,
                          lineNumber: 96
                      }
                  }, s.default.createElement(f.View, {
                      style: {
                          flex: N ? .33 : .67
                      },
                      __source: {
                          fileName: T,
                          lineNumber: 97
                      }
                  }, s.default.createElement(f.TouchableOpacity, {
                      style: {
                          flex: 1,
                          marginRight: 5,
                          height: 40,
                          borderRadius: 15,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#1496BB'
                      },
                      onPress: function() {
                          n(l, 'click'), f.Linking.openURL(l.adType ? l.url : l.postURL).catch(function(t) {
                              (0, _.showMessage)({
                                  message: '\u767c\u751f\u932f\u8aa4',
                                  description: t.message,
                                  type: "danger"
                              })
                          })
                      },
                      __source: {
                          fileName: T,
                          lineNumber: 98
                      }
                  }, s.default.createElement(f.Text, {
                      style: {
                          color: 'white',
                          fontWeight: 'bold'
                      },
                      __source: {
                          fileName: T,
                          lineNumber: 111
                      }
                  }, N ? "\u524d\u5f80\u8b9a\u8072" : "\u6f84\u6e05\u53bb")), this.renderBadge(l.clickCount)), this.renderShare(l, N, n), s.default.createElement(f.TouchableOpacity, {
                      style: {
                          flex: .33,
                          marginLeft: 5,
                          height: 40,
                          borderRadius: 15,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#EFDECD'
                      },
                      onPress: function() {
                          u()
                      },
                      __source: {
                          fileName: T,
                          lineNumber: 116
                      }
                  }, s.default.createElement(f.Text, {
                      style: {
                          color: 'white',
                          fontWeight: 'bold'
                      },
                      __source: {
                          fileName: T,
                          lineNumber: 120
                      }
                  }, "\u9019\u662f\u4ec0\u9ebc"), s.default.createElement(b.Entypo, {
                      name: "help",
                      size: 16,
                      color: "white",
                      __source: {
                          fileName: T,
                          lineNumber: 121
                      }
                  }))))))
              }
          }]), N
      })(s.default.PureComponent),
      k = f.StyleSheet.create({
          rightTitle: {
              color: 'black',
              fontSize: 14,
              marginLeft: 10
          },
          titleStyle: {
              color: 'black',
              fontWeight: 'bold',
              fontSize: 18,
              marginLeft: 10
          },
          containerStyle: {
              borderRadius: 10,
              margin: 6,
              backgroundColor: 'white',
              padding: 12
          },
          subtitleStyle: {
              color: 'black',
              fontSize: 16,
              marginTop: 10,
              flexWrap: 'wrap'
          },
          contentContainerStyle: {
              flex: 1
          },
          defendButton: {
              flex: 1,
              marginRight: 5,
              height: 60,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'blue'
          },
          howToDoTextStyle: {
              color: 'white',
              fontSize: 12
          }
      }),
      R = C;
  e.default = R
}