import { Mood } from './Model';
import Axios from './Axios';

export type GetMoodsRequest = {
  departmentId: number;
};

export type GetMoodsResponse = Mood[];

export async function getMoodsApi({ departmentId }: GetMoodsRequest) {
  try {
    return await Axios.get<GetMoodsResponse>(`/moods/${departmentId}`);
  } catch (e) {
    throw new Error(e);
  }
}
