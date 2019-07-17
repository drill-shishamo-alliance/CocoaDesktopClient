import { takeLatest, call, put } from 'redux-saga/effects';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';
import api from 'src/apis/CocoaApi/CocoaApi';
import FeelingsActionType from 'src/actions/Feelings/FeelingsActionType';
import { getFellings } from 'src/actions/Feelings/FeelingsActionCreator';

function* getFeelingsSaga(action: ReturnType<typeof getFellings.request>) {
  const response: PromiseGenericType<ReturnType<typeof api.getFeelings>> = yield call(
    api.getFeelings,
    action.payload
  );

  if (response.status === 200 && response.data) {
    yield put(getFellings.success(response.data));
  } else if (response.status === 400) {
    yield put(getFellings.failure());
  } else {
    yield put(getFellings.failure());
  }
}

const feelingsSagas = [takeLatest(FeelingsActionType.GET_FEELINGS_REQUEST, getFeelingsSaga)];
export default feelingsSagas;
