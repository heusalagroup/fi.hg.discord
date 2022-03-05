"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHeadersObject = void 0;
var lodash_1 = require("../../modules/lodash");
function isHeadersObject(value) {
    if (!value)
        return false;
    if (!lodash_1.isObject(value))
        return false;
    if (lodash_1.isArray(value))
        return false;
    var propertyKeys = lodash_1.keys(value);
    return lodash_1.every(propertyKeys, function (key) {
        // @ts-ignore
        var propertyValue = value[key];
        return propertyValue === undefined || lodash_1.isString(propertyValue) || (lodash_1.isArray(propertyValue) && lodash_1.every(propertyValue, lodash_1.isString));
    });
}
exports.isHeadersObject = isHeadersObject;
