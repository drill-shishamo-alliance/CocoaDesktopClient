import { createStandardAction } from 'typesafe-actions';
import ScreenActionType from './ScreenActionType';
import { FeelingState } from '../../states/FeelingState';

export const switchInputFeelingScreen = createStandardAction(
  ScreenActionType.SWITCH_INPUT_FEELING
)();

export const switchInputCauseOfFeelingScreen = createStandardAction(
  ScreenActionType.SWITCH_INPUT_CAUSE_OF_FEELING
)<FeelingState>();

export const switchInputResultScreen = createStandardAction(ScreenActionType.SWITCH_RESULT)();
