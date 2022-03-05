"use strict";
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRequestMethod = exports.isRequestMethod = exports.stringifyRequestMethod = exports.RequestMethod = void 0;
var lodash_1 = require("../../modules/lodash");
var RequestMethod;
(function (RequestMethod) {
    RequestMethod[RequestMethod["OPTIONS"] = 0] = "OPTIONS";
    RequestMethod[RequestMethod["GET"] = 1] = "GET";
    RequestMethod[RequestMethod["POST"] = 2] = "POST";
    RequestMethod[RequestMethod["PUT"] = 3] = "PUT";
    RequestMethod[RequestMethod["DELETE"] = 4] = "DELETE";
    RequestMethod[RequestMethod["PATCH"] = 5] = "PATCH";
})(RequestMethod = exports.RequestMethod || (exports.RequestMethod = {}));
function stringifyRequestMethod(value) {
    if (lodash_1.isNumber(value)) {
        switch (value) {
            case RequestMethod.OPTIONS: return 'options';
            case RequestMethod.GET: return 'get';
            case RequestMethod.POST: return 'post';
            case RequestMethod.PUT: return 'put';
            case RequestMethod.DELETE: return 'delete';
            case RequestMethod.PATCH: return 'patch';
        }
    }
    throw new TypeError("Unsupported value for stringifyRequestMethod(): " + value);
}
exports.stringifyRequestMethod = stringifyRequestMethod;
function isRequestMethod(value) {
    return lodash_1.isNumber(value) && value >= 0 && value <= 5;
}
exports.isRequestMethod = isRequestMethod;
function parseRequestMethod(value) {
    if (isRequestMethod(value))
        return value;
    if (lodash_1.isString(value)) {
        value = value.toLowerCase();
        switch (value) {
            case 'options': return RequestMethod.OPTIONS;
            case 'get': return RequestMethod.GET;
            case 'post': return RequestMethod.POST;
            case 'put': return RequestMethod.PUT;
            case 'delete': return RequestMethod.DELETE;
            case 'patch': return RequestMethod.PATCH;
            default: break;
        }
    }
    throw new TypeError("Cannot parse value \"" + value + "\" as a valid RequestMethod");
}
exports.parseRequestMethod = parseRequestMethod;
exports.default = RequestMethod;
