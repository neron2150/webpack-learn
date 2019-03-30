import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

export default class List extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.any).isRequired,

  };

  render() {
    return (
      <ul className={styles.list}>
        {this.props.list.map(
          (item, index) =>
            (
              <li key={item.ID || `${item}-${index}`} className={styles.listItem}>
                {this.props.renderItem(item, index)}
              </li>
            ),
        )}
      </ul>
    );
  }
}
