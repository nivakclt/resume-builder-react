import React from 'react'
import Preview from '../Components/Preview'
import InputForm from '../Components/InputForm'

function UserForm() {
  return (
    <div className='container-fluid w-100 py-4 px-4 shadow-lg rounded bg-white' style={{minHeight:'80vh'}}>
      <div className='row'>
        <div className='col-md-6'>
          <InputForm/>
        </div>
         <div className='col-md-6'>
          <Preview/>
        </div>
      </div>
    </div>
  )
}

export default UserForm