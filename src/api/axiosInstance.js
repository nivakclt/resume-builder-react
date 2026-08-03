import axios from "axios";
import axiosInstance from "./axiosInstance";

const axiosInstance=axios.create({
baseURL: "http://localhost:3000",
timeout:5000    
})

//response interceptor

axiosInstance.interceptors.response.use((response)=>{
console. log("Response recieved !! ")
return response
},

(error)=>{
if(error.response) {
const status=error.response.status
if(status === 401){
console.log("UnAuthorised Access - Redirect to Login")
}
else if(status === 404){
console.log("API not found !! ")
}
else if(status === 500){
console.log("Server Error !! ")
}
else if(error.request){
console.log("No response from Server !! ")
}
else{
console.log("Error:"+error.message)
}
return Promise.reject(error)
}

})

export default axiosInstance