"use strict";
// Copyright (c) 2021. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsedCommandArgumentStatus = void 0;
var ParsedCommandArgumentStatus;
(function (ParsedCommandArgumentStatus) {
    ParsedCommandArgumentStatus[ParsedCommandArgumentStatus["OK"] = 0] = "OK";
    ParsedCommandArgumentStatus[ParsedCommandArgumentStatus["ERROR"] = 1] = "ERROR";
    ParsedCommandArgumentStatus[ParsedCommandArgumentStatus["HELP"] = 2] = "HELP";
    ParsedCommandArgumentStatus[ParsedCommandArgumentStatus["VERSION"] = 3] = "VERSION";
})(ParsedCommandArgumentStatus = exports.ParsedCommandArgumentStatus || (exports.ParsedCommandArgumentStatus = {}));
exports.default = ParsedCommandArgumentStatus;
