import { createAsyncAction, createStandardAction } from 'typesafe-actions';
import { GetMoodsQuery, Mood } from 'src/apis/CocoaApi/models/Moods';
import MoodsActionType from './ActionType';

export const getFellings = createAsyncAction(
  MoodsActionType.GET_MOODS_REQUEST,
  MoodsActionType.GET_MOODS_SUCCEEDED,
  MoodsActionType.GET_MOODS_FAILED
)<GetMoodsQuery, Mood[], undefined>();

export const selectMood = createStandardAction(MoodsActionType.SELECT_MOOD)<Mood>();
