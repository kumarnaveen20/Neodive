import { useState } from 'react';
import './register.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';
import { Link, useNavigate } from 'react-router-dom';
import { Visibility,VisibilityOff } from '@material-ui/icons';



const Register = () => {
  let navigate = useNavigate();
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [eye1,seteye1]=useState(false);
  const [eye2,seteye2]=useState(false);

const toogle1=()=>{
  seteye1(!eye1);
}
const toogle2=()=>{
  seteye2(!eye2);
}
  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/login")
      }).catch((error) => {
        console.log(error);
      })

  }
  return (
    <div className='login'>
      <div className="loginwrapper">
        <div className="loginleft">
          <h3 className="loginlogo">Neodive</h3>
          <span className="logindesc">
            Connect with friends and and the world around you on Neodive.
          </span>
        </div>
        <div className="loginright">
          <div className="loginbox">
            <input placeholder="Username"
              value={username} className="logininput" onChange={(e) => { setusername(e.target.value) }} />
            <input type='email' placeholder="Email" value={email} className="logininput" onChange={(e) => { setemail(e.target.value) }} />
            <input type={eye1==true?"text":"password"} placeholder="Password" value={password} className="logininput" onChange={(e) => { setpassword(e.target.value) }} />
            <input type={eye2==true?"text":"password"} placeholder="Password Again"  className="logininput" />
            <div className='eye1'> 
            {
              eye1==false?<Visibility onClick={toogle1} />:<VisibilityOff onClick={toogle1} />
             }
             </div>
            <div className='eye2'> 
            {
              eye2==false?<Visibility onClick={toogle2} />:<VisibilityOff onClick={toogle2} />
             }
             </div>
            <button className="loginbutton" onClick={signup}>Sign Up</button>

           <Link className='registerloginlink' to='/login'> <button className='loginregister' >
              Login into Account
            </button></Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
