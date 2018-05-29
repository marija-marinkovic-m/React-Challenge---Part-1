import React from 'react';
import PropTypes from 'prop-types';
import getTimeDiff from '../util/timeDiff';
import TimeUnit from './Unit';
import LangContext, { translate } from '../util/i18n';

class Timer extends React.PureComponent {
  _interval;

  constructor(props) {
    super(props);
    this.state = {
      timeDiff: null
    }
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

  getUnitProps = () => {
    const { timeDiff } = this.state;
    if (!timeDiff) return [];
    return Object.keys(timeDiff)
      .filter(k => k !== 'tense')
      .map(label => ({label: `date.${label}`, value: timeDiff[label]}));
  }

  render() {
    const { timeDiff } = this.state;
    const units = this.getUnitProps();

    return <React.Fragment>
      <LangContext.Consumer>
        {lang => timeDiff && <h3>{translate(lang, `date.${timeDiff.tense}`)}</h3>}
      </LangContext.Consumer>

      { units.map((props,i) => <TimeUnit key={i} {...props} />) }

    </React.Fragment>
  }
}

Timer.displayName = 'CountdownTimer';
Timer.propTypes = {
  dateReference: PropTypes.instanceOf(Date).isRequired
}

export default Timer;