"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDiscordGatewayHeartbeatAckDTO = void 0;
var DiscordGatewayOp_1 = require("./DiscordGatewayOp");
function isDiscordGatewayHeartbeatAckDTO(value) {
    return (!!value
        && (value === null || value === void 0 ? void 0 : value.op) === DiscordGatewayOp_1.DiscordGatewayOp.HEARTBEAT_ACK
        && ((value === null || value === void 0 ? void 0 : value.d) === null || (value === null || value === void 0 ? void 0 : value.d) === undefined));
}
exports.isDiscordGatewayHeartbeatAckDTO = isDiscordGatewayHeartbeatAckDTO;
