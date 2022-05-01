import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import welcoming from "./login.png";



function Login() {
  return (
    <div className='main-login'>
                <div className="login-contain">
                 <div className="left-side">
                     <form>
                        <label htmlFor="emil1">Email</label>
                            <input placeholder="Enter your email..." type="email"  
                             id="emil1"/>
                        <label htmlFor="pwd1">Password</label>
                            <input placeholder="Enter password" type="password" autoComplete="false"
                             id="pwd1"/>
                            <button type="submit" id="sub_butt">
                            <Link className='link' to='/Dashboard'>Login</Link>
                            </button>
                         </form>

                         <div className="footer">
                             <h4>Don't have an Account ? <Link className='link' to='/Register'>Register Now</Link></h4>
                         </div>

                 </div>
                  <div className="right-side">
                    <div className="welcomeNote">
                        <h3>Welcome Back!</h3>
                    </div>
                    <div className="welcomeImg">
                        <img src={welcoming} id='wel-img-id' alt=""  />
                    </div>
                  </div>

                </div>
        </div>
                     
  )
}

export default Login
