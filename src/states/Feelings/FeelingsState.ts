import { Feeling } from 'src/apis/CocoaApi/models/Feelings';

type FeelingsState = {
  lists: Feeling[];
  edits: {
    selectedFeeling?: Feeling;
  };
  isFetching: boolean;
};

type ReadonlyFeelingsState = Readonly<FeelingsState>;
export default ReadonlyFeelingsState;
