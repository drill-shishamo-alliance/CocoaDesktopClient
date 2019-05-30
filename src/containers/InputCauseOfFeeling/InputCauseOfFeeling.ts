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
import { InputDataParams } from 'src/apis/CocoaApi/models/InputDataModel';
import { postFeelingAndCauses } from 'src/actions/FeelingAndCauses/FeelingAndCausesActionCreator';
import FeelingAndCausesAction from 'src/actions/FeelingAndCauses/FeelingAndCausesAction';

const mapStateToProps = (state: RootState): InputCauseOfFeelingConnectedProps => ({
  selectedFeelingId: state.screenState.selectedFeelingId,
  causeOfFeelingStates: state.feelingAndCausesState.causes,
});

const mapDispatchToProps = (
  dispatch: Dispatch<ScreenAction | FeelingAndCausesAction>
): InputCauseOfFeelingDispatchProps => ({
  switchInputFeeling: () => dispatch(ScreenActionCreators.switchInputFeelingScreen()),
  postFeelingAndCausesRequest: (params: InputDataParams) =>
    dispatch(postFeelingAndCauses.request(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputCauseOfFeeling);
