import { CauseOfFeelingType } from 'src/models/states/CauseOfFeelingState';

type InputCauseOfFeelingState = {
    inputCauseOfFeelings: CauseOfFeelingType[];
    toggledButtons: boolean[];
    isSend: boolean;
    inputCauseOfFeelingsText: string;
    sendButtonText: string;
    isSendButtonDisabled: boolean;
};

export default InputCauseOfFeelingState;
