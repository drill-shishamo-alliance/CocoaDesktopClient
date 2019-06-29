import * as ActionCreators from './UserActionCreator';
import { ActionType } from 'typesafe-actions';

type UserAction = ActionType<typeof ActionCreators>;
export default UserAction;
