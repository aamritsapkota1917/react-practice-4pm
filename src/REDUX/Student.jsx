import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'


const Student = () => {
    const data=useSelector(store=>store.student)
    const dispatch=useDispatch()
    const[name,setName]=useState('')

const handleSubmit=()=>{
    dispatch({type:'CHANGE_NAME',payLoad:name})
}

  return (
    <>
    <h2>The name of the student is ram </h2>
    <h1>Form</h1>
    <input type="text" name="std" placeholder='Type Name'
    onChange={(e)=>setName(e.target.value)}
    />
    &nbsp;&nbsp;&nbsp;&nbsp;
    <button className='btn btn-primary onClick={handleSubmit}'>submit</button>
    </>
  )
}

export default Student