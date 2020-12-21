import logo from './logo.svg';
import './App.css';
import Counter from './features/Counter';
import Signup from './features/signup/Signup';
import Login from './features/signup/Login';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function App() {
  console.log(localStorage.getItem('username'));
  console.log(localStorage.getItem('password'));
  return (
    <div >
      <br></br>
      
      <Container>
        
        <Card className="text-center" style={{boxShadow: "1px 1px 10px 1px #DDDD"}}>
  
          <Card.Body>
          <Row>  
            <Col><Counter></Counter></Col>
          </Row>
            
          </Card.Body>
        </Card>
        
        </Container>
          
        <br></br>

      <Container>
      <Card style={{boxShadow: "1px 1px 10px 1px #DDDD"}}>
  
        <Card.Body>
        
        <Row>
          <Col><Signup></Signup></Col>
        </Row>
          
        </Card.Body>
      </Card>
      </Container>

      <br></br>


      <Container>
      <Card style={{boxShadow: "1px 1px 10px 1px #DDDD"}}>
  
        <Card.Body>
        <Row>
           <Col><Login></Login></Col>
        </Row>
          
        </Card.Body>
      </Card>

      
      </Container>
      <br></br>

    </div>
  );
}

export default App;
