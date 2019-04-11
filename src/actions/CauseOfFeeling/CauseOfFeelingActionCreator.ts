import { createAsyncAction } from 'typesafe-actions';
import CauseFeelingActionType from './CauseOfFeelingActionType';
import CauseOfFeelingState from 'src/models/states/CauseOfFeelingState';

export const SendFeelingAndCause = createAsyncAction(
    CauseFeelingActionType.FETCH_CAUSE_FEELING_REQUEST,
    CauseFeelingActionType.FETCH_CAUSE_FEELING_SUCCEEDED,
    CauseFeelingActionType.FETCH_CAUSE_FEELING_FAILED
)<undefined, CauseOfFeelingState[], undefined>();
