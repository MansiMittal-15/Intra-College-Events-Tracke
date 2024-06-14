import React from 'react';
import "./Post.css";
import image from "../photos/PostImage.jpeg";


function Post(props) {
  return (
    <>
        <div className="post-container">
            <div className="left-post-information">
              <img src={props.imageUrl} alt="image" className='post-image' />
              <div className="left-post-subinfo">
                <h3 className="post-title">{props.eventTitle}</h3>
                <span>Last date {props.lastRegistrationTime}.</span>
                <span>{props.mode}</span>
                <span>${props.prizes} in prizes</span>
              </div>
            </div>
            <div className="right-post-information">
              <span>{props.collegeName}</span>
              <span>{props.startTime}-{props.endTime}</span>
            </div>
        </div>
    </>
  )
}

export default Post

Post.defaultProps = {
  eventTitle : "Amazing Event",
  lastRegistrationTime : "Few days",
  mode : "Online",
  prizes : "Soon",
  collegeName : "College Name",
  startTime : "for few days",
  // endTime : "After few days",
  imageUrl : image,
}