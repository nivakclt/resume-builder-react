import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";



function Footer() {
  return (
    <>
      <div className='container-fluid p-5 text-center text-light ' style={{
        fontWeight: 'bold',
        fontSize: '14px',
        background: 'linear-gradient(90deg, #f3d6b3 0%, #c89b72 50%, #8f5f39 100%)',
    boxShadow: '0 3px 10px rgba(80, 45, 20, 0.2)'
      }
      }>
        <h2>Contact With Us</h2>
        <h4><FaEnvelope /> {' '}
          resumebuilder@gmail.com</h4>
        <h4><FaPhone />{' '}9876543210</h4>
        <h4><FaWhatsapp /><CiInstagram /><CiFacebook /></h4>
        <h3>Designed & Built Using <FaHeart className='text-danger' /> React.js</h3>
      </div>
    </>
  )
}

export default Footer