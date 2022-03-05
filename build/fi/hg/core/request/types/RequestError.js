"use strict";
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequestError = exports.createRequestError = exports.RequestError = void 0;
var RequestStatus_1 = require("./RequestStatus");
var RequestType_1 = __importDefault(require("./RequestType"));
var RequestError = /** @class */ (function (_super) {
    __extends(RequestError, _super);
    function RequestError(status, message, method, url, body) {
        var _newTarget = this.constructor;
        if (message === void 0) { message = undefined; }
        if (method === void 0) { method = undefined; }
        if (url === void 0) { url = undefined; }
        if (body === void 0) { body = undefined; }
        var _this = _super.call(this, message ? message : RequestStatus_1.stringifyRequestStatus(status)) || this;
        var actualProto = _newTarget.prototype;
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(_this, actualProto);
        }
        else {
            _this.__proto__ = actualProto;
        }
        _this.status = status;
        _this.method = method;
        _this.url = url;
        _this.body = body;
        return _this;
    }
    RequestError.prototype.valueOf = function () {
        return this.status;
    };
    RequestError.prototype.toString = function () {
        return this.status + " " + this.message;
    };
    RequestError.prototype.toJSON = function () {
        return {
            type: RequestType_1.default.ERROR,
            status: this.status,
            message: this.message
        };
    };
    RequestError.prototype.getStatusCode = function () {
        return this.status;
    };
    RequestError.prototype.getMethod = function () {
        return this.method;
    };
    RequestError.prototype.getUrl = function () {
        return this.url;
    };
    RequestError.prototype.getBody = function () {
        return this.body;
    };
    return RequestError;
}(Error));
exports.RequestError = RequestError;
function createRequestError(status, message) {
    if (message === void 0) { message = undefined; }
    return new RequestError(status, message);
}
exports.createRequestError = createRequestError;
function isRequestError(value) {
    return (!!value
        && value instanceof RequestError);
}
exports.isRequestError = isRequestError;
exports.default = RequestError;
