import React, { useEffect, useState } from 'react'

export default function Signup() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")


    return (
        <div>
            <div style={{paddingLeft:'40%'}}>
            <input  id='username' placeholder={"UserName"} value={username} onChange={(e) => {
                setusername(e.target.value)
            }}></input><br></br>
            <input id='password' placeholder={"Password"} value={password} onChange={(e) => {
                setpassword(e.target.value)
            }}></input><br></br>
            <div style={{paddingLeft:'8%'}}>
            <button  onClick={()=> {localStorage.setItem('username',username);
                                    localStorage.setItem('password',password);
                                    setusername('');
                                    setpassword('');}}>Sign Up</button>
            </div>
            </div>                        
        </div>
    )
}
