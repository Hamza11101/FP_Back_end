import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom'
import eventServices from "../../Services/eventServices";
import AsyncSelect from 'react-select';


const UpdateEvent = () => {
  const { id } = useParams();
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
    availebleTicketNumber: 0,
  };
  const [tags, setTags] = useState([]);
  useEffect(() => {
    retrieveTags();
  }, []);

  const retrieveTags = () => {
    eventServices.getAllTags()
      .then(response => {
        setTags(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const [currentEvent, setCurrentEvent] = useState(initialValues);
  const [Options, setOptions] = useState([])
  const getEvent = id => {
    eventServices.getOne(id)
      .then(response => {
        const fields = ['eventName', 'eventDescription', 'startDate', 'endDate', 'startTime', 'endTime', 'price', 'location', 'availebleTicketNumber', 'picture'];
        fields.forEach(field => initialValues[field] = response.data[field]);
        setCurrentEvent(response.data);
        const selectedTags = response.data.tags.map(tag => {
          return { label: tag.name, value: tag._id }
        })
        setOptions(selectedTags)

      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (id)
      getEvent(id);
  }, [id]);
  const handleChange = (selectedOption) => {
    setOptions(selectedOption)
  }
  const [selectedFile, setSelectedFile] = useState(null)
  const handelPicChange = (e) => {
    if (e.target.files.length > 0) {
      const selectedFile = e.target.files[0]
      setSelectedFile(selectedFile)
    }
  }

  const handleSubmit = (values) => {

    var bodyFormData = new FormData();
    bodyFormData.append('eventName', values.eventName);
    bodyFormData.append('eventDescription', values.eventDescription);
    bodyFormData.append('startDate', values.startDate);
    bodyFormData.append('endDate', values.endDate);
    bodyFormData.append('endTime', values.endTime);
    bodyFormData.append('price', values.price);
    bodyFormData.append('location', values.location);
    if (selectedFile != null) {
      bodyFormData.append('picture', selectedFile);
    }
    bodyFormData.append('availebleTicketNumber', values.availebleTicketNumber);
    let selectedtagsIDs = Options.map(item => item.value);
    bodyFormData.append('tags', JSON.stringify(selectedtagsIDs));


    eventServices.updateOne(id, bodyFormData).then(response => {
      toast.success(response.data.message);

      Navigate("/events");


    }).catch(error => {
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
                <input type={"file"}
                  id="picture"
                  name="picture"
                  className="form-control"
                  onChange={(e) => handelPicChange(e)} />
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
                  placeholder="Enter your new number of tickets here"

                />
                <ErrorMessage
                  name="availebleTicketNumber"
                  component="small"
                  className="text-danger"
                />
              </div>
              <AsyncSelect
                isMulti
                name="Tags"
                options={tags}
                value={Options}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(selectedOption) => { handleChange(selectedOption) }}
              />

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
