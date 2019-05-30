export enum ScreenType {
  INPUT_FEELING = 'INPUT_FEELING',
  INPUT_CAUSE_OF_FEELING = 'INPUT_CAUSE_OF_FEELING',
}

export type ScreenState = { screenType: ScreenType; selectedFeelingId: number };
