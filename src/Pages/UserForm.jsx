import React, { useState } from 'react'
import Preview from '../Components/Preview'
import InputForm from '../Components/InputForm'

function UserForm() {
  const [resume,setResume]=useState({})
  return (
    <div className='container-fluid w-100 py-4 px-4 shadow-lg rounded bg-white' style={{minHeight:'80vh'}}>
      <div className='row'>
        <div className='col-md-6'>
          <InputForm setRes={setResume}/>
          {/* state lifting */}
        </div>
         <div className='col-md-6'>
          {
            resume.fullname && 
          <Preview resume={resume}/>   
          // prop sharing
          }
        </div>
      </div>
    </div>
  )
}

export default UserForm