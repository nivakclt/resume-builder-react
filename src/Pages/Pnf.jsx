import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

function Pnf() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: "70vh" }}
    >
      <h4 className="display-3">PAGE NOT FOUND!</h4>

      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/073/037/960/small/error-404-illustration-concept-with-3d-character-page-not-found-404-page-error-scene-png.png"
        alt="Page Not Found"
        style={{ maxWidth: "500px", width: "100%" }}
      />

      <Link to="/" className="text-decoration-none text-dark fw-bold mt-3">
        <FaArrowLeft className="me-2" />
        Back to Home
      </Link>
    </div>
  )
}

export default Pnf