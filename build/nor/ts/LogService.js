"use strict";
// Copyright (c) 2020 Sendanor. All rights reserved.
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogService = exports.Logger = exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger(name) {
        this.name = name;
    }
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        LogService.debug.apply(LogService, __spreadArray(["[" + this.name + "]"], args));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        LogService.info.apply(LogService, __spreadArray(["[" + this.name + "]"], args));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        LogService.warn.apply(LogService, __spreadArray(["[" + this.name + "]"], args));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        LogService.error.apply(LogService, __spreadArray(["[" + this.name + "]"], args));
    };
    return Logger;
}());
exports.Logger = Logger;
var LogService = /** @class */ (function () {
    function LogService() {
    }
    LogService.setLogLevel = function (value) {
        this._level = value;
    };
    LogService.setLogger = function (value) {
        if (!value)
            throw new TypeError("The logger was not defined");
        this._logger = value;
    };
    LogService.debug = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._level <= LogLevel.DEBUG) {
            (_a = this._logger).debug.apply(_a, args);
        }
    };
    LogService.info = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._level <= LogLevel.INFO) {
            (_a = this._logger).info.apply(_a, args);
        }
    };
    LogService.warn = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._level <= LogLevel.WARN) {
            (_a = this._logger).warn.apply(_a, args);
        }
    };
    LogService.error = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._level <= LogLevel.ERROR) {
            (_a = this._logger).error.apply(_a, args);
        }
    };
    LogService.createLogger = function (name) {
        return new Logger(name);
    };
    LogService._level = LogLevel.DEBUG;
    LogService._logger = console;
    return LogService;
}());
exports.LogService = LogService;
exports.default = LogService;
