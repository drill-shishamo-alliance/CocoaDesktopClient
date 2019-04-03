import {
    InputCauseOfFeelingConnectedProps,
    InputCauseOfFeelingDispatchProps
} from 'src/components/InputCauseOfFeeling/InputCauseOfFeelingProps';
import RootState from 'src/models/states';
import { connect } from 'react-redux';
import InputCauseOfFeeling from 'src/components/InputCauseOfFeeling/InputCauseOfFeeling';
import ScreenAction from 'src/actions/Screen/ScreenAction';
import * as ScreenActionCreators from '../../actions/Screen/ScreenActionCreator';
import { Dispatch } from 'redux';

const mapStateToProps = (
    state: RootState
): InputCauseOfFeelingConnectedProps => ({
    selectedFeelingType: state.screenState.feelingType
});

const mapDispatchToProps = (
    dispatch: Dispatch<ScreenAction>
): InputCauseOfFeelingDispatchProps => ({
    switchInputFeeling: () =>
        dispatch(ScreenActionCreators.switchInputFeelingScreen())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputCauseOfFeeling);
