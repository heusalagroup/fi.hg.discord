"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestClient = exports.HTTPS = exports.HTTP = void 0;
var RequestMethod_1 = __importDefault(require("./request/types/RequestMethod"));
var LogService_1 = __importDefault(require("./LogService"));
var request_client_constants_1 = require("./requestClient/request-client-constants");
var NodeRequestClient_1 = __importDefault(require("./requestClient/node/NodeRequestClient"));
var FetchRequestClient_1 = __importDefault(require("./requestClient/fetch/FetchRequestClient"));
exports.HTTP = request_client_constants_1.REQUEST_CLIENT_NODE_ENABLED ? require('http') : undefined;
exports.HTTPS = request_client_constants_1.REQUEST_CLIENT_NODE_ENABLED ? require('https') : undefined;
var LOG = LogService_1.default.createLogger('RequestClient');
var RequestClient = /** @class */ (function () {
    function RequestClient() {
    }
    RequestClient.jsonRequest = function (method, url, headers, data) {
        return this._client.jsonRequest(method, url, headers, data);
    };
    RequestClient.getJson = function (url, headers) {
        LOG.debug('.getJson: ', url, headers);
        return this._client.jsonRequest(RequestMethod_1.default.GET, url, headers);
    };
    RequestClient.postJson = function (url, data, headers) {
        LOG.debug('.postJson: ', url, data, headers);
        return this._client.jsonRequest(RequestMethod_1.default.POST, url, headers, data);
    };
    RequestClient.patchJson = function (url, data, headers) {
        LOG.debug('.patchJson: ', url, data, headers);
        return this._client.jsonRequest(RequestMethod_1.default.PATCH, url, headers, data);
    };
    RequestClient.putJson = function (url, data, headers) {
        LOG.debug('.putJson: ', url, data, headers);
        return this._client.jsonRequest(RequestMethod_1.default.PUT, url, headers, data);
    };
    RequestClient.deleteJson = function (url, headers, data) {
        LOG.debug('.deleteJson: ', url, data, headers);
        return this._client.jsonRequest(RequestMethod_1.default.DELETE, url, headers, data);
    };
    RequestClient._initClient = function () {
        if (request_client_constants_1.REQUEST_CLIENT_FETCH_ENABLED) {
            LOG.debug('Detected browser environment');
            return new FetchRequestClient_1.default(window.fetch.bind(window));
        }
        if (request_client_constants_1.REQUEST_CLIENT_NODE_ENABLED) {
            LOG.debug('Detected NodeJS environment');
            return new NodeRequestClient_1.default(exports.HTTP, exports.HTTPS);
        }
        throw new TypeError("Could not detect request client implementation");
    };
    RequestClient._client = RequestClient._initClient();
    return RequestClient;
}());
exports.RequestClient = RequestClient;
exports.default = RequestClient;
