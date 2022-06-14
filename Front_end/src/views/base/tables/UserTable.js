import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import userService from '../../../Services/user'
import { Link } from "react-router-dom";





const Tables = () => {
  const [users, setUsers] = useState([]);
  // const [currentUser, setCurrentUser] = useState(null);
  // const [currentIndex, setCurrentIndex] = useState(-1);
  // const [searchName, setSearchName] = useState("");

  useEffect(() => {
    retrieveUsers();
  }, []);

  

  const retrieveUsers = () => {
    userService.getAllusers()
      .then(response => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveUsers();
    // setCurrentUser(null);
    // setCurrentIndex(-1);
  };

  // const setActiveUser = (tutorial, index) => {
  //   setCurrentUser(tutorial);
  //   setCurrentIndex(index);
  // };

  const removeOneUser = (e,id) => {
    userService.removeOne(id)
      .then(response => {
        // console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  






  return (
    <div className="list row">

      <div className="col-md-6">
        <h4>Users List</h4>
        <div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">E-mail</th>
               
                 
                <th scope="col">Delete User</th>
                <th scope="col">Update User</th>


              </tr>
            </thead>
            {users &&
              users.map((user, index) => (



                <tbody key={user._id}>
                  <tr>

                    <th scope="row">{index}</th>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    
                    <td><button className='btn btn-danger' onClick={(e) => { removeOneUser(e,user._id)}}>Delete</button> </td>
                    <td><Link to={`/updateuser/${user._id}`}><button className='btn btn-success' >Update</button></Link></td>

                  </tr>

                </tbody>
              )


              )}


          </table>
          <div className="d-grid gap-2">
            <Link to="/adduser">
              <button className="btn btn-success" type="button">Add User</button>
            </Link>
          </div>


        </div>




      </div>

    </div>
  )


  
    
  
}

export default Tables
