import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './PlayersList';
import { Container, Navbar, Nav, } from "react-bootstrap";
import './App.css';

function App() {
  return (
    <div className="App">
       <Navbar>
        <Container>
          <Navbar.Brand href="#home">Soccer</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Product</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br/>
      <h1 style={{marginLeft: '20px'}}>Football Players</h1>
      <br/>
      <PlayersList />
    </div>
  );
}

export default App;