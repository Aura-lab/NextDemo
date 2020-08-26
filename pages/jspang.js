import React, { useState } from 'react';

function Jspang(){

    const [color,setColor] = useState('blue')

    const changeColor=()=>{
        setColor(color=='blue'?'red':'blue')}
    return (
        <>
        <div>Style JSX PAGE</div>
        <div>
            <button onClick={changeColor}>change color</button>
        </div>

    <style jsx>
        {`
        div{color:${color}}
        `}
    </style>
        </>
    )
}

export default Jspang