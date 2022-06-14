import http from '../utils/HTTP'

const login = (data)=>{
    return  http.post("/login", data);
}

const register = (data)=>{
    return  http.post("/register", data);
}

const forgot = (data)=>{
    return http.post('/forgotpassword',data);
}

const reset = (data)=>{
    return http.post('/resetpassword',data);
}

const auth = {
    login,
    register,
    forgot,
    reset
}

export default  auth