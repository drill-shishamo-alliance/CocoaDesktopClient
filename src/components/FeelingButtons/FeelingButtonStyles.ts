import { Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
    createStyles({
        buttonContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center' /* 子要素をflexboxにより中央に配置する */,
            alignItems: 'center' /* 子要素をflexboxにより中央に配置する */
        },
        button: {
            marginTop: theme.spacing.unit,
            marginLeft: 1,
            marginRight: 1,
            marginBottom: 0
        },
        icon: {
            width: 64,
            height: 64
        },
        detailText: {
            marginTop: -15
        }
    });

export default styles;
