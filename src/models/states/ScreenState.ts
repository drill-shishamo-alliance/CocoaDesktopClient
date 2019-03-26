import { FeelingType } from './FeelingState';

export enum ScreenType {
    INPUT_FEELING = 'INPUT_FEELING',
    INPUT_CAUSE_OF_FEELING = 'INPUT_CAUSE_OF_FEELING'
}

type ScreenState = { screenType: ScreenType; feelingType: FeelingType };
export default ScreenState;
