import React from "react";
import './sign-up.styles.scss';

import CustomButton from '../custom-button/custtom-button.component';
import FormInput from '../form-input/form-input.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import { createUserWithEmailAndPassword } from "firebase/auth";

class SignUp extends React.Component{
   constructor(){
      super();

      this.state ={
         displayName : '',
         email: '',
         password: '',
         confirmPassword: ''
      }
   }
   handleSubmit = async event => {
      event.preventDefault();

      const {displayName, email, password, confirmPassword} = this.state
      if(password !== confirmPassword){
         return;
      }

      try{
         const {user} = await createUserWithEmailAndPassword(auth, email, password);
         await createUserProfileDocument(user, {displayName})

         this.setState({
            displayName : '',
            email: '',
            password: '',
            confirmPassword: ''
         })
      }catch(error){
         console.error(error);
      }
   }

   handleChange = event => {
      const {name, value} = event.target

      this.setState({[name]: value})
   }

   render(){
      const {displayName, email, password, confirmPassword} = this.state;
      return(
         <div className="sign-up">
            <h2 className="title">I do not already have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit= {this.handleSubmit}>
               <FormInput
                  type='text'
                  onChange= {this.handleChange}
                  name= 'displayName'
                  value={displayName}
                  label= "display Name"
                  required
               />
               <FormInput
                  type='email'
                  onChange= {this.handleChange}
                  name= 'email'
                  value= {email}
                  label= "Email"
                  required
               />
               <FormInput
                  type='password'
                  onChange= {this.handleChange}
                  name= "password"
                  value= {password}
                  label= "password"
                  required
               />
               <FormInput
                  type='password'
                  onChange= {this.handleChange}
                  name='confirmPassword'
                  value= {confirmPassword}
                  label= "confirm password"
                  required
               />
               <CustomButton type='submit'> Sign Up</CustomButton>
            </form>
         </div>
      );
   }
}

export default SignUp;