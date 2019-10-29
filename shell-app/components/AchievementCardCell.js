module.exports = function(g, r, i, a, m, e, d) {
  var t = r(d[0]);
  Object.defineProperty(e, "__esModule", {
      value: !0
  }), e.default = function(t) {
      var l = t.item,
          f = l._id,
          w = l.imgURL,
          h = l.title,
          _ = l.adType;
      return o.default.createElement(u, {
          preTriggerRatio: -.2,
          onViewportEnter: function() {
              _ && (0, s.logImpression)('start', {
                  id: f.toString(),
                  type: 'ad',
                  startTime: (new Date).getTime()
              })
          },
          onViewportLeave: function() {
              _ && (0, s.logImpression)('end', {
                  id: f.toString()
              })
          },
          style: p.card,
          onPress: t.onPress,
          __source: {
              fileName: c,
              lineNumber: 19
          }
      }, o.default.createElement(n.Image, {
          style: p.image,
          source: {
              uri: w
          },
          resizeMode: 'cover',
          __source: {
              fileName: c,
              lineNumber: 32
          }
      }), o.default.createElement(n.View, {
          style: p.cover,
          __source: {
              fileName: c,
              lineNumber: 33
          }
      }, o.default.createElement(n.Text, {
          h4: !0,
          style: [p.coverTitle],
          maxFontSizeMultiplier: 1.1,
          __source: {
              fileName: c,
              lineNumber: 34
          }
      }, h)))
  };
  var o = t(r(d[1])),
      n = r(d[2]),
      l = (r(d[3]), t(r(d[4])), t(r(d[5])), r(d[6])),
      s = (t(r(d[7])), r(d[8])),
      c = "/Users/linyiting/Desktop/Arrow/arrow/components/AchievementCardCell.js",
      u = l.Viewport.Aware(n.TouchableOpacity),
      f = n.Dimensions.get('window');
  var p = n.StyleSheet.create({
      card: {
          padding: 5
      },
      image: {
          width: f.width - 10,
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