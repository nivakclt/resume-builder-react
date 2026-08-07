import React from 'react'
import { IoDocuments } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';


function ResumeSteps() {
  return (
    <>
      <div className='container-fluid p-3' style={{ minHeight: '100vh' }}>
        <h1 className='text-center mb-5 mt-2'>Create an ATS Friendly Resume in Minutes with AI</h1>
        <div className='row justify-content-around h-50'>
          {/* card1 */}
          <div className='col-md-6 border border-2 shadow bg-light p-3' style={{textAlign:'center',width:'20rem'}}>
            <h2><IoDocuments className='text-primary'/></h2>
            <h2>Add Your Information</h2>
            <h4>
             Our AI will generate Skills & Summary
            </h4>
            <h4 className='fw-bold'>Step1</h4>
          </div>
          {/* card2 */}
          <div className='col-md-6 border border-2 shadow bg-light p-3' style={{textAlign:'center',width:'20rem'}}>
            <h2><FaFileDownload className='text-danger'/></h2>
            <h2>Download Your Resume</h2>
            <h4>
              Download And Start Applying
            </h4>
            <h4 className='fw-bold'>Step 2</h4>
          </div>
        </div>
        <div className='text-center mt-4'>
          <Link className='btn btn-primary' to={'/form'}>Let's Start</Link>
        </div>
      </div>
    </>
  )
}

export default ResumeSteps