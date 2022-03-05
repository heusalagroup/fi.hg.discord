"use strict";
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setInternalRequestMappingObject = exports.hasInternalRequestMappingObject = exports.getInternalRequestMappingObject = exports.isRequestController = exports.INTERNAL_KEYWORD = void 0;
var RequestInterfaceUtils_1 = __importDefault(require("../RequestInterfaceUtils"));
var RequestControllerMappingObject_1 = require("./RequestControllerMappingObject");
var lodash_1 = require("../../modules/lodash");
var LogService_1 = __importDefault(require("../../LogService"));
var LOG = LogService_1.default.createLogger('RequestController');
exports.INTERNAL_KEYWORD = '__requestMappings';
function isRequestController(value) {
    if (!value)
        return false;
    var hasInternalValue = RequestInterfaceUtils_1.default.hasProperty__requestMappings(value);
    if (!hasInternalValue)
        return true;
    var internalValue = value[exports.INTERNAL_KEYWORD];
    if (RequestControllerMappingObject_1.isRequestControllerMappingObject(internalValue)) {
        return true;
    }
    LOG.warn('The internal mapping object was not correct: ' + JSON.stringify(internalValue, null, 2) + ': ' + RequestControllerMappingObject_1.explainRequestControllerMappingObject(internalValue));
    return false;
}
exports.isRequestController = isRequestController;
function getInternalRequestMappingObject(value, controllerInstance) {
    if (!RequestInterfaceUtils_1.default.hasProperty__requestMappings(value)) {
        return undefined;
    }
    return __assign(__assign({}, value[exports.INTERNAL_KEYWORD]), { controller: controllerInstance });
}
exports.getInternalRequestMappingObject = getInternalRequestMappingObject;
function hasInternalRequestMappingObject(value) {
    return RequestInterfaceUtils_1.default.hasProperty__requestMappings(value);
}
exports.hasInternalRequestMappingObject = hasInternalRequestMappingObject;
function setInternalRequestMappingObject(value, mapping) {
    var strippedMapping = __assign({}, mapping);
    if (lodash_1.has(strippedMapping, 'controller')) {
        delete strippedMapping.controller;
    }
    // LOG.debug(`setInternalRequestMappingObject: Setting "${INTERNAL_KEYWORD}" of: `, value, ' as: ', strippedMapping);
    value[exports.INTERNAL_KEYWORD] = strippedMapping;
}
exports.setInternalRequestMappingObject = setInternalRequestMappingObject;
