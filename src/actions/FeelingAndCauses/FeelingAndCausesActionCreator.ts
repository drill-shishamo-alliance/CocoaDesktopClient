import FeelingAndCausesActionType from './FeelingAndCausesActionType';
import { createAsyncAction } from 'typesafe-actions';
import FeelingState from 'src/states/FeelingState';
import CauseOfFeelingState from 'src/states/CauseOfFeelingState';
import { InputDataParams } from 'src/apis/CocoaApi/models/InputDataModel';

export const getFellings = createAsyncAction(
  FeelingAndCausesActionType.GET_FEELINGS_REQUEST,
  FeelingAndCausesActionType.GET_FEELINGS_SUCCEEDED,
  FeelingAndCausesActionType.GET_FEELINGS_FAILED
)<string, FeelingState[], Error>();

export const getCauses = createAsyncAction(
  FeelingAndCausesActionType.GET_CAUSES_REQUEST,
  FeelingAndCausesActionType.GET_CAUSES_SUCCEEDED,
  FeelingAndCausesActionType.GET_CAUSES_FAILED
)<string, CauseOfFeelingState[], Error>();

export const postFeelingAndCauses = createAsyncAction(
  FeelingAndCausesActionType.POST_FEELING_AND_CAUSES_REQUEST,
  FeelingAndCausesActionType.POST_FEELING_AND_CAUSES_SUCCEEDED,
  FeelingAndCausesActionType.POST_FEELING_AND_CAUSES_FAILED
)<InputDataParams, undefined, undefined>();
