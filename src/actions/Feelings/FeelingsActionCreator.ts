import { createAsyncAction, createStandardAction } from 'typesafe-actions';
import { GetFeelingsResponse, GetFeelingsQuery, Feeling } from 'src/apis/CocoaApi/models/Feelings';
import FeelingsActionType from './FeelingsActionType';

export const getFellings = createAsyncAction(
  FeelingsActionType.GET_FEELINGS_REQUEST,
  FeelingsActionType.GET_FEELINGS_SUCCEEDED,
  FeelingsActionType.GET_FEELINGS_FAILED
)<GetFeelingsQuery, GetFeelingsResponse, undefined>();

export const selectFeeling = createStandardAction(FeelingsActionType.SELECT_FEELING)<Feeling>();
