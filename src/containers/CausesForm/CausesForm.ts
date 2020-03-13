import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import RootState from '../../states';
import {
  CausesFormConnectedProps,
  CausesFormDispatchProps,
} from '../../components/CausesForm/CausesFormProps';
import AppAction from '../../actions/App/AppAction';
import CausesAction from '../../actions/Causes/CausesAction';
import { PostLogRequest } from '../../apis/CocoaApi/models/Log';
import { postMoodAndCausesLog } from '../../actions/App/AppActionCreator';
import { Cause, GetCausesQuery } from '../../apis/CocoaApi/models/Causes';
import {
  selectCause,
  getCauses,
  clearSelectedCauses,
} from '../../actions/Causes/CausesActionCreator';
import CausesForm from '../../components/CausesForm/CausesForm';

const mapStateToProps = (state: RootState): CausesFormConnectedProps => ({
  moodsState: state.moods,
  causesState: state.causes,
});

const mapDispatchToProps = (
  dispatch: Dispatch<AppAction | CausesAction>
): CausesFormDispatchProps => ({
  postMoodAndCausesLogRequest: (body: PostLogRequest) =>
    dispatch(postMoodAndCausesLog.request(body)),
  selectCause: (cause: Cause) => dispatch(selectCause(cause)),
  getCausesRequest: (query: GetCausesQuery) => dispatch(getCauses.request(query)),
  clearSelectedCauses: () => dispatch(clearSelectedCauses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CausesForm);
