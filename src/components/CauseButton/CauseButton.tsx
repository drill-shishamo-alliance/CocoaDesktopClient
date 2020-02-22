import * as React from 'react';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './CauseButtonStyles';
import Props from './CauseButtonProps';
import { iconMap } from './GetCauseIcon';

const CauseOfMoodButton: React.FC<Props> = props => {
  const { classes, handleClick, cause } = props;

  const materialIcon = (iconName: string, clicked: boolean) => (
    <i
      className={classNames(
        'material-icons',
        classes.materialIcon,
        clicked && classes.clickedIconColor
      )}
    >
      {iconName}
    </i>
  );

  const svgIcon = (src: string) => <img src={src} className={classes.svgIcon} />;

  const icon = iconMap[cause.name].icon_path
    ? materialIcon(iconMap[cause.name].icon_path, false)
    : iconMap[cause.name].default && svgIcon(iconMap[cause.name].default);

  const checkedIcon = iconMap[cause.name].icon_path
    ? materialIcon(iconMap[cause.name].icon_path, true)
    : iconMap[cause.name].clicked && svgIcon(iconMap[cause.name].clicked);

  return (
    <div className={classes.buttonContainer}>
      <IconButton onClick={handleClick} style={{ padding: 0 }} aria-label={`${cause.name}-button`}>
        <FormControlLabel
          className={classes.button}
          control={<Checkbox icon={icon} checkedIcon={checkedIcon} />}
          label=''
        />
      </IconButton>
      <Typography variant='body2' className={classes.detailText} aria-label={`${cause.name}-text`}>
        {cause.name}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(CauseOfMoodButton);
