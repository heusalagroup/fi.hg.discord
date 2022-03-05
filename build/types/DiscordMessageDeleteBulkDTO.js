"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDiscordMessageDeleteBulkDTO = void 0;
var lodash_1 = require("../hg/core/modules/lodash");
function isDiscordMessageDeleteBulkDTO(value) {
    return (!!value
        && lodash_1.isArray(value === null || value === void 0 ? void 0 : value.ids) && lodash_1.every(value === null || value === void 0 ? void 0 : value.ids, lodash_1.isString)
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.channel_id)
        && lodash_1.isStringOrUndefined(value === null || value === void 0 ? void 0 : value.guild_id));
}
exports.isDiscordMessageDeleteBulkDTO = isDiscordMessageDeleteBulkDTO;
