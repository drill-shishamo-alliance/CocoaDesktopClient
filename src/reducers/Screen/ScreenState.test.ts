import ScreenState, { ScreenType } from '../../states/ScreenState';
import screenState, { initialState } from './ScreenState';
import * as ScreenActionCreators from '../../actions/Screen/ScreenActionCreator';
import FeelingState, { FeelingType } from '../../states/FeelingState';

describe('ScreenReducer', () => {
  test('case SWITCH_INPUT_FEELINGが正しく動作する', () => {
    let state: ScreenState = initialState;
    const action = ScreenActionCreators.switchInputFeelingScreen();

    // Reducerの呼び出し
    state = screenState(state, action);

    // ScreenTypeはINPUT_FEELINGに変化する
    expect(state.screenType).toBe(ScreenType.INPUT_FEELING);
    // FeelingTypeは初期値から変化しない
    expect(state.feelingState.feelingType).toBe(initialState.feelingState.feelingType);
  });

  test('case SWITCH_INPUT_CAUSE_OF_FEELINGが正しく動作する', () => {
    let state: ScreenState = initialState;
    const selectedFeelingType = FeelingType.VERY_DISSATISFIED;
    const selectedFeelingState: FeelingState = {
      feelingId: 1,
      feelingType: selectedFeelingType,
      name: '',
    };
    const action = ScreenActionCreators.switchInputCauseOfFeelingScreen(selectedFeelingState);

    // Reducerの呼び出し
    state = screenState(state, action);

    // ScreenTypeはINPUT_CAUSE_OF_FEELINGに変化する
    expect(state.screenType).toBe(ScreenType.INPUT_CAUSE_OF_FEELING);
    // FeelingTypeはaction.playloadの値に変化する
    expect(state.feelingState).toBe(action.payload);
  });
});
