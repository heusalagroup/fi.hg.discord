"use strict";
// Copyright (c) 2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDiscordEmbedType = exports.DiscordEmbedType = void 0;
var DiscordEmbedType;
(function (DiscordEmbedType) {
    DiscordEmbedType["RICH"] = "rich";
    DiscordEmbedType["IMAGE"] = "image";
    DiscordEmbedType["VIDEO"] = "video";
    DiscordEmbedType["GIFV"] = "gifv";
    DiscordEmbedType["ARTICLE"] = "article";
    DiscordEmbedType["LINK"] = "link";
})(DiscordEmbedType = exports.DiscordEmbedType || (exports.DiscordEmbedType = {}));
function isDiscordEmbedType(value) {
    switch (value) {
        case DiscordEmbedType.RICH:
        case DiscordEmbedType.IMAGE:
        case DiscordEmbedType.VIDEO:
        case DiscordEmbedType.GIFV:
        case DiscordEmbedType.ARTICLE:
        case DiscordEmbedType.LINK:
            return true;
        default:
            return false;
    }
}
exports.isDiscordEmbedType = isDiscordEmbedType;
