import React from "react";
import CustomButton from "../custom-button/custtom-button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
   constructor(props){
      super(props)

      this.state = {
         email: "",
         password: ""
      }
   }

   handleSubmit = event => {
      event.preventDefault();

      this.setState({email:"", password: ""})
   }

   handleChange =event => {
      const {name, value} = event.target;

      this.setState({[name]:value})
   }

   render(){
      return(
         <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign with your email and password</span>

            <form onSubmit={this.handleSubmit}>
               <FormInput 
                  type="email" 
                  name="email" 
                  handleChange = {this.handleChange}
                  value={this.state.email} 
                  label='email'
                  required/>
               
               <FormInput 
                  type="password" 
                  name="password" 
                  handleChange = {this.handleChange}
                  value={this.state.password} 
                  label='password'
                  required/>

               <div className="buttons">
                  <CustomButton type="submit"> Sign in</CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
               </div>
            </form>
         </div>
      )
   }
}

export default SignIn;