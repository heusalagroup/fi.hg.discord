"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDiscordApplicationDTO = void 0;
var lodash_1 = require("../nor/ts/modules/lodash");
function isDiscordApplicationDTO(value) {
    return (!!value
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.id)
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.name)
        && lodash_1.isStringOrUndefined(value === null || value === void 0 ? void 0 : value.icon)
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.description)
        && lodash_1.isBoolean(value === null || value === void 0 ? void 0 : value.bot_public));
}
exports.isDiscordApplicationDTO = isDiscordApplicationDTO;
