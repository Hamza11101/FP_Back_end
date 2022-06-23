import http from '../utils/HTTP'
import http2 from '../utils/HTTPFormData'

const getAllEvents = ()=>{
    return  http.get("/events");
}
const getAllTags = ()=>{
  return  http.get("/newtags");
}

const updateOne = (id, data) => {
    return http2.put(`/events/${id}`, data);
  };

  const removeOne = id => {
    return http.delete(`/events/${id}`);
  };
const getOne = id => {
    return http.get(`/events/${id}`);
  };
  
  const createOne = data => {
    return http2.post("/events", data);
  };

const eventService = {
    getAllEvents,
    updateOne,
    removeOne,
    getOne,
    createOne,
    getAllTags
}

export default  eventService