import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import RootState from '../../states';
import MoodsForm from '../../components/MoodsForm/MoodsFrom';
import {
  MoodsFormConnectedProps,
  MoodsFormDispatchProps,
} from '../../components/MoodsForm/MoodsFormProps';
import { Mood, GetMoodsQuery } from '../../apis/CocoaApi/models/Moods';
import { selectMood, getFellings } from '../../actions/Moods/ActionCreator';
import MoodsAction from '../../actions/Moods/Action';

const mapStateToProps = (state: RootState): MoodsFormConnectedProps => ({
  moods: state.moods.lists,
});

const mapDispatchToProps = (dispatch: Dispatch<MoodsAction>): MoodsFormDispatchProps => ({
  selectMood: (mood: Mood) => dispatch(selectMood(mood)),
  getMoodsRequest: (query: GetMoodsQuery) => dispatch(getFellings.request(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoodsForm);
