import { WithStyles } from '@material-ui/core';
import styles from './FeelingButtonStyles';
import { Feeling } from 'src/apis/CocoaApi/models/Feelings';

type FeelingButtonOwnProps = {
  feeling: Feeling;
  handleClick: (
    selectedFeeling: Feeling
  ) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

type FeelingButtonProps = WithStyles<typeof styles> & FeelingButtonOwnProps;
export default FeelingButtonProps;
