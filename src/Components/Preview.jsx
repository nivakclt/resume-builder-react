import React from 'react'
import { Button } from '@mui/material'
import Divider from '@mui/material/Divider';

function Preview() {
  return (
    <>
    <div className='w-100 py-4 px-4 shadow-lg rounded bg-white'>
    <h4>Full Name</h4>
    <p>Phone : <span></span></p>
    <p>Email : <span></span></p>
    <p>LinkedIn : <span></span></p>
    <p>Github Profile : <span></span></p>
    <p>Location : <span></span></p>
    <Divider/>
    <h4 className='py-3'>Proffessional Summury</h4>
    <p style={{textAlign:'justify'}}>Lorem
    </p>
    <Divider/>
    <h4 className='py-3'>Technical Skills</h4>
    <div>
      <button className='btn btn-primary m-2'>HTML</button>
      <button  className='btn btn-primary m-2'>CSS</button>
      <button  className='btn btn-primary m-2'>JS</button>
    </div>
    <Divider/>
    <h4 className='py-3'>Education</h4>
    <p>Bachelor's Degree in: <span></span></p>
    <p>University/College name:<span></span></p>
    <p>Year of Gradution:<span></span>
    </p>
  </div>
    </>
  )
}

export default Preview