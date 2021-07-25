"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDiscordUnavailableGuildDTO = void 0;
var lodash_1 = require("../nor/ts/modules/lodash");
function isDiscordUnavailableGuildDTO(value) {
    return (!!value
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.id)
        && lodash_1.isBoolean(value === null || value === void 0 ? void 0 : value.unavailable)
        && lodash_1.isNumberOrUndefined(value === null || value === void 0 ? void 0 : value.approximate_member_count)
        && lodash_1.isNumberOrUndefined(value === null || value === void 0 ? void 0 : value.approximate_presence_count)
        && lodash_1.isStringOrUndefined(value === null || value === void 0 ? void 0 : value.description));
}
exports.isDiscordUnavailableGuildDTO = isDiscordUnavailableGuildDTO;
