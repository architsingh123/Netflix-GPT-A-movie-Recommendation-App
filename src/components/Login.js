import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/Validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,
  updateProfile } 
  from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { LOGO_URL } from '../utils/constants';


function Login() {
    const [signin,setsignin]=useState(true);
    const [errormess,seterrormess]=useState(null);
    
    const dispatch=useDispatch();

    const signform=()=>{
        setsignin(!signin);   
    }
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    
    const handlebuttonclick=()=>{
        //validate the form data
        const mess=checkValidateData(email.current.value,password.current.value); 
        seterrormess(mess);
        
        if(mess) return;
         
        //sign up logic
        if(!signin){
          //sign up form
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            updateProfile(user, {
              displayName: name.current.value, 
              photoURL: "https://tse1.mm.bing.net/th?id=OIP.EpE63i_LcbNSSSk1v--MfAHaHa&pid=Api&rs=1&c=1&qlt=95&w=117&h=117"
            }).then(() => {
              // Profile updated!
              // ...
              const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(
                addUser({uid: uid,
                email: email,
                displayName:displayName,
                photoURL:photoURL}));
              
            }).catch((error) => {
              // An error occurred
              // ...
              seterrormess(error.message);
            });
            
            
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrormess(errorCode+" - "+ errorMessage)
            // ..
          });

        }
        //sign in logic
        else{

          signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    seterrormess(user.displayName);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormess(errorCode+" "+errorMessage);
  });
        }
    }
  return (
    <div> 
    <Header/>
    <div className='absolute '>
    <img
    className='h-100 w-screen' 
    src={LOGO_URL}
    alt='logo'
    />
    </div>
      <form 
      onSubmit={(e) => e.preventDefault()}
      className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
      <h1 className='text-3xl font-bold py-4'>{signin ? "Sign In" : "Sign Up"}</h1>
      {!signin && (
        <input 
        ref={name}
        type='text' placeholder='Full Name' className='p-4 my-2 w-full
        bg-gray-800 text-white'/>
      )}
       
        <input
        ref={email}
         type='text' placeholder='Email Address' className='p-4 my-2 w-full
        bg-gray-800 text-white'/>
        <input 
        ref={password}
        type='password' placeholder='Password' className='p-4 my-2 w-full
        bg-gray-800 text-white'/>
        <p className='text-red-500 text-lg p'>{errormess}</p>
        <button className=' p-4 my-6 text-black w-full bg-red-700 rounded-lg' onClick={handlebuttonclick}>
        {signin ? "Sign In" : "Sign Up"}
        </button>
        <p className='py-4 cursor-pointer' onClick={signform}>{!signin ? "Already registered? Sign In Now" : "Are you new to Netflix? Sign Up Now"}</p>
      </form>
    </div>
    
  )
}

export default Login
