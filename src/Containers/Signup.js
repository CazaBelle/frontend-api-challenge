import React, { Component } from "react";
import Input from "../Components/Input"
import Button from "../Components/Button"

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        username: '',
        email: '',
        password: ''
      }

    }
  this.handleInput = this.handleInput.bind(this);
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
      this.setState( prevState => ({ newUser : 
     {...prevState.newUser, [name]: value
     }
   }), () => console.log(this.state.newUser))
}

    handleFormSubmit(e) {
      e.preventDefault();
      let newUserData = this.state.newUser;

      fetch('https://chitter-backend-api.herokuapp.com/users',{
          method: "POST",
          body: JSON.stringify(newUserData),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        }).then(response => {
          response.json().
          then(data =>{
            console.log("Successful" + data);
          })
      })
    } 

    
  
  render() {
    return (
        <form onSubmit={this.handleFormSubmit}>
          <Input inputtype={'text'}
            title={'Username'}
            name={'username'}
            value={this.state.newUser.name}
            placeholder={'Enter your username'}
            onChange = {this.handleInput}
          
          />
          <Input inputtype={'email'}
            title={'Email'}
            name={'email'}
            value={this.state.newUser.name}
            placeholder={'Enter your email'}
            onChange = {this.handleInput}
          />
          <Input inputtype={'password'}
            title={'Password'}
            name={'password'}
            value={this.state.newUser.name}
            placeholder={'Enter your password'}
            onChange = {this.handleInput}
            />
          <Button 
            action = {this.handleFormSubmit}
            type = {'primary'} 
            title = {'Submit'} 
            style={buttonStyle}
          />
        
        
        </form>
    );
  }
}
  const buttonStyle = {
    margin : '10px 10px 10px 10px'
  }


export default Signup;



