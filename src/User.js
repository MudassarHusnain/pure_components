import React,{forwardRef} from 'react'

function User(props,ref) {
  return (
    <input type='text' ref={ref}></input>
  )
}
export default forwardRef(User)