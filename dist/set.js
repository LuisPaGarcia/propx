"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = propSetter;
