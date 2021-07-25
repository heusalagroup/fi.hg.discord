"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDiscordGatewayOpResumeDTO = exports.isDiscordGatewayOpResumePayload = void 0;
var lodash_1 = require("../nor/ts/modules/lodash");
var DiscordGatewayOp_1 = require("./DiscordGatewayOp");
function isDiscordGatewayOpResumePayload(value) {
    return (!!value
        && lodash_1.isNumber(value === null || value === void 0 ? void 0 : value.heartbeat_interval));
}
exports.isDiscordGatewayOpResumePayload = isDiscordGatewayOpResumePayload;
function isDiscordGatewayOpResumeDTO(value) {
    return (!!value
        && (value === null || value === void 0 ? void 0 : value.op) === DiscordGatewayOp_1.DiscordGatewayOp.RESUME
        && isDiscordGatewayOpResumePayload(value === null || value === void 0 ? void 0 : value.d));
}
exports.isDiscordGatewayOpResumeDTO = isDiscordGatewayOpResumeDTO;
