import { InputDataParams } from './models/InputDataModel';

// メソッド名、引数の型はきっちり定義する。戻り値は本実装でTypeScriptがしっかりと推論してくれる
export default interface ICocoaApi {
  getCauseOfFeelings(): Promise<any>;
  getFeelings(): Promise<any>;
  postInputData(inputData: InputDataParams): Promise<any>;
}
