"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = void 0;
const disallowedKeys = new Set(["__proto__", "prototype", "constructor"]);
const isValidPath = (pathSegments) => !pathSegments.some((segment) => disallowedKeys.has(segment));
/**
 * @param {object} object base object to inject new prop
 * @param {string} path path to set the object
 * @param {any} value value to set
 */
function propSetter(object, path, value) {
    function pathSeg(path) {
        const pathAr = path.split(".");
        const parts = [];
        for (let i = 0; i < pathAr.length; i++) {
            let p = pathAr[i];
            while (p[p.length - 1] === "\\" && pathAr[i + 1] !== undefined) {
                p = p.slice(0, -1) + ".";
                p += pathAr[++i];
            }
            parts.push(p);
        }
        return parts;
    }
    function isObject(value) {
        const type = typeof value;
        return value !== null && (type === "object" || type === "function");
    }
    if (!isObject(object) || typeof path !== "string") {
        return JSON.parse(JSON.stringify(object));
    }
    const ret = object;
    const pathAr = pathSeg(path);
    for (let i = 0; i < pathAr.length; i++) {
        const p = pathAr[i];
        if (!isValidPath(p)) {
            return [];
        }
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
