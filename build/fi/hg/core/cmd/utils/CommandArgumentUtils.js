"use strict";
// Copyright (c) 2021. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandArgumentUtils = void 0;
var CommandExitStatus_1 = __importDefault(require("../types/CommandExitStatus"));
var CommandArgumentType_1 = require("../types/CommandArgumentType");
var lodash_1 = require("../../modules/lodash");
var ParsedCommandArgumentStatus_1 = require("../types/ParsedCommandArgumentStatus");
var CommandArgumentUtils = /** @class */ (function () {
    function CommandArgumentUtils() {
    }
    CommandArgumentUtils.parseArguments = function (defaultScriptName, args) {
        var _a, _b;
        if (args === void 0) { args = []; }
        var nodePath = (_a = args.shift()) !== null && _a !== void 0 ? _a : '';
        var scriptNameFromArgs = (_b = args.shift()) !== null && _b !== void 0 ? _b : '';
        if (!scriptNameFromArgs) {
            return {
                parseStatus: ParsedCommandArgumentStatus_1.ParsedCommandArgumentStatus.ERROR,
                exitStatus: CommandExitStatus_1.default.ARGUMENT_PARSE_ERROR,
                nodePath: nodePath,
                scriptName: defaultScriptName,
                freeArgs: [],
                extraArgs: []
            };
        }
        if (args.length === 0) {
            return {
                parseStatus: ParsedCommandArgumentStatus_1.ParsedCommandArgumentStatus.ERROR,
                exitStatus: CommandExitStatus_1.default.ARGUMENT_PARSE_ERROR,
                nodePath: nodePath,
                scriptName: scriptNameFromArgs,
                freeArgs: [],
                extraArgs: []
            };
        }
        var parsingArgs = true;
        var freeArgs = [];
        var extraArgs = [];
        do {
            var argName = args.shift();
            if (parsingArgs) {
                var argType = CommandArgumentType_1.parseCommandArgumentType(argName);
                switch (argType) {
                    case 0 /* HELP */:
                        return {
                            parseStatus: ParsedCommandArgumentStatus_1.ParsedCommandArgumentStatus.HELP,
                            exitStatus: CommandExitStatus_1.default.OK,
                            nodePath: nodePath,
                            scriptName: scriptNameFromArgs,
                            freeArgs: freeArgs,
                            extraArgs: extraArgs
                        };
                    case 1 /* VERSION */:
                        return {
                            parseStatus: ParsedCommandArgumentStatus_1.ParsedCommandArgumentStatus.VERSION,
                            exitStatus: CommandExitStatus_1.default.OK,
                            nodePath: nodePath,
                            scriptName: scriptNameFromArgs,
                            freeArgs: freeArgs,
                            extraArgs: extraArgs
                        };
                    case 2 /* DISABLE_ARGUMENT_PARSING */:
                        parsingArgs = false;
                        break;
                    default:
                        if (parsingArgs) {
                            if (lodash_1.startsWith(argName, '-')) {
                                return {
                                    errorString: "Unknown argument: " + argName,
                                    parseStatus: ParsedCommandArgumentStatus_1.ParsedCommandArgumentStatus.ERROR,
                                    exitStatus: CommandExitStatus_1.default.UNKNOWN_ARGUMENT,
                                    nodePath: nodePath,
                                    scriptName: scriptNameFromArgs,
                                    freeArgs: freeArgs,
                                    extraArgs: extraArgs
                                };
                            }
                            freeArgs.push(argName);
                        }
                        else {
                            extraArgs.push(argName);
                        }
                        break;
                }
            }
        } while (args.length >= 1);
        return {
            parseStatus: ParsedCommandArgumentStatus_1.ParsedCommandArgumentStatus.OK,
            exitStatus: CommandExitStatus_1.default.OK,
            nodePath: nodePath,
            scriptName: scriptNameFromArgs,
            freeArgs: freeArgs,
            extraArgs: extraArgs
        };
    };
    return CommandArgumentUtils;
}());
exports.CommandArgumentUtils = CommandArgumentUtils;
exports.default = CommandArgumentUtils;
