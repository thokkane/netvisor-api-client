import { NetvisorApiClient } from '..';
import { NetvisorMethod } from './_method';
import { INewVoucher } from '../intefaces/accounting';
export declare class NetvisorAccountingMethod extends NetvisorMethod {
    constructor(client: NetvisorApiClient);
    /**
     * Save one voucher as a voucher object
     * @param dataset as INewVoucher
     */
    saveVoucherByDataSet(dataset: INewVoucher): Promise<string>;
    /**
     * Get vouchers from Netvisor accounting
     * @param startDate mandatory
     * @param endDate mandatory
     */
    getVouchers(startDate: string, endDate: string): Promise<any>;
    getDimensions(): Promise<any>;
    /**
     * Get account list for budgeting without dimensions
     * @param year mandatory
     * @returns array of budget accounts
     */
    getBudgetAccountList(year: number): Promise<any>;
}
