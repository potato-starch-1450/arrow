module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = void 0;
  var l = t(r(d[1])),
      n = t(r(d[2])),
      o = r(d[3]),
      s = "/Users/linyiting/Desktop/Arrow/arrow/components/TeachingModal.js",
      u = (o.Dimensions.get('window'), o.StyleSheet.create({
          modalContainer: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
          }
      })),
      c = function(t) {
          return l.default.createElement(n.default, {
              style: u.modalContainer,
              isVisible: t.isModalVisible,
              onBackdropPress: function() {
                  t.toggleModal()
              },
              __source: {
                  fileName: s,
                  lineNumber: 14
              }
          }, l.default.createElement(o.View, {
              style: {
                  width: '90%',
                  height: '70%'
              },
              __source: {
                  fileName: s,
                  lineNumber: 17
              }
          }, l.default.createElement(o.ScrollView, {
              style: {
                  flex: 1,
                  backgroundColor: 'white',
                  borderRadius: 10
              },
              __source: {
                  fileName: s,
                  lineNumber: 18
              }
          }, t.children)))
      };
  e.default = c
}