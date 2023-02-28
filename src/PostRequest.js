import React, { Component } from "react";
import axios from "axios";
export default class PostRequestInReact extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      name: "",
      brand: "",
      price: 0,
      image: null,
    };
  }
  setimage(event) {
    let input = event.target.files[0];
    this.setState({image:URL.createObjectURL(input)});
  }
  output(e) {

    this.setState({
      productList: [
        ...this.state.productList,
        {
          name: this.state.name,
          brand: this.state.brand,
          price: this.state.price,
          image: this.state.image,
        },
      ],
    });
    // console.log(this.state.productList);
  }
   async componentDidMount(e)
  {
    e.preventDefault();
    var d = new FormData();
    d.append("name",e.target.name.value)
    d.append("brand",e.target.brand.value)
    d.append("price",e.target.price.value)
    d.append("image",e.target.image.files[0])
    d.append("pathOfFile",URL.createObjectURL(e.target.image.files[0]))
    fetch('/api/v1/products', {
      method: 'POST',
      body: d,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

    }
  render() {
    return (
      <div>
            {this.state.productList.map((product) =>
                <>
                    <h1>{product.name}</h1>
                    <p>{product.brand}</p>
                    <p>{product.price}</p>
                    <img src={product.image} />
                </>
                                        )
           }
        <form onSubmit={(e) => this.componentDidMount(e)}>
          <label>Name:</label>
          <input name="name"
            type="text"
            onChange={(e) => this.setState({name: e.target.value})}/>
          <br />
          <br />
          <h1>{this.state.name}</h1>
          <label>Brand:</label>
          <input name="brand"
            type="text"
            onChange={(e) => this.setState({ brand: e.target.value })}
          />
          <br />
          <br />
          <label>Price:</label>
          <input name="price"
            type="text"
            onChange={(e) => this.setState({ price: e.target.value })}
          />
          <br />
          <br />
          <input type="file" name="image" onChange={(e) => this.setimage(e)} />
          <button type="submit" onClick={()=>this.output()}>Submit</button>
        </form>
      </div>
    );
        }
}
