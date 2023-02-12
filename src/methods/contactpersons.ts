import { NetvisorApiClient } from '..';
import { NetvisorMethod } from './_method';
import * as js2xmlparser from 'js2xmlparser';
import { IContactPerson } from '../intefaces/contactpersons';

export class NetvisorContactPersonMethod extends NetvisorMethod {
  constructor(client: NetvisorApiClient) {
    super(client);

    this._endpointUri = 'contactperson.nv';
  }

  /**
   * Save one customer as customer object
   * @param dataset as IContactPerson
   * @param params as parameters with {method: add}
   * if editing customer {method: add/edit, id: netvisorkey}
   */
  async saveContactPersonByDataSet(dataset: IContactPerson, params: any) {
    const xml = js2xmlparser.parse('Root', dataset);

    return await this._client.post(this._endpointUri, xml.replace("<?xml version='1.0'?>", ''), params);
  }
}
