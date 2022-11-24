import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <div className="App">
      
        <Navbar>
          <Container>
            <Navbar.Brand>
              <img className="logo" src={logo} />
            </Navbar.Brand>
          </Container>
        </Navbar>
     
    </div>
  );
}

export default App;
