"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDiscordAuthorDTO = void 0;
var lodash_1 = require("../nor/ts/modules/lodash");
function isDiscordAuthorDTO(value) {
    return (!!value
        && lodash_1.isStringOrUndefined(value === null || value === void 0 ? void 0 : value.name)
        && lodash_1.isStringOrUndefined(value === null || value === void 0 ? void 0 : value.url)
        && lodash_1.isStringOrUndefined(value === null || value === void 0 ? void 0 : value.icon_url)
        && lodash_1.isStringOrUndefined(value === null || value === void 0 ? void 0 : value.proxy_icon_url));
}
exports.isDiscordAuthorDTO = isDiscordAuthorDTO;
