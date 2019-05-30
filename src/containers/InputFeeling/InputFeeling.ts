import { Dispatch } from 'redux';
import ScreenAction from '../../actions/Screen/ScreenAction';
import {
  InputFeelingDispatchProps,
  InputFeelingConnectedProps,
} from '../../components/InputFeeling/InputFeelingProps';
import * as ScreenActionCreators from '../../actions/Screen/ScreenActionCreator';
import { FeelingState } from '../../states/FeelingState';
import { connect } from 'react-redux';
import InputFeeling from '../../components/InputFeeling/InputFeeling';
import RootState from 'src/states';

const mapDispatchToProps = (dispatch: Dispatch<ScreenAction>): InputFeelingDispatchProps => ({
  switchInputCauseOfFeeling: (feelingState: FeelingState) =>
    dispatch(ScreenActionCreators.switchInputCauseOfFeelingScreen(feelingState)),
});

const mapStateToProps = (state: RootState): InputFeelingConnectedProps => ({
  feelingStates: state.feelingAndCausesState.feelings,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFeeling);
