import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Props from './MoodIconProps';
import styles from './MoodIconStyles';
import classNames from 'classnames';

const MoodIcon: React.FC<Props> = props => {
  const { classes, mood } = props;
  return mood.icon_name === 'sentiment_very_dissatisfied' ? (
    <i
      className={classNames('material-icons-outlined', classes.iconSize)}
      style={{ color: mood.color }}
    >
      {mood.icon_name}
    </i>
  ) : (
    <i className={classNames('material-icons', classes.iconSize)} style={{ color: mood.color }}>
      {mood.icon_name}
    </i>
  );
};

export default withStyles(styles)(MoodIcon);
