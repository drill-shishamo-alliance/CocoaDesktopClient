import React from 'react';
import Props from './MoodsFormProps';
import { withStyles } from '@material-ui/core';
import styles from './MoodsFormStyles';
import Typography from '@material-ui/core/Typography';
import MoodButton from '../MoodButton/MoodButton';
import { Mood } from 'src/apis/CocoaApi/models/Moods';
import { ScreenType } from '../MainPage/ScreenType';

class MoodsForm extends React.Component<Props> {
  componentDidMount() {
    this.props.getMoodsRequest({ access_token: '' });
  }

  public handleMoodClick = (selectedMood: Mood) => (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const { selectMood, switchScreen } = this.props;
    selectMood(selectedMood);
    switchScreen(ScreenType.CAUSES_FORM);
  };

  public render() {
    const { classes, moods } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant='h5' aria-label='question'>
          今日の気分はどうですか？
        </Typography>
        <div className={classes.buttons} aria-label='buttons'>
          {moods.map((f, i) => (
            <MoodButton key={i} mood={f} handleClick={this.handleMoodClick} />
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MoodsForm);
