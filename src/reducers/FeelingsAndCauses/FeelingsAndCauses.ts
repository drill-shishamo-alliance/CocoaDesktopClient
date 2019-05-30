import FeelingsAndCausesState from 'src/states/FeelingsAndCausesState';
import FeelingAndCauseAction from 'src/actions/FeelingAndCauses/FeelingAndCausesAction';
import FeelingAndCausesActionType from 'src/actions/FeelingAndCauses/FeelingAndCausesActionType';

const initialState: FeelingsAndCausesState = {
  feelings: [
    {
      id: 1,
      name: '最悪',
    },
    {
      id: 2,
      name: '悪い',
    },
    {
      id: 3,
      name: '普通',
    },
    {
      id: 4,
      name: '良い',
    },
    {
      id: 5,
      name: '最高',
    },
  ],
  causes: [
    {
      id: 1,
      name: '',
    },
    {
      id: 2,
      name: '',
    },
    {
      id: 3,
      name: '',
    },
    {
      id: 4,
      name: '',
    },
    {
      id: 5,
      name: '',
    },
    {
      id: 6,
      name: '',
    },
  ],
  isInputDataSucceeded: false,
};

const feelingAndCauses = (
  state: FeelingsAndCausesState = initialState,
  action: FeelingAndCauseAction
): FeelingsAndCausesState => {
  switch (action.type) {
    case FeelingAndCausesActionType.GET_FEELINGS_SUCCEEDED:
      return {
        ...state,
        feelings: [...state.feelings, ...action.payload],
      };
    case FeelingAndCausesActionType.GET_CAUSES_SUCCEEDED:
      return {
        ...state,
        causes: [...state.causes, ...action.payload],
      };
    case FeelingAndCausesActionType.POST_FEELING_AND_CAUSES_SUCCEEDED:
      return {
        ...state,
        isInputDataSucceeded: true,
      };
    case FeelingAndCausesActionType.POST_FEELING_AND_CAUSES_FAILED:
      return {
        ...state,
        isInputDataSucceeded: false,
      };
    default:
      return state;
  }
};

export default feelingAndCauses;
