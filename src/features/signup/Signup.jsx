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
import { useMediaQuery } from 'react-responsive'



export default function Signup() {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [companyname, setcompanyname] = useState("");
    const [phone, setphone] = useState("");
    const [country, setcountry] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [countries, setcountries] = useState([]);
    const [passwordval, setpasswordval] = useState(false)
    
    const isDefault = useMediaQuery({
        minWidth: 768
      })

      const isMobile = useMediaQuery({
        maxWidth: 768
      })  

      

useEffect(() => {

    const fetchData = async () => {
        const result = await axios(
            'https://restcountries.eu/rest/v2/all?fields=name',
        );
   
        setcountries(result.data);
       
      };
   
      fetchData();
    

    
}, [])    ;

useEffect(() => {
    if(password.length>7){setpasswordval(true);}
    else{setpasswordval(false);}
}, [password])



    return (
        <div>
            <Container>
      <Card className="signup" style={{boxShadow: "1px 1px 10px 1px #DDDD"}}>
  
        <Card.Body>
        
        <Row>
          <Col>

            <Form   onSubmit={(e) => {
                e.preventDefault();
            }}>
            <Form.Group >
            {isDefault && 
            <Form.Row>
                <Col>
                <Form.Label>First name </Form.Label>
                <Form.Control  name='firstname' placeholder="First name" onChange={(e) => {
                    setfirstname(e.currentTarget.value)
                }} required/>
                </Col>
                <Col>
                <Form.Label>Last name </Form.Label>
                <Form.Control name='lastname' placeholder="Last name" onChange={(e) => {
                    setlastname(e.currentTarget.value)
                }} required/>
                </Col>
            </Form.Row> 
            }
            
            {isMobile && 
            <>
            <Form.Group >
                <Form.Label>First name </Form.Label>
                <Form.Control  name='firstname' placeholder="First name" onChange={(e) => {
                    setfirstname(e.currentTarget.value)
                }} required/>
            </Form.Group> 
            <Form.Group >   
                
                <Form.Label>Last name </Form.Label>
                <Form.Control name='lastname' placeholder="Last name" onChange={(e) => {
                    setlastname(e.currentTarget.value)
                }} required/>
                </Form.Group>
                </>
            }
            
                </Form.Group>    
            
                <Form.Group >
                <Form.Label>Company name </Form.Label>
                <Form.Control  name='companyname' placeholder="Company name" onChange={(e) => {
                    setcompanyname(e.currentTarget.value)
                }} required/>
                </Form.Group>
            <Form.Group >
            {isDefault && 
            <Form.Row>
                <Col>
                <Form.Label>Phone number </Form.Label>
                <Form.Control name='phone' placeholder="Phone number" onChange={(e) => {
                    setphone(e.currentTarget.value)
                }} required/>
                </Col>
                <Col>
                <Form.Label>Country </Form.Label>
                
                <Typeahead name='country'
                   labelKey={"name"}
                   options={countries}
                   onChange={setcountry}
                    selected={country}
                    placeholder="Choose your country..." required>
                    
                </Typeahead>

                 
                </Col>
            </Form.Row> 
            }
            {isMobile && <>
                <Form.Group>
                <Form.Label>Phone number </Form.Label>
                <Form.Control name='phone' placeholder="Phone number" onChange={(e) => {
                    setphone(e.currentTarget.value)
                }} required/>
                </Form.Group> 
                <Form.Group>
                <Form.Label>Country </Form.Label>
                
                <Typeahead name='country'
                   labelKey={"name"}
                   options={countries}
                   onChange={setcountry}
                    selected={country}
                    placeholder="Choose your country..." required>
                    
                </Typeahead>
                </Form.Group>
            </>}
            </Form.Group>
                
            

            <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type='email' name='email'  placeholder={"Email"} value={email} onChange={(e) => {
                        setemail(e.currentTarget.value);}}  required/>
                        
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control id="inputPassword6" name='password' type="password" placeholder="Password" value={password} onChange={(e) => {
                        setpassword(e.currentTarget.value);}} required/>
                        {!passwordval ?<Form.Text id="passwordHelpBlock" muted>
                            Must be 8-20 characters long.
                            </Form.Text>:null}
                        
                </Form.Group>
  
                <div className="text-center">
                <Button  variant="primary" type="submit" onClick={()=> {localStorage.setItem('username',email);
                                                    localStorage.setItem('password',password);
                                                    }} disabled={!passwordval}>
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
