import { NetvisorApiClient } from '..';
import { NetvisorMethod } from './_method';
export interface ISalespersonList {
    NetvisorKey: [string];
    FirstName: [string];
    LastName: [string];
    param?: any;
}
export declare class NetvisorSalespersonMethod extends NetvisorMethod {
    constructor(client: NetvisorApiClient);
    /**
     * Get salesperons list from Netvisor
     */
    getSalespersons(params?: any): Promise<any>;
}
