import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCharacterById } from '../actions'

class Character extends Component {
  render() {
    const { character } = this.props;
    const { strength, intelligence, speed } = this.props.character;
    return (
      <div className="hover col-md-3" style={{padding:"0px 30px"}}>
        <span className="heroName">{character.name}</span>

          <div className="content">
            <div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width:(strength*10).toString()+"%"}} aria-valuemin="0" aria-valuemax="10">Strength:{strength}</div>
              </div>
            </div>

            <div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width:(intelligence*10).toString()+"%"}} aria-valuemin="0" aria-valuemax="100">Intelligence:{intelligence}</div>
              </div>
            </div>

            <div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width:(speed*10).toString()+"%"}} aria-valuemin="0" aria-valuemax="100">Speed:{speed}</div>
              </div>
            </div>
          </div>
        <span
          className="icon"
          onClick = {() => this.props.addCharacterById(character.id)}
        >
        	&#x2b;
        </span>
      </div>
    )
  }
}

export default connect(null,{ addCharacterById })(Character);
