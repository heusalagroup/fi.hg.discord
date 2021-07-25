"use strict";
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequestMappingArray = void 0;
var RequestMethod_1 = require("./RequestMethod");
var lodash_1 = require("../../modules/lodash");
function isRequestMappingArray(value) {
    return lodash_1.isArray(value) && lodash_1.every(value, function (item) { return lodash_1.isString(item) || RequestMethod_1.isRequestMethod(item); });
}
exports.isRequestMappingArray = isRequestMappingArray;
