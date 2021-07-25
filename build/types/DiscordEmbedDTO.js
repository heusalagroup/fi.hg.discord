"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDiscordEmbedDTO = void 0;
var lodash_1 = require("../nor/ts/modules/lodash");
var DiscordAuthorDTO_1 = require("./DiscordAuthorDTO");
var DiscordEmbedType_1 = require("./DiscordEmbedType");
function isDiscordEmbedDTO(value) {
    return (!!value
        && lodash_1.isStringOrUndefined(value === null || value === void 0 ? void 0 : value.title)
        && ((value === null || value === void 0 ? void 0 : value.type) === undefined || DiscordEmbedType_1.isDiscordEmbedType(value === null || value === void 0 ? void 0 : value.type))
        && lodash_1.isStringOrUndefined(value === null || value === void 0 ? void 0 : value.description)
        && lodash_1.isStringOrUndefined(value === null || value === void 0 ? void 0 : value.url)
        && lodash_1.isStringOrUndefined(value === null || value === void 0 ? void 0 : value.timestamp)
        && lodash_1.isNumberOrUndefined(value === null || value === void 0 ? void 0 : value.color)
        && ((value === null || value === void 0 ? void 0 : value.author) === undefined || DiscordAuthorDTO_1.isDiscordAuthorDTO(value === null || value === void 0 ? void 0 : value.author)));
}
exports.isDiscordEmbedDTO = isDiscordEmbedDTO;
