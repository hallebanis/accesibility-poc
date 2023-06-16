!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.Accessibility = t())
    : (e.Accessibility = t());
})(self, () =>
  (() => {
    var e = {
        982: (e, t, n) => {
          'use strict';
          n.d(t, { Z: () => i });
          var o = n(537),
            r = n.n(o),
            c = n(645),
            a = n.n(c)()(r());
          a.push([
            e.id,
            '@import url(https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css);',
          ]),
            a.push([
              e.id,
              '.invert {\n    filter: invert(100%);\n    background-color: black;\n    color: black !important;\n}\n\n.dark-mode div {\n    /* Styles for dark mode */\n    background-color: #000000;\n    color: #ffffff;\n}\n\n.dark-mode p {\n    /* Override color for paragraphs in dark mode */\n    color: #cccccc;\n}\n\n.dark-mode .container h1 {\n    /* Override color for headings inside container in dark mode */\n    color: #dddddd;\n}\n\n.dark-mode .collapse .card {\n    background-color: #000000;\n    border: 1px solid white !important;\n}',
              '',
              {
                version: 3,
                sources: ['webpack://./src/style/style.css'],
                names: [],
                mappings:
                  'AAEA;IACI,oBAAoB;IACpB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,+CAA+C;IAC/C,cAAc;AAClB;;AAEA;IACI,8DAA8D;IAC9D,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,kCAAkC;AACtC',
                sourcesContent: [
                  "@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');\n\n.invert {\n    filter: invert(100%);\n    background-color: black;\n    color: black !important;\n}\n\n.dark-mode div {\n    /* Styles for dark mode */\n    background-color: #000000;\n    color: #ffffff;\n}\n\n.dark-mode p {\n    /* Override color for paragraphs in dark mode */\n    color: #cccccc;\n}\n\n.dark-mode .container h1 {\n    /* Override color for headings inside container in dark mode */\n    color: #dddddd;\n}\n\n.dark-mode .collapse .card {\n    background-color: #000000;\n    border: 1px solid white !important;\n}",
                ],
                sourceRoot: '',
              },
            ]);
          const i = a;
        },
        645: (e) => {
          'use strict';
          e.exports = function (e) {
            var t = [];
            return (
              (t.toString = function () {
                return this.map(function (t) {
                  var n = '',
                    o = void 0 !== t[5];
                  return (
                    t[4] && (n += '@supports ('.concat(t[4], ') {')),
                    t[2] && (n += '@media '.concat(t[2], ' {')),
                    o &&
                      (n += '@layer'.concat(
                        t[5].length > 0 ? ' '.concat(t[5]) : '',
                        ' {'
                      )),
                    (n += e(t)),
                    o && (n += '}'),
                    t[2] && (n += '}'),
                    t[4] && (n += '}'),
                    n
                  );
                }).join('');
              }),
              (t.i = function (e, n, o, r, c) {
                'string' == typeof e && (e = [[null, e, void 0]]);
                var a = {};
                if (o)
                  for (var i = 0; i < this.length; i++) {
                    var s = this[i][0];
                    null != s && (a[s] = !0);
                  }
                for (var l = 0; l < e.length; l++) {
                  var d = [].concat(e[l]);
                  (o && a[d[0]]) ||
                    (void 0 !== c &&
                      (void 0 === d[5] ||
                        (d[1] = '@layer'
                          .concat(d[5].length > 0 ? ' '.concat(d[5]) : '', ' {')
                          .concat(d[1], '}')),
                      (d[5] = c)),
                    n &&
                      (d[2]
                        ? ((d[1] = '@media '
                            .concat(d[2], ' {')
                            .concat(d[1], '}')),
                          (d[2] = n))
                        : (d[2] = n)),
                    r &&
                      (d[4]
                        ? ((d[1] = '@supports ('
                            .concat(d[4], ') {')
                            .concat(d[1], '}')),
                          (d[4] = r))
                        : (d[4] = ''.concat(r))),
                    t.push(d));
                }
              }),
              t
            );
          };
        },
        537: (e) => {
          'use strict';
          e.exports = function (e) {
            var t = e[1],
              n = e[3];
            if (!n) return t;
            if ('function' == typeof btoa) {
              var o = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
                r =
                  'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                    o
                  ),
                c = '/*# '.concat(r, ' */');
              return [t].concat([c]).join('\n');
            }
            return [t].join('\n');
          };
        },
        379: (e) => {
          'use strict';
          var t = [];
          function n(e) {
            for (var n = -1, o = 0; o < t.length; o++)
              if (t[o].identifier === e) {
                n = o;
                break;
              }
            return n;
          }
          function o(e, o) {
            for (var c = {}, a = [], i = 0; i < e.length; i++) {
              var s = e[i],
                l = o.base ? s[0] + o.base : s[0],
                d = c[l] || 0,
                u = ''.concat(l, ' ').concat(d);
              c[l] = d + 1;
              var p = n(u),
                f = {
                  css: s[1],
                  media: s[2],
                  sourceMap: s[3],
                  supports: s[4],
                  layer: s[5],
                };
              if (-1 !== p) t[p].references++, t[p].updater(f);
              else {
                var m = r(f, o);
                (o.byIndex = i),
                  t.splice(i, 0, { identifier: u, updater: m, references: 1 });
              }
              a.push(u);
            }
            return a;
          }
          function r(e, t) {
            var n = t.domAPI(t);
            return (
              n.update(e),
              function (t) {
                if (t) {
                  if (
                    t.css === e.css &&
                    t.media === e.media &&
                    t.sourceMap === e.sourceMap &&
                    t.supports === e.supports &&
                    t.layer === e.layer
                  )
                    return;
                  n.update((e = t));
                } else n.remove();
              }
            );
          }
          e.exports = function (e, r) {
            var c = o((e = e || []), (r = r || {}));
            return function (e) {
              e = e || [];
              for (var a = 0; a < c.length; a++) {
                var i = n(c[a]);
                t[i].references--;
              }
              for (var s = o(e, r), l = 0; l < c.length; l++) {
                var d = n(c[l]);
                0 === t[d].references && (t[d].updater(), t.splice(d, 1));
              }
              c = s;
            };
          };
        },
        569: (e) => {
          'use strict';
          var t = {};
          e.exports = function (e, n) {
            var o = (function (e) {
              if (void 0 === t[e]) {
                var n = document.querySelector(e);
                if (
                  window.HTMLIFrameElement &&
                  n instanceof window.HTMLIFrameElement
                )
                  try {
                    n = n.contentDocument.head;
                  } catch (e) {
                    n = null;
                  }
                t[e] = n;
              }
              return t[e];
            })(e);
            if (!o)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            o.appendChild(n);
          };
        },
        216: (e) => {
          'use strict';
          e.exports = function (e) {
            var t = document.createElement('style');
            return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
          };
        },
        565: (e, t, n) => {
          'use strict';
          e.exports = function (e) {
            var t = n.nc;
            t && e.setAttribute('nonce', t);
          };
        },
        795: (e) => {
          'use strict';
          e.exports = function (e) {
            if ('undefined' == typeof document)
              return { update: function () {}, remove: function () {} };
            var t = e.insertStyleElement(e);
            return {
              update: function (n) {
                !(function (e, t, n) {
                  var o = '';
                  n.supports && (o += '@supports ('.concat(n.supports, ') {')),
                    n.media && (o += '@media '.concat(n.media, ' {'));
                  var r = void 0 !== n.layer;
                  r &&
                    (o += '@layer'.concat(
                      n.layer.length > 0 ? ' '.concat(n.layer) : '',
                      ' {'
                    )),
                    (o += n.css),
                    r && (o += '}'),
                    n.media && (o += '}'),
                    n.supports && (o += '}');
                  var c = n.sourceMap;
                  c &&
                    'undefined' != typeof btoa &&
                    (o +=
                      '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(c)))),
                        ' */'
                      )),
                    t.styleTagTransform(o, e, t.options);
                })(t, e, n);
              },
              remove: function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(t);
              },
            };
          };
        },
        589: (e) => {
          'use strict';
          e.exports = function (e, t) {
            if (t.styleSheet) t.styleSheet.cssText = e;
            else {
              for (; t.firstChild; ) t.removeChild(t.firstChild);
              t.appendChild(document.createTextNode(e));
            }
          };
        },
        313: (e) => {
          e.exports = {
            attributes: {
              id: 'Layer_1',
              'data-name': 'Layer 1',
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 122.88 122.88',
            },
            content:
              '<title>accessibility</title><path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0Zm-.39,74.18L52.1,98.91a4.94,4.94,0,0,1-2.58,2.83A5,5,0,0,1,42.7,95.5l6.24-17.28a26.3,26.3,0,0,0,1.17-4,40.64,40.64,0,0,0,.54-4.18c.24-2.53.41-5.27.54-7.9s.22-5.18.29-7.29c.09-2.63-.62-2.8-2.73-3.3l-.44-.1-18-3.39A5,5,0,0,1,27.08,46a5,5,0,0,1,5.05-7.74l19.34,3.63c.77.07,1.52.16,2.31.25a57.64,57.64,0,0,0,7.18.53A81.13,81.13,0,0,0,69.9,42c.9-.1,1.75-.21,2.6-.29l18.25-3.42A5,5,0,0,1,94.5,39a5,5,0,0,1,1.3,7,5,5,0,0,1-3.21,2.09L75.15,51.37c-.58.13-1.1.22-1.56.29-1.82.31-2.72.47-2.61,3.06.08,1.89.31,4.15.61,6.51.35,2.77.81,5.71,1.29,8.4.31,1.77.6,3.19,1,4.55s.79,2.75,1.39,4.42l6.11,16.9a5,5,0,0,1-6.82,6.24,4.94,4.94,0,0,1-2.58-2.83L63,74.23,62,72.4l-1,1.78Zm.39-53.52a8.83,8.83,0,1,1-6.24,2.59,8.79,8.79,0,0,1,6.24-2.59Zm36.35,4.43a51.42,51.42,0,1,0,15,36.35,51.27,51.27,0,0,0-15-36.35Z"/>',
          };
        },
      },
      t = {};
    function n(o) {
      var r = t[o];
      if (void 0 !== r) return r.exports;
      var c = (t[o] = { id: o, exports: {} });
      return e[o](c, c.exports, n), c.exports;
    }
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
      (n.d = (e, t) => {
        for (var o in t)
          n.o(t, o) &&
            !n.o(e, o) &&
            Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
      }),
      (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (n.nc = void 0);
    var o = {};
    return (
      (() => {
        'use strict';
        n.d(o, { default: () => S });
        var e = n(379),
          t = n.n(e),
          r = n(795),
          c = n.n(r),
          a = n(569),
          i = n.n(a),
          s = n(565),
          l = n.n(s),
          d = n(216),
          u = n.n(d),
          p = n(589),
          f = n.n(p),
          m = n(982),
          v = {};
        (v.styleTagTransform = f()),
          (v.setAttributes = l()),
          (v.insert = i().bind(null, 'head')),
          (v.domAPI = c()),
          (v.insertStyleElement = u()),
          t()(m.Z, v),
          m.Z && m.Z.locals && m.Z.locals;
        var y = n(313),
          b = n.n(y),
          h = function (e, t) {
            var n = document.createElement(e);
            if (t) for (var o in t) n.setAttribute(o, t[o]);
            return n;
          };
        function g(e) {
          return (
            (g =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            g(e)
          );
        }
        function A(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t &&
              (o = o.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, o);
          }
          return n;
        }
        function k(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? A(Object(n), !0).forEach(function (t) {
                  C(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : A(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function C(e, t, n) {
          return (
            (t = w(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function x(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(e, w(o.key), o);
          }
        }
        function w(e) {
          var t = (function (e, t) {
            if ('object' !== g(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(e, 'string');
              if ('object' !== g(o)) return o;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return String(e);
          })(e);
          return 'symbol' === g(t) ? t : String(t);
        }
        const S = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.config = {
                imageControl: !0,
                contrastControl: !0,
                fontControl: !0,
                textToSpeech: !0,
              }),
              (this.init = this.init.bind(this));
          }
          var t, n;
          return (
            (t = e),
            (n = [
              {
                key: 'init',
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : document.body,
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 'start',
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : void 0,
                    o = document.createElement('p'),
                    r = h('button', {
                      id: 'accessibility-button',
                      class: 'btn btn-primary rounded-circle',
                      type: 'button',
                      'data-bs-toggle': 'collapse',
                      'data-bs-target': '#collapseWidthExample',
                      'aria-expanded': 'false',
                      'aria-controls': 'collapseWidthExample',
                    }),
                    c = h('img', {
                      src: b(),
                      alt: 'Accessibility Icon',
                      width: '45',
                      height: '45',
                    });
                  r.append(c),
                    o.append(r),
                    'start' === t ? e.prepend(o) : e.append(o);
                  var a = h('div', { id: 'accessibility-container' });
                  (a.style.minHeight = '120px'),
                    (a.style.position = 'relative'),
                    (a.style.zIndex = '2000');
                  var i = h('div', {
                    class: 'collapse collapse-horizontal',
                    id: 'collapseWidthExample',
                  });
                  (i.style.position = 'absolute'),
                    (i.style.top = '0'),
                    (i.style.right = '0');
                  var s = [];
                  if (
                    ((n = n ? k(k({}, this.config), n) : k({}, this.config)),
                    console.log(n),
                    n.contrastControl)
                  ) {
                    var l = h('div', { class: 'card card-body' });
                    l.style.width = '300px';
                    var d = h('label', {
                      class: 'form-label',
                      for: 'contrast-control',
                    });
                    d.textContent = 'contrast';
                    var u = h('input', {
                      type: 'range',
                      class: 'form-range',
                      min: '0',
                      max: '2',
                      step: '1',
                      value: '1',
                      id: 'contrast-control',
                    });
                    u.addEventListener('change', function (e) {
                      console.log(e.target.value),
                        0 == e.target.value
                          ? (document.body.classList.toggle('invert'),
                            document.body.classList.contains('dark-mode') &&
                              document.body.classList.toggle('dark-mode'))
                          : 2 == e.target.value
                          ? (document.body.classList.contains('invert') &&
                              document.body.classList.toggle('invert'),
                            document.body.classList.toggle('dark-mode'))
                          : (document.body.classList.contains('dark-mode') &&
                              document.body.classList.toggle('dark-mode'),
                            document.body.classList.contains('invert') &&
                              document.body.classList.toggle('invert'));
                    }),
                      l.append(d, u),
                      s.push(l);
                  }
                  if (n.fontControl) {
                    var p = h('div', { class: 'card card-body' });
                    p.style.width = '300px';
                    var f = h('label', {
                      class: 'form-label',
                      for: 'font-control',
                    });
                    f.textContent = 'font';
                    var m = h('input', {
                      type: 'range',
                      class: 'form-range',
                      min: '0',
                      max: '2',
                      step: '1',
                      value: '1',
                      id: 'font-control',
                    });
                    m.addEventListener('change', function (e) {
                      0 == e.target.value &&
                        (document.body.style.zoom = '100%'),
                        1 == e.target.value &&
                          (document.body.style.zoom = '110%'),
                        2 == e.target.value &&
                          (document.body.style.zoom = '120%');
                    }),
                      p.append(f, m),
                      s.push(p);
                  }
                  if (n.imageControl) {
                    var v = h('div', { class: 'card card-body' });
                    v.style.width = '300px';
                    var y = h('div', { class: 'form-check form-switch' }),
                      g = h('input', {
                        class: 'form-check-input',
                        type: 'checkbox',
                        role: 'switch',
                        id: 'image-control-switch',
                        checked: !0,
                      });
                    g.addEventListener('click', function (e) {
                      var t = document.querySelectorAll('img');
                      for (var n in t) {
                        var o, r;
                        e.target.checked
                          ? null !== (o = t[n]) &&
                            void 0 !== o &&
                            o.style &&
                            (t[n].style.visibility = 'visible')
                          : null !== (r = t[n]) &&
                            void 0 !== r &&
                            r.style &&
                            (t[n].style.visibility = 'hidden');
                      }
                    });
                    var A = h('label', {
                      class: 'form-check-label',
                      for: 'flexSwitchCheckChecked',
                    });
                    (A.textContent = 'image'),
                      y.append(g, A),
                      v.appendChild(y),
                      s.push(v);
                  }
                  if (n.textToSpeech) {
                    var C = function () {
                        if (document.getSelection().toString().length) {
                          var e = window.speechSynthesis,
                            t = document.getSelection().toString(),
                            n = new SpeechSynthesisUtterance(t);
                          e.speak(n);
                        }
                      },
                      x = h('div', { class: 'card card-body' });
                    x.style.width = '300px';
                    var w = h('div', { class: 'form-check form-switch' }),
                      S = h('input', {
                        class: 'form-check-input',
                        type: 'checkbox',
                        role: 'switch',
                        id: 'text-to-speech-control-switch',
                      });
                    S.addEventListener('click', function (e) {
                      e.target.checked
                        ? document.body.addEventListener('click', C)
                        : document.body.removeEventListener('click', C);
                    });
                    var O = h('label', {
                      class: 'form-check-label',
                      for: 'flexSwitchCheckChecked',
                    });
                    (O.textContent = 'text to speech'),
                      w.append(S, O),
                      x.appendChild(w),
                      s.push(x);
                  }
                  i.append.apply(i, s),
                    a.append(i),
                    e.prepend(a),
                    console.log(a);
                },
              },
            ]),
            n && x(t.prototype, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            e
          );
        })();
      })(),
      o.default
    );
  })()
);
//# sourceMappingURL=bundle.js.map
