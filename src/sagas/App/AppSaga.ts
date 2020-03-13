import { takeLatest, call, put } from 'redux-saga/effects';
import { PromiseGenericType } from '../../utils/types/TypeUtils';
import api from '../../apis/CocoaApi/CocoaApi';
import AppActionType from '../../actions/App/AppActionType';
import { postMoodAndCausesLog } from '../../actions/App/AppActionCreator';

function* postMoodAndCausesLogSaga(action: ReturnType<typeof postMoodAndCausesLog.request>) {
  const response: PromiseGenericType<ReturnType<typeof api.postLog>> = yield call(
    api.postLog,
    action.payload
  );

  if (response.status === 200 && response.data) {
    yield put(postMoodAndCausesLog.success(response.data));
  } else if (response.status === 400) {
    yield put(postMoodAndCausesLog.failure());
  } else {
    yield put(postMoodAndCausesLog.failure());
  }
}

const appSagas = [
  takeLatest(AppActionType.POST_MOOD_AND_CAUSES_LOG_REQUEST, postMoodAndCausesLogSaga),
];
export default appSagas;
