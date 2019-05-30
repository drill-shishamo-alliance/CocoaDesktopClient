import { ScreenState, ScreenType } from 'src/states/ScreenState';
import ScreenAction from 'src/actions/Screen/ScreenAction';
import ScreenActionType from 'src/actions/Screen/ScreenActionType';

export const initialState = {
  screenType: ScreenType.INPUT_FEELING,
  selectedFeelingId: 0,
};

const screenState = (state: ScreenState = initialState, action: ScreenAction): ScreenState => {
  switch (action.type) {
    case ScreenActionType.SWITCH_INPUT_FEELING:
      return {
        ...state,
        screenType: ScreenType.INPUT_FEELING,
      };
    case ScreenActionType.SWITCH_INPUT_CAUSE_OF_FEELING:
      return {
        ...state,
        screenType: ScreenType.INPUT_CAUSE_OF_FEELING,
        selectedFeelingId: action.payload.id,
      };
    default:
      return state;
  }
};

export default screenState;
