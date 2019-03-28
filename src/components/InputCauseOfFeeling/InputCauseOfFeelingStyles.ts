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
            width: '100%'
        },
        butttons: {
            display: 'flex',
            justifyContent: 'space-around'
        },
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
            marginTop: 0
        },
        evaluationIconColor: {
            color: '#4B4B4B'
        },
        questionContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }
    });

export default styles;
