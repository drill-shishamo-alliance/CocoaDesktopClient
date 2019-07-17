import { Cause } from 'src/apis/CocoaApi/models/Causes';

type CausesState = {
  lists: Cause[];
  edits: {
    selectedCauses: Cause[];
  };
  isFetching: boolean;
};

type ReadonlyCausesState = Readonly<CausesState>;
export default ReadonlyCausesState;
