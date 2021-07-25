"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDiscordGatewayDispatchMessageDeleteDTO = void 0;
var DiscordGatewayOp_1 = require("./DiscordGatewayOp");
var DiscordGatewayEvent_1 = require("./DiscordGatewayEvent");
var DiscordMessageDeleteDTO_1 = require("./DiscordMessageDeleteDTO");
function isDiscordGatewayDispatchMessageDeleteDTO(value) {
    return (!!value
        && (value === null || value === void 0 ? void 0 : value.t) === DiscordGatewayEvent_1.DiscordGatewayEvent.MESSAGE_DELETE
        && (value === null || value === void 0 ? void 0 : value.op) === DiscordGatewayOp_1.DiscordGatewayOp.DISPATCH
        && DiscordMessageDeleteDTO_1.isDiscordMessageDeleteDTO(value === null || value === void 0 ? void 0 : value.d));
}
exports.isDiscordGatewayDispatchMessageDeleteDTO = isDiscordGatewayDispatchMessageDeleteDTO;
