import React, { Component,createRef } from 'react'

export default class UseOfRef extends Component {
    constructor()
    {
        super();
        this.inputRef=createRef();
    }
    componentDidMount()
    {
        console.log(this.inputRef)
    }
    getValue()
    {
        console.log(this.inputRef.current.value)
        this.inputRef.current.style.color='white'
        this.inputRef.current.style.backgroundColor='black'
    }
  render() {
    return (
      <div>
        <h1>UseOfRef</h1>
        <input type="text" ref={this.inputRef}/>
        <button onClick={()=>this.getValue()}>Click Here</button>
      </div>
    )
  }
}
