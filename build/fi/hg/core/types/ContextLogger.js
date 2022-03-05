"use strict";
// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextLogger = void 0;
var LogLevel_1 = __importDefault(require("./LogLevel"));
var ContextLogger = /** @class */ (function () {
    function ContextLogger(name, logService) {
        this.name = name;
        this._logger = logService;
        this._level = undefined;
    }
    ContextLogger.prototype.getLogLevel = function () {
        var _a;
        return (_a = this._level) !== null && _a !== void 0 ? _a : this._logger.getLogLevel();
    };
    ContextLogger.prototype.setLogLevel = function (level) {
        this._level = level;
        return this;
    };
    ContextLogger.prototype.debug = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._level === undefined || this._level <= LogLevel_1.default.DEBUG) {
            (_a = this._logger).debug.apply(_a, __spreadArray(["[" + this.name + "]"], args));
        }
    };
    ContextLogger.prototype.info = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._level === undefined || this._level <= LogLevel_1.default.INFO) {
            (_a = this._logger).info.apply(_a, __spreadArray(["[" + this.name + "]"], args));
        }
    };
    ContextLogger.prototype.warn = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._level === undefined || this._level <= LogLevel_1.default.WARN) {
            (_a = this._logger).warn.apply(_a, __spreadArray(["[" + this.name + "]"], args));
        }
    };
    ContextLogger.prototype.error = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._level === undefined || this._level <= LogLevel_1.default.ERROR) {
            (_a = this._logger).error.apply(_a, __spreadArray(["[" + this.name + "]"], args));
        }
    };
    return ContextLogger;
}());
exports.ContextLogger = ContextLogger;
exports.default = ContextLogger;
