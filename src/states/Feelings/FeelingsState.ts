import { Feeling } from 'src/apis/CocoaApi/models/Feelings';

// FeelingState.idと同じ値
export enum FeelingType {
  VERY_DISSATISFIED = 1,
  DISSATISFIED = 2,
  NORMAL = 3,
  SATISFIED = 4,
  VERY_SATISFIED = 5,
}

type FeelingsState = {
  lists: Feeling[];
  edits: {
    selectedFeeling?: Feeling;
  };
  isFetching: boolean;
};

type ReadonlyFeelingsState = Readonly<FeelingsState>;
export default ReadonlyFeelingsState;
