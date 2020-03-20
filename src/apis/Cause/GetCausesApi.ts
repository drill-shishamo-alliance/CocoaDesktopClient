import { Cause } from './Model';
import Axios from './Axios';

export type getCausesRequest = {
  departmentId: number;
};

export type GetCausesResponse = Cause[];

export async function getCausesApi({ departmentId }: getCausesRequest) {
  try {
    return await Axios.get<GetCausesResponse>(`/causes/${departmentId}`);
  } catch (e) {
    throw new Error(e);
  }
}
