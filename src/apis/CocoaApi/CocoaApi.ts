import axios from './Axios';
import { PostLogRequest, PostLogResponse } from './models/Log';
import { GetCausesResponse, GetCausesQuery } from './models/Causes';
import { GetFeelingsResponse, GetFeelingsQuery } from './models/Feelings';

class CocoaApi {
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

export default new CocoaApi();
