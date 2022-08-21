import React from 'react'
import axios from 'axios'
import Loading from './Loading'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import ModalData from './Modal'

export default function Content() {

const content = useSelector(state => state.content)

const [loading, setLoading] = useState(false)

const [modal, setModal] = useState(false)

const dispatch = useDispatch()

const search = useSelector(state => state.search)

const currentPage = useSelector(state => state.currentPage)

const indexOflastPost = currentPage * 8

const indexOfFirstPost = indexOflastPost - 8

const filtered = (search ==="" ? content : content.filter((item)=>{
    
    return (item.title.toLowerCase().includes(search.toLowerCase()) || item.body.toLowerCase().includes(search.toLowerCase()))
}))

const currentPosts = filtered.slice(indexOfFirstPost, indexOflastPost)

 const getData = async () => {
        setLoading(true)
    try {

        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
        dispatch({type: "success" , payload: data})
        setLoading(false)
        
    } catch (error) {
        console.log(error.message) 
        dispatch({type: "failed" , payload: error.message})
        setLoading(false)
    }
 }

useEffect(() => {

    getData()
    
    
    
  
}, [])
useEffect(() => {

    dispatch({type: "addSearched",payload: filtered.length})
    
    
    
  
}, [search])





const [show, setShow] = useState(false);
const [modalData, setModalData] = useState({
    title: "",
    body: ""
});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className='container-fluid '>
        <div className='row d-flex justify-content-center'>

            {loading ? <Loading/> : filtered.length === 0 ? 
            <div className='container-fluid d-flex justify-content-center my-5'><h1 className='h1'>Couldn't find anything</h1></div> 
            :
            currentPosts.map((item,index) => {
                    
                 return (
                     <div onClick={()=>{
                        setModalData({
                            id: item.id,
                            title: item.title,
                            body: item.body
                        })
                        handleShow()
                     }} key={item.id} className="card text-bg-success mb-3 mx-2 col-10 col-sm-5 col-md-4 col-lg-3 cursoreChange" style={{maxWidth: "18rem"}}>
                         <div className="m-2 fs-3">{item.id}</div>
                         <div className="card-body">
                             <h5 className="card-title">{item.title}</h5>
                             <p className="card-text">{item.body}</p>
                         </div>
                     </div>   
                 )
            })
            }
        </div>
    <ModalData show={show} handleClose={handleClose} modalData={modalData} setModalData={setModalData}/>
    </div>
  )
}
