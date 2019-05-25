import { WithStyles } from '@material-ui/core';
import styles from './FeelingButtonStyles';
import { FeelingType } from 'src/states/FeelingState';

type FeelingButtonOwnProps = {
  handleClick?: (
    feelingType: FeelingType
  ) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  feelingType: FeelingType;
};

type FeelingButtonProps = WithStyles<typeof styles> & FeelingButtonOwnProps;

export default FeelingButtonProps;
