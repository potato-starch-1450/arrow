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
      x = t(r(d[9])),
      I = t(r(d[10])),
      v = t(r(d[11])),
      _ = (t(r(d[12])), t(r(d[13]))),
      b = "/Users/linyiting/Desktop/Arrow/arrow/screens/EventTourScreen.js",
      p = (function(t) {
          function p() {
              var t;
              return (0, n.default)(this, p), (t = (0, s.default)(this, (0, o.default)(p).call(this))).onSegementSelected = function(n) {
                  t.props.navigation.setParams({
                      data: {}
                  }), t.setState({
                      selectedIndex: n
                  })
              }, t.state = {
                  selectedIndex: 0
              }, t
          }
          return (0, u.default)(p, t), (0, l.default)(p, [{
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
                  return 0 === this.state.selectedIndex ? c.default.createElement(x.default, {
                      __source: {
                          fileName: b,
                          lineNumber: 54
                      }
                  }) : 1 === this.state.selectedIndex ? c.default.createElement(v.default, {
                      __source: {
                          fileName: b,
                          lineNumber: 57
                      }
                  }) : c.default.createElement(I.default, {
                      __source: {
                          fileName: b,
                          lineNumber: 59
                      }
                  })
              }
          }, {
              key: "render",
              value: function() {
                  return c.default.createElement(f.ImageBackground, {
                      style: S.container,
                      source: r(d[14]),
                      __source: {
                          fileName: b,
                          lineNumber: 66
                      }
                  }, c.default.createElement(h.ButtonGroup, {
                      onPress: this.onSegementSelected,
                      selectedIndex: this.state.selectedIndex,
                      buttons: ['\u516c\u958b\u884c\u7a0b', '\u9020\u52e2\u6d3b\u52d5', '\u904e\u53bb\u884c\u7a0b'],
                      selectedButtonStyle: {
                          backgroundColor: _.default.koreanfishblue
                      },
                      containerStyle: {
                          height: 50,
                          backgroundColor: 'white',
                          borderRadius: 20
                      },
                      __source: {
                          fileName: b,
                          lineNumber: 67
                      }
                  }), this.renderContent())
              }
          }]), p
      })(c.default.Component);
  p.navigationOptions = {
      title: '\u884c\u7a0b\u8207\u9020\u52e2'
  };
  var S = f.StyleSheet.create({
          container: {
              flex: 1,
              paddingVertical: 15,
              backgroundColor: '#fff'
          }
      }),
      N = p;
  e.default = N
}