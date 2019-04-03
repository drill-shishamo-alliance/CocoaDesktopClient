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
        buttons: {
            display: 'flex',
            justifyContent: 'space-around'
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
        IconColor: {
            color: '#4B4B4B'
        },
        questionContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        sendButton: {
            color: '#4B4B4B',
            width: 250,
            height: 37,
            margin: theme.spacing.unit,
            padding: theme.spacing.unit
        },
        backIcon: {
            color: '#4B4B4B',
            width: 32,
            height: 32
        },
        backButton: {
            position: 'absolute',
            top: 15,
            left: 33,
            margin: theme.spacing.unit
        }
    });

export default styles;
