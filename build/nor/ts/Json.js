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
exports.isReadonlyJsonArray = exports.isReadonlyJsonObject = exports.isReadonlyJsonAny = exports.isFlatJsonValue = exports.isJsonSerializable = exports.isReadonlyJsonSerializable = void 0;
var lodash_1 = require("./modules/lodash");
var Test_1 = require("./Test");
function isReadonlyJsonSerializable(value) {
    return !!value && lodash_1.isFunction(value.toJSON);
}
exports.isReadonlyJsonSerializable = isReadonlyJsonSerializable;
function isJsonSerializable(value) {
    return !!value && lodash_1.isFunction(value.toJSON);
}
exports.isJsonSerializable = isJsonSerializable;
function isFlatJsonValue(value) {
    return lodash_1.isString(value) || lodash_1.isNumber(value) || lodash_1.isBoolean(value) || lodash_1.isNull(value);
}
exports.isFlatJsonValue = isFlatJsonValue;
function isReadonlyJsonAny(value) {
    return isFlatJsonValue(value) || isReadonlyJsonArray(value) || isReadonlyJsonObject(value);
}
exports.isReadonlyJsonAny = isReadonlyJsonAny;
function isReadonlyJsonObject(value) {
    return Test_1.Test.isRegularObject(value) && lodash_1.every(lodash_1.keys(value), function (key) {
        var propertyValue = value[key];
        if (propertyValue === undefined)
            return true;
        return isReadonlyJsonAny(propertyValue);
    });
}
exports.isReadonlyJsonObject = isReadonlyJsonObject;
function isReadonlyJsonArray(value) {
    return lodash_1.isArray(value) && lodash_1.every(value, function (item) { return isReadonlyJsonAny(item); });
}
exports.isReadonlyJsonArray = isReadonlyJsonArray;
