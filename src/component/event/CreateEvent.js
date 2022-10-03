import React,{useState} from "react";
import img from "../../assest/images/createEvent.jpg"
import "./style.css"
function CreateEvent() {
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
     <h3 className="head-text">Create Events</h3>
     <div id="" className="d-flex justify-content-around">
        <div className="form-container shadow card p-5" style={{borderRadius:"10px"}}>
            <h4 id="form-head-text" className="pb-4 font-weight-bold">Enter your Events Details</h4>
            <form>
    <div className="form-group ">
    <label className="d-flex font-weight-bold">Enter Event name</label>
    <input onChange={handleChange} name="eventName" type="text" className="form-control" placeholder="event name" required/>
  </div>
    <div className="form-group">
    <label className="d-flex font-weight-bold">Enter Host name</label>
    <input onChange={handleChange} type="text" name="hostName" className="form-control" placeholder="host name" required/>
  </div>
    <div className="form-group">
    <label className="d-flex font-weight-bold">Select start date</label>
    <input onChange={handleChange} type="Date" name="startDate" className="form-control" placeholder="start date" required/>
  </div>
    <div className="form-group">
    <label className="d-flex font-weight-bold">Select start time</label>
    <input onChange={handleChange} type="time" name="startTime" className="form-control" placeholder="start time" required/>
  </div>
    <div className="form-group">
    <label className="d-flex font-weight-bold">Select End date</label>
    <input onChange={handleChange} type="date" name="endDate" className="form-control" placeholder="End date" required/>
  </div>
    <div className="form-group">
    <label className="d-flex font-weight-bold">Select End Time</label>
    <input onChange={handleChange} type="time" name="endTime" className="form-control" placeholder="End Time" required/>
  </div>

  <button id="create-event" className="create-btn text-light">Create Event</button>
            </form>
    </div>
    <div id="img" className="d-flex justify-content-center align-items-center">
        <img src={img} className="logo shadow"/>
    </div>
     </div>
    </div>
  );
}

export default CreateEvent;
