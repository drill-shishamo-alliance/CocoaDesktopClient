import * as ActionCreators from './AppActionCreator';
import { ActionType } from 'typesafe-actions';

type AppAction = ActionType<typeof ActionCreators>;
export default AppAction;
