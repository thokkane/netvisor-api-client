// @ts-nocheck
import { NetvisorApiClient } from '..';
import { NetvisorMethod } from './_method';
import * as xml2js from 'xml2js';

export interface ISalespersonList {
  NetvisorKey: [string];
  FirstName: [string];
  LastName: [string];
  param?: any;
}

export class NetvisorSalespersonMethod extends NetvisorMethod {
  constructor(client: NetvisorApiClient) {
    super(client);
  }

  /**
   * Get salesperons list from Netvisor
   */
  async getSalespersons(params?: any): Promise<any> {
    const salespersonsRaw = await this._client.get('salespersonnellist.nv', params);

    var parser = new xml2js.Parser();
    //console.log(salespersonsRaw)
    const SalesPersonnelList: Array<ISalespersonList> = await new Promise(async (resolve, reject) => {
      parser.parseString(salespersonsRaw, (error: string, xmlResult: any) => {
        if (error) return reject(error);

        const status: any = xmlResult.Root.ResponseStatus[0].Status;
        const json: any = xmlResult.Root.SalesPersonnelList[0].SalesPerson;

        if (status[0] === 'OK') {
          resolve(json);
        } else {
          reject(status[1]);
        }
      });
    });
    //console.log(SalesPersonnelList)
    // SalesPersonnelList returns undefined if no salespersons in search criteria
    if (!SalesPersonnelList) {
      return [];
    }
    
    const salespersons = [];
    //var salespersonList = SalesPersonnelList[0];
    //salespersonList = salespersonList.SalesPerson;
    //console.log(salespersonList)
    for(var i = 0; i < SalesPersonnelList.length; i++){
      var item = SalesPersonnelList[i]
      var salesperson = {
        netvisorKey: item['$'].NetvisorKey[0],
        firstName: item.FirstName[0],
        lastName: item.LastName[0],
      };
      salespersons.push(salesperson);
    }
    /* for (const item of SalesPersonnelList) {
      console.log(item)
      const salesperson = {
        netvisorKey: item.NetvisorKey[0],
        firstname: item.FirstName[0],
        lastName: item.LastName[0],
      };
      salespersons.push(salesperson);
    } */
    //console.log(salespersons)
    return salespersons;
  }
}
