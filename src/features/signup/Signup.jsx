import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import { Typeahead } from 'react-bootstrap-typeahead';
import axios from 'axios';
import 'react-bootstrap-typeahead/css/Typeahead.css';


export default function Signup() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [country, setcountry] = useState([]);

useEffect(() => {

    const fetchData = async () => {
        const result = await axios(
            'https://restcountries.eu/rest/v2/all',
        );
   
        setcountry(result.data);
       
      };
   
      fetchData();
    

    
}, [])    ;

    return (
        <div>
            <Form onSubmit={(e) => {
                e.preventDefault();
            }}>
            <Form.Group >
            <Form.Row>
                <Col>
                <Form.Label>First name </Form.Label>
                <Form.Control placeholder="First name" />
                </Col>
                <Col>
                <Form.Label>Last name </Form.Label>
                <Form.Control placeholder="Last name" />
                </Col>
            </Form.Row> 
                </Form.Group>    
            
                <Form.Group >
                <Form.Label>Company name </Form.Label>
                <Form.Control placeholder="Company name" />
                </Form.Group>
                <Form.Group >
            <Form.Row>
                <Col>
                <Form.Label>Phone number </Form.Label>
                <Form.Control placeholder="Phone number" />
                </Col>
                <Col>
                <Form.Label>Country </Form.Label>
                
                <Typeahead
                  
                   options={country}
                  
                    placeholder="Choose a country...">
                    
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

                                    
        </div>
    )
}
