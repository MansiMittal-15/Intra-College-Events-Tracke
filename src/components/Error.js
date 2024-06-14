import React from 'react';
import '../components/Error.css';
import errorImg from "../photos/errorImage.jpeg";

export default function Error() {
  return (
    <>
        <div className='mainErrorPage'>
            <div className="errorBox">
                <div className="errorBoxChild">
                    <img src={errorImg} alt="errorImage" className='errImg'/>
                    <h1 className='errorHead'>Page Not Found</h1>
                    <p>
                        The page you are looking for might be renamed, removed or might never exists on this planet.
                    </p>
                    <div className="errorBtns">
                        <button className='errorBtn'>Got to Planet Earth</button>
                        <button className='errorBtn'>Contact Aliens for Help</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};
