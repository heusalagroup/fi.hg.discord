"use strict";
// Copyright (c) 2020-2021 Sendanor. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRequestStatus = exports.stringifyRequestStatus = exports.isRequestStatus = exports.RequestStatus = void 0;
var lodash_1 = require("../../modules/lodash");
var RequestStatus;
(function (RequestStatus) {
    RequestStatus[RequestStatus["Continue"] = 100] = "Continue";
    RequestStatus[RequestStatus["SwitchingProtocols"] = 101] = "SwitchingProtocols";
    RequestStatus[RequestStatus["Processing"] = 102] = "Processing";
    RequestStatus[RequestStatus["CheckPoint"] = 103] = "CheckPoint";
    RequestStatus[RequestStatus["OK"] = 200] = "OK";
    RequestStatus[RequestStatus["Created"] = 201] = "Created";
    RequestStatus[RequestStatus["Accepted"] = 202] = "Accepted";
    RequestStatus[RequestStatus["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
    RequestStatus[RequestStatus["NoContent"] = 204] = "NoContent";
    RequestStatus[RequestStatus["ResetContent"] = 205] = "ResetContent";
    RequestStatus[RequestStatus["PartialContent"] = 206] = "PartialContent";
    RequestStatus[RequestStatus["MultiStatus"] = 207] = "MultiStatus";
    RequestStatus[RequestStatus["AlreadyReported"] = 208] = "AlreadyReported";
    RequestStatus[RequestStatus["IMUsed"] = 226] = "IMUsed";
    RequestStatus[RequestStatus["MultipleChoices"] = 300] = "MultipleChoices";
    RequestStatus[RequestStatus["MovedPermanently"] = 301] = "MovedPermanently";
    RequestStatus[RequestStatus["Found"] = 302] = "Found";
    RequestStatus[RequestStatus["SeeOther"] = 303] = "SeeOther";
    RequestStatus[RequestStatus["NotModified"] = 304] = "NotModified";
    RequestStatus[RequestStatus["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RequestStatus[RequestStatus["PermanentRedirect"] = 308] = "PermanentRedirect";
    RequestStatus[RequestStatus["BadRequest"] = 400] = "BadRequest";
    RequestStatus[RequestStatus["Unauthorized"] = 401] = "Unauthorized";
    RequestStatus[RequestStatus["PaymentRequired"] = 402] = "PaymentRequired";
    RequestStatus[RequestStatus["Forbidden"] = 403] = "Forbidden";
    RequestStatus[RequestStatus["NotFound"] = 404] = "NotFound";
    RequestStatus[RequestStatus["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    RequestStatus[RequestStatus["NotAcceptable"] = 406] = "NotAcceptable";
    RequestStatus[RequestStatus["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    RequestStatus[RequestStatus["RequestTimeout"] = 408] = "RequestTimeout";
    RequestStatus[RequestStatus["Conflict"] = 409] = "Conflict";
    RequestStatus[RequestStatus["Gone"] = 410] = "Gone";
    RequestStatus[RequestStatus["LengthRequired"] = 411] = "LengthRequired";
    RequestStatus[RequestStatus["PreconditionFailed"] = 412] = "PreconditionFailed";
    RequestStatus[RequestStatus["PayloadTooLarge"] = 413] = "PayloadTooLarge";
    RequestStatus[RequestStatus["URITooLong"] = 414] = "URITooLong";
    RequestStatus[RequestStatus["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
    RequestStatus[RequestStatus["RequestedRangeNotSatisfiable"] = 416] = "RequestedRangeNotSatisfiable";
    RequestStatus[RequestStatus["ExpectationFailed"] = 417] = "ExpectationFailed";
    RequestStatus[RequestStatus["IAmATeapot"] = 418] = "IAmATeapot";
    RequestStatus[RequestStatus["UnprocessableEntity"] = 422] = "UnprocessableEntity";
    RequestStatus[RequestStatus["Locked"] = 423] = "Locked";
    RequestStatus[RequestStatus["FailedDependency"] = 424] = "FailedDependency";
    RequestStatus[RequestStatus["TooEarly"] = 425] = "TooEarly";
    RequestStatus[RequestStatus["UpgradeRequired"] = 426] = "UpgradeRequired";
    RequestStatus[RequestStatus["PreconditionRequired"] = 428] = "PreconditionRequired";
    RequestStatus[RequestStatus["TooManyRequests"] = 429] = "TooManyRequests";
    RequestStatus[RequestStatus["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
    RequestStatus[RequestStatus["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
    /**
     * @deprecated Use RequestStatus.InternalServerError
     */
    RequestStatus[RequestStatus["InternalError"] = 500] = "InternalError";
    RequestStatus[RequestStatus["InternalServerError"] = 500] = "InternalServerError";
    RequestStatus[RequestStatus["NotImplemented"] = 501] = "NotImplemented";
    RequestStatus[RequestStatus["BadGateway"] = 502] = "BadGateway";
    RequestStatus[RequestStatus["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    RequestStatus[RequestStatus["GatewayTimeout"] = 504] = "GatewayTimeout";
    RequestStatus[RequestStatus["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
    RequestStatus[RequestStatus["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
    RequestStatus[RequestStatus["InsufficientStorage"] = 507] = "InsufficientStorage";
    RequestStatus[RequestStatus["LoopDetected"] = 508] = "LoopDetected";
    RequestStatus[RequestStatus["BandwidthLimitExceeded"] = 509] = "BandwidthLimitExceeded";
    RequestStatus[RequestStatus["NotExtended"] = 510] = "NotExtended";
    RequestStatus[RequestStatus["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
})(RequestStatus = exports.RequestStatus || (exports.RequestStatus = {}));
function isRequestStatus(value) {
    if (!lodash_1.isNumber(value))
        return false;
    switch (value) {
        case RequestStatus.Continue:
        case RequestStatus.SwitchingProtocols:
        case RequestStatus.Processing:
        case RequestStatus.CheckPoint:
        case RequestStatus.OK:
        case RequestStatus.Created:
        case RequestStatus.Accepted:
        case RequestStatus.NonAuthoritativeInformation:
        case RequestStatus.NoContent:
        case RequestStatus.ResetContent:
        case RequestStatus.PartialContent:
        case RequestStatus.MultiStatus:
        case RequestStatus.AlreadyReported:
        case RequestStatus.IMUsed:
        case RequestStatus.MultipleChoices:
        case RequestStatus.MovedPermanently:
        case RequestStatus.Found:
        case RequestStatus.SeeOther:
        case RequestStatus.NotModified:
        case RequestStatus.TemporaryRedirect:
        case RequestStatus.PermanentRedirect:
        case RequestStatus.BadRequest:
        case RequestStatus.Unauthorized:
        case RequestStatus.PaymentRequired:
        case RequestStatus.Forbidden:
        case RequestStatus.NotFound:
        case RequestStatus.MethodNotAllowed:
        case RequestStatus.NotAcceptable:
        case RequestStatus.ProxyAuthenticationRequired:
        case RequestStatus.RequestTimeout:
        case RequestStatus.Conflict:
        case RequestStatus.Gone:
        case RequestStatus.LengthRequired:
        case RequestStatus.PreconditionFailed:
        case RequestStatus.PayloadTooLarge:
        case RequestStatus.URITooLong:
        case RequestStatus.UnsupportedMediaType:
        case RequestStatus.RequestedRangeNotSatisfiable:
        case RequestStatus.ExpectationFailed:
        case RequestStatus.IAmATeapot:
        case RequestStatus.UnprocessableEntity:
        case RequestStatus.Locked:
        case RequestStatus.FailedDependency:
        case RequestStatus.TooEarly:
        case RequestStatus.UpgradeRequired:
        case RequestStatus.PreconditionRequired:
        case RequestStatus.TooManyRequests:
        case RequestStatus.RequestHeaderFieldsTooLarge:
        case RequestStatus.UnavailableForLegalReasons:
        case RequestStatus.InternalServerError:
        case RequestStatus.NotImplemented:
        case RequestStatus.BadGateway:
        case RequestStatus.ServiceUnavailable:
        case RequestStatus.GatewayTimeout:
        case RequestStatus.HttpVersionNotSupported:
        case RequestStatus.VariantAlsoNegotiates:
        case RequestStatus.InsufficientStorage:
        case RequestStatus.LoopDetected:
        case RequestStatus.BandwidthLimitExceeded:
        case RequestStatus.NotExtended:
        case RequestStatus.NetworkAuthenticationRequired:
            return true;
    }
    return false;
}
exports.isRequestStatus = isRequestStatus;
function stringifyRequestStatus(value) {
    switch (value) {
        case RequestStatus.Continue: return 'Continue';
        case RequestStatus.SwitchingProtocols: return 'Switching Protocols';
        case RequestStatus.Processing: return 'Processing';
        case RequestStatus.CheckPoint: return 'Check Point';
        case RequestStatus.OK: return 'OK';
        case RequestStatus.Created: return 'Created';
        case RequestStatus.Accepted: return 'Accepted';
        case RequestStatus.NonAuthoritativeInformation: return 'Non-Authoritative Information';
        case RequestStatus.NoContent: return 'No Content';
        case RequestStatus.ResetContent: return 'Reset Content';
        case RequestStatus.PartialContent: return 'Partial Content';
        case RequestStatus.MultiStatus: return 'Multi Status';
        case RequestStatus.AlreadyReported: return 'Already Reported';
        case RequestStatus.IMUsed: return 'IM Used';
        case RequestStatus.MultipleChoices: return 'Multiple Choices';
        case RequestStatus.MovedPermanently: return 'Moved Permanently';
        case RequestStatus.Found: return 'Found';
        case RequestStatus.SeeOther: return 'See Other';
        case RequestStatus.NotModified: return 'Not Modified';
        case RequestStatus.TemporaryRedirect: return 'Temporary Redirect';
        case RequestStatus.PermanentRedirect: return 'Permanent Redirect';
        case RequestStatus.BadRequest: return 'Bad Request';
        case RequestStatus.Unauthorized: return 'Unauthorized';
        case RequestStatus.PaymentRequired: return 'Payment Required';
        case RequestStatus.Forbidden: return 'Forbidden';
        case RequestStatus.NotFound: return 'Not Found';
        case RequestStatus.MethodNotAllowed: return 'Method Not Allowed';
        case RequestStatus.NotAcceptable: return 'Not Acceptable';
        case RequestStatus.ProxyAuthenticationRequired: return 'Proxy Authentication Required';
        case RequestStatus.RequestTimeout: return 'Request Timeout';
        case RequestStatus.Conflict: return 'Conflict';
        case RequestStatus.Gone: return 'Gone';
        case RequestStatus.LengthRequired: return 'Length Required';
        case RequestStatus.PreconditionFailed: return 'Precondition Failed';
        case RequestStatus.PayloadTooLarge: return 'Payload Too Large';
        case RequestStatus.URITooLong: return 'URI Too Long';
        case RequestStatus.UnsupportedMediaType: return 'Unsupported Media Type';
        case RequestStatus.RequestedRangeNotSatisfiable: return 'Requested Range Not Satisfiable';
        case RequestStatus.ExpectationFailed: return 'Expectation Failed';
        case RequestStatus.IAmATeapot: return 'I Am a Teapot';
        case RequestStatus.UnprocessableEntity: return 'Unprocessable Entity';
        case RequestStatus.Locked: return 'Locked';
        case RequestStatus.FailedDependency: return 'Failed Dependency';
        case RequestStatus.TooEarly: return 'Too Early';
        case RequestStatus.UpgradeRequired: return 'Upgrade Required';
        case RequestStatus.PreconditionRequired: return 'Precondition Required';
        case RequestStatus.TooManyRequests: return 'Too Many Requests';
        case RequestStatus.RequestHeaderFieldsTooLarge: return 'Request Header Fields Too Large';
        case RequestStatus.UnavailableForLegalReasons: return 'Unavailable For Legal Reasons';
        case RequestStatus.InternalServerError: return 'Internal Server Error';
        case RequestStatus.NotImplemented: return 'Not Implemented';
        case RequestStatus.BadGateway: return 'Bad Gateway';
        case RequestStatus.ServiceUnavailable: return 'Service Unavailable';
        case RequestStatus.GatewayTimeout: return 'Gateway Timeout';
        case RequestStatus.HttpVersionNotSupported: return 'Http Version Not Supported';
        case RequestStatus.VariantAlsoNegotiates: return 'Variant Also Negotiates';
        case RequestStatus.InsufficientStorage: return 'Insufficient Storage';
        case RequestStatus.LoopDetected: return 'Loop Detected';
        case RequestStatus.BandwidthLimitExceeded: return 'Bandwidth Limit Exceeded';
        case RequestStatus.NotExtended: return 'Not Extended';
        case RequestStatus.NetworkAuthenticationRequired: return 'Network Authentication Required';
        default:
            if (value < 400)
                return 'HTTP Status';
            return 'HTTP Error';
    }
}
exports.stringifyRequestStatus = stringifyRequestStatus;
function parseRequestStatus(value) {
    if (isRequestStatus(value))
        return value;
    if (lodash_1.isString(value)) {
        value = lodash_1.trim(value);
        var integerValue = parseInt(value, 10);
        if (isRequestStatus(integerValue))
            return integerValue;
        value = normaliseStatusString(value);
        var statusKey = lodash_1.find(lodash_1.keys(RequestStatus), function (key) {
            // @ts-ignore
            var item = RequestStatus[key];
            return normaliseStatusString(stringifyRequestStatus(item)) === value;
        });
        if (statusKey) {
            // @ts-ignore
            return RequestStatus[statusKey];
        }
    }
    throw new TypeError("Cannot parse value \"" + value + "\" as a valid RequestStatus");
}
exports.parseRequestStatus = parseRequestStatus;
function normaliseStatusString(value) {
    return value.toLowerCase().replace(/[ _-]+/g, "-");
}
exports.default = RequestStatus;
