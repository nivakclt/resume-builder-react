import apiService from "../api/apiService"


//add new resume
export const addResumeApi=async(data)=>{
   return await apiService("POST","/allResumes",data)
}

//get resume object with id
export const getResumeApi=async(id)=>{
   return await apiService("GET",`/allResumes/${id}`,{})
}

//add download details
export const addDownloadHistoryApi=async(data)=>{
   return await apiService("POST",'/downloads',data)
}

//update resume
export const updateResumeApi=async(id,data)=>{
   return await apiService("PUT",`/allResumes/${id}`,data)
}

//get all download history
export const getAllHistoryApi=async()=>{
   return await apiService("GET",'/downloads',{})
}

//delete download history by id
export const deleteHistroyById=async(id)=>{
   return await apiService("DELETE",`/downloads/${id}`,{})
}