import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hero from './Hero'

class Heros extends Component {
  render() {

    return (
      <div>
        <h2>Chosen Heros</h2>
        <ul className="list-group">
          {
            this.props.heros.length === 0 ?
            <li className="list-group-item" ><h4>You have not chosen any hero</h4></li> :
            this.props.heros.map((hero, index) => (
              <Hero
                key={index}
                character={hero}
              />
            ))
          }
          {
            this.props.heros.length === 3 ?
            <li className="list-group-item" style={{padding:"0"}}>
              <button className="btn btn-primary btn-lg btn-block">
                Save
              </button>
            </li> :
            <div></div>
          }

        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    heros:state.heros
  }
}

export default connect(mapStateToProps)(Heros);
