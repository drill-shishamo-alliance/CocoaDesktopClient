import { createAsyncAction, createStandardAction } from 'typesafe-actions';
import { GetCausesResponse, GetCausesQuery, Cause } from 'src/apis/CocoaApi/models/Causes';
import CausesActionType from './CausesActionType';

export const getCauses = createAsyncAction(
  CausesActionType.GET_CAUSES_REQUEST,
  CausesActionType.GET_CAUSES_SUCCEEDED,
  CausesActionType.GET_CAUSES_FAILED
)<GetCausesQuery, GetCausesResponse, undefined>();

export const selectCause = createStandardAction(CausesActionType.TOGGLE_CAUSES)<Cause>();

export const clearSelectedCauses = createStandardAction(CausesActionType.CLEAR_SELECTED_CAUSES)<
  undefined
>();