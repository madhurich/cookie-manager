




/**
 *
 *
 * cookie-manager.js
 * simple, easy and lightweight cookie management library
 * {DATE} - version 1.0
 * {REPO URL}
 *
 * Copyright 2018 Alperen <alperen.talaslioglu@gmail.com>
 * Released under MIT License
 * {LICENSE URL}
 *
 *
 */


(function(window, document) {
  'use strict';

  var CookieManager = {
    set: function (name, value, expires, path, domain, secure) {
      var cookieStr = name + "=" + value;

      if(expires) {
        var now = new Date()
        now.setTime(now.getTime() + expires * 24 * 60 * 60 * 1000)
        cookieStr += ";" + "expires=" + now.toUTCString()
      }

      if(path) {
        cookieStr += ";" + "path=" + path
      }
      if(domain) {
        cookieStr += ";" + "domain=" + domain
      }
      if(secure) {
        cookieStr += ";" + "secure=" + secure
      }

      document.cookie = cookieStr
    },

    get: function(key) {
      var cookie = document.cookie;
      var valFound;
      cookie.split(';').forEach(function(c) {
        var eachCookie = c.trim().split('=')
        if(eachCookie[0] === key) {
          valFound = eachCookie[1]
        }
      })
      
      return valFound
    },

    update: function(key, val, expires, path, domain, secure) {
      //instead of below code we can directly call this.set...
      // this.set(key, val, expires, path, domain, secure)
      // but we want to update the cookie if there is an existing key in the cookie
      // to do that added below logic
      var cookie = document.cookie
      cookie.split(';').forEach((c) => {
        var eachCookie = c.trim().split('=')
        if(eachCookie[0] === key) { // if there is an existing cookie with the name "key" change it
          this.set(key, val, expires, path, domain, secure)
        }
      })
    },

    delete: function(key) {
      this.set(key, '', -1)
    },

    getAll: function() {
      return document.cookie.split(';').map(function(c) {
       var each = c.trim().split('=')
        return {
          [each[0]]: each[1]
        }
      })
    },

    deleteAll: function() {
      document.cookie?.split(';').forEach((c) => {
        var eachCookie = c.trim().split('=')
        if(eachCookie[0]) { // if there is an existing cookie with the name "key" change it
          this.set(eachCookie[0], '', -1)
        }
      })
    }
  };


  window.CookieManager = CookieManager;

})(window, document);
