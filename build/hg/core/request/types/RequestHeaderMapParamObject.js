"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequestHeaderMapParamObject = void 0;
var RequestParamObjectType_1 = __importDefault(require("./RequestParamObjectType"));
var DefaultHeaderMapValuesType_1 = require("./DefaultHeaderMapValuesType");
function isRequestHeaderMapParamObject(value) {
    return (!!value
        && (value === null || value === void 0 ? void 0 : value.objectType) === RequestParamObjectType_1.default.REQUEST_HEADER_MAP
        && ((value === null || value === void 0 ? void 0 : value.defaultValues) === undefined || DefaultHeaderMapValuesType_1.isDefaultHeaderMapValuesType(value === null || value === void 0 ? void 0 : value.defaultValues)));
}
exports.isRequestHeaderMapParamObject = isRequestHeaderMapParamObject;
