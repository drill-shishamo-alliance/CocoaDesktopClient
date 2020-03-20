import { takeLatest, call, put } from 'redux-saga/effects';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';
import AppActionType from 'src/actions/Punchlog/PunchlogActionType';
import { postPunchlogApi } from 'src/apis/Puchlog/PostPunchlog';
import { postPunchlog } from 'src/actions/Punchlog/PunchlogActionCreator';

export function* postPunchlogSaga(action: ReturnType<typeof postPunchlog.request>) {
  const response: PromiseGenericType<ReturnType<typeof postPunchlogApi>> = yield call(
    postPunchlogApi,
    action.payload
  );

  // if (response.status === 200 && response.data) {
  //   yield put(postMoodAndCausesLog.success(response.data));
  // } else if (response.status === 400) {
  //   yield put(postMoodAndCausesLog.failure());
  // } else {
  //   yield put(postMoodAndCausesLog.failure());
  // }
  return response;
}
