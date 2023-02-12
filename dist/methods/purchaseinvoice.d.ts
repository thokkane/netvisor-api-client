import { NetvisorApiClient } from '..';
import { NetvisorMethod } from './_method';
import { IPurchaseInvoice, IPurchaseInvoiceOutput, IPurchaseOrderOutput } from '../intefaces/purchaseinvoice';
export declare class NetvisorPurchaseInvoiceMethod extends NetvisorMethod {
    constructor(client: NetvisorApiClient);
    /**
     * Save one invoice as a invoice object
     * @param dataset as IPurchaseInvoice
     */
    saveInvoiceByDataSet(dataset: IPurchaseInvoice): Promise<string>;
    /**
     * Fetch complete purchase invoices
     * @param params as filtering
     */
    getPurchaseInvoices(params: any): Promise<IPurchaseInvoiceOutput[]>;
    getPurchaseInvoicesByNetvisorKeyList(invoiceKeys: string[] | number[]): Promise<IPurchaseInvoiceOutput[]>;
    /**
     * Fetch complete purchase orders
     * @param params as filtering
     */
    getPurchaseOrders(params: any): Promise<IPurchaseOrderOutput[]>;
    getPurchaseOrdersByNetvisorKeyList(orderKeys: string[] | number[]): Promise<IPurchaseOrderOutput[]>;
}
