import React, {useState}from 'react'
import { forgetpassword } from '../auth/authIndex'
const ForgetPassword = () => {
    const[email,setEmail]=useState('')
    const[error,setError]=useState('')
    const [sucess,setSucess]=useState(false)

    const handleSubmit=e=>{
e.preventDefault()
forgetpassword({email})
.then(data=>{
    if(data.error){
        setError(data.error)
        setSucess(false)
    }
    else{
        setError('')
        setSucess(true)
        setEmail('')
    }
})
.catch(err=>console.log(err))
    }

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
        Password reset link has been send to your Email
    </div>
)

  return (
    <>
    <div className="container my-5">
<div className="row d-flex justify-content-center">
    <div className="col-md-5">
        <form className='shadow p-3'>
            {showError()}
            {showSucess()}
<h2 className="text-center text-muted">
    Forget Password
</h2>
<div className="mb-2">
    <label htmlFor="email">Email</label>
    <input type="email" name='email' id='email'
    className='form-control' value={email} onChange={e=>setEmail(e.target.value)}/>
</div>
<div className="mb-2">
    <button className='btn btn-primary' onClick={handleSubmit}>Send Password Reset Link</button>
</div>
        </form>
    </div>
</div>
    </div>
    </>
  )
}

export default ForgetPassword