"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
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
exports.DiscordGateway = exports.DiscordGatewayEvent = void 0;
var ws_1 = __importDefault(require("ws"));
var Observer_1 = __importDefault(require("../../core/Observer"));
var LogService_1 = __importDefault(require("../../core/LogService"));
var lodash_1 = require("../../core/modules/lodash");
var DiscordService_1 = require("./DiscordService");
var DiscordGatewayState_1 = require("./types/DiscordGatewayState");
var DiscordGatewayOpHelloDTO_1 = require("./types/DiscordGatewayOpHelloDTO");
var DiscordGatewayHeartbeatAckDTO_1 = require("./types/DiscordGatewayHeartbeatAckDTO");
var DiscordGatewayHeartbeatDTO_1 = require("./types/DiscordGatewayHeartbeatDTO");
var DiscordGatewayOpInvalidSessionDTO_1 = require("./types/DiscordGatewayOpInvalidSessionDTO");
var DiscordGatewayOpReconnectDTO_1 = require("./types/DiscordGatewayOpReconnectDTO");
var DiscordGatewayOp_1 = require("./types/DiscordGatewayOp");
var DiscordGatewayDispatchReadyDTO_1 = require("./types/DiscordGatewayDispatchReadyDTO");
var DiscordGatewayDispatchMessageCreateDTO_1 = require("./types/DiscordGatewayDispatchMessageCreateDTO");
var DiscordGatewayDispatchMessageUpdateDTO_1 = require("./types/DiscordGatewayDispatchMessageUpdateDTO");
var DiscordGatewayDispatchMessageDeleteDTO_1 = require("./types/DiscordGatewayDispatchMessageDeleteDTO");
var DiscordGatewayDispatchMessageDeleteBulkDTO_1 = require("./types/DiscordGatewayDispatchMessageDeleteBulkDTO");
var LOG = LogService_1.default.createLogger('DiscordGateway');
var DiscordGatewayEvent;
(function (DiscordGatewayEvent) {
    /**
     * These are messages which our bot user did not send.
     */
    DiscordGatewayEvent[DiscordGatewayEvent["NEW_MESSAGE"] = 0] = "NEW_MESSAGE";
    /**
     * Any new message, including ones that the bot user created.
     */
    DiscordGatewayEvent[DiscordGatewayEvent["CREATE_MESSAGE"] = 1] = "CREATE_MESSAGE";
    DiscordGatewayEvent[DiscordGatewayEvent["UPDATE_MESSAGE"] = 2] = "UPDATE_MESSAGE";
    DiscordGatewayEvent[DiscordGatewayEvent["DELETE_MESSAGE"] = 3] = "DELETE_MESSAGE";
    DiscordGatewayEvent[DiscordGatewayEvent["BULK_DELETE_MESSAGE"] = 4] = "BULK_DELETE_MESSAGE";
})(DiscordGatewayEvent = exports.DiscordGatewayEvent || (exports.DiscordGatewayEvent = {}));
var DiscordGateway = /** @class */ (function () {
    function DiscordGateway(botToken, sessionKey) {
        this._botToken = botToken;
        this._wsSessionId = sessionKey;
        this._observer = new Observer_1.default("DiscordGateway");
        this._ws = undefined;
        this._wsHeartbeatInterval = undefined;
        this._wsHeartbeatTimeout = undefined;
        this._wsLastSequence = null;
        this._wsState = DiscordGatewayState_1.DiscordGatewayState.UNINITIALIZED;
        this._previousHeartBeatAckTime = undefined;
        this._heartBeatAckTime = undefined;
        this._wsHeartbeatCallback = this._onHeartbeatInterval.bind(this);
        this._wsMessageCallback = this._onWsMessage.bind(this);
        this._wsCloseCallback = this._onWsClose.bind(this);
        this._wsOpenCallback = this._onWsOpen.bind(this);
    }
    DiscordGateway.prototype.getUser = function () {
        return this._wsSessionUser;
    };
    DiscordGateway.prototype.getState = function () {
        return this._wsState;
    };
    DiscordGateway.prototype.destroy = function () {
        this._disconnect();
        this._wsState = DiscordGatewayState_1.DiscordGatewayState.DESTROYED;
    };
    DiscordGateway.prototype.connect = function () {
        this._connect().catch(function (err) {
            LOG.error('Could not connect: ', err);
            // FIXME: Implement automatic reply
        });
    };
    DiscordGateway.prototype.disconnect = function () {
        this._disconnect();
    };
    DiscordGateway.prototype.on = function (name, callback) {
        return this._observer.listenEvent(name, callback);
    };
    DiscordGateway.prototype._disconnect = function () {
        if (this._wsHeartbeatInterval) {
            clearInterval(this._wsHeartbeatInterval);
            this._wsHeartbeatInterval = undefined;
        }
        if (this._wsHeartbeatTimeout) {
            clearTimeout(this._wsHeartbeatTimeout);
            this._wsHeartbeatTimeout = undefined;
        }
        if (this._ws) {
            this._ws.off('open', this._wsOpenCallback);
            this._ws.off('close', this._wsCloseCallback);
            this._ws.off('message', this._wsMessageCallback);
            if (this._wsState === DiscordGatewayState_1.DiscordGatewayState.INITIALIZED || this._wsState === DiscordGatewayState_1.DiscordGatewayState.UNINITIALIZED) {
            }
            else {
                this._ws.close();
            }
            this._ws = undefined;
        }
        this._wsSessionUser = undefined;
        this._wsState = DiscordGatewayState_1.DiscordGatewayState.UNINITIALIZED;
    };
    DiscordGateway.prototype._connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var discordGateway;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._ws) {
                            this._disconnect();
                        }
                        return [4 /*yield*/, DiscordService_1.DiscordService.getDiscordBotGatewayDTO(this._botToken)];
                    case 1:
                        discordGateway = _a.sent();
                        this._ws = new ws_1.default(discordGateway.url + "?v=9&encoding=json");
                        this._ws.on('open', this._wsOpenCallback);
                        this._ws.on('close', this._wsCloseCallback);
                        this._ws.on('message', this._wsMessageCallback);
                        this._wsState = DiscordGatewayState_1.DiscordGatewayState.INITIALIZED;
                        return [2 /*return*/];
                }
            });
        });
    };
    DiscordGateway.prototype._reconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._disconnect();
                        return [4 /*yield*/, this._connect()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DiscordGateway.prototype._onWsOpen = function () {
        LOG.debug('ws open');
        if (this._wsState === DiscordGatewayState_1.DiscordGatewayState.INITIALIZED || this._wsState === DiscordGatewayState_1.DiscordGatewayState.UNINITIALIZED) {
            this._wsState = DiscordGatewayState_1.DiscordGatewayState.OPEN;
        }
    };
    DiscordGateway.prototype._onWsClose = function () {
        LOG.debug('ws close');
        this._wsState = DiscordGatewayState_1.DiscordGatewayState.INITIALIZED;
        this._disconnect();
    };
    DiscordGateway.prototype._onWsMessage = function (dataString) {
        LOG.debug('ws message', dataString);
        var data = JSON.parse(dataString);
        this._wsLastSequence = data.s;
        if (DiscordGatewayOpHelloDTO_1.isDiscordGatewayOpHelloDTO(data)) {
            this._onOpHello(data.d);
        }
        else if (DiscordGatewayHeartbeatAckDTO_1.isDiscordGatewayHeartbeatAckDTO(data)) {
            this._onOpHeartbeatAck();
        }
        else if (DiscordGatewayHeartbeatDTO_1.isDiscordGatewayHeartbeatDTO(data)) {
            this._onOpHeartbeat(data.d);
        }
        else if (DiscordGatewayOpInvalidSessionDTO_1.isDiscordGatewayOpInvalidSessionDTO(data)) {
            this._onOpInvalidSession(data.d);
        }
        else if (DiscordGatewayOpReconnectDTO_1.isDiscordGatewayOpReconnectDTO(data)) {
            this._onOpReconnect();
        }
        else if (data.op === DiscordGatewayOp_1.DiscordGatewayOp.DISPATCH) {
            if (DiscordGatewayDispatchReadyDTO_1.isDiscordGatewayDispatchReadyDTO(data)) {
                this._onDispatchReady(data.d);
            }
            else if (DiscordGatewayDispatchMessageCreateDTO_1.isDiscordGatewayDispatchMessageCreateDTO(data)) {
                this._onDispatchMessageCreate(data.d);
            }
            else if (DiscordGatewayDispatchMessageUpdateDTO_1.isDiscordGatewayDispatchMessageUpdateDTO(data)) {
                this._onDispatchMessageUpdate(data.d);
            }
            else if (DiscordGatewayDispatchMessageDeleteDTO_1.isDiscordGatewayDispatchMessageDeleteDTO(data)) {
                this._onDispatchMessageDelete(data.d);
            }
            else if (DiscordGatewayDispatchMessageDeleteBulkDTO_1.isDiscordGatewayDispatchMessageDeleteBulkDTO(data)) {
                this._onDispatchMessageDeleteBulk(data.d);
            }
            else {
                LOG.debug('unsupported dispatch: ', data.t, data.op, data.d);
            }
        }
        else {
            LOG.debug('unsupported op: ', data.op, data.d);
        }
    };
    DiscordGateway.prototype._sendHeartbeat = function (value) {
        LOG.debug('_sendHeartbeat', value);
        this._sendOp(DiscordGatewayOp_1.DiscordGatewayOp.HEARTBEAT, value);
    };
    DiscordGateway.prototype._sendIdentify = function () {
        this._sendIdentifyOp({
            token: this._botToken,
            intents: 1 << 9,
            properties: {
                $os: "linux",
                $browser: "nor_library",
                $device: "nor_library"
            }
        });
    };
    DiscordGateway.prototype._sendResume = function (sessionId, sequence) {
        this._sendResumeOp({
            token: this._botToken,
            session_id: sessionId,
            seq: sequence
        });
    };
    DiscordGateway.prototype._sendIdentifyOp = function (data) {
        LOG.debug('_sendIdentify', data);
        this._sendOp(DiscordGatewayOp_1.DiscordGatewayOp.IDENTIFY, data);
    };
    DiscordGateway.prototype._sendResumeOp = function (data) {
        LOG.debug('_sendResume', data);
        this._sendOp(DiscordGatewayOp_1.DiscordGatewayOp.RESUME, data);
    };
    DiscordGateway.prototype._sendOp = function (op, d) {
        if (!this._ws) {
            LOG.warn("Warning! WebSocket was not initialized.");
            return;
        }
        LOG.debug('_sendOp', op, d);
        var data = {
            op: op,
            d: d
        };
        var dataString = JSON.stringify(data);
        this._ws.send(dataString);
    };
    DiscordGateway.prototype._onOpHello = function (data) {
        var _this = this;
        var hbInterval = data.heartbeat_interval;
        LOG.debug('_onOpHello: ', hbInterval);
        this._wsState = DiscordGatewayState_1.DiscordGatewayState.HELLO;
        this._wsHeartbeatTimeout = setTimeout(function () {
            _this._wsHeartbeatTimeout = undefined;
            try {
                _this._wsHeartbeatCallback();
            }
            catch (err) {
                LOG.error('Error while initial heartbeat interval: ', err);
            }
            _this._wsHeartbeatInterval = setInterval(_this._wsHeartbeatCallback, hbInterval);
            _this._wsState = DiscordGatewayState_1.DiscordGatewayState.HEARTBEATING;
        }, Math.round(Math.random() * hbInterval));
        // Send resume or identify
        if (this._wsSessionId && this._wsLastSequence) {
            this._sendResume(this._wsSessionId, this._wsLastSequence);
        }
        else {
            this._sendIdentify();
        }
    };
    DiscordGateway.prototype._onOpHeartbeatAck = function () {
        LOG.debug('_onOpHeartbeatAck');
        this._heartBeatAckTime = Date.now();
    };
    DiscordGateway.prototype._onOpHeartbeat = function (data) {
        LOG.debug('_onOpHeartbeat: ', data);
        this._wsHeartbeatCallback();
    };
    DiscordGateway.prototype._onOpInvalidSession = function (isResumable) {
        LOG.debug('_onOpInvalidSession: ', isResumable);
        if (!isResumable) {
            this._wsSessionId = "";
            this._wsLastSequence = null;
        }
        this._reconnect().catch(function (err) {
            LOG.error('Reconnect failed: ', err);
        });
    };
    DiscordGateway.prototype._onOpReconnect = function () {
        LOG.debug('_onOpReconnect');
        this._reconnect().catch(function (err) {
            LOG.error('Reconnect failed: ', err);
        });
    };
    DiscordGateway.prototype._onDispatchReady = function (data) {
        var _a, _b, _c, _d, _e, _f;
        LOG.debug("_onDispatchReady: " + (((_a = data === null || data === void 0 ? void 0 : data.user) === null || _a === void 0 ? void 0 : _a.bot) ? 'bot ' : '') + "user " + ((_b = data === null || data === void 0 ? void 0 : data.user) === null || _b === void 0 ? void 0 : _b.username) + "#" + ((_c = data === null || data === void 0 ? void 0 : data.user) === null || _c === void 0 ? void 0 : _c.id) + ", session_id=" + (data === null || data === void 0 ? void 0 : data.session_id) + ", " + ((_e = (_d = data === null || data === void 0 ? void 0 : data.guilds) === null || _d === void 0 ? void 0 : _d.length) !== null && _e !== void 0 ? _e : 0) + " guilds, application#" + ((_f = data === null || data === void 0 ? void 0 : data.application) === null || _f === void 0 ? void 0 : _f.id));
        this._wsSessionId = data.session_id;
        this._wsSessionUser = data === null || data === void 0 ? void 0 : data.user;
        this._wsState = DiscordGatewayState_1.DiscordGatewayState.CONNECTED;
    };
    DiscordGateway.prototype._onDispatchMessageCreate = function (data) {
        var _a, _b;
        var msgId = data === null || data === void 0 ? void 0 : data.id;
        var hasCreateMessageListeners = this._observer.hasCallbacks(DiscordGatewayEvent.CREATE_MESSAGE);
        if (hasCreateMessageListeners) {
            LOG.debug("Triggering CREATE_MESSAGE for #" + msgId);
            this._observer.triggerEvent(DiscordGatewayEvent.CREATE_MESSAGE, data);
        }
        var hasNewMessageListeners = this._observer.hasCallbacks(DiscordGatewayEvent.NEW_MESSAGE);
        if (hasNewMessageListeners) {
            var myUserId = (_a = this._wsSessionUser) === null || _a === void 0 ? void 0 : _a.id;
            var msgAuthorId = (_b = data === null || data === void 0 ? void 0 : data.author) === null || _b === void 0 ? void 0 : _b.id;
            if (!myUserId) {
                LOG.warn("Warning! We could not detect our own id. Skipped sending NEW_MESSAGE event for #" + msgId + ".");
            }
            else if (!msgAuthorId) {
                LOG.warn("Warning! We could not detect ID from message. Skipped sending NEW_MESSAGE event for #" + msgId + ".");
            }
            else if (myUserId === msgAuthorId) {
                LOG.debug("It was our own message. Not sending NEW_MESSAGE event for #" + msgId + ".");
            }
            else {
                LOG.debug("Triggering NEW_MESSAGE for #" + msgId);
                this._observer.triggerEvent(DiscordGatewayEvent.NEW_MESSAGE, data);
            }
        }
        if (!hasCreateMessageListeners && !hasNewMessageListeners) {
            LOG.debug("No CREATE_MESSAGE nor NEW_MESSAGE listeners for #" + msgId);
        }
    };
    DiscordGateway.prototype._onDispatchMessageUpdate = function (data) {
        var msgId = data === null || data === void 0 ? void 0 : data.id;
        if (this._observer.hasCallbacks(DiscordGatewayEvent.UPDATE_MESSAGE)) {
            LOG.debug("Triggering UPDATE_MESSAGE for #" + msgId);
            this._observer.triggerEvent(DiscordGatewayEvent.UPDATE_MESSAGE, data);
        }
        else {
            LOG.debug("No UPDATE_MESSAGE listeners for #" + msgId);
        }
    };
    DiscordGateway.prototype._onDispatchMessageDelete = function (data) {
        var msgId = data === null || data === void 0 ? void 0 : data.id;
        if (this._observer.hasCallbacks(DiscordGatewayEvent.DELETE_MESSAGE)) {
            LOG.debug("Triggering DELETE_MESSAGE for #" + msgId);
            this._observer.triggerEvent(DiscordGatewayEvent.DELETE_MESSAGE, data);
        }
        else {
            LOG.debug("No DELETE_MESSAGE listeners for #" + msgId);
        }
    };
    DiscordGateway.prototype._onDispatchMessageDeleteBulk = function (data) {
        var msgIds = data === null || data === void 0 ? void 0 : data.ids;
        if (this._observer.hasCallbacks(DiscordGatewayEvent.BULK_DELETE_MESSAGE)) {
            LOG.debug("Triggering BULK_DELETE_MESSAGE for " + lodash_1.map(msgIds, function (id) { return "#" + id; }).join(' '));
            this._observer.triggerEvent(DiscordGatewayEvent.BULK_DELETE_MESSAGE, data);
        }
        else {
            LOG.debug("No BULK_DELETE_MESSAGE listeners " + lodash_1.map(msgIds, function (id) { return "#" + id; }).join(' '));
        }
    };
    /**
     * Called periodically to trigger heartbeat for Discord
     *
     * @private
     */
    DiscordGateway.prototype._onHeartbeatInterval = function () {
        try {
            LOG.debug('_onHeartbeatInterval');
            if (this._heartBeatAckTime !== undefined && this._heartBeatAckTime === this._previousHeartBeatAckTime) {
                this._reconnect().catch(function (err) {
                    LOG.error('Reconnect failed: ', err);
                });
            }
            else {
                this._sendHeartbeat(this._wsLastSequence);
                this._previousHeartBeatAckTime = this._heartBeatAckTime;
            }
        }
        catch (err) {
            LOG.error('Error while sending heartbeat interval: ', err);
        }
    };
    DiscordGateway.Event = DiscordGatewayEvent;
    DiscordGateway.State = DiscordGatewayState_1.DiscordGatewayState;
    return DiscordGateway;
}());
exports.DiscordGateway = DiscordGateway;
