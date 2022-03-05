"use strict";
// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryUtils = void 0;
var lodash_1 = require("../modules/lodash");
var RepositoryUtils = /** @class */ (function () {
    function RepositoryUtils() {
    }
    RepositoryUtils.filterLatest = function (list) {
        return lodash_1.values(lodash_1.reduce(list, function (cache, item) {
            if (!lodash_1.has(cache, item.id)) {
                cache[item.id] = item;
            }
            else if (item.version > cache[item.id].version) {
                cache[item.id] = item;
            }
            return cache;
        }, {}));
    };
    return RepositoryUtils;
}());
exports.RepositoryUtils = RepositoryUtils;
exports.default = RepositoryUtils;
