import React from 'react';
import './SettingsForm.css';

const SettingsForm = (props) => {

  return (
    <div className="settingsForm-container">
      <form className="settings" onSubmit={(e) => props.handleSubmit(e)}>
        <label>
          <h3 className="settingsForm-label">Name</h3>
          <input
            className="settingsForm-input"
            type="text"
            name="name"
            onChange={(e) => props.handleChange(e)}
            value={props.inputs.name}
            />
        </label>
        <label>
          <h3 className="settingsForm-label">Email</h3>
          <input
            className="settingsForm-input email"
            type="text"
            name="email"
            onChange={(e) => props.handleChange(e)}
            value={props.inputs.email}
            />
          <div className="settingsForm-checkbox-container">
            <input
              className="checkbox"
              type="checkbox"
              name="updates"
              onChange={(e) => props.handleChange(e)}
              checked={props.inputs.updates}
              />
            <p className="checkbox-text"> check to receive email updates</p>
          </div>
        </label>
        <label>
          <h3 className="settingsForm-label">Location</h3>
          <select
            className="settingsForm-input select"
            name="location"
            onChange={(e) => props.handleChange(e)}
            value={props.inputs.location}
            >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <label>
          <h3 className="settingsForm-label">Bio</h3>
          <textarea
            className="settingsForm-input textarea"
            name="bio"
            onChange={(e) => props.handleChange(e)}
            value={props.inputs.bio}
            />
        </label>
        <label>
          <h3 className="settingsForm-label">Password</h3>
          <input
            className="settingsForm-input password"
            type="Password"
            name="password"
            onChange={(e) => props.handleChange(e)}
            value={props.inputs.password}
            />
        </label>
        <input className="settingsForm-input submit" type="submit" value="Update" />
      </form>
    </div>
  )
}

export default SettingsForm
