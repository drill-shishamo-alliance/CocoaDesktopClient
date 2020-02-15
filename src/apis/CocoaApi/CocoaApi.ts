import axios from './Axios';
import { PostLogRequest, PostLogResponse } from './models/Log';
import { GetCausesResponse, GetCausesQuery } from './models/Causes';
import { GetMoodsResponse, GetMoodsQuery } from './models/Moods';

class CocoaApi {
  public async getMoods(_: GetMoodsQuery) {
    try {
      return await axios.get<GetMoodsResponse>('/moods');
    } catch (error) {
      throw error;
    }
  }

  public async getCauses(_: GetCausesQuery) {
    try {
      return await axios.get<GetCausesResponse>('/causes');
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
