import PunchlogAction from 'src/actions/Punchlog/PunchlogAction';
import PunchlogActionType from 'src/actions/Punchlog/PunchlogActionType';
import PunchlogState from 'src/states/Punchlog/PunchlogState';

const initialState: PunchlogState = {
  isPostLogResultLoading: false,
};

export default (state: PunchlogState = initialState, action: PunchlogAction): PunchlogState => {
  switch (action.type) {
    case PunchlogActionType.POST_PUNCHLOG_REQUEST:
      return {
        ...state,
        isPostLogResultLoading: true,
      };
    case PunchlogActionType.POST_PUNCHLOG_SUCCEEDED:
      return {
        ...state,
        isPostLogResultLoading: false,
      };
    case PunchlogActionType.POST_PUNCHLOG_FAILED:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};
