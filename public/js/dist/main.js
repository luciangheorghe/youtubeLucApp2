(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
})({
    "./assets/js/main.js": function(module, exports) {
        eval("$(document).ready(function () {\n  var key = 'AIzaSyDINoVZF1uERv7i9nsC_LaIGZjqFCLC0SA';\n  var URL = 'https://www.googleapis.com/youtube/v3/videos';\n  var options = {\n    part: 'snippet, contentDetails, statistics',\n    chart: 'mostPopular',\n    maxResults: 10,\n    regionCode: 'US',\n    // videoCategoryId: 1,\n    key: key\n  };\n  loadVids();\n\n  function loadVids() {\n    $.getJSON(URL, options, function (data) {\n      console.log(data);\n      resultsLoop(data);\n    });\n  }\n\n  function resultsLoop(data) {\n    $.each(data.items, function (i, item) {\n      var thumb = item.snippet.thumbnails.medium.url;\n      var title = item.snippet.title.substring(0, 35);\n      var author = item.snippet.channelTitle;\n      $('main').append(`\n\t\t\t\t<article>\n\t\t\t\t<img src=\"${thumb}\" alt=\"\" class=\"thumb\">\n\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t<h4>${title}</h4>\n\t\t\t\t\t\t<h3>${author}</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</article>\n\t\t`);\n    });\n  }\n});\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    }
});