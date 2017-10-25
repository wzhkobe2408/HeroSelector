import React, { Component } from 'react'
import { connect } from 'react-redux'

class Teams extends Component {
  render() {
    const { heros } = this.props;
    var strength = 0;
    var intelligence = 0;
    var speed = 0;
    for(var i = 0; i < heros.length; i++) {
      strength += heros[i].strength;
      intelligence += heros[i].intelligence;
      speed += heros[i].speed;
    }
    var total = strength + intelligence + speed;
    return (
      <div>
        <h2>Your Team</h2>
        <ul className="list-group">
          <li className="list-group-item hover"><h4>Strength : {strength}</h4></li>
          <li className="list-group-item hover"><h4>Intelligence : {intelligence}</h4></li>
          <li className="list-group-item hover"><h4>Speed : {speed}</h4></li>
          <li className="list-group-item hover"><h4>Total : {total}</h4></li>
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

export default connect(mapStateToProps)(Teams);
