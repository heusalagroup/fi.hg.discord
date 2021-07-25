"use strict";
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequestMappingObject = void 0;
var RequestMethod_1 = require("./RequestMethod");
var RequestInterfaceUtils_1 = __importDefault(require("../RequestInterfaceUtils"));
var lodash_1 = require("../../modules/lodash");
function isRequestMappingObject(value) {
    return (RequestInterfaceUtils_1.default.isObject(value)
        && RequestInterfaceUtils_1.default.hasPropertyMethods(value) && lodash_1.isArray(value.methods) && lodash_1.every(value.methods, RequestMethod_1.isRequestMethod)
        && RequestInterfaceUtils_1.default.hasPropertyPaths(value) && lodash_1.isArray(value.paths) && lodash_1.every(value.paths, lodash_1.isString));
}
exports.isRequestMappingObject = isRequestMappingObject;
