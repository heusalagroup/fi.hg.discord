"use strict";
// Copyright (c) 2021. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCommandArgumentType = void 0;
/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
function parseCommandArgumentType(value) {
    switch (value) {
        case "-h" /* HELP */:
        case "--help" /* HELP */:
        case 0 /* HELP */:
            return 0 /* HELP */;
        case "-v" /* VERSION */:
        case "--version" /* VERSION */:
        case 1 /* VERSION */:
            return 1 /* VERSION */;
        case "--" /* DISABLE_ARGUMENT_PARSING */:
        case 2 /* DISABLE_ARGUMENT_PARSING */:
            return 2 /* DISABLE_ARGUMENT_PARSING */;
    }
    return undefined;
}
exports.parseCommandArgumentType = parseCommandArgumentType;
