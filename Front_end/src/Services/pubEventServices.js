import http3 from '../utils/HTTPPub'

const getAllEventsP = ()=>{
    return  http3.get("/eventspub");
}
const getOneEvnetP = (id)=>{
  return  http3.get(`/eventspub/${id}`);
}
const eventServicePub = {
    getOneEvnetP,
    getAllEventsP,  
}

export default  eventServicePub;