import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './App.css';
import List from '../List';

class App extends Component {
  static propTypes = {
    fetchData: PropTypes.func,
  };

  static defaultProps = {
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
      <React.Fragment>
        <List renderItem={this.renderListItem} />
      </React.Fragment>
    );
  }
}

export default App;
