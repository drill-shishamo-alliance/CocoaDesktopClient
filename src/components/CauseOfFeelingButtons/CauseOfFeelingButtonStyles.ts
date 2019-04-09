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
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
        },
        icon: {
            width: 48,
            height: 48
        },
        detailText: {
            marginTop: -20
        },
        defaultIconColor: {
            color: '#4B4B4B'
        },
        clickedIconColor: {
            color: '#E17D00'
        }
    });

export default styles;
