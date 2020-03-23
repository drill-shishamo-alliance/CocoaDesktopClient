import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import BackIcon from '@material-ui/icons/KeyboardBackspace';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import MoodIcon from '../MoodIcon/MoodIcon';
import CauseButton from '../CauseButton/CauseButton';
import styles from './CausesFormStyles';
import Props from './CausesFormProps';
import State from './CausesFormState';
import { ScreenType } from '../MainPage/ScreenType';
import MoodText from '../MoodText/MoodText';
import { Cause } from 'src/apis/Cause/Model';
import { PostPunchlogRequest } from 'src/apis/Puchlog/PostPunchlog';

class CausesForm extends React.Component<Props, State> {
  readonly state = {
    toggledButtons: new Array<boolean>(6),
    isSendButtonDisabled: false,
  };

  componentDidMount() {
    this.props.clearSelectedCauses();
  }

  public handleBackButtonClick = () => {
    const { switchScreen } = this.props;
    switchScreen(ScreenType.MOODS_FORM);
  };

  public handleCauseButtonClick = (cause: Cause) => () => {
    const { selectCause } = this.props;
    selectCause(cause);
  };

  public handleSendButtonClick = () => {
    const { moodsState, causesState, postMoodAndCausesLogRequest, switchScreen } = this.props;
    const { selectedMood } = moodsState.edits;
    const { selectedCauses } = causesState.edits;

    // 2回押せないように送信ボタンをDisabled
    this.setState({
      isSendButtonDisabled: true,
    });

    // selectedMoodのundefinedチェック
    const moodId = selectedMood ? selectedMood.id : '';
    if (moodId === '') {
      this.setState({
        isSendButtonDisabled: false,
      });
      return;
    }

    const causeIds = selectedCauses.map(c => c.id);

    const body: PostPunchlogRequest = {
      employee_id: this.props.employeeId,
      mood_id: moodId,
      cause_ids: causeIds,
    };

    postMoodAndCausesLogRequest(body);
    switchScreen(ScreenType.THANKS_FORM);
  };

  public render() {
    const { classes, moodsState, causesState } = this.props;
    const { selectedMood } = moodsState.edits;
    const { selectedCauses } = causesState.edits;
    const questionMessage =
      selectedCauses.length <= 0
        ? '理由があったら教えてください。'
        : '他にもあれば教えてください。';
    const sendButtonText = selectedCauses.length <= 0 ? '気分だけ伝える' : '気分と理由を伝える';

    return (
      <div className={classes.root}>
        <div aria-label='back-button'>
          <IconButton className={classes.backButton} onClick={this.handleBackButtonClick}>
            <BackIcon className={classes.backIcon} />
          </IconButton>
        </div>
        <div className={classes.questionContainer}>
          {selectedMood && (
            <div className={classes.moodIconContainer}>
              <MoodIcon mood={selectedMood} />
              <MoodText mood={selectedMood} />
            </div>
          )}
          <Typography variant='h5' aria-label='question' className={classes.margin}>
            {questionMessage}
          </Typography>
        </div>
        <div className={classes.buttons} aria-label='buttons'>
          {causesState.lists.map((c, i) => {
            if (c.name !== '未選択') {
              return <CauseButton key={i} cause={c} handleClick={this.handleCauseButtonClick(c)} />;
            }
          })}
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
          {sendButtonText}
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(CausesForm);
