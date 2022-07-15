import './App.css';
import { Navbar, Nav, Container} from 'react-bootstrap';
import Home from './Home';
import About from './About';
import Users from './Users';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand><Link to="/">PWA</Link> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link> <Link to="/">Home</Link> </Nav.Link>
            <Nav.Link><Link to="/about">About</Link> </Nav.Link>
            <Nav.Link><Link to="/users">Users</Link> </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/users" element={<Users/>} />
    </Routes>
      </Router>
  );
}

export default App;
