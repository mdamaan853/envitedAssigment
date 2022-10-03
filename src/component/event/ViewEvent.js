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
    <div className="card shadow w-50 mx-auto py-4">
    <div className="justify-content-center">
        <div className="my-2 p-3 d-flex justify-content-around">
            <p className="font-weight-bold">Event Name :</p>
            <p>{}</p>
        </div>
        <div className="my-2 p-3 d-flex justify-content-around">
            <p className="font-weight-bold">Event Name :</p>
            <p>{}</p>
        </div>
        <div className="my-2 p-3 d-flex justify-content-around">
            <p className="font-weight-bold">Start Date/Time : </p>
            <p>{}</p>
        </div>
        <div className="my-2 p-3 d-flex justify-content-around">
            <p className="font-weight-bold">End Date/Time : </p>
            <p>{}</p>
        </div>
        </div>
    </div>
    </div>
  );
}

export default EventDetail;
