import React from 'react'

import './App.css';
import SettingsForm from'../settingsForm/SettingsForm'

class App extends React.Component {


  render () {
    return (
      <div className="app-container">
        <h1 className="title">User Settings</h1>
        <SettingsForm />
      </div>
    );
  }
}

export default App;
