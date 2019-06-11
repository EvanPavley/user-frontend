import React from 'react'

import './SettingsForm.css';

const SettingsForm = (props) => {
  return (
    <div className="settingsForm-container">
      <form className="settings">
        <label>
          <h3 className="settingsForm-label">Name</h3>
          <input className="settingsForm-input" type="text"/>
        </label>
        <label>
          <h3 className="settingsForm-label">Email</h3>
          <input className="settingsForm-input email" type="text"/>
          <div className="settingsForm-checkbox-container">
            <input className="checkbox" type="checkbox"/>
            <p className="checkbox-text"> check to receive email updates</p>
          </div>
        </label>
        <label>
          <h3 className="settingsForm-label">Location</h3>
          <select className="settingsForm-input select" >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <label>
          <h3 className="settingsForm-label">Bio</h3>
          <textarea className="settingsForm-input textarea"/>
        </label>
        <label>
          <h3 className="settingsForm-label">Password</h3>
          <input className="settingsForm-input password" type="Password"/>
        </label>
        <input className="settingsForm-input submit" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SettingsForm
