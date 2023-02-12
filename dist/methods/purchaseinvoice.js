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
exports.NetvisorPurchaseInvoiceMethod = void 0;
var _method_1 = require("./_method");
var js2xmlparser = __importStar(require("js2xmlparser"));
var xml2js = __importStar(require("xml2js"));
var NetvisorPurchaseInvoiceMethod = /** @class */ (function (_super) {
    __extends(NetvisorPurchaseInvoiceMethod, _super);
    function NetvisorPurchaseInvoiceMethod(client) {
        var _this = _super.call(this, client) || this;
        _this._endpointUri = 'purchaseinvoice.nv';
        return _this;
    }
    /**
     * Save one invoice as a invoice object
     * @param dataset as IPurchaseInvoice
     */
    NetvisorPurchaseInvoiceMethod.prototype.saveInvoiceByDataSet = function (dataset) {
        return __awaiter(this, void 0, void 0, function () {
            var xml;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        xml = js2xmlparser.parse('Root', dataset);
                        return [4 /*yield*/, this._client.post(this._endpointUri, xml.replace("<?xml version='1.0'?>", ''))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Fetch complete purchase invoices
     * @param params as filtering
     */
    NetvisorPurchaseInvoiceMethod.prototype.getPurchaseInvoices = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var purhcasesRaw, parser, purchasesList, invoiceKeys, _i, purchasesList_1, item;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.get('purchaseinvoicelist.nv', params)];
                    case 1:
                        purhcasesRaw = _a.sent();
                        parser = new xml2js.Parser();
                        return [4 /*yield*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    parser.parseString(purhcasesRaw, function (error, xmlResult) {
                                        if (error)
                                            return reject(error);
                                        var status = xmlResult.Root.ResponseStatus[0].Status;
                                        var json = xmlResult.Root.PurchaseInvoiceList[0].PurchaseInvoice;
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
                        purchasesList = _a.sent();
                        // purchasesList returns undefined if no invoices in search criteria
                        if (!purchasesList) {
                            return [2 /*return*/, []];
                        }
                        invoiceKeys = [];
                        for (_i = 0, purchasesList_1 = purchasesList; _i < purchasesList_1.length; _i++) {
                            item = purchasesList_1[_i];
                            invoiceKeys.push(item.NetvisorKey[0]);
                        }
                        return [4 /*yield*/, this.getPurchaseInvoicesByNetvisorKeyList(invoiceKeys)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NetvisorPurchaseInvoiceMethod.prototype.getPurchaseInvoicesByNetvisorKeyList = function (invoiceKeys) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var limit, offset, invoices, _loop_1, this_1, parser, purchaseInvoiceList, _i, invoices_1, item, invoiceRows, _b, invoiceRows_1, row, _c, _d, _e, key, value, purchaseOrders, _f, purchaseOrders_1, o, _g, _h, _j, key, value, invoice;
            var _this = this;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        limit = 100;
                        offset = 0;
                        invoices = [];
                        _loop_1 = function () {
                            var newArr, invoicesRaw, invoicesPart;
                            return __generator(this, function (_l) {
                                switch (_l.label) {
                                    case 0:
                                        newArr = invoiceKeys.slice(offset, limit + offset);
                                        return [4 /*yield*/, this_1._client.get('getpurchaseinvoice.nv', { netvisorkeylist: newArr.join(',') })];
                                    case 1:
                                        invoicesRaw = _l.sent();
                                        parser = new xml2js.Parser();
                                        return [4 /*yield*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    parser.parseString(invoicesRaw, function (error, xmlResult) {
                                                        if (error)
                                                            return reject(error);
                                                        var status = xmlResult.Root.ResponseStatus[0].Status;
                                                        // console.log(xmlResult.Root.PurchaseInvoices);
                                                        var json = newArr.length > 1 ? xmlResult.Root.PurchaseInvoices[0].PurchaseInvoice : xmlResult.Root.PurchaseInvoice;
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
                                        invoicesPart = _l.sent();
                                        invoices.push.apply(invoices, invoicesPart);
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
                        if (offset < invoiceKeys.length) return [3 /*break*/, 1];
                        _k.label = 4;
                    case 4:
                        purchaseInvoiceList = [];
                        for (_i = 0, invoices_1 = invoices; _i < invoices_1.length; _i++) {
                            item = invoices_1[_i];
                            invoiceRows = !item.InvoiceLines ? [] : item.InvoiceLines[0].PurchaseInvoiceLine;
                            for (_b = 0, invoiceRows_1 = invoiceRows; _b < invoiceRows_1.length; _b++) {
                                row = invoiceRows_1[_b];
                                for (_c = 0, _d = Object.entries(row); _c < _d.length; _c++) {
                                    _e = _d[_c], key = _e[0], value = _e[1];
                                    if (Array.isArray(value)) {
                                        row[key] = value[0];
                                    }
                                }
                            }
                            purchaseOrders = !item.LinkedPurchaseOrders ? [] : item.LinkedPurchaseOrders[0].PurchaseOrder;
                            for (_f = 0, purchaseOrders_1 = purchaseOrders; _f < purchaseOrders_1.length; _f++) {
                                o = purchaseOrders_1[_f];
                                for (_g = 0, _h = Object.entries(o); _g < _h.length; _g++) {
                                    _j = _h[_g], key = _j[0], value = _j[1];
                                    if (Array.isArray(value)) {
                                        o[key] = value[0];
                                    }
                                }
                            }
                            invoice = {
                                purchaseInvoiceNetvisorKey: item.PurchaseInvoiceNetvisorKey[0],
                                purchaseInvoiceNumber: item.PurchaseInvoiceNumber[0],
                                purchaseInvoiceDate: item.PurchaseInvoiceDate[0]._,
                                purchaseInvoiceEventDate: item.PurchaseInvoiceEventDate[0]._,
                                purchaseInvoiceDeliveryDate: item.PurchaseInvoiceDeliveryDate[0]._,
                                purchaseInvoiceDueDate: item.PurchaseInvoiceDueDate[0]._,
                                purchaseInvoiceValueDate: ((_a = item.PurchaseInvoiceValueDate[0]) === null || _a === void 0 ? void 0 : _a._) || '',
                                purchaseInvoiceReferencenumber: item.PurchaseInvoiceReferencenumber[0],
                                purchaseInvoiceVendorBankAccountNumber: item.PurchaseInvoiceVendorBankAccountNumber[0],
                                isPurchaseInvoiceVendorBankAccountDeleted: item.IsPurchaseInvoiceVendorBankAccountDeleted[0],
                                isPurchaseInvoiceVendorBankAccountFromSEPARegion: item.IsPurchaseInvoiceVendorBankAccountFromSEPARegion[0],
                                purchaseInvoiceAmount: item.PurchaseInvoiceAmount[0],
                                purchaseInvoicePaidAmount: item.PurchaseInvoicePaidAmount[0],
                                foreignCurrencyAmount: item.ForeignCurrencyAmount[0],
                                foreignCurrencyNameID: item.ForeignCurrencyNameID[0],
                                invoiceStatus: item.InvoiceStatus[0],
                                approvalStatus: item.ApprovalStatus[0],
                                purchaseInvoiceOurReference: item.PurchaseInvoiceOurReference[0],
                                purchaseInvoiceYourReference: item.PurchaseInvoiceYourReference[0],
                                purchaseInvoiceDescription: item.PurchaseInvoiceDescription[0],
                                vendorNetvisorKey: item.VendorNetvisorKey[0],
                                vendorOrganizationIdentifier: item.VendorOrganizationIdentifier[0],
                                vendorCode: item.VendorCode[0],
                                vendorName: item.VendorName[0],
                                vendorAddressline: item.VendorAddressline[0],
                                vendorPostnumber: item.VendorPostnumber[0],
                                vendorTown: item.VendorTown[0],
                                vendorCountry: item.VendorCountry[0],
                                fingerprint: item.Fingerprint[0],
                                voucherID: item.VoucherID[0],
                                isAccounted: item.IsAccounted[0],
                                attachments: item.Attachments ? item.Attachments[0] : '',
                                invoiceLines: invoiceRows,
                                linkedPurchaseOrders: purchaseOrders
                            };
                            purchaseInvoiceList.push(invoice);
                        }
                        return [2 /*return*/, purchaseInvoiceList];
                }
            });
        });
    };
    /**
     * Fetch complete purchase orders
     * @param params as filtering
     */
    NetvisorPurchaseInvoiceMethod.prototype.getPurchaseOrders = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var purhcasesRaw, parser, purchasesList, invoiceKeys, _i, purchasesList_2, item;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.get('purchaseorderlist.nv', params)];
                    case 1:
                        purhcasesRaw = _a.sent();
                        parser = new xml2js.Parser();
                        return [4 /*yield*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    parser.parseString(purhcasesRaw, function (error, xmlResult) {
                                        if (error)
                                            return reject(error);
                                        var status = xmlResult.Root.ResponseStatus[0].Status;
                                        var json = xmlResult.Root.PurchaseOrderList[0].PurchaseOrder;
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
                        purchasesList = _a.sent();
                        // purchasesList returns undefined if no invoices in search criteria
                        if (!purchasesList) {
                            return [2 /*return*/, []];
                        }
                        invoiceKeys = [];
                        for (_i = 0, purchasesList_2 = purchasesList; _i < purchasesList_2.length; _i++) {
                            item = purchasesList_2[_i];
                            invoiceKeys.push(item.NetvisorKey[0]);
                        }
                        return [4 /*yield*/, this.getPurchaseOrdersByNetvisorKeyList(invoiceKeys)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NetvisorPurchaseInvoiceMethod.prototype.getPurchaseOrdersByNetvisorKeyList = function (orderKeys) {
        return __awaiter(this, void 0, void 0, function () {
            var limit, offset, orders, _loop_2, this_2, parser, purchaseOrderList, _i, orders_1, item, orderRows, _a, orderRows_1, row, _b, _c, _d, key, value, purchaseInvoices, _e, purchaseInvoices_1, o, _f, _g, _h, key, value, vendorCountry, deliveryCountry, currencyCode, order;
            var _this = this;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        limit = 100;
                        offset = 0;
                        orders = [];
                        _loop_2 = function () {
                            var newArr, ordersRaw, ordersPart;
                            return __generator(this, function (_k) {
                                switch (_k.label) {
                                    case 0:
                                        newArr = orderKeys.slice(offset, limit + offset);
                                        return [4 /*yield*/, this_2._client.get('getpurchaseorder.nv', { netvisorkeylist: newArr.join(',') })];
                                    case 1:
                                        ordersRaw = _k.sent();
                                        parser = new xml2js.Parser();
                                        return [4 /*yield*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    parser.parseString(ordersRaw, function (error, xmlResult) {
                                                        if (error)
                                                            return reject(error);
                                                        var status = xmlResult.Root.ResponseStatus[0].Status;
                                                        var json = orderKeys.length > 1 ? xmlResult.Root.PurchaseOrders[0].PurchaseOrder : xmlResult.Root.PurchaseOrder;
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
                                        ordersPart = _k.sent();
                                        orders.push.apply(orders, ordersPart);
                                        offset = offset + limit;
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_2 = this;
                        _j.label = 1;
                    case 1: return [5 /*yield**/, _loop_2()];
                    case 2:
                        _j.sent();
                        _j.label = 3;
                    case 3:
                        if (offset < orderKeys.length) return [3 /*break*/, 1];
                        _j.label = 4;
                    case 4:
                        purchaseOrderList = [];
                        for (_i = 0, orders_1 = orders; _i < orders_1.length; _i++) {
                            item = orders_1[_i];
                            orderRows = !item.PurchaseOrderLines ? [] : item.PurchaseOrderLines[0].PurchaseOrderProductLine;
                            for (_a = 0, orderRows_1 = orderRows; _a < orderRows_1.length; _a++) {
                                row = orderRows_1[_a];
                                for (_b = 0, _c = Object.entries(row); _b < _c.length; _b++) {
                                    _d = _c[_b], key = _d[0], value = _d[1];
                                    if (Array.isArray(value)) {
                                        row[key] = value[0];
                                    }
                                }
                            }
                            purchaseInvoices = !item.PurchaseOrderLines[0].LinkedPurchaseInvoices[0].PurchaseInvoice
                                ? []
                                : item.PurchaseOrderLines[0].LinkedPurchaseInvoices[0].PurchaseInvoice;
                            for (_e = 0, purchaseInvoices_1 = purchaseInvoices; _e < purchaseInvoices_1.length; _e++) {
                                o = purchaseInvoices_1[_e];
                                for (_f = 0, _g = Object.entries(o); _f < _g.length; _f++) {
                                    _h = _g[_f], key = _h[0], value = _h[1];
                                    if (Array.isArray(value)) {
                                        o[key] = value[0];
                                    }
                                }
                            }
                            vendorCountry = !!item.VendorCountry[0]._ ? item.VendorCountry[0]._ : '';
                            deliveryCountry = !!item.DeliveryCountry[0]._ ? item.DeliveryCountry[0]._ : '';
                            currencyCode = 'EUR';
                            if (!!item.Amount[0].$) {
                                currencyCode = item.Amount[0].$.currencycode;
                            }
                            order = {
                                netvisorKey: item.NetvisorKey[0],
                                orderNumber: item.OrderNumber[0],
                                orderStatus: item.OrderStatus[0],
                                orderDate: item.OrderDate[0]._,
                                vendorName: item.VendorName[0],
                                vendorAddressLine: item.VendorAddressLine[0],
                                vendorPostNumber: item.VendorPostNumber[0],
                                VendorCity: item.VendorCity[0],
                                vendorCountry: vendorCountry,
                                deliveryTerm: item.DeliveryTerm[0],
                                deliveryMethod: item.DeliveryMethod[0],
                                deliveryName: item.DeliveryName[0],
                                deliveryAddressLine: item.DeliveryAddressLine[0],
                                deliveryPostNumber: item.DeliveryPostNumber[0],
                                deliveryCity: item.DeliveryCity[0],
                                deliveryCountry: deliveryCountry,
                                privateComment: item.PrivateComment[0],
                                comment: item.Comment[0],
                                ourReference: item.OurReference[0],
                                paymentTerm: item.PaymentTerm[0],
                                currencyCode: currencyCode,
                                amount: item.Amount[0]._,
                                purchaseOrderLines: orderRows,
                                linkedPurchaseInvoices: purchaseInvoices
                            };
                            purchaseOrderList.push(order);
                        }
                        return [2 /*return*/, purchaseOrderList];
                }
            });
        });
    };
    return NetvisorPurchaseInvoiceMethod;
}(_method_1.NetvisorMethod));
exports.NetvisorPurchaseInvoiceMethod = NetvisorPurchaseInvoiceMethod;
