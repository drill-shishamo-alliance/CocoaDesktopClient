import { createStandardAction } from 'typesafe-actions';
import ScreenActionType from './ScreenActionType';
import { FeelingType } from '../../models/states/FeelingState';

export const switchInputFeelingScreen = createStandardAction(
    ScreenActionType.SWITCH_INPUT_FEELING
)();

export const switchInputCauseOfFeelingScreen = createStandardAction(
    ScreenActionType.SWITCH_INPUT_CAUSE_OF_FEELING
)<FeelingType>();
