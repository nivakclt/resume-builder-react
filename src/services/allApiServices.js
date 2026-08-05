import apiServices from "../api/apiService";

// add new resume
 export const addResumeApi = async (data) => {
    return await apiServices("POST","/allResumes",data);
}


// get resume object by id
export const getResumeApi = async (id) => {
    return await apiServices("GET",`/allResumes/${id}`);
}

// add download details

export const addDownloadHistoryApi = async (data) => {
    return await apiServices("POST","/Download",data);
}

