import { InputCauseOfFeelingConnectedProps } from 'src/components/InputCauseOfFeeling/InputCauseOfFeelingProps';
import RootState from 'src/models/states';
import { connect } from 'react-redux';
import InputCauseOfFeeling from 'src/components/InputCauseOfFeeling/InputCauseOfFeeling';

const mapStateToProps = (
    state: RootState
): InputCauseOfFeelingConnectedProps => ({
    selectedFeelingType: state.screenState.feelingType
});

export default connect(
    mapStateToProps,
    null
)(InputCauseOfFeeling);
