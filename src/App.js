import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Home from './routes/home/Home';

import './App.scss';

/*
todo:
- setja upp react-helmet = Setur upp réttan titil
- setja upp react-router = Setja upp síður 
- sækja routes
*/

// hafa browser rowder utan um allt, til að gera haft nokkrar síður

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
