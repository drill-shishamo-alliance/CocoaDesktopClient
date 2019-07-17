import React from 'react';
import './App.css';
import FeelingsForm from 'src/containers/FeelingsForm/FeelingsForm';
import CausesForm from 'src/containers/CausesForm/CausesForm';
import ThanksForm from 'src/components/ThanksForm/ThanksForm';
import Paper from '@material-ui/core/Paper';
import { ScreenType } from './ScreenType';

type AppProps = {};
type AppState = {
  screenType: ScreenType;
};

class App extends React.Component<AppProps, AppState> {
  readonly state = {
    screenType: ScreenType.FEELINGS_FORM,
  };

  public switchScreen = (screenType: ScreenType) => {
    this.setState({
      screenType,
    });
  };

  public render() {
    return (
      <Paper className='App'>
        {this.state.screenType === ScreenType.FEELINGS_FORM && (
          <FeelingsForm aria-label='input-feeling-screen' switchScreen={this.switchScreen} />
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
