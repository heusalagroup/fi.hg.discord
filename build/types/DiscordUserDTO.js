"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDiscordUserDTO = void 0;
var lodash_1 = require("../nor/ts/modules/lodash");
function isDiscordUserDTO(value) {
    return (!!value
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.id)
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.username)
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.discriminator)
        && lodash_1.isStringOrUndefined(value === null || value === void 0 ? void 0 : value.avatar)
        && lodash_1.isBooleanOrUndefined(value === null || value === void 0 ? void 0 : value.bot)
        && lodash_1.isBooleanOrUndefined(value === null || value === void 0 ? void 0 : value.system)
        && lodash_1.isBooleanOrUndefined(value === null || value === void 0 ? void 0 : value.locale));
}
exports.isDiscordUserDTO = isDiscordUserDTO;
