import { WithStyles } from '@material-ui/core';
import styles from './InputFeelingStyles';
import { FeelingType } from 'src/models/states/FeelingState';

export type InputFeelingDispatchProps = {
    switchInputCauseOfFeeling: (feelingType: FeelingType) => void;
};

type InputFeelingProps = WithStyles<typeof styles> & InputFeelingDispatchProps;

export default InputFeelingProps;
