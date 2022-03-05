"use strict";
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyRequestParamValueType = exports.parseRequestParamValueType = exports.isRequestParamValueTypeOrUndefined = exports.isRequestParamValueType = exports.RequestParamValueType = void 0;
var lodash_1 = require("../../modules/lodash");
var RequestParamValueType;
(function (RequestParamValueType) {
    RequestParamValueType[RequestParamValueType["JSON"] = 0] = "JSON";
    RequestParamValueType[RequestParamValueType["STRING"] = 1] = "STRING";
    RequestParamValueType[RequestParamValueType["INTEGER"] = 2] = "INTEGER";
    RequestParamValueType[RequestParamValueType["NUMBER"] = 3] = "NUMBER";
})(RequestParamValueType = exports.RequestParamValueType || (exports.RequestParamValueType = {}));
function isRequestParamValueType(value) {
    if (!lodash_1.isNumber(value))
        return false;
    switch (value) {
        case RequestParamValueType.JSON:
        case RequestParamValueType.STRING:
        case RequestParamValueType.INTEGER:
        case RequestParamValueType.NUMBER:
            return true;
    }
    return false;
}
exports.isRequestParamValueType = isRequestParamValueType;
function isRequestParamValueTypeOrUndefined(value) {
    return value === undefined || isRequestParamValueType(value);
}
exports.isRequestParamValueTypeOrUndefined = isRequestParamValueTypeOrUndefined;
function parseRequestParamValueType(value) {
    if (isRequestParamValueType(value))
        return value;
    if (lodash_1.isString(value)) {
        var lowerCaseValue = value.toLowerCase();
        switch (lowerCaseValue) {
            case 'json': return RequestParamValueType.JSON;
            case 'string': return RequestParamValueType.STRING;
            case 'integer': return RequestParamValueType.INTEGER;
            case 'number': return RequestParamValueType.NUMBER;
        }
    }
    throw new TypeError("Value was not parsable to RequestParamType: \"" + value + "\"");
}
exports.parseRequestParamValueType = parseRequestParamValueType;
function stringifyRequestParamValueType(value) {
    switch (value) {
        case RequestParamValueType.JSON: return 'json';
        case RequestParamValueType.STRING: return 'string';
        case RequestParamValueType.INTEGER: return 'integer';
        case RequestParamValueType.NUMBER: return 'number';
    }
    throw new TypeError("Unsupported value: \"" + value + "\"");
}
exports.stringifyRequestParamValueType = stringifyRequestParamValueType;
exports.default = RequestParamValueType;
