import { NetvisorApiClient } from '..';
import { NetvisorMethod } from './_method';
import { IContactPerson } from '../intefaces/contactpersons';
export declare class NetvisorContactPersonMethod extends NetvisorMethod {
    constructor(client: NetvisorApiClient);
    /**
     * Save one customer as customer object
     * @param dataset as IContactPerson
     * @param params as parameters with {method: add}
     * if editing customer {method: add/edit, id: netvisorkey}
     */
    saveContactPersonByDataSet(dataset: IContactPerson, params: any): Promise<string>;
}
