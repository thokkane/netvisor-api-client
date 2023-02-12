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
exports.NetvisorProductMethod = void 0;
var _method_1 = require("./_method");
var xml2js = __importStar(require("xml2js"));
var js2xmlparser = __importStar(require("js2xmlparser"));
var NetvisorProductMethod = /** @class */ (function (_super) {
    __extends(NetvisorProductMethod, _super);
    function NetvisorProductMethod(client) {
        var _this = _super.call(this, client) || this;
        _this._endpointUri = 'product.nv';
        return _this;
    }
    /**
     * Save one product as product object
     * @param dataset as IProductDataSet
     * @param params as parameters with {method: add}
     * if editing product {method: add/edit, id: netvisorkey}
     */
    NetvisorProductMethod.prototype.saveProductByDataSet = function (dataset, params) {
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
     * Get product list from Netvisor
     * @param params to narrow search with keyword or netvisor key
     */
    NetvisorProductMethod.prototype.getProducts = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var productsRaw, parser, productList, products, _i, productList_1, item, product;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.get('productlist.nv', params)];
                    case 1:
                        productsRaw = _a.sent();
                        parser = new xml2js.Parser();
                        return [4 /*yield*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    parser.parseString(productsRaw, function (error, xmlResult) {
                                        if (error)
                                            return reject(error);
                                        var status = xmlResult.Root.ResponseStatus[0].Status;
                                        var json = xmlResult.Root.ProductList[0].Product;
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
                        productList = _a.sent();
                        // productList returns undefined if no products in search criteria
                        if (!productList) {
                            return [2 /*return*/, []];
                        }
                        products = [];
                        for (_i = 0, productList_1 = productList; _i < productList_1.length; _i++) {
                            item = productList_1[_i];
                            product = {
                                netvisorKey: item.NetvisorKey[0],
                                productCode: item.ProductCode[0],
                                name: item.Name[0],
                                unitPrice: item.UnitPrice[0],
                                unitGrossPrice: item.UnitGrossPrice[0],
                                group: item.ProductGroupDescription[0]
                            };
                            products.push(product);
                        }
                        return [2 /*return*/, products];
                }
            });
        });
    };
    NetvisorProductMethod.prototype.getExtendedProducts = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var productsRaw, parser, productList, products, _i, productList_2, item, priceGroups, _a, _b, pg, pgObj, product;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this._client.get('extendedproductlist.nv', params)];
                    case 1:
                        productsRaw = _c.sent();
                        parser = new xml2js.Parser();
                        return [4 /*yield*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    parser.parseString(productsRaw, function (error, xmlResult) {
                                        if (error)
                                            return reject(error);
                                        var status = xmlResult.Root.ResponseStatus[0].Status;
                                        var json = xmlResult.Root.Products[0].Product;
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
                        productList = _c.sent();
                        // productList returns undefined if no products in search criteria
                        if (!productList) {
                            return [2 /*return*/, []];
                        }
                        products = [];
                        for (_i = 0, productList_2 = productList; _i < productList_2.length; _i++) {
                            item = productList_2[_i];
                            priceGroups = [];
                            if (!!item.ProductPriceInformation[0].PriceGroups[0].PriceGroup) {
                                for (_a = 0, _b = item.ProductPriceInformation[0].PriceGroups[0].PriceGroup; _a < _b.length; _a++) {
                                    pg = _b[_a];
                                    pgObj = {
                                        PriceGroupNetvisorKey: pg.NetvisorKey[0],
                                        PriceGroupName: pg.PriceGroupName[0],
                                        PriceGroupNetPrice: pg.NetPrice[0],
                                        PriceGroupGrossPrice: pg.GrossPrice[0]
                                    };
                                    priceGroups.push(pgObj);
                                }
                            }
                            product = {
                                NetvisorKey: item.NetvisorKey[0],
                                ProductCode: item.ProductCodes[0].ProductCode[0],
                                ProductPriceInformation: {
                                    DefaultNetPrice: item.ProductPriceInformation[0].DefaultNetPrice[0]['_'],
                                    DefaultGrossPrice: item.ProductPriceInformation[0].DefaultGrossPrice[0],
                                    DefaultVatPercent: item.ProductPriceInformation[0].Vat[0].Percentage[0],
                                    PriceMargin: item.ProductPriceInformation[0].PriceMargin[0],
                                    ProvisionPercentage: item.ProductPriceInformation[0].ProvisionPercentage[0],
                                    PriceGroups: priceGroups
                                }
                            };
                            if (item.ProductAccountInformation) {
                                product.ProductAccountInformation = {
                                    DefaultDomesticAccountNumber: item.ProductAccountInformation[0].DefaultDomesticAccountNumber[0],
                                    DefaultEuAccountNumber: item.ProductAccountInformation[0].DefaultEuAccountNumber[0],
                                    DefaultOutsideEUAccountNumber: item.ProductAccountInformation[0].DefaultOutsideEUAccountNumber[0],
                                    DefaultInventoryAccountNumber: item.ProductAccountInformation[0].DefaultInventoryAccountNumber[0]
                                };
                            }
                            products.push(product);
                        }
                        return [2 /*return*/, products];
                }
            });
        });
    };
    /**
     * Get one or upto 400 product details
     * @param netvisorKey as comma delimited string to fetch more than one product -> e.g. '1' or '1,2,3, ...' for product list
     */
    NetvisorProductMethod.prototype.getProductByNetvisorKey = function (netvisorKey) {
        return __awaiter(this, void 0, void 0, function () {
            var productRaw, parser, products, productOut, _i, _a, product;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._client.get('getproduct.nv', { idlist: netvisorKey.replace(/\s+/g, '') })];
                    case 1:
                        productRaw = _b.sent();
                        parser = new xml2js.Parser();
                        return [4 /*yield*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    parser.parseString(productRaw, function (error, xmlResult) {
                                        if (error)
                                            return reject(error);
                                        var status = xmlResult.Root.ResponseStatus[0].Status;
                                        var json = xmlResult.Root.Products ? xmlResult.Root.Products[0] : xmlResult.Root;
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
                        products = _b.sent();
                        productOut = [];
                        for (_i = 0, _a = products.Product; _i < _a.length; _i++) {
                            product = _a[_i];
                            // Clean product object by removing arrays from key values
                            productOut.push({
                                ProductBaseInformation: {
                                    NetvisorKey: product.ProductBaseInformation[0].NetvisorKey[0],
                                    ProductCode: product.ProductBaseInformation[0].ProductCode[0],
                                    ProductGroup: product.ProductBaseInformation[0].ProductGroup[0],
                                    Name: product.ProductBaseInformation[0].Name[0],
                                    Description: product.ProductBaseInformation[0].Description[0],
                                    UnitPrice: product.ProductBaseInformation[0].UnitPrice[0],
                                    UnitGrossPrice: product.ProductBaseInformation[0].UnitGrossPrice[0],
                                    Unit: product.ProductBaseInformation[0].Unit[0],
                                    UnitWeight: product.ProductBaseInformation[0].UnitWeight[0],
                                    KaukevaProductCode: product.ProductBaseInformation[0].KaukevaProductCode[0],
                                    PurchasePrice: product.ProductBaseInformation[0].PurchasePrice[0],
                                    TariffHeading: product.ProductBaseInformation[0].TariffHeading[0],
                                    ComissionPercentage: product.ProductBaseInformation[0].ComissionPercentage[0],
                                    IsActive: product.ProductBaseInformation[0].IsActive[0],
                                    IsSalesProduct: product.ProductBaseInformation[0].IsSalesProduct[0],
                                    IsStorageProduct: product.ProductBaseInformation[0].IsStorageProduct[0],
                                    CountryOfOrigin: product.ProductBaseInformation[0].CountryOfOrigin[0]
                                },
                                ProductBookKeepingDetails: {
                                    DefaultVatPercent: product.ProductBookKeepingDetails[0].DefaultVatPercent[0],
                                    DefaultDomesticAccountNumber: product.ProductBookKeepingDetails[0].DefaultDomesticAccountNumber[0],
                                    DefaultEuAccountNumber: product.ProductBookKeepingDetails[0].DefaultEuAccountNumber[0],
                                    DefaultOutsideEUAccountNumber: product.ProductBookKeepingDetails[0].DefaultOutsideEUAccountNumber[0]
                                },
                                ProductInventoryDetails: {
                                    InventoryAmount: product.ProductInventoryDetails[0].InventoryAmount[0],
                                    InventoryMidPrice: product.ProductInventoryDetails[0].InventoryMidPrice[0],
                                    InventoryValue: product.ProductInventoryDetails[0].InventoryValue[0],
                                    InventoryReservedAmount: product.ProductInventoryDetails[0].InventoryReservedAmount[0],
                                    InventoryOrderedAmount: product.ProductInventoryDetails[0].InventoryOrderedAmount[0],
                                    InventoryAccountNumber: product.ProductInventoryDetails[0].InventoryAccountNumber[0]
                                }
                            });
                        }
                        // Return object if requested only one product
                        if (productOut.length === 1) {
                            return [2 /*return*/, productOut[0]];
                        }
                        return [2 /*return*/, productOut];
                }
            });
        });
    };
    NetvisorProductMethod.prototype.getInventory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var inventoryRaw, parser, inventoryList, inventory, _i, inventoryList_1, item, product;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.get('inventorybywarehouse.nv')];
                    case 1:
                        inventoryRaw = _a.sent();
                        parser = new xml2js.Parser();
                        return [4 /*yield*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    parser.parseString(inventoryRaw, function (error, xmlResult) {
                                        if (error)
                                            return reject(error);
                                        var status = xmlResult.Root.ResponseStatus[0].Status;
                                        var json = xmlResult.Root.InventoryByWarehouse[0].Product;
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
                        inventoryList = _a.sent();
                        inventory = [];
                        for (_i = 0, inventoryList_1 = inventoryList; _i < inventoryList_1.length; _i++) {
                            item = inventoryList_1[_i];
                            product = {
                                netvisorKey: item.NetvisorKey[0],
                                productCode: item.Code[0],
                                name: item.Name[0],
                                totalAmount: item.TotalAmount[0]
                            };
                            inventory.push(product);
                        }
                        return [2 /*return*/, inventory];
                }
            });
        });
    };
    /**
     * Save inventory using inventory dataset
     * @param dataset as IInventory
     */
    NetvisorProductMethod.prototype.saveInventoryByDataSet = function (dataset) {
        return __awaiter(this, void 0, void 0, function () {
            var xml;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        xml = js2xmlparser.parse('Root', dataset);
                        return [4 /*yield*/, this._client.post('warehouseevent.nv', xml.replace("<?xml version='1.0'?>", ''))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Save inventory with xml
     * @param fileContents xml data in string
     */
    NetvisorProductMethod.prototype.saveInventoryByXmlData = function (fileContents) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.post('warehouseevent.nv', fileContents)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return NetvisorProductMethod;
}(_method_1.NetvisorMethod));
exports.NetvisorProductMethod = NetvisorProductMethod;
