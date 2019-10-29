module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = function(t) {
      var s = t.item,
          p = s._id,
          N = s.imgURL,
          y = s.title,
          w = s.location,
          E = s.date,
          h = s.adType,
          v = s.duration,
          T = null;
      v && (T = (0, u.default)(E).add(v, 'm'));
      return l.default.createElement(_, {
          preTriggerRatio: -.2,
          onViewportEnter: function() {
              h && (0, c.logImpression)('start', {
                  id: p.toString(),
                  type: 'ad',
                  startTime: (new Date).getTime()
              })
          },
          onViewportLeave: function() {
              h && (0, c.logImpression)('end', {
                  id: p.toString()
              })
          },
          style: b.card,
          onPress: t.onPress,
          __source: {
              fileName: f,
              lineNumber: 22
          }
      }, l.default.createElement(o.Image, {
          style: b.image,
          source: {
              uri: N
          },
          resizeMode: 'cover',
          __source: {
              fileName: f,
              lineNumber: 35
          }
      }), l.default.createElement(o.View, {
          style: b.cover,
          __source: {
              fileName: f,
              lineNumber: 36
          }
      }, l.default.createElement(o.Text, {
          h4: !0,
          style: [b.coverTitle],
          maxFontSizeMultiplier: 1.1,
          __source: {
              fileName: f,
              lineNumber: 37
          }
      }, y), l.default.createElement(o.View, {
          style: {
              position: 'absolute',
              bottom: 10
          },
          __source: {
              fileName: f,
              lineNumber: 38
          }
      }, l.default.createElement(o.View, {
          style: b.labelContainer,
          __source: {
              fileName: f,
              lineNumber: 39
          }
      }, l.default.createElement(n.Entypo, {
          style: {
              paddingLeft: 10
          },
          name: "location",
          size: 20,
          color: "#e04050",
          __source: {
              fileName: f,
              lineNumber: 40
          }
      }), l.default.createElement(o.Text, {
          style: b.subtitle,
          maxFontSizeMultiplier: 1.1,
          __source: {
              fileName: f,
              lineNumber: 46
          }
      }, w)), l.default.createElement(o.View, {
          style: b.labelContainer,
          __source: {
              fileName: f,
              lineNumber: 48
          }
      }, l.default.createElement(n.Entypo, {
          style: {
              paddingLeft: 10
          },
          name: "calendar",
          size: 20,
          color: "#e04050",
          __source: {
              fileName: f,
              lineNumber: 49
          }
      }), l.default.createElement(o.Text, {
          style: b.subtitle,
          maxFontSizeMultiplier: 1.1,
          __source: {
              fileName: f,
              lineNumber: 55
          }
      }, (0, u.default)(E).format('YYYY/MM/DD HH:mm'), T ? "-" + (0, u.default)(T).format('HH:mm') : '')))))
  };
  var l = t(r(d[1])),
      o = r(d[2]),
      n = r(d[3]),
      u = t(r(d[4])),
      s = (t(r(d[5])), r(d[6])),
      c = (t(r(d[7])), r(d[8])),
      f = "/Users/linyiting/Desktop/Arrow/arrow/components/CardCell.js",
      _ = s.Viewport.Aware(o.TouchableOpacity),
      p = o.Dimensions.get('window');
  var b = o.StyleSheet.create({
      card: {
          padding: 5
      },
      image: {
          width: p.width - 10,
          height: 200
      },
      cover: {
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          position: 'absolute',
          left: 5,
          top: 5,
          right: 5,
          height: 200,
          alignItems: 'flex-start'
      },
      coverTitle: {
          color: 'white',
          fontSize: 28,
          padding: 10
      },
      subtitle: {
          color: 'white',
          fontSize: 20,
          marginLeft: 10
      },
      labelContainer: {
          flexDirection: 'row',
          paddingHorizontal: 5,
          paddingVertical: 5
      }
  })
}