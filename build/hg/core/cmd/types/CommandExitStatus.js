"use strict";
// Copyright (c) 2021. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCommandExitStatus = exports.stringifyCommandExitStatus = exports.isCommandExitStatus = exports.CommandExitStatus = void 0;
var lodash_1 = require("../../modules/lodash");
var CommandExitStatus;
(function (CommandExitStatus) {
    /** Standard successful termination */
    CommandExitStatus[CommandExitStatus["OK"] = 0] = "OK";
    // From Advanced Bash scripting guide
    CommandExitStatus[CommandExitStatus["GENERAL_ERRORS"] = 1] = "GENERAL_ERRORS";
    CommandExitStatus[CommandExitStatus["MISUSE_OF_SHELL_BUILTINS"] = 2] = "MISUSE_OF_SHELL_BUILTINS";
    // Our custom errors
    CommandExitStatus[CommandExitStatus["ARGUMENT_PARSE_ERROR"] = 3] = "ARGUMENT_PARSE_ERROR";
    CommandExitStatus[CommandExitStatus["UNKNOWN_ARGUMENT"] = 4] = "UNKNOWN_ARGUMENT";
    CommandExitStatus[CommandExitStatus["UNIMPLEMENTED_FEATURE"] = 5] = "UNIMPLEMENTED_FEATURE";
    CommandExitStatus[CommandExitStatus["FATAL_ERROR"] = 6] = "FATAL_ERROR";
    CommandExitStatus[CommandExitStatus["CONFLICT"] = 7] = "CONFLICT";
    // From Linux sysexits.h
    CommandExitStatus[CommandExitStatus["USAGE"] = 64] = "USAGE";
    CommandExitStatus[CommandExitStatus["DATAERR"] = 65] = "DATAERR";
    CommandExitStatus[CommandExitStatus["NOINPUT"] = 66] = "NOINPUT";
    CommandExitStatus[CommandExitStatus["NOUSER"] = 67] = "NOUSER";
    CommandExitStatus[CommandExitStatus["NOHOST"] = 68] = "NOHOST";
    CommandExitStatus[CommandExitStatus["UNAVAILABLE"] = 69] = "UNAVAILABLE";
    CommandExitStatus[CommandExitStatus["SOFTWARE"] = 70] = "SOFTWARE";
    CommandExitStatus[CommandExitStatus["OSERR"] = 71] = "OSERR";
    CommandExitStatus[CommandExitStatus["OSFILE"] = 72] = "OSFILE";
    CommandExitStatus[CommandExitStatus["CANTCREAT"] = 73] = "CANTCREAT";
    CommandExitStatus[CommandExitStatus["IOERR"] = 74] = "IOERR";
    CommandExitStatus[CommandExitStatus["TEMPFAIL"] = 75] = "TEMPFAIL";
    CommandExitStatus[CommandExitStatus["PROTOCOL"] = 76] = "PROTOCOL";
    CommandExitStatus[CommandExitStatus["NOPERM"] = 77] = "NOPERM";
    CommandExitStatus[CommandExitStatus["CONFIG"] = 78] = "CONFIG";
    // From Advanced Bash scripting guide
    CommandExitStatus[CommandExitStatus["COMMAND_INVOKED_CANNOT_EXECUTE"] = 126] = "COMMAND_INVOKED_CANNOT_EXECUTE";
    CommandExitStatus[CommandExitStatus["COMMAND_NOT_FOUND"] = 127] = "COMMAND_NOT_FOUND";
    CommandExitStatus[CommandExitStatus["INVALID_ARGUMENT_TO_EXIT"] = 128] = "INVALID_ARGUMENT_TO_EXIT";
    CommandExitStatus[CommandExitStatus["FATAL_SIGNAL_RANGE_START"] = 129] = "FATAL_SIGNAL_RANGE_START";
    CommandExitStatus[CommandExitStatus["FATAL_SIGNAL_RANGE_END"] = 254] = "FATAL_SIGNAL_RANGE_END";
    CommandExitStatus[CommandExitStatus["EXIT_STATUS_OUT_OF_RANGE"] = 255] = "EXIT_STATUS_OUT_OF_RANGE";
})(CommandExitStatus = exports.CommandExitStatus || (exports.CommandExitStatus = {}));
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function isCommandExitStatus(value) {
    if (!lodash_1.isNumber(value))
        return false;
    if (value < 0)
        return false;
    if (value > 255)
        return false;
    if (value >= CommandExitStatus.FATAL_SIGNAL_RANGE_START
        && value <= CommandExitStatus.FATAL_SIGNAL_RANGE_END) {
        return true;
    }
    switch (value) {
        case CommandExitStatus.OK:
        case CommandExitStatus.GENERAL_ERRORS:
        case CommandExitStatus.MISUSE_OF_SHELL_BUILTINS:
        case CommandExitStatus.ARGUMENT_PARSE_ERROR:
        case CommandExitStatus.UNKNOWN_ARGUMENT:
        case CommandExitStatus.UNIMPLEMENTED_FEATURE:
        case CommandExitStatus.FATAL_ERROR:
        case CommandExitStatus.USAGE:
        case CommandExitStatus.DATAERR:
        case CommandExitStatus.NOINPUT:
        case CommandExitStatus.NOUSER:
        case CommandExitStatus.NOHOST:
        case CommandExitStatus.UNAVAILABLE:
        case CommandExitStatus.SOFTWARE:
        case CommandExitStatus.OSERR:
        case CommandExitStatus.OSFILE:
        case CommandExitStatus.CANTCREAT:
        case CommandExitStatus.IOERR:
        case CommandExitStatus.TEMPFAIL:
        case CommandExitStatus.PROTOCOL:
        case CommandExitStatus.NOPERM:
        case CommandExitStatus.CONFIG:
        case CommandExitStatus.COMMAND_INVOKED_CANNOT_EXECUTE:
        case CommandExitStatus.COMMAND_NOT_FOUND:
        case CommandExitStatus.INVALID_ARGUMENT_TO_EXIT:
        case CommandExitStatus.FATAL_SIGNAL_RANGE_START:
        case CommandExitStatus.FATAL_SIGNAL_RANGE_END:
        case CommandExitStatus.EXIT_STATUS_OUT_OF_RANGE:
        case CommandExitStatus.CONFLICT:
            return true;
        default:
            return false;
    }
}
exports.isCommandExitStatus = isCommandExitStatus;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function stringifyCommandExitStatus(value) {
    if (value >= CommandExitStatus.FATAL_SIGNAL_RANGE_START && value <= CommandExitStatus.FATAL_SIGNAL_RANGE_END) {
        return "FATAL_SIGNAL_" + (value - CommandExitStatus.FATAL_SIGNAL_RANGE_START);
    }
    switch (value) {
        case CommandExitStatus.OK: return 'OK';
        case CommandExitStatus.GENERAL_ERRORS: return 'GENERAL_ERRORS';
        case CommandExitStatus.MISUSE_OF_SHELL_BUILTINS: return 'MISUSE_OF_SHELL_BUILTINS';
        case CommandExitStatus.ARGUMENT_PARSE_ERROR: return 'ARGUMENT_PARSE_ERROR';
        case CommandExitStatus.UNKNOWN_ARGUMENT: return 'UNKNOWN_ARGUMENT';
        case CommandExitStatus.UNIMPLEMENTED_FEATURE: return 'UNIMPLEMENTED_FEATURE';
        case CommandExitStatus.FATAL_ERROR: return 'FATAL_ERROR';
        case CommandExitStatus.USAGE: return 'USAGE';
        case CommandExitStatus.DATAERR: return 'DATAERR';
        case CommandExitStatus.NOINPUT: return 'NOINPUT';
        case CommandExitStatus.NOUSER: return 'NOUSER';
        case CommandExitStatus.NOHOST: return 'NOHOST';
        case CommandExitStatus.UNAVAILABLE: return 'UNAVAILABLE';
        case CommandExitStatus.SOFTWARE: return 'SOFTWARE';
        case CommandExitStatus.OSERR: return 'OSERR';
        case CommandExitStatus.OSFILE: return 'OSFILE';
        case CommandExitStatus.CANTCREAT: return 'CANTCREAT';
        case CommandExitStatus.IOERR: return 'IOERR';
        case CommandExitStatus.TEMPFAIL: return 'TEMPFAIL';
        case CommandExitStatus.PROTOCOL: return 'PROTOCOL';
        case CommandExitStatus.NOPERM: return 'NOPERM';
        case CommandExitStatus.CONFIG: return 'CONFIG';
        case CommandExitStatus.COMMAND_INVOKED_CANNOT_EXECUTE: return 'COMMAND_INVOKED_CANNOT_EXECUTE';
        case CommandExitStatus.COMMAND_NOT_FOUND: return 'COMMAND_NOT_FOUND';
        case CommandExitStatus.INVALID_ARGUMENT_TO_EXIT: return 'INVALID_ARGUMENT_TO_EXIT';
        case CommandExitStatus.FATAL_SIGNAL_RANGE_START: return 'FATAL_SIGNAL_RANGE_START';
        case CommandExitStatus.FATAL_SIGNAL_RANGE_END: return 'FATAL_SIGNAL_RANGE_END';
        case CommandExitStatus.EXIT_STATUS_OUT_OF_RANGE: return 'EXIT_STATUS_OUT_OF_RANGE';
        case CommandExitStatus.CONFLICT: return 'CONFLICT';
    }
    throw new TypeError("Unsupported RunnerExitStatus value: " + value);
}
exports.stringifyCommandExitStatus = stringifyCommandExitStatus;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function parseCommandExitStatus(value) {
    if (value === undefined)
        return undefined;
    if (isCommandExitStatus(value))
        return value;
    var valueString = ("" + value).toUpperCase();
    if (lodash_1.startsWith(valueString, 'FATAL_SIGNAL_')) {
        var int = lodash_1.parseInteger(value.substr(0, 'FATAL_SIGNAL_'.length));
        if (int === undefined)
            return undefined;
        if (int >= 0 && int < (CommandExitStatus.FATAL_SIGNAL_RANGE_END - CommandExitStatus.FATAL_SIGNAL_RANGE_START)) {
            return int + CommandExitStatus.FATAL_SIGNAL_RANGE_START;
        }
        else {
            return undefined;
        }
    }
    switch (valueString) {
        case 'OK': return CommandExitStatus.OK;
        case 'GENERAL_ERRORS': return CommandExitStatus.GENERAL_ERRORS;
        case 'MISUSE_OF_SHELL_BUILTINS': return CommandExitStatus.MISUSE_OF_SHELL_BUILTINS;
        case 'ARGUMENT_PARSE_ERROR': return CommandExitStatus.ARGUMENT_PARSE_ERROR;
        case 'UNKNOWN_ARGUMENT': return CommandExitStatus.UNKNOWN_ARGUMENT;
        case 'UNIMPLEMENTED_FEATURE': return CommandExitStatus.UNIMPLEMENTED_FEATURE;
        case 'FATAL_ERROR': return CommandExitStatus.FATAL_ERROR;
        case 'USAGE': return CommandExitStatus.USAGE;
        case 'DATAERR': return CommandExitStatus.DATAERR;
        case 'NOINPUT': return CommandExitStatus.NOINPUT;
        case 'NOUSER': return CommandExitStatus.NOUSER;
        case 'NOHOST': return CommandExitStatus.NOHOST;
        case 'UNAVAILABLE': return CommandExitStatus.UNAVAILABLE;
        case 'SOFTWARE': return CommandExitStatus.SOFTWARE;
        case 'OSERR': return CommandExitStatus.OSERR;
        case 'OSFILE': return CommandExitStatus.OSFILE;
        case 'CANTCREAT': return CommandExitStatus.CANTCREAT;
        case 'IOERR': return CommandExitStatus.IOERR;
        case 'TEMPFAIL': return CommandExitStatus.TEMPFAIL;
        case 'PROTOCOL': return CommandExitStatus.PROTOCOL;
        case 'NOPERM': return CommandExitStatus.NOPERM;
        case 'CONFIG': return CommandExitStatus.CONFIG;
        case 'COMMAND_INVOKED_CANNOT_EXECUTE': return CommandExitStatus.COMMAND_INVOKED_CANNOT_EXECUTE;
        case 'COMMAND_NOT_FOUND': return CommandExitStatus.COMMAND_NOT_FOUND;
        case 'INVALID_ARGUMENT_TO_EXIT': return CommandExitStatus.INVALID_ARGUMENT_TO_EXIT;
        case 'FATAL_SIGNAL_RANGE_START': return CommandExitStatus.FATAL_SIGNAL_RANGE_START;
        case 'FATAL_SIGNAL_RANGE_END': return CommandExitStatus.FATAL_SIGNAL_RANGE_END;
        case 'EXIT_STATUS_OUT_OF_RANGE': return CommandExitStatus.EXIT_STATUS_OUT_OF_RANGE;
        case 'CONFLICT': return CommandExitStatus.CONFLICT;
        default:
            return undefined;
    }
}
exports.parseCommandExitStatus = parseCommandExitStatus;
exports.default = CommandExitStatus;
