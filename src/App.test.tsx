import * as React from 'react';
import App from './App';
import ScreenState, { ScreenType } from './models/states/ScreenState';
import { FeelingType } from './models/states/FeelingState';
import { render, cleanup } from 'react-testing-library';

afterEach(cleanup);

test('ScreenTypeがINPUT_FEELINGの時、<InputFeeling />が描画される', () => {
    const inputScreenStateSpy: ScreenState = {
        screenType: ScreenType.INPUT_FEELING,
        feelingType: FeelingType.NORMAL
    };
    const { getByLabelText } = render(
        <App screenState={inputScreenStateSpy} />
    );
    const inputFeelingScreen = getByLabelText('input-feeling-screen');

    expect(inputFeelingScreen.ELEMENT_NODE).toBe(1);
});

test('');

// const inputCauseOfFeelingScreen = getByLabelText('input-cause-of-feeling-screen');
