import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MoodButtonProps from './MoodButtonProps';
import styles from './MoodButtonStyles';
import MoodIcon from '../../components/MoodIcon/MoodIcon';
import MoodText from '../MoodText/MoodText';

const MoodButton = (props: MoodButtonProps) => {
  const { classes, mood, handleClick } = props;

  return (
    <div className={classes.buttonContainer}>
      <IconButton
        className={classes.button}
        aria-label={`${mood.name}-button`}
        onClick={handleClick(mood)}
      >
        <MoodIcon mood={mood} />
      </IconButton>
      <MoodText mood={mood} marginTop={-15} />
    </div>
  );
};

export default withStyles(styles)(MoodButton);
