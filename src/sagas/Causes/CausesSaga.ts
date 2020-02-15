import { takeLatest, call, put } from 'redux-saga/effects';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';
import api from 'src/apis/CocoaApi/CocoaApi';
import CausesActionType from 'src/actions/Causes/CausesActionType';
import { getCauses } from 'src/actions/Causes/CausesActionCreator';

function* getCausesSaga(action: ReturnType<typeof getCauses.request>) {
  const response: PromiseGenericType<ReturnType<typeof api.getCauses>> = yield call(
    api.getCauses,
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

const causesSagas = [takeLatest(CausesActionType.GET_CAUSES_REQUEST, getCausesSaga)];
export default causesSagas;