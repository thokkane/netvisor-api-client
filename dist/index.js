"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetvisorApiClient = void 0;
// @ts-nocheck
var got_1 = __importDefault(require("got"));
var accounting_1 = require("./methods/accounting");
var customers_1 = require("./methods/customers");
var contactpersons_1 = require("./methods/contactpersons");
var invoiceOrder_1 = require("./methods/invoiceOrder");
var salespersons_1 = require("./methods/salespersons");
var payments_1 = require("./methods/payments");
var salesinvoice_1 = require("./methods/salesinvoice");
var budget_1 = require("./methods/budget");
var vendors_1 = require("./methods/vendors");
var product_1 = require("./methods/product");
var purchaseinvoice_1 = require("./methods/purchaseinvoice");
var workday_1 = require("./methods/workday");
var employee_1 = require("./methods/employee");
var tripexpense_1 = require("./methods/tripexpense");
var moment_1 = __importDefault(require("moment"));
var crypto_1 = __importDefault(require("crypto"));
var xml2js = __importStar(require("xml2js"));
var agentkeepalive_1 = require("agentkeepalive");
var cacheable_lookup_1 = __importDefault(require("cacheable-lookup"));
var httpsAgent = new agentkeepalive_1.HttpsAgent();
var cacheableLookup = new cacheable_lookup_1.default();
var NetvisorApiClient = /** @class */ (function () {
    function NetvisorApiClient(options) {
        // Set default connect URI
        options.baseUri = options.baseUri || 'https://integration.netvisor.fi';
        // Set default timeout
        options.timeout = options.timeout || 120000;
        // Set default language FI
        options.language = options.language || 'FI';
        if (!options.integrationName) {
            throw new Error('Missing options.integrationName');
        }
        if (!options.customerId) {
            throw new Error('Missing options.customerId');
        }
        if (!options.partnerId) {
            throw new Error('Missing options.partnerId');
        }
        if (!options.customerKey) {
            throw new Error('Missing options.customerKey');
        }
        if (!options.partnerKey) {
            throw new Error('Missing options.partnerKey');
        }
        if (!options.organizationId) {
            throw new Error('Missing options.organizationId');
        }
        this.accounting = new accounting_1.NetvisorAccountingMethod(this);
        this.budget = new budget_1.NetvisorBudgetMethod(this);
        this.customers = new customers_1.NetvisorCustomerMethod(this);
        this.contactpersons = new contactpersons_1.NetvisorContactPersonMethod(this);
        this.salespersons = new salespersons_1.NetvisorSalespersonMethod(this);
        this.invoiceorder = new invoiceOrder_1.NetvisorInvoiceOrderMethod(this);
        this.payments = new payments_1.NetvisorPaymentMethod(this);
        this.product = new product_1.NetvisorProductMethod(this);
        this.purchase = new purchaseinvoice_1.NetvisorPurchaseInvoiceMethod(this);
        this.sales = new salesinvoice_1.NetvisorSalesMethod(this);
        this.workday = new workday_1.NetvisorWorkdayMethod(this);
        this.employee = new employee_1.NetvisorEmployeeMethod(this);
        this.tripexpense = new tripexpense_1.NetvisorTripexpenseMethod(this);
        this.vendors = new vendors_1.NetvisorVendorMethod(this);
        this.options = options;
        // If dnsCache is true, then fallback to internal instance of cacheableLookup
        if (this.options.dnsCache === true) {
            this.options.dnsCache = cacheableLookup;
        }
    }
    NetvisorApiClient.prototype._generateHeaderMAC = function (url, headers) {
        return crypto_1.default
            .createHash('sha256')
            .update("".concat(url, "&").concat(headers['X-Netvisor-Authentication-Sender'], "&").concat(headers['X-Netvisor-Authentication-CustomerId'], "&").concat(headers['X-Netvisor-Authentication-Timestamp'], "&").concat(headers['X-Netvisor-Interface-Language'], "&").concat(headers['X-Netvisor-Organisation-ID'], "&").concat(headers['X-Netvisor-Authentication-TransactionId'], "&").concat(this.options.customerKey, "&").concat(this.options.partnerKey))
            .digest('hex');
    };
    NetvisorApiClient.prototype._generateHeaders = function (url, params) {
        var headers = {
            'X-Netvisor-Authentication-Sender': this.options.integrationName,
            'X-Netvisor-Authentication-CustomerId': this.options.customerId,
            'X-Netvisor-Authentication-PartnerId': this.options.partnerId,
            'X-Netvisor-Authentication-Timestamp': (0, moment_1.default)().format('YYYY-MM-DD HH:mm:ss.SSS'),
            'X-Netvisor-Authentication-TransactionId': crypto_1.default.randomBytes(32).toString('hex').substring(0, 16),
            'X-Netvisor-Interface-Language': this.options.language,
            'X-Netvisor-Organisation-ID': this.options.organizationId,
            'X-Netvisor-Authentication-MACHashCalculationAlgorithm': 'SHA256',
            'Content-Type': 'text/xml'
        };
        if (params) {
            var queryString = Object.keys(params)
                .map(function (key) { return key + '=' + params[key]; })
                .join('&');
            url = "".concat(url, "?").concat(queryString);
        }
        headers['X-Netvisor-Authentication-MAC'] = this._generateHeaderMAC(url, headers);
        return headers;
    };
    NetvisorApiClient.prototype._generateUrl = function (endpointUri) {
        return new URL(endpointUri, this.options.baseUri).href;
    };
    NetvisorApiClient.prototype.post = function (endpointUri, body, params) {
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, request, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this._generateUrl(endpointUri);
                        headers = this._generateHeaders(url, params);
                        return [4 /*yield*/, got_1.default.post(url, {
                                body: body,
                                headers: headers,
                                searchParams: params,
                                timeout: {
                                    request: this.options.timeout
                                },
                                agent: { https: this.keepAliveAgent },
                                dnsCache: this.options.dnsCache || undefined
                            })];
                    case 1:
                        request = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this._checkRequestStatus(request.body)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, request.body];
                    case 4:
                        e_1 = _a.sent();
                        throw new Error(e_1);
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    NetvisorApiClient.prototype.get = function (endpointUri, params) {
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, request, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this._generateUrl(endpointUri);
                        headers = this._generateHeaders(url, params);
                        return [4 /*yield*/, (0, got_1.default)(url, {
                                headers: headers,
                                searchParams: params,
                                timeout: {
                                    request: this.options.timeout
                                },
                                agent: { https: this.keepAliveAgent },
                                dnsCache: this.options.dnsCache || undefined
                            })];
                    case 1:
                        request = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this._checkRequestStatus(request.body)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, request.body];
                    case 4:
                        e_2 = _a.sent();
                        throw new Error(e_2);
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    NetvisorApiClient.prototype._checkRequestStatus = function (request) {
        var _this = this;
        var xmlParser = new xml2js.Parser();
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                xmlParser.parseString(request, function (error, xmlResult) {
                    if (error)
                        return reject(error);
                    var status = xmlResult.Root.ResponseStatus[0].Status;
                    if (status[0] === 'OK') {
                        resolve(true);
                    }
                    else {
                        reject(status[1]);
                    }
                });
                return [2 /*return*/];
            });
        }); });
    };
    return NetvisorApiClient;
}());
exports.NetvisorApiClient = NetvisorApiClient;
