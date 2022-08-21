import React from 'react'

export default function Loading() {
  return (
    <div className='my-5 d-flex justify-content-center'>
        <button className="btn btn-success" type="button" disabled>
            <span className="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
            Loading...
        </button>
    </div>
  )
}
