import React from 'react'

import './SettingsForm.css';

const SettingsForm = (props) => {
  return (
    <div className="settingsForm-container">
      <form className="settings">
        <label>
          <h3>Name</h3>
          <input type="text"/>
        </label>
        <label>
          <h3>Email</h3>
          <input type="text"/>
          <input type="checkbox"/>
          <p className="checkbox-text"> check to receive email updates</p>
        </label>
        <label>
          <h3>Location</h3>
          <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <label>
          <h3>Bio</h3>
          <textarea />
        </label>
        <label>
          <h3>Password</h3>
          <input type="Password"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SettingsForm
