"use strict";
// Copyright (c) 2020 Sendanor. All rights reserved.
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
exports.ProcessUtils = void 0;
var lodash_1 = require("./modules/lodash");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var ProcessUtils = /** @class */ (function () {
    function ProcessUtils() {
    }
    ProcessUtils.getArguments = function () {
        return process.argv.slice(2);
    };
    ProcessUtils.parseEnvFileLine = function (obj, line) {
        if (line.indexOf('=') < 0) {
            if (line.length) {
                obj[line] = '';
            }
            return obj;
        }
        var parts = line.split('=');
        var key = parts.shift();
        key = lodash_1.trim(key);
        if (key.length) {
            obj[key] = parts.join('=').trim();
        }
        return obj;
    };
    ProcessUtils.parseEnvFile = function (file) {
        var input = fs_1.default.readFileSync(file, { encoding: "utf-8" });
        var rows = input.split('\n');
        return rows.reduce(ProcessUtils.parseEnvFileLine, {});
    };
    ProcessUtils.initEnvFromFile = function (file) {
        var params = ProcessUtils.parseEnvFile(file);
        process.env = __assign(__assign({}, params), process.env);
    };
    ProcessUtils.initEnvFromDefaultFiles = function () {
        var file = path_1.default.join(process.cwd(), '.env');
        if (fs_1.default.existsSync(file)) {
            ProcessUtils.initEnvFromFile(file);
        }
    };
    /**
     *
     * @param callback
     * @param errorHandler
     */
    ProcessUtils.setupDestroyHandler = function (callback, errorHandler) {
        var destroyed = false;
        var closeProcess = function () {
            try {
                if (destroyed)
                    return;
                destroyed = true;
                callback();
            }
            catch (err) {
                errorHandler(err);
            }
        };
        process.on('exit', closeProcess);
        process.on('SIGTERM', closeProcess);
        process.on('SIGINT', closeProcess);
        process.on('SIGUSR1', closeProcess);
        process.on('SIGUSR2', closeProcess);
        process.on('uncaughtException', closeProcess);
    };
    return ProcessUtils;
}());
exports.ProcessUtils = ProcessUtils;
exports.default = ProcessUtils;
