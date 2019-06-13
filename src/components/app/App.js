import React from 'react'

import './App.css';
import SettingsForm from'../settingsForm/SettingsForm'
const BACKEND_URL = 'http://localhost:3001/userSettings'

class App extends React.Component {
  state = {
    id: '',
    name: '',
    email: '',
    updates: true,
    location: '',
    bio: '',
    password: '',
    isClear: true,
  }

  componentDidMount() {
    fetch(BACKEND_URL)
      .then(r => r.json())
      .then(currentSettings => {
        currentSettings[0] !== undefined ?
          this.setState({
            id: currentSettings[0]._id,
            name: currentSettings[0].name,
            email: currentSettings[0].email,
            updates: currentSettings[0].updates,
            location: currentSettings[0].location,
            bio: currentSettings[0].bio,
            password: currentSettings[0].password,
            isClear: false,
          })
        :
          this.setState({
            isClear: true,
          })
      })
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }
  
  render () {
    console.log(this.state);
    return (
      <div className="app-container">
        <div className="userSettings-container">
          <h1 className="title">User Settings</h1>
          <SettingsForm
            settings={this.state}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            />
        </div>
      </div>
    );
  }
}

export default App;
