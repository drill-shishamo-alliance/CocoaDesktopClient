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
      marginTop: theme.spacing.unit,
      marginLeft: 1,
      marginRight: 1,
      marginBottom: 0,
    },
    icon: {
      width: 56,
      height: 56,
    },
    veryDissatisfiedColor: {
      color: '#7E8B8C', // flat gray dark
    },
    dissatisfiedColor: {
      color: '#2880BA', // flat skyblue dark
    },
    normalColor: {
      color: '#E57D22', // flat orange
    },
    satisfiedColor: {
      color: '#1ABC9C', // flat mint
    },
    verySatisfiedColor: {
      color: '#EF7079', // flat watermelon
    },
    detailText: {
      marginTop: -15,
    },
  });

export default styles;
