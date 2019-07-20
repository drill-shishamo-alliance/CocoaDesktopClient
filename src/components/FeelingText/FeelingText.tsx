import React from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Theme, createStyles } from '@material-ui/core/styles';
import { Feeling } from 'src/apis/CocoaApi/models/Feelings';

const styles = (theme: Theme) =>
  createStyles({
    detailText: { minWidth: 100 },
  });

type FeelingTextOwnProps = {
  feeling: Feeling;
  marginTop?: number;
};

type FeelingTextProps = FeelingTextOwnProps & WithStyles<typeof styles>;
const FeelingText: React.FC<FeelingTextProps> = props => {
  const { marginTop, classes } = props;
  const { name, color } = props.feeling;
  return (
    <Typography
      className={classes.detailText}
      variant='button'
      aria-label={`${name}-name`}
      style={{ color: color, marginTop: marginTop && marginTop }}
    >
      {name}
    </Typography>
  );
};

export default withStyles(styles)(FeelingText);
