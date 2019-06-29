import CausesAction from 'src/actions/Causes/CausesAction';
import CausesActionType from 'src/actions/Causes/CausesActionType';
import CausesState from 'src/states/Causes/CausesState';

const initialState: CausesState = {
  lists: [],
  edits: {
    selectedCauses: [],
  },
  isFetching: false,
};

export default (state: CausesState = initialState, action: CausesAction): CausesState => {
  switch (action.type) {
    case CausesActionType.GET_CAUSES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case CausesActionType.GET_CAUSES_SUCCEEDED:
      return {
        ...state,
        lists: action.payload.causes,
        isFetching: false,
      };
    case CausesActionType.GET_CAUSES_FAILED:
      return {
        ...state,
        ...initialState,
      };
    case CausesActionType.TOGGLE_CAUSES:
      // selectedCausesの中に選択されたCauseが入っていた場合indexを返す
      // ない場合は -1 を返す
      const existIndex = state.edits.selectedCauses.findIndex(
        cause => cause.id === action.payload.id
      );

      if (existIndex < 0) {
        // ない場合は選択されたCauseを末尾に追加
        return {
          ...state,
          edits: {
            ...state.edits,
            selectedCauses: [...state.edits.selectedCauses, action.payload],
          },
        };
      } else {
        // ある場合はselectedCauses[existIndex]を削除
        return {
          ...state,
          edits: {
            selectedCauses: [
              ...state.edits.selectedCauses.slice(0, existIndex),
              ...state.edits.selectedCauses.slice(existIndex + 1),
            ],
          },
        };
      }
    default:
      return state;
  }
};
