import React from "react";
import './Tesmonials.css'
import leftarrow from '../../assets/leftArrow.png'
import rightarrow from '../../assets/rightArrow.png'
import { testimonialsData } from "../../data/testimonialsData";
const Testmonials = () =>{
    const [selected, setSelected] = React.useState(0);
     const tLength = testimonialsData.length;
    return(
       <div className="Testmonials">
        <div className="left-t">
        <span>TESTIMONIALS</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>
            {testimonialsData[selected].review}
        </span>
        <span>
            <span style={{color:'var(--orange'}}>
                {testimonialsData[selected].name} 
            </span>
             - {testimonialsData[selected].status}
        </span>
        </div>
        <div className="left-t">
            <div className="right-box"></div>
            <div className="right-box1"></div>
            <img src={testimonialsData[selected].image} alt="" className="right-image" />

            <div className="arrows">
                <img onClick={()=>{
                    selected===0?setSelected(tLength -1):
                    setSelected((prev)=>prev -1)
                }} src={leftarrow} alt="" />

                <img onClick={()=>{
                    selected===tLength -1 ?setSelected(0):
                    setSelected((prev)=>prev +1)
                }} 
                 src={rightarrow} alt="" />
            </div>
        </div>
       </div>
    )
}

export default Testmonials