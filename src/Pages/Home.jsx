import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const heroStyle =
  {
    minHeight: "90vh",
    backgroundImage: "url('https://lh3.googleusercontent.com/MXOOolt4pzTVWUgRMSrjxtukCTZI2o9T3GCQW9toM9Lb5tFYstquczZYEnZoGJ23bCg8wgqxgv5aX-heZ2uxQHo9ZAonheosPueN=e365-pa-nu-s0')",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center"
  }

  return (
    <div className='container-fluid p-0'>
      {/* hero section */}
      <div style={heroStyle} className='d-flex justify-content-center align-items-center'>
        <div className='w-50 border border-2 border-light shadow text-center text-light p-3' style={{backgroundColor:"rgba(0, 0, 0, 0.29)"}}>
          <h3>Build Your Resume</h3>
          <h5>Your Skills,Your Story,Your Next Job All in One</h5>
          <Link to={"/Steps"} style={{ backgroundColor: ' rgba(4, 28, 73, 0.93)', color: 'white' }} className='btn btn-primary-outline'>Make your Resume Now!</Link>
        </div>
      </div>

      {/* tools */}
      <div className= 'container p-3' style={{ backgroundColor: 'white' }}>
        <h3 className='d-flex justify-content-center p-3 display-4'>Tools</h3>

        <div className="row">
          <div className="col-md-6 text-align:justify p-5 mb-5">
            <h2>Resume</h2>
            <p>Build a professional resume in minutes using modern, recruiter-friendly templates. Customize every section with your personal information, education, skills, experience, and projects to create a resume that highlights your strengths and increases your chances of landing your dream job.  </p>
            <h2>Cover Letter</h2>
            <p>Create personalized cover letters that complement your resume and leave a lasting impression on employers. Tailor your message for every job application with ease, showcasing your enthusiasm, qualifications, and suitability for the role.</p>
            <h2>Jobs</h2>
            <p>Explore relevant job opportunities that match your skills and career goals. Stay updated with the latest openings, discover companies hiring in your field, and prepare confidently for your next career move.</p>
            <h2>Application</h2>
            <p>Manage your job applications in one place and keep track of every opportunity. Organize application statuses, interview schedules, and important deadlines so you never miss an important step in your hiring journey.</p>
            </div>
          <div className="col-md-6 align-items-center">
         <img
          src="https://cdn.resumegemini.com/images/skins/Maverick.webp"
          alt="Resume Template"
          className="img-fluid rounded shadow" />    
             </div>
        </div>
      </div>

      {/* Banner */}
      <div style={{backgroundImage:"url('https://chatgpt.com/backend-api/estuary/content?id=file_0000000098f082308b58956f6086bd85&ts=495899&p=fs&cid=1&sig=26124c17f121ecfb2af99d5c19bd316b680b98f0d9277cee683e11f59dd59880&v=0')",
        height:'70vh',
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundAttachment:'fixed'
      }}>
      </div>

      {/* testimony */}
      <div className='container'>
        <h5 className='text-center display-4 my-2'>Testimony</h5>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h4>Trusted By Proffessionals World Wide</h4>
            <p style={{textAlign:"justify"}}>
            Using this resume builder has completely changed the way I approach job applications. The platform is incredibly user-friendly, with a clean and modern interface that made creating my resume feel effortless from start to finish.</p>
            <p style={{textAlign:"justify"}}>
            Using this resume builder has completely changed the way I approach job applications. The platform is incredibly user-friendly, with a clean and modern interface that made creating my resume feel effortless from start to finish.</p>
            <p style={{textAlign:"justify"}}>
            Using this resume builder has completely changed the way I approach job applications. The platform is incredibly user-friendly, with a clean and modern interface that made creating my resume feel effortless from start to finish.</p>
            <p style={{textAlign:"justify"}}>
            Using this resume builder has completely changed the way I approach job applications. The platform is incredibly user-friendly, with a clean and modern interface that made creating my resume feel effortless from start to finish.</p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <img src="https://chatgpt.com/backend-api/estuary/content?id=file_0000000089e88230af799808f610e1b8&ts=495899&p=fs&cid=1&sig=873be5d61aa76864fc26b6a4eb71a09b2278757f9c85c5aff6d81b7ae41b7939&v=0" alt='' 
            className="img-fluid rounded shadow"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home