import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div>
            <footer className="text-center text-lg-start bg-light text-dark">

                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >

                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href="https://www.facebook.com/FivePoints5P/" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/fivepoints.tech/" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/fivepoints-the-talent-pool/?originalSubdomain=tn" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Hamza11101" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>

                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Five Points
                                </h6>
                                <p>
                                    Add your event and book an event.
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <Link to="/login" className="text-reset">Log in</Link>
                                </p>
                                <p>
                                    <Link to="/register" className="text-reset">Register</Link>
                                </p>
                                <p>
                                    <Link to="/eventslist" className="text-reset">Events</Link>
                                </p>

                            </div>



                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i className="fas fa-home me-3"></i>Tunisia</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    hamzaboubaker21@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> (+216)111 111 111</p>

                            </div>

                        </div>

                    </div>
                </section>



                <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    © 2022 Copyright:All rights reserved
                </div>

            </footer>
        </div>
    )
}
