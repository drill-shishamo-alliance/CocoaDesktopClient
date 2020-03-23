import { Cause } from 'src/apis/Cause/Model';

type CausesState = {
  lists: Cause[];
  edits: {
    selectedCauses: Cause[];
  };
  isFetching: boolean;
};

type ReadonlyCausesState = Readonly<CausesState>;
export default ReadonlyCausesState;
