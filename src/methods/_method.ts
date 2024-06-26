import { NetvisorApiClient } from '..';
import fs from 'fs';

type BufferEncoding = 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'latin1' | 'binary' | 'hex';

export class NetvisorMethod {
  protected _client!: NetvisorApiClient;
  protected _endpointUri!: string;

  constructor(client: NetvisorApiClient) {
    Object.defineProperty(this, '_client', {
      enumerable: false,
      value: client
    });
  }

  /**
   * Save xml batch to Netvisor (e.g. invoice, voucher)
   * @param fileContents xml data in string
   * @param options method for adding or editing data, plus other possible options
   */
  async saveByXmlData(fileContents: string, options?: {}): Promise<any> {
    if (!options) options = { method: 'add' };
    return await this._client.post(this._endpointUri, fileContents, options);
  }

  /**
   * Get the raw xml response from Netvisor with given resource.
   * If none of the other methods work for your needs or you need the raw xml, use this.
   * @param resource Integration resource endpoint, e.g. 'getsalesinvoice.nv' or 'getpurchaseinvoice.nv'
   * @param params Parameters supported by the given resource endpoint. Check the supported parameters from Netvisor documentation.
   */
  async getXmlData(resource: string, params?: {}): Promise<string> {
    return await this._client.get(resource, params);
  }

  /**
   * Save xml batch to Netvisor (e.g. invoice, voucher)
   * @param filePath path to xml file
   */
  async saveByXmlFilePath(filePath: string, encoding: BufferEncoding = 'latin1') {
    const fileContents = fs.readFileSync(filePath, { encoding });

    return await this._client.post(this._endpointUri, fileContents);
  }
}
