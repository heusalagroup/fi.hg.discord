"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDiscordGatewayOpReconnectDTO = void 0;
var DiscordGatewayOp_1 = require("./DiscordGatewayOp");
function isDiscordGatewayOpReconnectDTO(value) {
    return (!!value
        && (value === null || value === void 0 ? void 0 : value.op) === DiscordGatewayOp_1.DiscordGatewayOp.RECONNECT);
}
exports.isDiscordGatewayOpReconnectDTO = isDiscordGatewayOpReconnectDTO;
