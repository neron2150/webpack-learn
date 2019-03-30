import { connect } from 'react-redux';
import { FETCH_DATA_PENDING } from '../../actions';

import App from './App';

const mapStateToProps = state => ({
  data: state.main.data,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch({
    type: FETCH_DATA_PENDING,
  }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
