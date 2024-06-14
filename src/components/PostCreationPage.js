import React from 'react';
import styles from "./PostCreationPage.module.css";
import sideImage from "../photos/imagePostCrtPg.jpeg";

function PostCreationPage() {
  return (
    <>
        <div className={styles['post-creation-page']}>
          <fieldset className={styles['post-creation-fieldset']}>
            <legend><h1 className={styles['legend-head']}>..Post Creation Page..</h1></legend>

            <div className={styles['post-creation-information']}>
                <form action="" className={styles['post-creation-form']} >

                    <label htmlFor="event-title">Event Title</label>
                    <input type="text" placeholder='Event Title..' id='event-title' />
                    <br />
                    
                    <label htmlFor="registration-date">Last Date to Register</label>
                    <input type="text" placeholder='Last Date to Register' id='registration-date' />
                    <br />

                    <label htmlFor="event-mode">Event Mode</label>
                    <select name="modes" id="modes">
                      <option value="mode">Choose</option>
                      <option value="mode">Online</option>
                      <option value="mode">Offline</option>
                    </select>
                    <br />

                    <label htmlFor="event-prizes">Event Prizes in dollars</label>
                    <input type="text" placeholder='Event Prizes..' id='event-prizes' />
                    <br />

                    <label htmlFor="college-name">Your College Name</label>
                    <input type="text" placeholder='College Name..' id='college-name' />
                    <br />

                    <label htmlFor="event-date-start">Event Date Starts</label>
                    <input type="date" placeholder='Event Date Starts..' id='event-date-start' />
                    <br />

                    <label htmlFor="event-date-end">Event Date Ends</label>
                    <input type="date" placeholder='Event Date Ends..' id='event-date-end' />
                    <br />

                    <label htmlFor="event-img">Image of Event</label>
                    <input type="file" placeholder='Event Image..' id='event-img' />
                    <br />

                    <button className={styles.btn}>Submit Your Response</button>

                </form>
            </div>
            <div className="sideImage">
              <img src={sideImage} alt="side image" className={styles.sideImage}/>
            </div>
          </fieldset>
        </div>
    </>
  )
}

export default PostCreationPage
