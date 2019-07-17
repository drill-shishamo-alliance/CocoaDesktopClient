import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FeelingButtonProps from './FeelingButtonProps';
import styles from './FeelingButtonStyles';
import FeelingIcon from 'src/components/FeelingIcon/FeelingIcon';
import FeelingText from '../FeelingText/FeelingText';

const FeelingButton = (props: FeelingButtonProps) => {
  const { classes, feeling, handleClick } = props;

  return (
    <div className={classes.buttonContainer}>
      <IconButton
        className={classes.button}
        aria-label={`${feeling.name}-button`}
        onClick={handleClick(feeling)}
      >
        <FeelingIcon feeling={feeling} />
      </IconButton>
      <FeelingText feeling={feeling} marginTop={-15} />
    </div>
  );
};

export default withStyles(styles)(FeelingButton);
