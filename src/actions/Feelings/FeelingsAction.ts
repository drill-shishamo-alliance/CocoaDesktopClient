import * as ActionCreators from './FeelingsActionCreator';
import { ActionType } from 'typesafe-actions';

type FeelingsAction = ActionType<typeof ActionCreators>;
export default FeelingsAction;
