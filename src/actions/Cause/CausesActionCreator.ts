import { createAsyncAction, createStandardAction } from 'typesafe-actions';
import CausesActionType from './CausesActionType';
import { getCausesRequest, GetCausesResponse } from 'src/apis/Cause/GetCausesApi';
import { Cause } from 'src/apis/Cause/Model';

export const getCauses = createAsyncAction(
  CausesActionType.GET_CAUSES_REQUEST,
  CausesActionType.GET_CAUSES_SUCCEEDED,
  CausesActionType.GET_CAUSES_FAILED
)<getCausesRequest, GetCausesResponse, undefined>();

export const selectCause = createStandardAction(CausesActionType.TOGGLE_CAUSES)<Cause>();

export const clearSelectedCauses = createStandardAction(CausesActionType.CLEAR_SELECTED_CAUSES)<
  undefined
>();
