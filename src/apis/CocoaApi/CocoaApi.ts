import axios, { AxiosResponse, AxiosInstance, AxiosStatic } from 'axios';
import ICocoaApi from './ICocoaApi';
import { InputDataParams, InputDataResponse } from './models/InputDataModel';
import { GetCauseofFeelingsResponse } from './models/CauseOfFeelingModel';
import { GetFeelingsResponse } from './models/FeelingModels';
import FeelingState from 'src/states/FeelingState';
import CauseOfFeelingState from 'src/states/CauseOfFeelingState';

export const localAddress = 'http://127.0.0.1:8080';
export const devAddress = 'http://13.78.26.191:8080';

export default class CocoaApi implements ICocoaApi {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: devAddress,
    });
  }

  public async getFeelings(respondent: string) {
    try {
      const response: AxiosResponse<GetFeelingsResponse> = await this.axios.get('/feelings', {
        params: {
          respondent,
        },
      });
      return response;
    } catch {
      throw new Error('Catch error at GET:/feelings');
    }
  }

  public mapGetFeelingsResponseToFeelings(response: GetFeelingsResponse): FeelingState[] {
    const feelings: FeelingState[] = response.feelings.map(
      f =>
        ({
          id: f.feeling_id,
          name: f.name,
        } as FeelingState)
    );

    return feelings;
  }

  public async getCauseOfFeelings(respondent: string) {
    try {
      const response: AxiosResponse<GetCauseofFeelingsResponse> = await this.axios.get(
        '/causeoffeeings',
        {
          params: {
            respondent,
          },
        }
      );
      return response;
    } catch {
      throw new Error('Catch error at GET:/causeoffeeings');
    }
  }

  public mapGetCauseOfFeelingsResponseToCauses(
    response: GetCauseofFeelingsResponse
  ): CauseOfFeelingState[] {
    const causes: CauseOfFeelingState[] = response.cause_of_feelings.map(
      c =>
        ({
          id: c.cause_of_feeling_id,
          name: c.name,
        } as CauseOfFeelingState)
    );

    return causes;
  }

  public async postInputData(params: InputDataParams) {
    try {
      const response: AxiosResponse<InputDataResponse> = await this.axios.post(
        '/inputdata',
        params
      );
      return response;
    } catch {
      throw new Error('Catch error at POST:/inputdata');
    }
  }
}
