import { WithStyles } from '@material-ui/core';
import styles from './InputCauseOfFeelingStyles';
import { FeelingType } from 'src/models/states/FeelingState';

export type InputCauseOfFeelingConnectedProps = {
    selectedFeelingType: FeelingType;
};

type InputCauseOfFeelingProps = WithStyles<typeof styles> &
    InputCauseOfFeelingConnectedProps;

export default InputCauseOfFeelingProps;
