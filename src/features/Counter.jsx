import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

export default function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <div style={{fontSize:'50px'}} >{count}</div>
            
            <Button variant="primary" onClick= {()=> setCount(count+1)}>Counter</Button>
            
            
        </div>
    )
}
