import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import userServices from '../../../Services/user';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
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
    


    });
    const [currentUser, setCurrentUser] = useState(initialValues);
    const getUser = id => {
        userServices.getOne(id)
            .then(response => {
                setCurrentUser(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    useEffect(() => {
        if (id)
        getUser(id);
    }, [id]);
    const handleInputChange = (event) => {
        console.log(event)
        const { name, value } = event.target;
        setCurrentUser({ ...currentUser, [name]: value });
    };

    const handleSubmit = (values) => {

        const data = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,


        };

        userServices.updateOne(id, data).then(response => {
            console.log(response)


        }).catch(error => {
            console.log(error);
        })
        navigate("/base/tables");

    };




    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 pt-3">
                    <h1 className="text-center">Update User</h1>
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
                                     value={currentUser.firstName}
                                     onChange={handleInputChange} 
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
                                     value={currentUser.lastName}
                                     onChange={handleInputChange} 
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
                                     value={currentUser.email}
                                     onChange={handleInputChange} 
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
                                        Update
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
export default UpdateUser;