"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamRoutes = void 0;
var lodash_1 = require("../../modules/lodash");
var ParamRoutes = /** @class */ (function () {
    function ParamRoutes(routes) {
        var routePaths = lodash_1.keys(routes);
        var routeFunctions = lodash_1.map(routePaths, function (itemKey) {
            var itemValue = routes[itemKey];
            return ParamRoutes.createCallbackFunction(itemKey, itemValue);
        });
        this._routes = routeFunctions;
    }
    ParamRoutes.prototype.hasRoute = function (pathName) {
        return lodash_1.some(this._routes, function (f) {
            var r = f(pathName)[0];
            return r !== undefined && (r === null || r === void 0 ? void 0 : r.length) >= 1;
        });
    };
    ParamRoutes.prototype.getRoute = function (pathName) {
        var lastResult = undefined;
        var lastParams = undefined;
        lodash_1.find(this._routes, function (f) {
            var _a = f(pathName), result = _a[0], params = _a[1];
            if (result !== undefined) {
                lastResult = result;
                lastParams = params;
                return true;
            }
            return false;
        });
        if (lastResult !== undefined) {
            return [lastResult, lastParams];
        }
        else {
            return [undefined, undefined];
        }
    };
    ParamRoutes.createCallbackFunction = function (itemKey, itemValue) {
        if (itemKey === '') {
            itemKey = '/';
        }
        var formatParts = itemKey.split('/');
        var formatPartsLen = formatParts.length;
        if (formatPartsLen === 0)
            throw new Error('Path format had no items. This should not happen.');
        var paramKeys = lodash_1.map(formatParts, function (pathValue, pathIndex) {
            if (pathValue.length >= 3 && pathValue[0] === '{' && pathValue[pathValue.length - 1] === '}') {
                return lodash_1.trim(pathValue.substr(1, pathValue.length - 2));
            }
            else {
                formatParts[pathIndex] = pathValue.toLowerCase();
                return null;
            }
        });
        var hasParamKeys = lodash_1.some(paramKeys, lodash_1.isString);
        if (!hasParamKeys) {
            var staticPath_1 = itemKey.toLowerCase();
            return function (requestPath) {
                if (requestPath.toLowerCase() !== staticPath_1) {
                    return [undefined, undefined];
                }
                else {
                    return [itemValue, undefined];
                }
            };
        }
        return function (requestPath) {
            var requestParts = requestPath.split('/');
            var requestPartsLen = requestParts.length;
            // There should be at least one item always, since there should be at least one "/"
            if (requestPartsLen === 0) {
                return [undefined, undefined];
            }
            if (formatPartsLen !== requestPartsLen) {
                return [undefined, undefined];
            }
            var paramValues = {};
            if (lodash_1.every(paramKeys, function (paramKey, paramIndex) {
                if (lodash_1.isString(paramKey)) {
                    paramValues[paramKey] = requestParts[paramIndex];
                    return true;
                }
                else {
                    return formatParts[paramIndex] === requestParts[paramIndex].toLowerCase();
                }
            })) {
                return [itemValue, paramValues];
            }
            else {
                return [undefined, undefined];
            }
        };
    };
    return ParamRoutes;
}());
exports.ParamRoutes = ParamRoutes;
exports.default = ParamRoutes;
