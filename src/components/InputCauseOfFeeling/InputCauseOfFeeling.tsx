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
import CauseOfFeelingState, {
    CauseOfFeelingType
} from 'src/models/states/CauseOfFeelingState';
import 'src/utils/webkit_properties/webkit_properties.css';
import InputCauseOfFeelingState from './InputCauseOfFeelingState';
import CoreApiServiceRequests from 'src/requests/CoreApiRequests';

class InputCauseOfFeeling extends React.Component<
    InputCauseOfFeelingProps,
    InputCauseOfFeelingState
> {
    constructor(props: InputCauseOfFeelingProps) {
        super(props);
        this.state = {
            inputCauseOfFeelings: [],
            toggledButtons: new Array(6),
            isSend: false
        };
    }

    public handleBackButtonClick = () => {
        const { switchInputFeeling } = this.props;
        switchInputFeeling();
    };

    public handleCauseOfFeelingButtonClick = (
        toggledCause: CauseOfFeelingType
    ) => () => {
        const { inputCauseOfFeelings } = this.state;
        const updateInputCauseOfFeelings: CauseOfFeelingType[] = this.state
            .inputCauseOfFeelings;

        // 入力された原因がinputCauseOfFeelingsにあるか探す
        const index = inputCauseOfFeelings.findIndex(c => c === toggledCause);

        if (index >= 0) {
            // あった場合は消す
            updateInputCauseOfFeelings.splice(index);
        } else {
            // なかった場合は追加する
            updateInputCauseOfFeelings.push(toggledCause);
        }

        this.setState({
            inputCauseOfFeelings: updateInputCauseOfFeelings
        });
    };

    public handleSendButtonClick = () => {
        this.setState({
            isSend: true
        });
        const { selectedFeelingState, causeOfFeelingStates } = this.props;
        const requests = new CoreApiServiceRequests();
        const selectedCauseOfFeelingStates: CauseOfFeelingState[] = [];
        for (const inputType of this.state.inputCauseOfFeelings) {
            const state = causeOfFeelingStates.find(c => c.type === inputType);
            if (state) {
                selectedCauseOfFeelingStates.push(state);
            }
        }
        requests
            .inputDataRequest(
                selectedFeelingState,
                selectedCauseOfFeelingStates
            )
            .then(result => {
                if (result instanceof Error) {
                    console.log(result);
                } else {
                    const r = result.getResult();
                    console.log(r);
                }
            })
            .finally(() => {
                this.setState({
                    isSend: false
                });
            });
    };

    public render() {
        const { classes, selectedFeelingState } = this.props;
        const { isSend } = this.state;

        return !isSend ? (
            <div className={classNames(classes.root, 'WebkitAppRegionDrag')}>
                <div aria-label='back-button'>
                    <IconButton
                        className={classes.backButton}
                        onClick={this.handleBackButtonClick}
                    >
                        <BackIcon className={classes.backIcon} />
                    </IconButton>
                </div>
                <div className={classes.questionContainer}>
                    <FeelingButton
                        feelingType={selectedFeelingState.feelingType}
                    />
                    <Typography
                        variant='h4'
                        aria-label='question'
                    >{`を選んだ理由は？`}</Typography>
                </div>
                <div
                    className={classNames(
                        classes.buttons,
                        'WebkitAppRegionDrag'
                    )}
                    aria-label='buttons'
                >
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.AMOUNT_OF_WORK}
                        onClick={this.handleCauseOfFeelingButtonClick}
                    />
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.JOB_DESCRIPTION}
                        onClick={this.handleCauseOfFeelingButtonClick}
                    />
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.HUMAN_RELATION}
                        onClick={this.handleCauseOfFeelingButtonClick}
                    />
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.EVALUATION}
                        onClick={this.handleCauseOfFeelingButtonClick}
                    />
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.OVERTIME_WORK}
                        onClick={this.handleCauseOfFeelingButtonClick}
                    />
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.HOLIDAY_WORK}
                        onClick={this.handleCauseOfFeelingButtonClick}
                    />
                </div>
                <div aria-label='send-button'>
                    <Button
                        variant='contained'
                        color='primary' // これを入れると文字が白くなる
                        className={classNames(
                            classes.button,
                            classes.sendButton
                        )}
                        onClick={this.handleSendButtonClick}
                    >
                        送信する
                        <Icon>send</Icon>
                    </Button>
                </div>
            </div>
        ) : (
            <div className={classNames(classes.root, 'WebkitAppRegionDrag')}>
                thanks
            </div>
        );
    }
}

export default withStyles(styles)(InputCauseOfFeeling);
