import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Signup() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")


    return (
        <div>
            <Form onSubmit={(e) => {
                e.preventDefault();
            }}>
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
  
                <Button variant="primary" type="submit" onClick={()=> {localStorage.setItem('username',username);
                                                    localStorage.setItem('password',password);
                                                    setusername('');
                                                    setpassword('');}}>
                    Sign Up
                </Button>
            </Form>

                                    
        </div>
    )
}
