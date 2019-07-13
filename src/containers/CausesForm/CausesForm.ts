import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import RootState from 'src/states';
import {
  CausesFormConnectedProps,
  CausesFormDispatchProps,
} from 'src/components/CausesForm/CausesFormProps';
import AppAction from 'src/actions/App/AppAction';
import CausesAction from 'src/actions/Causes/CausesAction';
import { PostLogRequest } from 'src/apis/CocoaApi/models/Log';
import { postFeelingAndCausesLog } from 'src/actions/App/AppActionCreator';
import { Cause, GetCausesQuery } from 'src/apis/CocoaApi/models/Causes';
import { selectCause, getCauses } from 'src/actions/Causes/CausesActionCreator';
import CausesForm from 'src/components/CausesForm/CausesForm';

const mapStateToProps = (state: RootState): CausesFormConnectedProps => ({
  feelingsState: state.feelings,
  causesState: state.causes,
});

const mapDispatchToProps = (
  dispatch: Dispatch<AppAction | CausesAction>
): CausesFormDispatchProps => ({
  postFeelingAndCausesLogRequest: (body: PostLogRequest) =>
    dispatch(postFeelingAndCausesLog.request(body)),
  selectCause: (cause: Cause) => dispatch(selectCause(cause)),
  getCausesRequest: (query: GetCausesQuery) => dispatch(getCauses.request(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CausesForm);
