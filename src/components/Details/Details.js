import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';
import Loader from '../Loader';

export default class Details extends React.Component {
  static propTypes = {
    info: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  static defaultProps = {
    // info: {
    //   key1: 'adasdasdasdasdsdfsgdgfsdfbdfgfasdasas',
    //   key2: 'aasdasdasdasasdasdasdasdasddasdas',
    //   key3: 'aasdasdasdasdasdasdasdasddas',
    //   key4: 'adasdasdasdasdasdasdasdadasdaas',
    //   key5: 'adaasddasdasdasdasdasdasdasdasdasdasds',
    // },
    info: 'no data',
  };

  componentDidMount() {
    this.props.fetchPost(Number(this.props.match.params.id) + 1);
  }

  render() {
    if (this.props.loading) return <Loader />;
    const { info } = this.props;
    return info.trim
      ? <p className={styles.data}>{ info }</p>
      : (
        <ul className={styles.list}>
          {Object.entries(info).map(([key, value]) => (

            <li className={styles.listItem}>
              <h2 className={styles.titleName}>{`${key}: `}</h2>
              <p className={styles.data}>{`${value}`}</p>


            </li>
          ))}
        </ul>
      );
  }
}
