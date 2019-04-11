import { CauseOfFeelingType } from 'src/models/states/CauseOfFeelingState';

type InputCauseOfFeelingState = {
    inputCauseOfFeelings: CauseOfFeelingType[];
    toggledButtons: boolean[];
    isSend: boolean;
    sendButtonText: string;
};

export default InputCauseOfFeelingState;
