import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import eventService from '../../../Services/eventServices'
import { Link } from "react-router-dom";





const EventTables = () => {
  const [events, setEvents] = useState([]);
 

  useEffect(() => {
    retrieveEvents();
  }, []);

  

  const retrieveEvents = () => {
    eventService.getAllEvents()
      .then(response => {
        setEvents(response.data);
        // console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveEvents();
    // setCurrentUser(null);
    // setCurrentIndex(-1);
  };

  // const setActiveUser = (tutorial, index) => {
  //   setCurrentUser(tutorial);
  //   setCurrentIndex(index);
  // };

  const removeOneEvent = (e,id) => {
    eventService.removeOne(id)
      .then(response => {
        // console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  






  return (
    <div className="list row">

      <div className="col-md-6">
        <h4>Event List</h4>
        <div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Event Name</th>
                <th scope="col">Event Description</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Start Time</th>
                <th scope="col">End Time</th>
                <th scope="col">Price</th>
                <th scope="col">Location</th>
                <th scope="col">availeble Ticket Number</th>

               
                 
                <th scope="col">Delete Event</th>
                <th scope="col">Update Event</th>


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
                   

                    
                    <td><button className='btn btn-danger' onClick={(e) => { removeOneEvent(e,event._id)}}>Delete</button> </td>
                    <td><Link to={`/updateevent/${event._id}`}><button className='btn btn-success' >Update</button></Link></td>

                  </tr>

                </tbody>
              )


              )}


          </table>
          <div className="d-grid gap-2">
            <Link to="/addevent">
              <button className="btn btn-success" type="button">Add Event</button>
            </Link>
          </div>


        </div>




      </div>

    </div>
  )


  
    
  
}

export default EventTables
