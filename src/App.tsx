import * as React from 'react';
import './App.css';
import ScreenState, { ScreenType } from './models/states/ScreenState';
import InputCauseOfFeeling from './components/InputCauseOfFeeling/InputCauseOfFeeling';
import InputFeeling from './containers/InputFeeling/InputFeeling';

export interface AppConnectedProps {
    screenState: ScreenState;
}

class App extends React.Component<AppConnectedProps> {
    public render() {
        const { screenState } = this.props;
        return (
            <div className='App'>
                {screenState.screenType === ScreenType.INPUT_FEELING && (
                    <InputFeeling aria-label='input-feeling-screen' />
                )}
                {screenState.screenType ===
                    ScreenType.INPUT_CAUSE_OF_FEELING && (
                    <InputCauseOfFeeling aria-label='input-cause-of-feeling-screen' />
                )}
            </div>
        );
    }
}

export default App;
