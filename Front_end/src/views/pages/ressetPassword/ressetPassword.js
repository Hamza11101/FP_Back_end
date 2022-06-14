import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import auth from '../../../Services/auth';
export default function ressetPassword() {
    const validationSchema = Yup.object().shape({
        
        password: Yup.string()
          .required("Password is required")
          .min(8, "Too short")
          .max(50, "Too long"),
        confirmPassword: Yup.string()
          .required("Confirmation is required")
          .oneOf(
            [Yup.ref("password"), null],
            "not the same"
          ),
        
      });
      
      const initialValues = {
       
        password: "",
        confirmPassword: "",
        
      };
      
      const handleSubmit = (values) => {
        const data = {
            
            password:values.password
          };
      
          auth.reset(data).then(response=>{
            console.log(response)
            
      
          }).catch(error=>{
            console.log(error);
          })
        console.log(values)
     
      };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 pt-3">
          <h1 className="text-center">Create your new password</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ resetForm }) => (
              <Form>
                
                <div className="form-group mb-3">
                  <label htmlFor="password">New password:</label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="confirmPassword">
                    Confirm your password:
                  </label>
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="small"
                    className="text-danger"
                  />
                </div>
                
                <div className="form-group d-flex justify-content-end gap-3">
                  <button type="submit" className="btn btn-primary">
                    Done
                  </button>
                  
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}