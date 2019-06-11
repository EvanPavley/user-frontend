import React from 'react'

import './App.css';
import SettingsForm from'../settingsForm/SettingsForm'

class App extends React.Component {


  render () {
    return (
      <div className="app-container">
        <div className="navbar"></div>
        <div className="userSettings-container">
          <h1 className="title">User Settings</h1>
          <SettingsForm />
        </div>
      </div>
    );
  }
}

export default App;
