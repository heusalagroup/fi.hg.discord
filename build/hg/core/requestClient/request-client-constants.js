"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.REQUEST_CLIENT_NODE_ENABLED = exports.REQUEST_CLIENT_FETCH_ENABLED = exports.NOR_REQUEST_CLIENT_MODE = void 0;
exports.NOR_REQUEST_CLIENT_MODE = (_d = (_b = (_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.NOR_REQUEST_CLIENT_MODE) !== null && _b !== void 0 ? _b : (_c = process === null || process === void 0 ? void 0 : process.env) === null || _c === void 0 ? void 0 : _c.REACT_APP_REQUEST_CLIENT_MODE) !== null && _d !== void 0 ? _d : '';
exports.REQUEST_CLIENT_FETCH_ENABLED = exports.NOR_REQUEST_CLIENT_MODE === 'WINDOW' ? true : !!(typeof window !== 'undefined' && window.fetch);
exports.REQUEST_CLIENT_NODE_ENABLED = exports.NOR_REQUEST_CLIENT_MODE === 'NODE' ? true : !exports.REQUEST_CLIENT_FETCH_ENABLED;
