import React, { useRef } from 'react'

export default function UseRefForFunctionComponents() {
    let inputRef = useRef(null);
    function handleInput()
    {
      console.log(inputRef)
      inputRef.current.value="100000";
      inputRef.current.focus();
      inputRef.current.style.color='red';
    //   inputRef.current.style.display='none';
      inputRef.current.style.borderColor='red' 
   }
    return (
        <div>
            <h1>UseRefForFunctionComponents</h1>
            <input type='text' ref={inputRef}></input>
            <button onClick={()=>handleInput()}>Handle Input</button>
        </div>
    )
}
