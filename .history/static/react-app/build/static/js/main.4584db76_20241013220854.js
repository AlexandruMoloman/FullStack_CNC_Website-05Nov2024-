/*! For license information please see main.4584db76.js.LICENSE.txt */
(() => {
  var e = {
      264: () => {},
      740: (e) => {
        'use strict';
        e.exports = function (e, t, n, r, a, o, l, i) {
          if (!e) {
            var s;
            if (void 0 === t)
              s = new Error(
                'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
              );
            else {
              var u = [n, r, a, o, l, i],
                c = 0;
              (s = new Error(
                t.replace(/%s/g, function () {
                  return u[c++];
                }),
              )).name = 'Invariant Violation';
            }
            throw ((s.framesToPop = 1), s);
          }
        };
      },
      197: (e, t, n) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return (0, o.default)(function () {
              for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
              var a = null;
              return (
                t.forEach(function (e) {
                  if (null == a) {
                    var t = e.apply(void 0, n);
                    null != t && (a = t);
                  }
                }),
                a
              );
            });
          });
        var r,
          a = n(534),
          o = (r = a) && r.__esModule ? r : { default: r };
        e.exports = t.default;
      },
      534: (e, t) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e) {
            function t(t, n, r, a, o, l) {
              var i = a || '<<anonymous>>',
                s = l || r;
              if (null == n[r])
                return t
                  ? new Error('Required ' + o + ' `' + s + '` was not specified in `' + i + '`.')
                  : null;
              for (var u = arguments.length, c = Array(u > 6 ? u - 6 : 0), d = 6; d < u; d++)
                c[d - 6] = arguments[d];
              return e.apply(void 0, [n, r, i, o, s].concat(c));
            }
            var n = t.bind(null, !1);
            return (n.isRequired = t.bind(null, !0)), n;
          }),
          (e.exports = t.default);
      },
      497: (e, t, n) => {
        'use strict';
        var r = n(218);
        function a() {}
        function o() {}
        (o.resetWarningCache = a),
          (e.exports = function () {
            function e(e, t, n, a, o, l) {
              if (l !== r) {
                var i = new Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
                );
                throw ((i.name = 'Invariant Violation'), i);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: o,
              resetWarningCache: a,
            };
            return (n.PropTypes = n), n;
          });
      },
      173: (e, t, n) => {
        e.exports = n(497)();
      },
      218: (e) => {
        'use strict';
        e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
      },
      730: (e, t, n) => {
        'use strict';
        var r = n(43),
          a = n(853);
        function o(e) {
          for (
            var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
            n < arguments.length;
            n++
          )
            t += '&args[]=' + encodeURIComponent(arguments[n]);
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        var l = new Set(),
          i = {};
        function s(e, t) {
          u(e, t), u(e + 'Capture', t);
        }
        function u(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var c = !(
            'undefined' === typeof window ||
            'undefined' === typeof window.document ||
            'undefined' === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, o, l) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = l);
        }
        var v = {};
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (e) {
            v[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
            v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }),
          ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
            function (e) {
              v[e] = new m(e, 2, !1, e, null, !1, !1);
            },
          ),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ['capture', 'download'].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ['rowSpan', 'start'].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = v.hasOwnProperty(t) ? v[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ('o' !== t[0] && 'O' !== t[0]) ||
              ('n' !== t[1] && 'N' !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                'undefined' === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case 'function':
                    case 'symbol':
                      return !0;
                    case 'boolean':
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : 'data-' !== (e = e.toLowerCase().slice(0, 5)) && 'aria-' !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) && (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && '' : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n = 3 === (a = a.type) || (4 === a && !0 === n) ? '' : '' + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (e) {
              var t = e.replace(g, y);
              v[t] = new m(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new m(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1,
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for('react.element'),
          S = Symbol.for('react.portal'),
          E = Symbol.for('react.fragment'),
          k = Symbol.for('react.strict_mode'),
          C = Symbol.for('react.profiler'),
          N = Symbol.for('react.provider'),
          R = Symbol.for('react.context'),
          j = Symbol.for('react.forward_ref'),
          P = Symbol.for('react.suspense'),
          T = Symbol.for('react.suspense_list'),
          O = Symbol.for('react.memo'),
          A = Symbol.for('react.lazy');
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
        var _ = Symbol.for('react.offscreen');
        Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker');
        var L = Symbol.iterator;
        function I(e) {
          return null === e || 'object' !== typeof e
            ? null
            : 'function' === typeof (e = (L && e[L]) || e['@@iterator'])
            ? e
            : null;
        }
        var z,
          D = Object.assign;
        function F(e) {
          if (void 0 === z)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              z = (t && t[1]) || '';
            }
          return '\n' + z + e;
        }
        var M = !1;
        function B(e, t) {
          if (!e || M) return '';
          M = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && 'string' === typeof u.stack) {
              for (
                var a = u.stack.split('\n'),
                  o = r.stack.split('\n'),
                  l = a.length - 1,
                  i = o.length - 1;
                1 <= l && 0 <= i && a[l] !== o[i];

              )
                i--;
              for (; 1 <= l && 0 <= i; l--, i--)
                if (a[l] !== o[i]) {
                  if (1 !== l || 1 !== i)
                    do {
                      if ((l--, 0 > --i || a[l] !== o[i])) {
                        var s = '\n' + a[l].replace(' at new ', ' at ');
                        return (
                          e.displayName &&
                            s.includes('<anonymous>') &&
                            (s = s.replace('<anonymous>', e.displayName)),
                          s
                        );
                      }
                    } while (1 <= l && 0 <= i);
                  break;
                }
            }
          } finally {
            (M = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : '') ? F(e) : '';
        }
        function W(e) {
          switch (e.tag) {
            case 5:
              return F(e.type);
            case 16:
              return F('Lazy');
            case 13:
              return F('Suspense');
            case 19:
              return F('SuspenseList');
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1));
            case 11:
              return (e = B(e.type.render, !1));
            case 1:
              return (e = B(e.type, !0));
            default:
              return '';
          }
        }
        function U(e) {
          if (null == e) return null;
          if ('function' === typeof e) return e.displayName || e.name || null;
          if ('string' === typeof e) return e;
          switch (e) {
            case E:
              return 'Fragment';
            case S:
              return 'Portal';
            case C:
              return 'Profiler';
            case k:
              return 'StrictMode';
            case P:
              return 'Suspense';
            case T:
              return 'SuspenseList';
          }
          if ('object' === typeof e)
            switch (e.$$typeof) {
              case R:
                return (e.displayName || 'Context') + '.Consumer';
              case N:
                return (e._context.displayName || 'Context') + '.Provider';
              case j:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      '' !== (e = t.displayName || t.name || '')
                        ? 'ForwardRef(' + e + ')'
                        : 'ForwardRef'),
                  e
                );
              case O:
                return null !== (t = e.displayName || null) ? t : U(e.type) || 'Memo';
              case A:
                (t = e._payload), (e = e._init);
                try {
                  return U(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return 'Cache';
            case 9:
              return (t.displayName || 'Context') + '.Consumer';
            case 10:
              return (t._context.displayName || 'Context') + '.Provider';
            case 18:
              return 'DehydratedFragment';
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ''),
                t.displayName || ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
              );
            case 7:
              return 'Fragment';
            case 5:
              return t;
            case 4:
              return 'Portal';
            case 3:
              return 'Root';
            case 6:
              return 'Text';
            case 16:
              return U(t);
            case 8:
              return t === k ? 'StrictMode' : 'Mode';
            case 22:
              return 'Offscreen';
            case 12:
              return 'Profiler';
            case 21:
              return 'Scope';
            case 13:
              return 'Suspense';
            case 19:
              return 'SuspenseList';
            case 25:
              return 'TracingMarker';
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ('function' === typeof t) return t.displayName || t.name || null;
              if ('string' === typeof t) return t;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return e;
            default:
              return '';
          }
        }
        function K(e) {
          var t = e.type;
          return (
            (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t)
          );
        }
        function $(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = K(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t];
              if (
                !e.hasOwnProperty(t) &&
                'undefined' !== typeof n &&
                'function' === typeof n.get &&
                'function' === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = '' + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = '' + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = '';
          return (
            e && (r = K(e) ? (e.checked ? 'true' : 'false') : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function X(e) {
          if (
            'undefined' === typeof (e = e || ('undefined' !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function q(e, t) {
          var n = t.checked;
          return D({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function G(e, t) {
          var n = null == t.defaultValue ? '' : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = V(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
            });
        }
        function Y(e, t) {
          null != (t = t.checked) && b(e, 'checked', t, !1);
        }
        function J(e, t) {
          Y(e, t);
          var n = V(t.value),
            r = t.type;
          if (null != n)
            'number' === r
              ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
              : e.value !== '' + n && (e.value = '' + n);
          else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
          t.hasOwnProperty('value')
            ? ee(e, t.type, n)
            : t.hasOwnProperty('defaultValue') && ee(e, t.type, V(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
            var r = t.type;
            if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value)))
              return;
            (t = '' + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          '' !== (n = e.name) && (e.name = ''),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            '' !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ('number' === t && X(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = '' + e._wrapperState.initialValue)
              : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = '' + V(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return D({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: '' + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ''), (n = t);
          }
          e._wrapperState = { initialValue: V(n) };
        }
        function oe(e, t) {
          var n = V(t.value),
            r = V(t.defaultValue);
          null != n &&
            ((n = '' + n) !== e.value && (e.value = n),
            null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
            null != r && (e.defaultValue = '' + r);
        }
        function le(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case 'svg':
              return 'http://www.w3.org/2000/svg';
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML';
            default:
              return 'http://www.w3.org/1999/xhtml';
          }
        }
        function se(e, t) {
          return null == e || 'http://www.w3.org/1999/xhtml' === e
            ? ie(t)
            : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
            ? 'http://www.w3.org/1999/xhtml'
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e)
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement('div')).innerHTML =
                    '<svg>' + t.valueOf().toString() + '</svg>',
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ['Webkit', 'ms', 'Moz', 'O'];
        function me(e, t, n) {
          return null == t || 'boolean' === typeof t || '' === t
            ? ''
            : n || 'number' !== typeof t || 0 === t || (pe.hasOwnProperty(e) && pe[e])
            ? ('' + t).trim()
            : t + 'px';
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf('--'),
                a = me(n, t[n], r);
              'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pe[t] = pe[e]);
          });
        });
        var ge = D(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          },
        );
        function ye(e, t) {
          if (t) {
            if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                'object' !== typeof t.dangerouslySetInnerHTML ||
                !('__html' in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && 'object' !== typeof t.style) throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf('-')) return 'string' === typeof t.is;
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Se = null,
          Ee = null,
          ke = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ('function' !== typeof Se) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = wa(t)), Se(e.stateNode, e.type, t));
          }
        }
        function Ne(e) {
          Ee ? (ke ? ke.push(e) : (ke = [e])) : (Ee = e);
        }
        function Re() {
          if (Ee) {
            var e = Ee,
              t = ke;
            if (((ke = Ee = null), Ce(e), t)) for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function je(e, t) {
          return e(t);
        }
        function Pe() {}
        var Te = !1;
        function Oe(e, t, n) {
          if (Te) return e(t, n);
          Te = !0;
          try {
            return je(e, t, n);
          } finally {
            (Te = !1), (null !== Ee || null !== ke) && (Pe(), Re());
          }
        }
        function Ae(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              (r = !r.disabled) ||
                (r = !(
                  'button' === (e = e.type) ||
                  'input' === e ||
                  'select' === e ||
                  'textarea' === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && 'function' !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var _e = !1;
        if (c)
          try {
            var Le = {};
            Object.defineProperty(Le, 'passive', {
              get: function () {
                _e = !0;
              },
            }),
              window.addEventListener('test', Le, Le),
              window.removeEventListener('test', Le, Le);
          } catch (ce) {
            _e = !1;
          }
        function Ie(e, t, n, r, a, o, l, i, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var ze = !1,
          De = null,
          Fe = !1,
          Me = null,
          Be = {
            onError: function (e) {
              (ze = !0), (De = e);
            },
          };
        function We(e, t, n, r, a, o, l, i, s) {
          (ze = !1), (De = null), Ie.apply(Be, arguments);
        }
        function Ue(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t))
              return t.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if (Ue(e) !== e) throw Error(o(188));
        }
        function Ke(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ue(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === n) return Ve(a), e;
                    if (l === r) return Ve(a), t;
                    l = l.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = l);
                else {
                  for (var i = !1, s = a.child; s; ) {
                    if (s === n) {
                      (i = !0), (n = a), (r = l);
                      break;
                    }
                    if (s === r) {
                      (i = !0), (r = a), (n = l);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!i) {
                    for (s = l.child; s; ) {
                      if (s === n) {
                        (i = !0), (n = l), (r = a);
                        break;
                      }
                      if (s === r) {
                        (i = !0), (r = l), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!i) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? $e(e)
            : null;
        }
        function $e(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = $e(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = a.unstable_scheduleCallback,
          Xe = a.unstable_cancelCallback,
          qe = a.unstable_shouldYield,
          Ge = a.unstable_requestPaint,
          Ye = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var lt = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((it(e) / st) | 0)) | 0;
              },
          it = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            l = 268435455 & n;
          if (0 !== l) {
            var i = l & ~a;
            0 !== i ? (r = dt(i)) : 0 !== (o &= l) && (r = dt(o));
          } else 0 !== (l = n & ~a) ? (r = dt(l)) : 0 !== o && (r = dt(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - lt(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - lt(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - lt(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function xt(e) {
          return 1 < (e &= -e) ? (4 < e ? (0 !== (268435455 & e) ? 16 : 536870912) : 4) : 1;
        }
        var wt,
          St,
          Et,
          kt,
          Ct,
          Nt = !1,
          Rt = [],
          jt = null,
          Pt = null,
          Tt = null,
          Ot = new Map(),
          At = new Map(),
          _t = [],
          Lt =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' ',
            );
        function It(e, t) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              jt = null;
              break;
            case 'dragenter':
            case 'dragleave':
              Pt = null;
              break;
            case 'mouseover':
            case 'mouseout':
              Tt = null;
              break;
            case 'pointerover':
            case 'pointerout':
              Ot.delete(t.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              At.delete(t.pointerId);
          }
        }
        function zt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && St(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Dt(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = Ue(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      Et(n);
                    })
                  );
              } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ft(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) return null !== (t = ba(n)) && St(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function Mt(e, t, n) {
          Ft(e) && n.delete(t);
        }
        function Bt() {
          (Nt = !1),
            null !== jt && Ft(jt) && (jt = null),
            null !== Pt && Ft(Pt) && (Pt = null),
            null !== Tt && Ft(Tt) && (Tt = null),
            Ot.forEach(Mt),
            At.forEach(Mt);
        }
        function Wt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Nt || ((Nt = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, Bt)));
        }
        function Ut(e) {
          function t(t) {
            return Wt(t, e);
          }
          if (0 < Rt.length) {
            Wt(Rt[0], e);
            for (var n = 1; n < Rt.length; n++) {
              var r = Rt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== jt && Wt(jt, e),
              null !== Pt && Wt(Pt, e),
              null !== Tt && Wt(Tt, e),
              Ot.forEach(t),
              At.forEach(t),
              n = 0;
            n < _t.length;
            n++
          )
            (r = _t[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < _t.length && null === (n = _t[0]).blockedOn; )
            Dt(n), null === n.blockedOn && _t.shift();
        }
        var Ht = x.ReactCurrentBatchConfig,
          Vt = !0;
        function Kt(e, t, n, r) {
          var a = bt,
            o = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), Qt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = o);
          }
        }
        function $t(e, t, n, r) {
          var a = bt,
            o = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), Qt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = o);
          }
        }
        function Qt(e, t, n, r) {
          if (Vt) {
            var a = qt(e, t, n, r);
            if (null === a) Vr(e, t, r, Xt, n), It(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case 'focusin':
                    return (jt = zt(jt, e, t, n, r, a)), !0;
                  case 'dragenter':
                    return (Pt = zt(Pt, e, t, n, r, a)), !0;
                  case 'mouseover':
                    return (Tt = zt(Tt, e, t, n, r, a)), !0;
                  case 'pointerover':
                    var o = a.pointerId;
                    return Ot.set(o, zt(Ot.get(o) || null, e, t, n, r, a)), !0;
                  case 'gotpointercapture':
                    return (o = a.pointerId), At.set(o, zt(At.get(o) || null, e, t, n, r, a)), !0;
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((It(e, r), 4 & t && -1 < Lt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && wt(o),
                  null === (o = qt(e, t, n, r)) && Vr(e, t, r, Xt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Vr(e, t, r, null, n);
          }
        }
        var Xt = null;
        function qt(e, t, n, r) {
          if (((Xt = null), null !== (e = ya((e = we(r))))))
            if (null === (t = Ue(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Xt = e), null;
        }
        function Gt(e) {
          switch (e) {
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 1;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'toggle':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 4;
            case 'message':
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Yt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = 'value' in Yt ? Yt.value : Yt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            D(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : 'unknown' !== typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : 'unknown' !== typeof e.cancelBubble && (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          dn = D({}, un, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = D({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return 'movementX' in e
                ? e.movementX
                : (e !== sn &&
                    (sn && 'mousemove' === e.type
                      ? ((on = e.screenX - sn.screenX), (ln = e.screenY - sn.screenY))
                      : (ln = on = 0),
                    (sn = e)),
                  on);
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          mn = an(D({}, pn, { dataTransfer: 0 })),
          vn = an(D({}, dn, { relatedTarget: 0 })),
          gn = an(D({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          yn = D({}, un, {
            clipboardData: function (e) {
              return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
            },
          }),
          bn = an(yn),
          xn = an(D({}, un, { data: 0 })),
          wn = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          Sn = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          En = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
        function kn(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : !!(e = En[e]) && !!t[e];
        }
        function Cn() {
          return kn;
        }
        var Nn = D({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ('Unidentified' !== t) return t;
              }
              return 'keypress' === e.type
                ? 13 === (e = tn(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? Sn[e.keyCode] || 'Unidentified'
                : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return 'keypress' === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return 'keypress' === e.type
                ? tn(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Rn = an(Nn),
          jn = an(
            D({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          Pn = an(
            D({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            }),
          ),
          Tn = an(D({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          On = D({}, pn, {
            deltaX: function (e) {
              return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
              return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          An = an(On),
          _n = [9, 13, 27, 32],
          Ln = c && 'CompositionEvent' in window,
          In = null;
        c && 'documentMode' in document && (In = document.documentMode);
        var zn = c && 'TextEvent' in window && !In,
          Dn = c && (!Ln || (In && 8 < In && 11 >= In)),
          Fn = String.fromCharCode(32),
          Mn = !1;
        function Bn(e, t) {
          switch (e) {
            case 'keyup':
              return -1 !== _n.indexOf(t.keyCode);
            case 'keydown':
              return 229 !== t.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function Wn(e) {
          return 'object' === typeof (e = e.detail) && 'data' in e ? e.data : null;
        }
        var Un = !1;
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return 'input' === t ? !!Hn[e.type] : 'textarea' === t;
        }
        function Kn(e, t, n, r) {
          Ne(r),
            0 < (t = $r(t, 'onChange')).length &&
              ((n = new cn('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
        }
        var $n = null,
          Qn = null;
        function Xn(e) {
          Fr(e, 0);
        }
        function qn(e) {
          if (Q(xa(e))) return e;
        }
        function Gn(e, t) {
          if ('change' === e) return t;
        }
        var Yn = !1;
        if (c) {
          var Jn;
          if (c) {
            var Zn = 'oninput' in document;
            if (!Zn) {
              var er = document.createElement('div');
              er.setAttribute('oninput', 'return;'), (Zn = 'function' === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Yn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          $n && ($n.detachEvent('onpropertychange', nr), (Qn = $n = null));
        }
        function nr(e) {
          if ('value' === e.propertyName && qn(Qn)) {
            var t = [];
            Kn(t, Qn, e, we(e)), Oe(Xn, t);
          }
        }
        function rr(e, t, n) {
          'focusin' === e
            ? (tr(), (Qn = n), ($n = t).attachEvent('onpropertychange', nr))
            : 'focusout' === e && tr();
        }
        function ar(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return qn(Qn);
        }
        function or(e, t) {
          if ('click' === e) return qn(t);
        }
        function lr(e, t) {
          if ('input' === e || 'change' === e) return qn(t);
        }
        var ir =
          'function' === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e === 1 / t)) || (e !== e && t !== t);
              };
        function sr(e, t) {
          if (ir(e, t)) return !0;
          if ('object' !== typeof e || null === e || 'object' !== typeof t || null === t) return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !ir(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : 'contains' in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = X(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = 'string' === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = X((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (('input' === t &&
              ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
              'textarea' === t ||
              'true' === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
            if (null !== r && pr(n))
              if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o));
                var l = cr(n, r);
                a &&
                  l &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== l.node ||
                    e.focusOffset !== l.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(l.node, l.offset))
                    : (t.setEnd(l.node, l.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for ('function' === typeof n.focus && n.focus(), n = 0; n < t.length; n++)
              ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
          }
        }
        var mr = c && 'documentMode' in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          br = !1;
        function xr(e, t, n) {
          var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
          br ||
            null == vr ||
            vr !== X(r) ||
            ('selectionStart' in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = $r(gr, 'onSelect')).length &&
                ((t = new cn('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n['Webkit' + e] = 'webkit' + t),
            (n['Moz' + e] = 'moz' + t),
            n
          );
        }
        var Sr = {
            animationend: wr('Animation', 'AnimationEnd'),
            animationiteration: wr('Animation', 'AnimationIteration'),
            animationstart: wr('Animation', 'AnimationStart'),
            transitionend: wr('Transition', 'TransitionEnd'),
          },
          Er = {},
          kr = {};
        function Cr(e) {
          if (Er[e]) return Er[e];
          if (!Sr[e]) return e;
          var t,
            n = Sr[e];
          for (t in n) if (n.hasOwnProperty(t) && t in kr) return (Er[e] = n[t]);
          return e;
        }
        c &&
          ((kr = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete Sr.animationend.animation,
            delete Sr.animationiteration.animation,
            delete Sr.animationstart.animation),
          'TransitionEvent' in window || delete Sr.transitionend.transition);
        var Nr = Cr('animationend'),
          Rr = Cr('animationiteration'),
          jr = Cr('animationstart'),
          Pr = Cr('transitionend'),
          Tr = new Map(),
          Or =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' ',
            );
        function Ar(e, t) {
          Tr.set(e, t), s(t, [e]);
        }
        for (var _r = 0; _r < Or.length; _r++) {
          var Lr = Or[_r];
          Ar(Lr.toLowerCase(), 'on' + (Lr[0].toUpperCase() + Lr.slice(1)));
        }
        Ar(Nr, 'onAnimationEnd'),
          Ar(Rr, 'onAnimationIteration'),
          Ar(jr, 'onAnimationStart'),
          Ar('dblclick', 'onDoubleClick'),
          Ar('focusin', 'onFocus'),
          Ar('focusout', 'onBlur'),
          Ar(Pr, 'onTransitionEnd'),
          u('onMouseEnter', ['mouseout', 'mouseover']),
          u('onMouseLeave', ['mouseout', 'mouseover']),
          u('onPointerEnter', ['pointerout', 'pointerover']),
          u('onPointerLeave', ['pointerout', 'pointerover']),
          s(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(' '),
          ),
          s(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' ',
            ),
          ),
          s('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
          s(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(' '),
          ),
          s(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
          ),
          s(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
          );
        var Ir =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' ',
            ),
          zr = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Ir));
        function Dr(e, t, n) {
          var r = e.type || 'unknown-event';
          (e.currentTarget = n),
            (function (e, t, n, r, a, l, i, s, u) {
              if ((We.apply(this, arguments), ze)) {
                if (!ze) throw Error(o(198));
                var c = De;
                (ze = !1), (De = null), Fe || ((Fe = !0), (Me = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Fr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var i = r[l],
                    s = i.instance,
                    u = i.currentTarget;
                  if (((i = i.listener), s !== o && a.isPropagationStopped())) break e;
                  Dr(a, i, u), (o = s);
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((s = (i = r[l]).instance),
                    (u = i.currentTarget),
                    (i = i.listener),
                    s !== o && a.isPropagationStopped())
                  )
                    break e;
                  Dr(a, i, u), (o = s);
                }
            }
          }
          if (Fe) throw ((e = Me), (Fe = !1), (Me = null), e);
        }
        function Mr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + '__bubble';
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function Br(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var Wr = '_reactListening' + Math.random().toString(36).slice(2);
        function Ur(e) {
          if (!e[Wr]) {
            (e[Wr] = !0),
              l.forEach(function (t) {
                'selectionchange' !== t && (zr.has(t) || Br(t, !1, e), Br(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Wr] || ((t[Wr] = !0), Br('selectionchange', !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Gt(t)) {
            case 1:
              var a = Kt;
              break;
            case 4:
              a = $t;
              break;
            default:
              a = Qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !_e || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Vr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var s = l.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = l.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    l = l.return;
                  }
                for (; null !== i; ) {
                  if (null === (l = ya(i))) return;
                  if (5 === (s = l.tag) || 6 === s) {
                    r = o = l;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Oe(function () {
            var r = o,
              a = we(n),
              l = [];
            e: {
              var i = Tr.get(e);
              if (void 0 !== i) {
                var s = cn,
                  u = e;
                switch (e) {
                  case 'keypress':
                    if (0 === tn(n)) break e;
                  case 'keydown':
                  case 'keyup':
                    s = Rn;
                    break;
                  case 'focusin':
                    (u = 'focus'), (s = vn);
                    break;
                  case 'focusout':
                    (u = 'blur'), (s = vn);
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    s = vn;
                    break;
                  case 'click':
                    if (2 === n.button) break e;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    s = hn;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    s = mn;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    s = Pn;
                    break;
                  case Nr:
                  case Rr:
                  case jr:
                    s = gn;
                    break;
                  case Pr:
                    s = Tn;
                    break;
                  case 'scroll':
                    s = fn;
                    break;
                  case 'wheel':
                    s = An;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    s = bn;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    s = jn;
                }
                var c = 0 !== (4 & t),
                  d = !c && 'scroll' === e,
                  f = c ? (null !== i ? i + 'Capture' : null) : i;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m), null !== f && null != (m = Ae(h, f)) && c.push(Kr(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length && ((i = new s(i, u, null, n, a)), l.push({ event: i, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = 'mouseout' === e || 'pointerout' === e),
                (!(i = 'mouseover' === e || 'pointerover' === e) ||
                  n === xe ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ya(u) && !u[ha])) &&
                  (s || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !== (u = (u = n.relatedTarget || n.toElement) ? ya(u) : null) &&
                        (u !== (d = Ue(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (m = 'onMouseLeave'),
                  (f = 'onMouseEnter'),
                  (h = 'mouse'),
                  ('pointerout' !== e && 'pointerover' !== e) ||
                    ((c = jn), (m = 'onPointerLeave'), (f = 'onPointerEnter'), (h = 'pointer')),
                  (d = null == s ? i : xa(s)),
                  (p = null == u ? i : xa(u)),
                  ((i = new c(m, h + 'leave', s, n, a)).target = d),
                  (i.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((c = new c(f, h + 'enter', u, n, a)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  s && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = s; p; p = Qr(p)) h++;
                    for (p = 0, m = f; m; m = Qr(m)) p++;
                    for (; 0 < h - p; ) (c = Qr(c)), h--;
                    for (; 0 < p - h; ) (f = Qr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Qr(c)), (f = Qr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Xr(l, i, s, c, !1), null !== u && null !== d && Xr(l, d, u, c, !0);
              }
              if (
                'select' === (s = (i = r ? xa(r) : window).nodeName && i.nodeName.toLowerCase()) ||
                ('input' === s && 'file' === i.type)
              )
                var v = Gn;
              else if (Vn(i))
                if (Yn) v = lr;
                else {
                  v = ar;
                  var g = rr;
                }
              else
                (s = i.nodeName) &&
                  'input' === s.toLowerCase() &&
                  ('checkbox' === i.type || 'radio' === i.type) &&
                  (v = or);
              switch (
                (v && (v = v(e, r))
                  ? Kn(l, v, n, a)
                  : (g && g(e, i, r),
                    'focusout' === e &&
                      (g = i._wrapperState) &&
                      g.controlled &&
                      'number' === i.type &&
                      ee(i, 'number', i.value)),
                (g = r ? xa(r) : window),
                e)
              ) {
                case 'focusin':
                  (Vn(g) || 'true' === g.contentEditable) && ((vr = g), (gr = r), (yr = null));
                  break;
                case 'focusout':
                  yr = gr = vr = null;
                  break;
                case 'mousedown':
                  br = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  (br = !1), xr(l, n, a);
                  break;
                case 'selectionchange':
                  if (mr) break;
                case 'keydown':
                case 'keyup':
                  xr(l, n, a);
              }
              var y;
              if (Ln)
                e: {
                  switch (e) {
                    case 'compositionstart':
                      var b = 'onCompositionStart';
                      break e;
                    case 'compositionend':
                      b = 'onCompositionEnd';
                      break e;
                    case 'compositionupdate':
                      b = 'onCompositionUpdate';
                      break e;
                  }
                  b = void 0;
                }
              else
                Un
                  ? Bn(e, n) && (b = 'onCompositionEnd')
                  : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
              b &&
                (Dn &&
                  'ko' !== n.locale &&
                  (Un || 'onCompositionStart' !== b
                    ? 'onCompositionEnd' === b && Un && (y = en())
                    : ((Jt = 'value' in (Yt = a) ? Yt.value : Yt.textContent), (Un = !0))),
                0 < (g = $r(r, b)).length &&
                  ((b = new xn(b, e, null, n, a)),
                  l.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Wn(n)) && (b.data = y))),
                (y = zn
                  ? (function (e, t) {
                      switch (e) {
                        case 'compositionend':
                          return Wn(t);
                        case 'keypress':
                          return 32 !== t.which ? null : ((Mn = !0), Fn);
                        case 'textInput':
                          return (e = t.data) === Fn && Mn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Un)
                        return 'compositionend' === e || (!Ln && Bn(e, t))
                          ? ((e = en()), (Zt = Jt = Yt = null), (Un = !1), e)
                          : null;
                      switch (e) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case 'compositionend':
                          return Dn && 'ko' !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = $r(r, 'onBeforeInput')).length &&
                  ((a = new xn('onBeforeInput', 'beforeinput', null, n, a)),
                  l.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Fr(l, t);
          });
        }
        function Kr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function $r(e, t) {
          for (var n = t + 'Capture', r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Ae(e, n)) && r.unshift(Kr(e, o, a)),
              null != (o = Ae(e, t)) && r.push(Kr(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Xr(e, t, n, r, a) {
          for (var o = t._reactName, l = []; null !== n && n !== r; ) {
            var i = n,
              s = i.alternate,
              u = i.stateNode;
            if (null !== s && s === r) break;
            5 === i.tag &&
              null !== u &&
              ((i = u),
              a
                ? null != (s = Ae(n, o)) && l.unshift(Kr(n, s, i))
                : a || (null != (s = Ae(n, o)) && l.push(Kr(n, s, i)))),
              (n = n.return);
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        var qr = /\r\n?/g,
          Gr = /\u0000|\uFFFD/g;
        function Yr(e) {
          return ('string' === typeof e ? e : '' + e).replace(qr, '\n').replace(Gr, '');
        }
        function Jr(e, t, n) {
          if (((t = Yr(t)), Yr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            'textarea' === e ||
            'noscript' === e ||
            'string' === typeof t.children ||
            'number' === typeof t.children ||
            ('object' === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = 'function' === typeof setTimeout ? setTimeout : void 0,
          aa = 'function' === typeof clearTimeout ? clearTimeout : void 0,
          oa = 'function' === typeof Promise ? Promise : void 0,
          la =
            'function' === typeof queueMicrotask
              ? queueMicrotask
              : 'undefined' !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(ia);
                }
              : ra;
        function ia(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ('/$' === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Ut(t);
                r--;
              } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
            n = a;
          } while (n);
          Ut(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ('$' === (t = e.data) || '$!' === t || '$?' === t) break;
              if ('/$' === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === t) return e;
                t--;
              } else '/$' === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = '__reactFiber$' + da,
          pa = '__reactProps$' + da,
          ha = '__reactContainer$' + da,
          ma = '__reactEvents$' + da,
          va = '__reactListeners$' + da,
          ga = '__reactHandles$' + da;
        function ya(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[fa])) {
              if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function wa(e) {
          return e[pa] || null;
        }
        var Sa = [],
          Ea = -1;
        function ka(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > Ea || ((e.current = Sa[Ea]), (Sa[Ea] = null), Ea--);
        }
        function Na(e, t) {
          Ea++, (Sa[Ea] = e.current), (e.current = t);
        }
        var Ra = {},
          ja = ka(Ra),
          Pa = ka(!1),
          Ta = Ra;
        function Oa(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ra;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Aa(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function _a() {
          Ca(Pa), Ca(ja);
        }
        function La(e, t, n) {
          if (ja.current !== Ra) throw Error(o(168));
          Na(ja, t), Na(Pa, n);
        }
        function Ia(e, t, n) {
          var r = e.stateNode;
          if (((t = t.childContextTypes), 'function' !== typeof r.getChildContext)) return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, H(e) || 'Unknown', a));
          return D({}, n, r);
        }
        function za(e) {
          return (
            (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ra),
            (Ta = ja.current),
            Na(ja, e),
            Na(Pa, Pa.current),
            !0
          );
        }
        function Da(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = Ia(e, t, Ta)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Pa),
              Ca(ja),
              Na(ja, e))
            : Ca(Pa),
            Na(Pa, n);
        }
        var Fa = null,
          Ma = !1,
          Ba = !1;
        function Wa(e) {
          null === Fa ? (Fa = [e]) : Fa.push(e);
        }
        function Ua() {
          if (!Ba && null !== Fa) {
            Ba = !0;
            var e = 0,
              t = bt;
            try {
              var n = Fa;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Fa = null), (Ma = !1);
            } catch (a) {
              throw (null !== Fa && (Fa = Fa.slice(e + 1)), Qe(Ze, Ua), a);
            } finally {
              (bt = t), (Ba = !1);
            }
          }
          return null;
        }
        var Ha = [],
          Va = 0,
          Ka = null,
          $a = 0,
          Qa = [],
          Xa = 0,
          qa = null,
          Ga = 1,
          Ya = '';
        function Ja(e, t) {
          (Ha[Va++] = $a), (Ha[Va++] = Ka), (Ka = e), ($a = t);
        }
        function Za(e, t, n) {
          (Qa[Xa++] = Ga), (Qa[Xa++] = Ya), (Qa[Xa++] = qa), (qa = e);
          var r = Ga;
          e = Ya;
          var a = 32 - lt(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - lt(t) + a;
          if (30 < o) {
            var l = a - (a % 5);
            (o = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (a -= l),
              (Ga = (1 << (32 - lt(t) + a)) | (n << a) | r),
              (Ya = o + e);
          } else (Ga = (1 << o) | (n << a) | r), (Ya = e);
        }
        function eo(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function to(e) {
          for (; e === Ka; ) (Ka = Ha[--Va]), (Ha[Va] = null), ($a = Ha[--Va]), (Ha[Va] = null);
          for (; e === qa; )
            (qa = Qa[--Xa]),
              (Qa[Xa] = null),
              (Ya = Qa[--Xa]),
              (Qa[Xa] = null),
              (Ga = Qa[--Xa]),
              (Qa[Xa] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function lo(e, t) {
          var n = Ou(5, null, null, 0);
          (n.elementType = 'DELETED'),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
        }
        function io(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== qa ? { id: Ga, overflow: Ya } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = Ou(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function so(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function uo(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!io(e, t)) {
                if (so(e)) throw Error(o(418));
                t = ua(n.nextSibling);
                var r = no;
                t && io(e, t) ? lo(r, n) : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (so(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return co(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t = 'head' !== (t = e.type) && 'body' !== t && !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (so(e)) throw (po(), Error(o(418)));
            for (; t; ) lo(e, t), (t = ua(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ('/$' === n) {
                    if (0 === t) {
                      ro = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = ua(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (ao = !1);
        }
        function mo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var vo = x.ReactCurrentBatchConfig;
        function go(e, t, n) {
          if (null !== (e = n.ref) && 'function' !== typeof e && 'object' !== typeof e) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                l = '' + e;
              return null !== t &&
                null !== t.ref &&
                'function' === typeof t.ref &&
                t.ref._stringRef === l
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    null === e ? delete t[l] : (t[l] = e);
                  }),
                  (t._stringRef = l),
                  t);
            }
            if ('string' !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function yo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                '[object Object]' === e
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : e,
              ),
            ))
          );
        }
        function bo(e) {
          return (0, e._init)(e._payload);
        }
        function xo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = _u(e, t)).index = 0), (e.sibling = null), e;
          }
          function l(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Du(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var o = n.type;
            return o === E
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ('object' === typeof o && null !== o && o.$$typeof === A && bo(o) === t.type))
              ? (((r = a(t, n.props)).ref = go(e, t, n)), (r.return = e), r)
              : (((r = Lu(n.type, n.key, n.props, null, e.mode, r)).ref = go(e, t, n)),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Fu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Iu(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (('string' === typeof t && '' !== t) || 'number' === typeof t)
              return ((t = Du('' + t, e.mode, n)).return = e), t;
            if ('object' === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Lu(t.type, t.key, t.props, null, e.mode, n)).ref = go(e, null, t)),
                    (n.return = e),
                    n
                  );
                case S:
                  return ((t = Fu(t, e.mode, n)).return = e), t;
                case A:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || I(t)) return ((t = Iu(t, e.mode, n, null)).return = e), t;
              yo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (('string' === typeof n && '' !== n) || 'number' === typeof n)
              return null !== a ? null : s(e, t, '' + n, r);
            if ('object' === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? u(e, t, n, r) : null;
                case S:
                  return n.key === a ? c(e, t, n, r) : null;
                case A:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || I(n)) return null !== a ? null : d(e, t, n, r, null);
              yo(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (('string' === typeof r && '' !== r) || 'number' === typeof r)
              return s(t, (e = e.get(n) || null), '' + r, a);
            if ('object' === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case S:
                  return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case A:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || I(r)) return d(t, (e = e.get(n) || null), r, a, null);
              yo(t, r);
            }
            return null;
          }
          function m(a, o, i, s) {
            for (
              var u = null, c = null, d = o, m = (o = 0), v = null;
              null !== d && m < i.length;
              m++
            ) {
              d.index > m ? ((v = d), (d = null)) : (v = d.sibling);
              var g = p(a, d, i[m], s);
              if (null === g) {
                null === d && (d = v);
                break;
              }
              e && d && null === g.alternate && t(a, d),
                (o = l(g, o, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g),
                (d = v);
            }
            if (m === i.length) return n(a, d), ao && Ja(a, m), u;
            if (null === d) {
              for (; m < i.length; m++)
                null !== (d = f(a, i[m], s)) &&
                  ((o = l(d, o, m)), null === c ? (u = d) : (c.sibling = d), (c = d));
              return ao && Ja(a, m), u;
            }
            for (d = r(a, d); m < i.length; m++)
              null !== (v = h(d, a, m, i[m], s)) &&
                (e && null !== v.alternate && d.delete(null === v.key ? m : v.key),
                (o = l(v, o, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, m),
              u
            );
          }
          function v(a, i, s, u) {
            var c = I(s);
            if ('function' !== typeof c) throw Error(o(150));
            if (null == (s = c.call(s))) throw Error(o(151));
            for (
              var d = (c = null), m = i, v = (i = 0), g = null, y = s.next();
              null !== m && !y.done;
              v++, y = s.next()
            ) {
              m.index > v ? ((g = m), (m = null)) : (g = m.sibling);
              var b = p(a, m, y.value, u);
              if (null === b) {
                null === m && (m = g);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (i = l(b, i, v)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = g);
            }
            if (y.done) return n(a, m), ao && Ja(a, v), c;
            if (null === m) {
              for (; !y.done; v++, y = s.next())
                null !== (y = f(a, y.value, u)) &&
                  ((i = l(y, i, v)), null === d ? (c = y) : (d.sibling = y), (d = y));
              return ao && Ja(a, v), c;
            }
            for (m = r(a, m); !y.done; v++, y = s.next())
              null !== (y = h(m, a, v, y.value, u)) &&
                (e && null !== y.alternate && m.delete(null === y.key ? v : y.key),
                (i = l(y, i, v)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, v),
              c
            );
          }
          return function e(r, o, l, s) {
            if (
              ('object' === typeof l &&
                null !== l &&
                l.type === E &&
                null === l.key &&
                (l = l.props.children),
              'object' === typeof l && null !== l)
            ) {
              switch (l.$$typeof) {
                case w:
                  e: {
                    for (var u = l.key, c = o; null !== c; ) {
                      if (c.key === u) {
                        if ((u = l.type) === E) {
                          if (7 === c.tag) {
                            n(r, c.sibling), ((o = a(c, l.props.children)).return = r), (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ('object' === typeof u &&
                            null !== u &&
                            u.$$typeof === A &&
                            bo(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, l.props)).ref = go(r, c, l)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    l.type === E
                      ? (((o = Iu(l.props.children, r.mode, s, l.key)).return = r), (r = o))
                      : (((s = Lu(l.type, l.key, l.props, null, r.mode, s)).ref = go(r, o, l)),
                        (s.return = r),
                        (r = s));
                  }
                  return i(r);
                case S:
                  e: {
                    for (c = l.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === l.containerInfo &&
                          o.stateNode.implementation === l.implementation
                        ) {
                          n(r, o.sibling), ((o = a(o, l.children || [])).return = r), (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Fu(l, r.mode, s)).return = r), (r = o);
                  }
                  return i(r);
                case A:
                  return e(r, o, (c = l._init)(l._payload), s);
              }
              if (te(l)) return m(r, o, l, s);
              if (I(l)) return v(r, o, l, s);
              yo(r, l);
            }
            return ('string' === typeof l && '' !== l) || 'number' === typeof l
              ? ((l = '' + l),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, l)).return = r), (r = o))
                  : (n(r, o), ((o = Du(l, r.mode, s)).return = r), (r = o)),
                i(r))
              : n(r, o);
          };
        }
        var wo = xo(!0),
          So = xo(!1),
          Eo = ka(null),
          ko = null,
          Co = null,
          No = null;
        function Ro() {
          No = Co = ko = null;
        }
        function jo(e) {
          var t = Eo.current;
          Ca(Eo), (e._currentValue = t);
        }
        function Po(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function To(e, t) {
          (ko = e),
            (No = Co = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (bi = !0), (e.firstContext = null));
        }
        function Oo(e) {
          var t = e._currentValue;
          if (No !== e)
            if (((e = { context: e, memoizedValue: t, next: null }), null === Co)) {
              if (null === ko) throw Error(o(308));
              (Co = e), (ko.dependencies = { lanes: 0, firstContext: e });
            } else Co = Co.next = e;
          return t;
        }
        var Ao = null;
        function _o(e) {
          null === Ao ? (Ao = [e]) : Ao.push(e);
        }
        function Lo(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a ? ((n.next = n), _o(t)) : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Io(e, r)
          );
        }
        function Io(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var zo = !1;
        function Do(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Fo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Mo(e, t) {
          return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
        }
        function Bo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & js))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Io(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), _o(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Io(e, n)
          );
        }
        function Wo(e, t, n) {
          if (null !== (t = t.updateQueue) && ((t = t.shared), 0 !== (4194240 & n))) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Uo(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = l) : (o = o.next = l), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ho(e, t, n, r) {
          var a = e.updateQueue;
          zo = !1;
          var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var s = i,
              u = s.next;
            (s.next = null), null === l ? (o = u) : (l.next = u), (l = s);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (c.firstBaseUpdate = u) : (i.next = u), (c.lastBaseUpdate = s));
          }
          if (null !== o) {
            var d = a.baseState;
            for (l = 0, c = u = s = null, i = o; ; ) {
              var f = i.lane,
                p = i.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = i;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ('function' === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f = 'function' === typeof (h = m.payload) ? h.call(p, d, f) : h) ||
                        void 0 === f
                      )
                        break e;
                      d = D({}, d, f);
                      break e;
                    case 2:
                      zo = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64), null === (f = a.effects) ? (a.effects = [i]) : f.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                  (l |= f);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (f = i).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (l |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (zs |= l), (e.lanes = l), (e.memoizedState = d);
          }
        }
        function Vo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), 'function' !== typeof a)) throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Ko = {},
          $o = ka(Ko),
          Qo = ka(Ko),
          Xo = ka(Ko);
        function qo(e) {
          if (e === Ko) throw Error(o(174));
          return e;
        }
        function Go(e, t) {
          switch ((Na(Xo, t), Na(Qo, e), Na($o, Ko), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, '');
              break;
            default:
              t = se((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
          }
          Ca($o), Na($o, t);
        }
        function Yo() {
          Ca($o), Ca(Qo), Ca(Xo);
        }
        function Jo(e) {
          qo(Xo.current);
          var t = qo($o.current),
            n = se(t, e.type);
          t !== n && (Na(Qo, e), Na($o, n));
        }
        function Zo(e) {
          Qo.current === e && (Ca($o), Ca(Qo));
        }
        var el = ka(0);
        function tl(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data))
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var nl = [];
        function rl() {
          for (var e = 0; e < nl.length; e++) nl[e]._workInProgressVersionPrimary = null;
          nl.length = 0;
        }
        var al = x.ReactCurrentDispatcher,
          ol = x.ReactCurrentBatchConfig,
          ll = 0,
          il = null,
          sl = null,
          ul = null,
          cl = !1,
          dl = !1,
          fl = 0,
          pl = 0;
        function hl() {
          throw Error(o(321));
        }
        function ml(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++) if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function vl(e, t, n, r, a, l) {
          if (
            ((ll = l),
            (il = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (al.current = null === e || null === e.memoizedState ? Zl : ei),
            (e = n(r, a)),
            dl)
          ) {
            l = 0;
            do {
              if (((dl = !1), (fl = 0), 25 <= l)) throw Error(o(301));
              (l += 1), (ul = sl = null), (t.updateQueue = null), (al.current = ti), (e = n(r, a));
            } while (dl);
          }
          if (
            ((al.current = Jl),
            (t = null !== sl && null !== sl.next),
            (ll = 0),
            (ul = sl = il = null),
            (cl = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function gl() {
          var e = 0 !== fl;
          return (fl = 0), e;
        }
        function yl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return null === ul ? (il.memoizedState = ul = e) : (ul = ul.next = e), ul;
        }
        function bl() {
          if (null === sl) {
            var e = il.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = sl.next;
          var t = null === ul ? il.memoizedState : ul.next;
          if (null !== t) (ul = t), (sl = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (sl = e).memoizedState,
              baseState: sl.baseState,
              baseQueue: sl.baseQueue,
              queue: sl.queue,
              next: null,
            }),
              null === ul ? (il.memoizedState = ul = e) : (ul = ul.next = e);
          }
          return ul;
        }
        function xl(e, t) {
          return 'function' === typeof t ? t(e) : t;
        }
        function wl(e) {
          var t = bl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = sl,
            a = r.baseQueue,
            l = n.pending;
          if (null !== l) {
            if (null !== a) {
              var i = a.next;
              (a.next = l.next), (l.next = i);
            }
            (r.baseQueue = a = l), (n.pending = null);
          }
          if (null !== a) {
            (l = a.next), (r = r.baseState);
            var s = (i = null),
              u = null,
              c = l;
            do {
              var d = c.lane;
              if ((ll & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = f), (i = r)) : (u = u.next = f), (il.lanes |= d), (zs |= d);
              }
              c = c.next;
            } while (null !== c && c !== l);
            null === u ? (i = r) : (u.next = s),
              ir(r, t.memoizedState) || (bi = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (l = a.lane), (il.lanes |= l), (zs |= l), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Sl(e) {
          var t = bl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (l = e(l, i.action)), (i = i.next);
            } while (i !== a);
            ir(l, t.memoizedState) || (bi = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l);
          }
          return [l, r];
        }
        function El() {}
        function kl(e, t) {
          var n = il,
            r = bl(),
            a = t(),
            l = !ir(r.memoizedState, a);
          if (
            (l && ((r.memoizedState = a), (bi = !0)),
            (r = r.queue),
            zl(Rl.bind(null, n, r, e), [e]),
            r.getSnapshot !== t || l || (null !== ul && 1 & ul.memoizedState.tag))
          ) {
            if (((n.flags |= 2048), Ol(9, Nl.bind(null, n, r, a, t), void 0, null), null === Ps))
              throw Error(o(349));
            0 !== (30 & ll) || Cl(n, t, a);
          }
          return a;
        }
        function Cl(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = il.updateQueue)
              ? ((t = { lastEffect: null, stores: null }), (il.updateQueue = t), (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Nl(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), jl(t) && Pl(e);
        }
        function Rl(e, t, n) {
          return n(function () {
            jl(t) && Pl(e);
          });
        }
        function jl(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Pl(e) {
          var t = Io(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Tl(e) {
          var t = yl();
          return (
            'function' === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: xl,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Xl.bind(null, il, e)),
            [t.memoizedState, e]
          );
        }
        function Ol(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = il.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (il.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Al() {
          return bl().memoizedState;
        }
        function _l(e, t, n, r) {
          var a = yl();
          (il.flags |= e), (a.memoizedState = Ol(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Ll(e, t, n, r) {
          var a = bl();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== sl) {
            var l = sl.memoizedState;
            if (((o = l.destroy), null !== r && ml(r, l.deps)))
              return void (a.memoizedState = Ol(t, n, o, r));
          }
          (il.flags |= e), (a.memoizedState = Ol(1 | t, n, o, r));
        }
        function Il(e, t) {
          return _l(8390656, 8, e, t);
        }
        function zl(e, t) {
          return Ll(2048, 8, e, t);
        }
        function Dl(e, t) {
          return Ll(4, 2, e, t);
        }
        function Fl(e, t) {
          return Ll(4, 4, e, t);
        }
        function Ml(e, t) {
          return 'function' === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Bl(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ll(4, 4, Ml.bind(null, t, e), n)
          );
        }
        function Wl() {}
        function Ul(e, t) {
          var n = bl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ml(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
        }
        function Hl(e, t) {
          var n = bl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ml(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Vl(e, t, n) {
          return 0 === (21 & ll)
            ? (e.baseState && ((e.baseState = !1), (bi = !0)), (e.memoizedState = n))
            : (ir(n, t) || ((n = mt()), (il.lanes |= n), (zs |= n), (e.baseState = !0)), t);
        }
        function Kl(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ol.transition;
          ol.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (ol.transition = r);
          }
        }
        function $l() {
          return bl().memoizedState;
        }
        function Ql(e, t, n) {
          var r = tu(e);
          if (
            ((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), ql(e))
          )
            Gl(t, n);
          else if (null !== (n = Lo(e, t, n, r))) {
            nu(n, e, r, eu()), Yl(n, t, r);
          }
        }
        function Xl(e, t, n) {
          var r = tu(e),
            a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
          if (ql(e)) Gl(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  i = o(l, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, l))) {
                  var s = t.interleaved;
                  return (
                    null === s ? ((a.next = a), _o(t)) : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = Lo(e, t, a, r)) && (nu(n, e, r, (a = eu())), Yl(n, t, r));
          }
        }
        function ql(e) {
          var t = e.alternate;
          return e === il || (null !== t && t === il);
        }
        function Gl(e, t) {
          dl = cl = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
        }
        function Yl(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var Jl = {
            readContext: Oo,
            useCallback: hl,
            useContext: hl,
            useEffect: hl,
            useImperativeHandle: hl,
            useInsertionEffect: hl,
            useLayoutEffect: hl,
            useMemo: hl,
            useReducer: hl,
            useRef: hl,
            useState: hl,
            useDebugValue: hl,
            useDeferredValue: hl,
            useTransition: hl,
            useMutableSource: hl,
            useSyncExternalStore: hl,
            useId: hl,
            unstable_isNewReconciler: !1,
          },
          Zl = {
            readContext: Oo,
            useCallback: function (e, t) {
              return (yl().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Oo,
            useEffect: Il,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                _l(4194308, 4, Ml.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return _l(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return _l(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = yl();
              return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
            },
            useReducer: function (e, t, n) {
              var r = yl();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Ql.bind(null, il, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (yl().memoizedState = e);
            },
            useState: Tl,
            useDebugValue: Wl,
            useDeferredValue: function (e) {
              return (yl().memoizedState = e);
            },
            useTransition: function () {
              var e = Tl(!1),
                t = e[0];
              return (e = Kl.bind(null, e[1])), (yl().memoizedState = e), [t, e];
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = il,
                a = yl();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Ps)) throw Error(o(349));
                0 !== (30 & ll) || Cl(r, t, n);
              }
              a.memoizedState = n;
              var l = { value: n, getSnapshot: t };
              return (
                (a.queue = l),
                Il(Rl.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                Ol(9, Nl.bind(null, r, l, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = yl(),
                t = Ps.identifierPrefix;
              if (ao) {
                var n = Ya;
                (t = ':' + t + 'R' + (n = (Ga & ~(1 << (32 - lt(Ga) - 1))).toString(32) + n)),
                  0 < (n = fl++) && (t += 'H' + n.toString(32)),
                  (t += ':');
              } else t = ':' + t + 'r' + (n = pl++).toString(32) + ':';
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ei = {
            readContext: Oo,
            useCallback: Ul,
            useContext: Oo,
            useEffect: zl,
            useImperativeHandle: Bl,
            useInsertionEffect: Dl,
            useLayoutEffect: Fl,
            useMemo: Hl,
            useReducer: wl,
            useRef: Al,
            useState: function () {
              return wl(xl);
            },
            useDebugValue: Wl,
            useDeferredValue: function (e) {
              return Vl(bl(), sl.memoizedState, e);
            },
            useTransition: function () {
              return [wl(xl)[0], bl().memoizedState];
            },
            useMutableSource: El,
            useSyncExternalStore: kl,
            useId: $l,
            unstable_isNewReconciler: !1,
          },
          ti = {
            readContext: Oo,
            useCallback: Ul,
            useContext: Oo,
            useEffect: zl,
            useImperativeHandle: Bl,
            useInsertionEffect: Dl,
            useLayoutEffect: Fl,
            useMemo: Hl,
            useReducer: Sl,
            useRef: Al,
            useState: function () {
              return Sl(xl);
            },
            useDebugValue: Wl,
            useDeferredValue: function (e) {
              var t = bl();
              return null === sl ? (t.memoizedState = e) : Vl(t, sl.memoizedState, e);
            },
            useTransition: function () {
              return [Sl(xl)[0], bl().memoizedState];
            },
            useMutableSource: El,
            useSyncExternalStore: kl,
            useId: $l,
            unstable_isNewReconciler: !1,
          };
        function ni(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = D({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function ri(e, t, n, r) {
          (n = null === (n = n(r, (t = e.memoizedState))) || void 0 === n ? t : D({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var ai = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ue(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              o = Mo(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Bo(e, o, a)) && (nu(t, e, a, r), Wo(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              o = Mo(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Bo(e, o, a)) && (nu(t, e, a, r), Wo(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              a = Mo(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Bo(e, a, r)) && (nu(t, e, r, n), Wo(t, e, r));
          },
        };
        function oi(e, t, n, r, a, o, l) {
          return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, l)
            : !t.prototype || !t.prototype.isPureReactComponent || !sr(n, r) || !sr(a, o);
        }
        function li(e, t, n) {
          var r = !1,
            a = Ra,
            o = t.contextType;
          return (
            'object' === typeof o && null !== o
              ? (o = Oo(o))
              : ((a = Aa(t) ? Ta : ja.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Oa(e, a) : Ra)),
            (t = new t(n, o)),
            (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = ai),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function ii(e, t, n, r) {
          (e = t.state),
            'function' === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
            'function' === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && ai.enqueueReplaceState(t, t.state, null);
        }
        function si(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = {}), Do(e);
          var o = t.contextType;
          'object' === typeof o && null !== o
            ? (a.context = Oo(o))
            : ((o = Aa(t) ? Ta : ja.current), (a.context = Oa(e, o))),
            (a.state = e.memoizedState),
            'function' === typeof (o = t.getDerivedStateFromProps) &&
              (ri(e, t, o, n), (a.state = e.memoizedState)),
            'function' === typeof t.getDerivedStateFromProps ||
              'function' === typeof a.getSnapshotBeforeUpdate ||
              ('function' !== typeof a.UNSAFE_componentWillMount &&
                'function' !== typeof a.componentWillMount) ||
              ((t = a.state),
              'function' === typeof a.componentWillMount && a.componentWillMount(),
              'function' === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
              t !== a.state && ai.enqueueReplaceState(a, a.state, null),
              Ho(e, n, a, r),
              (a.state = e.memoizedState)),
            'function' === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function ui(e, t) {
          try {
            var n = '',
              r = t;
            do {
              (n += W(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = '\nError generating stack: ' + o.message + '\n' + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function ci(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function di(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var fi = 'function' === typeof WeakMap ? WeakMap : Map;
        function pi(e, t, n) {
          ((n = Mo(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Vs || ((Vs = !0), (Ks = r)), di(0, t);
            }),
            n
          );
        }
        function hi(e, t, n) {
          (n = Mo(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ('function' === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                di(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              'function' === typeof o.componentDidCatch &&
              (n.callback = function () {
                di(0, t),
                  'function' !== typeof r && (null === $s ? ($s = new Set([this])) : $s.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
              }),
            n
          );
        }
        function mi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fi();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cu.bind(null, e, t, n)), t.then(e, e));
        }
        function vi(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gi(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Mo(-1, 1)).tag = 2), Bo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var yi = x.ReactCurrentOwner,
          bi = !1;
        function xi(e, t, n, r) {
          t.child = null === e ? So(t, null, n, r) : wo(t, e.child, n, r);
        }
        function wi(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            To(t, a),
            (r = vl(e, t, n, r, o, a)),
            (n = gl()),
            null === e || bi
              ? (ao && n && eo(t), (t.flags |= 1), xi(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Vi(e, t, a))
          );
        }
        function Si(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return 'function' !== typeof o ||
              Au(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Lu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Ei(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var l = o.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : sr)(l, r) && e.ref === t.ref)
              return Vi(e, t, a);
          }
          return (t.flags |= 1), ((e = _u(o, r)).ref = t.ref), (e.return = t), (t.child = e);
        }
        function Ei(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (sr(o, r) && e.ref === t.ref) {
              if (((bi = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Vi(e, t, a);
              0 !== (131072 & e.flags) && (bi = !0);
            }
          }
          return Ni(e, t, n, r, a);
        }
        function ki(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ('hidden' === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                Na(_s, As),
                (As |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                  (t.updateQueue = null),
                  Na(_s, As),
                  (As |= e),
                  null
                );
              (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== o ? o.baseLanes : n),
                Na(_s, As),
                (As |= r);
            }
          else
            null !== o ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
              Na(_s, As),
              (As |= r);
          return xi(e, t, a, n), t.child;
        }
        function Ci(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ni(e, t, n, r, a) {
          var o = Aa(n) ? Ta : ja.current;
          return (
            (o = Oa(t, o)),
            To(t, a),
            (n = vl(e, t, n, r, o, a)),
            (r = gl()),
            null === e || bi
              ? (ao && r && eo(t), (t.flags |= 1), xi(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Vi(e, t, a))
          );
        }
        function Ri(e, t, n, r, a) {
          if (Aa(n)) {
            var o = !0;
            za(t);
          } else o = !1;
          if ((To(t, a), null === t.stateNode)) Hi(e, t), li(t, n, r), si(t, n, r, a), (r = !0);
          else if (null === e) {
            var l = t.stateNode,
              i = t.memoizedProps;
            l.props = i;
            var s = l.context,
              u = n.contextType;
            'object' === typeof u && null !== u
              ? (u = Oo(u))
              : (u = Oa(t, (u = Aa(n) ? Ta : ja.current)));
            var c = n.getDerivedStateFromProps,
              d = 'function' === typeof c || 'function' === typeof l.getSnapshotBeforeUpdate;
            d ||
              ('function' !== typeof l.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof l.componentWillReceiveProps) ||
              ((i !== r || s !== u) && ii(t, l, r, u)),
              (zo = !1);
            var f = t.memoizedState;
            (l.state = f),
              Ho(t, r, l, a),
              (s = t.memoizedState),
              i !== r || f !== s || Pa.current || zo
                ? ('function' === typeof c && (ri(t, n, c, r), (s = t.memoizedState)),
                  (i = zo || oi(t, n, i, r, f, s, u))
                    ? (d ||
                        ('function' !== typeof l.UNSAFE_componentWillMount &&
                          'function' !== typeof l.componentWillMount) ||
                        ('function' === typeof l.componentWillMount && l.componentWillMount(),
                        'function' === typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      'function' === typeof l.componentDidMount && (t.flags |= 4194308))
                    : ('function' === typeof l.componentDidMount && (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (l.props = r),
                  (l.state = s),
                  (l.context = u),
                  (r = i))
                : ('function' === typeof l.componentDidMount && (t.flags |= 4194308), (r = !1));
          } else {
            (l = t.stateNode),
              Fo(e, t),
              (i = t.memoizedProps),
              (u = t.type === t.elementType ? i : ni(t.type, i)),
              (l.props = u),
              (d = t.pendingProps),
              (f = l.context),
              'object' === typeof (s = n.contextType) && null !== s
                ? (s = Oo(s))
                : (s = Oa(t, (s = Aa(n) ? Ta : ja.current)));
            var p = n.getDerivedStateFromProps;
            (c = 'function' === typeof p || 'function' === typeof l.getSnapshotBeforeUpdate) ||
              ('function' !== typeof l.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof l.componentWillReceiveProps) ||
              ((i !== d || f !== s) && ii(t, l, r, s)),
              (zo = !1),
              (f = t.memoizedState),
              (l.state = f),
              Ho(t, r, l, a);
            var h = t.memoizedState;
            i !== d || f !== h || Pa.current || zo
              ? ('function' === typeof p && (ri(t, n, p, r), (h = t.memoizedState)),
                (u = zo || oi(t, n, u, r, f, h, s) || !1)
                  ? (c ||
                      ('function' !== typeof l.UNSAFE_componentWillUpdate &&
                        'function' !== typeof l.componentWillUpdate) ||
                      ('function' === typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, h, s),
                      'function' === typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, h, s)),
                    'function' === typeof l.componentDidUpdate && (t.flags |= 4),
                    'function' === typeof l.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ('function' !== typeof l.componentDidUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    'function' !== typeof l.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (l.props = r),
                (l.state = h),
                (l.context = s),
                (r = u))
              : ('function' !== typeof l.componentDidUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                'function' !== typeof l.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return ji(e, t, n, r, o, a);
        }
        function ji(e, t, n, r, a, o) {
          Ci(e, t);
          var l = 0 !== (128 & t.flags);
          if (!r && !l) return a && Da(t, n, !1), Vi(e, t, o);
          (r = t.stateNode), (yi.current = t);
          var i = l && 'function' !== typeof n.getDerivedStateFromError ? null : r.render();
          return (
            (t.flags |= 1),
            null !== e && l
              ? ((t.child = wo(t, e.child, null, o)), (t.child = wo(t, null, i, o)))
              : xi(e, t, i, o),
            (t.memoizedState = r.state),
            a && Da(t, n, !0),
            t.child
          );
        }
        function Pi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? La(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && La(0, t.context, !1),
            Go(e, t.containerInfo);
        }
        function Ti(e, t, n, r, a) {
          return ho(), mo(a), (t.flags |= 256), xi(e, t, n, r), t.child;
        }
        var Oi,
          Ai,
          _i,
          Li,
          Ii = { dehydrated: null, treeContext: null, retryLane: 0 };
        function zi(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Di(e, t, n) {
          var r,
            a = t.pendingProps,
            l = el.current,
            i = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & l)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (l |= 1),
            Na(el, 1 & l),
            null === e)
          )
            return (
              uo(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : '$!' === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (s = { mode: 'hidden', children: s }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = s))
                        : (i = zu(s, a, 0, null)),
                      (e = Iu(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = zi(n)),
                      (t.memoizedState = Ii),
                      e)
                    : Fi(t, s))
            );
          if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
            return (function (e, t, n, r, a, l, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Mi(e, t, i, (r = ci(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((l = r.fallback),
                    (a = t.mode),
                    (r = zu({ mode: 'visible', children: r.children }, a, 0, null)),
                    ((l = Iu(l, a, i, null)).flags |= 2),
                    (r.return = t),
                    (l.return = t),
                    (r.sibling = l),
                    (t.child = r),
                    0 !== (1 & t.mode) && wo(t, e.child, null, i),
                    (t.child.memoizedState = zi(i)),
                    (t.memoizedState = Ii),
                    l);
              if (0 === (1 & t.mode)) return Mi(e, t, i, null);
              if ('$!' === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset)) var s = r.dgst;
                return (r = s), Mi(e, t, i, (r = ci((l = Error(o(419))), r, void 0)));
              }
              if (((s = 0 !== (i & e.childLanes)), bi || s)) {
                if (null !== (r = Ps)) {
                  switch (i & -i) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== l.retryLane &&
                    ((l.retryLane = a), Io(e, a), nu(r, e, a, -1));
                }
                return mu(), Mi(e, t, i, (r = ci(Error(o(421)))));
              }
              return '$?' === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ru.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = l.treeContext),
                  (ro = ua(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((Qa[Xa++] = Ga),
                    (Qa[Xa++] = Ya),
                    (Qa[Xa++] = qa),
                    (Ga = e.id),
                    (Ya = e.overflow),
                    (qa = t)),
                  (t = Fi(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, l, n);
          if (i) {
            (i = a.fallback), (s = t.mode), (r = (l = e.child).sibling);
            var u = { mode: 'hidden', children: a.children };
            return (
              0 === (1 & s) && t.child !== l
                ? (((a = t.child).childLanes = 0), (a.pendingProps = u), (t.deletions = null))
                : ((a = _u(l, u)).subtreeFlags = 14680064 & l.subtreeFlags),
              null !== r ? (i = _u(r, i)) : ((i = Iu(i, s, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? zi(n)
                  : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
              (i.memoizedState = s),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ii),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = _u(i, { mode: 'visible', children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Fi(e, t) {
          return (
            ((t = zu({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t)
          );
        }
        function Mi(e, t, n, r) {
          return (
            null !== r && mo(r),
            wo(t, e.child, null, n),
            ((e = Fi(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bi(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Po(e.return, t, n);
        }
        function Wi(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Ui(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((xi(e, t, r.children, n), 0 !== (2 & (r = el.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bi(e, n, t);
                else if (19 === e.tag) Bi(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Na(el, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case 'forwards':
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === tl(e) && (a = n), (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Wi(t, !1, a, n, o);
                break;
              case 'backwards':
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === tl(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Wi(t, !0, n, null, o);
                break;
              case 'together':
                Wi(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hi(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Vi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (zs |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = _u((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling), ((n = n.sibling = _u(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Ki(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case 'hidden':
                t = e.tail;
                for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case 'collapsed':
                n = e.tail;
                for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function $i(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Qi(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return $i(t), null;
            case 1:
            case 17:
              return Aa(t.type) && _a(), $i(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Yo(),
                Ca(Pa),
                Ca(ja),
                rl(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024), null !== oo && (lu(oo), (oo = null)))),
                Ai(e, t),
                $i(t),
                null
              );
            case 5:
              Zo(t);
              var a = qo(Xo.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                _i(e, t, n, r, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return $i(t), null;
                }
                if (((e = qo($o.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (((r[fa] = t), (r[pa] = l), (e = 0 !== (1 & t.mode)), n)) {
                    case 'dialog':
                      Mr('cancel', r), Mr('close', r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Mr('load', r);
                      break;
                    case 'video':
                    case 'audio':
                      for (a = 0; a < Ir.length; a++) Mr(Ir[a], r);
                      break;
                    case 'source':
                      Mr('error', r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Mr('error', r), Mr('load', r);
                      break;
                    case 'details':
                      Mr('toggle', r);
                      break;
                    case 'input':
                      G(r, l), Mr('invalid', r);
                      break;
                    case 'select':
                      (r._wrapperState = { wasMultiple: !!l.multiple }), Mr('invalid', r);
                      break;
                    case 'textarea':
                      ae(r, l), Mr('invalid', r);
                  }
                  for (var s in (ye(n, l), (a = null), l))
                    if (l.hasOwnProperty(s)) {
                      var u = l[s];
                      'children' === s
                        ? 'string' === typeof u
                          ? r.textContent !== u &&
                            (!0 !== l.suppressHydrationWarning && Jr(r.textContent, u, e),
                            (a = ['children', u]))
                          : 'number' === typeof u &&
                            r.textContent !== '' + u &&
                            (!0 !== l.suppressHydrationWarning && Jr(r.textContent, u, e),
                            (a = ['children', '' + u]))
                        : i.hasOwnProperty(s) && null != u && 'onScroll' === s && Mr('scroll', r);
                    }
                  switch (n) {
                    case 'input':
                      $(r), Z(r, l, !0);
                      break;
                    case 'textarea':
                      $(r), le(r);
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' === typeof l.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === e && (e = ie(n)),
                    'http://www.w3.org/1999/xhtml' === e
                      ? 'script' === n
                        ? (((e = s.createElement('div')).innerHTML = '<script></script>'),
                          (e = e.removeChild(e.firstChild)))
                        : 'string' === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          'select' === n &&
                            ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    Oi(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case 'dialog':
                        Mr('cancel', e), Mr('close', e), (a = r);
                        break;
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        Mr('load', e), (a = r);
                        break;
                      case 'video':
                      case 'audio':
                        for (a = 0; a < Ir.length; a++) Mr(Ir[a], e);
                        a = r;
                        break;
                      case 'source':
                        Mr('error', e), (a = r);
                        break;
                      case 'img':
                      case 'image':
                      case 'link':
                        Mr('error', e), Mr('load', e), (a = r);
                        break;
                      case 'details':
                        Mr('toggle', e), (a = r);
                        break;
                      case 'input':
                        G(e, r), (a = q(e, r)), Mr('invalid', e);
                        break;
                      case 'option':
                      default:
                        a = r;
                        break;
                      case 'select':
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = D({}, r, { value: void 0 })),
                          Mr('invalid', e);
                        break;
                      case 'textarea':
                        ae(e, r), (a = re(e, r)), Mr('invalid', e);
                    }
                    for (l in (ye(n, a), (u = a)))
                      if (u.hasOwnProperty(l)) {
                        var c = u[l];
                        'style' === l
                          ? ve(e, c)
                          : 'dangerouslySetInnerHTML' === l
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : 'children' === l
                          ? 'string' === typeof c
                            ? ('textarea' !== n || '' !== c) && fe(e, c)
                            : 'number' === typeof c && fe(e, '' + c)
                          : 'suppressContentEditableWarning' !== l &&
                            'suppressHydrationWarning' !== l &&
                            'autoFocus' !== l &&
                            (i.hasOwnProperty(l)
                              ? null != c && 'onScroll' === l && Mr('scroll', e)
                              : null != c && b(e, l, c, s));
                      }
                    switch (n) {
                      case 'input':
                        $(e), Z(e, r, !1);
                        break;
                      case 'textarea':
                        $(e), le(e);
                        break;
                      case 'option':
                        null != r.value && e.setAttribute('value', '' + V(r.value));
                        break;
                      case 'select':
                        (e.multiple = !!r.multiple),
                          null != (l = r.value)
                            ? ne(e, !!r.multiple, l, !1)
                            : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        'function' === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        r = !!r.autoFocus;
                        break e;
                      case 'img':
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return $i(t), null;
            case 6:
              if (e && null != t.stateNode) Li(e, t, e.memoizedProps, r);
              else {
                if ('string' !== typeof r && null === t.stateNode) throw Error(o(166));
                if (((n = qo(Xo.current)), qo($o.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (l = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  l && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fa] = t),
                    (t.stateNode = r);
              }
              return $i(t), null;
            case 13:
              if (
                (Ca(el),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
              ) {
                if (ao && null !== ro && 0 !== (1 & t.mode) && 0 === (128 & t.flags))
                  po(), ho(), (t.flags |= 98560), (l = !1);
                else if (((l = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!l) throw Error(o(318));
                    if (!(l = null !== (l = t.memoizedState) ? l.dehydrated : null))
                      throw Error(o(317));
                    l[fa] = t;
                  } else ho(), 0 === (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                  $i(t), (l = !1);
                } else null !== oo && (lu(oo), (oo = null)), (l = !0);
                if (!l) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & el.current) ? 0 === Ls && (Ls = 3) : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  $i(t),
                  null);
            case 4:
              return Yo(), Ai(e, t), null === e && Ur(t.stateNode.containerInfo), $i(t), null;
            case 10:
              return jo(t.type._context), $i(t), null;
            case 19:
              if ((Ca(el), null === (l = t.memoizedState))) return $i(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = l.rendering)))
                if (r) Ki(l, !1);
                else {
                  if (0 !== Ls || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = tl(e))) {
                        for (
                          t.flags |= 128,
                            Ki(l, !1),
                            null !== (r = s.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 14680066),
                            null === (s = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.subtreeFlags = 0),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = s.childLanes),
                                (l.lanes = s.lanes),
                                (l.child = s.child),
                                (l.subtreeFlags = 0),
                                (l.deletions = null),
                                (l.memoizedProps = s.memoizedProps),
                                (l.memoizedState = s.memoizedState),
                                (l.updateQueue = s.updateQueue),
                                (l.type = s.type),
                                (e = s.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : { lanes: e.lanes, firstContext: e.firstContext })),
                            (n = n.sibling);
                        return Na(el, (1 & el.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== l.tail &&
                    Ye() > Us &&
                    ((t.flags |= 128), (r = !0), Ki(l, !1), (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = tl(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                      Ki(l, !0),
                      null === l.tail && 'hidden' === l.tailMode && !s.alternate && !ao)
                    )
                      return $i(t), null;
                  } else
                    2 * Ye() - l.renderingStartTime > Us &&
                      1073741824 !== n &&
                      ((t.flags |= 128), (r = !0), Ki(l, !1), (t.lanes = 4194304));
                l.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = l.last) ? (n.sibling = s) : (t.child = s), (l.last = s));
              }
              return null !== l.tail
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = Ye()),
                  (t.sibling = null),
                  (n = el.current),
                  Na(el, r ? (1 & n) | 2 : 1 & n),
                  t)
                : ($i(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & As) && ($i(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : $i(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Xi(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Aa(t.type) && _a(),
                65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
              );
            case 3:
              return (
                Yo(),
                Ca(Pa),
                Ca(ja),
                rl(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Zo(t), null;
            case 13:
              if ((Ca(el), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 19:
              return Ca(el), null;
            case 4:
              return Yo(), null;
            case 10:
              return jo(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (Oi = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ai = function () {}),
          (_i = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), qo($o.current);
              var o,
                l = null;
              switch (n) {
                case 'input':
                  (a = q(e, a)), (r = q(e, r)), (l = []);
                  break;
                case 'select':
                  (a = D({}, a, { value: void 0 })), (r = D({}, r, { value: void 0 })), (l = []);
                  break;
                case 'textarea':
                  (a = re(e, a)), (r = re(e, r)), (l = []);
                  break;
                default:
                  'function' !== typeof a.onClick &&
                    'function' === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ('style' === c) {
                    var s = a[c];
                    for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
                  } else
                    'dangerouslySetInnerHTML' !== c &&
                      'children' !== c &&
                      'suppressContentEditableWarning' !== c &&
                      'suppressHydrationWarning' !== c &&
                      'autoFocus' !== c &&
                      (i.hasOwnProperty(c) ? l || (l = []) : (l = l || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ('style' === c)
                    if (s) {
                      for (o in s)
                        !s.hasOwnProperty(o) ||
                          (u && u.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ''));
                      for (o in u)
                        u.hasOwnProperty(o) && s[o] !== u[o] && (n || (n = {}), (n[o] = u[o]));
                    } else n || (l || (l = []), l.push(c, n)), (n = u);
                  else
                    'dangerouslySetInnerHTML' === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (l = l || []).push(c, u))
                      : 'children' === c
                      ? ('string' !== typeof u && 'number' !== typeof u) ||
                        (l = l || []).push(c, '' + u)
                      : 'suppressContentEditableWarning' !== c &&
                        'suppressHydrationWarning' !== c &&
                        (i.hasOwnProperty(c)
                          ? (null != u && 'onScroll' === c && Mr('scroll', e),
                            l || s === u || (l = []))
                          : (l = l || []).push(c, u));
              }
              n && (l = l || []).push('style', n);
              var c = l;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Li = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var qi = !1,
          Gi = !1,
          Yi = 'function' === typeof WeakSet ? WeakSet : Set,
          Ji = null;
        function Zi(e, t) {
          var n = e.ref;
          if (null !== n)
            if ('function' === typeof n)
              try {
                n(null);
              } catch (r) {
                ku(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            ku(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && es(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rs(e, t) {
          if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), 'function' === typeof t ? t(e) : (t.current = e);
          }
        }
        function os(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), os(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa], delete t[pa], delete t[ma], delete t[va], delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ls(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function is(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ls(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; ) ss(e, t, n), (e = e.sibling);
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; ) us(e, t, n), (e = e.sibling);
        }
        var cs = null,
          ds = !1;
        function fs(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (ot && 'function' === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Gi || Zi(n, t);
            case 6:
              var r = cs,
                a = ds;
              (cs = null),
                fs(e, t, n),
                (ds = a),
                null !== (cs = r) &&
                  (ds
                    ? ((e = cs),
                      (n = n.stateNode),
                      8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                    : cs.removeChild(n.stateNode));
              break;
            case 18:
              null !== cs &&
                (ds
                  ? ((e = cs),
                    (n = n.stateNode),
                    8 === e.nodeType ? sa(e.parentNode, n) : 1 === e.nodeType && sa(e, n),
                    Ut(e))
                  : sa(cs, n.stateNode));
              break;
            case 4:
              (r = cs),
                (a = ds),
                (cs = n.stateNode.containerInfo),
                (ds = !0),
                fs(e, t, n),
                (cs = r),
                (ds = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (!Gi && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                a = r = r.next;
                do {
                  var o = a,
                    l = o.destroy;
                  (o = o.tag),
                    void 0 !== l && (0 !== (2 & o) || 0 !== (4 & o)) && es(n, t, l),
                    (a = a.next);
                } while (a !== r);
              }
              fs(e, t, n);
              break;
            case 1:
              if (!Gi && (Zi(n, t), 'function' === typeof (r = n.stateNode).componentWillUnmount))
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (i) {
                  ku(n, t, i);
                }
              fs(e, t, n);
              break;
            case 21:
              fs(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Gi = (r = Gi) || null !== n.memoizedState), fs(e, t, n), (Gi = r))
                : fs(e, t, n);
              break;
            default:
              fs(e, t, n);
          }
        }
        function hs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Yi()),
              t.forEach(function (t) {
                var r = ju.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ms(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var l = e,
                  i = t,
                  s = i;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (cs = s.stateNode), (ds = !1);
                      break e;
                    case 3:
                    case 4:
                      (cs = s.stateNode.containerInfo), (ds = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === cs) throw Error(o(160));
                ps(l, i, a), (cs = null), (ds = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                ku(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) vs(t, e), (t = t.sibling);
        }
        function vs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ms(t, e), gs(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (v) {
                  ku(e, e.return, v);
                }
                try {
                  ns(5, e, e.return);
                } catch (v) {
                  ku(e, e.return, v);
                }
              }
              break;
            case 1:
              ms(t, e), gs(e), 512 & r && null !== n && Zi(n, n.return);
              break;
            case 5:
              if ((ms(t, e), gs(e), 512 & r && null !== n && Zi(n, n.return), 32 & e.flags)) {
                var a = e.stateNode;
                try {
                  fe(a, '');
                } catch (v) {
                  ku(e, e.return, v);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var l = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : l,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    'input' === s && 'radio' === l.type && null != l.name && Y(a, l), be(s, i);
                    var c = be(s, l);
                    for (i = 0; i < u.length; i += 2) {
                      var d = u[i],
                        f = u[i + 1];
                      'style' === d
                        ? ve(a, f)
                        : 'dangerouslySetInnerHTML' === d
                        ? de(a, f)
                        : 'children' === d
                        ? fe(a, f)
                        : b(a, d, f, c);
                    }
                    switch (s) {
                      case 'input':
                        J(a, l);
                        break;
                      case 'textarea':
                        oe(a, l);
                        break;
                      case 'select':
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!l.multiple;
                        var h = l.value;
                        null != h
                          ? ne(a, !!l.multiple, h, !1)
                          : p !== !!l.multiple &&
                            (null != l.defaultValue
                              ? ne(a, !!l.multiple, l.defaultValue, !0)
                              : ne(a, !!l.multiple, l.multiple ? [] : '', !1));
                    }
                    a[pa] = l;
                  } catch (v) {
                    ku(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((ms(t, e), gs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (l = e.memoizedProps);
                try {
                  a.nodeValue = l;
                } catch (v) {
                  ku(e, e.return, v);
                }
              }
              break;
            case 3:
              if ((ms(t, e), gs(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                  Ut(t.containerInfo);
                } catch (v) {
                  ku(e, e.return, v);
                }
              break;
            case 4:
            default:
              ms(t, e), gs(e);
              break;
            case 13:
              ms(t, e),
                gs(e),
                8192 & (a = e.child).flags &&
                  ((l = null !== a.memoizedState),
                  (a.stateNode.isHidden = l),
                  !l ||
                    (null !== a.alternate && null !== a.alternate.memoizedState) ||
                    (Ws = Ye())),
                4 & r && hs(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Gi = (c = Gi) || d), ms(t, e), (Gi = c)) : ms(t, e),
                gs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Ji = e, d = e.child; null !== d; ) {
                    for (f = Ji = d; null !== Ji; ) {
                      switch (((h = (p = Ji).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          Zi(p, p.return);
                          var m = p.stateNode;
                          if ('function' === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (v) {
                              ku(r, n, v);
                            }
                          }
                          break;
                        case 5:
                          Zi(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ws(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Ji = h)) : ws(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? 'function' === typeof (l = a.style).setProperty
                              ? l.setProperty('display', 'none', 'important')
                              : (l.display = 'none')
                            : ((s = f.stateNode),
                              (i =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty('display')
                                  ? u.display
                                  : null),
                              (s.style.display = me('display', i)));
                      } catch (v) {
                        ku(e, e.return, v);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? '' : f.memoizedProps;
                      } catch (v) {
                        ku(e, e.return, v);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) || null === f.memoizedState || f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
                }
              }
              break;
            case 19:
              ms(t, e), gs(e), 4 & r && hs(e);
            case 21:
          }
        }
        function gs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ls(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ''), (r.flags &= -33)), us(e, is(e), a);
                  break;
                case 3:
                case 4:
                  var l = r.stateNode.containerInfo;
                  ss(e, is(e), l);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (i) {
              ku(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ys(e, t, n) {
          (Ji = e), bs(e, t, n);
        }
        function bs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Ji; ) {
            var a = Ji,
              o = a.child;
            if (22 === a.tag && r) {
              var l = null !== a.memoizedState || qi;
              if (!l) {
                var i = a.alternate,
                  s = (null !== i && null !== i.memoizedState) || Gi;
                i = qi;
                var u = Gi;
                if (((qi = l), (Gi = s) && !u))
                  for (Ji = a; null !== Ji; )
                    (s = (l = Ji).child),
                      22 === l.tag && null !== l.memoizedState
                        ? Ss(a)
                        : null !== s
                        ? ((s.return = l), (Ji = s))
                        : Ss(a);
                for (; null !== o; ) (Ji = o), bs(o, t, n), (o = o.sibling);
                (Ji = a), (qi = i), (Gi = u);
              }
              xs(e);
            } else 0 !== (8772 & a.subtreeFlags) && null !== o ? ((o.return = a), (Ji = o)) : xs(e);
          }
        }
        function xs(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gi || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Gi)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ni(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      var l = t.updateQueue;
                      null !== l && Vo(t, l, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Vo(t, i, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            u.autoFocus && n.focus();
                            break;
                          case 'img':
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Ut(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Gi || (512 & t.flags && as(t));
              } catch (p) {
                ku(t, t.return, p);
              }
            }
            if (t === e) {
              Ji = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Ji = n);
              break;
            }
            Ji = t.return;
          }
        }
        function ws(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            if (t === e) {
              Ji = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Ji = n);
              break;
            }
            Ji = t.return;
          }
        }
        function Ss(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    ku(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ('function' === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      ku(t, a, s);
                    }
                  }
                  var o = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    ku(t, o, s);
                  }
                  break;
                case 5:
                  var l = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    ku(t, l, s);
                  }
              }
            } catch (s) {
              ku(t, t.return, s);
            }
            if (t === e) {
              Ji = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), (Ji = i);
              break;
            }
            Ji = t.return;
          }
        }
        var Es,
          ks = Math.ceil,
          Cs = x.ReactCurrentDispatcher,
          Ns = x.ReactCurrentOwner,
          Rs = x.ReactCurrentBatchConfig,
          js = 0,
          Ps = null,
          Ts = null,
          Os = 0,
          As = 0,
          _s = ka(0),
          Ls = 0,
          Is = null,
          zs = 0,
          Ds = 0,
          Fs = 0,
          Ms = null,
          Bs = null,
          Ws = 0,
          Us = 1 / 0,
          Hs = null,
          Vs = !1,
          Ks = null,
          $s = null,
          Qs = !1,
          Xs = null,
          qs = 0,
          Gs = 0,
          Ys = null,
          Js = -1,
          Zs = 0;
        function eu() {
          return 0 !== (6 & js) ? Ye() : -1 !== Js ? Js : (Js = Ye());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & js) && 0 !== Os
            ? Os & -Os
            : null !== vo.transition
            ? (0 === Zs && (Zs = mt()), Zs)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Gt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Gs) throw ((Gs = 0), (Ys = null), Error(o(185)));
          gt(e, n, r),
            (0 !== (2 & js) && e === Ps) ||
              (e === Ps && (0 === (2 & js) && (Ds |= n), 4 === Ls && iu(e, Os)),
              ru(e, r),
              1 === n && 0 === js && 0 === (1 & t.mode) && ((Us = Ye() + 500), Ma && Ua()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var l = 31 - lt(o),
                i = 1 << l,
                s = a[l];
              -1 === s
                ? (0 !== (i & n) && 0 === (i & r)) || (a[l] = pt(i, t))
                : s <= t && (e.expiredLanes |= i),
                (o &= ~i);
            }
          })(e, t);
          var r = ft(e, e === Ps ? Os : 0);
          if (0 === r) null !== n && Xe(n), (e.callbackNode = null), (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Xe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ma = !0), Wa(e);
                  })(su.bind(null, e))
                : Wa(su.bind(null, e)),
                la(function () {
                  0 === (6 & js) && Ua();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Pu(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Js = -1), (Zs = 0), 0 !== (6 & js))) throw Error(o(327));
          var n = e.callbackNode;
          if (Su() && e.callbackNode !== n) return null;
          var r = ft(e, e === Ps ? Os : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vu(e, r);
          else {
            t = r;
            var a = js;
            js |= 2;
            var l = hu();
            for ((Ps === e && Os === t) || ((Hs = null), (Us = Ye() + 500), fu(e, t)); ; )
              try {
                yu();
                break;
              } catch (s) {
                pu(e, s);
              }
            Ro(),
              (Cs.current = l),
              (js = a),
              null !== Ts ? (t = 0) : ((Ps = null), (Os = 0), (t = Ls));
          }
          if (0 !== t) {
            if ((2 === t && 0 !== (a = ht(e)) && ((r = a), (t = ou(e, a))), 1 === t))
              throw ((n = Is), fu(e, 0), iu(e, r), ru(e, Ye()), n);
            if (6 === t) iu(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(o(), a)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = vu(e, r)) && 0 !== (l = ht(e)) && ((r = l), (t = ou(e, l))), 1 === t))
              )
                throw ((n = Is), fu(e, 0), iu(e, r), ru(e, Ye()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  wu(e, Bs, Hs);
                  break;
                case 3:
                  if ((iu(e, r), (130023424 & r) === r && 10 < (t = Ws + 500 - Ye()))) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(wu.bind(null, e, Bs, Hs), t);
                    break;
                  }
                  wu(e, Bs, Hs);
                  break;
                case 4:
                  if ((iu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - lt(r);
                    (l = 1 << i), (i = t[i]) > a && (a = i), (r &= ~l);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ye() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * ks(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(wu.bind(null, e, Bs, Hs), r);
                    break;
                  }
                  wu(e, Bs, Hs);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return ru(e, Ye()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function ou(e, t) {
          var n = Ms;
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = vu(e, t)) && ((t = Bs), (Bs = n), null !== t && lu(t)),
            e
          );
        }
        function lu(e) {
          null === Bs ? (Bs = e) : Bs.push.apply(Bs, e);
        }
        function iu(e, t) {
          for (
            t &= ~Fs, t &= ~Ds, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - lt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function su(e) {
          if (0 !== (6 & js)) throw Error(o(327));
          Su();
          var t = ft(e, 0);
          if (0 === (1 & t)) return ru(e, Ye()), null;
          var n = vu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = ou(e, r)));
          }
          if (1 === n) throw ((n = Is), fu(e, 0), iu(e, t), ru(e, Ye()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            wu(e, Bs, Hs),
            ru(e, Ye()),
            null
          );
        }
        function uu(e, t) {
          var n = js;
          js |= 1;
          try {
            return e(t);
          } finally {
            0 === (js = n) && ((Us = Ye() + 500), Ma && Ua());
          }
        }
        function cu(e) {
          null !== Xs && 0 === Xs.tag && 0 === (6 & js) && Su();
          var t = js;
          js |= 1;
          var n = Rs.transition,
            r = bt;
          try {
            if (((Rs.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Rs.transition = n), 0 === (6 & (js = t)) && Ua();
          }
        }
        function du() {
          (As = _s.current), Ca(_s);
        }
        function fu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ts))
            for (n = Ts.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) && void 0 !== r && _a();
                  break;
                case 3:
                  Yo(), Ca(Pa), Ca(ja), rl();
                  break;
                case 5:
                  Zo(r);
                  break;
                case 4:
                  Yo();
                  break;
                case 13:
                case 19:
                  Ca(el);
                  break;
                case 10:
                  jo(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((Ps = e),
            (Ts = e = _u(e.current, null)),
            (Os = As = t),
            (Ls = 0),
            (Is = null),
            (Fs = Ds = zs = 0),
            (Bs = Ms = null),
            null !== Ao)
          ) {
            for (t = 0; t < Ao.length; t++)
              if (null !== (r = (n = Ao[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var l = o.next;
                  (o.next = a), (r.next = l);
                }
                n.pending = r;
              }
            Ao = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = Ts;
            try {
              if ((Ro(), (al.current = Jl), cl)) {
                for (var r = il.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                cl = !1;
              }
              if (
                ((ll = 0),
                (ul = sl = il = null),
                (dl = !1),
                (fl = 0),
                (Ns.current = null),
                null === n || null === n.return)
              ) {
                (Ls = 1), (Is = t), (Ts = null);
                break;
              }
              e: {
                var l = e,
                  i = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Os),
                  (s.flags |= 32768),
                  null !== u && 'object' === typeof u && 'function' === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = vi(i);
                  if (null !== h) {
                    (h.flags &= -257), gi(h, i, s, 0, t), 1 & h.mode && mi(l, c, t), (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(u), (t.updateQueue = v);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    mi(l, c, t), mu();
                    break e;
                  }
                  u = Error(o(426));
                } else if (ao && 1 & s.mode) {
                  var g = vi(i);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256), gi(g, i, s, 0, t), mo(ui(u, s));
                    break e;
                  }
                }
                (l = u = ui(u, s)),
                  4 !== Ls && (Ls = 2),
                  null === Ms ? (Ms = [l]) : Ms.push(l),
                  (l = i);
                do {
                  switch (l.tag) {
                    case 3:
                      (l.flags |= 65536), (t &= -t), (l.lanes |= t), Uo(l, pi(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var y = l.type,
                        b = l.stateNode;
                      if (
                        0 === (128 & l.flags) &&
                        ('function' === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            'function' === typeof b.componentDidCatch &&
                            (null === $s || !$s.has(b))))
                      ) {
                        (l.flags |= 65536), (t &= -t), (l.lanes |= t), Uo(l, hi(l, s, t));
                        break e;
                      }
                  }
                  l = l.return;
                } while (null !== l);
              }
              xu(n);
            } catch (x) {
              (t = x), Ts === n && null !== n && (Ts = n = n.return);
              continue;
            }
            break;
          }
        }
        function hu() {
          var e = Cs.current;
          return (Cs.current = Jl), null === e ? Jl : e;
        }
        function mu() {
          (0 !== Ls && 3 !== Ls && 2 !== Ls) || (Ls = 4),
            null === Ps || (0 === (268435455 & zs) && 0 === (268435455 & Ds)) || iu(Ps, Os);
        }
        function vu(e, t) {
          var n = js;
          js |= 2;
          var r = hu();
          for ((Ps === e && Os === t) || ((Hs = null), fu(e, t)); ; )
            try {
              gu();
              break;
            } catch (a) {
              pu(e, a);
            }
          if ((Ro(), (js = n), (Cs.current = r), null !== Ts)) throw Error(o(261));
          return (Ps = null), (Os = 0), Ls;
        }
        function gu() {
          for (; null !== Ts; ) bu(Ts);
        }
        function yu() {
          for (; null !== Ts && !qe(); ) bu(Ts);
        }
        function bu(e) {
          var t = Es(e.alternate, e, As);
          (e.memoizedProps = e.pendingProps), null === t ? xu(e) : (Ts = t), (Ns.current = null);
        }
        function xu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Qi(n, t, As))) return void (Ts = n);
            } else {
              if (null !== (n = Xi(n, t))) return (n.flags &= 32767), void (Ts = n);
              if (null === e) return (Ls = 6), void (Ts = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ts = t);
            Ts = t = e;
          } while (null !== t);
          0 === Ls && (Ls = 5);
        }
        function wu(e, t, n) {
          var r = bt,
            a = Rs.transition;
          try {
            (Rs.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Su();
                } while (null !== Xs);
                if (0 !== (6 & js)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var l = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - lt(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, l),
                  e === Ps && ((Ts = Ps = null), (Os = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Qs ||
                    ((Qs = !0),
                    Pu(tt, function () {
                      return Su(), null;
                    })),
                  (l = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || l)
                ) {
                  (l = Rs.transition), (Rs.transition = null);
                  var i = bt;
                  bt = 1;
                  var s = js;
                  (js |= 4),
                    (Ns.current = null),
                    (function (e, t) {
                      if (((ea = Vt), pr((e = fr())))) {
                        if ('selectionStart' in e)
                          var n = { start: e.selectionStart, end: e.selectionEnd };
                        else
                          e: {
                            var r =
                              (n = ((n = e.ownerDocument) && n.defaultView) || window)
                                .getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                l = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, l.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n || (0 !== a && 3 !== f.nodeType) || (s = i + a),
                                    f !== l || (0 !== r && 3 !== f.nodeType) || (u = i + r),
                                    3 === f.nodeType && (i += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === a && (s = i),
                                    p === l && ++d === r && (u = i),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n = -1 === s || -1 === u ? null : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n }, Vt = !1, Ji = t;
                        null !== Ji;

                      )
                        if (((e = (t = Ji).child), 0 !== (1028 & t.subtreeFlags) && null !== e))
                          (e.return = t), (Ji = e);
                        else
                          for (; null !== Ji; ) {
                            t = Ji;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var v = m.memoizedProps,
                                        g = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type ? v : ni(t.type, v),
                                          g,
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = '')
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (w) {
                              ku(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Ji = e);
                              break;
                            }
                            Ji = t.return;
                          }
                      (m = ts), (ts = !1);
                    })(e, n),
                    vs(n, e),
                    hr(ta),
                    (Vt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    ys(n, e, a),
                    Ge(),
                    (js = s),
                    (bt = i),
                    (Rs.transition = l);
                } else e.current = n;
                if (
                  (Qs && ((Qs = !1), (Xs = e), (qs = a)),
                  (l = e.pendingLanes),
                  0 === l && ($s = null),
                  (function (e) {
                    if (ot && 'function' === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(at, e, void 0, 128 === (128 & e.current.flags));
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Ye()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Vs) throw ((Vs = !1), (e = Ks), (Ks = null), e);
                0 !== (1 & qs) && 0 !== e.tag && Su(),
                  (l = e.pendingLanes),
                  0 !== (1 & l) ? (e === Ys ? Gs++ : ((Gs = 0), (Ys = e))) : (Gs = 0),
                  Ua();
              })(e, t, n, r);
          } finally {
            (Rs.transition = a), (bt = r);
          }
          return null;
        }
        function Su() {
          if (null !== Xs) {
            var e = xt(qs),
              t = Rs.transition,
              n = bt;
            try {
              if (((Rs.transition = null), (bt = 16 > e ? 16 : e), null === Xs)) var r = !1;
              else {
                if (((e = Xs), (Xs = null), (qs = 0), 0 !== (6 & js))) throw Error(o(331));
                var a = js;
                for (js |= 4, Ji = e.current; null !== Ji; ) {
                  var l = Ji,
                    i = l.child;
                  if (0 !== (16 & Ji.flags)) {
                    var s = l.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Ji = c; null !== Ji; ) {
                          var d = Ji;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, d, l);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Ji = f);
                          else
                            for (; null !== Ji; ) {
                              var p = (d = Ji).sibling,
                                h = d.return;
                              if ((os(d), d === c)) {
                                Ji = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Ji = p);
                                break;
                              }
                              Ji = h;
                            }
                        }
                      }
                      var m = l.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      Ji = l;
                    }
                  }
                  if (0 !== (2064 & l.subtreeFlags) && null !== i) (i.return = l), (Ji = i);
                  else
                    e: for (; null !== Ji; ) {
                      if (0 !== (2048 & (l = Ji).flags))
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, l, l.return);
                        }
                      var y = l.sibling;
                      if (null !== y) {
                        (y.return = l.return), (Ji = y);
                        break e;
                      }
                      Ji = l.return;
                    }
                }
                var b = e.current;
                for (Ji = b; null !== Ji; ) {
                  var x = (i = Ji).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== x) (x.return = i), (Ji = x);
                  else
                    e: for (i = b; null !== Ji; ) {
                      if (0 !== (2048 & (s = Ji).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (S) {
                          ku(s, s.return, S);
                        }
                      if (s === i) {
                        Ji = null;
                        break e;
                      }
                      var w = s.sibling;
                      if (null !== w) {
                        (w.return = s.return), (Ji = w);
                        break e;
                      }
                      Ji = s.return;
                    }
                }
                if (((js = a), Ua(), ot && 'function' === typeof ot.onPostCommitFiberRoot))
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (S) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Rs.transition = t);
            }
          }
          return !1;
        }
        function Eu(e, t, n) {
          (e = Bo(e, (t = pi(0, (t = ui(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (gt(e, 1, t), ru(e, t));
        }
        function ku(e, t, n) {
          if (3 === e.tag) Eu(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Eu(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  'function' === typeof t.type.getDerivedStateFromError ||
                  ('function' === typeof r.componentDidCatch && (null === $s || !$s.has(r)))
                ) {
                  (t = Bo(t, (e = hi(t, (e = ui(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (gt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ps === e &&
              (Os & n) === n &&
              (4 === Ls || (3 === Ls && (130023424 & Os) === Os && 500 > Ye() - Ws)
                ? fu(e, 0)
                : (Fs |= n)),
            ru(e, t);
        }
        function Nu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = Io(e, t)) && (gt(e, t, n), ru(e, n));
        }
        function Ru(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Nu(e, n);
        }
        function ju(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Nu(e, n);
        }
        function Pu(e, t) {
          return Qe(e, t);
        }
        function Tu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ou(e, t, n, r) {
          return new Tu(e, t, n, r);
        }
        function Au(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function _u(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ou(e.tag, t, e.key, e.mode)).elementType = e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Lu(e, t, n, r, a, l) {
          var i = 2;
          if (((r = e), 'function' === typeof e)) Au(e) && (i = 1);
          else if ('string' === typeof e) i = 5;
          else
            e: switch (e) {
              case E:
                return Iu(n.children, a, l, t);
              case k:
                (i = 8), (a |= 8);
                break;
              case C:
                return ((e = Ou(12, n, t, 2 | a)).elementType = C), (e.lanes = l), e;
              case P:
                return ((e = Ou(13, n, t, a)).elementType = P), (e.lanes = l), e;
              case T:
                return ((e = Ou(19, n, t, a)).elementType = T), (e.lanes = l), e;
              case _:
                return zu(n, a, l, t);
              default:
                if ('object' === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case N:
                      i = 10;
                      break e;
                    case R:
                      i = 9;
                      break e;
                    case j:
                      i = 11;
                      break e;
                    case O:
                      i = 14;
                      break e;
                    case A:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ''));
            }
          return ((t = Ou(i, n, t, a)).elementType = e), (t.type = r), (t.lanes = l), t;
        }
        function Iu(e, t, n, r) {
          return ((e = Ou(7, e, r, t)).lanes = n), e;
        }
        function zu(e, t, n, r) {
          return (
            ((e = Ou(22, e, r, t)).elementType = _),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Du(e, t, n) {
          return ((e = Ou(6, e, null, t)).lanes = n), e;
        }
        function Fu(e, t, n) {
          return (
            ((t = Ou(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Mu(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bu(e, t, n, r, a, o, l, i, s) {
          return (
            (e = new Mu(e, t, n, i, s)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Ou(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Do(o),
            e
          );
        }
        function Wu(e) {
          if (!e) return Ra;
          e: {
            if (Ue((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Aa(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Aa(n)) return Ia(e, n, t);
          }
          return t;
        }
        function Uu(e, t, n, r, a, o, l, i, s) {
          return (
            ((e = Bu(n, r, !0, e, 0, o, 0, i, s)).context = Wu(null)),
            (n = e.current),
            ((o = Mo((r = eu()), (a = tu(n)))).callback = void 0 !== t && null !== t ? t : null),
            Bo(n, o, a),
            (e.current.lanes = a),
            gt(e, a, r),
            ru(e, r),
            e
          );
        }
        function Hu(e, t, n, r) {
          var a = t.current,
            o = eu(),
            l = tu(a);
          return (
            (n = Wu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Mo(o, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Bo(a, t, l)) && (nu(e, a, l, o), Wo(e, a, l)),
            l
          );
        }
        function Vu(e) {
          return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
        }
        function Ku(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function $u(e, t) {
          Ku(e, t), (e = e.alternate) && Ku(e, t);
        }
        Es = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Pa.current) bi = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (bi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Pi(t), ho();
                        break;
                      case 5:
                        Jo(t);
                        break;
                      case 1:
                        Aa(t.type) && za(t);
                        break;
                      case 4:
                        Go(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Na(Eo, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Na(el, 1 & el.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Di(e, t, n)
                            : (Na(el, 1 & el.current),
                              null !== (e = Vi(e, t, n)) ? e.sibling : null);
                        Na(el, 1 & el.current);
                        break;
                      case 19:
                        if (((r = 0 !== (n & t.childLanes)), 0 !== (128 & e.flags))) {
                          if (r) return Ui(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                          Na(el, el.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), ki(e, t, n);
                    }
                    return Vi(e, t, n);
                  })(e, t, n)
                );
              bi = 0 !== (131072 & e.flags);
            }
          else (bi = !1), ao && 0 !== (1048576 & t.flags) && Za(t, $a, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hi(e, t), (e = t.pendingProps);
              var a = Oa(t, ja.current);
              To(t, n), (a = vl(null, t, r, e, a, n));
              var l = gl();
              return (
                (t.flags |= 1),
                'object' === typeof a &&
                null !== a &&
                'function' === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Aa(r) ? ((l = !0), za(t)) : (l = !1),
                    (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
                    Do(t),
                    (a.updater = ai),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    si(t, r, e, n),
                    (t = ji(null, t, r, !0, l, n)))
                  : ((t.tag = 0), ao && l && eo(t), xi(null, t, a, n), (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hi(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ('function' === typeof e) return Au(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === j) return 11;
                        if (e === O) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ni(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ni(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ri(null, t, r, e, n);
                    break e;
                  case 11:
                    t = wi(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Si(null, t, r, ni(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ''));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ni(e, t, r, (a = t.elementType === r ? a : ni(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ri(e, t, r, (a = t.elementType === r ? a : ni(r, a)), n)
              );
            case 3:
              e: {
                if ((Pi(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (l = t.memoizedState).element),
                  Fo(e, t),
                  Ho(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), l.isDehydrated)) {
                  if (
                    ((l = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = l),
                    (t.memoizedState = l),
                    256 & t.flags)
                  ) {
                    t = Ti(e, t, r, n, (a = ui(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ti(e, t, r, n, (a = ui(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = ua(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = So(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === a)) {
                    t = Vi(e, t, n);
                    break e;
                  }
                  xi(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Jo(t),
                null === e && uo(t),
                (r = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a) ? (i = null) : null !== l && na(r, l) && (t.flags |= 32),
                Ci(e, t),
                xi(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && uo(t), null;
            case 13:
              return Di(e, t, n);
            case 4:
              return (
                Go(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = wo(t, null, r, n)) : xi(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                wi(e, t, r, (a = t.elementType === r ? a : ni(r, a)), n)
              );
            case 7:
              return xi(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xi(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (l = t.memoizedProps),
                  (i = a.value),
                  Na(Eo, r._currentValue),
                  (r._currentValue = i),
                  null !== l)
                )
                  if (ir(l.value, i)) {
                    if (l.children === a.children && !Pa.current) {
                      t = Vi(e, t, n);
                      break e;
                    }
                  } else
                    for (null !== (l = t.child) && (l.return = t); null !== l; ) {
                      var s = l.dependencies;
                      if (null !== s) {
                        i = l.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === l.tag) {
                              (u = Mo(-1, n & -n)).tag = 2;
                              var c = l.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d ? (u.next = u) : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (l.lanes |= n),
                              null !== (u = l.alternate) && (u.lanes |= n),
                              Po(l.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === l.tag) i = l.type === t.type ? null : l.child;
                      else if (18 === l.tag) {
                        if (null === (i = l.return)) throw Error(o(341));
                        (i.lanes |= n),
                          null !== (s = i.alternate) && (s.lanes |= n),
                          Po(i, n, t),
                          (i = l.sibling);
                      } else i = l.child;
                      if (null !== i) i.return = l;
                      else
                        for (i = l; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (l = i.sibling)) {
                            (l.return = i.return), (i = l);
                            break;
                          }
                          i = i.return;
                        }
                      l = i;
                    }
                xi(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                To(t, n),
                (r = r((a = Oo(a)))),
                (t.flags |= 1),
                xi(e, t, r, n),
                t.child
              );
            case 14:
              return (a = ni((r = t.type), t.pendingProps)), Si(e, t, r, (a = ni(r.type, a)), n);
            case 15:
              return Ei(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : ni(r, a)),
                Hi(e, t),
                (t.tag = 1),
                Aa(r) ? ((e = !0), za(t)) : (e = !1),
                To(t, n),
                li(t, r, a),
                si(t, r, a, n),
                ji(null, t, r, !0, e, n)
              );
            case 19:
              return Ui(e, t, n);
            case 22:
              return ki(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Qu =
          'function' === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Xu(e) {
          this._internalRoot = e;
        }
        function qu(e) {
          this._internalRoot = e;
        }
        function Gu(e) {
          return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
        }
        function Yu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
          );
        }
        function Ju() {}
        function Zu(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var l = o;
            if ('function' === typeof a) {
              var i = a;
              a = function () {
                var e = Vu(l);
                i.call(e);
              };
            }
            Hu(t, l, e, a);
          } else
            l = (function (e, t, n, r, a) {
              if (a) {
                if ('function' === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Vu(l);
                    o.call(e);
                  };
                }
                var l = Uu(t, r, e, 0, null, !1, 0, '', Ju);
                return (
                  (e._reactRootContainer = l),
                  (e[ha] = l.current),
                  Ur(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  l
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ('function' === typeof r) {
                var i = r;
                r = function () {
                  var e = Vu(s);
                  i.call(e);
                };
              }
              var s = Bu(e, 0, !1, null, 0, !1, 0, '', Ju);
              return (
                (e._reactRootContainer = s),
                (e[ha] = s.current),
                Ur(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  Hu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Vu(l);
        }
        (qu.prototype.render = Xu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Hu(e, t, null, null);
          }),
          (qu.prototype.unmount = Xu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  Hu(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (qu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = kt();
              e = { blockedOn: null, target: e, priority: t };
              for (var n = 0; n < _t.length && 0 !== t && t < _t[n].priority; n++);
              _t.splice(n, 0, e), 0 === n && Dt(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n), ru(t, Ye()), 0 === (6 & js) && ((Us = Ye() + 500), Ua()));
                }
                break;
              case 13:
                cu(function () {
                  var t = Io(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  $u(e, 1);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = Io(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              $u(e, 134217728);
            }
          }),
          (Et = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = Io(e, t);
              if (null !== n) nu(n, e, t, eu());
              $u(e, t);
            }
          }),
          (kt = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (Se = function (e, t, n) {
            switch (t) {
              case 'input':
                if ((J(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = wa(r);
                      if (!a) throw Error(o(90));
                      Q(r), J(r, a);
                    }
                  }
                }
                break;
              case 'textarea':
                oe(e, n);
                break;
              case 'select':
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (je = uu),
          (Pe = cu);
        var ec = { usingClientEntryPoint: !1, Events: [ba, xa, wa, Ne, Re, uu] },
          tc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: '18.3.1',
            rendererPackageName: 'react-dom',
          },
          nc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ke(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
          };
        if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!rc.isDisabled && rc.supportsFiber)
            try {
              (at = rc.inject(nc)), (ot = rc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (t.createPortal = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!Gu(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
              return {
                $$typeof: S,
                key: null == r ? null : '' + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Gu(e)) throw Error(o(299));
            var n = !1,
              r = '',
              a = Qu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Bu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Ur(8 === e.nodeType ? e.parentNode : e),
              new Xu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ('function' === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(',')), Error(o(268, e)));
            }
            return (e = null === (e = Ke(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Yu(t)) throw Error(o(200));
            return Zu(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gu(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              l = '',
              i = Qu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = Uu(t, null, e, 1, null != n ? n : null, a, 0, l, i)),
              (e[ha] = t.current),
              Ur(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new qu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Yu(t)) throw Error(o(200));
            return Zu(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Yu(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                Zu(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Yu(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return Zu(e, t, n, !1, r);
          }),
          (t.version = '18.3.1-next-f1338f8080-20240426');
      },
      391: (e, t, n) => {
        'use strict';
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        'use strict';
        !(function e() {
          if (
            'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      153: (e, t, n) => {
        'use strict';
        var r = n(43),
          a = Symbol.for('react.element'),
          o = Symbol.for('react.fragment'),
          l = Object.prototype.hasOwnProperty,
          i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            o = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = '' + n),
          void 0 !== t.key && (u = '' + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            l.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return { $$typeof: a, type: e, key: u, ref: c, props: o, _owner: i.current };
        }
        (t.Fragment = o), (t.jsx = u), (t.jsxs = u);
      },
      202: (e, t) => {
        'use strict';
        var n = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          a = Symbol.for('react.fragment'),
          o = Symbol.for('react.strict_mode'),
          l = Symbol.for('react.profiler'),
          i = Symbol.for('react.provider'),
          s = Symbol.for('react.context'),
          u = Symbol.for('react.forward_ref'),
          c = Symbol.for('react.suspense'),
          d = Symbol.for('react.memo'),
          f = Symbol.for('react.lazy'),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {};
        function g(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = v), (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = v), (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ('object' !== typeof e && 'function' !== typeof e && null != e)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
              );
            this.updater.enqueueSetState(this, e, t, 'setState');
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
          }),
          (y.prototype = g.prototype);
        var x = (b.prototype = new y());
        (x.constructor = b), m(x, g.prototype), (x.isPureReactComponent = !0);
        var w = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          E = { current: null },
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            o = {},
            l = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (l = '' + t.key), t))
              S.call(t, a) && !k.hasOwnProperty(a) && (o[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) o.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            o.children = u;
          }
          if (e && e.defaultProps) for (a in (s = e.defaultProps)) void 0 === o[a] && (o[a] = s[a]);
          return { $$typeof: n, type: e, key: l, ref: i, props: o, _owner: E.current };
        }
        function N(e) {
          return 'object' === typeof e && null !== e && e.$$typeof === n;
        }
        var R = /\/+/g;
        function j(e, t) {
          return 'object' === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { '=': '=0', ':': '=2' };
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })('' + e.key)
            : t.toString(36);
        }
        function P(e, t, a, o, l) {
          var i = typeof e;
          ('undefined' !== i && 'boolean' !== i) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (i) {
              case 'string':
              case 'number':
                s = !0;
                break;
              case 'object':
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (l = l((s = e))),
              (e = '' === o ? '.' + j(s, 0) : o),
              w(l)
                ? ((a = ''),
                  null != e && (a = e.replace(R, '$&/') + '/'),
                  P(l, t, a, '', function (e) {
                    return e;
                  }))
                : null != l &&
                  (N(l) &&
                    (l = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      l,
                      a +
                        (!l.key || (s && s.key === l.key)
                          ? ''
                          : ('' + l.key).replace(R, '$&/') + '/') +
                        e,
                    )),
                  t.push(l)),
              1
            );
          if (((s = 0), (o = '' === o ? '.' : o + ':'), w(e)))
            for (var u = 0; u < e.length; u++) {
              var c = o + j((i = e[u]), u);
              s += P(i, t, a, c, l);
            }
          else if (
            ((c = (function (e) {
              return null === e || 'object' !== typeof e
                ? null
                : 'function' === typeof (e = (p && e[p]) || e['@@iterator'])
                ? e
                : null;
            })(e)),
            'function' === typeof c)
          )
            for (e = c.call(e), u = 0; !(i = e.next()).done; )
              s += P((i = i.value), t, a, (c = o + j(i, u++)), l);
          else if ('object' === i)
            throw (
              ((t = String(e)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === t
                    ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                    : t) +
                  '). If you meant to render a collection of children, use an array instead.',
              ))
            );
          return s;
        }
        function T(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            P(e, r, '', '', function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function O(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var A = { current: null },
          _ = { transition: null },
          L = { ReactCurrentDispatcher: A, ReactCurrentBatchConfig: _, ReactCurrentOwner: E };
        function I() {
          throw Error('act(...) is not supported in production builds of React.');
        }
        (t.Children = {
          map: T,
          forEach: function (e, t, n) {
            T(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              T(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              T(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!N(e))
              throw Error('React.Children.only expected to receive a single React element child.');
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = l),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
          (t.act = I),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  e +
                  '.',
              );
            var a = m({}, e.props),
              o = e.key,
              l = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (i = E.current)),
                void 0 !== t.key && (o = '' + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                S.call(t, u) &&
                  !k.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return { $$typeof: n, type: e.type, key: o, ref: l, props: a, _owner: i };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = N),
          (t.lazy = function (e) {
            return { $$typeof: f, _payload: { _status: -1, _result: e }, _init: O };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = _.transition;
            _.transition = {};
            try {
              e();
            } finally {
              _.transition = t;
            }
          }),
          (t.unstable_act = I),
          (t.useCallback = function (e, t) {
            return A.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return A.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return A.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return A.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return A.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return A.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return A.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return A.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return A.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return A.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return A.current.useRef(e);
          }),
          (t.useState = function (e) {
            return A.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return A.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return A.current.useTransition();
          }),
          (t.version = '18.3.1');
      },
      43: (e, t, n) => {
        'use strict';
        e.exports = n(202);
      },
      579: (e, t, n) => {
        'use strict';
        e.exports = n(153);
      },
      234: (e, t) => {
        'use strict';
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
              var i = 2 * (r + 1) - 1,
                s = e[i],
                u = i + 1,
                c = e[u];
              if (0 > o(s, n))
                u < a && 0 > o(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[i] = n), (r = i));
              else {
                if (!(u < a && 0 > o(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if ('object' === typeof performance && 'function' === typeof performance.now) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var i = Date,
            s = i.now();
          t.unstable_now = function () {
            return i.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          g = 'function' === typeof setTimeout ? setTimeout : null,
          y = 'function' === typeof clearTimeout ? clearTimeout : null,
          b = 'undefined' !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((v = !1), x(e), !m))
            if (null !== r(u)) (m = !0), _(S);
            else {
              var t = r(c);
              null !== t && L(w, t.startTime - e);
            }
        }
        function S(e, n) {
          (m = !1), v && ((v = !1), y(N), (N = -1)), (h = !0);
          var o = p;
          try {
            for (x(n), f = r(u); null !== f && (!(f.expirationTime > n) || (e && !P())); ) {
              var l = f.callback;
              if ('function' === typeof l) {
                (f.callback = null), (p = f.priorityLevel);
                var i = l(f.expirationTime <= n);
                (n = t.unstable_now()),
                  'function' === typeof i ? (f.callback = i) : f === r(u) && a(u),
                  x(n);
              } else a(u);
              f = r(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(c);
              null !== d && L(w, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = o), (h = !1);
          }
        }
        'undefined' !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var E,
          k = !1,
          C = null,
          N = -1,
          R = 5,
          j = -1;
        function P() {
          return !(t.unstable_now() - j < R);
        }
        function T() {
          if (null !== C) {
            var e = t.unstable_now();
            j = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? E() : ((k = !1), (C = null));
            }
          } else k = !1;
        }
        if ('function' === typeof b)
          E = function () {
            b(T);
          };
        else if ('undefined' !== typeof MessageChannel) {
          var O = new MessageChannel(),
            A = O.port2;
          (O.port1.onmessage = T),
            (E = function () {
              A.postMessage(null);
            });
        } else
          E = function () {
            g(T, 0);
          };
        function _(e) {
          (C = e), k || ((k = !0), E());
        }
        function L(e, n) {
          N = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), _(S));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (R = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var l = t.unstable_now();
            switch (
              ('object' === typeof o && null !== o
                ? (o = 'number' === typeof (o = o.delay) && 0 < o ? l + o : l)
                : (o = l),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (i = o + i),
                sortIndex: -1,
              }),
              o > l
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(u) && e === r(c) && (v ? (y(N), (N = -1)) : (v = !0), L(w, o - l)))
                : ((e.sortIndex = i), n(u, e), m || h || ((m = !0), _(S))),
              e
            );
          }),
          (t.unstable_shouldYield = P),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        'use strict';
        e.exports = n(234);
      },
      324: (e) => {
        e.exports = function (e, t, n, r) {
          var a = n ? n.call(r, e, t) : void 0;
          if (void 0 !== a) return !!a;
          if (e === t) return !0;
          if ('object' !== typeof e || !e || 'object' !== typeof t || !t) return !1;
          var o = Object.keys(e),
            l = Object.keys(t);
          if (o.length !== l.length) return !1;
          for (var i = Object.prototype.hasOwnProperty.bind(t), s = 0; s < o.length; s++) {
            var u = o[s];
            if (!i(u)) return !1;
            var c = e[u],
              d = t[u];
            if (!1 === (a = n ? n.call(r, c, d, u) : void 0) || (void 0 === a && c !== d))
              return !1;
          }
          return !0;
        };
      },
      440: (e) => {
        'use strict';
        var t = function () {};
        e.exports = t;
      },
      139: (e, t) => {
        var n;
        !(function () {
          'use strict';
          var r = {}.hasOwnProperty;
          function a() {
            for (var e = '', t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              n && (e = l(e, o(n)));
            }
            return e;
          }
          function o(e) {
            if ('string' === typeof e || 'number' === typeof e) return e;
            if ('object' !== typeof e) return '';
            if (Array.isArray(e)) return a.apply(null, e);
            if (
              e.toString !== Object.prototype.toString &&
              !e.toString.toString().includes('[native code]')
            )
              return e.toString();
            var t = '';
            for (var n in e) r.call(e, n) && e[n] && (t = l(t, n));
            return t;
          }
          function l(e, t) {
            return t ? (e ? e + ' ' + t : e + t) : e;
          }
          e.exports
            ? ((a.default = a), (e.exports = a))
            : void 0 ===
                (n = function () {
                  return a;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (() => {
      var e,
        t = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__;
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ('object' === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && 'function' === typeof r.then) return r;
        }
        var o = Object.create(null);
        n.r(o);
        var l = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var i = 2 & a && r; 'object' == typeof i && !~e.indexOf(i); i = t(i))
          Object.getOwnPropertyNames(i).forEach((e) => (l[e] = () => r[e]));
        return (l.default = () => r), n.d(o, l), o;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) => Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => 'static/js/' + e + '.2a82e7ac.chunk.js'),
    (n.miniCssF = (e) => {}),
    (n.g = (function () {
      if ('object' === typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' === typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = 'react-app:';
      n.l = (r, a, o, l) => {
        if (e[r]) e[r].push(a);
        else {
          var i, s;
          if (void 0 !== o)
            for (var u = document.getElementsByTagName('script'), c = 0; c < u.length; c++) {
              var d = u[c];
              if (d.getAttribute('src') == r || d.getAttribute('data-webpack') == t + o) {
                i = d;
                break;
              }
            }
          i ||
            ((s = !0),
            ((i = document.createElement('script')).charset = 'utf-8'),
            (i.timeout = 120),
            n.nc && i.setAttribute('nonce', n.nc),
            i.setAttribute('data-webpack', t + o),
            (i.src = r)),
            (e[r] = [a]);
          var f = (t, n) => {
              (i.onerror = i.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                i.parentNode && i.parentNode.removeChild(i),
                a && a.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            p = setTimeout(f.bind(null, void 0, { type: 'timeout', target: i }), 12e4);
          (i.onerror = f.bind(null, i.onerror)),
            (i.onload = f.bind(null, i.onload)),
            s && document.head.appendChild(i);
        }
      };
    })(),
    (n.r = (e) => {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.p = '/'),
    (() => {
      var e = { 792: 0 };
      n.f.j = (t, r) => {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var o = new Promise((n, r) => (a = e[t] = [n, r]));
            r.push((a[2] = o));
            var l = n.p + n.u(t),
              i = new Error();
            n.l(
              l,
              (r) => {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ('load' === r.type ? 'missing' : r.type),
                    l = r && r.target && r.target.src;
                  (i.message = 'Loading chunk ' + t + ' failed.\n(' + o + ': ' + l + ')'),
                    (i.name = 'ChunkLoadError'),
                    (i.type = o),
                    (i.request = l),
                    a[1](i);
                }
              },
              'chunk-' + t,
              t,
            );
          }
      };
      var t = (t, r) => {
          var a,
            o,
            l = r[0],
            i = r[1],
            s = r[2],
            u = 0;
          if (l.some((t) => 0 !== e[t])) {
            for (a in i) n.o(i, a) && (n.m[a] = i[a]);
            if (s) s(n);
          }
          for (t && t(r); u < l.length; u++) (o = l[u]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (self.webpackChunkreact_app = self.webpackChunkreact_app || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (n.nc = void 0),
    (() => {
      'use strict';
      var e = n(43),
        t = n.t(e, 2),
        r = n(391),
        a = n(139),
        o = n.n(a);
      const l = function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return null != e ? String(e) : t || null;
        },
        i = e.createContext(null);
      function s() {
        return (
          (s = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          s.apply(null, arguments)
        );
      }
      function u(e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r)) {
            if (t.includes(r)) continue;
            n[r] = e[r];
          }
        return n;
      }
      n(740);
      function c(e) {
        return 'default' + e.charAt(0).toUpperCase() + e.substr(1);
      }
      function d(e) {
        var t = (function (e, t) {
          if ('object' !== typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || 'default');
            if ('object' !== typeof r) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        })(e, 'string');
        return 'symbol' === typeof t ? t : String(t);
      }
      function f(t, n) {
        return Object.keys(n).reduce(function (r, a) {
          var o,
            l = r,
            i = l[c(a)],
            f = l[a],
            p = u(l, [c(a), a].map(d)),
            h = n[a],
            m = (function (t, n, r) {
              var a = (0, e.useRef)(void 0 !== t),
                o = (0, e.useState)(n),
                l = o[0],
                i = o[1],
                s = void 0 !== t,
                u = a.current;
              return (
                (a.current = s),
                !s && u && l !== n && i(n),
                [
                  s ? t : l,
                  (0, e.useCallback)(
                    function (e) {
                      for (
                        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
                        a < t;
                        a++
                      )
                        n[a - 1] = arguments[a];
                      r && r.apply(void 0, [e].concat(n)), i(e);
                    },
                    [r],
                  ),
                ]
              );
            })(f, i, t[h]),
            v = m[0],
            g = m[1];
          return s({}, p, (((o = {})[a] = v), (o[h] = g), o));
        }, t);
      }
      function p() {
        var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
        null !== e && void 0 !== e && this.setState(e);
      }
      function h(e) {
        this.setState(
          function (t) {
            var n = this.constructor.getDerivedStateFromProps(e, t);
            return null !== n && void 0 !== n ? n : null;
          }.bind(this),
        );
      }
      function m(e, t) {
        try {
          var n = this.props,
            r = this.state;
          (this.props = e),
            (this.state = t),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r));
        } finally {
          (this.props = n), (this.state = r);
        }
      }
      (p.__suppressDeprecationWarning = !0),
        (h.__suppressDeprecationWarning = !0),
        (m.__suppressDeprecationWarning = !0);
      var v = n(579);
      const g = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        y = 'xs',
        b = e.createContext({ prefixes: {}, breakpoints: g, minBreakpoint: y }),
        { Consumer: x, Provider: w } = b;
      function S(t, n) {
        const { prefixes: r } = (0, e.useContext)(b);
        return t || r[n] || n;
      }
      function E() {
        const { breakpoints: t } = (0, e.useContext)(b);
        return t;
      }
      function k() {
        const { minBreakpoint: t } = (0, e.useContext)(b);
        return t;
      }
      function C() {
        const { dir: t } = (0, e.useContext)(b);
        return 'rtl' === t;
      }
      const N = e.forwardRef((e, t) => {
        let { bsPrefix: n, className: r, as: a, ...l } = e;
        n = S(n, 'navbar-brand');
        const i = a || (l.href ? 'a' : 'span');
        return (0, v.jsx)(i, { ...l, ref: t, className: o()(r, n) });
      });
      N.displayName = 'NavbarBrand';
      const R = N;
      function j(e) {
        return (e && e.ownerDocument) || document;
      }
      function P(e, t) {
        return (function (e) {
          var t = j(e);
          return (t && t.defaultView) || window;
        })(e).getComputedStyle(e, t);
      }
      var T = /([A-Z])/g;
      var O = /^ms-/;
      function A(e) {
        return (function (e) {
          return e.replace(T, '-$1').toLowerCase();
        })(e).replace(O, '-ms-');
      }
      var _ = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      const L = function (e, t) {
        var n = '',
          r = '';
        if ('string' === typeof t)
          return e.style.getPropertyValue(A(t)) || P(e).getPropertyValue(A(t));
        Object.keys(t).forEach(function (a) {
          var o = t[a];
          o || 0 === o
            ? !(function (e) {
                return !(!e || !_.test(e));
              })(a)
              ? (n += A(a) + ': ' + o + ';')
              : (r += a + '(' + o + ') ')
            : e.style.removeProperty(A(a));
        }),
          r && (n += 'transform: ' + r + ';'),
          (e.style.cssText += ';' + n);
      };
      function I(e, t) {
        return (
          (I = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          I(e, t)
        );
      }
      var z = n(950),
        D = n.t(z, 2);
      const F = !1,
        M = e.createContext(null);
      var B = 'unmounted',
        W = 'exited',
        U = 'entering',
        H = 'entered',
        V = 'exiting',
        K = (function (t) {
          function n(e, n) {
            var r;
            r = t.call(this, e, n) || this;
            var a,
              o = n && !n.isMounting ? e.enter : e.appear;
            return (
              (r.appearStatus = null),
              e.in
                ? o
                  ? ((a = W), (r.appearStatus = U))
                  : (a = H)
                : (a = e.unmountOnExit || e.mountOnEnter ? B : W),
              (r.state = { status: a }),
              (r.nextCallback = null),
              r
            );
          }
          !(function (e, t) {
            (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), I(e, t);
          })(n, t),
            (n.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === B ? { status: W } : null;
            });
          var r = n.prototype;
          return (
            (r.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (r.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in ? n !== U && n !== H && (t = U) : (n !== U && n !== H) || (t = V);
              }
              this.updateStatus(!1, t);
            }),
            (r.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (r.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                  'number' !== typeof r &&
                  ((e = r.exit), (t = r.enter), (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (r.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t))
                if ((this.cancelNextCallback(), t === U)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var n = this.props.nodeRef ? this.props.nodeRef.current : z.findDOMNode(this);
                    n &&
                      (function (e) {
                        e.scrollTop;
                      })(n);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit && this.state.status === W && this.setState({ status: B });
            }),
            (r.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                a = this.props.nodeRef ? [r] : [z.findDOMNode(this), r],
                o = a[0],
                l = a[1],
                i = this.getTimeouts(),
                s = r ? i.appear : i.enter;
              (!e && !n) || F
                ? this.safeSetState({ status: H }, function () {
                    t.props.onEntered(o);
                  })
                : (this.props.onEnter(o, l),
                  this.safeSetState({ status: U }, function () {
                    t.props.onEntering(o, l),
                      t.onTransitionEnd(s, function () {
                        t.safeSetState({ status: H }, function () {
                          t.props.onEntered(o, l);
                        });
                      });
                  }));
            }),
            (r.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : z.findDOMNode(this);
              t && !F
                ? (this.props.onExit(r),
                  this.safeSetState({ status: V }, function () {
                    e.props.onExiting(r),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: W }, function () {
                          e.props.onExited(r);
                        });
                      });
                  }))
                : this.safeSetState({ status: W }, function () {
                    e.props.onExited(r);
                  });
            }),
            (r.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (r.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (r.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (r.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef ? this.props.nodeRef.current : z.findDOMNode(this),
                r = null == e && !this.props.addEndListener;
              if (n && !r) {
                if (this.props.addEndListener) {
                  var a = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                    o = a[0],
                    l = a[1];
                  this.props.addEndListener(o, l);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (r.render = function () {
              var t = this.state.status;
              if (t === B) return null;
              var n = this.props,
                r = n.children,
                a =
                  (n.in,
                  n.mountOnEnter,
                  n.unmountOnExit,
                  n.appear,
                  n.enter,
                  n.exit,
                  n.timeout,
                  n.addEndListener,
                  n.onEnter,
                  n.onEntering,
                  n.onEntered,
                  n.onExit,
                  n.onExiting,
                  n.onExited,
                  n.nodeRef,
                  u(n, [
                    'children',
                    'in',
                    'mountOnEnter',
                    'unmountOnExit',
                    'appear',
                    'enter',
                    'exit',
                    'timeout',
                    'addEndListener',
                    'onEnter',
                    'onEntering',
                    'onEntered',
                    'onExit',
                    'onExiting',
                    'onExited',
                    'nodeRef',
                  ]));
              return e.createElement(
                M.Provider,
                { value: null },
                'function' === typeof r ? r(t, a) : e.cloneElement(e.Children.only(r), a),
              );
            }),
            n
          );
        })(e.Component);
      function $() {}
      (K.contextType = M),
        (K.propTypes = {}),
        (K.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: $,
          onEntering: $,
          onEntered: $,
          onExit: $,
          onExiting: $,
          onExited: $,
        }),
        (K.UNMOUNTED = B),
        (K.EXITED = W),
        (K.ENTERING = U),
        (K.ENTERED = H),
        (K.EXITING = V);
      const Q = K,
        X = !('undefined' === typeof window || !window.document || !window.document.createElement);
      var q = !1,
        G = !1;
      try {
        var Y = {
          get passive() {
            return (q = !0);
          },
          get once() {
            return (G = q = !0);
          },
        };
        X && (window.addEventListener('test', Y, Y), window.removeEventListener('test', Y, !0));
      } catch (pu) {}
      const J = function (e, t, n, r) {
        if (r && 'boolean' !== typeof r && !G) {
          var a = r.once,
            o = r.capture,
            l = n;
          !G &&
            a &&
            ((l =
              n.__once ||
              function e(r) {
                this.removeEventListener(t, e, o), n.call(this, r);
              }),
            (n.__once = l)),
            e.addEventListener(t, l, q ? r : o);
        }
        e.addEventListener(t, n, r);
      };
      const Z = function (e, t, n, r) {
        var a = r && 'boolean' !== typeof r ? r.capture : r;
        e.removeEventListener(t, n, a), n.__once && e.removeEventListener(t, n.__once, a);
      };
      const ee = function (e, t, n, r) {
        return (
          J(e, t, n, r),
          function () {
            Z(e, t, n, r);
          }
        );
      };
      function te(e, t, n) {
        void 0 === n && (n = 5);
        var r = !1,
          a = setTimeout(function () {
            r ||
              (function (e, t, n, r) {
                if ((void 0 === n && (n = !1), void 0 === r && (r = !0), e)) {
                  var a = document.createEvent('HTMLEvents');
                  a.initEvent(t, n, r), e.dispatchEvent(a);
                }
              })(e, 'transitionend', !0);
          }, t + n),
          o = ee(
            e,
            'transitionend',
            function () {
              r = !0;
            },
            { once: !0 },
          );
        return function () {
          clearTimeout(a), o();
        };
      }
      function ne(e, t, n, r) {
        null == n &&
          (n =
            (function (e) {
              var t = L(e, 'transitionDuration') || '',
                n = -1 === t.indexOf('ms') ? 1e3 : 1;
              return parseFloat(t) * n;
            })(e) || 0);
        var a = te(e, n, r),
          o = ee(e, 'transitionend', t);
        return function () {
          a(), o();
        };
      }
      function re(e, t) {
        const n = L(e, t) || '',
          r = -1 === n.indexOf('ms') ? 1e3 : 1;
        return parseFloat(n) * r;
      }
      function ae(e, t) {
        const n = re(e, 'transitionDuration'),
          r = re(e, 'transitionDelay'),
          a = ne(
            e,
            (n) => {
              n.target === e && (a(), t(n));
            },
            n + r,
          );
      }
      const oe = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return t
          .filter((e) => null != e)
          .reduce((e, t) => {
            if ('function' !== typeof t)
              throw new Error(
                'Invalid Argument Type, must only provide functions, undefined, or null.',
              );
            return null === e
              ? t
              : function () {
                  for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
                    r[a] = arguments[a];
                  e.apply(this, r), t.apply(this, r);
                };
          }, null);
      };
      function le(e) {
        e.offsetHeight;
      }
      const ie = (e) =>
        e && 'function' !== typeof e
          ? (t) => {
              e.current = t;
            }
          : e;
      const se = function (t, n) {
        return (0, e.useMemo)(
          () =>
            (function (e, t) {
              const n = ie(e),
                r = ie(t);
              return (e) => {
                n && n(e), r && r(e);
              };
            })(t, n),
          [t, n],
        );
      };
      const ue = e.forwardRef((t, n) => {
          let {
            onEnter: r,
            onEntering: a,
            onEntered: o,
            onExit: l,
            onExiting: i,
            onExited: s,
            addEndListener: u,
            children: c,
            childRef: d,
            ...f
          } = t;
          const p = (0, e.useRef)(null),
            h = se(p, d),
            m = (e) => {
              var t;
              h((t = e) && 'setState' in t ? z.findDOMNode(t) : null != t ? t : null);
            },
            g = (e) => (t) => {
              e && p.current && e(p.current, t);
            },
            y = (0, e.useCallback)(g(r), [r]),
            b = (0, e.useCallback)(g(a), [a]),
            x = (0, e.useCallback)(g(o), [o]),
            w = (0, e.useCallback)(g(l), [l]),
            S = (0, e.useCallback)(g(i), [i]),
            E = (0, e.useCallback)(g(s), [s]),
            k = (0, e.useCallback)(g(u), [u]);
          return (0, v.jsx)(Q, {
            ref: n,
            ...f,
            onEnter: y,
            onEntered: x,
            onEntering: b,
            onExit: w,
            onExited: E,
            onExiting: S,
            addEndListener: k,
            nodeRef: p,
            children:
              'function' === typeof c
                ? (e, t) => c(e, { ...t, ref: m })
                : e.cloneElement(c, { ref: m }),
          });
        }),
        ce = { height: ['marginTop', 'marginBottom'], width: ['marginLeft', 'marginRight'] };
      function de(e, t) {
        const n = t[`offset${e[0].toUpperCase()}${e.slice(1)}`],
          r = ce[e];
        return n + parseInt(L(t, r[0]), 10) + parseInt(L(t, r[1]), 10);
      }
      const fe = { [W]: 'collapse', [V]: 'collapsing', [U]: 'collapsing', [H]: 'collapse show' },
        pe = e.forwardRef((t, n) => {
          let {
            onEnter: r,
            onEntering: a,
            onEntered: l,
            onExit: i,
            onExiting: s,
            className: u,
            children: c,
            dimension: d = 'height',
            in: f = !1,
            timeout: p = 300,
            mountOnEnter: h = !1,
            unmountOnExit: m = !1,
            appear: g = !1,
            getDimensionValue: y = de,
            ...b
          } = t;
          const x = 'function' === typeof d ? d() : d,
            w = (0, e.useMemo)(
              () =>
                oe((e) => {
                  e.style[x] = '0';
                }, r),
              [x, r],
            ),
            S = (0, e.useMemo)(
              () =>
                oe((e) => {
                  const t = `scroll${x[0].toUpperCase()}${x.slice(1)}`;
                  e.style[x] = `${e[t]}px`;
                }, a),
              [x, a],
            ),
            E = (0, e.useMemo)(
              () =>
                oe((e) => {
                  e.style[x] = null;
                }, l),
              [x, l],
            ),
            k = (0, e.useMemo)(
              () =>
                oe((e) => {
                  (e.style[x] = `${y(x, e)}px`), le(e);
                }, i),
              [i, y, x],
            ),
            C = (0, e.useMemo)(
              () =>
                oe((e) => {
                  e.style[x] = null;
                }, s),
              [x, s],
            );
          return (0, v.jsx)(ue, {
            ref: n,
            addEndListener: ae,
            ...b,
            'aria-expanded': b.role ? f : null,
            onEnter: w,
            onEntering: S,
            onEntered: E,
            onExit: k,
            onExiting: C,
            childRef: c.ref,
            in: f,
            timeout: p,
            mountOnEnter: h,
            unmountOnExit: m,
            appear: g,
            children: (t, n) =>
              e.cloneElement(c, {
                ...n,
                className: o()(u, c.props.className, fe[t], 'width' === x && 'collapse-horizontal'),
              }),
          });
        }),
        he = e.createContext(null);
      he.displayName = 'NavbarContext';
      const me = he,
        ve = e.forwardRef((t, n) => {
          let { children: r, bsPrefix: a, ...o } = t;
          a = S(a, 'navbar-collapse');
          const l = (0, e.useContext)(me);
          return (0, v.jsx)(pe, {
            in: !(!l || !l.expanded),
            ...o,
            children: (0, v.jsx)('div', { ref: n, className: a, children: r }),
          });
        });
      ve.displayName = 'NavbarCollapse';
      const ge = ve;
      const ye = function (t) {
        const n = (0, e.useRef)(t);
        return (
          (0, e.useEffect)(() => {
            n.current = t;
          }, [t]),
          n
        );
      };
      function be(t) {
        const n = ye(t);
        return (0, e.useCallback)(
          function () {
            return n.current && n.current(...arguments);
          },
          [n],
        );
      }
      const xe = e.forwardRef((t, n) => {
        let {
          bsPrefix: r,
          className: a,
          children: l,
          label: i = 'Toggle navigation',
          as: s = 'button',
          onClick: u,
          ...c
        } = t;
        r = S(r, 'navbar-toggler');
        const { onToggle: d, expanded: f } = (0, e.useContext)(me) || {},
          p = be((e) => {
            u && u(e), d && d();
          });
        return (
          'button' === s && (c.type = 'button'),
          (0, v.jsx)(s, {
            ...c,
            ref: n,
            onClick: p,
            'aria-label': i,
            className: o()(a, r, !f && 'collapsed'),
            children: l || (0, v.jsx)('span', { className: `${r}-icon` }),
          })
        );
      });
      xe.displayName = 'NavbarToggle';
      const we = xe,
        Se = 'undefined' !== typeof n.g && n.g.navigator && 'ReactNative' === n.g.navigator.product,
        Ee = 'undefined' !== typeof document || Se ? e.useLayoutEffect : e.useEffect,
        ke = new WeakMap(),
        Ce = (e, t) => {
          if (!e || !t) return;
          const n = ke.get(t) || new Map();
          ke.set(t, n);
          let r = n.get(e);
          return r || ((r = t.matchMedia(e)), (r.refCount = 0), n.set(r.media, r)), r;
        };
      function Ne(t) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : 'undefined' === typeof window
            ? void 0
            : window;
        const r = Ce(t, n),
          [a, o] = (0, e.useState)(() => !!r && r.matches);
        return (
          Ee(() => {
            let e = Ce(t, n);
            if (!e) return o(!1);
            let r = ke.get(n);
            const a = () => {
              o(e.matches);
            };
            return (
              e.refCount++,
              e.addListener(a),
              a(),
              () => {
                e.removeListener(a),
                  e.refCount--,
                  e.refCount <= 0 && (null == r || r.delete(e.media)),
                  (e = void 0);
              }
            );
          }, [t]),
          a
        );
      }
      const Re = (function (t) {
          const n = Object.keys(t);
          function r(e, t) {
            return e === t ? t : e ? `${e} and ${t}` : t;
          }
          function a(e) {
            const r = (function (e) {
              return n[Math.min(n.indexOf(e) + 1, n.length - 1)];
            })(e);
            let a = t[r];
            return (
              (a = 'number' === typeof a ? a - 0.2 + 'px' : `calc(${a} - 0.2px)`),
              `(max-width: ${a})`
            );
          }
          return function (n, o, l) {
            let i;
            return (
              'object' === typeof n
                ? ((i = n), (l = o), (o = !0))
                : ((o = o || !0), (i = { [n]: o })),
              Ne(
                (0, e.useMemo)(
                  () =>
                    Object.entries(i).reduce((e, n) => {
                      let [o, l] = n;
                      return (
                        ('up' !== l && !0 !== l) ||
                          (e = r(
                            e,
                            (function (e) {
                              let n = t[e];
                              return 'number' === typeof n && (n = `${n}px`), `(min-width: ${n})`;
                            })(o),
                          )),
                        ('down' !== l && !0 !== l) || (e = r(e, a(o))),
                        e
                      );
                    }, ''),
                  [JSON.stringify(i)],
                ),
                l,
              )
            );
          };
        })({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 }),
        je = Re;
      function Pe(e) {
        void 0 === e && (e = j());
        try {
          var t = e.activeElement;
          return t && t.nodeName ? t : null;
        } catch (pu) {
          return e.body;
        }
      }
      function Te(e, t) {
        return e.contains
          ? e.contains(t)
          : e.compareDocumentPosition
          ? e === t || !!(16 & e.compareDocumentPosition(t))
          : void 0;
      }
      function Oe() {
        const t = (0, e.useRef)(!0),
          n = (0, e.useRef)(() => t.current);
        return (
          (0, e.useEffect)(
            () => (
              (t.current = !0),
              () => {
                t.current = !1;
              }
            ),
            [],
          ),
          n.current
        );
      }
      function Ae(t) {
        const n = (function (t) {
          const n = (0, e.useRef)(t);
          return (n.current = t), n;
        })(t);
        (0, e.useEffect)(() => () => n.current(), []);
      }
      function _e(e) {
        return `data-rr-ui-${e}`;
      }
      const Le = _e('modal-open');
      const Ie = class {
          constructor() {
            let {
              ownerDocument: e,
              handleContainerOverflow: t = !0,
              isRTL: n = !1,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (this.handleContainerOverflow = t),
              (this.isRTL = n),
              (this.modals = []),
              (this.ownerDocument = e);
          }
          getScrollbarWidth() {
            return (function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
              const t = e.defaultView;
              return Math.abs(t.innerWidth - e.documentElement.clientWidth);
            })(this.ownerDocument);
          }
          getElement() {
            return (this.ownerDocument || document).body;
          }
          setModalAttributes(e) {}
          removeModalAttributes(e) {}
          setContainerStyle(e) {
            const t = { overflow: 'hidden' },
              n = this.isRTL ? 'paddingLeft' : 'paddingRight',
              r = this.getElement();
            (e.style = { overflow: r.style.overflow, [n]: r.style[n] }),
              e.scrollBarWidth && (t[n] = `${parseInt(L(r, n) || '0', 10) + e.scrollBarWidth}px`),
              r.setAttribute(Le, ''),
              L(r, t);
          }
          reset() {
            [...this.modals].forEach((e) => this.remove(e));
          }
          removeContainerStyle(e) {
            const t = this.getElement();
            t.removeAttribute(Le), Object.assign(t.style, e.style);
          }
          add(e) {
            let t = this.modals.indexOf(e);
            return -1 !== t
              ? t
              : ((t = this.modals.length),
                this.modals.push(e),
                this.setModalAttributes(e),
                0 !== t ||
                  ((this.state = { scrollBarWidth: this.getScrollbarWidth(), style: {} }),
                  this.handleContainerOverflow && this.setContainerStyle(this.state)),
                t);
          }
          remove(e) {
            const t = this.modals.indexOf(e);
            -1 !== t &&
              (this.modals.splice(t, 1),
              !this.modals.length &&
                this.handleContainerOverflow &&
                this.removeContainerStyle(this.state),
              this.removeModalAttributes(e));
          }
          isTopModal(e) {
            return !!this.modals.length && this.modals[this.modals.length - 1] === e;
          }
        },
        ze = (0, e.createContext)(X ? window : void 0);
      ze.Provider;
      function De() {
        return (0, e.useContext)(ze);
      }
      const Fe = (e, t) =>
        X
          ? null == e
            ? (t || j()).body
            : ('function' === typeof e && (e = e()),
              e && 'current' in e && (e = e.current),
              e && ('nodeType' in e || e.getBoundingClientRect) ? e : null)
          : null;
      const Me = function (t) {
        let { children: n, in: r, onExited: a, mountOnEnter: o, unmountOnExit: l } = t;
        const i = (0, e.useRef)(null),
          s = (0, e.useRef)(r),
          u = be(a);
        (0, e.useEffect)(() => {
          r ? (s.current = !0) : u(i.current);
        }, [r, u]);
        const c = se(i, n.ref),
          d = (0, e.cloneElement)(n, { ref: c });
        return r ? d : l || (!s.current && o) ? null : d;
      };
      function Be() {
        const t = e.version.split('.');
        return { major: +t[0], minor: +t[1], patch: +t[2] };
      }
      const We = [
        'onEnter',
        'onEntering',
        'onEntered',
        'onExit',
        'onExiting',
        'onExited',
        'addEndListener',
        'children',
      ];
      const Ue = ['component'];
      const He = e.forwardRef((t, n) => {
        let { component: r } = t;
        const a = (function (t) {
          let {
              onEnter: n,
              onEntering: r,
              onEntered: a,
              onExit: o,
              onExiting: l,
              onExited: i,
              addEndListener: s,
              children: u,
            } = t,
            c = (function (e, t) {
              if (null == e) return {};
              var n = {};
              for (var r in e)
                if ({}.hasOwnProperty.call(e, r)) {
                  if (t.indexOf(r) >= 0) continue;
                  n[r] = e[r];
                }
              return n;
            })(t, We);
          const { major: d } = Be(),
            f = d >= 19 ? u.props.ref : u.ref,
            p = (0, e.useRef)(null),
            h = se(p, 'function' === typeof u ? null : f),
            m = (e) => (t) => {
              e && p.current && e(p.current, t);
            },
            v = (0, e.useCallback)(m(n), [n]),
            g = (0, e.useCallback)(m(r), [r]),
            y = (0, e.useCallback)(m(a), [a]),
            b = (0, e.useCallback)(m(o), [o]),
            x = (0, e.useCallback)(m(l), [l]),
            w = (0, e.useCallback)(m(i), [i]),
            S = (0, e.useCallback)(m(s), [s]);
          return Object.assign(
            {},
            c,
            { nodeRef: p },
            n && { onEnter: v },
            r && { onEntering: g },
            a && { onEntered: y },
            o && { onExit: b },
            l && { onExiting: x },
            i && { onExited: w },
            s && { addEndListener: S },
            {
              children:
                'function' === typeof u
                  ? (e, t) => u(e, Object.assign({}, t, { ref: h }))
                  : (0, e.cloneElement)(u, { ref: h }),
            },
          );
        })(
          (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (t.indexOf(r) >= 0) continue;
                n[r] = e[r];
              }
            return n;
          })(t, Ue),
        );
        return (0, v.jsx)(r, Object.assign({ ref: n }, a));
      });
      function Ve(t) {
        let { children: n, in: r, onExited: a, onEntered: o, transition: l } = t;
        const [i, s] = (0, e.useState)(!r);
        r && i && s(!1);
        const u = (function (t) {
            let { in: n, onTransition: r } = t;
            const a = (0, e.useRef)(null),
              o = (0, e.useRef)(!0),
              l = be(r);
            return (
              Ee(() => {
                if (!a.current) return;
                let e = !1;
                return (
                  l({ in: n, element: a.current, initial: o.current, isStale: () => e }),
                  () => {
                    e = !0;
                  }
                );
              }, [n, l]),
              Ee(
                () => (
                  (o.current = !1),
                  () => {
                    o.current = !0;
                  }
                ),
                [],
              ),
              a
            );
          })({
            in: !!r,
            onTransition: (e) => {
              Promise.resolve(l(e)).then(
                () => {
                  e.isStale() ||
                    (e.in
                      ? null == o || o(e.element, e.initial)
                      : (s(!0), null == a || a(e.element)));
                },
                (t) => {
                  throw (e.in || s(!0), t);
                },
              );
            },
          }),
          c = se(u, n.ref);
        return i && !r ? null : (0, e.cloneElement)(n, { ref: c });
      }
      function Ke(e, t, n) {
        return e
          ? (0, v.jsx)(He, Object.assign({}, n, { component: e }))
          : t
          ? (0, v.jsx)(Ve, Object.assign({}, n, { transition: t }))
          : (0, v.jsx)(Me, Object.assign({}, n));
      }
      const $e = [
        'show',
        'role',
        'className',
        'style',
        'children',
        'backdrop',
        'keyboard',
        'onBackdropClick',
        'onEscapeKeyDown',
        'transition',
        'runTransition',
        'backdropTransition',
        'runBackdropTransition',
        'autoFocus',
        'enforceFocus',
        'restoreFocus',
        'restoreFocusOptions',
        'renderDialog',
        'renderBackdrop',
        'manager',
        'container',
        'onShow',
        'onHide',
        'onExit',
        'onExited',
        'onExiting',
        'onEnter',
        'onEntering',
        'onEntered',
      ];
      let Qe;
      function Xe(t) {
        const n = De(),
          r =
            t ||
            (function (e) {
              return Qe || (Qe = new Ie({ ownerDocument: null == e ? void 0 : e.document })), Qe;
            })(n),
          a = (0, e.useRef)({ dialog: null, backdrop: null });
        return Object.assign(a.current, {
          add: () => r.add(a.current),
          remove: () => r.remove(a.current),
          isTopModal: () => r.isTopModal(a.current),
          setDialogRef: (0, e.useCallback)((e) => {
            a.current.dialog = e;
          }, []),
          setBackdropRef: (0, e.useCallback)((e) => {
            a.current.backdrop = e;
          }, []),
        });
      }
      const qe = (0, e.forwardRef)((t, n) => {
        let {
            show: r = !1,
            role: a = 'dialog',
            className: o,
            style: l,
            children: i,
            backdrop: s = !0,
            keyboard: u = !0,
            onBackdropClick: c,
            onEscapeKeyDown: d,
            transition: f,
            runTransition: p,
            backdropTransition: h,
            runBackdropTransition: m,
            autoFocus: g = !0,
            enforceFocus: y = !0,
            restoreFocus: b = !0,
            restoreFocusOptions: x,
            renderDialog: w,
            renderBackdrop: S = (e) => (0, v.jsx)('div', Object.assign({}, e)),
            manager: E,
            container: k,
            onShow: C,
            onHide: N = () => {},
            onExit: R,
            onExited: j,
            onExiting: P,
            onEnter: T,
            onEntering: O,
            onEntered: A,
          } = t,
          _ = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (t.indexOf(r) >= 0) continue;
                n[r] = e[r];
              }
            return n;
          })(t, $e);
        const L = De(),
          I = (function (t, n) {
            const r = De(),
              [a, o] = (0, e.useState)(() => Fe(t, null == r ? void 0 : r.document));
            if (!a) {
              const e = Fe(t);
              e && o(e);
            }
            return (
              (0, e.useEffect)(() => {
                n && a && n(a);
              }, [n, a]),
              (0, e.useEffect)(() => {
                const e = Fe(t);
                e !== a && o(e);
              }, [t, a]),
              a
            );
          })(k),
          D = Xe(E),
          F = Oe(),
          M = (function (t) {
            const n = (0, e.useRef)(null);
            return (
              (0, e.useEffect)(() => {
                n.current = t;
              }),
              n.current
            );
          })(r),
          [B, W] = (0, e.useState)(!r),
          U = (0, e.useRef)(null);
        (0, e.useImperativeHandle)(n, () => D, [D]),
          X && !M && r && (U.current = Pe(null == L ? void 0 : L.document)),
          r && B && W(!1);
        const H = be(() => {
            if (
              (D.add(),
              (G.current = ee(document, 'keydown', Q)),
              (q.current = ee(document, 'focus', () => setTimeout(K), !0)),
              C && C(),
              g)
            ) {
              var e, t;
              const n = Pe(
                null != (e = null == (t = D.dialog) ? void 0 : t.ownerDocument)
                  ? e
                  : null == L
                  ? void 0
                  : L.document,
              );
              D.dialog && n && !Te(D.dialog, n) && ((U.current = n), D.dialog.focus());
            }
          }),
          V = be(() => {
            var e;
            (D.remove(), null == G.current || G.current(), null == q.current || q.current(), b) &&
              (null == (e = U.current) || null == e.focus || e.focus(x), (U.current = null));
          });
        (0, e.useEffect)(() => {
          r && I && H();
        }, [r, I, H]),
          (0, e.useEffect)(() => {
            B && V();
          }, [B, V]),
          Ae(() => {
            V();
          });
        const K = be(() => {
            if (!y || !F() || !D.isTopModal()) return;
            const e = Pe(null == L ? void 0 : L.document);
            D.dialog && e && !Te(D.dialog, e) && D.dialog.focus();
          }),
          $ = be((e) => {
            e.target === e.currentTarget && (null == c || c(e), !0 === s && N());
          }),
          Q = be((e) => {
            u &&
              (function (e) {
                return 'Escape' === e.code || 27 === e.keyCode;
              })(e) &&
              D.isTopModal() &&
              (null == d || d(e), e.defaultPrevented || N());
          }),
          q = (0, e.useRef)(),
          G = (0, e.useRef)();
        if (!I) return null;
        const Y = Object.assign(
          { role: a, ref: D.setDialogRef, 'aria-modal': 'dialog' === a || void 0 },
          _,
          { style: l, className: o, tabIndex: -1 },
        );
        let J = w
          ? w(Y)
          : (0, v.jsx)(
              'div',
              Object.assign({}, Y, { children: e.cloneElement(i, { role: 'document' }) }),
            );
        J = Ke(f, p, {
          unmountOnExit: !0,
          mountOnEnter: !0,
          appear: !0,
          in: !!r,
          onExit: R,
          onExiting: P,
          onExited: function () {
            W(!0), null == j || j(...arguments);
          },
          onEnter: T,
          onEntering: O,
          onEntered: A,
          children: J,
        });
        let Z = null;
        return (
          s &&
            ((Z = S({ ref: D.setBackdropRef, onClick: $ })),
            (Z = Ke(h, m, {
              in: !!r,
              appear: !0,
              mountOnEnter: !0,
              unmountOnExit: !0,
              children: Z,
            }))),
          (0, v.jsx)(v.Fragment, {
            children: z.createPortal((0, v.jsxs)(v.Fragment, { children: [Z, J] }), I),
          })
        );
      });
      qe.displayName = 'Modal';
      const Ge = Object.assign(qe, { Manager: Ie }),
        Ye = { [U]: 'show', [H]: 'show' },
        Je = e.forwardRef((t, n) => {
          let { className: r, children: a, transitionClasses: l = {}, onEnter: i, ...s } = t;
          const u = { in: !1, timeout: 300, mountOnEnter: !1, unmountOnExit: !1, appear: !1, ...s },
            c = (0, e.useCallback)(
              (e, t) => {
                le(e), null == i || i(e, t);
              },
              [i],
            ),
            { major: d } = Be(),
            f = d >= 19 ? a.props.ref : a.ref;
          return (0, v.jsx)(ue, {
            ref: n,
            addEndListener: ae,
            ...u,
            onEnter: c,
            childRef: f,
            children: (t, n) =>
              e.cloneElement(a, {
                ...n,
                className: o()('fade', r, a.props.className, Ye[t], l[t]),
              }),
          });
        });
      Je.displayName = 'Fade';
      const Ze = Je,
        et = e.forwardRef((e, t) => {
          let { className: n, bsPrefix: r, as: a = 'div', ...l } = e;
          return (
            (r = S(r, 'offcanvas-body')), (0, v.jsx)(a, { ref: t, className: o()(n, r), ...l })
          );
        });
      et.displayName = 'OffcanvasBody';
      const tt = et,
        nt = { [U]: 'show', [H]: 'show' },
        rt = e.forwardRef((t, n) => {
          let {
            bsPrefix: r,
            className: a,
            children: l,
            in: i = !1,
            mountOnEnter: s = !1,
            unmountOnExit: u = !1,
            appear: c = !1,
            ...d
          } = t;
          return (
            (r = S(r, 'offcanvas')),
            (0, v.jsx)(ue, {
              ref: n,
              addEndListener: ae,
              in: i,
              mountOnEnter: s,
              unmountOnExit: u,
              appear: c,
              ...d,
              childRef: l.ref,
              children: (t, n) =>
                e.cloneElement(l, {
                  ...n,
                  className: o()(
                    a,
                    l.props.className,
                    (t === U || t === V) && `${r}-toggling`,
                    nt[t],
                  ),
                }),
            })
          );
        });
      rt.displayName = 'OffcanvasToggling';
      const at = rt,
        ot = e.createContext({ onHide() {} });
      var lt = n(173),
        it = n.n(lt);
      const st = { 'aria-label': it().string, onClick: it().func, variant: it().oneOf(['white']) },
        ut = e.forwardRef((e, t) => {
          let { className: n, variant: r, 'aria-label': a = 'Close', ...l } = e;
          return (0, v.jsx)('button', {
            ref: t,
            type: 'button',
            className: o()('btn-close', r && `btn-close-${r}`, n),
            'aria-label': a,
            ...l,
          });
        });
      (ut.displayName = 'CloseButton'), (ut.propTypes = st);
      const ct = ut,
        dt = e.forwardRef((t, n) => {
          let {
            closeLabel: r = 'Close',
            closeVariant: a,
            closeButton: o = !1,
            onHide: l,
            children: i,
            ...s
          } = t;
          const u = (0, e.useContext)(ot),
            c = be(() => {
              null == u || u.onHide(), null == l || l();
            });
          return (0, v.jsxs)('div', {
            ref: n,
            ...s,
            children: [i, o && (0, v.jsx)(ct, { 'aria-label': r, variant: a, onClick: c })],
          });
        }),
        ft = dt,
        pt = e.forwardRef((e, t) => {
          let { bsPrefix: n, className: r, closeLabel: a = 'Close', closeButton: l = !1, ...i } = e;
          return (
            (n = S(n, 'offcanvas-header')),
            (0, v.jsx)(ft, { ref: t, ...i, className: o()(r, n), closeLabel: a, closeButton: l })
          );
        });
      pt.displayName = 'OffcanvasHeader';
      const ht = pt,
        mt = (t) =>
          e.forwardRef((e, n) =>
            (0, v.jsx)('div', { ...e, ref: n, className: o()(e.className, t) }),
          ),
        vt = mt('h5'),
        gt = e.forwardRef((e, t) => {
          let { className: n, bsPrefix: r, as: a = vt, ...l } = e;
          return (
            (r = S(r, 'offcanvas-title')), (0, v.jsx)(a, { ref: t, className: o()(n, r), ...l })
          );
        });
      gt.displayName = 'OffcanvasTitle';
      const yt = gt;
      var bt = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function xt(e, t) {
        return bt(e.querySelectorAll(t));
      }
      function wt(e, t) {
        return e
          .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
          .replace(/\s+/g, ' ')
          .replace(/^\s*|\s*$/g, '');
      }
      const St = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
        Et = '.sticky-top',
        kt = '.navbar-toggler';
      class Ct extends Ie {
        adjustAndStore(e, t, n) {
          const r = t.style[e];
          (t.dataset[e] = r), L(t, { [e]: `${parseFloat(L(t, e)) + n}px` });
        }
        restore(e, t) {
          const n = t.dataset[e];
          void 0 !== n && (delete t.dataset[e], L(t, { [e]: n }));
        }
        setContainerStyle(e) {
          super.setContainerStyle(e);
          const t = this.getElement();
          var n, r;
          if (
            ((r = 'modal-open'),
            (n = t).classList
              ? n.classList.add(r)
              : (function (e, t) {
                  return e.classList
                    ? !!t && e.classList.contains(t)
                    : -1 !==
                        (' ' + (e.className.baseVal || e.className) + ' ').indexOf(' ' + t + ' ');
                })(n, r) ||
                ('string' === typeof n.className
                  ? (n.className = n.className + ' ' + r)
                  : n.setAttribute(
                      'class',
                      ((n.className && n.className.baseVal) || '') + ' ' + r,
                    )),
            !e.scrollBarWidth)
          )
            return;
          const a = this.isRTL ? 'paddingLeft' : 'paddingRight',
            o = this.isRTL ? 'marginLeft' : 'marginRight';
          xt(t, St).forEach((t) => this.adjustAndStore(a, t, e.scrollBarWidth)),
            xt(t, Et).forEach((t) => this.adjustAndStore(o, t, -e.scrollBarWidth)),
            xt(t, kt).forEach((t) => this.adjustAndStore(o, t, e.scrollBarWidth));
        }
        removeContainerStyle(e) {
          super.removeContainerStyle(e);
          const t = this.getElement();
          var n, r;
          (r = 'modal-open'),
            (n = t).classList
              ? n.classList.remove(r)
              : 'string' === typeof n.className
              ? (n.className = wt(n.className, r))
              : n.setAttribute('class', wt((n.className && n.className.baseVal) || '', r));
          const a = this.isRTL ? 'paddingLeft' : 'paddingRight',
            o = this.isRTL ? 'marginLeft' : 'marginRight';
          xt(t, St).forEach((e) => this.restore(a, e)),
            xt(t, Et).forEach((e) => this.restore(o, e)),
            xt(t, kt).forEach((e) => this.restore(o, e));
        }
      }
      let Nt;
      function Rt(e) {
        return Nt || (Nt = new Ct(e)), Nt;
      }
      const jt = Ct;
      function Pt(e) {
        return (0, v.jsx)(at, { ...e });
      }
      function Tt(e) {
        return (0, v.jsx)(Ze, { ...e });
      }
      const Ot = e.forwardRef((t, n) => {
        let {
          bsPrefix: r,
          className: a,
          children: l,
          'aria-labelledby': i,
          placement: s = 'start',
          responsive: u,
          show: c = !1,
          backdrop: d = !0,
          keyboard: f = !0,
          scroll: p = !1,
          onEscapeKeyDown: h,
          onShow: m,
          onHide: g,
          container: y,
          autoFocus: b = !0,
          enforceFocus: x = !0,
          restoreFocus: w = !0,
          restoreFocusOptions: E,
          onEntered: k,
          onExit: C,
          onExiting: N,
          onEnter: R,
          onEntering: j,
          onExited: P,
          backdropClassName: T,
          manager: O,
          renderStaticNode: A = !1,
          ..._
        } = t;
        const L = (0, e.useRef)();
        r = S(r, 'offcanvas');
        const [I, z] = (0, e.useState)(!1),
          D = be(g),
          F = je(u || 'xs', 'up');
        (0, e.useEffect)(() => {
          z(u ? c && !F : c);
        }, [c, u, F]);
        const M = (0, e.useMemo)(() => ({ onHide: D }), [D]);
        const B = (0, e.useCallback)(
            (e) => (0, v.jsx)('div', { ...e, className: o()(`${r}-backdrop`, T) }),
            [T, r],
          ),
          W = (e) =>
            (0, v.jsx)('div', {
              ...e,
              ..._,
              className: o()(a, u ? `${r}-${u}` : r, `${r}-${s}`),
              'aria-labelledby': i,
              children: l,
            });
        return (0, v.jsxs)(v.Fragment, {
          children: [
            !I && (u || A) && W({}),
            (0, v.jsx)(ot.Provider, {
              value: M,
              children: (0, v.jsx)(Ge, {
                show: I,
                ref: n,
                backdrop: d,
                container: y,
                keyboard: f,
                autoFocus: b,
                enforceFocus: x && !p,
                restoreFocus: w,
                restoreFocusOptions: E,
                onEscapeKeyDown: h,
                onShow: m,
                onHide: D,
                onEnter: function (e) {
                  e && (e.style.visibility = 'visible');
                  for (
                    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  null == R || R(e, ...n);
                },
                onEntering: j,
                onEntered: k,
                onExit: C,
                onExiting: N,
                onExited: function (e) {
                  e && (e.style.visibility = '');
                  for (
                    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  null == P || P(...n);
                },
                manager:
                  O ||
                  (p
                    ? (L.current || (L.current = new jt({ handleContainerOverflow: !1 })),
                      L.current)
                    : Rt()),
                transition: Pt,
                backdropTransition: Tt,
                renderBackdrop: B,
                renderDialog: W,
              }),
            }),
          ],
        });
      });
      Ot.displayName = 'Offcanvas';
      const At = Object.assign(Ot, { Body: tt, Header: ht, Title: yt }),
        _t = e.forwardRef((t, n) => {
          let { onHide: r, ...a } = t;
          const o = (0, e.useContext)(me),
            l = be(() => {
              null == o || null == o.onToggle || o.onToggle(), null == r || r();
            });
          return (0, v.jsx)(At, {
            ref: n,
            show: !(null == o || !o.expanded),
            ...a,
            renderStaticNode: !0,
            onHide: l,
          });
        });
      _t.displayName = 'NavbarOffcanvas';
      const Lt = _t,
        It = e.forwardRef((e, t) => {
          let { className: n, bsPrefix: r, as: a = 'span', ...l } = e;
          return (r = S(r, 'navbar-text')), (0, v.jsx)(a, { ref: t, className: o()(n, r), ...l });
        });
      It.displayName = 'NavbarText';
      const zt = It,
        Dt = e.forwardRef((t, n) => {
          const {
              bsPrefix: r,
              expand: a = !0,
              variant: l = 'light',
              bg: s,
              fixed: u,
              sticky: c,
              className: d,
              as: p = 'nav',
              expanded: h,
              onToggle: m,
              onSelect: g,
              collapseOnSelect: y = !1,
              ...b
            } = f(t, { expanded: 'onToggle' }),
            x = S(r, 'navbar'),
            w = (0, e.useCallback)(
              function () {
                null == g || g(...arguments), y && h && (null == m || m(!1));
              },
              [g, y, h, m],
            );
          void 0 === b.role && 'nav' !== p && (b.role = 'navigation');
          let E = `${x}-expand`;
          'string' === typeof a && (E = `${E}-${a}`);
          const k = (0, e.useMemo)(
            () => ({
              onToggle: () => (null == m ? void 0 : m(!h)),
              bsPrefix: x,
              expanded: !!h,
              expand: a,
            }),
            [x, h, a, m],
          );
          return (0, v.jsx)(me.Provider, {
            value: k,
            children: (0, v.jsx)(i.Provider, {
              value: w,
              children: (0, v.jsx)(p, {
                ref: n,
                ...b,
                className: o()(
                  d,
                  x,
                  a && E,
                  l && `${x}-${l}`,
                  s && `bg-${s}`,
                  c && `sticky-${c}`,
                  u && `fixed-${u}`,
                ),
              }),
            }),
          });
        });
      Dt.displayName = 'Navbar';
      const Ft = Object.assign(Dt, { Brand: R, Collapse: ge, Offcanvas: Lt, Text: zt, Toggle: we }),
        Mt = e.forwardRef((e, t) => {
          let { bsPrefix: n, fluid: r = !1, as: a = 'div', className: l, ...i } = e;
          const s = S(n, 'container'),
            u = 'string' === typeof r ? `-${r}` : '-fluid';
          return (0, v.jsx)(a, { ref: t, ...i, className: o()(l, r ? `${s}${u}` : s) });
        });
      Mt.displayName = 'Container';
      const Bt = Mt;
      n(197);
      const Wt = e.createContext(null);
      Wt.displayName = 'NavContext';
      const Ut = Wt,
        Ht = e.createContext(null),
        Vt = ['as', 'disabled'];
      function Kt(e) {
        let {
          tagName: t,
          disabled: n,
          href: r,
          target: a,
          rel: o,
          role: l,
          onClick: i,
          tabIndex: s = 0,
          type: u,
        } = e;
        t || (t = null != r || null != a || null != o ? 'a' : 'button');
        const c = { tagName: t };
        if ('button' === t) return [{ type: u || 'button', disabled: n }, c];
        const d = (e) => {
          (n ||
            ('a' === t &&
              (function (e) {
                return !e || '#' === e.trim();
              })(r))) &&
            e.preventDefault(),
            n ? e.stopPropagation() : null == i || i(e);
        };
        return (
          'a' === t && (r || (r = '#'), n && (r = void 0)),
          [
            {
              role: null != l ? l : 'button',
              disabled: void 0,
              tabIndex: n ? void 0 : s,
              href: r,
              target: 'a' === t ? a : void 0,
              'aria-disabled': n || void 0,
              rel: 'a' === t ? o : void 0,
              onClick: d,
              onKeyDown: (e) => {
                ' ' === e.key && (e.preventDefault(), d(e));
              },
            },
            c,
          ]
        );
      }
      const $t = e.forwardRef((e, t) => {
        let { as: n, disabled: r } = e,
          a = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (t.indexOf(r) >= 0) continue;
                n[r] = e[r];
              }
            return n;
          })(e, Vt);
        const [o, { tagName: l }] = Kt(Object.assign({ tagName: n, disabled: r }, a));
        return (0, v.jsx)(l, Object.assign({}, a, o, { ref: t }));
      });
      $t.displayName = 'Button';
      const Qt = $t,
        Xt = ['as', 'active', 'eventKey'];
      function qt(t) {
        let { key: n, onClick: r, active: a, id: o, role: l, disabled: s } = t;
        const u = (0, e.useContext)(i),
          c = (0, e.useContext)(Ut),
          d = (0, e.useContext)(Ht);
        let f = a;
        const p = { role: l };
        if (c) {
          l || 'tablist' !== c.role || (p.role = 'tab');
          const e = c.getControllerId(null != n ? n : null),
            t = c.getControlledId(null != n ? n : null);
          (p[_e('event-key')] = n),
            (p.id = e || o),
            (f = null == a && null != n ? c.activeKey === n : a),
            (!f && ((null != d && d.unmountOnExit) || (null != d && d.mountOnEnter))) ||
              (p['aria-controls'] = t);
        }
        return (
          'tab' === p.role &&
            ((p['aria-selected'] = f),
            f || (p.tabIndex = -1),
            s && ((p.tabIndex = -1), (p['aria-disabled'] = !0))),
          (p.onClick = be((e) => {
            s || (null == r || r(e), null != n && u && !e.isPropagationStopped() && u(n, e));
          })),
          [p, { isActive: f }]
        );
      }
      const Gt = e.forwardRef((e, t) => {
        let { as: n = Qt, active: r, eventKey: a } = e,
          o = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (t.indexOf(r) >= 0) continue;
                n[r] = e[r];
              }
            return n;
          })(e, Xt);
        const [i, s] = qt(Object.assign({ key: l(a, o.href), active: r }, o));
        return (i[_e('active')] = s.isActive), (0, v.jsx)(n, Object.assign({}, o, i, { ref: t }));
      });
      Gt.displayName = 'NavItem';
      const Yt = Gt,
        Jt = ['as', 'onSelect', 'activeKey', 'role', 'onKeyDown'];
      const Zt = () => {},
        en = _e('event-key'),
        tn = e.forwardRef((t, n) => {
          let { as: r = 'div', onSelect: a, activeKey: o, role: s, onKeyDown: u } = t,
            c = (function (e, t) {
              if (null == e) return {};
              var n = {};
              for (var r in e)
                if ({}.hasOwnProperty.call(e, r)) {
                  if (t.indexOf(r) >= 0) continue;
                  n[r] = e[r];
                }
              return n;
            })(t, Jt);
          const d = (function () {
              const [, t] = (0, e.useReducer)((e) => !e, !1);
              return t;
            })(),
            f = (0, e.useRef)(!1),
            p = (0, e.useContext)(i),
            h = (0, e.useContext)(Ht);
          let m, g;
          h &&
            ((s = s || 'tablist'),
            (o = h.activeKey),
            (m = h.getControlledId),
            (g = h.getControllerId));
          const y = (0, e.useRef)(null),
            b = (e) => {
              const t = y.current;
              if (!t) return null;
              const n = xt(t, `[${en}]:not([aria-disabled=true])`),
                r = t.querySelector('[aria-selected=true]');
              if (!r || r !== document.activeElement) return null;
              const a = n.indexOf(r);
              if (-1 === a) return null;
              let o = a + e;
              return o >= n.length && (o = 0), o < 0 && (o = n.length - 1), n[o];
            },
            x = (e, t) => {
              null != e && (null == a || a(e, t), null == p || p(e, t));
            };
          (0, e.useEffect)(() => {
            if (y.current && f.current) {
              const e = y.current.querySelector(`[${en}][aria-selected=true]`);
              null == e || e.focus();
            }
            f.current = !1;
          });
          const w = se(n, y);
          return (0, v.jsx)(i.Provider, {
            value: x,
            children: (0, v.jsx)(Ut.Provider, {
              value: {
                role: s,
                activeKey: l(o),
                getControlledId: m || Zt,
                getControllerId: g || Zt,
              },
              children: (0, v.jsx)(
                r,
                Object.assign({}, c, {
                  onKeyDown: (e) => {
                    if ((null == u || u(e), !h)) return;
                    let t;
                    switch (e.key) {
                      case 'ArrowLeft':
                      case 'ArrowUp':
                        t = b(-1);
                        break;
                      case 'ArrowRight':
                      case 'ArrowDown':
                        t = b(1);
                        break;
                      default:
                        return;
                    }
                    var n;
                    t &&
                      (e.preventDefault(),
                      x(t.dataset[((n = 'EventKey'), `rrUi${n}`)] || null, e),
                      (f.current = !0),
                      d());
                  },
                  ref: w,
                  role: s,
                }),
              ),
            }),
          });
        });
      tn.displayName = 'Nav';
      const nn = Object.assign(tn, { Item: Yt }),
        rn = e.createContext(null);
      rn.displayName = 'CardHeaderContext';
      const an = rn,
        on = e.forwardRef((e, t) => {
          let { className: n, bsPrefix: r, as: a = 'div', ...l } = e;
          return (r = S(r, 'nav-item')), (0, v.jsx)(a, { ref: t, className: o()(n, r), ...l });
        });
      on.displayName = 'NavItem';
      const ln = on;
      new WeakMap();
      const sn = ['onKeyDown'];
      const un = e.forwardRef((e, t) => {
        let { onKeyDown: n } = e,
          r = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (t.indexOf(r) >= 0) continue;
                n[r] = e[r];
              }
            return n;
          })(e, sn);
        const [a] = Kt(Object.assign({ tagName: 'a' }, r)),
          o = be((e) => {
            a.onKeyDown(e), null == n || n(e);
          });
        return (l = r.href) && '#' !== l.trim() && 'button' !== r.role
          ? (0, v.jsx)('a', Object.assign({ ref: t }, r, { onKeyDown: n }))
          : (0, v.jsx)('a', Object.assign({ ref: t }, r, a, { onKeyDown: o }));
        var l;
      });
      un.displayName = 'Anchor';
      const cn = un,
        dn = e.forwardRef((e, t) => {
          let {
            bsPrefix: n,
            className: r,
            as: a = cn,
            active: i,
            eventKey: s,
            disabled: u = !1,
            ...c
          } = e;
          n = S(n, 'nav-link');
          const [d, f] = qt({ key: l(s, c.href), active: i, disabled: u, ...c });
          return (0, v.jsx)(a, {
            ...c,
            ...d,
            ref: t,
            disabled: u,
            className: o()(r, n, u && 'disabled', f.isActive && 'active'),
          });
        });
      dn.displayName = 'NavLink';
      const fn = dn,
        pn = e.forwardRef((t, n) => {
          const {
              as: r = 'div',
              bsPrefix: a,
              variant: l,
              fill: i = !1,
              justify: s = !1,
              navbar: u,
              navbarScroll: c,
              className: d,
              activeKey: p,
              ...h
            } = f(t, { activeKey: 'onSelect' }),
            m = S(a, 'nav');
          let g,
            y,
            b = !1;
          const x = (0, e.useContext)(me),
            w = (0, e.useContext)(an);
          return (
            x ? ((g = x.bsPrefix), (b = null == u || u)) : w && ({ cardHeaderBsPrefix: y } = w),
            (0, v.jsx)(nn, {
              as: r,
              ref: n,
              activeKey: p,
              className: o()(d, {
                [m]: !b,
                [`${g}-nav`]: b,
                [`${g}-nav-scroll`]: b && c,
                [`${y}-${l}`]: !!y,
                [`${m}-${l}`]: !!l,
                [`${m}-fill`]: i,
                [`${m}-justified`]: s,
              }),
              ...h,
            })
          );
        });
      pn.displayName = 'Nav';
      const hn = Object.assign(pn, { Item: ln, Link: fn }),
        mn = e.forwardRef((e, t) => {
          let {
            as: n,
            bsPrefix: r,
            variant: a = 'primary',
            size: l,
            active: i = !1,
            disabled: s = !1,
            className: u,
            ...c
          } = e;
          const d = S(r, 'btn'),
            [f, { tagName: p }] = Kt({ tagName: n, disabled: s, ...c }),
            h = p;
          return (0, v.jsx)(h, {
            ...f,
            ...c,
            ref: t,
            disabled: s,
            className: o()(
              u,
              d,
              i && 'active',
              a && `${d}-${a}`,
              l && `${d}-${l}`,
              c.href && s && 'disabled',
            ),
          });
        });
      mn.displayName = 'Button';
      const vn = mn;
      var gn;
      function yn(e) {
        if (((!gn && 0 !== gn) || e) && X) {
          var t = document.createElement('div');
          (t.style.position = 'absolute'),
            (t.style.top = '-9999px'),
            (t.style.width = '50px'),
            (t.style.height = '50px'),
            (t.style.overflow = 'scroll'),
            document.body.appendChild(t),
            (gn = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return gn;
      }
      const bn = e.forwardRef((e, t) => {
        let { className: n, bsPrefix: r, as: a = 'div', ...l } = e;
        return (r = S(r, 'modal-body')), (0, v.jsx)(a, { ref: t, className: o()(n, r), ...l });
      });
      bn.displayName = 'ModalBody';
      const xn = bn,
        wn = e.forwardRef((e, t) => {
          let {
            bsPrefix: n,
            className: r,
            contentClassName: a,
            centered: l,
            size: i,
            fullscreen: s,
            children: u,
            scrollable: c,
            ...d
          } = e;
          n = S(n, 'modal');
          const f = `${n}-dialog`,
            p = 'string' === typeof s ? `${n}-fullscreen-${s}` : `${n}-fullscreen`;
          return (0, v.jsx)('div', {
            ...d,
            ref: t,
            className: o()(
              f,
              r,
              i && `${n}-${i}`,
              l && `${f}-centered`,
              c && `${f}-scrollable`,
              s && p,
            ),
            children: (0, v.jsx)('div', { className: o()(`${n}-content`, a), children: u }),
          });
        });
      wn.displayName = 'ModalDialog';
      const Sn = wn,
        En = e.forwardRef((e, t) => {
          let { className: n, bsPrefix: r, as: a = 'div', ...l } = e;
          return (r = S(r, 'modal-footer')), (0, v.jsx)(a, { ref: t, className: o()(n, r), ...l });
        });
      En.displayName = 'ModalFooter';
      const kn = En,
        Cn = e.forwardRef((e, t) => {
          let { bsPrefix: n, className: r, closeLabel: a = 'Close', closeButton: l = !1, ...i } = e;
          return (
            (n = S(n, 'modal-header')),
            (0, v.jsx)(ft, { ref: t, ...i, className: o()(r, n), closeLabel: a, closeButton: l })
          );
        });
      Cn.displayName = 'ModalHeader';
      const Nn = Cn,
        Rn = mt('h4'),
        jn = e.forwardRef((e, t) => {
          let { className: n, bsPrefix: r, as: a = Rn, ...l } = e;
          return (r = S(r, 'modal-title')), (0, v.jsx)(a, { ref: t, className: o()(n, r), ...l });
        });
      jn.displayName = 'ModalTitle';
      const Pn = jn;
      function Tn(e) {
        return (0, v.jsx)(Ze, { ...e, timeout: null });
      }
      function On(e) {
        return (0, v.jsx)(Ze, { ...e, timeout: null });
      }
      const An = e.forwardRef((t, n) => {
        let {
          bsPrefix: r,
          className: a,
          style: l,
          dialogClassName: i,
          contentClassName: s,
          children: u,
          dialogAs: c = Sn,
          'data-bs-theme': d,
          'aria-labelledby': f,
          'aria-describedby': p,
          'aria-label': h,
          show: m = !1,
          animation: g = !0,
          backdrop: y = !0,
          keyboard: b = !0,
          onEscapeKeyDown: x,
          onShow: w,
          onHide: E,
          container: k,
          autoFocus: N = !0,
          enforceFocus: R = !0,
          restoreFocus: P = !0,
          restoreFocusOptions: T,
          onEntered: O,
          onExit: A,
          onExiting: _,
          onEnter: L,
          onEntering: I,
          onExited: z,
          backdropClassName: D,
          manager: F,
          ...M
        } = t;
        const [B, W] = (0, e.useState)({}),
          [U, H] = (0, e.useState)(!1),
          V = (0, e.useRef)(!1),
          K = (0, e.useRef)(!1),
          $ = (0, e.useRef)(null),
          [Q, q] = (0, e.useState)(null),
          G = se(n, q),
          Y = be(E),
          ee = C();
        r = S(r, 'modal');
        const te = (0, e.useMemo)(() => ({ onHide: Y }), [Y]);
        function re() {
          return F || Rt({ isRTL: ee });
        }
        function ae(e) {
          if (!X) return;
          const t = re().getScrollbarWidth() > 0,
            n = e.scrollHeight > j(e).documentElement.clientHeight;
          W({ paddingRight: t && !n ? yn() : void 0, paddingLeft: !t && n ? yn() : void 0 });
        }
        const oe = be(() => {
          Q && ae(Q.dialog);
        });
        Ae(() => {
          Z(window, 'resize', oe), null == $.current || $.current();
        });
        const le = () => {
            V.current = !0;
          },
          ie = (e) => {
            V.current && Q && e.target === Q.dialog && (K.current = !0), (V.current = !1);
          },
          ue = () => {
            H(!0),
              ($.current = ne(Q.dialog, () => {
                H(!1);
              }));
          },
          ce = (e) => {
            'static' !== y
              ? K.current || e.target !== e.currentTarget
                ? (K.current = !1)
                : null == E || E()
              : ((e) => {
                  e.target === e.currentTarget && ue();
                })(e);
          },
          de = (0, e.useCallback)(
            (e) => (0, v.jsx)('div', { ...e, className: o()(`${r}-backdrop`, D, !g && 'show') }),
            [g, D, r],
          ),
          fe = { ...l, ...B };
        fe.display = 'block';
        return (0, v.jsx)(ot.Provider, {
          value: te,
          children: (0, v.jsx)(Ge, {
            show: m,
            ref: G,
            backdrop: y,
            container: k,
            keyboard: !0,
            autoFocus: N,
            enforceFocus: R,
            restoreFocus: P,
            restoreFocusOptions: T,
            onEscapeKeyDown: (e) => {
              b ? null == x || x(e) : (e.preventDefault(), 'static' === y && ue());
            },
            onShow: w,
            onHide: E,
            onEnter: (e, t) => {
              e && ae(e), null == L || L(e, t);
            },
            onEntering: (e, t) => {
              null == I || I(e, t), J(window, 'resize', oe);
            },
            onEntered: O,
            onExit: (e) => {
              null == $.current || $.current(), null == A || A(e);
            },
            onExiting: _,
            onExited: (e) => {
              e && (e.style.display = ''), null == z || z(e), Z(window, 'resize', oe);
            },
            manager: re(),
            transition: g ? Tn : void 0,
            backdropTransition: g ? On : void 0,
            renderBackdrop: de,
            renderDialog: (e) =>
              (0, v.jsx)('div', {
                role: 'dialog',
                ...e,
                style: fe,
                className: o()(a, r, U && `${r}-static`, !g && 'show'),
                onClick: y ? ce : void 0,
                onMouseUp: ie,
                'data-bs-theme': d,
                'aria-label': h,
                'aria-labelledby': f,
                'aria-describedby': p,
                children: (0, v.jsx)(c, {
                  ...M,
                  onMouseDown: le,
                  className: i,
                  contentClassName: s,
                  children: u,
                }),
              }),
          }),
        });
      });
      An.displayName = 'Modal';
      const _n = Object.assign(An, {
          Body: xn,
          Header: Nn,
          Title: Pn,
          Footer: kn,
          Dialog: Sn,
          TRANSITION_DURATION: 300,
          BACKDROP_TRANSITION_DURATION: 150,
        }),
        Ln = { type: it().string, tooltip: it().bool, as: it().elementType },
        In = e.forwardRef((e, t) => {
          let { as: n = 'div', className: r, type: a = 'valid', tooltip: l = !1, ...i } = e;
          return (0, v.jsx)(n, {
            ...i,
            ref: t,
            className: o()(r, `${a}-${l ? 'tooltip' : 'feedback'}`),
          });
        });
      (In.displayName = 'Feedback'), (In.propTypes = Ln);
      const zn = In,
        Dn = e.createContext({}),
        Fn = e.forwardRef((t, n) => {
          let {
            id: r,
            bsPrefix: a,
            className: l,
            type: i = 'checkbox',
            isValid: s = !1,
            isInvalid: u = !1,
            as: c = 'input',
            ...d
          } = t;
          const { controlId: f } = (0, e.useContext)(Dn);
          return (
            (a = S(a, 'form-check-input')),
            (0, v.jsx)(c, {
              ...d,
              ref: n,
              type: i,
              id: r || f,
              className: o()(l, a, s && 'is-valid', u && 'is-invalid'),
            })
          );
        });
      Fn.displayName = 'FormCheckInput';
      const Mn = Fn,
        Bn = e.forwardRef((t, n) => {
          let { bsPrefix: r, className: a, htmlFor: l, ...i } = t;
          const { controlId: s } = (0, e.useContext)(Dn);
          return (
            (r = S(r, 'form-check-label')),
            (0, v.jsx)('label', { ...i, ref: n, htmlFor: l || s, className: o()(a, r) })
          );
        });
      Bn.displayName = 'FormCheckLabel';
      const Wn = Bn;
      function Un(t, n) {
        let r = 0;
        return e.Children.map(t, (t) => (e.isValidElement(t) ? n(t, r++) : t));
      }
      const Hn = e.forwardRef((t, n) => {
        let {
          id: r,
          bsPrefix: a,
          bsSwitchPrefix: l,
          inline: i = !1,
          reverse: s = !1,
          disabled: u = !1,
          isValid: c = !1,
          isInvalid: d = !1,
          feedbackTooltip: f = !1,
          feedback: p,
          feedbackType: h,
          className: m,
          style: g,
          title: y = '',
          type: b = 'checkbox',
          label: x,
          children: w,
          as: E = 'input',
          ...k
        } = t;
        (a = S(a, 'form-check')), (l = S(l, 'form-switch'));
        const { controlId: C } = (0, e.useContext)(Dn),
          N = (0, e.useMemo)(() => ({ controlId: r || C }), [C, r]),
          R =
            (!w && null != x && !1 !== x) ||
            (function (t, n) {
              return e.Children.toArray(t).some((t) => e.isValidElement(t) && t.type === n);
            })(w, Wn),
          j = (0, v.jsx)(Mn, {
            ...k,
            type: 'switch' === b ? 'checkbox' : b,
            ref: n,
            isValid: c,
            isInvalid: d,
            disabled: u,
            as: E,
          });
        return (0, v.jsx)(Dn.Provider, {
          value: N,
          children: (0, v.jsx)('div', {
            style: g,
            className: o()(m, R && a, i && `${a}-inline`, s && `${a}-reverse`, 'switch' === b && l),
            children:
              w ||
              (0, v.jsxs)(v.Fragment, {
                children: [
                  j,
                  R && (0, v.jsx)(Wn, { title: y, children: x }),
                  p && (0, v.jsx)(zn, { type: h, tooltip: f, children: p }),
                ],
              }),
          }),
        });
      });
      Hn.displayName = 'FormCheck';
      const Vn = Object.assign(Hn, { Input: Mn, Label: Wn });
      n(440);
      const Kn = e.forwardRef((t, n) => {
        let {
          bsPrefix: r,
          type: a,
          size: l,
          htmlSize: i,
          id: s,
          className: u,
          isValid: c = !1,
          isInvalid: d = !1,
          plaintext: f,
          readOnly: p,
          as: h = 'input',
          ...m
        } = t;
        const { controlId: g } = (0, e.useContext)(Dn);
        return (
          (r = S(r, 'form-control')),
          (0, v.jsx)(h, {
            ...m,
            type: a,
            size: i,
            ref: n,
            readOnly: p,
            id: s || g,
            className: o()(
              u,
              f ? `${r}-plaintext` : r,
              l && `${r}-${l}`,
              'color' === a && `${r}-color`,
              c && 'is-valid',
              d && 'is-invalid',
            ),
          })
        );
      });
      Kn.displayName = 'FormControl';
      const $n = Object.assign(Kn, { Feedback: zn }),
        Qn = e.forwardRef((e, t) => {
          let { className: n, bsPrefix: r, as: a = 'div', ...l } = e;
          return (r = S(r, 'form-floating')), (0, v.jsx)(a, { ref: t, className: o()(n, r), ...l });
        });
      Qn.displayName = 'FormFloating';
      const Xn = Qn,
        qn = e.forwardRef((t, n) => {
          let { controlId: r, as: a = 'div', ...o } = t;
          const l = (0, e.useMemo)(() => ({ controlId: r }), [r]);
          return (0, v.jsx)(Dn.Provider, { value: l, children: (0, v.jsx)(a, { ...o, ref: n }) });
        });
      qn.displayName = 'FormGroup';
      const Gn = qn;
      const Yn = e.forwardRef((e, t) => {
        const [{ className: n, ...r }, { as: a = 'div', bsPrefix: l, spans: i }] = (function (e) {
          let { as: t, bsPrefix: n, className: r, ...a } = e;
          n = S(n, 'col');
          const l = E(),
            i = k(),
            s = [],
            u = [];
          return (
            l.forEach((e) => {
              const t = a[e];
              let r, o, l;
              delete a[e],
                'object' === typeof t && null != t
                  ? ({ span: r, offset: o, order: l } = t)
                  : (r = t);
              const c = e !== i ? `-${e}` : '';
              r && s.push(!0 === r ? `${n}${c}` : `${n}${c}-${r}`),
                null != l && u.push(`order${c}-${l}`),
                null != o && u.push(`offset${c}-${o}`);
            }),
            [
              { ...a, className: o()(r, ...s, ...u) },
              { as: t, bsPrefix: n, spans: s },
            ]
          );
        })(e);
        return (0, v.jsx)(a, { ...r, ref: t, className: o()(n, !i.length && l) });
      });
      Yn.displayName = 'Col';
      const Jn = Yn,
        Zn = e.forwardRef((t, n) => {
          let {
            as: r = 'label',
            bsPrefix: a,
            column: l = !1,
            visuallyHidden: i = !1,
            className: s,
            htmlFor: u,
            ...c
          } = t;
          const { controlId: d } = (0, e.useContext)(Dn);
          a = S(a, 'form-label');
          let f = 'col-form-label';
          'string' === typeof l && (f = `${f} ${f}-${l}`);
          const p = o()(s, a, i && 'visually-hidden', l && f);
          return (
            (u = u || d),
            l
              ? (0, v.jsx)(Jn, { ref: n, as: 'label', className: p, htmlFor: u, ...c })
              : (0, v.jsx)(r, { ref: n, className: p, htmlFor: u, ...c })
          );
        });
      Zn.displayName = 'FormLabel';
      const er = Zn,
        tr = e.forwardRef((t, n) => {
          let { bsPrefix: r, className: a, id: l, ...i } = t;
          const { controlId: s } = (0, e.useContext)(Dn);
          return (
            (r = S(r, 'form-range')),
            (0, v.jsx)('input', { ...i, type: 'range', ref: n, className: o()(a, r), id: l || s })
          );
        });
      tr.displayName = 'FormRange';
      const nr = tr,
        rr = e.forwardRef((t, n) => {
          let {
            bsPrefix: r,
            size: a,
            htmlSize: l,
            className: i,
            isValid: s = !1,
            isInvalid: u = !1,
            id: c,
            ...d
          } = t;
          const { controlId: f } = (0, e.useContext)(Dn);
          return (
            (r = S(r, 'form-select')),
            (0, v.jsx)('select', {
              ...d,
              size: l,
              ref: n,
              className: o()(i, r, a && `${r}-${a}`, s && 'is-valid', u && 'is-invalid'),
              id: c || f,
            })
          );
        });
      rr.displayName = 'FormSelect';
      const ar = rr,
        or = e.forwardRef((e, t) => {
          let { bsPrefix: n, className: r, as: a = 'small', muted: l, ...i } = e;
          return (
            (n = S(n, 'form-text')),
            (0, v.jsx)(a, { ...i, ref: t, className: o()(r, n, l && 'text-muted') })
          );
        });
      or.displayName = 'FormText';
      const lr = or,
        ir = e.forwardRef((e, t) => (0, v.jsx)(Vn, { ...e, ref: t, type: 'switch' }));
      ir.displayName = 'Switch';
      const sr = Object.assign(ir, { Input: Vn.Input, Label: Vn.Label }),
        ur = e.forwardRef((e, t) => {
          let { bsPrefix: n, className: r, children: a, controlId: l, label: i, ...s } = e;
          return (
            (n = S(n, 'form-floating')),
            (0, v.jsxs)(Gn, {
              ref: t,
              className: o()(r, n),
              controlId: l,
              ...s,
              children: [a, (0, v.jsx)('label', { htmlFor: l, children: i })],
            })
          );
        });
      ur.displayName = 'FloatingLabel';
      const cr = ur,
        dr = { _ref: it().any, validated: it().bool, as: it().elementType },
        fr = e.forwardRef((e, t) => {
          let { className: n, validated: r, as: a = 'form', ...l } = e;
          return (0, v.jsx)(a, { ...l, ref: t, className: o()(n, r && 'was-validated') });
        });
      (fr.displayName = 'Form'), (fr.propTypes = dr);
      const pr = Object.assign(fr, {
        Group: Gn,
        Control: $n,
        Floating: Xn,
        Check: Vn,
        Switch: sr,
        Label: er,
        Text: lr,
        Range: nr,
        Select: ar,
        FloatingLabel: cr,
      });
      function hr() {
        return (
          (hr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          hr.apply(this, arguments)
        );
      }
      var mr;
      !(function (e) {
        (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
      })(mr || (mr = {}));
      const vr = 'popstate';
      function gr(e, t) {
        if (!1 === e || null === e || 'undefined' === typeof e) throw new Error(t);
      }
      function yr(e, t) {
        if (!e) {
          'undefined' !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (pu) {}
        }
      }
      function br(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function xr(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          hr(
            { pathname: 'string' === typeof e ? e : e.pathname, search: '', hash: '' },
            'string' === typeof t ? Sr(t) : t,
            { state: n, key: (t && t.key) || r || Math.random().toString(36).substr(2, 8) },
          )
        );
      }
      function wr(e) {
        let { pathname: t = '/', search: n = '', hash: r = '' } = e;
        return (
          n && '?' !== n && (t += '?' === n.charAt(0) ? n : '?' + n),
          r && '#' !== r && (t += '#' === r.charAt(0) ? r : '#' + r),
          t
        );
      }
      function Sr(e) {
        let t = {};
        if (e) {
          let n = e.indexOf('#');
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          let r = e.indexOf('?');
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
        }
        return t;
      }
      function Er(e, t, n, r) {
        void 0 === r && (r = {});
        let { window: a = document.defaultView, v5Compat: o = !1 } = r,
          l = a.history,
          i = mr.Pop,
          s = null,
          u = c();
        function c() {
          return (l.state || { idx: null }).idx;
        }
        function d() {
          i = mr.Pop;
          let e = c(),
            t = null == e ? null : e - u;
          (u = e), s && s({ action: i, location: p.location, delta: t });
        }
        function f(e) {
          let t = 'null' !== a.location.origin ? a.location.origin : a.location.href,
            n = 'string' === typeof e ? e : wr(e);
          return (
            (n = n.replace(/ $/, '%20')),
            gr(t, 'No window.location.(origin|href) available to create URL for href: ' + n),
            new URL(n, t)
          );
        }
        null == u && ((u = 0), l.replaceState(hr({}, l.state, { idx: u }), ''));
        let p = {
          get action() {
            return i;
          },
          get location() {
            return e(a, l);
          },
          listen(e) {
            if (s) throw new Error('A history only accepts one active listener');
            return (
              a.addEventListener(vr, d),
              (s = e),
              () => {
                a.removeEventListener(vr, d), (s = null);
              }
            );
          },
          createHref: (e) => t(a, e),
          createURL: f,
          encodeLocation(e) {
            let t = f(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, t) {
            i = mr.Push;
            let r = xr(p.location, e, t);
            n && n(r, e), (u = c() + 1);
            let d = br(r, u),
              f = p.createHref(r);
            try {
              l.pushState(d, '', f);
            } catch (h) {
              if (h instanceof DOMException && 'DataCloneError' === h.name) throw h;
              a.location.assign(f);
            }
            o && s && s({ action: i, location: p.location, delta: 1 });
          },
          replace: function (e, t) {
            i = mr.Replace;
            let r = xr(p.location, e, t);
            n && n(r, e), (u = c());
            let a = br(r, u),
              d = p.createHref(r);
            l.replaceState(a, '', d), o && s && s({ action: i, location: p.location, delta: 0 });
          },
          go: (e) => l.go(e),
        };
        return p;
      }
      var kr;
      !(function (e) {
        (e.data = 'data'),
          (e.deferred = 'deferred'),
          (e.redirect = 'redirect'),
          (e.error = 'error');
      })(kr || (kr = {}));
      new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
      function Cr(e, t, n) {
        return void 0 === n && (n = '/'), Nr(e, t, n, !1);
      }
      function Nr(e, t, n, r) {
        let a = Br(('string' === typeof t ? Sr(t) : t).pathname || '/', n);
        if (null == a) return null;
        let o = Rr(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  let n = e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]);
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex),
                ),
          );
        })(o);
        let l = null;
        for (let i = 0; null == l && i < o.length; ++i) {
          let e = Mr(a);
          l = Dr(o[i], e, r);
        }
        return l;
      }
      function Rr(e, t, n, r) {
        void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = '');
        let a = (e, a, o) => {
          let l = {
            relativePath: void 0 === o ? e.path || '' : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          l.relativePath.startsWith('/') &&
            (gr(
              l.relativePath.startsWith(r),
              'Absolute route path "' +
                l.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
            ),
            (l.relativePath = l.relativePath.slice(r.length)));
          let i = Kr([r, l.relativePath]),
            s = n.concat(l);
          e.children &&
            e.children.length > 0 &&
            (gr(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                i +
                '".',
            ),
            Rr(e.children, t, s, i)),
            (null != e.path || e.index) &&
              t.push({ path: i, score: zr(i, e.index), routesMeta: s });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ('' !== e.path && null != (n = e.path) && n.includes('?'))
              for (let r of jr(e.path)) a(e, t, r);
            else a(e, t);
          }),
          t
        );
      }
      function jr(e) {
        let t = e.split('/');
        if (0 === t.length) return [];
        let [n, ...r] = t,
          a = n.endsWith('?'),
          o = n.replace(/\?$/, '');
        if (0 === r.length) return a ? [o, ''] : [o];
        let l = jr(r.join('/')),
          i = [];
        return (
          i.push(...l.map((e) => ('' === e ? o : [o, e].join('/')))),
          a && i.push(...l),
          i.map((t) => (e.startsWith('/') && '' === t ? '/' : t))
        );
      }
      const Pr = /^:[\w-]+$/,
        Tr = 3,
        Or = 2,
        Ar = 1,
        _r = 10,
        Lr = -2,
        Ir = (e) => '*' === e;
      function zr(e, t) {
        let n = e.split('/'),
          r = n.length;
        return (
          n.some(Ir) && (r += Lr),
          t && (r += Or),
          n.filter((e) => !Ir(e)).reduce((e, t) => e + (Pr.test(t) ? Tr : '' === t ? Ar : _r), r)
        );
      }
      function Dr(e, t, n) {
        void 0 === n && (n = !1);
        let { routesMeta: r } = e,
          a = {},
          o = '/',
          l = [];
        for (let i = 0; i < r.length; ++i) {
          let e = r[i],
            s = i === r.length - 1,
            u = '/' === o ? t : t.slice(o.length) || '/',
            c = Fr({ path: e.relativePath, caseSensitive: e.caseSensitive, end: s }, u),
            d = e.route;
          if (
            (!c &&
              s &&
              n &&
              !r[r.length - 1].route.index &&
              (c = Fr({ path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 }, u)),
            !c)
          )
            return null;
          Object.assign(a, c.params),
            l.push({
              params: a,
              pathname: Kr([o, c.pathname]),
              pathnameBase: $r(Kr([o, c.pathnameBase])),
              route: d,
            }),
            '/' !== c.pathnameBase && (o = Kr([o, c.pathnameBase]));
        }
        return l;
      }
      function Fr(e, t) {
        'string' === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            yr(
              '*' === e || !e.endsWith('*') || e.endsWith('/*'),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, '/*') +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, '/*') +
                '".',
            );
            let r = [],
              a =
                '^' +
                e
                  .replace(/\/*\*?$/, '')
                  .replace(/^\/*/, '/')
                  .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
                  .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (e, t, n) => (
                      r.push({ paramName: t, isOptional: null != n }),
                      n ? '/?([^\\/]+)?' : '/([^\\/]+)'
                    ),
                  );
            e.endsWith('*')
              ? (r.push({ paramName: '*' }),
                (a += '*' === e || '/*' === e ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
              : n
              ? (a += '\\/*$')
              : '' !== e && '/' !== e && (a += '(?:(?=\\/|$))');
            let o = new RegExp(a, t ? void 0 : 'i');
            return [o, r];
          })(e.path, e.caseSensitive, e.end),
          a = t.match(n);
        if (!a) return null;
        let o = a[0],
          l = o.replace(/(.)\/+$/, '$1'),
          i = a.slice(1);
        return {
          params: r.reduce((e, t, n) => {
            let { paramName: r, isOptional: a } = t;
            if ('*' === r) {
              let e = i[n] || '';
              l = o.slice(0, o.length - e.length).replace(/(.)\/+$/, '$1');
            }
            const s = i[n];
            return (e[r] = a && !s ? void 0 : (s || '').replace(/%2F/g, '/')), e;
          }, {}),
          pathname: o,
          pathnameBase: l,
          pattern: e,
        };
      }
      function Mr(e) {
        try {
          return e
            .split('/')
            .map((e) => decodeURIComponent(e).replace(/\//g, '%2F'))
            .join('/');
        } catch (t) {
          return (
            yr(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ').',
            ),
            e
          );
        }
      }
      function Br(e, t) {
        if ('/' === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith('/') ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && '/' !== r ? null : e.slice(n) || '/';
      }
      function Wr(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          '` field [' +
          JSON.stringify(r) +
          '].  Please separate it out to the `to.' +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function Ur(e) {
        return e.filter((e, t) => 0 === t || (e.route.path && e.route.path.length > 0));
      }
      function Hr(e, t) {
        let n = Ur(e);
        return t
          ? n.map((e, t) => (t === n.length - 1 ? e.pathname : e.pathnameBase))
          : n.map((e) => e.pathnameBase);
      }
      function Vr(e, t, n, r) {
        let a;
        void 0 === r && (r = !1),
          'string' === typeof e
            ? (a = Sr(e))
            : ((a = hr({}, e)),
              gr(!a.pathname || !a.pathname.includes('?'), Wr('?', 'pathname', 'search', a)),
              gr(!a.pathname || !a.pathname.includes('#'), Wr('#', 'pathname', 'hash', a)),
              gr(!a.search || !a.search.includes('#'), Wr('#', 'search', 'hash', a)));
        let o,
          l = '' === e || '' === a.pathname,
          i = l ? '/' : a.pathname;
        if (null == i) o = n;
        else {
          let e = t.length - 1;
          if (!r && i.startsWith('..')) {
            let t = i.split('/');
            for (; '..' === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join('/');
          }
          o = e >= 0 ? t[e] : '/';
        }
        let s = (function (e, t) {
            void 0 === t && (t = '/');
            let { pathname: n, search: r = '', hash: a = '' } = 'string' === typeof e ? Sr(e) : e,
              o = n
                ? n.startsWith('/')
                  ? n
                  : (function (e, t) {
                      let n = t.replace(/\/+$/, '').split('/');
                      return (
                        e.split('/').forEach((e) => {
                          '..' === e ? n.length > 1 && n.pop() : '.' !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join('/') : '/'
                      );
                    })(n, t)
                : t;
            return { pathname: o, search: Qr(r), hash: Xr(a) };
          })(a, o),
          u = i && '/' !== i && i.endsWith('/'),
          c = (l || '.' === i) && n.endsWith('/');
        return s.pathname.endsWith('/') || (!u && !c) || (s.pathname += '/'), s;
      }
      const Kr = (e) => e.join('/').replace(/\/\/+/g, '/'),
        $r = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
        Qr = (e) => (e && '?' !== e ? (e.startsWith('?') ? e : '?' + e) : ''),
        Xr = (e) => (e && '#' !== e ? (e.startsWith('#') ? e : '#' + e) : '');
      Error;
      function qr(e) {
        return (
          null != e &&
          'number' === typeof e.status &&
          'string' === typeof e.statusText &&
          'boolean' === typeof e.internal &&
          'data' in e
        );
      }
      const Gr = ['post', 'put', 'patch', 'delete'],
        Yr = (new Set(Gr), ['get', ...Gr]);
      new Set(Yr), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol('deferred');
      function Jr() {
        return (
          (Jr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Jr.apply(this, arguments)
        );
      }
      const Zr = e.createContext(null);
      const ea = e.createContext(null);
      const ta = e.createContext(null);
      const na = e.createContext(null);
      const ra = e.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      const aa = e.createContext(null);
      function oa() {
        return null != e.useContext(na);
      }
      function la() {
        return oa() || gr(!1), e.useContext(na).location;
      }
      function ia(t) {
        e.useContext(ta).static || e.useLayoutEffect(t);
      }
      function sa() {
        let { isDataRoute: t } = e.useContext(ra);
        return t
          ? (function () {
              let { router: t } = ya(va.UseNavigateStable),
                n = xa(ga.UseNavigateStable),
                r = e.useRef(!1);
              ia(() => {
                r.current = !0;
              });
              let a = e.useCallback(
                function (e, a) {
                  void 0 === a && (a = {}),
                    r.current &&
                      ('number' === typeof e
                        ? t.navigate(e)
                        : t.navigate(e, Jr({ fromRouteId: n }, a)));
                },
                [t, n],
              );
              return a;
            })()
          : (function () {
              oa() || gr(!1);
              let t = e.useContext(Zr),
                { basename: n, future: r, navigator: a } = e.useContext(ta),
                { matches: o } = e.useContext(ra),
                { pathname: l } = la(),
                i = JSON.stringify(Hr(o, r.v7_relativeSplatPath)),
                s = e.useRef(!1);
              ia(() => {
                s.current = !0;
              });
              let u = e.useCallback(
                function (e, r) {
                  if ((void 0 === r && (r = {}), !s.current)) return;
                  if ('number' === typeof e) return void a.go(e);
                  let o = Vr(e, JSON.parse(i), l, 'path' === r.relative);
                  null == t &&
                    '/' !== n &&
                    (o.pathname = '/' === o.pathname ? n : Kr([n, o.pathname])),
                    (r.replace ? a.replace : a.push)(o, r.state, r);
                },
                [n, a, i, l, t],
              );
              return u;
            })();
      }
      function ua(t, n) {
        let { relative: r } = void 0 === n ? {} : n,
          { future: a } = e.useContext(ta),
          { matches: o } = e.useContext(ra),
          { pathname: l } = la(),
          i = JSON.stringify(Hr(o, a.v7_relativeSplatPath));
        return e.useMemo(() => Vr(t, JSON.parse(i), l, 'path' === r), [t, i, l, r]);
      }
      function ca(t, n, r, a) {
        oa() || gr(!1);
        let { navigator: o } = e.useContext(ta),
          { matches: l } = e.useContext(ra),
          i = l[l.length - 1],
          s = i ? i.params : {},
          u = (i && i.pathname, i ? i.pathnameBase : '/');
        i && i.route;
        let c,
          d = la();
        if (n) {
          var f;
          let e = 'string' === typeof n ? Sr(n) : n;
          '/' === u || (null == (f = e.pathname) ? void 0 : f.startsWith(u)) || gr(!1), (c = e);
        } else c = d;
        let p = c.pathname || '/',
          h = p;
        if ('/' !== u) {
          let e = u.replace(/^\//, '').split('/');
          h = '/' + p.replace(/^\//, '').split('/').slice(e.length).join('/');
        }
        let m = Cr(t, { pathname: h });
        let v = ma(
          m &&
            m.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, s, e.params),
                pathname: Kr([
                  u,
                  o.encodeLocation ? o.encodeLocation(e.pathname).pathname : e.pathname,
                ]),
                pathnameBase:
                  '/' === e.pathnameBase
                    ? u
                    : Kr([
                        u,
                        o.encodeLocation
                          ? o.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              }),
            ),
          l,
          r,
          a,
        );
        return n && v
          ? e.createElement(
              na.Provider,
              {
                value: {
                  location: Jr(
                    { pathname: '/', search: '', hash: '', state: null, key: 'default' },
                    c,
                  ),
                  navigationType: mr.Pop,
                },
              },
              v,
            )
          : v;
      }
      function da() {
        let t = (function () {
            var t;
            let n = e.useContext(aa),
              r = ba(ga.UseRouteError),
              a = xa(ga.UseRouteError);
            if (void 0 !== n) return n;
            return null == (t = r.errors) ? void 0 : t[a];
          })(),
          n = qr(t)
            ? t.status + ' ' + t.statusText
            : t instanceof Error
            ? t.message
            : JSON.stringify(t),
          r = t instanceof Error ? t.stack : null,
          a = 'rgba(200,200,200, 0.5)',
          o = { padding: '0.5rem', backgroundColor: a };
        return e.createElement(
          e.Fragment,
          null,
          e.createElement('h2', null, 'Unexpected Application Error!'),
          e.createElement('h3', { style: { fontStyle: 'italic' } }, n),
          r ? e.createElement('pre', { style: o }, r) : null,
          null,
        );
      }
      const fa = e.createElement(da, null);
      class pa extends e.Component {
        constructor(e) {
          super(e),
            (this.state = { location: e.location, revalidation: e.revalidation, error: e.error });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ('idle' !== t.revalidation && 'idle' === e.revalidation)
            ? { error: e.error, location: e.location, revalidation: e.revalidation }
            : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error('React Router caught the following error during render', e, t);
        }
        render() {
          return void 0 !== this.state.error
            ? e.createElement(
                ra.Provider,
                { value: this.props.routeContext },
                e.createElement(aa.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                }),
              )
            : this.props.children;
        }
      }
      function ha(t) {
        let { routeContext: n, match: r, children: a } = t,
          o = e.useContext(Zr);
        return (
          o &&
            o.static &&
            o.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = r.route.id),
          e.createElement(ra.Provider, { value: n }, a)
        );
      }
      function ma(t, n, r, a) {
        var o;
        if (
          (void 0 === n && (n = []),
          void 0 === r && (r = null),
          void 0 === a && (a = null),
          null == t)
        ) {
          var l;
          if (!r) return null;
          if (r.errors) t = r.matches;
          else {
            if (
              !(
                null != (l = a) &&
                l.v7_partialHydration &&
                0 === n.length &&
                !r.initialized &&
                r.matches.length > 0
              )
            )
              return null;
            t = r.matches;
          }
        }
        let i = t,
          s = null == (o = r) ? void 0 : o.errors;
        if (null != s) {
          let e = i.findIndex((e) => e.route.id && void 0 !== (null == s ? void 0 : s[e.route.id]));
          e >= 0 || gr(!1), (i = i.slice(0, Math.min(i.length, e + 1)));
        }
        let u = !1,
          c = -1;
        if (r && a && a.v7_partialHydration)
          for (let e = 0; e < i.length; e++) {
            let t = i[e];
            if (
              ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (c = e), t.route.id)
            ) {
              let { loaderData: e, errors: n } = r,
                a = t.route.loader && void 0 === e[t.route.id] && (!n || void 0 === n[t.route.id]);
              if (t.route.lazy || a) {
                (u = !0), (i = c >= 0 ? i.slice(0, c + 1) : [i[0]]);
                break;
              }
            }
          }
        return i.reduceRight((t, a, o) => {
          let l,
            d = !1,
            f = null,
            p = null;
          var h;
          r &&
            ((l = s && a.route.id ? s[a.route.id] : void 0),
            (f = a.route.errorElement || fa),
            u &&
              (c < 0 && 0 === o
                ? ((h = 'route-fallback'), !1 || wa[h] || (wa[h] = !0), (d = !0), (p = null))
                : c === o && ((d = !0), (p = a.route.hydrateFallbackElement || null))));
          let m = n.concat(i.slice(0, o + 1)),
            v = () => {
              let n;
              return (
                (n = l
                  ? f
                  : d
                  ? p
                  : a.route.Component
                  ? e.createElement(a.route.Component, null)
                  : a.route.element
                  ? a.route.element
                  : t),
                e.createElement(ha, {
                  match: a,
                  routeContext: { outlet: t, matches: m, isDataRoute: null != r },
                  children: n,
                })
              );
            };
          return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === o)
            ? e.createElement(pa, {
                location: r.location,
                revalidation: r.revalidation,
                component: f,
                error: l,
                children: v(),
                routeContext: { outlet: null, matches: m, isDataRoute: !0 },
              })
            : v();
        }, null);
      }
      var va = (function (e) {
          return (
            (e.UseBlocker = 'useBlocker'),
            (e.UseRevalidator = 'useRevalidator'),
            (e.UseNavigateStable = 'useNavigate'),
            e
          );
        })(va || {}),
        ga = (function (e) {
          return (
            (e.UseBlocker = 'useBlocker'),
            (e.UseLoaderData = 'useLoaderData'),
            (e.UseActionData = 'useActionData'),
            (e.UseRouteError = 'useRouteError'),
            (e.UseNavigation = 'useNavigation'),
            (e.UseRouteLoaderData = 'useRouteLoaderData'),
            (e.UseMatches = 'useMatches'),
            (e.UseRevalidator = 'useRevalidator'),
            (e.UseNavigateStable = 'useNavigate'),
            (e.UseRouteId = 'useRouteId'),
            e
          );
        })(ga || {});
      function ya(t) {
        let n = e.useContext(Zr);
        return n || gr(!1), n;
      }
      function ba(t) {
        let n = e.useContext(ea);
        return n || gr(!1), n;
      }
      function xa(t) {
        let n = (function () {
            let t = e.useContext(ra);
            return t || gr(!1), t;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || gr(!1), r.route.id;
      }
      const wa = {};
      t.startTransition;
      function Sa(e) {
        gr(!1);
      }
      function Ea(t) {
        let {
          basename: n = '/',
          children: r = null,
          location: a,
          navigationType: o = mr.Pop,
          navigator: l,
          static: i = !1,
          future: s,
        } = t;
        oa() && gr(!1);
        let u = n.replace(/^\/*/, '/'),
          c = e.useMemo(
            () => ({
              basename: u,
              navigator: l,
              static: i,
              future: Jr({ v7_relativeSplatPath: !1 }, s),
            }),
            [u, s, l, i],
          );
        'string' === typeof a && (a = Sr(a));
        let {
            pathname: d = '/',
            search: f = '',
            hash: p = '',
            state: h = null,
            key: m = 'default',
          } = a,
          v = e.useMemo(() => {
            let e = Br(d, u);
            return null == e
              ? null
              : {
                  location: { pathname: e, search: f, hash: p, state: h, key: m },
                  navigationType: o,
                };
          }, [u, d, f, p, h, m, o]);
        return null == v
          ? null
          : e.createElement(
              ta.Provider,
              { value: c },
              e.createElement(na.Provider, { children: r, value: v }),
            );
      }
      function ka(e) {
        let { children: t, location: n } = e;
        return ca(Ca(t), n);
      }
      new Promise(() => {});
      e.Component;
      function Ca(t, n) {
        void 0 === n && (n = []);
        let r = [];
        return (
          e.Children.forEach(t, (t, a) => {
            if (!e.isValidElement(t)) return;
            let o = [...n, a];
            if (t.type === e.Fragment) return void r.push.apply(r, Ca(t.props.children, o));
            t.type !== Sa && gr(!1), t.props.index && t.props.children && gr(!1);
            let l = {
              id: t.props.id || o.join('-'),
              caseSensitive: t.props.caseSensitive,
              element: t.props.element,
              Component: t.props.Component,
              index: t.props.index,
              path: t.props.path,
              loader: t.props.loader,
              action: t.props.action,
              errorElement: t.props.errorElement,
              ErrorBoundary: t.props.ErrorBoundary,
              hasErrorBoundary: null != t.props.ErrorBoundary || null != t.props.errorElement,
              shouldRevalidate: t.props.shouldRevalidate,
              handle: t.props.handle,
              lazy: t.props.lazy,
            };
            t.props.children && (l.children = Ca(t.props.children, o)), r.push(l);
          }),
          r
        );
      }
      function Na() {
        return (
          (Na = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Na.apply(this, arguments)
        );
      }
      function Ra(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
      const ja = [
        'onClick',
        'relative',
        'reloadDocument',
        'replace',
        'state',
        'target',
        'to',
        'preventScrollReset',
        'unstable_viewTransition',
      ];
      try {
        window.__reactRouterVersion = '6';
      } catch (pu) {}
      new Map();
      const Pa = t.startTransition;
      D.flushSync, t.useId;
      function Ta(t) {
        let { basename: n, children: r, future: a, window: o } = t,
          l = e.useRef();
        null == l.current &&
          (l.current = (function (e) {
            return (
              void 0 === e && (e = {}),
              Er(
                function (e, t) {
                  let { pathname: n, search: r, hash: a } = e.location;
                  return xr(
                    '',
                    { pathname: n, search: r, hash: a },
                    (t.state && t.state.usr) || null,
                    (t.state && t.state.key) || 'default',
                  );
                },
                function (e, t) {
                  return 'string' === typeof t ? t : wr(t);
                },
                null,
                e,
              )
            );
          })({ window: o, v5Compat: !0 }));
        let i = l.current,
          [s, u] = e.useState({ action: i.action, location: i.location }),
          { v7_startTransition: c } = a || {},
          d = e.useCallback(
            (e) => {
              c && Pa ? Pa(() => u(e)) : u(e);
            },
            [u, c],
          );
        return (
          e.useLayoutEffect(() => i.listen(d), [i, d]),
          e.createElement(Ea, {
            basename: n,
            children: r,
            location: s.location,
            navigationType: s.action,
            navigator: i,
            future: a,
          })
        );
      }
      const Oa =
          'undefined' !== typeof window &&
          'undefined' !== typeof window.document &&
          'undefined' !== typeof window.document.createElement,
        Aa = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        _a = e.forwardRef(function (t, n) {
          let r,
            {
              onClick: a,
              relative: o,
              reloadDocument: l,
              replace: i,
              state: s,
              target: u,
              to: c,
              preventScrollReset: d,
              unstable_viewTransition: f,
            } = t,
            p = Ra(t, ja),
            { basename: h } = e.useContext(ta),
            m = !1;
          if ('string' === typeof c && Aa.test(c) && ((r = c), Oa))
            try {
              let e = new URL(window.location.href),
                t = c.startsWith('//') ? new URL(e.protocol + c) : new URL(c),
                n = Br(t.pathname, h);
              t.origin === e.origin && null != n ? (c = n + t.search + t.hash) : (m = !0);
            } catch (pu) {}
          let v = (function (t, n) {
              let { relative: r } = void 0 === n ? {} : n;
              oa() || gr(!1);
              let { basename: a, navigator: o } = e.useContext(ta),
                { hash: l, pathname: i, search: s } = ua(t, { relative: r }),
                u = i;
              return (
                '/' !== a && (u = '/' === i ? a : Kr([a, i])),
                o.createHref({ pathname: u, search: s, hash: l })
              );
            })(c, { relative: o }),
            g = (function (t, n) {
              let {
                  target: r,
                  replace: a,
                  state: o,
                  preventScrollReset: l,
                  relative: i,
                  unstable_viewTransition: s,
                } = void 0 === n ? {} : n,
                u = sa(),
                c = la(),
                d = ua(t, { relative: i });
              return e.useCallback(
                (e) => {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || '_self' === t) &&
                        !(function (e) {
                          return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                        })(e)
                      );
                    })(e, r)
                  ) {
                    e.preventDefault();
                    let n = void 0 !== a ? a : wr(c) === wr(d);
                    u(t, {
                      replace: n,
                      state: o,
                      preventScrollReset: l,
                      relative: i,
                      unstable_viewTransition: s,
                    });
                  }
                },
                [c, u, d, a, o, r, t, l, i, s],
              );
            })(c, {
              replace: i,
              state: s,
              target: u,
              preventScrollReset: d,
              relative: o,
              unstable_viewTransition: f,
            });
          return e.createElement(
            'a',
            Na({}, p, {
              href: r || v,
              onClick:
                m || l
                  ? a
                  : function (e) {
                      a && a(e), e.defaultPrevented || g(e);
                    },
              ref: n,
              target: u,
            }),
          );
        });
      var La, Ia;
      (function (e) {
        (e.UseScrollRestoration = 'useScrollRestoration'),
          (e.UseSubmit = 'useSubmit'),
          (e.UseSubmitFetcher = 'useSubmitFetcher'),
          (e.UseFetcher = 'useFetcher'),
          (e.useViewTransitionState = 'useViewTransitionState');
      })(La || (La = {})),
        (function (e) {
          (e.UseFetcher = 'useFetcher'),
            (e.UseFetchers = 'useFetchers'),
            (e.UseScrollRestoration = 'useScrollRestoration');
        })(Ia || (Ia = {}));
      var za = function () {
        return (
          (za =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }),
          za.apply(this, arguments)
        );
      };
      Object.create;
      function Da(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, a = 0, o = t.length; a < o; a++)
            (!r && a in t) || (r || (r = Array.prototype.slice.call(t, 0, a)), (r[a] = t[a]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      Object.create;
      'function' === typeof SuppressedError && SuppressedError;
      var Fa = n(324),
        Ma = n.n(Fa),
        Ba = '-ms-',
        Wa = '-moz-',
        Ua = '-webkit-',
        Ha = 'comm',
        Va = 'rule',
        Ka = 'decl',
        $a = '@keyframes',
        Qa = Math.abs,
        Xa = String.fromCharCode,
        qa = Object.assign;
      function Ga(e) {
        return e.trim();
      }
      function Ya(e, t) {
        return (e = t.exec(e)) ? e[0] : e;
      }
      function Ja(e, t, n) {
        return e.replace(t, n);
      }
      function Za(e, t, n) {
        return e.indexOf(t, n);
      }
      function eo(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function to(e, t, n) {
        return e.slice(t, n);
      }
      function no(e) {
        return e.length;
      }
      function ro(e) {
        return e.length;
      }
      function ao(e, t) {
        return t.push(e), e;
      }
      function oo(e, t) {
        return e.filter(function (e) {
          return !Ya(e, t);
        });
      }
      var lo = 1,
        io = 1,
        so = 0,
        uo = 0,
        co = 0,
        fo = '';
      function po(e, t, n, r, a, o, l, i) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: a,
          children: o,
          line: lo,
          column: io,
          length: l,
          return: '',
          siblings: i,
        };
      }
      function ho(e, t) {
        return qa(po('', null, null, '', null, null, 0, e.siblings), e, { length: -e.length }, t);
      }
      function mo(e) {
        for (; e.root; ) e = ho(e.root, { children: [e] });
        ao(e, e.siblings);
      }
      function vo() {
        return (co = uo > 0 ? eo(fo, --uo) : 0), io--, 10 === co && ((io = 1), lo--), co;
      }
      function go() {
        return (co = uo < so ? eo(fo, uo++) : 0), io++, 10 === co && ((io = 1), lo++), co;
      }
      function yo() {
        return eo(fo, uo);
      }
      function bo() {
        return uo;
      }
      function xo(e, t) {
        return to(fo, e, t);
      }
      function wo(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function So(e) {
        return (lo = io = 1), (so = no((fo = e))), (uo = 0), [];
      }
      function Eo(e) {
        return (fo = ''), e;
      }
      function ko(e) {
        return Ga(xo(uo - 1, Ro(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function Co(e) {
        for (; (co = yo()) && co < 33; ) go();
        return wo(e) > 2 || wo(co) > 3 ? '' : ' ';
      }
      function No(e, t) {
        for (
          ;
          --t && go() && !(co < 48 || co > 102 || (co > 57 && co < 65) || (co > 70 && co < 97));

        );
        return xo(e, bo() + (t < 6 && 32 == yo() && 32 == go()));
      }
      function Ro(e) {
        for (; go(); )
          switch (co) {
            case e:
              return uo;
            case 34:
            case 39:
              34 !== e && 39 !== e && Ro(co);
              break;
            case 40:
              41 === e && Ro(e);
              break;
            case 92:
              go();
          }
        return uo;
      }
      function jo(e, t) {
        for (; go() && e + co !== 57 && (e + co !== 84 || 47 !== yo()); );
        return '/*' + xo(t, uo - 1) + '*' + Xa(47 === e ? e : go());
      }
      function Po(e) {
        for (; !wo(yo()); ) go();
        return xo(e, uo);
      }
      function To(e, t) {
        for (var n = '', r = 0; r < e.length; r++) n += t(e[r], r, e, t) || '';
        return n;
      }
      function Oo(e, t, n, r) {
        switch (e.type) {
          case '@layer':
            if (e.children.length) break;
          case '@import':
          case Ka:
            return (e.return = e.return || e.value);
          case Ha:
            return '';
          case $a:
            return (e.return = e.value + '{' + To(e.children, r) + '}');
          case Va:
            if (!no((e.value = e.props.join(',')))) return '';
        }
        return no((n = To(e.children, r))) ? (e.return = e.value + '{' + n + '}') : '';
      }
      function Ao(e, t, n) {
        switch (
          (function (e, t) {
            return 45 ^ eo(e, 0)
              ? (((((((t << 2) ^ eo(e, 0)) << 2) ^ eo(e, 1)) << 2) ^ eo(e, 2)) << 2) ^ eo(e, 3)
              : 0;
          })(e, t)
        ) {
          case 5103:
            return Ua + 'print-' + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return Ua + e + e;
          case 4789:
            return Wa + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return Ua + e + Wa + e + Ba + e + e;
          case 5936:
            switch (eo(e, t + 11)) {
              case 114:
                return Ua + e + Ba + Ja(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
              case 108:
                return Ua + e + Ba + Ja(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
              case 45:
                return Ua + e + Ba + Ja(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
            }
          case 6828:
          case 4268:
          case 2903:
            return Ua + e + Ba + e + e;
          case 6165:
            return Ua + e + Ba + 'flex-' + e + e;
          case 5187:
            return Ua + e + Ja(e, /(\w+).+(:[^]+)/, Ua + 'box-$1$2' + Ba + 'flex-$1$2') + e;
          case 5443:
            return (
              Ua +
              e +
              Ba +
              'flex-item-' +
              Ja(e, /flex-|-self/g, '') +
              (Ya(e, /flex-|baseline/) ? '' : Ba + 'grid-row-' + Ja(e, /flex-|-self/g, '')) +
              e
            );
          case 4675:
            return Ua + e + Ba + 'flex-line-pack' + Ja(e, /align-content|flex-|-self/g, '') + e;
          case 5548:
            return Ua + e + Ba + Ja(e, 'shrink', 'negative') + e;
          case 5292:
            return Ua + e + Ba + Ja(e, 'basis', 'preferred-size') + e;
          case 6060:
            return Ua + 'box-' + Ja(e, '-grow', '') + Ua + e + Ba + Ja(e, 'grow', 'positive') + e;
          case 4554:
            return Ua + Ja(e, /([^-])(transform)/g, '$1' + Ua + '$2') + e;
          case 6187:
            return Ja(Ja(Ja(e, /(zoom-|grab)/, Ua + '$1'), /(image-set)/, Ua + '$1'), e, '') + e;
          case 5495:
          case 3959:
            return Ja(e, /(image-set\([^]*)/, Ua + '$1$`$1');
          case 4968:
            return (
              Ja(
                Ja(e, /(.+:)(flex-)?(.*)/, Ua + 'box-pack:$3' + Ba + 'flex-pack:$3'),
                /s.+-b[^;]+/,
                'justify',
              ) +
              Ua +
              e +
              e
            );
          case 4200:
            if (!Ya(e, /flex-|baseline/)) return Ba + 'grid-column-align' + to(e, t) + e;
            break;
          case 2592:
          case 3360:
            return Ba + Ja(e, 'template-', '') + e;
          case 4384:
          case 3616:
            return n &&
              n.some(function (e, n) {
                return (t = n), Ya(e.props, /grid-\w+-end/);
              })
              ? ~Za(e + (n = n[t].value), 'span', 0)
                ? e
                : Ba +
                  Ja(e, '-start', '') +
                  e +
                  Ba +
                  'grid-row-span:' +
                  (~Za(n, 'span', 0) ? Ya(n, /\d+/) : +Ya(n, /\d+/) - +Ya(e, /\d+/)) +
                  ';'
              : Ba + Ja(e, '-start', '') + e;
          case 4896:
          case 4128:
            return n &&
              n.some(function (e) {
                return Ya(e.props, /grid-\w+-start/);
              })
              ? e
              : Ba + Ja(Ja(e, '-end', '-span'), 'span ', '') + e;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return Ja(e, /(.+)-inline(.+)/, Ua + '$1$2') + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (no(e) - 1 - t > 6)
              switch (eo(e, t + 1)) {
                case 109:
                  if (45 !== eo(e, t + 4)) break;
                case 102:
                  return (
                    Ja(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      '$1' + Ua + '$2-$3$1' + Wa + (108 == eo(e, t + 3) ? '$3' : '$2-$3'),
                    ) + e
                  );
                case 115:
                  return ~Za(e, 'stretch', 0)
                    ? Ao(Ja(e, 'stretch', 'fill-available'), t, n) + e
                    : e;
              }
            break;
          case 5152:
          case 5920:
            return Ja(
              e,
              /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
              function (t, n, r, a, o, l, i) {
                return (
                  Ba + n + ':' + r + i + (a ? Ba + n + '-span:' + (o ? l : +l - +r) + i : '') + e
                );
              },
            );
          case 4949:
            if (121 === eo(e, t + 6)) return Ja(e, ':', ':' + Ua) + e;
            break;
          case 6444:
            switch (eo(e, 45 === eo(e, 14) ? 18 : 11)) {
              case 120:
                return (
                  Ja(
                    e,
                    /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                    '$1' +
                      Ua +
                      (45 === eo(e, 14) ? 'inline-' : '') +
                      'box$3$1' +
                      Ua +
                      '$2$3$1' +
                      Ba +
                      '$2box$3',
                  ) + e
                );
              case 100:
                return Ja(e, ':', ':' + Ba) + e;
            }
            break;
          case 5719:
          case 2647:
          case 2135:
          case 3927:
          case 2391:
            return Ja(e, 'scroll-', 'scroll-snap-') + e;
        }
        return e;
      }
      function _o(e, t, n, r) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case Ka:
              return void (e.return = Ao(e.value, e.length, n));
            case $a:
              return To([ho(e, { value: Ja(e.value, '@', '@' + Ua) })], r);
            case Va:
              if (e.length)
                return (function (e, t) {
                  return e.map(t).join('');
                })((n = e.props), function (t) {
                  switch (Ya(t, (r = /(::plac\w+|:read-\w+)/))) {
                    case ':read-only':
                    case ':read-write':
                      mo(ho(e, { props: [Ja(t, /:(read-\w+)/, ':-moz-$1')] })),
                        mo(ho(e, { props: [t] })),
                        qa(e, { props: oo(n, r) });
                      break;
                    case '::placeholder':
                      mo(ho(e, { props: [Ja(t, /:(plac\w+)/, ':' + Ua + 'input-$1')] })),
                        mo(ho(e, { props: [Ja(t, /:(plac\w+)/, ':-moz-$1')] })),
                        mo(ho(e, { props: [Ja(t, /:(plac\w+)/, Ba + 'input-$1')] })),
                        mo(ho(e, { props: [t] })),
                        qa(e, { props: oo(n, r) });
                  }
                  return '';
                });
          }
      }
      function Lo(e) {
        return Eo(Io('', null, null, null, [''], (e = So(e)), 0, [0], e));
      }
      function Io(e, t, n, r, a, o, l, i, s) {
        for (
          var u = 0,
            c = 0,
            d = l,
            f = 0,
            p = 0,
            h = 0,
            m = 1,
            v = 1,
            g = 1,
            y = 0,
            b = '',
            x = a,
            w = o,
            S = r,
            E = b;
          v;

        )
          switch (((h = y), (y = go()))) {
            case 40:
              if (108 != h && 58 == eo(E, d - 1)) {
                -1 != Za((E += Ja(ko(y), '&', '&\f')), '&\f', Qa(u ? i[u - 1] : 0)) && (g = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              E += ko(y);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              E += Co(h);
              break;
            case 92:
              E += No(bo() - 1, 7);
              continue;
            case 47:
              switch (yo()) {
                case 42:
                case 47:
                  ao(Do(jo(go(), bo()), t, n, s), s);
                  break;
                default:
                  E += '/';
              }
              break;
            case 123 * m:
              i[u++] = no(E) * g;
            case 125 * m:
            case 59:
            case 0:
              switch (y) {
                case 0:
                case 125:
                  v = 0;
                case 59 + c:
                  -1 == g && (E = Ja(E, /\f/g, '')),
                    p > 0 &&
                      no(E) - d &&
                      ao(
                        p > 32
                          ? Fo(E + ';', r, n, d - 1, s)
                          : Fo(Ja(E, ' ', '') + ';', r, n, d - 2, s),
                        s,
                      );
                  break;
                case 59:
                  E += ';';
                default:
                  if (
                    (ao((S = zo(E, t, n, u, c, a, i, b, (x = []), (w = []), d, o)), o), 123 === y)
                  )
                    if (0 === c) Io(E, t, S, S, x, o, d, i, w);
                    else
                      switch (99 === f && 110 === eo(E, 3) ? 100 : f) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          Io(
                            e,
                            S,
                            S,
                            r && ao(zo(e, S, S, 0, 0, a, i, b, a, (x = []), d, w), w),
                            a,
                            w,
                            d,
                            i,
                            r ? x : w,
                          );
                          break;
                        default:
                          Io(E, S, S, S, [''], w, 0, i, w);
                      }
              }
              (u = c = p = 0), (m = g = 1), (b = E = ''), (d = l);
              break;
            case 58:
              (d = 1 + no(E)), (p = h);
            default:
              if (m < 1)
                if (123 == y) --m;
                else if (125 == y && 0 == m++ && 125 == vo()) continue;
              switch (((E += Xa(y)), y * m)) {
                case 38:
                  g = c > 0 ? 1 : ((E += '\f'), -1);
                  break;
                case 44:
                  (i[u++] = (no(E) - 1) * g), (g = 1);
                  break;
                case 64:
                  45 === yo() && (E += ko(go())),
                    (f = yo()),
                    (c = d = no((b = E += Po(bo())))),
                    y++;
                  break;
                case 45:
                  45 === h && 2 == no(E) && (m = 0);
              }
          }
        return o;
      }
      function zo(e, t, n, r, a, o, l, i, s, u, c, d) {
        for (var f = a - 1, p = 0 === a ? o : [''], h = ro(p), m = 0, v = 0, g = 0; m < r; ++m)
          for (var y = 0, b = to(e, f + 1, (f = Qa((v = l[m])))), x = e; y < h; ++y)
            (x = Ga(v > 0 ? p[y] + ' ' + b : Ja(b, /&\f/g, p[y]))) && (s[g++] = x);
        return po(e, t, n, 0 === a ? Va : i, s, u, c, d);
      }
      function Do(e, t, n, r) {
        return po(e, t, n, Ha, Xa(co), to(e, 2, -2), 0, r);
      }
      function Fo(e, t, n, r, a) {
        return po(e, t, n, Ka, to(e, 0, r), to(e, r + 1, -1), r, a);
      }
      var Mo = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        Bo =
          ('undefined' != typeof process &&
            ({
              NODE_ENV: 'production',
              PUBLIC_URL: '',
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
            }.REACT_APP_SC_ATTR ||
              {
                NODE_ENV: 'production',
                PUBLIC_URL: '',
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.SC_ATTR)) ||
          'data-styled',
        Wo = 'active',
        Uo = 'data-styled-version',
        Ho = '6.1.13',
        Vo = '/*!sc*/\n',
        Ko = 'undefined' != typeof window && 'HTMLElement' in window,
        $o = Boolean(
          'boolean' == typeof SC_DISABLE_SPEEDY
            ? SC_DISABLE_SPEEDY
            : 'undefined' != typeof process &&
              void 0 !==
                {
                  NODE_ENV: 'production',
                  PUBLIC_URL: '',
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY &&
              '' !==
                {
                  NODE_ENV: 'production',
                  PUBLIC_URL: '',
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY
            ? 'false' !==
                {
                  NODE_ENV: 'production',
                  PUBLIC_URL: '',
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY &&
              {
                NODE_ENV: 'production',
                PUBLIC_URL: '',
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.REACT_APP_SC_DISABLE_SPEEDY
            : 'undefined' != typeof process &&
              void 0 !==
                {
                  NODE_ENV: 'production',
                  PUBLIC_URL: '',
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              '' !==
                {
                  NODE_ENV: 'production',
                  PUBLIC_URL: '',
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              'false' !==
                {
                  NODE_ENV: 'production',
                  PUBLIC_URL: '',
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              {
                NODE_ENV: 'production',
                PUBLIC_URL: '',
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.SC_DISABLE_SPEEDY,
        ),
        Qo = (new Set(), Object.freeze([])),
        Xo = Object.freeze({});
      function qo(e, t, n) {
        return void 0 === n && (n = Xo), (e.theme !== n.theme && e.theme) || t || n.theme;
      }
      var Go = new Set([
          'a',
          'abbr',
          'address',
          'area',
          'article',
          'aside',
          'audio',
          'b',
          'base',
          'bdi',
          'bdo',
          'big',
          'blockquote',
          'body',
          'br',
          'button',
          'canvas',
          'caption',
          'cite',
          'code',
          'col',
          'colgroup',
          'data',
          'datalist',
          'dd',
          'del',
          'details',
          'dfn',
          'dialog',
          'div',
          'dl',
          'dt',
          'em',
          'embed',
          'fieldset',
          'figcaption',
          'figure',
          'footer',
          'form',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'header',
          'hgroup',
          'hr',
          'html',
          'i',
          'iframe',
          'img',
          'input',
          'ins',
          'kbd',
          'keygen',
          'label',
          'legend',
          'li',
          'link',
          'main',
          'map',
          'mark',
          'menu',
          'menuitem',
          'meta',
          'meter',
          'nav',
          'noscript',
          'object',
          'ol',
          'optgroup',
          'option',
          'output',
          'p',
          'param',
          'picture',
          'pre',
          'progress',
          'q',
          'rp',
          'rt',
          'ruby',
          's',
          'samp',
          'script',
          'section',
          'select',
          'small',
          'source',
          'span',
          'strong',
          'style',
          'sub',
          'summary',
          'sup',
          'table',
          'tbody',
          'td',
          'textarea',
          'tfoot',
          'th',
          'thead',
          'time',
          'tr',
          'track',
          'u',
          'ul',
          'use',
          'var',
          'video',
          'wbr',
          'circle',
          'clipPath',
          'defs',
          'ellipse',
          'foreignObject',
          'g',
          'image',
          'line',
          'linearGradient',
          'marker',
          'mask',
          'path',
          'pattern',
          'polygon',
          'polyline',
          'radialGradient',
          'rect',
          'stop',
          'svg',
          'text',
          'tspan',
        ]),
        Yo = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        Jo = /(^-|-$)/g;
      function Zo(e) {
        return e.replace(Yo, '-').replace(Jo, '');
      }
      var el = /(a)(d)/gi,
        tl = function (e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97));
        };
      function nl(e) {
        var t,
          n = '';
        for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = tl(t % 52) + n;
        return (tl(t % 52) + n).replace(el, '$1-$2');
      }
      var rl,
        al = function (e, t) {
          for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
          return e;
        },
        ol = function (e) {
          return al(5381, e);
        };
      function ll(e) {
        return nl(ol(e) >>> 0);
      }
      function il(e) {
        return e.displayName || e.name || 'Component';
      }
      function sl(e) {
        return 'string' == typeof e && !0;
      }
      var ul = 'function' == typeof Symbol && Symbol.for,
        cl = ul ? Symbol.for('react.memo') : 60115,
        dl = ul ? Symbol.for('react.forward_ref') : 60112,
        fl = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        pl = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        hl = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        ml =
          (((rl = {})[dl] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
          }),
          (rl[cl] = hl),
          rl);
      function vl(e) {
        return ('type' in (t = e) && t.type.$$typeof) === cl
          ? hl
          : '$$typeof' in e
          ? ml[e.$$typeof]
          : fl;
        var t;
      }
      var gl = Object.defineProperty,
        yl = Object.getOwnPropertyNames,
        bl = Object.getOwnPropertySymbols,
        xl = Object.getOwnPropertyDescriptor,
        wl = Object.getPrototypeOf,
        Sl = Object.prototype;
      function El(e, t, n) {
        if ('string' != typeof t) {
          if (Sl) {
            var r = wl(t);
            r && r !== Sl && El(e, r, n);
          }
          var a = yl(t);
          bl && (a = a.concat(bl(t)));
          for (var o = vl(e), l = vl(t), i = 0; i < a.length; ++i) {
            var s = a[i];
            if (!(s in pl || (n && n[s]) || (l && s in l) || (o && s in o))) {
              var u = xl(t, s);
              try {
                gl(e, s, u);
              } catch (e) {}
            }
          }
        }
        return e;
      }
      function kl(e) {
        return 'function' == typeof e;
      }
      function Cl(e) {
        return 'object' == typeof e && 'styledComponentId' in e;
      }
      function Nl(e, t) {
        return e && t ? ''.concat(e, ' ').concat(t) : e || t || '';
      }
      function Rl(e, t) {
        if (0 === e.length) return '';
        for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
        return n;
      }
      function jl(e) {
        return (
          null !== e &&
          'object' == typeof e &&
          e.constructor.name === Object.name &&
          !('props' in e && e.$$typeof)
        );
      }
      function Pl(e, t, n) {
        if ((void 0 === n && (n = !1), !n && !jl(e) && !Array.isArray(e))) return t;
        if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Pl(e[r], t[r]);
        else if (jl(t)) for (var r in t) e[r] = Pl(e[r], t[r]);
        return e;
      }
      function Tl(e, t) {
        Object.defineProperty(e, 'toString', { value: t });
      }
      function Ol(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return new Error(
          'An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#'
            .concat(e, ' for more information.')
            .concat(t.length > 0 ? ' Args: '.concat(t.join(', ')) : ''),
        );
      }
      var Al = (function () {
          function e(e) {
            (this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = e);
          }
          return (
            (e.prototype.indexOfGroup = function (e) {
              for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
              return t;
            }),
            (e.prototype.insertRules = function (e, t) {
              if (e >= this.groupSizes.length) {
                for (var n = this.groupSizes, r = n.length, a = r; e >= a; )
                  if ((a <<= 1) < 0) throw Ol(16, ''.concat(e));
                (this.groupSizes = new Uint32Array(a)), this.groupSizes.set(n), (this.length = a);
                for (var o = r; o < a; o++) this.groupSizes[o] = 0;
              }
              for (var l = this.indexOfGroup(e + 1), i = ((o = 0), t.length); o < i; o++)
                this.tag.insertRule(l, t[o]) && (this.groupSizes[e]++, l++);
            }),
            (e.prototype.clearGroup = function (e) {
              if (e < this.length) {
                var t = this.groupSizes[e],
                  n = this.indexOfGroup(e),
                  r = n + t;
                this.groupSizes[e] = 0;
                for (var a = n; a < r; a++) this.tag.deleteRule(n);
              }
            }),
            (e.prototype.getGroup = function (e) {
              var t = '';
              if (e >= this.length || 0 === this.groupSizes[e]) return t;
              for (
                var n = this.groupSizes[e], r = this.indexOfGroup(e), a = r + n, o = r;
                o < a;
                o++
              )
                t += ''.concat(this.tag.getRule(o)).concat(Vo);
              return t;
            }),
            e
          );
        })(),
        _l = new Map(),
        Ll = new Map(),
        Il = 1,
        zl = function (e) {
          if (_l.has(e)) return _l.get(e);
          for (; Ll.has(Il); ) Il++;
          var t = Il++;
          return _l.set(e, t), Ll.set(t, e), t;
        },
        Dl = function (e, t) {
          (Il = t + 1), _l.set(e, t), Ll.set(t, e);
        },
        Fl = 'style['.concat(Bo, '][').concat(Uo, '="').concat(Ho, '"]'),
        Ml = new RegExp('^'.concat(Bo, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),
        Bl = function (e, t, n) {
          for (var r, a = n.split(','), o = 0, l = a.length; o < l; o++)
            (r = a[o]) && e.registerName(t, r);
        },
        Wl = function (e, t) {
          for (
            var n,
              r = (null !== (n = t.textContent) && void 0 !== n ? n : '').split(Vo),
              a = [],
              o = 0,
              l = r.length;
            o < l;
            o++
          ) {
            var i = r[o].trim();
            if (i) {
              var s = i.match(Ml);
              if (s) {
                var u = 0 | parseInt(s[1], 10),
                  c = s[2];
                0 !== u && (Dl(c, u), Bl(e, c, s[3]), e.getTag().insertRules(u, a)), (a.length = 0);
              } else a.push(i);
            }
          }
        },
        Ul = function (e) {
          for (var t = document.querySelectorAll(Fl), n = 0, r = t.length; n < r; n++) {
            var a = t[n];
            a &&
              a.getAttribute(Bo) !== Wo &&
              (Wl(e, a), a.parentNode && a.parentNode.removeChild(a));
          }
        };
      function Hl() {
        return n.nc;
      }
      var Vl = function (e) {
          var t = document.head,
            n = e || t,
            r = document.createElement('style'),
            a = (function (e) {
              var t = Array.from(e.querySelectorAll('style['.concat(Bo, ']')));
              return t[t.length - 1];
            })(n),
            o = void 0 !== a ? a.nextSibling : null;
          r.setAttribute(Bo, Wo), r.setAttribute(Uo, Ho);
          var l = Hl();
          return l && r.setAttribute('nonce', l), n.insertBefore(r, o), r;
        },
        Kl = (function () {
          function e(e) {
            (this.element = Vl(e)),
              this.element.appendChild(document.createTextNode('')),
              (this.sheet = (function (e) {
                if (e.sheet) return e.sheet;
                for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
                  var a = t[n];
                  if (a.ownerNode === e) return a;
                }
                throw Ol(17);
              })(this.element)),
              (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              try {
                return this.sheet.insertRule(t, e), this.length++, !0;
              } catch (e) {
                return !1;
              }
            }),
            (e.prototype.deleteRule = function (e) {
              this.sheet.deleteRule(e), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              var t = this.sheet.cssRules[e];
              return t && t.cssText ? t.cssText : '';
            }),
            e
          );
        })(),
        $l = (function () {
          function e(e) {
            (this.element = Vl(e)), (this.nodes = this.element.childNodes), (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              if (e <= this.length && e >= 0) {
                var n = document.createTextNode(t);
                return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0;
              }
              return !1;
            }),
            (e.prototype.deleteRule = function (e) {
              this.element.removeChild(this.nodes[e]), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.nodes[e].textContent : '';
            }),
            e
          );
        })(),
        Ql = (function () {
          function e(e) {
            (this.rules = []), (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
            }),
            (e.prototype.deleteRule = function (e) {
              this.rules.splice(e, 1), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.rules[e] : '';
            }),
            e
          );
        })(),
        Xl = Ko,
        ql = { isServer: !Ko, useCSSOMInjection: !$o },
        Gl = (function () {
          function e(e, t, n) {
            void 0 === e && (e = Xo), void 0 === t && (t = {});
            var r = this;
            (this.options = za(za({}, ql), e)),
              (this.gs = t),
              (this.names = new Map(n)),
              (this.server = !!e.isServer),
              !this.server && Ko && Xl && ((Xl = !1), Ul(this)),
              Tl(this, function () {
                return (function (e) {
                  for (
                    var t = e.getTag(),
                      n = t.length,
                      r = '',
                      a = function (n) {
                        var a = (function (e) {
                          return Ll.get(e);
                        })(n);
                        if (void 0 === a) return 'continue';
                        var o = e.names.get(a),
                          l = t.getGroup(n);
                        if (void 0 === o || !o.size || 0 === l.length) return 'continue';
                        var i = ''.concat(Bo, '.g').concat(n, '[id="').concat(a, '"]'),
                          s = '';
                        void 0 !== o &&
                          o.forEach(function (e) {
                            e.length > 0 && (s += ''.concat(e, ','));
                          }),
                          (r += ''.concat(l).concat(i, '{content:"').concat(s, '"}').concat(Vo));
                      },
                      o = 0;
                    o < n;
                    o++
                  )
                    a(o);
                  return r;
                })(r);
              });
          }
          return (
            (e.registerId = function (e) {
              return zl(e);
            }),
            (e.prototype.rehydrate = function () {
              !this.server && Ko && Ul(this);
            }),
            (e.prototype.reconstructWithOptions = function (t, n) {
              return (
                void 0 === n && (n = !0),
                new e(za(za({}, this.options), t), this.gs, (n && this.names) || void 0)
              );
            }),
            (e.prototype.allocateGSInstance = function (e) {
              return (this.gs[e] = (this.gs[e] || 0) + 1);
            }),
            (e.prototype.getTag = function () {
              return (
                this.tag ||
                (this.tag =
                  ((e = (function (e) {
                    var t = e.useCSSOMInjection,
                      n = e.target;
                    return e.isServer ? new Ql(n) : t ? new Kl(n) : new $l(n);
                  })(this.options)),
                  new Al(e)))
              );
              var e;
            }),
            (e.prototype.hasNameForId = function (e, t) {
              return this.names.has(e) && this.names.get(e).has(t);
            }),
            (e.prototype.registerName = function (e, t) {
              if ((zl(e), this.names.has(e))) this.names.get(e).add(t);
              else {
                var n = new Set();
                n.add(t), this.names.set(e, n);
              }
            }),
            (e.prototype.insertRules = function (e, t, n) {
              this.registerName(e, t), this.getTag().insertRules(zl(e), n);
            }),
            (e.prototype.clearNames = function (e) {
              this.names.has(e) && this.names.get(e).clear();
            }),
            (e.prototype.clearRules = function (e) {
              this.getTag().clearGroup(zl(e)), this.clearNames(e);
            }),
            (e.prototype.clearTag = function () {
              this.tag = void 0;
            }),
            e
          );
        })(),
        Yl = /&/g,
        Jl = /^\s*\/\/.*$/gm;
      function Zl(e, t) {
        return e.map(function (e) {
          return (
            'rule' === e.type &&
              ((e.value = ''.concat(t, ' ').concat(e.value)),
              (e.value = e.value.replaceAll(',', ','.concat(t, ' '))),
              (e.props = e.props.map(function (e) {
                return ''.concat(t, ' ').concat(e);
              }))),
            Array.isArray(e.children) &&
              '@keyframes' !== e.type &&
              (e.children = Zl(e.children, t)),
            e
          );
        });
      }
      function ei(e) {
        var t,
          n,
          r,
          a = void 0 === e ? Xo : e,
          o = a.options,
          l = void 0 === o ? Xo : o,
          i = a.plugins,
          s = void 0 === i ? Qo : i,
          u = function (e, r, a) {
            return a.startsWith(n) && a.endsWith(n) && a.replaceAll(n, '').length > 0
              ? '.'.concat(t)
              : e;
          },
          c = s.slice();
        c.push(function (e) {
          e.type === Va &&
            e.value.includes('&') &&
            (e.props[0] = e.props[0].replace(Yl, n).replace(r, u));
        }),
          l.prefix && c.push(_o),
          c.push(Oo);
        var d = function (e, a, o, i) {
          void 0 === a && (a = ''),
            void 0 === o && (o = ''),
            void 0 === i && (i = '&'),
            (t = i),
            (n = a),
            (r = new RegExp('\\'.concat(n, '\\b'), 'g'));
          var s = e.replace(Jl, ''),
            u = Lo(o || a ? ''.concat(o, ' ').concat(a, ' { ').concat(s, ' }') : s);
          l.namespace && (u = Zl(u, l.namespace));
          var d,
            f = [];
          return (
            To(
              u,
              (function (e) {
                var t = ro(e);
                return function (n, r, a, o) {
                  for (var l = '', i = 0; i < t; i++) l += e[i](n, r, a, o) || '';
                  return l;
                };
              })(
                c.concat(
                  ((d = function (e) {
                    return f.push(e);
                  }),
                  function (e) {
                    e.root || ((e = e.return) && d(e));
                  }),
                ),
              ),
            ),
            f
          );
        };
        return (
          (d.hash = s.length
            ? s
                .reduce(function (e, t) {
                  return t.name || Ol(15), al(e, t.name);
                }, 5381)
                .toString()
            : ''),
          d
        );
      }
      var ti = new Gl(),
        ni = ei(),
        ri = e.createContext({ shouldForwardProp: void 0, styleSheet: ti, stylis: ni }),
        ai = (ri.Consumer, e.createContext(void 0));
      function oi() {
        return (0, e.useContext)(ri);
      }
      function li(t) {
        var n = (0, e.useState)(t.stylisPlugins),
          r = n[0],
          a = n[1],
          o = oi().styleSheet,
          l = (0, e.useMemo)(
            function () {
              var e = o;
              return (
                t.sheet
                  ? (e = t.sheet)
                  : t.target && (e = e.reconstructWithOptions({ target: t.target }, !1)),
                t.disableCSSOMInjection &&
                  (e = e.reconstructWithOptions({ useCSSOMInjection: !1 })),
                e
              );
            },
            [t.disableCSSOMInjection, t.sheet, t.target, o],
          ),
          i = (0, e.useMemo)(
            function () {
              return ei({
                options: { namespace: t.namespace, prefix: t.enableVendorPrefixes },
                plugins: r,
              });
            },
            [t.enableVendorPrefixes, t.namespace, r],
          );
        (0, e.useEffect)(
          function () {
            Ma()(r, t.stylisPlugins) || a(t.stylisPlugins);
          },
          [t.stylisPlugins],
        );
        var s = (0, e.useMemo)(
          function () {
            return { shouldForwardProp: t.shouldForwardProp, styleSheet: l, stylis: i };
          },
          [t.shouldForwardProp, l, i],
        );
        return e.createElement(
          ri.Provider,
          { value: s },
          e.createElement(ai.Provider, { value: i }, t.children),
        );
      }
      var ii = (function () {
          function e(e, t) {
            var n = this;
            (this.inject = function (e, t) {
              void 0 === t && (t = ni);
              var r = n.name + t.hash;
              e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, '@keyframes'));
            }),
              (this.name = e),
              (this.id = 'sc-keyframes-'.concat(e)),
              (this.rules = t),
              Tl(this, function () {
                throw Ol(12, String(n.name));
              });
          }
          return (
            (e.prototype.getName = function (e) {
              return void 0 === e && (e = ni), this.name + e.hash;
            }),
            e
          );
        })(),
        si = function (e) {
          return e >= 'A' && e <= 'Z';
        };
      function ui(e) {
        for (var t = '', n = 0; n < e.length; n++) {
          var r = e[n];
          if (1 === n && '-' === r && '-' === e[0]) return e;
          si(r) ? (t += '-' + r.toLowerCase()) : (t += r);
        }
        return t.startsWith('ms-') ? '-' + t : t;
      }
      var ci = function (e) {
          return null == e || !1 === e || '' === e;
        },
        di = function (e) {
          var t,
            n,
            r = [];
          for (var a in e) {
            var o = e[a];
            e.hasOwnProperty(a) &&
              !ci(o) &&
              ((Array.isArray(o) && o.isCss) || kl(o)
                ? r.push(''.concat(ui(a), ':'), o, ';')
                : jl(o)
                ? r.push.apply(r, Da(Da([''.concat(a, ' {')], di(o), !1), ['}'], !1))
                : r.push(
                    ''
                      .concat(ui(a), ': ')
                      .concat(
                        ((t = a),
                        null == (n = o) || 'boolean' == typeof n || '' === n
                          ? ''
                          : 'number' != typeof n || 0 === n || t in Mo || t.startsWith('--')
                          ? String(n).trim()
                          : ''.concat(n, 'px')),
                        ';',
                      ),
                  ));
          }
          return r;
        };
      function fi(e, t, n, r) {
        return ci(e)
          ? []
          : Cl(e)
          ? ['.'.concat(e.styledComponentId)]
          : kl(e)
          ? !kl((a = e)) || (a.prototype && a.prototype.isReactComponent) || !t
            ? [e]
            : fi(e(t), t, n, r)
          : e instanceof ii
          ? n
            ? (e.inject(n, r), [e.getName(r)])
            : [e]
          : jl(e)
          ? di(e)
          : Array.isArray(e)
          ? Array.prototype.concat.apply(
              Qo,
              e.map(function (e) {
                return fi(e, t, n, r);
              }),
            )
          : [e.toString()];
        var a;
      }
      function pi(e) {
        for (var t = 0; t < e.length; t += 1) {
          var n = e[t];
          if (kl(n) && !Cl(n)) return !1;
        }
        return !0;
      }
      var hi = ol(Ho),
        mi = (function () {
          function e(e, t, n) {
            (this.rules = e),
              (this.staticRulesId = ''),
              (this.isStatic = (void 0 === n || n.isStatic) && pi(e)),
              (this.componentId = t),
              (this.baseHash = al(hi, t)),
              (this.baseStyle = n),
              Gl.registerId(t);
          }
          return (
            (e.prototype.generateAndInjectStyles = function (e, t, n) {
              var r = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, n) : '';
              if (this.isStatic && !n.hash)
                if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId))
                  r = Nl(r, this.staticRulesId);
                else {
                  var a = Rl(fi(this.rules, e, t, n)),
                    o = nl(al(this.baseHash, a) >>> 0);
                  if (!t.hasNameForId(this.componentId, o)) {
                    var l = n(a, '.'.concat(o), void 0, this.componentId);
                    t.insertRules(this.componentId, o, l);
                  }
                  (r = Nl(r, o)), (this.staticRulesId = o);
                }
              else {
                for (var i = al(this.baseHash, n.hash), s = '', u = 0; u < this.rules.length; u++) {
                  var c = this.rules[u];
                  if ('string' == typeof c) s += c;
                  else if (c) {
                    var d = Rl(fi(c, e, t, n));
                    (i = al(i, d + u)), (s += d);
                  }
                }
                if (s) {
                  var f = nl(i >>> 0);
                  t.hasNameForId(this.componentId, f) ||
                    t.insertRules(
                      this.componentId,
                      f,
                      n(s, '.'.concat(f), void 0, this.componentId),
                    ),
                    (r = Nl(r, f));
                }
              }
              return r;
            }),
            e
          );
        })(),
        vi = e.createContext(void 0);
      vi.Consumer;
      var gi = {};
      new Set();
      function yi(t, n, r) {
        var a = Cl(t),
          o = t,
          l = !sl(t),
          i = n.attrs,
          s = void 0 === i ? Qo : i,
          u = n.componentId,
          c =
            void 0 === u
              ? (function (e, t) {
                  var n = 'string' != typeof e ? 'sc' : Zo(e);
                  gi[n] = (gi[n] || 0) + 1;
                  var r = ''.concat(n, '-').concat(ll(Ho + n + gi[n]));
                  return t ? ''.concat(t, '-').concat(r) : r;
                })(n.displayName, n.parentComponentId)
              : u,
          d = n.displayName,
          f =
            void 0 === d
              ? (function (e) {
                  return sl(e) ? 'styled.'.concat(e) : 'Styled('.concat(il(e), ')');
                })(t)
              : d,
          p =
            n.displayName && n.componentId
              ? ''.concat(Zo(n.displayName), '-').concat(n.componentId)
              : n.componentId || c,
          h = a && o.attrs ? o.attrs.concat(s).filter(Boolean) : s,
          m = n.shouldForwardProp;
        if (a && o.shouldForwardProp) {
          var v = o.shouldForwardProp;
          if (n.shouldForwardProp) {
            var g = n.shouldForwardProp;
            m = function (e, t) {
              return v(e, t) && g(e, t);
            };
          } else m = v;
        }
        var y = new mi(r, p, a ? o.componentStyle : void 0);
        function b(t, n) {
          return (function (t, n, r) {
            var a = t.attrs,
              o = t.componentStyle,
              l = t.defaultProps,
              i = t.foldedComponentIds,
              s = t.styledComponentId,
              u = t.target,
              c = e.useContext(vi),
              d = oi(),
              f = t.shouldForwardProp || d.shouldForwardProp,
              p = qo(n, c, l) || Xo,
              h = (function (e, t, n) {
                for (
                  var r, a = za(za({}, t), { className: void 0, theme: n }), o = 0;
                  o < e.length;
                  o += 1
                ) {
                  var l = kl((r = e[o])) ? r(a) : r;
                  for (var i in l)
                    a[i] =
                      'className' === i
                        ? Nl(a[i], l[i])
                        : 'style' === i
                        ? za(za({}, a[i]), l[i])
                        : l[i];
                }
                return t.className && (a.className = Nl(a.className, t.className)), a;
              })(a, n, p),
              m = h.as || u,
              v = {};
            for (var g in h)
              void 0 === h[g] ||
                '$' === g[0] ||
                'as' === g ||
                ('theme' === g && h.theme === p) ||
                ('forwardedAs' === g ? (v.as = h.forwardedAs) : (f && !f(g, m)) || (v[g] = h[g]));
            var y = (function (e, t) {
                var n = oi();
                return e.generateAndInjectStyles(t, n.styleSheet, n.stylis);
              })(o, h),
              b = Nl(i, s);
            return (
              y && (b += ' ' + y),
              h.className && (b += ' ' + h.className),
              (v[sl(m) && !Go.has(m) ? 'class' : 'className'] = b),
              (v.ref = r),
              (0, e.createElement)(m, v)
            );
          })(x, t, n);
        }
        b.displayName = f;
        var x = e.forwardRef(b);
        return (
          (x.attrs = h),
          (x.componentStyle = y),
          (x.displayName = f),
          (x.shouldForwardProp = m),
          (x.foldedComponentIds = a ? Nl(o.foldedComponentIds, o.styledComponentId) : ''),
          (x.styledComponentId = p),
          (x.target = a ? o.target : t),
          Object.defineProperty(x, 'defaultProps', {
            get: function () {
              return this._foldedDefaultProps;
            },
            set: function (e) {
              this._foldedDefaultProps = a
                ? (function (e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    for (var r = 0, a = t; r < a.length; r++) Pl(e, a[r], !0);
                    return e;
                  })({}, o.defaultProps, e)
                : e;
            },
          }),
          Tl(x, function () {
            return '.'.concat(x.styledComponentId);
          }),
          l &&
            El(x, t, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
            }),
          x
        );
      }
      function bi(e, t) {
        for (var n = [e[0]], r = 0, a = t.length; r < a; r += 1) n.push(t[r], e[r + 1]);
        return n;
      }
      var xi = function (e) {
        return Object.assign(e, { isCss: !0 });
      };
      function wi(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        if (kl(e) || jl(e)) return xi(fi(bi(Qo, Da([e], t, !0))));
        var r = e;
        return 0 === t.length && 1 === r.length && 'string' == typeof r[0]
          ? fi(r)
          : xi(fi(bi(r, t)));
      }
      function Si(e, t, n) {
        if ((void 0 === n && (n = Xo), !t)) throw Ol(1, t);
        var r = function (r) {
          for (var a = [], o = 1; o < arguments.length; o++) a[o - 1] = arguments[o];
          return e(t, n, wi.apply(void 0, Da([r], a, !1)));
        };
        return (
          (r.attrs = function (r) {
            return Si(
              e,
              t,
              za(za({}, n), { attrs: Array.prototype.concat(n.attrs, r).filter(Boolean) }),
            );
          }),
          (r.withConfig = function (r) {
            return Si(e, t, za(za({}, n), r));
          }),
          r
        );
      }
      var Ei = function (e) {
          return Si(yi, e);
        },
        ki = Ei;
      Go.forEach(function (e) {
        ki[e] = Ei(e);
      });
      !(function () {
        function e(e, t) {
          (this.rules = e),
            (this.componentId = t),
            (this.isStatic = pi(e)),
            Gl.registerId(this.componentId + 1);
        }
        (e.prototype.createStyles = function (e, t, n, r) {
          var a = r(Rl(fi(this.rules, t, n, r)), ''),
            o = this.componentId + e;
          n.insertRules(o, o, a);
        }),
          (e.prototype.removeStyles = function (e, t) {
            t.clearRules(this.componentId + e);
          }),
          (e.prototype.renderStyles = function (e, t, n, r) {
            e > 2 && Gl.registerId(this.componentId + e),
              this.removeStyles(e, n),
              this.createStyles(e, t, n, r);
          });
      })();
      (function () {
        function t() {
          var t = this;
          (this._emitSheetCSS = function () {
            var e = t.instance.toString();
            if (!e) return '';
            var n = Hl(),
              r = Rl(
                [
                  n && 'nonce="'.concat(n, '"'),
                  ''.concat(Bo, '="true"'),
                  ''.concat(Uo, '="').concat(Ho, '"'),
                ].filter(Boolean),
                ' ',
              );
            return '<style '.concat(r, '>').concat(e, '</style>');
          }),
            (this.getStyleTags = function () {
              if (t.sealed) throw Ol(2);
              return t._emitSheetCSS();
            }),
            (this.getStyleElement = function () {
              var n;
              if (t.sealed) throw Ol(2);
              var r = t.instance.toString();
              if (!r) return [];
              var a =
                  (((n = {})[Bo] = ''),
                  (n[Uo] = Ho),
                  (n.dangerouslySetInnerHTML = { __html: r }),
                  n),
                o = Hl();
              return o && (a.nonce = o), [e.createElement('style', za({}, a, { key: 'sc-0-0' }))];
            }),
            (this.seal = function () {
              t.sealed = !0;
            }),
            (this.instance = new Gl({ isServer: !0 })),
            (this.sealed = !1);
        }
        (t.prototype.collectStyles = function (t) {
          if (this.sealed) throw Ol(2);
          return e.createElement(li, { sheet: this.instance }, t);
        }),
          (t.prototype.interleaveWithNodeStream = function (e) {
            throw Ol(3);
          });
      })(),
        '__sc-'.concat(Bo, '__');
      const Ci = ki.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: lightgrey;
    text-decoration: none;
    &:hover {
      color: darkgrey;
    }
  }

  .navbar {
    background: linear-gradient(to right, black, red );
    opacity: 100   %;
  }

  .navbar-toggler-icon {
    background-color: transparent; // добавлено для изменения цвета бургер-меню
    border-radius: 15% 15% 15% 15%;
  }

  .navbar-toggler[aria-expanded="false"] .navbar-toggler-icon::before {
    background-color: black; // цвет линий бургера
  
    
`;
      function Ni() {
        const [t, n] = (0, e.useState)(!1),
          r = () => n(!1);
        return (0, v.jsxs)(v.Fragment, {
          children: [
            (0, v.jsx)(Ci, {
              children: (0, v.jsx)(Ft, {
                collapseOnSelect: !0,
                expand: 'lg',
                variant: 'dark',
                className: 'navbar navbar-expand-lg navbar-dark fixed-top',
                children: (0, v.jsxs)(Bt, {
                  children: [
                    (0, v.jsx)(Ft.Brand, {
                      className: ' me-4',
                      children: (0, v.jsx)(_a, {
                        to: '/',
                        children: (0, v.jsx)('img', {
                          src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAD3BAMAAAAZG7ujAAAAHlBMVEX+7O7////pIzP//v7kEB3jBhPrTlj4wMPjBhP////u/XadAAAABnRSTlMWcwDg+4pWnP7gAAAO70lEQVR42u2dzXOiStfAjVm5S8iKHWpZlbuLZsX+qRuzTZVV+QPeyuj+lso2ZZTZ6UNKh//2pT+Abvr0B4jzJHMPiwzSDZxf9/nqpmE6g3/t1kF0REd0REd0REd0REd0REd0REd0REd0REd0REd0REd0REd0REd0REd0REd0REd0REd0REd0REd0REf0wWAUxzPh52scxy9lUfxR1HuXan28lD9exL3Rh3ipjy+MTvBEAcnPHPKe/ChAPuT2KRpoUNQfkb37GK719dDjWBbQBZ0eL9tLQP/4Ruj3RHNfhW6P38VCUceFOpmJjED0WEL/+NK2/kq75bVkFLtJg86oR5DCZ2cL6O9fGp313UgwXDv6fUWLRfT3b4OeM5dq7oBeVWQRPf426LmcJY0DevyuRc/s57vYOoAueGWNhzegz+L37+LhYfT3xugv8cf3Rm/e6y+vcQX9Cyv8i+DoXW1d7+ZeRmJj/as8/Mvg26DzHrxvK66TzPC7oLNsLm6Qzd2/g+j33wY9k3Q2knJ4O3rWUh8vsxJRQh+JjnE2m33hQasycnNA14/cXkQN+uqD1pEYyB3RK2FLRn/9NuiD0exD1MqZVCT+ECFmr0LR7EU8uTxpNPvaCv8v2BAd0REd0REd0RG9/hZ0su03Yz1eCp3CsK1rq3r7mJItGd/oJAC2bnEfm/iwAP202x763UH4EabFloyNV7gSqj6C8NcpsCWszE/TvVGqXpoeYHSvNfQgFS8my3mrP+tOrjmGpdeih8WeZtNV6KWT34IOEtG2D6tI425ddGP39VMNug8rQ/voGnaVHGK3oZu6b6hDDy3a0h56+gCdEkJQ47ropu7zNeiZtA5+rh30xIPlYoWP47tHbSvZ0BM9A23cRGMI3sXQk0e2cVkPWs/Ng1pwlVf1FPT8WuU2FiKJZzR1EH1oMZTz0CdF3A4hICZW1iQ3SqA7uMWnAn1vCm0wei+1RcU20HObPoDqLns17vce6qEng9rFvsVHtIXO2T2g08eg55Ot14qu1fh+qkMP09TBxbeAzmQ4qEIfunC8e6iHPjGENhAxoAXd34HOXFq3KhXkm/tKgR39YAhtIHo/TV1cfCvoQTX30Lvm62q329E14Y3nDYlOHSbtoY9vb7sadAp0qDT72BCLu87o+lyWZrEgOlOHfXvoQm8p6IHM4xtSkX6l2y3oYy0EiWB3BvRDq+gHHTq9m6ejM0YeC/qDdvRGCq6hwoDnTq2iJ1r0odg518b8sy/7AQv6xNc4ayLRYQihkxs8Ovi5ltADsStDU6ezbt87o+uSUnocRCcltw5+znWWJjSjE55E7Nau61DTht7XmC01MRCdOIGOg59zRb96fAxN6L0St2fxMYHktW3o1Ka74EWSAYjukyuGdj9XY1qyZ0IXxom2uRV5dGFF74GX69NrgOiU2rensm2iT8pAZ7yQpMNW9D6ou6xBIPQgzRus+3vQg+LY0G5moSCXFT0INV2bmQGEzvTPYbaiLXQiy14N8XqN91zRB1B44xEFQh/S6oHdxbeGXsyZh3YrE3XYjg6FN34MQu+xY6FV99pEPygR3uDjD87ofc1MiAejc0F8qxito/ddBk2C/7WjA+Ett38InWtUz6p8ZvT+rbD5TuhDl6GyYOwO6D1wEmgPo+dNb5ejY+sdYI7YiN5zmSDp10JXw1veGAB6jtw/Ez2tj+67zAgSh/BfZ3Q1vPncBAD0vOkDa4zt2DP3cjs4oIcu88BCLQd0JbwVrhRAL9yINZWtpfB7e3ALnGb/Bd1wQa+Gt+I3gF4QW1NZM3ogeLmwtB1DSuP2zEeQywW9Gt6KrElFL/Xc6nScg1tfuAuEzq3XEb1XzKK4oFfCW2n7Knp5f6uLd0bvCTZsyOGHTg85hWpO6HJ4Kz2+il4CWxMMZ3RfuLlh0Dp0mBSTOscJvV+d2Cl7NgHTWBeH22mg7xD6Ne/Gnssjn9rogeSu/UL9VXQhttrCrCv6tdiEhgmqy6BL4U0YJajooTQwStpAF/UdmpYMy2TOYRkLFb8OuhjehH0FvV+p121lRjYZGNALY/Td0QsPZlpaMFEndoQJARDdA/bPQB9KLkNFLzxPE3TTgpKJNCszqKS1CnqvYhiT+ui3lc03Pm5kk6zdGuiDuug9KWjtdehSCmdJZTtaL6QZuoDo5ePGS6H3pSzN06FXI0F99L9UafYG9KB83nIp9EDMzQudrqIHSvzvtoDuGdCvywqXsvWCWJoAq6LLGZwllXVV+GSgRw+EpX3toB9U9KGQKU906EMl4Z3UdnNXt9mj68LDHW5vPT164AuLGC4U18vwJs11V9FJOwrO2Txb0TGEM9YIwPny4rE7cdXHhbK5MrxJMzZVdF+nP03Q6ZonE/qVLy24+Oti6L3iqcpeix6aDbUWegAuWEzpyhq68eWfieBzXUdu3XroDFoevlbQA8BtdBuiB/CKHIP/v8x4vQxv8jRdBR1IRwwu3oxOzDgJ7ehjMIk2T3zUmKAqDbkjm28FfQigT5qh03h9Y0cXlkX2nacla6MP+RqZiRbdT82pmDv6FfNfVnTxqdBFZmRldfa06CGNw/LQ49AInauyDV1e/hw6BfZ68/CS/65oeKJLY62h1oJ+6FrRK08CnZ++TGqj9xQNltFVYzOmsmZ0ihUagpu6juACz9xkjfe06EPwseSkETp7pSU0pDTq6pELPGmVxgrVFdiJqdWND96M6N7Ahq6uGbrA83XJgx8GWnTA1kyex4R+M7CiqytnnFZVpHVWVcjd8aBHD8HVF0nj4QtRMwO6qvGh8QUtZY6pDrqSL0noUFz9y+B5rOiBbxy+qBrfa3sFlXQgGWjR+5oXr7ym6HeWkZsP9ESr6+bkNtvr0YeaRWaThujXqQX9ulre9mpJ+UxPj97TLC3cN0O/Sm3o6tvEvssa2YdG6EHY1aODyZQhwzKjX6VWdHU18HW7K6NN4orogW4tbdIEnU7RHEIzeq8acdpdD28b9ifmhMIwf2BC528nWdD74Pt9rb0F4Yw+1C4e9+qj+yyXtaBL/rrQ+NbefXFGhwcPwjK1uoNWb2BFVzQ+aPGNJ3d0X/t+66ER+s3Ajq5qvOk9t+tUabh20EPtOzJJE/SHgQN6oGh8Xz8DXvftRmd03SBNP4g2oo85hxmdXn2idDvsXe5qvtPqjK7zZ/pBtAmddY6v+gngJe6D6soglb+q+yazM7oOUT+I7tgmUqDWhB43dtVub+P9dWf0nuEF0H099DwFhERLgSmEidrtyldoGny1wBldm7FqCzqW+bMA0qMUmEI4qCGsjW9VOKOHhjeek5rorLlAyZRVFSn4igY5eu4XSlzR9SatTWU75rHlDeg8QI/uAfGbfpeG3jf/iIvi/Ein3CpbI3TPNvvrjK5/BR6c7z5AYSzNv95TTNvfAHHXZUGJBV0fvrWzFR3LlAJ4mu2rBcXMVmr/WlVL6Ib5R10q27HMGYMXtHy1QDZ3yzfKWkIPjV8yqY+u8x3q4WsojVT7fTy4ELrpWYPOFmzvvoBaBK+RBb4aIX9lMLkZXAq9b/l0j1cbXfONxlC9lsbWxG9Ljr1BfXTPHd2z5KX10AcBnAyoX/oMdB9Mvbqj9I+3mi+KBtAXRTva++gkMVXVlP2OD7wG9m+u/i82/HowoiM6oiM6oiM6oiM6oiM6on9v9Nkftrmjs/+P7w/a3hEd0REd0QH0p3/I392S/F1l25oe3fyIVvNY2V2yf3+sizOm9MB2dVqyvXi7FqV5WvFTdkvx4Or/6OWy29Gzdqt8L/47u1Jxj+xqEf81r8iyIfVpHXpyI/TnE/m7OJK/UTar+oseXWR7p2m5y+63PTHZSe0dPSOlBRty4pGV/TyK6Iv8+O4oHaTnbfKzdmQ6l95tS/ZoZyzWvCr9N1pXZNmQ4/QoPbkZOpFiw0SIlm9vcybB6e0HOybsZnfhrXGS0Z/S1VuUrosygfLEj0voR3bBTfq2ohfYnd7e3qaMbZldaV6gp8vos0QXZKESM3RyckN0or0cfV5IPC3anez++KdsJirgXEKPjqTnWVmUSui/NtFRQf8VP52o+NMNJSsKt6THt1Td6N2zGrt/SnQmC23/TXrK0Y9Nbf2ZUC9kdKpN8YahkFtvphwr17tPEX3L1Jefms4ldK4qFfQN07Vp/HwUC5n1TWMBnRVE61Is/je7wrnop6wpo0hC3+Z3zLH4FjHtixfRSUTfCTq+TaN1rFJW0emtCNhOQl98lpWYjS8FdC4WrbRJM1nORT+m8226kNAFFhnrid1mscwUsUR/FrB2J0F8TrkG0FMQXWi23M0tywIuy475iUzkc9E/F5+7E/PLEQ9ugpw7CYvffLGO1gL64ldZ5/koNgQtosUVdNqBBJ22+e7Eg1s0r6BvI8HD82vsmJ/4O53yBmkc3D6fs476KQW3nzD68+mNqf9ivThq0DPvfXJAX3A3ty3j07TwmgJ6xn4q0H9K6P+J1ucGt88slq6dep1EVaaG60wBYPQoj9Am9NMqZfa6iriz0PV67myAXp8ujmf3eibu9KeLrRcZz2K9SX+Atk6yFNExwrbO06UypdHaen4MsPXp7nS2rRN7++ng4YmrZpSZWNEJ9PC7kyS/xsMf33hGxg1I6+H/nvMdwMNPeTA5C323rqDDcZ3cmVFm0jynYFwncoguXhfX+W2mrG5R+ES1oYzrhdKwuM5kSfOIz1zgWeibeQWdZ3MslyY5M90l2KzhM7G2KZjNERSZEs7mcnTWlNpsLlOyTWnrXCyezU1ZInoeeuE8czdHk2XmioS8mSj7psivIymHP/Ecnoi4Pck5/NyAvpXdXDWH36VLigvl8NPsZ+7mluejQyO3H/luaXRkbwGN3Hh+Ohc92jI2oMcshy9HbpE0ciMXPlZHbtP8XKb6zYObbry+ygfpcb5L/9IhsjJez6rT8fqW/l7NhaH5GzBe536QjLmflvQ0Yby+ksbr/HgxXl9J4/X5WeN1nKBCdERH9D8WffSnob/gk1ZER3RER3RER3RER3RER3RER3RER3RER3RER3RER3RER3RER3RER3RER3RER3RER3RER3RER3RER3RER3RER3RER3RE/0O2/weeMoFZwPFkxAAAAABJRU5ErkJggg==',
                          width: 215,
                          alt: 'Logo',
                        }),
                      }),
                    }),
                    (0, v.jsx)(Ft.Toggle, { 'aria-controls': 'responsive-navbar-nav ' }),
                    (0, v.jsxs)(Ft.Collapse, {
                      id: 'responsive-navbar-nav',
                      children: [
                        (0, v.jsxs)(hn, {
                          className: 'me-auto h4 px-4',
                          children: [
                            (0, v.jsx)(hn.Link, {
                              children: (0, v.jsx)(_a, {
                                to: '/technologia',
                                children: 'Technologia',
                              }),
                            }),
                            (0, v.jsx)(hn.Link, {
                              children: (0, v.jsx)(_a, { to: '/prodotti', children: 'Prodotti' }),
                            }),
                            (0, v.jsx)(hn.Link, {
                              children: (0, v.jsx)(_a, { to: '/contatti', children: 'Contatti' }),
                            }),
                          ],
                        }),
                        (0, v.jsx)(hn, {
                          className: 'me-10',
                          children: (0, v.jsx)(vn, {
                            variant: 'outline-dark',
                            onClick: () => n(!0),
                            style: { color: 'white', fontSize: '1rem' },
                            children: 'Preventivo gratuito',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, v.jsxs)(_n, {
              show: t,
              onHide: r,
              children: [
                (0, v.jsxs)(_n.Header, {
                  className: 'modal-header',
                  style: {
                    background: 'linear-gradient(to left, black, darkRed)',
                    borderBottom: '0',
                  },
                  children: [
                    (0, v.jsx)(_n.Title, {
                      className: 'modal-title',
                      style: { color: 'white' },
                      children: 'Richiedi il tuo preventivo gratuito',
                    }),
                    (0, v.jsx)(vn, {
                      variant: 'light',
                      className: 'closeButton',
                      onClick: r,
                      style: {
                        color: 'white',
                        border: 'none',
                        outline: 'none',
                        background: 'none',
                      },
                      children: (0, v.jsx)('span', {
                        style: { fontSize: '1.5rem' },
                        children: '\xd7',
                      }),
                    }),
                  ],
                }),
                (0, v.jsx)(_n.Body, {
                  className: 'modal-body',
                  style: {
                    background: 'linear-gradient(to left, black, darkRed )',
                    color: 'white',
                    marginTop: '-1px',
                    borderRadius: '0 0 7px 7px',
                  },
                  children: (0, v.jsxs)(pr, {
                    children: [
                      (0, v.jsxs)(pr.Group, {
                        controlId: 'formBasicEmail',
                        children: [
                          (0, v.jsx)(pr.Label, { children: 'E-mail:' }),
                          (0, v.jsx)(pr.Control, { type: 'email', placeholder: 'Enter E-mail' }),
                          (0, v.jsx)(pr.Text, { className: 'text-muted' }),
                        ],
                      }),
                      (0, v.jsxs)(pr.Group, {
                        controlId: 'formPlace',
                        children: [
                          (0, v.jsx)(pr.Label, {
                            style: { marginTop: '15px' },
                            children: 'Type Your Message:',
                          }),
                          (0, v.jsx)(pr.Control, { type: 'text', placeholder: 'Enter Text' }),
                          (0, v.jsx)(pr.Text, { className: 'text-muted' }),
                        ],
                      }),
                      (0, v.jsx)(pr.Group, {
                        controlId: 'formBasicCheckbox',
                        children: (0, v.jsx)(pr.Check, {
                          type: 'checkbox',
                          label:
                            "Dichiaro di aver preso visione dell'informativa sulla privacy e di prestare il consenso al trattamento dei miei dati personali.",
                          style: { marginTop: '15px' },
                        }),
                      }),
                      (0, v.jsx)(vn, {
                        variant: 'dark',
                        style: {
                          float: 'right',
                          marginRight: '45px',
                          width: '20%',
                          marginTop: '12px',
                          background: 'linear-gradient(to right, grey, black )',
                          borderImage: 'none',
                          borderRadius: '8px 0px',
                          color: 'white',
                          fontSize: '15px',
                        },
                        children: 'Invia',
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      const Ri = () =>
          (0, v.jsx)(Bt, {
            fluid: !0,
            style: { backgroundColor: '#212529', color: '#fff' },
            children: (0, v.jsx)(Bt, {
              style: { display: 'flex', justifyContent: 'center', padding: '10px' },
              children: (0, v.jsx)('p', { children: 'ROEMA' }),
            }),
          }),
        ji = e.forwardRef((e, t) => {
          let { bsPrefix: n, className: r, as: a = 'div', ...l } = e;
          const i = S(n, 'row'),
            s = E(),
            u = k(),
            c = `${i}-cols`,
            d = [];
          return (
            s.forEach((e) => {
              const t = l[e];
              let n;
              delete l[e], null != t && 'object' === typeof t ? ({ cols: n } = t) : (n = t);
              const r = e !== u ? `-${e}` : '';
              null != n && d.push(`${c}${r}-${n}`);
            }),
            (0, v.jsx)(a, { ref: t, ...l, className: o()(r, i, ...d) })
          );
        });
      ji.displayName = 'Row';
      const Pi = ji,
        Ti = ki.div`
  width: 100%;
  height: 450px; /* Задаем фиксированную высоту для контейнера карты */
  border: none;
`,
        Oi = () =>
          (0, v.jsx)(Ti, {
            children: (0, v.jsx)('iframe', {
              src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1969.509176474941!2d9.563620526599609!3d45.72494599309018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781535a7f918c6d%3A0x768b1d5ec2a30810!2sOFFICINE%20RO.E.MA.%20MECCANICA%20DI%20PRECISIONE!5e0!3m2!1sru!2sit!4v1728594957111!5m2!1sru!2sit',
              title: 'Google Map',
              width: '100%',
              height: '100%',
              style: { border: 0 },
              allowFullScreen: !0,
              loading: 'lazy',
              referrerPolicy: 'no-referrer-when-downgrade',
            }),
          }),
        Ai = e.forwardRef((e, t) => {
          let { className: n, bsPrefix: r, as: a = 'div', ...l } = e;
          return (r = S(r, 'card-body')), (0, v.jsx)(a, { ref: t, className: o()(n, r), ...l });
        });
      Ai.displayName = 'CardBody';
      const _i = Ai,
        Li = e.forwardRef((e, t) => {
          let { className: n, bsPrefix: r, as: a = 'div', ...l } = e;
          return (r = S(r, 'card-footer')), (0, v.jsx)(a, { ref: t, className: o()(n, r), ...l });
        });
      Li.displayName = 'CardFooter';
      const Ii = Li,
        zi = e.forwardRef((t, n) => {
          let { bsPrefix: r, className: a, as: l = 'div', ...i } = t;
          const s = S(r, 'card-header'),
            u = (0, e.useMemo)(() => ({ cardHeaderBsPrefix: s }), [s]);
          return (0, v.jsx)(an.Provider, {
            value: u,
            children: (0, v.jsx)(l, { ref: n, ...i, className: o()(a, s) }),
          });
        });
      zi.displayName = 'CardHeader';
      const Di = zi,
        Fi = e.forwardRef((e, t) => {
          let { bsPrefix: n, className: r, variant: a, as: l = 'img', ...i } = e;
          const s = S(n, 'card-img');
          return (0, v.jsx)(l, { ref: t, className: o()(a ? `${s}-${a}` : s, r), ...i });
        });
      Fi.displayName = 'CardImg';
      const Mi = Fi,
        Bi = e.forwardRef((e, t) => {
          let { className: n, bsPrefix: r, as: a = 'div', ...l } = e;
          return (
            (r = S(r, 'card-img-overlay')), (0, v.jsx)(a, { ref: t, className: o()(n, r), ...l })
          );
        });
      Bi.displayName = 'CardImgOverlay';
      const Wi = Bi,
        Ui = e.forwardRef((e, t) => {
          let { className: n, bsPrefix: r, as: a = 'a', ...l } = e;
          return (r = S(r, 'card-link')), (0, v.jsx)(a, { ref: t, className: o()(n, r), ...l });
        });
      Ui.displayName = 'CardLink';
      const Hi = Ui,
        Vi = mt('h6'),
        Ki = e.forwardRef((e, t) => {
          let { className: n, bsPrefix: r, as: a = Vi, ...l } = e;
          return (r = S(r, 'card-subtitle')), (0, v.jsx)(a, { ref: t, className: o()(n, r), ...l });
        });
      Ki.displayName = 'CardSubtitle';
      const $i = Ki,
        Qi = e.forwardRef((e, t) => {
          let { className: n, bsPrefix: r, as: a = 'p', ...l } = e;
          return (r = S(r, 'card-text')), (0, v.jsx)(a, { ref: t, className: o()(n, r), ...l });
        });
      Qi.displayName = 'CardText';
      const Xi = Qi,
        qi = mt('h5'),
        Gi = e.forwardRef((e, t) => {
          let { className: n, bsPrefix: r, as: a = qi, ...l } = e;
          return (r = S(r, 'card-title')), (0, v.jsx)(a, { ref: t, className: o()(n, r), ...l });
        });
      Gi.displayName = 'CardTitle';
      const Yi = Gi,
        Ji = e.forwardRef((e, t) => {
          let {
            bsPrefix: n,
            className: r,
            bg: a,
            text: l,
            border: i,
            body: s = !1,
            children: u,
            as: c = 'div',
            ...d
          } = e;
          const f = S(n, 'card');
          return (0, v.jsx)(c, {
            ref: t,
            ...d,
            className: o()(r, f, a && `bg-${a}`, l && `text-${l}`, i && `border-${i}`),
            children: s ? (0, v.jsx)(_i, { children: u }) : u,
          });
        });
      Ji.displayName = 'Card';
      const Zi = Object.assign(Ji, {
        Img: Mi,
        Title: Yi,
        Subtitle: $i,
        Body: _i,
        Link: Hi,
        Text: Xi,
        Header: Di,
        Footer: Ii,
        ImgOverlay: Wi,
      });
      var es = Object.defineProperty,
        ts = (e, t, n) =>
          ((e, t, n) =>
            t in e
              ? es(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
              : (e[t] = n))(e, 'symbol' !== typeof t ? t + '' : t, n),
        ns = new Map(),
        rs = new WeakMap(),
        as = 0,
        os = void 0;
      function ls(e) {
        return Object.keys(e)
          .sort()
          .filter((t) => void 0 !== e[t])
          .map(
            (t) =>
              `${t}_${
                'root' === t
                  ? (function (e) {
                      return e
                        ? (rs.has(e) || ((as += 1), rs.set(e, as.toString())), rs.get(e))
                        : '0';
                    })(e.root)
                  : e[t]
              }`,
          )
          .toString();
      }
      function is(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : os;
        if ('undefined' === typeof window.IntersectionObserver && void 0 !== r) {
          const a = e.getBoundingClientRect();
          return (
            t(r, {
              isIntersecting: r,
              target: e,
              intersectionRatio: 'number' === typeof n.threshold ? n.threshold : 0,
              time: 0,
              boundingClientRect: a,
              intersectionRect: a,
              rootBounds: a,
            }),
            () => {}
          );
        }
        const {
            id: a,
            observer: o,
            elements: l,
          } = (function (e) {
            const t = ls(e);
            let n = ns.get(t);
            if (!n) {
              const r = new Map();
              let a;
              const o = new IntersectionObserver((t) => {
                t.forEach((t) => {
                  var n;
                  const o = t.isIntersecting && a.some((e) => t.intersectionRatio >= e);
                  e.trackVisibility && 'undefined' === typeof t.isVisible && (t.isVisible = o),
                    null == (n = r.get(t.target)) ||
                      n.forEach((e) => {
                        e(o, t);
                      });
                });
              }, e);
              (a = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
                (n = { id: t, observer: o, elements: r }),
                ns.set(t, n);
            }
            return n;
          })(n),
          i = l.get(e) || [];
        return (
          l.has(e) || l.set(e, i),
          i.push(t),
          o.observe(e),
          function () {
            i.splice(i.indexOf(t), 1),
              0 === i.length && (l.delete(e), o.unobserve(e)),
              0 === l.size && (o.disconnect(), ns.delete(a));
          }
        );
      }
      e.Component;
      function ss() {
        let {
          threshold: t,
          delay: n,
          trackVisibility: r,
          rootMargin: a,
          root: o,
          triggerOnce: l,
          skip: i,
          initialInView: s,
          fallbackInView: u,
          onChange: c,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var d;
        const [f, p] = e.useState(null),
          h = e.useRef(),
          [m, v] = e.useState({ inView: !!s, entry: void 0 });
        (h.current = c),
          e.useEffect(() => {
            if (i || !f) return;
            let e;
            return (
              (e = is(
                f,
                (t, n) => {
                  v({ inView: t, entry: n }),
                    h.current && h.current(t, n),
                    n.isIntersecting && l && e && (e(), (e = void 0));
                },
                { root: o, rootMargin: a, threshold: t, trackVisibility: r, delay: n },
                u,
              )),
              () => {
                e && e();
              }
            );
          }, [Array.isArray(t) ? t.toString() : t, f, o, a, l, i, r, u, n]);
        const g = null == (d = m.entry) ? void 0 : d.target,
          y = e.useRef();
        f ||
          !g ||
          l ||
          i ||
          y.current === g ||
          ((y.current = g), v({ inView: !!s, entry: void 0 }));
        const b = [p, m.inView, m.entry];
        return (b.ref = b[0]), (b.inView = b[1]), (b.entry = b[2]), b;
      }
      const us = n.p + 'static/media/3.ad9b3311bed4b4ec8e7c.jpg',
        cs = n.p + 'static/media/pezzo.4750fd3441f4d9665082.jpg',
        ds = n.p + 'static/media/5.f9aaf68eebe464a1524b.jpg',
        fs = ki(Bt)`
  padding-top: 0rem;
  padding-bottom: 2rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding-left: 0rem;
  padding-right: 0rem;
`,
        ps = ki(Jn)`
  display: flex;
  justify-content: center;
`,
        hs = ki(Zi)`
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`,
        ms = () => {
          const e = {
              title: 'La Nostra Forza',
              text: 'La nostra forza risiede nella precisione delle misure dei nostri pezzi...',
            },
            t = {
              title: 'Nostri Lavori',
              text: 'La nostra dedizione costante al miglioramento...',
            },
            n = {
              title: 'La Nostra Stabilita',
              text: 'La nostra stabilit\xe0 \xe8 il fondamento su cui costruiamo il nostro percorso...',
            },
            [r, a] = ss({ triggerOnce: !0, threshold: 0.1 }),
            [o, l] = ss({ triggerOnce: !0, threshold: 0.1 }),
            [i, s] = ss({ triggerOnce: !0, threshold: 0.1 });
          return (0, v.jsx)(fs, {
            children: (0, v.jsxs)(Pi, {
              xs: 1,
              md: 1,
              lg: 3,
              xl: 3,
              children: [
                (0, v.jsx)(ps, {
                  style: { paddingBottom: '5rem' },
                  children: (0, v.jsx)('div', {
                    ref: r,
                    children:
                      a &&
                      (0, v.jsxs)(hs, {
                        children: [
                          (0, v.jsx)(Zi.Img, {
                            variant: 'top',
                            src: us,
                            height: 400,
                            style: { objectFit: 'cover' },
                          }),
                          (0, v.jsxs)(Zi.Body, {
                            children: [
                              (0, v.jsx)(Zi.Title, { children: e.title }),
                              (0, v.jsx)(Zi.Text, { children: e.text }),
                              (0, v.jsx)(_a, {
                                to: 'targetElement',
                                smooth: !0,
                                duration: 500,
                                children: (0, v.jsx)(vn, {
                                  variant: 'primary',
                                  children: 'Scopri di Piu',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                  }),
                }),
                (0, v.jsx)(ps, {
                  style: { paddingBottom: '5rem' },
                  children: (0, v.jsx)('div', {
                    ref: o,
                    children:
                      l &&
                      (0, v.jsxs)(hs, {
                        children: [
                          (0, v.jsx)(Zi.Img, {
                            variant: 'top',
                            src: cs,
                            height: 400,
                            style: { objectFit: 'cover' },
                          }),
                          (0, v.jsxs)(Zi.Body, {
                            children: [
                              (0, v.jsx)(Zi.Title, { children: t.title }),
                              (0, v.jsx)(Zi.Text, { children: t.text }),
                              (0, v.jsx)(_a, {
                                to: 'targetElement',
                                smooth: !0,
                                duration: 500,
                                children: (0, v.jsx)(vn, {
                                  variant: 'primary',
                                  children: 'Scopri di Piu',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                  }),
                }),
                (0, v.jsx)(ps, {
                  style: { paddingBottom: '5rem' },
                  children: (0, v.jsx)('div', {
                    ref: i,
                    children:
                      s &&
                      (0, v.jsxs)(hs, {
                        children: [
                          (0, v.jsx)(Zi.Img, {
                            variant: 'top',
                            src: ds,
                            height: 400,
                            style: { objectFit: 'cover' },
                          }),
                          (0, v.jsxs)(Zi.Body, {
                            children: [
                              (0, v.jsx)(Zi.Title, { children: n.title }),
                              (0, v.jsx)(Zi.Text, { children: n.text }),
                              (0, v.jsx)(_a, {
                                to: 'targetElement',
                                smooth: !0,
                                duration: 500,
                                children: (0, v.jsx)(vn, {
                                  variant: 'primary',
                                  children: 'Scopri di Piu',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                  }),
                }),
              ],
            }),
          });
        },
        vs = n.p + 'static/media/RoemaGif-speed.47efca42b557699970b6.gif',
        gs = () =>
          (0, v.jsx)(Bt, {
            fluid: !0,
            className: 'py-5',
            style: { width: '100%' },
            children: (0, v.jsx)('img', {
              src: vs,
              alt: 'Adaptive GIF',
              className: 'img-fluid',
              style: {
                maxWidth: '100%',
                height: 'auto',
                marginTop: '7rem',
                background: 'linear-gradient(to right, darkred, black)',
              },
            }),
          }),
        ys = n.p + 'static/media/DJI_0346.bb713f6015c38a2cf533.jpg',
        bs = n.p + 'static/media/biglia.489910104651d3dd950c.png',
        xs = n.p + 'static/media/azienda.f18f05aaf59e5ec1dfbc.b036e4bbb6d3ffbeb6f7.jpg',
        ws = ki(Bt)`
  @media (max-width: 320px) {
    margin-top: 0rem;
  }
`,
        Ss = ki.h1`
  border-left: 5px darkRed solid;
  margin-top: 2.7rem;
  margin-left: 0.2rem;
  padding-left: 1rem;
`,
        Es = ki.h2`
  font-size: 2rem;
`,
        ks = ki.p`
  font-size: 1.25rem;
`,
        Cs = () =>
          (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsx)(gs, {}),
              (0, v.jsx)(ws, {
                className: 'py-5',
                children: (0, v.jsx)(Ss, { children: 'Informazioni' }),
              }),
              (0, v.jsx)(ms, {}),
              (0, v.jsxs)(Bt, {
                fluid: !0,
                className: 'text-white py-5',
                style: { background: 'linear-gradient(to right, red, black)', minHeight: '95vh' },
                children: [
                  (0, v.jsx)(Ss, { children: 'Avanzamento' }),
                  (0, v.jsxs)(Pi, {
                    xs: 1,
                    md: 1,
                    lg: 2,
                    xl: 2,
                    children: [
                      (0, v.jsx)(Jn, {
                        md: 6,
                        children: (0, v.jsxs)(ks, {
                          children: [
                            (0, v.jsx)('p', {
                              children:
                                'Nella nostra azienda utilizziamo strumenti ad alta precisione per misurare tutti i tipi di parametri, inclusi diametro, distanza, centralit\xe0 e rugosit\xe0. Ogni componente \xe8 sottoposto a un rigoroso controllo, garantendo la conformit\xe0 ai pi\xf9 severi standard di qualit\xe0. Ci impegniamo a ottenere risultati impeccabili, utilizzando tecnologie avanzate e attrezzature di alto livello.',
                            }),
                            (0, v.jsxs)('p', {
                              children: [
                                (0, v.jsxs)('ol', {
                                  children: [
                                    ' ',
                                    'Inoltre, ci specializziamo nella produzione di:',
                                    (0, v.jsx)('li', { children: 'Oliodinamica ' }),
                                    (0, v.jsx)('li', { children: 'Aerodinamica ' }),
                                    (0, v.jsx)('li', { children: 'Automotive' }),
                                    (0, v.jsx)('li', { children: 'Pneumatica' }),
                                  ],
                                }),
                                'Questo ci consente di offrire ai nostri clienti soluzioni affidabili ed efficienti, che soddisfano i requisiti pi\xf9 elevati. Il nostro team di esperti \xe8 pronto ad adattarsi alle vostre esigenze e fornire soluzioni uniche per il vostro business.',
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, v.jsx)(Jn, {
                        md: 6,
                        style: { paddingTop: '0rem' },
                        children: (0, v.jsx)('img', {
                          src: bs,
                          alt: 'Biglia',
                          className: 'img-fluid',
                          style: { width: '100%', marginTop: '1rem' },
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, v.jsx)(Bt, {
                className: 'py-4',
                children: (0, v.jsxs)(Pi, {
                  children: [
                    (0, v.jsx)(Jn, { md: 6 }),
                    (0, v.jsx)('img', {
                      src: ys,
                      alt: 'Azienda',
                      className: 'img-fluid mt-2',
                      style: { width: '100%', marginTop: '1rem' },
                    }),
                    (0, v.jsxs)(Jn, {
                      md: 6,
                      style: { paddingTop: '2rem' },
                      children: [
                        (0, v.jsx)(Es, { children: 'ROEMA: Mecanica di Precisione' }),
                        (0, v.jsx)(ks, {
                          children:
                            'Anche un piccolo pezzo pu\xf2 fare la differenza: \xe8 una questione di frazioni di millimetro, di qualit\xe0 dei materiali, di customizzazione. In RO.E MA. lo sappiamo bene e abbiamo il personale e le tecnologie per creare la componente perfetta.',
                        }),
                        (0, v.jsxs)('ul', {
                          className: 'fs-4',
                          children: [
                            (0, v.jsx)('li', {
                              children:
                                'Tornitura e fresatura di altissima precisione con macchine fino a 9 assi',
                            }),
                            (0, v.jsx)('li', { children: 'Trattamenti superficiali' }),
                            (0, v.jsx)('li', {
                              children:
                                'Lavorazione di acciaio inossidabile, ottone, bronzo, alluminio, leghe di ferro-nichel e titanio',
                            }),
                          ],
                        }),
                        (0, v.jsx)(ks, {
                          children: (0, v.jsx)('b', {
                            children:
                              'Tutti i lotti sono sottoposti a controlli di qualit\xe0 con attrezzatura specifica',
                          }),
                        }),
                        (0, v.jsx)(ks, {
                          children:
                            'Su richiesta viene effettuata la campionatura del pezzo finale',
                        }),
                        (0, v.jsx)(vn, {
                          variant: 'primary',
                          className: 'fs-4',
                          onClick: () => {
                            alert('Button clicked! ');
                          },
                          children: 'Scopri di Piu',
                        }),
                      ],
                    }),
                    (0, v.jsx)(Jn, {
                      md: 6,
                      children: (0, v.jsx)('img', {
                        src: xs,
                        alt: 'Azienda',
                        className: 'img-fluid mt-2',
                        style: { width: '100%', marginTop: '1rem' },
                      }),
                    }),
                  ],
                }),
              }),
              (0, v.jsx)(Bt, {
                fluid: !0,
                className: 'text-white py-5',
                style: { background: 'linear-gradient(to right, red, black)' },
                children: (0, v.jsxs)(Pi, {
                  children: [
                    (0, v.jsxs)(Jn, {
                      md: 6,
                      className: 'text-center py-5',
                      children: [
                        (0, v.jsx)('h3', {
                          className: 'fw-bold mt-5 pt-5',
                          children: 'OFFICINE RO.E.MA. MECCANICA DI PRECISIONE',
                        }),
                        (0, v.jsx)('p', {
                          className: 'fw-bold',
                          children: 'P. IVA: IT01772580336',
                        }),
                        (0, v.jsx)('p', { className: 'fw-bold', children: 'Tel: +39 035.5682454' }),
                        (0, v.jsx)('p', {
                          className: 'fw-bold',
                          children:
                            'Sede operativa: via Ca\u2019 Fittavoli, 20-21 \u2013 24030 Barzana (BG) Italia',
                        }),
                      ],
                    }),
                    (0, v.jsx)(Jn, { md: 6, children: (0, v.jsx)(Oi, {}) }),
                  ],
                }),
              }),
            ],
          });
      const Ns = function (t, n) {
          const r = (0, e.useRef)(!0);
          (0, e.useEffect)(() => {
            if (!r.current) return t();
            r.current = !1;
          }, n);
        },
        Rs = 2 ** 31 - 1;
      function js(e, t, n) {
        const r = n - Date.now();
        e.current = r <= Rs ? setTimeout(t, r) : setTimeout(() => js(e, t, n), Rs);
      }
      function Ps() {
        const t = Oe(),
          n = (0, e.useRef)();
        return (
          Ae(() => clearTimeout(n.current)),
          (0, e.useMemo)(() => {
            const e = () => clearTimeout(n.current);
            return {
              set: function (r) {
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                t() && (e(), a <= Rs ? (n.current = setTimeout(r, a)) : js(n, r, Date.now() + a));
              },
              clear: e,
              handleRef: n,
            };
          }, [])
        );
      }
      const Ts = e.forwardRef((e, t) => {
        let { className: n, bsPrefix: r, as: a = 'div', ...l } = e;
        return (
          (r = S(r, 'carousel-caption')), (0, v.jsx)(a, { ref: t, className: o()(n, r), ...l })
        );
      });
      Ts.displayName = 'CarouselCaption';
      const Os = Ts,
        As = e.forwardRef((e, t) => {
          let { as: n = 'div', bsPrefix: r, className: a, ...l } = e;
          const i = o()(a, S(r, 'carousel-item'));
          return (0, v.jsx)(n, { ref: t, ...l, className: i });
        });
      As.displayName = 'CarouselItem';
      const _s = As;
      const Ls = e.forwardRef((t, n) => {
        let { defaultActiveIndex: r = 0, ...a } = t;
        const {
            as: l = 'div',
            bsPrefix: i,
            slide: s = !0,
            fade: u = !1,
            controls: c = !0,
            indicators: d = !0,
            indicatorLabels: p = [],
            activeIndex: h,
            onSelect: m,
            onSlide: g,
            onSlid: y,
            interval: b = 5e3,
            keyboard: x = !0,
            onKeyDown: w,
            pause: E = 'hover',
            onMouseOver: k,
            onMouseOut: N,
            wrap: R = !0,
            touch: j = !0,
            onTouchStart: P,
            onTouchMove: T,
            onTouchEnd: O,
            prevIcon: A = (0, v.jsx)('span', {
              'aria-hidden': 'true',
              className: 'carousel-control-prev-icon',
            }),
            prevLabel: _ = 'Previous',
            nextIcon: L = (0, v.jsx)('span', {
              'aria-hidden': 'true',
              className: 'carousel-control-next-icon',
            }),
            nextLabel: I = 'Next',
            variant: z,
            className: D,
            children: F,
            ...M
          } = f({ defaultActiveIndex: r, ...a }, { activeIndex: 'onSelect' }),
          B = S(i, 'carousel'),
          W = C(),
          U = (0, e.useRef)(null),
          [H, V] = (0, e.useState)('next'),
          [K, $] = (0, e.useState)(!1),
          [Q, X] = (0, e.useState)(!1),
          [q, G] = (0, e.useState)(h || 0);
        (0, e.useEffect)(() => {
          Q ||
            h === q ||
            (U.current ? V(U.current) : V((h || 0) > q ? 'next' : 'prev'), s && X(!0), G(h || 0));
        }, [h, Q, q, s]),
          (0, e.useEffect)(() => {
            U.current && (U.current = null);
          });
        let Y,
          J = 0;
        !(function (t, n) {
          let r = 0;
          e.Children.forEach(t, (t) => {
            e.isValidElement(t) && n(t, r++);
          });
        })(F, (e, t) => {
          ++J, t === h && (Y = e.props.interval);
        });
        const Z = ye(Y),
          ee = (0, e.useCallback)(
            (e) => {
              if (Q) return;
              let t = q - 1;
              if (t < 0) {
                if (!R) return;
                t = J - 1;
              }
              (U.current = 'prev'), null == m || m(t, e);
            },
            [Q, q, m, R, J],
          ),
          te = be((e) => {
            if (Q) return;
            let t = q + 1;
            if (t >= J) {
              if (!R) return;
              t = 0;
            }
            (U.current = 'next'), null == m || m(t, e);
          }),
          ne = (0, e.useRef)();
        (0, e.useImperativeHandle)(n, () => ({ element: ne.current, prev: ee, next: te }));
        const re = be(() => {
            !document.hidden &&
              (function (e) {
                if (!e || !e.style || !e.parentNode || !e.parentNode.style) return !1;
                const t = getComputedStyle(e);
                return (
                  'none' !== t.display &&
                  'hidden' !== t.visibility &&
                  'none' !== getComputedStyle(e.parentNode).display
                );
              })(ne.current) &&
              (W ? ee() : te());
          }),
          oe = 'next' === H ? 'start' : 'end';
        Ns(() => {
          s || (null == g || g(q, oe), null == y || y(q, oe));
        }, [q]);
        const ie = `${B}-item-${H}`,
          se = `${B}-item-${oe}`,
          ce = (0, e.useCallback)(
            (e) => {
              le(e), null == g || g(q, oe);
            },
            [g, q, oe],
          ),
          de = (0, e.useCallback)(() => {
            X(!1), null == y || y(q, oe);
          }, [y, q, oe]),
          fe = (0, e.useCallback)(
            (e) => {
              if (x && !/input|textarea/i.test(e.target.tagName))
                switch (e.key) {
                  case 'ArrowLeft':
                    return e.preventDefault(), void (W ? te(e) : ee(e));
                  case 'ArrowRight':
                    return e.preventDefault(), void (W ? ee(e) : te(e));
                }
              null == w || w(e);
            },
            [x, w, ee, te, W],
          ),
          pe = (0, e.useCallback)(
            (e) => {
              'hover' === E && $(!0), null == k || k(e);
            },
            [E, k],
          ),
          he = (0, e.useCallback)(
            (e) => {
              $(!1), null == N || N(e);
            },
            [N],
          ),
          me = (0, e.useRef)(0),
          ve = (0, e.useRef)(0),
          ge = Ps(),
          xe = (0, e.useCallback)(
            (e) => {
              (me.current = e.touches[0].clientX),
                (ve.current = 0),
                'hover' === E && $(!0),
                null == P || P(e);
            },
            [E, P],
          ),
          we = (0, e.useCallback)(
            (e) => {
              e.touches && e.touches.length > 1
                ? (ve.current = 0)
                : (ve.current = e.touches[0].clientX - me.current),
                null == T || T(e);
            },
            [T],
          ),
          Se = (0, e.useCallback)(
            (e) => {
              if (j) {
                const t = ve.current;
                Math.abs(t) > 40 && (t > 0 ? ee(e) : te(e));
              }
              'hover' === E &&
                ge.set(() => {
                  $(!1);
                }, b || void 0),
                null == O || O(e);
            },
            [j, E, ee, te, ge, b, O],
          ),
          Ee = null != b && !K && !Q,
          ke = (0, e.useRef)();
        (0, e.useEffect)(() => {
          var e, t;
          if (!Ee) return;
          const n = W ? ee : te;
          return (
            (ke.current = window.setInterval(
              document.visibilityState ? re : n,
              null != (e = null != (t = Z.current) ? t : b) ? e : void 0,
            )),
            () => {
              null !== ke.current && clearInterval(ke.current);
            }
          );
        }, [Ee, ee, te, Z, b, re, W]);
        const Ce = (0, e.useMemo)(
          () =>
            d &&
            Array.from({ length: J }, (e, t) => (e) => {
              null == m || m(t, e);
            }),
          [d, J, m],
        );
        return (0, v.jsxs)(l, {
          ref: ne,
          ...M,
          onKeyDown: fe,
          onMouseOver: pe,
          onMouseOut: he,
          onTouchStart: xe,
          onTouchMove: we,
          onTouchEnd: Se,
          className: o()(D, B, s && 'slide', u && `${B}-fade`, z && `${B}-${z}`),
          children: [
            d &&
              (0, v.jsx)('div', {
                className: `${B}-indicators`,
                children: Un(F, (e, t) =>
                  (0, v.jsx)(
                    'button',
                    {
                      type: 'button',
                      'data-bs-target': '',
                      'aria-label': null != p && p.length ? p[t] : `Slide ${t + 1}`,
                      className: t === q ? 'active' : void 0,
                      onClick: Ce ? Ce[t] : void 0,
                      'aria-current': t === q,
                    },
                    t,
                  ),
                ),
              }),
            (0, v.jsx)('div', {
              className: `${B}-inner`,
              children: Un(F, (t, n) => {
                const r = n === q;
                return s
                  ? (0, v.jsx)(ue, {
                      in: r,
                      onEnter: r ? ce : void 0,
                      onEntered: r ? de : void 0,
                      addEndListener: ae,
                      children: (n, a) =>
                        e.cloneElement(t, {
                          ...a,
                          className: o()(
                            t.props.className,
                            r && 'entered' !== n && ie,
                            ('entered' === n || 'exiting' === n) && 'active',
                            ('entering' === n || 'exiting' === n) && se,
                          ),
                        }),
                    })
                  : e.cloneElement(t, { className: o()(t.props.className, r && 'active') });
              }),
            }),
            c &&
              (0, v.jsxs)(v.Fragment, {
                children: [
                  (R || 0 !== h) &&
                    (0, v.jsxs)(cn, {
                      className: `${B}-control-prev`,
                      onClick: ee,
                      children: [
                        A,
                        _ && (0, v.jsx)('span', { className: 'visually-hidden', children: _ }),
                      ],
                    }),
                  (R || h !== J - 1) &&
                    (0, v.jsxs)(cn, {
                      className: `${B}-control-next`,
                      onClick: te,
                      children: [
                        L,
                        I && (0, v.jsx)('span', { className: 'visually-hidden', children: I }),
                      ],
                    }),
                ],
              }),
          ],
        });
      });
      Ls.displayName = 'Carousel';
      const Is = Object.assign(Ls, { Caption: Os, Item: _s }),
        zs = n.p + 'static/media/b1.f1b866057a482d6b49ce.png',
        Ds = n.p + 'static/media/ok15.40708c48e2eecf79eb00.png',
        Fs = n.p + 'static/media/dos1.562c40d67b0b964a8555.png',
        Ms = ki(Is)`
  padding-top: 5rem;
  max-width: 800px;
  margin: 2rem auto 0; /* Установка отступа сверху на 2rem и удаление отступа снизу */

  @media (max-width: 320px) {
    max-width: 100%; /* Полная ширина для экранов шириной менее 320px */
  }

  @media (min-width: 321px) and (max-width: 375px) {
    max-width: 100%; /* Полная ширина для экранов от 321px до 375px */
  }

  @media (min-width: 376px) and (max-width: 425px) {
    max-width: 100%; /* Полная ширина для экранов от 376px до 425px */
  }

  @media (min-width: 426px) and (max-width: 768px) {
    max-width: 100%; /* Полная ширина для экранов от 426px до 768px */
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 100%; /* Полная ширина для экранов от 769px до 1024px */
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    max-width: 800px; /* Вернуть максимальную ширину 800px для экранов от 1025px до 1440px */
  }

  @media (min-width: 1441px) and (max-width: 2560px) {
    max-width: 800px; /* Вернуть максимальную ширину 800px для экранов от 1441px до 2560px */
  }

  .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }
`,
        Bs = ki(Is.Item)`
  img {
    width: 100%;
    height: auto;
  }
`;
      const Ws = function () {
          return (0, v.jsxs)(Ms, {
            'data-bs-theme': 'dark',
            touch: !0,
            children: [
              (0, v.jsxs)(Bs, {
                children: [
                  (0, v.jsx)('img', {
                    className: 'd-block w-50 mx-auto',
                    src: zs,
                    alt: 'First slide',
                  }),
                  (0, v.jsxs)(Is.Caption, {
                    children: [
                      (0, v.jsx)('h5', { children: 'First slide label' }),
                      (0, v.jsx)('p', { children: 'Pezzo dal BIGLIA' }),
                    ],
                  }),
                ],
              }),
              (0, v.jsxs)(Bs, {
                children: [
                  (0, v.jsx)('img', {
                    className: 'd-block w-50 mx-auto',
                    src: Ds,
                    alt: 'Second slide',
                  }),
                  (0, v.jsxs)(Is.Caption, {
                    children: [
                      (0, v.jsx)('h5', { children: 'Second slide label' }),
                      (0, v.jsx)('p', { children: 'Pezzo dal Okuma LB-15' }),
                    ],
                  }),
                ],
              }),
              (0, v.jsxs)(Bs, {
                children: [
                  (0, v.jsx)('img', {
                    className: 'd-block w-50 mx-auto',
                    src: Fs,
                    alt: 'Third slide',
                  }),
                  (0, v.jsxs)(Is.Caption, {
                    children: [
                      (0, v.jsx)('h5', { children: 'Third slide label' }),
                      (0, v.jsx)('p', { children: 'Pezzo dal DOOSAN' }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Us = ki(Bt)`
  text-align: center;
`,
        Hs = ki.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`,
        Vs = ki.span`
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 425px) {
    font-size: 30px;
  }
`,
        Ks = ki.span`
  font-size: 50px;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 425px) {
    font-size: 30px;
  }
`,
        $s = ki.span`
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 425px) {
    font-size: 15px;
  }
`,
        Qs = (t) => {
          let { initialValue: n, targetValue: r, duration: a, prefix: o, suffix: l } = t;
          const [i, s] = (0, e.useState)(0),
            [u, c] = (0, e.useState)(!1);
          return (
            (0, e.useEffect)(() => {
              const e = Math.ceil((r - n) / (a / 10));
              let t = 0;
              const o = () => {
                const n = document.getElementById('adaptiveCounter').getBoundingClientRect().top;
                if (!u && n <= window.innerHeight) {
                  c(!0);
                  const n = setInterval(() => {
                    (t += e),
                      s(t),
                      ((e > 0 && t >= r) || (e < 0 && t <= r)) && (clearInterval(n), s(r));
                  }, 10);
                }
              };
              return (
                window.addEventListener('scroll', o),
                () => {
                  window.removeEventListener('scroll', o);
                }
              );
            }, [u, n, r, a]),
            (0, v.jsx)(Us, {
              fluid: !0,
              id: 'adaptiveCounter',
              children: (0, v.jsx)(Pi, {
                children: (0, v.jsx)(Jn, {
                  children: (0, v.jsxs)(Hs, {
                    children: [
                      o && (0, v.jsx)(Vs, { children: o }),
                      (0, v.jsx)(Ks, { children: i }),
                      l && (0, v.jsx)($s, { children: l }),
                    ],
                  }),
                }),
              }),
            })
          );
        },
        Xs = n.p + 'static/media/fresa.5e10db44af7c4a25904e.png',
        qs = ki(Bt)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 0rem;
`,
        Gs = ki(Zi)`
  width: 18rem;
  border: none;
  margin: 0.5rem;

  @media (max-width: 320px) {
    width: 100%;
  }
`,
        Ys = ki(Zi.Img)`
  width: 50%;
  margin: 0 auto;
  padding-top: 1rem;
`,
        Js = ki(Zi.Title)`
  text-align: center;
  font-size: 18px;
`;
      const Zs = function () {
          return (0, v.jsx)(qs, {
            children: (0, v.jsxs)(Pi, {
              xs: 1,
              md: 1,
              lg: 3,
              xl: 3,
              children: [
                (0, v.jsxs)(Gs, {
                  children: [
                    (0, v.jsx)(Ys, {
                      variant: 'top',
                      src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAELElEQVR4nO2bv28cRRTHV+KHhEARRESc5y1xwxIRUSUSRRrSJhEdpkGiQfjmnWUFlIIKAeI/AFKk4EcbC+wCE3LvnTnRpLKQUgTKIJIGCAiSEMTZsdHkbCnIe+fZW9/Nzt33I03l09z4+31v5u2bvSQBAAAAAADAm9mp9pN10uPWKFuSs9bIN3WSk/4zgEGF/taS/sqkmzuG0a/9ZgVeMMkHTLKRK3b++NhvZuAFk3xeQHyXAQ2/mYEXZ55qPmqNfudtQCov+s0MhmLCfO3CAf+ZQSET2OiVXQz4xX9GUIgGtV5mkrX++7+0i80KvMW3u4mPCmh04jdI163RH1EBDRkmmcmJ/PV6qq/mHsyogEYj/vZn5vdf2Mckl7p/kw1UQCMU/34TLOmnTPreXn3/RMMFxAd7DMQPCMQfMWwuPs1GvmCSm2zkjt3Z8cS2M1zx9fc+D1QQf5h0Iz9ffJcJdSOvDHUBk8rr6cX9TDrrIry3AXon9DrHipnDCw+zab7EpAtspONxofJn6DWPBTzVPMqkH1mSG4VutEjPh157fFUMyU1LslRPWy90txj5vqDo2/v/jXlqp6H/t3GoYjZ7D7nCJG/PHWwdcduSJf3LDRf5EH8PqphekW2NfDg31Tri+x2gD91tZ1fh15lEmfS1t9JLj/SbDxRgJll4gKl3NWON3HVbTGO6XSsyL/CgcaD9mDW6jComAI3pdo1JV1HFBKBeax22JD/tFL9125LeQhUzRNisHGOS33L2+sv1tEXJCMi+XDv1zGLnera0tllsdK49u7h2Ion6XRwj/+T0a5ruKnBU63BCFhd/ayx2fk5ihElOW9K7OQ9Sn7ybtB8c5VoGFn9rJLGVmZbkbI7wG6EuvifGgDPu/UuSr3I6lP+GvBSfCAMavcpMo3+4X6eEXNtYGvD/bqbe5lT+zqnxr3JNngu91rEzwKebaY1crkp3slIG5PXhrVk51PPzB5efsGnzeSY95Xr1lvT9/IcqvU98XXZth6QiVMaAXpFrjdyaI3nTNcHYyLmtg3TVXe8N0K/vzB5dfSipEBUyoFgffqBhqncnWx0D/PrwZcf5pGJEbYAldQ2zH5hELOln7gxoGH3HNdFiuZPNqmKAO3D77N1X74lL8ob7ub47eE9Ptx/ve55EciebVcYAs3LIPRjFErnb3KvAjFwfdFusjAGxRe421si1MudSpQyIES5ZGMCAksCAwDAyAAZMNIwMgAFRkw38VkJ3IANCvpWwBAPKZ8BSuQchZAAMiJsMGQADsknuBWXIABiQxZwBofvxPOlPwqH78TzpBoQWgGEADAhK6AhkZAAMCEroCGRkAAyY6H48x54BsffjOX4D4haAYQAMKEXsEcjIABhQitgjkJEBMKAUsUcgIwNgQClij0BGBsAAAAAAAAAAAAAAJFv8B8Z3Si9RkQ/3AAAAAElFTkSuQmCC',
                    }),
                    (0, v.jsxs)(Zi.Body, {
                      children: [
                        (0, v.jsx)(Js, { children: 'Anni di esperienza' }),
                        (0, v.jsx)(Zi.Text, {
                          children: (0, v.jsx)(Qs, {
                            initialValue: 0,
                            targetValue: 30,
                            duration: 5e3,
                            prefix: '+',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, v.jsxs)(Gs, {
                  children: [
                    (0, v.jsx)(Ys, { variant: 'top', src: Xs }),
                    (0, v.jsxs)(Zi.Body, {
                      children: [
                        (0, v.jsx)(Js, { children: 'Pezzi prodotti annualmente' }),
                        (0, v.jsx)(Zi.Text, {
                          children: (0, v.jsx)(Qs, {
                            initialValue: 0,
                            targetValue: 25e4,
                            duration: 2e3,
                            prefix: '+',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, v.jsxs)(Gs, {
                  children: [
                    (0, v.jsx)(Ys, {
                      variant: 'top',
                      src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAM6ElEQVR4nO1dDVRU1RY+8bRM65WvH12v12vVWvlc69VyVc/30lRAxDJ8lmYJKv7SH2OGmvYjppZJVPAMsyxLMMhfLBuSBAlHJDTiT0BIQFBxnBmEuXef8Wn1qvPWnmbw3su9M8wfMyN3r/WtBcwdzpz9zT5nn3322YcQVVRRRRVVVFFFFVWCUAwGwwAAWAgABymlZgD4kVLaTCn9BABGeKMNxliIxWKJppTmAIAeAH4GAAMAfEEpnYyve6OdoBdK6SgAOE0pZXIAgN8opemMsavcbcNsNv+VUnpEqQ1bO0UXLly4lfRmAYBZAPCTI0UJsI8x9gdX20AlU0pPdqcNjuNMPM//g/Q2YYxdAQCrbN/+7pBh/xYvcrUtANC50gbHcRdbW1unkN4ijLErKaVbXFGSAOdxvuluWxaLJcyddnie/7W5uXkZudyF5/mBAFDoSBkNx0+ywoLvWUeHWemZR7rbHqX0P3L/o7XVwPbnfcfOnjU5JKa1tXXTZTvZcxx3OwDUOVLAl58XsXFjFrGwEQvZS0s+UBq29JTSsm6CSt/f1tbOpk5aYW1jysREVlVx3BkpeXq9vj+5nITn+eEAYHQwN7AP39/Dwkc+b1UU4tGHX3FnSGPOcKymqbMNxEPhL7Bv9n/v8D16vb7WZDINJpeDWCyWcZRSi1JnzR0cW71is0hJiMyMfT4hhOfBan3CtsY+kMC2ZeU7fJ/RaGypra0NblLOnz8/mFLartRJHMMXPrNOpJyIUQlsx9YCn5BBO0nh2dtJW7t8Cd55c5uVMKX3NTU1lRNC3F4P+V0AYKNS5xobTrHYaa+LFDJh7AvswDdlPiWDCvDZp3ks/IFLw6R97mo/16H4ntTU1NWEkH4k2IQx1o9Syst1qqy0jj0y4RWRIqLGLWMF+aVWonoSGR/v7ULKk3PeYqdPnZUlpLy8/DAh5EFCyBUkmMRisdwt16HvDtew8WFLugwXgYaYx1Yxo6Gty+c3GAxthJAYQsgQEkzC83ykHCFvrf3M78oO6ybkhk+O4360ERJFgkk4jrtHjpAiXSUbN/r3tUYgY8rERKY/Y5SzkHM2QhBXk2ARXExhqEOelAo2IWKpSAETI19kebmHWWX5Dz2KDJk5BJ0NnF/kPntVVVWpgJA/kWASSumnSt5KTXUje/yRV0WKmBy1nJWX1feYl/VFtq6LtT4bl8LOtHa1DDtSUlLWCQi5jgSTmM3m2yil/1Xq3MmTehY3K1mkEJzwMc7kSyLAFhmQDlMrXt7E2tuVXd7GxsbjISEh021kPEEIcXk7wO8CABN5nv9FqZMYW1qasKHLyvnzbJ3PCFmzMkPUHoZskCAkSuk9RqOxIzw8/DmBdYwhwSa4/QoAewDgV+crZ7H3NSVquU/IqDt2QtQOBjMxqOnsfWaz+aJOp9s3atSoeEJIdFDNH+3t7X8EgI9d3YDC+JV9gk3QvOsTQoyGNjbpoZc6HYniQ1UuvR+JKS4uXoubbCQYhOf5Oyilje4qrKK83vqNxaHMV0PWiabT7PNdB9iJpla3/wcA7MJoBAlkAYAhAHDWV4oMQOTjDigJRDGbzdcBQL2zTrQ0n2FHSmqsa47cr0oCEgX5pVZLNZm6ZaWbSSAKpTRT6UObzZx1v2HO9LV+X4GHuQCc8BctSGMlxUcdkmKxWNAFFgmmLQHAnRjTA4AbepqMUKUJHPfIZ0Wv8btywzzE6yszFPf5AeCMPfmC47h7AWA3AFyQPFNJKX2WMdbH54QAQIHcB/2hvqXTo7kckKBJs1q7XF95nn+OUrrcmYtPKS21WCyDfEnGnXLWgd8m6QbUP8OXsz9Py2D94/ayPs8UBCyufDqfXTt3D7tj8vts9AOLRX1Y984OJSsRWYQjdHR0nKCU3ugrQpYqrSmEHfn7hGQWEn+AEU1RUKH//L3s/tCXL80roxdZLd9TD+306dM/JCUlDfQ6IZTSL+UaxA0eeyeGj00MSjKIDdfM1bLQEZciwmmpu7ziNldXVx+67777vJtiRClt6jJ31DWLrGNwTKbflUo8xF0TLgVB0UlxpmyMi+ECF2NkStvBiKKioh2EEO9N9HL75gcPVIgIueqpPL8rlHiIW55I7+zPg2FLnBKyIW135/PTJq+0ZksqPZuTk5PqtT16uQk9Z88hESEh8Tq/K5R4iJuni9OGHIV2MCwj9dDin0xRDO1jNDw9PV3jFULkGtBKCXk2+Am5SUKI0ir+20NHO9NhpUh88SPFvK+Ojo6L69evn6QSovEeIZimiulMjtYyOJQpWZbBYGjXaDR3qxai8ZwQ3P2UbkkrYftn+xVJqaysxLwv90Mt6pBF2bm2DjZ/1psipQuTOMaHLmGRYxaL1jKY6KFESlxcXAIhxD13uLcTwvPAXlwsTt7WPJXKNr73hSilaK/2W1F2P6bNHq2SPwqh1Wp3EUIi3PK8ejshWzbniv6O4SJMIt+08UsRIfjsRx9c+hti+tTVspN8RUXFEdu+/V9UQjSuEfLaq+miMy32fC45QnCxiFFjYTIHDncyK/gKGyGjVUI0rhFSfbTBunKfHfOG6DSWHCH28zBIIuagffJRjuyQdfDgwf02Qh5VCdF4tg5xRkh3kJaW9p4g90udQ4gfCTGZTDBo0KA5qoVoAoMQgXWocwjxMyE5OTnZAjIQrpf66O1uL/UCIXq93piYmJgkIWO8ug7R9Cwh9fX1xxYsWLCib9++9gRuO7A4QrcrVqgWMsI7hOTn52slRNiTuN3fRVSHLOoNQqYSQu4lhNzkNhEqIe3etBA81esdUS2EqoSQy8TLUi1EoxKirkNGqBbC1CFLXakzdQ7RqJO66vaO8K6XpdfrTVqtdue8efOeVNchGv+7vXbYzvG/xRjzvHaKujCkXgu/A8B+Typ4q4RQ7+6HIGprazd5lHitWgj1KiEcx/0SFRU11e06KiohlDWfaO1ShMARIefOdbDqqgbFxOvt27dnEkL+pRKicX1S35d72Jpfhdi984BTQk62nGHRU34/Xbb4ufWyhJSVlRXbosCun0Ps7Rby6isfi0rc6grLFQnBMyXzZiY59dZqamrsiXKuW0lvJ6Sw4HvZnF0pIVjx6IXnxWWo8Hc5/ZWWltotZKJKiMb1dQhmIApfQwLeXJMl+l1afio2eg0zyFQ9RWRlZWWoiXIazxaGb6zeInpdaDXCnxGYRooVieTIMJvNPw0bNuwpGyGPqRaicY8QrPCAlR6Ez8gBD4xiIWkltxdDKYKEh7EqIRr3Qyf4tzkzlAvsYHG2/H3K9SSPHTtWM2DAgJkCQu5UCdF4FsvC8lP2+0mk2JqZp0jGqVOnzgwZMmS+gIxJbp1fB4AuBS6/0hZLvKzgreJAbLh5unhSxsWdknLxWALeSyJ8PiV5m+LzRqORi4iIEBbYnOZ2SpBcBbniokrRh7l6fq7fFUo8xK1TN11ybSOWOg2B4CUx9prALy/90Or2Kk3i8fHxKyTJcrcTd8V2tZCoEVyNCj2LWx//xO8KJR7insjXOvvz9Ny3nRJiP8yD1enwkI7c6zzP/5acnJwiIcOzY9EAsE2uMbzywd6BkaOXWUse+VupxE3cNEM8f2ze9FW3CHGGzMzMdAkZI4mnwvP8DLnGMMYj7MTwsStYv7iv/a5c4iJunLFdVDMLS8ue1Tu+3a07KCwszJWQgaduQ7x1Fd7P0gbxgOOShe+JSBkzchH7279T2aCYTDYwNpsNjN0VkLghdqe12Myw8V1LEwoDiJKJ+RyGzrtDRllZWYkk4x2vvvBedVNKaYbshzS0sXmx4mBaMGOdQjU5xNq1a99ZtWpVcltbGyg9g4V6dDpd3vXXXx8rIANvFb2WeFPw8l8AuCj3IfDYL97CJg0fBBMmRCxlO7cpX1TW3NzcbC/Sj2sJrVa7o6WlpRk9KLw1FK2npKTkgIw39bjPSpZTSlc6MlO8hmLta58qLpoCDRGjEtjcGUls44Y9DmtdcRz3v9mzZ78kORd4i+0EbUy/fv1myJwBsVuG74ph4hWlHMdpuzOGYoFM3GXr6QvAGrsJLCTj6Po8IbKysrZIFG3/xuMJqPttViB8HQOGeCO178uUm0yma4xGY5U3XMJgQG5u7h6JsofLqAX3xrHY5WDbBTA9e7cuprHU1dXl+ltZ1IfAeWH37t1bJWSgp9SXBKKEhob2yc7OftdkMsneYxjMaGlpacaDmhIyHnX7kGYPSp+hQ4eOx1JDeOzX34qkHqKhoeE4HuqXmaQf9rrb6kPBhK+70OOYOXPmMkxvKSws/Lq8vPwIxv4DFXV1ddVlZWXf6nS6rzds2PB+ZGTkQgVP6f6AHaacSH9bBsU0hY4FE6IJIeFeOTEbAILhgdtsQbQHbWNvdAAoOcYBHrNlf+D6YmgwDU+qqKKKKqqooooqqhAX5P9BQqKrZLqIWwAAAABJRU5ErkJggg==',
                    }),
                    (0, v.jsxs)(Zi.Body, {
                      children: [
                        (0, v.jsx)(Js, { children: 'Azienda' }),
                        (0, v.jsx)(Zi.Text, {
                          children: (0, v.jsx)(Qs, {
                            initialValue: 0,
                            targetValue: 1500,
                            duration: 2e3,
                            prefix: '+',
                            suffix: 'MQ',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        eu = ki(Bt)`
  padding-top: 2rem;
  text-align: center;

  @media (max-width: 576px) {
    padding-top: 1rem;
  }
`,
        tu = () =>
          (0, v.jsx)(v.Fragment, {
            children: (0, v.jsxs)(eu, { children: [(0, v.jsx)(Ws, {}), (0, v.jsx)(Zs, {})] }),
          }),
        nu = n.p + 'static/media/pneumatica.c744a81b8b7877439f98.png',
        ru = n.p + 'static/media/automotive.e77227949f77b7f5eb6f.png',
        au = n.p + 'static/media/Oliodinamica.bd5d2846a9c5ca96bcee.png',
        ou = n.p + 'static/media/varia.d8c26d7499b348cc6583.png',
        lu = () => {
          const [t, n] = (0, e.useState)(0);
          return (0, v.jsxs)(Is, {
            activeIndex: t,
            onSelect: (e) => {
              n(e);
            },
            style: { backgroundColor: 'white' },
            children: [
              (0, v.jsxs)(Is.Item, {
                children: [
                  (0, v.jsx)('img', {
                    src: nu,
                    alt: 'Pneumatica',
                    title: 'Pneumatica',
                    loading: 'lazy',
                    className: 'd-block mx-auto',
                    style: { maxWidth: '100%', height: '10vh' },
                  }),
                  (0, v.jsxs)(Jn, {
                    className:
                      'mx-auto d-flex flex-column align-items-center justify-content-center text-center py-3',
                    children: [
                      (0, v.jsx)('h3', { className: 'display-8', children: 'Pneumatica' }),
                      (0, v.jsx)('p', {
                        className: 'lead',
                        style: { fontstyle: '50px' },
                        children: '50%',
                      }),
                    ],
                  }),
                ],
              }),
              (0, v.jsxs)(Is.Item, {
                children: [
                  (0, v.jsx)('img', {
                    src: ru,
                    alt: 'Automotive',
                    title: 'Automotive',
                    loading: 'lazy',
                    className: 'd-block mx-auto',
                    style: { maxWidth: '100%', height: '10vh' },
                  }),
                  (0, v.jsxs)(Jn, {
                    className:
                      'mx-auto d-flex flex-column align-items-center justify-content-center text-center py-3',
                    children: [
                      (0, v.jsx)('h3', { className: 'display-8', children: 'Automotive' }),
                      (0, v.jsx)('p', {
                        className: 'lead',
                        style: { fontstyle: '50px' },
                        children: '20%',
                      }),
                    ],
                  }),
                ],
              }),
              (0, v.jsxs)(Is.Item, {
                children: [
                  (0, v.jsx)('img', {
                    src: au,
                    alt: 'Oliodinamica',
                    title: 'Oliodinamica',
                    loading: 'lazy',
                    className: 'd-block mx-auto',
                    style: { maxWidth: '100%', height: '10vh' },
                  }),
                  (0, v.jsxs)(Jn, {
                    className:
                      'mx-auto d-flex flex-column align-items-center justify-content-center text-center py-3',
                    children: [
                      (0, v.jsx)('h3', { className: 'display-8', children: 'Oliodinamica' }),
                      (0, v.jsx)('p', {
                        className: 'lead',
                        style: { fontstyle: '50px' },
                        children: '15%',
                      }),
                    ],
                  }),
                ],
              }),
              (0, v.jsxs)(Is.Item, {
                children: [
                  (0, v.jsx)('img', {
                    src: ou,
                    alt: 'Varia',
                    title: 'Varia',
                    loading: 'lazy',
                    className: 'd-block mx-auto',
                    style: { maxWidth: '100%', height: '10vh' },
                  }),
                  (0, v.jsxs)(Jn, {
                    className:
                      'mx-auto d-flex flex-column align-items-center justify-content-center text-center py-3',
                    children: [
                      (0, v.jsx)('h3', { className: 'display-8', children: 'Varia' }),
                      (0, v.jsx)('p', {
                        className: 'lead',
                        style: { fontstyle: '50px' },
                        children: '15%',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        iu = n.p + 'static/media/prodotti1.f0577c8fcddedf3c892d.jpg',
        su = () =>
          (0, v.jsxs)(Bt, {
            style: { marginTop: '5rem', maxWidth: '100%', backgroundColor: 'black' },
            children: [
              (0, v.jsx)('img', {
                src: iu,
                alt: 'prodotti',
                className: 'img-fluid',
                style: { width: '100%', marginTop: '1rem' },
              }),
              (0, v.jsx)(lu, {}),
            ],
          });
      var uu = n(264),
        cu = n.n(uu);
      const du = function () {
          return (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsxs)(Ta, {
                children: [
                  (0, v.jsx)(Ni, {}),
                  (0, v.jsxs)(ka, {
                    children: [
                      (0, v.jsx)(Sa, { path: '/', element: (0, v.jsx)(Cs, {}) }),
                      (0, v.jsx)(Sa, { path: '/technologia', element: (0, v.jsx)(tu, {}) }),
                      (0, v.jsx)(Sa, { path: '/prodotti', element: (0, v.jsx)(su, {}) }),
                      (0, v.jsx)(Sa, { path: '/contatti', element: (0, v.jsx)(cu(), {}) }),
                    ],
                  }),
                ],
              }),
              (0, v.jsx)(Ri, {}),
            ],
          });
        },
        fu = (e) => {
          e &&
            e instanceof Function &&
            n
              .e(453)
              .then(n.bind(n, 453))
              .then((t) => {
                let { getCLS: n, getFID: r, getFCP: a, getLCP: o, getTTFB: l } = t;
                n(e), r(e), a(e), o(e), l(e);
              });
        };
      r
        .createRoot(document.getElementById('root'))
        .render((0, v.jsx)(e.StrictMode, { children: (0, v.jsx)(du, {}) })),
        fu();
    })();
})();
//# sourceMappingURL=main.4584db76.js.map
