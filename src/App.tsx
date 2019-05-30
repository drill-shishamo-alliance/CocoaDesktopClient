import React from 'react';
import './App.css';
import { ScreenState, ScreenType } from './states/ScreenState';
import InputCauseOfFeeling from './containers/InputCauseOfFeeling/InputCauseOfFeeling';
import InputFeeling from './containers/InputFeeling/InputFeeling';
import Paper from '@material-ui/core/Paper';

export interface AppConnectedProps {
  screenState: ScreenState;
}

class App extends React.Component<AppConnectedProps> {
  public render() {
    const { screenState } = this.props;
    return (
      <Paper className='App'>
        {screenState.screenType === ScreenType.INPUT_FEELING && (
          <InputFeeling aria-label='input-feeling-screen' />
        )}
        {screenState.screenType === ScreenType.INPUT_CAUSE_OF_FEELING && (
          <InputCauseOfFeeling aria-label='input-cause-of-feeling-screen' />
        )}
      </Paper>
    );
  }
}

export default App;
