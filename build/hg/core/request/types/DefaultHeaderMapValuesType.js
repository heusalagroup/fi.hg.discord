"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDefaultHeaderMapValuesType = void 0;
var lodash_1 = require("../../modules/lodash");
var RequestInterfaceUtils_1 = __importDefault(require("../RequestInterfaceUtils"));
function isDefaultHeaderMapValuesType(value) {
    return (!!value
        && lodash_1.isObject(value)
        && RequestInterfaceUtils_1.default.everyPropertyIs(value, function (item) {
            return (lodash_1.isString(item)
                || (lodash_1.isArray(item) && lodash_1.every(item, lodash_1.isString)));
        }));
}
exports.isDefaultHeaderMapValuesType = isDefaultHeaderMapValuesType;
