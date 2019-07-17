import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Props from './FeelingIconProps';
import styles from './FeelingIconStyles';
import classNames from 'classnames';

const FeelingIcon: React.FC<Props> = props => {
  const { classes, feeling } = props;
  return (
    <i
      className={classNames('material-icons-outlined', classes.iconSize)}
      style={{ color: feeling.color }}
    >
      {feeling.icon_name}
    </i>
  );
};

export default withStyles(styles)(FeelingIcon);
