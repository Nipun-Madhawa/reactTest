import React, { useState } from 'react'

export default function Login() {
    const [statement, setstatement] = useState("");
    const [visibility, setvisibility] = useState(false);
    return (
        <div>
            <div style={{paddingLeft:'40%'}}>
                <input  id='username1' placeholder={"UserName"}></input><br></br>
                <input id='password1' placeholder={"Password"}></input><br></br>

                <div style={{paddingLeft:'8%'}}>
                    <button  onClick={()=> {localStorage.getItem('username')===document.getElementById("username1").value ? (
                    localStorage.getItem('password')===document.getElementById("password1").value ? (
                    setstatement("log in success") ):setstatement("Pasword and Username doesn't match")) :
                    setstatement("Login faild");setvisibility(true) ;document.getElementById("username1").value=''; document.getElementById("password1").value=''}}>Log In</button>
                </div>
                <div>
                    {visibility ? <p value={statement} >{statement}</p> : null}
                </div>    
            </div>                        
        </div>
    )
}
