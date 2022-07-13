import http from '../utils/HTTP'

const getAllStats = ()=>{
    return  http.get("/dash/stat");
}





const dashService = {
    getAllStats,
   
}

export default  dashService