import { takeLatest, call, put } from 'redux-saga/effects';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';
import api from 'src/apis/SimpleAuthenticateApi/SimpleAuthenticateApi';
import UserActionType from 'src/actions/User/UserActionType';
import { postLogin } from 'src/actions/User/UserActionCreator';

function* postLoginSaga(action: ReturnType<typeof postLogin.request>) {
  const response: PromiseGenericType<ReturnType<typeof api.postLogin>> = yield call(
    api.postLogin,
    action.payload
  );

  if (response.status === 200 && response.data) {
    yield put(postLogin.success(response.data));
  } else if (response.status === 400) {
    yield put(postLogin.failure());
  } else {
    yield put(postLogin.failure());
  }
}

const userSagas = [takeLatest(UserActionType.POST_LOGIN_REQUEST, postLoginSaga)];
export default userSagas;