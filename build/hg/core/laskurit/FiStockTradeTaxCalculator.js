"use strict";
// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiStockTradeTaxCalculator = void 0;
var LogService_1 = __importDefault(require("../LogService"));
var TAX_FREE_LIMIT = 1000;
var TRANSFER_TAX_PERCENT = 0.016;
var TAX_RELIEF_LIMIT = 30000;
var CAPITAL_INCOME_TAX_PERCENT_BELOW_RELIEF = 0.30;
var CAPITAL_INCOME_TAX_PERCENT_ABOVE_RELIEF = 0.34;
var TAX_BASIS_AFTER_10_YEARS = 0.40;
var TAX_BASIS_STANDARD = 0.20;
var LOG = LogService_1.default.createLogger('FiStockTradeTaxCalculator');
var FiStockTradeTaxCalculator = /** @class */ (function () {
    function FiStockTradeTaxCalculator() {
    }
    FiStockTradeTaxCalculator.calculate = function (kauppaSummaValue, hankintaHintaValue, hankintaVarainsiirtoVeroValue, valitysPalkkioValue, ostinOsakkeet, yli10Years) {
        var isTaxFree = kauppaSummaValue <= TAX_FREE_LIMIT;
        var hankintaHintaOlettamaOsuus = yli10Years ? TAX_BASIS_AFTER_10_YEARS : TAX_BASIS_STANDARD;
        var hankintaHintaOlettama = kauppaSummaValue * hankintaHintaOlettamaOsuus;
        var hankintaKulut = ostinOsakkeet ? hankintaHintaValue + hankintaVarainsiirtoVeroValue + valitysPalkkioValue : hankintaHintaValue;
        var veroVahennys = hankintaHintaOlettama > hankintaKulut ? hankintaHintaOlettama : hankintaKulut;
        var verotettavaSumma = isTaxFree ? 0 : (kauppaSummaValue >= veroVahennys ? kauppaSummaValue - veroVahennys : 0);
        var yli30k = verotettavaSumma >= TAX_RELIEF_LIMIT;
        var ali30kSumma = yli30k ? TAX_RELIEF_LIMIT : verotettavaSumma;
        var yli30kSumma = yli30k ? verotettavaSumma - TAX_RELIEF_LIMIT : 0;
        var vero30pSumma = ali30kSumma * CAPITAL_INCOME_TAX_PERCENT_BELOW_RELIEF;
        var vero34pSumma = yli30kSumma * CAPITAL_INCOME_TAX_PERCENT_ABOVE_RELIEF;
        var veronSumma = vero30pSumma + vero34pSumma;
        var kauppaSummaNetto = kauppaSummaValue - veronSumma;
        var varainSiirtoVero = kauppaSummaValue * TRANSFER_TAX_PERCENT;
        return {
            kauppaSummaBrutto: kauppaSummaValue,
            hankintaHintaOlettama: hankintaHintaOlettama,
            hankintaHintaOlettamaOsuus: hankintaHintaOlettamaOsuus,
            hankintaKulut: hankintaKulut,
            veroVahennys: veroVahennys,
            verotettavaSumma: verotettavaSumma,
            yli30k: yli30k,
            ali30kSumma: ali30kSumma,
            yli30kSumma: yli30kSumma,
            vero30pSumma: vero30pSumma,
            vero34pSumma: vero34pSumma,
            veronSumma: veronSumma,
            kauppaSummaNetto: kauppaSummaNetto,
            varainSiirtoVero: varainSiirtoVero
        };
    };
    FiStockTradeTaxCalculator.reverseCalculate = function (kauppaSummaNetto, hankintaHintaValue, hankintaVarainsiirtoVeroValue, valitysPalkkioValue, ostinOsakkeet, yli10Years) {
        var minBruttoRange = kauppaSummaNetto;
        var maxBruttoRange = kauppaSummaNetto / (1 - CAPITAL_INCOME_TAX_PERCENT_ABOVE_RELIEF);
        LOG.debug("range: " + minBruttoRange + " - " + maxBruttoRange);
        var result = undefined;
        var current = minBruttoRange;
        for (; current <= maxBruttoRange; current += 0.01) {
            result = FiStockTradeTaxCalculator.calculate(current, hankintaHintaValue, hankintaVarainsiirtoVeroValue, valitysPalkkioValue, ostinOsakkeet, yli10Years);
            if (Math.round(result.kauppaSummaNetto * 100) === Math.round(kauppaSummaNetto * 100)) {
                LOG.debug("Match found: ", result);
                return result;
            }
        }
        LOG.debug("End of loop reached: ", result);
        return undefined;
    };
    return FiStockTradeTaxCalculator;
}());
exports.FiStockTradeTaxCalculator = FiStockTradeTaxCalculator;
exports.default = FiStockTradeTaxCalculator;
