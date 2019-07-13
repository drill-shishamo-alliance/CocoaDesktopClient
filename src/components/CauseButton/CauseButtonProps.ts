import { WithStyles } from '@material-ui/core';
import styles from './CauseButtonStyles';
import { Cause } from 'src/apis/CocoaApi/models/Causes';

type CauseOfFeelingButtonOwnProps = {
  cause: Cause;
  handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

type CauseOfFeelingButtonProps = WithStyles<typeof styles> & CauseOfFeelingButtonOwnProps;

export default CauseOfFeelingButtonProps;
