/*
App:
The main class component for the frontend of this user settings app
***
This component does the heavy lifting for this app. Because this app is not very complex, there only needed to be two components, all of the state is held in app and its manipulated via call back fucntions passed down to the settings form through props. All of the interaction with the server happens in this component.
*/

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

  //initial fetch on componentDidMount so that the app is already rendered when async actions start
  componentDidMount() {
    fetch(BACKEND_URL)
      .then(response => response.json())
      .then(currentSettings => {
        //checks to see if there are any settings in the API
        currentSettings[0] !== undefined ?
          //if there are, use the data to set state
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

  //to reset the nested isValid state
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

  //resets all state for when the form is cleared
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

  //finds the invalid feilds and sets them to false in the isValid state. informs the UI
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

  //controls the settings form
  handleChange = (event) => {
    const target = event.target;
    //if its a check box, sets the value to true or false
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //resets the validations on a submit so that the validity checker can be updated
    this.resetValidations()
    //checks if the form is clear
    this.state.isClear === true ?
    //if it is, send a post request to the server
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
        //checks if there are errors
        currentSettings.errors !== undefined ?
        //if so, it finds the invalid feilds
        this.findInvalid(Object.keys(currentSettings.errors))
        :
        //if no errors, set the id, its filled, and reset valid
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
    //if the form is not clear, send a put request to the database to update the feilds
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
        //checks if there are errors
        currentSettings.errors !== undefined ?
        //if so, it finds the invalid feilds
        this.findInvalid(Object.keys(currentSettings.errors))
        :
        //if no errors just reset valid
        this.resetValidations()
      })
  }

  handleClear = (event) => {
    //if the data is backed up to the database
    this.state.isClear === false ?
    //send a DELET request to the server
    fetch(`${BACKEND_URL}/${this.state.id}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(currentSettings => {
        this.resetState()
      })
    :
    //if theres no data backed up, just clear the state
    this.resetState()
  }


  render () {
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
