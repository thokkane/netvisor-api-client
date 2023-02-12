import { NetvisorApiClient } from '..';
import { NetvisorMethod } from './_method';
export interface IProductDataSet {
    Product: {
        productbaseinformation: {
            productcode: any;
            productgroup: string;
            name: string;
            unitprice: {
                '@': {
                    type: string;
                };
                '#': number;
            };
            unit: string;
            isactive: number;
            issalesproduct: number;
            inventoryenabled: number;
        };
        productbookkeepingdetails: {
            defaultvatpercentage: number;
        };
    };
}
export interface IProductList {
    NetvisorKey: [string];
    ProductCode: [string];
    Name: [string];
    ProductGroup: [string];
    UnitPrice: [string];
    UnitGrossPrice: [string];
    ProductGroupID: [string];
    ProductGroupDescription: [string];
    Uri: [string];
    param?: any;
}
export interface IInventory {
    warehouseevent: {
        description: string;
        reference: any;
        warehouseeventlines: {
            warehouseeventline: Array<IWarehouseEvent>;
        };
    };
}
export interface IWarehouseEvent {
    eventtype: {
        '@': {
            type: string;
        };
        '#': string;
    };
    product: {
        '@': {
            type: string;
        };
        '#': any;
    };
    inventoryplace?: string;
    description: string;
    quantity: number;
    unitprice: number;
    valuedate: string;
    status: string;
}
export interface IInventoryList {
    NetvisorKey: [string];
    Code: [string];
    TotalAmount: [string];
    Name: [string];
    param?: any;
}
export interface IPriceGroup {
    PriceGroupNetvisorKey: string;
    PriceGroupName: string;
    PriceGroupNetPrice: string;
    PriceGroupGrossPrice: string;
}
export interface IExtendedProduct {
    NetvisorKey: string;
    ProductCode: string;
    ProductPriceInformation: {
        DefaultNetPrice: string;
        DefaultGrossPrice: string;
        DefaultVatPercent: string;
        PriceMargin: string;
        ProvisionPercentage: string;
        PriceGroups: Array<IPriceGroup>;
    };
    ProductAccountInformation?: {
        DefaultDomesticAccountNumber: string;
        DefaultEuAccountNumber: string;
        DefaultOutsideEUAccountNumber: string;
        DefaultInventoryAccountNumber: string;
    };
}
export interface IProduct {
    ProductBaseInformation: {
        NetvisorKey: string;
        ProductCode: string;
        Name: string;
        UnitPrice: string;
        UnitGrossPrice: string;
        [key: string]: any;
    };
    ProductBookKeepingDetails: {
        DefaultVatPercent: string;
        DefaultDomesticAccountNumber: string;
        DefaultEuAccountNumber: string;
        DefaultOutsideEUAccountNumber: string;
    };
    ProductInventoryDetails?: {
        InventoryAmount: string;
        InventoryMidPrice: string;
        InventoryValue: string;
        [key: string]: any;
    };
}
export declare class NetvisorProductMethod extends NetvisorMethod {
    constructor(client: NetvisorApiClient);
    /**
     * Save one product as product object
     * @param dataset as IProductDataSet
     * @param params as parameters with {method: add}
     * if editing product {method: add/edit, id: netvisorkey}
     */
    saveProductByDataSet(dataset: IProductDataSet, params: any): Promise<string>;
    /**
     * Get product list from Netvisor
     * @param params to narrow search with keyword or netvisor key
     */
    getProducts(params?: any): Promise<any>;
    getExtendedProducts(params?: any): Promise<IExtendedProduct[]>;
    /**
     * Get one or upto 400 product details
     * @param netvisorKey as comma delimited string to fetch more than one product -> e.g. '1' or '1,2,3, ...' for product list
     */
    getProductByNetvisorKey(netvisorKey: string): Promise<IProduct | IProduct[]>;
    getInventory(): Promise<{
        netvisorKey: string;
        productCode: string;
        name: string;
        totalAmount: string;
    }[]>;
    /**
     * Save inventory using inventory dataset
     * @param dataset as IInventory
     */
    saveInventoryByDataSet(dataset: IInventory): Promise<string>;
    /**
     * Save inventory with xml
     * @param fileContents xml data in string
     */
    saveInventoryByXmlData(fileContents: string): Promise<any>;
}
