import React from 'react';
import PropTypes from 'prop-types';

export default class Details extends React.Component {
  static propTypes = {
    info: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  static defaultProps = {
    info: 'no data',
  };

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    const { info } = this.props;
    return info.trim
      ? info
      : (
        <div>
          {Object.entries(info).map(([key, value]) => (
            <div>{`${key}: ${value}`}</div>
          ))}
        </div>
      );
  }
}
