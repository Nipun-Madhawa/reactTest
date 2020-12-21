import React, { useState } from 'react'

export default function Login() {
    const [statement, setstatement] = useState("");
    const [visibility, setvisibility] = useState(false);
    const [username1, setusername1] = useState("");
    const [password1, setpassword1] = useState("");
    return (
        <div>
            <div style={{paddingLeft:'40%'}}>
                <input  id='username1' placeholder={"UserName"} value={username1} onChange={(e) => {
                    setusername1(e.target.value)
                }}></input><br></br>
                <input id='password1' placeholder={"Password"} value={password1} onChange={(e) => {
                    setpassword1(e.target.value)
                }}></input><br></br>

                <div style={{paddingLeft:'8%'}}>
                    <button  onClick={()=> {localStorage.getItem('username')===username1 ? (
                    localStorage.getItem('password')===password1 ? (
                    setstatement("log in success") ):setstatement("Pasword and Username doesn't match")) :
                    setstatement("Login faild");setvisibility(true) ;setusername1(''); setpassword1('')}}>Log In</button>
                </div>
                <div>
                    {visibility ? <p value={statement} >{statement}</p> : null}
                </div>    
            </div>                        
        </div>
    )
}
