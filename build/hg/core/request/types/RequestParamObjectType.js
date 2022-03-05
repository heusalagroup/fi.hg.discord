"use strict";
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyRequestParamObjectType = exports.parseRequestParamObjectType = exports.isRequestParamObjectType = exports.RequestParamObjectType = void 0;
var lodash_1 = require("../../modules/lodash");
var RequestParamObjectType;
(function (RequestParamObjectType) {
    RequestParamObjectType[RequestParamObjectType["REQUEST_BODY"] = 0] = "REQUEST_BODY";
    RequestParamObjectType[RequestParamObjectType["QUERY_PARAM"] = 1] = "QUERY_PARAM";
    RequestParamObjectType[RequestParamObjectType["REQUEST_HEADER"] = 2] = "REQUEST_HEADER";
    RequestParamObjectType[RequestParamObjectType["REQUEST_HEADER_MAP"] = 3] = "REQUEST_HEADER_MAP";
    RequestParamObjectType[RequestParamObjectType["PATH_VARIABLE"] = 4] = "PATH_VARIABLE";
    RequestParamObjectType[RequestParamObjectType["PATH_VARIABLE_MAP"] = 5] = "PATH_VARIABLE_MAP";
    RequestParamObjectType[RequestParamObjectType["MODEL_ATTRIBUTE"] = 6] = "MODEL_ATTRIBUTE";
})(RequestParamObjectType = exports.RequestParamObjectType || (exports.RequestParamObjectType = {}));
function isRequestParamObjectType(value) {
    if (!lodash_1.isNumber(value))
        return false;
    switch (value) {
        case RequestParamObjectType.REQUEST_BODY:
        case RequestParamObjectType.QUERY_PARAM:
        case RequestParamObjectType.REQUEST_HEADER:
        case RequestParamObjectType.REQUEST_HEADER_MAP:
        case RequestParamObjectType.PATH_VARIABLE:
        case RequestParamObjectType.PATH_VARIABLE_MAP:
        case RequestParamObjectType.MODEL_ATTRIBUTE:
            return true;
    }
    return false;
}
exports.isRequestParamObjectType = isRequestParamObjectType;
function parseRequestParamObjectType(value) {
    if (isRequestParamObjectType(value))
        return value;
    if (lodash_1.isString(value)) {
        var lowerCaseValue = value.toLowerCase();
        switch (lowerCaseValue) {
            case 'body': return RequestParamObjectType.REQUEST_BODY;
            case 'query_param': return RequestParamObjectType.QUERY_PARAM;
            case 'header': return RequestParamObjectType.REQUEST_HEADER;
            case 'header_map': return RequestParamObjectType.REQUEST_HEADER_MAP;
            case 'path_variable': return RequestParamObjectType.PATH_VARIABLE;
            case 'path_variable_map': return RequestParamObjectType.PATH_VARIABLE_MAP;
            case 'model_attribute': return RequestParamObjectType.MODEL_ATTRIBUTE;
        }
    }
    throw new TypeError("Value was not parsable to RequestParamObjectType: \"" + value + "\"");
}
exports.parseRequestParamObjectType = parseRequestParamObjectType;
function stringifyRequestParamObjectType(value) {
    switch (value) {
        case RequestParamObjectType.REQUEST_BODY: return 'body';
        case RequestParamObjectType.QUERY_PARAM: return 'query_param';
        case RequestParamObjectType.REQUEST_HEADER: return 'header';
        case RequestParamObjectType.REQUEST_HEADER_MAP: return 'header_map';
        case RequestParamObjectType.PATH_VARIABLE: return 'path_variable';
        case RequestParamObjectType.PATH_VARIABLE_MAP: return 'path_variable_map';
        case RequestParamObjectType.MODEL_ATTRIBUTE: return 'model_attribute';
    }
    throw new TypeError("Unsupported value: \"" + value + "\"");
}
exports.stringifyRequestParamObjectType = stringifyRequestParamObjectType;
exports.default = RequestParamObjectType;
