import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'

function Downloads() {
  return (
    <>
      <div style={{ minHeight: '60vh' }}>
        <div className='d-flex justify-content-between align-items-center'>
          <h4 className='display-4'>Download History</h4>
          <Link to={'/form'} className='text-decoration-none text-dark me-3'><FaArrowLeft />Back</Link>
        </div>

        <div className='my-3'>
          <div className='row container-fluid'>
            <div className='col-md-4'>
              <div className='shadow p-3 rounded'>
                <div className='d-flex justify-content-between align-items-center'>
                  <h4>Review at : time</h4>
                  <button className='btn text-danger'><FaTrash/></button>
                </div>
                <div className='rounded'>
                  <img src="https://resumesector.com/wp-content/uploads/2024/10/Best-Resume-Template-Free-Download-MS-Word--724x1024.jpg"
                   alt="Resume image" width={'100%'} height={'400px'} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Downloads