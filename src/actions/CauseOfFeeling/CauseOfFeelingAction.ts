import { ActionType } from 'typesafe-actions';
import * as ScreenActionCreator from './CauseOfFeelingActionCreator';

type CauseOfFeelingAction = ActionType<typeof ScreenActionCreator>;
export default CauseOfFeelingAction;
