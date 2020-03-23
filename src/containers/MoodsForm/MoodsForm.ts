import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import RootState from 'src/states';
import MoodsForm from 'src/components/MoodsForm/MoodsFrom';
import {
  MoodsFormConnectedProps,
  MoodsFormDispatchProps,
} from 'src/components/MoodsForm/MoodsFormProps';
import MoodsAction from 'src/actions/Moods/Action';
import { Mood } from 'src/apis/Mood/Model';
import { selectMood, getMoods } from 'src/actions/Moods/ActionCreator';
import { GetMoodsRequest } from 'src/apis/Mood/GetMoodsApi';

const mapStateToProps = (state: RootState): MoodsFormConnectedProps => ({
  moods: state.moods.lists,
});

const mapDispatchToProps = (dispatch: Dispatch<MoodsAction>): MoodsFormDispatchProps => ({
  selectMood: (mood: Mood) => dispatch(selectMood(mood)),
  getMoodsRequest: (params: GetMoodsRequest) => dispatch(getMoods.request(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoodsForm);
