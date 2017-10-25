import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Row} from 'react-bootstrap'

class TeamsList extends Component {
  render() {
    return (
      <div className="container">
        <Link to="/" className="link">Home Page</Link>
        <h1>My TeamsList</h1>
        <Row>
        </Row>
      </div>
    )
  }
}


export default TeamsList;
