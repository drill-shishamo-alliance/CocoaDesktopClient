import { CauseofFeelingModel } from '../model/CauseOfFeelingModel';
import { FeelingModel } from '../model/FeelingModel';
import { InputData } from '../model/InputDataModel';

export default interface ICocoa {
  getCauseOfFeeling(): Promise<CauseofFeelingModel> | null;
  getFeeling(): Promise<FeelingModel> | null;
  postInputData(inputData: InputData): Promise<string> | null;
}
