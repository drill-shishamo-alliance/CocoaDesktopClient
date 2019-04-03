import { WithStyles } from '@material-ui/core';
import styles from './InputCauseOfFeelingStyles';
import { FeelingType } from 'src/models/states/FeelingState';

export type InputCauseOfFeelingConnectedProps = {
    selectedFeelingType: FeelingType;
};

export type InputCauseOfFeelingDispatchProps = {
    switchInputFeeling: () => void;
};

type InputCauseOfFeelingProps = WithStyles<typeof styles> &
    InputCauseOfFeelingDispatchProps &
    InputCauseOfFeelingConnectedProps;

export default InputCauseOfFeelingProps;
