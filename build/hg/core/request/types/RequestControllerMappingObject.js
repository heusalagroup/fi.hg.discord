"use strict";
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.explainRequestControllerMappingObject = exports.isRequestControllerMappingObject = void 0;
var RequestMappingObject_1 = require("./RequestMappingObject");
var RequestInterfaceUtils_1 = __importDefault(require("../RequestInterfaceUtils"));
var lodash_1 = require("../../modules/lodash");
var RequestControllerMethodObject_1 = require("./RequestControllerMethodObject");
function isRequestControllerMappingObject(value) {
    return (RequestInterfaceUtils_1.default.isObject(value)
        && RequestInterfaceUtils_1.default.hasPropertyMappings(value) && lodash_1.isArray(value.mappings) && lodash_1.every(value.mappings, RequestMappingObject_1.isRequestMappingObject)
        && RequestInterfaceUtils_1.default.hasPropertyControllerProperties(value) && lodash_1.isObject(value.controllerProperties) && RequestInterfaceUtils_1.default.everyPropertyIs(value.controllerProperties, RequestControllerMethodObject_1.isRequestControllerMethodObject));
}
exports.isRequestControllerMappingObject = isRequestControllerMappingObject;
function explainRequestControllerMappingObject(value) {
    if (!RequestInterfaceUtils_1.default.isObject(value))
        return "not object";
    if (!RequestInterfaceUtils_1.default.hasPropertyMappings(value)) {
        return "Property \"mappings\" was not valid: Did not exist";
    }
    if (!lodash_1.isArray(value.mappings)) {
        return "Property \"mappings\" was not valid: Was not array";
    }
    if (!lodash_1.every(value.mappings, RequestMappingObject_1.isRequestMappingObject)) {
        return "Property \"mappings\" was not valid: Some items were not valid";
    }
    if (!RequestInterfaceUtils_1.default.hasPropertyControllerProperties(value)) {
        return "Property \"controllerProperties\" was not valid: Property did not exist";
    }
    if (!lodash_1.isObject(value.controllerProperties)) {
        return "Property \"controllerProperties\" was not valid: Property was not object";
    }
    if (!RequestInterfaceUtils_1.default.everyPropertyIs(value.controllerProperties, RequestControllerMethodObject_1.isRequestControllerMethodObject)) {
        return "Property \"controllerProperties\" was not valid: Some properties were not valid: " + RequestInterfaceUtils_1.default.explainEveryPropertyIs(value.controllerProperties, RequestControllerMethodObject_1.isRequestControllerMethodObject, RequestControllerMethodObject_1.explainRequestControllerMethodObject);
    }
    return "ok";
}
exports.explainRequestControllerMappingObject = explainRequestControllerMappingObject;
