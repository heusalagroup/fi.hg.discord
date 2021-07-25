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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestServer = exports.DEFAULT_REQUEST_SERVER_CONFIG_STRING = void 0;
var HttpServerService_1 = __importDefault(require("./requestServer/HttpServerService"));
var RequestRouter_1 = __importDefault(require("./requestServer/RequestRouter"));
var RequestStatus_1 = __importStar(require("./request/types/RequestStatus"));
var RequestError_1 = require("./request/types/RequestError");
var url_1 = __importDefault(require("url"));
var RequestMethod_1 = require("./request/types/RequestMethod");
var LogService_1 = __importDefault(require("./LogService"));
var RequestController_1 = require("./request/types/RequestController");
var NodeHttpUtils_1 = __importDefault(require("./requestClient/node/NodeHttpUtils"));
var ResponseEntity_1 = __importDefault(require("./request/ResponseEntity"));
var lodash_1 = require("./modules/lodash");
var Headers_1 = __importDefault(require("./request/Headers"));
var LOG = LogService_1.default.createLogger('RequestServer');
exports.DEFAULT_REQUEST_SERVER_CONFIG_STRING = 'http://localhost:3000';
var RequestServer = /** @class */ (function () {
    function RequestServer(config) {
        if (config === void 0) { config = exports.DEFAULT_REQUEST_SERVER_CONFIG_STRING; }
        this._server = RequestServer.createServerService(config);
        this._router = new RequestRouter_1.default();
        this._handleRequestCallback = this._handleRequest.bind(this);
        this._server.setHandler(this._handleRequestCallback);
    }
    /**
     * Attach an instance which was previously annotated with our Request annotation implementation.
     *
     * @param controller Class instance which has internal Request annotations
     */
    RequestServer.prototype.attachController = function (controller) {
        if (RequestController_1.isRequestController(controller)) {
            this._router.attachController(controller);
        }
        else {
            throw new TypeError("The provided controller was not supported type");
        }
    };
    RequestServer.prototype.start = function () {
        this._server.start();
    };
    RequestServer.prototype.stop = function () {
        this._server.stop();
    };
    RequestServer.prototype._handleRequest = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var responseData, err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._router.handleRequest(RequestMethod_1.parseRequestMethod(req.method), req.url, function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, NodeHttpUtils_1.default.getRequestDataAsJson(req)];
                            }); }); }, this._parseRequestHeaders(req.headers))];
                    case 1:
                        responseData = _a.sent();
                        this._handleResponse(responseData, res);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        LOG.debug('Error: ', err_1);
                        this._handleErrorResponse(err_1, res);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RequestServer.prototype._handleResponse = function (responseEntity, res) {
        var statusCode = responseEntity.getStatusCode();
        res.statusCode = statusCode;
        res.statusMessage = RequestStatus_1.stringifyRequestStatus(statusCode);
        var headers = responseEntity.getHeaders();
        if (!headers.isEmpty()) {
            headers.keySet().forEach(function (headerKey) {
                var _a;
                var headerValue = (_a = headers.getValue(headerKey)) !== null && _a !== void 0 ? _a : '';
                LOG.debug("Setting response header as \"" + headerKey + "\": \"" + headerValue + "\"");
                if (lodash_1.isArray(headerValue)) {
                    res.setHeader(headerKey, __spreadArray([], headerValue));
                }
                else {
                    res.setHeader(headerKey, headerValue);
                }
            });
        }
        if (responseEntity.hasBody()) {
            var body = responseEntity.getBody();
            if (lodash_1.isString(body)) {
                res.end(body);
            }
            else {
                res.end(JSON.stringify(body, null, 2));
            }
        }
        else {
            res.end();
        }
    };
    RequestServer.prototype._handleErrorResponse = function (error, res) {
        var _a;
        var responseEntity;
        if (RequestStatus_1.isRequestStatus(error)) {
            responseEntity = new ResponseEntity_1.default(error);
        }
        else if (RequestError_1.isRequestError(error)) {
            responseEntity = new ResponseEntity_1.default(error, error.getStatusCode());
        }
        else {
            LOG.error('Exception: ', error);
            // FIXME: We should have an public API for testing production mode
            if (((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.NODE_ENV) === 'production') {
                responseEntity = ResponseEntity_1.default.internalServerError();
            }
            else {
                responseEntity = new ResponseEntity_1.default(RequestError_1.createRequestError(RequestStatus_1.default.InternalServerError, "Internal Server Error: " + error), RequestStatus_1.default.InternalServerError);
            }
        }
        this._handleResponse(responseEntity, res);
    };
    /**
     *
     * @param value
     * @private
     */
    RequestServer.prototype._parseRequestHeaders = function (value) {
        return new Headers_1.default(value);
    };
    RequestServer.createServerService = function (config) {
        var url = new url_1.default.URL(config);
        if (url.protocol === 'http:') {
            var port = url.port ? parseInt(url.port, 10) : 80;
            return new HttpServerService_1.default(port, url.hostname);
        }
        else {
            throw new TypeError("RequestServer: Protocol \"" + url.protocol + "\" not yet supported");
        }
    };
    return RequestServer;
}());
exports.RequestServer = RequestServer;
exports.default = RequestServer;
