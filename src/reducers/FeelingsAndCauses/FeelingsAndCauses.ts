import FeelingsAndCausesState from 'src/states/FeelingsAndCausesState';
import FeelingAndCauseAction from 'src/actions/FeelingAndCauses/FeelingAndCausesAction';
import FeelingAndCausesActionType from 'src/actions/FeelingAndCauses/FeelingAndCausesActionType';

const initialState: FeelingsAndCausesState = {
  feelings: [],
  causes: [],
  isInputDataSucceeded: false,
};

const feelingAndCauses = (
  state: FeelingsAndCausesState = initialState,
  action: FeelingAndCauseAction
): FeelingsAndCausesState => {
  switch (action.type) {
    case FeelingAndCausesActionType.GET_FEELINGS_SUCCEEDED:
      return {
        ...state,
        feelings: [...state.feelings, ...action.payload],
      };
    case FeelingAndCausesActionType.GET_CAUSES_SUCCEEDED:
      return {
        ...state,
        causes: [...state.causes, ...action.payload],
      };
    default:
      return state;
  }
};

export default feelingAndCauses;
