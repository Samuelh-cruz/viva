/* axios v0.19.2 | (c) 2020 by Matt Zabriskie */ !(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.axios = t())
    : (e.axios = t());
})(this, function () {
  return (function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { exports: {}, id: r, loaded: !1 });
      return e[r].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports;
    }
    var n = {};
    return (t.m = e), (t.c = n), (t.p = ""), t(0);
  })([
    function (e, t, n) {
      e.exports = n(1);
    },
    function (e, t, n) {
      "use strict";

      function r(e) {
        var t = new s(e),
          n = i(s.prototype.request, t);
        return o.extend(n, s.prototype, t), o.extend(n, t), n;
      }
      var o = n(2),
        i = n(3),
        s = n(4),
        a = n(22),
        u = n(10),
        c = r(u);
      (c.Axios = s),
        (c.create = function (e) {
          return r(a(c.defaults, e));
        }),
        (c.Cancel = n(23)),
        (c.CancelToken = n(24)),
        (c.isCancel = n(9)),
        (c.all = function (e) {
          return Promise.all(e);
        }),
        (c.spread = n(25)),
        (e.exports = c),
        (e.exports.default = c);
    },
    function (e, t, n) {
      "use strict";

      function r(e) {
        return "[object Array]" === j.call(e);
      }

      function o(e) {
        return "undefined" == typeof e;
      }

      function i(e) {
        return (
          null !== e &&
          !o(e) &&
          null !== e.constructor &&
          !o(e.constructor) &&
          "function" == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      }

      function s(e) {
        return "[object ArrayBuffer]" === j.call(e);
      }

      function a(e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      }

      function u(e) {
        var t;
        return (t =
          "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && e.buffer instanceof ArrayBuffer);
      }

      function c(e) {
        return "string" == typeof e;
      }

      function f(e) {
        return "number" == typeof e;
      }

      function p(e) {
        return null !== e && "object" == typeof e;
      }

      function d(e) {
        return "[object Date]" === j.call(e);
      }

      function l(e) {
        return "[object File]" === j.call(e);
      }

      function h(e) {
        return "[object Blob]" === j.call(e);
      }

      function m(e) {
        return "[object Function]" === j.call(e);
      }

      function y(e) {
        return p(e) && m(e.pipe);
      }

      function g(e) {
        return (
          "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        );
      }

      function v(e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "");
      }

      function x() {
        return (
          ("undefined" == typeof navigator ||
            ("ReactNative" !== navigator.product &&
              "NativeScript" !== navigator.product &&
              "NS" !== navigator.product)) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      }

      function w(e, t) {
        if (null !== e && "undefined" != typeof e)
          if (("object" != typeof e && (e = [e]), r(e)))
            for (var n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e);
          else
            for (var i in e)
              Object.prototype.hasOwnProperty.call(e, i) &&
                t.call(null, e[i], i, e);
      }

      function b() {
        function e(e, n) {
          "object" == typeof t[n] && "object" == typeof e
            ? (t[n] = b(t[n], e))
            : (t[n] = e);
        }
        for (var t = {}, n = 0, r = arguments.length; n < r; n++)
          w(arguments[n], e);
        return t;
      }

      function E() {
        function e(e, n) {
          "object" == typeof t[n] && "object" == typeof e
            ? (t[n] = E(t[n], e))
            : "object" == typeof e
            ? (t[n] = E({}, e))
            : (t[n] = e);
        }
        for (var t = {}, n = 0, r = arguments.length; n < r; n++)
          w(arguments[n], e);
        return t;
      }

      function S(e, t, n) {
        return (
          w(t, function (t, r) {
            n && "function" == typeof t ? (e[r] = C(t, n)) : (e[r] = t);
          }),
          e
        );
      }
      var C = n(3),
        j = Object.prototype.toString;
      e.exports = {
        isArray: r,
        isArrayBuffer: s,
        isBuffer: i,
        isFormData: a,
        isArrayBufferView: u,
        isString: c,
        isNumber: f,
        isObject: p,
        isUndefined: o,
        isDate: d,
        isFile: l,
        isBlob: h,
        isFunction: m,
        isStream: y,
        isURLSearchParams: g,
        isStandardBrowserEnv: x,
        forEach: w,
        merge: b,
        deepMerge: E,
        extend: S,
        trim: v,
      };
    },
    function (e, t) {
      "use strict";
      e.exports = function (e, t) {
        return function () {
          for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
            n[r] = arguments[r];
          return e.apply(t, n);
        };
      };
    },
    function (e, t, n) {
      "use strict";

      function r(e) {
        (this.defaults = e),
          (this.interceptors = { request: new s(), response: new s() });
      }
      var o = n(2),
        i = n(5),
        s = n(6),
        a = n(7),
        u = n(22);
      (r.prototype.request = function (e) {
        "string" == typeof e
          ? ((e = arguments[1] || {}), (e.url = arguments[0]))
          : (e = e || {}),
          (e = u(this.defaults, e)),
          e.method
            ? (e.method = e.method.toLowerCase())
            : this.defaults.method
            ? (e.method = this.defaults.method.toLowerCase())
            : (e.method = "get");
        var t = [a, void 0],
          n = Promise.resolve(e);
        for (
          this.interceptors.request.forEach(function (e) {
            t.unshift(e.fulfilled, e.rejected);
          }),
            this.interceptors.response.forEach(function (e) {
              t.push(e.fulfilled, e.rejected);
            });
          t.length;

        )
          n = n.then(t.shift(), t.shift());
        return n;
      }),
        (r.prototype.getUri = function (e) {
          return (
            (e = u(this.defaults, e)),
            i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
          );
        }),
        o.forEach(["delete", "get", "head", "options"], function (e) {
          r.prototype[e] = function (t, n) {
            return this.request(o.merge(n || {}, { method: e, url: t }));
          };
        }),
        o.forEach(["post", "put", "patch"], function (e) {
          r.prototype[e] = function (t, n, r) {
            return this.request(
              o.merge(r || {}, { method: e, url: t, data: n })
            );
          };
        }),
        (e.exports = r);
    },
    function (e, t, n) {
      "use strict";

      function r(e) {
        return encodeURIComponent(e)
          .replace(/%40/gi, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      var o = n(2);
      e.exports = function (e, t, n) {
        if (!t) return e;
        var i;
        if (n) i = n(t);
        else if (o.isURLSearchParams(t)) i = t.toString();
        else {
          var s = [];
          o.forEach(t, function (e, t) {
            null !== e &&
              "undefined" != typeof e &&
              (o.isArray(e) ? (t += "[]") : (e = [e]),
              o.forEach(e, function (e) {
                o.isDate(e)
                  ? (e = e.toISOString())
                  : o.isObject(e) && (e = JSON.stringify(e)),
                  s.push(r(t) + "=" + r(e));
              }));
          }),
            (i = s.join("&"));
        }
        if (i) {
          var a = e.indexOf("#");
          a !== -1 && (e = e.slice(0, a)),
            (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
        }
        return e;
      };
    },
    function (e, t, n) {
      "use strict";

      function r() {
        this.handlers = [];
      }
      var o = n(2);
      (r.prototype.use = function (e, t) {
        return (
          this.handlers.push({ fulfilled: e, rejected: t }),
          this.handlers.length - 1
        );
      }),
        (r.prototype.eject = function (e) {
          this.handlers[e] && (this.handlers[e] = null);
        }),
        (r.prototype.forEach = function (e) {
          o.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }),
        (e.exports = r);
    },
    function (e, t, n) {
      "use strict";

      function r(e) {
        e.cancelToken && e.cancelToken.throwIfRequested();
      }
      var o = n(2),
        i = n(8),
        s = n(9),
        a = n(10);
      e.exports = function (e) {
        r(e),
          (e.headers = e.headers || {}),
          (e.data = i(e.data, e.headers, e.transformRequest)),
          (e.headers = o.merge(
            e.headers.common || {},
            e.headers[e.method] || {},
            e.headers
          )),
          o.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            function (t) {
              delete e.headers[t];
            }
          );
        var t = e.adapter || a.adapter;
        return t(e).then(
          function (t) {
            return (
              r(e), (t.data = i(t.data, t.headers, e.transformResponse)), t
            );
          },
          function (t) {
            return (
              s(t) ||
                (r(e),
                t &&
                  t.response &&
                  (t.response.data = i(
                    t.response.data,
                    t.response.headers,
                    e.transformResponse
                  ))),
              Promise.reject(t)
            );
          }
        );
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(2);
      e.exports = function (e, t, n) {
        return (
          r.forEach(n, function (n) {
            e = n(e, t);
          }),
          e
        );
      };
    },
    function (e, t) {
      "use strict";
      e.exports = function (e) {
        return !(!e || !e.__CANCEL__);
      };
    },
    function (e, t, n) {
      "use strict";

      function r(e, t) {
        !i.isUndefined(e) &&
          i.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = t);
      }

      function o() {
        var e;
        return (
          "undefined" != typeof XMLHttpRequest
            ? (e = n(12))
            : "undefined" != typeof process &&
              "[object process]" === Object.prototype.toString.call(process) &&
              (e = n(12)),
          e
        );
      }
      var i = n(2),
        s = n(11),
        a = { "Content-Type": "application/x-www-form-urlencoded" },
        u = {
          adapter: o(),
          transformRequest: [
            function (e, t) {
              return (
                s(t, "Accept"),
                s(t, "Content-Type"),
                i.isFormData(e) ||
                i.isArrayBuffer(e) ||
                i.isBuffer(e) ||
                i.isStream(e) ||
                i.isFile(e) ||
                i.isBlob(e)
                  ? e
                  : i.isArrayBufferView(e)
                  ? e.buffer
                  : i.isURLSearchParams(e)
                  ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString())
                  : i.isObject(e)
                  ? (r(t, "application/json;charset=utf-8"), JSON.stringify(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              if ("string" == typeof e)
                try {
                  e = JSON.parse(e);
                } catch (e) {}
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
        };
      (u.headers = { common: { Accept: "application/json, text/plain, */*" } }),
        i.forEach(["delete", "get", "head"], function (e) {
          u.headers[e] = {};
        }),
        i.forEach(["post", "put", "patch"], function (e) {
          u.headers[e] = i.merge(a);
        }),
        (e.exports = u);
    },
    function (e, t, n) {
      "use strict";
      var r = n(2);
      e.exports = function (e, t) {
        r.forEach(e, function (n, r) {
          r !== t &&
            r.toUpperCase() === t.toUpperCase() &&
            ((e[t] = n), delete e[r]);
        });
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        o = n(13),
        i = n(5),
        s = n(16),
        a = n(19),
        u = n(20),
        c = n(14);
      e.exports = function (e) {
        return new Promise(function (t, f) {
          var p = e.data,
            d = e.headers;
          r.isFormData(p) && delete d["Content-Type"];
          var l = new XMLHttpRequest();
          if (e.auth) {
            var h = e.auth.username || "",
              m = e.auth.password || "";
            d.Authorization = "Basic " + btoa(h + ":" + m);
          }
          var y = s(e.baseURL, e.url);
          if (
            (l.open(
              e.method.toUpperCase(),
              i(y, e.params, e.paramsSerializer),
              !0
            ),
            (l.timeout = e.timeout),
            (l.onreadystatechange = function () {
              if (
                l &&
                4 === l.readyState &&
                (0 !== l.status ||
                  (l.responseURL && 0 === l.responseURL.indexOf("file:")))
              ) {
                var n =
                    "getAllResponseHeaders" in l
                      ? a(l.getAllResponseHeaders())
                      : null,
                  r =
                    e.responseType && "text" !== e.responseType
                      ? l.response
                      : l.responseText,
                  i = {
                    data: r,
                    status: l.status,
                    statusText: l.statusText,
                    headers: n,
                    config: e,
                    request: l,
                  };
                o(t, f, i), (l = null);
              }
            }),
            (l.onabort = function () {
              l && (f(c("Request aborted", e, "ECONNABORTED", l)), (l = null));
            }),
            (l.onerror = function () {
              f(c("Network Error", e, null, l)), (l = null);
            }),
            (l.ontimeout = function () {
              var t = "timeout of " + e.timeout + "ms exceeded";
              e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                f(c(t, e, "ECONNABORTED", l)),
                (l = null);
            }),
            r.isStandardBrowserEnv())
          ) {
            var g = n(21),
              v =
                (e.withCredentials || u(y)) && e.xsrfCookieName
                  ? g.read(e.xsrfCookieName)
                  : void 0;
            v && (d[e.xsrfHeaderName] = v);
          }
          if (
            ("setRequestHeader" in l &&
              r.forEach(d, function (e, t) {
                "undefined" == typeof p && "content-type" === t.toLowerCase()
                  ? delete d[t]
                  : l.setRequestHeader(t, e);
              }),
            r.isUndefined(e.withCredentials) ||
              (l.withCredentials = !!e.withCredentials),
            e.responseType)
          )
            try {
              l.responseType = e.responseType;
            } catch (t) {
              if ("json" !== e.responseType) throw t;
            }
          "function" == typeof e.onDownloadProgress &&
            l.addEventListener("progress", e.onDownloadProgress),
            "function" == typeof e.onUploadProgress &&
              l.upload &&
              l.upload.addEventListener("progress", e.onUploadProgress),
            e.cancelToken &&
              e.cancelToken.promise.then(function (e) {
                l && (l.abort(), f(e), (l = null));
              }),
            void 0 === p && (p = null),
            l.send(p);
        });
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(14);
      e.exports = function (e, t, n) {
        var o = n.config.validateStatus;
        !o || o(n.status)
          ? e(n)
          : t(
              r(
                "Request failed with status code " + n.status,
                n.config,
                null,
                n.request,
                n
              )
            );
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(15);
      e.exports = function (e, t, n, o, i) {
        var s = new Error(e);
        return r(s, t, n, o, i);
      };
    },
    function (e, t) {
      "use strict";
      e.exports = function (e, t, n, r, o) {
        return (
          (e.config = t),
          n && (e.code = n),
          (e.request = r),
          (e.response = o),
          (e.isAxiosError = !0),
          (e.toJSON = function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
            };
          }),
          e
        );
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(17),
        o = n(18);
      e.exports = function (e, t) {
        return e && !r(t) ? o(e, t) : t;
      };
    },
    function (e, t) {
      "use strict";
      e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
      };
    },
    function (e, t) {
      "use strict";
      e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        o = [
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ];
      e.exports = function (e) {
        var t,
          n,
          i,
          s = {};
        return e
          ? (r.forEach(e.split("\n"), function (e) {
              if (
                ((i = e.indexOf(":")),
                (t = r.trim(e.substr(0, i)).toLowerCase()),
                (n = r.trim(e.substr(i + 1))),
                t)
              ) {
                if (s[t] && o.indexOf(t) >= 0) return;
                "set-cookie" === t
                  ? (s[t] = (s[t] ? s[t] : []).concat([n]))
                  : (s[t] = s[t] ? s[t] + ", " + n : n);
              }
            }),
            s)
          : s;
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(2);
      e.exports = r.isStandardBrowserEnv()
        ? (function () {
            function e(e) {
              var t = e;
              return (
                n && (o.setAttribute("href", t), (t = o.href)),
                o.setAttribute("href", t),
                {
                  href: o.href,
                  protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                  host: o.host,
                  search: o.search ? o.search.replace(/^\?/, "") : "",
                  hash: o.hash ? o.hash.replace(/^#/, "") : "",
                  hostname: o.hostname,
                  port: o.port,
                  pathname:
                    "/" === o.pathname.charAt(0)
                      ? o.pathname
                      : "/" + o.pathname,
                }
              );
            }
            var t,
              n = /(msie|trident)/i.test(navigator.userAgent),
              o = document.createElement("a");
            return (
              (t = e(window.location.href)),
              function (n) {
                var o = r.isString(n) ? e(n) : n;
                return o.protocol === t.protocol && o.host === t.host;
              }
            );
          })()
        : (function () {
            return function () {
              return !0;
            };
          })();
    },
    function (e, t, n) {
      "use strict";
      var r = n(2);
      e.exports = r.isStandardBrowserEnv()
        ? (function () {
            return {
              write: function (e, t, n, o, i, s) {
                var a = [];
                a.push(e + "=" + encodeURIComponent(t)),
                  r.isNumber(n) &&
                    a.push("expires=" + new Date(n).toGMTString()),
                  r.isString(o) && a.push("path=" + o),
                  r.isString(i) && a.push("domain=" + i),
                  s === !0 && a.push("secure"),
                  (document.cookie = a.join("; "));
              },
              read: function (e) {
                var t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove: function (e) {
                this.write(e, "", Date.now() - 864e5);
              },
            };
          })()
        : (function () {
            return {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
          })();
    },
    function (e, t, n) {
      "use strict";
      var r = n(2);
      e.exports = function (e, t) {
        t = t || {};
        var n = {},
          o = ["url", "method", "params", "data"],
          i = ["headers", "auth", "proxy"],
          s = [
            "baseURL",
            "url",
            "transformRequest",
            "transformResponse",
            "paramsSerializer",
            "timeout",
            "withCredentials",
            "adapter",
            "responseType",
            "xsrfCookieName",
            "xsrfHeaderName",
            "onUploadProgress",
            "onDownloadProgress",
            "maxContentLength",
            "validateStatus",
            "maxRedirects",
            "httpAgent",
            "httpsAgent",
            "cancelToken",
            "socketPath",
          ];
        r.forEach(o, function (e) {
          "undefined" != typeof t[e] && (n[e] = t[e]);
        }),
          r.forEach(i, function (o) {
            r.isObject(t[o])
              ? (n[o] = r.deepMerge(e[o], t[o]))
              : "undefined" != typeof t[o]
              ? (n[o] = t[o])
              : r.isObject(e[o])
              ? (n[o] = r.deepMerge(e[o]))
              : "undefined" != typeof e[o] && (n[o] = e[o]);
          }),
          r.forEach(s, function (r) {
            "undefined" != typeof t[r]
              ? (n[r] = t[r])
              : "undefined" != typeof e[r] && (n[r] = e[r]);
          });
        var a = o.concat(i).concat(s),
          u = Object.keys(t).filter(function (e) {
            return a.indexOf(e) === -1;
          });
        return (
          r.forEach(u, function (r) {
            "undefined" != typeof t[r]
              ? (n[r] = t[r])
              : "undefined" != typeof e[r] && (n[r] = e[r]);
          }),
          n
        );
      };
    },
    function (e, t) {
      "use strict";

      function n(e) {
        this.message = e;
      }
      (n.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "");
      }),
        (n.prototype.__CANCEL__ = !0),
        (e.exports = n);
    },
    function (e, t, n) {
      "use strict";

      function r(e) {
        if ("function" != typeof e)
          throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
          t = e;
        });
        var n = this;
        e(function (e) {
          n.reason || ((n.reason = new o(e)), t(n.reason));
        });
      }
      var o = n(23);
      (r.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
        (r.source = function () {
          var e,
            t = new r(function (t) {
              e = t;
            });
          return { token: t, cancel: e };
        }),
        (e.exports = r);
    },
    function (e, t) {
      "use strict";
      e.exports = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      };
    },
  ]);
});
//# sourceMappingURL=axios.min.map

(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  else if (typeof define === "function" && define.amd) define([], factory);
  else if (typeof exports === "object") exports["Cleave"] = factory();
  else root["Cleave"] = factory();
})(this, function () {
  return /******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};

    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
      /******/ // Check if module is in cache
      /******/
      if (installedModules[moduleId])
        /******/
        return installedModules[moduleId].exports;

      /******/ // Create a new module (and put it into the cache)
      /******/
      var module = (installedModules[moduleId] = {
        /******/
        exports: {},
        /******/
        id: moduleId,
        /******/
        loaded: false,
        /******/
      });

      /******/ // Execute the module function
      /******/
      modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );

      /******/ // Flag the module as loaded
      /******/
      module.loaded = true;

      /******/ // Return the exports of the module
      /******/
      return module.exports;
      /******/
    }

    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;

    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;

    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";

    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(0);
    /******/
  })(
    /************************************************************************/
    /******/
    [
      /* 0 */
      /***/
      function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function (global) {
          "use strict";

          /**
           * Construct a new Cleave instance by passing the configuration object
           *
           * @param {String | HTMLElement} element
           * @param {Object} opts
           */
          var Cleave = function (element, opts) {
            var owner = this;

            if (typeof element === "string") {
              owner.element = document.querySelector(element);
            } else {
              owner.element =
                typeof element.length !== "undefined" && element.length > 0
                  ? element[0]
                  : element;
            }

            if (!owner.element) {
              throw new Error("[cleave.js] Please check the element");
            }

            opts.initValue = owner.element.value;

            owner.properties = Cleave.DefaultProperties.assign({}, opts);

            owner.init();
          };

          Cleave.prototype = {
            init: function () {
              var owner = this,
                pps = owner.properties;

              // no need to use this lib
              if (
                !pps.numeral &&
                !pps.phone &&
                !pps.creditCard &&
                !pps.time &&
                !pps.date &&
                pps.blocksLength === 0 &&
                !pps.prefix
              ) {
                owner.onInput(pps.initValue);

                return;
              }

              pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);

              owner.isAndroid = Cleave.Util.isAndroid();
              owner.lastInputValue = "";

              owner.onChangeListener = owner.onChange.bind(owner);
              owner.onKeyDownListener = owner.onKeyDown.bind(owner);
              owner.onFocusListener = owner.onFocus.bind(owner);
              owner.onCutListener = owner.onCut.bind(owner);
              owner.onCopyListener = owner.onCopy.bind(owner);

              owner.element.addEventListener("input", owner.onChangeListener);
              owner.element.addEventListener(
                "keydown",
                owner.onKeyDownListener
              );
              owner.element.addEventListener("focus", owner.onFocusListener);
              owner.element.addEventListener("cut", owner.onCutListener);
              owner.element.addEventListener("copy", owner.onCopyListener);

              owner.initPhoneFormatter();
              owner.initDateFormatter();
              owner.initTimeFormatter();
              owner.initNumeralFormatter();

              // avoid touch input field if value is null
              // otherwise Firefox will add red box-shadow for <input required />
              if (pps.initValue || (pps.prefix && !pps.noImmediatePrefix)) {
                owner.onInput(pps.initValue);
              }
            },

            initNumeralFormatter: function () {
              var owner = this,
                pps = owner.properties;

              if (!pps.numeral) {
                return;
              }

              pps.numeralFormatter = new Cleave.NumeralFormatter(
                pps.numeralDecimalMark,
                pps.numeralIntegerScale,
                pps.numeralDecimalScale,
                pps.numeralThousandsGroupStyle,
                pps.numeralPositiveOnly,
                pps.stripLeadingZeroes,
                pps.delimiter
              );
            },

            initTimeFormatter: function () {
              var owner = this,
                pps = owner.properties;

              if (!pps.time) {
                return;
              }

              pps.timeFormatter = new Cleave.TimeFormatter(pps.timePattern);
              pps.blocks = pps.timeFormatter.getBlocks();
              pps.blocksLength = pps.blocks.length;
              pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);
            },

            initDateFormatter: function () {
              var owner = this,
                pps = owner.properties;

              if (!pps.date) {
                return;
              }

              pps.dateFormatter = new Cleave.DateFormatter(pps.datePattern);
              pps.blocks = pps.dateFormatter.getBlocks();
              pps.blocksLength = pps.blocks.length;
              pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);
            },

            initPhoneFormatter: function () {
              var owner = this,
                pps = owner.properties;

              if (!pps.phone) {
                return;
              }

              // Cleave.AsYouTypeFormatter should be provided by
              // external google closure lib
              try {
                pps.phoneFormatter = new Cleave.PhoneFormatter(
                  new pps.root.Cleave.AsYouTypeFormatter(pps.phoneRegionCode),
                  pps.delimiter
                );
              } catch (ex) {
                throw new Error(
                  "[cleave.js] Please include phone-type-formatter.{country}.js lib"
                );
              }
            },

            onKeyDown: function (event) {
              var owner = this,
                pps = owner.properties,
                charCode = event.which || event.keyCode,
                Util = Cleave.Util,
                currentValue = owner.element.value;

              if (
                Util.isAndroidBackspaceKeydown(
                  owner.lastInputValue,
                  currentValue
                )
              ) {
                charCode = 8;
              }

              owner.lastInputValue = currentValue;

              // hit backspace when last character is delimiter
              if (
                charCode === 8 &&
                Util.isDelimiter(
                  currentValue.slice(-pps.delimiterLength),
                  pps.delimiter,
                  pps.delimiters
                )
              ) {
                pps.backspace = true;

                return;
              }

              pps.backspace = false;
            },

            onChange: function () {
              this.onInput(this.element.value);
            },

            onFocus: function () {
              var owner = this,
                pps = owner.properties;

              Cleave.Util.fixPrefixCursor(
                owner.element,
                pps.prefix,
                pps.delimiter,
                pps.delimiters
              );
            },

            onCut: function (e) {
              this.copyClipboardData(e);
              this.onInput("");
            },

            onCopy: function (e) {
              this.copyClipboardData(e);
            },

            copyClipboardData: function (e) {
              var owner = this,
                pps = owner.properties,
                Util = Cleave.Util,
                inputValue = owner.element.value,
                textToCopy = "";

              if (!pps.copyDelimiter) {
                textToCopy = Util.stripDelimiters(
                  inputValue,
                  pps.delimiter,
                  pps.delimiters
                );
              } else {
                textToCopy = inputValue;
              }

              try {
                if (e.clipboardData) {
                  e.clipboardData.setData("Text", textToCopy);
                } else {
                  window.clipboardData.setData("Text", textToCopy);
                }

                e.preventDefault();
              } catch (ex) {
                //  empty
              }
            },

            onInput: function (value) {
              var owner = this,
                pps = owner.properties,
                Util = Cleave.Util;

              // case 1: delete one more character "4"
              // 1234*| -> hit backspace -> 123|
              // case 2: last character is not delimiter which is:
              // 12|34* -> hit backspace -> 1|34*
              // note: no need to apply this for numeral mode
              if (
                !pps.numeral &&
                pps.backspace &&
                !Util.isDelimiter(
                  value.slice(-pps.delimiterLength),
                  pps.delimiter,
                  pps.delimiters
                )
              ) {
                value = Util.headStr(value, value.length - pps.delimiterLength);
              }

              // phone formatter
              if (pps.phone) {
                if (pps.prefix && (!pps.noImmediatePrefix || value.length)) {
                  pps.result =
                    pps.prefix +
                    pps.phoneFormatter.format(value).slice(pps.prefix.length);
                } else {
                  pps.result = pps.phoneFormatter.format(value);
                }
                owner.updateValueState();

                return;
              }

              // numeral formatter
              if (pps.numeral) {
                if (pps.prefix && (!pps.noImmediatePrefix || value.length)) {
                  pps.result = pps.prefix + pps.numeralFormatter.format(value);
                } else {
                  pps.result = pps.numeralFormatter.format(value);
                }
                owner.updateValueState();

                return;
              }

              // date
              if (pps.date) {
                value = pps.dateFormatter.getValidatedDate(value);
              }

              // time
              if (pps.time) {
                value = pps.timeFormatter.getValidatedTime(value);
              }

              // strip delimiters
              value = Util.stripDelimiters(
                value,
                pps.delimiter,
                pps.delimiters
              );

              // strip prefix
              value = Util.getPrefixStrippedValue(
                value,
                pps.prefix,
                pps.prefixLength,
                pps.result
              );

              // strip non-numeric characters
              value = pps.numericOnly ? Util.strip(value, /[^\d]/g) : value;

              // convert case
              value = pps.uppercase ? value.toUpperCase() : value;
              value = pps.lowercase ? value.toLowerCase() : value;

              // prefix
              if (pps.prefix && (!pps.noImmediatePrefix || value.length)) {
                value = pps.prefix + value;

                // no blocks specified, no need to do formatting
                if (pps.blocksLength === 0) {
                  pps.result = value;
                  owner.updateValueState();

                  return;
                }
              }

              // update credit card props
              if (pps.creditCard) {
                owner.updateCreditCardPropsByValue(value);
              }

              // strip over length characters
              value = Util.headStr(value, pps.maxLength);

              // apply blocks
              pps.result = Util.getFormattedValue(
                value,
                pps.blocks,
                pps.blocksLength,
                pps.delimiter,
                pps.delimiters,
                pps.delimiterLazyShow
              );

              owner.updateValueState();
            },

            updateCreditCardPropsByValue: function (value) {
              var owner = this,
                pps = owner.properties,
                Util = Cleave.Util,
                creditCardInfo;

              // At least one of the first 4 characters has changed
              if (Util.headStr(pps.result, 4) === Util.headStr(value, 4)) {
                return;
              }

              creditCardInfo = Cleave.CreditCardDetector.getInfo(
                value,
                pps.creditCardStrictMode
              );

              pps.blocks = creditCardInfo.blocks;
              pps.blocksLength = pps.blocks.length;
              pps.maxLength = Util.getMaxLength(pps.blocks);

              // credit card type changed
              if (pps.creditCardType !== creditCardInfo.type) {
                pps.creditCardType = creditCardInfo.type;

                pps.onCreditCardTypeChanged.call(owner, pps.creditCardType);
              }
            },

            updateValueState: function () {
              var owner = this,
                Util = Cleave.Util,
                pps = owner.properties;

              if (!owner.element) {
                return;
              }

              var endPos = owner.element.selectionEnd;
              var oldValue = owner.element.value;
              var newValue = pps.result;

              endPos = Util.getNextCursorPosition(
                endPos,
                oldValue,
                newValue,
                pps.delimiter,
                pps.delimiters
              );

              // fix Android browser type="text" input field
              // cursor not jumping issue
              if (owner.isAndroid) {
                window.setTimeout(function () {
                  owner.element.value = newValue;
                  Util.setSelection(owner.element, endPos, pps.document, false);
                  owner.callOnValueChanged();
                }, 1);

                return;
              }

              owner.element.value = newValue;
              Util.setSelection(owner.element, endPos, pps.document, false);
              owner.callOnValueChanged();
            },

            callOnValueChanged: function () {
              var owner = this,
                pps = owner.properties;

              pps.onValueChanged.call(owner, {
                target: {
                  value: pps.result,
                  rawValue: owner.getRawValue(),
                },
              });
            },

            setPhoneRegionCode: function (phoneRegionCode) {
              var owner = this,
                pps = owner.properties;

              pps.phoneRegionCode = phoneRegionCode;
              owner.initPhoneFormatter();
              owner.onChange();
            },

            setRawValue: function (value) {
              var owner = this,
                pps = owner.properties;

              value =
                value !== undefined && value !== null ? value.toString() : "";

              if (pps.numeral) {
                value = value.replace(".", pps.numeralDecimalMark);
              }

              pps.backspace = false;

              owner.element.value = value;
              owner.onInput(value);
            },

            getRawValue: function () {
              var owner = this,
                pps = owner.properties,
                Util = Cleave.Util,
                rawValue = owner.element.value;

              if (pps.rawValueTrimPrefix) {
                rawValue = Util.getPrefixStrippedValue(
                  rawValue,
                  pps.prefix,
                  pps.prefixLength,
                  pps.result
                );
              }

              if (pps.numeral) {
                rawValue = pps.numeralFormatter.getRawValue(rawValue);
              } else {
                rawValue = Util.stripDelimiters(
                  rawValue,
                  pps.delimiter,
                  pps.delimiters
                );
              }

              return rawValue;
            },

            getISOFormatDate: function () {
              var owner = this,
                pps = owner.properties;

              return pps.date ? pps.dateFormatter.getISOFormatDate() : "";
            },

            getFormattedValue: function () {
              return this.element.value;
            },

            destroy: function () {
              var owner = this;

              owner.element.removeEventListener(
                "input",
                owner.onChangeListener
              );
              owner.element.removeEventListener(
                "keydown",
                owner.onKeyDownListener
              );
              owner.element.removeEventListener("focus", owner.onFocusListener);
              owner.element.removeEventListener("cut", owner.onCutListener);
              owner.element.removeEventListener("copy", owner.onCopyListener);
            },

            toString: function () {
              return "[Cleave Object]";
            },
          };

          Cleave.NumeralFormatter = __webpack_require__(1);
          Cleave.DateFormatter = __webpack_require__(2);
          Cleave.TimeFormatter = __webpack_require__(3);
          Cleave.PhoneFormatter = __webpack_require__(4);
          Cleave.CreditCardDetector = __webpack_require__(5);
          Cleave.Util = __webpack_require__(6);
          Cleave.DefaultProperties = __webpack_require__(7);

          // for angular directive
          (typeof global === "object" && global ? global : window)["Cleave"] =
            Cleave;

          // CommonJS
          module.exports = Cleave;

          /* WEBPACK VAR INJECTION */
        }).call(
          exports,
          (function () {
            return this;
          })()
        );

        /***/
      },
      /* 1 */
      /***/
      function (module, exports) {
        "use strict";

        var NumeralFormatter = function (
          numeralDecimalMark,
          numeralIntegerScale,
          numeralDecimalScale,
          numeralThousandsGroupStyle,
          numeralPositiveOnly,
          stripLeadingZeroes,
          delimiter
        ) {
          var owner = this;

          owner.numeralDecimalMark = numeralDecimalMark || ".";
          owner.numeralIntegerScale =
            numeralIntegerScale > 0 ? numeralIntegerScale : 0;
          owner.numeralDecimalScale =
            numeralDecimalScale >= 0 ? numeralDecimalScale : 2;
          owner.numeralThousandsGroupStyle =
            numeralThousandsGroupStyle || NumeralFormatter.groupStyle.thousand;
          owner.numeralPositiveOnly = !!numeralPositiveOnly;
          owner.stripLeadingZeroes = stripLeadingZeroes !== false;
          owner.delimiter = delimiter || delimiter === "" ? delimiter : ",";
          owner.delimiterRE = delimiter
            ? new RegExp("\\" + delimiter, "g")
            : "";
        };

        NumeralFormatter.groupStyle = {
          thousand: "thousand",
          lakh: "lakh",
          wan: "wan",
          none: "none",
        };

        NumeralFormatter.prototype = {
          getRawValue: function (value) {
            return value
              .replace(this.delimiterRE, "")
              .replace(this.numeralDecimalMark, ".");
          },

          format: function (value) {
            var owner = this,
              parts,
              partInteger,
              partDecimal = "";

            // strip alphabet letters
            value = value
              .replace(/[A-Za-z]/g, "")
              // replace the first decimal mark with reserved placeholder
              .replace(owner.numeralDecimalMark, "M")

              // strip non numeric letters except minus and "M"
              // this is to ensure prefix has been stripped
              .replace(/[^\dM-]/g, "")

              // replace the leading minus with reserved placeholder
              .replace(/^\-/, "N")

              // strip the other minus sign (if present)
              .replace(/\-/g, "")

              // replace the minus sign (if present)
              .replace("N", owner.numeralPositiveOnly ? "" : "-")

              // replace decimal mark
              .replace("M", owner.numeralDecimalMark);

            // strip any leading zeros
            if (owner.stripLeadingZeroes) {
              value = value.replace(/^(-)?0+(?=\d)/, "$1");
            }

            partInteger = value;

            if (value.indexOf(owner.numeralDecimalMark) >= 0) {
              parts = value.split(owner.numeralDecimalMark);
              partInteger = parts[0];
              partDecimal =
                owner.numeralDecimalMark +
                parts[1].slice(0, owner.numeralDecimalScale);
            }

            if (owner.numeralIntegerScale > 0) {
              partInteger = partInteger.slice(
                0,
                owner.numeralIntegerScale + (value.slice(0, 1) === "-" ? 1 : 0)
              );
            }

            switch (owner.numeralThousandsGroupStyle) {
              case NumeralFormatter.groupStyle.lakh:
                partInteger = partInteger.replace(
                  /(\d)(?=(\d\d)+\d$)/g,
                  "$1" + owner.delimiter
                );

                break;

              case NumeralFormatter.groupStyle.wan:
                partInteger = partInteger.replace(
                  /(\d)(?=(\d{4})+$)/g,
                  "$1" + owner.delimiter
                );

                break;

              case NumeralFormatter.groupStyle.thousand:
                partInteger = partInteger.replace(
                  /(\d)(?=(\d{3})+$)/g,
                  "$1" + owner.delimiter
                );

                break;
            }

            return (
              partInteger.toString() +
              (owner.numeralDecimalScale > 0 ? partDecimal.toString() : "")
            );
          },
        };

        module.exports = NumeralFormatter;

        /***/
      },
      /* 2 */
      /***/
      function (module, exports) {
        "use strict";

        var DateFormatter = function (datePattern) {
          var owner = this;

          owner.date = [];
          owner.blocks = [];
          owner.datePattern = datePattern;
          owner.initBlocks();
        };

        DateFormatter.prototype = {
          initBlocks: function () {
            var owner = this;
            owner.datePattern.forEach(function (value) {
              if (value === "Y") {
                owner.blocks.push(4);
              } else {
                owner.blocks.push(2);
              }
            });
          },

          getISOFormatDate: function () {
            var owner = this,
              date = owner.date;

            return date[2]
              ? date[2] +
                  "-" +
                  owner.addLeadingZero(date[1]) +
                  "-" +
                  owner.addLeadingZero(date[0])
              : "";
          },

          getBlocks: function () {
            return this.blocks;
          },

          getValidatedDate: function (value) {
            var owner = this,
              result = "";

            value = value.replace(/[^\d]/g, "");

            owner.blocks.forEach(function (length, index) {
              if (value.length > 0) {
                var sub = value.slice(0, length),
                  sub0 = sub.slice(0, 1),
                  rest = value.slice(length);

                switch (owner.datePattern[index]) {
                  case "d":
                    if (sub === "00") {
                      sub = "01";
                    } else if (parseInt(sub0, 10) > 3) {
                      sub = "0" + sub0;
                    } else if (parseInt(sub, 10) > 31) {
                      sub = "31";
                    }

                    break;

                  case "m":
                    if (sub === "00") {
                      sub = "01";
                    } else if (parseInt(sub0, 10) > 1) {
                      sub = "0" + sub0;
                    } else if (parseInt(sub, 10) > 12) {
                      sub = "12";
                    }

                    break;
                }

                result += sub;

                // update remaining string
                value = rest;
              }
            });

            return this.getFixedDateString(result);
          },

          getFixedDateString: function (value) {
            var owner = this,
              datePattern = owner.datePattern,
              date = [],
              dayIndex = 0,
              monthIndex = 0,
              yearIndex = 0,
              dayStartIndex = 0,
              monthStartIndex = 0,
              yearStartIndex = 0,
              day,
              month,
              year,
              fullYearDone = false;

            // mm-dd || dd-mm
            if (
              value.length === 4 &&
              datePattern[0].toLowerCase() !== "y" &&
              datePattern[1].toLowerCase() !== "y"
            ) {
              dayStartIndex = datePattern[0] === "d" ? 0 : 2;
              monthStartIndex = 2 - dayStartIndex;
              day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10);
              month = parseInt(
                value.slice(monthStartIndex, monthStartIndex + 2),
                10
              );

              date = this.getFixedDate(day, month, 0);
            }

            // yyyy-mm-dd || yyyy-dd-mm || mm-dd-yyyy || dd-mm-yyyy || dd-yyyy-mm || mm-yyyy-dd
            if (value.length === 8) {
              datePattern.forEach(function (type, index) {
                switch (type) {
                  case "d":
                    dayIndex = index;
                    break;
                  case "m":
                    monthIndex = index;
                    break;
                  default:
                    yearIndex = index;
                    break;
                }
              });

              yearStartIndex = yearIndex * 2;
              dayStartIndex =
                dayIndex <= yearIndex ? dayIndex * 2 : dayIndex * 2 + 2;
              monthStartIndex =
                monthIndex <= yearIndex ? monthIndex * 2 : monthIndex * 2 + 2;

              day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10);
              month = parseInt(
                value.slice(monthStartIndex, monthStartIndex + 2),
                10
              );
              year = parseInt(
                value.slice(yearStartIndex, yearStartIndex + 4),
                10
              );

              fullYearDone =
                value.slice(yearStartIndex, yearStartIndex + 4).length === 4;

              date = this.getFixedDate(day, month, year);
            }

            owner.date = date;

            return date.length === 0
              ? value
              : datePattern.reduce(function (previous, current) {
                  switch (current) {
                    case "d":
                      return previous + owner.addLeadingZero(date[0]);
                    case "m":
                      return previous + owner.addLeadingZero(date[1]);
                    default:
                      return (
                        previous +
                        (fullYearDone
                          ? owner.addLeadingZeroForYear(date[2])
                          : "")
                      );
                  }
                }, "");
          },

          getFixedDate: function (day, month, year) {
            day = Math.min(day, 31);
            month = Math.min(month, 12);
            year = parseInt(year || 0, 10);

            if (
              (month < 7 && month % 2 === 0) ||
              (month > 8 && month % 2 === 1)
            ) {
              day = Math.min(
                day,
                month === 2 ? (this.isLeapYear(year) ? 29 : 28) : 30
              );
            }

            return [day, month, year];
          },

          isLeapYear: function (year) {
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
          },

          addLeadingZero: function (number) {
            return (number < 10 ? "0" : "") + number;
          },

          addLeadingZeroForYear: function (number) {
            return (
              (number < 10
                ? "000"
                : number < 100
                ? "00"
                : number < 1000
                ? "0"
                : "") + number
            );
          },
        };

        module.exports = DateFormatter;

        /***/
      },
      /* 3 */
      /***/
      function (module, exports) {
        "use strict";

        var TimeFormatter = function (timePattern) {
          var owner = this;

          owner.time = [];
          owner.blocks = [];
          owner.timePattern = timePattern;
          owner.initBlocks();
        };

        TimeFormatter.prototype = {
          initBlocks: function () {
            var owner = this;
            owner.timePattern.forEach(function () {
              owner.blocks.push(2);
            });
          },

          getISOFormatTime: function () {
            var owner = this,
              time = owner.time;

            return time[2]
              ? owner.addLeadingZero(time[0]) +
                  ":" +
                  owner.addLeadingZero(time[1]) +
                  ":" +
                  owner.addLeadingZero(time[2])
              : "";
          },

          getBlocks: function () {
            return this.blocks;
          },

          getValidatedTime: function (value) {
            var owner = this,
              result = "";

            value = value.replace(/[^\d]/g, "");

            owner.blocks.forEach(function (length, index) {
              if (value.length > 0) {
                var sub = value.slice(0, length),
                  sub0 = sub.slice(0, 1),
                  rest = value.slice(length);

                switch (owner.timePattern[index]) {
                  case "h":
                    if (parseInt(sub0, 10) > 2) {
                      sub = "0" + sub0;
                    } else if (parseInt(sub, 10) > 23) {
                      sub = "23";
                    }

                    break;

                  case "m":
                  case "s":
                    if (parseInt(sub0, 10) > 5) {
                      sub = "0" + sub0;
                    } else if (parseInt(sub, 10) > 60) {
                      sub = "60";
                    }
                    break;
                }

                result += sub;

                // update remaining string
                value = rest;
              }
            });

            return this.getFixedTimeString(result);
          },

          getFixedTimeString: function (value) {
            var owner = this,
              timePattern = owner.timePattern,
              time = [],
              secondIndex = 0,
              minuteIndex = 0,
              hourIndex = 0,
              secondStartIndex = 0,
              minuteStartIndex = 0,
              hourStartIndex = 0,
              second,
              minute,
              hour;

            if (value.length === 6) {
              timePattern.forEach(function (type, index) {
                switch (type) {
                  case "s":
                    secondIndex = index * 2;
                    break;
                  case "m":
                    minuteIndex = index * 2;
                    break;
                  case "h":
                    hourIndex = index * 2;
                    break;
                }
              });

              hourStartIndex = hourIndex;
              minuteStartIndex = minuteIndex;
              secondStartIndex = secondIndex;

              second = parseInt(
                value.slice(secondStartIndex, secondStartIndex + 2),
                10
              );
              minute = parseInt(
                value.slice(minuteStartIndex, minuteStartIndex + 2),
                10
              );
              hour = parseInt(
                value.slice(hourStartIndex, hourStartIndex + 2),
                10
              );

              time = this.getFixedTime(hour, minute, second);
            }

            if (value.length === 4 && owner.timePattern.indexOf("s") < 0) {
              timePattern.forEach(function (type, index) {
                switch (type) {
                  case "m":
                    minuteIndex = index * 2;
                    break;
                  case "h":
                    hourIndex = index * 2;
                    break;
                }
              });

              hourStartIndex = hourIndex;
              minuteStartIndex = minuteIndex;

              second = 0;
              minute = parseInt(
                value.slice(minuteStartIndex, minuteStartIndex + 2),
                10
              );
              hour = parseInt(
                value.slice(hourStartIndex, hourStartIndex + 2),
                10
              );

              time = this.getFixedTime(hour, minute, second);
            }

            owner.time = time;

            return time.length === 0
              ? value
              : timePattern.reduce(function (previous, current) {
                  switch (current) {
                    case "s":
                      return previous + owner.addLeadingZero(time[2]);
                    case "m":
                      return previous + owner.addLeadingZero(time[1]);
                    case "h":
                      return previous + owner.addLeadingZero(time[0]);
                  }
                }, "");
          },

          getFixedTime: function (hour, minute, second) {
            second = Math.min(parseInt(second || 0, 10), 60);
            minute = Math.min(minute, 60);
            hour = Math.min(hour, 60);

            return [hour, minute, second];
          },

          addLeadingZero: function (number) {
            return (number < 10 ? "0" : "") + number;
          },
        };

        module.exports = TimeFormatter;

        /***/
      },
      /* 4 */
      /***/
      function (module, exports) {
        "use strict";

        var PhoneFormatter = function (formatter, delimiter) {
          var owner = this;

          owner.delimiter = delimiter || delimiter === "" ? delimiter : " ";
          owner.delimiterRE = delimiter
            ? new RegExp("\\" + delimiter, "g")
            : "";

          owner.formatter = formatter;
        };

        PhoneFormatter.prototype = {
          setFormatter: function (formatter) {
            this.formatter = formatter;
          },

          format: function (phoneNumber) {
            var owner = this;

            owner.formatter.clear();

            // only keep number and +
            phoneNumber = phoneNumber.replace(/[^\d+]/g, "");

            // strip non-leading +
            phoneNumber = phoneNumber
              .replace(/^\+/, "B")
              .replace(/\+/g, "")
              .replace("B", "+");

            // strip delimiter
            phoneNumber = phoneNumber.replace(owner.delimiterRE, "");

            var result = "",
              current,
              validated = false;

            for (var i = 0, iMax = phoneNumber.length; i < iMax; i++) {
              current = owner.formatter.inputDigit(phoneNumber.charAt(i));

              // has ()- or space inside
              if (/[\s()-]/g.test(current)) {
                result = current;

                validated = true;
              } else {
                if (!validated) {
                  result = current;
                }
                // else: over length input
                // it turns to invalid number again
              }
            }

            // strip ()
            // e.g. US: 7161234567 returns (716) 123-4567
            result = result.replace(/[()]/g, "");
            // replace library delimiter with user customized delimiter
            result = result.replace(/[\s-]/g, owner.delimiter);

            return result;
          },
        };

        module.exports = PhoneFormatter;

        /***/
      },
      /* 5 */
      /***/
      function (module, exports) {
        "use strict";

        var CreditCardDetector = {
          blocks: {
            uatp: [4, 5, 6],
            amex: [4, 6, 5],
            diners: [4, 6, 4],
            discover: [4, 4, 4, 4],
            mastercard: [4, 4, 4, 4],
            dankort: [4, 4, 4, 4],
            instapayment: [4, 4, 4, 4],
            jcb15: [4, 6, 5],
            jcb: [4, 4, 4, 4],
            maestro: [4, 4, 4, 4],
            visa: [4, 4, 4, 4],
            mir: [4, 4, 4, 4],
            unionPay: [4, 4, 4, 4],
            general: [4, 4, 4, 4],
            generalStrict: [4, 4, 4, 7],
          },

          re: {
            // starts with 1; 15 digits, not starts with 1800 (jcb card)
            uatp: /^(?!1800)1\d{0,14}/,

            // starts with 34/37; 15 digits
            amex: /^3[47]\d{0,13}/,

            // starts with 6011/65/644-649; 16 digits
            discover: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,

            // starts with 300-305/309 or 36/38/39; 14 digits
            diners: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,

            // starts with 51-55/2221–2720; 16 digits
            mastercard: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,

            // starts with 5019/4175/4571; 16 digits
            dankort: /^(5019|4175|4571)\d{0,12}/,

            // starts with 637-639; 16 digits
            instapayment: /^63[7-9]\d{0,13}/,

            // starts with 2131/1800; 15 digits
            jcb15: /^(?:2131|1800)\d{0,11}/,

            // starts with 2131/1800/35; 16 digits
            jcb: /^(?:35\d{0,2})\d{0,12}/,

            // starts with 50/56-58/6304/67; 16 digits
            maestro: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,

            // starts with 22; 16 digits
            mir: /^220[0-4]\d{0,12}/,

            // starts with 4; 16 digits
            visa: /^4\d{0,15}/,

            // starts with 62; 16 digits
            unionPay: /^62\d{0,14}/,
          },

          getInfo: function (value, strictMode) {
            var blocks = CreditCardDetector.blocks,
              re = CreditCardDetector.re;

            // Some credit card can have up to 19 digits number.
            // Set strictMode to true will remove the 16 max-length restrain,
            // however, I never found any website validate card number like
            // this, hence probably you don't want to enable this option.
            strictMode = !!strictMode;

            for (var key in re) {
              if (re[key].test(value)) {
                var block;

                if (strictMode) {
                  block = blocks.generalStrict;
                } else {
                  block = blocks[key];
                }

                return {
                  type: key,
                  blocks: block,
                };
              }
            }

            return {
              type: "unknown",
              blocks: strictMode ? blocks.generalStrict : blocks.general,
            };
          },
        };

        module.exports = CreditCardDetector;

        /***/
      },
      /* 6 */
      /***/
      function (module, exports) {
        "use strict";

        var Util = {
          noop: function () {},

          strip: function (value, re) {
            return value.replace(re, "");
          },

          isDelimiter: function (letter, delimiter, delimiters) {
            // single delimiter
            if (delimiters.length === 0) {
              return letter === delimiter;
            }

            // multiple delimiters
            return delimiters.some(function (current) {
              if (letter === current) {
                return true;
              }
            });
          },

          getDelimiterREByDelimiter: function (delimiter) {
            return new RegExp(
              delimiter.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"),
              "g"
            );
          },

          getNextCursorPosition: function (
            prevPos,
            oldValue,
            newValue,
            delimiter,
            delimiters
          ) {
            // If cursor was at the end of value, just place it back.
            // Because new value could contain additional chars.
            if (oldValue.length === prevPos) {
              return newValue.length;
            }

            return (
              prevPos +
              this.getPositionOffset(
                prevPos,
                oldValue,
                newValue,
                delimiter,
                delimiters
              )
            );
          },

          getPositionOffset: function (
            prevPos,
            oldValue,
            newValue,
            delimiter,
            delimiters
          ) {
            var oldRawValue, newRawValue, lengthOffset;

            oldRawValue = this.stripDelimiters(
              oldValue.slice(0, prevPos),
              delimiter,
              delimiters
            );
            newRawValue = this.stripDelimiters(
              newValue.slice(0, prevPos),
              delimiter,
              delimiters
            );
            lengthOffset = oldRawValue.length - newRawValue.length;

            return lengthOffset !== 0
              ? lengthOffset / Math.abs(lengthOffset)
              : 0;
          },

          stripDelimiters: function (value, delimiter, delimiters) {
            var owner = this;

            // single delimiter
            if (delimiters.length === 0) {
              var delimiterRE = delimiter
                ? owner.getDelimiterREByDelimiter(delimiter)
                : "";

              return value.replace(delimiterRE, "");
            }

            // multiple delimiters
            delimiters.forEach(function (current) {
              value = value.replace(
                owner.getDelimiterREByDelimiter(current),
                ""
              );
            });

            return value;
          },

          headStr: function (str, length) {
            return str.slice(0, length);
          },

          getMaxLength: function (blocks) {
            return blocks.reduce(function (previous, current) {
              return previous + current;
            }, 0);
          },

          // strip value by prefix length
          // for prefix: PRE
          // (PRE123, 3) -> 123
          // (PR123, 3) -> 23 this happens when user hits backspace in front of "PRE"
          getPrefixStrippedValue: function (
            value,
            prefix,
            prefixLength,
            prevValue
          ) {
            if (value.slice(0, prefixLength) !== prefix) {
              // Check whether if it is a deletion
              if (value.length < prevValue.length) {
                value = value.length > prefixLength ? prevValue : prefix;
              } else {
                var diffIndex = this.getFirstDiffIndex(
                  prefix,
                  value.slice(0, prefixLength)
                );
                value =
                  prefix +
                  value.slice(diffIndex, diffIndex + 1) +
                  value.slice(prefixLength + 1);
              }
            }

            return value.slice(prefixLength);
          },

          getFirstDiffIndex: function (prev, current) {
            var index = 0;

            while (prev.charAt(index) === current.charAt(index)) {
              if (prev.charAt(index++) === "") {
                return -1;
              }
            }

            return index;
          },

          getFormattedValue: function (
            value,
            blocks,
            blocksLength,
            delimiter,
            delimiters,
            delimiterLazyShow
          ) {
            var result = "",
              multipleDelimiters = delimiters.length > 0,
              currentDelimiter;

            // no options, normal input
            if (blocksLength === 0) {
              return value;
            }

            blocks.forEach(function (length, index) {
              if (value.length > 0) {
                var sub = value.slice(0, length),
                  rest = value.slice(length);

                if (multipleDelimiters) {
                  currentDelimiter =
                    delimiters[delimiterLazyShow ? index - 1 : index] ||
                    currentDelimiter;
                } else {
                  currentDelimiter = delimiter;
                }

                if (delimiterLazyShow) {
                  if (index > 0) {
                    result += currentDelimiter;
                  }

                  result += sub;
                } else {
                  result += sub;

                  if (sub.length === length && index < blocksLength - 1) {
                    result += currentDelimiter;
                  }
                }

                // update remaining string
                value = rest;
              }
            });

            return result;
          },

          // move cursor to the end
          // the first time user focuses on an input with prefix
          fixPrefixCursor: function (el, prefix, delimiter, delimiters) {
            if (!el) {
              return;
            }

            var val = el.value,
              appendix = delimiter || delimiters[0] || " ";

            if (
              !el.setSelectionRange ||
              !prefix ||
              prefix.length + appendix.length < val.length
            ) {
              return;
            }

            var len = val.length * 2;

            // set timeout to avoid blink
            setTimeout(function () {
              el.setSelectionRange(len, len);
            }, 1);
          },

          setSelection: function (element, position, doc) {
            if (element !== doc.activeElement) {
              return;
            }

            // cursor is already in the end
            if (element && element.value.length <= position) {
              return;
            }

            if (element.createTextRange) {
              var range = element.createTextRange();

              range.move("character", position);
              range.select();
            } else {
              try {
                element.setSelectionRange(position, position);
              } catch (e) {
                // eslint-disable-next-line
                console.warn(
                  "The input element type does not support selection"
                );
              }
            }
          },

          isAndroid: function () {
            return navigator && /android/i.test(navigator.userAgent);
          },

          // On Android chrome, the keyup and keydown events
          // always return key code 229 as a composition that
          // buffers the user’s keystrokes
          // see https://github.com/nosir/cleave.js/issues/147
          isAndroidBackspaceKeydown: function (
            lastInputValue,
            currentInputValue
          ) {
            if (!this.isAndroid() || !lastInputValue || !currentInputValue) {
              return false;
            }

            return currentInputValue === lastInputValue.slice(0, -1);
          },
        };

        module.exports = Util;

        /***/
      },
      /* 7 */
      /***/
      function (module, exports) {
        /* WEBPACK VAR INJECTION */
        (function (global) {
          "use strict";

          /**
           * Props Assignment
           *
           * Separate this, so react module can share the usage
           */
          var DefaultProperties = {
            // Maybe change to object-assign
            // for now just keep it as simple
            assign: function (target, opts) {
              target = target || {};
              opts = opts || {};

              // credit card
              target.creditCard = !!opts.creditCard;
              target.creditCardStrictMode = !!opts.creditCardStrictMode;
              target.creditCardType = "";
              target.onCreditCardTypeChanged =
                opts.onCreditCardTypeChanged || function () {};

              // phone
              target.phone = !!opts.phone;
              target.phoneRegionCode = opts.phoneRegionCode || "AU";
              target.phoneFormatter = {};

              // time
              target.time = !!opts.time;
              target.timePattern = opts.timePattern || ["h", "m", "s"];
              target.timeFormatter = {};

              // date
              target.date = !!opts.date;
              target.datePattern = opts.datePattern || ["d", "m", "Y"];
              target.dateFormatter = {};

              // numeral
              target.numeral = !!opts.numeral;
              target.numeralIntegerScale =
                opts.numeralIntegerScale > 0 ? opts.numeralIntegerScale : 0;
              target.numeralDecimalScale =
                opts.numeralDecimalScale >= 0 ? opts.numeralDecimalScale : 2;
              target.numeralDecimalMark = opts.numeralDecimalMark || ".";
              target.numeralThousandsGroupStyle =
                opts.numeralThousandsGroupStyle || "thousand";
              target.numeralPositiveOnly = !!opts.numeralPositiveOnly;
              target.stripLeadingZeroes = opts.stripLeadingZeroes !== false;

              // others
              target.numericOnly =
                target.creditCard || target.date || !!opts.numericOnly;

              target.uppercase = !!opts.uppercase;
              target.lowercase = !!opts.lowercase;

              target.prefix =
                target.creditCard || target.date ? "" : opts.prefix || "";
              target.noImmediatePrefix = !!opts.noImmediatePrefix;
              target.prefixLength = target.prefix.length;
              target.rawValueTrimPrefix = !!opts.rawValueTrimPrefix;
              target.copyDelimiter = !!opts.copyDelimiter;

              target.initValue =
                opts.initValue !== undefined && opts.initValue !== null
                  ? opts.initValue.toString()
                  : "";

              target.delimiter =
                opts.delimiter || opts.delimiter === ""
                  ? opts.delimiter
                  : opts.date
                  ? "/"
                  : opts.time
                  ? ":"
                  : opts.numeral
                  ? ","
                  : opts.phone
                  ? " "
                  : " ";
              target.delimiterLength = target.delimiter.length;
              target.delimiterLazyShow = !!opts.delimiterLazyShow;
              target.delimiters = opts.delimiters || [];

              target.blocks = opts.blocks || [];
              target.blocksLength = target.blocks.length;

              target.root =
                typeof global === "object" && global ? global : window;
              target.document = opts.document || target.root.document;

              target.maxLength = 0;

              target.backspace = false;
              target.result = "";

              target.onValueChanged = opts.onValueChanged || function () {};

              return target;
            },
          };

          module.exports = DefaultProperties;

          /* WEBPACK VAR INJECTION */
        }).call(
          exports,
          (function () {
            return this;
          })()
        );

        /***/
      },
      /******/
    ]
  );
});
!function () {
  function t(t, n) {
    var e = t.split("."),
      r = T;
    e[0] in r || !r.execScript || r.execScript("var " + e[0]);
    for (var i; e.length && (i = e.shift()); )
      e.length || void 0 === n ? (r = r[i] ? r[i] : (r[i] = {})) : (r[i] = n);
  }

  function n(t, n) {
    function e() {}
    (e.prototype = n.prototype),
      (t.M = n.prototype),
      (t.prototype = new e()),
      (t.prototype.constructor = t),
      (t.N = function (t, e, r) {
        for (
          var i = Array(arguments.length - 2), a = 2;
          a < arguments.length;
          a++
        )
          i[a - 2] = arguments[a];
        return n.prototype[e].apply(t, i);
      });
  }

  function e(t, n) {
    null != t && this.a.apply(this, arguments);
  }

  function r(t) {
    t.b = "";
  }

  function i(t, n) {
    t.sort(n || a);
  }

  function a(t, n) {
    return t > n ? 1 : n > t ? -1 : 0;
  }

  function l(t) {
    var n,
      e = [],
      r = 0;
    for (n in t) e[r++] = t[n];
    return e;
  }

  function u(t, n) {
    (this.b = t), (this.a = {});
    for (var e = 0; e < n.length; e++) {
      var r = n[e];
      this.a[r.b] = r;
    }
  }

  function o(t) {
    return (
      (t = l(t.a)),
      i(t, function (t, n) {
        return t.b - n.b;
      }),
      t
    );
  }

  function s(t, n) {
    switch (
      ((this.b = t),
      (this.g = !!n.G),
      (this.a = n.c),
      (this.j = n.type),
      (this.h = !1),
      this.a)
    ) {
      case k:
      case J:
      case K:
      case L:
      case O:
      case Y:
      case U:
        this.h = !0;
    }
    this.f = n.defaultValue;
  }

  function f() {
    (this.a = {}), (this.f = this.i().a), (this.b = this.g = null);
  }

  function c(t, n) {
    for (var e = o(t.i()), r = 0; r < e.length; r++) {
      var i = e[r],
        a = i.b;
      if (null != n.a[a]) {
        t.b && delete t.b[i.b];
        var l = 11 == i.a || 10 == i.a;
        if (i.g)
          for (var i = p(n, a) || [], u = 0; u < i.length; u++) {
            var s = t,
              f = a,
              h = l ? i[u].clone() : i[u];
            s.a[f] || (s.a[f] = []), s.a[f].push(h), s.b && delete s.b[f];
          }
        else
          (i = p(n, a)),
            l ? ((l = p(t, a)) ? c(l, i) : m(t, a, i.clone())) : m(t, a, i);
      }
    }
  }

  function p(t, n) {
    var e = t.a[n];
    if (null == e) return null;
    if (t.g) {
      if (!(n in t.b)) {
        var r = t.g,
          i = t.f[n];
        if (null != e)
          if (i.g) {
            for (var a = [], l = 0; l < e.length; l++) a[l] = r.b(i, e[l]);
            e = a;
          } else e = r.b(i, e);
        return (t.b[n] = e);
      }
      return t.b[n];
    }
    return e;
  }

  function h(t, n, e) {
    var r = p(t, n);
    return t.f[n].g ? r[e || 0] : r;
  }

  function g(t, n) {
    var e;
    if (null != t.a[n]) e = h(t, n, void 0);
    else
      t: {
        if (((e = t.f[n]), void 0 === e.f)) {
          var r = e.j;
          if (r === Boolean) e.f = !1;
          else if (r === Number) e.f = 0;
          else {
            if (r !== String) {
              e = new r();
              break t;
            }
            e.f = e.h ? "0" : "";
          }
        }
        e = e.f;
      }
    return e;
  }

  function b(t, n) {
    return t.f[n].g
      ? null != t.a[n]
        ? t.a[n].length
        : 0
      : null != t.a[n]
      ? 1
      : 0;
  }

  function m(t, n, e) {
    (t.a[n] = e), t.b && (t.b[n] = e);
  }

  function d(t, n) {
    var e,
      r = [];
    for (e in n) 0 != e && r.push(new s(e, n[e]));
    return new u(t, r);
  }
  /*

     Protocol Buffer 2 Copyright 2008 Google Inc.
     All other code copyright its respective owners.
     Copyright (C) 2010 The Libphonenumber Authors

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
  function y() {
    f.call(this);
  }

  function v() {
    f.call(this);
  }

  function _() {
    f.call(this);
  }

  function $() {}

  function S() {}

  function w() {}
  /*

     Copyright (C) 2010 The Libphonenumber Authors.

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
  function x() {
    this.a = {};
  }

  function A(t, n) {
    if (null == n) return null;
    n = n.toUpperCase();
    var e = t.a[n];
    if (null == e) {
      if (((e = tt[n]), null == e)) return null;
      (e = new w().a(_.i(), e)), (t.a[n] = e);
    }
    return e;
  }

  function N(t) {
    return (t = X[t]), null == t ? "ZZ" : t[0];
  }

  function C(t) {
    (this.H = RegExp(" ")),
      (this.B = ""),
      (this.m = new e()),
      (this.v = ""),
      (this.h = new e()),
      (this.u = new e()),
      (this.j = !0),
      (this.w = this.o = this.D = !1),
      (this.F = x.b()),
      (this.s = 0),
      (this.b = new e()),
      (this.A = !1),
      (this.l = ""),
      (this.a = new e()),
      (this.f = []),
      (this.C = t),
      (this.J = this.g = j(this, this.C));
  }

  function j(t, n) {
    var e;
    if (null != n && isNaN(n) && n.toUpperCase() in tt) {
      if (((e = A(t.F, n)), null == e)) throw "Invalid region code: " + n;
      e = g(e, 10);
    } else e = 0;
    return (e = A(t.F, N(e))), null != e ? e : at;
  }

  function R(t) {
    for (var n = t.f.length, e = 0; n > e; ++e) {
      var i = t.f[e],
        a = g(i, 1);
      if (t.v == a) return !1;
      var l;
      l = t;
      var u = i,
        o = g(u, 1);
      if (-1 != o.indexOf("|")) l = !1;
      else {
        (o = o.replace(lt, "\\d")), (o = o.replace(ut, "\\d")), r(l.m);
        var s;
        s = l;
        var u = g(u, 2),
          f = "999999999999999".match(o)[0];
        f.length < s.a.b.length
          ? (s = "")
          : ((s = f.replace(new RegExp(o, "g"), u)),
            (s = s.replace(RegExp("9", "g"), " "))),
          0 < s.length ? (l.m.a(s), (l = !0)) : (l = !1);
      }
      if (l) return (t.v = a), (t.A = st.test(h(i, 4))), (t.s = 0), !0;
    }
    return (t.j = !1);
  }

  function B(t, n) {
    for (var e = [], r = n.length - 3, i = t.f.length, a = 0; i > a; ++a) {
      var l = t.f[a];
      0 == b(l, 3)
        ? e.push(t.f[a])
        : ((l = h(l, 3, Math.min(r, b(l, 3) - 1))),
          0 == n.search(l) && e.push(t.f[a]));
    }
    t.f = e;
  }

  function E(t, n) {
    t.h.a(n);
    var e = n;
    if (rt.test(e) || (1 == t.h.b.length && et.test(e))) {
      var i,
        e = n;
      "+" == e ? ((i = e), t.u.a(e)) : ((i = nt[e]), t.u.a(i), t.a.a(i)),
        (n = i);
    } else (t.j = !1), (t.D = !0);
    if (!t.j) {
      if (!t.D)
        if (P(t)) {
          if (V(t)) return F(t);
        } else if (
          (0 < t.l.length &&
            ((e = t.a.toString()),
            r(t.a),
            t.a.a(t.l),
            t.a.a(e),
            (e = t.b.toString()),
            (i = e.lastIndexOf(t.l)),
            r(t.b),
            t.b.a(e.substring(0, i))),
          t.l != H(t))
        )
          return t.b.a(" "), F(t);
      return t.h.toString();
    }
    switch (t.u.b.length) {
      case 0:
      case 1:
      case 2:
        return t.h.toString();
      case 3:
        if (!P(t)) return (t.l = H(t)), M(t);
        t.w = !0;
      default:
        return t.w
          ? (V(t) && (t.w = !1), t.b.toString() + t.a.toString())
          : 0 < t.f.length
          ? ((e = q(t, n)),
            (i = I(t)),
            0 < i.length
              ? i
              : (B(t, t.a.toString()),
                R(t) ? G(t) : t.j ? D(t, e) : t.h.toString()))
          : M(t);
    }
  }

  function F(t) {
    return (
      (t.j = !0), (t.w = !1), (t.f = []), (t.s = 0), r(t.m), (t.v = ""), M(t)
    );
  }

  function I(t) {
    for (var n = t.a.toString(), e = t.f.length, r = 0; e > r; ++r) {
      var i = t.f[r],
        a = g(i, 1);
      if (new RegExp("^(?:" + a + ")$").test(n))
        return (
          (t.A = st.test(h(i, 4))),
          (n = n.replace(new RegExp(a, "g"), h(i, 2))),
          D(t, n)
        );
    }
    return "";
  }

  function D(t, n) {
    var e = t.b.b.length;
    return t.A && e > 0 && " " != t.b.toString().charAt(e - 1)
      ? t.b + " " + n
      : t.b + n;
  }

  function M(t) {
    var n = t.a.toString();
    if (3 <= n.length) {
      for (
        var e = t.o && 0 < b(t.g, 20) ? p(t.g, 20) || [] : p(t.g, 19) || [],
          r = e.length,
          i = 0;
        r > i;
        ++i
      ) {
        var a,
          l = e[i];
        (a = null == t.g.a[12] || t.o || h(l, 6)) ||
          ((a = g(l, 4)), (a = 0 == a.length || it.test(a))),
          a && ot.test(g(l, 2)) && t.f.push(l);
      }
      return (
        B(t, n), (n = I(t)), 0 < n.length ? n : R(t) ? G(t) : t.h.toString()
      );
    }
    return D(t, n);
  }

  function G(t) {
    var n = t.a.toString(),
      e = n.length;
    if (e > 0) {
      for (var r = "", i = 0; e > i; i++) r = q(t, n.charAt(i));
      return t.j ? D(t, r) : t.h.toString();
    }
    return t.b.toString();
  }

  function H(t) {
    var n,
      e = t.a.toString(),
      i = 0;
    return (
      1 != h(t.g, 10)
        ? (n = !1)
        : ((n = t.a.toString()),
          (n = "1" == n.charAt(0) && "0" != n.charAt(1) && "1" != n.charAt(1))),
      n
        ? ((i = 1), t.b.a("1").a(" "), (t.o = !0))
        : null != t.g.a[15] &&
          ((n = new RegExp("^(?:" + h(t.g, 15) + ")")),
          (n = e.match(n)),
          null != n &&
            null != n[0] &&
            0 < n[0].length &&
            ((t.o = !0), (i = n[0].length), t.b.a(e.substring(0, i)))),
      r(t.a),
      t.a.a(e.substring(i)),
      e.substring(0, i)
    );
  }

  function P(t) {
    var n = t.u.toString(),
      e = new RegExp("^(?:\\+|" + h(t.g, 11) + ")"),
      e = n.match(e);
    return null != e && null != e[0] && 0 < e[0].length
      ? ((t.o = !0),
        (e = e[0].length),
        r(t.a),
        t.a.a(n.substring(e)),
        r(t.b),
        t.b.a(n.substring(0, e)),
        "+" != n.charAt(0) && t.b.a(" "),
        !0)
      : !1;
  }

  function V(t) {
    if (0 == t.a.b.length) return !1;
    var n,
      i = new e();
    t: {
      if (((n = t.a.toString()), 0 != n.length && "0" != n.charAt(0)))
        for (var a, l = n.length, u = 1; 3 >= u && l >= u; ++u)
          if (((a = parseInt(n.substring(0, u), 10)), a in X)) {
            i.a(n.substring(u)), (n = a);
            break t;
          }
      n = 0;
    }
    return 0 == n
      ? !1
      : (r(t.a),
        t.a.a(i.toString()),
        (i = N(n)),
        "001" == i ? (t.g = A(t.F, "" + n)) : i != t.C && (t.g = j(t, i)),
        t.b.a("" + n).a(" "),
        (t.l = ""),
        !0);
  }

  function q(t, n) {
    var e = t.m.toString();
    if (0 <= e.substring(t.s).search(t.H)) {
      var i = e.search(t.H),
        e = e.replace(t.H, n);
      return r(t.m), t.m.a(e), (t.s = i), e.substring(0, t.s + 1);
    }
    return 1 == t.f.length && (t.j = !1), (t.v = ""), t.h.toString();
  }
  var T = this;
  (e.prototype.b = ""),
    (e.prototype.set = function (t) {
      this.b = "" + t;
    }),
    (e.prototype.a = function (t, n, e) {
      if (((this.b += String(t)), null != n))
        for (var r = 1; r < arguments.length; r++) this.b += arguments[r];
      return this;
    }),
    (e.prototype.toString = function () {
      return this.b;
    });
  var U = 1,
    Y = 2,
    k = 3,
    J = 4,
    K = 6,
    L = 16,
    O = 18;
  (f.prototype.set = function (t, n) {
    m(this, t.b, n);
  }),
    (f.prototype.clone = function () {
      var t = new this.constructor();
      return t != this && ((t.a = {}), t.b && (t.b = {}), c(t, this)), t;
    });
  var Z;
  n(y, f);
  var z;
  n(v, f);
  var Q;
  n(_, f),
    (y.prototype.i = function () {
      return (
        Z ||
          (Z = d(y, {
            0: { name: "NumberFormat", I: "i18n.phonenumbers.NumberFormat" },
            1: { name: "pattern", required: !0, c: 9, type: String },
            2: { name: "format", required: !0, c: 9, type: String },
            3: { name: "leading_digits_pattern", G: !0, c: 9, type: String },
            4: { name: "national_prefix_formatting_rule", c: 9, type: String },
            6: {
              name: "national_prefix_optional_when_formatting",
              c: 8,
              type: Boolean,
            },
            5: {
              name: "domestic_carrier_code_formatting_rule",
              c: 9,
              type: String,
            },
          })),
        Z
      );
    }),
    (y.ctor = y),
    (y.ctor.i = y.prototype.i),
    (v.prototype.i = function () {
      return (
        z ||
          (z = d(v, {
            0: {
              name: "PhoneNumberDesc",
              I: "i18n.phonenumbers.PhoneNumberDesc",
            },
            2: { name: "national_number_pattern", c: 9, type: String },
            3: { name: "possible_number_pattern", c: 9, type: String },
            6: { name: "example_number", c: 9, type: String },
            7: { name: "national_number_matcher_data", c: 12, type: String },
            8: { name: "possible_number_matcher_data", c: 12, type: String },
          })),
        z
      );
    }),
    (v.ctor = v),
    (v.ctor.i = v.prototype.i),
    (_.prototype.i = function () {
      return (
        Q ||
          (Q = d(_, {
            0: { name: "PhoneMetadata", I: "i18n.phonenumbers.PhoneMetadata" },
            1: { name: "general_desc", c: 11, type: v },
            2: { name: "fixed_line", c: 11, type: v },
            3: { name: "mobile", c: 11, type: v },
            4: { name: "toll_free", c: 11, type: v },
            5: { name: "premium_rate", c: 11, type: v },
            6: { name: "shared_cost", c: 11, type: v },
            7: { name: "personal_number", c: 11, type: v },
            8: { name: "voip", c: 11, type: v },
            21: { name: "pager", c: 11, type: v },
            25: { name: "uan", c: 11, type: v },
            27: { name: "emergency", c: 11, type: v },
            28: { name: "voicemail", c: 11, type: v },
            24: { name: "no_international_dialling", c: 11, type: v },
            9: { name: "id", required: !0, c: 9, type: String },
            10: { name: "country_code", c: 5, type: Number },
            11: { name: "international_prefix", c: 9, type: String },
            17: { name: "preferred_international_prefix", c: 9, type: String },
            12: { name: "national_prefix", c: 9, type: String },
            13: { name: "preferred_extn_prefix", c: 9, type: String },
            15: { name: "national_prefix_for_parsing", c: 9, type: String },
            16: { name: "national_prefix_transform_rule", c: 9, type: String },
            18: {
              name: "same_mobile_and_fixed_line_pattern",
              c: 8,
              defaultValue: !1,
              type: Boolean,
            },
            19: { name: "number_format", G: !0, c: 11, type: y },
            20: { name: "intl_number_format", G: !0, c: 11, type: y },
            22: {
              name: "main_country_for_code",
              c: 8,
              defaultValue: !1,
              type: Boolean,
            },
            23: { name: "leading_digits", c: 9, type: String },
            26: {
              name: "leading_zero_possible",
              c: 8,
              defaultValue: !1,
              type: Boolean,
            },
          })),
        Q
      );
    }),
    (_.ctor = _),
    (_.ctor.i = _.prototype.i),
    ($.prototype.a = function (t) {
      throw (new t.b(), Error("Unimplemented"));
    }),
    ($.prototype.b = function (t, n) {
      if (11 == t.a || 10 == t.a)
        return n instanceof f ? n : this.a(t.j.prototype.i(), n);
      if (14 == t.a) {
        if ("string" == typeof n && W.test(n)) {
          var e = Number(n);
          if (e > 0) return e;
        }
        return n;
      }
      if (!t.h) return n;
      if (((e = t.j), e === String)) {
        if ("number" == typeof n) return String(n);
      } else if (
        e === Number &&
        "string" == typeof n &&
        ("Infinity" === n || "-Infinity" === n || "NaN" === n || W.test(n))
      )
        return Number(n);
      return n;
    });
  var W = /^-?[0-9]+$/;
  n(S, $),
    (S.prototype.a = function (t, n) {
      var e = new t.b();
      return (e.g = this), (e.a = n), (e.b = {}), e;
    }),
    n(w, S),
    (w.prototype.b = function (t, n) {
      return 8 == t.a ? !!n : $.prototype.b.apply(this, arguments);
    }),
    (w.prototype.a = function (t, n) {
      return w.M.a.call(this, t, n);
    });
  /*

     Copyright (C) 2010 The Libphonenumber Authors

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
  var X = { 55: ["BR"] },
    tt = {
      BR: [
        null,
        [null, null, "[1-46-9]\\d{7,10}|5\\d{8,9}", "\\d{8,11}"],
        [
          null,
          null,
          "(?:[14689][1-9]|2[12478]|3[1-578]|5[1-5]|7[13-579])[2-5]\\d{7}",
          "\\d{8,11}",
          null,
          null,
          "1123456789",
        ],
        [
          null,
          null,
          "1[1-9](?:7|9\\d)\\d{7}|(?:2[12478]|3[1-578]|[689][1-9]|7[13-579])(?:[6-8]|9\\d?)\\d{7}|(?:4[1-9]|5[1-5])[6-9]\\d{7}",
          "\\d{10,11}",
          null,
          null,
          "11961234567",
        ],
        [null, null, "800\\d{6,7}", "\\d{8,11}", null, null, "800123456"],
        [
          null,
          null,
          "(?:300|[59]00\\d?)\\d{6}",
          "\\d{8,11}",
          null,
          null,
          "300123456",
        ],
        [
          null,
          null,
          "(?:300\\d(?:\\d{2})?|40(?:0\\d|20))\\d{4}",
          "\\d{8,10}",
          null,
          null,
          "40041234",
        ],
        [null, null, "NA", "NA"],
        [null, null, "NA", "NA"],
        "BR",
        55,
        "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)",
        "0",
        null,
        null,
        "0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?",
        "$2",
        null,
        null,
        [
          [null, "(\\d{4})(\\d{4})", "$1-$2", ["[2-9](?:[1-9]|0[1-9])"], "$1"],
          [null, "(\\d{5})(\\d{4})", "$1-$2", ["9(?:[1-9]|0[1-9])"], "$1"],
          [null, "(\\d{3,5})", "$1", ["1[125689]"], "$1"],
          [
            null,
            "(\\d{2})(\\d{5})(\\d{4})",
            "$1 $2-$3",
            ["(?:[1689][1-9]|2[12478]|3[1-578]|7[13-579])9"],
            "($1)",
            "0 $CC ($1)",
          ],
          [
            null,
            "(\\d{2})(\\d{4})(\\d{4})",
            "$1 $2-$3",
            ["[1-9][1-9]"],
            "($1)",
            "0 $CC ($1)",
          ],
          [null, "(\\d{4})(\\d{4})", "$1-$2", ["(?:300|40(?:0|20))"]],
          [
            null,
            "([3589]00)(\\d{2,3})(\\d{4})",
            "$1 $2 $3",
            ["[3589]00"],
            "0$1",
          ],
        ],
        [
          [
            null,
            "(\\d{2})(\\d{5})(\\d{4})",
            "$1 $2-$3",
            ["(?:[1689][1-9]|2[12478]|3[1-578]|7[13-579])9"],
            "($1)",
            "0 $CC ($1)",
          ],
          [
            null,
            "(\\d{2})(\\d{4})(\\d{4})",
            "$1 $2-$3",
            ["[1-9][1-9]"],
            "($1)",
            "0 $CC ($1)",
          ],
          [null, "(\\d{4})(\\d{4})", "$1-$2", ["(?:300|40(?:0|20))"]],
          [
            null,
            "([3589]00)(\\d{2,3})(\\d{4})",
            "$1 $2 $3",
            ["[3589]00"],
            "0$1",
          ],
        ],
        [null, null, "NA", "NA"],
        null,
        null,
        [
          null,
          null,
          "(?:300\\d|40(?:0\\d|20))\\d{4}",
          "\\d{8}",
          null,
          null,
          "40041234",
        ],
        [null, null, "NA", "NA"],
        null,
        null,
        [null, null, "NA", "NA"],
      ],
    };
  x.b = function () {
    return x.a ? x.a : (x.a = new x());
  };
  var nt = {
      0: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      "０": "0",
      "１": "1",
      "２": "2",
      "３": "3",
      "４": "4",
      "５": "5",
      "６": "6",
      "７": "7",
      "８": "8",
      "９": "9",
      "٠": "0",
      "١": "1",
      "٢": "2",
      "٣": "3",
      "٤": "4",
      "٥": "5",
      "٦": "6",
      "٧": "7",
      "٨": "8",
      "٩": "9",
      "۰": "0",
      "۱": "1",
      "۲": "2",
      "۳": "3",
      "۴": "4",
      "۵": "5",
      "۶": "6",
      "۷": "7",
      "۸": "8",
      "۹": "9",
    },
    et = RegExp("[+＋]+"),
    rt = RegExp("([0-9０-９٠-٩۰-۹])"),
    it = /^\(?\$1\)?$/,
    at = new _();
  m(at, 11, "NA");
  var lt = /\[([^\[\]])*\]/g,
    ut = /\d(?=[^,}][^,}])/g,
    ot = RegExp(
      "^[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*(\\$\\d[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*)+$"
    ),
    st = /[- ]/;
  (C.prototype.K = function () {
    (this.B = ""),
      r(this.h),
      r(this.u),
      r(this.m),
      (this.s = 0),
      (this.v = ""),
      r(this.b),
      (this.l = ""),
      r(this.a),
      (this.j = !0),
      (this.w = this.o = this.D = !1),
      (this.f = []),
      (this.A = !1),
      this.g != this.J && (this.g = j(this, this.C));
  }),
    (C.prototype.L = function (t) {
      return (this.B = E(this, t));
    }),
    t("Cleave.AsYouTypeFormatter", C),
    t("Cleave.AsYouTypeFormatter.prototype.inputDigit", C.prototype.L),
    t("Cleave.AsYouTypeFormatter.prototype.clear", C.prototype.K);
}.call("object" == typeof global && global ? global : window);

enviarForm = (e) => {
  document.getElementById("enviar").disabled = true;
  setTimeout(function () {
    document.getElementById("enviar").disabled = false;
  }, 5000);
  e.preventDefault();
  axios
    .post("https://sites.relier.com.br/contato/enviar-formulario", {
      id_formulario: document.getElementById("id_formulario").value,
      nome_remetente: document.getElementById("nome_remetente").value,
      email_remetente: document.getElementById("email_remetente").value,
      assunto: document.getElementById("assunto_formulario").value,
      campos_customizados: [
        {
          key: "Telefone",
          value: document.getElementById("telefone_remetente").value,
        },
      ],
      corpo: document.getElementById("corpo").value,
    })
    .then(function (res) {
      document.getElementById("sucesso").style.display = "block";
      document.getElementById("form").style.display = "none";
    })
    .catch(function (err) {
      document.getElementById("erro").style.display = "block";
      document.getElementById("form").style.display = "none";
    });
};

enviarFormModal = (e) => {
  document.getElementById("enviar_modal").disabled = true;
  setTimeout(function () {
    document.getElementById("enviar_modal").disabled = false;
  }, 5000);
  e.preventDefault();
  axios
    .post("https://sites.relier.com.br/contato/enviar-formulario", {
      id_formulario: document.getElementById("id_formulario_modal").value,
      nome_remetente: document.getElementById("nome_remetente_modal").value,
      email_remetente: document.getElementById("email_remetente_modal").value,
      assunto: document.getElementById("assunto_formulario_modal").value,
      campos_customizados: [
        {
          key: "Telefone",
          value: document.getElementById("telefone_remetente_modal").value,
        },
      ],
      corpo: document.getElementById("corpo_modal").value,
    })
    .then(function (res) {
      // document.getElementById("sucesso_modal").style.display = "block";
      // document.getElementById("form_modal").style.display = "none";
      document.querySelector("#modal-form").classList.add("out");
      setTimeout(() => {
        document.querySelector("#modal-form").close();
        document.querySelector("#modal-form").classList = "";
      }, 550);

      const toast = document.getElementById("toast-success");
      if (toast) {
        toast.classList.add("show");
        setTimeout(function () {
          toast.classList.remove("show");
        }, 5000);
      }
      e.target.reset();
    })
    .catch(function (err) {
      document.querySelector("#modal-form").classList.add("out");
      setTimeout(() => {
        document.querySelector("#modal-form").close();
        document.querySelector("#modal-form").classList = "";
      }, 550);

      const toast = document.getElementById("toast-error");
      if (toast) {
        toast.classList.add("show");

        setTimeout(function () {
          toast.classList.remove("show");
        }, 5000);
      }

      // document.getElementById("erro_modal").style.display = "block";
      // document.getElementById("form_modal").style.display = "none";
    });
};

document.querySelectorAll(".telefone").forEach(function (el) {
  new Cleave(el, {
    phone: true,
    phoneRegionCode: "BR",
  });
});

if (document.getElementById("chance1"))
  document.getElementById("chance1").addEventListener("click", (e) => {
    document.getElementById("form").style.display = "block";
    document.getElementById("erro").style.display = "none";
  });

if (document.getElementById("chance2"))
  document.getElementById("chance2").addEventListener("click", (e) => {
    document.getElementById("form_modal").style.display = "block";
    document.getElementById("erro_modal").style.display = "none";
  });

// Animação ao scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
    // else entry.target.classList.remove('show')
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
