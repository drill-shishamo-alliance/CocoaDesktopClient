import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import RootState from 'src/states';
import MoodsForm from 'src/components/MoodsForm/MoodsFrom';
import {
  MoodsFormConnectedProps,
  MoodsFormDispatchProps,
} from 'src/components/MoodsForm/MoodsFormProps';
import { Mood, GetMoodsQuery } from 'src/apis/CocoaApi/models/Moods';
import { selectMood, getFellings } from 'src/actions/Moods/ActionCreator';
import MoodsAction from 'src/actions/Moods/Action';

const mapStateToProps = (state: RootState): MoodsFormConnectedProps => ({
  moods: state.moods.lists,
});

const mapDispatchToProps = (dispatch: Dispatch<MoodsAction>): MoodsFormDispatchProps => ({
  selectMood: (mood: Mood) => dispatch(selectMood(mood)),
  getMoodsRequest: (query: GetMoodsQuery) => dispatch(getFellings.request(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoodsForm);
