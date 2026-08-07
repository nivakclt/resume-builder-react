import React from 'react'
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Preview({ resume }) {

  console.log(resume)
  return (
    <>

      <div className='w-100 py-4 px-2 border shadow my-2'>
        <h4>{resume?.fullname}</h4>
        <p>Phone :{resume?.phone} <span></span></p>
        <p>Email :{resume?.email} <span></span></p>
        <p>LinkedIn : <a href={resume?.linkedin}>{resume?.linkedin}</a></p>
        <p>Github Profile : <a href={resume?.github}>{resume?.github}</a>
        </p>
        <p>Location : <span>{resume?.location}</span></p>
        <Divider />
        <h4>Proffessional Summery</h4>
        <p style={{ textAlign: 'justify' }}>{resume?.summery}</p>
        <Divider />
        <h4>Technical Skills</h4>
        <div>
          {
            resume?.skills &&
            <>
            {
              resume?.skills.map(item=>(
                <Button>{item}</Button>
              ))
            }
            </>
          }


        </div>
        <Divider />
        <h4>Education</h4>
        <p>Bachelor's Degree in : <b>{resume?.degree}</b></p>
        <p>University/College Name : <span>{resume?.college}</span></p>
        <p>Year of Graduation: <span>{resume?.year}</span></p>
      </div>
    </>
  )
}

export default Preview