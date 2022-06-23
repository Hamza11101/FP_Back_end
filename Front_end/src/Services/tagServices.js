import http from '../utils/HTTP'

const getAllTags = ()=>{
    return  http.get("/tags");
}

const updateOne = (id, data) => {
    return http.put(`/tags/${id}`, data);
  };

  const removeOne = id => {
    return http.delete(`/tags/${id}`);
  };
const getOne = id => {
    return http.get(`/tags/${id}`);
  };
  
  const createOne = data => {
    return http.post("/tags", data);
  };

const tagService = {
    getAllTags,
    updateOne,
    removeOne,
    getOne,
    createOne
}

export default  tagService