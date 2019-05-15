import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputCauseOfFeelingProps from './InputCauseOfFeelingProps';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import styles from './InputCauseOfFeelingStyles';
import * as classNames from 'classnames';
import FeelingButton from '../FeelingButtons/FeelingButton';
import BackIcon from '@material-ui/icons/KeyboardBackspace';
import CauseOfFeelingButton from '../CauseOfFeelingButtons/CauseOfFeelingButton';
import CauseOfFeelingState, {
    CauseOfFeelingType
} from 'src/models/states/CauseOfFeelingState';
import 'src/utils/webkit_properties/webkit_properties.css';
import InputCauseOfFeelingState from './InputCauseOfFeelingState';
import CoreApiServiceRequests from 'src/requests/CoreApiRequests';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

class InputCauseOfFeeling extends React.Component<
    InputCauseOfFeelingProps,
    InputCauseOfFeelingState
> {
    constructor(props: InputCauseOfFeelingProps) {
        super(props);
        this.state = {
            inputCauseOfFeelings: [],
            toggledButtons: new Array(6),
            isSend: false,
            inputCauseOfFeelingsText: '理由があったら教えてください。',
            sendButtonText: '気分だけ伝える',
            isSendButtonDisabled: false
        };
    }

    public handleBackButtonClick = () => {
        const { switchInputFeeling } = this.props;
        switchInputFeeling();
    };

    public handleCauseOfFeelingButtonClick = (
        toggledCause: CauseOfFeelingType
    ) => () => {
        const updateInputCauseOfFeelings: CauseOfFeelingType[] = this.state
            .inputCauseOfFeelings;

        // 入力された原因がinputCauseOfFeelingsにあるか探す
        const index = updateInputCauseOfFeelings.findIndex(
            c => c === toggledCause
        );

        if (index >= 0) {
            // あった場合は消す
            updateInputCauseOfFeelings.splice(index, 1);
        } else {
            // なかった場合は追加する
            updateInputCauseOfFeelings.push(toggledCause);
        }

        this.setState({
            inputCauseOfFeelings: [
                ...this.state.inputCauseOfFeelings.slice(
                    this.state.inputCauseOfFeelings.length
                ),
                ...updateInputCauseOfFeelings
            ]
        });

        if (this.state.inputCauseOfFeelings.length > 0) {
            this.setState({
                inputCauseOfFeelingsText: '他にもあれば教えてください。',
                sendButtonText: '気分と理由を伝える'
            });
        } else {
            this.setState({
                inputCauseOfFeelingsText: '理由があったら教えてください。',
                sendButtonText: '気分だけ伝える'
            });
        }
    };

    public handleSendButtonClick = () => {
        const { selectedFeelingState, causeOfFeelingStates } = this.props;
        const requests = new CoreApiServiceRequests();
        const selectedCauseOfFeelingStates: CauseOfFeelingState[] = [];
        for (const inputType of this.state.inputCauseOfFeelings) {
            const state = causeOfFeelingStates.find(c => c.type === inputType);
            if (state) {
                selectedCauseOfFeelingStates.push(state);
            }
        }

        // 2回押せないように
        this.setState({
            isSendButtonDisabled: true
        });

        requests
            .inputDataRequest(
                selectedFeelingState,
                selectedCauseOfFeelingStates
            )
            .then(result => {
                if (result instanceof Error) {
                    console.log(result);
                } else if (result) {
                    const r = result.getResult();
                    console.log(r);
                } else {
                    throw new Error('result is undefined');
                }
            })
            .then(() => {
                this.setState({
                    isSend: true
                });
            })
            .catch(e => console.log(e));
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
                        variant='h5'
                        aria-label='question'
                        className={classes.margin}
                    >
                        {this.state.inputCauseOfFeelingsText}
                    </Typography>
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
                <Fab
                    variant='extended'
                    color='primary'
                    aria-label='send-button'
                    className={classes.sendButton}
                    onClick={this.handleSendButtonClick}
                    disabled={this.state.isSendButtonDisabled}
                >
                    <NavigationIcon className={classes.extendedIcon} />
                    {this.state.sendButtonText}
                </Fab>
            </div>
        ) : (
            <div className={classNames(classes.root, 'WebkitAppRegionDrag')}>
                <Typography variant='h5' aria-label='thanks-message1'>
                    テストのご協力、ありがとうございます！
                </Typography>
                <Typography variant='h6' aria-label='thanks-message2'>
                    お手数ですがアプリを終了してください。
                </Typography>
            </div>
        );
    }
}

export default withStyles(styles)(InputCauseOfFeeling);
