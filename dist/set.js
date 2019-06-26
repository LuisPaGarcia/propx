"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}//@ts-check
/**
 * @param {object} object base object to inject new prop
 * @param {string} path path to set the object
 * @param {any} value value to set
 */function propSetter(a,b,c){function d(a){for(var b,c=a.split("."),d=[],e=0;e<c.length;e++){for(b=c[e];"\\"===b[b.length-1]&&c[e+1]!==void 0;)b=b.slice(0,-1)+".",b+=c[++e];d.push(b)}return d}function e(a){var b=_typeof(a);return null!==a&&("object"===b||"function"===b)}if(!e(a)||"string"!=typeof b)return JSON.parse(JSON.stringify(a));for(var f,g=a,h=d(b),j=0;j<h.length;j++)f=h[j],e(a[f])||(a[f]={}),j==h.length-1&&(a[f]=c),a=a[f];return JSON.parse(JSON.stringify(g))}var _default=propSetter;/**
 * const biz = propSetter({}, 'obj1.obj2', 'c');
 * console.log(biz);
 * // {obj1: {obj2: 'c'}}
 *
 * const object = {rep: {bar: 'a'}};
 * propSetter(object, 'rep.bar', 'b');
 * console.log(object);
 * // {rep: {bar: 'b'}}
 */exports["default"]=_default;