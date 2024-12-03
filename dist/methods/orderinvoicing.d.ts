import { NetvisorApiClient } from '..';
import { NetvisorMethod } from './_method';
export interface ISalesInvoiceProductLine {
    invoicingproductline: {
        netvisorKey: number;
        deliveryDate: {
            '@': {
                format: string;
            };
            '#': string;
        };
        deliveryamount: {
            '@': {
                ispostdelivery: string;
            };
            '#': string;
        };
    };
}
export interface IInvoiceOrder {
    salesorderInvoicing: {
        invoicingCustomer: {
            netvisorKey: number;
            invoiceDate: {
                '@': {
                    format: string;
                };
                '#': string;
            };
            invoicingProductLines: {
                invoicingProductLine: Array<ISalesInvoiceProductLine>;
            };
        };
    };
}
export declare class NetvisorInvoiceOrderMethod extends NetvisorMethod {
    constructor(client: NetvisorApiClient);
    invoiceOrder(dataset: any, params: any): Promise<string>;
}
