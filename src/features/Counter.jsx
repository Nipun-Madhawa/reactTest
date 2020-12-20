import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <div style={{paddingLeft:'45%',fontSize:'40px' }}>{count}</div>
            <div  style={{marginLeft:'40%'}}>
                <button style={{width:'160px',height:'40px'}} onClick= {()=> setCount(count+1)}>Counter</button>
            </div>
            
        </div>
    )
}
