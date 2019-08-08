import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
  <div className="not-found-page d-flex flex-column align-items-center justify-content-center">
    <h1 className="error-message">404: Not Found</h1>
    <Link to="/" className="btn btn-primary mt-4">Go back to Home Page</Link>
  </div>
  )
}

export default NotFound