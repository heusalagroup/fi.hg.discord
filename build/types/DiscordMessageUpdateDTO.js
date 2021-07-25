"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDiscordMessageUpdateDTO = void 0;
var lodash_1 = require("../nor/ts/modules/lodash");
var DiscordUserDTO_1 = require("./DiscordUserDTO");
var DiscordEmbedDTO_1 = require("./DiscordEmbedDTO");
function isDiscordMessageUpdateDTO(value) {
    return (!!value
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.id)
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.channel_id)
        && lodash_1.isStringOrUndefined(value === null || value === void 0 ? void 0 : value.timestamp)
        && ((value === null || value === void 0 ? void 0 : value.author) === undefined || DiscordUserDTO_1.isDiscordUserDTO(value === null || value === void 0 ? void 0 : value.author))
        && lodash_1.isStringOrUndefined(value === null || value === void 0 ? void 0 : value.content)
        && lodash_1.isBooleanOrUndefined(value === null || value === void 0 ? void 0 : value.tts)
        && ((value === null || value === void 0 ? void 0 : value.embeds) === undefined || (lodash_1.isArray(value === null || value === void 0 ? void 0 : value.embeds) && lodash_1.every(value === null || value === void 0 ? void 0 : value.embeds, DiscordEmbedDTO_1.isDiscordEmbedDTO))));
}
exports.isDiscordMessageUpdateDTO = isDiscordMessageUpdateDTO;
