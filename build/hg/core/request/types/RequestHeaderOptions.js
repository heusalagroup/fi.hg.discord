"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequestHeaderOptionsOrUndefined = exports.isRequestHeaderOptions = void 0;
var lodash_1 = require("../../modules/lodash");
function isRequestHeaderOptions(value) {
    return (!!value
        && ((value === null || value === void 0 ? void 0 : value.required) === undefined || lodash_1.isBoolean(value === null || value === void 0 ? void 0 : value.required))
        && ((value === null || value === void 0 ? void 0 : value.defaultValue) === undefined || lodash_1.isString(value === null || value === void 0 ? void 0 : value.defaultValue)));
}
exports.isRequestHeaderOptions = isRequestHeaderOptions;
function isRequestHeaderOptionsOrUndefined(value) {
    return value === undefined || isRequestHeaderOptions(value);
}
exports.isRequestHeaderOptionsOrUndefined = isRequestHeaderOptionsOrUndefined;
