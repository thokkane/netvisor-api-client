import { NetvisorApiClient } from '..';
import { NetvisorMethod } from './_method';
import { IEmployee } from '../intefaces/employee';
type Method = {
    method: 'add' | 'edit';
};
export declare class NetvisorEmployeeMethod extends NetvisorMethod {
    constructor(client: NetvisorApiClient);
    /**
     * Save employee data
     * @param dataset as IEmployee
     * @param params use { method: 'add' } or { method: 'edit' }
     */
    saveEmployeeByDataSet(dataset: IEmployee, params: Method): Promise<string>;
    /**
     * Fetch employee salary parameters as xml
     * @param employeeId as social security no or employee number
     * @param identifiertype optional, defaults as 'pin' for social security no, use 'number' for employee number
     */
    getEmployeeSalaryParameters(employeeId: string, identifiertype?: string): Promise<string>;
}
export {};
