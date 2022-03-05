"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticRoutes = void 0;
var lodash_1 = require("../../modules/lodash");
var StaticRoutes = /** @class */ (function () {
    function StaticRoutes(routes) {
        var routePaths = lodash_1.keys(routes);
        var routePairs = lodash_1.map(routePaths, function (itemKey) {
            var itemValue = routes[itemKey];
            return [itemKey.toLowerCase(), itemValue];
        });
        this._routes = new Map(routePairs);
    }
    StaticRoutes.prototype.hasRoute = function (pathName) {
        return this._routes.has(pathName.toLowerCase());
    };
    StaticRoutes.prototype.getRoute = function (pathName) {
        var result = this._routes.get(pathName.toLowerCase());
        if (result !== undefined) {
            return [result, undefined];
        }
        return [undefined, undefined];
    };
    return StaticRoutes;
}());
exports.StaticRoutes = StaticRoutes;
exports.default = StaticRoutes;
