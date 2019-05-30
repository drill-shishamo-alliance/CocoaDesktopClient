import { takeLatest, call, put } from 'redux-saga/effects';
import FeelingAndCausesActionType from 'src/actions/FeelingAndCauses/FeelingAndCausesActionType';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';
import CocoaApi from 'src/apis/CocoaApi/CocoaApi';
import {
  getFellings,
  getCauses,
  postFeelingAndCauses,
} from 'src/actions/FeelingAndCauses/FeelingAndCausesActionCreator';

const api = new CocoaApi();

export function* getFeelingsSaga(action: ReturnType<typeof getFellings.request>) {
  const response: PromiseGenericType<ReturnType<typeof api.getFeelings>> = yield call(
    api.getFeelings
  );

  if (response.status === 200 && response.data) {
    const feelings: ReturnType<
      typeof api.mapGetFeelingsResponseToFeelings
    > = yield api.mapGetFeelingsResponseToFeelings(response.data);
    yield put(getFellings.success(feelings));
  } else if (response.status === 400) {
    yield put(getFellings.failure(new Error(response.data.result)));
  } else {
    yield put(getFellings.failure(new Error('unknown error')));
  }
}

export function* getCausesSaga(action: ReturnType<typeof getCauses.request>) {
  const response: PromiseGenericType<ReturnType<typeof api.getCauseOfFeelings>> = yield call(
    api.getCauseOfFeelings
  );

  if (response.status === 200 && response.data) {
    const causes: ReturnType<
      typeof api.mapGetCauseOfFeelingsResponseToCauses
    > = yield api.mapGetCauseOfFeelingsResponseToCauses(response.data);
    yield put(getCauses.success(causes));
  } else if (response.status === 400) {
    yield put(getCauses.failure(new Error(response.data.result)));
  } else {
    yield put(getCauses.failure(new Error('unknown error')));
  }
}

export function* postFeelingAndCausesSaga(action: ReturnType<typeof postFeelingAndCauses.request>) {
  const response: PromiseGenericType<ReturnType<typeof api.postInputData>> = yield call(
    api.postInputData,
    action.payload
  );

  if (response.status === 200) {
    yield put(postFeelingAndCauses.success());
  } else if (response.status === 400) {
    yield console.log(response.data.result);
    yield put(postFeelingAndCauses.failure());
  } else {
    yield console.log(response.data.result);
    yield put(postFeelingAndCauses.failure());
  }
}

const feelingAndCausesSagas = [
  takeLatest(FeelingAndCausesActionType.GET_FEELINGS_REQUEST, getFeelingsSaga),
  takeLatest(FeelingAndCausesActionType.GET_CAUSES_REQUEST, getCausesSaga),
  takeLatest(FeelingAndCausesActionType.POST_FEELING_AND_CAUSES_REQUEST, postFeelingAndCausesSaga),
];

export default feelingAndCausesSagas;
