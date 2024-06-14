import React from 'react';
import { Link } from 'react-router-dom';

function ThreeLayeredInformation() {
  return (
    <>
        <div className="three-layered-box">
            <div className="three-layered-information">
                <ul className='three-layered-unorder-list'>
                    <li><a className='three-layered-list-item' href="/">Your Profile</a></li>
                    <li><Link className='three-layered-list-item' to="/users-posts-creation-page">Your Posts</Link></li>
                    <li><a className='three-layered-list-item' href="/">Feature Preview</a></li>
                    <li><a className='three-layered-list-item' href="/">Settings</a></li>
                    <li><a className='three-layered-list-item' href="/">Connex support</a></li>
                    <li><a className='three-layered-list-item' href="/">Log out</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default ThreeLayeredInformation;
