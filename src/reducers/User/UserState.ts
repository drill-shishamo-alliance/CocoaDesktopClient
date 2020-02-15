import UserAction from 'src/actions/User/UserAction';
import UserActionType from 'src/actions/User/UserActionType';
import UserState from 'src/states/User/UserState';

const initialState: UserState = {
  accessToken: undefined,
  isLoading: false,
};

export default (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionType.POST_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UserActionType.POST_LOGIN_SUCCEEDED:
      return {
        ...state,
        accessToken: action.payload.authorization,
        isLoading: false,
      };
    case UserActionType.POST_LOGIN_FAILED:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};