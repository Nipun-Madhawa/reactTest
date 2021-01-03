import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useMediaQuery } from 'react-responsive';

export default function ForgotPassword() {
    const [email, setemail] = useState("")

    const isMobile = useMediaQuery({
        maxWidth: 768
      })

      const isDefault = useMediaQuery({
        minWidth: 769
      })  

    return (
        <div >
            <Container style={{alignContent:"center"}}>
                {isMobile &&
                <Card style={{boxShadow: "1px 1px 10px 1px #DDDD"}}>
            
                <Card.Body>
                <Row>
                    <Col>

                    <Form   onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type='email' name='email'  placeholder={"Account Email"} value={email} onChange={(e) => {
                                setemail(e.currentTarget.value)}} required/>
                            
                        </Form.Group>
                        <div className="text-center">
                            <Button  variant="primary" type="submit" >
                             Get login Detail
                            </Button>
                        </div>
                        </Form>

                    </Col>
                </Row>
            
                    </Card.Body>
        </Card>
                }
                {isDefault &&
                <Card style={{boxShadow: "1px 1px 10px 1px #DDDD",width: '550px',margin:'auto'}}>
            
                    <Card.Body>
                    <Row>
                        <Col>

                        <Form   onSubmit={(e) => {
                            e.preventDefault();
                        }}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email </Form.Label>
                                <Form.Control type='email' name='email'  placeholder={"Account Email"} value={email} onChange={(e) => {
                                    setemail(e.currentTarget.value)}} required/>
                                
                            </Form.Group>
                            <div className="text-center">
                                <Button  variant="primary" type="submit" >
                                 Get login Detail
                                </Button>
                            </div>
                    </Form>

                </Col>
             </Row>
          
                </Card.Body>
            </Card>}
            </Container> 
        </div>
    )
}
