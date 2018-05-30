import React from 'react';
import PropTypes from 'prop-types';
import getTimeDiff from '../../util/timeDiff';
import TimeUnit from './Unit';
import LangContext, { translate } from '../../util/i18n';
import styled from 'styled-components';

const Title = styled.h1`
  margin: 5px; padding: 0;
  text-align: left; font-size: 20px;
  text-transform: uppercase; letter-spacing: 3px;
  font-weight: normal;
  opacity: 0.75;
`;
const FlexWrap = styled.div`
  display: flex; align-items: stretch;
`;

const Spinner = styled.div`
  display: ${({hide}) => hide ? 'none' : 'block'};
  font-size: 60px; opacity: 0.4;
`;

const Warning = styled.p`
  color: #be0000;
`;

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
    this.setState({ timeDiff: getTimeDiff((new Date()), this.props.dateReference, this.props.month, this.props.year) });
  }

  getUnitProps = () => {
    const { month, year } = this.props;
    const { timeDiff } = this.state;

    // (!month && k.indexOf('months') < 0) && (!year && k.indexOf('years') < 0)

    if (!timeDiff) return [];
    return Object.keys(timeDiff)
      .filter(k => 
        k !== 'tense'
        && (k.indexOf('months') > -1 ? month : true)
        && (k.indexOf('years') > -1 ? year : true)
      )
      .map(label => ({label: `date.${label}`, value: timeDiff[label]}));
  }

  render() {
    const { timeDiff } = this.state;
    const { dateReference } = this.props;
    
    const units = this.getUnitProps();

    return (
      <LangContext.Consumer>
        { lang => !dateReference ? (<Warning>{translate(lang, 'missing.dateReference')}</Warning>) : (<React.Fragment>

          <Spinner hide={timeDiff}>
            <i className="fas fa-spinner fa-spin"></i>
          </Spinner>

          <Title>
            { timeDiff && translate(lang, `date.${timeDiff.tense}`) }
          </Title>

          <FlexWrap>
            { units.map((props,i) => <TimeUnit key={i} lang={lang} {...props} />) }
          </FlexWrap>

        </React.Fragment>) }
      </LangContext.Consumer>
    );
  }
}

Timer.displayName = 'CountdownTimer';
Timer.propTypes = {
  dateReference: PropTypes.instanceOf(Date),
  month: PropTypes.bool,
  year: PropTypes.bool
}

export default Timer;