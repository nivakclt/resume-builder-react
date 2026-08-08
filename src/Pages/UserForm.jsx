import React,{useState} from 'react'
import InputForm from '../Components/InputForm'
import Preview from '../Components/Preview'

function UserForm() {

  const [resume,setResume]=useState({})

  return (
    <div className='container-fluid' style={{minHeight:'80vh'}}>
      <div className="row">
        <div className="col-md-6 p-4">
          <InputForm setRes={setResume}/>  {/*STate lifting*/}
        </div>
        <div className="col-md-6">
          {
            resume.fullname && 
            <Preview resume={resume}/>
          }
          
        </div>
      </div>
    </div>
  )
}

export default UserForm