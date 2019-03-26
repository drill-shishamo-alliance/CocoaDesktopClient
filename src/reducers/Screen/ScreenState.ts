import ScreenState, { ScreenType } from 'src/models/states/ScreenState';
import ScreenAction from 'src/actions/Screen/ScreenAction';
import ScreenActionType from '../../actions/Screen/ScreenActionType';
import { FeelingType } from '../../models/states/FeelingState';

const initialState: ScreenState = {
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
