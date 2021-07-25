"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    /**
     * Converts arguments as a string.
     *
     * This is a helper function to make sure every value's string presentation is actually used.
     *
     * JavaScript uses .valueOf() in many instances instead of .toString().
     *
     * See also https://stackoverflow.com/a/2485794/901430
     *
     * @param values
     */
    StringUtils.toString = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return values.join("");
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;
exports.default = StringUtils;
