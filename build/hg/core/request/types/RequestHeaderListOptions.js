"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequestHeaderListOptions = void 0;
var DefaultHeaderMapValuesType_1 = require("./DefaultHeaderMapValuesType");
function isRequestHeaderListOptions(value) {
    return (!!value
        && ((value === null || value === void 0 ? void 0 : value.defaultValues) === undefined
            || DefaultHeaderMapValuesType_1.isDefaultHeaderMapValuesType(value === null || value === void 0 ? void 0 : value.defaultValues)));
}
exports.isRequestHeaderListOptions = isRequestHeaderListOptions;
