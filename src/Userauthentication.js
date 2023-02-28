import React, { Component } from 'react'

export default class Userauthentication extends Component {
    constructor()
    {
        super();
        this.state={
            username:'',
            password: '',
            email: ''
        };

    }
    async componentDidMount(e)
    {
       e.preventDefault();
       const data=new FormData()
       this.setState({username:e.target.username.value})
       this.setState({password:e.target.password.value})
       data.append('username',e.target.username.value);
       data.append('password',e.target.password.value);
    
       fetch('/login', {
        method: 'POST',
        body: data,
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
      <div>User authentication
         <form onSubmit={(e)=>this.componentDidMount(e)}>
           <input type='text' name='username' />
           <input type='password' name='password' />
           <button type='submit' >Submit</button>
         </form>
      </div>
    )
  }
}
