import axios from 'axios';
import { PostLogRequest, PostLogResponse } from './models/Log';
import { GetCausesResponse, GetCausesQuery } from './models/Causes';
import { GetFeelingsResponse, GetFeelingsQuery } from './models/Feelings';

export default class CocoaApi {
  constructor() {
    axios.defaults.baseURL = process.env.REACT_APP_COCOA_API_DEV;
  }

  public async getFeelings(query: GetFeelingsQuery) {
    try {
      return await axios.get<GetFeelingsResponse>('/feelings', {
        params: query,
      });
    } catch (error) {
      throw error;
    }
  }

  public async getCauses(query: GetCausesQuery) {
    try {
      return await axios.get<GetCausesResponse>('/causes', {
        params: query,
      });
    } catch (error) {
      throw error;
    }
  }

  public async postLog(body: PostLogRequest) {
    try {
      return await axios.post<PostLogResponse>('/log', body);
    } catch (error) {
      throw error;
    }
  }
}
