import React from "react";
import ML from "../../Images/ML.jpg";
import award from "../../Images/award.png";
import "./about.css";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={ML} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">Recent graduate of Computer Science.</p>
        <p className="a-desc">
          I completed my Bachelors degree in Computer Science at Jacobs University in 2022.<br/> 
          Currently, I am pursuing my Masters degree in Computer Science at TUM.
        </p>
        <div className="a-award">
          <img src={award} alt="" className="a-award-img" />
        <div className="a-award-text">
            <h4 className="a-award-title">
                
            </h4>
            <p className="a-award-desc">
                Made it to top 10% of the class of 2022 in Computer Science
            </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
