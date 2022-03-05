"use strict";
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = exports.keys = exports.pathsToScalarItems = exports.parseNonEmptyString = exports.parseString = exports.parseBoolean = exports.hasNoOtherKeys = exports.getOtherKeys = exports.parseFunctionSignature = exports.isObjectOf = exports.isObject = exports.createAnd = exports.createOr = exports.isPromise = exports.isRegularObjectOrUndefined = exports.isRegularObjectOrUndefinedOf = exports.explainRegularObjectOf = exports.assertRegularObjectOf = exports.isRegularObjectOf = exports.isRegularObject = exports.assertEveryProperty = exports.everyProperty = exports.everyValue = exports.everyKey = exports.every = exports.some = exports.isSafeIntegerOf = exports.isSafeInteger = exports.isIntegerOf = exports.isIntegerOrUndefined = exports.isInteger = exports.parseInteger = exports.isNumberArray = exports.isBooleanArray = exports.isStringArrayOrUndefined = exports.isStringArray = exports.isStringOrUndefinedOf = exports.isStringOrUndefined = exports.isStringOf = exports.isNumber = exports.isString = exports.isNumberOrUndefined = exports.isBooleanOrUndefined = exports.isArrayOrUndefinedOf = exports.isArrayOrUndefined = exports.isArrayOf = exports.isArray = exports.isUndefined = exports.toTestCallbackNonStandard = exports.toTestCallback = void 0;
exports.isEqual = exports.join = exports.first = exports.uniq = exports.values = exports.has = exports.endsWith = exports.startsWith = exports.toSafeInteger = exports.toInteger = exports.isFunction = exports.isNull = exports.isBoolean = exports.trim = exports.forEach = exports.filter = exports.split = exports.sortBy = exports.findIndex = exports.indexOf = exports.slice = exports.remove = exports.reduce = exports.find = exports.concat = exports.set = exports.get = void 0;
var map_js_1 = __importDefault(require("lodash/map.js"));
exports.map = map_js_1.default;
var some_js_1 = __importDefault(require("lodash/some.js"));
var every_js_1 = __importDefault(require("lodash/every.js"));
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
var uniq_js_1 = __importDefault(require("lodash/uniq.js"));
exports.uniq = uniq_js_1.default;
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
var trim_js_1 = __importDefault(require("lodash/trim.js"));
exports.trim = trim_js_1.default;
var has_js_1 = __importDefault(require("lodash/has.js"));
exports.has = has_js_1.default;
var isBoolean_js_1 = __importDefault(require("lodash/isBoolean.js"));
exports.isBoolean = isBoolean_js_1.default;
var isObject_js_1 = __importDefault(require("lodash/isObject.js"));
var isNull_js_1 = __importDefault(require("lodash/isNull.js"));
exports.isNull = isNull_js_1.default;
var isArray_js_1 = __importDefault(require("lodash/isArray.js"));
var isFunction_js_1 = __importDefault(require("lodash/isFunction.js"));
exports.isFunction = isFunction_js_1.default;
var isString_js_1 = __importDefault(require("lodash/isString.js"));
var isNumber_js_1 = __importDefault(require("lodash/isNumber.js"));
var isInteger_js_1 = __importDefault(require("lodash/isInteger.js"));
var isSafeInteger_js_1 = __importDefault(require("lodash/isSafeInteger.js"));
var toInteger_js_1 = __importDefault(require("lodash/toInteger.js"));
exports.toInteger = toInteger_js_1.default;
var toSafeInteger_js_1 = __importDefault(require("lodash/toSafeInteger.js"));
exports.toSafeInteger = toSafeInteger_js_1.default;
var startsWith_js_1 = __importDefault(require("lodash/startsWith.js"));
exports.startsWith = startsWith_js_1.default;
var endsWith_js_1 = __importDefault(require("lodash/endsWith.js"));
exports.endsWith = endsWith_js_1.default;
var values_js_1 = __importDefault(require("lodash/values.js"));
exports.values = values_js_1.default;
var join_js_1 = __importDefault(require("lodash/join.js"));
exports.join = join_js_1.default;
var isEqual_js_1 = __importDefault(require("lodash/isEqual.js"));
exports.isEqual = isEqual_js_1.default;
var first_js_1 = __importDefault(require("lodash/first.js"));
exports.first = first_js_1.default;
/**
 *
 * @param callback
 * @__PURE__
 * @nosideeffects
 */
function toTestCallback(callback) {
    return function (value, index, arr) { return callback(value); };
}
exports.toTestCallback = toTestCallback;
/**
 *
 * @param callback
 * @__PURE__
 * @nosideeffects
 */
function toTestCallbackNonStandard(callback) {
    // @ts-ignore
    return function (value, index, arr) { return callback(value); };
}
exports.toTestCallbackNonStandard = toTestCallbackNonStandard;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function isUndefined(value) {
    return value === undefined;
}
exports.isUndefined = isUndefined;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function isArray(value) {
    return isArray_js_1.default(value);
}
exports.isArray = isArray;
/**
 *
 * @param value
 * @param isItem
 * @param minLength
 * @param maxLength
 * @__PURE__
 * @nosideeffects
 */
function isArrayOf(value, isItem, minLength, maxLength) {
    var _a;
    if (isItem === void 0) { isItem = undefined; }
    if (minLength === void 0) { minLength = undefined; }
    if (maxLength === void 0) { maxLength = undefined; }
    if (!isArray_js_1.default(value))
        return false;
    var len = (_a = value === null || value === void 0 ? void 0 : value.length) !== null && _a !== void 0 ? _a : 0;
    if (minLength !== undefined && len < minLength) {
        return false;
    }
    if (maxLength !== undefined && len > maxLength) {
        return false;
    }
    if (isItem !== undefined) {
        return every(value, isItem);
    }
    return true;
}
exports.isArrayOf = isArrayOf;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function isArrayOrUndefined(value) {
    if (value === undefined)
        return true;
    return isArray(value);
}
exports.isArrayOrUndefined = isArrayOrUndefined;
/**
 *
 * @param value
 * @param isItem
 * @param minLength
 * @param maxLength
 * @__PURE__
 * @nosideeffects
 */
function isArrayOrUndefinedOf(value, isItem, minLength, maxLength) {
    if (isItem === void 0) { isItem = undefined; }
    if (minLength === void 0) { minLength = undefined; }
    if (maxLength === void 0) { maxLength = undefined; }
    if (value === undefined)
        return true;
    return isArrayOf(value, isItem, minLength, maxLength);
}
exports.isArrayOrUndefinedOf = isArrayOrUndefinedOf;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function isBooleanOrUndefined(value) {
    return isUndefined(value) || isBoolean_js_1.default(value);
}
exports.isBooleanOrUndefined = isBooleanOrUndefined;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function isNumberOrUndefined(value) {
    return isUndefined(value) || isNumber(value);
}
exports.isNumberOrUndefined = isNumberOrUndefined;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function isString(value) {
    return isString_js_1.default(value);
}
exports.isString = isString;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function isNumber(value) {
    return isNumber_js_1.default(value);
}
exports.isNumber = isNumber;
/**
 *
 * @param value
 * @param minLength
 * @param maxLength
 * @__PURE__
 * @nosideeffects
 */
function isStringOf(value, minLength, maxLength) {
    var _a;
    if (minLength === void 0) { minLength = undefined; }
    if (maxLength === void 0) { maxLength = undefined; }
    if (!isString_js_1.default(value))
        return false;
    var len = (_a = value === null || value === void 0 ? void 0 : value.length) !== null && _a !== void 0 ? _a : 0;
    if (minLength !== undefined && len < minLength) {
        return false;
    }
    if (maxLength !== undefined && len > maxLength) {
        return false;
    }
    return true;
}
exports.isStringOf = isStringOf;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function isStringOrUndefined(value) {
    return isUndefined(value) || isString(value);
}
exports.isStringOrUndefined = isStringOrUndefined;
/**
 *
 * @param value
 * @param minLength
 * @param maxLength
 * @__PURE__
 * @nosideeffects
 */
function isStringOrUndefinedOf(value, minLength, maxLength) {
    if (minLength === void 0) { minLength = undefined; }
    if (maxLength === void 0) { maxLength = undefined; }
    return isUndefined(value) || isStringOf(value, minLength, maxLength);
}
exports.isStringOrUndefinedOf = isStringOrUndefinedOf;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function isStringArray(value) {
    return (!!value
        && isArray(value)
        && every(value, isString));
}
exports.isStringArray = isStringArray;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function isStringArrayOrUndefined(value) {
    return isUndefined(value) || isStringArray(value);
}
exports.isStringArrayOrUndefined = isStringArrayOrUndefined;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function isBooleanArray(value) {
    return (!!value
        && isArray(value)
        && every(value, isBoolean_js_1.default));
}
exports.isBooleanArray = isBooleanArray;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function isNumberArray(value) {
    return (!!value
        && isArray(value)
        && every(value, isNumber));
}
exports.isNumberArray = isNumberArray;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function parseInteger(value) {
    if (value === undefined) {
        return undefined;
    }
    if (isSafeInteger(value)) {
        return value;
    }
    if (isString(value)) {
        value = trim_js_1.default(value);
        if (value.length === 0)
            return undefined;
    }
    var parsedValue = toSafeInteger_js_1.default(value);
    return isSafeInteger(parsedValue) ? parsedValue : undefined;
}
exports.parseInteger = parseInteger;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function isInteger(value) {
    return isInteger_js_1.default(value);
}
exports.isInteger = isInteger;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function isIntegerOrUndefined(value) {
    return isUndefined(value) || isInteger_js_1.default(value);
}
exports.isIntegerOrUndefined = isIntegerOrUndefined;
/**
 *
 * @param value
 * @param rangeStart
 * @param rangeEnd
 * @__PURE__
 * @nosideeffects
 */
function isIntegerOf(value, rangeStart, rangeEnd) {
    if (rangeStart === void 0) { rangeStart = undefined; }
    if (rangeEnd === void 0) { rangeEnd = undefined; }
    if (!isInteger_js_1.default(value))
        return false;
    if (rangeStart !== undefined && value < rangeStart) {
        return false;
    }
    if (rangeEnd !== undefined && value > rangeEnd) {
        return false;
    }
    return true;
}
exports.isIntegerOf = isIntegerOf;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function isSafeInteger(value) {
    return isSafeInteger_js_1.default(value);
}
exports.isSafeInteger = isSafeInteger;
/**
 *
 * @param value
 * @param rangeStart
 * @param rangeEnd
 * @__PURE__
 * @nosideeffects
 */
function isSafeIntegerOf(value, rangeStart, rangeEnd) {
    if (rangeStart === void 0) { rangeStart = undefined; }
    if (rangeEnd === void 0) { rangeEnd = undefined; }
    if (!isSafeInteger_js_1.default(value))
        return false;
    if (rangeStart !== undefined && value < rangeStart) {
        return false;
    }
    if (rangeEnd !== undefined && value > rangeEnd) {
        return false;
    }
    return true;
}
exports.isSafeIntegerOf = isSafeIntegerOf;
/**
 *
 * @param value
 * @param isValue
 * @__PURE__
 * @nosideeffects
 */
function some(value, isValue) {
    return some_js_1.default(value, isValue);
}
exports.some = some;
/**
 *
 * @param value
 * @param isValue
 * @__PURE__
 * @nosideeffects
 */
function every(value, isValue) {
    return every_js_1.default(value, isValue);
}
exports.every = every;
/**
 *
 * @param value
 * @param isKey
 * @__PURE__
 * @nosideeffects
 */
function everyKey(value, isKey) {
    return isObject_js_1.default(value) && every(keys(value), isKey);
}
exports.everyKey = everyKey;
/**
 *
 * @param value
 * @param isItem
 * @__PURE__
 * @nosideeffects
 */
function everyValue(value, isItem) {
    return isObject_js_1.default(value) && every(values_js_1.default(value), isItem);
}
exports.everyValue = everyValue;
/**
 *
 * @param value
 * @param isKey
 * @param isItem
 * @__PURE__
 * @nosideeffects
 */
function everyProperty(value, isKey, isItem) {
    if (isKey === void 0) { isKey = isString; }
    if (isItem === void 0) { isItem = undefined; }
    if (isItem !== undefined && !everyValue(value, isItem)) {
        return false;
    }
    if (isKey !== undefined) {
        return everyKey(value, isKey);
    }
    return everyKey(value, isString);
}
exports.everyProperty = everyProperty;
/**
 *
 * @param value
 * @param isKey
 * @param isItem
 * @param explainKey
 * @param explainValue
 * @__PURE__
 * @nosideeffects
 */
function assertEveryProperty(value, isKey, isItem, explainKey, explainValue) {
    if (isKey === void 0) { isKey = undefined; }
    if (isItem === void 0) { isItem = undefined; }
    if (explainKey === void 0) { explainKey = undefined; }
    if (explainValue === void 0) { explainValue = undefined; }
    var isKeyTest = isKey === undefined ? isString : isKey;
    if (isItem !== undefined && !everyValue(value, function (item) { return isItem(item); })) {
        var valueArray = values_js_1.default(value);
        var itemIndex = findIndex_js_1.default(valueArray, function (item) { return !isItem(item); });
        var itemKey = keys(value)[itemIndex];
        var itemValue = valueArray[itemIndex];
        if (explainValue) {
            throw new TypeError("Property \"" + itemKey + "\": value not correct: " + explainValue(itemValue));
        }
        else {
            throw new TypeError("Property \"" + itemKey + "\": value not correct: " + JSON.stringify(itemValue, null, 2));
        }
    }
    var key = find_js_1.default(keys(value), function (key) { return !isKeyTest(key); });
    if (explainKey) {
        throw new TypeError("Property \"" + key + "\": key was not correct: " + explainKey(key));
    }
    else {
        throw new TypeError("Property \"" + key + "\": key was not correct: " + JSON.stringify(key, null, 2));
    }
}
exports.assertEveryProperty = assertEveryProperty;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function isRegularObject(value) {
    if (!isObject_js_1.default(value))
        return false;
    if (value instanceof Date)
        return false;
    if (isFunction_js_1.default(value))
        return false;
    if (isArray(value))
        return false;
    return everyProperty(value, isString, undefined);
}
exports.isRegularObject = isRegularObject;
/**
 *
 * @param value
 * @param isKey
 * @param isItem
 * @__PURE__
 * @nosideeffects
 */
function isRegularObjectOf(value, isKey, isItem) {
    if (isKey === void 0) { isKey = isString; }
    if (isItem === void 0) { isItem = undefined; }
    if (!isObject_js_1.default(value))
        return false;
    if (value instanceof Date)
        return false;
    if (isFunction_js_1.default(value))
        return false;
    if (isArray(value))
        return false;
    return everyProperty(value, isKey, isItem);
}
exports.isRegularObjectOf = isRegularObjectOf;
/**
 *
 * @param value
 * @param isKey
 * @param isItem
 * @param explainKey
 * @param explainValue
 * @__PURE__
 * @nosideeffects
 */
function assertRegularObjectOf(value, isKey, isItem, explainKey, explainValue) {
    if (isKey === void 0) { isKey = undefined; }
    if (isItem === void 0) { isItem = undefined; }
    if (explainKey === void 0) { explainKey = undefined; }
    if (explainValue === void 0) { explainValue = undefined; }
    var isKeyTest = isKey === undefined ? isString : isKey;
    if (!isObject_js_1.default(value)) {
        throw new TypeError("value was not object");
    }
    if (value instanceof Date) {
        throw new TypeError("value was Date");
    }
    if (isFunction_js_1.default(value)) {
        throw new TypeError("value was Function");
    }
    if (isArray(value)) {
        throw new TypeError("value was array");
    }
    assertEveryProperty(value, isKeyTest, isItem, explainKey, explainValue);
}
exports.assertRegularObjectOf = assertRegularObjectOf;
/**
 *
 * @param value
 * @param isKey
 * @param isItem
 * @param explainKey
 * @param explainValue
 * @__PURE__
 * @nosideeffects
 */
function explainRegularObjectOf(value, isKey, isItem, explainKey, explainValue) {
    var _a;
    if (isKey === void 0) { isKey = undefined; }
    if (isItem === void 0) { isItem = undefined; }
    if (explainKey === void 0) { explainKey = undefined; }
    if (explainValue === void 0) { explainValue = undefined; }
    try {
        assertRegularObjectOf(value, isKey, isItem, explainKey, explainValue);
        return 'No errors detected';
    }
    catch (err) {
        return (_a = err === null || err === void 0 ? void 0 : err.message) !== null && _a !== void 0 ? _a : "" + err;
    }
}
exports.explainRegularObjectOf = explainRegularObjectOf;
/**
 *
 * @param value
 * @param isKey
 * @param isItem
 * @__PURE__
 * @nosideeffects
 */
function isRegularObjectOrUndefinedOf(value, isKey, isItem) {
    if (isKey === void 0) { isKey = isString; }
    if (isItem === void 0) { isItem = undefined; }
    if (value === undefined)
        return true;
    return isRegularObjectOf(value, isKey, isItem);
}
exports.isRegularObjectOrUndefinedOf = isRegularObjectOrUndefinedOf;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function isRegularObjectOrUndefined(value) {
    if (value === undefined)
        return true;
    return isRegularObjectOf(value, isString, undefined);
}
exports.isRegularObjectOrUndefined = isRegularObjectOrUndefined;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function isPromise(value) {
    // @ts-ignore
    return isObject_js_1.default(value) && !!value.then && !!value.catch;
}
exports.isPromise = isPromise;
/**
 *
 * @param callbacks
 * @__PURE__
 * @nosideeffects
 */
function createOr() {
    var callbacks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        callbacks[_i] = arguments[_i];
    }
    return function (value) { return some(callbacks, function (callback) { return callback(value); }); };
}
exports.createOr = createOr;
/**
 *
 * @param callbacks
 * @__PURE__
 * @nosideeffects
 */
function createAnd() {
    var callbacks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        callbacks[_i] = arguments[_i];
    }
    return function (value) { return every(callbacks, function (callback) { return callback(value); }); };
}
exports.createAnd = createAnd;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function isObject(value) {
    return isObject_js_1.default(value);
}
exports.isObject = isObject;
/**
 *
 * @param value
 * @param isKey
 * @param isItem
 * @__PURE__
 * @nosideeffects
 */
function isObjectOf(value, isKey, isItem) {
    if (isKey === void 0) { isKey = undefined; }
    if (isItem === void 0) { isItem = undefined; }
    if (isKey === undefined) {
        return isObject_js_1.default(value);
    }
    if (isItem === undefined) {
        return everyKey(value, isKey);
    }
    return everyProperty(value, isKey, isItem);
}
exports.isObjectOf = isObjectOf;
/**
 *
 * @param f
 * @__PURE__
 * @nosideeffects
 */
function parseFunctionSignature(f) {
    if (!isFunction_js_1.default(f))
        return undefined;
    var fString = trim_js_1.default("" + f);
    if (startsWith_js_1.default(fString, 'function ')) {
        fString = trim_js_1.default(fString.substr('function '.length));
    }
    var index = fString.indexOf('{');
    if (index >= 0) {
        return trim_js_1.default(fString.substr(0, index));
    }
    return trim_js_1.default(fString);
}
exports.parseFunctionSignature = parseFunctionSignature;
/**
 *
 * @param obj
 * @param acceptedKeys
 * @__PURE__
 * @nosideeffects
 */
function getOtherKeys(obj, acceptedKeys) {
    return filter_js_1.default(keys(obj), function (key) { return !acceptedKeys.includes(key); });
}
exports.getOtherKeys = getOtherKeys;
/**
 *
 * @param obj
 * @param acceptedKeys
 * @__PURE__
 * @nosideeffects
 */
function hasNoOtherKeys(obj, acceptedKeys) {
    return isObject(obj) && getOtherKeys(obj, acceptedKeys).length === 0;
}
exports.hasNoOtherKeys = hasNoOtherKeys;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function parseBoolean(value) {
    if (value === undefined || value === '')
        return undefined;
    if (isBoolean_js_1.default(value))
        return value;
    return ["true", "t", "on", "1", "enabled"].includes(("" + value).toLowerCase());
}
exports.parseBoolean = parseBoolean;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function parseString(value) {
    if (value === undefined)
        return undefined;
    return "" + value;
}
exports.parseString = parseString;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function parseNonEmptyString(value) {
    if (value === undefined)
        return undefined;
    if (value === '')
        return undefined;
    return "" + value;
}
exports.parseNonEmptyString = parseNonEmptyString;
/**
 * Returns path to every scalar item in the variable.
 *
 * @param value
 * @param baseKey
 * @returns Every path to scalar properties.
 *          If the value is not an array or object, will return the baseKey itself if it's defined.
 *          If the baseKey is not defined or is empty, will return an empty array.
 * @__PURE__
 * @nosideeffects
 */
function pathsToScalarItems(value, baseKey) {
    if (baseKey === void 0) { baseKey = ''; }
    if (isArray(value)) {
        var allKeys_1 = [];
        forEach_js_1.default(value, function (item, itemIndex) {
            var itemKey = "" + baseKey + (baseKey ? '.' : '') + itemIndex;
            var allItemKeys = pathsToScalarItems(item, itemKey);
            allKeys_1 = allKeys_1.concat(allItemKeys);
        });
        return allKeys_1;
    }
    if (isObject(value)) {
        var allKeys_2 = [];
        forEach_js_1.default(keys(value), function (itemKey, itemIndex) {
            var itemFullKey = "" + baseKey + (baseKey ? '.' : '') + itemKey;
            var item = value[itemKey];
            var allItemKeys = pathsToScalarItems(item, itemFullKey);
            allKeys_2 = allKeys_2.concat(allItemKeys);
        });
        return allKeys_2;
    }
    if (baseKey === '') {
        return [];
    }
    return [baseKey];
}
exports.pathsToScalarItems = pathsToScalarItems;
function keys(value, isKey) {
    if (isKey === void 0) { isKey = isString; }
    if (isArray(value)) {
        var indexes = map_js_1.default(value, function (item, index) { return index; });
        var items = filter_js_1.default(indexes, function (key) { return isKey(key); });
        return items;
    }
    else if (isObject(value)) {
        var allKeys = Reflect.ownKeys(value);
        var items = filter_js_1.default(allKeys, function (key) { return isKey(key); });
        return items;
    }
    return [];
}
exports.keys = keys;
