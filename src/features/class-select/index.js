import React from 'react';
import './styles.css';

export default function ClassSelect(props) {
  return <div>
    <h2>Select your character's class</h2>
    <div className="class-selection">
      {
        ['archer', 'warrior', 'bard', 'wizard', 'thief', 'cleric'].map(klass => {
          return <div
            className="class-slot"
            onClick={() => {props.handleClassSelection(klass)}}
          >
            <div>{ klass }</div>
            <img src={`/classes/${klass}.jpg`} width={130} height={130} alt={klass} />
          </div>
        })
      }
    </div>
  </div>
}