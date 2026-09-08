import { useEffect, useState } from "react";


function GarmentAnalyser() {
    const [atts, setAtts] = useState({ Type: "dress", Cut: "A-Line", Sleeve: "Long ", Length: "maxi", Collar: "round", Accuracy: 92 })
    useEffect(
        () => {
            async function getAiResults() {
                try {
                    const response = await fetch("");
                    if (!response.ok) {
                        throw new Error("Failed to fetch AI results");
                    }
                    const data = await response.json();

                    setAtts(data);
                } catch (error) {
                    console.log(error);
                }
            }
            getAiResults();

        }, []
    )
    return (
        <div className="box2">
            <div className="logoBar">
                <img src="/timg/logo2.jpg" alt="" id="logoImg" />
                <p id="p1">AI analysis:</p>
            </div>

            <div className="analysisBox">
                <div className="attribute"><img src="/timg/ladies-cloth.png" alt="" className="attIcon" /><p className="p2">Type: </p><h2>{atts.Type}</h2></div>
                <div className="attribute"><img src="/timg/scissors.png" alt="" className="attIcon" /><p className="p2">Cut: </p><h2>{atts.Cut}</h2></div>
                <div className="attribute"><img src="/timg/button.png" alt="" className="attIcon" /><p className="p2">Sleeve: </p><h2>{atts.Sleeve}</h2></div>
                <div className="attribute"><img src="/timg/length.png" alt="" className="attIcon" /><p className="p2">Length: </p><h2>{atts.Length}</h2></div>
                <div className="attribute"><img src="/timg/people.png" alt="" className="attIcon" /><p className="p2">Collar: </p><h2>{atts.Collar}</h2></div>
                <div className="attribute"><img src="/timg/veracity.png" alt="" className="attIcon" /><p className="p2">Accuracy: </p><h2>{atts.Accuracy}</h2></div>
            </div>
        </div>
    );
};

export default GarmentAnalyser;