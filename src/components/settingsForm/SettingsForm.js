import React from 'react'

import './SettingsForm.css';

const SettingsForm = (props) => {
  return (
    <div className="settingsForm-container">
      <form className="settings">
        <label>
          Name:
          <input type="text"/>
        </label>
        <label>
          Essay:
          <textarea />
        </label>
        <label>
          Pick your favorite flavor:
          <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SettingsForm
