import { ScreenType } from 'src/components/App/ScreenType';
import styles from './FeelingsFormStyles';
import { WithStyles } from '@material-ui/core';
import { Feeling, GetFeelingsQuery } from 'src/apis/CocoaApi/models/Feelings';

type FeelingsFormOwnProps = {
  switchScreen: (screenType: ScreenType) => void;
};

export type FeelingsFormConnectedProps = {
  feelings: Feeling[];
};

export type FeelingsFormDispatchProps = {
  selectFeeling: (feeling: Feeling) => void;
  getFeelingsRequest: (query: GetFeelingsQuery) => void;
};

type FeelingsFormProps = FeelingsFormOwnProps &
  FeelingsFormConnectedProps &
  FeelingsFormDispatchProps &
  WithStyles<typeof styles>;
export default FeelingsFormProps;
