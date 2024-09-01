import { NetvisorApiClient } from "..";
import { NetvisorMethod } from "./_method";
export interface ISalesPaymentList {
    NetvisorKey: [string];
    Name: [string];
    Date: [any];
    Sum: [number];
    ReferenceNumber: [string];
    param?: any;
}
export declare class NetvisorPaymentMethod extends NetvisorMethod {
    constructor(client: NetvisorApiClient);
    /**
     * Get salesperons list from Netvisor
     */
    getSalesPayments(netvisorKey: string | number, params: any): Promise<any>;
}
