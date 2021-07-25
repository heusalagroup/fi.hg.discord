"use strict";
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestControllerUtils = void 0;
var RequestController_1 = require("./types/RequestController");
var RequestMethod_1 = require("./types/RequestMethod");
var lodash_1 = require("../modules/lodash");
var RequestParamObjectType_1 = __importDefault(require("./types/RequestParamObjectType"));
var LogService_1 = __importDefault(require("../LogService"));
var LOG = LogService_1.default.createLogger('RequestControllerUtils');
var RequestControllerUtils = /** @class */ (function () {
    function RequestControllerUtils() {
    }
    RequestControllerUtils.parseRequestMappings = function (value) {
        return {
            methods: lodash_1.filter(value, RequestMethod_1.isRequestMethod),
            paths: lodash_1.filter(value, lodash_1.isString)
        };
    };
    RequestControllerUtils.attachControllerMapping = function (controller, config) {
        var parsedObject = RequestControllerUtils.parseRequestMappings(config);
        // LOG.debug('attachControllerMapping: controller = ', controller);
        // LOG.debug('attachControllerMapping: parsedObject = ', parsedObject);
        var origMapping = RequestController_1.getInternalRequestMappingObject(controller, controller);
        // LOG.debug('attachControllerMapping: origMapping = ', origMapping);
        if (origMapping === undefined) {
            RequestController_1.setInternalRequestMappingObject(controller, {
                mappings: [parsedObject],
                controllerProperties: {}
            });
        }
        else {
            RequestController_1.setInternalRequestMappingObject(controller, __assign(__assign({}, origMapping), { mappings: lodash_1.concat([], origMapping.mappings, [parsedObject]) }));
        }
    };
    RequestControllerUtils.attachControllerMethodMapping = function (controller, config, propertyKey) {
        var _a, _b, _c;
        var origMapping = RequestController_1.getInternalRequestMappingObject(controller, controller);
        var parsedObject = RequestControllerUtils.parseRequestMappings(config);
        if (origMapping === undefined) {
            RequestController_1.setInternalRequestMappingObject(controller, {
                mappings: [],
                controllerProperties: (_a = {},
                    _a[propertyKey] = {
                        mappings: [parsedObject],
                        params: [],
                        modelAttributes: []
                    },
                    _a)
            });
        }
        else if (!lodash_1.has(origMapping.controllerProperties, propertyKey)) {
            RequestController_1.setInternalRequestMappingObject(controller, __assign(__assign({}, origMapping), { controllerProperties: __assign(__assign({}, origMapping.controllerProperties), (_b = {}, _b[propertyKey] = {
                    mappings: [parsedObject],
                    params: [],
                    modelAttributes: []
                }, _b)) }));
        }
        else {
            RequestController_1.setInternalRequestMappingObject(controller, __assign(__assign({}, origMapping), { controllerProperties: __assign(__assign({}, origMapping.controllerProperties), (_c = {}, _c[propertyKey] = __assign(__assign({}, origMapping.controllerProperties[propertyKey]), { mappings: lodash_1.concat([parsedObject], origMapping.controllerProperties[propertyKey].mappings) }), _c)) }));
        }
    };
    RequestControllerUtils._setControllerMethodParam = function (controller, propertyKey, paramIndex, newParam, requestBodyRequired) {
        var _a, _b, _c, _d, _e, _f;
        if (requestBodyRequired === void 0) { requestBodyRequired = false; }
        var origMapping = RequestController_1.getInternalRequestMappingObject(controller, controller);
        if (origMapping === undefined) {
            var params = RequestControllerUtils._initializeParams(paramIndex, newParam);
            if (requestBodyRequired) {
                RequestController_1.setInternalRequestMappingObject(controller, {
                    mappings: [],
                    controllerProperties: (_a = {},
                        _a[propertyKey] = {
                            requestBodyRequired: true,
                            mappings: [],
                            modelAttributes: [],
                            params: params
                        },
                        _a)
                });
            }
            else {
                RequestController_1.setInternalRequestMappingObject(controller, {
                    mappings: [],
                    controllerProperties: (_b = {},
                        _b[propertyKey] = {
                            mappings: [],
                            modelAttributes: [],
                            params: params
                        },
                        _b)
                });
            }
        }
        else if (!lodash_1.has(origMapping.controllerProperties, propertyKey)) {
            var params = RequestControllerUtils._initializeParams(paramIndex, newParam);
            if (requestBodyRequired) {
                RequestController_1.setInternalRequestMappingObject(controller, __assign(__assign({}, origMapping), { controllerProperties: __assign(__assign({}, origMapping.controllerProperties), (_c = {}, _c[propertyKey] = {
                        requestBodyRequired: true,
                        modelAttributes: [],
                        mappings: [],
                        params: params
                    }, _c)) }));
            }
            else {
                RequestController_1.setInternalRequestMappingObject(controller, __assign(__assign({}, origMapping), { controllerProperties: __assign(__assign({}, origMapping.controllerProperties), (_d = {}, _d[propertyKey] = {
                        mappings: [],
                        modelAttributes: [],
                        params: params
                    }, _d)) }));
            }
        }
        else {
            var params = RequestControllerUtils._reinitializeParams(origMapping, propertyKey, paramIndex, newParam);
            if (requestBodyRequired) {
                RequestController_1.setInternalRequestMappingObject(controller, __assign(__assign({}, origMapping), { controllerProperties: __assign(__assign({}, origMapping.controllerProperties), (_e = {}, _e[propertyKey] = __assign(__assign({}, origMapping.controllerProperties[propertyKey]), { requestBodyRequired: true, params: params }), _e)) }));
            }
            else {
                RequestController_1.setInternalRequestMappingObject(controller, __assign(__assign({}, origMapping), { controllerProperties: __assign(__assign({}, origMapping.controllerProperties), (_f = {}, _f[propertyKey] = __assign(__assign({}, origMapping.controllerProperties[propertyKey]), { params: params }), _f)) }));
            }
        }
    };
    RequestControllerUtils.findController = function (target) {
        if (lodash_1.isFunction(target) && RequestController_1.isRequestController(target)) {
            return target;
        }
        if (lodash_1.isObject(target) && lodash_1.isFunction(target === null || target === void 0 ? void 0 : target.constructor) && RequestController_1.isRequestController(target.constructor)) {
            return target.constructor;
        }
        return undefined;
    };
    RequestControllerUtils.setControllerMethodModelAttributeParam = function (controller, propertyKey, paramIndex, attributeName, paramType) {
        LOG.debug('setControllerMethodModelAttributeParam: attributeName =', attributeName, paramType);
        var newParam = {
            objectType: RequestParamObjectType_1.default.MODEL_ATTRIBUTE,
            attributeName: attributeName,
            valueType: paramType
        };
        RequestControllerUtils._setControllerMethodParam(controller, propertyKey, paramIndex, newParam);
    };
    RequestControllerUtils.attachControllerMethodModelAttributeBuilder = function (controller, propertyKey, propertyDescriptor, attributeName) {
        var _a, _b, _c;
        LOG.debug('attachControllerMethodModelAttributeBuilder: attributeName =', attributeName, propertyKey);
        var origMapping = RequestController_1.getInternalRequestMappingObject(controller, controller);
        if (origMapping === undefined) {
            RequestController_1.setInternalRequestMappingObject(controller, {
                mappings: [],
                controllerProperties: (_a = {},
                    _a[propertyKey] = {
                        mappings: [],
                        params: [],
                        modelAttributes: [attributeName]
                    },
                    _a)
            });
        }
        else if (!lodash_1.has(origMapping.controllerProperties, propertyKey)) {
            RequestController_1.setInternalRequestMappingObject(controller, __assign(__assign({}, origMapping), { controllerProperties: __assign(__assign({}, origMapping.controllerProperties), (_b = {}, _b[propertyKey] = {
                    mappings: [],
                    params: [],
                    modelAttributes: [attributeName]
                }, _b)) }));
        }
        else {
            RequestController_1.setInternalRequestMappingObject(controller, __assign(__assign({}, origMapping), { controllerProperties: __assign(__assign({}, origMapping.controllerProperties), (_c = {}, _c[propertyKey] = __assign(__assign({}, origMapping.controllerProperties[propertyKey]), { modelAttributes: lodash_1.concat([attributeName], origMapping.controllerProperties[propertyKey].modelAttributes) }), _c)) }));
        }
    };
    RequestControllerUtils.setControllerMethodQueryParam = function (controller, propertyKey, paramIndex, queryParam, paramType) {
        // LOG.debug('setControllerMethodQueryParam: queryParam =', queryParam, paramType);
        var newParam = {
            objectType: RequestParamObjectType_1.default.QUERY_PARAM,
            queryParam: queryParam,
            valueType: paramType
        };
        RequestControllerUtils._setControllerMethodParam(controller, propertyKey, paramIndex, newParam);
    };
    RequestControllerUtils.setControllerMethodHeader = function (controller, propertyKey, paramIndex, headerName, paramType, isRequired, defaultValue) {
        var newParam = {
            objectType: RequestParamObjectType_1.default.REQUEST_HEADER,
            headerName: headerName,
            valueType: paramType,
            isRequired: isRequired !== null && isRequired !== void 0 ? isRequired : false,
            defaultValue: defaultValue
        };
        RequestControllerUtils._setControllerMethodParam(controller, propertyKey, paramIndex, newParam);
    };
    RequestControllerUtils.setControllerMethodPathVariable = function (controller, propertyKey, paramIndex, variableName, paramType, isRequired, defaultValue) {
        var newParam = {
            objectType: RequestParamObjectType_1.default.PATH_VARIABLE,
            variableName: variableName,
            valueType: paramType,
            isRequired: isRequired !== null && isRequired !== void 0 ? isRequired : true,
            defaultValue: defaultValue
        };
        RequestControllerUtils._setControllerMethodParam(controller, propertyKey, paramIndex, newParam);
    };
    RequestControllerUtils.setControllerMethodPathVariableMap = function (controller, propertyKey, paramIndex, defaultValues) {
        var newParam = {
            objectType: RequestParamObjectType_1.default.PATH_VARIABLE_MAP,
            defaultValues: defaultValues
        };
        RequestControllerUtils._setControllerMethodParam(controller, propertyKey, paramIndex, newParam);
    };
    RequestControllerUtils.setControllerMethodHeaderMap = function (controller, propertyKey, paramIndex, defaultValues) {
        var newParam = {
            objectType: RequestParamObjectType_1.default.REQUEST_HEADER_MAP,
            defaultValues: defaultValues
        };
        RequestControllerUtils._setControllerMethodParam(controller, propertyKey, paramIndex, newParam);
    };
    RequestControllerUtils.setControllerMethodBodyParam = function (controller, propertyKey, paramIndex, paramType) {
        var newParam = {
            objectType: RequestParamObjectType_1.default.REQUEST_BODY,
            valueType: paramType
        };
        RequestControllerUtils._setControllerMethodParam(controller, propertyKey, paramIndex, newParam, true);
    };
    RequestControllerUtils._initializeParams = function (paramIndex, newParam) {
        var params = [];
        while (paramIndex >= params.length) {
            params.push(null);
        }
        params[paramIndex] = newParam;
        return params;
    };
    RequestControllerUtils._reinitializeParams = function (origMapping, propertyKey, paramIndex, newParam) {
        var params = lodash_1.concat([], origMapping.controllerProperties[propertyKey].params);
        while (paramIndex >= params.length) {
            params.push(null);
        }
        params[paramIndex] = newParam;
        return params;
    };
    return RequestControllerUtils;
}());
exports.RequestControllerUtils = RequestControllerUtils;
exports.default = RequestControllerUtils;
