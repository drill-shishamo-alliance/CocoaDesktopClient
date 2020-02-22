import { ScreenType } from 'src/components/App/ScreenType';
import styles from './MoodsFormStyles';
import { WithStyles } from '@material-ui/core';
import { Mood, GetMoodsQuery } from 'src/apis/CocoaApi/models/Moods';

type MoodsFormOwnProps = {
  switchScreen: (screenType: ScreenType) => void;
};

export type MoodsFormConnectedProps = {
  moods: Mood[];
};

export type MoodsFormDispatchProps = {
  selectMood: (mood: Mood) => void;
  getMoodsRequest: (query: GetMoodsQuery) => void;
};

type MoodsFormProps = MoodsFormOwnProps &
  MoodsFormConnectedProps &
  MoodsFormDispatchProps &
  WithStyles<typeof styles>;
export default MoodsFormProps;
