// @ts-nocheck
import { NetvisorApiClient } from "..";
import { NetvisorMethod } from "./_method";
import * as xml2js from 'xml2js';


export interface ISalesPaymentList {
  NetvisorKey: [string];
  Name: [string];
  Date: [any];
  Sum: [number];
  ReferenceNumber:[string];
  param?: any;
}

export class NetvisorPaymentMethod extends NetvisorMethod {
  constructor(client: NetvisorApiClient) {
    super(client);
  }

  /**
   * Get salesperons list from Netvisor
   */
  async getSalesPayments(netvisorKey: string | number, params: any): Promise<any> {
    let params = {};
    params['invoicenetvisorkey'] = netvisorKey;
    const salesPaymentsRaw = await this._client.get('salespaymentlist.nv', params);

    var parser = new xml2js.Parser();
    //console.log(salesPaymentsRaw)
    const SalesPaymentList: Array<ISalesPaymentList> = await new Promise(async (resolve, reject) => {
      parser.parseString(salesPaymentsRaw, (error: string, xmlResult: any) => {
        if (error) return reject(error);

        const status: any = xmlResult.Root.ResponseStatus[0].Status;
        const json: any = xmlResult.Root.SalesPaymentList[0].SalesPayment;

        if (status[0] === 'OK') {
          resolve(json);
        } else {
          reject(status[1]);
        }
      });
    });
    //console.log(SalesPersonnelList)
    // SalesPersonnelList returns undefined if no salespersons in search criteria
    if (!SalesPaymentList) {
      return [];
    }
    
    const salesPayments = [];
    //console.log(SalesPaymentList)
    for(var i = 0; i < SalesPaymentList.length; i++){
      var item = SalesPaymentList[i]
      var salesPayment = {
        netvisorKey: item.NetvisorKey[0],
        name: item.Name[0],
        date: item.Date[0],
        sum: item.Sum[0],
        voucherId: item.VoucherID[0],
        accountName:item.PaymentAccountName[0],
        accountNumber:item.PaymentAccountNumber[0],
        lastModifiedTimestamp:item.LastModifiedTimestamp[0],
        paymentSource:item.PaymentSource[0]
      };
      salesPayments.push(salesPayment);
    }
    return salesPayments;
  }
}