import UserAction from 'src/actions/User/UserAction';
import UserActionType from 'src/actions/User/UserActionType';
import UserState from 'src/states/User/UserState';

const initialState: UserState = {
  employeeId: '',
  departmentId: '',
  isLoggedIn: false,
};

export default (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionType.POST_LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
      };
    case UserActionType.POST_LOGIN_SUCCEEDED:
      return {
        ...state,
        employeeId: action.payload.employee_id,
        departmentId: action.payload.department_id,
        isLoggedIn: true,
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
