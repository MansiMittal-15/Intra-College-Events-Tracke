import React from 'react';
import './Login.css';
import pattern from '../photos/memphis-01.jpg';
import google from '../photos/google.png';
import iconLogin from '../photos/iconLogin.jpg';
import {Link} from "react-router-dom";

export default function Login()
{
    return (
        <>
            <form>
                <div className="complete">
                    <div className="comp">
                        <div className="login">
                            <div className="information">

                                <img src={iconLogin} alt="logo" className='iconLogin'/>

                                <h1 id='head'>Welcome back !</h1>
                                <p>Enter to get unlimited access to data & information.</p>

                                <br />
                                <label htmlFor="email"> Email<b style={{color: "red"}}>*</b></label><br />
                                <input type="email" placeholder='Enter your mail address' id='email' />
                                <br />

                                <br />
                                <label htmlFor="password"> Password<b style={{color: "red"}}>*</b></label><br />
                                <input type="password" placeholder='Enter password' id='password' />
                                <br /><br />

                                <div className="remember">
                                    <div className="left">
                                        <input type="checkbox" name="" id="remem" />
                                        <label htmlFor="remem">Remember me?</label>
                                    </div>

                                    <div className="right">
                                        <a href="/">Forgot your password?</a>
                                    </div>
                                </div>

                            </div>

                            <button type='submit' className='submitBtn'>Log In</button><br />

                            <div className='line'>
                                <hr id='l1'/>
                                <p>or Login with</p>
                                <hr id='l2'/>
                            </div>

                            <br />

                            <button className='googleBtn'><img src={google} alt="google" className='googleIcon' /> Sign Up with Google</button>
                            <br /><br />

                            <p>Don't have an account? <Link to="/registration">Register here</Link></p>
                        </div>

                        <div className="image">
                            <img src={pattern} alt="background" className='bgc' />
                        </div>
                    </div>
                    </div>
            </form>
        </>
    );
}