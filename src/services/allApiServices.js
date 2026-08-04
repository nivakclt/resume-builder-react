import apiService from "../api/apiService";

// add new resume
export const addResumeApi=async(data)=>{
return await apiService("POST","/allResumes",data)
}

// get resume object with id
export const getResumeApi=async(id)=>{
    return await apiService("GET", `/allResumes/${id}`, {});
}

// add download details
export const addDownloadApi=async(data)=>{
    return await apiService("POST",'/downloads',data)
}