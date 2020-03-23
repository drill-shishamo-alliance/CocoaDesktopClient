import { WithStyles } from '@material-ui/core';
import styles from './CausesFormStyles';
import CausesState from 'src/states/Causes/CausesState';
import MoodsState from 'src/states/Moods/MoodsState';
import UserState from 'src/states/User/UserState';
import { ScreenType } from '../MainPage/ScreenType';
import { PostPunchlogRequest } from 'src/apis/Puchlog/PostPunchlog';
import { getCausesRequest } from 'src/apis/Cause/GetCausesApi';
import { Cause } from 'src/apis/Cause/Model';

type CausesFormOwnProps = {
  switchScreen: (screenType: ScreenType) => void;
};

export type CausesFormConnectedProps = {
  employeeId: UserState['employeeId'];
  moodsState: MoodsState;
  causesState: CausesState;
};

export type CausesFormDispatchProps = {
  postMoodAndCausesLogRequest: (body: PostPunchlogRequest) => void;
  selectCause: (cause: Cause) => void;
  getCausesRequest: (params: getCausesRequest) => void;
  clearSelectedCauses: () => void;
};

type CausesFormProps = WithStyles<typeof styles> &
  CausesFormOwnProps &
  CausesFormConnectedProps &
  CausesFormDispatchProps;

export default CausesFormProps;
