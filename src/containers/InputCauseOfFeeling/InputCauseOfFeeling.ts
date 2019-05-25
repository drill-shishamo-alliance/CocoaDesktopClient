import {
  InputCauseOfFeelingConnectedProps,
  InputCauseOfFeelingDispatchProps,
} from '../../components/InputCauseOfFeeling/InputCauseOfFeelingProps';
import RootState from '../../states';
import { connect } from 'react-redux';
import InputCauseOfFeeling from '../../components/InputCauseOfFeeling/InputCauseOfFeeling';
import ScreenAction from '../../actions/Screen/ScreenAction';
import * as ScreenActionCreators from '../../actions/Screen/ScreenActionCreator';
import { Dispatch } from 'redux';

const mapStateToProps = (state: RootState): InputCauseOfFeelingConnectedProps => ({
  selectedFeelingState: state.screenState.feelingState,
  causeOfFeelingStates: state.couseOfFeelingState,
});

const mapDispatchToProps = (
  dispatch: Dispatch<ScreenAction>
): InputCauseOfFeelingDispatchProps => ({
  switchInputFeeling: () => dispatch(ScreenActionCreators.switchInputFeelingScreen()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputCauseOfFeeling);
