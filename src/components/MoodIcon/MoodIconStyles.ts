import { Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    iconContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    iconSize: {
      fontSize: 55,
    },
  });

export default styles;
