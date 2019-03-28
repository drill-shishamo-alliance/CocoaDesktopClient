import { Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'space-around'
        },
        buttonContainer: {
            display: 'flex',
            flexDirection: 'column'
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
        }
    });

export default styles;
