"use strict";
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogService = exports.LogLevel = void 0;
var LogLevel_1 = __importStar(require("./types/LogLevel"));
exports.LogLevel = LogLevel_1.default;
var ContextLogger_1 = __importDefault(require("./types/ContextLogger"));
var LogService = /** @class */ (function () {
    function LogService() {
    }
    LogService.setLogLevel = function (value) {
        if (value) {
            this._level = value;
        }
        return this;
    };
    LogService.getLogLevel = function () {
        return this._level;
    };
    LogService.getLogLevelString = function () {
        return LogLevel_1.stringifyLogLevel(this._level);
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
        if (this._level <= LogLevel_1.default.DEBUG) {
            (_a = this._logger).debug.apply(_a, args);
        }
    };
    LogService.info = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._level <= LogLevel_1.default.INFO) {
            (_a = this._logger).info.apply(_a, args);
        }
    };
    LogService.warn = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._level <= LogLevel_1.default.WARN) {
            (_a = this._logger).warn.apply(_a, args);
        }
    };
    LogService.error = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._level <= LogLevel_1.default.ERROR) {
            (_a = this._logger).error.apply(_a, args);
        }
    };
    LogService.createLogger = function (name) {
        return new ContextLogger_1.default(name, LogService);
    };
    LogService.Level = LogLevel_1.default;
    LogService._level = LogLevel_1.default.DEBUG;
    LogService._logger = console;
    return LogService;
}());
exports.LogService = LogService;
exports.default = LogService;
