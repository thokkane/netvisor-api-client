// @ts-nocheck
import { NetvisorApiClient } from '..';
import { NetvisorMethod } from './_method';
import * as js2xmlparser from 'js2xmlparser';


export interface ISalesInvoiceProductLine {
  invoicingproductline:{
    netvisorKey: number;
    deliveryDate: { '@': { format: string }; '#': string };
    deliveryamount:{ '@': { ispostdelivery: string }; '#': string };
  }
}

export interface IInvoiceOrder {
  salesorderInvoicing: {
    invoicingCustomer:{
      netvisorKey: number;
      invoiceDate: { '@': { format: string }; '#': string };
      invoicingProductLines:{
        invoicingProductLine: Array<ISalesInvoiceProductLine>;
      }      
    }
  };
}

export class NetvisorInvoiceOrderMethod extends NetvisorMethod {
  constructor(client: NetvisorApiClient) {
    super(client);

    this._endpointUri = 'salesorderinvoicing.nv';
  }

  async invoiceOrder(dataset: any,  params: any) {
    const xml = js2xmlparser.parse('Root', dataset);
    return await this._client.post(this._endpointUri, xml.replace("<?xml version='1.0'?>",''),params);
  }
}
