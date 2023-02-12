import { NetvisorApiClient } from '..';
import { NetvisorMethod } from './_method';
import { IPayrollPeriodRecord, IWorkday } from '../intefaces/workday';
export declare class NetvisorWorkdayMethod extends NetvisorMethod {
    constructor(client: NetvisorApiClient);
    /**
     * Save workday hours per employee
     * @param dataset as IWorkday
     */
    saveWorkdayByDataSet(dataset: IWorkday): Promise<string>;
    /**
     * Save payroll period record
     * @param dataset as IPayrollPeriodRecord
     */
    savePayrollPeriodRecordByDataSet(dataset: IPayrollPeriodRecord): Promise<string>;
}
