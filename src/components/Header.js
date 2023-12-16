import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchVew } from '../utils/gptSlice';
import lang from '../utils/language';
import { SUPPORTED_LANGUAGE } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

function Header() {
  const dispatch=useDispatch();
  const showgptsearch=useSelector(store=> store.gpt.showGptSearch)
const navigate=useNavigate();
const user=useSelector(store => store.user);
const handlelanguage=(e)=>{
  dispatch(changeLanguage(e.target.value));
}

const handlegptSearch=()=>{
  dispatch(toggleGptSearchVew());
}
  const handlesignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
      navigate('/error');

    });
  };
  
  useEffect(()=>{
    
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid: uid,
           email: email,
           displayName:displayName,
           photoURL:photoURL}
           ));
           navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmount
    return () =>unsubscribe();
  },[])


  return (
    <div className=' absolute flex w-screen px-8 py-2 bg-gradient-to-b from-black justify-between z-10'>
      <img className='w-44'
      src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
          alt='logo'
        />
         {user && (
          
        <div className='flex p-2'>
        {showgptsearch && 
        <select onChange={handlelanguage} className='px-4 py-4 bg-red-500 text-white rounded-md hover:bg-grey-700 transition duration-300 ease-in-out'>
        {SUPPORTED_LANGUAGE.map((lang)=> <option key={lang.identifier} value={lang.identifier}>{lang.name}
        </option>
        )
        }
        </select>}
        <button className='px-4 py-2 p-2 m-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out' onClick={handlegptSearch} >
        {showgptsearch ? "Homepage" : "Gpt Search"}
        </button>
     
        <img
        className='w-12 h-12 cursor-pointer rounded-lg'
        alt="user"
        src={user?.photoURL}
        />
        <button onClick={handlesignout} className='font-bold text-white'>
          (Sign Out)
        </button>
      </div>)}   
    </div>
  )
}

export default Header
