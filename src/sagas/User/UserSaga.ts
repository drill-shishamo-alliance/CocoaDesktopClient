import { takeLatest, call, put } from 'redux-saga/effects';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';
import api from 'src/apis/SimpleAuthenticate/SimpleAuthenticateApi';
import UserActionType from 'src/actions/User/UserActionType';
import { postLogin } from 'src/actions/User/UserActionCreator';
import { getMoodsSaga } from '../Moods/MoodsSaga';
import { getMoods } from 'src/actions/Moods/ActionCreator';
import { getCauses } from 'src/actions/Cause/CausesActionCreator';

function* postLoginSaga(action: ReturnType<typeof postLogin.request>) {
  const response: PromiseGenericType<ReturnType<typeof api.postLogin>> = yield call(
    api.postLogin,
    action.payload
  );

  if (response.status === 201 && response.data) {
    yield put(postLogin.success(response.data));
    yield put(getMoods.request({ departmentId: response.data.department_id }));
    yield put(getCauses.request({ departmentId: response.data.department_id }));
  } else if (response.status === 400) {
    yield put(postLogin.failure());
  } else {
    yield put(postLogin.failure());
  }
}

const userSagas = [takeLatest(UserActionType.POST_LOGIN_REQUEST, postLoginSaga)];
export default userSagas;
