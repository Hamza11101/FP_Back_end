import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';
import userService from "src/Services/user";
const AddUser = () => {
  var Navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(5, "Too short.")
      .max(50, "Too long.")
      .required("First name is required."),
    lastName: Yup.string()
      .min(2, "Too short.")
      .max(10, "Too long.")
      .required("Last name is required."),
    email: Yup.string()
      .email("Invalid email.")
      .required("Email is required."),
    password: Yup.string()
      .required("Password is required.")
      .min(8, "Too short.")
      .max(50, "Too long."),
    confirmPassword: Yup.string()
      .required("Password confirmation is required.")
      .oneOf(
        [Yup.ref("password"), null],
        "not the same passwords"
      ),
      role:Yup.string().required('Add a role.')
    
  });
  
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  };
  
  const handleSubmit = (values) => {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
       email: values.email,
       password: values.password,
        role:values.role
  };
    

    userService.createOne(data).then(response=>{
      toast.success(response.data.message);
      Navigate("/base/tables");

    }).catch(error=>{
      console.log(error);
      toast.error(error.response.data.message);
    })
     

  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 pt-3">
          <h1 className="text-center">Add new user</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ resetForm }) => (
              <Form>
                <div className="form-group mb-3">
                  <label htmlFor="firstName">First name:</label>
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-control"
                    placeholder="Enter your first name here"

                  />
                  <ErrorMessage
                    name="firstName"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="lastName">Last name:</label>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    placeholder="Enter your last name here"

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
                <div className="form-group mb-3">
                  <label htmlFor="confirmPassword">
                    Confirm your password:
                  </label>
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Enter your confirm password here"

                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div id="my-radio-group">Role</div>
          <div role="group" >
            <label>
              <Field type="radio"
          id="role"
         
          name="role"
          value="user" />
              User
            </label>
            <label>
              <Field type="radio"
          id="role"
          
          name="role"
          value="admin" />
              Admin
            </label>
            
          </div>
                
                <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                <i className='fa fa-save'></i> Add new user
                </button>
                <Link className="btn btn-link" to="/base/tables"> 
                     Back 
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

export default AddUser;
