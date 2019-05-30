// CauseOfFeelingState.idと同じ値
export enum CauseOfFeelingType {
  AMOUNT_OF_WORK = 1,
  JOB_DESCRIPTION = 2,
  HUMAN_RELATION = 3,
  EVALUATION = 4,
  OVERTIME_WORK = 5,
  HOLIDAY_WORK = 6,
}

export type CauseOfFeelingState = {
  id: number;
  name: string;
};
