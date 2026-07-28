import React from 'react'
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";


function Footer() {
  return (
    <>
      <div className='container-fluid p-5 text-center text-light' style={{ backgroundColor: ' rgba(4, 28, 73, 0.93)' }}>
        <h2>Contact With Us</h2>
        <h4><FaEnvelopeOpenText /> {" "}resumebuilder@gmail.com</h4>
        <h4><MdOutlinePhone />2345678902</h4>
        <h4><CiFacebook /><FaInstagram /><FaWhatsapp /></h4>
        <h3>Designed and Build using <FaHeart className='text-danger' /> React.js</h3>
      </div>
    </>
  )
}

export default Footer