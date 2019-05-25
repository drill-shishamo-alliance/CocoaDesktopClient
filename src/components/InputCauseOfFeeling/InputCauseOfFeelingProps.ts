import { WithStyles } from '@material-ui/core';
import styles from './InputCauseOfFeelingStyles';
import FeelingState from 'src/states/FeelingState';
import CauseOfFeelingState from 'src/states/CauseOfFeelingState';

export type InputCauseOfFeelingConnectedProps = {
  selectedFeelingState: FeelingState;
  causeOfFeelingStates: CauseOfFeelingState[];
};

export type InputCauseOfFeelingDispatchProps = {
  switchInputFeeling: () => void;
};

type InputCauseOfFeelingProps = WithStyles<typeof styles> &
  InputCauseOfFeelingDispatchProps &
  InputCauseOfFeelingConnectedProps;

export default InputCauseOfFeelingProps;
