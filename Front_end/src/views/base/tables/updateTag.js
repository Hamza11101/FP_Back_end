import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import tagServices from '../../../Services/tagServices';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
const UpdateTag = props => {
 
  const {id}= useParams();
  let navigate = useNavigate();

  const initialValues = {
    name: "",
    description: "", 
  };
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
  const [currentTag, setCurrentTag] = useState(initialValues);
  const getTag = id => {
    tagServices.getOne(id)
      .then(response => {
        setCurrentTag(response.data);
        // console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (id)
    getTag(id);
  }, [id]);
  const handleInputChange = (event) => {
    
    const { name, value } = event.target;
    // console.log({ name, value });
   
    setCurrentTag({ ...currentTag, [name]: value });
   
  };
  
  const handleSubmit = (values) => {
    
    const data = {
        name:values.name,
        description:values.description,
      
    };

    tagServices.updateOne(id,data).then(response=>{
      // console.log(response)
      

    }).catch(error=>{
      console.log(error);
    })
    navigate("/tagtable");

  };

  

  
  return (
    <div className="container">
      <div className="row">
     
        <div className="col-md-6 offset-md-3 pt-3">
          <h1 className="text-center">Update Tag</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
           
          >
            
              <Form>
                <div className="form-group mb-3">
                  <label htmlFor="name">Name:</label>
                  <Field
                  
                    value={currentTag.name}
                    onChange={handleInputChange} 
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
                   value={currentTag.description}
                   onChange={handleInputChange}
                    type="text"
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
                    Update
                  </button>
                  
                </div>
              </Form>
            
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default UpdateTag;