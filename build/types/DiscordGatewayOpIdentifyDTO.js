"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDiscordGatewayOpIdentifyDTO = exports.isDiscordGatewayOpIdentifyPayload = exports.isDiscordGatewayOpIdentifyPayloadProperties = void 0;
var lodash_1 = require("../nor/ts/modules/lodash");
var DiscordGatewayOp_1 = require("./DiscordGatewayOp");
function isDiscordGatewayOpIdentifyPayloadProperties(value) {
    return (!!value
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.$os)
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.$browser)
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.$device));
}
exports.isDiscordGatewayOpIdentifyPayloadProperties = isDiscordGatewayOpIdentifyPayloadProperties;
function isDiscordGatewayOpIdentifyPayload(value) {
    return (!!value
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.token)
        && lodash_1.isNumber(value === null || value === void 0 ? void 0 : value.intents)
        && isDiscordGatewayOpIdentifyPayloadProperties(value === null || value === void 0 ? void 0 : value.properties));
}
exports.isDiscordGatewayOpIdentifyPayload = isDiscordGatewayOpIdentifyPayload;
function isDiscordGatewayOpIdentifyDTO(value) {
    return (!!value
        && (value === null || value === void 0 ? void 0 : value.op) === DiscordGatewayOp_1.DiscordGatewayOp.IDENTIFY
        && isDiscordGatewayOpIdentifyPayload(value === null || value === void 0 ? void 0 : value.d));
}
exports.isDiscordGatewayOpIdentifyDTO = isDiscordGatewayOpIdentifyDTO;
