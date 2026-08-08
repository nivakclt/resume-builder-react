import React from 'react'
import { IoDocuments } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';


function ResumeSteps() {
  return (
    <>
      <div
        className="container-fluid p-3"
        style={{
          minHeight: '100vh',
        }}
      >
        <h1
          className="text-center mb-3 mt-2"
          style={{
            color: '#4a2818',
            fontWeight: '600'
          }}
        >
          Create an ATS Friendly Resume in Minutes with AI
        </h1>

        <p
          className="text-center mb-5"
          style={{
            color: '#70513b',
            fontSize: '18px'
          }}
        >
          Build a professional resume with our simple and easy-to-use process
        </p>

        <div className="row justify-content-center g-4">

          {/* Card 1 */}
          <div className="col-md-5 col-lg-4">
            <div
              className="card h-100 border-0 shadow-sm text-center"
              style={{
                borderRadius: '18px',
                backgroundColor: '#e9d3b3',
                padding: '15px'
              }}
            >

              <div className="card-body">

                <div
                  className="mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    color: '#4a2818',
                    fontSize: '32px'
                  }}
                >
                  <IoDocuments />
                </div>

                <h3
                  style={{
                    color: '#4a2818',
                    fontWeight: '600'
                  }}
                >
                  Add Your Information
                </h3>

                <p
                  className="mt-3"
                  style={{
                    color: '#70513b',
                    lineHeight: '1.7'
                  }}
                >
                  Enter your personal, educational and professional details.
                  Our AI will generate relevant skills and a professional
                  summary for your resume.
                </p>

                <span
                  className="badge rounded-pill px-3 py-2"
                  style={{
                    backgroundColor: '#ead0b1',
                    color: '#4a2818'
                  }}
                >
                  Step 1
                </span>

              </div>
            </div>
          </div>


          {/* Card 2 */}
          <div className="col-md-5 col-lg-4">
            <div
              className="card h-100 border-0 shadow-sm text-center"
              style={{
                borderRadius: '18px',
                backgroundColor: '#e9d3b3',
                padding: '15px'
              }}
            >

              <div className="card-body">

                <div
                  className="mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    color: '#4a2818',
                    fontSize: '32px'
                  }}
                >
                  <FaFileDownload />
                </div>

                <h3
                  style={{
                    color: '#4a2818',
                    fontWeight: '600'
                  }}
                >
                  Download Your Resume
                </h3>

                <p
                  className="mt-3"
                  style={{
                    color: '#70513b',
                    lineHeight: '1.7'
                  }}
                >
                  Preview your professional resume, make the necessary
                  changes and download it to start applying for your
                  dream job.
                </p>

                <span
                  className="badge rounded-pill px-3 py-2"
                  style={{
                    backgroundColor: '#ead0b1',
                    color: '#4a2818'
                  }}
                >
                  Step 2
                </span>

              </div>
            </div>
          </div>

        </div>
        <div className='text-center mt-4'>
          <Link className=' btn btn-outline-dark' to={'/form'}>Let's Start</Link>
        </div>
      </div >
    </>
  )
}

export default ResumeSteps