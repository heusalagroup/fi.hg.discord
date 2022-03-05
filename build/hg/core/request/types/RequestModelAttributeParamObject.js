"use strict";
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequestModelAttributeParamObject = void 0;
var RequestParamValueType_1 = require("./RequestParamValueType");
var lodash_1 = require("../../modules/lodash");
var RequestParamObjectType_1 = __importDefault(require("./RequestParamObjectType"));
function isRequestModelAttributeParamObject(value) {
    return (!!value
        && (value === null || value === void 0 ? void 0 : value.objectType) === RequestParamObjectType_1.default.MODEL_ATTRIBUTE
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.attributeName)
        && RequestParamValueType_1.isRequestParamValueType(value === null || value === void 0 ? void 0 : value.valueType));
}
exports.isRequestModelAttributeParamObject = isRequestModelAttributeParamObject;
