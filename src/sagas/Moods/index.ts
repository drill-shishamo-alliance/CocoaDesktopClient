import { takeLatest } from 'redux-saga/effects';
import MoodsActionType from 'src/actions/Moods/ActionType';
import { getMoodsSaga } from './MoodsSaga';

export const moodsSagas = [takeLatest(MoodsActionType.GET_MOODS_REQUEST, getMoodsSaga)];
