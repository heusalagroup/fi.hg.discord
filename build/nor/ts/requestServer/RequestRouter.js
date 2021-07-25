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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestRouter = void 0;
var url_1 = __importDefault(require("url"));
var RequestController_1 = require("../request/types/RequestController");
var RequestMethod_1 = require("../request/types/RequestMethod");
var lodash_1 = require("../modules/lodash");
var RequestStatus_1 = require("../request/types/RequestStatus");
var RequestParamValueType_1 = __importDefault(require("../request/types/RequestParamValueType"));
var LogService_1 = __importDefault(require("../LogService"));
var Json_1 = require("../Json");
var ResponseEntity_1 = __importStar(require("../request/ResponseEntity"));
var RequestError_1 = __importStar(require("../request/types/RequestError"));
var RequestParamObjectType_1 = __importDefault(require("../request/types/RequestParamObjectType"));
var Headers_1 = __importDefault(require("../request/Headers"));
var RouteUtils_1 = __importDefault(require("./RouteUtils"));
var LOG = LogService_1.default.createLogger('RequestRouter');
var RequestRouter = /** @class */ (function () {
    function RequestRouter() {
        this._controllers = [];
        this._routes = undefined;
        this._requestMappings = undefined;
        this._modelAttributeNames = undefined;
        this._initialized = false;
    }
    RequestRouter.prototype.attachController = function (controller) {
        this._controllers.push(controller);
        this._routes = undefined;
    };
    RequestRouter.prototype._initializeRequestMappings = function () {
        LOG.debug('Initializing request mappings.');
        if (!this._requestMappings) {
            this._requestMappings = this._getRequestMappings();
        }
    };
    RequestRouter.prototype._initializeRouter = function () {
        if (!this._initialized) {
            this._initialized = true;
            LOG.debug('Initializing...');
            this._initializeRequestMappings();
            this._initializeRoutes();
            this._initializeRequiredModelAttributeNames();
        }
    };
    RequestRouter.prototype._initializeRoutes = function () {
        var _a;
        LOG.debug('Initializing routes.');
        if ((_a = this._requestMappings) === null || _a === void 0 ? void 0 : _a.length) {
            this._routes = RouteUtils_1.default.createRoutes(RequestRouter._parseMappingObject(this._requestMappings));
        }
        else {
            this._routes = RouteUtils_1.default.createRoutes({});
        }
    };
    RequestRouter.prototype._initializeRequiredModelAttributeNames = function () {
        var _a;
        LOG.debug('Initializing model attributes.');
        var values = [];
        if ((_a = this._requestMappings) === null || _a === void 0 ? void 0 : _a.length) {
            values = lodash_1.reduce(this._requestMappings, function (arr, item) {
                var controller = item.controller;
                var controllerUniqueAttributeNames = lodash_1.reduce(lodash_1.keys(item.controllerProperties), function (arr2, propertyKey) {
                    LOG.debug('_initializeRequiredModelAttributeNames: propertyKey: ', propertyKey);
                    var propertyValue = item.controllerProperties[propertyKey];
                    var propertyAttributeNames = propertyValue.modelAttributes;
                    LOG.debug('_initializeRequiredModelAttributeNames: propertyAttributeNames: ', propertyAttributeNames);
                    var params = propertyValue.params;
                    lodash_1.forEach(propertyAttributeNames, function (attributeName) {
                        LOG.debug('_initializeRequiredModelAttributeNames: attributeName: ', attributeName);
                        if (lodash_1.find(arr2, function (i) { return i[0] === attributeName; }) === undefined) {
                            arr2.push([attributeName, propertyKey, params]);
                        }
                    });
                    return arr2;
                }, []);
                LOG.debug('controllerUniqueAttributeNames: ', controllerUniqueAttributeNames);
                values.push([controller, controllerUniqueAttributeNames]);
                return arr;
            }, values);
        }
        this._modelAttributeNames = new Map(values);
    };
    RequestRouter.prototype.handleRequest = function (methodString, urlString, parseRequestBody, requestHeaders) {
        var _a;
        if (urlString === void 0) { urlString = undefined; }
        if (parseRequestBody === void 0) { parseRequestBody = undefined; }
        return __awaiter(this, void 0, void 0, function () {
            var method, _b, pathName, queryParams, requestPathName, requestQueryParams_1, _c, routes, bodyRequired, pathVariables_1, responseEntity_1, requestBody_1, _d, requestModelAttributes_1, err_1, status_1;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 5, , 6]);
                        method = RequestMethod_1.parseRequestMethod(methodString);
                        _b = RequestRouter._parseRequestPath(urlString), pathName = _b.pathName, queryParams = _b.queryParams;
                        requestPathName = pathName;
                        requestQueryParams_1 = queryParams;
                        // LOG.debug('requestQueryParams: ', requestQueryParams);
                        if (requestQueryParams_1 === undefined) {
                            LOG.error('handleRequest: requestQueryParams was not initialized');
                            return [2 /*return*/, ResponseEntity_1.default.internalServerError().body({
                                    error: 'Internal Server Error'
                                })];
                        }
                        if (requestPathName === undefined) {
                            LOG.error('handleRequest: requestPathName was not initialized');
                            return [2 /*return*/, ResponseEntity_1.default.internalServerError().body({
                                    error: 'Internal Server Error'
                                })];
                        }
                        if (!this._initialized) {
                            this._initializeRouter();
                        }
                        _c = this._getRequestRoutesContext(method, requestPathName), routes = _c.routes, bodyRequired = _c.bodyRequired, pathVariables_1 = _c.pathVariables;
                        if (!parseRequestBody && bodyRequired) {
                            LOG.error('handleRequest: parseRequestBody was not provided and body is required');
                            return [2 /*return*/, ResponseEntity_1.default.internalServerError().body({
                                    error: 'Internal Server Error'
                                })];
                        }
                        // LOG.debug('routes: ', routes);
                        if (routes === undefined) {
                            return [2 /*return*/, ResponseEntity_1.default.methodNotAllowed().body({
                                    error: 'Method Not Allowed'
                                })];
                        }
                        if (routes.length === 0) {
                            return [2 /*return*/, ResponseEntity_1.default.notFound().body({
                                    error: 'Not Found'
                                })];
                        }
                        responseEntity_1 = undefined;
                        if (!(parseRequestBody && bodyRequired)) return [3 /*break*/, 2];
                        return [4 /*yield*/, parseRequestBody()];
                    case 1:
                        _d = _e.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _d = undefined;
                        _e.label = 3;
                    case 3:
                        requestBody_1 = _d;
                        requestModelAttributes_1 = new Map();
                        // Handle requests using controllers
                        return [4 /*yield*/, lodash_1.reduce(routes, function (previousPromise, route) { return __awaiter(_this, void 0, void 0, function () {
                                var routeController, routePropertyName, routePropertyParams, modelAttributeValues_1, attributeNamePairs, stepParams, stepResult;
                                var _this = this;
                                var _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            routeController = route.controller;
                                            routePropertyName = route.propertyName;
                                            routePropertyParams = route.propertyParams;
                                            return [4 /*yield*/, previousPromise];
                                        case 1:
                                            _c.sent();
                                            if (!(!requestModelAttributes_1.has(routeController) && this._modelAttributeNames && this._modelAttributeNames.has(routeController))) return [3 /*break*/, 3];
                                            LOG.debug('Populating attributes');
                                            modelAttributeValues_1 = new Map();
                                            requestModelAttributes_1.set(routeController, modelAttributeValues_1);
                                            attributeNamePairs = (_a = this._modelAttributeNames.get(routeController)) !== null && _a !== void 0 ? _a : [];
                                            LOG.debug('attributeNamePairs: ', attributeNamePairs);
                                            return [4 /*yield*/, lodash_1.reduce(attributeNamePairs, function (p, pair) { return __awaiter(_this, void 0, void 0, function () {
                                                    var attributeName, propertyName, propertyParams, stepParams, stepResult;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                attributeName = pair[0], propertyName = pair[1], propertyParams = pair[2];
                                                                return [4 /*yield*/, p];
                                                            case 1:
                                                                _a.sent();
                                                                LOG.debug('attributeName: ', attributeName);
                                                                LOG.debug('propertyName: ', propertyName);
                                                                LOG.debug('propertyParams: ', propertyParams);
                                                                stepParams = RequestRouter._bindRequestActionParams(requestQueryParams_1, requestBody_1, propertyParams, requestHeaders, pathVariables_1, modelAttributeValues_1);
                                                                return [4 /*yield*/, routeController[propertyName].apply(routeController, stepParams)];
                                                            case 2:
                                                                stepResult = _a.sent();
                                                                modelAttributeValues_1.set(attributeName, stepResult);
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); }, Promise.resolve())];
                                        case 2:
                                            _c.sent();
                                            _c.label = 3;
                                        case 3:
                                            stepParams = RequestRouter._bindRequestActionParams(requestQueryParams_1, requestBody_1, routePropertyParams, requestHeaders, pathVariables_1, (_b = requestModelAttributes_1.get(routeController)) !== null && _b !== void 0 ? _b : new Map());
                                            return [4 /*yield*/, routeController[routePropertyName].apply(routeController, stepParams)];
                                        case 4:
                                            stepResult = _c.sent();
                                            if (RequestStatus_1.isRequestStatus(stepResult)) {
                                                responseEntity_1 = new ResponseEntity_1.default(stepResult);
                                            }
                                            else if (RequestError_1.isRequestError(stepResult)) {
                                                responseEntity_1 = new ResponseEntity_1.default(stepResult.toJSON(), stepResult.getStatusCode());
                                            }
                                            else if (ResponseEntity_1.isResponseEntity(stepResult)) {
                                                // FIXME: What if we already have stepResult??
                                                if (responseEntity_1 !== undefined) {
                                                    LOG.warn('Warning! ResponseEntity from previous call ignored.');
                                                }
                                                responseEntity_1 = stepResult;
                                            }
                                            else if (Json_1.isReadonlyJsonArray(stepResult)) {
                                                if (responseEntity_1 === undefined) {
                                                    responseEntity_1 = ResponseEntity_1.default.ok(stepResult);
                                                }
                                                else {
                                                    responseEntity_1 = new ResponseEntity_1.default(lodash_1.concat(responseEntity_1.getBody(), stepResult), responseEntity_1.getHeaders(), responseEntity_1.getStatusCode());
                                                }
                                            }
                                            else if (Json_1.isReadonlyJsonObject(stepResult)) {
                                                if (responseEntity_1 === undefined) {
                                                    responseEntity_1 = ResponseEntity_1.default.ok(stepResult);
                                                }
                                                else {
                                                    responseEntity_1 = new ResponseEntity_1.default(__assign(__assign({}, responseEntity_1.getBody()), stepResult), responseEntity_1.getHeaders(), responseEntity_1.getStatusCode());
                                                }
                                            }
                                            else if (Json_1.isReadonlyJsonAny(stepResult)) {
                                                if (responseEntity_1 === undefined) {
                                                    responseEntity_1 = ResponseEntity_1.default.ok(stepResult);
                                                }
                                                else {
                                                    LOG.warn('Warning! ResponseEntity from previous call ignored.');
                                                    responseEntity_1 = new ResponseEntity_1.default(stepResult, responseEntity_1.getHeaders(), responseEntity_1.getStatusCode());
                                                }
                                            }
                                            else {
                                                if (responseEntity_1 === undefined) {
                                                    responseEntity_1 = ResponseEntity_1.default.ok(stepResult);
                                                }
                                                else {
                                                    LOG.warn('Warning! ResponseEntity from previous call ignored.');
                                                    responseEntity_1 = new ResponseEntity_1.default(stepResult, responseEntity_1.getHeaders(), responseEntity_1.getStatusCode());
                                                }
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, Promise.resolve())];
                    case 4:
                        // Handle requests using controllers
                        _e.sent();
                        LOG.debug('handleRequest: result finished: ' + responseEntity_1);
                        // This never happens really, since 'routes' will always have more than one item at this point.
                        if (responseEntity_1 === undefined) {
                            return [2 /*return*/, ResponseEntity_1.default.noContent()];
                        }
                        return [2 /*return*/, responseEntity_1];
                    case 5:
                        err_1 = _e.sent();
                        if (RequestError_1.isRequestError(err_1)) {
                            status_1 = (_a = err_1 === null || err_1 === void 0 ? void 0 : err_1.status) !== null && _a !== void 0 ? _a : 0;
                            if (status_1 === 404) {
                                return [2 /*return*/, ResponseEntity_1.default.notFound().body(err_1.toJSON())];
                            }
                            if (status_1 >= 400 && status_1 < 500) {
                                return [2 /*return*/, ResponseEntity_1.default.badRequest().status(status_1).body(err_1.toJSON())];
                            }
                            return [2 /*return*/, ResponseEntity_1.default.internalServerError().status(status_1).body(err_1.toJSON())];
                        }
                        LOG.error('Exception: ', err_1);
                        return [2 /*return*/, ResponseEntity_1.default.internalServerError().body({
                                error: 'Internal Server Error',
                                code: 500
                            })];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    RequestRouter._parseRequestPath = function (urlString) {
        var urlForParser = "http://localhost" + (urlString !== null && urlString !== void 0 ? urlString : '');
        var parsedUrl = new url_1.default.URL(urlForParser);
        // LOG.debug('parsedUrl: ', parsedUrl);
        var pathName = parsedUrl.pathname;
        var queryParams = parsedUrl.searchParams;
        return {
            pathName: pathName,
            queryParams: queryParams
        };
    };
    RequestRouter.prototype._getRequestRoutesContext = function (method, requestPathName) {
        if (!this._routes || !this._routes.hasRoute(requestPathName)) {
            return {
                routes: [],
                bodyRequired: false
            };
        }
        // LOG.debug('_getRequestRoutesContext: requestPathName: ', requestPathName);
        // LOG.debug('_getRequestRoutesContext: method: ', method);
        var _a = this._routes.getRoute(requestPathName), routes = _a[0], pathVariables = _a[1];
        routes = lodash_1.filter(routes, function (item) {
            return item.methods.indexOf(method) >= 0;
        });
        // LOG.debug('_getRequestRoutesContext: routes: ', routes);
        if (!routes.length) {
            // There were matching routes, but not for this method; Method not allowed.
            return {
                routes: undefined,
                bodyRequired: false
            };
        }
        var requestBodyRequired = lodash_1.some(routes, function (item) { return (item === null || item === void 0 ? void 0 : item.requestBodyRequired) === true; });
        return {
            routes: routes,
            pathVariables: pathVariables,
            bodyRequired: requestBodyRequired
        };
    };
    RequestRouter.prototype._getRequestMappings = function () {
        if (this._controllers.length === 0) {
            return [];
        }
        return lodash_1.filter(lodash_1.map(this._controllers, function (controller) {
            // @ts-ignore
            if (RequestController_1.hasInternalRequestMappingObject(controller.constructor)) {
                // @ts-ignore
                return RequestController_1.getInternalRequestMappingObject(controller.constructor, controller);
            }
            return RequestController_1.getInternalRequestMappingObject(controller, controller);
        }), function (item) { return !!item; });
    };
    RequestRouter._parseMappingObject = function (requestMappings) {
        var routeMappingResult = {};
        function setRouteMappingResult(path, mapping) {
            if (!lodash_1.has(routeMappingResult, path)) {
                routeMappingResult[path] = [mapping];
                return;
            }
            routeMappingResult[path].push(mapping);
        }
        lodash_1.forEach(requestMappings, function (rootItem) {
            var controller = rootItem.controller;
            var controllerProperties = rootItem.controllerProperties;
            var controllerPropertyNames = lodash_1.keys(controllerProperties);
            if (rootItem.mappings.length > 0) {
                // Controller has root mappings
                lodash_1.forEach(rootItem.mappings, function (rootMappingItem) {
                    var rootMethods = rootMappingItem.methods;
                    lodash_1.forEach(rootMappingItem.paths, function (rootPath) {
                        lodash_1.forEach(controllerPropertyNames, function (propertyKey) {
                            var propertyValue = controllerProperties[propertyKey];
                            var propertyParams = propertyValue.params;
                            lodash_1.forEach(propertyValue.mappings, function (propertyMappingItem) {
                                // Filters away any property routes which do not have common methods
                                var propertyMethods = propertyMappingItem.methods;
                                if (!RequestRouter._matchMethods(rootMethods, propertyMethods)) {
                                    return;
                                }
                                var propertyMethodsCommonWithRoot = RequestRouter._parseCommonMethods(rootMethods, propertyMethods);
                                var propertyPaths = propertyMappingItem.paths;
                                lodash_1.forEach(propertyPaths, function (propertyPath) {
                                    var _a;
                                    var fullPropertyPath = RequestRouter._joinRoutePaths(rootPath, propertyPath);
                                    setRouteMappingResult(fullPropertyPath, {
                                        requestBodyRequired: (_a = propertyValue === null || propertyValue === void 0 ? void 0 : propertyValue.requestBodyRequired) !== null && _a !== void 0 ? _a : false,
                                        methods: propertyMethodsCommonWithRoot,
                                        controller: controller,
                                        propertyName: propertyKey,
                                        propertyParams: propertyParams
                                    });
                                });
                            });
                        });
                    });
                });
            }
            else {
                // We don't have parent controller mappings, so expect method mappings to be global.
                lodash_1.forEach(controllerPropertyNames, function (propertyKey) {
                    var propertyValue = controllerProperties[propertyKey];
                    var propertyParams = propertyValue.params;
                    lodash_1.forEach(propertyValue.mappings, function (propertyMappingItem) {
                        var propertyMethods = propertyMappingItem.methods;
                        var propertyPaths = propertyMappingItem.paths;
                        lodash_1.forEach(propertyPaths, function (propertyPath) {
                            var _a;
                            setRouteMappingResult(propertyPath, {
                                requestBodyRequired: (_a = propertyValue === null || propertyValue === void 0 ? void 0 : propertyValue.requestBodyRequired) !== null && _a !== void 0 ? _a : false,
                                methods: propertyMethods,
                                controller: controller,
                                propertyName: propertyKey,
                                propertyParams: propertyParams
                            });
                        });
                    });
                });
            }
        });
        return routeMappingResult;
    };
    RequestRouter._matchMethods = function (rootMethods, propertyMethods) {
        if (rootMethods.length === 0)
            return true;
        if (propertyMethods.length == 0)
            return true;
        return lodash_1.some(rootMethods, function (rootMethod) {
            return lodash_1.some(propertyMethods, function (propertyMethod) {
                return rootMethod === propertyMethod;
            });
        });
    };
    RequestRouter._parseCommonMethods = function (rootMethods, propertyMethods) {
        return (rootMethods.length !== 0
            ? lodash_1.filter(propertyMethods, function (propertyMethod) {
                return lodash_1.some(rootMethods, function (rootMethod) {
                    return rootMethod === propertyMethod;
                });
            })
            : propertyMethods);
    };
    RequestRouter._joinRoutePaths = function (a, b) {
        a = lodash_1.trim(a);
        b = lodash_1.trim(lodash_1.trim(b), "/");
        if (b.length === 0)
            return a;
        if (a.length === 0)
            return b;
        if (a[a.length - 1] === '/' || b[0] === '/') {
            return a + b;
        }
        return a + '/' + b;
    };
    RequestRouter._bindRequestActionParams = function (searchParams, requestBody, params, requestHeaders, pathVariables, modelAttributes) {
        return lodash_1.map(params, function (item) {
            var _a, _b;
            if (item === null) {
                return undefined;
            }
            var objectType = item === null || item === void 0 ? void 0 : item.objectType;
            switch (objectType) {
                case RequestParamObjectType_1.default.REQUEST_BODY:
                    return requestBody;
                case RequestParamObjectType_1.default.QUERY_PARAM: {
                    var queryParamItem = item;
                    var key = queryParamItem.queryParam;
                    if (!searchParams.has(key))
                        return undefined;
                    var value = searchParams.get(key);
                    if (lodash_1.isNull(value))
                        return undefined;
                    return RequestRouter._castParam(value, queryParamItem.valueType);
                }
                case RequestParamObjectType_1.default.REQUEST_HEADER: {
                    var headerItem = item;
                    var headerName = headerItem.headerName;
                    if (!requestHeaders.containsKey(headerName)) {
                        if (headerItem.isRequired) {
                            throw new RequestError_1.default(400, "Bad Request: Header missing: " + headerName);
                        }
                        return (_a = headerItem === null || headerItem === void 0 ? void 0 : headerItem.defaultValue) !== null && _a !== void 0 ? _a : undefined;
                    }
                    var headerValue = requestHeaders.getFirst(headerName);
                    if (headerValue === undefined)
                        return undefined;
                    return RequestRouter._castParam(headerValue, headerItem.valueType);
                }
                case RequestParamObjectType_1.default.REQUEST_HEADER_MAP: {
                    var headerItem = item;
                    var defaultHeaders = headerItem === null || headerItem === void 0 ? void 0 : headerItem.defaultValues;
                    if (requestHeaders.isEmpty()) {
                        if (defaultHeaders) {
                            return new Headers_1.default(defaultHeaders);
                        }
                        else {
                            return new Headers_1.default();
                        }
                    }
                    else {
                        if (defaultHeaders) {
                            return new Headers_1.default(__assign(__assign({}, defaultHeaders), requestHeaders.valueOf()));
                        }
                        else {
                            return requestHeaders.clone();
                        }
                    }
                }
                case RequestParamObjectType_1.default.PATH_VARIABLE: {
                    var pathParamItem = item;
                    var variableName = pathParamItem.variableName;
                    var variableValue = pathVariables && lodash_1.has(pathVariables, variableName) ? pathVariables[variableName] : undefined;
                    if (variableValue !== undefined && variableValue !== '') {
                        return variableValue;
                    }
                    else {
                        if (pathParamItem.isRequired) {
                            throw new RequestError_1.default(404, "Not Found");
                        }
                        return (_b = pathParamItem.defaultValue) !== null && _b !== void 0 ? _b : undefined;
                    }
                }
                case RequestParamObjectType_1.default.MODEL_ATTRIBUTE: {
                    var modelAttributeItem = item;
                    var key = modelAttributeItem.attributeName;
                    return modelAttributes.has(key) ? modelAttributes.get(key) : undefined;
                }
            }
            throw new TypeError("Unsupported item type: " + item);
        });
    };
    RequestRouter._castParam = function (value, type) {
        switch (type) {
            case RequestParamValueType_1.default.JSON:
                return JSON.parse(value);
            case RequestParamValueType_1.default.STRING:
                return value;
            case RequestParamValueType_1.default.INTEGER:
                return parseInt(value, 10);
            case RequestParamValueType_1.default.NUMBER:
                return parseFloat(value);
        }
        throw new TypeError("Unsupported type: " + type);
    };
    return RequestRouter;
}());
exports.RequestRouter = RequestRouter;
exports.default = RequestRouter;
