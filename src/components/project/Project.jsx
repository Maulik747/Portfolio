import React from 'react'
import "./project.css"
const Project = ({img,link,desc}) => {
  return (
    <div className="p">
      <b>{desc}</b>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer" >
        <img src={img} alt="" className="p-img"/>
      </a>
    </div>
  )
}

export default Project
