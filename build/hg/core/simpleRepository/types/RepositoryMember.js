"use strict";
// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRepositoryMember = exports.stringifyRepositoryMember = exports.isRepositoryMember = void 0;
var lodash_1 = require("../../modules/lodash");
function isRepositoryMember(value) {
    return (lodash_1.isRegularObject(value)
        && lodash_1.hasNoOtherKeys(value, [
            'id',
            'displayName',
            'avatarUrl'
        ])
        && lodash_1.isString(value === null || value === void 0 ? void 0 : value.id)
        && lodash_1.isStringOrUndefined(value === null || value === void 0 ? void 0 : value.displayName)
        && lodash_1.isStringOrUndefined(value === null || value === void 0 ? void 0 : value.avatarUrl));
}
exports.isRepositoryMember = isRepositoryMember;
function stringifyRepositoryMember(value) {
    return "RepositoryMember(" + value + ")";
}
exports.stringifyRepositoryMember = stringifyRepositoryMember;
function parseRepositoryMember(value) {
    if (isRepositoryMember(value))
        return value;
    return undefined;
}
exports.parseRepositoryMember = parseRepositoryMember;
