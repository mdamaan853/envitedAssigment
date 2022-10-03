import React from "react";
import img from "../../assest/images/invited_image.png"
import "./style.css"
function Dashborad() {
  return (
    <div className="">
    <div className="row">
     <div id="movie-night" className="img-section col-md-6 col-sm-12">
      <img src={img} className="landing-img"/>
     </div>
     <section id="" className="text-section col-md-6 col-sm-12">
      <div className="landing-text-1">
        imagine if <br/><span className="snapchat-text">Snapchat<br/></span>had events.<br/>
      <div className="landing-text-2">Easily host and share events with your friends<br/>across any social media.</div>
      </div>
     <button id="create-event" className="event-btn text-light">🎉 Create my event</button>
     </section>
    </div>
    </div>
  );
}

export default Dashborad;
