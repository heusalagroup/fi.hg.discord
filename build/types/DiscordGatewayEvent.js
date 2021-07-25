"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordGatewayEvent = void 0;
var DiscordGatewayEvent;
(function (DiscordGatewayEvent) {
    DiscordGatewayEvent["READY"] = "READY";
    DiscordGatewayEvent["GUILD_MEMBER_UPDATE"] = "GUILD_MEMBER_UPDATE";
    DiscordGatewayEvent["MESSAGE_CREATE"] = "MESSAGE_CREATE";
    DiscordGatewayEvent["MESSAGE_UPDATE"] = "MESSAGE_UPDATE";
    DiscordGatewayEvent["MESSAGE_DELETE"] = "MESSAGE_DELETE";
    DiscordGatewayEvent["MESSAGE_DELETE_BULK"] = "MESSAGE_DELETE_BULK";
})(DiscordGatewayEvent = exports.DiscordGatewayEvent || (exports.DiscordGatewayEvent = {}));
