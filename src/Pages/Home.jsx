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
        <div className='w-50 border border-2 border-light shadow text-center text-light p-3' style={{ backgroundColor: "rgba(0, 0, 0, 0.29)" }}>
          <h3>Build Your Resume</h3>
          <h5>Designed To Get Hired. Your Skills, Your Story, Your Next Job - All In One.
          </h5>
          <Link to={"/steps"} style={{ backgroundColor: ' rgba(4, 28, 73, 0.93)', color: 'white' }} className='btn btn-primary-outline'>Make your Resume Now with AI !</Link>
        </div>
      </div>

      {/* tools */}
      <div className='container p-3' style={{ backgroundColor: 'white' }}>
        <h3 className='d-flex justify-content-center p-3 display-4'>Tools</h3>

        <div className="row">
          <div className="col-md-6 text-align:justify p-5 mb-5">
            <h2>What's AI rBuilder</h2>
            <p>An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming an
              d difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>
            <p>The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly.
            </p>
            <p>The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.

            </p>
            <p>This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.</p>
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
      <div style={{
        backgroundImage: "url('https://img.magnific.com/free-photo/modern-minimalist-office_23-2151780762.jpg?semt=ais_hybrid&w=740&q=80')",
        height: '70vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
      </div>

      {/* testimony */}
      <div className='container'>
        <h5 className='text-center display-4 my-4'>Testimony</h5>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h4 className='mt-4'>Trusted by professionals worldwide</h4>
            <div className='mt-5'>
              <p style={{ textAlign: "justify" }}>Trusted by professionals worldwide, our AI-powered resume builder is designed to help you create resumes that are modern, impactful, and optimized for today's competitive job market. Whether you're applying for your first internship, searching for your dream job, or advancing your career, our platform provides everything you need to present your skills with confidence and professionalism.
              </p>
              <p style={{ textAlign: "justify" }}>Creating a standout resume shouldn't be complicated. That's why we've combined elegant templates, intelligent AI assistance, ATS-friendly formatting, and an intuitive editing experience into one powerful platform. From crafting compelling professional summaries to highlighting your achievements and technical skills, every feature is built to help you make a strong first impression.
              </p>
              <p style={{ textAlign: "justify" }}>
                Our resume builder saves you valuable time by eliminating complex formatting and guesswork. Simply enter your information, customize your design, and let our AI enhance your content with professional suggestions tailored to your career goals. The result is a polished, recruiter-ready resume that reflects your unique experience and potential.
              </p>
              <p style={{ textAlign: "justify" }}>
                Thousands of job seekers trust our platform to create resumes that capture attention and increase interview opportunities. We continuously improve our tools to match modern hiring standards, ensuring your resume remains relevant, clean, and compatible with Applicant Tracking Systems (ATS) used by companies worldwide.
              </p>
              <p style={{ textAlign: "justify" }}>
                Your career journey deserves more than a basic resume. It deserves a document that tells your story, showcases your strengths, and helps you stand out from the competition. With our AI-powered resume builder, you can build, edit, and download a professional resume in minutes—giving you the confidence to apply for your next opportunity and take the next step toward your future.
              </p>
            </div>
          </div>
          <div className='col-sm-12 col-md-6'>
            <img src="https://www.sanntra.com/wp-content/uploads/2026/01/about-sanntra-technologies.webp" alt=''
              className="img-fluid rounded shadow" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home