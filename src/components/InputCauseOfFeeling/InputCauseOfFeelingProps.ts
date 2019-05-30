import { WithStyles } from '@material-ui/core';
import styles from './InputCauseOfFeelingStyles';
import { CauseOfFeelingState } from 'src/states/CauseOfFeelingState';
import { InputDataParams } from 'src/apis/CocoaApi/models/InputDataModel';

export type InputCauseOfFeelingConnectedProps = {
  selectedFeelingId: number;
  causeOfFeelingStates: CauseOfFeelingState[];
};

export type InputCauseOfFeelingDispatchProps = {
  switchInputFeeling: () => void;
  postFeelingAndCausesRequest: (params: InputDataParams) => void;
};

type InputCauseOfFeelingProps = WithStyles<typeof styles> &
  InputCauseOfFeelingDispatchProps &
  InputCauseOfFeelingConnectedProps;

export default InputCauseOfFeelingProps;
