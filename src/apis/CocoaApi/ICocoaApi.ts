import { InputDataParams } from './models/InputDataModel';

// メソッド名、引数の型はきっちり定義する。戻り値は本実装でTypeScriptがしっかりと推論してくれる
export default interface ICocoaApi {
  getCauseOfFeelings(respondent: string): Promise<any>;
  getFeelings(respondent: string): Promise<any>;
  postInputData(inputData: InputDataParams): Promise<any>;
}
