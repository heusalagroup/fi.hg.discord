"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDiscordGatewayDispatchReadyDTO = exports.isDiscordGatewayDispatchReadyPayload = void 0;
var lodash_1 = require("../nor/ts/modules/lodash");
var DiscordGatewayOp_1 = require("./DiscordGatewayOp");
var DiscordGatewayEvent_1 = require("./DiscordGatewayEvent");
var DiscordUserDTO_1 = require("./DiscordUserDTO");
var DiscordUnavailableGuildDTO_1 = require("./DiscordUnavailableGuildDTO");
var DiscordApplicationDTO_1 = require("./DiscordApplicationDTO");
function isDiscordGatewayDispatchReadyPayload(value) {
    return (!!value
        && lodash_1.isNumber(value === null || value === void 0 ? void 0 : value.v)
        && DiscordUserDTO_1.isDiscordUserDTO(value === null || value === void 0 ? void 0 : value.user)
        && (lodash_1.isArray(value === null || value === void 0 ? void 0 : value.guilds) && lodash_1.every(value === null || value === void 0 ? void 0 : value.guilds, DiscordUnavailableGuildDTO_1.isDiscordUnavailableGuildDTO))
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.session_id)
        && DiscordApplicationDTO_1.isDiscordApplicationDTO(value === null || value === void 0 ? void 0 : value.application));
}
exports.isDiscordGatewayDispatchReadyPayload = isDiscordGatewayDispatchReadyPayload;
function isDiscordGatewayDispatchReadyDTO(value) {
    return (!!value
        && (value === null || value === void 0 ? void 0 : value.t) === DiscordGatewayEvent_1.DiscordGatewayEvent.READY
        && (value === null || value === void 0 ? void 0 : value.op) === DiscordGatewayOp_1.DiscordGatewayOp.DISPATCH
        && isDiscordGatewayDispatchReadyPayload(value === null || value === void 0 ? void 0 : value.d));
}
exports.isDiscordGatewayDispatchReadyDTO = isDiscordGatewayDispatchReadyDTO;
