import { connect } from 'react-redux';

import Details from '../components/Details';
import { FETCH_POST_PENDING } from '../actions';

const mapStateToProps = state => ({
  info: state.main.post,
  loading: state.main.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchPost: ID => dispatch({
    type: FETCH_POST_PENDING,
    payload: { ID },
  }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
