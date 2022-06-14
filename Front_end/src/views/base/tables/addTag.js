import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
// import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom';
import tagService from "src/Services/tagServices";

const AddTag = () => {
  

    var Navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "Too short")
      .max(50, "Too long!")
      .required("Tag Name is required"),
    description: Yup.string()
      .min(2, "Too short")
      .max(10000, "Too long!")
      .required("Description is required "),
   
    
  });
  
  const initialValues = {
    name: "",
    description: "",
    
   
    
  };
  
  const handleSubmit = (values) => {
    const data = {
        name:values.name,
        description:values.description,
      
    };

    tagService.createOne(data).then(response=>{
      console.log(response)
      

    }).catch(error=>{
      console.log(error);
    })
       Navigate("/tagtable");

  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 pt-3">
          <h1 className="text-center">Add Tag</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ resetForm }) => (
              <Form>
                <div className="form-group mb-3">
                  <label htmlFor="name">Name:</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="name"
                    component="small"
                    className="text-danger"
                  />
                </div>
               
                <div className="form-group mb-3">
                  <label htmlFor="description">Description:</label>
                  <Field
                    type="textarea"
                    id="description"
                    name="description"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="description"
                    component="small"
                    className="text-danger"
                  />
                </div>
               
                
                <div className="form-group d-flex justify-content-end gap-3">
                  <button type="submit" className="btn btn-primary">
                    Add a Tag
                  </button>
                  
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddTag;