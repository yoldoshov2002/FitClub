import React from "react";
import './Reasons.css'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"
const Reasons = () => {
    return(
        <div className="Reasons">
            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className="right-r">
                <div className="right-top-text">
                    SOME REASONS
                </div>
                <div className="right-top-title">
                 <span className="stroke-text"> WHY </span> CHOOSE US?
                </div>
                <div className="right-category">
                    <img src={tick} alt="" />
                    OVER 140+ EXPERT COACHS
                </div>
                <div className="right-category">
                    <img src={tick} alt="" />
                    TRAIN SMARTER AND FASTER THAN BEFORE
                </div>
                <div className="right-category">
                    <img src={tick} alt="" />
                    1 FREE PROGRAM FOR NEW MEMBER
                </div>
                <div className="right-category">
                    <img src={tick} alt="" />
                    RELIABLE PARTNERS
                </div>
                <div className="right-bottom-text">
                OUR PARTNERS
                </div>
                <div className="right-brend">
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reasons