import React,{useEffect,useState} from 'react'
import { auth } from './Firebase'
import { onAuthStateChanged } from 'firebase/auth';
  


const Authdetails = () => {
    const [authUser,setAuthUser]=useState(null);
    useEffect(()=>{
        const listen=onAuthStateChanged(auth,(user)=>{
            if(user){
                setAuthUser(user);
            }
            else{
                setAuthUser(null);
            }
        });
    },[])
  return (
    <div>
      {authUser?<p>signed in</p>:<p>signed out</p>}
    </div>
  )
}

export default Authdetails
