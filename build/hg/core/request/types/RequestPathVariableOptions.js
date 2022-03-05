"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequestPathVariableOptionsOrUndefined = exports.isRequestPathVariableOptions = void 0;
var lodash_1 = require("../../modules/lodash");
function isRequestPathVariableOptions(value) {
    return (!!value
        && lodash_1.isBooleanOrUndefined(value === null || value === void 0 ? void 0 : value.required)
        && lodash_1.isStringOrUndefined(value === null || value === void 0 ? void 0 : value.defaultValue)
        && lodash_1.isBooleanOrUndefined(value === null || value === void 0 ? void 0 : value.decodeValue));
}
exports.isRequestPathVariableOptions = isRequestPathVariableOptions;
function isRequestPathVariableOptionsOrUndefined(value) {
    return value === undefined || isRequestPathVariableOptions(value);
}
exports.isRequestPathVariableOptionsOrUndefined = isRequestPathVariableOptionsOrUndefined;
