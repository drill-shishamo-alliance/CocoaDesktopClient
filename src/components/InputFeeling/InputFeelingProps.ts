import { WithStyles } from '@material-ui/core';
import styles from './InputFeelingStyles';
import { FeelingState } from 'src/states/FeelingState';

export type InputFeelingDispatchProps = {
  switchInputCauseOfFeeling: (feelingState: FeelingState) => void;
};

export type InputFeelingConnectedProps = {
  feelingStates: FeelingState[];
};

type InputFeelingProps = WithStyles<typeof styles> &
  InputFeelingDispatchProps &
  InputFeelingConnectedProps;

export default InputFeelingProps;
