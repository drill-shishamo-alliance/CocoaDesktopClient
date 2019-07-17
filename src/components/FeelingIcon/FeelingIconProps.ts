import { WithStyles } from '@material-ui/core/styles';
import { Feeling } from 'src/apis/CocoaApi/models/Feelings';
import styles from './FeelingIconStyles';

type FeelingIconOwnProps = {
  feeling: Feeling;
};

type FeelingIconProps = FeelingIconOwnProps & WithStyles<typeof styles>;
export default FeelingIconProps;
