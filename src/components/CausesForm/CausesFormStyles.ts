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
    margin: {
      margin: theme.spacing.unit,
    },
    buttons: {
      display: 'flex',
      justifyContent: 'space-around',
      margin: theme.spacing.unit,
    },
    IconColor: {
      color: '#4B4B4B',
    },
    questionContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    sendButton: {
      backgroundColor: '#E57D22', // 最初に表示されるボタンの色
      '&:hover': {
        backgroundColor: '#D2691E', // カーソルを合わせた時に変わる色
      },
      minWidth: 190,
      margin: theme.spacing.unit,
      marginTop: theme.spacing.unit,
    },
    backIcon: {
      width: 16,
      height: 16,
    },
    backButton: {
      position: 'absolute',
      top: '8%',
      left: '8%',
      margin: theme.spacing.unit,
      padding: theme.spacing.unit,
      border: 'solid', // 左:丸み 真ん中:線の太さ 右:線の色
      borderRadius: '50%',
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
    feelingIconContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center' /* 子要素をflexboxにより中央に配置する */,
      alignItems: 'center' /* 子要素をflexboxにより中央に配置する */,
    },
    feelingText: {
      marginTop: -20,
    },
  });

export default styles;
