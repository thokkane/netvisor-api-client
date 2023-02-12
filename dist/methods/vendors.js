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
exports.NetvisorVendorMethod = void 0;
var xml2js = __importStar(require("xml2js"));
var _method_1 = require("./_method");
var NetvisorVendorMethod = /** @class */ (function (_super) {
    __extends(NetvisorVendorMethod, _super);
    function NetvisorVendorMethod(client) {
        var _this = _super.call(this, client) || this;
        _this._endpointUri = 'getvendor.nv';
        return _this;
    }
    /**
     * Get vendor(s) from Netvisor
     * See queryparams from Netvisor support page
     */
    NetvisorVendorMethod.prototype.getVendors = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var raw, parser, vendorList, vendors, _i, vendorList_1, item, domesticBankAccounts, _a, _b, account, accountObj, foreignBankAccounts, _c, _d, account, accountObj, vendor;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this._client.get(this._endpointUri, params)];
                    case 1:
                        raw = _e.sent();
                        parser = new xml2js.Parser();
                        return [4 /*yield*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    parser.parseString(raw, function (error, xmlResult) {
                                        if (error)
                                            return reject(error);
                                        var status = xmlResult.Root.ResponseStatus[0].Status;
                                        var json = xmlResult.Root.Vendors ? xmlResult.Root.Vendors[0].Vendor : xmlResult.Root.Vendor;
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
                        vendorList = _e.sent();
                        // productList returns undefined if no products in search criteria
                        if (!vendorList) {
                            return [2 /*return*/, []];
                        }
                        vendors = [];
                        for (_i = 0, vendorList_1 = vendorList; _i < vendorList_1.length; _i++) {
                            item = vendorList_1[_i];
                            domesticBankAccounts = [];
                            if (!!item.VendorBaseInformation[0].VendorBankAccounts &&
                                !!item.VendorBaseInformation[0].VendorBankAccounts[0].VendorDomesticBankAccounts) {
                                for (_a = 0, _b = item.VendorBaseInformation[0].VendorBankAccounts[0].VendorDomesticBankAccounts[0].VendorDomesticBankAccount; _a < _b.length; _a++) {
                                    account = _b[_a];
                                    accountObj = {
                                        NetvisorKey: account.NetvisorKey[0],
                                        IBAN: account.IBAN[0],
                                        BankName: account.BankName[0],
                                        IsDefault: account.IsDefault[0]
                                    };
                                    domesticBankAccounts.push(accountObj);
                                }
                            }
                            foreignBankAccounts = [];
                            if (!!item.VendorBaseInformation[0].VendorBankAccounts &&
                                !!item.VendorBaseInformation[0].VendorBankAccounts[0].VendorForeignBankAccounts) {
                                for (_c = 0, _d = item.VendorBaseInformation[0].VendorBankAccounts[0].VendorForeignBankAccounts[0].VendorForeignBankAccount; _c < _d.length; _c++) {
                                    account = _d[_c];
                                    accountObj = {
                                        NetvisorKey: account.NetvisorKey[0],
                                        BBAN: account.BBAN[0],
                                        BicSwift: account.BicSwift[0],
                                        BankName: account.BankName[0],
                                        ClearingCode: account.ClearingCode[0],
                                        ClearingNumber: account.ClearingNumber[0],
                                        BankAddress: account.BankAddress[0],
                                        Country: account.Country[0]._ || '',
                                        CurrencyCode: account.CurrencyCode[0]._ || '',
                                        IsDefault: account.IsDefault[0],
                                        IncludeAddressInForeignPayments: account.IncludeAddressInForeignPayments[0]
                                    };
                                    foreignBankAccounts.push(accountObj);
                                }
                            }
                            vendor = {
                                NetvisorKey: item.NetvisorKey[0],
                                VendorBaseInformation: {
                                    Code: item.VendorBaseInformation[0].Code[0],
                                    Name: item.VendorBaseInformation[0].Name[0],
                                    Address: item.VendorBaseInformation[0].Address[0],
                                    PostCode: item.VendorBaseInformation[0].PostCode[0],
                                    City: item.VendorBaseInformation[0].City[0],
                                    Country: item.VendorBaseInformation[0].Country[0]._ || '',
                                    OrganizationId: item.VendorBaseInformation[0].OrganizationId[0],
                                    GroupName: item.VendorBaseInformation[0].GroupName[0],
                                    VendorBankAccounts: {
                                        VendorDomesticBankAccounts: domesticBankAccounts,
                                        VendorForeignBankAccounts: foreignBankAccounts
                                    }
                                },
                                VendorContactDetails: {
                                    PhoneNumber: item.VendorContactDetails[0].PhoneNumber[0],
                                    Email: item.VendorContactDetails[0].Email[0],
                                    FaxNumber: item.VendorContactDetails[0].FaxNumber[0],
                                    ContactPersonName: item.VendorContactDetails[0].ContactPersonName[0],
                                    ContactPersonPhoneNumber: item.VendorContactDetails[0].ContactPersonPhoneNumber[0],
                                    ContactPersonEmail: item.VendorContactDetails[0].ContactPersonEmail[0],
                                    HomePage: item.VendorContactDetails[0].HomePage[0],
                                    Comment: item.VendorContactDetails[0].Comment[0]
                                },
                                VendorAdditionalInformation: {
                                    DefaultVatPercent: item.VendorAdditionalInformation[0].DefaultVatPercent[0],
                                    IsPartialVatReducePrivileged: item.VendorAdditionalInformation[0].IsPartialVatReducePrivileged[0],
                                    PaymentTerm: item.VendorAdditionalInformation[0].PaymentTerm[0]
                                }
                            };
                            vendors.push(vendor);
                        }
                        return [2 /*return*/, vendors];
                }
            });
        });
    };
    return NetvisorVendorMethod;
}(_method_1.NetvisorMethod));
exports.NetvisorVendorMethod = NetvisorVendorMethod;
