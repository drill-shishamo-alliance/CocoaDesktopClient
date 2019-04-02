import { WithStyles } from '@material-ui/core';
import styles from './CauseOfFeelingButtonStyles';
import { CauseOfFeelingType } from 'src/models/states/CauseOfFeelingState';

type CauseOfFeelingButtonOwnProps = {
    causeOfFeelingType: CauseOfFeelingType;
};

type CauseOfFeelingButtonProps = WithStyles<typeof styles> &
    CauseOfFeelingButtonOwnProps;

export default CauseOfFeelingButtonProps;
