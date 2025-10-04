// @ts-nocheck
import got, { Got, GotReturn } from 'got';
import { NetvisorAccountingMethod } from './methods/accounting';
import { NetvisorCustomerMethod } from './methods/customers';
import { NetvisorContactPersonMethod } from './methods/contactpersons';
//import { NetvisorInvoiceOrderMethod } from './methods/invoiceOrder';
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
import moment from 'moment';
import crypto from 'crypto';
import * as xml2js from 'xml2js';
import { HttpsAgent } from 'agentkeepalive';
import CacheableLookup from 'cacheable-lookup';


const httpsAgent = new HttpsAgent();
const cacheableLookup = new CacheableLookup();

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

/* export interface INetvisorRequestHeaders {
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
} */

export interface NetvisorRequestHeaders {
  [key: string]: any;

  'X-Netvisor-Authentication-Sender': string;
  'X-Netvisor-Authentication-CustomerId': string;
  'X-Netvisor-Authentication-PartnerId': string;
  'X-Netvisor-Authentication-Timestamp': string;
  'X-Netvisor-Authentication-TimestampUnix': string | number;
  'X-Netvisor-Authentication-TransactionId': string;
  'X-Netvisor-Interface-Language'?: string;
  'X-Netvisor-Organisation-ID': string;
  'X-Netvisor-Authentication-UseHTTPResponseStatusCodes'?: '1';
  'X-Netvisor-Authentication-MAC'?: string;
  'X-Netvisor-Authentication-MACHashCalculationAlgorithm': string;
  'Content-Type'?: string;
}

export class NetvisorApiClient {
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

  constructor(options: INetvisorApiClientOptions) {
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

    this.accounting = new NetvisorAccountingMethod(this);
    this.budget = new NetvisorBudgetMethod(this);
    this.customers = new NetvisorCustomerMethod(this);
    this.contactpersons = new NetvisorContactPersonMethod(this);
    this.salespersons = new NetvisorSalespersonMethod(this);
    this.invoiceorder = new NetvisorInvoiceOrderMethod(this)
    this.payments = new NetvisorPaymentMethod(this);
    this.product = new NetvisorProductMethod(this);
    this.purchase = new NetvisorPurchaseInvoiceMethod(this);
    this.sales = new NetvisorSalesMethod(this);
    this.workday = new NetvisorWorkdayMethod(this);
    this.employee = new NetvisorEmployeeMethod(this);
    this.tripexpense = new NetvisorTripexpenseMethod(this);
    this.vendors = new NetvisorVendorMethod(this);

    this.options = options;

    // If dnsCache is true, then fallback to internal instance of cacheableLookup
    if (this.options.dnsCache === true) {
      this.options.dnsCache = cacheableLookup;
    }
  }

  /* _generateHeaderMAC(url: string, headers: INetvisorRequestHeaders): string {
    return crypto
      .createHash('sha256')
      .update(
        `${url}&${headers['X-Netvisor-Authentication-Sender']}&${headers['X-Netvisor-Authentication-CustomerId']}&${headers['X-Netvisor-Authentication-Timestamp']}&${headers['X-Netvisor-Interface-Language']}&${headers['X-Netvisor-Organisation-ID']}&${headers['X-Netvisor-Authentication-TransactionId']}&${this.options.customerKey}&${this.options.partnerKey}`
      )
      .digest('hex');
  } 
  
  _generateHeaders(url: string, params?: any): INetvisorRequestHeaders {
    const headers: INetvisorRequestHeaders = {
      'X-Netvisor-Authentication-Sender': this.options.integrationName,
      'X-Netvisor-Authentication-CustomerId': this.options.customerId,
      'X-Netvisor-Authentication-PartnerId': this.options.partnerId,
      'X-Netvisor-Authentication-Timestamp': moment().format('YYYY-MM-DD HH:mm:ss.SSS'),
      'X-Netvisor-Authentication-TransactionId': crypto.randomBytes(32).toString('hex').substring(0, 16),
      'X-Netvisor-Interface-Language': this.options.language,
      'X-Netvisor-Organisation-ID': this.options.organizationId,
      'X-Netvisor-Authentication-MACHashCalculationAlgorithm': 'SHA256',
      'Content-Type': 'text/xml'
    };

    if (params) {
      const queryString = Object.keys(params)
        .map((key) => key + '=' + params[key])
        .join('&');
      url = `${url}?${queryString}`;
    }

    headers['X-Netvisor-Authentication-MAC'] = this._generateHeaderMAC(url, headers);

    return headers;
  }
  
  */



  _generateHeaderMAC(url: string, headers: NetvisorRequestHeaders): string {
    const key = this.options.customerKey + '&' + this.options.partnerKey;
    const message = [
      url,
      headers['X-Netvisor-Authentication-Sender'],
      headers['X-Netvisor-Authentication-CustomerId'],
      headers['X-Netvisor-Authentication-Timestamp'],
      headers['X-Netvisor-Interface-Language'],
      headers['X-Netvisor-Organisation-ID'],
      headers['X-Netvisor-Authentication-TransactionId'],
      headers['X-Netvisor-Authentication-TimestampUnix'],
      this.options.customerKey,
      this.options.partnerKey
    ].join('&');

    return crypto.createHmac('sha256', Buffer.from(key, 'latin1')).update(Buffer.from(message, 'latin1')).digest('hex');
  }


   _generateHeaders(url: string, params?: any): NetvisorRequestHeaders {
    const headers: NetvisorRequestHeaders = {
      'Content-Type': 'text/plain',
      'X-Netvisor-Authentication-Sender': this.options.integrationName,
      'X-Netvisor-Authentication-CustomerId': this.options.customerId,
      'X-Netvisor-Authentication-PartnerId': this.options.partnerId,
      'X-Netvisor-Authentication-Timestamp': new Date().toISOString().replace('T', ' ').replace('Z', ''),
      'X-Netvisor-Authentication-TimestampUnix': Math.floor(Date.now() / 1000).toString(),
      'X-Netvisor-Authentication-TransactionId': Date.now().toString() + crypto.randomBytes(32).toString('hex').substring(0, 16),
      'X-Netvisor-Interface-Language': this.options.language,
      'X-Netvisor-Organisation-ID': this.options.organizationId,
      'X-Netvisor-Authentication-UseHTTPResponseStatusCodes': '1',
      'X-Netvisor-Authentication-MACHashCalculationAlgorithm': 'HMACSHA256'
    };

    if (params) {
      const queryString = Object.keys(params)
        .map((key) => key + '=' + params[key])
        .join('&');
      url = `${url}?${queryString}`;
    }

    headers['X-Netvisor-Authentication-MAC'] = this._generateHeaderMAC(url, headers);

    return headers;
  }

  

  _generateUrl(endpointUri: string): string {
    return new URL(endpointUri, this.options.baseUri).href;
  }

  async post(endpointUri: string, body: string, params?: any): Promise<string> {
    const url = this._generateUrl(endpointUri);
    //console.log(url)
    const headers = this._generateHeaders(url, params);

    const request: any = await got.post(url, {
      body,
      headers,
      searchParams: params,
      timeout: {
        request: this.options.timeout
      },

      agent: { https: this.keepAliveAgent },
      dnsCache: this.options.dnsCache || undefined
    });

    try {
      await this._checkRequestStatus(request.body);

      return request.body;
    } catch (e: any) {
      throw new Error(e);
    }
  }

  async get(endpointUri: string, params?: any): Promise<string> {
    const url = this._generateUrl(endpointUri);

    const headers = this._generateHeaders(url, params);

    const request: any = await got(url, {
      headers,
      searchParams: params,
      timeout: {
        request: this.options.timeout
      },
      agent: { https: this.keepAliveAgent },
      dnsCache: this.options.dnsCache || undefined
    });

    try {
      await this._checkRequestStatus(request.body);

      return request.body;
    } catch (e: any) {
      throw new Error(e);
    }
  }

  _checkRequestStatus(request: any): Promise<any> {
    const xmlParser = new xml2js.Parser();

    return new Promise(async (resolve, reject) => {
      xmlParser.parseString(request, (error: string, xmlResult: any) => {
        if (error) return reject(error);

        const status: any = xmlResult.Root.ResponseStatus[0].Status;

        if (status[0] === 'OK') {
          resolve(true);
        } else {
          reject(status[1]);
        }
      });
    });
  }
}
