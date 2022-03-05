"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyDiscordGatewayCloseEventCode = exports.isDiscordGatewayCloseEventCode = exports.DiscordGatewayCloseEventCode = void 0;
var lodash_1 = require("../hg/core/modules/lodash");
var DiscordGatewayCloseEventCode;
(function (DiscordGatewayCloseEventCode) {
    DiscordGatewayCloseEventCode[DiscordGatewayCloseEventCode["UNKNOWN_ERROR"] = 4000] = "UNKNOWN_ERROR";
    DiscordGatewayCloseEventCode[DiscordGatewayCloseEventCode["UNKNOWN_OPCODE"] = 4001] = "UNKNOWN_OPCODE";
    DiscordGatewayCloseEventCode[DiscordGatewayCloseEventCode["DECODE_ERROR"] = 4002] = "DECODE_ERROR";
    DiscordGatewayCloseEventCode[DiscordGatewayCloseEventCode["NOT_AUTHENTICATED"] = 4003] = "NOT_AUTHENTICATED";
    DiscordGatewayCloseEventCode[DiscordGatewayCloseEventCode["AUTHENTICATION_FAILED"] = 4004] = "AUTHENTICATION_FAILED";
    DiscordGatewayCloseEventCode[DiscordGatewayCloseEventCode["ALREADY_AUTHENTICATED"] = 4005] = "ALREADY_AUTHENTICATED";
    DiscordGatewayCloseEventCode[DiscordGatewayCloseEventCode["INVALID_SEQ"] = 4007] = "INVALID_SEQ";
    DiscordGatewayCloseEventCode[DiscordGatewayCloseEventCode["RATE_LIMITED"] = 4008] = "RATE_LIMITED";
    DiscordGatewayCloseEventCode[DiscordGatewayCloseEventCode["SESSION_TIMED_OUT"] = 4009] = "SESSION_TIMED_OUT";
    DiscordGatewayCloseEventCode[DiscordGatewayCloseEventCode["INVALID_SHARD"] = 4010] = "INVALID_SHARD";
    DiscordGatewayCloseEventCode[DiscordGatewayCloseEventCode["SHARDING_REQUIRED"] = 4011] = "SHARDING_REQUIRED";
    DiscordGatewayCloseEventCode[DiscordGatewayCloseEventCode["INVALID_API_VERSION"] = 4012] = "INVALID_API_VERSION";
    DiscordGatewayCloseEventCode[DiscordGatewayCloseEventCode["INVALID_INTENTS"] = 4013] = "INVALID_INTENTS";
    DiscordGatewayCloseEventCode[DiscordGatewayCloseEventCode["DISALLOWED_INTENTS"] = 4014] = "DISALLOWED_INTENTS";
})(DiscordGatewayCloseEventCode = exports.DiscordGatewayCloseEventCode || (exports.DiscordGatewayCloseEventCode = {}));
function isDiscordGatewayCloseEventCode(value) {
    return lodash_1.isNumber(value);
}
exports.isDiscordGatewayCloseEventCode = isDiscordGatewayCloseEventCode;
function stringifyDiscordGatewayCloseEventCode(value) {
    switch (value) {
        case DiscordGatewayCloseEventCode.UNKNOWN_ERROR: return 'UNKNOWN_ERROR';
        case DiscordGatewayCloseEventCode.UNKNOWN_OPCODE: return 'UNKNOWN_OPCODE';
        case DiscordGatewayCloseEventCode.DECODE_ERROR: return 'DECODE_ERROR';
        case DiscordGatewayCloseEventCode.NOT_AUTHENTICATED: return 'NOT_AUTHENTICATED';
        case DiscordGatewayCloseEventCode.AUTHENTICATION_FAILED: return 'AUTHENTICATION_FAILED';
        case DiscordGatewayCloseEventCode.ALREADY_AUTHENTICATED: return 'ALREADY_AUTHENTICATED';
        case DiscordGatewayCloseEventCode.INVALID_SEQ: return 'INVALID_SEQ';
        case DiscordGatewayCloseEventCode.RATE_LIMITED: return 'RATE_LIMITED';
        case DiscordGatewayCloseEventCode.SESSION_TIMED_OUT: return 'SESSION_TIMED_OUT';
        case DiscordGatewayCloseEventCode.INVALID_SHARD: return 'INVALID_SHARD';
        case DiscordGatewayCloseEventCode.SHARDING_REQUIRED: return 'SHARDING_REQUIRED';
        case DiscordGatewayCloseEventCode.INVALID_API_VERSION: return 'INVALID_API_VERSION';
        case DiscordGatewayCloseEventCode.INVALID_INTENTS: return 'INVALID_INTENTS';
        case DiscordGatewayCloseEventCode.DISALLOWED_INTENTS: return 'DISALLOWED_INTENTS';
        default: return "CloseEventCode#" + value;
    }
}
exports.stringifyDiscordGatewayCloseEventCode = stringifyDiscordGatewayCloseEventCode;
