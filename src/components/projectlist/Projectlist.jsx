import React from "react";
import Project from "../project/Project"
import "./projectlist.css"

import {projects} from "../../data"
const Projectlist = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <div className="pl-title">Learn with me</div>
        <p className="pl-desc">
          Below I have listed some of my projects. I love to gain new knowledge and them apply them creatively. The field of computer science allows me to
          play freely with different subjects and apply them in real life.        </p>
      </div>
      <div className="pl-list">
        {projects.map((item)=>(<Project key={item.id} img={item.img} link={item.link} desc={item.desc}/>))}
      </div>
    </div>
  );
};

export default Projectlist;
