import MoodsAction from '../../actions/Moods/Action';
import MoodsActionType from '../../actions/Moods/ActionType';
import MoodsState from '../../states/Moods/MoodsState';

const initialState: MoodsState = {
  lists: [],
  edits: {
    selectedMood: undefined,
  },
  isFetching: false,
};

export default (state: MoodsState = initialState, action: MoodsAction): MoodsState => {
  switch (action.type) {
    case MoodsActionType.GET_MOODS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case MoodsActionType.GET_MOODS_SUCCEEDED:
      return {
        ...state,
        lists: action.payload,
        isFetching: false,
      };
    case MoodsActionType.GET_MOODS_FAILED:
      return {
        ...state,
        ...initialState,
      };
    case MoodsActionType.SELECT_MOOD:
      return {
        ...state,
        edits: {
          ...state.edits,
          selectedMood: action.payload,
        },
      };
    default:
      return state;
  }
};
