import { createAsyncAction, createStandardAction } from 'typesafe-actions';
import { GetCausesResponse, GetCausesQuery, Cause } from 'src/apis/CocoaApi/models/Causes';
import CausesActionType from './CausesActionType';

export const getFellings = createAsyncAction(
  CausesActionType.GET_CAUSES_REQUEST,
  CausesActionType.GET_CAUSES_SUCCEEDED,
  CausesActionType.GET_CAUSES_FAILED
)<GetCausesQuery, GetCausesResponse, undefined>();

export const selectCause = createStandardAction(CausesActionType.TOGGLE_CAUSES)<Cause>();
