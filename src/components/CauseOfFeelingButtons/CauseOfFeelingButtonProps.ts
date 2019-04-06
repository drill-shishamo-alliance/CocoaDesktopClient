import { WithStyles } from '@material-ui/core';
import styles from './CauseOfFeelingButtonStyles';
import { CauseOfFeelingType } from 'src/models/states/CauseOfFeelingState';

type CauseOfFeelingButtonOwnProps = {
    causeOfFeelingType: CauseOfFeelingType;
    onClick: (
        causeOfFeelingType: CauseOfFeelingType
    ) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

type CauseOfFeelingButtonProps = WithStyles<typeof styles> &
    CauseOfFeelingButtonOwnProps;

export default CauseOfFeelingButtonProps;
