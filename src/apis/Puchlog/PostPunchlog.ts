import Axios from './Axios';

export type PostPunchlogRequest = {
  employee_id: number;
  mood_id: string;
  cause_ids: number[];
};

export type PostPunchlogResponse = undefined;

export async function postPunchlogApi(body: PostPunchlogRequest) {
  try {
    return await Axios.post<PostPunchlogResponse>('/punchlogs', body);
  } catch (e) {
    throw new Error(e);
  }
}
