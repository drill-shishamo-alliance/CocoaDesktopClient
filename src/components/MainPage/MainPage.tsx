import React from 'react';
import './MainPage.css';
import MoodsForm from 'src/containers/MoodsForm/MoodsForm';
import CausesForm from 'src/containers/CausesForm/CausesForm';
import ThanksForm from 'src/components/ThanksForm/ThanksForm';
import Paper from '@material-ui/core/Paper';
import { ScreenType } from './ScreenType';

type Props = {};
type State = {
  screenType: ScreenType;
};

class MainPage extends React.Component<Props, State> {
  readonly state = {
    screenType: ScreenType.MOODS_FORM,
  };

  public switchScreen = (screenType: ScreenType) => {
    this.setState({
      screenType,
    });
  };

  public render() {
    return (
      <Paper className='MainPage'>
        {this.state.screenType === ScreenType.MOODS_FORM && (
          <MoodsForm aria-label='input-mood-screen' switchScreen={this.switchScreen} />
        )}
        {this.state.screenType === ScreenType.CAUSES_FORM && (
          <CausesForm switchScreen={this.switchScreen} />
        )}
        {this.state.screenType === ScreenType.THANKS_FORM && <ThanksForm />}
      </Paper>
    );
  }
}

export default MainPage;
