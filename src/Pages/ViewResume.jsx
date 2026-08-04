import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { FaFileDownload } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { FaHistory } from 'react-icons/fa'
import { FaBackward } from 'react-icons/fa'
import Preview from '../Components/Preview'
import Edit from '../Components/Edit'
import { useParams } from 'react-router-dom'
import { getResumeApi } from '../services/allApiServices'


function ViewResume() {

  const {rid}=useParams()
console.log(rid)

useEffect(() => {
    getResumeData();
}, [rid]);

const getResumeData=async()=>{
const response=await getResumeApi(rid)
console.log(response)
if(response.status===200){
  setResumeData(response.data)
}

const handleDownload=async ()=>{
  // resume pic,date and time,id
   const today= new Date();
   const datetime=`${today.toLocaleDateString()},${today.toLocaleDateString()}`
   const resumeId=rid
   const preview=document.getElementById("preview")
   console.log(datetime,resumeId,preview)
  //  html to img
  const canvas=await htmlcanvas(preview)
  console.log(canvas)
  const imgUrl=canvas.toDataUrl()
  console.log(imgUrl)
}
}


  return (
    <div className='container'>
      <h2 className='text-center my-2'>Resume Preview</h2>
      <div className='row '>
        <div className='col-md-2'></div>
        <div className='col-md-8'>
          <div className="d-flex justify-content-center">
            {/* Downlaod */}
            <button className='btn text-primary'><FaFileDownload style={{fontSize:"35px"}}/></button>
            {/* Edit  */}
            <Edit/>
            {/*   preview */}
            <Link className='btn text-secondary' to={"/history"}><FaHistory style={{fontSize:"35px"}}/></Link>
            {/*  backform */}
            <Link className='btn  text-primary' to={'/form'}><FaBackward style={{fontSize:"35px"}}/></Link>
          </div>
          <Preview resume={resumeData}/>
        </div>
        <div className='col-md-2'></div>
      </div>
    </div>
  )
}

export default ViewResume