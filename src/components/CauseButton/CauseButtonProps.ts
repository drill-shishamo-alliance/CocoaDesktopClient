import { WithStyles } from '@material-ui/core';
import styles from './CauseButtonStyles';
import { Cause } from 'src/apis/CocoaApi/models/Causes';

type CauseOfMoodButtonOwnProps = {
  cause: Cause;
  handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

type CauseOfMoodButtonProps = WithStyles<typeof styles> & CauseOfMoodButtonOwnProps;

export default CauseOfMoodButtonProps;
