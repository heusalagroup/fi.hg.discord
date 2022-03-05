"use strict";
// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRepositoryEntryList = void 0;
var lodash_1 = require("../../modules/lodash");
function isRepositoryEntryList(value, isT) {
    return (lodash_1.isRegularObject(value)
        && lodash_1.hasNoOtherKeys(value, [
            'list'
        ])
        && lodash_1.isArrayOf(value === null || value === void 0 ? void 0 : value.list, function (item) { return isT(item); }));
}
exports.isRepositoryEntryList = isRepositoryEntryList;
