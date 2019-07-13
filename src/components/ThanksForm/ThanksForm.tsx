import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '15px 30px',
      textAlign: 'center',
      width: '100%',
    },
  });

const ThanksForm: React.FC<WithStyles<typeof styles>> = props => (
  <div className={props.classes.root}>
    <Typography variant='h5' aria-label='thanks-message1'>
      テストのご協力、ありがとうございます！
    </Typography>
    <Typography variant='h6' aria-label='thanks-message2'>
      お手数ですがアプリを終了してください。
    </Typography>
  </div>
);

export default withStyles(styles)(ThanksForm);
