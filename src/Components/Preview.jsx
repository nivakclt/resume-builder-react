import React from 'react'
import { Button } from '@mui/material'
import Divider from '@mui/material/Divider';

function Preview({resume}) {

  console.log(resume)
  return (
    <>
    <div className='w-100 py-4 px-4 shadow-lg rounded bg-white'>
    <h4>{resume?.fullname}</h4>
    <p>Phone : {resume?.phone}<span></span></p>
    <p>Email :{resume?.email} <span></span></p>
    <p>Job Title:{resume?.jobTitle}</p>
    <p>LinkedIn : <a href={resume?.linkedin}>{resume?.linkedin}</a></p>
    <p>Github Profile : <a href={resume?.github}>{resume?.github}</a></p>
    <p>Location : {resume?.location}<span></span></p>
    <Divider/>
    <h4 className='py-3'>Professional Summary</h4>
    <p style={{textAlign:'justify'}}>{resume?.summary}
    </p>
    <Divider/>
    <h4 className='py-3'>Technical Skills</h4>
    <div>
     {
      resume?.skills&&
      <>
      {
        resume?.skills.map(item=>(
          <Button>{item}</Button>
        ))
      }
      </>
     }
    </div>
    <Divider/>
    <h4 className='py-3'>Education :</h4>
    <p>Bachelor's Degree in: {resume?.degree}<span></span></p>
    <p>University/College name: {resume?.college}<span></span></p>
    <p>Year of Graduation: {resume?.graduationYear}<span></span>
    </p>
  </div>
    </>
  )
}

export default Preview