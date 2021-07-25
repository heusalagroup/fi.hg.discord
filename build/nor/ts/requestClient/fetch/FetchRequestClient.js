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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchRequestClient = void 0;
var RequestMethod_1 = __importDefault(require("../../request/types/RequestMethod"));
var FetchRequestClient = /** @class */ (function () {
    function FetchRequestClient(fetch) {
        this._fetch = fetch;
    }
    FetchRequestClient.prototype.jsonRequest = function (method, url, headers, data) {
        switch (method) {
            case RequestMethod_1.default.GET: return this._getJson(url, headers, data);
            case RequestMethod_1.default.POST: return this._postJson(url, headers, data);
            case RequestMethod_1.default.PUT: return this._putJson(url, headers, data);
            case RequestMethod_1.default.DELETE: return this._deleteJson(url, headers, data);
            default: throw new TypeError("[Fetch]RequestClient: Unsupported method: " + method);
        }
    };
    FetchRequestClient.prototype._getJson = function (url, headers, data) {
        var options = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        };
        if (headers) {
            options.headers = __assign(__assign({}, options.headers), headers);
        }
        if (data) {
            options.body = JSON.stringify(data);
        }
        return this._fetch(url, options).then(FetchRequestClient._successResponse);
    };
    FetchRequestClient.prototype._putJson = function (url, headers, data) {
        var options = {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        };
        if (headers) {
            options.headers = __assign(__assign({}, options.headers), headers);
        }
        if (data) {
            options.body = JSON.stringify(data);
        }
        return this._fetch(url, options).then(FetchRequestClient._successResponse);
    };
    FetchRequestClient.prototype._postJson = function (url, headers, data) {
        var options = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        };
        if (headers) {
            options.headers = __assign(__assign({}, options.headers), headers);
        }
        if (data) {
            options.body = JSON.stringify(data);
        }
        return this._fetch(url, options).then(FetchRequestClient._successResponse);
    };
    FetchRequestClient.prototype._deleteJson = function (url, headers, data) {
        var options = {
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        };
        if (headers) {
            options.headers = __assign(__assign({}, options.headers), headers);
        }
        if (data) {
            options.body = JSON.stringify(data);
        }
        return this._fetch(url, options).then(FetchRequestClient._successResponse);
    };
    FetchRequestClient._successResponse = function (response) {
        if (!response.ok) {
            throw new Error('Response was not OK');
        }
        return response.json();
    };
    return FetchRequestClient;
}());
exports.FetchRequestClient = FetchRequestClient;
exports.default = FetchRequestClient;
