import AppAction from 'src/actions/App/AppAction';
import AppActionType from 'src/actions/App/AppActionType';
import AppState from 'src/states/App/AppState';

const initialState: AppState = {
  isPostLogResultLoading: false,
};

export default (state: AppState = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionType.POST_FEELING_AND_CAUSES_LOG_REQUEST:
      return {
        ...state,
        isPostLogResultLoading: true,
      };
    case AppActionType.POST_FEELING_AND_CAUSES_LOG_SUCCEEDED:
      return {
        ...state,
        isPostLogResultLoading: false,
      };
    case AppActionType.POST_FEELING_AND_CAUSES_LOG_FAILED:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};
