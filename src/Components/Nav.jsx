import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Nav() {

const content = useSelector(state => state.content)
const qty = useSelector(state => state.qty)

const [search, setSearch] = useState("")

const dispatch = useDispatch()

const navigate = useNavigate()
  return (
    <>
        <nav className="navbar bg-light mb-5">
            <div className="container-sm d-flex flex-column-reverse flex-md-row ">
                <span style={{fontSize: "15px"}} className="my-4 my-md-0 badge text-bg-success">{`${search === "" ? content.length : qty} Items Found`}</span>
                <form onSubmit={(e) => e.preventDefault()} className="d-flex mt-4 mt-md-0" role="search">
                    <input onChange={(e) => setSearch(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button onClick={() =>{
                        dispatch({type:"search" , payload: search})
                        dispatch({type:"reset"})
                    }} className="btn btn-success" type="submit">Search</button>
                </form>
                <div onClick={()=>navigate("/login")} className='d-flex align-items-center justify-content-center cursoreChange'>
                    <h4 className='h4 mb-0 me-2'>Login</h4>
                    <img src="./image/login.png" alt="icon" width="40" height="40"/>
                </div>
            </div>
        </nav>
    </>
  )
}
