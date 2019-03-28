import { Dispatch } from 'redux';
import ScreenAction from '../../actions/Screen/ScreenAction';
import { InputFeelingDispatchProps } from '../../components/InputFeeling/InputFeelingProps';
import * as ScreenActionCreators from '../../actions/Screen/ScreenActionCreator';
import { FeelingType } from '../../models/states/FeelingState';
import { connect } from 'react-redux';
import InputFeeling from '../../components/InputFeeling/InputFeeling';

const mapDispatchToProps = (
    dispatch: Dispatch<ScreenAction>
): InputFeelingDispatchProps => ({
    switchInputCauseOfFeeling: (feelingType: FeelingType) =>
        dispatch(
            ScreenActionCreators.switchInputCauseOfFeelingScreen(feelingType)
        )
});

export default connect(
    null,
    mapDispatchToProps
)(InputFeeling);
