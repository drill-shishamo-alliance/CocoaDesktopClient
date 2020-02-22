import MoodAndCausesActionType from './AppActionType';
import { createAsyncAction } from 'typesafe-actions';
import { PostLogRequest, PostLogResponse } from 'src/apis/CocoaApi/models/Log';

// アプリケーション全体に関わるAction
export const postMoodAndCausesLog = createAsyncAction(
  MoodAndCausesActionType.POST_MOOD_AND_CAUSES_LOG_REQUEST,
  MoodAndCausesActionType.POST_MOOD_AND_CAUSES_LOG_SUCCEEDED,
  MoodAndCausesActionType.POST_MOOD_AND_CAUSES_LOG_FAILED
)<PostLogRequest, PostLogResponse, undefined>();
