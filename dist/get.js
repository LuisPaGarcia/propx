"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;/**
 *
 * @param {object} object object to access
 * @param { string | string[] } key string or array with dot notation path
 * @param { any } def optional parameter for default if the full key in path is missing
 * @param {*} p counter for loop
 * @param {*} undef undefined by default
 */function propAccessor(a,b,c,d,e){for(b=b.split?b.split("."):b,d=0;d<b.length;d++)a=a?a[b[d]]:e;return a===e?c:a}var _default=propAccessor;exports["default"]=_default;