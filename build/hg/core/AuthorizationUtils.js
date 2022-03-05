"use strict";
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationUtils = void 0;
var lodash_1 = require("./modules/lodash");
var AuthorizationUtils = /** @class */ (function () {
    function AuthorizationUtils() {
    }
    AuthorizationUtils.parseBearerToken = function (header) {
        var BearerPrefix = 'Bearer ';
        if (!lodash_1.startsWith(header, BearerPrefix)) {
            return undefined;
        }
        return lodash_1.trim(header.substr(BearerPrefix.length));
    };
    return AuthorizationUtils;
}());
exports.AuthorizationUtils = AuthorizationUtils;
exports.default = AuthorizationUtils;
