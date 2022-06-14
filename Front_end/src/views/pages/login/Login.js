import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
// import { History } from 'history';
import auth from '../../../Services/auth';

// const history = History
const Login = () => {
  const validationSchema = Yup.object().shape({
    
    email: Yup.string()
      .email("Invalide email.")
      .required("Email is required."),
    password: Yup.string()
      .required("Password is required.")
      .min(8, "Too short.")
      .max(50, "Too long."),
  
  });
  
  const initialValues = {
    email: "",
    password: ""
  };
  
  const handleSubmit = (values) => {
    auth.login(values).then(response=>{
      localStorage.setItem('token', response.data.token)
    }).catch(error=>{
      console.log(error);
    });
};
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 pt-3">
        <h1 className="text-center">Sign In</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ resetForm }) =>   (
            <Form>
             
              <div className="form-group mb-3">
                <label htmlFor="email">Email:</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email address here"

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
                  placeholder="Enter your password here"
                />
                <ErrorMessage
                  name="password"
                  component="small"
                  className="text-danger"
                />
              </div>
             
              
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
                  <Link to="/register" className="btn btn-success"> 
                      Create your account  
                  </Link>
              </div>
              <Link to="/forgotpassword">
                    Forgot your password ?
                </Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </div>
  )
}

export default Login
