import { NetvisorApiClient } from '..';
import { NetvisorMethod } from './_method';
import { ITripexpense } from '../intefaces/tripexpense';
export declare class NetvisorTripexpenseMethod extends NetvisorMethod {
    constructor(client: NetvisorApiClient);
    /**
     * Save workday hours per employee
     * @param dataset as ITripexpense
     */
    saveTripByDataSet(dataset: ITripexpense): Promise<string>;
}
