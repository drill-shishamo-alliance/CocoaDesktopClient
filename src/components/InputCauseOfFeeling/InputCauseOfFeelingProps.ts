import { WithStyles } from '@material-ui/core';
import styles from './InputCauseOfFeelingStyles';
import { CauseOfFeelingState } from 'src/states/CauseOfFeelingState';

export type InputCauseOfFeelingConnectedProps = {
  selectedFeelingId: number;
  causeOfFeelingStates: CauseOfFeelingState[];
};

export type InputCauseOfFeelingDispatchProps = {
  switchInputFeeling: () => void;
};

type InputCauseOfFeelingProps = WithStyles<typeof styles> &
  InputCauseOfFeelingDispatchProps &
  InputCauseOfFeelingConnectedProps;

export default InputCauseOfFeelingProps;
