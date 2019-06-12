import React from 'react'

import './App.css';
import SettingsForm from'../settingsForm/SettingsForm'

class App extends React.Component {
  state = {
    name: '',
    email: '',
    updates: true,
    location: '',
    bio: '',
    password: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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
