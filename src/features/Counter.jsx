import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            
    <Container>
        <Card className="text-center" style={{boxShadow: "1px 1px 10px 1px #DDDD"}}>
  
          <Card.Body>
          <Row>  
            <Col>
            <div style={{fontSize:'50px'}} >{count}</div>
            
            <Button variant="primary" onClick= {()=> setCount(count+1)}>Counter</Button>
            </Col>
          </Row>
            
          </Card.Body>
        </Card>
        
        </Container>       
            
        </div>
    )
}
