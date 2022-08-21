import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

const navigate = useNavigate()

  return (
    <div className='container-fluid row d-flex justify-content-center mt-5'>
        <form onSubmit={(e)=>e.preventDefault()} className='col-11 col-sm-9 col-md-6 col-lg-4 bg-light rounded d-flex justify-content-center'>
            <div className='col-9 mt-5'>
                <div className="mb-3 ">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <input style={{width: "93%"}} type="password" className="form-control col-12 ms-2" id="inputPassword"/>
                </div>
                <div className='d-flex justify-content-around my-5'>
                    <button type={'submit'} className="btn btn-success">Login</button>
                    <button onClick={()=>navigate("/")} type={'button'} className="btn btn-danger">Back</button>
                </div>
            </div>
        </form>
    </div>
  )
}
