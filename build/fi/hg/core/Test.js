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
exports.Test = void 0;
var lodash_1 = require("./modules/lodash");
/**
 *
 */
var Test = /** @class */ (function () {
    function Test() {
    }
    /**
     *
     * @param value
     * @deprecated Use `isString`, etc instead from the modules/lodash.ts
     */
    Test.isString = function (value) {
        return lodash_1.isString(value);
    };
    /**
     *
     * @param value
     * @deprecated Use `isNumber`, etc instead from the modules/lodash.ts
     */
    Test.isNumber = function (value) {
        return lodash_1.isNumber(value);
    };
    /**
     * Test if it is an regular object (eg. all keys are strings).
     *
     * @param value
     * @deprecated Use `isRegularObject`, etc instead from the modules/lodash.ts
     */
    Test.isRegularObject = function (value) {
        return lodash_1.isObject(value) && !lodash_1.isArray(value) && lodash_1.every(lodash_1.keys(value), function (key) { return lodash_1.isString(key); });
    };
    /**
     * Test if the value is an array
     *
     * @param value
     * @deprecated Use `isArray`, etc instead from the modules/lodash.ts
     */
    Test.isArray = function (value) {
        return lodash_1.isArray(value);
    };
    /**
     *
     * @param value
     * @deprecated Use `isPromise`, etc instead from the modules/lodash.ts
     */
    Test.isPromise = function (value) {
        // @ts-ignore
        return lodash_1.isObject(value) && !!value.then && !!value.catch;
    };
    return Test;
}());
exports.Test = Test;
exports.default = Test;
