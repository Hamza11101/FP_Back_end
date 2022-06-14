import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom';
import auth from '../../../Services/auth';
const Register = () => {
  var Navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(5, "Too short")
      .max(50, "Too long!")
      .required("First Name is required"),
    lastName: Yup.string()
      .min(2, "Too short")
      .max(10, "Too long!")
      .required("Last Name is required "),
    email: Yup.string()
      .email("invalide email")
      .required("Email is required"),
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
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    
  };
  
  const handleSubmit = (values) => {
    auth.register(values).then(response=>{
      Navigate("/login");
    }).catch(error=>{
      console.log(error);
    })

  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 pt-3">
          <h1 className="text-center">Register</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ resetForm }) => (
              <Form>
                <div className="form-group mb-3">
                  <label htmlFor="firstName">First Name:</label>
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="lastName">Last Name:</label>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="small"
                    className="text-danger"
                  />
                </div>
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
                <div className="form-group mb-3">
                  <label htmlFor="password">Password:</label>
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
                    create your account
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
  );
};

export default Register;
