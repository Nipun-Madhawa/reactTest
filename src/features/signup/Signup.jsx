import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Typeahead } from 'react-bootstrap-typeahead';
import axios from 'axios';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



export default function Signup() {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [companyname, setcompanyname] = useState("");
    const [phone, setphone] = useState("");
    const [country, setcountry] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [countries, setcountries] = useState([]);


useEffect(() => {

    const fetchData = async () => {
        const result = await axios(
            'https://restcountries.eu/rest/v2/all?fields=name',
        );
   
        setcountries(result.data);
       
      };
   
      fetchData();
    

    
}, [])    ;

    return (
        <div>
            <Container>
      <Card style={{boxShadow: "1px 1px 10px 1px #DDDD"}}>
  
        <Card.Body>
        
        <Row>
          <Col>

            <Form onSubmit={(e) => {
                e.preventDefault();
            }}>
            <Form.Group >
            <Form.Row>
                <Col>
                <Form.Label>First name </Form.Label>
                <Form.Control placeholder="First name" onChange={(e) => {
                    setfirstname(e.currentTarget.value)
                }} />
                </Col>
                <Col>
                <Form.Label>Last name </Form.Label>
                <Form.Control placeholder="Last name" onChange={(e) => {
                    setlastname(e.currentTarget.value)
                }} />
                </Col>
            </Form.Row> 
                </Form.Group>    
            
                <Form.Group >
                <Form.Label>Company name </Form.Label>
                <Form.Control placeholder="Company name" onChange={(e) => {
                    setcompanyname(e.currentTarget.value)
                }}/>
                </Form.Group>
                <Form.Group >
            <Form.Row>
                <Col>
                <Form.Label>Phone number </Form.Label>
                <Form.Control placeholder="Phone number" onChange={(e) => {
                    setphone(e.currentTarget.value)
                }}/>
                </Col>
                <Col>
                <Form.Label>Country </Form.Label>
                
                <Typeahead
                   labelKey={"name"}
                   options={countries}
                   onChange={setcountry}
                    selected={country}
                    placeholder="Choose your country...">
                    
                </Typeahead>

                 
                </Col>
            </Form.Row> 
                </Form.Group>
                
            

            <Form.Group controlId="formBasicEmail">
                    <Form.Label>UserName </Form.Label>
                    <Form.Control type="email" placeholder={"UserName"} value={username} onChange={(e) => {
                        setusername(e.currentTarget.value)}} />
                    <Form.Text className="text-muted">
                    
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => {
                        setpassword(e.currentTarget.value)}}/>
                </Form.Group>
  
                <div className="text-center">
                <Button  variant="primary" type="submit" onClick={()=> {localStorage.setItem('username',username);
                                                    localStorage.setItem('password',password);
                                                    setusername('');
                                                    setpassword('');}}>
                    Sign Up
                </Button>
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
