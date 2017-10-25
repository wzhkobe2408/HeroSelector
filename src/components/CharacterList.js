import React, { Component } from 'react'
import { connect } from 'react-redux'
import Character from './Character'

class CharacterList extends Component {
  render() {
    const characters = this.props.characters.map((character, index) => (
      <Character
        key={index}
        character={character}
      />
    ));
    return (
      <div className="col-md-12" style={{padding:"0"}}>
        <h2>Character List</h2>
        <div className='well clear'>
          { characters }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    characters:state.characters
  }
}

export default connect(mapStateToProps)(CharacterList);
