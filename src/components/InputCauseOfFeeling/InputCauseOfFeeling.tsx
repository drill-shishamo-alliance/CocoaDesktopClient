import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputCauseOfFeelingProps from './InputCauseOfFeelingProps';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import styles from './InputCauseOfFeelingStyles';
import * as classnames from 'classnames';
import FeelingButton from '../FeelingButtons/FeelingButton';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import BackIcon from '@material-ui/icons/KeyboardBackspace';
import CauseOfFeelingButton from '../CauseOfFeelingButtons/CauseOfFeelingButton';
import { CauseOfFeelingType } from 'src/models/states/CauseOfFeelingState';

class InputCauseOfFeeling extends React.Component<InputCauseOfFeelingProps> {
    public handleClick = () => {
        const { switchInputFeeling } = this.props;
        switchInputFeeling();
    };

    public render() {
        const { classes, selectedFeelingType } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.questionContainer}>
                    <IconButton
                        className={classes.button}
                        aria-label='back-button'
                        onClick={this.handleClick}
                    >
                        <BackIcon className={classes.backIcon} />
                    </IconButton>
                    <FeelingButton feelingType={selectedFeelingType} />
                    <Typography
                        variant='h4'
                        aria-label='question'
                    >{`の原因は何ですか？`}</Typography>
                </div>
                <div
                    className={classnames(classes.buttons, 'App')}
                    aria-label='buttons'
                >
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.AMOUNT_OF_WORK}
                    />
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.JOB_DESCRIPTION}
                    />
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.HUMAN_RELATION}
                    />
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.EVALUATION}
                    />
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.OVERTIME_WORK}
                    />
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.HOLIDAY_WORK}
                    />
                </div>
                <Button
                    variant='contained'
                    className={classnames(classes.button, classes.sendButton)}
                    aria-label='send-button'
                >
                    Send
                    <Icon>send</Icon>
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(InputCauseOfFeeling);
