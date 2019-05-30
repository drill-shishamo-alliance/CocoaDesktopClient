import { all } from 'redux-saga/effects';
import feelingAndCausesSagas from './FeelingAndCauses/FeelingAndCausesSaga';

export default function* rootSaga() {
  yield all([...feelingAndCausesSagas]);
}
