import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Login() {
    const [statement, setstatement] = useState("");
    const [visibility, setvisibility] = useState(false);
    const [username1, setusername1] = useState("");
    const [password1, setpassword1] = useState("");
    return (
        <div>
            <Form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>UserName </Form.Label>
                    <Form.Control type="email" placeholder={"UserName"} value={username1} onChange={(e) => {
                        setusername1(e.currentTarget.value)}} />
                    <Form.Text className="text-muted">
                    
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password1} onChange={(e) => {
                        setpassword1(e.currentTarget.value)}}/>
                </Form.Group>
                
                <Button variant="primary" type="submit" onClick={()=> {localStorage.getItem('username')===username1 ? (
                    localStorage.getItem('password')===password1 ? (
                    setstatement("log in success") ):setstatement("Pasword and Username doesn't match")) :
                    setstatement("Login faild");setvisibility(true) ;setusername1(''); setpassword1('')}}>
                Log In
                </Button>

                <div>
                    {visibility ? <p value={statement} >{statement}</p> : null}
                </div>
            </Form>

                               
        </div>
    )
}
