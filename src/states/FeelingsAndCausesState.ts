import { FeelingState } from './FeelingState';
import { CauseOfFeelingState } from './CauseOfFeelingState';

type FeelingAndCausesState = {
  feelings: FeelingState[];
  causes: CauseOfFeelingState[];
  isInputDataSucceeded: boolean;
};

export default FeelingAndCausesState;
