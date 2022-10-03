import React,{useState} from "react";
import img from "../../assest/images/createEvent.jpg"
import "./style.css"
function EventDetail() {
    const [event,setEvent]=useState({
        eventName:"",
        hostName:"",
        startDate:"",
        startTime:"",
        endDate:"",
        endTime:"",
    })

const handleChange=(e)=>{
    let name=e.target.name
    let value=e.target.value
    setEvent(previousState => {
        return { ...previousState, [name]: value }
      })
}

  return (
    <div className="">
     <h3 className="head-text">View Event Detail</h3>
    <div className="card shadow d-block">
        <div>
            <label>Event Name : {}</label>
        </div>
        <div>
            <label>Event Name : {}</label>
        </div>
        <div>
            <label>Start Date/Time : {}</label>
        </div>
        <div>
            <label>End Date/Time : {}</label>
        </div>
    </div>
    </div>
  );
}

export default EventDetail;
