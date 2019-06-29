import React from 'react';
import './App.css';
import InputCauseOfFeeling from 'src/containers/InputCauseOfFeeling/InputCauseOfFeeling';
import InputFeeling from 'src/containers/InputFeeling/InputFeeling';
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
  public render() {
    return (
      <Paper className='App'>
        {this.state.screenType === ScreenType.FEELINGS_FORM && (
          <InputFeeling aria-label='input-feeling-screen' />
        )}
        {this.state.screenType === ScreenType.CAUSES_FORM && (
          <InputCauseOfFeeling aria-label='input-cause-of-feeling-screen' />
        )}
      </Paper>
    );
  }
}

export default App;
