import FeelingState, { FeelingType } from 'src/states/FeelingState';
import FeelingAction from 'src/actions/Feeling/FeelingAction';
import FeelingActionType from 'src/actions/Feeling/FeelingActionType';

const initialState: FeelingState[] = [
  {
    feelingId: 1,
    feelingType: FeelingType.VERY_DISSATISFIED,
    name: '最悪',
  },
  {
    feelingId: 2,
    feelingType: FeelingType.DISSATISFIED,
    name: '悪い',
  },
  {
    feelingId: 3,
    feelingType: FeelingType.NORMAL,
    name: '普通',
  },
  {
    feelingId: 4,
    feelingType: FeelingType.SATISFIED,
    name: '良い',
  },
  {
    feelingId: 5,
    feelingType: FeelingType.VERY_SATISFIED,
    name: '最高',
  },
];

const feelingState = (
  state: FeelingState[] = initialState,
  action: FeelingAction
): FeelingState[] => {
  switch (action.type) {
    case FeelingActionType.FETCH_FEELING_SUCCEEDED:
      return [...state.slice(state.length), ...action.payload];
    default:
      return state;
  }
};

export default feelingState;
