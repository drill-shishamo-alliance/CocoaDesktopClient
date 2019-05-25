import RootState from '../../states';
import App, { AppConnectedProps } from '../../App';
import { connect } from 'react-redux';

const mapStateToProps = (state: RootState): AppConnectedProps => {
  return {
    screenState: state.screenState,
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
