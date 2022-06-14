import React, { useState, useEffect }  from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useParams, useNavigate } from 'react-router-dom';

import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
// import { Link } from 'react-router-dom'


import eventServices from "../../../Services/eventServices";

const UpdateEvent = () => {
    const { id } = useParams();
  var Navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    eventName: Yup.string()
      
      .required("Event Name is required"),
      eventDescription: Yup.string()
     
      .required("Event Discription is required "),
 
      startDate: Yup.date()
      .required("Start Date is required")
      ,
      endDate: Yup.date()
      .required("End Date is required")
      ,
      startTime: Yup.date()
      .required("Start Time is required")
      ,
      endTime: Yup.date()
      .required("End Time is required")
      ,
      price: Yup.string()
      .required("Price is required")
      ,
      location: Yup.string()
      .required("Location is required")
      ,
      picture: Yup.string()
      .required("Picture is required")
      ,
      availebleTicketNumber: Yup.number()
      .required("Number of Tickets is required")
    
  });
  
  const initialValues = {
    eventName: "",
    eventDescription: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime:"",
    price: "",
    location: "",
    picture:"",
    availebleTicketNumber:null,
        
    
  };
  const [currentEvent, setCurrentEvent] = useState(initialValues);
    const getEvent = id => {
        eventServices.getOne(id)
            .then(response => {
                setCurrentEvent(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    useEffect(() => {
        if (id)
        getEvent(id);
    }, [id]);
    const handleInputChange = (event) => {
        console.log(event)
        const { name, value } = event.target;
        setCurrentEvent({ ...currentEvent, [name]: value });
    };
  
  const handleSubmit = (values) => {
    const data = {
      eventName:values.eventName,
      eventDescription:values.eventDescription,
      startDate:values.startDate,
      endDate:values.startTime,
      startTime:values.eventName,
      endTime:values.eventDescription,
      price:values.startDate,
      location:values.startTime,
      picture:values.picture,
      availebleTicketNumber:values.availebleTicketNumber,

    };
    var bodyFormData = new FormData();
    bodyFormData.append('eventName', values.eventName);
    bodyFormData.append('picture', values.picture);


    eventServices.updateOne(id,bodyFormData).then(response=>{
      console.log(response)
      

    }).catch(error=>{
      console.log(error);
    })
       Navigate("/eventtable");

  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 pt-3">
          <h1 className="text-center">Add on Event</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            
              <Form>
                <div className="form-group mb-3">
                  <label htmlFor="eventName">Event Name:</label>
                  <Field
                  value={currentEvent.eventName}
                  onChange={handleInputChange} 
                    type="text"
                    id="eventName"
                    name="eventName"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="eventName"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="eventDescription">Event Discription:</label>
                  <Field
                  value={currentEvent.eventDescription}
                  onChange={handleInputChange}
                    type="text"
                    id="eventDescription"
                    name="eventDescription"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="eventDescription"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="startDate">Start Date:</label>
                  <Field
                  value={currentEvent.startDate}
                  onChange={handleInputChange}
                    type="data"
                    id="startDate"
                    name="startDate"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="startDate"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="endDate">End Date:</label>
                  <Field
                   value={currentEvent.endDate}
                   onChange={handleInputChange}
                    type="data"
                    id="endDate"
                    name="endDate"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="endDate"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="startTime">Start Time:</label>
                  <Field
                  value={currentEvent.startTime}
                  onChange={handleInputChange}
                    type="data"
                    id="startTime"
                    name="startTime"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="startTime"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="endTime">End Time:</label>
                  <Field
                  value={currentEvent.endTime}
                  onChange={handleInputChange}
                    type="data"
                    id="endTime"
                    name="endTime"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="endTime"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="price">Price:</label>
                  <Field
                   value={currentEvent.price}
                   onChange={handleInputChange}
                    type="text"
                    id="price"
                    name="price"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="price"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="location">Location:</label>
                  <Field
                  value={currentEvent.location}
                  onChange={handleInputChange}
                    type="text"
                    id="location"
                    name="location"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="location"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="picture">Picture:</label>
                <Field type={"file"} 
                
                 id="picture"
                 name="picture"
                 className="form-control"/>
                 <ErrorMessage
                    name="location"
                    component="small"
                    className="text-danger"
                  />
                 </div>
                 <div className="form-group mb-3">
                  <label htmlFor="availebleTicketNumber">Number of Tickets:</label>
                  <Field
                  value={currentEvent.availebleTicketNumber}
                  onChange={handleInputChange}
                    type="number"
                    id="availebleTicketNumber"
                    name="availebleTicketNumber"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="availebleTicketNumber"
                    component="small"
                    className="text-danger"
                  />
                </div>

                <div className="form-group d-flex justify-content-end gap-3">
                  <button type="submit" className="btn btn-primary">
                    Update Event
                  </button>
                 
                </div>
              </Form>
           
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default UpdateEvent;