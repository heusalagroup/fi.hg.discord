"use strict";
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
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
exports.HttpServerService = void 0;
var http_1 = __importDefault(require("http"));
var LogService_1 = __importDefault(require("../LogService"));
var LOG = LogService_1.default.createLogger('HttpService');
var DEFAULT_HOSTNAME = undefined;
var DEFAULT_PORT = 3000;
var HttpServerService = /** @class */ (function () {
    /**
     *
     * @param port
     * @param hostname
     * @param handler
     * @fixme Convert to use a configuration string instead of port + hostname, so that also sockets, etc can be supported.
     */
    function HttpServerService(port, hostname, handler) {
        if (port === void 0) { port = DEFAULT_PORT; }
        if (hostname === void 0) { hostname = DEFAULT_HOSTNAME; }
        if (handler === void 0) { handler = undefined; }
        LOG.debug('new: ', hostname, port, handler);
        this._requestHandler = this._onRequest.bind(this);
        this._listenCallback = this._onListen.bind(this);
        this._closeCallback = this._onClose.bind(this);
        this._hostname = hostname;
        this._port = port;
        this._handler = handler;
        this._server = http_1.default.createServer(this._requestHandler);
    }
    HttpServerService.prototype.start = function () {
        LOG.debug("Starting server at " + this._getConnectionString());
        if (this._hostname === undefined) {
            this._server.listen(this._port, this._listenCallback);
        }
        else {
            this._server.listen(this._port, this._hostname, this._listenCallback);
        }
    };
    HttpServerService.prototype.stop = function () {
        LOG.debug("Closing server at " + this._getConnectionString());
        this._server.close(this._closeCallback);
    };
    HttpServerService.prototype.setHandler = function (newHandler) {
        LOG.debug(this._hostname, this._port, ': Changing handler as: ', newHandler, ' was ', this._handler);
        this._handler = newHandler;
    };
    HttpServerService.prototype._getConnectionString = function () {
        if (this._hostname === undefined) {
            return "http://" + this._port;
        }
        else {
            return "http://" + this._hostname + ":" + this._port;
        }
    };
    HttpServerService.prototype._callRequestHandler = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this._handler !== undefined)) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._handler(req, res)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        LOG.error('Response handler has an error: ', e_1);
                        return [3 /*break*/, 4];
                    case 4:
                        if (!res.writableFinished) {
                            LOG.warn('Warning! Request handler did not close the response.');
                            res.end();
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        LOG.error('No handler configured for the request.');
                        res.end('Error');
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HttpServerService.prototype._onRequest = function (req, res) {
        this._callRequestHandler(req, res).catch(function (err) {
            LOG.error('Request has an error: ', err);
        });
    };
    HttpServerService.prototype._onListen = function () {
        LOG.info("Server started at " + this._getConnectionString());
    };
    HttpServerService.prototype._onClose = function () {
        LOG.debug("Closed server at " + this._getConnectionString());
    };
    return HttpServerService;
}());
exports.HttpServerService = HttpServerService;
exports.default = HttpServerService;
