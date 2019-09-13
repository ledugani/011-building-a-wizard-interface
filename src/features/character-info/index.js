import React from 'react';
import './styles.css';

export default function CharacterInfo(props) {
  return <div>
    <h2>Character Info</h2>
    <div className='character-info'>
      <div>
        <label htmlFor="character-name">Name</label>
        <input name="character-name" type="text"
          value={props.name}
          onChange={props.handleNameChange}
        />
      </div>

      <div>
        <label htmlFor="character-bio">Bio</label>
        <textarea name="character-bio" id="charBio" cols="30" rows="10"
          value={props.bio}
          onChange={props.handleBioChange}
        />
      </div>

      <div className="button">
        <button>Save</button>
      </div>
    </div>
  </div>
}