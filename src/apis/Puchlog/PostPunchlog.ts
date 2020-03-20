import Axios from './Axios';

export type PostPunchlogRequest = {
  employeeId: number;
  moodId: string;
  causeIds: string[];
};

export type PostPunchlogResponse = undefined;

export async function postPunchlogApi(body: PostPunchlogRequest) {
  try {
    return await Axios.post<PostPunchlogResponse>('/punchlogs', body);
  } catch (e) {
    throw new Error(e);
  }
}
