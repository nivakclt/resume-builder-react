import React from 'react'
import { Link } from 'react-router-dom'
import { FaFileDownload } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { FaHistory } from 'react-icons/fa'
import { FaBackward } from 'react-icons/fa'
import Preview from '../Components/Preview'
import Edit from '../Components/Edit'

function ViewResume() {
  return (
    <div className='container'>
      <h2 className='text-center my-2'>Resume Preview</h2>
      <div className='row '>
        <div className='col-md-2'></div>
        <div className='col-md-8'>
          <div className="d-flex justify-content-center">
            {/* Downlaod */}
            <button className='btn text-primary'><FaFileDownload style={{fontSize:"35px"}}/></button>
            {/* Edit  */}
            <Edit/>
            {/*   preview */}
            <Link className='btn text-secondary' to={"/history"}><FaHistory style={{fontSize:"35px"}}/></Link>
            {/*  backform */}
            <Link className='btn  text-primary' to={'/form'}><FaBackward style={{fontSize:"35px"}}/></Link>
          </div>
          <Preview/>
        </div>
        <div className='col-md-2'></div>
      </div>
    </div>
  )
}

export default ViewResume