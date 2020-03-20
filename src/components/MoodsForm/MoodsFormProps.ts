import { ScreenType } from 'src/components/MainPage/ScreenType';
import styles from './MoodsFormStyles';
import { WithStyles } from '@material-ui/core';
import { GetMoodsRequest } from 'src/apis/Mood/GetMoodsApi';
import { Mood } from 'src/apis/Mood/Model';

type MoodsFormOwnProps = {
  switchScreen: (screenType: ScreenType) => void;
};

export type MoodsFormConnectedProps = {
  moods: Mood[];
};

export type MoodsFormDispatchProps = {
  selectMood: (mood: Mood) => void;
  getMoodsRequest: (params: GetMoodsRequest) => void;
};

type MoodsFormProps = MoodsFormOwnProps &
  MoodsFormConnectedProps &
  MoodsFormDispatchProps &
  WithStyles<typeof styles>;
export default MoodsFormProps;
