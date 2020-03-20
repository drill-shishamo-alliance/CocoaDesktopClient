import { takeLatest, call, put } from 'redux-saga/effects';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';
import CausesActionType from 'src/actions/Cause/CausesActionType';
import { getCauses } from 'src/actions/Cause/CausesActionCreator';
import { getCausesApi } from 'src/apis/Cause/GetCausesApi';

export function* getCausesSaga(action: ReturnType<typeof getCauses.request>) {
  const response: PromiseGenericType<ReturnType<typeof getCausesApi>> = yield call(
    getCausesApi,
    action.payload
  );

  if (response.status === 200 && response.data) {
    yield put(getCauses.success(response.data));
  } else if (response.status === 400) {
    yield put(getCauses.failure());
  } else {
    yield put(getCauses.failure());
  }
}
