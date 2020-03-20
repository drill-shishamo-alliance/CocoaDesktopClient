import { WithStyles } from '@material-ui/core';
import styles from './MoodButtonStyles';
import { Mood } from 'src/apis/Mood/Model';

type MoodButtonOwnProps = {
  mood: Mood;
  handleClick: (selectedMood: Mood) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

type MoodButtonProps = WithStyles<typeof styles> & MoodButtonOwnProps;
export default MoodButtonProps;
