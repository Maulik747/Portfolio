import React from 'react'
import Me from "../../Images/me.jpeg"
import "./introduction.css"
const Introduction = () => {
  return (
    <div className="i">
        <div className="ileft">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello,my name is</h2>
            <h1 className="i-name">Maulik Chhetri</h1>
            <div className="ititle">

              <div className="i-title-wrapper">
                <div className="i-title-item">Computer Scientist</div>
                <div className="i-title-item">Machine Learning Engineer</div>
                <div className="i-title-item">Student</div>
              </div>
            </div>
            <div className="i-desc">
            <b>“You can have data without information, but you cannot have information without data.” — Daniel Keys Moran</b><br/>

            <p style={{marginTop:10,marginBottom:10}}>My interest lies in converting this data into information!</p><br/>

            </div>

          </div>

        </div>
        <div className="iright">
          <img src={Me} alt="" className="i-img"/>
        </div>
    </div>
  )
}

export default Introduction
