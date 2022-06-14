import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom'
import auth from '../../../Services/auth';
export default function ForgotPassword() {
    const validationSchema = Yup.object().shape({
        
        email: Yup.string()
          .email("invalide email")
          .required("Email is required"),
        
        
      });
      
      const initialValues = {
      
        email: "",
       
        
      };
      
      const handleSubmit = (values) => {
        console.log(values)
        const data = {
          
            email:values.email,
            
          };
      
          auth.forgot(data).then(response=>{
            console.log(response)
            
      
          }).catch(error=>{
            console.log(error);
          })
      
      };



  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 pt-3">
          <h1 className="text-center">Forgot Password</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ resetForm }) => (
              <Form>
               
                <div className="form-group mb-3">
                  <label htmlFor="email">Email:</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="email"
                    component="small"
                    className="text-danger"
                  />
                </div>
               
                
                <div className="form-group d-flex justify-content-end gap-3">
                  <button type="submit" className="btn btn-primary">
                    Send reset link
                  </button>
                  <Link to="/login">
                      <button  className="btn btn-primary" >
                        Sign In 
                      </button>
                    </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
