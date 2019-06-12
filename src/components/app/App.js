import React from 'react'

import './App.css';
import SettingsForm from'../settingsForm/SettingsForm'

class App extends React.Component {
  state = {

  }

  handleSubmit = () => {

  }

  handleChange = () => {

  }
  render () {
    return (
      <div className="app-container">
        <div className="userSettings-container">
          <h1 className="title">User Settings</h1>
          <SettingsForm
            inputs={this.state}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            />
        </div>
      </div>
    );
  }
}

export default App;
