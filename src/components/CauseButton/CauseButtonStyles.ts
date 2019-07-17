import { Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    buttonContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center' /* 子要素をflexboxにより中央に配置する */,
      alignItems: 'center' /* 子要素をflexboxにより中央に配置する */,
    },
    button: {
      margin: 0,
    },
    svgIcon: {
      width: 48,
      height: 48,
    },
    materialIcon: {
      fontSize: 55,
    },
    detailText: {
      marginTop: -10,
    },
    defaultIconColor: {
      color: '#4B4B4B',
    },
    clickedIconColor: {
      color: '#E57D22',
    },
    checkBox: {
      margin: 0,
    },
  });

export default styles;
