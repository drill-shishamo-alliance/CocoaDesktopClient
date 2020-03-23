import { takeLatest } from 'redux-saga/effects';
import PunchlogActionType from 'src/actions/Punchlog/PunchlogActionType';
import { postPunchlogSaga } from './PostPunchlogSaga';

export const punchlogSagas = [
  takeLatest(PunchlogActionType.POST_PUNCHLOG_REQUEST, postPunchlogSaga),
];
