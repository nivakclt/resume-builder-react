import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import Preview from '../components/Preview';
import Edit from '../components/Edit';
import { getResumeApi, addDownloadHistoryApi } from '../services/allApiServices';
import { useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function ViewResume() {

  const [resumeData, setResumeData] = useState({})

  const { rid } = useParams()
  console.log(rid)

  useEffect(() => {
    getResumeData()
  }, [])

  const getResumeData = async () => {
    const response = await getResumeApi(rid)
    console.log(response)
    if (response.status === 200) {
      setResumeData(response.data)
    }
  }


  const handleDownload = async () => {
    //resume picture,date & time,id
    const today = new Date();
    const datetime = `${today.toLocaleDateString()},${today.toLocaleTimeString()}`
    const resumeId = rid
    const preview = document.getElementById("preview")
    console.log(datetime, resumeId, preview)
    //html->image
    //html->image-shortUrl
    const canvas = await html2canvas(preview)
    // const imgUrl=canvas.toDataURL()
    // console.log(imgUrl)

    canvas.toBlob((blob) => {
      const shortUrl = URL.createObjectURL(blob)
      generatePdf(shortUrl)
    })

    //api call
    const generatePdf = async(resumeImage) => {
      const downloadhistory = { resumeId, datetime, picture: resumeImage }
      const response = await addDownloadHistoryApi(downloadhistory)
      console.log(response)
      if(response.status==201){
        const pdf=new jsPDF();
        const imgWidth=pdf.internal.pageSize.getWidth()
        const imgHeight=pdf.internal.pageSize.getHeight()
        pdf.addImage(resumeImage,"PNG",0,0,imgWidth,imgHeight)
        pdf.save(`${resumeData.fullname}.pdf`)
      }
      //html->pdf[jspdf]
    }

  }

  return (
    <>
      <div className='container'>
        <h2 className="text-center my-2">Resume Preview</h2>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className='d-flex justify-content-center'>
              {/* Download */}
              <button onClick={handleDownload} className='btn text-primary'><FaFileDownload style={{ fontSize: '35px' }} /></button>
              {/* Edit */}
              <Edit resume={resumeData} setResumeData={setResumeData}/>
              {/* Download history */}
              <Link className='btn text-secondary' to={'/history'}><FaHistory style={{ fontSize: '35px' }} /></Link>
              {/* Back-form */}
              <Link className='btn' to={'/form'}><FaBackward style={{ fontSize: '35px' }} /></Link>
            </div>
            <div id="preview">
              <Preview resume={resumeData}  />
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  )
}

export default ViewResume