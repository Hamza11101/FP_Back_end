import React, { useState, useEffect }  from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom'
import eventServices from "../../Services/eventServices";

const UpdateEvent = () => {
    const { id } = useParams();
  var Navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    eventName: Yup.string()
      
      .required("Event name is required."),
      eventDescription: Yup.string()
     
      .required("Event discription is required."),
 
      startDate: Yup.date()
      .required("Start date is required.")
      ,
      endDate: Yup.date()
      .required("End date is required.")
      ,
      startTime: Yup.date()
      .required("Start time is required.")
      ,
      endTime: Yup.date()
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


    eventServices.updateOne(id,bodyFormData).then(response=>{
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
          <h1 className="text-center">Update event</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            
              <Form>
                <div className="form-group mb-3">
                  <label htmlFor="eventName">Event name:</label>
                  <Field
                  value={currentEvent.eventName}
                  onChange={handleInputChange} 
                    type="text"
                    id="eventName"
                    name="eventName"
                    className="form-control"
                    placeholder="Enter your new event name here"

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
                  value={currentEvent.eventDescription}
                  onChange={handleInputChange}
                    type="text"
                    id="eventDescription"
                    name="eventDescription"
                    className="form-control"
                    placeholder="Enter your new event discription here"

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
                  value={currentEvent.startDate}
                  onChange={handleInputChange}
                    type="data"
                    id="startDate"
                    name="startDate"
                    className="form-control"
                    placeholder="Enter your new event start date here"

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
                   value={currentEvent.endDate}
                   onChange={handleInputChange}
                    type="data"
                    id="endDate"
                    name="endDate"
                    className="form-control"
                    placeholder="Enter your new event end date here"

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
                  value={currentEvent.startTime}
                  onChange={handleInputChange}
                    type="data"
                    id="startTime"
                    name="startTime"
                    className="form-control"
                    placeholder="Enter your new event start time here"

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
                  value={currentEvent.endTime}
                  onChange={handleInputChange}
                    type="data"
                    id="endTime"
                    name="endTime"
                    className="form-control"
                    placeholder="Enter your new event end time here"

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
                    placeholder="Enter your new price here"

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
                    placeholder="Enter your new event location here"

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
                  value={currentEvent.availebleTicketNumber}
                  onChange={handleInputChange}
                    type="number"
                    id="availebleTicketNumber"
                    name="availebleTicketNumber"
                    className="form-control"
                    placeholder="Enter your new number of tickets here"

                  />
                  <ErrorMessage
                    name="availebleTicketNumber"
                    component="small"
                    className="text-danger"
                  />
                </div>

                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">
                                    <i className='fa fa-save'></i> Update
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

export default UpdateEvent;
