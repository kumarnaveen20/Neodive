
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';
import { useState } from 'react';
import { Visibility,VisibilityOff } from '@material-ui/icons';


const Login = () => {
  let navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [eye,seteye]=useState(false);

  const toogle=()=>{
    seteye(!eye);
  }


  const loginfn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/home");
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
            <input placeholder="Email" className="logininput"
              value={email}
              onChange={(e) => { setemail(e.target.value) }}
            />
            <input placeholder="Password" className="logininput"
            type={eye==true?"text":"password"}
              value={password} onChange={(e) => { setpassword(e.target.value) }}
            />
           <div className='eye'> 
           {
              eye==false?<Visibility onClick={toogle} />:<VisibilityOff onClick={toogle} />
           }
           
            
            </div>

            <button className="loginbutton" onClick={loginfn} >Log In</button>
            
           <Link className='registerloginlink' to='/register'> <button className='loginregister'>
              Create a New Account
            </button></Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
