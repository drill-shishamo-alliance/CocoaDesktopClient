import PunchlogActionType from './PunchlogActionType';
import { createAsyncAction } from 'typesafe-actions';
import { PostPunchlogRequest, PostPunchlogResponse } from 'src/apis/Puchlog/PostPunchlog';

export const postPunchlog = createAsyncAction(
  PunchlogActionType.POST_PUNCHLOG_REQUEST,
  PunchlogActionType.POST_PUNCHLOG_SUCCEEDED,
  PunchlogActionType.POST_PUNCHLOG_FAILED
)<PostPunchlogRequest, PostPunchlogResponse, Error>();
