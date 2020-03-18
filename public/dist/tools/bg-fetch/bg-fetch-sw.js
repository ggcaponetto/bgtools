(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bgFetchSw = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var doSomeStuff = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var iterations, responses, delay, _loop, i;

      return regeneratorRuntime.wrap(function _callee3$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log('doSomeStuff', {
                fetch: fetch
              });
              iterations = 10;
              responses = [];
              delay = 1000;
              _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop(i) {
                var response;
                return regeneratorRuntime.wrap(function _loop$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return new Promise( /*#__PURE__*/function () {
                          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve, reject) {
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                      return regeneratorRuntime.wrap(function _callee$(_context) {
                                        while (1) {
                                          switch (_context.prev = _context.next) {
                                            case 0:
                                              _context.next = 2;
                                              return fetch("http://127.0.0.1:8888/package.json?ts=".concat(performance.now(), "&nr=").concat(i)).then(function (response) {
                                                console.log("doSomeStuff - fetch response ".concat(i, "/").concat(iterations), {
                                                  response: response
                                                });
                                                resolve(response);
                                              })["catch"](function (e) {
                                                console.error("doSomeStuff - fetch error ".concat(i, "/").concat(iterations), {
                                                  e: e
                                                });
                                                reject(e);
                                              });

                                            case 2:
                                            case "end":
                                              return _context.stop();
                                          }
                                        }
                                      }, _callee);
                                    })), delay);

                                  case 1:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2);
                          }));

                          return function (_x, _x2) {
                            return _ref2.apply(this, arguments);
                          };
                        }());

                      case 2:
                        response = _context3.sent;
                        responses.push(response);

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _loop);
              });
              i = 0;

            case 6:
              if (!(i < iterations)) {
                _context4.next = 11;
                break;
              }

              return _context4.delegateYield(_loop(i), "t0", 8);

            case 8:
              i++;
              _context4.next = 6;
              break;

            case 11:
              return _context4.abrupt("return", responses);

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee3);
    }));

    return function doSomeStuff() {
      return _ref.apply(this, arguments);
    };
  }();

  self.addEventListener('install', function (event) {
    console.log('service worker intall');
  });
  self.addEventListener('activate', function (event) {
    console.log('service worker activate');
  });
  self.addEventListener('fetch', function (event) {
    console.log('fetch', event.request.url);
  });
  self.addEventListener('sync', function (event) {
    console.log('sync', event);

    if (event.tag == 'myFirstSync') {
      event.waitUntil(doSomeStuff());
    }
  });
  /*self.addEventListener('push', function(event) {
    console.log('push', event)
    event.waitUntil(doSomeStuff())
    if (!(self.Notification && self.Notification.permission === 'granted')) {
      console.warn('push - no permissions', event);
      return;
    }
  });*/
});