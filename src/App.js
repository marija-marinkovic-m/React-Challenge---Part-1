import React, { Component } from 'react';
import Timer from './components/Countdown';
import LanguageSwitcher from './components/LanguageSwitcher';
import LangContext, { registerLang, translate } from './util/i18n';
import DateTimePicker from 'react-datetime-picker';

import { translations as availableLanguages } from './util/i18n/config';
import styled from 'styled-components';
import { Button } from './components/Button';
import { SrOnly } from './components/SrOnly';
import CheckboxInput from './components/CheckboxInput';

registerLang(availableLanguages);

const Wrapper = styled.section`
  width: 768px; max-width: 100%;
  margin: 0 auto; padding: 40px 0;
`;

const Settings = styled.aside`
  position: fixed; right: 0; left: auto; top: 0; bottom: 0;
  width: ${({isOpen}) => isOpen ? '300px' : '10px'};
  background: #009688;
  transition: width 400ms ease;
  & > button {
    position: absolute; left: -42px; top: 0;
    background: #009688; color: #FFFFFF;
  }
  & > div {
    padding: 10px 25px;
    opacity: ${({isOpen}) => isOpen ? 1 : 0};
    transition: opacity 200ms ease;
  }
  .react-datetime-picker {
    z-index: 99;
    padding: 10px;
    background: rgba(255,255,255,0.6);
    .react-datetime-picker__calendar, .react-datetime-picker__clock {
      left: auto; right: 0;
    }
  }
  h4 {
    margin: 50px 0 10px;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
      datetime: new Date('September 22 2018 12:30'),
      settingsOpen: true,
      displayYear: false,
      displayMonth: false
    }
  }

  switchLang = (lang) => this.setState({ lang })

  handleDateTimeChange = (datetime) => this.setState({ datetime })

  toggleSettingsDrawer = () => this.setState({settingsOpen: !this.state.settingsOpen})

  toggleDisplayField = (fieldName) => this.setState({[fieldName]: !this.state[fieldName]})

  render() {
    const { lang, datetime, settingsOpen, displayMonth, displayYear } = this.state;
    return (
      <LangContext.Provider value={lang}>

        <Wrapper>
          <Timer
            dateReference={datetime}
            year={displayYear}
            month={displayMonth}
          />
        </Wrapper>

        <Settings isOpen={settingsOpen}>

          <Button onClick={this.toggleSettingsDrawer}>
            <i className="fas fa-cog"></i>
            <SrOnly>{translate(lang, 'Toggle Settings')}</SrOnly>
          </Button>

          <div>

            <h4>{translate(lang, 'switch.lang')}</h4>
            <LanguageSwitcher
              languages={Object.keys(availableLanguages)}
              value={lang}
              onChange={this.switchLang}
            />

            <h4>{translate(lang, 'switch.datetime')}</h4>
            <DateTimePicker
              value={datetime}
              onChange={this.handleDateTimeChange}
            />

            <h4>{translate(lang, 'display')}</h4>
            <CheckboxInput
              label={translate(lang, 'display.month')}
              checked={displayMonth}
              disabled={displayYear}
              onChange={this.toggleDisplayField.bind(null,'displayMonth')}
            />
            { displayMonth && <CheckboxInput
              label={translate(lang, 'display.year')}
              checked={displayYear}
              onChange={this.toggleDisplayField.bind(null,'displayYear')}
            /> }
          </div>

        </Settings>

      </LangContext.Provider>
    );
  }
}

export default App;
