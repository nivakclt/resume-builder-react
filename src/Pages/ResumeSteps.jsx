import React from 'react'
import { Link } from 'react-router-dom'
import { FaFileDownload } from "react-icons/fa";
import { IoDocuments } from "react-icons/io5";


function ResumeSteps() {
  return (
    <>
    <div className="container-fluid p-5" style={{minHeight:'100vh',backgroundColor: ' rgba(4, 28, 73, 0.42)'}}>
      <h1 className='text-center mb-5 mt-4'>Create a Job Winning Resume in Minites</h1>
      <div className=' row justify-content-around h-50'>
      {/* card1 */}
      <div className=' col-md-6 border border-2 shadow bg-light p-4' style={{textAlign:'center', width:'20rem'}}>
        <h2><IoDocuments className='text-primary'/></h2>
        <h2>Add Your Information</h2>
        <h4>Add Prewrittten Examples to Each Section</h4>
        <h4 className='fw-bold'>Step 1</h4>
      </div>
      {/* card2 */}
        
      <div className='col-md-6 border border-2 shadow bg-light p-3' style={{textAlign:'center', width:'20rem'}}>
       <h2><FaFileDownload className='text-danger'/></h2>
        <h2>Download Resume</h2>
        <h4>Download and Start Applying</h4>
        <h4 className='fw-bold'>Step 2</h4>
      </div>
      <div className='text-center'>
        <Link className="btn btn-primary" to={'/form'} style={{backgroundColor: ' rgba(4, 28, 73, 0.93)',color:'white'}}>Lets Start</Link>
      </div>
      </div>
      </div>
      </>
  )
}

export default ResumeSteps