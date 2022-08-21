import React from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'

export default function Pagination() {

  const pageNumbers = []
  const dispatch = useDispatch()
  const content = useSelector(state => state.content)
  const search = useSelector(state => state.search)
  const qty = useSelector(state => state.qty)


 
    for (let i = 1; i <= Math.ceil(qty === 0 ? content.length / 8 : qty/ 8 ); i++) {
      pageNumbers.push(i);
    }


 
  return (

    <div className='row container-fluid mt-5 mb-5 d-flex justify-content-center'>
      {(qty !== 0 || search === "") && 
      <div className='col-12 d-flex justify-content-center'>
        <ul className="pagination pagination-lg">
                {pageNumbers.map((item,index)=>{
                return (<li key={index} className="page-item" aria-current="page">
                            <a onClick={()=>{
                              dispatch({type:"change", payload: item})
                            }} className="page-link" href="#">{item}</a>
                        </li>)
                })}
        </ul> 
      </div>
      
      }
      
    </div>
  )
}
