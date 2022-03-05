"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDiscordSessionStartLimitDTO = void 0;
var lodash_1 = require("../hg/core/modules/lodash");
function isDiscordSessionStartLimitDTO(value) {
    return (!!value
        && lodash_1.isNumber(value === null || value === void 0 ? void 0 : value.total)
        && lodash_1.isNumber(value === null || value === void 0 ? void 0 : value.remaining)
        && lodash_1.isNumber(value === null || value === void 0 ? void 0 : value.reset_after)
        && lodash_1.isNumber(value === null || value === void 0 ? void 0 : value.max_concurrency));
}
exports.isDiscordSessionStartLimitDTO = isDiscordSessionStartLimitDTO;
