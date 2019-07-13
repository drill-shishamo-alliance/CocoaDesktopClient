import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import BackIcon from '@material-ui/icons/KeyboardBackspace';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import FeelingIcon from '../FeelingIcon/FeelingIcon';
import CauseButton from '../CauseButton/CauseButton';
import styles from './CausesFormStyles';
import Props from './CausesFormProps';
import State from './CausesFormState';
import { ScreenType } from '../App/ScreenType';
import { Cause } from 'src/apis/CocoaApi/models/Causes';
import { PostLogRequest } from 'src/apis/CocoaApi/models/Log';
import FeelingText from '../FeelingText/FeelingText';

class CausesForm extends React.Component<Props, State> {
  readonly state = {
    toggledButtons: new Array<boolean>(6),
    inputCauseOfFeelingsText: '理由があったら教えてください。',
    sendButtonText: '気分だけ伝える',
    isSendButtonDisabled: false,
  };

  componentWillMount() {
    this.props.getCausesRequest({ access_token: '' });
  }

  public handleBackButtonClick = () => {
    const { switchScreen } = this.props;
    switchScreen(ScreenType.FEELINGS_FORM);
  };

  public handleCauseButtonClick = (cause: Cause) => () => {
    const { selectCause, causesState } = this.props;
    selectCause(cause);
    if (causesState.edits.selectedCauses.length > 0) {
      this.setState({
        inputCauseOfFeelingsText: '他にもあれば教えてください。',
        sendButtonText: '気分と理由を伝える',
      });
    } else {
      this.setState({
        inputCauseOfFeelingsText: '理由があったら教えてください。',
        sendButtonText: '気分だけ伝える',
      });
    }
  };

  public handleSendButtonClick = () => {
    const { feelingsState, causesState, postFeelingAndCausesLogRequest, switchScreen } = this.props;
    const { selectedFeeling } = feelingsState.edits;
    const { selectedCauses } = causesState.edits;

    // 2回押せないように送信ボタンをDisabled
    this.setState({
      isSendButtonDisabled: true,
    });

    // selectedFeelingのundefinedチェック
    const feelingId = selectedFeeling ? selectedFeeling.id : '';
    if (feelingId === '') {
      this.setState({
        isSendButtonDisabled: false,
      });
      return;
    }

    const causeIds = selectedCauses.map(c => c.id);

    const body: PostLogRequest = {
      access_token: '',
      feeling_id: feelingId,
      cause_ids: causeIds,
    };

    postFeelingAndCausesLogRequest(body);
    switchScreen(ScreenType.THANKS_FORM);
  };

  public render() {
    const { classes, feelingsState, causesState } = this.props;
    const { selectedFeeling } = feelingsState.edits;

    return (
      <div className={classes.root}>
        <div aria-label='back-button'>
          <IconButton className={classes.backButton} onClick={this.handleBackButtonClick}>
            <BackIcon className={classes.backIcon} />
          </IconButton>
        </div>
        <div className={classes.questionContainer}>
          {selectedFeeling && (
            <div className={classes.feelingIconContainer}>
              <FeelingIcon feeling={selectedFeeling} />
              <FeelingText feeling={selectedFeeling} />
            </div>
          )}
          <Typography variant='h5' aria-label='question' className={classes.margin}>
            {this.state.inputCauseOfFeelingsText}
          </Typography>
        </div>
        <div className={classes.buttons} aria-label='buttons'>
          {causesState.lists.map((c, i) => (
            <CauseButton key={i} cause={c} handleClick={this.handleCauseButtonClick(c)} />
          ))}
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
    );
  }
}

export default withStyles(styles)(CausesForm);
