import React,{useState,useMemo} from 'react'
export default function UseMemo() {
    const [count,setCount]=useState(1)
    const [item,setItem]=useState(10)

    const useMemoFor=useMemo(function multipleTheCount()
    {
        console.log("This is working");
        return count*5;
    },[count])
    
  return (
    <div>
     <h1>Use Memo tutorial </h1>
     <h2>Count: {count}</h2>
     <h2>Item :{item}</h2>
     <h2>{useMemoFor}</h2>
     <button onClick={()=>setCount(count+1)}>Update count</button>
     <button onClick={()=>setItem(item*10)}>Update Item</button>
    </div>
  )
}
