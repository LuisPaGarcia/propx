"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = exports.get = void 0;
/**
 * @param {object} object base object to inject new prop
 * @param {string} path path to set the object
 * @param {any} value value to set
 */
function set(object, path, value) {
    function pathSeg(path) {
        const pathAr = path.split('.');
        const parts = [];
        for (let i = 0; i < pathAr.length; i++) {
            let p = pathAr[i];
            while (p[p.length - 1] === '\\' && pathAr[i + 1] !== undefined) {
                p = p.slice(0, -1) + '.';
                p += pathAr[++i];
            }
            parts.push(p);
        }
        return parts;
    }
    function isObject(value) {
        const type = typeof value;
        return value !== null && (type === 'object' || type === 'function');
    }
    if (!isObject(object) || typeof path !== 'string') {
        return JSON.parse(JSON.stringify(object));
    }
    const ret = object;
    const pathAr = pathSeg(path);
    for (let i = 0; i < pathAr.length; i++) {
        const p = pathAr[i];
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
exports.set = set;
/**
 *
 * @param {object} object object to access
 * @param { string | string[] } key string or array with dot notation path
 * @param { any } def optional parameter for default if the full key in path is missing
 */
function get(object, key, def) {
    key = key.split ? key.split('.') : key;
    for (var p = 0; p < key.length; p++) {
        object = object ? object[key[p]] : undefined;
    }
    return object === undefined ? def : object;
}
exports.get = get;
