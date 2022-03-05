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
var LogService_1 = __importDefault(require("./LogService"));
var LOG = LogService_1.default.createLogger('ProcessUtils');
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
        var closeProcessInternal = function () {
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
        var closeProcess = function (reason) {
            return function (err) {
                ProcessUtils._printErrors(reason, err);
                closeProcessInternal();
            };
        };
        process.on('exit', closeProcess('exit'));
        process.on('SIGTERM', closeProcess('SIGTERM'));
        process.on('SIGINT', closeProcess('SIGINT'));
        process.on('SIGUSR1', closeProcess('SIGUSR1'));
        process.on('SIGUSR2', closeProcess('SIGUSR2'));
        process.on('uncaughtException', closeProcess('uncaughtException'));
    };
    ProcessUtils._printErrors = function (reason, err) {
        try {
            if (err) {
                LOG.error("Closing process because \"" + reason + "\" event: ", err);
            }
            else {
                if (reason === "exit") {
                    LOG.debug("Closing process because \"" + reason + "\" event");
                }
                else {
                    LOG.info("Closing process because \"" + reason + "\" event");
                }
            }
        }
        catch (err2) {
            console.error('Error while printing errors: ', err2);
        }
    };
    return ProcessUtils;
}());
exports.ProcessUtils = ProcessUtils;
exports.default = ProcessUtils;
