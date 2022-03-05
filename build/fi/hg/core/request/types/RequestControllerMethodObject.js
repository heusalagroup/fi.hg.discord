"use strict";
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.explainRequestControllerMethodObject = exports.isRequestControllerMethodObject = void 0;
var RequestMappingObject_1 = require("./RequestMappingObject");
var RequestParamObject_1 = require("./RequestParamObject");
var RequestInterfaceUtils_1 = __importDefault(require("../RequestInterfaceUtils"));
var lodash_1 = require("../../modules/lodash");
function isRequestControllerMethodObject(value) {
    return (RequestInterfaceUtils_1.default.isObject(value)
        && RequestInterfaceUtils_1.default.hasPropertyMappings(value) && lodash_1.isArray(value.mappings) && lodash_1.every(value.mappings, RequestMappingObject_1.isRequestMappingObject)
        && RequestInterfaceUtils_1.default.hasPropertyParams(value) && lodash_1.isArray(value.params) && lodash_1.every(value.params, RequestInterfaceUtils_1.default.createOrFunction(RequestParamObject_1.isRequestParamObject, lodash_1.isNull)));
}
exports.isRequestControllerMethodObject = isRequestControllerMethodObject;
function explainRequestControllerMethodObject(value) {
    if (!RequestInterfaceUtils_1.default.isObject(value))
        return "Value is not object";
    if (!RequestInterfaceUtils_1.default.hasPropertyMappings(value)) {
        return "Property \"mappings\" did not exist";
    }
    if (!lodash_1.isArray(value.mappings)) {
        return "Property \"mappings\" was not an array";
    }
    if (!lodash_1.every(value.mappings, RequestMappingObject_1.isRequestMappingObject)) {
        return "Property \"mappings\" had some elements which were not RequestMappingObject";
    }
    if (!RequestInterfaceUtils_1.default.hasPropertyParams(value)) {
        return "Property \"params\" did not exist";
    }
    if (!lodash_1.isArray(value.params)) {
        return "Property \"params\" was not an array";
    }
    var test = RequestInterfaceUtils_1.default.createOrFunction(RequestParamObject_1.isRequestParamObject, lodash_1.isNull);
    if (!lodash_1.every(value.params, test)) {
        return "Property \"params\" had some elements which were not RequestParamObject or null: " + lodash_1.filter(lodash_1.map(value.params, function (item, index) {
            if (!test(item)) {
                return "Item #" + index + " was not null or RequestParamObject";
            }
            return "";
        }), function (item) { return !!item; }).join(', ');
    }
    return "ok";
}
exports.explainRequestControllerMethodObject = explainRequestControllerMethodObject;
