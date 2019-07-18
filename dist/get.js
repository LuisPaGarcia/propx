"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function propAccessor(object, key, def, p, undef) {
    key = key.split ? key.split('.') : key;
    for (var p = 0; p < key.length; p++) {
        object = object ? object[key[p]] : undef;
    }
    return object === undef ? def : object;
}
exports.default = propAccessor;
