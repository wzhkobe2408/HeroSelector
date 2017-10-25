import React, { Component } from 'react'
import CharacterList from './CharacterList'
import Heros from './Heros'
import Teams from './Teams'
import { Row, Col } from 'react-bootstrap'
import '../styles/index.css'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Link to="/teams" className="link" >My TeamsList</Link>
        <h1>SuperSquard</h1>
        <Row>
          <Col md={12}>
            <CharacterList />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Heros />
          </Col>
          <Col md={6}>
            <Teams />
          </Col>
        </Row>
      </div>
    )
  }
}

export default App;
