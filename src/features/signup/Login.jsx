import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


export default function Login() {
    const [statement, setstatement] = useState("");
    const [visibility, setvisibility] = useState(false);
    const [username1, setusername1] = useState("");
    const [password1, setpassword1] = useState("");
    return (
        <div>
            <Container>
      <Card style={{boxShadow: "1px 1px 10px 1px #DDDD"}}>
  
        <Card.Body>
        <Row>
           <Col>

            <Form   onSubmit={(e) => {
                e.preventDefault();
            }}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>UserName </Form.Label>
                    <Form.Control name='username'  placeholder={"UserName"} value={username1} onChange={(e) => {
                        setusername1(e.currentTarget.value)}} />
                    <Form.Text className="text-muted">
                    
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" value={password1} onChange={(e) => {
                        setpassword1(e.currentTarget.value)}}/>
                </Form.Group>
                
                <div className="text-center">
                <Button  variant="primary" type="submit" onClick={()=> {localStorage.getItem('username')===username1 ? (
                    localStorage.getItem('password')===password1 ? (
                    setstatement("log in success") ):setstatement("Pasword and Username doesn't match")) :
                    setstatement("Login faild");setvisibility(true) ;}}>
                Log In
                </Button>
                </div>

                <div className="text-center">
                    {visibility ? <p value={statement} >{statement}</p> : null}
                </div>
            </Form>

            </Col>
        </Row>
          
        </Card.Body>
      </Card>

      
      </Container>                      
        </div>
    )
}
