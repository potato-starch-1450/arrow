module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = void 0;
  var n = t(r(d[1])),
      l = t(r(d[2])),
      o = r(d[3]),
      s = r(d[4]),
      u = t(r(d[5])),
      c = "/Users/linyiting/Desktop/Arrow/arrow/components/SuccessAlert.js",
      f = o.StyleSheet.create({
          modalContainer: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
          }
      }),
      _ = function(t) {
          var _ = t.isSuccessModalVisible,
              b = t.toggleSuccessModal,
              p = t.text,
              N = t.iconName;
          return n.default.createElement(l.default, {
              style: f.modalContainer,
              isVisible: _,
              animationType: "fade",
              onBackdropPress: function() {
                  b()
              },
              __source: {
                  fileName: c,
                  lineNumber: 15
              }
          }, n.default.createElement(o.View, {
              style: {
                  backgroundColor: 'white',
                  borderRadius: 10,
                  padding: 10
              },
              __source: {
                  fileName: c,
                  lineNumber: 23
              }
          }, n.default.createElement(s.Icon, {
              size: 40,
              name: N,
              color: u.default.koreanfishblue,
              __source: {
                  fileName: c,
                  lineNumber: 24
              }
          }), n.default.createElement(o.Text, {
              style: {
                  fontSize: 24,
                  paddingTop: 15,
                  fontWeight: '900',
                  padding: 20,
                  alignItems: 'center',
                  color: u.default.koreanfishblue
              },
              __source: {
                  fileName: c,
                  lineNumber: 28
              }
          }, p)))
      };
  e.default = _
}