import ScreenState, { ScreenType } from '../../models/states/ScreenState';
import ScreenAction from '../../actions/Screen/ScreenAction';
import ScreenActionType from '../../actions/Screen/ScreenActionType';
import { FeelingType } from '../../models/states/FeelingState';

export const initialState: ScreenState = {
    screenType: ScreenType.INPUT_FEELING,
    feelingType: FeelingType.NORMAL
};

const screenState = (
    state: ScreenState = initialState,
    action: ScreenAction
): ScreenState => {
    switch (action.type) {
        case ScreenActionType.SWITCH_INPUT_FEELING:
            return {
                ...state,
                screenType: ScreenType.INPUT_FEELING
            };
        case ScreenActionType.SWITCH_INPUT_CAUSE_OF_FEELING:
            return {
                ...state,
                screenType: ScreenType.INPUT_CAUSE_OF_FEELING,
                feelingType: action.payload
            };
        default:
            return state;
    }
};

export default screenState;
