import { createAsyncAction, createStandardAction } from 'typesafe-actions';
import MoodsActionType from './ActionType';
import { GetMoodsRequest, GetMoodsResponse } from 'src/apis/Mood/GetMoodsApi';
import { Mood } from 'src/apis/Mood/Model';

export const getMoods = createAsyncAction(
  MoodsActionType.GET_MOODS_REQUEST,
  MoodsActionType.GET_MOODS_SUCCEEDED,
  MoodsActionType.GET_MOODS_FAILED
)<GetMoodsRequest, GetMoodsResponse, undefined>();

export const selectMood = createStandardAction(MoodsActionType.SELECT_MOOD)<Mood>();
