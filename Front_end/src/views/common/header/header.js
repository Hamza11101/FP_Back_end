import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
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
    </div>
  )
}
