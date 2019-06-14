import React from 'react'
import './App.css';
import SettingsForm from '../settingsForm/SettingsForm'
import userIcon from '../../assets/images/userIcon.svg'
const BACKEND_URL = 'http://localhost:3001/userSettings'

class App extends React.Component {
  //initial state declaration
  state = {
    id: '',
    name: '',
    email: '',
    updates: true,
    location: 'New York, NY',
    bio: '',
    password: '',
    isClear: true,
    isValid: {
      name: true,
      email: true,
      bio: true,
      password: true,
    }
  }

  componentDidMount() {
    fetch(BACKEND_URL)
      .then(response => response.json())
      .then(currentSettings => {
        //checks to see if there are settings in the API
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
            isValid: {
              name: true,
              email: true,
              bio: true,
              password: true,
            }
          })
        :
        //if not the form is clear
        this.setState({
          isClear: true,
        })
      })
  }

  resetValidations = () => {
    this.setState(prevState => ({
      ...prevState,
      isValid: {
        name: true,
        email: true,
        bio: true,
        password: true,
      }
    }))
  }

  resetState = () => {
    this.setState({
      id: '',
      name: '',
      email: '',
      updates: true,
      location: 'New York, NY',
      bio: '',
      password: '',
      isClear: true,
      isValid: {
        name: true,
        email: true,
        bio: true,
        password: true,
      }
    })
  }

  findInvalid = (feilds) => {
    feilds.forEach(feild => {
      this.setState(prevState => ({
        ...prevState,
        isValid: {
          ...prevState.isValid,
          [feild]: false
        }
      }))
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
    event.preventDefault()
    this.resetValidations()
    this.state.isClear === true ?
    fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          updates: this.state.updates,
          location: this.state.location,
          bio: this.state.bio,
          password: this.state.password,
        }),
    })
      .then(response => response.json())
      .then(currentSettings => {
        currentSettings.errors !== undefined ?
        this.findInvalid(Object.keys(currentSettings.errors))
        :
        this.setState(prevState => ({
          ...prevState,
          id: currentSettings._id,
          isClear: false,
          isValid: {
            name: true,
            email: true,
            bio: true,
            password: true,
          }
        }))
      })
    :
    fetch(`${BACKEND_URL}/${this.state.id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          updates: this.state.updates,
          location: this.state.location,
          bio: this.state.bio,
          password: this.state.password,
        }),
    })
      .then(response => response.json())
      .then(currentSettings => {
        currentSettings.errors !== undefined ?
        this.findInvalid(Object.keys(currentSettings.errors))
        :
        this.resetValidations()
      })
  }

  handleClear = (event) => {
    this.state.isClear === false ?
    fetch(`${BACKEND_URL}/${this.state.id}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(currentSettings => {
        this.resetState()
      })
    :
    this.resetState()
  }


  render () {
    console.log(this.state)
    return (
      <div className="app-container">
        <div className="userSettings-container">
          <img className="user-icon" src={userIcon} alt="userIcon"/>
          <h1 className="title">User Settings</h1>
          <SettingsForm
            settings={this.state}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            handleClear={this.handleClear}
            />
        </div>
      </div>
    );
  }
}

export default App;
