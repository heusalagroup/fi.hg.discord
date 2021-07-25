"use strict";
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
exports.isResponseEntity = exports.ResponseEntity = exports.isEntityStatusType = void 0;
var RequestStatus_1 = __importStar(require("./types/RequestStatus"));
var lodash_1 = require("../modules/lodash");
var Headers_1 = __importStar(require("./Headers"));
var Json_1 = require("../Json");
var StringUtils_1 = __importDefault(require("../StringUtils"));
var RequestMethod_1 = require("./types/RequestMethod");
function isEntityStatusType(value) {
    return lodash_1.isNumber(value);
}
exports.isEntityStatusType = isEntityStatusType;
var ResponseEntity = /** @class */ (function () {
    function ResponseEntity(arg1, arg2, arg3) {
        var status;
        var headers;
        var body;
        if (isEntityStatusType(arg1) && !isEntityStatusType(arg2) && !isEntityStatusType(arg3)) {
            status = arg1;
            if (arg2 !== undefined)
                throw new TypeError('ResponseEntity signature is [body, ][headers, ]status');
            if (arg3 !== undefined)
                throw new TypeError('ResponseEntity signature is [body, ][headers, ]status');
        }
        else if (isEntityStatusType(arg2) && !isEntityStatusType(arg3)) {
            if (arg3 !== undefined)
                throw new TypeError('ResponseEntity signature is [body, ][headers, ]status');
            if (Headers_1.isHeaders(arg1)) {
                headers = arg1;
            }
            else {
                // @ts-ignore
                body = arg1;
            }
            status = arg2;
        }
        else if (isEntityStatusType(arg3)) {
            if (!Headers_1.isHeaders(arg2))
                throw new TypeError('ResponseEntity signature is [body, ][headers, ]status');
            // @ts-ignore
            body = arg1;
            headers = arg2;
            status = arg3;
        }
        else {
            throw new TypeError('ResponseEntity signature is [body, ][headers, ]status');
        }
        this._status = status;
        this._headers = headers !== null && headers !== void 0 ? headers : new Headers_1.default();
        this._body = body;
    }
    ResponseEntity.prototype.getStatusCode = function () {
        return this._status;
    };
    /**
     * In JavaScript, this is essentially same as .getStatusCode()
     */
    ResponseEntity.prototype.getStatusCodeValue = function () {
        return this._status;
    };
    ResponseEntity.prototype.status = function (value) {
        this._status = value;
        return this;
    };
    ResponseEntity.prototype.headers = function (value) {
        if (Headers_1.isHeaders(value)) {
            this._headers = value;
        }
        else {
            this._headers = new Headers_1.default(value);
        }
        return this;
    };
    ResponseEntity.prototype.body = function (value) {
        this._body = value;
        return this;
    };
    ResponseEntity.prototype.getHeaders = function () {
        return this._headers;
    };
    ResponseEntity.prototype.allow = function () {
        var methods = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            methods[_i] = arguments[_i];
        }
        var parsedMethods = lodash_1.map(methods, RequestMethod_1.parseRequestMethod);
        var stringMethods = lodash_1.map(parsedMethods, function (item) { return RequestMethod_1.stringifyRequestMethod(item).toUpperCase(); });
        this._headers.set('Allow', stringMethods.join(', '));
        return this;
    };
    ResponseEntity.prototype.hasBody = function () {
        return this._body !== undefined;
    };
    ResponseEntity.prototype.getBody = function () {
        if (this._body === undefined)
            throw new TypeError('No body');
        return this._body;
    };
    ResponseEntity.prototype.toString = function () {
        var status = RequestStatus_1.stringifyRequestStatus(this._status);
        var headersObject = this._headers;
        var headers = headersObject.isEmpty() ? '' : StringUtils_1.default.toString(headersObject);
        var body = this._body;
        if (body === undefined) {
            if (headers) {
                return "ResponseEntity(" + status + ", " + headers + ")";
            }
            else {
                return "ResponseEntity(" + status + ")";
            }
        }
        var bodyDisplayValue = '';
        if (Json_1.isReadonlyJsonAny(body)) {
            bodyDisplayValue = JSON.stringify(body, null, 2);
        }
        else {
            bodyDisplayValue = StringUtils_1.default.toString(body);
        }
        if (headers) {
            return "ResponseEntity(" + status + ", " + headers + ", Body(" + bodyDisplayValue + "))";
        }
        else {
            return "ResponseEntity(" + status + ", Body(" + bodyDisplayValue + "))";
        }
    };
    ResponseEntity.accepted = function () { return new ResponseEntity(RequestStatus_1.default.Accepted); };
    ResponseEntity.badRequest = function () { return new ResponseEntity(RequestStatus_1.default.BadRequest); };
    ResponseEntity.created = function (location) { return new ResponseEntity(new Headers_1.default({ "Location": location }), RequestStatus_1.default.Created); };
    ResponseEntity.noContent = function () { return new ResponseEntity(RequestStatus_1.default.NoContent); };
    ResponseEntity.notFound = function () { return new ResponseEntity(RequestStatus_1.default.NotFound); };
    ResponseEntity.notImplemented = function () { return new ResponseEntity(RequestStatus_1.default.NotImplemented); };
    ResponseEntity.internalServerError = function () { return new ResponseEntity(RequestStatus_1.default.InternalServerError); };
    ResponseEntity.methodNotAllowed = function () { return new ResponseEntity(RequestStatus_1.default.MethodNotAllowed); };
    ResponseEntity.unprocessableEntity = function () { return new ResponseEntity(RequestStatus_1.default.UnprocessableEntity); };
    ResponseEntity.ok = function (body) { return body ? new ResponseEntity(body, RequestStatus_1.default.OK) : new ResponseEntity(RequestStatus_1.default.OK); };
    return ResponseEntity;
}());
exports.ResponseEntity = ResponseEntity;
function isResponseEntity(value) {
    return !!value && value instanceof ResponseEntity;
}
exports.isResponseEntity = isResponseEntity;
exports.default = ResponseEntity;
