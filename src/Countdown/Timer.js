import React from 'react';
import PropTypes from 'prop-types';
import getTimeDiff from '../util/timeDiff';

class Timer extends React.Component {
  _interval;

  constructor(props) {
    super(props);
    this.state = {
      timeDiff: null
    }
  }

  static getDerivedStateFromProps(props, state) {
    return null;
  }

  componentDidMount() {
    this._interval = setInterval(this.handleCountdown, 1000);
  }

  componentWillUnmount() {
    if (this._interval) clearInterval(this._interval);
  }

  handleCountdown = () => {
    this.setState({ timeDiff: getTimeDiff((new Date()), this.props.dateReference) });
  }

  render() {
    return <React.Fragment>
      <h3>Starts In</h3>
      <pre>{ JSON.stringify(this.state.timeDiff) }</pre>
    </React.Fragment>
  }
}

Timer.displayName = 'CountdownTimer';
Timer.propTypes = {
  dateReference: PropTypes.instanceOf(Date).isRequired
}

export default Timer;