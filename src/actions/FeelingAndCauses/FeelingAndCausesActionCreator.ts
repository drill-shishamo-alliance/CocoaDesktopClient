import FeelingAndCausesActionType from './FeelingAndCausesActionType';
import { createAsyncAction } from 'typesafe-actions';
import FeelingState from '../../states/FeelingState';
import CauseOfFeelingState from '../../states/CauseOfFeelingState';
import { InputDataParam } from '../../apis/CocoaApi/models/InputDataModel';

export const getFellings = createAsyncAction(
  FeelingAndCausesActionType.GET_FEELINGS_REQUEST,
  FeelingAndCausesActionType.GET_FEELINGS_SUCCEEDED,
  FeelingAndCausesActionType.GET_FEELINGS_FAILED
)<undefined, FeelingState[], Error>();

export const getCauses = createAsyncAction(
  FeelingAndCausesActionType.GET_CAUSES_REQUEST,
  FeelingAndCausesActionType.GET_CAUSES_SUCCEEDED,
  FeelingAndCausesActionType.GET_CAUSES_FAILED
)<undefined, CauseOfFeelingState[], Error>();

export const postFeelingAndCauses = createAsyncAction(
  FeelingAndCausesActionType.POST_FEELING_AND_CAUSES_REQUEST,
  FeelingAndCausesActionType.POST_FEELING_AND_CAUSES_SUCCEEDED,
  FeelingAndCausesActionType.POST_FEELING_AND_CAUSES_FAILED
)<InputDataParam, boolean, Error>();
