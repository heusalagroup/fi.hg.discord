"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
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
exports.DiscordService = exports.DiscordBotServiceEvent = void 0;
var RequestClient_1 = __importDefault(require("../../core/RequestClient"));
var LogService_1 = __importDefault(require("../../core/LogService"));
var Observer_1 = __importDefault(require("../../core/Observer"));
var DiscordApplicationDTO_1 = require("./types/DiscordApplicationDTO");
var DiscordMessageDTO_1 = require("./types/DiscordMessageDTO");
var DiscordBotGatewayDTO_1 = require("./types/DiscordBotGatewayDTO");
var discord_constants_1 = require("./discord-constants");
var LOG = LogService_1.default.createLogger('DiscordService');
var DiscordBotServiceEvent;
(function (DiscordBotServiceEvent) {
})(DiscordBotServiceEvent = exports.DiscordBotServiceEvent || (exports.DiscordBotServiceEvent = {}));
var DiscordService = /** @class */ (function () {
    function DiscordService(botToken, discordGuildId) {
        this._botToken = botToken;
        this._observer = new Observer_1.default("DiscordBotService");
        this._me = undefined;
        this._guildId = discordGuildId;
    }
    DiscordService.prototype.destroy = function () {
    };
    DiscordService.prototype.getMe = function () {
        return this._me;
    };
    DiscordService.prototype.on = function (name, callback) {
        return this._observer.listenEvent(name, callback);
    };
    DiscordService.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, DiscordService.getMe(this._botToken)];
                    case 1:
                        _a._me = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DiscordService.prototype.changeMyNick = function (newNick) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, DiscordService.changeMyNick(this._botToken, this._guildId, newNick)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DiscordService.prototype.createMessage = function (channelId, payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, DiscordService.createMessage(this._botToken, channelId, payload)];
            });
        });
    };
    DiscordService.prototype.createMessageWithNick = function (nick, channelId, payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, DiscordService.createMessageWithNick(this._botToken, nick, channelId, payload)];
            });
        });
    };
    DiscordService.getMe = function (botToken) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, RequestClient_1.default.getJson(discord_constants_1.DISCORD_API_ENDPOINT + "/oauth2/applications/@me", DiscordService.generateBotHeadersObject(botToken)).then(function (response) {
                            if (!DiscordApplicationDTO_1.isDiscordApplicationDTO(response)) {
                                LOG.debug('response = ', response);
                                throw new TypeError('Response was not DiscordApplicationDTO');
                            }
                            return response;
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DiscordService.changeMyNick = function (botToken, guildId, newNick) {
        return __awaiter(this, void 0, void 0, function () {
            var payload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        payload = {
                            nick: newNick
                        };
                        return [4 /*yield*/, RequestClient_1.default.patchJson(discord_constants_1.DISCORD_API_ENDPOINT + "/guilds/" + guildId + "/members/@me/nick", payload, DiscordService.generateBotHeadersObject(botToken)).then(function (response) {
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DiscordService.createMessageWithNick = function (botToken, nick, channelId, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var newPayload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newPayload = __assign(__assign({}, payload), { content: "<" + nick + "> " + payload.content });
                        return [4 /*yield*/, DiscordService.createMessage(botToken, channelId, newPayload)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DiscordService.getDiscordBotGatewayDTO = function (botToken) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, RequestClient_1.default.getJson(discord_constants_1.DISCORD_API_ENDPOINT + "/gateway/bot", DiscordService.generateBotHeadersObject(botToken)).then(function (response) {
                            if (!DiscordBotGatewayDTO_1.isDiscordBotGatewayDTO(response)) {
                                LOG.debug('response = ', response);
                                throw new TypeError('Response was not DiscordBotGatewayDTO');
                            }
                            return response;
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DiscordService.createMessage = function (botToken, channelId, payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, RequestClient_1.default.postJson(discord_constants_1.DISCORD_API_ENDPOINT + "/channels/" + channelId + "/messages", payload, DiscordService.generateBotHeadersObject(botToken)).then(function (response) {
                            if (!DiscordMessageDTO_1.isDiscordMessageDTO(response)) {
                                LOG.debug('response = ', response);
                                throw new TypeError('Response was not DiscordMessageDTO');
                            }
                            return response;
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DiscordService.generateBotHeadersObject = function (botToken) {
        return {
            'Authorization': DiscordService.getBotAuthorizationHeader(botToken),
            'User-Agent': DiscordService.getUserAgentString()
        };
    };
    DiscordService.getUserAgentString = function () {
        return discord_constants_1.LIBRARY_NAME + " (" + discord_constants_1.LIBRARY_URL + ", v" + discord_constants_1.LIBRARY_VERSION + ")";
    };
    DiscordService.getBotAuthorizationHeader = function (botToken) {
        return "Bot " + botToken;
    };
    DiscordService.Event = DiscordBotServiceEvent;
    return DiscordService;
}());
exports.DiscordService = DiscordService;
