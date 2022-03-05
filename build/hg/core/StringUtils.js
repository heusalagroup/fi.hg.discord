"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
var Json_1 = require("./Json");
var lodash_1 = require("./modules/lodash");
var ACCEPTED_KEYWORD_CHARACTERS = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._1234567890';
var ACCEPTED_START_KEYWORD_CHARACTERS = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._';
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
        return lodash_1.map(values, function (item) {
            if (lodash_1.isNull(item))
                return 'null';
            return "" + item;
        }).join("");
    };
    /**
     * Convert any found variables in the input to corresponding values.
     *
     * The variable keyword may be a path to a variable inner in the `variables` structure.
     * Eg. when variables is `{"foo":{"bar":123}}`, the inner value `123` can be referenced using
     * `{variablePrefix}foo.bar{variableSuffix}` in the input.
     *
     * The input may be any JSON structure. Only string items will be processed. That means
     * keywords and scalar string values inside the structure.
     *
     * Returned structure is a partial (copy on write) version of the input structure.
     *
     */
    StringUtils.processVariables = function (input, resolveVariable, variablePrefix, variableSuffix, defaultValue) {
        if (defaultValue === void 0) { defaultValue = undefined; }
        if (Json_1.isReadonlyJsonArray(input)) {
            return lodash_1.map(input, function (item) { return StringUtils.processVariables(item, resolveVariable, variablePrefix, variableSuffix, defaultValue); });
        }
        if (Json_1.isReadonlyJsonObject(input)) {
            return lodash_1.reduce(lodash_1.keys(input), function (obj, itemKey) {
                var itemValue = input[itemKey];
                var parsedItemKey = "" + StringUtils.processVariables(itemKey, resolveVariable, variablePrefix, variableSuffix, defaultValue);
                obj[parsedItemKey] = StringUtils.processVariables(itemValue, resolveVariable, variablePrefix, variableSuffix, defaultValue);
                return obj;
            }, {});
        }
        if (lodash_1.isString(input)) {
            return StringUtils.processVariablesInString(input, resolveVariable, variablePrefix, variableSuffix, defaultValue);
        }
        return input;
    };
    /**
     *
     * @fixme This probably should be inside Pipeline code, not here, and configurable in processVariablesInString().
     * @param variableKey
     */
    StringUtils.isValidKeyword = function (variableKey) {
        if (variableKey.length <= 0)
            return false;
        if (ACCEPTED_START_KEYWORD_CHARACTERS.includes(variableKey[0])) {
            return true;
        }
        return lodash_1.every(variableKey, function (item) { return ACCEPTED_KEYWORD_CHARACTERS.includes(item); });
    };
    /**
     * Convert any found variables in the input to corresponding values.
     *
     * The variable keyword may be a path to a variable inner in the `variables` structure.
     * Eg. when variables is `{"foo":{"bar":123}}`, the inner value `123` can be referenced using
     * `{variablePrefix}foo.bar{variableSuffix}` in the input.
     *
     * Returns the string with any found variables converted.
     *
     */
    StringUtils.processVariablesInString = function (input, resolveVariable, variablePrefix, variableSuffix, defaultValue) {
        if (defaultValue === void 0) { defaultValue = undefined; }
        if (input.length === 0)
            return '';
        var resolver;
        if (!lodash_1.isFunction(resolveVariable)) {
            resolver = function (key) { return lodash_1.get(resolveVariable, key, defaultValue); };
        }
        else {
            resolver = resolveVariable;
        }
        // Special case which will support typed variables, when the full string is.
        if (lodash_1.startsWith(input, variablePrefix) && lodash_1.endsWith(input, variableSuffix)) {
            var variableKey = input.substr(variablePrefix.length, input.length - variablePrefix.length - variableSuffix.length);
            // Make sure we don't have multiple variables in the string
            if (variableKey.indexOf(variablePrefix) < 0) {
                variableKey = lodash_1.trim(variableKey);
                if (StringUtils.isValidKeyword(variableKey)) {
                    var resolvedValue = resolver(variableKey);
                    // LOG.debug(`Variable "${variableKey}" resolved as `, resolvedValue);
                    return resolvedValue;
                }
            }
        }
        var output = '';
        var index = 0;
        while ((index >= 0) && (index < input.length)) {
            var currentParsingStartIndex = index;
            index = input.indexOf(variablePrefix, currentParsingStartIndex);
            if (index < 0) {
                output += input.substr(currentParsingStartIndex);
                index = input.length;
            }
            else {
                var keyTokenStartIndex = index;
                var keyNameStartIndex = index + variablePrefix.length;
                var keyNameEndIndex = input.indexOf(variableSuffix, keyNameStartIndex);
                if (keyNameEndIndex < 0) {
                    throw new TypeError("Parse error near \"" + input.substr(keyTokenStartIndex).substr(0, 20) + "\". End of variable not detected.");
                }
                var keyTokenEndIndex = keyNameEndIndex + variableSuffix.length;
                var variableKey = lodash_1.trim(input.substr(keyNameStartIndex, keyNameEndIndex - keyNameStartIndex));
                if (!StringUtils.isValidKeyword(variableKey)) {
                    output += "" + input.substr(currentParsingStartIndex, keyTokenEndIndex - currentParsingStartIndex);
                    index = keyTokenEndIndex;
                }
                else {
                    var resolvedValue = resolver(variableKey);
                    // LOG.debug(`Variable "${variableKey}" at ${keyTokenStartIndex}-${keyTokenEndIndex} resolved as "${resolvedValue}": `, resolvedValue);
                    output += "" + input.substr(currentParsingStartIndex, keyTokenStartIndex - currentParsingStartIndex) + resolvedValue;
                    index = keyTokenEndIndex;
                }
            }
        }
        return output;
    };
    /**
     * Stringify a number
     *
     * @param x
     * @param thousandSeparator
     * @param digitSeparator
     */
    StringUtils.formatNumber = function (x, thousandSeparator, digitSeparator) {
        if (thousandSeparator === void 0) { thousandSeparator = ' '; }
        if (digitSeparator === void 0) { digitSeparator = '.'; }
        return x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator).replace(/\./, digitSeparator);
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;
exports.default = StringUtils;
