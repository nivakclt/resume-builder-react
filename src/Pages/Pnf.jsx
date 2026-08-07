import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";


function Pnf() {
  return (
    <>
    <div style={{minHeight:'70vh'}} className='d-flex flex-column justify-content-center align-items-center'>
        <h4 className='text-center display-4'>Page Not Found!!</h4>
        <img src="https://assets-v2.lottiefiles.com/a/6915cc2c-1178-11ee-a783-6b784bd85af7/vUmMyG7Nho.gif" alt="notfound"
         width={'50%'}/>
         <Link to={'/'} className='text-decoration-none text-dark fw-bold ' style={{fontSize:'30px'}}><FaArrowLeft/>{' '}Back to Home</Link>
    </div>
    </>
  )
}

export default Pnf