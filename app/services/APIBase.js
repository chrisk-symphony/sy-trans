///<reference path="../../typings/node/node.d.ts"/>
///<reference path="../interfaces/ApiOptions.ts"/>
///<reference path="../interfaces/ApiHeaders.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Service_Base_1 = require('./../bases/Service-Base');
var btoa2 = require("btoa");
var APIBase = (function (_super) {
    __extends(APIBase, _super);
    function APIBase(apiOptions) {
        _super.call(this);
        var manageEnv = apiOptions.env || "manage";
        this.headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        this.baseUrl = "https://" + manageEnv + ".symphonycommerce.com";
        if (apiOptions.basicAuth) {
            this.headers["Authorization"] = apiOptions.basicAuth;
            return;
        }
        if (apiOptions.email && apiOptions.password) {
            this.headers["Authorization"] = "Basic " + btoa2(apiOptions.email + ":" + apiOptions.password);
            return;
        }
        if (apiOptions.sessionId) {
            this.headers["Cookie"] = "SPSESSIONID=" + apiOptions.sessionId;
            return;
        }
        if (apiOptions.cookieAuth) {
            this.headers["Cookie"] = apiOptions.cookieAuth;
            return;
        }
    }
    return APIBase;
}(Service_Base_1["default"]));
exports.__esModule = true;
exports["default"] = APIBase;
