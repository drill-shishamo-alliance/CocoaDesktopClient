import CauseOfFeelingState, {
    CauseOfFeelingType
} from 'src/models/states/CauseOfFeelingState';
import CauseOfFeelingAction from 'src/actions/CauseOfFeeling/CauseOfFeelingAction';

const initialState: CauseOfFeelingState[] = [
    {
        id: 1,
        type: CauseOfFeelingType.AMOUNT_OF_WORK,
        name: ''
    },
    {
        id: 2,
        type: CauseOfFeelingType.EVALUATION,
        name: ''
    },
    {
        id: 3,
        type: CauseOfFeelingType.HOLIDAY_WORK,
        name: ''
    },
    {
        id: 4,
        type: CauseOfFeelingType.HUMAN_RELATION,
        name: ''
    },
    {
        id: 5,
        type: CauseOfFeelingType.JOB_DESCRIPTION,
        name: ''
    },
    {
        id: 6,
        type: CauseOfFeelingType.OVERTIME_WORK,
        name: ''
    }
];

const couseOfFeelingState = (
    state: CauseOfFeelingState[] = initialState,
    action: CauseOfFeelingAction
): CauseOfFeelingState[] => {
    switch (action.type) {
        default:
            return state;
    }
};

export default couseOfFeelingState;
