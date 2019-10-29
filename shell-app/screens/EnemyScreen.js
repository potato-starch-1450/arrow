module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]),
      n = r(d[1]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = void 0;
  var o = t(r(d[2])),
      l = t(r(d[3])),
      s = t(r(d[4])),
      u = t(r(d[5])),
      c = t(r(d[6])),
      f = t(r(d[7])),
      p = r(d[8]),
      h = r(d[9]),
      _ = (r(d[10]), r(d[11])),
      N = n(r(d[12])),
      y = r(d[13]),
      b = t(r(d[14])),
      S = t(r(d[15])),
      E = t(r(d[16])),
      M = (t(r(d[17])), t(r(d[18]))),
      v = r(d[19]),
      T = n(r(d[20])),
      k = "/Users/linyiting/Desktop/Arrow/arrow/screens/EnemyScreen.js",
      V = (p.Dimensions.get('window'), (function(t) {
          function n(t) {
              var l;
              return (0, o.default)(this, n), (l = (0, s.default)(this, (0, u.default)(n).call(this, t))).toggleSuccessModal = function() {
                  l.setState({
                      isSuccessModalVisible: !l.state.isSuccessModalVisible
                  })
              }, l.renderShareSuccessModal = function() {
                  return f.default.createElement(M.default, {
                      isSuccessModalVisible: l.state.isSuccessModalVisible,
                      toggleSuccessModal: l.toggleSuccessModal,
                      text: "\u5206\u4eab\u6210\u529f\uff01",
                      iconName: "share",
                      __source: {
                          fileName: k,
                          lineNumber: 74
                      }
                  })
              }, l.renderTutorial = function() {
                  return f.default.createElement(p.View, {
                      style: {
                          padding: 10,
                          backgroundColor: 'white',
                          borderRadius: 10
                      },
                      __source: {
                          fileName: k,
                          lineNumber: 84
                      }
                  }, f.default.createElement(p.Text, {
                      style: {
                          fontSize: 24,
                          paddingTop: 15,
                          fontWeight: '900',
                          padding: 20,
                          alignItems: 'center',
                          color: E.default.koreanfishblue
                      },
                      __source: {
                          fileName: k,
                          lineNumber: 85
                      }
                  }, "\u9019\u662f\u4ec0\u9ebc\uff1f\u6211\u80fd\u600e\u9ebc\u505a\uff1f"), f.default.createElement(p.Text, {
                      style: {
                          fontSize: 20,
                          paddingVertical: 20,
                          fontWeight: '600'
                      },
                      __source: {
                          fileName: k,
                          lineNumber: 86
                      }
                  }, "\u9ed1\u97d3\u7522\u696d\u93c8\u592a\u7316\u7357\u3002\u672c\u9801\u9762\u70ba\u6f84\u6e05\u5c08\u5340\uff0c\u8b93\u6211\u5011\u4ee3\u66ff\u97d3\u5e02\u9577\u767c\u8072\uff0c\u62b5\u5236\u4e0d\u5be6\u6d41\u8a00\u3002"), f.default.createElement(p.Text, {
                      style: {
                          fontSize: 16,
                          paddingLeft: 20,
                          paddingTop: 10
                      },
                      __source: {
                          fileName: k,
                          lineNumber: 87
                      }
                  }, "- \u6309\u4e0b\u300e\u6f84\u6e05\u53bb\u300f\uff0c\u524d\u5f80\u9ed1\u97d3\u9801\u9762\uff0c\u7528\u7559\u8a00\u70ba\u97d3\u5e02\u9577\u8b77\u822a\uff01\u6ce8\u610f\uff01\u907f\u514d\u60c5\u7dd2\u6027\u3001\u4ec7\u6068\u8a00\u8ad6\u3002\u7406\u6027\u70ba\u97d3\u5e02\u9577\u6f84\u6e05\u8b77\u822a\uff0c\u66ff\u97d3\u5e02\u9577\u722d\u53d6\u66f4\u591a\u4eba\u8a8d\u540c\uff01"), f.default.createElement(p.Text, {
                      style: {
                          fontSize: 16,
                          paddingLeft: 20,
                          paddingTop: 10
                      },
                      __source: {
                          fileName: k,
                          lineNumber: 88
                      }
                  }, "- \u6309\u4e0b\u5206\u4eab\uff0c\u5c04\u51fa\u7a7f\u96f2\u7bad\uff0c\u8b93\u66f4\u591a\u97d3\u5bb6\u8ecd\u7528\u7559\u8a00\u8aaa\u51fa\u771f\u76f8\uff01"), f.default.createElement(p.Text, {
                      style: {
                          fontSize: 16,
                          paddingLeft: 20,
                          paddingTop: 10
                      },
                      __source: {
                          fileName: k,
                          lineNumber: 89
                      }
                  }, "- \u5982\u679c\u9ed1\u97d3\u8a0a\u606f\u70ba\u4e0d\u5be6\u6216\u4ec7\u6068\u8a00\u8ad6\uff0c\u7acb\u5373\u6aa2\u8209"), f.default.createElement(p.Image, {
                      style: {
                          paddingVertical: 10,
                          width: '100%',
                          height: 600
                      },
                      source: r(d[21]),
                      resizeMode: "contain",
                      __source: {
                          fileName: k,
                          lineNumber: 90
                      }
                  }))
              }, l.renderItem = function(t) {
                  var n = t.item;
                  return f.default.createElement(b.default, {
                      item: n,
                      postType: "hate",
                      toggleModal: l.toggleModal,
                      updateCount: function(t, n) {
                          var o = t.adType ? 'ad' : 'post';
                          T.trackActionWithProperty(T.clickDefend, {
                              post: t._id
                          }), l.props.updateCount(t._id, o, n, l.props.authToken)
                      },
                      __source: {
                          fileName: k,
                          lineNumber: 99
                      }
                  })
              }, l.toggleModal = function() {
                  l.state.isModalVisible || T.trackAction(T.clickEnemyTutorial), l.setState({
                      isModalVisible: !l.state.isModalVisible
                  })
              }, l.renderFooter = function() {
                  var t = null;
                  return l.props.loading && 0 !== l.props.enemyPosts.length && (t = f.default.createElement(p.View, {
                      style: P.footerStyle,
                      __source: {
                          fileName: k,
                          lineNumber: 148
                      }
                  }, f.default.createElement(p.ActivityIndicator, {
                      size: "large",
                      color: "#FFFFFF",
                      __source: {
                          fileName: k,
                          lineNumber: 149
                      }
                  }))), t
              }, l.onEndReached = function(t) {
                  t.distanceFromEnd >= 0 && l.setState(function(t) {
                      return {
                          page: t.page + 1
                      }
                  }, function() {
                      l.props.hasNextPage && l.props.fetchPosts('hate', l.state.page, !1)
                  })
              }, l.state = {
                  isModalVisible: !1,
                  isSuccessModalVisible: !1,
                  page: 0
              }, l
          }
          return (0, c.default)(n, t), (0, l.default)(n, [{
              key: "componentDidMount",
              value: function() {
                  var t = this;
                  this.props.navigation.setParams({
                      showHelp: this.toggleModal
                  }), this.props.fetchPosts('hate', this.state.page, !0), p.AsyncStorage.getItem('@ENEMY_FIRST').then(function(n) {
                      null !== n && 'true' === n || t.toggleModal(), p.AsyncStorage.setItem('@ENEMY_FIRST', 'true').then(function(t) {})
                  })
              }
          }, {
              key: "componentDidUpdate",
              value: function() {
                  T.trackScreen(T.enemyScreen)
              }
          }, {
              key: "render",
              value: function() {
                  var t = this;
                  return f.default.createElement(p.ImageBackground, {
                      style: P.container,
                      source: r(d[22]),
                      __source: {
                          fileName: k,
                          lineNumber: 115
                      }
                  }, f.default.createElement(S.default, {
                      isModalVisible: this.state.isModalVisible,
                      toggleModal: this.toggleModal,
                      __source: {
                          fileName: k,
                          lineNumber: 116
                      }
                  }, this.renderTutorial()), this.renderShareSuccessModal(), f.default.createElement(v.Viewport.Tracker, {
                      __source: {
                          fileName: k,
                          lineNumber: 123
                      }
                  }, f.default.createElement(p.FlatList, {
                      keyExtractor: function(t) {
                          return t._id
                      },
                      data: this.props.enemyPosts,
                      refreshing: this.props.loading,
                      renderItem: this.renderItem,
                      onRefresh: function() {
                          t.setState(function(t) {
                              return {
                                  page: 0
                              }
                          }, function() {
                              t.props.fetchPosts('hate', t.state.page, !0)
                          })
                      },
                      ListFooterComponent: this.renderFooter,
                      onEndReachedThreshold: .3,
                      onEndReached: this.onEndReached.bind(this),
                      __source: {
                          fileName: k,
                          lineNumber: 124
                      }
                  })))
              }
          }]), n
      })(f.default.Component));
  V.navigationOptions = function(t) {
      var n = t.navigation;
      return {
          title: '\u9ed1\u97d3\u9000\u6563',
          headerRight: f.default.createElement(h.Icon, {
              iconStyle: {
                  paddingRight: 10
              },
              onPress: n.getParam('showHelp'),
              name: "help",
              type: "ionicons",
              color: "#575772",
              __source: {
                  fileName: k,
                  lineNumber: 32
              }
          })
      }
  };
  var P = p.StyleSheet.create({
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
  var w = (0, _.connect)(function(t) {
      return {
          authToken: t.auth.serverToken,
          loading: t.post.loading,
          enemyPosts: t.post.enemyPosts,
          hasNextPage: t.post.hasNextPage,
          error: t.post.error
      }
  }, N)((0, y.withNavigation)(V));
  e.default = w
}