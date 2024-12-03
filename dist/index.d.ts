import { NetvisorAccountingMethod } from './methods/accounting';
import { NetvisorCustomerMethod } from './methods/customers';
import { NetvisorContactPersonMethod } from './methods/contactpersons';
import { NetvisorInvoiceOrderMethod } from './methods/orderinvoicing';
import { NetvisorSalespersonMethod } from './methods/salespersons';
import { NetvisorPaymentMethod } from './methods/payments';
import { NetvisorSalesMethod } from './methods/salesinvoice';
import { NetvisorBudgetMethod } from './methods/budget';
import { NetvisorVendorMethod } from './methods/vendors';
import { NetvisorProductMethod } from './methods/product';
import { NetvisorPurchaseInvoiceMethod } from './methods/purchaseinvoice';
import { NetvisorWorkdayMethod } from './methods/workday';
import { NetvisorEmployeeMethod } from './methods/employee';
import { NetvisorTripexpenseMethod } from './methods/tripexpense';
import CacheableLookup from 'cacheable-lookup';
export interface INetvisorApiClientOptions {
    /** Integration name, sent as `X-Netvisor-Authentication-Sender` in requests */
    integrationName: string;
    customerId: string;
    customerKey: string;
    partnerId: string;
    partnerKey: string;
    organizationId: string;
    language?: string;
    baseUri?: string;
    /** Request timeout in milliseconds, defaults to 120000 (120 secs) */
    timeout?: number;
    dnsCache?: CacheableLookup | boolean;
}
export interface INetvisorRequestHeaders {
    [key: string]: any;
    'X-Netvisor-Authentication-Sender': string;
    'X-Netvisor-Authentication-CustomerId': string;
    'X-Netvisor-Authentication-PartnerId': string;
    'X-Netvisor-Authentication-Timestamp': string;
    'X-Netvisor-Authentication-TransactionId': string;
    'X-Netvisor-Interface-Language': string | undefined;
    'X-Netvisor-Organisation-ID': string;
    'X-Netvisor-Authentication-MAC'?: string;
    'X-Netvisor-Authentication-MACHashCalculationAlgorithm': string;
    'Content-Type'?: string;
}
export declare class NetvisorApiClient {
    [propName: string]: any;
    options: INetvisorApiClientOptions;
    readonly accounting: NetvisorAccountingMethod;
    readonly budget: NetvisorBudgetMethod;
    readonly customers: NetvisorCustomerMethod;
    readonly contactpersons: NetvisorContactPersonMethod;
    readonly salespersons: NetvisorSalespersonMethod;
    readonly invoiceorder: NetvisorInvoiceOrderMethod;
    readonly payments: NetvisorPaymentMethod;
    readonly product: NetvisorProductMethod;
    readonly purchase: NetvisorPurchaseInvoiceMethod;
    readonly sales: NetvisorSalesMethod;
    readonly workday: NetvisorWorkdayMethod;
    readonly employee: NetvisorEmployeeMethod;
    readonly tripexpense: NetvisorTripexpenseMethod;
    readonly vendors: NetvisorVendorMethod;
    constructor(options: INetvisorApiClientOptions);
    _generateHeaderMAC(url: string, headers: INetvisorRequestHeaders): string;
    _generateHeaders(url: string, params?: any): INetvisorRequestHeaders;
    _generateUrl(endpointUri: string): string;
    post(endpointUri: string, body: string, params?: any): Promise<string>;
    get(endpointUri: string, params?: any): Promise<string>;
    _checkRequestStatus(request: any): Promise<any>;
}
