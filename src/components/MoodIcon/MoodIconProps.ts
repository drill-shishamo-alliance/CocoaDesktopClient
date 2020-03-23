import { WithStyles } from '@material-ui/core/styles';
import styles from './MoodIconStyles';
import { Mood } from 'src/apis/Mood/Model';

type MoodIconOwnProps = {
  mood: Mood;
};

type MoodIconProps = MoodIconOwnProps & WithStyles<typeof styles>;
export default MoodIconProps;
