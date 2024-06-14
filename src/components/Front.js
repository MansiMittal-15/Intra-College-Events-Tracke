import "./Front.css";
import React from "react";
import rightArrowImg from "../photos/right-arrow.png";
import { useNavigate } from "react-router-dom";

export default function Front() {

    const navigate = useNavigate();

    return (
    <>
      <div className="main">
        <div className="communityFront">
          <div className="frontChild">
            <h1 id="frontHead">Give your customers a voice with Community!</h1>
            <p id="frontPara1">
              Creators and brands use connex to create thriving communities,
              amplifying engagement and culture.
            </p>
            <button id="connexBtn" onClick={() => {
                navigate("/post-creation-page")
            }}>
              Create your connex
              <img src={rightArrowImg} alt="arrow" className="arrowIcon" />
            </button>
            <p id="frontPara2">Try connex free. No credit card required.</p>
          </div>
        </div>
      </div>
    </>
  );
}
