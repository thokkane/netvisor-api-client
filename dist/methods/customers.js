"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetvisorCustomerMethod = void 0;
var _method_1 = require("./_method");
var xml2js = __importStar(require("xml2js"));
var js2xmlparser = __importStar(require("js2xmlparser"));
var NetvisorCustomerMethod = /** @class */ (function (_super) {
    __extends(NetvisorCustomerMethod, _super);
    function NetvisorCustomerMethod(client) {
        var _this = _super.call(this, client) || this;
        _this._endpointUri = 'customer.nv';
        return _this;
    }
    /**
     * Save one customer as customer object
     * @param dataset as ICustomer
     * @param params as parameters with {method: add}
     * if editing customer {method: add/edit, id: netvisorkey}
     */
    NetvisorCustomerMethod.prototype.saveCustomerByDataSet = function (dataset, params) {
        return __awaiter(this, void 0, void 0, function () {
            var xml;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        xml = js2xmlparser.parse('Root', dataset);
                        return [4 /*yield*/, this._client.post(this._endpointUri, xml.replace("<?xml version='1.0'?>", ''), params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get customers from Netvisor
     * @param params to narrow search with keyword or netvisor key
     */
    NetvisorCustomerMethod.prototype.getCustomers = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var customersRaw, parser, customerList, customers, _i, customerList_1, item, customer;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.get('customerlist.nv', params)];
                    case 1:
                        customersRaw = _a.sent();
                        parser = new xml2js.Parser();
                        return [4 /*yield*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    parser.parseString(customersRaw, function (error, xmlResult) {
                                        if (error)
                                            return reject(error);
                                        var status = xmlResult.Root.ResponseStatus[0].Status;
                                        var json = xmlResult.Root.Customerlist[0].Customer;
                                        if (status[0] === 'OK') {
                                            resolve(json);
                                        }
                                        else {
                                            reject(status[1]);
                                        }
                                    });
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 2:
                        customerList = _a.sent();
                        // customerList returns undefined if no customers in search criteria
                        if (!customerList) {
                            return [2 /*return*/, []];
                        }
                        customers = [];
                        for (_i = 0, customerList_1 = customerList; _i < customerList_1.length; _i++) {
                            item = customerList_1[_i];
                            customer = {
                                netvisorKey: item.Netvisorkey[0],
                                name: item.Name[0],
                                code: item.Code[0],
                                externalidentifier: item.OrganisationIdentifier[0],
                                customerGroupName: item.CustomerGroupName[0]
                            };
                            customers.push(customer);
                        }
                        return [2 /*return*/, customers];
                }
            });
        });
    };
    /**
     * Get customer from Netvisor using netvisorKey
     */
    NetvisorCustomerMethod.prototype.getCustomerByNetvisorKey = function (netvisorKey) {
        return __awaiter(this, void 0, void 0, function () {
            var customerRaw, parser, _customer, customerBaseInformation, _i, _a, _b, key, value, newValue, customerFinvoiceDetails, _c, _d, _e, key, value, newValue, customerDeliveryDetails, _f, _g, _h, key, value, newValue, customerContactDetails, _j, _k, _l, key, value, newValue, customerContactPersons, customerAdditionalInformation, _m, _o, _p, key, value, newValue, customer;
            var _this = this;
            return __generator(this, function (_q) {
                switch (_q.label) {
                    case 0: return [4 /*yield*/, this._client.get('getcustomer.nv', { id: netvisorKey })];
                    case 1:
                        customerRaw = _q.sent();
                        parser = new xml2js.Parser();
                        return [4 /*yield*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    parser.parseString(customerRaw, function (error, xmlResult) {
                                        if (error)
                                            return reject(error);
                                        var status = xmlResult.Root.ResponseStatus[0].Status;
                                        var json = xmlResult.Root.Customer[0];
                                        if (status[0] === 'OK') {
                                            resolve(json);
                                        }
                                        else {
                                            reject(status[1]);
                                        }
                                    });
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 2:
                        _customer = _q.sent();
                        customerBaseInformation = {};
                        for (_i = 0, _a = Object.entries(_customer.CustomerBaseInformation[0]); _i < _a.length; _i++) {
                            _b = _a[_i], key = _b[0], value = _b[1];
                            newValue = value;
                            if (typeof newValue[0] === 'object') {
                                customerBaseInformation[key] = newValue[0]['_'];
                            }
                            else {
                                customerBaseInformation[key] = newValue[0];
                            }
                        }
                        customerFinvoiceDetails = {};
                        for (_c = 0, _d = Object.entries(_customer.CustomerFinvoiceDetails[0]); _c < _d.length; _c++) {
                            _e = _d[_c], key = _e[0], value = _e[1];
                            newValue = value;
                            customerFinvoiceDetails[key] = newValue[0];
                        }
                        customerDeliveryDetails = {};
                        for (_f = 0, _g = Object.entries(_customer.CustomerDeliveryDetails[0]); _f < _g.length; _f++) {
                            _h = _g[_f], key = _h[0], value = _h[1];
                            newValue = value;
                            if (typeof newValue[0] === 'object') {
                                customerDeliveryDetails[key] = newValue[0]['_'];
                            }
                            else {
                                customerDeliveryDetails[key] = newValue[0];
                            }
                        }
                        customerContactDetails = {};
                        //console.log(_customer.CustomerContactDetails)
                        for (_j = 0, _k = Object.entries(_customer.CustomerContactDetails[0]); _j < _k.length; _j++) {
                            _l = _k[_j], key = _l[0], value = _l[1];
                            newValue = value;
                            customerContactDetails[key] = newValue[0];
                        }
                        customerContactPersons = [];
                        _customer.CustomerContactPersons[0].CustomerContactPerson.forEach(function (person) {
                            customerContactPersons.push(person);
                        });
                        customerAdditionalInformation = {};
                        for (_m = 0, _o = Object.entries(_customer.CustomerAdditionalInformation[0]); _m < _o.length; _m++) {
                            _p = _o[_m], key = _p[0], value = _p[1];
                            newValue = value;
                            if (typeof newValue[0] === 'object') {
                                customerAdditionalInformation[key] = newValue[0]['_'];
                            }
                            else {
                                customerAdditionalInformation[key] = newValue[0];
                            }
                        }
                        customer = {
                            customerBaseInformation: customerBaseInformation,
                            customerFinvoiceDetails: customerFinvoiceDetails,
                            customerDeliveryDetails: customerDeliveryDetails,
                            customerContactDetails: customerContactDetails,
                            customerContactPersons: customerContactPersons,
                            customerAdditionalInformation: customerAdditionalInformation
                        };
                        return [2 /*return*/, customer];
                }
            });
        });
    };
    return NetvisorCustomerMethod;
}(_method_1.NetvisorMethod));
exports.NetvisorCustomerMethod = NetvisorCustomerMethod;
