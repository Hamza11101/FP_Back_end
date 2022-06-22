import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import eventServicesPub from "../../../Services/pubEventServices";

export default function EventDetails() {
  const { id } = useParams();
  const [Event, setEvent] = useState([]);

  const getOneEvent = id => {
    eventServicesPub.getOneEvnetP(id)
      .then(response => {
        setEvent(response.data)
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (id)
      getOneEvent(id);
  }, [id]);

  return (
    <div>
      <div className="col-4 card" >
        <img src={Event.picture} className="card-img-top img-fluid" alt='Event Cover' />
        <div className="card-body">
          <h5 className="card-title">{Event.eventName}</h5>
          <p className="card-text">{Event.eventDescription}</p>
        </div>
        <ul className="list-group list-group-flush">
          {/* <li className="list-group-item">{event.location}</li> */}
          {/* <li className="list-group-item text-danger text-center fs-4 fw-bold">{event.price}</li> */}
          
        </ul>
        <Link to={`/reservation/${Event._id}`} className="btn btn-success">Reserve now</Link>
      </div>
<Link to='/eventslist'>Back to Event List</Link>
    </div>
  )
}
