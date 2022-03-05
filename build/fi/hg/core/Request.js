"use strict";
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestBody = exports.DeleteMapping = exports.PutMapping = exports.PostMapping = exports.GetMapping = exports.OptionsMapping = exports.ModelAttribute = exports.PathVariable = exports.RequestHeader = exports.RequestParam = exports.RequestMapping = exports.Request = void 0;
var RequestMethod_1 = __importDefault(require("./request/types/RequestMethod"));
var LogService_1 = __importDefault(require("./LogService"));
var RequestControllerUtils_1 = __importDefault(require("./request/RequestControllerUtils"));
var RequestParamValueType_1 = __importStar(require("./request/types/RequestParamValueType"));
var lodash_1 = require("./modules/lodash");
var RequestStatus_1 = __importDefault(require("./request/types/RequestStatus"));
var RequestType_1 = __importDefault(require("./request/types/RequestType"));
var RequestError_1 = __importStar(require("./request/types/RequestError"));
var Headers_1 = __importDefault(require("./request/Headers"));
var RequestHeaderListOptions_1 = require("./request/types/RequestHeaderListOptions");
var RequestHeaderOptions_1 = require("./request/types/RequestHeaderOptions");
var RequestPathVariableOptions_1 = require("./request/types/RequestPathVariableOptions");
var LOG = LogService_1.default.createLogger('Request');
// noinspection JSUnusedGlobalSymbols
var Request = /** @class */ (function () {
    function Request() {
    }
    Request.setLogLevel = function (level) {
        LOG.setLogLevel(level);
        Headers_1.default.setLogLevel(level);
        RequestControllerUtils_1.default.setLogLevel(level);
    };
    // @RequestMapping
    /**
     *
     * @param config
     */
    Request.mapping = function () {
        // LOG.debug('mapping: init: ', config);
        var config = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            config[_i] = arguments[_i];
        }
        return function (target, propertyKey, descriptor) {
            var requestController = RequestControllerUtils_1.default.findController(target);
            if (requestController !== undefined) {
                if (propertyKey === undefined) {
                    RequestControllerUtils_1.default.attachControllerMapping(requestController, config);
                }
                else {
                    RequestControllerUtils_1.default.attachControllerMethodMapping(requestController, config, propertyKey);
                }
            }
            else {
                LOG.debug(".mapping for other: config=", config, 'target=', target, 'propertyKey=', propertyKey, 'descriptor=', descriptor);
            }
        };
    };
    /**
     *
     * @param config
     * @deprecated Use @RequestMapping or @Request.mapping
     */
    Request.Mapping = function () {
        var config = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            config[_i] = arguments[_i];
        }
        return Request.mapping.apply(Request, config);
    };
    /**
     * The implementation
     *
     * @param arg1
     * @param arg2
     * @param arg3
     */
    Request.param = function (arg1, arg2, arg3) {
        if (lodash_1.isString(arg1) && (arg3 === undefined) && RequestParamValueType_1.isRequestParamValueTypeOrUndefined(arg2)) {
            var queryParam_1 = arg1;
            var paramType_1 = arg2 !== null && arg2 !== void 0 ? arg2 : RequestParamValueType_1.default.STRING;
            return function (target, propertyKey, paramIndex) {
                Request._param(target, propertyKey, paramIndex, queryParam_1, paramType_1);
            };
        }
        else {
            var target = arg1;
            var propertyKey = arg2;
            var paramIndex = arg3;
            var paramType = RequestParamValueType_1.default.STRING;
            // FIXME: We cannot get the name of the query parameter yet, so this will break later!
            var queryParam = "" + paramIndex;
            Request._param(target, propertyKey, paramIndex, queryParam, paramType);
        }
    };
    /**
     * The internal implementation
     *
     * @param target
     * @param propertyKey
     * @param paramIndex
     * @param queryParam
     * @param paramType
     * @private
     */
    Request._param = function (target, propertyKey, paramIndex, queryParam, paramType) {
        var requestController = Request._getRequestController(target, propertyKey, paramIndex);
        if (requestController !== undefined) {
            RequestControllerUtils_1.default.setControllerMethodQueryParam(requestController, propertyKey, paramIndex, queryParam, paramType);
        }
        else {
            LOG.warn('.Param: Unrecognized configuration: ', "; target=", target, "; propertyKey=", propertyKey, "; paramIndex=", paramIndex);
        }
    };
    Request._getRequestController = function (target, propertyKey, paramIndex) {
        if (lodash_1.isString(propertyKey) && lodash_1.isNumber(paramIndex)) {
            return RequestControllerUtils_1.default.findController(target);
        }
        else {
            return undefined;
        }
    };
    /**
     *
     * @param arg1
     * @param arg2
     * @param arg3
     * @deprecated Use @RequestParam or @Request.param
     */
    Request.Param = function (arg1, arg2, arg3) {
        // @ts-ignore
        return Request.param(arg1, arg2, arg3);
    };
    Request.header = function (arg1, arg2, arg3) {
        var _a, _b;
        LOG.debug('Request.Header: ', arg1, arg2, arg3);
        if (lodash_1.isString(arg2) && lodash_1.isNumber(arg3)) {
            Request._setMethodHeaderMap(arg1, arg2, arg3, undefined);
            return;
        }
        if (lodash_1.isString(arg1)) {
            var headerName_1 = arg1;
            if (!RequestHeaderOptions_1.isRequestHeaderOptionsOrUndefined(arg2)) {
                throw new TypeError("RequestHeader: Argument 2 is not type of RequestHeaderOptions: " + arg2);
            }
            var headerNameOpts = arg2;
            var isRequired_1 = undefined;
            var defaultValue_1 = undefined;
            if (headerNameOpts === undefined) {
            }
            else if (lodash_1.isBoolean(headerNameOpts)) {
                isRequired_1 = headerNameOpts;
            }
            else if (lodash_1.isObject(headerNameOpts)) {
                isRequired_1 = (_a = headerNameOpts === null || headerNameOpts === void 0 ? void 0 : headerNameOpts.required) !== null && _a !== void 0 ? _a : undefined;
                defaultValue_1 = (_b = headerNameOpts === null || headerNameOpts === void 0 ? void 0 : headerNameOpts.defaultValue) !== null && _b !== void 0 ? _b : undefined;
            }
            else {
                throw new TypeError('RequestHeader: Invalid type of options');
            }
            LOG.debug('.Header: init: ', headerName_1);
            return function (target, propertyKey, paramIndex) {
                if (lodash_1.isString(propertyKey) && lodash_1.isNumber(paramIndex)) {
                    var requestController = RequestControllerUtils_1.default.findController(target);
                    if (requestController !== undefined) {
                        RequestControllerUtils_1.default.setControllerMethodHeader(requestController, propertyKey, paramIndex, headerName_1, RequestParamValueType_1.default.STRING, isRequired_1, defaultValue_1);
                        return;
                    }
                }
                LOG.warn('.Header: Unrecognized configuration: ', "; target=", target, "; propertyKey=", propertyKey, "; paramIndex=", paramIndex);
            };
        }
        var opts = arg1;
        if (!(opts === undefined || RequestHeaderListOptions_1.isRequestHeaderListOptions(opts))) {
            throw new TypeError('RequestHeader: Invalid type of options');
        }
        var defaultValues = opts === null || opts === void 0 ? void 0 : opts.defaultValues;
        return function (target, propertyKey, paramIndex) {
            if (lodash_1.isString(propertyKey) && lodash_1.isNumber(paramIndex)) {
                Request._setMethodHeaderMap(target, propertyKey, paramIndex, defaultValues);
            }
            else {
                LOG.warn('.Header: Unrecognized configuration: ', "; target=", target, "; propertyKey=", propertyKey, "; paramIndex=", paramIndex);
            }
        };
    };
    /**
     * Private helper
     *
     * @param target
     * @param propertyKey
     * @param paramIndex
     * @param defaultValues
     * @private
     */
    Request._setMethodHeaderMap = function (target, propertyKey, paramIndex, defaultValues) {
        var requestController = RequestControllerUtils_1.default.findController(target);
        if (requestController !== undefined) {
            RequestControllerUtils_1.default.setControllerMethodHeaderMap(requestController, propertyKey, paramIndex, defaultValues);
        }
        else {
            LOG.warn('.Header: Unrecognized configuration: ', "; target=", target, "; propertyKey=", propertyKey, "; paramIndex=", paramIndex);
        }
    };
    /**
     * The implementation
     *
     * @param arg1
     * @param arg2
     * @param arg3
     * @deprecated Use @RequestHeader or @Request.header
     */
    Request.Header = function (arg1, arg2, arg3) {
        // @ts-ignore
        return Request.header(arg1, arg2, arg3);
    };
    /**
     * The implementation
     *
     * @param arg1
     * @param arg2
     * @param arg3
     */
    Request.pathVariable = function (arg1, arg2, arg3) {
        var _a, _b, _c, _d;
        LOG.debug('Request.PathVariable: ', arg1, arg2, arg3);
        if (lodash_1.isString(arg2) && lodash_1.isNumber(arg3)) {
            var target = arg1;
            var propertyKey = arg2;
            var paramIndex = arg3;
            Request._setPathVariableMap(target, propertyKey, paramIndex, undefined);
            return;
        }
        var variableName = arg1;
        if (lodash_1.isString(variableName)) {
            if (!RequestPathVariableOptions_1.isRequestPathVariableOptionsOrUndefined(arg2)) {
                throw new TypeError("RequestPathVariable: Argument 2 is not type of RequestPathVariableOptions: " + arg2);
            }
            var headerNameOpts = arg2;
            var isRequired_2 = undefined;
            var defaultValue_2 = undefined;
            var decodeValue_1 = true;
            if (headerNameOpts === undefined) {
            }
            else if (lodash_1.isBoolean(headerNameOpts)) {
                isRequired_2 = headerNameOpts;
            }
            else if (lodash_1.isObject(headerNameOpts)) {
                isRequired_2 = (_a = headerNameOpts === null || headerNameOpts === void 0 ? void 0 : headerNameOpts.required) !== null && _a !== void 0 ? _a : undefined;
                defaultValue_2 = (_b = headerNameOpts === null || headerNameOpts === void 0 ? void 0 : headerNameOpts.defaultValue) !== null && _b !== void 0 ? _b : undefined;
                decodeValue_1 = (_c = headerNameOpts === null || headerNameOpts === void 0 ? void 0 : headerNameOpts.decodeValue) !== null && _c !== void 0 ? _c : true;
            }
            else {
                throw new TypeError('RequestPathVariable: Invalid type of options');
            }
            LOG.debug('.PathVariable: init: ', variableName);
            return function (target, propertyKey, paramIndex) {
                if (lodash_1.isString(propertyKey) && lodash_1.isNumber(paramIndex)) {
                    var requestController = RequestControllerUtils_1.default.findController(target);
                    if (requestController !== undefined) {
                        RequestControllerUtils_1.default.setControllerMethodPathVariable(requestController, propertyKey, paramIndex, variableName, RequestParamValueType_1.default.STRING, isRequired_2, decodeValue_1, defaultValue_2);
                        return;
                    }
                }
                LOG.warn('.PathVariable: Unrecognized configuration: ', "; target=", target, "; propertyKey=", propertyKey, "; paramIndex=", paramIndex);
            };
        }
        var opts = variableName;
        if (opts === undefined || lodash_1.isObject(opts === null || opts === void 0 ? void 0 : opts.defaultValues)) {
        }
        else {
            throw new TypeError('RequestPathVariable: Invalid type of options');
        }
        var defaultValues = opts ? (_d = opts === null || opts === void 0 ? void 0 : opts.defaultValues) !== null && _d !== void 0 ? _d : undefined : undefined;
        return function (target, propertyKey, paramIndex) {
            if (lodash_1.isString(propertyKey) && lodash_1.isNumber(paramIndex)) {
                Request._setPathVariableMap(target, propertyKey, paramIndex, defaultValues);
            }
            else {
                LOG.warn('.PathVariable: Unrecognized configuration: ', "; target=", target, "; propertyKey=", propertyKey, "; paramIndex=", paramIndex);
            }
        };
    };
    Request._setPathVariableMap = function (target, propertyKey, paramIndex, defaultValues) {
        var requestController = RequestControllerUtils_1.default.findController(target);
        if (requestController !== undefined) {
            RequestControllerUtils_1.default.setControllerMethodPathVariableMap(requestController, propertyKey, paramIndex, defaultValues);
            return;
        }
        LOG.warn('.PathVariable: Unrecognized configuration: ', "; target=", target, "; propertyKey=", propertyKey, "; paramIndex=", paramIndex);
    };
    /**
     *
     * @param arg1
     * @param arg2
     * @param arg3
     * @deprecated Use @PathVariable or @Request.pathVariable
     */
    Request.PathVariable = function (arg1, arg2, arg3) {
        // @ts-ignore
        return Request.pathVariable(arg1, arg2, arg3);
    };
    // @ModelAttribute
    /**
     * The implementation
     *
     * @param attributeName
     */
    Request.modelAttribute = function (attributeName) {
        LOG.debug('Request.modelAttribute: ', attributeName);
        if (!lodash_1.isString(attributeName)) {
            throw new TypeError("Request.modelAttribute: Argument 1 is not string: " + attributeName);
        }
        // Return types:
        // - ParameterDecoratorFunction  = any | Function, string, PropertyDescriptor
        // - MethodDecoratorFunction     = any | Function, string, number
        return function (target, propertyKey, paramIndex) {
            if (lodash_1.isString(propertyKey)) {
                var requestController = RequestControllerUtils_1.default.findController(target);
                if (requestController !== undefined) {
                    if (lodash_1.isNumber(paramIndex)) {
                        RequestControllerUtils_1.default.setControllerMethodModelAttributeParam(requestController, propertyKey, paramIndex, attributeName, RequestParamValueType_1.default.JSON);
                        return;
                    }
                    else if (paramIndex !== undefined) {
                        RequestControllerUtils_1.default.attachControllerMethodModelAttributeBuilder(requestController, propertyKey, paramIndex, attributeName);
                        return;
                    }
                }
            }
            LOG.warn('.modelAttribute: Unrecognized configuration: ', "; target=", target, "; propertyKey=", propertyKey, "; paramIndex=", paramIndex);
        };
    };
    // @RequestBody
    Request.body = function (target, propertyKey, paramIndex) {
        var requestController = RequestControllerUtils_1.default.findController(target);
        if (requestController !== undefined && lodash_1.isString(propertyKey) && lodash_1.isNumber(paramIndex)) {
            RequestControllerUtils_1.default.setControllerMethodBodyParam(requestController, propertyKey, paramIndex, RequestParamValueType_1.default.JSON);
        }
        else {
            LOG.warn('.body: Unrecognized configuration: ', "; target=", target, "; propertyKey=", propertyKey, "; paramIndex=", paramIndex);
        }
    };
    /**
     * @param target
     * @param propertyKey
     * @param paramIndex
     * @deprecated Use @RequestBody or @Request.body
     */
    Request.Body = function (target, propertyKey, paramIndex) {
        return Request.body(target, propertyKey, paramIndex);
    };
    // @OptionsMapping / @Request.Options
    Request.optionsMapping = function () {
        var config = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            config[_i] = arguments[_i];
        }
        return Request.mapping.apply(Request, __spreadArray([Request.Method.OPTIONS], config));
    };
    // @GetMapping / @Request.Get
    Request.getMapping = function () {
        var config = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            config[_i] = arguments[_i];
        }
        return Request.mapping.apply(Request, __spreadArray([Request.Method.GET], config));
    };
    /**
     *
     * @param config
     * @deprecated Use @GetMapping or @Request.getMapping
     */
    Request.Get = function () {
        var config = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            config[_i] = arguments[_i];
        }
        return Request.getMapping.apply(Request, config);
    };
    // @PostMapping / @Request.Post
    Request.postMapping = function () {
        var config = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            config[_i] = arguments[_i];
        }
        return Request.mapping.apply(Request, __spreadArray([Request.Method.POST], config));
    };
    /**
     *
     * @param config
     * @deprecated Use @PostMapping or @Request.postMapping
     */
    Request.Post = function () {
        var config = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            config[_i] = arguments[_i];
        }
        return Request.postMapping.apply(Request, config);
    };
    // @DeleteMapping / @Request.Delete
    Request.deleteMapping = function () {
        var config = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            config[_i] = arguments[_i];
        }
        return Request.mapping.apply(Request, __spreadArray([Request.Method.DELETE], config));
    };
    /**
     *
     * @param config
     * @deprecated Use @DeleteMapping or @Request.deleteMapping
     */
    Request.Delete = function () {
        var config = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            config[_i] = arguments[_i];
        }
        return Request.deleteMapping.apply(Request, config);
    };
    // @PutMapping / @Request.Put
    Request.putMapping = function () {
        var config = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            config[_i] = arguments[_i];
        }
        return Request.mapping.apply(Request, __spreadArray([Request.Method.PUT], config));
    };
    /**
     *
     * @param config
     * @deprecated Use @PutMapping or @Request.putMapping
     */
    Request.Put = function () {
        var config = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            config[_i] = arguments[_i];
        }
        return Request.putMapping.apply(Request, config);
    };
    Request.createBadRequestError = function (message) {
        return RequestError_1.createRequestError(RequestStatus_1.default.BadRequest, message);
    };
    Request.createNotFoundRequestError = function (message) {
        return RequestError_1.createRequestError(RequestStatus_1.default.NotFound, message);
    };
    Request.createMethodNotAllowedRequestError = function (message) {
        return RequestError_1.createRequestError(RequestStatus_1.default.MethodNotAllowed, message);
    };
    Request.createConflictRequestError = function (message) {
        return RequestError_1.createRequestError(RequestStatus_1.default.Conflict, message);
    };
    Request.createInternalErrorRequestError = function (message) {
        return RequestError_1.createRequestError(RequestStatus_1.default.InternalServerError, message);
    };
    /**
     *
     * @param message
     * @throws
     */
    Request.throwBadRequestError = function (message) {
        throw Request.createBadRequestError(message);
    };
    /**
     *
     * @param message
     * @throws
     */
    Request.throwNotFoundRequestError = function (message) {
        throw Request.createNotFoundRequestError(message);
    };
    /**
     *
     * @param message
     * @throws
     */
    Request.throwMethodNotAllowedRequestError = function (message) {
        throw Request.createMethodNotAllowedRequestError(message);
    };
    /**
     *
     * @param message
     * @throws
     */
    Request.throwConflictRequestError = function (message) {
        throw Request.createConflictRequestError(message);
    };
    /**
     *
     * @param message
     * @throws
     */
    Request.throwInternalErrorRequestError = function (message) {
        throw Request.createInternalErrorRequestError(message);
    };
    Request.Method = RequestMethod_1.default;
    Request.Status = RequestStatus_1.default;
    Request.ParamType = RequestParamValueType_1.default;
    Request.Type = RequestType_1.default;
    Request.Error = RequestError_1.default;
    return Request;
}());
exports.Request = Request;
// noinspection JSUnusedGlobalSymbols
function RequestMapping() {
    var config = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        config[_i] = arguments[_i];
    }
    return Request.mapping.apply(Request, config);
}
exports.RequestMapping = RequestMapping;
// noinspection JSUnusedGlobalSymbols
function RequestParam(arg1, arg2, arg3) {
    // @ts-ignore
    return Request.param(arg1, arg2, arg3);
}
exports.RequestParam = RequestParam;
// noinspection JSUnusedGlobalSymbols
function RequestHeader(arg1, arg2, arg3) {
    LOG.debug('RequestHeader: ', arg1, arg2, arg3);
    // @ts-ignore
    return Request.header(arg1, arg2, arg3);
}
exports.RequestHeader = RequestHeader;
// noinspection JSUnusedGlobalSymbols
function PathVariable(arg1, arg2, arg3) {
    // @ts-ignore
    return Request.pathVariable(arg1, arg2, arg3);
}
exports.PathVariable = PathVariable;
// noinspection JSUnusedGlobalSymbols
function ModelAttribute(attributeName) {
    return Request.modelAttribute(attributeName);
}
exports.ModelAttribute = ModelAttribute;
// noinspection JSUnusedGlobalSymbols
function OptionsMapping() {
    var config = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        config[_i] = arguments[_i];
    }
    return Request.optionsMapping.apply(Request, config);
}
exports.OptionsMapping = OptionsMapping;
// noinspection JSUnusedGlobalSymbols
function GetMapping() {
    var config = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        config[_i] = arguments[_i];
    }
    return Request.getMapping.apply(Request, config);
}
exports.GetMapping = GetMapping;
// noinspection JSUnusedGlobalSymbols
function PostMapping() {
    var config = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        config[_i] = arguments[_i];
    }
    return Request.postMapping.apply(Request, config);
}
exports.PostMapping = PostMapping;
// noinspection JSUnusedGlobalSymbols
function PutMapping() {
    var config = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        config[_i] = arguments[_i];
    }
    return Request.putMapping.apply(Request, config);
}
exports.PutMapping = PutMapping;
// noinspection JSUnusedGlobalSymbols
function DeleteMapping() {
    var config = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        config[_i] = arguments[_i];
    }
    return Request.deleteMapping.apply(Request, config);
}
exports.DeleteMapping = DeleteMapping;
// noinspection JSUnusedGlobalSymbols
function RequestBody(target, propertyKey, paramIndex) {
    return Request.body(target, propertyKey, paramIndex);
}
exports.RequestBody = RequestBody;
exports.default = Request;
