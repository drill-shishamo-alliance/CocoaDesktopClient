import { WithStyles } from '@material-ui/core';
import styles from './CausesFormStyles';
import CausesState from 'src/states/Causes/CausesState';
import MoodsState from 'src/states/Moods/MoodsState';
import UserState from 'src/states/User/UserState';
import { ScreenType } from '../MainPage/ScreenType';
import { PostLogRequest } from 'src/apis/CocoaApi/models/Log';
import { Cause, GetCausesQuery } from 'src/apis/CocoaApi/models/Causes';

type CausesFormOwnProps = {
  switchScreen: (screenType: ScreenType) => void;
};

export type CausesFormConnectedProps = {
  employeeId: UserState['employeeId'];
  moodsState: MoodsState;
  causesState: CausesState;
};

export type CausesFormDispatchProps = {
  postMoodAndCausesLogRequest: (body: PostLogRequest) => void;
  selectCause: (cause: Cause) => void;
  getCausesRequest: (query: GetCausesQuery) => void;
  clearSelectedCauses: () => void;
};

type CausesFormProps = WithStyles<typeof styles> &
  CausesFormOwnProps &
  CausesFormConnectedProps &
  CausesFormDispatchProps;

export default CausesFormProps;
