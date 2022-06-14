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
      .email("invalide email")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Too short")
      .max(50, "Too long"),
  
  });
  
  const initialValues = {
  
    email: "",
    password: "",
  
    
  };
  
  const  handleSubmit = (values) => {
    const data = {
      email:values.email,
      password:values.password
    };

    auth.login(data).then(response=>{
      console.log(response)
      localStorage.setItem('token', response.data.token)

    }).catch(error=>{
      console.log(error);
    })
   
  
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
             
              
              <div className="form-group d-flex justify-content-end gap-3">
                <button type="submit" className="btn btn-primary">
                  Sign In
                </button>
              
                  <Link to="/register">
                    <button  className="btn btn-primary" >
                      Register 
                    </button>
                  </Link>
              </div>
              <Link to="/forgotpassword">
                    
                    Forgot PassWord 
                  
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
