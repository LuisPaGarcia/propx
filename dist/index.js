"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param {object} object object to access
 * @param { string | string[] } key string or array with dot notation path
 * @param { any } def optional parameter for default if the full key in path is missing
 */
function propAccessor(object, key, def) {
    key = key.split ? key.split('.') : key;
    for (var p = 0; p < key.length; p++) {
        object = object ? object[key[p]] : undefined;
    }
    return object === undefined ? def : object;
}
exports.get = propAccessor;
/**
 * @param {object} object base object to inject new prop
 * @param {string} path path to set the object
 * @param {any} value value to set
 */
function propSetter(object, path, value) {
    function pathSeg(path) {
        var pathAr = path.split('.');
        var parts = [];
        for (var i = 0; i < pathAr.length; i++) {
            var p = pathAr[i];
            while (p[p.length - 1] === '\\' && pathAr[i + 1] !== undefined) {
                p = p.slice(0, -1) + '.';
                p += pathAr[++i];
            }
            parts.push(p);
        }
        return parts;
    }
    function isObject(value) {
        var type = typeof value;
        return value !== null && (type === 'object' || type === 'function');
    }
    if (!isObject(object) || typeof path !== 'string') {
        return JSON.parse(JSON.stringify(object));
    }
    var ret = object;
    var pathAr = pathSeg(path);
    for (var i = 0; i < pathAr.length; i++) {
        var p = pathAr[i];
        if (!isObject(object[p])) {
            object[p] = {};
        }
        if (i === pathAr.length - 1) {
            object[p] = value;
        }
        object = object[p];
    }
    return JSON.parse(JSON.stringify(ret));
}
exports.set = propSetter;
