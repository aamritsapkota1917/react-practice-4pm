import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { signin,authenticate,isAuthenticated } from '../auth/authIndex'

const Login = () => {

  const Navigate=useNavigate()
  const {user}=isAuthenticated()
  const[values,setValues]=useState({
    email:'',
    password:'',
    error:'',
    redirectTo:false

  })

  const{email,password,error,redirectTo}=values

  //onChange
  const handleChange=name=>event=>{
    setValues({...values,error:false,[name]:event.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    setValues({...values,error:false})

    //signin process
    signin({email,password})
    .then(data=>{
      if(data.error){
        setValues({...values,error:data.error})
      }
      else{
        authenticate(data,()=>{
          setValues({...values,redirectTo:true})
        })

      }
    })
  }

//to redirect user 
const redirectUser=()=>{
  if(redirectTo){
   if(user && user.role===1){
    return Navigate('/admin/dashboard')
   }
   else{
    Navigate('/profile')
   }
  }
}
//to show error message 
    
const showError=()=>(
  //error lekda { } => yo bracket use hunna kaile ni 
  error && <div className="alert alert danger"> 
      {error}
  </div>
)



  return (
    <div className='container my-5'>
        <div className='row d-flex justify-content-center'>
         <div className='col-md-6 shadow p-3'>

         <form>

          {showError()}
          {redirectUser()}


  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    onChange={handleChange('email')} value={email}
    />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
    onChange={handleChange('password')} value={password}
    />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary"
  onClick={handleSubmit}
  >Submit</button>

<div className="my-2">
  <div className='d-flex justify-content-between'>
    <Link to='/forgetpassword' className='text-decoration-none' >Forget Password</Link>
    <Link to='/signup' className='text-decoration-none'>Creat Account Instead</Link>
  </div>
</div>

</form>

         </div>
        </div>
    </div>
  )
}

export default Login