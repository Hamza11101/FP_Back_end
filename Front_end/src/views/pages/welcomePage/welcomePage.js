import React from 'react';
import WelcomImg from '../../../assets/images/img.png'
import { Link } from 'react-router-dom';
import photo from '../../../assets/images/event2.jpg'
const welcomePage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.fivepoints.fr/" rel="noreferrer" target="_blank">FivePoints</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/welcome">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" target="_blank" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/eventslist">Events</Link>
              </li>

            </ul>
            <form className="d-flex">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/signin">Sign in</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={WelcomImg} alt='eventImg' className="d-block w-100 h-25" />
          </div>
        </div>
      </div>
      <div className="card">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body border border-5 border-end-0 border-top-0 border-danger border-bottom-0">
    <h5 className="card-title text-danger">Covid-19</h5>
    <p className="card-text">We partnered with risk management and health experts to empower event creators to thoughtfully consider potential safety and security risks at your event.</p>
  </div>
</div>
<div className="col-xs-1" align="center">
<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={WelcomImg} className="d-block w-25 h-25" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={photo} className="d-block w-25 h-25" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={WelcomImg} className="d-block w-25 h-25" alt="..."/>
    </div>
  </div>
</div>
</div>
    
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



  <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    © 2022 Copyright:All rights reserved
  </div>

</footer>

    </div>
  )
}




export default welcomePage;
