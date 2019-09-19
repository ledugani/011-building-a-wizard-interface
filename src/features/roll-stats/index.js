import React from 'react';

export default function RollStats(props) {
  return <div>
    <h2>Roll your character's attributes</h2>
    <div className="flex roll-attributes">
      <div className="attributes">
        <ul>
          <li>STR: { props.str }</li>
          <li>INT: { props.int }</li>
          <li>WIS: { props.wis }</li>
          <li>DEX: { props.dex }</li>
          <li>CON: { props.con }</li>
          <li>CHA: { props.cha }</li>
        </ul>
      </div>
      <div className='actions'>
        <button
          onClick={props.handleRoll}
        >Roll</button>
        <button
          onClick={props.handleStatsSave}
        >Save</button>
      </div>
    </div>
  </div>
}