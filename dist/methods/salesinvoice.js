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
exports.NetvisorSalesMethod = void 0;
var _method_1 = require("./_method");
var xml2js = __importStar(require("xml2js"));
var js2xmlparser = __importStar(require("js2xmlparser"));
var NetvisorSalesMethod = /** @class */ (function (_super) {
    __extends(NetvisorSalesMethod, _super);
    function NetvisorSalesMethod(client) {
        var _this = _super.call(this, client) || this;
        _this._endpointUri = 'salesinvoice.nv';
        return _this;
    }
    /**
     * Save one invoice as a invoice object
     * @param dataset as ISalesInvoice
     * * @param params as parameters with {method: add}
     * if editing product {method: add/edit, id: netvisorkey}
     */
    NetvisorSalesMethod.prototype.saveInvoiceByDataSet = function (dataset, params) {
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
     * Fetch sales or orders with invoicelines
     * @param params use { listtype: '' } for invoices
     * and { listtype: 'preinvoice' } for orders
     */
    NetvisorSalesMethod.prototype.getSales = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var salesRaw, parser, salesList, salesInvoiceKeys, _i, salesList_1, item;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.get('salesinvoicelist.nv', params)];
                    case 1:
                        salesRaw = _a.sent();
                        parser = new xml2js.Parser();
                        return [4 /*yield*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    parser.parseString(salesRaw, function (error, xmlResult) {
                                        if (error)
                                            return reject(error);
                                        var status = xmlResult.Root.ResponseStatus[0].Status;
                                        var json = xmlResult.Root.SalesInvoiceList[0].SalesInvoice;
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
                        salesList = _a.sent();
                        // salesList returns undefined if no sales in search criteria
                        if (!salesList) {
                            return [2 /*return*/, []];
                        }
                        salesInvoiceKeys = [];
                        for (_i = 0, salesList_1 = salesList; _i < salesList_1.length; _i++) {
                            item = salesList_1[_i];
                            salesInvoiceKeys.push(item.NetvisorKey[0]);
                        }
                        return [4 /*yield*/, this.getSalesInvoicesByNetvisorKeyList(salesInvoiceKeys, params)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NetvisorSalesMethod.prototype.deleteSalesInvoice = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var resource;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = 'deletesalesinvoice.nv';
                        console.log(params);
                        return [4 /*yield*/, this._client.get(resource, params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NetvisorSalesMethod.prototype.getSalesInvoicesByNetvisorKeyList = function (netvisorKeys, params) {
        return __awaiter(this, void 0, void 0, function () {
            var limit, offset, salesInvoices, resource, _loop_1, this_1, parser, salesInvoiceList, _i, salesInvoices_1, item, invoiceRows, _a, invoiceRows_1, row, _b, _c, _d, key, value, currency, currencyRate, invoice, documents, _e, _f, _g, key, value, _h, _j, si;
            var _this = this;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        limit = 100;
                        offset = 0;
                        salesInvoices = [];
                        resource = params.listtype == 'preinvoice' ? 'getorder.nv' : 'getsalesinvoice.nv';
                        _loop_1 = function () {
                            var newArr, salesInvoicesRaw, salesInvoicesPart;
                            return __generator(this, function (_l) {
                                switch (_l.label) {
                                    case 0:
                                        newArr = netvisorKeys.slice(offset, limit + offset);
                                        params['netvisorkeylist'] = newArr.join(',');
                                        return [4 /*yield*/, this_1._client.get(resource, params)];
                                    case 1:
                                        salesInvoicesRaw = _l.sent();
                                        parser = new xml2js.Parser();
                                        return [4 /*yield*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    parser.parseString(salesInvoicesRaw, function (error, xmlResult) {
                                                        if (error)
                                                            return reject(error);
                                                        var status = xmlResult.Root.ResponseStatus[0].Status;
                                                        var json = newArr.length > 1 ? xmlResult.Root.SalesInvoices[0].SalesInvoice : xmlResult.Root.SalesInvoice;
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
                                        salesInvoicesPart = _l.sent();
                                        salesInvoices.push.apply(salesInvoices, salesInvoicesPart);
                                        offset = offset + limit;
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _k.label = 1;
                    case 1: return [5 /*yield**/, _loop_1()];
                    case 2:
                        _k.sent();
                        _k.label = 3;
                    case 3:
                        if (offset < netvisorKeys.length) return [3 /*break*/, 1];
                        _k.label = 4;
                    case 4:
                        salesInvoiceList = [];
                        for (_i = 0, salesInvoices_1 = salesInvoices; _i < salesInvoices_1.length; _i++) {
                            item = salesInvoices_1[_i];
                            invoiceRows = !item.InvoiceLines ? [] : item.InvoiceLines[0].InvoiceLine[0].SalesInvoiceProductLine;
                            for (_a = 0, invoiceRows_1 = invoiceRows; _a < invoiceRows_1.length; _a++) {
                                row = invoiceRows_1[_a];
                                for (_b = 0, _c = Object.entries(row); _b < _c.length; _b++) {
                                    _d = _c[_b], key = _d[0], value = _d[1];
                                    if (Array.isArray(value)) {
                                        row[key] = value[0];
                                    }
                                }
                            }
                            currency = 'EUR';
                            currencyRate = '1';
                            if (!!item.SalesInvoiceAmount[0].$) {
                                currency = item.SalesInvoiceAmount[0].$.iso4217currencycode;
                                currencyRate = item.SalesInvoiceAmount[0].$.currencyrate;
                            }
                            console.log("HELLO-UUSI");
                            invoice = {
                                netvisorKey: item.SalesInvoiceNetvisorKey[0],
                                salesInvoiceNumber: item.SalesInvoiceNumber[0],
                                invoiceDate: item.SalesInvoiceDate[0],
                                invoiceEventDate: item.SalesInvoiceEventDate[0],
                                invoiceValueDate: item.SalesInvoiceValueDate[0],
                                invoiceDeliveryDate: item.SalesInvoiceDeliveryDate[0],
                                invoiceDueDate: item.SalesInvoiceDueDate[0],
                                invoiceReferencenumber: item.SalesInvoiceReferencenumber[0],
                                invoiceAmount: item.SalesInvoiceAmount[0],
                                currency: currency,
                                currencyRate: currencyRate,
                                seller: item.SellerIdentifier[0],
                                invoiceStatus: item.InvoiceStatus[0],
                                //invoiceSubStatus: item.InvoiceStatus['$'].substatus[0],
                                salesInvoiceFreeTextBeforeLines: item.SalesInvoiceFreeTextBeforeLines[0],
                                lastSentInvoicePDFBase64Data: item.LastSentInvoicePDFBase64Data && item.LastSentInvoicePDFBase64Data[0] ? item.LastSentInvoicePDFBase64Data[0] : '',
                                salesInvoiceFreeTextAfterLines: item.SalesInvoiceFreeTextAfterLines[0],
                                salesInvoiceOurReference: item.SalesInvoiceOurReference[0],
                                salesInvoiceYourReference: item.SalesInvoiceYourReference[0],
                                salesInvoicePrivateComment: item.SalesInvoicePrivateComment[0],
                                salesInvoiceAgreementIdentifier: item.SalesInvoiceAgreementIdentifier[0],
                                customerKey: item.InvoicingCustomerNetvisorKey[0],
                                customerName: item.InvoicingCustomerName[0],
                                customerAddress: item.InvoicingCustomerAddressline[0],
                                customerPostnumber: item.InvoicingCustomerPostnumber[0],
                                customerTown: item.InvoicingCustomerTown[0],
                                customerCountry: item.InvoicingCustomerCountryCode[0],
                                deliveryAddressName: item.DeliveryAddressName[0],
                                deliveryAddressLine: item.DeliveryAddressLine[0],
                                deliveryAddressPostnumber: item.DeliveryAddressPostnumber[0],
                                deliveryAddressTown: item.DeliveryAddressTown[0],
                                deliveryCountry: item.DeliveryAddressCountryCode[0],
                                invoiceLines: invoiceRows,
                                invoiceNetvisorKeys: [],
                                invoiceNumbers: []
                            };
                            documents = !item.Documents ? '' : item.Documents[0];
                            //console.log(documents)
                            for (_e = 0, _f = Object.entries(documents); _e < _f.length; _e++) {
                                _g = _f[_e], key = _g[0], value = _g[1];
                                //console.log(key)
                                //console.log(value)
                                if (key === 'SalesInvoice') {
                                    for (_h = 0, _j = documents.SalesInvoice; _h < _j.length; _h++) {
                                        si = _j[_h];
                                        console.log(si);
                                        invoice['invoiceNumbers'].push(si.InvoiceNumber[0]);
                                        invoice['invoiceNetvisorKeys'].push(si.NetvisorKey[0]);
                                        //invoice['invoiceNumbers'] = documents.SalesInvoice[0].InvoiceNumber[0];
                                        //invoice['invoiceNetvisorKeys'].push(documents.SalesInvoice[0].NetvisorKey[0]);
                                    }
                                }
                                if (key === 'SalesOrder') {
                                    invoice['orderNumber'] = documents.SalesOrder[0].OrderNumber[0];
                                }
                            }
                            salesInvoiceList.push(invoice);
                        }
                        return [2 /*return*/, salesInvoiceList];
                }
            });
        });
    };
    /**
     * Save one salespayment as a payment object
     * @param dataset as ISalesPayment
     */
    NetvisorSalesMethod.prototype.saveSalesPaymentByDataSet = function (dataset) {
        return __awaiter(this, void 0, void 0, function () {
            var xml;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        xml = js2xmlparser.parse('Root', dataset);
                        return [4 /*yield*/, this._client.post('salespayment.nv', xml.replace("<?xml version='1.0'?>", ''))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return NetvisorSalesMethod;
}(_method_1.NetvisorMethod));
exports.NetvisorSalesMethod = NetvisorSalesMethod;
