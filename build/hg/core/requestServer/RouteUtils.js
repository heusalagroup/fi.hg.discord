"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteUtils = void 0;
var lodash_1 = require("../modules/lodash");
var ParamRoutes_1 = require("./types/ParamRoutes");
var StaticRoutes_1 = require("./types/StaticRoutes");
var RouteUtils = /** @class */ (function () {
    function RouteUtils() {
    }
    RouteUtils.createRoutes = function (routes) {
        if (RouteUtils.routesHasParameter(routes)) {
            return new ParamRoutes_1.ParamRoutes(routes);
        }
        return new StaticRoutes_1.StaticRoutes(routes);
    };
    RouteUtils.pathHasParameter = function (value) {
        return value.split('/').some(function (item) {
            return item.length >= 3 && item[0] === '{' && item[item.length - 1] === '}';
        });
    };
    RouteUtils.routesHasParameter = function (routes) {
        return lodash_1.some(lodash_1.keys(routes), RouteUtils.pathHasParameter);
    };
    return RouteUtils;
}());
exports.RouteUtils = RouteUtils;
exports.default = RouteUtils;
