import UserActionType from './UserActionType';
import { createAsyncAction } from 'typesafe-actions';
import { PostLoginRequest, PostLoginResponse } from 'src/apis/SimpleAuthenticate/models/Login';

export const postLogin = createAsyncAction(
  UserActionType.POST_LOGIN_REQUEST,
  UserActionType.POST_LOGIN_SUCCEEDED,
  UserActionType.POST_LOGIN_FAILED
)<PostLoginRequest, PostLoginResponse, undefined>();
