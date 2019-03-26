import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DissatisfiedIcon from '@material-ui/icons/SentimentDissatisfiedRounded';
import VeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfiedRounded';
import SatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import VerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfiedRounded';
import FaceIcon from '@material-ui/icons/Face';
import Typography from '@material-ui/core/Typography';
import InputFeelingProps from './InputFeelingProps';
import styles from './InputFeelingStyles';

class InputFeeling extends React.Component<InputFeelingProps> {
    public render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Typography variant='h4'>今日の気分はどうですか？</Typography>
                <div className={classes.root}>
                    <div className={classes.buttonContainer}>
                        <IconButton
                            className={classes.button}
                            aria-label='Delete'
                        >
                            <VeryDissatisfiedIcon
                                className={classes.icon}
                                fontSize='large'
                            />
                        </IconButton>
                        <Typography variant='h6' className={classes.detailText}>
                            最悪
                        </Typography>
                    </div>

                    <div className={classes.buttonContainer}>
                        <IconButton
                            className={classes.button}
                            aria-label='Delete'
                        >
                            <DissatisfiedIcon className={classes.icon} />
                        </IconButton>
                        <Typography variant='h6' className={classes.detailText}>
                            悪い
                        </Typography>
                    </div>

                    <div className={classes.buttonContainer}>
                        <IconButton
                            className={classes.button}
                            aria-label='Delete'
                        >
                            <FaceIcon className={classes.icon} />
                        </IconButton>
                        <Typography variant='h6' className={classes.detailText}>
                            普通
                        </Typography>
                    </div>

                    <div className={classes.buttonContainer}>
                        <IconButton
                            className={classes.button}
                            aria-label='Delete'
                        >
                            <SatisfiedIcon className={classes.icon} />
                        </IconButton>
                        <Typography variant='h6' className={classes.detailText}>
                            良い
                        </Typography>
                    </div>

                    <div className={classes.buttonContainer}>
                        <IconButton
                            className={classes.button}
                            aria-label='Delete'
                        >
                            <VerySatisfiedIcon className={classes.icon} />
                        </IconButton>
                        <Typography variant='h6' className={classes.detailText}>
                            最高
                        </Typography>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(InputFeeling);
