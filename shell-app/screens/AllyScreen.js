module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]),
      n = r(d[1]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = void 0;
  var o = t(r(d[2])),
      l = t(r(d[3])),
      s = t(r(d[4])),
      c = t(r(d[5])),
      u = t(r(d[6])),
      f = t(r(d[7])),
      p = r(d[8]),
      h = r(d[9]),
      _ = (r(d[10]), r(d[11])),
      y = n(r(d[12])),
      S = r(d[13]),
      N = t(r(d[14])),
      b = t(r(d[15])),
      M = t(r(d[16])),
      k = t(r(d[17])),
      v = r(d[18]),
      E = n(r(d[19])),
      T = "/Users/linyiting/Desktop/Arrow/arrow/screens/AllyScreen.js",
      P = (function(t) {
          function n(t) {
              var l;
              return (0, o.default)(this, n), (l = (0, s.default)(this, (0, c.default)(n).call(this, t))).toggleSuccessModal = function() {
                  l.setState({
                      isSuccessModalVisible: !l.state.isSuccessModalVisible
                  })
              }, l.renderShareSuccessModal = function() {
                  return f.default.createElement(k.default, {
                      isSuccessModalVisible: l.state.isSuccessModalVisible,
                      toggleSuccessModal: l.toggleSuccessModal,
                      text: "\u5206\u4eab\u6210\u529f\uff01",
                      iconName: "share",
                      __source: {
                          fileName: T,
                          lineNumber: 72
                      }
                  })
              }, l.renderItem = function(t) {
                  var n = t.item;
                  return f.default.createElement(N.default, {
                      item: n,
                      postType: "like",
                      toggleModal: l.toggleModal,
                      updateCount: function(t, n) {
                          var o = t.adType ? 'ad' : 'post';
                          l.props.updateCount(t._id, o, n, l.props.authToken), 'share' == n ? (E.trackActionWithProperty(E.hareAllyPostComplete, {
                              post: t._id
                          }), l.toggleSuccessModal()) : E.trackActionWithProperty(E.clickSupport, {
                              post: t._id
                          })
                      },
                      __source: {
                          fileName: T,
                          lineNumber: 81
                      }
                  })
              }, l.renderTutorial = function() {
                  return f.default.createElement(p.View, {
                      style: {
                          padding: 10
                      },
                      __source: {
                          fileName: T,
                          lineNumber: 97
                      }
                  }, f.default.createElement(p.Text, {
                      style: {
                          fontSize: 24,
                          paddingTop: 15,
                          fontWeight: '900',
                          padding: 20,
                          alignItems: 'center',
                          color: M.default.koreanfishblue
                      },
                      __source: {
                          fileName: T,
                          lineNumber: 98
                      }
                  }, "\u9019\u662f\u4ec0\u9ebc\uff1f\u6211\u80fd\u600e\u9ebc\u505a\uff1f"), f.default.createElement(p.Text, {
                      style: {
                          fontSize: 20,
                          paddingVertical: 20,
                          fontWeight: '600'
                      },
                      __source: {
                          fileName: T,
                          lineNumber: 99
                      }
                  }, "\u97d3\u5e02\u9577\u70ba\u653f\u58c7\u4e00\u80a1\u6e05\u6d41\uff0c\u52e2\u55ae\u529b\u8584\u7684\u97d3\u5e02\u9577\uff0c\u5c0d\u65bc\u9858\u610f\u4f38\u51fa\u63f4\u624b\u7684\u53cb\u8ecd\u90fd\u975e\u5e38\u611f\u8b1d\u3002 \u672c\u9801\u9762\u70ba\u6700\u65b0\u633a\u97d3\u65b0\u805e\uff0c\u8b93\u6211\u5011\u4ee3\u66ff\u97d3\u5e02\u9577\uff0c\u611f\u8b1d\u53cb\u8ecd\u7684\u652f\u63f4\uff01\u8b93\u66f4\u591a\u4eba\u77e5\u9053\u76ee\u524d\u57f7\u653f\u9ee8\u7684\u60e1\u884c\u60e1\u72c0\u3002 \u4e5f\u8b93\u97d3\u5e02\u9577\u7684\u597d\u8b93\u66f4\u591a\u4eba\u770b\u5230\uff01"), f.default.createElement(p.Text, {
                      style: {
                          fontSize: 16,
                          paddingLeft: 20,
                          paddingTop: 10
                      },
                      __source: {
                          fileName: T,
                          lineNumber: 104
                      }
                  }, "- \u6309\u4e0b\u300e\u524d\u5f80\u8b9a\u8072\u300f\uff0c\u7528\u7559\u8a00\u6216\u662f\u8b9a\uff0c\u8072\u63f4\u6211\u5011\u7684\u53cb\u8ecd\uff01"), f.default.createElement(p.Text, {
                      style: {
                          fontSize: 16,
                          paddingLeft: 20,
                          paddingTop: 10
                      },
                      __source: {
                          fileName: T,
                          lineNumber: 105
                      }
                  }, "- \u6309\u4e0b\u5206\u4eab\uff0c\u5c04\u51fa\u7a7f\u96f2\u7bad\uff0c\u8b93\u66f4\u591a\u97d3\u5bb6\u8ecd\u7528\u7559\u8a00\u8072\u63f4\u53cb\u8ecd\uff01"))
              }, l.toggleModal = function() {
                  l.state.isModalVisible || E.trackAction(E.clickAllyTutorial), l.setState({
                      isModalVisible: !l.state.isModalVisible
                  })
              }, l.renderFooter = function() {
                  var t = null;
                  return l.props.loading && 0 !== l.props.allyPosts.length && (t = f.default.createElement(p.View, {
                      style: V.footerStyle,
                      __source: {
                          fileName: T,
                          lineNumber: 149
                      }
                  }, f.default.createElement(p.ActivityIndicator, {
                      size: "large",
                      color: "#FFFFFF",
                      __source: {
                          fileName: T,
                          lineNumber: 150
                      }
                  }))), t
              }, l.onEndReached = function(t) {
                  t.distanceFromEnd >= 0 && l.setState(function(t) {
                      return {
                          page: t.page + 1
                      }
                  }, function() {
                      l.props.hasNextPage && l.props.fetchPosts('like', l.state.page, !1)
                  })
              }, l.state = {
                  page: 0,
                  isModalVisible: !1,
                  isSuccessModalVisible: !1
              }, l
          }
          return (0, u.default)(n, t), (0, l.default)(n, [{
              key: "componentDidMount",
              value: function() {
                  var t = this;
                  this.props.navigation.setParams({
                      showHelp: this.toggleModal
                  }), this.props.fetchPosts('like', this.state.page, !0), p.AsyncStorage.getItem('@ALLY_FIRST').then(function(n) {
                      null !== n && 'true' === n || t.toggleModal(), p.AsyncStorage.setItem('@ALLY_FIRST', 'true').then(function(t) {})
                  })
              }
          }, {
              key: "componentDidUpdate",
              value: function() {
                  E.trackScreen(E.allyScreen)
              }
          }, {
              key: "render",
              value: function() {
                  var t = this;
                  return f.default.createElement(p.ImageBackground, {
                      style: V.container,
                      source: r(d[20]),
                      __source: {
                          fileName: T,
                          lineNumber: 118
                      }
                  }, f.default.createElement(b.default, {
                      isModalVisible: this.state.isModalVisible,
                      toggleModal: this.toggleModal,
                      __source: {
                          fileName: T,
                          lineNumber: 119
                      }
                  }, this.renderTutorial()), this.renderShareSuccessModal(), f.default.createElement(v.Viewport.Tracker, {
                      __source: {
                          fileName: T,
                          lineNumber: 124
                      }
                  }, f.default.createElement(p.FlatList, {
                      keyExtractor: function(t) {
                          return t._id
                      },
                      data: this.props.allyPosts,
                      refreshing: this.props.loading,
                      renderItem: this.renderItem,
                      onRefresh: function() {
                          t.setState(function(t) {
                              return {
                                  page: 0
                              }
                          }, function() {
                              t.props.fetchPosts('like', t.state.page, !0)
                          })
                      },
                      onEndReached: this.onEndReached.bind(this),
                      onEndReachedThreshold: .3,
                      ListFooterComponent: this.renderFooter,
                      __source: {
                          fileName: T,
                          lineNumber: 125
                      }
                  })))
              }
          }]), n
      })(f.default.Component);
  P.navigationOptions = function(t) {
      var n = t.navigation;
      return {
          title: '\u6700\u65b0\u633a\u97d3\u65b0\u805e',
          headerRight: f.default.createElement(h.Icon, {
              iconStyle: {
                  paddingRight: 10
              },
              onPress: n.getParam('showHelp'),
              name: "help",
              type: "ionicons",
              color: "#575772",
              __source: {
                  fileName: T,
                  lineNumber: 30
              }
          })
      }
  };
  var V = p.StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: '#f1f1f2'
      },
      footerStyle: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          height: 44
      }
  });
  var F = (0, _.connect)(function(t) {
      return {
          authToken: t.auth.serverToken,
          loading: t.post.loading,
          allyPosts: t.post.allyPosts,
          hasNextPage: t.post.hasNextPage
      }
  }, y)((0, S.withNavigation)(P));
  e.default = F
}