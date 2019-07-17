import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import RootState from 'src/states';
import FeelingsForm from 'src/components/FeelingsForm/FeelingsFrom';
import {
  FeelingsFormConnectedProps,
  FeelingsFormDispatchProps,
} from 'src/components/FeelingsForm/FeelingsFormProps';
import { Feeling, GetFeelingsQuery } from 'src/apis/CocoaApi/models/Feelings';
import { selectFeeling, getFellings } from 'src/actions/Feelings/FeelingsActionCreator';
import FeelingsAction from 'src/actions/Feelings/FeelingsAction';

const mapStateToProps = (state: RootState): FeelingsFormConnectedProps => ({
  feelings: state.feelings.lists,
});

const mapDispatchToProps = (dispatch: Dispatch<FeelingsAction>): FeelingsFormDispatchProps => ({
  selectFeeling: (feeling: Feeling) => dispatch(selectFeeling(feeling)),
  getFeelingsRequest: (query: GetFeelingsQuery) => dispatch(getFellings.request(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeelingsForm);
