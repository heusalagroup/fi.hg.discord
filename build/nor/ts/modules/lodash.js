"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.has = exports.startsWith = exports.isNumber = exports.isString = exports.isFunction = exports.isNull = exports.isObject = exports.isBoolean = exports.trim = exports.keys = exports.forEach = exports.filter = exports.split = exports.sortBy = exports.findIndex = exports.indexOf = exports.slice = exports.remove = exports.reduce = exports.find = exports.concat = exports.set = exports.get = exports.every = exports.some = exports.map = exports.isNumberArray = exports.isBooleanArray = exports.isStringArray = exports.isStringOrUndefined = exports.isNumberOrUndefined = exports.isBooleanOrUndefined = exports.isArray = void 0;
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
var map_js_1 = __importDefault(require("lodash/map.js"));
exports.map = map_js_1.default;
var some_js_1 = __importDefault(require("lodash/some.js"));
exports.some = some_js_1.default;
var every_js_1 = __importDefault(require("lodash/every.js"));
exports.every = every_js_1.default;
var get_js_1 = __importDefault(require("lodash/get.js"));
exports.get = get_js_1.default;
var set_js_1 = __importDefault(require("lodash/set.js"));
exports.set = set_js_1.default;
var concat_js_1 = __importDefault(require("lodash/concat.js"));
exports.concat = concat_js_1.default;
var find_js_1 = __importDefault(require("lodash/find.js"));
exports.find = find_js_1.default;
var reduce_js_1 = __importDefault(require("lodash/reduce.js"));
exports.reduce = reduce_js_1.default;
var remove_js_1 = __importDefault(require("lodash/remove.js"));
exports.remove = remove_js_1.default;
var slice_js_1 = __importDefault(require("lodash/slice.js"));
exports.slice = slice_js_1.default;
var indexOf_js_1 = __importDefault(require("lodash/indexOf.js"));
exports.indexOf = indexOf_js_1.default;
var findIndex_js_1 = __importDefault(require("lodash/findIndex.js"));
exports.findIndex = findIndex_js_1.default;
var sortBy_js_1 = __importDefault(require("lodash/sortBy.js"));
exports.sortBy = sortBy_js_1.default;
var filter_js_1 = __importDefault(require("lodash/filter.js"));
exports.filter = filter_js_1.default;
var forEach_js_1 = __importDefault(require("lodash/forEach.js"));
exports.forEach = forEach_js_1.default;
var split_js_1 = __importDefault(require("lodash/split.js"));
exports.split = split_js_1.default;
var keys_js_1 = __importDefault(require("lodash/keys.js"));
exports.keys = keys_js_1.default;
var trim_js_1 = __importDefault(require("lodash/trim.js"));
exports.trim = trim_js_1.default;
var has_js_1 = __importDefault(require("lodash/has.js"));
exports.has = has_js_1.default;
var isBoolean_js_1 = __importDefault(require("lodash/isBoolean.js"));
exports.isBoolean = isBoolean_js_1.default;
var isObject_js_1 = __importDefault(require("lodash/isObject.js"));
exports.isObject = isObject_js_1.default;
var isNull_js_1 = __importDefault(require("lodash/isNull.js"));
exports.isNull = isNull_js_1.default;
var isArray_js_1 = __importDefault(require("lodash/isArray.js"));
var isFunction_js_1 = __importDefault(require("lodash/isFunction.js"));
exports.isFunction = isFunction_js_1.default;
var isString_js_1 = __importDefault(require("lodash/isString.js"));
exports.isString = isString_js_1.default;
var isNumber_js_1 = __importDefault(require("lodash/isNumber.js"));
exports.isNumber = isNumber_js_1.default;
var startsWith_js_1 = __importDefault(require("lodash/startsWith.js"));
exports.startsWith = startsWith_js_1.default;
function isArray(value) {
    return isArray_js_1.default(value);
}
exports.isArray = isArray;
function isBooleanOrUndefined(value) {
    return (value === undefined
        || isBoolean_js_1.default(value));
}
exports.isBooleanOrUndefined = isBooleanOrUndefined;
function isNumberOrUndefined(value) {
    return (value === undefined
        || isNumber_js_1.default(value));
}
exports.isNumberOrUndefined = isNumberOrUndefined;
function isStringOrUndefined(value) {
    return (value === undefined
        || isString_js_1.default(value));
}
exports.isStringOrUndefined = isStringOrUndefined;
function isStringArray(value) {
    return (!!value
        && isArray(value)
        && every_js_1.default(value, isString_js_1.default));
}
exports.isStringArray = isStringArray;
function isBooleanArray(value) {
    return (!!value
        && isArray(value)
        && every_js_1.default(value, isBoolean_js_1.default));
}
exports.isBooleanArray = isBooleanArray;
function isNumberArray(value) {
    return (!!value
        && isArray(value)
        && every_js_1.default(value, isNumber_js_1.default));
}
exports.isNumberArray = isNumberArray;
