"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequestPathVariableMapParamObject = void 0;
var RequestParamObjectType_1 = __importDefault(require("./RequestParamObjectType"));
var DefaultPathVariableMapValuesType_1 = require("./DefaultPathVariableMapValuesType");
function isRequestPathVariableMapParamObject(value) {
    return (!!value
        && (value === null || value === void 0 ? void 0 : value.objectType) === RequestParamObjectType_1.default.PATH_VARIABLE_MAP
        && ((value === null || value === void 0 ? void 0 : value.defaultValues) === undefined || DefaultPathVariableMapValuesType_1.isDefaultPathVariableMapValuesType(value === null || value === void 0 ? void 0 : value.defaultValues)));
}
exports.isRequestPathVariableMapParamObject = isRequestPathVariableMapParamObject;
