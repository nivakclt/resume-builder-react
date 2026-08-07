import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const heroStyle = {
  minHeight: "90vh",
  backgroundImage:
    "url('https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1600')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

  return (
    <>
      <div className='container-fluid p-0'>
        {/* Hero */}
        <div style={heroStyle} className='d-flex justify-content-center align-items-center'>
          <div className='w-50 border border-2 border-light shadow text-center text-light p-3'>
            <h3>Build Your Resume</h3>
            <h5>Your Skills,Your Story,Your Next Job All in One.</h5>
            <Link to={'/steps'} className='btn btn-dark-outiline'>Make your resume Now!</Link>
          </div>
        </div>

        
        {/* Tools */}
        <div className='container'>
          <h4 className="text-center display-4">Tools</h4>
          <div className='row'>
            <div className="col-sm-12 col-md-6">
              <h5>Resume</h5>
              <p style={{textAlign:'justify'}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil saepe illum possimus dolorem perferendis et odit quisquam vitae, mollitia, quo fuga ea. Perspiciatis laudantium alias voluptas magnam, quos dolor cupiditate!
              </p>
              <h5>CoverLetter</h5>
              <p style={{textAlign:'justify'}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil saepe illum possimus dolorem perferendis et odit quisquam vitae, mollitia, quo fuga ea. Perspiciatis laudantium alias voluptas magnam, quos dolor cupiditate!
              </p>
              <h5>Jobs</h5>
              <p style={{textAlign:'justify'}}>
                Lorem  dolor sit amet consectetur, adipisicing elit. Nihil saepe illum possimus dolorem perferendis et odit quisquam vitae, mollitia, quo fuga ea. Perspiciatis laudantium alias voluptas magnam, quos dolor cupiditate!
              </p>
              <h5>Application</h5>
              <p style={{textAlign:'justify'}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil saepe illum possimus dolorem perferendis et odit quisquam vitae, mollitia, quo fuga ea. Perspiciatis laudantium alias voluptas magnam, quos dolor cupiditate!
              </p>
            </div>
            <div className="col-sm-12 col-md-6 p-3">
              <img src="https://a.storyblok.com/f/64062/927x1200/0e2706d7cc/resume_format_blog_asset-2.jpg"
               alt="resume" width={'100%'}/>
            </div>
          </div>
        </div>

        {/* Banner */}
        <div style={{backgroundImage:"url('https://arktura.com/wp-content/uploads/2018/04/Arktura-VaporSoft-Trail-Derwood-MD_WEB_1.jpg')",
          height:'70vh',
          backgroundSize:'cover',
          backgroundPosition:'center',
          backgroundAttachment:'fixed'
        }}>

        </div>

        {/* Testimony */}
        <div className='container'>
            <h5 className="text-center display-4 my-2">Testimony</h5>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h4>Trusted By Proffessionals World Wide</h4>
                <p style={{textAlign:'justify'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusamus possimus, ipsa eum dolores natus dolor pariatur repellat, quis laborum nulla cumque adipisci blanditiis ducimus similique sapiente qui doloremque in!
                </p>
                <p style={{textAlign:'justify'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusamus possimus, ipsa eum dolores natus dolor pariatur repellat, quis laborum nulla cumque adipisci blanditiis ducimus similique sapiente qui doloremque in!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officia a molestiae magnam suscipit? Repellat, natus debitis perspiciatis ipsam autem, ab, itaque labore hic nulla eos esse cupiditate officiis velit!
                </p>
                <p style={{textAlign:'justify'}}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde velit illo voluptatem eveniet earum ipsa quas officiis, id, obcaecati quidem, expedita quo voluptas ratione accusantium quae accusamus repellendus voluptates eius?
                </p>
              </div>
              <div className="col-sm-12 col-md-6">
                <img src="https://media.licdn.com/dms/image/v2/D5612AQH34j1DoDsvSg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1702059465365?e=2147483647&v=beta&t=xn_zpm1Jd8O8qqxYVu45i341EcckvSs4II8NiEqGOzE"
                width={'100%'} alt="emp" />
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home