import { NetvisorApiClient } from '..';
import { NetvisorMethod } from './_method';
import { ICustomer, ICustomerList, INvCustomer } from '../intefaces/customers';
export declare class NetvisorCustomerMethod extends NetvisorMethod {
    constructor(client: NetvisorApiClient);
    /**
     * Save one customer as customer object
     * @param dataset as ICustomer
     * @param params as parameters with {method: add}
     * if editing customer {method: add/edit, id: netvisorkey}
     */
    saveCustomerByDataSet(dataset: ICustomer, params: any): Promise<string>;
    /**
     * Get customers from Netvisor
     * @param params to narrow search with keyword or netvisor key
     */
    getCustomers(params?: any): Promise<ICustomerList[]>;
    /**
     * Get customer from Netvisor using netvisorKey
     */
    getCustomerByNetvisorKey(netvisorKey: string): Promise<INvCustomer>;
}
