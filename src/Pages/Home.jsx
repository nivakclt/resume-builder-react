import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const heroStyle = {
    minHeight: "90vh",
    backgroundImage:
      "url('https://images.ctfassets.net/ri4db8kokucw/5v7ambblvZeTO85IGYa22f/4e520b6b34b5ef8dc361437e40c811c9/MSFT-A-woman-revising-her-resume-with-Copilot-in-MS-Word1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className='container-fluid p-0'>
        {/* Hero */}
        <div style={heroStyle} className='d-flex justify-content-center align-items-center hero'>
          <div className=' heroContent w-50 border border-2 border-light shadow text-center text-light p-3'>
            <h3>Build Your Resume</h3>
            <h5>Your Skills,Your Story,Your Next Job All in One.</h5>
            <Link to={'/steps'} className='hero-btn' style={{
              fontWeight: 'bold',
              fontSize: '14px',
              background: 'linear-gradient(90deg, #f3d6b3 0%, #c89b72 50%, #9b6b45 100%)',
              boxShadow: '0 3px 10px rgba(80, 45, 20, 0.2)'
            }}>Make your resume Now!</Link>
          </div>
        </div>


        {/* Tools */}
        <div className='container'>
          <h4 className="text-center display-4 m-5">Tools</h4>
          <div className='row'>
            <div className="col-sm-12 col-md-6">

              <h5>Resume</h5>
              <p style={{ textAlign: 'justify' }}>
                rBuilder is a user-friendly resume builder application designed to
                help job seekers create professional and well-structured resumes
                with ease. Users can enter their personal, educational, professional,
                and skill details through a simple step-by-step process. The application
                provides a live resume preview, allowing users to review and update
                their information before finalizing their resume. Users can also edit
                their details, save their resume, and download a professional copy
                for their job applications.
              </p>

              <h5>Cover Letter</h5>
              <p style={{ textAlign: 'justify' }}>
                Create a personalized and professional cover letter that effectively
                highlights your skills, experience, qualifications, and career goals.
                A well-written cover letter helps introduce you to potential employers
                and explains why you are a suitable candidate for a particular position.
                rBuilder helps users prepare meaningful and job-focused cover letters
                that complement their resumes and create a strong first impression.
              </p>

              <h5>Jobs</h5>
              <p style={{ textAlign: 'justify' }}>
                Discover job opportunities that match your skills, qualifications,
                interests, and career goals. Explore different job openings and learn
                more about available positions, companies, and career requirements.
                Finding the right opportunity can be easier when your skills and
                interests are aligned with the requirements of the role. rBuilder
                helps users explore opportunities and take the next step toward
                achieving their career goals.
              </p>

              <h5>Application</h5>
              <p style={{ textAlign: 'justify' }}>
                Manage your job applications efficiently by keeping track of the
                positions you have applied for, application status, company details,
                and other important information. Keeping your applications organized
                makes it easier to follow up on opportunities and monitor your progress.
                rBuilder helps users stay organized throughout their job search and
                ensures that important application details are easy to access when
                needed.
              </p>

            </div>
            <div className="col-sm-12 col-md-6 p-3">
              <img src="https://resumegenius.com/wp-content/uploads/clean-resume-builder-template-yellow.png?w=650"
                alt="resume" width={'100%'} />
            </div>
          </div>
        </div>

        {/* Banner */}
        <div style={{
          backgroundImage: "url('https://d1yg2ddo8j5qoh.cloudfront.net/media/599672/oca-ways-to-save-money-in-uni-or-tafe.webp')",
          height: '70vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>

        </div>

        {/* Testimony */}
        <div className='container'>
          <h5 className="text-center display-4 my-2">Testimony</h5>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h4>Trusted By Proffessionals World Wide</h4>
              <p style={{ textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusamus possimus, ipsa eum dolores natus dolor pariatur repellat, quis laborum nulla cumque adipisci blanditiis ducimus similique sapiente qui doloremque in!
              </p>
              <p style={{ textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusamus possimus, ipsa eum dolores natus dolor pariatur repellat, quis laborum nulla cumque adipisci blanditiis ducimus similique sapiente qui doloremque in!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officia a molestiae magnam suscipit? Repellat, natus debitis perspiciatis ipsam autem, ab, itaque labore hic nulla eos esse cupiditate officiis velit!
              </p>
              <p style={{ textAlign: 'justify' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde velit illo voluptatem eveniet earum ipsa quas officiis, id, obcaecati quidem, expedita quo voluptas ratione accusantium quae accusamus repellendus voluptates eius?
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1e8YmZ6G9yh82QY6nyK0UG/2a822e00e9b33ec066b94017719fa998/Stocksy_txp233b02ffaSu200_Medium_3441517__1_.webp?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000"
                width={'100%'} alt="emp" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home