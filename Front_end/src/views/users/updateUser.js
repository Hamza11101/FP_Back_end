import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import userServices from '../../Services/user';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { toast } from 'react-toastify';
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
const UpdateUser = props => {

    const { id } = useParams();
    let navigate = useNavigate();

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
    };
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



    });
    const [currentUser, setCurrentUser] = useState(initialValues);
    const getUser = id => {
        userServices.getOne(id)
            .then(response => {
                const fields = ['firstName', 'lastName','email'];
                fields.forEach(field => initialValues[field] = response.data[field]);

                setCurrentUser(response.data);
                
            })
            .catch(e => {
                console.log(e);
            });
    };
    useEffect(() => {
        if (id)
            getUser(id);
    }, [id]);
  

    const handleSubmit = (values) => {

        const data = {
            firstName: values.firstName,
            lastName: values.lastName,
            password: values.password,
            email: values.email,
            role: values.role,
    };

        userServices.updateOne(id, data).then(response => {
            toast.success(response.data.message);
            navigate("/users");


        }).catch(error => {
            console.log(error);
      toast.error(error.response.data.message);

        })
       
    };




    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 pt-3">
                    <h1 className="text-center">Update user</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => handleSubmit(values)}
                    >
                       
                            <Form>
                                <div className="form-group mb-3">
                                    <label htmlFor="firstName">First Name:</label>
                                    <Field
                                        
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="form-control"
                                        placeholder="Enter your new first name here"


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
                                        placeholder="Enter your new last name here"

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
                                        placeholder="Enter your new email here"

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
                                        placeholder="Enter your new password here"

                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                <div id="my-radio-group"  className="d-grid gap-2">Role:</div>
                                <div role="group"  className="d-grid gap-2 " >
                                    <label>
                                        <Field


                                            type="radio"

                                            id="role"

                                            name="role"
                                            value="user" />
                                        User
                                    </label>
                                    <label  >
                                        <Field type="radio"
                                            id="role"
                                           
                                            name="role"
                                            value="admin" />
                                        Admin
                                    </label>

                                </div>

                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">
                                    <i className='fa fa-save'></i> Update
                                    </button>
                                    <Link className="btn btn-link" to="/users">
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
export default UpdateUser;