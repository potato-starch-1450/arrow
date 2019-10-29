module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = void 0;
  var n = t(r(d[1])),
      l = t(r(d[2])),
      o = r(d[3]),
      s = "/Users/linyiting/Desktop/Arrow/arrow/components/TwoButtonModal.js",
      u = o.StyleSheet.create({
          modalContainer: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white'
          },
          content: {
              backgroundColor: 'white',
              padding: 22,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              borderColor: 'rgba(0, 0, 0, 0.1)'
          }
      }),
      c = function(t) {
          return n.default.createElement(o.View, {
              style: u.modalContainer,
              __source: {
                  fileName: s,
                  lineNumber: 15
              }
          }, n.default.createElement(l.default, {
              isVisible: t.isModalVisible,
              onBackdropPress: function() {
                  t.toggleModal()
              },
              __source: {
                  fileName: s,
                  lineNumber: 16
              }
          }, n.default.createElement(o.View, {
              style: u.content,
              __source: {
                  fileName: s,
                  lineNumber: 19
              }
          }, n.default.createElement(o.Text, {
              __source: {
                  fileName: s,
                  lineNumber: 20
              }
          }, t.title), n.default.createElement(o.View, {
              style: {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginLeft: 10,
                  marginRight: 10,
                  paddingTop: 30
              },
              __source: {
                  fileName: s,
                  lineNumber: 21
              }
          }, n.default.createElement(o.TouchableOpacity, {
              style: {
                  flex: .5,
                  marginRight: 5,
                  height: 40,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: t.isFinished ? t.finishedColor : '#1496BB'
              },
              onPress: t.positiveButtonPressed,
              disabled: t.isFinished,
              __source: {
                  fileName: s,
                  lineNumber: 22
              }
          }, n.default.createElement(o.Text, {
              style: {
                  color: 'white',
                  fontWeight: 'bold'
              },
              __source: {
                  fileName: s,
                  lineNumber: 26
              }
          }, t.isFinished ? t.finishedText : t.positiveButtonTitle)), n.default.createElement(o.TouchableOpacity, {
              style: {
                  flex: .5,
                  marginLeft: 5,
                  height: 40,
                  borderRadius: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'gray'
              },
              onPress: function() {
                  t.toggleModal()
              },
              __source: {
                  fileName: s,
                  lineNumber: 28
              }
          }, n.default.createElement(o.Text, {
              style: {
                  color: 'white',
                  fontWeight: 'bold'
              },
              __source: {
                  fileName: s,
                  lineNumber: 32
              }
          }, t.negativeButtonTitle))), t.isLoading ? n.default.createElement(o.ActivityIndicator, {
              style: {
                  paddingTop: 10
              },
              size: "large",
              animating: t.isLoading,
              __source: {
                  fileName: s,
                  lineNumber: 35
              }
          }) : n.default.createElement(o.View, {
              __source: {
                  fileName: s,
                  lineNumber: 35
              }
          }))))
      };
  e.default = c
}