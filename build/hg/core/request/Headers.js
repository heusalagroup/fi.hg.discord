"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHeaders = exports.Headers = void 0;
var lodash_1 = require("../modules/lodash");
var LogService_1 = __importDefault(require("../LogService"));
var Json_1 = require("../Json");
var LOG = LogService_1.default.createLogger('Headers');
var Headers = /** @class */ (function () {
    function Headers(value) {
        this._value = undefined;
        this._uninitializedValue = value;
    }
    Headers.setLogLevel = function (level) {
        LOG.setLogLevel(level);
    };
    Headers.prototype._initializeValue = function () {
        var value = this._value;
        var uninitializedValue = this._uninitializedValue;
        try {
            if (uninitializedValue) {
                this._uninitializedValue = undefined;
                this.addAll(uninitializedValue);
            }
        }
        catch (err) {
            this._value = value;
            this._uninitializedValue = uninitializedValue;
            throw err;
        }
    };
    Headers.prototype.clear = function () {
        this._value = {};
        this._uninitializedValue = undefined;
    };
    Headers.prototype.add = function (headerName, headerValue) {
        var _a, _b, _c, _d;
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        LOG.debug('add header: ', headerName, headerValue);
        headerName = headerName.toLowerCase();
        var originalHeader = this._value && lodash_1.has(this._value, headerName) ? this._value[headerName] : undefined;
        if (this._value === undefined) {
            this._value = (_a = {},
                _a[headerName] = headerValue,
                _a);
        }
        else if (originalHeader !== undefined) {
            if (Json_1.isReadonlyJsonArray(originalHeader)) {
                this._value = __assign(__assign({}, this._value), (_b = {}, _b[headerName] = lodash_1.concat([], originalHeader, [headerValue]), _b));
            }
            else {
                this._value = __assign(__assign({}, this._value), (_c = {}, _c[headerName] = [originalHeader, headerValue], _c));
            }
        }
        else {
            this._value = __assign(__assign({}, this._value), (_d = {}, _d[headerName] = headerValue, _d));
        }
    };
    Headers.prototype.containsKey = function (headerName) {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        headerName = headerName.toLowerCase();
        return lodash_1.has(this._value, headerName);
    };
    Headers.prototype.isEmpty = function () {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        var headersObject = this._value;
        return !headersObject || lodash_1.keys(headersObject).length === 0;
    };
    Headers.prototype.keySet = function () {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        var set = new Set();
        if (this._value !== undefined) {
            var list = lodash_1.keys(this._value);
            lodash_1.forEach(list, function (key) {
                set.add(key);
            });
        }
        return set;
    };
    Headers.prototype.getValue = function (headerName) {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        if (!this._value)
            return undefined;
        headerName = headerName.toLowerCase();
        return lodash_1.has(this._value, headerName) ? this._value[headerName] : undefined;
    };
    Headers.prototype.getFirst = function (headerName) {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        var value = this.getValue(headerName);
        if (Json_1.isReadonlyJsonArray(value)) {
            return value.length ? value[0] : undefined;
        }
        return value;
    };
    Headers.prototype.getHost = function () {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        return this.getFirst('host');
    };
    Headers.prototype.addAll = function (arg1, arg2) {
        var _this = this;
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        if (lodash_1.isString(arg1)) {
            var headerKey_1 = arg1;
            var headerValues = arg2;
            if (!lodash_1.isArray(headerValues))
                throw new TypeError('Headers.addAll signature must be (string, string[]) or (HeadersObject)');
            lodash_1.forEach(headerValues, function (item) {
                _this.add(headerKey_1, item);
            });
        }
        else {
            var values_1 = arg1;
            lodash_1.forEach(lodash_1.keys(values_1), function (headerKey) {
                var headerValue = values_1[headerKey];
                if (Json_1.isReadonlyJsonArray(headerValue)) {
                    lodash_1.forEach(headerValue, function (item) {
                        _this.add(headerKey, item);
                    });
                }
                else if (headerValue !== undefined) {
                    _this.add(headerKey, headerValue);
                }
            });
        }
    };
    Headers.prototype.remove = function (headerName) {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        headerName = headerName.toLowerCase();
        var originalValue = this.getValue(headerName);
        var newValues = __assign({}, this._value);
        if (newValues && lodash_1.has(newValues, headerName)) {
            delete newValues[headerName];
        }
        this._value = newValues;
        return originalValue;
    };
    Headers.prototype.set = function (headerName, headerValue) {
        var _a, _b;
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        headerName = headerName.toLowerCase();
        if (this._value === undefined) {
            this._value = (_a = {},
                _a[headerName] = headerValue,
                _a);
        }
        else {
            this._value = __assign(__assign({}, this._value), (_b = {}, _b[headerName] = headerValue, _b));
        }
    };
    Headers.prototype.setAll = function (values) {
        var _this = this;
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        lodash_1.forEach(lodash_1.keys(values), function (headerKey) {
            _this.set(headerKey, values[headerKey]);
        });
    };
    Headers.prototype.valueOf = function () {
        var _a;
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        return (_a = this._value) !== null && _a !== void 0 ? _a : undefined;
    };
    Headers.prototype.toString = function () {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        var headersObject = this._value;
        if (!headersObject || this.isEmpty())
            return 'Headers()';
        var headerKeys = lodash_1.keys(headersObject);
        var items = lodash_1.map(headerKeys, function (headerKey) {
            var headerValue = headersObject[headerKey];
            if (!headerValue)
                return "" + headerKey;
            if (lodash_1.isArray(headerValue))
                return headerKey + ": " + headerValue.map(function (item) {
                    if (headerValue.indexOf(';') >= 0 || headerValue.indexOf(',') >= 0) {
                        return "\"" + headerValue + "\"";
                    }
                    return headerValue;
                }).join(', ');
            if (headerValue.indexOf(';') >= 0) {
                return headerKey + ": \"" + headerValue + "\"";
            }
            return headerKey + ": " + headerValue;
        });
        return "Headers(" + items.join('; ') + ")";
    };
    Headers.prototype.clone = function () {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        return new Headers(this._value ? __assign({}, this._value) : undefined);
    };
    return Headers;
}());
exports.Headers = Headers;
function isHeaders(value) {
    return (!!value
        && value instanceof Headers);
}
exports.isHeaders = isHeaders;
exports.default = Headers;
