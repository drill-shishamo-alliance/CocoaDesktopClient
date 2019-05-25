import { CauseOfFeelingType } from 'src/states/CauseOfFeelingState';

type InputCauseOfFeelingState = {
  inputCauseOfFeelings: CauseOfFeelingType[];
  toggledButtons: boolean[];
  isSend: boolean;
  inputCauseOfFeelingsText: string;
  sendButtonText: string;
  isSendButtonDisabled: boolean;
};

export default InputCauseOfFeelingState;
