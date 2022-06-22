import http3 from '../utils/HTTPPub'

const createReserv = (data)=>{
    return  http3.post("/reservation", data);
}
const reserService = {
    createReserv,
}

export default  reserService;