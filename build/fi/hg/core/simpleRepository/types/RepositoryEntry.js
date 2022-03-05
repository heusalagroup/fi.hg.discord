"use strict";
// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRepositoryEntry = void 0;
var lodash_1 = require("../../modules/lodash");
var RepositoryMember_1 = require("./RepositoryMember");
function isRepositoryEntry(value, isT) {
    return (lodash_1.isRegularObject(value)
        && lodash_1.hasNoOtherKeys(value, [
            'data',
            'id',
            'version',
            'deleted',
            'members'
        ])
        && isT(value === null || value === void 0 ? void 0 : value.data)
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.id)
        && lodash_1.isNumber(value === null || value === void 0 ? void 0 : value.version)
        && lodash_1.isBooleanOrUndefined(value === null || value === void 0 ? void 0 : value.deleted)
        && lodash_1.isArrayOrUndefinedOf(value === null || value === void 0 ? void 0 : value.members, RepositoryMember_1.isRepositoryMember));
}
exports.isRepositoryEntry = isRepositoryEntry;
