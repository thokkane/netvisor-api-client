import { NetvisorApiClient } from '..';
import { NetvisorMethod } from './_method';
import { IVendor } from '../intefaces/vendors';
export declare class NetvisorVendorMethod extends NetvisorMethod {
    constructor(client: NetvisorApiClient);
    /**
     * Get vendor(s) from Netvisor
     * See queryparams from Netvisor support page
     */
    getVendors(params: object): Promise<IVendor[]>;
}
