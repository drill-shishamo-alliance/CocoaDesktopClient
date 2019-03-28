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
import { FeelingType } from '../../models/states/FeelingState';

class InputFeeling extends React.Component<InputFeelingProps> {
    public handleClick = (feelingType: FeelingType) => (
        e: React.MouseEvent<HTMLElement, MouseEvent>
    ) => {
        const { switchInputCauseOfFeeling } = this.props;
        switchInputCauseOfFeeling(feelingType);
    };

    public render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Typography variant='h4'>今日の気分はどうですか？</Typography>
                <div className={classes.root} aria-label='root'>
                    <div className={classes.buttonContainer}>
                        <IconButton
                            className={classes.button}
                            aria-label='very-dissatisfied-button'
                            onClick={this.handleClick(
                                FeelingType.VERY_DISSATISFIED
                            )}
                        >
                            <VeryDissatisfiedIcon
                                className={classes.icon}
                                fontSize='large'
                            />
                        </IconButton>
                        <Typography
                            variant='h6'
                            className={classes.detailText}
                            aria-label='very-dissatisfied-text'
                        >
                            最悪
                        </Typography>
                    </div>

                    <div className={classes.buttonContainer}>
                        <IconButton
                            className={classes.button}
                            aria-label='dissatisfied-button'
                            onClick={this.handleClick(FeelingType.DISSATISFIED)}
                        >
                            <DissatisfiedIcon className={classes.icon} />
                        </IconButton>
                        <Typography
                            variant='h6'
                            className={classes.detailText}
                            aria-label='dissatisfied-text'
                        >
                            悪い
                        </Typography>
                    </div>

                    <div className={classes.buttonContainer}>
                        <IconButton
                            className={classes.button}
                            aria-label='normal-button'
                            onClick={this.handleClick(FeelingType.NORMAL)}
                        >
                            <FaceIcon className={classes.icon} />
                        </IconButton>
                        <Typography
                            variant='h6'
                            className={classes.detailText}
                            aria-label='normal-text'
                        >
                            普通
                        </Typography>
                    </div>

                    <div className={classes.buttonContainer}>
                        <IconButton
                            className={classes.button}
                            aria-label='satisfied-button'
                            onClick={this.handleClick(FeelingType.SATISFIED)}
                        >
                            <SatisfiedIcon className={classes.icon} />
                        </IconButton>
                        <Typography
                            variant='h6'
                            className={classes.detailText}
                            aria-label='satisfied-text'
                        >
                            良い
                        </Typography>
                    </div>

                    <div className={classes.buttonContainer}>
                        <IconButton
                            className={classes.button}
                            aria-label='very-satisfied-button'
                            onClick={this.handleClick(
                                FeelingType.VERY_SATISFIED
                            )}
                        >
                            <VerySatisfiedIcon className={classes.icon} />
                        </IconButton>
                        <Typography
                            variant='h6'
                            className={classes.detailText}
                            aria-label='very-satisfied-text'
                        >
                            最高
                        </Typography>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(InputFeeling);
