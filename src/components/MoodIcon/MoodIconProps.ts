import { WithStyles } from '@material-ui/core/styles';
import { Mood } from 'src/apis/CocoaApi/models/Moods';
import styles from './MoodIconStyles';

type MoodIconOwnProps = {
  mood: Mood;
};

type MoodIconProps = MoodIconOwnProps & WithStyles<typeof styles>;
export default MoodIconProps;
