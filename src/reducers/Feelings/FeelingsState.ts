import FeelingsAction from 'src/actions/Feelings/FeelingsAction';
import FeelingsActionType from 'src/actions/Feelings/FeelingsActionType';
import FeelingsState from 'src/states/Feelings/FeelingsState';

const initialState: FeelingsState = {
  lists: [],
  edits: {
    selectedFeeling: undefined,
  },
  isFetching: false,
};

export default (state: FeelingsState = initialState, action: FeelingsAction): FeelingsState => {
  switch (action.type) {
    case FeelingsActionType.GET_FEELINGS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FeelingsActionType.GET_FEELINGS_SUCCEEDED:
      return {
        ...state,
        lists: action.payload.feelings,
        isFetching: false,
      };
    case FeelingsActionType.GET_FEELINGS_FAILED:
      return {
        ...state,
        ...initialState,
      };
    case FeelingsActionType.SELECT_FEELING:
      return {
        ...state,
        edits: {
          ...state.edits,
          selectedFeeling: action.payload,
        },
      };
    default:
      return state;
  }
};
