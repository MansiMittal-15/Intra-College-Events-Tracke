import React from 'react';
import './Registration.css';
import regisBGC from '../photos/memphis-01.jpg';
import {Link} from "react-router-dom";

export default function Registration()
{
    return(
        <>
            <form>
                <div className="regisBack">

                    <div className="formchild">

                        <div className="image">
                            <img src={regisBGC} alt="background" className='bgc' />
                        </div>

                        <div className="register">

                            <h1 id='regHead'>Registration</h1><br />

                            <div id="information">

                                <div id="left">
                                    
                                    <label htmlFor="name2">Full Name:</label><br />
                                    <input type="text" id="name2" placeholder='Please Enter Your..' /><br /><br />
                                    
                                    <label htmlFor="email2">Email:</label><br />
                                    <input type="email" id="email2" placeholder='Please Enter Email..' /><br /><br />
                                    
                                    <label htmlFor="country">Country:</label><br />
                                    <input type="text" id="country" placeholder='Please Enter Country..' /><br /><br />
                                    
                                    <label htmlFor="password2">Password:</label><br />
                                    <input type="password" id="password2" placeholder='Please Enter Password..' /><br /><br />
                                    
                                </div>

                                <div id="right">
        
                                    <label htmlFor="college">College Name:</label><br />
                                    <input type="text" id="college" placeholder='Your college..' /><br /><br />
                                    
                                    <label htmlFor="phone">Phone Number:</label><br />
                                    <input type="number" id="phone" placeholder='Your phone number..' /><br /><br />
                                    
                                    <label htmlFor="city">City:</label><br />
                                    <input type="text" id="city" placeholder='Please Enter your City..' /><br /><br />
                                    
                                    <label htmlFor="confirm-password">Confirm Password:</label><br />
                                    <input type="password" id="confirm-password" placeholder='Enter Password again..' /><br /><br />
                                    
                                </div>
                            </div>


                            <div className="gender">
                                <div className='property'>
                                    <label htmlFor="male">Male</label>
                                    <input type="checkbox" id="male" />
                                </div>
                                
                                <div className='property'>
                                    <label htmlFor="female">Female</label>
                                    <input type="checkbox" id="female" />
                                </div>

                                <div className='property'>
                                    <label htmlFor="other">Other</label>
                                    <input type="checkbox" id="other" />
                                </div>

                                <div className='property'>
                                    <label htmlFor="prefer">Prefer not to say</label>
                                    <input type="checkbox" id="prefer" />
                                </div>

                            </div>
                            <br />

                            <button type='submit' id='submit'>Submit</button>
                            <br />

                            <p>Already have an account? <Link to="/sign in">Sign in</Link></p>

                        </div>

                    </div>
                </div>

            </form>
        </>
    );
}