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
import { getResumeApi,addDownloadHistoryApi } from '../services/allApiServices'
import html2canvas from "html2canvas";
import jsPDF from 'jspdf';


function ViewResume() {

const {rid}=useParams()
console.log(rid)
const [resumeData, setResumeData] = useState({});

useEffect(() => {
    getResumeData();
}, [rid]);

const getResumeData = async () => {
    const response = await getResumeApi(rid);

    if (response.status === 200) {
        setResumeData(response.data);
    }
};

const handleDownload = async () => {
    const today = new Date();
    const datetime = `${today.toLocaleDateString()}, ${today.toLocaleTimeString()}`;

    const resumeId = rid;
    const preview = document.getElementById("preview");


    console.log(datetime, resumeId, preview);

     // html->image
    // html->shorturl
    
    const canvas = await html2canvas(preview);
    // console.log(canvas);

    // const imgUrl = canvas.toDataURL();
    // console.log(imgUrl);

    // blob means A Blob (Binary Large Object) is an object that stores raw binary data such as images, PDFs, videos, audio, or other files.
    canvas.toBlob((blob)=>{
      const shortUrl = URL.createObjectURL(blob)
      generatePdf(shortUrl)
    })

    // api call
    const generatePdf=async(resumeImage)=>{
    const downloadhistory={resumeId,datetime,picture:resumeImage}
    const response=await addDownloadHistoryApi(downloadhistory)
    console.log(response)
    if(response.status==200){
      const pdf=new jsPDF();
      const imgWidth=pdf.internal.pageSize.getWidth()
      const imgHeight=pdf.internal.pageSize.getHeight()
      pdf.addImage(resumeImage,"PNG",0,0,imgWidth,imgHeight)
      pdf.save(`${resumeData.fullname}.pdf`)
    }
    }
    // html->pdf[using jspf]
    };


  return (
    <div className='container'>
      <h2 className='text-center my-2'>Resume Preview</h2>
      <div className='row '>
        <div className='col-md-2'></div>
        <div className='col-md-8'>
          <div className="d-flex justify-content-center">
            {/* Downlaod */}
            <button className='btn text-primary' onClick={handleDownload}><FaFileDownload style={{fontSize:"35px"}}/></button>
            {/* Edit  */}
            <Edit resume={resumeData}/>
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