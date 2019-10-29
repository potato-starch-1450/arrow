module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = void 0;
  var n = t(r(d[1])),
      l = t(r(d[2])),
      s = t(r(d[3])),
      o = t(r(d[4])),
      u = t(r(d[5])),
      c = t(r(d[6])),
      f = r(d[7]),
      h = r(d[8]),
      v = t(r(d[9])),
      x = t(r(d[10])),
      I = (t(r(d[11])), t(r(d[12]))),
      p = "/Users/linyiting/Desktop/Arrow/arrow/screens/AchievementVisionScreen.js",
      S = (function(t) {
          function S() {
              var t;
              return (0, n.default)(this, S), (t = (0, s.default)(this, (0, o.default)(S).call(this))).onSegementSelected = function(n) {
                  t.props.navigation.setParams({
                      data: {}
                  }), t.setState({
                      selectedIndex: n
                  })
              }, t.state = {
                  selectedIndex: 0
              }, t
          }
          return (0, u.default)(S, t), (0, l.default)(S, [{
              key: "componentDidUpdate",
              value: function(t, n) {
                  var l = this.props.navigation.getParam('data', {});
                  void 0 != l.selectedIndex ? this.state.selectedIndex !== l.selectedIndex && this.setState({
                      selectedIndex: l.selectedIndex
                  }) : n.selectedIndex !== this.state.selectedIndex && this.setState({
                      selectedIndex: this.state.selectedIndex
                  })
              }
          }, {
              key: "renderContent",
              value: function() {
                  return 0 == this.state.selectedIndex ? c.default.createElement(v.default, {
                      __source: {
                          fileName: p,
                          lineNumber: 52
                      }
                  }) : c.default.createElement(x.default, {
                      __source: {
                          fileName: p,
                          lineNumber: 54
                      }
                  })
              }
          }, {
              key: "render",
              value: function() {
                  return c.default.createElement(f.ImageBackground, {
                      style: _.container,
                      source: r(d[13]),
                      __source: {
                          fileName: p,
                          lineNumber: 61
                      }
                  }, c.default.createElement(h.ButtonGroup, {
                      onPress: this.onSegementSelected,
                      selectedIndex: this.state.selectedIndex,
                      buttons: ['\u5e02\u653f\u6210\u7e3e', '\u570b\u653f\u9858\u666f'],
                      selectedButtonStyle: {
                          backgroundColor: I.default.koreanfishblue
                      },
                      containerStyle: {
                          height: 50,
                          backgroundColor: 'white',
                          borderRadius: 20
                      },
                      __source: {
                          fileName: p,
                          lineNumber: 62
                      }
                  }), this.renderContent())
              }
          }]), S
      })(c.default.Component);
  S.navigationOptions = {
      title: '\u5e02\u653f\u8207\u570b\u653f'
  };
  var _ = f.StyleSheet.create({
          container: {
              flex: 1,
              paddingVertical: 15,
              backgroundColor: '#fff'
          }
      }),
      b = S;
  e.default = b
}