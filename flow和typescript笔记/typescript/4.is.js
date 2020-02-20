"use strict";
function isNumber(x) {
    return typeof x === 'number';
}
function isString(x) {
    return typeof x === 'string';
}
function padLeft(value, padding) {
    if (isNumber(padding)) {
        return 'number';
    }
    else if (isString(padding)) {
        return 'string';
    }
    throw new Error('undefind');
}
