"use strict";
// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyCsv = exports.stringifyCsvRow = exports.parseCsv = exports.parseCsvRow = exports.isCsv = exports.isCsvRow = void 0;
var lodash_1 = require("./modules/lodash");
function isCsvRow(value) {
    return lodash_1.isArrayOf(value, lodash_1.isString);
}
exports.isCsvRow = isCsvRow;
function isCsv(value) {
    return lodash_1.isArrayOf(value, isCsvRow);
}
exports.isCsv = isCsv;
/**
 *
 * @fixme Add support to parse quoted line breaks
 *
 * @param value
 * @param separator
 * @param quote
 * @param lineBreak
 */
function parseCsvRow(value, separator, quote, lineBreak) {
    if (separator === void 0) { separator = ','; }
    if (quote === void 0) { quote = '"'; }
    if (lineBreak === void 0) { lineBreak = '\n'; }
    if ((separator === null || separator === void 0 ? void 0 : separator.length) !== 1) {
        throw new TypeError("The separator must be exactly 1 character long: " + separator);
    }
    if ((quote === null || quote === void 0 ? void 0 : quote.length) !== 1) {
        throw new TypeError("The quote must be exactly 1 character long: " + quote);
    }
    if (isCsvRow(value)) {
        return value;
    }
    if (!lodash_1.isString(value)) {
        value = "" + value;
    }
    var pieces = [];
    var lastIndex = 0;
    while (lastIndex < value.length) {
        var nextIndex = value.indexOf(separator, lastIndex);
        if (nextIndex < 0) {
            pieces.push(value.substr(lastIndex));
            lastIndex = pieces.length;
            break;
        }
        var piece = value.substr(lastIndex, nextIndex - lastIndex);
        if (piece.length >= 2 && lodash_1.startsWith(piece, quote) && lodash_1.endsWith(piece, quote)) {
            piece = piece.substr(1, piece.length - 2).split(piece + piece).join(piece);
        }
        pieces.push(piece);
        lastIndex = nextIndex + 1;
    }
    return pieces;
}
exports.parseCsvRow = parseCsvRow;
/**
 *
 * @fixme Add support to detect if the input was just a single CsvRow
 * @fixme Add support to convert arrays with (JSON able) objects as Csv
 *
 * @param value
 * @param separator
 * @param quote
 * @param lineBreak
 */
function parseCsv(value, separator, quote, lineBreak) {
    if (separator === void 0) { separator = ','; }
    if (quote === void 0) { quote = '"'; }
    if (lineBreak === void 0) { lineBreak = '\n'; }
    if (isCsv(value)) {
        return value;
    }
    if (!lodash_1.isString(value)) {
        value = "" + value;
    }
    return lodash_1.map(lodash_1.split(value, lineBreak), function (item) { return parseCsvRow(item, separator, quote); });
}
exports.parseCsv = parseCsv;
function stringifyCsvRow(value, separator, quote, lineBreak) {
    if (separator === void 0) { separator = ','; }
    if (quote === void 0) { quote = '"'; }
    if (lineBreak === void 0) { lineBreak = '\n'; }
    return lodash_1.map(value, function (column) {
        if (column.length === 0)
            return column;
        if (column.indexOf(separator) >= 0 || (column[0] === quote)) {
            if (column.indexOf(quote) >= 0) {
                return "" + quote + column.split(quote).join(quote + quote) + quote;
            }
            else {
                return "" + quote + column + quote;
            }
        }
        else {
            return column;
        }
    }).join(separator);
}
exports.stringifyCsvRow = stringifyCsvRow;
/**
 * @param value
 * @param separator
 * @param quote
 * @param lineBreak
 */
function stringifyCsv(value, separator, quote, lineBreak) {
    if (separator === void 0) { separator = ','; }
    if (quote === void 0) { quote = '"'; }
    if (lineBreak === void 0) { lineBreak = '\n'; }
    return lodash_1.map(value, function (row) {
        return stringifyCsvRow(row, separator, quote, lineBreak);
    }).join(lineBreak);
}
exports.stringifyCsv = stringifyCsv;
