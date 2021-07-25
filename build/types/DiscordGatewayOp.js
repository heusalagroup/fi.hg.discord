"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordGatewayOp = void 0;
var DiscordGatewayOp;
(function (DiscordGatewayOp) {
    DiscordGatewayOp[DiscordGatewayOp["DISPATCH"] = 0] = "DISPATCH";
    DiscordGatewayOp[DiscordGatewayOp["HEARTBEAT"] = 1] = "HEARTBEAT";
    DiscordGatewayOp[DiscordGatewayOp["IDENTIFY"] = 2] = "IDENTIFY";
    DiscordGatewayOp[DiscordGatewayOp["PRESENCE_UPDATE"] = 3] = "PRESENCE_UPDATE";
    DiscordGatewayOp[DiscordGatewayOp["VOICE_STATE_UPDATE"] = 4] = "VOICE_STATE_UPDATE";
    DiscordGatewayOp[DiscordGatewayOp["RESUME"] = 6] = "RESUME";
    DiscordGatewayOp[DiscordGatewayOp["RECONNECT"] = 7] = "RECONNECT";
    DiscordGatewayOp[DiscordGatewayOp["REQUEST_GUILD_MEMBERS"] = 8] = "REQUEST_GUILD_MEMBERS";
    DiscordGatewayOp[DiscordGatewayOp["INVALID_SESSION"] = 9] = "INVALID_SESSION";
    DiscordGatewayOp[DiscordGatewayOp["HELLO"] = 10] = "HELLO";
    DiscordGatewayOp[DiscordGatewayOp["HEARTBEAT_ACK"] = 11] = "HEARTBEAT_ACK";
})(DiscordGatewayOp = exports.DiscordGatewayOp || (exports.DiscordGatewayOp = {}));
