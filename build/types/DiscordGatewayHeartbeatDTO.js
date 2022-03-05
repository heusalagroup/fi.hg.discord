"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDiscordGatewayHeartbeatDTO = void 0;
var lodash_1 = require("../hg/core/modules/lodash");
var DiscordGatewayOp_1 = require("./DiscordGatewayOp");
function isDiscordGatewayHeartbeatDTO(value) {
    return (!!value
        && (value === null || value === void 0 ? void 0 : value.op) === DiscordGatewayOp_1.DiscordGatewayOp.HEARTBEAT
        && ((value === null || value === void 0 ? void 0 : value.d) === null || lodash_1.isNumber(value === null || value === void 0 ? void 0 : value.d)));
}
exports.isDiscordGatewayHeartbeatDTO = isDiscordGatewayHeartbeatDTO;
