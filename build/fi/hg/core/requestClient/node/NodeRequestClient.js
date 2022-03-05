"use strict";
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
exports.NodeRequestClient = exports.FsPromises = void 0;
var RequestMethod_1 = __importStar(require("../../request/types/RequestMethod"));
var NodeHttpUtils_1 = __importDefault(require("./NodeHttpUtils"));
var LogService_1 = __importDefault(require("../../LogService"));
var url_1 = __importDefault(require("url"));
var path_1 = __importDefault(require("path"));
var request_client_constants_1 = require("../request-client-constants");
var RequestError_1 = __importDefault(require("../../request/types/RequestError"));
exports.FsPromises = request_client_constants_1.REQUEST_CLIENT_NODE_ENABLED ? require("fs").promises : undefined;
var LOG = LogService_1.default.createLogger('NodeRequestClient');
var NodeRequestClient = /** @class */ (function () {
    function NodeRequestClient(http, https) {
        this._http = http;
        this._https = https;
    }
    NodeRequestClient.setLogLevel = function (level) {
        LOG.setLogLevel(level);
    };
    NodeRequestClient.prototype.jsonRequest = function (method, url, headers, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = method;
                        switch (_a) {
                            case RequestMethod_1.default.GET: return [3 /*break*/, 1];
                            case RequestMethod_1.default.POST: return [3 /*break*/, 3];
                            case RequestMethod_1.default.PATCH: return [3 /*break*/, 5];
                            case RequestMethod_1.default.PUT: return [3 /*break*/, 7];
                            case RequestMethod_1.default.DELETE: return [3 /*break*/, 9];
                        }
                        return [3 /*break*/, 11];
                    case 1: return [4 /*yield*/, this._getJson(url, headers, data)];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [4 /*yield*/, this._postJson(url, headers, data)];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: return [4 /*yield*/, this._patchJson(url, headers, data)];
                    case 6: return [2 /*return*/, _b.sent()];
                    case 7: return [4 /*yield*/, this._putJson(url, headers, data)];
                    case 8: return [2 /*return*/, _b.sent()];
                    case 9: return [4 /*yield*/, this._deleteJson(url, headers, data)];
                    case 10: return [2 /*return*/, _b.sent()];
                    case 11: throw new TypeError("[Node]RequestClient: Unsupported method: " + method);
                }
            });
        });
    };
    /**
     * If the result is true, this is a socket file.
     * If the result is false, you cannot find socket from the parent file.
     * If the result is undefined, you may search parent paths.
     *
     * @param path
     * @private
     */
    NodeRequestClient.prototype._checkSocketFile = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var stat, err_1, code;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, exports.FsPromises.stat(path)];
                    case 1:
                        stat = _a.sent();
                        // LOG.debug('_checkSocketFile: stat =', stat);
                        if (stat.isSocket())
                            return [2 /*return*/, true];
                        // if ( stat.isFile()      ) return false;
                        // if ( stat.isDirectory() ) return false;
                        return [2 /*return*/, false];
                    case 2:
                        err_1 = _a.sent();
                        code = err_1 === null || err_1 === void 0 ? void 0 : err_1.code;
                        if (code === 'ENOTDIR') {
                            LOG.debug('_checkSocketFile: ENOTDIR: ', err_1);
                            return [2 /*return*/, undefined];
                        }
                        if (code === 'ENOENT') {
                            LOG.debug('_checkSocketFile: ENOENT: ', err_1);
                            return [2 /*return*/, undefined];
                        }
                        LOG.error("_checkSocketFile: Error \"" + code + "\" passed on: ", err_1);
                        throw err_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NodeRequestClient.prototype._findSocketFile = function (fullPath) {
        return __awaiter(this, void 0, void 0, function () {
            var socketExists, parentPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._checkSocketFile(fullPath)];
                    case 1:
                        socketExists = _a.sent();
                        // LOG.debug('_findSocketFile: socketExists: ', socketExists);
                        if (socketExists === true)
                            return [2 /*return*/, fullPath];
                        if (socketExists === false)
                            return [2 /*return*/, undefined];
                        parentPath = path_1.default.dirname(fullPath);
                        // LOG.debug('_findSocketFile: parentPath: ', parentPath);
                        if (parentPath === "/" || parentPath === fullPath) {
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, this._findSocketFile(parentPath)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NodeRequestClient.prototype._httpRequest = function (url, options, body) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var bodyString, urlParsed, httpModule, protocol, fullSocketPath, realSocketPath, socketSuffix, path;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        bodyString = body ? JSON.stringify(body) + '\n' : undefined;
                        urlParsed = new url_1.default.URL(url);
                        protocol = (_a = urlParsed === null || urlParsed === void 0 ? void 0 : urlParsed.protocol) !== null && _a !== void 0 ? _a : '';
                        if (!(protocol === 'unix:' || protocol === 'socket:')) return [3 /*break*/, 2];
                        fullSocketPath = (urlParsed === null || urlParsed === void 0 ? void 0 : urlParsed.pathname) ? urlParsed === null || urlParsed === void 0 ? void 0 : urlParsed.pathname : '/';
                        if (fullSocketPath === '/') {
                            throw new TypeError("No socket path found for unix protocol URL: " + url);
                        }
                        return [4 /*yield*/, this._findSocketFile(fullSocketPath)];
                    case 1:
                        realSocketPath = _b.sent();
                        if (!realSocketPath) {
                            throw new TypeError("No socket path found for unix protocol URL: " + url);
                        }
                        socketSuffix = realSocketPath.length < fullSocketPath.length ? fullSocketPath.substr(realSocketPath.length) : '';
                        path = "" + socketSuffix + (urlParsed.search !== '?' ? urlParsed.search : '');
                        // LOG.debug('Using unix socket: ', realSocketPath, path, urlParsed);
                        options = __assign(__assign({}, options), { socketPath: realSocketPath, path: path });
                        url = '';
                        httpModule = this._http;
                        return [3 /*break*/, 3];
                    case 2:
                        if (protocol === 'https:') {
                            httpModule = this._https;
                        }
                        else {
                            httpModule = this._http;
                        }
                        _b.label = 3;
                    case 3: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            var _a;
                            var resolved = false;
                            try {
                                if (!httpModule) {
                                    throw new Error('HTTP module not defined. This error should not happen.');
                                }
                                var callback = function (res) {
                                    if (resolved) {
                                        LOG.warn('Warning! Request had already ended when the response was received.');
                                    }
                                    else {
                                        resolved = true;
                                        resolve(res);
                                    }
                                };
                                var req = void 0;
                                if (url) {
                                    options = __assign(__assign({}, options), { hostname: urlParsed.hostname, port: (_a = ((urlParsed === null || urlParsed === void 0 ? void 0 : urlParsed.port) ? parseInt(urlParsed.port, 10) : undefined)) !== null && _a !== void 0 ? _a : (protocol === "https:" ? 443 : 80), path: urlParsed.pathname + urlParsed.search });
                                    // LOG.debug(`Requesting "${url}" with options:`, options);
                                }
                                else {
                                    // LOG.debug('Requesting with options ', options);
                                }
                                req = httpModule.request(options, callback);
                                req.on('error', function (err) {
                                    if (resolved) {
                                        LOG.warn('Warning! Request had already ended when the response was received.');
                                        LOG.debug('Error from event: ', err);
                                    }
                                    else {
                                        LOG.debug('Passing on error from event: ', err);
                                        resolved = true;
                                        reject(err);
                                    }
                                });
                                if (bodyString) {
                                    // LOG.debug('_request: writing bodyString = ', bodyString);
                                    req.write(bodyString);
                                }
                                else {
                                    // LOG.debug('_request: no body');
                                }
                                req.end();
                            }
                            catch (err) {
                                if (resolved) {
                                    LOG.warn('Warning! Request had already ended when the response was received.');
                                    LOG.debug('Exception: ', err);
                                }
                                else {
                                    LOG.debug('Passing on error: ', err);
                                    resolved = true;
                                    reject(err);
                                }
                            }
                        })];
                    case 4: 
                    // LOG.debug('Calling inside a promise...');
                    return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    NodeRequestClient.prototype._request = function (method, url, options, body) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var response, result, statusCode, myResponse;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._httpRequest(url, options, body)];
                    case 1:
                        response = _b.sent();
                        return [4 /*yield*/, NodeHttpUtils_1.default.getRequestDataAsJson(response)];
                    case 2:
                        result = _b.sent();
                        statusCode = (_a = response === null || response === void 0 ? void 0 : response.statusCode) !== null && _a !== void 0 ? _a : 0;
                        myResponse = {
                            method: method,
                            url: url,
                            statusCode: statusCode,
                            headers: response.headers,
                            body: result
                        };
                        // LOG.debug('_request: myResponse = ', myResponse);
                        return [2 /*return*/, myResponse];
                }
            });
        });
    };
    NodeRequestClient.prototype._getJson = function (url, headers, data) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        };
                        if (headers) {
                            options.headers = __assign(__assign({}, options.headers), headers);
                        }
                        return [4 /*yield*/, this._request(RequestMethod_1.default.GET, url, options, data).then(NodeRequestClient._successResponse)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NodeRequestClient.prototype._putJson = function (url, headers, data) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        };
                        if (headers) {
                            options.headers = __assign(__assign({}, options.headers), headers);
                        }
                        return [4 /*yield*/, this._request(RequestMethod_1.default.PUT, url, options, data).then(NodeRequestClient._successResponse)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NodeRequestClient.prototype._postJson = function (url, headers, data) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        };
                        if (headers) {
                            options.headers = __assign(__assign({}, options.headers), headers);
                        }
                        return [4 /*yield*/, this._request(RequestMethod_1.default.POST, url, options, data).then(NodeRequestClient._successResponse)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NodeRequestClient.prototype._patchJson = function (url, headers, data) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        };
                        if (headers) {
                            options.headers = __assign(__assign({}, options.headers), headers);
                        }
                        return [4 /*yield*/, this._request(RequestMethod_1.default.PATCH, url, options, data).then(NodeRequestClient._successResponse)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NodeRequestClient.prototype._deleteJson = function (url, headers, data) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        };
                        if (headers) {
                            options.headers = __assign(__assign({}, options.headers), headers);
                        }
                        return [4 /*yield*/, this._request(RequestMethod_1.default.DELETE, url, options, data).then(NodeRequestClient._successResponse)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NodeRequestClient._successResponse = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var statusCode;
            return __generator(this, function (_a) {
                statusCode = response === null || response === void 0 ? void 0 : response.statusCode;
                if (statusCode < 200 || statusCode >= 400) {
                    LOG.error("Unsuccessful response with status " + statusCode + ": ", response);
                    throw new RequestError_1.default(statusCode, "Error " + statusCode + " for " + RequestMethod_1.stringifyRequestMethod(response.method) + " " + response.url, response.method, response.url, response.body);
                }
                //LOG.debug(`Successful response with status ${statusCode}: `, response);
                return [2 /*return*/, response.body];
            });
        });
    };
    return NodeRequestClient;
}());
exports.NodeRequestClient = NodeRequestClient;
exports.default = NodeRequestClient;
