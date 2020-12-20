import React from 'react'

export default function Signup() {
    
    return (
        <div>
            <div style={{paddingLeft:'40%'}}>
            <input  id='username' placeholder={"UserName"}></input><br></br>
            <input id='password' placeholder={"Password"}></input><br></br>
            <div style={{paddingLeft:'8%'}}>
            <button  onClick={()=> {localStorage.setItem('username',document.getElementById("username").value);
                                    localStorage.setItem('password',document.getElementById("password").value);
                                    document.getElementById("username").value='';
                                    document.getElementById("password").value='';}}>Sign Up</button>
            </div>
            </div>                        
        </div>
    )
}
