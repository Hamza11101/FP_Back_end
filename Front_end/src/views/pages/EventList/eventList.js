import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import eventServicePub from '../../../Services/pubEventServices';
import { Link } from "react-router-dom";

export default function EventList() {

    const [events, setEvents] = useState([]);
    useEffect(() => {
        retrieveEvents();
    }, []);



    const retrieveEvents = () => {
        eventServicePub.getAllEventsP()
            .then(response => {
                setEvents(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };



    return (
        <div className="container">
            <div className='row'>
                {events &&
                    events.map((event, index) => (
                        <div className="col-4 card"  key={index}>
                            <img src={event.picture} className="card-img-top img-fluid" alt={`IMAGE${index + 1}`} />
                            <div className="card-body">
                                <h5 className="card-title">{event.eventName}</h5>
                                <p className="card-text">{event.eventDescription}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{event.location}</li>
                                <li className="list-group-item text-danger text-center fs-4 fw-bold">{event.price}</li>
                                <li className="list-group-item">{event.tags.map((tag,index)=>(<p key={index}>{tag.name}</p>))}</li>
                            </ul>
                            <div className="card-body">
                                <Link to={`/eventsdetails/${event._id}`} className="card-link">See more details</Link>
                            </div>
                        </div>
                    )
                    )}
            </div>
        </div>
    )
}
