import apiService from "../api/apiService";

// add new resume
 export const addResumeApi = async (data) => {
   return await apiService("POST","/allResumes",data);
}


// get resume object by id
export const getResumeApi = async (id) => {
    return await apiService("GET",`/allResumes/${id}`);
}

// add download details

export const addDownloadHistoryApi = async (data) => {
    return await apiService("POST","/Downloads",data);
}

// update
export const updateResumeApi = async (id, data) => {
    return await apiService("PUT", `/allResumes/${id}`, data);
}

// get all downlaod history
export const getAllHistoryApi= async ()=>{
    return await apiService("GET",'/Downloads/',{})
}

