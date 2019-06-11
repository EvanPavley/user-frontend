import React from 'react'

import './App.css';
import SettingsForm from'../settingsForm/SettingsForm'

class App extends React.Component {


  render () {
    return (
      <div className="App">
        <p>Hi</p>
        <SettingsForm />
      </div>
    );
  }
}

export default App;
