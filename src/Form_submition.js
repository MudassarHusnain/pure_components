import React, { useState } from 'react'

export default function Form_submition() {
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState(0);

    const arr=[];
    function output(e)
    {
        e.preventDefault();
        const product={};
        product.name={name};
        product.brand={brand};
        product.price={price};
        arr.push(product)
        console.log(arr)
    }
    return (
        <div>Form_submition

              {arr.map((a)=>
                 <h1>name</h1>
                )
            
            }
            <form onSubmit={output}>
                <label>Name:</label>
                <input type='text' onChange={(e) => setName(e.target.value )} /><br /><br />
                <h1>{name}</h1>
                <label>Brand:</label>
                <input type='text' onChange={(e) => setBrand( e.target.value)} /><br /><br />
                <label>Price:</label>
                <input type='text' onChange={(e) => setPrice( e.target.value)} /><br /><br />
                <button type='submit'>Submit</button>
            </form>
           
        </div>
    )
}

