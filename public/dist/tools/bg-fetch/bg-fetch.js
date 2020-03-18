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
    global.bgFetch = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var register = function register() {
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
      // Register your service worker:
      navigator.serviceWorker.register('/dist/tools/bg-fetch/bg-fetch-sw.min.js', {}).then(function (reg) {
        // registration worked
        console.log('Registration succeeded. Scope is ' + reg.scope);
        return reg.sync.register('myFirstSync');
      })["catch"](function (error) {
        // registration failed
        console.log('Registration failed with ' + error);
      });
    } else {
      // serviceworker/sync not supported
      console.warn('service worker is not supported');
    }
  };

  register();
});