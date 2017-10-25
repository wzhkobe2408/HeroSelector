import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeCharacterById } from '../actions'

class Hero extends Component {
  render() {
    const { character } = this.props;
    return (
      <li className="list-group-item hover">
        <h4>{character.name}</h4>
        <span className="delete" onClick = {() => this.props.removeCharacterById(character.id)}>&#x2212;</span>
      </li>
    )
  }
}

export default connect(null,{ removeCharacterById })(Hero);
