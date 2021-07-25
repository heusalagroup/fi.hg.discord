"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDiscordGatewayDispatchMessageUpdateDTO = void 0;
var DiscordGatewayOp_1 = require("./DiscordGatewayOp");
var DiscordGatewayEvent_1 = require("./DiscordGatewayEvent");
var DiscordMessageUpdateDTO_1 = require("./DiscordMessageUpdateDTO");
function isDiscordGatewayDispatchMessageUpdateDTO(value) {
    return (!!value
        && (value === null || value === void 0 ? void 0 : value.t) === DiscordGatewayEvent_1.DiscordGatewayEvent.MESSAGE_UPDATE
        && (value === null || value === void 0 ? void 0 : value.op) === DiscordGatewayOp_1.DiscordGatewayOp.DISPATCH
        && DiscordMessageUpdateDTO_1.isDiscordMessageUpdateDTO(value === null || value === void 0 ? void 0 : value.d));
}
exports.isDiscordGatewayDispatchMessageUpdateDTO = isDiscordGatewayDispatchMessageUpdateDTO;
