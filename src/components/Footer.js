import React from 'react';
import "./Footer.css";
import title from "../photos/title.jpeg";
import insta from "../photos/insta.jpg";
import linked_in from "../photos/linked_in.png";
import gmail from "../photos/gmail.png";
import github from "../photos/github.png";


export default function Footer()
{
    return(
        <>
            <footer className="foot">
                <div className="container">
                    <div className="about">
                        <img src={title} alt="title" className='title'/>
                        <p>Creators and brands use connex to create thriving communities, amplifying engagement and culture.</p>
                    </div>

                    <div className="solutions">
                        <h2>Solutions</h2>
                        <ul className='footList'>
                            <li className='listItem'>Agencies</li>
                            <li className='listItem'>Brands and StartUps</li>
                            <li className='listItem'>Memberships and Coaches</li>
                            <li className='listItem'>Clubs and Organizations</li>
                            <li className='listItem'>Employee Communication</li>
                            <li className='listItem'>Customer Communities</li>
                        </ul>
                    </div>

                    <div className="resources">
                        <h2>Resources</h2>
                        <ul className='footList'>
                            <li className='listItem'>Agencies</li>
                            <li className='listItem'>Blogs</li>
                            <li className='listItem'>Partners</li>
                            <li className='listItem'>Product Roadmap</li>
                            <li className='listItem'>Developers</li>
                            <li className='listItem'>System Status</li>
                        </ul>
                    </div>

                    <div className="company">
                        <h2>Company</h2>
                        <ul className='footList'>
                            <li className='listItem'>Pricing</li>
                            <li className='listItem'>About us</li>
                            <li className='listItem'>Contact us</li>
                            <li className='listItem'>Terms of Service</li>
                            <li className='listItem'>Privacy policy</li>
                        </ul>
                    </div>
                </div>

                <div className="last">
                    <p>&copy; 2024 connex. All rights reserved.</p>
                    <div className="icons">
                        <img src={insta} alt="insta" className='insta'/>
                        <img src={linked_in} alt="linked in" className='linked_in'/>
                        <img src={gmail} alt="gmail" className='gmail'/>
                        <img src={github} alt="github" className='github'/>
                    </div>
                </div>
            </footer>
        </>
    );
}