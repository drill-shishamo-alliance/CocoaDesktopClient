import { takeLatest, call, put } from 'redux-saga/effects';
import { PromiseGenericType } from '../../utils/types/TypeUtils';
import api from '../../apis/CocoaApi/CocoaApi';
import MoodsActionType from '../../actions/Moods/ActionType';
import { getFellings } from '../../actions/Moods/ActionCreator';

function* getMoodsSaga(action: ReturnType<typeof getFellings.request>) {
  const response: PromiseGenericType<ReturnType<typeof api.getMoods>> = yield call(
    api.getMoods,
    action.payload
  );

  if (response.status === 200 && response.data) {
    // weightの降順にソート
    const sortedMoods = response.data.sort((a, b) => b.weight - a.weight);
    yield put(getFellings.success(sortedMoods));
  } else if (response.status === 400) {
    yield put(getFellings.failure());
  } else {
    yield put(getFellings.failure());
  }
}

const moodsSagas = [takeLatest(MoodsActionType.GET_MOODS_REQUEST, getMoodsSaga)];
export default moodsSagas;
