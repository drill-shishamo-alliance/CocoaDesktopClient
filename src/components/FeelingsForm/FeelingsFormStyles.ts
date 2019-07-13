import { Theme, createStyles } from '@material-ui/core/styles';

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
    buttons: {
      display: 'flex',
      justifyContent: 'space-around',
    },
  });

export default styles;
