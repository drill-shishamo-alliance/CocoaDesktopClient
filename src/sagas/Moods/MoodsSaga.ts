import { call, put } from 'redux-saga/effects';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';
import { getMoods } from 'src/actions/Moods/ActionCreator';
import { getMoodsApi } from 'src/apis/Mood/GetMoodsApi';

export function* getMoodsSaga(action: ReturnType<typeof getMoods.request>) {
  try {
    const response: PromiseGenericType<ReturnType<typeof getMoodsApi>> = yield call(
      getMoodsApi,
      action.payload
    );

    if (response.status === 200 && response.data) {
      // weightの降順にソート
      const sortedMoods = response.data.sort((a, b) => b.weight - a.weight);
      yield put(getMoods.success(sortedMoods));
    } else if (response.status === 400) {
      yield put(getMoods.failure());
    } else {
      yield put(getMoods.failure());
    }
  } catch {
    yield put(getMoods.failure());
  }
}
