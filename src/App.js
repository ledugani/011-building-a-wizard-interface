import React from 'react';
import ClassSelect from './features/class-select';
import CharacterInfo from './features/character-info';
import RollStats from './features/roll-stats';

import initialState from './initial-state';

import './App.css';

class App extends React.Component {
  state = initialState

  renderCurrentStep = () => {
    switch(this.state.currentStep) {
      case 'ClassSelect':
        return <ClassSelect
          handleClassSelection={this.handleClassSelection}
        />

      case 'CharacterInfo':
        return <CharacterInfo />

      case 'RollStats':
        return <RollStats />

      default:
        throw("Not a valid step!")
    }
  }

  handleClassSelection = (klass) => {
    const party = {...this.state.party};
    const player = this.state.party[this.state.currentSlot];
    player.class = klass;
    this.setState({ party, currentStep: 'CharacterInfo' })
  }

  render() {
    return (
      <div className="page-container">
        <h1>It's dangerous to go alone! Select your party:</h1>
        <div className="flex">
          <div className="modal-window">
            { this.renderCurrentStep() }
          </div>
          <div className="character-slots">
            {
              [0,1,2,3].map(no => {
                return <div className={`character-slot ${this.state.currentSlot === no ? 'highlighted' : ''}`}>
                  <span>{ no+1 }</span>
                </div>
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App;