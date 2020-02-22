import { all } from 'redux-saga/effects';
import appSagas from './App/AppSaga';
import causesSagas from './Causes/CausesSaga';
import moodsSagas from './Moods/MoodsSaga';
import userSagas from './User/UserSaga';

export default function* rootSaga() {
  yield all([...appSagas, ...causesSagas, ...moodsSagas, ...userSagas]);
}
