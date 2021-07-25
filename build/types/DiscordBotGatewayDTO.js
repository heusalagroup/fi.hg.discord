"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDiscordBotGatewayDTO = void 0;
var lodash_1 = require("../nor/ts/modules/lodash");
var DiscordSessionStartLimitDTO_1 = require("./DiscordSessionStartLimitDTO");
function isDiscordBotGatewayDTO(value) {
    return (!!value
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.url)
        && lodash_1.isNumber(value === null || value === void 0 ? void 0 : value.shards)
        && DiscordSessionStartLimitDTO_1.isDiscordSessionStartLimitDTO(value === null || value === void 0 ? void 0 : value.session_start_limit));
}
exports.isDiscordBotGatewayDTO = isDiscordBotGatewayDTO;
