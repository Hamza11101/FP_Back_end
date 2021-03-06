import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import userService from '../../Services/user'
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import confirm from '../../Services/confirm'
import AuthService from '../../Services/auth'

const Tables = () => {
  const [users, setUsers] = useState([]);
  const [authId,setAuthId] = useState(AuthService.getAuthUserId)
  useEffect(() => {
    retrieveUsers();
  }, []);

  

  const retrieveUsers = () => {
    userService.getAllusers()
      .then(response => {
        setUsers(response.data);
        
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveUsers();
  };

  const removeOneUser = (e,id) => {
    confirm().then((result)=>{
      if (result.isConfirmed) {
        userService.removeOne(id)
          .then(response => {
            toast.success(response.data.message);
            refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      }
    })
  };

  return (
    <div className="row">

      <div className="col-md-12">
        <h4>Users list</h4>
        <div>
        <div className="d-grid gap-2">
            <Link to="/users/create">
              <button className="btn btn-success" type="button">
              <i className='fa fa-plus'></i> Add new user</button>
            </Link>
          </div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">E-mail</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            {users &&
              users.map((user, index) => (
                <tbody key={user._id}>
                  <tr>
                    <th scope="row">{index+1}</th>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>
                      <button className='btn btn-danger me-1' onClick={(e) => { removeOneUser(e,user._id)}}
                      disabled={authId === user._id}>
                        <i className='fa fa-trash'></i> Delete
                        </button>
                      <Link to={`/users/update/${user._id}`} className='btn btn-success'>
                      <i className='fa fa-edit'></i> Update</Link>
                    </td>
                  </tr>
                </tbody>
              )
              )}


          </table>
  </div>

      </div>

    </div>
  )


  
    
  
}

export default Tables
