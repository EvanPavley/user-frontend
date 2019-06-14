import React from 'react';
import './SettingsForm.css';

const SettingsForm = (props) => {

  return (
    <div className="settingsForm-container">
      <form className="settings" onSubmit={(e) => props.handleSubmit(e)}>
        <label>
          <h3 className={props.settings.isValid.name === true ? ("settingsForm-label"):("settingsForm-label invalid-label")} >Name</h3>
          <input
            className={props.settings.isValid.name === true ? ("settingsForm-input"):("settingsForm-input invalid-input")}
            type="text"
            name="name"
            onChange={(e) => props.handleChange(e)}
            value={props.settings.name}
            />
        </label>
        <label>
          <h3 className={props.settings.isValid.email === true ? ("settingsForm-label"):("settingsForm-label invalid-label")}>Email</h3>
          <input
            className={props.settings.isValid.email === true ? ("settingsForm-input email"):("settingsForm-input email invalid-input")}
            type="text"
            name="email"
            onChange={(e) => props.handleChange(e)}
            value={props.settings.email}
            />
          <div className="settingsForm-checkbox-container">
            <input
              className="checkbox"
              type="checkbox"
              name="updates"
              onChange={(e) => props.handleChange(e)}
              checked={props.settings.updates}
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
            value={props.settings.location}
            >
            <option value="New York, NY">New York, NY</option>
            <option value="Chicago, IL">Chicago, IL</option>
            <option value="Seattle, WA">Seattle, WA</option>
            <option value="Los Angeles, CA">Los Angeles, CA</option>
          </select>
        </label>
        <label>
          <h3 className={props.settings.isValid.bio === true ? ("settingsForm-label"):("settingsForm-label invalid-label")}>Bio</h3>
          <textarea
            className={props.settings.isValid.bio === true ? ("settingsForm-input textarea"):("settingsForm-input textarea invalid-input")}
            name="bio"
            onChange={(e) => props.handleChange(e)}
            value={props.settings.bio}
            />
        </label>
        <label>
          <h3 className={props.settings.isValid.password === true ? ("settingsForm-label"):("settingsForm-label invalid-label")}>Password</h3>
          <input
            className={props.settings.isValid.password === true ? ("settingsForm-input password"):("settingsForm-input password invalid-input")}
            type="Password"
            name="password"
            onChange={(e) => props.handleChange(e)}
            value={props.settings.password}
            />
        </label>
        <input
          className="settingsForm-input submit clear"
          type="button"
          value="Clear"
          onClick={props.handleClear} />
        <input
          className="settingsForm-input submit"
          type="submit"
          value={props.settings.isClear === true ? ("Submit"):("Update")} />
      </form>
    </div>
  )
}

export default SettingsForm
