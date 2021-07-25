"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDiscordGatewayDispatchMessageDeleteBulkDTO = void 0;
var DiscordGatewayOp_1 = require("./DiscordGatewayOp");
var DiscordGatewayEvent_1 = require("./DiscordGatewayEvent");
var DiscordMessageDeleteBulkDTO_1 = require("./DiscordMessageDeleteBulkDTO");
function isDiscordGatewayDispatchMessageDeleteBulkDTO(value) {
    return (!!value
        && (value === null || value === void 0 ? void 0 : value.t) === DiscordGatewayEvent_1.DiscordGatewayEvent.MESSAGE_DELETE_BULK
        && (value === null || value === void 0 ? void 0 : value.op) === DiscordGatewayOp_1.DiscordGatewayOp.DISPATCH
        && DiscordMessageDeleteBulkDTO_1.isDiscordMessageDeleteBulkDTO(value === null || value === void 0 ? void 0 : value.d));
}
exports.isDiscordGatewayDispatchMessageDeleteBulkDTO = isDiscordGatewayDispatchMessageDeleteBulkDTO;
