import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import tagService from '../../Services/tagServices'
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import confirm from '../../Services/confirm'

const TableTag = () => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    retrieveTags();
  }, []);

  const retrieveTags = () => {
    tagService.getAllTags()
      .then(response => {
        setTags(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveTags();
  };

  const removeOneTag = (e, id) => {
    confirm().then((result) => {
      if (result.isConfirmed) {
        tagService.removeOne(id)
          .then(response => {
            toast.success(response.data.message);
            refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      };
    })
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <h4>Tags list</h4>
        <div>
        <div className="d-grid gap-2">
            <Link to="/tags/create">
            <button className="btn btn-success" type="button"> <i className='fa fa-plus'></i> Add new tag</button>
            </Link>
          </div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tag Name</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            {tags &&
              tags.map((tag, index) => (
                <tbody key={tag._id}>
                  <tr>
                    <th scope="row">{index+1}</th>
                    <td>{tag.name}</td>
                    <td>{tag.description}</td>
                    <td>
                      <button className='btn btn-danger me-1' onClick={(e) => { removeOneTag(e, tag._id) }}>
                         <i className='fa fa-trash'></i> Delete</button>
                    <Link className='btn btn-success' to={`/tags/update/${tag._id}`}> 
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

export default TableTag
