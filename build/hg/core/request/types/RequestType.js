"use strict";
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRequestType = exports.isRequestType = exports.RequestType = void 0;
var lodash_1 = require("../../modules/lodash");
var RequestType;
(function (RequestType) {
    RequestType["ERROR"] = "error";
})(RequestType = exports.RequestType || (exports.RequestType = {}));
function isRequestType(value) {
    switch (value) {
        case RequestType.ERROR:
            return true;
        default: break;
    }
    return false;
}
exports.isRequestType = isRequestType;
function parseRequestType(value) {
    if (lodash_1.isString(value)) {
        value = value.toLowerCase();
        switch (value) {
            case 'error':
                return RequestType.ERROR;
            default: break;
        }
    }
    throw new TypeError("Unsupported value for RequestType: " + value);
}
exports.parseRequestType = parseRequestType;
exports.default = RequestType;
