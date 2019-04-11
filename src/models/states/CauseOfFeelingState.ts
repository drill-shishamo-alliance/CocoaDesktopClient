export enum CauseOfFeelingType {
    AMOUNT_OF_WORK = '@CAUSE/AMOUNT_OF_WORK',
    JOB_DESCRIPTION = '@CAUSE/JOB_DESCRIPTION',
    HUMAN_RELATION = '@CAUSE/HUMAN_RELATION',
    EVALUATION = '@CAUSE/EVALUATION',
    OVERTIME_WORK = '@CAUSE/OVERTIME_WORK',
    HOLIDAY_WORK = '@CAUSE/HOLIDAY_WORK'
}

type CauseOfFeelingState = {
    id: number;
    type: CauseOfFeelingType;
    name: string;
};

export default CauseOfFeelingState;
