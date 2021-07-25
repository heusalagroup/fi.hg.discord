"use strict";
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequestParamObject = void 0;
var RequestQueryParamObject_1 = require("./RequestQueryParamObject");
var RequestBodyParamObject_1 = require("./RequestBodyParamObject");
var RequestHeaderParamObject_1 = require("./RequestHeaderParamObject");
var RequestHeaderMapParamObject_1 = require("./RequestHeaderMapParamObject");
var RequestPathVariableParamObject_1 = require("./RequestPathVariableParamObject");
var RequestPathVariableMapParamObject_1 = require("./RequestPathVariableMapParamObject");
var RequestModelAttributeParamObject_1 = require("./RequestModelAttributeParamObject");
function isRequestParamObject(value) {
    return (RequestQueryParamObject_1.isRequestQueryParamObject(value)
        || RequestBodyParamObject_1.isRequestBodyParamObject(value)
        || RequestHeaderParamObject_1.isRequestHeaderParamObject(value)
        || RequestHeaderMapParamObject_1.isRequestHeaderMapParamObject(value)
        || RequestPathVariableParamObject_1.isRequestPathVariableParamObject(value)
        || RequestPathVariableMapParamObject_1.isRequestPathVariableMapParamObject(value)
        || RequestModelAttributeParamObject_1.isRequestModelAttributeParamObject(value));
}
exports.isRequestParamObject = isRequestParamObject;
