import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import { getAllHistoryApi } from '../services/allApiServices'

function Downloads() {

  const [History,setHistory]=useState([])
  useEffect(()=>{
    getHistory()
  },[])

  const getHistory= async()=>{
    const response =await getAllHistoryApi()
    console.log(response)
    if (response.status===200){
      setHistory(response?.data)
    }
  }

  return (
    <>
      <div style={{ minHeight: '60vh' }}>
        <div className='d-flex justify-content-between align-items-center'>
          <h4 className='display-4'>Download History</h4>
          <Link to={'/form'} className='text-decoration-none text-dark me-3'><FaArrowLeft />Back</Link>
        </div>

        <div className='my-3'>
          {
            History.length> 0 ?
            <div className='row container-fluid'>
              {
                 History.map(item =>(
              <div className='col-md-4'>
              <div className='shadow p-3 rounded'>
                <div className='d-flex justify-content-between align-items-center'>
                  <h4>Review at : {item?.datetime}</h4>
                  <button className='btn text-danger'><FaTrash/></button>
                </div>
                <div className='rounded'>
                  <img src={item?.picture}
                   alt="Resume image" width={'100%'} height={'400px'} />
                </div>
              </div>

            </div>
                 ))
            }
        </div>
        :
        <h3 className='text-center text-danger'> No History Available</h3>
          }
        </div>
        </div>
    </>
  )
}

export default Downloads