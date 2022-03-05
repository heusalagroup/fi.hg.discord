"use strict";
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequestBodyParamObject = void 0;
var RequestParamValueType_1 = require("./RequestParamValueType");
var RequestParamObjectType_1 = __importDefault(require("./RequestParamObjectType"));
function isRequestBodyParamObject(value) {
    return (!!value
        && (value === null || value === void 0 ? void 0 : value.objectType) === RequestParamObjectType_1.default.REQUEST_BODY
        && RequestParamValueType_1.isRequestParamValueType(value === null || value === void 0 ? void 0 : value.valueType));
}
exports.isRequestBodyParamObject = isRequestBodyParamObject;
