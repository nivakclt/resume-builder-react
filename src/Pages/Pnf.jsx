import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa"

function Pnf() {
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          minHeight: '75vh',
          background:'white',
                    padding: '40px 20px'
        }}
      >

        <h1
          style={{
            color: '#4a2818',
            fontSize: '42px',
            fontWeight: '600',
            marginBottom: '10px'
          }}
        >
          Oops! Page Not Found
        </h1>
         
        <p
          style={{
            color: '#000000',
            fontSize: '18px',
            marginBottom: '25px',
            borderRadius:'30px'
          }}
        >
          The page you're looking for doesn't exist or has been moved.
        </p>

        <img
          src="https://images.openai.com/static-rsc-4/l--pQe5icGAX5fFcYA_DKWu5inGVv5Km1rVmcQ560u0mZtUZpziuSWS46USvR33OlYTQ9YSyTfSogwib5C_TqohMYE5ebtpOPYkk7jovKhtr2ncl_YVWLJ2WBYWb-xCPpSaZExbkpbOQMKq-oIkNNXIDDtkR4ocq7kmq9R8l1yyXkh8F552cpGguluNuVuVp?purpose=fullsize"
          alt="Page Not Found"
          style={{
            width: '320px',
            maxWidth: '80%',
            marginBottom: '25px'
          }}
        />

        <Link
          to="/"
          className="text-decoration-none"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'linear-gradient(90deg, #c89b72, #9b6b45)',
            color: 'white',
            padding: '12px 28px',
            borderRadius: '30px',
            fontWeight: '600',
            boxShadow: '0 6px 15px rgba(80, 45, 20, 0.2)',
            transition: '0.3s'
          }}
        >
          <FaArrowLeft />
          Back to Home
        </Link>

      </div>
    </>
  )
}

export default Pnf