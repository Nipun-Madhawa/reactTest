import logo from './logo.svg';
import './App.css';
import Counter from './features/Counter';
import Signup from './features/signup/Signup';
import Login from './features/signup/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import ForgotPassword from './features/signup/ForgotPassword';


function App() {
  console.log(localStorage.getItem('username'));
  console.log(localStorage.getItem('password'));
  return (
    <div>
    <Router>
      <div>
      <Container>
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">LogIn</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/signup">SignUp</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/counter" >
          Counter
          </Nav.Link>
        </Nav.Item>
        
      </Nav>
      </Container>
      <br></br>
        
        <Switch>
        <Route path="/forgotPassword">
                            <ForgotPassword />
                        </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
    
  );
}

export default App;
