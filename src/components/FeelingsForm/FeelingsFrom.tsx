import React from 'react';
import Props from './FeelingsFormProps';
import { withStyles } from '@material-ui/core';
import styles from './FeelingsFormStyles';
import Typography from '@material-ui/core/Typography';
import FeelingButton from '../FeelingButton/FeelingButton';
import { Feeling } from 'src/apis/CocoaApi/models/Feelings';
import { ScreenType } from '../App/ScreenType';

class FeelingsForm extends React.Component<Props> {
  componentWillMount() {
    this.props.getFeelingsRequest({ access_token: '' });
  }

  public handleFeelingClick = (selectedFeeling: Feeling) => (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const { selectFeeling, switchScreen } = this.props;
    selectFeeling(selectedFeeling);
    switchScreen(ScreenType.CAUSES_FORM);
  };

  public render() {
    const { classes, feelings } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant='h5' aria-label='question'>
          今日の気分はどうですか？
        </Typography>
        <div className={classes.buttons} aria-label='buttons'>
          {feelings.map((f, i) => (
            <FeelingButton key={i} feeling={f} handleClick={this.handleFeelingClick} />
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(FeelingsForm);
