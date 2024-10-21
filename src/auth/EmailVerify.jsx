import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../confing'
import { useState } from 'react'


const EmailVerify = () => {
    const params=useParams()
    const[error,setError]=useState('')
    const[sucess,setSuccess]=useState()
    useEffect(()=>{
        const token=params.token
fetch(`${API}/confirmation/${token}`,{
    method:'PUT',
    headers:{
        accept:"application/json",
        "Content-Type": "application/json"
    }
})
.then(res=>res.json())
.then(data=>{
    if(data.error){
        setError(data.error)
        setSuccess(false)
    }
    else{
        setSuccess(true)
        setError('')
    }
})
.catch(err=>console.log(err))

    },[params.token])

 //to show error message 
    
 const showError=()=>(
    //error lekda { } => yo bracket use hunna kaile ni 
    error && <div className="alert alert danger"> 
        {error}
    </div>
)

//to show sucess message

const showSucess=()=>(
    sucess && <div className="alert alert-sucess">
    Your Email was verified sucessfully ✅ 
    Login to continue
    </div>
)


  return (
    <>
    {showError()}
    {showSucess()}

    </>
  )
}

export default EmailVerify