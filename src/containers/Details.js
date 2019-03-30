import { connect } from 'react-redux';

import Details from '../components/Details';

const mapStateToProps = state => ({
  post: null,
});

const mapDispatchToProps = dispatch => ({
  fetchPost: ID => dispatch({
    type: 'FETCH_POST_PENDING',
    payload: { ID },
  }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
