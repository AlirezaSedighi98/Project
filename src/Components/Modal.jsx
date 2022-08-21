import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';

export default function ModalData({show , handleClose,modalData,setModalData}) {

const content = useSelector(state => state.content)
const dispatch = useDispatch()



  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.title}</Modal.Title>
        </Modal.Header>
        <textarea value={modalData.body} onChange={(e)=>setModalData(pre=>({
            ...pre,body:e.target.value
        }))} style={{height: "150px"}} className="form-control" aria-label="With textarea"></textarea>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
            const edited = content.map((item,index)=>{
                return item.id === modalData.id ? {...item,body: modalData.body} : item
            })
            dispatch({type: "success",payload: edited})
            handleClose()
          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
