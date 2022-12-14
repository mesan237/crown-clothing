import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homePage.component';
import Header from './pages/header/header.component';
import {Route, Routes} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component { 

  constructor(props){
    super(props)

    this.state ={
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState(
            {
              currentUser:{
                id: snapshot.id,
                ...snapshot.data()
              }
            },
            () => console.log(this.state)
          )
        })
      }else{
        this.setState({currentUser: userAuth});
      }

    })
  }
  
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser= {this.state.currentUser}/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/signin' element={<SignInAndSignUpPage/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
