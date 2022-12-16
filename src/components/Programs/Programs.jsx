import React from "react";
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
const Programs = () =>{

    return (
        <div className="Programs" id="Programs">
            <div className="programs-header">
                <span className="stroke-text">EXPLORE OUR</span>
                <span>PROGRAMS</span>
                <span className="stroke-text">TO SHAPE YOU</span>
            </div>
            <div className="row">
                {programsData.map((program)=>(
                <div className="col-3">
                    <div className="programs-box">
                        <div className="programs-box-img">{program.image}</div>
                        <div className="programs-box-title">{program.heading}</div>
                        <div className="programs-box-text">
                        {program.details}
                        </div>
                        <div className="programs-box-link">
                            <span>Join Now </span>
                            <img src={RightArrow} alt="" />
                        </div>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    )
}

export default Programs