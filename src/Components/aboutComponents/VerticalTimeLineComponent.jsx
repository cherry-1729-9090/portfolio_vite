import "react-vertical-timeline-component/style.min.css";
import React from "react";

function VerticalTimeLineComponent() {

    let timelineData = [
                {
                    id: 1,
                    title:"Secondary Education",
                    location:"Vidya Vikas High School,Jangareddygudem",
                    description:"I have completed my secondary education from Vidya Vikas High School, Jangareddygudem, Andhra Pradesh with 9.8 CGPA.",
                    date:"2019-2020",
                    icon:"Work",
                },
                {
                    id: 2,
                    title:"Under-Graduation ",
                    location:"Vidya Vikas Junior College,Jangareddygudem",
                    description:"I have completed my Under-Graduation from Vidya Vikas Junior College, Jangareddygudem, Andhra Pradesh with 96%.",
                    date:"2020-2021",
                    icon:"Work",
                },
                {
                    id: 3,
                    title:"Graduation",
                    location:"Scaler School of Technology, Banglore",
                    description:"I am currently pursuing my graduation from Scaler School of Technology, Banglore, Karnataka.",
                    date:"2023-2027 (Present)",
                    icon:"Work",
                }
            ]
        

    return (
        <div>
            <div>
                <a className="journey">Educational Journey</a>
                <a className="journey">Technical Journey</a>
            </div>
            <div className="timeline-container">
                {/* Educational journey Timeline */}
                <div>
                
                </div>

                {/* Technical Journey Timeline */}
                <div>
                    {/* You can add a similar structure here for the technical journey if needed */}
                </div>
            </div>
        </div>
    )
}

export default VerticalTimeLineComponent;
