import { useState } from "react";


function GarmentAnalyser({ attrs }) {
    const {
        type = "",
        color ="",
        cut = "",
        sleeve = "",
        length = "",
        collar = "",
        confidence = 0,
    } = attrs ?? {};

    return (
        <div className="box2">
            <div className="logoBar">
                <img src="/timg/logo2.jpg" alt="" id="logoImg" />
                <p id="p1">AI analysis:</p>
            </div>

            <div className="analysisBox">
                <div className="attribute"><img src="/timg/ladies-cloth.png" alt="" className="attIcon" /><p className="p2">Type: </p><h2>{type}</h2></div>
                <div className="attribute"><img src="/timg/wheel.png" alt="" className="attIcon" /><p className="p2">Color: </p><h2>{color}</h2></div>
                <div className="attribute"><img src="/timg/scissors.png" alt="" className="attIcon" /><p className="p2">Cut: </p><h2>{cut}</h2></div>
                <div className="attribute"><img src="/timg/button.png" alt="" className="attIcon" /><p className="p2">Sleeve: </p><h2>{sleeve}</h2></div>
                <div className="attribute"><img src="/timg/length.png" alt="" className="attIcon" /><p className="p2">Length: </p><h2>{length}</h2></div>
                <div className="attribute"><img src="/timg/people.png" alt="" className="attIcon" /><p className="p2">Collar: </p><h2>{collar}</h2></div>
                <div className="attribute"><img src="/timg/veracity.png" alt="" className="attIcon" /><p className="p2">confidence: </p><h2>{confidence}</h2></div>
            </div>
        </div>
    );
};

export default GarmentAnalyser;