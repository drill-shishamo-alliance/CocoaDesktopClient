import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import RootState from 'src/states';
import {
  CausesFormConnectedProps,
  CausesFormDispatchProps,
} from 'src/components/CausesForm/CausesFormProps';
import AppAction from 'src/actions/Punchlog/PunchlogAction';
import CausesAction from 'src/actions/Cause/CausesAction';
import { selectCause, getCauses, clearSelectedCauses } from 'src/actions/Cause/CausesActionCreator';
import CausesForm from 'src/components/CausesForm/CausesForm';
import { PostPunchlogRequest } from 'src/apis/Puchlog/PostPunchlog';
import { postPunchlog } from 'src/actions/Punchlog/PunchlogActionCreator';
import { Cause } from 'src/apis/Cause/Model';
import { getCausesRequest } from 'src/apis/Cause/GetCausesApi';

const mapStateToProps = (state: RootState): CausesFormConnectedProps => ({
  employeeId: state.user.employeeId,
  moodsState: state.moods,
  causesState: state.causes,
});

const mapDispatchToProps = (
  dispatch: Dispatch<AppAction | CausesAction>
): CausesFormDispatchProps => ({
  postMoodAndCausesLogRequest: (body: PostPunchlogRequest) => dispatch(postPunchlog.request(body)),
  selectCause: (cause: Cause) => dispatch(selectCause(cause)),
  getCausesRequest: (params: getCausesRequest) => dispatch(getCauses.request(params)),
  clearSelectedCauses: () => dispatch(clearSelectedCauses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CausesForm);
