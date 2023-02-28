import React,{useRef} from 'react'
import User from './User';
export default function App() {
  const inputRef = useRef(null);
  function updateRef()
  {
    inputRef.current.value="10000"
    inputRef.current.style.backgroundColor="black";
    inputRef.current.style.color='White';
    inputRef.current.focus();
  }
  return (
    <div>
      <h1>ForwardRef Practice </h1>
      <User ref={inputRef}/>
      <button onClick={()=>updateRef()}>Update Input Value</button>
    </div>
  )
}
