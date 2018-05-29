import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Countdown';
import LanguageSwitcher from './LanguageSwitcher';
import LangContext, { registerLang } from './util/i18n'

import { translations as availableLanguages } from './util/i18n/config';

registerLang(availableLanguages);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en'
    }
  }

  switchLang = (lang) => this.setState({ lang })

  render() {
    return (
      <LangContext.Provider value={this.state.lang}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Timer dateReference={new Date("September 22 2018 12:30")} />


        <LanguageSwitcher
          languages={Object.keys(availableLanguages)}
          value={this.state.lang}
          onChange={this.switchLang} />

      </LangContext.Provider>
    );
  }
}

export default App;
