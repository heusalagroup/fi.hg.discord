"use strict";
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestUtils = void 0;
var lodash_1 = require("../modules/lodash");
var RequestUtils = /** @class */ (function () {
    function RequestUtils() {
    }
    RequestUtils.someMethodsMatch = function (value, target) {
        return lodash_1.some(target, function (item) { return item === value; });
    };
    RequestUtils.somePathsMatch = function (path, target) {
        return lodash_1.some(target, function (item) { return path.startsWith(item); });
    };
    RequestUtils.requestMappingMatch = function (method, path, mapping) {
        return ((mapping.methods.length === 0 ? true : this.someMethodsMatch(method, mapping.methods))
            && (mapping.paths.length === 0 ? true : this.somePathsMatch(path, mapping.paths)));
    };
    return RequestUtils;
}());
exports.RequestUtils = RequestUtils;
exports.default = RequestUtils;
