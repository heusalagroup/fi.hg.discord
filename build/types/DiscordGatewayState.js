"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordGatewayState = void 0;
var DiscordGatewayState;
(function (DiscordGatewayState) {
    /**
     * WebSocket is not initialized yet
     */
    DiscordGatewayState["UNINITIALIZED"] = "UNINITIALIZED";
    /**
     * Connect method has been called for the WebSocket and listeners has been initialized, but "open" event has not
     * been triggered.
     *
     * This state will be also after the "close" event has been received from the WebSocket.
     */
    DiscordGatewayState["INITIALIZED"] = "INITIALIZED";
    /**
     * The WS "open" event has been received
     */
    DiscordGatewayState["OPEN"] = "OPEN";
    /**
     * We have received the "hello" event from the Discord gateway and we're sending our first heartbeat OP.
     */
    DiscordGatewayState["HELLO"] = "HELLO";
    /**
     * The bot is in the normal heartbeat loop
     */
    DiscordGatewayState["HEARTBEATING"] = "HEARTBEATING";
    /**
     * We have received the ready event
     */
    DiscordGatewayState["CONNECTED"] = "CONNECTED";
    /**
     * The bot was destroyed
     */
    DiscordGatewayState["DESTROYED"] = "DESTROYED";
})(DiscordGatewayState = exports.DiscordGatewayState || (exports.DiscordGatewayState = {}));
