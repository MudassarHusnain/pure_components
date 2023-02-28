import React, { Component } from 'react';
import axios from 'axios';
export default class PostRequestInReact extends Component {
  constructor() {
    super();
    this.state = {
      productList:[],
      name: "", brand: "", price: 0,image:""
    };
  }
  output(e)
  {
    e.preventDefault();

    this.setState({productList:[...this.state.productList,{name:this.state.name,brand:this.state.brand,price:this.state.price,image:this.state.image}]})
    console.log(this.state.productList)

  }
  render() {
    return (
      <div>
      {
        this.state.productList.map((product)=>
          <>
          <h1>{product.name}</h1>
          <p>{product.brand}</p>
          <p>{product.price}</p>
          <img src={product.image} />
          </>
        )
      }
        <form onSubmit={(e)=>this.output(e)}>
          <label>Name:</label>
          <input type='text' onChange={(e) => this.setState({name:e.target.value}  )} /><br/><br/>
          <h1>{this.state.name}</h1>
          <label>Brand:</label>
          <input type='text' onChange={(e) => this.setState({ brand: e.target.value})} /><br/><br/>
          <label>Price:</label>
          <input type='text' onChange={(e) => this.setState({price: e.target.value })} /><br/><br/>
          <input type='file' onChange={(e)=> this.setState({image: e.target.files[0]})}/>
          
          <button type='submit'>Submit</button>
        </form>
        
      </div>
    )
  }
}
