// Experience.jsx
import React from "react";
import './Experience.styles.css'



function Experience() {


    return (
        <div id="experience">
            <div className="design-section">
                <div className="timeline">

                    {/* <!--Well, The reason for this div is to fill space.
                    This space is technically used for keeping dates,
                    but I didn't find the need for dates. However, I'll provide
                    you the styling for dates, so that you can use it if you 
wanted to.--> */}
                    <div className="timeline-empty">
                    </div>

                    {/* <!--This is the className where the timeline graphics are
                    housed in. Note that we have timeline-circle 
here for that pointer in timeline.--> */}

                    <div className="timeline-middle">
                        <div className="timeline-circle"></div>
                    </div>
                    <div className="timeline-component timeline-content">
                        <h3>HTML</h3>
                        <p>Some Text</p>
                    </div>
                    <div className="timeline-component timeline-content">
                        <h3>CSS</h3>
                        <p>Some Text.</p>
                    </div>
                    <div className="timeline-middle">
                        <div className="timeline-circle"></div>
                    </div>
                    <div className="timeline-empty">
                    </div>

                    <div className="timeline-empty">
                    </div>

                    <div className="timeline-middle">
                        <div className="timeline-circle"></div>
                    </div>
                    <div className=" timeline-component timeline-content">
                        <h3>Javascript</h3>
                        <p>Some Text.</p>
                    </div>

                </div>
            </div>
        </div >






    )
}

export default Experience;