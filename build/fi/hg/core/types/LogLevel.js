"use strict";
// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseLogLevel = exports.stringifyLogLevel = exports.isLogLevel = exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
    LogLevel[LogLevel["NONE"] = 4] = "NONE";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
function isLogLevel(value) {
    switch (value) {
        case LogLevel.DEBUG:
        case LogLevel.INFO:
        case LogLevel.WARN:
        case LogLevel.ERROR:
        case LogLevel.NONE:
            return true;
        default:
            return false;
    }
}
exports.isLogLevel = isLogLevel;
function stringifyLogLevel(value) {
    switch (value) {
        case LogLevel.DEBUG: return 'DEBUG';
        case LogLevel.INFO: return 'INFO';
        case LogLevel.WARN: return 'WARN';
        case LogLevel.ERROR: return 'ERROR';
        case LogLevel.NONE: return 'NONE';
        default: return "Unknown:" + value;
    }
}
exports.stringifyLogLevel = stringifyLogLevel;
function parseLogLevel(value) {
    if (!value)
        return undefined;
    if (isLogLevel(value))
        return value;
    value = ("" + value).toUpperCase();
    switch (value) {
        case 'ALL':
        case 'DEBUG':
            return LogLevel.DEBUG;
        case 'INFO':
            return LogLevel.INFO;
        case 'WARN':
        case 'WARNING':
            return LogLevel.WARN;
        case 'ERR':
        case 'ERROR':
            return LogLevel.ERROR;
        case 'FALSE':
        case 'OFF':
        case 'QUIET':
        case 'SILENT':
        case 'NONE':
            return LogLevel.NONE;
        default:
            return undefined;
    }
}
exports.parseLogLevel = parseLogLevel;
exports.default = LogLevel;
