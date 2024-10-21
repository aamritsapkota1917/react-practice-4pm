import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../confing'
const ResetPassword = () => {

  const params=useParams()
  const[password,setPassword]=useState('')
    const[error,setError]=useState('')
    const [sucess,setSucess]=useState(false)


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
     Password Has Been Reset Sucessfully
  </div>
)

const token=params.token

const handleSubmit=e=>{
  e.preventDefault()

  //reset password
  fetch(`${API}/resetpassword/${token}`,{
    method:'PUT',
    headers:{
      accept:"application/json",
      "Content-Type": "application/json"
  },
  body:JSON.stringify({password})

  })
  .then(res=>res.json())
  .then(data=>{
    if(data.error){
      setError(data.error)
      setSucess(false)
    }
    else{
      setError('')
      setSucess(true)
      setPassword('')
    }
  })
  .catch(err=>console.log(err))
}

  return (
    <>
    <div className="container my-5">
<div className="row d-flex justify-content-center">
    <div className="col-md-5">
        <form className='shadow p-3'>
            {showError()}
            {showSucess()}
<h2 className="text-center text-muted">
    Reset Password
</h2>
<div className="mb-2">
    <label htmlFor="pwd">Password</label>
    <input type="password" name='pwd' id='pwd'
    className='form-control' value={password} onChange={e=>setPassword(e.target.value)}/>
</div>
<div className="mb-2">
    <button className='btn btn-primary' onClick={handleSubmit}>Reset Password</button>
</div>
        </form>
    </div>
</div>
    </div>
    </>
  )
}

export default ResetPassword