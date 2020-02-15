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
import { postMoodAndCausesLog } from 'src/actions/App/AppActionCreator';
import { Cause, GetCausesQuery } from 'src/apis/CocoaApi/models/Causes';
import {
  selectCause,
  getCauses,
  clearSelectedCauses,
} from 'src/actions/Causes/CausesActionCreator';
import CausesForm from 'src/components/CausesForm/CausesForm';

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
