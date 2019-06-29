import AppAction from 'src/actions/App/AppAction';
import AppActionType from 'src/actions/App/AppActionType';
import AppState, { PostLogStatus } from 'src/states/App/AppState';

const initialState: AppState = {
  postLogStatus: PostLogStatus.NOT_POSTED,
};

export default (state: AppState = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionType.POST_FEELING_AND_CAUSES_LOG_REQUEST:
      return {
        ...state,
        postLogStatus: PostLogStatus.POSTING,
      };
    case AppActionType.POST_FEELING_AND_CAUSES_LOG_SUCCEEDED:
      return {
        ...state,
        postLogStatus: PostLogStatus.SUCCEEDED,
      };
    case AppActionType.POST_FEELING_AND_CAUSES_LOG_FAILED:
      return {
        ...state,
        postLogStatus: PostLogStatus.FAILED,
      };
    default:
      return state;
  }
};
