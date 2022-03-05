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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchRequestClient = void 0;
var RequestMethod_1 = __importStar(require("../../request/types/RequestMethod"));
var RequestError_1 = __importDefault(require("../../request/types/RequestError"));
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
        return this._fetch(url, options).then(function (response) { return FetchRequestClient._successResponse(response, RequestMethod_1.default.GET); });
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
        return this._fetch(url, options).then(function (response) { return FetchRequestClient._successResponse(response, RequestMethod_1.default.PUT); });
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
        return this._fetch(url, options).then(function (response) { return FetchRequestClient._successResponse(response, RequestMethod_1.default.POST); });
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
        return this._fetch(url, options).then(function (response) { return FetchRequestClient._successResponse(response, RequestMethod_1.default.DELETE); });
    };
    FetchRequestClient._successResponse = function (response, method) {
        var statusCode = response.status;
        if (!response.ok || (statusCode < 200 || statusCode >= 400)) {
            var url_1 = response.url;
            var message_1 = statusCode + " " + response.statusText + " for " + RequestMethod_1.stringifyRequestMethod(method) + " " + url_1;
            //LOG.error(`Unsuccessful response with status ${statusCode}: `, response);
            return response.json().then(function (body) {
                throw new RequestError_1.default(statusCode, message_1, method, url_1, body);
            });
        }
        return response.json();
    };
    return FetchRequestClient;
}());
exports.FetchRequestClient = FetchRequestClient;
exports.default = FetchRequestClient;
