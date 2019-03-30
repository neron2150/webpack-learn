import { connect } from 'react-redux';

import List from '../components/List';

const mapStateToProps = state => ({
  list: state.main.data,
  loading: state.main.loading,
});

export default connect(
  mapStateToProps,
)(List);
