import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';
import eventServices from "src/Services/eventServices";

const AddEvent = () => {
  var Navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    eventName: Yup.string()
      
      .required("Event name is required."),
      eventDescription: Yup.string()
     
      .required("Event discription is required."),
 
      startDate: Yup.string()
      .required("Start date is required.")
      ,
      endDate: Yup.string()
      .required("End date is required.")
      ,
      startTime: Yup.string()
      .required("Start time is required.")
      ,
      endTime: Yup.string()
      .required("End time is required.")
      ,
      price: Yup.string()
      .required("Price is required.")
      ,
      location: Yup.string()
      .required("Location is required.")
      ,
      picture: Yup.string()
      .required("Picture is required.")
      ,
      availebleTicketNumber: Yup.number()
      .required("Number of tickets is required.")
    
  });
  
  const initialValues = {
    eventName: "",
    eventDescription: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    price: "",
    location: "",
    picture:"",
    availebleTicketNumber:null,
        
    
  };
  
  const handleSubmit = (values) => {
    // const data = {
    //   eventName:values.eventName,
    //   eventDescription:values.eventDescription,
    //   startDate:values.startDate,
    //   endDate:values.startTime,
    //   startTime:values.eventName,
    //   endTime:values.eventDescription,
    //   price:values.startDate,
    //   location:values.startTime,
    //   picture:values.picture,
    //   availebleTicketNumber:values.availebleTicketNumber,

    // };
    var bodyFormData = new FormData();
    bodyFormData.append('eventName', values.eventName);
    bodyFormData.append('picture', values.picture);


    eventServices.createOne(bodyFormData).then(response=>{
      toast.success(response.data.message);
      Navigate("/events");
      

    }).catch(error=>{
      console.log(error);
      toast.error(error.response.data.message);

    })
      

  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 pt-3">
          <h1 className="text-center">Add new event</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            
              <Form>
                <div className="form-group mb-3">
                  <label htmlFor="eventName">Event name:</label>
                  <Field
                    type="text"
                    id="eventName"
                    name="eventName"
                    className="form-control"
                    placeholder="Enter your event name here"

                  />
                  <ErrorMessage
                    name="eventName"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="eventDescription">Event discription:</label>
                  <Field
                    type="text"
                    id="eventDescription"
                    name="eventDescription"
                    className="form-control"
                    placeholder="Enter your event description here"

                  />
                  <ErrorMessage
                    name="eventDescription"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="startDate">Start date:</label>
                  <Field
                    type="text"
                    id="startDate"
                    name="startDate"
                    className="form-control"
                    placeholder="Enter your event start date here"

                  />
                  <ErrorMessage
                    name="startDate"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="endDate">End date:</label>
                  <Field
                    type="text"
                    id="endDate"
                    name="endDate"
                    className="form-control"
                    placeholder="Enter your event end date here"

                  />
                  <ErrorMessage
                    name="endDate"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="startTime">Start time:</label>
                  <Field
                    type="text"
                    id="startTime"
                    name="startTime"
                    className="form-control"
                    placeholder="Enter your event start time here"

                  />
                  <ErrorMessage
                    name="startTime"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="endTime">End time:</label>
                  <Field
                    type="text"
                    id="endTime"
                    name="endTime"
                    className="form-control"
                    placeholder="Enter your event end time here"

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
                    type="text"
                    id="price"
                    name="price"
                    className="form-control"
                    placeholder="Enter your ticket price here"

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
                    type="text"
                    id="location"
                    name="location"
                    className="form-control"
                    placeholder="Enter your event location here"

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
                  <label htmlFor="availebleTicketNumber">Number of tickets:</label>
                  <Field
                    type="number"
                    id="availebleTicketNumber"
                    name="availebleTicketNumber"
                    className="form-control"
                    placeholder="Enter your number of tickets here"

                  />
                  <ErrorMessage
                    name="availebleTicketNumber"
                    component="small"
                    className="text-danger"
                  />
                </div>

                <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                <i className='fa fa-save'></i> Add new event
                </button>
                <Link className="btn btn-link" to="/events"> 
                     Back 
                 </Link>
                </div>
              </Form>
           
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
