import React from 'react';
import './App.css';
import MoodsForm from '../../containers/MoodsForm/MoodsForm';
import CausesForm from '../../containers/CausesForm/CausesForm';
import ThanksForm from '../../components/ThanksForm/ThanksForm';
import Paper from '@material-ui/core/Paper';
import { ScreenType } from './ScreenType';

type AppProps = {};
type AppState = {
  screenType: ScreenType;
};

class App extends React.Component<AppProps, AppState> {
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
      <Paper className='App'>
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

export default App;
