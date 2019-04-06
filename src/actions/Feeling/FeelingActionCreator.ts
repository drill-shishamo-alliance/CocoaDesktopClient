import { createAsyncAction } from 'typesafe-actions';
import FeelingActionType from './FeelingActionType';
import FeelingState from 'src/models/states/FeelingState';

export const SendFeelingAndCause = createAsyncAction(
    FeelingActionType.FETCH_FEELING_REQUEST,
    FeelingActionType.FETCH_FEELING_SUCCEEDED,
    FeelingActionType.FETCH_FEELING_FAILED
)<undefined, FeelingState[], undefined>();
