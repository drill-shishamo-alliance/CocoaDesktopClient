import { ActionType } from 'typesafe-actions';
import * as ScreenActionCreator from './FeelingActionCreator';

type FeelingAction = ActionType<typeof ScreenActionCreator>;
export default FeelingAction;
