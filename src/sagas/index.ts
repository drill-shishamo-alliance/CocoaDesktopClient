import { all } from 'redux-saga/effects';
import userSagas from './User/UserSaga';
import { punchlogSagas } from './Punchlog';
import { moodsSagas } from './Moods';
import { causesSagas } from './Causes';

export default function* rootSaga() {
  yield all([...punchlogSagas, ...causesSagas, ...moodsSagas, ...userSagas]);
}
