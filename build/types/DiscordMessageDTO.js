"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDiscordMessageDTO = void 0;
var lodash_1 = require("../hg/core/modules/lodash");
var DiscordUserDTO_1 = require("./DiscordUserDTO");
var DiscordEmbedDTO_1 = require("./DiscordEmbedDTO");
function isDiscordMessageDTO(value) {
    return (!!value
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.id)
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.channel_id)
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.timestamp)
        && DiscordUserDTO_1.isDiscordUserDTO(value === null || value === void 0 ? void 0 : value.author)
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.content)
        && lodash_1.isBoolean(value === null || value === void 0 ? void 0 : value.tts)
        && ((value === null || value === void 0 ? void 0 : value.embeds) === undefined || (lodash_1.isArray(value === null || value === void 0 ? void 0 : value.embeds) && lodash_1.every(value === null || value === void 0 ? void 0 : value.embeds, DiscordEmbedDTO_1.isDiscordEmbedDTO))));
}
exports.isDiscordMessageDTO = isDiscordMessageDTO;
