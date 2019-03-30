import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './App.css';
import List from '../../components/List';

class App extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.any),
    fetchData: PropTypes.func,
  };

  static defaultProps = {
    data: [],
    fetchData: () => {},
  };

  componentDidMount() {
    this.props.fetchData();
  }

  renderListItem = (item, index) => (
    <Link to={`/details/${item.ID || index}`}>{item}</Link>
  );

  render() {
    return (
      <List list={this.props.data} renderItem={this.renderListItem} />
    );
  }
}

export default App;
