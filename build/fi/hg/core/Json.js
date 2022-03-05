"use strict";
// Copyright (c) 2020 Sendanor. All rights reserved.
//               2020 Jaakko Heusala <jheusala@iki.fi>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneJson = exports.cloneJsonObject = exports.closeJsonArray = exports.isJsonString = exports.parseJson = exports.isReadonlyJsonArrayOf = exports.isReadonlyJsonArray = exports.isReadonlyJsonObjectOf = exports.isReadonlyJsonObject = exports.isReadonlyJsonAny = exports.isJsonArrayOf = exports.isJsonArray = exports.isJsonObjectOf = exports.isJsonObjectOrUndefined = exports.isJsonObject = exports.isJsonAnyOrUndefined = exports.isJsonAny = exports.isJson = exports.isFlatJsonValue = exports.isJsonSerializable = exports.isReadonlyJsonSerializable = void 0;
var lodash_1 = require("./modules/lodash");
function isReadonlyJsonSerializable(value) {
    return !!value && lodash_1.isFunction(value === null || value === void 0 ? void 0 : value.toJSON);
}
exports.isReadonlyJsonSerializable = isReadonlyJsonSerializable;
function isJsonSerializable(value) {
    return !!value && lodash_1.isFunction(value === null || value === void 0 ? void 0 : value.toJSON);
}
exports.isJsonSerializable = isJsonSerializable;
function isFlatJsonValue(value) {
    return lodash_1.isString(value) || lodash_1.isNumber(value) || lodash_1.isBoolean(value) || lodash_1.isNull(value);
}
exports.isFlatJsonValue = isFlatJsonValue;
function isJson(value) {
    return isJsonAny(value);
}
exports.isJson = isJson;
function isJsonAny(value) {
    return isFlatJsonValue(value) || isJsonArray(value) || isJsonObject(value);
}
exports.isJsonAny = isJsonAny;
function isJsonAnyOrUndefined(value) {
    return isJsonAny(value) || lodash_1.isUndefined(value);
}
exports.isJsonAnyOrUndefined = isJsonAnyOrUndefined;
/**
 * Will accept objects with undefined values, which usually disappear from the JSON when stringified.
 *
 * @param value
 */
function isJsonObject(value) {
    return lodash_1.isRegularObject(value) && lodash_1.everyProperty(value, lodash_1.isString, lodash_1.createOr(isJsonAny, lodash_1.isUndefined));
}
exports.isJsonObject = isJsonObject;
/**
 * Will accept objects with undefined values, which usually disappear from the JSON when stringified.
 *
 * @param value
 */
function isJsonObjectOrUndefined(value) {
    return lodash_1.isUndefined(value) || isJsonObject(value);
}
exports.isJsonObjectOrUndefined = isJsonObjectOrUndefined;
/**
 * Will accept objects with undefined values, which usually disappear from the JSON when stringified.
 *
 * @param value
 * @param isPropertyOf
 */
function isJsonObjectOf(value, isPropertyOf) {
    if (isPropertyOf === void 0) { isPropertyOf = isJsonAny; }
    return lodash_1.isRegularObject(value) && lodash_1.everyProperty(value, lodash_1.isString, lodash_1.createOr(isPropertyOf, lodash_1.isUndefined));
}
exports.isJsonObjectOf = isJsonObjectOf;
/**
 * Will also accept arrays with undefined values, too, although these will usually convert to null.
 *
 * @param value
 */
function isJsonArray(value) {
    return lodash_1.isArrayOf(value, lodash_1.createOr(isJsonAny, lodash_1.isUndefined));
}
exports.isJsonArray = isJsonArray;
/**
 * Will also accept arrays with undefined values, too, although these will usually convert to null.
 *
 * @param value
 * @param isItemOf
 */
function isJsonArrayOf(value, isItemOf) {
    if (isItemOf === void 0) { isItemOf = isJsonAny; }
    return lodash_1.isArrayOf(value, lodash_1.createOr(isItemOf, lodash_1.isUndefined));
}
exports.isJsonArrayOf = isJsonArrayOf;
function isReadonlyJsonAny(value) {
    return isFlatJsonValue(value) || isReadonlyJsonArray(value) || isReadonlyJsonObject(value);
}
exports.isReadonlyJsonAny = isReadonlyJsonAny;
function isReadonlyJsonObject(value) {
    return lodash_1.isRegularObject(value) && lodash_1.everyProperty(value, lodash_1.isString, lodash_1.createOr(isReadonlyJsonAny, lodash_1.isUndefined));
}
exports.isReadonlyJsonObject = isReadonlyJsonObject;
function isReadonlyJsonObjectOf(value, isPropertyOf) {
    if (isPropertyOf === void 0) { isPropertyOf = isReadonlyJsonAny; }
    return lodash_1.isRegularObject(value) && lodash_1.everyProperty(value, lodash_1.isString, lodash_1.createOr(isPropertyOf, lodash_1.isUndefined));
}
exports.isReadonlyJsonObjectOf = isReadonlyJsonObjectOf;
function isReadonlyJsonArray(value) {
    return lodash_1.isArrayOf(value, lodash_1.createOr(isReadonlyJsonAny, lodash_1.isUndefined));
}
exports.isReadonlyJsonArray = isReadonlyJsonArray;
function isReadonlyJsonArrayOf(value, isItemOf) {
    if (isItemOf === void 0) { isItemOf = isReadonlyJsonAny; }
    return lodash_1.isArrayOf(value, lodash_1.createOr(isItemOf, lodash_1.isUndefined));
}
exports.isReadonlyJsonArrayOf = isReadonlyJsonArrayOf;
function parseJson(value) {
    try {
        return JSON.parse(value);
    }
    catch (err) {
        return undefined;
    }
}
exports.parseJson = parseJson;
function isJsonString(value) {
    return parseJson(value) !== undefined;
}
exports.isJsonString = isJsonString;
function closeJsonArray(value) {
    if (isJsonArray(value)) {
        return lodash_1.map(value, cloneJson);
    }
    throw new TypeError("closeJsonArray: Not an JSON array: " + value);
}
exports.closeJsonArray = closeJsonArray;
function cloneJsonObject(value) {
    if (isJsonObject(value)) {
        return lodash_1.reduce(lodash_1.keys(value), function (obj, key) {
            obj[key] = cloneJson(value[key]);
            return obj;
        }, {});
    }
    throw new TypeError("cloneJsonObject: Not an JSON object: " + value);
}
exports.cloneJsonObject = cloneJsonObject;
function cloneJson(value) {
    if (value === undefined)
        return undefined;
    if (value === null)
        return null;
    if (lodash_1.isString(value))
        return value;
    if (lodash_1.isNumber(value))
        return value;
    if (lodash_1.isBoolean(value))
        return value;
    if (isJsonArray(value))
        return closeJsonArray(value);
    if (isJsonObject(value))
        return cloneJsonObject(value);
    throw new TypeError("cloneJson: Not JSON compatible value: " + value);
}
exports.cloneJson = cloneJson;
