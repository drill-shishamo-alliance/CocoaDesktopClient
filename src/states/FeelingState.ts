// FeelingState.idと同じ値
export enum FeelingType {
  VERY_DISSATISFIED = 1,
  DISSATISFIED = 2,
  NORMAL = 3,
  SATISFIED = 4,
  VERY_SATISFIED = 5,
}

export type FeelingState = {
  id: number;
  name: string;
};
