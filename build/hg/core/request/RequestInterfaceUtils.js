"use strict";
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestInterfaceUtils = void 0;
var lodash_1 = require("../modules/lodash");
var RequestInterfaceUtils = /** @class */ (function () {
    function RequestInterfaceUtils() {
    }
    RequestInterfaceUtils.isObject = function (value) {
        return lodash_1.isObject(value);
    };
    RequestInterfaceUtils.hasPropertyMethods = function (value) {
        return lodash_1.has(value, 'methods');
    };
    RequestInterfaceUtils.hasPropertyControllerProperties = function (value) {
        return lodash_1.has(value, 'controllerProperties');
    };
    RequestInterfaceUtils.hasPropertyPaths = function (value) {
        return lodash_1.has(value, 'paths');
    };
    RequestInterfaceUtils.hasPropertyParams = function (value) {
        return lodash_1.has(value, 'params');
    };
    RequestInterfaceUtils.hasPropertyMappings = function (value) {
        return lodash_1.has(value, 'mappings');
    };
    RequestInterfaceUtils.hasPropertyController = function (value) {
        return lodash_1.has(value, 'controller');
    };
    RequestInterfaceUtils.hasPropertyQueryParam = function (value) {
        return lodash_1.has(value, 'queryParam');
    };
    RequestInterfaceUtils.hasPropertyType = function (value) {
        return lodash_1.has(value, 'type');
    };
    RequestInterfaceUtils.hasProperty__requestMappings = function (value) {
        return lodash_1.has(value, '__requestMappings');
    };
    RequestInterfaceUtils.hasPropertyStatus = function (value) {
        return lodash_1.has(value, 'status');
    };
    RequestInterfaceUtils.hasPropertyMessage = function (value) {
        return lodash_1.has(value, 'message');
    };
    RequestInterfaceUtils.createOrFunction = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return function (item) {
            return lodash_1.some(values, function (item2) {
                if (lodash_1.isFunction(item2))
                    return item2(item);
                return item === item2;
            });
        };
    };
    RequestInterfaceUtils.everyPropertyIs = function (value, test) {
        return lodash_1.every(lodash_1.map(lodash_1.keys(value), function (key) { return value[key]; }), test);
    };
    RequestInterfaceUtils.explainEveryPropertyIs = function (value, test, explain) {
        return lodash_1.filter(lodash_1.map(lodash_1.map(lodash_1.keys(value), function (key) { return value[key]; }), function (item, index) {
            if (!test(item)) {
                return "#" + index + ": " + explain(item);
            }
            else {
                return "";
            }
        }), function (item) { return !!item; });
    };
    return RequestInterfaceUtils;
}());
exports.RequestInterfaceUtils = RequestInterfaceUtils;
exports.default = RequestInterfaceUtils;
