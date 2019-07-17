import FeelingAndCausesActionType from './AppActionType';
import { createAsyncAction } from 'typesafe-actions';
import { PostLogRequest, PostLogResponse } from 'src/apis/CocoaApi/models/Log';

// アプリケーション全体に関わるAction
export const postFeelingAndCausesLog = createAsyncAction(
  FeelingAndCausesActionType.POST_FEELING_AND_CAUSES_LOG_REQUEST,
  FeelingAndCausesActionType.POST_FEELING_AND_CAUSES_LOG_SUCCEEDED,
  FeelingAndCausesActionType.POST_FEELING_AND_CAUSES_LOG_FAILED
)<PostLogRequest, PostLogResponse, undefined>();
