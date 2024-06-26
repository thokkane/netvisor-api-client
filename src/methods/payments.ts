import { NetvisorApiClient } from "..";
import fs from 'fs';
import path from 'path';
import { NetvisorMethod } from "./_method";

export class NetvisorPaymentMethod extends NetvisorMethod {
  constructor(client: NetvisorApiClient) {
    super(client);

    this._endpointUri = 'payment.nv';
  }

}