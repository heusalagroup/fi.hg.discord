"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDiscordMessageDeleteDTO = void 0;
var lodash_1 = require("../hg/core/modules/lodash");
function isDiscordMessageDeleteDTO(value) {
    return (!!value
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.id)
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.channel_id)
        && lodash_1.isStringOrUndefined(value === null || value === void 0 ? void 0 : value.guild_id));
}
exports.isDiscordMessageDeleteDTO = isDiscordMessageDeleteDTO;
