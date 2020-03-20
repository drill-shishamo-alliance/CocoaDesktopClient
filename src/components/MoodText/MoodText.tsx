import React from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Theme, createStyles } from '@material-ui/core/styles';
import { Mood } from 'src/apis/Mood/Model';

const styles = (theme: Theme) =>
  createStyles({
    detailText: {},
  });

type MoodTextOwnProps = {
  mood: Mood;
  marginTop?: number;
};

type MoodTextProps = MoodTextOwnProps & WithStyles<typeof styles>;
const MoodText: React.FC<MoodTextProps> = props => {
  const { marginTop } = props;
  const { name, color } = props.mood;
  return (
    <Typography
      variant='button'
      aria-label={`${name}-name`}
      style={{ color: color, marginTop: marginTop && marginTop }}
    >
      {name}
    </Typography>
  );
};

export default withStyles(styles)(MoodText);
