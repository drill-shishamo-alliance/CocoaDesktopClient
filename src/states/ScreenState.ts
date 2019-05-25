import FeelingState from './FeelingState';

export enum ScreenType {
  INPUT_FEELING = 'INPUT_FEELING',
  INPUT_CAUSE_OF_FEELING = 'INPUT_CAUSE_OF_FEELING',
}

type ScreenState = { screenType: ScreenType; feelingState: FeelingState };
export default ScreenState;
