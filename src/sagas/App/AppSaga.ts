import { takeLatest, call, put } from 'redux-saga/effects';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';
import CocoaApi from 'src/apis/CocoaApi/CocoaApi';
import AppActionType from 'src/actions/App/AppActionType';
import { postFeelingAndCausesLog } from 'src/actions/App/AppActionCreator';

const api = new CocoaApi();

function* postFeelingAndCausesLogSaga(action: ReturnType<typeof postFeelingAndCausesLog.request>) {
  const response: PromiseGenericType<ReturnType<typeof api.postLog>> = yield call(
    api.postLog,
    action.payload
  );

  if (response.status === 200 && response.data) {
    yield put(postFeelingAndCausesLog.success(response.data));
  } else if (response.status === 400) {
    yield put(postFeelingAndCausesLog.failure());
  } else {
    yield put(postFeelingAndCausesLog.failure());
  }
}

const appSagas = [
  takeLatest(AppActionType.POST_FEELING_AND_CAUSES_LOG_REQUEST, postFeelingAndCausesLogSaga),
];
export default appSagas;
