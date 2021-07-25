"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDiscordGatewayDispatchMessageCreateDTO = void 0;
var DiscordGatewayOp_1 = require("./DiscordGatewayOp");
var DiscordGatewayEvent_1 = require("./DiscordGatewayEvent");
var DiscordMessageDTO_1 = require("./DiscordMessageDTO");
function isDiscordGatewayDispatchMessageCreateDTO(value) {
    return (!!value
        && (value === null || value === void 0 ? void 0 : value.t) === DiscordGatewayEvent_1.DiscordGatewayEvent.MESSAGE_CREATE
        && (value === null || value === void 0 ? void 0 : value.op) === DiscordGatewayOp_1.DiscordGatewayOp.DISPATCH
        && DiscordMessageDTO_1.isDiscordMessageDTO(value === null || value === void 0 ? void 0 : value.d));
}
exports.isDiscordGatewayDispatchMessageCreateDTO = isDiscordGatewayDispatchMessageCreateDTO;
