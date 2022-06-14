import React,{ useState, useEffect }  from 'react'
import "bootstrap/dist/css/bootstrap.css";
import tagService from '../../../Services/tagServices'
import { Link } from "react-router-dom";
 

 


const TableTag = ()=> {
  const [tags, setTags] = useState([]);
//   const [currentTag, setCurrentTag] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(-1);
  // const [searchName, setSearchName] = useState("");
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");

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
    // setCurrentTag(null);
    // setCurrentIndex(-1);
  };

//   const setActiveTag = (tutorial, index) => {
//     setCurrentTag(tutorial);
//     setCurrentIndex(index);
//   };

  const removeOneTag = (e,id) => {
    tagService.removeOne(id)
      .then(response => {
        // console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };
  // const selectTag=(e,id)=>{

  //   // let item=tags[id];
  //   setName(tags.name)
  //       setDescription(tags.description)
  // }
  
  // const updateTag = (data) => {
  //   var data = {
      
  //     name:name,
  //     description: description,
      
  //   };
  //   tagService.updateOne(data)
  //     .then(response => {
  //       console.log(response.data);
       
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
      
  // };
  // const findByName = () => {
  //   tagService.getOne(searchName)
  //     .then(response => {
  //       setTags(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };







  return (


<div className="list row">
     
      <div className="col-md-6">
        <h4>Tags List</h4>
        <div>
     <table className="table">
   <thead className="thead-dark">
     <tr>
       <th scope="col">#</th>
       <th scope="col">Tag Name</th>
       <th scope="col">Description</th>
      
       <th scope="col">Delete Tag</th>
       <th scope="col">Update Tag</th>
       
      
     </tr>
  </thead>
  {tags &&
            tags.map((tag, index) => (
 
            

             <tbody key={tag._id}>
             <tr>
              
               <th scope="row">{index}</th>
               <td>{tag.name}</td>
               <td>{tag.description}</td>
              
               <td><button className='btn btn-danger' onClick={(e) =>{removeOneTag(e,tag._id)}}>Delete</button> </td>
               <td> <Link to={`/updatetag/${tag._id}`}> <button   className='btn btn-success' >Update</button></Link></td>

             </tr>
      
           </tbody>
         )


   )}

 
 </table>
 <div className="d-grid gap-2">
   <Link to="/addtag">
   <button className="btn btn-success" type="button">Add Tag</button>
   </Link>
 </div>


 </div>

      

       
      </div>
     
     
    </div>
  )
    
  
}

export default TableTag
