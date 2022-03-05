"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequestPathVariableParamObject = void 0;
var RequestParamValueType_1 = require("./RequestParamValueType");
var lodash_1 = require("../../modules/lodash");
var RequestParamObjectType_1 = __importDefault(require("./RequestParamObjectType"));
function isRequestPathVariableParamObject(value) {
    return (!!value
        && (value === null || value === void 0 ? void 0 : value.objectType) === RequestParamObjectType_1.default.PATH_VARIABLE
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.variableName)
        && lodash_1.isBoolean(value === null || value === void 0 ? void 0 : value.isRequired)
        && RequestParamValueType_1.isRequestParamValueType(value === null || value === void 0 ? void 0 : value.valueType)
        && ((value === null || value === void 0 ? void 0 : value.defaultValue) === undefined || lodash_1.isString(value === null || value === void 0 ? void 0 : value.defaultValue)));
}
exports.isRequestPathVariableParamObject = isRequestPathVariableParamObject;
