import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import eventService from '../../Services/eventServices'
import { Link } from "react-router-dom";
import confirm from '../../Services/confirm'
import { toast } from 'react-toastify';



const EventTables = () => {
  const [events, setEvents] = useState([]);
 useEffect(() => {
    retrieveEvents();
  }, []);

  

  const retrieveEvents = () => {
    eventService.getAllEvents()
      .then(response => {
        setEvents(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveEvents();
    
  };



  const removeOneEvent = (e,id) => {
    confirm().then((result)=>{
      if (result.isConfirmed) {
    eventService.removeOne(id)
      .then(response => {
        toast.success(response.data.message);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };
})
  };

  






  return (
    <div className="row">

      <div className="col-md-12">
        <h4>Event list</h4>
        <div>
        <div className="d-grid gap-2">
            <Link to="/events/create">
              <button className="btn btn-success" type="button"> <i className='fa fa-plus'></i> Add new event</button>
            </Link>
          </div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Event name</th>
                <th scope="col">Event description</th>
                <th scope="col">Start date</th>
                <th scope="col">End date</th>
                <th scope="col">Start time</th>
                <th scope="col">End time</th>
                <th scope="col">Price</th>
                <th scope="col">Location</th>
                <th scope="col">availeble ticket number</th>

               
                 
                <th scope="col">Actions</th>
              


              </tr>
            </thead>
            {events &&
              events.map((event, index) => (



                <tbody key={event._id}>
                  <tr>
                    <th scope="row">{index}</th>
                    <td>{event.eventName}</td>
                    <td>{event.eventDescription}</td>
                    <td>{event.startDate}</td>
                    <td>{event.endDate}</td>
                    <td>{event.startTime}</td>
                    <td>{event.endTime}</td>
                    <td>{event.price}</td>
                    <td>{event.location}</td>
                    <td>{event.availebleTicketNumber}</td>
                    <td><button className='btn btn-danger me-1' onClick={(e) => { removeOneEvent(e,event._id)}}>
                    <i className='fa fa-trash'></i> Delete</button> 
                    <Link className='btn btn-success' to={`/events/update/${event._id}`}>
                    <i className='fa fa-edit'></i> Update</Link></td>
                  </tr>
                </tbody>
              )
              )}
          </table>
        </div>

      </div>

    </div>
  )

}

export default EventTables
