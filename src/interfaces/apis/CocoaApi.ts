import axios, { AxiosResponse, AxiosInstance, AxiosStatic } from 'axios';
import FeelingState from '../../states/FeelingState';
import CauseOfFeelingState from '../../states/CauseOfFeelingState';
import ICocoaApi from 'src/interfaces/apis/interface/ICocoaApi';
import { InputData } from './model/InputDataModel';
import { CauseofFeelingModel } from './model/CauseOfFeelingModel';
import { FeelingModel } from './model/FeelingModel';

export const localAddress = 'http://127.0.0.1:8080';
export const devAddress = 'http://13.78.26.191:8080';

export default class CocoaApi implements ICocoaApi {
  private axios_instance: AxiosInstance;

  constructor() {
    this.axios_instance = axios.create({
      baseURL: devAddress,
    });
  }

  public async getCauseOfFeeling(): Promise<CauseofFeelingModel> {
    const response: AxiosResponse<any> = await this.axios_instance
      .get('/causeoffeeling')
      .catch(err => {
        throw new Error('throw from await/catch');
      });
    return response.data;
  }

  public async getFeeling(): Promise<FeelingModel> {
    const response: AxiosResponse<any> = await this.axios_instance.get('/feeling').catch(err => {
      throw new Error('throw from await/catch');
    });
    return response.data;
  }

  public async postInputData(inputData: InputData): Promise<string> {
    const response: AxiosResponse<any> = await this.axios_instance
      .post('/inputdata', JSON.stringify(inputData))
      .catch(err => {
        throw new Error('throw from await/catch');
      });
    return response.data;
  }
}
