import { NetvisorApiClient } from '..';
import { NetvisorMethod } from './_method';
import { IAccountingBudgetDataSet } from '../intefaces/budget';
type BufferEncoding = 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'latin1' | 'binary' | 'hex';
export declare class NetvisorBudgetMethod extends NetvisorMethod {
    constructor(client: NetvisorApiClient);
    /**
     * Save one months budget / account to Netvisor (with dimensions)
     * @param dataset as IAccountingBudgetDataSet as budget object
     */
    saveAccountingBudgetByDataSet(dataset: IAccountingBudgetDataSet): Promise<string>;
    /**
     * Save one months budget / account to Netvisor (without dimensions)
     * @param dataset as budget object
     */
    saveAccountBudgetByDataSet(dataset: any): Promise<string>;
    /**
     * Save one months budget / file to Netvisor (with dimensions)
     * @param filePath
     */
    saveAccountingBudgetByXmlFilePath(filePath: string, encoding?: BufferEncoding): Promise<string>;
}
export {};
