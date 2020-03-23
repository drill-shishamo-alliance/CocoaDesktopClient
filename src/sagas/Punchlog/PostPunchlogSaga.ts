import { call, put } from 'redux-saga/effects';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';
import { postPunchlogApi } from 'src/apis/Puchlog/PostPunchlog';
import { postPunchlog } from 'src/actions/Punchlog/PunchlogActionCreator';

export function* postPunchlogSaga(action: ReturnType<typeof postPunchlog.request>) {
  try {
    const response: PromiseGenericType<ReturnType<typeof postPunchlogApi>> = yield call(
      postPunchlogApi,
      action.payload
    );
    if (response.status === 201) {
      yield put(postPunchlog.success());
    } else if (response.status === 400) {
      yield put(postPunchlog.failure(new Error('error 400 post punchlog')));
    } else {
      yield put(postPunchlog.failure(new Error('error post punchlog')));
    }
  } catch (e) {
    yield put(postPunchlog.failure(new Error(e)));
  }
}
