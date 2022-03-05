"use strict";
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
exports.RequestClient = exports.HTTPS = exports.HTTP = void 0;
var RequestMethod_1 = __importDefault(require("./request/types/RequestMethod"));
var LogService_1 = __importDefault(require("./LogService"));
var request_client_constants_1 = require("./requestClient/request-client-constants");
var NodeRequestClient_1 = __importDefault(require("./requestClient/node/NodeRequestClient"));
var FetchRequestClient_1 = __importDefault(require("./requestClient/fetch/FetchRequestClient"));
exports.HTTP = request_client_constants_1.REQUEST_CLIENT_NODE_ENABLED ? require('http') : undefined;
exports.HTTPS = request_client_constants_1.REQUEST_CLIENT_NODE_ENABLED ? require('https') : undefined;
var LOG = LogService_1.default.createLogger('RequestClient');
var RequestClient = /** @class */ (function () {
    function RequestClient() {
    }
    RequestClient.setLogLevel = function (level) {
        LOG.setLogLevel(level);
        NodeRequestClient_1.default.setLogLevel(level);
    };
    RequestClient.jsonRequest = function (method, url, headers, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.jsonRequest(method, url, headers, data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RequestClient.getJson = function (url, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.jsonRequest(RequestMethod_1.default.GET, url, headers)];
                    case 1: 
                    // LOG.debug('.getJson: ', url, headers);
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RequestClient.postJson = function (url, data, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        LOG.debug('.postJson: ', url, data, headers);
                        return [4 /*yield*/, this._client.jsonRequest(RequestMethod_1.default.POST, url, headers, data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RequestClient.patchJson = function (url, data, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        LOG.debug('.patchJson: ', url, data, headers);
                        return [4 /*yield*/, this._client.jsonRequest(RequestMethod_1.default.PATCH, url, headers, data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RequestClient.putJson = function (url, data, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        LOG.debug('.putJson: ', url, data, headers);
                        return [4 /*yield*/, this._client.jsonRequest(RequestMethod_1.default.PUT, url, headers, data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RequestClient.deleteJson = function (url, headers, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        LOG.debug('.deleteJson: ', url, data, headers);
                        return [4 /*yield*/, this._client.jsonRequest(RequestMethod_1.default.DELETE, url, headers, data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RequestClient._initClient = function () {
        if (request_client_constants_1.REQUEST_CLIENT_FETCH_ENABLED) {
            LOG.debug('Detected browser environment');
            return new FetchRequestClient_1.default(window.fetch.bind(window));
        }
        if (request_client_constants_1.REQUEST_CLIENT_NODE_ENABLED) {
            // Could not control this with LOG_LEVEL on rolluped content
            // LOG.debug('Detected NodeJS environment');
            return new NodeRequestClient_1.default(exports.HTTP, exports.HTTPS);
        }
        throw new TypeError("Could not detect request client implementation");
    };
    RequestClient._client = RequestClient._initClient();
    return RequestClient;
}());
exports.RequestClient = RequestClient;
exports.default = RequestClient;