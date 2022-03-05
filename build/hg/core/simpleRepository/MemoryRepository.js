"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryRepository = void 0;
var crypto_1 = __importDefault(require("crypto"));
var lodash_1 = require("../modules/lodash");
/**
 * Saves objects of type T in memory.
 *
 * Intended to be used for development purposes.
 *
 * See also
 * [MatrixCrudRepository](https://github.com/sendanor/matrix/blob/main/MatrixCrudRepository.ts)
 */
var MemoryRepository = /** @class */ (function () {
    /**
     *
     * @param members Array of members to add in any item created
     */
    function MemoryRepository(members) {
        if (members === void 0) { members = []; }
        this._members = lodash_1.concat([], members);
        this._items = [];
    }
    MemoryRepository.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, lodash_1.map(this._items, function (item) { return ({
                        id: item.id,
                        version: item.version,
                        data: item.data,
                        deleted: item.deleted,
                        members: undefined
                    }); })];
            });
        });
    };
    MemoryRepository.prototype.getAllByProperty = function (propertyName, propertyValue) {
        return __awaiter(this, void 0, void 0, function () {
            var items, filteredItems;
            return __generator(this, function (_a) {
                items = this._items;
                filteredItems = lodash_1.filter(items, function (item) { return lodash_1.get(item === null || item === void 0 ? void 0 : item.data, propertyName) === propertyValue; });
                return [2 /*return*/, lodash_1.map(filteredItems, function (item) { return ({
                        id: item.id,
                        version: item.version,
                        data: item.data,
                        deleted: item.deleted,
                        members: undefined
                    }); })];
            });
        });
    };
    MemoryRepository.prototype.createItem = function (data, members) {
        if (members === void 0) { members = []; }
        return __awaiter(this, void 0, void 0, function () {
            var id, existingItem, item;
            return __generator(this, function (_a) {
                id = MemoryRepository._createId();
                existingItem = lodash_1.find(this._items, function (item) { return item.id === id; });
                if (existingItem)
                    throw new Error("ID \"" + id + "\" was not unique");
                item = {
                    id: MemoryRepository._createId(),
                    version: 1,
                    data: data,
                    deleted: false,
                    members: lodash_1.uniq(lodash_1.concat([], members ? members : [], this._members))
                };
                this._items.push(item);
                return [2 /*return*/, {
                        id: item.id,
                        version: item.version,
                        data: item.data,
                        deleted: item.deleted,
                        members: item.members ? lodash_1.map(item.members, function (id) { return ({ id: id }); }) : undefined
                    }];
            });
        });
    };
    MemoryRepository.prototype.findById = function (id, includeMembers) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_b) {
                item = lodash_1.find(this._items, function (form) { return form.id === id; });
                if (item === undefined)
                    return [2 /*return*/, undefined];
                return [2 /*return*/, {
                        id: item.id,
                        version: item.version,
                        data: item.data,
                        deleted: item.deleted,
                        members: includeMembers && ((_a = item.members) === null || _a === void 0 ? void 0 : _a.length) ? lodash_1.map(item.members, function (id) { return ({ id: id }); }) : undefined
                    }];
            });
        });
    };
    MemoryRepository.prototype.waitById = function (id, includeMembers, timeout) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // FIXME: Implement real long polling
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            resolve(_this.findById(id, includeMembers));
                        }, timeout !== null && timeout !== void 0 ? timeout : 4000);
                    })];
            });
        });
    };
    MemoryRepository.prototype.update = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var itemIndex, prevItem, nextItem;
            return __generator(this, function (_a) {
                itemIndex = lodash_1.findIndex(this._items, function (item) { return item.id === id; });
                if (itemIndex < 0)
                    throw new TypeError("No item found: " + id);
                prevItem = this._items[itemIndex];
                nextItem = __assign(__assign({}, prevItem), { version: prevItem.version + 1, data: data });
                this._items[itemIndex] = nextItem;
                return [2 /*return*/, {
                        id: nextItem.id,
                        version: nextItem.version,
                        data: nextItem.data,
                        deleted: nextItem.deleted,
                        members: undefined
                    }];
            });
        });
    };
    MemoryRepository.prototype.deleteById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var items, item;
            return __generator(this, function (_a) {
                items = lodash_1.remove(this._items, function (item) { return item.id === id; });
                item = items.shift();
                if (item === undefined) {
                    throw new TypeError("Could not find item: " + id);
                }
                return [2 /*return*/, {
                        id: item.id,
                        data: item.data,
                        version: item.version + 1,
                        deleted: true,
                        members: undefined
                    }];
            });
        });
    };
    MemoryRepository.prototype.inviteToItem = function (id, members) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var itemIndex, prevItem, prevMembers, nextItem;
            return __generator(this, function (_c) {
                itemIndex = lodash_1.findIndex(this._items, function (item) { return item.id === id; });
                if (itemIndex < 0)
                    throw new TypeError("No item found: " + id);
                prevItem = this._items[itemIndex];
                prevMembers = (_a = prevItem === null || prevItem === void 0 ? void 0 : prevItem.members) !== null && _a !== void 0 ? _a : [];
                nextItem = __assign(__assign({}, prevItem), { invited: lodash_1.filter(lodash_1.uniq(lodash_1.concat([], (_b = prevItem === null || prevItem === void 0 ? void 0 : prevItem.invited) !== null && _b !== void 0 ? _b : [], members)), function (item) { return !prevMembers.includes(item); }) });
                this._items[itemIndex] = nextItem;
                return [2 /*return*/];
            });
        });
    };
    MemoryRepository.prototype.subscribeToItem = function (id) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var itemIndex, prevItem, prevMembers, prevInvited, nextItem;
            return __generator(this, function (_c) {
                itemIndex = lodash_1.findIndex(this._items, function (item) { return item.id === id; });
                if (itemIndex < 0)
                    throw new TypeError("No item found: " + id);
                prevItem = this._items[itemIndex];
                prevMembers = (_a = prevItem === null || prevItem === void 0 ? void 0 : prevItem.members) !== null && _a !== void 0 ? _a : [];
                prevInvited = (_b = prevItem === null || prevItem === void 0 ? void 0 : prevItem.invited) !== null && _b !== void 0 ? _b : [];
                nextItem = __assign(__assign({}, prevItem), { members: lodash_1.concat(prevMembers, prevInvited), invited: [] });
                this._items[itemIndex] = nextItem;
                return [2 /*return*/];
            });
        });
    };
    MemoryRepository._createId = function () {
        return crypto_1.default.randomBytes(20).toString('hex');
    };
    return MemoryRepository;
}());
exports.MemoryRepository = MemoryRepository;
exports.default = MemoryRepository;
