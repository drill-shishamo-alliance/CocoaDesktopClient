import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputCauseOfFeelingProps from './InputCauseOfFeelingProps';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import styles from './InputCauseOfFeelingStyles';
import * as classNames from 'classnames';
import FeelingButton from '../FeelingButtons/FeelingButton';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import BackIcon from '@material-ui/icons/KeyboardBackspace';
import CauseOfFeelingButton from '../CauseOfFeelingButtons/CauseOfFeelingButton';
import { CauseOfFeelingType } from 'src/models/states/CauseOfFeelingState';
import 'src/utils/webkit_properties/webkit_properties.css';
class InputCauseOfFeeling extends React.Component<InputCauseOfFeelingProps> {
    public handleClick = () => {
        const { switchInputFeeling } = this.props;
        switchInputFeeling();
    };

    public render() {
        const { classes, selectedFeelingType } = this.props;
        return (
            <div className={classNames(classes.root, 'WebkitAppRegionDrag')}>
                <div aria-label='back-button'>
                    <IconButton
                        className={classes.backButton}
                        onClick={this.handleClick}
                    >
                        <BackIcon className={classes.backIcon} />
                    </IconButton>
                </div>
                <div className={classes.questionContainer}>
                    <FeelingButton feelingType={selectedFeelingType} />
                    <Typography
                        variant='h4'
                        aria-label='question'
                    >{`の原因は何ですか？`}</Typography>
                </div>
                <div className={classes.buttons} aria-label='buttons'>
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
                <div aria-label='send-button'>
                    <Button
                        variant='contained'
                        className={classNames(
                            classes.button,
                            classes.sendButton
                        )}
                    >
                        Send
                        <Icon>send</Icon>
                    </Button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(InputCauseOfFeeling);
