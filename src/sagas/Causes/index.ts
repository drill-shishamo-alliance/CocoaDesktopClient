import { takeLatest } from 'redux-saga/effects';
import CausesActionType from 'src/actions/Cause/CausesActionType';
import { getCausesSaga } from './CausesSaga';

export const causesSagas = [takeLatest(CausesActionType.GET_CAUSES_REQUEST, getCausesSaga)];
