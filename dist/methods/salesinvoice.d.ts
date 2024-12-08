import { NetvisorApiClient } from '..';
import { NetvisorMethod } from './_method';
import { ISalesInvoice, ISalesPayment } from '../intefaces/salesinvoice';
export declare class NetvisorSalesMethod extends NetvisorMethod {
    constructor(client: NetvisorApiClient);
    /**
     * Save one invoice as a invoice object
     * @param dataset as ISalesInvoice
     * * @param params as parameters with {method: add}
     * if editing product {method: add/edit, id: netvisorkey}
     */
    saveInvoiceByDataSet(dataset: ISalesInvoice, params: any): Promise<string>;
    /**
     * Fetch sales or orders with invoicelines
     * @param params use { listtype: '' } for invoices
     * and { listtype: 'preinvoice' } for orders
     */
    getSales(params: any): Promise<any[]>;
    deleteSalesInvoice(params: any): Promise<string>;
    getSalesInvoicesByNetvisorKeyList(netvisorKeys: string[] | number[], params: any): Promise<any[]>;
    /**
     * Save one salespayment as a payment object
     * @param dataset as ISalesPayment
     */
    saveSalesPaymentByDataSet(dataset: ISalesPayment): Promise<string>;
}
